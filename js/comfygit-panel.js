import { app as es } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function qa(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const gt = {}, $o = [], $s = () => {
}, gi = () => !1, Yn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ya = (e) => e.startsWith("onUpdate:"), Tt = Object.assign, Qa = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, cc = Object.prototype.hasOwnProperty, ut = (e, s) => cc.call(e, s), Ye = Array.isArray, Co = (e) => fn(e) === "[object Map]", Ro = (e) => fn(e) === "[object Set]", wl = (e) => fn(e) === "[object Date]", Ze = (e) => typeof e == "function", xt = (e) => typeof e == "string", ds = (e) => typeof e == "symbol", vt = (e) => e !== null && typeof e == "object", hi = (e) => (vt(e) || Ze(e)) && Ze(e.then) && Ze(e.catch), yi = Object.prototype.toString, fn = (e) => yi.call(e), uc = (e) => fn(e).slice(8, -1), wi = (e) => fn(e) === "[object Object]", Ja = (e) => xt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ho = /* @__PURE__ */ qa(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Qn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, dc = /-\w/g, ns = Qn(
  (e) => e.replace(dc, (s) => s.slice(1).toUpperCase())
), mc = /\B([A-Z])/g, Ks = Qn(
  (e) => e.replace(mc, "-$1").toLowerCase()
), Jn = Qn((e) => e.charAt(0).toUpperCase() + e.slice(1)), fa = Qn(
  (e) => e ? `on${Jn(e)}` : ""
), Gs = (e, s) => !Object.is(e, s), Pn = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, _i = (e, s, o, a = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: o
  });
}, Xn = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, fc = (e) => {
  const s = xt(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let _l;
const Zn = () => _l || (_l = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Jt(e) {
  if (Ye(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = xt(a) ? hc(a) : Jt(a);
      if (l)
        for (const r in l)
          s[r] = l[r];
    }
    return s;
  } else if (xt(e) || vt(e))
    return e;
}
const vc = /;(?![^(]*\))/g, pc = /:([^]+)/, gc = /\/\*[^]*?\*\//g;
function hc(e) {
  const s = {};
  return e.replace(gc, "").split(vc).forEach((o) => {
    if (o) {
      const a = o.split(pc);
      a.length > 1 && (s[a[0].trim()] = a[1].trim());
    }
  }), s;
}
function Pe(e) {
  let s = "";
  if (xt(e))
    s = e;
  else if (Ye(e))
    for (let o = 0; o < e.length; o++) {
      const a = Pe(e[o]);
      a && (s += a + " ");
    }
  else if (vt(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const yc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", wc = /* @__PURE__ */ qa(yc);
function ki(e) {
  return !!e || e === "";
}
function _c(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let a = 0; o && a < e.length; a++)
    o = ao(e[a], s[a]);
  return o;
}
function ao(e, s) {
  if (e === s) return !0;
  let o = wl(e), a = wl(s);
  if (o || a)
    return o && a ? e.getTime() === s.getTime() : !1;
  if (o = ds(e), a = ds(s), o || a)
    return e === s;
  if (o = Ye(e), a = Ye(s), o || a)
    return o && a ? _c(e, s) : !1;
  if (o = vt(e), a = vt(s), o || a) {
    if (!o || !a)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(s).length;
    if (l !== r)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), m = s.hasOwnProperty(c);
      if (u && !m || !u && m || !ao(e[c], s[c]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function Xa(e, s) {
  return e.findIndex((o) => ao(o, s));
}
const bi = (e) => !!(e && e.__v_isRef === !0), d = (e) => xt(e) ? e : e == null ? "" : Ye(e) || vt(e) && (e.toString === yi || !Ze(e.toString)) ? bi(e) ? d(e.value) : JSON.stringify(e, $i, 2) : String(e), $i = (e, s) => bi(s) ? $i(e, s.value) : Co(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [a, l], r) => (o[va(a, r) + " =>"] = l, o),
    {}
  )
} : Ro(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => va(o))
} : ds(s) ? va(s) : vt(s) && !Ye(s) && !wi(s) ? String(s) : s, va = (e, s = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ds(e) ? `Symbol(${(o = e.description) != null ? o : s})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ht;
class kc {
  constructor(s = !1) {
    this.detached = s, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ht, !s && Ht && (this.index = (Ht.scopes || (Ht.scopes = [])).push(
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
      const o = Ht;
      try {
        return Ht = this, s();
      } finally {
        Ht = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ht, Ht = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ht = this.prevScope, this.prevScope = void 0);
  }
  stop(s) {
    if (this._active) {
      this._active = !1;
      let o, a;
      for (o = 0, a = this.effects.length; o < a; o++)
        this.effects[o].stop();
      for (this.effects.length = 0, o = 0, a = this.cleanups.length; o < a; o++)
        this.cleanups[o]();
      if (this.cleanups.length = 0, this.scopes) {
        for (o = 0, a = this.scopes.length; o < a; o++)
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
function bc() {
  return Ht;
}
let wt;
const pa = /* @__PURE__ */ new WeakSet();
class Ci {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ht && Ht.active && Ht.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, pa.has(this) && (pa.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Si(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, kl(this), Ii(this);
    const s = wt, o = us;
    wt = this, us = !0;
    try {
      return this.fn();
    } finally {
      Ei(this), wt = s, us = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        tl(s);
      this.deps = this.depsTail = void 0, kl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? pa.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ma(this) && this.run();
  }
  get dirty() {
    return Ma(this);
  }
}
let xi = 0, Ko, qo;
function Si(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = qo, qo = e;
    return;
  }
  e.next = Ko, Ko = e;
}
function Za() {
  xi++;
}
function el() {
  if (--xi > 0)
    return;
  if (qo) {
    let s = qo;
    for (qo = void 0; s; ) {
      const o = s.next;
      s.next = void 0, s.flags &= -9, s = o;
    }
  }
  let e;
  for (; Ko; ) {
    let s = Ko;
    for (Ko = void 0; s; ) {
      const o = s.next;
      if (s.next = void 0, s.flags &= -9, s.flags & 1)
        try {
          s.trigger();
        } catch (a) {
          e || (e = a);
        }
      s = o;
    }
  }
  if (e) throw e;
}
function Ii(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function Ei(e) {
  let s, o = e.depsTail, a = o;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === o && (o = l), tl(a), $c(a)) : s = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = s, e.depsTail = o;
}
function Ma(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (Ti(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function Ti(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === on) || (e.globalVersion = on, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ma(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = wt, a = us;
  wt = e, us = !0;
  try {
    Ii(e);
    const l = e.fn(e._value);
    (s.version === 0 || Gs(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    wt = o, us = a, Ei(e), e.flags &= -3;
  }
}
function tl(e, s = !1) {
  const { dep: o, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), o.subs === e && (o.subs = a, !a && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      tl(r, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function $c(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let us = !0;
const Pi = [];
function Ms() {
  Pi.push(us), us = !1;
}
function Rs() {
  const e = Pi.pop();
  us = e === void 0 ? !0 : e;
}
function kl(e) {
  const { cleanup: s } = e;
  if (e.cleanup = void 0, s) {
    const o = wt;
    wt = void 0;
    try {
      s();
    } finally {
      wt = o;
    }
  }
}
let on = 0;
class Cc {
  constructor(s, o) {
    this.sub = s, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class sl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(s) {
    this.computed = s, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(s) {
    if (!wt || !us || wt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== wt)
      o = this.activeLink = new Cc(wt, this), wt.deps ? (o.prevDep = wt.depsTail, wt.depsTail.nextDep = o, wt.depsTail = o) : wt.deps = wt.depsTail = o, Mi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = wt.depsTail, o.nextDep = void 0, wt.depsTail.nextDep = o, wt.depsTail = o, wt.deps === o && (wt.deps = a);
    }
    return o;
  }
  trigger(s) {
    this.version++, on++, this.notify(s);
  }
  notify(s) {
    Za();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      el();
    }
  }
}
function Mi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let a = s.deps; a; a = a.nextDep)
        Mi(a);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Ra = /* @__PURE__ */ new WeakMap(), oo = Symbol(
  ""
), Da = Symbol(
  ""
), nn = Symbol(
  ""
);
function Nt(e, s, o) {
  if (us && wt) {
    let a = Ra.get(e);
    a || Ra.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(o);
    l || (a.set(o, l = new sl()), l.map = a, l.key = o), l.track();
  }
}
function Es(e, s, o, a, l, r) {
  const c = Ra.get(e);
  if (!c) {
    on++;
    return;
  }
  const u = (m) => {
    m && m.trigger();
  };
  if (Za(), s === "clear")
    c.forEach(u);
  else {
    const m = Ye(e), f = m && Ja(o);
    if (m && o === "length") {
      const v = Number(a);
      c.forEach((p, _) => {
        (_ === "length" || _ === nn || !ds(_) && _ >= v) && u(p);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), f && u(c.get(nn)), s) {
        case "add":
          m ? f && u(c.get("length")) : (u(c.get(oo)), Co(e) && u(c.get(Da)));
          break;
        case "delete":
          m || (u(c.get(oo)), Co(e) && u(c.get(Da)));
          break;
        case "set":
          Co(e) && u(c.get(oo));
          break;
      }
  }
  el();
}
function ho(e) {
  const s = it(e);
  return s === e ? s : (Nt(s, "iterate", nn), ts(e) ? s : s.map(ms));
}
function ea(e) {
  return Nt(e = it(e), "iterate", nn), e;
}
function Vs(e, s) {
  return Ds(e) ? no(e) ? To(ms(s)) : To(s) : ms(s);
}
const xc = {
  __proto__: null,
  [Symbol.iterator]() {
    return ga(this, Symbol.iterator, (e) => Vs(this, e));
  },
  concat(...e) {
    return ho(this).concat(
      ...e.map((s) => Ye(s) ? ho(s) : s)
    );
  },
  entries() {
    return ga(this, "entries", (e) => (e[1] = Vs(this, e[1]), e));
  },
  every(e, s) {
    return xs(this, "every", e, s, void 0, arguments);
  },
  filter(e, s) {
    return xs(
      this,
      "filter",
      e,
      s,
      (o) => o.map((a) => Vs(this, a)),
      arguments
    );
  },
  find(e, s) {
    return xs(
      this,
      "find",
      e,
      s,
      (o) => Vs(this, o),
      arguments
    );
  },
  findIndex(e, s) {
    return xs(this, "findIndex", e, s, void 0, arguments);
  },
  findLast(e, s) {
    return xs(
      this,
      "findLast",
      e,
      s,
      (o) => Vs(this, o),
      arguments
    );
  },
  findLastIndex(e, s) {
    return xs(this, "findLastIndex", e, s, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, s) {
    return xs(this, "forEach", e, s, void 0, arguments);
  },
  includes(...e) {
    return ha(this, "includes", e);
  },
  indexOf(...e) {
    return ha(this, "indexOf", e);
  },
  join(e) {
    return ho(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ha(this, "lastIndexOf", e);
  },
  map(e, s) {
    return xs(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return Ao(this, "pop");
  },
  push(...e) {
    return Ao(this, "push", e);
  },
  reduce(e, ...s) {
    return bl(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return bl(this, "reduceRight", e, s);
  },
  shift() {
    return Ao(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return xs(this, "some", e, s, void 0, arguments);
  },
  splice(...e) {
    return Ao(this, "splice", e);
  },
  toReversed() {
    return ho(this).toReversed();
  },
  toSorted(e) {
    return ho(this).toSorted(e);
  },
  toSpliced(...e) {
    return ho(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ao(this, "unshift", e);
  },
  values() {
    return ga(this, "values", (e) => Vs(this, e));
  }
};
function ga(e, s, o) {
  const a = ea(e), l = a[s]();
  return a !== e && !ts(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const Sc = Array.prototype;
function xs(e, s, o, a, l, r) {
  const c = ea(e), u = c !== e && !ts(e), m = c[s];
  if (m !== Sc[s]) {
    const p = m.apply(e, r);
    return u ? ms(p) : p;
  }
  let f = o;
  c !== e && (u ? f = function(p, _) {
    return o.call(this, Vs(e, p), _, e);
  } : o.length > 2 && (f = function(p, _) {
    return o.call(this, p, _, e);
  }));
  const v = m.call(c, f, a);
  return u && l ? l(v) : v;
}
function bl(e, s, o, a) {
  const l = ea(e);
  let r = o;
  return l !== e && (ts(e) ? o.length > 3 && (r = function(c, u, m) {
    return o.call(this, c, u, m, e);
  }) : r = function(c, u, m) {
    return o.call(this, c, Vs(e, u), m, e);
  }), l[s](r, ...a);
}
function ha(e, s, o) {
  const a = it(e);
  Nt(a, "iterate", nn);
  const l = a[s](...o);
  return (l === -1 || l === !1) && al(o[0]) ? (o[0] = it(o[0]), a[s](...o)) : l;
}
function Ao(e, s, o = []) {
  Ms(), Za();
  const a = it(e)[s].apply(e, o);
  return el(), Rs(), a;
}
const Ic = /* @__PURE__ */ qa("__proto__,__v_isRef,__isVue"), Ri = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ds)
);
function Ec(e) {
  ds(e) || (e = String(e));
  const s = it(this);
  return Nt(s, "has", e), s.hasOwnProperty(e);
}
class Di {
  constructor(s = !1, o = !1) {
    this._isReadonly = s, this._isShallow = o;
  }
  get(s, o, a) {
    if (o === "__v_skip") return s.__v_skip;
    const l = this._isReadonly, r = this._isShallow;
    if (o === "__v_isReactive")
      return !l;
    if (o === "__v_isReadonly")
      return l;
    if (o === "__v_isShallow")
      return r;
    if (o === "__v_raw")
      return a === (l ? r ? Oc : Ai : r ? Ui : Ni).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(a) ? s : void 0;
    const c = Ye(s);
    if (!l) {
      let m;
      if (c && (m = xc[o]))
        return m;
      if (o === "hasOwnProperty")
        return Ec;
    }
    const u = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ot(s) ? s : a
    );
    if ((ds(o) ? Ri.has(o) : Ic(o)) || (l || Nt(s, "get", o), r))
      return u;
    if (Ot(u)) {
      const m = c && Ja(o) ? u : u.value;
      return l && vt(m) ? An(m) : m;
    }
    return vt(u) ? l ? An(u) : qs(u) : u;
  }
}
class Li extends Di {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, a, l) {
    let r = s[o];
    const c = Ye(s) && Ja(o);
    if (!this._isShallow) {
      const f = Ds(r);
      if (!ts(a) && !Ds(a) && (r = it(r), a = it(a)), !c && Ot(r) && !Ot(a))
        return f || (r.value = a), !0;
    }
    const u = c ? Number(o) < s.length : ut(s, o), m = Reflect.set(
      s,
      o,
      a,
      Ot(s) ? s : l
    );
    return s === it(l) && (u ? Gs(a, r) && Es(s, "set", o, a) : Es(s, "add", o, a)), m;
  }
  deleteProperty(s, o) {
    const a = ut(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && a && Es(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const a = Reflect.has(s, o);
    return (!ds(o) || !Ri.has(o)) && Nt(s, "has", o), a;
  }
  ownKeys(s) {
    return Nt(
      s,
      "iterate",
      Ye(s) ? "length" : oo
    ), Reflect.ownKeys(s);
  }
}
class Tc extends Di {
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
const Pc = /* @__PURE__ */ new Li(), Mc = /* @__PURE__ */ new Tc(), Rc = /* @__PURE__ */ new Li(!0);
const La = (e) => e, wn = (e) => Reflect.getPrototypeOf(e);
function Dc(e, s, o) {
  return function(...a) {
    const l = this.__v_raw, r = it(l), c = Co(r), u = e === "entries" || e === Symbol.iterator && c, m = e === "keys" && c, f = l[e](...a), v = o ? La : s ? To : ms;
    return !s && Nt(
      r,
      "iterate",
      m ? Da : oo
    ), {
      // iterator protocol
      next() {
        const { value: p, done: _ } = f.next();
        return _ ? { value: p, done: _ } : {
          value: u ? [v(p[0]), v(p[1])] : v(p),
          done: _
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function _n(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Lc(e, s) {
  const o = {
    get(l) {
      const r = this.__v_raw, c = it(r), u = it(l);
      e || (Gs(l, u) && Nt(c, "get", l), Nt(c, "get", u));
      const { has: m } = wn(c), f = s ? La : e ? To : ms;
      if (m.call(c, l))
        return f(r.get(l));
      if (m.call(c, u))
        return f(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && Nt(it(l), "iterate", oo), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = it(r), u = it(l);
      return e || (Gs(l, u) && Nt(c, "has", l), Nt(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, m = it(u), f = s ? La : e ? To : ms;
      return !e && Nt(m, "iterate", oo), u.forEach((v, p) => l.call(r, f(v), f(p), c));
    }
  };
  return Tt(
    o,
    e ? {
      add: _n("add"),
      set: _n("set"),
      delete: _n("delete"),
      clear: _n("clear")
    } : {
      add(l) {
        !s && !ts(l) && !Ds(l) && (l = it(l));
        const r = it(this);
        return wn(r).has.call(r, l) || (r.add(l), Es(r, "add", l, l)), this;
      },
      set(l, r) {
        !s && !ts(r) && !Ds(r) && (r = it(r));
        const c = it(this), { has: u, get: m } = wn(c);
        let f = u.call(c, l);
        f || (l = it(l), f = u.call(c, l));
        const v = m.call(c, l);
        return c.set(l, r), f ? Gs(r, v) && Es(c, "set", l, r) : Es(c, "add", l, r), this;
      },
      delete(l) {
        const r = it(this), { has: c, get: u } = wn(r);
        let m = c.call(r, l);
        m || (l = it(l), m = c.call(r, l)), u && u.call(r, l);
        const f = r.delete(l);
        return m && Es(r, "delete", l, void 0), f;
      },
      clear() {
        const l = it(this), r = l.size !== 0, c = l.clear();
        return r && Es(
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
    o[l] = Dc(l, e, s);
  }), o;
}
function ol(e, s) {
  const o = Lc(e, s);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    ut(o, l) && l in a ? o : a,
    l,
    r
  );
}
const Nc = {
  get: /* @__PURE__ */ ol(!1, !1)
}, Uc = {
  get: /* @__PURE__ */ ol(!1, !0)
}, Ac = {
  get: /* @__PURE__ */ ol(!0, !1)
};
const Ni = /* @__PURE__ */ new WeakMap(), Ui = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ new WeakMap(), Oc = /* @__PURE__ */ new WeakMap();
function zc(e) {
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
function Fc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : zc(uc(e));
}
function qs(e) {
  return Ds(e) ? e : nl(
    e,
    !1,
    Pc,
    Nc,
    Ni
  );
}
function Vc(e) {
  return nl(
    e,
    !1,
    Rc,
    Uc,
    Ui
  );
}
function An(e) {
  return nl(
    e,
    !0,
    Mc,
    Ac,
    Ai
  );
}
function nl(e, s, o, a, l) {
  if (!vt(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const r = Fc(e);
  if (r === 0)
    return e;
  const c = l.get(e);
  if (c)
    return c;
  const u = new Proxy(
    e,
    r === 2 ? a : o
  );
  return l.set(e, u), u;
}
function no(e) {
  return Ds(e) ? no(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ds(e) {
  return !!(e && e.__v_isReadonly);
}
function ts(e) {
  return !!(e && e.__v_isShallow);
}
function al(e) {
  return e ? !!e.__v_raw : !1;
}
function it(e) {
  const s = e && e.__v_raw;
  return s ? it(s) : e;
}
function Bc(e) {
  return !ut(e, "__v_skip") && Object.isExtensible(e) && _i(e, "__v_skip", !0), e;
}
const ms = (e) => vt(e) ? qs(e) : e, To = (e) => vt(e) ? An(e) : e;
function Ot(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return Wc(e, !1);
}
function Wc(e, s) {
  return Ot(e) ? e : new Gc(e, s);
}
class Gc {
  constructor(s, o) {
    this.dep = new sl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : it(s), this._value = o ? s : ms(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, a = this.__v_isShallow || ts(s) || Ds(s);
    s = a ? s : it(s), Gs(s, o) && (this._rawValue = s, this._value = a ? s : ms(s), this.dep.trigger());
  }
}
function Je(e) {
  return Ot(e) ? e.value : e;
}
const jc = {
  get: (e, s, o) => s === "__v_raw" ? e : Je(Reflect.get(e, s, o)),
  set: (e, s, o, a) => {
    const l = e[s];
    return Ot(l) && !Ot(o) ? (l.value = o, !0) : Reflect.set(e, s, o, a);
  }
};
function Oi(e) {
  return no(e) ? e : new Proxy(e, jc);
}
class Hc {
  constructor(s, o, a) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new sl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = on - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    wt !== this)
      return Si(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return Ti(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function Kc(e, s, o = !1) {
  let a, l;
  return Ze(e) ? a = e : (a = e.get, l = e.set), new Hc(a, l, o);
}
const kn = {}, On = /* @__PURE__ */ new WeakMap();
let to;
function qc(e, s = !1, o = to) {
  if (o) {
    let a = On.get(o);
    a || On.set(o, a = []), a.push(e);
  }
}
function Yc(e, s, o = gt) {
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: m } = o, f = (P) => l ? P : ts(P) || l === !1 || l === 0 ? Ts(P, 1) : Ts(P);
  let v, p, _, g, w = !1, C = !1;
  if (Ot(e) ? (p = () => e.value, w = ts(e)) : no(e) ? (p = () => f(e), w = !0) : Ye(e) ? (C = !0, w = e.some((P) => no(P) || ts(P)), p = () => e.map((P) => {
    if (Ot(P))
      return P.value;
    if (no(P))
      return f(P);
    if (Ze(P))
      return m ? m(P, 2) : P();
  })) : Ze(e) ? s ? p = m ? () => m(e, 2) : e : p = () => {
    if (_) {
      Ms();
      try {
        _();
      } finally {
        Rs();
      }
    }
    const P = to;
    to = v;
    try {
      return m ? m(e, 3, [g]) : e(g);
    } finally {
      to = P;
    }
  } : p = $s, s && l) {
    const P = p, R = l === !0 ? 1 / 0 : l;
    p = () => Ts(P(), R);
  }
  const $ = bc(), x = () => {
    v.stop(), $ && $.active && Qa($.effects, v);
  };
  if (r && s) {
    const P = s;
    s = (...R) => {
      P(...R), x();
    };
  }
  let O = C ? new Array(e.length).fill(kn) : kn;
  const T = (P) => {
    if (!(!(v.flags & 1) || !v.dirty && !P))
      if (s) {
        const R = v.run();
        if (l || w || (C ? R.some((U, B) => Gs(U, O[B])) : Gs(R, O))) {
          _ && _();
          const U = to;
          to = v;
          try {
            const B = [
              R,
              // pass undefined as the old value when it's changed for the first time
              O === kn ? void 0 : C && O[0] === kn ? [] : O,
              g
            ];
            O = R, m ? m(s, 3, B) : (
              // @ts-expect-error
              s(...B)
            );
          } finally {
            to = U;
          }
        }
      } else
        v.run();
  };
  return u && u(T), v = new Ci(p), v.scheduler = c ? () => c(T, !1) : T, g = (P) => qc(P, !1, v), _ = v.onStop = () => {
    const P = On.get(v);
    if (P) {
      if (m)
        m(P, 4);
      else
        for (const R of P) R();
      On.delete(v);
    }
  }, s ? a ? T(!0) : O = v.run() : c ? c(T.bind(null, !0), !0) : v.run(), x.pause = v.pause.bind(v), x.resume = v.resume.bind(v), x.stop = x, x;
}
function Ts(e, s = 1 / 0, o) {
  if (s <= 0 || !vt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, Ot(e))
    Ts(e.value, s, o);
  else if (Ye(e))
    for (let a = 0; a < e.length; a++)
      Ts(e[a], s, o);
  else if (Ro(e) || Co(e))
    e.forEach((a) => {
      Ts(a, s, o);
    });
  else if (wi(e)) {
    for (const a in e)
      Ts(e[a], s, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Ts(e[a], s, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function vn(e, s, o, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    ta(l, s, o);
  }
}
function fs(e, s, o, a) {
  if (Ze(e)) {
    const l = vn(e, s, o, a);
    return l && hi(l) && l.catch((r) => {
      ta(r, s, o);
    }), l;
  }
  if (Ye(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(fs(e[r], s, o, a));
    return l;
  }
}
function ta(e, s, o, a = !0) {
  const l = s ? s.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = s && s.appContext.config || gt;
  if (s) {
    let u = s.parent;
    const m = s.proxy, f = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; u; ) {
      const v = u.ec;
      if (v) {
        for (let p = 0; p < v.length; p++)
          if (v[p](e, m, f) === !1)
            return;
      }
      u = u.parent;
    }
    if (r) {
      Ms(), vn(r, null, 10, [
        e,
        m,
        f
      ]), Rs();
      return;
    }
  }
  Qc(e, o, l, a, c);
}
function Qc(e, s, o, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Wt = [];
let _s = -1;
const xo = [];
let Bs = null, _o = 0;
const zi = /* @__PURE__ */ Promise.resolve();
let zn = null;
function Et(e) {
  const s = zn || zi;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function Jc(e) {
  let s = _s + 1, o = Wt.length;
  for (; s < o; ) {
    const a = s + o >>> 1, l = Wt[a], r = an(l);
    r < e || r === e && l.flags & 2 ? s = a + 1 : o = a;
  }
  return s;
}
function ll(e) {
  if (!(e.flags & 1)) {
    const s = an(e), o = Wt[Wt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= an(o) ? Wt.push(e) : Wt.splice(Jc(s), 0, e), e.flags |= 1, Fi();
  }
}
function Fi() {
  zn || (zn = zi.then(Bi));
}
function Xc(e) {
  Ye(e) ? xo.push(...e) : Bs && e.id === -1 ? Bs.splice(_o + 1, 0, e) : e.flags & 1 || (xo.push(e), e.flags |= 1), Fi();
}
function $l(e, s, o = _s + 1) {
  for (; o < Wt.length; o++) {
    const a = Wt[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      Wt.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function Vi(e) {
  if (xo.length) {
    const s = [...new Set(xo)].sort(
      (o, a) => an(o) - an(a)
    );
    if (xo.length = 0, Bs) {
      Bs.push(...s);
      return;
    }
    for (Bs = s, _o = 0; _o < Bs.length; _o++) {
      const o = Bs[_o];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Bs = null, _o = 0;
  }
}
const an = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Bi(e) {
  try {
    for (_s = 0; _s < Wt.length; _s++) {
      const s = Wt[_s];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), vn(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; _s < Wt.length; _s++) {
      const s = Wt[_s];
      s && (s.flags &= -2);
    }
    _s = -1, Wt.length = 0, Vi(), zn = null, (Wt.length || xo.length) && Bi();
  }
}
let Rt = null, Wi = null;
function Fn(e) {
  const s = Rt;
  return Rt = e, Wi = e && e.type.__scopeId || null, s;
}
function h(e, s = Rt, o) {
  if (!s || e._n)
    return e;
  const a = (...l) => {
    a._d && Wn(-1);
    const r = Fn(s);
    let c;
    try {
      c = e(...l);
    } finally {
      Fn(r), a._d && Wn(1);
    }
    return c;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function nt(e, s) {
  if (Rt === null)
    return e;
  const o = la(Rt), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [r, c, u, m = gt] = s[l];
    r && (Ze(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ts(c), a.push({
      dir: r,
      instance: o,
      value: c,
      oldValue: void 0,
      arg: u,
      modifiers: m
    }));
  }
  return e;
}
function Js(e, s, o, a) {
  const l = e.dirs, r = s && s.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let m = u.dir[a];
    m && (Ms(), fs(m, o, 8, [
      e.el,
      u,
      e,
      s
    ]), Rs());
  }
}
const Gi = Symbol("_vte"), ji = (e) => e.__isTeleport, Yo = (e) => e && (e.disabled || e.disabled === ""), Cl = (e) => e && (e.defer || e.defer === ""), xl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Sl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Na = (e, s) => {
  const o = e && e.to;
  return xt(o) ? s ? s(o) : null : o;
}, Hi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, a, l, r, c, u, m, f) {
    const {
      mc: v,
      pc: p,
      pbc: _,
      o: { insert: g, querySelector: w, createText: C, createComment: $ }
    } = f, x = Yo(s.props);
    let { shapeFlag: O, children: T, dynamicChildren: P } = s;
    if (e == null) {
      const R = s.el = C(""), U = s.anchor = C("");
      g(R, o, a), g(U, o, a);
      const B = (N, se) => {
        O & 16 && v(
          T,
          N,
          se,
          l,
          r,
          c,
          u,
          m
        );
      }, I = () => {
        const N = s.target = Na(s.props, w), se = Ki(N, s, C, g);
        N && (c !== "svg" && xl(N) ? c = "svg" : c !== "mathml" && Sl(N) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(N), x || (B(N, se), Mn(s, !1)));
      };
      x && (B(o, U), Mn(s, !0)), Cl(s.props) ? (s.el.__isMounted = !1, Vt(() => {
        I(), delete s.el.__isMounted;
      }, r)) : I();
    } else {
      if (Cl(s.props) && e.el.__isMounted === !1) {
        Vt(() => {
          Hi.process(
            e,
            s,
            o,
            a,
            l,
            r,
            c,
            u,
            m,
            f
          );
        }, r);
        return;
      }
      s.el = e.el, s.targetStart = e.targetStart;
      const R = s.anchor = e.anchor, U = s.target = e.target, B = s.targetAnchor = e.targetAnchor, I = Yo(e.props), N = I ? o : U, se = I ? R : B;
      if (c === "svg" || xl(U) ? c = "svg" : (c === "mathml" || Sl(U)) && (c = "mathml"), P ? (_(
        e.dynamicChildren,
        P,
        N,
        l,
        r,
        c,
        u
      ), dl(e, s, !0)) : m || p(
        e,
        s,
        N,
        se,
        l,
        r,
        c,
        u,
        !1
      ), x)
        I ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : bn(
          s,
          o,
          R,
          f,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const te = s.target = Na(
          s.props,
          w
        );
        te && bn(
          s,
          te,
          null,
          f,
          0
        );
      } else I && bn(
        s,
        U,
        B,
        f,
        1
      );
      Mn(s, x);
    }
  },
  remove(e, s, o, { um: a, o: { remove: l } }, r) {
    const {
      shapeFlag: c,
      children: u,
      anchor: m,
      targetStart: f,
      targetAnchor: v,
      target: p,
      props: _
    } = e;
    if (p && (l(f), l(v)), r && l(m), c & 16) {
      const g = r || !Yo(_);
      for (let w = 0; w < u.length; w++) {
        const C = u[w];
        a(
          C,
          s,
          o,
          g,
          !!C.dynamicChildren
        );
      }
    }
  },
  move: bn,
  hydrate: Zc
};
function bn(e, s, o, { o: { insert: a }, m: l }, r = 2) {
  r === 0 && a(e.targetAnchor, s, o);
  const { el: c, anchor: u, shapeFlag: m, children: f, props: v } = e, p = r === 2;
  if (p && a(c, s, o), (!p || Yo(v)) && m & 16)
    for (let _ = 0; _ < f.length; _++)
      l(
        f[_],
        s,
        o,
        2
      );
  p && a(u, s, o);
}
function Zc(e, s, o, a, l, r, {
  o: { nextSibling: c, parentNode: u, querySelector: m, insert: f, createText: v }
}, p) {
  function _(C, $, x, O) {
    $.anchor = p(
      c(C),
      $,
      u(C),
      o,
      a,
      l,
      r
    ), $.targetStart = x, $.targetAnchor = O;
  }
  const g = s.target = Na(
    s.props,
    m
  ), w = Yo(s.props);
  if (g) {
    const C = g._lpa || g.firstChild;
    if (s.shapeFlag & 16)
      if (w)
        _(
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
              s.targetAnchor = $, g._lpa = s.targetAnchor && c(s.targetAnchor);
              break;
            }
          }
          $ = c($);
        }
        s.targetAnchor || Ki(g, s, v, f), p(
          C && c(C),
          s,
          g,
          o,
          a,
          l,
          r
        );
      }
    Mn(s, w);
  } else w && s.shapeFlag & 16 && _(e, s, e, c(e));
  return s.anchor && c(s.anchor);
}
const Dt = Hi;
function Mn(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let a, l;
    for (s ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", o.uid), a = a.nextSibling;
    o.ut();
  }
}
function Ki(e, s, o, a) {
  const l = s.targetStart = o(""), r = s.targetAnchor = o("");
  return l[Gi] = r, e && (a(l, e), a(r, e)), r;
}
const Is = Symbol("_leaveCb"), $n = Symbol("_enterCb");
function qi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return at(() => {
    e.isMounted = !0;
  }), sr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Zt = [Function, Array], Yi = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Zt,
  onEnter: Zt,
  onAfterEnter: Zt,
  onEnterCancelled: Zt,
  // leave
  onBeforeLeave: Zt,
  onLeave: Zt,
  onAfterLeave: Zt,
  onLeaveCancelled: Zt,
  // appear
  onBeforeAppear: Zt,
  onAppear: Zt,
  onAfterAppear: Zt,
  onAppearCancelled: Zt
}, Qi = (e) => {
  const s = e.subTree;
  return s.component ? Qi(s.component) : s;
}, eu = {
  name: "BaseTransition",
  props: Yi,
  setup(e, { slots: s }) {
    const o = fl(), a = qi();
    return () => {
      const l = s.default && il(s.default(), !0);
      if (!l || !l.length)
        return;
      const r = Ji(l), c = it(e), { mode: u } = c;
      if (a.isLeaving)
        return ya(r);
      const m = Il(r);
      if (!m)
        return ya(r);
      let f = ln(
        m,
        c,
        a,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (p) => f = p
      );
      m.type !== Ut && lo(m, f);
      let v = o.subTree && Il(o.subTree);
      if (v && v.type !== Ut && !so(v, m) && Qi(o).type !== Ut) {
        let p = ln(
          v,
          c,
          a,
          o
        );
        if (lo(v, p), u === "out-in" && m.type !== Ut)
          return a.isLeaving = !0, p.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, v = void 0;
          }, ya(r);
        u === "in-out" && m.type !== Ut ? p.delayLeave = (_, g, w) => {
          const C = Xi(
            a,
            v
          );
          C[String(v.key)] = v, _[Is] = () => {
            g(), _[Is] = void 0, delete f.delayedLeave, v = void 0;
          }, f.delayedLeave = () => {
            w(), delete f.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return r;
    };
  }
};
function Ji(e) {
  let s = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== Ut) {
        s = o;
        break;
      }
  }
  return s;
}
const tu = eu;
function Xi(e, s) {
  const { leavingVNodes: o } = e;
  let a = o.get(s.type);
  return a || (a = /* @__PURE__ */ Object.create(null), o.set(s.type, a)), a;
}
function ln(e, s, o, a, l) {
  const {
    appear: r,
    mode: c,
    persisted: u = !1,
    onBeforeEnter: m,
    onEnter: f,
    onAfterEnter: v,
    onEnterCancelled: p,
    onBeforeLeave: _,
    onLeave: g,
    onAfterLeave: w,
    onLeaveCancelled: C,
    onBeforeAppear: $,
    onAppear: x,
    onAfterAppear: O,
    onAppearCancelled: T
  } = s, P = String(e.key), R = Xi(o, e), U = (N, se) => {
    N && fs(
      N,
      a,
      9,
      se
    );
  }, B = (N, se) => {
    const te = se[1];
    U(N, se), Ye(N) ? N.every((Z) => Z.length <= 1) && te() : N.length <= 1 && te();
  }, I = {
    mode: c,
    persisted: u,
    beforeEnter(N) {
      let se = m;
      if (!o.isMounted)
        if (r)
          se = $ || m;
        else
          return;
      N[Is] && N[Is](
        !0
        /* cancelled */
      );
      const te = R[P];
      te && so(e, te) && te.el[Is] && te.el[Is](), U(se, [N]);
    },
    enter(N) {
      let se = f, te = v, Z = p;
      if (!o.isMounted)
        if (r)
          se = x || f, te = O || v, Z = T || p;
        else
          return;
      let X = !1;
      const G = N[$n] = (Q) => {
        X || (X = !0, Q ? U(Z, [N]) : U(te, [N]), I.delayedLeave && I.delayedLeave(), N[$n] = void 0);
      };
      se ? B(se, [N, G]) : G();
    },
    leave(N, se) {
      const te = String(e.key);
      if (N[$n] && N[$n](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return se();
      U(_, [N]);
      let Z = !1;
      const X = N[Is] = (G) => {
        Z || (Z = !0, se(), G ? U(C, [N]) : U(w, [N]), N[Is] = void 0, R[te] === e && delete R[te]);
      };
      R[te] = e, g ? B(g, [N, X]) : X();
    },
    clone(N) {
      const se = ln(
        N,
        s,
        o,
        a,
        l
      );
      return l && l(se), se;
    }
  };
  return I;
}
function ya(e) {
  if (sa(e))
    return e = js(e), e.children = null, e;
}
function Il(e) {
  if (!sa(e))
    return ji(e.type) && e.children ? Ji(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: s, children: o } = e;
  if (o) {
    if (s & 16)
      return o[0];
    if (s & 32 && Ze(o.default))
      return o.default();
  }
}
function lo(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, lo(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function il(e, s = !1, o) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : r);
    c.type === j ? (c.patchFlag & 128 && l++, a = a.concat(
      il(c.children, s, u)
    )) : (s || c.type !== Ut) && a.push(u != null ? js(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function he(e, s) {
  return Ze(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Tt({ name: e.name }, s, { setup: e })
  ) : e;
}
function Zi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Vn = /* @__PURE__ */ new WeakMap();
function Qo(e, s, o, a, l = !1) {
  if (Ye(e)) {
    e.forEach(
      (w, C) => Qo(
        w,
        s && (Ye(s) ? s[C] : s),
        o,
        a,
        l
      )
    );
    return;
  }
  if (So(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Qo(e, s, o, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? la(a.component) : a.el, c = l ? null : r, { i: u, r: m } = e, f = s && s.r, v = u.refs === gt ? u.refs = {} : u.refs, p = u.setupState, _ = it(p), g = p === gt ? gi : (w) => ut(_, w);
  if (f != null && f !== m) {
    if (El(s), xt(f))
      v[f] = null, g(f) && (p[f] = null);
    else if (Ot(f)) {
      f.value = null;
      const w = s;
      w.k && (v[w.k] = null);
    }
  }
  if (Ze(m))
    vn(m, u, 12, [c, v]);
  else {
    const w = xt(m), C = Ot(m);
    if (w || C) {
      const $ = () => {
        if (e.f) {
          const x = w ? g(m) ? p[m] : v[m] : m.value;
          if (l)
            Ye(x) && Qa(x, r);
          else if (Ye(x))
            x.includes(r) || x.push(r);
          else if (w)
            v[m] = [r], g(m) && (p[m] = v[m]);
          else {
            const O = [r];
            m.value = O, e.k && (v[e.k] = O);
          }
        } else w ? (v[m] = c, g(m) && (p[m] = c)) : C && (m.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const x = () => {
          $(), Vn.delete(e);
        };
        x.id = -1, Vn.set(e, x), Vt(x, o);
      } else
        El(e), $();
    }
  }
}
function El(e) {
  const s = Vn.get(e);
  s && (s.flags |= 8, Vn.delete(e));
}
Zn().requestIdleCallback;
Zn().cancelIdleCallback;
const So = (e) => !!e.type.__asyncLoader, sa = (e) => e.type.__isKeepAlive;
function su(e, s) {
  er(e, "a", s);
}
function ou(e, s) {
  er(e, "da", s);
}
function er(e, s, o = At) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (oa(s, a, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      sa(l.parent.vnode) && nu(a, s, o, l), l = l.parent;
  }
}
function nu(e, s, o, a) {
  const l = oa(
    s,
    e,
    a,
    !0
    /* prepend */
  );
  Ys(() => {
    Qa(a[s], l);
  }, o);
}
function oa(e, s, o = At, a = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = s.__weh || (s.__weh = (...c) => {
      Ms();
      const u = pn(o), m = fs(s, o, e, c);
      return u(), Rs(), m;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const Ls = (e) => (s, o = At) => {
  (!un || e === "sp") && oa(e, (...a) => s(...a), o);
}, au = Ls("bm"), at = Ls("m"), lu = Ls(
  "bu"
), tr = Ls("u"), sr = Ls(
  "bum"
), Ys = Ls("um"), iu = Ls(
  "sp"
), ru = Ls("rtg"), cu = Ls("rtc");
function uu(e, s = At) {
  oa("ec", e, s);
}
const du = "components", or = Symbol.for("v-ndc");
function rl(e) {
  return xt(e) ? mu(du, e, !1) || e : e || or;
}
function mu(e, s, o = !0, a = !1) {
  const l = Rt || At;
  if (l) {
    const r = l.type;
    {
      const u = ed(
        r,
        !1
      );
      if (u && (u === s || u === ns(s) || u === Jn(ns(s))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Tl(l[e] || r[e], s) || // global registration
      Tl(l.appContext[e], s)
    );
    return !c && a ? r : c;
  }
}
function Tl(e, s) {
  return e && (e[s] || e[ns(s)] || e[Jn(ns(s))]);
}
function ge(e, s, o, a) {
  let l;
  const r = o, c = Ye(e);
  if (c || xt(e)) {
    const u = c && no(e);
    let m = !1, f = !1;
    u && (m = !ts(e), f = Ds(e), e = ea(e)), l = new Array(e.length);
    for (let v = 0, p = e.length; v < p; v++)
      l[v] = s(
        m ? f ? To(ms(e[v])) : ms(e[v]) : e[v],
        v,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = s(u + 1, u, void 0, r);
  } else if (vt(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (u, m) => s(u, m, void 0, r)
      );
    else {
      const u = Object.keys(e);
      l = new Array(u.length);
      for (let m = 0, f = u.length; m < f; m++) {
        const v = u[m];
        l[m] = s(e[v], v, m, r);
      }
    }
  else
    l = [];
  return l;
}
function io(e, s) {
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    if (Ye(a))
      for (let l = 0; l < a.length; l++)
        e[a[l].name] = a[l].fn;
    else a && (e[a.name] = a.key ? (...l) => {
      const r = a.fn(...l);
      return r && (r.key = a.key), r;
    } : a.fn);
  }
  return e;
}
function ot(e, s, o = {}, a, l) {
  if (Rt.ce || Rt.parent && So(Rt.parent) && Rt.parent.ce) {
    const f = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), n(), D(
      j,
      null,
      [S("slot", o, a && a())],
      f ? -2 : 64
    );
  }
  let r = e[s];
  r && r._c && (r._d = !1), n();
  const c = r && nr(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, m = D(
    j,
    {
      key: (u && !ds(u) ? u : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!c && a ? "_fb" : "")
    },
    c || (a ? a() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), m;
}
function nr(e) {
  return e.some((s) => cn(s) ? !(s.type === Ut || s.type === j && !nr(s.children)) : !0) ? e : null;
}
const Ua = (e) => e ? $r(e) ? la(e) : Ua(e.parent) : null, Jo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Tt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ua(e.parent),
    $root: (e) => Ua(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => lr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ll(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Et.bind(e.proxy)),
    $watch: (e) => Cu.bind(e)
  })
), wa = (e, s) => e !== gt && !e.__isScriptSetup && ut(e, s), fu = {
  get({ _: e }, s) {
    if (s === "__v_skip")
      return !0;
    const { ctx: o, setupState: a, data: l, props: r, accessCache: c, type: u, appContext: m } = e;
    if (s[0] !== "$") {
      const _ = c[s];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return a[s];
          case 2:
            return l[s];
          case 4:
            return o[s];
          case 3:
            return r[s];
        }
      else {
        if (wa(a, s))
          return c[s] = 1, a[s];
        if (l !== gt && ut(l, s))
          return c[s] = 2, l[s];
        if (ut(r, s))
          return c[s] = 3, r[s];
        if (o !== gt && ut(o, s))
          return c[s] = 4, o[s];
        Aa && (c[s] = 0);
      }
    }
    const f = Jo[s];
    let v, p;
    if (f)
      return s === "$attrs" && Nt(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (v = u.__cssModules) && (v = v[s])
    )
      return v;
    if (o !== gt && ut(o, s))
      return c[s] = 4, o[s];
    if (
      // global properties
      p = m.config.globalProperties, ut(p, s)
    )
      return p[s];
  },
  set({ _: e }, s, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return wa(l, s) ? (l[s] = o, !0) : a !== gt && ut(a, s) ? (a[s] = o, !0) : ut(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (r[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: a, appContext: l, props: r, type: c }
  }, u) {
    let m;
    return !!(o[u] || e !== gt && u[0] !== "$" && ut(e, u) || wa(s, u) || ut(r, u) || ut(a, u) || ut(Jo, u) || ut(l.config.globalProperties, u) || (m = c.__cssModules) && m[u]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : ut(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function Pl(e) {
  return Ye(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let Aa = !0;
function vu(e) {
  const s = lr(e), o = e.proxy, a = e.ctx;
  Aa = !1, s.beforeCreate && Ml(s.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: r,
    methods: c,
    watch: u,
    provide: m,
    inject: f,
    // lifecycle
    created: v,
    beforeMount: p,
    mounted: _,
    beforeUpdate: g,
    updated: w,
    activated: C,
    deactivated: $,
    beforeDestroy: x,
    beforeUnmount: O,
    destroyed: T,
    unmounted: P,
    render: R,
    renderTracked: U,
    renderTriggered: B,
    errorCaptured: I,
    serverPrefetch: N,
    // public API
    expose: se,
    inheritAttrs: te,
    // assets
    components: Z,
    directives: X,
    filters: G
  } = s;
  if (f && pu(f, a, null), c)
    for (const le in c) {
      const W = c[le];
      Ze(W) && (a[le] = W.bind(o));
    }
  if (l) {
    const le = l.call(o, o);
    vt(le) && (e.data = qs(le));
  }
  if (Aa = !0, r)
    for (const le in r) {
      const W = r[le], ee = Ze(W) ? W.bind(o, o) : Ze(W.get) ? W.get.bind(o, o) : $s, ae = !Ze(W) && Ze(W.set) ? W.set.bind(o) : $s, Ne = A({
        get: ee,
        set: ae
      });
      Object.defineProperty(a, le, {
        enumerable: !0,
        configurable: !0,
        get: () => Ne.value,
        set: (Ke) => Ne.value = Ke
      });
    }
  if (u)
    for (const le in u)
      ar(u[le], a, o, le);
  if (m) {
    const le = Ze(m) ? m.call(o) : m;
    Reflect.ownKeys(le).forEach((W) => {
      ku(W, le[W]);
    });
  }
  v && Ml(v, e, "c");
  function oe(le, W) {
    Ye(W) ? W.forEach((ee) => le(ee.bind(o))) : W && le(W.bind(o));
  }
  if (oe(au, p), oe(at, _), oe(lu, g), oe(tr, w), oe(su, C), oe(ou, $), oe(uu, I), oe(cu, U), oe(ru, B), oe(sr, O), oe(Ys, P), oe(iu, N), Ye(se))
    if (se.length) {
      const le = e.exposed || (e.exposed = {});
      se.forEach((W) => {
        Object.defineProperty(le, W, {
          get: () => o[W],
          set: (ee) => o[W] = ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  R && e.render === $s && (e.render = R), te != null && (e.inheritAttrs = te), Z && (e.components = Z), X && (e.directives = X), N && Zi(e);
}
function pu(e, s, o = $s) {
  Ye(e) && (e = Oa(e));
  for (const a in e) {
    const l = e[a];
    let r;
    vt(l) ? "default" in l ? r = Rn(
      l.from || a,
      l.default,
      !0
    ) : r = Rn(l.from || a) : r = Rn(l), Ot(r) ? Object.defineProperty(s, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : s[a] = r;
  }
}
function Ml(e, s, o) {
  fs(
    Ye(e) ? e.map((a) => a.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function ar(e, s, o, a) {
  let l = a.includes(".") ? cr(o, a) : () => o[a];
  if (xt(e)) {
    const r = s[e];
    Ze(r) && Ct(l, r);
  } else if (Ze(e))
    Ct(l, e.bind(o));
  else if (vt(e))
    if (Ye(e))
      e.forEach((r) => ar(r, s, o, a));
    else {
      const r = Ze(e.handler) ? e.handler.bind(o) : s[e.handler];
      Ze(r) && Ct(l, r, e);
    }
}
function lr(e) {
  const s = e.type, { mixins: o, extends: a } = s, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(s);
  let m;
  return u ? m = u : !l.length && !o && !a ? m = s : (m = {}, l.length && l.forEach(
    (f) => Bn(m, f, c, !0)
  ), Bn(m, s, c)), vt(s) && r.set(s, m), m;
}
function Bn(e, s, o, a = !1) {
  const { mixins: l, extends: r } = s;
  r && Bn(e, r, o, !0), l && l.forEach(
    (c) => Bn(e, c, o, !0)
  );
  for (const c in s)
    if (!(a && c === "expose")) {
      const u = gu[c] || o && o[c];
      e[c] = u ? u(e[c], s[c]) : s[c];
    }
  return e;
}
const gu = {
  data: Rl,
  props: Dl,
  emits: Dl,
  // objects
  methods: jo,
  computed: jo,
  // lifecycle
  beforeCreate: Ft,
  created: Ft,
  beforeMount: Ft,
  mounted: Ft,
  beforeUpdate: Ft,
  updated: Ft,
  beforeDestroy: Ft,
  beforeUnmount: Ft,
  destroyed: Ft,
  unmounted: Ft,
  activated: Ft,
  deactivated: Ft,
  errorCaptured: Ft,
  serverPrefetch: Ft,
  // assets
  components: jo,
  directives: jo,
  // watch
  watch: yu,
  // provide / inject
  provide: Rl,
  inject: hu
};
function Rl(e, s) {
  return s ? e ? function() {
    return Tt(
      Ze(e) ? e.call(this, this) : e,
      Ze(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function hu(e, s) {
  return jo(Oa(e), Oa(s));
}
function Oa(e) {
  if (Ye(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++)
      s[e[o]] = e[o];
    return s;
  }
  return e;
}
function Ft(e, s) {
  return e ? [...new Set([].concat(e, s))] : s;
}
function jo(e, s) {
  return e ? Tt(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function Dl(e, s) {
  return e ? Ye(e) && Ye(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : Tt(
    /* @__PURE__ */ Object.create(null),
    Pl(e),
    Pl(s ?? {})
  ) : s;
}
function yu(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = Tt(/* @__PURE__ */ Object.create(null), e);
  for (const a in s)
    o[a] = Ft(e[a], s[a]);
  return o;
}
function ir() {
  return {
    app: null,
    config: {
      isNativeTag: gi,
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
let wu = 0;
function _u(e, s) {
  return function(a, l = null) {
    Ze(a) || (a = Tt({}, a)), l != null && !vt(l) && (l = null);
    const r = ir(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let m = !1;
    const f = r.app = {
      _uid: wu++,
      _component: a,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: sd,
      get config() {
        return r.config;
      },
      set config(v) {
      },
      use(v, ...p) {
        return c.has(v) || (v && Ze(v.install) ? (c.add(v), v.install(f, ...p)) : Ze(v) && (c.add(v), v(f, ...p))), f;
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
      mount(v, p, _) {
        if (!m) {
          const g = f._ceVNode || S(a, l);
          return g.appContext = r, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), e(g, v, _), m = !0, f._container = v, v.__vue_app__ = f, la(g.component);
        }
      },
      onUnmount(v) {
        u.push(v);
      },
      unmount() {
        m && (fs(
          u,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(v, p) {
        return r.provides[v] = p, f;
      },
      runWithContext(v) {
        const p = Io;
        Io = f;
        try {
          return v();
        } finally {
          Io = p;
        }
      }
    };
    return f;
  };
}
let Io = null;
function ku(e, s) {
  if (At) {
    let o = At.provides;
    const a = At.parent && At.parent.provides;
    a === o && (o = At.provides = Object.create(a)), o[e] = s;
  }
}
function Rn(e, s, o = !1) {
  const a = fl();
  if (a || Io) {
    let l = Io ? Io._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && Ze(s) ? s.call(a && a.proxy) : s;
  }
}
const bu = Symbol.for("v-scx"), $u = () => Rn(bu);
function Ct(e, s, o) {
  return rr(e, s, o);
}
function rr(e, s, o = gt) {
  const { immediate: a, deep: l, flush: r, once: c } = o, u = Tt({}, o), m = s && a || !s && r !== "post";
  let f;
  if (un) {
    if (r === "sync") {
      const g = $u();
      f = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!m) {
      const g = () => {
      };
      return g.stop = $s, g.resume = $s, g.pause = $s, g;
    }
  }
  const v = At;
  u.call = (g, w, C) => fs(g, v, w, C);
  let p = !1;
  r === "post" ? u.scheduler = (g) => {
    Vt(g, v && v.suspense);
  } : r !== "sync" && (p = !0, u.scheduler = (g, w) => {
    w ? g() : ll(g);
  }), u.augmentJob = (g) => {
    s && (g.flags |= 4), p && (g.flags |= 2, v && (g.id = v.uid, g.i = v));
  };
  const _ = Yc(e, s, u);
  return un && (f ? f.push(_) : m && _()), _;
}
function Cu(e, s, o) {
  const a = this.proxy, l = xt(e) ? e.includes(".") ? cr(a, e) : () => a[e] : e.bind(a, a);
  let r;
  Ze(s) ? r = s : (r = s.handler, o = s);
  const c = pn(this), u = rr(l, r.bind(a), o);
  return c(), u;
}
function cr(e, s) {
  const o = s.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < o.length && a; l++)
      a = a[o[l]];
    return a;
  };
}
const xu = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${ns(s)}Modifiers`] || e[`${Ks(s)}Modifiers`];
function Su(e, s, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || gt;
  let l = o;
  const r = s.startsWith("update:"), c = r && xu(a, s.slice(7));
  c && (c.trim && (l = o.map((v) => xt(v) ? v.trim() : v)), c.number && (l = o.map(Xn)));
  let u, m = a[u = fa(s)] || // also try camelCase event handler (#2249)
  a[u = fa(ns(s))];
  !m && r && (m = a[u = fa(Ks(s))]), m && fs(
    m,
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
    e.emitted[u] = !0, fs(
      f,
      e,
      6,
      l
    );
  }
}
const Iu = /* @__PURE__ */ new WeakMap();
function ur(e, s, o = !1) {
  const a = o ? Iu : s.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!Ze(e)) {
    const m = (f) => {
      const v = ur(f, s, !0);
      v && (u = !0, Tt(c, v));
    };
    !o && s.mixins.length && s.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  return !r && !u ? (vt(e) && a.set(e, null), null) : (Ye(r) ? r.forEach((m) => c[m] = null) : Tt(c, r), vt(e) && a.set(e, c), c);
}
function na(e, s) {
  return !e || !Yn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), ut(e, s[0].toLowerCase() + s.slice(1)) || ut(e, Ks(s)) || ut(e, s));
}
function Ll(e) {
  const {
    type: s,
    vnode: o,
    proxy: a,
    withProxy: l,
    propsOptions: [r],
    slots: c,
    attrs: u,
    emit: m,
    render: f,
    renderCache: v,
    props: p,
    data: _,
    setupState: g,
    ctx: w,
    inheritAttrs: C
  } = e, $ = Fn(e);
  let x, O;
  try {
    if (o.shapeFlag & 4) {
      const P = l || a, R = P;
      x = bs(
        f.call(
          R,
          P,
          v,
          p,
          g,
          _,
          w
        )
      ), O = u;
    } else {
      const P = s;
      x = bs(
        P.length > 1 ? P(
          p,
          { attrs: u, slots: c, emit: m }
        ) : P(
          p,
          null
        )
      ), O = s.props ? u : Eu(u);
    }
  } catch (P) {
    Xo.length = 0, ta(P, e, 1), x = S(Ut);
  }
  let T = x;
  if (O && C !== !1) {
    const P = Object.keys(O), { shapeFlag: R } = T;
    P.length && R & 7 && (r && P.some(Ya) && (O = Tu(
      O,
      r
    )), T = js(T, O, !1, !0));
  }
  return o.dirs && (T = js(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(o.dirs) : o.dirs), o.transition && lo(T, o.transition), x = T, Fn($), x;
}
const Eu = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Yn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, Tu = (e, s) => {
  const o = {};
  for (const a in e)
    (!Ya(a) || !(a.slice(9) in s)) && (o[a] = e[a]);
  return o;
};
function Pu(e, s, o) {
  const { props: a, children: l, component: r } = e, { props: c, children: u, patchFlag: m } = s, f = r.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && m >= 0) {
    if (m & 1024)
      return !0;
    if (m & 16)
      return a ? Nl(a, c, f) : !!c;
    if (m & 8) {
      const v = s.dynamicProps;
      for (let p = 0; p < v.length; p++) {
        const _ = v[p];
        if (c[_] !== a[_] && !na(f, _))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : a === c ? !1 : a ? c ? Nl(a, c, f) : !0 : !!c;
  return !1;
}
function Nl(e, s, o) {
  const a = Object.keys(s);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (s[r] !== e[r] && !na(o, r))
      return !0;
  }
  return !1;
}
function Mu({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const a = s.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const dr = {}, mr = () => Object.create(dr), fr = (e) => Object.getPrototypeOf(e) === dr;
function Ru(e, s, o, a = !1) {
  const l = {}, r = mr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), vr(e, s, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = a ? l : Vc(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function Du(e, s, o, a) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: c }
  } = e, u = it(l), [m] = e.propsOptions;
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
        let _ = v[p];
        if (na(e.emitsOptions, _))
          continue;
        const g = s[_];
        if (m)
          if (ut(r, _))
            g !== r[_] && (r[_] = g, f = !0);
          else {
            const w = ns(_);
            l[w] = za(
              m,
              u,
              w,
              g,
              e,
              !1
            );
          }
        else
          g !== r[_] && (r[_] = g, f = !0);
      }
    }
  } else {
    vr(e, s, l, r) && (f = !0);
    let v;
    for (const p in u)
      (!s || // for camelCase
      !ut(s, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Ks(p)) === p || !ut(s, v))) && (m ? o && // for camelCase
      (o[p] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[p] = za(
        m,
        u,
        p,
        void 0,
        e,
        !0
      )) : delete l[p]);
    if (r !== u)
      for (const p in r)
        (!s || !ut(s, p)) && (delete r[p], f = !0);
  }
  f && Es(e.attrs, "set", "");
}
function vr(e, s, o, a) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (s)
    for (let m in s) {
      if (Ho(m))
        continue;
      const f = s[m];
      let v;
      l && ut(l, v = ns(m)) ? !r || !r.includes(v) ? o[v] = f : (u || (u = {}))[v] = f : na(e.emitsOptions, m) || (!(m in a) || f !== a[m]) && (a[m] = f, c = !0);
    }
  if (r) {
    const m = it(o), f = u || gt;
    for (let v = 0; v < r.length; v++) {
      const p = r[v];
      o[p] = za(
        l,
        m,
        p,
        f[p],
        e,
        !ut(f, p)
      );
    }
  }
  return c;
}
function za(e, s, o, a, l, r) {
  const c = e[o];
  if (c != null) {
    const u = ut(c, "default");
    if (u && a === void 0) {
      const m = c.default;
      if (c.type !== Function && !c.skipFactory && Ze(m)) {
        const { propsDefaults: f } = l;
        if (o in f)
          a = f[o];
        else {
          const v = pn(l);
          a = f[o] = m.call(
            null,
            s
          ), v();
        }
      } else
        a = m;
      l.ce && l.ce._setProp(o, a);
    }
    c[
      0
      /* shouldCast */
    ] && (r && !u ? a = !1 : c[
      1
      /* shouldCastTrue */
    ] && (a === "" || a === Ks(o)) && (a = !0));
  }
  return a;
}
const Lu = /* @__PURE__ */ new WeakMap();
function pr(e, s, o = !1) {
  const a = o ? Lu : s.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let m = !1;
  if (!Ze(e)) {
    const v = (p) => {
      m = !0;
      const [_, g] = pr(p, s, !0);
      Tt(c, _), g && u.push(...g);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !m)
    return vt(e) && a.set(e, $o), $o;
  if (Ye(r))
    for (let v = 0; v < r.length; v++) {
      const p = ns(r[v]);
      Ul(p) && (c[p] = gt);
    }
  else if (r)
    for (const v in r) {
      const p = ns(v);
      if (Ul(p)) {
        const _ = r[v], g = c[p] = Ye(_) || Ze(_) ? { type: _ } : Tt({}, _), w = g.type;
        let C = !1, $ = !0;
        if (Ye(w))
          for (let x = 0; x < w.length; ++x) {
            const O = w[x], T = Ze(O) && O.name;
            if (T === "Boolean") {
              C = !0;
              break;
            } else T === "String" && ($ = !1);
          }
        else
          C = Ze(w) && w.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = C, g[
          1
          /* shouldCastTrue */
        ] = $, (C || ut(g, "default")) && u.push(p);
      }
    }
  const f = [c, u];
  return vt(e) && a.set(e, f), f;
}
function Ul(e) {
  return e[0] !== "$" && !Ho(e);
}
const cl = (e) => e === "_" || e === "_ctx" || e === "$stable", ul = (e) => Ye(e) ? e.map(bs) : [bs(e)], Nu = (e, s, o) => {
  if (s._n)
    return s;
  const a = h((...l) => ul(s(...l)), o);
  return a._c = !1, a;
}, gr = (e, s, o) => {
  const a = e._ctx;
  for (const l in e) {
    if (cl(l)) continue;
    const r = e[l];
    if (Ze(r))
      s[l] = Nu(l, r, a);
    else if (r != null) {
      const c = ul(r);
      s[l] = () => c;
    }
  }
}, hr = (e, s) => {
  const o = ul(s);
  e.slots.default = () => o;
}, yr = (e, s, o) => {
  for (const a in s)
    (o || !cl(a)) && (e[a] = s[a]);
}, Uu = (e, s, o) => {
  const a = e.slots = mr();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (yr(a, s, o), o && _i(a, "_", l, !0)) : gr(s, a);
  } else s && hr(e, s);
}, Au = (e, s, o) => {
  const { vnode: a, slots: l } = e;
  let r = !0, c = gt;
  if (a.shapeFlag & 32) {
    const u = s._;
    u ? o && u === 1 ? r = !1 : yr(l, s, o) : (r = !s.$stable, gr(s, l)), c = s;
  } else s && (hr(e, s), c = { default: 1 });
  if (r)
    for (const u in l)
      !cl(u) && c[u] == null && delete l[u];
}, Vt = Bu;
function Ou(e) {
  return zu(e);
}
function zu(e, s) {
  const o = Zn();
  o.__VUE__ = !0;
  const {
    insert: a,
    remove: l,
    patchProp: r,
    createElement: c,
    createText: u,
    createComment: m,
    setText: f,
    setElementText: v,
    parentNode: p,
    nextSibling: _,
    setScopeId: g = $s,
    insertStaticContent: w
  } = e, C = (z, K, ce, Se = null, _e = null, ke = null, Me = void 0, ye = null, Te = !!K.dynamicChildren) => {
    if (z === K)
      return;
    z && !so(z, K) && (Se = F(z), Ke(z, _e, ke, !0), z = null), K.patchFlag === -2 && (Te = !1, K.dynamicChildren = null);
    const { type: me, ref: We, shapeFlag: Le } = K;
    switch (me) {
      case aa:
        $(z, K, ce, Se);
        break;
      case Ut:
        x(z, K, ce, Se);
        break;
      case ka:
        z == null && O(K, ce, Se, Me);
        break;
      case j:
        Z(
          z,
          K,
          ce,
          Se,
          _e,
          ke,
          Me,
          ye,
          Te
        );
        break;
      default:
        Le & 1 ? R(
          z,
          K,
          ce,
          Se,
          _e,
          ke,
          Me,
          ye,
          Te
        ) : Le & 6 ? X(
          z,
          K,
          ce,
          Se,
          _e,
          ke,
          Me,
          ye,
          Te
        ) : (Le & 64 || Le & 128) && me.process(
          z,
          K,
          ce,
          Se,
          _e,
          ke,
          Me,
          ye,
          Te,
          Ue
        );
    }
    We != null && _e ? Qo(We, z && z.ref, ke, K || z, !K) : We == null && z && z.ref != null && Qo(z.ref, null, ke, z, !0);
  }, $ = (z, K, ce, Se) => {
    if (z == null)
      a(
        K.el = u(K.children),
        ce,
        Se
      );
    else {
      const _e = K.el = z.el;
      K.children !== z.children && f(_e, K.children);
    }
  }, x = (z, K, ce, Se) => {
    z == null ? a(
      K.el = m(K.children || ""),
      ce,
      Se
    ) : K.el = z.el;
  }, O = (z, K, ce, Se) => {
    [z.el, z.anchor] = w(
      z.children,
      K,
      ce,
      Se,
      z.el,
      z.anchor
    );
  }, T = ({ el: z, anchor: K }, ce, Se) => {
    let _e;
    for (; z && z !== K; )
      _e = _(z), a(z, ce, Se), z = _e;
    a(K, ce, Se);
  }, P = ({ el: z, anchor: K }) => {
    let ce;
    for (; z && z !== K; )
      ce = _(z), l(z), z = ce;
    l(K);
  }, R = (z, K, ce, Se, _e, ke, Me, ye, Te) => {
    if (K.type === "svg" ? Me = "svg" : K.type === "math" && (Me = "mathml"), z == null)
      U(
        K,
        ce,
        Se,
        _e,
        ke,
        Me,
        ye,
        Te
      );
    else {
      const me = z.el && z.el._isVueCE ? z.el : null;
      try {
        me && me._beginPatch(), N(
          z,
          K,
          _e,
          ke,
          Me,
          ye,
          Te
        );
      } finally {
        me && me._endPatch();
      }
    }
  }, U = (z, K, ce, Se, _e, ke, Me, ye) => {
    let Te, me;
    const { props: We, shapeFlag: Le, transition: fe, dirs: H } = z;
    if (Te = z.el = c(
      z.type,
      ke,
      We && We.is,
      We
    ), Le & 8 ? v(Te, z.children) : Le & 16 && I(
      z.children,
      Te,
      null,
      Se,
      _e,
      _a(z, ke),
      Me,
      ye
    ), H && Js(z, null, Se, "created"), B(Te, z, z.scopeId, Me, Se), We) {
      for (const xe in We)
        xe !== "value" && !Ho(xe) && r(Te, xe, null, We[xe], ke, Se);
      "value" in We && r(Te, "value", null, We.value, ke), (me = We.onVnodeBeforeMount) && hs(me, Se, z);
    }
    H && Js(z, null, Se, "beforeMount");
    const Oe = Fu(_e, fe);
    Oe && fe.beforeEnter(Te), a(Te, K, ce), ((me = We && We.onVnodeMounted) || Oe || H) && Vt(() => {
      me && hs(me, Se, z), Oe && fe.enter(Te), H && Js(z, null, Se, "mounted");
    }, _e);
  }, B = (z, K, ce, Se, _e) => {
    if (ce && g(z, ce), Se)
      for (let ke = 0; ke < Se.length; ke++)
        g(z, Se[ke]);
    if (_e) {
      let ke = _e.subTree;
      if (K === ke || _r(ke.type) && (ke.ssContent === K || ke.ssFallback === K)) {
        const Me = _e.vnode;
        B(
          z,
          Me,
          Me.scopeId,
          Me.slotScopeIds,
          _e.parent
        );
      }
    }
  }, I = (z, K, ce, Se, _e, ke, Me, ye, Te = 0) => {
    for (let me = Te; me < z.length; me++) {
      const We = z[me] = ye ? Ws(z[me]) : bs(z[me]);
      C(
        null,
        We,
        K,
        ce,
        Se,
        _e,
        ke,
        Me,
        ye
      );
    }
  }, N = (z, K, ce, Se, _e, ke, Me) => {
    const ye = K.el = z.el;
    let { patchFlag: Te, dynamicChildren: me, dirs: We } = K;
    Te |= z.patchFlag & 16;
    const Le = z.props || gt, fe = K.props || gt;
    let H;
    if (ce && Xs(ce, !1), (H = fe.onVnodeBeforeUpdate) && hs(H, ce, K, z), We && Js(K, z, ce, "beforeUpdate"), ce && Xs(ce, !0), (Le.innerHTML && fe.innerHTML == null || Le.textContent && fe.textContent == null) && v(ye, ""), me ? se(
      z.dynamicChildren,
      me,
      ye,
      ce,
      Se,
      _a(K, _e),
      ke
    ) : Me || W(
      z,
      K,
      ye,
      null,
      ce,
      Se,
      _a(K, _e),
      ke,
      !1
    ), Te > 0) {
      if (Te & 16)
        te(ye, Le, fe, ce, _e);
      else if (Te & 2 && Le.class !== fe.class && r(ye, "class", null, fe.class, _e), Te & 4 && r(ye, "style", Le.style, fe.style, _e), Te & 8) {
        const Oe = K.dynamicProps;
        for (let xe = 0; xe < Oe.length; xe++) {
          const Ce = Oe[xe], Re = Le[Ce], Ee = fe[Ce];
          (Ee !== Re || Ce === "value") && r(ye, Ce, Re, Ee, _e, ce);
        }
      }
      Te & 1 && z.children !== K.children && v(ye, K.children);
    } else !Me && me == null && te(ye, Le, fe, ce, _e);
    ((H = fe.onVnodeUpdated) || We) && Vt(() => {
      H && hs(H, ce, K, z), We && Js(K, z, ce, "updated");
    }, Se);
  }, se = (z, K, ce, Se, _e, ke, Me) => {
    for (let ye = 0; ye < K.length; ye++) {
      const Te = z[ye], me = K[ye], We = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Te.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Te.type === j || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !so(Te, me) || // - In the case of a component, it could contain anything.
        Te.shapeFlag & 198) ? p(Te.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ce
        )
      );
      C(
        Te,
        me,
        We,
        null,
        Se,
        _e,
        ke,
        Me,
        !0
      );
    }
  }, te = (z, K, ce, Se, _e) => {
    if (K !== ce) {
      if (K !== gt)
        for (const ke in K)
          !Ho(ke) && !(ke in ce) && r(
            z,
            ke,
            K[ke],
            null,
            _e,
            Se
          );
      for (const ke in ce) {
        if (Ho(ke)) continue;
        const Me = ce[ke], ye = K[ke];
        Me !== ye && ke !== "value" && r(z, ke, ye, Me, _e, Se);
      }
      "value" in ce && r(z, "value", K.value, ce.value, _e);
    }
  }, Z = (z, K, ce, Se, _e, ke, Me, ye, Te) => {
    const me = K.el = z ? z.el : u(""), We = K.anchor = z ? z.anchor : u("");
    let { patchFlag: Le, dynamicChildren: fe, slotScopeIds: H } = K;
    H && (ye = ye ? ye.concat(H) : H), z == null ? (a(me, ce, Se), a(We, ce, Se), I(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      K.children || [],
      ce,
      We,
      _e,
      ke,
      Me,
      ye,
      Te
    )) : Le > 0 && Le & 64 && fe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    z.dynamicChildren ? (se(
      z.dynamicChildren,
      fe,
      ce,
      _e,
      ke,
      Me,
      ye
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (K.key != null || _e && K === _e.subTree) && dl(
      z,
      K,
      !0
      /* shallow */
    )) : W(
      z,
      K,
      ce,
      We,
      _e,
      ke,
      Me,
      ye,
      Te
    );
  }, X = (z, K, ce, Se, _e, ke, Me, ye, Te) => {
    K.slotScopeIds = ye, z == null ? K.shapeFlag & 512 ? _e.ctx.activate(
      K,
      ce,
      Se,
      Me,
      Te
    ) : G(
      K,
      ce,
      Se,
      _e,
      ke,
      Me,
      Te
    ) : Q(z, K, Te);
  }, G = (z, K, ce, Se, _e, ke, Me) => {
    const ye = z.component = Yu(
      z,
      Se,
      _e
    );
    if (sa(z) && (ye.ctx.renderer = Ue), Qu(ye, !1, Me), ye.asyncDep) {
      if (_e && _e.registerDep(ye, oe, Me), !z.el) {
        const Te = ye.subTree = S(Ut);
        x(null, Te, K, ce), z.placeholder = Te.el;
      }
    } else
      oe(
        ye,
        z,
        K,
        ce,
        _e,
        ke,
        Me
      );
  }, Q = (z, K, ce) => {
    const Se = K.component = z.component;
    if (Pu(z, K, ce))
      if (Se.asyncDep && !Se.asyncResolved) {
        le(Se, K, ce);
        return;
      } else
        Se.next = K, Se.update();
    else
      K.el = z.el, Se.vnode = K;
  }, oe = (z, K, ce, Se, _e, ke, Me) => {
    const ye = () => {
      if (z.isMounted) {
        let { next: Le, bu: fe, u: H, parent: Oe, vnode: xe } = z;
        {
          const de = wr(z);
          if (de) {
            Le && (Le.el = xe.el, le(z, Le, Me)), de.asyncDep.then(() => {
              z.isUnmounted || ye();
            });
            return;
          }
        }
        let Ce = Le, Re;
        Xs(z, !1), Le ? (Le.el = xe.el, le(z, Le, Me)) : Le = xe, fe && Pn(fe), (Re = Le.props && Le.props.onVnodeBeforeUpdate) && hs(Re, Oe, Le, xe), Xs(z, !0);
        const Ee = Ll(z), Y = z.subTree;
        z.subTree = Ee, C(
          Y,
          Ee,
          // parent may have changed if it's in a teleport
          p(Y.el),
          // anchor may have changed if it's in a fragment
          F(Y),
          z,
          _e,
          ke
        ), Le.el = Ee.el, Ce === null && Mu(z, Ee.el), H && Vt(H, _e), (Re = Le.props && Le.props.onVnodeUpdated) && Vt(
          () => hs(Re, Oe, Le, xe),
          _e
        );
      } else {
        let Le;
        const { el: fe, props: H } = K, { bm: Oe, m: xe, parent: Ce, root: Re, type: Ee } = z, Y = So(K);
        Xs(z, !1), Oe && Pn(Oe), !Y && (Le = H && H.onVnodeBeforeMount) && hs(Le, Ce, K), Xs(z, !0);
        {
          Re.ce && // @ts-expect-error _def is private
          Re.ce._def.shadowRoot !== !1 && Re.ce._injectChildStyle(Ee);
          const de = z.subTree = Ll(z);
          C(
            null,
            de,
            ce,
            Se,
            z,
            _e,
            ke
          ), K.el = de.el;
        }
        if (xe && Vt(xe, _e), !Y && (Le = H && H.onVnodeMounted)) {
          const de = K;
          Vt(
            () => hs(Le, Ce, de),
            _e
          );
        }
        (K.shapeFlag & 256 || Ce && So(Ce.vnode) && Ce.vnode.shapeFlag & 256) && z.a && Vt(z.a, _e), z.isMounted = !0, K = ce = Se = null;
      }
    };
    z.scope.on();
    const Te = z.effect = new Ci(ye);
    z.scope.off();
    const me = z.update = Te.run.bind(Te), We = z.job = Te.runIfDirty.bind(Te);
    We.i = z, We.id = z.uid, Te.scheduler = () => ll(We), Xs(z, !0), me();
  }, le = (z, K, ce) => {
    K.component = z;
    const Se = z.vnode.props;
    z.vnode = K, z.next = null, Du(z, K.props, Se, ce), Au(z, K.children, ce), Ms(), $l(z), Rs();
  }, W = (z, K, ce, Se, _e, ke, Me, ye, Te = !1) => {
    const me = z && z.children, We = z ? z.shapeFlag : 0, Le = K.children, { patchFlag: fe, shapeFlag: H } = K;
    if (fe > 0) {
      if (fe & 128) {
        ae(
          me,
          Le,
          ce,
          Se,
          _e,
          ke,
          Me,
          ye,
          Te
        );
        return;
      } else if (fe & 256) {
        ee(
          me,
          Le,
          ce,
          Se,
          _e,
          ke,
          Me,
          ye,
          Te
        );
        return;
      }
    }
    H & 8 ? (We & 16 && ie(me, _e, ke), Le !== me && v(ce, Le)) : We & 16 ? H & 16 ? ae(
      me,
      Le,
      ce,
      Se,
      _e,
      ke,
      Me,
      ye,
      Te
    ) : ie(me, _e, ke, !0) : (We & 8 && v(ce, ""), H & 16 && I(
      Le,
      ce,
      Se,
      _e,
      ke,
      Me,
      ye,
      Te
    ));
  }, ee = (z, K, ce, Se, _e, ke, Me, ye, Te) => {
    z = z || $o, K = K || $o;
    const me = z.length, We = K.length, Le = Math.min(me, We);
    let fe;
    for (fe = 0; fe < Le; fe++) {
      const H = K[fe] = Te ? Ws(K[fe]) : bs(K[fe]);
      C(
        z[fe],
        H,
        ce,
        null,
        _e,
        ke,
        Me,
        ye,
        Te
      );
    }
    me > We ? ie(
      z,
      _e,
      ke,
      !0,
      !1,
      Le
    ) : I(
      K,
      ce,
      Se,
      _e,
      ke,
      Me,
      ye,
      Te,
      Le
    );
  }, ae = (z, K, ce, Se, _e, ke, Me, ye, Te) => {
    let me = 0;
    const We = K.length;
    let Le = z.length - 1, fe = We - 1;
    for (; me <= Le && me <= fe; ) {
      const H = z[me], Oe = K[me] = Te ? Ws(K[me]) : bs(K[me]);
      if (so(H, Oe))
        C(
          H,
          Oe,
          ce,
          null,
          _e,
          ke,
          Me,
          ye,
          Te
        );
      else
        break;
      me++;
    }
    for (; me <= Le && me <= fe; ) {
      const H = z[Le], Oe = K[fe] = Te ? Ws(K[fe]) : bs(K[fe]);
      if (so(H, Oe))
        C(
          H,
          Oe,
          ce,
          null,
          _e,
          ke,
          Me,
          ye,
          Te
        );
      else
        break;
      Le--, fe--;
    }
    if (me > Le) {
      if (me <= fe) {
        const H = fe + 1, Oe = H < We ? K[H].el : Se;
        for (; me <= fe; )
          C(
            null,
            K[me] = Te ? Ws(K[me]) : bs(K[me]),
            ce,
            Oe,
            _e,
            ke,
            Me,
            ye,
            Te
          ), me++;
      }
    } else if (me > fe)
      for (; me <= Le; )
        Ke(z[me], _e, ke, !0), me++;
    else {
      const H = me, Oe = me, xe = /* @__PURE__ */ new Map();
      for (me = Oe; me <= fe; me++) {
        const ze = K[me] = Te ? Ws(K[me]) : bs(K[me]);
        ze.key != null && xe.set(ze.key, me);
      }
      let Ce, Re = 0;
      const Ee = fe - Oe + 1;
      let Y = !1, de = 0;
      const pe = new Array(Ee);
      for (me = 0; me < Ee; me++) pe[me] = 0;
      for (me = H; me <= Le; me++) {
        const ze = z[me];
        if (Re >= Ee) {
          Ke(ze, _e, ke, !0);
          continue;
        }
        let Fe;
        if (ze.key != null)
          Fe = xe.get(ze.key);
        else
          for (Ce = Oe; Ce <= fe; Ce++)
            if (pe[Ce - Oe] === 0 && so(ze, K[Ce])) {
              Fe = Ce;
              break;
            }
        Fe === void 0 ? Ke(ze, _e, ke, !0) : (pe[Fe - Oe] = me + 1, Fe >= de ? de = Fe : Y = !0, C(
          ze,
          K[Fe],
          ce,
          null,
          _e,
          ke,
          Me,
          ye,
          Te
        ), Re++);
      }
      const He = Y ? Vu(pe) : $o;
      for (Ce = He.length - 1, me = Ee - 1; me >= 0; me--) {
        const ze = Oe + me, Fe = K[ze], et = K[ze + 1], qe = ze + 1 < We ? (
          // #13559, fallback to el placeholder for unresolved async component
          et.el || et.placeholder
        ) : Se;
        pe[me] === 0 ? C(
          null,
          Fe,
          ce,
          qe,
          _e,
          ke,
          Me,
          ye,
          Te
        ) : Y && (Ce < 0 || me !== He[Ce] ? Ne(Fe, ce, qe, 2) : Ce--);
      }
    }
  }, Ne = (z, K, ce, Se, _e = null) => {
    const { el: ke, type: Me, transition: ye, children: Te, shapeFlag: me } = z;
    if (me & 6) {
      Ne(z.component.subTree, K, ce, Se);
      return;
    }
    if (me & 128) {
      z.suspense.move(K, ce, Se);
      return;
    }
    if (me & 64) {
      Me.move(z, K, ce, Ue);
      return;
    }
    if (Me === j) {
      a(ke, K, ce);
      for (let Le = 0; Le < Te.length; Le++)
        Ne(Te[Le], K, ce, Se);
      a(z.anchor, K, ce);
      return;
    }
    if (Me === ka) {
      T(z, K, ce);
      return;
    }
    if (Se !== 2 && me & 1 && ye)
      if (Se === 0)
        ye.beforeEnter(ke), a(ke, K, ce), Vt(() => ye.enter(ke), _e);
      else {
        const { leave: Le, delayLeave: fe, afterLeave: H } = ye, Oe = () => {
          z.ctx.isUnmounted ? l(ke) : a(ke, K, ce);
        }, xe = () => {
          ke._isLeaving && ke[Is](
            !0
            /* cancelled */
          ), Le(ke, () => {
            Oe(), H && H();
          });
        };
        fe ? fe(ke, Oe, xe) : xe();
      }
    else
      a(ke, K, ce);
  }, Ke = (z, K, ce, Se = !1, _e = !1) => {
    const {
      type: ke,
      props: Me,
      ref: ye,
      children: Te,
      dynamicChildren: me,
      shapeFlag: We,
      patchFlag: Le,
      dirs: fe,
      cacheIndex: H
    } = z;
    if (Le === -2 && (_e = !1), ye != null && (Ms(), Qo(ye, null, ce, z, !0), Rs()), H != null && (K.renderCache[H] = void 0), We & 256) {
      K.ctx.deactivate(z);
      return;
    }
    const Oe = We & 1 && fe, xe = !So(z);
    let Ce;
    if (xe && (Ce = Me && Me.onVnodeBeforeUnmount) && hs(Ce, K, z), We & 6)
      V(z.component, ce, Se);
    else {
      if (We & 128) {
        z.suspense.unmount(ce, Se);
        return;
      }
      Oe && Js(z, null, K, "beforeUnmount"), We & 64 ? z.type.remove(
        z,
        K,
        ce,
        Ue,
        Se
      ) : me && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !me.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ke !== j || Le > 0 && Le & 64) ? ie(
        me,
        K,
        ce,
        !1,
        !0
      ) : (ke === j && Le & 384 || !_e && We & 16) && ie(Te, K, ce), Se && je(z);
    }
    (xe && (Ce = Me && Me.onVnodeUnmounted) || Oe) && Vt(() => {
      Ce && hs(Ce, K, z), Oe && Js(z, null, K, "unmounted");
    }, ce);
  }, je = (z) => {
    const { type: K, el: ce, anchor: Se, transition: _e } = z;
    if (K === j) {
      $e(ce, Se);
      return;
    }
    if (K === ka) {
      P(z);
      return;
    }
    const ke = () => {
      l(ce), _e && !_e.persisted && _e.afterLeave && _e.afterLeave();
    };
    if (z.shapeFlag & 1 && _e && !_e.persisted) {
      const { leave: Me, delayLeave: ye } = _e, Te = () => Me(ce, ke);
      ye ? ye(z.el, ke, Te) : Te();
    } else
      ke();
  }, $e = (z, K) => {
    let ce;
    for (; z !== K; )
      ce = _(z), l(z), z = ce;
    l(K);
  }, V = (z, K, ce) => {
    const { bum: Se, scope: _e, job: ke, subTree: Me, um: ye, m: Te, a: me } = z;
    Al(Te), Al(me), Se && Pn(Se), _e.stop(), ke && (ke.flags |= 8, Ke(Me, z, K, ce)), ye && Vt(ye, K), Vt(() => {
      z.isUnmounted = !0;
    }, K);
  }, ie = (z, K, ce, Se = !1, _e = !1, ke = 0) => {
    for (let Me = ke; Me < z.length; Me++)
      Ke(z[Me], K, ce, Se, _e);
  }, F = (z) => {
    if (z.shapeFlag & 6)
      return F(z.component.subTree);
    if (z.shapeFlag & 128)
      return z.suspense.next();
    const K = _(z.anchor || z.el), ce = K && K[Gi];
    return ce ? _(ce) : K;
  };
  let L = !1;
  const ne = (z, K, ce) => {
    z == null ? K._vnode && Ke(K._vnode, null, null, !0) : C(
      K._vnode || null,
      z,
      K,
      null,
      null,
      null,
      ce
    ), K._vnode = z, L || (L = !0, $l(), Vi(), L = !1);
  }, Ue = {
    p: C,
    um: Ke,
    m: Ne,
    r: je,
    mt: G,
    mc: I,
    pc: W,
    pbc: se,
    n: F,
    o: e
  };
  return {
    render: ne,
    hydrate: void 0,
    createApp: _u(ne)
  };
}
function _a({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function Xs({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function Fu(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function dl(e, s, o = !1) {
  const a = e.children, l = s.children;
  if (Ye(a) && Ye(l))
    for (let r = 0; r < a.length; r++) {
      const c = a[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = Ws(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && dl(c, u)), u.type === aa && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === Ut && !u.el && (u.el = c.el);
    }
}
function Vu(e) {
  const s = e.slice(), o = [0];
  let a, l, r, c, u;
  const m = e.length;
  for (a = 0; a < m; a++) {
    const f = e[a];
    if (f !== 0) {
      if (l = o[o.length - 1], e[l] < f) {
        s[a] = l, o.push(a);
        continue;
      }
      for (r = 0, c = o.length - 1; r < c; )
        u = r + c >> 1, e[o[u]] < f ? r = u + 1 : c = u;
      f < e[o[r]] && (r > 0 && (s[a] = o[r - 1]), o[r] = a);
    }
  }
  for (r = o.length, c = o[r - 1]; r-- > 0; )
    o[r] = c, c = s[c];
  return o;
}
function wr(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : wr(s);
}
function Al(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const _r = (e) => e.__isSuspense;
function Bu(e, s) {
  s && s.pendingBranch ? Ye(e) ? s.effects.push(...e) : s.effects.push(e) : Xc(e);
}
const j = Symbol.for("v-fgt"), aa = Symbol.for("v-txt"), Ut = Symbol.for("v-cmt"), ka = Symbol.for("v-stc"), Xo = [];
let Yt = null;
function n(e = !1) {
  Xo.push(Yt = e ? null : []);
}
function Wu() {
  Xo.pop(), Yt = Xo[Xo.length - 1] || null;
}
let rn = 1;
function Wn(e, s = !1) {
  rn += e, e < 0 && Yt && s && (Yt.hasOnce = !0);
}
function kr(e) {
  return e.dynamicChildren = rn > 0 ? Yt || $o : null, Wu(), rn > 0 && Yt && Yt.push(e), e;
}
function i(e, s, o, a, l, r) {
  return kr(
    t(
      e,
      s,
      o,
      a,
      l,
      r,
      !0
    )
  );
}
function D(e, s, o, a, l) {
  return kr(
    S(
      e,
      s,
      o,
      a,
      l,
      !0
    )
  );
}
function cn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function so(e, s) {
  return e.type === s.type && e.key === s.key;
}
const br = ({ key: e }) => e ?? null, Dn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? xt(e) || Ot(e) || Ze(e) ? { i: Rt, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, a = 0, l = null, r = e === j ? 0 : 1, c = !1, u = !1) {
  const m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && br(s),
    ref: s && Dn(s),
    scopeId: Wi,
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
    patchFlag: a,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: Rt
  };
  return u ? (ml(m, o), r & 128 && e.normalize(m)) : o && (m.shapeFlag |= xt(o) ? 8 : 16), rn > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Yt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && Yt.push(m), m;
}
const S = Gu;
function Gu(e, s = null, o = null, a = 0, l = null, r = !1) {
  if ((!e || e === or) && (e = Ut), cn(e)) {
    const u = js(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && ml(u, o), rn > 0 && !r && Yt && (u.shapeFlag & 6 ? Yt[Yt.indexOf(e)] = u : Yt.push(u)), u.patchFlag = -2, u;
  }
  if (td(e) && (e = e.__vccOpts), s) {
    s = ju(s);
    let { class: u, style: m } = s;
    u && !xt(u) && (s.class = Pe(u)), vt(m) && (al(m) && !Ye(m) && (m = Tt({}, m)), s.style = Jt(m));
  }
  const c = xt(e) ? 1 : _r(e) ? 128 : ji(e) ? 64 : vt(e) ? 4 : Ze(e) ? 2 : 0;
  return t(
    e,
    s,
    o,
    a,
    l,
    c,
    r,
    !0
  );
}
function ju(e) {
  return e ? al(e) || fr(e) ? Tt({}, e) : e : null;
}
function js(e, s, o = !1, a = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: m } = e, f = s ? Hu(l || {}, s) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && br(f),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Ye(r) ? r.concat(Dn(s)) : [r, Dn(s)] : Dn(s)
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
    patchFlag: s && e.type !== j ? c === -1 ? 16 : c | 16 : c,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: m,
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
  return m && a && lo(
    v,
    m.clone(v)
  ), v;
}
function b(e = " ", s = 0) {
  return S(aa, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (n(), D(Ut, null, e)) : S(Ut, null, e);
}
function bs(e) {
  return e == null || typeof e == "boolean" ? S(Ut) : Ye(e) ? S(
    j,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : cn(e) ? Ws(e) : S(aa, null, String(e));
}
function Ws(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : js(e);
}
function ml(e, s) {
  let o = 0;
  const { shapeFlag: a } = e;
  if (s == null)
    s = null;
  else if (Ye(s))
    o = 16;
  else if (typeof s == "object")
    if (a & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), ml(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !fr(s) ? s._ctx = Rt : l === 3 && Rt && (Rt.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else Ze(s) ? (s = { default: s, _ctx: Rt }, o = 32) : (s = String(s), a & 64 ? (o = 16, s = [b(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function Hu(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        s.class !== a.class && (s.class = Pe([s.class, a.class]));
      else if (l === "style")
        s.style = Jt([s.style, a.style]);
      else if (Yn(l)) {
        const r = s[l], c = a[l];
        c && r !== c && !(Ye(r) && r.includes(c)) && (s[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (s[l] = a[l]);
  }
  return s;
}
function hs(e, s, o, a = null) {
  fs(e, s, 7, [
    o,
    a
  ]);
}
const Ku = ir();
let qu = 0;
function Yu(e, s, o) {
  const a = e.type, l = (s ? s.appContext : e.appContext) || Ku, r = {
    uid: qu++,
    vnode: e,
    type: a,
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
    scope: new kc(
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
    propsOptions: pr(a, l),
    emitsOptions: ur(a, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: gt,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
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
  return r.ctx = { _: r }, r.root = s ? s.root : r, r.emit = Su.bind(null, r), e.ce && e.ce(r), r;
}
let At = null;
const fl = () => At || Rt;
let Gn, Fa;
{
  const e = Zn(), s = (o, a) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  Gn = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => At = o
  ), Fa = s(
    "__VUE_SSR_SETTERS__",
    (o) => un = o
  );
}
const pn = (e) => {
  const s = At;
  return Gn(e), e.scope.on(), () => {
    e.scope.off(), Gn(s);
  };
}, Ol = () => {
  At && At.scope.off(), Gn(null);
};
function $r(e) {
  return e.vnode.shapeFlag & 4;
}
let un = !1;
function Qu(e, s = !1, o = !1) {
  s && Fa(s);
  const { props: a, children: l } = e.vnode, r = $r(e);
  Ru(e, a, r, s), Uu(e, l, o || s);
  const c = r ? Ju(e, s) : void 0;
  return s && Fa(!1), c;
}
function Ju(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, fu);
  const { setup: a } = o;
  if (a) {
    Ms();
    const l = e.setupContext = a.length > 1 ? Zu(e) : null, r = pn(e), c = vn(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = hi(c);
    if (Rs(), r(), (u || e.sp) && !So(e) && Zi(e), u) {
      if (c.then(Ol, Ol), s)
        return c.then((m) => {
          zl(e, m);
        }).catch((m) => {
          ta(m, e, 0);
        });
      e.asyncDep = c;
    } else
      zl(e, c);
  } else
    Cr(e);
}
function zl(e, s, o) {
  Ze(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : vt(s) && (e.setupState = Oi(s)), Cr(e);
}
function Cr(e, s, o) {
  const a = e.type;
  e.render || (e.render = a.render || $s);
  {
    const l = pn(e);
    Ms();
    try {
      vu(e);
    } finally {
      Rs(), l();
    }
  }
}
const Xu = {
  get(e, s) {
    return Nt(e, "get", ""), e[s];
  }
};
function Zu(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Xu),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function la(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Oi(Bc(e.exposed)), {
    get(s, o) {
      if (o in s)
        return s[o];
      if (o in Jo)
        return Jo[o](e);
    },
    has(s, o) {
      return o in s || o in Jo;
    }
  })) : e.proxy;
}
function ed(e, s = !0) {
  return Ze(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function td(e) {
  return Ze(e) && "__vccOpts" in e;
}
const A = (e, s) => Kc(e, s, un);
function gn(e, s, o) {
  try {
    Wn(-1);
    const a = arguments.length;
    return a === 2 ? vt(s) && !Ye(s) ? cn(s) ? S(e, null, [s]) : S(e, s) : S(e, null, s) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && cn(o) && (o = [o]), S(e, s, o));
  } finally {
    Wn(1);
  }
}
const sd = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Va;
const Fl = typeof window < "u" && window.trustedTypes;
if (Fl)
  try {
    Va = /* @__PURE__ */ Fl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const xr = Va ? (e) => Va.createHTML(e) : (e) => e, od = "http://www.w3.org/2000/svg", nd = "http://www.w3.org/1998/Math/MathML", Ss = typeof document < "u" ? document : null, Vl = Ss && /* @__PURE__ */ Ss.createElement("template"), ad = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, a) => {
    const l = s === "svg" ? Ss.createElementNS(od, e) : s === "mathml" ? Ss.createElementNS(nd, e) : o ? Ss.createElement(e, { is: o }) : Ss.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => Ss.createTextNode(e),
  createComment: (e) => Ss.createComment(e),
  setText: (e, s) => {
    e.nodeValue = s;
  },
  setElementText: (e, s) => {
    e.textContent = s;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ss.querySelector(e),
  setScopeId(e, s) {
    e.setAttribute(s, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, s, o, a, l, r) {
    const c = o ? o.previousSibling : s.lastChild;
    if (l && (l === r || l.nextSibling))
      for (; s.insertBefore(l.cloneNode(!0), o), !(l === r || !(l = l.nextSibling)); )
        ;
    else {
      Vl.innerHTML = xr(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Vl.content;
      if (a === "svg" || a === "mathml") {
        const m = u.firstChild;
        for (; m.firstChild; )
          u.appendChild(m.firstChild);
        u.removeChild(m);
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
}, zs = "transition", Oo = "animation", Po = Symbol("_vtc"), Sr = {
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
}, Ir = /* @__PURE__ */ Tt(
  {},
  Yi,
  Sr
), ld = (e) => (e.displayName = "Transition", e.props = Ir, e), id = /* @__PURE__ */ ld(
  (e, { slots: s }) => gn(tu, Er(e), s)
), Zs = (e, s = []) => {
  Ye(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, Bl = (e) => e ? Ye(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function Er(e) {
  const s = {};
  for (const Z in e)
    Z in Sr || (s[Z] = e[Z]);
  if (e.css === !1)
    return s;
  const {
    name: o = "v",
    type: a,
    duration: l,
    enterFromClass: r = `${o}-enter-from`,
    enterActiveClass: c = `${o}-enter-active`,
    enterToClass: u = `${o}-enter-to`,
    appearFromClass: m = r,
    appearActiveClass: f = c,
    appearToClass: v = u,
    leaveFromClass: p = `${o}-leave-from`,
    leaveActiveClass: _ = `${o}-leave-active`,
    leaveToClass: g = `${o}-leave-to`
  } = e, w = rd(l), C = w && w[0], $ = w && w[1], {
    onBeforeEnter: x,
    onEnter: O,
    onEnterCancelled: T,
    onLeave: P,
    onLeaveCancelled: R,
    onBeforeAppear: U = x,
    onAppear: B = O,
    onAppearCancelled: I = T
  } = s, N = (Z, X, G, Q) => {
    Z._enterCancelled = Q, Fs(Z, X ? v : u), Fs(Z, X ? f : c), G && G();
  }, se = (Z, X) => {
    Z._isLeaving = !1, Fs(Z, p), Fs(Z, g), Fs(Z, _), X && X();
  }, te = (Z) => (X, G) => {
    const Q = Z ? B : O, oe = () => N(X, Z, G);
    Zs(Q, [X, oe]), Wl(() => {
      Fs(X, Z ? m : r), ws(X, Z ? v : u), Bl(Q) || Gl(X, a, C, oe);
    });
  };
  return Tt(s, {
    onBeforeEnter(Z) {
      Zs(x, [Z]), ws(Z, r), ws(Z, c);
    },
    onBeforeAppear(Z) {
      Zs(U, [Z]), ws(Z, m), ws(Z, f);
    },
    onEnter: te(!1),
    onAppear: te(!0),
    onLeave(Z, X) {
      Z._isLeaving = !0;
      const G = () => se(Z, X);
      ws(Z, p), Z._enterCancelled ? (ws(Z, _), Ba(Z)) : (Ba(Z), ws(Z, _)), Wl(() => {
        Z._isLeaving && (Fs(Z, p), ws(Z, g), Bl(P) || Gl(Z, a, $, G));
      }), Zs(P, [Z, G]);
    },
    onEnterCancelled(Z) {
      N(Z, !1, void 0, !0), Zs(T, [Z]);
    },
    onAppearCancelled(Z) {
      N(Z, !0, void 0, !0), Zs(I, [Z]);
    },
    onLeaveCancelled(Z) {
      se(Z), Zs(R, [Z]);
    }
  });
}
function rd(e) {
  if (e == null)
    return null;
  if (vt(e))
    return [ba(e.enter), ba(e.leave)];
  {
    const s = ba(e);
    return [s, s];
  }
}
function ba(e) {
  return fc(e);
}
function ws(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Po] || (e[Po] = /* @__PURE__ */ new Set())).add(s);
}
function Fs(e, s) {
  s.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const o = e[Po];
  o && (o.delete(s), o.size || (e[Po] = void 0));
}
function Wl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let cd = 0;
function Gl(e, s, o, a) {
  const l = e._endId = ++cd, r = () => {
    l === e._endId && a();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: c, timeout: u, propCount: m } = Tr(e, s);
  if (!c)
    return a();
  const f = c + "end";
  let v = 0;
  const p = () => {
    e.removeEventListener(f, _), r();
  }, _ = (g) => {
    g.target === e && ++v >= m && p();
  };
  setTimeout(() => {
    v < m && p();
  }, u + 1), e.addEventListener(f, _);
}
function Tr(e, s) {
  const o = window.getComputedStyle(e), a = (w) => (o[w] || "").split(", "), l = a(`${zs}Delay`), r = a(`${zs}Duration`), c = jl(l, r), u = a(`${Oo}Delay`), m = a(`${Oo}Duration`), f = jl(u, m);
  let v = null, p = 0, _ = 0;
  s === zs ? c > 0 && (v = zs, p = c, _ = r.length) : s === Oo ? f > 0 && (v = Oo, p = f, _ = m.length) : (p = Math.max(c, f), v = p > 0 ? c > f ? zs : Oo : null, _ = v ? v === zs ? r.length : m.length : 0);
  const g = v === zs && /\b(?:transform|all)(?:,|$)/.test(
    a(`${zs}Property`).toString()
  );
  return {
    type: v,
    timeout: p,
    propCount: _,
    hasTransform: g
  };
}
function jl(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, a) => Hl(o) + Hl(e[a])));
}
function Hl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ba(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function ud(e, s, o) {
  const a = e[Po];
  a && (s = (s ? [s, ...a] : [...a]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Kl = Symbol("_vod"), dd = Symbol("_vsh"), md = Symbol(""), fd = /(?:^|;)\s*display\s*:/;
function vd(e, s, o) {
  const a = e.style, l = xt(o);
  let r = !1;
  if (o && !l) {
    if (s)
      if (xt(s))
        for (const c of s.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && Ln(a, u, "");
        }
      else
        for (const c in s)
          o[c] == null && Ln(a, c, "");
    for (const c in o)
      c === "display" && (r = !0), Ln(a, c, o[c]);
  } else if (l) {
    if (s !== o) {
      const c = a[md];
      c && (o += ";" + c), a.cssText = o, r = fd.test(o);
    }
  } else s && e.removeAttribute("style");
  Kl in e && (e[Kl] = r ? a.display : "", e[dd] && (a.display = "none"));
}
const ql = /\s*!important$/;
function Ln(e, s, o) {
  if (Ye(o))
    o.forEach((a) => Ln(e, s, a));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const a = pd(e, s);
    ql.test(o) ? e.setProperty(
      Ks(a),
      o.replace(ql, ""),
      "important"
    ) : e[a] = o;
  }
}
const Yl = ["Webkit", "Moz", "ms"], $a = {};
function pd(e, s) {
  const o = $a[s];
  if (o)
    return o;
  let a = ns(s);
  if (a !== "filter" && a in e)
    return $a[s] = a;
  a = Jn(a);
  for (let l = 0; l < Yl.length; l++) {
    const r = Yl[l] + a;
    if (r in e)
      return $a[s] = r;
  }
  return s;
}
const Ql = "http://www.w3.org/1999/xlink";
function Jl(e, s, o, a, l, r = wc(s)) {
  a && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Ql, s.slice(6, s.length)) : e.setAttributeNS(Ql, s, o) : o == null || r && !ki(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    r ? "" : ds(o) ? String(o) : o
  );
}
function Xl(e, s, o, a, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? xr(o) : o);
    return;
  }
  const r = e.tagName;
  if (s === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const u = r === "OPTION" ? e.getAttribute("value") || "" : e.value, m = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (u !== m || !("_value" in e)) && (e.value = m), o == null && e.removeAttribute(s), e._value = o;
    return;
  }
  let c = !1;
  if (o === "" || o == null) {
    const u = typeof e[s];
    u === "boolean" ? o = ki(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
  }
  try {
    e[s] = o;
  } catch {
  }
  c && e.removeAttribute(l || s);
}
function Ps(e, s, o, a) {
  e.addEventListener(s, o, a);
}
function gd(e, s, o, a) {
  e.removeEventListener(s, o, a);
}
const Zl = Symbol("_vei");
function hd(e, s, o, a, l = null) {
  const r = e[Zl] || (e[Zl] = {}), c = r[s];
  if (a && c)
    c.value = a;
  else {
    const [u, m] = yd(s);
    if (a) {
      const f = r[s] = kd(
        a,
        l
      );
      Ps(e, u, f, m);
    } else c && (gd(e, u, c, m), r[s] = void 0);
  }
}
const ei = /(?:Once|Passive|Capture)$/;
function yd(e) {
  let s;
  if (ei.test(e)) {
    s = {};
    let a;
    for (; a = e.match(ei); )
      e = e.slice(0, e.length - a[0].length), s[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ks(e.slice(2)), s];
}
let Ca = 0;
const wd = /* @__PURE__ */ Promise.resolve(), _d = () => Ca || (wd.then(() => Ca = 0), Ca = Date.now());
function kd(e, s) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    fs(
      bd(a, o.value),
      s,
      5,
      [a]
    );
  };
  return o.value = e, o.attached = _d(), o;
}
function bd(e, s) {
  if (Ye(s)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, s.map(
      (a) => (l) => !l._stopped && a && a(l)
    );
  } else
    return s;
}
const ti = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, $d = (e, s, o, a, l, r) => {
  const c = l === "svg";
  s === "class" ? ud(e, a, c) : s === "style" ? vd(e, o, a) : Yn(s) ? Ya(s) || hd(e, s, o, a, r) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : Cd(e, s, a, c)) ? (Xl(e, s, a), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Jl(e, s, a, c, r, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !xt(a)) ? Xl(e, ns(s), a, r, s) : (s === "true-value" ? e._trueValue = a : s === "false-value" && (e._falseValue = a), Jl(e, s, a, c));
};
function Cd(e, s, o, a) {
  if (a)
    return !!(s === "innerHTML" || s === "textContent" || s in e && ti(s) && Ze(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return ti(s) && xt(o) ? !1 : s in e;
}
const Pr = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), jn = Symbol("_moveCb"), si = Symbol("_enterCb"), xd = (e) => (delete e.props.mode, e), Sd = /* @__PURE__ */ xd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Tt({}, Ir, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = fl(), a = qi();
    let l, r;
    return tr(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!Md(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(Ed), l.forEach(Td);
      const u = l.filter(Pd);
      Ba(o.vnode.el), u.forEach((m) => {
        const f = m.el, v = f.style;
        ws(f, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const p = f[jn] = (_) => {
          _ && _.target !== f || (!_ || _.propertyName.endsWith("transform")) && (f.removeEventListener("transitionend", p), f[jn] = null, Fs(f, c));
        };
        f.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const c = it(e), u = Er(c);
      let m = c.tag || j;
      if (l = [], r)
        for (let f = 0; f < r.length; f++) {
          const v = r[f];
          v.el && v.el instanceof Element && (l.push(v), lo(
            v,
            ln(
              v,
              u,
              a,
              o
            )
          ), Pr.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      r = s.default ? il(s.default()) : [];
      for (let f = 0; f < r.length; f++) {
        const v = r[f];
        v.key != null && lo(
          v,
          ln(v, u, a, o)
        );
      }
      return S(m, null, r);
    };
  }
}), Id = Sd;
function Ed(e) {
  const s = e.el;
  s[jn] && s[jn](), s[si] && s[si]();
}
function Td(e) {
  Mr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function Pd(e) {
  const s = Pr.get(e), o = Mr.get(e), a = s.left - o.left, l = s.top - o.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function Md(e, s, o) {
  const a = e.cloneNode(), l = e[Po];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((m) => m && a.classList.remove(m));
  }), o.split(/\s+/).forEach((u) => u && a.classList.add(u)), a.style.display = "none";
  const r = s.nodeType === 1 ? s : s.parentNode;
  r.appendChild(a);
  const { hasTransform: c } = Tr(a);
  return r.removeChild(a), c;
}
const Hs = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Ye(s) ? (o) => Pn(s, o) : s;
};
function Rd(e) {
  e.target.composing = !0;
}
function oi(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const ss = Symbol("_assign");
function ni(e, s, o) {
  return s && (e = e.trim()), o && (e = Xn(e)), e;
}
const Qt = {
  created(e, { modifiers: { lazy: s, trim: o, number: a } }, l) {
    e[ss] = Hs(l);
    const r = a || l.props && l.props.type === "number";
    Ps(e, s ? "change" : "input", (c) => {
      c.target.composing || e[ss](ni(e.value, o, r));
    }), (o || r) && Ps(e, "change", () => {
      e.value = ni(e.value, o, r);
    }), s || (Ps(e, "compositionstart", Rd), Ps(e, "compositionend", oi), Ps(e, "change", oi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: a, trim: l, number: r } }, c) {
    if (e[ss] = Hs(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? Xn(e.value) : e.value, m = s ?? "";
    u !== m && (document.activeElement === e && e.type !== "range" && (a && s === o || l && e.value.trim() === m) || (e.value = m));
  }
}, dn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[ss] = Hs(o), Ps(e, "change", () => {
      const a = e._modelValue, l = Mo(e), r = e.checked, c = e[ss];
      if (Ye(a)) {
        const u = Xa(a, l), m = u !== -1;
        if (r && !m)
          c(a.concat(l));
        else if (!r && m) {
          const f = [...a];
          f.splice(u, 1), c(f);
        }
      } else if (Ro(a)) {
        const u = new Set(a);
        r ? u.add(l) : u.delete(l), c(u);
      } else
        c(Rr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ai,
  beforeUpdate(e, s, o) {
    e[ss] = Hs(o), ai(e, s, o);
  }
};
function ai(e, { value: s, oldValue: o }, a) {
  e._modelValue = s;
  let l;
  if (Ye(s))
    l = Xa(s, a.props.value) > -1;
  else if (Ro(s))
    l = s.has(a.props.value);
  else {
    if (s === o) return;
    l = ao(s, Rr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const cs = {
  created(e, { value: s }, o) {
    e.checked = ao(s, o.props.value), e[ss] = Hs(o), Ps(e, "change", () => {
      e[ss](Mo(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, a) {
    e[ss] = Hs(a), s !== o && (e.checked = ao(s, a.props.value));
  }
}, Cs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, a) {
    const l = Ro(s);
    Ps(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? Xn(Mo(c)) : Mo(c)
      );
      e[ss](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Et(() => {
        e._assigning = !1;
      });
    }), e[ss] = Hs(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    li(e, s);
  },
  beforeUpdate(e, s, o) {
    e[ss] = Hs(o);
  },
  updated(e, { value: s }) {
    e._assigning || li(e, s);
  }
};
function li(e, s) {
  const o = e.multiple, a = Ye(s);
  if (!(o && !a && !Ro(s))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = Mo(c);
      if (o)
        if (a) {
          const m = typeof u;
          m === "string" || m === "number" ? c.selected = s.some((f) => String(f) === String(u)) : c.selected = Xa(s, u) > -1;
        } else
          c.selected = s.has(u);
      else if (ao(Mo(c), s)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Mo(e) {
  return "_value" in e ? e._value : e.value;
}
function Rr(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
}
const ia = {
  created(e, s, o) {
    Cn(e, s, o, null, "created");
  },
  mounted(e, s, o) {
    Cn(e, s, o, null, "mounted");
  },
  beforeUpdate(e, s, o, a) {
    Cn(e, s, o, a, "beforeUpdate");
  },
  updated(e, s, o, a) {
    Cn(e, s, o, a, "updated");
  }
};
function Dd(e, s) {
  switch (e) {
    case "SELECT":
      return Cs;
    case "TEXTAREA":
      return Qt;
    default:
      switch (s) {
        case "checkbox":
          return dn;
        case "radio":
          return cs;
        default:
          return Qt;
      }
  }
}
function Cn(e, s, o, a, l) {
  const c = Dd(
    e.tagName,
    o.props && o.props.type
  )[l];
  c && c(e, s, o, a);
}
const Ld = ["ctrl", "shift", "alt", "meta"], Nd = {
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
  exact: (e, s) => Ld.some((o) => e[`${o}Key`] && !s.includes(o))
}, kt = (e, s) => {
  const o = e._withMods || (e._withMods = {}), a = s.join(".");
  return o[a] || (o[a] = ((l, ...r) => {
    for (let c = 0; c < s.length; c++) {
      const u = Nd[s[c]];
      if (u && u(l, s)) return;
    }
    return e(l, ...r);
  }));
}, Ud = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, os = (e, s) => {
  const o = e._withKeys || (e._withKeys = {}), a = s.join(".");
  return o[a] || (o[a] = ((l) => {
    if (!("key" in l))
      return;
    const r = Ks(l.key);
    if (s.some(
      (c) => c === r || Ud[c] === r
    ))
      return e(l);
  }));
}, Ad = /* @__PURE__ */ Tt({ patchProp: $d }, ad);
let ii;
function Od() {
  return ii || (ii = Ou(Ad));
}
const ra = ((...e) => {
  const s = Od().createApp(...e), { mount: o } = s;
  return s.mount = (a) => {
    const l = Fd(a);
    if (!l) return;
    const r = s._component;
    !Ze(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, zd(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, s;
});
function zd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Fd(e) {
  return xt(e) ? document.querySelector(e) : e;
}
const Vd = { class: "panel-layout" }, Bd = {
  key: 0,
  class: "panel-layout-header"
}, Wd = {
  key: 1,
  class: "panel-layout-search"
}, Gd = { class: "panel-layout-content" }, jd = {
  key: 2,
  class: "panel-layout-footer"
}, Hd = /* @__PURE__ */ he({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (n(), i("div", Vd, [
      s.$slots.header ? (n(), i("div", Bd, [
        ot(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (n(), i("div", Wd, [
        ot(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", Gd, [
        ot(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (n(), i("div", jd, [
        ot(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), we = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of s)
    o[a] = l;
  return o;
}, Gt = /* @__PURE__ */ we(Hd, [["__scopeId", "data-v-21565df9"]]), Kd = {
  key: 0,
  class: "panel-title-prefix"
}, qd = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Yd = /* @__PURE__ */ he({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (n(), D(rl(`h${e.level}`), {
      class: Pe(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (n(), i("span", Kd, d(e.prefix), 1)) : (n(), i("span", qd)),
        ot(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Qd = /* @__PURE__ */ we(Yd, [["__scopeId", "data-v-c3875efc"]]), Jd = ["title"], Xd = ["width", "height"], Zd = /* @__PURE__ */ he({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (n(), i("button", {
      class: "info-button",
      title: e.title,
      onClick: o[0] || (o[0] = (a) => s.$emit("click"))
    }, [
      (n(), i("svg", {
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
      ])], 8, Xd))
    ], 8, Jd));
  }
}), Dr = /* @__PURE__ */ we(Zd, [["__scopeId", "data-v-6fc7f16d"]]), em = { class: "header-left" }, tm = {
  key: 0,
  class: "header-actions"
}, sm = /* @__PURE__ */ he({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Pe(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", em, [
        S(Qd, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            b(d(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), D(Dr, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (n(), i("div", tm, [
        ot(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), jt = /* @__PURE__ */ we(sm, [["__scopeId", "data-v-55a62cd6"]]), om = {
  key: 0,
  class: "section-title-count"
}, nm = {
  key: 1,
  class: "section-title-icon"
}, am = /* @__PURE__ */ he({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (n(), D(rl(`h${e.level}`), {
      class: Pe(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, {
      default: h(() => [
        ot(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", om, "(" + d(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (n(), i("span", nm, d(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), qt = /* @__PURE__ */ we(am, [["__scopeId", "data-v-559361eb"]]), lm = { class: "status-grid" }, im = { class: "status-grid__columns" }, rm = { class: "status-grid__column" }, cm = { class: "status-grid__title" }, um = { class: "status-grid__column status-grid__column--right" }, dm = { class: "status-grid__title" }, mm = {
  key: 0,
  class: "status-grid__footer"
}, fm = /* @__PURE__ */ he({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", lm, [
      t("div", im, [
        t("div", rm, [
          t("h4", cm, d(e.leftTitle), 1),
          ot(s.$slots, "left", {}, void 0)
        ]),
        t("div", um, [
          t("h4", dm, d(e.rightTitle), 1),
          ot(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (n(), i("div", mm, [
        ot(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), vm = /* @__PURE__ */ we(fm, [["__scopeId", "data-v-73b7ba3f"]]), pm = {
  key: 0,
  class: "status-item__icon"
}, gm = {
  key: 1,
  class: "status-item__count"
}, hm = { class: "status-item__label" }, ym = /* @__PURE__ */ he({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, o = A(() => `status-item--${s.variant}`);
    return (a, l) => (n(), i("div", {
      class: Pe(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (n(), i("span", pm, d(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (n(), i("span", gm, d(e.count), 1)) : y("", !0),
      t("span", hm, d(e.label), 1)
    ], 2));
  }
}), ys = /* @__PURE__ */ we(ym, [["__scopeId", "data-v-6f929183"]]), wm = { class: "issue-card__header" }, _m = { class: "issue-card__icon" }, km = { class: "issue-card__title" }, bm = {
  key: 0,
  class: "issue-card__content"
}, $m = {
  key: 0,
  class: "issue-card__description"
}, Cm = {
  key: 1,
  class: "issue-card__items"
}, xm = {
  key: 2,
  class: "issue-card__actions"
}, Sm = /* @__PURE__ */ he({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const s = e, o = A(() => `issue-card--${s.severity}`);
    return (a, l) => (n(), i("div", {
      class: Pe(["issue-card", o.value])
    }, [
      t("div", wm, [
        t("span", _m, d(e.icon), 1),
        t("h4", km, d(e.title), 1)
      ]),
      a.$slots.default || e.description ? (n(), i("div", bm, [
        e.description ? (n(), i("p", $m, d(e.description), 1)) : y("", !0),
        ot(a.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (n(), i("div", Cm, [
        (n(!0), i(j, null, ge(e.items, (r, c) => (n(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, d(r), 1)
        ]))), 128))
      ])) : y("", !0),
      a.$slots.actions ? (n(), i("div", xm, [
        ot(a.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), is = /* @__PURE__ */ we(Sm, [["__scopeId", "data-v-df6aa348"]]), Im = ["type", "disabled"], Em = {
  key: 0,
  class: "spinner"
}, Tm = /* @__PURE__ */ he({
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
    return (s, o) => (n(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Pe(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", Em)) : y("", !0),
      e.loading ? y("", !0) : ot(s.$slots, "default", { key: 1 }, void 0)
    ], 10, Im));
  }
}), ve = /* @__PURE__ */ we(Tm, [["__scopeId", "data-v-772abe47"]]), Pm = { class: "empty-state" }, Mm = {
  key: 0,
  class: "empty-icon"
}, Rm = { class: "empty-message" }, Dm = /* @__PURE__ */ he({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (n(), i("div", Pm, [
      e.icon ? (n(), i("div", Mm, d(e.icon), 1)) : y("", !0),
      t("p", Rm, d(e.message), 1),
      e.actionLabel ? (n(), D(ve, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => s.$emit("action"))
      }, {
        default: h(() => [
          b(d(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), vs = /* @__PURE__ */ we(Dm, [["__scopeId", "data-v-4466284f"]]), Lm = /* @__PURE__ */ he({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Pe(["detail-label"]),
      style: Jt({ minWidth: e.minWidth })
    }, [
      ot(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), Nn = /* @__PURE__ */ we(Lm, [["__scopeId", "data-v-75e9eeb8"]]), Nm = /* @__PURE__ */ he({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Pe(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      ot(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Wa = /* @__PURE__ */ we(Nm, [["__scopeId", "data-v-2f186e4c"]]), Um = { class: "detail-row" }, Am = /* @__PURE__ */ he({
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
    return (s, o) => (n(), i("div", Um, [
      S(Nn, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          b(d(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (n(), D(Wa, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          b(d(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ot(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), _t = /* @__PURE__ */ we(Am, [["__scopeId", "data-v-ef15664a"]]), Om = { class: "modal-header" }, zm = { class: "modal-body" }, Fm = { class: "status-section" }, Vm = {
  key: 0,
  class: "status-section"
}, Bm = { class: "section-header-row" }, Wm = {
  key: 0,
  class: "workflow-group"
}, Gm = { class: "workflow-group-header" }, jm = { class: "workflow-group-title" }, Hm = { class: "workflow-list" }, Km = { class: "workflow-name" }, qm = { class: "workflow-issue" }, Ym = {
  key: 1,
  class: "workflow-group"
}, Qm = { class: "workflow-group-header" }, Jm = { class: "workflow-group-title" }, Xm = { class: "workflow-list" }, Zm = { class: "workflow-name" }, ef = { class: "workflow-issue" }, tf = {
  key: 2,
  class: "workflow-group"
}, sf = { class: "workflow-group-header" }, of = { class: "workflow-group-title" }, nf = { class: "workflow-list" }, af = { class: "workflow-name" }, lf = {
  key: 3,
  class: "workflow-group"
}, rf = { class: "workflow-group-header" }, cf = { class: "workflow-group-title" }, uf = { class: "workflow-list" }, df = { class: "workflow-name" }, mf = {
  key: 4,
  class: "workflow-group"
}, ff = { class: "workflow-group-header" }, vf = { class: "workflow-group-title" }, pf = { class: "workflow-list" }, gf = { class: "workflow-name" }, hf = {
  key: 5,
  class: "workflow-group"
}, yf = { class: "workflow-group-title" }, wf = { class: "expand-icon" }, _f = {
  key: 0,
  class: "workflow-list"
}, kf = { class: "workflow-name" }, bf = {
  key: 1,
  class: "status-section"
}, $f = {
  key: 0,
  class: "change-group"
}, Cf = { class: "change-group-header" }, xf = { class: "change-group-title" }, Sf = { class: "change-list" }, If = { class: "node-name" }, Ef = {
  key: 0,
  class: "dev-badge"
}, Tf = {
  key: 1,
  class: "change-group"
}, Pf = { class: "change-group-header" }, Mf = { class: "change-group-title" }, Rf = { class: "change-list" }, Df = { class: "node-name" }, Lf = {
  key: 0,
  class: "dev-badge"
}, Nf = {
  key: 2,
  class: "change-group"
}, Uf = { class: "change-list" }, Af = { class: "change-item" }, Of = { class: "node-name" }, zf = {
  key: 3,
  class: "change-group"
}, Ff = {
  key: 2,
  class: "status-section"
}, Vf = { class: "section-header-row" }, Bf = {
  key: 0,
  class: "drift-item"
}, Wf = { class: "drift-list" }, Gf = {
  key: 0,
  class: "drift-list-more"
}, jf = {
  key: 1,
  class: "drift-item"
}, Hf = { class: "drift-list" }, Kf = {
  key: 0,
  class: "drift-list-more"
}, qf = {
  key: 2,
  class: "drift-item"
}, Yf = { class: "drift-list" }, Qf = { class: "version-actual" }, Jf = { class: "version-expected" }, Xf = {
  key: 0,
  class: "drift-list-more"
}, Zf = {
  key: 3,
  class: "drift-item"
}, ev = { class: "repair-action" }, tv = {
  key: 3,
  class: "status-section"
}, sv = { class: "info-box" }, ov = { class: "drift-list" }, nv = {
  key: 0,
  class: "drift-list-more"
}, av = {
  key: 4,
  class: "status-section"
}, lv = { class: "warning-box" }, iv = {
  key: 5,
  class: "empty-state-inline"
}, rv = { class: "modal-actions" }, cv = /* @__PURE__ */ he({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = k(!1);
    at(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), Ct(() => s.show, (_, g) => {
      console.log("StatusDetailModal show prop changed from", g, "to", _);
    }, { immediate: !0 });
    const a = A(() => {
      var _, g, w;
      return ((w = (g = (_ = s.status) == null ? void 0 : _.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : w.filter(
        (C) => C.status === "broken" && C.sync_state === "synced"
      )) || [];
    }), l = A(() => {
      var _, g, w;
      return ((w = (g = (_ = s.status) == null ? void 0 : _.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : w.filter(
        (C) => C.status === "broken" && C.sync_state !== "synced"
      )) || [];
    }), r = A(() => {
      var _, g, w;
      return ((w = (g = (_ = s.status) == null ? void 0 : _.workflows) == null ? void 0 : g.synced) == null ? void 0 : w.filter((C) => {
        var x, O, T;
        const $ = (T = (O = (x = s.status) == null ? void 0 : x.workflows) == null ? void 0 : O.analyzed) == null ? void 0 : T.find((P) => P.name === C);
        return !$ || $.status !== "broken";
      })) || [];
    }), c = A(() => {
      var _, g, w, C, $;
      return (_ = s.status) != null && _.workflows ? (((g = s.status.workflows.new) == null ? void 0 : g.length) ?? 0) > 0 || (((w = s.status.workflows.modified) == null ? void 0 : w.length) ?? 0) > 0 || (((C = s.status.workflows.deleted) == null ? void 0 : C.length) ?? 0) > 0 || ((($ = s.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), u = A(() => {
      var g, w, C;
      const _ = (g = s.status) == null ? void 0 : g.git_changes;
      return _ ? (((w = _.nodes_added) == null ? void 0 : w.length) ?? 0) > 0 || (((C = _.nodes_removed) == null ? void 0 : C.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), m = A(() => {
      var _, g, w, C, $, x;
      return !c.value && !u.value && ((g = (_ = s.status) == null ? void 0 : _.comparison) == null ? void 0 : g.is_synced) && (((w = s.status) == null ? void 0 : w.missing_models_count) ?? 0) === 0 && (((x = ($ = (C = s.status) == null ? void 0 : C.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : x.length) ?? 0) === 0;
    }), f = A(() => {
      var g, w;
      const _ = (w = (g = s.status) == null ? void 0 : g.git_changes) == null ? void 0 : w.workflow_changes;
      return _ ? typeof _ == "number" ? _ : Object.keys(_).length : 0;
    });
    function v(_) {
      return typeof _ == "string" ? _ : _.name;
    }
    function p(_) {
      return typeof _ == "object" && _.is_development === !0;
    }
    return (_, g) => {
      var w, C, $, x, O, T, P, R, U, B, I, N, se, te, Z, X, G, Q, oe, le, W, ee;
      return n(), D(Dt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: g[7] || (g[7] = (ae) => _.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: g[6] || (g[6] = kt(() => {
            }, ["stop"]))
          }, [
            t("div", Om, [
              g[8] || (g[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: g[0] || (g[0] = (ae) => _.$emit("close"))
              }, "✕")
            ]),
            t("div", zm, [
              t("div", Fm, [
                S(qt, { level: "4" }, {
                  default: h(() => [...g[9] || (g[9] = [
                    b("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                S(_t, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (n(), i("div", Vm, [
                t("div", Bm, [
                  S(qt, { level: "4" }, {
                    default: h(() => [...g[10] || (g[10] = [
                      b("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: g[1] || (g[1] = (ae) => _.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", Wm, [
                  t("div", Gm, [
                    g[11] || (g[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", jm, "BROKEN (COMMITTED) (" + d(a.value.length) + ")", 1)
                  ]),
                  t("div", Hm, [
                    (n(!0), i(j, null, ge(a.value, (ae) => (n(), i("div", {
                      key: ae.name,
                      class: "workflow-item"
                    }, [
                      t("span", Km, d(ae.name), 1),
                      t("span", qm, d(ae.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (n(), i("div", Ym, [
                  t("div", Qm, [
                    g[12] || (g[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Jm, "BROKEN (UNCOMMITTED) (" + d(l.value.length) + ")", 1)
                  ]),
                  t("div", Xm, [
                    (n(!0), i(j, null, ge(l.value, (ae) => (n(), i("div", {
                      key: ae.name,
                      class: "workflow-item"
                    }, [
                      t("span", Zm, d(ae.name), 1),
                      t("span", ef, d(ae.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (w = e.status.workflows) == null ? void 0 : w.new) != null && C.length ? (n(), i("div", tf, [
                  t("div", sf, [
                    g[13] || (g[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", of, "NEW (" + d(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", nf, [
                    (n(!0), i(j, null, ge(e.status.workflows.new, (ae) => (n(), i("div", {
                      key: ae,
                      class: "workflow-item"
                    }, [
                      t("span", af, d(ae), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && x.length ? (n(), i("div", lf, [
                  t("div", rf, [
                    g[14] || (g[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", cf, "MODIFIED (" + d(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", uf, [
                    (n(!0), i(j, null, ge(e.status.workflows.modified, (ae) => (n(), i("div", {
                      key: ae,
                      class: "workflow-item"
                    }, [
                      t("span", df, d(ae), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (T = (O = e.status.workflows) == null ? void 0 : O.deleted) != null && T.length ? (n(), i("div", mf, [
                  t("div", ff, [
                    g[15] || (g[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", vf, "DELETED (" + d(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", pf, [
                    (n(!0), i(j, null, ge(e.status.workflows.deleted, (ae) => (n(), i("div", {
                      key: ae,
                      class: "workflow-item"
                    }, [
                      t("span", gf, d(ae), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (n(), i("div", hf, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: g[2] || (g[2] = (ae) => o.value = !o.value)
                  }, [
                    g[16] || (g[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", yf, "SYNCED (" + d(r.value.length) + ")", 1),
                    t("span", wf, d(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", _f, [
                    (n(!0), i(j, null, ge(r.value, (ae) => (n(), i("div", {
                      key: ae,
                      class: "workflow-item"
                    }, [
                      t("span", kf, d(ae), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (n(), i("div", bf, [
                S(qt, { level: "4" }, {
                  default: h(() => [...g[17] || (g[17] = [
                    b("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (R = (P = e.status.git_changes) == null ? void 0 : P.nodes_added) != null && R.length ? (n(), i("div", $f, [
                  t("div", Cf, [
                    g[18] || (g[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", xf, "NODES ADDED (" + d(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", Sf, [
                    (n(!0), i(j, null, ge(e.status.git_changes.nodes_added, (ae) => (n(), i("div", {
                      key: v(ae),
                      class: "change-item"
                    }, [
                      t("span", If, d(v(ae)), 1),
                      p(ae) ? (n(), i("span", Ef, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (B = (U = e.status.git_changes) == null ? void 0 : U.nodes_removed) != null && B.length ? (n(), i("div", Tf, [
                  t("div", Pf, [
                    g[19] || (g[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", Mf, "NODES REMOVED (" + d(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", Rf, [
                    (n(!0), i(j, null, ge(e.status.git_changes.nodes_removed, (ae) => (n(), i("div", {
                      key: v(ae),
                      class: "change-item"
                    }, [
                      t("span", Df, d(v(ae)), 1),
                      p(ae) ? (n(), i("span", Lf, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = e.status.git_changes) != null && I.workflow_changes ? (n(), i("div", Nf, [
                  g[20] || (g[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", Uf, [
                    t("div", Af, [
                      t("span", Of, d(f.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (N = e.status.git_changes) != null && N.has_other_changes ? (n(), i("div", zf, [...g[21] || (g[21] = [
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
              (se = e.status.comparison) != null && se.is_synced ? y("", !0) : (n(), i("div", Ff, [
                t("div", Vf, [
                  S(qt, { level: "4" }, {
                    default: h(() => [...g[22] || (g[22] = [
                      b("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: g[3] || (g[3] = (ae) => _.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                g[26] || (g[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (Z = (te = e.status.comparison) == null ? void 0 : te.missing_nodes) != null && Z.length ? (n(), i("div", Bf, [
                  S(_t, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Wf, [
                    (n(!0), i(j, null, ge(e.status.comparison.missing_nodes.slice(0, 10), (ae) => (n(), i("div", {
                      key: ae,
                      class: "drift-list-item"
                    }, " - " + d(ae), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", Gf, " ... and " + d(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (G = (X = e.status.comparison) == null ? void 0 : X.extra_nodes) != null && G.length ? (n(), i("div", jf, [
                  S(_t, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", Hf, [
                    (n(!0), i(j, null, ge(e.status.comparison.extra_nodes.slice(0, 10), (ae) => (n(), i("div", {
                      key: ae,
                      class: "drift-list-item"
                    }, " - " + d(ae), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", Kf, " ... and " + d(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (oe = (Q = e.status.comparison) == null ? void 0 : Q.version_mismatches) != null && oe.length ? (n(), i("div", qf, [
                  S(_t, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Yf, [
                    (n(!0), i(j, null, ge(e.status.comparison.version_mismatches.slice(0, 10), (ae) => (n(), i("div", {
                      key: ae.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      b(d(ae.name) + ": ", 1),
                      t("span", Qf, d(ae.actual), 1),
                      g[23] || (g[23] = b(" → ", -1)),
                      t("span", Jf, d(ae.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", Xf, " ... and " + d(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((le = e.status.comparison) == null ? void 0 : le.packages_in_sync) === !1 ? (n(), i("div", Zf, [
                  S(_t, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", ev, [
                  S(ve, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: g[4] || (g[4] = (ae) => _.$emit("repair"))
                  }, {
                    default: h(() => [...g[24] || (g[24] = [
                      b(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  g[25] || (g[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ee = (W = e.status.comparison) == null ? void 0 : W.disabled_nodes) != null && ee.length ? (n(), i("div", tv, [
                S(qt, { level: "4" }, {
                  default: h(() => [...g[27] || (g[27] = [
                    b("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", sv, [
                  g[28] || (g[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, d(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", ov, [
                  (n(!0), i(j, null, ge(e.status.comparison.disabled_nodes.slice(0, 10), (ae) => (n(), i("div", {
                    key: ae,
                    class: "drift-list-item"
                  }, " • " + d(ae), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (n(), i("div", nv, " ... and " + d(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (n(), i("div", av, [
                S(qt, { level: "4" }, {
                  default: h(() => [...g[29] || (g[29] = [
                    b("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", lv, [
                  g[30] || (g[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, d(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                g[31] || (g[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              m.value ? (n(), i("div", iv, [...g[32] || (g[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            t("div", rv, [
              S(ve, {
                variant: "secondary",
                onClick: g[5] || (g[5] = (ae) => _.$emit("close"))
              }, {
                default: h(() => [...g[33] || (g[33] = [
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
}), uv = /* @__PURE__ */ we(cv, [["__scopeId", "data-v-e2b37122"]]), dv = { class: "health-section-header" }, mv = { class: "suggestions-content" }, fv = { class: "suggestions-text" }, vv = { style: { "margin-top": "var(--cg-space-3)" } }, pv = {
  key: 1,
  class: "no-issues-text"
}, gv = /* @__PURE__ */ he({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = k(!1), r = k(!1);
    function c() {
      l.value = !0;
    }
    function u() {
      l.value = !1, f("view-workflows");
    }
    function m() {
      l.value = !1, f("view-nodes");
    }
    const f = o, v = k(!1), p = k(!1);
    function _() {
      p.value = !0, f("repair-environment");
    }
    function g() {
      p.value = !1;
    }
    function w() {
      l.value = !1;
    }
    const C = A(() => {
      const $e = a.status.workflows.analyzed || [], V = $e.filter(
        (ie) => ie.unresolved_models_count > 0 || ie.ambiguous_models_count > 0
      );
      return V.length === 0 && a.status.missing_models_count > 0 ? $e.filter((ie) => ie.sync_state === "synced") : V;
    });
    function $() {
      const $e = C.value;
      $e.length !== 0 && (v.value = !0, f("repair-missing-models", $e.map((V) => V.name)));
    }
    function x() {
      v.value = !1;
    }
    s({ resetRepairingState: x, resetRepairingEnvironmentState: g, closeDetailModal: w });
    const O = A(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), T = A(() => a.status.has_changes), P = A(() => {
      const $e = a.status.git_changes;
      return $e.nodes_added.length > 0 || $e.nodes_removed.length > 0 || $e.workflow_changes;
    }), R = A(() => a.status.has_changes || O.value), U = A(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), B = A(() => a.status.git_changes.has_other_changes), I = A(() => {
      var $e;
      return (($e = a.status.workflows.analyzed) == null ? void 0 : $e.filter((V) => V.status === "broken")) || [];
    }), N = A(() => {
      var $e;
      return (($e = a.status.workflows.analyzed) == null ? void 0 : $e.filter(
        (V) => V.has_path_sync_issues && !V.has_issues
      )) || [];
    }), se = A(() => I.value.length > 0);
    function te($e) {
      const V = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const ie of V) {
        const F = $e.match(ie);
        if (F != null && F[1])
          return F[1];
      }
      return null;
    }
    function Z($e) {
      const V = $e.map(te).filter((ie) => !!ie);
      return [...new Set(V)];
    }
    function X($e) {
      if ($e.length === 0) return "";
      if ($e.length === 1) return ` (>= ${$e[0]})`;
      const V = $e.slice(0, 2).map((F) => `>= ${F}`).join(", "), ie = $e.length > 2;
      return ` (${V}${ie ? ", ..." : ""})`;
    }
    function G($e) {
      return $e.replace(/uninstallable node mappings?/gi, (V) => V.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function Q($e) {
      const V = G($e.issue_summary || "Has issues"), ie = /(?:>=|v?\d+\.\d+)/i.test(V), F = Z($e.version_gated_guidance || []);
      return ($e.nodes_version_gated_count || 0) > 0 && F.length > 0 && !ie ? `${$e.name} — ${V} (needs ComfyUI ${F.map((L) => `>= ${L}`).join(", ")})` : `${$e.name} — ${V}`;
    }
    const oe = A(() => I.value.reduce(
      ($e, V) => $e + (V.nodes_version_gated_count || 0),
      0
    )), le = A(() => {
      const $e = I.value.flatMap(
        (V) => Z(V.version_gated_guidance || [])
      );
      return [...new Set($e)];
    }), W = A(() => I.value.reduce(
      ($e, V) => $e + (V.nodes_uninstallable_count || 0),
      0
    )), ee = A(() => {
      const $e = [];
      return oe.value > 0 && $e.push(
        `${oe.value} require newer ComfyUI${X(le.value)}`
      ), W.value > 0 && $e.push(`${W.value} need community packages`), $e.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${$e.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), ae = A(() => se.value || N.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), Ne = A(() => {
      const $e = [];
      return a.status.workflows.new.length > 0 && $e.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && $e.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && $e.push(`${a.status.workflows.deleted.length} deleted`), $e.length > 0 ? `${$e.join(", ")} workflow${$e.length === 1 && !$e[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Ke = A(() => {
      var ie, F;
      const $e = [], V = a.status.comparison;
      return (ie = V.missing_nodes) != null && ie.length && $e.push(`${V.missing_nodes.length} missing node${V.missing_nodes.length === 1 ? "" : "s"}`), (F = V.extra_nodes) != null && F.length && $e.push(`${V.extra_nodes.length} untracked node${V.extra_nodes.length === 1 ? "" : "s"}`), $e.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${$e.join(" and ")}.`;
    }), je = A(() => {
      var ie, F;
      const $e = [], V = a.status.comparison;
      return (ie = V.extra_nodes) != null && ie.length && (V.extra_nodes.slice(0, 3).forEach((L) => {
        $e.push(`Untracked: ${L}`);
      }), V.extra_nodes.length > 3 && $e.push(`...and ${V.extra_nodes.length - 3} more untracked`)), (F = V.missing_nodes) != null && F.length && (V.missing_nodes.slice(0, 3).forEach((L) => {
        $e.push(`Missing: ${L}`);
      }), V.missing_nodes.length > 3 && $e.push(`...and ${V.missing_nodes.length - 3} more missing`)), $e;
    });
    return ($e, V) => (n(), i(j, null, [
      S(Gt, null, {
        header: h(() => [
          S(jt, { title: "STATUS" })
        ]),
        content: h(() => [
          a.setupState === "no_workspace" ? (n(), D(is, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              S(ve, {
                variant: "primary",
                size: "sm",
                onClick: V[0] || (V[0] = (ie) => $e.$emit("start-setup"))
              }, {
                default: h(() => [...V[13] || (V[13] = [
                  b(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (n(), D(is, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              S(ve, {
                variant: "primary",
                size: "sm",
                onClick: V[1] || (V[1] = (ie) => $e.$emit("view-environments"))
              }, {
                default: h(() => [...V[14] || (V[14] = [
                  b(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (n(), D(is, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              S(ve, {
                variant: "primary",
                size: "sm",
                onClick: V[2] || (V[2] = (ie) => $e.$emit("create-environment"))
              }, {
                default: h(() => [...V[15] || (V[15] = [
                  b(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: V[4] || (V[4] = (ie) => r.value = !0),
            onMouseleave: V[5] || (V[5] = (ie) => r.value = !1)
          }, [
            t("div", dv, [
              S(qt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...V[16] || (V[16] = [
                  b(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              S(id, { name: "fade" }, {
                default: h(() => [
                  r.value ? (n(), D(ve, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: h(() => [...V[17] || (V[17] = [
                      b(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            S(vm, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, io({
              left: h(() => [
                e.status.workflows.new.length ? (n(), D(ys, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (n(), D(ys, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (n(), D(ys, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                S(ys, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: O.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (n(), D(ys, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (n(), D(ys, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (n(), D(ys, {
                  key: 2,
                  icon: "●",
                  count: U.value,
                  label: U.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                B.value ? (n(), D(ys, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                T.value && !P.value && !B.value ? (n(), D(ys, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                T.value ? y("", !0) : (n(), D(ys, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              R.value ? {
                name: "footer",
                fn: h(() => [
                  V[19] || (V[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", mv, [
                    t("span", fv, d(Ne.value), 1),
                    S(ve, {
                      variant: "primary",
                      size: "sm",
                      onClick: V[3] || (V[3] = (ie) => $e.$emit("commit-changes"))
                    }, {
                      default: h(() => [...V[18] || (V[18] = [
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
          e.status.is_detached_head ? (n(), D(is, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              S(ve, {
                variant: "primary",
                size: "sm",
                onClick: V[6] || (V[6] = (ie) => $e.$emit("create-branch"))
              }, {
                default: h(() => [...V[20] || (V[20] = [
                  b(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", vv, [
            S(qt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...V[21] || (V[21] = [
                b(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ae.value ? (n(), i(j, { key: 0 }, [
              I.value.length > 0 ? (n(), D(is, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} can't run`,
                description: ee.value,
                items: I.value.map(Q)
              }, {
                actions: h(() => [
                  S(ve, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[7] || (V[7] = (ie) => $e.$emit("view-workflows"))
                  }, {
                    default: h(() => [...V[22] || (V[22] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              N.value.length > 0 ? (n(), D(is, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${N.value.length} workflow${N.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: N.value.map((ie) => `${ie.name} — ${ie.models_needing_path_sync_count} model path${ie.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  S(ve, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[8] || (V[8] = (ie) => $e.$emit("view-workflows"))
                  }, {
                    default: h(() => [...V[23] || (V[23] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !se.value ? (n(), D(is, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  S(ve, {
                    variant: "primary",
                    size: "sm",
                    disabled: v.value,
                    onClick: $
                  }, {
                    default: h(() => [
                      b(d(v.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  S(ve, {
                    variant: "secondary",
                    size: "sm",
                    onClick: V[9] || (V[9] = (ie) => $e.$emit("view-workflows"))
                  }, {
                    default: h(() => [...V[24] || (V[24] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (n(), D(is, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Ke.value,
                items: je.value
              }, {
                actions: h(() => [
                  S(ve, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: h(() => [...V[25] || (V[25] = [
                      b(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  S(ve, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[10] || (V[10] = (ie) => $e.$emit("view-nodes"))
                  }, {
                    default: h(() => [...V[26] || (V[26] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (n(), D(is, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  S(ve, {
                    variant: "primary",
                    size: "sm",
                    onClick: V[11] || (V[11] = (ie) => $e.$emit("view-nodes"))
                  }, {
                    default: h(() => [...V[27] || (V[27] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : R.value ? (n(), i("span", pv, "No issues")) : (n(), D(vs, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      S(uv, {
        show: l.value,
        status: e.status,
        "is-repairing": p.value,
        onClose: V[12] || (V[12] = (ie) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: m,
        onRepair: _
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), hv = /* @__PURE__ */ we(gv, [["__scopeId", "data-v-df52ba90"]]), yv = ["type", "value", "placeholder", "disabled"], wv = /* @__PURE__ */ he({
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
    const a = e, l = o, r = k(null);
    function c(u) {
      const m = u.target.value;
      l("update:modelValue", m);
    }
    return at(() => {
      a.autoFocus && r.value && r.value.focus();
    }), s({
      focus: () => {
        var u;
        return (u = r.value) == null ? void 0 : u.focus();
      },
      blur: () => {
        var u;
        return (u = r.value) == null ? void 0 : u.blur();
      }
    }), (u, m) => (n(), i("input", {
      ref_key: "inputRef",
      ref: r,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Pe(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        m[0] || (m[0] = os((f) => u.$emit("enter"), ["enter"])),
        m[1] || (m[1] = os((f) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: m[2] || (m[2] = (f) => u.$emit("focus")),
      onBlur: m[3] || (m[3] = (f) => u.$emit("blur"))
    }, null, 42, yv));
  }
}), Zo = /* @__PURE__ */ we(wv, [["__scopeId", "data-v-0380d08f"]]), _v = { class: "branch-create-form" }, kv = { class: "form-actions" }, bv = /* @__PURE__ */ he({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, a = k(""), l = A(() => {
      const u = a.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function r() {
      l.value && (o("create", a.value.trim()), a.value = "");
    }
    function c() {
      a.value = "", o("cancel");
    }
    return (u, m) => (n(), i("div", _v, [
      S(Zo, {
        modelValue: a.value,
        "onUpdate:modelValue": m[0] || (m[0] = (f) => a.value = f),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      t("div", kv, [
        S(ve, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: r
        }, {
          default: h(() => [...m[1] || (m[1] = [
            b(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        S(ve, {
          variant: "secondary",
          size: "sm",
          onClick: c
        }, {
          default: h(() => [...m[2] || (m[2] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), $v = /* @__PURE__ */ we(bv, [["__scopeId", "data-v-7c500394"]]), Cv = { class: "branch-list-item__indicator" }, xv = { class: "branch-list-item__name" }, Sv = {
  key: 0,
  class: "branch-list-item__actions"
}, Iv = {
  key: 0,
  class: "branch-list-item__current-label"
}, Ev = /* @__PURE__ */ he({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Pe(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, [
      t("span", Cv, d(e.isCurrent ? "●" : "○"), 1),
      t("span", xv, d(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (n(), i("div", Sv, [
        ot(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", Iv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Tv = /* @__PURE__ */ we(Ev, [["__scopeId", "data-v-c6581a24"]]), VD = qs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const BD = [
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
], WD = {
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
], GD = [
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
function ko() {
  return !1;
}
function Mv() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const s = Math.random() * 16 | 0;
    return (e === "x" ? s : s & 3 | 8).toString(16);
  });
}
function rt() {
  const e = k(!1), s = k(null);
  async function o(q, be) {
    var Pt;
    if (!((Pt = window.app) != null && Pt.api))
      throw new Error("ComfyUI API not available");
    const Ve = await window.app.api.fetchApi(q, be);
    if (!Ve.ok) {
      const ls = await Ve.json().catch(() => ({}));
      throw new Error(ls.error || ls.message || `Request failed: ${Ve.status}`);
    }
    const yt = await Ve.text();
    if (yt)
      return JSON.parse(yt);
  }
  async function a(q = !1) {
    return o(q ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(q, be = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: q, allow_issues: be })
    });
  }
  async function r(q = 10, be = 0) {
    return o(`/v2/comfygit/log?limit=${q}&offset=${be}`);
  }
  async function c(q, be = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(q)}&limit=${be}`);
  }
  async function u(q) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q })
    });
  }
  async function m() {
    return o("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function f() {
    return o("/v2/comfygit/deploy/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function v(q) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q, force: !0 })
    });
  }
  async function p() {
    return o("/v2/comfygit/branches");
  }
  async function _(q) {
    return o(`/v2/comfygit/commit/${q}`);
  }
  async function g(q, be = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: q, force: be })
    });
  }
  async function w(q, be = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, start_point: be })
    });
  }
  async function C(q, be = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: q, force: be })
    });
  }
  async function $(q, be = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(q)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: be })
    });
  }
  async function x() {
    try {
      return await o("/v2/comfygit/environments");
    } catch {
      try {
        const q = await a();
        return {
          environments: [{
            name: q.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + q.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: q.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: q.branch
          }],
          current: q.environment,
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
  async function O() {
    return (await x()).environments;
  }
  async function T(q) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(q)}`);
    } catch {
      return null;
    }
  }
  async function P(q, be) {
    const Ve = { target_env: q };
    return be && (Ve.workspace_path = be), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ve)
    });
  }
  async function R() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function U(q) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function B() {
    return o("/v2/workspace/environments/create_status");
  }
  async function I(q = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${q}`);
  }
  async function N(q) {
    return o(`/v2/workspace/environments/${q}`, {
      method: "DELETE"
    });
  }
  async function se(q = !1) {
    try {
      return o(q ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const be = await a(q), Ve = [];
      return be.workflows.new.forEach((yt) => {
        Ve.push({
          name: yt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: yt
        });
      }), be.workflows.modified.forEach((yt) => {
        Ve.push({
          name: yt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: yt
        });
      }), be.workflows.synced.forEach((yt) => {
        Ve.push({
          name: yt,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: yt
        });
      }), Ve;
    }
  }
  async function te(q) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(q)}/details`);
  }
  async function Z(q) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(q)}/resolve`, {
      method: "POST"
    });
  }
  async function X(q, be, Ve) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(q)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: be, install_models: Ve })
    });
  }
  async function G(q, be, Ve) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(q)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: be, importance: Ve })
    });
  }
  async function Q() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function oe() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function le(q) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(q)}`);
  }
  async function W(q) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function ee(q, be) {
    return o(`/v2/workspace/models/${q}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: be })
    });
  }
  async function ae(q, be) {
    return o(`/v2/workspace/models/${q}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: be })
    });
  }
  async function Ne(q) {
    return o(`/v2/workspace/models/${q}`, {
      method: "DELETE"
    });
  }
  async function Ke(q) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function je() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function $e() {
    return o("/v2/workspace/models/directory");
  }
  async function V(q) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function ie(q) {
    const be = new URLSearchParams({ url: q });
    return o(`/v2/workspace/huggingface/repo-info?${be}`);
  }
  async function F() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function L(q, be = 10) {
    const Ve = new URLSearchParams({ query: q, limit: String(be) });
    return o(`/v2/workspace/huggingface/search?${Ve}`);
  }
  async function ne(q) {
    try {
      const be = q ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(q)}` : "/v2/comfygit/config";
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
  async function Ue(q, be) {
    const Ve = be ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(be)}` : "/v2/comfygit/config";
    return o(Ve, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function Ae(q, be) {
    try {
      const Ve = new URLSearchParams();
      return q && Ve.append("level", q), be && Ve.append("lines", be.toString()), o(`/v2/comfygit/debug/logs?${Ve}`);
    } catch {
      return [];
    }
  }
  async function z(q, be) {
    try {
      const Ve = new URLSearchParams();
      return q && Ve.append("level", q), be && Ve.append("lines", be.toString()), o(`/v2/workspace/debug/logs?${Ve}`);
    } catch {
      return [];
    }
  }
  async function K() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function ce() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function Se(q, be) {
    try {
      const Ve = new URLSearchParams();
      return q && Ve.append("level", q), be && Ve.append("lines", be.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Ve}`);
    } catch {
      return [];
    }
  }
  async function _e() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function ke(q) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: q })
    });
  }
  async function Me() {
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
  async function ye(q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(q)}/track-dev`, {
      method: "POST"
    });
  }
  async function Te(q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(q)}/install`, {
      method: "POST"
    });
  }
  async function me(q, be) {
    var As, Os, No, Uo;
    const Ve = Mv(), yt = ((Os = (As = window.app) == null ? void 0 : As.api) == null ? void 0 : Os.clientId) ?? ((Uo = (No = window.app) == null ? void 0 : No.api) == null ? void 0 : Uo.initialClientId) ?? "comfygit-panel", Pt = {
      id: q.id,
      version: q.version || q.selected_version || "latest",
      selected_version: q.selected_version || "latest",
      mode: q.mode || "remote",
      channel: q.channel || "default"
    };
    return q.install_source && (Pt.install_source = q.install_source), q.install_source === "git" && q.repository && (Pt.repository = q.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Pt,
        ui_id: Ve,
        client_id: yt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", Ve, "for package:", q.id), be != null && be.beforeQueueStart && await be.beforeQueueStart(Ve), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: Ve };
  }
  async function We(q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(q)}/update`, {
      method: "POST"
    });
  }
  async function Le(q) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(q)}`, {
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
  async function H(q, be) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: q, url: be })
    });
  }
  async function Oe(q) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function xe(q, be, Ve) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(q)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: be, push_url: Ve })
    });
  }
  async function Ce(q, be) {
    const Ve = {};
    return be && (Ve["X-Git-Auth-Token"] = be), o(`/v2/comfygit/remotes/${encodeURIComponent(q)}/fetch`, {
      method: "POST",
      headers: Ve
    });
  }
  async function Re(q) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(q)}/status`);
    } catch {
      return null;
    }
  }
  async function Ee(q = "skip", be = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: q,
        remove_extra_nodes: be
      })
    });
  }
  async function Y(q, be) {
    const Ve = be ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview?branch=${encodeURIComponent(be)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/pull-preview`;
    return o(Ve);
  }
  async function de(q, be = {}) {
    const Ve = { "Content-Type": "application/json" };
    return be.authToken && (Ve["X-Git-Auth-Token"] = be.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(q)}/pull`, {
      method: "POST",
      headers: Ve,
      body: JSON.stringify({
        model_strategy: be.modelStrategy || "skip",
        force: be.force || !1,
        resolutions: be.resolutions
      })
    });
  }
  async function pe(q, be) {
    const Ve = be ? `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview?branch=${encodeURIComponent(be)}` : `/v2/comfygit/remotes/${encodeURIComponent(q)}/push-preview`;
    return o(Ve);
  }
  async function He(q, be = {}) {
    const Ve = { "Content-Type": "application/json" };
    return be.authToken && (Ve["X-Git-Auth-Token"] = be.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(q)}/push`, {
      method: "POST",
      headers: Ve,
      body: JSON.stringify({ force: be.force || !1 })
    });
  }
  async function ze(q, be) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(q)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: be })
    });
  }
  async function Fe(q) {
    const be = {
      success: 0,
      failed: []
    };
    for (const Ve of q)
      try {
        await Z(Ve), be.success++;
      } catch (yt) {
        be.failed.push({
          name: Ve,
          error: yt instanceof Error ? yt.message : "Unknown error"
        });
      }
    return be;
  }
  async function et(q) {
    var yt;
    const be = new FormData();
    if (be.append("file", q), !((yt = window.app) != null && yt.api))
      throw new Error("ComfyUI API not available");
    const Ve = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: be
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ve.ok) {
      const Pt = await Ve.json().catch(() => ({}));
      throw new Error(Pt.error || `Preview failed: ${Ve.status}`);
    }
    return Ve.json();
  }
  async function qe(q) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(q)}`
    );
  }
  async function mt(q, be, Ve, yt) {
    var As;
    const Pt = new FormData();
    if (Pt.append("file", q), Pt.append("name", be), Pt.append("model_strategy", Ve), Pt.append("torch_backend", yt), !((As = window.app) != null && As.api))
      throw new Error("ComfyUI API not available");
    const ls = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Pt
    });
    if (!ls.ok) {
      const Os = await ls.json().catch(() => ({}));
      throw new Error(Os.message || Os.error || `Import failed: ${ls.status}`);
    }
    return ls.json();
  }
  async function ct() {
    return o("/v2/workspace/import/status");
  }
  async function dt(q) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: q })
    });
  }
  async function It(q, be, Ve, yt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: q,
        name: be,
        model_strategy: Ve,
        torch_backend: yt
      })
    });
  }
  async function Xt() {
    return o("/v2/setup/status");
  }
  async function Lt() {
    return o("/v2/comfygit/update-check");
  }
  async function re() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function E(q) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function M() {
    return o("/v2/setup/initialize_status");
  }
  async function Ie(q) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function tt() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function ft() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function st(q, be) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: q, save_key: be })
    });
  }
  async function bt() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function St(q) {
    const be = q ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(q)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(be);
  }
  async function Be(q) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function as() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function gs(q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function ro(q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(q)}/stop`, {
      method: "POST"
    });
  }
  async function co(q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(q)}/start`, {
      method: "POST"
    });
  }
  async function uo(q) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(q)}/status`);
  }
  async function Qs(q) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: q })
    });
  }
  async function mo(q = !1) {
    return o(q ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function fo() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function vo() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function po(q) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function go(q) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(q)}`, {
      method: "DELETE"
    });
  }
  async function ua(q) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(q)
    });
  }
  async function da() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function ma(q) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(q)}/info`);
  }
  async function yn(q) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(q)}/instances`);
  }
  async function ue(q, be) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(q)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(be)
    });
  }
  async function J(q, be) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(q)}/instances/${encodeURIComponent(be)}/start`, {
      method: "POST"
    });
  }
  async function Ge(q, be) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(q)}/instances/${encodeURIComponent(be)}/stop`, {
      method: "POST"
    });
  }
  async function Qe(q, be) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(q)}/instances/${encodeURIComponent(be)}`, {
      method: "DELETE"
    });
  }
  async function pt(q) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: q })
    });
  }
  return {
    isLoading: e,
    error: s,
    getStatus: a,
    commit: l,
    getHistory: r,
    getBranchHistory: c,
    exportEnv: u,
    validateExport: m,
    validateDeploy: f,
    exportEnvWithForce: v,
    // Git Operations
    getBranches: p,
    getCommitDetail: _,
    checkout: g,
    createBranch: w,
    switchBranch: C,
    deleteBranch: $,
    // Environment Management
    listEnvironments: x,
    getEnvironments: O,
    getEnvironmentDetails: T,
    switchEnvironment: P,
    getSwitchProgress: R,
    createEnvironment: U,
    getCreateProgress: B,
    getComfyUIReleases: I,
    deleteEnvironment: N,
    // Workflow Management
    getWorkflows: se,
    getWorkflowDetails: te,
    resolveWorkflow: Z,
    installWorkflowDeps: X,
    setModelImportance: G,
    // Model Management
    getEnvironmentModels: Q,
    getWorkspaceModels: oe,
    getModelDetails: le,
    openFileLocation: W,
    addModelSource: ee,
    removeModelSource: ae,
    deleteModel: Ne,
    downloadModel: Ke,
    scanWorkspaceModels: je,
    getModelsDirectory: $e,
    setModelsDirectory: V,
    getHuggingFaceRepoInfo: ie,
    getModelsSubdirectories: F,
    searchHuggingFaceRepos: L,
    // Settings
    getConfig: ne,
    updateConfig: Ue,
    // Debug/Logs
    getEnvironmentLogs: Ae,
    getWorkspaceLogs: z,
    getEnvironmentLogPath: K,
    getWorkspaceLogPath: ce,
    getOrchestratorLogs: Se,
    getOrchestratorLogPath: _e,
    openFile: ke,
    // Node Management
    getNodes: Me,
    trackNodeAsDev: ye,
    installNode: Te,
    queueNodeInstall: me,
    updateNode: We,
    uninstallNode: Le,
    // Git Remotes
    getRemotes: fe,
    addRemote: H,
    removeRemote: Oe,
    updateRemoteUrl: xe,
    fetchRemote: Ce,
    getRemoteSyncStatus: Re,
    // Push/Pull
    getPullPreview: Y,
    pullFromRemote: de,
    getPushPreview: pe,
    pushToRemote: He,
    validateMerge: ze,
    // Environment Sync
    syncEnvironmentManually: Ee,
    // Workflow Repair
    repairWorkflowModels: Fe,
    // Import Operations
    previewTarballImport: et,
    previewGitImport: dt,
    validateEnvironmentName: qe,
    executeImport: mt,
    executeGitImport: It,
    getImportProgress: ct,
    // First-Time Setup
    getSetupStatus: Xt,
    // Manager Update Notice
    getUpdateCheck: Lt,
    updateManager: re,
    initializeWorkspace: E,
    getInitializeProgress: M,
    validatePath: Ie,
    // Deploy Operations
    getDeploySummary: tt,
    getDataCenters: ft,
    testRunPodConnection: st,
    getNetworkVolumes: bt,
    getRunPodGpuTypes: St,
    deployToRunPod: Be,
    getRunPodPods: as,
    terminateRunPodPod: gs,
    stopRunPodPod: ro,
    startRunPodPod: co,
    getDeploymentStatus: uo,
    exportDeployPackage: Qs,
    getStoredRunPodKey: mo,
    clearRunPodKey: fo,
    // Custom Worker Operations
    getCustomWorkers: vo,
    addCustomWorker: po,
    removeCustomWorker: go,
    testWorkerConnection: ua,
    scanForWorkers: da,
    getWorkerSystemInfo: ma,
    getWorkerInstances: yn,
    deployToWorker: ue,
    startWorkerInstance: J,
    stopWorkerInstance: Ge,
    terminateWorkerInstance: Qe,
    // Git Authentication
    testGitAuth: pt
  };
}
const Rv = { class: "base-modal-header" }, Dv = {
  key: 0,
  class: "base-modal-title"
}, Lv = { class: "base-modal-body" }, Nv = {
  key: 0,
  class: "base-modal-loading"
}, Uv = {
  key: 1,
  class: "base-modal-error"
}, Av = {
  key: 0,
  class: "base-modal-footer"
}, Ov = /* @__PURE__ */ he({
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
    const o = e, a = s;
    function l() {
      o.closeOnOverlayClick && a("close");
    }
    function r(c) {
      c.key === "Escape" && o.showCloseButton && a("close");
    }
    return at(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Ys(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (n(), D(Dt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Pe(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = kt(() => {
          }, ["stop"]))
        }, [
          t("div", Rv, [
            ot(c.$slots, "header", {}, () => [
              e.title ? (n(), i("h3", Dv, d(e.title), 1)) : y("", !0)
            ]),
            e.showCloseButton ? (n(), i("button", {
              key: 0,
              class: "base-modal-close",
              onClick: u[0] || (u[0] = (m) => c.$emit("close"))
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
            e.loading ? (n(), i("div", Nv, "Loading...")) : e.error ? (n(), i("div", Uv, d(e.error), 1)) : ot(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (n(), i("div", Av, [
            ot(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), $t = /* @__PURE__ */ we(Ov, [["__scopeId", "data-v-8dab1081"]]), zv = ["type", "disabled"], Fv = {
  key: 0,
  class: "spinner"
}, Vv = /* @__PURE__ */ he({
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
    return (s, o) => (n(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Pe(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", Fv)) : y("", !0),
      ot(s.$slots, "default", {}, void 0)
    ], 10, zv));
  }
}), De = /* @__PURE__ */ we(Vv, [["__scopeId", "data-v-f3452606"]]), Bv = { class: "commit-list" }, Wv = /* @__PURE__ */ he({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (n(), i("div", Bv, [
      ot(s.$slots, "default", {}, void 0)
    ]));
  }
}), Lr = /* @__PURE__ */ we(Wv, [["__scopeId", "data-v-8c5ee761"]]), Gv = { class: "commit-hash" }, jv = /* @__PURE__ */ he({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = A(() => s.hash.slice(0, s.length));
    return (a, l) => (n(), i("span", Gv, d(o.value), 1));
  }
}), Nr = /* @__PURE__ */ we(jv, [["__scopeId", "data-v-7c333cc6"]]), Hv = { class: "commit-message" }, Kv = { class: "commit-date" }, qv = /* @__PURE__ */ he({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, a = s;
    function l() {
      o.clickable && a("click");
    }
    return (r, c) => (n(), i("div", {
      class: Pe(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      S(Nr, { hash: e.hash }, null, 8, ["hash"]),
      t("span", Hv, d(e.message), 1),
      t("span", Kv, d(e.relativeDate), 1),
      r.$slots.actions ? (n(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = kt(() => {
        }, ["stop"]))
      }, [
        ot(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Ur = /* @__PURE__ */ we(qv, [["__scopeId", "data-v-dd7c621b"]]), Yv = { class: "header-info" }, Qv = { class: "branch-name" }, Jv = {
  key: 0,
  class: "current-badge"
}, Xv = { class: "branch-meta" }, Zv = { key: 0 }, ep = {
  key: 0,
  class: "meta-note"
}, tp = {
  key: 0,
  class: "loading"
}, sp = {
  key: 1,
  class: "empty-state"
}, op = /* @__PURE__ */ he({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const s = e, { getBranchHistory: o } = rt(), a = k([]), l = k(!1), r = k(!0);
    return at(async () => {
      try {
        const c = await o(s.branchName, 50);
        a.value = c.commits, l.value = c.has_more;
      } finally {
        r.value = !1;
      }
    }), (c, u) => (n(), D($t, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (m) => c.$emit("close"))
    }, {
      header: h(() => [
        t("div", Yv, [
          u[4] || (u[4] = t("h3", { class: "header-title" }, "BRANCH", -1)),
          t("span", Qv, d(e.branchName), 1),
          e.isCurrent ? (n(), i("span", Jv, "CURRENT")) : y("", !0)
        ]),
        S(De, {
          variant: "ghost",
          size: "sm",
          onClick: u[0] || (u[0] = (m) => c.$emit("close"))
        }, {
          default: h(() => [...u[5] || (u[5] = [
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
      ]),
      body: h(() => [
        t("div", Xv, [
          r.value ? (n(), i("span", Zv, "Loading...")) : (n(), i(j, { key: 1 }, [
            t("span", null, d(a.value.length) + " commits", 1),
            l.value ? (n(), i("span", ep, "(showing first " + d(a.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (n(), i("div", tp, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", sp, " No commits found on this branch ")) : (n(), D(Lr, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (n(!0), i(j, null, ge(a.value, (m) => (n(), D(Ur, {
              key: m.hash,
              hash: m.short_hash || m.hash.slice(0, 7),
              message: m.message,
              "relative-date": m.date_relative || m.relative_date || "",
              clickable: !1
            }, null, 8, ["hash", "message", "relative-date"]))), 128))
          ]),
          _: 1
        }))
      ]),
      footer: h(() => [
        e.isCurrent ? y("", !0) : (n(), D(ve, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: u[1] || (u[1] = (m) => c.$emit("delete", e.branchName))
        }, {
          default: h(() => [...u[6] || (u[6] = [
            b(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        u[8] || (u[8] = t("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? y("", !0) : (n(), D(De, {
          key: 1,
          variant: "primary",
          onClick: u[2] || (u[2] = (m) => c.$emit("switch", e.branchName))
        }, {
          default: h(() => [...u[7] || (u[7] = [
            b(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), np = /* @__PURE__ */ we(op, [["__scopeId", "data-v-2e5437cc"]]), ap = {
  key: 2,
  class: "branch-list"
}, lp = /* @__PURE__ */ he({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: s }) {
    const o = s, a = k(!1), l = k(null);
    function r(v) {
      o("create", v), c();
    }
    function c() {
      a.value = !1;
    }
    function u(v) {
      l.value = v;
    }
    function m(v) {
      l.value = null, o("delete", v);
    }
    function f(v) {
      l.value = null, o("switch", v);
    }
    return (v, p) => (n(), D(Gt, null, {
      header: h(() => [
        S(jt, { title: "BRANCHES" }, {
          actions: h(() => [
            a.value ? y("", !0) : (n(), D(ve, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: p[0] || (p[0] = (_) => a.value = !0)
            }, {
              default: h(() => [...p[2] || (p[2] = [
                b(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: h(() => [
        a.value ? (n(), D($v, {
          key: 0,
          onCreate: r,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (n(), D(vs, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (n(), i("div", ap, [
          (n(!0), i(j, null, ge(e.branches, (_) => (n(), D(Tv, {
            key: _.name,
            "branch-name": _.name,
            "is-current": _.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (g) => u(_)
          }, {
            actions: h(() => [
              _.is_current ? y("", !0) : (n(), D(ve, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: kt((g) => o("switch", _.name), ["stop"])
              }, {
                default: h(() => [...p[3] || (p[3] = [
                  b(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (n(), D(np, {
          key: 3,
          "branch-name": l.value.name,
          "is-current": l.value.is_current,
          onClose: p[1] || (p[1] = (_) => l.value = null),
          onDelete: m,
          onSwitch: f
        }, null, 8, ["branch-name", "is-current"])) : y("", !0)
      ]),
      _: 1
    }));
  }
}), ip = /* @__PURE__ */ we(lp, [["__scopeId", "data-v-eefdcb00"]]), rp = /* @__PURE__ */ he({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    const s = e, o = A(() => `HISTORY (${s.currentRef || "detached"})`);
    return (a, l) => (n(), D(Gt, null, {
      header: h(() => [
        S(jt, { title: o.value }, null, 8, ["title"])
      ]),
      content: h(() => [
        e.commits.length === 0 ? (n(), D(vs, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), D(Lr, { key: 1 }, {
          default: h(() => [
            (n(!0), i(j, null, ge(e.commits, (r) => (n(), D(Ur, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => a.$emit("select", r)
            }, {
              actions: h(() => [
                S(ve, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (c) => a.$emit("checkout", r),
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
}), cp = /* @__PURE__ */ we(rp, [["__scopeId", "data-v-62a5d9da"]]);
async function xn(e, s) {
  var a;
  if (!((a = window.app) != null && a.api))
    throw new Error("ComfyUI API not available");
  const o = await window.app.api.fetchApi(e, s);
  if (!o.ok) {
    const l = await o.json().catch(() => ({}));
    throw new Error(l.error || l.message || `Request failed: ${o.status}`);
  }
  return o.json();
}
function up() {
  async function e() {
    try {
      return await xn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await xn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await xn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await xn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: s,
    restart: o,
    kill: a
  };
}
const dp = {
  key: 0,
  class: "base-title-count"
}, mp = /* @__PURE__ */ he({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (n(), D(rl(`h${e.level}`), {
      class: Pe(["base-title", e.variant])
    }, {
      default: h(() => [
        ot(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", dp, "(" + d(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), en = /* @__PURE__ */ we(mp, [["__scopeId", "data-v-5a01561d"]]), fp = ["value", "disabled"], vp = {
  key: 0,
  value: "",
  disabled: ""
}, pp = ["value"], gp = {
  key: 0,
  class: "base-select-error"
}, hp = /* @__PURE__ */ he({
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
    function s(a) {
      return typeof a == "string" ? a : a.value;
    }
    function o(a) {
      return typeof a == "string" ? a : a.label;
    }
    return (a, l) => (n(), i("div", {
      class: Pe(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Pe(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => a.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (n(), i("option", vp, d(e.placeholder), 1)) : y("", !0),
        (n(!0), i(j, null, ge(e.options, (r) => (n(), i("option", {
          key: s(r),
          value: s(r)
        }, d(o(r)), 9, pp))), 128))
      ], 42, fp),
      e.error ? (n(), i("span", gp, d(e.error), 1)) : y("", !0)
    ], 2));
  }
}), yp = /* @__PURE__ */ we(hp, [["__scopeId", "data-v-4996bfe0"]]), wp = { class: "popover-header" }, _p = { class: "popover-title" }, kp = { class: "popover-content" }, bp = {
  key: 0,
  class: "popover-actions"
}, $p = /* @__PURE__ */ he({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (n(), D(Dt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Jt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = kt(() => {
          }, ["stop"]))
        }, [
          t("div", wp, [
            t("h4", _p, d(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", kp, [
            ot(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (n(), i("div", bp, [
            ot(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), ps = /* @__PURE__ */ we($p, [["__scopeId", "data-v-42815ace"]]), Cp = { class: "detail-section" }, xp = {
  key: 0,
  class: "empty-message"
}, Sp = { class: "model-header" }, Ip = { class: "model-name" }, Ep = { class: "model-details" }, Tp = { class: "model-row" }, Pp = { class: "model-row" }, Mp = { class: "label" }, Rp = {
  key: 0,
  class: "model-row model-row-nodes"
}, Dp = { class: "node-list" }, Lp = ["onClick"], Np = {
  key: 1,
  class: "model-row"
}, Up = { class: "value" }, Ap = {
  key: 2,
  class: "model-row"
}, Op = { class: "value error" }, zp = {
  key: 0,
  class: "model-actions"
}, Fp = { class: "detail-section" }, Vp = {
  key: 0,
  class: "empty-message"
}, Bp = { class: "node-content" }, Wp = { class: "node-main" }, Gp = { class: "node-name" }, jp = { class: "node-badge" }, Hp = {
  key: 0,
  class: "node-version"
}, Kp = ["onClick"], qp = {
  key: 2,
  class: "node-install-queued"
}, Yp = {
  key: 0,
  class: "node-guidance"
}, Qp = /* @__PURE__ */ he({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = rt(), m = k(null), f = k(!1), v = k(null), p = k(!1), _ = k({}), g = k(!1), w = k(/* @__PURE__ */ new Set()), C = k(/* @__PURE__ */ new Set()), $ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function x(G) {
      switch (G) {
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
    function O(G) {
      switch (G) {
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
    function T(G) {
      switch (G) {
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
    function P(G) {
      switch (G) {
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
    function R(G) {
      switch (G) {
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
    function U(G) {
      if (!G.loaded_by || G.loaded_by.length === 0) return [];
      const Q = G.hash || G.filename;
      return w.value.has(Q) ? G.loaded_by : G.loaded_by.slice(0, 3);
    }
    function B(G) {
      return w.value.has(G);
    }
    function I(G) {
      w.value.has(G) ? w.value.delete(G) : w.value.add(G), w.value = new Set(w.value);
    }
    async function N() {
      f.value = !0, v.value = null;
      try {
        m.value = await l(o.workflowName);
      } catch (G) {
        v.value = G instanceof Error ? G.message : "Failed to load workflow details";
      } finally {
        f.value = !1;
      }
    }
    function se(G, Q) {
      _.value[G] = Q, p.value = !0;
    }
    async function te(G) {
      try {
        await c(G);
      } catch (Q) {
        v.value = Q instanceof Error ? Q.message : "Failed to open file location";
      }
    }
    async function Z(G) {
      if (G.package_id)
        try {
          const Q = G.latest_version || "latest";
          await u({
            id: G.package_id,
            version: Q,
            selected_version: Q,
            mode: "remote",
            channel: "default"
          }), C.value.add(G.package_id);
        } catch (Q) {
          v.value = Q instanceof Error ? Q.message : "Failed to queue node install";
        }
    }
    async function X() {
      if (!p.value) {
        a("close");
        return;
      }
      f.value = !0, v.value = null;
      try {
        for (const [G, Q] of Object.entries(_.value))
          await r(o.workflowName, G, Q);
        a("refresh"), a("close");
      } catch (G) {
        v.value = G instanceof Error ? G.message : "Failed to save changes";
      } finally {
        f.value = !1;
      }
    }
    return at(N), (G, Q) => (n(), i(j, null, [
      S($t, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: f.value,
        error: v.value || void 0,
        onClose: Q[4] || (Q[4] = (oe) => a("close"))
      }, {
        body: h(() => [
          m.value ? (n(), i(j, { key: 0 }, [
            t("section", Cp, [
              S(en, { variant: "section" }, {
                default: h(() => [
                  b("MODELS USED (" + d(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (n(), i("div", xp, " No models used in this workflow ")) : y("", !0),
              (n(!0), i(j, null, ge(m.value.models, (oe) => {
                var le;
                return n(), i("div", {
                  key: oe.hash || oe.filename,
                  class: "model-card"
                }, [
                  t("div", Sp, [
                    Q[6] || (Q[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", Ip, d(oe.filename), 1)
                  ]),
                  t("div", Ep, [
                    t("div", Tp, [
                      Q[7] || (Q[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Pe(["value", x(oe.status)])
                      }, d(O(oe.status)), 3)
                    ]),
                    t("div", Pp, [
                      t("span", Mp, [
                        Q[8] || (Q[8] = b(" Importance: ", -1)),
                        S(Dr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: Q[0] || (Q[0] = (W) => g.value = !0)
                        })
                      ]),
                      S(yp, {
                        "model-value": _.value[oe.filename] || oe.importance,
                        options: $,
                        "onUpdate:modelValue": (W) => se(oe.filename, W)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    oe.loaded_by && oe.loaded_by.length > 0 ? (n(), i("div", Rp, [
                      Q[9] || (Q[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", Dp, [
                        (n(!0), i(j, null, ge(U(oe), (W, ee) => (n(), i("div", {
                          key: `${W.node_id}-${ee}`,
                          class: "node-reference"
                        }, d(W.node_type) + " (Node #" + d(W.node_id) + ") ", 1))), 128)),
                        oe.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (W) => I(oe.hash || oe.filename)
                        }, d(B(oe.hash || oe.filename) ? "▼ Show less" : `▶ View all (${oe.loaded_by.length})`), 9, Lp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    oe.size_mb ? (n(), i("div", Np, [
                      Q[10] || (Q[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", Up, d(oe.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    oe.has_category_mismatch ? (n(), i("div", Ap, [
                      Q[13] || (Q[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", Op, [
                        Q[11] || (Q[11] = b(" In ", -1)),
                        t("code", null, d(oe.actual_category) + "/", 1),
                        Q[12] || (Q[12] = b(" but loader needs ", -1)),
                        t("code", null, d((le = oe.expected_categories) == null ? void 0 : le[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  oe.status !== "available" ? (n(), i("div", zp, [
                    oe.status === "downloadable" ? (n(), D(De, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: Q[1] || (Q[1] = (W) => a("resolve"))
                    }, {
                      default: h(() => [...Q[14] || (Q[14] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    })) : oe.status === "category_mismatch" && oe.file_path ? (n(), D(De, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => te(oe.file_path)
                    }, {
                      default: h(() => [...Q[15] || (Q[15] = [
                        b(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : oe.status !== "path_mismatch" ? (n(), D(De, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: Q[2] || (Q[2] = (W) => a("resolve"))
                    }, {
                      default: h(() => [...Q[16] || (Q[16] = [
                        b(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            t("section", Fp, [
              S(en, { variant: "section" }, {
                default: h(() => [
                  b("NODES USED (" + d(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (n(), i("div", Vp, " No custom nodes used in this workflow ")) : y("", !0),
              (n(!0), i(j, null, ge(m.value.nodes, (oe, le) => (n(), i("div", {
                key: `${oe.name}-${oe.status}-${le}`,
                class: "node-item"
              }, [
                t("span", {
                  class: Pe(["node-status", T(oe.status)])
                }, d(P(oe.status)), 3),
                t("div", Bp, [
                  t("div", Wp, [
                    t("span", Gp, d(oe.name), 1),
                    t("span", jp, d(R(oe.status)), 1),
                    oe.version ? (n(), i("span", Hp, "v" + d(oe.version), 1)) : y("", !0),
                    oe.status === "uninstallable" && oe.package_id && !C.value.has(oe.package_id) ? (n(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (W) => Z(oe)
                    }, " Install ", 8, Kp)) : oe.status === "uninstallable" && oe.package_id && C.value.has(oe.package_id) ? (n(), i("span", qp, " Queued ")) : y("", !0)
                  ]),
                  oe.guidance ? (n(), i("div", Yp, d(oe.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          S(De, {
            variant: "secondary",
            onClick: Q[3] || (Q[3] = (oe) => a("close"))
          }, {
            default: h(() => [...Q[17] || (Q[17] = [
              b(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (n(), D(De, {
            key: 0,
            variant: "primary",
            onClick: X
          }, {
            default: h(() => [...Q[18] || (Q[18] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      S(ps, {
        show: g.value,
        title: "Model Importance Levels",
        onClose: Q[5] || (Q[5] = (oe) => g.value = !1)
      }, {
        content: h(() => [...Q[19] || (Q[19] = [
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
}), Jp = /* @__PURE__ */ we(Qp, [["__scopeId", "data-v-543076d9"]]), lt = qs({
  items: [],
  status: "idle"
});
let ks = null;
function Ar() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function xa(e) {
  return lt.items.find((s) => s.id === e);
}
async function bo() {
  if (lt.status === "downloading") return;
  const e = lt.items.find((s) => s.status === "queued");
  if (!e) {
    lt.status = "idle";
    return;
  }
  lt.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Xp(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    lt.status = "idle", bo();
  }
}
async function Xp(e) {
  return new Promise((s, o) => {
    ks && (ks.close(), ks = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    ks = l;
    let r = Date.now(), c = 0, u = Date.now(), m = !1;
    const f = 2e3, v = window.setInterval(() => {
      m || Date.now() - u > f && (e.speed = 0, e.eta = 0);
    }, 250), p = () => {
      window.clearInterval(v);
    };
    l.onmessage = (_) => {
      try {
        const g = JSON.parse(_.data);
        switch (g.type) {
          case "progress":
            e.downloaded = g.downloaded || 0, e.size = g.total || e.size, u = Date.now();
            const w = u, C = (w - r) / 1e3, $ = e.downloaded - c;
            if ($ > 0 && C > 0)
              if (e.speed = $ / C, r = w, c = e.downloaded, e.speed > 0 && e.size > 0) {
                const x = e.size - e.downloaded;
                e.eta = x / e.speed;
              } else
                e.eta = 0;
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            m = !0, p(), l.close(), ks = null, s();
            break;
          case "error":
            m = !0, p(), l.close(), ks = null, o(new Error(g.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      p(), l.close(), ks = null, m || o(new Error("Connection lost"));
    };
  });
}
async function Zp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (lt.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const a = {
        id: Ar(),
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
      lt.items.push(a);
    }
    console.log(`[ComfyGit] Loaded ${s.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function Do() {
  function e($) {
    for (const x of $) {
      if (lt.items.some(
        (P) => P.url === x.url && P.targetPath === x.targetPath && ["queued", "downloading", "paused", "completed"].includes(P.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${x.filename}`);
        continue;
      }
      const T = {
        id: Ar(),
        workflow: x.workflow,
        filename: x.filename,
        url: x.url,
        targetPath: x.targetPath,
        size: x.size || 0,
        type: x.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      lt.items.push(T);
    }
    lt.status === "idle" && bo();
  }
  async function s($) {
    const x = xa($);
    if (x) {
      if (x.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(x.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        ks && (ks.close(), ks = null), x.status = "failed", x.error = "Cancelled by user", lt.status = "idle", bo();
      } else if (x.status === "queued") {
        const O = lt.items.findIndex((T) => T.id === $);
        O >= 0 && lt.items.splice(O, 1);
      }
    }
  }
  function o($) {
    const x = xa($);
    !x || x.status !== "failed" || (x.status = "queued", x.error = void 0, x.progress = 0, x.downloaded = 0, lt.status === "idle" && bo());
  }
  function a($) {
    const x = xa($);
    !x || x.status !== "paused" || (x.status = "queued", lt.status === "idle" && bo());
  }
  function l() {
    const $ = lt.items.filter((x) => x.status === "paused");
    for (const x of $)
      x.status = "queued";
    lt.status === "idle" && bo();
  }
  function r($) {
    const x = lt.items.findIndex((O) => O.id === $);
    x >= 0 && ["completed", "failed", "paused"].includes(lt.items[x].status) && lt.items.splice(x, 1);
  }
  function c() {
    lt.items = lt.items.filter(($) => $.status !== "completed");
  }
  function u() {
    lt.items = lt.items.filter(($) => $.status !== "failed");
  }
  const m = A(
    () => lt.items.find(($) => $.status === "downloading")
  ), f = A(
    () => lt.items.filter(($) => $.status === "queued")
  ), v = A(
    () => lt.items.filter(($) => $.status === "completed")
  ), p = A(
    () => lt.items.filter(($) => $.status === "failed")
  ), _ = A(
    () => lt.items.filter(($) => $.status === "paused")
  ), g = A(() => lt.items.length > 0), w = A(
    () => lt.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), C = A(
    () => lt.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: An(lt),
    // Computed
    currentDownload: m,
    queuedItems: f,
    completedItems: v,
    failedItems: p,
    pausedItems: _,
    hasItems: g,
    activeCount: w,
    hasPaused: C,
    // Actions
    addToQueue: e,
    cancelDownload: s,
    retryDownload: o,
    resumeDownload: a,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: c,
    clearFailed: u,
    loadPendingDownloads: Zp
  };
}
function Or() {
  const e = k(null), s = k(null), o = k([]), a = k([]), l = k(!1), r = k(null);
  async function c(O, T) {
    var R;
    if (!((R = window.app) != null && R.api))
      throw new Error("ComfyUI API not available");
    const P = await window.app.api.fetchApi(O, T);
    if (!P.ok) {
      const U = await P.json().catch(() => ({})), B = U.error || U.message || `Request failed: ${P.status}`;
      throw new Error(B);
    }
    return P.json();
  }
  async function u(O) {
    l.value = !0, r.value = null;
    try {
      let T;
      return ko() || (T = await c(
        `/v2/comfygit/workflow/${O}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), T.nodes.version_gated = T.nodes.version_gated || [], T.nodes.uninstallable = T.nodes.uninstallable || [], T.node_guidance = T.node_guidance || {}, T.package_aliases = T.package_aliases || {}, e.value = T, T;
    } catch (T) {
      const P = T instanceof Error ? T.message : "Unknown error occurred";
      throw r.value = P, T;
    } finally {
      l.value = !1;
    }
  }
  async function m(O, T, P, R) {
    l.value = !0, r.value = null;
    try {
      let U;
      if (!ko()) {
        const B = Object.fromEntries(T), I = Object.fromEntries(P), N = R ? Array.from(R) : [];
        U = await c(
          `/v2/comfygit/workflow/${O}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: B,
              model_choices: I,
              skipped_packages: N
            })
          }
        );
      }
      return s.value = U, U;
    } catch (U) {
      const B = U instanceof Error ? U.message : "Unknown error occurred";
      throw r.value = B, U;
    } finally {
      l.value = !1;
    }
  }
  async function f(O, T = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return ko() || (P = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: O, limit: T })
        }
      )), o.value = P.results, P.results;
    } catch (P) {
      const R = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = R, P;
    } finally {
      l.value = !1;
    }
  }
  async function v(O, T = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return ko() || (P = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: O, limit: T })
        }
      )), a.value = P.results, P.results;
    } catch (P) {
      const R = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = R, P;
    } finally {
      l.value = !1;
    }
  }
  const p = qs({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function _() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.nodesInstalled = [], p.installError = void 0, p.needsRestart = void 0, p.error = void 0, p.nodeInstallProgress = void 0;
  }
  async function g(O) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return ko(), await w(O);
    } catch (T) {
      const P = T instanceof Error ? T.message : "Failed to install nodes";
      throw p.installError = P, T;
    }
  }
  async function w(O) {
    var P;
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
      const R = new Map(((P = T.failed) == null ? void 0 : P.map((U) => [U.node_id, U.error])) || []);
      for (let U = 0; U < p.nodesToInstall.length; U++) {
        const B = p.nodesToInstall[U], I = R.get(B);
        p.nodeInstallProgress.completedNodes.push({
          node_id: B,
          success: !I,
          error: I
        });
      }
    }
    return p.nodesInstalled = T.nodes_installed, p.needsRestart = T.nodes_installed.length > 0, T.failed && T.failed.length > 0 && (p.installError = `${T.failed.length} package(s) failed to install`), T;
  }
  async function C(O, T, P) {
    _(), p.phase = "resolving", r.value = null;
    const R = Object.fromEntries(T), U = Object.fromEntries(P);
    try {
      const B = await fetch(`/v2/comfygit/workflow/${O}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: R,
          model_choices: U
        })
      });
      if (!B.ok)
        throw new Error(`Request failed: ${B.status}`);
      if (!B.body)
        throw new Error("No response body");
      const I = B.body.getReader(), N = new TextDecoder();
      let se = "";
      for (; ; ) {
        const { done: te, value: Z } = await I.read();
        if (te) break;
        se += N.decode(Z, { stream: !0 });
        const X = se.split(`

`);
        se = X.pop() || "";
        for (const G of X) {
          if (!G.trim()) continue;
          const Q = G.split(`
`);
          let oe = "", le = "";
          for (const W of Q)
            W.startsWith("event: ") ? oe = W.slice(7) : W.startsWith("data: ") && (le = W.slice(6));
          if (le)
            try {
              const W = JSON.parse(le);
              $(oe, W);
            } catch (W) {
              console.warn("Failed to parse SSE event:", W);
            }
        }
      }
    } catch (B) {
      const I = B instanceof Error ? B.message : "Unknown error occurred";
      throw r.value = I, p.error = I, p.phase = "error", B;
    }
  }
  function $(O, T) {
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
  function x(O, T) {
    const { addToQueue: P } = Do(), R = T.filter((U) => U.url && U.target_path).map((U) => ({
      workflow: O,
      filename: U.filename,
      url: U.url,
      targetPath: U.target_path,
      size: U.size || 0,
      type: "model"
    }));
    return R.length > 0 && P(R), R.length;
  }
  return {
    // State
    result: e,
    appliedResult: s,
    searchResults: o,
    modelSearchResults: a,
    isLoading: l,
    error: r,
    progress: p,
    // Methods
    analyzeWorkflow: u,
    applyResolution: m,
    applyResolutionWithProgress: C,
    installNodes: g,
    searchNodes: f,
    searchModels: v,
    resetProgress: _,
    queueModelDownloads: x
  };
}
const eg = { class: "resolution-stepper" }, tg = { class: "stepper-header" }, sg = ["onClick"], og = {
  key: 0,
  class: "step-icon"
}, ng = {
  key: 1,
  class: "step-number"
}, ag = { class: "step-label" }, lg = {
  key: 0,
  class: "step-connector"
}, ig = { class: "stepper-content" }, rg = /* @__PURE__ */ he({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(e, { emit: s }) {
    const o = e, a = s;
    function l(f) {
      var v;
      if ((v = o.stepStats) != null && v[f]) {
        const p = o.stepStats[f];
        return p.total > 0 && p.resolved === p.total;
      }
      return o.completedSteps.includes(f);
    }
    function r(f) {
      var v;
      if ((v = o.stepStats) != null && v[f]) {
        const p = o.stepStats[f];
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
    function m(f) {
      a("step-change", f);
    }
    return (f, v) => (n(), i("div", eg, [
      t("div", tg, [
        (n(!0), i(j, null, ge(e.steps, (p, _) => (n(), i("div", {
          key: p.id,
          class: Pe(["step", {
            active: e.currentStep === p.id,
            completed: l(p.id),
            "in-progress": r(p.id),
            disabled: u(p.id)
          }]),
          onClick: (g) => m(p.id)
        }, [
          t("div", {
            class: Pe(["step-indicator", c(p.id)])
          }, [
            l(p.id) ? (n(), i("span", og, "✓")) : (n(), i("span", ng, d(_ + 1), 1))
          ], 2),
          t("div", ag, d(p.label), 1),
          _ < e.steps.length - 1 ? (n(), i("div", lg)) : y("", !0)
        ], 10, sg))), 128))
      ]),
      t("div", ig, [
        ot(f.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), cg = /* @__PURE__ */ we(rg, [["__scopeId", "data-v-2a7b3af8"]]), ug = /* @__PURE__ */ he({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = A(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), a = A(() => `confidence-${o.value}`), l = A(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, c) => (n(), i("span", {
      class: Pe(["confidence-badge", a.value, e.size])
    }, d(l.value), 3));
  }
}), Hn = /* @__PURE__ */ we(ug, [["__scopeId", "data-v-17ec4b80"]]), dg = { class: "node-info" }, mg = { class: "node-info-text" }, fg = { class: "item-body" }, vg = {
  key: 0,
  class: "resolved-state"
}, pg = {
  key: 1,
  class: "multiple-options"
}, gg = {
  key: 0,
  class: "installed-packs-section"
}, hg = { class: "installed-packs-list" }, yg = ["onClick"], wg = { class: "installed-pack-name" }, _g = { class: "installed-pack-source" }, kg = { class: "options-list" }, bg = ["onClick"], $g = ["name", "value", "checked", "onChange"], Cg = { class: "option-content" }, xg = { class: "option-header" }, Sg = { class: "option-package-id" }, Ig = {
  key: 0,
  class: "option-title"
}, Eg = { class: "option-meta" }, Tg = {
  key: 0,
  class: "installed-badge"
}, Pg = { class: "action-buttons" }, Mg = {
  key: 2,
  class: "unresolved"
}, Rg = {
  key: 0,
  class: "installed-packs-section"
}, Dg = { class: "installed-packs-list" }, Lg = ["onClick"], Ng = { class: "installed-pack-name" }, Ug = { class: "installed-pack-source" }, Ag = {
  key: 1,
  class: "searching-state"
}, Og = { class: "options-list" }, zg = ["onClick"], Fg = ["name", "value"], Vg = { class: "option-content" }, Bg = { class: "option-header" }, Wg = { class: "option-package-id" }, Gg = {
  key: 0,
  class: "option-description"
}, jg = { class: "option-meta" }, Hg = {
  key: 0,
  class: "installed-badge"
}, Kg = {
  key: 3,
  class: "unresolved-message"
}, qg = { class: "action-buttons" }, Yg = /* @__PURE__ */ he({
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
  setup(e, { emit: s }) {
    const o = e, a = s;
    function l(v, p = 80) {
      return v.length <= p ? v : v.slice(0, p - 3) + "...";
    }
    const r = A(() => !!o.choice);
    A(() => {
      var v;
      return (v = o.choice) == null ? void 0 : v.action;
    }), A(() => {
      var v;
      return (v = o.choice) == null ? void 0 : v.package_id;
    });
    const c = A(() => o.installedNodePacks || []), u = A(() => {
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
    function m(v) {
      a("option-selected", v);
    }
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
    return (v, p) => (n(), i("div", {
      class: Pe(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      t("div", dg, [
        t("span", mg, [
          p[7] || (p[7] = b("Node type: ", -1)),
          t("code", null, d(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Pe(["status-badge", u.value])
        }, d(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", fg, [
        r.value ? (n(), i("div", vg, [
          S(De, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (_) => a("clear-choice"))
          }, {
            default: h(() => [...p[8] || (p[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", pg, [
          c.value.length > 0 ? (n(), i("div", gg, [
            p[9] || (p[9] = t("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            t("div", hg, [
              (n(!0), i(j, null, ge(c.value, (_) => (n(), i("button", {
                key: _.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => a("installed-pack-selected", _.package_id)
              }, [
                t("span", wg, d(_.package_id), 1),
                t("span", _g, d(f(_.source)), 1)
              ], 8, yg))), 128))
            ])
          ])) : y("", !0),
          p[13] || (p[13] = t("p", { class: "options-prompt" }, "Potential matches:", -1)),
          t("div", kg, [
            (n(!0), i(j, null, ge(e.options, (_, g) => (n(), i("label", {
              key: _.package_id,
              class: Pe(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => m(g)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => m(g)
              }, null, 40, $g),
              t("div", Cg, [
                t("div", xg, [
                  t("span", Sg, d(_.package_id), 1),
                  S(Hn, {
                    confidence: _.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                _.title && _.title !== _.package_id ? (n(), i("div", Ig, d(_.title), 1)) : y("", !0),
                t("div", Eg, [
                  _.is_installed ? (n(), i("span", Tg, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, bg))), 128))
          ]),
          t("div", Pg, [
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (_) => a("search"))
            }, {
              default: h(() => [...p[10] || (p[10] = [
                b(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (_) => a("manual-entry"))
            }, {
              default: h(() => [...p[11] || (p[11] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (_) => a("mark-optional"))
            }, {
              default: h(() => [...p[12] || (p[12] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", Mg, [
          c.value.length > 0 ? (n(), i("div", Rg, [
            p[14] || (p[14] = t("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            t("div", Dg, [
              (n(!0), i(j, null, ge(c.value, (_) => (n(), i("button", {
                key: _.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => a("installed-pack-selected", _.package_id)
              }, [
                t("span", Ng, d(_.package_id), 1),
                t("span", Ug, d(f(_.source)), 1)
              ], 8, Lg))), 128))
            ])
          ])) : y("", !0),
          e.isSearching ? (n(), i("div", Ag, [...p[15] || (p[15] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (n(), i(j, { key: 2 }, [
            p[16] || (p[16] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", Og, [
              (n(!0), i(j, null, ge(e.searchResults.slice(0, 5), (_, g) => (n(), i("label", {
                key: _.package_id,
                class: "option-card",
                onClick: (w) => a("search-result-selected", _)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, Fg),
                t("div", Vg, [
                  t("div", Bg, [
                    t("span", Wg, d(_.package_id), 1),
                    S(Hn, {
                      confidence: _.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  _.description ? (n(), i("div", Gg, d(l(_.description)), 1)) : y("", !0),
                  t("div", jg, [
                    _.is_installed ? (n(), i("span", Hg, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, zg))), 128))
            ])
          ], 64)) : (n(), i("div", Kg, [...p[17] || (p[17] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", qg, [
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[4] || (p[4] = (_) => a("search"))
            }, {
              default: h(() => {
                var _;
                return [
                  b(d((_ = e.searchResults) != null && _.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[5] || (p[5] = (_) => a("manual-entry"))
            }, {
              default: h(() => [...p[18] || (p[18] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[6] || (p[6] = (_) => a("mark-optional"))
            }, {
              default: h(() => [...p[19] || (p[19] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Qg = /* @__PURE__ */ we(Yg, [["__scopeId", "data-v-fb0bbf03"]]), Jg = { class: "item-navigator" }, Xg = { class: "nav-item-info" }, Zg = ["title"], eh = { class: "nav-controls" }, th = { class: "nav-arrows" }, sh = ["disabled"], oh = ["disabled"], nh = { class: "nav-position" }, ah = /* @__PURE__ */ he({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", Jg, [
      t("div", Xg, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, d(e.itemName), 9, Zg)
      ]),
      t("div", eh, [
        t("div", th, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, sh),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, oh)
        ]),
        t("span", nh, d(e.currentIndex + 1) + "/" + d(e.totalItems), 1)
      ])
    ]));
  }
}), zr = /* @__PURE__ */ we(ah, [["__scopeId", "data-v-74af7920"]]), lh = ["type", "value", "placeholder", "disabled"], ih = {
  key: 0,
  class: "base-input-error"
}, rh = /* @__PURE__ */ he({
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
    return (s, o) => (n(), i("div", {
      class: Pe(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Pe(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          o[1] || (o[1] = os((a) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = os((a) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, lh),
      e.error ? (n(), i("span", ih, d(e.error), 1)) : y("", !0)
    ], 2));
  }
}), zt = /* @__PURE__ */ we(rh, [["__scopeId", "data-v-9ba02cdc"]]), ch = { class: "node-resolution-step" }, uh = {
  key: 0,
  class: "auto-resolved-section"
}, dh = { class: "section-header" }, mh = { class: "stat-badge" }, fh = { class: "resolved-packages-list" }, vh = { class: "package-info" }, ph = { class: "package-id" }, gh = { class: "node-count" }, hh = { class: "package-actions" }, yh = {
  key: 0,
  class: "status-badge install"
}, wh = {
  key: 1,
  class: "status-badge skip"
}, _h = ["onClick"], kh = {
  key: 1,
  class: "section-divider"
}, bh = { class: "step-header" }, $h = { class: "stat-badge" }, Ch = {
  key: 1,
  class: "step-body"
}, xh = {
  key: 3,
  class: "empty-state"
}, Sh = { class: "node-modal-body" }, Ih = { class: "node-search-results-container" }, Eh = {
  key: 0,
  class: "node-search-results"
}, Th = ["onClick"], Ph = { class: "node-result-header" }, Mh = { class: "node-result-package-id" }, Rh = {
  key: 0,
  class: "node-result-description"
}, Dh = {
  key: 1,
  class: "node-empty-state"
}, Lh = {
  key: 2,
  class: "node-empty-state"
}, Nh = {
  key: 3,
  class: "node-empty-state"
}, Uh = { class: "node-manual-entry-modal" }, Ah = { class: "node-modal-body" }, Oh = { class: "node-modal-actions" }, zh = /* @__PURE__ */ he({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {},
    installedNodePacks: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, a = s, { searchNodes: l } = Or(), r = k(0), c = k(!1), u = k(!1), m = k(""), f = k(""), v = k([]), p = k(!1), _ = k(/* @__PURE__ */ new Map()), g = k(/* @__PURE__ */ new Set()), w = k(!1);
    function C() {
      w.value && ee(), w.value = !1;
    }
    const $ = A(() => o.nodes[r.value]), x = A(() => o.nodes.filter((F) => o.nodeChoices.has(F.node_type)).length), O = A(() => $.value ? _.value.get($.value.node_type) || [] : []), T = A(() => $.value ? g.value.has($.value.node_type) : !1);
    Ct($, async (F) => {
      var L;
      F && ((L = F.options) != null && L.length || _.value.has(F.node_type) || g.value.has(F.node_type) || o.nodeChoices.has(F.node_type) || await P(F.node_type));
    }, { immediate: !0 });
    async function P(F) {
      g.value.add(F);
      try {
        const L = await l(F, 5);
        _.value.set(F, L);
      } catch {
        _.value.set(F, []);
      } finally {
        g.value.delete(F);
      }
    }
    const R = A(() => o.autoResolvedPackages.filter((F) => !o.skippedPackages.has(F.package_id)).length);
    function U(F) {
      return o.skippedPackages.has(F);
    }
    function B(F) {
      a("package-skip", F);
    }
    const I = A(() => {
      var L;
      if (!$.value) return "not-found";
      const F = o.nodeChoices.get($.value.node_type);
      if (F)
        switch (F.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (L = $.value.options) != null && L.length ? "ambiguous" : "not-found";
    }), N = A(() => {
      var L;
      if (!$.value) return;
      const F = o.nodeChoices.get($.value.node_type);
      if (F)
        switch (F.action) {
          case "install":
            return F.package_id ? `→ ${F.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (L = $.value.options) != null && L.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function se(F) {
      F >= 0 && F < o.nodes.length && (r.value = F);
    }
    function te() {
      var F;
      for (let L = r.value + 1; L < o.nodes.length; L++) {
        const ne = o.nodes[L];
        if (!((F = o.nodeChoices) != null && F.has(ne.node_type))) {
          se(L);
          return;
        }
      }
    }
    function Z() {
      $.value && (a("mark-optional", $.value.node_type), Et(() => te()));
    }
    function X() {
      $.value && (a("skip", $.value.node_type), Et(() => te()));
    }
    function G(F) {
      $.value && (a("option-selected", $.value.node_type, F), Et(() => te()));
    }
    function Q() {
      $.value && a("clear-choice", $.value.node_type);
    }
    function oe() {
      $.value && (m.value = $.value.node_type, v.value = O.value, c.value = !0, je(m.value));
    }
    function le() {
      f.value = "", u.value = !0;
    }
    function W(F) {
      $.value && (a("manual-entry", $.value.node_type, F), Et(() => te()));
    }
    function ee() {
      c.value = !1, m.value = "", v.value = [];
    }
    function ae() {
      u.value = !1, f.value = "";
    }
    let Ne = null;
    function Ke() {
      Ne && clearTimeout(Ne), Ne = setTimeout(() => {
        je(m.value);
      }, 300);
    }
    async function je(F) {
      if (!F.trim()) {
        v.value = [];
        return;
      }
      p.value = !0;
      try {
        v.value = await l(F, 10);
      } catch {
        v.value = [];
      } finally {
        p.value = !1;
      }
    }
    function $e(F) {
      $.value && (a("manual-entry", $.value.node_type, F.package_id), ee(), Et(() => te()));
    }
    function V(F) {
      $.value && (a("manual-entry", $.value.node_type, F.package_id), Et(() => te()));
    }
    function ie() {
      !$.value || !f.value.trim() || (a("manual-entry", $.value.node_type, f.value.trim()), ae(), Et(() => te()));
    }
    return (F, L) => {
      var ne, Ue;
      return n(), i("div", ch, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", uh, [
          t("div", dh, [
            L[6] || (L[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", mh, d(R.value) + "/" + d(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", fh, [
            (n(!0), i(j, null, ge(e.autoResolvedPackages, (Ae) => (n(), i("div", {
              key: Ae.package_id,
              class: "resolved-package-item"
            }, [
              t("div", vh, [
                t("code", ph, d(Ae.package_id), 1),
                t("span", gh, d(Ae.node_types_count) + " node type" + d(Ae.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", hh, [
                U(Ae.package_id) ? (n(), i("span", wh, " SKIPPED ")) : (n(), i("span", yh, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (z) => B(Ae.package_id)
                }, d(U(Ae.package_id) ? "Include" : "Skip"), 9, _h)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", kh)) : y("", !0),
        e.nodes.length > 0 ? (n(), i(j, { key: 2 }, [
          t("div", bh, [
            L[7] || (L[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", $h, d(x.value) + "/" + d(e.nodes.length) + " resolved", 1)
          ]),
          $.value ? (n(), D(zr, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: L[0] || (L[0] = (Ae) => se(r.value - 1)),
            onNext: L[1] || (L[1] = (Ae) => se(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          $.value ? (n(), i("div", Ch, [
            S(Qg, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((ne = $.value.options) != null && ne.length),
              options: $.value.options,
              choice: (Ue = e.nodeChoices) == null ? void 0 : Ue.get($.value.node_type),
              status: I.value,
              "status-label": N.value,
              "search-results": O.value,
              "is-searching": T.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: Z,
              onSkip: X,
              onManualEntry: le,
              onSearch: oe,
              onOptionSelected: G,
              onClearChoice: Q,
              onSearchResultSelected: V,
              onInstalledPackSelected: W
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", xh, [...L[8] || (L[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (n(), D(Dt, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: L[4] || (L[4] = kt((Ae) => w.value = !0, ["self"])),
            onMouseup: kt(C, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: L[3] || (L[3] = (Ae) => w.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                L[9] || (L[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ee
                }, "✕")
              ]),
              t("div", Sh, [
                S(zt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": L[2] || (L[2] = (Ae) => m.value = Ae),
                  placeholder: "Search by node type, package name...",
                  onInput: Ke
                }, null, 8, ["modelValue"]),
                t("div", Ih, [
                  v.value.length > 0 ? (n(), i("div", Eh, [
                    (n(!0), i(j, null, ge(v.value, (Ae) => (n(), i("div", {
                      key: Ae.package_id,
                      class: "node-search-result-item",
                      onClick: (z) => $e(Ae)
                    }, [
                      t("div", Ph, [
                        t("code", Mh, d(Ae.package_id), 1),
                        Ae.match_confidence ? (n(), D(Hn, {
                          key: 0,
                          confidence: Ae.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      Ae.description ? (n(), i("div", Rh, d(Ae.description), 1)) : y("", !0)
                    ], 8, Th))), 128))
                  ])) : p.value ? (n(), i("div", Dh, "Searching...")) : m.value ? (n(), i("div", Lh, 'No packages found matching "' + d(m.value) + '"', 1)) : (n(), i("div", Nh, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (n(), D(Dt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: kt(ae, ["self"])
          }, [
            t("div", Uh, [
              t("div", { class: "node-modal-header" }, [
                L[10] || (L[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ae
                }, "✕")
              ]),
              t("div", Ah, [
                S(zt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": L[5] || (L[5] = (Ae) => f.value = Ae),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", Oh, [
                  S(De, {
                    variant: "secondary",
                    onClick: ae
                  }, {
                    default: h(() => [...L[11] || (L[11] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  S(De, {
                    variant: "primary",
                    disabled: !f.value.trim(),
                    onClick: ie
                  }, {
                    default: h(() => [...L[12] || (L[12] = [
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
}), Fh = /* @__PURE__ */ we(zh, [["__scopeId", "data-v-94c6a438"]]), Vh = { class: "node-info" }, Bh = { class: "node-info-text" }, Wh = { class: "item-body" }, Gh = {
  key: 0,
  class: "resolved-state"
}, jh = {
  key: 1,
  class: "multiple-options"
}, Hh = { class: "options-list" }, Kh = ["onClick"], qh = ["name", "value", "checked", "onChange"], Yh = { class: "option-content" }, Qh = { class: "option-header" }, Jh = { class: "option-filename" }, Xh = { class: "option-meta" }, Zh = { class: "option-size" }, ey = { class: "option-category" }, ty = { class: "option-path" }, sy = { class: "action-buttons" }, oy = {
  key: 2,
  class: "unresolved"
}, ny = { class: "action-buttons" }, ay = /* @__PURE__ */ he({
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
    const o = e, a = s, l = A(() => !!o.choice);
    A(() => {
      var m;
      return (m = o.choice) == null ? void 0 : m.action;
    }), A(() => {
      var m, f;
      return ((f = (m = o.choice) == null ? void 0 : m.selected_model) == null ? void 0 : f.filename) || "selected";
    });
    const r = A(() => {
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
    function c(m) {
      a("option-selected", m);
    }
    function u(m) {
      if (!m) return "Unknown";
      const f = m / (1024 * 1024 * 1024);
      return f >= 1 ? `${f.toFixed(2)} GB` : `${(m / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (m, f) => (n(), i("div", {
      class: Pe(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", Vh, [
        t("span", Bh, [
          f[7] || (f[7] = b("Used by: ", -1)),
          t("code", null, d(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Pe(["status-badge", r.value])
        }, d(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Wh, [
        l.value ? (n(), i("div", Gh, [
          S(De, {
            variant: "ghost",
            size: "sm",
            onClick: f[0] || (f[0] = (v) => a("clear-choice"))
          }, {
            default: h(() => [...f[8] || (f[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", jh, [
          f[12] || (f[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", Hh, [
            (n(!0), i(j, null, ge(e.options, (v, p) => (n(), i("label", {
              key: v.model.hash,
              class: Pe(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (_) => c(p)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (_) => c(p)
              }, null, 40, qh),
              t("div", Yh, [
                t("div", Qh, [
                  t("span", Jh, d(v.model.filename), 1),
                  S(Hn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", Xh, [
                  t("span", Zh, d(u(v.model.size)), 1),
                  t("span", ey, d(v.model.category), 1)
                ]),
                t("div", ty, d(v.model.relative_path), 1)
              ])
            ], 10, Kh))), 128))
          ]),
          t("div", sy, [
            S(De, {
              variant: "ghost",
              size: "sm",
              onClick: f[1] || (f[1] = (v) => a("search"))
            }, {
              default: h(() => [...f[9] || (f[9] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            S(De, {
              variant: "ghost",
              size: "sm",
              onClick: f[2] || (f[2] = (v) => a("download-url"))
            }, {
              default: h(() => [...f[10] || (f[10] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: f[3] || (f[3] = (v) => a("mark-optional"))
            }, {
              default: h(() => [...f[11] || (f[11] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", oy, [
          f[16] || (f[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", ny, [
            S(De, {
              variant: "primary",
              size: "sm",
              onClick: f[4] || (f[4] = (v) => a("search"))
            }, {
              default: h(() => [...f[13] || (f[13] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: f[5] || (f[5] = (v) => a("download-url"))
            }, {
              default: h(() => [...f[14] || (f[14] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            S(De, {
              variant: "secondary",
              size: "sm",
              onClick: f[6] || (f[6] = (v) => a("mark-optional"))
            }, {
              default: h(() => [...f[15] || (f[15] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), ly = /* @__PURE__ */ we(ay, [["__scopeId", "data-v-8a82fefa"]]), iy = { class: "model-resolution-step" }, ry = { class: "step-header" }, cy = { class: "step-info" }, uy = { class: "step-title" }, dy = { class: "step-description" }, my = { class: "stat-badge" }, fy = {
  key: 1,
  class: "step-body"
}, vy = {
  key: 2,
  class: "empty-state"
}, py = { class: "model-search-modal" }, gy = { class: "model-modal-body" }, hy = {
  key: 0,
  class: "model-search-results"
}, yy = ["onClick"], wy = { class: "model-result-header" }, _y = { class: "model-result-filename" }, ky = { class: "model-result-meta" }, by = { class: "model-result-category" }, $y = { class: "model-result-size" }, Cy = {
  key: 0,
  class: "model-result-path"
}, xy = {
  key: 1,
  class: "model-no-results"
}, Sy = {
  key: 2,
  class: "model-searching"
}, Iy = { class: "model-download-url-modal" }, Ey = { class: "model-modal-body" }, Ty = { class: "model-input-group" }, Py = { class: "model-input-group" }, My = { class: "model-modal-actions" }, Ry = /* @__PURE__ */ he({
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
    function a(W) {
      var ee;
      return W && ((ee = o[W]) == null ? void 0 : ee[0]) || null;
    }
    const l = e, r = s, c = k(0), u = k(!1), m = k(!1), f = k(""), v = k(""), p = k(""), _ = k([]), g = k(!1), w = A(() => l.models[c.value]), C = A(() => l.models.some((W) => W.is_download_intent)), $ = A(() => l.models.filter(
      (W) => l.modelChoices.has(W.filename) || W.is_download_intent
    ).length), x = A(() => {
      var ee;
      if (!w.value) return "";
      const W = a((ee = w.value.reference) == null ? void 0 : ee.node_type);
      return W ? `${W}/${w.value.filename}` : "";
    }), O = A(() => {
      var ee;
      if (!w.value) return "not-found";
      const W = l.modelChoices.get(w.value.filename);
      if (W)
        switch (W.action) {
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
      return w.value.is_download_intent ? "download" : (ee = w.value.options) != null && ee.length ? "ambiguous" : "not-found";
    }), T = A(() => {
      var ee, ae;
      if (!w.value) return;
      const W = l.modelChoices.get(w.value.filename);
      if (W)
        switch (W.action) {
          case "select":
            return (ee = W.selected_model) != null && ee.filename ? `→ ${W.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return w.value.is_download_intent ? "Pending Download" : (ae = w.value.options) != null && ae.length ? `${w.value.options.length} matches` : "Not Found";
    });
    function P(W) {
      W >= 0 && W < l.models.length && (c.value = W);
    }
    function R() {
      var W;
      for (let ee = c.value + 1; ee < l.models.length; ee++) {
        const ae = l.models[ee];
        if (!ae.is_download_intent && !((W = l.modelChoices) != null && W.has(ae.filename))) {
          P(ee);
          return;
        }
      }
    }
    function U() {
      w.value && (r("mark-optional", w.value.filename), Et(() => R()));
    }
    function B() {
      w.value && (r("skip", w.value.filename), Et(() => R()));
    }
    function I(W) {
      w.value && (r("option-selected", w.value.filename, W), Et(() => R()));
    }
    function N() {
      w.value && r("clear-choice", w.value.filename);
    }
    function se() {
      w.value && (f.value = w.value.filename, u.value = !0);
    }
    function te() {
      w.value && (v.value = w.value.download_source || "", p.value = w.value.target_path || x.value, m.value = !0);
    }
    function Z() {
      u.value = !1, f.value = "", _.value = [];
    }
    function X() {
      m.value = !1, v.value = "", p.value = "";
    }
    function G() {
      g.value = !0, setTimeout(() => {
        g.value = !1;
      }, 300);
    }
    function Q(W) {
      w.value && (Z(), Et(() => R()));
    }
    function oe() {
      !w.value || !v.value.trim() || (r("download-url", w.value.filename, v.value.trim(), p.value.trim() || void 0), X(), Et(() => R()));
    }
    function le(W) {
      if (!W) return "Unknown";
      const ee = W / (1024 * 1024 * 1024);
      return ee >= 1 ? `${ee.toFixed(2)} GB` : `${(W / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (W, ee) => {
      var ae, Ne, Ke;
      return n(), i("div", iy, [
        t("div", ry, [
          t("div", cy, [
            t("h3", uy, d(C.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", dy, d(C.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", my, d($.value) + "/" + d(e.models.length) + " resolved", 1)
        ]),
        w.value ? (n(), D(zr, {
          key: 0,
          "item-name": w.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: ee[0] || (ee[0] = (je) => P(c.value - 1)),
          onNext: ee[1] || (ee[1] = (je) => P(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        w.value ? (n(), i("div", fy, [
          S(ly, {
            filename: w.value.filename,
            "node-type": ((ae = w.value.reference) == null ? void 0 : ae.node_type) || "Unknown",
            "has-multiple-options": !!((Ne = w.value.options) != null && Ne.length),
            options: w.value.options,
            choice: (Ke = e.modelChoices) == null ? void 0 : Ke.get(w.value.filename),
            status: O.value,
            "status-label": T.value,
            onMarkOptional: U,
            onSkip: B,
            onDownloadUrl: te,
            onSearch: se,
            onOptionSelected: I,
            onClearChoice: N
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", vy, [...ee[5] || (ee[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (n(), D(Dt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: kt(Z, ["self"])
          }, [
            t("div", py, [
              t("div", { class: "model-modal-header" }, [
                ee[6] || (ee[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: Z
                }, "✕")
              ]),
              t("div", gy, [
                S(zt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": ee[2] || (ee[2] = (je) => f.value = je),
                  placeholder: "Search by filename, category...",
                  onInput: G
                }, null, 8, ["modelValue"]),
                _.value.length > 0 ? (n(), i("div", hy, [
                  (n(!0), i(j, null, ge(_.value, (je) => (n(), i("div", {
                    key: je.hash,
                    class: "model-search-result-item",
                    onClick: ($e) => Q()
                  }, [
                    t("div", wy, [
                      t("code", _y, d(je.filename), 1)
                    ]),
                    t("div", ky, [
                      t("span", by, d(je.category), 1),
                      t("span", $y, d(le(je.size)), 1)
                    ]),
                    je.relative_path ? (n(), i("div", Cy, d(je.relative_path), 1)) : y("", !0)
                  ], 8, yy))), 128))
                ])) : f.value && !g.value ? (n(), i("div", xy, ' No models found matching "' + d(f.value) + '" ', 1)) : y("", !0),
                g.value ? (n(), i("div", Sy, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (n(), D(Dt, { to: "body" }, [
          m.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: kt(X, ["self"])
          }, [
            t("div", Iy, [
              t("div", { class: "model-modal-header" }, [
                ee[7] || (ee[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: X
                }, "✕")
              ]),
              t("div", Ey, [
                t("div", Ty, [
                  ee[8] || (ee[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  S(zt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": ee[3] || (ee[3] = (je) => v.value = je),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", Py, [
                  ee[9] || (ee[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  S(zt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": ee[4] || (ee[4] = (je) => p.value = je),
                    placeholder: x.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", My, [
                  S(De, {
                    variant: "secondary",
                    onClick: X
                  }, {
                    default: h(() => [...ee[10] || (ee[10] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  S(De, {
                    variant: "primary",
                    disabled: !v.value.trim() || !p.value.trim(),
                    onClick: oe
                  }, {
                    default: h(() => [...ee[11] || (ee[11] = [
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
}), Dy = /* @__PURE__ */ we(Ry, [["__scopeId", "data-v-5c700bfa"]]), Ly = { class: "applying-step" }, Ny = {
  key: 0,
  class: "phase-content"
}, Uy = {
  key: 1,
  class: "phase-content"
}, Ay = { class: "phase-description" }, Oy = { class: "overall-progress" }, zy = { class: "progress-bar" }, Fy = { class: "progress-label" }, Vy = { class: "install-list" }, By = { class: "install-icon" }, Wy = { key: 0 }, Gy = {
  key: 1,
  class: "spinner"
}, jy = { key: 2 }, Hy = { key: 3 }, Ky = {
  key: 0,
  class: "install-error"
}, qy = {
  key: 2,
  class: "phase-content"
}, Yy = { class: "phase-header" }, Qy = { class: "phase-title" }, Jy = { class: "completion-summary" }, Xy = {
  key: 0,
  class: "summary-item success"
}, Zy = { class: "summary-text" }, e1 = {
  key: 1,
  class: "summary-item error"
}, t1 = { class: "summary-text" }, s1 = {
  key: 2,
  class: "failed-list"
}, o1 = { class: "failed-node-id" }, n1 = { class: "failed-error" }, a1 = {
  key: 4,
  class: "summary-item success"
}, l1 = {
  key: 5,
  class: "restart-prompt"
}, i1 = {
  key: 3,
  class: "phase-content error"
}, r1 = { class: "error-message" }, c1 = /* @__PURE__ */ he({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = A(() => {
      var f, v;
      const u = ((f = s.progress.nodeInstallProgress) == null ? void 0 : f.totalNodes) || s.progress.nodesToInstall.length;
      if (!u) return 0;
      const m = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(m / u * 100);
    }), a = A(() => {
      var u;
      return ((u = s.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((m) => !m.success)) || [];
    }), l = A(() => a.value.length > 0);
    function r(u, m) {
      var v, p;
      const f = (v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.find((_) => _.node_id === u);
      return f ? f.success ? "complete" : "failed" : ((p = s.progress.nodeInstallProgress) == null ? void 0 : p.currentIndex) === m ? "installing" : "pending";
    }
    function c(u) {
      var m, f;
      return (f = (m = s.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.find((v) => v.node_id === u)) == null ? void 0 : f.error;
    }
    return (u, m) => {
      var f, v, p, _;
      return n(), i("div", Ly, [
        e.progress.phase === "resolving" ? (n(), i("div", Ny, [...m[2] || (m[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (n(), i("div", Uy, [
          m[3] || (m[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", Ay, " Installing " + d((((f = e.progress.nodeInstallProgress) == null ? void 0 : f.currentIndex) ?? 0) + 1) + " of " + d(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", Oy, [
            t("div", zy, [
              t("div", {
                class: "progress-fill",
                style: Jt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", Fy, d(((p = e.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + d(((_ = e.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", Vy, [
            (n(!0), i(j, null, ge(e.progress.nodesToInstall, (g, w) => (n(), i("div", {
              key: g,
              class: Pe(["install-item", r(g, w)])
            }, [
              t("span", By, [
                r(g, w) === "pending" ? (n(), i("span", Wy, "○")) : r(g, w) === "installing" ? (n(), i("span", Gy, "◌")) : r(g, w) === "complete" ? (n(), i("span", jy, "✓")) : r(g, w) === "failed" ? (n(), i("span", Hy, "✗")) : y("", !0)
              ]),
              t("code", null, d(g), 1),
              c(g) ? (n(), i("span", Ky, d(c(g)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", qy, [
          t("div", Yy, [
            t("span", {
              class: Pe(["phase-icon", l.value ? "warning" : "success"])
            }, d(l.value ? "⚠" : "✓"), 3),
            t("h3", Qy, d(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", Jy, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", Xy, [
              m[4] || (m[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", Zy, d(e.progress.nodesInstalled.length) + " node package" + d(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", e1, [
              m[5] || (m[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", t1, d(a.value.length) + " package" + d(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", s1, [
              (n(!0), i(j, null, ge(a.value, (g) => (n(), i("div", {
                key: g.node_id,
                class: "failed-item"
              }, [
                t("code", o1, d(g.node_id), 1),
                t("span", n1, d(g.error), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: m[0] || (m[0] = (g) => u.$emit("retry-failed"))
            }, " Retry Failed (" + d(a.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (n(), i("div", a1, [...m[6] || (m[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            m[8] || (m[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (n(), i("div", l1, [
              m[7] || (m[7] = t("div", { class: "restart-warning" }, [
                t("span", { class: "warning-icon" }, "⚠"),
                t("div", { class: "warning-content" }, [
                  t("strong", null, "Restart Required"),
                  t("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              t("button", {
                class: "restart-button",
                onClick: m[1] || (m[1] = (g) => u.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (n(), i("div", i1, [
          m[9] || (m[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", r1, d(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), u1 = /* @__PURE__ */ we(c1, [["__scopeId", "data-v-5efaae58"]]), d1 = {
  key: 0,
  class: "loading-state"
}, m1 = {
  key: 1,
  class: "wizard-content"
}, f1 = {
  key: 0,
  class: "step-content"
}, v1 = { class: "analysis-summary" }, p1 = { class: "analysis-header" }, g1 = { class: "summary-description" }, h1 = { class: "stats-grid" }, y1 = { class: "stat-card" }, w1 = { class: "stat-items" }, _1 = {
  key: 0,
  class: "stat-item success"
}, k1 = { class: "stat-count" }, b1 = {
  key: 1,
  class: "stat-item info"
}, $1 = { class: "stat-count" }, C1 = {
  key: 2,
  class: "stat-item warning"
}, x1 = { class: "stat-count" }, S1 = {
  key: 3,
  class: "stat-item warning"
}, I1 = { class: "stat-count" }, E1 = {
  key: 4,
  class: "stat-item warning"
}, T1 = { class: "stat-count" }, P1 = {
  key: 5,
  class: "stat-item error"
}, M1 = { class: "stat-count" }, R1 = { class: "stat-card" }, D1 = { class: "stat-items" }, L1 = { class: "stat-item success" }, N1 = { class: "stat-count" }, U1 = {
  key: 0,
  class: "stat-item info"
}, A1 = { class: "stat-count" }, O1 = {
  key: 1,
  class: "stat-item warning"
}, z1 = { class: "stat-count" }, F1 = {
  key: 2,
  class: "stat-item warning"
}, V1 = { class: "stat-count" }, B1 = {
  key: 3,
  class: "stat-item error"
}, W1 = { class: "stat-count" }, G1 = {
  key: 0,
  class: "status-message warning"
}, j1 = { class: "status-text" }, H1 = {
  key: 1,
  class: "status-message warning"
}, K1 = { class: "status-text" }, q1 = {
  key: 2,
  class: "status-message info"
}, Y1 = { class: "status-text" }, Q1 = {
  key: 3,
  class: "status-message info"
}, J1 = { class: "status-text" }, X1 = {
  key: 4,
  class: "status-message info"
}, Z1 = { class: "status-text" }, e0 = {
  key: 5,
  class: "status-message warning"
}, t0 = { class: "status-text" }, s0 = {
  key: 6,
  class: "status-message success"
}, o0 = {
  key: 7,
  class: "category-mismatch-section"
}, n0 = { class: "mismatch-list" }, a0 = { class: "mismatch-path" }, l0 = { class: "mismatch-target" }, i0 = {
  key: 8,
  class: "category-mismatch-section"
}, r0 = { class: "mismatch-list" }, c0 = { class: "mismatch-path" }, u0 = { class: "status-text" }, d0 = {
  key: 1,
  class: "step-content node-step-content"
}, m0 = {
  key: 0,
  class: "community-node-section"
}, f0 = { class: "community-node-header" }, v0 = { class: "community-node-title" }, p0 = { class: "community-node-list" }, g0 = { class: "community-node-info" }, h0 = { class: "community-node-heading" }, y0 = { class: "item-name" }, w0 = { class: "community-node-package" }, _0 = { class: "community-node-meta" }, k0 = { class: "community-node-guidance" }, b0 = { key: 0 }, $0 = { class: "community-choice-status" }, C0 = { class: "community-node-actions" }, x0 = {
  key: 3,
  class: "step-content"
}, S0 = { class: "review-summary" }, I0 = { class: "review-stats" }, E0 = { class: "review-stat" }, T0 = { class: "stat-value" }, P0 = { class: "review-stat" }, M0 = { class: "stat-value" }, R0 = { class: "review-stat" }, D0 = { class: "stat-value" }, L0 = { class: "review-stat" }, N0 = { class: "stat-value" }, U0 = {
  key: 0,
  class: "review-section"
}, A0 = { class: "section-title" }, O0 = { class: "review-items" }, z0 = { class: "item-name" }, F0 = { class: "item-choice" }, V0 = {
  key: 0,
  class: "choice-badge install"
}, B0 = {
  key: 1,
  class: "choice-badge skip"
}, W0 = {
  key: 1,
  class: "review-section"
}, G0 = { class: "section-title" }, j0 = { class: "review-items" }, H0 = { class: "item-name" }, K0 = { class: "item-choice" }, q0 = {
  key: 0,
  class: "choice-badge install"
}, Y0 = {
  key: 1,
  class: "choice-badge optional"
}, Q0 = {
  key: 2,
  class: "choice-badge skip"
}, J0 = {
  key: 2,
  class: "review-section"
}, X0 = { class: "section-title" }, Z0 = { class: "review-items" }, ew = { class: "item-name" }, tw = { class: "item-choice" }, sw = {
  key: 0,
  class: "choice-badge install"
}, ow = {
  key: 1,
  class: "choice-badge optional"
}, nw = {
  key: 2,
  class: "choice-badge skip"
}, aw = {
  key: 1,
  class: "choice-badge pending"
}, lw = {
  key: 3,
  class: "review-section"
}, iw = { class: "section-title" }, rw = { class: "review-items download-details" }, cw = { class: "download-info" }, uw = { class: "item-name" }, dw = { class: "download-meta" }, mw = { class: "download-path" }, fw = ["title"], vw = {
  key: 4,
  class: "review-section"
}, pw = { class: "section-title" }, gw = { class: "review-items" }, hw = { class: "item-name" }, yw = { class: "item-choice" }, ww = {
  key: 0,
  class: "choice-badge install"
}, _w = {
  key: 1,
  class: "choice-badge download"
}, kw = {
  key: 2,
  class: "choice-badge optional"
}, bw = {
  key: 3,
  class: "choice-badge skip"
}, $w = {
  key: 4,
  class: "choice-badge skip"
}, Cw = {
  key: 1,
  class: "choice-badge download"
}, xw = {
  key: 2,
  class: "choice-badge pending"
}, Sw = {
  key: 5,
  class: "no-choices"
}, Iw = /* @__PURE__ */ he({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, a = s, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: m, resetProgress: f } = Or(), { loadPendingDownloads: v } = Do(), { openFileLocation: p, queueNodeInstall: _, getNodes: g } = rt(), w = k(null), C = k([]), $ = k(!1), x = k(!1), O = k(null), T = k("analysis"), P = k([]), R = k(/* @__PURE__ */ new Map()), U = k(/* @__PURE__ */ new Map()), B = k(/* @__PURE__ */ new Set()), I = A(() => {
      const re = [
        { id: "analysis", label: "Analysis" }
      ];
      return (G.value || le.value || W.value) && re.push({ id: "nodes", label: "Nodes" }), Q.value && re.push({ id: "models", label: "Models" }), re.push({ id: "review", label: "Review" }), T.value === "applying" && re.push({ id: "applying", label: "Applying" }), re;
    }), N = A(() => w.value ? w.value.stats.needs_user_input : !1), se = A(() => w.value ? w.value.nodes.version_gated || [] : []), te = A(() => w.value ? w.value.nodes.uninstallable || [] : []), Z = A(() => te.value.filter((re) => {
      var E;
      return !!((E = re.package) != null && E.package_id);
    })), X = A(() => se.value.length > 0), G = A(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), Q = A(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), oe = A(() => w.value ? w.value.stats.download_intents > 0 : !1), le = A(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), W = A(() => Z.value.length > 0), ee = A(() => w.value ? w.value.nodes.resolved.length : 0), ae = A(() => w.value ? w.value.models.resolved.filter((re) => re.has_category_mismatch) : []), Ne = A(() => ae.value.length > 0), Ke = A(() => G.value || le.value || W.value ? "nodes" : Q.value ? "models" : "review"), je = A(() => {
      if (!w.value) return [];
      const re = w.value.nodes.resolved.filter((M) => !M.is_installed), E = /* @__PURE__ */ new Set();
      return re.filter((M) => E.has(M.package.package_id) ? !1 : (E.add(M.package.package_id), !0));
    }), $e = A(() => {
      if (!w.value) return [];
      const re = w.value.nodes.resolved.filter((M) => !M.is_installed), E = /* @__PURE__ */ new Map();
      for (const M of re) {
        const Ie = E.get(M.package.package_id);
        Ie ? Ie.node_types_count++ : E.set(M.package.package_id, {
          package_id: M.package.package_id,
          title: M.package.title,
          node_types_count: 1
        });
      }
      return Array.from(E.values());
    }), V = A(() => je.value.filter((re) => !B.value.has(re.package.package_id))), ie = A(() => w.value ? w.value.models.resolved.filter(
      (re) => re.match_type === "download_intent" || re.match_type === "property_download_intent"
    ).map((re) => ({
      filename: re.reference.widget_value,
      reference: re.reference,
      is_download_intent: !0,
      resolved_model: re.model,
      download_source: re.download_source,
      target_path: re.target_path
    })) : []), F = A(() => {
      if (!w.value) return [];
      const re = w.value.nodes.unresolved.map((M) => ({
        node_type: M.reference.node_type,
        reason: M.reason,
        is_unresolved: !0,
        options: void 0
      })), E = w.value.nodes.ambiguous.map((M) => ({
        node_type: M.reference.node_type,
        has_multiple_options: !0,
        options: M.options.map((Ie) => ({
          package_id: Ie.package.package_id,
          title: Ie.package.title,
          match_confidence: Ie.match_confidence,
          match_type: Ie.match_type,
          is_installed: Ie.is_installed
        }))
      }));
      return [...re, ...E];
    }), L = A(() => {
      if (!w.value) return [];
      const re = w.value.models.unresolved.map((M) => ({
        filename: M.reference.widget_value,
        reference: M.reference,
        reason: M.reason,
        is_unresolved: !0,
        options: void 0
      })), E = w.value.models.ambiguous.map((M) => ({
        filename: M.reference.widget_value,
        reference: M.reference,
        has_multiple_options: !0,
        options: M.options.map((Ie) => ({
          model: Ie.model,
          match_confidence: Ie.match_confidence,
          match_type: Ie.match_type,
          has_download_source: Ie.has_download_source
        }))
      }));
      return [...re, ...E];
    }), ne = A(() => {
      const re = L.value, E = ie.value.map((M) => ({
        filename: M.filename,
        reference: M.reference,
        is_download_intent: !0,
        resolved_model: M.resolved_model,
        download_source: M.download_source,
        target_path: M.target_path,
        options: void 0
      }));
      return [...re, ...E];
    }), Ue = A(() => ie.value.filter((re) => {
      const E = U.value.get(re.filename);
      return E ? E.action === "download" : !0;
    }).map((re) => ({
      filename: re.filename,
      url: re.download_source,
      target_path: re.target_path
    })));
    function Ae(re, E = 50) {
      return re.length <= E ? re : re.slice(0, E - 3) + "...";
    }
    const z = A(() => {
      let re = V.value.length;
      for (const E of R.value.values())
        E.action === "install" && re++;
      for (const E of U.value.values())
        E.action === "select" && re++;
      return re;
    }), K = A(() => {
      let re = 0;
      for (const E of U.value.values())
        E.action === "download" && re++;
      for (const E of ie.value)
        U.value.get(E.filename) || re++;
      return re;
    }), ce = A(() => {
      let re = 0;
      for (const E of R.value.values())
        E.action === "optional" && re++;
      for (const E of U.value.values())
        E.action === "optional" && re++;
      return re;
    }), Se = A(() => {
      let re = B.value.size;
      for (const E of R.value.values())
        E.action === "skip" && re++;
      for (const E of U.value.values())
        E.action === "skip" && re++;
      for (const E of F.value)
        R.value.has(E.node_type) || re++;
      for (const E of L.value)
        U.value.has(E.filename) || re++;
      return re;
    }), _e = A(() => {
      const re = {};
      if (re.analysis = { resolved: 1, total: 1 }, G.value || W.value) {
        const E = F.value.length, M = Z.value.length, Ie = F.value.filter(
          (bt) => R.value.has(bt.node_type)
        ).length, tt = Z.value.filter(
          (bt) => R.value.has(bt.reference.node_type)
        ).length, ft = E + M, st = Ie + tt;
        re.nodes = { resolved: st, total: ft };
      }
      if (Q.value) {
        const E = ne.value.length, M = ne.value.filter(
          (Ie) => U.value.has(Ie.filename) || Ie.is_download_intent
        ).length;
        re.models = { resolved: M, total: E };
      }
      if (re.review = { resolved: 1, total: 1 }, T.value === "applying") {
        const E = m.totalFiles || 1, M = m.completedFiles.length;
        re.applying = { resolved: M, total: E };
      }
      return re;
    });
    function ke(re) {
      T.value = re;
    }
    function Me() {
      const re = I.value.findIndex((E) => E.id === T.value);
      re > 0 && (T.value = I.value[re - 1].id);
    }
    function ye() {
      const re = I.value.findIndex((E) => E.id === T.value);
      re < I.value.length - 1 && (T.value = I.value[re + 1].id);
    }
    function Te() {
      for (const re of Z.value) {
        const E = re.reference.node_type;
        R.value.has(E) || de(re, "registry");
      }
    }
    function me(re) {
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
    function We(re) {
      return re.filter((E) => E.installed && E.tracked).filter((E) => E.name !== "comfygit-manager").map((E) => ({
        package_id: E.registry_id || E.name,
        source: E.source
      })).filter((E, M, Ie) => Ie.findIndex((tt) => tt.package_id === E.package_id) === M).sort((E, M) => {
        const Ie = me(E.source) - me(M.source);
        return Ie !== 0 ? Ie : E.package_id.localeCompare(M.package_id);
      });
    }
    async function Le() {
      $.value = !0, O.value = null;
      try {
        const [re, E] = await Promise.all([
          l(o.workflowName),
          g()
        ]);
        w.value = re, C.value = We(E.nodes), Te();
      } catch (re) {
        O.value = re instanceof Error ? re.message : "Failed to analyze workflow";
      } finally {
        $.value = !1;
      }
    }
    function fe() {
      P.value.includes("analysis") || P.value.push("analysis"), G.value || le.value || W.value ? T.value = "nodes" : Q.value ? T.value = "models" : T.value = "review";
    }
    function H(re) {
      R.value.set(re, { action: "optional" });
    }
    function Oe(re) {
      R.value.set(re, { action: "skip" });
    }
    function xe(re, E) {
      var Ie;
      const M = F.value.find((tt) => tt.node_type === re);
      (Ie = M == null ? void 0 : M.options) != null && Ie[E] && R.value.set(re, {
        action: "install",
        package_id: M.options[E].package_id
      });
    }
    function Ce(re, E) {
      R.value.set(re, {
        action: "install",
        package_id: E
      });
    }
    function Re(re) {
      R.value.delete(re);
    }
    function Ee(re) {
      return R.value.get(re);
    }
    function Y(re) {
      const E = Ee(re);
      return E ? E.action === "optional" ? "Marked optional" : E.action === "skip" ? "Skipped" : E.action === "install" ? E.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function de(re, E) {
      var tt;
      const M = (tt = re.package) == null ? void 0 : tt.package_id;
      if (!M) return;
      const Ie = {
        action: "install",
        package_id: M,
        version: re.package.latest_version || null,
        install_source: E
      };
      E === "git" && re.package.repository && (Ie.repository = re.package.repository), R.value.set(re.reference.node_type, Ie);
    }
    function pe(re) {
      R.value.set(re, { action: "optional" });
    }
    function He(re) {
      R.value.set(re, { action: "skip" });
    }
    function ze(re) {
      B.value.has(re) ? B.value.delete(re) : B.value.add(re);
    }
    function Fe(re) {
      U.value.set(re, { action: "optional" });
    }
    function et(re) {
      U.value.set(re, { action: "skip" });
    }
    function qe(re, E) {
      var Ie;
      const M = L.value.find((tt) => tt.filename === re);
      (Ie = M == null ? void 0 : M.options) != null && Ie[E] && U.value.set(re, {
        action: "select",
        selected_model: M.options[E].model
      });
    }
    function mt(re, E, M) {
      U.value.set(re, {
        action: "download",
        url: E,
        target_path: M
      });
    }
    function ct(re) {
      U.value.delete(re);
    }
    async function dt(re) {
      try {
        await p(re);
      } catch (E) {
        O.value = E instanceof Error ? E.message : "Failed to open file location";
      }
    }
    async function It() {
      var re;
      x.value = !0, O.value = null, f(), m.phase = "resolving", T.value = "applying";
      try {
        const E = await r(o.workflowName, R.value, U.value, B.value);
        E.models_to_download && E.models_to_download.length > 0 && u(o.workflowName, E.models_to_download);
        const M = Z.value.map((st) => {
          const bt = Ee(st.reference.node_type);
          if ((bt == null ? void 0 : bt.action) !== "install" || bt.install_source !== "git")
            return null;
          const St = bt.repository || st.package.repository, Be = bt.package_id || st.package.package_id;
          return !St || !Be ? null : {
            id: Be,
            repository: St,
            selectedVersion: bt.version || st.package.latest_version || "latest"
          };
        }).filter((st) => !!st), Ie = new Set(M.map((st) => st.id)), tt = [
          ...E.nodes_to_install || [],
          ...V.value.map((st) => st.package.package_id)
        ];
        m.nodesToInstall = [...new Set(tt)].filter((st) => !Ie.has(st)), m.nodesToInstall.length > 0 && await c(o.workflowName);
        for (const st of M)
          await _({
            id: st.id,
            version: st.selectedVersion,
            selected_version: st.selectedVersion,
            repository: st.repository,
            install_source: "git",
            mode: "remote",
            channel: "default"
          }), m.needsRestart = !0;
        m.phase = "complete", await v();
        const ft = m.installError || ((re = m.nodeInstallProgress) == null ? void 0 : re.completedNodes.some((st) => !st.success));
        !m.needsRestart && !ft && setTimeout(() => {
          a("refresh"), a("install"), a("close");
        }, 1500);
      } catch (E) {
        O.value = E instanceof Error ? E.message : "Failed to apply resolution", m.error = O.value, m.phase = "error";
      } finally {
        x.value = !1;
      }
    }
    function Xt() {
      a("refresh"), a("restart"), a("close");
    }
    async function Lt() {
      var E;
      const re = ((E = m.nodeInstallProgress) == null ? void 0 : E.completedNodes.filter((M) => !M.success).map((M) => M.node_id)) || [];
      if (re.length !== 0) {
        m.phase = "installing", m.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: re.length
        }, m.nodesToInstall = re, m.nodesInstalled = [], m.installError = void 0;
        try {
          await c(o.workflowName), m.phase = "complete";
        } catch (M) {
          m.error = M instanceof Error ? M.message : "Retry failed", m.phase = "error";
        }
      }
    }
    return at(Le), (re, E) => (n(), D($t, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: $.value,
      error: O.value || void 0,
      "fixed-height": !0,
      onClose: E[1] || (E[1] = (M) => a("close"))
    }, {
      body: h(() => [
        $.value && !w.value ? (n(), i("div", d1, [...E[2] || (E[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (n(), i("div", m1, [
          S(cg, {
            steps: I.value,
            "current-step": T.value,
            "completed-steps": P.value,
            "step-stats": _e.value,
            onStepChange: ke
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          T.value === "analysis" ? (n(), i("div", f1, [
            t("div", v1, [
              t("div", p1, [
                E[3] || (E[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", g1, " Found " + d(w.value.stats.total_nodes) + " nodes and " + d(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", h1, [
                t("div", y1, [
                  E[16] || (E[16] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", w1, [
                    ee.value > 0 ? (n(), i("div", _1, [
                      E[4] || (E[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", k1, d(ee.value), 1),
                      E[5] || (E[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (n(), i("div", b1, [
                      E[6] || (E[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", $1, d(w.value.stats.packages_needing_installation), 1),
                      E[7] || (E[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (n(), i("div", C1, [
                      E[8] || (E[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", x1, d(w.value.nodes.ambiguous.length), 1),
                      E[9] || (E[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    se.value.length > 0 ? (n(), i("div", S1, [
                      E[10] || (E[10] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", I1, d(se.value.length), 1),
                      E[11] || (E[11] = t("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    te.value.length > 0 ? (n(), i("div", E1, [
                      E[12] || (E[12] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", T1, d(te.value.length), 1),
                      E[13] || (E[13] = t("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (n(), i("div", P1, [
                      E[14] || (E[14] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", M1, d(w.value.nodes.unresolved.length), 1),
                      E[15] || (E[15] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", R1, [
                  E[27] || (E[27] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", D1, [
                    t("div", L1, [
                      E[17] || (E[17] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", N1, d(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      E[18] || (E[18] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (n(), i("div", U1, [
                      E[19] || (E[19] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", A1, d(w.value.stats.download_intents), 1),
                      E[20] || (E[20] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    Ne.value ? (n(), i("div", O1, [
                      E[21] || (E[21] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", z1, d(ae.value.length), 1),
                      E[22] || (E[22] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (n(), i("div", F1, [
                      E[23] || (E[23] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", V1, d(w.value.models.ambiguous.length), 1),
                      E[24] || (E[24] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (n(), i("div", B1, [
                      E[25] || (E[25] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", W1, d(w.value.models.unresolved.length), 1),
                      E[26] || (E[26] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              N.value ? (n(), i("div", G1, [
                E[28] || (E[28] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", j1, d(F.value.length + L.value.length) + " items need your input", 1)
              ])) : X.value ? (n(), i("div", H1, [
                E[29] || (E[29] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", K1, d(se.value.length) + " node type" + d(se.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : te.value.length > 0 ? (n(), i("div", q1, [
                E[30] || (E[30] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Y1, d(te.value.length) + " community-mapped node type" + d(te.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : le.value ? (n(), i("div", Q1, [
                E[31] || (E[31] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", J1, d(w.value.stats.packages_needing_installation) + " package" + d(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + d(w.value.stats.nodes_needing_installation) + " node type" + d(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + d(oe.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : oe.value ? (n(), i("div", X1, [
                E[32] || (E[32] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", Z1, d(w.value.stats.download_intents) + " model" + d(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : Ne.value ? (n(), i("div", e0, [
                E[33] || (E[33] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", t0, d(ae.value.length) + " model" + d(ae.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", s0, [...E[34] || (E[34] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              Ne.value ? (n(), i("div", o0, [
                E[37] || (E[37] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", n0, [
                  (n(!0), i(j, null, ge(ae.value, (M) => {
                    var Ie, tt;
                    return n(), i("div", {
                      key: M.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", a0, d(M.actual_category) + "/" + d((Ie = M.model) == null ? void 0 : Ie.filename), 1),
                      E[36] || (E[36] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", l0, d((tt = M.expected_categories) == null ? void 0 : tt[0]) + "/", 1),
                      M.file_path ? (n(), D(De, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (ft) => dt(M.file_path)
                      }, {
                        default: h(() => [...E[35] || (E[35] = [
                          b(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              X.value ? (n(), i("div", i0, [
                E[38] || (E[38] = t("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                t("div", r0, [
                  (n(!0), i(j, null, ge(se.value, (M) => {
                    var Ie;
                    return n(), i("div", {
                      key: `vg-${M.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      t("code", c0, d(M.reference.node_type), 1),
                      t("span", u0, d(M.guidance || ((Ie = w.value.node_guidance) == null ? void 0 : Ie[M.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          T.value === "nodes" ? (n(), i("div", d0, [
            S(Fh, {
              nodes: F.value,
              "node-choices": R.value,
              "auto-resolved-packages": $e.value,
              "skipped-packages": B.value,
              "installed-node-packs": C.value,
              onMarkOptional: H,
              onSkip: Oe,
              onOptionSelected: xe,
              onManualEntry: Ce,
              onClearChoice: Re,
              onPackageSkip: ze
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            Z.value.length > 0 ? (n(), i("div", m0, [
              t("div", f0, [
                t("h4", v0, "Community-Mapped Packages (" + d(Z.value.length) + ")", 1),
                E[39] || (E[39] = t("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              t("div", p0, [
                (n(!0), i(j, null, ge(Z.value, (M) => (n(), i("div", {
                  key: `community-${M.reference.node_type}-${M.package.package_id}`,
                  class: "community-node-item"
                }, [
                  t("div", g0, [
                    t("div", h0, [
                      t("code", y0, d(M.reference.node_type), 1),
                      t("span", w0, d(M.package.title || M.package.package_id), 1)
                    ]),
                    t("div", _0, d(M.package.package_id), 1),
                    t("div", k0, [
                      E[40] || (E[40] = b(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      M.guidance ? (n(), i("span", b0, d(M.guidance), 1)) : y("", !0)
                    ]),
                    t("div", $0, d(Y(M.reference.node_type)), 1)
                  ]),
                  t("div", C0, [
                    S(De, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !M.package.package_id,
                      onClick: (Ie) => de(M, "registry")
                    }, {
                      default: h(() => [...E[41] || (E[41] = [
                        b(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    M.package.repository ? (n(), D(De, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !M.package.package_id,
                      onClick: (Ie) => de(M, "git")
                    }, {
                      default: h(() => [...E[42] || (E[42] = [
                        b(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    S(De, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ie) => pe(M.reference.node_type)
                    }, {
                      default: h(() => [...E[43] || (E[43] = [
                        b(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(De, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ie) => He(M.reference.node_type)
                    }, {
                      default: h(() => [...E[44] || (E[44] = [
                        b(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : y("", !0)
          ])) : y("", !0),
          T.value === "models" ? (n(), D(Dy, {
            key: 2,
            models: ne.value,
            "model-choices": U.value,
            onMarkOptional: Fe,
            onSkip: et,
            onOptionSelected: qe,
            onDownloadUrl: mt,
            onClearChoice: ct
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          T.value === "review" ? (n(), i("div", x0, [
            t("div", S0, [
              E[50] || (E[50] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", I0, [
                t("div", E0, [
                  t("span", T0, d(z.value), 1),
                  E[45] || (E[45] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", P0, [
                  t("span", M0, d(K.value), 1),
                  E[46] || (E[46] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", R0, [
                  t("span", D0, d(ce.value), 1),
                  E[47] || (E[47] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", L0, [
                  t("span", N0, d(Se.value), 1),
                  E[48] || (E[48] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              $e.value.length > 0 ? (n(), i("div", U0, [
                t("h4", A0, "Node Packages (" + d($e.value.length) + ")", 1),
                t("div", O0, [
                  (n(!0), i(j, null, ge($e.value, (M) => (n(), i("div", {
                    key: M.package_id,
                    class: "review-item"
                  }, [
                    t("code", z0, d(M.package_id), 1),
                    t("div", F0, [
                      B.value.has(M.package_id) ? (n(), i("span", B0, "Skipped")) : (n(), i("span", V0, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              Z.value.length > 0 ? (n(), i("div", W0, [
                t("h4", G0, "Community-Mapped Packages (" + d(Z.value.length) + ")", 1),
                t("div", j0, [
                  (n(!0), i(j, null, ge(Z.value, (M) => {
                    var Ie, tt, ft;
                    return n(), i("div", {
                      key: `review-community-${M.reference.node_type}-${M.package.package_id}`,
                      class: "review-item"
                    }, [
                      t("code", H0, d(M.reference.node_type), 1),
                      t("div", K0, [
                        ((Ie = Ee(M.reference.node_type)) == null ? void 0 : Ie.action) === "install" ? (n(), i("span", q0, d(((tt = Ee(M.reference.node_type)) == null ? void 0 : tt.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((ft = Ee(M.reference.node_type)) == null ? void 0 : ft.action) === "optional" ? (n(), i("span", Y0, " Optional ")) : (n(), i("span", Q0, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              F.value.length > 0 ? (n(), i("div", J0, [
                t("h4", X0, "Node Choices (" + d(F.value.length) + ")", 1),
                t("div", Z0, [
                  (n(!0), i(j, null, ge(F.value, (M) => {
                    var Ie, tt, ft, st;
                    return n(), i("div", {
                      key: M.node_type,
                      class: "review-item"
                    }, [
                      t("code", ew, d(M.node_type), 1),
                      t("div", tw, [
                        R.value.has(M.node_type) ? (n(), i(j, { key: 0 }, [
                          ((Ie = R.value.get(M.node_type)) == null ? void 0 : Ie.action) === "install" ? (n(), i("span", sw, d((tt = R.value.get(M.node_type)) == null ? void 0 : tt.package_id), 1)) : ((ft = R.value.get(M.node_type)) == null ? void 0 : ft.action) === "optional" ? (n(), i("span", ow, " Optional ")) : ((st = R.value.get(M.node_type)) == null ? void 0 : st.action) === "skip" ? (n(), i("span", nw, " Skip ")) : y("", !0)
                        ], 64)) : (n(), i("span", aw, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Ue.value.length > 0 ? (n(), i("div", lw, [
                t("h4", iw, "Models to Download (" + d(Ue.value.length) + ")", 1),
                t("div", rw, [
                  (n(!0), i(j, null, ge(Ue.value, (M) => (n(), i("div", {
                    key: M.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", cw, [
                      t("code", uw, d(M.filename), 1),
                      t("div", dw, [
                        t("span", mw, "→ " + d(M.target_path), 1),
                        M.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: M.url
                        }, d(Ae(M.url)), 9, fw)) : y("", !0)
                      ])
                    ]),
                    E[49] || (E[49] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              ne.value.length > 0 ? (n(), i("div", vw, [
                t("h4", pw, "Models (" + d(ne.value.length) + ")", 1),
                t("div", gw, [
                  (n(!0), i(j, null, ge(ne.value, (M) => {
                    var Ie, tt, ft, st, bt, St, Be;
                    return n(), i("div", {
                      key: M.filename,
                      class: "review-item"
                    }, [
                      t("code", hw, d(M.filename), 1),
                      t("div", yw, [
                        U.value.has(M.filename) ? (n(), i(j, { key: 0 }, [
                          ((Ie = U.value.get(M.filename)) == null ? void 0 : Ie.action) === "select" ? (n(), i("span", ww, d((ft = (tt = U.value.get(M.filename)) == null ? void 0 : tt.selected_model) == null ? void 0 : ft.filename), 1)) : ((st = U.value.get(M.filename)) == null ? void 0 : st.action) === "download" ? (n(), i("span", _w, " Download ")) : ((bt = U.value.get(M.filename)) == null ? void 0 : bt.action) === "optional" ? (n(), i("span", kw, " Optional ")) : ((St = U.value.get(M.filename)) == null ? void 0 : St.action) === "skip" ? (n(), i("span", bw, " Skip ")) : ((Be = U.value.get(M.filename)) == null ? void 0 : Be.action) === "cancel_download" ? (n(), i("span", $w, " Cancel Download ")) : y("", !0)
                        ], 64)) : M.is_download_intent ? (n(), i("span", Cw, " Pending Download ")) : (n(), i("span", xw, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              je.value.length === 0 && Z.value.length === 0 && F.value.length === 0 && ne.value.length === 0 ? (n(), i("div", Sw, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          T.value === "applying" ? (n(), D(u1, {
            key: 4,
            progress: Je(m),
            onRestart: Xt,
            onRetryFailed: Lt
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        T.value !== "analysis" && T.value !== "applying" ? (n(), D(De, {
          key: 0,
          variant: "secondary",
          disabled: x.value,
          onClick: Me
        }, {
          default: h(() => [...E[51] || (E[51] = [
            b(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        E[54] || (E[54] = t("div", { class: "footer-spacer" }, null, -1)),
        T.value !== "applying" || Je(m).phase === "complete" || Je(m).phase === "error" ? (n(), D(De, {
          key: 1,
          variant: "secondary",
          onClick: E[0] || (E[0] = (M) => a("close"))
        }, {
          default: h(() => [
            b(d(Je(m).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        T.value === "analysis" ? (n(), D(De, {
          key: 2,
          variant: "primary",
          disabled: $.value,
          onClick: fe
        }, {
          default: h(() => [
            b(d(Ke.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        T.value === "nodes" ? (n(), D(De, {
          key: 3,
          variant: "primary",
          onClick: ye
        }, {
          default: h(() => [
            b(d(Q.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        T.value === "models" ? (n(), D(De, {
          key: 4,
          variant: "primary",
          onClick: ye
        }, {
          default: h(() => [...E[52] || (E[52] = [
            b(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        T.value === "review" ? (n(), D(De, {
          key: 5,
          variant: "primary",
          disabled: x.value,
          loading: x.value,
          onClick: It
        }, {
          default: h(() => [...E[53] || (E[53] = [
            b(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Ew = /* @__PURE__ */ we(Iw, [["__scopeId", "data-v-49848358"]]), Tw = { class: "search-input-wrapper" }, Pw = ["value", "placeholder"], Mw = /* @__PURE__ */ he({
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
    const o = e, a = s, l = k(null);
    let r;
    function c(m) {
      const f = m.target.value;
      o.debounce > 0 ? (clearTimeout(r), r = window.setTimeout(() => {
        a("update:modelValue", f);
      }, o.debounce)) : a("update:modelValue", f);
    }
    function u() {
      var m;
      a("update:modelValue", ""), a("clear"), (m = l.value) == null || m.focus();
    }
    return at(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (m, f) => (n(), i("div", Tw, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: os(u, ["escape"])
      }, null, 40, Pw),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), Rw = /* @__PURE__ */ we(Mw, [["__scopeId", "data-v-266f857a"]]), Dw = { class: "search-bar" }, Lw = /* @__PURE__ */ he({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (n(), i("div", Dw, [
      S(Rw, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => s.$emit("update:modelValue", a)),
        onClear: o[1] || (o[1] = (a) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Lo = /* @__PURE__ */ we(Lw, [["__scopeId", "data-v-3d51bbfd"]]), Nw = { class: "section-group" }, Uw = {
  key: 0,
  class: "section-content"
}, Aw = /* @__PURE__ */ he({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = k(o.initiallyExpanded);
    function r() {
      o.collapsible && (l.value = !l.value, a("toggle", l.value));
    }
    return (c, u) => (n(), i("section", Nw, [
      S(qt, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: h(() => [
          b(d(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (n(), i("div", Uw, [
        ot(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), ht = /* @__PURE__ */ we(Aw, [["__scopeId", "data-v-c48e33ed"]]), Ow = { class: "item-header" }, zw = {
  key: 0,
  class: "item-icon"
}, Fw = { class: "item-info" }, Vw = {
  key: 0,
  class: "item-title"
}, Bw = {
  key: 1,
  class: "item-subtitle"
}, Ww = {
  key: 0,
  class: "item-details"
}, Gw = {
  key: 1,
  class: "item-actions"
}, jw = /* @__PURE__ */ he({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, a = A(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (n(), i("div", {
      class: Pe(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", Ow, [
        l.$slots.icon ? (n(), i("span", zw, [
          ot(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", Fw, [
          l.$slots.title ? (n(), i("div", Vw, [
            ot(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (n(), i("div", Bw, [
            ot(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", Ww, [
        ot(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (n(), i("div", Gw, [
        ot(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Mt = /* @__PURE__ */ we(jw, [["__scopeId", "data-v-cc435e0e"]]), Hw = { class: "loading-state" }, Kw = { class: "loading-message" }, qw = /* @__PURE__ */ he({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (n(), i("div", Hw, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", Kw, d(e.message), 1)
    ]));
  }
}), Ns = /* @__PURE__ */ we(qw, [["__scopeId", "data-v-ad8436c9"]]), Yw = { class: "error-state" }, Qw = { class: "error-message" }, Jw = /* @__PURE__ */ he({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (n(), i("div", Yw, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", Qw, d(e.message), 1),
      e.retry ? (n(), D(ve, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => s.$emit("retry"))
      }, {
        default: h(() => [...o[1] || (o[1] = [
          b(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Us = /* @__PURE__ */ we(Jw, [["__scopeId", "data-v-5397be48"]]), Xw = /* @__PURE__ */ he({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getWorkflows: l } = rt(), r = k([]), c = k(!1), u = k(null), m = k(""), f = k(!0), v = k(!1), p = k(!1), _ = k(!1), g = k(null), w = A(
      () => r.value.filter((le) => le.status === "broken")
    ), C = A(
      () => r.value.filter((le) => le.status === "new")
    ), $ = A(
      () => r.value.filter((le) => le.status === "modified")
    ), x = A(
      () => r.value.filter((le) => le.status === "synced")
    ), O = A(() => {
      if (!m.value.trim()) return r.value;
      const le = m.value.toLowerCase();
      return r.value.filter((W) => W.name.toLowerCase().includes(le));
    }), T = A(
      () => w.value.filter(
        (le) => !m.value.trim() || le.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), P = A(
      () => C.value.filter(
        (le) => !m.value.trim() || le.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), R = A(
      () => $.value.filter(
        (le) => !m.value.trim() || le.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), U = A(
      () => x.value.filter(
        (le) => !m.value.trim() || le.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), B = A(
      () => v.value ? U.value : U.value.slice(0, 5)
    );
    async function I(le = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(le);
      } catch (W) {
        u.value = W instanceof Error ? W.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: I });
    function N(le) {
      g.value = le, p.value = !0;
    }
    function se(le) {
      g.value = le, _.value = !0;
    }
    function te() {
      a("refresh");
    }
    async function Z() {
      _.value = !1, await I(!0);
    }
    async function X() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function G(le) {
      return le.replace(/uninstallable node mappings?/gi, (W) => W.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function Q(le) {
      if (le.issue_summary && le.issue_summary.trim().length > 0)
        return G(le.issue_summary);
      const W = [];
      return le.version_gated_count && le.version_gated_count > 0 && W.push(`${le.version_gated_count} node${le.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), le.uninstallable_count && le.uninstallable_count > 0 && W.push(`${le.uninstallable_count} node${le.uninstallable_count > 1 ? "s" : ""} need community packages`), le.missing_nodes > 0 && W.push(`${le.missing_nodes} missing node${le.missing_nodes > 1 ? "s" : ""}`), le.missing_models > 0 && W.push(`${le.missing_models} missing model${le.missing_models > 1 ? "s" : ""}`), le.models_with_category_mismatch && le.models_with_category_mismatch > 0 && W.push(`${le.models_with_category_mismatch} model${le.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), le.pending_downloads && le.pending_downloads > 0 && W.push(`${le.pending_downloads} pending download${le.pending_downloads > 1 ? "s" : ""}`), W.length > 0 ? W.join(", ") : "Has issues";
    }
    function oe(le) {
      const W = le.sync_state === "new" ? "New" : le.sync_state === "modified" ? "Modified" : le.sync_state === "synced" ? "Synced" : le.sync_state;
      return le.has_path_sync_issues && le.models_needing_path_sync && le.models_needing_path_sync > 0 ? `${le.models_needing_path_sync} model path${le.models_needing_path_sync > 1 ? "s" : ""} need${le.models_needing_path_sync === 1 ? "s" : ""} sync` : W || "Unknown";
    }
    return at(I), (le, W) => (n(), i(j, null, [
      S(Gt, null, {
        header: h(() => [
          S(jt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          S(Lo, {
            modelValue: m.value,
            "onUpdate:modelValue": W[0] || (W[0] = (ee) => m.value = ee),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (n(), D(Ns, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (n(), D(Us, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            T.value.length ? (n(), D(ht, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: h(() => [
                (n(!0), i(j, null, ge(T.value, (ee) => (n(), D(Mt, {
                  key: ee.name,
                  status: "broken"
                }, {
                  icon: h(() => [...W[7] || (W[7] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(d(ee.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(d(Q(ee)), 1)
                  ]),
                  actions: h(() => [
                    S(ve, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ae) => se(ee.name)
                    }, {
                      default: h(() => [...W[8] || (W[8] = [
                        b(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ve, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => N(ee.name)
                    }, {
                      default: h(() => [...W[9] || (W[9] = [
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
            P.value.length ? (n(), D(ht, {
              key: 1,
              title: "NEW",
              count: P.value.length
            }, {
              default: h(() => [
                (n(!0), i(j, null, ge(P.value, (ee) => (n(), D(Mt, {
                  key: ee.name,
                  status: ee.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    b(d(ee.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    b(d(ee.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(d(oe(ee)), 1)
                  ]),
                  actions: h(() => [
                    S(ve, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => N(ee.name)
                    }, {
                      default: h(() => [...W[10] || (W[10] = [
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
            R.value.length ? (n(), D(ht, {
              key: 2,
              title: "MODIFIED",
              count: R.value.length
            }, {
              default: h(() => [
                (n(!0), i(j, null, ge(R.value, (ee) => (n(), D(Mt, {
                  key: ee.name,
                  status: ee.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...W[11] || (W[11] = [
                    b("⚡", -1)
                  ])]),
                  title: h(() => [
                    b(d(ee.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(d(oe(ee)), 1)
                  ]),
                  actions: h(() => [
                    S(ve, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => N(ee.name)
                    }, {
                      default: h(() => [...W[12] || (W[12] = [
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
            U.value.length ? (n(), D(ht, {
              key: 3,
              title: "SYNCED",
              count: U.value.length,
              collapsible: !0,
              "initially-expanded": f.value,
              onToggle: W[2] || (W[2] = (ee) => f.value = ee)
            }, {
              default: h(() => [
                (n(!0), i(j, null, ge(B.value, (ee) => (n(), D(Mt, {
                  key: ee.name,
                  status: ee.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    b(d(ee.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    b(d(ee.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(d(oe(ee)), 1)
                  ]),
                  actions: h(() => [
                    S(ve, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => N(ee.name)
                    }, {
                      default: h(() => [...W[13] || (W[13] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && U.value.length > 5 ? (n(), D(ve, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: W[1] || (W[1] = (ee) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    b(" View all " + d(U.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            O.value.length ? y("", !0) : (n(), D(vs, {
              key: 4,
              icon: "📭",
              message: m.value ? `No workflows match '${m.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && g.value ? (n(), D(Jp, {
        key: 0,
        "workflow-name": g.value,
        onClose: W[3] || (W[3] = (ee) => p.value = !1),
        onResolve: W[4] || (W[4] = (ee) => se(g.value)),
        onRefresh: W[5] || (W[5] = (ee) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      _.value && g.value ? (n(), D(Ew, {
        key: 1,
        "workflow-name": g.value,
        onClose: Z,
        onInstall: te,
        onRefresh: W[6] || (W[6] = (ee) => a("refresh")),
        onRestart: X
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), Zw = /* @__PURE__ */ we(Xw, [["__scopeId", "data-v-06d0e772"]]), e_ = /* @__PURE__ */ he({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Pe(["summary-bar", e.variant])
    }, [
      ot(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), hn = /* @__PURE__ */ we(e_, [["__scopeId", "data-v-ccb7816e"]]), t_ = {
  key: 0,
  class: "model-details"
}, s_ = { class: "detail-section" }, o_ = { class: "detail-row" }, n_ = { class: "detail-value mono" }, a_ = { class: "detail-row" }, l_ = { class: "detail-value mono" }, i_ = { class: "detail-row" }, r_ = { class: "detail-value mono" }, c_ = { class: "detail-row" }, u_ = { class: "detail-value" }, d_ = { class: "detail-row" }, m_ = { class: "detail-value" }, f_ = { class: "detail-row" }, v_ = { class: "detail-value" }, p_ = { class: "detail-section" }, g_ = { class: "section-header" }, h_ = {
  key: 0,
  class: "locations-list"
}, y_ = { class: "location-path mono" }, w_ = {
  key: 0,
  class: "location-modified"
}, __ = ["onClick"], k_ = {
  key: 1,
  class: "empty-state"
}, b_ = { class: "detail-section" }, $_ = { class: "section-header" }, C_ = {
  key: 0,
  class: "sources-list"
}, x_ = { class: "source-type" }, S_ = ["href"], I_ = ["disabled", "onClick"], E_ = {
  key: 1,
  class: "empty-state"
}, T_ = { class: "add-source-form" }, P_ = ["disabled"], M_ = {
  key: 2,
  class: "source-error"
}, R_ = {
  key: 3,
  class: "source-success"
}, D_ = /* @__PURE__ */ he({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: a, addModelSource: l, removeModelSource: r, openFileLocation: c } = rt(), u = k(null), m = k(!0), f = k(null), v = k(""), p = k(!1), _ = k(null), g = k(null), w = k(null), C = k(null);
    let $ = null;
    function x(I, N = "success", se = 2e3) {
      $ && clearTimeout($), C.value = { message: I, type: N }, $ = setTimeout(() => {
        C.value = null;
      }, se);
    }
    function O(I) {
      if (!I) return "Unknown";
      const N = 1024 * 1024 * 1024, se = 1024 * 1024;
      return I >= N ? `${(I / N).toFixed(1)} GB` : I >= se ? `${(I / se).toFixed(0)} MB` : `${(I / 1024).toFixed(0)} KB`;
    }
    function T(I) {
      navigator.clipboard.writeText(I), x("Copied to clipboard!");
    }
    async function P(I) {
      try {
        await c(I), x("Opening file location...");
      } catch {
        x("Failed to open location", "error");
      }
    }
    async function R() {
      if (!(!v.value.trim() || !u.value)) {
        p.value = !0, g.value = null, w.value = null;
        try {
          await l(u.value.hash, v.value.trim()), w.value = "Source added successfully!", v.value = "", await B();
        } catch (I) {
          g.value = I instanceof Error ? I.message : "Failed to add source";
        } finally {
          p.value = !1;
        }
      }
    }
    async function U(I) {
      if (u.value) {
        _.value = I, g.value = null, w.value = null;
        try {
          await r(u.value.hash, I), x("Source removed"), await B();
        } catch (N) {
          g.value = N instanceof Error ? N.message : "Failed to remove source";
        } finally {
          _.value = null;
        }
      }
    }
    async function B() {
      m.value = !0, f.value = null;
      try {
        u.value = await a(o.identifier);
      } catch (I) {
        f.value = I instanceof Error ? I.message : "Failed to load model details";
      } finally {
        m.value = !1;
      }
    }
    return at(B), (I, N) => {
      var se;
      return n(), i(j, null, [
        S($t, {
          title: `Model Details: ${((se = u.value) == null ? void 0 : se.filename) || "Loading..."}`,
          size: "lg",
          loading: m.value,
          error: f.value,
          onClose: N[5] || (N[5] = (te) => I.$emit("close"))
        }, {
          body: h(() => {
            var te, Z, X, G;
            return [
              u.value ? (n(), i("div", t_, [
                t("section", s_, [
                  t("div", o_, [
                    N[6] || (N[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", n_, d(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: N[0] || (N[0] = (Q) => T(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", a_, [
                    N[7] || (N[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", l_, d(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: N[1] || (N[1] = (Q) => T(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", i_, [
                    N[8] || (N[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", r_, d(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: N[2] || (N[2] = (Q) => T(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", c_, [
                    N[9] || (N[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", u_, d(O(u.value.size)), 1)
                  ]),
                  t("div", d_, [
                    N[10] || (N[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", m_, d(u.value.category), 1)
                  ]),
                  t("div", f_, [
                    N[11] || (N[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", v_, d(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", p_, [
                  t("h4", g_, "Locations (" + d(((te = u.value.locations) == null ? void 0 : te.length) || 0) + ")", 1),
                  (Z = u.value.locations) != null && Z.length ? (n(), i("div", h_, [
                    (n(!0), i(j, null, ge(u.value.locations, (Q, oe) => (n(), i("div", {
                      key: oe,
                      class: "location-item"
                    }, [
                      t("span", y_, d(Q.path), 1),
                      Q.modified ? (n(), i("span", w_, "Modified: " + d(Q.modified), 1)) : y("", !0),
                      Q.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (le) => P(Q.path)
                      }, " Open File Location ", 8, __)) : y("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", k_, "No locations found"))
                ]),
                t("section", b_, [
                  t("h4", $_, "Download Sources (" + d(((X = u.value.sources) == null ? void 0 : X.length) || 0) + ")", 1),
                  (G = u.value.sources) != null && G.length ? (n(), i("div", C_, [
                    (n(!0), i(j, null, ge(u.value.sources, (Q, oe) => (n(), i("div", {
                      key: oe,
                      class: "source-item"
                    }, [
                      t("span", x_, d(Q.type) + ":", 1),
                      t("a", {
                        href: Q.url,
                        target: "_blank",
                        class: "source-url"
                      }, d(Q.url), 9, S_),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: _.value === Q.url,
                        onClick: (le) => U(Q.url)
                      }, d(_.value === Q.url ? "..." : "×"), 9, I_)
                    ]))), 128))
                  ])) : (n(), i("div", E_, " No download sources configured ")),
                  t("div", T_, [
                    nt(t("input", {
                      "onUpdate:modelValue": N[3] || (N[3] = (Q) => v.value = Q),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Qt, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || p.value,
                      onClick: R
                    }, d(p.value ? "Adding..." : "Add Source"), 9, P_)
                  ]),
                  g.value ? (n(), i("p", M_, d(g.value), 1)) : y("", !0),
                  w.value ? (n(), i("p", R_, d(w.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            t("button", {
              class: "btn-secondary",
              onClick: N[4] || (N[4] = (te) => I.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (n(), D(Dt, { to: "body" }, [
          C.value ? (n(), i("div", {
            key: 0,
            class: Pe(["toast", C.value.type])
          }, d(C.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), vl = /* @__PURE__ */ we(D_, [["__scopeId", "data-v-f15cbb56"]]), L_ = ["disabled"], N_ = { class: "dropdown-value" }, U_ = ["onClick"], A_ = {
  key: 0,
  class: "dropdown-error"
}, O_ = /* @__PURE__ */ he({
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
    const o = e, a = s, l = k(!1), r = k(null), c = k(null), u = k({});
    function m(x) {
      return typeof x == "string" ? x : x.value;
    }
    function f(x) {
      return typeof x == "string" ? x : x.label;
    }
    const v = A(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const x = o.options.find((O) => m(O) === o.modelValue);
      return x ? f(x) : String(o.modelValue);
    });
    function p() {
      o.disabled || (l.value = !l.value);
    }
    function _() {
      l.value = !1;
    }
    function g(x) {
      a("update:modelValue", m(x)), _();
    }
    function w() {
      if (!r.value) return;
      const x = r.value.getBoundingClientRect(), O = window.innerHeight, T = O - x.bottom, P = x.top, R = Math.min(300, o.options.length * 36 + 8), U = T < R && P > T;
      u.value = {
        position: "fixed",
        left: `${x.left}px`,
        width: `${x.width}px`,
        maxHeight: "300px",
        ...U ? { bottom: `${O - x.top + 4}px` } : { top: `${x.bottom + 4}px` }
      };
    }
    Ct(l, async (x) => {
      x && (await Et(), w());
    });
    function C() {
      l.value && w();
    }
    function $(x) {
      x.key === "Escape" && l.value && _();
    }
    return at(() => {
      window.addEventListener("scroll", C, !0), window.addEventListener("keydown", $);
    }), Ys(() => {
      window.removeEventListener("scroll", C, !0), window.removeEventListener("keydown", $);
    }), (x, O) => (n(), i("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      t("button", {
        type: "button",
        class: Pe(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: p
      }, [
        t("span", N_, d(v.value), 1),
        O[0] || (O[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, L_),
      (n(), D(Dt, { to: "body" }, [
        l.value ? (n(), i("div", {
          key: 0,
          class: "dropdown-overlay",
          onClick: _
        })) : y("", !0),
        l.value ? (n(), i("div", {
          key: 1,
          ref_key: "menuRef",
          ref: c,
          class: "dropdown-menu",
          style: Jt(u.value)
        }, [
          (n(!0), i(j, null, ge(e.options, (T) => (n(), i("div", {
            key: m(T),
            class: Pe(["dropdown-option", { selected: m(T) === e.modelValue }]),
            onClick: (P) => g(T)
          }, d(f(T)), 11, U_))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (n(), i("span", A_, d(e.error), 1)) : y("", !0)
    ], 512));
  }
}), z_ = /* @__PURE__ */ we(O_, [["__scopeId", "data-v-857e085b"]]);
function F_(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function V_(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
  } catch {
    return { kind: "unknown" };
  }
  if (!F_(o.hostname)) return { kind: "unknown" };
  const a = o.pathname.replace(/^\/+/, "").split("/").filter(Boolean);
  if (a[0] === "datasets" || a[0] === "spaces") return { kind: "unknown" };
  if (a.length < 2) return { kind: "unknown" };
  const l = `${a[0]}/${a[1]}`, r = a.slice(2);
  if (r.length === 0)
    return { kind: "repo", repoId: l, revision: "main" };
  const c = r[0];
  if (c === "tree") {
    const u = r[1] || "main", m = r.slice(2).join("/");
    return { kind: "repo", repoId: l, revision: u, path: m || void 0 };
  }
  if (c === "resolve") {
    const u = r[1] || "main", m = r.slice(2).join("/");
    return m ? { kind: "file", repoId: l, revision: u, path: m } : { kind: "repo", repoId: l, revision: u };
  }
  if (c === "blob") {
    const u = r[1] || "main", m = r.slice(2).join("/");
    return m ? { kind: "file", repoId: l, revision: u, path: m } : { kind: "repo", repoId: l, revision: u };
  }
  return { kind: "repo", repoId: l, revision: "main" };
}
function B_(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function W_(e, s, o) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${B_(o)}`;
}
const G_ = { class: "hf-file-browser" }, j_ = { class: "browser-header" }, H_ = { class: "repo-info" }, K_ = { class: "repo-id" }, q_ = {
  key: 0,
  class: "revision-pill"
}, Y_ = {
  key: 0,
  class: "loading-state"
}, Q_ = {
  key: 1,
  class: "error-state"
}, J_ = { class: "toolbar" }, X_ = { class: "toolbar-actions" }, Z_ = { class: "file-list-container" }, ek = {
  key: 0,
  class: "file-list-header"
}, tk = ["checked", "indeterminate"], sk = { class: "sort-indicator" }, ok = { class: "sort-indicator" }, nk = {
  key: 1,
  class: "empty-state"
}, ak = {
  key: 2,
  class: "file-list"
}, lk = ["onClick"], ik = ["checked", "onChange"], rk = { class: "file-path" }, ck = { class: "file-size" }, uk = { class: "destination-section" }, dk = { class: "destination-row" }, mk = {
  key: 0,
  class: "path-separator"
}, fk = { class: "action-bar" }, vk = { class: "summary-info" }, pk = { class: "summary-count" }, gk = { class: "summary-size" }, hk = /* @__PURE__ */ he({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = rt(), c = k([]), u = k(/* @__PURE__ */ new Set()), m = k(!1), f = k(null), v = k(""), p = k(!1), _ = k("name"), g = k(!0), w = k(""), C = k(""), $ = k(""), x = k([]), O = k(!1);
    let T = !1;
    const P = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, R = A(() => {
      let V = c.value;
      if (o.initialPath) {
        const ie = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        V = V.filter((F) => F.path.startsWith(ie) || F.path === o.initialPath);
      }
      if (p.value && (V = V.filter((ie) => ie.is_model_file)), v.value.trim()) {
        const ie = v.value.toLowerCase();
        V = V.filter((F) => F.path.toLowerCase().includes(ie));
      }
      return V;
    }), U = A(() => {
      const V = [...R.value];
      return V.sort((ie, F) => {
        let L;
        return _.value === "name" ? L = ie.path.localeCompare(F.path) : L = ie.size - F.size, g.value ? L : -L;
      }), V;
    }), B = A(() => R.value.length === 0 ? !1 : R.value.every((V) => u.value.has(V.path))), I = A(() => R.value.some((V) => u.value.has(V.path))), N = A(() => {
      const V = x.value.map((ie) => ({
        label: ie,
        value: ie
      }));
      return V.push({ label: "Custom path...", value: "__custom__" }), V;
    }), se = A(() => w.value === "__custom__" ? $.value.trim().length > 0 : w.value.length > 0), te = A(() => {
      let V = 0;
      for (const ie of u.value) {
        const F = c.value.find((L) => L.path === ie);
        F && (V += F.size);
      }
      return V;
    });
    function Z(V) {
      if (V === 0) return "0 B";
      const ie = 1024 * 1024 * 1024, F = 1024 * 1024, L = 1024;
      return V >= ie ? `${(V / ie).toFixed(2)} GB` : V >= F ? `${(V / F).toFixed(1)} MB` : V >= L ? `${(V / L).toFixed(0)} KB` : `${V} B`;
    }
    function X(V) {
      const ie = V.match(P);
      return ie ? `${ie[1]}${ie[4]}` : null;
    }
    function G(V) {
      const ie = new Set(u.value), F = ie.has(V.path), L = V.shard_group || X(V.path);
      if (L) {
        const ne = c.value.filter((Ue) => (Ue.shard_group || X(Ue.path)) === L);
        F ? ne.forEach((Ue) => ie.delete(Ue.path)) : ne.forEach((Ue) => ie.add(Ue.path));
      } else
        F ? ie.delete(V.path) : ie.add(V.path);
      u.value = ie;
    }
    function Q() {
      const V = new Set(u.value);
      for (const ie of R.value)
        ie.is_model_file && V.add(ie.path);
      u.value = V;
    }
    function oe() {
      u.value = /* @__PURE__ */ new Set();
    }
    function le() {
      if (B.value) {
        const V = new Set(u.value);
        for (const ie of R.value)
          V.delete(ie.path);
        u.value = V;
      } else {
        const V = new Set(u.value);
        for (const ie of R.value)
          V.add(ie.path);
        u.value = V;
      }
    }
    function W(V) {
      _.value === V ? g.value = !g.value : (_.value = V, g.value = !0);
    }
    function ee(V) {
      const ie = V.split("/");
      return ie.length >= 2 ? ie[ie.length - 2] : null;
    }
    function ae() {
      if (O.value || u.value.size === 0) return;
      const V = /* @__PURE__ */ new Set();
      for (const L of u.value) {
        const ne = ee(L);
        ne && V.add(ne.toLowerCase());
      }
      if (V.size !== 1) return;
      const ie = [...V][0], F = x.value.find(
        (L) => L.toLowerCase() === ie
      );
      F && F !== w.value && (T = !0, w.value = F, Et(() => {
        T = !1;
      }));
    }
    function Ne() {
      return w.value === "__custom__" ? $.value.trim() : C.value.trim() ? `${w.value}/${C.value.trim()}` : w.value;
    }
    function Ke() {
      if (u.value.size === 0 || !se.value) return;
      const V = Ne(), ie = [];
      for (const F of u.value) {
        const L = c.value.find((ne) => ne.path === F);
        L && ie.push({
          url: W_(o.repoId, o.revision, L.path),
          destination: V,
          filename: L.path.split("/").pop() || L.path
        });
      }
      a("queue", ie);
    }
    async function je() {
      if (o.repoId) {
        m.value = !0, f.value = null;
        try {
          const V = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, ie = await l(V);
          if (c.value = ie.files, o.preselectedFile) {
            const F = c.value.find((L) => L.path === o.preselectedFile);
            F && G(F);
          }
        } catch (V) {
          f.value = V instanceof Error ? V.message : "Failed to load repository";
        } finally {
          m.value = !1;
        }
      }
    }
    async function $e() {
      try {
        const V = await r();
        x.value = V.directories, V.directories.length > 0 && !w.value && (w.value = V.directories[0]);
      } catch {
        x.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], w.value || (w.value = "checkpoints");
      }
    }
    return Ct(() => [o.repoId, o.revision], () => {
      o.repoId && je();
    }, { immediate: !1 }), Ct(() => o.repoId, () => {
      O.value = !1;
    }), Ct(u, () => {
      ae();
    }, { deep: !0 }), Ct(x, () => {
      x.value.length > 0 && u.value.size > 0 && ae();
    }), Ct(w, (V, ie) => {
      T || ie === "" || (O.value = !0);
    }), at(() => {
      je(), $e();
    }), (V, ie) => (n(), i("div", G_, [
      t("div", j_, [
        t("button", {
          class: "back-btn",
          onClick: ie[0] || (ie[0] = (F) => V.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", H_, [
          t("span", K_, d(e.repoId), 1),
          e.revision ? (n(), i("span", q_, d(e.revision), 1)) : y("", !0)
        ])
      ]),
      m.value ? (n(), i("div", Y_, " Loading repository files... ")) : f.value ? (n(), i("div", Q_, d(f.value), 1)) : (n(), i(j, { key: 2 }, [
        t("div", J_, [
          S(zt, {
            modelValue: v.value,
            "onUpdate:modelValue": ie[1] || (ie[1] = (F) => v.value = F),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", X_, [
            t("button", {
              class: Pe(["toggle-btn", { active: p.value }]),
              onClick: ie[2] || (ie[2] = (F) => p.value = !p.value)
            }, d(p.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: Q
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: oe
            }, "Clear")
          ])
        ]),
        t("div", Z_, [
          R.value.length > 0 ? (n(), i("div", ek, [
            t("input", {
              type: "checkbox",
              checked: B.value,
              indeterminate: I.value && !B.value,
              class: "file-checkbox",
              onChange: le
            }, null, 40, tk),
            t("span", {
              class: "header-name",
              onClick: ie[3] || (ie[3] = (F) => W("name"))
            }, [
              ie[9] || (ie[9] = b(" Name ", -1)),
              t("span", sk, d(_.value === "name" ? g.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: ie[4] || (ie[4] = (F) => W("size"))
            }, [
              ie[10] || (ie[10] = b(" Size ", -1)),
              t("span", ok, d(_.value === "size" ? g.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          R.value.length === 0 ? (n(), i("div", nk, d(c.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", ak, [
            (n(!0), i(j, null, ge(U.value, (F) => (n(), i("div", {
              key: F.path,
              class: Pe(["file-item", { selected: u.value.has(F.path) }]),
              onClick: (L) => G(F)
            }, [
              t("input", {
                type: "checkbox",
                checked: u.value.has(F.path),
                class: "file-checkbox",
                onClick: ie[5] || (ie[5] = kt(() => {
                }, ["stop"])),
                onChange: (L) => G(F)
              }, null, 40, ik),
              t("span", rk, d(F.path), 1),
              t("span", ck, d(Z(F.size)), 1)
            ], 10, lk))), 128))
          ]))
        ]),
        t("div", uk, [
          ie[11] || (ie[11] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", dk, [
            S(z_, {
              modelValue: w.value,
              "onUpdate:modelValue": ie[6] || (ie[6] = (F) => w.value = F),
              options: N.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            w.value !== "__custom__" ? (n(), i("span", mk, "/")) : y("", !0),
            w.value !== "__custom__" ? (n(), D(zt, {
              key: 1,
              modelValue: C.value,
              "onUpdate:modelValue": ie[7] || (ie[7] = (F) => C.value = F),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : y("", !0)
          ]),
          w.value === "__custom__" ? (n(), D(zt, {
            key: 0,
            modelValue: $.value,
            "onUpdate:modelValue": ie[8] || (ie[8] = (F) => $.value = F),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : y("", !0)
        ]),
        t("div", fk, [
          t("div", vk, [
            t("span", pk, d(u.value.size) + " file(s) selected", 1),
            t("span", gk, d(Z(te.value)), 1)
          ]),
          S(De, {
            variant: "primary",
            disabled: u.value.size === 0 || !se.value,
            onClick: Ke
          }, {
            default: h(() => [...ie[12] || (ie[12] = [
              b(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), yk = /* @__PURE__ */ we(hk, [["__scopeId", "data-v-183acebc"]]), wk = { class: "token-config-modal" }, _k = { class: "provider-info" }, kk = { class: "provider-icon" }, bk = { class: "provider-name" }, $k = {
  key: 0,
  class: "current-token"
}, Ck = { class: "mask" }, xk = { class: "token-input-section" }, Sk = { class: "input-label" }, Ik = { class: "help-text" }, Ek = ["href"], Tk = { class: "modal-actions" }, Pk = /* @__PURE__ */ he({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: s }) {
    const o = e, a = s, { updateConfig: l } = rt(), r = k(""), c = k(!1), u = k(!1), m = A(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), f = A(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), v = A(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), p = A(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), _ = A(
      () => o.provider === "huggingface" ? "Get your HuggingFace token →" : "Get your CivitAI API key →"
    );
    async function g() {
      if (r.value.trim()) {
        c.value = !0;
        try {
          const C = o.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l(C), r.value = "", a("saved"), a("close");
        } catch (C) {
          console.error("Failed to save token:", C);
        } finally {
          c.value = !1;
        }
      }
    }
    async function w() {
      u.value = !0;
      try {
        const C = o.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l(C), a("cleared"), a("close");
      } catch (C) {
        console.error("Failed to clear token:", C);
      } finally {
        u.value = !1;
      }
    }
    return (C, $) => (n(), D($t, {
      title: "Configure API Token",
      onClose: $[2] || ($[2] = (x) => C.$emit("close"))
    }, {
      body: h(() => [
        t("div", wk, [
          t("div", _k, [
            t("span", kk, d(f.value), 1),
            t("span", bk, d(m.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", $k, [
            $[4] || ($[4] = t("span", { class: "label" }, "Current token:", -1)),
            t("span", Ck, d(e.currentTokenMask), 1),
            S(De, {
              variant: "danger",
              size: "sm",
              onClick: w,
              loading: u.value
            }, {
              default: h(() => [...$[3] || ($[3] = [
                b(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0),
          t("div", xk, [
            t("label", Sk, d(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            S(zt, {
              modelValue: r.value,
              "onUpdate:modelValue": $[0] || ($[0] = (x) => r.value = x),
              type: "password",
              placeholder: v.value
            }, null, 8, ["modelValue", "placeholder"]),
            t("div", Ik, [
              t("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, d(_.value), 9, Ek)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        t("div", Tk, [
          S(De, {
            variant: "secondary",
            onClick: $[1] || ($[1] = (x) => C.$emit("close"))
          }, {
            default: h(() => [...$[5] || ($[5] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          S(De, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: c.value,
            onClick: g
          }, {
            default: h(() => [...$[6] || ($[6] = [
              b(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }));
  }
}), Mk = /* @__PURE__ */ we(Pk, [["__scopeId", "data-v-0687d0ce"]]), Rk = { class: "huggingface-tab" }, Dk = {
  key: 0,
  class: "search-section"
}, Lk = { class: "search-header" }, Nk = { class: "search-bar" }, Uk = {
  key: 1,
  class: "search-results"
}, Ak = {
  key: 0,
  class: "loading-state"
}, Ok = {
  key: 1,
  class: "error-state"
}, zk = {
  key: 2,
  class: "results-list"
}, Fk = ["onClick"], Vk = { class: "repo-header" }, Bk = { class: "repo-id" }, Wk = { class: "repo-stats" }, Gk = {
  class: "stat",
  title: "Downloads"
}, jk = {
  class: "stat",
  title: "Likes"
}, Hk = {
  key: 0,
  class: "repo-desc"
}, Kk = {
  key: 1,
  class: "repo-tags"
}, qk = {
  key: 3,
  class: "empty-state"
}, Yk = {
  key: 4,
  class: "hint-state"
}, Qk = /* @__PURE__ */ he({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s, getConfig: o } = rt(), a = k("search"), l = k(""), r = k([]), c = k(!1), u = k(null), m = k(!1), f = k(null), v = k("main"), p = k(), _ = k(), g = k(!1), w = k(null), C = A(() => {
      if (!u.value) return !1;
      const B = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || B.includes("authentication") || B.includes("unauthorized");
    });
    function $(B) {
      return B >= 1e6 ? `${(B / 1e6).toFixed(1)}M` : B >= 1e3 ? `${(B / 1e3).toFixed(1)}K` : String(B);
    }
    async function x() {
      const B = l.value.trim();
      if (!B) return;
      u.value = null;
      const I = V_(B);
      if (I.kind === "file" && I.repoId && I.path) {
        f.value = I.repoId, v.value = I.revision || "main";
        const N = I.path.split("/");
        N.length > 1 ? p.value = N.slice(0, -1).join("/") : p.value = void 0, _.value = I.path, a.value = "browse";
        return;
      }
      if (I.kind === "repo" && I.repoId) {
        f.value = I.repoId, v.value = I.revision || "main", p.value = I.path, _.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(B) && !B.includes("://")) {
        f.value = B, v.value = "main", p.value = void 0, _.value = void 0, a.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const N = await s(B);
        r.value = N.results, m.value = !0;
      } catch (N) {
        u.value = N instanceof Error ? N.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function O(B) {
      f.value = B, v.value = "main", p.value = void 0, _.value = void 0, a.value = "browse";
    }
    function T() {
      a.value = "search", f.value = null, p.value = void 0, _.value = void 0;
    }
    async function P() {
      try {
        const B = await o();
        w.value = B.huggingface_token || null;
      } catch (B) {
        console.error("Failed to load config:", B);
      }
    }
    function R() {
      P(), C.value && l.value && x();
    }
    function U() {
      w.value = null;
    }
    return at(P), (B, I) => (n(), i("div", Rk, [
      a.value === "search" ? (n(), i("div", Dk, [
        t("div", Lk, [
          t("div", Nk, [
            S(zt, {
              modelValue: l.value,
              "onUpdate:modelValue": I[0] || (I[0] = (N) => l.value = N),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: os(x, ["enter"])
            }, null, 8, ["modelValue"]),
            S(De, {
              variant: "primary",
              onClick: x,
              loading: c.value
            }, {
              default: h(() => [...I[5] || (I[5] = [
                b(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          S(De, {
            variant: "secondary",
            size: "sm",
            onClick: I[1] || (I[1] = (N) => g.value = !0)
          }, {
            default: h(() => [
              b(d(w.value ? `Token: ${w.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      a.value === "search" ? (n(), i("div", Uk, [
        c.value ? (n(), i("div", Ak, " Searching HuggingFace... ")) : u.value ? (n(), i("div", Ok, [
          t("p", null, d(u.value), 1),
          C.value ? (n(), D(De, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: I[2] || (I[2] = (N) => g.value = !0)
          }, {
            default: h(() => [...I[6] || (I[6] = [
              b(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (n(), i("div", zk, [
          (n(!0), i(j, null, ge(r.value, (N) => (n(), i("div", {
            key: N.repo_id,
            class: "repo-card",
            onClick: (se) => O(N.repo_id)
          }, [
            t("div", Vk, [
              t("span", Bk, d(N.repo_id), 1),
              t("div", Wk, [
                t("span", Gk, [
                  I[7] || (I[7] = t("span", { class: "stat-icon" }, "↓", -1)),
                  b(" " + d($(N.downloads)), 1)
                ]),
                t("span", jk, [
                  I[8] || (I[8] = t("span", { class: "stat-icon" }, "★", -1)),
                  b(" " + d($(N.likes)), 1)
                ])
              ])
            ]),
            N.description ? (n(), i("p", Hk, d(N.description), 1)) : y("", !0),
            N.tags.length > 0 ? (n(), i("div", Kk, [
              (n(!0), i(j, null, ge(N.tags.slice(0, 5), (se) => (n(), i("span", {
                key: se,
                class: "tag"
              }, d(se), 1))), 128))
            ])) : y("", !0)
          ], 8, Fk))), 128))
        ])) : m.value ? (n(), i("div", qk, " No repositories found ")) : (n(), i("div", Yk, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), D(yk, {
        key: 2,
        "repo-id": f.value,
        revision: v.value,
        "initial-path": p.value,
        "preselected-file": _.value,
        onBack: T,
        onQueue: I[3] || (I[3] = (N) => B.$emit("queue", N))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      g.value ? (n(), D(Mk, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": w.value,
        onClose: I[4] || (I[4] = (N) => g.value = !1),
        onSaved: R,
        onCleared: U
      }, null, 8, ["current-token-mask"])) : y("", !0)
    ]));
  }
}), Jk = /* @__PURE__ */ we(Qk, [["__scopeId", "data-v-e13209bf"]]), Xk = { class: "civitai-tab" }, Zk = /* @__PURE__ */ he({
  __name: "CivitaiTab",
  setup(e) {
    return (s, o) => (n(), i("div", Xk, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), eb = /* @__PURE__ */ we(Zk, [["__scopeId", "data-v-44948051"]]), tb = { class: "direct-url-tab" }, sb = { class: "input-group" }, ob = { class: "input-group" }, nb = {
  key: 0,
  class: "error"
}, ab = { class: "actions" }, lb = /* @__PURE__ */ he({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: s }) {
    const o = s, a = k(""), l = k(""), r = A(() => {
      const m = l.value.trim();
      if (!m) return null;
      const f = m.replace(/\\/g, "/").split("/").pop() || "";
      return f.includes(".") && !f.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), c = A(() => a.value.trim() !== "" && l.value.trim() !== "" && !r.value), u = () => {
      if (!c.value) return;
      const m = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: a.value.trim(),
        targetPath: l.value.trim(),
        filename: m
      }]), a.value = "", l.value = "";
    };
    return (m, f) => (n(), i("div", tb, [
      t("div", sb, [
        f[2] || (f[2] = t("label", null, "Download URL", -1)),
        S(zt, {
          modelValue: a.value,
          "onUpdate:modelValue": f[0] || (f[0] = (v) => a.value = v),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", ob, [
        f[3] || (f[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        S(zt, {
          modelValue: l.value,
          "onUpdate:modelValue": f[1] || (f[1] = (v) => l.value = v),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (n(), i("p", nb, d(r.value), 1)) : y("", !0)
      ]),
      f[5] || (f[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", ab, [
        S(De, {
          variant: "primary",
          disabled: !c.value,
          onClick: u
        }, {
          default: h(() => [...f[4] || (f[4] = [
            b(" Queue Download ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), ib = /* @__PURE__ */ we(lb, [["__scopeId", "data-v-01def7aa"]]), rb = { class: "download-modal" }, cb = { class: "tab-bar" }, ub = ["onClick"], db = { class: "tab-content" }, mb = /* @__PURE__ */ he({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = s, { addToQueue: a } = Do(), l = [
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = k("huggingface");
    function c(f) {
      a(f.map((v) => ({
        workflow: "__manual__",
        filename: v.filename,
        url: v.url,
        targetPath: v.destination ? `${v.destination}/${v.filename}` : v.filename
      }))), o("close");
    }
    function u(f) {
      a(f.map((v) => ({
        workflow: "__manual__",
        filename: v.filename,
        url: v.url,
        targetPath: v.targetPath
      }))), o("close");
    }
    function m() {
      o("close");
    }
    return (f, v) => e.show ? (n(), D($t, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: m
    }, {
      body: h(() => [
        t("div", rb, [
          t("div", cb, [
            (n(), i(j, null, ge(l, (p) => t("button", {
              key: p.id,
              class: Pe(["tab-btn", { active: r.value === p.id }]),
              onClick: (_) => r.value = p.id
            }, d(p.icon) + " " + d(p.label), 11, ub)), 64))
          ]),
          t("div", db, [
            r.value === "huggingface" ? (n(), D(Jk, {
              key: 0,
              onQueue: c
            })) : r.value === "civitai" ? (n(), D(eb, { key: 1 })) : r.value === "direct" ? (n(), D(ib, {
              key: 2,
              onQueue: u
            })) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        S(De, {
          variant: "secondary",
          onClick: m
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
}), Fr = /* @__PURE__ */ we(mb, [["__scopeId", "data-v-90a9f401"]]), fb = /* @__PURE__ */ he({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: a, getStatus: l } = rt(), r = k([]), c = k([]), u = k("production"), m = k(!1), f = k(null), v = k(""), p = k(!1), _ = k(null), g = k(!1);
    function w() {
      p.value = !1, o("navigate", "model-index");
    }
    const C = A(
      () => r.value.reduce((I, N) => I + (N.size || 0), 0)
    ), $ = A(() => {
      if (!v.value.trim()) return r.value;
      const I = v.value.toLowerCase();
      return r.value.filter((N) => N.filename.toLowerCase().includes(I));
    }), x = A(() => {
      if (!v.value.trim()) return c.value;
      const I = v.value.toLowerCase();
      return c.value.filter((N) => N.filename.toLowerCase().includes(I));
    }), O = A(() => {
      const I = {};
      for (const se of $.value) {
        const te = se.type || "other";
        I[te] || (I[te] = []), I[te].push(se);
      }
      const N = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(I).sort(([se], [te]) => {
        const Z = N.indexOf(se), X = N.indexOf(te);
        return Z >= 0 && X >= 0 ? Z - X : Z >= 0 ? -1 : X >= 0 ? 1 : se.localeCompare(te);
      }).map(([se, te]) => ({ type: se, models: te }));
    });
    function T(I) {
      if (!I) return "Unknown";
      const N = I / (1024 * 1024);
      return N >= 1024 ? `${(N / 1024).toFixed(1)} GB` : `${N.toFixed(0)} MB`;
    }
    function P(I) {
      _.value = I.hash || I.filename;
    }
    function R(I) {
      o("navigate", "model-index");
    }
    function U(I) {
      alert(`Download functionality not yet implemented for ${I}`);
    }
    async function B() {
      m.value = !0, f.value = null;
      try {
        const I = await a();
        r.value = I, c.value = [];
        const N = await l();
        u.value = N.environment || "production";
      } catch (I) {
        f.value = I instanceof Error ? I.message : "Failed to load models";
      } finally {
        m.value = !1;
      }
    }
    return at(B), (I, N) => (n(), i(j, null, [
      S(Gt, null, {
        header: h(() => [
          S(jt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: N[1] || (N[1] = (se) => p.value = !0)
          }, {
            actions: h(() => [
              S(ve, {
                variant: "primary",
                size: "sm",
                onClick: N[0] || (N[0] = (se) => g.value = !0)
              }, {
                default: h(() => [...N[6] || (N[6] = [
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
          S(Lo, {
            modelValue: v.value,
            "onUpdate:modelValue": N[2] || (N[2] = (se) => v.value = se),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value ? (n(), D(Ns, {
            key: 0,
            message: "Loading environment models..."
          })) : f.value ? (n(), D(Us, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: B
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            r.value.length ? (n(), D(hn, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + d(r.value.length) + " models • " + d(T(C.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(j, null, ge(O.value, (se) => (n(), D(ht, {
              key: se.type,
              title: se.type.toUpperCase(),
              count: se.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(j, null, ge(se.models, (te) => (n(), D(Mt, {
                  key: te.hash || te.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...N[7] || (N[7] = [
                    b("📦", -1)
                  ])]),
                  title: h(() => [
                    b(d(te.filename), 1)
                  ]),
                  subtitle: h(() => [
                    b(d(T(te.size)), 1)
                  ]),
                  details: h(() => [
                    S(_t, {
                      label: "Used by:",
                      value: (te.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    S(_t, {
                      label: "Path:",
                      value: te.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(ve, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Z) => P(te)
                    }, {
                      default: h(() => [...N[8] || (N[8] = [
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
            x.value.length ? (n(), D(ht, {
              key: 1,
              title: "MISSING",
              count: x.value.length
            }, {
              default: h(() => [
                (n(!0), i(j, null, ge(x.value, (se) => (n(), D(Mt, {
                  key: se.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...N[9] || (N[9] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(d(se.filename), 1)
                  ]),
                  subtitle: h(() => [...N[10] || (N[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var te;
                    return [
                      S(_t, {
                        label: "Required by:",
                        value: ((te = se.workflow_names) == null ? void 0 : te.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    S(ve, {
                      variant: "primary",
                      size: "sm",
                      onClick: (te) => U(se.filename)
                    }, {
                      default: h(() => [...N[11] || (N[11] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ve, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => R(se.filename)
                    }, {
                      default: h(() => [...N[12] || (N[12] = [
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
            !$.value.length && !x.value.length ? (n(), D(vs, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      S(ps, {
        show: p.value,
        title: "About Environment Models",
        onClose: N[3] || (N[3] = (se) => p.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            N[13] || (N[13] = b(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + d(u.value) + '"', 1),
            N[14] || (N[14] = b(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          S(ve, {
            variant: "primary",
            onClick: w
          }, {
            default: h(() => [...N[15] || (N[15] = [
              b(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (n(), D(vl, {
        key: 0,
        identifier: _.value,
        onClose: N[4] || (N[4] = (se) => _.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      S(Fr, {
        show: g.value,
        onClose: N[5] || (N[5] = (se) => g.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), vb = /* @__PURE__ */ we(fb, [["__scopeId", "data-v-af3ca736"]]), pb = {
  key: 0,
  class: "indexing-progress"
}, gb = { class: "progress-info" }, hb = { class: "progress-label" }, yb = { class: "progress-count" }, wb = { class: "progress-bar" }, _b = { class: "modal-content" }, kb = { class: "modal-header" }, bb = { class: "modal-body" }, $b = { class: "input-group" }, Cb = { class: "current-path" }, xb = { class: "input-group" }, Sb = { class: "modal-footer" }, Ib = /* @__PURE__ */ he({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = rt(), c = s, u = k([]), m = k(!1), f = k(!1), v = k(null), p = k(""), _ = k(!1), g = k(null), w = k(!1), C = k(null), $ = k(""), x = k(!1), O = k(!1), T = k(null), P = A(
      () => u.value.reduce((X, G) => X + (G.size || 0), 0)
    ), R = A(() => {
      if (!p.value.trim()) return u.value;
      const X = p.value.toLowerCase();
      return u.value.filter((G) => {
        const Q = G, oe = G.sha256 || Q.sha256_hash || "";
        return G.filename.toLowerCase().includes(X) || oe.toLowerCase().includes(X);
      });
    }), U = A(() => {
      const X = {};
      for (const Q of R.value) {
        const oe = Q.type || "other";
        X[oe] || (X[oe] = []), X[oe].push(Q);
      }
      const G = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(X).sort(([Q], [oe]) => {
        const le = G.indexOf(Q), W = G.indexOf(oe);
        return le >= 0 && W >= 0 ? le - W : le >= 0 ? -1 : W >= 0 ? 1 : Q.localeCompare(oe);
      }).map(([Q, oe]) => ({ type: Q, models: oe }));
    });
    function B(X) {
      if (!X) return "Unknown";
      const G = 1024 * 1024 * 1024, Q = 1024 * 1024;
      return X >= G ? `${(X / G).toFixed(1)} GB` : X >= Q ? `${(X / Q).toFixed(0)} MB` : `${(X / 1024).toFixed(0)} KB`;
    }
    function I(X) {
      g.value = X.hash || X.filename;
    }
    async function N() {
      f.value = !0, v.value = null;
      try {
        const X = await a();
        await te(), X.changes > 0 && console.log(`Scan complete: ${X.changes} changes detected`);
      } catch (X) {
        v.value = X instanceof Error ? X.message : "Failed to scan models";
      } finally {
        f.value = !1;
      }
    }
    async function se() {
      if ($.value.trim()) {
        x.value = !0, v.value = null;
        try {
          const X = await r($.value.trim());
          C.value = X.path, w.value = !1, $.value = "", await te(), console.log(`Directory changed: ${X.models_indexed} models indexed`), c("refresh");
        } catch (X) {
          v.value = X instanceof Error ? X.message : "Failed to change directory";
        } finally {
          x.value = !1;
        }
      }
    }
    async function te() {
      m.value = !0, v.value = null;
      try {
        u.value = await o();
      } catch (X) {
        v.value = X instanceof Error ? X.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function Z() {
      try {
        const X = await l();
        C.value = X.path;
      } catch {
      }
    }
    return at(() => {
      te(), Z();
    }), (X, G) => (n(), i(j, null, [
      S(Gt, null, {
        header: h(() => [
          S(jt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: G[2] || (G[2] = (Q) => _.value = !0)
          }, {
            actions: h(() => [
              S(ve, {
                variant: "primary",
                size: "sm",
                disabled: f.value,
                onClick: N
              }, {
                default: h(() => [
                  b(d(f.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              S(ve, {
                variant: "primary",
                size: "sm",
                onClick: G[0] || (G[0] = (Q) => w.value = !0)
              }, {
                default: h(() => [...G[11] || (G[11] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              S(ve, {
                variant: "primary",
                size: "sm",
                onClick: G[1] || (G[1] = (Q) => O.value = !0)
              }, {
                default: h(() => [...G[12] || (G[12] = [
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
          T.value ? (n(), i("div", pb, [
            t("div", gb, [
              t("span", hb, d(T.value.message), 1),
              t("span", yb, d(T.value.current) + "/" + d(T.value.total), 1)
            ]),
            t("div", wb, [
              t("div", {
                class: "progress-fill",
                style: Jt({ width: `${T.value.current / T.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          S(Lo, {
            modelValue: p.value,
            "onUpdate:modelValue": G[3] || (G[3] = (Q) => p.value = Q),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value || T.value ? (n(), D(Ns, {
            key: 0,
            message: T.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (n(), D(Us, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: te
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            u.value.length ? (n(), D(hn, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + d(u.value.length) + " models • " + d(B(P.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(j, null, ge(U.value, (Q) => (n(), D(ht, {
              key: Q.type,
              title: Q.type.toUpperCase(),
              count: Q.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (n(!0), i(j, null, ge(Q.models, (oe) => (n(), D(Mt, {
                  key: oe.sha256 || oe.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...G[13] || (G[13] = [
                    b("📦", -1)
                  ])]),
                  title: h(() => [
                    b(d(oe.filename), 1)
                  ]),
                  subtitle: h(() => [
                    b(d(B(oe.size)), 1)
                  ]),
                  details: h(() => [
                    S(_t, {
                      label: "Hash:",
                      value: oe.hash ? oe.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(ve, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (le) => I(oe)
                    }, {
                      default: h(() => [...G[14] || (G[14] = [
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
            R.value.length ? y("", !0) : (n(), D(vs, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      S(ps, {
        show: _.value,
        title: "About Workspace Model Index",
        onClose: G[4] || (G[4] = (Q) => _.value = !1)
      }, {
        content: h(() => [...G[15] || (G[15] = [
          t("p", null, [
            b(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            b(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value ? (n(), D(vl, {
        key: 0,
        identifier: g.value,
        onClose: G[5] || (G[5] = (Q) => g.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (n(), D(Dt, { to: "body" }, [
        w.value ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: G[9] || (G[9] = kt((Q) => w.value = !1, ["self"]))
        }, [
          t("div", _b, [
            t("div", kb, [
              G[16] || (G[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: G[6] || (G[6] = (Q) => w.value = !1)
              }, "✕")
            ]),
            t("div", bb, [
              t("div", $b, [
                G[17] || (G[17] = t("label", null, "Current Directory", -1)),
                t("code", Cb, d(C.value || "Not set"), 1)
              ]),
              t("div", xb, [
                G[18] || (G[18] = t("label", null, "New Directory Path", -1)),
                S(zt, {
                  modelValue: $.value,
                  "onUpdate:modelValue": G[7] || (G[7] = (Q) => $.value = Q),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              G[19] || (G[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", Sb, [
              S(De, {
                variant: "secondary",
                onClick: G[8] || (G[8] = (Q) => w.value = !1)
              }, {
                default: h(() => [...G[20] || (G[20] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              S(De, {
                variant: "primary",
                disabled: !$.value.trim() || x.value,
                loading: x.value,
                onClick: se
              }, {
                default: h(() => [
                  b(d(x.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      S(Fr, {
        show: O.value,
        onClose: G[10] || (G[10] = (Q) => O.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Eb = /* @__PURE__ */ we(Ib, [["__scopeId", "data-v-3705114c"]]), Tb = { class: "node-details" }, Pb = { class: "status-row" }, Mb = {
  key: 0,
  class: "detail-row"
}, Rb = { class: "value" }, Db = { class: "detail-row" }, Lb = { class: "value" }, Nb = {
  key: 1,
  class: "detail-row"
}, Ub = { class: "value mono" }, Ab = {
  key: 2,
  class: "detail-row"
}, Ob = ["href"], zb = {
  key: 3,
  class: "detail-row"
}, Fb = { class: "value mono small" }, Vb = { class: "detail-row" }, Bb = {
  key: 0,
  class: "value"
}, Wb = {
  key: 1,
  class: "workflow-list"
}, Gb = /* @__PURE__ */ he({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = A(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = A(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = A(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, m) => (n(), D($t, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: m[1] || (m[1] = (f) => a("close"))
    }, {
      body: h(() => [
        t("div", Tb, [
          t("div", Pb, [
            m[2] || (m[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Pe(["status-badge", l.value])
            }, d(r.value), 3)
          ]),
          e.node.version ? (n(), i("div", Mb, [
            m[3] || (m[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", Rb, d(e.node.source === "development" ? "" : "v") + d(e.node.version), 1)
          ])) : y("", !0),
          t("div", Db, [
            m[4] || (m[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", Lb, d(c.value), 1)
          ]),
          e.node.registry_id ? (n(), i("div", Nb, [
            m[5] || (m[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", Ub, d(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (n(), i("div", Ab, [
            m[7] || (m[7] = t("span", { class: "label" }, "Repository:", -1)),
            t("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              b(d(e.node.repository) + " ", 1),
              m[6] || (m[6] = t("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                t("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, Ob)
          ])) : y("", !0),
          e.node.download_url ? (n(), i("div", zb, [
            m[8] || (m[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", Fb, d(e.node.download_url), 1)
          ])) : y("", !0),
          m[10] || (m[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", Vb, [
            m[9] || (m[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (n(), i("span", Bb, " Not used in any workflows ")) : (n(), i("div", Wb, [
              (n(!0), i(j, null, ge(e.node.used_in_workflows, (f) => (n(), i("span", {
                key: f,
                class: "workflow-tag"
              }, d(f), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        S(De, {
          variant: "secondary",
          onClick: m[0] || (m[0] = (f) => a("close"))
        }, {
          default: h(() => [...m[11] || (m[11] = [
            b(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), jb = /* @__PURE__ */ we(Gb, [["__scopeId", "data-v-b342f626"]]), Hb = { class: "dialog-message" }, Kb = {
  key: 0,
  class: "dialog-details"
}, qb = {
  key: 1,
  class: "dialog-warning"
}, Yb = /* @__PURE__ */ he({
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
    return (s, o) => (n(), D($t, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (a) => s.$emit("cancel"))
    }, {
      body: h(() => [
        t("p", Hb, d(e.message), 1),
        e.details && e.details.length ? (n(), i("div", Kb, [
          (n(!0), i(j, null, ge(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + d(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (n(), i("p", qb, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          b(" " + d(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        S(De, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => s.$emit("cancel"))
        }, {
          default: h(() => [
            b(d(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (n(), D(De, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (a) => s.$emit("secondary"))
        }, {
          default: h(() => [
            b(d(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        S(De, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
        }, {
          default: h(() => [
            b(d(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), pl = /* @__PURE__ */ we(Yb, [["__scopeId", "data-v-3670b9f5"]]), Qb = { class: "mismatch-warning" }, Jb = { class: "version-mismatch" }, Xb = { class: "version-actual" }, Zb = { class: "version-expected" }, e2 = { style: { color: "var(--cg-color-warning)" } }, t2 = { style: { color: "var(--cg-color-warning)" } }, s2 = {
  key: 0,
  class: "community-status-badge"
}, o2 = { key: 0 }, n2 = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, a2 = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, l2 = /* @__PURE__ */ he({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getNodes: l, trackNodeAsDev: r, installNode: c, uninstallNode: u, queueNodeInstall: m } = rt(), f = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), v = k(!1), p = k(null), _ = k(""), g = k(!1), w = k(null), C = k(/* @__PURE__ */ new Set()), $ = k(null), x = A(() => {
      if (!_.value.trim()) return f.value.nodes;
      const F = _.value.toLowerCase();
      return f.value.nodes.filter(
        (L) => {
          var ne, Ue;
          return L.name.toLowerCase().includes(F) || ((ne = L.description) == null ? void 0 : ne.toLowerCase().includes(F)) || ((Ue = L.repository) == null ? void 0 : Ue.toLowerCase().includes(F));
        }
      );
    }), O = A(
      () => x.value.filter((F) => F.installed && F.tracked)
    ), T = A(
      () => x.value.filter((F) => !F.installed && F.tracked && !F.issue_type)
    ), P = A(
      () => x.value.filter((F) => F.installed && !F.tracked)
    ), R = A(
      () => x.value.filter((F) => F.issue_type === "version_gated")
    ), U = A(
      () => x.value.filter((F) => F.issue_type === "uninstallable")
    ), B = A(() => R.value.length), I = A(() => U.value.length);
    function N(F) {
      return F.registry_id || F.name;
    }
    function se(F) {
      return C.value.has(N(F));
    }
    async function te(F, L) {
      const ne = F.registry_id;
      if (!ne) {
        a("toast", `Node "${F.name}" has no package id for install`, "warning");
        return;
      }
      if (L === "git" && !F.repository) {
        a("toast", `Node "${F.name}" has no repository URL for git install`, "warning");
        return;
      }
      const Ue = {
        id: ne,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      L === "git" && F.repository && (Ue.repository = F.repository, Ue.install_source = "git"), await m(Ue), C.value.add(N(F)), a("toast", `✓ Queued install for "${F.name}"`, "success");
    }
    function Z(F) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[F] || F;
    }
    const X = A(() => o.versionMismatches.length > 0);
    function G(F) {
      return !F.used_in_workflows || F.used_in_workflows.length === 0 ? "Not used in any workflows" : F.used_in_workflows.length === 1 ? F.used_in_workflows[0] : `${F.used_in_workflows.length} workflows`;
    }
    function Q(F) {
      return F.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function oe(F) {
      return F.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function le(F) {
      return F.registry_id ? `Community-mapped package: ${F.registry_id}` : "Community-mapped package";
    }
    function W(F) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function ee(F) {
      w.value = F;
    }
    function ae() {
      a("open-node-manager");
    }
    function Ne(F) {
      $.value = {
        title: "Track as Development Node",
        message: `Track "${F}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          $.value = null;
          try {
            v.value = !0;
            const L = await r(F);
            L.status === "success" ? (a("toast", `✓ Node "${F}" tracked as development`, "success"), await ie()) : a("toast", `Failed to track node: ${L.message || "Unknown error"}`, "error");
          } catch (L) {
            a("toast", `Error tracking node: ${L instanceof Error ? L.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function Ke(F) {
      $.value = {
        title: "Remove Untracked Node",
        message: `Remove "${F}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          $.value = null;
          try {
            v.value = !0;
            const L = await u(F);
            L.status === "success" ? (a("toast", `✓ Node "${F}" removed`, "success"), await ie()) : a("toast", `Failed to remove node: ${L.message || "Unknown error"}`, "error");
          } catch (L) {
            a("toast", `Error removing node: ${L instanceof Error ? L.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function je(F) {
      $.value = {
        title: "Install Missing Node",
        message: `Install "${F}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          $.value = null;
          try {
            v.value = !0;
            const L = await c(F);
            L.status === "success" ? (a("toast", `✓ Node "${F}" installed`, "success"), await ie()) : a("toast", `Failed to install node: ${L.message || "Unknown error"}`, "error");
          } catch (L) {
            a("toast", `Error installing node: ${L instanceof Error ? L.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function $e(F) {
      $.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${F.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          $.value = null;
          try {
            v.value = !0, await te(F, "registry");
          } catch (L) {
            a("toast", `Error queueing install: ${L instanceof Error ? L.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function V(F) {
      $.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${F.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          $.value = null;
          try {
            v.value = !0, await te(F, "git");
          } catch (L) {
            a("toast", `Error queueing git install: ${L instanceof Error ? L.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    async function ie() {
      v.value = !0, p.value = null;
      try {
        f.value = await l();
      } catch (F) {
        p.value = F instanceof Error ? F.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return at(ie), (F, L) => (n(), i(j, null, [
      S(Gt, null, {
        header: h(() => [
          S(jt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: L[0] || (L[0] = (ne) => g.value = !0)
          }, {
            actions: h(() => [
              S(ve, {
                variant: "primary",
                size: "sm",
                onClick: ae
              }, {
                default: h(() => [...L[7] || (L[7] = [
                  b(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          S(Lo, {
            modelValue: _.value,
            "onUpdate:modelValue": L[1] || (L[1] = (ne) => _.value = ne),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          v.value ? (n(), D(Ns, {
            key: 0,
            message: "Loading nodes..."
          })) : p.value ? (n(), D(Us, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: ie
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            f.value.total_count ? (n(), D(hn, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(d(f.value.installed_count) + " installed ", 1),
                f.value.missing_count ? (n(), i(j, { key: 0 }, [
                  b(" • " + d(f.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                B.value ? (n(), i(j, { key: 1 }, [
                  b(" • " + d(B.value) + " blocked", 1)
                ], 64)) : y("", !0),
                I.value ? (n(), i(j, { key: 2 }, [
                  b(" • " + d(I.value) + " community-mapped", 1)
                ], 64)) : y("", !0),
                f.value.untracked_count ? (n(), i(j, { key: 3 }, [
                  b(" • " + d(f.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            X.value ? (n(), D(ht, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                t("div", Qb, [
                  L[8] || (L[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, d(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(j, null, ge(e.versionMismatches, (ne) => (n(), D(Mt, {
                  key: ne.name,
                  status: "warning"
                }, {
                  icon: h(() => [...L[9] || (L[9] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(d(ne.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", Jb, [
                      t("span", Xb, d(ne.actual), 1),
                      L[10] || (L[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", Zb, d(ne.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    S(ve, {
                      variant: "warning",
                      size: "sm",
                      onClick: L[2] || (L[2] = (Ue) => a("repair-environment"))
                    }, {
                      default: h(() => [...L[11] || (L[11] = [
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
            R.value.length ? (n(), D(ht, {
              key: 2,
              title: "BLOCKED",
              count: R.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(j, null, ge(R.value, (ne) => (n(), D(Mt, {
                  key: `blocked-${ne.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...L[12] || (L[12] = [
                    b("⛔", -1)
                  ])]),
                  title: h(() => [
                    b(d(ne.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", e2, d(Q(ne)), 1)
                  ]),
                  details: h(() => [
                    S(_t, {
                      label: "Guidance:",
                      value: ne.issue_guidance || oe(ne)
                    }, null, 8, ["value"]),
                    S(_t, {
                      label: "Used by:",
                      value: G(ne)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(ve, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ue) => ee(ne)
                    }, {
                      default: h(() => [...L[13] || (L[13] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            U.value.length ? (n(), D(ht, {
              key: 3,
              title: "COMMUNITY-MAPPED",
              count: U.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(j, null, ge(U.value, (ne) => (n(), D(Mt, {
                  key: `community-${ne.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...L[14] || (L[14] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(d(ne.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", t2, d(le(ne)), 1)
                  ]),
                  details: h(() => [
                    S(_t, {
                      label: "Guidance:",
                      value: ne.issue_guidance || W(ne)
                    }, null, 8, ["value"]),
                    S(_t, {
                      label: "Used by:",
                      value: G(ne)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(ve, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ue) => ee(ne)
                    }, {
                      default: h(() => [...L[15] || (L[15] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    se(ne) ? (n(), i("span", s2, "Queued")) : (n(), i(j, { key: 1 }, [
                      ne.registry_id ? (n(), D(ve, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (Ue) => $e(ne)
                      }, {
                        default: h(() => [...L[16] || (L[16] = [
                          b(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      ne.repository ? (n(), D(ve, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (Ue) => V(ne)
                      }, {
                        default: h(() => [...L[17] || (L[17] = [
                          b(" Install via Git ", -1)
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
            P.value.length ? (n(), D(ht, {
              key: 4,
              title: "UNTRACKED",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(j, null, ge(P.value, (ne) => (n(), D(Mt, {
                  key: ne.name,
                  status: "warning"
                }, {
                  icon: h(() => [...L[18] || (L[18] = [
                    b("?", -1)
                  ])]),
                  title: h(() => [
                    b(d(ne.name), 1)
                  ]),
                  subtitle: h(() => [...L[19] || (L[19] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    S(_t, {
                      label: "Used by:",
                      value: G(ne)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(ve, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ue) => ee(ne)
                    }, {
                      default: h(() => [...L[20] || (L[20] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ve, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ue) => Ne(ne.name)
                    }, {
                      default: h(() => [...L[21] || (L[21] = [
                        b(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ve, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Ue) => Ke(ne.name)
                    }, {
                      default: h(() => [...L[22] || (L[22] = [
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
            O.value.length ? (n(), D(ht, {
              key: 5,
              title: "INSTALLED",
              count: O.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(j, null, ge(O.value, (ne) => (n(), D(Mt, {
                  key: ne.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    b(d(ne.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    b(d(ne.name), 1)
                  ]),
                  subtitle: h(() => [
                    ne.version ? (n(), i("span", o2, d(ne.source === "development" ? "" : "v") + d(ne.version), 1)) : (n(), i("span", n2, "version unknown")),
                    t("span", a2, " • " + d(Z(ne.source)), 1)
                  ]),
                  details: h(() => [
                    S(_t, {
                      label: "Used by:",
                      value: G(ne)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(ve, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ue) => ee(ne)
                    }, {
                      default: h(() => [...L[23] || (L[23] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ve, {
                      variant: "secondary",
                      size: "xs",
                      onClick: ae
                    }, {
                      default: h(() => [...L[24] || (L[24] = [
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
            T.value.length ? (n(), D(ht, {
              key: 6,
              title: "MISSING",
              count: T.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(j, null, ge(T.value, (ne) => (n(), D(Mt, {
                  key: ne.name,
                  status: "missing"
                }, {
                  icon: h(() => [...L[25] || (L[25] = [
                    b("!", -1)
                  ])]),
                  title: h(() => [
                    b(d(ne.name), 1)
                  ]),
                  subtitle: h(() => [...L[26] || (L[26] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    S(_t, {
                      label: "Required by:",
                      value: G(ne)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    S(ve, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ue) => ee(ne)
                    }, {
                      default: h(() => [...L[27] || (L[27] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(ve, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ue) => je(ne.name)
                    }, {
                      default: h(() => [...L[28] || (L[28] = [
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
            !O.value.length && !T.value.length && !R.value.length && !U.value.length && !P.value.length ? (n(), D(vs, {
              key: 7,
              icon: "📭",
              message: _.value ? `No nodes match '${_.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      S(ps, {
        show: g.value,
        title: "About Custom Nodes",
        onClose: L[4] || (L[4] = (ne) => g.value = !1)
      }, {
        content: h(() => [...L[29] || (L[29] = [
          t("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Installed:"),
            b(" Tracked nodes available in this environment"),
            t("br"),
            t("strong", null, "Missing:"),
            b(" Tracked nodes that need to be installed"),
            t("br"),
            t("strong", null, "Blocked:"),
            b(" Node types that require newer ComfyUI"),
            t("br"),
            t("strong", null, "Community-Mapped:"),
            b(" Actionable package mappings from community metadata"),
            t("br"),
            t("strong", null, "Untracked:"),
            b(" Nodes on filesystem but not in manifest ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: h(() => [
          S(ve, {
            variant: "primary",
            onClick: L[3] || (L[3] = (ne) => g.value = !1)
          }, {
            default: h(() => [...L[30] || (L[30] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), D(jb, {
        key: 0,
        node: w.value,
        onClose: L[5] || (L[5] = (ne) => w.value = null)
      }, null, 8, ["node"])) : y("", !0),
      $.value ? (n(), D(pl, {
        key: 1,
        title: $.value.title,
        message: $.value.message,
        warning: $.value.warning,
        "confirm-label": $.value.confirmLabel,
        destructive: $.value.destructive,
        onConfirm: $.value.onConfirm,
        onCancel: L[6] || (L[6] = (ne) => $.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), i2 = /* @__PURE__ */ we(l2, [["__scopeId", "data-v-3ef68ac4"]]);
function Vr(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const r2 = { class: "remote-url-display" }, c2 = ["title"], u2 = ["title"], d2 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, m2 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, f2 = /* @__PURE__ */ he({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = k(!1), a = A(() => {
      if (s.url.length <= s.maxLength)
        return s.url;
      const r = s.url.slice(0, Math.floor(s.maxLength * 0.6)), c = s.url.slice(-Math.floor(s.maxLength * 0.3));
      return `${r}...${c}`;
    });
    async function l() {
      try {
        await navigator.clipboard.writeText(s.url), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (r) {
        console.error("Failed to copy URL:", r);
      }
    }
    return (r, c) => (n(), i("div", r2, [
      t("span", {
        class: "url-text",
        title: e.url
      }, d(a.value), 9, c2),
      t("button", {
        class: Pe(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (n(), i("svg", m2, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (n(), i("svg", d2, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, u2)
    ]));
  }
}), v2 = /* @__PURE__ */ we(f2, [["__scopeId", "data-v-7768a58d"]]), p2 = { class: "remote-title" }, g2 = {
  key: 0,
  class: "default-badge"
}, h2 = {
  key: 1,
  class: "sync-badge"
}, y2 = {
  key: 0,
  class: "ahead"
}, w2 = {
  key: 1,
  class: "behind"
}, _2 = {
  key: 1,
  class: "synced"
}, k2 = ["href"], b2 = {
  key: 1,
  class: "remote-url-text"
}, $2 = /* @__PURE__ */ he({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = A(() => s.fetchingRemote === s.remote.name), a = A(() => s.remote.is_default), l = A(() => s.syncStatus && s.syncStatus.behind > 0), r = A(() => s.syncStatus && s.syncStatus.ahead > 0), c = A(() => s.remote.push_url !== s.remote.fetch_url), u = A(() => {
      const f = s.remote.fetch_url, v = f.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : f.startsWith("https://") || f.startsWith("http://") ? f.replace(/\.git$/, "") : null;
    }), m = A(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (f, v) => (n(), D(Mt, {
      status: a.value ? "synced" : void 0
    }, io({
      icon: h(() => [
        b(d(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        t("div", p2, [
          t("span", null, d(e.remote.name), 1),
          a.value ? (n(), i("span", g2, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", h2, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", y2, "↑" + d(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", w2, "↓" + d(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", _2, "✓ synced"))
          ])) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        u.value ? (n(), i("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: v[0] || (v[0] = kt(() => {
          }, ["stop"]))
        }, d(m.value), 9, k2)) : (n(), i("span", b2, d(m.value), 1))
      ]),
      actions: h(() => [
        S(ve, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: v[1] || (v[1] = (p) => f.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...v[6] || (v[6] = [
            b(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        S(ve, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[2] || (v[2] = (p) => f.$emit("pull", e.remote.name))
        }, {
          default: h(() => [
            b(" Pull" + d(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        S(ve, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[3] || (v[3] = (p) => f.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            b(" Push" + d(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        S(ve, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (p) => f.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            b(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? y("", !0) : (n(), D(ve, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[5] || (v[5] = (p) => f.$emit("remove", e.remote.name))
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
          e.remote.push_url !== e.remote.fetch_url ? (n(), D(_t, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              S(v2, {
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
}), C2 = /* @__PURE__ */ we($2, [["__scopeId", "data-v-8310f3a8"]]), x2 = ["for"], S2 = {
  key: 0,
  class: "base-form-field-required"
}, I2 = { class: "base-form-field-input" }, E2 = {
  key: 1,
  class: "base-form-field-error"
}, T2 = {
  key: 2,
  class: "base-form-field-hint"
}, P2 = /* @__PURE__ */ he({
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
    const s = e, o = A(() => s.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (a, l) => (n(), i("div", {
      class: Pe(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        b(d(e.label) + " ", 1),
        e.required ? (n(), i("span", S2, "*")) : y("", !0)
      ], 8, x2)) : y("", !0),
      t("div", I2, [
        ot(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", E2, d(e.error), 1)) : e.hint ? (n(), i("span", T2, d(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), Sa = /* @__PURE__ */ we(P2, [["__scopeId", "data-v-9a1cf296"]]), M2 = { class: "remote-form" }, R2 = { class: "form-header" }, D2 = { class: "form-body" }, L2 = {
  key: 0,
  class: "form-error"
}, N2 = { class: "form-actions" }, U2 = /* @__PURE__ */ he({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = k({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), r = k(!1), c = k(null);
    Ct(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = A(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function m() {
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
    return (f, v) => (n(), i("div", M2, [
      t("div", R2, [
        S(qt, null, {
          default: h(() => [
            b(d(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", D2, [
        S(Sa, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            S(zt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (p) => l.value.name = p),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        S(Sa, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            S(zt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (p) => l.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        S(Sa, { label: "Push URL (optional)" }, {
          default: h(() => [
            S(zt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (n(), i("div", L2, d(c.value), 1)) : y("", !0)
      ]),
      t("div", N2, [
        S(ve, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: r.value,
          onClick: m
        }, {
          default: h(() => [
            b(d(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        S(ve, {
          variant: "ghost",
          size: "md",
          onClick: v[3] || (v[3] = (p) => f.$emit("cancel"))
        }, {
          default: h(() => [...v[4] || (v[4] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), A2 = /* @__PURE__ */ we(U2, [["__scopeId", "data-v-56021b18"]]), O2 = { class: "conflict-summary-box" }, z2 = { class: "summary-header" }, F2 = { class: "summary-text" }, V2 = { key: 0 }, B2 = {
  key: 1,
  class: "all-resolved"
}, W2 = { class: "summary-progress" }, G2 = { class: "progress-bar" }, j2 = { class: "progress-text" }, H2 = /* @__PURE__ */ he({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const s = e, o = A(
      () => s.conflictCount > 0 ? s.resolvedCount / s.conflictCount * 100 : 0
    );
    return (a, l) => (n(), i("div", O2, [
      t("div", z2, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", F2, [
          t("strong", null, d(e.conflictCount) + " conflict" + d(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (n(), i("p", V2, " Resolve all conflicts before " + d(e.operationType) + "ing ", 1)) : (n(), i("p", B2, " All conflicts resolved - ready to " + d(e.operationType), 1))
        ])
      ]),
      t("div", W2, [
        t("div", G2, [
          t("div", {
            class: "progress-fill",
            style: Jt({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", j2, d(e.resolvedCount) + " / " + d(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), K2 = /* @__PURE__ */ we(H2, [["__scopeId", "data-v-4e9e6cc9"]]), q2 = { class: "modal-header" }, Y2 = { class: "modal-title" }, Q2 = { class: "modal-body" }, J2 = {
  key: 0,
  class: "error-box"
}, X2 = {
  key: 0,
  class: "error-hint"
}, Z2 = {
  key: 1,
  class: "loading-state"
}, e$ = { class: "commit-summary" }, t$ = {
  key: 0,
  class: "commits-section"
}, s$ = { class: "commit-list" }, o$ = { class: "commit-hash" }, n$ = { class: "commit-message" }, a$ = { class: "commit-date" }, l$ = {
  key: 1,
  class: "changes-section"
}, i$ = {
  key: 0,
  class: "change-group",
  open: ""
}, r$ = { class: "change-count" }, c$ = { class: "change-list" }, u$ = {
  key: 0,
  class: "conflict-badge"
}, d$ = {
  key: 1,
  class: "change-group"
}, m$ = { class: "change-count" }, f$ = { class: "change-list" }, v$ = {
  key: 2,
  class: "change-group"
}, p$ = { class: "change-count" }, g$ = { class: "change-list" }, h$ = {
  key: 3,
  class: "strategy-section"
}, y$ = { class: "radio-group" }, w$ = { class: "radio-option" }, _$ = { class: "radio-option" }, k$ = { class: "radio-option" }, b$ = {
  key: 4,
  class: "up-to-date"
}, $$ = { class: "modal-actions" }, ri = "comfygit.pullModelStrategy", C$ = /* @__PURE__ */ he({
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
    const o = e, a = s, l = k(localStorage.getItem(ri) || "skip");
    Ct(l, ($) => {
      localStorage.setItem(ri, $);
    });
    const r = A(() => {
      var $;
      return (($ = o.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = A(() => {
      if (!o.preview) return 0;
      const $ = o.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), u = A(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), m = A(() => {
      var $;
      return c.value > 0 || u.value > 0 || ((($ = o.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), f = A(() => o.preview && Vr(o.preview) ? o.preview : null), v = A(() => {
      var $;
      return (($ = f.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), p = A(() => {
      var $;
      return (($ = o.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), _ = A(
      () => v.value > 0 && p.value === v.value
    ), g = A(() => !(!o.preview || o.preview.has_uncommitted_changes || f.value && !_.value));
    function w($) {
      if (!f.value) return !1;
      const x = $.replace(/\.json$/, "");
      return f.value.workflow_conflicts.some((O) => O.name === x);
    }
    function C($) {
      const x = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: $, resolutions: x });
    }
    return ($, x) => {
      var O, T;
      return n(), D(Dt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: x[11] || (x[11] = (P) => $.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: x[10] || (x[10] = kt(() => {
            }, ["stop"]))
          }, [
            t("div", q2, [
              t("h3", Y2, "PULL FROM " + d(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: x[0] || (x[0] = (P) => $.$emit("close"))
              }, "✕")
            ]),
            t("div", Q2, [
              e.error ? (n(), i("div", J2, [
                x[13] || (x[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  x[12] || (x[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, d(e.error), 1),
                  r.value ? (n(), i("p", X2, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (n(), i("div", Z2, [...x[14] || (x[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (O = e.preview) != null && O.has_uncommitted_changes ? (n(), i(j, { key: 2 }, [
                x[15] || (x[15] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "UNCOMMITTED CHANGES"),
                    t("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                x[16] || (x[16] = t("div", { class: "options-section" }, [
                  t("p", null, [
                    t("strong", null, "Options:")
                  ]),
                  t("ul", null, [
                    t("li", null, "Commit your changes first (recommended)"),
                    t("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (n(), i(j, { key: 3 }, [
                t("div", e$, [
                  x[17] || (x[17] = t("span", { class: "icon" }, "📥", -1)),
                  b(" " + d(e.preview.commits_behind) + " commit" + d(e.preview.commits_behind !== 1 ? "s" : "") + " from " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", t$, [
                  x[18] || (x[18] = t("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  t("div", s$, [
                    (n(!0), i(j, null, ge(e.preview.commits, (P) => (n(), i("div", {
                      key: P.hash,
                      class: "commit-item"
                    }, [
                      t("span", o$, d(P.short_hash || P.hash.slice(0, 7)), 1),
                      t("span", n$, d(P.message), 1),
                      t("span", a$, d(P.date_relative || P.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                m.value ? (n(), i("div", l$, [
                  x[22] || (x[22] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (n(), i("details", i$, [
                    t("summary", null, [
                      x[19] || (x[19] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", r$, d(c.value) + " changes", 1)
                    ]),
                    t("div", c$, [
                      (n(!0), i(j, null, ge(e.preview.changes.workflows.added, (P) => (n(), i("div", {
                        key: "a-" + P,
                        class: "change-item add"
                      }, " + " + d(P), 1))), 128)),
                      (n(!0), i(j, null, ge(e.preview.changes.workflows.modified, (P) => (n(), i("div", {
                        key: "m-" + P,
                        class: "change-item modify"
                      }, [
                        b(" ~ " + d(P) + " ", 1),
                        w(P) ? (n(), i("span", u$, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (n(!0), i(j, null, ge(e.preview.changes.workflows.deleted, (P) => (n(), i("div", {
                        key: "d-" + P,
                        class: "change-item delete"
                      }, " - " + d(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (n(), i("details", d$, [
                    t("summary", null, [
                      x[20] || (x[20] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", m$, d(u.value) + " to install", 1)
                    ]),
                    t("div", f$, [
                      (n(!0), i(j, null, ge(e.preview.changes.nodes.to_install, (P) => (n(), i("div", {
                        key: P,
                        class: "change-item add"
                      }, " + " + d(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", v$, [
                    t("summary", null, [
                      x[21] || (x[21] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", p$, d(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", g$, [
                      (n(!0), i(j, null, ge(e.preview.changes.models.referenced, (P) => (n(), i("div", {
                        key: P,
                        class: "change-item"
                      }, d(P), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                f.value ? (n(), D(K2, {
                  key: 2,
                  "conflict-count": v.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", h$, [
                  x[27] || (x[27] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", y$, [
                    t("label", w$, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[1] || (x[1] = (P) => l.value = P),
                        value: "all"
                      }, null, 512), [
                        [cs, l.value]
                      ]),
                      x[23] || (x[23] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", _$, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[2] || (x[2] = (P) => l.value = P),
                        value: "required"
                      }, null, 512), [
                        [cs, l.value]
                      ]),
                      x[24] || (x[24] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", k$, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[3] || (x[3] = (P) => l.value = P),
                        value: "skip"
                      }, null, 512), [
                        [cs, l.value]
                      ]),
                      x[25] || (x[25] = t("span", null, "Skip model downloads", -1)),
                      x[26] || (x[26] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  x[28] || (x[28] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (n(), i("div", b$, [
                  x[29] || (x[29] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Already up to date with " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", $$, [
              S(ve, {
                variant: "secondary",
                onClick: x[4] || (x[4] = (P) => $.$emit("close"))
              }, {
                default: h(() => [...x[30] || (x[30] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (n(), i(j, { key: 0 }, [
                S(ve, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: x[5] || (x[5] = (P) => C(!1))
                }, {
                  default: h(() => [...x[31] || (x[31] = [
                    b(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                S(ve, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: x[6] || (x[6] = (P) => C(!0))
                }, {
                  default: h(() => [...x[32] || (x[32] = [
                    b(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (T = e.preview) != null && T.has_uncommitted_changes ? (n(), D(ve, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: x[7] || (x[7] = (P) => C(!0))
              }, {
                default: h(() => [...x[33] || (x[33] = [
                  b(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (n(), i(j, { key: 2 }, [
                f.value && !_.value ? (n(), D(ve, {
                  key: 0,
                  variant: "primary",
                  onClick: x[8] || (x[8] = (P) => a("openConflictResolution"))
                }, {
                  default: h(() => [
                    b(" Resolve Conflicts (" + d(p.value) + "/" + d(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (n(), D(ve, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !g.value,
                  onClick: x[9] || (x[9] = (P) => C(!1))
                }, {
                  default: h(() => [...x[34] || (x[34] = [
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
}), x$ = /* @__PURE__ */ we(C$, [["__scopeId", "data-v-1d633bba"]]), S$ = { class: "modal-header" }, I$ = { class: "modal-title" }, E$ = { class: "modal-body" }, T$ = {
  key: 0,
  class: "loading-state"
}, P$ = {
  key: 1,
  class: "warning-box"
}, M$ = {
  key: 0,
  class: "commits-section"
}, R$ = { class: "commit-list" }, D$ = { class: "commit-hash" }, L$ = { class: "commit-message" }, N$ = { class: "commit-date" }, U$ = { class: "force-option" }, A$ = { class: "checkbox-option" }, O$ = { class: "commit-summary" }, z$ = { key: 0 }, F$ = { key: 1 }, V$ = {
  key: 0,
  class: "info-box"
}, B$ = {
  key: 1,
  class: "commits-section"
}, W$ = { class: "commit-list" }, G$ = { class: "commit-hash" }, j$ = { class: "commit-message" }, H$ = { class: "commit-date" }, K$ = {
  key: 2,
  class: "up-to-date"
}, q$ = { class: "modal-actions" }, Y$ = /* @__PURE__ */ he({
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
    const o = s, a = k(!1);
    function l(r) {
      o("push", { force: r });
    }
    return (r, c) => {
      var u, m, f;
      return n(), D(Dt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: c[7] || (c[7] = (v) => r.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: c[6] || (c[6] = kt(() => {
            }, ["stop"]))
          }, [
            t("div", S$, [
              t("h3", I$, "PUSH TO " + d(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (v) => r.$emit("close"))
              }, "✕")
            ]),
            t("div", E$, [
              e.loading ? (n(), i("div", T$, [...c[8] || (c[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (n(), i("div", P$, [...c[9] || (c[9] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (m = e.preview) != null && m.remote_has_new_commits ? (n(), i(j, { key: 2 }, [
                c[13] || (c[13] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "REMOTE HAS NEW COMMITS"),
                    t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (n(), i("div", M$, [
                  c[10] || (c[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", R$, [
                    (n(!0), i(j, null, ge(e.preview.commits, (v) => (n(), i("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", D$, d(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", L$, d(v.message), 1),
                      t("span", N$, d(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", U$, [
                  t("label", A$, [
                    nt(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": c[1] || (c[1] = (v) => a.value = v)
                    }, null, 512), [
                      [dn, a.value]
                    ]),
                    c[11] || (c[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  c[12] || (c[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (n(), i(j, { key: 3 }, [
                t("div", O$, [
                  c[14] || (c[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (n(), i("span", z$, " Creating " + d(e.preview.remote) + "/" + d(e.preview.branch) + " with " + d(e.preview.commits_ahead) + " commit" + d(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (n(), i("span", F$, " Pushing " + d(e.preview.commits_ahead) + " commit" + d(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + d(e.preview.remote) + "/" + d(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (n(), i("div", V$, [...c[15] || (c[15] = [
                  t("svg", {
                    class: "info-icon",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("circle", {
                      cx: "8",
                      cy: "8",
                      r: "7",
                      stroke: "currentColor",
                      "stroke-width": "1.5",
                      fill: "none"
                    }),
                    t("text", {
                      x: "8",
                      y: "11",
                      "text-anchor": "middle",
                      "font-size": "10",
                      "font-weight": "bold",
                      fill: "currentColor"
                    }, "i")
                  ], -1),
                  t("span", null, "This will create the remote branch for the first time.", -1)
                ])])) : y("", !0),
                e.preview.commits_ahead > 0 ? (n(), i("div", B$, [
                  c[16] || (c[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", W$, [
                    (n(!0), i(j, null, ge(e.preview.commits, (v) => (n(), i("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", G$, d(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", j$, d(v.message), 1),
                      t("span", H$, d(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (n(), i("div", K$, [
                  c[17] || (c[17] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Nothing to push - already up to date with " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", q$, [
              S(ve, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (v) => r.$emit("close"))
              }, {
                default: h(() => [...c[18] || (c[18] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (f = e.preview) != null && f.remote_has_new_commits ? (n(), i(j, { key: 0 }, [
                S(ve, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (v) => r.$emit("pull-first"))
                }, {
                  default: h(() => [...c[19] || (c[19] = [
                    b(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                S(ve, {
                  variant: "destructive",
                  disabled: !a.value,
                  loading: e.pushing,
                  onClick: c[4] || (c[4] = (v) => l(!0))
                }, {
                  default: h(() => [...c[20] || (c[20] = [
                    b(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (n(), D(ve, {
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
}), Q$ = /* @__PURE__ */ we(Y$, [["__scopeId", "data-v-3c2e35ab"]]), J$ = { class: "resolution-choice-group" }, X$ = ["disabled"], Z$ = ["disabled"], eC = /* @__PURE__ */ he({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("div", J$, [
      t("button", {
        class: Pe(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, X$),
      t("button", {
        class: Pe(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Z$)
    ]));
  }
}), tC = /* @__PURE__ */ we(eC, [["__scopeId", "data-v-985715ed"]]), sC = { class: "conflict-header" }, oC = { class: "conflict-info" }, nC = { class: "workflow-name" }, aC = { class: "conflict-description" }, lC = {
  key: 0,
  class: "resolved-badge"
}, iC = { class: "resolved-text" }, rC = { class: "conflict-hashes" }, cC = { class: "hash-item" }, uC = { class: "hash-item" }, dC = { class: "conflict-actions" }, mC = /* @__PURE__ */ he({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = k(o.resolution);
    Ct(() => o.resolution, (m) => {
      l.value = m;
    }), Ct(l, (m) => {
      m && a("resolve", m);
    });
    const r = A(() => l.value !== null), c = A(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = A(() => {
      switch (l.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (m, f) => {
      var v, p;
      return n(), i("div", {
        class: Pe(["conflict-item", { resolved: r.value }])
      }, [
        t("div", sC, [
          f[2] || (f[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", oC, [
            t("code", nC, d(e.conflict.name) + ".json", 1),
            t("div", aC, d(c.value), 1)
          ]),
          r.value ? (n(), i("div", lC, [
            f[1] || (f[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", iC, d(u.value), 1)
          ])) : y("", !0)
        ]),
        t("div", rC, [
          t("span", cC, [
            f[3] || (f[3] = b("Your: ", -1)),
            t("code", null, d(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", uC, [
            f[4] || (f[4] = b("Theirs: ", -1)),
            t("code", null, d(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", dC, [
          S(tC, {
            modelValue: l.value,
            "onUpdate:modelValue": f[0] || (f[0] = (_) => l.value = _),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), fC = /* @__PURE__ */ we(mC, [["__scopeId", "data-v-506d3bbf"]]), vC = { class: "resolution-content" }, pC = {
  key: 0,
  class: "error-box"
}, gC = { class: "resolution-header" }, hC = { class: "header-stats" }, yC = { class: "stat" }, wC = { class: "stat-value" }, _C = { class: "stat resolved" }, kC = { class: "stat-value" }, bC = {
  key: 0,
  class: "stat pending"
}, $C = { class: "stat-value" }, CC = { class: "conflicts-list" }, xC = {
  key: 1,
  class: "all-resolved-message"
}, SC = /* @__PURE__ */ he({
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
    const o = e, a = s, l = A(() => o.resolutions.size), r = A(() => o.workflowConflicts.length - l.value), c = A(() => l.value === o.workflowConflicts.length), u = A(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function m(_) {
      const g = o.resolutions.get(_);
      return (g == null ? void 0 : g.resolution) ?? null;
    }
    function f(_, g) {
      a("resolve", _, g);
    }
    function v() {
      a("close");
    }
    function p() {
      a("apply");
    }
    return (_, g) => (n(), D($t, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        t("div", vC, [
          e.error ? (n(), i("div", pC, [
            g[1] || (g[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              g[0] || (g[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, d(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", gC, [
            t("div", hC, [
              t("div", yC, [
                t("span", wC, d(e.workflowConflicts.length), 1),
                g[2] || (g[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", _C, [
                t("span", kC, d(l.value), 1),
                g[3] || (g[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (n(), i("div", bC, [
                t("span", $C, d(r.value), 1),
                g[4] || (g[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            g[5] || (g[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", CC, [
            (n(!0), i(j, null, ge(e.workflowConflicts, (w) => (n(), D(fC, {
              key: w.name,
              conflict: w,
              resolution: m(w.name),
              onResolve: (C) => f(w.name, C)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (n(), i("div", xC, [
            g[6] || (g[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + d(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        S(De, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...g[7] || (g[7] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g[8] || (g[8] = t("div", { class: "footer-spacer" }, null, -1)),
        S(De, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: p
        }, {
          default: h(() => [
            b(d(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), IC = /* @__PURE__ */ we(SC, [["__scopeId", "data-v-c58d150d"]]), EC = { class: "node-conflict-item" }, TC = { class: "node-header" }, PC = { class: "node-name" }, MC = { class: "node-id" }, RC = { class: "version-comparison" }, DC = { class: "version yours" }, LC = { class: "version theirs" }, NC = { class: "chosen-version" }, UC = { class: "chosen" }, AC = { class: "chosen-reason" }, OC = { class: "affected-workflows" }, zC = { class: "wf-source" }, FC = { class: "wf-version" }, VC = /* @__PURE__ */ he({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", EC, [
      t("div", TC, [
        t("code", PC, d(e.conflict.node_name), 1),
        t("span", MC, "(" + d(e.conflict.node_id) + ")", 1)
      ]),
      t("div", RC, [
        t("div", DC, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, d(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", LC, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, d(e.conflict.target_version), 1)
        ])
      ]),
      t("div", NC, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", UC, d(e.conflict.chosen_version), 1),
        t("span", AC, d(e.conflict.chosen_reason), 1)
      ]),
      t("details", OC, [
        t("summary", null, " Affected workflows (" + d(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (n(!0), i(j, null, ge(e.conflict.affected_workflows, (a) => (n(), i("li", {
            key: a.name
          }, [
            t("code", null, d(a.name), 1),
            t("span", zC, "(" + d(a.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", FC, "needs v" + d(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), BC = /* @__PURE__ */ we(VC, [["__scopeId", "data-v-8b626725"]]), WC = { class: "validation-content" }, GC = {
  key: 0,
  class: "compatible-message"
}, jC = { class: "conflicts-list" }, HC = {
  key: 2,
  class: "warnings-section"
}, KC = /* @__PURE__ */ he({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = A(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (n(), D($t, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => a("cancel"))
    }, {
      body: h(() => [
        t("div", WC, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (n(), i("div", GC, [
            c[5] || (c[5] = t("span", { class: "icon" }, "✓", -1)),
            t("div", null, [
              c[4] || (c[4] = t("strong", null, "All clear!", -1)),
              t("p", null, "Your workflow choices are compatible. Ready to " + d(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (n(), i(j, { key: 1 }, [
            c[6] || (c[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", jC, [
              (n(!0), i(j, null, ge(e.validation.node_conflicts, (u) => (n(), D(BC, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (n(), i("div", HC, [
            c[8] || (c[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (n(!0), i(j, null, ge(e.validation.warnings, (u, m) => (n(), i("li", { key: m }, d(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        S(De, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => a("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        S(De, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => a("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            b(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        S(De, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => a("proceed"))
        }, {
          default: h(() => [
            b(d(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), qC = /* @__PURE__ */ we(KC, [["__scopeId", "data-v-fefd26ed"]]), YC = { key: 0 }, QC = /* @__PURE__ */ he({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(e, { emit: s }) {
    const o = s, {
      getRemotes: a,
      addRemote: l,
      removeRemote: r,
      updateRemoteUrl: c,
      fetchRemote: u,
      getRemoteSyncStatus: m,
      getPullPreview: f,
      pullFromRemote: v,
      getPushPreview: p,
      pushToRemote: _,
      validateMerge: g
    } = rt(), w = k([]), C = k(null), $ = k({}), x = k(!1), O = k(null), T = k(""), P = k(!1), R = k(null), U = k(!1), B = k("add"), I = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), N = A(() => {
      if (!T.value.trim()) return w.value;
      const Ce = T.value.toLowerCase();
      return w.value.filter(
        (Re) => Re.name.toLowerCase().includes(Ce) || Re.fetch_url.toLowerCase().includes(Ce) || Re.push_url.toLowerCase().includes(Ce)
      );
    });
    async function se() {
      x.value = !0, O.value = null;
      try {
        const Ce = await a();
        w.value = Ce.remotes, C.value = Ce.current_branch_tracking || null, await Promise.all(
          Ce.remotes.map(async (Re) => {
            const Ee = await m(Re.name);
            Ee && ($.value[Re.name] = Ee);
          })
        );
      } catch (Ce) {
        O.value = Ce instanceof Error ? Ce.message : "Failed to load remotes";
      } finally {
        x.value = !1;
      }
    }
    function te() {
      B.value = "add", I.value = { name: "", fetchUrl: "", pushUrl: "" }, U.value = !0;
    }
    function Z(Ce) {
      const Re = w.value.find((Ee) => Ee.name === Ce);
      Re && (B.value = "edit", I.value = {
        name: Re.name,
        fetchUrl: Re.fetch_url,
        pushUrl: Re.push_url
      }, U.value = !0);
    }
    async function X(Ce) {
      try {
        B.value === "add" ? await l(Ce.name, Ce.fetchUrl) : await c(Ce.name, Ce.fetchUrl, Ce.pushUrl || void 0), U.value = !1, await se();
      } catch (Re) {
        O.value = Re instanceof Error ? Re.message : "Operation failed";
      }
    }
    function G() {
      U.value = !1, I.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Q(Ce) {
      R.value = Ce;
      try {
        await u(Ce);
        const Re = await m(Ce);
        Re && ($.value[Ce] = Re), o("toast", `✓ Fetched from ${Ce}`, "success");
      } catch (Re) {
        o("toast", Re instanceof Error ? Re.message : "Fetch failed", "error");
      } finally {
        R.value = null;
      }
    }
    async function oe(Ce) {
      if (confirm(`Remove remote "${Ce}"?`))
        try {
          await r(Ce), await se();
        } catch (Re) {
          O.value = Re instanceof Error ? Re.message : "Failed to remove remote";
        }
    }
    function le() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const W = k("idle"), ee = A(() => W.value === "pull_preview"), ae = A(
      () => W.value === "resolving" || W.value === "validating"
    ), Ne = A(
      () => W.value === "validation_review" || W.value === "executing"
    ), Ke = k(!1), je = k(null), $e = k(!1), V = k(null), ie = k(!1), F = k(null), L = k(null), ne = k(/* @__PURE__ */ new Map()), Ue = k(null), Ae = k(null), z = A(() => F.value && Vr(F.value) ? F.value : null);
    async function K(Ce) {
      V.value = Ce, W.value = "pull_preview", ie.value = !0, F.value = null, L.value = null;
      try {
        F.value = await f(Ce);
      } catch (Re) {
        L.value = Re instanceof Error ? Re.message : "Failed to load pull preview";
      } finally {
        ie.value = !1;
      }
    }
    function ce() {
      W.value = "idle", F.value = null, L.value = null, V.value = null;
    }
    async function Se(Ce) {
      if (!V.value) return;
      W.value = "executing", L.value = null;
      const Re = V.value;
      try {
        const Ee = await v(Re, Ce);
        if (Ee.rolled_back) {
          L.value = `Pull failed and was rolled back: ${Ee.error || "Unknown error"}`, W.value = "pull_preview";
          return;
        }
        Le(), W.value = "idle", o("toast", `✓ Pulled from ${Re}`, "success"), await se();
      } catch (Ee) {
        L.value = Ee instanceof Error ? Ee.message : "Pull failed", W.value = "pull_preview";
      }
    }
    function _e() {
      z.value && (W.value = "resolving", Ae.value = null);
    }
    function ke(Ce, Re) {
      ne.value.set(Ce, { name: Ce, resolution: Re });
    }
    function Me() {
      W.value = "pull_preview";
    }
    async function ye() {
      W.value = "validating", Ae.value = null;
      try {
        const Ce = Array.from(ne.value.values());
        Ue.value = await g(V.value, Ce), W.value = "validation_review";
      } catch (Ce) {
        Ae.value = Ce instanceof Error ? Ce.message : "Validation failed", W.value = "resolving";
      }
    }
    async function Te() {
      W.value = "executing";
      const Ce = V.value;
      try {
        const Re = Array.from(ne.value.values()), Ee = await v(Ce, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Re
        });
        if (Ee.rolled_back) {
          L.value = `Pull failed and was rolled back: ${Ee.error || "Unknown error"}`, W.value = "pull_preview";
          return;
        }
        Le(), W.value = "idle", o("toast", `✓ Pulled from ${Ce}`, "success"), await se();
      } catch (Re) {
        L.value = Re instanceof Error ? Re.message : "Pull failed", W.value = "validation_review";
      }
    }
    function me() {
      W.value = "resolving";
    }
    function We() {
      Le(), W.value = "idle";
    }
    function Le() {
      ne.value.clear(), Ue.value = null, Ae.value = null, L.value = null, F.value = null, V.value = null;
    }
    async function fe(Ce) {
      V.value = Ce, Ke.value = !0, ie.value = !0, je.value = null;
      try {
        je.value = await p(Ce);
      } catch (Re) {
        O.value = Re instanceof Error ? Re.message : "Failed to load push preview";
      } finally {
        ie.value = !1;
      }
    }
    function H() {
      Ke.value = !1, je.value = null, V.value = null;
    }
    async function Oe(Ce) {
      if (!V.value) return;
      $e.value = !0;
      const Re = V.value;
      try {
        await _(Re, Ce), H(), o("toast", `✓ Pushed to ${Re}`, "success"), await se();
      } catch (Ee) {
        o("toast", Ee instanceof Error ? Ee.message : "Push failed", "error");
      } finally {
        $e.value = !1;
      }
    }
    function xe() {
      const Ce = V.value;
      H(), Ce && K(Ce);
    }
    return at(se), (Ce, Re) => (n(), i(j, null, [
      S(Gt, null, {
        header: h(() => [
          S(jt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Re[0] || (Re[0] = (Ee) => P.value = !0)
          }, {
            actions: h(() => [
              U.value ? y("", !0) : (n(), D(ve, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: te
              }, {
                default: h(() => [...Re[3] || (Re[3] = [
                  b(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          U.value ? y("", !0) : (n(), D(Lo, {
            key: 0,
            modelValue: T.value,
            "onUpdate:modelValue": Re[1] || (Re[1] = (Ee) => T.value = Ee),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: h(() => [
          x.value ? (n(), D(Ns, {
            key: 0,
            message: "Loading remotes..."
          })) : O.value ? (n(), D(Us, {
            key: 1,
            message: O.value,
            retry: !0,
            onRetry: se
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            U.value ? (n(), D(A2, {
              key: 0,
              mode: B.value,
              "remote-name": I.value.name,
              "fetch-url": I.value.fetchUrl,
              "push-url": I.value.pushUrl,
              onSubmit: X,
              onCancel: G
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            w.value.length && !U.value ? (n(), D(hn, {
              key: 1,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + d(w.value.length) + " remote" + d(w.value.length !== 1 ? "s" : "") + " ", 1),
                C.value ? (n(), i("span", YC, " • Tracking: " + d(C.value.remote) + "/" + d(C.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            N.value.length && !U.value ? (n(), D(ht, {
              key: 2,
              title: "REMOTES",
              count: N.value.length
            }, {
              default: h(() => [
                (n(!0), i(j, null, ge(N.value, (Ee) => (n(), D(C2, {
                  key: Ee.name,
                  remote: Ee,
                  "sync-status": $.value[Ee.name],
                  "fetching-remote": R.value,
                  onFetch: Q,
                  onEdit: Z,
                  onRemove: oe,
                  onPull: K,
                  onPush: fe
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !N.value.length && !U.value ? (n(), D(vs, {
              key: 3,
              icon: "🌐",
              message: T.value ? `No remotes match '${T.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                S(ve, {
                  variant: "primary",
                  onClick: te
                }, {
                  default: h(() => [...Re[4] || (Re[4] = [
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
      S(ps, {
        show: P.value,
        title: "About Git Remotes",
        onClose: Re[2] || (Re[2] = (Ee) => P.value = !1)
      }, {
        content: h(() => [...Re[5] || (Re[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            b(" The "),
            t("strong", null, '"origin"'),
            b(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          S(ve, {
            variant: "link",
            onClick: le
          }, {
            default: h(() => [...Re[6] || (Re[6] = [
              b(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      S(x$, {
        show: ee.value,
        "remote-name": V.value || "",
        preview: F.value,
        loading: ie.value,
        pulling: W.value === "executing",
        error: L.value,
        "conflict-resolutions": ne.value,
        onClose: ce,
        onPull: Se,
        onOpenConflictResolution: _e
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      S(Q$, {
        show: Ke.value,
        "remote-name": V.value || "",
        preview: je.value,
        loading: ie.value,
        pushing: $e.value,
        onClose: H,
        onPush: Oe,
        onPullFirst: xe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ae.value && z.value ? (n(), D(IC, {
        key: 0,
        "workflow-conflicts": z.value.workflow_conflicts,
        resolutions: ne.value,
        "operation-type": "pull",
        validating: W.value === "validating",
        error: Ae.value,
        onClose: Me,
        onResolve: ke,
        onApply: ye
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      Ne.value && Ue.value ? (n(), D(qC, {
        key: 1,
        validation: Ue.value,
        "operation-type": "pull",
        executing: W.value === "executing",
        onProceed: Te,
        onGoBack: me,
        onCancel: We
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), JC = /* @__PURE__ */ we(QC, [["__scopeId", "data-v-9ae3b76d"]]), XC = { class: "setting-info" }, ZC = { class: "setting-label" }, e3 = {
  key: 0,
  class: "required-marker"
}, t3 = {
  key: 0,
  class: "setting-description"
}, s3 = { class: "setting-control" }, o3 = /* @__PURE__ */ he({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Pe(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", XC, [
        t("div", ZC, [
          b(d(e.label) + " ", 1),
          e.required ? (n(), i("span", e3, "*")) : y("", !0)
        ]),
        e.description ? (n(), i("div", t3, d(e.description), 1)) : y("", !0)
      ]),
      t("div", s3, [
        ot(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), zo = /* @__PURE__ */ we(o3, [["__scopeId", "data-v-cb5d236c"]]), n3 = { class: "toggle" }, a3 = ["checked", "disabled"], l3 = /* @__PURE__ */ he({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", n3, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, a3),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ci = /* @__PURE__ */ we(l3, [["__scopeId", "data-v-71c0f550"]]), i3 = { class: "workspace-settings-content" }, r3 = { class: "settings-section" }, c3 = { class: "path-setting" }, u3 = { class: "path-value" }, d3 = { class: "path-setting" }, m3 = { class: "path-value" }, f3 = { class: "settings-section" }, v3 = { class: "settings-section" }, p3 = { class: "settings-section" }, g3 = /* @__PURE__ */ he({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: c } = rt(), u = k(!1), m = k(null), f = k(null), v = k(null), p = k(null), _ = k(""), g = k(""), w = k(""), C = k(!1), $ = k(!1), x = k(!1), O = k(!0);
    function T(te) {
      return te.join(" ");
    }
    function P(te) {
      return te.trim() ? te.trim().split(/\s+/) : [];
    }
    const R = A(() => {
      if (!p.value) return !1;
      const te = C.value, Z = $.value, X = w.value !== T(p.value.comfyui_extra_args || []);
      return te || Z || X;
    });
    async function U() {
      u.value = !0, m.value = null;
      try {
        v.value = await r(a.workspacePath || void 0), p.value = { ...v.value }, _.value = v.value.civitai_api_key || "", g.value = v.value.huggingface_token || "", w.value = T(v.value.comfyui_extra_args || []), C.value = !1, $.value = !1;
        const te = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        x.value = te !== "false", O.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
      } catch (te) {
        m.value = te instanceof Error ? te.message : "Failed to load settings";
      } finally {
        u.value = !1;
      }
    }
    async function B() {
      var te;
      f.value = null;
      try {
        const Z = {};
        C.value && (Z.civitai_api_key = _.value || null), $.value && (Z.huggingface_token = g.value || null), w.value !== T(((te = p.value) == null ? void 0 : te.comfyui_extra_args) || []) && (Z.comfyui_extra_args = P(w.value)), await c(Z, a.workspacePath || void 0), await U(), f.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          f.value = null;
        }, 3e3);
      } catch (Z) {
        const X = Z instanceof Error ? Z.message : "Failed to save settings";
        f.value = { type: "error", message: X }, l("error", X);
      }
    }
    function I() {
      p.value && (_.value = p.value.civitai_api_key || "", g.value = p.value.huggingface_token || "", w.value = T(p.value.comfyui_extra_args || []), C.value = !1, $.value = !1, f.value = null);
    }
    function N(te) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(te)), console.log("[ComfyGit] Auto-refresh setting saved:", te);
    }
    function se(te) {
      te ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", te ? "enabled" : "disabled");
    }
    return s({
      saveSettings: B,
      resetSettings: I,
      hasChanges: R,
      loadSettings: U
    }), at(U), (te, Z) => (n(), i("div", i3, [
      u.value ? (n(), D(Ns, {
        key: 0,
        message: "Loading workspace settings..."
      })) : m.value ? (n(), D(Us, {
        key: 1,
        message: m.value,
        retry: !0,
        onRetry: U
      }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
        S(ht, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var X, G;
            return [
              t("div", r3, [
                t("div", c3, [
                  Z[7] || (Z[7] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  Z[8] || (Z[8] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", u3, d(((X = v.value) == null ? void 0 : X.workspace_path) || "Loading..."), 1)
                ]),
                t("div", d3, [
                  Z[9] || (Z[9] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  Z[10] || (Z[10] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", m3, d(((G = v.value) == null ? void 0 : G.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        S(ht, { title: "API CREDENTIALS" }, {
          default: h(() => [
            t("div", f3, [
              S(zo, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  S(Zo, {
                    modelValue: _.value,
                    "onUpdate:modelValue": Z[0] || (Z[0] = (X) => _.value = X),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: Z[1] || (Z[1] = (X) => C.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              S(zo, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: h(() => [
                  S(Zo, {
                    modelValue: g.value,
                    "onUpdate:modelValue": Z[2] || (Z[2] = (X) => g.value = X),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: Z[3] || (Z[3] = (X) => $.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        S(ht, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            t("div", v3, [
              S(zo, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  S(Zo, {
                    modelValue: w.value,
                    "onUpdate:modelValue": Z[4] || (Z[4] = (X) => w.value = X),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              Z[11] || (Z[11] = t("div", { class: "setting-hint" }, [
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
        S(ht, { title: "UI SETTINGS" }, {
          default: h(() => [
            t("div", p3, [
              S(zo, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  S(ci, {
                    modelValue: x.value,
                    "onUpdate:modelValue": [
                      Z[5] || (Z[5] = (X) => x.value = X),
                      N
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              S(zo, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  S(ci, {
                    modelValue: O.value,
                    "onUpdate:modelValue": [
                      Z[6] || (Z[6] = (X) => O.value = X),
                      se
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        f.value ? (n(), D(hn, {
          key: 0,
          variant: (f.value.type === "success", "compact")
        }, {
          default: h(() => [
            t("span", {
              style: Jt({ color: f.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, d(f.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), Br = /* @__PURE__ */ we(g3, [["__scopeId", "data-v-9c5b427b"]]), h3 = /* @__PURE__ */ he({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (n(), D(Gt, null, {
      header: h(() => [
        S(jt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var r, c;
            return [
              S(ve, {
                variant: "primary",
                size: "sm",
                disabled: !((r = s.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (u) => {
                  var m;
                  return (m = s.value) == null ? void 0 : m.saveSettings();
                })
              }, {
                default: h(() => [...l[2] || (l[2] = [
                  b(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = s.value) != null && c.hasChanges ? (n(), D(ve, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var m;
                  return (m = s.value) == null ? void 0 : m.resetSettings();
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
        S(Br, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), y3 = { class: "base-tabs" }, w3 = ["disabled", "onClick"], _3 = {
  key: 0,
  class: "base-tabs__badge"
}, k3 = /* @__PURE__ */ he({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const o = e, a = s;
    function l(r) {
      var c;
      (c = o.tabs.find((u) => u.id === r)) != null && c.disabled || a("update:modelValue", r);
    }
    return (r, c) => (n(), i("div", y3, [
      (n(!0), i(j, null, ge(e.tabs, (u) => (n(), i("button", {
        key: u.id,
        class: Pe([
          "base-tabs__tab",
          {
            active: e.modelValue === u.id,
            disabled: u.disabled
          }
        ]),
        disabled: u.disabled,
        onClick: (m) => l(u.id)
      }, [
        b(d(u.label) + " ", 1),
        u.badge ? (n(), i("span", _3, d(u.badge), 1)) : y("", !0)
      ], 10, w3))), 128))
    ]));
  }
}), Wr = /* @__PURE__ */ we(k3, [["__scopeId", "data-v-ad5e6cad"]]), b3 = { class: "log-viewer-wrapper" }, $3 = ["disabled", "title"], C3 = /* @__PURE__ */ he({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = k(null), a = k("idle"), l = A(() => s.logs.map((f) => ({
      text: s.rawFormat || !f.timestamp ? f.message : `${f.timestamp} - ${f.name} - ${f.level} - ${f.func}:${f.line} - ${f.message}`,
      level: f.level
    })));
    async function r() {
      var v;
      await Et();
      const f = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      f && (f.scrollTop = f.scrollHeight);
    }
    at(r), Ct(() => s.logs, r);
    async function c() {
      if (l.value.length === 0) return;
      const f = l.value.map((v) => v.text).join(`
`);
      try {
        await navigator.clipboard.writeText(f), a.value = "copied", setTimeout(() => {
          a.value = "idle";
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy logs:", v);
      }
    }
    function u(f) {
      (f.ctrlKey || f.metaKey) && f.key === "c" && f.stopPropagation();
    }
    function m(f) {
      f.stopPropagation();
    }
    return (f, v) => (n(), i("div", b3, [
      t("div", {
        ref_key: "logOutputElement",
        ref: o,
        class: "log-output",
        onKeydown: u,
        onCopy: m,
        tabindex: "0"
      }, [
        t("button", {
          class: "copy-overlay-btn",
          onClick: c,
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy all logs"
        }, d(a.value === "copied" ? "Copied!" : "Copy"), 9, $3),
        (n(!0), i(j, null, ge(l.value, (p, _) => (n(), i("div", {
          key: _,
          class: Pe(`log-line log-level-${p.level.toLowerCase()}`)
        }, d(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), Gr = /* @__PURE__ */ we(C3, [["__scopeId", "data-v-c0cc6d21"]]), x3 = /* @__PURE__ */ he({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = rt(), c = k("workspace"), u = k([]), m = k(!1), f = k(null), v = k(!1), p = k(null), _ = k(null), g = k(!1), w = A(() => c.value === "workspace" ? p.value : _.value);
    async function C() {
      m.value = !0, f.value = null;
      try {
        c.value === "workspace" ? u.value = await s(void 0, 500) : u.value = await a(void 0, 500);
      } catch (O) {
        f.value = O instanceof Error ? O.message : `Failed to load ${c.value} logs`;
      } finally {
        m.value = !1;
      }
    }
    async function $() {
      try {
        const [O, T] = await Promise.all([
          o(),
          l()
        ]);
        O.exists && (p.value = O.path), T.exists && (_.value = T.path);
      } catch {
      }
    }
    async function x() {
      if (w.value) {
        g.value = !0;
        try {
          await r(w.value);
        } catch (O) {
          console.error("Failed to open log file:", O);
        } finally {
          g.value = !1;
        }
      }
    }
    return Ct(c, () => {
      C();
    }), at(() => {
      C(), $();
    }), (O, T) => (n(), i(j, null, [
      S(Gt, null, {
        header: h(() => [
          S(jt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (P) => v.value = !0)
          }, {
            actions: h(() => [
              S(ve, {
                variant: "secondary",
                size: "sm",
                onClick: x,
                disabled: !w.value || g.value,
                title: "Open log file in default editor"
              }, {
                default: h(() => [
                  b(d(g.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              S(ve, {
                variant: "secondary",
                size: "sm",
                onClick: C,
                disabled: m.value
              }, {
                default: h(() => [
                  b(d(m.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          S(Wr, {
            modelValue: c.value,
            "onUpdate:modelValue": T[1] || (T[1] = (P) => c.value = P),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value ? (n(), D(Ns, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : f.value ? (n(), D(Us, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            u.value.length === 0 ? (n(), D(vs, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (n(), D(Gr, {
              key: 1,
              logs: u.value,
              "raw-format": c.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      S(ps, {
        show: v.value,
        title: "About Logs",
        onClose: T[3] || (T[3] = (P) => v.value = !1)
      }, {
        content: h(() => [...T[4] || (T[4] = [
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
          S(ve, {
            variant: "primary",
            onClick: T[2] || (T[2] = (P) => v.value = !1)
          }, {
            default: h(() => [...T[5] || (T[5] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), S3 = /* @__PURE__ */ he({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: a, openFile: l } = rt(), r = k([]), c = k(!1), u = k(null), m = k(!1), f = k("production"), v = k(null), p = k(!1);
    async function _() {
      c.value = !0, u.value = null;
      try {
        r.value = await s(void 0, 500);
        try {
          const C = await o();
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
    async function w() {
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
    return at(() => {
      _(), g();
    }), (C, $) => (n(), i(j, null, [
      S(Gt, null, {
        header: h(() => [
          S(jt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (x) => m.value = !0)
          }, {
            actions: h(() => [
              S(ve, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: !v.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: h(() => [
                  b(d(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              S(ve, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: c.value
              }, {
                default: h(() => [
                  b(d(c.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: h(() => [
          c.value ? (n(), D(Ns, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (n(), D(Us, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            r.value.length === 0 ? (n(), D(vs, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (n(), D(Gr, {
              key: 1,
              logs: r.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      S(ps, {
        show: m.value,
        title: "About Environment Logs",
        onClose: $[2] || ($[2] = (x) => m.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            $[3] || ($[3] = b(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, d(f.value), 1),
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
          S(ve, {
            variant: "primary",
            onClick: $[1] || ($[1] = (x) => m.value = !1)
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
}), I3 = { class: "env-title" }, E3 = {
  key: 0,
  class: "current-badge"
}, T3 = {
  key: 0,
  class: "branch-info"
}, P3 = /* @__PURE__ */ he({
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
    return (s, o) => (n(), D(Mt, {
      status: e.isCurrent ? "synced" : void 0
    }, io({
      icon: h(() => [
        b(d(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        t("div", I3, [
          t("span", null, d(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (n(), i("span", E3, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (n(), i("span", T3, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          b(" " + d(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: h(() => [
        ot(s.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: h(() => [
          S(_t, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          S(_t, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          S(_t, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (n(), D(_t, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), M3 = /* @__PURE__ */ we(P3, [["__scopeId", "data-v-9231917a"]]), R3 = { class: "env-details" }, D3 = { class: "status-row" }, L3 = {
  key: 0,
  class: "detail-row"
}, N3 = { class: "value mono" }, U3 = {
  key: 1,
  class: "detail-row"
}, A3 = { class: "value mono small" }, O3 = { class: "collapsible-section" }, z3 = { class: "value" }, F3 = {
  key: 0,
  class: "collapsible-body"
}, V3 = { class: "item-list" }, B3 = { class: "item-name" }, W3 = { class: "item-name" }, G3 = { class: "item-name" }, j3 = { class: "item-name" }, H3 = {
  key: 0,
  class: "empty-list"
}, K3 = { class: "collapsible-section" }, q3 = { class: "value" }, Y3 = {
  key: 0,
  class: "collapsible-body"
}, Q3 = { class: "item-list" }, J3 = { class: "item-name" }, X3 = {
  key: 0,
  class: "item-meta"
}, Z3 = {
  key: 0,
  class: "empty-list"
}, ex = { class: "collapsible-section" }, tx = { class: "value" }, sx = {
  key: 0,
  class: "missing-count"
}, ox = {
  key: 0,
  class: "collapsible-body"
}, nx = { class: "item-list" }, ax = { class: "model-row" }, lx = { class: "item-name" }, ix = { class: "model-meta" }, rx = { class: "item-meta" }, cx = {
  key: 0,
  class: "item-meta"
}, ux = {
  key: 0,
  class: "empty-list"
}, dx = {
  key: 2,
  class: "section-divider"
}, mx = {
  key: 3,
  class: "detail-row"
}, fx = { class: "value" }, vx = { class: "footer-actions" }, px = /* @__PURE__ */ he({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = k(/* @__PURE__ */ new Set());
    function r(m) {
      l.value.has(m) ? l.value.delete(m) : l.value.add(m), l.value = new Set(l.value);
    }
    const c = A(() => {
      var f;
      if (!((f = o.detail) != null && f.workflows)) return !0;
      const m = o.detail.workflows;
      return !m.synced.length && !m.new.length && !m.modified.length && !m.deleted.length;
    });
    function u(m) {
      if (!m) return "Unknown";
      try {
        return new Date(m).toLocaleString(void 0, {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit"
        });
      } catch {
        return m;
      }
    }
    return (m, f) => (n(), D($t, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: f[5] || (f[5] = (v) => a("close"))
    }, {
      body: h(() => {
        var v, p, _, g, w, C, $, x, O, T, P, R, U, B;
        return [
          t("div", R3, [
            t("div", D3, [
              f[6] || (f[6] = t("span", { class: "label" }, "Status:", -1)),
              t("span", {
                class: Pe(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, d(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (n(), i("div", L3, [
              f[7] || (f[7] = t("span", { class: "label" }, "Branch:", -1)),
              t("span", N3, d(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (n(), i("div", U3, [
              f[8] || (f[8] = t("span", { class: "label" }, "Path:", -1)),
              t("span", A3, d(e.environment.path), 1)
            ])) : y("", !0),
            f[17] || (f[17] = t("div", { class: "section-divider" }, null, -1)),
            t("div", O3, [
              t("div", {
                class: "collapsible-header",
                onClick: f[0] || (f[0] = (I) => r("workflows"))
              }, [
                f[9] || (f[9] = t("span", { class: "label" }, "Workflows:", -1)),
                t("span", z3, d(((v = e.detail) == null ? void 0 : v.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (n(), i("span", {
                  key: 0,
                  class: Pe(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (_ = e.detail) != null && _.workflows && l.value.has("workflows") ? (n(), i("div", F3, [
                t("div", V3, [
                  (n(!0), i(j, null, ge(e.detail.workflows.synced, (I) => (n(), i("div", {
                    key: "synced-" + I,
                    class: "list-item"
                  }, [
                    t("span", B3, d(I), 1),
                    f[10] || (f[10] = t("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(j, null, ge(e.detail.workflows.new, (I) => (n(), i("div", {
                    key: "new-" + I,
                    class: "list-item"
                  }, [
                    t("span", W3, d(I), 1),
                    f[11] || (f[11] = t("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(j, null, ge(e.detail.workflows.modified, (I) => (n(), i("div", {
                    key: "mod-" + I,
                    class: "list-item"
                  }, [
                    t("span", G3, d(I), 1),
                    f[12] || (f[12] = t("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(j, null, ge(e.detail.workflows.deleted, (I) => (n(), i("div", {
                    key: "del-" + I,
                    class: "list-item"
                  }, [
                    t("span", j3, d(I), 1),
                    f[13] || (f[13] = t("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (n(), i("div", H3, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            t("div", K3, [
              t("div", {
                class: "collapsible-header",
                onClick: f[1] || (f[1] = (I) => r("nodes"))
              }, [
                f[14] || (f[14] = t("span", { class: "label" }, "Nodes:", -1)),
                t("span", q3, d(((g = e.detail) == null ? void 0 : g.node_count) ?? e.environment.node_count), 1),
                (w = e.detail) != null && w.nodes ? (n(), i("span", {
                  key: 0,
                  class: Pe(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (C = e.detail) != null && C.nodes && l.value.has("nodes") ? (n(), i("div", Y3, [
                t("div", Q3, [
                  (n(!0), i(j, null, ge(e.detail.nodes, (I) => (n(), i("div", {
                    key: I.name,
                    class: "list-item"
                  }, [
                    t("span", J3, d(I.name), 1),
                    I.version ? (n(), i("span", X3, d(I.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (n(), i("div", Z3, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            t("div", ex, [
              t("div", {
                class: "collapsible-header",
                onClick: f[2] || (f[2] = (I) => r("models"))
              }, [
                f[15] || (f[15] = t("span", { class: "label" }, "Models:", -1)),
                t("span", tx, [
                  b(d((($ = e.detail) == null ? void 0 : $.model_count) ?? e.environment.model_count) + " ", 1),
                  (O = (x = e.detail) == null ? void 0 : x.models) != null && O.missing.length ? (n(), i("span", sx, "(" + d(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (T = e.detail) != null && T.models ? (n(), i("span", {
                  key: 0,
                  class: Pe(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (P = e.detail) != null && P.models && l.value.has("models") ? (n(), i("div", ox, [
                t("div", nx, [
                  (n(!0), i(j, null, ge(e.detail.models.missing, (I) => (n(), i("div", {
                    key: I.filename,
                    class: "list-item model-item"
                  }, [
                    t("div", ax, [
                      t("span", lx, d(I.filename), 1),
                      t("span", {
                        class: Pe(["criticality-badge", I.criticality])
                      }, d(I.criticality), 3)
                    ]),
                    t("div", ix, [
                      t("span", rx, d(I.category), 1),
                      I.workflow_names.length ? (n(), i("span", cx, " used by: " + d(I.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (n(), i("div", ux, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (R = e.detail) != null && R.created_at || e.environment.created_at ? (n(), i("div", dx)) : y("", !0),
            (U = e.detail) != null && U.created_at || e.environment.created_at ? (n(), i("div", mx, [
              f[16] || (f[16] = t("span", { class: "label" }, "Created:", -1)),
              t("span", fx, d(u(((B = e.detail) == null ? void 0 : B.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        t("div", vx, [
          e.canDelete ? (n(), D(De, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: f[3] || (f[3] = (v) => a("delete", e.environment.name))
          }, {
            default: h(() => [...f[18] || (f[18] = [
              b(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          f[20] || (f[20] = t("div", { class: "footer-spacer" }, null, -1)),
          S(De, {
            variant: "secondary",
            size: "sm",
            onClick: f[4] || (f[4] = (v) => a("close"))
          }, {
            default: h(() => [...f[19] || (f[19] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), gx = /* @__PURE__ */ we(px, [["__scopeId", "data-v-92e68b76"]]), jr = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Hr = "3.12", gl = [
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
], Kr = "auto", hx = { class: "progress-bar" }, yx = /* @__PURE__ */ he({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = A(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (a, l) => (n(), i("div", hx, [
      t("div", {
        class: Pe(["progress-fill", e.variant]),
        style: Jt({ width: o.value })
      }, null, 6)
    ]));
  }
}), ca = /* @__PURE__ */ we(yx, [["__scopeId", "data-v-1beb0512"]]), wx = { class: "task-progress" }, _x = { class: "progress-info" }, kx = { class: "progress-percentage" }, bx = { class: "progress-message" }, $x = {
  key: 0,
  class: "progress-steps"
}, Cx = { class: "step-icon" }, xx = { class: "step-label" }, Sx = /* @__PURE__ */ he({
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
      const r = s.steps.find((c) => c.id === l);
      return r ? s.progress >= r.progressThreshold ? "completed" : s.currentPhase === l ? "active" : "pending" : "pending";
    }
    function a(l) {
      const r = o(l);
      return r === "completed" ? "✓" : r === "active" ? "⟳" : "○";
    }
    return (l, r) => (n(), i("div", wx, [
      S(ca, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", _x, [
        t("span", kx, d(e.progress) + "%", 1),
        t("span", bx, d(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (n(), i("div", $x, [
        (n(!0), i(j, null, ge(e.steps, (c) => (n(), i("div", {
          key: c.id,
          class: Pe(["step", o(c.id)])
        }, [
          t("span", Cx, d(a(c.id)), 1),
          t("span", xx, d(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Kn = /* @__PURE__ */ we(Sx, [["__scopeId", "data-v-9d1de66c"]]), Ix = {
  key: 0,
  class: "create-env-form"
}, Ex = { class: "form-field" }, Tx = { class: "input-wrapper" }, Px = {
  key: 0,
  class: "validating-indicator"
}, Mx = {
  key: 1,
  class: "valid-indicator"
}, Rx = {
  key: 0,
  class: "field-error"
}, Dx = { class: "form-field" }, Lx = ["value"], Nx = { class: "form-field" }, Ux = ["disabled"], Ax = ["value"], Ox = { class: "form-field" }, zx = ["value"], Fx = { class: "form-field form-field--checkbox" }, Vx = { class: "form-checkbox" }, Bx = {
  key: 1,
  class: "create-env-progress"
}, Wx = { class: "creating-intro" }, Gx = {
  key: 0,
  class: "progress-warning"
}, jx = {
  key: 1,
  class: "create-error"
}, Hx = { class: "error-message" }, Kx = {
  key: 1,
  class: "footer-status"
}, qx = 10, Yx = /* @__PURE__ */ he({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = rt(), u = k(""), m = k(Hr), f = k("latest"), v = k(Kr), p = k(!1), _ = k(null), g = k(!1), w = k(!1);
    let C = null, $ = 0;
    const x = A(() => !!u.value.trim() && w.value && !_.value && !g.value && !P.value), O = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), T = k(!1), P = k(!1), R = k({
      progress: 0,
      message: ""
    });
    let U = null, B = 0;
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
    ], N = k(null);
    Ct(u, (W) => {
      w.value = !1, C && (clearTimeout(C), C = null);
      const ee = W.trim();
      if (!ee) {
        _.value = null, g.value = !1;
        return;
      }
      g.value = !0, C = setTimeout(() => {
        se(ee);
      }, 400);
    });
    async function se(W, ee = !1) {
      const ae = W.trim();
      if (!ae)
        return w.value = !1, g.value = !1, _.value = ee ? "Environment name is required" : null, !1;
      const Ne = ++$;
      g.value = !0;
      try {
        const Ke = await c(ae);
        return Ne !== $ ? !1 : (_.value = Ke.valid ? null : Ke.error || "Invalid name", w.value = !!Ke.valid, !!Ke.valid);
      } catch {
        return Ne !== $ || (_.value = "Failed to validate name", w.value = !1), !1;
      } finally {
        Ne === $ && (g.value = !1);
      }
    }
    async function te() {
      C && (clearTimeout(C), C = null), await se(u.value, !0);
    }
    function Z() {
      P.value || o("close");
    }
    async function X() {
      const W = u.value.trim();
      if (!W) {
        _.value = "Environment name is required";
        return;
      }
      if (C && (clearTimeout(C), C = null), !!await se(W, !0)) {
        P.value = !0, R.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const ae = {
            name: W,
            python_version: m.value,
            comfyui_version: f.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, Ne = await l(ae);
          Ne.status === "started" ? G() : Ne.status === "error" && (R.value = {
            progress: 0,
            message: Ne.message || "Failed to start creation",
            error: Ne.message
          });
        } catch (ae) {
          R.value = {
            progress: 0,
            message: ae instanceof Error ? ae.message : "Unknown error",
            error: ae instanceof Error ? ae.message : "Unknown error"
          };
        }
      }
    }
    function G() {
      U || (B = 0, U = window.setInterval(async () => {
        try {
          const W = await r();
          B = 0, R.value = {
            progress: W.progress ?? 0,
            message: W.message,
            phase: W.phase,
            error: W.error
          }, W.state === "complete" ? (Q(), o("created", W.environment_name || u.value.trim(), p.value)) : W.state === "error" ? (Q(), R.value.error = W.error || W.message) : W.state === "idle" && P.value && (Q(), R.value.error = "Creation was interrupted. Please try again.");
        } catch {
          B++, B >= qx && (Q(), R.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function Q() {
      U && (clearInterval(U), U = null);
    }
    function oe() {
      P.value = !1, R.value = { progress: 0, message: "" }, o("close");
    }
    async function le() {
      T.value = !0;
      try {
        O.value = await a();
      } catch (W) {
        console.error("Failed to load ComfyUI releases:", W);
      } finally {
        T.value = !1;
      }
    }
    return at(async () => {
      var W;
      await Et(), (W = N.value) == null || W.focus(), le();
    }), Ys(() => {
      Q(), C && (clearTimeout(C), C = null);
    }), (W, ee) => (n(), D($t, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !P.value,
      onClose: Z
    }, {
      body: h(() => [
        P.value ? (n(), i("div", Bx, [
          t("p", Wx, [
            ee[12] || (ee[12] = b(" Creating environment ", -1)),
            t("strong", null, d(u.value), 1),
            ee[13] || (ee[13] = b("... ", -1))
          ]),
          S(Kn, {
            progress: R.value.progress,
            message: R.value.message,
            "current-phase": R.value.phase,
            variant: R.value.error ? "error" : "default",
            "show-steps": !0,
            steps: I
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          R.value.error ? y("", !0) : (n(), i("p", Gx, " This may take several minutes. Please wait... ")),
          R.value.error ? (n(), i("div", jx, [
            t("p", Hx, d(R.value.error), 1)
          ])) : y("", !0)
        ])) : (n(), i("div", Ix, [
          t("div", Ex, [
            ee[6] || (ee[6] = t("label", { class: "form-label" }, "Name", -1)),
            t("div", Tx, [
              nt(t("input", {
                ref_key: "nameInput",
                ref: N,
                "onUpdate:modelValue": ee[0] || (ee[0] = (ae) => u.value = ae),
                type: "text",
                class: Pe(["form-input", { error: !!_.value, valid: w.value }]),
                placeholder: "my-environment",
                onKeyup: os(X, ["enter"]),
                onBlur: te
              }, null, 34), [
                [Qt, u.value]
              ]),
              g.value ? (n(), i("span", Px, "...")) : w.value ? (n(), i("span", Mx, "✓")) : y("", !0)
            ]),
            _.value ? (n(), i("div", Rx, d(_.value), 1)) : y("", !0),
            ee[7] || (ee[7] = t("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          t("div", Dx, [
            ee[8] || (ee[8] = t("label", { class: "form-label" }, "Python Version", -1)),
            nt(t("select", {
              "onUpdate:modelValue": ee[1] || (ee[1] = (ae) => m.value = ae),
              class: "form-select"
            }, [
              (n(!0), i(j, null, ge(Je(jr), (ae) => (n(), i("option", {
                key: ae,
                value: ae
              }, d(ae), 9, Lx))), 128))
            ], 512), [
              [Cs, m.value]
            ])
          ]),
          t("div", Nx, [
            ee[9] || (ee[9] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            nt(t("select", {
              "onUpdate:modelValue": ee[2] || (ee[2] = (ae) => f.value = ae),
              class: "form-select",
              disabled: T.value
            }, [
              (n(!0), i(j, null, ge(O.value, (ae) => (n(), i("option", {
                key: ae.tag_name,
                value: ae.tag_name
              }, d(ae.name), 9, Ax))), 128))
            ], 8, Ux), [
              [Cs, f.value]
            ])
          ]),
          t("div", Ox, [
            ee[10] || (ee[10] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            nt(t("select", {
              "onUpdate:modelValue": ee[3] || (ee[3] = (ae) => v.value = ae),
              class: "form-select"
            }, [
              (n(!0), i(j, null, ge(Je(gl), (ae) => (n(), i("option", {
                key: ae,
                value: ae
              }, d(ae) + d(ae === "auto" ? " (detect GPU)" : ""), 9, zx))), 128))
            ], 512), [
              [Cs, v.value]
            ])
          ]),
          t("div", Fx, [
            t("label", Vx, [
              nt(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": ee[4] || (ee[4] = (ae) => p.value = ae)
              }, null, 512), [
                [dn, p.value]
              ]),
              ee[11] || (ee[11] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        P.value ? (n(), i(j, { key: 1 }, [
          R.value.error ? (n(), D(De, {
            key: 0,
            variant: "secondary",
            onClick: oe
          }, {
            default: h(() => [...ee[16] || (ee[16] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", Kx, " Creating environment... "))
        ], 64)) : (n(), i(j, { key: 0 }, [
          S(De, {
            variant: "primary",
            disabled: !x.value,
            onClick: X
          }, {
            default: h(() => [...ee[14] || (ee[14] = [
              b(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          S(De, {
            variant: "secondary",
            onClick: ee[5] || (ee[5] = (ae) => o("close"))
          }, {
            default: h(() => [...ee[15] || (ee[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), Qx = /* @__PURE__ */ we(Yx, [["__scopeId", "data-v-3faa3d9b"]]), Jx = /* @__PURE__ */ he({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = rt(), c = k([]), u = k(!1), m = k(null), f = k(""), v = k(!1), p = k(!1), _ = k(null), g = k(null), w = A(() => {
      if (!f.value.trim()) return c.value;
      const P = f.value.toLowerCase();
      return c.value.filter(
        (R) => {
          var U;
          return R.name.toLowerCase().includes(P) || ((U = R.current_branch) == null ? void 0 : U.toLowerCase().includes(P));
        }
      );
    });
    function C(P, R) {
      p.value = !1, a("created", P, R);
    }
    function $() {
      p.value = !0;
    }
    async function x(P) {
      _.value = P, g.value = null;
      const R = await r(P.name);
      R && (g.value = R);
    }
    function O(P) {
      _.value = null, g.value = null, a("delete", P);
    }
    async function T() {
      u.value = !0, m.value = null;
      try {
        c.value = await l();
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return at(T), s({
      loadEnvironments: T,
      openCreateModal: $
    }), (P, R) => (n(), i(j, null, [
      S(Gt, null, {
        header: h(() => [
          S(jt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (U) => v.value = !0)
          }, {
            actions: h(() => [
              S(ve, {
                variant: "primary",
                size: "sm",
                onClick: $
              }, {
                default: h(() => [...R[6] || (R[6] = [
                  b(" Create ", -1)
                ])]),
                _: 1
              }),
              S(ve, {
                variant: "secondary",
                size: "sm",
                onClick: T
              }, {
                default: h(() => [...R[7] || (R[7] = [
                  b(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          S(Lo, {
            modelValue: f.value,
            "onUpdate:modelValue": R[1] || (R[1] = (U) => f.value = U),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (n(), D(Ns, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (n(), D(Us, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            w.value.length ? (n(), D(ht, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: h(() => [
                (n(!0), i(j, null, ge(w.value, (U) => (n(), D(M3, {
                  key: U.name,
                  "environment-name": U.name,
                  "is-current": U.is_current,
                  "current-branch": U.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    U.is_current ? y("", !0) : (n(), D(ve, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (B) => P.$emit("switch", U.name)
                    }, {
                      default: h(() => [...R[8] || (R[8] = [
                        b(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    S(ve, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (B) => x(U)
                    }, {
                      default: h(() => [...R[9] || (R[9] = [
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
            w.value.length ? y("", !0) : (n(), D(vs, {
              key: 1,
              icon: "🌍",
              message: f.value ? `No environments match '${f.value}'` : "No environments found. Create one to get started!"
            }, io({ _: 2 }, [
              f.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  S(ve, {
                    variant: "primary",
                    onClick: $
                  }, {
                    default: h(() => [...R[10] || (R[10] = [
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
      S(ps, {
        show: v.value,
        title: "About Environments",
        onClose: R[3] || (R[3] = (U) => v.value = !1)
      }, {
        content: h(() => [...R[11] || (R[11] = [
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
          S(ve, {
            variant: "secondary",
            onClick: R[2] || (R[2] = (U) => v.value = !1)
          }, {
            default: h(() => [...R[12] || (R[12] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (n(), D(gx, {
        key: 0,
        environment: _.value,
        detail: g.value,
        "can-delete": c.value.length > 1,
        onClose: R[4] || (R[4] = (U) => {
          _.value = null, g.value = null;
        }),
        onDelete: O
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      p.value ? (n(), D(Qx, {
        key: 1,
        onClose: R[5] || (R[5] = (U) => p.value = !1),
        onCreated: C
      })) : y("", !0)
    ], 64));
  }
}), Xx = /* @__PURE__ */ we(Jx, [["__scopeId", "data-v-0c0fbd88"]]), Zx = { class: "file-path" }, e5 = { class: "file-path-text" }, t5 = ["title"], s5 = /* @__PURE__ */ he({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = k(!1);
    async function a() {
      try {
        await navigator.clipboard.writeText(s.path), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, r) => (n(), i("div", Zx, [
      r[0] || (r[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", e5, d(e.path), 1),
      e.copyable ? (n(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: a
      }, d(o.value ? "✓" : "📋"), 9, t5)) : y("", !0)
    ]));
  }
}), o5 = /* @__PURE__ */ we(s5, [["__scopeId", "data-v-f0982173"]]), n5 = { class: "base-textarea-wrapper" }, a5 = ["value", "rows", "placeholder", "disabled", "maxlength"], l5 = {
  key: 0,
  class: "base-textarea-count"
}, i5 = /* @__PURE__ */ he({
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
    const o = e, a = s;
    function l(r) {
      r.shiftKey || r.ctrlKey || r.metaKey || o.submitOnEnter && (r.preventDefault(), a("submit"));
    }
    return (r, c) => (n(), i("div", n5, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = os(kt((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = os(kt((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          os(l, ["enter"])
        ]
      }, null, 40, a5),
      e.showCharCount && e.maxLength ? (n(), i("div", l5, d(e.modelValue.length) + " / " + d(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), Ga = /* @__PURE__ */ we(i5, [["__scopeId", "data-v-c6d16c93"]]), r5 = ["checked", "disabled"], c5 = { class: "base-checkbox-box" }, u5 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, d5 = {
  key: 0,
  class: "base-checkbox-label"
}, m5 = /* @__PURE__ */ he({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", {
      class: Pe(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked))
      }, null, 40, r5),
      t("span", c5, [
        e.modelValue ? (n(), i("svg", u5, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (n(), i("span", d5, [
        ot(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), qn = /* @__PURE__ */ we(m5, [["__scopeId", "data-v-bf17c831"]]), f5 = { class: "export-blocked" }, v5 = { class: "error-header" }, p5 = { class: "error-summary" }, g5 = { class: "error-description" }, h5 = { class: "issues-list" }, y5 = { class: "issue-message" }, w5 = {
  key: 0,
  class: "issue-details"
}, _5 = ["onClick"], k5 = { class: "issue-fix" }, b5 = {
  key: 0,
  class: "commit-section"
}, $5 = {
  key: 0,
  class: "issues-warning"
}, C5 = {
  key: 1,
  class: "commit-error"
}, x5 = /* @__PURE__ */ he({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = rt(), r = k(""), c = k(!1), u = k(!1), m = k(""), f = qs({}), v = A(
      () => o.issues.some(($) => $.type === "uncommitted_workflows" || $.type === "uncommitted_git_changes")
    ), p = A(
      () => o.issues.some(($) => $.type === "unresolved_issues")
    ), _ = A(
      () => p.value && !u.value
    ), g = A(
      () => v.value && r.value.trim() !== "" && !c.value && !_.value
    );
    function w($) {
      const x = o.issues[$];
      return f[$] || x.details.length <= 3 ? x.details : x.details.slice(0, 3);
    }
    async function C() {
      var $;
      if (g.value) {
        c.value = !0, m.value = "";
        try {
          const x = await l(r.value.trim(), u.value);
          if (x.status === "success")
            a("committed");
          else if (x.status === "blocked") {
            const O = (($ = x.issues) == null ? void 0 : $.map((T) => `${T.name}: ${T.issue}`).join("; ")) || "Unknown issues";
            m.value = `Commit blocked: ${O}`;
          } else
            m.value = x.message || "Commit failed";
        } catch (x) {
          m.value = x instanceof Error ? x.message : "Commit failed";
        } finally {
          c.value = !1;
        }
      }
    }
    return ($, x) => (n(), D($t, {
      title: v.value ? "Commit & Export" : "Cannot Export",
      size: "md",
      onClose: x[4] || (x[4] = (O) => $.$emit("close"))
    }, {
      body: h(() => [
        t("div", f5, [
          t("div", v5, [
            x[6] || (x[6] = t("span", { class: "error-icon" }, [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ], -1)),
            t("div", p5, [
              x[5] || (x[5] = t("h3", { class: "error-title" }, "Export blocked", -1)),
              t("p", g5, d(v.value ? "Commit your changes to proceed with export." : "The following issues must be resolved before exporting."), 1)
            ])
          ]),
          t("div", h5, [
            (n(!0), i(j, null, ge(e.issues, (O, T) => (n(), i("div", {
              key: T,
              class: "issue-item"
            }, [
              t("div", y5, d(O.message), 1),
              O.details.length ? (n(), i("div", w5, [
                (n(!0), i(j, null, ge(w(T), (P, R) => (n(), i("div", {
                  key: R,
                  class: "issue-detail"
                }, d(P), 1))), 128)),
                O.details.length > 3 && !f[T] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (P) => f[T] = !0
                }, " +" + d(O.details.length - 3) + " more ", 9, _5)) : y("", !0)
              ])) : y("", !0),
              t("div", k5, [
                O.type === "uncommitted_workflows" ? (n(), i(j, { key: 0 }, [
                  b(" Commit your workflow changes before exporting. ")
                ], 64)) : O.type === "uncommitted_git_changes" ? (n(), i(j, { key: 1 }, [
                  b(" Commit your changes before exporting. ")
                ], 64)) : O.type === "unresolved_issues" ? (n(), i(j, { key: 2 }, [
                  b(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          v.value ? (n(), i("div", b5, [
            p.value ? (n(), i("div", $5, [
              x[8] || (x[8] = t("div", { class: "warning-header" }, [
                t("span", { class: "warning-icon-badge" }, "!"),
                t("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              S(qn, {
                modelValue: u.value,
                "onUpdate:modelValue": x[0] || (x[0] = (O) => u.value = O),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...x[7] || (x[7] = [
                  b(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            S(Ga, {
              modelValue: r.value,
              "onUpdate:modelValue": x[1] || (x[1] = (O) => r.value = O),
              placeholder: "Describe your changes...",
              disabled: c.value || _.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: C,
              onCtrlEnter: C
            }, null, 8, ["modelValue", "disabled"]),
            m.value ? (n(), i("div", C5, d(m.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        v.value ? (n(), i(j, { key: 0 }, [
          S(De, {
            variant: "secondary",
            onClick: x[2] || (x[2] = (O) => $.$emit("close"))
          }, {
            default: h(() => [...x[9] || (x[9] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          S(De, {
            variant: u.value ? "danger" : "primary",
            disabled: !g.value,
            loading: c.value,
            onClick: C
          }, {
            default: h(() => [
              b(d(c.value ? "Committing..." : u.value ? "Force Commit & Export" : "Commit & Export"), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (n(), D(De, {
          key: 1,
          variant: "primary",
          onClick: x[3] || (x[3] = (O) => $.$emit("close"))
        }, {
          default: h(() => [...x[10] || (x[10] = [
            b(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), qr = /* @__PURE__ */ we(x5, [["__scopeId", "data-v-bd79ba24"]]), S5 = { class: "export-warnings" }, I5 = {
  key: 0,
  class: "success-header"
}, E5 = { class: "warning-header" }, T5 = { class: "warning-summary" }, P5 = { class: "warning-title" }, M5 = { class: "models-section" }, R5 = { class: "models-list" }, D5 = { class: "model-info" }, L5 = { class: "model-filename" }, N5 = { class: "model-workflows" }, U5 = ["onClick"], A5 = /* @__PURE__ */ he({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = k(!1), r = k(null), c = A(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function u() {
      r.value = null, a("revalidate");
    }
    return (m, f) => (n(), i(j, null, [
      S($t, {
        title: "Export Warnings",
        size: "md",
        onClose: f[3] || (f[3] = (v) => m.$emit("cancel"))
      }, {
        body: h(() => [
          t("div", S5, [
            e.models.length === 0 ? (n(), i("div", I5, [...f[4] || (f[4] = [
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
            ])])) : (n(), i(j, { key: 1 }, [
              t("div", E5, [
                f[6] || (f[6] = t("span", { class: "warning-icon" }, [
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
                t("div", T5, [
                  t("h3", P5, d(e.models.length) + " model" + d(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  f[5] || (f[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", M5, [
                t("div", R5, [
                  (n(!0), i(j, null, ge(c.value, (v) => (n(), i("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", D5, [
                      t("div", L5, d(v.filename), 1),
                      t("div", N5, " Used by: " + d(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (p) => r.value = v.hash
                    }, " Add Source ", 8, U5)
                  ]))), 128))
                ]),
                e.models.length > 3 && !l.value ? (n(), i("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: f[0] || (f[0] = (v) => l.value = !0)
                }, " Show " + d(e.models.length - 3) + " more model" + d(e.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : y("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: h(() => [
          S(De, {
            variant: "secondary",
            onClick: f[1] || (f[1] = (v) => m.$emit("cancel"))
          }, {
            default: h(() => [...f[7] || (f[7] = [
              b(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          S(De, {
            variant: "primary",
            onClick: f[2] || (f[2] = (v) => m.$emit("confirm"))
          }, {
            default: h(() => [
              b(d(e.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      r.value ? (n(), D(vl, {
        key: 0,
        identifier: r.value,
        onClose: u
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Yr = /* @__PURE__ */ we(A5, [["__scopeId", "data-v-b698d882"]]), O5 = { class: "export-card" }, z5 = { class: "export-path-row" }, F5 = { class: "export-actions" }, V5 = {
  key: 1,
  class: "export-warning"
}, B5 = /* @__PURE__ */ he({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = rt(), a = k(""), l = k(!1), r = k(!1), c = k(!1), u = k(null), m = k(!1), f = k(null), v = k(!1), p = k(!1), _ = A(() => l.value ? "Validating..." : r.value ? "Exporting..." : "Export Environment");
    async function g() {
      l.value = !0, u.value = null;
      try {
        const P = await s();
        f.value = P, P.can_export ? P.warnings.models_without_sources.length > 0 ? p.value = !0 : await x() : v.value = !0;
      } catch (P) {
        u.value = {
          status: "error",
          message: P instanceof Error ? P.message : "Validation failed"
        };
      } finally {
        l.value = !1;
      }
    }
    async function w() {
      p.value = !1, await x();
    }
    async function C() {
      v.value = !1, l.value = !0;
      try {
        const P = await s();
        f.value = P, P.can_export ? P.warnings.models_without_sources.length > 0 ? p.value = !0 : await x() : v.value = !0;
      } catch (P) {
        u.value = {
          status: "error",
          message: P instanceof Error ? P.message : "Re-validation failed"
        };
      } finally {
        l.value = !1;
      }
    }
    async function $() {
      try {
        const P = await s();
        f.value = P;
      } catch (P) {
        console.error("Re-validation failed:", P);
      }
    }
    async function x() {
      r.value = !0;
      try {
        const P = await o(a.value || void 0);
        u.value = P;
      } catch (P) {
        u.value = {
          status: "error",
          message: P instanceof Error ? P.message : "Export failed"
        };
      } finally {
        r.value = !1;
      }
    }
    async function O() {
      var P;
      if ((P = u.value) != null && P.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (R) {
          console.error("Failed to copy path:", R);
        }
    }
    async function T() {
      var P;
      if ((P = u.value) != null && P.path) {
        c.value = !0;
        try {
          const R = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!R.ok)
            throw new Error(`Download failed: ${R.statusText}`);
          const U = await R.blob(), B = URL.createObjectURL(U), I = u.value.path.split("/").pop() || "environment-export.tar.gz", N = document.createElement("a");
          N.href = B, N.download = I, document.body.appendChild(N), N.click(), document.body.removeChild(N), URL.revokeObjectURL(B);
        } catch (R) {
          console.error("Failed to download:", R), alert(`Download failed: ${R instanceof Error ? R.message : "Unknown error"}`);
        } finally {
          c.value = !1;
        }
      }
    }
    return (P, R) => (n(), i(j, null, [
      S(Gt, null, {
        header: h(() => [
          S(jt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: R[0] || (R[0] = (U) => m.value = !0)
          })
        ]),
        content: h(() => [
          S(ht, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              t("div", O5, [
                R[7] || (R[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", z5, [
                  S(Zo, {
                    modelValue: a.value,
                    "onUpdate:modelValue": R[1] || (R[1] = (U) => a.value = U),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", F5, [
                  S(ve, {
                    variant: "primary",
                    size: "md",
                    loading: l.value || r.value,
                    disabled: l.value || r.value,
                    onClick: g
                  }, {
                    default: h(() => [
                      R[6] || (R[6] = t("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        t("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        t("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      b(" " + d(_.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          u.value ? (n(), D(ht, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              S(Mt, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, io({
                icon: h(() => [
                  b(d(u.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  b(d(u.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: h(() => [
                  b(d(u.value.status === "success" ? "Your environment has been exported" : u.value.message), 1)
                ]),
                _: 2
              }, [
                u.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    S(_t, { label: "Saved to:" }, {
                      default: h(() => [
                        S(o5, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (n(), D(_t, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (n(), i("div", V5, [...R[8] || (R[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    S(ve, {
                      variant: "primary",
                      size: "sm",
                      loading: c.value,
                      onClick: T
                    }, {
                      default: h(() => [...R[9] || (R[9] = [
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
                    S(ve, {
                      variant: "secondary",
                      size: "sm",
                      onClick: O
                    }, {
                      default: h(() => [...R[10] || (R[10] = [
                        b(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    S(ve, {
                      variant: "ghost",
                      size: "sm",
                      onClick: R[2] || (R[2] = (U) => u.value = null)
                    }, {
                      default: h(() => [...R[11] || (R[11] = [
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
      S(ps, {
        show: m.value,
        title: "What Gets Exported",
        onClose: R[3] || (R[3] = (U) => m.value = !1)
      }, {
        content: h(() => [...R[12] || (R[12] = [
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
      v.value && f.value ? (n(), D(qr, {
        key: 0,
        issues: f.value.blocking_issues,
        onClose: R[4] || (R[4] = (U) => v.value = !1),
        onCommitted: C
      }, null, 8, ["issues"])) : y("", !0),
      p.value && f.value ? (n(), D(Yr, {
        key: 1,
        models: f.value.warnings.models_without_sources,
        onConfirm: w,
        onCancel: R[5] || (R[5] = (U) => p.value = !1),
        onRevalidate: $
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), W5 = /* @__PURE__ */ we(B5, [["__scopeId", "data-v-ddeffd68"]]), G5 = { class: "file-input-wrapper" }, j5 = ["accept", "multiple", "disabled"], H5 = /* @__PURE__ */ he({
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
    const a = o, l = k(null);
    function r() {
      var u;
      (u = l.value) == null || u.click();
    }
    function c(u) {
      const m = u.target;
      m.files && m.files.length > 0 && (a("change", m.files), m.value = "");
    }
    return s({
      triggerInput: r
    }), (u, m) => (n(), i("div", G5, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, j5),
      S(ve, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: h(() => [
          ot(u.$slots, "default", {}, () => [
            m[0] || (m[0] = t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              t("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            b(" " + d(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), K5 = /* @__PURE__ */ we(H5, [["__scopeId", "data-v-cd192091"]]), q5 = {
  key: 0,
  class: "drop-zone-empty"
}, Y5 = { class: "drop-zone-text" }, Q5 = { class: "drop-zone-primary" }, J5 = { class: "drop-zone-secondary" }, X5 = { class: "drop-zone-actions" }, Z5 = {
  key: 1,
  class: "drop-zone-file"
}, eS = { class: "file-info" }, tS = { class: "file-details" }, sS = { class: "file-name" }, oS = { class: "file-size" }, nS = /* @__PURE__ */ he({
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
    const o = s, a = k(!1), l = k(null), r = k(0), c = A(() => l.value !== null), u = A(() => {
      var $;
      return (($ = l.value) == null ? void 0 : $.name) || "";
    }), m = A(() => {
      if (!l.value) return "";
      const $ = l.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function f($) {
      var x;
      $.stopPropagation(), r.value++, (x = $.dataTransfer) != null && x.types.includes("Files") && (a.value = !0);
    }
    function v($) {
      $.stopPropagation(), $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function p($) {
      $.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function _($) {
      var O;
      $.stopPropagation(), r.value = 0, a.value = !1;
      const x = (O = $.dataTransfer) == null ? void 0 : O.files;
      x && x.length > 0 && w(x[0]);
    }
    function g($) {
      $.length > 0 && w($[0]);
    }
    function w($) {
      l.value = $, o("fileSelected", $);
    }
    function C() {
      l.value = null, o("clear");
    }
    return ($, x) => (n(), i("div", {
      class: Pe(["file-drop-zone", { "drop-active": a.value, "has-file": c.value }]),
      onDragenter: kt(f, ["prevent"]),
      onDragover: kt(v, ["prevent"]),
      onDragleave: kt(p, ["prevent"]),
      onDrop: kt(_, ["prevent"])
    }, [
      c.value ? (n(), i("div", Z5, [
        t("div", eS, [
          x[1] || (x[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", tS, [
            t("div", sS, d(u.value), 1),
            t("div", oS, d(m.value), 1)
          ])
        ]),
        S(ve, {
          variant: "ghost",
          size: "xs",
          onClick: C,
          title: "Remove file"
        }, {
          default: h(() => [...x[2] || (x[2] = [
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
      ])) : (n(), i("div", q5, [
        x[0] || (x[0] = t("div", { class: "drop-zone-icon" }, [
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
        t("div", Y5, [
          t("p", Q5, d(e.primaryText), 1),
          t("p", J5, d(e.secondaryText), 1)
        ]),
        t("div", X5, [
          S(K5, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: g
          }, {
            default: h(() => [
              b(d(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), aS = /* @__PURE__ */ we(nS, [["__scopeId", "data-v-0f79cb86"]]), lS = { class: "import-preview" }, iS = { class: "preview-header" }, rS = {
  key: 0,
  class: "source-env"
}, cS = { class: "preview-content" }, uS = { class: "preview-section" }, dS = { class: "section-header" }, mS = { class: "section-info" }, fS = { class: "section-count" }, vS = {
  key: 0,
  class: "item-list"
}, pS = { class: "item-name" }, gS = {
  key: 0,
  class: "item-more"
}, hS = { class: "preview-section" }, yS = { class: "section-header" }, wS = { class: "section-info" }, _S = { class: "section-count" }, kS = {
  key: 0,
  class: "item-list"
}, bS = { class: "item-details" }, $S = { class: "item-name" }, CS = { class: "item-meta" }, xS = {
  key: 0,
  class: "item-more"
}, SS = { class: "preview-section" }, IS = { class: "section-header" }, ES = { class: "section-info" }, TS = { class: "section-count" }, PS = {
  key: 0,
  class: "item-list"
}, MS = { class: "item-name" }, RS = {
  key: 0,
  class: "item-more"
}, DS = {
  key: 0,
  class: "preview-section"
}, LS = { class: "git-info" }, NS = /* @__PURE__ */ he({
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
    const s = e, o = A(() => s.workflows.length), a = A(() => s.models.length), l = A(() => s.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (n(), i("div", lS, [
      t("div", iS, [
        S(qt, null, {
          default: h(() => [...u[0] || (u[0] = [
            b("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", rS, [
          u[1] || (u[1] = b(" From: ", -1)),
          S(Wa, null, {
            default: h(() => [
              b(d(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", cS, [
        t("div", uS, [
          t("div", dS, [
            u[3] || (u[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", mS, [
              u[2] || (u[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", fS, d(o.value) + " file" + d(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", vS, [
            (n(!0), i(j, null, ge(e.workflows.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
              key: m,
              class: "preview-item"
            }, [
              u[4] || (u[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", pS, d(m), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (n(), i("div", gS, " +" + d(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", hS, [
          t("div", yS, [
            u[6] || (u[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", wS, [
              u[5] || (u[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", _S, d(a.value) + " file" + d(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (n(), i("div", kS, [
            (n(!0), i(j, null, ge(e.models.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
              key: m.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", bS, [
                t("span", $S, d(m.filename), 1),
                t("span", CS, d(r(m.size)) + " • " + d(m.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (n(), i("div", xS, " +" + d(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", SS, [
          t("div", IS, [
            u[9] || (u[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", ES, [
              u[8] || (u[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", TS, d(l.value) + " node" + d(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (n(), i("div", PS, [
            (n(!0), i(j, null, ge(e.nodes.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
              key: m,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", MS, d(m), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (n(), i("div", RS, " +" + d(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (n(), i("div", DS, [
          u[11] || (u[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", LS, [
            e.gitBranch ? (n(), D(_t, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                S(Wa, null, {
                  default: h(() => [
                    b(d(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (n(), D(_t, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                S(Nr, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), US = /* @__PURE__ */ we(NS, [["__scopeId", "data-v-182fe113"]]), AS = { class: "import-config" }, OS = { class: "config-container" }, zS = { class: "config-field" }, FS = { class: "input-wrapper" }, VS = ["value"], BS = {
  key: 0,
  class: "validating-indicator"
}, WS = {
  key: 1,
  class: "valid-indicator"
}, GS = {
  key: 0,
  class: "field-error"
}, jS = { class: "config-field" }, HS = { class: "strategy-options" }, KS = ["value", "checked", "onChange"], qS = { class: "strategy-content" }, YS = { class: "strategy-label" }, QS = { class: "strategy-description" }, JS = { class: "config-field switch-field" }, XS = { class: "switch-label" }, ZS = ["checked"], e8 = { class: "advanced-section" }, t8 = { class: "advanced-content" }, s8 = { class: "config-field" }, o8 = ["value"], n8 = ["value"], a8 = /* @__PURE__ */ he({
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
    const o = e, a = s, l = k(!1), r = k(!1);
    Ct(() => o.nameError, (v) => {
      l.value = !1, r.value = !v && o.name.length > 0;
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
    function m(v) {
      const p = v.target.value;
      a("update:name", p), r.value = !1, u && clearTimeout(u), p.length > 0 ? (l.value = !0, u = setTimeout(() => {
        a("validate-name", p);
      }, 400)) : l.value = !1;
    }
    function f() {
      o.name.length > 0 && a("validate-name", o.name);
    }
    return (v, p) => (n(), i("div", AS, [
      S(qt, null, {
        default: h(() => [...p[2] || (p[2] = [
          b("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", OS, [
        t("div", zS, [
          S(Nn, { required: "" }, {
            default: h(() => [...p[3] || (p[3] = [
              b("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", FS, [
            t("input", {
              type: "text",
              class: Pe(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: m,
              onBlur: f
            }, null, 42, VS),
            l.value ? (n(), i("span", BS, "...")) : r.value ? (n(), i("span", WS, "✓")) : y("", !0)
          ]),
          e.nameError ? (n(), i("div", GS, d(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", jS, [
          S(Nn, null, {
            default: h(() => [...p[5] || (p[5] = [
              b("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", HS, [
            (n(), i(j, null, ge(c, (_) => t("label", {
              key: _.value,
              class: Pe(["strategy-option", { active: e.modelStrategy === _.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: _.value,
                checked: e.modelStrategy === _.value,
                onChange: (g) => a("update:modelStrategy", _.value)
              }, null, 40, KS),
              t("div", qS, [
                t("span", YS, d(_.label), 1),
                t("span", QS, d(_.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", JS, [
          t("label", XS, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (_) => a("update:switchAfterImport", _.target.checked))
            }, null, 40, ZS),
            p[6] || (p[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", e8, [
          p[8] || (p[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", t8, [
            t("div", s8, [
              S(Nn, null, {
                default: h(() => [...p[7] || (p[7] = [
                  b("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              t("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: p[1] || (p[1] = (_) => a("update:torchBackend", _.target.value))
              }, [
                (n(!0), i(j, null, ge(Je(gl), (_) => (n(), i("option", {
                  key: _,
                  value: _
                }, d(_) + d(_ === "auto" ? " (detect GPU)" : ""), 9, n8))), 128))
              ], 40, o8)
            ])
          ])
        ])
      ])
    ]));
  }
}), l8 = /* @__PURE__ */ we(a8, [["__scopeId", "data-v-89ea06a1"]]), i8 = { class: "import-flow" }, r8 = {
  key: 0,
  class: "import-empty"
}, c8 = { class: "git-import-section" }, u8 = { class: "git-url-input-row" }, d8 = ["disabled"], m8 = {
  key: 0,
  class: "git-error"
}, f8 = {
  key: 1,
  class: "import-configure"
}, v8 = { class: "selected-file-bar" }, p8 = {
  key: 0,
  class: "file-bar-content"
}, g8 = { class: "file-bar-info" }, h8 = { class: "file-bar-name" }, y8 = { class: "file-bar-size" }, w8 = {
  key: 1,
  class: "file-bar-content"
}, _8 = { class: "file-bar-info" }, k8 = { class: "file-bar-name" }, b8 = {
  key: 0,
  class: "preview-loading"
}, $8 = { class: "import-actions" }, C8 = {
  key: 2,
  class: "import-progress"
}, x8 = { class: "creating-intro" }, S8 = {
  key: 0,
  class: "progress-warning"
}, I8 = {
  key: 1,
  class: "import-error"
}, E8 = { class: "error-message" }, T8 = {
  key: 3,
  class: "import-complete"
}, P8 = { class: "complete-message" }, M8 = { class: "complete-title" }, R8 = { class: "complete-details" }, D8 = { class: "complete-actions" }, L8 = /* @__PURE__ */ he({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var $e, V, ie, F;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: m, executeGitImport: f, getImportProgress: v } = rt();
    let p = null;
    const _ = k(null), g = k(a.resumeImport ?? !1), w = k(!1), C = k(!1), $ = k(""), x = k(!1), O = k(null), T = k(""), P = k(null), R = k(!1), U = k(null), B = k(null), I = k({
      name: (($e = a.initialProgress) == null ? void 0 : $e.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), N = k(null), se = k({
      message: ((V = a.initialProgress) == null ? void 0 : V.message) ?? "Preparing import...",
      phase: ((ie = a.initialProgress) == null ? void 0 : ie.phase) ?? "",
      progress: ((F = a.initialProgress) == null ? void 0 : F.progress) ?? 0,
      error: null
    }), te = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Z = A(() => {
      if (!B.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const L = B.value;
      return {
        sourceEnvironment: L.comfyui_version ? `ComfyUI ${L.comfyui_version}` : "Unknown",
        workflows: L.workflows.map((ne) => ne.name),
        models: L.models.map((ne) => ({
          filename: ne.filename,
          size: 0,
          type: ne.relative_path.split("/")[0] || "model"
        })),
        nodes: L.nodes.map((ne) => ne.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), X = A(() => !x.value && !O.value && B.value && I.value.name.length > 0 && !N.value && (_.value || P.value));
    async function G(L) {
      _.value = L, x.value = !0, O.value = null, B.value = null;
      try {
        const ne = await r(L);
        B.value = ne;
      } catch (ne) {
        O.value = ne instanceof Error ? ne.message : "Failed to analyze file", console.error("Preview error:", ne);
      } finally {
        x.value = !1;
      }
    }
    function Q() {
      _.value = null, P.value = null, T.value = "", U.value = null, w.value = !1, C.value = !1, $.value = "", B.value = null, O.value = null, I.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, N.value = null, l("source-cleared");
    }
    function oe() {
      Ke(), Q(), g.value = !1, x.value = !1, R.value = !1, se.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function le() {
      if (T.value.trim()) {
        R.value = !0, U.value = null;
        try {
          const L = await c(T.value.trim());
          P.value = T.value.trim(), B.value = L;
        } catch (L) {
          U.value = L instanceof Error ? L.message : "Failed to analyze repository";
        } finally {
          R.value = !1;
        }
      }
    }
    function W(L) {
      try {
        const ne = new URL(L);
        return ne.host + ne.pathname.replace(/\.git$/, "");
      } catch {
        return L;
      }
    }
    async function ee(L) {
      if (!L) {
        N.value = "Environment name is required";
        return;
      }
      try {
        const ne = await u(L);
        N.value = ne.valid ? null : ne.error || "Invalid name";
      } catch {
        N.value = "Failed to validate name";
      }
    }
    async function ae() {
      if (I.value.name && !(!_.value && !P.value)) {
        g.value = !0, w.value = !1, se.value = { message: `Creating environment '${I.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let L;
          if (_.value)
            L = await m(
              _.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else if (P.value)
            L = await f(
              P.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          L.status === "started" ? Ne() : (C.value = !1, $.value = L.message, g.value = !1, w.value = !0);
        } catch (L) {
          C.value = !1, $.value = L instanceof Error ? L.message : "Unknown error occurred during import", g.value = !1, w.value = !0;
        }
      }
    }
    async function Ne() {
      if (p) return;
      const L = async () => {
        try {
          const Ue = await v();
          return se.value = {
            message: Ue.message,
            phase: Ue.phase || "",
            progress: Ue.progress ?? (Ue.state === "importing" ? 50 : 0),
            error: Ue.error || null
          }, Ue.state === "complete" ? (Ke(), C.value = !0, $.value = `Environment '${Ue.environment_name}' created successfully`, g.value = !1, w.value = !0, Ue.environment_name && l("import-complete", Ue.environment_name, I.value.switchAfterImport), !1) : Ue.state === "error" ? (Ke(), C.value = !1, $.value = Ue.error || Ue.message, g.value = !1, w.value = !0, !1) : !0;
        } catch (Ue) {
          return console.error("Failed to poll import progress:", Ue), !0;
        }
      };
      await L() && (p = setInterval(async () => {
        await L() || Ke();
      }, 2e3));
    }
    function Ke() {
      p && (clearInterval(p), p = null);
    }
    function je(L) {
      return L < 1024 ? `${L} B` : L < 1024 * 1024 ? `${(L / 1024).toFixed(1)} KB` : L < 1024 * 1024 * 1024 ? `${(L / (1024 * 1024)).toFixed(1)} MB` : `${(L / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return at(async () => {
      try {
        const L = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", L.state, L), L.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", L.environment_name), g.value = !0, I.value.name = L.environment_name || I.value.name || "", se.value = {
          progress: L.progress ?? 0,
          message: L.message || "Importing...",
          phase: L.phase || "",
          error: null
        }, Ne());
      } catch (L) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", L);
      }
    }), s({
      handleReset: oe,
      isImporting: g,
      canImport: X
    }), (L, ne) => {
      var Ue;
      return n(), i("div", i8, [
        !_.value && !P.value && !g.value ? (n(), i("div", r8, [
          S(aS, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: G
          }),
          ne[7] || (ne[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", c8, [
            ne[5] || (ne[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", u8, [
              nt(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ne[0] || (ne[0] = (Ae) => T.value = Ae),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: os(le, ["enter"]),
                disabled: R.value
              }, null, 40, d8), [
                [Qt, T.value]
              ]),
              S(ve, {
                variant: "primary",
                size: "sm",
                disabled: !T.value.trim() || R.value,
                onClick: le
              }, {
                default: h(() => [
                  b(d(R.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            U.value ? (n(), i("div", m8, d(U.value), 1)) : y("", !0),
            ne[6] || (ne[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (_.value || P.value) && !g.value && !w.value ? (n(), i("div", f8, [
          t("div", v8, [
            _.value ? (n(), i("div", p8, [
              ne[8] || (ne[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", g8, [
                t("div", h8, d(_.value.name), 1),
                t("div", y8, d(je(_.value.size)), 1)
              ])
            ])) : P.value ? (n(), i("div", w8, [
              ne[10] || (ne[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", _8, [
                t("div", k8, d(W(P.value)), 1),
                ne[9] || (ne[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            S(ve, {
              variant: "ghost",
              size: "sm",
              onClick: Q
            }, {
              default: h(() => [...ne[11] || (ne[11] = [
                b(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          x.value ? (n(), i("div", b8, [...ne[12] || (ne[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : O.value ? (n(), D(is, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [O.value]
          }, null, 8, ["details"])) : B.value ? (n(), D(US, {
            key: 2,
            "source-environment": Z.value.sourceEnvironment,
            workflows: Z.value.workflows,
            models: Z.value.models,
            nodes: Z.value.nodes,
            "git-branch": Z.value.gitBranch,
            "git-commit": Z.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          B.value ? (n(), D(l8, {
            key: 3,
            name: I.value.name,
            "onUpdate:name": ne[1] || (ne[1] = (Ae) => I.value.name = Ae),
            "model-strategy": I.value.modelStrategy,
            "onUpdate:modelStrategy": ne[2] || (ne[2] = (Ae) => I.value.modelStrategy = Ae),
            "torch-backend": I.value.torchBackend,
            "onUpdate:torchBackend": ne[3] || (ne[3] = (Ae) => I.value.torchBackend = Ae),
            "switch-after-import": I.value.switchAfterImport,
            "onUpdate:switchAfterImport": ne[4] || (ne[4] = (Ae) => I.value.switchAfterImport = Ae),
            "name-error": N.value,
            onValidateName: ee
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          I.value.modelStrategy === "skip" && ((Ue = B.value) != null && Ue.models_needing_download) ? (n(), D(is, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${B.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", $8, [
            S(ve, {
              variant: "secondary",
              size: "md",
              onClick: Q
            }, {
              default: h(() => [...ne[13] || (ne[13] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(ve, {
              variant: "primary",
              size: "md",
              disabled: !X.value,
              onClick: ae
            }, {
              default: h(() => [...ne[14] || (ne[14] = [
                b(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : g.value ? (n(), i("div", C8, [
          t("p", x8, [
            ne[15] || (ne[15] = b(" Importing environment ", -1)),
            t("strong", null, d(I.value.name), 1),
            ne[16] || (ne[16] = b("... ", -1))
          ]),
          S(Kn, {
            progress: se.value.progress,
            message: se.value.message,
            "current-phase": se.value.phase,
            variant: se.value.error ? "error" : "default",
            "show-steps": !0,
            steps: te
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          se.value.error ? y("", !0) : (n(), i("p", S8, " This may take several minutes. Please wait... ")),
          se.value.error ? (n(), i("div", I8, [
            t("p", E8, d(se.value.error), 1)
          ])) : y("", !0)
        ])) : w.value ? (n(), i("div", T8, [
          t("div", {
            class: Pe(["complete-icon", C.value ? "success" : "error"])
          }, d(C.value ? "✓" : "✕"), 3),
          t("div", P8, [
            t("div", M8, d(C.value ? "Import Successful" : "Import Failed"), 1),
            t("div", R8, d($.value), 1)
          ]),
          t("div", D8, [
            S(ve, {
              variant: "primary",
              size: "md",
              onClick: oe
            }, {
              default: h(() => [...ne[17] || (ne[17] = [
                b(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Qr = /* @__PURE__ */ we(L8, [["__scopeId", "data-v-72cbc04e"]]), N8 = /* @__PURE__ */ he({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, a = k(!1);
    function l(r, c) {
      c && o("import-complete-switch", r);
    }
    return (r, c) => (n(), i(j, null, [
      S(Gt, null, {
        header: h(() => [
          S(jt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: c[0] || (c[0] = (u) => a.value = !0)
          })
        ]),
        content: h(() => [
          S(Qr, { onImportComplete: l })
        ]),
        _: 1
      }),
      S(ps, {
        show: a.value,
        title: "How Import Works",
        onClose: c[1] || (c[1] = (u) => a.value = !1)
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
}), U8 = /* @__PURE__ */ we(N8, [["__scopeId", "data-v-e13bfe76"]]), Sn = ko(), A8 = 5e3, yo = k([]), Ia = k(!1), Ea = k(null);
let Fo = null;
async function In(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Jr(e) {
  const s = A(
    () => yo.value.filter((g) => g.status === "running")
  ), o = A(
    () => yo.value.filter((g) => g.status === "deploying")
  ), a = A(
    () => yo.value.filter((g) => g.status === "stopped")
  ), l = A(
    () => s.value.length + o.value.length
  ), r = A(() => {
    const g = {
      deploying: 0,
      running: 1,
      stopped: 2,
      error: 3,
      terminated: 4
    };
    return [...yo.value].sort(
      (w, C) => (g[w.status] ?? 5) - (g[C.status] ?? 5)
    );
  });
  async function c() {
    Ia.value = !0, Ea.value = null;
    try {
      let g;
      if (!Sn) {
        const w = await In("/v2/comfygit/deploy/instances");
        if (!w.ok)
          throw new Error(`Failed to fetch instances: ${w.status}`);
        g = await w.json();
      }
      yo.value = g.instances;
    } catch (g) {
      Ea.value = g instanceof Error ? g.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", g);
    } finally {
      Ia.value = !1;
    }
  }
  function u(g, w) {
    if (g.provider === "custom" && g.worker_name) {
      const C = g.id.includes(":") ? g.id.split(":").slice(1).join(":") : g.id;
      return w === "terminate" ? `/v2/comfygit/deploy/custom/${g.worker_name}/instances/${C}` : `/v2/comfygit/deploy/custom/${g.worker_name}/instances/${C}/${w}`;
    }
    return w === "terminate" ? `/v2/comfygit/deploy/${g.provider}/${g.id}` : `/v2/comfygit/deploy/${g.provider}/${g.id}/${w}`;
  }
  async function m(g) {
    try {
      if (!Sn) {
        const w = u(g, "stop"), C = await In(w, { method: "POST" });
        if (!C.ok) {
          const $ = await C.json();
          throw new Error($.message || "Failed to stop instance");
        }
      }
      await c();
    } catch (w) {
      throw console.error("[useDeployInstances] stopInstance error:", w), w;
    }
  }
  async function f(g) {
    try {
      if (!Sn) {
        const w = u(g, "start"), C = await In(w, { method: "POST" });
        if (!C.ok) {
          const $ = await C.json();
          throw new Error($.message || "Failed to start instance");
        }
      }
      await c();
    } catch (w) {
      throw console.error("[useDeployInstances] startInstance error:", w), w;
    }
  }
  async function v(g) {
    try {
      if (!Sn) {
        const w = u(g, "terminate"), C = await In(w, { method: "DELETE" });
        if (!C.ok) {
          const $ = await C.json();
          throw new Error($.message || "Failed to terminate instance");
        }
      }
      await c();
    } catch (w) {
      throw console.error("[useDeployInstances] terminateInstance error:", w), w;
    }
  }
  function p() {
    Fo || (Fo = window.setInterval(c, A8));
  }
  function _() {
    Fo && (clearInterval(Fo), Fo = null);
  }
  return Ct(o, (g) => {
    g.length > 0 && p();
  }, { immediate: !0 }), e != null && e.autoStart && (c(), p()), {
    // State
    instances: yo,
    isLoading: Ia,
    error: Ea,
    // Computed
    runningInstances: s,
    deployingInstances: o,
    stoppedInstances: a,
    liveInstanceCount: l,
    sortedInstances: r,
    // Actions
    refreshInstances: c,
    stopInstance: m,
    startInstance: f,
    terminateInstance: v,
    // Polling
    startPolling: p,
    stopPolling: _
  };
}
const O8 = { class: "instance-header" }, z8 = { class: "provider-badge" }, F8 = { class: "instance-name" }, V8 = {
  key: 0,
  class: "spinner"
}, B8 = { class: "instance-details" }, W8 = {
  key: 0,
  class: "detail"
}, G8 = {
  key: 1,
  class: "detail instance-url"
}, j8 = {
  key: 2,
  class: "detail"
}, H8 = {
  key: 3,
  class: "detail"
}, K8 = {
  key: 4,
  class: "detail total-cost"
}, q8 = {
  key: 0,
  class: "deployment-progress"
}, Y8 = { class: "progress-message" }, Q8 = { class: "instance-actions" }, J8 = /* @__PURE__ */ he({
  __name: "InstanceCard",
  props: {
    instance: {},
    isLoading: { type: Boolean }
  },
  emits: ["stop", "start", "terminate"],
  setup(e) {
    const s = e, o = A(() => s.instance.provider === "custom" && s.instance.worker_name ? s.instance.worker_name : {
      runpod: "RunPod",
      vast: "Vast.ai",
      custom: "Custom"
    }[s.instance.provider] || s.instance.provider), a = A(() => ({
      deploying: "Deploying",
      starting: "Starting",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[s.instance.status] || s.instance.status), l = A(() => `status-${s.instance.status}`);
    function r() {
      s.instance.comfyui_url && window.open(s.instance.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function c() {
      s.instance.console_url && window.open(s.instance.console_url, "_blank", "noopener,noreferrer");
    }
    function u(m) {
      const f = Math.floor(m / 3600), v = Math.floor(m % 3600 / 60);
      return f > 0 ? `${f}h ${v}m` : `${v}m`;
    }
    return (m, f) => (n(), i("div", {
      class: Pe(["instance-card", l.value])
    }, [
      t("div", O8, [
        t("span", z8, d(o.value), 1),
        t("span", F8, d(e.instance.name), 1),
        t("span", {
          class: Pe(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (n(), i("span", V8)) : y("", !0),
          b(" " + d(a.value), 1)
        ], 2)
      ]),
      t("div", B8, [
        e.instance.gpu_type ? (n(), i("span", W8, d(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (n(), i("span", G8, d(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (n(), i("span", j8, d(u(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (n(), i("span", H8, "$" + d(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (n(), i("span", K8, "$" + d(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (n(), i("div", q8, [
        t("div", Y8, d(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (n(), D(ca, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", Q8, [
        e.instance.status === "running" && e.instance.comfyui_url ? (n(), D(ve, {
          key: 0,
          variant: "primary",
          size: "xs",
          onClick: r
        }, {
          default: h(() => [...f[3] || (f[3] = [
            b(" Open ComfyUI ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.console_url && e.instance.provider !== "custom" ? (n(), D(ve, {
          key: 1,
          variant: "ghost",
          size: "xs",
          onClick: c
        }, {
          default: h(() => [...f[4] || (f[4] = [
            b(" Console ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.status === "running" ? (n(), D(ve, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: f[0] || (f[0] = (v) => m.$emit("stop", e.instance))
        }, {
          default: h(() => [...f[5] || (f[5] = [
            b(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        e.instance.status === "stopped" ? (n(), D(ve, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: f[1] || (f[1] = (v) => m.$emit("start", e.instance))
        }, {
          default: h(() => [...f[6] || (f[6] = [
            b(" Start ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        S(ve, {
          variant: "destructive",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: f[2] || (f[2] = (v) => m.$emit("terminate", e.instance))
        }, {
          default: h(() => [...f[7] || (f[7] = [
            b(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), X8 = /* @__PURE__ */ we(J8, [["__scopeId", "data-v-746c3894"]]), Z8 = { class: "instances-tab" }, e4 = { class: "instances-header" }, t4 = {
  key: 0,
  class: "loading-state"
}, s4 = {
  key: 1,
  class: "empty-state"
}, o4 = {
  key: 2,
  class: "instances-list"
}, n4 = /* @__PURE__ */ he({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(e) {
    const s = e, o = A(() => {
      const a = {
        deploying: 0,
        running: 1,
        stopped: 2,
        error: 3,
        terminated: 4
      };
      return [...s.instances].sort(
        (l, r) => (a[l.status] ?? 5) - (a[r.status] ?? 5)
      );
    });
    return (a, l) => (n(), i("div", Z8, [
      t("div", e4, [
        S(qt, null, {
          default: h(() => [...l[4] || (l[4] = [
            b("Active Instances", -1)
          ])]),
          _: 1
        }),
        S(ve, {
          variant: "ghost",
          size: "xs",
          loading: e.isLoading,
          onClick: l[0] || (l[0] = (r) => a.$emit("refresh"))
        }, {
          default: h(() => [...l[5] || (l[5] = [
            b(" Refresh ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      e.isLoading && e.instances.length === 0 ? (n(), i("div", t4, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        b(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (n(), i("div", s4, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (n(), i("div", o4, [
        (n(!0), i(j, null, ge(o.value, (r) => (n(), D(X8, {
          key: r.id,
          instance: r,
          "is-loading": e.actionLoadingId === r.id,
          onStop: l[1] || (l[1] = (c) => a.$emit("stop", c)),
          onStart: l[2] || (l[2] = (c) => a.$emit("start", c)),
          onTerminate: l[3] || (l[3] = (c) => a.$emit("terminate", c))
        }, null, 8, ["instance", "is-loading"]))), 128))
      ]))
    ]));
  }
}), a4 = /* @__PURE__ */ we(n4, [["__scopeId", "data-v-ba614fc3"]]), l4 = { class: "remote-header" }, i4 = { class: "remote-info" }, r4 = { class: "remote-icon" }, c4 = { class: "remote-name" }, u4 = {
  key: 0,
  class: "default-badge"
}, d4 = {
  key: 1,
  class: "sync-badge"
}, m4 = {
  key: 0,
  class: "ahead"
}, f4 = {
  key: 1,
  class: "behind"
}, v4 = {
  key: 1,
  class: "synced"
}, p4 = ["href"], g4 = {
  key: 1,
  class: "remote-url-text"
}, h4 = { class: "remote-actions" }, y4 = /* @__PURE__ */ he({
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
    const s = e, o = A(() => s.remote.is_default), a = A(() => {
      const r = s.remote.fetch_url, c = r.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return c ? `https://${c[1]}/${c[2]}` : r.startsWith("https://") || r.startsWith("http://") ? r.replace(/\.git$/, "") : null;
    }), l = A(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (r, c) => (n(), i("div", {
      class: Pe(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", l4, [
        t("div", i4, [
          t("span", r4, d(o.value ? "🔗" : "🌐"), 1),
          t("span", c4, d(e.remote.name), 1),
          o.value ? (n(), i("span", u4, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", d4, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", m4, "↑" + d(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", f4, "↓" + d(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", v4, "✓ synced"))
          ])) : y("", !0)
        ]),
        a.value ? (n(), i("a", {
          key: 0,
          href: a.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: c[0] || (c[0] = kt(() => {
          }, ["stop"]))
        }, d(l.value), 9, p4)) : (n(), i("span", g4, d(l.value), 1))
      ]),
      t("div", h4, [
        S(ve, {
          variant: "secondary",
          size: "xs",
          loading: e.isFetching,
          onClick: c[1] || (c[1] = (u) => r.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...c[4] || (c[4] = [
            b(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        e.syncStatus && e.syncStatus.ahead > 0 ? (n(), D(ve, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: e.isPushing,
          onClick: c[2] || (c[2] = (u) => r.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            b(" Push ↑" + d(e.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : y("", !0),
        S(ve, {
          variant: e.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: c[3] || (c[3] = (u) => r.$emit("select", e.remote.name))
        }, {
          default: h(() => [
            b(d(e.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), Xr = /* @__PURE__ */ we(y4, [["__scopeId", "data-v-d687d161"]]), w4 = { class: "runpod-tab" }, _4 = { class: "api-key-card" }, k4 = { class: "api-key-row" }, b4 = { class: "api-key-input-wrapper" }, $4 = ["type", "disabled"], C4 = ["title"], x4 = { class: "status-icon" }, S4 = { class: "status-text" }, I4 = {
  key: 0,
  class: "credit-balance"
}, E4 = { class: "config-card" }, T4 = { class: "config-row" }, P4 = ["disabled"], M4 = {
  key: 0,
  value: ""
}, R4 = {
  key: 1,
  value: "",
  disabled: ""
}, D4 = ["value", "disabled"], L4 = { class: "config-row" }, N4 = {
  key: 0,
  class: "loading-inline"
}, U4 = { class: "no-volumes-state" }, A4 = { class: "no-volumes-text" }, O4 = ["value"], z4 = { class: "config-row" }, F4 = ["disabled"], V4 = {
  key: 0,
  value: ""
}, B4 = {
  key: 1,
  value: ""
}, W4 = {
  key: 2,
  value: ""
}, G4 = ["value"], j4 = { class: "config-row" }, H4 = { class: "radio-group" }, K4 = { class: "radio-option" }, q4 = { class: "radio-label" }, Y4 = { class: "radio-option disabled" }, Q4 = { class: "radio-label" }, J4 = { class: "config-row" }, X4 = { class: "radio-group" }, Z4 = { class: "radio-option" }, eI = { class: "radio-label" }, tI = { class: "radio-option disabled" }, sI = { class: "radio-label" }, oI = { class: "config-row" }, nI = {
  key: 0,
  class: "loading-text"
}, aI = {
  key: 1,
  class: "empty-remotes"
}, lI = { class: "remotes-list" }, iI = {
  key: 0,
  class: "sync-warning"
}, rI = { class: "warning-content" }, cI = { class: "remotes-footer" }, uI = { class: "summary-card" }, dI = {
  key: 0,
  class: "loading-text"
}, mI = { class: "summary-row" }, fI = { class: "summary-value" }, vI = { class: "summary-row" }, pI = { class: "summary-value" }, gI = { class: "summary-row" }, hI = { class: "summary-value" }, yI = {
  key: 0,
  class: "summary-sub-row"
}, wI = { class: "summary-sub-label" }, _I = {
  key: 1,
  class: "summary-sub-row warning"
}, kI = { class: "summary-sub-label" }, bI = { class: "summary-row" }, $I = { class: "summary-value" }, CI = { class: "summary-row" }, xI = { class: "summary-value" }, SI = { class: "deployment-summary" }, II = { class: "summary-columns" }, EI = { class: "summary-column" }, TI = { class: "pricing-row" }, PI = { class: "pricing-value" }, MI = { class: "pricing-row" }, RI = { class: "pricing-value" }, DI = { class: "pricing-row" }, LI = { class: "pricing-value" }, NI = { class: "pricing-row total" }, UI = { class: "pricing-value" }, AI = { class: "summary-column" }, OI = { class: "spec-row" }, zI = { class: "spec-row" }, FI = {
  key: 0,
  class: "spec-row"
}, VI = {
  key: 1,
  class: "spec-row spot-warning"
}, BI = {
  key: 4,
  class: "deploy-actions"
}, WI = { class: "progress-content" }, GI = { class: "phase-indicator" }, jI = { key: 0 }, HI = { key: 1 }, KI = { key: 2 }, qI = {
  key: 3,
  class: "spinner"
}, YI = { class: "phase-text" }, QI = { class: "phase-name" }, JI = { class: "phase-detail" }, XI = {
  key: 0,
  class: "ready-actions"
}, ZI = { class: "console-link" }, e6 = ["href"], t6 = /* @__PURE__ */ he({
  __name: "RunPodTab",
  emits: ["toast", "navigate", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getDeploySummary: a,
      testRunPodConnection: l,
      getNetworkVolumes: r,
      getRunPodGpuTypes: c,
      deployToRunPod: u,
      getDeploymentStatus: m,
      getStoredRunPodKey: f,
      clearRunPodKey: v,
      validateDeploy: p,
      getRemotes: _,
      getRemoteSyncStatus: g,
      fetchRemote: w,
      pushToRemote: C,
      getDataCenters: $
    } = rt(), x = k(!1), O = k(""), T = k(!1), P = k(!1), R = k(null), U = k(null), B = k(""), I = k(""), N = k(""), se = k("SECURE"), te = k("ON_DEMAND"), Z = k("my-comfyui-deploy"), X = k([]), G = k({}), Q = k(!1), oe = k(null), le = k(null), W = k(null), ee = k([]), ae = k(!1), Ne = k([]), Ke = k(!1), je = k([]), $e = k(!1), V = k(null), ie = k(!1), F = k(!1), L = k(null), ne = k(!1), Ue = k(null), Ae = k(null), z = k(null), K = k(!1), ce = k(null), Se = k(!1), _e = k(!1), ke = A(() => Ne.value.find((E) => E.id === I.value) || null), Me = A(() => B.value ? Ne.value.filter((E) => E.data_center_id === B.value) : Ne.value), ye = A(() => je.value.filter((E) => E.available)), Te = A(() => oe.value && G.value[oe.value] || null), me = A(() => {
      if (!oe.value) return null;
      const E = X.value.find((M) => M.name === oe.value);
      return (E == null ? void 0 : E.fetch_url) || null;
    }), We = A(() => T.value && I.value && N.value && me.value && !F.value && !K.value), Le = (E) => {
      const M = je.value.find((tt) => tt.id === N.value);
      if (!M) return "0.00";
      if (E === "SECURE") return (M.securePrice ?? 0).toFixed(2);
      if (E === "COMMUNITY") return (M.communityPrice ?? 0).toFixed(2);
      const Ie = se.value === "SECURE";
      return E === "ON_DEMAND" ? Ie ? (M.securePrice ?? 0).toFixed(2) : (M.communityPrice ?? 0).toFixed(2) : Ie ? (M.secureSpotPrice ?? 0).toFixed(2) : (M.communitySpotPrice ?? 0).toFixed(2);
    }, fe = A(() => {
      const E = je.value.find((St) => St.id === N.value), M = Ne.value.find((St) => St.id === I.value);
      if (!E) return null;
      const Ie = se.value === "SECURE", tt = te.value === "SPOT";
      let ft;
      tt ? ft = Ie ? E.secureSpotPrice ?? 0 : E.communitySpotPrice ?? 0 : ft = Ie ? E.securePrice ?? 0 : E.communityPrice ?? 0;
      const st = M ? M.size_gb * 14e-5 : 0, bt = 4e-3;
      return {
        gpu: ft,
        volume: st,
        container: bt,
        total: ft + st + bt
      };
    });
    async function H() {
      await de(), await Promise.all([He(), Oe()]);
    }
    async function Oe() {
      Q.value = !0;
      try {
        const E = await _();
        X.value = E.remotes, await Promise.all(
          E.remotes.map(async (Ie) => {
            const tt = await g(Ie.name);
            tt && (G.value[Ie.name] = tt);
          })
        );
        const M = E.remotes.find((Ie) => Ie.is_default);
        M ? oe.value = M.name : E.remotes.length > 0 && (oe.value = E.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        Q.value = !1;
      }
    }
    async function xe(E) {
      le.value = E;
      try {
        await w(E);
        const M = await g(E);
        M && (G.value[E] = M), o("toast", `Fetched from ${E}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        le.value = null;
      }
    }
    async function Ce(E) {
      W.value = E;
      try {
        await C(E, { force: !1 });
        const M = await g(E);
        M && (G.value[E] = M), o("toast", `Pushed to ${E}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        W.value = null;
      }
    }
    function Re(E) {
      oe.value = E;
    }
    async function Ee() {
      if (O.value) {
        P.value = !0, R.value = null;
        try {
          const E = await l(O.value, !0);
          E.status === "success" ? (T.value = !0, U.value = E.credit_balance ?? null, R.value = { type: "success", message: E.message }, await H()) : R.value = { type: "error", message: E.message };
        } catch (E) {
          R.value = {
            type: "error",
            message: E instanceof Error ? E.message : "Connection test failed"
          };
        } finally {
          P.value = !1;
        }
      }
    }
    async function Y() {
      try {
        await v(), O.value = "", T.value = !1, R.value = null, U.value = null, ee.value = [], B.value = "", Ne.value = [], I.value = "", je.value = [], N.value = "", V.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function de() {
      Ke.value = !0, ae.value = !0;
      try {
        const E = await r();
        Ne.value = E.volumes;
        const M = /* @__PURE__ */ new Map();
        for (const Ie of E.volumes)
          Ie.data_center_id && !M.has(Ie.data_center_id) && M.set(Ie.data_center_id, {
            id: Ie.data_center_id,
            name: Ie.data_center_name || Ie.data_center_id,
            available: !0
          });
        if (E.volumes.length === 0) {
          const Ie = await $();
          ee.value = Ie.data_centers;
        } else
          ee.value = Array.from(M.values());
        if (Ne.value.length > 0) {
          const Ie = Ne.value[0];
          I.value = Ie.id, Ie.data_center_id && (B.value = Ie.data_center_id, await pe(Ie.data_center_id));
        } else ee.value.length > 0 && (B.value = ee.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        Ke.value = !1, ae.value = !1;
      }
    }
    async function pe(E) {
      $e.value = !0;
      try {
        const M = await c(E);
        je.value = M.gpu_types;
        const Ie = je.value.find((tt) => tt.available);
        Ie ? N.value = Ie.id : N.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        $e.value = !1;
      }
    }
    Ct(B, async (E) => {
      if (!E || Ke.value) return;
      const M = Ne.value.find((Ie) => Ie.id === I.value);
      M && M.data_center_id !== E && (I.value = ""), await pe(E);
    }), Ct(I, async (E) => {
      if (!E) {
        je.value = [], N.value = "";
        return;
      }
      if (Ke.value) return;
      const M = Ne.value.find((Ie) => Ie.id === E);
      M && M.data_center_id !== B.value ? B.value = M.data_center_id : M && await pe(M.data_center_id);
    });
    async function He() {
      ie.value = !0;
      try {
        V.value = await a();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        ie.value = !1;
      }
    }
    async function ze() {
      if (!(!N.value || !I.value)) {
        K.value = !0, L.value = null;
        try {
          const E = await p();
          ce.value = E, E.can_export ? E.warnings.models_without_sources.length > 0 ? _e.value = !0 : await qe() : Se.value = !0;
        } catch (E) {
          L.value = {
            status: "error",
            message: E instanceof Error ? E.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          K.value = !1;
        }
      }
    }
    async function Fe() {
      _e.value = !1, await qe();
    }
    async function et() {
      try {
        const E = await p();
        ce.value = E;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function qe() {
      F.value = !0;
      try {
        let E;
        if (te.value === "SPOT") {
          const Ie = je.value.find((tt) => tt.id === N.value);
          Ie && (E = se.value === "SECURE" ? Ie.secureSpotPrice : Ie.communitySpotPrice);
        }
        const M = await u({
          gpu_type_id: N.value,
          pod_name: Z.value || "my-comfyui-deploy",
          network_volume_id: I.value,
          cloud_type: se.value,
          pricing_type: te.value,
          spot_bid: E,
          import_source: me.value
        });
        L.value = M, M.status === "success" && M.pod_id ? (Ue.value = M.pod_id, ne.value = !0, mt(M.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", M.message, "error");
      } catch (E) {
        L.value = {
          status: "error",
          message: E instanceof Error ? E.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        F.value = !1;
      }
    }
    function mt(E) {
      dt(E), z.value = window.setInterval(() => dt(E), 3e3);
    }
    function ct() {
      z.value && (clearInterval(z.value), z.value = null);
    }
    async function dt(E) {
      try {
        const M = await m(E);
        Ae.value = M, (M.phase === "READY" || M.phase === "ERROR" || M.phase === "STOPPED") && (ct(), M.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (M) {
        console.error("Failed to poll deployment status:", M);
      }
    }
    function It() {
      ne.value = !1, ct(), Ue.value = null, Ae.value = null;
    }
    function Xt() {
      var E;
      (E = Ae.value) != null && E.comfyui_url && window.open(Ae.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function Lt(E) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[E || ""] || "Initializing...";
    }
    function re(E) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[E || ""] ?? 10;
    }
    return at(async () => {
      try {
        const E = await f(!0);
        E.has_key && E.key_preview && (O.value = `****${E.key_preview}`, E.valid ? (T.value = !0, U.value = E.credit_balance ?? null, R.value = { type: "success", message: "Connected to RunPod" }, await H()) : E.error && (R.value = { type: "error", message: E.error }));
      } catch {
      }
    }), Ys(() => {
      ct();
    }), (E, M) => {
      var Ie, tt, ft, st, bt, St;
      return n(), i(j, null, [
        t("div", w4, [
          S(ht, { title: "RUNPOD API KEY" }, {
            default: h(() => [
              t("div", _4, [
                t("div", k4, [
                  t("div", b4, [
                    nt(t("input", {
                      "onUpdate:modelValue": M[0] || (M[0] = (Be) => O.value = Be),
                      type: x.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: T.value
                    }, null, 8, $4), [
                      [ia, O.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: M[1] || (M[1] = (Be) => x.value = !x.value),
                      title: x.value ? "Hide key" : "Show key"
                    }, d(x.value ? "👁" : "👁‍🗨"), 9, C4)
                  ]),
                  T.value ? y("", !0) : (n(), D(ve, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: P.value,
                    disabled: !O.value || P.value,
                    onClick: Ee
                  }, {
                    default: h(() => [...M[16] || (M[16] = [
                      b(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  T.value ? (n(), D(ve, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: Y
                  }, {
                    default: h(() => [...M[17] || (M[17] = [
                      b(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                R.value ? (n(), i("div", {
                  key: 0,
                  class: Pe(["connection-status", R.value.type])
                }, [
                  t("span", x4, d(R.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", S4, d(R.value.message), 1),
                  U.value !== null ? (n(), i("span", I4, " $" + d(U.value.toFixed(2)) + " credit ", 1)) : y("", !0)
                ], 2)) : y("", !0),
                M[18] || (M[18] = t("div", { class: "api-key-help" }, [
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
          T.value ? (n(), D(ht, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: h(() => [
              t("div", E4, [
                t("div", T4, [
                  M[19] || (M[19] = t("label", { class: "config-label" }, "Region", -1)),
                  nt(t("select", {
                    "onUpdate:modelValue": M[2] || (M[2] = (Be) => B.value = Be),
                    class: "config-select",
                    disabled: ae.value
                  }, [
                    ae.value ? (n(), i("option", M4, "Loading...")) : B.value ? y("", !0) : (n(), i("option", R4, "Select a region")),
                    (n(!0), i(j, null, ge(ee.value, (Be) => (n(), i("option", {
                      key: Be.id,
                      value: Be.id,
                      disabled: !Be.available
                    }, d(Be.id) + " (" + d(Be.name) + ")" + d(Be.available ? "" : " [Unavailable]"), 9, D4))), 128))
                  ], 8, P4), [
                    [Cs, B.value]
                  ])
                ]),
                t("div", L4, [
                  M[24] || (M[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  Ke.value ? (n(), i("div", N4, "Loading volumes...")) : Me.value.length === 0 ? (n(), i(j, { key: 1 }, [
                    t("div", U4, [
                      M[20] || (M[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", A4, "No volumes in " + d(B.value || "this region"), 1)
                    ]),
                    M[21] || (M[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    M[22] || (M[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (n(), i(j, { key: 2 }, [
                    nt(t("select", {
                      "onUpdate:modelValue": M[3] || (M[3] = (Be) => I.value = Be),
                      class: "config-select"
                    }, [
                      (n(!0), i(j, null, ge(Me.value, (Be) => (n(), i("option", {
                        key: Be.id,
                        value: Be.id
                      }, d(Be.name) + " (" + d(Be.size_gb) + "GB) ", 9, O4))), 128))
                    ], 512), [
                      [Cs, I.value]
                    ]),
                    M[23] || (M[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", z4, [
                  M[25] || (M[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  nt(t("select", {
                    "onUpdate:modelValue": M[4] || (M[4] = (Be) => N.value = Be),
                    class: "config-select",
                    disabled: $e.value || !I.value
                  }, [
                    I.value ? $e.value ? (n(), i("option", B4, "Loading GPUs...")) : ye.value.length === 0 ? (n(), i("option", W4, "No GPUs available in this region")) : y("", !0) : (n(), i("option", V4, "Select a volume first")),
                    (n(!0), i(j, null, ge(ye.value, (Be) => (n(), i("option", {
                      key: Be.id,
                      value: Be.id
                    }, d(Be.displayName) + " (" + d(Be.memoryInGb) + "GB) - $" + d(se.value === "SECURE" ? (Be.securePrice ?? 0).toFixed(2) : (Be.communityPrice ?? 0).toFixed(2)) + "/hr " + d(Be.stockStatus ? `[${Be.stockStatus}]` : ""), 9, G4))), 128))
                  ], 8, F4), [
                    [Cs, N.value]
                  ])
                ]),
                t("div", j4, [
                  M[26] || (M[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", H4, [
                    t("label", K4, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": M[5] || (M[5] = (Be) => se.value = Be),
                        value: "SECURE"
                      }, null, 512), [
                        [cs, se.value]
                      ]),
                      t("span", q4, "Secure ($" + d(Le("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", Y4, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": M[6] || (M[6] = (Be) => se.value = Be),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [cs, se.value]
                      ]),
                      t("span", Q4, "Community ($" + d(Le("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", J4, [
                  M[27] || (M[27] = t("label", { class: "config-label" }, [
                    b(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", X4, [
                    t("label", Z4, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": M[7] || (M[7] = (Be) => te.value = Be),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [cs, te.value]
                      ]),
                      t("span", eI, "On-Demand ($" + d(Le("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", tI, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": M[8] || (M[8] = (Be) => te.value = Be),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [cs, te.value]
                      ]),
                      t("span", sI, "Spot ($" + d(Le("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", oI, [
                  M[28] || (M[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  nt(t("input", {
                    "onUpdate:modelValue": M[9] || (M[9] = (Be) => Z.value = Be),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [Qt, Z.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : y("", !0),
          T.value ? (n(), D(ht, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: h(() => [
              Q.value ? (n(), i("div", nI, "Loading remotes...")) : X.value.length === 0 ? (n(), i("div", aI, [
                M[30] || (M[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                S(ve, {
                  variant: "primary",
                  size: "xs",
                  onClick: M[10] || (M[10] = (Be) => o("navigate", "remotes"))
                }, {
                  default: h(() => [...M[29] || (M[29] = [
                    b(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (n(), i(j, { key: 2 }, [
                t("div", lI, [
                  (n(!0), i(j, null, ge(X.value, (Be) => (n(), D(Xr, {
                    key: Be.name,
                    remote: Be,
                    "sync-status": G.value[Be.name],
                    "is-selected": oe.value === Be.name,
                    "is-fetching": le.value === Be.name,
                    "is-pushing": W.value === Be.name,
                    onFetch: xe,
                    onPush: Ce,
                    onSelect: Re
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                Te.value && Te.value.ahead > 0 ? (n(), i("div", iI, [
                  M[31] || (M[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", rI, [
                    t("strong", null, d(Te.value.ahead) + " unpushed commit" + d(Te.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + d(oe.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  S(ve, {
                    variant: "primary",
                    size: "xs",
                    loading: W.value === oe.value,
                    onClick: M[11] || (M[11] = (Be) => oe.value && Ce(oe.value))
                  }, {
                    default: h(() => [
                      b(" Push to " + d(oe.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", cI, [
                  S(ve, {
                    variant: "link",
                    size: "xs",
                    onClick: M[12] || (M[12] = (Be) => o("navigate", "remotes"))
                  }, {
                    default: h(() => [...M[32] || (M[32] = [
                      b(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          T.value ? (n(), D(ht, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: h(() => [
              t("div", uI, [
                ie.value ? (n(), i("div", dI, "Loading environment summary...")) : V.value ? (n(), i(j, { key: 1 }, [
                  t("div", mI, [
                    M[33] || (M[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", fI, d(V.value.comfyui_version), 1)
                  ]),
                  t("div", vI, [
                    M[34] || (M[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", pI, d(V.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", gI, [
                    M[35] || (M[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", hI, d(V.value.model_count) + " models", 1)
                  ]),
                  V.value.models_with_sources > 0 ? (n(), i("div", yI, [
                    t("span", wI, "└─ " + d(V.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  V.value.models_without_sources > 0 ? (n(), i("div", _I, [
                    t("span", kI, "└─ " + d(V.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", bI, [
                    M[36] || (M[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", $I, d(V.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", CI, [
                    M[37] || (M[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", xI, "~" + d(V.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          T.value && fe.value ? (n(), D(ht, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: h(() => {
              var Be, as;
              return [
                t("div", SI, [
                  t("div", II, [
                    t("div", EI, [
                      M[42] || (M[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", TI, [
                        M[38] || (M[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", PI, "$" + d(fe.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", MI, [
                        M[39] || (M[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", RI, "$" + d(fe.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", DI, [
                        M[40] || (M[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", LI, "$" + d(fe.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      M[43] || (M[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", NI, [
                        M[41] || (M[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", UI, "~$" + d(fe.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", AI, [
                      M[45] || (M[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", OI, [
                        t("span", null, d(((Be = je.value.find((gs) => gs.id === N.value)) == null ? void 0 : Be.displayName) || "GPU") + " (" + d(((as = je.value.find((gs) => gs.id === N.value)) == null ? void 0 : as.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", zI, [
                        t("span", null, "Region: " + d(B.value), 1)
                      ]),
                      ke.value ? (n(), i("div", FI, [
                        t("span", null, "Volume: " + d(ke.value.name), 1)
                      ])) : y("", !0),
                      te.value === "SPOT" ? (n(), i("div", VI, [...M[44] || (M[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          T.value ? (n(), i("div", BI, [
            S(ve, {
              variant: "primary",
              size: "md",
              loading: K.value || F.value,
              disabled: !We.value,
              onClick: ze
            }, {
              default: h(() => [
                M[46] || (M[46] = t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  t("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                b(" " + d(K.value ? "Validating..." : F.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          L.value ? (n(), D(ht, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: h(() => [
              S(Mt, {
                status: L.value.status === "success" ? "synced" : "broken"
              }, io({
                icon: h(() => [
                  b(d(L.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  b(d(L.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: h(() => [
                  b(d(L.value.message), 1)
                ]),
                actions: h(() => [
                  S(ve, {
                    variant: "ghost",
                    size: "xs",
                    onClick: M[13] || (M[13] = (Be) => L.value = null)
                  }, {
                    default: h(() => [...M[47] || (M[47] = [
                      b(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                L.value.pod_id ? {
                  name: "details",
                  fn: h(() => [
                    S(_t, {
                      label: "Pod ID:",
                      value: L.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        ne.value ? (n(), D($t, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((Ie = Ae.value) == null ? void 0 : Ie.phase) === "READY" || ((tt = Ae.value) == null ? void 0 : tt.phase) === "ERROR" || ((ft = Ae.value) == null ? void 0 : ft.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: It
        }, io({
          body: h(() => {
            var Be, as, gs, ro, co, uo, Qs, mo, fo, vo, po, go;
            return [
              t("div", WI, [
                t("div", GI, [
                  t("div", {
                    class: Pe(["phase-icon", (as = (Be = Ae.value) == null ? void 0 : Be.phase) == null ? void 0 : as.toLowerCase()])
                  }, [
                    ((gs = Ae.value) == null ? void 0 : gs.phase) === "READY" ? (n(), i("span", jI, "✓")) : ((ro = Ae.value) == null ? void 0 : ro.phase) === "ERROR" ? (n(), i("span", HI, "✕")) : ((co = Ae.value) == null ? void 0 : co.phase) === "STOPPED" ? (n(), i("span", KI, "○")) : (n(), i("span", qI, "⟳"))
                  ], 2),
                  t("div", YI, [
                    t("div", QI, d(Lt((uo = Ae.value) == null ? void 0 : uo.phase)), 1),
                    t("div", JI, d(((Qs = Ae.value) == null ? void 0 : Qs.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                S(ca, {
                  progress: re((mo = Ae.value) == null ? void 0 : mo.phase),
                  variant: ((fo = Ae.value) == null ? void 0 : fo.phase) === "ERROR" ? "error" : ((vo = Ae.value) == null ? void 0 : vo.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((po = Ae.value) == null ? void 0 : po.phase) === "READY" ? (n(), i("div", XI, [
                  S(ve, {
                    variant: "primary",
                    size: "md",
                    onClick: Xt
                  }, {
                    default: h(() => [...M[48] || (M[48] = [
                      b(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", ZI, [
                  (go = Ae.value) != null && go.console_url ? (n(), i("a", {
                    key: 0,
                    href: Ae.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, e6)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((st = Ae.value) == null ? void 0 : st.phase) === "READY" || ((bt = Ae.value) == null ? void 0 : bt.phase) === "ERROR" || ((St = Ae.value) == null ? void 0 : St.phase) === "STOPPED" ? {
            name: "footer",
            fn: h(() => [
              S(ve, {
                variant: "ghost",
                size: "xs",
                onClick: It
              }, {
                default: h(() => [...M[49] || (M[49] = [
                  b(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        Se.value && ce.value ? (n(), D(qr, {
          key: 1,
          issues: ce.value.blocking_issues,
          onClose: M[14] || (M[14] = (Be) => Se.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        _e.value && ce.value ? (n(), D(Yr, {
          key: 2,
          models: ce.value.warnings.models_without_sources,
          onConfirm: Fe,
          onCancel: M[15] || (M[15] = (Be) => _e.value = !1),
          onRevalidate: et
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), s6 = /* @__PURE__ */ we(t6, [["__scopeId", "data-v-522cd4d9"]]), o6 = { class: "worker-header" }, n6 = { class: "worker-status" }, a6 = { class: "worker-name" }, l6 = { class: "worker-actions" }, i6 = { class: "worker-details" }, r6 = { class: "detail-item" }, c6 = { class: "detail-value" }, u6 = {
  key: 0,
  class: "detail-item"
}, d6 = { class: "detail-value" }, m6 = {
  key: 1,
  class: "detail-item"
}, f6 = { class: "detail-value mode-badge" }, v6 = {
  key: 0,
  class: "worker-stats"
}, p6 = {
  key: 0,
  class: "stat-item"
}, g6 = { key: 0 }, h6 = {
  key: 1,
  class: "worker-stats offline"
}, y6 = /* @__PURE__ */ he({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Pe(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", o6, [
        t("div", n6, [
          t("span", {
            class: Pe(["status-dot", e.worker.status])
          }, null, 2),
          t("span", a6, d(e.worker.name), 1)
        ]),
        t("div", l6, [
          e.worker.status === "online" ? (n(), D(ve, {
            key: 0,
            variant: "primary",
            size: "xs",
            disabled: e.isActionLoading,
            onClick: o[0] || (o[0] = (a) => s.$emit("deploy", e.worker))
          }, {
            default: h(() => [...o[2] || (o[2] = [
              b(" Deploy ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : y("", !0),
          S(ve, {
            variant: "ghost",
            size: "xs",
            loading: e.isActionLoading,
            onClick: o[1] || (o[1] = (a) => s.$emit("remove", e.worker.name))
          }, {
            default: h(() => [...o[3] || (o[3] = [
              b(" Remove ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ]),
      t("div", i6, [
        t("span", r6, [
          t("span", c6, d(e.worker.host) + ":" + d(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (n(), i("span", u6, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", d6, d(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (n(), i("span", m6, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", f6, d(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (n(), i("div", v6, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (n(), i("span", p6, [
          b(" • " + d(e.worker.instance_count) + " instance" + d(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (n(), i("span", g6, "(" + d(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (n(), i("div", h6, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), w6 = /* @__PURE__ */ we(y6, [["__scopeId", "data-v-b1be7134"]]), _6 = { class: "add-worker-content" }, k6 = { class: "manual-form" }, b6 = { class: "form-row" }, $6 = { class: "form-row-inline" }, C6 = { class: "form-field flex-2" }, x6 = { class: "form-field flex-1" }, S6 = { class: "form-row" }, I6 = { class: "api-key-wrapper" }, E6 = ["type"], T6 = { class: "result-icon" }, P6 = { class: "result-content" }, M6 = { class: "result-message" }, R6 = {
  key: 0,
  class: "result-detail"
}, D6 = { class: "modal-actions" }, L6 = /* @__PURE__ */ he({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = rt(), l = qs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), r = k(!1), c = k(!1), u = k(!1), m = k(null), f = A(() => l.host && l.port && l.apiKey), v = A(() => l.name && l.host && l.port && l.apiKey);
    async function p() {
      if (f.value) {
        c.value = !0, m.value = null;
        try {
          const g = await a({
            host: l.host,
            port: l.port,
            api_key: l.apiKey
          });
          g.status === "success" ? (m.value = {
            type: "success",
            message: g.message,
            gpu_info: g.gpu_info
          }, !l.name && g.gpu_info && (l.name = `worker-${l.host.split(".").pop()}`)) : m.value = {
            type: "error",
            message: g.message
          };
        } catch (g) {
          m.value = {
            type: "error",
            message: g instanceof Error ? g.message : "Connection test failed"
          };
        } finally {
          c.value = !1;
        }
      }
    }
    function _() {
      v.value && (u.value = !0, o("add", {
        name: l.name,
        host: l.host,
        port: l.port,
        api_key: l.apiKey
      }));
    }
    return (g, w) => (n(), D($t, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: w[5] || (w[5] = (C) => g.$emit("close"))
    }, {
      body: h(() => [
        t("div", _6, [
          t("div", k6, [
            t("div", b6, [
              w[6] || (w[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              nt(t("input", {
                "onUpdate:modelValue": w[0] || (w[0] = (C) => l.name = C),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [Qt, l.name]
              ])
            ]),
            t("div", $6, [
              t("div", C6, [
                w[7] || (w[7] = t("label", { class: "form-label" }, "Host", -1)),
                nt(t("input", {
                  "onUpdate:modelValue": w[1] || (w[1] = (C) => l.host = C),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [Qt, l.host]
                ])
              ]),
              t("div", x6, [
                w[8] || (w[8] = t("label", { class: "form-label" }, "Port", -1)),
                nt(t("input", {
                  "onUpdate:modelValue": w[2] || (w[2] = (C) => l.port = C),
                  type: "number",
                  class: "form-input",
                  placeholder: "9090"
                }, null, 512), [
                  [
                    Qt,
                    l.port,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ]),
            t("div", S6, [
              w[9] || (w[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", I6, [
                nt(t("input", {
                  "onUpdate:modelValue": w[3] || (w[3] = (C) => l.apiKey = C),
                  type: r.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, E6), [
                  [ia, l.apiKey]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: w[4] || (w[4] = (C) => r.value = !r.value),
                  type: "button"
                }, d(r.value ? "👁" : "👁‍🗨"), 1)
              ]),
              w[10] || (w[10] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                b(" Run "),
                t("code", null, "cg-deploy worker setup"),
                b(" on the worker to get the key ")
              ], -1))
            ]),
            m.value ? (n(), i("div", {
              key: 0,
              class: Pe(["test-result", m.value.type])
            }, [
              t("span", T6, d(m.value.type === "success" ? "✓" : "✕"), 1),
              t("div", P6, [
                t("span", M6, d(m.value.message), 1),
                m.value.gpu_info ? (n(), i("span", R6, "GPU: " + d(m.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        t("div", D6, [
          S(ve, {
            variant: "ghost",
            size: "sm",
            loading: c.value,
            disabled: !f.value || c.value,
            onClick: p
          }, {
            default: h(() => [...w[11] || (w[11] = [
              b(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          S(ve, {
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !v.value || u.value,
            onClick: _
          }, {
            default: h(() => [...w[12] || (w[12] = [
              b(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }));
  }
}), N6 = /* @__PURE__ */ we(L6, [["__scopeId", "data-v-07a00732"]]), U6 = { class: "discovered-content" }, A6 = {
  key: 0,
  class: "workers-list"
}, O6 = { class: "worker-info" }, z6 = { class: "worker-name" }, F6 = { class: "worker-address" }, V6 = {
  key: 0,
  class: "worker-gpu"
}, B6 = {
  key: 1,
  class: "empty-state"
}, W6 = {
  key: 2,
  class: "api-key-section"
}, G6 = { class: "selected-worker" }, j6 = { class: "selected-name" }, H6 = { class: "selected-address" }, K6 = { class: "form-row" }, q6 = { class: "api-key-wrapper" }, Y6 = ["type"], Q6 = { class: "result-icon" }, J6 = { class: "result-message" }, X6 = { class: "modal-actions" }, Z6 = /* @__PURE__ */ he({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = rt(), l = k(null), r = k(""), c = k(!1), u = k(!1), m = k(null), f = k(null);
    async function v(_) {
      var g;
      l.value = _, r.value = "", f.value = null, await Et(), (g = m.value) == null || g.focus();
    }
    async function p() {
      if (!(!l.value || !r.value)) {
        u.value = !0, f.value = null;
        try {
          const _ = await a({
            host: l.value.host,
            port: l.value.port,
            api_key: r.value
          });
          _.status === "success" ? o("add", {
            name: l.value.name,
            host: l.value.host,
            port: l.value.port,
            api_key: r.value
          }) : f.value = {
            type: "error",
            message: _.message
          };
        } catch (_) {
          f.value = {
            type: "error",
            message: _ instanceof Error ? _.message : "Connection failed"
          };
        } finally {
          u.value = !1;
        }
      }
    }
    return (_, g) => (n(), D($t, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: g[3] || (g[3] = (w) => _.$emit("close"))
    }, {
      body: h(() => [
        t("div", U6, [
          e.workers.length > 0 ? (n(), i("div", A6, [
            (n(!0), i(j, null, ge(e.workers, (w) => (n(), i("div", {
              key: `${w.host}:${w.port}`,
              class: "worker-item"
            }, [
              t("div", O6, [
                t("span", z6, d(w.name), 1),
                t("span", F6, d(w.host) + ":" + d(w.port), 1),
                w.gpu_info ? (n(), i("span", V6, d(w.gpu_info), 1)) : y("", !0)
              ]),
              S(ve, {
                variant: "primary",
                size: "xs",
                onClick: (C) => v(w)
              }, {
                default: h(() => [...g[4] || (g[4] = [
                  b(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (n(), i("div", B6, [...g[5] || (g[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              b("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (n(), i("div", W6, [
            t("div", G6, [
              g[6] || (g[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", j6, d(l.value.name), 1),
              t("span", H6, "(" + d(l.value.host) + ":" + d(l.value.port) + ")", 1)
            ]),
            t("div", K6, [
              g[7] || (g[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", q6, [
                nt(t("input", {
                  ref_key: "apiKeyInput",
                  ref: m,
                  "onUpdate:modelValue": g[0] || (g[0] = (w) => r.value = w),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: os(p, ["enter"])
                }, null, 40, Y6), [
                  [ia, r.value]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: g[1] || (g[1] = (w) => c.value = !c.value),
                  type: "button"
                }, d(c.value ? "👁" : "👁‍🗨"), 1)
              ]),
              g[8] || (g[8] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                b(" Run "),
                t("code", null, "cg-deploy worker setup"),
                b(" on the worker to get the key ")
              ], -1))
            ]),
            f.value ? (n(), i("div", {
              key: 0,
              class: Pe(["test-result", f.value.type])
            }, [
              t("span", Q6, d(f.value.type === "success" ? "✓" : "✕"), 1),
              t("span", J6, d(f.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", X6, [
          l.value ? (n(), D(ve, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: g[2] || (g[2] = (w) => {
              l.value = null, r.value = "", f.value = null;
            })
          }, {
            default: h(() => [...g[9] || (g[9] = [
              b(" Back ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          l.value ? (n(), D(ve, {
            key: 1,
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !r.value || u.value,
            onClick: p
          }, {
            default: h(() => [...g[10] || (g[10] = [
              b(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), eE = /* @__PURE__ */ we(Z6, [["__scopeId", "data-v-5a3e40a4"]]), tE = { class: "deploy-content" }, sE = { class: "section" }, oE = {
  key: 0,
  class: "loading-text"
}, nE = {
  key: 1,
  class: "empty-remotes"
}, aE = {
  key: 2,
  class: "remotes-list"
}, lE = { class: "section" }, iE = { class: "mode-options" }, rE = { class: "mode-option" }, cE = ["disabled"], uE = { class: "mode-option" }, dE = { class: "section" }, mE = {
  key: 0,
  class: "section"
}, fE = { class: "summary-row" }, vE = {
  key: 1,
  class: "sync-warning"
}, pE = { class: "warning-content" }, gE = { class: "modal-actions" }, hE = /* @__PURE__ */ he({
  __name: "DeployToWorkerModal",
  props: {
    worker: {}
  },
  emits: ["close", "toast", "deployed"],
  setup(e, { emit: s }) {
    const o = e, a = s, {
      getRemotes: l,
      getRemoteSyncStatus: r,
      fetchRemote: c,
      pushToRemote: u,
      getDeploySummary: m,
      deployToWorker: f
    } = rt(), v = k([]), p = k({}), _ = k(!1), g = k(null), w = k(null), C = k(null), $ = k(o.worker.mode || "native"), x = k(""), O = k(null), T = k(!1), P = A(() => g.value && p.value[g.value] || null), R = A(() => {
      if (!g.value) return null;
      const X = v.value.find((G) => G.name === g.value);
      return (X == null ? void 0 : X.fetch_url) || null;
    }), U = A(() => R.value && !T.value);
    async function B() {
      _.value = !0;
      try {
        const X = await l();
        v.value = X.remotes, await Promise.all(
          X.remotes.map(async (Q) => {
            const oe = await r(Q.name);
            oe && (p.value[Q.name] = oe);
          })
        );
        const G = X.remotes.find((Q) => Q.is_default);
        G ? g.value = G.name : X.remotes.length > 0 && (g.value = X.remotes[0].name);
      } catch {
        a("toast", "Failed to load remotes", "error");
      } finally {
        _.value = !1;
      }
    }
    async function I() {
      try {
        O.value = await m();
      } catch {
      }
    }
    async function N(X) {
      w.value = X;
      try {
        await c(X);
        const G = await r(X);
        G && (p.value[X] = G), a("toast", `Fetched from ${X}`, "success");
      } catch {
        a("toast", "Fetch failed", "error");
      } finally {
        w.value = null;
      }
    }
    async function se(X) {
      C.value = X;
      try {
        await u(X, { force: !1 });
        const G = await r(X);
        G && (p.value[X] = G), a("toast", `Pushed to ${X}`, "success");
      } catch {
        a("toast", "Push failed", "error");
      } finally {
        C.value = null;
      }
    }
    function te(X) {
      g.value = X;
    }
    async function Z() {
      if (R.value) {
        T.value = !0;
        try {
          const X = await f(o.worker.name, {
            import_source: R.value,
            mode: $.value,
            name: x.value || void 0
          });
          X.id ? (a("toast", `Deployment started: ${X.name || X.id}`, "success"), a("deployed")) : X.status === "error" ? a("toast", X.message || "Deployment failed", "error") : a("toast", "Unexpected response from worker", "error");
        } catch (X) {
          a("toast", X instanceof Error ? X.message : "Deployment failed", "error");
        } finally {
          T.value = !1;
        }
      }
    }
    return at(() => {
      B(), I();
    }), (X, G) => (n(), D($t, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: G[5] || (G[5] = (Q) => X.$emit("close"))
    }, {
      body: h(() => [
        t("div", tE, [
          t("div", sE, [
            G[7] || (G[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            _.value ? (n(), i("div", oE, "Loading remotes...")) : v.value.length === 0 ? (n(), i("div", nE, [...G[6] || (G[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (n(), i("div", aE, [
              (n(!0), i(j, null, ge(v.value, (Q) => (n(), D(Xr, {
                key: Q.name,
                remote: Q,
                "sync-status": p.value[Q.name],
                "is-selected": g.value === Q.name,
                "is-fetching": w.value === Q.name,
                "is-pushing": C.value === Q.name,
                onFetch: N,
                onPush: se,
                onSelect: te
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", lE, [
            G[10] || (G[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", iE, [
              t("label", rE, [
                nt(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": G[0] || (G[0] = (Q) => $.value = Q),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, cE), [
                  [cs, $.value]
                ]),
                G[8] || (G[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", uE, [
                nt(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": G[1] || (G[1] = (Q) => $.value = Q),
                  value: "native"
                }, null, 512), [
                  [cs, $.value]
                ]),
                G[9] || (G[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", dE, [
            G[11] || (G[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            nt(t("input", {
              "onUpdate:modelValue": G[2] || (G[2] = (Q) => x.value = Q),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [Qt, x.value]
            ])
          ]),
          O.value ? (n(), i("div", mE, [
            G[12] || (G[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", fE, " ComfyUI: " + d(O.value.comfyui_version) + " • " + d(O.value.node_count) + " nodes • " + d(O.value.model_count) + " models • " + d(O.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          P.value && P.value.ahead > 0 ? (n(), i("div", vE, [
            G[14] || (G[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", pE, [
              t("strong", null, d(P.value.ahead) + " unpushed commit" + d(P.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + d(g.value) + "' before deploying to include your latest changes.", 1)
            ]),
            S(ve, {
              variant: "primary",
              size: "xs",
              loading: C.value === g.value,
              onClick: G[3] || (G[3] = (Q) => g.value && se(g.value))
            }, {
              default: h(() => [...G[13] || (G[13] = [
                b(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", gE, [
          S(ve, {
            variant: "ghost",
            size: "sm",
            onClick: G[4] || (G[4] = (Q) => X.$emit("close"))
          }, {
            default: h(() => [...G[15] || (G[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          S(ve, {
            variant: "primary",
            size: "sm",
            loading: T.value,
            disabled: !U.value || T.value,
            onClick: Z
          }, {
            default: h(() => [...G[16] || (G[16] = [
              b(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), yE = /* @__PURE__ */ we(hE, [["__scopeId", "data-v-c12720d3"]]), wE = { class: "custom-tab" }, _E = { class: "section-header" }, kE = { class: "section-actions" }, bE = { class: "workers-content" }, $E = {
  key: 0,
  class: "loading-state"
}, CE = {
  key: 1,
  class: "empty-state"
}, xE = {
  key: 2,
  class: "workers-list"
}, SE = { class: "scan-icon" }, IE = { class: "scan-message" }, EE = /* @__PURE__ */ he({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: a,
      addCustomWorker: l,
      removeCustomWorker: r,
      scanForWorkers: c
    } = rt(), u = k([]), m = k([]), f = k(!1), v = k(!1), p = k(null), _ = k(!1), g = k(!1), w = k(null), C = k(null);
    async function $() {
      f.value = !0;
      try {
        const B = await a();
        u.value = B.workers;
      } catch (B) {
        o("toast", B instanceof Error ? B.message : "Failed to load workers", "error");
      } finally {
        f.value = !1;
      }
    }
    async function x() {
      v.value = !0, C.value = null;
      try {
        const B = await c(), I = B.discovered.filter(
          (N) => !u.value.some((se) => se.host === N.host && se.port === N.port)
        );
        m.value = I, I.length > 0 ? g.value = !0 : B.discovered.length > 0 ? C.value = {
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
    async function O(B) {
      try {
        await l(B), o("toast", `Worker '${B.name}' added`, "success"), _.value = !1, await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function T(B) {
      try {
        await l(B), o("toast", `Worker '${B.name}' added`, "success"), g.value = !1, await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function P(B) {
      p.value = B;
      try {
        await r(B), o("toast", `Worker '${B}' removed`, "success"), await $();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to remove worker", "error");
      } finally {
        p.value = null;
      }
    }
    function R(B) {
      w.value = B;
    }
    function U() {
      w.value = null, o("deployed");
    }
    return at(() => {
      $();
    }), (B, I) => (n(), i("div", wE, [
      t("div", _E, [
        I[8] || (I[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", kE, [
          S(ve, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: x
          }, {
            default: h(() => [...I[6] || (I[6] = [
              b(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          S(ve, {
            variant: "secondary",
            size: "xs",
            onClick: I[0] || (I[0] = (N) => _.value = !0)
          }, {
            default: h(() => [...I[7] || (I[7] = [
              b(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", bE, [
        f.value && u.value.length === 0 ? (n(), i("div", $E, [...I[9] || (I[9] = [
          t("span", { class: "spinner" }, null, -1),
          b(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (n(), i("div", CE, [...I[10] || (I[10] = [
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
        ])])) : (n(), i("div", xE, [
          (n(!0), i(j, null, ge(u.value, (N) => (n(), D(w6, {
            key: N.name,
            worker: N,
            "is-action-loading": p.value === N.name,
            onDeploy: R,
            onRemove: P
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      C.value ? (n(), i("div", {
        key: 0,
        class: Pe(["scan-result", C.value.type])
      }, [
        t("span", SE, d(C.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", IE, d(C.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: I[1] || (I[1] = (N) => C.value = null)
        }, "×")
      ], 2)) : y("", !0),
      g.value ? (n(), D(eE, {
        key: 1,
        workers: m.value,
        onClose: I[2] || (I[2] = (N) => g.value = !1),
        onAdd: T
      }, null, 8, ["workers"])) : y("", !0),
      _.value ? (n(), D(N6, {
        key: 2,
        onClose: I[3] || (I[3] = (N) => _.value = !1),
        onAdd: O
      })) : y("", !0),
      w.value ? (n(), D(yE, {
        key: 3,
        worker: w.value,
        onClose: I[4] || (I[4] = (N) => w.value = null),
        onToast: I[5] || (I[5] = (N, se) => o("toast", N, se)),
        onDeployed: U
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), TE = /* @__PURE__ */ we(EE, [["__scopeId", "data-v-1637dead"]]), Ta = "ComfyGit.Deploy.GitHubPAT";
function Zr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function PE(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function ME() {
  function e() {
    try {
      return localStorage.getItem(Ta);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(Ta, l);
    } catch (r) {
      console.error("[useGitAuth] Failed to save token:", r);
    }
  }
  function o() {
    try {
      localStorage.removeItem(Ta);
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
    setToken: s,
    clearToken: o,
    hasToken: a,
    isRemoteSsh: Zr,
    isRemoteHttps: PE
  };
}
const RE = { class: "settings-content" }, DE = { class: "settings-section" }, LE = {
  key: 0,
  class: "ssh-warning"
}, NE = { class: "form-row" }, UE = { class: "token-wrapper" }, AE = ["type"], OE = { class: "result-icon" }, zE = { class: "result-message" }, FE = { class: "token-actions" }, VE = /* @__PURE__ */ he({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: a, setToken: l, clearToken: r, hasToken: c } = ME(), { getRemotes: u, testGitAuth: m } = rt(), f = k(""), v = k(!1), p = k(!1), _ = k(null), g = k(!1), w = A(() => c());
    at(async () => {
      var T;
      const O = a();
      O && (f.value = O);
      try {
        const R = (T = (await u()).remotes) == null ? void 0 : T.find((U) => U.name === "origin");
        R && Zr(R.url) && (g.value = !0);
      } catch {
      }
    });
    async function C() {
      if (f.value) {
        p.value = !0, _.value = null;
        try {
          const O = await m(f.value);
          _.value = {
            type: O.status === "success" ? "success" : "error",
            message: O.message
          };
        } catch (O) {
          _.value = {
            type: "error",
            message: O instanceof Error ? O.message : "Connection test failed"
          };
        } finally {
          p.value = !1;
        }
      }
    }
    function $() {
      f.value && (l(f.value), o("saved"), o("close"));
    }
    function x() {
      r(), f.value = "", _.value = null;
    }
    return (O, T) => (n(), D($t, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: T[2] || (T[2] = (P) => O.$emit("close"))
    }, {
      body: h(() => [
        t("div", RE, [
          t("div", DE, [
            T[8] || (T[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            T[9] || (T[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            g.value ? (n(), i("div", LE, [...T[3] || (T[3] = [
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
            t("div", NE, [
              T[4] || (T[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", UE, [
                nt(t("input", {
                  "onUpdate:modelValue": T[0] || (T[0] = (P) => f.value = P),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, AE), [
                  [ia, f.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: T[1] || (T[1] = (P) => v.value = !v.value)
                }, d(v.value ? "Hide" : "Show"), 1)
              ]),
              T[5] || (T[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            _.value ? (n(), i("div", {
              key: 1,
              class: Pe(["test-result", _.value.type])
            }, [
              t("span", OE, d(_.value.type === "success" ? "✓" : "✕"), 1),
              t("span", zE, d(_.value.message), 1)
            ], 2)) : y("", !0),
            t("div", FE, [
              S(ve, {
                variant: "ghost",
                size: "sm",
                loading: p.value,
                disabled: !f.value || p.value,
                onClick: C
              }, {
                default: h(() => [...T[6] || (T[6] = [
                  b(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              w.value ? (n(), D(ve, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: x
              }, {
                default: h(() => [...T[7] || (T[7] = [
                  b(" Clear ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        S(ve, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: $
        }, {
          default: h(() => [...T[10] || (T[10] = [
            b(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), BE = /* @__PURE__ */ we(VE, [["__scopeId", "data-v-b21588ad"]]), WE = /* @__PURE__ */ he({
  __name: "DeploySection",
  emits: ["toast", "navigate"],
  setup(e, { emit: s }) {
    const o = s, {
      instances: a,
      isLoading: l,
      liveInstanceCount: r,
      refreshInstances: c,
      stopInstance: u,
      startInstance: m,
      terminateInstance: f,
      startPolling: v,
      stopPolling: p
    } = Jr(), _ = k(!1), g = k(!1), w = k("instances"), C = k(null), $ = k(null), x = A(() => [
      {
        id: "instances",
        label: "Instances",
        badge: r.value > 0 ? String(r.value) : void 0
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
    async function O(B) {
      C.value = B.id;
      try {
        await u(B), o("toast", "Instance stopped", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to stop instance", "error");
      } finally {
        C.value = null;
      }
    }
    async function T(B) {
      C.value = B.id;
      try {
        await m(B), o("toast", "Instance starting...", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to start instance", "error");
      } finally {
        C.value = null;
      }
    }
    function P(B) {
      $.value = B;
    }
    async function R() {
      const B = $.value;
      if (B) {
        $.value = null, C.value = B.id;
        try {
          await f(B), o("toast", "Instance terminated", "success");
        } catch (I) {
          o("toast", I instanceof Error ? I.message : "Failed to terminate instance", "error");
        } finally {
          C.value = null;
        }
      }
    }
    async function U() {
      await c(), w.value = "instances";
    }
    return at(() => {
      c(), v();
    }), Ys(() => {
      p();
    }), (B, I) => (n(), i(j, null, [
      S(Gt, null, {
        header: h(() => [
          S(jt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: I[1] || (I[1] = (N) => _.value = !0)
          }, {
            actions: h(() => [
              S(ve, {
                variant: "ghost",
                size: "xs",
                onClick: I[0] || (I[0] = (N) => g.value = !0)
              }, {
                default: h(() => [...I[10] || (I[10] = [
                  b(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          S(Wr, {
            modelValue: w.value,
            "onUpdate:modelValue": I[2] || (I[2] = (N) => w.value = N),
            tabs: x.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: h(() => [
          w.value === "instances" ? (n(), D(a4, {
            key: 0,
            instances: Je(a),
            "is-loading": Je(l),
            "action-loading-id": C.value,
            onRefresh: Je(c),
            onStop: O,
            onStart: T,
            onTerminate: P
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          w.value === "runpod" ? (n(), D(s6, {
            key: 1,
            onToast: I[3] || (I[3] = (N, se) => o("toast", N, se)),
            onNavigate: I[4] || (I[4] = (N) => o("navigate", N)),
            onDeployed: U
          })) : y("", !0),
          w.value === "custom" ? (n(), D(TE, {
            key: 2,
            onToast: I[5] || (I[5] = (N, se) => o("toast", N, se)),
            onDeployed: U
          })) : y("", !0)
        ]),
        _: 1
      }),
      $.value ? (n(), D(pl, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${$.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: R,
        onCancel: I[6] || (I[6] = (N) => $.value = null)
      }, null, 8, ["message"])) : y("", !0),
      S(ps, {
        show: _.value,
        title: "Deploy to Cloud",
        onClose: I[7] || (I[7] = (N) => _.value = !1)
      }, {
        content: h(() => [...I[11] || (I[11] = [
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
      g.value ? (n(), D(BE, {
        key: 1,
        onClose: I[8] || (I[8] = (N) => g.value = !1),
        onSaved: I[9] || (I[9] = (N) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), GE = /* @__PURE__ */ we(WE, [["__scopeId", "data-v-d4e32a10"]]), jE = { class: "header-info" }, HE = { class: "commit-hash" }, KE = {
  key: 0,
  class: "commit-refs"
}, qE = { class: "commit-message" }, YE = { class: "commit-date" }, QE = {
  key: 0,
  class: "loading"
}, JE = {
  key: 1,
  class: "changes-section"
}, XE = { class: "stats-row" }, ZE = { class: "stat" }, eT = { class: "stat insertions" }, tT = { class: "stat deletions" }, sT = {
  key: 0,
  class: "change-group"
}, oT = {
  key: 1,
  class: "change-group"
}, nT = {
  key: 0,
  class: "version"
}, aT = {
  key: 2,
  class: "change-group"
}, lT = { class: "change-item" }, iT = /* @__PURE__ */ he({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = rt(), a = k(null), l = k(!0), r = A(() => {
      if (!a.value) return !1;
      const u = a.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = A(() => {
      if (!a.value) return !1;
      const u = a.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return at(async () => {
      try {
        a.value = await o(s.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, m) => (n(), D($t, {
      size: "md",
      "show-close-button": !1,
      onClose: m[3] || (m[3] = (f) => u.$emit("close"))
    }, {
      header: h(() => {
        var f, v, p, _;
        return [
          t("div", jE, [
            m[4] || (m[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", HE, d(((f = a.value) == null ? void 0 : f.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (_ = (p = a.value) == null ? void 0 : p.refs) != null && _.length ? (n(), i("span", KE, [
              (n(!0), i(j, null, ge(a.value.refs, (g) => (n(), i("span", {
                key: g,
                class: "ref-badge"
              }, d(g), 1))), 128))
            ])) : y("", !0)
          ]),
          S(De, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (g) => u.$emit("close"))
          }, {
            default: h(() => [...m[5] || (m[5] = [
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
        var f, v;
        return [
          t("div", qE, d(((f = a.value) == null ? void 0 : f.message) || e.commit.message), 1),
          t("div", YE, d(((v = a.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (n(), i("div", QE, "Loading details...")) : a.value ? (n(), i("div", JE, [
            t("div", XE, [
              t("span", ZE, d(a.value.stats.files_changed) + " files", 1),
              t("span", eT, "+" + d(a.value.stats.insertions), 1),
              t("span", tT, "-" + d(a.value.stats.deletions), 1)
            ]),
            r.value ? (n(), i("div", sT, [
              S(en, { variant: "section" }, {
                default: h(() => [...m[6] || (m[6] = [
                  b("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(j, null, ge(a.value.changes.workflows.added, (p) => (n(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                m[7] || (m[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, d(p), 1)
              ]))), 128)),
              (n(!0), i(j, null, ge(a.value.changes.workflows.modified, (p) => (n(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                m[8] || (m[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, d(p), 1)
              ]))), 128)),
              (n(!0), i(j, null, ge(a.value.changes.workflows.deleted, (p) => (n(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                m[9] || (m[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, d(p), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (n(), i("div", oT, [
              S(en, { variant: "section" }, {
                default: h(() => [...m[10] || (m[10] = [
                  b("NODES", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(j, null, ge(a.value.changes.nodes.added, (p) => (n(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                m[11] || (m[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, d(p.name), 1),
                p.version ? (n(), i("span", nT, "(" + d(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (n(!0), i(j, null, ge(a.value.changes.nodes.removed, (p) => (n(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                m[12] || (m[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, d(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", aT, [
              S(en, { variant: "section" }, {
                default: h(() => [...m[13] || (m[13] = [
                  b("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", lT, [
                m[14] || (m[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, d(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        S(De, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (f) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...m[15] || (m[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        S(De, {
          variant: "primary",
          onClick: m[2] || (m[2] = (f) => u.$emit("checkout", e.commit))
        }, {
          default: h(() => [...m[16] || (m[16] = [
            b(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), rT = /* @__PURE__ */ we(iT, [["__scopeId", "data-v-d256ff6d"]]), cT = { class: "popover-header" }, uT = { class: "popover-body" }, dT = {
  key: 0,
  class: "changes-summary"
}, mT = {
  key: 0,
  class: "change-item"
}, fT = {
  key: 1,
  class: "change-item"
}, vT = {
  key: 2,
  class: "change-item"
}, pT = {
  key: 3,
  class: "change-item"
}, gT = {
  key: 4,
  class: "change-item"
}, hT = {
  key: 5,
  class: "change-item"
}, yT = {
  key: 1,
  class: "no-changes"
}, wT = {
  key: 2,
  class: "loading"
}, _T = {
  key: 3,
  class: "issues-error"
}, kT = { class: "error-header" }, bT = { class: "error-title" }, $T = { class: "issues-list" }, CT = { class: "workflow-state" }, xT = { class: "message-section" }, ST = { class: "popover-footer" }, IT = {
  key: 1,
  class: "commit-popover"
}, ET = { class: "popover-header" }, TT = { class: "popover-body" }, PT = {
  key: 0,
  class: "changes-summary"
}, MT = {
  key: 0,
  class: "change-item"
}, RT = {
  key: 1,
  class: "change-item"
}, DT = {
  key: 2,
  class: "change-item"
}, LT = {
  key: 3,
  class: "change-item"
}, NT = {
  key: 4,
  class: "change-item"
}, UT = {
  key: 5,
  class: "change-item"
}, AT = {
  key: 1,
  class: "no-changes"
}, OT = {
  key: 2,
  class: "loading"
}, zT = {
  key: 3,
  class: "issues-error"
}, FT = { class: "error-header" }, VT = { class: "error-title" }, BT = { class: "issues-list" }, WT = { class: "workflow-state" }, GT = { class: "message-section" }, jT = { class: "popover-footer" }, HT = /* @__PURE__ */ he({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = rt(), r = k(""), c = k(!1), u = k(!1), m = A(() => {
      if (!o.status) return !1;
      const w = o.status.workflows;
      return w.new.length > 0 || w.modified.length > 0 || w.deleted.length > 0 || o.status.has_changes;
    }), f = A(() => {
      if (!o.status) return !1;
      const w = o.status.workflows, C = o.status.git_changes;
      return w.new.length > 0 || w.modified.length > 0 || w.deleted.length > 0 || C.nodes_added.length > 0 || C.nodes_removed.length > 0;
    }), v = A(() => {
      var w;
      return (w = o.status) != null && w.workflows.analyzed ? o.status.workflows.analyzed.filter((C) => C.has_issues) : [];
    }), p = A(() => v.value.length > 0), _ = A(() => p.value && !u.value);
    async function g() {
      var w, C, $, x;
      if (!(p.value && !u.value) && !(!m.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const O = await l(r.value.trim(), u.value);
          if (O.status === "success") {
            const T = `Committed: ${((w = O.summary) == null ? void 0 : w.new) || 0} new, ${((C = O.summary) == null ? void 0 : C.modified) || 0} modified, ${(($ = O.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            a("committed", { success: !0, message: T });
          } else if (O.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (O.status === "blocked") {
            const T = ((x = O.issues) == null ? void 0 : x.map((P) => `${P.name}: ${P.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${T}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: O.message || "Commit failed" });
        } catch (O) {
          a("committed", { success: !1, message: O instanceof Error ? O.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (w, C) => e.asModal ? (n(), D(Dt, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: C[5] || (C[5] = ($) => a("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: C[4] || (C[4] = kt(() => {
          }, ["stop"]))
        }, [
          t("div", cT, [
            C[11] || (C[11] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            t("button", {
              class: "close-btn",
              onClick: C[0] || (C[0] = ($) => a("close"))
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
          t("div", uT, [
            e.status && m.value ? (n(), i("div", dT, [
              e.status.workflows.new.length ? (n(), i("div", mT, [
                C[12] || (C[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, d(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (n(), i("div", fT, [
                C[13] || (C[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, d(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (n(), i("div", vT, [
                C[14] || (C[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, d(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (n(), i("div", pT, [
                C[15] || (C[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, d(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (n(), i("div", gT, [
                C[16] || (C[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, d(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              f.value ? y("", !0) : (n(), i("div", hT, [...C[17] || (C[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (n(), i("div", yT, " No changes to commit ")) : (n(), i("div", wT, " Loading... ")),
            p.value ? (n(), i("div", _T, [
              t("div", kT, [
                C[18] || (C[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", bT, d(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", $T, [
                (n(!0), i(j, null, ge(v.value, ($) => (n(), i("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  t("strong", null, d($.name), 1),
                  t("span", CT, "(" + d($.sync_state) + ")", 1),
                  b(": " + d($.issue_summary), 1)
                ]))), 128))
              ]),
              S(qn, {
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
            t("div", xT, [
              S(Ga, {
                modelValue: r.value,
                "onUpdate:modelValue": C[2] || (C[2] = ($) => r.value = $),
                placeholder: _.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
                disabled: !m.value || c.value || _.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: g,
                onSubmit: g
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          t("div", ST, [
            S(De, {
              variant: "secondary",
              onClick: C[3] || (C[3] = ($) => a("close"))
            }, {
              default: h(() => [...C[20] || (C[20] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(De, {
              variant: u.value ? "danger" : "primary",
              disabled: !m.value || !r.value.trim() || c.value || _.value,
              loading: c.value,
              onClick: g
            }, {
              default: h(() => [
                b(d(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (n(), i("div", IT, [
      t("div", ET, [
        C[22] || (C[22] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: C[6] || (C[6] = ($) => a("close"))
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
      t("div", TT, [
        e.status && m.value ? (n(), i("div", PT, [
          e.status.workflows.new.length ? (n(), i("div", MT, [
            C[23] || (C[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, d(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (n(), i("div", RT, [
            C[24] || (C[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, d(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", DT, [
            C[25] || (C[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, d(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", LT, [
            C[26] || (C[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, d(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", NT, [
            C[27] || (C[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, d(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          f.value ? y("", !0) : (n(), i("div", UT, [...C[28] || (C[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", AT, " No changes to commit ")) : (n(), i("div", OT, " Loading... ")),
        p.value ? (n(), i("div", zT, [
          t("div", FT, [
            C[29] || (C[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", VT, d(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", BT, [
            (n(!0), i(j, null, ge(v.value, ($) => (n(), i("div", {
              key: $.name,
              class: "issue-item"
            }, [
              t("strong", null, d($.name), 1),
              t("span", WT, "(" + d($.sync_state) + ")", 1),
              b(": " + d($.issue_summary), 1)
            ]))), 128))
          ]),
          S(qn, {
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
        t("div", GT, [
          S(Ga, {
            modelValue: r.value,
            "onUpdate:modelValue": C[8] || (C[8] = ($) => r.value = $),
            placeholder: _.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || c.value || _.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: g,
            onSubmit: g
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", jT, [
        S(De, {
          variant: "secondary",
          onClick: C[9] || (C[9] = ($) => a("close"))
        }, {
          default: h(() => [...C[31] || (C[31] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        S(De, {
          variant: u.value ? "danger" : "primary",
          disabled: !m.value || !r.value.trim() || c.value || _.value,
          loading: c.value,
          onClick: g
        }, {
          default: h(() => [
            b(d(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), ec = /* @__PURE__ */ we(HT, [["__scopeId", "data-v-5f897631"]]), KT = { class: "modal-header" }, qT = { class: "modal-body" }, YT = { class: "switch-message" }, QT = { class: "switch-details" }, JT = { class: "modal-actions" }, XT = /* @__PURE__ */ he({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), D(Dt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = kt(() => {
          }, ["stop"]))
        }, [
          t("div", KT, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", qT, [
            t("p", YT, [
              o[6] || (o[6] = b(" Switch from ", -1)),
              t("strong", null, d(e.fromEnvironment), 1),
              o[7] || (o[7] = b(" to ", -1)),
              t("strong", null, d(e.toEnvironment), 1),
              o[8] || (o[8] = b("? ", -1))
            ]),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This will restart ComfyUI")
            ], -1)),
            t("p", QT, ' Your current work will be preserved. You can switch back to "' + d(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", JT, [
            S(ve, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(ve, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
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
}), ZT = /* @__PURE__ */ we(XT, [["__scopeId", "data-v-e9c5253e"]]), e7 = {
  key: 0,
  class: "modal-overlay"
}, t7 = { class: "modal-content" }, s7 = { class: "modal-body" }, o7 = { class: "progress-info" }, n7 = { class: "progress-percentage" }, a7 = { class: "progress-state" }, l7 = { class: "switch-steps" }, i7 = { class: "step-icon" }, r7 = { class: "step-label" }, c7 = /* @__PURE__ */ he({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const s = e, o = A(() => {
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
      return s.message || r[s.state] || s.state;
    }), a = A(() => s.state === "complete" ? "success" : s.state === "critical_failure" || s.state === "rolled_back" ? "error" : "default"), l = A(() => {
      const r = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], c = r.findIndex((u) => u.state === s.state);
      return r.map((u, m) => {
        let f = "pending", v = "○";
        return m < c ? (f = "completed", v = "✓") : m === c && (f = "active", v = "⟳"), {
          ...u,
          status: f,
          icon: v
        };
      });
    });
    return (r, c) => (n(), D(Dt, { to: "body" }, [
      e.show ? (n(), i("div", e7, [
        t("div", t7, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", s7, [
            S(ca, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            t("div", o7, [
              t("div", n7, d(e.progress) + "%", 1),
              t("div", a7, d(o.value), 1)
            ]),
            t("div", l7, [
              (n(!0), i(j, null, ge(l.value, (u) => (n(), i("div", {
                key: u.state,
                class: Pe(["switch-step", u.status])
              }, [
                t("span", i7, d(u.icon), 1),
                t("span", r7, d(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), u7 = /* @__PURE__ */ we(c7, [["__scopeId", "data-v-768a5078"]]), d7 = { class: "modal-header" }, m7 = { class: "modal-body" }, f7 = {
  key: 0,
  class: "node-section"
}, v7 = { class: "node-list" }, p7 = {
  key: 1,
  class: "node-section"
}, g7 = { class: "node-list" }, h7 = { class: "modal-actions" }, y7 = /* @__PURE__ */ he({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), D(Dt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = kt(() => {
          }, ["stop"]))
        }, [
          t("div", d7, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", m7, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", f7, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", v7, [
                (n(!0), i(j, null, ge(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + d(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", p7, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", g7, [
                (n(!0), i(j, null, ge(e.mismatchDetails.extra_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item remove"
                }, " - " + d(a), 1))), 128))
              ])
            ])) : y("", !0),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This may take several minutes")
            ], -1))
          ]),
          t("div", h7, [
            S(ve, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(ve, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
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
}), w7 = /* @__PURE__ */ we(y7, [["__scopeId", "data-v-7cad7518"]]), _7 = [
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
], En = "v0.0.24", k7 = "Akatz", b7 = { class: "social-buttons" }, $7 = ["title", "aria-label", "onClick"], C7 = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, x7 = ["d"], S7 = ["title", "aria-label", "onClick"], I7 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, E7 = ["d"], T7 = /* @__PURE__ */ he({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", b7, [
      (n(!0), i(j, null, ge(Je(_7), (l) => (n(), i(j, {
        key: l.id
      }, [
        l.label ? (n(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          b(d(l.label) + " ", 1),
          (n(), i("svg", C7, [
            t("path", {
              d: l.iconPath
            }, null, 8, x7)
          ]))
        ], 8, $7)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          (n(), i("svg", I7, [
            t("path", {
              d: l.iconPath
            }, null, 8, E7)
          ]))
        ], 8, S7))
      ], 64))), 128))
    ]));
  }
}), tc = /* @__PURE__ */ we(T7, [["__scopeId", "data-v-4f846342"]]), P7 = { class: "footer-info" }, M7 = ["title"], R7 = {
  key: 0,
  class: "dev-badge"
}, D7 = { class: "made-by" }, L7 = /* @__PURE__ */ he({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: s } = rt(), o = k(null), a = k(null), l = k(null), r = A(() => o.value === "development"), c = A(() => {
      var m;
      if (!r.value) return En;
      const u = [a.value, (m = l.value) == null ? void 0 : m.slice(0, 7)].filter(Boolean).join(" @ ");
      return u ? `${En} (${u})` : `${En} (development)`;
    });
    return at(async () => {
      try {
        const u = await s();
        o.value = u.manager_source ?? null, a.value = u.manager_branch ?? null, l.value = u.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (u, m) => (n(), i("div", P7, [
      t("span", {
        class: "version",
        title: c.value
      }, [
        b(d(Je(En)) + " ", 1),
        r.value ? (n(), i("span", R7, "dev")) : y("", !0)
      ], 8, M7),
      t("span", D7, [
        m[0] || (m[0] = b(" made with ", -1)),
        m[1] || (m[1] = t("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          t("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        b(" by " + d(Je(k7)), 1)
      ])
    ]));
  }
}), sc = /* @__PURE__ */ we(L7, [["__scopeId", "data-v-4fa265b3"]]), N7 = /* @__PURE__ */ he({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = k(null);
    async function a() {
      var r;
      await ((r = o.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, c) => (n(), D($t, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => r.$emit("close"))
    }, {
      body: h(() => [
        S(Br, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var u;
        return [
          S(De, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: a
          }, {
            default: h(() => [...c[2] || (c[2] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          S(De, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (m) => r.$emit("close"))
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
}), U7 = /* @__PURE__ */ we(N7, [["__scopeId", "data-v-fac00ae7"]]), A7 = { class: "header-actions" }, O7 = {
  key: 0,
  class: "wizard-step"
}, z7 = { class: "form-field" }, F7 = ["placeholder"], V7 = {
  key: 0,
  class: "form-error"
}, B7 = { class: "form-field form-field--checkbox" }, W7 = { class: "form-checkbox" }, G7 = {
  key: 0,
  class: "form-field"
}, j7 = ["placeholder"], H7 = {
  key: 0,
  class: "form-info"
}, K7 = {
  key: 1,
  class: "form-suggestion"
}, q7 = {
  key: 2,
  class: "form-error"
}, Y7 = {
  key: 3,
  class: "form-info"
}, Q7 = {
  key: 1,
  class: "wizard-step"
}, J7 = {
  key: 0,
  class: "progress-check-loading"
}, X7 = {
  key: 0,
  class: "cli-warning"
}, Z7 = { class: "cli-warning-header" }, eP = {
  key: 1,
  class: "env-landing"
}, tP = { class: "env-list" }, sP = ["value"], oP = { class: "env-name" }, nP = {
  key: 2,
  class: "env-create"
}, aP = { class: "form-field" }, lP = { class: "form-field" }, iP = ["value"], rP = { class: "form-field" }, cP = ["disabled"], uP = ["value"], dP = { class: "form-field" }, mP = ["value"], fP = { class: "form-field form-field--checkbox" }, vP = { class: "form-checkbox" }, pP = {
  key: 0,
  class: "form-error"
}, gP = {
  key: 1,
  class: "env-creating"
}, hP = { class: "creating-intro" }, yP = {
  key: 3,
  class: "env-import"
}, wP = { class: "wizard-footer" }, _P = { class: "wizard-footer-actions" }, wo = 10, kP = 600 * 1e3, ui = 1800 * 1e3, bP = /* @__PURE__ */ he({
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
    const o = e, a = s, {
      initializeWorkspace: l,
      getInitializeProgress: r,
      validatePath: c,
      createEnvironment: u,
      getCreateProgress: m,
      getImportProgress: f,
      getComfyUIReleases: v
    } = rt(), p = k(o.initialStep || 1), _ = k(null), g = k("landing"), w = k(!1), C = k(!1), $ = k(!1), x = k(!1), O = k(null), T = k(o.initialStep === 2), P = k(o.defaultPath), R = k(!!o.detectedModelsDir), U = k(o.detectedModelsDir || ""), B = k(null), I = k(null), N = k(null), se = k(null), te = k("my-new-env"), Z = k(Hr), X = k("latest"), G = k(Kr), Q = k(!0), oe = k(null), le = k(null), W = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), ee = k(!1), ae = k(!1), Ne = k(!1), Ke = k({ progress: 0, message: "" }), je = k({ progress: 0, message: "" }), $e = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], V = k(0), ie = k(null), F = k(0), L = k(null), ne = A(() => {
      var xe, Ce;
      const fe = (xe = P.value) == null ? void 0 : xe.trim(), H = !B.value, Oe = !R.value || !I.value && ((Ce = U.value) == null ? void 0 : Ce.trim());
      return fe && H && Oe;
    }), Ue = A(() => {
      var fe;
      return (fe = te.value) == null ? void 0 : fe.trim();
    }), Ae = A(() => !!(p.value === 2 || le.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), z = A(() => le.value || o.workspacePath || null);
    async function K() {
      var fe;
      if (B.value = null, !!((fe = P.value) != null && fe.trim()))
        try {
          const H = await c({ path: P.value, type: "workspace" });
          H.valid || (B.value = H.error || "Invalid path");
        } catch (H) {
          B.value = H instanceof Error ? H.message : "Validation failed";
        }
    }
    async function ce() {
      var fe;
      if (I.value = null, N.value = null, se.value = null, !!((fe = U.value) != null && fe.trim()))
        try {
          const H = await c({ path: U.value, type: "models" });
          if (H.valid)
            se.value = H.model_count ?? null;
          else if (I.value = H.error || "Invalid path", H.suggestion) {
            N.value = H.suggestion, U.value = H.suggestion, I.value = null;
            const Oe = await c({ path: H.suggestion, type: "models" });
            Oe.valid && (se.value = Oe.model_count ?? null);
          }
        } catch (H) {
          I.value = H instanceof Error ? H.message : "Validation failed";
        }
    }
    async function Se() {
      var fe, H, Oe, xe, Ce;
      if (B.value = null, I.value = null, await K(), (fe = B.value) != null && fe.includes("already exists")) {
        B.value = null, le.value = ((H = P.value) == null ? void 0 : H.trim()) || o.defaultPath, p.value = 2, ke();
        return;
      }
      if (!B.value && !(R.value && ((Oe = U.value) != null && Oe.trim()) && (await ce(), I.value))) {
        ae.value = !0;
        try {
          await l({
            workspace_path: ((xe = P.value) == null ? void 0 : xe.trim()) || o.defaultPath,
            models_directory: R.value && ((Ce = U.value) == null ? void 0 : Ce.trim()) || null
          }), V.value = 0, ie.value = Date.now();
          const Re = setInterval(async () => {
            var Ee;
            if (ie.value && Date.now() - ie.value > kP) {
              clearInterval(Re), ae.value = !1, B.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Y = await r();
              if (V.value = 0, Y.state === "idle" && ae.value) {
                clearInterval(Re), ae.value = !1, B.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Ke.value = { progress: Y.progress, message: Y.message }, Y.state === "complete" ? (clearInterval(Re), ae.value = !1, le.value = ((Ee = P.value) == null ? void 0 : Ee.trim()) || o.defaultPath, p.value = 2, ke()) : Y.state === "error" && (clearInterval(Re), ae.value = !1, B.value = Y.error || "Workspace creation failed");
            } catch (Y) {
              V.value++, console.warn(`Polling failure ${V.value}/${wo}:`, Y), V.value >= wo && (clearInterval(Re), ae.value = !1, B.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Re) {
          ae.value = !1, B.value = Re instanceof Error ? Re.message : "Failed to create workspace";
        }
      }
    }
    async function _e() {
      Ne.value = !0, oe.value = null;
      try {
        const fe = {
          name: te.value.trim() || "my-new-env",
          python_version: Z.value,
          comfyui_version: X.value,
          torch_backend: G.value,
          switch_after: Q.value,
          workspace_path: le.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(fe)).status === "started") {
          F.value = 0, L.value = Date.now();
          const Oe = setInterval(async () => {
            if (L.value && Date.now() - L.value > ui) {
              clearInterval(Oe), Ne.value = !1, oe.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const xe = await m();
              if (F.value = 0, xe.state === "idle" && Ne.value) {
                clearInterval(Oe), Ne.value = !1, oe.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (je.value = {
                progress: xe.progress ?? 0,
                message: xe.message,
                phase: xe.phase
              }, xe.state === "complete") {
                clearInterval(Oe), Ne.value = !1;
                const Ce = xe.environment_name || fe.name;
                Q.value ? a("complete", Ce, le.value) : (g.value = "landing", a("environment-created-no-switch", Ce));
              } else xe.state === "error" && (clearInterval(Oe), Ne.value = !1, oe.value = xe.error || "Environment creation failed");
            } catch (xe) {
              F.value++, console.warn(`Polling failure ${F.value}/${wo}:`, xe), F.value >= wo && (clearInterval(Oe), Ne.value = !1, oe.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (fe) {
        Ne.value = !1, oe.value = fe instanceof Error ? fe.message : "Unknown error";
      }
    }
    async function ke() {
      ee.value = !0;
      try {
        W.value = await v();
      } catch (fe) {
        console.error("Failed to load ComfyUI releases:", fe);
      } finally {
        ee.value = !1;
      }
    }
    function Me() {
      _.value && a("switch-environment", _.value, le.value);
    }
    function ye() {
      g.value === "create" || g.value === "import" ? g.value = "landing" : p.value === 2 && o.setupState === "no_workspace" && (p.value = 1);
    }
    function Te(fe, H) {
      C.value = !1, H ? a("complete", fe, le.value) : (a("environment-created-no-switch", fe), g.value = "landing");
    }
    function me() {
    }
    at(async () => {
      if (o.detectedModelsDir && (U.value = o.detectedModelsDir), o.workspacePath && (le.value = o.workspacePath), p.value === 2) {
        ke();
        const fe = setTimeout(() => {
          T.value = !1;
        }, 3e3);
        await We(), clearTimeout(fe), T.value = !1;
      }
    });
    async function We() {
      try {
        const fe = await m();
        if (console.log("[ComfyGit] Create progress check:", fe.state, fe), fe.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", fe.environment_name), g.value = "create", Ne.value = !0, te.value = fe.environment_name || "my-new-env", je.value = {
            progress: fe.progress ?? 0,
            message: fe.message,
            phase: fe.phase
          }, Le();
          return;
        }
      } catch (fe) {
        console.log("[ComfyGit] Create progress check failed:", fe);
      }
      try {
        const fe = await f();
        console.log("[ComfyGit] Import progress check:", fe.state, fe), fe.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", fe.environment_name), O.value = {
          message: fe.message || "Importing...",
          phase: fe.phase || "",
          progress: fe.progress ?? 0,
          environmentName: fe.environment_name || ""
        }, x.value = !0, g.value = "import", C.value = !0);
      } catch (fe) {
        console.log("[ComfyGit] Import progress check failed:", fe);
      }
    }
    async function Le() {
      F.value = 0, L.value = Date.now();
      let fe = null;
      const H = async () => {
        if (L.value && Date.now() - L.value > ui)
          return fe && clearInterval(fe), Ne.value = !1, oe.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const xe = await m();
          if (F.value = 0, xe.state === "idle" && Ne.value)
            return fe && clearInterval(fe), Ne.value = !1, oe.value = "Environment creation was interrupted. Please try again.", !1;
          if (je.value = {
            progress: xe.progress ?? 0,
            message: xe.message,
            phase: xe.phase
          }, xe.state === "complete") {
            fe && clearInterval(fe), Ne.value = !1;
            const Ce = xe.environment_name || te.value;
            return a("complete", Ce, le.value), !1;
          } else if (xe.state === "error")
            return fe && clearInterval(fe), Ne.value = !1, oe.value = xe.error || "Environment creation failed", !1;
          return !0;
        } catch (xe) {
          return F.value++, console.warn(`Polling failure ${F.value}/${wo}:`, xe), F.value >= wo ? (fe && clearInterval(fe), Ne.value = !1, oe.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await H() && (fe = setInterval(async () => {
        !await H() && fe && clearInterval(fe);
      }, 2e3));
    }
    return (fe, H) => (n(), i(j, null, [
      S($t, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: H[15] || (H[15] = (Oe) => fe.$emit("close"))
      }, {
        header: h(() => [
          H[20] || (H[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", A7, [
            S(tc),
            H[19] || (H[19] = t("span", { class: "header-divider" }, null, -1)),
            Ae.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: H[0] || (H[0] = (Oe) => w.value = !0)
            }, [...H[17] || (H[17] = [
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
              onClick: H[1] || (H[1] = (Oe) => fe.$emit("close")),
              title: "Close"
            }, [...H[18] || (H[18] = [
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
            p.value === 1 ? (n(), i("div", O7, [
              H[24] || (H[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", z7, [
                H[21] || (H[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                nt(t("input", {
                  "onUpdate:modelValue": H[2] || (H[2] = (xe) => P.value = xe),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, F7), [
                  [Qt, P.value]
                ]),
                B.value ? (n(), i("p", V7, d(B.value), 1)) : y("", !0)
              ]),
              t("div", B7, [
                t("label", W7, [
                  nt(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": H[3] || (H[3] = (xe) => R.value = xe)
                  }, null, 512), [
                    [dn, R.value]
                  ]),
                  H[22] || (H[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              R.value ? (n(), i("div", G7, [
                H[23] || (H[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                nt(t("input", {
                  "onUpdate:modelValue": H[4] || (H[4] = (xe) => U.value = xe),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, j7), [
                  [Qt, U.value]
                ]),
                e.detectedModelsDir && !U.value ? (n(), i("p", H7, " Detected: " + d(e.detectedModelsDir), 1)) : y("", !0),
                N.value ? (n(), i("p", K7, " Did you mean: " + d(N.value), 1)) : y("", !0),
                I.value ? (n(), i("p", q7, d(I.value), 1)) : y("", !0),
                se.value !== null && !I.value ? (n(), i("p", Y7, " Found " + d(se.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              ae.value ? (n(), D(Kn, {
                key: 1,
                progress: Ke.value.progress,
                message: Ke.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (n(), i("div", Q7, [
              T.value ? (n(), i("div", J7, [...H[25] || (H[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(j, { key: 1 }, [
                !o.cliInstalled && !$.value ? (n(), i("div", X7, [
                  t("div", Z7, [
                    H[27] || (H[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    H[28] || (H[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: H[5] || (H[5] = (xe) => $.value = !0),
                      title: "Dismiss"
                    }, [...H[26] || (H[26] = [
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
                  H[29] || (H[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  H[30] || (H[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                g.value === "landing" ? (n(), i("div", eP, [
                  H[34] || (H[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: H[6] || (H[6] = (xe) => g.value = "create")
                  }, [...H[31] || (H[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: H[7] || (H[7] = (xe) => {
                      x.value = !1, g.value = "import";
                    })
                  }, [...H[32] || (H[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Oe = o.existingEnvironments) != null && Oe.length ? (n(), i(j, { key: 0 }, [
                    H[33] || (H[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", tP, [
                      (n(!0), i(j, null, ge(o.existingEnvironments, (xe) => (n(), i("label", {
                        key: xe,
                        class: Pe(["env-option", { selected: _.value === xe }])
                      }, [
                        nt(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: xe,
                          "onUpdate:modelValue": H[8] || (H[8] = (Ce) => _.value = Ce)
                        }, null, 8, sP), [
                          [cs, _.value]
                        ]),
                        t("span", oP, d(xe), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : g.value === "create" ? (n(), i("div", nP, [
                  Ne.value ? (n(), i("div", gP, [
                    t("p", hP, [
                      H[41] || (H[41] = b(" Creating environment ", -1)),
                      t("strong", null, d(te.value), 1),
                      H[42] || (H[42] = b("... ", -1))
                    ]),
                    S(Kn, {
                      progress: je.value.progress,
                      message: je.value.message,
                      "current-phase": je.value.phase,
                      "show-steps": !0,
                      steps: $e
                    }, null, 8, ["progress", "message", "current-phase"]),
                    H[43] || (H[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(j, { key: 0 }, [
                    H[40] || (H[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", aP, [
                      H[35] || (H[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      nt(t("input", {
                        "onUpdate:modelValue": H[9] || (H[9] = (xe) => te.value = xe),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Qt, te.value]
                      ])
                    ]),
                    t("div", lP, [
                      H[36] || (H[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      nt(t("select", {
                        "onUpdate:modelValue": H[10] || (H[10] = (xe) => Z.value = xe),
                        class: "form-select"
                      }, [
                        (n(!0), i(j, null, ge(Je(jr), (xe) => (n(), i("option", {
                          key: xe,
                          value: xe
                        }, d(xe), 9, iP))), 128))
                      ], 512), [
                        [Cs, Z.value]
                      ])
                    ]),
                    t("div", rP, [
                      H[37] || (H[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      nt(t("select", {
                        "onUpdate:modelValue": H[11] || (H[11] = (xe) => X.value = xe),
                        class: "form-select",
                        disabled: ee.value
                      }, [
                        (n(!0), i(j, null, ge(W.value, (xe) => (n(), i("option", {
                          key: xe.tag_name,
                          value: xe.tag_name
                        }, d(xe.name), 9, uP))), 128))
                      ], 8, cP), [
                        [Cs, X.value]
                      ])
                    ]),
                    t("div", dP, [
                      H[38] || (H[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      nt(t("select", {
                        "onUpdate:modelValue": H[12] || (H[12] = (xe) => G.value = xe),
                        class: "form-select"
                      }, [
                        (n(!0), i(j, null, ge(Je(gl), (xe) => (n(), i("option", {
                          key: xe,
                          value: xe
                        }, d(xe) + d(xe === "auto" ? " (detect GPU)" : ""), 9, mP))), 128))
                      ], 512), [
                        [Cs, G.value]
                      ])
                    ]),
                    t("div", fP, [
                      t("label", vP, [
                        nt(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": H[13] || (H[13] = (xe) => Q.value = xe)
                        }, null, 512), [
                          [dn, Q.value]
                        ]),
                        H[39] || (H[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    oe.value ? (n(), i("div", pP, d(oe.value), 1)) : y("", !0)
                  ], 64))
                ])) : g.value === "import" ? (n(), i("div", yP, [
                  S(Qr, {
                    "workspace-path": le.value,
                    "resume-import": x.value,
                    "initial-progress": O.value ?? void 0,
                    onImportComplete: Te,
                    onImportStarted: H[14] || (H[14] = (xe) => C.value = !0),
                    onSourceCleared: me
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          t("div", wP, [
            S(sc),
            t("div", _P, [
              p.value === 1 ? (n(), D(De, {
                key: 0,
                variant: "primary",
                disabled: !ne.value || ae.value,
                onClick: Se
              }, {
                default: h(() => [
                  b(d(ae.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (n(), i(j, { key: 1 }, [
                !Ne.value && !C.value && (g.value !== "landing" || o.setupState === "no_workspace" && !le.value) ? (n(), D(De, {
                  key: 0,
                  variant: "secondary",
                  onClick: ye
                }, {
                  default: h(() => [...H[44] || (H[44] = [
                    b(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                g.value === "create" ? (n(), D(De, {
                  key: 1,
                  variant: "primary",
                  disabled: !Ue.value || Ne.value,
                  onClick: _e
                }, {
                  default: h(() => [
                    b(d(Ne.value ? "Creating..." : Q.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                g.value === "landing" && _.value ? (n(), D(De, {
                  key: 2,
                  variant: "primary",
                  onClick: Me
                }, {
                  default: h(() => [
                    b(" Switch to " + d(_.value), 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ], 64)) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      w.value ? (n(), D(U7, {
        key: 0,
        "workspace-path": z.value,
        onClose: H[16] || (H[16] = (Oe) => w.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), $P = /* @__PURE__ */ we(bP, [["__scopeId", "data-v-9a9aadc0"]]), CP = { class: "update-banner" }, xP = { class: "update-banner__left" }, SP = { class: "update-banner__title" }, IP = {
  key: 0,
  class: "update-banner__summary"
}, EP = { class: "update-banner__actions" }, TP = ["disabled"], PP = ["disabled"], MP = ["disabled"], RP = /* @__PURE__ */ he({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", CP, [
      t("div", xP, [
        t("div", SP, " ComfyGit Manager v" + d(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (n(), i("div", IP, d(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      t("div", EP, [
        t("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, d(e.updating ? "Updating…" : "Update"), 9, TP),
        e.info.release_url ? (n(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, PP)) : y("", !0),
        t("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, MP)
      ])
    ]));
  }
}), DP = /* @__PURE__ */ we(RP, [["__scopeId", "data-v-49562c5c"]]), oc = "ComfyGit.UpdateNotice.DismissedVersion";
function LP() {
  try {
    return localStorage.getItem(oc);
  } catch {
    return null;
  }
}
function NP(e) {
  try {
    localStorage.setItem(oc, e);
  } catch {
  }
}
function UP(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : LP() !== e.latest_version;
}
const AP = { class: "comfygit-panel" }, OP = { class: "panel-header" }, zP = { class: "header-left" }, FP = {
  key: 0,
  class: "header-info"
}, VP = { class: "header-actions" }, BP = { class: "env-switcher" }, WP = {
  key: 0,
  class: "header-info"
}, GP = { class: "branch-name" }, jP = { class: "panel-main" }, HP = { class: "sidebar" }, KP = { class: "sidebar-content" }, qP = { class: "sidebar-section" }, YP = { class: "sidebar-section" }, QP = { class: "sidebar-section" }, JP = {
  key: 0,
  class: "sidebar-badge"
}, XP = { class: "sidebar-footer" }, ZP = { class: "content-area" }, eM = {
  key: 0,
  class: "error-message"
}, tM = {
  key: 1,
  class: "loading"
}, sM = { class: "dialog-content env-selector-dialog" }, oM = { class: "dialog-header" }, nM = { class: "dialog-body" }, aM = { class: "env-list" }, lM = { class: "env-info" }, iM = { class: "env-name-row" }, rM = { class: "env-indicator" }, cM = { class: "env-name" }, uM = {
  key: 0,
  class: "env-branch"
}, dM = {
  key: 1,
  class: "current-label"
}, mM = { class: "env-stats" }, fM = ["onClick"], vM = { class: "toast-container" }, pM = { class: "toast-message" }, di = "ComfyGit.LastView", mi = "ComfyGit.LastSection", gM = /* @__PURE__ */ he({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: s }) {
    const o = e, a = s, {
      getStatus: l,
      getHistory: r,
      getBranches: c,
      checkout: u,
      createBranch: m,
      switchBranch: f,
      deleteBranch: v,
      getEnvironments: p,
      switchEnvironment: _,
      getSwitchProgress: g,
      deleteEnvironment: w,
      syncEnvironmentManually: C,
      repairWorkflowModels: $,
      getSetupStatus: x,
      getUpdateCheck: O,
      updateManager: T
    } = rt(), P = up(), { liveInstanceCount: R } = Jr({ autoStart: !0 }), U = k(null), B = k([]), I = k([]), N = k([]), se = A(() => N.value.find((ue) => ue.is_current)), te = k(null), Z = k(!1), X = k(1), G = A(() => {
      var ue;
      return ((ue = te.value) == null ? void 0 : ue.state) || "managed";
    }), Q = k(!1), oe = k(null), le = k(null), W = k(!1), ee = k(null), ae = k(!1), Ne = k(!1), Ke = A(() => !ae.value && UP(ee.value)), je = k(null), $e = k(null), V = k(null), ie = k(!1), F = k(!1), L = k(""), ne = k(null), Ue = k({ state: "idle", progress: 0, message: "" });
    let Ae = null, z = null;
    const K = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ce = o.initialView ? K[o.initialView] : null, Se = [
      "status",
      "workflows",
      "models-env",
      "branches",
      "history",
      "nodes",
      "debug-env",
      "environments",
      "model-index",
      "settings",
      "debug-workspace",
      "export",
      "import",
      "remotes",
      "deploy"
    ], _e = ["this-env", "all-envs", "sharing"];
    function ke() {
      try {
        const ue = sessionStorage.getItem(di), J = sessionStorage.getItem(mi);
        if (ue && J && Se.includes(ue) && _e.includes(J))
          return { view: ue, section: J };
      } catch {
      }
      return null;
    }
    const Me = ke(), ye = k((ce == null ? void 0 : ce.view) ?? (Me == null ? void 0 : Me.view) ?? "status"), Te = k((ce == null ? void 0 : ce.section) ?? (Me == null ? void 0 : Me.section) ?? "this-env");
    function me(ue, J) {
      ye.value = ue, Te.value = J;
      try {
        sessionStorage.setItem(di, ue), sessionStorage.setItem(mi, J);
      } catch {
      }
    }
    function We(ue) {
      const Ge = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[ue];
      Ge && me(Ge.view, Ge.section);
    }
    function Le() {
      me("branches", "this-env");
    }
    function fe() {
      a("close"), setTimeout(() => {
        var J;
        const ue = document.querySelectorAll("button.comfyui-button");
        for (const Ge of ue)
          if (((J = Ge.textContent) == null ? void 0 : J.trim()) === "Manager") {
            Ge.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const H = k(null), Oe = k(!1), xe = k(!1), Ce = k([]);
    let Re = 0;
    function Ee(ue, J = "info", Ge = 3e3) {
      const Qe = ++Re;
      return Ce.value.push({ id: Qe, message: ue, type: J }), Ge > 0 && setTimeout(() => {
        Ce.value = Ce.value.filter((pt) => pt.id !== Qe);
      }, Ge), Qe;
    }
    function Y(ue) {
      Ce.value = Ce.value.filter((J) => J.id !== ue);
    }
    function de(ue, J) {
      Ee(ue, J);
    }
    async function pe() {
      ee.value = null, ae.value = !1;
      try {
        ee.value = await O();
      } catch {
      }
    }
    function He() {
      var J;
      const ue = (J = ee.value) == null ? void 0 : J.release_url;
      if (ue)
        try {
          window.open(ue, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function ze() {
      var J;
      const ue = (J = ee.value) == null ? void 0 : J.latest_version;
      ue && NP(ue), ae.value = !0;
    }
    async function Fe() {
      var J, Ge;
      if (Ne.value) return;
      Ne.value = !0;
      const ue = Ee("Updating comfygit-manager...", "info", 0);
      try {
        const Qe = await T();
        if (Y(ue), Qe.status !== "success") {
          if (Ee(Qe.message || "Update failed", "error"), Qe.manual_instructions) {
            const pt = Qe.manual_instructions.split(`
`).map((q) => q.trim()).filter(Boolean);
            H.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: pt,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                H.value = null;
              }
            };
          }
          return;
        }
        if (Ee(Qe.message || "Update complete", "success"), ze(), Qe.restart_required) {
          re();
          try {
            await ((Ge = (J = window.app) == null ? void 0 : J.api) == null ? void 0 : Ge.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Qe) {
        Y(ue);
        const pt = Qe instanceof Error ? Qe.message : "Update failed";
        Ee(pt, "error");
      } finally {
        Ne.value = !1;
      }
    }
    const et = A(() => {
      if (!U.value) return "neutral";
      const ue = U.value.workflows, J = ue.new.length > 0 || ue.modified.length > 0 || ue.deleted.length > 0 || U.value.has_changes;
      return U.value.comparison.is_synced ? J ? "warning" : "success" : "error";
    });
    A(() => U.value ? et.value === "success" ? "All synced" : et.value === "warning" ? "Uncommitted changes" : et.value === "error" ? "Not synced" : "" : "");
    async function qe() {
      Q.value = !0, oe.value = null;
      try {
        const [ue, J, Ge, Qe] = await Promise.all([
          l(!0),
          r(),
          c(),
          p()
        ]);
        U.value = ue, B.value = J.commits, I.value = Ge.branches, N.value = Qe, a("statusUpdate", ue), je.value && await je.value.loadWorkflows(!0);
      } catch (ue) {
        oe.value = ue instanceof Error ? ue.message : "Failed to load status", U.value = null, B.value = [], I.value = [];
      } finally {
        Q.value = !1;
      }
    }
    function mt(ue) {
      le.value = ue;
    }
    async function ct(ue) {
      var Ge;
      le.value = null;
      const J = U.value && (U.value.workflows.new.length > 0 || U.value.workflows.modified.length > 0 || U.value.workflows.deleted.length > 0 || U.value.has_changes);
      H.value = {
        title: J ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: J ? "You have uncommitted changes that will be lost." : `Checkout commit ${ue.short_hash || ((Ge = ue.hash) == null ? void 0 : Ge.slice(0, 7))}?`,
        details: J ? yn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: J ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: J,
        onConfirm: async () => {
          var q;
          H.value = null, re();
          const Qe = Ee(`Checking out ${ue.short_hash || ((q = ue.hash) == null ? void 0 : q.slice(0, 7))}...`, "info", 0), pt = await u(ue.hash, J);
          Y(Qe), pt.status === "success" ? Ee("Restarting ComfyUI...", "success") : Ee(pt.message || "Checkout failed", "error");
        }
      };
    }
    async function dt(ue) {
      const J = U.value && (U.value.workflows.new.length > 0 || U.value.workflows.modified.length > 0 || U.value.workflows.deleted.length > 0 || U.value.has_changes);
      H.value = {
        title: J ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: J ? "You have uncommitted changes." : `Switch to branch "${ue}"?`,
        details: J ? yn() : void 0,
        warning: J ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: J ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          H.value = null, re();
          const Ge = Ee(`Switching to ${ue}...`, "info", 0), Qe = await f(ue, J);
          Y(Ge), Qe.status === "success" ? Ee("Restarting ComfyUI...", "success") : Ee(Qe.message || "Branch switch failed", "error");
        }
      };
    }
    async function It(ue) {
      const J = Ee(`Creating branch ${ue}...`, "info", 0), Ge = await m(ue);
      Y(J), Ge.status === "success" ? (Ee(`Branch "${ue}" created`, "success"), await qe()) : Ee(Ge.message || "Failed to create branch", "error");
    }
    async function Xt(ue, J = !1) {
      const Ge = async (Qe) => {
        var q;
        const pt = Ee(`Deleting branch ${ue}...`, "info", 0);
        try {
          const be = await v(ue, Qe);
          Y(pt), be.status === "success" ? (Ee(`Branch "${ue}" deleted`, "success"), await qe()) : (q = be.message) != null && q.includes("not fully merged") ? H.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ue}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              H.value = null, await Ge(!0);
            }
          } : Ee(be.message || "Failed to delete branch", "error");
        } catch (be) {
          Y(pt);
          const Ve = be instanceof Error ? be.message : "Failed to delete branch";
          Ve.includes("not fully merged") ? H.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ue}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              H.value = null, await Ge(!0);
            }
          } : Ee(Ve, "error");
        }
      };
      H.value = {
        title: "Delete Branch",
        message: `Delete branch "${ue}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          H.value = null, await Ge(J);
        }
      };
    }
    async function Lt(ue) {
      le.value = null;
      const J = prompt("Enter branch name:");
      if (J) {
        const Ge = Ee(`Creating branch ${J}...`, "info", 0), Qe = await m(J, ue.hash);
        Y(Ge), Qe.status === "success" ? (Ee(`Branch "${J}" created from ${ue.short_hash}`, "success"), await qe()) : Ee(Qe.message || "Failed to create branch", "error");
      }
    }
    function re() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function E() {
      H.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ue;
          H.value = null, re(), Ee("Restarting environment...", "info");
          try {
            (ue = window.app) != null && ue.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function M() {
      H.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ue;
          H.value = null, Ee("Stopping environment...", "info");
          try {
            (ue = window.app) != null && ue.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Ie(ue, J) {
      W.value = !1, L.value = ue, ne.value = J || null, ie.value = !0;
    }
    async function tt() {
      ie.value = !1, F.value = !0, re(), Ue.value = {
        progress: 10,
        state: ft(10),
        message: st(10)
      };
      try {
        await _(L.value, ne.value || void 0), bt(), Be();
      } catch (ue) {
        St(), F.value = !1, Ee(`Failed to initiate switch: ${ue instanceof Error ? ue.message : "Unknown error"}`, "error"), Ue.value = { state: "idle", progress: 0, message: "" }, ne.value = null;
      }
    }
    function ft(ue) {
      return ue >= 100 ? "complete" : ue >= 80 ? "validating" : ue >= 60 ? "starting" : ue >= 30 ? "syncing" : "preparing";
    }
    function st(ue) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[ft(ue)] || "";
    }
    function bt() {
      if (z) return;
      let ue = 10;
      const J = 60, Ge = 5e3, Qe = 100, pt = (J - ue) / (Ge / Qe);
      z = window.setInterval(() => {
        if (ue += pt, ue >= J && (ue = J, St()), Ue.value.progress < J) {
          const q = Math.floor(ue);
          Ue.value = {
            progress: q,
            state: ft(q),
            message: st(q)
          };
        }
      }, Qe);
    }
    function St() {
      z && (clearInterval(z), z = null);
    }
    function Be() {
      Ae || (Ae = window.setInterval(async () => {
        try {
          let ue = await P.getStatus();
          if ((!ue || ue.state === "idle") && (ue = await g()), !ue)
            return;
          const J = ue.progress || 0;
          J >= 60 && St();
          const Ge = Math.max(J, Ue.value.progress), Qe = ue.state && ue.state !== "idle" && ue.state !== "unknown", pt = Qe ? ue.state : ft(Ge), q = Qe && ue.message || st(Ge);
          Ue.value = {
            state: pt,
            progress: Ge,
            message: q
          }, ue.state === "complete" ? (St(), as(), F.value = !1, Ee(`✓ Switched to ${L.value}`, "success"), await qe(), L.value = "") : ue.state === "rolled_back" ? (St(), as(), F.value = !1, Ee("Switch failed, restored previous environment", "warning"), L.value = "") : ue.state === "critical_failure" && (St(), as(), F.value = !1, Ee(`Critical error during switch: ${ue.message}`, "error"), L.value = "");
        } catch (ue) {
          console.error("Failed to poll switch progress:", ue);
        }
      }, 1e3));
    }
    function as() {
      St(), Ae && (clearInterval(Ae), Ae = null);
    }
    function gs() {
      var ue;
      ie.value = !1, L.value = "", (ue = te.value) != null && ue.state && te.value.state !== "managed" && (X.value = te.value.state === "no_workspace" ? 1 : 2, Z.value = !0);
    }
    async function ro(ue) {
      Oe.value = !1, await qe(), Ee(ue.message, ue.success ? "success" : "error");
    }
    async function co() {
      xe.value = !1;
      const ue = Ee("Syncing environment...", "info", 0);
      try {
        const J = await C("skip", !0);
        if (Y(ue), J.status === "success") {
          const Ge = [];
          J.nodes_installed.length && Ge.push(`${J.nodes_installed.length} installed`), J.nodes_removed.length && Ge.push(`${J.nodes_removed.length} removed`);
          const Qe = Ge.length ? `: ${Ge.join(", ")}` : "";
          Ee(`✓ Environment synced${Qe}`, "success"), await qe();
        } else {
          const Ge = J.errors.length ? J.errors.join("; ") : J.message;
          Ee(`Sync failed: ${Ge}`, "error");
        }
      } catch (J) {
        Y(ue), Ee(`Sync error: ${J instanceof Error ? J.message : "Unknown error"}`, "error");
      }
    }
    async function uo(ue) {
      var J;
      try {
        const Ge = await $(ue);
        Ge.failed.length === 0 ? Ee(`✓ Repaired ${Ge.success} workflow${Ge.success === 1 ? "" : "s"}`, "success") : Ee(`Repaired ${Ge.success}, failed: ${Ge.failed.length}`, "warning"), await qe();
      } catch (Ge) {
        Ee(`Repair failed: ${Ge instanceof Error ? Ge.message : "Unknown error"}`, "error");
      } finally {
        (J = V.value) == null || J.resetRepairingState();
      }
    }
    async function Qs() {
      var J, Ge;
      const ue = Ee("Repairing environment...", "info", 0);
      try {
        const Qe = await C("skip", !0);
        if (Y(ue), Qe.status === "success") {
          const pt = [];
          Qe.nodes_installed.length && pt.push(`${Qe.nodes_installed.length} installed`), Qe.nodes_removed.length && pt.push(`${Qe.nodes_removed.length} removed`);
          const q = pt.length ? `: ${pt.join(", ")}` : "";
          Ee(`✓ Environment repaired${q}`, "success"), (J = V.value) == null || J.closeDetailModal(), await qe();
        } else {
          const pt = Qe.errors.length ? Qe.errors.join(", ") : Qe.message || "Unknown error";
          Ee(`Repair failed: ${pt}`, "error");
        }
      } catch (Qe) {
        Y(ue), Ee(`Repair error: ${Qe instanceof Error ? Qe.message : "Unknown error"}`, "error");
      } finally {
        (Ge = V.value) == null || Ge.resetRepairingEnvironmentState();
      }
    }
    async function mo(ue, J) {
      Ee(`Environment '${ue}' created`, "success"), await qe(), $e.value && await $e.value.loadEnvironments(), J && await Ie(ue);
    }
    async function fo(ue) {
      var J;
      if (((J = se.value) == null ? void 0 : J.name) === ue) {
        Ee("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      H.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ue}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          H.value = null;
          try {
            const Ge = await w(ue);
            Ge.status === "success" ? (Ee(`Environment "${ue}" deleted`, "success"), await qe(), $e.value && await $e.value.loadEnvironments()) : Ee(Ge.message || "Failed to delete environment", "error");
          } catch (Ge) {
            Ee(`Error deleting environment: ${Ge instanceof Error ? Ge.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function vo(ue, J) {
      Z.value = !1;
      try {
        te.value = await x();
      } catch {
      }
      await Ie(ue, J);
    }
    function po() {
      Z.value = !1, a("close");
    }
    async function go(ue, J) {
      await Ie(ue, J);
    }
    async function ua(ue) {
      await qe(), await Ie(ue);
    }
    async function da(ue) {
      te.value = await x(), console.log(`Environment '${ue}' created. Available for switching.`);
    }
    function ma() {
      me("environments", "all-envs"), setTimeout(() => {
        var ue;
        (ue = $e.value) == null || ue.openCreateModal();
      }, 100);
    }
    function yn() {
      if (!U.value) return [];
      const ue = [], J = U.value.workflows;
      return J.new.length && ue.push(`${J.new.length} new workflow(s)`), J.modified.length && ue.push(`${J.modified.length} modified workflow(s)`), J.deleted.length && ue.push(`${J.deleted.length} deleted workflow(s)`), ue;
    }
    return at(async () => {
      try {
        if (te.value = await x(), te.value.state === "no_workspace") {
          Z.value = !0, X.value = 1;
          return;
        }
        if (te.value.state === "empty_workspace") {
          Z.value = !0, X.value = 2;
          return;
        }
        if (te.value.state === "unmanaged") {
          Z.value = !0, X.value = 2;
          return;
        }
      } catch (ue) {
        console.warn("Setup status check failed, proceeding normally:", ue);
      }
      await Promise.all([
        qe(),
        pe()
      ]);
    }), (ue, J) => {
      var Ge, Qe, pt, q, be, Ve, yt, Pt, ls, As, Os, No, Uo;
      return n(), i("div", AP, [
        t("div", OP, [
          t("div", zP, [
            J[31] || (J[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            U.value ? (n(), i("div", FP)) : y("", !0)
          ]),
          t("div", VP, [
            S(tc),
            J[34] || (J[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Pe(["icon-btn", { spinning: Q.value }]),
              onClick: qe,
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
              onClick: J[0] || (J[0] = (Xe) => a("close")),
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
        Ke.value && ee.value ? (n(), D(DP, {
          key: 0,
          info: ee.value,
          updating: Ne.value,
          onUpdate: Fe,
          onDismiss: ze,
          onReleaseNotes: He
        }, null, 8, ["info", "updating"])) : y("", !0),
        t("div", BP, [
          t("div", { class: "env-switcher-header" }, [
            J[35] || (J[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", { class: "env-control-buttons" }, [
              t("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: E
              }, " Restart "),
              t("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: M
              }, " Stop ")
            ])
          ]),
          t("button", {
            class: "env-switcher-btn",
            onClick: J[1] || (J[1] = (Xe) => me("environments", "all-envs"))
          }, [
            U.value ? (n(), i("div", WP, [
              t("span", null, d(((Ge = se.value) == null ? void 0 : Ge.name) || ((Qe = U.value) == null ? void 0 : Qe.environment) || "Loading..."), 1),
              t("span", GP, "(" + d(U.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            J[36] || (J[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", jP, [
          t("div", HP, [
            t("div", KP, [
              t("div", qP, [
                J[37] || (J[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Pe(["sidebar-item", { active: ye.value === "status" && Te.value === "this-env" }]),
                  onClick: J[2] || (J[2] = (Xe) => me("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ye.value === "workflows" }]),
                  onClick: J[3] || (J[3] = (Xe) => me("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ye.value === "models-env" }]),
                  onClick: J[4] || (J[4] = (Xe) => me("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ye.value === "branches" }]),
                  onClick: J[5] || (J[5] = (Xe) => me("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ye.value === "history" }]),
                  onClick: J[6] || (J[6] = (Xe) => me("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ye.value === "nodes" }]),
                  onClick: J[7] || (J[7] = (Xe) => me("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ye.value === "debug-env" }]),
                  onClick: J[8] || (J[8] = (Xe) => me("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              J[41] || (J[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", YP, [
                J[38] || (J[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Pe(["sidebar-item", { active: ye.value === "environments" }]),
                  onClick: J[9] || (J[9] = (Xe) => me("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ye.value === "model-index" }]),
                  onClick: J[10] || (J[10] = (Xe) => me("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ye.value === "settings" }]),
                  onClick: J[11] || (J[11] = (Xe) => me("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ye.value === "debug-workspace" }]),
                  onClick: J[12] || (J[12] = (Xe) => me("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              J[42] || (J[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", QP, [
                J[40] || (J[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Pe(["sidebar-item", { active: ye.value === "deploy" }]),
                  onClick: J[13] || (J[13] = (Xe) => me("deploy", "sharing"))
                }, [
                  J[39] || (J[39] = b(" DEPLOY ", -1)),
                  Je(R) > 0 ? (n(), i("span", JP, d(Je(R)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ye.value === "export" }]),
                  onClick: J[14] || (J[14] = (Xe) => me("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ye.value === "import" }]),
                  onClick: J[15] || (J[15] = (Xe) => me("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: ye.value === "remotes" }]),
                  onClick: J[16] || (J[16] = (Xe) => me("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", XP, [
              S(sc)
            ])
          ]),
          t("div", ZP, [
            oe.value ? (n(), i("div", eM, d(oe.value), 1)) : !U.value && ye.value === "status" ? (n(), i("div", tM, " Loading status... ")) : (n(), i(j, { key: 2 }, [
              ye.value === "status" ? (n(), D(hv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: V,
                status: U.value,
                "setup-state": G.value,
                onSwitchBranch: Le,
                onCommitChanges: J[17] || (J[17] = (Xe) => Oe.value = !0),
                onSyncEnvironment: J[18] || (J[18] = (Xe) => xe.value = !0),
                onViewWorkflows: J[19] || (J[19] = (Xe) => me("workflows", "this-env")),
                onViewHistory: J[20] || (J[20] = (Xe) => me("history", "this-env")),
                onViewDebug: J[21] || (J[21] = (Xe) => me("debug-env", "this-env")),
                onViewNodes: J[22] || (J[22] = (Xe) => me("nodes", "this-env")),
                onRepairMissingModels: uo,
                onRepairEnvironment: Qs,
                onStartSetup: J[23] || (J[23] = (Xe) => Z.value = !0),
                onViewEnvironments: J[24] || (J[24] = (Xe) => me("environments", "all-envs")),
                onCreateEnvironment: ma
              }, null, 8, ["status", "setup-state"])) : ye.value === "workflows" ? (n(), D(Zw, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: je,
                onRefresh: qe
              }, null, 512)) : ye.value === "models-env" ? (n(), D(vb, {
                key: 2,
                onNavigate: We
              })) : ye.value === "branches" ? (n(), D(ip, {
                key: 3,
                branches: I.value,
                current: ((pt = U.value) == null ? void 0 : pt.branch) || null,
                onSwitch: dt,
                onCreate: It,
                onDelete: Xt
              }, null, 8, ["branches", "current"])) : ye.value === "history" ? (n(), D(cp, {
                key: 4,
                commits: B.value,
                "current-ref": (q = U.value) == null ? void 0 : q.branch,
                onSelect: mt,
                onCheckout: ct
              }, null, 8, ["commits", "current-ref"])) : ye.value === "nodes" ? (n(), D(i2, {
                key: 5,
                "version-mismatches": ((Ve = (be = U.value) == null ? void 0 : be.comparison) == null ? void 0 : Ve.version_mismatches) || [],
                onOpenNodeManager: fe,
                onRepairEnvironment: Qs,
                onToast: de
              }, null, 8, ["version-mismatches"])) : ye.value === "debug-env" ? (n(), D(S3, { key: 6 })) : ye.value === "environments" ? (n(), D(Xx, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: $e,
                onSwitch: Ie,
                onCreated: mo,
                onDelete: fo
              }, null, 512)) : ye.value === "model-index" ? (n(), D(Eb, {
                key: 8,
                onRefresh: qe
              })) : ye.value === "settings" ? (n(), D(h3, { key: 9 })) : ye.value === "debug-workspace" ? (n(), D(x3, { key: 10 })) : ye.value === "deploy" ? (n(), D(GE, {
                key: 11,
                onToast: de,
                onNavigate: We
              })) : ye.value === "export" ? (n(), D(W5, { key: 12 })) : ye.value === "import" ? (n(), D(U8, {
                key: 13,
                onImportCompleteSwitch: ua
              })) : ye.value === "remotes" ? (n(), D(JC, {
                key: 14,
                onToast: de
              })) : y("", !0)
            ], 64))
          ])
        ]),
        le.value ? (n(), D(rT, {
          key: 1,
          commit: le.value,
          onClose: J[25] || (J[25] = (Xe) => le.value = null),
          onCheckout: ct,
          onCreateBranch: Lt
        }, null, 8, ["commit"])) : y("", !0),
        H.value ? (n(), D(pl, {
          key: 2,
          title: H.value.title,
          message: H.value.message,
          details: H.value.details,
          warning: H.value.warning,
          confirmLabel: H.value.confirmLabel,
          cancelLabel: H.value.cancelLabel,
          secondaryLabel: H.value.secondaryLabel,
          secondaryAction: H.value.secondaryAction,
          destructive: H.value.destructive,
          onConfirm: H.value.onConfirm,
          onCancel: J[26] || (J[26] = (Xe) => H.value = null),
          onSecondary: H.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        S(ZT, {
          show: ie.value,
          "from-environment": ((yt = se.value) == null ? void 0 : yt.name) || "unknown",
          "to-environment": L.value,
          onConfirm: tt,
          onClose: gs
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Oe.value && U.value ? (n(), D(ec, {
          key: 3,
          status: U.value,
          "as-modal": !0,
          onClose: J[27] || (J[27] = (Xe) => Oe.value = !1),
          onCommitted: ro
        }, null, 8, ["status"])) : y("", !0),
        xe.value && U.value ? (n(), D(w7, {
          key: 4,
          show: xe.value,
          "mismatch-details": {
            missing_nodes: U.value.comparison.missing_nodes,
            extra_nodes: U.value.comparison.extra_nodes
          },
          onConfirm: co,
          onClose: J[28] || (J[28] = (Xe) => xe.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        S(u7, {
          show: F.value,
          state: Ue.value.state,
          progress: Ue.value.progress,
          message: Ue.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        W.value ? (n(), i("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: J[30] || (J[30] = kt((Xe) => W.value = !1, ["self"]))
        }, [
          t("div", sM, [
            t("div", oM, [
              J[44] || (J[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: J[29] || (J[29] = (Xe) => W.value = !1)
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
            t("div", nM, [
              J[45] || (J[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", aM, [
                (n(!0), i(j, null, ge(N.value, (Xe) => (n(), i("div", {
                  key: Xe.name,
                  class: Pe(["env-item", { current: Xe.is_current }])
                }, [
                  t("div", lM, [
                    t("div", iM, [
                      t("span", rM, d(Xe.is_current ? "●" : "○"), 1),
                      t("span", cM, d(Xe.name), 1),
                      Xe.current_branch ? (n(), i("span", uM, "(" + d(Xe.current_branch) + ")", 1)) : y("", !0),
                      Xe.is_current ? (n(), i("span", dM, "CURRENT")) : y("", !0)
                    ]),
                    t("div", mM, d(Xe.workflow_count) + " workflows • " + d(Xe.node_count) + " nodes ", 1)
                  ]),
                  Xe.is_current ? y("", !0) : (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (zD) => Ie(Xe.name)
                  }, " SWITCH ", 8, fM))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        Z.value ? (n(), D($P, {
          key: 6,
          "default-path": ((Pt = te.value) == null ? void 0 : Pt.default_path) || "~/comfygit",
          "detected-models-dir": ((ls = te.value) == null ? void 0 : ls.detected_models_dir) || null,
          "initial-step": X.value,
          "existing-environments": ((As = te.value) == null ? void 0 : As.environments) || [],
          "cli-installed": ((Os = te.value) == null ? void 0 : Os.cli_installed) ?? !0,
          "setup-state": ((No = te.value) == null ? void 0 : No.state) || "no_workspace",
          "workspace-path": ((Uo = te.value) == null ? void 0 : Uo.workspace_path) || null,
          onComplete: vo,
          onClose: po,
          onSwitchEnvironment: go,
          onEnvironmentCreatedNoSwitch: da
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", vM, [
          S(Id, { name: "toast" }, {
            default: h(() => [
              (n(!0), i(j, null, ge(Ce.value, (Xe) => (n(), i("div", {
                key: Xe.id,
                class: Pe(["toast", Xe.type])
              }, [
                t("span", pM, d(Xe.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), hM = /* @__PURE__ */ we(gM, [["__scopeId", "data-v-9c2af32e"]]), yM = { class: "item-header" }, wM = { class: "item-info" }, _M = { class: "filename" }, kM = { class: "metadata" }, bM = { class: "size" }, $M = {
  key: 0,
  class: "type"
}, CM = { class: "item-actions" }, xM = {
  key: 0,
  class: "progress-section"
}, SM = { class: "progress-bar" }, IM = { class: "progress-stats" }, EM = { class: "downloaded" }, TM = { class: "speed" }, PM = {
  key: 0,
  class: "eta"
}, MM = {
  key: 1,
  class: "status-msg paused"
}, RM = {
  key: 2,
  class: "status-msg queued"
}, DM = {
  key: 3,
  class: "status-msg completed"
}, LM = {
  key: 4,
  class: "status-msg failed"
}, NM = {
  key: 0,
  class: "retries"
}, UM = /* @__PURE__ */ he({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: s }) {
    const o = s;
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
    return (c, u) => (n(), i("div", {
      class: Pe(["download-item", `status-${e.item.status}`])
    }, [
      t("div", yM, [
        t("div", wM, [
          t("div", _M, d(e.item.filename), 1),
          t("div", kM, [
            t("span", bM, d(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", $M, d(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", CM, [
          e.item.status === "queued" || e.item.status === "downloading" ? (n(), i("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (m) => o("cancel")),
            title: "Cancel"
          }, " × ")) : y("", !0),
          e.item.status === "paused" ? (n(), i("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (m) => o("resume")),
            title: "Resume"
          }, " ▶ ")) : y("", !0),
          e.item.status === "failed" ? (n(), i("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (m) => o("retry")),
            title: "Retry"
          }, " ↻ ")) : y("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (n(), i("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (m) => o("remove")),
            title: "Remove"
          }, " × ")) : y("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (n(), i("div", xM, [
        t("div", SM, [
          t("div", {
            class: "progress-fill",
            style: Jt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", IM, [
          t("span", EM, d(a(e.item.downloaded)) + " / " + d(a(e.item.size)), 1),
          t("span", TM, d(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", PM, d(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", MM, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", RM, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", DM, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", LM, [
        b(" ✗ " + d(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", NM, "(" + d(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Vo = /* @__PURE__ */ we(UM, [["__scopeId", "data-v-2110df65"]]), AM = { class: "queue-title" }, OM = { class: "count" }, zM = { class: "queue-actions" }, FM = { class: "action-label" }, VM = {
  key: 0,
  class: "overall-progress"
}, BM = { class: "progress-bar" }, WM = {
  key: 0,
  class: "current-mini"
}, GM = { class: "filename" }, jM = { class: "speed" }, HM = {
  key: 1,
  class: "queue-content"
}, KM = {
  key: 0,
  class: "section"
}, qM = {
  key: 1,
  class: "section"
}, YM = { class: "section-header" }, QM = { class: "section-label paused" }, JM = { class: "items-list" }, XM = {
  key: 2,
  class: "section"
}, ZM = { class: "section-header" }, eR = { class: "section-label" }, tR = { class: "items-list" }, sR = {
  key: 3,
  class: "section"
}, oR = { class: "section-header" }, nR = { class: "section-label" }, aR = { class: "items-list" }, lR = {
  key: 4,
  class: "section"
}, iR = { class: "section-header" }, rR = { class: "section-label failed" }, cR = { class: "items-list" }, uR = /* @__PURE__ */ he({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: s,
      currentDownload: o,
      queuedItems: a,
      completedItems: l,
      failedItems: r,
      pausedItems: c,
      hasItems: u,
      activeCount: m,
      cancelDownload: f,
      retryDownload: v,
      resumeDownload: p,
      resumeAllPaused: _,
      removeItem: g,
      clearCompleted: w
    } = Do(), C = k(!1);
    let $ = null;
    Ct(
      () => ({
        active: m.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (P, R) => {
        $ && (clearTimeout($), $ = null);
        const U = P.active === 0 && P.failed === 0 && P.paused === 0 && P.completed > 0, B = R && (R.active > 0 || R.paused > 0);
        U && B && ($ = setTimeout(() => {
          w(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const x = A(() => {
      var U;
      if (s.items.length === 0) return 0;
      const P = l.value.length, R = ((U = o.value) == null ? void 0 : U.progress) || 0;
      return Math.round((P + R / 100) / s.items.length * 100);
    });
    function O(P) {
      f(P);
    }
    function T(P) {
      return P === 0 ? "..." : `${(P / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (P, R) => (n(), D(Dt, { to: "body" }, [
      Je(u) ? (n(), i("div", {
        key: 0,
        class: Pe(["model-download-queue", { minimized: !C.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: R[0] || (R[0] = (U) => C.value = !C.value)
        }, [
          t("div", AM, [
            R[4] || (R[4] = t("span", { class: "icon" }, "↓", -1)),
            R[5] || (R[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", OM, "(" + d(Je(m)) + "/" + d(Je(s).items.length) + ")", 1)
          ]),
          t("div", zM, [
            t("span", FM, d(C.value ? "minimize" : "expand"), 1)
          ])
        ]),
        C.value ? (n(), i("div", HM, [
          Je(o) ? (n(), i("div", KM, [
            R[6] || (R[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            S(Vo, {
              item: Je(o),
              onCancel: R[1] || (R[1] = (U) => O(Je(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          Je(c).length > 0 ? (n(), i("div", qM, [
            t("div", YM, [
              t("span", QM, "Paused (" + d(Je(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: R[2] || (R[2] = //@ts-ignore
                (...U) => Je(_) && Je(_)(...U))
              }, "Resume All")
            ]),
            t("div", JM, [
              (n(!0), i(j, null, ge(Je(c), (U) => (n(), D(Vo, {
                key: U.id,
                item: U,
                onResume: (B) => Je(p)(U.id),
                onRemove: (B) => Je(g)(U.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Je(a).length > 0 ? (n(), i("div", XM, [
            t("div", ZM, [
              t("span", eR, "Queued (" + d(Je(a).length) + ")", 1)
            ]),
            t("div", tR, [
              (n(!0), i(j, null, ge(Je(a), (U) => (n(), D(Vo, {
                key: U.id,
                item: U,
                onCancel: (B) => O(U.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          Je(l).length > 0 ? (n(), i("div", sR, [
            t("div", oR, [
              t("span", nR, "Completed (" + d(Je(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: R[3] || (R[3] = //@ts-ignore
                (...U) => Je(w) && Je(w)(...U))
              }, "Clear")
            ]),
            t("div", aR, [
              (n(!0), i(j, null, ge(Je(l).slice(0, 3), (U) => (n(), D(Vo, {
                key: U.id,
                item: U,
                onRemove: (B) => Je(g)(U.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Je(r).length > 0 ? (n(), i("div", lR, [
            t("div", iR, [
              t("span", rR, "Failed (" + d(Je(r).length) + ")", 1)
            ]),
            t("div", cR, [
              (n(!0), i(j, null, ge(Je(r), (U) => (n(), D(Vo, {
                key: U.id,
                item: U,
                onRetry: (B) => Je(v)(U.id),
                onRemove: (B) => Je(g)(U.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (n(), i("div", VM, [
          t("div", BM, [
            t("div", {
              class: "progress-fill",
              style: Jt({ width: `${x.value}%` })
            }, null, 4)
          ]),
          Je(o) ? (n(), i("div", WM, [
            t("span", GM, d(Je(o).filename), 1),
            t("span", jM, d(T(Je(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), dR = /* @__PURE__ */ we(uR, [["__scopeId", "data-v-3a3c9607"]]), mR = { class: "detail-header" }, fR = { class: "item-count" }, vR = { class: "resource-list" }, pR = { class: "item-info" }, gR = { class: "item-name" }, hR = {
  key: 0,
  class: "item-subtitle"
}, yR = {
  key: 0,
  class: "installing-badge"
}, wR = ["title"], _R = {
  key: 2,
  class: "installed-badge"
}, kR = {
  key: 3,
  class: "queued-badge"
}, bR = {
  key: 4,
  class: "action-buttons"
}, $R = {
  key: 1,
  class: "no-action"
}, CR = /* @__PURE__ */ he({
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
    const o = e, a = s, l = A(() => o.items.filter((g) => g.canAction)), r = A(() => l.value.length > 0 && l.value.every(
      (g) => {
        var w, C;
        return o.queuedItems.has(g.id) || ((w = o.installedItems) == null ? void 0 : w.has(g.id)) || ((C = o.failedItems) == null ? void 0 : C.has(g.id));
      }
    )), c = A(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
    function u(g) {
      return o.queuedItems.has(g.id);
    }
    function m(g) {
      return o.installingItem === g.id;
    }
    function f(g) {
      var w;
      return ((w = o.installedItems) == null ? void 0 : w.has(g.id)) ?? !1;
    }
    function v(g) {
      var w;
      return ((w = o.failedItems) == null ? void 0 : w.has(g.id)) ?? !1;
    }
    function p(g) {
      var w;
      return ((w = o.failedItems) == null ? void 0 : w.get(g.id)) || "Unknown error";
    }
    function _(g) {
      return g.actions && g.actions.length > 0 ? g.actions : [{
        key: "default",
        label: o.itemType === "models" ? "Download" : "Install",
        variant: "secondary"
      }];
    }
    return (g, w) => (n(), D($t, {
      title: e.title,
      size: "md",
      onClose: w[2] || (w[2] = (C) => a("close"))
    }, {
      body: h(() => [
        t("div", mR, [
          t("span", fR, d(e.items.length) + " " + d(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (n(), D(De, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: w[0] || (w[0] = (C) => a("bulk-action"))
          }, {
            default: h(() => [
              b(d(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        t("div", vR, [
          (n(!0), i(j, null, ge(e.items, (C) => (n(), i("div", {
            key: C.id,
            class: "resource-item"
          }, [
            t("div", pR, [
              t("span", gR, d(C.name), 1),
              C.subtitle ? (n(), i("span", hR, d(C.subtitle), 1)) : y("", !0)
            ]),
            C.canAction ? (n(), i(j, { key: 0 }, [
              m(C) ? (n(), i("span", yR, "Installing...")) : v(C) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(C)
              }, "Failed ⚠", 8, wR)) : f(C) ? (n(), i("span", _R, "Installed")) : u(C) ? (n(), i("span", kR, "Queued")) : (n(), i("div", bR, [
                (n(!0), i(j, null, ge(_(C), ($) => (n(), D(De, {
                  key: `${C.id}-${$.key}`,
                  size: "sm",
                  variant: $.variant || "secondary",
                  onClick: (x) => a("action", C, $.key)
                }, {
                  default: h(() => [
                    b(d($.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (n(), i("span", $R, d(C.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        S(De, {
          variant: "secondary",
          onClick: w[1] || (w[1] = (C) => a("close"))
        }, {
          default: h(() => [...w[3] || (w[3] = [
            b("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), xR = /* @__PURE__ */ we(CR, [["__scopeId", "data-v-ec7e9202"]]), SR = {
  key: 0,
  class: "loading-state"
}, IR = {
  key: 1,
  class: "analysis-results"
}, ER = {
  key: 0,
  class: "section"
}, TR = { class: "section-header" }, PR = { class: "section-title" }, MR = { class: "item-list" }, RR = { class: "package-info" }, DR = { class: "package-name" }, LR = { class: "node-count" }, NR = {
  key: 1,
  class: "installing-badge"
}, UR = {
  key: 2,
  class: "queued-badge"
}, AR = ["title"], OR = {
  key: 4,
  class: "installed-badge"
}, zR = {
  key: 1,
  class: "section"
}, FR = { class: "section-header" }, VR = { class: "section-title" }, BR = { class: "item-list" }, WR = { class: "node-type" }, GR = {
  key: 0,
  class: "overflow-note"
}, jR = {
  key: 2,
  class: "section"
}, HR = { class: "section-header" }, KR = { class: "section-title" }, qR = { class: "item-list" }, YR = { class: "node-type" }, QR = { class: "not-found" }, JR = {
  key: 0,
  class: "overflow-note"
}, XR = {
  key: 3,
  class: "section"
}, ZR = { class: "section-header" }, eD = { class: "section-title" }, tD = { class: "item-list" }, sD = { class: "package-info community-info" }, oD = { class: "community-title-row" }, nD = { class: "package-name" }, aD = { class: "node-count" }, lD = { class: "community-mapping-note" }, iD = { key: 0 }, rD = {
  key: 0,
  class: "community-actions"
}, cD = {
  key: 1,
  class: "installing-badge"
}, uD = {
  key: 2,
  class: "queued-badge"
}, dD = ["title"], mD = {
  key: 4,
  class: "installed-badge"
}, fD = ["title"], vD = {
  key: 1,
  class: "no-url"
}, pD = {
  key: 4,
  class: "section"
}, gD = { class: "section-header" }, hD = { class: "section-title" }, yD = { class: "item-list" }, wD = { class: "model-info" }, _D = { class: "model-name" }, kD = {
  key: 1,
  class: "queued-badge"
}, bD = {
  key: 1,
  class: "no-url"
}, $D = { class: "dont-show-again" }, CD = 3e4, xD = /* @__PURE__ */ he({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = k(!1), o = k(null), a = k(null), l = k(!1), r = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Map()), m = k(/* @__PURE__ */ new Set()), f = k(!1), v = k(null), p = k(0), _ = k(null), g = k(/* @__PURE__ */ new Set()), w = k(/* @__PURE__ */ new Map()), C = k(/* @__PURE__ */ new Map()), { addToQueue: $ } = Do(), { queueNodeInstall: x } = rt(), O = A(() => {
      var Y;
      return ((Y = a.value) == null ? void 0 : Y.package_aliases) || {};
    });
    function T(Y) {
      if (!Y) return null;
      const de = O.value;
      let pe = Y;
      const He = /* @__PURE__ */ new Set();
      for (; de[pe] && !He.has(pe); )
        He.add(pe), pe = de[pe];
      return pe;
    }
    function P(Y, de) {
      return Y instanceof Error && Y.message ? Y.message : typeof Y == "string" && Y.trim().length > 0 ? Y : de;
    }
    function R(Y) {
      for (const [de, pe] of w.value.entries())
        pe === Y && w.value.delete(de);
    }
    function U(Y) {
      if (!C.value.has(Y)) return;
      const de = C.value.get(Y);
      clearTimeout(de), C.value.delete(Y);
    }
    function B() {
      for (const Y of C.value.values())
        clearTimeout(Y);
      C.value = /* @__PURE__ */ new Map();
    }
    function I(Y) {
      U(Y);
      const de = setTimeout(() => {
        if (C.value.delete(Y), !c.value.has(Y)) return;
        R(Y), c.value.delete(Y), v.value === Y && (v.value = null), u.value.set(Y, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", Y);
      }, CD);
      C.value.set(Y, de);
    }
    function N(Y) {
      const de = `Cannot install "${Y.title}" - package_id is missing`;
      u.value.set(Y.item_id, de), o.value = de, console.warn("[ComfyGit] Community install requested without package_id:", Y);
    }
    const se = A(() => te.value.length > 0 || X.value.length > 0 || G.value.length > 0 || Q.value.length > 0 || ae.value.length > 0), te = A(() => {
      var pe, He;
      if (!((pe = a.value) != null && pe.nodes)) return [];
      const Y = /* @__PURE__ */ new Map(), de = (a.value.nodes.resolved || []).filter((ze) => {
        var Fe;
        return !ze.is_installed && ((Fe = ze.package) == null ? void 0 : Fe.package_id);
      });
      for (const ze of de) {
        const Fe = T(ze.package.package_id);
        if (!Fe) continue;
        Y.has(Fe) || Y.set(Fe, {
          package_id: Fe,
          title: ze.package.title || Fe,
          node_count: 0,
          node_types: [],
          repository: ze.package.repository || null,
          latest_version: ze.package.latest_version || null
        });
        const et = Y.get(Fe);
        et.node_count++, et.node_types.push(((He = ze.reference) == null ? void 0 : He.node_type) || ze.node_type);
      }
      return Array.from(Y.values());
    }), Z = A(() => te.value.reduce((Y, de) => Y + de.node_count, 0)), X = A(() => {
      var Y;
      return (Y = a.value) != null && Y.nodes ? (a.value.nodes.unresolved || []).map((de) => {
        var pe;
        return {
          node_type: ((pe = de.reference) == null ? void 0 : pe.node_type) || de.node_type
        };
      }) : [];
    }), G = A(() => {
      var de;
      if (!((de = a.value) != null && de.nodes)) return [];
      const Y = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((pe) => {
        var ze;
        const He = ((ze = pe.reference) == null ? void 0 : ze.node_type) || pe.node_type;
        return {
          node_type: He,
          guidance: pe.guidance || Y[He] || null
        };
      });
    }), Q = A(() => {
      var pe, He, ze, Fe, et, qe, mt, ct;
      if (!((pe = a.value) != null && pe.nodes)) return [];
      const Y = a.value.node_guidance || {}, de = /* @__PURE__ */ new Map();
      for (const dt of a.value.nodes.uninstallable || []) {
        const It = ((He = dt.reference) == null ? void 0 : He.node_type) || dt.node_type, Xt = T(((ze = dt.package) == null ? void 0 : ze.package_id) || null), Lt = Xt || `node:${It}`;
        de.has(Lt) || de.set(Lt, {
          item_id: Lt,
          node_type: It,
          title: ((Fe = dt.package) == null ? void 0 : Fe.title) || Xt || It,
          node_count: 0,
          package_id: Xt,
          repository: ((et = dt.package) == null ? void 0 : et.repository) || null,
          latest_version: ((qe = dt.package) == null ? void 0 : qe.latest_version) || null,
          guidance: dt.guidance || Y[It] || null
        });
        const re = de.get(Lt);
        re.node_count++, re.guidance || (re.guidance = dt.guidance || Y[It] || null), !re.repository && ((mt = dt.package) != null && mt.repository) && (re.repository = dt.package.repository), !re.latest_version && ((ct = dt.package) != null && ct.latest_version) && (re.latest_version = dt.package.latest_version);
      }
      return Array.from(de.values());
    }), oe = A(() => Q.value.filter((Y) => !!Y.package_id)), le = A(() => Q.value.length >= 5 ? Q.value.slice(0, 4) : Q.value), W = A(() => oe.value.length > 0 && oe.value.every((Y) => {
      const de = Y.package_id;
      return r.value.has(de) || c.value.has(de) || u.value.has(de);
    }));
    function ee(Y) {
      const de = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return Y.repository && de.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), de;
    }
    const ae = A(() => {
      var ze;
      if (!((ze = a.value) != null && ze.models)) return [];
      const Y = (a.value.models.resolved || []).filter(
        (Fe) => Fe.match_type === "download_intent" || Fe.match_type === "property_download_intent" || Fe.match_type === "not_found"
      ).map((Fe) => {
        var et, qe, mt, ct;
        return {
          filename: ((qe = (et = Fe.reference) == null ? void 0 : et.widget_value) == null ? void 0 : qe.split("/").pop()) || ((mt = Fe.reference) == null ? void 0 : mt.widget_value) || Fe.widget_value,
          widget_value: ((ct = Fe.reference) == null ? void 0 : ct.widget_value) || Fe.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: Fe.download_source || null,
          targetPath: Fe.target_path || null,
          canDownload: !!(Fe.download_source && Fe.target_path)
        };
      }), de = (a.value.models.unresolved || []).map((Fe) => {
        var et, qe, mt, ct;
        return {
          filename: ((qe = (et = Fe.reference) == null ? void 0 : et.widget_value) == null ? void 0 : qe.split("/").pop()) || ((mt = Fe.reference) == null ? void 0 : mt.widget_value) || Fe.widget_value,
          widget_value: ((ct = Fe.reference) == null ? void 0 : ct.widget_value) || Fe.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), pe = /* @__PURE__ */ new Map(), He = [];
      for (const Fe of Y) {
        if (!Fe.url) {
          He.push(Fe);
          continue;
        }
        const et = `${Fe.filename}::${Fe.url}`, qe = pe.get(et);
        if (!qe) {
          pe.set(et, Fe);
          continue;
        }
        !qe.targetPath && Fe.targetPath && (qe.targetPath = Fe.targetPath), !qe.canDownload && Fe.canDownload && (qe.canDownload = Fe.canDownload);
      }
      return [...pe.values(), ...He, ...de];
    }), Ne = A(() => ae.value.filter((Y) => Y.canDownload)), Ke = A(() => te.value.length >= 5 ? te.value.slice(0, 4) : te.value), je = A(() => ae.value.length >= 5 ? ae.value.slice(0, 4) : ae.value), $e = A(() => te.value.length > 0 && te.value.every(
      (Y) => r.value.has(Y.package_id) || c.value.has(Y.package_id) || u.value.has(Y.package_id)
    )), V = A(() => Ne.value.length > 0 && Ne.value.every((Y) => m.value.has(Y.url))), ie = A(() => te.value.length > 0 || oe.value.length > 0 || Ne.value.length > 0), F = A(() => {
      const Y = (te.value.length === 0 || $e.value) && (oe.value.length === 0 || W.value), de = Ne.value.length === 0 || V.value;
      return Y && de;
    }), L = A(() => _.value === "models" ? `Missing Models (${ae.value.length})` : _.value === "packages" ? `Missing Custom Nodes (${Z.value})` : _.value === "community" ? `Community-Mapped Packages (${Q.value.length})` : ""), ne = A(() => _.value === "models" ? ae.value.map((Y) => ({
      id: Y.url || Y.widget_value,
      name: Y.filename,
      canAction: Y.canDownload,
      actionDisabledReason: Y.canDownload ? void 0 : "Manual download required"
    })) : _.value === "packages" ? te.value.map((Y) => ({
      id: Y.package_id,
      name: Y.title,
      subtitle: `(${Y.node_count} ${Y.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : _.value === "community" ? Q.value.map((Y) => ({
      id: Y.package_id || Y.item_id,
      name: Y.title,
      subtitle: `(${Y.node_count} ${Y.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!Y.package_id,
      actionDisabledReason: Y.package_id ? void 0 : "Manual setup required",
      actions: Y.package_id ? ee(Y) : []
    })) : []);
    function Ue(Y, de) {
      if (_.value === "models") {
        const pe = ae.value.find((He) => He.url === Y.id || He.widget_value === Y.id);
        pe && Se(pe);
      } else if (_.value === "packages") {
        const pe = te.value.find((He) => He.package_id === Y.id);
        pe && z(pe);
      } else if (_.value === "community") {
        const pe = Q.value.find((ze) => (ze.package_id || ze.item_id) === Y.id);
        if (!pe) return;
        if (!pe.package_id) {
          N({ item_id: pe.item_id, title: pe.title });
          return;
        }
        K(pe, de === "install_git" ? "git" : "registry");
      }
    }
    function Ae() {
      _.value === "models" ? Me() : _.value === "packages" ? _e() : _.value === "community" && ke();
    }
    async function z(Y) {
      return ce(Y.package_id, Y.latest_version, "registry");
    }
    async function K(Y, de) {
      return Y.package_id ? ce(Y.package_id, Y.latest_version, de, Y.repository) : (N({ item_id: Y.item_id, title: Y.title }), !1);
    }
    async function ce(Y, de, pe, He) {
      const ze = T(Y) || Y, Fe = de || "latest";
      if (r.value.has(ze) || c.value.has(ze) || u.value.has(ze))
        return !0;
      Re(), v.value = ze;
      let et = null;
      try {
        const qe = {
          id: ze,
          version: Fe,
          selected_version: Fe,
          mode: "remote",
          channel: "default"
        };
        pe === "git" && He && (qe.repository = He, qe.install_source = "git");
        const { ui_id: mt } = await x(qe, {
          beforeQueueStart: (ct) => {
            et = ct, w.value.set(ct, ze), c.value.add(ze), I(ze), console.log("[ComfyGit] Registered pending install:", {
              ui_id: ct,
              packageId: ze,
              pendingInstalls: Array.from(w.value.entries())
            });
          }
        });
        return et || (et = mt, w.value.set(mt, ze), c.value.add(ze), I(ze), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: mt,
          packageId: ze,
          pendingInstalls: Array.from(w.value.entries())
        })), !0;
      } catch (qe) {
        const mt = P(qe, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", qe), et && w.value.delete(et), R(ze), U(ze), c.value.delete(ze), u.value.set(ze, mt), !1;
      } finally {
        v.value = null;
      }
    }
    function Se(Y) {
      !Y.url || !Y.targetPath || m.value.has(Y.url) || ($([{
        workflow: "unsaved",
        filename: Y.filename,
        url: Y.url,
        targetPath: Y.targetPath
      }]), m.value.add(Y.url));
    }
    async function _e() {
      const Y = { attempted: 0, failed: 0 };
      for (const de of te.value)
        !r.value.has(de.package_id) && !c.value.has(de.package_id) && !u.value.has(de.package_id) && (Y.attempted++, await z(de) || Y.failed++);
      return Y;
    }
    async function ke() {
      const Y = { attempted: 0, failed: 0 };
      for (const de of oe.value) {
        const pe = de.package_id;
        !r.value.has(pe) && !c.value.has(pe) && !u.value.has(pe) && (Y.attempted++, await K(de, "registry") || Y.failed++);
      }
      return Y;
    }
    function Me() {
      const Y = Ne.value.filter(
        (de) => !m.value.has(de.url)
      );
      if (Y.length === 0) return 0;
      $(Y.map((de) => ({
        workflow: "unsaved",
        filename: de.filename,
        url: de.url,
        targetPath: de.targetPath
      })));
      for (const de of Y)
        m.value.add(de.url);
      return Y.length;
    }
    async function ye() {
      const Y = await _e(), de = await ke();
      Me();
      const pe = Y.attempted + de.attempted, He = Y.failed + de.failed;
      if (pe > 0 && He > 0) {
        const ze = pe - He;
        o.value = `${ze} of ${pe} installs queued, ${He} failed`;
      }
    }
    function Te() {
      f.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function me(Y) {
      var ze, Fe;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const de = Y == null ? void 0 : Y.id;
      if (de && g.value.has(de)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${de} this session`);
        return;
      }
      const pe = window.app, He = (ze = pe == null ? void 0 : pe.extensionManager) == null ? void 0 : ze.workflow;
      if (He) {
        let mt = !1;
        for (let ct = 0; ct < 20; ct++) {
          const dt = He.activeWorkflow;
          if (!dt) {
            await new Promise((Lt) => setTimeout(Lt, 50));
            continue;
          }
          const It = (Fe = dt.activeState) == null ? void 0 : Fe.id;
          if (!(de && It === de)) {
            ct < 19 && await new Promise((Lt) => setTimeout(Lt, 50));
            continue;
          }
          if (mt = !0, dt.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${dt.filename}`), de && g.value.add(de);
            return;
          }
          break;
        }
        mt || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      s.value = !0, o.value = null, B(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), m.value = /* @__PURE__ */ new Set(), w.value = /* @__PURE__ */ new Map(), f.value = !1, p.value = 0;
      try {
        const et = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: Y, name: "unsaved" })
        });
        if (!et.ok) {
          const qe = await et.json();
          throw new Error(qe.error || "Failed to analyze workflow");
        }
        a.value = await et.json(), se.value && (l.value = !0, de && g.value.add(de));
      } catch (et) {
        console.error("[ComfyGit] Failed to analyze workflow:", et);
      } finally {
        s.value = !1;
      }
    }
    function We() {
      B(), l.value = !1, a.value = null;
    }
    function Le(Y) {
      const { workflow: de } = Y.detail;
      de && me(de);
    }
    function fe(Y) {
      var He;
      const de = (He = Y.detail) == null ? void 0 : He.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: de,
        pendingInstalls: Array.from(w.value.entries()),
        eventDetail: Y.detail
      });
      const pe = w.value.get(de);
      pe ? (U(pe), v.value = pe, console.log("[ComfyGit] Installing package:", pe)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", de);
    }
    function H(Y) {
      var ze, Fe, et, qe, mt, ct, dt;
      const de = (ze = Y.detail) == null ? void 0 : ze.ui_id, pe = (et = (Fe = Y.detail) == null ? void 0 : Fe.status) == null ? void 0 : et.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: de,
        status: pe,
        pendingInstalls: Array.from(w.value.entries()),
        eventDetail: Y.detail
      });
      const He = w.value.get(de);
      if (He) {
        if (U(He), w.value.delete(de), c.value.delete(He), v.value === He && (v.value = null), pe === "success")
          r.value.add(He), p.value++, console.log("[ComfyGit] Package installed successfully:", He);
        else {
          const It = ((ct = (mt = (qe = Y.detail) == null ? void 0 : qe.status) == null ? void 0 : mt.messages) == null ? void 0 : ct[0]) || ((dt = Y.detail) == null ? void 0 : dt.result) || "Unknown error";
          u.value.set(He, It), console.error("[ComfyGit] Package install failed:", He, It);
        }
        w.value.size === 0 && p.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", p.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: p.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", de);
    }
    let Oe = null;
    function xe() {
      var Y;
      return Oe || (Oe = (Y = window.app) == null ? void 0 : Y.api), Oe;
    }
    let Ce = !1;
    function Re() {
      if (Ce) return !0;
      const Y = xe();
      return Y ? (Y.addEventListener("cm-task-started", fe), Y.addEventListener("cm-task-completed", H), Y.addEventListener("comfygit:workflow-changed", Ee), Ce = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Ee(Y) {
      const { change_type: de } = Y.detail;
      (de === "created" || de === "modified") && l.value && (B(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return at(() => {
      window.addEventListener("comfygit:workflow-loaded", Le);
    }), Ys(() => {
      if (B(), window.removeEventListener("comfygit:workflow-loaded", Le), Ce) {
        const Y = xe();
        Y && (Y.removeEventListener("cm-task-started", fe), Y.removeEventListener("cm-task-completed", H), Y.removeEventListener("comfygit:workflow-changed", Ee)), Ce = !1;
      }
    }), (Y, de) => (n(), i(j, null, [
      l.value ? (n(), D($t, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: We
      }, {
        body: h(() => [
          s.value ? (n(), i("div", SR, [...de[5] || (de[5] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && se.value ? (n(), i("div", IR, [
            te.value.length > 0 ? (n(), i("div", ER, [
              t("div", TR, [
                t("span", PR, "Missing Custom Nodes (" + d(Z.value) + ")", 1),
                te.value.length > 1 ? (n(), D(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: $e.value,
                  onClick: _e
                }, {
                  default: h(() => [
                    b(d($e.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", MR, [
                (n(!0), i(j, null, ge(Ke.value, (pe) => (n(), i("div", {
                  key: pe.package_id,
                  class: "package-item"
                }, [
                  t("div", RR, [
                    t("span", DR, d(pe.title), 1),
                    t("span", LR, "(" + d(pe.node_count) + " " + d(pe.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(pe.package_id) && !c.value.has(pe.package_id) && !u.value.has(pe.package_id) ? (n(), D(De, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: v.value === pe.package_id,
                    onClick: (He) => z(pe)
                  }, {
                    default: h(() => [
                      b(d(v.value === pe.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : v.value === pe.package_id ? (n(), i("span", NR, "Installing...")) : c.value.has(pe.package_id) ? (n(), i("span", UR, "Queued")) : u.value.has(pe.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(pe.package_id)
                  }, "Failed ⚠", 8, AR)) : (n(), i("span", OR, "Installed"))
                ]))), 128)),
                te.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: de[0] || (de[0] = (pe) => _.value = "packages")
                }, [
                  t("span", null, "Show all " + d(te.value.length) + " packages...", 1),
                  de[6] || (de[6] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            X.value.length > 0 ? (n(), i("div", zR, [
              t("div", FR, [
                t("span", VR, "Unknown Nodes (" + d(X.value.length) + ")", 1)
              ]),
              t("div", BR, [
                (n(!0), i(j, null, ge(X.value.slice(0, 5), (pe) => (n(), i("div", {
                  key: pe.node_type,
                  class: "item"
                }, [
                  t("code", WR, d(pe.node_type), 1),
                  de[7] || (de[7] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                X.value.length > 5 ? (n(), i("div", GR, " ...and " + d(X.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            G.value.length > 0 ? (n(), i("div", jR, [
              t("div", HR, [
                t("span", KR, "Requires Newer ComfyUI (" + d(G.value.length) + ")", 1)
              ]),
              t("div", qR, [
                (n(!0), i(j, null, ge(G.value.slice(0, 5), (pe) => (n(), i("div", {
                  key: `vg-${pe.node_type}`,
                  class: "item"
                }, [
                  t("code", YR, d(pe.node_type), 1),
                  t("span", QR, d(pe.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                G.value.length > 5 ? (n(), i("div", JR, " ...and " + d(G.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            Q.value.length > 0 ? (n(), i("div", XR, [
              t("div", ZR, [
                t("span", eD, "Community-Mapped Packages (" + d(Q.value.length) + ")", 1),
                oe.value.length > 1 ? (n(), D(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: W.value,
                  onClick: ke
                }, {
                  default: h(() => [
                    b(d(W.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", tD, [
                (n(!0), i(j, null, ge(le.value, (pe) => (n(), i("div", {
                  key: `community-${pe.item_id}`,
                  class: "package-item"
                }, [
                  t("div", sD, [
                    t("div", oD, [
                      t("span", nD, d(pe.title), 1),
                      t("span", aD, "(" + d(pe.node_count) + " " + d(pe.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    t("div", lD, [
                      de[8] || (de[8] = b(" Found via community mapping — registry metadata may be incomplete", -1)),
                      pe.guidance ? (n(), i("span", iD, ". " + d(pe.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  pe.package_id ? (n(), i(j, { key: 0 }, [
                    !r.value.has(pe.package_id) && !c.value.has(pe.package_id) && !u.value.has(pe.package_id) ? (n(), i("div", rD, [
                      S(De, {
                        size: "sm",
                        variant: "secondary",
                        disabled: v.value === pe.package_id,
                        onClick: (He) => K(pe, "registry")
                      }, {
                        default: h(() => [
                          b(d(v.value === pe.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      pe.repository ? (n(), D(De, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: v.value === pe.package_id,
                        onClick: (He) => K(pe, "git")
                      }, {
                        default: h(() => [...de[9] || (de[9] = [
                          b(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : y("", !0)
                    ])) : v.value === pe.package_id ? (n(), i("span", cD, "Installing...")) : c.value.has(pe.package_id) ? (n(), i("span", uD, "Queued")) : u.value.has(pe.package_id) ? (n(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get(pe.package_id)
                    }, "Failed ⚠", 8, dD)) : (n(), i("span", mD, "Installed"))
                  ], 64)) : (n(), i(j, { key: 1 }, [
                    u.value.has(pe.item_id) ? (n(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: u.value.get(pe.item_id)
                    }, "Failed ⚠", 8, fD)) : (n(), i("span", vD, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                Q.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: de[1] || (de[1] = (pe) => _.value = "community")
                }, [
                  t("span", null, "Show all " + d(Q.value.length) + " packages...", 1),
                  de[10] || (de[10] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            ae.value.length > 0 ? (n(), i("div", pD, [
              t("div", gD, [
                t("span", hD, "Missing Models (" + d(ae.value.length) + ")", 1),
                Ne.value.length > 1 ? (n(), D(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: V.value,
                  onClick: Me
                }, {
                  default: h(() => [
                    b(d(V.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", yD, [
                (n(!0), i(j, null, ge(je.value, (pe) => (n(), i("div", {
                  key: pe.widget_value,
                  class: "model-item"
                }, [
                  t("div", wD, [
                    t("span", _D, d(pe.filename), 1)
                  ]),
                  pe.canDownload ? (n(), i(j, { key: 0 }, [
                    m.value.has(pe.url) ? (n(), i("span", kD, "Queued")) : (n(), D(De, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (He) => Se(pe)
                    }, {
                      default: h(() => [...de[11] || (de[11] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", bD, "Manual download required"))
                ]))), 128)),
                ae.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: de[2] || (de[2] = (pe) => _.value = "models")
                }, [
                  t("span", null, "Show all " + d(ae.value.length) + " models...", 1),
                  de[12] || (de[12] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            t("div", $D, [
              S(qn, {
                modelValue: f.value,
                "onUpdate:modelValue": [
                  de[3] || (de[3] = (pe) => f.value = pe),
                  Te
                ]
              }, {
                default: h(() => [...de[13] || (de[13] = [
                  b(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : y("", !0)
        ]),
        footer: h(() => [
          S(De, {
            variant: "secondary",
            onClick: We
          }, {
            default: h(() => [...de[14] || (de[14] = [
              b("Dismiss", -1)
            ])]),
            _: 1
          }),
          ie.value ? (n(), D(De, {
            key: 0,
            variant: "primary",
            disabled: F.value,
            onClick: ye
          }, {
            default: h(() => [
              b(d(F.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      _.value ? (n(), D(xR, {
        key: 1,
        title: L.value,
        items: ne.value,
        "item-type": _.value,
        "queued-items": _.value === "models" ? m.value : c.value,
        "installed-items": _.value === "models" ? void 0 : r.value,
        "failed-items": _.value === "models" ? void 0 : u.value,
        "installing-item": _.value === "models" ? void 0 : v.value,
        onClose: de[4] || (de[4] = (pe) => _.value = null),
        onAction: Ue,
        onBulkAction: Ae
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), SD = /* @__PURE__ */ we(xD, [["__scopeId", "data-v-dfb55c3f"]]), ID = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', ED = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', TD = {
  comfy: ID,
  phosphor: ED
}, hl = "comfy", nc = "comfygit-theme";
let eo = null, ac = hl;
function PD() {
  try {
    const e = localStorage.getItem(nc);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return hl;
}
function lc(e = hl) {
  eo && eo.remove(), eo = document.createElement("style"), eo.id = "comfygit-theme-styles", eo.setAttribute("data-theme", e), eo.textContent = TD[e], document.head.appendChild(eo), document.body.setAttribute("data-comfygit-theme", e), ac = e;
  try {
    localStorage.setItem(nc, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function MD() {
  return ac;
}
function RD(e) {
  lc(e);
}
function DD(e) {
  var r;
  const { ui_id: s, state: o } = e || {}, a = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = a[s];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const yl = document.createElement("link");
yl.rel = "stylesheet";
yl.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(yl);
const LD = PD();
lc(LD);
sessionStorage.removeItem("ComfyGit.LastView");
sessionStorage.removeItem("ComfyGit.LastSection");
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), RD(e);
  },
  getTheme: () => {
    const e = MD();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let rs = null, Kt = null, tn = null, Bo = null, fi = null, Wo = null, vi = null;
const Eo = k(null);
let mn = "no_workspace", ic = !1;
async function Un() {
  var e;
  if (!((e = es) != null && e.api)) return null;
  try {
    const s = await es.api.fetchApi("/v2/comfygit/status");
    s.ok && (Eo.value = await s.json());
  } catch {
  }
}
async function ja() {
  var e;
  if ((e = es) != null && e.api)
    try {
      const s = await es.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        mn = o.state, ic = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Ha() {
  var s;
  if (mn === "managed" || !ic) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function ND() {
  if (!Eo.value) return !1;
  const e = Eo.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Eo.value.has_changes;
}
function Tn(e) {
  rs && rs.remove(), rs = document.createElement("div"), rs.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", rs.appendChild(s), rs.addEventListener("click", (l) => {
    l.target === rs && Pa();
  });
  const o = (l) => {
    l.key === "Escape" && (Pa(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), ra({
    render: () => gn(hM, {
      initialView: e,
      onClose: Pa,
      onStatusUpdate: async (l) => {
        Eo.value = l, sn(), await ja(), Ka(), Ha();
      }
    })
  }).mount(s), document.body.appendChild(rs);
}
function Pa() {
  rs && (rs.remove(), rs = null);
}
function pi(e) {
  Go(), Kt = document.createElement("div"), Kt.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Kt.style.position = "fixed", Kt.style.top = `${s.bottom + 8}px`, Kt.style.right = `${window.innerWidth - s.right}px`, Kt.style.zIndex = "10001";
  const o = (l) => {
    Kt && !Kt.contains(l.target) && l.target !== e && (Go(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const a = (l) => {
    l.key === "Escape" && (Go(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), tn = ra({
    render: () => gn(ec, {
      status: Eo.value,
      onClose: Go,
      onCommitted: (l) => {
        Go(), UD(l.success, l.message), Un().then(sn);
      }
    })
  }), tn.mount(Kt), document.body.appendChild(Kt);
}
function Go() {
  tn && (tn.unmount(), tn = null), Kt && (Kt.remove(), Kt = null);
}
function UD(e, s) {
  const o = document.createElement("div"), a = e ? "#22c55e" : "#ef4444";
  o.style.cssText = `
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
  `, o.appendChild(l);
  const r = document.createElement("span");
  r.textContent = s, o.appendChild(r), document.body.appendChild(o), setTimeout(() => {
    o.style.opacity = "0", o.style.transition = "opacity 0.2s ease", setTimeout(() => o.remove(), 200);
  }, 3e3);
}
function AD() {
  Bo || (Bo = document.createElement("div"), Bo.className = "comfygit-download-queue-root", fi = ra({
    render: () => gn(dR)
  }), fi.mount(Bo), document.body.appendChild(Bo), console.log("[ComfyGit] Model download queue mounted"));
}
function OD() {
  Wo || (Wo = document.createElement("div"), Wo.className = "comfygit-missing-resources-root", vi = ra({
    render: () => gn(SD)
  }), vi.mount(Wo), document.body.appendChild(Wo), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Bt = null;
function sn() {
  if (!Bt) return;
  const e = Bt.querySelector(".commit-indicator");
  e && (e.style.display = ND() ? "block" : "none");
}
function Ka() {
  if (!Bt) return;
  const e = mn !== "managed";
  Bt.disabled = e, Bt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const rc = document.createElement("style");
rc.textContent = `
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
document.head.appendChild(rc);
es.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => Tn()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        Bt && !Bt.disabled && pi(Bt);
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
  async beforeConfigureGraph(e, s) {
    if (mn === "managed")
      try {
        await Promise.all([
          es.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          es.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
        ]);
      } catch (o) {
        console.warn("[ComfyGit] Failed to disable built-in warnings:", o);
      }
    window.__comfygit_pending_workflow = e;
  },
  async afterConfigureGraph(e) {
    if (mn !== "managed") return;
    const s = window.__comfygit_pending_workflow;
    s && (delete window.__comfygit_pending_workflow, window.dispatchEvent(new CustomEvent("comfygit:workflow-loaded", {
      detail: { workflow: s }
    })));
  },
  async setup() {
    var l, r;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const s = document.createElement("button");
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = Tn, Bt = document.createElement("button"), Bt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Bt.innerHTML = 'Commit <span class="commit-indicator"></span>', Bt.title = "Quick Commit", Bt.onclick = () => pi(Bt), e.appendChild(s), e.appendChild(Bt), (r = (l = es.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (es.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), AD(), OD(), window.addEventListener("comfygit:open-panel", ((c) => {
      var m;
      const u = (m = c.detail) == null ? void 0 : m.initialView;
      Tn(u);
    }));
    const { loadPendingDownloads: o } = Do();
    o(), await Promise.all([Un(), ja()]), sn(), Ka(), Ha(), setTimeout(Ha, 100), setInterval(async () => {
      await Promise.all([Un(), ja()]), sn(), Ka();
    }, 3e4);
    const a = es.api;
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
        const _ = document.createElement("span");
        _.textContent = "Workflows updated - refresh required", p.appendChild(_);
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
        const w = document.createElement("button");
        w.textContent = "×", w.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, w.onmouseover = () => w.style.opacity = "1", w.onmouseout = () => w.style.opacity = "0.6", w.onclick = () => p.remove(), p.appendChild(w), document.body.appendChild(p), console.log("[ComfyGit] Refresh notification displayed");
      }, m = function(p) {
        const _ = document.getElementById("comfygit-error-toast");
        _ && _.remove();
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
        const w = document.createElement("span");
        w.textContent = "⚠️", w.style.fontSize = "20px", g.appendChild(w);
        const C = document.createElement("div");
        C.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const $ = document.createElement("div");
        $.textContent = "Node installation failed", $.style.cssText = "font-weight: 600; color: #e53935;", C.appendChild($);
        const x = document.createElement("div");
        x.textContent = "Dependency conflict detected", x.style.cssText = "font-size: 12px; opacity: 0.8;", C.appendChild(x), g.appendChild(C);
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
          g.remove(), Tn("debug-env");
        }, g.appendChild(O);
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
        `, T.onmouseover = () => T.style.opacity = "1", T.onmouseout = () => T.style.opacity = "0.6", T.onclick = () => g.remove(), g.appendChild(T), document.body.appendChild(g), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && g.remove();
        }, 1e4);
      }, f = function(p) {
        const _ = document.getElementById("comfygit-restart-toast");
        _ && _.remove();
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
        const w = document.createElement("span");
        w.textContent = "✅", w.style.fontSize = "20px", g.appendChild(w);
        const C = document.createElement("div");
        C.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const $ = document.createElement("div");
        $.textContent = "To apply changes, please restart ComfyUI", $.style.cssText = "font-weight: 500; color: #fff;", C.appendChild($);
        const x = document.createElement("div");
        x.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, x.style.cssText = "font-size: 12px; opacity: 0.7;", C.appendChild(x), g.appendChild(C);
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
          O.disabled = !0, O.textContent = "Restarting...", O.style.opacity = "0.7", $.textContent = "Restarting...", x.textContent = "Applying changes, please wait...";
          try {
            const P = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                es.refreshComboInNodes && (await es.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), w.textContent = "✅", $.textContent = "Nodes Installed", $.style.color = "#4caf50", x.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, g.style.borderColor = "#4caf50", O.style.display = "none", setTimeout(() => {
                  g.remove();
                }, 3e3);
              } catch (R) {
                console.error("[ComfyGit] Failed to refresh nodes:", R), w.textContent = "✅", $.textContent = "Restart Complete", $.style.color = "#4caf50", x.textContent = "Refresh the page to load new nodes.", g.style.borderColor = "#4caf50", O.style.display = "none";
              }
            };
            a.addEventListener("reconnected", P, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (P) {
            console.error("[ComfyGit] Failed to restart:", P), $.textContent = "Restart Failed", $.style.color = "#e53935", x.textContent = "Could not restart server. Try again.", g.style.borderColor = "#e53935", O.textContent = "Try Again", O.disabled = !1, O.style.opacity = "1";
          }
        }, g.appendChild(O);
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
        `, T.onmouseover = () => T.style.opacity = "1", T.onmouseout = () => T.style.opacity = "0.6", T.onclick = () => g.remove(), g.appendChild(T), document.body.appendChild(g), console.log(`[ComfyGit] Restart required notification displayed (${p} packages installed)`);
      };
      a.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: _, workflow_name: g } = p.detail;
        console.log(`[ComfyGit] Workflow ${_}: ${g}`), await Un(), sn();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      a.addEventListener("status", async (p) => {
        const _ = p.detail != null;
        _ && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), v = _;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (p) => {
        const _ = DD(p.detail);
        _ && m(_);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const _ = p, { count: g = 1 } = _.detail || {};
        f(g);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
