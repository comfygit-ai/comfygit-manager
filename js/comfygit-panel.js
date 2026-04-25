var wc = Object.defineProperty;
var _c = (e, t, o) => t in e ? wc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var hn = (e, t, o) => _c(e, typeof t != "symbol" ? t + "" : t, o);
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
}, Ti = () => !1, Kn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ol = (e) => e.startsWith("onUpdate:"), Mt = Object.assign, nl = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, kc = Object.prototype.hasOwnProperty, dt = (e, t) => kc.call(e, t), Ze = Array.isArray, yo = (e) => cn(e) === "[object Map]", To = (e) => cn(e) === "[object Set]", Ml = (e) => cn(e) === "[object Date]", tt = (e) => typeof e == "function", bt = (e) => typeof e == "string", fs = (e) => typeof e == "symbol", vt = (e) => e !== null && typeof e == "object", Mi = (e) => (vt(e) || tt(e)) && tt(e.then) && tt(e.catch), Pi = Object.prototype.toString, cn = (e) => Pi.call(e), bc = (e) => cn(e).slice(8, -1), Ri = (e) => cn(e) === "[object Object]", al = (e) => bt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Go = /* @__PURE__ */ sl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Jn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((o) => t[o] || (t[o] = e(o)));
}, $c = /-\w/g, as = Jn(
  (e) => e.replace($c, (t) => t.slice(1).toUpperCase())
), Cc = /\B([A-Z])/g, qs = Jn(
  (e) => e.replace(Cc, "-$1").toLowerCase()
), Qn = Jn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Sa = Jn(
  (e) => e ? `on${Qn(e)}` : ""
), Gs = (e, t) => !Object.is(e, t), Sn = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, Ni = (e, t, o, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, Yn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, xc = (e) => {
  const t = bt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Pl;
const Xn = () => Pl || (Pl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Wt(e) {
  if (Ze(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = bt(n) ? Tc(n) : Wt(n);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if (bt(e) || vt(e))
    return e;
}
const Sc = /;(?![^(]*\))/g, Ic = /:([^]+)/, Ec = /\/\*[^]*?\*\//g;
function Tc(e) {
  const t = {};
  return e.replace(Ec, "").split(Sc).forEach((o) => {
    if (o) {
      const n = o.split(Ic);
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
  else if (vt(e))
    for (const o in e)
      e[o] && (t += o + " ");
  return t.trim();
}
const Mc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Pc = /* @__PURE__ */ sl(Mc);
function Li(e) {
  return !!e || e === "";
}
function Rc(e, t) {
  if (e.length !== t.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = no(e[n], t[n]);
  return o;
}
function no(e, t) {
  if (e === t) return !0;
  let o = Ml(e), n = Ml(t);
  if (o || n)
    return o && n ? e.getTime() === t.getTime() : !1;
  if (o = fs(e), n = fs(t), o || n)
    return e === t;
  if (o = Ze(e), n = Ze(t), o || n)
    return o && n ? Rc(e, t) : !1;
  if (o = vt(e), n = vt(t), o || n) {
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
const Di = (e) => !!(e && e.__v_isRef === !0), f = (e) => bt(e) ? e : e == null ? "" : Ze(e) || vt(e) && (e.toString === Pi || !tt(e.toString)) ? Di(e) ? f(e.value) : JSON.stringify(e, Oi, 2) : String(e), Oi = (e, t) => Di(t) ? Oi(e, t.value) : yo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [n, l], r) => (o[Ia(n, r) + " =>"] = l, o),
    {}
  )
} : To(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => Ia(o))
} : fs(t) ? Ia(t) : vt(t) && !Ze(t) && !Ri(t) ? String(t) : t, Ia = (e, t = "") => {
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
class Nc {
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
class Ai {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || zi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Rl(this), Vi(this);
    const t = ht, o = us;
    ht = this, us = !0;
    try {
      return this.fn();
    } finally {
      Fi(this), ht = t, us = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        cl(t);
      this.deps = this.depsTail = void 0, Rl(this), this.onStop && this.onStop(), this.flags &= -2;
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
let Ui = 0, jo, Ho;
function zi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ho, Ho = e;
    return;
  }
  e.next = jo, jo = e;
}
function il() {
  Ui++;
}
function rl() {
  if (--Ui > 0)
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
function Vi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Fi(e) {
  let t, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), cl(n), Dc(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = t, e.depsTail = o;
}
function Va(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Bi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Bi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === en) || (e.globalVersion = en, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Va(e))))
    return;
  e.flags |= 2;
  const t = e.dep, o = ht, n = us;
  ht = e, us = !0;
  try {
    Vi(e);
    const l = e.fn(e._value);
    (t.version === 0 || Gs(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    ht = o, us = n, Fi(e), e.flags &= -3;
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
function Dc(e) {
  const { prevDep: t, nextDep: o } = e;
  t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
}
let us = !0;
const Wi = [];
function Ls() {
  Wi.push(us), us = !1;
}
function Ds() {
  const e = Wi.pop();
  us = e === void 0 ? !0 : e;
}
function Rl(e) {
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
class Oc {
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
      o = this.activeLink = new Oc(ht, this), ht.deps ? (o.prevDep = ht.depsTail, ht.depsTail.nextDep = o, ht.depsTail = o) : ht.deps = ht.depsTail = o, Gi(o);
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
function Gi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Gi(n);
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
function Zn(e) {
  return zt(e = it(e), "iterate", tn), e;
}
function Fs(e, t) {
  return Os(e) ? so(e) ? So(ms(t)) : So(t) : ms(t);
}
const Ac = {
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
    return Lo(this, "pop");
  },
  push(...e) {
    return Lo(this, "push", e);
  },
  reduce(e, ...t) {
    return Nl(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Nl(this, "reduceRight", e, t);
  },
  shift() {
    return Lo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Is(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Lo(this, "splice", e);
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
    return Lo(this, "unshift", e);
  },
  values() {
    return Ta(this, "values", (e) => Fs(this, e));
  }
};
function Ta(e, t, o) {
  const n = Zn(e), l = n[t]();
  return n !== e && !os(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const Uc = Array.prototype;
function Is(e, t, o, n, l, r) {
  const c = Zn(e), u = c !== e && !os(e), d = c[t];
  if (d !== Uc[t]) {
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
function Nl(e, t, o, n) {
  const l = Zn(e);
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
function Lo(e, t, o = []) {
  Ls(), il();
  const n = it(e)[t].apply(e, o);
  return rl(), Ds(), n;
}
const zc = /* @__PURE__ */ sl("__proto__,__v_isRef,__isVue"), ji = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(fs)
);
function Vc(e) {
  fs(e) || (e = String(e));
  const t = it(this);
  return zt(t, "has", e), t.hasOwnProperty(e);
}
class Hi {
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
      return n === (l ? r ? Qc : Qi : r ? Ji : Ki).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const c = Ze(t);
    if (!l) {
      let d;
      if (c && (d = Ac[o]))
        return d;
      if (o === "hasOwnProperty")
        return Vc;
    }
    const u = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Gt(t) ? t : n
    );
    if ((fs(o) ? ji.has(o) : zc(o)) || (l || zt(t, "get", o), r))
      return u;
    if (Gt(u)) {
      const d = c && al(o) ? u : u.value;
      return l && vt(d) ? Dn(d) : d;
    }
    return vt(u) ? l ? Dn(u) : io(u) : u;
  }
}
class qi extends Hi {
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
    return (!fs(o) || !ji.has(o)) && zt(t, "has", o), n;
  }
  ownKeys(t) {
    return zt(
      t,
      "iterate",
      Ze(t) ? "length" : to
    ), Reflect.ownKeys(t);
  }
}
class Fc extends Hi {
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
const Bc = /* @__PURE__ */ new qi(), Wc = /* @__PURE__ */ new Fc(), Gc = /* @__PURE__ */ new qi(!0);
const Wa = (e) => e, yn = (e) => Reflect.getPrototypeOf(e);
function jc(e, t, o) {
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
function wn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Hc(e, t) {
  const o = {
    get(l) {
      const r = this.__v_raw, c = it(r), u = it(l);
      e || (Gs(l, u) && zt(c, "get", l), zt(c, "get", u));
      const { has: d } = yn(c), v = t ? Wa : e ? So : ms;
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
      add: wn("add"),
      set: wn("set"),
      delete: wn("delete"),
      clear: wn("clear")
    } : {
      add(l) {
        !t && !os(l) && !Os(l) && (l = it(l));
        const r = it(this);
        return yn(r).has.call(r, l) || (r.add(l), Ps(r, "add", l, l)), this;
      },
      set(l, r) {
        !t && !os(r) && !Os(r) && (r = it(r));
        const c = it(this), { has: u, get: d } = yn(c);
        let v = u.call(c, l);
        v || (l = it(l), v = u.call(c, l));
        const m = d.call(c, l);
        return c.set(l, r), v ? Gs(r, m) && Ps(c, "set", l, r) : Ps(c, "add", l, r), this;
      },
      delete(l) {
        const r = it(this), { has: c, get: u } = yn(r);
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
    o[l] = jc(l, e, t);
  }), o;
}
function dl(e, t) {
  const o = Hc(e, t);
  return (n, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    dt(o, l) && l in n ? o : n,
    l,
    r
  );
}
const qc = {
  get: /* @__PURE__ */ dl(!1, !1)
}, Kc = {
  get: /* @__PURE__ */ dl(!1, !0)
}, Jc = {
  get: /* @__PURE__ */ dl(!0, !1)
};
const Ki = /* @__PURE__ */ new WeakMap(), Ji = /* @__PURE__ */ new WeakMap(), Qi = /* @__PURE__ */ new WeakMap(), Qc = /* @__PURE__ */ new WeakMap();
function Yc(e) {
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
function Xc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Yc(bc(e));
}
function io(e) {
  return Os(e) ? e : fl(
    e,
    !1,
    Bc,
    qc,
    Ki
  );
}
function Zc(e) {
  return fl(
    e,
    !1,
    Gc,
    Kc,
    Ji
  );
}
function Dn(e) {
  return fl(
    e,
    !0,
    Wc,
    Jc,
    Qi
  );
}
function fl(e, t, o, n, l) {
  if (!vt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Xc(e);
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
function eu(e) {
  return !dt(e, "__v_skip") && Object.isExtensible(e) && Ni(e, "__v_skip", !0), e;
}
const ms = (e) => vt(e) ? io(e) : e, So = (e) => vt(e) ? Dn(e) : e;
function Gt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function b(e) {
  return tu(e, !1);
}
function tu(e, t) {
  return Gt(e) ? e : new su(e, t);
}
class su {
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
const ou = {
  get: (e, t, o) => t === "__v_raw" ? e : st(Reflect.get(e, t, o)),
  set: (e, t, o, n) => {
    const l = e[t];
    return Gt(l) && !Gt(o) ? (l.value = o, !0) : Reflect.set(e, t, o, n);
  }
};
function Yi(e) {
  return so(e) ? e : new Proxy(e, ou);
}
class nu {
  constructor(t, o, n) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new ul(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = en - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ht !== this)
      return zi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Bi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function au(e, t, o = !1) {
  let n, l;
  return tt(e) ? n = e : (n = e.get, l = e.set), new nu(n, l, o);
}
const _n = {}, On = /* @__PURE__ */ new WeakMap();
let Zs;
function lu(e, t = !1, o = Zs) {
  if (o) {
    let n = On.get(o);
    n || On.set(o, n = []), n.push(e);
  }
}
function iu(e, t, o = gt) {
  const { immediate: n, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = o, v = (T) => l ? T : os(T) || l === !1 || l === 0 ? Rs(T, 1) : Rs(T);
  let m, p, w, y, _ = !1, x = !1;
  if (Gt(e) ? (p = () => e.value, _ = os(e)) : so(e) ? (p = () => v(e), _ = !0) : Ze(e) ? (x = !0, _ = e.some((T) => so(T) || os(T)), p = () => e.map((T) => {
    if (Gt(T))
      return T.value;
    if (so(T))
      return v(T);
    if (tt(T))
      return d ? d(T, 2) : T();
  })) : tt(e) ? t ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Ls();
      try {
        w();
      } finally {
        Ds();
      }
    }
    const T = Zs;
    Zs = m;
    try {
      return d ? d(e, 3, [y]) : e(y);
    } finally {
      Zs = T;
    }
  } : p = bs, t && l) {
    const T = p, L = l === !0 ? 1 / 0 : l;
    p = () => Rs(T(), L);
  }
  const C = Lc(), S = () => {
    m.stop(), C && C.active && nl(C.effects, m);
  };
  if (r && t) {
    const T = t;
    t = (...L) => {
      T(...L), S();
    };
  }
  let N = x ? new Array(e.length).fill(_n) : _n;
  const M = (T) => {
    if (!(!(m.flags & 1) || !m.dirty && !T))
      if (t) {
        const L = m.run();
        if (l || _ || (x ? L.some((O, J) => Gs(O, N[J])) : Gs(L, N))) {
          w && w();
          const O = Zs;
          Zs = m;
          try {
            const J = [
              L,
              // pass undefined as the old value when it's changed for the first time
              N === _n ? void 0 : x && N[0] === _n ? [] : N,
              y
            ];
            N = L, d ? d(t, 3, J) : (
              // @ts-expect-error
              t(...J)
            );
          } finally {
            Zs = O;
          }
        }
      } else
        m.run();
  };
  return u && u(M), m = new Ai(p), m.scheduler = c ? () => c(M, !1) : M, y = (T) => lu(T, !1, m), w = m.onStop = () => {
    const T = On.get(m);
    if (T) {
      if (d)
        d(T, 4);
      else
        for (const L of T) L();
      On.delete(m);
    }
  }, t ? n ? M(!0) : N = m.run() : c ? c(M.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function Rs(e, t = 1 / 0, o) {
  if (t <= 0 || !vt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= t))
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
  else if (Ri(e)) {
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
    ea(l, t, o);
  }
}
function vs(e, t, o, n) {
  if (tt(e)) {
    const l = un(e, t, o, n);
    return l && Mi(l) && l.catch((r) => {
      ea(r, t, o);
    }), l;
  }
  if (Ze(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(vs(e[r], t, o, n));
    return l;
  }
}
function ea(e, t, o, n = !0) {
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
      Ls(), un(r, null, 10, [
        e,
        d,
        v
      ]), Ds();
      return;
    }
  }
  ru(e, o, l, n, c);
}
function ru(e, t, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Jt = [];
let ws = -1;
const wo = [];
let Bs = null, vo = 0;
const Xi = /* @__PURE__ */ Promise.resolve();
let An = null;
function Pt(e) {
  const t = An || Xi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function cu(e) {
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
    !(e.flags & 2) && t >= sn(o) ? Jt.push(e) : Jt.splice(cu(t), 0, e), e.flags |= 1, Zi();
  }
}
function Zi() {
  An || (An = Xi.then(tr));
}
function uu(e) {
  Ze(e) ? wo.push(...e) : Bs && e.id === -1 ? Bs.splice(vo + 1, 0, e) : e.flags & 1 || (wo.push(e), e.flags |= 1), Zi();
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
function er(e) {
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
function tr(e) {
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
    ws = -1, Jt.length = 0, er(), An = null, (Jt.length || wo.length) && tr();
  }
}
let Lt = null, sr = null;
function Un(e) {
  const t = Lt;
  return Lt = e, sr = e && e.type.__scopeId || null, t;
}
function g(e, t = Lt, o) {
  if (!t || e._n)
    return e;
  const n = (...l) => {
    n._d && Fn(-1);
    const r = Un(t);
    let c;
    try {
      c = e(...l);
    } finally {
      Un(r), n._d && Fn(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Tt(e, t) {
  if (Lt === null)
    return e;
  const o = la(Lt), n = e.dirs || (e.dirs = []);
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
    d && (Ls(), vs(d, o, 8, [
      e.el,
      u,
      e,
      t
    ]), Ds());
  }
}
const or = Symbol("_vte"), nr = (e) => e.__isTeleport, qo = (e) => e && (e.disabled || e.disabled === ""), Dl = (e) => e && (e.defer || e.defer === ""), Ol = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Al = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ga = (e, t) => {
  const o = e && e.to;
  return bt(o) ? t ? t(o) : null : o;
}, ar = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, o, n, l, r, c, u, d, v) {
    const {
      mc: m,
      pc: p,
      pbc: w,
      o: { insert: y, querySelector: _, createText: x, createComment: C }
    } = v, S = qo(t.props);
    let { shapeFlag: N, children: M, dynamicChildren: T } = t;
    if (e == null) {
      const L = t.el = x(""), O = t.anchor = x("");
      y(L, o, n), y(O, o, n);
      const J = (F, Y) => {
        N & 16 && m(
          M,
          F,
          Y,
          l,
          r,
          c,
          u,
          d
        );
      }, P = () => {
        const F = t.target = Ga(t.props, _), Y = lr(F, t, x, y);
        F && (c !== "svg" && Ol(F) ? c = "svg" : c !== "mathml" && Al(F) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(F), S || (J(F, Y), In(t, !1)));
      };
      S && (J(o, O), In(t, !0)), Dl(t.props) ? (t.el.__isMounted = !1, qt(() => {
        P(), delete t.el.__isMounted;
      }, r)) : P();
    } else {
      if (Dl(t.props) && e.el.__isMounted === !1) {
        qt(() => {
          ar.process(
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
      const L = t.anchor = e.anchor, O = t.target = e.target, J = t.targetAnchor = e.targetAnchor, P = qo(e.props), F = P ? o : O, Y = P ? L : J;
      if (c === "svg" || Ol(O) ? c = "svg" : (c === "mathml" || Al(O)) && (c = "mathml"), T ? (w(
        e.dynamicChildren,
        T,
        F,
        l,
        r,
        c,
        u
      ), wl(e, t, !0)) : d || p(
        e,
        t,
        F,
        Y,
        l,
        r,
        c,
        u,
        !1
      ), S)
        P ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : kn(
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
        ee && kn(
          t,
          ee,
          null,
          v,
          0
        );
      } else P && kn(
        t,
        O,
        J,
        v,
        1
      );
      In(t, S);
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
  move: kn,
  hydrate: du
};
function kn(e, t, o, { o: { insert: n }, m: l }, r = 2) {
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
function du(e, t, o, n, l, r, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: v, createText: m }
}, p) {
  function w(x, C, S, N) {
    C.anchor = p(
      c(x),
      C,
      u(x),
      o,
      n,
      l,
      r
    ), C.targetStart = S, C.targetAnchor = N;
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
        let C = x;
        for (; C; ) {
          if (C && C.nodeType === 8) {
            if (C.data === "teleport start anchor")
              t.targetStart = C;
            else if (C.data === "teleport anchor") {
              t.targetAnchor = C, y._lpa = t.targetAnchor && c(t.targetAnchor);
              break;
            }
          }
          C = c(C);
        }
        t.targetAnchor || lr(y, t, m, v), p(
          x && c(x),
          t,
          y,
          o,
          n,
          l,
          r
        );
      }
    In(t, _);
  } else _ && t.shapeFlag & 16 && w(e, t, e, c(e));
  return t.anchor && c(t.anchor);
}
const Dt = ar;
function In(e, t) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (t ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function lr(e, t, o, n) {
  const l = t.targetStart = o(""), r = t.targetAnchor = o("");
  return l[or] = r, e && (n(l, e), n(r, e)), r;
}
const Ts = Symbol("_leaveCb"), bn = Symbol("_enterCb");
function ir() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return rt(() => {
    e.isMounted = !0;
  }), oa(() => {
    e.isUnmounting = !0;
  }), e;
}
const ts = [Function, Array], rr = {
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
}, cr = (e) => {
  const t = e.subTree;
  return t.component ? cr(t.component) : t;
}, fu = {
  name: "BaseTransition",
  props: rr,
  setup(e, { slots: t }) {
    const o = kl(), n = ir();
    return () => {
      const l = t.default && pl(t.default(), !0);
      if (!l || !l.length)
        return;
      const r = ur(l), c = it(e), { mode: u } = c;
      if (n.isLeaving)
        return Pa(r);
      const d = Ul(r);
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
      let m = o.subTree && Ul(o.subTree);
      if (m && m.type !== Ft && !eo(m, d) && cr(o).type !== Ft) {
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
          const x = dr(
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
function ur(e) {
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
const mu = fu;
function dr(e, t) {
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
    onBeforeAppear: C,
    onAppear: S,
    onAfterAppear: N,
    onAppearCancelled: M
  } = t, T = String(e.key), L = dr(o, e), O = (F, Y) => {
    F && vs(
      F,
      n,
      9,
      Y
    );
  }, J = (F, Y) => {
    const ee = Y[1];
    O(F, Y), Ze(F) ? F.every((ce) => ce.length <= 1) && ee() : F.length <= 1 && ee();
  }, P = {
    mode: c,
    persisted: u,
    beforeEnter(F) {
      let Y = d;
      if (!o.isMounted)
        if (r)
          Y = C || d;
        else
          return;
      F[Ts] && F[Ts](
        !0
        /* cancelled */
      );
      const ee = L[T];
      ee && eo(e, ee) && ee.el[Ts] && ee.el[Ts](), O(Y, [F]);
    },
    enter(F) {
      let Y = v, ee = m, ce = p;
      if (!o.isMounted)
        if (r)
          Y = S || v, ee = N || m, ce = M || p;
        else
          return;
      let he = !1;
      const ne = F[bn] = (K) => {
        he || (he = !0, K ? O(ce, [F]) : O(ee, [F]), P.delayedLeave && P.delayedLeave(), F[bn] = void 0);
      };
      Y ? J(Y, [F, ne]) : ne();
    },
    leave(F, Y) {
      const ee = String(e.key);
      if (F[bn] && F[bn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return Y();
      O(w, [F]);
      let ce = !1;
      const he = F[Ts] = (ne) => {
        ce || (ce = !0, Y(), ne ? O(x, [F]) : O(_, [F]), F[Ts] = void 0, L[ee] === e && delete L[ee]);
      };
      L[ee] = e, y ? J(y, [F, he]) : he();
    },
    clone(F) {
      const Y = on(
        F,
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
  if (ta(e))
    return e = js(e), e.children = null, e;
}
function Ul(e) {
  if (!ta(e))
    return nr(e.type) && e.children ? ur(e.children) : e;
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
    c.type === j ? (c.patchFlag & 128 && l++, n = n.concat(
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
function fr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const zn = /* @__PURE__ */ new WeakMap();
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
  const r = n.shapeFlag & 4 ? la(n.component) : n.el, c = l ? null : r, { i: u, r: d } = e, v = t && t.r, m = u.refs === gt ? u.refs = {} : u.refs, p = u.setupState, w = it(p), y = p === gt ? Ti : (_) => dt(w, _);
  if (v != null && v !== d) {
    if (zl(t), bt(v))
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
      const C = () => {
        if (e.f) {
          const S = _ ? y(d) ? p[d] : m[d] : d.value;
          if (l)
            Ze(S) && nl(S, r);
          else if (Ze(S))
            S.includes(r) || S.push(r);
          else if (_)
            m[d] = [r], y(d) && (p[d] = m[d]);
          else {
            const N = [r];
            d.value = N, e.k && (m[e.k] = N);
          }
        } else _ ? (m[d] = c, y(d) && (p[d] = c)) : x && (d.value = c, e.k && (m[e.k] = c));
      };
      if (c) {
        const S = () => {
          C(), zn.delete(e);
        };
        S.id = -1, zn.set(e, S), qt(S, o);
      } else
        zl(e), C();
    }
  }
}
function zl(e) {
  const t = zn.get(e);
  t && (t.flags |= 8, zn.delete(e));
}
Xn().requestIdleCallback;
Xn().cancelIdleCallback;
const _o = (e) => !!e.type.__asyncLoader, ta = (e) => e.type.__isKeepAlive;
function vu(e, t) {
  mr(e, "a", t);
}
function pu(e, t) {
  mr(e, "da", t);
}
function mr(e, t, o = Bt) {
  const n = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (sa(t, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      ta(l.parent.vnode) && gu(n, t, o, l), l = l.parent;
  }
}
function gu(e, t, o, n) {
  const l = sa(
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
function sa(e, t, o = Bt, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = t.__weh || (t.__weh = (...c) => {
      Ls();
      const u = dn(o), d = vs(t, o, e, c);
      return u(), Ds(), d;
    });
    return n ? l.unshift(r) : l.push(r), r;
  }
}
const As = (e) => (t, o = Bt) => {
  (!ln || e === "sp") && sa(e, (...n) => t(...n), o);
}, hu = As("bm"), rt = As("m"), yu = As(
  "bu"
), vr = As("u"), oa = As(
  "bum"
), Mo = As("um"), wu = As(
  "sp"
), _u = As("rtg"), ku = As("rtc");
function bu(e, t = Bt) {
  sa("ec", e, t);
}
const $u = "components", pr = Symbol.for("v-ndc");
function gl(e) {
  return bt(e) ? Cu($u, e, !1) || e : e || pr;
}
function Cu(e, t, o = !0, n = !1) {
  const l = Lt || Bt;
  if (l) {
    const r = l.type;
    {
      const u = fd(
        r,
        !1
      );
      if (u && (u === t || u === as(t) || u === Qn(as(t))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Vl(l[e] || r[e], t) || // global registration
      Vl(l.appContext[e], t)
    );
    return !c && n ? r : c;
  }
}
function Vl(e, t) {
  return e && (e[t] || e[as(t)] || e[Qn(as(t))]);
}
function we(e, t, o, n) {
  let l;
  const r = o, c = Ze(e);
  if (c || bt(e)) {
    const u = c && so(e);
    let d = !1, v = !1;
    u && (d = !os(e), v = Os(e), e = Zn(e)), l = new Array(e.length);
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
  } else if (vt(e))
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
  if (Lt.ce || Lt.parent && _o(Lt.parent) && Lt.parent.ce) {
    const v = Object.keys(o).length > 0;
    return t !== "default" && (o.name = t), a(), R(
      j,
      null,
      [k("slot", o, n && n())],
      v ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), a();
  const c = r && gr(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = R(
    j,
    {
      key: (u && !fs(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!c && n ? "_fb" : "")
    },
    c || (n ? n() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function gr(e) {
  return e.some((t) => an(t) ? !(t.type === Ft || t.type === j && !gr(t.children)) : !0) ? e : null;
}
const ja = (e) => e ? Dr(e) ? la(e) : ja(e.parent) : null, Jo = (
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
    $options: (e) => yr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      vl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Pt.bind(e.proxy)),
    $watch: (e) => Ou.bind(e)
  })
), Ra = (e, t) => e !== gt && !e.__isScriptSetup && dt(e, t), xu = {
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
function Fl(e) {
  return Ze(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
let Ha = !0;
function Su(e) {
  const t = yr(e), o = e.proxy, n = e.ctx;
  Ha = !1, t.beforeCreate && Bl(t.beforeCreate, e, "bc");
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
    deactivated: C,
    beforeDestroy: S,
    beforeUnmount: N,
    destroyed: M,
    unmounted: T,
    render: L,
    renderTracked: O,
    renderTriggered: J,
    errorCaptured: P,
    serverPrefetch: F,
    // public API
    expose: Y,
    inheritAttrs: ee,
    // assets
    components: ce,
    directives: he,
    filters: ne
  } = t;
  if (v && Iu(v, n, null), c)
    for (const Le in c) {
      const oe = c[Le];
      tt(oe) && (n[Le] = oe.bind(o));
    }
  if (l) {
    const Le = l.call(o, o);
    vt(Le) && (e.data = io(Le));
  }
  if (Ha = !0, r)
    for (const Le in r) {
      const oe = r[Le], pe = tt(oe) ? oe.bind(o, o) : tt(oe.get) ? oe.get.bind(o, o) : bs, A = !tt(oe) && tt(oe.set) ? oe.set.bind(o) : bs, fe = D({
        get: pe,
        set: A
      });
      Object.defineProperty(n, Le, {
        enumerable: !0,
        configurable: !0,
        get: () => fe.value,
        set: (Re) => fe.value = Re
      });
    }
  if (u)
    for (const Le in u)
      hr(u[Le], n, o, Le);
  if (d) {
    const Le = tt(d) ? d.call(o) : d;
    Reflect.ownKeys(Le).forEach((oe) => {
      Nu(oe, Le[oe]);
    });
  }
  m && Bl(m, e, "c");
  function le(Le, oe) {
    Ze(oe) ? oe.forEach((pe) => Le(pe.bind(o))) : oe && Le(oe.bind(o));
  }
  if (le(hu, p), le(rt, w), le(yu, y), le(vr, _), le(vu, x), le(pu, C), le(bu, P), le(ku, O), le(_u, J), le(oa, N), le(Mo, T), le(wu, F), Ze(Y))
    if (Y.length) {
      const Le = e.exposed || (e.exposed = {});
      Y.forEach((oe) => {
        Object.defineProperty(Le, oe, {
          get: () => o[oe],
          set: (pe) => o[oe] = pe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  L && e.render === bs && (e.render = L), ee != null && (e.inheritAttrs = ee), ce && (e.components = ce), he && (e.directives = he), F && fr(e);
}
function Iu(e, t, o = bs) {
  Ze(e) && (e = qa(e));
  for (const n in e) {
    const l = e[n];
    let r;
    vt(l) ? "default" in l ? r = En(
      l.from || n,
      l.default,
      !0
    ) : r = En(l.from || n) : r = En(l), Gt(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : t[n] = r;
  }
}
function Bl(e, t, o) {
  vs(
    Ze(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function hr(e, t, o, n) {
  let l = n.includes(".") ? kr(o, n) : () => o[n];
  if (bt(e)) {
    const r = t[e];
    tt(r) && kt(l, r);
  } else if (tt(e))
    kt(l, e.bind(o));
  else if (vt(e))
    if (Ze(e))
      e.forEach((r) => hr(r, t, o, n));
    else {
      const r = tt(e.handler) ? e.handler.bind(o) : t[e.handler];
      tt(r) && kt(l, r, e);
    }
}
function yr(e) {
  const t = e.type, { mixins: o, extends: n } = t, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(t);
  let d;
  return u ? d = u : !l.length && !o && !n ? d = t : (d = {}, l.length && l.forEach(
    (v) => Vn(d, v, c, !0)
  ), Vn(d, t, c)), vt(t) && r.set(t, d), d;
}
function Vn(e, t, o, n = !1) {
  const { mixins: l, extends: r } = t;
  r && Vn(e, r, o, !0), l && l.forEach(
    (c) => Vn(e, c, o, !0)
  );
  for (const c in t)
    if (!(n && c === "expose")) {
      const u = Eu[c] || o && o[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const Eu = {
  data: Wl,
  props: Gl,
  emits: Gl,
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
  watch: Mu,
  // provide / inject
  provide: Wl,
  inject: Tu
};
function Wl(e, t) {
  return t ? e ? function() {
    return Mt(
      tt(e) ? e.call(this, this) : e,
      tt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Tu(e, t) {
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
function Gl(e, t) {
  return e ? Ze(e) && Ze(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Mt(
    /* @__PURE__ */ Object.create(null),
    Fl(e),
    Fl(t ?? {})
  ) : t;
}
function Mu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = Mt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    o[n] = Ht(e[n], t[n]);
  return o;
}
function wr() {
  return {
    app: null,
    config: {
      isNativeTag: Ti,
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
let Pu = 0;
function Ru(e, t) {
  return function(n, l = null) {
    tt(n) || (n = Mt({}, n)), l != null && !vt(l) && (l = null);
    const r = wr(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const v = r.app = {
      _uid: Pu++,
      _component: n,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: vd,
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
          return y.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(y, m, w), d = !0, v._container = m, m.__vue_app__ = v, la(y.component);
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
function Nu(e, t) {
  if (Bt) {
    let o = Bt.provides;
    const n = Bt.parent && Bt.parent.provides;
    n === o && (o = Bt.provides = Object.create(n)), o[e] = t;
  }
}
function En(e, t, o = !1) {
  const n = kl();
  if (n || ko) {
    let l = ko ? ko._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && tt(t) ? t.call(n && n.proxy) : t;
  }
}
const Lu = Symbol.for("v-scx"), Du = () => En(Lu);
function kt(e, t, o) {
  return _r(e, t, o);
}
function _r(e, t, o = gt) {
  const { immediate: n, deep: l, flush: r, once: c } = o, u = Mt({}, o), d = t && n || !t && r !== "post";
  let v;
  if (ln) {
    if (r === "sync") {
      const y = Du();
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
  const w = iu(e, t, u);
  return ln && (v ? v.push(w) : d && w()), w;
}
function Ou(e, t, o) {
  const n = this.proxy, l = bt(e) ? e.includes(".") ? kr(n, e) : () => n[e] : e.bind(n, n);
  let r;
  tt(t) ? r = t : (r = t.handler, o = t);
  const c = dn(this), u = _r(l, r.bind(n), o);
  return c(), u;
}
function kr(e, t) {
  const o = t.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const Au = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${as(t)}Modifiers`] || e[`${qs(t)}Modifiers`];
function Uu(e, t, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || gt;
  let l = o;
  const r = t.startsWith("update:"), c = r && Au(n, t.slice(7));
  c && (c.trim && (l = o.map((m) => bt(m) ? m.trim() : m)), c.number && (l = o.map(Yn)));
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
const zu = /* @__PURE__ */ new WeakMap();
function br(e, t, o = !1) {
  const n = o ? zu : t.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!tt(e)) {
    const d = (v) => {
      const m = br(v, t, !0);
      m && (u = !0, Mt(c, m));
    };
    !o && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (vt(e) && n.set(e, null), null) : (Ze(r) ? r.forEach((d) => c[d] = null) : Mt(c, r), vt(e) && n.set(e, c), c);
}
function na(e, t) {
  return !e || !Kn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), dt(e, t[0].toLowerCase() + t.slice(1)) || dt(e, qs(t)) || dt(e, t));
}
function jl(e) {
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
  } = e, C = Un(e);
  let S, N;
  try {
    if (o.shapeFlag & 4) {
      const T = l || n, L = T;
      S = ks(
        v.call(
          L,
          T,
          m,
          p,
          y,
          w,
          _
        )
      ), N = u;
    } else {
      const T = t;
      S = ks(
        T.length > 1 ? T(
          p,
          { attrs: u, slots: c, emit: d }
        ) : T(
          p,
          null
        )
      ), N = t.props ? u : Vu(u);
    }
  } catch (T) {
    Qo.length = 0, ea(T, e, 1), S = k(Ft);
  }
  let M = S;
  if (N && x !== !1) {
    const T = Object.keys(N), { shapeFlag: L } = M;
    T.length && L & 7 && (r && T.some(ol) && (N = Fu(
      N,
      r
    )), M = js(M, N, !1, !0));
  }
  return o.dirs && (M = js(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(o.dirs) : o.dirs), o.transition && ao(M, o.transition), S = M, Un(C), S;
}
const Vu = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || Kn(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, Fu = (e, t) => {
  const o = {};
  for (const n in e)
    (!ol(n) || !(n.slice(9) in t)) && (o[n] = e[n]);
  return o;
};
function Bu(e, t, o) {
  const { props: n, children: l, component: r } = e, { props: c, children: u, patchFlag: d } = t, v = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? Hl(n, c, v) : !!c;
    if (d & 8) {
      const m = t.dynamicProps;
      for (let p = 0; p < m.length; p++) {
        const w = m[p];
        if (c[w] !== n[w] && !na(v, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : n === c ? !1 : n ? c ? Hl(n, c, v) : !0 : !!c;
  return !1;
}
function Hl(e, t, o) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < n.length; l++) {
    const r = n[l];
    if (t[r] !== e[r] && !na(o, r))
      return !0;
  }
  return !1;
}
function Wu({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const $r = {}, Cr = () => Object.create($r), xr = (e) => Object.getPrototypeOf(e) === $r;
function Gu(e, t, o, n = !1) {
  const l = {}, r = Cr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Sr(e, t, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = n ? l : Zc(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function ju(e, t, o, n) {
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
        if (na(e.emitsOptions, w))
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
    Sr(e, t, l, r) && (v = !0);
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
function Sr(e, t, o, n) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (Go(d))
        continue;
      const v = t[d];
      let m;
      l && dt(l, m = as(d)) ? !r || !r.includes(m) ? o[m] = v : (u || (u = {}))[m] = v : na(e.emitsOptions, d) || (!(d in n) || v !== n[d]) && (n[d] = v, c = !0);
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
const Hu = /* @__PURE__ */ new WeakMap();
function Ir(e, t, o = !1) {
  const n = o ? Hu : t.propsCache, l = n.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!tt(e)) {
    const m = (p) => {
      d = !0;
      const [w, y] = Ir(p, t, !0);
      Mt(c, w), y && u.push(...y);
    };
    !o && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  if (!r && !d)
    return vt(e) && n.set(e, ho), ho;
  if (Ze(r))
    for (let m = 0; m < r.length; m++) {
      const p = as(r[m]);
      ql(p) && (c[p] = gt);
    }
  else if (r)
    for (const m in r) {
      const p = as(m);
      if (ql(p)) {
        const w = r[m], y = c[p] = Ze(w) || tt(w) ? { type: w } : Mt({}, w), _ = y.type;
        let x = !1, C = !0;
        if (Ze(_))
          for (let S = 0; S < _.length; ++S) {
            const N = _[S], M = tt(N) && N.name;
            if (M === "Boolean") {
              x = !0;
              break;
            } else M === "String" && (C = !1);
          }
        else
          x = tt(_) && _.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = x, y[
          1
          /* shouldCastTrue */
        ] = C, (x || dt(y, "default")) && u.push(p);
      }
    }
  const v = [c, u];
  return vt(e) && n.set(e, v), v;
}
function ql(e) {
  return e[0] !== "$" && !Go(e);
}
const hl = (e) => e === "_" || e === "_ctx" || e === "$stable", yl = (e) => Ze(e) ? e.map(ks) : [ks(e)], qu = (e, t, o) => {
  if (t._n)
    return t;
  const n = g((...l) => yl(t(...l)), o);
  return n._c = !1, n;
}, Er = (e, t, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (hl(l)) continue;
    const r = e[l];
    if (tt(r))
      t[l] = qu(l, r, n);
    else if (r != null) {
      const c = yl(r);
      t[l] = () => c;
    }
  }
}, Tr = (e, t) => {
  const o = yl(t);
  e.slots.default = () => o;
}, Mr = (e, t, o) => {
  for (const n in t)
    (o || !hl(n)) && (e[n] = t[n]);
}, Ku = (e, t, o) => {
  const n = e.slots = Cr();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Mr(n, t, o), o && Ni(n, "_", l, !0)) : Er(t, n);
  } else t && Tr(e, t);
}, Ju = (e, t, o) => {
  const { vnode: n, slots: l } = e;
  let r = !0, c = gt;
  if (n.shapeFlag & 32) {
    const u = t._;
    u ? o && u === 1 ? r = !1 : Mr(l, t, o) : (r = !t.$stable, Er(t, l)), c = t;
  } else t && (Tr(e, t), c = { default: 1 });
  if (r)
    for (const u in l)
      !hl(u) && c[u] == null && delete l[u];
}, qt = ed;
function Qu(e) {
  return Yu(e);
}
function Yu(e, t) {
  const o = Xn();
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
  } = e, x = (I, E, W, ge = null, ke = null, _e = null, De = void 0, Oe = null, Me = !!E.dynamicChildren) => {
    if (I === E)
      return;
    I && !eo(I, E) && (ge = q(I), Re(I, ke, _e, !0), I = null), E.patchFlag === -2 && (Me = !1, E.dynamicChildren = null);
    const { type: Ie, ref: Ge, shapeFlag: ze } = E;
    switch (Ie) {
      case aa:
        C(I, E, W, ge);
        break;
      case Ft:
        S(I, E, W, ge);
        break;
      case La:
        I == null && N(E, W, ge, De);
        break;
      case j:
        ce(
          I,
          E,
          W,
          ge,
          ke,
          _e,
          De,
          Oe,
          Me
        );
        break;
      default:
        ze & 1 ? L(
          I,
          E,
          W,
          ge,
          ke,
          _e,
          De,
          Oe,
          Me
        ) : ze & 6 ? he(
          I,
          E,
          W,
          ge,
          ke,
          _e,
          De,
          Oe,
          Me
        ) : (ze & 64 || ze & 128) && Ie.process(
          I,
          E,
          W,
          ge,
          ke,
          _e,
          De,
          Oe,
          Me,
          He
        );
    }
    Ge != null && ke ? Ko(Ge, I && I.ref, _e, E || I, !E) : Ge == null && I && I.ref != null && Ko(I.ref, null, _e, I, !0);
  }, C = (I, E, W, ge) => {
    if (I == null)
      n(
        E.el = u(E.children),
        W,
        ge
      );
    else {
      const ke = E.el = I.el;
      E.children !== I.children && v(ke, E.children);
    }
  }, S = (I, E, W, ge) => {
    I == null ? n(
      E.el = d(E.children || ""),
      W,
      ge
    ) : E.el = I.el;
  }, N = (I, E, W, ge) => {
    [I.el, I.anchor] = _(
      I.children,
      E,
      W,
      ge,
      I.el,
      I.anchor
    );
  }, M = ({ el: I, anchor: E }, W, ge) => {
    let ke;
    for (; I && I !== E; )
      ke = w(I), n(I, W, ge), I = ke;
    n(E, W, ge);
  }, T = ({ el: I, anchor: E }) => {
    let W;
    for (; I && I !== E; )
      W = w(I), l(I), I = W;
    l(E);
  }, L = (I, E, W, ge, ke, _e, De, Oe, Me) => {
    if (E.type === "svg" ? De = "svg" : E.type === "math" && (De = "mathml"), I == null)
      O(
        E,
        W,
        ge,
        ke,
        _e,
        De,
        Oe,
        Me
      );
    else {
      const Ie = I.el && I.el._isVueCE ? I.el : null;
      try {
        Ie && Ie._beginPatch(), F(
          I,
          E,
          ke,
          _e,
          De,
          Oe,
          Me
        );
      } finally {
        Ie && Ie._endPatch();
      }
    }
  }, O = (I, E, W, ge, ke, _e, De, Oe) => {
    let Me, Ie;
    const { props: Ge, shapeFlag: ze, transition: ve, dirs: Q } = I;
    if (Me = I.el = c(
      I.type,
      _e,
      Ge && Ge.is,
      Ge
    ), ze & 8 ? m(Me, I.children) : ze & 16 && P(
      I.children,
      Me,
      null,
      ge,
      ke,
      Na(I, _e),
      De,
      Oe
    ), Q && Js(I, null, ge, "created"), J(Me, I, I.scopeId, De, ge), Ge) {
      for (const be in Ge)
        be !== "value" && !Go(be) && r(Me, be, null, Ge[be], _e, ge);
      "value" in Ge && r(Me, "value", null, Ge.value, _e), (Ie = Ge.onVnodeBeforeMount) && gs(Ie, ge, I);
    }
    Q && Js(I, null, ge, "beforeMount");
    const Be = Xu(ke, ve);
    Be && ve.beforeEnter(Me), n(Me, E, W), ((Ie = Ge && Ge.onVnodeMounted) || Be || Q) && qt(() => {
      Ie && gs(Ie, ge, I), Be && ve.enter(Me), Q && Js(I, null, ge, "mounted");
    }, ke);
  }, J = (I, E, W, ge, ke) => {
    if (W && y(I, W), ge)
      for (let _e = 0; _e < ge.length; _e++)
        y(I, ge[_e]);
    if (ke) {
      let _e = ke.subTree;
      if (E === _e || Rr(_e.type) && (_e.ssContent === E || _e.ssFallback === E)) {
        const De = ke.vnode;
        J(
          I,
          De,
          De.scopeId,
          De.slotScopeIds,
          ke.parent
        );
      }
    }
  }, P = (I, E, W, ge, ke, _e, De, Oe, Me = 0) => {
    for (let Ie = Me; Ie < I.length; Ie++) {
      const Ge = I[Ie] = Oe ? Ws(I[Ie]) : ks(I[Ie]);
      x(
        null,
        Ge,
        E,
        W,
        ge,
        ke,
        _e,
        De,
        Oe
      );
    }
  }, F = (I, E, W, ge, ke, _e, De) => {
    const Oe = E.el = I.el;
    let { patchFlag: Me, dynamicChildren: Ie, dirs: Ge } = E;
    Me |= I.patchFlag & 16;
    const ze = I.props || gt, ve = E.props || gt;
    let Q;
    if (W && Qs(W, !1), (Q = ve.onVnodeBeforeUpdate) && gs(Q, W, E, I), Ge && Js(E, I, W, "beforeUpdate"), W && Qs(W, !0), (ze.innerHTML && ve.innerHTML == null || ze.textContent && ve.textContent == null) && m(Oe, ""), Ie ? Y(
      I.dynamicChildren,
      Ie,
      Oe,
      W,
      ge,
      Na(E, ke),
      _e
    ) : De || oe(
      I,
      E,
      Oe,
      null,
      W,
      ge,
      Na(E, ke),
      _e,
      !1
    ), Me > 0) {
      if (Me & 16)
        ee(Oe, ze, ve, W, ke);
      else if (Me & 2 && ze.class !== ve.class && r(Oe, "class", null, ve.class, ke), Me & 4 && r(Oe, "style", ze.style, ve.style, ke), Me & 8) {
        const Be = E.dynamicProps;
        for (let be = 0; be < Be.length; be++) {
          const Ye = Be[be], Ae = ze[Ye], Pe = ve[Ye];
          (Pe !== Ae || Ye === "value") && r(Oe, Ye, Ae, Pe, ke, W);
        }
      }
      Me & 1 && I.children !== E.children && m(Oe, E.children);
    } else !De && Ie == null && ee(Oe, ze, ve, W, ke);
    ((Q = ve.onVnodeUpdated) || Ge) && qt(() => {
      Q && gs(Q, W, E, I), Ge && Js(E, I, W, "updated");
    }, ge);
  }, Y = (I, E, W, ge, ke, _e, De) => {
    for (let Oe = 0; Oe < E.length; Oe++) {
      const Me = I[Oe], Ie = E[Oe], Ge = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Me.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Me.type === j || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !eo(Me, Ie) || // - In the case of a component, it could contain anything.
        Me.shapeFlag & 198) ? p(Me.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          W
        )
      );
      x(
        Me,
        Ie,
        Ge,
        null,
        ge,
        ke,
        _e,
        De,
        !0
      );
    }
  }, ee = (I, E, W, ge, ke) => {
    if (E !== W) {
      if (E !== gt)
        for (const _e in E)
          !Go(_e) && !(_e in W) && r(
            I,
            _e,
            E[_e],
            null,
            ke,
            ge
          );
      for (const _e in W) {
        if (Go(_e)) continue;
        const De = W[_e], Oe = E[_e];
        De !== Oe && _e !== "value" && r(I, _e, Oe, De, ke, ge);
      }
      "value" in W && r(I, "value", E.value, W.value, ke);
    }
  }, ce = (I, E, W, ge, ke, _e, De, Oe, Me) => {
    const Ie = E.el = I ? I.el : u(""), Ge = E.anchor = I ? I.anchor : u("");
    let { patchFlag: ze, dynamicChildren: ve, slotScopeIds: Q } = E;
    Q && (Oe = Oe ? Oe.concat(Q) : Q), I == null ? (n(Ie, W, ge), n(Ge, W, ge), P(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      E.children || [],
      W,
      Ge,
      ke,
      _e,
      De,
      Oe,
      Me
    )) : ze > 0 && ze & 64 && ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    I.dynamicChildren ? (Y(
      I.dynamicChildren,
      ve,
      W,
      ke,
      _e,
      De,
      Oe
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (E.key != null || ke && E === ke.subTree) && wl(
      I,
      E,
      !0
      /* shallow */
    )) : oe(
      I,
      E,
      W,
      Ge,
      ke,
      _e,
      De,
      Oe,
      Me
    );
  }, he = (I, E, W, ge, ke, _e, De, Oe, Me) => {
    E.slotScopeIds = Oe, I == null ? E.shapeFlag & 512 ? ke.ctx.activate(
      E,
      W,
      ge,
      De,
      Me
    ) : ne(
      E,
      W,
      ge,
      ke,
      _e,
      De,
      Me
    ) : K(I, E, Me);
  }, ne = (I, E, W, ge, ke, _e, De) => {
    const Oe = I.component = id(
      I,
      ge,
      ke
    );
    if (ta(I) && (Oe.ctx.renderer = He), rd(Oe, !1, De), Oe.asyncDep) {
      if (ke && ke.registerDep(Oe, le, De), !I.el) {
        const Me = Oe.subTree = k(Ft);
        S(null, Me, E, W), I.placeholder = Me.el;
      }
    } else
      le(
        Oe,
        I,
        E,
        W,
        ke,
        _e,
        De
      );
  }, K = (I, E, W) => {
    const ge = E.component = I.component;
    if (Bu(I, E, W))
      if (ge.asyncDep && !ge.asyncResolved) {
        Le(ge, E, W);
        return;
      } else
        ge.next = E, ge.update();
    else
      E.el = I.el, ge.vnode = E;
  }, le = (I, E, W, ge, ke, _e, De) => {
    const Oe = () => {
      if (I.isMounted) {
        let { next: ze, bu: ve, u: Q, parent: Be, vnode: be } = I;
        {
          const ue = Pr(I);
          if (ue) {
            ze && (ze.el = be.el, Le(I, ze, De)), ue.asyncDep.then(() => {
              I.isUnmounted || Oe();
            });
            return;
          }
        }
        let Ye = ze, Ae;
        Qs(I, !1), ze ? (ze.el = be.el, Le(I, ze, De)) : ze = be, ve && Sn(ve), (Ae = ze.props && ze.props.onVnodeBeforeUpdate) && gs(Ae, Be, ze, be), Qs(I, !0);
        const Pe = jl(I), B = I.subTree;
        I.subTree = Pe, x(
          B,
          Pe,
          // parent may have changed if it's in a teleport
          p(B.el),
          // anchor may have changed if it's in a fragment
          q(B),
          I,
          ke,
          _e
        ), ze.el = Pe.el, Ye === null && Wu(I, Pe.el), Q && qt(Q, ke), (Ae = ze.props && ze.props.onVnodeUpdated) && qt(
          () => gs(Ae, Be, ze, be),
          ke
        );
      } else {
        let ze;
        const { el: ve, props: Q } = E, { bm: Be, m: be, parent: Ye, root: Ae, type: Pe } = I, B = _o(E);
        Qs(I, !1), Be && Sn(Be), !B && (ze = Q && Q.onVnodeBeforeMount) && gs(ze, Ye, E), Qs(I, !0);
        {
          Ae.ce && // @ts-expect-error _def is private
          Ae.ce._def.shadowRoot !== !1 && Ae.ce._injectChildStyle(Pe);
          const ue = I.subTree = jl(I);
          x(
            null,
            ue,
            W,
            ge,
            I,
            ke,
            _e
          ), E.el = ue.el;
        }
        if (be && qt(be, ke), !B && (ze = Q && Q.onVnodeMounted)) {
          const ue = E;
          qt(
            () => gs(ze, Ye, ue),
            ke
          );
        }
        (E.shapeFlag & 256 || Ye && _o(Ye.vnode) && Ye.vnode.shapeFlag & 256) && I.a && qt(I.a, ke), I.isMounted = !0, E = W = ge = null;
      }
    };
    I.scope.on();
    const Me = I.effect = new Ai(Oe);
    I.scope.off();
    const Ie = I.update = Me.run.bind(Me), Ge = I.job = Me.runIfDirty.bind(Me);
    Ge.i = I, Ge.id = I.uid, Me.scheduler = () => vl(Ge), Qs(I, !0), Ie();
  }, Le = (I, E, W) => {
    E.component = I;
    const ge = I.vnode.props;
    I.vnode = E, I.next = null, ju(I, E.props, ge, W), Ju(I, E.children, W), Ls(), Ll(I), Ds();
  }, oe = (I, E, W, ge, ke, _e, De, Oe, Me = !1) => {
    const Ie = I && I.children, Ge = I ? I.shapeFlag : 0, ze = E.children, { patchFlag: ve, shapeFlag: Q } = E;
    if (ve > 0) {
      if (ve & 128) {
        A(
          Ie,
          ze,
          W,
          ge,
          ke,
          _e,
          De,
          Oe,
          Me
        );
        return;
      } else if (ve & 256) {
        pe(
          Ie,
          ze,
          W,
          ge,
          ke,
          _e,
          De,
          Oe,
          Me
        );
        return;
      }
    }
    Q & 8 ? (Ge & 16 && te(Ie, ke, _e), ze !== Ie && m(W, ze)) : Ge & 16 ? Q & 16 ? A(
      Ie,
      ze,
      W,
      ge,
      ke,
      _e,
      De,
      Oe,
      Me
    ) : te(Ie, ke, _e, !0) : (Ge & 8 && m(W, ""), Q & 16 && P(
      ze,
      W,
      ge,
      ke,
      _e,
      De,
      Oe,
      Me
    ));
  }, pe = (I, E, W, ge, ke, _e, De, Oe, Me) => {
    I = I || ho, E = E || ho;
    const Ie = I.length, Ge = E.length, ze = Math.min(Ie, Ge);
    let ve;
    for (ve = 0; ve < ze; ve++) {
      const Q = E[ve] = Me ? Ws(E[ve]) : ks(E[ve]);
      x(
        I[ve],
        Q,
        W,
        null,
        ke,
        _e,
        De,
        Oe,
        Me
      );
    }
    Ie > Ge ? te(
      I,
      ke,
      _e,
      !0,
      !1,
      ze
    ) : P(
      E,
      W,
      ge,
      ke,
      _e,
      De,
      Oe,
      Me,
      ze
    );
  }, A = (I, E, W, ge, ke, _e, De, Oe, Me) => {
    let Ie = 0;
    const Ge = E.length;
    let ze = I.length - 1, ve = Ge - 1;
    for (; Ie <= ze && Ie <= ve; ) {
      const Q = I[Ie], Be = E[Ie] = Me ? Ws(E[Ie]) : ks(E[Ie]);
      if (eo(Q, Be))
        x(
          Q,
          Be,
          W,
          null,
          ke,
          _e,
          De,
          Oe,
          Me
        );
      else
        break;
      Ie++;
    }
    for (; Ie <= ze && Ie <= ve; ) {
      const Q = I[ze], Be = E[ve] = Me ? Ws(E[ve]) : ks(E[ve]);
      if (eo(Q, Be))
        x(
          Q,
          Be,
          W,
          null,
          ke,
          _e,
          De,
          Oe,
          Me
        );
      else
        break;
      ze--, ve--;
    }
    if (Ie > ze) {
      if (Ie <= ve) {
        const Q = ve + 1, Be = Q < Ge ? E[Q].el : ge;
        for (; Ie <= ve; )
          x(
            null,
            E[Ie] = Me ? Ws(E[Ie]) : ks(E[Ie]),
            W,
            Be,
            ke,
            _e,
            De,
            Oe,
            Me
          ), Ie++;
      }
    } else if (Ie > ve)
      for (; Ie <= ze; )
        Re(I[Ie], ke, _e, !0), Ie++;
    else {
      const Q = Ie, Be = Ie, be = /* @__PURE__ */ new Map();
      for (Ie = Be; Ie <= ve; Ie++) {
        const V = E[Ie] = Me ? Ws(E[Ie]) : ks(E[Ie]);
        V.key != null && be.set(V.key, Ie);
      }
      let Ye, Ae = 0;
      const Pe = ve - Be + 1;
      let B = !1, ue = 0;
      const ae = new Array(Pe);
      for (Ie = 0; Ie < Pe; Ie++) ae[Ie] = 0;
      for (Ie = Q; Ie <= ze; Ie++) {
        const V = I[Ie];
        if (Ae >= Pe) {
          Re(V, ke, _e, !0);
          continue;
        }
        let z;
        if (V.key != null)
          z = be.get(V.key);
        else
          for (Ye = Be; Ye <= ve; Ye++)
            if (ae[Ye - Be] === 0 && eo(V, E[Ye])) {
              z = Ye;
              break;
            }
        z === void 0 ? Re(V, ke, _e, !0) : (ae[z - Be] = Ie + 1, z >= ue ? ue = z : B = !0, x(
          V,
          E[z],
          W,
          null,
          ke,
          _e,
          De,
          Oe,
          Me
        ), Ae++);
      }
      const Je = B ? Zu(ae) : ho;
      for (Ye = Je.length - 1, Ie = Pe - 1; Ie >= 0; Ie--) {
        const V = Be + Ie, z = E[V], se = E[V + 1], me = V + 1 < Ge ? (
          // #13559, fallback to el placeholder for unresolved async component
          se.el || se.placeholder
        ) : ge;
        ae[Ie] === 0 ? x(
          null,
          z,
          W,
          me,
          ke,
          _e,
          De,
          Oe,
          Me
        ) : B && (Ye < 0 || Ie !== Je[Ye] ? fe(z, W, me, 2) : Ye--);
      }
    }
  }, fe = (I, E, W, ge, ke = null) => {
    const { el: _e, type: De, transition: Oe, children: Me, shapeFlag: Ie } = I;
    if (Ie & 6) {
      fe(I.component.subTree, E, W, ge);
      return;
    }
    if (Ie & 128) {
      I.suspense.move(E, W, ge);
      return;
    }
    if (Ie & 64) {
      De.move(I, E, W, He);
      return;
    }
    if (De === j) {
      n(_e, E, W);
      for (let ze = 0; ze < Me.length; ze++)
        fe(Me[ze], E, W, ge);
      n(I.anchor, E, W);
      return;
    }
    if (De === La) {
      M(I, E, W);
      return;
    }
    if (ge !== 2 && Ie & 1 && Oe)
      if (ge === 0)
        Oe.beforeEnter(_e), n(_e, E, W), qt(() => Oe.enter(_e), ke);
      else {
        const { leave: ze, delayLeave: ve, afterLeave: Q } = Oe, Be = () => {
          I.ctx.isUnmounted ? l(_e) : n(_e, E, W);
        }, be = () => {
          _e._isLeaving && _e[Ts](
            !0
            /* cancelled */
          ), ze(_e, () => {
            Be(), Q && Q();
          });
        };
        ve ? ve(_e, Be, be) : be();
      }
    else
      n(_e, E, W);
  }, Re = (I, E, W, ge = !1, ke = !1) => {
    const {
      type: _e,
      props: De,
      ref: Oe,
      children: Me,
      dynamicChildren: Ie,
      shapeFlag: Ge,
      patchFlag: ze,
      dirs: ve,
      cacheIndex: Q
    } = I;
    if (ze === -2 && (ke = !1), Oe != null && (Ls(), Ko(Oe, null, W, I, !0), Ds()), Q != null && (E.renderCache[Q] = void 0), Ge & 256) {
      E.ctx.deactivate(I);
      return;
    }
    const Be = Ge & 1 && ve, be = !_o(I);
    let Ye;
    if (be && (Ye = De && De.onVnodeBeforeUnmount) && gs(Ye, E, I), Ge & 6)
      H(I.component, W, ge);
    else {
      if (Ge & 128) {
        I.suspense.unmount(W, ge);
        return;
      }
      Be && Js(I, null, E, "beforeUnmount"), Ge & 64 ? I.type.remove(
        I,
        E,
        W,
        He,
        ge
      ) : Ie && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Ie.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_e !== j || ze > 0 && ze & 64) ? te(
        Ie,
        E,
        W,
        !1,
        !0
      ) : (_e === j && ze & 384 || !ke && Ge & 16) && te(Me, E, W), ge && Fe(I);
    }
    (be && (Ye = De && De.onVnodeUnmounted) || Be) && qt(() => {
      Ye && gs(Ye, E, I), Be && Js(I, null, E, "unmounted");
    }, W);
  }, Fe = (I) => {
    const { type: E, el: W, anchor: ge, transition: ke } = I;
    if (E === j) {
      Ce(W, ge);
      return;
    }
    if (E === La) {
      T(I);
      return;
    }
    const _e = () => {
      l(W), ke && !ke.persisted && ke.afterLeave && ke.afterLeave();
    };
    if (I.shapeFlag & 1 && ke && !ke.persisted) {
      const { leave: De, delayLeave: Oe } = ke, Me = () => De(W, _e);
      Oe ? Oe(I.el, _e, Me) : Me();
    } else
      _e();
  }, Ce = (I, E) => {
    let W;
    for (; I !== E; )
      W = w(I), l(I), I = W;
    l(E);
  }, H = (I, E, W) => {
    const { bum: ge, scope: ke, job: _e, subTree: De, um: Oe, m: Me, a: Ie } = I;
    Kl(Me), Kl(Ie), ge && Sn(ge), ke.stop(), _e && (_e.flags |= 8, Re(De, I, E, W)), Oe && qt(Oe, E), qt(() => {
      I.isUnmounted = !0;
    }, E);
  }, te = (I, E, W, ge = !1, ke = !1, _e = 0) => {
    for (let De = _e; De < I.length; De++)
      Re(I[De], E, W, ge, ke);
  }, q = (I) => {
    if (I.shapeFlag & 6)
      return q(I.component.subTree);
    if (I.shapeFlag & 128)
      return I.suspense.next();
    const E = w(I.anchor || I.el), W = E && E[or];
    return W ? w(W) : E;
  };
  let Z = !1;
  const Se = (I, E, W) => {
    I == null ? E._vnode && Re(E._vnode, null, null, !0) : x(
      E._vnode || null,
      I,
      E,
      null,
      null,
      null,
      W
    ), E._vnode = I, Z || (Z = !0, Ll(), er(), Z = !1);
  }, He = {
    p: x,
    um: Re,
    m: fe,
    r: Fe,
    mt: ne,
    mc: P,
    pc: oe,
    pbc: Y,
    n: q,
    o: e
  };
  return {
    render: Se,
    hydrate: void 0,
    createApp: Ru(Se)
  };
}
function Na({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function Qs({ effect: e, job: t }, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Xu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function wl(e, t, o = !1) {
  const n = e.children, l = t.children;
  if (Ze(n) && Ze(l))
    for (let r = 0; r < n.length; r++) {
      const c = n[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = Ws(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && wl(c, u)), u.type === aa && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === Ft && !u.el && (u.el = c.el);
    }
}
function Zu(e) {
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
function Pr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Pr(t);
}
function Kl(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Rr = (e) => e.__isSuspense;
function ed(e, t) {
  t && t.pendingBranch ? Ze(e) ? t.effects.push(...e) : t.effects.push(e) : uu(e);
}
const j = Symbol.for("v-fgt"), aa = Symbol.for("v-txt"), Ft = Symbol.for("v-cmt"), La = Symbol.for("v-stc"), Qo = [];
let es = null;
function a(e = !1) {
  Qo.push(es = e ? null : []);
}
function td() {
  Qo.pop(), es = Qo[Qo.length - 1] || null;
}
let nn = 1;
function Fn(e, t = !1) {
  nn += e, e < 0 && es && t && (es.hasOnce = !0);
}
function Nr(e) {
  return e.dynamicChildren = nn > 0 ? es || ho : null, td(), nn > 0 && es && es.push(e), e;
}
function i(e, t, o, n, l, r) {
  return Nr(
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
  return Nr(
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
const Lr = ({ key: e }) => e ?? null, Tn = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? bt(e) || Gt(e) || tt(e) ? { i: Lt, r: e, k: t, f: !!o } : e : null);
function s(e, t = null, o = null, n = 0, l = null, r = e === j ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Lr(t),
    ref: t && Tn(t),
    scopeId: sr,
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
    ctx: Lt
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
const k = sd;
function sd(e, t = null, o = null, n = 0, l = null, r = !1) {
  if ((!e || e === pr) && (e = Ft), an(e)) {
    const u = js(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && _l(u, o), nn > 0 && !r && es && (u.shapeFlag & 6 ? es[es.indexOf(e)] = u : es.push(u)), u.patchFlag = -2, u;
  }
  if (md(e) && (e = e.__vccOpts), t) {
    t = od(t);
    let { class: u, style: d } = t;
    u && !bt(u) && (t.class = Ue(u)), vt(d) && (ml(d) && !Ze(d) && (d = Mt({}, d)), t.style = Wt(d));
  }
  const c = bt(e) ? 1 : Rr(e) ? 128 : nr(e) ? 64 : vt(e) ? 4 : tt(e) ? 2 : 0;
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
function od(e) {
  return e ? ml(e) || xr(e) ? Mt({}, e) : e : null;
}
function js(e, t, o = !1, n = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, v = t ? nd(l || {}, t) : l, m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Lr(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Ze(r) ? r.concat(Tn(t)) : [r, Tn(t)] : Tn(t)
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
    patchFlag: t && e.type !== j ? c === -1 ? 16 : c | 16 : c,
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
function $(e = " ", t = 0) {
  return k(aa, null, e, t);
}
function h(e = "", t = !1) {
  return t ? (a(), R(Ft, null, e)) : k(Ft, null, e);
}
function ks(e) {
  return e == null || typeof e == "boolean" ? k(Ft) : Ze(e) ? k(
    j,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : an(e) ? Ws(e) : k(aa, null, String(e));
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
      !l && !xr(t) ? t._ctx = Lt : l === 3 && Lt && (Lt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else tt(t) ? (t = { default: t, _ctx: Lt }, o = 32) : (t = String(t), n & 64 ? (o = 16, t = [$(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function nd(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        t.class !== n.class && (t.class = Ue([t.class, n.class]));
      else if (l === "style")
        t.style = Wt([t.style, n.style]);
      else if (Kn(l)) {
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
const ad = wr();
let ld = 0;
function id(e, t, o) {
  const n = e.type, l = (t ? t.appContext : e.appContext) || ad, r = {
    uid: ld++,
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
    scope: new Nc(
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
    propsOptions: Ir(n, l),
    emitsOptions: br(n, l),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Uu.bind(null, r), e.ce && e.ce(r), r;
}
let Bt = null;
const kl = () => Bt || Lt;
let Bn, Ja;
{
  const e = Xn(), t = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  Bn = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Bt = o
  ), Ja = t(
    "__VUE_SSR_SETTERS__",
    (o) => ln = o
  );
}
const dn = (e) => {
  const t = Bt;
  return Bn(e), e.scope.on(), () => {
    e.scope.off(), Bn(t);
  };
}, Jl = () => {
  Bt && Bt.scope.off(), Bn(null);
};
function Dr(e) {
  return e.vnode.shapeFlag & 4;
}
let ln = !1;
function rd(e, t = !1, o = !1) {
  t && Ja(t);
  const { props: n, children: l } = e.vnode, r = Dr(e);
  Gu(e, n, r, t), Ku(e, l, o || t);
  const c = r ? cd(e, t) : void 0;
  return t && Ja(!1), c;
}
function cd(e, t) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, xu);
  const { setup: n } = o;
  if (n) {
    Ls();
    const l = e.setupContext = n.length > 1 ? dd(e) : null, r = dn(e), c = un(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = Mi(c);
    if (Ds(), r(), (u || e.sp) && !_o(e) && fr(e), u) {
      if (c.then(Jl, Jl), t)
        return c.then((d) => {
          Ql(e, d);
        }).catch((d) => {
          ea(d, e, 0);
        });
      e.asyncDep = c;
    } else
      Ql(e, c);
  } else
    Or(e);
}
function Ql(e, t, o) {
  tt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : vt(t) && (e.setupState = Yi(t)), Or(e);
}
function Or(e, t, o) {
  const n = e.type;
  e.render || (e.render = n.render || bs);
  {
    const l = dn(e);
    Ls();
    try {
      Su(e);
    } finally {
      Ds(), l();
    }
  }
}
const ud = {
  get(e, t) {
    return zt(e, "get", ""), e[t];
  }
};
function dd(e) {
  const t = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, ud),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function la(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Yi(eu(e.exposed)), {
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
function fd(e, t = !0) {
  return tt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function md(e) {
  return tt(e) && "__vccOpts" in e;
}
const D = (e, t) => au(e, t, ln);
function Po(e, t, o) {
  try {
    Fn(-1);
    const n = arguments.length;
    return n === 2 ? vt(t) && !Ze(t) ? an(t) ? k(e, null, [t]) : k(e, t) : k(e, null, t) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && an(o) && (o = [o]), k(e, t, o));
  } finally {
    Fn(1);
  }
}
const vd = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Qa;
const Yl = typeof window < "u" && window.trustedTypes;
if (Yl)
  try {
    Qa = /* @__PURE__ */ Yl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ar = Qa ? (e) => Qa.createHTML(e) : (e) => e, pd = "http://www.w3.org/2000/svg", gd = "http://www.w3.org/1998/Math/MathML", Es = typeof document < "u" ? document : null, Xl = Es && /* @__PURE__ */ Es.createElement("template"), hd = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, n) => {
    const l = t === "svg" ? Es.createElementNS(pd, e) : t === "mathml" ? Es.createElementNS(gd, e) : o ? Es.createElement(e, { is: o }) : Es.createElement(e);
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
      Xl.innerHTML = Ar(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Xl.content;
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
}, zs = "transition", Do = "animation", Io = Symbol("_vtc"), Ur = {
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
}, zr = /* @__PURE__ */ Mt(
  {},
  rr,
  Ur
), yd = (e) => (e.displayName = "Transition", e.props = zr, e), wd = /* @__PURE__ */ yd(
  (e, { slots: t }) => Po(mu, Vr(e), t)
), Ys = (e, t = []) => {
  Ze(e) ? e.forEach((o) => o(...t)) : e && e(...t);
}, Zl = (e) => e ? Ze(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Vr(e) {
  const t = {};
  for (const ce in e)
    ce in Ur || (t[ce] = e[ce]);
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
  } = e, _ = _d(l), x = _ && _[0], C = _ && _[1], {
    onBeforeEnter: S,
    onEnter: N,
    onEnterCancelled: M,
    onLeave: T,
    onLeaveCancelled: L,
    onBeforeAppear: O = S,
    onAppear: J = N,
    onAppearCancelled: P = M
  } = t, F = (ce, he, ne, K) => {
    ce._enterCancelled = K, Vs(ce, he ? m : u), Vs(ce, he ? v : c), ne && ne();
  }, Y = (ce, he) => {
    ce._isLeaving = !1, Vs(ce, p), Vs(ce, y), Vs(ce, w), he && he();
  }, ee = (ce) => (he, ne) => {
    const K = ce ? J : N, le = () => F(he, ce, ne);
    Ys(K, [he, le]), ei(() => {
      Vs(he, ce ? d : r), ys(he, ce ? m : u), Zl(K) || ti(he, n, x, le);
    });
  };
  return Mt(t, {
    onBeforeEnter(ce) {
      Ys(S, [ce]), ys(ce, r), ys(ce, c);
    },
    onBeforeAppear(ce) {
      Ys(O, [ce]), ys(ce, d), ys(ce, v);
    },
    onEnter: ee(!1),
    onAppear: ee(!0),
    onLeave(ce, he) {
      ce._isLeaving = !0;
      const ne = () => Y(ce, he);
      ys(ce, p), ce._enterCancelled ? (ys(ce, w), Ya(ce)) : (Ya(ce), ys(ce, w)), ei(() => {
        ce._isLeaving && (Vs(ce, p), ys(ce, y), Zl(T) || ti(ce, n, C, ne));
      }), Ys(T, [ce, ne]);
    },
    onEnterCancelled(ce) {
      F(ce, !1, void 0, !0), Ys(M, [ce]);
    },
    onAppearCancelled(ce) {
      F(ce, !0, void 0, !0), Ys(P, [ce]);
    },
    onLeaveCancelled(ce) {
      Y(ce), Ys(L, [ce]);
    }
  });
}
function _d(e) {
  if (e == null)
    return null;
  if (vt(e))
    return [Da(e.enter), Da(e.leave)];
  {
    const t = Da(e);
    return [t, t];
  }
}
function Da(e) {
  return xc(e);
}
function ys(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Io] || (e[Io] = /* @__PURE__ */ new Set())).add(t);
}
function Vs(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[Io];
  o && (o.delete(t), o.size || (e[Io] = void 0));
}
function ei(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let kd = 0;
function ti(e, t, o, n) {
  const l = e._endId = ++kd, r = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: c, timeout: u, propCount: d } = Fr(e, t);
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
function Fr(e, t) {
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${zs}Delay`), r = n(`${zs}Duration`), c = si(l, r), u = n(`${Do}Delay`), d = n(`${Do}Duration`), v = si(u, d);
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
function si(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((o, n) => oi(o) + oi(e[n])));
}
function oi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ya(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function bd(e, t, o) {
  const n = e[Io];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const ni = Symbol("_vod"), $d = Symbol("_vsh"), Cd = Symbol(""), xd = /(?:^|;)\s*display\s*:/;
function Sd(e, t, o) {
  const n = e.style, l = bt(o);
  let r = !1;
  if (o && !l) {
    if (t)
      if (bt(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && Mn(n, u, "");
        }
      else
        for (const c in t)
          o[c] == null && Mn(n, c, "");
    for (const c in o)
      c === "display" && (r = !0), Mn(n, c, o[c]);
  } else if (l) {
    if (t !== o) {
      const c = n[Cd];
      c && (o += ";" + c), n.cssText = o, r = xd.test(o);
    }
  } else t && e.removeAttribute("style");
  ni in e && (e[ni] = r ? n.display : "", e[$d] && (n.display = "none"));
}
const ai = /\s*!important$/;
function Mn(e, t, o) {
  if (Ze(o))
    o.forEach((n) => Mn(e, t, n));
  else if (o == null && (o = ""), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const n = Id(e, t);
    ai.test(o) ? e.setProperty(
      qs(n),
      o.replace(ai, ""),
      "important"
    ) : e[n] = o;
  }
}
const li = ["Webkit", "Moz", "ms"], Oa = {};
function Id(e, t) {
  const o = Oa[t];
  if (o)
    return o;
  let n = as(t);
  if (n !== "filter" && n in e)
    return Oa[t] = n;
  n = Qn(n);
  for (let l = 0; l < li.length; l++) {
    const r = li[l] + n;
    if (r in e)
      return Oa[t] = r;
  }
  return t;
}
const ii = "http://www.w3.org/1999/xlink";
function ri(e, t, o, n, l, r = Pc(t)) {
  n && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(ii, t.slice(6, t.length)) : e.setAttributeNS(ii, t, o) : o == null || r && !Li(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : fs(o) ? String(o) : o
  );
}
function ci(e, t, o, n, l) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? Ar(o) : o);
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
function Ns(e, t, o, n) {
  e.addEventListener(t, o, n);
}
function Ed(e, t, o, n) {
  e.removeEventListener(t, o, n);
}
const ui = Symbol("_vei");
function Td(e, t, o, n, l = null) {
  const r = e[ui] || (e[ui] = {}), c = r[t];
  if (n && c)
    c.value = n;
  else {
    const [u, d] = Md(t);
    if (n) {
      const v = r[t] = Nd(
        n,
        l
      );
      Ns(e, u, v, d);
    } else c && (Ed(e, u, c, d), r[t] = void 0);
  }
}
const di = /(?:Once|Passive|Capture)$/;
function Md(e) {
  let t;
  if (di.test(e)) {
    t = {};
    let n;
    for (; n = e.match(di); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : qs(e.slice(2)), t];
}
let Aa = 0;
const Pd = /* @__PURE__ */ Promise.resolve(), Rd = () => Aa || (Pd.then(() => Aa = 0), Aa = Date.now());
function Nd(e, t) {
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
  return o.value = e, o.attached = Rd(), o;
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
const fi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Dd = (e, t, o, n, l, r) => {
  const c = l === "svg";
  t === "class" ? bd(e, n, c) : t === "style" ? Sd(e, o, n) : Kn(t) ? ol(t) || Td(e, t, o, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Od(e, t, n, c)) ? (ci(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ri(e, t, n, c, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !bt(n)) ? ci(e, as(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), ri(e, t, n, c));
};
function Od(e, t, o, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && fi(t) && tt(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return fi(t) && bt(o) ? !1 : t in e;
}
const Br = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap(), Wn = Symbol("_moveCb"), mi = Symbol("_enterCb"), Ad = (e) => (delete e.props.mode, e), Ud = /* @__PURE__ */ Ad({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Mt({}, zr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const o = kl(), n = ir();
    let l, r;
    return vr(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!Wd(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(Vd), l.forEach(Fd);
      const u = l.filter(Bd);
      Ya(o.vnode.el), u.forEach((d) => {
        const v = d.el, m = v.style;
        ys(v, c), m.transform = m.webkitTransform = m.transitionDuration = "";
        const p = v[Wn] = (w) => {
          w && w.target !== v || (!w || w.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", p), v[Wn] = null, Vs(v, c));
        };
        v.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const c = it(e), u = Vr(c);
      let d = c.tag || j;
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
          ), Br.set(m, {
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
}), zd = Ud;
function Vd(e) {
  const t = e.el;
  t[Wn] && t[Wn](), t[mi] && t[mi]();
}
function Fd(e) {
  Wr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function Bd(e) {
  const t = Br.get(e), o = Wr.get(e), n = t.left - o.left, l = t.top - o.top;
  if (n || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${n}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function Wd(e, t, o) {
  const n = e.cloneNode(), l = e[Io];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && n.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && n.classList.add(u)), n.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(n);
  const { hasTransform: c } = Fr(n);
  return r.removeChild(n), c;
}
const Hs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ze(t) ? (o) => Sn(t, o) : t;
};
function Gd(e) {
  e.target.composing = !0;
}
function vi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ns = Symbol("_assign");
function pi(e, t, o) {
  return t && (e = e.trim()), o && (e = Yn(e)), e;
}
const bo = {
  created(e, { modifiers: { lazy: t, trim: o, number: n } }, l) {
    e[ns] = Hs(l);
    const r = n || l.props && l.props.type === "number";
    Ns(e, t ? "change" : "input", (c) => {
      c.target.composing || e[ns](pi(e.value, o, r));
    }), (o || r) && Ns(e, "change", () => {
      e.value = pi(e.value, o, r);
    }), t || (Ns(e, "compositionstart", Gd), Ns(e, "compositionend", vi), Ns(e, "change", vi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: n, trim: l, number: r } }, c) {
    if (e[ns] = Hs(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? Yn(e.value) : e.value, d = t ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (n && t === o || l && e.value.trim() === d) || (e.value = d));
  }
}, Gn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, o) {
    e[ns] = Hs(o), Ns(e, "change", () => {
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
        c(Gr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: gi,
  beforeUpdate(e, t, o) {
    e[ns] = Hs(o), gi(e, t, o);
  }
};
function gi(e, { value: t, oldValue: o }, n) {
  e._modelValue = t;
  let l;
  if (Ze(t))
    l = ll(t, n.props.value) > -1;
  else if (To(t))
    l = t.has(n.props.value);
  else {
    if (t === o) return;
    l = no(t, Gr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Pn = {
  created(e, { value: t }, o) {
    e.checked = no(t, o.props.value), e[ns] = Hs(o), Ns(e, "change", () => {
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
    Ns(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? Yn(Eo(c)) : Eo(c)
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
    hi(e, t);
  },
  beforeUpdate(e, t, o) {
    e[ns] = Hs(o);
  },
  updated(e, { value: t }) {
    e._assigning || hi(e, t);
  }
};
function hi(e, t) {
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
function Gr(e, t) {
  const o = t ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : t;
}
const jd = ["ctrl", "shift", "alt", "meta"], Hd = {
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
  exact: (e, t) => jd.some((o) => e[`${o}Key`] && !t.includes(o))
}, mt = (e, t) => {
  const o = e._withMods || (e._withMods = {}), n = t.join(".");
  return o[n] || (o[n] = ((l, ...r) => {
    for (let c = 0; c < t.length; c++) {
      const u = Hd[t[c]];
      if (u && u(l, t)) return;
    }
    return e(l, ...r);
  }));
}, qd = {
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
      (c) => c === r || qd[c] === r
    ))
      return e(l);
  }));
}, Kd = /* @__PURE__ */ Mt({ patchProp: Dd }, hd);
let yi;
function Jd() {
  return yi || (yi = Qu(Kd));
}
const fn = ((...e) => {
  const t = Jd().createApp(...e), { mount: o } = t;
  return t.mount = (n) => {
    const l = Yd(n);
    if (!l) return;
    const r = t._component;
    !tt(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, Qd(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, t;
});
function Qd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Yd(e) {
  return bt(e) ? document.querySelector(e) : e;
}
const Xd = { class: "panel-layout" }, Zd = {
  key: 0,
  class: "panel-layout-header"
}, ef = {
  key: 1,
  class: "panel-layout-search"
}, tf = { class: "panel-layout-content" }, sf = {
  key: 2,
  class: "panel-layout-footer"
}, of = /* @__PURE__ */ $e({
  __name: "PanelLayout",
  setup(e) {
    return (t, o) => (a(), i("div", Xd, [
      t.$slots.header ? (a(), i("div", Zd, [
        ot(t.$slots, "header", {}, void 0)
      ])) : h("", !0),
      t.$slots.search ? (a(), i("div", ef, [
        ot(t.$slots, "search", {}, void 0)
      ])) : h("", !0),
      s("div", tf, [
        ot(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (a(), i("div", sf, [
        ot(t.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), xe = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of t)
    o[n] = l;
  return o;
}, Ot = /* @__PURE__ */ xe(of, [["__scopeId", "data-v-21565df9"]]), nf = {
  key: 0,
  class: "panel-title-prefix"
}, af = {
  key: 1,
  class: "panel-title-prefix-theme"
}, lf = /* @__PURE__ */ $e({
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
        e.showPrefix ? (a(), i("span", nf, f(e.prefix), 1)) : (a(), i("span", af)),
        ot(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), rf = /* @__PURE__ */ xe(lf, [["__scopeId", "data-v-c3875efc"]]), cf = ["title"], uf = ["width", "height"], df = /* @__PURE__ */ $e({
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
      ])], 8, uf))
    ], 8, cf));
  }
}), jr = /* @__PURE__ */ xe(df, [["__scopeId", "data-v-6fc7f16d"]]), ff = { class: "header-left" }, mf = {
  key: 0,
  class: "header-actions"
}, vf = /* @__PURE__ */ $e({
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
      s("div", ff, [
        k(rf, { "show-prefix": e.showPrefix }, {
          default: g(() => [
            $(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), R(jr, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => t.$emit("info-click"))
        })) : h("", !0)
      ]),
      t.$slots.actions ? (a(), i("div", mf, [
        ot(t.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), At = /* @__PURE__ */ xe(vf, [["__scopeId", "data-v-55a62cd6"]]), pf = {
  key: 0,
  class: "section-title-count"
}, gf = {
  key: 1,
  class: "section-title-icon"
}, hf = /* @__PURE__ */ $e({
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
        e.count !== void 0 ? (a(), i("span", pf, "(" + f(e.count) + ")", 1)) : h("", !0),
        e.clickable ? (a(), i("span", gf, f(e.expanded ? "▼" : "▸"), 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ss = /* @__PURE__ */ xe(hf, [["__scopeId", "data-v-559361eb"]]), yf = { class: "status-grid" }, wf = { class: "status-grid__columns" }, _f = { class: "status-grid__column" }, kf = { class: "status-grid__title" }, bf = { class: "status-grid__column status-grid__column--right" }, $f = { class: "status-grid__title" }, Cf = {
  key: 0,
  class: "status-grid__footer"
}, xf = /* @__PURE__ */ $e({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, o) => (a(), i("div", yf, [
      s("div", wf, [
        s("div", _f, [
          s("h4", kf, f(e.leftTitle), 1),
          ot(t.$slots, "left", {}, void 0)
        ]),
        s("div", bf, [
          s("h4", $f, f(e.rightTitle), 1),
          ot(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (a(), i("div", Cf, [
        ot(t.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), Sf = /* @__PURE__ */ xe(xf, [["__scopeId", "data-v-73b7ba3f"]]), If = {
  key: 0,
  class: "status-item__icon"
}, Ef = {
  key: 1,
  class: "status-item__count"
}, Tf = { class: "status-item__label" }, Mf = /* @__PURE__ */ $e({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = D(() => `status-item--${t.variant}`);
    return (n, l) => (a(), i("div", {
      class: Ue(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), i("span", If, f(e.icon), 1)) : h("", !0),
      e.count !== void 0 ? (a(), i("span", Ef, f(e.count), 1)) : h("", !0),
      s("span", Tf, f(e.label), 1)
    ], 2));
  }
}), hs = /* @__PURE__ */ xe(Mf, [["__scopeId", "data-v-6f929183"]]), Pf = { class: "issue-card__header" }, Rf = { class: "issue-card__icon" }, Nf = { class: "issue-card__title" }, Lf = {
  key: 0,
  class: "issue-card__content"
}, Df = {
  key: 0,
  class: "issue-card__description"
}, Of = {
  key: 1,
  class: "issue-card__items"
}, Af = {
  key: 2,
  class: "issue-card__actions"
}, Uf = /* @__PURE__ */ $e({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const t = e, o = D(() => `issue-card--${t.severity}`);
    return (n, l) => (a(), i("div", {
      class: Ue(["issue-card", o.value])
    }, [
      s("div", Pf, [
        s("span", Rf, f(e.icon), 1),
        s("h4", Nf, f(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), i("div", Lf, [
        e.description ? (a(), i("p", Df, f(e.description), 1)) : h("", !0),
        ot(n.$slots, "default", {}, void 0)
      ])) : h("", !0),
      e.items && e.items.length ? (a(), i("div", Of, [
        (a(!0), i(j, null, we(e.items, (r, c) => (a(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, f(r), 1)
        ]))), 128))
      ])) : h("", !0),
      n.$slots.actions ? (a(), i("div", Af, [
        ot(n.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), cs = /* @__PURE__ */ xe(Uf, [["__scopeId", "data-v-df6aa348"]]), zf = ["type", "disabled"], Vf = {
  key: 0,
  class: "spinner"
}, Ff = /* @__PURE__ */ $e({
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
      e.loading ? (a(), i("span", Vf)) : h("", !0),
      e.loading ? h("", !0) : ot(t.$slots, "default", { key: 1 }, void 0)
    ], 10, zf));
  }
}), Ee = /* @__PURE__ */ xe(Ff, [["__scopeId", "data-v-772abe47"]]), Bf = { class: "empty-state" }, Wf = {
  key: 0,
  class: "empty-icon"
}, Gf = { class: "empty-message" }, jf = /* @__PURE__ */ $e({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, o) => (a(), i("div", Bf, [
      e.icon ? (a(), i("div", Wf, f(e.icon), 1)) : h("", !0),
      s("p", Gf, f(e.message), 1),
      e.actionLabel ? (a(), R(Ee, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => t.$emit("action"))
      }, {
        default: g(() => [
          $(f(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : h("", !0)
    ]));
  }
}), ls = /* @__PURE__ */ xe(jf, [["__scopeId", "data-v-4466284f"]]), Hf = /* @__PURE__ */ $e({
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
}), Rn = /* @__PURE__ */ xe(Hf, [["__scopeId", "data-v-75e9eeb8"]]), qf = /* @__PURE__ */ $e({
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
}), Xa = /* @__PURE__ */ xe(qf, [["__scopeId", "data-v-2f186e4c"]]), Kf = { class: "detail-row" }, Jf = /* @__PURE__ */ $e({
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
    return (t, o) => (a(), i("div", Kf, [
      k(Rn, { "min-width": e.labelMinWidth }, {
        default: g(() => [
          $(f(e.label), 1)
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
          $(f(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ot(t.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), _t = /* @__PURE__ */ xe(Jf, [["__scopeId", "data-v-ef15664a"]]), Qf = { class: "modal-header" }, Yf = { class: "modal-body" }, Xf = { class: "status-section" }, Zf = {
  key: 0,
  class: "status-section"
}, em = { class: "section-header-row" }, tm = {
  key: 0,
  class: "workflow-group"
}, sm = { class: "workflow-group-header" }, om = { class: "workflow-group-title" }, nm = { class: "workflow-list" }, am = { class: "workflow-name" }, lm = { class: "workflow-issue" }, im = {
  key: 1,
  class: "workflow-group"
}, rm = { class: "workflow-group-header" }, cm = { class: "workflow-group-title" }, um = { class: "workflow-list" }, dm = { class: "workflow-name" }, fm = { class: "workflow-issue" }, mm = {
  key: 2,
  class: "workflow-group"
}, vm = { class: "workflow-group-header" }, pm = { class: "workflow-group-title" }, gm = { class: "workflow-list" }, hm = { class: "workflow-name" }, ym = {
  key: 3,
  class: "workflow-group"
}, wm = { class: "workflow-group-header" }, _m = { class: "workflow-group-title" }, km = { class: "workflow-list" }, bm = { class: "workflow-name" }, $m = {
  key: 4,
  class: "workflow-group"
}, Cm = { class: "workflow-group-header" }, xm = { class: "workflow-group-title" }, Sm = { class: "workflow-list" }, Im = { class: "workflow-name" }, Em = {
  key: 5,
  class: "workflow-group"
}, Tm = { class: "workflow-group-title" }, Mm = { class: "expand-icon" }, Pm = {
  key: 0,
  class: "workflow-list"
}, Rm = { class: "workflow-name" }, Nm = {
  key: 1,
  class: "status-section"
}, Lm = {
  key: 0,
  class: "change-group"
}, Dm = { class: "change-group-header" }, Om = { class: "change-group-title" }, Am = { class: "change-list" }, Um = { class: "node-name" }, zm = {
  key: 0,
  class: "dev-badge"
}, Vm = {
  key: 1,
  class: "change-group"
}, Fm = { class: "change-group-header" }, Bm = { class: "change-group-title" }, Wm = { class: "change-list" }, Gm = { class: "node-name" }, jm = {
  key: 0,
  class: "dev-badge"
}, Hm = {
  key: 2,
  class: "change-group"
}, qm = { class: "change-list" }, Km = { class: "change-item" }, Jm = { class: "node-name" }, Qm = {
  key: 3,
  class: "change-group"
}, Ym = {
  key: 2,
  class: "status-section"
}, Xm = { class: "section-header-row" }, Zm = {
  key: 0,
  class: "drift-item"
}, ev = { class: "drift-list" }, tv = {
  key: 0,
  class: "drift-list-more"
}, sv = {
  key: 1,
  class: "drift-item"
}, ov = { class: "drift-list" }, nv = {
  key: 0,
  class: "drift-list-more"
}, av = {
  key: 2,
  class: "drift-item"
}, lv = { class: "drift-list" }, iv = { class: "version-actual" }, rv = { class: "version-expected" }, cv = {
  key: 0,
  class: "drift-list-more"
}, uv = {
  key: 3,
  class: "drift-item"
}, dv = { class: "repair-action" }, fv = {
  key: 3,
  class: "status-section"
}, mv = { class: "info-box" }, vv = { class: "drift-list" }, pv = {
  key: 0,
  class: "drift-list-more"
}, gv = {
  key: 4,
  class: "status-section"
}, hv = { class: "warning-box" }, yv = {
  key: 5,
  class: "empty-state-inline"
}, wv = { class: "modal-actions" }, _v = /* @__PURE__ */ $e({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const t = e, o = b(!1);
    rt(() => {
      console.log("StatusDetailModal mounted, initial show value:", t.show);
    }), kt(() => t.show, (w, y) => {
      console.log("StatusDetailModal show prop changed from", y, "to", w);
    }, { immediate: !0 });
    const n = D(() => {
      var w, y, _;
      return ((_ = (y = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : y.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), l = D(() => {
      var w, y, _;
      return ((_ = (y = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : y.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), r = D(() => {
      var w, y, _;
      return ((_ = (y = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : y.synced) == null ? void 0 : _.filter((x) => {
        var S, N, M;
        const C = (M = (N = (S = t.status) == null ? void 0 : S.workflows) == null ? void 0 : N.analyzed) == null ? void 0 : M.find((T) => T.name === x);
        return !C || C.status !== "broken";
      })) || [];
    }), c = D(() => {
      var w, y, _, x, C;
      return (w = t.status) != null && w.workflows ? (((y = t.status.workflows.new) == null ? void 0 : y.length) ?? 0) > 0 || (((_ = t.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((x = t.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || (((C = t.status.workflows.synced) == null ? void 0 : C.length) ?? 0) > 0 : !1;
    }), u = D(() => {
      var y, _, x;
      const w = (y = t.status) == null ? void 0 : y.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((x = w.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = D(() => {
      var w, y, _, x, C, S;
      return !c.value && !u.value && ((y = (w = t.status) == null ? void 0 : w.comparison) == null ? void 0 : y.is_synced) && (((_ = t.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((S = (C = (x = t.status) == null ? void 0 : x.comparison) == null ? void 0 : C.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
    }), v = D(() => {
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
      var _, x, C, S, N, M, T, L, O, J, P, F, Y, ee, ce, he, ne, K, le, Le, oe, pe;
      return a(), R(Dt, { to: "body" }, [
        e.show ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: y[7] || (y[7] = (A) => w.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: y[6] || (y[6] = mt(() => {
            }, ["stop"]))
          }, [
            s("div", Qf, [
              y[8] || (y[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: y[0] || (y[0] = (A) => w.$emit("close"))
              }, "✕")
            ]),
            s("div", Yf, [
              s("div", Xf, [
                k(ss, { level: "4" }, {
                  default: g(() => [...y[9] || (y[9] = [
                    $("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                k(_t, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (a(), i("div", Zf, [
                s("div", em, [
                  k(ss, { level: "4" }, {
                    default: g(() => [...y[10] || (y[10] = [
                      $("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: y[1] || (y[1] = (A) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), i("div", tm, [
                  s("div", sm, [
                    y[11] || (y[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", om, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  s("div", nm, [
                    (a(!0), i(j, null, we(n.value, (A) => (a(), i("div", {
                      key: A.name,
                      class: "workflow-item"
                    }, [
                      s("span", am, f(A.name), 1),
                      s("span", lm, f(A.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                l.value.length ? (a(), i("div", im, [
                  s("div", rm, [
                    y[12] || (y[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", cm, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  s("div", um, [
                    (a(!0), i(j, null, we(l.value, (A) => (a(), i("div", {
                      key: A.name,
                      class: "workflow-item"
                    }, [
                      s("span", dm, f(A.name), 1),
                      s("span", fm, f(A.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (x = (_ = e.status.workflows) == null ? void 0 : _.new) != null && x.length ? (a(), i("div", mm, [
                  s("div", vm, [
                    y[13] || (y[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", pm, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", gm, [
                    (a(!0), i(j, null, we(e.status.workflows.new, (A) => (a(), i("div", {
                      key: A,
                      class: "workflow-item"
                    }, [
                      s("span", hm, f(A), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (S = (C = e.status.workflows) == null ? void 0 : C.modified) != null && S.length ? (a(), i("div", ym, [
                  s("div", wm, [
                    y[14] || (y[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", _m, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", km, [
                    (a(!0), i(j, null, we(e.status.workflows.modified, (A) => (a(), i("div", {
                      key: A,
                      class: "workflow-item"
                    }, [
                      s("span", bm, f(A), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (M = (N = e.status.workflows) == null ? void 0 : N.deleted) != null && M.length ? (a(), i("div", $m, [
                  s("div", Cm, [
                    y[15] || (y[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", xm, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", Sm, [
                    (a(!0), i(j, null, we(e.status.workflows.deleted, (A) => (a(), i("div", {
                      key: A,
                      class: "workflow-item"
                    }, [
                      s("span", Im, f(A), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                r.value.length ? (a(), i("div", Em, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: y[2] || (y[2] = (A) => o.value = !o.value)
                  }, [
                    y[16] || (y[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", Tm, "SYNCED (" + f(r.value.length) + ")", 1),
                    s("span", Mm, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), i("div", Pm, [
                    (a(!0), i(j, null, we(r.value, (A) => (a(), i("div", {
                      key: A,
                      class: "workflow-item"
                    }, [
                      s("span", Rm, f(A), 1)
                    ]))), 128))
                  ])) : h("", !0)
                ])) : h("", !0)
              ])) : h("", !0),
              u.value ? (a(), i("div", Nm, [
                k(ss, { level: "4" }, {
                  default: g(() => [...y[17] || (y[17] = [
                    $("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (L = (T = e.status.git_changes) == null ? void 0 : T.nodes_added) != null && L.length ? (a(), i("div", Lm, [
                  s("div", Dm, [
                    y[18] || (y[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", Om, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", Am, [
                    (a(!0), i(j, null, we(e.status.git_changes.nodes_added, (A) => (a(), i("div", {
                      key: m(A),
                      class: "change-item"
                    }, [
                      s("span", Um, f(m(A)), 1),
                      p(A) ? (a(), i("span", zm, "dev")) : h("", !0)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (J = (O = e.status.git_changes) == null ? void 0 : O.nodes_removed) != null && J.length ? (a(), i("div", Vm, [
                  s("div", Fm, [
                    y[19] || (y[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", Bm, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", Wm, [
                    (a(!0), i(j, null, we(e.status.git_changes.nodes_removed, (A) => (a(), i("div", {
                      key: m(A),
                      class: "change-item"
                    }, [
                      s("span", Gm, f(m(A)), 1),
                      p(A) ? (a(), i("span", jm, "dev")) : h("", !0)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (P = e.status.git_changes) != null && P.workflow_changes ? (a(), i("div", Hm, [
                  y[20] || (y[20] = s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  s("div", qm, [
                    s("div", Km, [
                      s("span", Jm, f(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : h("", !0),
                (F = e.status.git_changes) != null && F.has_other_changes ? (a(), i("div", Qm, [...y[21] || (y[21] = [
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
              (Y = e.status.comparison) != null && Y.is_synced ? h("", !0) : (a(), i("div", Ym, [
                s("div", Xm, [
                  k(ss, { level: "4" }, {
                    default: g(() => [...y[22] || (y[22] = [
                      $("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: y[3] || (y[3] = (A) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                y[26] || (y[26] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("span", null, "Environment needs repair")
                ], -1)),
                (ce = (ee = e.status.comparison) == null ? void 0 : ee.missing_nodes) != null && ce.length ? (a(), i("div", Zm, [
                  k(_t, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", ev, [
                    (a(!0), i(j, null, we(e.status.comparison.missing_nodes.slice(0, 10), (A) => (a(), i("div", {
                      key: A,
                      class: "drift-list-item"
                    }, " - " + f(A), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), i("div", tv, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (ne = (he = e.status.comparison) == null ? void 0 : he.extra_nodes) != null && ne.length ? (a(), i("div", sv, [
                  k(_t, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", ov, [
                    (a(!0), i(j, null, we(e.status.comparison.extra_nodes.slice(0, 10), (A) => (a(), i("div", {
                      key: A,
                      class: "drift-list-item"
                    }, " - " + f(A), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), i("div", nv, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (le = (K = e.status.comparison) == null ? void 0 : K.version_mismatches) != null && le.length ? (a(), i("div", av, [
                  k(_t, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", lv, [
                    (a(!0), i(j, null, we(e.status.comparison.version_mismatches.slice(0, 10), (A) => (a(), i("div", {
                      key: A.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      $(f(A.name) + ": ", 1),
                      s("span", iv, f(A.actual), 1),
                      y[23] || (y[23] = $(" → ", -1)),
                      s("span", rv, f(A.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), i("div", cv, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                ((Le = e.status.comparison) == null ? void 0 : Le.packages_in_sync) === !1 ? (a(), i("div", uv, [
                  k(_t, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : h("", !0),
                s("div", dv, [
                  k(Ee, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: y[4] || (y[4] = (A) => w.$emit("repair"))
                  }, {
                    default: g(() => [...y[24] || (y[24] = [
                      $(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  y[25] || (y[25] = s("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (pe = (oe = e.status.comparison) == null ? void 0 : oe.disabled_nodes) != null && pe.length ? (a(), i("div", fv, [
                k(ss, { level: "4" }, {
                  default: g(() => [...y[27] || (y[27] = [
                    $("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", mv, [
                  y[28] || (y[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", vv, [
                  (a(!0), i(j, null, we(e.status.comparison.disabled_nodes.slice(0, 10), (A) => (a(), i("div", {
                    key: A,
                    class: "drift-list-item"
                  }, " • " + f(A), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), i("div", pv, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : h("", !0)
                ])
              ])) : h("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), i("div", gv, [
                k(ss, { level: "4" }, {
                  default: g(() => [...y[29] || (y[29] = [
                    $("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", hv, [
                  y[30] || (y[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                y[31] || (y[31] = s("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : h("", !0),
              d.value ? (a(), i("div", yv, [...y[32] || (y[32] = [
                s("div", { class: "empty-icon" }, "✅", -1),
                s("div", { class: "empty-message" }, [
                  s("strong", null, "Environment is clean!"),
                  s("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : h("", !0)
            ]),
            s("div", wv, [
              k(Ee, {
                variant: "secondary",
                onClick: y[5] || (y[5] = (A) => w.$emit("close"))
              }, {
                default: g(() => [...y[33] || (y[33] = [
                  $(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), kv = /* @__PURE__ */ xe(_v, [["__scopeId", "data-v-e2b37122"]]), bv = { class: "health-section-header" }, $v = { class: "suggestions-content" }, Cv = { class: "suggestions-text" }, xv = { style: { "margin-top": "var(--cg-space-3)" } }, Sv = {
  key: 1,
  class: "no-issues-text"
}, Iv = /* @__PURE__ */ $e({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: t, emit: o }) {
    const n = e, l = b(!1), r = b(!1);
    function c() {
      l.value = !0;
    }
    function u() {
      l.value = !1, v("view-workflows");
    }
    function d() {
      l.value = !1, v("view-nodes");
    }
    const v = o, m = b(!1), p = b(!1);
    function w() {
      p.value = !0, v("repair-environment");
    }
    function y() {
      p.value = !1;
    }
    function _() {
      l.value = !1;
    }
    const x = D(() => {
      const Ce = n.status.workflows.analyzed || [], H = Ce.filter(
        (te) => te.unresolved_models_count > 0 || te.ambiguous_models_count > 0
      );
      return H.length === 0 && n.status.missing_models_count > 0 ? Ce.filter((te) => te.sync_state === "synced") : H;
    });
    function C() {
      const Ce = x.value;
      Ce.length !== 0 && (m.value = !0, v("repair-missing-models", Ce.map((H) => H.name)));
    }
    function S() {
      m.value = !1;
    }
    t({ resetRepairingState: S, resetRepairingEnvironmentState: y, closeDetailModal: _ });
    const N = D(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), M = D(() => n.status.has_changes), T = D(() => {
      const Ce = n.status.git_changes;
      return Ce.nodes_added.length > 0 || Ce.nodes_removed.length > 0 || Ce.workflow_changes;
    }), L = D(() => n.status.has_changes || N.value), O = D(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), J = D(() => n.status.git_changes.has_other_changes), P = D(() => {
      var Ce;
      return ((Ce = n.status.workflows.analyzed) == null ? void 0 : Ce.filter((H) => H.status === "broken")) || [];
    }), F = D(() => {
      var Ce;
      return ((Ce = n.status.workflows.analyzed) == null ? void 0 : Ce.filter(
        (H) => H.has_path_sync_issues && !H.has_issues
      )) || [];
    }), Y = D(() => P.value.length > 0);
    function ee(Ce) {
      const H = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const te of H) {
        const q = Ce.match(te);
        if (q != null && q[1])
          return q[1];
      }
      return null;
    }
    function ce(Ce) {
      const H = Ce.map(ee).filter((te) => !!te);
      return [...new Set(H)];
    }
    function he(Ce) {
      if (Ce.length === 0) return "";
      if (Ce.length === 1) return ` (>= ${Ce[0]})`;
      const H = Ce.slice(0, 2).map((q) => `>= ${q}`).join(", "), te = Ce.length > 2;
      return ` (${H}${te ? ", ..." : ""})`;
    }
    function ne(Ce) {
      return Ce.replace(/uninstallable node mappings?/gi, (H) => H.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function K(Ce) {
      const H = ne(Ce.issue_summary || "Has issues"), te = /(?:>=|v?\d+\.\d+)/i.test(H), q = ce(Ce.version_gated_guidance || []);
      return (Ce.nodes_version_gated_count || 0) > 0 && q.length > 0 && !te ? `${Ce.name} — ${H} (needs ComfyUI ${q.map((Z) => `>= ${Z}`).join(", ")})` : `${Ce.name} — ${H}`;
    }
    const le = D(() => P.value.reduce(
      (Ce, H) => Ce + (H.nodes_version_gated_count || 0),
      0
    )), Le = D(() => {
      const Ce = P.value.flatMap(
        (H) => ce(H.version_gated_guidance || [])
      );
      return [...new Set(Ce)];
    }), oe = D(() => P.value.reduce(
      (Ce, H) => Ce + (H.nodes_uninstallable_count || 0),
      0
    )), pe = D(() => {
      const Ce = [];
      return le.value > 0 && Ce.push(
        `${le.value} require newer ComfyUI${he(Le.value)}`
      ), oe.value > 0 && Ce.push(`${oe.value} need community packages`), Ce.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${Ce.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), A = D(() => Y.value || F.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), fe = D(() => {
      const Ce = [];
      return n.status.workflows.new.length > 0 && Ce.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && Ce.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && Ce.push(`${n.status.workflows.deleted.length} deleted`), Ce.length > 0 ? `${Ce.join(", ")} workflow${Ce.length === 1 && !Ce[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Re = D(() => {
      var te, q;
      const Ce = [], H = n.status.comparison;
      return (te = H.missing_nodes) != null && te.length && Ce.push(`${H.missing_nodes.length} missing node${H.missing_nodes.length === 1 ? "" : "s"}`), (q = H.extra_nodes) != null && q.length && Ce.push(`${H.extra_nodes.length} untracked node${H.extra_nodes.length === 1 ? "" : "s"}`), Ce.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Ce.join(" and ")}.`;
    }), Fe = D(() => {
      var te, q;
      const Ce = [], H = n.status.comparison;
      return (te = H.extra_nodes) != null && te.length && (H.extra_nodes.slice(0, 3).forEach((Z) => {
        Ce.push(`Untracked: ${Z}`);
      }), H.extra_nodes.length > 3 && Ce.push(`...and ${H.extra_nodes.length - 3} more untracked`)), (q = H.missing_nodes) != null && q.length && (H.missing_nodes.slice(0, 3).forEach((Z) => {
        Ce.push(`Missing: ${Z}`);
      }), H.missing_nodes.length > 3 && Ce.push(`...and ${H.missing_nodes.length - 3} more missing`)), Ce;
    });
    return (Ce, H) => (a(), i(j, null, [
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
              k(Ee, {
                variant: "primary",
                size: "sm",
                onClick: H[0] || (H[0] = (te) => Ce.$emit("start-setup"))
              }, {
                default: g(() => [...H[13] || (H[13] = [
                  $(" Start Setup ", -1)
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
              k(Ee, {
                variant: "primary",
                size: "sm",
                onClick: H[1] || (H[1] = (te) => Ce.$emit("view-environments"))
              }, {
                default: g(() => [...H[14] || (H[14] = [
                  $(" View Environments ", -1)
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
              k(Ee, {
                variant: "primary",
                size: "sm",
                onClick: H[2] || (H[2] = (te) => Ce.$emit("create-environment"))
              }, {
                default: g(() => [...H[15] || (H[15] = [
                  $(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          s("div", {
            class: "health-section-wrapper",
            onMouseenter: H[4] || (H[4] = (te) => r.value = !0),
            onMouseleave: H[5] || (H[5] = (te) => r.value = !1)
          }, [
            s("div", bv, [
              k(ss, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: g(() => [...H[16] || (H[16] = [
                  $(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              k(wd, { name: "fade" }, {
                default: g(() => [
                  r.value ? (a(), R(Ee, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: g(() => [...H[17] || (H[17] = [
                      $(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : h("", !0)
                ]),
                _: 1
              })
            ]),
            k(Sf, {
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
                  separator: N.value
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
                  count: O.value,
                  label: O.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : h("", !0),
                J.value ? (a(), R(hs, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : h("", !0),
                M.value && !T.value && !J.value ? (a(), R(hs, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : h("", !0),
                M.value ? h("", !0) : (a(), R(hs, {
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
                  s("div", $v, [
                    s("span", Cv, f(fe.value), 1),
                    k(Ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: H[3] || (H[3] = (te) => Ce.$emit("commit-changes"))
                    }, {
                      default: g(() => [...H[18] || (H[18] = [
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
          e.status.is_detached_head ? (a(), R(cs, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: g(() => [
              k(Ee, {
                variant: "primary",
                size: "sm",
                onClick: H[6] || (H[6] = (te) => Ce.$emit("create-branch"))
              }, {
                default: g(() => [...H[20] || (H[20] = [
                  $(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          s("div", xv, [
            k(ss, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: g(() => [...H[21] || (H[21] = [
                $(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            A.value ? (a(), i(j, { key: 0 }, [
              P.value.length > 0 ? (a(), R(cs, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${P.value.length} workflow${P.value.length === 1 ? "" : "s"} can't run`,
                description: pe.value,
                items: P.value.map(K)
              }, {
                actions: g(() => [
                  k(Ee, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[7] || (H[7] = (te) => Ce.$emit("view-workflows"))
                  }, {
                    default: g(() => [...H[22] || (H[22] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : h("", !0),
              F.value.length > 0 ? (a(), R(cs, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${F.value.length} workflow${F.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: F.value.map((te) => `${te.name} — ${te.models_needing_path_sync_count} model path${te.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: g(() => [
                  k(Ee, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[8] || (H[8] = (te) => Ce.$emit("view-workflows"))
                  }, {
                    default: g(() => [...H[23] || (H[23] = [
                      $(" See Workflows ", -1)
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
                  k(Ee, {
                    variant: "primary",
                    size: "sm",
                    disabled: m.value,
                    onClick: C
                  }, {
                    default: g(() => [
                      $(f(m.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  k(Ee, {
                    variant: "secondary",
                    size: "sm",
                    onClick: H[9] || (H[9] = (te) => Ce.$emit("view-workflows"))
                  }, {
                    default: g(() => [...H[24] || (H[24] = [
                      $(" See Workflows ", -1)
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
                items: Fe.value
              }, {
                actions: g(() => [
                  k(Ee, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: g(() => [...H[25] || (H[25] = [
                      $(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  k(Ee, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[10] || (H[10] = (te) => Ce.$emit("view-nodes"))
                  }, {
                    default: g(() => [...H[26] || (H[26] = [
                      $(" See Nodes ", -1)
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
                  k(Ee, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[11] || (H[11] = (te) => Ce.$emit("view-nodes"))
                  }, {
                    default: g(() => [...H[27] || (H[27] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : h("", !0)
            ], 64)) : L.value ? (a(), i("span", Sv, "No issues")) : (a(), R(ls, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      k(kv, {
        show: l.value,
        status: e.status,
        "is-repairing": p.value,
        onClose: H[12] || (H[12] = (te) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Ev = /* @__PURE__ */ xe(Iv, [["__scopeId", "data-v-df52ba90"]]), tP = io({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const sP = [
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
], oP = {
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
}, Tv = [
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
], nP = [
  ...Tv,
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
class Hr extends Error {
  constructor(o, n, l, r) {
    super(o);
    hn(this, "status");
    hn(this, "data");
    hn(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = n, this.data = l, this.endpoint = r;
  }
}
function Mv() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function pt() {
  const e = b(!1), t = b(null);
  async function o(G, ye) {
    var Rt;
    if (!((Rt = window.app) != null && Rt.api))
      throw new Error("ComfyUI API not available");
    const Ve = await window.app.api.fetchApi(G, ye), ut = await Ve.text();
    if (!Ve.ok) {
      let jt = {};
      if (ut)
        try {
          const ps = JSON.parse(ut);
          ps && typeof ps == "object" && (jt = ps);
        } catch {
          jt = { error: ut };
        }
      const et = jt.error || jt.message || jt.detail || Ve.statusText || `Request failed: ${Ve.status}`;
      throw new Hr(String(et), Ve.status, jt, G);
    }
    if (ut)
      return JSON.parse(ut);
  }
  async function n(G) {
    return o(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(G)}`);
  }
  async function l(G, ye, Ve) {
    return o("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: G, email: ye, password: Ve })
    });
  }
  async function r(G, ye, Ve) {
    return o("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: G, email: ye, password: Ve })
    });
  }
  async function c(G, ye) {
    return o(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(G)}`, {
      headers: { Authorization: `Bearer ${ye}` }
    });
  }
  async function u(G, ye) {
    return o("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: G, refresh_token: ye || null })
    });
  }
  async function d(G, ye) {
    return o(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(G)}`, {
      headers: { Authorization: `Bearer ${ye}` }
    });
  }
  async function v(G, ye, Ve) {
    return o(
      `/v2/comfygit/cloud/environments/${encodeURIComponent(ye)}/revisions?cloud_url=${encodeURIComponent(G)}`,
      {
        headers: { Authorization: `Bearer ${Ve}` }
      }
    );
  }
  async function m(G, ye, Ve, ut) {
    return o("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ye}`
      },
      body: JSON.stringify({
        cloud_url: G,
        source_message: Ve || null,
        cloud_environment_id: ut || null
      })
    });
  }
  async function p(G = !1) {
    return o(G ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(G, ye = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: G, allow_issues: ye })
    });
  }
  async function y(G = 10, ye = 0) {
    return o(`/v2/comfygit/log?limit=${G}&offset=${ye}`);
  }
  async function _(G, ye = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(G)}&limit=${ye}`);
  }
  async function x(G) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: G })
    });
  }
  async function C() {
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
  async function N(G) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: G, force: !0 })
    });
  }
  async function M(G) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(G)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function T(G, ye) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(G)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: ye, force: !0 })
    });
  }
  async function L() {
    return o("/v2/comfygit/branches");
  }
  async function O(G) {
    return o(`/v2/comfygit/commit/${G}`);
  }
  async function J(G, ye = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: G, force: ye })
    });
  }
  async function P(G, ye = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: G, start_point: ye })
    });
  }
  async function F(G, ye = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: G, force: ye })
    });
  }
  async function Y(G, ye = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(G)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ye })
    });
  }
  async function ee() {
    try {
      return await o("/v2/comfygit/environments");
    } catch {
      try {
        const G = await p();
        return {
          environments: [{
            name: G.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + G.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: G.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: G.branch
          }],
          current: G.environment,
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
  async function he(G) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(G)}`);
    } catch {
      return null;
    }
  }
  async function ne(G, ye) {
    const Ve = { target_env: G };
    return ye && (Ve.workspace_path = ye), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ve)
    });
  }
  async function K() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function le(G) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function Le() {
    return o("/v2/workspace/environments/create_status");
  }
  async function oe(G = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${G}`);
  }
  async function pe(G) {
    return o(`/v2/workspace/environments/${G}`, {
      method: "DELETE"
    });
  }
  async function A(G = !1) {
    try {
      return o(G ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ye = await p(G), Ve = [];
      return ye.workflows.new.forEach((ut) => {
        Ve.push({
          name: ut,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ut
        });
      }), ye.workflows.modified.forEach((ut) => {
        Ve.push({
          name: ut,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ut
        });
      }), ye.workflows.synced.forEach((ut) => {
        Ve.push({
          name: ut,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: ut
        });
      }), Ve;
    }
  }
  async function fe(G) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(G)}/details`);
  }
  async function Re(G) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(G)}/contract`);
  }
  async function Fe(G, ye) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(G)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ye)
    });
  }
  async function Ce(G) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(G)}/contract`, {
      method: "DELETE"
    });
  }
  async function H(G) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(G)}/resolve`, {
      method: "POST"
    });
  }
  async function te(G, ye, Ve) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(G)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ye, install_models: Ve })
    });
  }
  async function q(G, ye, Ve) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(G)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ye, importance: Ve })
    });
  }
  async function Z() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function Se() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function He(G) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(G)}`);
  }
  async function Ke(G) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: G })
    });
  }
  async function I(G, ye) {
    return o(`/v2/workspace/models/${G}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ye })
    });
  }
  async function E(G, ye) {
    return o(`/v2/workspace/models/${G}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ye })
    });
  }
  async function W(G) {
    return o(`/v2/workspace/models/${G}`, {
      method: "DELETE"
    });
  }
  async function ge(G) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function ke() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function _e() {
    return o("/v2/workspace/models/directory");
  }
  async function De(G) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: G })
    });
  }
  async function Oe(G) {
    const ye = new URLSearchParams({ url: G });
    return o(`/v2/workspace/huggingface/repo-info?${ye}`);
  }
  async function Me() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function Ie(G, ye = 10) {
    const Ve = new URLSearchParams({ query: G, limit: String(ye) });
    return o(`/v2/workspace/huggingface/search?${Ve}`);
  }
  async function Ge(G) {
    try {
      const ye = G ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(G)}` : "/v2/comfygit/config";
      return o(ye);
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
  async function ze(G, ye) {
    const Ve = ye ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ye)}` : "/v2/comfygit/config";
    return o(Ve, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function ve(G, ye) {
    try {
      const Ve = new URLSearchParams();
      return G && Ve.append("level", G), ye && Ve.append("lines", ye.toString()), o(`/v2/comfygit/debug/logs?${Ve}`);
    } catch {
      return [];
    }
  }
  async function Q(G, ye) {
    try {
      const Ve = new URLSearchParams();
      return G && Ve.append("level", G), ye && Ve.append("lines", ye.toString()), o(`/v2/workspace/debug/logs?${Ve}`);
    } catch {
      return [];
    }
  }
  async function Be() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function be() {
    return o("/v2/comfygit/debug/manifest");
  }
  async function Ye() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function Ae(G, ye) {
    try {
      const Ve = new URLSearchParams();
      return G && Ve.append("level", G), ye && Ve.append("lines", ye.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Ve}`);
    } catch {
      return [];
    }
  }
  async function Pe() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function B(G) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: G })
    });
  }
  async function ue() {
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
  async function ae(G) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(G)}/track-dev`, {
      method: "POST"
    });
  }
  async function Je(G) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(G)}/install`, {
      method: "POST"
    });
  }
  async function V(G, ye) {
    var et, ps, El, Tl;
    const Ve = Mv(), ut = ((ps = (et = window.app) == null ? void 0 : et.api) == null ? void 0 : ps.clientId) ?? ((Tl = (El = window.app) == null ? void 0 : El.api) == null ? void 0 : Tl.initialClientId) ?? "comfygit-panel", Rt = {
      id: G.id,
      version: G.version || G.selected_version || "latest",
      selected_version: G.selected_version || "latest",
      mode: G.mode || "remote",
      channel: G.channel || "default"
    };
    return G.install_source && (Rt.install_source = G.install_source), G.install_source === "git" && G.repository && (Rt.repository = G.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Rt,
        ui_id: Ve,
        client_id: ut
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", Ve, "for package:", G.id), ye != null && ye.beforeQueueStart && await ye.beforeQueueStart(Ve), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: Ve };
  }
  async function z(G) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(G)}/update`, {
      method: "POST"
    });
  }
  async function se(G, ye) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(G)}/criticality`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ criticality: ye })
    });
  }
  async function me(G) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(G)}`, {
      method: "DELETE"
    });
  }
  async function Te() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Qe(G, ye) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: G, url: ye })
    });
  }
  async function je(G) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(G)}`, {
      method: "DELETE"
    });
  }
  async function nt(G, ye, Ve) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(G)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ye, push_url: Ve })
    });
  }
  async function yt(G, ye) {
    const Ve = {};
    return ye && (Ve["X-Git-Auth-Token"] = ye), o(`/v2/comfygit/remotes/${encodeURIComponent(G)}/fetch`, {
      method: "POST",
      headers: Ve
    });
  }
  async function It(G) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(G)}/status`);
    } catch {
      return null;
    }
  }
  async function re(G = "skip", ye = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: G,
        remove_extra_nodes: ye
      })
    });
  }
  async function U(G, ye) {
    const Ve = ye ? `/v2/comfygit/remotes/${encodeURIComponent(G)}/pull-preview?branch=${encodeURIComponent(ye)}` : `/v2/comfygit/remotes/${encodeURIComponent(G)}/pull-preview`;
    return o(Ve);
  }
  async function de(G, ye = {}) {
    const Ve = { "Content-Type": "application/json" };
    return ye.authToken && (Ve["X-Git-Auth-Token"] = ye.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(G)}/pull`, {
      method: "POST",
      headers: Ve,
      body: JSON.stringify({
        model_strategy: ye.modelStrategy || "skip",
        force: ye.force || !1,
        resolutions: ye.resolutions
      })
    });
  }
  async function qe(G, ye) {
    const Ve = ye ? `/v2/comfygit/remotes/${encodeURIComponent(G)}/push-preview?branch=${encodeURIComponent(ye)}` : `/v2/comfygit/remotes/${encodeURIComponent(G)}/push-preview`;
    return o(Ve);
  }
  async function ct(G, ye = {}) {
    const Ve = { "Content-Type": "application/json" };
    return ye.authToken && (Ve["X-Git-Auth-Token"] = ye.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(G)}/push`, {
      method: "POST",
      headers: Ve,
      body: JSON.stringify({ force: ye.force || !1 })
    });
  }
  async function Et(G, ye) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(G)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ye })
    });
  }
  async function at(G) {
    const ye = {
      success: 0,
      failed: []
    };
    for (const Ve of G)
      try {
        await H(Ve), ye.success++;
      } catch (ut) {
        ye.failed.push({
          name: Ve,
          error: ut instanceof Error ? ut.message : "Unknown error"
        });
      }
    return ye;
  }
  async function $t(G) {
    var ut;
    const ye = new FormData();
    if (ye.append("file", G), !((ut = window.app) != null && ut.api))
      throw new Error("ComfyUI API not available");
    const Ve = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ye
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ve.ok) {
      const Rt = await Ve.json().catch(() => ({}));
      throw new Error(Rt.error || `Preview failed: ${Ve.status}`);
    }
    return Ve.json();
  }
  async function Ut(G) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(G)}`
    );
  }
  async function xs(G, ye, Ve, ut) {
    var et;
    const Rt = new FormData();
    if (Rt.append("file", G), Rt.append("name", ye), Rt.append("model_strategy", Ve), Rt.append("torch_backend", ut), !((et = window.app) != null && et.api))
      throw new Error("ComfyUI API not available");
    const jt = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Rt
    });
    if (!jt.ok) {
      const ps = await jt.json().catch(() => ({}));
      throw new Error(ps.message || ps.error || `Import failed: ${jt.status}`);
    }
    return jt.json();
  }
  async function ia() {
    return o("/v2/workspace/import/status");
  }
  async function Us(G) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: G })
    });
  }
  async function ra(G, ye, Ve, ut) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: G,
        name: ye,
        model_strategy: Ve,
        torch_backend: ut
      })
    });
  }
  async function ro() {
    return o("/v2/setup/status");
  }
  async function co() {
    return o("/v2/comfygit/update-check");
  }
  async function ca() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function Ss(G) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function ua() {
    return o("/v2/setup/initialize_status");
  }
  async function No(G) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function da() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function fa() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function ma(G, ye) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: G, save_key: ye })
    });
  }
  async function va() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function vn(G) {
    const ye = G ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(G)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(ye);
  }
  async function pa(G) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function ga() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function ha(G) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(G)}`, {
      method: "DELETE"
    });
  }
  async function ya(G) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(G)}/stop`, {
      method: "POST"
    });
  }
  async function wa(G) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(G)}/start`, {
      method: "POST"
    });
  }
  async function _a(G) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(G)}/status`);
  }
  async function ka(G) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: G })
    });
  }
  async function ba(G = !1) {
    return o(G ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function $a() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Ca() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function xa(G) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function pn(G) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(G)}`, {
      method: "DELETE"
    });
  }
  async function ie(G) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(G)
    });
  }
  async function X() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function We(G) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(G)}/info`);
  }
  async function Xe(G) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(G)}/instances`);
  }
  async function ft(G, ye) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(G)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ye)
    });
  }
  async function Ct(G, ye) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(G)}/instances/${encodeURIComponent(ye)}/start`, {
      method: "POST"
    });
  }
  async function rs(G, ye) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(G)}/instances/${encodeURIComponent(ye)}/stop`, {
      method: "POST"
    });
  }
  async function Ks(G, ye) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(G)}/instances/${encodeURIComponent(ye)}`, {
      method: "DELETE"
    });
  }
  async function gn(G) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: G })
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
    validateExport: C,
    validateDeploy: S,
    exportEnvWithForce: N,
    validateEnvironmentExport: M,
    exportEnvironmentWithForce: T,
    // Git Operations
    getBranches: L,
    getCommitDetail: O,
    checkout: J,
    createBranch: P,
    switchBranch: F,
    deleteBranch: Y,
    // Environment Management
    listEnvironments: ee,
    getEnvironments: ce,
    getEnvironmentDetails: he,
    switchEnvironment: ne,
    getSwitchProgress: K,
    createEnvironment: le,
    getCreateProgress: Le,
    getComfyUIReleases: oe,
    deleteEnvironment: pe,
    // Workflow Management
    getWorkflows: A,
    getWorkflowDetails: fe,
    getWorkflowContract: Re,
    saveWorkflowContract: Fe,
    deleteWorkflowContract: Ce,
    resolveWorkflow: H,
    installWorkflowDeps: te,
    setModelImportance: q,
    // Model Management
    getEnvironmentModels: Z,
    getWorkspaceModels: Se,
    getModelDetails: He,
    openFileLocation: Ke,
    addModelSource: I,
    removeModelSource: E,
    deleteModel: W,
    downloadModel: ge,
    scanWorkspaceModels: ke,
    getModelsDirectory: _e,
    setModelsDirectory: De,
    getHuggingFaceRepoInfo: Oe,
    getModelsSubdirectories: Me,
    searchHuggingFaceRepos: Ie,
    // Settings
    getConfig: Ge,
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
    getEnvironmentLogs: ve,
    getEnvironmentManifest: be,
    getWorkspaceLogs: Q,
    getEnvironmentLogPath: Be,
    getWorkspaceLogPath: Ye,
    getOrchestratorLogs: Ae,
    getOrchestratorLogPath: Pe,
    openFile: B,
    // Node Management
    getNodes: ue,
    trackNodeAsDev: ae,
    installNode: Je,
    queueNodeInstall: V,
    updateNode: z,
    updateNodeCriticality: se,
    uninstallNode: me,
    // Git Remotes
    getRemotes: Te,
    addRemote: Qe,
    removeRemote: je,
    updateRemoteUrl: nt,
    fetchRemote: yt,
    getRemoteSyncStatus: It,
    // Push/Pull
    getPullPreview: U,
    pullFromRemote: de,
    getPushPreview: qe,
    pushToRemote: ct,
    validateMerge: Et,
    // Environment Sync
    syncEnvironmentManually: re,
    // Workflow Repair
    repairWorkflowModels: at,
    // Import Operations
    previewTarballImport: $t,
    previewGitImport: Us,
    validateEnvironmentName: Ut,
    executeImport: xs,
    executeGitImport: ra,
    getImportProgress: ia,
    // First-Time Setup
    getSetupStatus: ro,
    // Manager Update Notice
    getUpdateCheck: co,
    updateManager: ca,
    initializeWorkspace: Ss,
    getInitializeProgress: ua,
    validatePath: No,
    // Deploy Operations
    getDeploySummary: da,
    getDataCenters: fa,
    testRunPodConnection: ma,
    getNetworkVolumes: va,
    getRunPodGpuTypes: vn,
    deployToRunPod: pa,
    getRunPodPods: ga,
    terminateRunPodPod: ha,
    stopRunPodPod: ya,
    startRunPodPod: wa,
    getDeploymentStatus: _a,
    exportDeployPackage: ka,
    getStoredRunPodKey: ba,
    clearRunPodKey: $a,
    // Custom Worker Operations
    getCustomWorkers: Ca,
    addCustomWorker: xa,
    removeCustomWorker: pn,
    testWorkerConnection: ie,
    scanForWorkers: X,
    getWorkerSystemInfo: We,
    getWorkerInstances: Xe,
    deployToWorker: ft,
    startWorkerInstance: Ct,
    stopWorkerInstance: rs,
    terminateWorkerInstance: Ks,
    // Git Authentication
    testGitAuth: gn
  };
}
async function $n(e, t) {
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
function Pv() {
  async function e() {
    try {
      return await $n("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function t() {
    try {
      return await $n("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await $n("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function n() {
    await $n("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: t,
    restart: o,
    kill: n
  };
}
const Rv = { class: "base-modal-header" }, Nv = {
  key: 0,
  class: "base-modal-title"
}, Lv = { class: "base-modal-body" }, Dv = {
  key: 0,
  class: "base-modal-loading"
}, Ov = {
  key: 1,
  class: "base-modal-error"
}, Av = {
  key: 0,
  class: "base-modal-footer"
}, Uv = /* @__PURE__ */ $e({
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
          onClick: u[1] || (u[1] = mt(() => {
          }, ["stop"]))
        }, [
          s("div", Rv, [
            ot(c.$slots, "header", {}, () => [
              e.title ? (a(), i("h3", Nv, f(e.title), 1)) : h("", !0)
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
            e.loading ? (a(), i("div", Dv, "Loading...")) : e.error ? (a(), i("div", Ov, f(e.error), 1)) : ot(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (a(), i("div", Av, [
            ot(c.$slots, "footer", {}, void 0)
          ])) : h("", !0)
        ], 2)
      ])
    ]));
  }
}), St = /* @__PURE__ */ xe(Uv, [["__scopeId", "data-v-8dab1081"]]), zv = ["type", "disabled"], Vv = {
  key: 0,
  class: "spinner"
}, Fv = /* @__PURE__ */ $e({
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
      e.loading ? (a(), i("span", Vv)) : h("", !0),
      ot(t.$slots, "default", {}, void 0)
    ], 10, zv));
  }
}), Ne = /* @__PURE__ */ xe(Fv, [["__scopeId", "data-v-f3452606"]]), Bv = {
  key: 0,
  class: "base-title-count"
}, Wv = /* @__PURE__ */ $e({
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
        e.count !== void 0 ? (a(), i("span", Bv, "(" + f(e.count) + ")", 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), oo = /* @__PURE__ */ xe(Wv, [["__scopeId", "data-v-5a01561d"]]), Gv = ["value", "disabled"], jv = {
  key: 0,
  value: "",
  disabled: ""
}, Hv = ["value"], qv = {
  key: 0,
  class: "base-select-error"
}, Kv = /* @__PURE__ */ $e({
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
        e.placeholder ? (a(), i("option", jv, f(e.placeholder), 1)) : h("", !0),
        (a(!0), i(j, null, we(e.options, (r) => (a(), i("option", {
          key: t(r),
          value: t(r)
        }, f(o(r)), 9, Hv))), 128))
      ], 42, Gv),
      e.error ? (a(), i("span", qv, f(e.error), 1)) : h("", !0)
    ], 2));
  }
}), Nn = /* @__PURE__ */ xe(Kv, [["__scopeId", "data-v-4996bfe0"]]), Jv = { class: "popover-header" }, Qv = { class: "popover-title" }, Yv = { class: "popover-content" }, Xv = {
  key: 0,
  class: "popover-actions"
}, Zv = /* @__PURE__ */ $e({
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
          onClick: o[1] || (o[1] = mt(() => {
          }, ["stop"]))
        }, [
          s("div", Jv, [
            s("h4", Qv, f(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", Yv, [
            ot(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (a(), i("div", Xv, [
            ot(t.$slots, "actions", {}, void 0)
          ])) : h("", !0)
        ], 4)
      ])) : h("", !0)
    ]));
  }
}), is = /* @__PURE__ */ xe(Zv, [["__scopeId", "data-v-42815ace"]]), ep = { class: "detail-section" }, tp = {
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
}, yp = { class: "node-content" }, wp = { class: "node-main" }, _p = { class: "node-name" }, kp = { class: "node-badge" }, bp = {
  key: 0,
  class: "node-version"
}, $p = ["onClick"], Cp = {
  key: 2,
  class: "node-install-queued"
}, xp = {
  key: 0,
  class: "node-guidance"
}, Sp = /* @__PURE__ */ $e({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = pt(), d = b(null), v = b(!1), m = b(null), p = b(!1), w = b({}), y = b(!1), _ = b(/* @__PURE__ */ new Set()), x = b(/* @__PURE__ */ new Set()), C = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(ne) {
      switch (ne) {
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
    function N(ne) {
      switch (ne) {
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
    function M(ne) {
      switch (ne) {
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
    function T(ne) {
      switch (ne) {
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
    function L(ne) {
      switch (ne) {
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
    function O(ne) {
      if (!ne.loaded_by || ne.loaded_by.length === 0) return [];
      const K = ne.hash || ne.filename;
      return _.value.has(K) ? ne.loaded_by : ne.loaded_by.slice(0, 3);
    }
    function J(ne) {
      return _.value.has(ne);
    }
    function P(ne) {
      _.value.has(ne) ? _.value.delete(ne) : _.value.add(ne), _.value = new Set(_.value);
    }
    async function F() {
      v.value = !0, m.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (ne) {
        m.value = ne instanceof Error ? ne.message : "Failed to load workflow details";
      } finally {
        v.value = !1;
      }
    }
    function Y(ne, K) {
      w.value[ne] = K, p.value = !0;
    }
    async function ee(ne) {
      try {
        await c(ne);
      } catch (K) {
        m.value = K instanceof Error ? K.message : "Failed to open file location";
      }
    }
    async function ce(ne) {
      if (ne.package_id)
        try {
          const K = ne.latest_version || "latest";
          await u({
            id: ne.package_id,
            version: K,
            selected_version: K,
            mode: "remote",
            channel: "default"
          }), x.value.add(ne.package_id);
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
        for (const [ne, K] of Object.entries(w.value))
          await r(o.workflowName, ne, K);
        n("refresh"), n("close");
      } catch (ne) {
        m.value = ne instanceof Error ? ne.message : "Failed to save changes";
      } finally {
        v.value = !1;
      }
    }
    return rt(F), (ne, K) => (a(), i(j, null, [
      k(St, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: v.value,
        error: m.value || void 0,
        onClose: K[4] || (K[4] = (le) => n("close"))
      }, {
        body: g(() => [
          d.value ? (a(), i(j, { key: 0 }, [
            s("section", ep, [
              k(oo, { variant: "section" }, {
                default: g(() => [
                  $("MODELS USED (" + f(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (a(), i("div", tp, " No models used in this workflow ")) : h("", !0),
              (a(!0), i(j, null, we(d.value.models, (le) => {
                var Le;
                return a(), i("div", {
                  key: le.hash || le.filename,
                  class: "model-card"
                }, [
                  s("div", sp, [
                    K[6] || (K[6] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", op, f(le.filename), 1)
                  ]),
                  s("div", np, [
                    s("div", ap, [
                      K[7] || (K[7] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Ue(["value", S(le.status)])
                      }, f(N(le.status)), 3)
                    ]),
                    s("div", lp, [
                      s("span", ip, [
                        K[8] || (K[8] = $(" Importance: ", -1)),
                        k(jr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: K[0] || (K[0] = (oe) => y.value = !0)
                        })
                      ]),
                      k(Nn, {
                        "model-value": w.value[le.filename] || le.importance,
                        options: C,
                        "onUpdate:modelValue": (oe) => Y(le.filename, oe)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    le.loaded_by && le.loaded_by.length > 0 ? (a(), i("div", rp, [
                      K[9] || (K[9] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", cp, [
                        (a(!0), i(j, null, we(O(le), (oe, pe) => (a(), i("div", {
                          key: `${oe.node_id}-${pe}`,
                          class: "node-reference"
                        }, f(oe.node_type) + " (Node #" + f(oe.node_id) + ") ", 1))), 128)),
                        le.loaded_by.length > 3 ? (a(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (oe) => P(le.hash || le.filename)
                        }, f(J(le.hash || le.filename) ? "▼ Show less" : `▶ View all (${le.loaded_by.length})`), 9, up)) : h("", !0)
                      ])
                    ])) : h("", !0),
                    le.size_mb ? (a(), i("div", dp, [
                      K[10] || (K[10] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", fp, f(le.size_mb) + " MB", 1)
                    ])) : h("", !0),
                    le.has_category_mismatch ? (a(), i("div", mp, [
                      K[13] || (K[13] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", vp, [
                        K[11] || (K[11] = $(" In ", -1)),
                        s("code", null, f(le.actual_category) + "/", 1),
                        K[12] || (K[12] = $(" but loader needs ", -1)),
                        s("code", null, f((Le = le.expected_categories) == null ? void 0 : Le[0]) + "/", 1)
                      ])
                    ])) : h("", !0)
                  ]),
                  le.status !== "available" ? (a(), i("div", pp, [
                    le.status === "downloadable" ? (a(), R(Ne, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: K[1] || (K[1] = (oe) => n("resolve"))
                    }, {
                      default: g(() => [...K[14] || (K[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : le.status === "category_mismatch" && le.file_path ? (a(), R(Ne, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (oe) => ee(le.file_path)
                    }, {
                      default: g(() => [...K[15] || (K[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : le.status !== "path_mismatch" ? (a(), R(Ne, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: K[2] || (K[2] = (oe) => n("resolve"))
                    }, {
                      default: g(() => [...K[16] || (K[16] = [
                        $(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : h("", !0)
                  ])) : h("", !0)
                ]);
              }), 128))
            ]),
            s("section", gp, [
              k(oo, { variant: "section" }, {
                default: g(() => [
                  $("NODES USED (" + f(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (a(), i("div", hp, " No custom nodes used in this workflow ")) : h("", !0),
              (a(!0), i(j, null, we(d.value.nodes, (le, Le) => (a(), i("div", {
                key: `${le.name}-${le.status}-${Le}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Ue(["node-status", M(le.status)])
                }, f(T(le.status)), 3),
                s("div", yp, [
                  s("div", wp, [
                    s("span", _p, f(le.name), 1),
                    s("span", kp, f(L(le.status)), 1),
                    le.version ? (a(), i("span", bp, "v" + f(le.version), 1)) : h("", !0),
                    le.status === "uninstallable" && le.package_id && !x.value.has(le.package_id) ? (a(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (oe) => ce(le)
                    }, " Install ", 8, $p)) : le.status === "uninstallable" && le.package_id && x.value.has(le.package_id) ? (a(), i("span", Cp, " Queued ")) : h("", !0)
                  ]),
                  le.guidance ? (a(), i("div", xp, f(le.guidance), 1)) : h("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : h("", !0)
        ]),
        footer: g(() => [
          k(Ne, {
            variant: "secondary",
            onClick: K[3] || (K[3] = (le) => n("close"))
          }, {
            default: g(() => [...K[17] || (K[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (a(), R(Ne, {
            key: 0,
            variant: "primary",
            onClick: he
          }, {
            default: g(() => [...K[18] || (K[18] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      k(is, {
        show: y.value,
        title: "Model Importance Levels",
        onClose: K[5] || (K[5] = (le) => y.value = !1)
      }, {
        content: g(() => [...K[19] || (K[19] = [
          s("ul", { class: "importance-info-list" }, [
            s("li", null, [
              s("strong", null, "Required"),
              $(" — Must have for workflow to run")
            ]),
            s("li", null, [
              s("strong", null, "Flexible"),
              $(" — Workflow adapts if missing")
            ]),
            s("li", null, [
              s("strong", null, "Optional"),
              $(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ip = /* @__PURE__ */ xe(Sp, [["__scopeId", "data-v-543076d9"]]), lt = io({
  items: [],
  status: "idle"
});
let _s = null;
function qr() {
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
    await Ep(e), e.status = "completed", e.progress = 100;
  } catch (t) {
    e.status = "failed", e.error = t instanceof Error ? t.message : "Download failed", e.retries++;
  } finally {
    lt.status = "idle", po();
  }
}
async function Ep(e) {
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
            const _ = u, x = (_ - r) / 1e3, C = e.downloaded - c;
            if (C > 0 && x > 0)
              if (e.speed = C / x, r = _, c = e.downloaded, e.speed > 0 && e.size > 0) {
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
async function Tp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const t = await e.json();
    if (!t.pending_downloads || t.pending_downloads.length === 0) return;
    for (const o of t.pending_downloads) {
      if (lt.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: qr(),
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
  function e(C) {
    for (const S of C) {
      if (lt.items.some(
        (T) => T.url === S.url && T.targetPath === S.targetPath && ["queued", "downloading", "paused", "completed"].includes(T.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${S.filename}`);
        continue;
      }
      const M = {
        id: qr(),
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
      lt.items.push(M);
    }
    lt.status === "idle" && po();
  }
  async function t(C) {
    const S = Ua(C);
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
        const N = lt.items.findIndex((M) => M.id === C);
        N >= 0 && lt.items.splice(N, 1);
      }
    }
  }
  function o(C) {
    const S = Ua(C);
    !S || S.status !== "failed" || (S.status = "queued", S.error = void 0, S.progress = 0, S.downloaded = 0, lt.status === "idle" && po());
  }
  function n(C) {
    const S = Ua(C);
    !S || S.status !== "paused" || (S.status = "queued", lt.status === "idle" && po());
  }
  function l() {
    const C = lt.items.filter((S) => S.status === "paused");
    for (const S of C)
      S.status = "queued";
    lt.status === "idle" && po();
  }
  function r(C) {
    const S = lt.items.findIndex((N) => N.id === C);
    S >= 0 && ["completed", "failed", "paused"].includes(lt.items[S].status) && lt.items.splice(S, 1);
  }
  function c() {
    lt.items = lt.items.filter((C) => C.status !== "completed");
  }
  function u() {
    lt.items = lt.items.filter((C) => C.status !== "failed");
  }
  const d = D(
    () => lt.items.find((C) => C.status === "downloading")
  ), v = D(
    () => lt.items.filter((C) => C.status === "queued")
  ), m = D(
    () => lt.items.filter((C) => C.status === "completed")
  ), p = D(
    () => lt.items.filter((C) => C.status === "failed")
  ), w = D(
    () => lt.items.filter((C) => C.status === "paused")
  ), y = D(() => lt.items.length > 0), _ = D(
    () => lt.items.filter((C) => C.status === "queued" || C.status === "downloading").length
  ), x = D(
    () => lt.items.some((C) => C.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Dn(lt),
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
    loadPendingDownloads: Tp
  };
}
function Kr() {
  const e = b(null), t = b(null), o = b([]), n = b([]), l = b(!1), r = b(null);
  async function c(N, M) {
    var L;
    if (!((L = window.app) != null && L.api))
      throw new Error("ComfyUI API not available");
    const T = await window.app.api.fetchApi(N, M);
    if (!T.ok) {
      const O = await T.json().catch(() => ({})), J = O.error || O.message || `Request failed: ${T.status}`;
      throw new Error(J);
    }
    return T.json();
  }
  async function u(N) {
    l.value = !0, r.value = null;
    try {
      let M;
      return Oo() || (M = await c(
        `/v2/comfygit/workflow/${N}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), M.nodes.version_gated = M.nodes.version_gated || [], M.nodes.uninstallable = M.nodes.uninstallable || [], M.node_guidance = M.node_guidance || {}, M.package_aliases = M.package_aliases || {}, e.value = M, M;
    } catch (M) {
      const T = M instanceof Error ? M.message : "Unknown error occurred";
      throw r.value = T, M;
    } finally {
      l.value = !1;
    }
  }
  async function d(N, M, T, L) {
    l.value = !0, r.value = null;
    try {
      let O;
      if (!Oo()) {
        const J = Object.fromEntries(M), P = Object.fromEntries(T), F = L ? Array.from(L) : [];
        O = await c(
          `/v2/comfygit/workflow/${N}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: J,
              model_choices: P,
              skipped_packages: F
            })
          }
        );
      }
      return t.value = O, O;
    } catch (O) {
      const J = O instanceof Error ? O.message : "Unknown error occurred";
      throw r.value = J, O;
    } finally {
      l.value = !1;
    }
  }
  async function v(N, M = 10) {
    l.value = !0, r.value = null;
    try {
      let T;
      return Oo() || (T = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: N, limit: M })
        }
      )), o.value = T.results, T.results;
    } catch (T) {
      const L = T instanceof Error ? T.message : "Unknown error occurred";
      throw r.value = L, T;
    } finally {
      l.value = !1;
    }
  }
  async function m(N, M = 10) {
    l.value = !0, r.value = null;
    try {
      let T;
      return Oo() || (T = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: N, limit: M })
        }
      )), n.value = T.results, T.results;
    } catch (T) {
      const L = T instanceof Error ? T.message : "Unknown error occurred";
      throw r.value = L, T;
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
  async function y(N) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Oo(), await _(N);
    } catch (M) {
      const T = M instanceof Error ? M.message : "Failed to install nodes";
      throw p.installError = T, M;
    }
  }
  async function _(N) {
    var T;
    const M = await c(
      `/v2/comfygit/workflow/${N}/install`,
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
      const L = new Map(((T = M.failed) == null ? void 0 : T.map((O) => [O.node_id, O.error])) || []);
      for (let O = 0; O < p.nodesToInstall.length; O++) {
        const J = p.nodesToInstall[O], P = L.get(J);
        p.nodeInstallProgress.completedNodes.push({
          node_id: J,
          success: !P,
          error: P
        });
      }
    }
    return p.nodesInstalled = M.nodes_installed, p.needsRestart = M.nodes_installed.length > 0, M.failed && M.failed.length > 0 && (p.installError = `${M.failed.length} package(s) failed to install`), M;
  }
  async function x(N, M, T) {
    w(), p.phase = "resolving", r.value = null;
    const L = Object.fromEntries(M), O = Object.fromEntries(T);
    try {
      const J = await fetch(`/v2/comfygit/workflow/${N}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: L,
          model_choices: O
        })
      });
      if (!J.ok)
        throw new Error(`Request failed: ${J.status}`);
      if (!J.body)
        throw new Error("No response body");
      const P = J.body.getReader(), F = new TextDecoder();
      let Y = "";
      for (; ; ) {
        const { done: ee, value: ce } = await P.read();
        if (ee) break;
        Y += F.decode(ce, { stream: !0 });
        const he = Y.split(`

`);
        Y = he.pop() || "";
        for (const ne of he) {
          if (!ne.trim()) continue;
          const K = ne.split(`
`);
          let le = "", Le = "";
          for (const oe of K)
            oe.startsWith("event: ") ? le = oe.slice(7) : oe.startsWith("data: ") && (Le = oe.slice(6));
          if (Le)
            try {
              const oe = JSON.parse(Le);
              C(le, oe);
            } catch (oe) {
              console.warn("Failed to parse SSE event:", oe);
            }
        }
      }
    } catch (J) {
      const P = J instanceof Error ? J.message : "Unknown error occurred";
      throw r.value = P, p.error = P, p.phase = "error", J;
    }
  }
  function C(N, M) {
    switch (N) {
      case "batch_start":
        p.phase = "downloading", p.totalFiles = M.total;
        break;
      case "file_start":
        p.currentFile = M.filename, p.currentFileIndex = M.index, p.bytesDownloaded = 0, p.bytesTotal = void 0;
        break;
      case "file_progress":
        p.bytesDownloaded = M.downloaded, p.bytesTotal = M.total;
        break;
      case "file_complete":
        p.completedFiles.push({
          filename: M.filename,
          success: M.success,
          error: M.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        p.nodesToInstall = M.nodes_to_install || [], M.download_results && (p.completedFiles = M.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = M.message, p.phase = "error", r.value = M.message;
        break;
    }
  }
  function S(N, M) {
    const { addToQueue: T } = Ro(), L = M.filter((O) => O.url && O.target_path).map((O) => ({
      workflow: N,
      filename: O.filename,
      url: O.url,
      targetPath: O.target_path,
      size: O.size || 0,
      type: "model"
    }));
    return L.length > 0 && T(L), L.length;
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
const Mp = { class: "resolution-stepper" }, Pp = { class: "stepper-header" }, Rp = ["onClick"], Np = {
  key: 0,
  class: "step-icon"
}, Lp = {
  key: 1,
  class: "step-number"
}, Dp = { class: "step-label" }, Op = {
  key: 0,
  class: "step-connector"
}, Ap = { class: "stepper-content" }, Up = /* @__PURE__ */ $e({
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
    return (v, m) => (a(), i("div", Mp, [
      s("div", Pp, [
        (a(!0), i(j, null, we(e.steps, (p, w) => (a(), i("div", {
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
            l(p.id) ? (a(), i("span", Np, "✓")) : (a(), i("span", Lp, f(w + 1), 1))
          ], 2),
          s("div", Dp, f(p.label), 1),
          w < e.steps.length - 1 ? (a(), i("div", Op)) : h("", !0)
        ], 10, Rp))), 128))
      ]),
      s("div", Ap, [
        ot(v.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), zp = /* @__PURE__ */ xe(Up, [["__scopeId", "data-v-2a7b3af8"]]), Vp = /* @__PURE__ */ $e({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = D(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), n = D(() => `confidence-${o.value}`), l = D(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, c) => (a(), i("span", {
      class: Ue(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), jn = /* @__PURE__ */ xe(Vp, [["__scopeId", "data-v-17ec4b80"]]), Fp = { class: "node-info" }, Bp = { class: "node-info-text" }, Wp = { class: "item-body" }, Gp = {
  key: 0,
  class: "resolved-state"
}, jp = {
  key: 1,
  class: "multiple-options"
}, Hp = {
  key: 0,
  class: "installed-packs-section"
}, qp = { class: "installed-packs-list" }, Kp = ["onClick"], Jp = { class: "installed-pack-name" }, Qp = { class: "installed-pack-source" }, Yp = { class: "options-list" }, Xp = ["onClick"], Zp = ["name", "value", "checked", "onChange"], eg = { class: "option-content" }, tg = { class: "option-header" }, sg = { class: "option-package-id" }, og = {
  key: 0,
  class: "option-title"
}, ng = { class: "option-meta" }, ag = {
  key: 0,
  class: "installed-badge"
}, lg = { class: "action-buttons" }, ig = {
  key: 2,
  class: "unresolved"
}, rg = {
  key: 0,
  class: "installed-packs-section"
}, cg = { class: "installed-packs-list" }, ug = ["onClick"], dg = { class: "installed-pack-name" }, fg = { class: "installed-pack-source" }, mg = {
  key: 1,
  class: "searching-state"
}, vg = { class: "options-list" }, pg = ["onClick"], gg = ["name", "value"], hg = { class: "option-content" }, yg = { class: "option-header" }, wg = { class: "option-package-id" }, _g = {
  key: 0,
  class: "option-description"
}, kg = { class: "option-meta" }, bg = {
  key: 0,
  class: "installed-badge"
}, $g = {
  key: 3,
  class: "unresolved-message"
}, Cg = { class: "action-buttons" }, xg = /* @__PURE__ */ $e({
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
    const r = D(() => !!o.choice);
    D(() => {
      var m;
      return (m = o.choice) == null ? void 0 : m.action;
    }), D(() => {
      var m;
      return (m = o.choice) == null ? void 0 : m.package_id;
    });
    const c = D(() => o.installedNodePacks || []), u = D(() => {
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
      s("div", Fp, [
        s("span", Bp, [
          p[7] || (p[7] = $("Node type: ", -1)),
          s("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), i("span", {
          key: 0,
          class: Ue(["status-badge", u.value])
        }, f(e.statusLabel), 3)) : h("", !0)
      ]),
      s("div", Wp, [
        r.value ? (a(), i("div", Gp, [
          k(Ne, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => n("clear-choice"))
          }, {
            default: g(() => [...p[8] || (p[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), i("div", jp, [
          c.value.length > 0 ? (a(), i("div", Hp, [
            p[9] || (p[9] = s("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            s("div", qp, [
              (a(!0), i(j, null, we(c.value, (w) => (a(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (y) => n("installed-pack-selected", w.package_id)
              }, [
                s("span", Jp, f(w.package_id), 1),
                s("span", Qp, f(v(w.source)), 1)
              ], 8, Kp))), 128))
            ])
          ])) : h("", !0),
          p[13] || (p[13] = s("p", { class: "options-prompt" }, "Potential matches:", -1)),
          s("div", Yp, [
            (a(!0), i(j, null, we(e.options, (w, y) => (a(), i("label", {
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
              }, null, 40, Zp),
              s("div", eg, [
                s("div", tg, [
                  s("span", sg, f(w.package_id), 1),
                  k(jn, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (a(), i("div", og, f(w.title), 1)) : h("", !0),
                s("div", ng, [
                  w.is_installed ? (a(), i("span", ag, "Already Installed")) : h("", !0)
                ])
              ])
            ], 10, Xp))), 128))
          ]),
          s("div", lg, [
            k(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => n("search"))
            }, {
              default: g(() => [...p[10] || (p[10] = [
                $(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            k(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => n("manual-entry"))
            }, {
              default: g(() => [...p[11] || (p[11] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (w) => n("mark-optional"))
            }, {
              default: g(() => [...p[12] || (p[12] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), i("div", ig, [
          c.value.length > 0 ? (a(), i("div", rg, [
            p[14] || (p[14] = s("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            s("div", cg, [
              (a(!0), i(j, null, we(c.value, (w) => (a(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (y) => n("installed-pack-selected", w.package_id)
              }, [
                s("span", dg, f(w.package_id), 1),
                s("span", fg, f(v(w.source)), 1)
              ], 8, ug))), 128))
            ])
          ])) : h("", !0),
          e.isSearching ? (a(), i("div", mg, [...p[15] || (p[15] = [
            s("span", { class: "searching-spinner" }, null, -1),
            s("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), i(j, { key: 2 }, [
            p[16] || (p[16] = s("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            s("div", vg, [
              (a(!0), i(j, null, we(e.searchResults.slice(0, 5), (w, y) => (a(), i("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (_) => n("search-result-selected", w)
              }, [
                s("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: y
                }, null, 8, gg),
                s("div", hg, [
                  s("div", yg, [
                    s("span", wg, f(w.package_id), 1),
                    k(jn, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (a(), i("div", _g, f(l(w.description)), 1)) : h("", !0),
                  s("div", kg, [
                    w.is_installed ? (a(), i("span", bg, "Already Installed")) : h("", !0)
                  ])
                ])
              ], 8, pg))), 128))
            ])
          ], 64)) : (a(), i("div", $g, [...p[17] || (p[17] = [
            s("span", { class: "warning-icon" }, "⚠", -1),
            s("span", null, "No matching package found in registry", -1)
          ])])),
          s("div", Cg, [
            k(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[4] || (p[4] = (w) => n("search"))
            }, {
              default: g(() => {
                var w;
                return [
                  $(f((w = e.searchResults) != null && w.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            k(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[5] || (p[5] = (w) => n("manual-entry"))
            }, {
              default: g(() => [...p[18] || (p[18] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[6] || (p[6] = (w) => n("mark-optional"))
            }, {
              default: g(() => [...p[19] || (p[19] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Sg = /* @__PURE__ */ xe(xg, [["__scopeId", "data-v-fb0bbf03"]]), Ig = { class: "item-navigator" }, Eg = { class: "nav-item-info" }, Tg = ["title"], Mg = { class: "nav-controls" }, Pg = { class: "nav-arrows" }, Rg = ["disabled"], Ng = ["disabled"], Lg = { class: "nav-position" }, Dg = /* @__PURE__ */ $e({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const o = t;
    return (n, l) => (a(), i("div", Ig, [
      s("div", Eg, [
        s("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, Tg)
      ]),
      s("div", Mg, [
        s("div", Pg, [
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, Rg),
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, Ng)
        ]),
        s("span", Lg, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), Jr = /* @__PURE__ */ xe(Dg, [["__scopeId", "data-v-74af7920"]]), Og = ["type", "value", "placeholder", "disabled"], Ag = {
  key: 0,
  class: "base-input-error"
}, Ug = /* @__PURE__ */ $e({
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
      }, null, 42, Og),
      e.error ? (a(), i("span", Ag, f(e.error), 1)) : h("", !0)
    ], 2));
  }
}), wt = /* @__PURE__ */ xe(Ug, [["__scopeId", "data-v-9ba02cdc"]]), zg = { class: "node-resolution-step" }, Vg = {
  key: 0,
  class: "auto-resolved-section"
}, Fg = { class: "section-header" }, Bg = { class: "stat-badge" }, Wg = { class: "resolved-packages-list" }, Gg = { class: "package-info" }, jg = { class: "package-id" }, Hg = { class: "node-count" }, qg = { class: "package-actions" }, Kg = {
  key: 0,
  class: "status-badge install"
}, Jg = {
  key: 1,
  class: "status-badge skip"
}, Qg = ["onClick"], Yg = {
  key: 1,
  class: "section-divider"
}, Xg = { class: "step-header" }, Zg = { class: "stat-badge" }, eh = {
  key: 1,
  class: "step-body"
}, th = {
  key: 3,
  class: "empty-state"
}, sh = { class: "node-modal-body" }, oh = { class: "node-search-results-container" }, nh = {
  key: 0,
  class: "node-search-results"
}, ah = ["onClick"], lh = { class: "node-result-header" }, ih = { class: "node-result-package-id" }, rh = {
  key: 0,
  class: "node-result-description"
}, ch = {
  key: 1,
  class: "node-empty-state"
}, uh = {
  key: 2,
  class: "node-empty-state"
}, dh = {
  key: 3,
  class: "node-empty-state"
}, fh = { class: "node-manual-entry-modal" }, mh = { class: "node-modal-body" }, vh = { class: "node-modal-actions" }, ph = /* @__PURE__ */ $e({
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
    const o = e, n = t, { searchNodes: l } = Kr(), r = b(0), c = b(!1), u = b(!1), d = b(""), v = b(""), m = b([]), p = b(!1), w = b(/* @__PURE__ */ new Map()), y = b(/* @__PURE__ */ new Set()), _ = b(!1);
    function x() {
      _.value && pe(), _.value = !1;
    }
    const C = D(() => o.nodes[r.value]), S = D(() => o.nodes.filter((q) => o.nodeChoices.has(q.node_type)).length), N = D(() => C.value ? w.value.get(C.value.node_type) || [] : []), M = D(() => C.value ? y.value.has(C.value.node_type) : !1);
    kt(C, async (q) => {
      var Z;
      q && ((Z = q.options) != null && Z.length || w.value.has(q.node_type) || y.value.has(q.node_type) || o.nodeChoices.has(q.node_type) || await T(q.node_type));
    }, { immediate: !0 });
    async function T(q) {
      y.value.add(q);
      try {
        const Z = await l(q, 5);
        w.value.set(q, Z);
      } catch {
        w.value.set(q, []);
      } finally {
        y.value.delete(q);
      }
    }
    const L = D(() => o.autoResolvedPackages.filter((q) => !o.skippedPackages.has(q.package_id)).length);
    function O(q) {
      return o.skippedPackages.has(q);
    }
    function J(q) {
      n("package-skip", q);
    }
    const P = D(() => {
      var Z;
      if (!C.value) return "not-found";
      const q = o.nodeChoices.get(C.value.node_type);
      if (q)
        switch (q.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (Z = C.value.options) != null && Z.length ? "ambiguous" : "not-found";
    }), F = D(() => {
      var Z;
      if (!C.value) return;
      const q = o.nodeChoices.get(C.value.node_type);
      if (q)
        switch (q.action) {
          case "install":
            return q.package_id ? `→ ${q.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Z = C.value.options) != null && Z.length ? `${C.value.options.length} matches` : "Not Found";
    });
    function Y(q) {
      q >= 0 && q < o.nodes.length && (r.value = q);
    }
    function ee() {
      var q;
      for (let Z = r.value + 1; Z < o.nodes.length; Z++) {
        const Se = o.nodes[Z];
        if (!((q = o.nodeChoices) != null && q.has(Se.node_type))) {
          Y(Z);
          return;
        }
      }
    }
    function ce() {
      C.value && (n("mark-optional", C.value.node_type), Pt(() => ee()));
    }
    function he() {
      C.value && (n("skip", C.value.node_type), Pt(() => ee()));
    }
    function ne(q) {
      C.value && (n("option-selected", C.value.node_type, q), Pt(() => ee()));
    }
    function K() {
      C.value && n("clear-choice", C.value.node_type);
    }
    function le() {
      C.value && (d.value = C.value.node_type, m.value = N.value, c.value = !0, Fe(d.value));
    }
    function Le() {
      v.value = "", u.value = !0;
    }
    function oe(q) {
      C.value && (n("manual-entry", C.value.node_type, q), Pt(() => ee()));
    }
    function pe() {
      c.value = !1, d.value = "", m.value = [];
    }
    function A() {
      u.value = !1, v.value = "";
    }
    let fe = null;
    function Re() {
      fe && clearTimeout(fe), fe = setTimeout(() => {
        Fe(d.value);
      }, 300);
    }
    async function Fe(q) {
      if (!q.trim()) {
        m.value = [];
        return;
      }
      p.value = !0;
      try {
        m.value = await l(q, 10);
      } catch {
        m.value = [];
      } finally {
        p.value = !1;
      }
    }
    function Ce(q) {
      C.value && (n("manual-entry", C.value.node_type, q.package_id), pe(), Pt(() => ee()));
    }
    function H(q) {
      C.value && (n("manual-entry", C.value.node_type, q.package_id), Pt(() => ee()));
    }
    function te() {
      !C.value || !v.value.trim() || (n("manual-entry", C.value.node_type, v.value.trim()), A(), Pt(() => ee()));
    }
    return (q, Z) => {
      var Se, He;
      return a(), i("div", zg, [
        e.autoResolvedPackages.length > 0 ? (a(), i("div", Vg, [
          s("div", Fg, [
            Z[6] || (Z[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", Bg, f(L.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", Wg, [
            (a(!0), i(j, null, we(e.autoResolvedPackages, (Ke) => (a(), i("div", {
              key: Ke.package_id,
              class: "resolved-package-item"
            }, [
              s("div", Gg, [
                s("code", jg, f(Ke.package_id), 1),
                s("span", Hg, f(Ke.node_types_count) + " node type" + f(Ke.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", qg, [
                O(Ke.package_id) ? (a(), i("span", Jg, " SKIPPED ")) : (a(), i("span", Kg, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (I) => J(Ke.package_id)
                }, f(O(Ke.package_id) ? "Include" : "Skip"), 9, Qg)
              ])
            ]))), 128))
          ])
        ])) : h("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), i("div", Yg)) : h("", !0),
        e.nodes.length > 0 ? (a(), i(j, { key: 2 }, [
          s("div", Xg, [
            Z[7] || (Z[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", Zg, f(S.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          C.value ? (a(), R(Jr, {
            key: 0,
            "item-name": C.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: Z[0] || (Z[0] = (Ke) => Y(r.value - 1)),
            onNext: Z[1] || (Z[1] = (Ke) => Y(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
          C.value ? (a(), i("div", eh, [
            k(Sg, {
              "node-type": C.value.node_type,
              "has-multiple-options": !!((Se = C.value.options) != null && Se.length),
              options: C.value.options,
              choice: (He = e.nodeChoices) == null ? void 0 : He.get(C.value.node_type),
              status: P.value,
              "status-label": F.value,
              "search-results": N.value,
              "is-searching": M.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: ce,
              onSkip: he,
              onManualEntry: Le,
              onSearch: le,
              onOptionSelected: ne,
              onClearChoice: K,
              onSearchResultSelected: H,
              onInstalledPackSelected: oe
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : h("", !0)
        ], 64)) : h("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), i("div", th, [...Z[8] || (Z[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : h("", !0),
        (a(), R(Dt, { to: "body" }, [
          c.value ? (a(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: Z[4] || (Z[4] = mt((Ke) => _.value = !0, ["self"])),
            onMouseup: mt(x, ["self"])
          }, [
            s("div", {
              class: "node-search-modal",
              onMousedown: Z[3] || (Z[3] = (Ke) => _.value = !1)
            }, [
              s("div", { class: "node-modal-header" }, [
                Z[9] || (Z[9] = s("h4", null, "Search Node Packages", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: pe
                }, "✕")
              ]),
              s("div", sh, [
                k(wt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": Z[2] || (Z[2] = (Ke) => d.value = Ke),
                  placeholder: "Search by node type, package name...",
                  onInput: Re
                }, null, 8, ["modelValue"]),
                s("div", oh, [
                  m.value.length > 0 ? (a(), i("div", nh, [
                    (a(!0), i(j, null, we(m.value, (Ke) => (a(), i("div", {
                      key: Ke.package_id,
                      class: "node-search-result-item",
                      onClick: (I) => Ce(Ke)
                    }, [
                      s("div", lh, [
                        s("code", ih, f(Ke.package_id), 1),
                        Ke.match_confidence ? (a(), R(jn, {
                          key: 0,
                          confidence: Ke.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : h("", !0)
                      ]),
                      Ke.description ? (a(), i("div", rh, f(Ke.description), 1)) : h("", !0)
                    ], 8, ah))), 128))
                  ])) : p.value ? (a(), i("div", ch, "Searching...")) : d.value ? (a(), i("div", uh, 'No packages found matching "' + f(d.value) + '"', 1)) : (a(), i("div", dh, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : h("", !0)
        ])),
        (a(), R(Dt, { to: "body" }, [
          u.value ? (a(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: mt(A, ["self"])
          }, [
            s("div", fh, [
              s("div", { class: "node-modal-header" }, [
                Z[10] || (Z[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: A
                }, "✕")
              ]),
              s("div", mh, [
                k(wt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": Z[5] || (Z[5] = (Ke) => v.value = Ke),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", vh, [
                  k(Ne, {
                    variant: "secondary",
                    onClick: A
                  }, {
                    default: g(() => [...Z[11] || (Z[11] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(Ne, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: te
                  }, {
                    default: g(() => [...Z[12] || (Z[12] = [
                      $(" Add Package ", -1)
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
}), gh = /* @__PURE__ */ xe(ph, [["__scopeId", "data-v-94c6a438"]]), hh = { class: "node-info" }, yh = { class: "node-info-text" }, wh = { class: "item-body" }, _h = {
  key: 0,
  class: "resolved-state"
}, kh = {
  key: 1,
  class: "multiple-options"
}, bh = { class: "options-list" }, $h = ["onClick"], Ch = ["name", "value", "checked", "onChange"], xh = { class: "option-content" }, Sh = { class: "option-header" }, Ih = { class: "option-filename" }, Eh = { class: "option-meta" }, Th = { class: "option-size" }, Mh = { class: "option-category" }, Ph = { class: "option-path" }, Rh = { class: "action-buttons" }, Nh = {
  key: 2,
  class: "unresolved"
}, Lh = { class: "action-buttons" }, Dh = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = D(() => !!o.choice);
    D(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), D(() => {
      var d, v;
      return ((v = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const r = D(() => {
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
      s("div", hh, [
        s("span", yh, [
          v[7] || (v[7] = $("Used by: ", -1)),
          s("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), i("span", {
          key: 0,
          class: Ue(["status-badge", r.value])
        }, f(e.statusLabel), 3)) : h("", !0)
      ]),
      s("div", wh, [
        l.value ? (a(), i("div", _h, [
          k(Ne, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (m) => n("clear-choice"))
          }, {
            default: g(() => [...v[8] || (v[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), i("div", kh, [
          v[12] || (v[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", bh, [
            (a(!0), i(j, null, we(e.options, (m, p) => (a(), i("label", {
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
              }, null, 40, Ch),
              s("div", xh, [
                s("div", Sh, [
                  s("span", Ih, f(m.model.filename), 1),
                  k(jn, {
                    confidence: m.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", Eh, [
                  s("span", Th, f(u(m.model.size)), 1),
                  s("span", Mh, f(m.model.category), 1)
                ]),
                s("div", Ph, f(m.model.relative_path), 1)
              ])
            ], 10, $h))), 128))
          ]),
          s("div", Rh, [
            k(Ne, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (m) => n("search"))
            }, {
              default: g(() => [...v[9] || (v[9] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(Ne, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (m) => n("download-url"))
            }, {
              default: g(() => [...v[10] || (v[10] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (m) => n("mark-optional"))
            }, {
              default: g(() => [...v[11] || (v[11] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), i("div", Nh, [
          v[16] || (v[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", Lh, [
            k(Ne, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (m) => n("search"))
            }, {
              default: g(() => [...v[13] || (v[13] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (m) => n("download-url"))
            }, {
              default: g(() => [...v[14] || (v[14] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (m) => n("mark-optional"))
            }, {
              default: g(() => [...v[15] || (v[15] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Oh = /* @__PURE__ */ xe(Dh, [["__scopeId", "data-v-8a82fefa"]]), Ah = { class: "model-resolution-step" }, Uh = { class: "step-header" }, zh = { class: "step-info" }, Vh = { class: "step-title" }, Fh = { class: "step-description" }, Bh = { class: "stat-badge" }, Wh = {
  key: 1,
  class: "step-body"
}, Gh = {
  key: 2,
  class: "empty-state"
}, jh = { class: "model-search-modal" }, Hh = { class: "model-modal-body" }, qh = {
  key: 0,
  class: "model-search-results"
}, Kh = ["onClick"], Jh = { class: "model-result-header" }, Qh = { class: "model-result-filename" }, Yh = { class: "model-result-meta" }, Xh = { class: "model-result-category" }, Zh = { class: "model-result-size" }, ey = {
  key: 0,
  class: "model-result-path"
}, ty = {
  key: 1,
  class: "model-no-results"
}, sy = {
  key: 2,
  class: "model-searching"
}, oy = { class: "model-download-url-modal" }, ny = { class: "model-modal-body" }, ay = { class: "model-input-group" }, ly = { class: "model-input-group" }, iy = { class: "model-modal-actions" }, ry = /* @__PURE__ */ $e({
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
      var pe;
      return oe && ((pe = o[oe]) == null ? void 0 : pe[0]) || null;
    }
    const l = e, r = t, c = b(0), u = b(!1), d = b(!1), v = b(""), m = b(""), p = b(""), w = b([]), y = b(!1), _ = D(() => l.models[c.value]), x = D(() => l.models.some((oe) => oe.is_download_intent)), C = D(() => l.models.filter(
      (oe) => l.modelChoices.has(oe.filename) || oe.is_download_intent
    ).length), S = D(() => {
      var pe;
      if (!_.value) return "";
      const oe = n((pe = _.value.reference) == null ? void 0 : pe.node_type);
      return oe ? `${oe}/${_.value.filename}` : "";
    }), N = D(() => {
      var pe;
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
      return _.value.is_download_intent ? "download" : (pe = _.value.options) != null && pe.length ? "ambiguous" : "not-found";
    }), M = D(() => {
      var pe, A;
      if (!_.value) return;
      const oe = l.modelChoices.get(_.value.filename);
      if (oe)
        switch (oe.action) {
          case "select":
            return (pe = oe.selected_model) != null && pe.filename ? `→ ${oe.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (A = _.value.options) != null && A.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function T(oe) {
      oe >= 0 && oe < l.models.length && (c.value = oe);
    }
    function L() {
      var oe;
      for (let pe = c.value + 1; pe < l.models.length; pe++) {
        const A = l.models[pe];
        if (!A.is_download_intent && !((oe = l.modelChoices) != null && oe.has(A.filename))) {
          T(pe);
          return;
        }
      }
    }
    function O() {
      _.value && (r("mark-optional", _.value.filename), Pt(() => L()));
    }
    function J() {
      _.value && (r("skip", _.value.filename), Pt(() => L()));
    }
    function P(oe) {
      _.value && (r("option-selected", _.value.filename, oe), Pt(() => L()));
    }
    function F() {
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
    function ne() {
      y.value = !0, setTimeout(() => {
        y.value = !1;
      }, 300);
    }
    function K(oe) {
      _.value && (ce(), Pt(() => L()));
    }
    function le() {
      !_.value || !m.value.trim() || (r("download-url", _.value.filename, m.value.trim(), p.value.trim() || void 0), he(), Pt(() => L()));
    }
    function Le(oe) {
      if (!oe) return "Unknown";
      const pe = oe / (1024 * 1024 * 1024);
      return pe >= 1 ? `${pe.toFixed(2)} GB` : `${(oe / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (oe, pe) => {
      var A, fe, Re;
      return a(), i("div", Ah, [
        s("div", Uh, [
          s("div", zh, [
            s("h3", Vh, f(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", Fh, f(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", Bh, f(C.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), R(Jr, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: pe[0] || (pe[0] = (Fe) => T(c.value - 1)),
          onNext: pe[1] || (pe[1] = (Fe) => T(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
        _.value ? (a(), i("div", Wh, [
          k(Oh, {
            filename: _.value.filename,
            "node-type": ((A = _.value.reference) == null ? void 0 : A.node_type) || "Unknown",
            "has-multiple-options": !!((fe = _.value.options) != null && fe.length),
            options: _.value.options,
            choice: (Re = e.modelChoices) == null ? void 0 : Re.get(_.value.filename),
            status: N.value,
            "status-label": M.value,
            onMarkOptional: O,
            onSkip: J,
            onDownloadUrl: ee,
            onSearch: Y,
            onOptionSelected: P,
            onClearChoice: F
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), i("div", Gh, [...pe[5] || (pe[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (a(), R(Dt, { to: "body" }, [
          u.value ? (a(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: mt(ce, ["self"])
          }, [
            s("div", jh, [
              s("div", { class: "model-modal-header" }, [
                pe[6] || (pe[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: ce
                }, "✕")
              ]),
              s("div", Hh, [
                k(wt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": pe[2] || (pe[2] = (Fe) => v.value = Fe),
                  placeholder: "Search by filename, category...",
                  onInput: ne
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), i("div", qh, [
                  (a(!0), i(j, null, we(w.value, (Fe) => (a(), i("div", {
                    key: Fe.hash,
                    class: "model-search-result-item",
                    onClick: (Ce) => K()
                  }, [
                    s("div", Jh, [
                      s("code", Qh, f(Fe.filename), 1)
                    ]),
                    s("div", Yh, [
                      s("span", Xh, f(Fe.category), 1),
                      s("span", Zh, f(Le(Fe.size)), 1)
                    ]),
                    Fe.relative_path ? (a(), i("div", ey, f(Fe.relative_path), 1)) : h("", !0)
                  ], 8, Kh))), 128))
                ])) : v.value && !y.value ? (a(), i("div", ty, ' No models found matching "' + f(v.value) + '" ', 1)) : h("", !0),
                y.value ? (a(), i("div", sy, "Searching...")) : h("", !0)
              ])
            ])
          ])) : h("", !0)
        ])),
        (a(), R(Dt, { to: "body" }, [
          d.value ? (a(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: mt(he, ["self"])
          }, [
            s("div", oy, [
              s("div", { class: "model-modal-header" }, [
                pe[7] || (pe[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: he
                }, "✕")
              ]),
              s("div", ny, [
                s("div", ay, [
                  pe[8] || (pe[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  k(wt, {
                    modelValue: m.value,
                    "onUpdate:modelValue": pe[3] || (pe[3] = (Fe) => m.value = Fe),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", ly, [
                  pe[9] || (pe[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  k(wt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": pe[4] || (pe[4] = (Fe) => p.value = Fe),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", iy, [
                  k(Ne, {
                    variant: "secondary",
                    onClick: he
                  }, {
                    default: g(() => [...pe[10] || (pe[10] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(Ne, {
                    variant: "primary",
                    disabled: !m.value.trim() || !p.value.trim(),
                    onClick: le
                  }, {
                    default: g(() => [...pe[11] || (pe[11] = [
                      $(" Queue Download ", -1)
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
}), cy = /* @__PURE__ */ xe(ry, [["__scopeId", "data-v-5c700bfa"]]), uy = { class: "applying-step" }, dy = {
  key: 0,
  class: "phase-content"
}, fy = {
  key: 1,
  class: "phase-content"
}, my = { class: "phase-description" }, vy = { class: "overall-progress" }, py = { class: "progress-bar" }, gy = { class: "progress-label" }, hy = { class: "install-list" }, yy = { class: "install-icon" }, wy = { key: 0 }, _y = {
  key: 1,
  class: "spinner"
}, ky = { key: 2 }, by = { key: 3 }, $y = {
  key: 0,
  class: "install-error"
}, Cy = {
  key: 2,
  class: "phase-content"
}, xy = { class: "phase-header" }, Sy = { class: "phase-title" }, Iy = { class: "completion-summary" }, Ey = {
  key: 0,
  class: "summary-item success"
}, Ty = { class: "summary-text" }, My = {
  key: 1,
  class: "summary-item error"
}, Py = { class: "summary-text" }, Ry = {
  key: 2,
  class: "failed-list"
}, Ny = { class: "failed-node-id" }, Ly = { class: "failed-error" }, Dy = {
  key: 4,
  class: "summary-item success"
}, Oy = {
  key: 5,
  class: "restart-prompt"
}, Ay = {
  key: 3,
  class: "phase-content error"
}, Uy = { class: "error-message" }, zy = /* @__PURE__ */ $e({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const t = e, o = D(() => {
      var v, m;
      const u = ((v = t.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || t.progress.nodesToInstall.length;
      if (!u) return 0;
      const d = ((m = t.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.length) ?? 0;
      return Math.round(d / u * 100);
    }), n = D(() => {
      var u;
      return ((u = t.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = D(() => n.value.length > 0);
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
      return a(), i("div", uy, [
        e.progress.phase === "resolving" ? (a(), i("div", dy, [...d[2] || (d[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), i("div", fy, [
          d[3] || (d[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", my, " Installing " + f((((v = e.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + f(((m = e.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", vy, [
            s("div", py, [
              s("div", {
                class: "progress-fill",
                style: Wt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            s("span", gy, f(((p = e.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", hy, [
            (a(!0), i(j, null, we(e.progress.nodesToInstall, (y, _) => (a(), i("div", {
              key: y,
              class: Ue(["install-item", r(y, _)])
            }, [
              s("span", yy, [
                r(y, _) === "pending" ? (a(), i("span", wy, "○")) : r(y, _) === "installing" ? (a(), i("span", _y, "◌")) : r(y, _) === "complete" ? (a(), i("span", ky, "✓")) : r(y, _) === "failed" ? (a(), i("span", by, "✗")) : h("", !0)
              ]),
              s("code", null, f(y), 1),
              c(y) ? (a(), i("span", $y, f(c(y)), 1)) : h("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), i("div", Cy, [
          s("div", xy, [
            s("span", {
              class: Ue(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            s("h3", Sy, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", Iy, [
            e.progress.nodesInstalled.length > 0 ? (a(), i("div", Ey, [
              d[4] || (d[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", Ty, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : h("", !0),
            n.value.length > 0 ? (a(), i("div", My, [
              d[5] || (d[5] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", Py, f(n.value.length) + " package" + f(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : h("", !0),
            n.value.length > 0 ? (a(), i("div", Ry, [
              (a(!0), i(j, null, we(n.value, (y) => (a(), i("div", {
                key: y.node_id,
                class: "failed-item"
              }, [
                s("code", Ny, f(y.node_id), 1),
                s("span", Ly, f(y.error), 1)
              ]))), 128))
            ])) : h("", !0),
            n.value.length > 0 ? (a(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (y) => u.$emit("retry-failed"))
            }, " Retry Failed (" + f(n.value.length) + ") ", 1)) : h("", !0),
            l.value ? h("", !0) : (a(), i("div", Dy, [...d[6] || (d[6] = [
              s("span", { class: "summary-icon" }, "✓", -1),
              s("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = s("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), i("div", Oy, [
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
        ])) : e.progress.phase === "error" ? (a(), i("div", Ay, [
          d[9] || (d[9] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", Uy, f(e.progress.error), 1)
        ])) : h("", !0)
      ]);
    };
  }
}), Vy = /* @__PURE__ */ xe(zy, [["__scopeId", "data-v-5efaae58"]]), Fy = {
  key: 0,
  class: "loading-state"
}, By = {
  key: 1,
  class: "wizard-content"
}, Wy = {
  key: 0,
  class: "step-content"
}, Gy = { class: "analysis-summary" }, jy = { class: "analysis-header" }, Hy = { class: "summary-description" }, qy = { class: "stats-grid" }, Ky = { class: "stat-card" }, Jy = { class: "stat-items" }, Qy = {
  key: 0,
  class: "stat-item success"
}, Yy = { class: "stat-count" }, Xy = {
  key: 1,
  class: "stat-item info"
}, Zy = { class: "stat-count" }, e1 = {
  key: 2,
  class: "stat-item warning"
}, t1 = { class: "stat-count" }, s1 = {
  key: 3,
  class: "stat-item warning"
}, o1 = { class: "stat-count" }, n1 = {
  key: 4,
  class: "stat-item warning"
}, a1 = { class: "stat-count" }, l1 = {
  key: 5,
  class: "stat-item error"
}, i1 = { class: "stat-count" }, r1 = { class: "stat-card" }, c1 = { class: "stat-items" }, u1 = { class: "stat-item success" }, d1 = { class: "stat-count" }, f1 = {
  key: 0,
  class: "stat-item info"
}, m1 = { class: "stat-count" }, v1 = {
  key: 1,
  class: "stat-item warning"
}, p1 = { class: "stat-count" }, g1 = {
  key: 2,
  class: "stat-item warning"
}, h1 = { class: "stat-count" }, y1 = {
  key: 3,
  class: "stat-item error"
}, w1 = { class: "stat-count" }, _1 = {
  key: 0,
  class: "status-message warning"
}, k1 = { class: "status-text" }, b1 = {
  key: 1,
  class: "status-message warning"
}, $1 = { class: "status-text" }, C1 = {
  key: 2,
  class: "status-message info"
}, x1 = { class: "status-text" }, S1 = {
  key: 3,
  class: "status-message info"
}, I1 = { class: "status-text" }, E1 = {
  key: 4,
  class: "status-message info"
}, T1 = { class: "status-text" }, M1 = {
  key: 5,
  class: "status-message warning"
}, P1 = { class: "status-text" }, R1 = {
  key: 6,
  class: "status-message success"
}, N1 = {
  key: 7,
  class: "category-mismatch-section"
}, L1 = { class: "mismatch-list" }, D1 = { class: "mismatch-path" }, O1 = { class: "mismatch-target" }, A1 = {
  key: 8,
  class: "category-mismatch-section"
}, U1 = { class: "mismatch-list" }, z1 = { class: "mismatch-path" }, V1 = { class: "status-text" }, F1 = {
  key: 1,
  class: "step-content node-step-content"
}, B1 = {
  key: 0,
  class: "community-node-section"
}, W1 = { class: "community-node-header" }, G1 = { class: "community-node-title" }, j1 = { class: "community-node-list" }, H1 = { class: "community-node-info" }, q1 = { class: "community-node-heading" }, K1 = { class: "item-name" }, J1 = { class: "community-node-package" }, Q1 = { class: "community-node-meta" }, Y1 = { class: "community-node-guidance" }, X1 = { key: 0 }, Z1 = { class: "community-choice-status" }, e0 = { class: "community-node-actions" }, t0 = {
  key: 3,
  class: "step-content"
}, s0 = { class: "review-summary" }, o0 = { class: "review-stats" }, n0 = { class: "review-stat" }, a0 = { class: "stat-value" }, l0 = { class: "review-stat" }, i0 = { class: "stat-value" }, r0 = { class: "review-stat" }, c0 = { class: "stat-value" }, u0 = { class: "review-stat" }, d0 = { class: "stat-value" }, f0 = {
  key: 0,
  class: "review-section"
}, m0 = { class: "section-title" }, v0 = { class: "review-items" }, p0 = { class: "item-name" }, g0 = { class: "item-choice" }, h0 = {
  key: 0,
  class: "choice-badge install"
}, y0 = {
  key: 1,
  class: "choice-badge skip"
}, w0 = {
  key: 1,
  class: "review-section"
}, _0 = { class: "section-title" }, k0 = { class: "review-items" }, b0 = { class: "item-name" }, $0 = { class: "item-choice" }, C0 = {
  key: 0,
  class: "choice-badge install"
}, x0 = {
  key: 1,
  class: "choice-badge optional"
}, S0 = {
  key: 2,
  class: "choice-badge skip"
}, I0 = {
  key: 2,
  class: "review-section"
}, E0 = { class: "section-title" }, T0 = { class: "review-items" }, M0 = { class: "item-name" }, P0 = { class: "item-choice" }, R0 = {
  key: 0,
  class: "choice-badge install"
}, N0 = {
  key: 1,
  class: "choice-badge optional"
}, L0 = {
  key: 2,
  class: "choice-badge skip"
}, D0 = {
  key: 1,
  class: "choice-badge pending"
}, O0 = {
  key: 3,
  class: "review-section"
}, A0 = { class: "section-title" }, U0 = { class: "review-items download-details" }, z0 = { class: "download-info" }, V0 = { class: "item-name" }, F0 = { class: "download-meta" }, B0 = { class: "download-path" }, W0 = ["title"], G0 = {
  key: 4,
  class: "review-section"
}, j0 = { class: "section-title" }, H0 = { class: "review-items" }, q0 = { class: "item-name" }, K0 = { class: "item-choice" }, J0 = {
  key: 0,
  class: "choice-badge install"
}, Q0 = {
  key: 1,
  class: "choice-badge download"
}, Y0 = {
  key: 2,
  class: "choice-badge optional"
}, X0 = {
  key: 3,
  class: "choice-badge skip"
}, Z0 = {
  key: 4,
  class: "choice-badge skip"
}, ew = {
  key: 1,
  class: "choice-badge download"
}, tw = {
  key: 2,
  class: "choice-badge pending"
}, sw = {
  key: 5,
  class: "no-choices"
}, ow = /* @__PURE__ */ $e({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const o = e, n = t, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: v } = Kr(), { loadPendingDownloads: m } = Ro(), { openFileLocation: p, queueNodeInstall: w, getNodes: y } = pt(), _ = b(null), x = b([]), C = b(!1), S = b(!1), N = b(null), M = b("analysis"), T = b([]), L = b(/* @__PURE__ */ new Map()), O = b(/* @__PURE__ */ new Map()), J = b(/* @__PURE__ */ new Set()), P = D(() => {
      const re = [
        { id: "analysis", label: "Analysis" }
      ];
      return (ne.value || Le.value || oe.value) && re.push({ id: "nodes", label: "Nodes" }), K.value && re.push({ id: "models", label: "Models" }), re.push({ id: "review", label: "Review" }), M.value === "applying" && re.push({ id: "applying", label: "Applying" }), re;
    }), F = D(() => _.value ? _.value.stats.needs_user_input : !1), Y = D(() => _.value ? _.value.nodes.version_gated || [] : []), ee = D(() => _.value ? _.value.nodes.uninstallable || [] : []), ce = D(() => ee.value.filter((re) => {
      var U;
      return !!((U = re.package) != null && U.package_id);
    })), he = D(() => Y.value.length > 0), ne = D(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), K = D(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), le = D(() => _.value ? _.value.stats.download_intents > 0 : !1), Le = D(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), oe = D(() => ce.value.length > 0), pe = D(() => _.value ? _.value.nodes.resolved.length : 0), A = D(() => _.value ? _.value.models.resolved.filter((re) => re.has_category_mismatch) : []), fe = D(() => A.value.length > 0), Re = D(() => ne.value || Le.value || oe.value ? "nodes" : K.value ? "models" : "review"), Fe = D(() => {
      if (!_.value) return [];
      const re = _.value.nodes.resolved.filter((de) => !de.is_installed), U = /* @__PURE__ */ new Set();
      return re.filter((de) => U.has(de.package.package_id) ? !1 : (U.add(de.package.package_id), !0));
    }), Ce = D(() => {
      if (!_.value) return [];
      const re = _.value.nodes.resolved.filter((de) => !de.is_installed), U = /* @__PURE__ */ new Map();
      for (const de of re) {
        const qe = U.get(de.package.package_id);
        qe ? qe.node_types_count++ : U.set(de.package.package_id, {
          package_id: de.package.package_id,
          title: de.package.title,
          node_types_count: 1
        });
      }
      return Array.from(U.values());
    }), H = D(() => Fe.value.filter((re) => !J.value.has(re.package.package_id))), te = D(() => _.value ? _.value.models.resolved.filter(
      (re) => re.match_type === "download_intent" || re.match_type === "property_download_intent"
    ).map((re) => ({
      filename: re.reference.widget_value,
      reference: re.reference,
      is_download_intent: !0,
      resolved_model: re.model,
      download_source: re.download_source,
      target_path: re.target_path
    })) : []), q = D(() => {
      if (!_.value) return [];
      const re = _.value.nodes.unresolved.map((de) => ({
        node_type: de.reference.node_type,
        reason: de.reason,
        is_unresolved: !0,
        options: void 0
      })), U = _.value.nodes.ambiguous.map((de) => ({
        node_type: de.reference.node_type,
        has_multiple_options: !0,
        options: de.options.map((qe) => ({
          package_id: qe.package.package_id,
          title: qe.package.title,
          match_confidence: qe.match_confidence,
          match_type: qe.match_type,
          is_installed: qe.is_installed
        }))
      }));
      return [...re, ...U];
    }), Z = D(() => {
      if (!_.value) return [];
      const re = _.value.models.unresolved.map((de) => ({
        filename: de.reference.widget_value,
        reference: de.reference,
        reason: de.reason,
        is_unresolved: !0,
        options: void 0
      })), U = _.value.models.ambiguous.map((de) => ({
        filename: de.reference.widget_value,
        reference: de.reference,
        has_multiple_options: !0,
        options: de.options.map((qe) => ({
          model: qe.model,
          match_confidence: qe.match_confidence,
          match_type: qe.match_type,
          has_download_source: qe.has_download_source
        }))
      }));
      return [...re, ...U];
    }), Se = D(() => {
      const re = Z.value, U = te.value.map((de) => ({
        filename: de.filename,
        reference: de.reference,
        is_download_intent: !0,
        resolved_model: de.resolved_model,
        download_source: de.download_source,
        target_path: de.target_path,
        options: void 0
      }));
      return [...re, ...U];
    }), He = D(() => te.value.filter((re) => {
      const U = O.value.get(re.filename);
      return U ? U.action === "download" : !0;
    }).map((re) => ({
      filename: re.filename,
      url: re.download_source,
      target_path: re.target_path
    })));
    function Ke(re, U = 50) {
      return re.length <= U ? re : re.slice(0, U - 3) + "...";
    }
    const I = D(() => {
      let re = H.value.length;
      for (const U of L.value.values())
        U.action === "install" && re++;
      for (const U of O.value.values())
        U.action === "select" && re++;
      return re;
    }), E = D(() => {
      let re = 0;
      for (const U of O.value.values())
        U.action === "download" && re++;
      for (const U of te.value)
        O.value.get(U.filename) || re++;
      return re;
    }), W = D(() => {
      let re = 0;
      for (const U of L.value.values())
        U.action === "optional" && re++;
      for (const U of O.value.values())
        U.action === "optional" && re++;
      return re;
    }), ge = D(() => {
      let re = J.value.size;
      for (const U of L.value.values())
        U.action === "skip" && re++;
      for (const U of O.value.values())
        U.action === "skip" && re++;
      for (const U of q.value)
        L.value.has(U.node_type) || re++;
      for (const U of Z.value)
        O.value.has(U.filename) || re++;
      return re;
    }), ke = D(() => {
      const re = {};
      if (re.analysis = { resolved: 1, total: 1 }, ne.value || oe.value) {
        const U = q.value.length, de = ce.value.length, qe = q.value.filter(
          ($t) => L.value.has($t.node_type)
        ).length, ct = ce.value.filter(
          ($t) => L.value.has($t.reference.node_type)
        ).length, Et = U + de, at = qe + ct;
        re.nodes = { resolved: at, total: Et };
      }
      if (K.value) {
        const U = Se.value.length, de = Se.value.filter(
          (qe) => O.value.has(qe.filename) || qe.is_download_intent
        ).length;
        re.models = { resolved: de, total: U };
      }
      if (re.review = { resolved: 1, total: 1 }, M.value === "applying") {
        const U = d.totalFiles || 1, de = d.completedFiles.length;
        re.applying = { resolved: de, total: U };
      }
      return re;
    });
    function _e(re) {
      M.value = re;
    }
    function De() {
      const re = P.value.findIndex((U) => U.id === M.value);
      re > 0 && (M.value = P.value[re - 1].id);
    }
    function Oe() {
      const re = P.value.findIndex((U) => U.id === M.value);
      re < P.value.length - 1 && (M.value = P.value[re + 1].id);
    }
    function Me() {
      for (const re of ce.value) {
        const U = re.reference.node_type;
        L.value.has(U) || ue(re, "registry");
      }
    }
    function Ie(re) {
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
    function Ge(re) {
      return re.filter((U) => U.installed && U.tracked).filter((U) => U.name !== "comfygit-manager").map((U) => ({
        package_id: U.registry_id || U.name,
        source: U.source
      })).filter((U, de, qe) => qe.findIndex((ct) => ct.package_id === U.package_id) === de).sort((U, de) => {
        const qe = Ie(U.source) - Ie(de.source);
        return qe !== 0 ? qe : U.package_id.localeCompare(de.package_id);
      });
    }
    async function ze() {
      C.value = !0, N.value = null;
      try {
        const [re, U] = await Promise.all([
          l(o.workflowName),
          y()
        ]);
        _.value = re, x.value = Ge(U.nodes), Me();
      } catch (re) {
        N.value = re instanceof Error ? re.message : "Failed to analyze workflow";
      } finally {
        C.value = !1;
      }
    }
    function ve() {
      T.value.includes("analysis") || T.value.push("analysis"), ne.value || Le.value || oe.value ? M.value = "nodes" : K.value ? M.value = "models" : M.value = "review";
    }
    function Q(re) {
      L.value.set(re, { action: "optional" });
    }
    function Be(re) {
      L.value.set(re, { action: "skip" });
    }
    function be(re, U) {
      var qe;
      const de = q.value.find((ct) => ct.node_type === re);
      (qe = de == null ? void 0 : de.options) != null && qe[U] && L.value.set(re, {
        action: "install",
        package_id: de.options[U].package_id
      });
    }
    function Ye(re, U) {
      L.value.set(re, {
        action: "install",
        package_id: U
      });
    }
    function Ae(re) {
      L.value.delete(re);
    }
    function Pe(re) {
      return L.value.get(re);
    }
    function B(re) {
      const U = Pe(re);
      return U ? U.action === "optional" ? "Marked optional" : U.action === "skip" ? "Skipped" : U.action === "install" ? U.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function ue(re, U) {
      var ct;
      const de = (ct = re.package) == null ? void 0 : ct.package_id;
      if (!de) return;
      const qe = {
        action: "install",
        package_id: de,
        version: re.package.latest_version || null,
        install_source: U
      };
      U === "git" && re.package.repository && (qe.repository = re.package.repository), L.value.set(re.reference.node_type, qe);
    }
    function ae(re) {
      L.value.set(re, { action: "optional" });
    }
    function Je(re) {
      L.value.set(re, { action: "skip" });
    }
    function V(re) {
      J.value.has(re) ? J.value.delete(re) : J.value.add(re);
    }
    function z(re) {
      O.value.set(re, { action: "optional" });
    }
    function se(re) {
      O.value.set(re, { action: "skip" });
    }
    function me(re, U) {
      var qe;
      const de = Z.value.find((ct) => ct.filename === re);
      (qe = de == null ? void 0 : de.options) != null && qe[U] && O.value.set(re, {
        action: "select",
        selected_model: de.options[U].model
      });
    }
    function Te(re, U, de) {
      O.value.set(re, {
        action: "download",
        url: U,
        target_path: de
      });
    }
    function Qe(re) {
      O.value.delete(re);
    }
    async function je(re) {
      try {
        await p(re);
      } catch (U) {
        N.value = U instanceof Error ? U.message : "Failed to open file location";
      }
    }
    async function nt() {
      var re;
      S.value = !0, N.value = null, v(), d.phase = "resolving", M.value = "applying";
      try {
        const U = await r(o.workflowName, L.value, O.value, J.value);
        U.models_to_download && U.models_to_download.length > 0 && u(o.workflowName, U.models_to_download);
        const de = ce.value.map((at) => {
          const $t = Pe(at.reference.node_type);
          if (($t == null ? void 0 : $t.action) !== "install" || $t.install_source !== "git")
            return null;
          const Ut = $t.repository || at.package.repository, xs = $t.package_id || at.package.package_id;
          return !Ut || !xs ? null : {
            id: xs,
            repository: Ut,
            selectedVersion: $t.version || at.package.latest_version || "latest"
          };
        }).filter((at) => !!at), qe = new Set(de.map((at) => at.id)), ct = [
          ...U.nodes_to_install || [],
          ...H.value.map((at) => at.package.package_id)
        ];
        d.nodesToInstall = [...new Set(ct)].filter((at) => !qe.has(at)), d.nodesToInstall.length > 0 && await c(o.workflowName);
        for (const at of de)
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
        const Et = d.installError || ((re = d.nodeInstallProgress) == null ? void 0 : re.completedNodes.some((at) => !at.success));
        !d.needsRestart && !Et && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (U) {
        N.value = U instanceof Error ? U.message : "Failed to apply resolution", d.error = N.value, d.phase = "error";
      } finally {
        S.value = !1;
      }
    }
    function yt() {
      n("refresh"), n("restart"), n("close");
    }
    async function It() {
      var U;
      const re = ((U = d.nodeInstallProgress) == null ? void 0 : U.completedNodes.filter((de) => !de.success).map((de) => de.node_id)) || [];
      if (re.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: re.length
        }, d.nodesToInstall = re, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch (de) {
          d.error = de instanceof Error ? de.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return rt(ze), (re, U) => (a(), R(St, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: C.value,
      error: N.value || void 0,
      "fixed-height": !0,
      onClose: U[1] || (U[1] = (de) => n("close"))
    }, {
      body: g(() => [
        C.value && !_.value ? (a(), i("div", Fy, [...U[2] || (U[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (a(), i("div", By, [
          k(zp, {
            steps: P.value,
            "current-step": M.value,
            "completed-steps": T.value,
            "step-stats": ke.value,
            onStepChange: _e
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          M.value === "analysis" ? (a(), i("div", Wy, [
            s("div", Gy, [
              s("div", jy, [
                U[3] || (U[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", Hy, " Found " + f(_.value.stats.total_nodes) + " nodes and " + f(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", qy, [
                s("div", Ky, [
                  U[16] || (U[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", Jy, [
                    pe.value > 0 ? (a(), i("div", Qy, [
                      U[4] || (U[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", Yy, f(pe.value), 1),
                      U[5] || (U[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : h("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (a(), i("div", Xy, [
                      U[6] || (U[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", Zy, f(_.value.stats.packages_needing_installation), 1),
                      U[7] || (U[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : h("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (a(), i("div", e1, [
                      U[8] || (U[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", t1, f(_.value.nodes.ambiguous.length), 1),
                      U[9] || (U[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    Y.value.length > 0 ? (a(), i("div", s1, [
                      U[10] || (U[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", o1, f(Y.value.length), 1),
                      U[11] || (U[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : h("", !0),
                    ee.value.length > 0 ? (a(), i("div", n1, [
                      U[12] || (U[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", a1, f(ee.value.length), 1),
                      U[13] || (U[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : h("", !0),
                    _.value.nodes.unresolved.length > 0 ? (a(), i("div", l1, [
                      U[14] || (U[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", i1, f(_.value.nodes.unresolved.length), 1),
                      U[15] || (U[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ]),
                s("div", r1, [
                  U[27] || (U[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", c1, [
                    s("div", u1, [
                      U[17] || (U[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", d1, f(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      U[18] || (U[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (a(), i("div", f1, [
                      U[19] || (U[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", m1, f(_.value.stats.download_intents), 1),
                      U[20] || (U[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : h("", !0),
                    fe.value ? (a(), i("div", v1, [
                      U[21] || (U[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", p1, f(A.value.length), 1),
                      U[22] || (U[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : h("", !0),
                    _.value.models.ambiguous.length > 0 ? (a(), i("div", g1, [
                      U[23] || (U[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", h1, f(_.value.models.ambiguous.length), 1),
                      U[24] || (U[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    _.value.models.unresolved.length > 0 ? (a(), i("div", y1, [
                      U[25] || (U[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", w1, f(_.value.models.unresolved.length), 1),
                      U[26] || (U[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ])
              ]),
              F.value ? (a(), i("div", _1, [
                U[28] || (U[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", k1, f(q.value.length + Z.value.length) + " items need your input", 1)
              ])) : he.value ? (a(), i("div", b1, [
                U[29] || (U[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", $1, f(Y.value.length) + " node type" + f(Y.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : ee.value.length > 0 ? (a(), i("div", C1, [
                U[30] || (U[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", x1, f(ee.value.length) + " community-mapped node type" + f(ee.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : Le.value ? (a(), i("div", S1, [
                U[31] || (U[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", I1, f(_.value.stats.packages_needing_installation) + " package" + f(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(_.value.stats.nodes_needing_installation) + " node type" + f(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(le.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : le.value ? (a(), i("div", E1, [
                U[32] || (U[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", T1, f(_.value.stats.download_intents) + " model" + f(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : fe.value ? (a(), i("div", M1, [
                U[33] || (U[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", P1, f(A.value.length) + " model" + f(A.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), i("div", R1, [...U[34] || (U[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              fe.value ? (a(), i("div", N1, [
                U[37] || (U[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", L1, [
                  (a(!0), i(j, null, we(A.value, (de) => {
                    var qe, ct;
                    return a(), i("div", {
                      key: de.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", D1, f(de.actual_category) + "/" + f((qe = de.model) == null ? void 0 : qe.filename), 1),
                      U[36] || (U[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", O1, f((ct = de.expected_categories) == null ? void 0 : ct[0]) + "/", 1),
                      de.file_path ? (a(), R(Ne, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Et) => je(de.file_path)
                      }, {
                        default: g(() => [...U[35] || (U[35] = [
                          $(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0)
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              he.value ? (a(), i("div", A1, [
                U[38] || (U[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", U1, [
                  (a(!0), i(j, null, we(Y.value, (de) => {
                    var qe;
                    return a(), i("div", {
                      key: `vg-${de.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", z1, f(de.reference.node_type), 1),
                      s("span", V1, f(de.guidance || ((qe = _.value.node_guidance) == null ? void 0 : qe[de.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : h("", !0)
            ])
          ])) : h("", !0),
          M.value === "nodes" ? (a(), i("div", F1, [
            k(gh, {
              nodes: q.value,
              "node-choices": L.value,
              "auto-resolved-packages": Ce.value,
              "skipped-packages": J.value,
              "installed-node-packs": x.value,
              onMarkOptional: Q,
              onSkip: Be,
              onOptionSelected: be,
              onManualEntry: Ye,
              onClearChoice: Ae,
              onPackageSkip: V
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            ce.value.length > 0 ? (a(), i("div", B1, [
              s("div", W1, [
                s("h4", G1, "Community-Mapped Packages (" + f(ce.value.length) + ")", 1),
                U[39] || (U[39] = s("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              s("div", j1, [
                (a(!0), i(j, null, we(ce.value, (de) => (a(), i("div", {
                  key: `community-${de.reference.node_type}-${de.package.package_id}`,
                  class: "community-node-item"
                }, [
                  s("div", H1, [
                    s("div", q1, [
                      s("code", K1, f(de.reference.node_type), 1),
                      s("span", J1, f(de.package.title || de.package.package_id), 1)
                    ]),
                    s("div", Q1, f(de.package.package_id), 1),
                    s("div", Y1, [
                      U[40] || (U[40] = $(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      de.guidance ? (a(), i("span", X1, f(de.guidance), 1)) : h("", !0)
                    ]),
                    s("div", Z1, f(B(de.reference.node_type)), 1)
                  ]),
                  s("div", e0, [
                    k(Ne, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !de.package.package_id,
                      onClick: (qe) => ue(de, "registry")
                    }, {
                      default: g(() => [...U[41] || (U[41] = [
                        $(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    de.package.repository ? (a(), R(Ne, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !de.package.package_id,
                      onClick: (qe) => ue(de, "git")
                    }, {
                      default: g(() => [...U[42] || (U[42] = [
                        $(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : h("", !0),
                    k(Ne, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (qe) => ae(de.reference.node_type)
                    }, {
                      default: g(() => [...U[43] || (U[43] = [
                        $(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ne, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (qe) => Je(de.reference.node_type)
                    }, {
                      default: g(() => [...U[44] || (U[44] = [
                        $(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : h("", !0)
          ])) : h("", !0),
          M.value === "models" ? (a(), R(cy, {
            key: 2,
            models: Se.value,
            "model-choices": O.value,
            onMarkOptional: z,
            onSkip: se,
            onOptionSelected: me,
            onDownloadUrl: Te,
            onClearChoice: Qe
          }, null, 8, ["models", "model-choices"])) : h("", !0),
          M.value === "review" ? (a(), i("div", t0, [
            s("div", s0, [
              U[50] || (U[50] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", o0, [
                s("div", n0, [
                  s("span", a0, f(I.value), 1),
                  U[45] || (U[45] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", l0, [
                  s("span", i0, f(E.value), 1),
                  U[46] || (U[46] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", r0, [
                  s("span", c0, f(W.value), 1),
                  U[47] || (U[47] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", u0, [
                  s("span", d0, f(ge.value), 1),
                  U[48] || (U[48] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              Ce.value.length > 0 ? (a(), i("div", f0, [
                s("h4", m0, "Node Packages (" + f(Ce.value.length) + ")", 1),
                s("div", v0, [
                  (a(!0), i(j, null, we(Ce.value, (de) => (a(), i("div", {
                    key: de.package_id,
                    class: "review-item"
                  }, [
                    s("code", p0, f(de.package_id), 1),
                    s("div", g0, [
                      J.value.has(de.package_id) ? (a(), i("span", y0, "Skipped")) : (a(), i("span", h0, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : h("", !0),
              ce.value.length > 0 ? (a(), i("div", w0, [
                s("h4", _0, "Community-Mapped Packages (" + f(ce.value.length) + ")", 1),
                s("div", k0, [
                  (a(!0), i(j, null, we(ce.value, (de) => {
                    var qe, ct, Et;
                    return a(), i("div", {
                      key: `review-community-${de.reference.node_type}-${de.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", b0, f(de.reference.node_type), 1),
                      s("div", $0, [
                        ((qe = Pe(de.reference.node_type)) == null ? void 0 : qe.action) === "install" ? (a(), i("span", C0, f(((ct = Pe(de.reference.node_type)) == null ? void 0 : ct.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((Et = Pe(de.reference.node_type)) == null ? void 0 : Et.action) === "optional" ? (a(), i("span", x0, " Optional ")) : (a(), i("span", S0, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              q.value.length > 0 ? (a(), i("div", I0, [
                s("h4", E0, "Node Choices (" + f(q.value.length) + ")", 1),
                s("div", T0, [
                  (a(!0), i(j, null, we(q.value, (de) => {
                    var qe, ct, Et, at;
                    return a(), i("div", {
                      key: de.node_type,
                      class: "review-item"
                    }, [
                      s("code", M0, f(de.node_type), 1),
                      s("div", P0, [
                        L.value.has(de.node_type) ? (a(), i(j, { key: 0 }, [
                          ((qe = L.value.get(de.node_type)) == null ? void 0 : qe.action) === "install" ? (a(), i("span", R0, f((ct = L.value.get(de.node_type)) == null ? void 0 : ct.package_id), 1)) : ((Et = L.value.get(de.node_type)) == null ? void 0 : Et.action) === "optional" ? (a(), i("span", N0, " Optional ")) : ((at = L.value.get(de.node_type)) == null ? void 0 : at.action) === "skip" ? (a(), i("span", L0, " Skip ")) : h("", !0)
                        ], 64)) : (a(), i("span", D0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              He.value.length > 0 ? (a(), i("div", O0, [
                s("h4", A0, "Models to Download (" + f(He.value.length) + ")", 1),
                s("div", U0, [
                  (a(!0), i(j, null, we(He.value, (de) => (a(), i("div", {
                    key: de.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", z0, [
                      s("code", V0, f(de.filename), 1),
                      s("div", F0, [
                        s("span", B0, "→ " + f(de.target_path), 1),
                        de.url ? (a(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: de.url
                        }, f(Ke(de.url)), 9, W0)) : h("", !0)
                      ])
                    ]),
                    U[49] || (U[49] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : h("", !0),
              Se.value.length > 0 ? (a(), i("div", G0, [
                s("h4", j0, "Models (" + f(Se.value.length) + ")", 1),
                s("div", H0, [
                  (a(!0), i(j, null, we(Se.value, (de) => {
                    var qe, ct, Et, at, $t, Ut, xs;
                    return a(), i("div", {
                      key: de.filename,
                      class: "review-item"
                    }, [
                      s("code", q0, f(de.filename), 1),
                      s("div", K0, [
                        O.value.has(de.filename) ? (a(), i(j, { key: 0 }, [
                          ((qe = O.value.get(de.filename)) == null ? void 0 : qe.action) === "select" ? (a(), i("span", J0, f((Et = (ct = O.value.get(de.filename)) == null ? void 0 : ct.selected_model) == null ? void 0 : Et.filename), 1)) : ((at = O.value.get(de.filename)) == null ? void 0 : at.action) === "download" ? (a(), i("span", Q0, " Download ")) : (($t = O.value.get(de.filename)) == null ? void 0 : $t.action) === "optional" ? (a(), i("span", Y0, " Optional ")) : ((Ut = O.value.get(de.filename)) == null ? void 0 : Ut.action) === "skip" ? (a(), i("span", X0, " Skip ")) : ((xs = O.value.get(de.filename)) == null ? void 0 : xs.action) === "cancel_download" ? (a(), i("span", Z0, " Cancel Download ")) : h("", !0)
                        ], 64)) : de.is_download_intent ? (a(), i("span", ew, " Pending Download ")) : (a(), i("span", tw, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              Fe.value.length === 0 && ce.value.length === 0 && q.value.length === 0 && Se.value.length === 0 ? (a(), i("div", sw, " No dependencies need resolution. ")) : h("", !0)
            ])
          ])) : h("", !0),
          M.value === "applying" ? (a(), R(Vy, {
            key: 4,
            progress: st(d),
            onRestart: yt,
            onRetryFailed: It
          }, null, 8, ["progress"])) : h("", !0)
        ])) : h("", !0)
      ]),
      footer: g(() => [
        M.value !== "analysis" && M.value !== "applying" ? (a(), R(Ne, {
          key: 0,
          variant: "secondary",
          disabled: S.value,
          onClick: De
        }, {
          default: g(() => [...U[51] || (U[51] = [
            $(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : h("", !0),
        U[54] || (U[54] = s("div", { class: "footer-spacer" }, null, -1)),
        M.value !== "applying" || st(d).phase === "complete" || st(d).phase === "error" ? (a(), R(Ne, {
          key: 1,
          variant: "secondary",
          onClick: U[0] || (U[0] = (de) => n("close"))
        }, {
          default: g(() => [
            $(f(st(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : h("", !0),
        M.value === "analysis" ? (a(), R(Ne, {
          key: 2,
          variant: "primary",
          disabled: C.value,
          onClick: ve
        }, {
          default: g(() => [
            $(f(Re.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : h("", !0),
        M.value === "nodes" ? (a(), R(Ne, {
          key: 3,
          variant: "primary",
          onClick: Oe
        }, {
          default: g(() => [
            $(f(K.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : h("", !0),
        M.value === "models" ? (a(), R(Ne, {
          key: 4,
          variant: "primary",
          onClick: Oe
        }, {
          default: g(() => [...U[52] || (U[52] = [
            $(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : h("", !0),
        M.value === "review" ? (a(), R(Ne, {
          key: 5,
          variant: "primary",
          disabled: S.value,
          loading: S.value,
          onClick: nt
        }, {
          default: g(() => [...U[53] || (U[53] = [
            $(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : h("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), nw = /* @__PURE__ */ xe(ow, [["__scopeId", "data-v-49848358"]]), aw = { class: "search-input-wrapper" }, lw = ["value", "placeholder"], iw = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = b(null);
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
    }), (d, v) => (a(), i("div", aw, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: ds(u, ["escape"])
      }, null, 40, lw),
      e.clearable && e.modelValue ? (a(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : h("", !0)
    ]));
  }
}), rw = /* @__PURE__ */ xe(iw, [["__scopeId", "data-v-266f857a"]]), cw = { class: "search-bar" }, uw = /* @__PURE__ */ $e({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, o) => (a(), i("div", cw, [
      k(rw, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => t.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), lo = /* @__PURE__ */ xe(uw, [["__scopeId", "data-v-3d51bbfd"]]), dw = { class: "section-group" }, fw = {
  key: 0,
  class: "section-content"
}, mw = /* @__PURE__ */ $e({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = b(o.initiallyExpanded);
    function r() {
      o.collapsible && (l.value = !l.value, n("toggle", l.value));
    }
    return (c, u) => (a(), i("section", dw, [
      k(ss, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: g(() => [
          $(f(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (a(), i("div", fw, [
        ot(c.$slots, "default", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), xt = /* @__PURE__ */ xe(mw, [["__scopeId", "data-v-c48e33ed"]]), vw = { class: "item-header" }, pw = {
  key: 0,
  class: "item-icon"
}, gw = { class: "item-info" }, hw = {
  key: 0,
  class: "item-title"
}, yw = {
  key: 1,
  class: "item-subtitle"
}, ww = {
  key: 0,
  class: "item-details"
}, _w = {
  key: 1,
  class: "item-actions"
}, kw = /* @__PURE__ */ $e({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, n = D(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (a(), i("div", {
      class: Ue(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      s("div", vw, [
        l.$slots.icon ? (a(), i("span", pw, [
          ot(l.$slots, "icon", {}, void 0)
        ])) : h("", !0),
        s("div", gw, [
          l.$slots.title ? (a(), i("div", hw, [
            ot(l.$slots, "title", {}, void 0)
          ])) : h("", !0),
          l.$slots.subtitle ? (a(), i("div", yw, [
            ot(l.$slots, "subtitle", {}, void 0)
          ])) : h("", !0)
        ])
      ]),
      l.$slots.details ? (a(), i("div", ww, [
        ot(l.$slots, "details", {}, void 0)
      ])) : h("", !0),
      l.$slots.actions ? (a(), i("div", _w, [
        ot(l.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Vt = /* @__PURE__ */ xe(kw, [["__scopeId", "data-v-cc435e0e"]]), bw = { class: "loading-state" }, $w = { class: "loading-message" }, Cw = /* @__PURE__ */ $e({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, o) => (a(), i("div", bw, [
      o[0] || (o[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", $w, f(e.message), 1)
    ]));
  }
}), $s = /* @__PURE__ */ xe(Cw, [["__scopeId", "data-v-ad8436c9"]]), xw = { class: "error-state" }, Sw = { class: "error-message" }, Iw = /* @__PURE__ */ $e({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, o) => (a(), i("div", xw, [
      o[2] || (o[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", Sw, f(e.message), 1),
      e.retry ? (a(), R(Ee, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => t.$emit("retry"))
      }, {
        default: g(() => [...o[1] || (o[1] = [
          $(" Retry ", -1)
        ])]),
        _: 1
      })) : h("", !0)
    ]));
  }
}), Cs = /* @__PURE__ */ xe(Iw, [["__scopeId", "data-v-5397be48"]]), Ew = /* @__PURE__ */ $e({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getWorkflows: l } = pt(), r = b([]), c = b(!1), u = b(null), d = b(""), v = b(!0), m = b(!1), p = b(!1), w = b(!1), y = b(null), _ = D(
      () => r.value.filter((A) => A.status === "broken")
    ), x = D(
      () => r.value.filter((A) => A.status === "new")
    ), C = D(
      () => r.value.filter((A) => A.status === "modified")
    ), S = D(
      () => r.value.filter((A) => A.status === "synced")
    ), N = D(() => {
      if (!d.value.trim()) return r.value;
      const A = d.value.toLowerCase();
      return r.value.filter((fe) => fe.name.toLowerCase().includes(A));
    }), M = D(
      () => _.value.filter(
        (A) => !d.value.trim() || A.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), T = D(
      () => x.value.filter(
        (A) => !d.value.trim() || A.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), L = D(
      () => C.value.filter(
        (A) => !d.value.trim() || A.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), O = D(
      () => S.value.filter(
        (A) => !d.value.trim() || A.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), J = D(
      () => m.value ? O.value : O.value.slice(0, 5)
    );
    async function P(A = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(A);
      } catch (fe) {
        u.value = fe instanceof Error ? fe.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    t({ loadWorkflows: P });
    function F(A) {
      y.value = A, p.value = !0;
    }
    function Y(A) {
      y.value = A, w.value = !0;
    }
    function ee(A) {
      y.value = A, window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: A }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel"));
    }
    function ce(A) {
      var Fe;
      const Re = (Fe = A.detail) == null ? void 0 : Fe.workflowName;
      Re && ee(Re);
    }
    function he() {
      n("refresh");
    }
    async function ne() {
      w.value = !1, await P(!0);
    }
    async function K() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function le(A) {
      return A.replace(/uninstallable node mappings?/gi, (fe) => fe.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function Le(A) {
      if (A.issue_summary && A.issue_summary.trim().length > 0)
        return le(A.issue_summary);
      const fe = [];
      return A.version_gated_count && A.version_gated_count > 0 && fe.push(`${A.version_gated_count} node${A.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), A.uninstallable_count && A.uninstallable_count > 0 && fe.push(`${A.uninstallable_count} node${A.uninstallable_count > 1 ? "s" : ""} need community packages`), A.missing_nodes > 0 && fe.push(`${A.missing_nodes} missing node${A.missing_nodes > 1 ? "s" : ""}`), A.missing_models > 0 && fe.push(`${A.missing_models} missing model${A.missing_models > 1 ? "s" : ""}`), A.models_with_category_mismatch && A.models_with_category_mismatch > 0 && fe.push(`${A.models_with_category_mismatch} model${A.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), A.pending_downloads && A.pending_downloads > 0 && fe.push(`${A.pending_downloads} pending download${A.pending_downloads > 1 ? "s" : ""}`), fe.length > 0 ? fe.join(", ") : "Has issues";
    }
    function oe(A) {
      const fe = A.sync_state === "new" ? "New" : A.sync_state === "modified" ? "Modified" : A.sync_state === "synced" ? "Synced" : A.sync_state, Re = pe(A);
      return A.has_path_sync_issues && A.models_needing_path_sync && A.models_needing_path_sync > 0 ? `${A.models_needing_path_sync} model path${A.models_needing_path_sync > 1 ? "s" : ""} need${A.models_needing_path_sync === 1 ? "s" : ""} sync · ${Re}` : `${fe || "Unknown"} · ${Re}`;
    }
    function pe(A) {
      const fe = A.contract_summary;
      return !fe || !fe.has_contract ? "No contract" : fe.status === "incomplete" ? `${fe.input_count} in / ${fe.output_count} out · incomplete` : `${fe.input_count} in / ${fe.output_count} out`;
    }
    return rt(() => {
      P(), window.addEventListener("comfygit:open-workflow-contract", ce);
    }), oa(() => {
      window.removeEventListener("comfygit:open-workflow-contract", ce);
    }), (A, fe) => (a(), i(j, null, [
      k(Ot, null, {
        header: g(() => [
          k(At, { title: "WORKFLOWS" })
        ]),
        search: g(() => [
          k(lo, {
            modelValue: d.value,
            "onUpdate:modelValue": fe[0] || (fe[0] = (Re) => d.value = Re),
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
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            M.value.length ? (a(), R(xt, {
              key: 0,
              title: "BROKEN",
              count: M.value.length
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(M.value, (Re) => (a(), R(Vt, {
                  key: Re.name,
                  status: "broken"
                }, {
                  icon: g(() => [...fe[7] || (fe[7] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(f(Re.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(f(Le(Re)), 1)
                  ]),
                  actions: g(() => [
                    k(Ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Fe) => Y(Re.name)
                    }, {
                      default: g(() => [...fe[8] || (fe[8] = [
                        $(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Fe) => ee(Re.name)
                    }, {
                      default: g(() => [...fe[9] || (fe[9] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Fe) => F(Re.name)
                    }, {
                      default: g(() => [...fe[10] || (fe[10] = [
                        $(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            T.value.length ? (a(), R(xt, {
              key: 1,
              title: "NEW",
              count: T.value.length
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(T.value, (Re) => (a(), R(Vt, {
                  key: Re.name,
                  status: Re.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: g(() => [
                    $(f(Re.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: g(() => [
                    $(f(Re.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(f(oe(Re)), 1)
                  ]),
                  actions: g(() => [
                    k(Ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Fe) => ee(Re.name)
                    }, {
                      default: g(() => [...fe[11] || (fe[11] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Fe) => F(Re.name)
                    }, {
                      default: g(() => [...fe[12] || (fe[12] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            L.value.length ? (a(), R(xt, {
              key: 2,
              title: "MODIFIED",
              count: L.value.length
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(L.value, (Re) => (a(), R(Vt, {
                  key: Re.name,
                  status: Re.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: g(() => [...fe[13] || (fe[13] = [
                    $("⚡", -1)
                  ])]),
                  title: g(() => [
                    $(f(Re.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(f(oe(Re)), 1)
                  ]),
                  actions: g(() => [
                    k(Ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Fe) => ee(Re.name)
                    }, {
                      default: g(() => [...fe[14] || (fe[14] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Fe) => F(Re.name)
                    }, {
                      default: g(() => [...fe[15] || (fe[15] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            O.value.length ? (a(), R(xt, {
              key: 3,
              title: "SYNCED",
              count: O.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: fe[2] || (fe[2] = (Re) => v.value = Re)
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(J.value, (Re) => (a(), R(Vt, {
                  key: Re.name,
                  status: Re.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: g(() => [
                    $(f(Re.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: g(() => [
                    $(f(Re.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(f(oe(Re)), 1)
                  ]),
                  actions: g(() => [
                    k(Ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Fe) => ee(Re.name)
                    }, {
                      default: g(() => [...fe[16] || (fe[16] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Fe) => F(Re.name)
                    }, {
                      default: g(() => [...fe[17] || (fe[17] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !m.value && O.value.length > 5 ? (a(), R(Ee, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: fe[1] || (fe[1] = (Re) => m.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: g(() => [
                    $(" View all " + f(O.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : h("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : h("", !0),
            N.value.length ? h("", !0) : (a(), R(ls, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && y.value ? (a(), R(Ip, {
        key: 0,
        "workflow-name": y.value,
        onClose: fe[3] || (fe[3] = (Re) => p.value = !1),
        onResolve: fe[4] || (fe[4] = (Re) => Y(y.value)),
        onRefresh: fe[5] || (fe[5] = (Re) => n("refresh"))
      }, null, 8, ["workflow-name"])) : h("", !0),
      w.value && y.value ? (a(), R(nw, {
        key: 1,
        "workflow-name": y.value,
        onClose: ne,
        onInstall: he,
        onRefresh: fe[6] || (fe[6] = (Re) => n("refresh")),
        onRestart: K
      }, null, 8, ["workflow-name"])) : h("", !0)
    ], 64));
  }
}), Tw = /* @__PURE__ */ xe(Ew, [["__scopeId", "data-v-28ee54dd"]]), Mw = /* @__PURE__ */ $e({
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
}), mn = /* @__PURE__ */ xe(Mw, [["__scopeId", "data-v-ccb7816e"]]), Pw = {
  key: 0,
  class: "model-details"
}, Rw = { class: "detail-section" }, Nw = { class: "detail-row" }, Lw = { class: "detail-value mono" }, Dw = { class: "detail-row" }, Ow = { class: "detail-value mono" }, Aw = { class: "detail-row" }, Uw = { class: "detail-value mono" }, zw = { class: "detail-row" }, Vw = { class: "detail-value" }, Fw = { class: "detail-row" }, Bw = { class: "detail-value" }, Ww = { class: "detail-row" }, Gw = { class: "detail-value" }, jw = { class: "detail-section" }, Hw = { class: "section-header" }, qw = {
  key: 0,
  class: "locations-list"
}, Kw = { class: "location-path mono" }, Jw = {
  key: 0,
  class: "location-modified"
}, Qw = ["onClick"], Yw = {
  key: 1,
  class: "empty-state"
}, Xw = { class: "detail-section" }, Zw = { class: "section-header" }, e_ = {
  key: 0,
  class: "sources-list"
}, t_ = { class: "source-type" }, s_ = ["href"], o_ = ["disabled", "onClick"], n_ = {
  key: 1,
  class: "empty-state"
}, a_ = { class: "add-source-form" }, l_ = ["disabled"], i_ = {
  key: 2,
  class: "source-error"
}, r_ = {
  key: 3,
  class: "source-success"
}, c_ = /* @__PURE__ */ $e({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: r, openFileLocation: c } = pt(), u = b(null), d = b(!0), v = b(null), m = b(""), p = b(!1), w = b(null), y = b(null), _ = b(null), x = b(null);
    let C = null;
    function S(P, F = "success", Y = 2e3) {
      C && clearTimeout(C), x.value = { message: P, type: F }, C = setTimeout(() => {
        x.value = null;
      }, Y);
    }
    function N(P) {
      if (!P) return "Unknown";
      const F = 1024 * 1024 * 1024, Y = 1024 * 1024;
      return P >= F ? `${(P / F).toFixed(1)} GB` : P >= Y ? `${(P / Y).toFixed(0)} MB` : `${(P / 1024).toFixed(0)} KB`;
    }
    function M(P) {
      navigator.clipboard.writeText(P), S("Copied to clipboard!");
    }
    async function T(P) {
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
          await l(u.value.hash, m.value.trim()), _.value = "Source added successfully!", m.value = "", await J();
        } catch (P) {
          y.value = P instanceof Error ? P.message : "Failed to add source";
        } finally {
          p.value = !1;
        }
      }
    }
    async function O(P) {
      if (u.value) {
        w.value = P, y.value = null, _.value = null;
        try {
          await r(u.value.hash, P), S("Source removed"), await J();
        } catch (F) {
          y.value = F instanceof Error ? F.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function J() {
      d.value = !0, v.value = null;
      try {
        u.value = await n(o.identifier);
      } catch (P) {
        v.value = P instanceof Error ? P.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return rt(J), (P, F) => {
      var Y;
      return a(), i(j, null, [
        k(St, {
          title: `Model Details: ${((Y = u.value) == null ? void 0 : Y.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          onClose: F[5] || (F[5] = (ee) => P.$emit("close"))
        }, {
          body: g(() => {
            var ee, ce, he, ne;
            return [
              u.value ? (a(), i("div", Pw, [
                s("section", Rw, [
                  s("div", Nw, [
                    F[6] || (F[6] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", Lw, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: F[0] || (F[0] = (K) => M(u.value.hash))
                    }, "Copy")) : h("", !0)
                  ]),
                  s("div", Dw, [
                    F[7] || (F[7] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", Ow, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: F[1] || (F[1] = (K) => M(u.value.blake3))
                    }, "Copy")) : h("", !0)
                  ]),
                  s("div", Aw, [
                    F[8] || (F[8] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", Uw, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: F[2] || (F[2] = (K) => M(u.value.sha256))
                    }, "Copy")) : h("", !0)
                  ]),
                  s("div", zw, [
                    F[9] || (F[9] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", Vw, f(N(u.value.size)), 1)
                  ]),
                  s("div", Fw, [
                    F[10] || (F[10] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", Bw, f(u.value.category), 1)
                  ]),
                  s("div", Ww, [
                    F[11] || (F[11] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", Gw, f(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", jw, [
                  s("h4", Hw, "Locations (" + f(((ee = u.value.locations) == null ? void 0 : ee.length) || 0) + ")", 1),
                  (ce = u.value.locations) != null && ce.length ? (a(), i("div", qw, [
                    (a(!0), i(j, null, we(u.value.locations, (K, le) => (a(), i("div", {
                      key: le,
                      class: "location-item"
                    }, [
                      s("span", Kw, f(K.path), 1),
                      K.modified ? (a(), i("span", Jw, "Modified: " + f(K.modified), 1)) : h("", !0),
                      K.path ? (a(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (Le) => T(K.path)
                      }, " Open File Location ", 8, Qw)) : h("", !0)
                    ]))), 128))
                  ])) : (a(), i("div", Yw, "No locations found"))
                ]),
                s("section", Xw, [
                  s("h4", Zw, "Download Sources (" + f(((he = u.value.sources) == null ? void 0 : he.length) || 0) + ")", 1),
                  (ne = u.value.sources) != null && ne.length ? (a(), i("div", e_, [
                    (a(!0), i(j, null, we(u.value.sources, (K, le) => (a(), i("div", {
                      key: le,
                      class: "source-item"
                    }, [
                      s("span", t_, f(K.type) + ":", 1),
                      s("a", {
                        href: K.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(K.url), 9, s_),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: w.value === K.url,
                        onClick: (Le) => O(K.url)
                      }, f(w.value === K.url ? "..." : "×"), 9, o_)
                    ]))), 128))
                  ])) : (a(), i("div", n_, " No download sources configured ")),
                  s("div", a_, [
                    Tt(s("input", {
                      "onUpdate:modelValue": F[3] || (F[3] = (K) => m.value = K),
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
                    }, f(p.value ? "Adding..." : "Add Source"), 9, l_)
                  ]),
                  y.value ? (a(), i("p", i_, f(y.value), 1)) : h("", !0),
                  _.value ? (a(), i("p", r_, f(_.value), 1)) : h("", !0)
                ])
              ])) : h("", !0)
            ];
          }),
          footer: g(() => [
            s("button", {
              class: "btn-secondary",
              onClick: F[4] || (F[4] = (ee) => P.$emit("close"))
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
}), bl = /* @__PURE__ */ xe(c_, [["__scopeId", "data-v-f15cbb56"]]), u_ = ["disabled"], d_ = { class: "dropdown-value" }, f_ = ["onClick"], m_ = {
  key: 0,
  class: "dropdown-error"
}, v_ = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = b(!1), r = b(null), c = b(null), u = b({});
    function d(S) {
      return typeof S == "string" ? S : S.value;
    }
    function v(S) {
      return typeof S == "string" ? S : S.label;
    }
    const m = D(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const S = o.options.find((N) => d(N) === o.modelValue);
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
      const S = r.value.getBoundingClientRect(), N = window.innerHeight, M = N - S.bottom, T = S.top, L = Math.min(300, o.options.length * 36 + 8), O = M < L && T > M;
      u.value = {
        position: "fixed",
        left: `${S.left}px`,
        width: `${S.width}px`,
        maxHeight: "300px",
        ...O ? { bottom: `${N - S.top + 4}px` } : { top: `${S.bottom + 4}px` }
      };
    }
    kt(l, async (S) => {
      S && (await Pt(), _());
    });
    function x() {
      l.value && _();
    }
    function C(S) {
      S.key === "Escape" && l.value && w();
    }
    return rt(() => {
      window.addEventListener("scroll", x, !0), window.addEventListener("keydown", C);
    }), Mo(() => {
      window.removeEventListener("scroll", x, !0), window.removeEventListener("keydown", C);
    }), (S, N) => (a(), i("div", {
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
        s("span", d_, f(m.value), 1),
        N[0] || (N[0] = s("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, u_),
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
          (a(!0), i(j, null, we(e.options, (M) => (a(), i("div", {
            key: d(M),
            class: Ue(["dropdown-option", { selected: d(M) === e.modelValue }]),
            onClick: (T) => y(M)
          }, f(v(M)), 11, f_))), 128))
        ], 4)) : h("", !0)
      ])),
      e.error ? (a(), i("span", m_, f(e.error), 1)) : h("", !0)
    ], 512));
  }
}), p_ = /* @__PURE__ */ xe(v_, [["__scopeId", "data-v-857e085b"]]);
function g_(e) {
  const t = e.toLowerCase();
  return t === "huggingface.co" || t.endsWith(".huggingface.co") || t === "hf.co";
}
function h_(e) {
  const t = e.trim();
  if (!t) return { kind: "unknown" };
  let o;
  try {
    o = new URL(t);
  } catch {
    return { kind: "unknown" };
  }
  if (!g_(o.hostname)) return { kind: "unknown" };
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
function y_(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function w_(e, t, o) {
  const [n, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(n)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(t)}/${y_(o)}`;
}
const __ = { class: "hf-file-browser" }, k_ = { class: "browser-header" }, b_ = { class: "repo-info" }, $_ = { class: "repo-id" }, C_ = {
  key: 0,
  class: "revision-pill"
}, x_ = {
  key: 0,
  class: "loading-state"
}, S_ = {
  key: 1,
  class: "error-state"
}, I_ = { class: "toolbar" }, E_ = { class: "toolbar-actions" }, T_ = { class: "file-list-container" }, M_ = {
  key: 0,
  class: "file-list-header"
}, P_ = ["checked", "indeterminate"], R_ = { class: "sort-indicator" }, N_ = { class: "sort-indicator" }, L_ = {
  key: 1,
  class: "empty-state"
}, D_ = {
  key: 2,
  class: "file-list"
}, O_ = ["onClick"], A_ = ["checked", "onChange"], U_ = { class: "file-path" }, z_ = { class: "file-size" }, V_ = { class: "destination-section" }, F_ = { class: "destination-row" }, B_ = {
  key: 0,
  class: "path-separator"
}, W_ = { class: "action-bar" }, G_ = { class: "summary-info" }, j_ = { class: "summary-count" }, H_ = { class: "summary-size" }, q_ = /* @__PURE__ */ $e({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = pt(), c = b([]), u = b(/* @__PURE__ */ new Set()), d = b(!1), v = b(null), m = b(""), p = b(!1), w = b("name"), y = b(!0), _ = b(""), x = b(""), C = b(""), S = b([]), N = b(!1);
    let M = !1;
    const T = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, L = D(() => {
      let H = c.value;
      if (o.initialPath) {
        const te = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        H = H.filter((q) => q.path.startsWith(te) || q.path === o.initialPath);
      }
      if (p.value && (H = H.filter((te) => te.is_model_file)), m.value.trim()) {
        const te = m.value.toLowerCase();
        H = H.filter((q) => q.path.toLowerCase().includes(te));
      }
      return H;
    }), O = D(() => {
      const H = [...L.value];
      return H.sort((te, q) => {
        let Z;
        return w.value === "name" ? Z = te.path.localeCompare(q.path) : Z = te.size - q.size, y.value ? Z : -Z;
      }), H;
    }), J = D(() => L.value.length === 0 ? !1 : L.value.every((H) => u.value.has(H.path))), P = D(() => L.value.some((H) => u.value.has(H.path))), F = D(() => {
      const H = S.value.map((te) => ({
        label: te,
        value: te
      }));
      return H.push({ label: "Custom path...", value: "__custom__" }), H;
    }), Y = D(() => _.value === "__custom__" ? C.value.trim().length > 0 : _.value.length > 0), ee = D(() => {
      let H = 0;
      for (const te of u.value) {
        const q = c.value.find((Z) => Z.path === te);
        q && (H += q.size);
      }
      return H;
    });
    function ce(H) {
      if (H === 0) return "0 B";
      const te = 1024 * 1024 * 1024, q = 1024 * 1024, Z = 1024;
      return H >= te ? `${(H / te).toFixed(2)} GB` : H >= q ? `${(H / q).toFixed(1)} MB` : H >= Z ? `${(H / Z).toFixed(0)} KB` : `${H} B`;
    }
    function he(H) {
      const te = H.match(T);
      return te ? `${te[1]}${te[4]}` : null;
    }
    function ne(H) {
      const te = new Set(u.value), q = te.has(H.path), Z = H.shard_group || he(H.path);
      if (Z) {
        const Se = c.value.filter((He) => (He.shard_group || he(He.path)) === Z);
        q ? Se.forEach((He) => te.delete(He.path)) : Se.forEach((He) => te.add(He.path));
      } else
        q ? te.delete(H.path) : te.add(H.path);
      u.value = te;
    }
    function K() {
      const H = new Set(u.value);
      for (const te of L.value)
        te.is_model_file && H.add(te.path);
      u.value = H;
    }
    function le() {
      u.value = /* @__PURE__ */ new Set();
    }
    function Le() {
      if (J.value) {
        const H = new Set(u.value);
        for (const te of L.value)
          H.delete(te.path);
        u.value = H;
      } else {
        const H = new Set(u.value);
        for (const te of L.value)
          H.add(te.path);
        u.value = H;
      }
    }
    function oe(H) {
      w.value === H ? y.value = !y.value : (w.value = H, y.value = !0);
    }
    function pe(H) {
      const te = H.split("/");
      return te.length >= 2 ? te[te.length - 2] : null;
    }
    function A() {
      if (N.value || u.value.size === 0) return;
      const H = /* @__PURE__ */ new Set();
      for (const Z of u.value) {
        const Se = pe(Z);
        Se && H.add(Se.toLowerCase());
      }
      if (H.size !== 1) return;
      const te = [...H][0], q = S.value.find(
        (Z) => Z.toLowerCase() === te
      );
      q && q !== _.value && (M = !0, _.value = q, Pt(() => {
        M = !1;
      }));
    }
    function fe() {
      return _.value === "__custom__" ? C.value.trim() : x.value.trim() ? `${_.value}/${x.value.trim()}` : _.value;
    }
    function Re() {
      if (u.value.size === 0 || !Y.value) return;
      const H = fe(), te = [];
      for (const q of u.value) {
        const Z = c.value.find((Se) => Se.path === q);
        Z && te.push({
          url: w_(o.repoId, o.revision, Z.path),
          destination: H,
          filename: Z.path.split("/").pop() || Z.path
        });
      }
      n("queue", te);
    }
    async function Fe() {
      if (o.repoId) {
        d.value = !0, v.value = null;
        try {
          const H = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, te = await l(H);
          if (c.value = te.files, o.preselectedFile) {
            const q = c.value.find((Z) => Z.path === o.preselectedFile);
            q && ne(q);
          }
        } catch (H) {
          v.value = H instanceof Error ? H.message : "Failed to load repository";
        } finally {
          d.value = !1;
        }
      }
    }
    async function Ce() {
      try {
        const H = await r();
        S.value = H.directories, H.directories.length > 0 && !_.value && (_.value = H.directories[0]);
      } catch {
        S.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], _.value || (_.value = "checkpoints");
      }
    }
    return kt(() => [o.repoId, o.revision], () => {
      o.repoId && Fe();
    }, { immediate: !1 }), kt(() => o.repoId, () => {
      N.value = !1;
    }), kt(u, () => {
      A();
    }, { deep: !0 }), kt(S, () => {
      S.value.length > 0 && u.value.size > 0 && A();
    }), kt(_, (H, te) => {
      M || te === "" || (N.value = !0);
    }), rt(() => {
      Fe(), Ce();
    }), (H, te) => (a(), i("div", __, [
      s("div", k_, [
        s("button", {
          class: "back-btn",
          onClick: te[0] || (te[0] = (q) => H.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        s("div", b_, [
          s("span", $_, f(e.repoId), 1),
          e.revision ? (a(), i("span", C_, f(e.revision), 1)) : h("", !0)
        ])
      ]),
      d.value ? (a(), i("div", x_, " Loading repository files... ")) : v.value ? (a(), i("div", S_, f(v.value), 1)) : (a(), i(j, { key: 2 }, [
        s("div", I_, [
          k(wt, {
            modelValue: m.value,
            "onUpdate:modelValue": te[1] || (te[1] = (q) => m.value = q),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          s("div", E_, [
            s("button", {
              class: Ue(["toggle-btn", { active: p.value }]),
              onClick: te[2] || (te[2] = (q) => p.value = !p.value)
            }, f(p.value ? "Models Only" : "All Files"), 3),
            s("button", {
              class: "action-btn",
              onClick: K
            }, "Auto-Select Models"),
            s("button", {
              class: "action-btn",
              onClick: le
            }, "Clear")
          ])
        ]),
        s("div", T_, [
          L.value.length > 0 ? (a(), i("div", M_, [
            s("input", {
              type: "checkbox",
              checked: J.value,
              indeterminate: P.value && !J.value,
              class: "file-checkbox",
              onChange: Le
            }, null, 40, P_),
            s("span", {
              class: "header-name",
              onClick: te[3] || (te[3] = (q) => oe("name"))
            }, [
              te[9] || (te[9] = $(" Name ", -1)),
              s("span", R_, f(w.value === "name" ? y.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: te[4] || (te[4] = (q) => oe("size"))
            }, [
              te[10] || (te[10] = $(" Size ", -1)),
              s("span", N_, f(w.value === "size" ? y.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : h("", !0),
          L.value.length === 0 ? (a(), i("div", L_, f(c.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (a(), i("div", D_, [
            (a(!0), i(j, null, we(O.value, (q) => (a(), i("div", {
              key: q.path,
              class: Ue(["file-item", { selected: u.value.has(q.path) }]),
              onClick: (Z) => ne(q)
            }, [
              s("input", {
                type: "checkbox",
                checked: u.value.has(q.path),
                class: "file-checkbox",
                onClick: te[5] || (te[5] = mt(() => {
                }, ["stop"])),
                onChange: (Z) => ne(q)
              }, null, 40, A_),
              s("span", U_, f(q.path), 1),
              s("span", z_, f(ce(q.size)), 1)
            ], 10, O_))), 128))
          ]))
        ]),
        s("div", V_, [
          te[11] || (te[11] = s("h4", { class: "section-label" }, "Download Destination", -1)),
          s("div", F_, [
            k(p_, {
              modelValue: _.value,
              "onUpdate:modelValue": te[6] || (te[6] = (q) => _.value = q),
              options: F.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            _.value !== "__custom__" ? (a(), i("span", B_, "/")) : h("", !0),
            _.value !== "__custom__" ? (a(), R(wt, {
              key: 1,
              modelValue: x.value,
              "onUpdate:modelValue": te[7] || (te[7] = (q) => x.value = q),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : h("", !0)
          ]),
          _.value === "__custom__" ? (a(), R(wt, {
            key: 0,
            modelValue: C.value,
            "onUpdate:modelValue": te[8] || (te[8] = (q) => C.value = q),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : h("", !0)
        ]),
        s("div", W_, [
          s("div", G_, [
            s("span", j_, f(u.value.size) + " file(s) selected", 1),
            s("span", H_, f(ce(ee.value)), 1)
          ]),
          k(Ne, {
            variant: "primary",
            disabled: u.value.size === 0 || !Y.value,
            onClick: Re
          }, {
            default: g(() => [...te[12] || (te[12] = [
              $(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), K_ = /* @__PURE__ */ xe(q_, [["__scopeId", "data-v-183acebc"]]), J_ = { class: "token-config-modal" }, Q_ = { class: "provider-info" }, Y_ = { class: "provider-icon" }, X_ = { class: "provider-name" }, Z_ = {
  key: 0,
  class: "current-token"
}, ek = { class: "mask" }, tk = { class: "token-input-section" }, sk = { class: "input-label" }, ok = { class: "help-text" }, nk = ["href"], ak = { class: "modal-actions" }, lk = /* @__PURE__ */ $e({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: t }) {
    const o = e, n = t, { updateConfig: l } = pt(), r = b(""), c = b(!1), u = b(!1), d = D(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), v = D(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), m = D(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), p = D(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), w = D(
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
    return (x, C) => (a(), R(St, {
      title: "Configure API Token",
      onClose: C[2] || (C[2] = (S) => x.$emit("close"))
    }, {
      body: g(() => [
        s("div", J_, [
          s("div", Q_, [
            s("span", Y_, f(v.value), 1),
            s("span", X_, f(d.value), 1)
          ]),
          e.currentTokenMask ? (a(), i("div", Z_, [
            C[4] || (C[4] = s("span", { class: "label" }, "Current token:", -1)),
            s("span", ek, f(e.currentTokenMask), 1),
            k(Ne, {
              variant: "danger",
              size: "sm",
              onClick: _,
              loading: u.value
            }, {
              default: g(() => [...C[3] || (C[3] = [
                $(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : h("", !0),
          s("div", tk, [
            s("label", sk, f(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            k(wt, {
              modelValue: r.value,
              "onUpdate:modelValue": C[0] || (C[0] = (S) => r.value = S),
              type: "password",
              placeholder: m.value
            }, null, 8, ["modelValue", "placeholder"]),
            s("div", ok, [
              s("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, f(w.value), 9, nk)
            ])
          ])
        ])
      ]),
      footer: g(() => [
        s("div", ak, [
          k(Ne, {
            variant: "secondary",
            onClick: C[1] || (C[1] = (S) => x.$emit("close"))
          }, {
            default: g(() => [...C[5] || (C[5] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(Ne, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: c.value,
            onClick: y
          }, {
            default: g(() => [...C[6] || (C[6] = [
              $(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }));
  }
}), ik = /* @__PURE__ */ xe(lk, [["__scopeId", "data-v-0687d0ce"]]), rk = { class: "huggingface-tab" }, ck = {
  key: 0,
  class: "search-section"
}, uk = { class: "search-header" }, dk = { class: "search-bar" }, fk = {
  key: 1,
  class: "search-results"
}, mk = {
  key: 0,
  class: "loading-state"
}, vk = {
  key: 1,
  class: "error-state"
}, pk = {
  key: 2,
  class: "results-list"
}, gk = ["onClick"], hk = { class: "repo-header" }, yk = { class: "repo-id" }, wk = { class: "repo-stats" }, _k = {
  class: "stat",
  title: "Downloads"
}, kk = {
  class: "stat",
  title: "Likes"
}, bk = {
  key: 0,
  class: "repo-desc"
}, $k = {
  key: 1,
  class: "repo-tags"
}, Ck = {
  key: 3,
  class: "empty-state"
}, xk = {
  key: 4,
  class: "hint-state"
}, Sk = /* @__PURE__ */ $e({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: t, getConfig: o } = pt(), n = b("search"), l = b(""), r = b([]), c = b(!1), u = b(null), d = b(!1), v = b(null), m = b("main"), p = b(), w = b(), y = b(!1), _ = b(null), x = D(() => {
      if (!u.value) return !1;
      const J = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || J.includes("authentication") || J.includes("unauthorized");
    });
    function C(J) {
      return J >= 1e6 ? `${(J / 1e6).toFixed(1)}M` : J >= 1e3 ? `${(J / 1e3).toFixed(1)}K` : String(J);
    }
    async function S() {
      const J = l.value.trim();
      if (!J) return;
      u.value = null;
      const P = h_(J);
      if (P.kind === "file" && P.repoId && P.path) {
        v.value = P.repoId, m.value = P.revision || "main";
        const F = P.path.split("/");
        F.length > 1 ? p.value = F.slice(0, -1).join("/") : p.value = void 0, w.value = P.path, n.value = "browse";
        return;
      }
      if (P.kind === "repo" && P.repoId) {
        v.value = P.repoId, m.value = P.revision || "main", p.value = P.path, w.value = void 0, n.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(J) && !J.includes("://")) {
        v.value = J, m.value = "main", p.value = void 0, w.value = void 0, n.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const F = await t(J);
        r.value = F.results, d.value = !0;
      } catch (F) {
        u.value = F instanceof Error ? F.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function N(J) {
      v.value = J, m.value = "main", p.value = void 0, w.value = void 0, n.value = "browse";
    }
    function M() {
      n.value = "search", v.value = null, p.value = void 0, w.value = void 0;
    }
    async function T() {
      try {
        const J = await o();
        _.value = J.huggingface_token || null;
      } catch (J) {
        console.error("Failed to load config:", J);
      }
    }
    function L() {
      T(), x.value && l.value && S();
    }
    function O() {
      _.value = null;
    }
    return rt(T), (J, P) => (a(), i("div", rk, [
      n.value === "search" ? (a(), i("div", ck, [
        s("div", uk, [
          s("div", dk, [
            k(wt, {
              modelValue: l.value,
              "onUpdate:modelValue": P[0] || (P[0] = (F) => l.value = F),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: ds(S, ["enter"])
            }, null, 8, ["modelValue"]),
            k(Ne, {
              variant: "primary",
              onClick: S,
              loading: c.value
            }, {
              default: g(() => [...P[5] || (P[5] = [
                $(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          k(Ne, {
            variant: "secondary",
            size: "sm",
            onClick: P[1] || (P[1] = (F) => y.value = !0)
          }, {
            default: g(() => [
              $(f(_.value ? `Token: ${_.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : h("", !0),
      n.value === "search" ? (a(), i("div", fk, [
        c.value ? (a(), i("div", mk, " Searching HuggingFace... ")) : u.value ? (a(), i("div", vk, [
          s("p", null, f(u.value), 1),
          x.value ? (a(), R(Ne, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: P[2] || (P[2] = (F) => y.value = !0)
          }, {
            default: g(() => [...P[6] || (P[6] = [
              $(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ])) : r.value.length > 0 ? (a(), i("div", pk, [
          (a(!0), i(j, null, we(r.value, (F) => (a(), i("div", {
            key: F.repo_id,
            class: "repo-card",
            onClick: (Y) => N(F.repo_id)
          }, [
            s("div", hk, [
              s("span", yk, f(F.repo_id), 1),
              s("div", wk, [
                s("span", _k, [
                  P[7] || (P[7] = s("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + f(C(F.downloads)), 1)
                ]),
                s("span", kk, [
                  P[8] || (P[8] = s("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + f(C(F.likes)), 1)
                ])
              ])
            ]),
            F.description ? (a(), i("p", bk, f(F.description), 1)) : h("", !0),
            F.tags.length > 0 ? (a(), i("div", $k, [
              (a(!0), i(j, null, we(F.tags.slice(0, 5), (Y) => (a(), i("span", {
                key: Y,
                class: "tag"
              }, f(Y), 1))), 128))
            ])) : h("", !0)
          ], 8, gk))), 128))
        ])) : d.value ? (a(), i("div", Ck, " No repositories found ")) : (a(), i("div", xk, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (a(), R(K_, {
        key: 2,
        "repo-id": v.value,
        revision: m.value,
        "initial-path": p.value,
        "preselected-file": w.value,
        onBack: M,
        onQueue: P[3] || (P[3] = (F) => J.$emit("queue", F))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      y.value ? (a(), R(ik, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": _.value,
        onClose: P[4] || (P[4] = (F) => y.value = !1),
        onSaved: L,
        onCleared: O
      }, null, 8, ["current-token-mask"])) : h("", !0)
    ]));
  }
}), Ik = /* @__PURE__ */ xe(Sk, [["__scopeId", "data-v-e13209bf"]]), Ek = { class: "civitai-tab" }, Tk = /* @__PURE__ */ $e({
  __name: "CivitaiTab",
  setup(e) {
    return (t, o) => (a(), i("div", Ek, [...o[0] || (o[0] = [
      s("div", { class: "placeholder" }, [
        s("div", { class: "icon" }, "🎨"),
        s("h3", null, "Civitai Integration"),
        s("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), Mk = /* @__PURE__ */ xe(Tk, [["__scopeId", "data-v-44948051"]]), Pk = { class: "direct-url-tab" }, Rk = { class: "input-group" }, Nk = { class: "input-group" }, Lk = {
  key: 0,
  class: "error"
}, Dk = { class: "actions" }, Ok = /* @__PURE__ */ $e({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: t }) {
    const o = t, n = b(""), l = b(""), r = D(() => {
      const d = l.value.trim();
      if (!d) return null;
      const v = d.replace(/\\/g, "/").split("/").pop() || "";
      return v.includes(".") && !v.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), c = D(() => n.value.trim() !== "" && l.value.trim() !== "" && !r.value), u = () => {
      if (!c.value) return;
      const d = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: n.value.trim(),
        targetPath: l.value.trim(),
        filename: d
      }]), n.value = "", l.value = "";
    };
    return (d, v) => (a(), i("div", Pk, [
      s("div", Rk, [
        v[2] || (v[2] = s("label", null, "Download URL", -1)),
        k(wt, {
          modelValue: n.value,
          "onUpdate:modelValue": v[0] || (v[0] = (m) => n.value = m),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      s("div", Nk, [
        v[3] || (v[3] = s("label", null, "Target Path (relative to models directory)", -1)),
        k(wt, {
          modelValue: l.value,
          "onUpdate:modelValue": v[1] || (v[1] = (m) => l.value = m),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (a(), i("p", Lk, f(r.value), 1)) : h("", !0)
      ]),
      v[5] || (v[5] = s("p", { class: "note" }, "Model will be queued for background download.", -1)),
      s("div", Dk, [
        k(Ne, {
          variant: "primary",
          disabled: !c.value,
          onClick: u
        }, {
          default: g(() => [...v[4] || (v[4] = [
            $(" Queue Download ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Ak = /* @__PURE__ */ xe(Ok, [["__scopeId", "data-v-01def7aa"]]), Uk = { class: "download-modal" }, zk = { class: "tab-bar" }, Vk = ["onClick"], Fk = { class: "tab-content" }, Bk = /* @__PURE__ */ $e({
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
    ], r = b("huggingface");
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
    return (v, m) => e.show ? (a(), R(St, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: d
    }, {
      body: g(() => [
        s("div", Uk, [
          s("div", zk, [
            (a(), i(j, null, we(l, (p) => s("button", {
              key: p.id,
              class: Ue(["tab-btn", { active: r.value === p.id }]),
              onClick: (w) => r.value = p.id
            }, f(p.icon) + " " + f(p.label), 11, Vk)), 64))
          ]),
          s("div", Fk, [
            r.value === "huggingface" ? (a(), R(Ik, {
              key: 0,
              onQueue: c
            })) : r.value === "civitai" ? (a(), R(Mk, { key: 1 })) : r.value === "direct" ? (a(), R(Ak, {
              key: 2,
              onQueue: u
            })) : h("", !0)
          ])
        ])
      ]),
      footer: g(() => [
        k(Ne, {
          variant: "secondary",
          onClick: d
        }, {
          default: g(() => [...m[0] || (m[0] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : h("", !0);
  }
}), Qr = /* @__PURE__ */ xe(Bk, [["__scopeId", "data-v-90a9f401"]]), Wk = /* @__PURE__ */ $e({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const o = t, { getEnvironmentModels: n, getStatus: l } = pt(), r = b([]), c = b([]), u = b("production"), d = b(!1), v = b(null), m = b(""), p = b(!1), w = b(null), y = b(!1);
    function _() {
      p.value = !1, o("navigate", "model-index");
    }
    const x = D(
      () => r.value.reduce((P, F) => P + (F.size || 0), 0)
    ), C = D(() => {
      if (!m.value.trim()) return r.value;
      const P = m.value.toLowerCase();
      return r.value.filter((F) => F.filename.toLowerCase().includes(P));
    }), S = D(() => {
      if (!m.value.trim()) return c.value;
      const P = m.value.toLowerCase();
      return c.value.filter((F) => F.filename.toLowerCase().includes(P));
    }), N = D(() => {
      const P = {};
      for (const Y of C.value) {
        const ee = Y.type || "other";
        P[ee] || (P[ee] = []), P[ee].push(Y);
      }
      const F = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(P).sort(([Y], [ee]) => {
        const ce = F.indexOf(Y), he = F.indexOf(ee);
        return ce >= 0 && he >= 0 ? ce - he : ce >= 0 ? -1 : he >= 0 ? 1 : Y.localeCompare(ee);
      }).map(([Y, ee]) => ({ type: Y, models: ee }));
    });
    function M(P) {
      if (!P) return "Unknown";
      const F = P / (1024 * 1024);
      return F >= 1024 ? `${(F / 1024).toFixed(1)} GB` : `${F.toFixed(0)} MB`;
    }
    function T(P) {
      w.value = P.hash || P.filename;
    }
    function L(P) {
      o("navigate", "model-index");
    }
    function O(P) {
      alert(`Download functionality not yet implemented for ${P}`);
    }
    async function J() {
      d.value = !0, v.value = null;
      try {
        const P = await n();
        r.value = P, c.value = [];
        const F = await l();
        u.value = F.environment || "production";
      } catch (P) {
        v.value = P instanceof Error ? P.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return rt(J), (P, F) => (a(), i(j, null, [
      k(Ot, null, {
        header: g(() => [
          k(At, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: F[1] || (F[1] = (Y) => p.value = !0)
          }, {
            actions: g(() => [
              k(Ee, {
                variant: "primary",
                size: "sm",
                onClick: F[0] || (F[0] = (Y) => y.value = !0)
              }, {
                default: g(() => [...F[6] || (F[6] = [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    s("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  $(" DOWNLOAD + ", -1)
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
            "onUpdate:modelValue": F[2] || (F[2] = (Y) => m.value = Y),
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
            onRetry: J
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            r.value.length ? (a(), R(mn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                $(" Total: " + f(r.value.length) + " models • " + f(M(x.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : h("", !0),
            (a(!0), i(j, null, we(N.value, (Y) => (a(), R(xt, {
              key: Y.type,
              title: Y.type.toUpperCase(),
              count: Y.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(Y.models, (ee) => (a(), R(Vt, {
                  key: ee.hash || ee.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...F[7] || (F[7] = [
                    $("📦", -1)
                  ])]),
                  title: g(() => [
                    $(f(ee.filename), 1)
                  ]),
                  subtitle: g(() => [
                    $(f(M(ee.size)), 1)
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
                    k(Ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ce) => T(ee)
                    }, {
                      default: g(() => [...F[8] || (F[8] = [
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
            S.value.length ? (a(), R(xt, {
              key: 1,
              title: "MISSING",
              count: S.value.length
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(S.value, (Y) => (a(), R(Vt, {
                  key: Y.filename,
                  status: "broken"
                }, {
                  icon: g(() => [...F[9] || (F[9] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(f(Y.filename), 1)
                  ]),
                  subtitle: g(() => [...F[10] || (F[10] = [
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
                    k(Ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ee) => O(Y.filename)
                    }, {
                      default: g(() => [...F[11] || (F[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ee) => L(Y.filename)
                    }, {
                      default: g(() => [...F[12] || (F[12] = [
                        $(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !C.value.length && !S.value.length ? (a(), R(ls, {
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
        onClose: F[3] || (F[3] = (Y) => p.value = !1)
      }, {
        content: g(() => [
          s("p", null, [
            F[13] || (F[13] = $(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + f(u.value) + '"', 1),
            F[14] || (F[14] = $(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: g(() => [
          k(Ee, {
            variant: "primary",
            onClick: _
          }, {
            default: g(() => [...F[15] || (F[15] = [
              $(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), R(bl, {
        key: 0,
        identifier: w.value,
        onClose: F[4] || (F[4] = (Y) => w.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      k(Qr, {
        show: y.value,
        onClose: F[5] || (F[5] = (Y) => y.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Gk = /* @__PURE__ */ xe(Wk, [["__scopeId", "data-v-af3ca736"]]), jk = {
  key: 0,
  class: "indexing-progress"
}, Hk = { class: "progress-info" }, qk = { class: "progress-label" }, Kk = { class: "progress-count" }, Jk = { class: "progress-bar" }, Qk = { class: "modal-content" }, Yk = { class: "modal-header" }, Xk = { class: "modal-body" }, Zk = { class: "input-group" }, eb = { class: "current-path" }, tb = { class: "input-group" }, sb = { class: "modal-footer" }, ob = /* @__PURE__ */ $e({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = pt(), c = t, u = b([]), d = b(!1), v = b(!1), m = b(null), p = b(""), w = b(!1), y = b(null), _ = b(!1), x = b(null), C = b(""), S = b(!1), N = b(!1), M = b(null), T = D(
      () => u.value.reduce((he, ne) => he + (ne.size || 0), 0)
    ), L = D(() => {
      if (!p.value.trim()) return u.value;
      const he = p.value.toLowerCase();
      return u.value.filter((ne) => {
        const K = ne, le = ne.sha256 || K.sha256_hash || "";
        return ne.filename.toLowerCase().includes(he) || le.toLowerCase().includes(he);
      });
    }), O = D(() => {
      const he = {};
      for (const K of L.value) {
        const le = K.type || "other";
        he[le] || (he[le] = []), he[le].push(K);
      }
      const ne = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(he).sort(([K], [le]) => {
        const Le = ne.indexOf(K), oe = ne.indexOf(le);
        return Le >= 0 && oe >= 0 ? Le - oe : Le >= 0 ? -1 : oe >= 0 ? 1 : K.localeCompare(le);
      }).map(([K, le]) => ({ type: K, models: le }));
    });
    function J(he) {
      if (!he) return "Unknown";
      const ne = 1024 * 1024 * 1024, K = 1024 * 1024;
      return he >= ne ? `${(he / ne).toFixed(1)} GB` : he >= K ? `${(he / K).toFixed(0)} MB` : `${(he / 1024).toFixed(0)} KB`;
    }
    function P(he) {
      y.value = he.hash || he.filename;
    }
    async function F() {
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
      if (C.value.trim()) {
        S.value = !0, m.value = null;
        try {
          const he = await r(C.value.trim());
          x.value = he.path, _.value = !1, C.value = "", await ee(), console.log(`Directory changed: ${he.models_indexed} models indexed`), c("refresh");
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
    }), (he, ne) => (a(), i(j, null, [
      k(Ot, null, {
        header: g(() => [
          k(At, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: ne[2] || (ne[2] = (K) => w.value = !0)
          }, {
            actions: g(() => [
              k(Ee, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: F
              }, {
                default: g(() => [
                  $(f(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(Ee, {
                variant: "primary",
                size: "sm",
                onClick: ne[0] || (ne[0] = (K) => _.value = !0)
              }, {
                default: g(() => [...ne[11] || (ne[11] = [
                  $(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              k(Ee, {
                variant: "primary",
                size: "sm",
                onClick: ne[1] || (ne[1] = (K) => N.value = !0)
              }, {
                default: g(() => [...ne[12] || (ne[12] = [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    s("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  $(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          M.value ? (a(), i("div", jk, [
            s("div", Hk, [
              s("span", qk, f(M.value.message), 1),
              s("span", Kk, f(M.value.current) + "/" + f(M.value.total), 1)
            ]),
            s("div", Jk, [
              s("div", {
                class: "progress-fill",
                style: Wt({ width: `${M.value.current / M.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : h("", !0),
          k(lo, {
            modelValue: p.value,
            "onUpdate:modelValue": ne[3] || (ne[3] = (K) => p.value = K),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value || M.value ? (a(), R($s, {
            key: 0,
            message: M.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : m.value ? (a(), R(Cs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: ee
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            u.value.length ? (a(), R(mn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                $(" Total: " + f(u.value.length) + " models • " + f(J(T.value)), 1)
              ]),
              _: 1
            })) : h("", !0),
            (a(!0), i(j, null, we(O.value, (K) => (a(), R(xt, {
              key: K.type,
              title: K.type.toUpperCase(),
              count: K.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(K.models, (le) => (a(), R(Vt, {
                  key: le.sha256 || le.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...ne[13] || (ne[13] = [
                    $("📦", -1)
                  ])]),
                  title: g(() => [
                    $(f(le.filename), 1)
                  ]),
                  subtitle: g(() => [
                    $(f(J(le.size)), 1)
                  ]),
                  details: g(() => [
                    k(_t, {
                      label: "Hash:",
                      value: le.hash ? le.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Le) => P(le)
                    }, {
                      default: g(() => [...ne[14] || (ne[14] = [
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
        onClose: ne[4] || (ne[4] = (K) => w.value = !1)
      }, {
        content: g(() => [...ne[15] || (ne[15] = [
          s("p", null, [
            $(" Content-addressable model storage shared across "),
            s("strong", null, "all environments"),
            $(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      y.value ? (a(), R(bl, {
        key: 0,
        identifier: y.value,
        onClose: ne[5] || (ne[5] = (K) => y.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      (a(), R(Dt, { to: "body" }, [
        _.value ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: ne[9] || (ne[9] = mt((K) => _.value = !1, ["self"]))
        }, [
          s("div", Qk, [
            s("div", Yk, [
              ne[16] || (ne[16] = s("h3", null, "Change Models Directory", -1)),
              s("button", {
                class: "modal-close",
                onClick: ne[6] || (ne[6] = (K) => _.value = !1)
              }, "✕")
            ]),
            s("div", Xk, [
              s("div", Zk, [
                ne[17] || (ne[17] = s("label", null, "Current Directory", -1)),
                s("code", eb, f(x.value || "Not set"), 1)
              ]),
              s("div", tb, [
                ne[18] || (ne[18] = s("label", null, "New Directory Path", -1)),
                k(wt, {
                  modelValue: C.value,
                  "onUpdate:modelValue": ne[7] || (ne[7] = (K) => C.value = K),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              ne[19] || (ne[19] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            s("div", sb, [
              k(Ne, {
                variant: "secondary",
                onClick: ne[8] || (ne[8] = (K) => _.value = !1)
              }, {
                default: g(() => [...ne[20] || (ne[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(Ne, {
                variant: "primary",
                disabled: !C.value.trim() || S.value,
                loading: S.value,
                onClick: Y
              }, {
                default: g(() => [
                  $(f(S.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : h("", !0)
      ])),
      k(Qr, {
        show: N.value,
        onClose: ne[10] || (ne[10] = (K) => N.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), nb = /* @__PURE__ */ xe(ob, [["__scopeId", "data-v-3705114c"]]), ab = { class: "node-details" }, lb = { class: "status-row" }, ib = {
  key: 0,
  class: "detail-row"
}, rb = { class: "value" }, cb = { class: "detail-row" }, ub = { class: "value" }, db = {
  key: 1,
  class: "detail-row"
}, fb = { class: "value mono" }, mb = {
  key: 2,
  class: "detail-row"
}, vb = ["href"], pb = {
  key: 3,
  class: "detail-row"
}, gb = { class: "value mono small" }, hb = { class: "detail-row" }, yb = {
  key: 0,
  class: "value"
}, wb = {
  key: 1,
  class: "workflow-list"
}, _b = /* @__PURE__ */ $e({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = D(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = D(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = D(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (a(), R(St, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => n("close"))
    }, {
      body: g(() => [
        s("div", ab, [
          s("div", lb, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Ue(["status-badge", l.value])
            }, f(r.value), 3)
          ]),
          e.node.version ? (a(), i("div", ib, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", rb, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : h("", !0),
          s("div", cb, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", ub, f(c.value), 1)
          ]),
          e.node.registry_id ? (a(), i("div", db, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", fb, f(e.node.registry_id), 1)
          ])) : h("", !0),
          e.node.repository ? (a(), i("div", mb, [
            d[7] || (d[7] = s("span", { class: "label" }, "Repository:", -1)),
            s("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              $(f(e.node.repository) + " ", 1),
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
            ], 8, vb)
          ])) : h("", !0),
          e.node.download_url ? (a(), i("div", pb, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", gb, f(e.node.download_url), 1)
          ])) : h("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", hb, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), i("span", yb, " Not used in any workflows ")) : (a(), i("div", wb, [
              (a(!0), i(j, null, we(e.node.used_in_workflows, (v) => (a(), i("span", {
                key: v,
                class: "workflow-tag"
              }, f(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: g(() => [
        k(Ne, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (v) => n("close"))
        }, {
          default: g(() => [...d[11] || (d[11] = [
            $(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), kb = /* @__PURE__ */ xe(_b, [["__scopeId", "data-v-b342f626"]]), bb = { class: "dialog-message" }, $b = {
  key: 0,
  class: "dialog-details"
}, Cb = {
  key: 1,
  class: "dialog-warning"
}, xb = /* @__PURE__ */ $e({
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
    return (t, o) => (a(), R(St, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => t.$emit("cancel"))
    }, {
      body: g(() => [
        s("p", bb, f(e.message), 1),
        e.details && e.details.length ? (a(), i("div", $b, [
          (a(!0), i(j, null, we(e.details, (n, l) => (a(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : h("", !0),
        e.warning ? (a(), i("p", Cb, [
          o[4] || (o[4] = s("span", { class: "warning-icon" }, "⚠", -1)),
          $(" " + f(e.warning), 1)
        ])) : h("", !0)
      ]),
      footer: g(() => [
        k(Ne, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => t.$emit("cancel"))
        }, {
          default: g(() => [
            $(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), R(Ne, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => t.$emit("secondary"))
        }, {
          default: g(() => [
            $(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : h("", !0),
        k(Ne, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
        }, {
          default: g(() => [
            $(f(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), $l = /* @__PURE__ */ xe(xb, [["__scopeId", "data-v-3670b9f5"]]), Sb = { class: "mismatch-warning" }, Ib = { class: "version-mismatch" }, Eb = { class: "version-actual" }, Tb = { class: "version-expected" }, Mb = { style: { color: "var(--cg-color-warning)" } }, Pb = { style: { color: "var(--cg-color-warning)" } }, Rb = {
  key: 0,
  class: "community-status-badge"
}, Nb = { key: 0 }, Lb = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Db = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Ob = { class: "criticality-control" }, Ab = ["value", "disabled", "onChange"], Ub = /* @__PURE__ */ $e({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: t }) {
    const o = e, n = t, {
      getNodes: l,
      trackNodeAsDev: r,
      installNode: c,
      uninstallNode: u,
      queueNodeInstall: d,
      updateNodeCriticality: v
    } = pt(), m = b({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), p = b(!1), w = b(null), y = b(""), _ = b(!1), x = b(null), C = b(/* @__PURE__ */ new Set()), S = b(/* @__PURE__ */ new Set()), N = b(null), M = D(() => {
      if (!y.value.trim()) return m.value.nodes;
      const I = y.value.toLowerCase();
      return m.value.nodes.filter(
        (E) => {
          var W, ge;
          return E.name.toLowerCase().includes(I) || ((W = E.description) == null ? void 0 : W.toLowerCase().includes(I)) || ((ge = E.repository) == null ? void 0 : ge.toLowerCase().includes(I));
        }
      );
    }), T = D(
      () => M.value.filter((I) => I.installed && I.tracked)
    ), L = D(
      () => M.value.filter((I) => !I.installed && I.tracked && !I.issue_type)
    ), O = D(
      () => M.value.filter((I) => I.installed && !I.tracked)
    ), J = D(
      () => M.value.filter((I) => I.issue_type === "version_gated")
    ), P = D(
      () => M.value.filter((I) => I.issue_type === "uninstallable")
    ), F = D(() => J.value.length), Y = D(() => P.value.length);
    function ee(I) {
      return I.registry_id || I.name;
    }
    function ce(I) {
      return C.value.has(ee(I));
    }
    async function he(I, E) {
      const W = I.registry_id;
      if (!W) {
        n("toast", `Node "${I.name}" has no package id for install`, "warning");
        return;
      }
      if (E === "git" && !I.repository) {
        n("toast", `Node "${I.name}" has no repository URL for git install`, "warning");
        return;
      }
      const ge = {
        id: W,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      E === "git" && I.repository && (ge.repository = I.repository, ge.install_source = "git"), await d(ge), C.value.add(ee(I)), n("toast", `✓ Queued install for "${I.name}"`, "success");
    }
    function ne(I) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[I] || I;
    }
    const K = D(() => o.versionMismatches.length > 0);
    function le(I) {
      return !I.used_in_workflows || I.used_in_workflows.length === 0 ? "Not used in any workflows" : I.used_in_workflows.length === 1 ? I.used_in_workflows[0] : `${I.used_in_workflows.length} workflows`;
    }
    function Le(I) {
      return I.criticality === "optional" ? "optional" : "required";
    }
    function oe(I) {
      return S.value.has(I.name);
    }
    async function pe(I, E) {
      const W = E.target, ge = Le(I), ke = W.value;
      if (ke !== ge) {
        S.value = new Set(S.value).add(I.name), I.criticality = ke;
        try {
          const _e = await v(I.name, ke);
          if (_e.status !== "success") {
            I.criticality = ge, n("toast", _e.message || `Failed to update "${I.name}" criticality`, "error");
            return;
          }
          n("toast", `Marked "${I.name}" as ${ke}`, "success");
        } catch (_e) {
          I.criticality = ge, W.value = ge, n("toast", `Error updating criticality: ${_e instanceof Error ? _e.message : "Unknown error"}`, "error");
        } finally {
          const _e = new Set(S.value);
          _e.delete(I.name), S.value = _e;
        }
      }
    }
    function A(I) {
      return I.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function fe(I) {
      return I.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function Re(I) {
      return I.registry_id ? `Community-mapped package: ${I.registry_id}` : "Community-mapped package";
    }
    function Fe(I) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function Ce(I) {
      x.value = I;
    }
    function H() {
      n("open-node-manager");
    }
    function te(I) {
      N.value = {
        title: "Track as Development Node",
        message: `Track "${I}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          N.value = null;
          try {
            p.value = !0;
            const E = await r(I);
            E.status === "success" ? (n("toast", `✓ Node "${I}" tracked as development`, "success"), await Ke()) : n("toast", `Failed to track node: ${E.message || "Unknown error"}`, "error");
          } catch (E) {
            n("toast", `Error tracking node: ${E instanceof Error ? E.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function q(I) {
      N.value = {
        title: "Remove Untracked Node",
        message: `Remove "${I}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          N.value = null;
          try {
            p.value = !0;
            const E = await u(I);
            E.status === "success" ? (n("toast", `✓ Node "${I}" removed`, "success"), await Ke()) : n("toast", `Failed to remove node: ${E.message || "Unknown error"}`, "error");
          } catch (E) {
            n("toast", `Error removing node: ${E instanceof Error ? E.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function Z(I) {
      N.value = {
        title: "Install Missing Node",
        message: `Install "${I}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          N.value = null;
          try {
            p.value = !0;
            const E = await c(I);
            E.status === "success" ? (n("toast", `✓ Node "${I}" installed`, "success"), await Ke()) : n("toast", `Failed to install node: ${E.message || "Unknown error"}`, "error");
          } catch (E) {
            n("toast", `Error installing node: ${E instanceof Error ? E.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function Se(I) {
      N.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${I.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          N.value = null;
          try {
            p.value = !0, await he(I, "registry");
          } catch (E) {
            n("toast", `Error queueing install: ${E instanceof Error ? E.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function He(I) {
      N.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${I.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          N.value = null;
          try {
            p.value = !0, await he(I, "git");
          } catch (E) {
            n("toast", `Error queueing git install: ${E instanceof Error ? E.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    async function Ke() {
      p.value = !0, w.value = null;
      try {
        m.value = await l();
      } catch (I) {
        w.value = I instanceof Error ? I.message : "Failed to load nodes";
      } finally {
        p.value = !1;
      }
    }
    return rt(Ke), (I, E) => (a(), i(j, null, [
      k(Ot, null, {
        header: g(() => [
          k(At, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (W) => _.value = !0)
          }, {
            actions: g(() => [
              k(Ee, {
                variant: "primary",
                size: "sm",
                onClick: H
              }, {
                default: g(() => [...E[7] || (E[7] = [
                  $(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          k(lo, {
            modelValue: y.value,
            "onUpdate:modelValue": E[1] || (E[1] = (W) => y.value = W),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          p.value ? (a(), R($s, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (a(), R(Cs, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: Ke
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            m.value.total_count ? (a(), R(mn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                $(f(m.value.installed_count) + " installed ", 1),
                m.value.missing_count ? (a(), i(j, { key: 0 }, [
                  $(" • " + f(m.value.missing_count) + " missing", 1)
                ], 64)) : h("", !0),
                F.value ? (a(), i(j, { key: 1 }, [
                  $(" • " + f(F.value) + " blocked", 1)
                ], 64)) : h("", !0),
                Y.value ? (a(), i(j, { key: 2 }, [
                  $(" • " + f(Y.value) + " community-mapped", 1)
                ], 64)) : h("", !0),
                m.value.untracked_count ? (a(), i(j, { key: 3 }, [
                  $(" • " + f(m.value.untracked_count) + " untracked", 1)
                ], 64)) : h("", !0)
              ]),
              _: 1
            })) : h("", !0),
            K.value ? (a(), R(xt, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                s("div", Sb, [
                  E[8] || (E[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), i(j, null, we(e.versionMismatches, (W) => (a(), R(Vt, {
                  key: W.name,
                  status: "warning"
                }, {
                  icon: g(() => [...E[9] || (E[9] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(f(W.name), 1)
                  ]),
                  subtitle: g(() => [
                    s("span", Ib, [
                      s("span", Eb, f(W.actual), 1),
                      E[10] || (E[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", Tb, f(W.expected), 1)
                    ])
                  ]),
                  actions: g(() => [
                    k(Ee, {
                      variant: "warning",
                      size: "sm",
                      onClick: E[2] || (E[2] = (ge) => n("repair-environment"))
                    }, {
                      default: g(() => [...E[11] || (E[11] = [
                        $(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            J.value.length ? (a(), R(xt, {
              key: 2,
              title: "BLOCKED",
              count: J.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(J.value, (W) => (a(), R(Vt, {
                  key: `blocked-${W.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...E[12] || (E[12] = [
                    $("⛔", -1)
                  ])]),
                  title: g(() => [
                    $(f(W.name), 1)
                  ]),
                  subtitle: g(() => [
                    s("span", Mb, f(A(W)), 1)
                  ]),
                  details: g(() => [
                    k(_t, {
                      label: "Guidance:",
                      value: W.issue_guidance || fe(W)
                    }, null, 8, ["value"]),
                    k(_t, {
                      label: "Used by:",
                      value: le(W)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ge) => Ce(W)
                    }, {
                      default: g(() => [...E[13] || (E[13] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            P.value.length ? (a(), R(xt, {
              key: 3,
              title: "COMMUNITY-MAPPED",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(P.value, (W) => (a(), R(Vt, {
                  key: `community-${W.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...E[14] || (E[14] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(f(W.name), 1)
                  ]),
                  subtitle: g(() => [
                    s("span", Pb, f(Re(W)), 1)
                  ]),
                  details: g(() => [
                    k(_t, {
                      label: "Guidance:",
                      value: W.issue_guidance || Fe(W)
                    }, null, 8, ["value"]),
                    k(_t, {
                      label: "Used by:",
                      value: le(W)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ge) => Ce(W)
                    }, {
                      default: g(() => [...E[15] || (E[15] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    ce(W) ? (a(), i("span", Rb, "Queued")) : (a(), i(j, { key: 1 }, [
                      W.registry_id ? (a(), R(Ee, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (ge) => Se(W)
                      }, {
                        default: g(() => [...E[16] || (E[16] = [
                          $(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0),
                      W.repository ? (a(), R(Ee, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (ge) => He(W)
                      }, {
                        default: g(() => [...E[17] || (E[17] = [
                          $(" Install via Git ", -1)
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
            O.value.length ? (a(), R(xt, {
              key: 4,
              title: "UNTRACKED",
              count: O.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(O.value, (W) => (a(), R(Vt, {
                  key: W.name,
                  status: "warning"
                }, {
                  icon: g(() => [...E[18] || (E[18] = [
                    $("?", -1)
                  ])]),
                  title: g(() => [
                    $(f(W.name), 1)
                  ]),
                  subtitle: g(() => [...E[19] || (E[19] = [
                    s("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: g(() => [
                    k(_t, {
                      label: "Used by:",
                      value: le(W)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ge) => Ce(W)
                    }, {
                      default: g(() => [...E[20] || (E[20] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ge) => te(W.name)
                    }, {
                      default: g(() => [...E[21] || (E[21] = [
                        $(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ee, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (ge) => q(W.name)
                    }, {
                      default: g(() => [...E[22] || (E[22] = [
                        $(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            T.value.length ? (a(), R(xt, {
              key: 5,
              title: "INSTALLED",
              count: T.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(T.value, (W) => (a(), R(Vt, {
                  key: W.name,
                  status: "synced"
                }, {
                  icon: g(() => [
                    $(f(W.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: g(() => [
                    $(f(W.name), 1)
                  ]),
                  subtitle: g(() => [
                    W.version ? (a(), i("span", Nb, f(W.source === "development" ? "" : "v") + f(W.version), 1)) : (a(), i("span", Lb, "version unknown")),
                    s("span", Db, " • " + f(ne(W.source)), 1)
                  ]),
                  details: g(() => [
                    k(_t, {
                      label: "Used by:",
                      value: le(W)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ge) => Ce(W)
                    }, {
                      default: g(() => [...E[23] || (E[23] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: H
                    }, {
                      default: g(() => [...E[24] || (E[24] = [
                        $(" Manage ", -1)
                      ])]),
                      _: 1
                    }),
                    s("label", Ob, [
                      E[26] || (E[26] = s("span", null, "Readiness", -1)),
                      s("select", {
                        class: "criticality-select",
                        value: Le(W),
                        disabled: oe(W),
                        onChange: (ge) => pe(W, ge)
                      }, [...E[25] || (E[25] = [
                        s("option", { value: "required" }, "Required", -1),
                        s("option", { value: "optional" }, "Optional", -1)
                      ])], 40, Ab)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            L.value.length ? (a(), R(xt, {
              key: 6,
              title: "MISSING",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(L.value, (W) => (a(), R(Vt, {
                  key: W.name,
                  status: "missing"
                }, {
                  icon: g(() => [...E[27] || (E[27] = [
                    $("!", -1)
                  ])]),
                  title: g(() => [
                    $(f(W.name), 1)
                  ]),
                  subtitle: g(() => [...E[28] || (E[28] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: g(() => [
                    k(_t, {
                      label: "Required by:",
                      value: le(W)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    k(Ee, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ge) => Ce(W)
                    }, {
                      default: g(() => [...E[29] || (E[29] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ee, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ge) => Z(W.name)
                    }, {
                      default: g(() => [...E[30] || (E[30] = [
                        $(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !T.value.length && !L.value.length && !J.value.length && !P.value.length && !O.value.length ? (a(), R(ls, {
              key: 7,
              icon: "📭",
              message: y.value ? `No nodes match '${y.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(is, {
        show: _.value,
        title: "About Custom Nodes",
        onClose: E[4] || (E[4] = (W) => _.value = !1)
      }, {
        content: g(() => [...E[31] || (E[31] = [
          s("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Installed:"),
            $(" Tracked nodes available in this environment"),
            s("br"),
            s("strong", null, "Missing:"),
            $(" Tracked nodes that need to be installed"),
            s("br"),
            s("strong", null, "Blocked:"),
            $(" Node types that require newer ComfyUI"),
            s("br"),
            s("strong", null, "Community-Mapped:"),
            $(" Actionable package mappings from community metadata"),
            s("br"),
            s("strong", null, "Untracked:"),
            $(" Nodes on filesystem but not in manifest ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: g(() => [
          k(Ee, {
            variant: "primary",
            onClick: E[3] || (E[3] = (W) => _.value = !1)
          }, {
            default: g(() => [...E[32] || (E[32] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      x.value ? (a(), R(kb, {
        key: 0,
        node: x.value,
        onClose: E[5] || (E[5] = (W) => x.value = null)
      }, null, 8, ["node"])) : h("", !0),
      N.value ? (a(), R($l, {
        key: 1,
        title: N.value.title,
        message: N.value.message,
        warning: N.value.warning,
        "confirm-label": N.value.confirmLabel,
        destructive: N.value.destructive,
        onConfirm: N.value.onConfirm,
        onCancel: E[6] || (E[6] = (W) => N.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : h("", !0)
    ], 64));
  }
}), zb = /* @__PURE__ */ xe(Ub, [["__scopeId", "data-v-0c174184"]]), Vb = { class: "setting-info" }, Fb = { class: "setting-label" }, Bb = {
  key: 0,
  class: "required-marker"
}, Wb = {
  key: 0,
  class: "setting-description"
}, Gb = { class: "setting-control" }, jb = /* @__PURE__ */ $e({
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
      s("div", Vb, [
        s("div", Fb, [
          $(f(e.label) + " ", 1),
          e.required ? (a(), i("span", Bb, "*")) : h("", !0)
        ]),
        e.description ? (a(), i("div", Wb, f(e.description), 1)) : h("", !0)
      ]),
      s("div", Gb, [
        ot(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), fo = /* @__PURE__ */ xe(jb, [["__scopeId", "data-v-3e106b1c"]]), Hb = ["type", "value", "placeholder", "disabled"], qb = /* @__PURE__ */ $e({
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
    const n = e, l = o, r = b(null);
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
    }, null, 42, Hb));
  }
}), go = /* @__PURE__ */ xe(qb, [["__scopeId", "data-v-0380d08f"]]), Kb = { class: "toggle" }, Jb = ["checked", "disabled"], Qb = /* @__PURE__ */ $e({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("label", Kb, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, Jb),
      o[1] || (o[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), wi = /* @__PURE__ */ xe(Qb, [["__scopeId", "data-v-71c0f550"]]), za = "ComfyGit.Deploy.GitHubPAT";
function Yr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function Yb(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function Xb() {
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
    isRemoteSsh: Yr,
    isRemoteHttps: Yb
  };
}
const Zb = { class: "workspace-settings-content" }, e2 = { class: "settings-section" }, t2 = { class: "path-setting" }, s2 = { class: "path-value" }, o2 = { class: "path-setting" }, n2 = { class: "path-value" }, a2 = { class: "settings-section" }, l2 = { class: "token-setting" }, i2 = {
  key: 0,
  class: "token-warning"
}, r2 = { class: "token-actions" }, c2 = { class: "settings-section" }, u2 = { class: "settings-section" }, d2 = /* @__PURE__ */ $e({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: o }) {
    const n = e, l = o, { getConfig: r, updateConfig: c, getRemotes: u, testGitAuth: d } = pt(), { getToken: v, setToken: m, clearToken: p, hasToken: w } = Xb(), y = b(!1), _ = b(null), x = b(null), C = b(null), S = b(null), N = b(""), M = b(""), T = b(""), L = b(""), O = b(!1), J = b(!1), P = b(!1), F = b(""), Y = b(!1), ee = b(!1), ce = b(null), he = b(!1), ne = b(!0);
    function K(te) {
      return te.join(" ");
    }
    function le(te) {
      return te.trim() ? te.trim().split(/\s+/) : [];
    }
    const Le = D(() => {
      if (!S.value) return !1;
      const te = O.value, q = J.value, Z = P.value, Se = L.value !== K(S.value.comfyui_extra_args || []);
      return te || q || Z || Se;
    }), oe = D(() => w());
    async function pe() {
      var te;
      y.value = !0, _.value = null;
      try {
        C.value = await r(n.workspacePath || void 0), S.value = { ...C.value }, N.value = C.value.civitai_api_key || "", M.value = C.value.huggingface_token || "", L.value = K(C.value.comfyui_extra_args || []), T.value = v() || "", F.value = T.value, O.value = !1, J.value = !1, P.value = !1, ce.value = null;
        const q = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        he.value = q !== "false", ne.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const Se = (te = (await u()).remotes) == null ? void 0 : te.find((He) => He.name === "origin");
          Y.value = !!(Se && Yr(Se.url));
        } catch {
          Y.value = !1;
        }
      } catch (q) {
        _.value = q instanceof Error ? q.message : "Failed to load settings";
      } finally {
        y.value = !1;
      }
    }
    async function A() {
      var te;
      x.value = null;
      try {
        const q = {};
        O.value && (q.civitai_api_key = N.value || null), J.value && (q.huggingface_token = M.value || null), L.value !== K(((te = S.value) == null ? void 0 : te.comfyui_extra_args) || []) && (q.comfyui_extra_args = le(L.value)), await c(q, n.workspacePath || void 0), P.value && (T.value ? m(T.value) : p()), await pe(), x.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          x.value = null;
        }, 3e3);
      } catch (q) {
        const Z = q instanceof Error ? q.message : "Failed to save settings";
        x.value = { type: "error", message: Z }, l("error", Z);
      }
    }
    function fe() {
      S.value && (N.value = S.value.civitai_api_key || "", M.value = S.value.huggingface_token || "", L.value = K(S.value.comfyui_extra_args || []), T.value = F.value, O.value = !1, J.value = !1, P.value = !1, ce.value = null, x.value = null);
    }
    async function Re() {
      if (T.value) {
        ee.value = !0, ce.value = null;
        try {
          const te = await d(T.value);
          ce.value = {
            type: te.status === "success" ? "success" : "error",
            message: te.message
          };
        } catch (te) {
          ce.value = {
            type: "error",
            message: te instanceof Error ? te.message : "Connection test failed"
          };
        } finally {
          ee.value = !1;
        }
      }
    }
    function Fe() {
      T.value = "", P.value = !0, ce.value = null;
    }
    function Ce(te) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(te)), console.log("[ComfyGit] Auto-refresh setting saved:", te);
    }
    function H(te) {
      te ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", te ? "enabled" : "disabled");
    }
    return t({
      saveSettings: A,
      resetSettings: fe,
      hasChanges: Le,
      loadSettings: pe
    }), rt(pe), (te, q) => (a(), i("div", Zb, [
      y.value ? (a(), R($s, {
        key: 0,
        message: "Loading workspace settings..."
      })) : _.value ? (a(), R(Cs, {
        key: 1,
        message: _.value,
        retry: !0,
        onRetry: pe
      }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
        k(xt, { title: "WORKSPACE PATHS" }, {
          default: g(() => {
            var Z, Se;
            return [
              s("div", e2, [
                s("div", t2, [
                  q[9] || (q[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  q[10] || (q[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", s2, f(((Z = C.value) == null ? void 0 : Z.workspace_path) || "Loading..."), 1)
                ]),
                s("div", o2, [
                  q[11] || (q[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  q[12] || (q[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", n2, f(((Se = C.value) == null ? void 0 : Se.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        k(xt, { title: "API CREDENTIALS" }, {
          default: g(() => [
            s("div", a2, [
              k(fo, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: g(() => [
                  k(go, {
                    modelValue: N.value,
                    "onUpdate:modelValue": q[0] || (q[0] = (Z) => N.value = Z),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: q[1] || (q[1] = (Z) => O.value = !0)
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
                    modelValue: M.value,
                    "onUpdate:modelValue": q[2] || (q[2] = (Z) => M.value = Z),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: q[3] || (q[3] = (Z) => J.value = !0)
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
                  s("div", l2, [
                    k(go, {
                      modelValue: T.value,
                      "onUpdate:modelValue": q[4] || (q[4] = (Z) => T.value = Z),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: q[5] || (q[5] = (Z) => P.value = !0)
                    }, null, 8, ["modelValue"]),
                    Y.value ? (a(), i("div", i2, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : h("", !0),
                    q[15] || (q[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", r2, [
                      k(Ee, {
                        variant: "ghost",
                        size: "xs",
                        loading: ee.value,
                        disabled: !T.value || ee.value,
                        onClick: Re
                      }, {
                        default: g(() => [...q[13] || (q[13] = [
                          $(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      oe.value ? (a(), R(Ee, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: Fe
                      }, {
                        default: g(() => [...q[14] || (q[14] = [
                          $(" Clear ", -1)
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
        k(xt, { title: "COMFYUI SETTINGS" }, {
          default: g(() => [
            s("div", c2, [
              k(fo, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: g(() => [
                  k(go, {
                    modelValue: L.value,
                    "onUpdate:modelValue": q[6] || (q[6] = (Z) => L.value = Z),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              q[16] || (q[16] = s("div", { class: "setting-hint" }, [
                $(" Common flags: "),
                s("code", null, "--lowvram"),
                $(", "),
                s("code", null, "--highvram"),
                $(", "),
                s("code", null, "--listen 0.0.0.0"),
                $(", "),
                s("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        k(xt, { title: "UI SETTINGS" }, {
          default: g(() => [
            s("div", u2, [
              k(fo, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: g(() => [
                  k(wi, {
                    modelValue: he.value,
                    "onUpdate:modelValue": [
                      q[7] || (q[7] = (Z) => he.value = Z),
                      Ce
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
                  k(wi, {
                    modelValue: ne.value,
                    "onUpdate:modelValue": [
                      q[8] || (q[8] = (Z) => ne.value = Z),
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
}), Xr = /* @__PURE__ */ xe(d2, [["__scopeId", "data-v-f1bdc574"]]), f2 = /* @__PURE__ */ $e({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const t = b(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), R(Ot, null, {
      header: g(() => [
        k(At, { title: "WORKSPACE SETTINGS" }, {
          actions: g(() => {
            var r, c;
            return [
              k(Ee, {
                variant: "primary",
                size: "sm",
                disabled: !((r = t.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: g(() => [...l[2] || (l[2] = [
                  $(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = t.value) != null && c.hasChanges ? (a(), R(Ee, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: g(() => [...l[3] || (l[3] = [
                  $(" Reset ", -1)
                ])]),
                _: 1
              })) : h("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: g(() => [
        k(Xr, {
          ref_key: "contentRef",
          ref: t,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), m2 = { class: "env-title" }, v2 = {
  key: 0,
  class: "current-badge"
}, p2 = {
  key: 0,
  class: "branch-info"
}, g2 = /* @__PURE__ */ $e({
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
        $(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: g(() => [
        s("div", m2, [
          s("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), i("span", v2, "CURRENT")) : h("", !0)
        ])
      ]),
      subtitle: g(() => [
        e.currentBranch ? (a(), i("span", p2, [
          o[0] || (o[0] = s("span", { class: "branch-icon" }, "⎇", -1)),
          $(" " + f(e.currentBranch), 1)
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
}), h2 = /* @__PURE__ */ xe(g2, [["__scopeId", "data-v-9231917a"]]), y2 = { class: "env-details" }, w2 = { class: "status-row" }, _2 = {
  key: 0,
  class: "detail-row"
}, k2 = { class: "value mono" }, b2 = {
  key: 1,
  class: "detail-row"
}, $2 = { class: "value mono small" }, C2 = { class: "collapsible-section" }, x2 = { class: "value" }, S2 = {
  key: 0,
  class: "collapsible-body"
}, I2 = { class: "item-list" }, E2 = { class: "item-name" }, T2 = { class: "item-name" }, M2 = { class: "item-name" }, P2 = { class: "item-name" }, R2 = {
  key: 0,
  class: "empty-list"
}, N2 = { class: "collapsible-section" }, L2 = { class: "value" }, D2 = {
  key: 0,
  class: "collapsible-body"
}, O2 = { class: "item-list" }, A2 = { class: "item-name" }, U2 = {
  key: 0,
  class: "item-meta"
}, z2 = {
  key: 0,
  class: "empty-list"
}, V2 = { class: "collapsible-section" }, F2 = { class: "value" }, B2 = {
  key: 0,
  class: "missing-count"
}, W2 = {
  key: 0,
  class: "collapsible-body"
}, G2 = { class: "item-list" }, j2 = { class: "model-row" }, H2 = { class: "item-name" }, q2 = { class: "model-meta" }, K2 = { class: "item-meta" }, J2 = {
  key: 0,
  class: "item-meta"
}, Q2 = {
  key: 0,
  class: "empty-list"
}, Y2 = {
  key: 2,
  class: "section-divider"
}, X2 = {
  key: 3,
  class: "detail-row"
}, Z2 = { class: "value" }, e$ = { class: "footer-actions" }, t$ = /* @__PURE__ */ $e({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete", "export"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = b(/* @__PURE__ */ new Set());
    function r(d) {
      l.value.has(d) ? l.value.delete(d) : l.value.add(d), l.value = new Set(l.value);
    }
    const c = D(() => {
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
    return (d, v) => (a(), R(St, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[6] || (v[6] = (m) => n("close"))
    }, {
      body: g(() => {
        var m, p, w, y, _, x, C, S, N, M, T, L, O, J;
        return [
          s("div", y2, [
            s("div", w2, [
              v[7] || (v[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Ue(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (a(), i("div", _2, [
              v[8] || (v[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", k2, f(e.environment.current_branch), 1)
            ])) : h("", !0),
            e.environment.path ? (a(), i("div", b2, [
              v[9] || (v[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", $2, f(e.environment.path), 1)
            ])) : h("", !0),
            v[18] || (v[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", C2, [
              s("div", {
                class: "collapsible-header",
                onClick: v[0] || (v[0] = (P) => r("workflows"))
              }, [
                v[10] || (v[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", x2, f(((m = e.detail) == null ? void 0 : m.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (a(), i("span", {
                  key: 0,
                  class: Ue(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (a(), i("div", S2, [
                s("div", I2, [
                  (a(!0), i(j, null, we(e.detail.workflows.synced, (P) => (a(), i("div", {
                    key: "synced-" + P,
                    class: "list-item"
                  }, [
                    s("span", E2, f(P), 1),
                    v[11] || (v[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (a(!0), i(j, null, we(e.detail.workflows.new, (P) => (a(), i("div", {
                    key: "new-" + P,
                    class: "list-item"
                  }, [
                    s("span", T2, f(P), 1),
                    v[12] || (v[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (a(!0), i(j, null, we(e.detail.workflows.modified, (P) => (a(), i("div", {
                    key: "mod-" + P,
                    class: "list-item"
                  }, [
                    s("span", M2, f(P), 1),
                    v[13] || (v[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (a(!0), i(j, null, we(e.detail.workflows.deleted, (P) => (a(), i("div", {
                    key: "del-" + P,
                    class: "list-item"
                  }, [
                    s("span", P2, f(P), 1),
                    v[14] || (v[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (a(), i("div", R2, "No workflows")) : h("", !0)
                ])
              ])) : h("", !0)
            ]),
            s("div", N2, [
              s("div", {
                class: "collapsible-header",
                onClick: v[1] || (v[1] = (P) => r("nodes"))
              }, [
                v[15] || (v[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", L2, f(((y = e.detail) == null ? void 0 : y.node_count) ?? e.environment.node_count), 1),
                (_ = e.detail) != null && _.nodes ? (a(), i("span", {
                  key: 0,
                  class: Ue(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (x = e.detail) != null && x.nodes && l.value.has("nodes") ? (a(), i("div", D2, [
                s("div", O2, [
                  (a(!0), i(j, null, we(e.detail.nodes, (P) => (a(), i("div", {
                    key: P.name,
                    class: "list-item"
                  }, [
                    s("span", A2, f(P.name), 1),
                    P.version ? (a(), i("span", U2, f(P.version), 1)) : h("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? h("", !0) : (a(), i("div", z2, "No nodes"))
                ])
              ])) : h("", !0)
            ]),
            s("div", V2, [
              s("div", {
                class: "collapsible-header",
                onClick: v[2] || (v[2] = (P) => r("models"))
              }, [
                v[16] || (v[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", F2, [
                  $(f(((C = e.detail) == null ? void 0 : C.model_count) ?? e.environment.model_count) + " ", 1),
                  (N = (S = e.detail) == null ? void 0 : S.models) != null && N.missing.length ? (a(), i("span", B2, "(" + f(e.detail.models.missing.length) + " missing)", 1)) : h("", !0)
                ]),
                (M = e.detail) != null && M.models ? (a(), i("span", {
                  key: 0,
                  class: Ue(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (T = e.detail) != null && T.models && l.value.has("models") ? (a(), i("div", W2, [
                s("div", G2, [
                  (a(!0), i(j, null, we(e.detail.models.missing, (P) => (a(), i("div", {
                    key: P.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", j2, [
                      s("span", H2, f(P.filename), 1),
                      s("span", {
                        class: Ue(["criticality-badge", P.criticality])
                      }, f(P.criticality), 3)
                    ]),
                    s("div", q2, [
                      s("span", K2, f(P.category), 1),
                      P.workflow_names.length ? (a(), i("span", J2, " used by: " + f(P.workflow_names.join(", ")), 1)) : h("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? h("", !0) : (a(), i("div", Q2, "No missing models"))
                ])
              ])) : h("", !0)
            ]),
            (L = e.detail) != null && L.created_at || e.environment.created_at ? (a(), i("div", Y2)) : h("", !0),
            (O = e.detail) != null && O.created_at || e.environment.created_at ? (a(), i("div", X2, [
              v[17] || (v[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", Z2, f(u(((J = e.detail) == null ? void 0 : J.created_at) ?? e.environment.created_at)), 1)
            ])) : h("", !0)
          ])
        ];
      }),
      footer: g(() => [
        s("div", e$, [
          k(Ne, {
            variant: "secondary",
            size: "sm",
            onClick: v[3] || (v[3] = (m) => n("export", e.environment.name))
          }, {
            default: g(() => [...v[19] || (v[19] = [
              $(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (a(), R(Ne, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[4] || (v[4] = (m) => n("delete", e.environment.name))
          }, {
            default: g(() => [...v[20] || (v[20] = [
              $(" Delete ", -1)
            ])]),
            _: 1
          })) : h("", !0),
          v[22] || (v[22] = s("div", { class: "footer-spacer" }, null, -1)),
          k(Ne, {
            variant: "secondary",
            size: "sm",
            onClick: v[5] || (v[5] = (m) => n("close"))
          }, {
            default: g(() => [...v[21] || (v[21] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), s$ = /* @__PURE__ */ xe(t$, [["__scopeId", "data-v-750671f5"]]), Zr = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], ec = "3.12", Cl = [
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
], tc = "auto", o$ = { class: "progress-bar" }, n$ = /* @__PURE__ */ $e({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, o = D(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (n, l) => (a(), i("div", o$, [
      s("div", {
        class: Ue(["progress-fill", e.variant]),
        style: Wt({ width: o.value })
      }, null, 6)
    ]));
  }
}), sc = /* @__PURE__ */ xe(n$, [["__scopeId", "data-v-1beb0512"]]), a$ = { class: "task-progress" }, l$ = { class: "progress-info" }, i$ = { class: "progress-percentage" }, r$ = { class: "progress-message" }, c$ = {
  key: 0,
  class: "progress-steps"
}, u$ = { class: "step-icon" }, d$ = { class: "step-label" }, f$ = /* @__PURE__ */ $e({
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
    return (l, r) => (a(), i("div", a$, [
      k(sc, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", l$, [
        s("span", i$, f(e.progress) + "%", 1),
        s("span", r$, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), i("div", c$, [
        (a(!0), i(j, null, we(e.steps, (c) => (a(), i("div", {
          key: c.id,
          class: Ue(["step", o(c.id)])
        }, [
          s("span", u$, f(n(c.id)), 1),
          s("span", d$, f(c.label), 1)
        ], 2))), 128))
      ])) : h("", !0)
    ]));
  }
}), Hn = /* @__PURE__ */ xe(f$, [["__scopeId", "data-v-9d1de66c"]]), m$ = {
  key: 0,
  class: "create-env-form"
}, v$ = { class: "form-field" }, p$ = { class: "input-wrapper" }, g$ = {
  key: 0,
  class: "validating-indicator"
}, h$ = {
  key: 1,
  class: "valid-indicator"
}, y$ = {
  key: 0,
  class: "field-error"
}, w$ = { class: "form-field" }, _$ = ["value"], k$ = { class: "form-field" }, b$ = ["disabled"], $$ = ["value"], C$ = { class: "form-field" }, x$ = ["value"], S$ = { class: "form-field form-field--checkbox" }, I$ = { class: "form-checkbox" }, E$ = {
  key: 1,
  class: "create-env-progress"
}, T$ = { class: "creating-intro" }, M$ = {
  key: 0,
  class: "progress-warning"
}, P$ = {
  key: 1,
  class: "create-error"
}, R$ = { class: "error-message" }, N$ = {
  key: 1,
  class: "footer-status"
}, L$ = 10, D$ = /* @__PURE__ */ $e({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const o = t, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = pt(), u = b(""), d = b(ec), v = b("latest"), m = b(tc), p = b(!1), w = b(null), y = b(!1), _ = b(!1);
    let x = null, C = 0;
    const S = D(() => !!u.value.trim() && _.value && !w.value && !y.value && !T.value), N = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), M = b(!1), T = b(!1), L = b({
      progress: 0,
      message: ""
    });
    let O = null, J = 0;
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
    ], F = b(null);
    kt(u, (oe) => {
      _.value = !1, x && (clearTimeout(x), x = null);
      const pe = oe.trim();
      if (!pe) {
        w.value = null, y.value = !1;
        return;
      }
      y.value = !0, x = setTimeout(() => {
        Y(pe);
      }, 400);
    });
    async function Y(oe, pe = !1) {
      const A = oe.trim();
      if (!A)
        return _.value = !1, y.value = !1, w.value = pe ? "Environment name is required" : null, !1;
      const fe = ++C;
      y.value = !0;
      try {
        const Re = await c(A);
        return fe !== C ? !1 : (w.value = Re.valid ? null : Re.error || "Invalid name", _.value = !!Re.valid, !!Re.valid);
      } catch {
        return fe !== C || (w.value = "Failed to validate name", _.value = !1), !1;
      } finally {
        fe === C && (y.value = !1);
      }
    }
    async function ee() {
      x && (clearTimeout(x), x = null), await Y(u.value, !0);
    }
    function ce() {
      T.value || o("close");
    }
    async function he() {
      const oe = u.value.trim();
      if (!oe) {
        w.value = "Environment name is required";
        return;
      }
      if (x && (clearTimeout(x), x = null), !!await Y(oe, !0)) {
        T.value = !0, L.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const A = {
            name: oe,
            python_version: d.value,
            comfyui_version: v.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, fe = await l(A);
          fe.status === "started" ? ne() : fe.status === "error" && (L.value = {
            progress: 0,
            message: fe.message || "Failed to start creation",
            error: fe.message
          });
        } catch (A) {
          L.value = {
            progress: 0,
            message: A instanceof Error ? A.message : "Unknown error",
            error: A instanceof Error ? A.message : "Unknown error"
          };
        }
      }
    }
    function ne() {
      O || (J = 0, O = window.setInterval(async () => {
        try {
          const oe = await r();
          J = 0, L.value = {
            progress: oe.progress ?? 0,
            message: oe.message,
            phase: oe.phase,
            error: oe.error
          }, oe.state === "complete" ? (K(), o("created", oe.environment_name || u.value.trim(), p.value)) : oe.state === "error" ? (K(), L.value.error = oe.error || oe.message) : oe.state === "idle" && T.value && (K(), L.value.error = "Creation was interrupted. Please try again.");
        } catch {
          J++, J >= L$ && (K(), L.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function K() {
      O && (clearInterval(O), O = null);
    }
    function le() {
      T.value = !1, L.value = { progress: 0, message: "" }, o("close");
    }
    async function Le() {
      M.value = !0;
      try {
        N.value = await n();
      } catch (oe) {
        console.error("Failed to load ComfyUI releases:", oe);
      } finally {
        M.value = !1;
      }
    }
    return rt(async () => {
      var oe;
      await Pt(), (oe = F.value) == null || oe.focus(), Le();
    }), Mo(() => {
      K(), x && (clearTimeout(x), x = null);
    }), (oe, pe) => (a(), R(St, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !T.value,
      onClose: ce
    }, {
      body: g(() => [
        T.value ? (a(), i("div", E$, [
          s("p", T$, [
            pe[12] || (pe[12] = $(" Creating environment ", -1)),
            s("strong", null, f(u.value), 1),
            pe[13] || (pe[13] = $("... ", -1))
          ]),
          k(Hn, {
            progress: L.value.progress,
            message: L.value.message,
            "current-phase": L.value.phase,
            variant: L.value.error ? "error" : "default",
            "show-steps": !0,
            steps: P
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          L.value.error ? h("", !0) : (a(), i("p", M$, " This may take several minutes. Please wait... ")),
          L.value.error ? (a(), i("div", P$, [
            s("p", R$, f(L.value.error), 1)
          ])) : h("", !0)
        ])) : (a(), i("div", m$, [
          s("div", v$, [
            pe[6] || (pe[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", p$, [
              Tt(s("input", {
                ref_key: "nameInput",
                ref: F,
                "onUpdate:modelValue": pe[0] || (pe[0] = (A) => u.value = A),
                type: "text",
                class: Ue(["form-input", { error: !!w.value, valid: _.value }]),
                placeholder: "my-environment",
                onKeyup: ds(he, ["enter"]),
                onBlur: ee
              }, null, 34), [
                [bo, u.value]
              ]),
              y.value ? (a(), i("span", g$, "...")) : _.value ? (a(), i("span", h$, "✓")) : h("", !0)
            ]),
            w.value ? (a(), i("div", y$, f(w.value), 1)) : h("", !0),
            pe[7] || (pe[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", w$, [
            pe[8] || (pe[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": pe[1] || (pe[1] = (A) => d.value = A),
              class: "form-select"
            }, [
              (a(!0), i(j, null, we(st(Zr), (A) => (a(), i("option", {
                key: A,
                value: A
              }, f(A), 9, _$))), 128))
            ], 512), [
              [$o, d.value]
            ])
          ]),
          s("div", k$, [
            pe[9] || (pe[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": pe[2] || (pe[2] = (A) => v.value = A),
              class: "form-select",
              disabled: M.value
            }, [
              (a(!0), i(j, null, we(N.value, (A) => (a(), i("option", {
                key: A.tag_name,
                value: A.tag_name
              }, f(A.name), 9, $$))), 128))
            ], 8, b$), [
              [$o, v.value]
            ])
          ]),
          s("div", C$, [
            pe[10] || (pe[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": pe[3] || (pe[3] = (A) => m.value = A),
              class: "form-select"
            }, [
              (a(!0), i(j, null, we(st(Cl), (A) => (a(), i("option", {
                key: A,
                value: A
              }, f(A) + f(A === "auto" ? " (detect GPU)" : ""), 9, x$))), 128))
            ], 512), [
              [$o, m.value]
            ])
          ]),
          s("div", S$, [
            s("label", I$, [
              Tt(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": pe[4] || (pe[4] = (A) => p.value = A)
              }, null, 512), [
                [Gn, p.value]
              ]),
              pe[11] || (pe[11] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: g(() => [
        T.value ? (a(), i(j, { key: 1 }, [
          L.value.error ? (a(), R(Ne, {
            key: 0,
            variant: "secondary",
            onClick: le
          }, {
            default: g(() => [...pe[16] || (pe[16] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), i("span", N$, " Creating environment... "))
        ], 64)) : (a(), i(j, { key: 0 }, [
          k(Ne, {
            variant: "primary",
            disabled: !S.value,
            onClick: he
          }, {
            default: g(() => [...pe[14] || (pe[14] = [
              $(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(Ne, {
            variant: "secondary",
            onClick: pe[5] || (pe[5] = (A) => o("close"))
          }, {
            default: g(() => [...pe[15] || (pe[15] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), O$ = /* @__PURE__ */ xe(D$, [["__scopeId", "data-v-3faa3d9b"]]), A$ = /* @__PURE__ */ $e({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getEnvironments: l, getEnvironmentDetails: r } = pt(), c = b([]), u = b(!1), d = b(null), v = b(""), m = b(!1), p = b(!1), w = b(null), y = b(null), _ = D(() => {
      if (!v.value.trim()) return c.value;
      const L = v.value.toLowerCase();
      return c.value.filter(
        (O) => {
          var J;
          return O.name.toLowerCase().includes(L) || ((J = O.current_branch) == null ? void 0 : J.toLowerCase().includes(L));
        }
      );
    });
    function x(L, O) {
      p.value = !1, n("created", L, O);
    }
    function C() {
      p.value = !0;
    }
    async function S(L) {
      w.value = L, y.value = null;
      const O = await r(L.name);
      O && (y.value = O);
    }
    function N(L) {
      w.value = null, y.value = null, n("delete", L);
    }
    function M(L) {
      w.value = null, y.value = null, n("export", L);
    }
    async function T() {
      u.value = !0, d.value = null;
      try {
        c.value = await l();
      } catch (L) {
        d.value = L instanceof Error ? L.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return rt(T), t({
      loadEnvironments: T,
      openCreateModal: C
    }), (L, O) => (a(), i(j, null, [
      k(Ot, null, {
        header: g(() => [
          k(At, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: O[1] || (O[1] = (J) => m.value = !0)
          }, {
            actions: g(() => [
              e.canCreate ? (a(), R(Ee, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: C
              }, {
                default: g(() => [...O[7] || (O[7] = [
                  $(" Create ", -1)
                ])]),
                _: 1
              })) : h("", !0),
              k(Ee, {
                variant: "secondary",
                size: "sm",
                onClick: O[0] || (O[0] = (J) => L.$emit("import"))
              }, {
                default: g(() => [...O[8] || (O[8] = [
                  $(" Import ", -1)
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
            "onUpdate:modelValue": O[2] || (O[2] = (J) => v.value = J),
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
            onRetry: T
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            _.value.length ? (a(), R(xt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: _.value.length
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(_.value, (J) => (a(), R(h2, {
                  key: J.name,
                  "environment-name": J.name,
                  "is-current": J.is_current,
                  "current-branch": J.current_branch,
                  "show-last-used": !1
                }, {
                  actions: g(() => [
                    !J.is_current && e.canSwitch ? (a(), R(Ee, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (P) => L.$emit("switch", J.name)
                    }, {
                      default: g(() => [...O[9] || (O[9] = [
                        $(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : h("", !0),
                    k(Ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (P) => S(J)
                    }, {
                      default: g(() => [...O[10] || (O[10] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (P) => L.$emit("export", J.name)
                    }, {
                      default: g(() => [...O[11] || (O[11] = [
                        $(" Export ", -1)
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
                  e.canCreate ? (a(), R(Ee, {
                    key: 0,
                    variant: "primary",
                    onClick: C
                  }, {
                    default: g(() => [...O[12] || (O[12] = [
                      $(" Create Environment ", -1)
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
        onClose: O[4] || (O[4] = (J) => m.value = !1)
      }, {
        content: g(() => [...O[13] || (O[13] = [
          s("p", null, [
            s("strong", null, "Environments"),
            $(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          k(Ee, {
            variant: "secondary",
            onClick: O[3] || (O[3] = (J) => m.value = !1)
          }, {
            default: g(() => [...O[14] || (O[14] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), R(s$, {
        key: 0,
        environment: w.value,
        detail: y.value,
        "can-delete": e.canDelete && c.value.length > 1,
        onClose: O[5] || (O[5] = (J) => {
          w.value = null, y.value = null;
        }),
        onDelete: N,
        onExport: M
      }, null, 8, ["environment", "detail", "can-delete"])) : h("", !0),
      p.value ? (a(), R(O$, {
        key: 1,
        onClose: O[6] || (O[6] = (J) => p.value = !1),
        onCreated: x
      })) : h("", !0)
    ], 64));
  }
}), U$ = /* @__PURE__ */ xe(A$, [["__scopeId", "data-v-01d95db8"]]), z$ = { class: "file-path" }, V$ = { class: "file-path-text" }, F$ = ["title"], B$ = /* @__PURE__ */ $e({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = b(!1);
    async function n() {
      try {
        await navigator.clipboard.writeText(t.path), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, r) => (a(), i("div", z$, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", V$, f(e.path), 1),
      e.copyable ? (a(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, f(o.value ? "✓" : "📋"), 9, F$)) : h("", !0)
    ]));
  }
}), W$ = /* @__PURE__ */ xe(B$, [["__scopeId", "data-v-f0982173"]]), G$ = { class: "base-textarea-wrapper" }, j$ = ["value", "rows", "placeholder", "disabled", "maxlength"], H$ = {
  key: 0,
  class: "base-textarea-count"
}, q$ = /* @__PURE__ */ $e({
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
    return (r, c) => (a(), i("div", G$, [
      s("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = ds(mt((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = ds(mt((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          ds(l, ["enter"])
        ]
      }, null, 40, j$),
      e.showCharCount && e.maxLength ? (a(), i("div", H$, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : h("", !0)
    ]));
  }
}), Co = /* @__PURE__ */ xe(q$, [["__scopeId", "data-v-c6d16c93"]]), K$ = ["checked", "disabled"], J$ = { class: "base-checkbox-box" }, Q$ = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Y$ = {
  key: 0,
  class: "base-checkbox-label"
}, X$ = /* @__PURE__ */ $e({
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
      }, null, 40, K$),
      s("span", J$, [
        e.modelValue ? (a(), i("svg", Q$, [...o[1] || (o[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : h("", !0)
      ]),
      t.$slots.default ? (a(), i("span", Y$, [
        ot(t.$slots, "default", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), qn = /* @__PURE__ */ xe(X$, [["__scopeId", "data-v-bf17c831"]]), Z$ = { class: "export-blocked" }, eC = { class: "error-header" }, tC = { class: "error-summary" }, sC = { class: "error-title" }, oC = { class: "error-description" }, nC = { class: "issues-list" }, aC = { class: "issue-message" }, lC = {
  key: 0,
  class: "issue-details"
}, iC = ["onClick"], rC = { class: "issue-fix" }, cC = {
  key: 0,
  class: "commit-section"
}, uC = {
  key: 0,
  class: "issues-warning"
}, dC = {
  key: 1,
  class: "commit-error"
}, fC = /* @__PURE__ */ $e({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { commit: l } = pt(), r = b(""), c = b(!1), u = b(!1), d = b(""), v = io({}), m = D(() => o.mode === "publish" ? "Publish" : "Export"), p = D(
      () => o.issues.some((S) => S.type === "uncommitted_workflows" || S.type === "uncommitted_git_changes")
    ), w = D(
      () => o.issues.some((S) => S.type === "unresolved_issues")
    ), y = D(
      () => w.value && !u.value
    ), _ = D(
      () => p.value && r.value.trim() !== "" && !c.value && !y.value
    );
    function x(S) {
      const N = o.issues[S];
      return v[S] || N.details.length <= 3 ? N.details : N.details.slice(0, 3);
    }
    async function C() {
      var S;
      if (_.value) {
        c.value = !0, d.value = "";
        try {
          const N = await l(r.value.trim(), u.value);
          if (N.status === "success")
            n("committed");
          else if (N.status === "blocked") {
            const M = ((S = N.issues) == null ? void 0 : S.map((T) => `${T.name}: ${T.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${M}`;
          } else
            d.value = N.message || "Commit failed";
        } catch (N) {
          d.value = N instanceof Error ? N.message : "Commit failed";
        } finally {
          c.value = !1;
        }
      }
    }
    return (S, N) => (a(), R(St, {
      title: p.value ? `Commit & ${m.value}` : `Cannot ${m.value}`,
      size: "md",
      onClose: N[4] || (N[4] = (M) => S.$emit("close"))
    }, {
      body: g(() => [
        s("div", Z$, [
          s("div", eC, [
            N[5] || (N[5] = s("span", { class: "error-icon" }, [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ], -1)),
            s("div", tC, [
              s("h3", sC, f(m.value) + " blocked", 1),
              s("p", oC, f(p.value ? `Commit your changes to proceed with ${m.value.toLowerCase()}.` : `The following issues must be resolved before ${m.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", nC, [
            (a(!0), i(j, null, we(e.issues, (M, T) => (a(), i("div", {
              key: T,
              class: "issue-item"
            }, [
              s("div", aC, f(M.message), 1),
              M.details.length ? (a(), i("div", lC, [
                (a(!0), i(j, null, we(x(T), (L, O) => (a(), i("div", {
                  key: O,
                  class: "issue-detail"
                }, f(L), 1))), 128)),
                M.details.length > 3 && !v[T] ? (a(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (L) => v[T] = !0
                }, " +" + f(M.details.length - 3) + " more ", 9, iC)) : h("", !0)
              ])) : h("", !0),
              s("div", rC, [
                M.type === "uncommitted_workflows" ? (a(), i(j, { key: 0 }, [
                  $(" Commit your workflow changes before " + f(m.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : M.type === "uncommitted_git_changes" ? (a(), i(j, { key: 1 }, [
                  $(" Commit your changes before " + f(m.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : M.type === "unresolved_issues" ? (a(), i(j, { key: 2 }, [
                  $(" Resolve all workflow issues before " + f(m.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : h("", !0)
              ])
            ]))), 128))
          ]),
          p.value ? (a(), i("div", cC, [
            w.value ? (a(), i("div", uC, [
              N[7] || (N[7] = s("div", { class: "warning-header" }, [
                s("span", { class: "warning-icon-badge" }, "!"),
                s("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              k(qn, {
                modelValue: u.value,
                "onUpdate:modelValue": N[0] || (N[0] = (M) => u.value = M),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...N[6] || (N[6] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : h("", !0),
            k(Co, {
              modelValue: r.value,
              "onUpdate:modelValue": N[1] || (N[1] = (M) => r.value = M),
              placeholder: "Describe your changes...",
              disabled: c.value || y.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: C,
              onCtrlEnter: C
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (a(), i("div", dC, f(d.value), 1)) : h("", !0)
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        p.value ? (a(), i(j, { key: 0 }, [
          k(Ne, {
            variant: "secondary",
            onClick: N[2] || (N[2] = (M) => S.$emit("close"))
          }, {
            default: g(() => [...N[8] || (N[8] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(Ne, {
            variant: u.value ? "danger" : "primary",
            disabled: !_.value,
            loading: c.value,
            onClick: C
          }, {
            default: g(() => [
              $(f(c.value ? "Committing..." : u.value ? `Force Commit & ${m.value}` : `Commit & ${m.value}`), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (a(), R(Ne, {
          key: 1,
          variant: "primary",
          onClick: N[3] || (N[3] = (M) => S.$emit("close"))
        }, {
          default: g(() => [...N[9] || (N[9] = [
            $(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), mC = /* @__PURE__ */ xe(fC, [["__scopeId", "data-v-a8990107"]]), vC = { class: "export-warnings" }, pC = {
  key: 0,
  class: "success-header"
}, gC = { class: "success-summary" }, hC = { class: "success-description" }, yC = { class: "warning-header" }, wC = { class: "warning-summary" }, _C = { class: "warning-title" }, kC = { class: "warning-description" }, bC = { class: "models-section" }, $C = { class: "models-list" }, CC = { class: "model-info" }, xC = { class: "model-filename" }, SC = { class: "model-workflows" }, IC = ["onClick"], EC = /* @__PURE__ */ $e({
  __name: "ExportWarningsModal",
  props: {
    models: {},
    mode: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = b(!1), r = b(null), c = D(() => o.mode || "export"), u = D(() => c.value === "publish" ? "Publish" : "Export"), d = D(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function v() {
      r.value = null, n("revalidate");
    }
    return (m, p) => (a(), i(j, null, [
      k(St, {
        title: c.value === "publish" ? "Publish Warnings" : "Export Warnings",
        size: "md",
        onClose: p[3] || (p[3] = (w) => m.$emit("cancel"))
      }, {
        body: g(() => [
          s("div", vC, [
            e.models.length === 0 ? (a(), i("div", pC, [
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
              s("div", gC, [
                p[4] || (p[4] = s("h3", { class: "success-title" }, "All models have source URLs", -1)),
                s("p", hC, " Your environment is ready to " + f(c.value) + ". Recipients will be able to download all models automatically. ", 1)
              ])
            ])) : (a(), i(j, { key: 1 }, [
              s("div", yC, [
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
                s("div", wC, [
                  s("h3", _C, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  s("p", kC, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or ` + f(c.value) + " anyway. ", 1)
                ])
              ]),
              s("div", bC, [
                s("div", $C, [
                  (a(!0), i(j, null, we(d.value, (w) => (a(), i("div", {
                    key: w.hash,
                    class: "model-item"
                  }, [
                    s("div", CC, [
                      s("div", xC, f(w.filename), 1),
                      s("div", SC, " Used by: " + f(w.workflows.join(", ")), 1)
                    ]),
                    s("button", {
                      class: "add-source-btn",
                      onClick: (y) => r.value = w.hash
                    }, " Add Source ", 8, IC)
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
          k(Ne, {
            variant: "secondary",
            onClick: p[1] || (p[1] = (w) => m.$emit("cancel"))
          }, {
            default: g(() => [
              $(" Cancel " + f(c.value === "publish" ? "Publish" : "Export"), 1)
            ]),
            _: 1
          }),
          k(Ne, {
            variant: "primary",
            onClick: p[2] || (p[2] = (w) => m.$emit("confirm"))
          }, {
            default: g(() => [
              $(f(e.models.length === 0 ? u.value : `${u.value} Anyway`), 1)
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
}), TC = /* @__PURE__ */ xe(EC, [["__scopeId", "data-v-9b6d5fce"]]), MC = { class: "export-card" }, PC = { class: "export-path-row" }, RC = { class: "export-actions" }, NC = {
  key: 1,
  class: "export-warning"
}, LC = /* @__PURE__ */ $e({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  setup(e) {
    const t = e, { validateExport: o, exportEnvWithForce: n, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = pt(), c = b(""), u = b(!1), d = b(!1), v = b(!1), m = b(null), p = b(!1), w = b(null), y = b(!1), _ = b(!1), x = D(() => {
      var Y;
      return ((Y = t.environmentName) == null ? void 0 : Y.trim()) || null;
    }), C = D(() => x.value ? `EXPORT ENVIRONMENT: ${x.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), S = D(() => x.value ? `Environment '${x.value}' has been exported` : "Your environment has been exported"), N = D(() => u.value ? "Validating..." : d.value ? "Exporting..." : "Export Environment");
    async function M() {
      u.value = !0, m.value = null;
      try {
        const Y = x.value ? await l(x.value) : await o();
        w.value = Y, Y.can_export ? Y.warnings.models_without_sources.length > 0 ? _.value = !0 : await J() : y.value = !0;
      } catch (Y) {
        m.value = {
          status: "error",
          message: Y instanceof Error ? Y.message : "Validation failed"
        };
      } finally {
        u.value = !1;
      }
    }
    async function T() {
      _.value = !1, await J();
    }
    async function L() {
      y.value = !1, u.value = !0;
      try {
        const Y = x.value ? await l(x.value) : await o();
        w.value = Y, Y.can_export ? Y.warnings.models_without_sources.length > 0 ? _.value = !0 : await J() : y.value = !0;
      } catch (Y) {
        m.value = {
          status: "error",
          message: Y instanceof Error ? Y.message : "Re-validation failed"
        };
      } finally {
        u.value = !1;
      }
    }
    async function O() {
      try {
        const Y = x.value ? await l(x.value) : await o();
        w.value = Y;
      } catch (Y) {
        console.error("Re-validation failed:", Y);
      }
    }
    async function J() {
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
    async function F() {
      var Y;
      if ((Y = m.value) != null && Y.path) {
        v.value = !0;
        try {
          const ee = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(m.value.path)}`);
          if (!ee.ok)
            throw new Error(`Download failed: ${ee.statusText}`);
          const ce = await ee.blob(), he = URL.createObjectURL(ce), ne = m.value.path.split("/").pop() || "environment-export.tar.gz", K = document.createElement("a");
          K.href = he, K.download = ne, document.body.appendChild(K), K.click(), document.body.removeChild(K), URL.revokeObjectURL(he);
        } catch (ee) {
          console.error("Failed to download:", ee), alert(`Download failed: ${ee instanceof Error ? ee.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
      }
    }
    return (Y, ee) => (a(), i(j, null, [
      k(Ot, null, Yt({
        content: g(() => [
          k(xt, { title: "EXPORT OPTIONS" }, {
            default: g(() => [
              s("div", MC, [
                ee[7] || (ee[7] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", PC, [
                  k(go, {
                    modelValue: c.value,
                    "onUpdate:modelValue": ee[1] || (ee[1] = (ce) => c.value = ce),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                s("div", RC, [
                  k(Ee, {
                    variant: "primary",
                    size: "md",
                    loading: u.value || d.value,
                    disabled: u.value || d.value,
                    onClick: M
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
                      $(" " + f(N.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          m.value ? (a(), R(xt, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: g(() => [
              k(Vt, {
                status: m.value.status === "success" ? "synced" : "broken"
              }, Yt({
                icon: g(() => [
                  $(f(m.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  $(f(m.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: g(() => [
                  $(f(m.value.status === "success" ? S.value : m.value.message), 1)
                ]),
                _: 2
              }, [
                m.value.status === "success" ? {
                  name: "details",
                  fn: g(() => [
                    k(_t, { label: "Saved to:" }, {
                      default: g(() => [
                        k(W$, {
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
                    m.value.models_without_sources && m.value.models_without_sources > 0 ? (a(), i("div", NC, [...ee[8] || (ee[8] = [
                      s("span", { class: "warning-icon" }, "!", -1),
                      s("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : h("", !0)
                  ]),
                  key: "0"
                } : void 0,
                m.value.status === "success" ? {
                  name: "actions",
                  fn: g(() => [
                    k(Ee, {
                      variant: "primary",
                      size: "sm",
                      loading: v.value,
                      onClick: F
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
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    k(Ee, {
                      variant: "secondary",
                      size: "sm",
                      onClick: P
                    }, {
                      default: g(() => [...ee[10] || (ee[10] = [
                        $(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    k(Ee, {
                      variant: "ghost",
                      size: "sm",
                      onClick: ee[2] || (ee[2] = (ce) => m.value = null)
                    }, {
                      default: g(() => [...ee[11] || (ee[11] = [
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
          })) : h("", !0)
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: g(() => [
            k(At, {
              title: C.value,
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
                  $(" — All workflows in this environment")
                ]),
                s("li", null, [
                  s("strong", null, "Custom Nodes"),
                  $(" — Node definitions and dependencies")
                ]),
                s("li", null, [
                  s("strong", null, "Models"),
                  $(" — References and source URLs (not the files)")
                ]),
                s("li", null, [
                  s("strong", null, "Configuration"),
                  $(" — Environment settings and metadata")
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
              $(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      y.value && w.value ? (a(), R(mC, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: ee[4] || (ee[4] = (ce) => y.value = !1),
        onCommitted: L
      }, null, 8, ["issues"])) : h("", !0),
      _.value && w.value ? (a(), R(TC, {
        key: 1,
        models: w.value.warnings.models_without_sources,
        onConfirm: T,
        onCancel: ee[5] || (ee[5] = (ce) => _.value = !1),
        onRevalidate: O
      }, null, 8, ["models"])) : h("", !0)
    ], 64));
  }
}), DC = /* @__PURE__ */ xe(LC, [["__scopeId", "data-v-253214a4"]]), OC = { class: "file-input-wrapper" }, AC = ["accept", "multiple", "disabled"], UC = /* @__PURE__ */ $e({
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
    const n = o, l = b(null);
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
    }), (u, d) => (a(), i("div", OC, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, AC),
      k(Ee, {
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
            $(" " + f(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), zC = /* @__PURE__ */ xe(UC, [["__scopeId", "data-v-cd192091"]]), VC = {
  key: 0,
  class: "drop-zone-empty"
}, FC = { class: "drop-zone-text" }, BC = { class: "drop-zone-primary" }, WC = { class: "drop-zone-secondary" }, GC = { class: "drop-zone-actions" }, jC = {
  key: 1,
  class: "drop-zone-file"
}, HC = { class: "file-info" }, qC = { class: "file-details" }, KC = { class: "file-name" }, JC = { class: "file-size" }, QC = /* @__PURE__ */ $e({
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
    const o = t, n = b(!1), l = b(null), r = b(0), c = D(() => l.value !== null), u = D(() => {
      var C;
      return ((C = l.value) == null ? void 0 : C.name) || "";
    }), d = D(() => {
      if (!l.value) return "";
      const C = l.value.size;
      return C < 1024 ? `${C} B` : C < 1024 * 1024 ? `${(C / 1024).toFixed(1)} KB` : C < 1024 * 1024 * 1024 ? `${(C / (1024 * 1024)).toFixed(1)} MB` : `${(C / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(C) {
      var S;
      C.stopPropagation(), r.value++, (S = C.dataTransfer) != null && S.types.includes("Files") && (n.value = !0);
    }
    function m(C) {
      C.stopPropagation(), C.dataTransfer && (C.dataTransfer.dropEffect = "copy");
    }
    function p(C) {
      C.stopPropagation(), r.value--, r.value === 0 && (n.value = !1);
    }
    function w(C) {
      var N;
      C.stopPropagation(), r.value = 0, n.value = !1;
      const S = (N = C.dataTransfer) == null ? void 0 : N.files;
      S && S.length > 0 && _(S[0]);
    }
    function y(C) {
      C.length > 0 && _(C[0]);
    }
    function _(C) {
      l.value = C, o("fileSelected", C);
    }
    function x() {
      l.value = null, o("clear");
    }
    return (C, S) => (a(), i("div", {
      class: Ue(["file-drop-zone", { "drop-active": n.value, "has-file": c.value }]),
      onDragenter: mt(v, ["prevent"]),
      onDragover: mt(m, ["prevent"]),
      onDragleave: mt(p, ["prevent"]),
      onDrop: mt(w, ["prevent"])
    }, [
      c.value ? (a(), i("div", jC, [
        s("div", HC, [
          S[1] || (S[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", qC, [
            s("div", KC, f(u.value), 1),
            s("div", JC, f(d.value), 1)
          ])
        ]),
        k(Ee, {
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
      ])) : (a(), i("div", VC, [
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
        s("div", FC, [
          s("p", BC, f(e.primaryText), 1),
          s("p", WC, f(e.secondaryText), 1)
        ]),
        s("div", GC, [
          k(zC, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: y
          }, {
            default: g(() => [
              $(f(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), YC = /* @__PURE__ */ xe(QC, [["__scopeId", "data-v-0f79cb86"]]), XC = { class: "commit-hash" }, ZC = /* @__PURE__ */ $e({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, o = D(() => t.hash.slice(0, t.length));
    return (n, l) => (a(), i("span", XC, f(o.value), 1));
  }
}), oc = /* @__PURE__ */ xe(ZC, [["__scopeId", "data-v-7c333cc6"]]), ex = { class: "import-preview" }, tx = { class: "preview-header" }, sx = {
  key: 0,
  class: "source-env"
}, ox = { class: "preview-content" }, nx = { class: "preview-section" }, ax = { class: "section-header" }, lx = { class: "section-info" }, ix = { class: "section-count" }, rx = {
  key: 0,
  class: "item-list"
}, cx = { class: "item-name" }, ux = {
  key: 0,
  class: "item-more"
}, dx = { class: "preview-section" }, fx = { class: "section-header" }, mx = { class: "section-info" }, vx = { class: "section-count" }, px = {
  key: 0,
  class: "item-list"
}, gx = { class: "item-details" }, hx = { class: "item-name" }, yx = { class: "item-meta" }, wx = {
  key: 0,
  class: "item-more"
}, _x = { class: "preview-section" }, kx = { class: "section-header" }, bx = { class: "section-info" }, $x = { class: "section-count" }, Cx = {
  key: 0,
  class: "item-list"
}, xx = { class: "item-name" }, Sx = {
  key: 0,
  class: "item-more"
}, Ix = {
  key: 0,
  class: "preview-section"
}, Ex = { class: "git-info" }, Tx = /* @__PURE__ */ $e({
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
    const t = e, o = D(() => t.workflows.length), n = D(() => t.models.length), l = D(() => t.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (a(), i("div", ex, [
      s("div", tx, [
        k(ss, null, {
          default: g(() => [...u[0] || (u[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), i("span", sx, [
          u[1] || (u[1] = $(" From: ", -1)),
          k(Xa, null, {
            default: g(() => [
              $(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : h("", !0)
      ]),
      s("div", ox, [
        s("div", nx, [
          s("div", ax, [
            u[3] || (u[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", lx, [
              u[2] || (u[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", ix, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), i("div", rx, [
            (a(!0), i(j, null, we(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", cx, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), i("div", ux, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        s("div", dx, [
          s("div", fx, [
            u[6] || (u[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", mx, [
              u[5] || (u[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", vx, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), i("div", px, [
            (a(!0), i(j, null, we(e.models.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", gx, [
                s("span", hx, f(d.filename), 1),
                s("span", yx, f(r(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), i("div", wx, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        s("div", _x, [
          s("div", kx, [
            u[9] || (u[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", bx, [
              u[8] || (u[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", $x, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), i("div", Cx, [
            (a(!0), i(j, null, we(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", xx, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), i("div", Sx, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), i("div", Ix, [
          u[11] || (u[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", Ex, [
            e.gitBranch ? (a(), R(_t, {
              key: 0,
              label: "Branch"
            }, {
              default: g(() => [
                k(Xa, null, {
                  default: g(() => [
                    $(f(e.gitBranch), 1)
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
                k(oc, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : h("", !0)
          ])
        ])) : h("", !0)
      ])
    ]));
  }
}), Mx = /* @__PURE__ */ xe(Tx, [["__scopeId", "data-v-182fe113"]]), Px = { class: "import-config" }, Rx = { class: "config-container" }, Nx = { class: "config-field" }, Lx = { class: "input-wrapper" }, Dx = ["value"], Ox = {
  key: 0,
  class: "validating-indicator"
}, Ax = {
  key: 1,
  class: "valid-indicator"
}, Ux = {
  key: 0,
  class: "field-error"
}, zx = { class: "config-field" }, Vx = { class: "strategy-options" }, Fx = ["value", "checked", "onChange"], Bx = { class: "strategy-content" }, Wx = { class: "strategy-label" }, Gx = { class: "strategy-description" }, jx = { class: "config-field switch-field" }, Hx = { class: "switch-label" }, qx = ["checked"], Kx = { class: "advanced-section" }, Jx = { class: "advanced-content" }, Qx = { class: "config-field" }, Yx = ["value"], Xx = ["value"], Zx = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = b(!1), r = b(!1);
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
    return (m, p) => (a(), i("div", Px, [
      k(ss, null, {
        default: g(() => [...p[2] || (p[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", Rx, [
        s("div", Nx, [
          k(Rn, { required: "" }, {
            default: g(() => [...p[3] || (p[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", Lx, [
            s("input", {
              type: "text",
              class: Ue(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, Dx),
            l.value ? (a(), i("span", Ox, "...")) : r.value ? (a(), i("span", Ax, "✓")) : h("", !0)
          ]),
          e.nameError ? (a(), i("div", Ux, f(e.nameError), 1)) : h("", !0),
          p[4] || (p[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", zx, [
          k(Rn, null, {
            default: g(() => [...p[5] || (p[5] = [
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", Vx, [
            (a(), i(j, null, we(c, (w) => s("label", {
              key: w.value,
              class: Ue(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              s("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (y) => n("update:modelStrategy", w.value)
              }, null, 40, Fx),
              s("div", Bx, [
                s("span", Wx, f(w.label), 1),
                s("span", Gx, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", jx, [
          s("label", Hx, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, qx),
            p[6] || (p[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", Kx, [
          p[8] || (p[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", Jx, [
            s("div", Qx, [
              k(Rn, null, {
                default: g(() => [...p[7] || (p[7] = [
                  $("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              s("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: p[1] || (p[1] = (w) => n("update:torchBackend", w.target.value))
              }, [
                (a(!0), i(j, null, we(st(Cl), (w) => (a(), i("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, Xx))), 128))
              ], 40, Yx)
            ])
          ])
        ])
      ])
    ]));
  }
}), e3 = /* @__PURE__ */ xe(Zx, [["__scopeId", "data-v-89ea06a1"]]), t3 = { class: "import-flow" }, s3 = {
  key: 0,
  class: "import-empty"
}, o3 = { class: "git-import-section" }, n3 = { class: "git-url-input-row" }, a3 = ["disabled"], l3 = {
  key: 0,
  class: "git-error"
}, i3 = {
  key: 1,
  class: "import-configure"
}, r3 = { class: "selected-file-bar" }, c3 = {
  key: 0,
  class: "file-bar-content"
}, u3 = { class: "file-bar-info" }, d3 = { class: "file-bar-name" }, f3 = { class: "file-bar-size" }, m3 = {
  key: 1,
  class: "file-bar-content"
}, v3 = { class: "file-bar-info" }, p3 = { class: "file-bar-name" }, g3 = {
  key: 0,
  class: "preview-loading"
}, h3 = { class: "import-actions" }, y3 = {
  key: 2,
  class: "import-progress"
}, w3 = { class: "creating-intro" }, _3 = {
  key: 0,
  class: "progress-warning"
}, k3 = {
  key: 1,
  class: "import-error"
}, b3 = { class: "error-message" }, $3 = {
  key: 3,
  class: "import-complete"
}, C3 = { class: "complete-message" }, x3 = { class: "complete-title" }, S3 = { class: "complete-details" }, I3 = { class: "complete-actions" }, E3 = /* @__PURE__ */ $e({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: o }) {
    var Ce, H, te, q;
    const n = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: v, getImportProgress: m } = pt();
    let p = null;
    const w = b(null), y = b(n.resumeImport ?? !1), _ = b(!1), x = b(!1), C = b(""), S = b(!1), N = b(null), M = b(""), T = b(null), L = b(!1), O = b(null), J = b(null), P = b({
      name: ((Ce = n.initialProgress) == null ? void 0 : Ce.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), F = b(null), Y = b({
      message: ((H = n.initialProgress) == null ? void 0 : H.message) ?? "Preparing import...",
      phase: ((te = n.initialProgress) == null ? void 0 : te.phase) ?? "",
      progress: ((q = n.initialProgress) == null ? void 0 : q.progress) ?? 0,
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
    ], ce = D(() => {
      if (!J.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const Z = J.value;
      return {
        sourceEnvironment: Z.comfyui_version ? `ComfyUI ${Z.comfyui_version}` : "Unknown",
        workflows: Z.workflows.map((Se) => Se.name),
        models: Z.models.map((Se) => ({
          filename: Se.filename,
          size: 0,
          type: Se.relative_path.split("/")[0] || "model"
        })),
        nodes: Z.nodes.map((Se) => Se.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), he = D(() => !S.value && !N.value && J.value && P.value.name.length > 0 && !F.value && (w.value || T.value));
    async function ne(Z) {
      w.value = Z, S.value = !0, N.value = null, J.value = null;
      try {
        const Se = await r(Z);
        J.value = Se;
      } catch (Se) {
        N.value = Se instanceof Error ? Se.message : "Failed to analyze file", console.error("Preview error:", Se);
      } finally {
        S.value = !1;
      }
    }
    function K() {
      w.value = null, T.value = null, M.value = "", O.value = null, _.value = !1, x.value = !1, C.value = "", J.value = null, N.value = null, P.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, F.value = null, l("source-cleared");
    }
    function le() {
      Re(), K(), y.value = !1, S.value = !1, L.value = !1, Y.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function Le() {
      if (M.value.trim()) {
        L.value = !0, O.value = null;
        try {
          const Z = await c(M.value.trim());
          T.value = M.value.trim(), J.value = Z;
        } catch (Z) {
          O.value = Z instanceof Error ? Z.message : "Failed to analyze repository";
        } finally {
          L.value = !1;
        }
      }
    }
    function oe(Z) {
      try {
        const Se = new URL(Z);
        return Se.host + Se.pathname.replace(/\.git$/, "");
      } catch {
        return Z;
      }
    }
    async function pe(Z) {
      if (!Z) {
        F.value = "Environment name is required";
        return;
      }
      try {
        const Se = await u(Z);
        F.value = Se.valid ? null : Se.error || "Invalid name";
      } catch {
        F.value = "Failed to validate name";
      }
    }
    async function A() {
      if (P.value.name && !(!w.value && !T.value)) {
        y.value = !0, _.value = !1, Y.value = { message: `Creating environment '${P.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let Z;
          if (w.value)
            Z = await d(
              w.value,
              P.value.name,
              P.value.modelStrategy,
              P.value.torchBackend
            );
          else if (T.value)
            Z = await v(
              T.value,
              P.value.name,
              P.value.modelStrategy,
              P.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          Z.status === "started" ? fe() : (x.value = !1, C.value = Z.message, y.value = !1, _.value = !0);
        } catch (Z) {
          x.value = !1, C.value = Z instanceof Error ? Z.message : "Unknown error occurred during import", y.value = !1, _.value = !0;
        }
      }
    }
    async function fe() {
      if (p) return;
      const Z = async () => {
        try {
          const He = await m();
          return Y.value = {
            message: He.message,
            phase: He.phase || "",
            progress: He.progress ?? (He.state === "importing" ? 50 : 0),
            error: He.error || null
          }, He.state === "complete" ? (Re(), x.value = !0, C.value = `Environment '${He.environment_name}' created successfully`, y.value = !1, _.value = !0, He.environment_name && l("import-complete", He.environment_name, P.value.switchAfterImport), !1) : He.state === "error" ? (Re(), x.value = !1, C.value = He.error || He.message, y.value = !1, _.value = !0, !1) : !0;
        } catch (He) {
          return console.error("Failed to poll import progress:", He), !0;
        }
      };
      await Z() && (p = setInterval(async () => {
        await Z() || Re();
      }, 2e3));
    }
    function Re() {
      p && (clearInterval(p), p = null);
    }
    function Fe(Z) {
      return Z < 1024 ? `${Z} B` : Z < 1024 * 1024 ? `${(Z / 1024).toFixed(1)} KB` : Z < 1024 * 1024 * 1024 ? `${(Z / (1024 * 1024)).toFixed(1)} MB` : `${(Z / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return rt(async () => {
      try {
        const Z = await m();
        console.log("[ComfyGit ImportFlow] Import progress check:", Z.state, Z), Z.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", Z.environment_name), y.value = !0, P.value.name = Z.environment_name || P.value.name || "", Y.value = {
          progress: Z.progress ?? 0,
          message: Z.message || "Importing...",
          phase: Z.phase || "",
          error: null
        }, fe());
      } catch (Z) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", Z);
      }
    }), t({
      handleReset: le,
      isImporting: y,
      canImport: he
    }), (Z, Se) => {
      var He;
      return a(), i("div", t3, [
        !w.value && !T.value && !y.value ? (a(), i("div", s3, [
          k(YC, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: ne
          }),
          Se[7] || (Se[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", o3, [
            Se[5] || (Se[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", n3, [
              Tt(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Se[0] || (Se[0] = (Ke) => M.value = Ke),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: ds(Le, ["enter"]),
                disabled: L.value
              }, null, 40, a3), [
                [bo, M.value]
              ]),
              k(Ee, {
                variant: "primary",
                size: "sm",
                disabled: !M.value.trim() || L.value,
                onClick: Le
              }, {
                default: g(() => [
                  $(f(L.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            O.value ? (a(), i("div", l3, f(O.value), 1)) : h("", !0),
            Se[6] || (Se[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || T.value) && !y.value && !_.value ? (a(), i("div", i3, [
          s("div", r3, [
            w.value ? (a(), i("div", c3, [
              Se[8] || (Se[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", u3, [
                s("div", d3, f(w.value.name), 1),
                s("div", f3, f(Fe(w.value.size)), 1)
              ])
            ])) : T.value ? (a(), i("div", m3, [
              Se[10] || (Se[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", v3, [
                s("div", p3, f(oe(T.value)), 1),
                Se[9] || (Se[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : h("", !0),
            k(Ee, {
              variant: "ghost",
              size: "sm",
              onClick: K
            }, {
              default: g(() => [...Se[11] || (Se[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (a(), i("div", g3, [...Se[12] || (Se[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : N.value ? (a(), R(cs, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [N.value]
          }, null, 8, ["details"])) : J.value ? (a(), R(Mx, {
            key: 2,
            "source-environment": ce.value.sourceEnvironment,
            workflows: ce.value.workflows,
            models: ce.value.models,
            nodes: ce.value.nodes,
            "git-branch": ce.value.gitBranch,
            "git-commit": ce.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : h("", !0),
          J.value ? (a(), R(e3, {
            key: 3,
            name: P.value.name,
            "onUpdate:name": Se[1] || (Se[1] = (Ke) => P.value.name = Ke),
            "model-strategy": P.value.modelStrategy,
            "onUpdate:modelStrategy": Se[2] || (Se[2] = (Ke) => P.value.modelStrategy = Ke),
            "torch-backend": P.value.torchBackend,
            "onUpdate:torchBackend": Se[3] || (Se[3] = (Ke) => P.value.torchBackend = Ke),
            "switch-after-import": P.value.switchAfterImport,
            "onUpdate:switchAfterImport": Se[4] || (Se[4] = (Ke) => P.value.switchAfterImport = Ke),
            "name-error": F.value,
            onValidateName: pe
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : h("", !0),
          P.value.modelStrategy === "skip" && ((He = J.value) != null && He.models_needing_download) ? (a(), R(cs, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${J.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : h("", !0),
          s("div", h3, [
            k(Ee, {
              variant: "secondary",
              size: "md",
              onClick: K
            }, {
              default: g(() => [...Se[13] || (Se[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(Ee, {
              variant: "primary",
              size: "md",
              disabled: !he.value,
              onClick: A
            }, {
              default: g(() => [...Se[14] || (Se[14] = [
                $(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : y.value ? (a(), i("div", y3, [
          s("p", w3, [
            Se[15] || (Se[15] = $(" Importing environment ", -1)),
            s("strong", null, f(P.value.name), 1),
            Se[16] || (Se[16] = $("... ", -1))
          ]),
          k(Hn, {
            progress: Y.value.progress,
            message: Y.value.message,
            "current-phase": Y.value.phase,
            variant: Y.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ee
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          Y.value.error ? h("", !0) : (a(), i("p", _3, " This may take several minutes. Please wait... ")),
          Y.value.error ? (a(), i("div", k3, [
            s("p", b3, f(Y.value.error), 1)
          ])) : h("", !0)
        ])) : _.value ? (a(), i("div", $3, [
          s("div", {
            class: Ue(["complete-icon", x.value ? "success" : "error"])
          }, f(x.value ? "✓" : "✕"), 3),
          s("div", C3, [
            s("div", x3, f(x.value ? "Import Successful" : "Import Failed"), 1),
            s("div", S3, f(C.value), 1)
          ]),
          s("div", I3, [
            k(Ee, {
              variant: "primary",
              size: "md",
              onClick: le
            }, {
              default: g(() => [...Se[17] || (Se[17] = [
                $(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), nc = /* @__PURE__ */ xe(E3, [["__scopeId", "data-v-72cbc04e"]]), T3 = /* @__PURE__ */ $e({
  __name: "ImportSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["import-complete-switch"],
  setup(e, { emit: t }) {
    const o = t, n = b(!1);
    function l(r, c) {
      c && o("import-complete-switch", r);
    }
    return (r, c) => (a(), i(j, null, [
      k(Ot, null, Yt({
        content: g(() => [
          k(nc, { onImportComplete: l })
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
}), M3 = /* @__PURE__ */ xe(T3, [["__scopeId", "data-v-41b1f298"]]), P3 = { class: "base-tabs" }, R3 = ["disabled", "onClick"], N3 = {
  key: 0,
  class: "base-tabs__badge"
}, L3 = /* @__PURE__ */ $e({
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
    return (r, c) => (a(), i("div", P3, [
      (a(!0), i(j, null, we(e.tabs, (u) => (a(), i("button", {
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
        $(f(u.label) + " ", 1),
        u.badge ? (a(), i("span", N3, f(u.badge), 1)) : h("", !0)
      ], 10, R3))), 128))
    ]));
  }
}), xl = /* @__PURE__ */ xe(L3, [["__scopeId", "data-v-ad5e6cad"]]), D3 = { class: "commit-list" }, O3 = /* @__PURE__ */ $e({
  __name: "CommitList",
  setup(e) {
    return (t, o) => (a(), i("div", D3, [
      ot(t.$slots, "default", {}, void 0)
    ]));
  }
}), ac = /* @__PURE__ */ xe(O3, [["__scopeId", "data-v-8c5ee761"]]), A3 = { class: "commit-message" }, U3 = { class: "commit-date" }, z3 = /* @__PURE__ */ $e({
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
      k(oc, { hash: e.hash }, null, 8, ["hash"]),
      s("span", A3, f(e.message), 1),
      s("span", U3, f(e.relativeDate), 1),
      r.$slots.actions ? (a(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = mt(() => {
        }, ["stop"]))
      }, [
        ot(r.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), lc = /* @__PURE__ */ xe(z3, [["__scopeId", "data-v-dd7c621b"]]), V3 = /* @__PURE__ */ $e({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const t = e, o = D(() => `HISTORY (${t.currentRef || "detached"})`);
    return (n, l) => (a(), R(Ot, null, Yt({
      content: g(() => [
        e.commits.length === 0 ? (a(), R(ls, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), R(ac, { key: 1 }, {
          default: g(() => [
            (a(!0), i(j, null, we(e.commits, (r) => (a(), R(lc, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => n.$emit("select", r)
            }, {
              actions: g(() => [
                k(Ee, {
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
}), F3 = /* @__PURE__ */ xe(V3, [["__scopeId", "data-v-fa4bf3a1"]]), B3 = { class: "branch-create-form" }, W3 = { class: "form-actions" }, G3 = /* @__PURE__ */ $e({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: t }) {
    const o = t, n = b(""), l = D(() => {
      const u = n.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function r() {
      l.value && (o("create", n.value.trim()), n.value = "");
    }
    function c() {
      n.value = "", o("cancel");
    }
    return (u, d) => (a(), i("div", B3, [
      k(go, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => n.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      s("div", W3, [
        k(Ee, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: r
        }, {
          default: g(() => [...d[1] || (d[1] = [
            $(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        k(Ee, {
          variant: "secondary",
          size: "sm",
          onClick: c
        }, {
          default: g(() => [...d[2] || (d[2] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), j3 = /* @__PURE__ */ xe(G3, [["__scopeId", "data-v-7c500394"]]), H3 = { class: "branch-list-item__indicator" }, q3 = { class: "branch-list-item__name" }, K3 = {
  key: 0,
  class: "branch-list-item__actions"
}, J3 = {
  key: 0,
  class: "branch-list-item__current-label"
}, Q3 = /* @__PURE__ */ $e({
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
      s("span", H3, f(e.isCurrent ? "●" : "○"), 1),
      s("span", q3, f(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (a(), i("div", K3, [
        ot(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), i("span", J3, " current ")) : h("", !0)
      ])) : h("", !0)
    ], 2));
  }
}), Y3 = /* @__PURE__ */ xe(Q3, [["__scopeId", "data-v-c6581a24"]]), X3 = { class: "header-info" }, Z3 = { class: "branch-name" }, e5 = {
  key: 0,
  class: "current-badge"
}, t5 = { class: "branch-meta" }, s5 = { key: 0 }, o5 = {
  key: 0,
  class: "meta-note"
}, n5 = {
  key: 0,
  class: "loading"
}, a5 = {
  key: 1,
  class: "empty-state"
}, l5 = /* @__PURE__ */ $e({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const t = e, { getBranchHistory: o } = pt(), n = b([]), l = b(!1), r = b(!0);
    return rt(async () => {
      try {
        const c = await o(t.branchName, 50);
        n.value = c.commits, l.value = c.has_more;
      } finally {
        r.value = !1;
      }
    }), (c, u) => (a(), R(St, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (d) => c.$emit("close"))
    }, {
      header: g(() => [
        s("div", X3, [
          u[4] || (u[4] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", Z3, f(e.branchName), 1),
          e.isCurrent ? (a(), i("span", e5, "CURRENT")) : h("", !0)
        ]),
        k(Ne, {
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
        s("div", t5, [
          r.value ? (a(), i("span", s5, "Loading...")) : (a(), i(j, { key: 1 }, [
            s("span", null, f(n.value.length) + " commits", 1),
            l.value ? (a(), i("span", o5, "(showing first " + f(n.value.length) + ")", 1)) : h("", !0)
          ], 64))
        ]),
        r.value ? (a(), i("div", n5, "Loading commit history...")) : n.value.length === 0 ? (a(), i("div", a5, " No commits found on this branch ")) : (a(), R(ac, {
          key: 2,
          class: "branch-commits"
        }, {
          default: g(() => [
            (a(!0), i(j, null, we(n.value, (d) => (a(), R(lc, {
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
        e.isCurrent ? h("", !0) : (a(), R(Ee, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: u[1] || (u[1] = (d) => c.$emit("delete", e.branchName))
        }, {
          default: g(() => [...u[6] || (u[6] = [
            $(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        u[8] || (u[8] = s("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? h("", !0) : (a(), R(Ne, {
          key: 1,
          variant: "primary",
          onClick: u[2] || (u[2] = (d) => c.$emit("switch", e.branchName))
        }, {
          default: g(() => [...u[7] || (u[7] = [
            $(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), i5 = /* @__PURE__ */ xe(l5, [["__scopeId", "data-v-2e5437cc"]]), r5 = {
  key: 2,
  class: "branch-list"
}, c5 = /* @__PURE__ */ $e({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {},
    embedded: { type: Boolean }
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: t }) {
    const o = t, n = b(!1), l = b(null);
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
        n.value ? (a(), R(j3, {
          key: 0,
          onCreate: r,
          onCancel: c
        })) : h("", !0),
        e.branches.length === 0 ? (a(), R(ls, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), i("div", r5, [
          (a(!0), i(j, null, we(e.branches, (w) => (a(), R(Y3, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (y) => u(w)
          }, {
            actions: g(() => [
              w.is_current ? h("", !0) : (a(), R(Ee, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: mt((y) => o("switch", w.name), ["stop"])
              }, {
                default: g(() => [...p[3] || (p[3] = [
                  $(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (a(), R(i5, {
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
              n.value ? h("", !0) : (a(), R(Ee, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: p[0] || (p[0] = (w) => n.value = !0)
              }, {
                default: g(() => [...p[2] || (p[2] = [
                  $(" + Create Branch ", -1)
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
}), u5 = /* @__PURE__ */ xe(c5, [["__scopeId", "data-v-a3de96cc"]]);
function ic(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const d5 = { class: "remote-url-display" }, f5 = ["title"], m5 = ["title"], v5 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, p5 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, g5 = /* @__PURE__ */ $e({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const t = e, o = b(!1), n = D(() => {
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
    return (r, c) => (a(), i("div", d5, [
      s("span", {
        class: "url-text",
        title: e.url
      }, f(n.value), 9, f5),
      s("button", {
        class: Ue(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), i("svg", p5, [...c[1] || (c[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), i("svg", v5, [...c[0] || (c[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, m5)
    ]));
  }
}), h5 = /* @__PURE__ */ xe(g5, [["__scopeId", "data-v-7768a58d"]]), y5 = { class: "remote-title" }, w5 = {
  key: 0,
  class: "default-badge"
}, _5 = {
  key: 1,
  class: "sync-badge"
}, k5 = {
  key: 0,
  class: "ahead"
}, b5 = {
  key: 1,
  class: "behind"
}, $5 = {
  key: 1,
  class: "synced"
}, C5 = ["href"], x5 = {
  key: 1,
  class: "remote-url-text"
}, S5 = /* @__PURE__ */ $e({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const t = e, o = D(() => t.fetchingRemote === t.remote.name), n = D(() => t.remote.is_default), l = D(() => t.syncStatus && t.syncStatus.behind > 0), r = D(() => t.syncStatus && t.syncStatus.ahead > 0), c = D(() => t.remote.push_url !== t.remote.fetch_url), u = D(() => {
      const v = t.remote.fetch_url, m = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return m ? `https://${m[1]}/${m[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = D(() => t.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, m) => (a(), R(Vt, {
      status: n.value ? "synced" : void 0
    }, Yt({
      icon: g(() => [
        $(f(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: g(() => [
        s("div", y5, [
          s("span", null, f(e.remote.name), 1),
          n.value ? (a(), i("span", w5, "DEFAULT")) : h("", !0),
          e.syncStatus ? (a(), i("span", _5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), i(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), i("span", k5, "↑" + f(e.syncStatus.ahead), 1)) : h("", !0),
              e.syncStatus.behind > 0 ? (a(), i("span", b5, "↓" + f(e.syncStatus.behind), 1)) : h("", !0)
            ], 64)) : (a(), i("span", $5, "✓ synced"))
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
          onClick: m[0] || (m[0] = mt(() => {
          }, ["stop"]))
        }, f(d.value), 9, C5)) : (a(), i("span", x5, f(d.value), 1))
      ]),
      actions: g(() => [
        k(Ee, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: m[1] || (m[1] = (p) => v.$emit("fetch", e.remote.name))
        }, {
          default: g(() => [...m[6] || (m[6] = [
            $(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        k(Ee, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: m[2] || (m[2] = (p) => v.$emit("pull", e.remote.name))
        }, {
          default: g(() => [
            $(" Pull" + f(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(Ee, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: m[3] || (m[3] = (p) => v.$emit("push", e.remote.name))
        }, {
          default: g(() => [
            $(" Push" + f(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(Ee, {
          variant: "secondary",
          size: "xs",
          onClick: m[4] || (m[4] = (p) => v.$emit("edit", e.remote.name))
        }, {
          default: g(() => [...m[7] || (m[7] = [
            $(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? h("", !0) : (a(), R(Ee, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: m[5] || (m[5] = (p) => v.$emit("remove", e.remote.name))
        }, {
          default: g(() => [...m[8] || (m[8] = [
            $(" Remove ", -1)
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
              k(h5, {
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
}), I5 = /* @__PURE__ */ xe(S5, [["__scopeId", "data-v-8310f3a8"]]), E5 = ["for"], T5 = {
  key: 0,
  class: "base-form-field-required"
}, M5 = { class: "base-form-field-input" }, P5 = {
  key: 1,
  class: "base-form-field-error"
}, R5 = {
  key: 2,
  class: "base-form-field-hint"
}, N5 = /* @__PURE__ */ $e({
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
    const t = e, o = D(() => t.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (n, l) => (a(), i("div", {
      class: Ue(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        $(f(e.label) + " ", 1),
        e.required ? (a(), i("span", T5, "*")) : h("", !0)
      ], 8, E5)) : h("", !0),
      s("div", M5, [
        ot(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), i("span", P5, f(e.error), 1)) : e.hint ? (a(), i("span", R5, f(e.hint), 1)) : h("", !0)
    ], 2));
  }
}), Nt = /* @__PURE__ */ xe(N5, [["__scopeId", "data-v-9a1cf296"]]), L5 = { class: "remote-form" }, D5 = { class: "form-header" }, O5 = { class: "form-body" }, A5 = {
  key: 0,
  class: "form-error"
}, U5 = { class: "form-actions" }, z5 = /* @__PURE__ */ $e({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = b({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), r = b(!1), c = b(null);
    kt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = D(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
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
    return (v, m) => (a(), i("div", L5, [
      s("div", D5, [
        k(ss, null, {
          default: g(() => [
            $(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", O5, [
        k(Nt, {
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
        k(Nt, {
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
        k(Nt, { label: "Push URL (optional)" }, {
          default: g(() => [
            k(wt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": m[2] || (m[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (a(), i("div", A5, f(c.value), 1)) : h("", !0)
      ]),
      s("div", U5, [
        k(Ee, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: r.value,
          onClick: d
        }, {
          default: g(() => [
            $(f(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        k(Ee, {
          variant: "ghost",
          size: "md",
          onClick: m[3] || (m[3] = (p) => v.$emit("cancel"))
        }, {
          default: g(() => [...m[4] || (m[4] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), V5 = /* @__PURE__ */ xe(z5, [["__scopeId", "data-v-56021b18"]]), F5 = { class: "conflict-summary-box" }, B5 = { class: "summary-header" }, W5 = { class: "summary-text" }, G5 = { key: 0 }, j5 = {
  key: 1,
  class: "all-resolved"
}, H5 = { class: "summary-progress" }, q5 = { class: "progress-bar" }, K5 = { class: "progress-text" }, J5 = /* @__PURE__ */ $e({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const t = e, o = D(
      () => t.conflictCount > 0 ? t.resolvedCount / t.conflictCount * 100 : 0
    );
    return (n, l) => (a(), i("div", F5, [
      s("div", B5, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", W5, [
          s("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), i("p", G5, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (a(), i("p", j5, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      s("div", H5, [
        s("div", q5, [
          s("div", {
            class: "progress-fill",
            style: Wt({ width: o.value + "%" })
          }, null, 4)
        ]),
        s("span", K5, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Q5 = /* @__PURE__ */ xe(J5, [["__scopeId", "data-v-4e9e6cc9"]]), Y5 = { class: "modal-header" }, X5 = { class: "modal-title" }, Z5 = { class: "modal-body" }, e8 = {
  key: 0,
  class: "error-box"
}, t8 = {
  key: 0,
  class: "error-hint"
}, s8 = {
  key: 1,
  class: "loading-state"
}, o8 = { class: "commit-summary" }, n8 = {
  key: 0,
  class: "commits-section"
}, a8 = { class: "commit-list" }, l8 = { class: "commit-hash" }, i8 = { class: "commit-message" }, r8 = { class: "commit-date" }, c8 = {
  key: 1,
  class: "changes-section"
}, u8 = {
  key: 0,
  class: "change-group",
  open: ""
}, d8 = { class: "change-count" }, f8 = { class: "change-list" }, m8 = {
  key: 0,
  class: "conflict-badge"
}, v8 = {
  key: 1,
  class: "change-group"
}, p8 = { class: "change-count" }, g8 = { class: "change-list" }, h8 = {
  key: 2,
  class: "change-group"
}, y8 = { class: "change-count" }, w8 = { class: "change-list" }, _8 = {
  key: 3,
  class: "strategy-section"
}, k8 = { class: "radio-group" }, b8 = { class: "radio-option" }, $8 = { class: "radio-option" }, C8 = { class: "radio-option" }, x8 = {
  key: 4,
  class: "up-to-date"
}, S8 = { class: "modal-actions" }, _i = "comfygit.pullModelStrategy", I8 = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = b(localStorage.getItem(_i) || "skip");
    kt(l, (C) => {
      localStorage.setItem(_i, C);
    });
    const r = D(() => {
      var C;
      return ((C = o.error) == null ? void 0 : C.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = D(() => {
      if (!o.preview) return 0;
      const C = o.preview.changes.workflows;
      return C.added.length + C.modified.length + C.deleted.length;
    }), u = D(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = D(() => {
      var C;
      return c.value > 0 || u.value > 0 || (((C = o.preview) == null ? void 0 : C.changes.models.count) || 0) > 0;
    }), v = D(() => o.preview && ic(o.preview) ? o.preview : null), m = D(() => {
      var C;
      return ((C = v.value) == null ? void 0 : C.workflow_conflicts.length) ?? 0;
    }), p = D(() => {
      var C;
      return ((C = o.conflictResolutions) == null ? void 0 : C.size) ?? 0;
    }), w = D(
      () => m.value > 0 && p.value === m.value
    ), y = D(() => !(!o.preview || o.preview.has_uncommitted_changes || v.value && !w.value));
    function _(C) {
      if (!v.value) return !1;
      const S = C.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((N) => N.name === S);
    }
    function x(C) {
      const S = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: C, resolutions: S });
    }
    return (C, S) => {
      var N, M;
      return a(), R(Dt, { to: "body" }, [
        e.show ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[11] || (S[11] = (T) => C.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: S[10] || (S[10] = mt(() => {
            }, ["stop"]))
          }, [
            s("div", Y5, [
              s("h3", X5, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: S[0] || (S[0] = (T) => C.$emit("close"))
              }, "✕")
            ]),
            s("div", Z5, [
              e.error ? (a(), i("div", e8, [
                S[13] || (S[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  S[12] || (S[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, f(e.error), 1),
                  r.value ? (a(), i("p", t8, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : h("", !0)
                ])
              ])) : e.loading ? (a(), i("div", s8, [...S[14] || (S[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (N = e.preview) != null && N.has_uncommitted_changes ? (a(), i(j, { key: 2 }, [
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
              ], 64)) : e.preview ? (a(), i(j, { key: 3 }, [
                s("div", o8, [
                  S[17] || (S[17] = s("span", { class: "icon" }, "📥", -1)),
                  $(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (a(), i("div", n8, [
                  S[18] || (S[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", a8, [
                    (a(!0), i(j, null, we(e.preview.commits, (T) => (a(), i("div", {
                      key: T.hash,
                      class: "commit-item"
                    }, [
                      s("span", l8, f(T.short_hash || T.hash.slice(0, 7)), 1),
                      s("span", i8, f(T.message), 1),
                      s("span", r8, f(T.date_relative || T.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                d.value ? (a(), i("div", c8, [
                  S[22] || (S[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (a(), i("details", u8, [
                    s("summary", null, [
                      S[19] || (S[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", d8, f(c.value) + " changes", 1)
                    ]),
                    s("div", f8, [
                      (a(!0), i(j, null, we(e.preview.changes.workflows.added, (T) => (a(), i("div", {
                        key: "a-" + T,
                        class: "change-item add"
                      }, " + " + f(T), 1))), 128)),
                      (a(!0), i(j, null, we(e.preview.changes.workflows.modified, (T) => (a(), i("div", {
                        key: "m-" + T,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + f(T) + " ", 1),
                        _(T) ? (a(), i("span", m8, "CONFLICT")) : h("", !0)
                      ]))), 128)),
                      (a(!0), i(j, null, we(e.preview.changes.workflows.deleted, (T) => (a(), i("div", {
                        key: "d-" + T,
                        class: "change-item delete"
                      }, " - " + f(T), 1))), 128))
                    ])
                  ])) : h("", !0),
                  u.value > 0 ? (a(), i("details", v8, [
                    s("summary", null, [
                      S[20] || (S[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", p8, f(u.value) + " to install", 1)
                    ]),
                    s("div", g8, [
                      (a(!0), i(j, null, we(e.preview.changes.nodes.to_install, (T) => (a(), i("div", {
                        key: T,
                        class: "change-item add"
                      }, " + " + f(T), 1))), 128))
                    ])
                  ])) : h("", !0),
                  e.preview.changes.models.count > 0 ? (a(), i("details", h8, [
                    s("summary", null, [
                      S[21] || (S[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", y8, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", w8, [
                      (a(!0), i(j, null, we(e.preview.changes.models.referenced, (T) => (a(), i("div", {
                        key: T,
                        class: "change-item"
                      }, f(T), 1))), 128))
                    ])
                  ])) : h("", !0)
                ])) : h("", !0),
                v.value ? (a(), R(Q5, {
                  key: 2,
                  "conflict-count": m.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : h("", !0),
                e.preview.changes.models.count > 0 ? (a(), i("div", _8, [
                  S[27] || (S[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", k8, [
                    s("label", b8, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[1] || (S[1] = (T) => l.value = T),
                        value: "all"
                      }, null, 512), [
                        [Pn, l.value]
                      ]),
                      S[23] || (S[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", $8, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (T) => l.value = T),
                        value: "required"
                      }, null, 512), [
                        [Pn, l.value]
                      ]),
                      S[24] || (S[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", C8, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[3] || (S[3] = (T) => l.value = T),
                        value: "skip"
                      }, null, 512), [
                        [Pn, l.value]
                      ]),
                      S[25] || (S[25] = s("span", null, "Skip model downloads", -1)),
                      S[26] || (S[26] = s("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  S[28] || (S[28] = s("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : h("", !0),
                e.preview.commits_behind === 0 ? (a(), i("div", x8, [
                  S[29] || (S[29] = s("span", { class: "icon" }, "✓", -1)),
                  $(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : h("", !0)
              ], 64)) : h("", !0)
            ]),
            s("div", S8, [
              k(Ee, {
                variant: "secondary",
                onClick: S[4] || (S[4] = (T) => C.$emit("close"))
              }, {
                default: g(() => [...S[30] || (S[30] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), i(j, { key: 0 }, [
                k(Ee, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: S[5] || (S[5] = (T) => x(!1))
                }, {
                  default: g(() => [...S[31] || (S[31] = [
                    $(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                k(Ee, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: S[6] || (S[6] = (T) => x(!0))
                }, {
                  default: g(() => [...S[32] || (S[32] = [
                    $(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (M = e.preview) != null && M.has_uncommitted_changes ? (a(), R(Ee, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: S[7] || (S[7] = (T) => x(!0))
              }, {
                default: g(() => [...S[33] || (S[33] = [
                  $(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), i(j, { key: 2 }, [
                v.value && !w.value ? (a(), R(Ee, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (T) => n("openConflictResolution"))
                }, {
                  default: g(() => [
                    $(" Resolve Conflicts (" + f(p.value) + "/" + f(m.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), R(Ee, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !y.value,
                  onClick: S[9] || (S[9] = (T) => x(!1))
                }, {
                  default: g(() => [...S[34] || (S[34] = [
                    $(" Pull Changes ", -1)
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
}), E8 = /* @__PURE__ */ xe(I8, [["__scopeId", "data-v-1d633bba"]]), T8 = { class: "modal-header" }, M8 = { class: "modal-title" }, P8 = { class: "modal-body" }, R8 = {
  key: 0,
  class: "error-box"
}, N8 = {
  key: 1,
  class: "loading-state"
}, L8 = {
  key: 2,
  class: "warning-box"
}, D8 = {
  key: 0,
  class: "commits-section"
}, O8 = { class: "commit-list" }, A8 = { class: "commit-hash" }, U8 = { class: "commit-message" }, z8 = { class: "commit-date" }, V8 = { class: "force-option" }, F8 = { class: "checkbox-option" }, B8 = { class: "commit-summary" }, W8 = { key: 0 }, G8 = { key: 1 }, j8 = {
  key: 0,
  class: "info-box"
}, H8 = {
  key: 1,
  class: "commits-section"
}, q8 = { class: "commit-list" }, K8 = { class: "commit-hash" }, J8 = { class: "commit-message" }, Q8 = { class: "commit-date" }, Y8 = {
  key: 2,
  class: "up-to-date"
}, X8 = { class: "modal-actions" }, Z8 = /* @__PURE__ */ $e({
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
    const o = t, n = b(!1);
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
            onClick: c[6] || (c[6] = mt(() => {
            }, ["stop"]))
          }, [
            s("div", T8, [
              s("h3", M8, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (m) => r.$emit("close"))
              }, "✕")
            ]),
            s("div", P8, [
              e.error ? (a(), i("div", R8, [
                c[9] || (c[9] = s("span", { class: "error-icon" }, "!", -1)),
                s("div", null, [
                  c[8] || (c[8] = s("strong", null, "Push failed", -1)),
                  s("p", null, f(e.error), 1)
                ])
              ])) : h("", !0),
              e.loading ? (a(), i("div", N8, [...c[10] || (c[10] = [
                s("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (a(), i("div", L8, [...c[11] || (c[11] = [
                s("span", { class: "warning-icon" }, "⚠", -1),
                s("div", null, [
                  s("strong", null, "UNCOMMITTED CHANGES"),
                  s("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = e.preview) != null && d.remote_has_new_commits ? (a(), i(j, { key: 3 }, [
                c[15] || (c[15] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("div", null, [
                    s("strong", null, "REMOTE HAS NEW COMMITS"),
                    s("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (a(), i("div", D8, [
                  c[12] || (c[12] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  s("div", O8, [
                    (a(!0), i(j, null, we(e.preview.commits, (m) => (a(), i("div", {
                      key: m.hash,
                      class: "commit-item"
                    }, [
                      s("span", A8, f(m.short_hash || m.hash.slice(0, 7)), 1),
                      s("span", U8, f(m.message), 1),
                      s("span", z8, f(m.date_relative || m.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                s("div", V8, [
                  s("label", F8, [
                    Tt(s("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": c[1] || (c[1] = (m) => n.value = m)
                    }, null, 512), [
                      [Gn, n.value]
                    ]),
                    c[13] || (c[13] = s("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  c[14] || (c[14] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (a(), i(j, { key: 4 }, [
                s("div", B8, [
                  c[16] || (c[16] = s("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (a(), i("span", W8, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), i("span", G8, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (a(), i("div", j8, [...c[17] || (c[17] = [
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
                e.preview.commits_ahead > 0 ? (a(), i("div", H8, [
                  c[18] || (c[18] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  s("div", q8, [
                    (a(!0), i(j, null, we(e.preview.commits, (m) => (a(), i("div", {
                      key: m.hash,
                      class: "commit-item"
                    }, [
                      s("span", K8, f(m.short_hash || m.hash.slice(0, 7)), 1),
                      s("span", J8, f(m.message), 1),
                      s("span", Q8, f(m.date_relative || m.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (a(), i("div", Y8, [
                  c[19] || (c[19] = s("span", { class: "icon" }, "✓", -1)),
                  $(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : h("", !0)
            ]),
            s("div", X8, [
              k(Ee, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (m) => r.$emit("close"))
              }, {
                default: g(() => [...c[20] || (c[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (v = e.preview) != null && v.remote_has_new_commits ? (a(), i(j, { key: 0 }, [
                k(Ee, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (m) => r.$emit("pull-first"))
                }, {
                  default: g(() => [...c[21] || (c[21] = [
                    $(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                k(Ee, {
                  variant: "destructive",
                  disabled: !n.value,
                  loading: e.pushing,
                  onClick: c[4] || (c[4] = (m) => l(!0))
                }, {
                  default: g(() => [...c[22] || (c[22] = [
                    $(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), R(Ee, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: c[5] || (c[5] = (m) => l(!1))
              }, {
                default: g(() => [...c[23] || (c[23] = [
                  $(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : h("", !0)
            ])
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), eS = /* @__PURE__ */ xe(Z8, [["__scopeId", "data-v-621a386e"]]), tS = { class: "resolution-choice-group" }, sS = ["disabled"], oS = ["disabled"], nS = /* @__PURE__ */ $e({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("div", tS, [
      s("button", {
        class: Ue(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, sS),
      s("button", {
        class: Ue(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, oS)
    ]));
  }
}), aS = /* @__PURE__ */ xe(nS, [["__scopeId", "data-v-985715ed"]]), lS = { class: "conflict-header" }, iS = { class: "conflict-info" }, rS = { class: "workflow-name" }, cS = { class: "conflict-description" }, uS = {
  key: 0,
  class: "resolved-badge"
}, dS = { class: "resolved-text" }, fS = { class: "conflict-hashes" }, mS = { class: "hash-item" }, vS = { class: "hash-item" }, pS = { class: "conflict-actions" }, gS = /* @__PURE__ */ $e({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = b(o.resolution);
    kt(() => o.resolution, (d) => {
      l.value = d;
    }), kt(l, (d) => {
      d && n("resolve", d);
    });
    const r = D(() => l.value !== null), c = D(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = D(() => {
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
        s("div", lS, [
          v[2] || (v[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", iS, [
            s("code", rS, f(e.conflict.name) + ".json", 1),
            s("div", cS, f(c.value), 1)
          ]),
          r.value ? (a(), i("div", uS, [
            v[1] || (v[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", dS, f(u.value), 1)
          ])) : h("", !0)
        ]),
        s("div", fS, [
          s("span", mS, [
            v[3] || (v[3] = $("Your: ", -1)),
            s("code", null, f(((m = e.conflict.base_hash) == null ? void 0 : m.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", vS, [
            v[4] || (v[4] = $("Theirs: ", -1)),
            s("code", null, f(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", pS, [
          k(aS, {
            modelValue: l.value,
            "onUpdate:modelValue": v[0] || (v[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), hS = /* @__PURE__ */ xe(gS, [["__scopeId", "data-v-506d3bbf"]]), yS = { class: "resolution-content" }, wS = {
  key: 0,
  class: "error-box"
}, _S = { class: "resolution-header" }, kS = { class: "header-stats" }, bS = { class: "stat" }, $S = { class: "stat-value" }, CS = { class: "stat resolved" }, xS = { class: "stat-value" }, SS = {
  key: 0,
  class: "stat pending"
}, IS = { class: "stat-value" }, ES = { class: "conflicts-list" }, TS = {
  key: 1,
  class: "all-resolved-message"
}, MS = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = D(() => o.resolutions.size), r = D(() => o.workflowConflicts.length - l.value), c = D(() => l.value === o.workflowConflicts.length), u = D(
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
    return (w, y) => (a(), R(St, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: m
    }, {
      body: g(() => [
        s("div", yS, [
          e.error ? (a(), i("div", wS, [
            y[1] || (y[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              y[0] || (y[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, f(e.error), 1)
            ])
          ])) : h("", !0),
          s("div", _S, [
            s("div", kS, [
              s("div", bS, [
                s("span", $S, f(e.workflowConflicts.length), 1),
                y[2] || (y[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", CS, [
                s("span", xS, f(l.value), 1),
                y[3] || (y[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (a(), i("div", SS, [
                s("span", IS, f(r.value), 1),
                y[4] || (y[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : h("", !0)
            ]),
            y[5] || (y[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", ES, [
            (a(!0), i(j, null, we(e.workflowConflicts, (_) => (a(), R(hS, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (x) => v(_.name, x)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (a(), i("div", TS, [
            y[6] || (y[6] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", null, 'All conflicts resolved! Click "' + f(u.value) + '" to continue.', 1)
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        k(Ne, {
          variant: "secondary",
          onClick: m
        }, {
          default: g(() => [...y[7] || (y[7] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        y[8] || (y[8] = s("div", { class: "footer-spacer" }, null, -1)),
        k(Ne, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: p
        }, {
          default: g(() => [
            $(f(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), PS = /* @__PURE__ */ xe(MS, [["__scopeId", "data-v-c58d150d"]]), RS = { class: "node-conflict-item" }, NS = { class: "node-header" }, LS = { class: "node-name" }, DS = { class: "node-id" }, OS = { class: "version-comparison" }, AS = { class: "version yours" }, US = { class: "version theirs" }, zS = { class: "chosen-version" }, VS = { class: "chosen" }, FS = { class: "chosen-reason" }, BS = { class: "affected-workflows" }, WS = { class: "wf-source" }, GS = { class: "wf-version" }, jS = /* @__PURE__ */ $e({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, o) => (a(), i("div", RS, [
      s("div", NS, [
        s("code", LS, f(e.conflict.node_name), 1),
        s("span", DS, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      s("div", OS, [
        s("div", AS, [
          o[0] || (o[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", US, [
          o[1] || (o[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      s("div", zS, [
        o[3] || (o[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", VS, f(e.conflict.chosen_version), 1),
        s("span", FS, f(e.conflict.chosen_reason), 1)
      ]),
      s("details", BS, [
        s("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (a(!0), i(j, null, we(e.conflict.affected_workflows, (n) => (a(), i("li", {
            key: n.name
          }, [
            s("code", null, f(n.name), 1),
            s("span", WS, "(" + f(n.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", GS, "needs v" + f(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), HS = /* @__PURE__ */ xe(jS, [["__scopeId", "data-v-8b626725"]]), qS = { class: "validation-content" }, KS = {
  key: 0,
  class: "compatible-message"
}, JS = { class: "conflicts-list" }, QS = {
  key: 2,
  class: "warnings-section"
}, YS = /* @__PURE__ */ $e({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = D(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (a(), R(St, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => n("cancel"))
    }, {
      body: g(() => [
        s("div", qS, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), i("div", KS, [
            c[5] || (c[5] = s("span", { class: "icon" }, "✓", -1)),
            s("div", null, [
              c[4] || (c[4] = s("strong", null, "All clear!", -1)),
              s("p", null, "Your workflow choices are compatible. Ready to " + f(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (a(), i(j, { key: 1 }, [
            c[6] || (c[6] = s("div", { class: "warning-header" }, [
              s("span", { class: "icon" }, "⚠"),
              s("div", null, [
                s("strong", null, "Node Version Differences"),
                s("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            s("div", JS, [
              (a(!0), i(j, null, we(e.validation.node_conflicts, (u) => (a(), R(HS, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : h("", !0),
          e.validation.warnings.length > 0 ? (a(), i("div", QS, [
            c[8] || (c[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (a(!0), i(j, null, we(e.validation.warnings, (u, d) => (a(), i("li", { key: d }, f(u), 1))), 128))
            ])
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        k(Ne, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => n("cancel"))
        }, {
          default: g(() => [...c[9] || (c[9] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = s("div", { class: "footer-spacer" }, null, -1)),
        k(Ne, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => n("goBack"))
        }, {
          default: g(() => [...c[10] || (c[10] = [
            $(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        k(Ne, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => n("proceed"))
        }, {
          default: g(() => [
            $(f(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), XS = /* @__PURE__ */ xe(YS, [["__scopeId", "data-v-fefd26ed"]]), ZS = {
  key: 0,
  class: "embedded-toolbar"
}, e4 = { class: "embedded-toolbar-search" }, t4 = { key: 0 }, s4 = /* @__PURE__ */ $e({
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
    } = pt(), _ = b([]), x = b(null), C = b({}), S = b(!1), N = b(null), M = b(""), T = b(!1), L = b(null), O = b(!1), J = b("add"), P = b({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), F = D(() => {
      if (!M.value.trim()) return _.value;
      const Ae = M.value.toLowerCase();
      return _.value.filter(
        (Pe) => Pe.name.toLowerCase().includes(Ae) || Pe.fetch_url.toLowerCase().includes(Ae) || Pe.push_url.toLowerCase().includes(Ae)
      );
    });
    async function Y() {
      S.value = !0, N.value = null;
      try {
        const Ae = await n();
        _.value = Ae.remotes, x.value = Ae.current_branch_tracking || null, await Promise.all(
          Ae.remotes.map(async (Pe) => {
            const B = await d(Pe.name);
            B && (C.value[Pe.name] = B);
          })
        );
      } catch (Ae) {
        N.value = Ae instanceof Error ? Ae.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function ee() {
      J.value = "add", P.value = { name: "", fetchUrl: "", pushUrl: "" }, O.value = !0;
    }
    function ce(Ae) {
      const Pe = _.value.find((B) => B.name === Ae);
      Pe && (J.value = "edit", P.value = {
        name: Pe.name,
        fetchUrl: Pe.fetch_url,
        pushUrl: Pe.push_url
      }, O.value = !0);
    }
    async function he(Ae) {
      try {
        J.value === "add" ? await l(Ae.name, Ae.fetchUrl) : await c(Ae.name, Ae.fetchUrl, Ae.pushUrl || void 0), O.value = !1, await Y();
      } catch (Pe) {
        N.value = Pe instanceof Error ? Pe.message : "Operation failed";
      }
    }
    function ne() {
      O.value = !1, P.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function K(Ae) {
      L.value = Ae;
      try {
        await u(Ae);
        const Pe = await d(Ae);
        Pe && (C.value[Ae] = Pe), o("toast", `✓ Fetched from ${Ae}`, "success");
      } catch (Pe) {
        o("toast", Pe instanceof Error ? Pe.message : "Fetch failed", "error");
      } finally {
        L.value = null;
      }
    }
    async function le(Ae) {
      if (confirm(`Remove remote "${Ae}"?`))
        try {
          await r(Ae), await Y();
        } catch (Pe) {
          N.value = Pe instanceof Error ? Pe.message : "Failed to remove remote";
        }
    }
    function Le() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const oe = b("idle"), pe = D(() => oe.value === "pull_preview"), A = D(
      () => oe.value === "resolving" || oe.value === "validating"
    ), fe = D(
      () => oe.value === "validation_review" || oe.value === "executing"
    ), Re = b(!1), Fe = b(null), Ce = b(!1), H = b(null), te = b(null), q = b(!1), Z = b(null), Se = b(null), He = b(/* @__PURE__ */ new Map()), Ke = b(null), I = b(null), E = D(() => Z.value && ic(Z.value) ? Z.value : null);
    async function W(Ae) {
      te.value = Ae, oe.value = "pull_preview", q.value = !0, Z.value = null, Se.value = null;
      try {
        Z.value = await v(Ae);
      } catch (Pe) {
        Se.value = Pe instanceof Error ? Pe.message : "Failed to load pull preview";
      } finally {
        q.value = !1;
      }
    }
    function ge() {
      oe.value = "idle", Z.value = null, Se.value = null, te.value = null;
    }
    async function ke(Ae) {
      if (!te.value) return;
      oe.value = "executing", Se.value = null;
      const Pe = te.value;
      try {
        const B = await m(Pe, Ae);
        if (B.rolled_back) {
          Se.value = `Pull failed and was rolled back: ${B.error || "Unknown error"}`, oe.value = "pull_preview";
          return;
        }
        ve(), oe.value = "idle", o("toast", `✓ Pulled from ${Pe}`, "success"), await Y();
      } catch (B) {
        Se.value = B instanceof Error ? B.message : "Pull failed", oe.value = "pull_preview";
      }
    }
    function _e() {
      E.value && (oe.value = "resolving", I.value = null);
    }
    function De(Ae, Pe) {
      He.value.set(Ae, { name: Ae, resolution: Pe });
    }
    function Oe() {
      oe.value = "pull_preview";
    }
    async function Me() {
      oe.value = "validating", I.value = null;
      try {
        const Ae = Array.from(He.value.values());
        Ke.value = await y(te.value, Ae), oe.value = "validation_review";
      } catch (Ae) {
        I.value = Ae instanceof Error ? Ae.message : "Validation failed", oe.value = "resolving";
      }
    }
    async function Ie() {
      oe.value = "executing";
      const Ae = te.value;
      try {
        const Pe = Array.from(He.value.values()), B = await m(Ae, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Pe
        });
        if (B.rolled_back) {
          Se.value = `Pull failed and was rolled back: ${B.error || "Unknown error"}`, oe.value = "pull_preview";
          return;
        }
        ve(), oe.value = "idle", o("toast", `✓ Pulled from ${Ae}`, "success"), await Y();
      } catch (Pe) {
        Se.value = Pe instanceof Error ? Pe.message : "Pull failed", oe.value = "validation_review";
      }
    }
    function Ge() {
      oe.value = "resolving";
    }
    function ze() {
      ve(), oe.value = "idle";
    }
    function ve() {
      He.value.clear(), Ke.value = null, I.value = null, Se.value = null, Z.value = null, te.value = null;
    }
    async function Q(Ae) {
      te.value = Ae, Re.value = !0, q.value = !0, Fe.value = null, H.value = null;
      try {
        Fe.value = await p(Ae);
      } catch (Pe) {
        H.value = Pe instanceof Error ? Pe.message : "Failed to load push preview";
      } finally {
        q.value = !1;
      }
    }
    function Be() {
      Re.value = !1, Fe.value = null, H.value = null, te.value = null;
    }
    async function be(Ae) {
      var B;
      if (!te.value) return;
      Ce.value = !0;
      const Pe = te.value;
      H.value = null;
      try {
        await w(Pe, Ae), Be(), o("toast", `✓ Pushed to ${Pe}`, "success"), await Y();
      } catch (ue) {
        const ae = ue instanceof Error ? ue.message : "Push failed";
        H.value = ae, ue instanceof Hr && ue.status === 409 && ((B = ue.data) != null && B.needs_force) && Fe.value ? Fe.value = {
          ...Fe.value,
          remote_has_new_commits: !0,
          needs_force: !0,
          can_push: !0,
          block_reason: null
        } : o("toast", ae, "error");
      } finally {
        Ce.value = !1;
      }
    }
    function Ye() {
      const Ae = te.value;
      Be(), Ae && W(Ae);
    }
    return rt(Y), (Ae, Pe) => (a(), i(j, null, [
      k(Ot, null, Yt({
        content: g(() => [
          S.value ? (a(), R($s, {
            key: 0,
            message: "Loading remotes..."
          })) : N.value ? (a(), R(Cs, {
            key: 1,
            message: N.value,
            retry: !0,
            onRetry: Y
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            e.embedded && !O.value ? (a(), i("div", ZS, [
              s("div", e4, [
                k(lo, {
                  modelValue: M.value,
                  "onUpdate:modelValue": Pe[2] || (Pe[2] = (B) => M.value = B),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              k(Ee, {
                variant: "primary",
                size: "sm",
                onClick: ee
              }, {
                default: g(() => [...Pe[5] || (Pe[5] = [
                  $(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : h("", !0),
            O.value ? (a(), R(V5, {
              key: 1,
              mode: J.value,
              "remote-name": P.value.name,
              "fetch-url": P.value.fetchUrl,
              "push-url": P.value.pushUrl,
              onSubmit: he,
              onCancel: ne
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : h("", !0),
            _.value.length && !O.value ? (a(), R(mn, {
              key: 2,
              variant: "compact"
            }, {
              default: g(() => [
                $(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (a(), i("span", t4, " • Tracking: " + f(x.value.remote) + "/" + f(x.value.branch), 1)) : h("", !0)
              ]),
              _: 1
            })) : h("", !0),
            F.value.length && !O.value ? (a(), R(xt, {
              key: 3,
              title: "REMOTES",
              count: F.value.length
            }, {
              default: g(() => [
                (a(!0), i(j, null, we(F.value, (B) => (a(), R(I5, {
                  key: B.name,
                  remote: B,
                  "sync-status": C.value[B.name],
                  "fetching-remote": L.value,
                  onFetch: K,
                  onEdit: ce,
                  onRemove: le,
                  onPull: W,
                  onPush: Q
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !F.value.length && !O.value ? (a(), R(ls, {
              key: 4,
              icon: "🌐",
              message: M.value ? `No remotes match '${M.value}'` : "No remotes configured."
            }, {
              actions: g(() => [
                k(Ee, {
                  variant: "primary",
                  onClick: ee
                }, {
                  default: g(() => [...Pe[6] || (Pe[6] = [
                    $(" Add Your First Remote ", -1)
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
              onInfoClick: Pe[0] || (Pe[0] = (B) => T.value = !0)
            }, {
              actions: g(() => [
                O.value ? h("", !0) : (a(), R(Ee, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: ee
                }, {
                  default: g(() => [...Pe[4] || (Pe[4] = [
                    $(" + Add Remote ", -1)
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
            O.value ? h("", !0) : (a(), R(lo, {
              key: 0,
              modelValue: M.value,
              "onUpdate:modelValue": Pe[1] || (Pe[1] = (B) => M.value = B),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      k(is, {
        show: T.value,
        title: "About Git Remotes",
        onClose: Pe[3] || (Pe[3] = (B) => T.value = !1)
      }, {
        content: g(() => [...Pe[7] || (Pe[7] = [
          s("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          s("p", null, [
            $(" The "),
            s("strong", null, '"origin"'),
            $(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: g(() => [
          k(Ee, {
            variant: "link",
            onClick: Le
          }, {
            default: g(() => [...Pe[8] || (Pe[8] = [
              $(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k(E8, {
        show: pe.value,
        "remote-name": te.value || "",
        preview: Z.value,
        loading: q.value,
        pulling: oe.value === "executing",
        error: Se.value,
        "conflict-resolutions": He.value,
        onClose: ge,
        onPull: ke,
        onOpenConflictResolution: _e
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      k(eS, {
        show: Re.value,
        "remote-name": te.value || "",
        preview: Fe.value,
        loading: q.value,
        pushing: Ce.value,
        error: H.value,
        onClose: Be,
        onPush: be,
        onPullFirst: Ye
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      A.value && E.value ? (a(), R(PS, {
        key: 0,
        "workflow-conflicts": E.value.workflow_conflicts,
        resolutions: He.value,
        "operation-type": "pull",
        validating: oe.value === "validating",
        error: I.value,
        onClose: Oe,
        onResolve: De,
        onApply: Me
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : h("", !0),
      fe.value && Ke.value ? (a(), R(XS, {
        key: 1,
        validation: Ke.value,
        "operation-type": "pull",
        executing: oe.value === "executing",
        onProceed: Ie,
        onGoBack: Ge,
        onCancel: ze
      }, null, 8, ["validation", "executing"])) : h("", !0)
    ], 64));
  }
}), o4 = /* @__PURE__ */ xe(s4, [["__scopeId", "data-v-e03090a2"]]), n4 = /* @__PURE__ */ $e({
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
    ], r = b(o.initialTab ?? "history");
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
        r.value === "history" ? (a(), R(F3, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: u[1] || (u[1] = (d) => n("select", d)),
          onCheckout: u[2] || (u[2] = (d) => n("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (a(), R(u5, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: u[3] || (u[3] = (d) => n("switch", d)),
          onCreate: u[4] || (u[4] = (d) => n("create", d)),
          onDelete: u[5] || (u[5] = (d) => n("delete", d))
        }, null, 8, ["branches", "current"])) : (a(), R(o4, {
          key: 2,
          embedded: "",
          onToast: u[6] || (u[6] = (d, v) => n("toast", d, v))
        }))
      ]),
      _: 1
    }));
  }
});
async function rc(e) {
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
const a4 = { class: "text-viewer-wrapper" }, l4 = ["disabled", "title"], i4 = { class: "text-content" }, r4 = /* @__PURE__ */ $e({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const t = e, o = b(null), n = b("idle");
    async function l() {
      if (t.content)
        try {
          await rc(t.content), n.value = "copied", setTimeout(() => {
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
    return (u, d) => (a(), i("div", a4, [
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
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, l4),
        s("pre", i4, f(e.content), 1)
      ], 544)
    ]));
  }
}), c4 = /* @__PURE__ */ xe(r4, [["__scopeId", "data-v-85a537ba"]]), u4 = {
  key: 1,
  class: "manifest-viewer-shell"
}, d4 = { class: "manifest-path" }, f4 = /* @__PURE__ */ $e({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: t } = pt(), o = b(!1), n = b(null), l = b(!1), r = b({
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
    return rt(c), (u, d) => (a(), i(j, null, [
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
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            !r.value.exists || !r.value.content ? (a(), R(ls, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (a(), i("div", u4, [
              k(c4, {
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
                k(Ee, {
                  variant: "secondary",
                  size: "sm",
                  onClick: c,
                  disabled: o.value
                }, {
                  default: g(() => [
                    $(f(o.value ? "Loading..." : "Refresh"), 1)
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
            $(" This view shows the live "),
            s("strong", null, "pyproject.toml"),
            $(" from the current environment's "),
            s("strong", null, ".cec"),
            $(" directory. ")
          ], -1)),
          d[4] || (d[4] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " It is read-only and intended for quick inspection and debugging without leaving the ComfyGit panel. ", -1)),
          d[5] || (d[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Path: ", -1)),
          s("div", d4, [
            s("code", null, f(r.value.path || "unknown"), 1)
          ]),
          d[6] || (d[6] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, null, -1))
        ]),
        actions: g(() => [
          k(Ee, {
            variant: "primary",
            onClick: d[1] || (d[1] = (v) => l.value = !1)
          }, {
            default: g(() => [...d[7] || (d[7] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), m4 = /* @__PURE__ */ xe(f4, [["__scopeId", "data-v-814a8fdd"]]), v4 = { class: "log-viewer-wrapper" }, p4 = ["disabled", "title"], g4 = /* @__PURE__ */ $e({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const t = e, o = b(null), n = b("idle"), l = D(() => t.logs.map((v) => ({
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
        await rc(v), n.value = "copied", setTimeout(() => {
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
    return (v, m) => (a(), i("div", v4, [
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
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, p4),
        (a(!0), i(j, null, we(l.value, (p, w) => (a(), i("div", {
          key: w,
          class: Ue(`log-line log-level-${p.level.toLowerCase()}`)
        }, f(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), cc = /* @__PURE__ */ xe(g4, [["__scopeId", "data-v-5aaf1b88"]]), h4 = /* @__PURE__ */ $e({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: t, getStatus: o, getEnvironmentLogPath: n, openFile: l } = pt(), r = b([]), c = b(!1), u = b(null), d = b(!1), v = b("production"), m = b(null), p = b(!1);
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
    }), (x, C) => (a(), i(j, null, [
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
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            r.value.length === 0 ? (a(), R(ls, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), R(cc, {
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
              onInfoClick: C[0] || (C[0] = (S) => d.value = !0)
            }, {
              actions: g(() => [
                k(Ee, {
                  variant: "secondary",
                  size: "sm",
                  onClick: _,
                  disabled: !m.value || p.value,
                  title: "Open log file in default editor"
                }, {
                  default: g(() => [
                    $(f(p.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                k(Ee, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w,
                  disabled: c.value
                }, {
                  default: g(() => [
                    $(f(c.value ? "Loading..." : "Refresh"), 1)
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
        onClose: C[2] || (C[2] = (S) => d.value = !1)
      }, {
        content: g(() => [
          s("p", null, [
            C[3] || (C[3] = $(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            s("strong", null, f(v.value), 1),
            C[4] || (C[4] = $(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          C[5] || (C[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            $(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            $(" Potential issues or important notices"),
            s("br"),
            s("strong", null, "INFO:"),
            $(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            $(" Detailed debugging information ")
          ], -1))
        ]),
        actions: g(() => [
          k(Ee, {
            variant: "primary",
            onClick: C[1] || (C[1] = (S) => d.value = !1)
          }, {
            default: g(() => [...C[6] || (C[6] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ki = /* @__PURE__ */ $e({
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
    } = pt(), c = e, u = b(c.initialTab ?? "workspace"), d = b([]), v = b(!1), m = b(null), p = b(!1), w = b(null), y = b(null), _ = b(!1), x = D(() => u.value === "workspace" ? w.value : y.value);
    async function C() {
      v.value = !0, m.value = null;
      try {
        u.value === "workspace" ? d.value = await t(void 0, 500) : d.value = await n(void 0, 500);
      } catch (M) {
        m.value = M instanceof Error ? M.message : `Failed to load ${u.value} logs`;
      } finally {
        v.value = !1;
      }
    }
    async function S() {
      try {
        const [M, T] = await Promise.all([
          o(),
          l()
        ]);
        M.exists && (w.value = M.path), T.exists && (y.value = T.path);
      } catch {
      }
    }
    async function N() {
      if (x.value) {
        _.value = !0;
        try {
          await r(x.value);
        } catch (M) {
          console.error("Failed to open log file:", M);
        } finally {
          _.value = !1;
        }
      }
    }
    return kt(u, () => {
      C();
    }), kt(() => c.initialTab, (M) => {
      M && (u.value = M);
    }), rt(() => {
      C(), S();
    }), (M, T) => (a(), i(j, null, [
      k(Ot, null, Yt({
        content: g(() => [
          v.value ? (a(), R($s, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : m.value ? (a(), R(Cs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (a(), i(j, { key: 2 }, [
            d.value.length === 0 ? (a(), R(ls, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (a(), R(cc, {
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
              onInfoClick: T[0] || (T[0] = (L) => p.value = !0)
            }, {
              actions: g(() => [
                k(Ee, {
                  variant: "secondary",
                  size: "sm",
                  onClick: N,
                  disabled: !x.value || _.value,
                  title: "Open log file in default editor"
                }, {
                  default: g(() => [
                    $(f(_.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                k(Ee, {
                  variant: "secondary",
                  size: "sm",
                  onClick: C,
                  disabled: v.value
                }, {
                  default: g(() => [
                    $(f(v.value ? "Loading..." : "Refresh"), 1)
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
              "onUpdate:modelValue": T[1] || (T[1] = (L) => u.value = L),
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
        onClose: T[3] || (T[3] = (L) => p.value = !1)
      }, {
        content: g(() => [...T[4] || (T[4] = [
          s("p", null, [
            s("strong", null, "Workspace Logs:"),
            $(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Orchestrator Logs:"),
            $(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            $(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            $(" Potential issues or deprecated features"),
            s("br"),
            s("strong", null, "INFO:"),
            $(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            $(" Detailed debugging information ")
          ], -1)
        ])]),
        actions: g(() => [
          k(Ee, {
            variant: "primary",
            onClick: T[2] || (T[2] = (L) => p.value = !1)
          }, {
            default: g(() => [...T[5] || (T[5] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), y4 = /* @__PURE__ */ $e({
  __name: "DiagnosticsSection",
  props: {
    initialTab: {}
  },
  setup(e) {
    const t = e, o = [
      { id: "env", label: "Environment" },
      { id: "workspace", label: "Workspace" },
      { id: "orchestrator", label: "Orchestrator" }
    ], n = b(t.initialTab ?? "manifest"), l = b(
      t.initialTab && t.initialTab !== "manifest" ? t.initialTab : "env"
    ), r = b(!1), c = D(() => n.value === "manifest" ? "MANIFEST" : "LOGGING"), u = D(() => n.value === "manifest" ? "About Manifest" : "About Logging");
    return kt(() => t.initialTab, (d) => {
      d && (n.value = d, d !== "manifest" && (l.value = d));
    }), kt(l, (d) => {
      n.value !== "manifest" && (n.value = d);
    }), (d, v) => (a(), i(j, null, [
      k(Ot, null, Yt({
        header: g(() => [
          k(At, {
            title: c.value,
            "show-info": !0,
            onInfoClick: v[0] || (v[0] = (m) => r.value = !0)
          }, null, 8, ["title"])
        ]),
        content: g(() => [
          n.value === "manifest" ? (a(), R(m4, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (a(), R(h4, {
            key: 1,
            embedded: ""
          })) : l.value === "workspace" ? (a(), R(ki, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (a(), R(ki, {
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
          n.value === "manifest" ? (a(), i(j, { key: 0 }, [
            v[4] || (v[4] = s("p", null, [
              s("strong", null, "Manifest"),
              $(" shows the live "),
              s("strong", null, "pyproject.toml"),
              $(" from the current environment's "),
              s("strong", null, ".cec"),
              $(" directory. ")
            ], -1)),
            v[5] || (v[5] = s("p", null, " Use it to inspect the environment state ComfyGit is tracking, including workflows, models, nodes, and workflow execution contracts. ", -1)),
            v[6] || (v[6] = s("p", null, " The manifest is read-only here. Change environment state through the manager actions or CLI, then commit the resulting manifest changes. ", -1))
          ], 64)) : (a(), i(j, { key: 1 }, [
            v[7] || (v[7] = s("p", null, [
              s("strong", null, "Logging"),
              $(" groups read-only logs for the current environment, workspace, and orchestrator. ")
            ], -1)),
            v[8] || (v[8] = s("p", null, [
              s("strong", null, "Environment"),
              $(" logs help debug workflow execution, model resolution, node installation, and other environment-local behavior. ")
            ], -1)),
            v[9] || (v[9] = s("p", null, [
              s("strong", null, "Workspace"),
              $(" logs show workspace-wide events that affect more than one environment. ")
            ], -1)),
            v[10] || (v[10] = s("p", null, [
              s("strong", null, "Orchestrator"),
              $(" logs show supervisor and handoff behavior for environment creation, switching, restarts, and process management. ")
            ], -1))
          ], 64))
        ]),
        actions: g(() => [
          k(Ee, {
            variant: "primary",
            size: "sm",
            onClick: v[2] || (v[2] = (m) => r.value = !1)
          }, {
            default: g(() => [...v[11] || (v[11] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show", "title"])
    ], 64));
  }
}), w4 = { class: "header-info" }, _4 = { class: "commit-hash" }, k4 = {
  key: 0,
  class: "commit-refs"
}, b4 = { class: "commit-message" }, $4 = { class: "commit-date" }, C4 = {
  key: 0,
  class: "loading"
}, x4 = {
  key: 1,
  class: "changes-section"
}, S4 = { class: "stats-row" }, I4 = { class: "stat" }, E4 = { class: "stat insertions" }, T4 = { class: "stat deletions" }, M4 = {
  key: 0,
  class: "change-group"
}, P4 = {
  key: 1,
  class: "change-group"
}, R4 = {
  key: 0,
  class: "version"
}, N4 = {
  key: 2,
  class: "change-group"
}, L4 = { class: "change-item" }, D4 = /* @__PURE__ */ $e({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const t = e, { getCommitDetail: o } = pt(), n = b(null), l = b(!0), r = D(() => {
      if (!n.value) return !1;
      const u = n.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = D(() => {
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
    }), (u, d) => (a(), R(St, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => u.$emit("close"))
    }, {
      header: g(() => {
        var v, m, p, w;
        return [
          s("div", w4, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", _4, f(((v = n.value) == null ? void 0 : v.short_hash) || e.commit.short_hash || ((m = e.commit.hash) == null ? void 0 : m.slice(0, 7))), 1),
            (w = (p = n.value) == null ? void 0 : p.refs) != null && w.length ? (a(), i("span", k4, [
              (a(!0), i(j, null, we(n.value.refs, (y) => (a(), i("span", {
                key: y,
                class: "ref-badge"
              }, f(y), 1))), 128))
            ])) : h("", !0)
          ]),
          k(Ne, {
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
          s("div", b4, f(((v = n.value) == null ? void 0 : v.message) || e.commit.message), 1),
          s("div", $4, f(((m = n.value) == null ? void 0 : m.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), i("div", C4, "Loading details...")) : n.value ? (a(), i("div", x4, [
            s("div", S4, [
              s("span", I4, f(n.value.stats.files_changed) + " files", 1),
              s("span", E4, "+" + f(n.value.stats.insertions), 1),
              s("span", T4, "-" + f(n.value.stats.deletions), 1)
            ]),
            r.value ? (a(), i("div", M4, [
              k(oo, { variant: "section" }, {
                default: g(() => [...d[6] || (d[6] = [
                  $("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), i(j, null, we(n.value.changes.workflows.added, (p) => (a(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, f(p), 1)
              ]))), 128)),
              (a(!0), i(j, null, we(n.value.changes.workflows.modified, (p) => (a(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, f(p), 1)
              ]))), 128)),
              (a(!0), i(j, null, we(n.value.changes.workflows.deleted, (p) => (a(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, f(p), 1)
              ]))), 128))
            ])) : h("", !0),
            c.value ? (a(), i("div", P4, [
              k(oo, { variant: "section" }, {
                default: g(() => [...d[10] || (d[10] = [
                  $("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), i(j, null, we(n.value.changes.nodes.added, (p) => (a(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, f(p.name), 1),
                p.version ? (a(), i("span", R4, "(" + f(p.version) + ")", 1)) : h("", !0)
              ]))), 128)),
              (a(!0), i(j, null, we(n.value.changes.nodes.removed, (p) => (a(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, f(p.name), 1)
              ]))), 128))
            ])) : h("", !0),
            n.value.changes.models.resolved > 0 ? (a(), i("div", N4, [
              k(oo, { variant: "section" }, {
                default: g(() => [...d[13] || (d[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", L4, [
                d[14] || (d[14] = s("span", { class: "change-icon" }, "●", -1)),
                s("span", null, f(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : h("", !0)
          ])) : h("", !0)
        ];
      }),
      footer: g(() => [
        k(Ne, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (v) => u.$emit("createBranch", e.commit))
        }, {
          default: g(() => [...d[15] || (d[15] = [
            $(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        k(Ne, {
          variant: "primary",
          onClick: d[2] || (d[2] = (v) => u.$emit("checkout", e.commit))
        }, {
          default: g(() => [...d[16] || (d[16] = [
            $(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), O4 = /* @__PURE__ */ xe(D4, [["__scopeId", "data-v-d256ff6d"]]), A4 = { class: "popover-header" }, U4 = { class: "popover-body" }, z4 = {
  key: 0,
  class: "changes-summary"
}, V4 = {
  key: 0,
  class: "change-item"
}, F4 = {
  key: 1,
  class: "change-item"
}, B4 = {
  key: 2,
  class: "change-item"
}, W4 = {
  key: 3,
  class: "change-item"
}, G4 = {
  key: 4,
  class: "change-item"
}, j4 = {
  key: 5,
  class: "change-item"
}, H4 = {
  key: 1,
  class: "no-changes"
}, q4 = {
  key: 2,
  class: "loading"
}, K4 = {
  key: 3,
  class: "issues-error"
}, J4 = { class: "error-header" }, Q4 = { class: "error-title" }, Y4 = { class: "issues-list" }, X4 = { class: "workflow-state" }, Z4 = { class: "message-section" }, eI = { class: "popover-footer" }, tI = {
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
}, vI = { class: "error-header" }, pI = { class: "error-title" }, gI = { class: "issues-list" }, hI = { class: "workflow-state" }, yI = { class: "message-section" }, wI = { class: "popover-footer" }, _I = /* @__PURE__ */ $e({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { commit: l } = pt(), r = b(""), c = b(!1), u = b(!1), d = D(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), v = D(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, x = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || x.nodes_added.length > 0 || x.nodes_removed.length > 0;
    }), m = D(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((x) => x.has_issues) : [];
    }), p = D(() => m.value.length > 0), w = D(() => p.value && !u.value);
    async function y() {
      var _, x, C, S;
      if (!(p.value && !u.value) && !(!d.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const N = await l(r.value.trim(), u.value);
          if (N.status === "success") {
            const M = `Committed: ${((_ = N.summary) == null ? void 0 : _.new) || 0} new, ${((x = N.summary) == null ? void 0 : x.modified) || 0} modified, ${((C = N.summary) == null ? void 0 : C.deleted) || 0} deleted`;
            n("committed", { success: !0, message: M });
          } else if (N.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (N.status === "blocked") {
            const M = ((S = N.issues) == null ? void 0 : S.map((T) => `${T.name}: ${T.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${M}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: N.message || "Commit failed" });
        } catch (N) {
          n("committed", { success: !1, message: N instanceof Error ? N.message : "Commit failed" });
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
        onClick: x[5] || (x[5] = (C) => n("close"))
      }, [
        s("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = mt(() => {
          }, ["stop"]))
        }, [
          s("div", A4, [
            x[11] || (x[11] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            s("button", {
              class: "close-btn",
              onClick: x[0] || (x[0] = (C) => n("close"))
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
          s("div", U4, [
            e.status && d.value ? (a(), i("div", z4, [
              e.status.workflows.new.length ? (a(), i("div", V4, [
                x[12] || (x[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : h("", !0),
              e.status.workflows.modified.length ? (a(), i("div", F4, [
                x[13] || (x[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : h("", !0),
              e.status.workflows.deleted.length ? (a(), i("div", B4, [
                x[14] || (x[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : h("", !0),
              e.status.git_changes.nodes_added.length ? (a(), i("div", W4, [
                x[15] || (x[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : h("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), i("div", G4, [
                x[16] || (x[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : h("", !0),
              v.value ? h("", !0) : (a(), i("div", j4, [...x[17] || (x[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), i("div", H4, " No changes to commit ")) : (a(), i("div", q4, " Loading... ")),
            p.value ? (a(), i("div", K4, [
              s("div", J4, [
                x[18] || (x[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", Q4, f(m.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", Y4, [
                (a(!0), i(j, null, we(m.value, (C) => (a(), i("div", {
                  key: C.name,
                  class: "issue-item"
                }, [
                  s("strong", null, f(C.name), 1),
                  s("span", X4, "(" + f(C.sync_state) + ")", 1),
                  $(": " + f(C.issue_summary), 1)
                ]))), 128))
              ]),
              k(qn, {
                modelValue: u.value,
                "onUpdate:modelValue": x[1] || (x[1] = (C) => u.value = C),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...x[19] || (x[19] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : h("", !0),
            s("div", Z4, [
              k(Co, {
                modelValue: r.value,
                "onUpdate:modelValue": x[2] || (x[2] = (C) => r.value = C),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: y,
                onSubmit: y
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          s("div", eI, [
            k(Ne, {
              variant: "secondary",
              onClick: x[3] || (x[3] = (C) => n("close"))
            }, {
              default: g(() => [...x[20] || (x[20] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(Ne, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !r.value.trim() || c.value || w.value,
              loading: c.value,
              onClick: y
            }, {
              default: g(() => [
                $(f(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (a(), i("div", tI, [
      s("div", sI, [
        x[22] || (x[22] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        s("button", {
          class: "close-btn",
          onClick: x[6] || (x[6] = (C) => n("close"))
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
      s("div", oI, [
        e.status && d.value ? (a(), i("div", nI, [
          e.status.workflows.new.length ? (a(), i("div", aI, [
            x[23] || (x[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : h("", !0),
          e.status.workflows.modified.length ? (a(), i("div", lI, [
            x[24] || (x[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : h("", !0),
          e.status.workflows.deleted.length ? (a(), i("div", iI, [
            x[25] || (x[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : h("", !0),
          e.status.git_changes.nodes_added.length ? (a(), i("div", rI, [
            x[26] || (x[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : h("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), i("div", cI, [
            x[27] || (x[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : h("", !0),
          v.value ? h("", !0) : (a(), i("div", uI, [...x[28] || (x[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), i("div", dI, " No changes to commit ")) : (a(), i("div", fI, " Loading... ")),
        p.value ? (a(), i("div", mI, [
          s("div", vI, [
            x[29] || (x[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", pI, f(m.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", gI, [
            (a(!0), i(j, null, we(m.value, (C) => (a(), i("div", {
              key: C.name,
              class: "issue-item"
            }, [
              s("strong", null, f(C.name), 1),
              s("span", hI, "(" + f(C.sync_state) + ")", 1),
              $(": " + f(C.issue_summary), 1)
            ]))), 128))
          ]),
          k(qn, {
            modelValue: u.value,
            "onUpdate:modelValue": x[7] || (x[7] = (C) => u.value = C),
            class: "allow-issues-toggle"
          }, {
            default: g(() => [...x[30] || (x[30] = [
              $(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : h("", !0),
        s("div", yI, [
          k(Co, {
            modelValue: r.value,
            "onUpdate:modelValue": x[8] || (x[8] = (C) => r.value = C),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: y,
            onSubmit: y
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      s("div", wI, [
        k(Ne, {
          variant: "secondary",
          onClick: x[9] || (x[9] = (C) => n("close"))
        }, {
          default: g(() => [...x[31] || (x[31] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k(Ne, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !r.value.trim() || c.value || w.value,
          loading: c.value,
          onClick: y
        }, {
          default: g(() => [
            $(f(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), uc = /* @__PURE__ */ xe(_I, [["__scopeId", "data-v-5f897631"]]), kI = { class: "modal-header" }, bI = { class: "modal-body" }, $I = { class: "switch-message" }, CI = { class: "switch-details" }, xI = { class: "modal-actions" }, SI = /* @__PURE__ */ $e({
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
          onClick: o[3] || (o[3] = mt(() => {
          }, ["stop"]))
        }, [
          s("div", kI, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", bI, [
            s("p", $I, [
              o[6] || (o[6] = $(" Switch from ", -1)),
              s("strong", null, f(e.fromEnvironment), 1),
              o[7] || (o[7] = $(" to ", -1)),
              s("strong", null, f(e.toEnvironment), 1),
              o[8] || (o[8] = $("? ", -1))
            ]),
            o[9] || (o[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This will restart ComfyUI")
            ], -1)),
            s("p", CI, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = s("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          s("div", xI, [
            k(Ee, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => t.$emit("close"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(Ee, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
            }, {
              default: g(() => [...o[12] || (o[12] = [
                $(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), II = /* @__PURE__ */ xe(SI, [["__scopeId", "data-v-e9c5253e"]]), EI = {
  key: 0,
  class: "modal-overlay"
}, TI = { class: "modal-content" }, MI = { class: "modal-body" }, PI = { class: "progress-info" }, RI = { class: "progress-percentage" }, NI = { class: "progress-state" }, LI = { class: "switch-steps" }, DI = { class: "step-icon" }, OI = { class: "step-label" }, AI = /* @__PURE__ */ $e({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const t = e, o = D(() => {
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
    }), n = D(() => t.state === "complete" ? "success" : t.state === "critical_failure" || t.state === "rolled_back" ? "error" : "default"), l = D(() => {
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
      e.show ? (a(), i("div", EI, [
        s("div", TI, [
          c[1] || (c[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", MI, [
            k(sc, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            s("div", PI, [
              s("div", RI, f(e.progress) + "%", 1),
              s("div", NI, f(o.value), 1)
            ]),
            s("div", LI, [
              (a(!0), i(j, null, we(l.value, (u) => (a(), i("div", {
                key: u.state,
                class: Ue(["switch-step", u.status])
              }, [
                s("span", DI, f(u.icon), 1),
                s("span", OI, f(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), UI = /* @__PURE__ */ xe(AI, [["__scopeId", "data-v-768a5078"]]), zI = { class: "modal-header" }, VI = { class: "modal-body" }, FI = {
  key: 0,
  class: "node-section"
}, BI = { class: "node-list" }, WI = {
  key: 1,
  class: "node-section"
}, GI = { class: "node-list" }, jI = { class: "modal-actions" }, HI = /* @__PURE__ */ $e({
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
          onClick: o[3] || (o[3] = mt(() => {
          }, ["stop"]))
        }, [
          s("div", zI, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", VI, [
            o[8] || (o[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), i("div", FI, [
              o[6] || (o[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", BI, [
                (a(!0), i(j, null, we(e.mismatchDetails.missing_nodes, (n) => (a(), i("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : h("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), i("div", WI, [
              o[7] || (o[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", GI, [
                (a(!0), i(j, null, we(e.mismatchDetails.extra_nodes, (n) => (a(), i("div", {
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
          s("div", jI, [
            k(Ee, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => t.$emit("close"))
            }, {
              default: g(() => [...o[10] || (o[10] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(Ee, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                $(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), qI = /* @__PURE__ */ xe(HI, [["__scopeId", "data-v-7cad7518"]]), KI = [
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
], Cn = "v0.0.24", JI = "Akatz", QI = { class: "social-buttons" }, YI = ["title", "aria-label", "onClick"], XI = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ZI = ["d"], e6 = ["title", "aria-label", "onClick"], t6 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, s6 = ["d"], o6 = /* @__PURE__ */ $e({
  __name: "SocialButtons",
  setup(e) {
    function t(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), i("div", QI, [
      (a(!0), i(j, null, we(st(KI), (l) => (a(), i(j, {
        key: l.id
      }, [
        l.label ? (a(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          $(f(l.label) + " ", 1),
          (a(), i("svg", XI, [
            s("path", {
              d: l.iconPath
            }, null, 8, ZI)
          ]))
        ], 8, YI)) : (a(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (a(), i("svg", t6, [
            s("path", {
              d: l.iconPath
            }, null, 8, s6)
          ]))
        ], 8, e6))
      ], 64))), 128))
    ]));
  }
}), dc = /* @__PURE__ */ xe(o6, [["__scopeId", "data-v-4f846342"]]), n6 = { class: "footer-info" }, a6 = ["title"], l6 = {
  key: 0,
  class: "dev-badge"
}, i6 = { class: "made-by" }, r6 = /* @__PURE__ */ $e({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: t } = pt(), o = b(null), n = b(null), l = b(null), r = D(() => o.value === "development"), c = D(() => {
      var d;
      if (!r.value) return Cn;
      const u = [n.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return u ? `${Cn} (${u})` : `${Cn} (development)`;
    });
    return rt(async () => {
      try {
        const u = await t();
        o.value = u.manager_source ?? null, n.value = u.manager_branch ?? null, l.value = u.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (u, d) => (a(), i("div", n6, [
      s("span", {
        class: "version",
        title: c.value
      }, [
        $(f(st(Cn)) + " ", 1),
        r.value ? (a(), i("span", l6, "dev")) : h("", !0)
      ], 8, a6),
      s("span", i6, [
        d[0] || (d[0] = $(" made with ", -1)),
        d[1] || (d[1] = s("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          s("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        $(" by " + f(st(JI)), 1)
      ])
    ]));
  }
}), fc = /* @__PURE__ */ xe(r6, [["__scopeId", "data-v-4fa265b3"]]), c6 = /* @__PURE__ */ $e({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = b(null);
    async function n() {
      var r;
      await ((r = o.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, c) => (a(), R(St, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => r.$emit("close"))
    }, {
      body: g(() => [
        k(Xr, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: g(() => {
        var u;
        return [
          k(Ne, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: n
          }, {
            default: g(() => [...c[2] || (c[2] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(Ne, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (d) => r.$emit("close"))
          }, {
            default: g(() => [...c[3] || (c[3] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), u6 = /* @__PURE__ */ xe(c6, [["__scopeId", "data-v-fac00ae7"]]), d6 = { class: "header-actions" }, f6 = {
  key: 0,
  class: "wizard-step"
}, m6 = { class: "form-field" }, v6 = ["placeholder"], p6 = {
  key: 0,
  class: "form-error"
}, g6 = { class: "form-field form-field--checkbox" }, h6 = { class: "form-checkbox" }, y6 = {
  key: 0,
  class: "form-field"
}, w6 = ["placeholder"], _6 = {
  key: 0,
  class: "form-info"
}, k6 = {
  key: 1,
  class: "form-suggestion"
}, b6 = {
  key: 2,
  class: "form-error"
}, $6 = {
  key: 3,
  class: "form-info"
}, C6 = {
  key: 1,
  class: "wizard-step"
}, x6 = {
  key: 0,
  class: "progress-check-loading"
}, S6 = {
  key: 0,
  class: "cli-warning"
}, I6 = { class: "cli-warning-header" }, E6 = {
  key: 1,
  class: "env-landing"
}, T6 = { class: "env-list" }, M6 = ["value"], P6 = { class: "env-name" }, R6 = {
  key: 2,
  class: "env-create"
}, N6 = { class: "form-field" }, L6 = { class: "form-field" }, D6 = ["value"], O6 = { class: "form-field" }, A6 = ["disabled"], U6 = ["value"], z6 = { class: "form-field" }, V6 = ["value"], F6 = { class: "form-field form-field--checkbox" }, B6 = { class: "form-checkbox" }, W6 = {
  key: 0,
  class: "form-error"
}, G6 = {
  key: 1,
  class: "env-creating"
}, j6 = { class: "creating-intro" }, H6 = {
  key: 3,
  class: "env-import"
}, q6 = { class: "wizard-footer" }, K6 = { class: "wizard-footer-actions" }, mo = 10, J6 = 600 * 1e3, bi = 1800 * 1e3, Q6 = /* @__PURE__ */ $e({
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
    } = pt(), p = b(o.initialStep || 1), w = b(null), y = b("landing"), _ = b(!1), x = b(!1), C = b(!1), S = b(!1), N = b(null), M = b(o.initialStep === 2), T = b(o.defaultPath), L = b(!!o.detectedModelsDir), O = b(o.detectedModelsDir || ""), J = b(null), P = b(null), F = b(null), Y = b(null), ee = b("my-new-env"), ce = b(ec), he = b("latest"), ne = b(tc), K = b(!0), le = b(null), Le = b(null), oe = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), pe = b(!1), A = b(!1), fe = b(!1), Re = b({ progress: 0, message: "" }), Fe = b({ progress: 0, message: "" }), Ce = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], H = b(0), te = b(null), q = b(0), Z = b(null), Se = D(() => {
      var be, Ye;
      const ve = (be = T.value) == null ? void 0 : be.trim(), Q = !J.value, Be = !L.value || !P.value && ((Ye = O.value) == null ? void 0 : Ye.trim());
      return ve && Q && Be;
    }), He = D(() => {
      var ve;
      return (ve = ee.value) == null ? void 0 : ve.trim();
    }), Ke = D(() => !!(p.value === 2 || Le.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), I = D(() => Le.value || o.workspacePath || null);
    async function E() {
      var ve;
      if (J.value = null, !!((ve = T.value) != null && ve.trim()))
        try {
          const Q = await c({ path: T.value, type: "workspace" });
          Q.valid || (J.value = Q.error || "Invalid path");
        } catch (Q) {
          J.value = Q instanceof Error ? Q.message : "Validation failed";
        }
    }
    async function W() {
      var ve;
      if (P.value = null, F.value = null, Y.value = null, !!((ve = O.value) != null && ve.trim()))
        try {
          const Q = await c({ path: O.value, type: "models" });
          if (Q.valid)
            Y.value = Q.model_count ?? null;
          else if (P.value = Q.error || "Invalid path", Q.suggestion) {
            F.value = Q.suggestion, O.value = Q.suggestion, P.value = null;
            const Be = await c({ path: Q.suggestion, type: "models" });
            Be.valid && (Y.value = Be.model_count ?? null);
          }
        } catch (Q) {
          P.value = Q instanceof Error ? Q.message : "Validation failed";
        }
    }
    async function ge() {
      var ve, Q, Be, be, Ye;
      if (J.value = null, P.value = null, await E(), (ve = J.value) != null && ve.includes("already exists")) {
        J.value = null, Le.value = ((Q = T.value) == null ? void 0 : Q.trim()) || o.defaultPath, p.value = 2, _e();
        return;
      }
      if (!J.value && !(L.value && ((Be = O.value) != null && Be.trim()) && (await W(), P.value))) {
        A.value = !0;
        try {
          await l({
            workspace_path: ((be = T.value) == null ? void 0 : be.trim()) || o.defaultPath,
            models_directory: L.value && ((Ye = O.value) == null ? void 0 : Ye.trim()) || null
          }), H.value = 0, te.value = Date.now();
          const Ae = setInterval(async () => {
            var Pe;
            if (te.value && Date.now() - te.value > J6) {
              clearInterval(Ae), A.value = !1, J.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const B = await r();
              if (H.value = 0, B.state === "idle" && A.value) {
                clearInterval(Ae), A.value = !1, J.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Re.value = { progress: B.progress, message: B.message }, B.state === "complete" ? (clearInterval(Ae), A.value = !1, Le.value = ((Pe = T.value) == null ? void 0 : Pe.trim()) || o.defaultPath, p.value = 2, _e()) : B.state === "error" && (clearInterval(Ae), A.value = !1, J.value = B.error || "Workspace creation failed");
            } catch (B) {
              H.value++, console.warn(`Polling failure ${H.value}/${mo}:`, B), H.value >= mo && (clearInterval(Ae), A.value = !1, J.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Ae) {
          A.value = !1, J.value = Ae instanceof Error ? Ae.message : "Failed to create workspace";
        }
      }
    }
    async function ke() {
      fe.value = !0, le.value = null;
      try {
        const ve = {
          name: ee.value.trim() || "my-new-env",
          python_version: ce.value,
          comfyui_version: he.value,
          torch_backend: ne.value,
          switch_after: K.value,
          workspace_path: Le.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(ve)).status === "started") {
          q.value = 0, Z.value = Date.now();
          const Be = setInterval(async () => {
            if (Z.value && Date.now() - Z.value > bi) {
              clearInterval(Be), fe.value = !1, le.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const be = await d();
              if (q.value = 0, be.state === "idle" && fe.value) {
                clearInterval(Be), fe.value = !1, le.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Fe.value = {
                progress: be.progress ?? 0,
                message: be.message,
                phase: be.phase
              }, be.state === "complete") {
                clearInterval(Be), fe.value = !1;
                const Ye = be.environment_name || ve.name;
                K.value ? n("complete", Ye, Le.value) : (y.value = "landing", n("environment-created-no-switch", Ye));
              } else be.state === "error" && (clearInterval(Be), fe.value = !1, le.value = be.error || "Environment creation failed");
            } catch (be) {
              q.value++, console.warn(`Polling failure ${q.value}/${mo}:`, be), q.value >= mo && (clearInterval(Be), fe.value = !1, le.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ve) {
        fe.value = !1, le.value = ve instanceof Error ? ve.message : "Unknown error";
      }
    }
    async function _e() {
      pe.value = !0;
      try {
        oe.value = await m();
      } catch (ve) {
        console.error("Failed to load ComfyUI releases:", ve);
      } finally {
        pe.value = !1;
      }
    }
    function De() {
      w.value && n("switch-environment", w.value, Le.value);
    }
    function Oe() {
      y.value === "create" || y.value === "import" ? y.value = "landing" : p.value === 2 && o.setupState === "no_workspace" && (p.value = 1);
    }
    function Me(ve, Q) {
      x.value = !1, Q ? n("complete", ve, Le.value) : (n("environment-created-no-switch", ve), y.value = "landing");
    }
    function Ie() {
    }
    rt(async () => {
      if (o.detectedModelsDir && (O.value = o.detectedModelsDir), o.workspacePath && (Le.value = o.workspacePath), p.value === 2) {
        _e();
        const ve = setTimeout(() => {
          M.value = !1;
        }, 3e3);
        await Ge(), clearTimeout(ve), M.value = !1;
      }
    });
    async function Ge() {
      try {
        const ve = await d();
        if (console.log("[ComfyGit] Create progress check:", ve.state, ve), ve.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ve.environment_name), y.value = "create", fe.value = !0, ee.value = ve.environment_name || "my-new-env", Fe.value = {
            progress: ve.progress ?? 0,
            message: ve.message,
            phase: ve.phase
          }, ze();
          return;
        }
      } catch (ve) {
        console.log("[ComfyGit] Create progress check failed:", ve);
      }
      try {
        const ve = await v();
        console.log("[ComfyGit] Import progress check:", ve.state, ve), ve.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ve.environment_name), N.value = {
          message: ve.message || "Importing...",
          phase: ve.phase || "",
          progress: ve.progress ?? 0,
          environmentName: ve.environment_name || ""
        }, S.value = !0, y.value = "import", x.value = !0);
      } catch (ve) {
        console.log("[ComfyGit] Import progress check failed:", ve);
      }
    }
    async function ze() {
      q.value = 0, Z.value = Date.now();
      let ve = null;
      const Q = async () => {
        if (Z.value && Date.now() - Z.value > bi)
          return ve && clearInterval(ve), fe.value = !1, le.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const be = await d();
          if (q.value = 0, be.state === "idle" && fe.value)
            return ve && clearInterval(ve), fe.value = !1, le.value = "Environment creation was interrupted. Please try again.", !1;
          if (Fe.value = {
            progress: be.progress ?? 0,
            message: be.message,
            phase: be.phase
          }, be.state === "complete") {
            ve && clearInterval(ve), fe.value = !1;
            const Ye = be.environment_name || ee.value;
            return n("complete", Ye, Le.value), !1;
          } else if (be.state === "error")
            return ve && clearInterval(ve), fe.value = !1, le.value = be.error || "Environment creation failed", !1;
          return !0;
        } catch (be) {
          return q.value++, console.warn(`Polling failure ${q.value}/${mo}:`, be), q.value >= mo ? (ve && clearInterval(ve), fe.value = !1, le.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await Q() && (ve = setInterval(async () => {
        !await Q() && ve && clearInterval(ve);
      }, 2e3));
    }
    return (ve, Q) => (a(), i(j, null, [
      k(St, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: Q[15] || (Q[15] = (Be) => ve.$emit("close"))
      }, {
        header: g(() => [
          Q[20] || (Q[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", d6, [
            k(dc),
            Q[19] || (Q[19] = s("span", { class: "header-divider" }, null, -1)),
            Ke.value ? (a(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: Q[0] || (Q[0] = (Be) => _.value = !0)
            }, [...Q[17] || (Q[17] = [
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
              onClick: Q[1] || (Q[1] = (Be) => ve.$emit("close")),
              title: "Close"
            }, [...Q[18] || (Q[18] = [
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
          var Be;
          return [
            p.value === 1 ? (a(), i("div", f6, [
              Q[24] || (Q[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", m6, [
                Q[21] || (Q[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                Tt(s("input", {
                  "onUpdate:modelValue": Q[2] || (Q[2] = (be) => T.value = be),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, v6), [
                  [bo, T.value]
                ]),
                J.value ? (a(), i("p", p6, f(J.value), 1)) : h("", !0)
              ]),
              s("div", g6, [
                s("label", h6, [
                  Tt(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Q[3] || (Q[3] = (be) => L.value = be)
                  }, null, 512), [
                    [Gn, L.value]
                  ]),
                  Q[22] || (Q[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              L.value ? (a(), i("div", y6, [
                Q[23] || (Q[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                Tt(s("input", {
                  "onUpdate:modelValue": Q[4] || (Q[4] = (be) => O.value = be),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, w6), [
                  [bo, O.value]
                ]),
                e.detectedModelsDir && !O.value ? (a(), i("p", _6, " Detected: " + f(e.detectedModelsDir), 1)) : h("", !0),
                F.value ? (a(), i("p", k6, " Did you mean: " + f(F.value), 1)) : h("", !0),
                P.value ? (a(), i("p", b6, f(P.value), 1)) : h("", !0),
                Y.value !== null && !P.value ? (a(), i("p", $6, " Found " + f(Y.value) + " model files ", 1)) : h("", !0)
              ])) : h("", !0),
              A.value ? (a(), R(Hn, {
                key: 1,
                progress: Re.value.progress,
                message: Re.value.message
              }, null, 8, ["progress", "message"])) : h("", !0)
            ])) : h("", !0),
            p.value === 2 ? (a(), i("div", C6, [
              M.value ? (a(), i("div", x6, [...Q[25] || (Q[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), i(j, { key: 1 }, [
                !o.cliInstalled && !C.value ? (a(), i("div", S6, [
                  s("div", I6, [
                    Q[27] || (Q[27] = s("span", { class: "cli-warning-icon" }, "!", -1)),
                    Q[28] || (Q[28] = s("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    s("button", {
                      class: "cli-warning-close",
                      onClick: Q[5] || (Q[5] = (be) => C.value = !0),
                      title: "Dismiss"
                    }, [...Q[26] || (Q[26] = [
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
                  Q[29] || (Q[29] = s("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  Q[30] || (Q[30] = s("div", { class: "cli-warning-commands" }, [
                    s("code", null, "pipx install comfygit"),
                    s("span", { class: "cli-warning-or" }, "or"),
                    s("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : h("", !0),
                y.value === "landing" ? (a(), i("div", E6, [
                  Q[34] || (Q[34] = s("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  s("button", {
                    class: "landing-option",
                    onClick: Q[6] || (Q[6] = (be) => y.value = "create")
                  }, [...Q[31] || (Q[31] = [
                    s("span", { class: "option-icon" }, "➕", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Create New Environment"),
                      s("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  s("button", {
                    class: "landing-option",
                    onClick: Q[7] || (Q[7] = (be) => {
                      S.value = !1, y.value = "import";
                    })
                  }, [...Q[32] || (Q[32] = [
                    s("span", { class: "option-icon" }, "📦", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Import Environment"),
                      s("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Be = o.existingEnvironments) != null && Be.length ? (a(), i(j, { key: 0 }, [
                    Q[33] || (Q[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", T6, [
                      (a(!0), i(j, null, we(o.existingEnvironments, (be) => (a(), i("label", {
                        key: be,
                        class: Ue(["env-option", { selected: w.value === be }])
                      }, [
                        Tt(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: be,
                          "onUpdate:modelValue": Q[8] || (Q[8] = (Ye) => w.value = Ye)
                        }, null, 8, M6), [
                          [Pn, w.value]
                        ]),
                        s("span", P6, f(be), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : h("", !0)
                ])) : y.value === "create" ? (a(), i("div", R6, [
                  fe.value ? (a(), i("div", G6, [
                    s("p", j6, [
                      Q[41] || (Q[41] = $(" Creating environment ", -1)),
                      s("strong", null, f(ee.value), 1),
                      Q[42] || (Q[42] = $("... ", -1))
                    ]),
                    k(Hn, {
                      progress: Fe.value.progress,
                      message: Fe.value.message,
                      "current-phase": Fe.value.phase,
                      "show-steps": !0,
                      steps: Ce
                    }, null, 8, ["progress", "message", "current-phase"]),
                    Q[43] || (Q[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), i(j, { key: 0 }, [
                    Q[40] || (Q[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", N6, [
                      Q[35] || (Q[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      Tt(s("input", {
                        "onUpdate:modelValue": Q[9] || (Q[9] = (be) => ee.value = be),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [bo, ee.value]
                      ])
                    ]),
                    s("div", L6, [
                      Q[36] || (Q[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": Q[10] || (Q[10] = (be) => ce.value = be),
                        class: "form-select"
                      }, [
                        (a(!0), i(j, null, we(st(Zr), (be) => (a(), i("option", {
                          key: be,
                          value: be
                        }, f(be), 9, D6))), 128))
                      ], 512), [
                        [$o, ce.value]
                      ])
                    ]),
                    s("div", O6, [
                      Q[37] || (Q[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": Q[11] || (Q[11] = (be) => he.value = be),
                        class: "form-select",
                        disabled: pe.value
                      }, [
                        (a(!0), i(j, null, we(oe.value, (be) => (a(), i("option", {
                          key: be.tag_name,
                          value: be.tag_name
                        }, f(be.name), 9, U6))), 128))
                      ], 8, A6), [
                        [$o, he.value]
                      ])
                    ]),
                    s("div", z6, [
                      Q[38] || (Q[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": Q[12] || (Q[12] = (be) => ne.value = be),
                        class: "form-select"
                      }, [
                        (a(!0), i(j, null, we(st(Cl), (be) => (a(), i("option", {
                          key: be,
                          value: be
                        }, f(be) + f(be === "auto" ? " (detect GPU)" : ""), 9, V6))), 128))
                      ], 512), [
                        [$o, ne.value]
                      ])
                    ]),
                    s("div", F6, [
                      s("label", B6, [
                        Tt(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": Q[13] || (Q[13] = (be) => K.value = be)
                        }, null, 512), [
                          [Gn, K.value]
                        ]),
                        Q[39] || (Q[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    le.value ? (a(), i("div", W6, f(le.value), 1)) : h("", !0)
                  ], 64))
                ])) : y.value === "import" ? (a(), i("div", H6, [
                  k(nc, {
                    "workspace-path": Le.value,
                    "resume-import": S.value,
                    "initial-progress": N.value ?? void 0,
                    onImportComplete: Me,
                    onImportStarted: Q[14] || (Q[14] = (be) => x.value = !0),
                    onSourceCleared: Ie
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : h("", !0)
              ], 64))
            ])) : h("", !0)
          ];
        }),
        footer: g(() => [
          s("div", q6, [
            k(fc),
            s("div", K6, [
              p.value === 1 ? (a(), R(Ne, {
                key: 0,
                variant: "primary",
                disabled: !Se.value || A.value,
                onClick: ge
              }, {
                default: g(() => [
                  $(f(A.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (a(), i(j, { key: 1 }, [
                !fe.value && !x.value && (y.value !== "landing" || o.setupState === "no_workspace" && !Le.value) ? (a(), R(Ne, {
                  key: 0,
                  variant: "secondary",
                  onClick: Oe
                }, {
                  default: g(() => [...Q[44] || (Q[44] = [
                    $(" Back ", -1)
                  ])]),
                  _: 1
                })) : h("", !0),
                y.value === "create" ? (a(), R(Ne, {
                  key: 1,
                  variant: "primary",
                  disabled: !He.value || fe.value,
                  onClick: ke
                }, {
                  default: g(() => [
                    $(f(fe.value ? "Creating..." : K.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0),
                y.value === "landing" && w.value ? (a(), R(Ne, {
                  key: 2,
                  variant: "primary",
                  onClick: De
                }, {
                  default: g(() => [
                    $(" Switch to " + f(w.value), 1)
                  ]),
                  _: 1
                })) : h("", !0)
              ], 64)) : h("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      _.value ? (a(), R(u6, {
        key: 0,
        "workspace-path": I.value,
        onClose: Q[16] || (Q[16] = (Be) => _.value = !1)
      }, null, 8, ["workspace-path"])) : h("", !0)
    ], 64));
  }
}), Y6 = /* @__PURE__ */ xe(Q6, [["__scopeId", "data-v-9a9aadc0"]]), X6 = { class: "update-banner" }, Z6 = { class: "update-banner__left" }, eE = { class: "update-banner__title" }, tE = {
  key: 0,
  class: "update-banner__summary"
}, sE = { class: "update-banner__actions" }, oE = ["disabled"], nE = ["disabled"], aE = ["disabled"], lE = /* @__PURE__ */ $e({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const o = t;
    return (n, l) => (a(), i("div", X6, [
      s("div", Z6, [
        s("div", eE, " ComfyGit Manager v" + f(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (a(), i("div", tE, f(e.info.changelog_summary), 1)) : h("", !0)
      ]),
      s("div", sE, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, f(e.updating ? "Updating…" : "Update"), 9, oE),
        e.info.release_url ? (a(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, nE)) : h("", !0),
        s("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, aE)
      ])
    ]));
  }
}), iE = /* @__PURE__ */ xe(lE, [["__scopeId", "data-v-49562c5c"]]), mc = "ComfyGit.UpdateNotice.DismissedVersion";
function rE() {
  try {
    return localStorage.getItem(mc);
  } catch {
    return null;
  }
}
function cE(e) {
  try {
    localStorage.setItem(mc, e);
  } catch {
  }
}
function uE(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : rE() !== e.latest_version;
}
const dE = { class: "comfygit-panel" }, fE = { class: "panel-header" }, mE = { class: "header-left" }, vE = {
  key: 0,
  class: "header-info"
}, pE = { class: "header-actions" }, gE = { class: "env-switcher" }, hE = { class: "env-switcher-header" }, yE = { class: "env-control-buttons" }, wE = {
  key: 0,
  class: "header-info"
}, _E = { class: "branch-name" }, kE = { class: "panel-main" }, bE = { class: "sidebar" }, $E = { class: "sidebar-content" }, CE = { class: "sidebar-section" }, xE = { class: "sidebar-section" }, SE = { class: "sidebar-section" }, IE = { class: "sidebar-footer" }, EE = { class: "content-area" }, TE = {
  key: 0,
  class: "error-message"
}, ME = {
  key: 1,
  class: "loading"
}, PE = { class: "dialog-content env-selector-dialog" }, RE = { class: "dialog-header" }, NE = { class: "dialog-body" }, LE = { class: "env-list" }, DE = { class: "env-info" }, OE = { class: "env-name-row" }, AE = { class: "env-indicator" }, UE = { class: "env-name" }, zE = {
  key: 0,
  class: "env-branch"
}, VE = {
  key: 1,
  class: "current-label"
}, FE = { class: "env-stats" }, BE = ["onClick"], WE = { class: "toast-container" }, GE = { class: "toast-message" }, $i = "ComfyGit.LastView", Ci = "ComfyGit.LastSection", jE = /* @__PURE__ */ $e({
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
      repairWorkflowModels: C,
      getSetupStatus: S,
      getUpdateCheck: N,
      updateManager: M
    } = pt(), T = Pv(), L = b(null), O = b([]), J = b([]), P = b([]), F = D(() => P.value.find((ie) => ie.is_current)), Y = b(null), ee = b(!1), ce = b(!1), he = b("history"), ne = b("manifest"), K = b(null), le = b(!1), Le = b(1), oe = D(() => {
      var ie;
      return ((ie = K.value) == null ? void 0 : ie.state) || "managed";
    }), pe = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, A = D(() => {
      var ie, X;
      return ((X = (ie = K.value) == null ? void 0 : ie.runtime_context) == null ? void 0 : X.capabilities) || pe;
    }), fe = b(!1), Re = b(null), Fe = b(null), Ce = b(!1), H = b(null), te = b(!1), q = b(!1), Z = D(() => !te.value && uE(H.value)), Se = b(null), He = b(null), Ke = b(null), I = b(!1), E = b(!1), W = b(""), ge = b(null), ke = b({ state: "idle", progress: 0, message: "" });
    let _e = null, De = null;
    const Oe = {
      manifest: { view: "diagnostics", section: "diagnostics" },
      "debug-env": { view: "diagnostics", section: "diagnostics" },
      "debug-workspace": { view: "diagnostics", section: "diagnostics" },
      "debug-orchestrator": { view: "diagnostics", section: "diagnostics" },
      history: { view: "version-control", section: "version-control" },
      branches: { view: "version-control", section: "version-control" },
      remotes: { view: "version-control", section: "version-control" },
      status: { view: "status", section: "this-env" },
      workflows: { view: "workflows", section: "this-env" }
    }, Me = o.initialView ? Oe[o.initialView] : null, Ie = [
      "status",
      "workflows",
      "models-env",
      "nodes",
      "version-control",
      "environments",
      "model-index",
      "settings",
      "diagnostics"
    ], Ge = ["this-env", "version-control", "workspace", "diagnostics"];
    function ze() {
      try {
        const ie = sessionStorage.getItem($i), X = sessionStorage.getItem(Ci), We = ie === "branches" || ie === "history" || ie === "remotes" ? "version-control" : ie === "manifest" || ie === "debug-env" || ie === "debug-workspace" ? "diagnostics" : ie, Xe = X === "all-envs" ? "workspace" : X === "sharing" ? "version-control" : X;
        if (ie && X && Ie.includes(We) && Ge.includes(Xe))
          return { view: We, section: Xe };
      } catch {
      }
      return null;
    }
    const ve = ze(), Q = b((Me == null ? void 0 : Me.view) ?? (ve == null ? void 0 : ve.view) ?? "status"), Be = b((Me == null ? void 0 : Me.section) ?? (ve == null ? void 0 : ve.section) ?? "this-env");
    function be(ie, X) {
      Q.value = ie, Be.value = X;
      try {
        sessionStorage.setItem($i, ie), sessionStorage.setItem(Ci, X);
      } catch {
      }
    }
    function Ye(ie) {
      const We = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" }
      }[ie];
      We && be(We.view, We.section);
    }
    function Ae(ie) {
      he.value = ie, be("version-control", "version-control");
    }
    function Pe(ie) {
      ne.value = ie, be("diagnostics", "diagnostics");
    }
    function B() {
      Ae("branches");
    }
    function ue() {
      n("close"), setTimeout(() => {
        var X;
        const ie = document.querySelectorAll("button.comfyui-button");
        for (const We of ie)
          if (((X = We.textContent) == null ? void 0 : X.trim()) === "Manager") {
            We.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ae = b(null), Je = b(!1), V = b(!1), z = b([]);
    let se = 0;
    function me(ie, X = "info", We = 3e3) {
      const Xe = ++se;
      return z.value.push({ id: Xe, message: ie, type: X }), We > 0 && setTimeout(() => {
        z.value = z.value.filter((ft) => ft.id !== Xe);
      }, We), Xe;
    }
    function Te(ie) {
      z.value = z.value.filter((X) => X.id !== ie);
    }
    function Qe(ie, X) {
      me(ie, X);
    }
    async function je() {
      H.value = null, te.value = !1;
      try {
        H.value = await N();
      } catch {
      }
    }
    function nt() {
      var X;
      const ie = (X = H.value) == null ? void 0 : X.release_url;
      if (ie)
        try {
          window.open(ie, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function yt() {
      var X;
      const ie = (X = H.value) == null ? void 0 : X.latest_version;
      ie && cE(ie), te.value = !0;
    }
    async function It() {
      var X, We;
      if (q.value) return;
      q.value = !0;
      const ie = me("Updating comfygit-manager...", "info", 0);
      try {
        const Xe = await M();
        if (Te(ie), Xe.status !== "success") {
          if (me(Xe.message || "Update failed", "error"), Xe.manual_instructions) {
            const ft = Xe.manual_instructions.split(`
`).map((Ct) => Ct.trim()).filter(Boolean);
            ae.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: ft,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                ae.value = null;
              }
            };
          }
          return;
        }
        if (me(Xe.message || "Update complete", "success"), yt(), Xe.restart_required) {
          Ut();
          try {
            await ((We = (X = window.app) == null ? void 0 : X.api) == null ? void 0 : We.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Xe) {
        Te(ie);
        const ft = Xe instanceof Error ? Xe.message : "Update failed";
        me(ft, "error");
      } finally {
        q.value = !1;
      }
    }
    const re = D(() => {
      if (!L.value) return "neutral";
      const ie = L.value.workflows, X = ie.new.length > 0 || ie.modified.length > 0 || ie.deleted.length > 0 || L.value.has_changes;
      return L.value.comparison.is_synced ? X ? "warning" : "success" : "error";
    });
    D(() => L.value ? re.value === "success" ? "All synced" : re.value === "warning" ? "Uncommitted changes" : re.value === "error" ? "Not synced" : "" : "");
    async function U(ie = {}) {
      fe.value = !0, Re.value = null;
      try {
        const [X, We, Xe, ft] = await Promise.all([
          l(!0),
          r(),
          c(),
          p()
        ]);
        L.value = X, O.value = We.commits, J.value = Xe.branches, P.value = ft, n("statusUpdate", X), (ie.refreshWorkflows ?? !0) && Se.value && await Se.value.loadWorkflows(!0);
      } catch (X) {
        Re.value = X instanceof Error ? X.message : "Failed to load status", L.value = null, O.value = [], J.value = [];
      } finally {
        fe.value = !1;
      }
    }
    function de(ie) {
      Fe.value = ie;
    }
    async function qe(ie) {
      var We;
      Fe.value = null;
      const X = L.value && (L.value.workflows.new.length > 0 || L.value.workflows.modified.length > 0 || L.value.workflows.deleted.length > 0 || L.value.has_changes);
      ae.value = {
        title: X ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: X ? "You have uncommitted changes that will be lost." : `Checkout commit ${ie.short_hash || ((We = ie.hash) == null ? void 0 : We.slice(0, 7))}?`,
        details: X ? pn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: X ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: X,
        onConfirm: async () => {
          var Ct;
          ae.value = null, Ut();
          const Xe = me(`Checking out ${ie.short_hash || ((Ct = ie.hash) == null ? void 0 : Ct.slice(0, 7))}...`, "info", 0), ft = await u(ie.hash, X);
          Te(Xe), ft.status === "success" ? me("Restarting ComfyUI...", "success") : me(ft.message || "Checkout failed", "error");
        }
      };
    }
    async function ct(ie) {
      const X = L.value && (L.value.workflows.new.length > 0 || L.value.workflows.modified.length > 0 || L.value.workflows.deleted.length > 0 || L.value.has_changes);
      ae.value = {
        title: X ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: X ? "You have uncommitted changes." : `Switch to branch "${ie}"?`,
        details: X ? pn() : void 0,
        warning: X ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: X ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ae.value = null, Ut();
          const We = me(`Switching to ${ie}...`, "info", 0), Xe = await v(ie, X);
          Te(We), Xe.status === "success" ? me("Restarting ComfyUI...", "success") : me(Xe.message || "Branch switch failed", "error");
        }
      };
    }
    async function Et(ie) {
      const X = me(`Creating branch ${ie}...`, "info", 0), We = await d(ie);
      Te(X), We.status === "success" ? (me(`Branch "${ie}" created`, "success"), await U()) : me(We.message || "Failed to create branch", "error");
    }
    async function at(ie, X = !1) {
      const We = async (Xe) => {
        var Ct;
        const ft = me(`Deleting branch ${ie}...`, "info", 0);
        try {
          const rs = await m(ie, Xe);
          Te(ft), rs.status === "success" ? (me(`Branch "${ie}" deleted`, "success"), await U()) : (Ct = rs.message) != null && Ct.includes("not fully merged") ? ae.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ie}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ae.value = null, await We(!0);
            }
          } : me(rs.message || "Failed to delete branch", "error");
        } catch (rs) {
          Te(ft);
          const Ks = rs instanceof Error ? rs.message : "Failed to delete branch";
          Ks.includes("not fully merged") ? ae.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ie}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ae.value = null, await We(!0);
            }
          } : me(Ks, "error");
        }
      };
      ae.value = {
        title: "Delete Branch",
        message: `Delete branch "${ie}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ae.value = null, await We(X);
        }
      };
    }
    async function $t(ie) {
      Fe.value = null;
      const X = prompt("Enter branch name:");
      if (X) {
        const We = me(`Creating branch ${X}...`, "info", 0), Xe = await d(X, ie.hash);
        Te(We), Xe.status === "success" ? (me(`Branch "${X}" created from ${ie.short_hash}`, "success"), await U()) : me(Xe.message || "Failed to create branch", "error");
      }
    }
    function Ut() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function xs() {
      if (!A.value.can_restart_current) {
        me("Restart is not available in this runtime context.", "warning");
        return;
      }
      ae.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ie;
          ae.value = null, Ut(), me("Restarting environment...", "info");
          try {
            (ie = window.app) != null && ie.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function ia() {
      if (!A.value.can_stop_current) {
        me("Stop is not available in this runtime context.", "warning");
        return;
      }
      ae.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ie;
          ae.value = null, me("Stopping environment...", "info");
          try {
            (ie = window.app) != null && ie.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Us(ie, X) {
      if (!A.value.can_switch_environment) {
        me("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      Ce.value = !1, W.value = ie, ge.value = X || null, I.value = !0;
    }
    async function ra() {
      I.value = !1, E.value = !0, Ut(), ke.value = {
        progress: 10,
        state: ro(10),
        message: co(10)
      };
      try {
        await w(W.value, ge.value || void 0), ca(), ua();
      } catch (ie) {
        Ss(), E.value = !1, me(`Failed to initiate switch: ${ie instanceof Error ? ie.message : "Unknown error"}`, "error"), ke.value = { state: "idle", progress: 0, message: "" }, ge.value = null;
      }
    }
    function ro(ie) {
      return ie >= 100 ? "complete" : ie >= 80 ? "validating" : ie >= 60 ? "starting" : ie >= 30 ? "syncing" : "preparing";
    }
    function co(ie) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[ro(ie)] || "";
    }
    function ca() {
      if (De) return;
      let ie = 10;
      const X = 60, We = 5e3, Xe = 100, ft = (X - ie) / (We / Xe);
      De = window.setInterval(() => {
        if (ie += ft, ie >= X && (ie = X, Ss()), ke.value.progress < X) {
          const Ct = Math.floor(ie);
          ke.value = {
            progress: Ct,
            state: ro(Ct),
            message: co(Ct)
          };
        }
      }, Xe);
    }
    function Ss() {
      De && (clearInterval(De), De = null);
    }
    function ua() {
      _e || (_e = window.setInterval(async () => {
        try {
          let ie = await T.getStatus();
          if ((!ie || ie.state === "idle") && (ie = await y()), !ie)
            return;
          const X = ie.progress || 0;
          X >= 60 && Ss();
          const We = Math.max(X, ke.value.progress), Xe = ie.state && ie.state !== "idle" && ie.state !== "unknown", ft = Xe ? ie.state : ro(We), Ct = Xe && ie.message || co(We);
          ke.value = {
            state: ft,
            progress: We,
            message: Ct
          }, ie.state === "complete" ? (Ss(), No(), E.value = !1, me(`✓ Switched to ${W.value}`, "success"), await U(), W.value = "") : ie.state === "rolled_back" ? (Ss(), No(), E.value = !1, me("Switch failed, restored previous environment", "warning"), W.value = "") : ie.state === "critical_failure" && (Ss(), No(), E.value = !1, me(`Critical error during switch: ${ie.message}`, "error"), W.value = "");
        } catch (ie) {
          console.error("Failed to poll switch progress:", ie);
        }
      }, 1e3));
    }
    function No() {
      Ss(), _e && (clearInterval(_e), _e = null);
    }
    function da() {
      var ie;
      I.value = !1, W.value = "", (ie = K.value) != null && ie.state && K.value.state !== "managed" && (Le.value = K.value.state === "no_workspace" ? 1 : 2, le.value = !0);
    }
    async function fa(ie) {
      Je.value = !1, await U(), me(ie.message, ie.success ? "success" : "error");
    }
    async function ma() {
      V.value = !1;
      const ie = me("Syncing environment...", "info", 0);
      try {
        const X = await x("skip", !0);
        if (Te(ie), X.status === "success") {
          const We = [];
          X.nodes_installed.length && We.push(`${X.nodes_installed.length} installed`), X.nodes_removed.length && We.push(`${X.nodes_removed.length} removed`);
          const Xe = We.length ? `: ${We.join(", ")}` : "";
          me(`✓ Environment synced${Xe}`, "success"), await U();
        } else {
          const We = X.errors.length ? X.errors.join("; ") : X.message;
          me(`Sync failed: ${We}`, "error");
        }
      } catch (X) {
        Te(ie), me(`Sync error: ${X instanceof Error ? X.message : "Unknown error"}`, "error");
      }
    }
    async function va(ie) {
      var X;
      try {
        const We = await C(ie);
        We.failed.length === 0 ? me(`✓ Repaired ${We.success} workflow${We.success === 1 ? "" : "s"}`, "success") : me(`Repaired ${We.success}, failed: ${We.failed.length}`, "warning"), await U();
      } catch (We) {
        me(`Repair failed: ${We instanceof Error ? We.message : "Unknown error"}`, "error");
      } finally {
        (X = Ke.value) == null || X.resetRepairingState();
      }
    }
    async function vn() {
      var X, We;
      const ie = me("Repairing environment...", "info", 0);
      try {
        const Xe = await x("skip", !0);
        if (Te(ie), Xe.status === "success") {
          const ft = [];
          Xe.nodes_installed.length && ft.push(`${Xe.nodes_installed.length} installed`), Xe.nodes_removed.length && ft.push(`${Xe.nodes_removed.length} removed`);
          const Ct = ft.length ? `: ${ft.join(", ")}` : "";
          me(`✓ Environment repaired${Ct}`, "success"), (X = Ke.value) == null || X.closeDetailModal(), await U();
        } else {
          const ft = Xe.errors.length ? Xe.errors.join(", ") : Xe.message || "Unknown error";
          me(`Repair failed: ${ft}`, "error");
        }
      } catch (Xe) {
        Te(ie), me(`Repair error: ${Xe instanceof Error ? Xe.message : "Unknown error"}`, "error");
      } finally {
        (We = Ke.value) == null || We.resetRepairingEnvironmentState();
      }
    }
    async function pa(ie, X) {
      me(`Environment '${ie}' created`, "success"), await U(), He.value && await He.value.loadEnvironments(), X && A.value.can_switch_environment && await Us(ie);
    }
    async function ga(ie) {
      var X;
      if (!A.value.can_delete_environment) {
        me("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((X = F.value) == null ? void 0 : X.name) === ie) {
        me("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      ae.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ie}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          ae.value = null;
          try {
            const We = await _(ie);
            We.status === "success" ? (me(`Environment "${ie}" deleted`, "success"), await U(), He.value && await He.value.loadEnvironments()) : me(We.message || "Failed to delete environment", "error");
          } catch (We) {
            me(`Error deleting environment: ${We instanceof Error ? We.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ha(ie, X) {
      le.value = !1;
      try {
        K.value = await S();
      } catch {
      }
      A.value.can_switch_environment && await Us(ie, X);
    }
    function ya() {
      le.value = !1, n("close");
    }
    async function wa(ie, X) {
      await Us(ie, X);
    }
    async function _a(ie) {
      ee.value = !1, await U(), await Us(ie);
    }
    function ka() {
      Y.value = null, ee.value = !0;
    }
    function ba(ie) {
      Y.value = ie, ce.value = !0;
    }
    function $a() {
      ce.value = !1, Y.value = null;
    }
    async function Ca(ie) {
      K.value = await S(), console.log(`Environment '${ie}' created. Available for switching.`);
    }
    function xa() {
      if (!A.value.can_create_environment) {
        me("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      be("environments", "workspace"), setTimeout(() => {
        var ie;
        (ie = He.value) == null || ie.openCreateModal();
      }, 100);
    }
    function pn() {
      if (!L.value) return [];
      const ie = [], X = L.value.workflows;
      return X.new.length && ie.push(`${X.new.length} new workflow(s)`), X.modified.length && ie.push(`${X.modified.length} modified workflow(s)`), X.deleted.length && ie.push(`${X.deleted.length} deleted workflow(s)`), ie;
    }
    return rt(async () => {
      try {
        if (K.value = await S(), K.value.state === "no_workspace" && A.value.can_initialize_workspace) {
          le.value = !0, Le.value = 1;
          return;
        }
        if (K.value.state === "empty_workspace" && A.value.can_create_environment) {
          le.value = !0, Le.value = 2;
          return;
        }
        if (K.value.state === "unmanaged" && A.value.can_switch_environment) {
          le.value = !0, Le.value = 2;
          return;
        }
      } catch (ie) {
        console.warn("Setup status check failed, proceeding normally:", ie);
      }
      await Promise.all([
        U({ refreshWorkflows: !1 }),
        je()
      ]);
    }), (ie, X) => {
      var We, Xe, ft, Ct, rs, Ks, gn, G, ye, Ve, ut, Rt, jt;
      return a(), i("div", dE, [
        s("div", fE, [
          s("div", mE, [
            X[27] || (X[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            L.value ? (a(), i("div", vE)) : h("", !0)
          ]),
          s("div", pE, [
            k(dc),
            X[30] || (X[30] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Ue(["icon-btn", { spinning: fe.value }]),
              onClick: U,
              title: "Refresh"
            }, [...X[28] || (X[28] = [
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
              onClick: X[0] || (X[0] = (et) => n("close")),
              title: "Close"
            }, [...X[29] || (X[29] = [
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
        Z.value && H.value ? (a(), R(iE, {
          key: 0,
          info: H.value,
          updating: q.value,
          onUpdate: It,
          onDismiss: yt,
          onReleaseNotes: nt
        }, null, 8, ["info", "updating"])) : h("", !0),
        s("div", gE, [
          s("div", hE, [
            X[31] || (X[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", yE, [
              A.value.can_restart_current ? (a(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: xs
              }, " Restart ")) : h("", !0),
              A.value.can_stop_current ? (a(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: ia
              }, " Stop ")) : h("", !0)
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: X[1] || (X[1] = (et) => be("environments", "workspace"))
          }, [
            L.value ? (a(), i("div", wE, [
              s("span", null, f(((We = F.value) == null ? void 0 : We.name) || ((Xe = L.value) == null ? void 0 : Xe.environment) || "Loading..."), 1),
              s("span", _E, "(" + f(L.value.branch || "detached") + ")", 1)
            ])) : h("", !0),
            X[32] || (X[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", kE, [
          s("div", bE, [
            s("div", $E, [
              s("div", CE, [
                X[33] || (X[33] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Ue(["sidebar-item", { active: Q.value === "status" && Be.value === "this-env" }]),
                  onClick: X[2] || (X[2] = (et) => be("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Ue(["sidebar-item", { active: Q.value === "workflows" }]),
                  onClick: X[3] || (X[3] = (et) => be("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Ue(["sidebar-item", { active: Q.value === "models-env" }]),
                  onClick: X[4] || (X[4] = (et) => be("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Ue(["sidebar-item", { active: Q.value === "nodes" }]),
                  onClick: X[5] || (X[5] = (et) => be("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Ue(["sidebar-item", { active: Q.value === "version-control" }]),
                  onClick: X[6] || (X[6] = (et) => Ae("history"))
                }, " VERSION CONTROL ", 2)
              ]),
              X[36] || (X[36] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", xE, [
                X[34] || (X[34] = s("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                s("button", {
                  class: Ue(["sidebar-item", { active: Q.value === "environments" }]),
                  onClick: X[7] || (X[7] = (et) => be("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Ue(["sidebar-item", { active: Q.value === "model-index" }]),
                  onClick: X[8] || (X[8] = (et) => be("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Ue(["sidebar-item", { active: Q.value === "settings" }]),
                  onClick: X[9] || (X[9] = (et) => be("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              X[37] || (X[37] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", SE, [
                X[35] || (X[35] = s("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                s("button", {
                  class: Ue(["sidebar-item", { active: Q.value === "diagnostics" && ne.value === "manifest" }]),
                  onClick: X[10] || (X[10] = (et) => Pe("manifest"))
                }, " MANIFEST ", 2),
                s("button", {
                  class: Ue(["sidebar-item", { active: Q.value === "diagnostics" && ne.value !== "manifest" }]),
                  onClick: X[11] || (X[11] = (et) => Pe("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            s("div", IE, [
              k(fc)
            ])
          ]),
          s("div", EE, [
            Re.value ? (a(), i("div", TE, f(Re.value), 1)) : !L.value && Q.value === "status" ? (a(), i("div", ME, " Loading status... ")) : (a(), i(j, { key: 2 }, [
              Q.value === "status" ? (a(), R(Ev, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: Ke,
                status: L.value,
                "setup-state": oe.value,
                onSwitchBranch: B,
                onCommitChanges: X[12] || (X[12] = (et) => Je.value = !0),
                onSyncEnvironment: X[13] || (X[13] = (et) => V.value = !0),
                onViewWorkflows: X[14] || (X[14] = (et) => be("workflows", "this-env")),
                onViewHistory: X[15] || (X[15] = (et) => Ae("history")),
                onViewDebug: X[16] || (X[16] = (et) => Pe("env")),
                onViewNodes: X[17] || (X[17] = (et) => be("nodes", "this-env")),
                onRepairMissingModels: va,
                onRepairEnvironment: vn,
                onStartSetup: X[18] || (X[18] = (et) => le.value = !0),
                onViewEnvironments: X[19] || (X[19] = (et) => be("environments", "workspace")),
                onCreateEnvironment: xa
              }, null, 8, ["status", "setup-state"])) : Q.value === "workflows" ? (a(), R(Tw, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: Se,
                onRefresh: U
              }, null, 512)) : Q.value === "models-env" ? (a(), R(Gk, {
                key: 2,
                onNavigate: Ye
              })) : Q.value === "version-control" ? (a(), R(n4, {
                key: 3,
                commits: O.value,
                "current-ref": (ft = L.value) == null ? void 0 : ft.branch,
                branches: J.value,
                current: ((Ct = L.value) == null ? void 0 : Ct.branch) || null,
                "initial-tab": he.value,
                onSelect: de,
                onCheckout: qe,
                onSwitch: ct,
                onCreate: Et,
                onDelete: at,
                onToast: Qe
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : Q.value === "nodes" ? (a(), R(zb, {
                key: 4,
                "version-mismatches": ((Ks = (rs = L.value) == null ? void 0 : rs.comparison) == null ? void 0 : Ks.version_mismatches) || [],
                onOpenNodeManager: ue,
                onRepairEnvironment: vn,
                onToast: Qe
              }, null, 8, ["version-mismatches"])) : Q.value === "diagnostics" ? (a(), R(y4, {
                key: 5,
                "initial-tab": ne.value
              }, null, 8, ["initial-tab"])) : Q.value === "environments" ? (a(), R(U$, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: He,
                "can-create": A.value.can_create_environment,
                "can-switch": A.value.can_switch_environment,
                "can-delete": A.value.can_delete_environment,
                onSwitch: Us,
                onCreated: pa,
                onDelete: ga,
                onImport: ka,
                onExport: ba
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : Q.value === "model-index" ? (a(), R(nb, {
                key: 7,
                onRefresh: U
              })) : Q.value === "settings" ? (a(), R(f2, { key: 8 })) : h("", !0)
            ], 64))
          ])
        ]),
        Fe.value ? (a(), R(O4, {
          key: 1,
          commit: Fe.value,
          onClose: X[20] || (X[20] = (et) => Fe.value = null),
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
          onCancel: X[21] || (X[21] = (et) => ae.value = null),
          onSecondary: ae.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : h("", !0),
        ee.value ? (a(), R(St, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: X[22] || (X[22] = (et) => ee.value = !1)
        }, {
          body: g(() => [
            k(M3, {
              embedded: "",
              onImportCompleteSwitch: _a
            })
          ]),
          _: 1
        })) : h("", !0),
        ce.value ? (a(), R(St, {
          key: 4,
          title: Y.value ? `EXPORT ENVIRONMENT: ${Y.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "lg",
          "fixed-height": "",
          onClose: $a
        }, {
          body: g(() => [
            k(DC, {
              embedded: "",
              "environment-name": Y.value
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : h("", !0),
        k(II, {
          show: I.value,
          "from-environment": ((gn = F.value) == null ? void 0 : gn.name) || "unknown",
          "to-environment": W.value,
          onConfirm: ra,
          onClose: da
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Je.value && L.value ? (a(), R(uc, {
          key: 5,
          status: L.value,
          "as-modal": !0,
          onClose: X[23] || (X[23] = (et) => Je.value = !1),
          onCommitted: fa
        }, null, 8, ["status"])) : h("", !0),
        V.value && L.value ? (a(), R(qI, {
          key: 6,
          show: V.value,
          "mismatch-details": {
            missing_nodes: L.value.comparison.missing_nodes,
            extra_nodes: L.value.comparison.extra_nodes
          },
          onConfirm: ma,
          onClose: X[24] || (X[24] = (et) => V.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : h("", !0),
        k(UI, {
          show: E.value,
          state: ke.value.state,
          progress: ke.value.progress,
          message: ke.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        Ce.value ? (a(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: X[26] || (X[26] = mt((et) => Ce.value = !1, ["self"]))
        }, [
          s("div", PE, [
            s("div", RE, [
              X[39] || (X[39] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: X[25] || (X[25] = (et) => Ce.value = !1)
              }, [...X[38] || (X[38] = [
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
            s("div", NE, [
              X[40] || (X[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", LE, [
                (a(!0), i(j, null, we(P.value, (et) => (a(), i("div", {
                  key: et.name,
                  class: Ue(["env-item", { current: et.is_current }])
                }, [
                  s("div", DE, [
                    s("div", OE, [
                      s("span", AE, f(et.is_current ? "●" : "○"), 1),
                      s("span", UE, f(et.name), 1),
                      et.current_branch ? (a(), i("span", zE, "(" + f(et.current_branch) + ")", 1)) : h("", !0),
                      et.is_current ? (a(), i("span", VE, "CURRENT")) : h("", !0)
                    ]),
                    s("div", FE, f(et.workflow_count) + " workflows • " + f(et.node_count) + " nodes ", 1)
                  ]),
                  !et.is_current && A.value.can_switch_environment ? (a(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (ps) => Us(et.name)
                  }, " SWITCH ", 8, BE)) : h("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : h("", !0),
        le.value ? (a(), R(Y6, {
          key: 8,
          "default-path": ((G = K.value) == null ? void 0 : G.default_path) || "~/comfygit",
          "detected-models-dir": ((ye = K.value) == null ? void 0 : ye.detected_models_dir) || null,
          "initial-step": Le.value,
          "existing-environments": ((Ve = K.value) == null ? void 0 : Ve.environments) || [],
          "cli-installed": ((ut = K.value) == null ? void 0 : ut.cli_installed) ?? !0,
          "setup-state": ((Rt = K.value) == null ? void 0 : Rt.state) || "no_workspace",
          "workspace-path": ((jt = K.value) == null ? void 0 : jt.workspace_path) || null,
          onComplete: ha,
          onClose: ya,
          onSwitchEnvironment: wa,
          onEnvironmentCreatedNoSwitch: Ca
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : h("", !0),
        s("div", WE, [
          k(zd, { name: "toast" }, {
            default: g(() => [
              (a(!0), i(j, null, we(z.value, (et) => (a(), i("div", {
                key: et.id,
                class: Ue(["toast", et.type])
              }, [
                s("span", GE, f(et.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), HE = /* @__PURE__ */ xe(jE, [["__scopeId", "data-v-eeb9f29a"]]), qE = { class: "item-header" }, KE = { class: "item-info" }, JE = { class: "filename" }, QE = { class: "metadata" }, YE = { class: "size" }, XE = {
  key: 0,
  class: "type"
}, ZE = { class: "item-actions" }, eT = {
  key: 0,
  class: "progress-section"
}, tT = { class: "progress-bar" }, sT = { class: "progress-stats" }, oT = { class: "downloaded" }, nT = { class: "speed" }, aT = {
  key: 0,
  class: "eta"
}, lT = {
  key: 1,
  class: "status-msg paused"
}, iT = {
  key: 2,
  class: "status-msg queued"
}, rT = {
  key: 3,
  class: "status-msg completed"
}, cT = {
  key: 4,
  class: "status-msg failed"
}, uT = {
  key: 0,
  class: "retries"
}, dT = /* @__PURE__ */ $e({
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
      s("div", qE, [
        s("div", KE, [
          s("div", JE, f(e.item.filename), 1),
          s("div", QE, [
            s("span", YE, f(n(e.item.size)), 1),
            e.item.type ? (a(), i("span", XE, f(e.item.type), 1)) : h("", !0)
          ])
        ]),
        s("div", ZE, [
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
      e.item.status === "downloading" ? (a(), i("div", eT, [
        s("div", tT, [
          s("div", {
            class: "progress-fill",
            style: Wt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", sT, [
          s("span", oT, f(n(e.item.downloaded)) + " / " + f(n(e.item.size)), 1),
          s("span", nT, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), i("span", aT, f(r(e.item.eta)), 1)) : h("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), i("div", lT, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), i("div", iT, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), i("div", rT, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), i("div", cT, [
        $(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), i("span", uT, "(" + f(e.item.retries) + " retries)", 1)) : h("", !0)
      ])) : h("", !0)
    ], 2));
  }
}), Ao = /* @__PURE__ */ xe(dT, [["__scopeId", "data-v-2110df65"]]), fT = { class: "queue-title" }, mT = { class: "count" }, vT = { class: "queue-actions" }, pT = { class: "action-label" }, gT = {
  key: 0,
  class: "overall-progress"
}, hT = { class: "progress-bar" }, yT = {
  key: 0,
  class: "current-mini"
}, wT = { class: "filename" }, _T = { class: "speed" }, kT = {
  key: 1,
  class: "queue-content"
}, bT = {
  key: 0,
  class: "section"
}, $T = {
  key: 1,
  class: "section"
}, CT = { class: "section-header" }, xT = { class: "section-label paused" }, ST = { class: "items-list" }, IT = {
  key: 2,
  class: "section"
}, ET = { class: "section-header" }, TT = { class: "section-label" }, MT = { class: "items-list" }, PT = {
  key: 3,
  class: "section"
}, RT = { class: "section-header" }, NT = { class: "section-label" }, LT = { class: "items-list" }, DT = {
  key: 4,
  class: "section"
}, OT = { class: "section-header" }, AT = { class: "section-label failed" }, UT = { class: "items-list" }, zT = /* @__PURE__ */ $e({
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
    } = Ro(), x = b(!1);
    let C = null;
    kt(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (T, L) => {
        C && (clearTimeout(C), C = null);
        const O = T.active === 0 && T.failed === 0 && T.paused === 0 && T.completed > 0, J = L && (L.active > 0 || L.paused > 0);
        O && J && (C = setTimeout(() => {
          _(), C = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = D(() => {
      var O;
      if (t.items.length === 0) return 0;
      const T = l.value.length, L = ((O = o.value) == null ? void 0 : O.progress) || 0;
      return Math.round((T + L / 100) / t.items.length * 100);
    });
    function N(T) {
      v(T);
    }
    function M(T) {
      return T === 0 ? "..." : `${(T / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (T, L) => (a(), R(Dt, { to: "body" }, [
      st(u) ? (a(), i("div", {
        key: 0,
        class: Ue(["model-download-queue", { minimized: !x.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: L[0] || (L[0] = (O) => x.value = !x.value)
        }, [
          s("div", fT, [
            L[4] || (L[4] = s("span", { class: "icon" }, "↓", -1)),
            L[5] || (L[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", mT, "(" + f(st(d)) + "/" + f(st(t).items.length) + ")", 1)
          ]),
          s("div", vT, [
            s("span", pT, f(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (a(), i("div", kT, [
          st(o) ? (a(), i("div", bT, [
            L[6] || (L[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            k(Ao, {
              item: st(o),
              onCancel: L[1] || (L[1] = (O) => N(st(o).id))
            }, null, 8, ["item"])
          ])) : h("", !0),
          st(c).length > 0 ? (a(), i("div", $T, [
            s("div", CT, [
              s("span", xT, "Paused (" + f(st(c).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: L[2] || (L[2] = //@ts-ignore
                (...O) => st(w) && st(w)(...O))
              }, "Resume All")
            ]),
            s("div", ST, [
              (a(!0), i(j, null, we(st(c), (O) => (a(), R(Ao, {
                key: O.id,
                item: O,
                onResume: (J) => st(p)(O.id),
                onRemove: (J) => st(y)(O.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          st(n).length > 0 ? (a(), i("div", IT, [
            s("div", ET, [
              s("span", TT, "Queued (" + f(st(n).length) + ")", 1)
            ]),
            s("div", MT, [
              (a(!0), i(j, null, we(st(n), (O) => (a(), R(Ao, {
                key: O.id,
                item: O,
                onCancel: (J) => N(O.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : h("", !0),
          st(l).length > 0 ? (a(), i("div", PT, [
            s("div", RT, [
              s("span", NT, "Completed (" + f(st(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: L[3] || (L[3] = //@ts-ignore
                (...O) => st(_) && st(_)(...O))
              }, "Clear")
            ]),
            s("div", LT, [
              (a(!0), i(j, null, we(st(l).slice(0, 3), (O) => (a(), R(Ao, {
                key: O.id,
                item: O,
                onRemove: (J) => st(y)(O.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          st(r).length > 0 ? (a(), i("div", DT, [
            s("div", OT, [
              s("span", AT, "Failed (" + f(st(r).length) + ")", 1)
            ]),
            s("div", UT, [
              (a(!0), i(j, null, we(st(r), (O) => (a(), R(Ao, {
                key: O.id,
                item: O,
                onRetry: (J) => st(m)(O.id),
                onRemove: (J) => st(y)(O.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : h("", !0)
        ])) : (a(), i("div", gT, [
          s("div", hT, [
            s("div", {
              class: "progress-fill",
              style: Wt({ width: `${S.value}%` })
            }, null, 4)
          ]),
          st(o) ? (a(), i("div", yT, [
            s("span", wT, f(st(o).filename), 1),
            s("span", _T, f(M(st(o).speed)), 1)
          ])) : h("", !0)
        ]))
      ], 2)) : h("", !0)
    ]));
  }
}), VT = /* @__PURE__ */ xe(zT, [["__scopeId", "data-v-3a3c9607"]]), FT = { class: "detail-header" }, BT = { class: "item-count" }, WT = { class: "resource-list" }, GT = { class: "item-info" }, jT = { class: "item-name" }, HT = {
  key: 0,
  class: "item-subtitle"
}, qT = {
  key: 0,
  class: "installing-badge"
}, KT = ["title"], JT = {
  key: 2,
  class: "installed-badge"
}, QT = {
  key: 3,
  class: "queued-badge"
}, YT = {
  key: 4,
  class: "action-buttons"
}, XT = {
  key: 1,
  class: "no-action"
}, ZT = /* @__PURE__ */ $e({
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
    const o = e, n = t, l = D(() => o.items.filter((y) => y.canAction)), r = D(() => l.value.length > 0 && l.value.every(
      (y) => {
        var _, x;
        return o.queuedItems.has(y.id) || ((_ = o.installedItems) == null ? void 0 : _.has(y.id)) || ((x = o.failedItems) == null ? void 0 : x.has(y.id));
      }
    )), c = D(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
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
    return (y, _) => (a(), R(St, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (x) => n("close"))
    }, {
      body: g(() => [
        s("div", FT, [
          s("span", BT, f(e.items.length) + " " + f(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (a(), R(Ne, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: _[0] || (_[0] = (x) => n("bulk-action"))
          }, {
            default: g(() => [
              $(f(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : h("", !0)
        ]),
        s("div", WT, [
          (a(!0), i(j, null, we(e.items, (x) => (a(), i("div", {
            key: x.id,
            class: "resource-item"
          }, [
            s("div", GT, [
              s("span", jT, f(x.name), 1),
              x.subtitle ? (a(), i("span", HT, f(x.subtitle), 1)) : h("", !0)
            ]),
            x.canAction ? (a(), i(j, { key: 0 }, [
              d(x) ? (a(), i("span", qT, "Installing...")) : m(x) ? (a(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(x)
              }, "Failed ⚠", 8, KT)) : v(x) ? (a(), i("span", JT, "Installed")) : u(x) ? (a(), i("span", QT, "Queued")) : (a(), i("div", YT, [
                (a(!0), i(j, null, we(w(x), (C) => (a(), R(Ne, {
                  key: `${x.id}-${C.key}`,
                  size: "sm",
                  variant: C.variant || "secondary",
                  onClick: (S) => n("action", x, C.key)
                }, {
                  default: g(() => [
                    $(f(C.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (a(), i("span", XT, f(x.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: g(() => [
        k(Ne, {
          variant: "secondary",
          onClick: _[1] || (_[1] = (x) => n("close"))
        }, {
          default: g(() => [..._[3] || (_[3] = [
            $("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), e7 = /* @__PURE__ */ xe(ZT, [["__scopeId", "data-v-ec7e9202"]]), t7 = {
  key: 0,
  class: "loading-state"
}, s7 = {
  key: 1,
  class: "analysis-results"
}, o7 = {
  key: 0,
  class: "section"
}, n7 = { class: "section-header" }, a7 = { class: "section-title" }, l7 = { class: "item-list" }, i7 = { class: "package-info" }, r7 = { class: "package-name" }, c7 = { class: "node-count" }, u7 = {
  key: 1,
  class: "installing-badge"
}, d7 = {
  key: 2,
  class: "queued-badge"
}, f7 = ["title"], m7 = {
  key: 4,
  class: "installed-badge"
}, v7 = {
  key: 1,
  class: "section"
}, p7 = { class: "section-header" }, g7 = { class: "section-title" }, h7 = { class: "item-list" }, y7 = { class: "node-type" }, w7 = {
  key: 0,
  class: "overflow-note"
}, _7 = {
  key: 2,
  class: "section"
}, k7 = { class: "section-header" }, b7 = { class: "section-title" }, $7 = { class: "item-list" }, C7 = { class: "node-type" }, x7 = { class: "not-found" }, S7 = {
  key: 0,
  class: "overflow-note"
}, I7 = {
  key: 3,
  class: "section"
}, E7 = { class: "section-header" }, T7 = { class: "section-title" }, M7 = { class: "item-list" }, P7 = { class: "package-info community-info" }, R7 = { class: "community-title-row" }, N7 = { class: "package-name" }, L7 = { class: "node-count" }, D7 = { class: "community-mapping-note" }, O7 = { key: 0 }, A7 = {
  key: 0,
  class: "community-actions"
}, U7 = {
  key: 1,
  class: "installing-badge"
}, z7 = {
  key: 2,
  class: "queued-badge"
}, V7 = ["title"], F7 = {
  key: 4,
  class: "installed-badge"
}, B7 = ["title"], W7 = {
  key: 1,
  class: "no-url"
}, G7 = {
  key: 4,
  class: "section"
}, j7 = { class: "section-header" }, H7 = { class: "section-title" }, q7 = { class: "item-list" }, K7 = { class: "model-info" }, J7 = { class: "model-name" }, Q7 = {
  key: 1,
  class: "queued-badge"
}, Y7 = {
  key: 1,
  class: "no-url"
}, X7 = { class: "dont-show-again" }, Z7 = 3e4, eM = /* @__PURE__ */ $e({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = b(!1), o = b(null), n = b(null), l = b(!1), r = b(/* @__PURE__ */ new Set()), c = b(/* @__PURE__ */ new Set()), u = b(/* @__PURE__ */ new Map()), d = b(/* @__PURE__ */ new Set()), v = b(!1), m = b(null), p = b(0), w = b(null), y = b(/* @__PURE__ */ new Set()), _ = b(/* @__PURE__ */ new Map()), x = b(/* @__PURE__ */ new Map()), { addToQueue: C } = Ro(), { queueNodeInstall: S } = pt(), N = D(() => {
      var B;
      return ((B = n.value) == null ? void 0 : B.package_aliases) || {};
    });
    function M(B) {
      if (!B) return null;
      const ue = N.value;
      let ae = B;
      const Je = /* @__PURE__ */ new Set();
      for (; ue[ae] && !Je.has(ae); )
        Je.add(ae), ae = ue[ae];
      return ae;
    }
    function T(B, ue) {
      return B instanceof Error && B.message ? B.message : typeof B == "string" && B.trim().length > 0 ? B : ue;
    }
    function L(B) {
      for (const [ue, ae] of _.value.entries())
        ae === B && _.value.delete(ue);
    }
    function O(B) {
      if (!x.value.has(B)) return;
      const ue = x.value.get(B);
      clearTimeout(ue), x.value.delete(B);
    }
    function J() {
      for (const B of x.value.values())
        clearTimeout(B);
      x.value = /* @__PURE__ */ new Map();
    }
    function P(B) {
      O(B);
      const ue = setTimeout(() => {
        if (x.value.delete(B), !c.value.has(B)) return;
        L(B), c.value.delete(B), m.value === B && (m.value = null), u.value.set(B, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", B);
      }, Z7);
      x.value.set(B, ue);
    }
    function F(B) {
      const ue = `Cannot install "${B.title}" - package_id is missing`;
      u.value.set(B.item_id, ue), o.value = ue, console.warn("[ComfyGit] Community install requested without package_id:", B);
    }
    const Y = D(() => ee.value.length > 0 || he.value.length > 0 || ne.value.length > 0 || K.value.length > 0 || A.value.length > 0), ee = D(() => {
      var ae, Je;
      if (!((ae = n.value) != null && ae.nodes)) return [];
      const B = /* @__PURE__ */ new Map(), ue = (n.value.nodes.resolved || []).filter((V) => {
        var z;
        return !V.is_installed && ((z = V.package) == null ? void 0 : z.package_id);
      });
      for (const V of ue) {
        const z = M(V.package.package_id);
        if (!z) continue;
        B.has(z) || B.set(z, {
          package_id: z,
          title: V.package.title || z,
          node_count: 0,
          node_types: [],
          repository: V.package.repository || null,
          latest_version: V.package.latest_version || null
        });
        const se = B.get(z);
        se.node_count++, se.node_types.push(((Je = V.reference) == null ? void 0 : Je.node_type) || V.node_type);
      }
      return Array.from(B.values());
    }), ce = D(() => ee.value.reduce((B, ue) => B + ue.node_count, 0)), he = D(() => {
      var B;
      return (B = n.value) != null && B.nodes ? (n.value.nodes.unresolved || []).map((ue) => {
        var ae;
        return {
          node_type: ((ae = ue.reference) == null ? void 0 : ae.node_type) || ue.node_type
        };
      }) : [];
    }), ne = D(() => {
      var ue;
      if (!((ue = n.value) != null && ue.nodes)) return [];
      const B = n.value.node_guidance || {};
      return (n.value.nodes.version_gated || []).map((ae) => {
        var V;
        const Je = ((V = ae.reference) == null ? void 0 : V.node_type) || ae.node_type;
        return {
          node_type: Je,
          guidance: ae.guidance || B[Je] || null
        };
      });
    }), K = D(() => {
      var ae, Je, V, z, se, me, Te, Qe;
      if (!((ae = n.value) != null && ae.nodes)) return [];
      const B = n.value.node_guidance || {}, ue = /* @__PURE__ */ new Map();
      for (const je of n.value.nodes.uninstallable || []) {
        const nt = ((Je = je.reference) == null ? void 0 : Je.node_type) || je.node_type, yt = M(((V = je.package) == null ? void 0 : V.package_id) || null), It = yt || `node:${nt}`;
        ue.has(It) || ue.set(It, {
          item_id: It,
          node_type: nt,
          title: ((z = je.package) == null ? void 0 : z.title) || yt || nt,
          node_count: 0,
          package_id: yt,
          repository: ((se = je.package) == null ? void 0 : se.repository) || null,
          latest_version: ((me = je.package) == null ? void 0 : me.latest_version) || null,
          guidance: je.guidance || B[nt] || null
        });
        const re = ue.get(It);
        re.node_count++, re.guidance || (re.guidance = je.guidance || B[nt] || null), !re.repository && ((Te = je.package) != null && Te.repository) && (re.repository = je.package.repository), !re.latest_version && ((Qe = je.package) != null && Qe.latest_version) && (re.latest_version = je.package.latest_version);
      }
      return Array.from(ue.values());
    }), le = D(() => K.value.filter((B) => !!B.package_id)), Le = D(() => K.value.length >= 5 ? K.value.slice(0, 4) : K.value), oe = D(() => le.value.length > 0 && le.value.every((B) => {
      const ue = B.package_id;
      return r.value.has(ue) || c.value.has(ue) || u.value.has(ue);
    }));
    function pe(B) {
      const ue = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return B.repository && ue.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), ue;
    }
    const A = D(() => {
      var V;
      if (!((V = n.value) != null && V.models)) return [];
      const B = (n.value.models.resolved || []).filter(
        (z) => z.match_type === "download_intent" || z.match_type === "property_download_intent" || z.match_type === "not_found"
      ).map((z) => {
        var se, me, Te, Qe;
        return {
          filename: ((me = (se = z.reference) == null ? void 0 : se.widget_value) == null ? void 0 : me.split("/").pop()) || ((Te = z.reference) == null ? void 0 : Te.widget_value) || z.widget_value,
          widget_value: ((Qe = z.reference) == null ? void 0 : Qe.widget_value) || z.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: z.download_source || null,
          targetPath: z.target_path || null,
          canDownload: !!(z.download_source && z.target_path)
        };
      }), ue = (n.value.models.unresolved || []).map((z) => {
        var se, me, Te, Qe;
        return {
          filename: ((me = (se = z.reference) == null ? void 0 : se.widget_value) == null ? void 0 : me.split("/").pop()) || ((Te = z.reference) == null ? void 0 : Te.widget_value) || z.widget_value,
          widget_value: ((Qe = z.reference) == null ? void 0 : Qe.widget_value) || z.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), ae = /* @__PURE__ */ new Map(), Je = [];
      for (const z of B) {
        if (!z.url) {
          Je.push(z);
          continue;
        }
        const se = `${z.filename}::${z.url}`, me = ae.get(se);
        if (!me) {
          ae.set(se, z);
          continue;
        }
        !me.targetPath && z.targetPath && (me.targetPath = z.targetPath), !me.canDownload && z.canDownload && (me.canDownload = z.canDownload);
      }
      return [...ae.values(), ...Je, ...ue];
    }), fe = D(() => A.value.filter((B) => B.canDownload)), Re = D(() => ee.value.length >= 5 ? ee.value.slice(0, 4) : ee.value), Fe = D(() => A.value.length >= 5 ? A.value.slice(0, 4) : A.value), Ce = D(() => ee.value.length > 0 && ee.value.every(
      (B) => r.value.has(B.package_id) || c.value.has(B.package_id) || u.value.has(B.package_id)
    )), H = D(() => fe.value.length > 0 && fe.value.every((B) => d.value.has(B.url))), te = D(() => ee.value.length > 0 || le.value.length > 0 || fe.value.length > 0), q = D(() => {
      const B = (ee.value.length === 0 || Ce.value) && (le.value.length === 0 || oe.value), ue = fe.value.length === 0 || H.value;
      return B && ue;
    }), Z = D(() => w.value === "models" ? `Missing Models (${A.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${ce.value})` : w.value === "community" ? `Community-Mapped Packages (${K.value.length})` : ""), Se = D(() => w.value === "models" ? A.value.map((B) => ({
      id: B.url || B.widget_value,
      name: B.filename,
      canAction: B.canDownload,
      actionDisabledReason: B.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? ee.value.map((B) => ({
      id: B.package_id,
      name: B.title,
      subtitle: `(${B.node_count} ${B.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : w.value === "community" ? K.value.map((B) => ({
      id: B.package_id || B.item_id,
      name: B.title,
      subtitle: `(${B.node_count} ${B.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!B.package_id,
      actionDisabledReason: B.package_id ? void 0 : "Manual setup required",
      actions: B.package_id ? pe(B) : []
    })) : []);
    function He(B, ue) {
      if (w.value === "models") {
        const ae = A.value.find((Je) => Je.url === B.id || Je.widget_value === B.id);
        ae && ge(ae);
      } else if (w.value === "packages") {
        const ae = ee.value.find((Je) => Je.package_id === B.id);
        ae && I(ae);
      } else if (w.value === "community") {
        const ae = K.value.find((V) => (V.package_id || V.item_id) === B.id);
        if (!ae) return;
        if (!ae.package_id) {
          F({ item_id: ae.item_id, title: ae.title });
          return;
        }
        E(ae, ue === "install_git" ? "git" : "registry");
      }
    }
    function Ke() {
      w.value === "models" ? De() : w.value === "packages" ? ke() : w.value === "community" && _e();
    }
    async function I(B) {
      return W(B.package_id, B.latest_version, "registry");
    }
    async function E(B, ue) {
      return B.package_id ? W(B.package_id, B.latest_version, ue, B.repository) : (F({ item_id: B.item_id, title: B.title }), !1);
    }
    async function W(B, ue, ae, Je) {
      const V = M(B) || B, z = ue || "latest";
      if (r.value.has(V) || c.value.has(V) || u.value.has(V))
        return !0;
      Ae(), m.value = V;
      let se = null;
      try {
        const me = {
          id: V,
          version: z,
          selected_version: z,
          mode: "remote",
          channel: "default"
        };
        ae === "git" && Je && (me.repository = Je, me.install_source = "git");
        const { ui_id: Te } = await S(me, {
          beforeQueueStart: (Qe) => {
            se = Qe, _.value.set(Qe, V), c.value.add(V), P(V), console.log("[ComfyGit] Registered pending install:", {
              ui_id: Qe,
              packageId: V,
              pendingInstalls: Array.from(_.value.entries())
            });
          }
        });
        return se || (se = Te, _.value.set(Te, V), c.value.add(V), P(V), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: Te,
          packageId: V,
          pendingInstalls: Array.from(_.value.entries())
        })), !0;
      } catch (me) {
        const Te = T(me, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", me), se && _.value.delete(se), L(V), O(V), c.value.delete(V), u.value.set(V, Te), !1;
      } finally {
        m.value = null;
      }
    }
    function ge(B) {
      !B.url || !B.targetPath || d.value.has(B.url) || (C([{
        workflow: "unsaved",
        filename: B.filename,
        url: B.url,
        targetPath: B.targetPath
      }]), d.value.add(B.url));
    }
    async function ke() {
      const B = { attempted: 0, failed: 0 };
      for (const ue of ee.value)
        !r.value.has(ue.package_id) && !c.value.has(ue.package_id) && !u.value.has(ue.package_id) && (B.attempted++, await I(ue) || B.failed++);
      return B;
    }
    async function _e() {
      const B = { attempted: 0, failed: 0 };
      for (const ue of le.value) {
        const ae = ue.package_id;
        !r.value.has(ae) && !c.value.has(ae) && !u.value.has(ae) && (B.attempted++, await E(ue, "registry") || B.failed++);
      }
      return B;
    }
    function De() {
      const B = fe.value.filter(
        (ue) => !d.value.has(ue.url)
      );
      if (B.length === 0) return 0;
      C(B.map((ue) => ({
        workflow: "unsaved",
        filename: ue.filename,
        url: ue.url,
        targetPath: ue.targetPath
      })));
      for (const ue of B)
        d.value.add(ue.url);
      return B.length;
    }
    async function Oe() {
      const B = await ke(), ue = await _e();
      De();
      const ae = B.attempted + ue.attempted, Je = B.failed + ue.failed;
      if (ae > 0 && Je > 0) {
        const V = ae - Je;
        o.value = `${V} of ${ae} installs queued, ${Je} failed`;
      }
    }
    function Me() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Ie(B) {
      var V, z;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const ue = B == null ? void 0 : B.id;
      if (ue && y.value.has(ue)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${ue} this session`);
        return;
      }
      const ae = window.app, Je = (V = ae == null ? void 0 : ae.extensionManager) == null ? void 0 : V.workflow;
      if (Je) {
        let Te = !1;
        for (let Qe = 0; Qe < 20; Qe++) {
          const je = Je.activeWorkflow;
          if (!je) {
            await new Promise((It) => setTimeout(It, 50));
            continue;
          }
          const nt = (z = je.activeState) == null ? void 0 : z.id;
          if (!(ue && nt === ue)) {
            Qe < 19 && await new Promise((It) => setTimeout(It, 50));
            continue;
          }
          if (Te = !0, je.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${je.filename}`), ue && y.value.add(ue);
            return;
          }
          break;
        }
        Te || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      t.value = !0, o.value = null, J(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), v.value = !1, p.value = 0;
      try {
        const se = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: B, name: "unsaved" })
        });
        if (!se.ok) {
          const me = await se.json();
          throw new Error(me.error || "Failed to analyze workflow");
        }
        n.value = await se.json(), Y.value && (l.value = !0, ue && y.value.add(ue));
      } catch (se) {
        console.error("[ComfyGit] Failed to analyze workflow:", se);
      } finally {
        t.value = !1;
      }
    }
    function Ge() {
      J(), l.value = !1, n.value = null;
    }
    function ze(B) {
      const { workflow: ue } = B.detail;
      ue && Ie(ue);
    }
    function ve(B) {
      var Je;
      const ue = (Je = B.detail) == null ? void 0 : Je.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: ue,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: B.detail
      });
      const ae = _.value.get(ue);
      ae ? (O(ae), m.value = ae, console.log("[ComfyGit] Installing package:", ae)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", ue);
    }
    function Q(B) {
      var V, z, se, me, Te, Qe, je;
      const ue = (V = B.detail) == null ? void 0 : V.ui_id, ae = (se = (z = B.detail) == null ? void 0 : z.status) == null ? void 0 : se.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: ue,
        status: ae,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: B.detail
      });
      const Je = _.value.get(ue);
      if (Je) {
        if (O(Je), _.value.delete(ue), c.value.delete(Je), m.value === Je && (m.value = null), ae === "success")
          r.value.add(Je), p.value++, console.log("[ComfyGit] Package installed successfully:", Je);
        else {
          const nt = ((Qe = (Te = (me = B.detail) == null ? void 0 : me.status) == null ? void 0 : Te.messages) == null ? void 0 : Qe[0]) || ((je = B.detail) == null ? void 0 : je.result) || "Unknown error";
          u.value.set(Je, nt), console.error("[ComfyGit] Package install failed:", Je, nt);
        }
        _.value.size === 0 && p.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", p.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: p.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", ue);
    }
    let Be = null;
    function be() {
      var B;
      return Be || (Be = (B = window.app) == null ? void 0 : B.api), Be;
    }
    let Ye = !1;
    function Ae() {
      if (Ye) return !0;
      const B = be();
      return B ? (B.addEventListener("cm-task-started", ve), B.addEventListener("cm-task-completed", Q), B.addEventListener("comfygit:workflow-changed", Pe), Ye = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Pe(B) {
      const { change_type: ue } = B.detail;
      (ue === "created" || ue === "modified") && l.value && (J(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return rt(() => {
      window.addEventListener("comfygit:workflow-loaded", ze);
    }), Mo(() => {
      if (J(), window.removeEventListener("comfygit:workflow-loaded", ze), Ye) {
        const B = be();
        B && (B.removeEventListener("cm-task-started", ve), B.removeEventListener("cm-task-completed", Q), B.removeEventListener("comfygit:workflow-changed", Pe)), Ye = !1;
      }
    }), (B, ue) => (a(), i(j, null, [
      l.value ? (a(), R(St, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: t.value,
        error: o.value || void 0,
        onClose: Ge
      }, {
        body: g(() => [
          t.value ? (a(), i("div", t7, [...ue[5] || (ue[5] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("span", null, "Analyzing workflow...", -1)
          ])])) : n.value && Y.value ? (a(), i("div", s7, [
            ee.value.length > 0 ? (a(), i("div", o7, [
              s("div", n7, [
                s("span", a7, "Missing Custom Nodes (" + f(ce.value) + ")", 1),
                ee.value.length > 1 ? (a(), R(Ne, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: Ce.value,
                  onClick: ke
                }, {
                  default: g(() => [
                    $(f(Ce.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              s("div", l7, [
                (a(!0), i(j, null, we(Re.value, (ae) => (a(), i("div", {
                  key: ae.package_id,
                  class: "package-item"
                }, [
                  s("div", i7, [
                    s("span", r7, f(ae.title), 1),
                    s("span", c7, "(" + f(ae.node_count) + " " + f(ae.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(ae.package_id) && !c.value.has(ae.package_id) && !u.value.has(ae.package_id) ? (a(), R(Ne, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: m.value === ae.package_id,
                    onClick: (Je) => I(ae)
                  }, {
                    default: g(() => [
                      $(f(m.value === ae.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : m.value === ae.package_id ? (a(), i("span", u7, "Installing...")) : c.value.has(ae.package_id) ? (a(), i("span", d7, "Queued")) : u.value.has(ae.package_id) ? (a(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(ae.package_id)
                  }, "Failed ⚠", 8, f7)) : (a(), i("span", m7, "Installed"))
                ]))), 128)),
                ee.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ue[0] || (ue[0] = (ae) => w.value = "packages")
                }, [
                  s("span", null, "Show all " + f(ee.value.length) + " packages...", 1),
                  ue[6] || (ue[6] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            he.value.length > 0 ? (a(), i("div", v7, [
              s("div", p7, [
                s("span", g7, "Unknown Nodes (" + f(he.value.length) + ")", 1)
              ]),
              s("div", h7, [
                (a(!0), i(j, null, we(he.value.slice(0, 5), (ae) => (a(), i("div", {
                  key: ae.node_type,
                  class: "item"
                }, [
                  s("code", y7, f(ae.node_type), 1),
                  ue[7] || (ue[7] = s("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                he.value.length > 5 ? (a(), i("div", w7, " ...and " + f(he.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            ne.value.length > 0 ? (a(), i("div", _7, [
              s("div", k7, [
                s("span", b7, "Requires Newer ComfyUI (" + f(ne.value.length) + ")", 1)
              ]),
              s("div", $7, [
                (a(!0), i(j, null, we(ne.value.slice(0, 5), (ae) => (a(), i("div", {
                  key: `vg-${ae.node_type}`,
                  class: "item"
                }, [
                  s("code", C7, f(ae.node_type), 1),
                  s("span", x7, f(ae.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                ne.value.length > 5 ? (a(), i("div", S7, " ...and " + f(ne.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            K.value.length > 0 ? (a(), i("div", I7, [
              s("div", E7, [
                s("span", T7, "Community-Mapped Packages (" + f(K.value.length) + ")", 1),
                le.value.length > 1 ? (a(), R(Ne, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: oe.value,
                  onClick: _e
                }, {
                  default: g(() => [
                    $(f(oe.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              s("div", M7, [
                (a(!0), i(j, null, we(Le.value, (ae) => (a(), i("div", {
                  key: `community-${ae.item_id}`,
                  class: "package-item"
                }, [
                  s("div", P7, [
                    s("div", R7, [
                      s("span", N7, f(ae.title), 1),
                      s("span", L7, "(" + f(ae.node_count) + " " + f(ae.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    s("div", D7, [
                      ue[8] || (ue[8] = $(" Found via community mapping — registry metadata may be incomplete", -1)),
                      ae.guidance ? (a(), i("span", O7, ". " + f(ae.guidance), 1)) : h("", !0)
                    ])
                  ]),
                  ae.package_id ? (a(), i(j, { key: 0 }, [
                    !r.value.has(ae.package_id) && !c.value.has(ae.package_id) && !u.value.has(ae.package_id) ? (a(), i("div", A7, [
                      k(Ne, {
                        size: "sm",
                        variant: "secondary",
                        disabled: m.value === ae.package_id,
                        onClick: (Je) => E(ae, "registry")
                      }, {
                        default: g(() => [
                          $(f(m.value === ae.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      ae.repository ? (a(), R(Ne, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: m.value === ae.package_id,
                        onClick: (Je) => E(ae, "git")
                      }, {
                        default: g(() => [...ue[9] || (ue[9] = [
                          $(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : h("", !0)
                    ])) : m.value === ae.package_id ? (a(), i("span", U7, "Installing...")) : c.value.has(ae.package_id) ? (a(), i("span", z7, "Queued")) : u.value.has(ae.package_id) ? (a(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get(ae.package_id)
                    }, "Failed ⚠", 8, V7)) : (a(), i("span", F7, "Installed"))
                  ], 64)) : (a(), i(j, { key: 1 }, [
                    u.value.has(ae.item_id) ? (a(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: u.value.get(ae.item_id)
                    }, "Failed ⚠", 8, B7)) : (a(), i("span", W7, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                K.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ue[1] || (ue[1] = (ae) => w.value = "community")
                }, [
                  s("span", null, "Show all " + f(K.value.length) + " packages...", 1),
                  ue[10] || (ue[10] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            A.value.length > 0 ? (a(), i("div", G7, [
              s("div", j7, [
                s("span", H7, "Missing Models (" + f(A.value.length) + ")", 1),
                fe.value.length > 1 ? (a(), R(Ne, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: H.value,
                  onClick: De
                }, {
                  default: g(() => [
                    $(f(H.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              s("div", q7, [
                (a(!0), i(j, null, we(Fe.value, (ae) => (a(), i("div", {
                  key: ae.widget_value,
                  class: "model-item"
                }, [
                  s("div", K7, [
                    s("span", J7, f(ae.filename), 1)
                  ]),
                  ae.canDownload ? (a(), i(j, { key: 0 }, [
                    d.value.has(ae.url) ? (a(), i("span", Q7, "Queued")) : (a(), R(Ne, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (Je) => ge(ae)
                    }, {
                      default: g(() => [...ue[11] || (ue[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (a(), i("span", Y7, "Manual download required"))
                ]))), 128)),
                A.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ue[2] || (ue[2] = (ae) => w.value = "models")
                }, [
                  s("span", null, "Show all " + f(A.value.length) + " models...", 1),
                  ue[12] || (ue[12] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            s("div", X7, [
              k(qn, {
                modelValue: v.value,
                "onUpdate:modelValue": [
                  ue[3] || (ue[3] = (ae) => v.value = ae),
                  Me
                ]
              }, {
                default: g(() => [...ue[13] || (ue[13] = [
                  $(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : h("", !0)
        ]),
        footer: g(() => [
          k(Ne, {
            variant: "secondary",
            onClick: Ge
          }, {
            default: g(() => [...ue[14] || (ue[14] = [
              $("Dismiss", -1)
            ])]),
            _: 1
          }),
          te.value ? (a(), R(Ne, {
            key: 0,
            variant: "primary",
            disabled: q.value,
            onClick: Oe
          }, {
            default: g(() => [
              $(f(q.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : h("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : h("", !0),
      w.value ? (a(), R(e7, {
        key: 1,
        title: Z.value,
        items: Se.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : c.value,
        "installed-items": w.value === "models" ? void 0 : r.value,
        "failed-items": w.value === "models" ? void 0 : u.value,
        "installing-item": w.value === "models" ? void 0 : m.value,
        onClose: ue[4] || (ue[4] = (ae) => w.value = null),
        onAction: He,
        onBulkAction: Ke
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : h("", !0)
    ], 64));
  }
}), tM = /* @__PURE__ */ xe(eM, [["__scopeId", "data-v-dfb55c3f"]]), sM = {
  key: 0,
  class: "io-mapping-root"
}, oM = { class: "io-mapping-visual-layer" }, nM = { class: "io-mapping-header" }, aM = { class: "io-mapping-header-main" }, lM = { class: "io-mapping-subtitle" }, iM = {
  key: 0,
  class: "io-mapping-hover-summary"
}, rM = { class: "io-mapping-header-actions" }, cM = { class: "io-mapping-sidebar" }, uM = { class: "io-mapping-sidebar-scroll" }, dM = {
  key: 0,
  class: "io-state-block"
}, fM = {
  key: 1,
  class: "io-state-block io-state-error"
}, mM = { class: "contract-meta-section" }, vM = { class: "contract-meta-toggle-icon" }, pM = {
  key: 0,
  class: "contract-meta-body"
}, gM = { class: "contract-summary" }, hM = { class: "summary-pill" }, yM = { class: "summary-pill" }, wM = { class: "summary-pill" }, _M = { class: "mapping-section" }, kM = { class: "section-header" }, bM = {
  key: 0,
  class: "empty-message"
}, $M = ["onClick"], CM = { class: "item-card-title" }, xM = { class: "item-card-meta" }, SM = { class: "item-card-summary" }, IM = { key: 0 }, EM = { class: "mapping-section" }, TM = { class: "section-header" }, MM = {
  key: 0,
  class: "empty-message"
}, PM = ["onClick"], RM = { class: "item-card-title" }, NM = { class: "item-card-meta" }, LM = { class: "item-card-summary" }, DM = { class: "io-mapping-footer" }, OM = { class: "io-mapping-footer-left" }, AM = { class: "io-mapping-footer-right" }, UM = /* @__PURE__ */ $e({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: o, saveWorkflowContract: n, deleteWorkflowContract: l } = pt(), r = b(!1), c = b(""), u = b(!1), d = b(!1), v = b(!1), m = b(null), p = b(null), w = b(null), y = b(!1), _ = b(!1), x = b(null), C = b(null), S = b(0), N = b(null), M = b(null);
    let T = null;
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
    ], O = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], J = D(() => {
      var V;
      return ((V = p.value) == null ? void 0 : V.contract_summary.has_contract) === !0;
    }), P = D(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const V = w.value.default_contract || "default";
      return w.value.contracts[V] || (w.value.contracts[V] = { inputs: [], outputs: [] }), w.value.contracts[V];
    }), F = D(() => {
      var z;
      const V = ((z = p.value) == null ? void 0 : z.contract_summary.status) ?? "none";
      return V === "valid" ? "Valid Contract" : V === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function Y(V) {
      return V ? JSON.parse(JSON.stringify(V)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function ee(V) {
      return V === "integer" || V === "number";
    }
    function ce(V) {
      return V === "enum";
    }
    function he(V) {
      return V == null ? "" : String(V);
    }
    function ne(V) {
      const z = V.trim();
      if (!z) return;
      const se = Number(z);
      return Number.isFinite(se) ? se : void 0;
    }
    function K(V) {
      return (V || []).join(`
`);
    }
    function le(V) {
      return V.split(/[\n,]/).map((z) => z.trim()).filter(Boolean);
    }
    function Le(V) {
      return typeof V == "string" ? V.length > 24 ? `${V.slice(0, 24)}...` : V : String(V);
    }
    function oe(V) {
      return V == null ? "" : String(V);
    }
    function pe(V) {
      var se;
      const z = (se = V == null ? void 0 : V.options) == null ? void 0 : se.values;
      return Array.isArray(z) ? z.map((me) => String(me)).filter(Boolean) : [];
    }
    function A(V, z) {
      var Te;
      const se = (Te = V == null ? void 0 : V.options) == null ? void 0 : Te[z];
      if (se == null || se === "") return;
      const me = Number(se);
      return Number.isFinite(me) ? me : void 0;
    }
    function fe(V, z) {
      return V.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || z;
    }
    function Re(V) {
      if (!w.value) return;
      const z = V.trim() || "default";
      w.value.default_contract = z, w.value.contracts[z] || (w.value.contracts[z] = { inputs: [], outputs: [] });
    }
    function Fe(V) {
      const z = String(V ?? "").toLowerCase();
      return z.includes("image") ? "image" : z.includes("video") ? "video" : z.includes("audio") ? "audio" : z.includes("int") ? "integer" : z.includes("float") || z.includes("double") || z.includes("number") ? "number" : z.includes("bool") ? "boolean" : z.includes("combo") || z.includes("enum") ? "enum" : z.includes("string") || z.includes("text") ? "string" : "file";
    }
    function Ce(V) {
      P.value.inputs.splice(V, 1), x.value === V && (x.value = null);
    }
    function H(V) {
      P.value.outputs.splice(V, 1), C.value === V && (C.value = null);
    }
    function te(V) {
      x.value = x.value === V ? null : V, x.value != null && (C.value = null);
    }
    function q(V) {
      C.value = C.value === V ? null : V, C.value != null && (x.value = null);
    }
    function Z(V) {
      const z = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(V)) : String(V);
      return document.querySelector(`[data-node-id="${z}"]`);
    }
    function Se(V) {
      return V instanceof Element ? !!V.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function He(V) {
      var me, Te, Qe, je, nt, yt;
      if (!(V instanceof Element)) return null;
      const z = V.closest("[data-node-id]"), se = z == null ? void 0 : z.getAttribute("data-node-id");
      return se ? ((Qe = (Te = (me = t.comfyApp) == null ? void 0 : me.graph) == null ? void 0 : Te.getNodeById) == null ? void 0 : Qe.call(Te, se)) ?? ((yt = (nt = (je = t.comfyApp) == null ? void 0 : je.rootGraph) == null ? void 0 : nt.getNodeById) == null ? void 0 : yt.call(nt, se)) ?? null : null;
    }
    function Ke(V, z) {
      if (z == null || z < 0) return null;
      const se = Z(V);
      return se ? se.querySelectorAll('[data-testid="node-widget"]')[z] ?? null : null;
    }
    function I(V) {
      return !V || V.width <= 0 || V.height <= 0 ? null : {
        left: `${V.left}px`,
        top: `${V.top}px`,
        width: `${V.width}px`,
        height: `${V.height}px`
      };
    }
    function E(V) {
      const z = Z((V == null ? void 0 : V.id) ?? "");
      if (z) return z.getBoundingClientRect();
      const se = t.comfyApp;
      if (!V || typeof (se == null ? void 0 : se.canvasPosToClientPos) != "function") return null;
      const Te = se.canvasPosToClientPos([V.pos[0], V.pos[1] - 32]), Qe = se.canvasPosToClientPos([V.pos[0] + V.size[0], V.pos[1] + V.size[1]]);
      return !Te || !Qe ? null : new DOMRect(Te[0], Te[1], Qe[0] - Te[0], Qe[1] - Te[1]);
    }
    function W(V) {
      var nt, yt, It, re, U, de, qe;
      const z = Ke(V.node_id, V.widget_idx);
      if (z) return z.getBoundingClientRect();
      const se = ((It = (yt = (nt = t.comfyApp) == null ? void 0 : nt.graph) == null ? void 0 : yt.getNodeById) == null ? void 0 : It.call(yt, String(V.node_id))) ?? ((de = (U = (re = t.comfyApp) == null ? void 0 : re.rootGraph) == null ? void 0 : U.getNodeById) == null ? void 0 : de.call(U, String(V.node_id)));
      if (!se || typeof V.widget_idx != "number" || !Array.isArray(se.widgets)) return null;
      const me = se.widgets[V.widget_idx];
      if (!me || typeof ((qe = t.comfyApp) == null ? void 0 : qe.canvasPosToClientPos) != "function") return E(se);
      const Te = 10, Qe = t.comfyApp.canvasPosToClientPos([se.pos[0] + Te, se.pos[1] + (me.y ?? 0)]), je = t.comfyApp.canvasPosToClientPos([se.pos[0] + se.size[0] - Te, se.pos[1] + (me.y ?? 0) + (me.computedHeight ?? 24)]);
      return !Qe || !je ? E(se) : new DOMRect(Qe[0], Qe[1], je[0] - Qe[0], je[1] - Qe[1]);
    }
    function ge(V) {
      var se, me, Te, Qe, je, nt;
      const z = ((Te = (me = (se = t.comfyApp) == null ? void 0 : se.graph) == null ? void 0 : me.getNodeById) == null ? void 0 : Te.call(me, String(V.node_id))) ?? ((nt = (je = (Qe = t.comfyApp) == null ? void 0 : Qe.rootGraph) == null ? void 0 : je.getNodeById) == null ? void 0 : nt.call(je, String(V.node_id)));
      return E(z);
    }
    const ke = D(() => (S.value, P.value.inputs.map((V, z) => {
      const se = I(W(V));
      return se ? {
        key: `input-${z}-${V.node_id}-${V.widget_idx ?? "na"}`,
        style: se,
        active: x.value === z
      } : null;
    }).filter((V) => !!V))), _e = D(() => (S.value, P.value.outputs.map((V, z) => {
      const se = I(ge(V));
      return se ? {
        key: `output-${z}-${V.node_id}-${V.selector ?? "primary"}`,
        style: se,
        active: C.value === z
      } : null;
    }).filter((V) => !!V)));
    function De(V) {
      var It, re, U, de, qe, ct, Et, at, $t, Ut;
      if (Se(V.target)) return null;
      const z = (It = t.comfyApp) == null ? void 0 : It.canvas;
      if (!z) return null;
      const se = (re = z.convertEventToCanvasOffset) == null ? void 0 : re.call(z, V);
      if (!se || se.length < 2) return null;
      const [me, Te] = se, Qe = z.graph || ((U = t.comfyApp) == null ? void 0 : U.graph) || ((de = t.comfyApp) == null ? void 0 : de.rootGraph), je = ((qe = Qe == null ? void 0 : Qe.getNodeOnPos) == null ? void 0 : qe.call(Qe, me, Te, z.visible_nodes)) || ((ct = z.getNodeOnPos) == null ? void 0 : ct.call(z, me, Te)) || He(V.target);
      if (!je) return null;
      const nt = (Et = je.getWidgetOnPos) == null ? void 0 : Et.call(je, me, Te, !0);
      if (nt)
        return { kind: "input", node: je, widget: nt, canvasX: me, canvasY: Te };
      const yt = ((at = je.getOutputOnPos) == null ? void 0 : at.call(je, [me, Te])) || ((Ut = ($t = je.constructor) == null ? void 0 : $t.nodeData) != null && Ut.output_node ? { name: je.title || je.type || "output", type: "image" } : null);
      return yt ? { kind: "output", node: je, output: yt, canvasX: me, canvasY: Te } : null;
    }
    function Oe(V, z) {
      var nt;
      const se = Array.isArray(V.widgets) ? V.widgets.indexOf(z) : -1, me = P.value.inputs.findIndex(
        (yt) => String(yt.node_id) === String(V.id) && yt.widget_idx === se
      );
      if (me >= 0) {
        x.value = me;
        return;
      }
      const Te = typeof ((nt = z == null ? void 0 : z.options) == null ? void 0 : nt.property) == "string" ? z.options.property : void 0, Qe = (z == null ? void 0 : z.name) || Te || "input", je = {
        name: fe(String(Qe), `input_${P.value.inputs.length + 1}`),
        display_name: String((z == null ? void 0 : z.name) || Te || `Input ${P.value.inputs.length + 1}`),
        type: Fe(z == null ? void 0 : z.type),
        node_id: String(V.id),
        widget_idx: se >= 0 ? se : void 0,
        field_key: Te,
        required: !0,
        default: (z == null ? void 0 : z.value) ?? ""
      };
      ee(je.type) && (je.min = A(z, "min"), je.max = A(z, "max")), ce(je.type) && (je.enum_values = pe(z)), P.value.inputs.push(je), x.value = P.value.inputs.length - 1, C.value = null;
    }
    function Me(V, z) {
      const se = Array.isArray(V.outputs) ? V.outputs.indexOf(z) : -1, me = se >= 0 ? `slot:${se}` : "primary", Te = P.value.outputs.findIndex(
        (je) => String(je.node_id) === String(V.id) && (je.selector || "primary") === me
      );
      if (Te >= 0) {
        C.value = Te;
        return;
      }
      const Qe = {
        name: fe(String((z == null ? void 0 : z.name) || "output"), `output_${P.value.outputs.length + 1}`),
        display_name: String((z == null ? void 0 : z.name) || `Output ${P.value.outputs.length + 1}`),
        type: Fe(z == null ? void 0 : z.type),
        node_id: String(V.id),
        selector: me
      };
      P.value.outputs.push(Qe), C.value = P.value.outputs.length - 1, x.value = null;
    }
    function Ie(V) {
      var me, Te, Qe;
      if (!r.value) {
        N.value = null, M.value = null;
        return;
      }
      const z = De(V);
      if (!z) {
        N.value = null, M.value = null;
        return;
      }
      if (z.kind === "input") {
        const je = Array.isArray(z.node.widgets) ? z.node.widgets.indexOf(z.widget) : -1, nt = I(((me = Ke(z.node.id, je)) == null ? void 0 : me.getBoundingClientRect()) ?? W({
          node_id: String(z.node.id),
          widget_idx: je >= 0 ? je : void 0
        }));
        if (!nt) {
          N.value = null, M.value = null;
          return;
        }
        N.value = {
          kind: "input",
          label: `${((Te = z.widget) == null ? void 0 : Te.name) || "widget"} · Node ${z.node.id}`
        }, M.value = { kind: "input", style: nt };
        return;
      }
      const se = I(E(z.node));
      if (!se) {
        N.value = null, M.value = null;
        return;
      }
      N.value = {
        kind: "output",
        label: `${((Qe = z.output) == null ? void 0 : Qe.name) || z.node.title || z.node.type || "output"} · Node ${z.node.id}`
      }, M.value = { kind: "output", style: se };
    }
    function Ge(V) {
      var me, Te, Qe;
      if (!r.value || !w.value || V.button !== 0) return;
      const z = De(V);
      if (!z) return;
      const se = (me = t.comfyApp) == null ? void 0 : me.canvas;
      if (se) {
        if (z.kind === "input") {
          V.preventDefault(), V.stopImmediatePropagation(), V.stopPropagation(), Array.isArray(se.graph_mouse) && (se.graph_mouse[0] = z.canvasX, se.graph_mouse[1] = z.canvasY), (Te = se.selectNode) == null || Te.call(se, z.node, !1), Oe(z.node, z.widget);
          return;
        }
        V.preventDefault(), V.stopImmediatePropagation(), V.stopPropagation(), Array.isArray(se.graph_mouse) && (se.graph_mouse[0] = z.canvasX, se.graph_mouse[1] = z.canvasY), (Qe = se.selectNode) == null || Qe.call(se, z.node, !1), Me(z.node, z.output);
      }
    }
    function ze() {
      document.addEventListener("pointerdown", Ge, !0), document.addEventListener("pointermove", Ie, !0);
    }
    function ve() {
      document.removeEventListener("pointerdown", Ge, !0), document.removeEventListener("pointermove", Ie, !0);
    }
    async function Q() {
      if (c.value) {
        u.value = !0, m.value = null;
        try {
          p.value = await o(c.value), w.value = Y(p.value.execution_contract);
        } catch (V) {
          m.value = V instanceof Error ? V.message : "Failed to load workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    async function Be() {
      if (!(!w.value || !c.value)) {
        d.value = !0, m.value = null;
        try {
          p.value = await n(c.value, w.value), w.value = Y(p.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Pe({ reopenPanel: !0 });
        } catch (V) {
          m.value = V instanceof Error ? V.message : "Failed to save workflow contract";
        } finally {
          d.value = !1;
        }
      }
    }
    async function be() {
      _.value = !0;
    }
    async function Ye() {
      if (c.value) {
        _.value = !1, v.value = !0, m.value = null;
        try {
          await l(c.value), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Pe({ reopenPanel: !0 });
        } catch (V) {
          m.value = V instanceof Error ? V.message : "Failed to delete workflow contract";
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
    function Pe(V) {
      r.value = !1, N.value = null, M.value = null, _.value = !1, V != null && V.reopenPanel && Ae();
    }
    async function B(V) {
      var me, Te;
      const se = (Te = (me = V.detail) == null ? void 0 : me.workflowName) == null ? void 0 : Te.trim();
      se && (c.value = se, x.value = null, C.value = null, y.value = !1, r.value = !0, await Q());
    }
    function ue(V) {
      if (V.key === "Escape" && r.value) {
        if (_.value) {
          _.value = !1;
          return;
        }
        Pe({ reopenPanel: !0 });
      }
    }
    function ae() {
      if (T != null) return;
      const V = () => {
        if (S.value += 1, !r.value) {
          T = null;
          return;
        }
        T = window.requestAnimationFrame(V);
      };
      T = window.requestAnimationFrame(V);
    }
    function Je() {
      T != null && (window.cancelAnimationFrame(T), T = null);
    }
    return kt(r, (V) => {
      V ? (ze(), ae()) : (ve(), Je());
    }), rt(() => {
      window.addEventListener("comfygit:open-io-mapping", B), window.addEventListener("keydown", ue);
    }), oa(() => {
      ve(), Je(), window.removeEventListener("comfygit:open-io-mapping", B), window.removeEventListener("keydown", ue);
    }), (V, z) => r.value ? (a(), i("div", sM, [
      s("div", oM, [
        (a(!0), i(j, null, we(ke.value, (se) => (a(), i("div", {
          key: se.key,
          class: Ue(["io-highlight", "io-highlight-input", { active: se.active }]),
          style: Wt(se.style)
        }, null, 6))), 128)),
        (a(!0), i(j, null, we(_e.value, (se) => (a(), i("div", {
          key: se.key,
          class: Ue(["io-highlight", "io-highlight-output", { active: se.active }]),
          style: Wt(se.style)
        }, null, 6))), 128)),
        M.value ? (a(), i("div", {
          key: 0,
          class: Ue(["io-highlight", M.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Wt(M.value.style)
        }, null, 6)) : h("", !0)
      ]),
      s("div", nM, [
        s("div", aM, [
          z[8] || (z[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", lM, f(c.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          N.value ? (a(), i("div", iM, " Hovering " + f(N.value.kind) + ": " + f(N.value.label), 1)) : h("", !0)
        ]),
        s("div", rM, [
          k(Ne, {
            size: "sm",
            variant: "secondary",
            onClick: z[0] || (z[0] = (se) => Pe({ reopenPanel: !0 }))
          }, {
            default: g(() => [...z[9] || (z[9] = [
              $(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("aside", cM, [
        s("div", uM, [
          u.value ? (a(), i("div", dM, " Loading workflow contract... ")) : m.value ? (a(), i("div", fM, f(m.value), 1)) : w.value ? (a(), i(j, { key: 2 }, [
            s("section", mM, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: z[1] || (z[1] = (se) => y.value = !y.value)
              }, [
                z[10] || (z[10] = s("span", null, "Contract Details", -1)),
                s("span", vM, f(y.value ? "▾" : "▸"), 1)
              ]),
              y.value ? (a(), i("div", pM, [
                k(Nt, { label: "Default Contract" }, {
                  default: g(() => [
                    k(wt, {
                      "model-value": w.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": Re
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                k(Nt, { label: "Display Name" }, {
                  default: g(() => [
                    k(wt, {
                      modelValue: P.value.display_name,
                      "onUpdate:modelValue": z[2] || (z[2] = (se) => P.value.display_name = se),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                k(Nt, { label: "Description" }, {
                  default: g(() => [
                    k(Co, {
                      modelValue: P.value.description,
                      "onUpdate:modelValue": z[3] || (z[3] = (se) => P.value.description = se),
                      rows: 2,
                      placeholder: "Optional description for this contract"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])) : h("", !0)
            ]),
            s("section", gM, [
              s("span", hM, f(F.value), 1),
              s("span", yM, f(P.value.inputs.length) + " input" + f(P.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", wM, f(P.value.outputs.length) + " output" + f(P.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", _M, [
              s("div", kM, [
                k(oo, { variant: "section" }, {
                  default: g(() => [...z[11] || (z[11] = [
                    $("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              P.value.inputs.length ? h("", !0) : (a(), i("div", bM, " No inputs configured. ")),
              (a(!0), i(j, null, we(P.value.inputs, (se, me) => (a(), i("div", {
                key: `input-${me}`,
                class: Ue(["item-card", { selected: x.value === me }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Te) => te(me)
                }, [
                  s("div", null, [
                    s("div", CM, f(se.name || `Input ${me + 1}`), 1),
                    s("div", xM, [
                      $(" Node " + f(se.node_id || "?"), 1),
                      se.widget_idx !== void 0 ? (a(), i(j, { key: 0 }, [
                        $(" · Widget " + f(se.widget_idx), 1)
                      ], 64)) : h("", !0)
                    ]),
                    s("div", SM, [
                      s("span", null, f(se.type || "string"), 1),
                      s("span", null, f(se.required ? "required" : "optional"), 1),
                      se.default !== void 0 && se.default !== "" ? (a(), i("span", IM, "default " + f(Le(se.default)), 1)) : h("", !0)
                    ])
                  ]),
                  k(Ne, {
                    size: "sm",
                    variant: "ghost",
                    onClick: mt((Te) => Ce(me), ["stop"])
                  }, {
                    default: g(() => [...z[12] || (z[12] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, $M),
                x.value === me ? (a(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: z[4] || (z[4] = mt(() => {
                  }, ["stop"]))
                }, [
                  k(Nt, { label: "Name" }, {
                    default: g(() => [
                      k(wt, {
                        modelValue: se.name,
                        "onUpdate:modelValue": (Te) => se.name = Te,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Nt, { label: "Display Name" }, {
                    default: g(() => [
                      k(wt, {
                        modelValue: se.display_name,
                        "onUpdate:modelValue": (Te) => se.display_name = Te,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Nt, { label: "Type" }, {
                    default: g(() => [
                      k(Nn, {
                        "model-value": se.type,
                        options: L,
                        "full-width": "",
                        "onUpdate:modelValue": (Te) => se.type = Te
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Nt, { label: "Required" }, {
                    default: g(() => [
                      k(Nn, {
                        "model-value": se.required ? "true" : "false",
                        options: O,
                        "full-width": "",
                        "onUpdate:modelValue": (Te) => se.required = Te === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Nt, {
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
                  ee(se.type) ? (a(), R(Nt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: g(() => [
                      k(wt, {
                        "model-value": he(se.min),
                        "full-width": "",
                        "onUpdate:modelValue": (Te) => se.min = ne(Te)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  ee(se.type) ? (a(), R(Nt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: g(() => [
                      k(wt, {
                        "model-value": he(se.max),
                        "full-width": "",
                        "onUpdate:modelValue": (Te) => se.max = ne(Te)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0),
                  ce(se.type) ? (a(), R(Nt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: g(() => [
                      k(Co, {
                        "model-value": K(se.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (Te) => se.enum_values = le(Te)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : h("", !0)
                ])) : h("", !0)
              ], 2))), 128))
            ]),
            s("section", EM, [
              s("div", TM, [
                k(oo, { variant: "section" }, {
                  default: g(() => [...z[13] || (z[13] = [
                    $("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              P.value.outputs.length ? h("", !0) : (a(), i("div", MM, " No outputs configured. ")),
              (a(!0), i(j, null, we(P.value.outputs, (se, me) => (a(), i("div", {
                key: `output-${me}`,
                class: Ue(["item-card", { selected: C.value === me }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Te) => q(me)
                }, [
                  s("div", null, [
                    s("div", RM, f(se.name || `Output ${me + 1}`), 1),
                    s("div", NM, [
                      $(" Node " + f(se.node_id || "?"), 1),
                      se.selector ? (a(), i(j, { key: 0 }, [
                        $(" · " + f(se.selector), 1)
                      ], 64)) : h("", !0)
                    ]),
                    s("div", LM, [
                      s("span", null, f(se.type || "file"), 1)
                    ])
                  ]),
                  k(Ne, {
                    size: "sm",
                    variant: "ghost",
                    onClick: mt((Te) => H(me), ["stop"])
                  }, {
                    default: g(() => [...z[14] || (z[14] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, PM),
                C.value === me ? (a(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: z[5] || (z[5] = mt(() => {
                  }, ["stop"]))
                }, [
                  k(Nt, { label: "Name" }, {
                    default: g(() => [
                      k(wt, {
                        modelValue: se.name,
                        "onUpdate:modelValue": (Te) => se.name = Te,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Nt, { label: "Display Name" }, {
                    default: g(() => [
                      k(wt, {
                        modelValue: se.display_name,
                        "onUpdate:modelValue": (Te) => se.display_name = Te,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(Nt, { label: "Type" }, {
                    default: g(() => [
                      k(Nn, {
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
        s("div", DM, [
          s("div", OM, [
            k(Ne, {
              variant: "secondary",
              onClick: z[6] || (z[6] = (se) => Pe({ reopenPanel: !0 }))
            }, {
              default: g(() => [...z[15] || (z[15] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", AM, [
            k(Ne, {
              variant: "danger",
              disabled: !J.value,
              loading: v.value,
              onClick: be
            }, {
              default: g(() => [...z[16] || (z[16] = [
                $(" Delete ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            k(Ne, {
              variant: "primary",
              loading: d.value,
              onClick: Be
            }, {
              default: g(() => [...z[17] || (z[17] = [
                $(" Save ", -1)
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
        onConfirm: Ye,
        onCancel: z[7] || (z[7] = (se) => _.value = !1)
      }, null, 8, ["message"])) : h("", !0)
    ])) : h("", !0);
  }
}), zM = /* @__PURE__ */ xe(UM, [["__scopeId", "data-v-13515b27"]]), VM = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', FM = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', BM = {
  comfy: VM,
  phosphor: FM
}, Sl = "comfy", vc = "comfygit-theme";
let Xs = null, pc = Sl;
function WM() {
  try {
    const e = localStorage.getItem(vc);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Sl;
}
function gc(e = Sl) {
  Xs && Xs.remove(), Xs = document.createElement("style"), Xs.id = "comfygit-theme-styles", Xs.setAttribute("data-theme", e), Xs.textContent = BM[e], document.head.appendChild(Xs), document.body.setAttribute("data-comfygit-theme", e), pc = e;
  try {
    localStorage.setItem(vc, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function GM() {
  return pc;
}
function jM(e) {
  gc(e);
}
function HM(e) {
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
const qM = WM();
gc(qM);
sessionStorage.removeItem("ComfyGit.LastView");
sessionStorage.removeItem("ComfyGit.LastSection");
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), jM(e);
  },
  getTheme: () => {
    const e = GM();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Ms = null, Yo = null, Xt = null, Xo = null, Uo = null, xi = null, zo = null, Si = null, Vo = null, Ii = null;
const xo = b(null);
let rn = "no_workspace", hc = !1;
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
        rn = o.state, hc = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function el() {
  var t;
  if (rn === "managed" || !hc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((t = o.textContent) == null ? void 0 : t.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function KM() {
  if (!xo.value) return !1;
  const e = xo.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || xo.value.has_changes;
}
function xn(e) {
  Wo(), Ms = document.createElement("div"), Ms.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ms.appendChild(t), Ms.addEventListener("click", (n) => {
    n.target === Ms && Wo();
  });
  const o = (n) => {
    n.key === "Escape" && (Wo(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), Yo = fn({
    render: () => Po(HE, {
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
function Ei(e) {
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
    render: () => Po(uc, {
      status: xo.value,
      onClose: Fo,
      onCommitted: (l) => {
        Fo(), JM(l.success, l.message), Ln().then(Zo);
      }
    })
  }), Xo.mount(Xt), document.body.appendChild(Xt);
}
function Fo() {
  Xo && (Xo.unmount(), Xo = null), Xt && (Xt.remove(), Xt = null);
}
function JM(e, t) {
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
function QM() {
  Uo || (Uo = document.createElement("div"), Uo.className = "comfygit-download-queue-root", xi = fn({
    render: () => Po(VT)
  }), xi.mount(Uo), document.body.appendChild(Uo), console.log("[ComfyGit] Model download queue mounted"));
}
function YM() {
  zo || (zo = document.createElement("div"), zo.className = "comfygit-missing-resources-root", Si = fn({
    render: () => Po(tM)
  }), Si.mount(zo), document.body.appendChild(zo), console.log("[ComfyGit] Missing resources popup mounted"));
}
function XM() {
  Vo || (Vo = document.createElement("div"), Vo.className = "comfygit-io-mapping-root", Ii = fn({
    render: () => Po(zM, {
      comfyApp: Zt
    })
  }), Ii.mount(Vo), document.body.appendChild(Vo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let Kt = null;
function Zo() {
  if (!Kt) return;
  const e = Kt.querySelector(".commit-indicator");
  e && (e.style.display = KM() ? "block" : "none");
}
function tl() {
  if (!Kt) return;
  const e = rn !== "managed";
  Kt.disabled = e, Kt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const yc = document.createElement("style");
yc.textContent = `
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
document.head.appendChild(yc);
Zt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => xn()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        Kt && !Kt.disabled && Ei(Kt);
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
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = xn, Kt = document.createElement("button"), Kt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Kt.innerHTML = 'Commit <span class="commit-indicator"></span>', Kt.title = "Quick Commit", Kt.onclick = () => Ei(Kt), e.appendChild(t), e.appendChild(Kt), (r = (l = Zt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Zt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), QM(), YM(), XM(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      xn(u);
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
        const C = document.createElement("div");
        C.textContent = "Node installation failed", C.style.cssText = "font-weight: 600; color: #e53935;", x.appendChild(C);
        const S = document.createElement("div");
        S.textContent = "Dependency conflict detected", S.style.cssText = "font-size: 12px; opacity: 0.8;", x.appendChild(S), y.appendChild(x);
        const N = document.createElement("button");
        N.textContent = "View Logs", N.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, N.onmouseover = () => N.style.background = "#c62828", N.onmouseout = () => N.style.background = "#e53935", N.onclick = () => {
          y.remove(), xn("debug-env");
        }, y.appendChild(N);
        const M = document.createElement("button");
        M.textContent = "×", M.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, M.onmouseover = () => M.style.opacity = "1", M.onmouseout = () => M.style.opacity = "0.6", M.onclick = () => y.remove(), y.appendChild(M), document.body.appendChild(y), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
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
        const C = document.createElement("div");
        C.textContent = "To apply changes, please restart ComfyUI", C.style.cssText = "font-weight: 500; color: #fff;", x.appendChild(C);
        const S = document.createElement("div");
        S.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, S.style.cssText = "font-size: 12px; opacity: 0.7;", x.appendChild(S), y.appendChild(x);
        const N = document.createElement("button");
        N.textContent = "Apply Changes", N.style.cssText = `
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
        `, N.onmouseover = () => N.style.background = "rgba(255,255,255,0.1)", N.onmouseout = () => N.style.background = "transparent", N.onclick = async () => {
          N.disabled = !0, N.textContent = "Restarting...", N.style.opacity = "0.7", C.textContent = "Restarting...", S.textContent = "Applying changes, please wait...";
          try {
            const T = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Zt.refreshComboInNodes && (await Zt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", C.textContent = "Nodes Installed", C.style.color = "#4caf50", S.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, y.style.borderColor = "#4caf50", N.style.display = "none", setTimeout(() => {
                  y.remove();
                }, 3e3);
              } catch (L) {
                console.error("[ComfyGit] Failed to refresh nodes:", L), _.textContent = "✅", C.textContent = "Restart Complete", C.style.color = "#4caf50", S.textContent = "Refresh the page to load new nodes.", y.style.borderColor = "#4caf50", N.style.display = "none";
              }
            };
            n.addEventListener("reconnected", T, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (T) {
            console.error("[ComfyGit] Failed to restart:", T), C.textContent = "Restart Failed", C.style.color = "#e53935", S.textContent = "Could not restart server. Try again.", y.style.borderColor = "#e53935", N.textContent = "Try Again", N.disabled = !1, N.style.opacity = "1";
          }
        }, y.appendChild(N);
        const M = document.createElement("button");
        M.textContent = "×", M.title = "Dismiss (restart later)", M.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, M.onmouseover = () => M.style.opacity = "1", M.onmouseout = () => M.style.opacity = "0.6", M.onclick = () => y.remove(), y.appendChild(M), document.body.appendChild(y), console.log(`[ComfyGit] Restart required notification displayed (${p} packages installed)`);
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
        const w = HM(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: y = 1 } = w.detail || {};
        v(y);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
