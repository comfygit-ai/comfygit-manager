import { app as Os } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ia(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) t[o] = 1;
  return (o) => o in t;
}
const et = {}, ro = [], fs = () => {
}, Xl = () => !1, Rn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ea = (e) => e.startsWith("onUpdate:"), mt = Object.assign, Ta = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, Fr = Object.prototype.hasOwnProperty, Xe = (e, t) => Fr.call(e, t), Ae = Array.isArray, co = (e) => Jo(e) === "[object Map]", yo = (e) => Jo(e) === "[object Set]", sl = (e) => Jo(e) === "[object Date]", ze = (e) => typeof e == "function", it = (e) => typeof e == "string", Qt = (e) => typeof e == "symbol", Ze = (e) => e !== null && typeof e == "object", Ql = (e) => (Ze(e) || ze(e)) && ze(e.then) && ze(e.catch), Zl = Object.prototype.toString, Jo = (e) => Zl.call(e), Br = (e) => Jo(e).slice(8, -1), ei = (e) => Jo(e) === "[object Object]", Pa = (e) => it(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Mo = /* @__PURE__ */ Ia(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Mn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((o) => t[o] || (t[o] = e(o)));
}, Vr = /-\w/g, Bt = Mn(
  (e) => e.replace(Vr, (t) => t.slice(1).toUpperCase())
), Wr = /\B([A-Z])/g, zs = Mn(
  (e) => e.replace(Wr, "-$1").toLowerCase()
), Dn = Mn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Hn = Mn(
  (e) => e ? `on${Dn(e)}` : ""
), Ns = (e, t) => !Object.is(e, t), fn = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, ti = (e, t, o, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, Ln = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Gr = (e) => {
  const t = it(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ol;
const On = () => ol || (ol = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vt(e) {
  if (Ae(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = it(n) ? qr(n) : Vt(n);
      if (l)
        for (const i in l)
          t[i] = l[i];
    }
    return t;
  } else if (it(e) || Ze(e))
    return e;
}
const jr = /;(?![^(]*\))/g, Hr = /:([^]+)/, Kr = /\/\*[^]*?\*\//g;
function qr(e) {
  const t = {};
  return e.replace(Kr, "").split(jr).forEach((o) => {
    if (o) {
      const n = o.split(Hr);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function xe(e) {
  let t = "";
  if (it(e))
    t = e;
  else if (Ae(e))
    for (let o = 0; o < e.length; o++) {
      const n = xe(e[o]);
      n && (t += n + " ");
    }
  else if (Ze(e))
    for (const o in e)
      e[o] && (t += o + " ");
  return t.trim();
}
const Yr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Jr = /* @__PURE__ */ Ia(Yr);
function si(e) {
  return !!e || e === "";
}
function Xr(e, t) {
  if (e.length !== t.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = Qs(e[n], t[n]);
  return o;
}
function Qs(e, t) {
  if (e === t) return !0;
  let o = sl(e), n = sl(t);
  if (o || n)
    return o && n ? e.getTime() === t.getTime() : !1;
  if (o = Qt(e), n = Qt(t), o || n)
    return e === t;
  if (o = Ae(e), n = Ae(t), o || n)
    return o && n ? Xr(e, t) : !1;
  if (o = Ze(e), n = Ze(t), o || n) {
    if (!o || !n)
      return !1;
    const l = Object.keys(e).length, i = Object.keys(t).length;
    if (l !== i)
      return !1;
    for (const r in e) {
      const u = e.hasOwnProperty(r), d = t.hasOwnProperty(r);
      if (u && !d || !u && d || !Qs(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ra(e, t) {
  return e.findIndex((o) => Qs(o, t));
}
const oi = (e) => !!(e && e.__v_isRef === !0), f = (e) => it(e) ? e : e == null ? "" : Ae(e) || Ze(e) && (e.toString === Zl || !ze(e.toString)) ? oi(e) ? f(e.value) : JSON.stringify(e, ni, 2) : String(e), ni = (e, t) => oi(t) ? ni(e, t.value) : co(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [n, l], i) => (o[Kn(n, i) + " =>"] = l, o),
    {}
  )
} : yo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => Kn(o))
} : Qt(t) ? Kn(t) : Ze(t) && !Ae(t) && !ei(t) ? String(t) : t, Kn = (e, t = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Qt(e) ? `Symbol(${(o = e.description) != null ? o : t})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Mt;
class Qr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Mt, !t && Mt && (this.index = (Mt.scopes || (Mt.scopes = [])).push(
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
      const o = Mt;
      try {
        return Mt = this, t();
      } finally {
        Mt = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Mt, Mt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Mt = this.prevScope, this.prevScope = void 0);
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
function Zr() {
  return Mt;
}
let st;
const qn = /* @__PURE__ */ new WeakSet();
class ai {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Mt && Mt.active && Mt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, qn.has(this) && (qn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ii(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, nl(this), ri(this);
    const t = st, o = Yt;
    st = this, Yt = !0;
    try {
      return this.fn();
    } finally {
      ci(this), st = t, Yt = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        La(t);
      this.deps = this.depsTail = void 0, nl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? qn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    da(this) && this.run();
  }
  get dirty() {
    return da(this);
  }
}
let li = 0, Do, Lo;
function ii(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Lo, Lo = e;
    return;
  }
  e.next = Do, Do = e;
}
function Ma() {
  li++;
}
function Da() {
  if (--li > 0)
    return;
  if (Lo) {
    let t = Lo;
    for (Lo = void 0; t; ) {
      const o = t.next;
      t.next = void 0, t.flags &= -9, t = o;
    }
  }
  let e;
  for (; Do; ) {
    let t = Do;
    for (Do = void 0; t; ) {
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
function ri(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ci(e) {
  let t, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), La(n), ec(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = t, e.depsTail = o;
}
function da(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ui(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ui(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Vo) || (e.globalVersion = Vo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !da(e))))
    return;
  e.flags |= 2;
  const t = e.dep, o = st, n = Yt;
  st = e, Yt = !0;
  try {
    ri(e);
    const l = e.fn(e._value);
    (t.version === 0 || Ns(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    st = o, Yt = n, ci(e), e.flags &= -3;
  }
}
function La(e, t = !1) {
  const { dep: o, prevSub: n, nextSub: l } = e;
  if (n && (n.nextSub = l, e.prevSub = void 0), l && (l.prevSub = n, e.nextSub = void 0), o.subs === e && (o.subs = n, !n && o.computed)) {
    o.computed.flags &= -5;
    for (let i = o.computed.deps; i; i = i.nextDep)
      La(i, !0);
  }
  !t && !--o.sc && o.map && o.map.delete(o.key);
}
function ec(e) {
  const { prevDep: t, nextDep: o } = e;
  t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
}
let Yt = !0;
const di = [];
function $s() {
  di.push(Yt), Yt = !1;
}
function Cs() {
  const e = di.pop();
  Yt = e === void 0 ? !0 : e;
}
function nl(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const o = st;
    st = void 0;
    try {
      t();
    } finally {
      st = o;
    }
  }
}
let Vo = 0;
class tc {
  constructor(t, o) {
    this.sub = t, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Oa {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!st || !Yt || st === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== st)
      o = this.activeLink = new tc(st, this), st.deps ? (o.prevDep = st.depsTail, st.depsTail.nextDep = o, st.depsTail = o) : st.deps = st.depsTail = o, fi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const n = o.nextDep;
      n.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = n), o.prevDep = st.depsTail, o.nextDep = void 0, st.depsTail.nextDep = o, st.depsTail = o, st.deps === o && (st.deps = n);
    }
    return o;
  }
  trigger(t) {
    this.version++, Vo++, this.notify(t);
  }
  notify(t) {
    Ma();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      Da();
    }
  }
}
function fi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        fi(n);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const fa = /* @__PURE__ */ new WeakMap(), Js = Symbol(
  ""
), ma = Symbol(
  ""
), Wo = Symbol(
  ""
);
function bt(e, t, o) {
  if (Yt && st) {
    let n = fa.get(e);
    n || fa.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new Oa()), l.map = n, l.key = o), l.track();
  }
}
function bs(e, t, o, n, l, i) {
  const r = fa.get(e);
  if (!r) {
    Vo++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Ma(), t === "clear")
    r.forEach(u);
  else {
    const d = Ae(e), m = d && Pa(o);
    if (d && o === "length") {
      const v = Number(n);
      r.forEach((h, w) => {
        (w === "length" || w === Wo || !Qt(w) && w >= v) && u(h);
      });
    } else
      switch ((o !== void 0 || r.has(void 0)) && u(r.get(o)), m && u(r.get(Wo)), t) {
        case "add":
          d ? m && u(r.get("length")) : (u(r.get(Js)), co(e) && u(r.get(ma)));
          break;
        case "delete":
          d || (u(r.get(Js)), co(e) && u(r.get(ma)));
          break;
        case "set":
          co(e) && u(r.get(Js));
          break;
      }
  }
  Da();
}
function so(e) {
  const t = Ye(e);
  return t === e ? t : (bt(t, "iterate", Wo), zt(e) ? t : t.map(Zt));
}
function Nn(e) {
  return bt(e = Ye(e), "iterate", Wo), e;
}
function Ms(e, t) {
  return xs(e) ? Xs(e) ? po(Zt(t)) : po(t) : Zt(t);
}
const sc = {
  __proto__: null,
  [Symbol.iterator]() {
    return Yn(this, Symbol.iterator, (e) => Ms(this, e));
  },
  concat(...e) {
    return so(this).concat(
      ...e.map((t) => Ae(t) ? so(t) : t)
    );
  },
  entries() {
    return Yn(this, "entries", (e) => (e[1] = Ms(this, e[1]), e));
  },
  every(e, t) {
    return hs(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return hs(
      this,
      "filter",
      e,
      t,
      (o) => o.map((n) => Ms(this, n)),
      arguments
    );
  },
  find(e, t) {
    return hs(
      this,
      "find",
      e,
      t,
      (o) => Ms(this, o),
      arguments
    );
  },
  findIndex(e, t) {
    return hs(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return hs(
      this,
      "findLast",
      e,
      t,
      (o) => Ms(this, o),
      arguments
    );
  },
  findLastIndex(e, t) {
    return hs(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return hs(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Jn(this, "includes", e);
  },
  indexOf(...e) {
    return Jn(this, "indexOf", e);
  },
  join(e) {
    return so(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Jn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return hs(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return xo(this, "pop");
  },
  push(...e) {
    return xo(this, "push", e);
  },
  reduce(e, ...t) {
    return al(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return al(this, "reduceRight", e, t);
  },
  shift() {
    return xo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return hs(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return xo(this, "splice", e);
  },
  toReversed() {
    return so(this).toReversed();
  },
  toSorted(e) {
    return so(this).toSorted(e);
  },
  toSpliced(...e) {
    return so(this).toSpliced(...e);
  },
  unshift(...e) {
    return xo(this, "unshift", e);
  },
  values() {
    return Yn(this, "values", (e) => Ms(this, e));
  }
};
function Yn(e, t, o) {
  const n = Nn(e), l = n[t]();
  return n !== e && !zt(e) && (l._next = l.next, l.next = () => {
    const i = l._next();
    return i.done || (i.value = o(i.value)), i;
  }), l;
}
const oc = Array.prototype;
function hs(e, t, o, n, l, i) {
  const r = Nn(e), u = r !== e && !zt(e), d = r[t];
  if (d !== oc[t]) {
    const h = d.apply(e, i);
    return u ? Zt(h) : h;
  }
  let m = o;
  r !== e && (u ? m = function(h, w) {
    return o.call(this, Ms(e, h), w, e);
  } : o.length > 2 && (m = function(h, w) {
    return o.call(this, h, w, e);
  }));
  const v = d.call(r, m, n);
  return u && l ? l(v) : v;
}
function al(e, t, o, n) {
  const l = Nn(e);
  let i = o;
  return l !== e && (zt(e) ? o.length > 3 && (i = function(r, u, d) {
    return o.call(this, r, u, d, e);
  }) : i = function(r, u, d) {
    return o.call(this, r, Ms(e, u), d, e);
  }), l[t](i, ...n);
}
function Jn(e, t, o) {
  const n = Ye(e);
  bt(n, "iterate", Wo);
  const l = n[t](...o);
  return (l === -1 || l === !1) && Ua(o[0]) ? (o[0] = Ye(o[0]), n[t](...o)) : l;
}
function xo(e, t, o = []) {
  $s(), Ma();
  const n = Ye(e)[t].apply(e, o);
  return Da(), Cs(), n;
}
const nc = /* @__PURE__ */ Ia("__proto__,__v_isRef,__isVue"), mi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qt)
);
function ac(e) {
  Qt(e) || (e = String(e));
  const t = Ye(this);
  return bt(t, "has", e), t.hasOwnProperty(e);
}
class vi {
  constructor(t = !1, o = !1) {
    this._isReadonly = t, this._isShallow = o;
  }
  get(t, o, n) {
    if (o === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, i = this._isShallow;
    if (o === "__v_isReactive")
      return !l;
    if (o === "__v_isReadonly")
      return l;
    if (o === "__v_isShallow")
      return i;
    if (o === "__v_raw")
      return n === (l ? i ? pc : yi : i ? hi : gi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const r = Ae(t);
    if (!l) {
      let d;
      if (r && (d = sc[o]))
        return d;
      if (o === "hasOwnProperty")
        return ac;
    }
    const u = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      $t(t) ? t : n
    );
    if ((Qt(o) ? mi.has(o) : nc(o)) || (l || bt(t, "get", o), i))
      return u;
    if ($t(u)) {
      const d = r && Pa(o) ? u : u.value;
      return l && Ze(d) ? wn(d) : d;
    }
    return Ze(u) ? l ? wn(u) : Fs(u) : u;
  }
}
class pi extends vi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, n, l) {
    let i = t[o];
    const r = Ae(t) && Pa(o);
    if (!this._isShallow) {
      const m = xs(i);
      if (!zt(n) && !xs(n) && (i = Ye(i), n = Ye(n)), !r && $t(i) && !$t(n))
        return m || (i.value = n), !0;
    }
    const u = r ? Number(o) < t.length : Xe(t, o), d = Reflect.set(
      t,
      o,
      n,
      $t(t) ? t : l
    );
    return t === Ye(l) && (u ? Ns(n, i) && bs(t, "set", o, n) : bs(t, "add", o, n)), d;
  }
  deleteProperty(t, o) {
    const n = Xe(t, o);
    t[o];
    const l = Reflect.deleteProperty(t, o);
    return l && n && bs(t, "delete", o, void 0), l;
  }
  has(t, o) {
    const n = Reflect.has(t, o);
    return (!Qt(o) || !mi.has(o)) && bt(t, "has", o), n;
  }
  ownKeys(t) {
    return bt(
      t,
      "iterate",
      Ae(t) ? "length" : Js
    ), Reflect.ownKeys(t);
  }
}
class lc extends vi {
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
const ic = /* @__PURE__ */ new pi(), rc = /* @__PURE__ */ new lc(), cc = /* @__PURE__ */ new pi(!0);
const va = (e) => e, sn = (e) => Reflect.getPrototypeOf(e);
function uc(e, t, o) {
  return function(...n) {
    const l = this.__v_raw, i = Ye(l), r = co(i), u = e === "entries" || e === Symbol.iterator && r, d = e === "keys" && r, m = l[e](...n), v = o ? va : t ? po : Zt;
    return !t && bt(
      i,
      "iterate",
      d ? ma : Js
    ), {
      // iterator protocol
      next() {
        const { value: h, done: w } = m.next();
        return w ? { value: h, done: w } : {
          value: u ? [v(h[0]), v(h[1])] : v(h),
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
function on(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function dc(e, t) {
  const o = {
    get(l) {
      const i = this.__v_raw, r = Ye(i), u = Ye(l);
      e || (Ns(l, u) && bt(r, "get", l), bt(r, "get", u));
      const { has: d } = sn(r), m = t ? va : e ? po : Zt;
      if (d.call(r, l))
        return m(i.get(l));
      if (d.call(r, u))
        return m(i.get(u));
      i !== r && i.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && bt(Ye(l), "iterate", Js), l.size;
    },
    has(l) {
      const i = this.__v_raw, r = Ye(i), u = Ye(l);
      return e || (Ns(l, u) && bt(r, "has", l), bt(r, "has", u)), l === u ? i.has(l) : i.has(l) || i.has(u);
    },
    forEach(l, i) {
      const r = this, u = r.__v_raw, d = Ye(u), m = t ? va : e ? po : Zt;
      return !e && bt(d, "iterate", Js), u.forEach((v, h) => l.call(i, m(v), m(h), r));
    }
  };
  return mt(
    o,
    e ? {
      add: on("add"),
      set: on("set"),
      delete: on("delete"),
      clear: on("clear")
    } : {
      add(l) {
        !t && !zt(l) && !xs(l) && (l = Ye(l));
        const i = Ye(this);
        return sn(i).has.call(i, l) || (i.add(l), bs(i, "add", l, l)), this;
      },
      set(l, i) {
        !t && !zt(i) && !xs(i) && (i = Ye(i));
        const r = Ye(this), { has: u, get: d } = sn(r);
        let m = u.call(r, l);
        m || (l = Ye(l), m = u.call(r, l));
        const v = d.call(r, l);
        return r.set(l, i), m ? Ns(i, v) && bs(r, "set", l, i) : bs(r, "add", l, i), this;
      },
      delete(l) {
        const i = Ye(this), { has: r, get: u } = sn(i);
        let d = r.call(i, l);
        d || (l = Ye(l), d = r.call(i, l)), u && u.call(i, l);
        const m = i.delete(l);
        return d && bs(i, "delete", l, void 0), m;
      },
      clear() {
        const l = Ye(this), i = l.size !== 0, r = l.clear();
        return i && bs(
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
    o[l] = uc(l, e, t);
  }), o;
}
function Na(e, t) {
  const o = dc(e, t);
  return (n, l, i) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    Xe(o, l) && l in n ? o : n,
    l,
    i
  );
}
const fc = {
  get: /* @__PURE__ */ Na(!1, !1)
}, mc = {
  get: /* @__PURE__ */ Na(!1, !0)
}, vc = {
  get: /* @__PURE__ */ Na(!0, !1)
};
const gi = /* @__PURE__ */ new WeakMap(), hi = /* @__PURE__ */ new WeakMap(), yi = /* @__PURE__ */ new WeakMap(), pc = /* @__PURE__ */ new WeakMap();
function gc(e) {
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
function hc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : gc(Br(e));
}
function Fs(e) {
  return xs(e) ? e : Aa(
    e,
    !1,
    ic,
    fc,
    gi
  );
}
function yc(e) {
  return Aa(
    e,
    !1,
    cc,
    mc,
    hi
  );
}
function wn(e) {
  return Aa(
    e,
    !0,
    rc,
    vc,
    yi
  );
}
function Aa(e, t, o, n, l) {
  if (!Ze(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = hc(e);
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
function Xs(e) {
  return xs(e) ? Xs(e.__v_raw) : !!(e && e.__v_isReactive);
}
function xs(e) {
  return !!(e && e.__v_isReadonly);
}
function zt(e) {
  return !!(e && e.__v_isShallow);
}
function Ua(e) {
  return e ? !!e.__v_raw : !1;
}
function Ye(e) {
  const t = e && e.__v_raw;
  return t ? Ye(t) : e;
}
function wc(e) {
  return !Xe(e, "__v_skip") && Object.isExtensible(e) && ti(e, "__v_skip", !0), e;
}
const Zt = (e) => Ze(e) ? Fs(e) : e, po = (e) => Ze(e) ? wn(e) : e;
function $t(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return bc(e, !1);
}
function bc(e, t) {
  return $t(e) ? e : new _c(e, t);
}
class _c {
  constructor(t, o) {
    this.dep = new Oa(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? t : Ye(t), this._value = o ? t : Zt(t), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const o = this._rawValue, n = this.__v_isShallow || zt(t) || xs(t);
    t = n ? t : Ye(t), Ns(t, o) && (this._rawValue = t, this._value = n ? t : Zt(t), this.dep.trigger());
  }
}
function Ue(e) {
  return $t(e) ? e.value : e;
}
const kc = {
  get: (e, t, o) => t === "__v_raw" ? e : Ue(Reflect.get(e, t, o)),
  set: (e, t, o, n) => {
    const l = e[t];
    return $t(l) && !$t(o) ? (l.value = o, !0) : Reflect.set(e, t, o, n);
  }
};
function wi(e) {
  return Xs(e) ? e : new Proxy(e, kc);
}
class $c {
  constructor(t, o, n) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new Oa(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Vo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    st !== this)
      return ii(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ui(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Cc(e, t, o = !1) {
  let n, l;
  return ze(e) ? n = e : (n = e.get, l = e.set), new $c(n, l, o);
}
const nn = {}, bn = /* @__PURE__ */ new WeakMap();
let qs;
function xc(e, t = !1, o = qs) {
  if (o) {
    let n = bn.get(o);
    n || bn.set(o, n = []), n.push(e);
  }
}
function Sc(e, t, o = et) {
  const { immediate: n, deep: l, once: i, scheduler: r, augmentJob: u, call: d } = o, m = (S) => l ? S : zt(S) || l === !1 || l === 0 ? _s(S, 1) : _s(S);
  let v, h, w, p, _ = !1, x = !1;
  if ($t(e) ? (h = () => e.value, _ = zt(e)) : Xs(e) ? (h = () => m(e), _ = !0) : Ae(e) ? (x = !0, _ = e.some((S) => Xs(S) || zt(S)), h = () => e.map((S) => {
    if ($t(S))
      return S.value;
    if (Xs(S))
      return m(S);
    if (ze(S))
      return d ? d(S, 2) : S();
  })) : ze(e) ? t ? h = d ? () => d(e, 2) : e : h = () => {
    if (w) {
      $s();
      try {
        w();
      } finally {
        Cs();
      }
    }
    const S = qs;
    qs = v;
    try {
      return d ? d(e, 3, [p]) : e(p);
    } finally {
      qs = S;
    }
  } : h = fs, t && l) {
    const S = h, q = l === !0 ? 1 / 0 : l;
    h = () => _s(S(), q);
  }
  const $ = Zr(), P = () => {
    v.stop(), $ && $.active && Ta($.effects, v);
  };
  if (i && t) {
    const S = t;
    t = (...q) => {
      S(...q), P();
    };
  }
  let N = x ? new Array(e.length).fill(nn) : nn;
  const T = (S) => {
    if (!(!(v.flags & 1) || !v.dirty && !S))
      if (t) {
        const q = v.run();
        if (l || _ || (x ? q.some((B, A) => Ns(B, N[A])) : Ns(q, N))) {
          w && w();
          const B = qs;
          qs = v;
          try {
            const A = [
              q,
              // pass undefined as the old value when it's changed for the first time
              N === nn ? void 0 : x && N[0] === nn ? [] : N,
              p
            ];
            N = q, d ? d(t, 3, A) : (
              // @ts-expect-error
              t(...A)
            );
          } finally {
            qs = B;
          }
        }
      } else
        v.run();
  };
  return u && u(T), v = new ai(h), v.scheduler = r ? () => r(T, !1) : T, p = (S) => xc(S, !1, v), w = v.onStop = () => {
    const S = bn.get(v);
    if (S) {
      if (d)
        d(S, 4);
      else
        for (const q of S) q();
      bn.delete(v);
    }
  }, t ? n ? T(!0) : N = v.run() : r ? r(T.bind(null, !0), !0) : v.run(), P.pause = v.pause.bind(v), P.resume = v.resume.bind(v), P.stop = P, P;
}
function _s(e, t = 1 / 0, o) {
  if (t <= 0 || !Ze(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= t))
    return e;
  if (o.set(e, t), t--, $t(e))
    _s(e.value, t, o);
  else if (Ae(e))
    for (let n = 0; n < e.length; n++)
      _s(e[n], t, o);
  else if (yo(e) || co(e))
    e.forEach((n) => {
      _s(n, t, o);
    });
  else if (ei(e)) {
    for (const n in e)
      _s(e[n], t, o);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && _s(e[n], t, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Xo(e, t, o, n) {
  try {
    return n ? e(...n) : e();
  } catch (l) {
    An(l, t, o);
  }
}
function es(e, t, o, n) {
  if (ze(e)) {
    const l = Xo(e, t, o, n);
    return l && Ql(l) && l.catch((i) => {
      An(i, t, o);
    }), l;
  }
  if (Ae(e)) {
    const l = [];
    for (let i = 0; i < e.length; i++)
      l.push(es(e[i], t, o, n));
    return l;
  }
}
function An(e, t, o, n = !0) {
  const l = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || et;
  if (t) {
    let u = t.parent;
    const d = t.proxy, m = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; u; ) {
      const v = u.ec;
      if (v) {
        for (let h = 0; h < v.length; h++)
          if (v[h](e, d, m) === !1)
            return;
      }
      u = u.parent;
    }
    if (i) {
      $s(), Xo(i, null, 10, [
        e,
        d,
        m
      ]), Cs();
      return;
    }
  }
  Ic(e, o, l, n, r);
}
function Ic(e, t, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const It = [];
let cs = -1;
const uo = [];
let Ds = null, ao = 0;
const bi = /* @__PURE__ */ Promise.resolve();
let _n = null;
function Qo(e) {
  const t = _n || bi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ec(e) {
  let t = cs + 1, o = It.length;
  for (; t < o; ) {
    const n = t + o >>> 1, l = It[n], i = Go(l);
    i < e || i === e && l.flags & 2 ? t = n + 1 : o = n;
  }
  return t;
}
function za(e) {
  if (!(e.flags & 1)) {
    const t = Go(e), o = It[It.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Go(o) ? It.push(e) : It.splice(Ec(t), 0, e), e.flags |= 1, _i();
  }
}
function _i() {
  _n || (_n = bi.then($i));
}
function Tc(e) {
  Ae(e) ? uo.push(...e) : Ds && e.id === -1 ? Ds.splice(ao + 1, 0, e) : e.flags & 1 || (uo.push(e), e.flags |= 1), _i();
}
function ll(e, t, o = cs + 1) {
  for (; o < It.length; o++) {
    const n = It[o];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      It.splice(o, 1), o--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function ki(e) {
  if (uo.length) {
    const t = [...new Set(uo)].sort(
      (o, n) => Go(o) - Go(n)
    );
    if (uo.length = 0, Ds) {
      Ds.push(...t);
      return;
    }
    for (Ds = t, ao = 0; ao < Ds.length; ao++) {
      const o = Ds[ao];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Ds = null, ao = 0;
  }
}
const Go = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function $i(e) {
  try {
    for (cs = 0; cs < It.length; cs++) {
      const t = It[cs];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Xo(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; cs < It.length; cs++) {
      const t = It[cs];
      t && (t.flags &= -2);
    }
    cs = -1, It.length = 0, ki(), _n = null, (It.length || uo.length) && $i();
  }
}
let gt = null, Ci = null;
function kn(e) {
  const t = gt;
  return gt = e, Ci = e && e.type.__scopeId || null, t;
}
function g(e, t = gt, o) {
  if (!t || e._n)
    return e;
  const n = (...l) => {
    n._d && xn(-1);
    const i = kn(t);
    let r;
    try {
      r = e(...l);
    } finally {
      kn(i), n._d && xn(1);
    }
    return r;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function He(e, t) {
  if (gt === null)
    return e;
  const o = Vn(gt), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [i, r, u, d = et] = t[l];
    i && (ze(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && _s(r), n.push({
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
function Gs(e, t, o, n) {
  const l = e.dirs, i = t && t.dirs;
  for (let r = 0; r < l.length; r++) {
    const u = l[r];
    i && (u.oldValue = i[r].value);
    let d = u.dir[n];
    d && ($s(), es(d, o, 8, [
      e.el,
      u,
      e,
      t
    ]), Cs());
  }
}
const xi = Symbol("_vte"), Si = (e) => e.__isTeleport, Oo = (e) => e && (e.disabled || e.disabled === ""), il = (e) => e && (e.defer || e.defer === ""), rl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, cl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, pa = (e, t) => {
  const o = e && e.to;
  return it(o) ? t ? t(o) : null : o;
}, Ii = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, o, n, l, i, r, u, d, m) {
    const {
      mc: v,
      pc: h,
      pbc: w,
      o: { insert: p, querySelector: _, createText: x, createComment: $ }
    } = m, P = Oo(t.props);
    let { shapeFlag: N, children: T, dynamicChildren: S } = t;
    if (e == null) {
      const q = t.el = x(""), B = t.anchor = x("");
      p(q, o, n), p(B, o, n);
      const A = (E, O) => {
        N & 16 && v(
          T,
          E,
          O,
          l,
          i,
          r,
          u,
          d
        );
      }, I = () => {
        const E = t.target = pa(t.props, _), O = Ei(E, t, x, p);
        E && (r !== "svg" && rl(E) ? r = "svg" : r !== "mathml" && cl(E) && (r = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(E), P || (A(E, O), mn(t, !1)));
      };
      P && (A(o, B), mn(t, !0)), il(t.props) ? (t.el.__isMounted = !1, St(() => {
        I(), delete t.el.__isMounted;
      }, i)) : I();
    } else {
      if (il(t.props) && e.el.__isMounted === !1) {
        St(() => {
          Ii.process(
            e,
            t,
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
      t.el = e.el, t.targetStart = e.targetStart;
      const q = t.anchor = e.anchor, B = t.target = e.target, A = t.targetAnchor = e.targetAnchor, I = Oo(e.props), E = I ? o : B, O = I ? q : A;
      if (r === "svg" || rl(B) ? r = "svg" : (r === "mathml" || cl(B)) && (r = "mathml"), S ? (w(
        e.dynamicChildren,
        S,
        E,
        l,
        i,
        r,
        u
      ), Ga(e, t, !0)) : d || h(
        e,
        t,
        E,
        O,
        l,
        i,
        r,
        u,
        !1
      ), P)
        I ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : an(
          t,
          o,
          q,
          m,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const re = t.target = pa(
          t.props,
          _
        );
        re && an(
          t,
          re,
          null,
          m,
          0
        );
      } else I && an(
        t,
        B,
        A,
        m,
        1
      );
      mn(t, P);
    }
  },
  remove(e, t, o, { um: n, o: { remove: l } }, i) {
    const {
      shapeFlag: r,
      children: u,
      anchor: d,
      targetStart: m,
      targetAnchor: v,
      target: h,
      props: w
    } = e;
    if (h && (l(m), l(v)), i && l(d), r & 16) {
      const p = i || !Oo(w);
      for (let _ = 0; _ < u.length; _++) {
        const x = u[_];
        n(
          x,
          t,
          o,
          p,
          !!x.dynamicChildren
        );
      }
    }
  },
  move: an,
  hydrate: Pc
};
function an(e, t, o, { o: { insert: n }, m: l }, i = 2) {
  i === 0 && n(e.targetAnchor, t, o);
  const { el: r, anchor: u, shapeFlag: d, children: m, props: v } = e, h = i === 2;
  if (h && n(r, t, o), (!h || Oo(v)) && d & 16)
    for (let w = 0; w < m.length; w++)
      l(
        m[w],
        t,
        o,
        2
      );
  h && n(u, t, o);
}
function Pc(e, t, o, n, l, i, {
  o: { nextSibling: r, parentNode: u, querySelector: d, insert: m, createText: v }
}, h) {
  function w(x, $, P, N) {
    $.anchor = h(
      r(x),
      $,
      u(x),
      o,
      n,
      l,
      i
    ), $.targetStart = P, $.targetAnchor = N;
  }
  const p = t.target = pa(
    t.props,
    d
  ), _ = Oo(t.props);
  if (p) {
    const x = p._lpa || p.firstChild;
    if (t.shapeFlag & 16)
      if (_)
        w(
          e,
          t,
          x,
          x && r(x)
        );
      else {
        t.anchor = r(e);
        let $ = x;
        for (; $; ) {
          if ($ && $.nodeType === 8) {
            if ($.data === "teleport start anchor")
              t.targetStart = $;
            else if ($.data === "teleport anchor") {
              t.targetAnchor = $, p._lpa = t.targetAnchor && r(t.targetAnchor);
              break;
            }
          }
          $ = r($);
        }
        t.targetAnchor || Ei(p, t, v, m), h(
          x && r(x),
          t,
          p,
          o,
          n,
          l,
          i
        );
      }
    mn(t, _);
  } else _ && t.shapeFlag & 16 && w(e, t, e, r(e));
  return t.anchor && r(t.anchor);
}
const ht = Ii;
function mn(e, t) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (t ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function Ei(e, t, o, n) {
  const l = t.targetStart = o(""), i = t.targetAnchor = o("");
  return l[xi] = i, e && (n(l, e), n(i, e)), i;
}
const ws = Symbol("_leaveCb"), ln = Symbol("_enterCb");
function Ti() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Qe(() => {
    e.isMounted = !0;
  }), Ai(() => {
    e.isUnmounting = !0;
  }), e;
}
const At = [Function, Array], Pi = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: At,
  onEnter: At,
  onAfterEnter: At,
  onEnterCancelled: At,
  // leave
  onBeforeLeave: At,
  onLeave: At,
  onAfterLeave: At,
  onLeaveCancelled: At,
  // appear
  onBeforeAppear: At,
  onAppear: At,
  onAfterAppear: At,
  onAppearCancelled: At
}, Ri = (e) => {
  const t = e.subTree;
  return t.component ? Ri(t.component) : t;
}, Rc = {
  name: "BaseTransition",
  props: Pi,
  setup(e, { slots: t }) {
    const o = Ha(), n = Ti();
    return () => {
      const l = t.default && Fa(t.default(), !0);
      if (!l || !l.length)
        return;
      const i = Mi(l), r = Ye(e), { mode: u } = r;
      if (n.isLeaving)
        return Xn(i);
      const d = ul(i);
      if (!d)
        return Xn(i);
      let m = jo(
        d,
        r,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (h) => m = h
      );
      d.type !== _t && Zs(d, m);
      let v = o.subTree && ul(o.subTree);
      if (v && v.type !== _t && !Ys(v, d) && Ri(o).type !== _t) {
        let h = jo(
          v,
          r,
          n,
          o
        );
        if (Zs(v, h), u === "out-in" && d.type !== _t)
          return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete h.afterLeave, v = void 0;
          }, Xn(i);
        u === "in-out" && d.type !== _t ? h.delayLeave = (w, p, _) => {
          const x = Di(
            n,
            v
          );
          x[String(v.key)] = v, w[ws] = () => {
            p(), w[ws] = void 0, delete m.delayedLeave, v = void 0;
          }, m.delayedLeave = () => {
            _(), delete m.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return i;
    };
  }
};
function Mi(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== _t) {
        t = o;
        break;
      }
  }
  return t;
}
const Mc = Rc;
function Di(e, t) {
  const { leavingVNodes: o } = e;
  let n = o.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), o.set(t.type, n)), n;
}
function jo(e, t, o, n, l) {
  const {
    appear: i,
    mode: r,
    persisted: u = !1,
    onBeforeEnter: d,
    onEnter: m,
    onAfterEnter: v,
    onEnterCancelled: h,
    onBeforeLeave: w,
    onLeave: p,
    onAfterLeave: _,
    onLeaveCancelled: x,
    onBeforeAppear: $,
    onAppear: P,
    onAfterAppear: N,
    onAppearCancelled: T
  } = t, S = String(e.key), q = Di(o, e), B = (E, O) => {
    E && es(
      E,
      n,
      9,
      O
    );
  }, A = (E, O) => {
    const re = O[1];
    B(E, O), Ae(E) ? E.every((Y) => Y.length <= 1) && re() : E.length <= 1 && re();
  }, I = {
    mode: r,
    persisted: u,
    beforeEnter(E) {
      let O = d;
      if (!o.isMounted)
        if (i)
          O = $ || d;
        else
          return;
      E[ws] && E[ws](
        !0
        /* cancelled */
      );
      const re = q[S];
      re && Ys(e, re) && re.el[ws] && re.el[ws](), B(O, [E]);
    },
    enter(E) {
      let O = m, re = v, Y = h;
      if (!o.isMounted)
        if (i)
          O = P || m, re = N || v, Y = T || h;
        else
          return;
      let H = !1;
      const te = E[ln] = (Z) => {
        H || (H = !0, Z ? B(Y, [E]) : B(re, [E]), I.delayedLeave && I.delayedLeave(), E[ln] = void 0);
      };
      O ? A(O, [E, te]) : te();
    },
    leave(E, O) {
      const re = String(e.key);
      if (E[ln] && E[ln](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return O();
      B(w, [E]);
      let Y = !1;
      const H = E[ws] = (te) => {
        Y || (Y = !0, O(), te ? B(x, [E]) : B(_, [E]), E[ws] = void 0, q[re] === e && delete q[re]);
      };
      q[re] = e, p ? A(p, [E, H]) : H();
    },
    clone(E) {
      const O = jo(
        E,
        t,
        o,
        n,
        l
      );
      return l && l(O), O;
    }
  };
  return I;
}
function Xn(e) {
  if (Un(e))
    return e = As(e), e.children = null, e;
}
function ul(e) {
  if (!Un(e))
    return Si(e.type) && e.children ? Mi(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: o } = e;
  if (o) {
    if (t & 16)
      return o[0];
    if (t & 32 && ze(o.default))
      return o.default();
  }
}
function Zs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Zs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Fa(e, t = !1, o) {
  let n = [], l = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const u = o == null ? r.key : String(o) + String(r.key != null ? r.key : i);
    r.type === j ? (r.patchFlag & 128 && l++, n = n.concat(
      Fa(r.children, t, u)
    )) : (t || r.type !== _t) && n.push(u != null ? As(r, { key: u }) : r);
  }
  if (l > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function me(e, t) {
  return ze(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    mt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Li(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const $n = /* @__PURE__ */ new WeakMap();
function No(e, t, o, n, l = !1) {
  if (Ae(e)) {
    e.forEach(
      (_, x) => No(
        _,
        t && (Ae(t) ? t[x] : t),
        o,
        n,
        l
      )
    );
    return;
  }
  if (fo(n) && !l) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && No(e, t, o, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? Vn(n.component) : n.el, r = l ? null : i, { i: u, r: d } = e, m = t && t.r, v = u.refs === et ? u.refs = {} : u.refs, h = u.setupState, w = Ye(h), p = h === et ? Xl : (_) => Xe(w, _);
  if (m != null && m !== d) {
    if (dl(t), it(m))
      v[m] = null, p(m) && (h[m] = null);
    else if ($t(m)) {
      m.value = null;
      const _ = t;
      _.k && (v[_.k] = null);
    }
  }
  if (ze(d))
    Xo(d, u, 12, [r, v]);
  else {
    const _ = it(d), x = $t(d);
    if (_ || x) {
      const $ = () => {
        if (e.f) {
          const P = _ ? p(d) ? h[d] : v[d] : d.value;
          if (l)
            Ae(P) && Ta(P, i);
          else if (Ae(P))
            P.includes(i) || P.push(i);
          else if (_)
            v[d] = [i], p(d) && (h[d] = v[d]);
          else {
            const N = [i];
            d.value = N, e.k && (v[e.k] = N);
          }
        } else _ ? (v[d] = r, p(d) && (h[d] = r)) : x && (d.value = r, e.k && (v[e.k] = r));
      };
      if (r) {
        const P = () => {
          $(), $n.delete(e);
        };
        P.id = -1, $n.set(e, P), St(P, o);
      } else
        dl(e), $();
    }
  }
}
function dl(e) {
  const t = $n.get(e);
  t && (t.flags |= 8, $n.delete(e));
}
On().requestIdleCallback;
On().cancelIdleCallback;
const fo = (e) => !!e.type.__asyncLoader, Un = (e) => e.type.__isKeepAlive;
function Dc(e, t) {
  Oi(e, "a", t);
}
function Lc(e, t) {
  Oi(e, "da", t);
}
function Oi(e, t, o = kt) {
  const n = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (zn(t, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      Un(l.parent.vnode) && Oc(n, t, o, l), l = l.parent;
  }
}
function Oc(e, t, o, n) {
  const l = zn(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  wo(() => {
    Ta(n[t], l);
  }, o);
}
function zn(e, t, o = kt, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), i = t.__weh || (t.__weh = (...r) => {
      $s();
      const u = Zo(o), d = es(t, o, e, r);
      return u(), Cs(), d;
    });
    return n ? l.unshift(i) : l.push(i), i;
  }
}
const Ss = (e) => (t, o = kt) => {
  (!qo || e === "sp") && zn(e, (...n) => t(...n), o);
}, Nc = Ss("bm"), Qe = Ss("m"), Ac = Ss(
  "bu"
), Ni = Ss("u"), Ai = Ss(
  "bum"
), wo = Ss("um"), Uc = Ss(
  "sp"
), zc = Ss("rtg"), Fc = Ss("rtc");
function Bc(e, t = kt) {
  zn("ec", e, t);
}
const Vc = "components", Ui = Symbol.for("v-ndc");
function Ba(e) {
  return it(e) ? Wc(Vc, e, !1) || e : e || Ui;
}
function Wc(e, t, o = !0, n = !1) {
  const l = gt || kt;
  if (l) {
    const i = l.type;
    {
      const u = Ru(
        i,
        !1
      );
      if (u && (u === t || u === Bt(t) || u === Dn(Bt(t))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      fl(l[e] || i[e], t) || // global registration
      fl(l.appContext[e], t)
    );
    return !r && n ? i : r;
  }
}
function fl(e, t) {
  return e && (e[t] || e[Bt(t)] || e[Dn(Bt(t))]);
}
function ge(e, t, o, n) {
  let l;
  const i = o, r = Ae(e);
  if (r || it(e)) {
    const u = r && Xs(e);
    let d = !1, m = !1;
    u && (d = !zt(e), m = xs(e), e = Nn(e)), l = new Array(e.length);
    for (let v = 0, h = e.length; v < h; v++)
      l[v] = t(
        d ? m ? po(Zt(e[v])) : Zt(e[v]) : e[v],
        v,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = t(u + 1, u, void 0, i);
  } else if (Ze(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (u, d) => t(u, d, void 0, i)
      );
    else {
      const u = Object.keys(e);
      l = new Array(u.length);
      for (let d = 0, m = u.length; d < m; d++) {
        const v = u[d];
        l[d] = t(e[v], v, d, i);
      }
    }
  else
    l = [];
  return l;
}
function eo(e, t) {
  for (let o = 0; o < t.length; o++) {
    const n = t[o];
    if (Ae(n))
      for (let l = 0; l < n.length; l++)
        e[n[l].name] = n[l].fn;
    else n && (e[n.name] = n.key ? (...l) => {
      const i = n.fn(...l);
      return i && (i.key = n.key), i;
    } : n.fn);
  }
  return e;
}
function Ge(e, t, o = {}, n, l) {
  if (gt.ce || gt.parent && fo(gt.parent) && gt.parent.ce) {
    const m = Object.keys(o).length > 0;
    return t !== "default" && (o.name = t), a(), M(
      j,
      null,
      [C("slot", o, n && n())],
      m ? -2 : 64
    );
  }
  let i = e[t];
  i && i._c && (i._d = !1), a();
  const r = i && zi(i(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  r && r.key, d = M(
    j,
    {
      key: (u && !Qt(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!r && n ? "_fb" : "")
    },
    r || (n ? n() : []),
    r && e._ === 1 ? 64 : -2
  );
  return i && i._c && (i._d = !0), d;
}
function zi(e) {
  return e.some((t) => Ko(t) ? !(t.type === _t || t.type === j && !zi(t.children)) : !0) ? e : null;
}
const ga = (e) => e ? nr(e) ? Vn(e) : ga(e.parent) : null, Ao = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ mt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ga(e.parent),
    $root: (e) => ga(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Bi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      za(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Qo.bind(e.proxy)),
    $watch: (e) => tu.bind(e)
  })
), Qn = (e, t) => e !== et && !e.__isScriptSetup && Xe(e, t), Gc = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: o, setupState: n, data: l, props: i, accessCache: r, type: u, appContext: d } = e;
    if (t[0] !== "$") {
      const w = r[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return n[t];
          case 2:
            return l[t];
          case 4:
            return o[t];
          case 3:
            return i[t];
        }
      else {
        if (Qn(n, t))
          return r[t] = 1, n[t];
        if (l !== et && Xe(l, t))
          return r[t] = 2, l[t];
        if (Xe(i, t))
          return r[t] = 3, i[t];
        if (o !== et && Xe(o, t))
          return r[t] = 4, o[t];
        ha && (r[t] = 0);
      }
    }
    const m = Ao[t];
    let v, h;
    if (m)
      return t === "$attrs" && bt(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (v = u.__cssModules) && (v = v[t])
    )
      return v;
    if (o !== et && Xe(o, t))
      return r[t] = 4, o[t];
    if (
      // global properties
      h = d.config.globalProperties, Xe(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, o) {
    const { data: n, setupState: l, ctx: i } = e;
    return Qn(l, t) ? (l[t] = o, !0) : n !== et && Xe(n, t) ? (n[t] = o, !0) : Xe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: n, appContext: l, props: i, type: r }
  }, u) {
    let d;
    return !!(o[u] || e !== et && u[0] !== "$" && Xe(e, u) || Qn(t, u) || Xe(i, u) || Xe(n, u) || Xe(Ao, u) || Xe(l.config.globalProperties, u) || (d = r.__cssModules) && d[u]);
  },
  defineProperty(e, t, o) {
    return o.get != null ? e._.accessCache[t] = 0 : Xe(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
  }
};
function ml(e) {
  return Ae(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
let ha = !0;
function jc(e) {
  const t = Bi(e), o = e.proxy, n = e.ctx;
  ha = !1, t.beforeCreate && vl(t.beforeCreate, e, "bc");
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
    beforeMount: h,
    mounted: w,
    beforeUpdate: p,
    updated: _,
    activated: x,
    deactivated: $,
    beforeDestroy: P,
    beforeUnmount: N,
    destroyed: T,
    unmounted: S,
    render: q,
    renderTracked: B,
    renderTriggered: A,
    errorCaptured: I,
    serverPrefetch: E,
    // public API
    expose: O,
    inheritAttrs: re,
    // assets
    components: Y,
    directives: H,
    filters: te
  } = t;
  if (m && Hc(m, n, null), r)
    for (const z in r) {
      const R = r[z];
      ze(R) && (n[z] = R.bind(o));
    }
  if (l) {
    const z = l.call(o, o);
    Ze(z) && (e.data = Fs(z));
  }
  if (ha = !0, i)
    for (const z in i) {
      const R = i[z], be = ze(R) ? R.bind(o, o) : ze(R.get) ? R.get.bind(o, o) : fs, ve = !ze(R) && ze(R.set) ? R.set.bind(o) : fs, Ee = F({
        get: be,
        set: ve
      });
      Object.defineProperty(n, z, {
        enumerable: !0,
        configurable: !0,
        get: () => Ee.value,
        set: (De) => Ee.value = De
      });
    }
  if (u)
    for (const z in u)
      Fi(u[z], n, o, z);
  if (d) {
    const z = ze(d) ? d.call(o) : d;
    Reflect.ownKeys(z).forEach((R) => {
      Qc(R, z[R]);
    });
  }
  v && vl(v, e, "c");
  function U(z, R) {
    Ae(R) ? R.forEach((be) => z(be.bind(o))) : R && z(R.bind(o));
  }
  if (U(Nc, h), U(Qe, w), U(Ac, p), U(Ni, _), U(Dc, x), U(Lc, $), U(Bc, I), U(Fc, B), U(zc, A), U(Ai, N), U(wo, S), U(Uc, E), Ae(O))
    if (O.length) {
      const z = e.exposed || (e.exposed = {});
      O.forEach((R) => {
        Object.defineProperty(z, R, {
          get: () => o[R],
          set: (be) => o[R] = be,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  q && e.render === fs && (e.render = q), re != null && (e.inheritAttrs = re), Y && (e.components = Y), H && (e.directives = H), E && Li(e);
}
function Hc(e, t, o = fs) {
  Ae(e) && (e = ya(e));
  for (const n in e) {
    const l = e[n];
    let i;
    Ze(l) ? "default" in l ? i = vn(
      l.from || n,
      l.default,
      !0
    ) : i = vn(l.from || n) : i = vn(l), $t(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[n] = i;
  }
}
function vl(e, t, o) {
  es(
    Ae(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function Fi(e, t, o, n) {
  let l = n.includes(".") ? Gi(o, n) : () => o[n];
  if (it(e)) {
    const i = t[e];
    ze(i) && Ct(l, i);
  } else if (ze(e))
    Ct(l, e.bind(o));
  else if (Ze(e))
    if (Ae(e))
      e.forEach((i) => Fi(i, t, o, n));
    else {
      const i = ze(e.handler) ? e.handler.bind(o) : t[e.handler];
      ze(i) && Ct(l, i, e);
    }
}
function Bi(e) {
  const t = e.type, { mixins: o, extends: n } = t, {
    mixins: l,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, u = i.get(t);
  let d;
  return u ? d = u : !l.length && !o && !n ? d = t : (d = {}, l.length && l.forEach(
    (m) => Cn(d, m, r, !0)
  ), Cn(d, t, r)), Ze(t) && i.set(t, d), d;
}
function Cn(e, t, o, n = !1) {
  const { mixins: l, extends: i } = t;
  i && Cn(e, i, o, !0), l && l.forEach(
    (r) => Cn(e, r, o, !0)
  );
  for (const r in t)
    if (!(n && r === "expose")) {
      const u = Kc[r] || o && o[r];
      e[r] = u ? u(e[r], t[r]) : t[r];
    }
  return e;
}
const Kc = {
  data: pl,
  props: gl,
  emits: gl,
  // objects
  methods: Ro,
  computed: Ro,
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
  components: Ro,
  directives: Ro,
  // watch
  watch: Yc,
  // provide / inject
  provide: pl,
  inject: qc
};
function pl(e, t) {
  return t ? e ? function() {
    return mt(
      ze(e) ? e.call(this, this) : e,
      ze(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function qc(e, t) {
  return Ro(ya(e), ya(t));
}
function ya(e) {
  if (Ae(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++)
      t[e[o]] = e[o];
    return t;
  }
  return e;
}
function xt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ro(e, t) {
  return e ? mt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function gl(e, t) {
  return e ? Ae(e) && Ae(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : mt(
    /* @__PURE__ */ Object.create(null),
    ml(e),
    ml(t ?? {})
  ) : t;
}
function Yc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = mt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    o[n] = xt(e[n], t[n]);
  return o;
}
function Vi() {
  return {
    app: null,
    config: {
      isNativeTag: Xl,
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
let Jc = 0;
function Xc(e, t) {
  return function(n, l = null) {
    ze(n) || (n = mt({}, n)), l != null && !Ze(l) && (l = null);
    const i = Vi(), r = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const m = i.app = {
      _uid: Jc++,
      _component: n,
      _props: l,
      _container: null,
      _context: i,
      _instance: null,
      version: Du,
      get config() {
        return i.config;
      },
      set config(v) {
      },
      use(v, ...h) {
        return r.has(v) || (v && ze(v.install) ? (r.add(v), v.install(m, ...h)) : ze(v) && (r.add(v), v(m, ...h))), m;
      },
      mixin(v) {
        return i.mixins.includes(v) || i.mixins.push(v), m;
      },
      component(v, h) {
        return h ? (i.components[v] = h, m) : i.components[v];
      },
      directive(v, h) {
        return h ? (i.directives[v] = h, m) : i.directives[v];
      },
      mount(v, h, w) {
        if (!d) {
          const p = m._ceVNode || C(n, l);
          return p.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(p, v, w), d = !0, m._container = v, v.__vue_app__ = m, Vn(p.component);
        }
      },
      onUnmount(v) {
        u.push(v);
      },
      unmount() {
        d && (es(
          u,
          m._instance,
          16
        ), e(null, m._container), delete m._container.__vue_app__);
      },
      provide(v, h) {
        return i.provides[v] = h, m;
      },
      runWithContext(v) {
        const h = mo;
        mo = m;
        try {
          return v();
        } finally {
          mo = h;
        }
      }
    };
    return m;
  };
}
let mo = null;
function Qc(e, t) {
  if (kt) {
    let o = kt.provides;
    const n = kt.parent && kt.parent.provides;
    n === o && (o = kt.provides = Object.create(n)), o[e] = t;
  }
}
function vn(e, t, o = !1) {
  const n = Ha();
  if (n || mo) {
    let l = mo ? mo._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && ze(t) ? t.call(n && n.proxy) : t;
  }
}
const Zc = Symbol.for("v-scx"), eu = () => vn(Zc);
function Ct(e, t, o) {
  return Wi(e, t, o);
}
function Wi(e, t, o = et) {
  const { immediate: n, deep: l, flush: i, once: r } = o, u = mt({}, o), d = t && n || !t && i !== "post";
  let m;
  if (qo) {
    if (i === "sync") {
      const p = eu();
      m = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!d) {
      const p = () => {
      };
      return p.stop = fs, p.resume = fs, p.pause = fs, p;
    }
  }
  const v = kt;
  u.call = (p, _, x) => es(p, v, _, x);
  let h = !1;
  i === "post" ? u.scheduler = (p) => {
    St(p, v && v.suspense);
  } : i !== "sync" && (h = !0, u.scheduler = (p, _) => {
    _ ? p() : za(p);
  }), u.augmentJob = (p) => {
    t && (p.flags |= 4), h && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const w = Sc(e, t, u);
  return qo && (m ? m.push(w) : d && w()), w;
}
function tu(e, t, o) {
  const n = this.proxy, l = it(e) ? e.includes(".") ? Gi(n, e) : () => n[e] : e.bind(n, n);
  let i;
  ze(t) ? i = t : (i = t.handler, o = t);
  const r = Zo(this), u = Wi(l, i.bind(n), o);
  return r(), u;
}
function Gi(e, t) {
  const o = t.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const su = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Bt(t)}Modifiers`] || e[`${zs(t)}Modifiers`];
function ou(e, t, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || et;
  let l = o;
  const i = t.startsWith("update:"), r = i && su(n, t.slice(7));
  r && (r.trim && (l = o.map((v) => it(v) ? v.trim() : v)), r.number && (l = o.map(Ln)));
  let u, d = n[u = Hn(t)] || // also try camelCase event handler (#2249)
  n[u = Hn(Bt(t))];
  !d && i && (d = n[u = Hn(zs(t))]), d && es(
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
    e.emitted[u] = !0, es(
      m,
      e,
      6,
      l
    );
  }
}
const nu = /* @__PURE__ */ new WeakMap();
function ji(e, t, o = !1) {
  const n = o ? nu : t.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const i = e.emits;
  let r = {}, u = !1;
  if (!ze(e)) {
    const d = (m) => {
      const v = ji(m, t, !0);
      v && (u = !0, mt(r, v));
    };
    !o && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !i && !u ? (Ze(e) && n.set(e, null), null) : (Ae(i) ? i.forEach((d) => r[d] = null) : mt(r, i), Ze(e) && n.set(e, r), r);
}
function Fn(e, t) {
  return !e || !Rn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Xe(e, t[0].toLowerCase() + t.slice(1)) || Xe(e, zs(t)) || Xe(e, t));
}
function hl(e) {
  const {
    type: t,
    vnode: o,
    proxy: n,
    withProxy: l,
    propsOptions: [i],
    slots: r,
    attrs: u,
    emit: d,
    render: m,
    renderCache: v,
    props: h,
    data: w,
    setupState: p,
    ctx: _,
    inheritAttrs: x
  } = e, $ = kn(e);
  let P, N;
  try {
    if (o.shapeFlag & 4) {
      const S = l || n, q = S;
      P = ds(
        m.call(
          q,
          S,
          v,
          h,
          p,
          w,
          _
        )
      ), N = u;
    } else {
      const S = t;
      P = ds(
        S.length > 1 ? S(
          h,
          { attrs: u, slots: r, emit: d }
        ) : S(
          h,
          null
        )
      ), N = t.props ? u : au(u);
    }
  } catch (S) {
    Uo.length = 0, An(S, e, 1), P = C(_t);
  }
  let T = P;
  if (N && x !== !1) {
    const S = Object.keys(N), { shapeFlag: q } = T;
    S.length && q & 7 && (i && S.some(Ea) && (N = lu(
      N,
      i
    )), T = As(T, N, !1, !0));
  }
  return o.dirs && (T = As(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(o.dirs) : o.dirs), o.transition && Zs(T, o.transition), P = T, kn($), P;
}
const au = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || Rn(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, lu = (e, t) => {
  const o = {};
  for (const n in e)
    (!Ea(n) || !(n.slice(9) in t)) && (o[n] = e[n]);
  return o;
};
function iu(e, t, o) {
  const { props: n, children: l, component: i } = e, { props: r, children: u, patchFlag: d } = t, m = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? yl(n, r, m) : !!r;
    if (d & 8) {
      const v = t.dynamicProps;
      for (let h = 0; h < v.length; h++) {
        const w = v[h];
        if (r[w] !== n[w] && !Fn(m, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : n === r ? !1 : n ? r ? yl(n, r, m) : !0 : !!r;
  return !1;
}
function yl(e, t, o) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < n.length; l++) {
    const i = n[l];
    if (t[i] !== e[i] && !Fn(o, i))
      return !0;
  }
  return !1;
}
function ru({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const Hi = {}, Ki = () => Object.create(Hi), qi = (e) => Object.getPrototypeOf(e) === Hi;
function cu(e, t, o, n = !1) {
  const l = {}, i = Ki();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Yi(e, t, l, i);
  for (const r in e.propsOptions[0])
    r in l || (l[r] = void 0);
  o ? e.props = n ? l : yc(l) : e.type.props ? e.props = l : e.props = i, e.attrs = i;
}
function uu(e, t, o, n) {
  const {
    props: l,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, u = Ye(l), [d] = e.propsOptions;
  let m = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const v = e.vnode.dynamicProps;
      for (let h = 0; h < v.length; h++) {
        let w = v[h];
        if (Fn(e.emitsOptions, w))
          continue;
        const p = t[w];
        if (d)
          if (Xe(i, w))
            p !== i[w] && (i[w] = p, m = !0);
          else {
            const _ = Bt(w);
            l[_] = wa(
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
    Yi(e, t, l, i) && (m = !0);
    let v;
    for (const h in u)
      (!t || // for camelCase
      !Xe(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = zs(h)) === h || !Xe(t, v))) && (d ? o && // for camelCase
      (o[h] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[h] = wa(
        d,
        u,
        h,
        void 0,
        e,
        !0
      )) : delete l[h]);
    if (i !== u)
      for (const h in i)
        (!t || !Xe(t, h)) && (delete i[h], m = !0);
  }
  m && bs(e.attrs, "set", "");
}
function Yi(e, t, o, n) {
  const [l, i] = e.propsOptions;
  let r = !1, u;
  if (t)
    for (let d in t) {
      if (Mo(d))
        continue;
      const m = t[d];
      let v;
      l && Xe(l, v = Bt(d)) ? !i || !i.includes(v) ? o[v] = m : (u || (u = {}))[v] = m : Fn(e.emitsOptions, d) || (!(d in n) || m !== n[d]) && (n[d] = m, r = !0);
    }
  if (i) {
    const d = Ye(o), m = u || et;
    for (let v = 0; v < i.length; v++) {
      const h = i[v];
      o[h] = wa(
        l,
        d,
        h,
        m[h],
        e,
        !Xe(m, h)
      );
    }
  }
  return r;
}
function wa(e, t, o, n, l, i) {
  const r = e[o];
  if (r != null) {
    const u = Xe(r, "default");
    if (u && n === void 0) {
      const d = r.default;
      if (r.type !== Function && !r.skipFactory && ze(d)) {
        const { propsDefaults: m } = l;
        if (o in m)
          n = m[o];
        else {
          const v = Zo(l);
          n = m[o] = d.call(
            null,
            t
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
    ] && (n === "" || n === zs(o)) && (n = !0));
  }
  return n;
}
const du = /* @__PURE__ */ new WeakMap();
function Ji(e, t, o = !1) {
  const n = o ? du : t.propsCache, l = n.get(e);
  if (l)
    return l;
  const i = e.props, r = {}, u = [];
  let d = !1;
  if (!ze(e)) {
    const v = (h) => {
      d = !0;
      const [w, p] = Ji(h, t, !0);
      mt(r, w), p && u.push(...p);
    };
    !o && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!i && !d)
    return Ze(e) && n.set(e, ro), ro;
  if (Ae(i))
    for (let v = 0; v < i.length; v++) {
      const h = Bt(i[v]);
      wl(h) && (r[h] = et);
    }
  else if (i)
    for (const v in i) {
      const h = Bt(v);
      if (wl(h)) {
        const w = i[v], p = r[h] = Ae(w) || ze(w) ? { type: w } : mt({}, w), _ = p.type;
        let x = !1, $ = !0;
        if (Ae(_))
          for (let P = 0; P < _.length; ++P) {
            const N = _[P], T = ze(N) && N.name;
            if (T === "Boolean") {
              x = !0;
              break;
            } else T === "String" && ($ = !1);
          }
        else
          x = ze(_) && _.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = x, p[
          1
          /* shouldCastTrue */
        ] = $, (x || Xe(p, "default")) && u.push(h);
      }
    }
  const m = [r, u];
  return Ze(e) && n.set(e, m), m;
}
function wl(e) {
  return e[0] !== "$" && !Mo(e);
}
const Va = (e) => e === "_" || e === "_ctx" || e === "$stable", Wa = (e) => Ae(e) ? e.map(ds) : [ds(e)], fu = (e, t, o) => {
  if (t._n)
    return t;
  const n = g((...l) => Wa(t(...l)), o);
  return n._c = !1, n;
}, Xi = (e, t, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (Va(l)) continue;
    const i = e[l];
    if (ze(i))
      t[l] = fu(l, i, n);
    else if (i != null) {
      const r = Wa(i);
      t[l] = () => r;
    }
  }
}, Qi = (e, t) => {
  const o = Wa(t);
  e.slots.default = () => o;
}, Zi = (e, t, o) => {
  for (const n in t)
    (o || !Va(n)) && (e[n] = t[n]);
}, mu = (e, t, o) => {
  const n = e.slots = Ki();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Zi(n, t, o), o && ti(n, "_", l, !0)) : Xi(t, n);
  } else t && Qi(e, t);
}, vu = (e, t, o) => {
  const { vnode: n, slots: l } = e;
  let i = !0, r = et;
  if (n.shapeFlag & 32) {
    const u = t._;
    u ? o && u === 1 ? i = !1 : Zi(l, t, o) : (i = !t.$stable, Xi(t, l)), r = t;
  } else t && (Qi(e, t), r = { default: 1 });
  if (i)
    for (const u in l)
      !Va(u) && r[u] == null && delete l[u];
}, St = wu;
function pu(e) {
  return gu(e);
}
function gu(e, t) {
  const o = On();
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
    parentNode: h,
    nextSibling: w,
    setScopeId: p = fs,
    insertStaticContent: _
  } = e, x = (L, V, oe, ae = null, de = null, fe = null, ke = void 0, $e = null, ne = !!V.dynamicChildren) => {
    if (L === V)
      return;
    L && !Ys(L, V) && (ae = Ve(L), De(L, de, fe, !0), L = null), V.patchFlag === -2 && (ne = !1, V.dynamicChildren = null);
    const { type: ue, ref: Re, shapeFlag: Ce } = V;
    switch (ue) {
      case Bn:
        $(L, V, oe, ae);
        break;
      case _t:
        P(L, V, oe, ae);
        break;
      case ea:
        L == null && N(V, oe, ae, ke);
        break;
      case j:
        Y(
          L,
          V,
          oe,
          ae,
          de,
          fe,
          ke,
          $e,
          ne
        );
        break;
      default:
        Ce & 1 ? q(
          L,
          V,
          oe,
          ae,
          de,
          fe,
          ke,
          $e,
          ne
        ) : Ce & 6 ? H(
          L,
          V,
          oe,
          ae,
          de,
          fe,
          ke,
          $e,
          ne
        ) : (Ce & 64 || Ce & 128) && ue.process(
          L,
          V,
          oe,
          ae,
          de,
          fe,
          ke,
          $e,
          ne,
          Fe
        );
    }
    Re != null && de ? No(Re, L && L.ref, fe, V || L, !V) : Re == null && L && L.ref != null && No(L.ref, null, fe, L, !0);
  }, $ = (L, V, oe, ae) => {
    if (L == null)
      n(
        V.el = u(V.children),
        oe,
        ae
      );
    else {
      const de = V.el = L.el;
      V.children !== L.children && m(de, V.children);
    }
  }, P = (L, V, oe, ae) => {
    L == null ? n(
      V.el = d(V.children || ""),
      oe,
      ae
    ) : V.el = L.el;
  }, N = (L, V, oe, ae) => {
    [L.el, L.anchor] = _(
      L.children,
      V,
      oe,
      ae,
      L.el,
      L.anchor
    );
  }, T = ({ el: L, anchor: V }, oe, ae) => {
    let de;
    for (; L && L !== V; )
      de = w(L), n(L, oe, ae), L = de;
    n(V, oe, ae);
  }, S = ({ el: L, anchor: V }) => {
    let oe;
    for (; L && L !== V; )
      oe = w(L), l(L), L = oe;
    l(V);
  }, q = (L, V, oe, ae, de, fe, ke, $e, ne) => {
    if (V.type === "svg" ? ke = "svg" : V.type === "math" && (ke = "mathml"), L == null)
      B(
        V,
        oe,
        ae,
        de,
        fe,
        ke,
        $e,
        ne
      );
    else {
      const ue = L.el && L.el._isVueCE ? L.el : null;
      try {
        ue && ue._beginPatch(), E(
          L,
          V,
          de,
          fe,
          ke,
          $e,
          ne
        );
      } finally {
        ue && ue._endPatch();
      }
    }
  }, B = (L, V, oe, ae, de, fe, ke, $e) => {
    let ne, ue;
    const { props: Re, shapeFlag: Ce, transition: ee, dirs: K } = L;
    if (ne = L.el = r(
      L.type,
      fe,
      Re && Re.is,
      Re
    ), Ce & 8 ? v(ne, L.children) : Ce & 16 && I(
      L.children,
      ne,
      null,
      ae,
      de,
      Zn(L, fe),
      ke,
      $e
    ), K && Gs(L, null, ae, "created"), A(ne, L, L.scopeId, ke, ae), Re) {
      for (const D in Re)
        D !== "value" && !Mo(D) && i(ne, D, null, Re[D], fe, ae);
      "value" in Re && i(ne, "value", null, Re.value, fe), (ue = Re.onVnodeBeforeMount) && ls(ue, ae, L);
    }
    K && Gs(L, null, ae, "beforeMount");
    const X = hu(de, ee);
    X && ee.beforeEnter(ne), n(ne, V, oe), ((ue = Re && Re.onVnodeMounted) || X || K) && St(() => {
      ue && ls(ue, ae, L), X && ee.enter(ne), K && Gs(L, null, ae, "mounted");
    }, de);
  }, A = (L, V, oe, ae, de) => {
    if (oe && p(L, oe), ae)
      for (let fe = 0; fe < ae.length; fe++)
        p(L, ae[fe]);
    if (de) {
      let fe = de.subTree;
      if (V === fe || tr(fe.type) && (fe.ssContent === V || fe.ssFallback === V)) {
        const ke = de.vnode;
        A(
          L,
          ke,
          ke.scopeId,
          ke.slotScopeIds,
          de.parent
        );
      }
    }
  }, I = (L, V, oe, ae, de, fe, ke, $e, ne = 0) => {
    for (let ue = ne; ue < L.length; ue++) {
      const Re = L[ue] = $e ? Ls(L[ue]) : ds(L[ue]);
      x(
        null,
        Re,
        V,
        oe,
        ae,
        de,
        fe,
        ke,
        $e
      );
    }
  }, E = (L, V, oe, ae, de, fe, ke) => {
    const $e = V.el = L.el;
    let { patchFlag: ne, dynamicChildren: ue, dirs: Re } = V;
    ne |= L.patchFlag & 16;
    const Ce = L.props || et, ee = V.props || et;
    let K;
    if (oe && js(oe, !1), (K = ee.onVnodeBeforeUpdate) && ls(K, oe, V, L), Re && Gs(V, L, oe, "beforeUpdate"), oe && js(oe, !0), (Ce.innerHTML && ee.innerHTML == null || Ce.textContent && ee.textContent == null) && v($e, ""), ue ? O(
      L.dynamicChildren,
      ue,
      $e,
      oe,
      ae,
      Zn(V, de),
      fe
    ) : ke || R(
      L,
      V,
      $e,
      null,
      oe,
      ae,
      Zn(V, de),
      fe,
      !1
    ), ne > 0) {
      if (ne & 16)
        re($e, Ce, ee, oe, de);
      else if (ne & 2 && Ce.class !== ee.class && i($e, "class", null, ee.class, de), ne & 4 && i($e, "style", Ce.style, ee.style, de), ne & 8) {
        const X = V.dynamicProps;
        for (let D = 0; D < X.length; D++) {
          const W = X[D], ce = Ce[W], Te = ee[W];
          (Te !== ce || W === "value") && i($e, W, ce, Te, de, oe);
        }
      }
      ne & 1 && L.children !== V.children && v($e, V.children);
    } else !ke && ue == null && re($e, Ce, ee, oe, de);
    ((K = ee.onVnodeUpdated) || Re) && St(() => {
      K && ls(K, oe, V, L), Re && Gs(V, L, oe, "updated");
    }, ae);
  }, O = (L, V, oe, ae, de, fe, ke) => {
    for (let $e = 0; $e < V.length; $e++) {
      const ne = L[$e], ue = V[$e], Re = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ne.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ne.type === j || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ys(ne, ue) || // - In the case of a component, it could contain anything.
        ne.shapeFlag & 198) ? h(ne.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          oe
        )
      );
      x(
        ne,
        ue,
        Re,
        null,
        ae,
        de,
        fe,
        ke,
        !0
      );
    }
  }, re = (L, V, oe, ae, de) => {
    if (V !== oe) {
      if (V !== et)
        for (const fe in V)
          !Mo(fe) && !(fe in oe) && i(
            L,
            fe,
            V[fe],
            null,
            de,
            ae
          );
      for (const fe in oe) {
        if (Mo(fe)) continue;
        const ke = oe[fe], $e = V[fe];
        ke !== $e && fe !== "value" && i(L, fe, $e, ke, de, ae);
      }
      "value" in oe && i(L, "value", V.value, oe.value, de);
    }
  }, Y = (L, V, oe, ae, de, fe, ke, $e, ne) => {
    const ue = V.el = L ? L.el : u(""), Re = V.anchor = L ? L.anchor : u("");
    let { patchFlag: Ce, dynamicChildren: ee, slotScopeIds: K } = V;
    K && ($e = $e ? $e.concat(K) : K), L == null ? (n(ue, oe, ae), n(Re, oe, ae), I(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      V.children || [],
      oe,
      Re,
      de,
      fe,
      ke,
      $e,
      ne
    )) : Ce > 0 && Ce & 64 && ee && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    L.dynamicChildren ? (O(
      L.dynamicChildren,
      ee,
      oe,
      de,
      fe,
      ke,
      $e
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (V.key != null || de && V === de.subTree) && Ga(
      L,
      V,
      !0
      /* shallow */
    )) : R(
      L,
      V,
      oe,
      Re,
      de,
      fe,
      ke,
      $e,
      ne
    );
  }, H = (L, V, oe, ae, de, fe, ke, $e, ne) => {
    V.slotScopeIds = $e, L == null ? V.shapeFlag & 512 ? de.ctx.activate(
      V,
      oe,
      ae,
      ke,
      ne
    ) : te(
      V,
      oe,
      ae,
      de,
      fe,
      ke,
      ne
    ) : Z(L, V, ne);
  }, te = (L, V, oe, ae, de, fe, ke) => {
    const $e = L.component = Su(
      L,
      ae,
      de
    );
    if (Un(L) && ($e.ctx.renderer = Fe), Iu($e, !1, ke), $e.asyncDep) {
      if (de && de.registerDep($e, U, ke), !L.el) {
        const ne = $e.subTree = C(_t);
        P(null, ne, V, oe), L.placeholder = ne.el;
      }
    } else
      U(
        $e,
        L,
        V,
        oe,
        de,
        fe,
        ke
      );
  }, Z = (L, V, oe) => {
    const ae = V.component = L.component;
    if (iu(L, V, oe))
      if (ae.asyncDep && !ae.asyncResolved) {
        z(ae, V, oe);
        return;
      } else
        ae.next = V, ae.update();
    else
      V.el = L.el, ae.vnode = V;
  }, U = (L, V, oe, ae, de, fe, ke) => {
    const $e = () => {
      if (L.isMounted) {
        let { next: Ce, bu: ee, u: K, parent: X, vnode: D } = L;
        {
          const rt = er(L);
          if (rt) {
            Ce && (Ce.el = D.el, z(L, Ce, ke)), rt.asyncDep.then(() => {
              L.isUnmounted || $e();
            });
            return;
          }
        }
        let W = Ce, ce;
        js(L, !1), Ce ? (Ce.el = D.el, z(L, Ce, ke)) : Ce = D, ee && fn(ee), (ce = Ce.props && Ce.props.onVnodeBeforeUpdate) && ls(ce, X, Ce, D), js(L, !0);
        const Te = hl(L), Ke = L.subTree;
        L.subTree = Te, x(
          Ke,
          Te,
          // parent may have changed if it's in a teleport
          h(Ke.el),
          // anchor may have changed if it's in a fragment
          Ve(Ke),
          L,
          de,
          fe
        ), Ce.el = Te.el, W === null && ru(L, Te.el), K && St(K, de), (ce = Ce.props && Ce.props.onVnodeUpdated) && St(
          () => ls(ce, X, Ce, D),
          de
        );
      } else {
        let Ce;
        const { el: ee, props: K } = V, { bm: X, m: D, parent: W, root: ce, type: Te } = L, Ke = fo(V);
        js(L, !1), X && fn(X), !Ke && (Ce = K && K.onVnodeBeforeMount) && ls(Ce, W, V), js(L, !0);
        {
          ce.ce && // @ts-expect-error _def is private
          ce.ce._def.shadowRoot !== !1 && ce.ce._injectChildStyle(Te);
          const rt = L.subTree = hl(L);
          x(
            null,
            rt,
            oe,
            ae,
            L,
            de,
            fe
          ), V.el = rt.el;
        }
        if (D && St(D, de), !Ke && (Ce = K && K.onVnodeMounted)) {
          const rt = V;
          St(
            () => ls(Ce, W, rt),
            de
          );
        }
        (V.shapeFlag & 256 || W && fo(W.vnode) && W.vnode.shapeFlag & 256) && L.a && St(L.a, de), L.isMounted = !0, V = oe = ae = null;
      }
    };
    L.scope.on();
    const ne = L.effect = new ai($e);
    L.scope.off();
    const ue = L.update = ne.run.bind(ne), Re = L.job = ne.runIfDirty.bind(ne);
    Re.i = L, Re.id = L.uid, ne.scheduler = () => za(Re), js(L, !0), ue();
  }, z = (L, V, oe) => {
    V.component = L;
    const ae = L.vnode.props;
    L.vnode = V, L.next = null, uu(L, V.props, ae, oe), vu(L, V.children, oe), $s(), ll(L), Cs();
  }, R = (L, V, oe, ae, de, fe, ke, $e, ne = !1) => {
    const ue = L && L.children, Re = L ? L.shapeFlag : 0, Ce = V.children, { patchFlag: ee, shapeFlag: K } = V;
    if (ee > 0) {
      if (ee & 128) {
        ve(
          ue,
          Ce,
          oe,
          ae,
          de,
          fe,
          ke,
          $e,
          ne
        );
        return;
      } else if (ee & 256) {
        be(
          ue,
          Ce,
          oe,
          ae,
          de,
          fe,
          ke,
          $e,
          ne
        );
        return;
      }
    }
    K & 8 ? (Re & 16 && Se(ue, de, fe), Ce !== ue && v(oe, Ce)) : Re & 16 ? K & 16 ? ve(
      ue,
      Ce,
      oe,
      ae,
      de,
      fe,
      ke,
      $e,
      ne
    ) : Se(ue, de, fe, !0) : (Re & 8 && v(oe, ""), K & 16 && I(
      Ce,
      oe,
      ae,
      de,
      fe,
      ke,
      $e,
      ne
    ));
  }, be = (L, V, oe, ae, de, fe, ke, $e, ne) => {
    L = L || ro, V = V || ro;
    const ue = L.length, Re = V.length, Ce = Math.min(ue, Re);
    let ee;
    for (ee = 0; ee < Ce; ee++) {
      const K = V[ee] = ne ? Ls(V[ee]) : ds(V[ee]);
      x(
        L[ee],
        K,
        oe,
        null,
        de,
        fe,
        ke,
        $e,
        ne
      );
    }
    ue > Re ? Se(
      L,
      de,
      fe,
      !0,
      !1,
      Ce
    ) : I(
      V,
      oe,
      ae,
      de,
      fe,
      ke,
      $e,
      ne,
      Ce
    );
  }, ve = (L, V, oe, ae, de, fe, ke, $e, ne) => {
    let ue = 0;
    const Re = V.length;
    let Ce = L.length - 1, ee = Re - 1;
    for (; ue <= Ce && ue <= ee; ) {
      const K = L[ue], X = V[ue] = ne ? Ls(V[ue]) : ds(V[ue]);
      if (Ys(K, X))
        x(
          K,
          X,
          oe,
          null,
          de,
          fe,
          ke,
          $e,
          ne
        );
      else
        break;
      ue++;
    }
    for (; ue <= Ce && ue <= ee; ) {
      const K = L[Ce], X = V[ee] = ne ? Ls(V[ee]) : ds(V[ee]);
      if (Ys(K, X))
        x(
          K,
          X,
          oe,
          null,
          de,
          fe,
          ke,
          $e,
          ne
        );
      else
        break;
      Ce--, ee--;
    }
    if (ue > Ce) {
      if (ue <= ee) {
        const K = ee + 1, X = K < Re ? V[K].el : ae;
        for (; ue <= ee; )
          x(
            null,
            V[ue] = ne ? Ls(V[ue]) : ds(V[ue]),
            oe,
            X,
            de,
            fe,
            ke,
            $e,
            ne
          ), ue++;
      }
    } else if (ue > ee)
      for (; ue <= Ce; )
        De(L[ue], de, fe, !0), ue++;
    else {
      const K = ue, X = ue, D = /* @__PURE__ */ new Map();
      for (ue = X; ue <= ee; ue++) {
        const ct = V[ue] = ne ? Ls(V[ue]) : ds(V[ue]);
        ct.key != null && D.set(ct.key, ue);
      }
      let W, ce = 0;
      const Te = ee - X + 1;
      let Ke = !1, rt = 0;
      const yt = new Array(Te);
      for (ue = 0; ue < Te; ue++) yt[ue] = 0;
      for (ue = K; ue <= Ce; ue++) {
        const ct = L[ue];
        if (ce >= Te) {
          De(ct, de, fe, !0);
          continue;
        }
        let ft;
        if (ct.key != null)
          ft = D.get(ct.key);
        else
          for (W = X; W <= ee; W++)
            if (yt[W - X] === 0 && Ys(ct, V[W])) {
              ft = W;
              break;
            }
        ft === void 0 ? De(ct, de, fe, !0) : (yt[ft - X] = ue + 1, ft >= rt ? rt = ft : Ke = !0, x(
          ct,
          V[ft],
          oe,
          null,
          de,
          fe,
          ke,
          $e,
          ne
        ), ce++);
      }
      const wt = Ke ? yu(yt) : ro;
      for (W = wt.length - 1, ue = Te - 1; ue >= 0; ue--) {
        const ct = X + ue, ft = V[ct], Wt = V[ct + 1], vs = ct + 1 < Re ? (
          // #13559, fallback to el placeholder for unresolved async component
          Wt.el || Wt.placeholder
        ) : ae;
        yt[ue] === 0 ? x(
          null,
          ft,
          oe,
          vs,
          de,
          fe,
          ke,
          $e,
          ne
        ) : Ke && (W < 0 || ue !== wt[W] ? Ee(ft, oe, vs, 2) : W--);
      }
    }
  }, Ee = (L, V, oe, ae, de = null) => {
    const { el: fe, type: ke, transition: $e, children: ne, shapeFlag: ue } = L;
    if (ue & 6) {
      Ee(L.component.subTree, V, oe, ae);
      return;
    }
    if (ue & 128) {
      L.suspense.move(V, oe, ae);
      return;
    }
    if (ue & 64) {
      ke.move(L, V, oe, Fe);
      return;
    }
    if (ke === j) {
      n(fe, V, oe);
      for (let Ce = 0; Ce < ne.length; Ce++)
        Ee(ne[Ce], V, oe, ae);
      n(L.anchor, V, oe);
      return;
    }
    if (ke === ea) {
      T(L, V, oe);
      return;
    }
    if (ae !== 2 && ue & 1 && $e)
      if (ae === 0)
        $e.beforeEnter(fe), n(fe, V, oe), St(() => $e.enter(fe), de);
      else {
        const { leave: Ce, delayLeave: ee, afterLeave: K } = $e, X = () => {
          L.ctx.isUnmounted ? l(fe) : n(fe, V, oe);
        }, D = () => {
          fe._isLeaving && fe[ws](
            !0
            /* cancelled */
          ), Ce(fe, () => {
            X(), K && K();
          });
        };
        ee ? ee(fe, X, D) : D();
      }
    else
      n(fe, V, oe);
  }, De = (L, V, oe, ae = !1, de = !1) => {
    const {
      type: fe,
      props: ke,
      ref: $e,
      children: ne,
      dynamicChildren: ue,
      shapeFlag: Re,
      patchFlag: Ce,
      dirs: ee,
      cacheIndex: K
    } = L;
    if (Ce === -2 && (de = !1), $e != null && ($s(), No($e, null, oe, L, !0), Cs()), K != null && (V.renderCache[K] = void 0), Re & 256) {
      V.ctx.deactivate(L);
      return;
    }
    const X = Re & 1 && ee, D = !fo(L);
    let W;
    if (D && (W = ke && ke.onVnodeBeforeUnmount) && ls(W, V, L), Re & 6)
      _e(L.component, oe, ae);
    else {
      if (Re & 128) {
        L.suspense.unmount(oe, ae);
        return;
      }
      X && Gs(L, null, V, "beforeUnmount"), Re & 64 ? L.type.remove(
        L,
        V,
        oe,
        Fe,
        ae
      ) : ue && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ue.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (fe !== j || Ce > 0 && Ce & 64) ? Se(
        ue,
        V,
        oe,
        !1,
        !0
      ) : (fe === j && Ce & 384 || !de && Re & 16) && Se(ne, V, oe), ae && je(L);
    }
    (D && (W = ke && ke.onVnodeUnmounted) || X) && St(() => {
      W && ls(W, V, L), X && Gs(L, null, V, "unmounted");
    }, oe);
  }, je = (L) => {
    const { type: V, el: oe, anchor: ae, transition: de } = L;
    if (V === j) {
      Je(oe, ae);
      return;
    }
    if (V === ea) {
      S(L);
      return;
    }
    const fe = () => {
      l(oe), de && !de.persisted && de.afterLeave && de.afterLeave();
    };
    if (L.shapeFlag & 1 && de && !de.persisted) {
      const { leave: ke, delayLeave: $e } = de, ne = () => ke(oe, fe);
      $e ? $e(L.el, fe, ne) : ne();
    } else
      fe();
  }, Je = (L, V) => {
    let oe;
    for (; L !== V; )
      oe = w(L), l(L), L = oe;
    l(V);
  }, _e = (L, V, oe) => {
    const { bum: ae, scope: de, job: fe, subTree: ke, um: $e, m: ne, a: ue } = L;
    bl(ne), bl(ue), ae && fn(ae), de.stop(), fe && (fe.flags |= 8, De(ke, L, V, oe)), $e && St($e, V), St(() => {
      L.isUnmounted = !0;
    }, V);
  }, Se = (L, V, oe, ae = !1, de = !1, fe = 0) => {
    for (let ke = fe; ke < L.length; ke++)
      De(L[ke], V, oe, ae, de);
  }, Ve = (L) => {
    if (L.shapeFlag & 6)
      return Ve(L.component.subTree);
    if (L.shapeFlag & 128)
      return L.suspense.next();
    const V = w(L.anchor || L.el), oe = V && V[xi];
    return oe ? w(oe) : V;
  };
  let ye = !1;
  const le = (L, V, oe) => {
    L == null ? V._vnode && De(V._vnode, null, null, !0) : x(
      V._vnode || null,
      L,
      V,
      null,
      null,
      null,
      oe
    ), V._vnode = L, ye || (ye = !0, ll(), ki(), ye = !1);
  }, Fe = {
    p: x,
    um: De,
    m: Ee,
    r: je,
    mt: te,
    mc: I,
    pc: R,
    pbc: O,
    n: Ve,
    o: e
  };
  return {
    render: le,
    hydrate: void 0,
    createApp: Xc(le)
  };
}
function Zn({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function js({ effect: e, job: t }, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function hu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ga(e, t, o = !1) {
  const n = e.children, l = t.children;
  if (Ae(n) && Ae(l))
    for (let i = 0; i < n.length; i++) {
      const r = n[i];
      let u = l[i];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[i] = Ls(l[i]), u.el = r.el), !o && u.patchFlag !== -2 && Ga(r, u)), u.type === Bn && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = r.el), u.type === _t && !u.el && (u.el = r.el);
    }
}
function yu(e) {
  const t = e.slice(), o = [0];
  let n, l, i, r, u;
  const d = e.length;
  for (n = 0; n < d; n++) {
    const m = e[n];
    if (m !== 0) {
      if (l = o[o.length - 1], e[l] < m) {
        t[n] = l, o.push(n);
        continue;
      }
      for (i = 0, r = o.length - 1; i < r; )
        u = i + r >> 1, e[o[u]] < m ? i = u + 1 : r = u;
      m < e[o[i]] && (i > 0 && (t[n] = o[i - 1]), o[i] = n);
    }
  }
  for (i = o.length, r = o[i - 1]; i-- > 0; )
    o[i] = r, r = t[r];
  return o;
}
function er(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : er(t);
}
function bl(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const tr = (e) => e.__isSuspense;
function wu(e, t) {
  t && t.pendingBranch ? Ae(e) ? t.effects.push(...e) : t.effects.push(e) : Tc(e);
}
const j = Symbol.for("v-fgt"), Bn = Symbol.for("v-txt"), _t = Symbol.for("v-cmt"), ea = Symbol.for("v-stc"), Uo = [];
let Ot = null;
function a(e = !1) {
  Uo.push(Ot = e ? null : []);
}
function bu() {
  Uo.pop(), Ot = Uo[Uo.length - 1] || null;
}
let Ho = 1;
function xn(e, t = !1) {
  Ho += e, e < 0 && Ot && t && (Ot.hasOnce = !0);
}
function sr(e) {
  return e.dynamicChildren = Ho > 0 ? Ot || ro : null, bu(), Ho > 0 && Ot && Ot.push(e), e;
}
function c(e, t, o, n, l, i) {
  return sr(
    s(
      e,
      t,
      o,
      n,
      l,
      i,
      !0
    )
  );
}
function M(e, t, o, n, l) {
  return sr(
    C(
      e,
      t,
      o,
      n,
      l,
      !0
    )
  );
}
function Ko(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ys(e, t) {
  return e.type === t.type && e.key === t.key;
}
const or = ({ key: e }) => e ?? null, pn = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? it(e) || $t(e) || ze(e) ? { i: gt, r: e, k: t, f: !!o } : e : null);
function s(e, t = null, o = null, n = 0, l = null, i = e === j ? 0 : 1, r = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && or(t),
    ref: t && pn(t),
    scopeId: Ci,
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
    ctx: gt
  };
  return u ? (ja(d, o), i & 128 && e.normalize(d)) : o && (d.shapeFlag |= it(o) ? 8 : 16), Ho > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Ot && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Ot.push(d), d;
}
const C = _u;
function _u(e, t = null, o = null, n = 0, l = null, i = !1) {
  if ((!e || e === Ui) && (e = _t), Ko(e)) {
    const u = As(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && ja(u, o), Ho > 0 && !i && Ot && (u.shapeFlag & 6 ? Ot[Ot.indexOf(e)] = u : Ot.push(u)), u.patchFlag = -2, u;
  }
  if (Mu(e) && (e = e.__vccOpts), t) {
    t = ku(t);
    let { class: u, style: d } = t;
    u && !it(u) && (t.class = xe(u)), Ze(d) && (Ua(d) && !Ae(d) && (d = mt({}, d)), t.style = Vt(d));
  }
  const r = it(e) ? 1 : tr(e) ? 128 : Si(e) ? 64 : Ze(e) ? 4 : ze(e) ? 2 : 0;
  return s(
    e,
    t,
    o,
    n,
    l,
    r,
    i,
    !0
  );
}
function ku(e) {
  return e ? Ua(e) || qi(e) ? mt({}, e) : e : null;
}
function As(e, t, o = !1, n = !1) {
  const { props: l, ref: i, patchFlag: r, children: u, transition: d } = e, m = t ? $u(l || {}, t) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && or(m),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && i ? Ae(i) ? i.concat(pn(t)) : [i, pn(t)] : pn(t)
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
    patchFlag: t && e.type !== j ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && As(e.ssContent),
    ssFallback: e.ssFallback && As(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && n && Zs(
    v,
    d.clone(v)
  ), v;
}
function b(e = " ", t = 0) {
  return C(Bn, null, e, t);
}
function y(e = "", t = !1) {
  return t ? (a(), M(_t, null, e)) : C(_t, null, e);
}
function ds(e) {
  return e == null || typeof e == "boolean" ? C(_t) : Ae(e) ? C(
    j,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ko(e) ? Ls(e) : C(Bn, null, String(e));
}
function Ls(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : As(e);
}
function ja(e, t) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Ae(t))
    o = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), ja(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = t._;
      !l && !qi(t) ? t._ctx = gt : l === 3 && gt && (gt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ze(t) ? (t = { default: t, _ctx: gt }, o = 32) : (t = String(t), n & 64 ? (o = 16, t = [b(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function $u(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        t.class !== n.class && (t.class = xe([t.class, n.class]));
      else if (l === "style")
        t.style = Vt([t.style, n.style]);
      else if (Rn(l)) {
        const i = t[l], r = n[l];
        r && i !== r && !(Ae(i) && i.includes(r)) && (t[l] = i ? [].concat(i, r) : r);
      } else l !== "" && (t[l] = n[l]);
  }
  return t;
}
function ls(e, t, o, n = null) {
  es(e, t, 7, [
    o,
    n
  ]);
}
const Cu = Vi();
let xu = 0;
function Su(e, t, o) {
  const n = e.type, l = (t ? t.appContext : e.appContext) || Cu, i = {
    uid: xu++,
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
    scope: new Qr(
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
    propsOptions: Ji(n, l),
    emitsOptions: ji(n, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: et,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: et,
    data: et,
    props: et,
    attrs: et,
    slots: et,
    refs: et,
    setupState: et,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = ou.bind(null, i), e.ce && e.ce(i), i;
}
let kt = null;
const Ha = () => kt || gt;
let Sn, ba;
{
  const e = On(), t = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (i) => {
      l.length > 1 ? l.forEach((r) => r(i)) : l[0](i);
    };
  };
  Sn = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => kt = o
  ), ba = t(
    "__VUE_SSR_SETTERS__",
    (o) => qo = o
  );
}
const Zo = (e) => {
  const t = kt;
  return Sn(e), e.scope.on(), () => {
    e.scope.off(), Sn(t);
  };
}, _l = () => {
  kt && kt.scope.off(), Sn(null);
};
function nr(e) {
  return e.vnode.shapeFlag & 4;
}
let qo = !1;
function Iu(e, t = !1, o = !1) {
  t && ba(t);
  const { props: n, children: l } = e.vnode, i = nr(e);
  cu(e, n, i, t), mu(e, l, o || t);
  const r = i ? Eu(e, t) : void 0;
  return t && ba(!1), r;
}
function Eu(e, t) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Gc);
  const { setup: n } = o;
  if (n) {
    $s();
    const l = e.setupContext = n.length > 1 ? Pu(e) : null, i = Zo(e), r = Xo(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = Ql(r);
    if (Cs(), i(), (u || e.sp) && !fo(e) && Li(e), u) {
      if (r.then(_l, _l), t)
        return r.then((d) => {
          kl(e, d);
        }).catch((d) => {
          An(d, e, 0);
        });
      e.asyncDep = r;
    } else
      kl(e, r);
  } else
    ar(e);
}
function kl(e, t, o) {
  ze(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ze(t) && (e.setupState = wi(t)), ar(e);
}
function ar(e, t, o) {
  const n = e.type;
  e.render || (e.render = n.render || fs);
  {
    const l = Zo(e);
    $s();
    try {
      jc(e);
    } finally {
      Cs(), l();
    }
  }
}
const Tu = {
  get(e, t) {
    return bt(e, "get", ""), e[t];
  }
};
function Pu(e) {
  const t = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Tu),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Vn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(wi(wc(e.exposed)), {
    get(t, o) {
      if (o in t)
        return t[o];
      if (o in Ao)
        return Ao[o](e);
    },
    has(t, o) {
      return o in t || o in Ao;
    }
  })) : e.proxy;
}
function Ru(e, t = !0) {
  return ze(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Mu(e) {
  return ze(e) && "__vccOpts" in e;
}
const F = (e, t) => Cc(e, t, qo);
function Wn(e, t, o) {
  try {
    xn(-1);
    const n = arguments.length;
    return n === 2 ? Ze(t) && !Ae(t) ? Ko(t) ? C(e, null, [t]) : C(e, t) : C(e, null, t) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && Ko(o) && (o = [o]), C(e, t, o));
  } finally {
    xn(1);
  }
}
const Du = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let _a;
const $l = typeof window < "u" && window.trustedTypes;
if ($l)
  try {
    _a = /* @__PURE__ */ $l.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const lr = _a ? (e) => _a.createHTML(e) : (e) => e, Lu = "http://www.w3.org/2000/svg", Ou = "http://www.w3.org/1998/Math/MathML", ys = typeof document < "u" ? document : null, Cl = ys && /* @__PURE__ */ ys.createElement("template"), Nu = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, n) => {
    const l = t === "svg" ? ys.createElementNS(Lu, e) : t === "mathml" ? ys.createElementNS(Ou, e) : o ? ys.createElement(e, { is: o }) : ys.createElement(e);
    return e === "select" && n && n.multiple != null && l.setAttribute("multiple", n.multiple), l;
  },
  createText: (e) => ys.createTextNode(e),
  createComment: (e) => ys.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ys.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, o, n, l, i) {
    const r = o ? o.previousSibling : t.lastChild;
    if (l && (l === i || l.nextSibling))
      for (; t.insertBefore(l.cloneNode(!0), o), !(l === i || !(l = l.nextSibling)); )
        ;
    else {
      Cl.innerHTML = lr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Cl.content;
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
      r ? r.nextSibling : t.firstChild,
      // last
      o ? o.previousSibling : t.lastChild
    ];
  }
}, Ps = "transition", So = "animation", go = Symbol("_vtc"), ir = {
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
}, rr = /* @__PURE__ */ mt(
  {},
  Pi,
  ir
), Au = (e) => (e.displayName = "Transition", e.props = rr, e), Uu = /* @__PURE__ */ Au(
  (e, { slots: t }) => Wn(Mc, cr(e), t)
), Hs = (e, t = []) => {
  Ae(e) ? e.forEach((o) => o(...t)) : e && e(...t);
}, xl = (e) => e ? Ae(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function cr(e) {
  const t = {};
  for (const Y in e)
    Y in ir || (t[Y] = e[Y]);
  if (e.css === !1)
    return t;
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
    leaveFromClass: h = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: p = `${o}-leave-to`
  } = e, _ = zu(l), x = _ && _[0], $ = _ && _[1], {
    onBeforeEnter: P,
    onEnter: N,
    onEnterCancelled: T,
    onLeave: S,
    onLeaveCancelled: q,
    onBeforeAppear: B = P,
    onAppear: A = N,
    onAppearCancelled: I = T
  } = t, E = (Y, H, te, Z) => {
    Y._enterCancelled = Z, Rs(Y, H ? v : u), Rs(Y, H ? m : r), te && te();
  }, O = (Y, H) => {
    Y._isLeaving = !1, Rs(Y, h), Rs(Y, p), Rs(Y, w), H && H();
  }, re = (Y) => (H, te) => {
    const Z = Y ? A : N, U = () => E(H, Y, te);
    Hs(Z, [H, U]), Sl(() => {
      Rs(H, Y ? d : i), rs(H, Y ? v : u), xl(Z) || Il(H, n, x, U);
    });
  };
  return mt(t, {
    onBeforeEnter(Y) {
      Hs(P, [Y]), rs(Y, i), rs(Y, r);
    },
    onBeforeAppear(Y) {
      Hs(B, [Y]), rs(Y, d), rs(Y, m);
    },
    onEnter: re(!1),
    onAppear: re(!0),
    onLeave(Y, H) {
      Y._isLeaving = !0;
      const te = () => O(Y, H);
      rs(Y, h), Y._enterCancelled ? (rs(Y, w), ka(Y)) : (ka(Y), rs(Y, w)), Sl(() => {
        Y._isLeaving && (Rs(Y, h), rs(Y, p), xl(S) || Il(Y, n, $, te));
      }), Hs(S, [Y, te]);
    },
    onEnterCancelled(Y) {
      E(Y, !1, void 0, !0), Hs(T, [Y]);
    },
    onAppearCancelled(Y) {
      E(Y, !0, void 0, !0), Hs(I, [Y]);
    },
    onLeaveCancelled(Y) {
      O(Y), Hs(q, [Y]);
    }
  });
}
function zu(e) {
  if (e == null)
    return null;
  if (Ze(e))
    return [ta(e.enter), ta(e.leave)];
  {
    const t = ta(e);
    return [t, t];
  }
}
function ta(e) {
  return Gr(e);
}
function rs(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[go] || (e[go] = /* @__PURE__ */ new Set())).add(t);
}
function Rs(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[go];
  o && (o.delete(t), o.size || (e[go] = void 0));
}
function Sl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Fu = 0;
function Il(e, t, o, n) {
  const l = e._endId = ++Fu, i = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(i, o);
  const { type: r, timeout: u, propCount: d } = ur(e, t);
  if (!r)
    return n();
  const m = r + "end";
  let v = 0;
  const h = () => {
    e.removeEventListener(m, w), i();
  }, w = (p) => {
    p.target === e && ++v >= d && h();
  };
  setTimeout(() => {
    v < d && h();
  }, u + 1), e.addEventListener(m, w);
}
function ur(e, t) {
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${Ps}Delay`), i = n(`${Ps}Duration`), r = El(l, i), u = n(`${So}Delay`), d = n(`${So}Duration`), m = El(u, d);
  let v = null, h = 0, w = 0;
  t === Ps ? r > 0 && (v = Ps, h = r, w = i.length) : t === So ? m > 0 && (v = So, h = m, w = d.length) : (h = Math.max(r, m), v = h > 0 ? r > m ? Ps : So : null, w = v ? v === Ps ? i.length : d.length : 0);
  const p = v === Ps && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Ps}Property`).toString()
  );
  return {
    type: v,
    timeout: h,
    propCount: w,
    hasTransform: p
  };
}
function El(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((o, n) => Tl(o) + Tl(e[n])));
}
function Tl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ka(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Bu(e, t, o) {
  const n = e[go];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const Pl = Symbol("_vod"), Vu = Symbol("_vsh"), Wu = Symbol(""), Gu = /(?:^|;)\s*display\s*:/;
function ju(e, t, o) {
  const n = e.style, l = it(o);
  let i = !1;
  if (o && !l) {
    if (t)
      if (it(t))
        for (const r of t.split(";")) {
          const u = r.slice(0, r.indexOf(":")).trim();
          o[u] == null && gn(n, u, "");
        }
      else
        for (const r in t)
          o[r] == null && gn(n, r, "");
    for (const r in o)
      r === "display" && (i = !0), gn(n, r, o[r]);
  } else if (l) {
    if (t !== o) {
      const r = n[Wu];
      r && (o += ";" + r), n.cssText = o, i = Gu.test(o);
    }
  } else t && e.removeAttribute("style");
  Pl in e && (e[Pl] = i ? n.display : "", e[Vu] && (n.display = "none"));
}
const Rl = /\s*!important$/;
function gn(e, t, o) {
  if (Ae(o))
    o.forEach((n) => gn(e, t, n));
  else if (o == null && (o = ""), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const n = Hu(e, t);
    Rl.test(o) ? e.setProperty(
      zs(n),
      o.replace(Rl, ""),
      "important"
    ) : e[n] = o;
  }
}
const Ml = ["Webkit", "Moz", "ms"], sa = {};
function Hu(e, t) {
  const o = sa[t];
  if (o)
    return o;
  let n = Bt(t);
  if (n !== "filter" && n in e)
    return sa[t] = n;
  n = Dn(n);
  for (let l = 0; l < Ml.length; l++) {
    const i = Ml[l] + n;
    if (i in e)
      return sa[t] = i;
  }
  return t;
}
const Dl = "http://www.w3.org/1999/xlink";
function Ll(e, t, o, n, l, i = Jr(t)) {
  n && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Dl, t.slice(6, t.length)) : e.setAttributeNS(Dl, t, o) : o == null || i && !si(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Qt(o) ? String(o) : o
  );
}
function Ol(e, t, o, n, l) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? lr(o) : o);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const u = i === "OPTION" ? e.getAttribute("value") || "" : e.value, d = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (u !== d || !("_value" in e)) && (e.value = d), o == null && e.removeAttribute(t), e._value = o;
    return;
  }
  let r = !1;
  if (o === "" || o == null) {
    const u = typeof e[t];
    u === "boolean" ? o = si(o) : o == null && u === "string" ? (o = "", r = !0) : u === "number" && (o = 0, r = !0);
  }
  try {
    e[t] = o;
  } catch {
  }
  r && e.removeAttribute(l || t);
}
function ks(e, t, o, n) {
  e.addEventListener(t, o, n);
}
function Ku(e, t, o, n) {
  e.removeEventListener(t, o, n);
}
const Nl = Symbol("_vei");
function qu(e, t, o, n, l = null) {
  const i = e[Nl] || (e[Nl] = {}), r = i[t];
  if (n && r)
    r.value = n;
  else {
    const [u, d] = Yu(t);
    if (n) {
      const m = i[t] = Qu(
        n,
        l
      );
      ks(e, u, m, d);
    } else r && (Ku(e, u, r, d), i[t] = void 0);
  }
}
const Al = /(?:Once|Passive|Capture)$/;
function Yu(e) {
  let t;
  if (Al.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Al); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : zs(e.slice(2)), t];
}
let oa = 0;
const Ju = /* @__PURE__ */ Promise.resolve(), Xu = () => oa || (Ju.then(() => oa = 0), oa = Date.now());
function Qu(e, t) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    es(
      Zu(n, o.value),
      t,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = Xu(), o;
}
function Zu(e, t) {
  if (Ae(t)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, t.map(
      (n) => (l) => !l._stopped && n && n(l)
    );
  } else
    return t;
}
const Ul = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ed = (e, t, o, n, l, i) => {
  const r = l === "svg";
  t === "class" ? Bu(e, n, r) : t === "style" ? ju(e, o, n) : Rn(t) ? Ea(t) || qu(e, t, o, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : td(e, t, n, r)) ? (Ol(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ll(e, t, n, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !it(n)) ? Ol(e, Bt(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Ll(e, t, n, r));
};
function td(e, t, o, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ul(t) && ze(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return Ul(t) && it(o) ? !1 : t in e;
}
const dr = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), In = Symbol("_moveCb"), zl = Symbol("_enterCb"), sd = (e) => (delete e.props.mode, e), od = /* @__PURE__ */ sd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ mt({}, rr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const o = Ha(), n = Ti();
    let l, i;
    return Ni(() => {
      if (!l.length)
        return;
      const r = e.moveClass || `${e.name || "v"}-move`;
      if (!rd(
        l[0].el,
        o.vnode.el,
        r
      )) {
        l = [];
        return;
      }
      l.forEach(ad), l.forEach(ld);
      const u = l.filter(id);
      ka(o.vnode.el), u.forEach((d) => {
        const m = d.el, v = m.style;
        rs(m, r), v.transform = v.webkitTransform = v.transitionDuration = "";
        const h = m[In] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", h), m[In] = null, Rs(m, r));
        };
        m.addEventListener("transitionend", h);
      }), l = [];
    }), () => {
      const r = Ye(e), u = cr(r);
      let d = r.tag || j;
      if (l = [], i)
        for (let m = 0; m < i.length; m++) {
          const v = i[m];
          v.el && v.el instanceof Element && (l.push(v), Zs(
            v,
            jo(
              v,
              u,
              n,
              o
            )
          ), dr.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      i = t.default ? Fa(t.default()) : [];
      for (let m = 0; m < i.length; m++) {
        const v = i[m];
        v.key != null && Zs(
          v,
          jo(v, u, n, o)
        );
      }
      return C(d, null, i);
    };
  }
}), nd = od;
function ad(e) {
  const t = e.el;
  t[In] && t[In](), t[zl] && t[zl]();
}
function ld(e) {
  fr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function id(e) {
  const t = dr.get(e), o = fr.get(e), n = t.left - o.left, l = t.top - o.top;
  if (n || l) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${n}px,${l}px)`, i.transitionDuration = "0s", e;
  }
}
function rd(e, t, o) {
  const n = e.cloneNode(), l = e[go];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && n.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && n.classList.add(u)), n.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(n);
  const { hasTransform: r } = ur(n);
  return i.removeChild(n), r;
}
const Us = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ae(t) ? (o) => fn(t, o) : t;
};
function cd(e) {
  e.target.composing = !0;
}
function Fl(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ft = Symbol("_assign");
function Bl(e, t, o) {
  return t && (e = e.trim()), o && (e = Ln(e)), e;
}
const Nt = {
  created(e, { modifiers: { lazy: t, trim: o, number: n } }, l) {
    e[Ft] = Us(l);
    const i = n || l.props && l.props.type === "number";
    ks(e, t ? "change" : "input", (r) => {
      r.target.composing || e[Ft](Bl(e.value, o, i));
    }), (o || i) && ks(e, "change", () => {
      e.value = Bl(e.value, o, i);
    }), t || (ks(e, "compositionstart", cd), ks(e, "compositionend", Fl), ks(e, "change", Fl));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: n, trim: l, number: i } }, r) {
    if (e[Ft] = Us(r), e.composing) return;
    const u = (i || e.type === "number") && !/^0\d/.test(e.value) ? Ln(e.value) : e.value, d = t ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (n && t === o || l && e.value.trim() === d) || (e.value = d));
  }
}, Yo = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, o) {
    e[Ft] = Us(o), ks(e, "change", () => {
      const n = e._modelValue, l = ho(e), i = e.checked, r = e[Ft];
      if (Ae(n)) {
        const u = Ra(n, l), d = u !== -1;
        if (i && !d)
          r(n.concat(l));
        else if (!i && d) {
          const m = [...n];
          m.splice(u, 1), r(m);
        }
      } else if (yo(n)) {
        const u = new Set(n);
        i ? u.add(l) : u.delete(l), r(u);
      } else
        r(mr(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Vl,
  beforeUpdate(e, t, o) {
    e[Ft] = Us(o), Vl(e, t, o);
  }
};
function Vl(e, { value: t, oldValue: o }, n) {
  e._modelValue = t;
  let l;
  if (Ae(t))
    l = Ra(t, n.props.value) > -1;
  else if (yo(t))
    l = t.has(n.props.value);
  else {
    if (t === o) return;
    l = Qs(t, mr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const qt = {
  created(e, { value: t }, o) {
    e.checked = Qs(t, o.props.value), e[Ft] = Us(o), ks(e, "change", () => {
      e[Ft](ho(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: o }, n) {
    e[Ft] = Us(n), t !== o && (e.checked = Qs(t, n.props.value));
  }
}, ms = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: o } }, n) {
    const l = yo(t);
    ks(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (r) => r.selected).map(
        (r) => o ? Ln(ho(r)) : ho(r)
      );
      e[Ft](
        e.multiple ? l ? new Set(i) : i : i[0]
      ), e._assigning = !0, Qo(() => {
        e._assigning = !1;
      });
    }), e[Ft] = Us(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Wl(e, t);
  },
  beforeUpdate(e, t, o) {
    e[Ft] = Us(o);
  },
  updated(e, { value: t }) {
    e._assigning || Wl(e, t);
  }
};
function Wl(e, t) {
  const o = e.multiple, n = Ae(t);
  if (!(o && !n && !yo(t))) {
    for (let l = 0, i = e.options.length; l < i; l++) {
      const r = e.options[l], u = ho(r);
      if (o)
        if (n) {
          const d = typeof u;
          d === "string" || d === "number" ? r.selected = t.some((m) => String(m) === String(u)) : r.selected = Ra(t, u) > -1;
        } else
          r.selected = t.has(u);
      else if (Qs(ho(r), t)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function ho(e) {
  return "_value" in e ? e._value : e.value;
}
function mr(e, t) {
  const o = t ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : t;
}
const Gn = {
  created(e, t, o) {
    rn(e, t, o, null, "created");
  },
  mounted(e, t, o) {
    rn(e, t, o, null, "mounted");
  },
  beforeUpdate(e, t, o, n) {
    rn(e, t, o, n, "beforeUpdate");
  },
  updated(e, t, o, n) {
    rn(e, t, o, n, "updated");
  }
};
function ud(e, t) {
  switch (e) {
    case "SELECT":
      return ms;
    case "TEXTAREA":
      return Nt;
    default:
      switch (t) {
        case "checkbox":
          return Yo;
        case "radio":
          return qt;
        default:
          return Nt;
      }
  }
}
function rn(e, t, o, n, l) {
  const r = ud(
    e.tagName,
    o.props && o.props.type
  )[l];
  r && r(e, t, o, n);
}
const dd = ["ctrl", "shift", "alt", "meta"], fd = {
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
  exact: (e, t) => dd.some((o) => e[`${o}Key`] && !t.includes(o))
}, nt = (e, t) => {
  const o = e._withMods || (e._withMods = {}), n = t.join(".");
  return o[n] || (o[n] = ((l, ...i) => {
    for (let r = 0; r < t.length; r++) {
      const u = fd[t[r]];
      if (u && u(l, t)) return;
    }
    return e(l, ...i);
  }));
}, md = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Jt = (e, t) => {
  const o = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return o[n] || (o[n] = ((l) => {
    if (!("key" in l))
      return;
    const i = zs(l.key);
    if (t.some(
      (r) => r === i || md[r] === i
    ))
      return e(l);
  }));
}, vd = /* @__PURE__ */ mt({ patchProp: ed }, Nu);
let Gl;
function pd() {
  return Gl || (Gl = pu(vd));
}
const Ka = ((...e) => {
  const t = pd().createApp(...e), { mount: o } = t;
  return t.mount = (n) => {
    const l = hd(n);
    if (!l) return;
    const i = t._component;
    !ze(i) && !i.render && !i.template && (i.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const r = o(l, !1, gd(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), r;
  }, t;
});
function gd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function hd(e) {
  return it(e) ? document.querySelector(e) : e;
}
const yd = { class: "panel-layout" }, wd = {
  key: 0,
  class: "panel-layout-header"
}, bd = {
  key: 1,
  class: "panel-layout-search"
}, _d = { class: "panel-layout-content" }, kd = {
  key: 2,
  class: "panel-layout-footer"
}, $d = /* @__PURE__ */ me({
  __name: "PanelLayout",
  setup(e) {
    return (t, o) => (a(), c("div", yd, [
      t.$slots.header ? (a(), c("div", wd, [
        Ge(t.$slots, "header", {}, void 0)
      ])) : y("", !0),
      t.$slots.search ? (a(), c("div", bd, [
        Ge(t.$slots, "search", {}, void 0)
      ])) : y("", !0),
      s("div", _d, [
        Ge(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (a(), c("div", kd, [
        Ge(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), pe = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of t)
    o[n] = l;
  return o;
}, Tt = /* @__PURE__ */ pe($d, [["__scopeId", "data-v-21565df9"]]), Cd = {
  key: 0,
  class: "panel-title-prefix"
}, xd = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Sd = /* @__PURE__ */ me({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (t, o) => (a(), M(Ba(`h${e.level}`), {
      class: xe(["panel-title", e.variant])
    }, {
      default: g(() => [
        e.showPrefix ? (a(), c("span", Cd, f(e.prefix), 1)) : (a(), c("span", xd)),
        Ge(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Id = /* @__PURE__ */ pe(Sd, [["__scopeId", "data-v-c3875efc"]]), Ed = ["title"], Td = ["width", "height"], Pd = /* @__PURE__ */ me({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (a(), c("button", {
      class: "info-button",
      title: e.title,
      onClick: o[0] || (o[0] = (n) => t.$emit("click"))
    }, [
      (a(), c("svg", {
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
      ])], 8, Td))
    ], 8, Ed));
  }
}), vr = /* @__PURE__ */ pe(Pd, [["__scopeId", "data-v-6fc7f16d"]]), Rd = { class: "header-left" }, Md = {
  key: 0,
  class: "header-actions"
}, Dd = /* @__PURE__ */ me({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (t, o) => (a(), c("div", {
      class: xe(["panel-header", { stacked: e.stacked }])
    }, [
      s("div", Rd, [
        C(Id, { "show-prefix": e.showPrefix }, {
          default: g(() => [
            b(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), M(vr, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => t.$emit("info-click"))
        })) : y("", !0)
      ]),
      t.$slots.actions ? (a(), c("div", Md, [
        Ge(t.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Pt = /* @__PURE__ */ pe(Dd, [["__scopeId", "data-v-55a62cd6"]]), Ld = {
  key: 0,
  class: "section-title-count"
}, Od = {
  key: 1,
  class: "section-title-icon"
}, Nd = /* @__PURE__ */ me({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (a(), M(Ba(`h${e.level}`), {
      class: xe(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && t.$emit("click"))
    }, {
      default: g(() => [
        Ge(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), c("span", Ld, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), c("span", Od, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Lt = /* @__PURE__ */ pe(Nd, [["__scopeId", "data-v-559361eb"]]), Ad = { class: "status-grid" }, Ud = { class: "status-grid__columns" }, zd = { class: "status-grid__column" }, Fd = { class: "status-grid__title" }, Bd = { class: "status-grid__column status-grid__column--right" }, Vd = { class: "status-grid__title" }, Wd = {
  key: 0,
  class: "status-grid__footer"
}, Gd = /* @__PURE__ */ me({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, o) => (a(), c("div", Ad, [
      s("div", Ud, [
        s("div", zd, [
          s("h4", Fd, f(e.leftTitle), 1),
          Ge(t.$slots, "left", {}, void 0)
        ]),
        s("div", Bd, [
          s("h4", Vd, f(e.rightTitle), 1),
          Ge(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (a(), c("div", Wd, [
        Ge(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), jd = /* @__PURE__ */ pe(Gd, [["__scopeId", "data-v-73b7ba3f"]]), Hd = {
  key: 0,
  class: "status-item__icon"
}, Kd = {
  key: 1,
  class: "status-item__count"
}, qd = { class: "status-item__label" }, Yd = /* @__PURE__ */ me({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = F(() => `status-item--${t.variant}`);
    return (n, l) => (a(), c("div", {
      class: xe(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), c("span", Hd, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), c("span", Kd, f(e.count), 1)) : y("", !0),
      s("span", qd, f(e.label), 1)
    ], 2));
  }
}), is = /* @__PURE__ */ pe(Yd, [["__scopeId", "data-v-6f929183"]]), Jd = { class: "issue-card__header" }, Xd = { class: "issue-card__icon" }, Qd = { class: "issue-card__title" }, Zd = {
  key: 0,
  class: "issue-card__content"
}, ef = {
  key: 0,
  class: "issue-card__description"
}, tf = {
  key: 1,
  class: "issue-card__items"
}, sf = {
  key: 2,
  class: "issue-card__actions"
}, of = /* @__PURE__ */ me({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const t = e, o = F(() => `issue-card--${t.severity}`);
    return (n, l) => (a(), c("div", {
      class: xe(["issue-card", o.value])
    }, [
      s("div", Jd, [
        s("span", Xd, f(e.icon), 1),
        s("h4", Qd, f(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), c("div", Zd, [
        e.description ? (a(), c("p", ef, f(e.description), 1)) : y("", !0),
        Ge(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), c("div", tf, [
        (a(!0), c(j, null, ge(e.items, (i, r) => (a(), c("div", {
          key: r,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, f(i), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), c("div", sf, [
        Ge(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Ht = /* @__PURE__ */ pe(of, [["__scopeId", "data-v-df6aa348"]]), nf = ["type", "disabled"], af = {
  key: 0,
  class: "spinner"
}, lf = /* @__PURE__ */ me({
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
    return (t, o) => (a(), c("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: xe(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => t.$emit("click", n))
    }, [
      e.loading ? (a(), c("span", af)) : y("", !0),
      e.loading ? y("", !0) : Ge(t.$slots, "default", { key: 1 }, void 0)
    ], 10, nf));
  }
}), ie = /* @__PURE__ */ pe(lf, [["__scopeId", "data-v-772abe47"]]), rf = { class: "empty-state" }, cf = {
  key: 0,
  class: "empty-icon"
}, uf = { class: "empty-message" }, df = /* @__PURE__ */ me({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, o) => (a(), c("div", rf, [
      e.icon ? (a(), c("div", cf, f(e.icon), 1)) : y("", !0),
      s("p", uf, f(e.message), 1),
      e.actionLabel ? (a(), M(ie, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => t.$emit("action"))
      }, {
        default: g(() => [
          b(f(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), ts = /* @__PURE__ */ pe(df, [["__scopeId", "data-v-4466284f"]]), ff = /* @__PURE__ */ me({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (t, o) => (a(), c("span", {
      class: xe(["detail-label"]),
      style: Vt({ minWidth: e.minWidth })
    }, [
      Ge(t.$slots, "default", {}, void 0)
    ], 4));
  }
}), hn = /* @__PURE__ */ pe(ff, [["__scopeId", "data-v-75e9eeb8"]]), mf = /* @__PURE__ */ me({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (a(), c("span", {
      class: xe(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      Ge(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), $a = /* @__PURE__ */ pe(mf, [["__scopeId", "data-v-2f186e4c"]]), vf = { class: "detail-row" }, pf = /* @__PURE__ */ me({
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
    return (t, o) => (a(), c("div", vf, [
      C(hn, { "min-width": e.labelMinWidth }, {
        default: g(() => [
          b(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), M($a, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: g(() => [
          b(f(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : Ge(t.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), ut = /* @__PURE__ */ pe(pf, [["__scopeId", "data-v-ef15664a"]]), gf = { class: "modal-header" }, hf = { class: "modal-body" }, yf = { class: "status-section" }, wf = {
  key: 0,
  class: "status-section"
}, bf = { class: "section-header-row" }, _f = {
  key: 0,
  class: "workflow-group"
}, kf = { class: "workflow-group-header" }, $f = { class: "workflow-group-title" }, Cf = { class: "workflow-list" }, xf = { class: "workflow-name" }, Sf = { class: "workflow-issue" }, If = {
  key: 1,
  class: "workflow-group"
}, Ef = { class: "workflow-group-header" }, Tf = { class: "workflow-group-title" }, Pf = { class: "workflow-list" }, Rf = { class: "workflow-name" }, Mf = { class: "workflow-issue" }, Df = {
  key: 2,
  class: "workflow-group"
}, Lf = { class: "workflow-group-header" }, Of = { class: "workflow-group-title" }, Nf = { class: "workflow-list" }, Af = { class: "workflow-name" }, Uf = {
  key: 3,
  class: "workflow-group"
}, zf = { class: "workflow-group-header" }, Ff = { class: "workflow-group-title" }, Bf = { class: "workflow-list" }, Vf = { class: "workflow-name" }, Wf = {
  key: 4,
  class: "workflow-group"
}, Gf = { class: "workflow-group-header" }, jf = { class: "workflow-group-title" }, Hf = { class: "workflow-list" }, Kf = { class: "workflow-name" }, qf = {
  key: 5,
  class: "workflow-group"
}, Yf = { class: "workflow-group-title" }, Jf = { class: "expand-icon" }, Xf = {
  key: 0,
  class: "workflow-list"
}, Qf = { class: "workflow-name" }, Zf = {
  key: 1,
  class: "status-section"
}, em = {
  key: 0,
  class: "change-group"
}, tm = { class: "change-group-header" }, sm = { class: "change-group-title" }, om = { class: "change-list" }, nm = { class: "node-name" }, am = {
  key: 0,
  class: "dev-badge"
}, lm = {
  key: 1,
  class: "change-group"
}, im = { class: "change-group-header" }, rm = { class: "change-group-title" }, cm = { class: "change-list" }, um = { class: "node-name" }, dm = {
  key: 0,
  class: "dev-badge"
}, fm = {
  key: 2,
  class: "change-group"
}, mm = { class: "change-list" }, vm = { class: "change-item" }, pm = { class: "node-name" }, gm = {
  key: 3,
  class: "change-group"
}, hm = {
  key: 2,
  class: "status-section"
}, ym = { class: "section-header-row" }, wm = {
  key: 0,
  class: "drift-item"
}, bm = { class: "drift-list" }, _m = {
  key: 0,
  class: "drift-list-more"
}, km = {
  key: 1,
  class: "drift-item"
}, $m = { class: "drift-list" }, Cm = {
  key: 0,
  class: "drift-list-more"
}, xm = {
  key: 2,
  class: "drift-item"
}, Sm = { class: "drift-list" }, Im = { class: "version-actual" }, Em = { class: "version-expected" }, Tm = {
  key: 0,
  class: "drift-list-more"
}, Pm = {
  key: 3,
  class: "drift-item"
}, Rm = { class: "repair-action" }, Mm = {
  key: 3,
  class: "status-section"
}, Dm = { class: "info-box" }, Lm = { class: "drift-list" }, Om = {
  key: 0,
  class: "drift-list-more"
}, Nm = {
  key: 4,
  class: "status-section"
}, Am = { class: "warning-box" }, Um = {
  key: 5,
  class: "empty-state-inline"
}, zm = { class: "modal-actions" }, Fm = /* @__PURE__ */ me({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const t = e, o = k(!1);
    Qe(() => {
      console.log("StatusDetailModal mounted, initial show value:", t.show);
    }), Ct(() => t.show, (w, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", w);
    }, { immediate: !0 });
    const n = F(() => {
      var w, p, _;
      return ((_ = (p = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), l = F(() => {
      var w, p, _;
      return ((_ = (p = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), i = F(() => {
      var w, p, _;
      return ((_ = (p = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : p.synced) == null ? void 0 : _.filter((x) => {
        var P, N, T;
        const $ = (T = (N = (P = t.status) == null ? void 0 : P.workflows) == null ? void 0 : N.analyzed) == null ? void 0 : T.find((S) => S.name === x);
        return !$ || $.status !== "broken";
      })) || [];
    }), r = F(() => {
      var w, p, _, x, $;
      return (w = t.status) != null && w.workflows ? (((p = t.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((_ = t.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((x = t.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || ((($ = t.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), u = F(() => {
      var p, _, x;
      const w = (p = t.status) == null ? void 0 : p.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((x = w.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = F(() => {
      var w, p, _, x, $, P;
      return !r.value && !u.value && ((p = (w = t.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((_ = t.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((P = ($ = (x = t.status) == null ? void 0 : x.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : P.length) ?? 0) === 0;
    }), m = F(() => {
      var p, _;
      const w = (_ = (p = t.status) == null ? void 0 : p.git_changes) == null ? void 0 : _.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function v(w) {
      return typeof w == "string" ? w : w.name;
    }
    function h(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, p) => {
      var _, x, $, P, N, T, S, q, B, A, I, E, O, re, Y, H, te, Z, U, z, R, be;
      return a(), M(ht, { to: "body" }, [
        e.show ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (ve) => w.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = nt(() => {
            }, ["stop"]))
          }, [
            s("div", gf, [
              p[8] || (p[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (ve) => w.$emit("close"))
              }, "✕")
            ]),
            s("div", hf, [
              s("div", yf, [
                C(Lt, { level: "4" }, {
                  default: g(() => [...p[9] || (p[9] = [
                    b("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                C(ut, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              r.value ? (a(), c("div", wf, [
                s("div", bf, [
                  C(Lt, { level: "4" }, {
                    default: g(() => [...p[10] || (p[10] = [
                      b("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: p[1] || (p[1] = (ve) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), c("div", _f, [
                  s("div", kf, [
                    p[11] || (p[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", $f, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  s("div", Cf, [
                    (a(!0), c(j, null, ge(n.value, (ve) => (a(), c("div", {
                      key: ve.name,
                      class: "workflow-item"
                    }, [
                      s("span", xf, f(ve.name), 1),
                      s("span", Sf, f(ve.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), c("div", If, [
                  s("div", Ef, [
                    p[12] || (p[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", Tf, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  s("div", Pf, [
                    (a(!0), c(j, null, ge(l.value, (ve) => (a(), c("div", {
                      key: ve.name,
                      class: "workflow-item"
                    }, [
                      s("span", Rf, f(ve.name), 1),
                      s("span", Mf, f(ve.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = (_ = e.status.workflows) == null ? void 0 : _.new) != null && x.length ? (a(), c("div", Df, [
                  s("div", Lf, [
                    p[13] || (p[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", Of, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", Nf, [
                    (a(!0), c(j, null, ge(e.status.workflows.new, (ve) => (a(), c("div", {
                      key: ve,
                      class: "workflow-item"
                    }, [
                      s("span", Af, f(ve), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (P = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && P.length ? (a(), c("div", Uf, [
                  s("div", zf, [
                    p[14] || (p[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", Ff, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", Bf, [
                    (a(!0), c(j, null, ge(e.status.workflows.modified, (ve) => (a(), c("div", {
                      key: ve,
                      class: "workflow-item"
                    }, [
                      s("span", Vf, f(ve), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (T = (N = e.status.workflows) == null ? void 0 : N.deleted) != null && T.length ? (a(), c("div", Wf, [
                  s("div", Gf, [
                    p[15] || (p[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", jf, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", Hf, [
                    (a(!0), c(j, null, ge(e.status.workflows.deleted, (ve) => (a(), c("div", {
                      key: ve,
                      class: "workflow-item"
                    }, [
                      s("span", Kf, f(ve), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                i.value.length ? (a(), c("div", qf, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (ve) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", Yf, "SYNCED (" + f(i.value.length) + ")", 1),
                    s("span", Jf, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), c("div", Xf, [
                    (a(!0), c(j, null, ge(i.value, (ve) => (a(), c("div", {
                      key: ve,
                      class: "workflow-item"
                    }, [
                      s("span", Qf, f(ve), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (a(), c("div", Zf, [
                C(Lt, { level: "4" }, {
                  default: g(() => [...p[17] || (p[17] = [
                    b("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (q = (S = e.status.git_changes) == null ? void 0 : S.nodes_added) != null && q.length ? (a(), c("div", em, [
                  s("div", tm, [
                    p[18] || (p[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", sm, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", om, [
                    (a(!0), c(j, null, ge(e.status.git_changes.nodes_added, (ve) => (a(), c("div", {
                      key: v(ve),
                      class: "change-item"
                    }, [
                      s("span", nm, f(v(ve)), 1),
                      h(ve) ? (a(), c("span", am, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (A = (B = e.status.git_changes) == null ? void 0 : B.nodes_removed) != null && A.length ? (a(), c("div", lm, [
                  s("div", im, [
                    p[19] || (p[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", rm, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", cm, [
                    (a(!0), c(j, null, ge(e.status.git_changes.nodes_removed, (ve) => (a(), c("div", {
                      key: v(ve),
                      class: "change-item"
                    }, [
                      s("span", um, f(v(ve)), 1),
                      h(ve) ? (a(), c("span", dm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = e.status.git_changes) != null && I.workflow_changes ? (a(), c("div", fm, [
                  p[20] || (p[20] = s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  s("div", mm, [
                    s("div", vm, [
                      s("span", pm, f(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (E = e.status.git_changes) != null && E.has_other_changes ? (a(), c("div", gm, [...p[21] || (p[21] = [
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
              (O = e.status.comparison) != null && O.is_synced ? y("", !0) : (a(), c("div", hm, [
                s("div", ym, [
                  C(Lt, { level: "4" }, {
                    default: g(() => [...p[22] || (p[22] = [
                      b("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: p[3] || (p[3] = (ve) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                p[26] || (p[26] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("span", null, "Environment needs repair")
                ], -1)),
                (Y = (re = e.status.comparison) == null ? void 0 : re.missing_nodes) != null && Y.length ? (a(), c("div", wm, [
                  C(ut, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", bm, [
                    (a(!0), c(j, null, ge(e.status.comparison.missing_nodes.slice(0, 10), (ve) => (a(), c("div", {
                      key: ve,
                      class: "drift-list-item"
                    }, " - " + f(ve), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), c("div", _m, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (te = (H = e.status.comparison) == null ? void 0 : H.extra_nodes) != null && te.length ? (a(), c("div", km, [
                  C(ut, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", $m, [
                    (a(!0), c(j, null, ge(e.status.comparison.extra_nodes.slice(0, 10), (ve) => (a(), c("div", {
                      key: ve,
                      class: "drift-list-item"
                    }, " - " + f(ve), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), c("div", Cm, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (U = (Z = e.status.comparison) == null ? void 0 : Z.version_mismatches) != null && U.length ? (a(), c("div", xm, [
                  C(ut, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", Sm, [
                    (a(!0), c(j, null, ge(e.status.comparison.version_mismatches.slice(0, 10), (ve) => (a(), c("div", {
                      key: ve.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      b(f(ve.name) + ": ", 1),
                      s("span", Im, f(ve.actual), 1),
                      p[23] || (p[23] = b(" → ", -1)),
                      s("span", Em, f(ve.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), c("div", Tm, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((z = e.status.comparison) == null ? void 0 : z.packages_in_sync) === !1 ? (a(), c("div", Pm, [
                  C(ut, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                s("div", Rm, [
                  C(ie, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: p[4] || (p[4] = (ve) => w.$emit("repair"))
                  }, {
                    default: g(() => [...p[24] || (p[24] = [
                      b(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = s("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (be = (R = e.status.comparison) == null ? void 0 : R.disabled_nodes) != null && be.length ? (a(), c("div", Mm, [
                C(Lt, { level: "4" }, {
                  default: g(() => [...p[27] || (p[27] = [
                    b("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", Dm, [
                  p[28] || (p[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", Lm, [
                  (a(!0), c(j, null, ge(e.status.comparison.disabled_nodes.slice(0, 10), (ve) => (a(), c("div", {
                    key: ve,
                    class: "drift-list-item"
                  }, " • " + f(ve), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), c("div", Om, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), c("div", Nm, [
                C(Lt, { level: "4" }, {
                  default: g(() => [...p[29] || (p[29] = [
                    b("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", Am, [
                  p[30] || (p[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                p[31] || (p[31] = s("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (a(), c("div", Um, [...p[32] || (p[32] = [
                s("div", { class: "empty-icon" }, "✅", -1),
                s("div", { class: "empty-message" }, [
                  s("strong", null, "Environment is clean!"),
                  s("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            s("div", zm, [
              C(ie, {
                variant: "secondary",
                onClick: p[5] || (p[5] = (ve) => w.$emit("close"))
              }, {
                default: g(() => [...p[33] || (p[33] = [
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
}), Bm = /* @__PURE__ */ pe(Fm, [["__scopeId", "data-v-e2b37122"]]), Vm = { class: "health-section-header" }, Wm = { class: "suggestions-content" }, Gm = { class: "suggestions-text" }, jm = { style: { "margin-top": "var(--cg-space-3)" } }, Hm = {
  key: 1,
  class: "no-issues-text"
}, Km = /* @__PURE__ */ me({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: t, emit: o }) {
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
    const m = o, v = k(!1), h = k(!1);
    function w() {
      h.value = !0, m("repair-environment");
    }
    function p() {
      h.value = !1;
    }
    function _() {
      l.value = !1;
    }
    const x = F(() => {
      const Z = n.status.workflows.analyzed || [], U = Z.filter(
        (z) => z.unresolved_models_count > 0 || z.ambiguous_models_count > 0
      );
      return U.length === 0 && n.status.missing_models_count > 0 ? Z.filter((z) => z.sync_state === "synced") : U;
    });
    function $() {
      const Z = x.value;
      Z.length !== 0 && (v.value = !0, m("repair-missing-models", Z.map((U) => U.name)));
    }
    function P() {
      v.value = !1;
    }
    t({ resetRepairingState: P, resetRepairingEnvironmentState: p, closeDetailModal: _ });
    const N = F(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), T = F(() => n.status.has_changes), S = F(() => {
      const Z = n.status.git_changes;
      return Z.nodes_added.length > 0 || Z.nodes_removed.length > 0 || Z.workflow_changes;
    }), q = F(() => n.status.has_changes || N.value), B = F(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), A = F(() => n.status.git_changes.has_other_changes), I = F(() => {
      var Z;
      return ((Z = n.status.workflows.analyzed) == null ? void 0 : Z.filter((U) => U.status === "broken")) || [];
    }), E = F(() => {
      var Z;
      return ((Z = n.status.workflows.analyzed) == null ? void 0 : Z.filter(
        (U) => U.has_path_sync_issues && !U.has_issues
      )) || [];
    }), O = F(() => I.value.length > 0), re = F(() => O.value || E.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), Y = F(() => {
      const Z = [];
      return n.status.workflows.new.length > 0 && Z.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && Z.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && Z.push(`${n.status.workflows.deleted.length} deleted`), Z.length > 0 ? `${Z.join(", ")} workflow${Z.length === 1 && !Z[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), H = F(() => {
      var z, R;
      const Z = [], U = n.status.comparison;
      return (z = U.missing_nodes) != null && z.length && Z.push(`${U.missing_nodes.length} missing node${U.missing_nodes.length === 1 ? "" : "s"}`), (R = U.extra_nodes) != null && R.length && Z.push(`${U.extra_nodes.length} untracked node${U.extra_nodes.length === 1 ? "" : "s"}`), Z.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Z.join(" and ")}.`;
    }), te = F(() => {
      var z, R;
      const Z = [], U = n.status.comparison;
      return (z = U.extra_nodes) != null && z.length && (U.extra_nodes.slice(0, 3).forEach((be) => {
        Z.push(`Untracked: ${be}`);
      }), U.extra_nodes.length > 3 && Z.push(`...and ${U.extra_nodes.length - 3} more untracked`)), (R = U.missing_nodes) != null && R.length && (U.missing_nodes.slice(0, 3).forEach((be) => {
        Z.push(`Missing: ${be}`);
      }), U.missing_nodes.length > 3 && Z.push(`...and ${U.missing_nodes.length - 3} more missing`)), Z;
    });
    return (Z, U) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, { title: "STATUS" })
        ]),
        content: g(() => [
          n.setupState === "no_workspace" ? (a(), M(Ht, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: g(() => [
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: U[0] || (U[0] = (z) => Z.$emit("start-setup"))
              }, {
                default: g(() => [...U[13] || (U[13] = [
                  b(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), M(Ht, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: g(() => [
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: U[1] || (U[1] = (z) => Z.$emit("view-environments"))
              }, {
                default: g(() => [...U[14] || (U[14] = [
                  b(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), M(Ht, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: g(() => [
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: U[2] || (U[2] = (z) => Z.$emit("create-environment"))
              }, {
                default: g(() => [...U[15] || (U[15] = [
                  b(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", {
            class: "health-section-wrapper",
            onMouseenter: U[4] || (U[4] = (z) => i.value = !0),
            onMouseleave: U[5] || (U[5] = (z) => i.value = !1)
          }, [
            s("div", Vm, [
              C(Lt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: g(() => [...U[16] || (U[16] = [
                  b(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              C(Uu, { name: "fade" }, {
                default: g(() => [
                  i.value ? (a(), M(ie, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: r
                  }, {
                    default: g(() => [...U[17] || (U[17] = [
                      b(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            C(jd, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, eo({
              left: g(() => [
                e.status.workflows.new.length ? (a(), M(is, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), M(is, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), M(is, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                C(is, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: N.value
                }, null, 8, ["count", "separator"])
              ]),
              right: g(() => [
                e.status.git_changes.nodes_added.length ? (a(), M(is, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), M(is, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), M(is, {
                  key: 2,
                  icon: "●",
                  count: B.value,
                  label: B.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                A.value ? (a(), M(is, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                T.value && !S.value && !A.value ? (a(), M(is, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                T.value ? y("", !0) : (a(), M(is, {
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
                fn: g(() => [
                  U[19] || (U[19] = s("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  s("div", Wm, [
                    s("span", Gm, f(Y.value), 1),
                    C(ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: U[3] || (U[3] = (z) => Z.$emit("commit-changes"))
                    }, {
                      default: g(() => [...U[18] || (U[18] = [
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
          e.status.is_detached_head ? (a(), M(Ht, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: g(() => [
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: U[6] || (U[6] = (z) => Z.$emit("create-branch"))
              }, {
                default: g(() => [...U[20] || (U[20] = [
                  b(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", jm, [
            C(Lt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: g(() => [...U[21] || (U[21] = [
                b(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            re.value ? (a(), c(j, { key: 0 }, [
              I.value.length > 0 ? (a(), M(Ht, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: I.value.map((z) => `${z.name} — ${z.issue_summary}`)
              }, {
                actions: g(() => [
                  C(ie, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[7] || (U[7] = (z) => Z.$emit("view-workflows"))
                  }, {
                    default: g(() => [...U[22] || (U[22] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              E.value.length > 0 ? (a(), M(Ht, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: E.value.map((z) => `${z.name} — ${z.models_needing_path_sync_count} model path${z.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: g(() => [
                  C(ie, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[8] || (U[8] = (z) => Z.$emit("view-workflows"))
                  }, {
                    default: g(() => [...U[23] || (U[23] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !O.value ? (a(), M(Ht, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: g(() => [
                  C(ie, {
                    variant: "primary",
                    size: "sm",
                    disabled: v.value,
                    onClick: $
                  }, {
                    default: g(() => [
                      b(f(v.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  C(ie, {
                    variant: "secondary",
                    size: "sm",
                    onClick: U[9] || (U[9] = (z) => Z.$emit("view-workflows"))
                  }, {
                    default: g(() => [...U[24] || (U[24] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (a(), M(Ht, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: H.value,
                items: te.value
              }, {
                actions: g(() => [
                  C(ie, {
                    variant: "secondary",
                    size: "sm",
                    onClick: r
                  }, {
                    default: g(() => [...U[25] || (U[25] = [
                      b(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  C(ie, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[10] || (U[10] = (z) => Z.$emit("view-nodes"))
                  }, {
                    default: g(() => [...U[26] || (U[26] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), M(Ht, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: g(() => [
                  C(ie, {
                    variant: "primary",
                    size: "sm",
                    onClick: U[11] || (U[11] = (z) => Z.$emit("view-nodes"))
                  }, {
                    default: g(() => [...U[27] || (U[27] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : q.value ? (a(), c("span", Hm, "No issues")) : (a(), M(ts, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      C(Bm, {
        show: l.value,
        status: e.status,
        "is-repairing": h.value,
        onClose: U[12] || (U[12] = (z) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), qm = /* @__PURE__ */ pe(Km, [["__scopeId", "data-v-55fcd77f"]]), Ym = ["type", "value", "placeholder", "disabled"], Jm = /* @__PURE__ */ me({
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
    const n = e, l = o, i = k(null);
    function r(u) {
      const d = u.target.value;
      l("update:modelValue", d);
    }
    return Qe(() => {
      n.autoFocus && i.value && i.value.focus();
    }), t({
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
      class: xe(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: r,
      onKeyup: [
        d[0] || (d[0] = Jt((m) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Jt((m) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (m) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (m) => u.$emit("blur"))
    }, null, 42, Ym));
  }
}), En = /* @__PURE__ */ pe(Jm, [["__scopeId", "data-v-0380d08f"]]), Xm = { class: "branch-create-form" }, Qm = { class: "form-actions" }, Zm = /* @__PURE__ */ me({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: t }) {
    const o = t, n = k(""), l = F(() => {
      const u = n.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function i() {
      l.value && (o("create", n.value.trim()), n.value = "");
    }
    function r() {
      n.value = "", o("cancel");
    }
    return (u, d) => (a(), c("div", Xm, [
      C(En, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (m) => n.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: i,
        onEscape: r
      }, null, 8, ["modelValue"]),
      s("div", Qm, [
        C(ie, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: i
        }, {
          default: g(() => [...d[1] || (d[1] = [
            b(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        C(ie, {
          variant: "secondary",
          size: "sm",
          onClick: r
        }, {
          default: g(() => [...d[2] || (d[2] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), ev = /* @__PURE__ */ pe(Zm, [["__scopeId", "data-v-7c500394"]]), tv = { class: "branch-list-item__indicator" }, sv = { class: "branch-list-item__name" }, ov = {
  key: 0,
  class: "branch-list-item__actions"
}, nv = {
  key: 0,
  class: "branch-list-item__current-label"
}, av = /* @__PURE__ */ me({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (a(), c("div", {
      class: xe(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && t.$emit("click"))
    }, [
      s("span", tv, f(e.isCurrent ? "●" : "○"), 1),
      s("span", sv, f(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (a(), c("div", ov, [
        Ge(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), c("span", nv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), lv = /* @__PURE__ */ pe(av, [["__scopeId", "data-v-c6581a24"]]), iv = {
  key: 2,
  class: "branch-list"
}, rv = /* @__PURE__ */ me({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: t }) {
    const o = t, n = k(!1);
    function l(r) {
      o("create", r), i();
    }
    function i() {
      n.value = !1;
    }
    return (r, u) => (a(), M(Tt, null, {
      header: g(() => [
        C(Pt, { title: "BRANCHES" }, {
          actions: g(() => [
            n.value ? y("", !0) : (a(), M(ie, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: u[0] || (u[0] = (d) => n.value = !0)
            }, {
              default: g(() => [...u[1] || (u[1] = [
                b(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: g(() => [
        n.value ? (a(), M(ev, {
          key: 0,
          onCreate: l,
          onCancel: i
        })) : y("", !0),
        e.branches.length === 0 ? (a(), M(ts, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), c("div", iv, [
          (a(!0), c(j, null, ge(e.branches, (d) => (a(), M(lv, {
            key: d.name,
            "branch-name": d.name,
            "is-current": d.is_current
          }, {
            actions: g(() => [
              d.is_current ? y("", !0) : (a(), M(ie, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (m) => r.$emit("delete", d.name)
              }, {
                default: g(() => [...u[2] || (u[2] = [
                  b(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              d.is_current ? y("", !0) : (a(), M(ie, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (m) => r.$emit("switch", d.name)
              }, {
                default: g(() => [...u[3] || (u[3] = [
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
}), cv = /* @__PURE__ */ pe(rv, [["__scopeId", "data-v-86784ddd"]]), uv = { class: "commit-list" }, dv = /* @__PURE__ */ me({
  __name: "CommitList",
  setup(e) {
    return (t, o) => (a(), c("div", uv, [
      Ge(t.$slots, "default", {}, void 0)
    ]));
  }
}), fv = /* @__PURE__ */ pe(dv, [["__scopeId", "data-v-8c5ee761"]]), mv = { class: "commit-hash" }, vv = /* @__PURE__ */ me({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, o = F(() => t.hash.slice(0, t.length));
    return (n, l) => (a(), c("span", mv, f(o.value), 1));
  }
}), pr = /* @__PURE__ */ pe(vv, [["__scopeId", "data-v-7c333cc6"]]), pv = { class: "commit-message" }, gv = { class: "commit-date" }, hv = /* @__PURE__ */ me({
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
    return (i, r) => (a(), c("div", {
      class: xe(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      C(pr, { hash: e.hash }, null, 8, ["hash"]),
      s("span", pv, f(e.message), 1),
      s("span", gv, f(e.relativeDate), 1),
      i.$slots.actions ? (a(), c("div", {
        key: 0,
        class: "commit-actions",
        onClick: r[0] || (r[0] = nt(() => {
        }, ["stop"]))
      }, [
        Ge(i.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), yv = /* @__PURE__ */ pe(hv, [["__scopeId", "data-v-dd7c621b"]]), wv = /* @__PURE__ */ me({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (t, o) => (a(), M(Tt, null, {
      header: g(() => [
        C(Pt, { title: "HISTORY" })
      ]),
      content: g(() => [
        e.commits.length === 0 ? (a(), M(ts, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), M(fv, { key: 1 }, {
          default: g(() => [
            (a(!0), c(j, null, ge(e.commits, (n) => (a(), M(yv, {
              key: n.hash,
              hash: n.short_hash || n.hash,
              message: n.message,
              "relative-date": n.date_relative || n.relative_date,
              onClick: (l) => t.$emit("select", n)
            }, {
              actions: g(() => [
                C(ie, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (l) => t.$emit("checkout", n),
                  title: "Checkout this commit"
                }, {
                  default: g(() => [...o[0] || (o[0] = [
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
      _: 1
    }));
  }
}), bv = /* @__PURE__ */ pe(wv, [["__scopeId", "data-v-981c3c64"]]), wT = Fs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const bT = [
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
], _T = {
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
}, _v = [
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
], kT = [
  ..._v,
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
function lo() {
  return !1;
}
function at() {
  const e = k(!1), t = k(null);
  async function o(J, we) {
    var lt;
    if (!((lt = window.app) != null && lt.api))
      throw new Error("ComfyUI API not available");
    const Oe = await window.app.api.fetchApi(J, we);
    if (!Oe.ok) {
      const Ne = await Oe.json().catch(() => ({}));
      throw new Error(Ne.error || Ne.message || `Request failed: ${Oe.status}`);
    }
    return Oe.json();
  }
  async function n(J = !1) {
    return o(J ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(J, we = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: J, allow_issues: we })
    });
  }
  async function i(J = 10, we = 0) {
    return o(`/v2/comfygit/log?limit=${J}&offset=${we}`);
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
  async function h(J) {
    return o(`/v2/comfygit/commit/${J}`);
  }
  async function w(J, we = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: J, force: we })
    });
  }
  async function p(J, we = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, start_point: we })
    });
  }
  async function _(J, we = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: J, force: we })
    });
  }
  async function x(J, we = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(J)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: we })
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
  async function P(J, we) {
    const Oe = { target_env: J };
    return we && (Oe.workspace_path = we), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Oe)
    });
  }
  async function N() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function T(J) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function S() {
    return o("/v2/workspace/environments/create_status");
  }
  async function q(J = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${J}`);
  }
  async function B(J) {
    return o(`/v2/workspace/environments/${J}`, {
      method: "DELETE"
    });
  }
  async function A(J = !1) {
    try {
      return o(J ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const we = await n(J), Oe = [];
      return we.workflows.new.forEach((lt) => {
        Oe.push({ name: lt, status: "new", missing_nodes: 0, missing_models: 0, path: lt });
      }), we.workflows.modified.forEach((lt) => {
        Oe.push({ name: lt, status: "modified", missing_nodes: 0, missing_models: 0, path: lt });
      }), we.workflows.synced.forEach((lt) => {
        Oe.push({ name: lt, status: "synced", missing_nodes: 0, missing_models: 0, path: lt });
      }), Oe;
    }
  }
  async function I(J) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/details`);
  }
  async function E(J) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/resolve`, {
      method: "POST"
    });
  }
  async function O(J, we, Oe) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: we, install_models: Oe })
    });
  }
  async function re(J, we, Oe) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(J)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: we, importance: Oe })
    });
  }
  async function Y() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function H() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function te(J) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(J)}`);
  }
  async function Z(J) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function U(J, we) {
    return o(`/v2/workspace/models/${J}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: we })
    });
  }
  async function z(J, we) {
    return o(`/v2/workspace/models/${J}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: we })
    });
  }
  async function R(J) {
    return o(`/v2/workspace/models/${J}`, {
      method: "DELETE"
    });
  }
  async function be(J) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function ve() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Ee() {
    return o("/v2/workspace/models/directory");
  }
  async function De(J) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function je(J) {
    try {
      const we = J ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(J)}` : "/v2/comfygit/config";
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
  async function Je(J, we) {
    const Oe = we ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(we)}` : "/v2/comfygit/config";
    return o(Oe, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function _e(J, we) {
    try {
      const Oe = new URLSearchParams();
      return J && Oe.append("level", J), we && Oe.append("lines", we.toString()), o(`/v2/comfygit/debug/logs?${Oe}`);
    } catch {
      return [];
    }
  }
  async function Se(J, we) {
    try {
      const Oe = new URLSearchParams();
      return J && Oe.append("level", J), we && Oe.append("lines", we.toString()), o(`/v2/workspace/debug/logs?${Oe}`);
    } catch {
      return [];
    }
  }
  async function Ve() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function ye() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function le(J, we) {
    try {
      const Oe = new URLSearchParams();
      return J && Oe.append("level", J), we && Oe.append("lines", we.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Oe}`);
    } catch {
      return [];
    }
  }
  async function Fe() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function Ie(J) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: J })
    });
  }
  async function L() {
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
  async function V(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}/track-dev`, {
      method: "POST"
    });
  }
  async function oe(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}/install`, {
      method: "POST"
    });
  }
  async function ae(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}/update`, {
      method: "POST"
    });
  }
  async function de(J) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(J)}`, {
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
  async function ke(J, we) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: J, url: we })
    });
  }
  async function $e(J) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function ne(J, we, Oe) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: we, push_url: Oe })
    });
  }
  async function ue(J, we) {
    const Oe = {};
    return we && (Oe["X-Git-Auth-Token"] = we), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/fetch`, {
      method: "POST",
      headers: Oe
    });
  }
  async function Re(J) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/status`);
    } catch {
      return null;
    }
  }
  async function Ce(J = "skip", we = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: J,
        remove_extra_nodes: we
      })
    });
  }
  async function ee(J, we) {
    const Oe = we ? `/v2/comfygit/remotes/${encodeURIComponent(J)}/pull-preview?branch=${encodeURIComponent(we)}` : `/v2/comfygit/remotes/${encodeURIComponent(J)}/pull-preview`;
    return o(Oe);
  }
  async function K(J, we = {}) {
    const Oe = { "Content-Type": "application/json" };
    return we.authToken && (Oe["X-Git-Auth-Token"] = we.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/pull`, {
      method: "POST",
      headers: Oe,
      body: JSON.stringify({
        model_strategy: we.modelStrategy || "skip",
        force: we.force || !1,
        resolutions: we.resolutions
      })
    });
  }
  async function X(J, we) {
    const Oe = we ? `/v2/comfygit/remotes/${encodeURIComponent(J)}/push-preview?branch=${encodeURIComponent(we)}` : `/v2/comfygit/remotes/${encodeURIComponent(J)}/push-preview`;
    return o(Oe);
  }
  async function D(J, we = {}) {
    const Oe = { "Content-Type": "application/json" };
    return we.authToken && (Oe["X-Git-Auth-Token"] = we.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/push`, {
      method: "POST",
      headers: Oe,
      body: JSON.stringify({ force: we.force || !1 })
    });
  }
  async function W(J, we) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(J)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: we })
    });
  }
  async function ce(J) {
    const we = {
      success: 0,
      failed: []
    };
    for (const Oe of J)
      try {
        await E(Oe), we.success++;
      } catch (lt) {
        we.failed.push({
          name: Oe,
          error: lt instanceof Error ? lt.message : "Unknown error"
        });
      }
    return we;
  }
  async function Te(J) {
    var lt;
    const we = new FormData();
    if (we.append("file", J), !((lt = window.app) != null && lt.api))
      throw new Error("ComfyUI API not available");
    const Oe = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: we
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Oe.ok) {
      const Ne = await Oe.json().catch(() => ({}));
      throw new Error(Ne.error || `Preview failed: ${Oe.status}`);
    }
    return Oe.json();
  }
  async function Ke(J) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(J)}`
    );
  }
  async function rt(J, we, Oe, lt) {
    var el;
    const Ne = new FormData();
    if (Ne.append("file", J), Ne.append("name", we), Ne.append("model_strategy", Oe), Ne.append("torch_backend", lt), !((el = window.app) != null && el.api))
      throw new Error("ComfyUI API not available");
    const Co = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Ne
    });
    if (!Co.ok) {
      const tl = await Co.json().catch(() => ({}));
      throw new Error(tl.message || tl.error || `Import failed: ${Co.status}`);
    }
    return Co.json();
  }
  async function yt() {
    return o("/v2/workspace/import/status");
  }
  async function wt(J) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: J })
    });
  }
  async function ct(J, we, Oe, lt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: J,
        name: we,
        model_strategy: Oe,
        torch_backend: lt
      })
    });
  }
  async function ft() {
    return o("/v2/setup/status");
  }
  async function Wt(J) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function vs() {
    return o("/v2/setup/initialize_status");
  }
  async function Gt(J) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function Bs() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function Ts() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function to(J, we) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: J, save_key: we })
    });
  }
  async function _o() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function ko(J) {
    const we = J ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(J)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(we);
  }
  async function $o(J) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function he() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function Q(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function We(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}/stop`, {
      method: "POST"
    });
  }
  async function pt(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}/start`, {
      method: "POST"
    });
  }
  async function jt(J) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(J)}/status`);
  }
  async function ps(J) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: J })
    });
  }
  async function gs(J = !1) {
    return o(J ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function os() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Le() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function ns(J) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function se(J) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(J)}`, {
      method: "DELETE"
    });
  }
  async function G(J) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(J)
    });
  }
  async function Pe() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function Be(J) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/info`);
  }
  async function tt(J) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances`);
  }
  async function dt(J, we) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(we)
    });
  }
  async function Rt(J, we) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent(we)}/start`, {
      method: "POST"
    });
  }
  async function as(J, we) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent(we)}/stop`, {
      method: "POST"
    });
  }
  async function Vs(J, we) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(J)}/instances/${encodeURIComponent(we)}`, {
      method: "DELETE"
    });
  }
  async function Ws(J) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: J })
    });
  }
  return {
    isLoading: e,
    error: t,
    getStatus: n,
    commit: l,
    getHistory: i,
    exportEnv: r,
    validateExport: u,
    validateDeploy: d,
    exportEnvWithForce: m,
    // Git Operations
    getBranches: v,
    getCommitDetail: h,
    checkout: w,
    createBranch: p,
    switchBranch: _,
    deleteBranch: x,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: P,
    getSwitchProgress: N,
    createEnvironment: T,
    getCreateProgress: S,
    getComfyUIReleases: q,
    deleteEnvironment: B,
    // Workflow Management
    getWorkflows: A,
    getWorkflowDetails: I,
    resolveWorkflow: E,
    installWorkflowDeps: O,
    setModelImportance: re,
    // Model Management
    getEnvironmentModels: Y,
    getWorkspaceModels: H,
    getModelDetails: te,
    openFileLocation: Z,
    addModelSource: U,
    removeModelSource: z,
    deleteModel: R,
    downloadModel: be,
    scanWorkspaceModels: ve,
    getModelsDirectory: Ee,
    setModelsDirectory: De,
    // Settings
    getConfig: je,
    updateConfig: Je,
    // Debug/Logs
    getEnvironmentLogs: _e,
    getWorkspaceLogs: Se,
    getEnvironmentLogPath: Ve,
    getWorkspaceLogPath: ye,
    getOrchestratorLogs: le,
    getOrchestratorLogPath: Fe,
    openFile: Ie,
    // Node Management
    getNodes: L,
    trackNodeAsDev: V,
    installNode: oe,
    updateNode: ae,
    uninstallNode: de,
    // Git Remotes
    getRemotes: fe,
    addRemote: ke,
    removeRemote: $e,
    updateRemoteUrl: ne,
    fetchRemote: ue,
    getRemoteSyncStatus: Re,
    // Push/Pull
    getPullPreview: ee,
    pullFromRemote: K,
    getPushPreview: X,
    pushToRemote: D,
    validateMerge: W,
    // Environment Sync
    syncEnvironmentManually: Ce,
    // Workflow Repair
    repairWorkflowModels: ce,
    // Import Operations
    previewTarballImport: Te,
    previewGitImport: wt,
    validateEnvironmentName: Ke,
    executeImport: rt,
    executeGitImport: ct,
    getImportProgress: yt,
    // First-Time Setup
    getSetupStatus: ft,
    initializeWorkspace: Wt,
    getInitializeProgress: vs,
    validatePath: Gt,
    // Deploy Operations
    getDeploySummary: Bs,
    getDataCenters: Ts,
    testRunPodConnection: to,
    getNetworkVolumes: _o,
    getRunPodGpuTypes: ko,
    deployToRunPod: $o,
    getRunPodPods: he,
    terminateRunPodPod: Q,
    stopRunPodPod: We,
    startRunPodPod: pt,
    getDeploymentStatus: jt,
    exportDeployPackage: ps,
    getStoredRunPodKey: gs,
    clearRunPodKey: os,
    // Custom Worker Operations
    getCustomWorkers: Le,
    addCustomWorker: ns,
    removeCustomWorker: se,
    testWorkerConnection: G,
    scanForWorkers: Pe,
    getWorkerSystemInfo: Be,
    getWorkerInstances: tt,
    deployToWorker: dt,
    startWorkerInstance: Rt,
    stopWorkerInstance: as,
    terminateWorkerInstance: Vs,
    // Git Authentication
    testGitAuth: Ws
  };
}
async function cn(e, t) {
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
function kv() {
  async function e() {
    try {
      return await cn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function t() {
    try {
      return await cn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await cn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function n() {
    await cn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: t,
    restart: o,
    kill: n
  };
}
const $v = { class: "base-modal-header" }, Cv = {
  key: 0,
  class: "base-modal-title"
}, xv = { class: "base-modal-body" }, Sv = {
  key: 0,
  class: "base-modal-loading"
}, Iv = {
  key: 1,
  class: "base-modal-error"
}, Ev = {
  key: 0,
  class: "base-modal-footer"
}, Tv = /* @__PURE__ */ me({
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
    function i(r) {
      r.key === "Escape" && o.showCloseButton && n("close");
    }
    return Qe(() => {
      document.addEventListener("keydown", i), document.body.style.overflow = "hidden";
    }), wo(() => {
      document.removeEventListener("keydown", i), document.body.style.overflow = "";
    }), (r, u) => (a(), M(ht, { to: "body" }, [
      s("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        s("div", {
          class: xe(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = nt(() => {
          }, ["stop"]))
        }, [
          s("div", $v, [
            Ge(r.$slots, "header", {}, () => [
              e.title ? (a(), c("h3", Cv, f(e.title), 1)) : y("", !0)
            ]),
            e.showCloseButton ? (a(), c("button", {
              key: 0,
              class: "base-modal-close",
              onClick: u[0] || (u[0] = (d) => r.$emit("close"))
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
          s("div", xv, [
            e.loading ? (a(), c("div", Sv, "Loading...")) : e.error ? (a(), c("div", Iv, f(e.error), 1)) : Ge(r.$slots, "body", { key: 2 }, void 0)
          ]),
          r.$slots.footer ? (a(), c("div", Ev, [
            Ge(r.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), vt = /* @__PURE__ */ pe(Tv, [["__scopeId", "data-v-8dab1081"]]), Pv = ["type", "disabled"], Rv = {
  key: 0,
  class: "spinner"
}, Mv = /* @__PURE__ */ me({
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
    return (t, o) => (a(), c("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: xe(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => t.$emit("click", n))
    }, [
      e.loading ? (a(), c("span", Rv)) : y("", !0),
      Ge(t.$slots, "default", {}, void 0)
    ], 10, Pv));
  }
}), Me = /* @__PURE__ */ pe(Mv, [["__scopeId", "data-v-f3452606"]]), Dv = {
  key: 0,
  class: "base-title-count"
}, Lv = /* @__PURE__ */ me({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (t, o) => (a(), M(Ba(`h${e.level}`), {
      class: xe(["base-title", e.variant])
    }, {
      default: g(() => [
        Ge(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), c("span", Dv, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), zo = /* @__PURE__ */ pe(Lv, [["__scopeId", "data-v-5a01561d"]]), Ov = ["value", "disabled"], Nv = {
  key: 0,
  value: "",
  disabled: ""
}, Av = ["value"], Uv = {
  key: 0,
  class: "base-select-error"
}, zv = /* @__PURE__ */ me({
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
    return (n, l) => (a(), c("div", {
      class: xe(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: xe(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (i) => n.$emit("update:modelValue", i.target.value))
      }, [
        e.placeholder ? (a(), c("option", Nv, f(e.placeholder), 1)) : y("", !0),
        (a(!0), c(j, null, ge(e.options, (i) => (a(), c("option", {
          key: t(i),
          value: t(i)
        }, f(o(i)), 9, Av))), 128))
      ], 42, Ov),
      e.error ? (a(), c("span", Uv, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Fv = /* @__PURE__ */ pe(zv, [["__scopeId", "data-v-7436d745"]]), Bv = { class: "popover-header" }, Vv = { class: "popover-title" }, Wv = { class: "popover-content" }, Gv = {
  key: 0,
  class: "popover-actions"
}, jv = /* @__PURE__ */ me({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (t, o) => (a(), M(ht, { to: "body" }, [
      e.show ? (a(), c("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "popover",
          style: Vt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = nt(() => {
          }, ["stop"]))
        }, [
          s("div", Bv, [
            s("h4", Vv, f(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", Wv, [
            Ge(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (a(), c("div", Gv, [
            Ge(t.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), ss = /* @__PURE__ */ pe(jv, [["__scopeId", "data-v-42815ace"]]), Hv = { class: "detail-section" }, Kv = {
  key: 0,
  class: "empty-message"
}, qv = { class: "model-header" }, Yv = { class: "model-name" }, Jv = { class: "model-details" }, Xv = { class: "model-row" }, Qv = { class: "model-row" }, Zv = { class: "label" }, ep = {
  key: 0,
  class: "model-row model-row-nodes"
}, tp = { class: "node-list" }, sp = ["onClick"], op = {
  key: 1,
  class: "model-row"
}, np = { class: "value" }, ap = {
  key: 2,
  class: "model-row"
}, lp = { class: "value error" }, ip = {
  key: 0,
  class: "model-actions"
}, rp = { class: "detail-section" }, cp = {
  key: 0,
  class: "empty-message"
}, up = { class: "node-name" }, dp = {
  key: 0,
  class: "node-version"
}, fp = /* @__PURE__ */ me({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getWorkflowDetails: l, setModelImportance: i, openFileLocation: r } = at(), u = k(null), d = k(!1), m = k(null), v = k(!1), h = k({}), w = k(!1), p = k(/* @__PURE__ */ new Set()), _ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function x(I) {
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
      const E = I.hash || I.filename;
      return p.value.has(E) ? I.loaded_by : I.loaded_by.slice(0, 3);
    }
    function N(I) {
      return p.value.has(I);
    }
    function T(I) {
      p.value.has(I) ? p.value.delete(I) : p.value.add(I), p.value = new Set(p.value);
    }
    async function S() {
      d.value = !0, m.value = null;
      try {
        u.value = await l(o.workflowName);
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load workflow details";
      } finally {
        d.value = !1;
      }
    }
    function q(I, E) {
      h.value[I] = E, v.value = !0;
    }
    async function B(I) {
      try {
        await r(I);
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to open file location";
      }
    }
    async function A() {
      if (!v.value) {
        n("close");
        return;
      }
      d.value = !0, m.value = null;
      try {
        for (const [I, E] of Object.entries(h.value))
          await i(o.workflowName, I, E);
        n("refresh"), n("close");
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to save changes";
      } finally {
        d.value = !1;
      }
    }
    return Qe(S), (I, E) => (a(), c(j, null, [
      C(vt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: d.value,
        error: m.value || void 0,
        onClose: E[4] || (E[4] = (O) => n("close"))
      }, {
        body: g(() => [
          u.value ? (a(), c(j, { key: 0 }, [
            s("section", Hv, [
              C(zo, { variant: "section" }, {
                default: g(() => [
                  b("MODELS USED (" + f(u.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.models.length === 0 ? (a(), c("div", Kv, " No models used in this workflow ")) : y("", !0),
              (a(!0), c(j, null, ge(u.value.models, (O) => {
                var re;
                return a(), c("div", {
                  key: O.hash || O.filename,
                  class: "model-card"
                }, [
                  s("div", qv, [
                    E[6] || (E[6] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", Yv, f(O.filename), 1)
                  ]),
                  s("div", Jv, [
                    s("div", Xv, [
                      E[7] || (E[7] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: xe(["value", x(O.status)])
                      }, f($(O.status)), 3)
                    ]),
                    s("div", Qv, [
                      s("span", Zv, [
                        E[8] || (E[8] = b(" Importance: ", -1)),
                        C(vr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: E[0] || (E[0] = (Y) => w.value = !0)
                        })
                      ]),
                      C(Fv, {
                        "model-value": h.value[O.filename] || O.importance,
                        options: _,
                        "onUpdate:modelValue": (Y) => q(O.filename, Y)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    O.loaded_by && O.loaded_by.length > 0 ? (a(), c("div", ep, [
                      E[9] || (E[9] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", tp, [
                        (a(!0), c(j, null, ge(P(O), (Y, H) => (a(), c("div", {
                          key: `${Y.node_id}-${H}`,
                          class: "node-reference"
                        }, f(Y.node_type) + " (Node #" + f(Y.node_id) + ") ", 1))), 128)),
                        O.loaded_by.length > 3 ? (a(), c("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (Y) => T(O.hash || O.filename)
                        }, f(N(O.hash || O.filename) ? "▼ Show less" : `▶ View all (${O.loaded_by.length})`), 9, sp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    O.size_mb ? (a(), c("div", op, [
                      E[10] || (E[10] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", np, f(O.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    O.has_category_mismatch ? (a(), c("div", ap, [
                      E[13] || (E[13] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", lp, [
                        E[11] || (E[11] = b(" In ", -1)),
                        s("code", null, f(O.actual_category) + "/", 1),
                        E[12] || (E[12] = b(" but loader needs ", -1)),
                        s("code", null, f((re = O.expected_categories) == null ? void 0 : re[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  O.status !== "available" ? (a(), c("div", ip, [
                    O.status === "downloadable" ? (a(), M(Me, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: E[1] || (E[1] = (Y) => n("resolve"))
                    }, {
                      default: g(() => [...E[14] || (E[14] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    })) : O.status === "category_mismatch" && O.file_path ? (a(), M(Me, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (Y) => B(O.file_path)
                    }, {
                      default: g(() => [...E[15] || (E[15] = [
                        b(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : O.status !== "path_mismatch" ? (a(), M(Me, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: E[2] || (E[2] = (Y) => n("resolve"))
                    }, {
                      default: g(() => [...E[16] || (E[16] = [
                        b(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            s("section", rp, [
              C(zo, { variant: "section" }, {
                default: g(() => [
                  b("NODES USED (" + f(u.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              u.value.nodes.length === 0 ? (a(), c("div", cp, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), c(j, null, ge(u.value.nodes, (O) => (a(), c("div", {
                key: O.name,
                class: "node-item"
              }, [
                s("span", {
                  class: xe(["node-status", O.status === "installed" ? "installed" : "missing"])
                }, f(O.status === "installed" ? "✓" : "✕"), 3),
                s("span", up, f(O.name), 1),
                O.version ? (a(), c("span", dp, "v" + f(O.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: g(() => [
          C(Me, {
            variant: "secondary",
            onClick: E[3] || (E[3] = (O) => n("close"))
          }, {
            default: g(() => [...E[17] || (E[17] = [
              b(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (a(), M(Me, {
            key: 0,
            variant: "primary",
            onClick: A
          }, {
            default: g(() => [...E[18] || (E[18] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      C(ss, {
        show: w.value,
        title: "Model Importance Levels",
        onClose: E[5] || (E[5] = (O) => w.value = !1)
      }, {
        content: g(() => [...E[19] || (E[19] = [
          s("ul", { class: "importance-info-list" }, [
            s("li", null, [
              s("strong", null, "Required"),
              b(" — Must have for workflow to run")
            ]),
            s("li", null, [
              s("strong", null, "Flexible"),
              b(" — Workflow adapts if missing")
            ]),
            s("li", null, [
              s("strong", null, "Optional"),
              b(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), mp = /* @__PURE__ */ pe(fp, [["__scopeId", "data-v-668728e6"]]), qe = Fs({
  items: [],
  status: "idle"
});
let us = null;
function gr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function na(e) {
  return qe.items.find((t) => t.id === e);
}
async function io() {
  if (qe.status === "downloading") return;
  const e = qe.items.find((t) => t.status === "queued");
  if (!e) {
    qe.status = "idle";
    return;
  }
  qe.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await vp(e), e.status = "completed", e.progress = 100;
  } catch (t) {
    e.status = "failed", e.error = t instanceof Error ? t.message : "Download failed", e.retries++;
  } finally {
    qe.status = "idle", io();
  }
}
async function vp(e) {
  return new Promise((t, o) => {
    us && (us.close(), us = null);
    const n = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${n}`);
    us = l;
    let i = Date.now(), r = 0, u = !1;
    l.onmessage = (d) => {
      try {
        const m = JSON.parse(d.data);
        switch (m.type) {
          case "progress":
            e.downloaded = m.downloaded || 0, e.size = m.total || e.size;
            const v = Date.now(), h = (v - i) / 1e3;
            if (h > 0.5) {
              const w = e.downloaded - r;
              if (e.speed = w / h, i = v, r = e.downloaded, e.speed > 0 && e.size > 0) {
                const p = e.size - e.downloaded;
                e.eta = p / e.speed;
              }
            }
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            u = !0, l.close(), us = null, t();
            break;
          case "error":
            u = !0, l.close(), us = null, o(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      l.close(), us = null, u || o(new Error("Connection lost"));
    };
  });
}
async function pp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const t = await e.json();
    if (!t.pending_downloads || t.pending_downloads.length === 0) return;
    for (const o of t.pending_downloads) {
      if (qe.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: gr(),
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
      qe.items.push(n);
    }
    console.log(`[ComfyGit] Loaded ${t.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function en() {
  function e($) {
    for (const P of $) {
      if (qe.items.some(
        (S) => S.url === P.url && S.targetPath === P.targetPath && ["queued", "downloading", "paused", "completed"].includes(S.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${P.filename}`);
        continue;
      }
      const T = {
        id: gr(),
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
      qe.items.push(T);
    }
    qe.status === "idle" && io();
  }
  async function t($) {
    const P = na($);
    if (P) {
      if (P.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(P.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        us && (us.close(), us = null), P.status = "failed", P.error = "Cancelled by user", qe.status = "idle", io();
      } else if (P.status === "queued") {
        const N = qe.items.findIndex((T) => T.id === $);
        N >= 0 && qe.items.splice(N, 1);
      }
    }
  }
  function o($) {
    const P = na($);
    !P || P.status !== "failed" || (P.status = "queued", P.error = void 0, P.progress = 0, P.downloaded = 0, qe.status === "idle" && io());
  }
  function n($) {
    const P = na($);
    !P || P.status !== "paused" || (P.status = "queued", qe.status === "idle" && io());
  }
  function l() {
    const $ = qe.items.filter((P) => P.status === "paused");
    for (const P of $)
      P.status = "queued";
    qe.status === "idle" && io();
  }
  function i($) {
    const P = qe.items.findIndex((N) => N.id === $);
    P >= 0 && ["completed", "failed", "paused"].includes(qe.items[P].status) && qe.items.splice(P, 1);
  }
  function r() {
    qe.items = qe.items.filter(($) => $.status !== "completed");
  }
  function u() {
    qe.items = qe.items.filter(($) => $.status !== "failed");
  }
  const d = F(
    () => qe.items.find(($) => $.status === "downloading")
  ), m = F(
    () => qe.items.filter(($) => $.status === "queued")
  ), v = F(
    () => qe.items.filter(($) => $.status === "completed")
  ), h = F(
    () => qe.items.filter(($) => $.status === "failed")
  ), w = F(
    () => qe.items.filter(($) => $.status === "paused")
  ), p = F(() => qe.items.length > 0), _ = F(
    () => qe.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), x = F(
    () => qe.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: wn(qe),
    // Computed
    currentDownload: d,
    queuedItems: m,
    completedItems: v,
    failedItems: h,
    pausedItems: w,
    hasItems: p,
    activeCount: _,
    hasPaused: x,
    // Actions
    addToQueue: e,
    cancelDownload: t,
    retryDownload: o,
    resumeDownload: n,
    resumeAllPaused: l,
    removeItem: i,
    clearCompleted: r,
    clearFailed: u,
    loadPendingDownloads: pp
  };
}
function hr() {
  const e = k(null), t = k(null), o = k([]), n = k([]), l = k(!1), i = k(null);
  async function r(N, T) {
    var q;
    if (!((q = window.app) != null && q.api))
      throw new Error("ComfyUI API not available");
    const S = await window.app.api.fetchApi(N, T);
    if (!S.ok) {
      const B = await S.json().catch(() => ({})), A = B.error || B.message || `Request failed: ${S.status}`;
      throw new Error(A);
    }
    return S.json();
  }
  async function u(N) {
    l.value = !0, i.value = null;
    try {
      let T;
      return lo() || (T = await r(
        `/v2/comfygit/workflow/${N}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), e.value = T, T;
    } catch (T) {
      const S = T instanceof Error ? T.message : "Unknown error occurred";
      throw i.value = S, T;
    } finally {
      l.value = !1;
    }
  }
  async function d(N, T, S, q) {
    l.value = !0, i.value = null;
    try {
      let B;
      if (!lo()) {
        const A = Object.fromEntries(T), I = Object.fromEntries(S), E = q ? Array.from(q) : [];
        B = await r(
          `/v2/comfygit/workflow/${N}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: A,
              model_choices: I,
              skipped_packages: E
            })
          }
        );
      }
      return t.value = B, B;
    } catch (B) {
      const A = B instanceof Error ? B.message : "Unknown error occurred";
      throw i.value = A, B;
    } finally {
      l.value = !1;
    }
  }
  async function m(N, T = 10) {
    l.value = !0, i.value = null;
    try {
      let S;
      return lo() || (S = await r(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: N, limit: T })
        }
      )), o.value = S.results, S.results;
    } catch (S) {
      const q = S instanceof Error ? S.message : "Unknown error occurred";
      throw i.value = q, S;
    } finally {
      l.value = !1;
    }
  }
  async function v(N, T = 10) {
    l.value = !0, i.value = null;
    try {
      let S;
      return lo() || (S = await r(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: N, limit: T })
        }
      )), n.value = S.results, S.results;
    } catch (S) {
      const q = S instanceof Error ? S.message : "Unknown error occurred";
      throw i.value = q, S;
    } finally {
      l.value = !1;
    }
  }
  const h = Fs({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function w() {
    h.phase = "idle", h.currentFile = void 0, h.currentFileIndex = void 0, h.totalFiles = void 0, h.bytesDownloaded = void 0, h.bytesTotal = void 0, h.completedFiles = [], h.nodesToInstall = [], h.nodesInstalled = [], h.installError = void 0, h.needsRestart = void 0, h.error = void 0, h.nodeInstallProgress = void 0;
  }
  async function p(N) {
    h.phase = "installing", h.nodesInstalled = [], h.installError = void 0, h.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return lo(), await _(N);
    } catch (T) {
      const S = T instanceof Error ? T.message : "Failed to install nodes";
      throw h.installError = S, T;
    }
  }
  async function _(N) {
    var S;
    const T = await r(
      `/v2/comfygit/workflow/${N}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: h.nodesToInstall
        })
      }
    );
    if (h.nodeInstallProgress) {
      h.nodeInstallProgress.totalNodes = h.nodesToInstall.length;
      const q = new Map(((S = T.failed) == null ? void 0 : S.map((B) => [B.node_id, B.error])) || []);
      for (let B = 0; B < h.nodesToInstall.length; B++) {
        const A = h.nodesToInstall[B], I = q.get(A);
        h.nodeInstallProgress.completedNodes.push({
          node_id: A,
          success: !I,
          error: I
        });
      }
    }
    return h.nodesInstalled = T.nodes_installed, h.needsRestart = T.nodes_installed.length > 0, T.failed && T.failed.length > 0 && (h.installError = `${T.failed.length} package(s) failed to install`), T;
  }
  async function x(N, T, S) {
    w(), h.phase = "resolving", i.value = null;
    const q = Object.fromEntries(T), B = Object.fromEntries(S);
    try {
      const A = await fetch(`/v2/comfygit/workflow/${N}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: q,
          model_choices: B
        })
      });
      if (!A.ok)
        throw new Error(`Request failed: ${A.status}`);
      if (!A.body)
        throw new Error("No response body");
      const I = A.body.getReader(), E = new TextDecoder();
      let O = "";
      for (; ; ) {
        const { done: re, value: Y } = await I.read();
        if (re) break;
        O += E.decode(Y, { stream: !0 });
        const H = O.split(`

`);
        O = H.pop() || "";
        for (const te of H) {
          if (!te.trim()) continue;
          const Z = te.split(`
`);
          let U = "", z = "";
          for (const R of Z)
            R.startsWith("event: ") ? U = R.slice(7) : R.startsWith("data: ") && (z = R.slice(6));
          if (z)
            try {
              const R = JSON.parse(z);
              $(U, R);
            } catch (R) {
              console.warn("Failed to parse SSE event:", R);
            }
        }
      }
    } catch (A) {
      const I = A instanceof Error ? A.message : "Unknown error occurred";
      throw i.value = I, h.error = I, h.phase = "error", A;
    }
  }
  function $(N, T) {
    switch (N) {
      case "batch_start":
        h.phase = "downloading", h.totalFiles = T.total;
        break;
      case "file_start":
        h.currentFile = T.filename, h.currentFileIndex = T.index, h.bytesDownloaded = 0, h.bytesTotal = void 0;
        break;
      case "file_progress":
        h.bytesDownloaded = T.downloaded, h.bytesTotal = T.total;
        break;
      case "file_complete":
        h.completedFiles.push({
          filename: T.filename,
          success: T.success,
          error: T.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        h.nodesToInstall = T.nodes_to_install || [], T.download_results && (h.completedFiles = T.download_results), h.phase = "complete";
        break;
      case "error":
        h.error = T.message, h.phase = "error", i.value = T.message;
        break;
    }
  }
  function P(N, T) {
    const { addToQueue: S } = en(), q = T.filter((B) => B.url && B.target_path).map((B) => ({
      workflow: N,
      filename: B.filename,
      url: B.url,
      targetPath: B.target_path,
      size: B.size || 0,
      type: "model"
    }));
    return q.length > 0 && S(q), q.length;
  }
  return {
    // State
    result: e,
    appliedResult: t,
    searchResults: o,
    modelSearchResults: n,
    isLoading: l,
    error: i,
    progress: h,
    // Methods
    analyzeWorkflow: u,
    applyResolution: d,
    applyResolutionWithProgress: x,
    installNodes: p,
    searchNodes: m,
    searchModels: v,
    resetProgress: w,
    queueModelDownloads: P
  };
}
const gp = { class: "resolution-stepper" }, hp = { class: "stepper-header" }, yp = ["onClick"], wp = {
  key: 0,
  class: "step-icon"
}, bp = {
  key: 1,
  class: "step-number"
}, _p = { class: "step-label" }, kp = {
  key: 0,
  class: "step-connector"
}, $p = { class: "stepper-content" }, Cp = /* @__PURE__ */ me({
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
    function l(m) {
      var v;
      if ((v = o.stepStats) != null && v[m]) {
        const h = o.stepStats[m];
        return h.total > 0 && h.resolved === h.total;
      }
      return o.completedSteps.includes(m);
    }
    function i(m) {
      var v;
      if ((v = o.stepStats) != null && v[m]) {
        const h = o.stepStats[m];
        return h.resolved > 0 && h.resolved < h.total;
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
    return (m, v) => (a(), c("div", gp, [
      s("div", hp, [
        (a(!0), c(j, null, ge(e.steps, (h, w) => (a(), c("div", {
          key: h.id,
          class: xe(["step", {
            active: e.currentStep === h.id,
            completed: l(h.id),
            "in-progress": i(h.id),
            disabled: u(h.id)
          }]),
          onClick: (p) => d(h.id)
        }, [
          s("div", {
            class: xe(["step-indicator", r(h.id)])
          }, [
            l(h.id) ? (a(), c("span", wp, "✓")) : (a(), c("span", bp, f(w + 1), 1))
          ], 2),
          s("div", _p, f(h.label), 1),
          w < e.steps.length - 1 ? (a(), c("div", kp)) : y("", !0)
        ], 10, yp))), 128))
      ]),
      s("div", $p, [
        Ge(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), xp = /* @__PURE__ */ pe(Cp, [["__scopeId", "data-v-2a7b3af8"]]), Sp = /* @__PURE__ */ me({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = F(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), n = F(() => `confidence-${o.value}`), l = F(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (i, r) => (a(), c("span", {
      class: xe(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), Tn = /* @__PURE__ */ pe(Sp, [["__scopeId", "data-v-17ec4b80"]]), Ip = { class: "node-info" }, Ep = { class: "node-info-text" }, Tp = { class: "item-body" }, Pp = {
  key: 0,
  class: "resolved-state"
}, Rp = {
  key: 1,
  class: "multiple-options"
}, Mp = { class: "options-list" }, Dp = ["onClick"], Lp = ["name", "value", "checked", "onChange"], Op = { class: "option-content" }, Np = { class: "option-header" }, Ap = { class: "option-package-id" }, Up = {
  key: 0,
  class: "option-title"
}, zp = { class: "option-meta" }, Fp = {
  key: 0,
  class: "installed-badge"
}, Bp = { class: "action-buttons" }, Vp = {
  key: 2,
  class: "unresolved"
}, Wp = {
  key: 0,
  class: "searching-state"
}, Gp = { class: "options-list" }, jp = ["onClick"], Hp = ["name", "value"], Kp = { class: "option-content" }, qp = { class: "option-header" }, Yp = { class: "option-package-id" }, Jp = {
  key: 0,
  class: "option-description"
}, Xp = { class: "option-meta" }, Qp = {
  key: 0,
  class: "installed-badge"
}, Zp = {
  key: 2,
  class: "unresolved-message"
}, eg = { class: "action-buttons" }, tg = /* @__PURE__ */ me({
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
  setup(e, { emit: t }) {
    const o = e, n = t;
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
    const r = F(() => {
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
      class: xe(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: i.value }])
    }, [
      s("div", Ip, [
        s("span", Ep, [
          m[7] || (m[7] = b("Node type: ", -1)),
          s("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), c("span", {
          key: 0,
          class: xe(["status-badge", r.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", Tp, [
        i.value ? (a(), c("div", Pp, [
          C(Me, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: g(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), c("div", Rp, [
          m[12] || (m[12] = s("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          s("div", Mp, [
            (a(!0), c(j, null, ge(e.options, (v, h) => (a(), c("label", {
              key: v.package_id,
              class: xe(["option-card", { selected: e.selectedOptionIndex === h }]),
              onClick: (w) => u(h)
            }, [
              s("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: h,
                checked: e.selectedOptionIndex === h,
                onChange: (w) => u(h)
              }, null, 40, Lp),
              s("div", Op, [
                s("div", Np, [
                  s("span", Ap, f(v.package_id), 1),
                  C(Tn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (a(), c("div", Up, f(v.title), 1)) : y("", !0),
                s("div", zp, [
                  v.is_installed ? (a(), c("span", Fp, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, Dp))), 128))
          ]),
          s("div", Bp, [
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: g(() => [...m[9] || (m[9] = [
                b(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("manual-entry"))
            }, {
              default: g(() => [...m[10] || (m[10] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (v) => n("mark-optional"))
            }, {
              default: g(() => [...m[11] || (m[11] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), c("div", Vp, [
          e.isSearching ? (a(), c("div", Wp, [...m[13] || (m[13] = [
            s("span", { class: "searching-spinner" }, null, -1),
            s("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), c(j, { key: 1 }, [
            m[14] || (m[14] = s("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            s("div", Gp, [
              (a(!0), c(j, null, ge(e.searchResults.slice(0, 5), (v, h) => (a(), c("label", {
                key: v.package_id,
                class: "option-card",
                onClick: (w) => n("search-result-selected", v)
              }, [
                s("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: h
                }, null, 8, Hp),
                s("div", Kp, [
                  s("div", qp, [
                    s("span", Yp, f(v.package_id), 1),
                    C(Tn, {
                      confidence: v.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  v.description ? (a(), c("div", Jp, f(l(v.description)), 1)) : y("", !0),
                  s("div", Xp, [
                    v.is_installed ? (a(), c("span", Qp, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, jp))), 128))
            ])
          ], 64)) : (a(), c("div", Zp, [...m[15] || (m[15] = [
            s("span", { class: "warning-icon" }, "⚠", -1),
            s("span", null, "No matching package found in registry", -1)
          ])])),
          s("div", eg, [
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: g(() => {
                var v;
                return [
                  b(f((v = e.searchResults) != null && v.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("manual-entry"))
            }, {
              default: g(() => [...m[16] || (m[16] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (v) => n("mark-optional"))
            }, {
              default: g(() => [...m[17] || (m[17] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), sg = /* @__PURE__ */ pe(tg, [["__scopeId", "data-v-c2997d1d"]]), og = { class: "item-navigator" }, ng = { class: "nav-item-info" }, ag = ["title"], lg = { class: "nav-controls" }, ig = { class: "nav-arrows" }, rg = ["disabled"], cg = ["disabled"], ug = { class: "nav-position" }, dg = /* @__PURE__ */ me({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const o = t;
    return (n, l) => (a(), c("div", og, [
      s("div", ng, [
        s("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, ag)
      ]),
      s("div", lg, [
        s("div", ig, [
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (i) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, rg),
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (i) => o("next")),
            title: "Next item"
          }, " → ", 8, cg)
        ]),
        s("span", ug, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), yr = /* @__PURE__ */ pe(dg, [["__scopeId", "data-v-74af7920"]]), fg = ["type", "value", "placeholder", "disabled"], mg = {
  key: 0,
  class: "base-input-error"
}, vg = /* @__PURE__ */ me({
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
    return (t, o) => (a(), c("div", {
      class: xe(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: xe(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.value)),
        onKeyup: [
          o[1] || (o[1] = Jt((n) => t.$emit("enter"), ["enter"])),
          o[2] || (o[2] = Jt((n) => t.$emit("escape"), ["escape"]))
        ]
      }, null, 42, fg),
      e.error ? (a(), c("span", mg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Xt = /* @__PURE__ */ pe(vg, [["__scopeId", "data-v-9ba02cdc"]]), pg = { class: "node-resolution-step" }, gg = {
  key: 0,
  class: "auto-resolved-section"
}, hg = { class: "section-header" }, yg = { class: "stat-badge" }, wg = { class: "resolved-packages-list" }, bg = { class: "package-info" }, _g = { class: "package-id" }, kg = { class: "node-count" }, $g = { class: "package-actions" }, Cg = {
  key: 0,
  class: "status-badge install"
}, xg = {
  key: 1,
  class: "status-badge skip"
}, Sg = ["onClick"], Ig = {
  key: 1,
  class: "section-divider"
}, Eg = { class: "step-header" }, Tg = { class: "stat-badge" }, Pg = {
  key: 1,
  class: "step-body"
}, Rg = {
  key: 3,
  class: "empty-state"
}, Mg = { class: "node-modal-body" }, Dg = { class: "node-search-results-container" }, Lg = {
  key: 0,
  class: "node-search-results"
}, Og = ["onClick"], Ng = { class: "node-result-header" }, Ag = { class: "node-result-package-id" }, Ug = {
  key: 0,
  class: "node-result-description"
}, zg = {
  key: 1,
  class: "node-empty-state"
}, Fg = {
  key: 2,
  class: "node-empty-state"
}, Bg = {
  key: 3,
  class: "node-empty-state"
}, Vg = { class: "node-manual-entry-modal" }, Wg = { class: "node-modal-body" }, Gg = { class: "node-modal-actions" }, jg = /* @__PURE__ */ me({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: t }) {
    const o = e, n = t, { searchNodes: l } = hr(), i = k(0), r = k(!1), u = k(!1), d = k(""), m = k(""), v = k([]), h = k(!1), w = k(/* @__PURE__ */ new Map()), p = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function x() {
      _.value && z(), _.value = !1;
    }
    const $ = F(() => o.nodes[i.value]), P = F(() => o.nodes.filter((_e) => o.nodeChoices.has(_e.node_type)).length), N = F(() => $.value ? w.value.get($.value.node_type) || [] : []), T = F(() => $.value ? p.value.has($.value.node_type) : !1);
    Ct($, async (_e) => {
      var Se;
      _e && ((Se = _e.options) != null && Se.length || w.value.has(_e.node_type) || p.value.has(_e.node_type) || o.nodeChoices.has(_e.node_type) || await S(_e.node_type));
    }, { immediate: !0 });
    async function S(_e) {
      p.value.add(_e);
      try {
        const Se = await l(_e, 5);
        w.value.set(_e, Se);
      } catch {
        w.value.set(_e, []);
      } finally {
        p.value.delete(_e);
      }
    }
    const q = F(() => o.autoResolvedPackages.filter((_e) => !o.skippedPackages.has(_e.package_id)).length);
    function B(_e) {
      return o.skippedPackages.has(_e);
    }
    function A(_e) {
      n("package-skip", _e);
    }
    const I = F(() => {
      var Se;
      if (!$.value) return "not-found";
      const _e = o.nodeChoices.get($.value.node_type);
      if (_e)
        switch (_e.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (Se = $.value.options) != null && Se.length ? "ambiguous" : "not-found";
    }), E = F(() => {
      var Se;
      if (!$.value) return;
      const _e = o.nodeChoices.get($.value.node_type);
      if (_e)
        switch (_e.action) {
          case "install":
            return _e.package_id ? `→ ${_e.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Se = $.value.options) != null && Se.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function O(_e) {
      _e >= 0 && _e < o.nodes.length && (i.value = _e);
    }
    function re() {
      $.value && n("mark-optional", $.value.node_type);
    }
    function Y() {
      $.value && n("skip", $.value.node_type);
    }
    function H(_e) {
      $.value && n("option-selected", $.value.node_type, _e);
    }
    function te() {
      $.value && n("clear-choice", $.value.node_type);
    }
    function Z() {
      $.value && (d.value = $.value.node_type, v.value = N.value, r.value = !0, Ee(d.value));
    }
    function U() {
      m.value = "", u.value = !0;
    }
    function z() {
      r.value = !1, d.value = "", v.value = [];
    }
    function R() {
      u.value = !1, m.value = "";
    }
    let be = null;
    function ve() {
      be && clearTimeout(be), be = setTimeout(() => {
        Ee(d.value);
      }, 300);
    }
    async function Ee(_e) {
      if (!_e.trim()) {
        v.value = [];
        return;
      }
      h.value = !0;
      try {
        v.value = await l(_e, 10);
      } catch {
        v.value = [];
      } finally {
        h.value = !1;
      }
    }
    function De(_e) {
      $.value && (n("manual-entry", $.value.node_type, _e.package_id), z());
    }
    function je(_e) {
      $.value && n("manual-entry", $.value.node_type, _e.package_id);
    }
    function Je() {
      !$.value || !m.value.trim() || (n("manual-entry", $.value.node_type, m.value.trim()), R());
    }
    return (_e, Se) => {
      var Ve, ye;
      return a(), c("div", pg, [
        e.autoResolvedPackages.length > 0 ? (a(), c("div", gg, [
          s("div", hg, [
            Se[6] || (Se[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", yg, f(q.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", wg, [
            (a(!0), c(j, null, ge(e.autoResolvedPackages, (le) => (a(), c("div", {
              key: le.package_id,
              class: "resolved-package-item"
            }, [
              s("div", bg, [
                s("code", _g, f(le.package_id), 1),
                s("span", kg, f(le.node_types_count) + " node type" + f(le.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", $g, [
                B(le.package_id) ? (a(), c("span", xg, " SKIPPED ")) : (a(), c("span", Cg, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (Fe) => A(le.package_id)
                }, f(B(le.package_id) ? "Include" : "Skip"), 9, Sg)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), c("div", Ig)) : y("", !0),
        e.nodes.length > 0 ? (a(), c(j, { key: 2 }, [
          s("div", Eg, [
            Se[7] || (Se[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", Tg, f(P.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          $.value ? (a(), M(yr, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": i.value,
            "total-items": e.nodes.length,
            onPrev: Se[0] || (Se[0] = (le) => O(i.value - 1)),
            onNext: Se[1] || (Se[1] = (le) => O(i.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          $.value ? (a(), c("div", Pg, [
            C(sg, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((Ve = $.value.options) != null && Ve.length),
              options: $.value.options,
              choice: (ye = e.nodeChoices) == null ? void 0 : ye.get($.value.node_type),
              status: I.value,
              "status-label": E.value,
              "search-results": N.value,
              "is-searching": T.value,
              onMarkOptional: re,
              onSkip: Y,
              onManualEntry: U,
              onSearch: Z,
              onOptionSelected: H,
              onClearChoice: te,
              onSearchResultSelected: je
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), c("div", Rg, [...Se[8] || (Se[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), M(ht, { to: "body" }, [
          r.value ? (a(), c("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: Se[4] || (Se[4] = nt((le) => _.value = !0, ["self"])),
            onMouseup: nt(x, ["self"])
          }, [
            s("div", {
              class: "node-search-modal",
              onMousedown: Se[3] || (Se[3] = (le) => _.value = !1)
            }, [
              s("div", { class: "node-modal-header" }, [
                Se[9] || (Se[9] = s("h4", null, "Search Node Packages", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: z
                }, "✕")
              ]),
              s("div", Mg, [
                C(Xt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": Se[2] || (Se[2] = (le) => d.value = le),
                  placeholder: "Search by node type, package name...",
                  onInput: ve
                }, null, 8, ["modelValue"]),
                s("div", Dg, [
                  v.value.length > 0 ? (a(), c("div", Lg, [
                    (a(!0), c(j, null, ge(v.value, (le) => (a(), c("div", {
                      key: le.package_id,
                      class: "node-search-result-item",
                      onClick: (Fe) => De(le)
                    }, [
                      s("div", Ng, [
                        s("code", Ag, f(le.package_id), 1),
                        le.match_confidence ? (a(), M(Tn, {
                          key: 0,
                          confidence: le.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      le.description ? (a(), c("div", Ug, f(le.description), 1)) : y("", !0)
                    ], 8, Og))), 128))
                  ])) : h.value ? (a(), c("div", zg, "Searching...")) : d.value ? (a(), c("div", Fg, 'No packages found matching "' + f(d.value) + '"', 1)) : (a(), c("div", Bg, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), M(ht, { to: "body" }, [
          u.value ? (a(), c("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: nt(R, ["self"])
          }, [
            s("div", Vg, [
              s("div", { class: "node-modal-header" }, [
                Se[10] || (Se[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: R
                }, "✕")
              ]),
              s("div", Wg, [
                C(Xt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": Se[5] || (Se[5] = (le) => m.value = le),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", Gg, [
                  C(Me, {
                    variant: "secondary",
                    onClick: R
                  }, {
                    default: g(() => [...Se[11] || (Se[11] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Me, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: Je
                  }, {
                    default: g(() => [...Se[12] || (Se[12] = [
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
}), Hg = /* @__PURE__ */ pe(jg, [["__scopeId", "data-v-281581bc"]]), Kg = { class: "node-info" }, qg = { class: "node-info-text" }, Yg = { class: "item-body" }, Jg = {
  key: 0,
  class: "resolved-state"
}, Xg = {
  key: 1,
  class: "multiple-options"
}, Qg = { class: "options-list" }, Zg = ["onClick"], eh = ["name", "value", "checked", "onChange"], th = { class: "option-content" }, sh = { class: "option-header" }, oh = { class: "option-filename" }, nh = { class: "option-meta" }, ah = { class: "option-size" }, lh = { class: "option-category" }, ih = { class: "option-path" }, rh = { class: "action-buttons" }, ch = {
  key: 2,
  class: "unresolved"
}, uh = { class: "action-buttons" }, dh = /* @__PURE__ */ me({
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
    const o = e, n = t, l = F(() => !!o.choice);
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
    function r(d) {
      n("option-selected", d);
    }
    function u(d) {
      if (!d) return "Unknown";
      const m = d / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, m) => (a(), c("div", {
      class: xe(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      s("div", Kg, [
        s("span", qg, [
          m[7] || (m[7] = b("Used by: ", -1)),
          s("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), c("span", {
          key: 0,
          class: xe(["status-badge", i.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", Yg, [
        l.value ? (a(), c("div", Jg, [
          C(Me, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: g(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), c("div", Xg, [
          m[12] || (m[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", Qg, [
            (a(!0), c(j, null, ge(e.options, (v, h) => (a(), c("label", {
              key: v.model.hash,
              class: xe(["option-card", { selected: e.selectedOptionIndex === h }]),
              onClick: (w) => r(h)
            }, [
              s("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: h,
                checked: e.selectedOptionIndex === h,
                onChange: (w) => r(h)
              }, null, 40, eh),
              s("div", th, [
                s("div", sh, [
                  s("span", oh, f(v.model.filename), 1),
                  C(Tn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", nh, [
                  s("span", ah, f(u(v.model.size)), 1),
                  s("span", lh, f(v.model.category), 1)
                ]),
                s("div", ih, f(v.model.relative_path), 1)
              ])
            ], 10, Zg))), 128))
          ]),
          s("div", rh, [
            C(Me, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: g(() => [...m[9] || (m[9] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: g(() => [...m[10] || (m[10] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: m[3] || (m[3] = (v) => n("mark-optional"))
            }, {
              default: g(() => [...m[11] || (m[11] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), c("div", ch, [
          m[16] || (m[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", uh, [
            C(Me, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: g(() => [...m[13] || (m[13] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: g(() => [...m[14] || (m[14] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: m[6] || (m[6] = (v) => n("mark-optional"))
            }, {
              default: g(() => [...m[15] || (m[15] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), fh = /* @__PURE__ */ pe(dh, [["__scopeId", "data-v-8a82fefa"]]), mh = { class: "model-resolution-step" }, vh = { class: "step-header" }, ph = { class: "step-info" }, gh = { class: "step-title" }, hh = { class: "step-description" }, yh = { class: "stat-badge" }, wh = {
  key: 1,
  class: "step-body"
}, bh = {
  key: 2,
  class: "empty-state"
}, _h = { class: "model-search-modal" }, kh = { class: "model-modal-body" }, $h = {
  key: 0,
  class: "model-search-results"
}, Ch = ["onClick"], xh = { class: "model-result-header" }, Sh = { class: "model-result-filename" }, Ih = { class: "model-result-meta" }, Eh = { class: "model-result-category" }, Th = { class: "model-result-size" }, Ph = {
  key: 0,
  class: "model-result-path"
}, Rh = {
  key: 1,
  class: "model-no-results"
}, Mh = {
  key: 2,
  class: "model-searching"
}, Dh = { class: "model-download-url-modal" }, Lh = { class: "model-modal-body" }, Oh = { class: "model-input-group" }, Nh = { class: "model-input-group" }, Ah = { class: "model-modal-actions" }, Uh = /* @__PURE__ */ me({
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
    function n(z) {
      var R;
      return z && ((R = o[z]) == null ? void 0 : R[0]) || null;
    }
    const l = e, i = t, r = k(0), u = k(!1), d = k(!1), m = k(""), v = k(""), h = k(""), w = k([]), p = k(!1), _ = F(() => l.models[r.value]), x = F(() => l.models.some((z) => z.is_download_intent)), $ = F(() => l.models.filter(
      (z) => l.modelChoices.has(z.filename) || z.is_download_intent
    ).length), P = F(() => {
      var R;
      if (!_.value) return "";
      const z = n((R = _.value.reference) == null ? void 0 : R.node_type);
      return z ? `${z}/${_.value.filename}` : "";
    }), N = F(() => {
      var R;
      if (!_.value) return "not-found";
      const z = l.modelChoices.get(_.value.filename);
      if (z)
        switch (z.action) {
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
      return _.value.is_download_intent ? "download" : (R = _.value.options) != null && R.length ? "ambiguous" : "not-found";
    }), T = F(() => {
      var R, be;
      if (!_.value) return;
      const z = l.modelChoices.get(_.value.filename);
      if (z)
        switch (z.action) {
          case "select":
            return (R = z.selected_model) != null && R.filename ? `→ ${z.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (be = _.value.options) != null && be.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function S(z) {
      z >= 0 && z < l.models.length && (r.value = z);
    }
    function q() {
      _.value && i("mark-optional", _.value.filename);
    }
    function B() {
      _.value && i("skip", _.value.filename);
    }
    function A(z) {
      _.value && i("option-selected", _.value.filename, z);
    }
    function I() {
      _.value && i("clear-choice", _.value.filename);
    }
    function E() {
      _.value && (m.value = _.value.filename, u.value = !0);
    }
    function O() {
      _.value && (v.value = _.value.download_source || "", h.value = _.value.target_path || P.value, d.value = !0);
    }
    function re() {
      u.value = !1, m.value = "", w.value = [];
    }
    function Y() {
      d.value = !1, v.value = "", h.value = "";
    }
    function H() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function te(z) {
      _.value && re();
    }
    function Z() {
      !_.value || !v.value.trim() || (i("download-url", _.value.filename, v.value.trim(), h.value.trim() || void 0), Y());
    }
    function U(z) {
      if (!z) return "Unknown";
      const R = z / (1024 * 1024 * 1024);
      return R >= 1 ? `${R.toFixed(2)} GB` : `${(z / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (z, R) => {
      var be, ve, Ee;
      return a(), c("div", mh, [
        s("div", vh, [
          s("div", ph, [
            s("h3", gh, f(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", hh, f(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", yh, f($.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), M(yr, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": r.value,
          "total-items": e.models.length,
          onPrev: R[0] || (R[0] = (De) => S(r.value - 1)),
          onNext: R[1] || (R[1] = (De) => S(r.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), c("div", wh, [
          C(fh, {
            filename: _.value.filename,
            "node-type": ((be = _.value.reference) == null ? void 0 : be.node_type) || "Unknown",
            "has-multiple-options": !!((ve = _.value.options) != null && ve.length),
            options: _.value.options,
            choice: (Ee = e.modelChoices) == null ? void 0 : Ee.get(_.value.filename),
            status: N.value,
            "status-label": T.value,
            onMarkOptional: q,
            onSkip: B,
            onDownloadUrl: O,
            onSearch: E,
            onOptionSelected: A,
            onClearChoice: I
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), c("div", bh, [...R[5] || (R[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (a(), M(ht, { to: "body" }, [
          u.value ? (a(), c("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: nt(re, ["self"])
          }, [
            s("div", _h, [
              s("div", { class: "model-modal-header" }, [
                R[6] || (R[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: re
                }, "✕")
              ]),
              s("div", kh, [
                C(Xt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": R[2] || (R[2] = (De) => m.value = De),
                  placeholder: "Search by filename, category...",
                  onInput: H
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), c("div", $h, [
                  (a(!0), c(j, null, ge(w.value, (De) => (a(), c("div", {
                    key: De.hash,
                    class: "model-search-result-item",
                    onClick: (je) => te()
                  }, [
                    s("div", xh, [
                      s("code", Sh, f(De.filename), 1)
                    ]),
                    s("div", Ih, [
                      s("span", Eh, f(De.category), 1),
                      s("span", Th, f(U(De.size)), 1)
                    ]),
                    De.relative_path ? (a(), c("div", Ph, f(De.relative_path), 1)) : y("", !0)
                  ], 8, Ch))), 128))
                ])) : m.value && !p.value ? (a(), c("div", Rh, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (a(), c("div", Mh, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), M(ht, { to: "body" }, [
          d.value ? (a(), c("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: nt(Y, ["self"])
          }, [
            s("div", Dh, [
              s("div", { class: "model-modal-header" }, [
                R[7] || (R[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              s("div", Lh, [
                s("div", Oh, [
                  R[8] || (R[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  C(Xt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": R[3] || (R[3] = (De) => v.value = De),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", Nh, [
                  R[9] || (R[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  C(Xt, {
                    modelValue: h.value,
                    "onUpdate:modelValue": R[4] || (R[4] = (De) => h.value = De),
                    placeholder: P.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", Ah, [
                  C(Me, {
                    variant: "secondary",
                    onClick: Y
                  }, {
                    default: g(() => [...R[10] || (R[10] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Me, {
                    variant: "primary",
                    disabled: !v.value.trim() || !h.value.trim(),
                    onClick: Z
                  }, {
                    default: g(() => [...R[11] || (R[11] = [
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
}), zh = /* @__PURE__ */ pe(Uh, [["__scopeId", "data-v-c6acbada"]]), Fh = { class: "applying-step" }, Bh = {
  key: 0,
  class: "phase-content"
}, Vh = {
  key: 1,
  class: "phase-content"
}, Wh = { class: "phase-description" }, Gh = { class: "overall-progress" }, jh = { class: "progress-bar" }, Hh = { class: "progress-label" }, Kh = { class: "install-list" }, qh = { class: "install-icon" }, Yh = { key: 0 }, Jh = {
  key: 1,
  class: "spinner"
}, Xh = { key: 2 }, Qh = { key: 3 }, Zh = {
  key: 0,
  class: "install-error"
}, ey = {
  key: 2,
  class: "phase-content"
}, ty = { class: "phase-header" }, sy = { class: "phase-title" }, oy = { class: "completion-summary" }, ny = {
  key: 0,
  class: "summary-item success"
}, ay = { class: "summary-text" }, ly = {
  key: 1,
  class: "summary-item error"
}, iy = { class: "summary-text" }, ry = {
  key: 2,
  class: "failed-list"
}, cy = { class: "failed-node-id" }, uy = { class: "failed-error" }, dy = {
  key: 4,
  class: "summary-item success"
}, fy = {
  key: 5,
  class: "restart-prompt"
}, my = {
  key: 3,
  class: "phase-content error"
}, vy = { class: "error-message" }, py = /* @__PURE__ */ me({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const t = e, o = F(() => {
      var m, v;
      const u = ((m = t.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || t.progress.nodesToInstall.length;
      if (!u) return 0;
      const d = ((v = t.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(d / u * 100);
    }), n = F(() => {
      var u;
      return ((u = t.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = F(() => n.value.length > 0);
    function i(u, d) {
      var v, h;
      const m = (v = t.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.find((w) => w.node_id === u);
      return m ? m.success ? "complete" : "failed" : ((h = t.progress.nodeInstallProgress) == null ? void 0 : h.currentIndex) === d ? "installing" : "pending";
    }
    function r(u) {
      var d, m;
      return (m = (d = t.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((v) => v.node_id === u)) == null ? void 0 : m.error;
    }
    return (u, d) => {
      var m, v, h, w;
      return a(), c("div", Fh, [
        e.progress.phase === "resolving" ? (a(), c("div", Bh, [...d[2] || (d[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), c("div", Vh, [
          d[3] || (d[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", Wh, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", Gh, [
            s("div", jh, [
              s("div", {
                class: "progress-fill",
                style: Vt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            s("span", Hh, f(((h = e.progress.nodeInstallProgress) == null ? void 0 : h.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", Kh, [
            (a(!0), c(j, null, ge(e.progress.nodesToInstall, (p, _) => (a(), c("div", {
              key: p,
              class: xe(["install-item", i(p, _)])
            }, [
              s("span", qh, [
                i(p, _) === "pending" ? (a(), c("span", Yh, "○")) : i(p, _) === "installing" ? (a(), c("span", Jh, "◌")) : i(p, _) === "complete" ? (a(), c("span", Xh, "✓")) : i(p, _) === "failed" ? (a(), c("span", Qh, "✗")) : y("", !0)
              ]),
              s("code", null, f(p), 1),
              r(p) ? (a(), c("span", Zh, f(r(p)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), c("div", ey, [
          s("div", ty, [
            s("span", {
              class: xe(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            s("h3", sy, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", oy, [
            e.progress.nodesInstalled.length > 0 ? (a(), c("div", ny, [
              d[4] || (d[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", ay, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), c("div", ly, [
              d[5] || (d[5] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", iy, f(n.value.length) + " package" + f(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), c("div", ry, [
              (a(!0), c(j, null, ge(n.value, (p) => (a(), c("div", {
                key: p.node_id,
                class: "failed-item"
              }, [
                s("code", cy, f(p.node_id), 1),
                s("span", uy, f(p.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), c("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (p) => u.$emit("retry-failed"))
            }, " Retry Failed (" + f(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), c("div", dy, [...d[6] || (d[6] = [
              s("span", { class: "summary-icon" }, "✓", -1),
              s("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = s("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), c("div", fy, [
              d[7] || (d[7] = s("div", { class: "restart-warning" }, [
                s("span", { class: "warning-icon" }, "⚠"),
                s("div", { class: "warning-content" }, [
                  s("strong", null, "Restart Required"),
                  s("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              s("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (p) => u.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (a(), c("div", my, [
          d[9] || (d[9] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", vy, f(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), gy = /* @__PURE__ */ pe(py, [["__scopeId", "data-v-5efaae58"]]), hy = {
  key: 0,
  class: "loading-state"
}, yy = {
  key: 1,
  class: "wizard-content"
}, wy = {
  key: 0,
  class: "step-content"
}, by = { class: "analysis-summary" }, _y = { class: "analysis-header" }, ky = { class: "summary-description" }, $y = { class: "stats-grid" }, Cy = { class: "stat-card" }, xy = { class: "stat-items" }, Sy = {
  key: 0,
  class: "stat-item success"
}, Iy = { class: "stat-count" }, Ey = {
  key: 1,
  class: "stat-item info"
}, Ty = { class: "stat-count" }, Py = {
  key: 2,
  class: "stat-item warning"
}, Ry = { class: "stat-count" }, My = {
  key: 3,
  class: "stat-item error"
}, Dy = { class: "stat-count" }, Ly = { class: "stat-card" }, Oy = { class: "stat-items" }, Ny = { class: "stat-item success" }, Ay = { class: "stat-count" }, Uy = {
  key: 0,
  class: "stat-item info"
}, zy = { class: "stat-count" }, Fy = {
  key: 1,
  class: "stat-item warning"
}, By = { class: "stat-count" }, Vy = {
  key: 2,
  class: "stat-item warning"
}, Wy = { class: "stat-count" }, Gy = {
  key: 3,
  class: "stat-item error"
}, jy = { class: "stat-count" }, Hy = {
  key: 0,
  class: "status-message warning"
}, Ky = { class: "status-text" }, qy = {
  key: 1,
  class: "status-message info"
}, Yy = { class: "status-text" }, Jy = {
  key: 2,
  class: "status-message info"
}, Xy = { class: "status-text" }, Qy = {
  key: 3,
  class: "status-message warning"
}, Zy = { class: "status-text" }, e1 = {
  key: 4,
  class: "status-message success"
}, t1 = {
  key: 5,
  class: "category-mismatch-section"
}, s1 = { class: "mismatch-list" }, o1 = { class: "mismatch-path" }, n1 = { class: "mismatch-target" }, a1 = {
  key: 3,
  class: "step-content"
}, l1 = { class: "review-summary" }, i1 = { class: "review-stats" }, r1 = { class: "review-stat" }, c1 = { class: "stat-value" }, u1 = { class: "review-stat" }, d1 = { class: "stat-value" }, f1 = { class: "review-stat" }, m1 = { class: "stat-value" }, v1 = { class: "review-stat" }, p1 = { class: "stat-value" }, g1 = {
  key: 0,
  class: "review-section"
}, h1 = { class: "section-title" }, y1 = { class: "review-items" }, w1 = { class: "item-name" }, b1 = { class: "item-choice" }, _1 = {
  key: 0,
  class: "choice-badge install"
}, k1 = {
  key: 1,
  class: "choice-badge skip"
}, $1 = {
  key: 1,
  class: "review-section"
}, C1 = { class: "section-title" }, x1 = { class: "review-items" }, S1 = { class: "item-name" }, I1 = { class: "item-choice" }, E1 = {
  key: 0,
  class: "choice-badge install"
}, T1 = {
  key: 1,
  class: "choice-badge optional"
}, P1 = {
  key: 2,
  class: "choice-badge skip"
}, R1 = {
  key: 1,
  class: "choice-badge pending"
}, M1 = {
  key: 2,
  class: "review-section"
}, D1 = { class: "section-title" }, L1 = { class: "review-items" }, O1 = { class: "item-name" }, N1 = { class: "item-choice" }, A1 = {
  key: 0,
  class: "choice-badge install"
}, U1 = {
  key: 1,
  class: "choice-badge download"
}, z1 = {
  key: 2,
  class: "choice-badge optional"
}, F1 = {
  key: 3,
  class: "choice-badge skip"
}, B1 = {
  key: 4,
  class: "choice-badge skip"
}, V1 = {
  key: 1,
  class: "choice-badge download"
}, W1 = {
  key: 2,
  class: "choice-badge pending"
}, G1 = {
  key: 3,
  class: "no-choices"
}, j1 = /* @__PURE__ */ me({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const o = e, n = t, { analyzeWorkflow: l, applyResolution: i, installNodes: r, queueModelDownloads: u, progress: d, resetProgress: m } = hr(), { loadPendingDownloads: v } = en(), { openFileLocation: h } = at(), w = k(null), p = k(!1), _ = k(!1), x = k(null), $ = k("analysis"), P = k([]), N = k(/* @__PURE__ */ new Map()), T = k(/* @__PURE__ */ new Map()), S = k(/* @__PURE__ */ new Set()), q = F(() => {
      const X = [
        { id: "analysis", label: "Analysis" }
      ];
      return (A.value || O.value) && X.push({ id: "nodes", label: "Nodes" }), (I.value || E.value) && X.push({ id: "models", label: "Models" }), X.push({ id: "review", label: "Review" }), $.value === "applying" && X.push({ id: "applying", label: "Applying" }), X;
    }), B = F(() => w.value ? w.value.stats.needs_user_input : !1), A = F(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), I = F(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), E = F(() => w.value ? w.value.stats.download_intents > 0 : !1), O = F(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), re = F(() => w.value ? w.value.nodes.resolved.length : 0), Y = F(() => w.value ? w.value.models.resolved.filter((X) => X.has_category_mismatch) : []), H = F(() => Y.value.length > 0), te = F(() => {
      if (!w.value) return [];
      const X = w.value.nodes.resolved.filter((W) => !W.is_installed), D = /* @__PURE__ */ new Set();
      return X.filter((W) => D.has(W.package.package_id) ? !1 : (D.add(W.package.package_id), !0));
    }), Z = F(() => {
      if (!w.value) return [];
      const X = w.value.nodes.resolved.filter((W) => !W.is_installed), D = /* @__PURE__ */ new Map();
      for (const W of X) {
        const ce = D.get(W.package.package_id);
        ce ? ce.node_types_count++ : D.set(W.package.package_id, {
          package_id: W.package.package_id,
          title: W.package.title,
          node_types_count: 1
        });
      }
      return Array.from(D.values());
    }), U = F(() => te.value.filter((X) => !S.value.has(X.package.package_id))), z = F(() => w.value ? w.value.models.resolved.filter((X) => X.match_type === "download_intent").map((X) => ({
      filename: X.reference.widget_value,
      reference: X.reference,
      is_download_intent: !0,
      resolved_model: X.model,
      download_source: X.download_source,
      target_path: X.target_path
    })) : []), R = F(() => {
      if (!w.value) return [];
      const X = w.value.nodes.unresolved.map((W) => ({
        node_type: W.reference.node_type,
        reason: W.reason,
        is_unresolved: !0,
        options: void 0
      })), D = w.value.nodes.ambiguous.map((W) => ({
        node_type: W.reference.node_type,
        has_multiple_options: !0,
        options: W.options.map((ce) => ({
          package_id: ce.package.package_id,
          title: ce.package.title,
          match_confidence: ce.match_confidence,
          match_type: ce.match_type,
          is_installed: ce.is_installed
        }))
      }));
      return [...X, ...D];
    }), be = F(() => {
      if (!w.value) return [];
      const X = w.value.models.unresolved.map((W) => ({
        filename: W.reference.widget_value,
        reference: W.reference,
        reason: W.reason,
        is_unresolved: !0,
        options: void 0
      })), D = w.value.models.ambiguous.map((W) => ({
        filename: W.reference.widget_value,
        reference: W.reference,
        has_multiple_options: !0,
        options: W.options.map((ce) => ({
          model: ce.model,
          match_confidence: ce.match_confidence,
          match_type: ce.match_type,
          has_download_source: ce.has_download_source
        }))
      }));
      return [...X, ...D];
    }), ve = F(() => {
      const X = be.value, D = z.value.map((W) => ({
        filename: W.filename,
        reference: W.reference,
        is_download_intent: !0,
        resolved_model: W.resolved_model,
        download_source: W.download_source,
        target_path: W.target_path,
        options: void 0
      }));
      return [...X, ...D];
    }), Ee = F(() => {
      let X = U.value.length;
      for (const D of N.value.values())
        D.action === "install" && X++;
      for (const D of T.value.values())
        D.action === "select" && X++;
      return X;
    }), De = F(() => {
      let X = 0;
      for (const D of T.value.values())
        D.action === "download" && X++;
      return X;
    }), je = F(() => {
      let X = 0;
      for (const D of N.value.values())
        D.action === "optional" && X++;
      for (const D of T.value.values())
        D.action === "optional" && X++;
      return X;
    }), Je = F(() => {
      let X = S.value.size;
      for (const D of N.value.values())
        D.action === "skip" && X++;
      for (const D of T.value.values())
        D.action === "skip" && X++;
      for (const D of R.value)
        N.value.has(D.node_type) || X++;
      for (const D of be.value)
        T.value.has(D.filename) || X++;
      return X;
    }), _e = F(() => {
      const X = {};
      if (X.analysis = { resolved: 1, total: 1 }, A.value) {
        const D = R.value.length, W = R.value.filter(
          (ce) => N.value.has(ce.node_type)
        ).length;
        X.nodes = { resolved: W, total: D };
      }
      if (I.value || E.value) {
        const D = ve.value.length, W = ve.value.filter(
          (ce) => T.value.has(ce.filename) || ce.is_download_intent
        ).length;
        X.models = { resolved: W, total: D };
      }
      if (X.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const D = d.totalFiles || 1, W = d.completedFiles.length;
        X.applying = { resolved: W, total: D };
      }
      return X;
    });
    function Se(X) {
      $.value = X;
    }
    function Ve() {
      const X = q.value.findIndex((D) => D.id === $.value);
      X > 0 && ($.value = q.value[X - 1].id);
    }
    function ye() {
      const X = q.value.findIndex((D) => D.id === $.value);
      X < q.value.length - 1 && ($.value = q.value[X + 1].id);
    }
    async function le() {
      p.value = !0, x.value = null;
      try {
        w.value = await l(o.workflowName);
      } catch (X) {
        x.value = X instanceof Error ? X.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function Fe() {
      P.value.includes("analysis") || P.value.push("analysis"), A.value || O.value ? $.value = "nodes" : I.value || E.value ? $.value = "models" : $.value = "review";
    }
    function Ie(X) {
      N.value.set(X, { action: "optional" });
    }
    function L(X) {
      N.value.set(X, { action: "skip" });
    }
    function V(X, D) {
      var ce;
      const W = R.value.find((Te) => Te.node_type === X);
      (ce = W == null ? void 0 : W.options) != null && ce[D] && N.value.set(X, {
        action: "install",
        package_id: W.options[D].package_id
      });
    }
    function oe(X, D) {
      N.value.set(X, {
        action: "install",
        package_id: D
      });
    }
    function ae(X) {
      N.value.delete(X);
    }
    function de(X) {
      S.value.has(X) ? S.value.delete(X) : S.value.add(X);
    }
    function fe(X) {
      T.value.set(X, { action: "optional" });
    }
    function ke(X) {
      T.value.set(X, { action: "skip" });
    }
    function $e(X, D) {
      var ce;
      const W = be.value.find((Te) => Te.filename === X);
      (ce = W == null ? void 0 : W.options) != null && ce[D] && T.value.set(X, {
        action: "select",
        selected_model: W.options[D].model
      });
    }
    function ne(X, D, W) {
      T.value.set(X, {
        action: "download",
        url: D,
        target_path: W
      });
    }
    function ue(X) {
      T.value.delete(X);
    }
    async function Re(X) {
      try {
        await h(X);
      } catch (D) {
        x.value = D instanceof Error ? D.message : "Failed to open file location";
      }
    }
    async function Ce() {
      var X;
      _.value = !0, x.value = null, m(), d.phase = "resolving", $.value = "applying";
      try {
        const D = await i(o.workflowName, N.value, T.value, S.value);
        D.models_to_download && D.models_to_download.length > 0 && u(o.workflowName, D.models_to_download);
        const W = [
          ...D.nodes_to_install || [],
          ...U.value.map((Te) => Te.package.package_id)
        ];
        d.nodesToInstall = [...new Set(W)], d.nodesToInstall.length > 0 && await r(o.workflowName), d.phase = "complete", await v();
        const ce = d.installError || ((X = d.nodeInstallProgress) == null ? void 0 : X.completedNodes.some((Te) => !Te.success));
        !d.needsRestart && !ce && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (D) {
        x.value = D instanceof Error ? D.message : "Failed to apply resolution", d.error = x.value, d.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function ee() {
      n("refresh"), n("restart"), n("close");
    }
    async function K() {
      var D;
      const X = ((D = d.nodeInstallProgress) == null ? void 0 : D.completedNodes.filter((W) => !W.success).map((W) => W.node_id)) || [];
      if (X.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: X.length
        }, d.nodesToInstall = X, d.nodesInstalled = [], d.installError = void 0;
        try {
          await r(o.workflowName), d.phase = "complete";
        } catch (W) {
          d.error = W instanceof Error ? W.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return Qe(le), (X, D) => (a(), M(vt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: x.value || void 0,
      "fixed-height": !0,
      onClose: D[1] || (D[1] = (W) => n("close"))
    }, {
      body: g(() => [
        p.value && !w.value ? (a(), c("div", hy, [...D[2] || (D[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (a(), c("div", yy, [
          C(xp, {
            steps: q.value,
            "current-step": $.value,
            "completed-steps": P.value,
            "step-stats": _e.value,
            onStepChange: Se
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (a(), c("div", wy, [
            s("div", by, [
              s("div", _y, [
                D[3] || (D[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", ky, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", $y, [
                s("div", Cy, [
                  D[12] || (D[12] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", xy, [
                    re.value > 0 ? (a(), c("div", Sy, [
                      D[4] || (D[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", Iy, f(re.value), 1),
                      D[5] || (D[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (a(), c("div", Ey, [
                      D[6] || (D[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", Ty, f(w.value.stats.packages_needing_installation), 1),
                      D[7] || (D[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (a(), c("div", Py, [
                      D[8] || (D[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", Ry, f(w.value.nodes.ambiguous.length), 1),
                      D[9] || (D[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (a(), c("div", My, [
                      D[10] || (D[10] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", Dy, f(w.value.nodes.unresolved.length), 1),
                      D[11] || (D[11] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                s("div", Ly, [
                  D[23] || (D[23] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", Oy, [
                    s("div", Ny, [
                      D[13] || (D[13] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", Ay, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      D[14] || (D[14] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (a(), c("div", Uy, [
                      D[15] || (D[15] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", zy, f(w.value.stats.download_intents), 1),
                      D[16] || (D[16] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    H.value ? (a(), c("div", Fy, [
                      D[17] || (D[17] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", By, f(Y.value.length), 1),
                      D[18] || (D[18] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (a(), c("div", Vy, [
                      D[19] || (D[19] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", Wy, f(w.value.models.ambiguous.length), 1),
                      D[20] || (D[20] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (a(), c("div", Gy, [
                      D[21] || (D[21] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", jy, f(w.value.models.unresolved.length), 1),
                      D[22] || (D[22] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              B.value ? (a(), c("div", Hy, [
                D[24] || (D[24] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", Ky, f(R.value.length + be.value.length) + " items need your input", 1)
              ])) : O.value ? (a(), c("div", qy, [
                D[25] || (D[25] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", Yy, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(E.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : E.value ? (a(), c("div", Jy, [
                D[26] || (D[26] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", Xy, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to review", 1)
              ])) : H.value ? (a(), c("div", Qy, [
                D[27] || (D[27] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", Zy, f(Y.value.length) + " model" + f(Y.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), c("div", e1, [...D[28] || (D[28] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              H.value ? (a(), c("div", t1, [
                D[31] || (D[31] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", s1, [
                  (a(!0), c(j, null, ge(Y.value, (W) => {
                    var ce, Te;
                    return a(), c("div", {
                      key: W.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", o1, f(W.actual_category) + "/" + f((ce = W.model) == null ? void 0 : ce.filename), 1),
                      D[30] || (D[30] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", n1, f((Te = W.expected_categories) == null ? void 0 : Te[0]) + "/", 1),
                      W.file_path ? (a(), M(Me, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Ke) => Re(W.file_path)
                      }, {
                        default: g(() => [...D[29] || (D[29] = [
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
          $.value === "nodes" ? (a(), M(Hg, {
            key: 1,
            nodes: R.value,
            "node-choices": N.value,
            "auto-resolved-packages": Z.value,
            "skipped-packages": S.value,
            onMarkOptional: Ie,
            onSkip: L,
            onOptionSelected: V,
            onManualEntry: oe,
            onClearChoice: ae,
            onPackageSkip: de
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          $.value === "models" ? (a(), M(zh, {
            key: 2,
            models: ve.value,
            "model-choices": T.value,
            onMarkOptional: fe,
            onSkip: ke,
            onOptionSelected: $e,
            onDownloadUrl: ne,
            onClearChoice: ue
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          $.value === "review" ? (a(), c("div", a1, [
            s("div", l1, [
              D[36] || (D[36] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", i1, [
                s("div", r1, [
                  s("span", c1, f(Ee.value), 1),
                  D[32] || (D[32] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", u1, [
                  s("span", d1, f(De.value), 1),
                  D[33] || (D[33] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", f1, [
                  s("span", m1, f(je.value), 1),
                  D[34] || (D[34] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", v1, [
                  s("span", p1, f(Je.value), 1),
                  D[35] || (D[35] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              Z.value.length > 0 ? (a(), c("div", g1, [
                s("h4", h1, "Node Packages (" + f(Z.value.length) + ")", 1),
                s("div", y1, [
                  (a(!0), c(j, null, ge(Z.value, (W) => (a(), c("div", {
                    key: W.package_id,
                    class: "review-item"
                  }, [
                    s("code", w1, f(W.package_id), 1),
                    s("div", b1, [
                      S.value.has(W.package_id) ? (a(), c("span", k1, "Skipped")) : (a(), c("span", _1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              R.value.length > 0 ? (a(), c("div", $1, [
                s("h4", C1, "Node Choices (" + f(R.value.length) + ")", 1),
                s("div", x1, [
                  (a(!0), c(j, null, ge(R.value, (W) => {
                    var ce, Te, Ke, rt;
                    return a(), c("div", {
                      key: W.node_type,
                      class: "review-item"
                    }, [
                      s("code", S1, f(W.node_type), 1),
                      s("div", I1, [
                        N.value.has(W.node_type) ? (a(), c(j, { key: 0 }, [
                          ((ce = N.value.get(W.node_type)) == null ? void 0 : ce.action) === "install" ? (a(), c("span", E1, f((Te = N.value.get(W.node_type)) == null ? void 0 : Te.package_id), 1)) : ((Ke = N.value.get(W.node_type)) == null ? void 0 : Ke.action) === "optional" ? (a(), c("span", T1, " Optional ")) : ((rt = N.value.get(W.node_type)) == null ? void 0 : rt.action) === "skip" ? (a(), c("span", P1, " Skip ")) : y("", !0)
                        ], 64)) : (a(), c("span", R1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ve.value.length > 0 ? (a(), c("div", M1, [
                s("h4", D1, "Models (" + f(ve.value.length) + ")", 1),
                s("div", L1, [
                  (a(!0), c(j, null, ge(ve.value, (W) => {
                    var ce, Te, Ke, rt, yt, wt, ct;
                    return a(), c("div", {
                      key: W.filename,
                      class: "review-item"
                    }, [
                      s("code", O1, f(W.filename), 1),
                      s("div", N1, [
                        T.value.has(W.filename) ? (a(), c(j, { key: 0 }, [
                          ((ce = T.value.get(W.filename)) == null ? void 0 : ce.action) === "select" ? (a(), c("span", A1, f((Ke = (Te = T.value.get(W.filename)) == null ? void 0 : Te.selected_model) == null ? void 0 : Ke.filename), 1)) : ((rt = T.value.get(W.filename)) == null ? void 0 : rt.action) === "download" ? (a(), c("span", U1, " Download ")) : ((yt = T.value.get(W.filename)) == null ? void 0 : yt.action) === "optional" ? (a(), c("span", z1, " Optional ")) : ((wt = T.value.get(W.filename)) == null ? void 0 : wt.action) === "skip" ? (a(), c("span", F1, " Skip ")) : ((ct = T.value.get(W.filename)) == null ? void 0 : ct.action) === "cancel_download" ? (a(), c("span", B1, " Cancel Download ")) : y("", !0)
                        ], 64)) : W.is_download_intent ? (a(), c("span", V1, " Pending Download ")) : (a(), c("span", W1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              te.value.length === 0 && R.value.length === 0 && ve.value.length === 0 ? (a(), c("div", G1, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          $.value === "applying" ? (a(), M(gy, {
            key: 4,
            progress: Ue(d),
            onRestart: ee,
            onRetryFailed: K
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: g(() => [
        $.value !== "analysis" && $.value !== "applying" ? (a(), M(Me, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: Ve
        }, {
          default: g(() => [...D[37] || (D[37] = [
            b(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        D[41] || (D[41] = s("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || Ue(d).phase === "complete" || Ue(d).phase === "error" ? (a(), M(Me, {
          key: 1,
          variant: "secondary",
          onClick: D[0] || (D[0] = (W) => n("close"))
        }, {
          default: g(() => [
            b(f(Ue(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "analysis" ? (a(), M(Me, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: Fe
        }, {
          default: g(() => [...D[38] || (D[38] = [
            b(" Continue ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        $.value === "nodes" ? (a(), M(Me, {
          key: 3,
          variant: "primary",
          onClick: ye
        }, {
          default: g(() => [
            b(f(I.value || E.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "models" ? (a(), M(Me, {
          key: 4,
          variant: "primary",
          onClick: ye
        }, {
          default: g(() => [...D[39] || (D[39] = [
            b(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        $.value === "review" ? (a(), M(Me, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: Ce
        }, {
          default: g(() => [...D[40] || (D[40] = [
            b(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), H1 = /* @__PURE__ */ pe(j1, [["__scopeId", "data-v-6276cf1d"]]), K1 = { class: "search-input-wrapper" }, q1 = ["value", "placeholder"], Y1 = /* @__PURE__ */ me({
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
    const o = e, n = t, l = k(null);
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
    return Qe(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, m) => (a(), c("div", K1, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: r,
        onKeyup: Jt(u, ["escape"])
      }, null, 40, q1),
      e.clearable && e.modelValue ? (a(), c("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), J1 = /* @__PURE__ */ pe(Y1, [["__scopeId", "data-v-266f857a"]]), X1 = { class: "search-bar" }, Q1 = /* @__PURE__ */ me({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, o) => (a(), c("div", X1, [
      C(J1, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => t.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), bo = /* @__PURE__ */ pe(Q1, [["__scopeId", "data-v-3d51bbfd"]]), Z1 = { class: "section-group" }, e0 = {
  key: 0,
  class: "section-content"
}, t0 = /* @__PURE__ */ me({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(o.initiallyExpanded);
    function i() {
      o.collapsible && (l.value = !l.value, n("toggle", l.value));
    }
    return (r, u) => (a(), c("section", Z1, [
      C(Lt, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: i
      }, {
        default: g(() => [
          b(f(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (a(), c("div", e0, [
        Ge(r.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), ot = /* @__PURE__ */ pe(t0, [["__scopeId", "data-v-c48e33ed"]]), s0 = { class: "item-header" }, o0 = {
  key: 0,
  class: "item-icon"
}, n0 = { class: "item-info" }, a0 = {
  key: 0,
  class: "item-title"
}, l0 = {
  key: 1,
  class: "item-subtitle"
}, i0 = {
  key: 0,
  class: "item-details"
}, r0 = {
  key: 1,
  class: "item-actions"
}, c0 = /* @__PURE__ */ me({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, n = F(() => o.status ? `status-${o.status}` : "");
    return (l, i) => (a(), c("div", {
      class: xe(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: i[0] || (i[0] = (r) => e.clickable && l.$emit("click"))
    }, [
      s("div", s0, [
        l.$slots.icon ? (a(), c("span", o0, [
          Ge(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        s("div", n0, [
          l.$slots.title ? (a(), c("div", a0, [
            Ge(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), c("div", l0, [
            Ge(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), c("div", i0, [
        Ge(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), c("div", r0, [
        Ge(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Et = /* @__PURE__ */ pe(c0, [["__scopeId", "data-v-cc435e0e"]]), u0 = { class: "loading-state" }, d0 = { class: "loading-message" }, f0 = /* @__PURE__ */ me({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, o) => (a(), c("div", u0, [
      o[0] || (o[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", d0, f(e.message), 1)
    ]));
  }
}), Is = /* @__PURE__ */ pe(f0, [["__scopeId", "data-v-ad8436c9"]]), m0 = { class: "error-state" }, v0 = { class: "error-message" }, p0 = /* @__PURE__ */ me({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, o) => (a(), c("div", m0, [
      o[2] || (o[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", v0, f(e.message), 1),
      e.retry ? (a(), M(ie, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => t.$emit("retry"))
      }, {
        default: g(() => [...o[1] || (o[1] = [
          b(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Es = /* @__PURE__ */ pe(p0, [["__scopeId", "data-v-5397be48"]]), g0 = /* @__PURE__ */ me({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getWorkflows: l } = at(), i = k([]), r = k(!1), u = k(null), d = k(""), m = k(!0), v = k(!1), h = k(!1), w = k(!1), p = k(null), _ = F(
      () => i.value.filter((U) => U.status === "broken")
    ), x = F(
      () => i.value.filter((U) => U.status === "new")
    ), $ = F(
      () => i.value.filter((U) => U.status === "modified")
    ), P = F(
      () => i.value.filter((U) => U.status === "synced")
    ), N = F(() => {
      if (!d.value.trim()) return i.value;
      const U = d.value.toLowerCase();
      return i.value.filter((z) => z.name.toLowerCase().includes(U));
    }), T = F(
      () => _.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), S = F(
      () => x.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), q = F(
      () => $.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), B = F(
      () => P.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), A = F(
      () => v.value ? B.value : B.value.slice(0, 5)
    );
    async function I(U = !1) {
      r.value = !0, u.value = null;
      try {
        i.value = await l(U);
      } catch (z) {
        u.value = z instanceof Error ? z.message : "Failed to load workflows";
      } finally {
        r.value = !1;
      }
    }
    t({ loadWorkflows: I });
    function E(U) {
      p.value = U, h.value = !0;
    }
    function O(U) {
      p.value = U, w.value = !0;
    }
    function re() {
      n("refresh");
    }
    async function Y() {
      w.value = !1, await I(!0);
    }
    async function H() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function te(U) {
      const z = [];
      return U.missing_nodes > 0 && z.push(`${U.missing_nodes} missing node${U.missing_nodes > 1 ? "s" : ""}`), U.missing_models > 0 && z.push(`${U.missing_models} missing model${U.missing_models > 1 ? "s" : ""}`), U.models_with_category_mismatch && U.models_with_category_mismatch > 0 && z.push(`${U.models_with_category_mismatch} model${U.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), U.pending_downloads && U.pending_downloads > 0 && z.push(`${U.pending_downloads} pending download${U.pending_downloads > 1 ? "s" : ""}`), z.length > 0 ? z.join(", ") : "Has issues";
    }
    function Z(U) {
      const z = U.sync_state === "new" ? "New" : U.sync_state === "modified" ? "Modified" : U.sync_state === "synced" ? "Synced" : U.sync_state;
      return U.has_path_sync_issues && U.models_needing_path_sync && U.models_needing_path_sync > 0 ? `${U.models_needing_path_sync} model path${U.models_needing_path_sync > 1 ? "s" : ""} need${U.models_needing_path_sync === 1 ? "s" : ""} sync` : z || "Unknown";
    }
    return Qe(I), (U, z) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, { title: "WORKFLOWS" })
        ]),
        search: g(() => [
          C(bo, {
            modelValue: d.value,
            "onUpdate:modelValue": z[0] || (z[0] = (R) => d.value = R),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          r.value ? (a(), M(Is, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (a(), M(Es, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            T.value.length ? (a(), M(ot, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge(T.value, (R) => (a(), M(Et, {
                  key: R.name,
                  status: "broken"
                }, {
                  icon: g(() => [...z[7] || (z[7] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(f(R.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(f(te(R)), 1)
                  ]),
                  actions: g(() => [
                    C(ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: (be) => O(R.name)
                    }, {
                      default: g(() => [...z[8] || (z[8] = [
                        b(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (be) => E(R.name)
                    }, {
                      default: g(() => [...z[9] || (z[9] = [
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
            S.value.length ? (a(), M(ot, {
              key: 1,
              title: "NEW",
              count: S.value.length
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge(S.value, (R) => (a(), M(Et, {
                  key: R.name,
                  status: R.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: g(() => [
                    b(f(R.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: g(() => [
                    b(f(R.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(f(Z(R)), 1)
                  ]),
                  actions: g(() => [
                    C(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (be) => E(R.name)
                    }, {
                      default: g(() => [...z[10] || (z[10] = [
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
            q.value.length ? (a(), M(ot, {
              key: 2,
              title: "MODIFIED",
              count: q.value.length
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge(q.value, (R) => (a(), M(Et, {
                  key: R.name,
                  status: R.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: g(() => [...z[11] || (z[11] = [
                    b("⚡", -1)
                  ])]),
                  title: g(() => [
                    b(f(R.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(f(Z(R)), 1)
                  ]),
                  actions: g(() => [
                    C(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (be) => E(R.name)
                    }, {
                      default: g(() => [...z[12] || (z[12] = [
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
            B.value.length ? (a(), M(ot, {
              key: 3,
              title: "SYNCED",
              count: B.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: z[2] || (z[2] = (R) => m.value = R)
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge(A.value, (R) => (a(), M(Et, {
                  key: R.name,
                  status: R.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: g(() => [
                    b(f(R.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: g(() => [
                    b(f(R.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(f(Z(R)), 1)
                  ]),
                  actions: g(() => [
                    C(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (be) => E(R.name)
                    }, {
                      default: g(() => [...z[13] || (z[13] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && B.value.length > 5 ? (a(), M(ie, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: z[1] || (z[1] = (R) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: g(() => [
                    b(" View all " + f(B.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            N.value.length ? y("", !0) : (a(), M(ts, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      h.value && p.value ? (a(), M(mp, {
        key: 0,
        "workflow-name": p.value,
        onClose: z[3] || (z[3] = (R) => h.value = !1),
        onResolve: z[4] || (z[4] = (R) => O(p.value)),
        onRefresh: z[5] || (z[5] = (R) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (a(), M(H1, {
        key: 1,
        "workflow-name": p.value,
        onClose: Y,
        onInstall: re,
        onRefresh: z[6] || (z[6] = (R) => n("refresh")),
        onRestart: H
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), h0 = /* @__PURE__ */ pe(g0, [["__scopeId", "data-v-fa3f076e"]]), y0 = /* @__PURE__ */ me({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (t, o) => (a(), c("div", {
      class: xe(["summary-bar", e.variant])
    }, [
      Ge(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), tn = /* @__PURE__ */ pe(y0, [["__scopeId", "data-v-ccb7816e"]]), w0 = {
  key: 0,
  class: "model-details"
}, b0 = { class: "detail-section" }, _0 = { class: "detail-row" }, k0 = { class: "detail-value mono" }, $0 = { class: "detail-row" }, C0 = { class: "detail-value mono" }, x0 = { class: "detail-row" }, S0 = { class: "detail-value mono" }, I0 = { class: "detail-row" }, E0 = { class: "detail-value" }, T0 = { class: "detail-row" }, P0 = { class: "detail-value" }, R0 = { class: "detail-row" }, M0 = { class: "detail-value" }, D0 = { class: "detail-section" }, L0 = { class: "section-header" }, O0 = {
  key: 0,
  class: "locations-list"
}, N0 = { class: "location-path mono" }, A0 = {
  key: 0,
  class: "location-modified"
}, U0 = ["onClick"], z0 = {
  key: 1,
  class: "empty-state"
}, F0 = { class: "detail-section" }, B0 = { class: "section-header" }, V0 = {
  key: 0,
  class: "sources-list"
}, W0 = { class: "source-type" }, G0 = ["href"], j0 = ["disabled", "onClick"], H0 = {
  key: 1,
  class: "empty-state"
}, K0 = { class: "add-source-form" }, q0 = ["disabled"], Y0 = {
  key: 2,
  class: "source-error"
}, J0 = {
  key: 3,
  class: "source-success"
}, X0 = /* @__PURE__ */ me({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: i, openFileLocation: r } = at(), u = k(null), d = k(!0), m = k(null), v = k(""), h = k(!1), w = k(null), p = k(null), _ = k(null), x = k(null);
    let $ = null;
    function P(I, E = "success", O = 2e3) {
      $ && clearTimeout($), x.value = { message: I, type: E }, $ = setTimeout(() => {
        x.value = null;
      }, O);
    }
    function N(I) {
      if (!I) return "Unknown";
      const E = 1024 * 1024 * 1024, O = 1024 * 1024;
      return I >= E ? `${(I / E).toFixed(1)} GB` : I >= O ? `${(I / O).toFixed(0)} MB` : `${(I / 1024).toFixed(0)} KB`;
    }
    function T(I) {
      navigator.clipboard.writeText(I), P("Copied to clipboard!");
    }
    async function S(I) {
      try {
        await r(I), P("Opening file location...");
      } catch {
        P("Failed to open location", "error");
      }
    }
    async function q() {
      if (!(!v.value.trim() || !u.value)) {
        h.value = !0, p.value = null, _.value = null;
        try {
          await l(u.value.hash, v.value.trim()), _.value = "Source added successfully!", v.value = "", await A();
        } catch (I) {
          p.value = I instanceof Error ? I.message : "Failed to add source";
        } finally {
          h.value = !1;
        }
      }
    }
    async function B(I) {
      if (u.value) {
        w.value = I, p.value = null, _.value = null;
        try {
          await i(u.value.hash, I), P("Source removed"), await A();
        } catch (E) {
          p.value = E instanceof Error ? E.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function A() {
      d.value = !0, m.value = null;
      try {
        u.value = await n(o.identifier);
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return Qe(A), (I, E) => {
      var O;
      return a(), c(j, null, [
        C(vt, {
          title: `Model Details: ${((O = u.value) == null ? void 0 : O.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: m.value,
          onClose: E[5] || (E[5] = (re) => I.$emit("close"))
        }, {
          body: g(() => {
            var re, Y, H, te;
            return [
              u.value ? (a(), c("div", w0, [
                s("section", b0, [
                  s("div", _0, [
                    E[6] || (E[6] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", k0, f(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), c("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[0] || (E[0] = (Z) => T(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", $0, [
                    E[7] || (E[7] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", C0, f(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), c("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[1] || (E[1] = (Z) => T(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", x0, [
                    E[8] || (E[8] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", S0, f(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), c("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[2] || (E[2] = (Z) => T(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", I0, [
                    E[9] || (E[9] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", E0, f(N(u.value.size)), 1)
                  ]),
                  s("div", T0, [
                    E[10] || (E[10] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", P0, f(u.value.category), 1)
                  ]),
                  s("div", R0, [
                    E[11] || (E[11] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", M0, f(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", D0, [
                  s("h4", L0, "Locations (" + f(((re = u.value.locations) == null ? void 0 : re.length) || 0) + ")", 1),
                  (Y = u.value.locations) != null && Y.length ? (a(), c("div", O0, [
                    (a(!0), c(j, null, ge(u.value.locations, (Z, U) => (a(), c("div", {
                      key: U,
                      class: "location-item"
                    }, [
                      s("span", N0, f(Z.path), 1),
                      Z.modified ? (a(), c("span", A0, "Modified: " + f(Z.modified), 1)) : y("", !0),
                      Z.path ? (a(), c("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (z) => S(Z.path)
                      }, " Open File Location ", 8, U0)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), c("div", z0, "No locations found"))
                ]),
                s("section", F0, [
                  s("h4", B0, "Download Sources (" + f(((H = u.value.sources) == null ? void 0 : H.length) || 0) + ")", 1),
                  (te = u.value.sources) != null && te.length ? (a(), c("div", V0, [
                    (a(!0), c(j, null, ge(u.value.sources, (Z, U) => (a(), c("div", {
                      key: U,
                      class: "source-item"
                    }, [
                      s("span", W0, f(Z.type) + ":", 1),
                      s("a", {
                        href: Z.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(Z.url), 9, G0),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: w.value === Z.url,
                        onClick: (z) => B(Z.url)
                      }, f(w.value === Z.url ? "..." : "×"), 9, j0)
                    ]))), 128))
                  ])) : (a(), c("div", H0, " No download sources configured ")),
                  s("div", K0, [
                    He(s("input", {
                      "onUpdate:modelValue": E[3] || (E[3] = (Z) => v.value = Z),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Nt, v.value]
                    ]),
                    s("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || h.value,
                      onClick: q
                    }, f(h.value ? "Adding..." : "Add Source"), 9, q0)
                  ]),
                  p.value ? (a(), c("p", Y0, f(p.value), 1)) : y("", !0),
                  _.value ? (a(), c("p", J0, f(_.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: g(() => [
            s("button", {
              class: "btn-secondary",
              onClick: E[4] || (E[4] = (re) => I.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (a(), M(ht, { to: "body" }, [
          x.value ? (a(), c("div", {
            key: 0,
            class: xe(["toast", x.value.type])
          }, f(x.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), qa = /* @__PURE__ */ pe(X0, [["__scopeId", "data-v-f15cbb56"]]), Q0 = /* @__PURE__ */ me({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const o = t, { getEnvironmentModels: n, getStatus: l } = at(), i = k([]), r = k([]), u = k("production"), d = k(!1), m = k(null), v = k(""), h = k(!1), w = k(null);
    function p() {
      h.value = !1, o("navigate", "model-index");
    }
    const _ = F(
      () => i.value.reduce((A, I) => A + (I.size || 0), 0)
    ), x = F(() => {
      if (!v.value.trim()) return i.value;
      const A = v.value.toLowerCase();
      return i.value.filter((I) => I.filename.toLowerCase().includes(A));
    }), $ = F(() => {
      if (!v.value.trim()) return r.value;
      const A = v.value.toLowerCase();
      return r.value.filter((I) => I.filename.toLowerCase().includes(A));
    }), P = F(() => {
      const A = {};
      for (const E of x.value) {
        const O = E.type || "other";
        A[O] || (A[O] = []), A[O].push(E);
      }
      const I = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(A).sort(([E], [O]) => {
        const re = I.indexOf(E), Y = I.indexOf(O);
        return re >= 0 && Y >= 0 ? re - Y : re >= 0 ? -1 : Y >= 0 ? 1 : E.localeCompare(O);
      }).map(([E, O]) => ({ type: E, models: O }));
    });
    function N(A) {
      if (!A) return "Unknown";
      const I = A / (1024 * 1024);
      return I >= 1024 ? `${(I / 1024).toFixed(1)} GB` : `${I.toFixed(0)} MB`;
    }
    function T(A) {
      w.value = A.hash || A.filename;
    }
    function S(A) {
      o("navigate", "model-index");
    }
    function q(A) {
      alert(`Download functionality not yet implemented for ${A}`);
    }
    async function B() {
      d.value = !0, m.value = null;
      try {
        const A = await n();
        i.value = A, r.value = [];
        const I = await l();
        u.value = I.environment || "production";
      } catch (A) {
        m.value = A instanceof Error ? A.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return Qe(B), (A, I) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (E) => h.value = !0)
          })
        ]),
        search: g(() => [
          C(bo, {
            modelValue: v.value,
            "onUpdate:modelValue": I[1] || (I[1] = (E) => v.value = E),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value ? (a(), M(Is, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (a(), M(Es, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            i.value.length ? (a(), M(tn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + f(i.value.length) + " models • " + f(N(_.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), c(j, null, ge(P.value, (E) => (a(), M(ot, {
              key: E.type,
              title: E.type.toUpperCase(),
              count: E.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge(E.models, (O) => (a(), M(Et, {
                  key: O.hash || O.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...I[4] || (I[4] = [
                    b("📦", -1)
                  ])]),
                  title: g(() => [
                    b(f(O.filename), 1)
                  ]),
                  subtitle: g(() => [
                    b(f(N(O.size)), 1)
                  ]),
                  details: g(() => [
                    C(ut, {
                      label: "Used by:",
                      value: (O.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    C(ut, {
                      label: "Path:",
                      value: O.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (re) => T(O)
                    }, {
                      default: g(() => [...I[5] || (I[5] = [
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
            $.value.length ? (a(), M(ot, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge($.value, (E) => (a(), M(Et, {
                  key: E.filename,
                  status: "broken"
                }, {
                  icon: g(() => [...I[6] || (I[6] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(f(E.filename), 1)
                  ]),
                  subtitle: g(() => [...I[7] || (I[7] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: g(() => {
                    var O;
                    return [
                      C(ut, {
                        label: "Required by:",
                        value: ((O = E.workflow_names) == null ? void 0 : O.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: g(() => [
                    C(ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: (O) => q(E.filename)
                    }, {
                      default: g(() => [...I[8] || (I[8] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (O) => S(E.filename)
                    }, {
                      default: g(() => [...I[9] || (I[9] = [
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
            !x.value.length && !$.value.length ? (a(), M(ts, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      C(ss, {
        show: h.value,
        title: "About Environment Models",
        onClose: I[2] || (I[2] = (E) => h.value = !1)
      }, {
        content: g(() => [
          s("p", null, [
            I[10] || (I[10] = b(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + f(u.value) + '"', 1),
            I[11] || (I[11] = b(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: g(() => [
          C(ie, {
            variant: "primary",
            onClick: p
          }, {
            default: g(() => [...I[12] || (I[12] = [
              b(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), M(qa, {
        key: 0,
        identifier: w.value,
        onClose: I[3] || (I[3] = (E) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Z0 = /* @__PURE__ */ pe(Q0, [["__scopeId", "data-v-cb4f12b3"]]), ew = {
  key: 0,
  class: "indexing-progress"
}, tw = { class: "progress-info" }, sw = { class: "progress-label" }, ow = { class: "progress-count" }, nw = { class: "progress-bar" }, aw = { class: "modal-content" }, lw = { class: "modal-header" }, iw = { class: "modal-body" }, rw = { class: "input-group" }, cw = { class: "current-path" }, uw = { class: "input-group" }, dw = { class: "modal-footer" }, fw = { class: "modal-content" }, mw = { class: "modal-header" }, vw = { class: "modal-body" }, pw = { class: "input-group" }, gw = { class: "input-group" }, hw = { class: "modal-footer" }, yw = /* @__PURE__ */ me({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: i
    } = at(), { addToQueue: r } = en(), u = t, d = k([]), m = k(!1), v = k(!1), h = k(null), w = k(""), p = k(!1), _ = k(null), x = k(!1), $ = k(null), P = k(""), N = k(!1), T = k(!1), S = k(""), q = k(""), B = k(null), A = F(
      () => d.value.reduce((z, R) => z + (R.size || 0), 0)
    ), I = F(() => {
      if (!w.value.trim()) return d.value;
      const z = w.value.toLowerCase();
      return d.value.filter((R) => {
        const be = R, ve = R.sha256 || be.sha256_hash || "";
        return R.filename.toLowerCase().includes(z) || ve.toLowerCase().includes(z);
      });
    }), E = F(() => {
      const z = {};
      for (const be of I.value) {
        const ve = be.type || "other";
        z[ve] || (z[ve] = []), z[ve].push(be);
      }
      const R = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(z).sort(([be], [ve]) => {
        const Ee = R.indexOf(be), De = R.indexOf(ve);
        return Ee >= 0 && De >= 0 ? Ee - De : Ee >= 0 ? -1 : De >= 0 ? 1 : be.localeCompare(ve);
      }).map(([be, ve]) => ({ type: be, models: ve }));
    });
    function O(z) {
      if (!z) return "Unknown";
      const R = 1024 * 1024 * 1024, be = 1024 * 1024;
      return z >= R ? `${(z / R).toFixed(1)} GB` : z >= be ? `${(z / be).toFixed(0)} MB` : `${(z / 1024).toFixed(0)} KB`;
    }
    function re(z) {
      _.value = z.hash || z.filename;
    }
    async function Y() {
      v.value = !0, h.value = null;
      try {
        const z = await n();
        await Z(), z.changes > 0 && console.log(`Scan complete: ${z.changes} changes detected`);
      } catch (z) {
        h.value = z instanceof Error ? z.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function H() {
      if (P.value.trim()) {
        N.value = !0, h.value = null;
        try {
          const z = await i(P.value.trim());
          $.value = z.path, x.value = !1, P.value = "", await Z(), console.log(`Directory changed: ${z.models_indexed} models indexed`), u("refresh");
        } catch (z) {
          h.value = z instanceof Error ? z.message : "Failed to change directory";
        } finally {
          N.value = !1;
        }
      }
    }
    function te() {
      if (!S.value.trim() || !q.value.trim()) return;
      const z = q.value.split("/").pop() || "model.safetensors";
      r([{
        workflow: "__manual__",
        filename: z,
        url: S.value.trim(),
        targetPath: q.value.trim()
      }]), S.value = "", q.value = "", T.value = !1;
    }
    async function Z() {
      m.value = !0, h.value = null;
      try {
        d.value = await o();
      } catch (z) {
        h.value = z instanceof Error ? z.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function U() {
      try {
        const z = await l();
        $.value = z.path;
      } catch {
      }
    }
    return Qe(() => {
      Z(), U();
    }), (z, R) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: R[2] || (R[2] = (be) => p.value = !0)
          }, {
            actions: g(() => [
              C(ie, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: Y
              }, {
                default: g(() => [
                  b(f(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: R[0] || (R[0] = (be) => x.value = !0)
              }, {
                default: g(() => [...R[15] || (R[15] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: R[1] || (R[1] = (be) => T.value = !0)
              }, {
                default: g(() => [...R[16] || (R[16] = [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    s("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  b(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          B.value ? (a(), c("div", ew, [
            s("div", tw, [
              s("span", sw, f(B.value.message), 1),
              s("span", ow, f(B.value.current) + "/" + f(B.value.total), 1)
            ]),
            s("div", nw, [
              s("div", {
                class: "progress-fill",
                style: Vt({ width: `${B.value.current / B.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          C(bo, {
            modelValue: w.value,
            "onUpdate:modelValue": R[3] || (R[3] = (be) => w.value = be),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value || B.value ? (a(), M(Is, {
            key: 0,
            message: B.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : h.value ? (a(), M(Es, {
            key: 1,
            message: h.value,
            retry: !0,
            onRetry: Z
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            d.value.length ? (a(), M(tn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + f(d.value.length) + " models • " + f(O(A.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), c(j, null, ge(E.value, (be) => (a(), M(ot, {
              key: be.type,
              title: be.type.toUpperCase(),
              count: be.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge(be.models, (ve) => (a(), M(Et, {
                  key: ve.sha256 || ve.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...R[17] || (R[17] = [
                    b("📦", -1)
                  ])]),
                  title: g(() => [
                    b(f(ve.filename), 1)
                  ]),
                  subtitle: g(() => [
                    b(f(O(ve.size)), 1)
                  ]),
                  details: g(() => [
                    C(ut, {
                      label: "Hash:",
                      value: ve.hash ? ve.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ee) => re(ve)
                    }, {
                      default: g(() => [...R[18] || (R[18] = [
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
            I.value.length ? y("", !0) : (a(), M(ts, {
              key: 1,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      C(ss, {
        show: p.value,
        title: "About Workspace Model Index",
        onClose: R[4] || (R[4] = (be) => p.value = !1)
      }, {
        content: g(() => [...R[19] || (R[19] = [
          s("p", null, [
            b(" Content-addressable model storage shared across "),
            s("strong", null, "all environments"),
            b(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      _.value ? (a(), M(qa, {
        key: 0,
        identifier: _.value,
        onClose: R[5] || (R[5] = (be) => _.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), M(ht, { to: "body" }, [
        x.value ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: R[9] || (R[9] = nt((be) => x.value = !1, ["self"]))
        }, [
          s("div", aw, [
            s("div", lw, [
              R[20] || (R[20] = s("h3", null, "Change Models Directory", -1)),
              s("button", {
                class: "modal-close",
                onClick: R[6] || (R[6] = (be) => x.value = !1)
              }, "✕")
            ]),
            s("div", iw, [
              s("div", rw, [
                R[21] || (R[21] = s("label", null, "Current Directory", -1)),
                s("code", cw, f($.value || "Not set"), 1)
              ]),
              s("div", uw, [
                R[22] || (R[22] = s("label", null, "New Directory Path", -1)),
                C(Xt, {
                  modelValue: P.value,
                  "onUpdate:modelValue": R[7] || (R[7] = (be) => P.value = be),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              R[23] || (R[23] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            s("div", dw, [
              C(Me, {
                variant: "secondary",
                onClick: R[8] || (R[8] = (be) => x.value = !1)
              }, {
                default: g(() => [...R[24] || (R[24] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Me, {
                variant: "primary",
                disabled: !P.value.trim() || N.value,
                loading: N.value,
                onClick: H
              }, {
                default: g(() => [
                  b(f(N.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      (a(), M(ht, { to: "body" }, [
        T.value ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: R[14] || (R[14] = nt((be) => T.value = !1, ["self"]))
        }, [
          s("div", fw, [
            s("div", mw, [
              R[25] || (R[25] = s("h3", null, "Download New Model", -1)),
              s("button", {
                class: "modal-close",
                onClick: R[10] || (R[10] = (be) => T.value = !1)
              }, "✕")
            ]),
            s("div", vw, [
              s("div", pw, [
                R[26] || (R[26] = s("label", null, "Download URL", -1)),
                C(Xt, {
                  modelValue: S.value,
                  "onUpdate:modelValue": R[11] || (R[11] = (be) => S.value = be),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              s("div", gw, [
                R[27] || (R[27] = s("label", null, "Target Path (relative to models directory)", -1)),
                C(Xt, {
                  modelValue: q.value,
                  "onUpdate:modelValue": R[12] || (R[12] = (be) => q.value = be),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              R[28] || (R[28] = s("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            s("div", hw, [
              C(Me, {
                variant: "secondary",
                onClick: R[13] || (R[13] = (be) => T.value = !1)
              }, {
                default: g(() => [...R[29] || (R[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Me, {
                variant: "primary",
                disabled: !S.value.trim() || !q.value.trim(),
                onClick: te
              }, {
                default: g(() => [...R[30] || (R[30] = [
                  b(" Queue Download ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ])) : y("", !0)
      ]))
    ], 64));
  }
}), ww = /* @__PURE__ */ pe(yw, [["__scopeId", "data-v-73b78d84"]]), bw = { class: "node-details" }, _w = { class: "status-row" }, kw = {
  key: 0,
  class: "detail-row"
}, $w = { class: "value" }, Cw = { class: "detail-row" }, xw = { class: "value" }, Sw = {
  key: 1,
  class: "detail-row"
}, Iw = { class: "value mono" }, Ew = {
  key: 2,
  class: "detail-row"
}, Tw = ["href"], Pw = {
  key: 3,
  class: "detail-row"
}, Rw = { class: "value mono small" }, Mw = { class: "detail-row" }, Dw = {
  key: 0,
  class: "value"
}, Lw = {
  key: 1,
  class: "workflow-list"
}, Ow = /* @__PURE__ */ me({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = F(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), i = F(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), r = F(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (a(), M(vt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (m) => n("close"))
    }, {
      body: g(() => [
        s("div", bw, [
          s("div", _w, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: xe(["status-badge", l.value])
            }, f(i.value), 3)
          ]),
          e.node.version ? (a(), c("div", kw, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", $w, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          s("div", Cw, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", xw, f(r.value), 1)
          ]),
          e.node.registry_id ? (a(), c("div", Sw, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", Iw, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), c("div", Ew, [
            d[7] || (d[7] = s("span", { class: "label" }, "Repository:", -1)),
            s("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              b(f(e.node.repository) + " ", 1),
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
            ], 8, Tw)
          ])) : y("", !0),
          e.node.download_url ? (a(), c("div", Pw, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", Rw, f(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", Mw, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), c("span", Dw, " Not used in any workflows ")) : (a(), c("div", Lw, [
              (a(!0), c(j, null, ge(e.node.used_in_workflows, (m) => (a(), c("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: g(() => [
        C(Me, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (m) => n("close"))
        }, {
          default: g(() => [...d[11] || (d[11] = [
            b(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Nw = /* @__PURE__ */ pe(Ow, [["__scopeId", "data-v-b342f626"]]), Aw = { class: "dialog-message" }, Uw = {
  key: 0,
  class: "dialog-details"
}, zw = {
  key: 1,
  class: "dialog-warning"
}, Fw = /* @__PURE__ */ me({
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
    return (t, o) => (a(), M(vt, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => t.$emit("cancel"))
    }, {
      body: g(() => [
        s("p", Aw, f(e.message), 1),
        e.details && e.details.length ? (a(), c("div", Uw, [
          (a(!0), c(j, null, ge(e.details, (n, l) => (a(), c("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), c("p", zw, [
          o[4] || (o[4] = s("span", { class: "warning-icon" }, "⚠", -1)),
          b(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: g(() => [
        C(Me, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => t.$emit("cancel"))
        }, {
          default: g(() => [
            b(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), M(Me, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => t.$emit("secondary"))
        }, {
          default: g(() => [
            b(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        C(Me, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
        }, {
          default: g(() => [
            b(f(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Ya = /* @__PURE__ */ pe(Fw, [["__scopeId", "data-v-3670b9f5"]]), Bw = { class: "mismatch-warning" }, Vw = { class: "version-mismatch" }, Ww = { class: "version-actual" }, Gw = { class: "version-expected" }, jw = { key: 0 }, Hw = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Kw = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, qw = /* @__PURE__ */ me({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getNodes: l, trackNodeAsDev: i, installNode: r, uninstallNode: u } = at(), d = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = k(!1), v = k(null), h = k(""), w = k(!1), p = k(null), _ = k(null), x = F(() => {
      if (!h.value.trim()) return d.value.nodes;
      const Y = h.value.toLowerCase();
      return d.value.nodes.filter(
        (H) => {
          var te, Z;
          return H.name.toLowerCase().includes(Y) || ((te = H.description) == null ? void 0 : te.toLowerCase().includes(Y)) || ((Z = H.repository) == null ? void 0 : Z.toLowerCase().includes(Y));
        }
      );
    }), $ = F(
      () => x.value.filter((Y) => Y.installed && Y.tracked)
    ), P = F(
      () => x.value.filter((Y) => !Y.installed && Y.tracked)
    ), N = F(
      () => x.value.filter((Y) => Y.installed && !Y.tracked)
    );
    function T(Y) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[Y] || Y;
    }
    const S = F(() => o.versionMismatches.length > 0);
    function q(Y) {
      return !Y.used_in_workflows || Y.used_in_workflows.length === 0 ? "Not used in any workflows" : Y.used_in_workflows.length === 1 ? Y.used_in_workflows[0] : `${Y.used_in_workflows.length} workflows`;
    }
    function B(Y) {
      p.value = Y;
    }
    function A() {
      n("open-node-manager");
    }
    function I(Y) {
      _.value = {
        title: "Track as Development Node",
        message: `Track "${Y}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const H = await i(Y);
            H.status === "success" ? (n("toast", `✓ Node "${Y}" tracked as development`, "success"), await re()) : n("toast", `Failed to track node: ${H.message || "Unknown error"}`, "error");
          } catch (H) {
            n("toast", `Error tracking node: ${H instanceof Error ? H.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function E(Y) {
      _.value = {
        title: "Remove Untracked Node",
        message: `Remove "${Y}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const H = await u(Y);
            H.status === "success" ? (n("toast", `✓ Node "${Y}" removed`, "success"), await re()) : n("toast", `Failed to remove node: ${H.message || "Unknown error"}`, "error");
          } catch (H) {
            n("toast", `Error removing node: ${H instanceof Error ? H.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function O(Y) {
      _.value = {
        title: "Install Missing Node",
        message: `Install "${Y}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const H = await r(Y);
            H.status === "success" ? (n("toast", `✓ Node "${Y}" installed`, "success"), await re()) : n("toast", `Failed to install node: ${H.message || "Unknown error"}`, "error");
          } catch (H) {
            n("toast", `Error installing node: ${H instanceof Error ? H.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    async function re() {
      m.value = !0, v.value = null;
      try {
        d.value = await l();
      } catch (Y) {
        v.value = Y instanceof Error ? Y.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return Qe(re), (Y, H) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: H[0] || (H[0] = (te) => w.value = !0)
          }, {
            actions: g(() => [
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: A
              }, {
                default: g(() => [...H[7] || (H[7] = [
                  b(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          C(bo, {
            modelValue: h.value,
            "onUpdate:modelValue": H[1] || (H[1] = (te) => h.value = te),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value ? (a(), M(Is, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (a(), M(Es, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: re
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            d.value.total_count ? (a(), M(tn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(f(d.value.installed_count) + " installed ", 1),
                d.value.missing_count ? (a(), c(j, { key: 0 }, [
                  b(" • " + f(d.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                d.value.untracked_count ? (a(), c(j, { key: 1 }, [
                  b(" • " + f(d.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            S.value ? (a(), M(ot, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                s("div", Bw, [
                  H[8] || (H[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), c(j, null, ge(e.versionMismatches, (te) => (a(), M(Et, {
                  key: te.name,
                  status: "warning"
                }, {
                  icon: g(() => [...H[9] || (H[9] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(f(te.name), 1)
                  ]),
                  subtitle: g(() => [
                    s("span", Vw, [
                      s("span", Ww, f(te.actual), 1),
                      H[10] || (H[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", Gw, f(te.expected), 1)
                    ])
                  ]),
                  actions: g(() => [
                    C(ie, {
                      variant: "warning",
                      size: "sm",
                      onClick: H[2] || (H[2] = (Z) => n("repair-environment"))
                    }, {
                      default: g(() => [...H[11] || (H[11] = [
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
            N.value.length ? (a(), M(ot, {
              key: 2,
              title: "UNTRACKED",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge(N.value, (te) => (a(), M(Et, {
                  key: te.name,
                  status: "warning"
                }, {
                  icon: g(() => [...H[12] || (H[12] = [
                    b("?", -1)
                  ])]),
                  title: g(() => [
                    b(f(te.name), 1)
                  ]),
                  subtitle: g(() => [...H[13] || (H[13] = [
                    s("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: g(() => [
                    C(ut, {
                      label: "Used by:",
                      value: q(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Z) => B(te)
                    }, {
                      default: g(() => [...H[14] || (H[14] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Z) => I(te.name)
                    }, {
                      default: g(() => [...H[15] || (H[15] = [
                        b(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ie, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Z) => E(te.name)
                    }, {
                      default: g(() => [...H[16] || (H[16] = [
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
            $.value.length ? (a(), M(ot, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge($.value, (te) => (a(), M(Et, {
                  key: te.name,
                  status: "synced"
                }, {
                  icon: g(() => [
                    b(f(te.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: g(() => [
                    b(f(te.name), 1)
                  ]),
                  subtitle: g(() => [
                    te.version ? (a(), c("span", jw, f(te.source === "development" ? "" : "v") + f(te.version), 1)) : (a(), c("span", Hw, "version unknown")),
                    s("span", Kw, " • " + f(T(te.source)), 1)
                  ]),
                  details: g(() => [
                    C(ut, {
                      label: "Used by:",
                      value: q(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Z) => B(te)
                    }, {
                      default: g(() => [...H[17] || (H[17] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: A
                    }, {
                      default: g(() => [...H[18] || (H[18] = [
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
            P.value.length ? (a(), M(ot, {
              key: 4,
              title: "MISSING",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge(P.value, (te) => (a(), M(Et, {
                  key: te.name,
                  status: "missing"
                }, {
                  icon: g(() => [...H[19] || (H[19] = [
                    b("!", -1)
                  ])]),
                  title: g(() => [
                    b(f(te.name), 1)
                  ]),
                  subtitle: g(() => [...H[20] || (H[20] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: g(() => [
                    C(ut, {
                      label: "Required by:",
                      value: q(te)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(ie, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Z) => B(te)
                    }, {
                      default: g(() => [...H[21] || (H[21] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(ie, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Z) => O(te.name)
                    }, {
                      default: g(() => [...H[22] || (H[22] = [
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
            !$.value.length && !P.value.length && !N.value.length ? (a(), M(ts, {
              key: 5,
              icon: "📭",
              message: h.value ? `No nodes match '${h.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      C(ss, {
        show: w.value,
        title: "About Custom Nodes",
        onClose: H[4] || (H[4] = (te) => w.value = !1)
      }, {
        content: g(() => [...H[23] || (H[23] = [
          s("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Installed:"),
            b(" Tracked nodes available in this environment"),
            s("br"),
            s("strong", null, "Missing:"),
            b(" Tracked nodes that need to be installed"),
            s("br"),
            s("strong", null, "Untracked:"),
            b(" Nodes on filesystem but not in manifest ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: g(() => [
          C(ie, {
            variant: "primary",
            onClick: H[3] || (H[3] = (te) => w.value = !1)
          }, {
            default: g(() => [...H[24] || (H[24] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), M(Nw, {
        key: 0,
        node: p.value,
        onClose: H[5] || (H[5] = (te) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      _.value ? (a(), M(Ya, {
        key: 1,
        title: _.value.title,
        message: _.value.message,
        warning: _.value.warning,
        "confirm-label": _.value.confirmLabel,
        destructive: _.value.destructive,
        onConfirm: _.value.onConfirm,
        onCancel: H[6] || (H[6] = (te) => _.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), Yw = /* @__PURE__ */ pe(qw, [["__scopeId", "data-v-1555a802"]]);
function wr(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const Jw = { class: "remote-url-display" }, Xw = ["title"], Qw = ["title"], Zw = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, eb = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, tb = /* @__PURE__ */ me({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const t = e, o = k(!1), n = F(() => {
      if (t.url.length <= t.maxLength)
        return t.url;
      const i = t.url.slice(0, Math.floor(t.maxLength * 0.6)), r = t.url.slice(-Math.floor(t.maxLength * 0.3));
      return `${i}...${r}`;
    });
    async function l() {
      try {
        await navigator.clipboard.writeText(t.url), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (i) {
        console.error("Failed to copy URL:", i);
      }
    }
    return (i, r) => (a(), c("div", Jw, [
      s("span", {
        class: "url-text",
        title: e.url
      }, f(n.value), 9, Xw),
      s("button", {
        class: xe(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), c("svg", eb, [...r[1] || (r[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), c("svg", Zw, [...r[0] || (r[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Qw)
    ]));
  }
}), sb = /* @__PURE__ */ pe(tb, [["__scopeId", "data-v-7768a58d"]]), ob = { class: "remote-title" }, nb = {
  key: 0,
  class: "default-badge"
}, ab = {
  key: 1,
  class: "sync-badge"
}, lb = {
  key: 0,
  class: "ahead"
}, ib = {
  key: 1,
  class: "behind"
}, rb = {
  key: 1,
  class: "synced"
}, cb = ["href"], ub = {
  key: 1,
  class: "remote-url-text"
}, db = /* @__PURE__ */ me({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const t = e, o = F(() => t.fetchingRemote === t.remote.name), n = F(() => t.remote.is_default), l = F(() => t.syncStatus && t.syncStatus.behind > 0), i = F(() => t.syncStatus && t.syncStatus.ahead > 0), r = F(() => t.remote.push_url !== t.remote.fetch_url), u = F(() => {
      const m = t.remote.fetch_url, v = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), d = F(() => t.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, v) => (a(), M(Et, {
      status: n.value ? "synced" : void 0
    }, eo({
      icon: g(() => [
        b(f(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: g(() => [
        s("div", ob, [
          s("span", null, f(e.remote.name), 1),
          n.value ? (a(), c("span", nb, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), c("span", ab, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), c(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), c("span", lb, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), c("span", ib, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), c("span", rb, "✓ synced"))
          ])) : y("", !0)
        ])
      ]),
      subtitle: g(() => [
        u.value ? (a(), c("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: v[0] || (v[0] = nt(() => {
          }, ["stop"]))
        }, f(d.value), 9, cb)) : (a(), c("span", ub, f(d.value), 1))
      ]),
      actions: g(() => [
        C(ie, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: v[1] || (v[1] = (h) => m.$emit("fetch", e.remote.name))
        }, {
          default: g(() => [...v[6] || (v[6] = [
            b(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        C(ie, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[2] || (v[2] = (h) => m.$emit("pull", e.remote.name))
        }, {
          default: g(() => [
            b(" Pull" + f(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        C(ie, {
          variant: i.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[3] || (v[3] = (h) => m.$emit("push", e.remote.name))
        }, {
          default: g(() => [
            b(" Push" + f(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        C(ie, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (h) => m.$emit("edit", e.remote.name))
        }, {
          default: g(() => [...v[7] || (v[7] = [
            b(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), M(ie, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[5] || (v[5] = (h) => m.$emit("remove", e.remote.name))
        }, {
          default: g(() => [...v[8] || (v[8] = [
            b(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      r.value ? {
        name: "details",
        fn: g(() => [
          e.remote.push_url !== e.remote.fetch_url ? (a(), M(ut, {
            key: 0,
            label: "Push URL:"
          }, {
            default: g(() => [
              C(sb, {
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
}), fb = /* @__PURE__ */ pe(db, [["__scopeId", "data-v-8310f3a8"]]), mb = ["for"], vb = {
  key: 0,
  class: "base-form-field-required"
}, pb = { class: "base-form-field-input" }, gb = {
  key: 1,
  class: "base-form-field-error"
}, hb = {
  key: 2,
  class: "base-form-field-hint"
}, yb = /* @__PURE__ */ me({
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
    const t = e, o = F(() => t.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (n, l) => (a(), c("div", {
      class: xe(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), c("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        b(f(e.label) + " ", 1),
        e.required ? (a(), c("span", vb, "*")) : y("", !0)
      ], 8, mb)) : y("", !0),
      s("div", pb, [
        Ge(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), c("span", gb, f(e.error), 1)) : e.hint ? (a(), c("span", hb, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), aa = /* @__PURE__ */ pe(yb, [["__scopeId", "data-v-9a1cf296"]]), wb = { class: "remote-form" }, bb = { class: "form-header" }, _b = { class: "form-body" }, kb = {
  key: 0,
  class: "form-error"
}, $b = { class: "form-actions" }, Cb = /* @__PURE__ */ me({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), i = k(!1), r = k(null);
    Ct(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = F(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
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
    return (m, v) => (a(), c("div", wb, [
      s("div", bb, [
        C(Lt, null, {
          default: g(() => [
            b(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", _b, [
        C(aa, {
          label: "Remote Name",
          required: ""
        }, {
          default: g(() => [
            C(Xt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (h) => l.value.name = h),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        C(aa, {
          label: "Fetch URL",
          required: ""
        }, {
          default: g(() => [
            C(Xt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (h) => l.value.fetchUrl = h),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        C(aa, { label: "Push URL (optional)" }, {
          default: g(() => [
            C(Xt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (h) => l.value.pushUrl = h),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        r.value ? (a(), c("div", kb, f(r.value), 1)) : y("", !0)
      ]),
      s("div", $b, [
        C(ie, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: i.value,
          onClick: d
        }, {
          default: g(() => [
            b(f(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        C(ie, {
          variant: "ghost",
          size: "md",
          onClick: v[3] || (v[3] = (h) => m.$emit("cancel"))
        }, {
          default: g(() => [...v[4] || (v[4] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), xb = /* @__PURE__ */ pe(Cb, [["__scopeId", "data-v-56021b18"]]), Sb = { class: "conflict-summary-box" }, Ib = { class: "summary-header" }, Eb = { class: "summary-text" }, Tb = { key: 0 }, Pb = {
  key: 1,
  class: "all-resolved"
}, Rb = { class: "summary-progress" }, Mb = { class: "progress-bar" }, Db = { class: "progress-text" }, Lb = /* @__PURE__ */ me({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const t = e, o = F(
      () => t.conflictCount > 0 ? t.resolvedCount / t.conflictCount * 100 : 0
    );
    return (n, l) => (a(), c("div", Sb, [
      s("div", Ib, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", Eb, [
          s("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), c("p", Tb, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (a(), c("p", Pb, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      s("div", Rb, [
        s("div", Mb, [
          s("div", {
            class: "progress-fill",
            style: Vt({ width: o.value + "%" })
          }, null, 4)
        ]),
        s("span", Db, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), Ob = /* @__PURE__ */ pe(Lb, [["__scopeId", "data-v-4e9e6cc9"]]), Nb = { class: "modal-header" }, Ab = { class: "modal-title" }, Ub = { class: "modal-body" }, zb = {
  key: 0,
  class: "error-box"
}, Fb = {
  key: 0,
  class: "error-hint"
}, Bb = {
  key: 1,
  class: "loading-state"
}, Vb = { class: "commit-summary" }, Wb = {
  key: 0,
  class: "changes-section"
}, Gb = {
  key: 0,
  class: "change-group",
  open: ""
}, jb = { class: "change-count" }, Hb = { class: "change-list" }, Kb = {
  key: 0,
  class: "conflict-badge"
}, qb = {
  key: 1,
  class: "change-group"
}, Yb = { class: "change-count" }, Jb = { class: "change-list" }, Xb = {
  key: 2,
  class: "change-group"
}, Qb = { class: "change-count" }, Zb = { class: "change-list" }, e_ = {
  key: 2,
  class: "strategy-section"
}, t_ = { class: "radio-group" }, s_ = { class: "radio-option" }, o_ = { class: "radio-option" }, n_ = { class: "radio-option" }, a_ = {
  key: 3,
  class: "up-to-date"
}, l_ = { class: "modal-actions" }, jl = "comfygit.pullModelStrategy", i_ = /* @__PURE__ */ me({
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
    const o = e, n = t, l = k(localStorage.getItem(jl) || "skip");
    Ct(l, ($) => {
      localStorage.setItem(jl, $);
    });
    const i = F(() => {
      var $;
      return (($ = o.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), r = F(() => {
      if (!o.preview) return 0;
      const $ = o.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), u = F(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = F(() => {
      var $;
      return r.value > 0 || u.value > 0 || ((($ = o.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), m = F(() => o.preview && wr(o.preview) ? o.preview : null), v = F(() => {
      var $;
      return (($ = m.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), h = F(() => {
      var $;
      return (($ = o.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), w = F(
      () => v.value > 0 && h.value === v.value
    ), p = F(() => !(!o.preview || o.preview.has_uncommitted_changes || m.value && !w.value));
    function _($) {
      if (!m.value) return !1;
      const P = $.replace(/\.json$/, "");
      return m.value.workflow_conflicts.some((N) => N.name === P);
    }
    function x($) {
      const P = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: $, resolutions: P });
    }
    return ($, P) => {
      var N, T;
      return a(), M(ht, { to: "body" }, [
        e.show ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: P[11] || (P[11] = (S) => $.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: P[10] || (P[10] = nt(() => {
            }, ["stop"]))
          }, [
            s("div", Nb, [
              s("h3", Ab, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: P[0] || (P[0] = (S) => $.$emit("close"))
              }, "✕")
            ]),
            s("div", Ub, [
              e.error ? (a(), c("div", zb, [
                P[13] || (P[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  P[12] || (P[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, f(e.error), 1),
                  i.value ? (a(), c("p", Fb, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), c("div", Bb, [...P[14] || (P[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (N = e.preview) != null && N.has_uncommitted_changes ? (a(), c(j, { key: 2 }, [
                P[15] || (P[15] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                P[16] || (P[16] = s("div", { class: "options-section" }, [
                  s("p", null, [
                    s("strong", null, "Options:")
                  ]),
                  s("ul", null, [
                    s("li", null, "Commit your changes first (recommended)"),
                    s("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (a(), c(j, { key: 3 }, [
                s("div", Vb, [
                  P[17] || (P[17] = s("span", { class: "icon" }, "📥", -1)),
                  b(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                d.value ? (a(), c("div", Wb, [
                  P[21] || (P[21] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  r.value > 0 ? (a(), c("details", Gb, [
                    s("summary", null, [
                      P[18] || (P[18] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", jb, f(r.value) + " changes", 1)
                    ]),
                    s("div", Hb, [
                      (a(!0), c(j, null, ge(e.preview.changes.workflows.added, (S) => (a(), c("div", {
                        key: "a-" + S,
                        class: "change-item add"
                      }, " + " + f(S), 1))), 128)),
                      (a(!0), c(j, null, ge(e.preview.changes.workflows.modified, (S) => (a(), c("div", {
                        key: "m-" + S,
                        class: "change-item modify"
                      }, [
                        b(" ~ " + f(S) + " ", 1),
                        _(S) ? (a(), c("span", Kb, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), c(j, null, ge(e.preview.changes.workflows.deleted, (S) => (a(), c("div", {
                        key: "d-" + S,
                        class: "change-item delete"
                      }, " - " + f(S), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (a(), c("details", qb, [
                    s("summary", null, [
                      P[19] || (P[19] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", Yb, f(u.value) + " to install", 1)
                    ]),
                    s("div", Jb, [
                      (a(!0), c(j, null, ge(e.preview.changes.nodes.to_install, (S) => (a(), c("div", {
                        key: S,
                        class: "change-item add"
                      }, " + " + f(S), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), c("details", Xb, [
                    s("summary", null, [
                      P[20] || (P[20] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", Qb, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", Zb, [
                      (a(!0), c(j, null, ge(e.preview.changes.models.referenced, (S) => (a(), c("div", {
                        key: S,
                        class: "change-item"
                      }, f(S), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (a(), M(Ob, {
                  key: 1,
                  "conflict-count": v.value,
                  "resolved-count": h.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), c("div", e_, [
                  P[26] || (P[26] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", t_, [
                    s("label", s_, [
                      He(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[1] || (P[1] = (S) => l.value = S),
                        value: "all"
                      }, null, 512), [
                        [qt, l.value]
                      ]),
                      P[22] || (P[22] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", o_, [
                      He(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[2] || (P[2] = (S) => l.value = S),
                        value: "required"
                      }, null, 512), [
                        [qt, l.value]
                      ]),
                      P[23] || (P[23] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", n_, [
                      He(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[3] || (P[3] = (S) => l.value = S),
                        value: "skip"
                      }, null, 512), [
                        [qt, l.value]
                      ]),
                      P[24] || (P[24] = s("span", null, "Skip model downloads", -1)),
                      P[25] || (P[25] = s("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  P[27] || (P[27] = s("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (a(), c("div", a_, [
                  P[28] || (P[28] = s("span", { class: "icon" }, "✓", -1)),
                  b(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            s("div", l_, [
              C(ie, {
                variant: "secondary",
                onClick: P[4] || (P[4] = (S) => $.$emit("close"))
              }, {
                default: g(() => [...P[29] || (P[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), c(j, { key: 0 }, [
                C(ie, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: P[5] || (P[5] = (S) => x(!1))
                }, {
                  default: g(() => [...P[30] || (P[30] = [
                    b(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                C(ie, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: P[6] || (P[6] = (S) => x(!0))
                }, {
                  default: g(() => [...P[31] || (P[31] = [
                    b(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (T = e.preview) != null && T.has_uncommitted_changes ? (a(), M(ie, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: P[7] || (P[7] = (S) => x(!0))
              }, {
                default: g(() => [...P[32] || (P[32] = [
                  b(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), c(j, { key: 2 }, [
                m.value && !w.value ? (a(), M(ie, {
                  key: 0,
                  variant: "primary",
                  onClick: P[8] || (P[8] = (S) => n("openConflictResolution"))
                }, {
                  default: g(() => [
                    b(" Resolve Conflicts (" + f(h.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), M(ie, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !p.value,
                  onClick: P[9] || (P[9] = (S) => x(!1))
                }, {
                  default: g(() => [...P[33] || (P[33] = [
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
}), r_ = /* @__PURE__ */ pe(i_, [["__scopeId", "data-v-300c7b2f"]]), c_ = { class: "modal-header" }, u_ = { class: "modal-title" }, d_ = { class: "modal-body" }, f_ = {
  key: 0,
  class: "loading-state"
}, m_ = {
  key: 1,
  class: "warning-box"
}, v_ = {
  key: 0,
  class: "commits-section"
}, p_ = { class: "commit-list" }, g_ = { class: "commit-hash" }, h_ = { class: "commit-message" }, y_ = { class: "commit-date" }, w_ = { class: "force-option" }, b_ = { class: "checkbox-option" }, __ = { class: "commit-summary" }, k_ = { key: 0 }, $_ = { key: 1 }, C_ = {
  key: 0,
  class: "info-box"
}, x_ = {
  key: 1,
  class: "commits-section"
}, S_ = { class: "commit-list" }, I_ = { class: "commit-hash" }, E_ = { class: "commit-message" }, T_ = { class: "commit-date" }, P_ = {
  key: 2,
  class: "up-to-date"
}, R_ = { class: "modal-actions" }, M_ = /* @__PURE__ */ me({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean }
  },
  emits: ["close", "push", "pull-first"],
  setup(e, { emit: t }) {
    const o = t, n = k(!1);
    function l(i) {
      o("push", { force: i });
    }
    return (i, r) => {
      var u, d, m;
      return a(), M(ht, { to: "body" }, [
        e.show ? (a(), c("div", {
          key: 0,
          class: "modal-overlay",
          onClick: r[7] || (r[7] = (v) => i.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: r[6] || (r[6] = nt(() => {
            }, ["stop"]))
          }, [
            s("div", c_, [
              s("h3", u_, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: r[0] || (r[0] = (v) => i.$emit("close"))
              }, "✕")
            ]),
            s("div", d_, [
              e.loading ? (a(), c("div", f_, [...r[8] || (r[8] = [
                s("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (a(), c("div", m_, [...r[9] || (r[9] = [
                s("span", { class: "warning-icon" }, "⚠", -1),
                s("div", null, [
                  s("strong", null, "UNCOMMITTED CHANGES"),
                  s("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (d = e.preview) != null && d.remote_has_new_commits ? (a(), c(j, { key: 2 }, [
                r[13] || (r[13] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("div", null, [
                    s("strong", null, "REMOTE HAS NEW COMMITS"),
                    s("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (a(), c("div", v_, [
                  r[10] || (r[10] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  s("div", p_, [
                    (a(!0), c(j, null, ge(e.preview.commits, (v) => (a(), c("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      s("span", g_, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      s("span", h_, f(v.message), 1),
                      s("span", y_, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                s("div", w_, [
                  s("label", b_, [
                    He(s("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": r[1] || (r[1] = (v) => n.value = v)
                    }, null, 512), [
                      [Yo, n.value]
                    ]),
                    r[11] || (r[11] = s("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  r[12] || (r[12] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (a(), c(j, { key: 3 }, [
                s("div", __, [
                  r[14] || (r[14] = s("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (a(), c("span", k_, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), c("span", $_, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (a(), c("div", C_, [...r[15] || (r[15] = [
                  s("span", { class: "info-icon" }, "ℹ", -1),
                  s("span", null, "This will create the remote branch for the first time.", -1)
                ])])) : y("", !0),
                e.preview.commits_ahead > 0 ? (a(), c("div", x_, [
                  r[16] || (r[16] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  s("div", S_, [
                    (a(!0), c(j, null, ge(e.preview.commits, (v) => (a(), c("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      s("span", I_, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      s("span", E_, f(v.message), 1),
                      s("span", T_, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (a(), c("div", P_, [
                  r[17] || (r[17] = s("span", { class: "icon" }, "✓", -1)),
                  b(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            s("div", R_, [
              C(ie, {
                variant: "secondary",
                onClick: r[2] || (r[2] = (v) => i.$emit("close"))
              }, {
                default: g(() => [...r[18] || (r[18] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (a(), c(j, { key: 0 }, [
                C(ie, {
                  variant: "secondary",
                  onClick: r[3] || (r[3] = (v) => i.$emit("pull-first"))
                }, {
                  default: g(() => [...r[19] || (r[19] = [
                    b(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                C(ie, {
                  variant: "destructive",
                  disabled: !n.value,
                  loading: e.pushing,
                  onClick: r[4] || (r[4] = (v) => l(!0))
                }, {
                  default: g(() => [...r[20] || (r[20] = [
                    b(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), M(ie, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: r[5] || (r[5] = (v) => l(!1))
              }, {
                default: g(() => [...r[21] || (r[21] = [
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
}), D_ = /* @__PURE__ */ pe(M_, [["__scopeId", "data-v-ae86b6a7"]]), L_ = { class: "resolution-choice-group" }, O_ = ["disabled"], N_ = ["disabled"], A_ = /* @__PURE__ */ me({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), c("div", L_, [
      s("button", {
        class: xe(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, O_),
      s("button", {
        class: xe(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, N_)
    ]));
  }
}), U_ = /* @__PURE__ */ pe(A_, [["__scopeId", "data-v-985715ed"]]), z_ = { class: "conflict-header" }, F_ = { class: "conflict-info" }, B_ = { class: "workflow-name" }, V_ = { class: "conflict-description" }, W_ = {
  key: 0,
  class: "resolved-badge"
}, G_ = { class: "resolved-text" }, j_ = { class: "conflict-hashes" }, H_ = { class: "hash-item" }, K_ = { class: "hash-item" }, q_ = { class: "conflict-actions" }, Y_ = /* @__PURE__ */ me({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(o.resolution);
    Ct(() => o.resolution, (d) => {
      l.value = d;
    }), Ct(l, (d) => {
      d && n("resolve", d);
    });
    const i = F(() => l.value !== null), r = F(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = F(() => {
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
      var v, h;
      return a(), c("div", {
        class: xe(["conflict-item", { resolved: i.value }])
      }, [
        s("div", z_, [
          m[2] || (m[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", F_, [
            s("code", B_, f(e.conflict.name) + ".json", 1),
            s("div", V_, f(r.value), 1)
          ]),
          i.value ? (a(), c("div", W_, [
            m[1] || (m[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", G_, f(u.value), 1)
          ])) : y("", !0)
        ]),
        s("div", j_, [
          s("span", H_, [
            m[3] || (m[3] = b("Your: ", -1)),
            s("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", K_, [
            m[4] || (m[4] = b("Theirs: ", -1)),
            s("code", null, f(((h = e.conflict.target_hash) == null ? void 0 : h.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", q_, [
          C(U_, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), J_ = /* @__PURE__ */ pe(Y_, [["__scopeId", "data-v-506d3bbf"]]), X_ = { class: "resolution-content" }, Q_ = {
  key: 0,
  class: "error-box"
}, Z_ = { class: "resolution-header" }, ek = { class: "header-stats" }, tk = { class: "stat" }, sk = { class: "stat-value" }, ok = { class: "stat resolved" }, nk = { class: "stat-value" }, ak = {
  key: 0,
  class: "stat pending"
}, lk = { class: "stat-value" }, ik = { class: "conflicts-list" }, rk = {
  key: 1,
  class: "all-resolved-message"
}, ck = /* @__PURE__ */ me({
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
    const o = e, n = t, l = F(() => o.resolutions.size), i = F(() => o.workflowConflicts.length - l.value), r = F(() => l.value === o.workflowConflicts.length), u = F(
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
    function h() {
      n("apply");
    }
    return (w, p) => (a(), M(vt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: g(() => [
        s("div", X_, [
          e.error ? (a(), c("div", Q_, [
            p[1] || (p[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              p[0] || (p[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          s("div", Z_, [
            s("div", ek, [
              s("div", tk, [
                s("span", sk, f(e.workflowConflicts.length), 1),
                p[2] || (p[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", ok, [
                s("span", nk, f(l.value), 1),
                p[3] || (p[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              i.value > 0 ? (a(), c("div", ak, [
                s("span", lk, f(i.value), 1),
                p[4] || (p[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            p[5] || (p[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", ik, [
            (a(!0), c(j, null, ge(e.workflowConflicts, (_) => (a(), M(J_, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (x) => m(_.name, x)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          r.value ? (a(), c("div", rk, [
            p[6] || (p[6] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", null, 'All conflicts resolved! Click "' + f(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        C(Me, {
          variant: "secondary",
          onClick: v
        }, {
          default: g(() => [...p[7] || (p[7] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = s("div", { class: "footer-spacer" }, null, -1)),
        C(Me, {
          variant: "primary",
          disabled: !r.value || e.validating,
          loading: e.validating,
          onClick: h
        }, {
          default: g(() => [
            b(f(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), uk = /* @__PURE__ */ pe(ck, [["__scopeId", "data-v-c58d150d"]]), dk = { class: "node-conflict-item" }, fk = { class: "node-header" }, mk = { class: "node-name" }, vk = { class: "node-id" }, pk = { class: "version-comparison" }, gk = { class: "version yours" }, hk = { class: "version theirs" }, yk = { class: "chosen-version" }, wk = { class: "chosen" }, bk = { class: "chosen-reason" }, _k = { class: "affected-workflows" }, kk = { class: "wf-source" }, $k = { class: "wf-version" }, Ck = /* @__PURE__ */ me({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, o) => (a(), c("div", dk, [
      s("div", fk, [
        s("code", mk, f(e.conflict.node_name), 1),
        s("span", vk, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      s("div", pk, [
        s("div", gk, [
          o[0] || (o[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", hk, [
          o[1] || (o[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      s("div", yk, [
        o[3] || (o[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", wk, f(e.conflict.chosen_version), 1),
        s("span", bk, f(e.conflict.chosen_reason), 1)
      ]),
      s("details", _k, [
        s("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (a(!0), c(j, null, ge(e.conflict.affected_workflows, (n) => (a(), c("li", {
            key: n.name
          }, [
            s("code", null, f(n.name), 1),
            s("span", kk, "(" + f(n.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", $k, "needs v" + f(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), xk = /* @__PURE__ */ pe(Ck, [["__scopeId", "data-v-8b626725"]]), Sk = { class: "validation-content" }, Ik = {
  key: 0,
  class: "compatible-message"
}, Ek = { class: "conflicts-list" }, Tk = {
  key: 2,
  class: "warnings-section"
}, Pk = /* @__PURE__ */ me({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = F(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (i, r) => (a(), M(vt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: r[3] || (r[3] = (u) => n("cancel"))
    }, {
      body: g(() => [
        s("div", Sk, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), c("div", Ik, [
            r[5] || (r[5] = s("span", { class: "icon" }, "✓", -1)),
            s("div", null, [
              r[4] || (r[4] = s("strong", null, "All clear!", -1)),
              s("p", null, "Your workflow choices are compatible. Ready to " + f(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (a(), c(j, { key: 1 }, [
            r[6] || (r[6] = s("div", { class: "warning-header" }, [
              s("span", { class: "icon" }, "⚠"),
              s("div", null, [
                s("strong", null, "Node Version Differences"),
                s("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            s("div", Ek, [
              (a(!0), c(j, null, ge(e.validation.node_conflicts, (u) => (a(), M(xk, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            r[7] || (r[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), c("div", Tk, [
            r[8] || (r[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (a(!0), c(j, null, ge(e.validation.warnings, (u, d) => (a(), c("li", { key: d }, f(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        C(Me, {
          variant: "secondary",
          onClick: r[0] || (r[0] = (u) => n("cancel"))
        }, {
          default: g(() => [...r[9] || (r[9] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        r[11] || (r[11] = s("div", { class: "footer-spacer" }, null, -1)),
        C(Me, {
          variant: "secondary",
          onClick: r[1] || (r[1] = (u) => n("goBack"))
        }, {
          default: g(() => [...r[10] || (r[10] = [
            b(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        C(Me, {
          variant: "primary",
          loading: e.executing,
          onClick: r[2] || (r[2] = (u) => n("proceed"))
        }, {
          default: g(() => [
            b(f(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), Rk = /* @__PURE__ */ pe(Pk, [["__scopeId", "data-v-fefd26ed"]]), Mk = { key: 0 }, Dk = /* @__PURE__ */ me({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(e, { emit: t }) {
    const o = t, {
      getRemotes: n,
      addRemote: l,
      removeRemote: i,
      updateRemoteUrl: r,
      fetchRemote: u,
      getRemoteSyncStatus: d,
      getPullPreview: m,
      pullFromRemote: v,
      getPushPreview: h,
      pushToRemote: w,
      validateMerge: p
    } = at(), _ = k([]), x = k(null), $ = k({}), P = k(!1), N = k(null), T = k(""), S = k(!1), q = k(null), B = k(!1), A = k("add"), I = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), E = F(() => {
      if (!T.value.trim()) return _.value;
      const W = T.value.toLowerCase();
      return _.value.filter(
        (ce) => ce.name.toLowerCase().includes(W) || ce.fetch_url.toLowerCase().includes(W) || ce.push_url.toLowerCase().includes(W)
      );
    });
    async function O() {
      P.value = !0, N.value = null;
      try {
        const W = await n();
        _.value = W.remotes, x.value = W.current_branch_tracking || null, await Promise.all(
          W.remotes.map(async (ce) => {
            const Te = await d(ce.name);
            Te && ($.value[ce.name] = Te);
          })
        );
      } catch (W) {
        N.value = W instanceof Error ? W.message : "Failed to load remotes";
      } finally {
        P.value = !1;
      }
    }
    function re() {
      A.value = "add", I.value = { name: "", fetchUrl: "", pushUrl: "" }, B.value = !0;
    }
    function Y(W) {
      const ce = _.value.find((Te) => Te.name === W);
      ce && (A.value = "edit", I.value = {
        name: ce.name,
        fetchUrl: ce.fetch_url,
        pushUrl: ce.push_url
      }, B.value = !0);
    }
    async function H(W) {
      try {
        A.value === "add" ? await l(W.name, W.fetchUrl) : await r(W.name, W.fetchUrl, W.pushUrl || void 0), B.value = !1, await O();
      } catch (ce) {
        N.value = ce instanceof Error ? ce.message : "Operation failed";
      }
    }
    function te() {
      B.value = !1, I.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Z(W) {
      q.value = W;
      try {
        await u(W);
        const ce = await d(W);
        ce && ($.value[W] = ce), o("toast", `✓ Fetched from ${W}`, "success");
      } catch (ce) {
        o("toast", ce instanceof Error ? ce.message : "Fetch failed", "error");
      } finally {
        q.value = null;
      }
    }
    async function U(W) {
      if (confirm(`Remove remote "${W}"?`))
        try {
          await i(W), await O();
        } catch (ce) {
          N.value = ce instanceof Error ? ce.message : "Failed to remove remote";
        }
    }
    function z() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const R = k("idle"), be = F(() => R.value === "pull_preview"), ve = F(
      () => R.value === "resolving" || R.value === "validating"
    ), Ee = F(
      () => R.value === "validation_review" || R.value === "executing"
    ), De = k(!1), je = k(null), Je = k(!1), _e = k(null), Se = k(!1), Ve = k(null), ye = k(null), le = k(/* @__PURE__ */ new Map()), Fe = k(null), Ie = k(null), L = F(() => Ve.value && wr(Ve.value) ? Ve.value : null);
    async function V(W) {
      _e.value = W, R.value = "pull_preview", Se.value = !0, Ve.value = null, ye.value = null;
      try {
        Ve.value = await m(W);
      } catch (ce) {
        ye.value = ce instanceof Error ? ce.message : "Failed to load pull preview";
      } finally {
        Se.value = !1;
      }
    }
    function oe() {
      R.value = "idle", Ve.value = null, ye.value = null, _e.value = null;
    }
    async function ae(W) {
      if (!_e.value) return;
      R.value = "executing", ye.value = null;
      const ce = _e.value;
      try {
        const Te = await v(ce, W);
        if (Te.rolled_back) {
          ye.value = `Pull failed and was rolled back: ${Te.error || "Unknown error"}`, R.value = "pull_preview";
          return;
        }
        Ce(), R.value = "idle", o("toast", `✓ Pulled from ${ce}`, "success"), await O();
      } catch (Te) {
        ye.value = Te instanceof Error ? Te.message : "Pull failed", R.value = "pull_preview";
      }
    }
    function de() {
      L.value && (R.value = "resolving", Ie.value = null);
    }
    function fe(W, ce) {
      le.value.set(W, { name: W, resolution: ce });
    }
    function ke() {
      R.value = "pull_preview";
    }
    async function $e() {
      R.value = "validating", Ie.value = null;
      try {
        const W = Array.from(le.value.values());
        Fe.value = await p(_e.value, W), R.value = "validation_review";
      } catch (W) {
        Ie.value = W instanceof Error ? W.message : "Validation failed", R.value = "resolving";
      }
    }
    async function ne() {
      R.value = "executing";
      const W = _e.value;
      try {
        const ce = Array.from(le.value.values()), Te = await v(W, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: ce
        });
        if (Te.rolled_back) {
          ye.value = `Pull failed and was rolled back: ${Te.error || "Unknown error"}`, R.value = "pull_preview";
          return;
        }
        Ce(), R.value = "idle", o("toast", `✓ Pulled from ${W}`, "success"), await O();
      } catch (ce) {
        ye.value = ce instanceof Error ? ce.message : "Pull failed", R.value = "validation_review";
      }
    }
    function ue() {
      R.value = "resolving";
    }
    function Re() {
      Ce(), R.value = "idle";
    }
    function Ce() {
      le.value.clear(), Fe.value = null, Ie.value = null, ye.value = null, Ve.value = null, _e.value = null;
    }
    async function ee(W) {
      _e.value = W, De.value = !0, Se.value = !0, je.value = null;
      try {
        je.value = await h(W);
      } catch (ce) {
        N.value = ce instanceof Error ? ce.message : "Failed to load push preview";
      } finally {
        Se.value = !1;
      }
    }
    function K() {
      De.value = !1, je.value = null, _e.value = null;
    }
    async function X(W) {
      if (!_e.value) return;
      Je.value = !0;
      const ce = _e.value;
      try {
        await w(ce, W), K(), o("toast", `✓ Pushed to ${ce}`, "success"), await O();
      } catch (Te) {
        o("toast", Te instanceof Error ? Te.message : "Push failed", "error");
      } finally {
        Je.value = !1;
      }
    }
    function D() {
      const W = _e.value;
      K(), W && V(W);
    }
    return Qe(O), (W, ce) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: ce[0] || (ce[0] = (Te) => S.value = !0)
          }, {
            actions: g(() => [
              B.value ? y("", !0) : (a(), M(ie, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: re
              }, {
                default: g(() => [...ce[3] || (ce[3] = [
                  b(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          B.value ? y("", !0) : (a(), M(bo, {
            key: 0,
            modelValue: T.value,
            "onUpdate:modelValue": ce[1] || (ce[1] = (Te) => T.value = Te),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: g(() => [
          P.value ? (a(), M(Is, {
            key: 0,
            message: "Loading remotes..."
          })) : N.value ? (a(), M(Es, {
            key: 1,
            message: N.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            B.value ? (a(), M(xb, {
              key: 0,
              mode: A.value,
              "remote-name": I.value.name,
              "fetch-url": I.value.fetchUrl,
              "push-url": I.value.pushUrl,
              onSubmit: H,
              onCancel: te
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !B.value ? (a(), M(tn, {
              key: 1,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (a(), c("span", Mk, " • Tracking: " + f(x.value.remote) + "/" + f(x.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            E.value.length && !B.value ? (a(), M(ot, {
              key: 2,
              title: "REMOTES",
              count: E.value.length
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge(E.value, (Te) => (a(), M(fb, {
                  key: Te.name,
                  remote: Te,
                  "sync-status": $.value[Te.name],
                  "fetching-remote": q.value,
                  onFetch: Z,
                  onEdit: Y,
                  onRemove: U,
                  onPull: V,
                  onPush: ee
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !E.value.length && !B.value ? (a(), M(ts, {
              key: 3,
              icon: "🌐",
              message: T.value ? `No remotes match '${T.value}'` : "No remotes configured."
            }, {
              actions: g(() => [
                C(ie, {
                  variant: "primary",
                  onClick: re
                }, {
                  default: g(() => [...ce[4] || (ce[4] = [
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
      C(ss, {
        show: S.value,
        title: "About Git Remotes",
        onClose: ce[2] || (ce[2] = (Te) => S.value = !1)
      }, {
        content: g(() => [...ce[5] || (ce[5] = [
          s("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          s("p", null, [
            b(" The "),
            s("strong", null, '"origin"'),
            b(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: g(() => [
          C(ie, {
            variant: "link",
            onClick: z
          }, {
            default: g(() => [...ce[6] || (ce[6] = [
              b(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      C(r_, {
        show: be.value,
        "remote-name": _e.value || "",
        preview: Ve.value,
        loading: Se.value,
        pulling: R.value === "executing",
        error: ye.value,
        "conflict-resolutions": le.value,
        onClose: oe,
        onPull: ae,
        onOpenConflictResolution: de
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      C(D_, {
        show: De.value,
        "remote-name": _e.value || "",
        preview: je.value,
        loading: Se.value,
        pushing: Je.value,
        onClose: K,
        onPush: X,
        onPullFirst: D
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ve.value && L.value ? (a(), M(uk, {
        key: 0,
        "workflow-conflicts": L.value.workflow_conflicts,
        resolutions: le.value,
        "operation-type": "pull",
        validating: R.value === "validating",
        error: Ie.value,
        onClose: ke,
        onResolve: fe,
        onApply: $e
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      Ee.value && Fe.value ? (a(), M(Rk, {
        key: 1,
        validation: Fe.value,
        "operation-type": "pull",
        executing: R.value === "executing",
        onProceed: ne,
        onGoBack: ue,
        onCancel: Re
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), Lk = /* @__PURE__ */ pe(Dk, [["__scopeId", "data-v-9ae3b76d"]]), Ok = { class: "setting-info" }, Nk = { class: "setting-label" }, Ak = {
  key: 0,
  class: "required-marker"
}, Uk = {
  key: 0,
  class: "setting-description"
}, zk = { class: "setting-control" }, Fk = /* @__PURE__ */ me({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (a(), c("div", {
      class: xe(["setting-row", { disabled: e.disabled }])
    }, [
      s("div", Ok, [
        s("div", Nk, [
          b(f(e.label) + " ", 1),
          e.required ? (a(), c("span", Ak, "*")) : y("", !0)
        ]),
        e.description ? (a(), c("div", Uk, f(e.description), 1)) : y("", !0)
      ]),
      s("div", zk, [
        Ge(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), la = /* @__PURE__ */ pe(Fk, [["__scopeId", "data-v-cb5d236c"]]), Bk = { class: "toggle" }, Vk = ["checked", "disabled"], Wk = /* @__PURE__ */ me({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), c("label", Bk, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, Vk),
      o[1] || (o[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Gk = /* @__PURE__ */ pe(Wk, [["__scopeId", "data-v-71c0f550"]]), jk = { class: "workspace-settings-content" }, Hk = { class: "settings-section" }, Kk = { class: "path-setting" }, qk = { class: "path-value" }, Yk = { class: "path-setting" }, Jk = { class: "path-value" }, Xk = { class: "settings-section" }, Qk = { class: "settings-section" }, Zk = { class: "settings-section" }, e2 = /* @__PURE__ */ me({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: o }) {
    const n = e, l = o, { getConfig: i, updateConfig: r } = at(), u = k(!1), d = k(null), m = k(null), v = k(null), h = k(null), w = k(""), p = k(""), _ = k(!1);
    function x(B) {
      return B.join(" ");
    }
    function $(B) {
      return B.trim() ? B.trim().split(/\s+/) : [];
    }
    const P = F(() => {
      if (!h.value) return !1;
      const B = w.value !== (h.value.civitai_api_key || ""), A = p.value !== x(h.value.comfyui_extra_args || []);
      return B || A;
    });
    async function N() {
      u.value = !0, d.value = null;
      try {
        v.value = await i(n.workspacePath || void 0), h.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = x(v.value.comfyui_extra_args || []);
        const B = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        _.value = B === "true";
      } catch (B) {
        d.value = B instanceof Error ? B.message : "Failed to load settings";
      } finally {
        u.value = !1;
      }
    }
    async function T() {
      var B, A;
      m.value = null;
      try {
        const I = {};
        w.value !== (((B = h.value) == null ? void 0 : B.civitai_api_key) || "") && (I.civitai_api_key = w.value || null), p.value !== x(((A = h.value) == null ? void 0 : A.comfyui_extra_args) || []) && (I.comfyui_extra_args = $(p.value)), await r(I, n.workspacePath || void 0), await N(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (I) {
        const E = I instanceof Error ? I.message : "Failed to save settings";
        m.value = { type: "error", message: E }, l("error", E);
      }
    }
    function S() {
      h.value && (w.value = h.value.civitai_api_key || "", p.value = x(h.value.comfyui_extra_args || []), m.value = null);
    }
    function q(B) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(B)), console.log("[ComfyGit] Auto-refresh setting saved:", B);
    }
    return t({
      saveSettings: T,
      resetSettings: S,
      hasChanges: P,
      loadSettings: N
    }), Qe(N), (B, A) => (a(), c("div", jk, [
      u.value ? (a(), M(Is, {
        key: 0,
        message: "Loading workspace settings..."
      })) : d.value ? (a(), M(Es, {
        key: 1,
        message: d.value,
        retry: !0,
        onRetry: N
      }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
        C(ot, { title: "WORKSPACE PATHS" }, {
          default: g(() => {
            var I, E;
            return [
              s("div", Hk, [
                s("div", Kk, [
                  A[3] || (A[3] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  A[4] || (A[4] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", qk, f(((I = v.value) == null ? void 0 : I.workspace_path) || "Loading..."), 1)
                ]),
                s("div", Yk, [
                  A[5] || (A[5] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  A[6] || (A[6] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", Jk, f(((E = v.value) == null ? void 0 : E.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        C(ot, { title: "API CREDENTIALS" }, {
          default: g(() => [
            s("div", Xk, [
              C(la, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: g(() => [
                  C(En, {
                    modelValue: w.value,
                    "onUpdate:modelValue": A[0] || (A[0] = (I) => w.value = I),
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
        C(ot, { title: "COMFYUI SETTINGS" }, {
          default: g(() => [
            s("div", Qk, [
              C(la, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: g(() => [
                  C(En, {
                    modelValue: p.value,
                    "onUpdate:modelValue": A[1] || (A[1] = (I) => p.value = I),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              A[7] || (A[7] = s("div", { class: "setting-hint" }, [
                b(" Common flags: "),
                s("code", null, "--lowvram"),
                b(", "),
                s("code", null, "--highvram"),
                b(", "),
                s("code", null, "--listen 0.0.0.0"),
                b(", "),
                s("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        C(ot, { title: "UI SETTINGS" }, {
          default: g(() => [
            s("div", Zk, [
              C(la, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: g(() => [
                  C(Gk, {
                    modelValue: _.value,
                    "onUpdate:modelValue": [
                      A[2] || (A[2] = (I) => _.value = I),
                      q
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        m.value ? (a(), M(tn, {
          key: 0,
          variant: (m.value.type === "success", "compact")
        }, {
          default: g(() => [
            s("span", {
              style: Vt({ color: m.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, f(m.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), br = /* @__PURE__ */ pe(e2, [["__scopeId", "data-v-9f44552d"]]), t2 = /* @__PURE__ */ me({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const t = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), M(Tt, null, {
      header: g(() => [
        C(Pt, { title: "WORKSPACE SETTINGS" }, {
          actions: g(() => {
            var i, r;
            return [
              C(ie, {
                variant: "primary",
                size: "sm",
                disabled: !((i = t.value) != null && i.hasChanges),
                onClick: l[0] || (l[0] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: g(() => [...l[2] || (l[2] = [
                  b(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (r = t.value) != null && r.hasChanges ? (a(), M(ie, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: g(() => [...l[3] || (l[3] = [
                  b(" Reset ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: g(() => [
        C(br, {
          ref_key: "contentRef",
          ref: t,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), s2 = { class: "base-tabs" }, o2 = ["disabled", "onClick"], n2 = {
  key: 0,
  class: "base-tabs__badge"
}, a2 = /* @__PURE__ */ me({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    function l(i) {
      var r;
      (r = o.tabs.find((u) => u.id === i)) != null && r.disabled || n("update:modelValue", i);
    }
    return (i, r) => (a(), c("div", s2, [
      (a(!0), c(j, null, ge(e.tabs, (u) => (a(), c("button", {
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
        b(f(u.label) + " ", 1),
        u.badge ? (a(), c("span", n2, f(u.badge), 1)) : y("", !0)
      ], 10, o2))), 128))
    ]));
  }
}), _r = /* @__PURE__ */ pe(a2, [["__scopeId", "data-v-ad5e6cad"]]), l2 = { class: "log-viewer-wrapper" }, i2 = ["disabled", "title"], r2 = /* @__PURE__ */ me({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const t = e, o = k(null), n = k("idle"), l = F(() => t.logs.map((m) => ({
      text: t.rawFormat || !m.timestamp ? m.message : `${m.timestamp} - ${m.name} - ${m.level} - ${m.func}:${m.line} - ${m.message}`,
      level: m.level
    })));
    async function i() {
      var v;
      await Qo();
      const m = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      m && (m.scrollTop = m.scrollHeight);
    }
    Qe(i), Ct(() => t.logs, i);
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
    return (m, v) => (a(), c("div", l2, [
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
          onClick: r,
          disabled: n.value !== "idle",
          title: n.value === "copied" ? "Copied!" : "Copy all logs"
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, i2),
        (a(!0), c(j, null, ge(l.value, (h, w) => (a(), c("div", {
          key: w,
          class: xe(`log-line log-level-${h.level.toLowerCase()}`)
        }, f(h.text), 3))), 128))
      ], 544)
    ]));
  }
}), kr = /* @__PURE__ */ pe(r2, [["__scopeId", "data-v-c0cc6d21"]]), c2 = /* @__PURE__ */ me({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: t,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: i
    } = at(), r = k("workspace"), u = k([]), d = k(!1), m = k(null), v = k(!1), h = k(null), w = k(null), p = k(!1), _ = F(() => r.value === "workspace" ? h.value : w.value);
    async function x() {
      d.value = !0, m.value = null;
      try {
        r.value === "workspace" ? u.value = await t(void 0, 500) : u.value = await n(void 0, 500);
      } catch (N) {
        m.value = N instanceof Error ? N.message : `Failed to load ${r.value} logs`;
      } finally {
        d.value = !1;
      }
    }
    async function $() {
      try {
        const [N, T] = await Promise.all([
          o(),
          l()
        ]);
        N.exists && (h.value = N.path), T.exists && (w.value = T.path);
      } catch {
      }
    }
    async function P() {
      if (_.value) {
        p.value = !0;
        try {
          await i(_.value);
        } catch (N) {
          console.error("Failed to open log file:", N);
        } finally {
          p.value = !1;
        }
      }
    }
    return Ct(r, () => {
      x();
    }), Qe(() => {
      x(), $();
    }), (N, T) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (S) => v.value = !0)
          }, {
            actions: g(() => [
              C(ie, {
                variant: "secondary",
                size: "sm",
                onClick: P,
                disabled: !_.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: g(() => [
                  b(f(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(ie, {
                variant: "secondary",
                size: "sm",
                onClick: x,
                disabled: d.value
              }, {
                default: g(() => [
                  b(f(d.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          C(_r, {
            modelValue: r.value,
            "onUpdate:modelValue": T[1] || (T[1] = (S) => r.value = S),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          d.value ? (a(), M(Is, {
            key: 0,
            message: `Loading ${r.value} logs...`
          }, null, 8, ["message"])) : m.value ? (a(), M(Es, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            u.value.length === 0 ? (a(), M(ts, {
              key: 0,
              icon: "📝",
              message: `No ${r.value} logs available`
            }, null, 8, ["message"])) : (a(), M(kr, {
              key: 1,
              logs: u.value,
              "raw-format": r.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      C(ss, {
        show: v.value,
        title: "About Logs",
        onClose: T[3] || (T[3] = (S) => v.value = !1)
      }, {
        content: g(() => [...T[4] || (T[4] = [
          s("p", null, [
            s("strong", null, "Workspace Logs:"),
            b(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Orchestrator Logs:"),
            b(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            b(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            b(" Potential issues or deprecated features"),
            s("br"),
            s("strong", null, "INFO:"),
            b(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            b(" Detailed debugging information ")
          ], -1)
        ])]),
        actions: g(() => [
          C(ie, {
            variant: "primary",
            onClick: T[2] || (T[2] = (S) => v.value = !1)
          }, {
            default: g(() => [...T[5] || (T[5] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), u2 = /* @__PURE__ */ me({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: t, getStatus: o, getEnvironmentLogPath: n, openFile: l } = at(), i = k([]), r = k(!1), u = k(null), d = k(!1), m = k("production"), v = k(null), h = k(!1);
    async function w() {
      r.value = !0, u.value = null;
      try {
        i.value = await t(void 0, 500);
        try {
          const x = await o();
          m.value = x.environment || "production";
        } catch {
        }
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to load environment logs";
      } finally {
        r.value = !1;
      }
    }
    async function p() {
      try {
        const x = await n();
        x.exists && (v.value = x.path);
      } catch {
      }
    }
    async function _() {
      if (v.value) {
        h.value = !0;
        try {
          await l(v.value);
        } catch (x) {
          console.error("Failed to open log file:", x);
        } finally {
          h.value = !1;
        }
      }
    }
    return Qe(() => {
      w(), p();
    }), (x, $) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (P) => d.value = !0)
          }, {
            actions: g(() => [
              C(ie, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: !v.value || h.value,
                title: "Open log file in default editor"
              }, {
                default: g(() => [
                  b(f(h.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(ie, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: r.value
              }, {
                default: g(() => [
                  b(f(r.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: g(() => [
          r.value ? (a(), M(Is, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (a(), M(Es, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            i.value.length === 0 ? (a(), M(ts, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), M(kr, {
              key: 1,
              logs: i.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      C(ss, {
        show: d.value,
        title: "About Environment Logs",
        onClose: $[2] || ($[2] = (P) => d.value = !1)
      }, {
        content: g(() => [
          s("p", null, [
            $[3] || ($[3] = b(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            s("strong", null, f(m.value), 1),
            $[4] || ($[4] = b(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          $[5] || ($[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            b(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            b(" Potential issues or important notices"),
            s("br"),
            s("strong", null, "INFO:"),
            b(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            b(" Detailed debugging information ")
          ], -1))
        ]),
        actions: g(() => [
          C(ie, {
            variant: "primary",
            onClick: $[1] || ($[1] = (P) => d.value = !1)
          }, {
            default: g(() => [...$[6] || ($[6] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), d2 = { class: "env-title" }, f2 = {
  key: 0,
  class: "current-badge"
}, m2 = {
  key: 0,
  class: "branch-info"
}, v2 = /* @__PURE__ */ me({
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
    return (t, o) => (a(), M(Et, {
      status: e.isCurrent ? "synced" : void 0
    }, eo({
      icon: g(() => [
        b(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: g(() => [
        s("div", d2, [
          s("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), c("span", f2, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: g(() => [
        e.currentBranch ? (a(), c("span", m2, [
          o[0] || (o[0] = s("span", { class: "branch-icon" }, "⎇", -1)),
          b(" " + f(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: g(() => [
        Ge(t.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: g(() => [
          C(ut, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          C(ut, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          C(ut, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (a(), M(ut, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), p2 = /* @__PURE__ */ pe(v2, [["__scopeId", "data-v-9231917a"]]), g2 = { class: "env-details" }, h2 = { class: "status-row" }, y2 = {
  key: 0,
  class: "detail-row"
}, w2 = { class: "value mono" }, b2 = {
  key: 1,
  class: "detail-row"
}, _2 = { class: "value mono small" }, k2 = { class: "detail-row" }, $2 = { class: "value" }, C2 = { class: "detail-row" }, x2 = { class: "value" }, S2 = { class: "detail-row" }, I2 = { class: "value" }, E2 = {
  key: 2,
  class: "section-divider"
}, T2 = {
  key: 3,
  class: "detail-row"
}, P2 = { class: "value" }, R2 = {
  key: 4,
  class: "detail-row"
}, M2 = { class: "value" }, D2 = { class: "footer-actions" }, L2 = /* @__PURE__ */ me({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(e, { emit: t }) {
    const o = t;
    function n(l) {
      if (!l) return "Unknown";
      try {
        const i = new Date(l), u = (/* @__PURE__ */ new Date()).getTime() - i.getTime(), d = Math.floor(u / 6e4), m = Math.floor(u / 36e5), v = Math.floor(u / 864e5);
        return d < 1 ? "just now" : d < 60 ? `${d} ${d === 1 ? "minute" : "minutes"} ago` : m < 24 ? `${m} ${m === 1 ? "hour" : "hours"} ago` : v < 30 ? `${v} ${v === 1 ? "day" : "days"} ago` : i.toLocaleDateString();
      } catch {
        return l;
      }
    }
    return (l, i) => (a(), M(vt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: i[2] || (i[2] = (r) => o("close"))
    }, {
      body: g(() => [
        s("div", g2, [
          s("div", h2, [
            i[3] || (i[3] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: xe(["status-badge", e.environment.is_current ? "current" : "inactive"])
            }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          e.environment.current_branch ? (a(), c("div", y2, [
            i[4] || (i[4] = s("span", { class: "label" }, "Branch:", -1)),
            s("span", w2, f(e.environment.current_branch), 1)
          ])) : y("", !0),
          e.environment.path ? (a(), c("div", b2, [
            i[5] || (i[5] = s("span", { class: "label" }, "Path:", -1)),
            s("span", _2, f(e.environment.path), 1)
          ])) : y("", !0),
          i[11] || (i[11] = s("div", { class: "section-divider" }, null, -1)),
          s("div", k2, [
            i[6] || (i[6] = s("span", { class: "label" }, "Workflows:", -1)),
            s("span", $2, f(e.environment.workflow_count), 1)
          ]),
          s("div", C2, [
            i[7] || (i[7] = s("span", { class: "label" }, "Nodes:", -1)),
            s("span", x2, f(e.environment.node_count), 1)
          ]),
          s("div", S2, [
            i[8] || (i[8] = s("span", { class: "label" }, "Models:", -1)),
            s("span", I2, f(e.environment.model_count), 1)
          ]),
          e.environment.created_at || e.environment.last_used ? (a(), c("div", E2)) : y("", !0),
          e.environment.created_at ? (a(), c("div", T2, [
            i[9] || (i[9] = s("span", { class: "label" }, "Created:", -1)),
            s("span", P2, f(n(e.environment.created_at)), 1)
          ])) : y("", !0),
          e.environment.last_used ? (a(), c("div", R2, [
            i[10] || (i[10] = s("span", { class: "label" }, "Last Used:", -1)),
            s("span", M2, f(n(e.environment.last_used)), 1)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        s("div", D2, [
          e.canDelete ? (a(), M(Me, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: i[0] || (i[0] = (r) => o("delete", e.environment.name))
          }, {
            default: g(() => [...i[12] || (i[12] = [
              b(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          i[14] || (i[14] = s("div", { class: "footer-spacer" }, null, -1)),
          C(Me, {
            variant: "secondary",
            size: "sm",
            onClick: i[1] || (i[1] = (r) => o("close"))
          }, {
            default: g(() => [...i[13] || (i[13] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), O2 = /* @__PURE__ */ pe(L2, [["__scopeId", "data-v-59855453"]]), $r = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Cr = "3.12", Ja = [
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
], xr = "auto", N2 = { class: "progress-bar" }, A2 = /* @__PURE__ */ me({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, o = F(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (n, l) => (a(), c("div", N2, [
      s("div", {
        class: xe(["progress-fill", e.variant]),
        style: Vt({ width: o.value })
      }, null, 6)
    ]));
  }
}), jn = /* @__PURE__ */ pe(A2, [["__scopeId", "data-v-1beb0512"]]), U2 = { class: "task-progress" }, z2 = { class: "progress-info" }, F2 = { class: "progress-percentage" }, B2 = { class: "progress-message" }, V2 = {
  key: 0,
  class: "progress-steps"
}, W2 = { class: "step-icon" }, G2 = { class: "step-label" }, j2 = /* @__PURE__ */ me({
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
      const i = t.steps.find((r) => r.id === l);
      return i ? t.progress >= i.progressThreshold ? "completed" : t.currentPhase === l ? "active" : "pending" : "pending";
    }
    function n(l) {
      const i = o(l);
      return i === "completed" ? "✓" : i === "active" ? "⟳" : "○";
    }
    return (l, i) => (a(), c("div", U2, [
      C(jn, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", z2, [
        s("span", F2, f(e.progress) + "%", 1),
        s("span", B2, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), c("div", V2, [
        (a(!0), c(j, null, ge(e.steps, (r) => (a(), c("div", {
          key: r.id,
          class: xe(["step", o(r.id)])
        }, [
          s("span", W2, f(n(r.id)), 1),
          s("span", G2, f(r.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Pn = /* @__PURE__ */ pe(j2, [["__scopeId", "data-v-9d1de66c"]]), H2 = {
  key: 0,
  class: "create-env-form"
}, K2 = { class: "form-field" }, q2 = { class: "form-field" }, Y2 = ["value"], J2 = { class: "form-field" }, X2 = ["disabled"], Q2 = ["value"], Z2 = { class: "form-field" }, e$ = ["value"], t$ = { class: "form-field form-field--checkbox" }, s$ = { class: "form-checkbox" }, o$ = {
  key: 1,
  class: "create-env-progress"
}, n$ = { class: "creating-intro" }, a$ = {
  key: 0,
  class: "progress-warning"
}, l$ = {
  key: 1,
  class: "create-error"
}, i$ = { class: "error-message" }, r$ = {
  key: 1,
  class: "footer-status"
}, c$ = 10, u$ = /* @__PURE__ */ me({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const o = t, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: i } = at(), r = k(""), u = k(Cr), d = k("latest"), m = k(xr), v = k(!1), h = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = k(!1), p = k(!1), _ = k({
      progress: 0,
      message: ""
    });
    let x = null, $ = 0;
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
    ], N = k(null);
    function T() {
      p.value || o("close");
    }
    async function S() {
      const E = r.value.trim();
      if (E) {
        p.value = !0, _.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const O = {
            name: E,
            python_version: u.value,
            comfyui_version: d.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, re = await l(O);
          re.status === "started" ? q() : re.status === "error" && (_.value = {
            progress: 0,
            message: re.message || "Failed to start creation",
            error: re.message
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
      x || ($ = 0, x = window.setInterval(async () => {
        try {
          const E = await i();
          $ = 0, _.value = {
            progress: E.progress ?? 0,
            message: E.message,
            phase: E.phase,
            error: E.error
          }, E.state === "complete" ? (B(), o("created", E.environment_name || r.value.trim(), v.value)) : E.state === "error" ? (B(), _.value.error = E.error || E.message) : E.state === "idle" && p.value && (B(), _.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= c$ && (B(), _.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function B() {
      x && (clearInterval(x), x = null);
    }
    function A() {
      p.value = !1, _.value = { progress: 0, message: "" }, o("close");
    }
    async function I() {
      w.value = !0;
      try {
        h.value = await n();
      } catch (E) {
        console.error("Failed to load ComfyUI releases:", E);
      } finally {
        w.value = !1;
      }
    }
    return Qe(async () => {
      var E;
      await Qo(), (E = N.value) == null || E.focus(), I();
    }), wo(() => {
      B();
    }), (E, O) => (a(), M(vt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !p.value,
      onClose: T
    }, {
      body: g(() => [
        p.value ? (a(), c("div", o$, [
          s("p", n$, [
            O[11] || (O[11] = b(" Creating environment ", -1)),
            s("strong", null, f(r.value), 1),
            O[12] || (O[12] = b("... ", -1))
          ]),
          C(Pn, {
            progress: _.value.progress,
            message: _.value.message,
            "current-phase": _.value.phase,
            variant: _.value.error ? "error" : "default",
            "show-steps": !0,
            steps: P
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          _.value.error ? y("", !0) : (a(), c("p", a$, " This may take several minutes. Please wait... ")),
          _.value.error ? (a(), c("div", l$, [
            s("p", i$, f(_.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), c("div", H2, [
          s("div", K2, [
            O[6] || (O[6] = s("label", { class: "form-label" }, "Name", -1)),
            He(s("input", {
              ref_key: "nameInput",
              ref: N,
              "onUpdate:modelValue": O[0] || (O[0] = (re) => r.value = re),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Jt(S, ["enter"])
            }, null, 544), [
              [Nt, r.value]
            ])
          ]),
          s("div", q2, [
            O[7] || (O[7] = s("label", { class: "form-label" }, "Python Version", -1)),
            He(s("select", {
              "onUpdate:modelValue": O[1] || (O[1] = (re) => u.value = re),
              class: "form-select"
            }, [
              (a(!0), c(j, null, ge(Ue($r), (re) => (a(), c("option", {
                key: re,
                value: re
              }, f(re), 9, Y2))), 128))
            ], 512), [
              [ms, u.value]
            ])
          ]),
          s("div", J2, [
            O[8] || (O[8] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            He(s("select", {
              "onUpdate:modelValue": O[2] || (O[2] = (re) => d.value = re),
              class: "form-select",
              disabled: w.value
            }, [
              (a(!0), c(j, null, ge(h.value, (re) => (a(), c("option", {
                key: re.tag_name,
                value: re.tag_name
              }, f(re.name), 9, Q2))), 128))
            ], 8, X2), [
              [ms, d.value]
            ])
          ]),
          s("div", Z2, [
            O[9] || (O[9] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            He(s("select", {
              "onUpdate:modelValue": O[3] || (O[3] = (re) => m.value = re),
              class: "form-select"
            }, [
              (a(!0), c(j, null, ge(Ue(Ja), (re) => (a(), c("option", {
                key: re,
                value: re
              }, f(re) + f(re === "auto" ? " (detect GPU)" : ""), 9, e$))), 128))
            ], 512), [
              [ms, m.value]
            ])
          ]),
          s("div", t$, [
            s("label", s$, [
              He(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": O[4] || (O[4] = (re) => v.value = re)
              }, null, 512), [
                [Yo, v.value]
              ]),
              O[10] || (O[10] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: g(() => [
        p.value ? (a(), c(j, { key: 1 }, [
          _.value.error ? (a(), M(Me, {
            key: 0,
            variant: "secondary",
            onClick: A
          }, {
            default: g(() => [...O[15] || (O[15] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), c("span", r$, " Creating environment... "))
        ], 64)) : (a(), c(j, { key: 0 }, [
          C(Me, {
            variant: "primary",
            disabled: !r.value.trim(),
            onClick: S
          }, {
            default: g(() => [...O[13] || (O[13] = [
              b(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Me, {
            variant: "secondary",
            onClick: O[5] || (O[5] = (re) => o("close"))
          }, {
            default: g(() => [...O[14] || (O[14] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), d$ = /* @__PURE__ */ pe(u$, [["__scopeId", "data-v-f37eaa42"]]), f$ = /* @__PURE__ */ me({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getEnvironments: l } = at(), i = k([]), r = k(!1), u = k(null), d = k(""), m = k(!1), v = k(!1), h = k(null), w = F(() => {
      if (!d.value.trim()) return i.value;
      const N = d.value.toLowerCase();
      return i.value.filter(
        (T) => {
          var S;
          return T.name.toLowerCase().includes(N) || ((S = T.current_branch) == null ? void 0 : S.toLowerCase().includes(N));
        }
      );
    });
    function p(N, T) {
      v.value = !1, n("created", N, T);
    }
    function _() {
      v.value = !0;
    }
    function x(N) {
      h.value = N;
    }
    function $(N) {
      h.value = null, n("delete", N);
    }
    async function P() {
      r.value = !0, u.value = null;
      try {
        i.value = await l();
      } catch (N) {
        u.value = N instanceof Error ? N.message : "Failed to load environments";
      } finally {
        r.value = !1;
      }
    }
    return Qe(P), t({
      loadEnvironments: P,
      openCreateModal: _
    }), (N, T) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (S) => m.value = !0)
          }, {
            actions: g(() => [
              C(ie, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: g(() => [...T[6] || (T[6] = [
                  b(" Create ", -1)
                ])]),
                _: 1
              }),
              C(ie, {
                variant: "secondary",
                size: "sm",
                onClick: P
              }, {
                default: g(() => [...T[7] || (T[7] = [
                  b(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          C(bo, {
            modelValue: d.value,
            "onUpdate:modelValue": T[1] || (T[1] = (S) => d.value = S),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          r.value ? (a(), M(Is, {
            key: 0,
            message: "Loading environments..."
          })) : u.value ? (a(), M(Es, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (a(), c(j, { key: 2 }, [
            w.value.length ? (a(), M(ot, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: g(() => [
                (a(!0), c(j, null, ge(w.value, (S) => (a(), M(p2, {
                  key: S.name,
                  "environment-name": S.name,
                  "is-current": S.is_current,
                  "current-branch": S.current_branch,
                  "show-last-used": !1
                }, {
                  actions: g(() => [
                    S.is_current ? y("", !0) : (a(), M(ie, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => N.$emit("switch", S.name)
                    }, {
                      default: g(() => [...T[8] || (T[8] = [
                        b(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    C(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => x(S)
                    }, {
                      default: g(() => [...T[9] || (T[9] = [
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
            w.value.length ? y("", !0) : (a(), M(ts, {
              key: 1,
              icon: "🌍",
              message: d.value ? `No environments match '${d.value}'` : "No environments found. Create one to get started!"
            }, eo({ _: 2 }, [
              d.value ? void 0 : {
                name: "actions",
                fn: g(() => [
                  C(ie, {
                    variant: "primary",
                    onClick: _
                  }, {
                    default: g(() => [...T[10] || (T[10] = [
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
      C(ss, {
        show: m.value,
        title: "About Environments",
        onClose: T[3] || (T[3] = (S) => m.value = !1)
      }, {
        content: g(() => [...T[11] || (T[11] = [
          s("p", null, [
            s("strong", null, "Environments"),
            b(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          C(ie, {
            variant: "secondary",
            onClick: T[2] || (T[2] = (S) => m.value = !1)
          }, {
            default: g(() => [...T[12] || (T[12] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      h.value ? (a(), M(O2, {
        key: 0,
        environment: h.value,
        "can-delete": i.value.length > 1,
        onClose: T[4] || (T[4] = (S) => h.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : y("", !0),
      v.value ? (a(), M(d$, {
        key: 1,
        onClose: T[5] || (T[5] = (S) => v.value = !1),
        onCreated: p
      })) : y("", !0)
    ], 64));
  }
}), m$ = /* @__PURE__ */ pe(f$, [["__scopeId", "data-v-f95999f4"]]), v$ = { class: "file-path" }, p$ = { class: "file-path-text" }, g$ = ["title"], h$ = /* @__PURE__ */ me({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = k(!1);
    async function n() {
      try {
        await navigator.clipboard.writeText(t.path), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, i) => (a(), c("div", v$, [
      i[0] || (i[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", p$, f(e.path), 1),
      e.copyable ? (a(), c("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, f(o.value ? "✓" : "📋"), 9, g$)) : y("", !0)
    ]));
  }
}), y$ = /* @__PURE__ */ pe(h$, [["__scopeId", "data-v-f0982173"]]), w$ = { class: "export-blocked" }, b$ = { class: "issues-list" }, _$ = { class: "issue-message" }, k$ = {
  key: 0,
  class: "issue-details"
}, $$ = ["onClick"], C$ = { class: "issue-fix" }, x$ = /* @__PURE__ */ me({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(e) {
    const t = e, o = Fs({});
    function n(l) {
      const i = t.issues[l];
      return o[l] || i.details.length <= 3 ? i.details : i.details.slice(0, 3);
    }
    return (l, i) => (a(), M(vt, {
      title: "Cannot Export",
      size: "md",
      onClose: i[1] || (i[1] = (r) => l.$emit("close"))
    }, {
      body: g(() => [
        s("div", w$, [
          i[2] || (i[2] = s("div", { class: "error-header" }, [
            s("span", { class: "error-icon" }, [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ]),
            s("div", { class: "error-summary" }, [
              s("h3", { class: "error-title" }, "Export blocked"),
              s("p", { class: "error-description" }, " The following issues must be resolved before exporting. ")
            ])
          ], -1)),
          s("div", b$, [
            (a(!0), c(j, null, ge(e.issues, (r, u) => (a(), c("div", {
              key: u,
              class: "issue-item"
            }, [
              s("div", _$, f(r.message), 1),
              r.details.length ? (a(), c("div", k$, [
                (a(!0), c(j, null, ge(n(u), (d, m) => (a(), c("div", {
                  key: m,
                  class: "issue-detail"
                }, f(d), 1))), 128)),
                r.details.length > 3 && !o[u] ? (a(), c("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (d) => o[u] = !0
                }, " +" + f(r.details.length - 3) + " more ", 9, $$)) : y("", !0)
              ])) : y("", !0),
              s("div", C$, [
                r.type === "uncommitted_workflows" ? (a(), c(j, { key: 0 }, [
                  b(" Commit your workflow changes before exporting. ")
                ], 64)) : r.type === "uncommitted_git_changes" ? (a(), c(j, { key: 1 }, [
                  b(" Commit your changes before exporting. ")
                ], 64)) : r.type === "unresolved_issues" ? (a(), c(j, { key: 2 }, [
                  b(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: g(() => [
        C(Me, {
          variant: "primary",
          onClick: i[0] || (i[0] = (r) => l.$emit("close"))
        }, {
          default: g(() => [...i[3] || (i[3] = [
            b(" Understood ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Sr = /* @__PURE__ */ pe(x$, [["__scopeId", "data-v-b52f5e32"]]), S$ = { class: "export-warnings" }, I$ = {
  key: 0,
  class: "success-header"
}, E$ = { class: "warning-header" }, T$ = { class: "warning-summary" }, P$ = { class: "warning-title" }, R$ = { class: "models-section" }, M$ = { class: "models-list" }, D$ = { class: "model-info" }, L$ = { class: "model-filename" }, O$ = { class: "model-workflows" }, N$ = ["onClick"], A$ = /* @__PURE__ */ me({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(!1), i = k(null), r = F(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function u() {
      i.value = null, n("revalidate");
    }
    return (d, m) => (a(), c(j, null, [
      C(vt, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (v) => d.$emit("cancel"))
      }, {
        body: g(() => [
          s("div", S$, [
            e.models.length === 0 ? (a(), c("div", I$, [...m[4] || (m[4] = [
              s("span", { class: "success-icon" }, [
                s("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" })
                ])
              ], -1),
              s("div", { class: "success-summary" }, [
                s("h3", { class: "success-title" }, "All models have source URLs"),
                s("p", { class: "success-description" }, " Your environment is ready to export. Recipients will be able to download all models automatically. ")
              ], -1)
            ])])) : (a(), c(j, { key: 1 }, [
              s("div", E$, [
                m[6] || (m[6] = s("span", { class: "warning-icon" }, [
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
                s("div", T$, [
                  s("h3", P$, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = s("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              s("div", R$, [
                s("div", M$, [
                  (a(!0), c(j, null, ge(r.value, (v) => (a(), c("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    s("div", D$, [
                      s("div", L$, f(v.filename), 1),
                      s("div", O$, " Used by: " + f(v.workflows.join(", ")), 1)
                    ]),
                    s("button", {
                      class: "add-source-btn",
                      onClick: (h) => i.value = v.hash
                    }, " Add Source ", 8, N$)
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
        footer: g(() => [
          C(Me, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (v) => d.$emit("cancel"))
          }, {
            default: g(() => [...m[7] || (m[7] = [
              b(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          C(Me, {
            variant: "primary",
            onClick: m[2] || (m[2] = (v) => d.$emit("confirm"))
          }, {
            default: g(() => [
              b(f(e.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      i.value ? (a(), M(qa, {
        key: 0,
        identifier: i.value,
        onClose: u
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Ir = /* @__PURE__ */ pe(A$, [["__scopeId", "data-v-b698d882"]]), U$ = { class: "export-card" }, z$ = { class: "export-path-row" }, F$ = { class: "export-actions" }, B$ = {
  key: 1,
  class: "export-warning"
}, V$ = /* @__PURE__ */ me({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: t, exportEnvWithForce: o } = at(), n = k(""), l = k(!1), i = k(!1), r = k(!1), u = k(null), d = k(!1), m = k(null), v = k(!1), h = k(!1), w = F(() => l.value ? "Validating..." : i.value ? "Exporting..." : "Export Environment");
    async function p() {
      l.value = !0, u.value = null;
      try {
        const T = await t();
        m.value = T, T.can_export ? T.warnings.models_without_sources.length > 0 ? h.value = !0 : await $() : v.value = !0;
      } catch (T) {
        u.value = {
          status: "error",
          message: T instanceof Error ? T.message : "Validation failed"
        };
      } finally {
        l.value = !1;
      }
    }
    async function _() {
      h.value = !1, await $();
    }
    async function x() {
      try {
        const T = await t();
        m.value = T;
      } catch (T) {
        console.error("Re-validation failed:", T);
      }
    }
    async function $() {
      i.value = !0;
      try {
        const T = await o(n.value || void 0);
        u.value = T;
      } catch (T) {
        u.value = {
          status: "error",
          message: T instanceof Error ? T.message : "Export failed"
        };
      } finally {
        i.value = !1;
      }
    }
    async function P() {
      var T;
      if ((T = u.value) != null && T.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (S) {
          console.error("Failed to copy path:", S);
        }
    }
    async function N() {
      var T;
      if ((T = u.value) != null && T.path) {
        r.value = !0;
        try {
          const S = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!S.ok)
            throw new Error(`Download failed: ${S.statusText}`);
          const q = await S.blob(), B = URL.createObjectURL(q), A = u.value.path.split("/").pop() || "environment-export.tar.gz", I = document.createElement("a");
          I.href = B, I.download = A, document.body.appendChild(I), I.click(), document.body.removeChild(I), URL.revokeObjectURL(B);
        } catch (S) {
          console.error("Failed to download:", S), alert(`Download failed: ${S instanceof Error ? S.message : "Unknown error"}`);
        } finally {
          r.value = !1;
        }
      }
    }
    return (T, S) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: S[0] || (S[0] = (q) => d.value = !0)
          })
        ]),
        content: g(() => [
          C(ot, { title: "EXPORT OPTIONS" }, {
            default: g(() => [
              s("div", U$, [
                S[7] || (S[7] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", z$, [
                  C(En, {
                    modelValue: n.value,
                    "onUpdate:modelValue": S[1] || (S[1] = (q) => n.value = q),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                s("div", F$, [
                  C(ie, {
                    variant: "primary",
                    size: "md",
                    loading: l.value || i.value,
                    disabled: l.value || i.value,
                    onClick: p
                  }, {
                    default: g(() => [
                      S[6] || (S[6] = s("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        s("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        s("path", { d: "M14 2H2v2h12V2z" })
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
          u.value ? (a(), M(ot, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: g(() => [
              C(Et, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, eo({
                icon: g(() => [
                  b(f(u.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  b(f(u.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: g(() => [
                  b(f(u.value.status === "success" ? "Your environment has been exported" : u.value.message), 1)
                ]),
                _: 2
              }, [
                u.value.status === "success" ? {
                  name: "details",
                  fn: g(() => [
                    C(ut, { label: "Saved to:" }, {
                      default: g(() => [
                        C(y$, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (a(), M(ut, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (a(), c("div", B$, [...S[8] || (S[8] = [
                      s("span", { class: "warning-icon" }, "!", -1),
                      s("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: g(() => [
                    C(ie, {
                      variant: "primary",
                      size: "sm",
                      loading: r.value,
                      onClick: N
                    }, {
                      default: g(() => [...S[9] || (S[9] = [
                        s("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          s("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    C(ie, {
                      variant: "secondary",
                      size: "sm",
                      onClick: P
                    }, {
                      default: g(() => [...S[10] || (S[10] = [
                        b(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    C(ie, {
                      variant: "ghost",
                      size: "sm",
                      onClick: S[2] || (S[2] = (q) => u.value = null)
                    }, {
                      default: g(() => [...S[11] || (S[11] = [
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
      C(ss, {
        show: d.value,
        title: "What Gets Exported",
        onClose: S[3] || (S[3] = (q) => d.value = !1)
      }, {
        content: g(() => [...S[12] || (S[12] = [
          s("div", { class: "export-info" }, [
            s("div", { class: "info-section" }, [
              s("strong", null, "Included in Export:"),
              s("ul", null, [
                s("li", null, [
                  s("strong", null, "Workflows"),
                  b(" — All workflows in this environment")
                ]),
                s("li", null, [
                  s("strong", null, "Custom Nodes"),
                  b(" — Node definitions and dependencies")
                ]),
                s("li", null, [
                  s("strong", null, "Models"),
                  b(" — References and source URLs (not the files)")
                ]),
                s("li", null, [
                  s("strong", null, "Configuration"),
                  b(" — Environment settings and metadata")
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
              b(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      v.value && m.value ? (a(), M(Sr, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: S[4] || (S[4] = (q) => v.value = !1)
      }, null, 8, ["issues"])) : y("", !0),
      h.value && m.value ? (a(), M(Ir, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: _,
        onCancel: S[5] || (S[5] = (q) => h.value = !1),
        onRevalidate: x
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), W$ = /* @__PURE__ */ pe(V$, [["__scopeId", "data-v-f4d120f2"]]), G$ = { class: "file-input-wrapper" }, j$ = ["accept", "multiple", "disabled"], H$ = /* @__PURE__ */ me({
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
    const n = o, l = k(null);
    function i() {
      var u;
      (u = l.value) == null || u.click();
    }
    function r(u) {
      const d = u.target;
      d.files && d.files.length > 0 && (n("change", d.files), d.value = "");
    }
    return t({
      triggerInput: i
    }), (u, d) => (a(), c("div", G$, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: r
      }, null, 40, j$),
      C(ie, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: i
      }, {
        default: g(() => [
          Ge(u.$slots, "default", {}, () => [
            d[0] || (d[0] = s("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              s("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              s("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            b(" " + f(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), K$ = /* @__PURE__ */ pe(H$, [["__scopeId", "data-v-cd192091"]]), q$ = {
  key: 0,
  class: "drop-zone-empty"
}, Y$ = { class: "drop-zone-text" }, J$ = { class: "drop-zone-primary" }, X$ = { class: "drop-zone-secondary" }, Q$ = { class: "drop-zone-actions" }, Z$ = {
  key: 1,
  class: "drop-zone-file"
}, eC = { class: "file-info" }, tC = { class: "file-details" }, sC = { class: "file-name" }, oC = { class: "file-size" }, nC = /* @__PURE__ */ me({
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
    const o = t, n = k(!1), l = k(null), i = k(0), r = F(() => l.value !== null), u = F(() => {
      var $;
      return (($ = l.value) == null ? void 0 : $.name) || "";
    }), d = F(() => {
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
    function h($) {
      $.stopPropagation(), i.value--, i.value === 0 && (n.value = !1);
    }
    function w($) {
      var N;
      $.stopPropagation(), i.value = 0, n.value = !1;
      const P = (N = $.dataTransfer) == null ? void 0 : N.files;
      P && P.length > 0 && _(P[0]);
    }
    function p($) {
      $.length > 0 && _($[0]);
    }
    function _($) {
      l.value = $, o("fileSelected", $);
    }
    function x() {
      l.value = null, o("clear");
    }
    return ($, P) => (a(), c("div", {
      class: xe(["file-drop-zone", { "drop-active": n.value, "has-file": r.value }]),
      onDragenter: nt(m, ["prevent"]),
      onDragover: nt(v, ["prevent"]),
      onDragleave: nt(h, ["prevent"]),
      onDrop: nt(w, ["prevent"])
    }, [
      r.value ? (a(), c("div", Z$, [
        s("div", eC, [
          P[1] || (P[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", tC, [
            s("div", sC, f(u.value), 1),
            s("div", oC, f(d.value), 1)
          ])
        ]),
        C(ie, {
          variant: "ghost",
          size: "xs",
          onClick: x,
          title: "Remove file"
        }, {
          default: g(() => [...P[2] || (P[2] = [
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
      ])) : (a(), c("div", q$, [
        P[0] || (P[0] = s("div", { class: "drop-zone-icon" }, [
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
        s("div", Y$, [
          s("p", J$, f(e.primaryText), 1),
          s("p", X$, f(e.secondaryText), 1)
        ]),
        s("div", Q$, [
          C(K$, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: p
          }, {
            default: g(() => [
              b(f(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), aC = /* @__PURE__ */ pe(nC, [["__scopeId", "data-v-0f79cb86"]]), lC = { class: "import-preview" }, iC = { class: "preview-header" }, rC = {
  key: 0,
  class: "source-env"
}, cC = { class: "preview-content" }, uC = { class: "preview-section" }, dC = { class: "section-header" }, fC = { class: "section-info" }, mC = { class: "section-count" }, vC = {
  key: 0,
  class: "item-list"
}, pC = { class: "item-name" }, gC = {
  key: 0,
  class: "item-more"
}, hC = { class: "preview-section" }, yC = { class: "section-header" }, wC = { class: "section-info" }, bC = { class: "section-count" }, _C = {
  key: 0,
  class: "item-list"
}, kC = { class: "item-details" }, $C = { class: "item-name" }, CC = { class: "item-meta" }, xC = {
  key: 0,
  class: "item-more"
}, SC = { class: "preview-section" }, IC = { class: "section-header" }, EC = { class: "section-info" }, TC = { class: "section-count" }, PC = {
  key: 0,
  class: "item-list"
}, RC = { class: "item-name" }, MC = {
  key: 0,
  class: "item-more"
}, DC = {
  key: 0,
  class: "preview-section"
}, LC = { class: "git-info" }, OC = /* @__PURE__ */ me({
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
    const t = e, o = F(() => t.workflows.length), n = F(() => t.models.length), l = F(() => t.nodes.length);
    function i(r) {
      return r < 1024 ? `${r} B` : r < 1024 * 1024 ? `${(r / 1024).toFixed(1)} KB` : r < 1024 * 1024 * 1024 ? `${(r / (1024 * 1024)).toFixed(1)} MB` : `${(r / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (r, u) => (a(), c("div", lC, [
      s("div", iC, [
        C(Lt, null, {
          default: g(() => [...u[0] || (u[0] = [
            b("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), c("span", rC, [
          u[1] || (u[1] = b(" From: ", -1)),
          C($a, null, {
            default: g(() => [
              b(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      s("div", cC, [
        s("div", uC, [
          s("div", dC, [
            u[3] || (u[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", fC, [
              u[2] || (u[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", mC, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), c("div", vC, [
            (a(!0), c(j, null, ge(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), c("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", pC, f(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), c("div", gC, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", hC, [
          s("div", yC, [
            u[6] || (u[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", wC, [
              u[5] || (u[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", bC, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), c("div", _C, [
            (a(!0), c(j, null, ge(e.models.slice(0, e.maxPreviewItems), (d) => (a(), c("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", kC, [
                s("span", $C, f(d.filename), 1),
                s("span", CC, f(i(d.size)) + " • " + f(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), c("div", xC, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", SC, [
          s("div", IC, [
            u[9] || (u[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", EC, [
              u[8] || (u[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", TC, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), c("div", PC, [
            (a(!0), c(j, null, ge(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), c("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", RC, f(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), c("div", MC, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), c("div", DC, [
          u[11] || (u[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", LC, [
            e.gitBranch ? (a(), M(ut, {
              key: 0,
              label: "Branch"
            }, {
              default: g(() => [
                C($a, null, {
                  default: g(() => [
                    b(f(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (a(), M(ut, {
              key: 1,
              label: "Commit"
            }, {
              default: g(() => [
                C(pr, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), NC = /* @__PURE__ */ pe(OC, [["__scopeId", "data-v-182fe113"]]), AC = { class: "import-config" }, UC = { class: "config-container" }, zC = { class: "config-field" }, FC = { class: "input-wrapper" }, BC = ["value"], VC = {
  key: 0,
  class: "validating-indicator"
}, WC = {
  key: 1,
  class: "valid-indicator"
}, GC = {
  key: 0,
  class: "field-error"
}, jC = { class: "config-field" }, HC = { class: "strategy-options" }, KC = ["value", "checked", "onChange"], qC = { class: "strategy-content" }, YC = { class: "strategy-label" }, JC = { class: "strategy-description" }, XC = { class: "config-field switch-field" }, QC = { class: "switch-label" }, ZC = ["checked"], e3 = { class: "advanced-section" }, t3 = { class: "advanced-content" }, s3 = { class: "config-field" }, o3 = ["value"], n3 = ["value"], a3 = /* @__PURE__ */ me({
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
    const o = e, n = t, l = k(!1), i = k(!1);
    Ct(() => o.nameError, (v) => {
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
      const h = v.target.value;
      n("update:name", h), i.value = !1, u && clearTimeout(u), h.length > 0 ? (l.value = !0, u = setTimeout(() => {
        n("validate-name", h);
      }, 400)) : l.value = !1;
    }
    function m() {
      o.name.length > 0 && n("validate-name", o.name);
    }
    return (v, h) => (a(), c("div", AC, [
      C(Lt, null, {
        default: g(() => [...h[2] || (h[2] = [
          b("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", UC, [
        s("div", zC, [
          C(hn, { required: "" }, {
            default: g(() => [...h[3] || (h[3] = [
              b("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", FC, [
            s("input", {
              type: "text",
              class: xe(["name-input", { error: e.nameError || e.name.length === 0, valid: i.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: m
            }, null, 42, BC),
            l.value ? (a(), c("span", VC, "...")) : i.value ? (a(), c("span", WC, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), c("div", GC, f(e.nameError), 1)) : y("", !0),
          h[4] || (h[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", jC, [
          C(hn, null, {
            default: g(() => [...h[5] || (h[5] = [
              b("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", HC, [
            (a(), c(j, null, ge(r, (w) => s("label", {
              key: w.value,
              class: xe(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              s("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => n("update:modelStrategy", w.value)
              }, null, 40, KC),
              s("div", qC, [
                s("span", YC, f(w.label), 1),
                s("span", JC, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", XC, [
          s("label", QC, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: h[0] || (h[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, ZC),
            h[6] || (h[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", e3, [
          h[8] || (h[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", t3, [
            s("div", s3, [
              C(hn, null, {
                default: g(() => [...h[7] || (h[7] = [
                  b("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              s("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: h[1] || (h[1] = (w) => n("update:torchBackend", w.target.value))
              }, [
                (a(!0), c(j, null, ge(Ue(Ja), (w) => (a(), c("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, n3))), 128))
              ], 40, o3)
            ])
          ])
        ])
      ])
    ]));
  }
}), l3 = /* @__PURE__ */ pe(a3, [["__scopeId", "data-v-89ea06a1"]]), i3 = { class: "import-flow" }, r3 = {
  key: 0,
  class: "import-empty"
}, c3 = { class: "git-import-section" }, u3 = { class: "git-url-input-row" }, d3 = ["disabled"], f3 = {
  key: 0,
  class: "git-error"
}, m3 = {
  key: 1,
  class: "import-configure"
}, v3 = { class: "selected-file-bar" }, p3 = {
  key: 0,
  class: "file-bar-content"
}, g3 = { class: "file-bar-info" }, h3 = { class: "file-bar-name" }, y3 = { class: "file-bar-size" }, w3 = {
  key: 1,
  class: "file-bar-content"
}, b3 = { class: "file-bar-info" }, _3 = { class: "file-bar-name" }, k3 = {
  key: 0,
  class: "preview-loading"
}, $3 = { class: "import-actions" }, C3 = {
  key: 2,
  class: "import-progress"
}, x3 = { class: "creating-intro" }, S3 = {
  key: 0,
  class: "progress-warning"
}, I3 = {
  key: 1,
  class: "import-error"
}, E3 = { class: "error-message" }, T3 = {
  key: 3,
  class: "import-complete"
}, P3 = { class: "complete-message" }, R3 = { class: "complete-title" }, M3 = { class: "complete-details" }, D3 = { class: "complete-actions" }, L3 = /* @__PURE__ */ me({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: o }) {
    var Je, _e, Se, Ve;
    const n = e, l = o, { previewTarballImport: i, previewGitImport: r, validateEnvironmentName: u, executeImport: d, executeGitImport: m, getImportProgress: v } = at();
    let h = null;
    const w = k(null), p = k(n.resumeImport ?? !1), _ = k(!1), x = k(!1), $ = k(""), P = k(!1), N = k(null), T = k(""), S = k(null), q = k(!1), B = k(null), A = k(null), I = k({
      name: ((Je = n.initialProgress) == null ? void 0 : Je.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), E = k(null), O = k({
      message: ((_e = n.initialProgress) == null ? void 0 : _e.message) ?? "Preparing import...",
      phase: ((Se = n.initialProgress) == null ? void 0 : Se.phase) ?? "",
      progress: ((Ve = n.initialProgress) == null ? void 0 : Ve.progress) ?? 0,
      error: null
    }), re = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Y = F(() => {
      if (!A.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const ye = A.value;
      return {
        sourceEnvironment: ye.comfyui_version ? `ComfyUI ${ye.comfyui_version}` : "Unknown",
        workflows: ye.workflows.map((le) => le.name),
        models: ye.models.map((le) => ({
          filename: le.filename,
          size: 0,
          type: le.relative_path.split("/")[0] || "model"
        })),
        nodes: ye.nodes.map((le) => le.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), H = F(() => !P.value && !N.value && A.value && I.value.name.length > 0 && !E.value && (w.value || S.value));
    async function te(ye) {
      w.value = ye, P.value = !0, N.value = null, A.value = null;
      try {
        const le = await i(ye);
        A.value = le;
      } catch (le) {
        N.value = le instanceof Error ? le.message : "Failed to analyze file", console.error("Preview error:", le);
      } finally {
        P.value = !1;
      }
    }
    function Z() {
      w.value = null, S.value = null, T.value = "", B.value = null, _.value = !1, x.value = !1, $.value = "", A.value = null, N.value = null, I.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, E.value = null, l("source-cleared");
    }
    function U() {
      De(), Z(), p.value = !1, P.value = !1, q.value = !1, O.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function z() {
      if (T.value.trim()) {
        q.value = !0, B.value = null;
        try {
          const ye = await r(T.value.trim());
          S.value = T.value.trim(), A.value = ye;
        } catch (ye) {
          B.value = ye instanceof Error ? ye.message : "Failed to analyze repository";
        } finally {
          q.value = !1;
        }
      }
    }
    function R(ye) {
      try {
        const le = new URL(ye);
        return le.host + le.pathname.replace(/\.git$/, "");
      } catch {
        return ye;
      }
    }
    async function be(ye) {
      if (!ye) {
        E.value = "Environment name is required";
        return;
      }
      try {
        const le = await u(ye);
        E.value = le.valid ? null : le.error || "Invalid name";
      } catch {
        E.value = "Failed to validate name";
      }
    }
    async function ve() {
      if (I.value.name && !(!w.value && !S.value)) {
        p.value = !0, _.value = !1, O.value = { message: `Creating environment '${I.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let ye;
          if (w.value)
            ye = await d(
              w.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else if (S.value)
            ye = await m(
              S.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          ye.status === "started" ? Ee() : (x.value = !1, $.value = ye.message, p.value = !1, _.value = !0);
        } catch (ye) {
          x.value = !1, $.value = ye instanceof Error ? ye.message : "Unknown error occurred during import", p.value = !1, _.value = !0;
        }
      }
    }
    async function Ee() {
      if (h) return;
      const ye = async () => {
        try {
          const Fe = await v();
          return O.value = {
            message: Fe.message,
            phase: Fe.phase || "",
            progress: Fe.progress ?? (Fe.state === "importing" ? 50 : 0),
            error: Fe.error || null
          }, Fe.state === "complete" ? (De(), x.value = !0, $.value = `Environment '${Fe.environment_name}' created successfully`, p.value = !1, _.value = !0, Fe.environment_name && l("import-complete", Fe.environment_name, I.value.switchAfterImport), !1) : Fe.state === "error" ? (De(), x.value = !1, $.value = Fe.error || Fe.message, p.value = !1, _.value = !0, !1) : !0;
        } catch (Fe) {
          return console.error("Failed to poll import progress:", Fe), !0;
        }
      };
      await ye() && (h = setInterval(async () => {
        await ye() || De();
      }, 2e3));
    }
    function De() {
      h && (clearInterval(h), h = null);
    }
    function je(ye) {
      return ye < 1024 ? `${ye} B` : ye < 1024 * 1024 ? `${(ye / 1024).toFixed(1)} KB` : ye < 1024 * 1024 * 1024 ? `${(ye / (1024 * 1024)).toFixed(1)} MB` : `${(ye / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return Qe(async () => {
      try {
        const ye = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", ye.state, ye), ye.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", ye.environment_name), p.value = !0, I.value.name = ye.environment_name || I.value.name || "", O.value = {
          progress: ye.progress ?? 0,
          message: ye.message || "Importing...",
          phase: ye.phase || "",
          error: null
        }, Ee());
      } catch (ye) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", ye);
      }
    }), t({
      handleReset: U,
      isImporting: p,
      canImport: H
    }), (ye, le) => {
      var Fe;
      return a(), c("div", i3, [
        !w.value && !S.value && !p.value ? (a(), c("div", r3, [
          C(aC, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: te
          }),
          le[7] || (le[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", c3, [
            le[5] || (le[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", u3, [
              He(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": le[0] || (le[0] = (Ie) => T.value = Ie),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Jt(z, ["enter"]),
                disabled: q.value
              }, null, 40, d3), [
                [Nt, T.value]
              ]),
              C(ie, {
                variant: "primary",
                size: "sm",
                disabled: !T.value.trim() || q.value,
                onClick: z
              }, {
                default: g(() => [
                  b(f(q.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            B.value ? (a(), c("div", f3, f(B.value), 1)) : y("", !0),
            le[6] || (le[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || S.value) && !p.value && !_.value ? (a(), c("div", m3, [
          s("div", v3, [
            w.value ? (a(), c("div", p3, [
              le[8] || (le[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", g3, [
                s("div", h3, f(w.value.name), 1),
                s("div", y3, f(je(w.value.size)), 1)
              ])
            ])) : S.value ? (a(), c("div", w3, [
              le[10] || (le[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", b3, [
                s("div", _3, f(R(S.value)), 1),
                le[9] || (le[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            C(ie, {
              variant: "ghost",
              size: "sm",
              onClick: Z
            }, {
              default: g(() => [...le[11] || (le[11] = [
                b(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          P.value ? (a(), c("div", k3, [...le[12] || (le[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : N.value ? (a(), M(Ht, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [N.value]
          }, null, 8, ["details"])) : A.value ? (a(), M(NC, {
            key: 2,
            "source-environment": Y.value.sourceEnvironment,
            workflows: Y.value.workflows,
            models: Y.value.models,
            nodes: Y.value.nodes,
            "git-branch": Y.value.gitBranch,
            "git-commit": Y.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          A.value ? (a(), M(l3, {
            key: 3,
            name: I.value.name,
            "onUpdate:name": le[1] || (le[1] = (Ie) => I.value.name = Ie),
            "model-strategy": I.value.modelStrategy,
            "onUpdate:modelStrategy": le[2] || (le[2] = (Ie) => I.value.modelStrategy = Ie),
            "torch-backend": I.value.torchBackend,
            "onUpdate:torchBackend": le[3] || (le[3] = (Ie) => I.value.torchBackend = Ie),
            "switch-after-import": I.value.switchAfterImport,
            "onUpdate:switchAfterImport": le[4] || (le[4] = (Ie) => I.value.switchAfterImport = Ie),
            "name-error": E.value,
            onValidateName: be
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          I.value.modelStrategy === "skip" && ((Fe = A.value) != null && Fe.models_needing_download) ? (a(), M(Ht, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${A.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          s("div", $3, [
            C(ie, {
              variant: "secondary",
              size: "md",
              onClick: Z
            }, {
              default: g(() => [...le[13] || (le[13] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(ie, {
              variant: "primary",
              size: "md",
              disabled: !H.value,
              onClick: ve
            }, {
              default: g(() => [...le[14] || (le[14] = [
                b(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (a(), c("div", C3, [
          s("p", x3, [
            le[15] || (le[15] = b(" Importing environment ", -1)),
            s("strong", null, f(I.value.name), 1),
            le[16] || (le[16] = b("... ", -1))
          ]),
          C(Pn, {
            progress: O.value.progress,
            message: O.value.message,
            "current-phase": O.value.phase,
            variant: O.value.error ? "error" : "default",
            "show-steps": !0,
            steps: re
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          O.value.error ? y("", !0) : (a(), c("p", S3, " This may take several minutes. Please wait... ")),
          O.value.error ? (a(), c("div", I3, [
            s("p", E3, f(O.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), c("div", T3, [
          s("div", {
            class: xe(["complete-icon", x.value ? "success" : "error"])
          }, f(x.value ? "✓" : "✕"), 3),
          s("div", P3, [
            s("div", R3, f(x.value ? "Import Successful" : "Import Failed"), 1),
            s("div", M3, f($.value), 1)
          ]),
          s("div", D3, [
            C(ie, {
              variant: "primary",
              size: "md",
              onClick: U
            }, {
              default: g(() => [...le[17] || (le[17] = [
                b(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Er = /* @__PURE__ */ pe(L3, [["__scopeId", "data-v-72cbc04e"]]), O3 = /* @__PURE__ */ me({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: t }) {
    const o = t, n = k(!1);
    function l(i, r) {
      r && o("import-complete-switch", i);
    }
    return (i, r) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: r[0] || (r[0] = (u) => n.value = !0)
          })
        ]),
        content: g(() => [
          C(Er, { onImportComplete: l })
        ]),
        _: 1
      }),
      C(ss, {
        show: n.value,
        title: "How Import Works",
        onClose: r[1] || (r[1] = (u) => n.value = !1)
      }, {
        content: g(() => [...r[2] || (r[2] = [
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
}), N3 = /* @__PURE__ */ pe(O3, [["__scopeId", "data-v-e13bfe76"]]), un = lo(), A3 = 5e3, oo = k([]), ia = k(!1), ra = k(null);
let Io = null;
async function dn(e, t) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, t);
}
function Tr(e) {
  const t = F(
    () => oo.value.filter((p) => p.status === "running")
  ), o = F(
    () => oo.value.filter((p) => p.status === "deploying")
  ), n = F(
    () => oo.value.filter((p) => p.status === "stopped")
  ), l = F(
    () => t.value.length + o.value.length
  ), i = F(() => {
    const p = {
      deploying: 0,
      running: 1,
      stopped: 2,
      error: 3,
      terminated: 4
    };
    return [...oo.value].sort(
      (_, x) => (p[_.status] ?? 5) - (p[x.status] ?? 5)
    );
  });
  async function r() {
    ia.value = !0, ra.value = null;
    try {
      let p;
      if (!un) {
        const _ = await dn("/v2/comfygit/deploy/instances");
        if (!_.ok)
          throw new Error(`Failed to fetch instances: ${_.status}`);
        p = await _.json();
      }
      oo.value = p.instances;
    } catch (p) {
      ra.value = p instanceof Error ? p.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", p);
    } finally {
      ia.value = !1;
    }
  }
  function u(p, _) {
    if (p.provider === "custom" && p.worker_name) {
      const x = p.id.includes(":") ? p.id.split(":").slice(1).join(":") : p.id;
      return _ === "terminate" ? `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${x}` : `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${x}/${_}`;
    }
    return _ === "terminate" ? `/v2/comfygit/deploy/${p.provider}/${p.id}` : `/v2/comfygit/deploy/${p.provider}/${p.id}/${_}`;
  }
  async function d(p) {
    try {
      if (!un) {
        const _ = u(p, "stop"), x = await dn(_, { method: "POST" });
        if (!x.ok) {
          const $ = await x.json();
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
      if (!un) {
        const _ = u(p, "start"), x = await dn(_, { method: "POST" });
        if (!x.ok) {
          const $ = await x.json();
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
      if (!un) {
        const _ = u(p, "terminate"), x = await dn(_, { method: "DELETE" });
        if (!x.ok) {
          const $ = await x.json();
          throw new Error($.message || "Failed to terminate instance");
        }
      }
      await r();
    } catch (_) {
      throw console.error("[useDeployInstances] terminateInstance error:", _), _;
    }
  }
  function h() {
    Io || (Io = window.setInterval(r, A3));
  }
  function w() {
    Io && (clearInterval(Io), Io = null);
  }
  return Ct(o, (p) => {
    p.length > 0 && h();
  }, { immediate: !0 }), e != null && e.autoStart && (r(), h()), {
    // State
    instances: oo,
    isLoading: ia,
    error: ra,
    // Computed
    runningInstances: t,
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
    startPolling: h,
    stopPolling: w
  };
}
const U3 = { class: "instance-header" }, z3 = { class: "provider-badge" }, F3 = { class: "instance-name" }, B3 = {
  key: 0,
  class: "spinner"
}, V3 = { class: "instance-details" }, W3 = {
  key: 0,
  class: "detail"
}, G3 = {
  key: 1,
  class: "detail instance-url"
}, j3 = {
  key: 2,
  class: "detail"
}, H3 = {
  key: 3,
  class: "detail"
}, K3 = {
  key: 4,
  class: "detail total-cost"
}, q3 = {
  key: 0,
  class: "deployment-progress"
}, Y3 = { class: "progress-message" }, J3 = { class: "instance-actions" }, X3 = /* @__PURE__ */ me({
  __name: "InstanceCard",
  props: {
    instance: {},
    isLoading: { type: Boolean }
  },
  emits: ["stop", "start", "terminate"],
  setup(e) {
    const t = e, o = F(() => t.instance.provider === "custom" && t.instance.worker_name ? t.instance.worker_name : {
      runpod: "RunPod",
      vast: "Vast.ai",
      custom: "Custom"
    }[t.instance.provider] || t.instance.provider), n = F(() => ({
      deploying: "Deploying",
      starting: "Starting",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[t.instance.status] || t.instance.status), l = F(() => `status-${t.instance.status}`);
    function i() {
      t.instance.comfyui_url && window.open(t.instance.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function r() {
      t.instance.console_url && window.open(t.instance.console_url, "_blank", "noopener,noreferrer");
    }
    function u(d) {
      const m = Math.floor(d / 3600), v = Math.floor(d % 3600 / 60);
      return m > 0 ? `${m}h ${v}m` : `${v}m`;
    }
    return (d, m) => (a(), c("div", {
      class: xe(["instance-card", l.value])
    }, [
      s("div", U3, [
        s("span", z3, f(o.value), 1),
        s("span", F3, f(e.instance.name), 1),
        s("span", {
          class: xe(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (a(), c("span", B3)) : y("", !0),
          b(" " + f(n.value), 1)
        ], 2)
      ]),
      s("div", V3, [
        e.instance.gpu_type ? (a(), c("span", W3, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (a(), c("span", G3, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (a(), c("span", j3, f(u(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (a(), c("span", H3, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (a(), c("span", K3, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (a(), c("div", q3, [
        s("div", Y3, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (a(), M(jn, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      s("div", J3, [
        e.instance.status === "running" && e.instance.comfyui_url ? (a(), M(ie, {
          key: 0,
          variant: "primary",
          size: "xs",
          onClick: i
        }, {
          default: g(() => [...m[3] || (m[3] = [
            b(" Open ComfyUI ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.console_url && e.instance.provider !== "custom" ? (a(), M(ie, {
          key: 1,
          variant: "ghost",
          size: "xs",
          onClick: r
        }, {
          default: g(() => [...m[4] || (m[4] = [
            b(" Console ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.status === "running" ? (a(), M(ie, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[0] || (m[0] = (v) => d.$emit("stop", e.instance))
        }, {
          default: g(() => [...m[5] || (m[5] = [
            b(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        e.instance.status === "stopped" ? (a(), M(ie, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[1] || (m[1] = (v) => d.$emit("start", e.instance))
        }, {
          default: g(() => [...m[6] || (m[6] = [
            b(" Start ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        C(ie, {
          variant: "destructive",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[2] || (m[2] = (v) => d.$emit("terminate", e.instance))
        }, {
          default: g(() => [...m[7] || (m[7] = [
            b(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), Q3 = /* @__PURE__ */ pe(X3, [["__scopeId", "data-v-746c3894"]]), Z3 = { class: "instances-tab" }, e5 = { class: "instances-header" }, t5 = {
  key: 0,
  class: "loading-state"
}, s5 = {
  key: 1,
  class: "empty-state"
}, o5 = {
  key: 2,
  class: "instances-list"
}, n5 = /* @__PURE__ */ me({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(e) {
    const t = e, o = F(() => {
      const n = {
        deploying: 0,
        running: 1,
        stopped: 2,
        error: 3,
        terminated: 4
      };
      return [...t.instances].sort(
        (l, i) => (n[l.status] ?? 5) - (n[i.status] ?? 5)
      );
    });
    return (n, l) => (a(), c("div", Z3, [
      s("div", e5, [
        C(Lt, null, {
          default: g(() => [...l[4] || (l[4] = [
            b("Active Instances", -1)
          ])]),
          _: 1
        }),
        C(ie, {
          variant: "ghost",
          size: "xs",
          loading: e.isLoading,
          onClick: l[0] || (l[0] = (i) => n.$emit("refresh"))
        }, {
          default: g(() => [...l[5] || (l[5] = [
            b(" Refresh ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      e.isLoading && e.instances.length === 0 ? (a(), c("div", t5, [...l[6] || (l[6] = [
        s("span", { class: "spinner" }, null, -1),
        b(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (a(), c("div", s5, [...l[7] || (l[7] = [
        s("span", { class: "empty-icon" }, "○", -1),
        s("span", { class: "empty-text" }, "No active instances", -1),
        s("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (a(), c("div", o5, [
        (a(!0), c(j, null, ge(o.value, (i) => (a(), M(Q3, {
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
}), a5 = /* @__PURE__ */ pe(n5, [["__scopeId", "data-v-ba614fc3"]]), l5 = { class: "remote-header" }, i5 = { class: "remote-info" }, r5 = { class: "remote-icon" }, c5 = { class: "remote-name" }, u5 = {
  key: 0,
  class: "default-badge"
}, d5 = {
  key: 1,
  class: "sync-badge"
}, f5 = {
  key: 0,
  class: "ahead"
}, m5 = {
  key: 1,
  class: "behind"
}, v5 = {
  key: 1,
  class: "synced"
}, p5 = ["href"], g5 = {
  key: 1,
  class: "remote-url-text"
}, h5 = { class: "remote-actions" }, y5 = /* @__PURE__ */ me({
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
    const t = e, o = F(() => t.remote.is_default), n = F(() => {
      const i = t.remote.fetch_url, r = i.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return r ? `https://${r[1]}/${r[2]}` : i.startsWith("https://") || i.startsWith("http://") ? i.replace(/\.git$/, "") : null;
    }), l = F(() => t.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (i, r) => (a(), c("div", {
      class: xe(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      s("div", l5, [
        s("div", i5, [
          s("span", r5, f(o.value ? "🔗" : "🌐"), 1),
          s("span", c5, f(e.remote.name), 1),
          o.value ? (a(), c("span", u5, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), c("span", d5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), c(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), c("span", f5, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), c("span", m5, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), c("span", v5, "✓ synced"))
          ])) : y("", !0)
        ]),
        n.value ? (a(), c("a", {
          key: 0,
          href: n.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: r[0] || (r[0] = nt(() => {
          }, ["stop"]))
        }, f(l.value), 9, p5)) : (a(), c("span", g5, f(l.value), 1))
      ]),
      s("div", h5, [
        C(ie, {
          variant: "secondary",
          size: "xs",
          loading: e.isFetching,
          onClick: r[1] || (r[1] = (u) => i.$emit("fetch", e.remote.name))
        }, {
          default: g(() => [...r[4] || (r[4] = [
            b(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        e.syncStatus && e.syncStatus.ahead > 0 ? (a(), M(ie, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: e.isPushing,
          onClick: r[2] || (r[2] = (u) => i.$emit("push", e.remote.name))
        }, {
          default: g(() => [
            b(" Push ↑" + f(e.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : y("", !0),
        C(ie, {
          variant: e.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: r[3] || (r[3] = (u) => i.$emit("select", e.remote.name))
        }, {
          default: g(() => [
            b(f(e.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), Pr = /* @__PURE__ */ pe(y5, [["__scopeId", "data-v-d687d161"]]), w5 = { class: "runpod-tab" }, b5 = { class: "api-key-card" }, _5 = { class: "api-key-row" }, k5 = { class: "api-key-input-wrapper" }, $5 = ["type", "disabled"], C5 = ["title"], x5 = { class: "status-icon" }, S5 = { class: "status-text" }, I5 = {
  key: 0,
  class: "credit-balance"
}, E5 = { class: "config-card" }, T5 = { class: "config-row" }, P5 = ["disabled"], R5 = {
  key: 0,
  value: ""
}, M5 = {
  key: 1,
  value: "",
  disabled: ""
}, D5 = ["value", "disabled"], L5 = { class: "config-row" }, O5 = {
  key: 0,
  class: "loading-inline"
}, N5 = { class: "no-volumes-state" }, A5 = { class: "no-volumes-text" }, U5 = ["value"], z5 = { class: "config-row" }, F5 = ["disabled"], B5 = {
  key: 0,
  value: ""
}, V5 = {
  key: 1,
  value: ""
}, W5 = {
  key: 2,
  value: ""
}, G5 = ["value"], j5 = { class: "config-row" }, H5 = { class: "radio-group" }, K5 = { class: "radio-option" }, q5 = { class: "radio-label" }, Y5 = { class: "radio-option disabled" }, J5 = { class: "radio-label" }, X5 = { class: "config-row" }, Q5 = { class: "radio-group" }, Z5 = { class: "radio-option" }, ex = { class: "radio-label" }, tx = { class: "radio-option disabled" }, sx = { class: "radio-label" }, ox = { class: "config-row" }, nx = {
  key: 0,
  class: "loading-text"
}, ax = {
  key: 1,
  class: "empty-remotes"
}, lx = { class: "remotes-list" }, ix = {
  key: 0,
  class: "sync-warning"
}, rx = { class: "warning-content" }, cx = { class: "remotes-footer" }, ux = { class: "summary-card" }, dx = {
  key: 0,
  class: "loading-text"
}, fx = { class: "summary-row" }, mx = { class: "summary-value" }, vx = { class: "summary-row" }, px = { class: "summary-value" }, gx = { class: "summary-row" }, hx = { class: "summary-value" }, yx = {
  key: 0,
  class: "summary-sub-row"
}, wx = { class: "summary-sub-label" }, bx = {
  key: 1,
  class: "summary-sub-row warning"
}, _x = { class: "summary-sub-label" }, kx = { class: "summary-row" }, $x = { class: "summary-value" }, Cx = { class: "summary-row" }, xx = { class: "summary-value" }, Sx = { class: "deployment-summary" }, Ix = { class: "summary-columns" }, Ex = { class: "summary-column" }, Tx = { class: "pricing-row" }, Px = { class: "pricing-value" }, Rx = { class: "pricing-row" }, Mx = { class: "pricing-value" }, Dx = { class: "pricing-row" }, Lx = { class: "pricing-value" }, Ox = { class: "pricing-row total" }, Nx = { class: "pricing-value" }, Ax = { class: "summary-column" }, Ux = { class: "spec-row" }, zx = { class: "spec-row" }, Fx = {
  key: 0,
  class: "spec-row"
}, Bx = {
  key: 1,
  class: "spec-row spot-warning"
}, Vx = {
  key: 4,
  class: "deploy-actions"
}, Wx = { class: "progress-content" }, Gx = { class: "phase-indicator" }, jx = { key: 0 }, Hx = { key: 1 }, Kx = { key: 2 }, qx = {
  key: 3,
  class: "spinner"
}, Yx = { class: "phase-text" }, Jx = { class: "phase-name" }, Xx = { class: "phase-detail" }, Qx = {
  key: 0,
  class: "ready-actions"
}, Zx = { class: "console-link" }, e8 = ["href"], t8 = /* @__PURE__ */ me({
  __name: "RunPodTab",
  emits: ["toast", "navigate", "deployed"],
  setup(e, { emit: t }) {
    const o = t, {
      getDeploySummary: n,
      testRunPodConnection: l,
      getNetworkVolumes: i,
      getRunPodGpuTypes: r,
      deployToRunPod: u,
      getDeploymentStatus: d,
      getStoredRunPodKey: m,
      clearRunPodKey: v,
      validateDeploy: h,
      getRemotes: w,
      getRemoteSyncStatus: p,
      fetchRemote: _,
      pushToRemote: x,
      getDataCenters: $
    } = at(), P = k(!1), N = k(""), T = k(!1), S = k(!1), q = k(null), B = k(null), A = k(""), I = k(""), E = k(""), O = k("SECURE"), re = k("ON_DEMAND"), Y = k("my-comfyui-deploy"), H = k([]), te = k({}), Z = k(!1), U = k(null), z = k(null), R = k(null), be = k([]), ve = k(!1), Ee = k([]), De = k(!1), je = k([]), Je = k(!1), _e = k(null), Se = k(!1), Ve = k(!1), ye = k(null), le = k(!1), Fe = k(null), Ie = k(null), L = k(null), V = k(!1), oe = k(null), ae = k(!1), de = k(!1), fe = F(() => Ee.value.find((he) => he.id === I.value) || null), ke = F(() => A.value ? Ee.value.filter((he) => he.data_center_id === A.value) : Ee.value), $e = F(() => je.value.filter((he) => he.available)), ne = F(() => U.value && te.value[U.value] || null), ue = F(() => {
      if (!U.value) return null;
      const he = H.value.find((Q) => Q.name === U.value);
      return (he == null ? void 0 : he.fetch_url) || null;
    }), Re = F(() => T.value && I.value && E.value && ue.value && !Ve.value && !V.value), Ce = (he) => {
      const Q = je.value.find((pt) => pt.id === E.value);
      if (!Q) return "0.00";
      if (he === "SECURE") return (Q.securePrice ?? 0).toFixed(2);
      if (he === "COMMUNITY") return (Q.communityPrice ?? 0).toFixed(2);
      const We = O.value === "SECURE";
      return he === "ON_DEMAND" ? We ? (Q.securePrice ?? 0).toFixed(2) : (Q.communityPrice ?? 0).toFixed(2) : We ? (Q.secureSpotPrice ?? 0).toFixed(2) : (Q.communitySpotPrice ?? 0).toFixed(2);
    }, ee = F(() => {
      const he = je.value.find((os) => os.id === E.value), Q = Ee.value.find((os) => os.id === I.value);
      if (!he) return null;
      const We = O.value === "SECURE", pt = re.value === "SPOT";
      let jt;
      pt ? jt = We ? he.secureSpotPrice ?? 0 : he.communitySpotPrice ?? 0 : jt = We ? he.securePrice ?? 0 : he.communityPrice ?? 0;
      const ps = Q ? Q.size_gb * 14e-5 : 0, gs = 4e-3;
      return {
        gpu: jt,
        volume: ps,
        container: gs,
        total: jt + ps + gs
      };
    });
    async function K() {
      await rt(), await Promise.all([wt(), X()]);
    }
    async function X() {
      Z.value = !0;
      try {
        const he = await w();
        H.value = he.remotes, await Promise.all(
          he.remotes.map(async (We) => {
            const pt = await p(We.name);
            pt && (te.value[We.name] = pt);
          })
        );
        const Q = he.remotes.find((We) => We.is_default);
        Q ? U.value = Q.name : he.remotes.length > 0 && (U.value = he.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        Z.value = !1;
      }
    }
    async function D(he) {
      z.value = he;
      try {
        await _(he);
        const Q = await p(he);
        Q && (te.value[he] = Q), o("toast", `Fetched from ${he}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        z.value = null;
      }
    }
    async function W(he) {
      R.value = he;
      try {
        await x(he, { force: !1 });
        const Q = await p(he);
        Q && (te.value[he] = Q), o("toast", `Pushed to ${he}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        R.value = null;
      }
    }
    function ce(he) {
      U.value = he;
    }
    async function Te() {
      if (N.value) {
        S.value = !0, q.value = null;
        try {
          const he = await l(N.value, !0);
          he.status === "success" ? (T.value = !0, B.value = he.credit_balance ?? null, q.value = { type: "success", message: he.message }, await K()) : q.value = { type: "error", message: he.message };
        } catch (he) {
          q.value = {
            type: "error",
            message: he instanceof Error ? he.message : "Connection test failed"
          };
        } finally {
          S.value = !1;
        }
      }
    }
    async function Ke() {
      try {
        await v(), N.value = "", T.value = !1, q.value = null, B.value = null, be.value = [], A.value = "", Ee.value = [], I.value = "", je.value = [], E.value = "", _e.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function rt() {
      De.value = !0, ve.value = !0;
      try {
        const he = await i();
        Ee.value = he.volumes;
        const Q = /* @__PURE__ */ new Map();
        for (const We of he.volumes)
          We.data_center_id && !Q.has(We.data_center_id) && Q.set(We.data_center_id, {
            id: We.data_center_id,
            name: We.data_center_name || We.data_center_id,
            available: !0
          });
        if (he.volumes.length === 0) {
          const We = await $();
          be.value = We.data_centers;
        } else
          be.value = Array.from(Q.values());
        if (Ee.value.length > 0) {
          const We = Ee.value[0];
          I.value = We.id, We.data_center_id && (A.value = We.data_center_id, await yt(We.data_center_id));
        } else be.value.length > 0 && (A.value = be.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        De.value = !1, ve.value = !1;
      }
    }
    async function yt(he) {
      Je.value = !0;
      try {
        const Q = await r(he);
        je.value = Q.gpu_types;
        const We = je.value.find((pt) => pt.available);
        We ? E.value = We.id : E.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        Je.value = !1;
      }
    }
    Ct(A, async (he) => {
      if (!he || De.value) return;
      const Q = Ee.value.find((We) => We.id === I.value);
      Q && Q.data_center_id !== he && (I.value = ""), await yt(he);
    }), Ct(I, async (he) => {
      if (!he) {
        je.value = [], E.value = "";
        return;
      }
      if (De.value) return;
      const Q = Ee.value.find((We) => We.id === he);
      Q && Q.data_center_id !== A.value ? A.value = Q.data_center_id : Q && await yt(Q.data_center_id);
    });
    async function wt() {
      Se.value = !0;
      try {
        _e.value = await n();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        Se.value = !1;
      }
    }
    async function ct() {
      if (!(!E.value || !I.value)) {
        V.value = !0, ye.value = null;
        try {
          const he = await h();
          oe.value = he, he.can_export ? he.warnings.models_without_sources.length > 0 ? de.value = !0 : await vs() : ae.value = !0;
        } catch (he) {
          ye.value = {
            status: "error",
            message: he instanceof Error ? he.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          V.value = !1;
        }
      }
    }
    async function ft() {
      de.value = !1, await vs();
    }
    async function Wt() {
      try {
        const he = await h();
        oe.value = he;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function vs() {
      Ve.value = !0;
      try {
        let he;
        if (re.value === "SPOT") {
          const We = je.value.find((pt) => pt.id === E.value);
          We && (he = O.value === "SECURE" ? We.secureSpotPrice : We.communitySpotPrice);
        }
        const Q = await u({
          gpu_type_id: E.value,
          pod_name: Y.value || "my-comfyui-deploy",
          network_volume_id: I.value,
          cloud_type: O.value,
          pricing_type: re.value,
          spot_bid: he,
          import_source: ue.value
        });
        ye.value = Q, Q.status === "success" && Q.pod_id ? (Fe.value = Q.pod_id, le.value = !0, Gt(Q.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", Q.message, "error");
      } catch (he) {
        ye.value = {
          status: "error",
          message: he instanceof Error ? he.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        Ve.value = !1;
      }
    }
    function Gt(he) {
      Ts(he), L.value = window.setInterval(() => Ts(he), 3e3);
    }
    function Bs() {
      L.value && (clearInterval(L.value), L.value = null);
    }
    async function Ts(he) {
      try {
        const Q = await d(he);
        Ie.value = Q, (Q.phase === "READY" || Q.phase === "ERROR" || Q.phase === "STOPPED") && (Bs(), Q.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (Q) {
        console.error("Failed to poll deployment status:", Q);
      }
    }
    function to() {
      le.value = !1, Bs(), Fe.value = null, Ie.value = null;
    }
    function _o() {
      var he;
      (he = Ie.value) != null && he.comfyui_url && window.open(Ie.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function ko(he) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[he || ""] || "Initializing...";
    }
    function $o(he) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[he || ""] ?? 10;
    }
    return Qe(async () => {
      try {
        const he = await m(!0);
        he.has_key && he.key_preview && (N.value = `****${he.key_preview}`, he.valid ? (T.value = !0, B.value = he.credit_balance ?? null, q.value = { type: "success", message: "Connected to RunPod" }, await K()) : he.error && (q.value = { type: "error", message: he.error }));
      } catch {
      }
    }), wo(() => {
      Bs();
    }), (he, Q) => {
      var We, pt, jt, ps, gs, os;
      return a(), c(j, null, [
        s("div", w5, [
          C(ot, { title: "RUNPOD API KEY" }, {
            default: g(() => [
              s("div", b5, [
                s("div", _5, [
                  s("div", k5, [
                    He(s("input", {
                      "onUpdate:modelValue": Q[0] || (Q[0] = (Le) => N.value = Le),
                      type: P.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: T.value
                    }, null, 8, $5), [
                      [Gn, N.value]
                    ]),
                    s("button", {
                      class: "toggle-visibility-btn",
                      onClick: Q[1] || (Q[1] = (Le) => P.value = !P.value),
                      title: P.value ? "Hide key" : "Show key"
                    }, f(P.value ? "👁" : "👁‍🗨"), 9, C5)
                  ]),
                  T.value ? y("", !0) : (a(), M(ie, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: S.value,
                    disabled: !N.value || S.value,
                    onClick: Te
                  }, {
                    default: g(() => [...Q[16] || (Q[16] = [
                      b(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  T.value ? (a(), M(ie, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: Ke
                  }, {
                    default: g(() => [...Q[17] || (Q[17] = [
                      b(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                q.value ? (a(), c("div", {
                  key: 0,
                  class: xe(["connection-status", q.value.type])
                }, [
                  s("span", x5, f(q.value.type === "success" ? "✓" : "✕"), 1),
                  s("span", S5, f(q.value.message), 1),
                  B.value !== null ? (a(), c("span", I5, " $" + f(B.value.toFixed(2)) + " credit ", 1)) : y("", !0)
                ], 2)) : y("", !0),
                Q[18] || (Q[18] = s("div", { class: "api-key-help" }, [
                  s("span", { class: "help-icon" }, "i"),
                  s("span", { class: "help-text" }, [
                    b(" Get your API key at "),
                    s("a", {
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
          T.value ? (a(), M(ot, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: g(() => [
              s("div", E5, [
                s("div", T5, [
                  Q[19] || (Q[19] = s("label", { class: "config-label" }, "Region", -1)),
                  He(s("select", {
                    "onUpdate:modelValue": Q[2] || (Q[2] = (Le) => A.value = Le),
                    class: "config-select",
                    disabled: ve.value
                  }, [
                    ve.value ? (a(), c("option", R5, "Loading...")) : A.value ? y("", !0) : (a(), c("option", M5, "Select a region")),
                    (a(!0), c(j, null, ge(be.value, (Le) => (a(), c("option", {
                      key: Le.id,
                      value: Le.id,
                      disabled: !Le.available
                    }, f(Le.id) + " (" + f(Le.name) + ")" + f(Le.available ? "" : " [Unavailable]"), 9, D5))), 128))
                  ], 8, P5), [
                    [ms, A.value]
                  ])
                ]),
                s("div", L5, [
                  Q[24] || (Q[24] = s("label", { class: "config-label" }, "Network Volume", -1)),
                  De.value ? (a(), c("div", O5, "Loading volumes...")) : ke.value.length === 0 ? (a(), c(j, { key: 1 }, [
                    s("div", N5, [
                      Q[20] || (Q[20] = s("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      s("span", A5, "No volumes in " + f(A.value || "this region"), 1)
                    ]),
                    Q[21] || (Q[21] = s("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    Q[22] || (Q[22] = s("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (a(), c(j, { key: 2 }, [
                    He(s("select", {
                      "onUpdate:modelValue": Q[3] || (Q[3] = (Le) => I.value = Le),
                      class: "config-select"
                    }, [
                      (a(!0), c(j, null, ge(ke.value, (Le) => (a(), c("option", {
                        key: Le.id,
                        value: Le.id
                      }, f(Le.name) + " (" + f(Le.size_gb) + "GB) ", 9, U5))), 128))
                    ], 512), [
                      [ms, I.value]
                    ]),
                    Q[23] || (Q[23] = s("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                s("div", z5, [
                  Q[25] || (Q[25] = s("label", { class: "config-label" }, "GPU Type", -1)),
                  He(s("select", {
                    "onUpdate:modelValue": Q[4] || (Q[4] = (Le) => E.value = Le),
                    class: "config-select",
                    disabled: Je.value || !I.value
                  }, [
                    I.value ? Je.value ? (a(), c("option", V5, "Loading GPUs...")) : $e.value.length === 0 ? (a(), c("option", W5, "No GPUs available in this region")) : y("", !0) : (a(), c("option", B5, "Select a volume first")),
                    (a(!0), c(j, null, ge($e.value, (Le) => (a(), c("option", {
                      key: Le.id,
                      value: Le.id
                    }, f(Le.displayName) + " (" + f(Le.memoryInGb) + "GB) - $" + f(O.value === "SECURE" ? (Le.securePrice ?? 0).toFixed(2) : (Le.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Le.stockStatus ? `[${Le.stockStatus}]` : ""), 9, G5))), 128))
                  ], 8, F5), [
                    [ms, E.value]
                  ])
                ]),
                s("div", j5, [
                  Q[26] || (Q[26] = s("label", { class: "config-label" }, "Cloud Type", -1)),
                  s("div", H5, [
                    s("label", K5, [
                      He(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[5] || (Q[5] = (Le) => O.value = Le),
                        value: "SECURE"
                      }, null, 512), [
                        [qt, O.value]
                      ]),
                      s("span", q5, "Secure ($" + f(Ce("SECURE")) + "/hr)", 1)
                    ]),
                    s("label", Y5, [
                      He(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[6] || (Q[6] = (Le) => O.value = Le),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [qt, O.value]
                      ]),
                      s("span", J5, "Community ($" + f(Ce("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                s("div", X5, [
                  Q[27] || (Q[27] = s("label", { class: "config-label" }, [
                    b(" Pricing "),
                    s("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  s("div", Q5, [
                    s("label", Z5, [
                      He(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[7] || (Q[7] = (Le) => re.value = Le),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [qt, re.value]
                      ]),
                      s("span", ex, "On-Demand ($" + f(Ce("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    s("label", tx, [
                      He(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[8] || (Q[8] = (Le) => re.value = Le),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [qt, re.value]
                      ]),
                      s("span", sx, "Spot ($" + f(Ce("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                s("div", ox, [
                  Q[28] || (Q[28] = s("label", { class: "config-label" }, "Pod Name", -1)),
                  He(s("input", {
                    "onUpdate:modelValue": Q[9] || (Q[9] = (Le) => Y.value = Le),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [Nt, Y.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : y("", !0),
          T.value ? (a(), M(ot, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: g(() => [
              Z.value ? (a(), c("div", nx, "Loading remotes...")) : H.value.length === 0 ? (a(), c("div", ax, [
                Q[30] || (Q[30] = s("div", { class: "empty-message" }, [
                  s("span", { class: "empty-icon" }, "🌐"),
                  s("span", { class: "empty-text" }, "No Git remotes configured"),
                  s("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                C(ie, {
                  variant: "primary",
                  size: "xs",
                  onClick: Q[10] || (Q[10] = (Le) => o("navigate", "remotes"))
                }, {
                  default: g(() => [...Q[29] || (Q[29] = [
                    b(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (a(), c(j, { key: 2 }, [
                s("div", lx, [
                  (a(!0), c(j, null, ge(H.value, (Le) => (a(), M(Pr, {
                    key: Le.name,
                    remote: Le,
                    "sync-status": te.value[Le.name],
                    "is-selected": U.value === Le.name,
                    "is-fetching": z.value === Le.name,
                    "is-pushing": R.value === Le.name,
                    onFetch: D,
                    onPush: W,
                    onSelect: ce
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                ne.value && ne.value.ahead > 0 ? (a(), c("div", ix, [
                  Q[31] || (Q[31] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("div", rx, [
                    s("strong", null, f(ne.value.ahead) + " unpushed commit" + f(ne.value.ahead !== 1 ? "s" : ""), 1),
                    s("p", null, "Push to '" + f(U.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  C(ie, {
                    variant: "primary",
                    size: "xs",
                    loading: R.value === U.value,
                    onClick: Q[11] || (Q[11] = (Le) => U.value && W(U.value))
                  }, {
                    default: g(() => [
                      b(" Push to " + f(U.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                s("div", cx, [
                  C(ie, {
                    variant: "link",
                    size: "xs",
                    onClick: Q[12] || (Q[12] = (Le) => o("navigate", "remotes"))
                  }, {
                    default: g(() => [...Q[32] || (Q[32] = [
                      b(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          T.value ? (a(), M(ot, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: g(() => [
              s("div", ux, [
                Se.value ? (a(), c("div", dx, "Loading environment summary...")) : _e.value ? (a(), c(j, { key: 1 }, [
                  s("div", fx, [
                    Q[33] || (Q[33] = s("span", { class: "summary-label" }, "ComfyUI", -1)),
                    s("span", mx, f(_e.value.comfyui_version), 1)
                  ]),
                  s("div", vx, [
                    Q[34] || (Q[34] = s("span", { class: "summary-label" }, "Nodes", -1)),
                    s("span", px, f(_e.value.node_count) + " custom nodes", 1)
                  ]),
                  s("div", gx, [
                    Q[35] || (Q[35] = s("span", { class: "summary-label" }, "Models", -1)),
                    s("span", hx, f(_e.value.model_count) + " models", 1)
                  ]),
                  _e.value.models_with_sources > 0 ? (a(), c("div", yx, [
                    s("span", wx, "└─ " + f(_e.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  _e.value.models_without_sources > 0 ? (a(), c("div", bx, [
                    s("span", _x, "└─ " + f(_e.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  s("div", kx, [
                    Q[36] || (Q[36] = s("span", { class: "summary-label" }, "Workflows", -1)),
                    s("span", $x, f(_e.value.workflow_count) + " committed", 1)
                  ]),
                  s("div", Cx, [
                    Q[37] || (Q[37] = s("span", { class: "summary-label" }, "Package", -1)),
                    s("span", xx, "~" + f(_e.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          T.value && ee.value ? (a(), M(ot, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: g(() => {
              var Le, ns;
              return [
                s("div", Sx, [
                  s("div", Ix, [
                    s("div", Ex, [
                      Q[42] || (Q[42] = s("div", { class: "column-header" }, "Pricing", -1)),
                      s("div", Tx, [
                        Q[38] || (Q[38] = s("span", { class: "pricing-label" }, "GPU:", -1)),
                        s("span", Px, "$" + f(ee.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      s("div", Rx, [
                        Q[39] || (Q[39] = s("span", { class: "pricing-label" }, "Volume:", -1)),
                        s("span", Mx, "$" + f(ee.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      s("div", Dx, [
                        Q[40] || (Q[40] = s("span", { class: "pricing-label" }, "Disk:", -1)),
                        s("span", Lx, "$" + f(ee.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      Q[43] || (Q[43] = s("div", { class: "pricing-divider" }, null, -1)),
                      s("div", Ox, [
                        Q[41] || (Q[41] = s("span", { class: "pricing-label" }, "Total:", -1)),
                        s("span", Nx, "~$" + f(ee.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    s("div", Ax, [
                      Q[45] || (Q[45] = s("div", { class: "column-header" }, "Pod Specs", -1)),
                      s("div", Ux, [
                        s("span", null, f(((Le = je.value.find((se) => se.id === E.value)) == null ? void 0 : Le.displayName) || "GPU") + " (" + f(((ns = je.value.find((se) => se.id === E.value)) == null ? void 0 : ns.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      s("div", zx, [
                        s("span", null, "Region: " + f(A.value), 1)
                      ]),
                      fe.value ? (a(), c("div", Fx, [
                        s("span", null, "Volume: " + f(fe.value.name), 1)
                      ])) : y("", !0),
                      re.value === "SPOT" ? (a(), c("div", Bx, [...Q[44] || (Q[44] = [
                        s("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          T.value ? (a(), c("div", Vx, [
            C(ie, {
              variant: "primary",
              size: "md",
              loading: V.value || Ve.value,
              disabled: !Re.value,
              onClick: ct
            }, {
              default: g(() => [
                Q[46] || (Q[46] = s("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  s("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  s("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                b(" " + f(V.value ? "Validating..." : Ve.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          ye.value ? (a(), M(ot, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: g(() => [
              C(Et, {
                status: ye.value.status === "success" ? "synced" : "broken"
              }, eo({
                icon: g(() => [
                  b(f(ye.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  b(f(ye.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: g(() => [
                  b(f(ye.value.message), 1)
                ]),
                actions: g(() => [
                  C(ie, {
                    variant: "ghost",
                    size: "xs",
                    onClick: Q[13] || (Q[13] = (Le) => ye.value = null)
                  }, {
                    default: g(() => [...Q[47] || (Q[47] = [
                      b(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                ye.value.pod_id ? {
                  name: "details",
                  fn: g(() => [
                    C(ut, {
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
        le.value ? (a(), M(vt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((We = Ie.value) == null ? void 0 : We.phase) === "READY" || ((pt = Ie.value) == null ? void 0 : pt.phase) === "ERROR" || ((jt = Ie.value) == null ? void 0 : jt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: to
        }, eo({
          body: g(() => {
            var Le, ns, se, G, Pe, Be, tt, dt, Rt, as, Vs, Ws;
            return [
              s("div", Wx, [
                s("div", Gx, [
                  s("div", {
                    class: xe(["phase-icon", (ns = (Le = Ie.value) == null ? void 0 : Le.phase) == null ? void 0 : ns.toLowerCase()])
                  }, [
                    ((se = Ie.value) == null ? void 0 : se.phase) === "READY" ? (a(), c("span", jx, "✓")) : ((G = Ie.value) == null ? void 0 : G.phase) === "ERROR" ? (a(), c("span", Hx, "✕")) : ((Pe = Ie.value) == null ? void 0 : Pe.phase) === "STOPPED" ? (a(), c("span", Kx, "○")) : (a(), c("span", qx, "⟳"))
                  ], 2),
                  s("div", Yx, [
                    s("div", Jx, f(ko((Be = Ie.value) == null ? void 0 : Be.phase)), 1),
                    s("div", Xx, f(((tt = Ie.value) == null ? void 0 : tt.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                C(jn, {
                  progress: $o((dt = Ie.value) == null ? void 0 : dt.phase),
                  variant: ((Rt = Ie.value) == null ? void 0 : Rt.phase) === "ERROR" ? "error" : ((as = Ie.value) == null ? void 0 : as.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Vs = Ie.value) == null ? void 0 : Vs.phase) === "READY" ? (a(), c("div", Qx, [
                  C(ie, {
                    variant: "primary",
                    size: "md",
                    onClick: _o
                  }, {
                    default: g(() => [...Q[48] || (Q[48] = [
                      b(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                s("div", Zx, [
                  (Ws = Ie.value) != null && Ws.console_url ? (a(), c("a", {
                    key: 0,
                    href: Ie.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, e8)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((ps = Ie.value) == null ? void 0 : ps.phase) === "READY" || ((gs = Ie.value) == null ? void 0 : gs.phase) === "ERROR" || ((os = Ie.value) == null ? void 0 : os.phase) === "STOPPED" ? {
            name: "footer",
            fn: g(() => [
              C(ie, {
                variant: "ghost",
                size: "xs",
                onClick: to
              }, {
                default: g(() => [...Q[49] || (Q[49] = [
                  b(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        ae.value && oe.value ? (a(), M(Sr, {
          key: 1,
          issues: oe.value.blocking_issues,
          onClose: Q[14] || (Q[14] = (Le) => ae.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        de.value && oe.value ? (a(), M(Ir, {
          key: 2,
          models: oe.value.warnings.models_without_sources,
          onConfirm: ft,
          onCancel: Q[15] || (Q[15] = (Le) => de.value = !1),
          onRevalidate: Wt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), s8 = /* @__PURE__ */ pe(t8, [["__scopeId", "data-v-522cd4d9"]]), o8 = { class: "worker-header" }, n8 = { class: "worker-status" }, a8 = { class: "worker-name" }, l8 = { class: "worker-actions" }, i8 = { class: "worker-details" }, r8 = { class: "detail-item" }, c8 = { class: "detail-value" }, u8 = {
  key: 0,
  class: "detail-item"
}, d8 = { class: "detail-value" }, f8 = {
  key: 1,
  class: "detail-item"
}, m8 = { class: "detail-value mode-badge" }, v8 = {
  key: 0,
  class: "worker-stats"
}, p8 = {
  key: 0,
  class: "stat-item"
}, g8 = { key: 0 }, h8 = {
  key: 1,
  class: "worker-stats offline"
}, y8 = /* @__PURE__ */ me({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (t, o) => (a(), c("div", {
      class: xe(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      s("div", o8, [
        s("div", n8, [
          s("span", {
            class: xe(["status-dot", e.worker.status])
          }, null, 2),
          s("span", a8, f(e.worker.name), 1)
        ]),
        s("div", l8, [
          e.worker.status === "online" ? (a(), M(ie, {
            key: 0,
            variant: "primary",
            size: "xs",
            disabled: e.isActionLoading,
            onClick: o[0] || (o[0] = (n) => t.$emit("deploy", e.worker))
          }, {
            default: g(() => [...o[2] || (o[2] = [
              b(" Deploy ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : y("", !0),
          C(ie, {
            variant: "ghost",
            size: "xs",
            loading: e.isActionLoading,
            onClick: o[1] || (o[1] = (n) => t.$emit("remove", e.worker.name))
          }, {
            default: g(() => [...o[3] || (o[3] = [
              b(" Remove ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ]),
      s("div", i8, [
        s("span", r8, [
          s("span", c8, f(e.worker.host) + ":" + f(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (a(), c("span", u8, [
          o[4] || (o[4] = s("span", { class: "detail-label" }, "•", -1)),
          s("span", d8, f(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (a(), c("span", f8, [
          o[5] || (o[5] = s("span", { class: "detail-label" }, "•", -1)),
          s("span", m8, f(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (a(), c("div", v8, [
        o[6] || (o[6] = s("span", { class: "stat-item" }, [
          b(" Status: "),
          s("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (a(), c("span", p8, [
          b(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (a(), c("span", g8, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (a(), c("div", h8, [...o[7] || (o[7] = [
        s("span", { class: "stat-item" }, [
          b(" Status: "),
          s("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), w8 = /* @__PURE__ */ pe(y8, [["__scopeId", "data-v-b1be7134"]]), b8 = { class: "add-worker-content" }, _8 = { class: "manual-form" }, k8 = { class: "form-row" }, $8 = { class: "form-row-inline" }, C8 = { class: "form-field flex-2" }, x8 = { class: "form-field flex-1" }, S8 = { class: "form-row" }, I8 = { class: "api-key-wrapper" }, E8 = ["type"], T8 = { class: "result-icon" }, P8 = { class: "result-content" }, R8 = { class: "result-message" }, M8 = {
  key: 0,
  class: "result-detail"
}, D8 = { class: "modal-actions" }, L8 = /* @__PURE__ */ me({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: t }) {
    const o = t, { testWorkerConnection: n } = at(), l = Fs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), i = k(!1), r = k(!1), u = k(!1), d = k(null), m = F(() => l.host && l.port && l.apiKey), v = F(() => l.name && l.host && l.port && l.apiKey);
    async function h() {
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
    return (p, _) => (a(), M(vt, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: _[5] || (_[5] = (x) => p.$emit("close"))
    }, {
      body: g(() => [
        s("div", b8, [
          s("div", _8, [
            s("div", k8, [
              _[6] || (_[6] = s("label", { class: "form-label" }, "Worker Name", -1)),
              He(s("input", {
                "onUpdate:modelValue": _[0] || (_[0] = (x) => l.name = x),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [Nt, l.name]
              ])
            ]),
            s("div", $8, [
              s("div", C8, [
                _[7] || (_[7] = s("label", { class: "form-label" }, "Host", -1)),
                He(s("input", {
                  "onUpdate:modelValue": _[1] || (_[1] = (x) => l.host = x),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [Nt, l.host]
                ])
              ]),
              s("div", x8, [
                _[8] || (_[8] = s("label", { class: "form-label" }, "Port", -1)),
                He(s("input", {
                  "onUpdate:modelValue": _[2] || (_[2] = (x) => l.port = x),
                  type: "number",
                  class: "form-input",
                  placeholder: "9090"
                }, null, 512), [
                  [
                    Nt,
                    l.port,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ]),
            s("div", S8, [
              _[9] || (_[9] = s("label", { class: "form-label" }, "API Key", -1)),
              s("div", I8, [
                He(s("input", {
                  "onUpdate:modelValue": _[3] || (_[3] = (x) => l.apiKey = x),
                  type: i.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, E8), [
                  [Gn, l.apiKey]
                ]),
                s("button", {
                  class: "toggle-visibility",
                  onClick: _[4] || (_[4] = (x) => i.value = !i.value),
                  type: "button"
                }, f(i.value ? "👁" : "👁‍🗨"), 1)
              ]),
              _[10] || (_[10] = s("div", { class: "form-help" }, [
                s("span", { class: "help-icon" }, "ⓘ"),
                b(" Run "),
                s("code", null, "cg-deploy worker setup"),
                b(" on the worker to get the key ")
              ], -1))
            ]),
            d.value ? (a(), c("div", {
              key: 0,
              class: xe(["test-result", d.value.type])
            }, [
              s("span", T8, f(d.value.type === "success" ? "✓" : "✕"), 1),
              s("div", P8, [
                s("span", R8, f(d.value.message), 1),
                d.value.gpu_info ? (a(), c("span", M8, "GPU: " + f(d.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: g(() => [
        s("div", D8, [
          C(ie, {
            variant: "ghost",
            size: "sm",
            loading: r.value,
            disabled: !m.value || r.value,
            onClick: h
          }, {
            default: g(() => [..._[11] || (_[11] = [
              b(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          C(ie, {
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !v.value || u.value,
            onClick: w
          }, {
            default: g(() => [..._[12] || (_[12] = [
              b(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }));
  }
}), O8 = /* @__PURE__ */ pe(L8, [["__scopeId", "data-v-07a00732"]]), N8 = { class: "discovered-content" }, A8 = {
  key: 0,
  class: "workers-list"
}, U8 = { class: "worker-info" }, z8 = { class: "worker-name" }, F8 = { class: "worker-address" }, B8 = {
  key: 0,
  class: "worker-gpu"
}, V8 = {
  key: 1,
  class: "empty-state"
}, W8 = {
  key: 2,
  class: "api-key-section"
}, G8 = { class: "selected-worker" }, j8 = { class: "selected-name" }, H8 = { class: "selected-address" }, K8 = { class: "form-row" }, q8 = { class: "api-key-wrapper" }, Y8 = ["type"], J8 = { class: "result-icon" }, X8 = { class: "result-message" }, Q8 = { class: "modal-actions" }, Z8 = /* @__PURE__ */ me({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: t }) {
    const o = t, { testWorkerConnection: n } = at(), l = k(null), i = k(""), r = k(!1), u = k(!1), d = k(null), m = k(null);
    async function v(w) {
      var p;
      l.value = w, i.value = "", m.value = null, await Qo(), (p = d.value) == null || p.focus();
    }
    async function h() {
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
    return (w, p) => (a(), M(vt, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (_) => w.$emit("close"))
    }, {
      body: g(() => [
        s("div", N8, [
          e.workers.length > 0 ? (a(), c("div", A8, [
            (a(!0), c(j, null, ge(e.workers, (_) => (a(), c("div", {
              key: `${_.host}:${_.port}`,
              class: "worker-item"
            }, [
              s("div", U8, [
                s("span", z8, f(_.name), 1),
                s("span", F8, f(_.host) + ":" + f(_.port), 1),
                _.gpu_info ? (a(), c("span", B8, f(_.gpu_info), 1)) : y("", !0)
              ]),
              C(ie, {
                variant: "primary",
                size: "xs",
                onClick: (x) => v(_)
              }, {
                default: g(() => [...p[4] || (p[4] = [
                  b(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (a(), c("div", V8, [...p[5] || (p[5] = [
            s("span", { class: "empty-icon" }, "📡", -1),
            s("span", { class: "empty-text" }, "No workers found on the network", -1),
            s("span", { class: "empty-help" }, [
              b("Make sure workers are running with "),
              s("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (a(), c("div", W8, [
            s("div", G8, [
              p[6] || (p[6] = s("span", { class: "selected-label" }, "Adding:", -1)),
              s("span", j8, f(l.value.name), 1),
              s("span", H8, "(" + f(l.value.host) + ":" + f(l.value.port) + ")", 1)
            ]),
            s("div", K8, [
              p[7] || (p[7] = s("label", { class: "form-label" }, "API Key", -1)),
              s("div", q8, [
                He(s("input", {
                  ref_key: "apiKeyInput",
                  ref: d,
                  "onUpdate:modelValue": p[0] || (p[0] = (_) => i.value = _),
                  type: r.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: Jt(h, ["enter"])
                }, null, 40, Y8), [
                  [Gn, i.value]
                ]),
                s("button", {
                  class: "toggle-visibility",
                  onClick: p[1] || (p[1] = (_) => r.value = !r.value),
                  type: "button"
                }, f(r.value ? "👁" : "👁‍🗨"), 1)
              ]),
              p[8] || (p[8] = s("div", { class: "form-help" }, [
                s("span", { class: "help-icon" }, "ⓘ"),
                b(" Run "),
                s("code", null, "cg-deploy worker setup"),
                b(" on the worker to get the key ")
              ], -1))
            ]),
            m.value ? (a(), c("div", {
              key: 0,
              class: xe(["test-result", m.value.type])
            }, [
              s("span", J8, f(m.value.type === "success" ? "✓" : "✕"), 1),
              s("span", X8, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        s("div", Q8, [
          l.value ? (a(), M(ie, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: p[2] || (p[2] = (_) => {
              l.value = null, i.value = "", m.value = null;
            })
          }, {
            default: g(() => [...p[9] || (p[9] = [
              b(" Back ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          l.value ? (a(), M(ie, {
            key: 1,
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !i.value || u.value,
            onClick: h
          }, {
            default: g(() => [...p[10] || (p[10] = [
              b(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), eS = /* @__PURE__ */ pe(Z8, [["__scopeId", "data-v-5a3e40a4"]]), tS = { class: "deploy-content" }, sS = { class: "section" }, oS = {
  key: 0,
  class: "loading-text"
}, nS = {
  key: 1,
  class: "empty-remotes"
}, aS = {
  key: 2,
  class: "remotes-list"
}, lS = { class: "section" }, iS = { class: "mode-options" }, rS = { class: "mode-option" }, cS = ["disabled"], uS = { class: "mode-option" }, dS = { class: "section" }, fS = {
  key: 0,
  class: "section"
}, mS = { class: "summary-row" }, vS = {
  key: 1,
  class: "sync-warning"
}, pS = { class: "warning-content" }, gS = { class: "modal-actions" }, hS = /* @__PURE__ */ me({
  __name: "DeployToWorkerModal",
  props: {
    worker: {}
  },
  emits: ["close", "toast", "deployed"],
  setup(e, { emit: t }) {
    const o = e, n = t, {
      getRemotes: l,
      getRemoteSyncStatus: i,
      fetchRemote: r,
      pushToRemote: u,
      getDeploySummary: d,
      deployToWorker: m
    } = at(), v = k([]), h = k({}), w = k(!1), p = k(null), _ = k(null), x = k(null), $ = k(o.worker.mode || "native"), P = k(""), N = k(null), T = k(!1), S = F(() => p.value && h.value[p.value] || null), q = F(() => {
      if (!p.value) return null;
      const H = v.value.find((te) => te.name === p.value);
      return (H == null ? void 0 : H.fetch_url) || null;
    }), B = F(() => q.value && !T.value);
    async function A() {
      w.value = !0;
      try {
        const H = await l();
        v.value = H.remotes, await Promise.all(
          H.remotes.map(async (Z) => {
            const U = await i(Z.name);
            U && (h.value[Z.name] = U);
          })
        );
        const te = H.remotes.find((Z) => Z.is_default);
        te ? p.value = te.name : H.remotes.length > 0 && (p.value = H.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        w.value = !1;
      }
    }
    async function I() {
      try {
        N.value = await d();
      } catch {
      }
    }
    async function E(H) {
      _.value = H;
      try {
        await r(H);
        const te = await i(H);
        te && (h.value[H] = te), n("toast", `Fetched from ${H}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        _.value = null;
      }
    }
    async function O(H) {
      x.value = H;
      try {
        await u(H, { force: !1 });
        const te = await i(H);
        te && (h.value[H] = te), n("toast", `Pushed to ${H}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        x.value = null;
      }
    }
    function re(H) {
      p.value = H;
    }
    async function Y() {
      if (q.value) {
        T.value = !0;
        try {
          const H = await m(o.worker.name, {
            import_source: q.value,
            mode: $.value,
            name: P.value || void 0
          });
          H.id ? (n("toast", `Deployment started: ${H.name || H.id}`, "success"), n("deployed")) : H.status === "error" ? n("toast", H.message || "Deployment failed", "error") : n("toast", "Unexpected response from worker", "error");
        } catch (H) {
          n("toast", H instanceof Error ? H.message : "Deployment failed", "error");
        } finally {
          T.value = !1;
        }
      }
    }
    return Qe(() => {
      A(), I();
    }), (H, te) => (a(), M(vt, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: te[5] || (te[5] = (Z) => H.$emit("close"))
    }, {
      body: g(() => [
        s("div", tS, [
          s("div", sS, [
            te[7] || (te[7] = s("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (a(), c("div", oS, "Loading remotes...")) : v.value.length === 0 ? (a(), c("div", nS, [...te[6] || (te[6] = [
              s("span", { class: "empty-icon" }, "🌐", -1),
              s("span", { class: "empty-text" }, "No Git remotes configured", -1),
              s("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (a(), c("div", aS, [
              (a(!0), c(j, null, ge(v.value, (Z) => (a(), M(Pr, {
                key: Z.name,
                remote: Z,
                "sync-status": h.value[Z.name],
                "is-selected": p.value === Z.name,
                "is-fetching": _.value === Z.name,
                "is-pushing": x.value === Z.name,
                onFetch: E,
                onPush: O,
                onSelect: re
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          s("div", lS, [
            te[10] || (te[10] = s("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            s("div", iS, [
              s("label", rS, [
                He(s("input", {
                  type: "radio",
                  "onUpdate:modelValue": te[0] || (te[0] = (Z) => $.value = Z),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, cS), [
                  [qt, $.value]
                ]),
                te[8] || (te[8] = s("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              s("label", uS, [
                He(s("input", {
                  type: "radio",
                  "onUpdate:modelValue": te[1] || (te[1] = (Z) => $.value = Z),
                  value: "native"
                }, null, 512), [
                  [qt, $.value]
                ]),
                te[9] || (te[9] = s("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          s("div", dS, [
            te[11] || (te[11] = s("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            He(s("input", {
              "onUpdate:modelValue": te[2] || (te[2] = (Z) => P.value = Z),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [Nt, P.value]
            ])
          ]),
          N.value ? (a(), c("div", fS, [
            te[12] || (te[12] = s("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            s("div", mS, " ComfyUI: " + f(N.value.comfyui_version) + " • " + f(N.value.node_count) + " nodes • " + f(N.value.model_count) + " models • " + f(N.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          S.value && S.value.ahead > 0 ? (a(), c("div", vS, [
            te[14] || (te[14] = s("span", { class: "warning-icon" }, "⚠", -1)),
            s("div", pS, [
              s("strong", null, f(S.value.ahead) + " unpushed commit" + f(S.value.ahead !== 1 ? "s" : ""), 1),
              s("p", null, "Push to '" + f(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            C(ie, {
              variant: "primary",
              size: "xs",
              loading: x.value === p.value,
              onClick: te[3] || (te[3] = (Z) => p.value && O(p.value))
            }, {
              default: g(() => [...te[13] || (te[13] = [
                b(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        s("div", gS, [
          C(ie, {
            variant: "ghost",
            size: "sm",
            onClick: te[4] || (te[4] = (Z) => H.$emit("close"))
          }, {
            default: g(() => [...te[15] || (te[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          C(ie, {
            variant: "primary",
            size: "sm",
            loading: T.value,
            disabled: !B.value || T.value,
            onClick: Y
          }, {
            default: g(() => [...te[16] || (te[16] = [
              b(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), yS = /* @__PURE__ */ pe(hS, [["__scopeId", "data-v-c12720d3"]]), wS = { class: "custom-tab" }, bS = { class: "section-header" }, _S = { class: "section-actions" }, kS = { class: "workers-content" }, $S = {
  key: 0,
  class: "loading-state"
}, CS = {
  key: 1,
  class: "empty-state"
}, xS = {
  key: 2,
  class: "workers-list"
}, SS = { class: "scan-icon" }, IS = { class: "scan-message" }, ES = /* @__PURE__ */ me({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: t }) {
    const o = t, {
      getCustomWorkers: n,
      addCustomWorker: l,
      removeCustomWorker: i,
      scanForWorkers: r
    } = at(), u = k([]), d = k([]), m = k(!1), v = k(!1), h = k(null), w = k(!1), p = k(!1), _ = k(null), x = k(null);
    async function $() {
      m.value = !0;
      try {
        const A = await n();
        u.value = A.workers;
      } catch (A) {
        o("toast", A instanceof Error ? A.message : "Failed to load workers", "error");
      } finally {
        m.value = !1;
      }
    }
    async function P() {
      v.value = !0, x.value = null;
      try {
        const A = await r(), I = A.discovered.filter(
          (E) => !u.value.some((O) => O.host === E.host && O.port === E.port)
        );
        d.value = I, I.length > 0 ? p.value = !0 : A.discovered.length > 0 ? x.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : x.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (A) {
        o("toast", A instanceof Error ? A.message : "Network scan failed", "error");
      } finally {
        v.value = !1;
      }
    }
    async function N(A) {
      try {
        await l(A), o("toast", `Worker '${A.name}' added`, "success"), w.value = !1, await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function T(A) {
      try {
        await l(A), o("toast", `Worker '${A.name}' added`, "success"), p.value = !1, await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function S(A) {
      h.value = A;
      try {
        await i(A), o("toast", `Worker '${A}' removed`, "success"), await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to remove worker", "error");
      } finally {
        h.value = null;
      }
    }
    function q(A) {
      _.value = A;
    }
    function B() {
      _.value = null, o("deployed");
    }
    return Qe(() => {
      $();
    }), (A, I) => (a(), c("div", wS, [
      s("div", bS, [
        I[8] || (I[8] = s("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        s("div", _S, [
          C(ie, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: P
          }, {
            default: g(() => [...I[6] || (I[6] = [
              b(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          C(ie, {
            variant: "secondary",
            size: "xs",
            onClick: I[0] || (I[0] = (E) => w.value = !0)
          }, {
            default: g(() => [...I[7] || (I[7] = [
              b(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("div", kS, [
        m.value && u.value.length === 0 ? (a(), c("div", $S, [...I[9] || (I[9] = [
          s("span", { class: "spinner" }, null, -1),
          b(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (a(), c("div", CS, [...I[10] || (I[10] = [
          s("div", { class: "empty-card" }, [
            s("span", { class: "empty-text" }, "No workers registered yet"),
            s("p", { class: "empty-help" }, " To add a custom worker: "),
            s("ol", { class: "setup-steps" }, [
              s("li", null, [
                b("On your GPU machine, run:"),
                s("br"),
                s("code", null, "cg-deploy worker setup"),
                s("br"),
                s("code", null, "cg-deploy worker up --broadcast")
              ]),
              s("li", null, 'Click "Scan Network" above or "Add" to enter manually')
            ])
          ], -1)
        ])])) : (a(), c("div", xS, [
          (a(!0), c(j, null, ge(u.value, (E) => (a(), M(w8, {
            key: E.name,
            worker: E,
            "is-action-loading": h.value === E.name,
            onDeploy: q,
            onRemove: S
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      x.value ? (a(), c("div", {
        key: 0,
        class: xe(["scan-result", x.value.type])
      }, [
        s("span", SS, f(x.value.type === "success" ? "✓" : "ⓘ"), 1),
        s("span", IS, f(x.value.message), 1),
        s("button", {
          class: "dismiss-btn",
          onClick: I[1] || (I[1] = (E) => x.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (a(), M(eS, {
        key: 1,
        workers: d.value,
        onClose: I[2] || (I[2] = (E) => p.value = !1),
        onAdd: T
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (a(), M(O8, {
        key: 2,
        onClose: I[3] || (I[3] = (E) => w.value = !1),
        onAdd: N
      })) : y("", !0),
      _.value ? (a(), M(yS, {
        key: 3,
        worker: _.value,
        onClose: I[4] || (I[4] = (E) => _.value = null),
        onToast: I[5] || (I[5] = (E, O) => o("toast", E, O)),
        onDeployed: B
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), TS = /* @__PURE__ */ pe(ES, [["__scopeId", "data-v-1637dead"]]), ca = "ComfyGit.Deploy.GitHubPAT";
function Rr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function PS(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function RS() {
  function e() {
    try {
      return localStorage.getItem(ca);
    } catch {
      return null;
    }
  }
  function t(l) {
    try {
      localStorage.setItem(ca, l);
    } catch (i) {
      console.error("[useGitAuth] Failed to save token:", i);
    }
  }
  function o() {
    try {
      localStorage.removeItem(ca);
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
    isRemoteSsh: Rr,
    isRemoteHttps: PS
  };
}
const MS = { class: "settings-content" }, DS = { class: "settings-section" }, LS = {
  key: 0,
  class: "ssh-warning"
}, OS = { class: "form-row" }, NS = { class: "token-wrapper" }, AS = ["type"], US = { class: "result-icon" }, zS = { class: "result-message" }, FS = { class: "token-actions" }, BS = /* @__PURE__ */ me({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: t }) {
    const o = t, { getToken: n, setToken: l, clearToken: i, hasToken: r } = RS(), { getRemotes: u, testGitAuth: d } = at(), m = k(""), v = k(!1), h = k(!1), w = k(null), p = k(!1), _ = F(() => r());
    Qe(async () => {
      var T;
      const N = n();
      N && (m.value = N);
      try {
        const q = (T = (await u()).remotes) == null ? void 0 : T.find((B) => B.name === "origin");
        q && Rr(q.url) && (p.value = !0);
      } catch {
      }
    });
    async function x() {
      if (m.value) {
        h.value = !0, w.value = null;
        try {
          const N = await d(m.value);
          w.value = {
            type: N.status === "success" ? "success" : "error",
            message: N.message
          };
        } catch (N) {
          w.value = {
            type: "error",
            message: N instanceof Error ? N.message : "Connection test failed"
          };
        } finally {
          h.value = !1;
        }
      }
    }
    function $() {
      m.value && (l(m.value), o("saved"), o("close"));
    }
    function P() {
      i(), m.value = "", w.value = null;
    }
    return (N, T) => (a(), M(vt, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: T[2] || (T[2] = (S) => N.$emit("close"))
    }, {
      body: g(() => [
        s("div", MS, [
          s("div", DS, [
            T[8] || (T[8] = s("div", { class: "section-header" }, [
              s("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            T[9] || (T[9] = s("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (a(), c("div", LS, [...T[3] || (T[3] = [
              s("span", { class: "warning-icon" }, "!", -1),
              s("div", { class: "warning-content" }, [
                s("strong", null, "SSH remote detected"),
                s("p", null, [
                  b("PAT authentication only works with HTTPS remotes. Consider converting your remote URL from "),
                  s("code", null, "git@github.com:..."),
                  b(" to "),
                  s("code", null, "https://github.com/...")
                ])
              ], -1)
            ])])) : y("", !0),
            s("div", OS, [
              T[4] || (T[4] = s("label", { class: "form-label" }, "Personal Access Token", -1)),
              s("div", NS, [
                He(s("input", {
                  "onUpdate:modelValue": T[0] || (T[0] = (S) => m.value = S),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, AS), [
                  [Gn, m.value]
                ]),
                s("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: T[1] || (T[1] = (S) => v.value = !v.value)
                }, f(v.value ? "Hide" : "Show"), 1)
              ]),
              T[5] || (T[5] = s("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            w.value ? (a(), c("div", {
              key: 1,
              class: xe(["test-result", w.value.type])
            }, [
              s("span", US, f(w.value.type === "success" ? "✓" : "✕"), 1),
              s("span", zS, f(w.value.message), 1)
            ], 2)) : y("", !0),
            s("div", FS, [
              C(ie, {
                variant: "ghost",
                size: "sm",
                loading: h.value,
                disabled: !m.value || h.value,
                onClick: x
              }, {
                default: g(() => [...T[6] || (T[6] = [
                  b(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              _.value ? (a(), M(ie, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: P
              }, {
                default: g(() => [...T[7] || (T[7] = [
                  b(" Clear ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ])
      ]),
      footer: g(() => [
        C(ie, {
          variant: "primary",
          size: "sm",
          disabled: !m.value,
          onClick: $
        }, {
          default: g(() => [...T[10] || (T[10] = [
            b(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), VS = /* @__PURE__ */ pe(BS, [["__scopeId", "data-v-b21588ad"]]), WS = /* @__PURE__ */ me({
  __name: "DeploySection",
  emits: ["toast", "navigate"],
  setup(e, { emit: t }) {
    const o = t, {
      instances: n,
      isLoading: l,
      liveInstanceCount: i,
      refreshInstances: r,
      stopInstance: u,
      startInstance: d,
      terminateInstance: m,
      startPolling: v,
      stopPolling: h
    } = Tr(), w = k(!1), p = k(!1), _ = k("instances"), x = k(null), $ = k(null), P = F(() => [
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
    async function N(A) {
      x.value = A.id;
      try {
        await u(A), o("toast", "Instance stopped", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to stop instance", "error");
      } finally {
        x.value = null;
      }
    }
    async function T(A) {
      x.value = A.id;
      try {
        await d(A), o("toast", "Instance starting...", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to start instance", "error");
      } finally {
        x.value = null;
      }
    }
    function S(A) {
      $.value = A;
    }
    async function q() {
      const A = $.value;
      if (A) {
        $.value = null, x.value = A.id;
        try {
          await m(A), o("toast", "Instance terminated", "success");
        } catch (I) {
          o("toast", I instanceof Error ? I.message : "Failed to terminate instance", "error");
        } finally {
          x.value = null;
        }
      }
    }
    async function B() {
      await r(), _.value = "instances";
    }
    return Qe(() => {
      r(), v();
    }), wo(() => {
      h();
    }), (A, I) => (a(), c(j, null, [
      C(Tt, null, {
        header: g(() => [
          C(Pt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: I[1] || (I[1] = (E) => w.value = !0)
          }, {
            actions: g(() => [
              C(ie, {
                variant: "ghost",
                size: "xs",
                onClick: I[0] || (I[0] = (E) => p.value = !0)
              }, {
                default: g(() => [...I[10] || (I[10] = [
                  b(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          C(_r, {
            modelValue: _.value,
            "onUpdate:modelValue": I[2] || (I[2] = (E) => _.value = E),
            tabs: P.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: g(() => [
          _.value === "instances" ? (a(), M(a5, {
            key: 0,
            instances: Ue(n),
            "is-loading": Ue(l),
            "action-loading-id": x.value,
            onRefresh: Ue(r),
            onStop: N,
            onStart: T,
            onTerminate: S
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          _.value === "runpod" ? (a(), M(s8, {
            key: 1,
            onToast: I[3] || (I[3] = (E, O) => o("toast", E, O)),
            onNavigate: I[4] || (I[4] = (E) => o("navigate", E)),
            onDeployed: B
          })) : y("", !0),
          _.value === "custom" ? (a(), M(TS, {
            key: 2,
            onToast: I[5] || (I[5] = (E, O) => o("toast", E, O)),
            onDeployed: B
          })) : y("", !0)
        ]),
        _: 1
      }),
      $.value ? (a(), M(Ya, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${$.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: q,
        onCancel: I[6] || (I[6] = (E) => $.value = null)
      }, null, 8, ["message"])) : y("", !0),
      C(ss, {
        show: w.value,
        title: "Deploy to Cloud",
        onClose: I[7] || (I[7] = (E) => w.value = !1)
      }, {
        content: g(() => [...I[11] || (I[11] = [
          s("div", { class: "deploy-info" }, [
            s("div", { class: "info-section" }, [
              s("strong", null, "What is Deploy?"),
              s("p", null, "Deploy lets you run your ComfyUI environment on cloud GPU instances using your own RunPod account (BYOK - Bring Your Own Key).")
            ]),
            s("div", { class: "info-section" }, [
              s("strong", null, "What gets deployed:"),
              s("ul", null, [
                s("li", null, [
                  s("strong", null, "Workflows"),
                  b(" - All committed workflows")
                ]),
                s("li", null, [
                  s("strong", null, "Custom Nodes"),
                  b(" - Installed automatically")
                ]),
                s("li", null, [
                  s("strong", null, "Models"),
                  b(" - Downloaded from sources (when available)")
                ]),
                s("li", null, [
                  s("strong", null, "Configuration"),
                  b(" - Environment settings")
                ])
              ])
            ]),
            s("div", { class: "info-section" }, [
              s("strong", null, "Cost Information:"),
              s("p", null, "You pay RunPod directly for GPU time. Costs vary by GPU type and cloud tier. Monitor your spend at runpod.io.")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), M(VS, {
        key: 1,
        onClose: I[8] || (I[8] = (E) => p.value = !1),
        onSaved: I[9] || (I[9] = (E) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), GS = /* @__PURE__ */ pe(WS, [["__scopeId", "data-v-d4e32a10"]]), jS = { class: "header-info" }, HS = { class: "commit-hash" }, KS = {
  key: 0,
  class: "commit-refs"
}, qS = { class: "commit-message" }, YS = { class: "commit-date" }, JS = {
  key: 0,
  class: "loading"
}, XS = {
  key: 1,
  class: "changes-section"
}, QS = { class: "stats-row" }, ZS = { class: "stat" }, e4 = { class: "stat insertions" }, t4 = { class: "stat deletions" }, s4 = {
  key: 0,
  class: "change-group"
}, o4 = {
  key: 1,
  class: "change-group"
}, n4 = {
  key: 0,
  class: "version"
}, a4 = {
  key: 2,
  class: "change-group"
}, l4 = { class: "change-item" }, i4 = /* @__PURE__ */ me({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const t = e, { getCommitDetail: o } = at(), n = k(null), l = k(!0), i = F(() => {
      if (!n.value) return !1;
      const u = n.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), r = F(() => {
      if (!n.value) return !1;
      const u = n.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return Qe(async () => {
      try {
        n.value = await o(t.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (a(), M(vt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (m) => u.$emit("close"))
    }, {
      header: g(() => {
        var m, v, h, w;
        return [
          s("div", jS, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", HS, f(((m = n.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (h = n.value) == null ? void 0 : h.refs) != null && w.length ? (a(), c("span", KS, [
              (a(!0), c(j, null, ge(n.value.refs, (p) => (a(), c("span", {
                key: p,
                class: "ref-badge"
              }, f(p), 1))), 128))
            ])) : y("", !0)
          ]),
          C(Me, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (p) => u.$emit("close"))
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
        var m, v;
        return [
          s("div", qS, f(((m = n.value) == null ? void 0 : m.message) || e.commit.message), 1),
          s("div", YS, f(((v = n.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), c("div", JS, "Loading details...")) : n.value ? (a(), c("div", XS, [
            s("div", QS, [
              s("span", ZS, f(n.value.stats.files_changed) + " files", 1),
              s("span", e4, "+" + f(n.value.stats.insertions), 1),
              s("span", t4, "-" + f(n.value.stats.deletions), 1)
            ]),
            i.value ? (a(), c("div", s4, [
              C(zo, { variant: "section" }, {
                default: g(() => [...d[6] || (d[6] = [
                  b("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), c(j, null, ge(n.value.changes.workflows.added, (h) => (a(), c("div", {
                key: "add-" + h,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, f(h), 1)
              ]))), 128)),
              (a(!0), c(j, null, ge(n.value.changes.workflows.modified, (h) => (a(), c("div", {
                key: "mod-" + h,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, f(h), 1)
              ]))), 128)),
              (a(!0), c(j, null, ge(n.value.changes.workflows.deleted, (h) => (a(), c("div", {
                key: "del-" + h,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, f(h), 1)
              ]))), 128))
            ])) : y("", !0),
            r.value ? (a(), c("div", o4, [
              C(zo, { variant: "section" }, {
                default: g(() => [...d[10] || (d[10] = [
                  b("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), c(j, null, ge(n.value.changes.nodes.added, (h) => (a(), c("div", {
                key: "add-" + h.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, f(h.name), 1),
                h.version ? (a(), c("span", n4, "(" + f(h.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), c(j, null, ge(n.value.changes.nodes.removed, (h) => (a(), c("div", {
                key: "rem-" + h.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, f(h.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), c("div", a4, [
              C(zo, { variant: "section" }, {
                default: g(() => [...d[13] || (d[13] = [
                  b("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", l4, [
                d[14] || (d[14] = s("span", { class: "change-icon" }, "●", -1)),
                s("span", null, f(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: g(() => [
        C(Me, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (m) => u.$emit("createBranch", e.commit))
        }, {
          default: g(() => [...d[15] || (d[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        C(Me, {
          variant: "primary",
          onClick: d[2] || (d[2] = (m) => u.$emit("checkout", e.commit))
        }, {
          default: g(() => [...d[16] || (d[16] = [
            b(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), r4 = /* @__PURE__ */ pe(i4, [["__scopeId", "data-v-d256ff6d"]]), c4 = { class: "base-textarea-wrapper" }, u4 = ["value", "rows", "placeholder", "disabled", "maxlength"], d4 = {
  key: 0,
  class: "base-textarea-count"
}, f4 = /* @__PURE__ */ me({
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
    function l(i) {
      i.shiftKey || i.ctrlKey || i.metaKey || o.submitOnEnter && (i.preventDefault(), n("submit"));
    }
    return (i, r) => (a(), c("div", c4, [
      s("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: r[0] || (r[0] = (u) => i.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          r[1] || (r[1] = Jt(nt((u) => i.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          r[2] || (r[2] = Jt(nt((u) => i.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Jt(l, ["enter"])
        ]
      }, null, 40, u4),
      e.showCharCount && e.maxLength ? (a(), c("div", d4, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), Hl = /* @__PURE__ */ pe(f4, [["__scopeId", "data-v-c6d16c93"]]), m4 = ["checked", "disabled"], v4 = { class: "base-checkbox-box" }, p4 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, g4 = {
  key: 0,
  class: "base-checkbox-label"
}, h4 = /* @__PURE__ */ me({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), c("label", {
      class: xe(["base-checkbox", { disabled: e.disabled }])
    }, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked))
      }, null, 40, m4),
      s("span", v4, [
        e.modelValue ? (a(), c("svg", p4, [...o[1] || (o[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      t.$slots.default ? (a(), c("span", g4, [
        Ge(t.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Kl = /* @__PURE__ */ pe(h4, [["__scopeId", "data-v-bf17c831"]]), y4 = { class: "popover-header" }, w4 = { class: "popover-body" }, b4 = {
  key: 0,
  class: "changes-summary"
}, _4 = {
  key: 0,
  class: "change-item"
}, k4 = {
  key: 1,
  class: "change-item"
}, $4 = {
  key: 2,
  class: "change-item"
}, C4 = {
  key: 3,
  class: "change-item"
}, x4 = {
  key: 4,
  class: "change-item"
}, S4 = {
  key: 5,
  class: "change-item"
}, I4 = {
  key: 1,
  class: "no-changes"
}, E4 = {
  key: 2,
  class: "loading"
}, T4 = {
  key: 3,
  class: "issues-error"
}, P4 = { class: "error-header" }, R4 = { class: "error-title" }, M4 = { class: "issues-list" }, D4 = { class: "message-section" }, L4 = { class: "popover-footer" }, O4 = {
  key: 1,
  class: "commit-popover"
}, N4 = { class: "popover-header" }, A4 = { class: "popover-body" }, U4 = {
  key: 0,
  class: "changes-summary"
}, z4 = {
  key: 0,
  class: "change-item"
}, F4 = {
  key: 1,
  class: "change-item"
}, B4 = {
  key: 2,
  class: "change-item"
}, V4 = {
  key: 3,
  class: "change-item"
}, W4 = {
  key: 4,
  class: "change-item"
}, G4 = {
  key: 5,
  class: "change-item"
}, j4 = {
  key: 1,
  class: "no-changes"
}, H4 = {
  key: 2,
  class: "loading"
}, K4 = {
  key: 3,
  class: "issues-error"
}, q4 = { class: "error-header" }, Y4 = { class: "error-title" }, J4 = { class: "issues-list" }, X4 = { class: "message-section" }, Q4 = { class: "popover-footer" }, Z4 = /* @__PURE__ */ me({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { commit: l } = at(), i = k(""), r = k(!1), u = k(!1), d = F(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), m = F(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, x = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || x.nodes_added.length > 0 || x.nodes_removed.length > 0;
    }), v = F(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter(
        (x) => x.has_issues && (x.sync_state === "new" || x.sync_state === "modified")
      ) : [];
    }), h = F(() => v.value.length > 0), w = F(() => h.value && !u.value);
    async function p() {
      var _, x, $;
      if (!(h.value && !u.value) && !(!d.value || !i.value.trim() || r.value)) {
        r.value = !0;
        try {
          const P = await l(i.value.trim(), u.value);
          if (P.status === "success") {
            const N = `Committed: ${((_ = P.summary) == null ? void 0 : _.new) || 0} new, ${((x = P.summary) == null ? void 0 : x.modified) || 0} modified, ${(($ = P.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            n("committed", { success: !0, message: N });
          } else P.status === "no_changes" ? n("committed", { success: !1, message: "No changes to commit" }) : P.status === "blocked" ? n("committed", { success: !1, message: 'Commit blocked - enable "Allow issues" to force commit' }) : n("committed", { success: !1, message: P.message || "Commit failed" });
        } catch (P) {
          n("committed", { success: !1, message: P instanceof Error ? P.message : "Commit failed" });
        } finally {
          r.value = !1;
        }
      }
    }
    return (_, x) => e.asModal ? (a(), M(ht, {
      key: 0,
      to: "body"
    }, [
      s("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = ($) => n("close"))
      }, [
        s("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = nt(() => {
          }, ["stop"]))
        }, [
          s("div", y4, [
            x[11] || (x[11] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            s("button", {
              class: "close-btn",
              onClick: x[0] || (x[0] = ($) => n("close"))
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
          s("div", w4, [
            e.status && d.value ? (a(), c("div", b4, [
              e.status.workflows.new.length ? (a(), c("div", _4, [
                x[12] || (x[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), c("div", k4, [
                x[13] || (x[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), c("div", $4, [
                x[14] || (x[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), c("div", C4, [
                x[15] || (x[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), c("div", x4, [
                x[16] || (x[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (a(), c("div", S4, [...x[17] || (x[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), c("div", I4, " No changes to commit ")) : (a(), c("div", E4, " Loading... ")),
            h.value ? (a(), c("div", T4, [
              s("div", P4, [
                x[18] || (x[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", R4, f(v.value.length) + " workflow(s) can't run", 1)
              ]),
              s("div", M4, [
                (a(!0), c(j, null, ge(v.value, ($) => (a(), c("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  s("strong", null, f($.name), 1),
                  b(": " + f($.issue_summary), 1)
                ]))), 128))
              ]),
              C(Kl, {
                modelValue: u.value,
                "onUpdate:modelValue": x[1] || (x[1] = ($) => u.value = $),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...x[19] || (x[19] = [
                  b(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            s("div", D4, [
              C(Hl, {
                modelValue: i.value,
                "onUpdate:modelValue": x[2] || (x[2] = ($) => i.value = $),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || r.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: p,
                onSubmit: p
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          s("div", L4, [
            C(Me, {
              variant: "secondary",
              onClick: x[3] || (x[3] = ($) => n("close"))
            }, {
              default: g(() => [...x[20] || (x[20] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !i.value.trim() || r.value || w.value,
              loading: r.value,
              onClick: p
            }, {
              default: g(() => [
                b(f(r.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (a(), c("div", O4, [
      s("div", N4, [
        x[22] || (x[22] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        s("button", {
          class: "close-btn",
          onClick: x[6] || (x[6] = ($) => n("close"))
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
      s("div", A4, [
        e.status && d.value ? (a(), c("div", U4, [
          e.status.workflows.new.length ? (a(), c("div", z4, [
            x[23] || (x[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), c("div", F4, [
            x[24] || (x[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), c("div", B4, [
            x[25] || (x[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), c("div", V4, [
            x[26] || (x[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), c("div", W4, [
            x[27] || (x[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (a(), c("div", G4, [...x[28] || (x[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), c("div", j4, " No changes to commit ")) : (a(), c("div", H4, " Loading... ")),
        h.value ? (a(), c("div", K4, [
          s("div", q4, [
            x[29] || (x[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", Y4, f(v.value.length) + " workflow(s) can't run", 1)
          ]),
          s("div", J4, [
            (a(!0), c(j, null, ge(v.value, ($) => (a(), c("div", {
              key: $.name,
              class: "issue-item"
            }, [
              s("strong", null, f($.name), 1),
              b(": " + f($.issue_summary), 1)
            ]))), 128))
          ]),
          C(Kl, {
            modelValue: u.value,
            "onUpdate:modelValue": x[7] || (x[7] = ($) => u.value = $),
            class: "allow-issues-toggle"
          }, {
            default: g(() => [...x[30] || (x[30] = [
              b(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        s("div", X4, [
          C(Hl, {
            modelValue: i.value,
            "onUpdate:modelValue": x[8] || (x[8] = ($) => i.value = $),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || r.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: p,
            onSubmit: p
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      s("div", Q4, [
        C(Me, {
          variant: "secondary",
          onClick: x[9] || (x[9] = ($) => n("close"))
        }, {
          default: g(() => [...x[31] || (x[31] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        C(Me, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !i.value.trim() || r.value || w.value,
          loading: r.value,
          onClick: p
        }, {
          default: g(() => [
            b(f(r.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Mr = /* @__PURE__ */ pe(Z4, [["__scopeId", "data-v-d0fe6172"]]), e6 = { class: "modal-header" }, t6 = { class: "modal-body" }, s6 = { class: "switch-message" }, o6 = { class: "switch-details" }, n6 = { class: "modal-actions" }, a6 = /* @__PURE__ */ me({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (a(), M(ht, { to: "body" }, [
      e.show ? (a(), c("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = nt(() => {
          }, ["stop"]))
        }, [
          s("div", e6, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", t6, [
            s("p", s6, [
              o[6] || (o[6] = b(" Switch from ", -1)),
              s("strong", null, f(e.fromEnvironment), 1),
              o[7] || (o[7] = b(" to ", -1)),
              s("strong", null, f(e.toEnvironment), 1),
              o[8] || (o[8] = b("? ", -1))
            ]),
            o[9] || (o[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This will restart ComfyUI")
            ], -1)),
            s("p", o6, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = s("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          s("div", n6, [
            C(ie, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => t.$emit("close"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(ie, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
            }, {
              default: g(() => [...o[12] || (o[12] = [
                b(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), l6 = /* @__PURE__ */ pe(a6, [["__scopeId", "data-v-e9c5253e"]]), i6 = {
  key: 0,
  class: "modal-overlay"
}, r6 = { class: "modal-content" }, c6 = { class: "modal-body" }, u6 = { class: "progress-info" }, d6 = { class: "progress-percentage" }, f6 = { class: "progress-state" }, m6 = { class: "switch-steps" }, v6 = { class: "step-icon" }, p6 = { class: "step-label" }, g6 = /* @__PURE__ */ me({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const t = e, o = F(() => {
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
      return t.message || i[t.state] || t.state;
    }), n = F(() => t.state === "complete" ? "success" : t.state === "critical_failure" || t.state === "rolled_back" ? "error" : "default"), l = F(() => {
      const i = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], r = i.findIndex((u) => u.state === t.state);
      return i.map((u, d) => {
        let m = "pending", v = "○";
        return d < r ? (m = "completed", v = "✓") : d === r && (m = "active", v = "⟳"), {
          ...u,
          status: m,
          icon: v
        };
      });
    });
    return (i, r) => (a(), M(ht, { to: "body" }, [
      e.show ? (a(), c("div", i6, [
        s("div", r6, [
          r[1] || (r[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", c6, [
            C(jn, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            s("div", u6, [
              s("div", d6, f(e.progress) + "%", 1),
              s("div", f6, f(o.value), 1)
            ]),
            s("div", m6, [
              (a(!0), c(j, null, ge(l.value, (u) => (a(), c("div", {
                key: u.state,
                class: xe(["switch-step", u.status])
              }, [
                s("span", v6, f(u.icon), 1),
                s("span", p6, f(u.label), 1)
              ], 2))), 128))
            ]),
            r[0] || (r[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), h6 = /* @__PURE__ */ pe(g6, [["__scopeId", "data-v-768a5078"]]), y6 = { class: "modal-header" }, w6 = { class: "modal-body" }, b6 = {
  key: 0,
  class: "node-section"
}, _6 = { class: "node-list" }, k6 = {
  key: 1,
  class: "node-section"
}, $6 = { class: "node-list" }, C6 = { class: "modal-actions" }, x6 = /* @__PURE__ */ me({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (a(), M(ht, { to: "body" }, [
      e.show ? (a(), c("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = nt(() => {
          }, ["stop"]))
        }, [
          s("div", y6, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", w6, [
            o[8] || (o[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), c("div", b6, [
              o[6] || (o[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", _6, [
                (a(!0), c(j, null, ge(e.mismatchDetails.missing_nodes, (n) => (a(), c("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), c("div", k6, [
              o[7] || (o[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", $6, [
                (a(!0), c(j, null, ge(e.mismatchDetails.extra_nodes, (n) => (a(), c("div", {
                  key: n,
                  class: "node-item remove"
                }, " - " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            o[9] || (o[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This may take several minutes")
            ], -1))
          ]),
          s("div", C6, [
            C(ie, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => t.$emit("close"))
            }, {
              default: g(() => [...o[10] || (o[10] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(ie, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                b(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), S6 = /* @__PURE__ */ pe(x6, [["__scopeId", "data-v-7cad7518"]]), I6 = [
  {
    id: "sponsor",
    url: "https://github.com/sponsors/comfyhub-org",
    title: "Sponsor ComfyHub",
    ariaLabel: "Sponsor ComfyHub on GitHub",
    iconPath: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z",
    label: "Sponsor"
  },
  {
    id: "discord",
    url: "https://discord.gg/2h5rSTeh6Y",
    title: "Join Discord",
    ariaLabel: "Join ComfyHub Discord",
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
    url: "https://github.com/comfyhub-org/comfygit",
    title: "View on GitHub",
    ariaLabel: "View ComfyGit on GitHub",
    iconPath: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
  },
  {
    id: "docs",
    url: "https://docs.comfyhub.org/comfygit/",
    title: "Documentation",
    ariaLabel: "View ComfyGit Documentation",
    iconPath: "M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
  }
], E6 = "v0.0.11", T6 = "Akatz", P6 = { class: "social-buttons" }, R6 = ["title", "aria-label", "onClick"], M6 = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, D6 = ["d"], L6 = ["title", "aria-label", "onClick"], O6 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, N6 = ["d"], A6 = /* @__PURE__ */ me({
  __name: "SocialButtons",
  setup(e) {
    function t(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), c("div", P6, [
      (a(!0), c(j, null, ge(Ue(I6), (l) => (a(), c(j, {
        key: l.id
      }, [
        l.label ? (a(), c("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => t(l.url)
        }, [
          b(f(l.label) + " ", 1),
          (a(), c("svg", M6, [
            s("path", {
              d: l.iconPath
            }, null, 8, D6)
          ]))
        ], 8, R6)) : (a(), c("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => t(l.url)
        }, [
          (a(), c("svg", O6, [
            s("path", {
              d: l.iconPath
            }, null, 8, N6)
          ]))
        ], 8, L6))
      ], 64))), 128))
    ]));
  }
}), Dr = /* @__PURE__ */ pe(A6, [["__scopeId", "data-v-4f846342"]]), U6 = { class: "footer-info" }, z6 = { class: "version" }, F6 = { class: "made-by" }, B6 = /* @__PURE__ */ me({
  __name: "FooterInfo",
  setup(e) {
    return (t, o) => (a(), c("div", U6, [
      s("span", z6, f(Ue(E6)), 1),
      s("span", F6, [
        o[0] || (o[0] = b(" made with ", -1)),
        o[1] || (o[1] = s("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          s("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        b(" by " + f(Ue(T6)), 1)
      ])
    ]));
  }
}), Lr = /* @__PURE__ */ pe(B6, [["__scopeId", "data-v-8bc3db0a"]]), V6 = /* @__PURE__ */ me({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = k(null);
    async function n() {
      var i;
      await ((i = o.value) == null ? void 0 : i.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (i, r) => (a(), M(vt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: r[1] || (r[1] = (u) => i.$emit("close"))
    }, {
      body: g(() => [
        C(br, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: g(() => {
        var u;
        return [
          C(Me, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: n
          }, {
            default: g(() => [...r[2] || (r[2] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Me, {
            variant: "secondary",
            onClick: r[0] || (r[0] = (d) => i.$emit("close"))
          }, {
            default: g(() => [...r[3] || (r[3] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), W6 = /* @__PURE__ */ pe(V6, [["__scopeId", "data-v-fac00ae7"]]), G6 = { class: "header-actions" }, j6 = {
  key: 0,
  class: "wizard-step"
}, H6 = { class: "form-field" }, K6 = ["placeholder"], q6 = {
  key: 0,
  class: "form-error"
}, Y6 = { class: "form-field form-field--checkbox" }, J6 = { class: "form-checkbox" }, X6 = {
  key: 0,
  class: "form-field"
}, Q6 = ["placeholder"], Z6 = {
  key: 0,
  class: "form-info"
}, eI = {
  key: 1,
  class: "form-suggestion"
}, tI = {
  key: 2,
  class: "form-error"
}, sI = {
  key: 3,
  class: "form-info"
}, oI = {
  key: 1,
  class: "wizard-step"
}, nI = {
  key: 0,
  class: "progress-check-loading"
}, aI = {
  key: 0,
  class: "cli-warning"
}, lI = { class: "cli-warning-header" }, iI = {
  key: 1,
  class: "env-landing"
}, rI = { class: "env-list" }, cI = ["value"], uI = { class: "env-name" }, dI = {
  key: 2,
  class: "env-create"
}, fI = { class: "form-field" }, mI = { class: "form-field" }, vI = ["value"], pI = { class: "form-field" }, gI = ["disabled"], hI = ["value"], yI = { class: "form-field" }, wI = ["value"], bI = { class: "form-field form-field--checkbox" }, _I = { class: "form-checkbox" }, kI = {
  key: 0,
  class: "form-error"
}, $I = {
  key: 1,
  class: "env-creating"
}, CI = { class: "creating-intro" }, xI = {
  key: 3,
  class: "env-import"
}, SI = { class: "wizard-footer" }, II = { class: "wizard-footer-actions" }, no = 10, EI = 600 * 1e3, ql = 1800 * 1e3, TI = /* @__PURE__ */ me({
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
      getInitializeProgress: i,
      validatePath: r,
      createEnvironment: u,
      getCreateProgress: d,
      getImportProgress: m,
      getComfyUIReleases: v
    } = at(), h = k(o.initialStep || 1), w = k(null), p = k("landing"), _ = k(!1), x = k(!1), $ = k(!1), P = k(!1), N = k(null), T = k(o.initialStep === 2), S = k(o.defaultPath), q = k(!!o.detectedModelsDir), B = k(o.detectedModelsDir || ""), A = k(null), I = k(null), E = k(null), O = k(null), re = k("my-new-env"), Y = k(Cr), H = k("latest"), te = k(xr), Z = k(!0), U = k(null), z = k(null), R = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), be = k(!1), ve = k(!1), Ee = k(!1), De = k({ progress: 0, message: "" }), je = k({ progress: 0, message: "" }), Je = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], _e = k(0), Se = k(null), Ve = k(0), ye = k(null), le = F(() => {
      var D, W;
      const ee = (D = S.value) == null ? void 0 : D.trim(), K = !A.value, X = !q.value || !I.value && ((W = B.value) == null ? void 0 : W.trim());
      return ee && K && X;
    }), Fe = F(() => {
      var ee;
      return (ee = re.value) == null ? void 0 : ee.trim();
    }), Ie = F(() => !!(h.value === 2 || z.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), L = F(() => z.value || o.workspacePath || null);
    async function V() {
      var ee;
      if (A.value = null, !!((ee = S.value) != null && ee.trim()))
        try {
          const K = await r({ path: S.value, type: "workspace" });
          K.valid || (A.value = K.error || "Invalid path");
        } catch (K) {
          A.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function oe() {
      var ee;
      if (I.value = null, E.value = null, O.value = null, !!((ee = B.value) != null && ee.trim()))
        try {
          const K = await r({ path: B.value, type: "models" });
          if (K.valid)
            O.value = K.model_count ?? null;
          else if (I.value = K.error || "Invalid path", K.suggestion) {
            E.value = K.suggestion, B.value = K.suggestion, I.value = null;
            const X = await r({ path: K.suggestion, type: "models" });
            X.valid && (O.value = X.model_count ?? null);
          }
        } catch (K) {
          I.value = K instanceof Error ? K.message : "Validation failed";
        }
    }
    async function ae() {
      var ee, K, X, D, W;
      if (A.value = null, I.value = null, await V(), (ee = A.value) != null && ee.includes("already exists")) {
        A.value = null, z.value = ((K = S.value) == null ? void 0 : K.trim()) || o.defaultPath, h.value = 2, fe();
        return;
      }
      if (!A.value && !(q.value && ((X = B.value) != null && X.trim()) && (await oe(), I.value))) {
        ve.value = !0;
        try {
          await l({
            workspace_path: ((D = S.value) == null ? void 0 : D.trim()) || o.defaultPath,
            models_directory: q.value && ((W = B.value) == null ? void 0 : W.trim()) || null
          }), _e.value = 0, Se.value = Date.now();
          const ce = setInterval(async () => {
            var Te;
            if (Se.value && Date.now() - Se.value > EI) {
              clearInterval(ce), ve.value = !1, A.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Ke = await i();
              if (_e.value = 0, Ke.state === "idle" && ve.value) {
                clearInterval(ce), ve.value = !1, A.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              De.value = { progress: Ke.progress, message: Ke.message }, Ke.state === "complete" ? (clearInterval(ce), ve.value = !1, z.value = ((Te = S.value) == null ? void 0 : Te.trim()) || o.defaultPath, h.value = 2, fe()) : Ke.state === "error" && (clearInterval(ce), ve.value = !1, A.value = Ke.error || "Workspace creation failed");
            } catch (Ke) {
              _e.value++, console.warn(`Polling failure ${_e.value}/${no}:`, Ke), _e.value >= no && (clearInterval(ce), ve.value = !1, A.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (ce) {
          ve.value = !1, A.value = ce instanceof Error ? ce.message : "Failed to create workspace";
        }
      }
    }
    async function de() {
      Ee.value = !0, U.value = null;
      try {
        const ee = {
          name: re.value.trim() || "my-new-env",
          python_version: Y.value,
          comfyui_version: H.value,
          torch_backend: te.value,
          switch_after: Z.value,
          workspace_path: z.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(ee)).status === "started") {
          Ve.value = 0, ye.value = Date.now();
          const X = setInterval(async () => {
            if (ye.value && Date.now() - ye.value > ql) {
              clearInterval(X), Ee.value = !1, U.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const D = await d();
              if (Ve.value = 0, D.state === "idle" && Ee.value) {
                clearInterval(X), Ee.value = !1, U.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (je.value = {
                progress: D.progress ?? 0,
                message: D.message,
                phase: D.phase
              }, D.state === "complete") {
                clearInterval(X), Ee.value = !1;
                const W = D.environment_name || ee.name;
                Z.value ? n("complete", W, z.value) : (p.value = "landing", n("environment-created-no-switch", W));
              } else D.state === "error" && (clearInterval(X), Ee.value = !1, U.value = D.error || "Environment creation failed");
            } catch (D) {
              Ve.value++, console.warn(`Polling failure ${Ve.value}/${no}:`, D), Ve.value >= no && (clearInterval(X), Ee.value = !1, U.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ee) {
        Ee.value = !1, U.value = ee instanceof Error ? ee.message : "Unknown error";
      }
    }
    async function fe() {
      be.value = !0;
      try {
        R.value = await v();
      } catch (ee) {
        console.error("Failed to load ComfyUI releases:", ee);
      } finally {
        be.value = !1;
      }
    }
    function ke() {
      w.value && n("switch-environment", w.value, z.value);
    }
    function $e() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : h.value === 2 && o.setupState === "no_workspace" && (h.value = 1);
    }
    function ne(ee, K) {
      x.value = !1, K ? n("complete", ee, z.value) : (n("environment-created-no-switch", ee), p.value = "landing");
    }
    function ue() {
    }
    Qe(async () => {
      if (o.detectedModelsDir && (B.value = o.detectedModelsDir), o.workspacePath && (z.value = o.workspacePath), h.value === 2) {
        fe();
        const ee = setTimeout(() => {
          T.value = !1;
        }, 3e3);
        await Re(), clearTimeout(ee), T.value = !1;
      }
    });
    async function Re() {
      try {
        const ee = await d();
        if (console.log("[ComfyGit] Create progress check:", ee.state, ee), ee.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ee.environment_name), p.value = "create", Ee.value = !0, re.value = ee.environment_name || "my-new-env", je.value = {
            progress: ee.progress ?? 0,
            message: ee.message,
            phase: ee.phase
          }, Ce();
          return;
        }
      } catch (ee) {
        console.log("[ComfyGit] Create progress check failed:", ee);
      }
      try {
        const ee = await m();
        console.log("[ComfyGit] Import progress check:", ee.state, ee), ee.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ee.environment_name), N.value = {
          message: ee.message || "Importing...",
          phase: ee.phase || "",
          progress: ee.progress ?? 0,
          environmentName: ee.environment_name || ""
        }, P.value = !0, p.value = "import", x.value = !0);
      } catch (ee) {
        console.log("[ComfyGit] Import progress check failed:", ee);
      }
    }
    async function Ce() {
      Ve.value = 0, ye.value = Date.now();
      let ee = null;
      const K = async () => {
        if (ye.value && Date.now() - ye.value > ql)
          return ee && clearInterval(ee), Ee.value = !1, U.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const D = await d();
          if (Ve.value = 0, D.state === "idle" && Ee.value)
            return ee && clearInterval(ee), Ee.value = !1, U.value = "Environment creation was interrupted. Please try again.", !1;
          if (je.value = {
            progress: D.progress ?? 0,
            message: D.message,
            phase: D.phase
          }, D.state === "complete") {
            ee && clearInterval(ee), Ee.value = !1;
            const W = D.environment_name || re.value;
            return n("complete", W, z.value), !1;
          } else if (D.state === "error")
            return ee && clearInterval(ee), Ee.value = !1, U.value = D.error || "Environment creation failed", !1;
          return !0;
        } catch (D) {
          return Ve.value++, console.warn(`Polling failure ${Ve.value}/${no}:`, D), Ve.value >= no ? (ee && clearInterval(ee), Ee.value = !1, U.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await K() && (ee = setInterval(async () => {
        !await K() && ee && clearInterval(ee);
      }, 2e3));
    }
    return (ee, K) => (a(), c(j, null, [
      C(vt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: K[15] || (K[15] = (X) => ee.$emit("close"))
      }, {
        header: g(() => [
          K[20] || (K[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", G6, [
            C(Dr),
            K[19] || (K[19] = s("span", { class: "header-divider" }, null, -1)),
            Ie.value ? (a(), c("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: K[0] || (K[0] = (X) => _.value = !0)
            }, [...K[17] || (K[17] = [
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
              onClick: K[1] || (K[1] = (X) => ee.$emit("close")),
              title: "Close"
            }, [...K[18] || (K[18] = [
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
          var X;
          return [
            h.value === 1 ? (a(), c("div", j6, [
              K[24] || (K[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", H6, [
                K[21] || (K[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                He(s("input", {
                  "onUpdate:modelValue": K[2] || (K[2] = (D) => S.value = D),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, K6), [
                  [Nt, S.value]
                ]),
                A.value ? (a(), c("p", q6, f(A.value), 1)) : y("", !0)
              ]),
              s("div", Y6, [
                s("label", J6, [
                  He(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": K[3] || (K[3] = (D) => q.value = D)
                  }, null, 512), [
                    [Yo, q.value]
                  ]),
                  K[22] || (K[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              q.value ? (a(), c("div", X6, [
                K[23] || (K[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                He(s("input", {
                  "onUpdate:modelValue": K[4] || (K[4] = (D) => B.value = D),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, Q6), [
                  [Nt, B.value]
                ]),
                e.detectedModelsDir && !B.value ? (a(), c("p", Z6, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                E.value ? (a(), c("p", eI, " Did you mean: " + f(E.value), 1)) : y("", !0),
                I.value ? (a(), c("p", tI, f(I.value), 1)) : y("", !0),
                O.value !== null && !I.value ? (a(), c("p", sI, " Found " + f(O.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              ve.value ? (a(), M(Pn, {
                key: 1,
                progress: De.value.progress,
                message: De.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            h.value === 2 ? (a(), c("div", oI, [
              T.value ? (a(), c("div", nI, [...K[25] || (K[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), c(j, { key: 1 }, [
                !o.cliInstalled && !$.value ? (a(), c("div", aI, [
                  s("div", lI, [
                    K[27] || (K[27] = s("span", { class: "cli-warning-icon" }, "!", -1)),
                    K[28] || (K[28] = s("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    s("button", {
                      class: "cli-warning-close",
                      onClick: K[5] || (K[5] = (D) => $.value = !0),
                      title: "Dismiss"
                    }, [...K[26] || (K[26] = [
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
                  K[29] || (K[29] = s("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  K[30] || (K[30] = s("div", { class: "cli-warning-commands" }, [
                    s("code", null, "pipx install comfygit"),
                    s("span", { class: "cli-warning-or" }, "or"),
                    s("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                p.value === "landing" ? (a(), c("div", iI, [
                  K[34] || (K[34] = s("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  s("button", {
                    class: "landing-option",
                    onClick: K[6] || (K[6] = (D) => p.value = "create")
                  }, [...K[31] || (K[31] = [
                    s("span", { class: "option-icon" }, "➕", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Create New Environment"),
                      s("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  s("button", {
                    class: "landing-option",
                    onClick: K[7] || (K[7] = (D) => {
                      P.value = !1, p.value = "import";
                    })
                  }, [...K[32] || (K[32] = [
                    s("span", { class: "option-icon" }, "📦", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Import Environment"),
                      s("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (X = o.existingEnvironments) != null && X.length ? (a(), c(j, { key: 0 }, [
                    K[33] || (K[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", rI, [
                      (a(!0), c(j, null, ge(o.existingEnvironments, (D) => (a(), c("label", {
                        key: D,
                        class: xe(["env-option", { selected: w.value === D }])
                      }, [
                        He(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: D,
                          "onUpdate:modelValue": K[8] || (K[8] = (W) => w.value = W)
                        }, null, 8, cI), [
                          [qt, w.value]
                        ]),
                        s("span", uI, f(D), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (a(), c("div", dI, [
                  Ee.value ? (a(), c("div", $I, [
                    s("p", CI, [
                      K[41] || (K[41] = b(" Creating environment ", -1)),
                      s("strong", null, f(re.value), 1),
                      K[42] || (K[42] = b("... ", -1))
                    ]),
                    C(Pn, {
                      progress: je.value.progress,
                      message: je.value.message,
                      "current-phase": je.value.phase,
                      "show-steps": !0,
                      steps: Je
                    }, null, 8, ["progress", "message", "current-phase"]),
                    K[43] || (K[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), c(j, { key: 0 }, [
                    K[40] || (K[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", fI, [
                      K[35] || (K[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      He(s("input", {
                        "onUpdate:modelValue": K[9] || (K[9] = (D) => re.value = D),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Nt, re.value]
                      ])
                    ]),
                    s("div", mI, [
                      K[36] || (K[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      He(s("select", {
                        "onUpdate:modelValue": K[10] || (K[10] = (D) => Y.value = D),
                        class: "form-select"
                      }, [
                        (a(!0), c(j, null, ge(Ue($r), (D) => (a(), c("option", {
                          key: D,
                          value: D
                        }, f(D), 9, vI))), 128))
                      ], 512), [
                        [ms, Y.value]
                      ])
                    ]),
                    s("div", pI, [
                      K[37] || (K[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      He(s("select", {
                        "onUpdate:modelValue": K[11] || (K[11] = (D) => H.value = D),
                        class: "form-select",
                        disabled: be.value
                      }, [
                        (a(!0), c(j, null, ge(R.value, (D) => (a(), c("option", {
                          key: D.tag_name,
                          value: D.tag_name
                        }, f(D.name), 9, hI))), 128))
                      ], 8, gI), [
                        [ms, H.value]
                      ])
                    ]),
                    s("div", yI, [
                      K[38] || (K[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      He(s("select", {
                        "onUpdate:modelValue": K[12] || (K[12] = (D) => te.value = D),
                        class: "form-select"
                      }, [
                        (a(!0), c(j, null, ge(Ue(Ja), (D) => (a(), c("option", {
                          key: D,
                          value: D
                        }, f(D) + f(D === "auto" ? " (detect GPU)" : ""), 9, wI))), 128))
                      ], 512), [
                        [ms, te.value]
                      ])
                    ]),
                    s("div", bI, [
                      s("label", _I, [
                        He(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": K[13] || (K[13] = (D) => Z.value = D)
                        }, null, 512), [
                          [Yo, Z.value]
                        ]),
                        K[39] || (K[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    U.value ? (a(), c("div", kI, f(U.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (a(), c("div", xI, [
                  C(Er, {
                    "workspace-path": z.value,
                    "resume-import": P.value,
                    "initial-progress": N.value ?? void 0,
                    onImportComplete: ne,
                    onImportStarted: K[14] || (K[14] = (D) => x.value = !0),
                    onSourceCleared: ue
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: g(() => [
          s("div", SI, [
            C(Lr),
            s("div", II, [
              h.value === 1 ? (a(), M(Me, {
                key: 0,
                variant: "primary",
                disabled: !le.value || ve.value,
                onClick: ae
              }, {
                default: g(() => [
                  b(f(ve.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : h.value === 2 ? (a(), c(j, { key: 1 }, [
                !Ee.value && !x.value && (p.value !== "landing" || o.setupState === "no_workspace" && !z.value) ? (a(), M(Me, {
                  key: 0,
                  variant: "secondary",
                  onClick: $e
                }, {
                  default: g(() => [...K[44] || (K[44] = [
                    b(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (a(), M(Me, {
                  key: 1,
                  variant: "primary",
                  disabled: !Fe.value || Ee.value,
                  onClick: de
                }, {
                  default: g(() => [
                    b(f(Ee.value ? "Creating..." : Z.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (a(), M(Me, {
                  key: 2,
                  variant: "primary",
                  onClick: ke
                }, {
                  default: g(() => [
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
      _.value ? (a(), M(W6, {
        key: 0,
        "workspace-path": L.value,
        onClose: K[16] || (K[16] = (X) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), PI = /* @__PURE__ */ pe(TI, [["__scopeId", "data-v-9a9aadc0"]]), RI = { class: "comfygit-panel" }, MI = { class: "panel-header" }, DI = { class: "header-left" }, LI = {
  key: 0,
  class: "header-info"
}, OI = { class: "header-actions" }, NI = { class: "env-switcher" }, AI = {
  key: 0,
  class: "header-info"
}, UI = { class: "branch-name" }, zI = { class: "panel-main" }, FI = { class: "sidebar" }, BI = { class: "sidebar-content" }, VI = { class: "sidebar-section" }, WI = { class: "sidebar-section" }, GI = { class: "sidebar-section" }, jI = {
  key: 0,
  class: "sidebar-badge"
}, HI = { class: "sidebar-footer" }, KI = { class: "content-area" }, qI = {
  key: 0,
  class: "error-message"
}, YI = {
  key: 1,
  class: "loading"
}, JI = { class: "dialog-content env-selector-dialog" }, XI = { class: "dialog-header" }, QI = { class: "dialog-body" }, ZI = { class: "env-list" }, eE = { class: "env-info" }, tE = { class: "env-name-row" }, sE = { class: "env-indicator" }, oE = { class: "env-name" }, nE = {
  key: 0,
  class: "env-branch"
}, aE = {
  key: 1,
  class: "current-label"
}, lE = { class: "env-stats" }, iE = ["onClick"], rE = { class: "toast-container" }, cE = { class: "toast-message" }, uE = /* @__PURE__ */ me({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: t }) {
    const o = e, n = t, {
      getStatus: l,
      getHistory: i,
      getBranches: r,
      checkout: u,
      createBranch: d,
      switchBranch: m,
      deleteBranch: v,
      getEnvironments: h,
      switchEnvironment: w,
      getSwitchProgress: p,
      deleteEnvironment: _,
      syncEnvironmentManually: x,
      repairWorkflowModels: $,
      getSetupStatus: P
    } = at(), N = kv(), { liveInstanceCount: T } = Tr({ autoStart: !0 }), S = k(null), q = k([]), B = k([]), A = k([]), I = F(() => A.value.find((se) => se.is_current)), E = k(null), O = k(!1), re = k(1), Y = F(() => {
      var se;
      return ((se = E.value) == null ? void 0 : se.state) || "managed";
    }), H = k(!1), te = k(null), Z = k(null), U = k(!1), z = k(null), R = k(null), be = k(null), ve = k(!1), Ee = k(!1), De = k(""), je = k(null), Je = k({ state: "idle", progress: 0, message: "" });
    let _e = null, Se = null;
    const Ve = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ye = o.initialView ? Ve[o.initialView] : null, le = k((ye == null ? void 0 : ye.view) ?? "status"), Fe = k((ye == null ? void 0 : ye.section) ?? "this-env");
    function Ie(se, G) {
      le.value = se, Fe.value = G;
    }
    function L(se) {
      const Pe = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[se];
      Pe && Ie(Pe.view, Pe.section);
    }
    function V() {
      Ie("branches", "this-env");
    }
    function oe() {
      n("close"), setTimeout(() => {
        var G;
        const se = document.querySelectorAll("button.comfyui-button");
        for (const Pe of se)
          if (((G = Pe.textContent) == null ? void 0 : G.trim()) === "Manager") {
            Pe.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ae = k(null), de = k(!1), fe = k(!1), ke = k([]);
    let $e = 0;
    function ne(se, G = "info", Pe = 3e3) {
      const Be = ++$e;
      return ke.value.push({ id: Be, message: se, type: G }), Pe > 0 && setTimeout(() => {
        ke.value = ke.value.filter((tt) => tt.id !== Be);
      }, Pe), Be;
    }
    function ue(se) {
      ke.value = ke.value.filter((G) => G.id !== se);
    }
    function Re(se, G) {
      ne(se, G);
    }
    const Ce = F(() => {
      if (!S.value) return "neutral";
      const se = S.value.workflows, G = se.new.length > 0 || se.modified.length > 0 || se.deleted.length > 0 || S.value.has_changes;
      return S.value.comparison.is_synced ? G ? "warning" : "success" : "error";
    });
    F(() => S.value ? Ce.value === "success" ? "All synced" : Ce.value === "warning" ? "Uncommitted changes" : Ce.value === "error" ? "Not synced" : "" : "");
    async function ee() {
      H.value = !0, te.value = null;
      try {
        const [se, G, Pe, Be] = await Promise.all([
          l(!0),
          i(),
          r(),
          h()
        ]);
        S.value = se, q.value = G.commits, B.value = Pe.branches, A.value = Be, n("statusUpdate", se), z.value && await z.value.loadWorkflows(!0);
      } catch (se) {
        te.value = se instanceof Error ? se.message : "Failed to load status", S.value = null, q.value = [], B.value = [];
      } finally {
        H.value = !1;
      }
    }
    function K(se) {
      Z.value = se;
    }
    async function X(se) {
      var Pe;
      Z.value = null;
      const G = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      ae.value = {
        title: G ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: G ? "You have uncommitted changes that will be lost." : `Checkout commit ${se.short_hash || ((Pe = se.hash) == null ? void 0 : Pe.slice(0, 7))}?`,
        details: G ? ns() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: G ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: G,
        onConfirm: async () => {
          var dt;
          ae.value = null, Ke();
          const Be = ne(`Checking out ${se.short_hash || ((dt = se.hash) == null ? void 0 : dt.slice(0, 7))}...`, "info", 0), tt = await u(se.hash, G);
          ue(Be), tt.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(tt.message || "Checkout failed", "error");
        }
      };
    }
    async function D(se) {
      const G = S.value && (S.value.workflows.new.length > 0 || S.value.workflows.modified.length > 0 || S.value.workflows.deleted.length > 0 || S.value.has_changes);
      ae.value = {
        title: G ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: G ? "You have uncommitted changes." : `Switch to branch "${se}"?`,
        details: G ? ns() : void 0,
        warning: G ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: G ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ae.value = null, Ke();
          const Pe = ne(`Switching to ${se}...`, "info", 0), Be = await m(se, G);
          ue(Pe), Be.status === "success" ? ne("Restarting ComfyUI...", "success") : ne(Be.message || "Branch switch failed", "error");
        }
      };
    }
    async function W(se) {
      const G = ne(`Creating branch ${se}...`, "info", 0), Pe = await d(se);
      ue(G), Pe.status === "success" ? (ne(`Branch "${se}" created`, "success"), await ee()) : ne(Pe.message || "Failed to create branch", "error");
    }
    async function ce(se, G = !1) {
      const Pe = async (Be) => {
        var dt;
        const tt = ne(`Deleting branch ${se}...`, "info", 0);
        try {
          const Rt = await v(se, Be);
          ue(tt), Rt.status === "success" ? (ne(`Branch "${se}" deleted`, "success"), await ee()) : (dt = Rt.message) != null && dt.includes("not fully merged") ? ae.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${se}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ae.value = null, await Pe(!0);
            }
          } : ne(Rt.message || "Failed to delete branch", "error");
        } catch (Rt) {
          ue(tt);
          const as = Rt instanceof Error ? Rt.message : "Failed to delete branch";
          as.includes("not fully merged") ? ae.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${se}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ae.value = null, await Pe(!0);
            }
          } : ne(as, "error");
        }
      };
      ae.value = {
        title: "Delete Branch",
        message: `Delete branch "${se}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ae.value = null, await Pe(G);
        }
      };
    }
    async function Te(se) {
      Z.value = null;
      const G = prompt("Enter branch name:");
      if (G) {
        const Pe = ne(`Creating branch ${G}...`, "info", 0), Be = await d(G, se.hash);
        ue(Pe), Be.status === "success" ? (ne(`Branch "${G}" created from ${se.short_hash}`, "success"), await ee()) : ne(Be.message || "Failed to create branch", "error");
      }
    }
    function Ke() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function rt() {
      ae.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var se;
          ae.value = null, Ke(), ne("Restarting environment...", "info");
          try {
            (se = window.app) != null && se.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function yt() {
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
    async function wt(se, G) {
      U.value = !1, De.value = se, je.value = G || null, ve.value = !0;
    }
    async function ct() {
      ve.value = !1, Ee.value = !0, Ke(), Je.value = {
        progress: 10,
        state: ft(10),
        message: Wt(10)
      };
      try {
        await w(De.value, je.value || void 0), vs(), Bs();
      } catch (se) {
        Gt(), Ee.value = !1, ne(`Failed to initiate switch: ${se instanceof Error ? se.message : "Unknown error"}`, "error"), Je.value = { state: "idle", progress: 0, message: "" }, je.value = null;
      }
    }
    function ft(se) {
      return se >= 100 ? "complete" : se >= 80 ? "validating" : se >= 60 ? "starting" : se >= 30 ? "syncing" : "preparing";
    }
    function Wt(se) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[ft(se)] || "";
    }
    function vs() {
      if (Se) return;
      let se = 10;
      const G = 60, Pe = 5e3, Be = 100, tt = (G - se) / (Pe / Be);
      Se = window.setInterval(() => {
        if (se += tt, se >= G && (se = G, Gt()), Je.value.progress < G) {
          const dt = Math.floor(se);
          Je.value = {
            progress: dt,
            state: ft(dt),
            message: Wt(dt)
          };
        }
      }, Be);
    }
    function Gt() {
      Se && (clearInterval(Se), Se = null);
    }
    function Bs() {
      _e || (_e = window.setInterval(async () => {
        try {
          let se = await N.getStatus();
          if ((!se || se.state === "idle") && (se = await p()), !se)
            return;
          const G = se.progress || 0;
          G >= 60 && Gt();
          const Pe = Math.max(G, Je.value.progress), Be = se.state && se.state !== "idle" && se.state !== "unknown", tt = Be ? se.state : ft(Pe), dt = Be && se.message || Wt(Pe);
          Je.value = {
            state: tt,
            progress: Pe,
            message: dt
          }, se.state === "complete" ? (Gt(), Ts(), Ee.value = !1, ne(`✓ Switched to ${De.value}`, "success"), await ee(), De.value = "") : se.state === "rolled_back" ? (Gt(), Ts(), Ee.value = !1, ne("Switch failed, restored previous environment", "warning"), De.value = "") : se.state === "critical_failure" && (Gt(), Ts(), Ee.value = !1, ne(`Critical error during switch: ${se.message}`, "error"), De.value = "");
        } catch (se) {
          console.error("Failed to poll switch progress:", se);
        }
      }, 1e3));
    }
    function Ts() {
      Gt(), _e && (clearInterval(_e), _e = null);
    }
    function to() {
      var se;
      ve.value = !1, De.value = "", (se = E.value) != null && se.state && E.value.state !== "managed" && (re.value = E.value.state === "no_workspace" ? 1 : 2, O.value = !0);
    }
    async function _o(se) {
      de.value = !1, await ee(), ne(se.message, se.success ? "success" : "error");
    }
    async function ko() {
      fe.value = !1;
      const se = ne("Syncing environment...", "info", 0);
      try {
        const G = await x("skip", !0);
        if (ue(se), G.status === "success") {
          const Pe = [];
          G.nodes_installed.length && Pe.push(`${G.nodes_installed.length} installed`), G.nodes_removed.length && Pe.push(`${G.nodes_removed.length} removed`);
          const Be = Pe.length ? `: ${Pe.join(", ")}` : "";
          ne(`✓ Environment synced${Be}`, "success"), await ee();
        } else {
          const Pe = G.errors.length ? G.errors.join("; ") : G.message;
          ne(`Sync failed: ${Pe}`, "error");
        }
      } catch (G) {
        ue(se), ne(`Sync error: ${G instanceof Error ? G.message : "Unknown error"}`, "error");
      }
    }
    async function $o(se) {
      var G;
      try {
        const Pe = await $(se);
        Pe.failed.length === 0 ? ne(`✓ Repaired ${Pe.success} workflow${Pe.success === 1 ? "" : "s"}`, "success") : ne(`Repaired ${Pe.success}, failed: ${Pe.failed.length}`, "warning"), await ee();
      } catch (Pe) {
        ne(`Repair failed: ${Pe instanceof Error ? Pe.message : "Unknown error"}`, "error");
      } finally {
        (G = be.value) == null || G.resetRepairingState();
      }
    }
    async function he() {
      var G, Pe;
      const se = ne("Repairing environment...", "info", 0);
      try {
        const Be = await x("skip", !0);
        if (ue(se), Be.status === "success") {
          const tt = [];
          Be.nodes_installed.length && tt.push(`${Be.nodes_installed.length} installed`), Be.nodes_removed.length && tt.push(`${Be.nodes_removed.length} removed`);
          const dt = tt.length ? `: ${tt.join(", ")}` : "";
          ne(`✓ Environment repaired${dt}`, "success"), (G = be.value) == null || G.closeDetailModal(), await ee();
        } else {
          const tt = Be.errors.length ? Be.errors.join(", ") : Be.message || "Unknown error";
          ne(`Repair failed: ${tt}`, "error");
        }
      } catch (Be) {
        ue(se), ne(`Repair error: ${Be instanceof Error ? Be.message : "Unknown error"}`, "error");
      } finally {
        (Pe = be.value) == null || Pe.resetRepairingEnvironmentState();
      }
    }
    async function Q(se, G) {
      ne(`Environment '${se}' created`, "success"), await ee(), R.value && await R.value.loadEnvironments(), G && await wt(se);
    }
    async function We(se) {
      var G;
      if (((G = I.value) == null ? void 0 : G.name) === se) {
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
            const Pe = await _(se);
            Pe.status === "success" ? (ne(`Environment "${se}" deleted`, "success"), await ee(), R.value && await R.value.loadEnvironments()) : ne(Pe.message || "Failed to delete environment", "error");
          } catch (Pe) {
            ne(`Error deleting environment: ${Pe instanceof Error ? Pe.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function pt(se, G) {
      O.value = !1;
      try {
        E.value = await P();
      } catch {
      }
      await wt(se, G);
    }
    function jt() {
      O.value = !1, n("close");
    }
    async function ps(se, G) {
      await wt(se, G);
    }
    async function gs(se) {
      await ee(), await wt(se);
    }
    async function os(se) {
      E.value = await P(), console.log(`Environment '${se}' created. Available for switching.`);
    }
    function Le() {
      Ie("environments", "all-envs"), setTimeout(() => {
        var se;
        (se = R.value) == null || se.openCreateModal();
      }, 100);
    }
    function ns() {
      if (!S.value) return [];
      const se = [], G = S.value.workflows;
      return G.new.length && se.push(`${G.new.length} new workflow(s)`), G.modified.length && se.push(`${G.modified.length} modified workflow(s)`), G.deleted.length && se.push(`${G.deleted.length} deleted workflow(s)`), se;
    }
    return Qe(async () => {
      try {
        if (E.value = await P(), E.value.state === "no_workspace") {
          O.value = !0, re.value = 1;
          return;
        }
        if (E.value.state === "empty_workspace") {
          O.value = !0, re.value = 2;
          return;
        }
        if (E.value.state === "unmanaged") {
          O.value = !0, re.value = 2;
          return;
        }
      } catch (se) {
        console.warn("Setup status check failed, proceeding normally:", se);
      }
      await ee();
    }), (se, G) => {
      var Pe, Be, tt, dt, Rt, as, Vs, Ws, J, we, Oe, lt;
      return a(), c("div", RI, [
        s("div", MI, [
          s("div", DI, [
            G[31] || (G[31] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            S.value ? (a(), c("div", LI)) : y("", !0)
          ]),
          s("div", OI, [
            C(Dr),
            G[34] || (G[34] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: xe(["icon-btn", { spinning: H.value }]),
              onClick: ee,
              title: "Refresh"
            }, [...G[32] || (G[32] = [
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
              onClick: G[0] || (G[0] = (Ne) => n("close")),
              title: "Close"
            }, [...G[33] || (G[33] = [
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
        s("div", NI, [
          s("div", { class: "env-switcher-header" }, [
            G[35] || (G[35] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", { class: "env-control-buttons" }, [
              s("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: rt
              }, " Restart "),
              s("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: yt
              }, " Stop ")
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: G[1] || (G[1] = (Ne) => Ie("environments", "all-envs"))
          }, [
            S.value ? (a(), c("div", AI, [
              s("span", null, f(((Pe = I.value) == null ? void 0 : Pe.name) || ((Be = S.value) == null ? void 0 : Be.environment) || "Loading..."), 1),
              s("span", UI, "(" + f(S.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            G[36] || (G[36] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", zI, [
          s("div", FI, [
            s("div", BI, [
              s("div", VI, [
                G[37] || (G[37] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: xe(["sidebar-item", { active: le.value === "status" && Fe.value === "this-env" }]),
                  onClick: G[2] || (G[2] = (Ne) => Ie("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: xe(["sidebar-item", { active: le.value === "workflows" }]),
                  onClick: G[3] || (G[3] = (Ne) => Ie("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: xe(["sidebar-item", { active: le.value === "models-env" }]),
                  onClick: G[4] || (G[4] = (Ne) => Ie("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: xe(["sidebar-item", { active: le.value === "branches" }]),
                  onClick: G[5] || (G[5] = (Ne) => Ie("branches", "this-env"))
                }, " BRANCHES ", 2),
                s("button", {
                  class: xe(["sidebar-item", { active: le.value === "history" }]),
                  onClick: G[6] || (G[6] = (Ne) => Ie("history", "this-env"))
                }, " HISTORY ", 2),
                s("button", {
                  class: xe(["sidebar-item", { active: le.value === "nodes" }]),
                  onClick: G[7] || (G[7] = (Ne) => Ie("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: xe(["sidebar-item", { active: le.value === "debug-env" }]),
                  onClick: G[8] || (G[8] = (Ne) => Ie("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              G[41] || (G[41] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", WI, [
                G[38] || (G[38] = s("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                s("button", {
                  class: xe(["sidebar-item", { active: le.value === "environments" }]),
                  onClick: G[9] || (G[9] = (Ne) => Ie("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: xe(["sidebar-item", { active: le.value === "model-index" }]),
                  onClick: G[10] || (G[10] = (Ne) => Ie("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: xe(["sidebar-item", { active: le.value === "settings" }]),
                  onClick: G[11] || (G[11] = (Ne) => Ie("settings", "all-envs"))
                }, " SETTINGS ", 2),
                s("button", {
                  class: xe(["sidebar-item", { active: le.value === "debug-workspace" }]),
                  onClick: G[12] || (G[12] = (Ne) => Ie("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              G[42] || (G[42] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", GI, [
                G[40] || (G[40] = s("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                s("button", {
                  class: xe(["sidebar-item", { active: le.value === "deploy" }]),
                  onClick: G[13] || (G[13] = (Ne) => Ie("deploy", "sharing"))
                }, [
                  G[39] || (G[39] = b(" DEPLOY ", -1)),
                  Ue(T) > 0 ? (a(), c("span", jI, f(Ue(T)), 1)) : y("", !0)
                ], 2),
                s("button", {
                  class: xe(["sidebar-item", { active: le.value === "export" }]),
                  onClick: G[14] || (G[14] = (Ne) => Ie("export", "sharing"))
                }, " EXPORT ", 2),
                s("button", {
                  class: xe(["sidebar-item", { active: le.value === "import" }]),
                  onClick: G[15] || (G[15] = (Ne) => Ie("import", "sharing"))
                }, " IMPORT ", 2),
                s("button", {
                  class: xe(["sidebar-item", { active: le.value === "remotes" }]),
                  onClick: G[16] || (G[16] = (Ne) => Ie("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            s("div", HI, [
              C(Lr)
            ])
          ]),
          s("div", KI, [
            te.value ? (a(), c("div", qI, f(te.value), 1)) : !S.value && le.value === "status" ? (a(), c("div", YI, " Loading status... ")) : (a(), c(j, { key: 2 }, [
              le.value === "status" ? (a(), M(qm, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: be,
                status: S.value,
                "setup-state": Y.value,
                onSwitchBranch: V,
                onCommitChanges: G[17] || (G[17] = (Ne) => de.value = !0),
                onSyncEnvironment: G[18] || (G[18] = (Ne) => fe.value = !0),
                onViewWorkflows: G[19] || (G[19] = (Ne) => Ie("workflows", "this-env")),
                onViewHistory: G[20] || (G[20] = (Ne) => Ie("history", "this-env")),
                onViewDebug: G[21] || (G[21] = (Ne) => Ie("debug-env", "this-env")),
                onViewNodes: G[22] || (G[22] = (Ne) => Ie("nodes", "this-env")),
                onRepairMissingModels: $o,
                onRepairEnvironment: he,
                onStartSetup: G[23] || (G[23] = (Ne) => O.value = !0),
                onViewEnvironments: G[24] || (G[24] = (Ne) => Ie("environments", "all-envs")),
                onCreateEnvironment: Le
              }, null, 8, ["status", "setup-state"])) : le.value === "workflows" ? (a(), M(h0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: z,
                onRefresh: ee
              }, null, 512)) : le.value === "models-env" ? (a(), M(Z0, {
                key: 2,
                onNavigate: L
              })) : le.value === "branches" ? (a(), M(cv, {
                key: 3,
                branches: B.value,
                current: ((tt = S.value) == null ? void 0 : tt.branch) || null,
                onSwitch: D,
                onCreate: W,
                onDelete: ce
              }, null, 8, ["branches", "current"])) : le.value === "history" ? (a(), M(bv, {
                key: 4,
                commits: q.value,
                onSelect: K,
                onCheckout: X
              }, null, 8, ["commits"])) : le.value === "nodes" ? (a(), M(Yw, {
                key: 5,
                "version-mismatches": ((Rt = (dt = S.value) == null ? void 0 : dt.comparison) == null ? void 0 : Rt.version_mismatches) || [],
                onOpenNodeManager: oe,
                onRepairEnvironment: he,
                onToast: Re
              }, null, 8, ["version-mismatches"])) : le.value === "debug-env" ? (a(), M(u2, { key: 6 })) : le.value === "environments" ? (a(), M(m$, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: R,
                onSwitch: wt,
                onCreated: Q,
                onDelete: We
              }, null, 512)) : le.value === "model-index" ? (a(), M(ww, {
                key: 8,
                onRefresh: ee
              })) : le.value === "settings" ? (a(), M(t2, { key: 9 })) : le.value === "debug-workspace" ? (a(), M(c2, { key: 10 })) : le.value === "deploy" ? (a(), M(GS, {
                key: 11,
                onToast: Re,
                onNavigate: L
              })) : le.value === "export" ? (a(), M(W$, { key: 12 })) : le.value === "import" ? (a(), M(N3, {
                key: 13,
                onImportCompleteSwitch: gs
              })) : le.value === "remotes" ? (a(), M(Lk, {
                key: 14,
                onToast: Re
              })) : y("", !0)
            ], 64))
          ])
        ]),
        Z.value ? (a(), M(r4, {
          key: 0,
          commit: Z.value,
          onClose: G[25] || (G[25] = (Ne) => Z.value = null),
          onCheckout: X,
          onCreateBranch: Te
        }, null, 8, ["commit"])) : y("", !0),
        ae.value ? (a(), M(Ya, {
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
          onCancel: G[26] || (G[26] = (Ne) => ae.value = null),
          onSecondary: ae.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        C(l6, {
          show: ve.value,
          "from-environment": ((as = I.value) == null ? void 0 : as.name) || "unknown",
          "to-environment": De.value,
          onConfirm: ct,
          onClose: to
        }, null, 8, ["show", "from-environment", "to-environment"]),
        de.value && S.value ? (a(), M(Mr, {
          key: 2,
          status: S.value,
          "as-modal": !0,
          onClose: G[27] || (G[27] = (Ne) => de.value = !1),
          onCommitted: _o
        }, null, 8, ["status"])) : y("", !0),
        fe.value && S.value ? (a(), M(S6, {
          key: 3,
          show: fe.value,
          "mismatch-details": {
            missing_nodes: S.value.comparison.missing_nodes,
            extra_nodes: S.value.comparison.extra_nodes
          },
          onConfirm: ko,
          onClose: G[28] || (G[28] = (Ne) => fe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        C(h6, {
          show: Ee.value,
          state: Je.value.state,
          progress: Je.value.progress,
          message: Je.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        U.value ? (a(), c("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: G[30] || (G[30] = nt((Ne) => U.value = !1, ["self"]))
        }, [
          s("div", JI, [
            s("div", XI, [
              G[44] || (G[44] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: G[29] || (G[29] = (Ne) => U.value = !1)
              }, [...G[43] || (G[43] = [
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
            s("div", QI, [
              G[45] || (G[45] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", ZI, [
                (a(!0), c(j, null, ge(A.value, (Ne) => (a(), c("div", {
                  key: Ne.name,
                  class: xe(["env-item", { current: Ne.is_current }])
                }, [
                  s("div", eE, [
                    s("div", tE, [
                      s("span", sE, f(Ne.is_current ? "●" : "○"), 1),
                      s("span", oE, f(Ne.name), 1),
                      Ne.current_branch ? (a(), c("span", nE, "(" + f(Ne.current_branch) + ")", 1)) : y("", !0),
                      Ne.is_current ? (a(), c("span", aE, "CURRENT")) : y("", !0)
                    ]),
                    s("div", lE, f(Ne.workflow_count) + " workflows • " + f(Ne.node_count) + " nodes ", 1)
                  ]),
                  Ne.is_current ? y("", !0) : (a(), c("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Co) => wt(Ne.name)
                  }, " SWITCH ", 8, iE))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        O.value ? (a(), M(PI, {
          key: 5,
          "default-path": ((Vs = E.value) == null ? void 0 : Vs.default_path) || "~/comfygit",
          "detected-models-dir": ((Ws = E.value) == null ? void 0 : Ws.detected_models_dir) || null,
          "initial-step": re.value,
          "existing-environments": ((J = E.value) == null ? void 0 : J.environments) || [],
          "cli-installed": ((we = E.value) == null ? void 0 : we.cli_installed) ?? !0,
          "setup-state": ((Oe = E.value) == null ? void 0 : Oe.state) || "no_workspace",
          "workspace-path": ((lt = E.value) == null ? void 0 : lt.workspace_path) || null,
          onComplete: pt,
          onClose: jt,
          onSwitchEnvironment: ps,
          onEnvironmentCreatedNoSwitch: os
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        s("div", rE, [
          C(nd, { name: "toast" }, {
            default: g(() => [
              (a(!0), c(j, null, ge(ke.value, (Ne) => (a(), c("div", {
                key: Ne.id,
                class: xe(["toast", Ne.type])
              }, [
                s("span", cE, f(Ne.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), dE = /* @__PURE__ */ pe(uE, [["__scopeId", "data-v-037b3ee3"]]), fE = { class: "item-header" }, mE = { class: "item-info" }, vE = { class: "filename" }, pE = { class: "metadata" }, gE = { class: "size" }, hE = {
  key: 0,
  class: "type"
}, yE = { class: "item-actions" }, wE = {
  key: 0,
  class: "progress-section"
}, bE = { class: "progress-bar" }, _E = { class: "progress-stats" }, kE = { class: "downloaded" }, $E = { class: "speed" }, CE = {
  key: 0,
  class: "eta"
}, xE = {
  key: 1,
  class: "status-msg paused"
}, SE = {
  key: 2,
  class: "status-msg queued"
}, IE = {
  key: 3,
  class: "status-msg completed"
}, EE = {
  key: 4,
  class: "status-msg failed"
}, TE = {
  key: 0,
  class: "retries"
}, PE = /* @__PURE__ */ me({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: t }) {
    const o = t;
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
      class: xe(["download-item", `status-${e.item.status}`])
    }, [
      s("div", fE, [
        s("div", mE, [
          s("div", vE, f(e.item.filename), 1),
          s("div", pE, [
            s("span", gE, f(n(e.item.size)), 1),
            e.item.type ? (a(), c("span", hE, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        s("div", yE, [
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
      e.item.status === "downloading" ? (a(), c("div", wE, [
        s("div", bE, [
          s("div", {
            class: "progress-fill",
            style: Vt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", _E, [
          s("span", kE, f(n(e.item.downloaded)) + " / " + f(n(e.item.size)), 1),
          s("span", $E, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), c("span", CE, f(i(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), c("div", xE, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), c("div", SE, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), c("div", IE, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), c("div", EE, [
        b(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), c("span", TE, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Eo = /* @__PURE__ */ pe(PE, [["__scopeId", "data-v-2110df65"]]), RE = { class: "queue-title" }, ME = { class: "count" }, DE = { class: "queue-actions" }, LE = { class: "action-label" }, OE = {
  key: 0,
  class: "overall-progress"
}, NE = { class: "progress-bar" }, AE = {
  key: 0,
  class: "current-mini"
}, UE = { class: "filename" }, zE = { class: "speed" }, FE = {
  key: 1,
  class: "queue-content"
}, BE = {
  key: 0,
  class: "section"
}, VE = {
  key: 1,
  class: "section"
}, WE = { class: "section-header" }, GE = { class: "section-label paused" }, jE = { class: "items-list" }, HE = {
  key: 2,
  class: "section"
}, KE = { class: "section-header" }, qE = { class: "section-label" }, YE = { class: "items-list" }, JE = {
  key: 3,
  class: "section"
}, XE = { class: "section-header" }, QE = { class: "section-label" }, ZE = { class: "items-list" }, eT = {
  key: 4,
  class: "section"
}, tT = { class: "section-header" }, sT = { class: "section-label failed" }, oT = { class: "items-list" }, nT = /* @__PURE__ */ me({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: t,
      currentDownload: o,
      queuedItems: n,
      completedItems: l,
      failedItems: i,
      pausedItems: r,
      hasItems: u,
      activeCount: d,
      cancelDownload: m,
      retryDownload: v,
      resumeDownload: h,
      resumeAllPaused: w,
      removeItem: p,
      clearCompleted: _
    } = en(), x = k(!1);
    let $ = null;
    Ct(
      () => ({
        active: d.value,
        failed: i.value.length,
        paused: r.value.length,
        completed: l.value.length
      }),
      (S, q) => {
        $ && (clearTimeout($), $ = null);
        const B = S.active === 0 && S.failed === 0 && S.paused === 0 && S.completed > 0, A = q && (q.active > 0 || q.paused > 0);
        B && A && ($ = setTimeout(() => {
          _(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const P = F(() => {
      var B;
      if (t.items.length === 0) return 0;
      const S = l.value.length, q = ((B = o.value) == null ? void 0 : B.progress) || 0;
      return Math.round((S + q / 100) / t.items.length * 100);
    });
    function N(S) {
      m(S);
    }
    function T(S) {
      return S === 0 ? "" : `${(S / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (S, q) => (a(), M(ht, { to: "body" }, [
      Ue(u) ? (a(), c("div", {
        key: 0,
        class: xe(["model-download-queue", { minimized: !x.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: q[0] || (q[0] = (B) => x.value = !x.value)
        }, [
          s("div", RE, [
            q[4] || (q[4] = s("span", { class: "icon" }, "↓", -1)),
            q[5] || (q[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", ME, "(" + f(Ue(d)) + "/" + f(Ue(t).items.length) + ")", 1)
          ]),
          s("div", DE, [
            s("span", LE, f(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (a(), c("div", FE, [
          Ue(o) ? (a(), c("div", BE, [
            q[6] || (q[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            C(Eo, {
              item: Ue(o),
              onCancel: q[1] || (q[1] = (B) => N(Ue(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          Ue(r).length > 0 ? (a(), c("div", VE, [
            s("div", WE, [
              s("span", GE, "Paused (" + f(Ue(r).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: q[2] || (q[2] = //@ts-ignore
                (...B) => Ue(w) && Ue(w)(...B))
              }, "Resume All")
            ]),
            s("div", jE, [
              (a(!0), c(j, null, ge(Ue(r), (B) => (a(), M(Eo, {
                key: B.id,
                item: B,
                onResume: (A) => Ue(h)(B.id),
                onRemove: (A) => Ue(p)(B.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Ue(n).length > 0 ? (a(), c("div", HE, [
            s("div", KE, [
              s("span", qE, "Queued (" + f(Ue(n).length) + ")", 1)
            ]),
            s("div", YE, [
              (a(!0), c(j, null, ge(Ue(n), (B) => (a(), M(Eo, {
                key: B.id,
                item: B,
                onCancel: (A) => N(B.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          Ue(l).length > 0 ? (a(), c("div", JE, [
            s("div", XE, [
              s("span", QE, "Completed (" + f(Ue(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: q[3] || (q[3] = //@ts-ignore
                (...B) => Ue(_) && Ue(_)(...B))
              }, "Clear")
            ]),
            s("div", ZE, [
              (a(!0), c(j, null, ge(Ue(l).slice(0, 3), (B) => (a(), M(Eo, {
                key: B.id,
                item: B,
                onRemove: (A) => Ue(p)(B.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Ue(i).length > 0 ? (a(), c("div", eT, [
            s("div", tT, [
              s("span", sT, "Failed (" + f(Ue(i).length) + ")", 1)
            ]),
            s("div", oT, [
              (a(!0), c(j, null, ge(Ue(i), (B) => (a(), M(Eo, {
                key: B.id,
                item: B,
                onRetry: (A) => Ue(v)(B.id),
                onRemove: (A) => Ue(p)(B.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), c("div", OE, [
          s("div", NE, [
            s("div", {
              class: "progress-fill",
              style: Vt({ width: `${P.value}%` })
            }, null, 4)
          ]),
          Ue(o) ? (a(), c("div", AE, [
            s("span", UE, f(Ue(o).filename), 1),
            s("span", zE, f(T(Ue(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), aT = /* @__PURE__ */ pe(nT, [["__scopeId", "data-v-60751cfa"]]), lT = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', iT = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', rT = {
  comfy: lT,
  phosphor: iT
}, Xa = "comfy", Or = "comfygit-theme";
let Ks = null, Nr = Xa;
function cT() {
  try {
    const e = localStorage.getItem(Or);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Xa;
}
function Ar(e = Xa) {
  Ks && Ks.remove(), Ks = document.createElement("style"), Ks.id = "comfygit-theme-styles", Ks.setAttribute("data-theme", e), Ks.textContent = rT[e], document.head.appendChild(Ks), document.body.setAttribute("data-comfygit-theme", e), Nr = e;
  try {
    localStorage.setItem(Or, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function uT() {
  return Nr;
}
function dT(e) {
  Ar(e);
}
function fT(e) {
  var i;
  const { ui_id: t, state: o } = e || {}, n = (o == null ? void 0 : o.history) || {};
  if (!t)
    return null;
  const l = n[t];
  return l && l.result === "error" && ((i = l.status) == null ? void 0 : i.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Qa = document.createElement("link");
Qa.rel = "stylesheet";
Qa.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(Qa);
const mT = cT();
Ar(mT);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), dT(e);
  },
  getTheme: () => {
    const e = uT();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Kt = null, Dt = null, Fo = null, To = null, Yl = null;
const vo = k(null);
let Za = "managed", Ur = !1;
async function yn() {
  var e;
  if (!((e = Os) != null && e.api)) return null;
  try {
    const t = await Os.api.fetchApi("/v2/comfygit/status");
    t.ok && (vo.value = await t.json());
  } catch {
  }
}
async function Ca() {
  var e;
  if ((e = Os) != null && e.api)
    try {
      const t = await Os.api.fetchApi("/v2/setup/status");
      if (t.ok) {
        const o = await t.json();
        Za = o.state, Ur = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function xa() {
  var t;
  if (Za === "managed" || !Ur) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((t = o.textContent) == null ? void 0 : t.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function vT() {
  if (!vo.value) return !1;
  const e = vo.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || vo.value.has_changes;
}
function Jl(e) {
  Kt && Kt.remove(), Kt = document.createElement("div"), Kt.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Kt.appendChild(t), Kt.addEventListener("click", (l) => {
    l.target === Kt && ua();
  });
  const o = (l) => {
    l.key === "Escape" && (ua(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), Ka({
    render: () => Wn(dE, {
      initialView: e,
      onClose: ua,
      onStatusUpdate: async (l) => {
        vo.value = l, Bo(), await Ca(), Sa(), xa();
      }
    })
  }).mount(t), document.body.appendChild(Kt);
}
function ua() {
  Kt && (Kt.remove(), Kt = null);
}
function pT(e) {
  Po(), Dt = document.createElement("div"), Dt.className = "comfygit-commit-popover-container";
  const t = e.getBoundingClientRect();
  Dt.style.position = "fixed", Dt.style.top = `${t.bottom + 8}px`, Dt.style.right = `${window.innerWidth - t.right}px`, Dt.style.zIndex = "10001";
  const o = (l) => {
    Dt && !Dt.contains(l.target) && l.target !== e && (Po(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const n = (l) => {
    l.key === "Escape" && (Po(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), Fo = Ka({
    render: () => Wn(Mr, {
      status: vo.value,
      onClose: Po,
      onCommitted: (l) => {
        Po(), gT(l.success, l.message), yn().then(Bo);
      }
    })
  }), Fo.mount(Dt), document.body.appendChild(Dt);
}
function Po() {
  Fo && (Fo.unmount(), Fo = null), Dt && (Dt.remove(), Dt = null);
}
function gT(e, t) {
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
  i.textContent = t, o.appendChild(i), document.body.appendChild(o), setTimeout(() => {
    o.style.opacity = "0", o.style.transition = "opacity 0.2s ease", setTimeout(() => o.remove(), 200);
  }, 3e3);
}
function hT() {
  To || (To = document.createElement("div"), To.className = "comfygit-download-queue-root", Yl = Ka({
    render: () => Wn(aT)
  }), Yl.mount(To), document.body.appendChild(To), console.log("[ComfyGit] Model download queue mounted"));
}
let Ut = null;
function Bo() {
  if (!Ut) return;
  const e = Ut.querySelector(".commit-indicator");
  e && (e.style.display = vT() ? "block" : "none");
}
function Sa() {
  if (!Ut) return;
  const e = Za !== "managed";
  Ut.disabled = e, Ut.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const zr = document.createElement("style");
zr.textContent = `
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
document.head.appendChild(zr);
Os.registerExtension({
  name: "Comfy.ComfyGitPanel",
  async setup() {
    var l, i;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const t = document.createElement("button");
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = Jl, Ut = document.createElement("button"), Ut.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ut.innerHTML = 'Commit <span class="commit-indicator"></span>', Ut.title = "Quick Commit", Ut.onclick = () => pT(Ut), e.appendChild(t), e.appendChild(Ut), (i = (l = Os.menu) == null ? void 0 : l.settingsGroup) != null && i.element && (Os.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), hT();
    const { loadPendingDownloads: o } = en();
    o(), await Promise.all([yn(), Ca()]), Bo(), Sa(), xa(), setTimeout(xa, 100), setInterval(async () => {
      await Promise.all([yn(), Ca()]), Bo(), Sa();
    }, 3e4);
    const n = Os.api;
    if (n) {
      let r = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((v) => {
          (v.startsWith("workflow:") || v.startsWith("Comfy.OpenWorkflowsPaths:") || v.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(v);
        }), window.location.reload();
      }, u = function() {
        const v = document.createElement("div");
        v.style.cssText = `
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
        const h = document.createElement("span");
        h.textContent = "Workflows updated - refresh required", v.appendChild(h);
        const w = document.createElement("button");
        w.textContent = "Refresh", w.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, w.onmouseover = () => w.style.background = "var(--comfy-input-bg)", w.onmouseout = () => w.style.background = "var(--comfy-menu-bg)", w.onclick = () => r(), v.appendChild(w);
        const p = document.createElement("button");
        p.textContent = "×", p.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, p.onmouseover = () => p.style.opacity = "1", p.onmouseout = () => p.style.opacity = "0.6", p.onclick = () => v.remove(), v.appendChild(p), document.body.appendChild(v), console.log("[ComfyGit] Refresh notification displayed");
      }, d = function(v) {
        const h = document.getElementById("comfygit-error-toast");
        h && h.remove();
        const w = document.createElement("div");
        w.id = "comfygit-error-toast", w.style.cssText = `
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
        const p = document.createElement("span");
        p.textContent = "⚠️", p.style.fontSize = "20px", w.appendChild(p);
        const _ = document.createElement("div");
        _.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const x = document.createElement("div");
        x.textContent = "Node installation failed", x.style.cssText = "font-weight: 600; color: #e53935;", _.appendChild(x);
        const $ = document.createElement("div");
        $.textContent = "Dependency conflict detected", $.style.cssText = "font-size: 12px; opacity: 0.8;", _.appendChild($), w.appendChild(_);
        const P = document.createElement("button");
        P.textContent = "View Logs", P.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, P.onmouseover = () => P.style.background = "#c62828", P.onmouseout = () => P.style.background = "#e53935", P.onclick = () => {
          w.remove(), Jl("debug-env");
        }, w.appendChild(P);
        const N = document.createElement("button");
        N.textContent = "×", N.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, N.onmouseover = () => N.style.opacity = "1", N.onmouseout = () => N.style.opacity = "0.6", N.onclick = () => w.remove(), w.appendChild(N), document.body.appendChild(w), console.log("[ComfyGit] Manager error toast displayed:", v), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && w.remove();
        }, 1e4);
      };
      n.addEventListener("comfygit:workflow-changed", async (v) => {
        const { change_type: h, workflow_name: w } = v.detail;
        console.log(`[ComfyGit] Workflow ${h}: ${w}`), await yn(), Bo();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let m = !1;
      n.addEventListener("status", async (v) => {
        const h = v.detail != null;
        h && !m && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") === "true" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), r()) : u()), m = h;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (v) => {
        const h = fT(v.detail);
        h && d(h);
      }), console.log("[ComfyGit] Manager error notification system initialized");
    }
  }
});
