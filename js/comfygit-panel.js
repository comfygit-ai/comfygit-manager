var Fc = Object.defineProperty;
var Vc = (e, t, o) => t in e ? Fc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var Rn = (e, t, o) => Vc(e, typeof t != "symbol" ? t + "" : t, o);
import { app as Ss } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function rl(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) t[o] = 1;
  return (o) => o in t;
}
const wt = {}, Io = [], Ms = () => {
}, Bi = () => !1, ia = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), cl = (e) => e.startsWith("onUpdate:"), Lt = Object.assign, ul = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, Bc = Object.prototype.hasOwnProperty, ft = (e, t) => Bc.call(e, t), Ze = Array.isArray, Eo = (e) => Cn(e) === "[object Map]", Ao = (e) => Cn(e) === "[object Set]", Fl = (e) => Cn(e) === "[object Date]", tt = (e) => typeof e == "function", St = (e) => typeof e == "string", hs = (e) => typeof e == "symbol", ht = (e) => e !== null && typeof e == "object", Wi = (e) => (ht(e) || tt(e)) && tt(e.then) && tt(e.catch), Gi = Object.prototype.toString, Cn = (e) => Gi.call(e), Wc = (e) => Cn(e).slice(8, -1), ji = (e) => Cn(e) === "[object Object]", dl = (e) => St(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, an = /* @__PURE__ */ rl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ra = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((o) => t[o] || (t[o] = e(o)));
}, Gc = /-\w/g, ms = ra(
  (e) => e.replace(Gc, (t) => t.slice(1).toUpperCase())
), jc = /\B([A-Z])/g, oo = ra(
  (e) => e.replace(jc, "-$1").toLowerCase()
), ca = ra((e) => e.charAt(0).toUpperCase() + e.slice(1)), Pa = ra(
  (e) => e ? `on${ca(e)}` : ""
), Zs = (e, t) => !Object.is(e, t), Fn = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, Hi = (e, t, o, a = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: o
  });
}, ua = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Hc = (e) => {
  const t = St(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Vl;
const da = () => Vl || (Vl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Nt(e) {
  if (Ze(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = St(a) ? Qc(a) : Nt(a);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if (St(e) || ht(e))
    return e;
}
const qc = /;(?![^(]*\))/g, Kc = /:([^]+)/, Jc = /\/\*[^]*?\*\//g;
function Qc(e) {
  const t = {};
  return e.replace(Jc, "").split(qc).forEach((o) => {
    if (o) {
      const a = o.split(Kc);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function Be(e) {
  let t = "";
  if (St(e))
    t = e;
  else if (Ze(e))
    for (let o = 0; o < e.length; o++) {
      const a = Be(e[o]);
      a && (t += a + " ");
    }
  else if (ht(e))
    for (const o in e)
      e[o] && (t += o + " ");
  return t.trim();
}
const Yc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xc = /* @__PURE__ */ rl(Yc);
function qi(e) {
  return !!e || e === "";
}
function Zc(e, t) {
  if (e.length !== t.length) return !1;
  let o = !0;
  for (let a = 0; o && a < e.length; a++)
    o = vo(e[a], t[a]);
  return o;
}
function vo(e, t) {
  if (e === t) return !0;
  let o = Fl(e), a = Fl(t);
  if (o || a)
    return o && a ? e.getTime() === t.getTime() : !1;
  if (o = hs(e), a = hs(t), o || a)
    return e === t;
  if (o = Ze(e), a = Ze(t), o || a)
    return o && a ? Zc(e, t) : !1;
  if (o = ht(e), a = ht(t), o || a) {
    if (!o || !a)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(t).length;
    if (l !== r)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (u && !d || !u && d || !vo(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ml(e, t) {
  return e.findIndex((o) => vo(o, t));
}
const Ki = (e) => !!(e && e.__v_isRef === !0), m = (e) => St(e) ? e : e == null ? "" : Ze(e) || ht(e) && (e.toString === Gi || !tt(e.toString)) ? Ki(e) ? m(e.value) : JSON.stringify(e, Ji, 2) : String(e), Ji = (e, t) => Ki(t) ? Ji(e, t.value) : Eo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [a, l], r) => (o[Ra(a, r) + " =>"] = l, o),
    {}
  )
} : Ao(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => Ra(o))
} : hs(t) ? Ra(t) : ht(t) && !Ze(t) && !ji(t) ? String(t) : t, Ra = (e, t = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    hs(e) ? `Symbol(${(o = e.description) != null ? o : t})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ts;
class eu {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ts, !t && ts && (this.index = (ts.scopes || (ts.scopes = [])).push(
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
      const o = ts;
      try {
        return ts = this, t();
      } finally {
        ts = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ts, ts = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ts = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
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
      if (!this.detached && this.parent && !t) {
        const l = this.parent.scopes.pop();
        l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function tu() {
  return ts;
}
let _t;
const La = /* @__PURE__ */ new WeakSet();
class Qi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ts && ts.active && ts.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Xi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Bl(this), Zi(this);
    const t = _t, o = ps;
    _t = this, ps = !0;
    try {
      return this.fn();
    } finally {
      er(this), _t = t, ps = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        pl(t);
      this.deps = this.depsTail = void 0, Bl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? La.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ja(this) && this.run();
  }
  get dirty() {
    return ja(this);
  }
}
let Yi = 0, ln, rn;
function Xi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = rn, rn = e;
    return;
  }
  e.next = ln, ln = e;
}
function fl() {
  Yi++;
}
function vl() {
  if (--Yi > 0)
    return;
  if (rn) {
    let t = rn;
    for (rn = void 0; t; ) {
      const o = t.next;
      t.next = void 0, t.flags &= -9, t = o;
    }
  }
  let e;
  for (; ln; ) {
    let t = ln;
    for (ln = void 0; t; ) {
      const o = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (a) {
          e || (e = a);
        }
      t = o;
    }
  }
  if (e) throw e;
}
function Zi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function er(e) {
  let t, o = e.depsTail, a = o;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === o && (o = l), pl(a), su(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = t, e.depsTail = o;
}
function ja(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (tr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function tr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === gn) || (e.globalVersion = gn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ja(e))))
    return;
  e.flags |= 2;
  const t = e.dep, o = _t, a = ps;
  _t = e, ps = !0;
  try {
    Zi(e);
    const l = e.fn(e._value);
    (t.version === 0 || Zs(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    _t = o, ps = a, er(e), e.flags &= -3;
  }
}
function pl(e, t = !1) {
  const { dep: o, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), o.subs === e && (o.subs = a, !a && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      pl(r, !0);
  }
  !t && !--o.sc && o.map && o.map.delete(o.key);
}
function su(e) {
  const { prevDep: t, nextDep: o } = e;
  t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
}
let ps = !0;
const sr = [];
function Vs() {
  sr.push(ps), ps = !1;
}
function Bs() {
  const e = sr.pop();
  ps = e === void 0 ? !0 : e;
}
function Bl(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const o = _t;
    _t = void 0;
    try {
      t();
    } finally {
      _t = o;
    }
  }
}
let gn = 0;
class ou {
  constructor(t, o) {
    this.sub = t, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class gl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!_t || !ps || _t === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== _t)
      o = this.activeLink = new ou(_t, this), _t.deps ? (o.prevDep = _t.depsTail, _t.depsTail.nextDep = o, _t.depsTail = o) : _t.deps = _t.depsTail = o, or(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = _t.depsTail, o.nextDep = void 0, _t.depsTail.nextDep = o, _t.depsTail = o, _t.deps === o && (_t.deps = a);
    }
    return o;
  }
  trigger(t) {
    this.version++, gn++, this.notify(t);
  }
  notify(t) {
    fl();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      vl();
    }
  }
}
function or(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep)
        or(a);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Ha = /* @__PURE__ */ new WeakMap(), uo = Symbol(
  ""
), qa = Symbol(
  ""
), hn = Symbol(
  ""
);
function Wt(e, t, o) {
  if (ps && _t) {
    let a = Ha.get(e);
    a || Ha.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(o);
    l || (a.set(o, l = new gl()), l.map = a, l.key = o), l.track();
  }
}
function As(e, t, o, a, l, r) {
  const c = Ha.get(e);
  if (!c) {
    gn++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (fl(), t === "clear")
    c.forEach(u);
  else {
    const d = Ze(e), v = d && dl(o);
    if (d && o === "length") {
      const f = Number(a);
      c.forEach((p, w) => {
        (w === "length" || w === hn || !hs(w) && w >= f) && u(p);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), v && u(c.get(hn)), t) {
        case "add":
          d ? v && u(c.get("length")) : (u(c.get(uo)), Eo(e) && u(c.get(qa)));
          break;
        case "delete":
          d || (u(c.get(uo)), Eo(e) && u(c.get(qa)));
          break;
        case "set":
          Eo(e) && u(c.get(uo));
          break;
      }
  }
  vl();
}
function _o(e) {
  const t = ut(e);
  return t === e ? t : (Wt(t, "iterate", hn), us(e) ? t : t.map(ys));
}
function ma(e) {
  return Wt(e = ut(e), "iterate", hn), e;
}
function Qs(e, t) {
  return Ws(e) ? mo(e) ? No(ys(t)) : No(t) : ys(t);
}
const nu = {
  __proto__: null,
  [Symbol.iterator]() {
    return Da(this, Symbol.iterator, (e) => Qs(this, e));
  },
  concat(...e) {
    return _o(this).concat(
      ...e.map((t) => Ze(t) ? _o(t) : t)
    );
  },
  entries() {
    return Da(this, "entries", (e) => (e[1] = Qs(this, e[1]), e));
  },
  every(e, t) {
    return Ns(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ns(
      this,
      "filter",
      e,
      t,
      (o) => o.map((a) => Qs(this, a)),
      arguments
    );
  },
  find(e, t) {
    return Ns(
      this,
      "find",
      e,
      t,
      (o) => Qs(this, o),
      arguments
    );
  },
  findIndex(e, t) {
    return Ns(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ns(
      this,
      "findLast",
      e,
      t,
      (o) => Qs(this, o),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ns(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ns(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Na(this, "includes", e);
  },
  indexOf(...e) {
    return Na(this, "indexOf", e);
  },
  join(e) {
    return _o(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Na(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ns(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return qo(this, "pop");
  },
  push(...e) {
    return qo(this, "push", e);
  },
  reduce(e, ...t) {
    return Wl(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Wl(this, "reduceRight", e, t);
  },
  shift() {
    return qo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ns(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return qo(this, "splice", e);
  },
  toReversed() {
    return _o(this).toReversed();
  },
  toSorted(e) {
    return _o(this).toSorted(e);
  },
  toSpliced(...e) {
    return _o(this).toSpliced(...e);
  },
  unshift(...e) {
    return qo(this, "unshift", e);
  },
  values() {
    return Da(this, "values", (e) => Qs(this, e));
  }
};
function Da(e, t, o) {
  const a = ma(e), l = a[t]();
  return a !== e && !us(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const au = Array.prototype;
function Ns(e, t, o, a, l, r) {
  const c = ma(e), u = c !== e && !us(e), d = c[t];
  if (d !== au[t]) {
    const p = d.apply(e, r);
    return u ? ys(p) : p;
  }
  let v = o;
  c !== e && (u ? v = function(p, w) {
    return o.call(this, Qs(e, p), w, e);
  } : o.length > 2 && (v = function(p, w) {
    return o.call(this, p, w, e);
  }));
  const f = d.call(c, v, a);
  return u && l ? l(f) : f;
}
function Wl(e, t, o, a) {
  const l = ma(e);
  let r = o;
  return l !== e && (us(e) ? o.length > 3 && (r = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return o.call(this, c, Qs(e, u), d, e);
  }), l[t](r, ...a);
}
function Na(e, t, o) {
  const a = ut(e);
  Wt(a, "iterate", hn);
  const l = a[t](...o);
  return (l === -1 || l === !1) && wl(o[0]) ? (o[0] = ut(o[0]), a[t](...o)) : l;
}
function qo(e, t, o = []) {
  Vs(), fl();
  const a = ut(e)[t].apply(e, o);
  return vl(), Bs(), a;
}
const lu = /* @__PURE__ */ rl("__proto__,__v_isRef,__isVue"), nr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(hs)
);
function iu(e) {
  hs(e) || (e = String(e));
  const t = ut(this);
  return Wt(t, "has", e), t.hasOwnProperty(e);
}
class ar {
  constructor(t = !1, o = !1) {
    this._isReadonly = t, this._isShallow = o;
  }
  get(t, o, a) {
    if (o === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, r = this._isShallow;
    if (o === "__v_isReactive")
      return !l;
    if (o === "__v_isReadonly")
      return l;
    if (o === "__v_isShallow")
      return r;
    if (o === "__v_raw")
      return a === (l ? r ? hu : cr : r ? rr : ir).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const c = Ze(t);
    if (!l) {
      let d;
      if (c && (d = nu[o]))
        return d;
      if (o === "hasOwnProperty")
        return iu;
    }
    const u = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      qt(t) ? t : a
    );
    if ((hs(o) ? nr.has(o) : lu(o)) || (l || Wt(t, "get", o), r))
      return u;
    if (qt(u)) {
      const d = c && dl(o) ? u : u.value;
      return l && ht(d) ? Jn(d) : d;
    }
    return ht(u) ? l ? Jn(u) : ho(u) : u;
  }
}
class lr extends ar {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, a, l) {
    let r = t[o];
    const c = Ze(t) && dl(o);
    if (!this._isShallow) {
      const v = Ws(r);
      if (!us(a) && !Ws(a) && (r = ut(r), a = ut(a)), !c && qt(r) && !qt(a))
        return v || (r.value = a), !0;
    }
    const u = c ? Number(o) < t.length : ft(t, o), d = Reflect.set(
      t,
      o,
      a,
      qt(t) ? t : l
    );
    return t === ut(l) && (u ? Zs(a, r) && As(t, "set", o, a) : As(t, "add", o, a)), d;
  }
  deleteProperty(t, o) {
    const a = ft(t, o);
    t[o];
    const l = Reflect.deleteProperty(t, o);
    return l && a && As(t, "delete", o, void 0), l;
  }
  has(t, o) {
    const a = Reflect.has(t, o);
    return (!hs(o) || !nr.has(o)) && Wt(t, "has", o), a;
  }
  ownKeys(t) {
    return Wt(
      t,
      "iterate",
      Ze(t) ? "length" : uo
    ), Reflect.ownKeys(t);
  }
}
class ru extends ar {
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
const cu = /* @__PURE__ */ new lr(), uu = /* @__PURE__ */ new ru(), du = /* @__PURE__ */ new lr(!0);
const Ka = (e) => e, Ln = (e) => Reflect.getPrototypeOf(e);
function mu(e, t, o) {
  return function(...a) {
    const l = this.__v_raw, r = ut(l), c = Eo(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, v = l[e](...a), f = o ? Ka : t ? No : ys;
    return !t && Wt(
      r,
      "iterate",
      d ? qa : uo
    ), {
      // iterator protocol
      next() {
        const { value: p, done: w } = v.next();
        return w ? { value: p, done: w } : {
          value: u ? [f(p[0]), f(p[1])] : f(p),
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
function Dn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function fu(e, t) {
  const o = {
    get(l) {
      const r = this.__v_raw, c = ut(r), u = ut(l);
      e || (Zs(l, u) && Wt(c, "get", l), Wt(c, "get", u));
      const { has: d } = Ln(c), v = t ? Ka : e ? No : ys;
      if (d.call(c, l))
        return v(r.get(l));
      if (d.call(c, u))
        return v(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && Wt(ut(l), "iterate", uo), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = ut(r), u = ut(l);
      return e || (Zs(l, u) && Wt(c, "has", l), Wt(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, d = ut(u), v = t ? Ka : e ? No : ys;
      return !e && Wt(d, "iterate", uo), u.forEach((f, p) => l.call(r, v(f), v(p), c));
    }
  };
  return Lt(
    o,
    e ? {
      add: Dn("add"),
      set: Dn("set"),
      delete: Dn("delete"),
      clear: Dn("clear")
    } : {
      add(l) {
        !t && !us(l) && !Ws(l) && (l = ut(l));
        const r = ut(this);
        return Ln(r).has.call(r, l) || (r.add(l), As(r, "add", l, l)), this;
      },
      set(l, r) {
        !t && !us(r) && !Ws(r) && (r = ut(r));
        const c = ut(this), { has: u, get: d } = Ln(c);
        let v = u.call(c, l);
        v || (l = ut(l), v = u.call(c, l));
        const f = d.call(c, l);
        return c.set(l, r), v ? Zs(r, f) && As(c, "set", l, r) : As(c, "add", l, r), this;
      },
      delete(l) {
        const r = ut(this), { has: c, get: u } = Ln(r);
        let d = c.call(r, l);
        d || (l = ut(l), d = c.call(r, l)), u && u.call(r, l);
        const v = r.delete(l);
        return d && As(r, "delete", l, void 0), v;
      },
      clear() {
        const l = ut(this), r = l.size !== 0, c = l.clear();
        return r && As(
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
    o[l] = mu(l, e, t);
  }), o;
}
function hl(e, t) {
  const o = fu(e, t);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    ft(o, l) && l in a ? o : a,
    l,
    r
  );
}
const vu = {
  get: /* @__PURE__ */ hl(!1, !1)
}, pu = {
  get: /* @__PURE__ */ hl(!1, !0)
}, gu = {
  get: /* @__PURE__ */ hl(!0, !1)
};
const ir = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap(), cr = /* @__PURE__ */ new WeakMap(), hu = /* @__PURE__ */ new WeakMap();
function yu(e) {
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
function wu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : yu(Wc(e));
}
function ho(e) {
  return Ws(e) ? e : yl(
    e,
    !1,
    cu,
    vu,
    ir
  );
}
function _u(e) {
  return yl(
    e,
    !1,
    du,
    pu,
    rr
  );
}
function Jn(e) {
  return yl(
    e,
    !0,
    uu,
    gu,
    cr
  );
}
function yl(e, t, o, a, l) {
  if (!ht(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = wu(e);
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
function mo(e) {
  return Ws(e) ? mo(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ws(e) {
  return !!(e && e.__v_isReadonly);
}
function us(e) {
  return !!(e && e.__v_isShallow);
}
function wl(e) {
  return e ? !!e.__v_raw : !1;
}
function ut(e) {
  const t = e && e.__v_raw;
  return t ? ut(t) : e;
}
function ku(e) {
  return !ft(e, "__v_skip") && Object.isExtensible(e) && Hi(e, "__v_skip", !0), e;
}
const ys = (e) => ht(e) ? ho(e) : e, No = (e) => ht(e) ? Jn(e) : e;
function qt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return bu(e, !1);
}
function bu(e, t) {
  return qt(e) ? e : new $u(e, t);
}
class $u {
  constructor(t, o) {
    this.dep = new gl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? t : ut(t), this._value = o ? t : ys(t), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const o = this._rawValue, a = this.__v_isShallow || us(t) || Ws(t);
    t = a ? t : ut(t), Zs(t, o) && (this._rawValue = t, this._value = a ? t : ys(t), this.dep.trigger());
  }
}
function st(e) {
  return qt(e) ? e.value : e;
}
const Cu = {
  get: (e, t, o) => t === "__v_raw" ? e : st(Reflect.get(e, t, o)),
  set: (e, t, o, a) => {
    const l = e[t];
    return qt(l) && !qt(o) ? (l.value = o, !0) : Reflect.set(e, t, o, a);
  }
};
function ur(e) {
  return mo(e) ? e : new Proxy(e, Cu);
}
class xu {
  constructor(t, o, a) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new gl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = gn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    _t !== this)
      return Xi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return tr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Su(e, t, o = !1) {
  let a, l;
  return tt(e) ? a = e : (a = e.get, l = e.set), new xu(a, l, o);
}
const Nn = {}, Qn = /* @__PURE__ */ new WeakMap();
let ro;
function Iu(e, t = !1, o = ro) {
  if (o) {
    let a = Qn.get(o);
    a || Qn.set(o, a = []), a.push(e);
  }
}
function Eu(e, t, o = wt) {
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = o, v = (M) => l ? M : us(M) || l === !1 || l === 0 ? zs(M, 1) : zs(M);
  let f, p, w, g, _ = !1, b = !1;
  if (qt(e) ? (p = () => e.value, _ = us(e)) : mo(e) ? (p = () => v(e), _ = !0) : Ze(e) ? (b = !0, _ = e.some((M) => mo(M) || us(M)), p = () => e.map((M) => {
    if (qt(M))
      return M.value;
    if (mo(M))
      return v(M);
    if (tt(M))
      return d ? d(M, 2) : M();
  })) : tt(e) ? t ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Vs();
      try {
        w();
      } finally {
        Bs();
      }
    }
    const M = ro;
    ro = f;
    try {
      return d ? d(e, 3, [g]) : e(g);
    } finally {
      ro = M;
    }
  } : p = Ms, t && l) {
    const M = p, N = l === !0 ? 1 / 0 : l;
    p = () => zs(M(), N);
  }
  const S = tu(), C = () => {
    f.stop(), S && S.active && ul(S.effects, f);
  };
  if (r && t) {
    const M = t;
    t = (...N) => {
      M(...N), C();
    };
  }
  let I = b ? new Array(e.length).fill(Nn) : Nn;
  const E = (M) => {
    if (!(!(f.flags & 1) || !f.dirty && !M))
      if (t) {
        const N = f.run();
        if (l || _ || (b ? N.some((F, V) => Zs(F, I[V])) : Zs(N, I))) {
          w && w();
          const F = ro;
          ro = f;
          try {
            const V = [
              N,
              // pass undefined as the old value when it's changed for the first time
              I === Nn ? void 0 : b && I[0] === Nn ? [] : I,
              g
            ];
            I = N, d ? d(t, 3, V) : (
              // @ts-expect-error
              t(...V)
            );
          } finally {
            ro = F;
          }
        }
      } else
        f.run();
  };
  return u && u(E), f = new Qi(p), f.scheduler = c ? () => c(E, !1) : E, g = (M) => Iu(M, !1, f), w = f.onStop = () => {
    const M = Qn.get(f);
    if (M) {
      if (d)
        d(M, 4);
      else
        for (const N of M) N();
      Qn.delete(f);
    }
  }, t ? a ? E(!0) : I = f.run() : c ? c(E.bind(null, !0), !0) : f.run(), C.pause = f.pause.bind(f), C.resume = f.resume.bind(f), C.stop = C, C;
}
function zs(e, t = 1 / 0, o) {
  if (t <= 0 || !ht(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= t))
    return e;
  if (o.set(e, t), t--, qt(e))
    zs(e.value, t, o);
  else if (Ze(e))
    for (let a = 0; a < e.length; a++)
      zs(e[a], t, o);
  else if (Ao(e) || Eo(e))
    e.forEach((a) => {
      zs(a, t, o);
    });
  else if (ji(e)) {
    for (const a in e)
      zs(e[a], t, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && zs(e[a], t, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function xn(e, t, o, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    fa(l, t, o);
  }
}
function ws(e, t, o, a) {
  if (tt(e)) {
    const l = xn(e, t, o, a);
    return l && Wi(l) && l.catch((r) => {
      fa(r, t, o);
    }), l;
  }
  if (Ze(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(ws(e[r], t, o, a));
    return l;
  }
}
function fa(e, t, o, a = !0) {
  const l = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = t && t.appContext.config || wt;
  if (t) {
    let u = t.parent;
    const d = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; u; ) {
      const f = u.ec;
      if (f) {
        for (let p = 0; p < f.length; p++)
          if (f[p](e, d, v) === !1)
            return;
      }
      u = u.parent;
    }
    if (r) {
      Vs(), xn(r, null, 10, [
        e,
        d,
        v
      ]), Bs();
      return;
    }
  }
  Tu(e, o, l, a, c);
}
function Tu(e, t, o, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Xt = [];
let xs = -1;
const To = [];
let Ys = null, $o = 0;
const dr = /* @__PURE__ */ Promise.resolve();
let Yn = null;
function At(e) {
  const t = Yn || dr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Mu(e) {
  let t = xs + 1, o = Xt.length;
  for (; t < o; ) {
    const a = t + o >>> 1, l = Xt[a], r = yn(l);
    r < e || r === e && l.flags & 2 ? t = a + 1 : o = a;
  }
  return t;
}
function _l(e) {
  if (!(e.flags & 1)) {
    const t = yn(e), o = Xt[Xt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= yn(o) ? Xt.push(e) : Xt.splice(Mu(t), 0, e), e.flags |= 1, mr();
  }
}
function mr() {
  Yn || (Yn = dr.then(vr));
}
function Pu(e) {
  Ze(e) ? To.push(...e) : Ys && e.id === -1 ? Ys.splice($o + 1, 0, e) : e.flags & 1 || (To.push(e), e.flags |= 1), mr();
}
function Gl(e, t, o = xs + 1) {
  for (; o < Xt.length; o++) {
    const a = Xt[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      Xt.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function fr(e) {
  if (To.length) {
    const t = [...new Set(To)].sort(
      (o, a) => yn(o) - yn(a)
    );
    if (To.length = 0, Ys) {
      Ys.push(...t);
      return;
    }
    for (Ys = t, $o = 0; $o < Ys.length; $o++) {
      const o = Ys[$o];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Ys = null, $o = 0;
  }
}
const yn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function vr(e) {
  try {
    for (xs = 0; xs < Xt.length; xs++) {
      const t = Xt[xs];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), xn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; xs < Xt.length; xs++) {
      const t = Xt[xs];
      t && (t.flags &= -2);
    }
    xs = -1, Xt.length = 0, fr(), Yn = null, (Xt.length || To.length) && vr();
  }
}
let zt = null, pr = null;
function Xn(e) {
  const t = zt;
  return zt = e, pr = e && e.type.__scopeId || null, t;
}
function h(e, t = zt, o) {
  if (!t || e._n)
    return e;
  const a = (...l) => {
    a._d && ta(-1);
    const r = Xn(t);
    let c;
    try {
      c = e(...l);
    } finally {
      Xn(r), a._d && ta(1);
    }
    return c;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function Rt(e, t) {
  if (zt === null)
    return e;
  const o = ya(zt), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [r, c, u, d = wt] = t[l];
    r && (tt(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && zs(c), a.push({
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
function no(e, t, o, a) {
  const l = e.dirs, r = t && t.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let d = u.dir[a];
    d && (Vs(), ws(d, o, 8, [
      e.el,
      u,
      e,
      t
    ]), Bs());
  }
}
const gr = Symbol("_vte"), hr = (e) => e.__isTeleport, cn = (e) => e && (e.disabled || e.disabled === ""), jl = (e) => e && (e.defer || e.defer === ""), Hl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ql = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ja = (e, t) => {
  const o = e && e.to;
  return St(o) ? t ? t(o) : null : o;
}, yr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, o, a, l, r, c, u, d, v) {
    const {
      mc: f,
      pc: p,
      pbc: w,
      o: { insert: g, querySelector: _, createText: b, createComment: S }
    } = v, C = cn(t.props);
    let { shapeFlag: I, children: E, dynamicChildren: M } = t;
    if (e == null) {
      const N = t.el = b(""), F = t.anchor = b("");
      g(N, o, a), g(F, o, a);
      const V = (q, ue) => {
        I & 16 && f(
          E,
          q,
          ue,
          l,
          r,
          c,
          u,
          d
        );
      }, D = () => {
        const q = t.target = Ja(t.props, _), ue = wr(q, t, b, g);
        q && (c !== "svg" && Hl(q) ? c = "svg" : c !== "mathml" && ql(q) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(q), C || (V(q, ue), Vn(t, !1)));
      };
      C && (V(o, F), Vn(t, !0)), jl(t.props) ? (t.el.__isMounted = !1, Qt(() => {
        D(), delete t.el.__isMounted;
      }, r)) : D();
    } else {
      if (jl(t.props) && e.el.__isMounted === !1) {
        Qt(() => {
          yr.process(
            e,
            t,
            o,
            a,
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
      const N = t.anchor = e.anchor, F = t.target = e.target, V = t.targetAnchor = e.targetAnchor, D = cn(e.props), q = D ? o : F, ue = D ? N : V;
      if (c === "svg" || Hl(F) ? c = "svg" : (c === "mathml" || ql(F)) && (c = "mathml"), M ? (w(
        e.dynamicChildren,
        M,
        q,
        l,
        r,
        c,
        u
      ), xl(e, t, !0)) : d || p(
        e,
        t,
        q,
        ue,
        l,
        r,
        c,
        u,
        !1
      ), C)
        D ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Un(
          t,
          o,
          N,
          v,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const ie = t.target = Ja(
          t.props,
          _
        );
        ie && Un(
          t,
          ie,
          null,
          v,
          0
        );
      } else D && Un(
        t,
        F,
        V,
        v,
        1
      );
      Vn(t, C);
    }
  },
  remove(e, t, o, { um: a, o: { remove: l } }, r) {
    const {
      shapeFlag: c,
      children: u,
      anchor: d,
      targetStart: v,
      targetAnchor: f,
      target: p,
      props: w
    } = e;
    if (p && (l(v), l(f)), r && l(d), c & 16) {
      const g = r || !cn(w);
      for (let _ = 0; _ < u.length; _++) {
        const b = u[_];
        a(
          b,
          t,
          o,
          g,
          !!b.dynamicChildren
        );
      }
    }
  },
  move: Un,
  hydrate: Ru
};
function Un(e, t, o, { o: { insert: a }, m: l }, r = 2) {
  r === 0 && a(e.targetAnchor, t, o);
  const { el: c, anchor: u, shapeFlag: d, children: v, props: f } = e, p = r === 2;
  if (p && a(c, t, o), (!p || cn(f)) && d & 16)
    for (let w = 0; w < v.length; w++)
      l(
        v[w],
        t,
        o,
        2
      );
  p && a(u, t, o);
}
function Ru(e, t, o, a, l, r, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: v, createText: f }
}, p) {
  function w(b, S, C, I) {
    S.anchor = p(
      c(b),
      S,
      u(b),
      o,
      a,
      l,
      r
    ), S.targetStart = C, S.targetAnchor = I;
  }
  const g = t.target = Ja(
    t.props,
    d
  ), _ = cn(t.props);
  if (g) {
    const b = g._lpa || g.firstChild;
    if (t.shapeFlag & 16)
      if (_)
        w(
          e,
          t,
          b,
          b && c(b)
        );
      else {
        t.anchor = c(e);
        let S = b;
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
        t.targetAnchor || wr(g, t, f, v), p(
          b && c(b),
          t,
          g,
          o,
          a,
          l,
          r
        );
      }
    Vn(t, _);
  } else _ && t.shapeFlag & 16 && w(e, t, e, c(e));
  return t.anchor && c(t.anchor);
}
const Zt = yr;
function Vn(e, t) {
  const o = e.ctx;
  if (o && o.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", o.uid), a = a.nextSibling;
    o.ut();
  }
}
function wr(e, t, o, a) {
  const l = t.targetStart = o(""), r = t.targetAnchor = o("");
  return l[gr] = r, e && (a(l, e), a(r, e)), r;
}
const Os = Symbol("_leaveCb"), On = Symbol("_enterCb");
function _r() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return lt(() => {
    e.isMounted = !0;
  }), Sn(() => {
    e.isUnmounting = !0;
  }), e;
}
const rs = [Function, Array], kr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: rs,
  onEnter: rs,
  onAfterEnter: rs,
  onEnterCancelled: rs,
  // leave
  onBeforeLeave: rs,
  onLeave: rs,
  onAfterLeave: rs,
  onLeaveCancelled: rs,
  // appear
  onBeforeAppear: rs,
  onAppear: rs,
  onAfterAppear: rs,
  onAppearCancelled: rs
}, br = (e) => {
  const t = e.subTree;
  return t.component ? br(t.component) : t;
}, Lu = {
  name: "BaseTransition",
  props: kr,
  setup(e, { slots: t }) {
    const o = Il(), a = _r();
    return () => {
      const l = t.default && kl(t.default(), !0);
      if (!l || !l.length)
        return;
      const r = $r(l), c = ut(e), { mode: u } = c;
      if (a.isLeaving)
        return Ua(r);
      const d = Kl(r);
      if (!d)
        return Ua(r);
      let v = wn(
        d,
        c,
        a,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (p) => v = p
      );
      d.type !== jt && po(d, v);
      let f = o.subTree && Kl(o.subTree);
      if (f && f.type !== jt && !co(f, d) && br(o).type !== jt) {
        let p = wn(
          f,
          c,
          a,
          o
        );
        if (po(f, p), u === "out-in" && d.type !== jt)
          return a.isLeaving = !0, p.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, f = void 0;
          }, Ua(r);
        u === "in-out" && d.type !== jt ? p.delayLeave = (w, g, _) => {
          const b = Cr(
            a,
            f
          );
          b[String(f.key)] = f, w[Os] = () => {
            g(), w[Os] = void 0, delete v.delayedLeave, f = void 0;
          }, v.delayedLeave = () => {
            _(), delete v.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return r;
    };
  }
};
function $r(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== jt) {
        t = o;
        break;
      }
  }
  return t;
}
const Du = Lu;
function Cr(e, t) {
  const { leavingVNodes: o } = e;
  let a = o.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), o.set(t.type, a)), a;
}
function wn(e, t, o, a, l) {
  const {
    appear: r,
    mode: c,
    persisted: u = !1,
    onBeforeEnter: d,
    onEnter: v,
    onAfterEnter: f,
    onEnterCancelled: p,
    onBeforeLeave: w,
    onLeave: g,
    onAfterLeave: _,
    onLeaveCancelled: b,
    onBeforeAppear: S,
    onAppear: C,
    onAfterAppear: I,
    onAppearCancelled: E
  } = t, M = String(e.key), N = Cr(o, e), F = (q, ue) => {
    q && ws(
      q,
      a,
      9,
      ue
    );
  }, V = (q, ue) => {
    const ie = ue[1];
    F(q, ue), Ze(q) ? q.every((Y) => Y.length <= 1) && ie() : q.length <= 1 && ie();
  }, D = {
    mode: c,
    persisted: u,
    beforeEnter(q) {
      let ue = d;
      if (!o.isMounted)
        if (r)
          ue = S || d;
        else
          return;
      q[Os] && q[Os](
        !0
        /* cancelled */
      );
      const ie = N[M];
      ie && co(e, ie) && ie.el[Os] && ie.el[Os](), F(ue, [q]);
    },
    enter(q) {
      let ue = v, ie = f, Y = p;
      if (!o.isMounted)
        if (r)
          ue = C || v, ie = I || f, Y = E || p;
        else
          return;
      let me = !1;
      const oe = q[On] = (B) => {
        me || (me = !0, B ? F(Y, [q]) : F(ie, [q]), D.delayedLeave && D.delayedLeave(), q[On] = void 0);
      };
      ue ? V(ue, [q, oe]) : oe();
    },
    leave(q, ue) {
      const ie = String(e.key);
      if (q[On] && q[On](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return ue();
      F(w, [q]);
      let Y = !1;
      const me = q[Os] = (oe) => {
        Y || (Y = !0, ue(), oe ? F(b, [q]) : F(_, [q]), q[Os] = void 0, N[ie] === e && delete N[ie]);
      };
      N[ie] = e, g ? V(g, [q, me]) : me();
    },
    clone(q) {
      const ue = wn(
        q,
        t,
        o,
        a,
        l
      );
      return l && l(ue), ue;
    }
  };
  return D;
}
function Ua(e) {
  if (va(e))
    return e = to(e), e.children = null, e;
}
function Kl(e) {
  if (!va(e))
    return hr(e.type) && e.children ? $r(e.children) : e;
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
function po(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, po(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function kl(e, t = !1, o) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : r);
    c.type === W ? (c.patchFlag & 128 && l++, a = a.concat(
      kl(c.children, t, u)
    )) : (t || c.type !== jt) && a.push(u != null ? to(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function xe(e, t) {
  return tt(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Lt({ name: e.name }, t, { setup: e })
  ) : e;
}
function xr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Zn = /* @__PURE__ */ new WeakMap();
function un(e, t, o, a, l = !1) {
  if (Ze(e)) {
    e.forEach(
      (_, b) => un(
        _,
        t && (Ze(t) ? t[b] : t),
        o,
        a,
        l
      )
    );
    return;
  }
  if (Mo(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && un(e, t, o, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? ya(a.component) : a.el, c = l ? null : r, { i: u, r: d } = e, v = t && t.r, f = u.refs === wt ? u.refs = {} : u.refs, p = u.setupState, w = ut(p), g = p === wt ? Bi : (_) => ft(w, _);
  if (v != null && v !== d) {
    if (Jl(t), St(v))
      f[v] = null, g(v) && (p[v] = null);
    else if (qt(v)) {
      v.value = null;
      const _ = t;
      _.k && (f[_.k] = null);
    }
  }
  if (tt(d))
    xn(d, u, 12, [c, f]);
  else {
    const _ = St(d), b = qt(d);
    if (_ || b) {
      const S = () => {
        if (e.f) {
          const C = _ ? g(d) ? p[d] : f[d] : d.value;
          if (l)
            Ze(C) && ul(C, r);
          else if (Ze(C))
            C.includes(r) || C.push(r);
          else if (_)
            f[d] = [r], g(d) && (p[d] = f[d]);
          else {
            const I = [r];
            d.value = I, e.k && (f[e.k] = I);
          }
        } else _ ? (f[d] = c, g(d) && (p[d] = c)) : b && (d.value = c, e.k && (f[e.k] = c));
      };
      if (c) {
        const C = () => {
          S(), Zn.delete(e);
        };
        C.id = -1, Zn.set(e, C), Qt(C, o);
      } else
        Jl(e), S();
    }
  }
}
function Jl(e) {
  const t = Zn.get(e);
  t && (t.flags |= 8, Zn.delete(e));
}
da().requestIdleCallback;
da().cancelIdleCallback;
const Mo = (e) => !!e.type.__asyncLoader, va = (e) => e.type.__isKeepAlive;
function Nu(e, t) {
  Sr(e, "a", t);
}
function Uu(e, t) {
  Sr(e, "da", t);
}
function Sr(e, t, o = Ht) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (pa(t, a, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      va(l.parent.vnode) && Ou(a, t, o, l), l = l.parent;
  }
}
function Ou(e, t, o, a) {
  const l = pa(
    t,
    e,
    a,
    !0
    /* prepend */
  );
  zo(() => {
    ul(a[t], l);
  }, o);
}
function pa(e, t, o = Ht, a = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = t.__weh || (t.__weh = (...c) => {
      Vs();
      const u = In(o), d = ws(t, o, e, c);
      return u(), Bs(), d;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const Gs = (e) => (t, o = Ht) => {
  (!bn || e === "sp") && pa(e, (...a) => t(...a), o);
}, Au = Gs("bm"), lt = Gs("m"), zu = Gs(
  "bu"
), Ir = Gs("u"), Sn = Gs(
  "bum"
), zo = Gs("um"), Fu = Gs(
  "sp"
), Vu = Gs("rtg"), Bu = Gs("rtc");
function Wu(e, t = Ht) {
  pa("ec", e, t);
}
const Gu = "components", Er = Symbol.for("v-ndc");
function bl(e) {
  return St(e) ? ju(Gu, e, !1) || e : e || Er;
}
function ju(e, t, o = !0, a = !1) {
  const l = zt || Ht;
  if (l) {
    const r = l.type;
    {
      const u = Ld(
        r,
        !1
      );
      if (u && (u === t || u === ms(t) || u === ca(ms(t))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ql(l[e] || r[e], t) || // global registration
      Ql(l.appContext[e], t)
    );
    return !c && a ? r : c;
  }
}
function Ql(e, t) {
  return e && (e[t] || e[ms(t)] || e[ca(ms(t))]);
}
function ye(e, t, o, a) {
  let l;
  const r = o, c = Ze(e);
  if (c || St(e)) {
    const u = c && mo(e);
    let d = !1, v = !1;
    u && (d = !us(e), v = Ws(e), e = ma(e)), l = new Array(e.length);
    for (let f = 0, p = e.length; f < p; f++)
      l[f] = t(
        d ? v ? No(ys(e[f])) : ys(e[f]) : e[f],
        f,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = t(u + 1, u, void 0, r);
  } else if (ht(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (u, d) => t(u, d, void 0, r)
      );
    else {
      const u = Object.keys(e);
      l = new Array(u.length);
      for (let d = 0, v = u.length; d < v; d++) {
        const f = u[d];
        l[d] = t(e[f], f, d, r);
      }
    }
  else
    l = [];
  return l;
}
function ss(e, t) {
  for (let o = 0; o < t.length; o++) {
    const a = t[o];
    if (Ze(a))
      for (let l = 0; l < a.length; l++)
        e[a[l].name] = a[l].fn;
    else a && (e[a.name] = a.key ? (...l) => {
      const r = a.fn(...l);
      return r && (r.key = a.key), r;
    } : a.fn);
  }
  return e;
}
function at(e, t, o = {}, a, l) {
  if (zt.ce || zt.parent && Mo(zt.parent) && zt.parent.ce) {
    const v = Object.keys(o).length > 0;
    return t !== "default" && (o.name = t), n(), L(
      W,
      null,
      [$("slot", o, a && a())],
      v ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), n();
  const c = r && Tr(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = L(
    W,
    {
      key: (u && !hs(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!c && a ? "_fb" : "")
    },
    c || (a ? a() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function Tr(e) {
  return e.some((t) => kn(t) ? !(t.type === jt || t.type === W && !Tr(t.children)) : !0) ? e : null;
}
const Qa = (e) => e ? Kr(e) ? ya(e) : Qa(e.parent) : null, dn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Lt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Qa(e.parent),
    $root: (e) => Qa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Pr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      _l(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = At.bind(e.proxy)),
    $watch: (e) => od.bind(e)
  })
), Oa = (e, t) => e !== wt && !e.__isScriptSetup && ft(e, t), Hu = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: o, setupState: a, data: l, props: r, accessCache: c, type: u, appContext: d } = e;
    if (t[0] !== "$") {
      const w = c[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return a[t];
          case 2:
            return l[t];
          case 4:
            return o[t];
          case 3:
            return r[t];
        }
      else {
        if (Oa(a, t))
          return c[t] = 1, a[t];
        if (l !== wt && ft(l, t))
          return c[t] = 2, l[t];
        if (ft(r, t))
          return c[t] = 3, r[t];
        if (o !== wt && ft(o, t))
          return c[t] = 4, o[t];
        Ya && (c[t] = 0);
      }
    }
    const v = dn[t];
    let f, p;
    if (v)
      return t === "$attrs" && Wt(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (f = u.__cssModules) && (f = f[t])
    )
      return f;
    if (o !== wt && ft(o, t))
      return c[t] = 4, o[t];
    if (
      // global properties
      p = d.config.globalProperties, ft(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return Oa(l, t) ? (l[t] = o, !0) : a !== wt && ft(a, t) ? (a[t] = o, !0) : ft(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: a, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(o[u] || e !== wt && u[0] !== "$" && ft(e, u) || Oa(t, u) || ft(r, u) || ft(a, u) || ft(dn, u) || ft(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, t, o) {
    return o.get != null ? e._.accessCache[t] = 0 : ft(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
  }
};
function Yl(e) {
  return Ze(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
let Ya = !0;
function qu(e) {
  const t = Pr(e), o = e.proxy, a = e.ctx;
  Ya = !1, t.beforeCreate && Xl(t.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: r,
    methods: c,
    watch: u,
    provide: d,
    inject: v,
    // lifecycle
    created: f,
    beforeMount: p,
    mounted: w,
    beforeUpdate: g,
    updated: _,
    activated: b,
    deactivated: S,
    beforeDestroy: C,
    beforeUnmount: I,
    destroyed: E,
    unmounted: M,
    render: N,
    renderTracked: F,
    renderTriggered: V,
    errorCaptured: D,
    serverPrefetch: q,
    // public API
    expose: ue,
    inheritAttrs: ie,
    // assets
    components: Y,
    directives: me,
    filters: oe
  } = t;
  if (v && Ku(v, a, null), c)
    for (const we in c) {
      const se = c[we];
      tt(se) && (a[we] = se.bind(o));
    }
  if (l) {
    const we = l.call(o, o);
    ht(we) && (e.data = ho(we));
  }
  if (Ya = !0, r)
    for (const we in r) {
      const se = r[we], de = tt(se) ? se.bind(o, o) : tt(se.get) ? se.get.bind(o, o) : Ms, ce = !tt(se) && tt(se.set) ? se.set.bind(o) : Ms, K = R({
        get: de,
        set: ce
      });
      Object.defineProperty(a, we, {
        enumerable: !0,
        configurable: !0,
        get: () => K.value,
        set: (ee) => K.value = ee
      });
    }
  if (u)
    for (const we in u)
      Mr(u[we], a, o, we);
  if (d) {
    const we = tt(d) ? d.call(o) : d;
    Reflect.ownKeys(we).forEach((se) => {
      ed(se, we[se]);
    });
  }
  f && Xl(f, e, "c");
  function H(we, se) {
    Ze(se) ? se.forEach((de) => we(de.bind(o))) : se && we(se.bind(o));
  }
  if (H(Au, p), H(lt, w), H(zu, g), H(Ir, _), H(Nu, b), H(Uu, S), H(Wu, D), H(Bu, F), H(Vu, V), H(Sn, I), H(zo, M), H(Fu, q), Ze(ue))
    if (ue.length) {
      const we = e.exposed || (e.exposed = {});
      ue.forEach((se) => {
        Object.defineProperty(we, se, {
          get: () => o[se],
          set: (de) => o[se] = de,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  N && e.render === Ms && (e.render = N), ie != null && (e.inheritAttrs = ie), Y && (e.components = Y), me && (e.directives = me), q && xr(e);
}
function Ku(e, t, o = Ms) {
  Ze(e) && (e = Xa(e));
  for (const a in e) {
    const l = e[a];
    let r;
    ht(l) ? "default" in l ? r = Bn(
      l.from || a,
      l.default,
      !0
    ) : r = Bn(l.from || a) : r = Bn(l), qt(r) ? Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : t[a] = r;
  }
}
function Xl(e, t, o) {
  ws(
    Ze(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function Mr(e, t, o, a) {
  let l = a.includes(".") ? Dr(o, a) : () => o[a];
  if (St(e)) {
    const r = t[e];
    tt(r) && gt(l, r);
  } else if (tt(e))
    gt(l, e.bind(o));
  else if (ht(e))
    if (Ze(e))
      e.forEach((r) => Mr(r, t, o, a));
    else {
      const r = tt(e.handler) ? e.handler.bind(o) : t[e.handler];
      tt(r) && gt(l, r, e);
    }
}
function Pr(e) {
  const t = e.type, { mixins: o, extends: a } = t, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(t);
  let d;
  return u ? d = u : !l.length && !o && !a ? d = t : (d = {}, l.length && l.forEach(
    (v) => ea(d, v, c, !0)
  ), ea(d, t, c)), ht(t) && r.set(t, d), d;
}
function ea(e, t, o, a = !1) {
  const { mixins: l, extends: r } = t;
  r && ea(e, r, o, !0), l && l.forEach(
    (c) => ea(e, c, o, !0)
  );
  for (const c in t)
    if (!(a && c === "expose")) {
      const u = Ju[c] || o && o[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const Ju = {
  data: Zl,
  props: ei,
  emits: ei,
  // objects
  methods: sn,
  computed: sn,
  // lifecycle
  beforeCreate: Jt,
  created: Jt,
  beforeMount: Jt,
  mounted: Jt,
  beforeUpdate: Jt,
  updated: Jt,
  beforeDestroy: Jt,
  beforeUnmount: Jt,
  destroyed: Jt,
  unmounted: Jt,
  activated: Jt,
  deactivated: Jt,
  errorCaptured: Jt,
  serverPrefetch: Jt,
  // assets
  components: sn,
  directives: sn,
  // watch
  watch: Yu,
  // provide / inject
  provide: Zl,
  inject: Qu
};
function Zl(e, t) {
  return t ? e ? function() {
    return Lt(
      tt(e) ? e.call(this, this) : e,
      tt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Qu(e, t) {
  return sn(Xa(e), Xa(t));
}
function Xa(e) {
  if (Ze(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++)
      t[e[o]] = e[o];
    return t;
  }
  return e;
}
function Jt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function sn(e, t) {
  return e ? Lt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ei(e, t) {
  return e ? Ze(e) && Ze(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Lt(
    /* @__PURE__ */ Object.create(null),
    Yl(e),
    Yl(t ?? {})
  ) : t;
}
function Yu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = Lt(/* @__PURE__ */ Object.create(null), e);
  for (const a in t)
    o[a] = Jt(e[a], t[a]);
  return o;
}
function Rr() {
  return {
    app: null,
    config: {
      isNativeTag: Bi,
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
let Xu = 0;
function Zu(e, t) {
  return function(a, l = null) {
    tt(a) || (a = Lt({}, a)), l != null && !ht(l) && (l = null);
    const r = Rr(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const v = r.app = {
      _uid: Xu++,
      _component: a,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: Nd,
      get config() {
        return r.config;
      },
      set config(f) {
      },
      use(f, ...p) {
        return c.has(f) || (f && tt(f.install) ? (c.add(f), f.install(v, ...p)) : tt(f) && (c.add(f), f(v, ...p))), v;
      },
      mixin(f) {
        return r.mixins.includes(f) || r.mixins.push(f), v;
      },
      component(f, p) {
        return p ? (r.components[f] = p, v) : r.components[f];
      },
      directive(f, p) {
        return p ? (r.directives[f] = p, v) : r.directives[f];
      },
      mount(f, p, w) {
        if (!d) {
          const g = v._ceVNode || $(a, l);
          return g.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(g, f, w), d = !0, v._container = f, f.__vue_app__ = v, ya(g.component);
        }
      },
      onUnmount(f) {
        u.push(f);
      },
      unmount() {
        d && (ws(
          u,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(f, p) {
        return r.provides[f] = p, v;
      },
      runWithContext(f) {
        const p = Po;
        Po = v;
        try {
          return f();
        } finally {
          Po = p;
        }
      }
    };
    return v;
  };
}
let Po = null;
function ed(e, t) {
  if (Ht) {
    let o = Ht.provides;
    const a = Ht.parent && Ht.parent.provides;
    a === o && (o = Ht.provides = Object.create(a)), o[e] = t;
  }
}
function Bn(e, t, o = !1) {
  const a = Il();
  if (a || Po) {
    let l = Po ? Po._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && tt(t) ? t.call(a && a.proxy) : t;
  }
}
const td = Symbol.for("v-scx"), sd = () => Bn(td);
function gt(e, t, o) {
  return Lr(e, t, o);
}
function Lr(e, t, o = wt) {
  const { immediate: a, deep: l, flush: r, once: c } = o, u = Lt({}, o), d = t && a || !t && r !== "post";
  let v;
  if (bn) {
    if (r === "sync") {
      const g = sd();
      v = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!d) {
      const g = () => {
      };
      return g.stop = Ms, g.resume = Ms, g.pause = Ms, g;
    }
  }
  const f = Ht;
  u.call = (g, _, b) => ws(g, f, _, b);
  let p = !1;
  r === "post" ? u.scheduler = (g) => {
    Qt(g, f && f.suspense);
  } : r !== "sync" && (p = !0, u.scheduler = (g, _) => {
    _ ? g() : _l(g);
  }), u.augmentJob = (g) => {
    t && (g.flags |= 4), p && (g.flags |= 2, f && (g.id = f.uid, g.i = f));
  };
  const w = Eu(e, t, u);
  return bn && (v ? v.push(w) : d && w()), w;
}
function od(e, t, o) {
  const a = this.proxy, l = St(e) ? e.includes(".") ? Dr(a, e) : () => a[e] : e.bind(a, a);
  let r;
  tt(t) ? r = t : (r = t.handler, o = t);
  const c = In(this), u = Lr(l, r.bind(a), o);
  return c(), u;
}
function Dr(e, t) {
  const o = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < o.length && a; l++)
      a = a[o[l]];
    return a;
  };
}
const nd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ms(t)}Modifiers`] || e[`${oo(t)}Modifiers`];
function ad(e, t, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || wt;
  let l = o;
  const r = t.startsWith("update:"), c = r && nd(a, t.slice(7));
  c && (c.trim && (l = o.map((f) => St(f) ? f.trim() : f)), c.number && (l = o.map(ua)));
  let u, d = a[u = Pa(t)] || // also try camelCase event handler (#2249)
  a[u = Pa(ms(t))];
  !d && r && (d = a[u = Pa(oo(t))]), d && ws(
    d,
    e,
    6,
    l
  );
  const v = a[u + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, ws(
      v,
      e,
      6,
      l
    );
  }
}
const ld = /* @__PURE__ */ new WeakMap();
function Nr(e, t, o = !1) {
  const a = o ? ld : t.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!tt(e)) {
    const d = (v) => {
      const f = Nr(v, t, !0);
      f && (u = !0, Lt(c, f));
    };
    !o && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (ht(e) && a.set(e, null), null) : (Ze(r) ? r.forEach((d) => c[d] = null) : Lt(c, r), ht(e) && a.set(e, c), c);
}
function ga(e, t) {
  return !e || !ia(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ft(e, t[0].toLowerCase() + t.slice(1)) || ft(e, oo(t)) || ft(e, t));
}
function ti(e) {
  const {
    type: t,
    vnode: o,
    proxy: a,
    withProxy: l,
    propsOptions: [r],
    slots: c,
    attrs: u,
    emit: d,
    render: v,
    renderCache: f,
    props: p,
    data: w,
    setupState: g,
    ctx: _,
    inheritAttrs: b
  } = e, S = Xn(e);
  let C, I;
  try {
    if (o.shapeFlag & 4) {
      const M = l || a, N = M;
      C = Es(
        v.call(
          N,
          M,
          f,
          p,
          g,
          w,
          _
        )
      ), I = u;
    } else {
      const M = t;
      C = Es(
        M.length > 1 ? M(
          p,
          { attrs: u, slots: c, emit: d }
        ) : M(
          p,
          null
        )
      ), I = t.props ? u : id(u);
    }
  } catch (M) {
    mn.length = 0, fa(M, e, 1), C = $(jt);
  }
  let E = C;
  if (I && b !== !1) {
    const M = Object.keys(I), { shapeFlag: N } = E;
    M.length && N & 7 && (r && M.some(cl) && (I = rd(
      I,
      r
    )), E = to(E, I, !1, !0));
  }
  return o.dirs && (E = to(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(o.dirs) : o.dirs), o.transition && po(E, o.transition), C = E, Xn(S), C;
}
const id = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || ia(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, rd = (e, t) => {
  const o = {};
  for (const a in e)
    (!cl(a) || !(a.slice(9) in t)) && (o[a] = e[a]);
  return o;
};
function cd(e, t, o) {
  const { props: a, children: l, component: r } = e, { props: c, children: u, patchFlag: d } = t, v = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return a ? si(a, c, v) : !!c;
    if (d & 8) {
      const f = t.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const w = f[p];
        if (c[w] !== a[w] && !ga(v, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : a === c ? !1 : a ? c ? si(a, c, v) : !0 : !!c;
  return !1;
}
function si(e, t, o) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (t[r] !== e[r] && !ga(o, r))
      return !0;
  }
  return !1;
}
function ud({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const Ur = {}, Or = () => Object.create(Ur), Ar = (e) => Object.getPrototypeOf(e) === Ur;
function dd(e, t, o, a = !1) {
  const l = {}, r = Or();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), zr(e, t, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = a ? l : _u(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function md(e, t, o, a) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: c }
  } = e, u = ut(l), [d] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (a || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const f = e.vnode.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        let w = f[p];
        if (ga(e.emitsOptions, w))
          continue;
        const g = t[w];
        if (d)
          if (ft(r, w))
            g !== r[w] && (r[w] = g, v = !0);
          else {
            const _ = ms(w);
            l[_] = Za(
              d,
              u,
              _,
              g,
              e,
              !1
            );
          }
        else
          g !== r[w] && (r[w] = g, v = !0);
      }
    }
  } else {
    zr(e, t, l, r) && (v = !0);
    let f;
    for (const p in u)
      (!t || // for camelCase
      !ft(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = oo(p)) === p || !ft(t, f))) && (d ? o && // for camelCase
      (o[p] !== void 0 || // for kebab-case
      o[f] !== void 0) && (l[p] = Za(
        d,
        u,
        p,
        void 0,
        e,
        !0
      )) : delete l[p]);
    if (r !== u)
      for (const p in r)
        (!t || !ft(t, p)) && (delete r[p], v = !0);
  }
  v && As(e.attrs, "set", "");
}
function zr(e, t, o, a) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (an(d))
        continue;
      const v = t[d];
      let f;
      l && ft(l, f = ms(d)) ? !r || !r.includes(f) ? o[f] = v : (u || (u = {}))[f] = v : ga(e.emitsOptions, d) || (!(d in a) || v !== a[d]) && (a[d] = v, c = !0);
    }
  if (r) {
    const d = ut(o), v = u || wt;
    for (let f = 0; f < r.length; f++) {
      const p = r[f];
      o[p] = Za(
        l,
        d,
        p,
        v[p],
        e,
        !ft(v, p)
      );
    }
  }
  return c;
}
function Za(e, t, o, a, l, r) {
  const c = e[o];
  if (c != null) {
    const u = ft(c, "default");
    if (u && a === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && tt(d)) {
        const { propsDefaults: v } = l;
        if (o in v)
          a = v[o];
        else {
          const f = In(l);
          a = v[o] = d.call(
            null,
            t
          ), f();
        }
      } else
        a = d;
      l.ce && l.ce._setProp(o, a);
    }
    c[
      0
      /* shouldCast */
    ] && (r && !u ? a = !1 : c[
      1
      /* shouldCastTrue */
    ] && (a === "" || a === oo(o)) && (a = !0));
  }
  return a;
}
const fd = /* @__PURE__ */ new WeakMap();
function Fr(e, t, o = !1) {
  const a = o ? fd : t.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!tt(e)) {
    const f = (p) => {
      d = !0;
      const [w, g] = Fr(p, t, !0);
      Lt(c, w), g && u.push(...g);
    };
    !o && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !d)
    return ht(e) && a.set(e, Io), Io;
  if (Ze(r))
    for (let f = 0; f < r.length; f++) {
      const p = ms(r[f]);
      oi(p) && (c[p] = wt);
    }
  else if (r)
    for (const f in r) {
      const p = ms(f);
      if (oi(p)) {
        const w = r[f], g = c[p] = Ze(w) || tt(w) ? { type: w } : Lt({}, w), _ = g.type;
        let b = !1, S = !0;
        if (Ze(_))
          for (let C = 0; C < _.length; ++C) {
            const I = _[C], E = tt(I) && I.name;
            if (E === "Boolean") {
              b = !0;
              break;
            } else E === "String" && (S = !1);
          }
        else
          b = tt(_) && _.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = b, g[
          1
          /* shouldCastTrue */
        ] = S, (b || ft(g, "default")) && u.push(p);
      }
    }
  const v = [c, u];
  return ht(e) && a.set(e, v), v;
}
function oi(e) {
  return e[0] !== "$" && !an(e);
}
const $l = (e) => e === "_" || e === "_ctx" || e === "$stable", Cl = (e) => Ze(e) ? e.map(Es) : [Es(e)], vd = (e, t, o) => {
  if (t._n)
    return t;
  const a = h((...l) => Cl(t(...l)), o);
  return a._c = !1, a;
}, Vr = (e, t, o) => {
  const a = e._ctx;
  for (const l in e) {
    if ($l(l)) continue;
    const r = e[l];
    if (tt(r))
      t[l] = vd(l, r, a);
    else if (r != null) {
      const c = Cl(r);
      t[l] = () => c;
    }
  }
}, Br = (e, t) => {
  const o = Cl(t);
  e.slots.default = () => o;
}, Wr = (e, t, o) => {
  for (const a in t)
    (o || !$l(a)) && (e[a] = t[a]);
}, pd = (e, t, o) => {
  const a = e.slots = Or();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Wr(a, t, o), o && Hi(a, "_", l, !0)) : Vr(t, a);
  } else t && Br(e, t);
}, gd = (e, t, o) => {
  const { vnode: a, slots: l } = e;
  let r = !0, c = wt;
  if (a.shapeFlag & 32) {
    const u = t._;
    u ? o && u === 1 ? r = !1 : Wr(l, t, o) : (r = !t.$stable, Vr(t, l)), c = t;
  } else t && (Br(e, t), c = { default: 1 });
  if (r)
    for (const u in l)
      !$l(u) && c[u] == null && delete l[u];
}, Qt = kd;
function hd(e) {
  return yd(e);
}
function yd(e, t) {
  const o = da();
  o.__VUE__ = !0;
  const {
    insert: a,
    remove: l,
    patchProp: r,
    createElement: c,
    createText: u,
    createComment: d,
    setText: v,
    setElementText: f,
    parentNode: p,
    nextSibling: w,
    setScopeId: g = Ms,
    insertStaticContent: _
  } = e, b = (T, A, le, Ce = null, Ee = null, ke = null, X = void 0, G = null, fe = !!A.dynamicChildren) => {
    if (T === A)
      return;
    T && !co(T, A) && (Ce = Ne(T), ee(T, Ee, ke, !0), T = null), A.patchFlag === -2 && (fe = !1, A.dynamicChildren = null);
    const { type: he, ref: je, shapeFlag: We } = A;
    switch (he) {
      case ha:
        S(T, A, le, Ce);
        break;
      case jt:
        C(T, A, le, Ce);
        break;
      case za:
        T == null && I(A, le, Ce, X);
        break;
      case W:
        Y(
          T,
          A,
          le,
          Ce,
          Ee,
          ke,
          X,
          G,
          fe
        );
        break;
      default:
        We & 1 ? N(
          T,
          A,
          le,
          Ce,
          Ee,
          ke,
          X,
          G,
          fe
        ) : We & 6 ? me(
          T,
          A,
          le,
          Ce,
          Ee,
          ke,
          X,
          G,
          fe
        ) : (We & 64 || We & 128) && he.process(
          T,
          A,
          le,
          Ce,
          Ee,
          ke,
          X,
          G,
          fe,
          ge
        );
    }
    je != null && Ee ? un(je, T && T.ref, ke, A || T, !A) : je == null && T && T.ref != null && un(T.ref, null, ke, T, !0);
  }, S = (T, A, le, Ce) => {
    if (T == null)
      a(
        A.el = u(A.children),
        le,
        Ce
      );
    else {
      const Ee = A.el = T.el;
      A.children !== T.children && v(Ee, A.children);
    }
  }, C = (T, A, le, Ce) => {
    T == null ? a(
      A.el = d(A.children || ""),
      le,
      Ce
    ) : A.el = T.el;
  }, I = (T, A, le, Ce) => {
    [T.el, T.anchor] = _(
      T.children,
      A,
      le,
      Ce,
      T.el,
      T.anchor
    );
  }, E = ({ el: T, anchor: A }, le, Ce) => {
    let Ee;
    for (; T && T !== A; )
      Ee = w(T), a(T, le, Ce), T = Ee;
    a(A, le, Ce);
  }, M = ({ el: T, anchor: A }) => {
    let le;
    for (; T && T !== A; )
      le = w(T), l(T), T = le;
    l(A);
  }, N = (T, A, le, Ce, Ee, ke, X, G, fe) => {
    if (A.type === "svg" ? X = "svg" : A.type === "math" && (X = "mathml"), T == null)
      F(
        A,
        le,
        Ce,
        Ee,
        ke,
        X,
        G,
        fe
      );
    else {
      const he = T.el && T.el._isVueCE ? T.el : null;
      try {
        he && he._beginPatch(), q(
          T,
          A,
          Ee,
          ke,
          X,
          G,
          fe
        );
      } finally {
        he && he._endPatch();
      }
    }
  }, F = (T, A, le, Ce, Ee, ke, X, G) => {
    let fe, he;
    const { props: je, shapeFlag: We, transition: _e, dirs: Z } = T;
    if (fe = T.el = c(
      T.type,
      ke,
      je && je.is,
      je
    ), We & 8 ? f(fe, T.children) : We & 16 && D(
      T.children,
      fe,
      null,
      Ce,
      Ee,
      Aa(T, ke),
      X,
      G
    ), Z && no(T, null, Ce, "created"), V(fe, T, T.scopeId, X, Ce), je) {
      for (const De in je)
        De !== "value" && !an(De) && r(fe, De, null, je[De], ke, Ce);
      "value" in je && r(fe, "value", null, je.value, ke), (he = je.onVnodeBeforeMount) && bs(he, Ce, T);
    }
    Z && no(T, null, Ce, "beforeMount");
    const Fe = wd(Ee, _e);
    Fe && _e.beforeEnter(fe), a(fe, A, le), ((he = je && je.onVnodeMounted) || Fe || Z) && Qt(() => {
      he && bs(he, Ce, T), Fe && _e.enter(fe), Z && no(T, null, Ce, "mounted");
    }, Ee);
  }, V = (T, A, le, Ce, Ee) => {
    if (le && g(T, le), Ce)
      for (let ke = 0; ke < Ce.length; ke++)
        g(T, Ce[ke]);
    if (Ee) {
      let ke = Ee.subTree;
      if (A === ke || jr(ke.type) && (ke.ssContent === A || ke.ssFallback === A)) {
        const X = Ee.vnode;
        V(
          T,
          X,
          X.scopeId,
          X.slotScopeIds,
          Ee.parent
        );
      }
    }
  }, D = (T, A, le, Ce, Ee, ke, X, G, fe = 0) => {
    for (let he = fe; he < T.length; he++) {
      const je = T[he] = G ? Xs(T[he]) : Es(T[he]);
      b(
        null,
        je,
        A,
        le,
        Ce,
        Ee,
        ke,
        X,
        G
      );
    }
  }, q = (T, A, le, Ce, Ee, ke, X) => {
    const G = A.el = T.el;
    let { patchFlag: fe, dynamicChildren: he, dirs: je } = A;
    fe |= T.patchFlag & 16;
    const We = T.props || wt, _e = A.props || wt;
    let Z;
    if (le && ao(le, !1), (Z = _e.onVnodeBeforeUpdate) && bs(Z, le, A, T), je && no(A, T, le, "beforeUpdate"), le && ao(le, !0), (We.innerHTML && _e.innerHTML == null || We.textContent && _e.textContent == null) && f(G, ""), he ? ue(
      T.dynamicChildren,
      he,
      G,
      le,
      Ce,
      Aa(A, Ee),
      ke
    ) : X || se(
      T,
      A,
      G,
      null,
      le,
      Ce,
      Aa(A, Ee),
      ke,
      !1
    ), fe > 0) {
      if (fe & 16)
        ie(G, We, _e, le, Ee);
      else if (fe & 2 && We.class !== _e.class && r(G, "class", null, _e.class, Ee), fe & 4 && r(G, "style", We.style, _e.style, Ee), fe & 8) {
        const Fe = A.dynamicProps;
        for (let De = 0; De < Fe.length; De++) {
          const He = Fe[De], Ve = We[He], Oe = _e[He];
          (Oe !== Ve || He === "value") && r(G, He, Ve, Oe, Ee, le);
        }
      }
      fe & 1 && T.children !== A.children && f(G, A.children);
    } else !X && he == null && ie(G, We, _e, le, Ee);
    ((Z = _e.onVnodeUpdated) || je) && Qt(() => {
      Z && bs(Z, le, A, T), je && no(A, T, le, "updated");
    }, Ce);
  }, ue = (T, A, le, Ce, Ee, ke, X) => {
    for (let G = 0; G < A.length; G++) {
      const fe = T[G], he = A[G], je = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        fe.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (fe.type === W || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !co(fe, he) || // - In the case of a component, it could contain anything.
        fe.shapeFlag & 198) ? p(fe.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          le
        )
      );
      b(
        fe,
        he,
        je,
        null,
        Ce,
        Ee,
        ke,
        X,
        !0
      );
    }
  }, ie = (T, A, le, Ce, Ee) => {
    if (A !== le) {
      if (A !== wt)
        for (const ke in A)
          !an(ke) && !(ke in le) && r(
            T,
            ke,
            A[ke],
            null,
            Ee,
            Ce
          );
      for (const ke in le) {
        if (an(ke)) continue;
        const X = le[ke], G = A[ke];
        X !== G && ke !== "value" && r(T, ke, G, X, Ee, Ce);
      }
      "value" in le && r(T, "value", A.value, le.value, Ee);
    }
  }, Y = (T, A, le, Ce, Ee, ke, X, G, fe) => {
    const he = A.el = T ? T.el : u(""), je = A.anchor = T ? T.anchor : u("");
    let { patchFlag: We, dynamicChildren: _e, slotScopeIds: Z } = A;
    Z && (G = G ? G.concat(Z) : Z), T == null ? (a(he, le, Ce), a(je, le, Ce), D(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      A.children || [],
      le,
      je,
      Ee,
      ke,
      X,
      G,
      fe
    )) : We > 0 && We & 64 && _e && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    T.dynamicChildren ? (ue(
      T.dynamicChildren,
      _e,
      le,
      Ee,
      ke,
      X,
      G
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (A.key != null || Ee && A === Ee.subTree) && xl(
      T,
      A,
      !0
      /* shallow */
    )) : se(
      T,
      A,
      le,
      je,
      Ee,
      ke,
      X,
      G,
      fe
    );
  }, me = (T, A, le, Ce, Ee, ke, X, G, fe) => {
    A.slotScopeIds = G, T == null ? A.shapeFlag & 512 ? Ee.ctx.activate(
      A,
      le,
      Ce,
      X,
      fe
    ) : oe(
      A,
      le,
      Ce,
      Ee,
      ke,
      X,
      fe
    ) : B(T, A, fe);
  }, oe = (T, A, le, Ce, Ee, ke, X) => {
    const G = T.component = Ed(
      T,
      Ce,
      Ee
    );
    if (va(T) && (G.ctx.renderer = ge), Td(G, !1, X), G.asyncDep) {
      if (Ee && Ee.registerDep(G, H, X), !T.el) {
        const fe = G.subTree = $(jt);
        C(null, fe, A, le), T.placeholder = fe.el;
      }
    } else
      H(
        G,
        T,
        A,
        le,
        Ee,
        ke,
        X
      );
  }, B = (T, A, le) => {
    const Ce = A.component = T.component;
    if (cd(T, A, le))
      if (Ce.asyncDep && !Ce.asyncResolved) {
        we(Ce, A, le);
        return;
      } else
        Ce.next = A, Ce.update();
    else
      A.el = T.el, Ce.vnode = A;
  }, H = (T, A, le, Ce, Ee, ke, X) => {
    const G = () => {
      if (T.isMounted) {
        let { next: We, bu: _e, u: Z, parent: Fe, vnode: De } = T;
        {
          const pt = Gr(T);
          if (pt) {
            We && (We.el = De.el, we(T, We, X)), pt.asyncDep.then(() => {
              T.isUnmounted || G();
            });
            return;
          }
        }
        let He = We, Ve;
        ao(T, !1), We ? (We.el = De.el, we(T, We, X)) : We = De, _e && Fn(_e), (Ve = We.props && We.props.onVnodeBeforeUpdate) && bs(Ve, Fe, We, De), ao(T, !0);
        const Oe = ti(T), Qe = T.subTree;
        T.subTree = Oe, b(
          Qe,
          Oe,
          // parent may have changed if it's in a teleport
          p(Qe.el),
          // anchor may have changed if it's in a fragment
          Ne(Qe),
          T,
          Ee,
          ke
        ), We.el = Oe.el, He === null && ud(T, Oe.el), Z && Qt(Z, Ee), (Ve = We.props && We.props.onVnodeUpdated) && Qt(
          () => bs(Ve, Fe, We, De),
          Ee
        );
      } else {
        let We;
        const { el: _e, props: Z } = A, { bm: Fe, m: De, parent: He, root: Ve, type: Oe } = T, Qe = Mo(A);
        ao(T, !1), Fe && Fn(Fe), !Qe && (We = Z && Z.onVnodeBeforeMount) && bs(We, He, A), ao(T, !0);
        {
          Ve.ce && // @ts-expect-error _def is private
          Ve.ce._def.shadowRoot !== !1 && Ve.ce._injectChildStyle(Oe);
          const pt = T.subTree = ti(T);
          b(
            null,
            pt,
            le,
            Ce,
            T,
            Ee,
            ke
          ), A.el = pt.el;
        }
        if (De && Qt(De, Ee), !Qe && (We = Z && Z.onVnodeMounted)) {
          const pt = A;
          Qt(
            () => bs(We, He, pt),
            Ee
          );
        }
        (A.shapeFlag & 256 || He && Mo(He.vnode) && He.vnode.shapeFlag & 256) && T.a && Qt(T.a, Ee), T.isMounted = !0, A = le = Ce = null;
      }
    };
    T.scope.on();
    const fe = T.effect = new Qi(G);
    T.scope.off();
    const he = T.update = fe.run.bind(fe), je = T.job = fe.runIfDirty.bind(fe);
    je.i = T, je.id = T.uid, fe.scheduler = () => _l(je), ao(T, !0), he();
  }, we = (T, A, le) => {
    A.component = T;
    const Ce = T.vnode.props;
    T.vnode = A, T.next = null, md(T, A.props, Ce, le), gd(T, A.children, le), Vs(), Gl(T), Bs();
  }, se = (T, A, le, Ce, Ee, ke, X, G, fe = !1) => {
    const he = T && T.children, je = T ? T.shapeFlag : 0, We = A.children, { patchFlag: _e, shapeFlag: Z } = A;
    if (_e > 0) {
      if (_e & 128) {
        ce(
          he,
          We,
          le,
          Ce,
          Ee,
          ke,
          X,
          G,
          fe
        );
        return;
      } else if (_e & 256) {
        de(
          he,
          We,
          le,
          Ce,
          Ee,
          ke,
          X,
          G,
          fe
        );
        return;
      }
    }
    Z & 8 ? (je & 16 && ze(he, Ee, ke), We !== he && f(le, We)) : je & 16 ? Z & 16 ? ce(
      he,
      We,
      le,
      Ce,
      Ee,
      ke,
      X,
      G,
      fe
    ) : ze(he, Ee, ke, !0) : (je & 8 && f(le, ""), Z & 16 && D(
      We,
      le,
      Ce,
      Ee,
      ke,
      X,
      G,
      fe
    ));
  }, de = (T, A, le, Ce, Ee, ke, X, G, fe) => {
    T = T || Io, A = A || Io;
    const he = T.length, je = A.length, We = Math.min(he, je);
    let _e;
    for (_e = 0; _e < We; _e++) {
      const Z = A[_e] = fe ? Xs(A[_e]) : Es(A[_e]);
      b(
        T[_e],
        Z,
        le,
        null,
        Ee,
        ke,
        X,
        G,
        fe
      );
    }
    he > je ? ze(
      T,
      Ee,
      ke,
      !0,
      !1,
      We
    ) : D(
      A,
      le,
      Ce,
      Ee,
      ke,
      X,
      G,
      fe,
      We
    );
  }, ce = (T, A, le, Ce, Ee, ke, X, G, fe) => {
    let he = 0;
    const je = A.length;
    let We = T.length - 1, _e = je - 1;
    for (; he <= We && he <= _e; ) {
      const Z = T[he], Fe = A[he] = fe ? Xs(A[he]) : Es(A[he]);
      if (co(Z, Fe))
        b(
          Z,
          Fe,
          le,
          null,
          Ee,
          ke,
          X,
          G,
          fe
        );
      else
        break;
      he++;
    }
    for (; he <= We && he <= _e; ) {
      const Z = T[We], Fe = A[_e] = fe ? Xs(A[_e]) : Es(A[_e]);
      if (co(Z, Fe))
        b(
          Z,
          Fe,
          le,
          null,
          Ee,
          ke,
          X,
          G,
          fe
        );
      else
        break;
      We--, _e--;
    }
    if (he > We) {
      if (he <= _e) {
        const Z = _e + 1, Fe = Z < je ? A[Z].el : Ce;
        for (; he <= _e; )
          b(
            null,
            A[he] = fe ? Xs(A[he]) : Es(A[he]),
            le,
            Fe,
            Ee,
            ke,
            X,
            G,
            fe
          ), he++;
      }
    } else if (he > _e)
      for (; he <= We; )
        ee(T[he], Ee, ke, !0), he++;
    else {
      const Z = he, Fe = he, De = /* @__PURE__ */ new Map();
      for (he = Fe; he <= _e; he++) {
        const P = A[he] = fe ? Xs(A[he]) : Es(A[he]);
        P.key != null && De.set(P.key, he);
      }
      let He, Ve = 0;
      const Oe = _e - Fe + 1;
      let Qe = !1, pt = 0;
      const Q = new Array(Oe);
      for (he = 0; he < Oe; he++) Q[he] = 0;
      for (he = Z; he <= We; he++) {
        const P = T[he];
        if (Ve >= Oe) {
          ee(P, Ee, ke, !0);
          continue;
        }
        let U;
        if (P.key != null)
          U = De.get(P.key);
        else
          for (He = Fe; He <= _e; He++)
            if (Q[He - Fe] === 0 && co(P, A[He])) {
              U = He;
              break;
            }
        U === void 0 ? ee(P, Ee, ke, !0) : (Q[U - Fe] = he + 1, U >= pt ? pt = U : Qe = !0, b(
          P,
          A[U],
          le,
          null,
          Ee,
          ke,
          X,
          G,
          fe
        ), Ve++);
      }
      const pe = Qe ? _d(Q) : Io;
      for (He = pe.length - 1, he = Oe - 1; he >= 0; he--) {
        const P = Fe + he, U = A[P], J = A[P + 1], Te = P + 1 < je ? (
          // #13559, fallback to el placeholder for unresolved async component
          J.el || J.placeholder
        ) : Ce;
        Q[he] === 0 ? b(
          null,
          U,
          le,
          Te,
          Ee,
          ke,
          X,
          G,
          fe
        ) : Qe && (He < 0 || he !== pe[He] ? K(U, le, Te, 2) : He--);
      }
    }
  }, K = (T, A, le, Ce, Ee = null) => {
    const { el: ke, type: X, transition: G, children: fe, shapeFlag: he } = T;
    if (he & 6) {
      K(T.component.subTree, A, le, Ce);
      return;
    }
    if (he & 128) {
      T.suspense.move(A, le, Ce);
      return;
    }
    if (he & 64) {
      X.move(T, A, le, ge);
      return;
    }
    if (X === W) {
      a(ke, A, le);
      for (let We = 0; We < fe.length; We++)
        K(fe[We], A, le, Ce);
      a(T.anchor, A, le);
      return;
    }
    if (X === za) {
      E(T, A, le);
      return;
    }
    if (Ce !== 2 && he & 1 && G)
      if (Ce === 0)
        G.beforeEnter(ke), a(ke, A, le), Qt(() => G.enter(ke), Ee);
      else {
        const { leave: We, delayLeave: _e, afterLeave: Z } = G, Fe = () => {
          T.ctx.isUnmounted ? l(ke) : a(ke, A, le);
        }, De = () => {
          ke._isLeaving && ke[Os](
            !0
            /* cancelled */
          ), We(ke, () => {
            Fe(), Z && Z();
          });
        };
        _e ? _e(ke, Fe, De) : De();
      }
    else
      a(ke, A, le);
  }, ee = (T, A, le, Ce = !1, Ee = !1) => {
    const {
      type: ke,
      props: X,
      ref: G,
      children: fe,
      dynamicChildren: he,
      shapeFlag: je,
      patchFlag: We,
      dirs: _e,
      cacheIndex: Z
    } = T;
    if (We === -2 && (Ee = !1), G != null && (Vs(), un(G, null, le, T, !0), Bs()), Z != null && (A.renderCache[Z] = void 0), je & 256) {
      A.ctx.deactivate(T);
      return;
    }
    const Fe = je & 1 && _e, De = !Mo(T);
    let He;
    if (De && (He = X && X.onVnodeBeforeUnmount) && bs(He, A, T), je & 6)
      Se(T.component, le, Ce);
    else {
      if (je & 128) {
        T.suspense.unmount(le, Ce);
        return;
      }
      Fe && no(T, null, A, "beforeUnmount"), je & 64 ? T.type.remove(
        T,
        A,
        le,
        ge,
        Ce
      ) : he && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !he.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ke !== W || We > 0 && We & 64) ? ze(
        he,
        A,
        le,
        !1,
        !0
      ) : (ke === W && We & 384 || !Ee && je & 16) && ze(fe, A, le), Ce && te(T);
    }
    (De && (He = X && X.onVnodeUnmounted) || Fe) && Qt(() => {
      He && bs(He, A, T), Fe && no(T, null, A, "unmounted");
    }, le);
  }, te = (T) => {
    const { type: A, el: le, anchor: Ce, transition: Ee } = T;
    if (A === W) {
      Me(le, Ce);
      return;
    }
    if (A === za) {
      M(T);
      return;
    }
    const ke = () => {
      l(le), Ee && !Ee.persisted && Ee.afterLeave && Ee.afterLeave();
    };
    if (T.shapeFlag & 1 && Ee && !Ee.persisted) {
      const { leave: X, delayLeave: G } = Ee, fe = () => X(le, ke);
      G ? G(T.el, ke, fe) : fe();
    } else
      ke();
  }, Me = (T, A) => {
    let le;
    for (; T !== A; )
      le = w(T), l(T), T = le;
    l(A);
  }, Se = (T, A, le) => {
    const { bum: Ce, scope: Ee, job: ke, subTree: X, um: G, m: fe, a: he } = T;
    ni(fe), ni(he), Ce && Fn(Ce), Ee.stop(), ke && (ke.flags |= 8, ee(X, T, A, le)), G && Qt(G, A), Qt(() => {
      T.isUnmounted = !0;
    }, A);
  }, ze = (T, A, le, Ce = !1, Ee = !1, ke = 0) => {
    for (let X = ke; X < T.length; X++)
      ee(T[X], A, le, Ce, Ee);
  }, Ne = (T) => {
    if (T.shapeFlag & 6)
      return Ne(T.component.subTree);
    if (T.shapeFlag & 128)
      return T.suspense.next();
    const A = w(T.anchor || T.el), le = A && A[gr];
    return le ? w(le) : A;
  };
  let be = !1;
  const Ae = (T, A, le) => {
    T == null ? A._vnode && ee(A._vnode, null, null, !0) : b(
      A._vnode || null,
      T,
      A,
      null,
      null,
      null,
      le
    ), A._vnode = T, be || (be = !0, Gl(), fr(), be = !1);
  }, ge = {
    p: b,
    um: ee,
    m: K,
    r: te,
    mt: oe,
    mc: D,
    pc: se,
    pbc: ue,
    n: Ne,
    o: e
  };
  return {
    render: Ae,
    hydrate: void 0,
    createApp: Zu(Ae)
  };
}
function Aa({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function ao({ effect: e, job: t }, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function wd(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function xl(e, t, o = !1) {
  const a = e.children, l = t.children;
  if (Ze(a) && Ze(l))
    for (let r = 0; r < a.length; r++) {
      const c = a[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = Xs(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && xl(c, u)), u.type === ha && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === jt && !u.el && (u.el = c.el);
    }
}
function _d(e) {
  const t = e.slice(), o = [0];
  let a, l, r, c, u;
  const d = e.length;
  for (a = 0; a < d; a++) {
    const v = e[a];
    if (v !== 0) {
      if (l = o[o.length - 1], e[l] < v) {
        t[a] = l, o.push(a);
        continue;
      }
      for (r = 0, c = o.length - 1; r < c; )
        u = r + c >> 1, e[o[u]] < v ? r = u + 1 : c = u;
      v < e[o[r]] && (r > 0 && (t[a] = o[r - 1]), o[r] = a);
    }
  }
  for (r = o.length, c = o[r - 1]; r-- > 0; )
    o[r] = c, c = t[c];
  return o;
}
function Gr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Gr(t);
}
function ni(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const jr = (e) => e.__isSuspense;
function kd(e, t) {
  t && t.pendingBranch ? Ze(e) ? t.effects.push(...e) : t.effects.push(e) : Pu(e);
}
const W = Symbol.for("v-fgt"), ha = Symbol.for("v-txt"), jt = Symbol.for("v-cmt"), za = Symbol.for("v-stc"), mn = [];
let ls = null;
function n(e = !1) {
  mn.push(ls = e ? null : []);
}
function bd() {
  mn.pop(), ls = mn[mn.length - 1] || null;
}
let _n = 1;
function ta(e, t = !1) {
  _n += e, e < 0 && ls && t && (ls.hasOnce = !0);
}
function Hr(e) {
  return e.dynamicChildren = _n > 0 ? ls || Io : null, bd(), _n > 0 && ls && ls.push(e), e;
}
function i(e, t, o, a, l, r) {
  return Hr(
    s(
      e,
      t,
      o,
      a,
      l,
      r,
      !0
    )
  );
}
function L(e, t, o, a, l) {
  return Hr(
    $(
      e,
      t,
      o,
      a,
      l,
      !0
    )
  );
}
function kn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function co(e, t) {
  return e.type === t.type && e.key === t.key;
}
const qr = ({ key: e }) => e ?? null, Wn = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? St(e) || qt(e) || tt(e) ? { i: zt, r: e, k: t, f: !!o } : e : null);
function s(e, t = null, o = null, a = 0, l = null, r = e === W ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && qr(t),
    ref: t && Wn(t),
    scopeId: pr,
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
    ctx: zt
  };
  return u ? (Sl(d, o), r & 128 && e.normalize(d)) : o && (d.shapeFlag |= St(o) ? 8 : 16), _n > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  ls && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && ls.push(d), d;
}
const $ = $d;
function $d(e, t = null, o = null, a = 0, l = null, r = !1) {
  if ((!e || e === Er) && (e = jt), kn(e)) {
    const u = to(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && Sl(u, o), _n > 0 && !r && ls && (u.shapeFlag & 6 ? ls[ls.indexOf(e)] = u : ls.push(u)), u.patchFlag = -2, u;
  }
  if (Dd(e) && (e = e.__vccOpts), t) {
    t = Cd(t);
    let { class: u, style: d } = t;
    u && !St(u) && (t.class = Be(u)), ht(d) && (wl(d) && !Ze(d) && (d = Lt({}, d)), t.style = Nt(d));
  }
  const c = St(e) ? 1 : jr(e) ? 128 : hr(e) ? 64 : ht(e) ? 4 : tt(e) ? 2 : 0;
  return s(
    e,
    t,
    o,
    a,
    l,
    c,
    r,
    !0
  );
}
function Cd(e) {
  return e ? wl(e) || Ar(e) ? Lt({}, e) : e : null;
}
function to(e, t, o = !1, a = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, v = t ? xd(l || {}, t) : l, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && qr(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Ze(r) ? r.concat(Wn(t)) : [r, Wn(t)] : Wn(t)
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
    patchFlag: t && e.type !== W ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && to(e.ssContent),
    ssFallback: e.ssFallback && to(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && a && po(
    f,
    d.clone(f)
  ), f;
}
function x(e = " ", t = 0) {
  return $(ha, null, e, t);
}
function y(e = "", t = !1) {
  return t ? (n(), L(jt, null, e)) : $(jt, null, e);
}
function Es(e) {
  return e == null || typeof e == "boolean" ? $(jt) : Ze(e) ? $(
    W,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : kn(e) ? Xs(e) : $(ha, null, String(e));
}
function Xs(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : to(e);
}
function Sl(e, t) {
  let o = 0;
  const { shapeFlag: a } = e;
  if (t == null)
    t = null;
  else if (Ze(t))
    o = 16;
  else if (typeof t == "object")
    if (a & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), Sl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = t._;
      !l && !Ar(t) ? t._ctx = zt : l === 3 && zt && (zt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else tt(t) ? (t = { default: t, _ctx: zt }, o = 32) : (t = String(t), a & 64 ? (o = 16, t = [x(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function xd(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        t.class !== a.class && (t.class = Be([t.class, a.class]));
      else if (l === "style")
        t.style = Nt([t.style, a.style]);
      else if (ia(l)) {
        const r = t[l], c = a[l];
        c && r !== c && !(Ze(r) && r.includes(c)) && (t[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function bs(e, t, o, a = null) {
  ws(e, t, 7, [
    o,
    a
  ]);
}
const Sd = Rr();
let Id = 0;
function Ed(e, t, o) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || Sd, r = {
    uid: Id++,
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
    scope: new eu(
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
    propsOptions: Fr(a, l),
    emitsOptions: Nr(a, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: wt,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: wt,
    data: wt,
    props: wt,
    attrs: wt,
    slots: wt,
    refs: wt,
    setupState: wt,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = ad.bind(null, r), e.ce && e.ce(r), r;
}
let Ht = null;
const Il = () => Ht || zt;
let sa, el;
{
  const e = da(), t = (o, a) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  sa = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Ht = o
  ), el = t(
    "__VUE_SSR_SETTERS__",
    (o) => bn = o
  );
}
const In = (e) => {
  const t = Ht;
  return sa(e), e.scope.on(), () => {
    e.scope.off(), sa(t);
  };
}, ai = () => {
  Ht && Ht.scope.off(), sa(null);
};
function Kr(e) {
  return e.vnode.shapeFlag & 4;
}
let bn = !1;
function Td(e, t = !1, o = !1) {
  t && el(t);
  const { props: a, children: l } = e.vnode, r = Kr(e);
  dd(e, a, r, t), pd(e, l, o || t);
  const c = r ? Md(e, t) : void 0;
  return t && el(!1), c;
}
function Md(e, t) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Hu);
  const { setup: a } = o;
  if (a) {
    Vs();
    const l = e.setupContext = a.length > 1 ? Rd(e) : null, r = In(e), c = xn(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = Wi(c);
    if (Bs(), r(), (u || e.sp) && !Mo(e) && xr(e), u) {
      if (c.then(ai, ai), t)
        return c.then((d) => {
          li(e, d);
        }).catch((d) => {
          fa(d, e, 0);
        });
      e.asyncDep = c;
    } else
      li(e, c);
  } else
    Jr(e);
}
function li(e, t, o) {
  tt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ht(t) && (e.setupState = ur(t)), Jr(e);
}
function Jr(e, t, o) {
  const a = e.type;
  e.render || (e.render = a.render || Ms);
  {
    const l = In(e);
    Vs();
    try {
      qu(e);
    } finally {
      Bs(), l();
    }
  }
}
const Pd = {
  get(e, t) {
    return Wt(e, "get", ""), e[t];
  }
};
function Rd(e) {
  const t = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Pd),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ya(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ur(ku(e.exposed)), {
    get(t, o) {
      if (o in t)
        return t[o];
      if (o in dn)
        return dn[o](e);
    },
    has(t, o) {
      return o in t || o in dn;
    }
  })) : e.proxy;
}
function Ld(e, t = !0) {
  return tt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Dd(e) {
  return tt(e) && "__vccOpts" in e;
}
const R = (e, t) => Su(e, t, bn);
function Fo(e, t, o) {
  try {
    ta(-1);
    const a = arguments.length;
    return a === 2 ? ht(t) && !Ze(t) ? kn(t) ? $(e, null, [t]) : $(e, t) : $(e, null, t) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && kn(o) && (o = [o]), $(e, t, o));
  } finally {
    ta(1);
  }
}
const Nd = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let tl;
const ii = typeof window < "u" && window.trustedTypes;
if (ii)
  try {
    tl = /* @__PURE__ */ ii.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Qr = tl ? (e) => tl.createHTML(e) : (e) => e, Ud = "http://www.w3.org/2000/svg", Od = "http://www.w3.org/1998/Math/MathML", Us = typeof document < "u" ? document : null, ri = Us && /* @__PURE__ */ Us.createElement("template"), Ad = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, a) => {
    const l = t === "svg" ? Us.createElementNS(Ud, e) : t === "mathml" ? Us.createElementNS(Od, e) : o ? Us.createElement(e, { is: o }) : Us.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => Us.createTextNode(e),
  createComment: (e) => Us.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Us.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, o, a, l, r) {
    const c = o ? o.previousSibling : t.lastChild;
    if (l && (l === r || l.nextSibling))
      for (; t.insertBefore(l.cloneNode(!0), o), !(l === r || !(l = l.nextSibling)); )
        ;
    else {
      ri.innerHTML = Qr(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const u = ri.content;
      if (a === "svg" || a === "mathml") {
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
}, Ks = "transition", Ko = "animation", Uo = Symbol("_vtc"), Yr = {
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
}, Xr = /* @__PURE__ */ Lt(
  {},
  kr,
  Yr
), zd = (e) => (e.displayName = "Transition", e.props = Xr, e), Fd = /* @__PURE__ */ zd(
  (e, { slots: t }) => Fo(Du, Zr(e), t)
), lo = (e, t = []) => {
  Ze(e) ? e.forEach((o) => o(...t)) : e && e(...t);
}, ci = (e) => e ? Ze(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Zr(e) {
  const t = {};
  for (const Y in e)
    Y in Yr || (t[Y] = e[Y]);
  if (e.css === !1)
    return t;
  const {
    name: o = "v",
    type: a,
    duration: l,
    enterFromClass: r = `${o}-enter-from`,
    enterActiveClass: c = `${o}-enter-active`,
    enterToClass: u = `${o}-enter-to`,
    appearFromClass: d = r,
    appearActiveClass: v = c,
    appearToClass: f = u,
    leaveFromClass: p = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: g = `${o}-leave-to`
  } = e, _ = Vd(l), b = _ && _[0], S = _ && _[1], {
    onBeforeEnter: C,
    onEnter: I,
    onEnterCancelled: E,
    onLeave: M,
    onLeaveCancelled: N,
    onBeforeAppear: F = C,
    onAppear: V = I,
    onAppearCancelled: D = E
  } = t, q = (Y, me, oe, B) => {
    Y._enterCancelled = B, Js(Y, me ? f : u), Js(Y, me ? v : c), oe && oe();
  }, ue = (Y, me) => {
    Y._isLeaving = !1, Js(Y, p), Js(Y, g), Js(Y, w), me && me();
  }, ie = (Y) => (me, oe) => {
    const B = Y ? V : I, H = () => q(me, Y, oe);
    lo(B, [me, H]), ui(() => {
      Js(me, Y ? d : r), Cs(me, Y ? f : u), ci(B) || di(me, a, b, H);
    });
  };
  return Lt(t, {
    onBeforeEnter(Y) {
      lo(C, [Y]), Cs(Y, r), Cs(Y, c);
    },
    onBeforeAppear(Y) {
      lo(F, [Y]), Cs(Y, d), Cs(Y, v);
    },
    onEnter: ie(!1),
    onAppear: ie(!0),
    onLeave(Y, me) {
      Y._isLeaving = !0;
      const oe = () => ue(Y, me);
      Cs(Y, p), Y._enterCancelled ? (Cs(Y, w), sl(Y)) : (sl(Y), Cs(Y, w)), ui(() => {
        Y._isLeaving && (Js(Y, p), Cs(Y, g), ci(M) || di(Y, a, S, oe));
      }), lo(M, [Y, oe]);
    },
    onEnterCancelled(Y) {
      q(Y, !1, void 0, !0), lo(E, [Y]);
    },
    onAppearCancelled(Y) {
      q(Y, !0, void 0, !0), lo(D, [Y]);
    },
    onLeaveCancelled(Y) {
      ue(Y), lo(N, [Y]);
    }
  });
}
function Vd(e) {
  if (e == null)
    return null;
  if (ht(e))
    return [Fa(e.enter), Fa(e.leave)];
  {
    const t = Fa(e);
    return [t, t];
  }
}
function Fa(e) {
  return Hc(e);
}
function Cs(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Uo] || (e[Uo] = /* @__PURE__ */ new Set())).add(t);
}
function Js(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const o = e[Uo];
  o && (o.delete(t), o.size || (e[Uo] = void 0));
}
function ui(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Bd = 0;
function di(e, t, o, a) {
  const l = e._endId = ++Bd, r = () => {
    l === e._endId && a();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: c, timeout: u, propCount: d } = ec(e, t);
  if (!c)
    return a();
  const v = c + "end";
  let f = 0;
  const p = () => {
    e.removeEventListener(v, w), r();
  }, w = (g) => {
    g.target === e && ++f >= d && p();
  };
  setTimeout(() => {
    f < d && p();
  }, u + 1), e.addEventListener(v, w);
}
function ec(e, t) {
  const o = window.getComputedStyle(e), a = (_) => (o[_] || "").split(", "), l = a(`${Ks}Delay`), r = a(`${Ks}Duration`), c = mi(l, r), u = a(`${Ko}Delay`), d = a(`${Ko}Duration`), v = mi(u, d);
  let f = null, p = 0, w = 0;
  t === Ks ? c > 0 && (f = Ks, p = c, w = r.length) : t === Ko ? v > 0 && (f = Ko, p = v, w = d.length) : (p = Math.max(c, v), f = p > 0 ? c > v ? Ks : Ko : null, w = f ? f === Ks ? r.length : d.length : 0);
  const g = f === Ks && /\b(?:transform|all)(?:,|$)/.test(
    a(`${Ks}Property`).toString()
  );
  return {
    type: f,
    timeout: p,
    propCount: w,
    hasTransform: g
  };
}
function mi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((o, a) => fi(o) + fi(e[a])));
}
function fi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function sl(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Wd(e, t, o) {
  const a = e[Uo];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const vi = Symbol("_vod"), Gd = Symbol("_vsh"), jd = Symbol(""), Hd = /(?:^|;)\s*display\s*:/;
function qd(e, t, o) {
  const a = e.style, l = St(o);
  let r = !1;
  if (o && !l) {
    if (t)
      if (St(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && Gn(a, u, "");
        }
      else
        for (const c in t)
          o[c] == null && Gn(a, c, "");
    for (const c in o)
      c === "display" && (r = !0), Gn(a, c, o[c]);
  } else if (l) {
    if (t !== o) {
      const c = a[jd];
      c && (o += ";" + c), a.cssText = o, r = Hd.test(o);
    }
  } else t && e.removeAttribute("style");
  vi in e && (e[vi] = r ? a.display : "", e[Gd] && (a.display = "none"));
}
const pi = /\s*!important$/;
function Gn(e, t, o) {
  if (Ze(o))
    o.forEach((a) => Gn(e, t, a));
  else if (o == null && (o = ""), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const a = Kd(e, t);
    pi.test(o) ? e.setProperty(
      oo(a),
      o.replace(pi, ""),
      "important"
    ) : e[a] = o;
  }
}
const gi = ["Webkit", "Moz", "ms"], Va = {};
function Kd(e, t) {
  const o = Va[t];
  if (o)
    return o;
  let a = ms(t);
  if (a !== "filter" && a in e)
    return Va[t] = a;
  a = ca(a);
  for (let l = 0; l < gi.length; l++) {
    const r = gi[l] + a;
    if (r in e)
      return Va[t] = r;
  }
  return t;
}
const hi = "http://www.w3.org/1999/xlink";
function yi(e, t, o, a, l, r = Xc(t)) {
  a && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(hi, t.slice(6, t.length)) : e.setAttributeNS(hi, t, o) : o == null || r && !qi(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : hs(o) ? String(o) : o
  );
}
function wi(e, t, o, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? Qr(o) : o);
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
    u === "boolean" ? o = qi(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
  }
  try {
    e[t] = o;
  } catch {
  }
  c && e.removeAttribute(l || t);
}
function Fs(e, t, o, a) {
  e.addEventListener(t, o, a);
}
function Jd(e, t, o, a) {
  e.removeEventListener(t, o, a);
}
const _i = Symbol("_vei");
function Qd(e, t, o, a, l = null) {
  const r = e[_i] || (e[_i] = {}), c = r[t];
  if (a && c)
    c.value = a;
  else {
    const [u, d] = Yd(t);
    if (a) {
      const v = r[t] = em(
        a,
        l
      );
      Fs(e, u, v, d);
    } else c && (Jd(e, u, c, d), r[t] = void 0);
  }
}
const ki = /(?:Once|Passive|Capture)$/;
function Yd(e) {
  let t;
  if (ki.test(e)) {
    t = {};
    let a;
    for (; a = e.match(ki); )
      e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : oo(e.slice(2)), t];
}
let Ba = 0;
const Xd = /* @__PURE__ */ Promise.resolve(), Zd = () => Ba || (Xd.then(() => Ba = 0), Ba = Date.now());
function em(e, t) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    ws(
      tm(a, o.value),
      t,
      5,
      [a]
    );
  };
  return o.value = e, o.attached = Zd(), o;
}
function tm(e, t) {
  if (Ze(t)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, t.map(
      (a) => (l) => !l._stopped && a && a(l)
    );
  } else
    return t;
}
const bi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, sm = (e, t, o, a, l, r) => {
  const c = l === "svg";
  t === "class" ? Wd(e, a, c) : t === "style" ? qd(e, o, a) : ia(t) ? cl(t) || Qd(e, t, o, a, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : om(e, t, a, c)) ? (wi(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && yi(e, t, a, c, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !St(a)) ? wi(e, ms(t), a, r, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), yi(e, t, a, c));
};
function om(e, t, o, a) {
  if (a)
    return !!(t === "innerHTML" || t === "textContent" || t in e && bi(t) && tt(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return bi(t) && St(o) ? !1 : t in e;
}
const tc = /* @__PURE__ */ new WeakMap(), sc = /* @__PURE__ */ new WeakMap(), oa = Symbol("_moveCb"), $i = Symbol("_enterCb"), nm = (e) => (delete e.props.mode, e), am = /* @__PURE__ */ nm({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Lt({}, Xr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const o = Il(), a = _r();
    let l, r;
    return Ir(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!um(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(im), l.forEach(rm);
      const u = l.filter(cm);
      sl(o.vnode.el), u.forEach((d) => {
        const v = d.el, f = v.style;
        Cs(v, c), f.transform = f.webkitTransform = f.transitionDuration = "";
        const p = v[oa] = (w) => {
          w && w.target !== v || (!w || w.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", p), v[oa] = null, Js(v, c));
        };
        v.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const c = ut(e), u = Zr(c);
      let d = c.tag || W;
      if (l = [], r)
        for (let v = 0; v < r.length; v++) {
          const f = r[v];
          f.el && f.el instanceof Element && (l.push(f), po(
            f,
            wn(
              f,
              u,
              a,
              o
            )
          ), tc.set(f, {
            left: f.el.offsetLeft,
            top: f.el.offsetTop
          }));
        }
      r = t.default ? kl(t.default()) : [];
      for (let v = 0; v < r.length; v++) {
        const f = r[v];
        f.key != null && po(
          f,
          wn(f, u, a, o)
        );
      }
      return $(d, null, r);
    };
  }
}), lm = am;
function im(e) {
  const t = e.el;
  t[oa] && t[oa](), t[$i] && t[$i]();
}
function rm(e) {
  sc.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function cm(e) {
  const t = tc.get(e), o = sc.get(e), a = t.left - o.left, l = t.top - o.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function um(e, t, o) {
  const a = e.cloneNode(), l = e[Uo];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && a.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && a.classList.add(u)), a.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(a);
  const { hasTransform: c } = ec(a);
  return r.removeChild(a), c;
}
const so = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ze(t) ? (o) => Fn(t, o) : t;
};
function dm(e) {
  e.target.composing = !0;
}
function Ci(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ds = Symbol("_assign");
function xi(e, t, o) {
  return t && (e = e.trim()), o && (e = ua(e)), e;
}
const fn = {
  created(e, { modifiers: { lazy: t, trim: o, number: a } }, l) {
    e[ds] = so(l);
    const r = a || l.props && l.props.type === "number";
    Fs(e, t ? "change" : "input", (c) => {
      c.target.composing || e[ds](xi(e.value, o, r));
    }), (o || r) && Fs(e, "change", () => {
      e.value = xi(e.value, o, r);
    }), t || (Fs(e, "compositionstart", dm), Fs(e, "compositionend", Ci), Fs(e, "change", Ci));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: a, trim: l, number: r } }, c) {
    if (e[ds] = so(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? ua(e.value) : e.value, d = t ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (a && t === o || l && e.value.trim() === d) || (e.value = d));
  }
}, na = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, o) {
    e[ds] = so(o), Fs(e, "change", () => {
      const a = e._modelValue, l = Oo(e), r = e.checked, c = e[ds];
      if (Ze(a)) {
        const u = ml(a, l), d = u !== -1;
        if (r && !d)
          c(a.concat(l));
        else if (!r && d) {
          const v = [...a];
          v.splice(u, 1), c(v);
        }
      } else if (Ao(a)) {
        const u = new Set(a);
        r ? u.add(l) : u.delete(l), c(u);
      } else
        c(oc(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Si,
  beforeUpdate(e, t, o) {
    e[ds] = so(o), Si(e, t, o);
  }
};
function Si(e, { value: t, oldValue: o }, a) {
  e._modelValue = t;
  let l;
  if (Ze(t))
    l = ml(t, a.props.value) > -1;
  else if (Ao(t))
    l = t.has(a.props.value);
  else {
    if (t === o) return;
    l = vo(t, oc(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const jn = {
  created(e, { value: t }, o) {
    e.checked = vo(t, o.props.value), e[ds] = so(o), Fs(e, "change", () => {
      e[ds](Oo(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: o }, a) {
    e[ds] = so(a), t !== o && (e.checked = vo(t, a.props.value));
  }
}, Ro = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: o } }, a) {
    const l = Ao(t);
    Fs(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? ua(Oo(c)) : Oo(c)
      );
      e[ds](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, At(() => {
        e._assigning = !1;
      });
    }), e[ds] = so(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Ii(e, t);
  },
  beforeUpdate(e, t, o) {
    e[ds] = so(o);
  },
  updated(e, { value: t }) {
    e._assigning || Ii(e, t);
  }
};
function Ii(e, t) {
  const o = e.multiple, a = Ze(t);
  if (!(o && !a && !Ao(t))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = Oo(c);
      if (o)
        if (a) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = t.some((v) => String(v) === String(u)) : c.selected = ml(t, u) > -1;
        } else
          c.selected = t.has(u);
      else if (vo(Oo(c), t)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Oo(e) {
  return "_value" in e ? e._value : e.value;
}
function oc(e, t) {
  const o = t ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : t;
}
const mm = ["ctrl", "shift", "alt", "meta"], fm = {
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
  exact: (e, t) => mm.some((o) => e[`${o}Key`] && !t.includes(o))
}, vt = (e, t) => {
  const o = e._withMods || (e._withMods = {}), a = t.join(".");
  return o[a] || (o[a] = ((l, ...r) => {
    for (let c = 0; c < t.length; c++) {
      const u = fm[t[c]];
      if (u && u(l, t)) return;
    }
    return e(l, ...r);
  }));
}, vm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, gs = (e, t) => {
  const o = e._withKeys || (e._withKeys = {}), a = t.join(".");
  return o[a] || (o[a] = ((l) => {
    if (!("key" in l))
      return;
    const r = oo(l.key);
    if (t.some(
      (c) => c === r || vm[c] === r
    ))
      return e(l);
  }));
}, pm = /* @__PURE__ */ Lt({ patchProp: sm }, Ad);
let Ei;
function gm() {
  return Ei || (Ei = hd(pm));
}
const En = ((...e) => {
  const t = gm().createApp(...e), { mount: o } = t;
  return t.mount = (a) => {
    const l = ym(a);
    if (!l) return;
    const r = t._component;
    !tt(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, hm(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, t;
});
function hm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ym(e) {
  return St(e) ? document.querySelector(e) : e;
}
const KR = ho({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const JR = [
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
], QR = {
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
}, wm = [
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
], YR = [
  ...wm,
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
function Jo() {
  return !1;
}
function _m(e) {
  return !!(e && typeof e.fetchApi == "function");
}
function Vo() {
  var o, a, l;
  const e = window, t = [
    (o = e.app) == null ? void 0 : o.api,
    (l = (a = e.comfyAPI) == null ? void 0 : a.api) == null ? void 0 : l.api
  ];
  for (const r of t)
    if (_m(r))
      return r;
  return null;
}
async function eo(e, t) {
  const o = Vo();
  if (!o)
    throw new Error("ComfyUI API not available");
  return o.fetchApi(e, t);
}
function km(e = "comfygit-panel") {
  const t = Vo();
  return (t == null ? void 0 : t.clientId) ?? (t == null ? void 0 : t.initialClientId) ?? e;
}
class ol extends Error {
  constructor(o, a, l, r) {
    super(o);
    Rn(this, "status");
    Rn(this, "data");
    Rn(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = a, this.data = l, this.endpoint = r;
  }
}
function bm() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function ct() {
  const e = k(!1), t = k(null);
  async function o(z, $e) {
    const Ge = await eo(z, $e), mt = await Ge.text();
    if (!Ge.ok) {
      let Pt = {};
      if (mt)
        try {
          const Xe = JSON.parse(mt);
          Xe && typeof Xe == "object" && (Pt = Xe);
        } catch {
          Pt = { error: mt };
        }
      const ks = Pt.error || Pt.message || Pt.detail || Ge.statusText || `Request failed: ${Ge.status}`;
      throw new ol(String(ks), Ge.status, Pt, z);
    }
    if (mt)
      return JSON.parse(mt);
  }
  async function a(z) {
    return o(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(z)}`);
  }
  async function l(z, $e, Ge) {
    return o("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: z, email: $e, password: Ge })
    });
  }
  async function r(z, $e, Ge) {
    return o("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: z, email: $e, password: Ge })
    });
  }
  async function c(z, $e) {
    return o(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(z)}`, {
      headers: { Authorization: `Bearer ${$e}` }
    });
  }
  async function u(z, $e) {
    return o("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: z, refresh_token: $e || null })
    });
  }
  async function d(z, $e) {
    return o(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(z)}`, {
      headers: { Authorization: `Bearer ${$e}` }
    });
  }
  async function v(z, $e, Ge) {
    return o(
      `/v2/comfygit/cloud/environments/${encodeURIComponent($e)}/revisions?cloud_url=${encodeURIComponent(z)}`,
      {
        headers: { Authorization: `Bearer ${Ge}` }
      }
    );
  }
  async function f(z, $e, Ge, mt) {
    return o("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${$e}`
      },
      body: JSON.stringify({
        cloud_url: z,
        source_message: Ge || null,
        cloud_environment_id: mt || null
      })
    });
  }
  async function p(z = !1) {
    return o(z ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(z, $e = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: z, allow_issues: $e })
    });
  }
  async function g(z = 10, $e = 0) {
    return o(`/v2/comfygit/log?limit=${z}&offset=${$e}`);
  }
  async function _(z, $e = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(z)}&limit=${$e}`);
  }
  async function b(z) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: z })
    });
  }
  async function S() {
    return o("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function C() {
    return o("/v2/comfygit/deploy/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function I(z) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: z, force: !0 })
    });
  }
  async function E(z) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(z)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function M(z, $e) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(z)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: $e, force: !0 })
    });
  }
  async function N() {
    return o("/v2/comfygit/branches");
  }
  async function F(z) {
    return o(`/v2/comfygit/commit/${z}`);
  }
  async function V(z, $e = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: z, force: $e })
    });
  }
  async function D(z, $e = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: z, start_point: $e })
    });
  }
  async function q(z, $e = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: z, force: $e })
    });
  }
  async function ue(z, $e = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(z)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: $e })
    });
  }
  async function ie() {
    try {
      return await o("/v2/comfygit/environments");
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
  async function Y() {
    return (await ie()).environments;
  }
  async function me(z) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(z)}`);
    } catch {
      return null;
    }
  }
  async function oe(z, $e) {
    const Ge = { target_env: z };
    return $e && (Ge.workspace_path = $e), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ge)
    });
  }
  async function B() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function H(z) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function we() {
    return o("/v2/workspace/environments/create_status");
  }
  async function se(z = 100) {
    return o(`/v2/workspace/comfyui_releases?limit=${z}`);
  }
  async function de(z) {
    return o(`/v2/workspace/environments/${z}`, {
      method: "DELETE"
    });
  }
  async function ce(z = !1) {
    try {
      return o(z ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const $e = await p(z), Ge = [];
      return $e.workflows.new.forEach((mt) => {
        Ge.push({
          name: mt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: mt
        });
      }), $e.workflows.modified.forEach((mt) => {
        Ge.push({
          name: mt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: mt
        });
      }), $e.workflows.synced.forEach((mt) => {
        Ge.push({
          name: mt,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: mt
        });
      }), Ge;
    }
  }
  async function K(z) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(z)}/details`);
  }
  async function ee(z) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(z)}/contract`);
  }
  async function te(z, $e) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(z)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($e)
    });
  }
  async function Me(z) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(z)}/contract`, {
      method: "DELETE"
    });
  }
  async function Se(z) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(z)}/resolve`, {
      method: "POST"
    });
  }
  async function ze(z, $e, Ge) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(z)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: $e, install_models: Ge })
    });
  }
  async function Ne(z, $e, Ge) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(z)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: $e, importance: Ge })
    });
  }
  async function be() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function Ae() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function ge(z) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(z)}`);
  }
  async function ve(z) {
    return o(`/v2/workspace/models/${encodeURIComponent(z)}/source-candidates`);
  }
  async function T(z) {
    return o(`/v2/workspace/models/${encodeURIComponent(z)}/hashes`, {
      method: "POST"
    });
  }
  async function A() {
    return o("/v2/workspace/models/workflow-source-candidates");
  }
  async function le(z) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: z })
    });
  }
  async function Ce(z, $e) {
    return o(`/v2/workspace/models/${z}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: $e })
    });
  }
  async function Ee(z, $e) {
    return o(`/v2/workspace/models/${z}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: $e })
    });
  }
  async function ke(z) {
    return o(`/v2/workspace/models/${z}`, {
      method: "DELETE"
    });
  }
  async function X(z) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function G() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function fe() {
    return o("/v2/workspace/models/directory");
  }
  async function he(z) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: z })
    });
  }
  async function je(z) {
    const $e = new URLSearchParams({ url: z });
    return o(`/v2/workspace/huggingface/repo-info?${$e}`);
  }
  async function We() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function _e(z, $e = 10) {
    const Ge = new URLSearchParams({ query: z, limit: String($e) });
    return o(`/v2/workspace/huggingface/search?${Ge}`);
  }
  async function Z(z) {
    try {
      const $e = z ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(z)}` : "/v2/comfygit/config";
      return o($e);
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
  async function Fe(z, $e) {
    const Ge = $e ? `/v2/comfygit/config?workspace_path=${encodeURIComponent($e)}` : "/v2/comfygit/config";
    return o(Ge, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function De(z, $e) {
    try {
      const Ge = new URLSearchParams();
      return z && Ge.append("level", z), $e && Ge.append("lines", $e.toString()), o(`/v2/comfygit/debug/logs?${Ge}`);
    } catch {
      return [];
    }
  }
  async function He(z, $e) {
    try {
      const Ge = new URLSearchParams();
      return z && Ge.append("level", z), $e && Ge.append("lines", $e.toString()), o(`/v2/workspace/debug/logs?${Ge}`);
    } catch {
      return [];
    }
  }
  async function Ve() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function Oe() {
    return o("/v2/comfygit/debug/manifest");
  }
  async function Qe() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function pt(z, $e) {
    try {
      const Ge = new URLSearchParams();
      return z && Ge.append("level", z), $e && Ge.append("lines", $e.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Ge}`);
    } catch {
      return [];
    }
  }
  async function Q() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function pe(z) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: z })
    });
  }
  async function P() {
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
  async function U(z) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(z)}/track-dev`, {
      method: "POST"
    });
  }
  async function J(z) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(z)}/install`, {
      method: "POST"
    });
  }
  async function Te(z, $e) {
    var Ul, Ol, Al, zl;
    const Ge = bm(), mt = km(), Pt = {
      id: z.id,
      version: z.version || z.selected_version || "latest",
      selected_version: z.selected_version || "latest",
      mode: z.mode || "remote",
      channel: z.channel || "default"
    };
    z.install_source && (Pt.install_source = z.install_source), z.install_source === "git" && z.repository && (Pt.repository = z.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Pt,
        ui_id: Ge,
        client_id: mt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", Ge, "for package:", z.id), $e != null && $e.beforeQueueStart && await $e.beforeQueueStart(Ge), await o("/v2/manager/queue/start", {
      method: "POST"
    });
    const Xe = await o("/v2/manager/queue/history"), Kt = (Ul = Xe == null ? void 0 : Xe.history) == null ? void 0 : Ul[Ge];
    if ((Kt == null ? void 0 : Kt.result) === "error" || ((Ol = Kt == null ? void 0 : Kt.status) == null ? void 0 : Ol.status_str) === "error") {
      const zc = ((zl = (Al = Kt.status) == null ? void 0 : Al.messages) == null ? void 0 : zl[0]) || `Failed to install ${z.id}`;
      throw new ol(zc, 500, Kt.status || {}, "/v2/manager/queue/start");
    }
    return {
      ui_id: Ge,
      result: Kt == null ? void 0 : Kt.result,
      status: Kt == null ? void 0 : Kt.status
    };
  }
  async function Le(z) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(z)}/update`, {
      method: "POST"
    });
  }
  async function Ke(z, $e) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(z)}/criticality`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ criticality: $e })
    });
  }
  async function Pe(z) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function Ye() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function ot(z, $e) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: z, url: $e })
    });
  }
  async function It(z) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function Bt(z, $e, Ge) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(z)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: $e, push_url: Ge })
    });
  }
  async function Ct(z, $e) {
    const Ge = {};
    return $e && (Ge["X-Git-Auth-Token"] = $e), o(`/v2/comfygit/remotes/${encodeURIComponent(z)}/fetch`, {
      method: "POST",
      headers: Ge
    });
  }
  async function Mt(z) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(z)}/status`);
    } catch {
      return null;
    }
  }
  async function os(z = "skip", $e = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: z,
        remove_extra_nodes: $e
      })
    });
  }
  async function Et(z, $e) {
    const Ge = $e ? `/v2/comfygit/remotes/${encodeURIComponent(z)}/pull-preview?branch=${encodeURIComponent($e)}` : `/v2/comfygit/remotes/${encodeURIComponent(z)}/pull-preview`;
    return o(Ge);
  }
  async function js(z, $e = {}) {
    const Ge = { "Content-Type": "application/json" };
    return $e.authToken && (Ge["X-Git-Auth-Token"] = $e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(z)}/pull`, {
      method: "POST",
      headers: Ge,
      body: JSON.stringify({
        model_strategy: $e.modelStrategy || "skip",
        force: $e.force || !1,
        resolutions: $e.resolutions
      })
    });
  }
  async function Ls(z, $e) {
    const Ge = $e ? `/v2/comfygit/remotes/${encodeURIComponent(z)}/push-preview?branch=${encodeURIComponent($e)}` : `/v2/comfygit/remotes/${encodeURIComponent(z)}/push-preview`;
    return o(Ge);
  }
  async function Hs(z, $e = {}) {
    const Ge = { "Content-Type": "application/json" };
    return $e.authToken && (Ge["X-Git-Auth-Token"] = $e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(z)}/push`, {
      method: "POST",
      headers: Ge,
      body: JSON.stringify({ force: $e.force || !1 })
    });
  }
  async function qs(z, $e) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(z)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: $e })
    });
  }
  async function Wo(z) {
    const $e = {
      success: 0,
      failed: []
    };
    for (const Ge of z)
      try {
        await Se(Ge), $e.success++;
      } catch (mt) {
        $e.failed.push({
          name: Ge,
          error: mt instanceof Error ? mt.message : "Unknown error"
        });
      }
    return $e;
  }
  async function Go(z) {
    const $e = new FormData();
    $e.append("file", z);
    const Ge = await eo("/v2/workspace/import/preview", {
      method: "POST",
      body: $e
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ge.ok) {
      const mt = await Ge.json().catch(() => ({}));
      throw new Error(mt.error || `Preview failed: ${Ge.status}`);
    }
    return Ge.json();
  }
  async function Ds(z) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(z)}`
    );
  }
  async function ae(z, $e, Ge, mt) {
    const Pt = new FormData();
    Pt.append("file", z), Pt.append("name", $e), Pt.append("model_strategy", Ge), Pt.append("torch_backend", mt);
    const ks = await eo("/v2/workspace/import", {
      method: "POST",
      body: Pt
    });
    if (!ks.ok) {
      const Xe = await ks.json().catch(() => ({}));
      throw new Error(Xe.message || Xe.error || `Import failed: ${ks.status}`);
    }
    return ks.json();
  }
  async function O() {
    return o("/v2/workspace/import/status");
  }
  async function ne(z) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: z })
    });
  }
  async function Je(z, $e, Ge, mt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: z,
        name: $e,
        model_strategy: Ge,
        torch_backend: mt
      })
    });
  }
  async function it() {
    return o("/v2/setup/status");
  }
  async function Dt() {
    return o("/v2/comfygit/update-check");
  }
  async function vs() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function nt(z) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function es() {
    return o("/v2/setup/initialize_status");
  }
  async function xt(z) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function jo() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function yo() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function wo(z, $e) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: z, save_key: $e })
    });
  }
  async function _a() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function Tn(z) {
    const $e = z ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(z)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o($e);
  }
  async function ka(z) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function ba() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function $a(z) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function Ca(z) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}/stop`, {
      method: "POST"
    });
  }
  async function xa(z) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}/start`, {
      method: "POST"
    });
  }
  async function Sa(z) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}/status`);
  }
  async function Ia(z) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: z })
    });
  }
  async function Ea(z = !1) {
    return o(z ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Mn() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Ta() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function Ma(z) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function Pn(z) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function re(z) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function j() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function qe(z) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/info`);
  }
  async function et(z) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances`);
  }
  async function dt(z, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($e)
    });
  }
  async function yt(z, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances/${encodeURIComponent($e)}/start`, {
      method: "POST"
    });
  }
  async function Ut(z, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances/${encodeURIComponent($e)}/stop`, {
      method: "POST"
    });
  }
  async function is(z, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances/${encodeURIComponent($e)}`, {
      method: "DELETE"
    });
  }
  async function Ho(z) {
    return o("/v2/comfygit/deploy/test-git-auth", {
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
    getBranchHistory: _,
    exportEnv: b,
    validateExport: S,
    validateDeploy: C,
    exportEnvWithForce: I,
    validateEnvironmentExport: E,
    exportEnvironmentWithForce: M,
    // Git Operations
    getBranches: N,
    getCommitDetail: F,
    checkout: V,
    createBranch: D,
    switchBranch: q,
    deleteBranch: ue,
    // Environment Management
    listEnvironments: ie,
    getEnvironments: Y,
    getEnvironmentDetails: me,
    switchEnvironment: oe,
    getSwitchProgress: B,
    createEnvironment: H,
    getCreateProgress: we,
    getComfyUIReleases: se,
    deleteEnvironment: de,
    // Workflow Management
    getWorkflows: ce,
    getWorkflowDetails: K,
    getWorkflowContract: ee,
    saveWorkflowContract: te,
    deleteWorkflowContract: Me,
    resolveWorkflow: Se,
    installWorkflowDeps: ze,
    setModelImportance: Ne,
    // Model Management
    getEnvironmentModels: be,
    getWorkspaceModels: Ae,
    getModelDetails: ge,
    getModelSourceCandidates: ve,
    computeModelHashes: T,
    getWorkflowSourceCandidates: A,
    openFileLocation: le,
    addModelSource: Ce,
    removeModelSource: Ee,
    deleteModel: ke,
    downloadModel: X,
    scanWorkspaceModels: G,
    getModelsDirectory: fe,
    setModelsDirectory: he,
    getHuggingFaceRepoInfo: je,
    getModelsSubdirectories: We,
    searchHuggingFaceRepos: _e,
    // Settings
    getConfig: Z,
    updateConfig: Fe,
    // Cloud Auth
    getCloudAuthConfig: a,
    loginToCloud: l,
    signupToCloud: r,
    getCloudMe: c,
    logoutFromCloud: u,
    getCloudEnvironments: d,
    getCloudEnvironmentRevisions: v,
    publishCurrentEnvironmentToCloud: f,
    // Debug/Logs
    getEnvironmentLogs: De,
    getEnvironmentManifest: Oe,
    getWorkspaceLogs: He,
    getEnvironmentLogPath: Ve,
    getWorkspaceLogPath: Qe,
    getOrchestratorLogs: pt,
    getOrchestratorLogPath: Q,
    openFile: pe,
    // Node Management
    getNodes: P,
    trackNodeAsDev: U,
    installNode: J,
    queueNodeInstall: Te,
    updateNode: Le,
    updateNodeCriticality: Ke,
    uninstallNode: Pe,
    // Git Remotes
    getRemotes: Ye,
    addRemote: ot,
    removeRemote: It,
    updateRemoteUrl: Bt,
    fetchRemote: Ct,
    getRemoteSyncStatus: Mt,
    // Push/Pull
    getPullPreview: Et,
    pullFromRemote: js,
    getPushPreview: Ls,
    pushToRemote: Hs,
    validateMerge: qs,
    // Environment Sync
    syncEnvironmentManually: os,
    // Workflow Repair
    repairWorkflowModels: Wo,
    // Import Operations
    previewTarballImport: Go,
    previewGitImport: ne,
    validateEnvironmentName: Ds,
    executeImport: ae,
    executeGitImport: Je,
    getImportProgress: O,
    // First-Time Setup
    getSetupStatus: it,
    // Manager Update Notice
    getUpdateCheck: Dt,
    updateManager: vs,
    initializeWorkspace: nt,
    getInitializeProgress: es,
    validatePath: xt,
    // Deploy Operations
    getDeploySummary: jo,
    getDataCenters: yo,
    testRunPodConnection: wo,
    getNetworkVolumes: _a,
    getRunPodGpuTypes: Tn,
    deployToRunPod: ka,
    getRunPodPods: ba,
    terminateRunPodPod: $a,
    stopRunPodPod: Ca,
    startRunPodPod: xa,
    getDeploymentStatus: Sa,
    exportDeployPackage: Ia,
    getStoredRunPodKey: Ea,
    clearRunPodKey: Mn,
    // Custom Worker Operations
    getCustomWorkers: Ta,
    addCustomWorker: Ma,
    removeCustomWorker: Pn,
    testWorkerConnection: re,
    scanForWorkers: j,
    getWorkerSystemInfo: qe,
    getWorkerInstances: et,
    deployToWorker: dt,
    startWorkerInstance: yt,
    stopWorkerInstance: Ut,
    terminateWorkerInstance: is,
    // Git Authentication
    testGitAuth: Ho
  };
}
const $m = { class: "panel-layout" }, Cm = {
  key: 0,
  class: "panel-layout-header"
}, xm = {
  key: 1,
  class: "panel-layout-search"
}, Sm = { class: "panel-layout-content" }, Im = {
  key: 2,
  class: "panel-layout-footer"
}, Em = /* @__PURE__ */ xe({
  __name: "PanelLayout",
  setup(e) {
    return (t, o) => (n(), i("div", $m, [
      t.$slots.header ? (n(), i("div", Cm, [
        at(t.$slots, "header", {}, void 0)
      ])) : y("", !0),
      t.$slots.search ? (n(), i("div", xm, [
        at(t.$slots, "search", {}, void 0)
      ])) : y("", !0),
      s("div", Sm, [
        at(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (n(), i("div", Im, [
        at(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Ie = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of t)
    o[a] = l;
  return o;
}, Ft = /* @__PURE__ */ Ie(Em, [["__scopeId", "data-v-21565df9"]]), Tm = {
  key: 0,
  class: "panel-title-prefix"
}, Mm = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Pm = /* @__PURE__ */ xe({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (t, o) => (n(), L(bl(`h${e.level}`), {
      class: Be(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (n(), i("span", Tm, m(e.prefix), 1)) : (n(), i("span", Mm)),
        at(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Rm = /* @__PURE__ */ Ie(Pm, [["__scopeId", "data-v-c3875efc"]]), Lm = ["title"], Dm = ["width", "height"], Nm = /* @__PURE__ */ xe({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (n(), i("button", {
      class: "info-button",
      title: e.title,
      onClick: o[0] || (o[0] = (a) => t.$emit("click"))
    }, [
      (n(), i("svg", {
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
      ])], 8, Dm))
    ], 8, Lm));
  }
}), nc = /* @__PURE__ */ Ie(Nm, [["__scopeId", "data-v-6fc7f16d"]]), Um = { class: "header-left" }, Om = {
  key: 0,
  class: "header-actions"
}, Am = /* @__PURE__ */ xe({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (t, o) => (n(), i("div", {
      class: Be(["panel-header", { stacked: e.stacked }])
    }, [
      s("div", Um, [
        $(Rm, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            x(m(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), L(nc, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => t.$emit("info-click"))
        })) : y("", !0)
      ]),
      t.$slots.actions ? (n(), i("div", Om, [
        at(t.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Vt = /* @__PURE__ */ Ie(Am, [["__scopeId", "data-v-55a62cd6"]]), zm = {
  key: 0,
  class: "section-title-count"
}, Fm = {
  key: 1,
  class: "section-title-icon"
}, Vm = /* @__PURE__ */ xe({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (n(), L(bl(`h${e.level}`), {
      class: Be(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && t.$emit("click"))
    }, {
      default: h(() => [
        at(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", zm, "(" + m(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (n(), i("span", Fm, m(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), cs = /* @__PURE__ */ Ie(Vm, [["__scopeId", "data-v-559361eb"]]), Bm = { class: "status-grid" }, Wm = { class: "status-grid__columns" }, Gm = { class: "status-grid__column" }, jm = { class: "status-grid__title" }, Hm = { class: "status-grid__column status-grid__column--right" }, qm = { class: "status-grid__title" }, Km = {
  key: 0,
  class: "status-grid__footer"
}, Jm = /* @__PURE__ */ xe({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, o) => (n(), i("div", Bm, [
      s("div", Wm, [
        s("div", Gm, [
          s("h4", jm, m(e.leftTitle), 1),
          at(t.$slots, "left", {}, void 0)
        ]),
        s("div", Hm, [
          s("h4", qm, m(e.rightTitle), 1),
          at(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (n(), i("div", Km, [
        at(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Qm = /* @__PURE__ */ Ie(Jm, [["__scopeId", "data-v-73b7ba3f"]]), Ym = {
  key: 0,
  class: "status-item__icon"
}, Xm = {
  key: 1,
  class: "status-item__count"
}, Zm = { class: "status-item__label" }, ef = /* @__PURE__ */ xe({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = R(() => `status-item--${t.variant}`);
    return (a, l) => (n(), i("div", {
      class: Be(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (n(), i("span", Ym, m(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (n(), i("span", Xm, m(e.count), 1)) : y("", !0),
      s("span", Zm, m(e.label), 1)
    ], 2));
  }
}), $s = /* @__PURE__ */ Ie(ef, [["__scopeId", "data-v-6f929183"]]), tf = { class: "issue-card__header" }, sf = { class: "issue-card__icon" }, of = { class: "issue-card__title" }, nf = {
  key: 0,
  class: "issue-card__content"
}, af = {
  key: 0,
  class: "issue-card__description"
}, lf = {
  key: 1,
  class: "issue-card__items"
}, rf = {
  key: 2,
  class: "issue-card__actions"
}, cf = /* @__PURE__ */ xe({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const t = e, o = R(() => `issue-card--${t.severity}`);
    return (a, l) => (n(), i("div", {
      class: Be(["issue-card", o.value])
    }, [
      s("div", tf, [
        s("span", sf, m(e.icon), 1),
        s("h4", of, m(e.title), 1)
      ]),
      a.$slots.default || e.description ? (n(), i("div", nf, [
        e.description ? (n(), i("p", af, m(e.description), 1)) : y("", !0),
        at(a.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (n(), i("div", lf, [
        (n(!0), i(W, null, ye(e.items, (r, c) => (n(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, m(r), 1)
        ]))), 128))
      ])) : y("", !0),
      a.$slots.actions ? (n(), i("div", rf, [
        at(a.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), ns = /* @__PURE__ */ Ie(cf, [["__scopeId", "data-v-df6aa348"]]), uf = ["type", "disabled"], df = {
  key: 0,
  class: "spinner"
}, mf = /* @__PURE__ */ xe({
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
    return (t, o) => (n(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Be(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => t.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", df)) : y("", !0),
      e.loading ? y("", !0) : at(t.$slots, "default", { key: 1 }, void 0)
    ], 10, uf));
  }
}), Re = /* @__PURE__ */ Ie(mf, [["__scopeId", "data-v-772abe47"]]), ff = /* @__PURE__ */ xe({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (t, o) => (n(), i("span", {
      class: Be(["detail-label"]),
      style: Nt({ minWidth: e.minWidth })
    }, [
      at(t.$slots, "default", {}, void 0)
    ], 4));
  }
}), Hn = /* @__PURE__ */ Ie(ff, [["__scopeId", "data-v-75e9eeb8"]]), vf = /* @__PURE__ */ xe({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (n(), i("span", {
      class: Be(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      at(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), nl = /* @__PURE__ */ Ie(vf, [["__scopeId", "data-v-2f186e4c"]]), pf = { class: "detail-row" }, gf = /* @__PURE__ */ xe({
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
    return (t, o) => (n(), i("div", pf, [
      $(Hn, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          x(m(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (n(), L(nl, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          x(m(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : at(t.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), kt = /* @__PURE__ */ Ie(gf, [["__scopeId", "data-v-ef15664a"]]), hf = { class: "modal-header" }, yf = { class: "modal-body" }, wf = { class: "status-section" }, _f = {
  key: 0,
  class: "status-section"
}, kf = { class: "section-header-row" }, bf = {
  key: 0,
  class: "workflow-group"
}, $f = { class: "workflow-group-header" }, Cf = { class: "workflow-group-title" }, xf = { class: "workflow-list" }, Sf = { class: "workflow-name" }, If = { class: "workflow-issue" }, Ef = {
  key: 1,
  class: "workflow-group"
}, Tf = { class: "workflow-group-header" }, Mf = { class: "workflow-group-title" }, Pf = { class: "workflow-list" }, Rf = { class: "workflow-name" }, Lf = { class: "workflow-issue" }, Df = {
  key: 2,
  class: "workflow-group"
}, Nf = { class: "workflow-group-header" }, Uf = { class: "workflow-group-title" }, Of = { class: "workflow-list" }, Af = { class: "workflow-name" }, zf = {
  key: 3,
  class: "workflow-group"
}, Ff = { class: "workflow-group-header" }, Vf = { class: "workflow-group-title" }, Bf = { class: "workflow-list" }, Wf = { class: "workflow-name" }, Gf = {
  key: 4,
  class: "workflow-group"
}, jf = { class: "workflow-group-header" }, Hf = { class: "workflow-group-title" }, qf = { class: "workflow-list" }, Kf = { class: "workflow-name" }, Jf = {
  key: 5,
  class: "workflow-group"
}, Qf = { class: "workflow-group-title" }, Yf = { class: "expand-icon" }, Xf = {
  key: 0,
  class: "workflow-list"
}, Zf = { class: "workflow-name" }, ev = {
  key: 1,
  class: "status-section"
}, tv = {
  key: 0,
  class: "change-group"
}, sv = { class: "change-group-header" }, ov = { class: "change-group-title" }, nv = { class: "change-list" }, av = { class: "node-name" }, lv = {
  key: 0,
  class: "dev-badge"
}, iv = {
  key: 1,
  class: "change-group"
}, rv = { class: "change-group-header" }, cv = { class: "change-group-title" }, uv = { class: "change-list" }, dv = { class: "node-name" }, mv = {
  key: 0,
  class: "dev-badge"
}, fv = {
  key: 2,
  class: "change-group"
}, vv = { class: "change-list" }, pv = { class: "change-item" }, gv = { class: "node-name" }, hv = {
  key: 3,
  class: "change-group"
}, yv = {
  key: 2,
  class: "status-section"
}, wv = { class: "section-header-row" }, _v = {
  key: 0,
  class: "drift-item"
}, kv = { class: "drift-list" }, bv = {
  key: 0,
  class: "drift-list-more"
}, $v = {
  key: 1,
  class: "drift-item"
}, Cv = { class: "drift-list" }, xv = {
  key: 0,
  class: "drift-list-more"
}, Sv = {
  key: 2,
  class: "drift-item"
}, Iv = { class: "drift-list" }, Ev = { class: "version-actual" }, Tv = { class: "version-expected" }, Mv = {
  key: 0,
  class: "drift-list-more"
}, Pv = {
  key: 3,
  class: "drift-item"
}, Rv = { class: "repair-action" }, Lv = {
  key: 3,
  class: "status-section"
}, Dv = { class: "info-box" }, Nv = { class: "drift-list" }, Uv = {
  key: 0,
  class: "drift-list-more"
}, Ov = {
  key: 4,
  class: "status-section"
}, Av = { class: "warning-box" }, zv = {
  key: 5,
  class: "empty-state-inline"
}, Fv = { class: "modal-actions" }, Vv = /* @__PURE__ */ xe({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const t = e, o = k(!1);
    lt(() => {
      console.log("StatusDetailModal mounted, initial show value:", t.show);
    }), gt(() => t.show, (w, g) => {
      console.log("StatusDetailModal show prop changed from", g, "to", w);
    }, { immediate: !0 });
    const a = R(() => {
      var w, g, _;
      return ((_ = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : _.filter(
        (b) => b.status === "broken" && b.sync_state === "synced"
      )) || [];
    }), l = R(() => {
      var w, g, _;
      return ((_ = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : _.filter(
        (b) => b.status === "broken" && b.sync_state !== "synced"
      )) || [];
    }), r = R(() => {
      var w, g, _;
      return ((_ = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.synced) == null ? void 0 : _.filter((b) => {
        var C, I, E;
        const S = (E = (I = (C = t.status) == null ? void 0 : C.workflows) == null ? void 0 : I.analyzed) == null ? void 0 : E.find((M) => M.name === b);
        return !S || S.status !== "broken";
      })) || [];
    }), c = R(() => {
      var w, g, _, b, S;
      return (w = t.status) != null && w.workflows ? (((g = t.status.workflows.new) == null ? void 0 : g.length) ?? 0) > 0 || (((_ = t.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((b = t.status.workflows.deleted) == null ? void 0 : b.length) ?? 0) > 0 || (((S = t.status.workflows.synced) == null ? void 0 : S.length) ?? 0) > 0 : !1;
    }), u = R(() => {
      var g, _, b;
      const w = (g = t.status) == null ? void 0 : g.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((b = w.nodes_removed) == null ? void 0 : b.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = R(() => {
      var w, g, _, b, S, C;
      return !c.value && !u.value && ((g = (w = t.status) == null ? void 0 : w.comparison) == null ? void 0 : g.is_synced) && (((_ = t.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((C = (S = (b = t.status) == null ? void 0 : b.comparison) == null ? void 0 : S.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), v = R(() => {
      var g, _;
      const w = (_ = (g = t.status) == null ? void 0 : g.git_changes) == null ? void 0 : _.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function f(w) {
      return typeof w == "string" ? w : w.name;
    }
    function p(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, g) => {
      var _, b, S, C, I, E, M, N, F, V, D, q, ue, ie, Y, me, oe, B, H, we, se, de;
      return n(), L(Zt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: g[7] || (g[7] = (ce) => w.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: g[6] || (g[6] = vt(() => {
            }, ["stop"]))
          }, [
            s("div", hf, [
              g[8] || (g[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: g[0] || (g[0] = (ce) => w.$emit("close"))
              }, "✕")
            ]),
            s("div", yf, [
              s("div", wf, [
                $(cs, { level: "4" }, {
                  default: h(() => [...g[9] || (g[9] = [
                    x("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                $(kt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (n(), i("div", _f, [
                s("div", kf, [
                  $(cs, { level: "4" }, {
                    default: h(() => [...g[10] || (g[10] = [
                      x("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[1] || (g[1] = (ce) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", bf, [
                  s("div", $f, [
                    g[11] || (g[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", Cf, "BROKEN (COMMITTED) (" + m(a.value.length) + ")", 1)
                  ]),
                  s("div", xf, [
                    (n(!0), i(W, null, ye(a.value, (ce) => (n(), i("div", {
                      key: ce.name,
                      class: "workflow-item"
                    }, [
                      s("span", Sf, m(ce.name), 1),
                      s("span", If, m(ce.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (n(), i("div", Ef, [
                  s("div", Tf, [
                    g[12] || (g[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", Mf, "BROKEN (UNCOMMITTED) (" + m(l.value.length) + ")", 1)
                  ]),
                  s("div", Pf, [
                    (n(!0), i(W, null, ye(l.value, (ce) => (n(), i("div", {
                      key: ce.name,
                      class: "workflow-item"
                    }, [
                      s("span", Rf, m(ce.name), 1),
                      s("span", Lf, m(ce.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (b = (_ = e.status.workflows) == null ? void 0 : _.new) != null && b.length ? (n(), i("div", Df, [
                  s("div", Nf, [
                    g[13] || (g[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", Uf, "NEW (" + m(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", Of, [
                    (n(!0), i(W, null, ye(e.status.workflows.new, (ce) => (n(), i("div", {
                      key: ce,
                      class: "workflow-item"
                    }, [
                      s("span", Af, m(ce), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (S = e.status.workflows) == null ? void 0 : S.modified) != null && C.length ? (n(), i("div", zf, [
                  s("div", Ff, [
                    g[14] || (g[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", Vf, "MODIFIED (" + m(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", Bf, [
                    (n(!0), i(W, null, ye(e.status.workflows.modified, (ce) => (n(), i("div", {
                      key: ce,
                      class: "workflow-item"
                    }, [
                      s("span", Wf, m(ce), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = (I = e.status.workflows) == null ? void 0 : I.deleted) != null && E.length ? (n(), i("div", Gf, [
                  s("div", jf, [
                    g[15] || (g[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", Hf, "DELETED (" + m(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", qf, [
                    (n(!0), i(W, null, ye(e.status.workflows.deleted, (ce) => (n(), i("div", {
                      key: ce,
                      class: "workflow-item"
                    }, [
                      s("span", Kf, m(ce), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (n(), i("div", Jf, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: g[2] || (g[2] = (ce) => o.value = !o.value)
                  }, [
                    g[16] || (g[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", Qf, "SYNCED (" + m(r.value.length) + ")", 1),
                    s("span", Yf, m(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", Xf, [
                    (n(!0), i(W, null, ye(r.value, (ce) => (n(), i("div", {
                      key: ce,
                      class: "workflow-item"
                    }, [
                      s("span", Zf, m(ce), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (n(), i("div", ev, [
                $(cs, { level: "4" }, {
                  default: h(() => [...g[17] || (g[17] = [
                    x("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (N = (M = e.status.git_changes) == null ? void 0 : M.nodes_added) != null && N.length ? (n(), i("div", tv, [
                  s("div", sv, [
                    g[18] || (g[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", ov, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", nv, [
                    (n(!0), i(W, null, ye(e.status.git_changes.nodes_added, (ce) => (n(), i("div", {
                      key: f(ce),
                      class: "change-item"
                    }, [
                      s("span", av, m(f(ce)), 1),
                      p(ce) ? (n(), i("span", lv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (V = (F = e.status.git_changes) == null ? void 0 : F.nodes_removed) != null && V.length ? (n(), i("div", iv, [
                  s("div", rv, [
                    g[19] || (g[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", cv, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", uv, [
                    (n(!0), i(W, null, ye(e.status.git_changes.nodes_removed, (ce) => (n(), i("div", {
                      key: f(ce),
                      class: "change-item"
                    }, [
                      s("span", dv, m(f(ce)), 1),
                      p(ce) ? (n(), i("span", mv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (D = e.status.git_changes) != null && D.workflow_changes ? (n(), i("div", fv, [
                  g[20] || (g[20] = s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  s("div", vv, [
                    s("div", pv, [
                      s("span", gv, m(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (q = e.status.git_changes) != null && q.has_other_changes ? (n(), i("div", hv, [...g[21] || (g[21] = [
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
              (ue = e.status.comparison) != null && ue.is_synced ? y("", !0) : (n(), i("div", yv, [
                s("div", wv, [
                  $(cs, { level: "4" }, {
                    default: h(() => [...g[22] || (g[22] = [
                      x("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[3] || (g[3] = (ce) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                g[26] || (g[26] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("span", null, "Environment needs repair")
                ], -1)),
                (Y = (ie = e.status.comparison) == null ? void 0 : ie.missing_nodes) != null && Y.length ? (n(), i("div", _v, [
                  $(kt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", kv, [
                    (n(!0), i(W, null, ye(e.status.comparison.missing_nodes.slice(0, 10), (ce) => (n(), i("div", {
                      key: ce,
                      class: "drift-list-item"
                    }, " - " + m(ce), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", bv, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (oe = (me = e.status.comparison) == null ? void 0 : me.extra_nodes) != null && oe.length ? (n(), i("div", $v, [
                  $(kt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", Cv, [
                    (n(!0), i(W, null, ye(e.status.comparison.extra_nodes.slice(0, 10), (ce) => (n(), i("div", {
                      key: ce,
                      class: "drift-list-item"
                    }, " - " + m(ce), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", xv, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (H = (B = e.status.comparison) == null ? void 0 : B.version_mismatches) != null && H.length ? (n(), i("div", Sv, [
                  $(kt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", Iv, [
                    (n(!0), i(W, null, ye(e.status.comparison.version_mismatches.slice(0, 10), (ce) => (n(), i("div", {
                      key: ce.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      x(m(ce.name) + ": ", 1),
                      s("span", Ev, m(ce.actual), 1),
                      g[23] || (g[23] = x(" → ", -1)),
                      s("span", Tv, m(ce.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", Mv, " ... and " + m(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((we = e.status.comparison) == null ? void 0 : we.packages_in_sync) === !1 ? (n(), i("div", Pv, [
                  $(kt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                s("div", Rv, [
                  $(Re, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: g[4] || (g[4] = (ce) => w.$emit("repair"))
                  }, {
                    default: h(() => [...g[24] || (g[24] = [
                      x(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  g[25] || (g[25] = s("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (de = (se = e.status.comparison) == null ? void 0 : se.disabled_nodes) != null && de.length ? (n(), i("div", Lv, [
                $(cs, { level: "4" }, {
                  default: h(() => [...g[27] || (g[27] = [
                    x("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", Dv, [
                  g[28] || (g[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, m(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", Nv, [
                  (n(!0), i(W, null, ye(e.status.comparison.disabled_nodes.slice(0, 10), (ce) => (n(), i("div", {
                    key: ce,
                    class: "drift-list-item"
                  }, " • " + m(ce), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (n(), i("div", Uv, " ... and " + m(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (n(), i("div", Ov, [
                $(cs, { level: "4" }, {
                  default: h(() => [...g[29] || (g[29] = [
                    x("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", Av, [
                  g[30] || (g[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                g[31] || (g[31] = s("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (n(), i("div", zv, [...g[32] || (g[32] = [
                s("div", { class: "empty-icon" }, "✅", -1),
                s("div", { class: "empty-message" }, [
                  s("strong", null, "Environment is clean!"),
                  s("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            s("div", Fv, [
              $(Re, {
                variant: "secondary",
                onClick: g[5] || (g[5] = (ce) => w.$emit("close"))
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
}), Bv = /* @__PURE__ */ Ie(Vv, [["__scopeId", "data-v-e2b37122"]]), Wv = { class: "base-modal-header" }, Gv = {
  key: 0,
  class: "base-modal-title"
}, jv = { class: "base-modal-body" }, Hv = {
  key: 0,
  class: "base-modal-loading"
}, qv = {
  key: 1,
  class: "base-modal-error"
}, Kv = {
  key: 0,
  class: "base-modal-footer"
}, Jv = /* @__PURE__ */ xe({
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
    const o = e, a = t;
    function l() {
      o.closeOnOverlayClick && a("close");
    }
    function r(c) {
      c.key === "Escape" && o.showCloseButton && a("close");
    }
    return lt(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), zo(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (n(), L(Zt, { to: "body" }, [
      s("div", {
        class: "base-modal-overlay",
        style: Nt({ zIndex: e.overlayZIndex }),
        onClick: l
      }, [
        s("div", {
          class: Be(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = vt(() => {
          }, ["stop"]))
        }, [
          s("div", Wv, [
            at(c.$slots, "header", {}, () => [
              e.title ? (n(), i("h3", Gv, m(e.title), 1)) : y("", !0)
            ]),
            e.showCloseButton ? (n(), i("button", {
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
          s("div", jv, [
            e.loading ? (n(), i("div", Hv, "Loading...")) : e.error ? (n(), i("div", qv, m(e.error), 1)) : at(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (n(), i("div", Kv, [
            at(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ], 4)
    ]));
  }
}), $t = /* @__PURE__ */ Ie(Jv, [["__scopeId", "data-v-06a4be14"]]), Qv = ["type", "disabled"], Yv = {
  key: 0,
  class: "spinner"
}, Xv = /* @__PURE__ */ xe({
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
    return (t, o) => (n(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Be(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => t.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", Yv)) : y("", !0),
      at(t.$slots, "default", {}, void 0)
    ], 10, Qv));
  }
}), Ue = /* @__PURE__ */ Ie(Xv, [["__scopeId", "data-v-f3452606"]]), Zv = ["type", "value", "placeholder", "disabled"], ep = {
  key: 0,
  class: "base-input-error"
}, tp = /* @__PURE__ */ xe({
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
    return (t, o) => (n(), i("div", {
      class: Be(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Be(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (a) => t.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          o[1] || (o[1] = gs((a) => t.$emit("enter"), ["enter"])),
          o[2] || (o[2] = gs((a) => t.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Zv),
      e.error ? (n(), i("span", ep, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ Ie(tp, [["__scopeId", "data-v-9ba02cdc"]]), sp = ["disabled"], op = { class: "dropdown-value" }, np = ["onClick"], ap = {
  key: 0,
  class: "dropdown-error"
}, lp = /* @__PURE__ */ xe({
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
    const o = e, a = t, l = k(!1), r = k(null), c = k(null), u = k({});
    function d(C) {
      return typeof C == "string" ? C : C.value;
    }
    function v(C) {
      return typeof C == "string" ? C : C.label;
    }
    const f = R(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const C = o.options.find((I) => d(I) === o.modelValue);
      return C ? v(C) : String(o.modelValue);
    });
    function p() {
      o.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function g(C) {
      a("update:modelValue", d(C)), w();
    }
    function _() {
      if (!r.value) return;
      const C = r.value.getBoundingClientRect(), I = window.innerHeight, E = I - C.bottom, M = C.top, N = Math.min(300, o.options.length * 36 + 8), F = E < N && M > E;
      u.value = {
        position: "fixed",
        left: `${C.left}px`,
        width: `${C.width}px`,
        maxHeight: "300px",
        ...F ? { bottom: `${I - C.top + 4}px` } : { top: `${C.bottom + 4}px` }
      };
    }
    gt(l, async (C) => {
      C && (await At(), _());
    });
    function b() {
      l.value && _();
    }
    function S(C) {
      C.key === "Escape" && l.value && w();
    }
    return lt(() => {
      window.addEventListener("scroll", b, !0), window.addEventListener("keydown", S);
    }), zo(() => {
      window.removeEventListener("scroll", b, !0), window.removeEventListener("keydown", S);
    }), (C, I) => (n(), i("div", {
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
        s("span", op, m(f.value), 1),
        I[0] || (I[0] = s("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, sp),
      (n(), L(Zt, { to: "body" }, [
        l.value ? (n(), i("div", {
          key: 0,
          class: "dropdown-overlay",
          onClick: w
        })) : y("", !0),
        l.value ? (n(), i("div", {
          key: 1,
          ref_key: "menuRef",
          ref: c,
          class: "dropdown-menu",
          style: Nt(u.value)
        }, [
          (n(!0), i(W, null, ye(e.options, (E) => (n(), i("div", {
            key: d(E),
            class: Be(["dropdown-option", { selected: d(E) === e.modelValue }]),
            onClick: (M) => g(E)
          }, m(v(E)), 11, np))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (n(), i("span", ap, m(e.error), 1)) : y("", !0)
    ], 512));
  }
}), ip = /* @__PURE__ */ Ie(lp, [["__scopeId", "data-v-857e085b"]]), rp = { class: "destination-section" }, cp = { class: "section-label" }, up = { class: "destination-row" }, dp = {
  key: 0,
  class: "path-separator"
}, mp = /* @__PURE__ */ xe({
  __name: "DownloadDestinationPicker",
  props: {
    modelValue: {},
    label: { default: "Download Destination" },
    suggestedDirectory: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, a = t, { getModelsSubdirectories: l } = ct(), r = k(""), c = k(""), u = k(""), d = k([]), v = k(!1);
    let f = !1;
    const p = R(() => {
      const b = d.value.map((S) => ({
        label: S,
        value: S
      }));
      return b.push({ label: "Custom path...", value: "__custom__" }), b;
    }), w = R(() => r.value === "__custom__" ? u.value.trim() : r.value ? c.value.trim() ? `${r.value}/${c.value.trim()}` : r.value : "");
    function g() {
      if (v.value || !o.suggestedDirectory) return;
      const b = d.value.find(
        (S) => {
          var C;
          return S.toLowerCase() === ((C = o.suggestedDirectory) == null ? void 0 : C.toLowerCase());
        }
      );
      b && b !== r.value && (f = !0, r.value = b, At(() => {
        f = !1;
      }));
    }
    async function _() {
      try {
        const b = await l();
        d.value = b.directories, b.directories.length > 0 && !r.value && (r.value = b.directories[0]);
      } catch {
        d.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], r.value || (r.value = "checkpoints");
      }
    }
    return gt(w, (b) => {
      a("update:modelValue", b);
    }, { immediate: !0 }), gt(() => o.suggestedDirectory, g), gt(d, g), gt(r, (b, S) => {
      f || S === "" || (v.value = !0);
    }), lt(_), (b, S) => (n(), i("div", rp, [
      s("h4", cp, m(e.label), 1),
      s("div", up, [
        $(ip, {
          modelValue: r.value,
          "onUpdate:modelValue": S[0] || (S[0] = (C) => r.value = C),
          options: p.value,
          placeholder: "Select directory...",
          class: "dest-select"
        }, null, 8, ["modelValue", "options"]),
        r.value !== "__custom__" ? (n(), i("span", dp, "/")) : y("", !0),
        r.value !== "__custom__" ? (n(), L(bt, {
          key: 1,
          modelValue: c.value,
          "onUpdate:modelValue": S[1] || (S[1] = (C) => c.value = C),
          placeholder: "subfolder (optional)",
          class: "dest-subfolder"
        }, null, 8, ["modelValue"])) : y("", !0)
      ]),
      r.value === "__custom__" ? (n(), L(bt, {
        key: 0,
        modelValue: u.value,
        "onUpdate:modelValue": S[2] || (S[2] = (C) => u.value = C),
        placeholder: "Enter directory relative to models folder...",
        class: "dest-custom",
        "full-width": ""
      }, null, 8, ["modelValue"])) : y("", !0)
    ]));
  }
}), ac = /* @__PURE__ */ Ie(mp, [["__scopeId", "data-v-2fbc2b02"]]);
function fp(e) {
  const t = e.toLowerCase();
  return t === "huggingface.co" || t.endsWith(".huggingface.co") || t === "hf.co";
}
function vp(e) {
  const t = e.trim();
  if (!t) return { kind: "unknown" };
  let o;
  try {
    o = new URL(t);
  } catch {
    return { kind: "unknown" };
  }
  if (!fp(o.hostname)) return { kind: "unknown" };
  const a = o.pathname.replace(/^\/+/, "").split("/").filter(Boolean);
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
function pp(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function Ti(e, t, o) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(t)}/${pp(o)}`;
}
const gp = { class: "hf-file-browser" }, hp = { class: "browser-header" }, yp = { class: "repo-info" }, wp = { class: "repo-id" }, _p = {
  key: 0,
  class: "revision-pill"
}, kp = {
  key: 0,
  class: "loading-state"
}, bp = {
  key: 1,
  class: "error-state"
}, $p = { class: "toolbar" }, Cp = { class: "toolbar-actions" }, xp = { class: "file-list-container" }, Sp = {
  key: 0,
  class: "file-list-header"
}, Ip = ["checked", "indeterminate"], Ep = {
  key: 1,
  class: "file-checkbox-spacer"
}, Tp = { class: "sort-indicator" }, Mp = { class: "sort-indicator" }, Pp = {
  key: 1,
  class: "empty-state"
}, Rp = {
  key: 2,
  class: "file-list"
}, Lp = ["onClick"], Dp = ["checked", "onChange"], Np = { class: "file-path" }, Up = { class: "file-size" }, Op = { class: "action-bar" }, Ap = { class: "summary-info" }, zp = { class: "summary-count" }, Fp = { class: "summary-size" }, Vp = /* @__PURE__ */ xe({
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
    const o = e, a = t, { getHuggingFaceRepoInfo: l } = ct(), r = k([]), c = k(/* @__PURE__ */ new Set()), u = k(!1), d = k(null), v = k(""), f = k(!1), p = k("name"), w = k(!0), g = k(""), _ = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, b = R(() => {
      let te = r.value;
      if (o.initialPath) {
        const Me = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        te = te.filter((Se) => Se.path.startsWith(Me) || Se.path === o.initialPath);
      }
      if (f.value && (te = te.filter((Me) => Me.is_model_file)), v.value.trim()) {
        const Me = v.value.toLowerCase();
        te = te.filter((Se) => Se.path.toLowerCase().includes(Me));
      }
      return te;
    }), S = R(() => {
      const te = [...b.value];
      return te.sort((Me, Se) => {
        let ze;
        return p.value === "name" ? ze = Me.path.localeCompare(Se.path) : ze = Me.size - Se.size, w.value ? ze : -ze;
      }), te;
    }), C = R(() => b.value.length === 0 ? !1 : b.value.every((te) => c.value.has(te.path))), I = R(() => b.value.some((te) => c.value.has(te.path))), E = R(() => g.value.trim().length > 0), M = R(() => {
      let te = 0;
      for (const Me of c.value) {
        const Se = r.value.find((ze) => ze.path === Me);
        Se && (te += Se.size);
      }
      return te;
    }), N = R(() => {
      if (c.value.size === 0) return null;
      const te = /* @__PURE__ */ new Set();
      for (const Me of c.value) {
        const Se = we(Me);
        Se && te.add(Se.toLowerCase());
      }
      return te.size !== 1 ? null : [...te][0];
    }), F = R(() => o.mode || "download"), V = R(() => o.actionLabel || (F.value === "source" ? "Use as Source" : "Queue Download")), D = R(() => F.value === "source" ? c.value.size === 1 ? "1 file selected" : `${c.value.size} files selected` : `${c.value.size} file(s) selected`), q = R(() => F.value === "source" ? c.value.size !== 1 : c.value.size === 0 || !E.value);
    function ue(te) {
      if (te === 0) return "0 B";
      const Me = 1024 * 1024 * 1024, Se = 1024 * 1024, ze = 1024;
      return te >= Me ? `${(te / Me).toFixed(2)} GB` : te >= Se ? `${(te / Se).toFixed(1)} MB` : te >= ze ? `${(te / ze).toFixed(0)} KB` : `${te} B`;
    }
    function ie(te) {
      const Me = te.match(_);
      return Me ? `${Me[1]}${Me[4]}` : null;
    }
    function Y(te) {
      if (F.value === "source") {
        c.value = c.value.has(te.path) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([te.path]);
        return;
      }
      const Me = new Set(c.value), Se = Me.has(te.path), ze = te.shard_group || ie(te.path);
      if (ze) {
        const Ne = r.value.filter((be) => (be.shard_group || ie(be.path)) === ze);
        Se ? Ne.forEach((be) => Me.delete(be.path)) : Ne.forEach((be) => Me.add(be.path));
      } else
        Se ? Me.delete(te.path) : Me.add(te.path);
      c.value = Me;
    }
    function me() {
      const te = new Set(c.value);
      for (const Me of b.value)
        Me.is_model_file && te.add(Me.path);
      c.value = te;
    }
    function oe() {
      c.value = /* @__PURE__ */ new Set();
    }
    function B() {
      if (C.value) {
        const te = new Set(c.value);
        for (const Me of b.value)
          te.delete(Me.path);
        c.value = te;
      } else {
        const te = new Set(c.value);
        for (const Me of b.value)
          te.add(Me.path);
        c.value = te;
      }
    }
    function H(te) {
      p.value === te ? w.value = !w.value : (p.value = te, w.value = !0);
    }
    function we(te) {
      const Me = te.split("/");
      return Me.length >= 2 ? Me[Me.length - 2] : null;
    }
    function se() {
      return g.value.trim();
    }
    function de() {
      if (c.value.size === 0 || !E.value) return;
      const te = se(), Me = [];
      for (const Se of c.value) {
        const ze = r.value.find((Ne) => Ne.path === Se);
        ze && Me.push({
          url: Ti(o.repoId, o.revision, ze.path),
          destination: te,
          filename: ze.path.split("/").pop() || ze.path
        });
      }
      a("queue", Me);
    }
    function ce() {
      if (c.value.size !== 1) return;
      const [te] = c.value;
      a("selectSource", Ti(o.repoId, o.revision, te));
    }
    function K() {
      if (F.value === "source") {
        ce();
        return;
      }
      de();
    }
    async function ee() {
      if (o.repoId) {
        u.value = !0, d.value = null;
        try {
          const te = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, Me = await l(te);
          if (r.value = Me.files, o.preselectedFile) {
            const Se = r.value.find((ze) => ze.path === o.preselectedFile);
            Se && Y(Se);
          }
        } catch (te) {
          d.value = te instanceof Error ? te.message : "Failed to load repository";
        } finally {
          u.value = !1;
        }
      }
    }
    return gt(() => [o.repoId, o.revision], () => {
      o.repoId && ee();
    }, { immediate: !1 }), lt(() => {
      ee();
    }), (te, Me) => (n(), i("div", gp, [
      s("div", hp, [
        s("button", {
          class: "back-btn",
          onClick: Me[0] || (Me[0] = (Se) => te.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        s("div", yp, [
          s("span", wp, m(e.repoId), 1),
          e.revision ? (n(), i("span", _p, m(e.revision), 1)) : y("", !0)
        ])
      ]),
      u.value ? (n(), i("div", kp, " Loading repository files... ")) : d.value ? (n(), i("div", bp, m(d.value), 1)) : (n(), i(W, { key: 2 }, [
        s("div", $p, [
          $(bt, {
            modelValue: v.value,
            "onUpdate:modelValue": Me[1] || (Me[1] = (Se) => v.value = Se),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          s("div", Cp, [
            s("button", {
              class: Be(["toggle-btn", { active: f.value }]),
              onClick: Me[2] || (Me[2] = (Se) => f.value = !f.value)
            }, m(f.value ? "Models Only" : "All Files"), 3),
            F.value === "download" ? (n(), i("button", {
              key: 0,
              class: "action-btn",
              onClick: me
            }, "Auto-Select Models")) : y("", !0),
            s("button", {
              class: "action-btn",
              onClick: oe
            }, "Clear")
          ])
        ]),
        s("div", xp, [
          b.value.length > 0 ? (n(), i("div", Sp, [
            F.value === "download" ? (n(), i("input", {
              key: 0,
              type: "checkbox",
              checked: C.value,
              indeterminate: I.value && !C.value,
              class: "file-checkbox",
              onChange: B
            }, null, 40, Ip)) : (n(), i("span", Ep)),
            s("span", {
              class: "header-name",
              onClick: Me[3] || (Me[3] = (Se) => H("name"))
            }, [
              Me[7] || (Me[7] = x(" Name ", -1)),
              s("span", Tp, m(p.value === "name" ? w.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: Me[4] || (Me[4] = (Se) => H("size"))
            }, [
              Me[8] || (Me[8] = x(" Size ", -1)),
              s("span", Mp, m(p.value === "size" ? w.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          b.value.length === 0 ? (n(), i("div", Pp, m(r.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", Rp, [
            (n(!0), i(W, null, ye(S.value, (Se) => (n(), i("div", {
              key: Se.path,
              class: Be(["file-item", { selected: c.value.has(Se.path) }]),
              onClick: (ze) => Y(Se)
            }, [
              s("input", {
                type: "checkbox",
                checked: c.value.has(Se.path),
                class: "file-checkbox",
                onClick: Me[5] || (Me[5] = vt(() => {
                }, ["stop"])),
                onChange: (ze) => Y(Se)
              }, null, 40, Dp),
              s("span", Np, m(Se.path), 1),
              s("span", Up, m(ue(Se.size)), 1)
            ], 10, Lp))), 128))
          ]))
        ]),
        F.value === "download" ? (n(), L(ac, {
          key: 0,
          modelValue: g.value,
          "onUpdate:modelValue": Me[6] || (Me[6] = (Se) => g.value = Se),
          "suggested-directory": N.value
        }, null, 8, ["modelValue", "suggested-directory"])) : y("", !0),
        s("div", Op, [
          s("div", Ap, [
            s("span", zp, m(D.value), 1),
            s("span", Fp, m(ue(M.value)), 1)
          ]),
          $(Ue, {
            variant: "primary",
            disabled: q.value,
            onClick: K
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
}), Bp = /* @__PURE__ */ Ie(Vp, [["__scopeId", "data-v-06caa551"]]), Wp = { class: "token-config-modal" }, Gp = { class: "provider-info" }, jp = { class: "provider-icon" }, Hp = { class: "provider-name" }, qp = {
  key: 0,
  class: "current-token"
}, Kp = { class: "mask" }, Jp = { class: "token-input-section" }, Qp = { class: "input-label" }, Yp = { class: "help-text" }, Xp = ["href"], Zp = { class: "modal-actions" }, eg = /* @__PURE__ */ xe({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {},
    overlayZIndex: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: t }) {
    const o = e, a = t, { updateConfig: l } = ct(), r = k(""), c = k(!1), u = k(!1), d = R(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), v = R(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), f = R(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), p = R(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), w = R(
      () => o.provider === "huggingface" ? "Get your HuggingFace token →" : "Get your CivitAI API key →"
    );
    async function g() {
      if (r.value.trim()) {
        c.value = !0;
        try {
          const b = o.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l(b), r.value = "", a("saved"), a("close");
        } catch (b) {
          console.error("Failed to save token:", b);
        } finally {
          c.value = !1;
        }
      }
    }
    async function _() {
      u.value = !0;
      try {
        const b = o.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l(b), a("cleared"), a("close");
      } catch (b) {
        console.error("Failed to clear token:", b);
      } finally {
        u.value = !1;
      }
    }
    return (b, S) => (n(), L($t, {
      title: "Configure API Token",
      "overlay-z-index": e.overlayZIndex,
      onClose: S[2] || (S[2] = (C) => b.$emit("close"))
    }, {
      body: h(() => [
        s("div", Wp, [
          s("div", Gp, [
            s("span", jp, m(v.value), 1),
            s("span", Hp, m(d.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", qp, [
            S[4] || (S[4] = s("span", { class: "label" }, "Current token:", -1)),
            s("span", Kp, m(e.currentTokenMask), 1),
            $(Ue, {
              variant: "danger",
              size: "sm",
              onClick: _,
              loading: u.value
            }, {
              default: h(() => [...S[3] || (S[3] = [
                x(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0),
          s("div", Jp, [
            s("label", Qp, m(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            $(bt, {
              modelValue: r.value,
              "onUpdate:modelValue": S[0] || (S[0] = (C) => r.value = C),
              type: "password",
              placeholder: f.value
            }, null, 8, ["modelValue", "placeholder"]),
            s("div", Yp, [
              s("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, m(w.value), 9, Xp)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        s("div", Zp, [
          $(Ue, {
            variant: "secondary",
            onClick: S[1] || (S[1] = (C) => b.$emit("close"))
          }, {
            default: h(() => [...S[5] || (S[5] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          $(Ue, {
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
}), tg = /* @__PURE__ */ Ie(eg, [["__scopeId", "data-v-525ec64a"]]), sg = { class: "huggingface-tab" }, og = {
  key: 0,
  class: "search-section"
}, ng = { class: "search-header" }, ag = { class: "search-bar" }, lg = {
  key: 1,
  class: "search-results"
}, ig = {
  key: 0,
  class: "loading-state"
}, rg = {
  key: 1,
  class: "error-state"
}, cg = {
  key: 2,
  class: "results-list"
}, ug = ["onClick"], dg = { class: "repo-header" }, mg = { class: "repo-id" }, fg = { class: "repo-stats" }, vg = {
  class: "stat",
  title: "Downloads"
}, pg = {
  class: "stat",
  title: "Likes"
}, gg = {
  key: 0,
  class: "repo-desc"
}, hg = {
  key: 1,
  class: "repo-tags"
}, yg = {
  key: 3,
  class: "empty-state"
}, wg = {
  key: 4,
  class: "hint-state"
}, _g = /* @__PURE__ */ xe({
  __name: "HuggingFaceTab",
  props: {
    modeKind: { default: "download" },
    actionLabel: { default: "Queue Download" },
    overlayZIndex: { default: 10003 }
  },
  emits: ["queue", "selectSource"],
  setup(e) {
    const { searchHuggingFaceRepos: t, getConfig: o } = ct(), a = k("search"), l = k(""), r = k([]), c = k(!1), u = k(null), d = k(!1), v = k(null), f = k("main"), p = k(), w = k(), g = k(!1), _ = k(null), b = R(() => {
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
      const D = vp(V);
      if (D.kind === "file" && D.repoId && D.path) {
        v.value = D.repoId, f.value = D.revision || "main";
        const q = D.path.split("/");
        q.length > 1 ? p.value = q.slice(0, -1).join("/") : p.value = void 0, w.value = D.path, a.value = "browse";
        return;
      }
      if (D.kind === "repo" && D.repoId) {
        v.value = D.repoId, f.value = D.revision || "main", p.value = D.path, w.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(V) && !V.includes("://")) {
        v.value = V, f.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const q = await t(V);
        r.value = q.results, d.value = !0;
      } catch (q) {
        u.value = q instanceof Error ? q.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function I(V) {
      v.value = V, f.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
    }
    function E() {
      a.value = "search", v.value = null, p.value = void 0, w.value = void 0;
    }
    async function M() {
      try {
        const V = await o();
        _.value = V.huggingface_token || null;
      } catch (V) {
        console.error("Failed to load config:", V);
      }
    }
    function N() {
      M(), b.value && l.value && C();
    }
    function F() {
      _.value = null;
    }
    return lt(M), (V, D) => (n(), i("div", sg, [
      a.value === "search" ? (n(), i("div", og, [
        s("div", ng, [
          s("div", ag, [
            $(bt, {
              modelValue: l.value,
              "onUpdate:modelValue": D[0] || (D[0] = (q) => l.value = q),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: gs(C, ["enter"])
            }, null, 8, ["modelValue"]),
            $(Ue, {
              variant: "primary",
              onClick: C,
              loading: c.value
            }, {
              default: h(() => [...D[6] || (D[6] = [
                x(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          $(Ue, {
            variant: "secondary",
            size: "sm",
            onClick: D[1] || (D[1] = (q) => g.value = !0)
          }, {
            default: h(() => [
              x(m(_.value ? `Token: ${_.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      a.value === "search" ? (n(), i("div", lg, [
        c.value ? (n(), i("div", ig, " Searching HuggingFace... ")) : u.value ? (n(), i("div", rg, [
          s("p", null, m(u.value), 1),
          b.value ? (n(), L(Ue, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: D[2] || (D[2] = (q) => g.value = !0)
          }, {
            default: h(() => [...D[7] || (D[7] = [
              x(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (n(), i("div", cg, [
          (n(!0), i(W, null, ye(r.value, (q) => (n(), i("div", {
            key: q.repo_id,
            class: "repo-card",
            onClick: (ue) => I(q.repo_id)
          }, [
            s("div", dg, [
              s("span", mg, m(q.repo_id), 1),
              s("div", fg, [
                s("span", vg, [
                  D[8] || (D[8] = s("span", { class: "stat-icon" }, "↓", -1)),
                  x(" " + m(S(q.downloads)), 1)
                ]),
                s("span", pg, [
                  D[9] || (D[9] = s("span", { class: "stat-icon" }, "★", -1)),
                  x(" " + m(S(q.likes)), 1)
                ])
              ])
            ]),
            q.description ? (n(), i("p", gg, m(q.description), 1)) : y("", !0),
            q.tags.length > 0 ? (n(), i("div", hg, [
              (n(!0), i(W, null, ye(q.tags.slice(0, 5), (ue) => (n(), i("span", {
                key: ue,
                class: "tag"
              }, m(ue), 1))), 128))
            ])) : y("", !0)
          ], 8, ug))), 128))
        ])) : d.value ? (n(), i("div", yg, " No repositories found ")) : (n(), i("div", wg, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), L(Bp, {
        key: 2,
        "repo-id": v.value,
        revision: f.value,
        "initial-path": p.value,
        "preselected-file": w.value,
        mode: e.modeKind,
        "action-label": e.actionLabel,
        onBack: E,
        onQueue: D[3] || (D[3] = (q) => V.$emit("queue", q)),
        onSelectSource: D[4] || (D[4] = (q) => V.$emit("selectSource", q))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file", "mode", "action-label"])),
      g.value ? (n(), L(tg, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": _.value,
        "overlay-z-index": e.overlayZIndex + 2,
        onClose: D[5] || (D[5] = (q) => g.value = !1),
        onSaved: N,
        onCleared: F
      }, null, 8, ["current-token-mask", "overlay-z-index"])) : y("", !0)
    ]));
  }
}), lc = /* @__PURE__ */ Ie(_g, [["__scopeId", "data-v-eccbf32d"]]), kg = { class: "candidate-card" }, bg = { class: "candidate-main" }, $g = { class: "candidate-url" }, Cg = { class: "candidate-meta" }, xg = { class: "meta-chip" }, Sg = {
  key: 0,
  class: "meta-chip"
}, Ig = ["aria-expanded"], Eg = {
  key: 1,
  class: "meta-chip"
}, Tg = { class: "match-popover-reasons" }, Mg = { class: "candidate-footer" }, Pg = {
  key: 0,
  class: "candidate-context"
}, Rg = { key: 1 }, Lg = /* @__PURE__ */ xe({
  __name: "ModelSourceCandidateCard",
  props: {
    candidate: {},
    actionLabel: { default: "Use as Source" },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = t, a = k(!1), l = k(null);
    function r() {
      a.value = !1;
    }
    function c(f) {
      var w;
      const p = f.target;
      p instanceof Node && ((w = l.value) != null && w.contains(p) || r());
    }
    function u(f) {
      f.key === "Escape" && r();
    }
    gt(a, (f) => {
      f ? (document.addEventListener("pointerdown", c), document.addEventListener("keydown", u)) : (document.removeEventListener("pointerdown", c), document.removeEventListener("keydown", u));
    }), Sn(() => {
      document.removeEventListener("pointerdown", c), document.removeEventListener("keydown", u);
    });
    function d(f) {
      return f === "huggingface" ? "Hugging Face" : f === "civitai" ? "Civitai" : "Direct URL";
    }
    function v(f) {
      return f >= 75 ? "Strong" : f >= 45 ? "Possible" : "Weak";
    }
    return (f, p) => {
      var w, g;
      return n(), i("article", kg, [
        s("div", bg, [
          s("div", $g, m(e.candidate.url), 1),
          s("div", Cg, [
            s("span", xg, [
              p[3] || (p[3] = s("span", { class: "chip-label" }, "Provider", -1)),
              s("span", null, m(d(e.candidate.source_type)), 1)
            ]),
            e.candidate.workflow ? (n(), i("span", Sg, [
              p[4] || (p[4] = s("span", { class: "chip-label" }, "Workflow", -1)),
              s("span", null, m(e.candidate.workflow), 1)
            ])) : y("", !0),
            e.candidate.confidence ? (n(), i("span", {
              key: 1,
              ref_key: "matchPopoverRoot",
              ref: l,
              class: "match-chip-wrap"
            }, [
              (w = e.candidate.reasons) != null && w.length ? (n(), i("button", {
                key: 0,
                class: "meta-chip meta-chip-button",
                type: "button",
                "aria-expanded": a.value,
                onClick: p[0] || (p[0] = vt((_) => a.value = !a.value, ["stop"]))
              }, [
                p[5] || (p[5] = s("span", { class: "chip-label" }, "Match", -1)),
                s("span", null, m(v(e.candidate.confidence)), 1)
              ], 8, Ig)) : (n(), i("span", Eg, [
                p[6] || (p[6] = s("span", { class: "chip-label" }, "Match", -1)),
                s("span", null, m(v(e.candidate.confidence)), 1)
              ])),
              a.value && ((g = e.candidate.reasons) != null && g.length) ? (n(), i("div", {
                key: 2,
                class: "match-popover",
                onClick: p[1] || (p[1] = vt(() => {
                }, ["stop"]))
              }, [
                p[7] || (p[7] = s("div", { class: "match-popover-title" }, "Matched by", -1)),
                s("div", Tg, [
                  (n(!0), i(W, null, ye(e.candidate.reasons, (_) => (n(), i("span", {
                    key: _,
                    class: "reason-chip"
                  }, m(_), 1))), 128))
                ])
              ])) : y("", !0)
            ], 512)) : y("", !0)
          ]),
          s("div", Mg, [
            e.candidate.context ? (n(), i("details", Pg, [
              p[8] || (p[8] = s("summary", null, "Workflow snippet", -1)),
              s("p", null, m(e.candidate.context), 1)
            ])) : (n(), i("div", Rg)),
            $(Ue, {
              variant: "primary",
              size: "sm",
              loading: e.loading,
              onClick: p[2] || (p[2] = (_) => o("select", e.candidate.url))
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
}), ic = /* @__PURE__ */ Ie(Lg, [["__scopeId", "data-v-329b9068"]]), Dg = { class: "source-url-form" }, Ng = { class: "input-group" }, Ug = { key: 0 }, Og = {
  key: 1,
  class: "description"
}, Ag = { class: "actions" }, zg = /* @__PURE__ */ xe({
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
    const o = e, a = t, l = R(() => o.modelValue.trim()), r = R(() => {
      const d = l.value;
      if (!d) return null;
      try {
        const v = new URL(d);
        if (!["http:", "https:"].includes(v.protocol))
          return "Use an HTTP or HTTPS URL.";
      } catch {
        return "Enter a valid URL.";
      }
      return null;
    }), c = R(() => !!l.value && !r.value && !o.disabled);
    function u() {
      c.value && a("submit", l.value);
    }
    return (d, v) => (n(), i("div", Dg, [
      s("div", Ng, [
        e.label ? (n(), i("label", Ug, m(e.label), 1)) : y("", !0),
        $(bt, {
          "model-value": e.modelValue,
          placeholder: e.placeholder,
          error: r.value || void 0,
          "full-width": "",
          "onUpdate:modelValue": v[0] || (v[0] = (f) => a("update:modelValue", f)),
          onEnter: u
        }, null, 8, ["model-value", "placeholder", "error"]),
        e.description ? (n(), i("p", Og, m(e.description), 1)) : y("", !0)
      ]),
      at(d.$slots, "default", {}, void 0),
      s("div", Ag, [
        $(Ue, {
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
}), rc = /* @__PURE__ */ Ie(zg, [["__scopeId", "data-v-e2610d45"]]), Fg = { class: "source-picker" }, Vg = {
  key: 0,
  class: "model-summary"
}, Bg = { class: "model-heading" }, Wg = { class: "summary-name" }, Gg = { class: "summary-meta" }, jg = {
  key: 0,
  class: "hash-row"
}, Hg = { class: "hash-value" }, qg = {
  key: 1,
  class: "hash-row"
}, Kg = { class: "hash-value" }, Jg = {
  key: 2,
  class: "hash-row"
}, Qg = { class: "hash-value" }, Yg = {
  key: 4,
  class: "hash-error"
}, Xg = { class: "tab-bar" }, Zg = ["onClick"], eh = {
  key: 1,
  class: "tab-content"
}, th = { class: "section-header-row" }, sh = {
  key: 0,
  class: "state-message"
}, oh = {
  key: 1,
  class: "error-message"
}, nh = {
  key: 2,
  class: "candidate-list"
}, ah = {
  key: 3,
  class: "state-message"
}, lh = {
  key: 2,
  class: "tab-content source-browser-content"
}, ih = {
  key: 3,
  class: "tab-content"
}, rh = { class: "section-header-row" }, ch = /* @__PURE__ */ xe({
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
    const o = e, a = t, { getModelSourceCandidates: l, computeModelHashes: r } = ct(), c = [
      { id: "workflow", label: "Workflow Links" },
      { id: "huggingface", label: "Hugging Face" },
      { id: "direct", label: "Direct URL" }
    ], u = k("workflow"), d = k([]), v = k(!1), f = k(null), p = k(""), w = k(!1), g = k(null), _ = R(() => d.value.filter((I) => I.source === "workflow")), b = R(() => !!(o.model.hash && (!o.model.blake3 || !o.model.sha256)));
    async function S() {
      v.value = !0, f.value = null;
      try {
        const I = await l(o.model.hash);
        d.value = I.candidates;
      } catch (I) {
        f.value = I instanceof Error ? I.message : "Failed to scan workflows";
      } finally {
        v.value = !1;
      }
    }
    async function C() {
      if (o.model.hash) {
        w.value = !0, g.value = null;
        try {
          const I = await r(o.model.hash);
          a("hashesComputed", I);
        } catch (I) {
          g.value = I instanceof Error ? I.message : "Failed to compute hashes";
        } finally {
          w.value = !1;
        }
      }
    }
    return lt(S), (I, E) => (n(), i("div", Fg, [
      e.showModelSummary ? (n(), i("div", Vg, [
        s("div", Bg, [
          E[4] || (E[4] = s("div", { class: "summary-label" }, "Local model", -1)),
          s("div", Wg, m(e.model.filename), 1)
        ]),
        s("div", Gg, [
          e.model.hash ? (n(), i("div", jg, [
            E[5] || (E[5] = s("span", { class: "hash-label" }, "quick hash", -1)),
            s("span", Hg, m(e.model.hash), 1)
          ])) : y("", !0),
          e.model.blake3 ? (n(), i("div", qg, [
            E[6] || (E[6] = s("span", { class: "hash-label" }, "blake3", -1)),
            s("span", Kg, m(e.model.blake3), 1)
          ])) : y("", !0),
          e.model.sha256 ? (n(), i("div", Jg, [
            E[7] || (E[7] = s("span", { class: "hash-label" }, "sha256", -1)),
            s("span", Qg, m(e.model.sha256), 1)
          ])) : y("", !0),
          b.value ? (n(), L(Ue, {
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
          g.value ? (n(), i("p", Yg, m(g.value), 1)) : y("", !0)
        ])
      ])) : y("", !0),
      s("div", Xg, [
        (n(), i(W, null, ye(c, (M) => s("button", {
          key: M.id,
          class: Be(["tab-btn", { active: u.value === M.id }]),
          onClick: (N) => u.value = M.id
        }, m(M.label), 11, Zg)), 64))
      ]),
      u.value === "workflow" ? (n(), i("section", eh, [
        s("div", th, [
          E[10] || (E[10] = s("div", null, [
            s("h4", null, "Workflow Links"),
            s("p", null, "Candidate model links found in saved workflow notes or metadata.")
          ], -1)),
          $(Ue, {
            variant: "secondary",
            size: "sm",
            loading: v.value,
            onClick: S
          }, {
            default: h(() => [...E[9] || (E[9] = [
              x(" Scan ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ]),
        v.value ? (n(), i("div", sh, "Scanning workflows...")) : f.value ? (n(), i("div", oh, m(f.value), 1)) : _.value.length ? (n(), i("div", nh, [
          (n(!0), i(W, null, ye(_.value, (M) => (n(), L(ic, {
            key: `${M.workflow}:${M.url}`,
            candidate: M,
            "action-label": e.actionLabel,
            loading: e.loadingUrl === M.url,
            onSelect: E[0] || (E[0] = (N) => a("selectSource", N))
          }, null, 8, ["candidate", "action-label", "loading"]))), 128))
        ])) : (n(), i("div", ah, " No likely workflow links found. Try direct URL for now. "))
      ])) : u.value === "huggingface" ? (n(), i("section", lh, [
        $(lc, {
          "mode-kind": "source",
          "action-label": e.actionLabel,
          "overlay-z-index": e.overlayZIndex,
          onSelectSource: E[1] || (E[1] = (M) => a("selectSource", M))
        }, null, 8, ["action-label", "overlay-z-index"])
      ])) : u.value === "direct" ? (n(), i("section", ih, [
        s("div", rh, [
          s("div", null, [
            E[11] || (E[11] = s("h4", null, "Direct URL", -1)),
            s("p", null, m(e.directDescription), 1)
          ])
        ]),
        $(rc, {
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
}), uh = /* @__PURE__ */ Ie(ch, [["__scopeId", "data-v-e9633660"]]), dh = {
  key: 0,
  class: "error-message"
}, mh = /* @__PURE__ */ xe({
  __name: "ModelSourceModal",
  props: {
    model: {},
    overlayZIndex: { default: 10011 }
  },
  emits: ["close", "saved", "hashesComputed"],
  setup(e, { emit: t }) {
    const o = e, a = t, { addModelSource: l } = ct(), r = k(o.model), c = k(null), u = k(null);
    gt(() => o.model, (f) => {
      r.value = f;
    });
    async function d(f) {
      if (!(!f || !o.model.hash)) {
        c.value = f, u.value = null;
        try {
          await l(o.model.hash, f), a("saved"), a("close");
        } catch (p) {
          u.value = p instanceof Error ? p.message : "Failed to save source";
        } finally {
          c.value = null;
        }
      }
    }
    function v(f) {
      r.value = f, a("hashesComputed");
    }
    return (f, p) => (n(), L($t, {
      title: `Find Source: ${e.model.filename}`,
      size: "lg",
      "fixed-height": "",
      "overlay-z-index": e.overlayZIndex,
      onClose: p[1] || (p[1] = (w) => a("close"))
    }, {
      body: h(() => [
        $(uh, {
          model: r.value,
          "loading-url": c.value,
          "overlay-z-index": e.overlayZIndex,
          "action-label": "Use as Source",
          onSelectSource: d,
          onHashesComputed: v
        }, null, 8, ["model", "loading-url", "overlay-z-index"]),
        u.value ? (n(), i("p", dh, m(u.value), 1)) : y("", !0)
      ]),
      footer: h(() => [
        $(Ue, {
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
}), cc = /* @__PURE__ */ Ie(mh, [["__scopeId", "data-v-62104cdb"]]), fh = { class: "readiness-body" }, vh = {
  key: 0,
  class: "issue-section"
}, ph = { class: "section-heading" }, gh = { class: "issue-list" }, hh = { class: "issue-main" }, yh = { class: "issue-name" }, wh = { class: "issue-meta" }, _h = { key: 0 }, kh = { key: 1 }, bh = ["disabled", "onClick"], $h = {
  key: 1,
  class: "issue-note"
}, Ch = {
  key: 1,
  class: "issue-section"
}, xh = { class: "section-heading" }, Sh = { class: "issue-list" }, Ih = { class: "issue-main" }, Eh = { class: "issue-name" }, Th = { class: "issue-meta" }, Mh = { class: "issue-reason" }, Ph = ["disabled", "onClick"], Rh = {
  key: 1,
  class: "issue-note"
}, Lh = {
  key: 2,
  class: "empty-state"
}, Dh = {
  key: 3,
  class: "error-message"
}, Nh = /* @__PURE__ */ xe({
  __name: "ReadinessIssuesModal",
  props: {
    warnings: {}
  },
  emits: ["close", "revalidate"],
  setup(e, { emit: t }) {
    const o = e, a = t, { getModelDetails: l, updateNodeCriticality: r } = ct(), c = k(null), u = k(null), d = k(null), v = k(null), f = R(() => o.warnings.models_without_sources), p = R(() => o.warnings.nodes_without_provenance);
    async function w(S) {
      u.value = S, v.value = null;
      try {
        c.value = await l(S);
      } catch (C) {
        v.value = C instanceof Error ? C.message : `Failed to load ${S}`;
      } finally {
        u.value = null;
      }
    }
    async function g(S) {
      d.value = S, v.value = null;
      try {
        const C = await r(S, "optional");
        if (C.status !== "success") {
          v.value = C.message || `Failed to update ${S}`;
          return;
        }
        a("revalidate");
      } catch (C) {
        v.value = C instanceof Error ? C.message : `Failed to update ${S}`;
      } finally {
        d.value = null;
      }
    }
    function _() {
      c.value = null, a("revalidate");
    }
    function b() {
      a("revalidate");
    }
    return (S, C) => (n(), i(W, null, [
      $($t, {
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
          s("div", fh, [
            f.value.length ? (n(), i("section", vh, [
              s("div", ph, [
                C[4] || (C[4] = s("h4", null, "Models Missing Source URLs", -1)),
                s("span", null, m(f.value.length), 1)
              ]),
              s("div", gh, [
                (n(!0), i(W, null, ye(f.value, (I) => (n(), i("article", {
                  key: I.hash || I.filename,
                  class: "issue-item"
                }, [
                  s("div", hh, [
                    s("div", yh, m(I.filename), 1),
                    s("div", wh, [
                      I.hash ? (n(), i("span", _h, "hash " + m(I.hash), 1)) : y("", !0),
                      I.workflows.length ? (n(), i("span", kh, "used by " + m(I.workflows.join(", ")), 1)) : y("", !0),
                      s("span", null, m(I.criticality || "required"), 1)
                    ])
                  ]),
                  I.hash ? (n(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: u.value === I.hash,
                    onClick: (E) => w(I.hash)
                  }, m(u.value === I.hash ? "Loading..." : "Add Source"), 9, bh)) : (n(), i("span", $h, "Missing hash"))
                ]))), 128))
              ])
            ])) : y("", !0),
            p.value.length ? (n(), i("section", Ch, [
              s("div", xh, [
                C[5] || (C[5] = s("h4", null, "Custom Nodes Missing Portable Provenance", -1)),
                s("span", null, m(p.value.length), 1)
              ]),
              s("div", Sh, [
                (n(!0), i(W, null, ye(p.value, (I) => (n(), i("article", {
                  key: I.name,
                  class: "issue-item"
                }, [
                  s("div", Ih, [
                    s("div", Eh, m(I.name), 1),
                    s("div", Th, [
                      s("span", null, m(I.source), 1),
                      s("span", null, m(I.criticality), 1)
                    ]),
                    s("p", Mh, m(I.reason), 1)
                  ]),
                  I.criticality === "required" ? (n(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: d.value === I.name,
                    onClick: (E) => g(I.name)
                  }, m(d.value === I.name ? "Saving..." : "Mark Optional"), 9, Ph)) : (n(), i("span", Rh, "Optional warning"))
                ]))), 128))
              ])
            ])) : y("", !0),
            !f.value.length && !p.value.length ? (n(), i("div", Lh, " No reproducibility issues remain. ")) : y("", !0),
            v.value ? (n(), i("div", Dh, m(v.value), 1)) : y("", !0)
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
      c.value ? (n(), L(cc, {
        key: 0,
        model: c.value,
        "overlay-z-index": 10008,
        onClose: C[2] || (C[2] = (I) => c.value = null),
        onSaved: _,
        onHashesComputed: b
      }, null, 8, ["model"])) : y("", !0)
    ], 64));
  }
}), El = /* @__PURE__ */ Ie(Nh, [["__scopeId", "data-v-03f88a10"]]), Uh = { class: "health-section-header" }, Oh = { class: "suggestions-content" }, Ah = { class: "suggestions-text" }, zh = { style: { "margin-top": "var(--cg-space-3)" } }, Fh = {
  key: 1,
  class: "no-issues-text"
}, Vh = {
  key: 2,
  class: "no-issues-text"
}, Bh = /* @__PURE__ */ xe({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = k(!1), r = k(!1), c = k(!1), u = k(null), d = k(null), v = k(!1), { validateExport: f } = ct();
    function p() {
      l.value = !0;
    }
    function w() {
      l.value = !1, _("view-workflows");
    }
    function g() {
      l.value = !1, _("view-nodes");
    }
    const _ = o, b = k(!1), S = k(!1);
    function C() {
      S.value = !0, _("repair-environment");
    }
    function I() {
      S.value = !1;
    }
    function E() {
      l.value = !1;
    }
    const M = R(() => {
      const X = a.status.workflows.analyzed || [], G = X.filter(
        (fe) => fe.unresolved_models_count > 0 || fe.ambiguous_models_count > 0
      );
      return G.length === 0 && a.status.missing_models_count > 0 ? X.filter((fe) => fe.sync_state === "synced") : G;
    });
    function N() {
      const X = M.value;
      X.length !== 0 && (b.value = !0, _("repair-missing-models", X.map((G) => G.name)));
    }
    function F() {
      b.value = !1;
    }
    t({ resetRepairingState: F, resetRepairingEnvironmentState: I, closeDetailModal: E });
    const V = R(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), D = R(() => a.status.has_changes), q = R(() => {
      const X = a.status.git_changes;
      return X.nodes_added.length > 0 || X.nodes_removed.length > 0 || X.workflow_changes;
    }), ue = R(() => a.status.has_changes || V.value), ie = R(() => {
      var X;
      return ((X = u.value) == null ? void 0 : X.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), Y = R(
      () => ie.value.models_without_sources.length
    ), me = R(
      () => ie.value.nodes_without_provenance.length
    ), oe = R(
      () => Y.value + me.value
    ), B = R(
      () => oe.value > 0
    ), H = R(() => {
      const X = [];
      if (Y.value > 0 && X.push(`${Y.value} model${Y.value === 1 ? "" : "s"} missing download source`), me.value > 0) {
        const G = ie.value.nodes_without_provenance.filter((he) => he.criticality === "optional").length, fe = me.value - G;
        fe > 0 && X.push(`${fe} required node${fe === 1 ? "" : "s"} missing portable source`), G > 0 && X.push(`${G} optional node${G === 1 ? "" : "s"} missing portable source`);
      }
      return X;
    });
    async function we() {
      v.value = !0, d.value = null;
      try {
        u.value = await f();
      } catch (X) {
        d.value = X instanceof Error ? X.message : "Failed to check readiness";
      } finally {
        v.value = !1;
      }
    }
    async function se() {
      await we();
    }
    gt(
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
        a.setupState === "managed" && we();
      },
      { immediate: !0 }
    );
    const de = R(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), ce = R(() => a.status.git_changes.has_other_changes), K = R(() => {
      var X;
      return ((X = a.status.workflows.analyzed) == null ? void 0 : X.filter((G) => G.status === "broken")) || [];
    }), ee = R(() => {
      var X;
      return ((X = a.status.workflows.analyzed) == null ? void 0 : X.filter(
        (G) => G.has_path_sync_issues && !G.has_issues
      )) || [];
    }), te = R(() => K.value.length > 0);
    function Me(X) {
      const G = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const fe of G) {
        const he = X.match(fe);
        if (he != null && he[1])
          return he[1];
      }
      return null;
    }
    function Se(X) {
      const G = X.map(Me).filter((fe) => !!fe);
      return [...new Set(G)];
    }
    function ze(X) {
      if (X.length === 0) return "";
      if (X.length === 1) return ` (>= ${X[0]})`;
      const G = X.slice(0, 2).map((he) => `>= ${he}`).join(", "), fe = X.length > 2;
      return ` (${G}${fe ? ", ..." : ""})`;
    }
    function Ne(X) {
      return X.replace(/uninstallable node mappings?/gi, (G) => G.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function be(X) {
      const G = Ne(X.issue_summary || "Has issues"), fe = /(?:>=|v?\d+\.\d+)/i.test(G), he = Se(X.version_gated_guidance || []);
      return (X.nodes_version_gated_count || 0) > 0 && he.length > 0 && !fe ? `${X.name} — ${G} (needs ComfyUI ${he.map((je) => `>= ${je}`).join(", ")})` : `${X.name} — ${G}`;
    }
    const Ae = R(() => K.value.reduce(
      (X, G) => X + (G.nodes_version_gated_count || 0),
      0
    )), ge = R(() => {
      const X = K.value.flatMap(
        (G) => Se(G.version_gated_guidance || [])
      );
      return [...new Set(X)];
    }), ve = R(() => K.value.reduce(
      (X, G) => X + (G.nodes_uninstallable_count || 0),
      0
    )), T = R(() => {
      const X = [];
      return Ae.value > 0 && X.push(
        `${Ae.value} require newer ComfyUI${ze(ge.value)}`
      ), ve.value > 0 && X.push(`${ve.value} need community packages`), X.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${X.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), A = R(() => te.value || ee.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), le = R(() => A.value || B.value || !!d.value), Ce = R(() => {
      const X = [];
      return a.status.workflows.new.length > 0 && X.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && X.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && X.push(`${a.status.workflows.deleted.length} deleted`), X.length > 0 ? `${X.join(", ")} workflow${X.length === 1 && !X[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Ee = R(() => {
      var fe, he;
      const X = [], G = a.status.comparison;
      return (fe = G.missing_nodes) != null && fe.length && X.push(`${G.missing_nodes.length} missing node${G.missing_nodes.length === 1 ? "" : "s"}`), (he = G.extra_nodes) != null && he.length && X.push(`${G.extra_nodes.length} untracked node${G.extra_nodes.length === 1 ? "" : "s"}`), X.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${X.join(" and ")}.`;
    }), ke = R(() => {
      var fe, he;
      const X = [], G = a.status.comparison;
      return (fe = G.extra_nodes) != null && fe.length && (G.extra_nodes.slice(0, 3).forEach((je) => {
        X.push(`Untracked: ${je}`);
      }), G.extra_nodes.length > 3 && X.push(`...and ${G.extra_nodes.length - 3} more untracked`)), (he = G.missing_nodes) != null && he.length && (G.missing_nodes.slice(0, 3).forEach((je) => {
        X.push(`Missing: ${je}`);
      }), G.missing_nodes.length > 3 && X.push(`...and ${G.missing_nodes.length - 3} more missing`)), X;
    });
    return (X, G) => (n(), i(W, null, [
      $(Ft, null, {
        header: h(() => [
          $(Vt, { title: "STATUS" })
        ]),
        content: h(() => [
          a.setupState === "no_workspace" ? (n(), L(ns, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              $(Re, {
                variant: "primary",
                size: "sm",
                onClick: G[0] || (G[0] = (fe) => X.$emit("start-setup"))
              }, {
                default: h(() => [...G[15] || (G[15] = [
                  x(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (n(), L(ns, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              $(Re, {
                variant: "primary",
                size: "sm",
                onClick: G[1] || (G[1] = (fe) => X.$emit("view-environments"))
              }, {
                default: h(() => [...G[16] || (G[16] = [
                  x(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (n(), L(ns, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              $(Re, {
                variant: "primary",
                size: "sm",
                onClick: G[2] || (G[2] = (fe) => X.$emit("create-environment"))
              }, {
                default: h(() => [...G[17] || (G[17] = [
                  x(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", {
            class: "health-section-wrapper",
            onMouseenter: G[4] || (G[4] = (fe) => r.value = !0),
            onMouseleave: G[5] || (G[5] = (fe) => r.value = !1)
          }, [
            s("div", Uh, [
              $(cs, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...G[18] || (G[18] = [
                  x(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              $(Fd, { name: "fade" }, {
                default: h(() => [
                  r.value ? (n(), L(Re, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: p
                  }, {
                    default: h(() => [...G[19] || (G[19] = [
                      x(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            $(Qm, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, ss({
              left: h(() => [
                e.status.workflows.new.length ? (n(), L($s, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (n(), L($s, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (n(), L($s, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                $($s, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: V.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (n(), L($s, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (n(), L($s, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (n(), L($s, {
                  key: 2,
                  icon: "●",
                  count: de.value,
                  label: de.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                ce.value ? (n(), L($s, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                D.value && !q.value && !ce.value ? (n(), L($s, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                D.value ? y("", !0) : (n(), L($s, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              ue.value ? {
                name: "footer",
                fn: h(() => [
                  G[21] || (G[21] = s("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  s("div", Oh, [
                    s("span", Ah, m(Ce.value), 1),
                    $(Re, {
                      variant: "primary",
                      size: "sm",
                      onClick: G[3] || (G[3] = (fe) => X.$emit("commit-changes"))
                    }, {
                      default: h(() => [...G[20] || (G[20] = [
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
          e.status.is_detached_head ? (n(), L(ns, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              $(Re, {
                variant: "primary",
                size: "sm",
                onClick: G[6] || (G[6] = (fe) => X.$emit("create-branch"))
              }, {
                default: h(() => [...G[22] || (G[22] = [
                  x(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", zh, [
            $(cs, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...G[23] || (G[23] = [
                x(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            le.value ? (n(), i(W, { key: 0 }, [
              K.value.length > 0 ? (n(), L(ns, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${K.value.length} workflow${K.value.length === 1 ? "" : "s"} can't run`,
                description: T.value,
                items: K.value.map(be)
              }, {
                actions: h(() => [
                  $(Re, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[7] || (G[7] = (fe) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...G[24] || (G[24] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              ee.value.length > 0 ? (n(), L(ns, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${ee.value.length} workflow${ee.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: ee.value.map((fe) => `${fe.name} — ${fe.models_needing_path_sync_count} model path${fe.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  $(Re, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[8] || (G[8] = (fe) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...G[25] || (G[25] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !te.value ? (n(), L(ns, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  $(Re, {
                    variant: "primary",
                    size: "sm",
                    disabled: b.value,
                    onClick: N
                  }, {
                    default: h(() => [
                      x(m(b.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  $(Re, {
                    variant: "secondary",
                    size: "sm",
                    onClick: G[9] || (G[9] = (fe) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...G[26] || (G[26] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (n(), L(ns, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Ee.value,
                items: ke.value
              }, {
                actions: h(() => [
                  $(Re, {
                    variant: "secondary",
                    size: "sm",
                    onClick: p
                  }, {
                    default: h(() => [...G[27] || (G[27] = [
                      x(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  $(Re, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[10] || (G[10] = (fe) => X.$emit("view-nodes"))
                  }, {
                    default: h(() => [...G[28] || (G[28] = [
                      x(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (n(), L(ns, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  $(Re, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[11] || (G[11] = (fe) => X.$emit("view-nodes"))
                  }, {
                    default: h(() => [...G[29] || (G[29] = [
                      x(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0),
              B.value ? (n(), L(ns, {
                key: 5,
                severity: "warning",
                icon: "!",
                title: "Environment reproducibility needs attention",
                description: "Some dependencies are missing source details needed to rebuild this environment elsewhere.",
                items: H.value
              }, {
                actions: h(() => [
                  $(Re, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[12] || (G[12] = (fe) => c.value = !0)
                  }, {
                    default: h(() => [...G[30] || (G[30] = [
                      x(" Review Issues ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["items"])) : d.value ? (n(), L(ns, {
                key: 6,
                severity: "warning",
                icon: "!",
                title: "Environment reproducibility check failed",
                description: d.value
              }, {
                actions: h(() => [
                  $(Re, {
                    variant: "secondary",
                    size: "sm",
                    loading: v.value,
                    onClick: we
                  }, {
                    default: h(() => [...G[31] || (G[31] = [
                      x(" Retry ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }, 8, ["description"])) : y("", !0)
            ], 64)) : ue.value ? (n(), i("span", Fh, "No issues")) : (n(), i("span", Vh, "No runtime issues detected"))
          ])
        ]),
        _: 1
      }),
      $(Bv, {
        show: l.value,
        status: e.status,
        "is-repairing": S.value,
        onClose: G[13] || (G[13] = (fe) => l.value = !1),
        onNavigateWorkflows: w,
        onNavigateNodes: g,
        onRepair: C
      }, null, 8, ["show", "status", "is-repairing"]),
      c.value && u.value ? (n(), L(El, {
        key: 0,
        warnings: u.value.warnings,
        onClose: G[14] || (G[14] = (fe) => c.value = !1),
        onRevalidate: se
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), Wh = /* @__PURE__ */ Ie(Bh, [["__scopeId", "data-v-f6b165fd"]]);
async function An(e, t) {
  const o = await eo(e, t);
  if (!o.ok) {
    const a = await o.json().catch(() => ({}));
    throw new Error(a.error || a.message || `Request failed: ${o.status}`);
  }
  return o.json();
}
function Gh() {
  async function e() {
    try {
      return await An("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function t() {
    try {
      return await An("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await An("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await An("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: t,
    restart: o,
    kill: a
  };
}
const jh = {
  key: 0,
  class: "base-title-count"
}, Hh = /* @__PURE__ */ xe({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (t, o) => (n(), L(bl(`h${e.level}`), {
      class: Be(["base-title", e.variant])
    }, {
      default: h(() => [
        at(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", jh, "(" + m(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), fo = /* @__PURE__ */ Ie(Hh, [["__scopeId", "data-v-5a01561d"]]), qh = ["value", "disabled"], Kh = {
  key: 0,
  value: "",
  disabled: ""
}, Jh = ["value"], Qh = {
  key: 0,
  class: "base-select-error"
}, Yh = /* @__PURE__ */ xe({
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
    function o(a) {
      return typeof a == "string" ? a : a.label;
    }
    return (a, l) => (n(), i("div", {
      class: Be(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Be(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => a.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (n(), i("option", Kh, m(e.placeholder), 1)) : y("", !0),
        (n(!0), i(W, null, ye(e.options, (r) => (n(), i("option", {
          key: t(r),
          value: t(r)
        }, m(o(r)), 9, Jh))), 128))
      ], 42, qh),
      e.error ? (n(), i("span", Qh, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), qn = /* @__PURE__ */ Ie(Yh, [["__scopeId", "data-v-4996bfe0"]]), Xh = { class: "popover-header" }, Zh = { class: "popover-title" }, ey = { class: "popover-content" }, ty = {
  key: 0,
  class: "popover-actions"
}, sy = /* @__PURE__ */ xe({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" },
    overlayZIndex: { default: 10004 }
  },
  emits: ["close"],
  setup(e) {
    return (t, o) => (n(), L(Zt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "popover-overlay",
        style: Nt({ zIndex: e.overlayZIndex }),
        onClick: o[2] || (o[2] = (a) => t.$emit("close"))
      }, [
        s("div", {
          class: "popover",
          style: Nt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = vt(() => {
          }, ["stop"]))
        }, [
          s("div", Xh, [
            s("h4", Zh, m(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", ey, [
            at(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (n(), i("div", ty, [
            at(t.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ], 4)) : y("", !0)
    ]));
  }
}), fs = /* @__PURE__ */ Ie(sy, [["__scopeId", "data-v-7c1f5547"]]), oy = { class: "detail-section" }, ny = {
  key: 0,
  class: "empty-message"
}, ay = { class: "model-header" }, ly = { class: "model-name" }, iy = { class: "model-details" }, ry = { class: "model-row" }, cy = { class: "model-row" }, uy = { class: "label" }, dy = {
  key: 0,
  class: "model-row model-row-nodes"
}, my = { class: "node-list" }, fy = ["onClick"], vy = {
  key: 1,
  class: "model-row"
}, py = { class: "value" }, gy = {
  key: 2,
  class: "model-row"
}, hy = { class: "value error" }, yy = {
  key: 0,
  class: "model-actions"
}, wy = { class: "detail-section" }, _y = {
  key: 0,
  class: "empty-message"
}, ky = { class: "node-content" }, by = { class: "node-main" }, $y = { class: "node-name" }, Cy = { class: "node-badge" }, xy = {
  key: 0,
  class: "node-version"
}, Sy = ["onClick"], Iy = {
  key: 2,
  class: "node-install-queued"
}, Ey = {
  key: 0,
  class: "node-guidance"
}, Ty = { class: "details-footer" }, My = { class: "details-footer-actions" }, Py = /* @__PURE__ */ xe({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: t }) {
    const o = e, a = t, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = ct(), d = k(null), v = k(!1), f = k(null), p = k(!1), w = k({}), g = k(!1), _ = k(/* @__PURE__ */ new Set()), b = k(/* @__PURE__ */ new Set()), S = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function C(oe) {
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
    function N(oe) {
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
    function F(oe) {
      if (!oe.loaded_by || oe.loaded_by.length === 0) return [];
      const B = oe.hash || oe.filename;
      return _.value.has(B) ? oe.loaded_by : oe.loaded_by.slice(0, 3);
    }
    function V(oe) {
      return _.value.has(oe);
    }
    function D(oe) {
      _.value.has(oe) ? _.value.delete(oe) : _.value.add(oe), _.value = new Set(_.value);
    }
    async function q() {
      v.value = !0, f.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (oe) {
        f.value = oe instanceof Error ? oe.message : "Failed to load workflow details";
      } finally {
        v.value = !1;
      }
    }
    function ue(oe, B) {
      w.value[oe] = B, p.value = !0;
    }
    async function ie(oe) {
      try {
        await c(oe);
      } catch (B) {
        f.value = B instanceof Error ? B.message : "Failed to open file location";
      }
    }
    async function Y(oe) {
      if (oe.package_id)
        try {
          const B = oe.latest_version || "latest";
          await u({
            id: oe.package_id,
            version: B,
            selected_version: B,
            mode: "remote",
            channel: "default"
          }), b.value.add(oe.package_id);
        } catch (B) {
          f.value = B instanceof Error ? B.message : "Failed to queue node install";
        }
    }
    async function me() {
      if (!p.value) {
        a("close");
        return;
      }
      v.value = !0, f.value = null;
      try {
        for (const [oe, B] of Object.entries(w.value))
          await r(o.workflowName, oe, B);
        a("refresh"), a("close");
      } catch (oe) {
        f.value = oe instanceof Error ? oe.message : "Failed to save changes";
      } finally {
        v.value = !1;
      }
    }
    return lt(q), (oe, B) => (n(), i(W, null, [
      $($t, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: v.value,
        error: f.value || void 0,
        onClose: B[5] || (B[5] = (H) => a("close"))
      }, {
        body: h(() => [
          d.value ? (n(), i(W, { key: 0 }, [
            s("section", oy, [
              $(fo, { variant: "section" }, {
                default: h(() => [
                  x("MODELS USED (" + m(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (n(), i("div", ny, " No models used in this workflow ")) : y("", !0),
              (n(!0), i(W, null, ye(d.value.models, (H) => {
                var we;
                return n(), i("div", {
                  key: H.hash || H.filename,
                  class: "model-card"
                }, [
                  s("div", ay, [
                    B[7] || (B[7] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", ly, m(H.filename), 1)
                  ]),
                  s("div", iy, [
                    s("div", ry, [
                      B[8] || (B[8] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Be(["value", C(H.status)])
                      }, m(I(H.status)), 3)
                    ]),
                    s("div", cy, [
                      s("span", uy, [
                        B[9] || (B[9] = x(" Importance: ", -1)),
                        $(nc, {
                          size: 14,
                          title: "About importance levels",
                          onClick: B[0] || (B[0] = (se) => g.value = !0)
                        })
                      ]),
                      $(qn, {
                        "model-value": w.value[H.filename] || H.importance,
                        options: S,
                        "onUpdate:modelValue": (se) => ue(H.filename, se)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    H.loaded_by && H.loaded_by.length > 0 ? (n(), i("div", dy, [
                      B[10] || (B[10] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", my, [
                        (n(!0), i(W, null, ye(F(H), (se, de) => (n(), i("div", {
                          key: `${se.node_id}-${de}`,
                          class: "node-reference"
                        }, m(se.node_type) + " (Node #" + m(se.node_id) + ") ", 1))), 128)),
                        H.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (se) => D(H.hash || H.filename)
                        }, m(V(H.hash || H.filename) ? "▼ Show less" : `▶ View all (${H.loaded_by.length})`), 9, fy)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    H.size_mb ? (n(), i("div", vy, [
                      B[11] || (B[11] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", py, m(H.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    H.has_category_mismatch ? (n(), i("div", gy, [
                      B[14] || (B[14] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", hy, [
                        B[12] || (B[12] = x(" In ", -1)),
                        s("code", null, m(H.actual_category) + "/", 1),
                        B[13] || (B[13] = x(" but loader needs ", -1)),
                        s("code", null, m((we = H.expected_categories) == null ? void 0 : we[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  H.status !== "available" ? (n(), i("div", yy, [
                    H.status === "downloadable" ? (n(), L(Ue, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: B[1] || (B[1] = (se) => a("resolve"))
                    }, {
                      default: h(() => [...B[15] || (B[15] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    })) : H.status === "category_mismatch" && H.file_path ? (n(), L(Ue, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => ie(H.file_path)
                    }, {
                      default: h(() => [...B[16] || (B[16] = [
                        x(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : H.status !== "path_mismatch" ? (n(), L(Ue, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: B[2] || (B[2] = (se) => a("resolve"))
                    }, {
                      default: h(() => [...B[17] || (B[17] = [
                        x(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            s("section", wy, [
              $(fo, { variant: "section" }, {
                default: h(() => [
                  x("NODES USED (" + m(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (n(), i("div", _y, " No custom nodes used in this workflow ")) : y("", !0),
              (n(!0), i(W, null, ye(d.value.nodes, (H, we) => (n(), i("div", {
                key: `${H.name}-${H.status}-${we}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Be(["node-status", E(H.status)])
                }, m(M(H.status)), 3),
                s("div", ky, [
                  s("div", by, [
                    s("span", $y, m(H.name), 1),
                    s("span", Cy, m(N(H.status)), 1),
                    H.version ? (n(), i("span", xy, "v" + m(H.version), 1)) : y("", !0),
                    H.status === "uninstallable" && H.package_id && !b.value.has(H.package_id) ? (n(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (se) => Y(H)
                    }, " Install ", 8, Sy)) : H.status === "uninstallable" && H.package_id && b.value.has(H.package_id) ? (n(), i("span", Iy, " Queued ")) : y("", !0)
                  ]),
                  H.guidance ? (n(), i("div", Ey, m(H.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          s("div", Ty, [
            $(Ue, {
              variant: "secondary",
              onClick: B[3] || (B[3] = (H) => a("resolve"))
            }, {
              default: h(() => [...B[18] || (B[18] = [
                x(" Review Resolution ", -1)
              ])]),
              _: 1
            }),
            s("div", My, [
              $(Ue, {
                variant: "secondary",
                onClick: B[4] || (B[4] = (H) => a("close"))
              }, {
                default: h(() => [...B[19] || (B[19] = [
                  x(" Close ", -1)
                ])]),
                _: 1
              }),
              p.value ? (n(), L(Ue, {
                key: 0,
                variant: "primary",
                onClick: me
              }, {
                default: h(() => [...B[20] || (B[20] = [
                  x(" Save Changes ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      $(fs, {
        show: g.value,
        title: "Model Importance Levels",
        onClose: B[6] || (B[6] = (H) => g.value = !1)
      }, {
        content: h(() => [...B[21] || (B[21] = [
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
}), Ry = /* @__PURE__ */ Ie(Py, [["__scopeId", "data-v-00cf34e6"]]), rt = ho({
  items: [],
  status: "idle"
});
let Is = null;
function uc() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Wa(e) {
  return rt.items.find((t) => t.id === e);
}
async function Co() {
  if (rt.status === "downloading") return;
  const e = rt.items.find((t) => t.status === "queued");
  if (!e) {
    rt.status = "idle";
    return;
  }
  rt.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Ly(e), e.status = "completed", e.progress = 100;
  } catch (t) {
    e.status = "failed", e.error = t instanceof Error ? t.message : "Download failed", e.retries++;
  } finally {
    rt.status = "idle", Co();
  }
}
async function Ly(e) {
  return new Promise((t, o) => {
    Is && (Is.close(), Is = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    Is = l;
    let r = Date.now(), c = 0, u = Date.now(), d = !1;
    const v = 2e3, f = window.setInterval(() => {
      d || Date.now() - u > v && (e.speed = 0, e.eta = 0);
    }, 250), p = () => {
      window.clearInterval(f);
    };
    l.onmessage = (w) => {
      try {
        const g = JSON.parse(w.data);
        switch (g.type) {
          case "progress":
            e.downloaded = g.downloaded || 0, e.size = g.total || e.size, u = Date.now();
            const _ = u, b = (_ - r) / 1e3, S = e.downloaded - c;
            if (S > 0 && b > 0)
              if (e.speed = S / b, r = _, c = e.downloaded, e.speed > 0 && e.size > 0) {
                const C = e.size - e.downloaded;
                e.eta = C / e.speed;
              } else
                e.eta = 0;
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            d = !0, p(), l.close(), Is = null, t();
            break;
          case "error":
            d = !0, p(), l.close(), Is = null, o(new Error(g.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      p(), l.close(), Is = null, d || o(new Error("Connection lost"));
    };
  });
}
async function Dy() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const t = await e.json();
    if (!t.pending_downloads || t.pending_downloads.length === 0) return;
    for (const o of t.pending_downloads) {
      if (rt.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const a = {
        id: uc(),
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
      rt.items.push(a);
    }
    console.log(`[ComfyGit] Loaded ${t.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function Bo() {
  function e(S) {
    for (const C of S) {
      if (rt.items.some(
        (M) => M.url === C.url && M.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(M.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const E = {
        id: uc(),
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
      rt.items.push(E);
    }
    rt.status === "idle" && Co();
  }
  async function t(S) {
    const C = Wa(S);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Is && (Is.close(), Is = null), C.status = "failed", C.error = "Cancelled by user", rt.status = "idle", Co();
      } else if (C.status === "queued") {
        const I = rt.items.findIndex((E) => E.id === S);
        I >= 0 && rt.items.splice(I, 1);
      }
    }
  }
  function o(S) {
    const C = Wa(S);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, rt.status === "idle" && Co());
  }
  function a(S) {
    const C = Wa(S);
    !C || C.status !== "paused" || (C.status = "queued", rt.status === "idle" && Co());
  }
  function l() {
    const S = rt.items.filter((C) => C.status === "paused");
    for (const C of S)
      C.status = "queued";
    rt.status === "idle" && Co();
  }
  function r(S) {
    const C = rt.items.findIndex((I) => I.id === S);
    C >= 0 && ["completed", "failed", "paused"].includes(rt.items[C].status) && rt.items.splice(C, 1);
  }
  function c() {
    rt.items = rt.items.filter((S) => S.status !== "completed");
  }
  function u() {
    rt.items = rt.items.filter((S) => S.status !== "failed");
  }
  const d = R(
    () => rt.items.find((S) => S.status === "downloading")
  ), v = R(
    () => rt.items.filter((S) => S.status === "queued")
  ), f = R(
    () => rt.items.filter((S) => S.status === "completed")
  ), p = R(
    () => rt.items.filter((S) => S.status === "failed")
  ), w = R(
    () => rt.items.filter((S) => S.status === "paused")
  ), g = R(() => rt.items.length > 0), _ = R(
    () => rt.items.filter((S) => S.status === "queued" || S.status === "downloading").length
  ), b = R(
    () => rt.items.some((S) => S.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Jn(rt),
    // Computed
    currentDownload: d,
    queuedItems: v,
    completedItems: f,
    failedItems: p,
    pausedItems: w,
    hasItems: g,
    activeCount: _,
    hasPaused: b,
    // Actions
    addToQueue: e,
    cancelDownload: t,
    retryDownload: o,
    resumeDownload: a,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: c,
    clearFailed: u,
    loadPendingDownloads: Dy
  };
}
function dc() {
  const e = k(null), t = k(null), o = k([]), a = k([]), l = k(!1), r = k(null);
  async function c(I, E) {
    const M = await eo(I, E);
    if (!M.ok) {
      const N = await M.json().catch(() => ({})), F = N.error || N.message || `Request failed: ${M.status}`;
      throw new Error(F);
    }
    return M.json();
  }
  async function u(I) {
    l.value = !0, r.value = null;
    try {
      let E;
      return Jo() || (E = await c(
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
  async function d(I, E, M, N) {
    l.value = !0, r.value = null;
    try {
      let F;
      if (!Jo()) {
        const V = Object.fromEntries(E), D = Object.fromEntries(M), q = N ? Array.from(N) : [];
        F = await c(
          `/v2/comfygit/workflow/${I}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: V,
              model_choices: D,
              skipped_packages: q
            })
          }
        );
      }
      return t.value = F, F;
    } catch (F) {
      const V = F instanceof Error ? F.message : "Unknown error occurred";
      throw r.value = V, F;
    } finally {
      l.value = !1;
    }
  }
  async function v(I, E = 10) {
    l.value = !0, r.value = null;
    try {
      let M;
      return Jo() || (M = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: I, limit: E })
        }
      )), o.value = M.results, M.results;
    } catch (M) {
      const N = M instanceof Error ? M.message : "Unknown error occurred";
      throw r.value = N, M;
    } finally {
      l.value = !1;
    }
  }
  async function f(I, E = 10) {
    l.value = !0, r.value = null;
    try {
      let M;
      return Jo() || (M = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: I, limit: E })
        }
      )), a.value = M.results, M.results;
    } catch (M) {
      const N = M instanceof Error ? M.message : "Unknown error occurred";
      throw r.value = N, M;
    } finally {
      l.value = !1;
    }
  }
  const p = ho({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: [],
    nodesMarkedOptional: [],
    nodesMapped: []
  });
  function w() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.nodesInstalled = [], p.nodesMarkedOptional = [], p.nodesMapped = [], p.installError = void 0, p.needsRestart = void 0, p.error = void 0, p.nodeInstallProgress = void 0;
  }
  async function g(I) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Jo(), await _(I);
    } catch (E) {
      const M = E instanceof Error ? E.message : "Failed to install nodes";
      throw p.installError = M, E;
    }
  }
  async function _(I) {
    var M;
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
      const N = new Map(((M = E.failed) == null ? void 0 : M.map((F) => [F.node_id, F.error])) || []);
      for (let F = 0; F < p.nodesToInstall.length; F++) {
        const V = p.nodesToInstall[F], D = N.get(V);
        p.nodeInstallProgress.completedNodes.push({
          node_id: V,
          success: !D,
          error: D
        });
      }
    }
    return p.nodesInstalled = E.nodes_installed, p.needsRestart = E.nodes_installed.length > 0, E.failed && E.failed.length > 0 && (p.installError = `${E.failed.length} package(s) failed to install`), E;
  }
  async function b(I, E, M) {
    w(), p.phase = "resolving", r.value = null;
    const N = Object.fromEntries(E), F = Object.fromEntries(M);
    try {
      const V = await fetch(`/v2/comfygit/workflow/${I}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: N,
          model_choices: F
        })
      });
      if (!V.ok)
        throw new Error(`Request failed: ${V.status}`);
      if (!V.body)
        throw new Error("No response body");
      const D = V.body.getReader(), q = new TextDecoder();
      let ue = "";
      for (; ; ) {
        const { done: ie, value: Y } = await D.read();
        if (ie) break;
        ue += q.decode(Y, { stream: !0 });
        const me = ue.split(`

`);
        ue = me.pop() || "";
        for (const oe of me) {
          if (!oe.trim()) continue;
          const B = oe.split(`
`);
          let H = "", we = "";
          for (const se of B)
            se.startsWith("event: ") ? H = se.slice(7) : se.startsWith("data: ") && (we = se.slice(6));
          if (we)
            try {
              const se = JSON.parse(we);
              S(H, se);
            } catch (se) {
              console.warn("Failed to parse SSE event:", se);
            }
        }
      }
    } catch (V) {
      const D = V instanceof Error ? V.message : "Unknown error occurred";
      throw r.value = D, p.error = D, p.phase = "error", V;
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
  function C(I, E) {
    const { addToQueue: M } = Bo(), N = E.filter((F) => F.url && F.target_path).map((F) => ({
      workflow: I,
      filename: F.filename,
      url: F.url,
      targetPath: F.target_path,
      size: F.size || 0,
      type: "model"
    }));
    return N.length > 0 && M(N), N.length;
  }
  return {
    // State
    result: e,
    appliedResult: t,
    searchResults: o,
    modelSearchResults: a,
    isLoading: l,
    error: r,
    progress: p,
    // Methods
    analyzeWorkflow: u,
    applyResolution: d,
    applyResolutionWithProgress: b,
    installNodes: g,
    searchNodes: v,
    searchModels: f,
    resetProgress: w,
    queueModelDownloads: C
  };
}
const Ny = { class: "resolution-stepper" }, Uy = { class: "stepper-header" }, Oy = ["onClick"], Ay = {
  key: 0,
  class: "step-icon"
}, zy = {
  key: 1,
  class: "step-number"
}, Fy = { class: "step-label" }, Vy = {
  key: 0,
  class: "step-connector"
}, By = { class: "stepper-content" }, Wy = /* @__PURE__ */ xe({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(e, { emit: t }) {
    const o = e, a = t;
    function l(v) {
      var f;
      if ((f = o.stepStats) != null && f[v]) {
        const p = o.stepStats[v];
        return p.total > 0 && p.resolved === p.total;
      }
      return o.completedSteps.includes(v);
    }
    function r(v) {
      var f;
      if ((f = o.stepStats) != null && f[v]) {
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
      a("step-change", v);
    }
    return (v, f) => (n(), i("div", Ny, [
      s("div", Uy, [
        (n(!0), i(W, null, ye(e.steps, (p, w) => (n(), i("div", {
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
            l(p.id) ? (n(), i("span", Ay, "✓")) : (n(), i("span", zy, m(w + 1), 1))
          ], 2),
          s("div", Fy, m(p.label), 1),
          w < e.steps.length - 1 ? (n(), i("div", Vy)) : y("", !0)
        ], 10, Oy))), 128))
      ]),
      s("div", By, [
        at(v.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Gy = /* @__PURE__ */ Ie(Wy, [["__scopeId", "data-v-2a7b3af8"]]), jy = { class: "item-body" }, Hy = {
  key: 0,
  class: "resolved-state"
}, qy = { class: "resolved-message" }, Ky = {
  key: 1,
  class: "unresolved"
}, Jy = {
  key: 0,
  class: "installed-packs-section"
}, Qy = { class: "installed-packs-list" }, Yy = ["onClick"], Xy = { class: "installed-pack-name" }, Zy = { class: "installed-pack-source" }, e1 = { class: "action-buttons" }, t1 = /* @__PURE__ */ xe({
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
    const o = e, a = t, l = R(() => !!o.choice), r = R(() => {
      var f;
      return (f = o.choice) == null ? void 0 : f.action;
    }), c = R(() => {
      var f;
      return (f = o.choice) == null ? void 0 : f.package_id;
    }), u = R(() => o.installedNodePacks || []), d = R(() => {
      var f, p;
      switch (r.value) {
        case "install":
          return ((f = o.choice) == null ? void 0 : f.install_source) === "git" ? c.value ? `Will install ${c.value} from GitHub` : "Will install from GitHub" : ((p = o.choice) == null ? void 0 : p.install_source) === "registry" ? c.value ? `Will install ${c.value} from Registry` : "Will install from Registry" : c.value ? `Will install ${c.value}` : "Will install selected package";
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
    function v(f) {
      switch (f) {
        case "development":
          return "dev";
        case "git":
          return "git";
        case "registry":
          return "registry";
        default:
          return f || "unknown";
      }
    }
    return (f, p) => (n(), i("div", {
      class: Be(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: l.value }])
    }, [
      s("div", jy, [
        l.value ? (n(), i("div", Hy, [
          s("span", qy, m(d.value), 1),
          $(Ue, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => a("clear-choice"))
          }, {
            default: h(() => [...p[4] || (p[4] = [
              x(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : (n(), i("div", Ky, [
          u.value.length > 0 ? (n(), i("div", Jy, [
            p[5] || (p[5] = s("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            s("div", Qy, [
              (n(!0), i(W, null, ye(u.value, (w) => (n(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => a("installed-pack-selected", w.package_id)
              }, [
                s("span", Xy, m(w.package_id), 1),
                s("span", Zy, m(v(w.source)), 1)
              ], 8, Yy))), 128))
            ])
          ])) : y("", !0),
          s("div", e1, [
            $(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => a("search"))
            }, {
              default: h(() => [...p[6] || (p[6] = [
                x(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            $(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => a("manual-entry"))
            }, {
              default: h(() => [...p[7] || (p[7] = [
                x(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            $(Ue, {
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
}), s1 = /* @__PURE__ */ Ie(t1, [["__scopeId", "data-v-4338b305"]]), o1 = { class: "item-navigator" }, n1 = { class: "nav-item-info" }, a1 = ["title"], l1 = { class: "nav-controls" }, i1 = { class: "nav-arrows" }, r1 = ["disabled"], c1 = ["disabled"], u1 = { class: "nav-position" }, d1 = /* @__PURE__ */ xe({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const o = t;
    return (a, l) => (n(), i("div", o1, [
      s("div", n1, [
        s("code", {
          class: "item-name",
          title: e.itemName
        }, m(e.itemName), 9, a1)
      ]),
      s("div", l1, [
        s("div", i1, [
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, r1),
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, c1)
        ]),
        s("span", u1, m(e.currentIndex + 1) + "/" + m(e.totalItems), 1)
      ])
    ]));
  }
}), mc = /* @__PURE__ */ Ie(d1, [["__scopeId", "data-v-74af7920"]]), m1 = { class: "node-resolution-step" }, f1 = {
  key: 0,
  class: "auto-resolved-section"
}, v1 = { class: "section-header" }, p1 = { class: "stat-badge" }, g1 = { class: "resolved-packages-list" }, h1 = { class: "package-info" }, y1 = { class: "package-id" }, w1 = { class: "node-count" }, _1 = { class: "package-actions" }, k1 = {
  key: 0,
  class: "status-badge install"
}, b1 = {
  key: 1,
  class: "status-badge skip"
}, $1 = ["onClick"], C1 = {
  key: 1,
  class: "section-divider"
}, x1 = { class: "step-header" }, S1 = { class: "stat-badge" }, I1 = {
  key: 1,
  class: "step-body"
}, E1 = {
  key: 3,
  class: "empty-state"
}, T1 = { class: "node-modal-body" }, M1 = { class: "node-search-results-container" }, P1 = {
  key: 0,
  class: "node-search-results"
}, R1 = { class: "node-result-header" }, L1 = { class: "node-result-title" }, D1 = { class: "node-result-package-id" }, N1 = {
  key: 0,
  class: "node-result-display-name"
}, U1 = {
  key: 0,
  class: "node-result-stats",
  "aria-label": "Package popularity"
}, O1 = {
  key: 0,
  class: "node-result-stat"
}, A1 = {
  key: 1,
  class: "node-result-stat"
}, z1 = {
  key: 0,
  class: "node-result-description"
}, F1 = { class: "node-result-actions" }, V1 = ["onClick"], B1 = ["onClick"], W1 = {
  key: 1,
  class: "node-empty-state"
}, G1 = {
  key: 2,
  class: "node-empty-state"
}, j1 = {
  key: 3,
  class: "node-empty-state"
}, H1 = { class: "node-manual-entry-modal" }, q1 = { class: "node-modal-body" }, K1 = { class: "node-modal-actions" }, J1 = /* @__PURE__ */ xe({
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
    const o = e, a = t, { searchNodes: l } = dc(), r = k(0), c = k(!1), u = k(!1), d = k(""), v = k(""), f = k([]), p = k(!1), w = k(!1);
    function g() {
      w.value && ie(), w.value = !1;
    }
    const _ = R(() => o.nodes[r.value]), b = R(() => o.nodes.filter((K) => o.nodeChoices.has(K.node_type)).length), S = R(() => o.autoResolvedPackages.filter((K) => !o.skippedPackages.has(K.package_id)).length);
    function C(K) {
      return o.skippedPackages.has(K);
    }
    function I(K) {
      a("package-skip", K);
    }
    function E(K) {
      K >= 0 && K < o.nodes.length && (r.value = K);
    }
    function M() {
      var K;
      for (let ee = r.value + 1; ee < o.nodes.length; ee++) {
        const te = o.nodes[ee];
        if (!((K = o.nodeChoices) != null && K.has(te.node_type))) {
          E(ee);
          return;
        }
      }
    }
    function N() {
      _.value && (a("mark-optional", _.value.node_type), At(() => M()));
    }
    function F() {
      _.value && (a("skip", _.value.node_type), At(() => M()));
    }
    function V() {
      _.value && a("clear-choice", _.value.node_type);
    }
    function D() {
      _.value && (d.value = _.value.node_type, f.value = [], c.value = !0, B(d.value));
    }
    function q() {
      v.value = "", u.value = !0;
    }
    function ue(K) {
      _.value && (a("installed-pack-selected", _.value.node_type, K), At(() => M()));
    }
    function ie() {
      c.value = !1, d.value = "", f.value = [];
    }
    function Y() {
      u.value = !1, v.value = "";
    }
    let me = null;
    function oe() {
      me && clearTimeout(me), me = setTimeout(() => {
        B(d.value);
      }, 300);
    }
    async function B(K) {
      if (!K.trim()) {
        f.value = [];
        return;
      }
      p.value = !0;
      try {
        f.value = await l(K, 10);
      } catch {
        f.value = [];
      } finally {
        p.value = !1;
      }
    }
    function H(K) {
      _.value && (a("manual-entry", _.value.node_type, K.package_id, {
        install_source: "registry",
        version: K.registry_version || null
      }), ie(), At(() => M()));
    }
    function we(K) {
      !_.value || !K.repository || (a("manual-entry", _.value.node_type, K.package_id, {
        install_source: "git",
        repository: K.repository
      }), ie(), At(() => M()));
    }
    function se(K) {
      return !!K.github_stars || !!K.downloads;
    }
    function de(K) {
      return K ? Intl.NumberFormat("en", {
        notation: "compact",
        maximumFractionDigits: K >= 1e3 ? 1 : 0
      }).format(K) : "";
    }
    function ce() {
      !_.value || !v.value.trim() || (a("manual-entry", _.value.node_type, v.value.trim()), Y(), At(() => M()));
    }
    return (K, ee) => {
      var te, Me;
      return n(), i("div", m1, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", f1, [
          s("div", v1, [
            ee[6] || (ee[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", p1, m(S.value) + "/" + m(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", g1, [
            (n(!0), i(W, null, ye(e.autoResolvedPackages, (Se) => (n(), i("div", {
              key: Se.package_id,
              class: "resolved-package-item"
            }, [
              s("div", h1, [
                s("code", y1, m(Se.package_id), 1),
                s("span", w1, m(Se.node_types_count) + " node type" + m(Se.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", _1, [
                C(Se.package_id) ? (n(), i("span", b1, " SKIPPED ")) : (n(), i("span", k1, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (ze) => I(Se.package_id)
                }, m(C(Se.package_id) ? "Include" : "Skip"), 9, $1)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", C1)) : y("", !0),
        e.nodes.length > 0 ? (n(), i(W, { key: 2 }, [
          s("div", x1, [
            ee[7] || (ee[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", S1, m(b.value) + "/" + m(e.nodes.length) + " resolved", 1)
          ]),
          _.value ? (n(), L(mc, {
            key: 0,
            "item-name": _.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: ee[0] || (ee[0] = (Se) => E(r.value - 1)),
            onNext: ee[1] || (ee[1] = (Se) => E(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          _.value ? (n(), i("div", I1, [
            $(s1, {
              "node-type": _.value.node_type,
              "has-multiple-options": !!((te = _.value.options) != null && te.length),
              choice: (Me = e.nodeChoices) == null ? void 0 : Me.get(_.value.node_type),
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: N,
              onSkip: F,
              onManualEntry: q,
              onSearch: D,
              onClearChoice: V,
              onInstalledPackSelected: ue
            }, null, 8, ["node-type", "has-multiple-options", "choice", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", E1, [...ee[8] || (ee[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (n(), L(Zt, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: ee[4] || (ee[4] = vt((Se) => w.value = !0, ["self"])),
            onMouseup: vt(g, ["self"])
          }, [
            s("div", {
              class: "node-search-modal",
              onMousedown: ee[3] || (ee[3] = (Se) => w.value = !1)
            }, [
              s("div", { class: "node-modal-header" }, [
                ee[9] || (ee[9] = s("h4", null, "Search Node Registry", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: ie
                }, "✕")
              ]),
              s("div", T1, [
                $(bt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": ee[2] || (ee[2] = (Se) => d.value = Se),
                  placeholder: "Search registry by node type or package name...",
                  onInput: oe
                }, null, 8, ["modelValue"]),
                s("div", M1, [
                  f.value.length > 0 ? (n(), i("div", P1, [
                    (n(!0), i(W, null, ye(f.value, (Se) => (n(), i("div", {
                      key: Se.package_id,
                      class: "node-search-result-item"
                    }, [
                      s("div", R1, [
                        s("div", L1, [
                          s("code", D1, m(Se.package_id), 1),
                          Se.display_name && Se.display_name !== Se.package_id ? (n(), i("span", N1, m(Se.display_name), 1)) : y("", !0)
                        ]),
                        se(Se) ? (n(), i("div", U1, [
                          Se.github_stars ? (n(), i("span", O1, " ★ " + m(de(Se.github_stars)), 1)) : y("", !0),
                          Se.downloads ? (n(), i("span", A1, " ↓ " + m(de(Se.downloads)), 1)) : y("", !0)
                        ])) : y("", !0)
                      ]),
                      Se.description ? (n(), i("div", z1, m(Se.description), 1)) : y("", !0),
                      s("div", F1, [
                        Se.can_install_registry ? (n(), i("button", {
                          key: 0,
                          type: "button",
                          class: "node-result-action",
                          onClick: (ze) => H(Se)
                        }, " Install from Registry ", 8, V1)) : y("", !0),
                        Se.can_install_git ? (n(), i("button", {
                          key: 1,
                          type: "button",
                          class: "node-result-action secondary",
                          onClick: (ze) => we(Se)
                        }, " Install from GitHub ", 8, B1)) : y("", !0)
                      ])
                    ]))), 128))
                  ])) : p.value ? (n(), i("div", W1, "Searching...")) : d.value ? (n(), i("div", G1, 'No packages found matching "' + m(d.value) + '"', 1)) : (n(), i("div", j1, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (n(), L(Zt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: vt(Y, ["self"])
          }, [
            s("div", H1, [
              s("div", { class: "node-modal-header" }, [
                ee[10] || (ee[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              s("div", q1, [
                $(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": ee[5] || (ee[5] = (Se) => v.value = Se),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", K1, [
                  $(Ue, {
                    variant: "secondary",
                    onClick: Y
                  }, {
                    default: h(() => [...ee[11] || (ee[11] = [
                      x("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  $(Ue, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: ce
                  }, {
                    default: h(() => [...ee[12] || (ee[12] = [
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
}), Q1 = /* @__PURE__ */ Ie(J1, [["__scopeId", "data-v-a85bb4b7"]]), Y1 = /* @__PURE__ */ xe({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = R(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), a = R(() => `confidence-${o.value}`), l = R(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, c) => (n(), i("span", {
      class: Be(["confidence-badge", a.value, e.size])
    }, m(l.value), 3));
  }
}), X1 = /* @__PURE__ */ Ie(Y1, [["__scopeId", "data-v-17ec4b80"]]), Z1 = { class: "node-info" }, ew = { class: "node-info-text" }, tw = { class: "item-body" }, sw = {
  key: 0,
  class: "resolved-state"
}, ow = {
  key: 1,
  class: "multiple-options"
}, nw = { class: "options-list" }, aw = ["onClick"], lw = ["name", "value", "checked", "onChange"], iw = { class: "option-content" }, rw = { class: "option-header" }, cw = { class: "option-filename" }, uw = { class: "option-meta" }, dw = { class: "option-size" }, mw = { class: "option-category" }, fw = { class: "option-path" }, vw = { class: "action-buttons" }, pw = {
  key: 2,
  class: "unresolved"
}, gw = { class: "action-buttons" }, hw = /* @__PURE__ */ xe({
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
    const o = e, a = t, l = R(() => !!o.choice);
    R(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), R(() => {
      var d, v;
      return ((v = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const r = R(() => {
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
      a("option-selected", d);
    }
    function u(d) {
      if (!d) return "Unknown";
      const v = d / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, v) => (n(), i("div", {
      class: Be(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      s("div", Z1, [
        s("span", ew, [
          v[7] || (v[7] = x("Used by: ", -1)),
          s("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Be(["status-badge", r.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", tw, [
        l.value ? (n(), i("div", sw, [
          $(Ue, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (f) => a("clear-choice"))
          }, {
            default: h(() => [...v[8] || (v[8] = [
              x(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", ow, [
          v[12] || (v[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", nw, [
            (n(!0), i(W, null, ye(e.options, (f, p) => (n(), i("label", {
              key: f.model.hash,
              class: Be(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (w) => c(p)
            }, [
              s("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (w) => c(p)
              }, null, 40, lw),
              s("div", iw, [
                s("div", rw, [
                  s("span", cw, m(f.model.filename), 1),
                  $(X1, {
                    confidence: f.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", uw, [
                  s("span", dw, m(u(f.model.size)), 1),
                  s("span", mw, m(f.model.category), 1)
                ]),
                s("div", fw, m(f.model.relative_path), 1)
              ])
            ], 10, aw))), 128))
          ]),
          s("div", vw, [
            $(Ue, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (f) => a("search"))
            }, {
              default: h(() => [...v[9] || (v[9] = [
                x(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            $(Ue, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (f) => a("download-url"))
            }, {
              default: h(() => [...v[10] || (v[10] = [
                x(" Download URL ", -1)
              ])]),
              _: 1
            }),
            $(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (f) => a("mark-optional"))
            }, {
              default: h(() => [...v[11] || (v[11] = [
                x(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", pw, [
          v[16] || (v[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", gw, [
            $(Ue, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (f) => a("search"))
            }, {
              default: h(() => [...v[13] || (v[13] = [
                x(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            $(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (f) => a("download-url"))
            }, {
              default: h(() => [...v[14] || (v[14] = [
                x(" Download URL ", -1)
              ])]),
              _: 1
            }),
            $(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (f) => a("mark-optional"))
            }, {
              default: h(() => [...v[15] || (v[15] = [
                x(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), yw = /* @__PURE__ */ Ie(hw, [["__scopeId", "data-v-8a82fefa"]]), ww = { class: "model-resolution-step" }, _w = { class: "step-header" }, kw = { class: "step-info" }, bw = { class: "step-title" }, $w = { class: "step-description" }, Cw = { class: "stat-badge" }, xw = {
  key: 1,
  class: "step-body"
}, Sw = {
  key: 2,
  class: "empty-state"
}, Iw = { class: "model-search-modal" }, Ew = { class: "model-modal-body" }, Tw = {
  key: 0,
  class: "model-search-results"
}, Mw = ["onClick"], Pw = { class: "model-result-header" }, Rw = { class: "model-result-filename" }, Lw = { class: "model-result-meta" }, Dw = { class: "model-result-category" }, Nw = { class: "model-result-size" }, Uw = {
  key: 0,
  class: "model-result-path"
}, Ow = {
  key: 1,
  class: "model-no-results"
}, Aw = {
  key: 2,
  class: "model-searching"
}, zw = { class: "model-download-url-modal" }, Fw = { class: "model-modal-body" }, Vw = { class: "model-input-group" }, Bw = { class: "model-input-group" }, Ww = { class: "model-modal-actions" }, Gw = /* @__PURE__ */ xe({
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
    function a(se) {
      var de;
      return se && ((de = o[se]) == null ? void 0 : de[0]) || null;
    }
    const l = e, r = t, c = k(0), u = k(!1), d = k(!1), v = k(""), f = k(""), p = k(""), w = k([]), g = k(!1), _ = R(() => l.models[c.value]), b = R(() => l.models.some((se) => se.is_download_intent)), S = R(() => l.models.filter(
      (se) => l.modelChoices.has(se.filename) || se.is_download_intent
    ).length), C = R(() => {
      var de;
      if (!_.value) return "";
      const se = a((de = _.value.reference) == null ? void 0 : de.node_type);
      return se ? `${se}/${_.value.filename}` : "";
    }), I = R(() => {
      var de;
      if (!_.value) return "not-found";
      const se = l.modelChoices.get(_.value.filename);
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
      return _.value.is_download_intent ? "download" : (de = _.value.options) != null && de.length ? "ambiguous" : "not-found";
    }), E = R(() => {
      var de, ce;
      if (!_.value) return;
      const se = l.modelChoices.get(_.value.filename);
      if (se)
        switch (se.action) {
          case "select":
            return (de = se.selected_model) != null && de.filename ? `→ ${se.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (ce = _.value.options) != null && ce.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function M(se) {
      se >= 0 && se < l.models.length && (c.value = se);
    }
    function N() {
      var se;
      for (let de = c.value + 1; de < l.models.length; de++) {
        const ce = l.models[de];
        if (!ce.is_download_intent && !((se = l.modelChoices) != null && se.has(ce.filename))) {
          M(de);
          return;
        }
      }
    }
    function F() {
      _.value && (r("mark-optional", _.value.filename), At(() => N()));
    }
    function V() {
      _.value && (r("skip", _.value.filename), At(() => N()));
    }
    function D(se) {
      _.value && (r("option-selected", _.value.filename, se), At(() => N()));
    }
    function q() {
      _.value && r("clear-choice", _.value.filename);
    }
    function ue() {
      _.value && (v.value = _.value.filename, u.value = !0);
    }
    function ie() {
      _.value && (f.value = _.value.download_source || "", p.value = _.value.target_path || C.value, d.value = !0);
    }
    function Y() {
      u.value = !1, v.value = "", w.value = [];
    }
    function me() {
      d.value = !1, f.value = "", p.value = "";
    }
    function oe() {
      g.value = !0, setTimeout(() => {
        g.value = !1;
      }, 300);
    }
    function B(se) {
      _.value && (Y(), At(() => N()));
    }
    function H() {
      !_.value || !f.value.trim() || (r("download-url", _.value.filename, f.value.trim(), p.value.trim() || void 0), me(), At(() => N()));
    }
    function we(se) {
      if (!se) return "Unknown";
      const de = se / (1024 * 1024 * 1024);
      return de >= 1 ? `${de.toFixed(2)} GB` : `${(se / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (se, de) => {
      var ce, K, ee;
      return n(), i("div", ww, [
        s("div", _w, [
          s("div", kw, [
            s("h3", bw, m(b.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", $w, m(b.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", Cw, m(S.value) + "/" + m(e.models.length) + " resolved", 1)
        ]),
        _.value ? (n(), L(mc, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: de[0] || (de[0] = (te) => M(c.value - 1)),
          onNext: de[1] || (de[1] = (te) => M(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (n(), i("div", xw, [
          $(yw, {
            filename: _.value.filename,
            "node-type": ((ce = _.value.reference) == null ? void 0 : ce.node_type) || "Unknown",
            "has-multiple-options": !!((K = _.value.options) != null && K.length),
            options: _.value.options,
            choice: (ee = e.modelChoices) == null ? void 0 : ee.get(_.value.filename),
            status: I.value,
            "status-label": E.value,
            onMarkOptional: F,
            onSkip: V,
            onDownloadUrl: ie,
            onSearch: ue,
            onOptionSelected: D,
            onClearChoice: q
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", Sw, [...de[5] || (de[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (n(), L(Zt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: vt(Y, ["self"])
          }, [
            s("div", Iw, [
              s("div", { class: "model-modal-header" }, [
                de[6] || (de[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              s("div", Ew, [
                $(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": de[2] || (de[2] = (te) => v.value = te),
                  placeholder: "Search by filename, category...",
                  onInput: oe
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (n(), i("div", Tw, [
                  (n(!0), i(W, null, ye(w.value, (te) => (n(), i("div", {
                    key: te.hash,
                    class: "model-search-result-item",
                    onClick: (Me) => B()
                  }, [
                    s("div", Pw, [
                      s("code", Rw, m(te.filename), 1)
                    ]),
                    s("div", Lw, [
                      s("span", Dw, m(te.category), 1),
                      s("span", Nw, m(we(te.size)), 1)
                    ]),
                    te.relative_path ? (n(), i("div", Uw, m(te.relative_path), 1)) : y("", !0)
                  ], 8, Mw))), 128))
                ])) : v.value && !g.value ? (n(), i("div", Ow, ' No models found matching "' + m(v.value) + '" ', 1)) : y("", !0),
                g.value ? (n(), i("div", Aw, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (n(), L(Zt, { to: "body" }, [
          d.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: vt(me, ["self"])
          }, [
            s("div", zw, [
              s("div", { class: "model-modal-header" }, [
                de[7] || (de[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: me
                }, "✕")
              ]),
              s("div", Fw, [
                s("div", Vw, [
                  de[8] || (de[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  $(bt, {
                    modelValue: f.value,
                    "onUpdate:modelValue": de[3] || (de[3] = (te) => f.value = te),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", Bw, [
                  de[9] || (de[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  $(bt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": de[4] || (de[4] = (te) => p.value = te),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", Ww, [
                  $(Ue, {
                    variant: "secondary",
                    onClick: me
                  }, {
                    default: h(() => [...de[10] || (de[10] = [
                      x("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  $(Ue, {
                    variant: "primary",
                    disabled: !f.value.trim() || !p.value.trim(),
                    onClick: H
                  }, {
                    default: h(() => [...de[11] || (de[11] = [
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
}), jw = /* @__PURE__ */ Ie(Gw, [["__scopeId", "data-v-5c700bfa"]]), Hw = { class: "applying-step" }, qw = {
  key: 0,
  class: "phase-content"
}, Kw = {
  key: 1,
  class: "phase-content"
}, Jw = { class: "phase-description" }, Qw = { class: "overall-progress" }, Yw = { class: "progress-bar" }, Xw = { class: "progress-label" }, Zw = { class: "install-list" }, e0 = { class: "install-icon" }, t0 = { key: 0 }, s0 = {
  key: 1,
  class: "spinner"
}, o0 = { key: 2 }, n0 = { key: 3 }, a0 = {
  key: 0,
  class: "install-error"
}, l0 = {
  key: 2,
  class: "phase-content"
}, i0 = { class: "phase-header" }, r0 = { class: "phase-title" }, c0 = { class: "completion-summary" }, u0 = {
  key: 0,
  class: "summary-item success"
}, d0 = { class: "summary-text" }, m0 = {
  key: 1,
  class: "summary-item success"
}, f0 = { class: "summary-text" }, v0 = {
  key: 2,
  class: "summary-item success"
}, p0 = { class: "summary-text" }, g0 = {
  key: 3,
  class: "summary-item error"
}, h0 = { class: "summary-text" }, y0 = {
  key: 4,
  class: "failed-list"
}, w0 = { class: "failed-node-id" }, _0 = { class: "failed-error" }, k0 = {
  key: 6,
  class: "summary-item success"
}, b0 = { class: "summary-text" }, $0 = {
  key: 7,
  class: "summary-note"
}, C0 = {
  key: 8,
  class: "restart-prompt"
}, x0 = {
  key: 3,
  class: "phase-content error"
}, S0 = { class: "error-message" }, I0 = /* @__PURE__ */ xe({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const t = e, o = R(() => {
      var b, S;
      const g = ((b = t.progress.nodeInstallProgress) == null ? void 0 : b.totalNodes) || t.progress.nodesToInstall.length;
      if (!g) return 0;
      const _ = ((S = t.progress.nodeInstallProgress) == null ? void 0 : S.completedNodes.length) ?? 0;
      return Math.round(_ / g * 100);
    }), a = R(() => {
      var g;
      return ((g = t.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.filter((_) => !_.success)) || [];
    }), l = R(() => a.value.length > 0), r = R(() => t.progress.nodesInstalled.length), c = R(() => {
      var g;
      return ((g = t.progress.nodesMarkedOptional) == null ? void 0 : g.length) || 0;
    }), u = R(() => {
      var g;
      return ((g = t.progress.nodesMapped) == null ? void 0 : g.length) || 0;
    }), d = R(() => t.progress.completedFiles.length > 0), v = R(() => r.value > 0 || c.value > 0 || u.value > 0 || d.value || !!t.progress.needsRestart), f = R(() => v.value ? "Workflow dependencies resolved" : "No changes applied");
    function p(g, _) {
      var S, C;
      const b = (S = t.progress.nodeInstallProgress) == null ? void 0 : S.completedNodes.find((I) => I.node_id === g);
      return b ? b.success ? "complete" : "failed" : ((C = t.progress.nodeInstallProgress) == null ? void 0 : C.currentIndex) === _ ? "installing" : "pending";
    }
    function w(g) {
      var _, b;
      return (b = (_ = t.progress.nodeInstallProgress) == null ? void 0 : _.completedNodes.find((S) => S.node_id === g)) == null ? void 0 : b.error;
    }
    return (g, _) => {
      var b, S, C, I;
      return n(), i("div", Hw, [
        e.progress.phase === "resolving" ? (n(), i("div", qw, [..._[2] || (_[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (n(), i("div", Kw, [
          _[3] || (_[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", Jw, " Installing " + m((((b = e.progress.nodeInstallProgress) == null ? void 0 : b.currentIndex) ?? 0) + 1) + " of " + m(((S = e.progress.nodeInstallProgress) == null ? void 0 : S.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", Qw, [
            s("div", Yw, [
              s("div", {
                class: "progress-fill",
                style: Nt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            s("span", Xw, m(((C = e.progress.nodeInstallProgress) == null ? void 0 : C.completedNodes.length) ?? 0) + " / " + m(((I = e.progress.nodeInstallProgress) == null ? void 0 : I.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", Zw, [
            (n(!0), i(W, null, ye(e.progress.nodesToInstall, (E, M) => (n(), i("div", {
              key: E,
              class: Be(["install-item", p(E, M)])
            }, [
              s("span", e0, [
                p(E, M) === "pending" ? (n(), i("span", t0, "○")) : p(E, M) === "installing" ? (n(), i("span", s0, "◌")) : p(E, M) === "complete" ? (n(), i("span", o0, "✓")) : p(E, M) === "failed" ? (n(), i("span", n0, "✗")) : y("", !0)
              ]),
              s("code", null, m(E), 1),
              w(E) ? (n(), i("span", a0, m(w(E)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", l0, [
          s("div", i0, [
            s("span", {
              class: Be(["phase-icon", l.value ? "warning" : "success"])
            }, m(l.value ? "⚠" : "✓"), 3),
            s("h3", r0, m(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", c0, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", u0, [
              _[4] || (_[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", d0, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            c.value > 0 ? (n(), i("div", m0, [
              _[5] || (_[5] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", f0, m(c.value) + " node type" + m(c.value > 1 ? "s" : "") + " marked optional", 1)
            ])) : y("", !0),
            u.value > 0 ? (n(), i("div", v0, [
              _[6] || (_[6] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", p0, m(u.value) + " node mapping" + m(u.value > 1 ? "s" : "") + " changed", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", g0, [
              _[7] || (_[7] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", h0, m(a.value.length) + " package" + m(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", y0, [
              (n(!0), i(W, null, ye(a.value, (E) => (n(), i("div", {
                key: E.node_id,
                class: "failed-item"
              }, [
                s("code", w0, m(E.node_id), 1),
                s("span", _0, m(E.error), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("button", {
              key: 5,
              class: "retry-button",
              onClick: _[0] || (_[0] = (E) => g.$emit("retry-failed"))
            }, " Retry Failed (" + m(a.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (n(), i("div", k0, [
              _[8] || (_[8] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", b0, m(f.value), 1)
            ])),
            d.value ? (n(), i("p", $0, "Model downloads will continue in the background.")) : y("", !0),
            e.progress.needsRestart ? (n(), i("div", C0, [
              _[9] || (_[9] = s("div", { class: "restart-warning" }, [
                s("span", { class: "warning-icon" }, "⚠"),
                s("div", { class: "warning-content" }, [
                  s("strong", null, "Restart Required"),
                  s("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              s("button", {
                class: "restart-button",
                onClick: _[1] || (_[1] = (E) => g.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (n(), i("div", x0, [
          _[10] || (_[10] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", S0, m(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), E0 = /* @__PURE__ */ Ie(I0, [["__scopeId", "data-v-7551fbc3"]]), T0 = {
  key: 0,
  class: "loading-state"
}, M0 = {
  key: 1,
  class: "wizard-content"
}, P0 = {
  key: 0,
  class: "step-content"
}, R0 = { class: "analysis-summary" }, L0 = { class: "analysis-header" }, D0 = { class: "summary-description" }, N0 = { class: "stats-grid" }, U0 = { class: "stat-card" }, O0 = { class: "stat-items" }, A0 = {
  key: 0,
  class: "stat-item success"
}, z0 = { class: "stat-count" }, F0 = {
  key: 1,
  class: "stat-item info"
}, V0 = { class: "stat-count" }, B0 = {
  key: 2,
  class: "stat-item warning"
}, W0 = { class: "stat-count" }, G0 = {
  key: 3,
  class: "stat-item warning"
}, j0 = { class: "stat-count" }, H0 = {
  key: 4,
  class: "stat-item warning"
}, q0 = { class: "stat-count" }, K0 = {
  key: 5,
  class: "stat-item error"
}, J0 = { class: "stat-count" }, Q0 = { class: "stat-card" }, Y0 = { class: "stat-items" }, X0 = { class: "stat-item success" }, Z0 = { class: "stat-count" }, e_ = {
  key: 0,
  class: "stat-item info"
}, t_ = { class: "stat-count" }, s_ = {
  key: 1,
  class: "stat-item warning"
}, o_ = { class: "stat-count" }, n_ = {
  key: 2,
  class: "stat-item warning"
}, a_ = { class: "stat-count" }, l_ = {
  key: 3,
  class: "stat-item error"
}, i_ = { class: "stat-count" }, r_ = {
  key: 0,
  class: "status-message warning"
}, c_ = { class: "status-text" }, u_ = {
  key: 1,
  class: "status-message warning"
}, d_ = { class: "status-text" }, m_ = {
  key: 2,
  class: "status-message info"
}, f_ = { class: "status-text" }, v_ = {
  key: 3,
  class: "status-message info"
}, p_ = { class: "status-text" }, g_ = {
  key: 4,
  class: "status-message info"
}, h_ = { class: "status-text" }, y_ = {
  key: 5,
  class: "status-message warning"
}, w_ = { class: "status-text" }, __ = {
  key: 6,
  class: "status-message success"
}, k_ = {
  key: 7,
  class: "category-mismatch-section"
}, b_ = { class: "mismatch-list" }, $_ = { class: "mismatch-path" }, C_ = { class: "mismatch-target" }, x_ = {
  key: 8,
  class: "category-mismatch-section"
}, S_ = { class: "mismatch-list" }, I_ = { class: "mismatch-path" }, E_ = { class: "status-text" }, T_ = {
  key: 1,
  class: "step-content node-step-content"
}, M_ = {
  key: 2,
  class: "step-content package-step-content"
}, P_ = { class: "package-step-header" }, R_ = { class: "stat-badge" }, L_ = {
  key: 0,
  class: "package-section"
}, D_ = { class: "package-section-header" }, N_ = { class: "package-section-title" }, U_ = { class: "stat-badge" }, O_ = { class: "package-list" }, A_ = { class: "package-info" }, z_ = { class: "item-name" }, F_ = { class: "package-meta" }, V_ = { class: "package-actions" }, B_ = {
  key: 0,
  class: "choice-badge install"
}, W_ = {
  key: 1,
  class: "choice-badge skip"
}, G_ = {
  key: 1,
  class: "community-node-section"
}, j_ = { class: "community-node-header" }, H_ = { class: "community-node-title" }, q_ = { class: "community-node-list" }, K_ = { class: "community-node-info" }, J_ = { class: "community-node-heading" }, Q_ = { class: "item-name" }, Y_ = { class: "community-node-package" }, X_ = { class: "community-node-meta" }, Z_ = { class: "community-node-guidance" }, ek = { key: 0 }, tk = {
  key: 0,
  class: "community-node-selection"
}, sk = { class: "community-selected-label" }, ok = {
  key: 1,
  class: "community-node-actions"
}, nk = {
  key: 4,
  class: "step-content"
}, ak = { class: "review-summary" }, lk = { class: "review-stats" }, ik = { class: "review-stat" }, rk = { class: "stat-value" }, ck = { class: "review-stat" }, uk = { class: "stat-value" }, dk = { class: "review-stat" }, mk = { class: "stat-value" }, fk = { class: "review-stat" }, vk = { class: "stat-value" }, pk = {
  key: 0,
  class: "review-section"
}, gk = { class: "section-title" }, hk = { class: "review-items" }, yk = { class: "item-name" }, wk = { class: "item-choice" }, _k = {
  key: 0,
  class: "choice-badge install"
}, kk = {
  key: 1,
  class: "choice-badge skip"
}, bk = {
  key: 1,
  class: "review-section"
}, $k = { class: "section-title" }, Ck = { class: "review-items" }, xk = { class: "item-name" }, Sk = { class: "item-choice" }, Ik = {
  key: 0,
  class: "choice-badge install"
}, Ek = {
  key: 1,
  class: "choice-badge optional"
}, Tk = {
  key: 2,
  class: "choice-badge skip"
}, Mk = {
  key: 2,
  class: "review-section"
}, Pk = { class: "section-title" }, Rk = { class: "review-items" }, Lk = { class: "item-name" }, Dk = { class: "item-choice" }, Nk = {
  key: 0,
  class: "choice-badge install"
}, Uk = {
  key: 1,
  class: "choice-badge mapped"
}, Ok = {
  key: 2,
  class: "choice-badge optional"
}, Ak = {
  key: 3,
  class: "choice-badge skip"
}, zk = {
  key: 1,
  class: "choice-badge pending"
}, Fk = {
  key: 3,
  class: "review-section"
}, Vk = { class: "section-title" }, Bk = { class: "review-items download-details" }, Wk = { class: "download-info" }, Gk = { class: "item-name" }, jk = { class: "download-meta" }, Hk = { class: "download-path" }, qk = ["title"], Kk = {
  key: 4,
  class: "review-section"
}, Jk = { class: "section-title" }, Qk = { class: "review-items" }, Yk = { class: "item-name" }, Xk = { class: "item-choice" }, Zk = {
  key: 0,
  class: "choice-badge install"
}, eb = {
  key: 1,
  class: "choice-badge download"
}, tb = {
  key: 2,
  class: "choice-badge optional"
}, sb = {
  key: 3,
  class: "choice-badge skip"
}, ob = {
  key: 4,
  class: "choice-badge skip"
}, nb = {
  key: 1,
  class: "choice-badge download"
}, ab = {
  key: 2,
  class: "choice-badge pending"
}, lb = {
  key: 5,
  class: "no-choices"
}, ib = /* @__PURE__ */ xe({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const o = e, a = t, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: v } = dc(), { loadPendingDownloads: f } = Bo(), { openFileLocation: p, queueNodeInstall: w, getNodes: g } = ct(), _ = k(null), b = k([]), S = k(!1), C = k(!1), I = k(null), E = k("analysis"), M = k([]), N = k(/* @__PURE__ */ new Map()), F = k(/* @__PURE__ */ new Map()), V = k(/* @__PURE__ */ new Set()), D = R(() => {
      const ae = [
        { id: "analysis", label: "Analysis" }
      ];
      return we.value && ae.push({ id: "nodes", label: "Nodes" }), ee.value && ae.push({ id: "packages", label: "Packages" }), se.value && ae.push({ id: "models", label: "Models" }), ae.push({ id: "review", label: "Review" }), E.value === "applying" && ae.push({ id: "applying", label: "Applying" }), ae;
    });
    R(() => _.value ? _.value.stats.needs_user_input : !1);
    const q = R(() => B.value.filter(
      (ae) => !N.value.has(ae.reference.node_type)
    ).length), ue = R(() => le.value.filter(
      (O) => !N.value.has(O.node_type)
    ).length + Ee.value.length + q.value), ie = R(() => _.value ? _.value.nodes.unresolved.filter(
      (ae) => !N.value.has(ae.reference.node_type)
    ).length : 0), Y = R(() => _.value ? _.value.nodes.ambiguous.filter(
      (ae) => !N.value.has(ae.reference.node_type)
    ).length : 0), me = R(() => _.value ? _.value.nodes.version_gated || [] : []), oe = R(() => _.value ? _.value.nodes.uninstallable || [] : []), B = R(() => oe.value.filter((ae) => {
      var O;
      return !!((O = ae.package) != null && O.package_id);
    })), H = R(() => me.value.length > 0), we = R(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 || Ce.value.length > 0 : !1), se = R(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), de = R(() => _.value ? _.value.stats.download_intents > 0 : !1), ce = R(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), K = R(() => B.value.length > 0), ee = R(() => ce.value || K.value), te = R(() => _.value ? _.value.nodes.resolved.length : 0), Me = R(() => _.value ? _.value.models.resolved.filter((ae) => ae.has_category_mismatch) : []), Se = R(() => Me.value.length > 0), ze = R(() => we.value ? "nodes" : ee.value ? "packages" : se.value ? "models" : "review"), Ne = R(() => {
      if (!_.value) return [];
      const ae = _.value.nodes.resolved.filter((ne) => !ne.is_installed), O = /* @__PURE__ */ new Set();
      return ae.filter((ne) => O.has(ne.package.package_id) ? !1 : (O.add(ne.package.package_id), !0));
    }), be = R(() => {
      if (!_.value) return [];
      const ae = _.value.nodes.resolved.filter((ne) => !ne.is_installed), O = /* @__PURE__ */ new Map();
      for (const ne of ae) {
        const Je = O.get(ne.package.package_id);
        Je ? Je.node_types_count++ : O.set(ne.package.package_id, {
          package_id: ne.package.package_id,
          title: ne.package.title,
          node_types_count: 1
        });
      }
      return Array.from(O.values());
    }), Ae = R(() => be.value.filter((ae) => !V.value.has(ae.package_id)).length), ge = R(() => be.value.length + B.value.length), ve = R(() => {
      const ae = B.value.filter(
        (O) => N.value.has(O.reference.node_type)
      ).length;
      return be.value.length + ae;
    }), T = R(() => Ne.value.filter((ae) => !V.value.has(ae.package.package_id))), A = R(() => _.value ? _.value.models.resolved.filter(
      (ae) => ae.match_type === "download_intent" || ae.match_type === "property_download_intent"
    ).map((ae) => ({
      filename: ae.reference.widget_value,
      reference: ae.reference,
      is_download_intent: !0,
      resolved_model: ae.model,
      download_source: ae.download_source,
      target_path: ae.target_path
    })) : []), le = R(() => {
      if (!_.value) return [];
      const ae = Ce.value.map((Je) => ({
        node_type: Je.reference.node_type,
        reason: "saved_mapping",
        is_unresolved: !1,
        options: void 0
      })), O = _.value.nodes.unresolved.map((Je) => ({
        node_type: Je.reference.node_type,
        reason: Je.reason,
        is_unresolved: !0,
        options: void 0
      })), ne = _.value.nodes.ambiguous.map((Je) => ({
        node_type: Je.reference.node_type,
        has_multiple_options: !0,
        options: Je.options.map((it) => ({
          package_id: it.package.package_id,
          title: it.package.title,
          match_confidence: it.match_confidence,
          match_type: it.match_type,
          is_installed: it.is_installed
        }))
      }));
      return [...ae, ...O, ...ne];
    }), Ce = R(() => _.value ? _.value.nodes.resolved.filter(
      (ae) => {
        var O;
        return ((O = ae.saved_choice) == null ? void 0 : O.action) === "map-installed";
      }
    ) : []), Ee = R(() => {
      if (!_.value) return [];
      const ae = _.value.models.unresolved.map((ne) => ({
        filename: ne.reference.widget_value,
        reference: ne.reference,
        reason: ne.reason,
        is_unresolved: !0,
        options: void 0
      })), O = _.value.models.ambiguous.map((ne) => ({
        filename: ne.reference.widget_value,
        reference: ne.reference,
        has_multiple_options: !0,
        options: ne.options.map((Je) => ({
          model: Je.model,
          match_confidence: Je.match_confidence,
          match_type: Je.match_type,
          has_download_source: Je.has_download_source
        }))
      }));
      return [...ae, ...O];
    }), ke = R(() => {
      const ae = Ee.value, O = A.value.map((ne) => ({
        filename: ne.filename,
        reference: ne.reference,
        is_download_intent: !0,
        resolved_model: ne.resolved_model,
        download_source: ne.download_source,
        target_path: ne.target_path,
        options: void 0
      }));
      return [...ae, ...O];
    }), X = R(() => A.value.filter((ae) => {
      const O = F.value.get(ae.filename);
      return O ? O.action === "download" : !0;
    }).map((ae) => ({
      filename: ae.filename,
      url: ae.download_source,
      target_path: ae.target_path
    })));
    function G(ae, O = 50) {
      return ae.length <= O ? ae : ae.slice(0, O - 3) + "...";
    }
    const fe = R(() => {
      let ae = T.value.length;
      for (const O of N.value.values())
        O.action === "install" && ae++;
      for (const O of F.value.values())
        O.action === "select" && ae++;
      return ae;
    }), he = R(() => {
      let ae = 0;
      for (const O of F.value.values())
        O.action === "download" && ae++;
      for (const O of A.value)
        F.value.get(O.filename) || ae++;
      return ae;
    }), je = R(() => {
      let ae = 0;
      for (const O of N.value.values())
        O.action === "optional" && ae++;
      for (const O of F.value.values())
        O.action === "optional" && ae++;
      return ae;
    }), We = R(() => {
      let ae = V.value.size;
      for (const O of N.value.values())
        O.action === "skip" && ae++;
      for (const O of F.value.values())
        O.action === "skip" && ae++;
      for (const O of le.value)
        N.value.has(O.node_type) || ae++;
      for (const O of Ee.value)
        F.value.has(O.filename) || ae++;
      return ae;
    }), _e = R(() => {
      const ae = {};
      if (ae.analysis = { resolved: 1, total: 1 }, we.value) {
        const O = le.value.length, ne = le.value.filter(
          (Je) => N.value.has(Je.node_type)
        ).length;
        ae.nodes = { resolved: ne, total: O };
      }
      if (ee.value && (ae.packages = {
        resolved: ve.value,
        total: ge.value || 1
      }), se.value) {
        const O = ke.value.length, ne = ke.value.filter(
          (Je) => F.value.has(Je.filename) || Je.is_download_intent
        ).length;
        ae.models = { resolved: ne, total: O };
      }
      if (ae.review = { resolved: 1, total: 1 }, E.value === "applying") {
        const O = d.totalFiles || 1, ne = d.completedFiles.length;
        ae.applying = { resolved: ne, total: O };
      }
      return ae;
    });
    function Z(ae) {
      E.value = ae;
    }
    function Fe() {
      const ae = D.value.findIndex((O) => O.id === E.value);
      ae > 0 && (E.value = D.value[ae - 1].id);
    }
    function De() {
      const ae = D.value.findIndex((O) => O.id === E.value);
      ae < D.value.length - 1 && (E.value = D.value[ae + 1].id);
    }
    function He() {
      const ae = D.value.findIndex((ne) => ne.id === E.value), O = D.value[ae + 1];
      return (O == null ? void 0 : O.label) || "Review";
    }
    function Ve(ae) {
      var O;
      return !!((O = ae.package) != null && O.latest_version);
    }
    function Oe(ae) {
      switch (ae) {
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
    function Qe(ae) {
      return ae.filter((O) => O.installed && O.tracked).filter((O) => O.name !== "comfygit-manager").map((O) => ({
        package_id: O.registry_id || O.name,
        source: O.source
      })).filter((O, ne, Je) => Je.findIndex((it) => it.package_id === O.package_id) === ne).sort((O, ne) => {
        const Je = Oe(O.source) - Oe(ne.source);
        return Je !== 0 ? Je : O.package_id.localeCompare(ne.package_id);
      });
    }
    async function pt() {
      S.value = !0, I.value = null;
      try {
        const [ae, O] = await Promise.all([
          l(o.workflowName),
          g()
        ]);
        _.value = ae, b.value = Qe(O.nodes), Q(ae);
      } catch (ae) {
        I.value = ae instanceof Error ? ae.message : "Failed to analyze workflow";
      } finally {
        S.value = !1;
      }
    }
    function Q(ae) {
      N.value.clear();
      for (const O of ae.nodes.unresolved)
        O.saved_choice && N.value.set(O.reference.node_type, O.saved_choice);
      for (const O of ae.nodes.resolved)
        O.saved_choice && N.value.set(O.reference.node_type, O.saved_choice);
      for (const O of ae.nodes.ambiguous)
        O.saved_choice && N.value.set(O.reference.node_type, O.saved_choice);
      for (const O of ae.nodes.uninstallable)
        O.saved_choice && N.value.set(O.reference.node_type, O.saved_choice);
    }
    function pe() {
      M.value.includes("analysis") || M.value.push("analysis"), we.value ? E.value = "nodes" : ee.value ? E.value = "packages" : se.value ? E.value = "models" : E.value = "review";
    }
    function P(ae) {
      N.value.set(ae, { action: "optional" });
    }
    function U(ae) {
      N.value.set(ae, { action: "skip" });
    }
    function J(ae, O) {
      var Je;
      const ne = le.value.find((it) => it.node_type === ae);
      (Je = ne == null ? void 0 : ne.options) != null && Je[O] && N.value.set(ae, {
        action: "install",
        package_id: ne.options[O].package_id
      });
    }
    function Te(ae, O, ne = {}) {
      N.value.set(ae, {
        action: "install",
        package_id: O,
        install_source: ne.install_source,
        repository: ne.repository,
        version: ne.version
      });
    }
    function Le(ae, O) {
      N.value.set(ae, {
        action: "map-installed",
        package_id: O
      });
    }
    function Ke(ae) {
      N.value.delete(ae);
    }
    function Pe(ae) {
      return N.value.get(ae);
    }
    function Ye(ae) {
      const O = Pe(ae);
      return O ? O.action === "optional" ? "Will be marked optional" : O.action === "skip" ? "Will be skipped" : O.action === "install" ? O.install_source === "git" ? "Will install via Git" : "Will install from Registry" : "Undecided" : "Undecided";
    }
    function ot(ae, O) {
      var it;
      const ne = (it = ae.package) == null ? void 0 : it.package_id;
      if (!ne) return;
      const Je = {
        action: "install",
        package_id: ne,
        version: ae.package.latest_version || null,
        install_source: O
      };
      O === "git" && ae.package.repository && (Je.repository = ae.package.repository), N.value.set(ae.reference.node_type, Je);
    }
    function It(ae) {
      N.value.set(ae, { action: "optional" });
    }
    function Bt(ae) {
      N.value.set(ae, { action: "skip" });
    }
    function Ct(ae) {
      N.value.delete(ae);
    }
    function Mt(ae) {
      V.value.has(ae) ? V.value.delete(ae) : V.value.add(ae);
    }
    function os(ae) {
      F.value.set(ae, { action: "optional" });
    }
    function Et(ae) {
      F.value.set(ae, { action: "skip" });
    }
    function js(ae, O) {
      var Je;
      const ne = Ee.value.find((it) => it.filename === ae);
      (Je = ne == null ? void 0 : ne.options) != null && Je[O] && F.value.set(ae, {
        action: "select",
        selected_model: ne.options[O].model
      });
    }
    function Ls(ae, O, ne) {
      F.value.set(ae, {
        action: "download",
        url: O,
        target_path: ne
      });
    }
    function Hs(ae) {
      F.value.delete(ae);
    }
    async function qs(ae) {
      try {
        await p(ae);
      } catch (O) {
        I.value = O instanceof Error ? O.message : "Failed to open file location";
      }
    }
    async function Wo() {
      var ae, O;
      C.value = !0, I.value = null, v(), d.phase = "resolving", E.value = "applying";
      try {
        const ne = await r(o.workflowName, N.value, F.value, V.value);
        ne.models_to_download && ne.models_to_download.length > 0 && u(o.workflowName, ne.models_to_download), d.nodesMarkedOptional = ne.nodes_marked_optional || [], d.nodesMapped = ne.nodes_mapped || [];
        const Je = Array.from(N.value.values()).map((nt) => {
          if ((nt == null ? void 0 : nt.action) !== "install" || nt.install_source !== "git")
            return null;
          const es = nt.repository, xt = nt.package_id;
          return !es || !xt ? null : {
            id: xt,
            repository: es,
            selectedVersion: nt.version || "latest"
          };
        }).filter((nt) => !!nt), it = new Set(Je.map((nt) => nt.id)), Dt = new Set(
          Array.from(N.value.values()).filter((nt) => (nt == null ? void 0 : nt.action) === "install" && !!nt.package_id).map((nt) => nt.package_id)
        ), vs = [
          ...ne.nodes_to_install || [],
          ...T.value.filter((nt) => !Dt.has(nt.package.package_id)).map((nt) => nt.package.package_id)
        ];
        if (d.nodesToInstall = [...new Set(vs)].filter((nt) => !it.has(nt)), d.nodesToInstall.length > 0 && await c(o.workflowName), Je.length > 0) {
          d.phase = "installing";
          const nt = ((ae = d.nodeInstallProgress) == null ? void 0 : ae.completedNodes) || [], es = ((O = d.nodeInstallProgress) == null ? void 0 : O.totalNodes) || d.nodesToInstall.length;
          d.nodesToInstall = [
            ...d.nodesToInstall,
            ...Je.map((xt) => xt.id)
          ], d.nodeInstallProgress = {
            completedNodes: nt,
            totalNodes: es + Je.length
          };
          for (const xt of Je) {
            const jo = d.nodeInstallProgress.completedNodes.length;
            d.nodeInstallProgress.currentNode = xt.id, d.nodeInstallProgress.currentIndex = jo;
            try {
              await w({
                id: xt.id,
                version: xt.selectedVersion,
                selected_version: xt.selectedVersion,
                repository: xt.repository,
                install_source: "git",
                mode: "remote",
                channel: "default"
              }), d.nodeInstallProgress.completedNodes.push({
                node_id: xt.id,
                success: !0
              }), d.nodesInstalled = [.../* @__PURE__ */ new Set([...d.nodesInstalled, xt.id])], d.needsRestart = !0;
            } catch (yo) {
              const wo = yo instanceof Error ? yo.message : `Failed to install ${xt.id}`;
              d.nodeInstallProgress.completedNodes.push({
                node_id: xt.id,
                success: !1,
                error: wo
              }), d.installError = wo;
            }
          }
        }
        d.phase = "complete", await f(), window.dispatchEvent(new CustomEvent("comfygit:status-refresh")), a("refresh"), a("install");
      } catch (ne) {
        I.value = ne instanceof Error ? ne.message : "Failed to apply resolution", d.error = I.value, d.phase = "error";
      } finally {
        C.value = !1;
      }
    }
    function Go() {
      a("refresh"), a("restart"), a("close");
    }
    async function Ds() {
      var O;
      const ae = ((O = d.nodeInstallProgress) == null ? void 0 : O.completedNodes.filter((ne) => !ne.success).map((ne) => ne.node_id)) || [];
      if (ae.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: ae.length
        }, d.nodesToInstall = ae, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch (ne) {
          d.error = ne instanceof Error ? ne.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return lt(pt), (ae, O) => (n(), L($t, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: S.value,
      error: I.value || void 0,
      "fixed-height": !0,
      onClose: O[1] || (O[1] = (ne) => a("close"))
    }, {
      body: h(() => [
        S.value && !_.value ? (n(), i("div", T0, [...O[2] || (O[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (n(), i("div", M0, [
          $(Gy, {
            steps: D.value,
            "current-step": E.value,
            "completed-steps": M.value,
            "step-stats": _e.value,
            onStepChange: Z
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          E.value === "analysis" ? (n(), i("div", P0, [
            s("div", R0, [
              s("div", L0, [
                O[3] || (O[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", D0, " Found " + m(_.value.stats.total_nodes) + " nodes and " + m(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", N0, [
                s("div", U0, [
                  O[16] || (O[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", O0, [
                    te.value > 0 ? (n(), i("div", A0, [
                      O[4] || (O[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", z0, m(te.value), 1),
                      O[5] || (O[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (n(), i("div", F0, [
                      O[6] || (O[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", V0, m(_.value.stats.packages_needing_installation), 1),
                      O[7] || (O[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    Y.value > 0 ? (n(), i("div", B0, [
                      O[8] || (O[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", W0, m(Y.value), 1),
                      O[9] || (O[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    me.value.length > 0 ? (n(), i("div", G0, [
                      O[10] || (O[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", j0, m(me.value.length), 1),
                      O[11] || (O[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    q.value > 0 ? (n(), i("div", H0, [
                      O[12] || (O[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", q0, m(q.value), 1),
                      O[13] || (O[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    ie.value > 0 ? (n(), i("div", K0, [
                      O[14] || (O[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", J0, m(ie.value), 1),
                      O[15] || (O[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                s("div", Q0, [
                  O[27] || (O[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", Y0, [
                    s("div", X0, [
                      O[17] || (O[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", Z0, m(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      O[18] || (O[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (n(), i("div", e_, [
                      O[19] || (O[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", t_, m(_.value.stats.download_intents), 1),
                      O[20] || (O[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    Se.value ? (n(), i("div", s_, [
                      O[21] || (O[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", o_, m(Me.value.length), 1),
                      O[22] || (O[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    _.value.models.ambiguous.length > 0 ? (n(), i("div", n_, [
                      O[23] || (O[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", a_, m(_.value.models.ambiguous.length), 1),
                      O[24] || (O[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    _.value.models.unresolved.length > 0 ? (n(), i("div", l_, [
                      O[25] || (O[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", i_, m(_.value.models.unresolved.length), 1),
                      O[26] || (O[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              ue.value > 0 ? (n(), i("div", r_, [
                O[28] || (O[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", c_, m(ue.value) + " item" + m(ue.value === 1 ? "" : "s") + " need your input", 1)
              ])) : H.value ? (n(), i("div", u_, [
                O[29] || (O[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", d_, m(me.value.length) + " node type" + m(me.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : q.value > 0 ? (n(), i("div", m_, [
                O[30] || (O[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", f_, m(q.value) + " community-mapped node type" + m(q.value > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : ce.value ? (n(), i("div", v_, [
                O[31] || (O[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", p_, m(_.value.stats.packages_needing_installation) + " package" + m(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(_.value.stats.nodes_needing_installation) + " node type" + m(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(de.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : de.value ? (n(), i("div", g_, [
                O[32] || (O[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", h_, m(_.value.stats.download_intents) + " model" + m(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : Se.value ? (n(), i("div", y_, [
                O[33] || (O[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", w_, m(Me.value.length) + " model" + m(Me.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", __, [...O[34] || (O[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              Se.value ? (n(), i("div", k_, [
                O[37] || (O[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", b_, [
                  (n(!0), i(W, null, ye(Me.value, (ne) => {
                    var Je, it;
                    return n(), i("div", {
                      key: ne.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", $_, m(ne.actual_category) + "/" + m((Je = ne.model) == null ? void 0 : Je.filename), 1),
                      O[36] || (O[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", C_, m((it = ne.expected_categories) == null ? void 0 : it[0]) + "/", 1),
                      ne.file_path ? (n(), L(Ue, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Dt) => qs(ne.file_path)
                      }, {
                        default: h(() => [...O[35] || (O[35] = [
                          x(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              H.value ? (n(), i("div", x_, [
                O[38] || (O[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", S_, [
                  (n(!0), i(W, null, ye(me.value, (ne) => {
                    var Je;
                    return n(), i("div", {
                      key: `vg-${ne.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", I_, m(ne.reference.node_type), 1),
                      s("span", E_, m(ne.guidance || ((Je = _.value.node_guidance) == null ? void 0 : Je[ne.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          E.value === "nodes" ? (n(), i("div", T_, [
            $(Q1, {
              nodes: le.value,
              "node-choices": N.value,
              "auto-resolved-packages": [],
              "skipped-packages": V.value,
              "installed-node-packs": b.value,
              onMarkOptional: P,
              onSkip: U,
              onOptionSelected: J,
              onManualEntry: Te,
              onInstalledPackSelected: Le,
              onClearChoice: Ke,
              onPackageSkip: Mt
            }, null, 8, ["nodes", "node-choices", "skipped-packages", "installed-node-packs"])
          ])) : y("", !0),
          E.value === "packages" ? (n(), i("div", M_, [
            s("div", P_, [
              O[39] || (O[39] = s("div", null, [
                s("h3", { class: "summary-title" }, "Review Node Packages"),
                s("p", { class: "summary-description" }, " Choose which package-level installs should run. These decisions are separate from mapping unresolved node names. ")
              ], -1)),
              s("span", R_, m(ve.value) + "/" + m(ge.value) + " decided", 1)
            ]),
            be.value.length > 0 ? (n(), i("div", L_, [
              s("div", D_, [
                s("div", null, [
                  s("h4", N_, "Resolved Packages (" + m(be.value.length) + ")", 1),
                  O[40] || (O[40] = s("p", { class: "package-section-description" }, " These packages were matched automatically. Skip any package you do not want installed. ", -1))
                ]),
                s("span", U_, m(Ae.value) + "/" + m(be.value.length) + " to install", 1)
              ]),
              s("div", O_, [
                (n(!0), i(W, null, ye(be.value, (ne) => (n(), i("div", {
                  key: ne.package_id,
                  class: "package-item"
                }, [
                  s("div", A_, [
                    s("code", z_, m(ne.package_id), 1),
                    s("span", F_, m(ne.node_types_count) + " node type" + m(ne.node_types_count > 1 ? "s" : ""), 1)
                  ]),
                  s("div", V_, [
                    V.value.has(ne.package_id) ? (n(), i("span", W_, "Skipped")) : (n(), i("span", B_, "Will Install")),
                    $(Ue, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Je) => Mt(ne.package_id)
                    }, {
                      default: h(() => [
                        x(m(V.value.has(ne.package_id) ? "Include" : "Skip"), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : y("", !0),
            B.value.length > 0 ? (n(), i("div", G_, [
              s("div", j_, [
                s("h4", H_, "Community-Mapped Packages (" + m(B.value.length) + ")", 1),
                O[41] || (O[41] = s("p", { class: "community-node-description" }, " These mappings came from community metadata. Use a registry install only when a package version exists; otherwise install from Git or skip. ", -1))
              ]),
              s("div", q_, [
                (n(!0), i(W, null, ye(B.value, (ne) => (n(), i("div", {
                  key: `community-${ne.reference.node_type}-${ne.package.package_id}`,
                  class: "community-node-item"
                }, [
                  s("div", K_, [
                    s("div", J_, [
                      s("code", Q_, m(ne.reference.node_type), 1),
                      s("span", Y_, m(ne.package.title || ne.package.package_id), 1)
                    ]),
                    s("div", X_, m(ne.package.package_id), 1),
                    s("div", Z_, [
                      O[42] || (O[42] = x(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      ne.guidance ? (n(), i("span", ek, m(ne.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  Pe(ne.reference.node_type) ? (n(), i("div", tk, [
                    s("div", sk, m(Ye(ne.reference.node_type)), 1),
                    $(Ue, {
                      class: "change-selection-button",
                      size: "sm",
                      variant: "ghost",
                      onClick: (Je) => Ct(ne.reference.node_type)
                    }, {
                      default: h(() => [...O[43] || (O[43] = [
                        x(" Change Selection ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : (n(), i("div", ok, [
                    Ve(ne) ? (n(), L(Ue, {
                      key: 0,
                      class: "community-choice-button install-choice",
                      size: "sm",
                      variant: "secondary",
                      disabled: !ne.package.package_id,
                      onClick: (Je) => ot(ne, "registry")
                    }, {
                      default: h(() => [...O[44] || (O[44] = [
                        x(" Install from Registry ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    ne.package.repository ? (n(), L(Ue, {
                      key: 1,
                      class: "community-choice-button install-choice",
                      size: "sm",
                      variant: "secondary",
                      disabled: !ne.package.package_id,
                      onClick: (Je) => ot(ne, "git")
                    }, {
                      default: h(() => [...O[45] || (O[45] = [
                        x(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    $(Ue, {
                      class: "community-choice-button",
                      size: "sm",
                      variant: "secondary",
                      onClick: (Je) => It(ne.reference.node_type)
                    }, {
                      default: h(() => [...O[46] || (O[46] = [
                        x(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Ue, {
                      class: "community-choice-button",
                      size: "sm",
                      variant: "secondary",
                      onClick: (Je) => Bt(ne.reference.node_type)
                    }, {
                      default: h(() => [...O[47] || (O[47] = [
                        x(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))
                ]))), 128))
              ])
            ])) : y("", !0)
          ])) : y("", !0),
          E.value === "models" ? (n(), L(jw, {
            key: 3,
            models: ke.value,
            "model-choices": F.value,
            onMarkOptional: os,
            onSkip: Et,
            onOptionSelected: js,
            onDownloadUrl: Ls,
            onClearChoice: Hs
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          E.value === "review" ? (n(), i("div", nk, [
            s("div", ak, [
              O[53] || (O[53] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", lk, [
                s("div", ik, [
                  s("span", rk, m(fe.value), 1),
                  O[48] || (O[48] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", ck, [
                  s("span", uk, m(he.value), 1),
                  O[49] || (O[49] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", dk, [
                  s("span", mk, m(je.value), 1),
                  O[50] || (O[50] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", fk, [
                  s("span", vk, m(We.value), 1),
                  O[51] || (O[51] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              be.value.length > 0 ? (n(), i("div", pk, [
                s("h4", gk, "Node Packages (" + m(be.value.length) + ")", 1),
                s("div", hk, [
                  (n(!0), i(W, null, ye(be.value, (ne) => (n(), i("div", {
                    key: ne.package_id,
                    class: "review-item"
                  }, [
                    s("code", yk, m(ne.package_id), 1),
                    s("div", wk, [
                      V.value.has(ne.package_id) ? (n(), i("span", kk, "Skipped")) : (n(), i("span", _k, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              B.value.length > 0 ? (n(), i("div", bk, [
                s("h4", $k, "Community-Mapped Packages (" + m(B.value.length) + ")", 1),
                s("div", Ck, [
                  (n(!0), i(W, null, ye(B.value, (ne) => {
                    var Je, it, Dt;
                    return n(), i("div", {
                      key: `review-community-${ne.reference.node_type}-${ne.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", xk, m(ne.reference.node_type), 1),
                      s("div", Sk, [
                        ((Je = Pe(ne.reference.node_type)) == null ? void 0 : Je.action) === "install" ? (n(), i("span", Ik, m(((it = Pe(ne.reference.node_type)) == null ? void 0 : it.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((Dt = Pe(ne.reference.node_type)) == null ? void 0 : Dt.action) === "optional" ? (n(), i("span", Ek, " Optional ")) : (n(), i("span", Tk, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              le.value.length > 0 ? (n(), i("div", Mk, [
                s("h4", Pk, "Node Choices (" + m(le.value.length) + ")", 1),
                s("div", Rk, [
                  (n(!0), i(W, null, ye(le.value, (ne) => {
                    var Je, it, Dt, vs, nt, es;
                    return n(), i("div", {
                      key: ne.node_type,
                      class: "review-item"
                    }, [
                      s("code", Lk, m(ne.node_type), 1),
                      s("div", Dk, [
                        N.value.has(ne.node_type) ? (n(), i(W, { key: 0 }, [
                          ((Je = N.value.get(ne.node_type)) == null ? void 0 : Je.action) === "install" ? (n(), i("span", Nk, m((it = N.value.get(ne.node_type)) == null ? void 0 : it.package_id), 1)) : ((Dt = N.value.get(ne.node_type)) == null ? void 0 : Dt.action) === "map-installed" ? (n(), i("span", Uk, " Mapped to " + m((vs = N.value.get(ne.node_type)) == null ? void 0 : vs.package_id), 1)) : ((nt = N.value.get(ne.node_type)) == null ? void 0 : nt.action) === "optional" ? (n(), i("span", Ok, " Optional ")) : ((es = N.value.get(ne.node_type)) == null ? void 0 : es.action) === "skip" ? (n(), i("span", Ak, " Skip ")) : y("", !0)
                        ], 64)) : (n(), i("span", zk, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              X.value.length > 0 ? (n(), i("div", Fk, [
                s("h4", Vk, "Models to Download (" + m(X.value.length) + ")", 1),
                s("div", Bk, [
                  (n(!0), i(W, null, ye(X.value, (ne) => (n(), i("div", {
                    key: ne.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", Wk, [
                      s("code", Gk, m(ne.filename), 1),
                      s("div", jk, [
                        s("span", Hk, "→ " + m(ne.target_path), 1),
                        ne.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: ne.url
                        }, m(G(ne.url)), 9, qk)) : y("", !0)
                      ])
                    ]),
                    O[52] || (O[52] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              ke.value.length > 0 ? (n(), i("div", Kk, [
                s("h4", Jk, "Models (" + m(ke.value.length) + ")", 1),
                s("div", Qk, [
                  (n(!0), i(W, null, ye(ke.value, (ne) => {
                    var Je, it, Dt, vs, nt, es, xt;
                    return n(), i("div", {
                      key: ne.filename,
                      class: "review-item"
                    }, [
                      s("code", Yk, m(ne.filename), 1),
                      s("div", Xk, [
                        F.value.has(ne.filename) ? (n(), i(W, { key: 0 }, [
                          ((Je = F.value.get(ne.filename)) == null ? void 0 : Je.action) === "select" ? (n(), i("span", Zk, m((Dt = (it = F.value.get(ne.filename)) == null ? void 0 : it.selected_model) == null ? void 0 : Dt.filename), 1)) : ((vs = F.value.get(ne.filename)) == null ? void 0 : vs.action) === "download" ? (n(), i("span", eb, " Download ")) : ((nt = F.value.get(ne.filename)) == null ? void 0 : nt.action) === "optional" ? (n(), i("span", tb, " Optional ")) : ((es = F.value.get(ne.filename)) == null ? void 0 : es.action) === "skip" ? (n(), i("span", sb, " Skip ")) : ((xt = F.value.get(ne.filename)) == null ? void 0 : xt.action) === "cancel_download" ? (n(), i("span", ob, " Cancel Download ")) : y("", !0)
                        ], 64)) : ne.is_download_intent ? (n(), i("span", nb, " Pending Download ")) : (n(), i("span", ab, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Ne.value.length === 0 && B.value.length === 0 && le.value.length === 0 && ke.value.length === 0 ? (n(), i("div", lb, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          E.value === "applying" ? (n(), L(E0, {
            key: 5,
            progress: st(d),
            onRestart: Go,
            onRetryFailed: Ds
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        E.value !== "analysis" && E.value !== "applying" ? (n(), L(Ue, {
          key: 0,
          variant: "secondary",
          disabled: C.value,
          onClick: Fe
        }, {
          default: h(() => [...O[54] || (O[54] = [
            x(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        O[56] || (O[56] = s("div", { class: "footer-spacer" }, null, -1)),
        E.value !== "applying" || st(d).phase === "complete" || st(d).phase === "error" ? (n(), L(Ue, {
          key: 1,
          variant: "secondary",
          onClick: O[0] || (O[0] = (ne) => a("close"))
        }, {
          default: h(() => [
            x(m(st(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        E.value === "analysis" ? (n(), L(Ue, {
          key: 2,
          variant: "primary",
          disabled: S.value,
          onClick: pe
        }, {
          default: h(() => [
            x(m(ze.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        E.value === "nodes" || E.value === "packages" || E.value === "models" ? (n(), L(Ue, {
          key: 3,
          variant: "primary",
          onClick: De
        }, {
          default: h(() => [
            x(" Continue to " + m(He()) + " → ", 1)
          ]),
          _: 1
        })) : y("", !0),
        E.value === "review" ? (n(), L(Ue, {
          key: 4,
          variant: "primary",
          disabled: C.value,
          loading: C.value,
          onClick: Wo
        }, {
          default: h(() => [...O[55] || (O[55] = [
            x(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), rb = /* @__PURE__ */ Ie(ib, [["__scopeId", "data-v-6b86d2f3"]]), cb = { class: "search-input-wrapper" }, ub = ["value", "placeholder"], db = /* @__PURE__ */ xe({
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
    const o = e, a = t, l = k(null);
    let r;
    function c(d) {
      const v = d.target.value;
      o.debounce > 0 ? (clearTimeout(r), r = window.setTimeout(() => {
        a("update:modelValue", v);
      }, o.debounce)) : a("update:modelValue", v);
    }
    function u() {
      var d;
      a("update:modelValue", ""), a("clear"), (d = l.value) == null || d.focus();
    }
    return lt(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, v) => (n(), i("div", cb, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: gs(u, ["escape"])
      }, null, 40, ub),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), mb = /* @__PURE__ */ Ie(db, [["__scopeId", "data-v-266f857a"]]), fb = { class: "search-bar" }, vb = /* @__PURE__ */ xe({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, o) => (n(), i("div", fb, [
      $(mb, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => t.$emit("update:modelValue", a)),
        onClear: o[1] || (o[1] = (a) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), go = /* @__PURE__ */ Ie(vb, [["__scopeId", "data-v-3d51bbfd"]]), pb = { class: "section-group" }, gb = {
  key: 0,
  class: "section-content"
}, hb = /* @__PURE__ */ xe({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = k(o.initiallyExpanded);
    function r() {
      o.collapsible && (l.value = !l.value, a("toggle", l.value));
    }
    return (c, u) => (n(), i("section", pb, [
      $(cs, {
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
      !e.collapsible || l.value ? (n(), i("div", gb, [
        at(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Tt = /* @__PURE__ */ Ie(hb, [["__scopeId", "data-v-c48e33ed"]]), yb = { class: "item-header" }, wb = {
  key: 0,
  class: "item-icon"
}, _b = { class: "item-info" }, kb = {
  key: 0,
  class: "item-title"
}, bb = {
  key: 1,
  class: "item-subtitle"
}, $b = {
  key: 0,
  class: "item-details"
}, Cb = {
  key: 1,
  class: "item-actions"
}, xb = /* @__PURE__ */ xe({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = R(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (n(), i("div", {
      class: Be(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      s("div", yb, [
        l.$slots.icon ? (n(), i("span", wb, [
          at(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        s("div", _b, [
          l.$slots.title ? (n(), i("div", kb, [
            at(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (n(), i("div", bb, [
            at(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", $b, [
        at(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (n(), i("div", Cb, [
        at(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Gt = /* @__PURE__ */ Ie(xb, [["__scopeId", "data-v-cc435e0e"]]), Sb = { class: "empty-state" }, Ib = {
  key: 0,
  class: "empty-icon"
}, Eb = { class: "empty-message" }, Tb = /* @__PURE__ */ xe({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, o) => (n(), i("div", Sb, [
      e.icon ? (n(), i("div", Ib, m(e.icon), 1)) : y("", !0),
      s("p", Eb, m(e.message), 1),
      e.actionLabel ? (n(), L(Re, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => t.$emit("action"))
      }, {
        default: h(() => [
          x(m(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), _s = /* @__PURE__ */ Ie(Tb, [["__scopeId", "data-v-4466284f"]]), Mb = { class: "loading-state" }, Pb = { class: "loading-message" }, Rb = /* @__PURE__ */ xe({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, o) => (n(), i("div", Mb, [
      o[0] || (o[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", Pb, m(e.message), 1)
    ]));
  }
}), Ps = /* @__PURE__ */ Ie(Rb, [["__scopeId", "data-v-ad8436c9"]]), Lb = { class: "error-state" }, Db = { class: "error-message" }, Nb = /* @__PURE__ */ xe({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, o) => (n(), i("div", Lb, [
      o[2] || (o[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", Db, m(e.message), 1),
      e.retry ? (n(), L(Re, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => t.$emit("retry"))
      }, {
        default: h(() => [...o[1] || (o[1] = [
          x(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Rs = /* @__PURE__ */ Ie(Nb, [["__scopeId", "data-v-5397be48"]]), Ub = /* @__PURE__ */ xe({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: o }) {
    const a = o, { getWorkflows: l } = ct(), r = k([]), c = k(!1), u = k(null), d = k(""), v = k(!0), f = k(!1), p = k(!1), w = k(!1), g = k(null), _ = R(
      () => r.value.filter((K) => K.status === "broken")
    ), b = R(
      () => r.value.filter((K) => K.status === "new")
    ), S = R(
      () => r.value.filter((K) => K.status === "modified")
    ), C = R(
      () => r.value.filter((K) => K.status === "synced")
    ), I = R(() => {
      if (!d.value.trim()) return r.value;
      const K = d.value.toLowerCase();
      return r.value.filter((ee) => ee.name.toLowerCase().includes(K));
    }), E = R(
      () => _.value.filter(
        (K) => !d.value.trim() || K.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), M = R(
      () => b.value.filter(
        (K) => !d.value.trim() || K.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), N = R(
      () => S.value.filter(
        (K) => !d.value.trim() || K.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), F = R(
      () => C.value.filter(
        (K) => !d.value.trim() || K.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), V = R(
      () => f.value ? F.value : F.value.slice(0, 5)
    );
    async function D(K = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(K);
      } catch (ee) {
        u.value = ee instanceof Error ? ee.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    t({ loadWorkflows: D });
    function q(K) {
      g.value = K, p.value = !0;
    }
    function ue(K) {
      g.value = K, p.value = !1, w.value = !0;
    }
    function ie(K) {
      g.value = K, window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: K }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel"));
    }
    function Y(K) {
      var Me;
      const te = (Me = K.detail) == null ? void 0 : Me.workflowName;
      te && ie(te);
    }
    function me() {
    }
    function oe() {
      a("refresh", { refreshWorkflows: !1 });
    }
    async function B() {
      w.value = !1, await D(!0);
    }
    async function H() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function we(K) {
      return K.replace(/uninstallable node mappings?/gi, (ee) => ee.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function se(K) {
      if (K.issue_summary && K.issue_summary.trim().length > 0)
        return we(K.issue_summary);
      const ee = [];
      return K.version_gated_count && K.version_gated_count > 0 && ee.push(`${K.version_gated_count} node${K.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), K.uninstallable_count && K.uninstallable_count > 0 && ee.push(`${K.uninstallable_count} node${K.uninstallable_count > 1 ? "s" : ""} need community packages`), K.missing_nodes > 0 && ee.push(`${K.missing_nodes} missing node${K.missing_nodes > 1 ? "s" : ""}`), K.missing_models > 0 && ee.push(`${K.missing_models} missing model${K.missing_models > 1 ? "s" : ""}`), K.models_with_category_mismatch && K.models_with_category_mismatch > 0 && ee.push(`${K.models_with_category_mismatch} model${K.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), K.pending_downloads && K.pending_downloads > 0 && ee.push(`${K.pending_downloads} pending download${K.pending_downloads > 1 ? "s" : ""}`), ee.length > 0 ? ee.join(", ") : "Has issues";
    }
    function de(K) {
      const ee = K.sync_state === "new" ? "New" : K.sync_state === "modified" ? "Modified" : K.sync_state === "synced" ? "Synced" : K.sync_state, te = ce(K);
      return K.has_path_sync_issues && K.models_needing_path_sync && K.models_needing_path_sync > 0 ? `${K.models_needing_path_sync} model path${K.models_needing_path_sync > 1 ? "s" : ""} need${K.models_needing_path_sync === 1 ? "s" : ""} sync · ${te}` : `${ee || "Unknown"} · ${te}`;
    }
    function ce(K) {
      const ee = K.contract_summary;
      return !ee || !ee.has_contract ? "No contract" : ee.status === "incomplete" ? `${ee.input_count} in / ${ee.output_count} out · incomplete` : `${ee.input_count} in / ${ee.output_count} out`;
    }
    return lt(() => {
      D(), window.addEventListener("comfygit:open-workflow-contract", Y);
    }), Sn(() => {
      window.removeEventListener("comfygit:open-workflow-contract", Y);
    }), (K, ee) => (n(), i(W, null, [
      $(Ft, null, {
        header: h(() => [
          $(Vt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          $(go, {
            modelValue: d.value,
            "onUpdate:modelValue": ee[0] || (ee[0] = (te) => d.value = te),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (n(), L(Ps, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (n(), L(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (n(), i(W, { key: 2 }, [
            E.value.length ? (n(), L(Tt, {
              key: 0,
              title: "BROKEN",
              count: E.value.length
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(E.value, (te) => (n(), L(Gt, {
                  key: te.name,
                  status: "broken"
                }, {
                  icon: h(() => [...ee[6] || (ee[6] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(te.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(se(te)), 1)
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Me) => ue(te.name)
                    }, {
                      default: h(() => [...ee[7] || (ee[7] = [
                        x(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => q(te.name)
                    }, {
                      default: h(() => [...ee[8] || (ee[8] = [
                        x(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => ie(te.name)
                    }, {
                      default: h(() => [...ee[9] || (ee[9] = [
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
            M.value.length ? (n(), L(Tt, {
              key: 1,
              title: "NEW",
              count: M.value.length
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(M.value, (te) => (n(), L(Gt, {
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
                    x(m(de(te)), 1)
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => q(te.name)
                    }, {
                      default: h(() => [...ee[10] || (ee[10] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => ie(te.name)
                    }, {
                      default: h(() => [...ee[11] || (ee[11] = [
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
            N.value.length ? (n(), L(Tt, {
              key: 2,
              title: "MODIFIED",
              count: N.value.length
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(N.value, (te) => (n(), L(Gt, {
                  key: te.name,
                  status: te.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...ee[12] || (ee[12] = [
                    x("⚡", -1)
                  ])]),
                  title: h(() => [
                    x(m(te.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(de(te)), 1)
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => q(te.name)
                    }, {
                      default: h(() => [...ee[13] || (ee[13] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => ie(te.name)
                    }, {
                      default: h(() => [...ee[14] || (ee[14] = [
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
            F.value.length ? (n(), L(Tt, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: ee[2] || (ee[2] = (te) => v.value = te)
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(V.value, (te) => (n(), L(Gt, {
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
                    x(m(de(te)), 1)
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => q(te.name)
                    }, {
                      default: h(() => [...ee[15] || (ee[15] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Me) => ie(te.name)
                    }, {
                      default: h(() => [...ee[16] || (ee[16] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !f.value && F.value.length > 5 ? (n(), L(Re, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: ee[1] || (ee[1] = (te) => f.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    x(" View all " + m(F.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            I.value.length ? y("", !0) : (n(), L(_s, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && g.value ? (n(), L(Ry, {
        key: 0,
        "workflow-name": g.value,
        onClose: ee[3] || (ee[3] = (te) => p.value = !1),
        onResolve: ee[4] || (ee[4] = (te) => ue(g.value)),
        onRefresh: ee[5] || (ee[5] = (te) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && g.value ? (n(), L(rb, {
        key: 1,
        "workflow-name": g.value,
        onClose: B,
        onInstall: me,
        onRefresh: oe,
        onRestart: H
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), Ob = /* @__PURE__ */ Ie(Ub, [["__scopeId", "data-v-244e59aa"]]), Ab = /* @__PURE__ */ xe({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (t, o) => (n(), i("div", {
      class: Be(["summary-bar", e.variant])
    }, [
      at(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), Tl = /* @__PURE__ */ Ie(Ab, [["__scopeId", "data-v-ccb7816e"]]);
async function Ml(e) {
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
const zb = {
  key: 0,
  class: "model-details"
}, Fb = { class: "detail-section" }, Vb = { class: "detail-row" }, Bb = { class: "detail-value mono" }, Wb = { class: "detail-row" }, Gb = { class: "detail-value mono" }, jb = { class: "detail-row" }, Hb = { class: "detail-value mono" }, qb = {
  key: 0,
  class: "detail-row"
}, Kb = { class: "detail-value" }, Jb = ["disabled"], Qb = {
  key: 1,
  class: "detail-row"
}, Yb = { class: "detail-value hash-error" }, Xb = { class: "detail-row" }, Zb = { class: "detail-value" }, e2 = { class: "detail-row" }, t2 = { class: "detail-value" }, s2 = { class: "detail-row" }, o2 = { class: "detail-value" }, n2 = { class: "detail-section" }, a2 = { class: "section-header" }, l2 = {
  key: 0,
  class: "locations-list"
}, i2 = { class: "location-path mono" }, r2 = {
  key: 0,
  class: "location-modified"
}, c2 = ["onClick"], u2 = {
  key: 1,
  class: "empty-state"
}, d2 = { class: "detail-section" }, m2 = { class: "section-header-row" }, f2 = { class: "section-header" }, v2 = {
  key: 0,
  class: "sources-list"
}, p2 = { class: "source-type" }, g2 = ["href"], h2 = ["disabled", "onClick"], y2 = {
  key: 1,
  class: "empty-state"
}, w2 = {
  key: 2,
  class: "source-error"
}, _2 = {
  key: 3,
  class: "source-success"
}, k2 = /* @__PURE__ */ xe({
  __name: "ModelDetailModal",
  props: {
    identifier: {},
    overlayZIndex: {}
  },
  emits: ["close", "sourceSaved"],
  setup(e, { emit: t }) {
    const o = e, a = t, { getModelDetails: l, removeModelSource: r, computeModelHashes: c } = ct(), u = k(null), d = k(!0), v = k(null), f = k(null), p = k(null), w = k(null), g = k(!1), _ = k(!1), b = k(null), S = R(() => {
      var ie;
      return !!((ie = u.value) != null && ie.hash && (!u.value.blake3 || !u.value.sha256));
    }), C = k(null);
    let I = null;
    function E(ie, Y = "success", me = 2e3) {
      I && clearTimeout(I), C.value = { message: ie, type: Y }, I = setTimeout(() => {
        C.value = null;
      }, me);
    }
    function M(ie) {
      if (!ie) return "Unknown";
      const Y = 1024 * 1024 * 1024, me = 1024 * 1024;
      return ie >= Y ? `${(ie / Y).toFixed(1)} GB` : ie >= me ? `${(ie / me).toFixed(0)} MB` : `${(ie / 1024).toFixed(0)} KB`;
    }
    async function N(ie) {
      try {
        await Ml(ie), E("Copied to clipboard!");
      } catch (Y) {
        console.error("Failed to copy:", Y), E("Failed to copy to clipboard", "error");
      }
    }
    async function F(ie) {
      if (u.value) {
        f.value = ie, p.value = null, w.value = null;
        try {
          await r(u.value.hash, ie), E("Source removed"), await ue();
        } catch (Y) {
          p.value = Y instanceof Error ? Y.message : "Failed to remove source";
        } finally {
          f.value = null;
        }
      }
    }
    async function V() {
      w.value = "Source added successfully!", g.value = !1, await ue(), a("sourceSaved");
    }
    async function D() {
      await ue();
    }
    async function q() {
      var ie;
      if ((ie = u.value) != null && ie.hash) {
        _.value = !0, b.value = null;
        try {
          u.value = await c(u.value.hash), E("Hashes computed successfully!");
        } catch (Y) {
          b.value = Y instanceof Error ? Y.message : "Failed to compute hashes";
        } finally {
          _.value = !1;
        }
      }
    }
    async function ue() {
      d.value = !0, v.value = null;
      try {
        u.value = await l(o.identifier);
      } catch (ie) {
        v.value = ie instanceof Error ? ie.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return lt(ue), (ie, Y) => {
      var me;
      return n(), i(W, null, [
        $($t, {
          title: `Model Details: ${((me = u.value) == null ? void 0 : me.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          "overlay-z-index": e.overlayZIndex,
          onClose: Y[5] || (Y[5] = (oe) => ie.$emit("close"))
        }, {
          body: h(() => {
            var oe, B, H, we;
            return [
              u.value ? (n(), i("div", zb, [
                s("section", Fb, [
                  s("div", Vb, [
                    Y[7] || (Y[7] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", Bb, m(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Y[0] || (Y[0] = (se) => N(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", Wb, [
                    Y[8] || (Y[8] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", Gb, m(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Y[1] || (Y[1] = (se) => N(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", jb, [
                    Y[9] || (Y[9] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", Hb, m(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Y[2] || (Y[2] = (se) => N(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  S.value ? (n(), i("div", qb, [
                    Y[10] || (Y[10] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", Kb, [
                      s("button", {
                        class: "compute-hashes-btn",
                        disabled: _.value,
                        onClick: q
                      }, m(_.value ? "Computing hashes..." : "Compute Full Hashes"), 9, Jb)
                    ])
                  ])) : y("", !0),
                  b.value ? (n(), i("div", Qb, [
                    Y[11] || (Y[11] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", Yb, m(b.value), 1)
                  ])) : y("", !0),
                  s("div", Xb, [
                    Y[12] || (Y[12] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", Zb, m(M(u.value.size)), 1)
                  ]),
                  s("div", e2, [
                    Y[13] || (Y[13] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", t2, m(u.value.category), 1)
                  ]),
                  s("div", s2, [
                    Y[14] || (Y[14] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", o2, m(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", n2, [
                  s("h4", a2, "Locations (" + m(((oe = u.value.locations) == null ? void 0 : oe.length) || 0) + ")", 1),
                  (B = u.value.locations) != null && B.length ? (n(), i("div", l2, [
                    (n(!0), i(W, null, ye(u.value.locations, (se, de) => (n(), i("div", {
                      key: de,
                      class: "location-item"
                    }, [
                      s("span", i2, m(se.path), 1),
                      se.modified ? (n(), i("span", r2, "Modified: " + m(se.modified), 1)) : y("", !0),
                      se.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (ce) => N(se.path)
                      }, " Copy File Path ", 8, c2)) : y("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", u2, "No locations found"))
                ]),
                s("section", d2, [
                  s("div", m2, [
                    s("h4", f2, "Download Sources (" + m(((H = u.value.sources) == null ? void 0 : H.length) || 0) + ")", 1),
                    s("button", {
                      class: "find-source-btn",
                      onClick: Y[3] || (Y[3] = (se) => g.value = !0)
                    }, " Find Source ")
                  ]),
                  (we = u.value.sources) != null && we.length ? (n(), i("div", v2, [
                    (n(!0), i(W, null, ye(u.value.sources, (se, de) => (n(), i("div", {
                      key: de,
                      class: "source-item"
                    }, [
                      s("span", p2, m(se.type) + ":", 1),
                      s("a", {
                        href: se.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(se.url), 9, g2),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: f.value === se.url,
                        onClick: (ce) => F(se.url)
                      }, m(f.value === se.url ? "..." : "×"), 9, h2)
                    ]))), 128))
                  ])) : (n(), i("div", y2, " No download sources configured ")),
                  p.value ? (n(), i("p", w2, m(p.value), 1)) : y("", !0),
                  w.value ? (n(), i("p", _2, m(w.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            s("button", {
              class: "btn-secondary",
              onClick: Y[4] || (Y[4] = (oe) => ie.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error", "overlay-z-index"]),
        (n(), L(Zt, { to: "body" }, [
          C.value ? (n(), i("div", {
            key: 0,
            class: Be(["toast", C.value.type])
          }, m(C.value.message), 3)) : y("", !0)
        ])),
        u.value && g.value ? (n(), L(cc, {
          key: 0,
          model: u.value,
          "overlay-z-index": (e.overlayZIndex || 10003) + 2,
          onClose: Y[6] || (Y[6] = (oe) => g.value = !1),
          onSaved: V,
          onHashesComputed: D
        }, null, 8, ["model", "overlay-z-index"])) : y("", !0)
      ], 64);
    };
  }
}), fc = /* @__PURE__ */ Ie(k2, [["__scopeId", "data-v-cd808fbc"]]), b2 = { class: "workflow-links-tab" }, $2 = { class: "section-header-row" }, C2 = {
  key: 0,
  class: "state-message"
}, x2 = {
  key: 1,
  class: "error-message"
}, S2 = {
  key: 2,
  class: "candidate-list"
}, I2 = {
  key: 3,
  class: "state-message"
}, E2 = /* @__PURE__ */ xe({
  __name: "WorkflowLinksTab",
  emits: ["selectUrl"],
  setup(e, { emit: t }) {
    const o = t, { getWorkflowSourceCandidates: a } = ct(), l = k([]), r = k(!1), c = k(null), u = R(() => l.value.filter((v) => v.source === "workflow"));
    async function d() {
      r.value = !0, c.value = null;
      try {
        const v = await a();
        l.value = v.candidates;
      } catch (v) {
        c.value = v instanceof Error ? v.message : "Failed to scan workflows";
      } finally {
        r.value = !1;
      }
    }
    return lt(d), (v, f) => (n(), i("div", b2, [
      s("div", $2, [
        f[2] || (f[2] = s("div", null, [
          s("h4", null, "Workflow Links"),
          s("p", null, "Model links found in saved workflow notes or metadata.")
        ], -1)),
        $(Ue, {
          variant: "secondary",
          size: "sm",
          loading: r.value,
          onClick: d
        }, {
          default: h(() => [...f[1] || (f[1] = [
            x(" Scan ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      r.value ? (n(), i("div", C2, "Scanning workflows...")) : c.value ? (n(), i("div", x2, m(c.value), 1)) : u.value.length ? (n(), i("div", S2, [
        (n(!0), i(W, null, ye(u.value, (p) => (n(), L(ic, {
          key: `${p.workflow}:${p.url}`,
          candidate: p,
          "action-label": "Use URL",
          onSelect: f[0] || (f[0] = (w) => o("selectUrl", w))
        }, null, 8, ["candidate"]))), 128))
      ])) : (n(), i("div", I2, " No likely workflow links found. Try Hugging Face or Direct URL. "))
    ]));
  }
}), T2 = /* @__PURE__ */ Ie(E2, [["__scopeId", "data-v-1aac54cc"]]), M2 = { class: "civitai-tab" }, P2 = /* @__PURE__ */ xe({
  __name: "CivitaiTab",
  setup(e) {
    return (t, o) => (n(), i("div", M2, [...o[0] || (o[0] = [
      s("div", { class: "placeholder" }, [
        s("div", { class: "icon" }, "🎨"),
        s("h3", null, "Civitai Integration"),
        s("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), R2 = /* @__PURE__ */ Ie(P2, [["__scopeId", "data-v-44948051"]]), L2 = { class: "direct-url-tab" }, D2 = {
  key: 0,
  class: "error"
}, N2 = /* @__PURE__ */ xe({
  __name: "DirectUrlTab",
  props: {
    initialUrl: {}
  },
  emits: ["queue"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = k(""), r = k("");
    gt(() => o.initialUrl, (v) => {
      v && v !== l.value && (l.value = v);
    }, { immediate: !0 });
    const c = R(() => {
      const v = l.value.trim();
      if (!v) return "";
      try {
        const f = new URL(v);
        return decodeURIComponent(f.pathname).replace(/\\/g, "/").split("/").filter(Boolean).pop() || "";
      } catch {
        return v.split("?", 1)[0].replace(/\\/g, "/").split("/").filter(Boolean).pop() || "";
      }
    }), u = (v) => {
      if (!r.value.trim() || !c.value) return;
      const f = d(r.value, c.value);
      a("queue", [{
        url: v,
        targetPath: f,
        filename: c.value
      }]), l.value = "";
    };
    function d(v, f) {
      return `${v.replace(/\/+$/, "")}/${f.replace(/^\/+/, "")}`;
    }
    return (v, f) => (n(), i("div", L2, [
      $(rc, {
        modelValue: l.value,
        "onUpdate:modelValue": f[1] || (f[1] = (p) => l.value = p),
        label: "Download URL",
        placeholder: "https://example.com/model.safetensors",
        "action-label": "Queue Download",
        disabled: !r.value.trim() || !c.value,
        onSubmit: u
      }, {
        default: h(() => [
          $(ac, {
            modelValue: r.value,
            "onUpdate:modelValue": f[0] || (f[0] = (p) => r.value = p)
          }, null, 8, ["modelValue"]),
          l.value.trim() && !c.value ? (n(), i("p", D2, " Could not infer a filename from this URL. ")) : y("", !0),
          f[2] || (f[2] = s("p", { class: "note" }, "Model will be queued for background download.", -1))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"])
    ]));
  }
}), U2 = /* @__PURE__ */ Ie(N2, [["__scopeId", "data-v-a6d21f27"]]), O2 = { class: "download-modal" }, A2 = { class: "tab-bar" }, z2 = ["onClick"], F2 = { class: "tab-content" }, V2 = /* @__PURE__ */ xe({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = t, { addToQueue: a } = Bo(), l = [
      { id: "workflow", label: "Workflow Links", icon: "🔎" },
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = k("workflow"), c = k("");
    function u(p) {
      a(p.map((w) => ({
        workflow: "__manual__",
        filename: w.filename,
        url: w.url,
        targetPath: w.destination ? `${w.destination}/${w.filename}` : w.filename
      }))), o("close");
    }
    function d(p) {
      a(p.map((w) => ({
        workflow: "__manual__",
        filename: w.filename,
        url: w.url,
        targetPath: w.targetPath
      }))), o("close");
    }
    function v(p) {
      c.value = p, r.value = "direct";
    }
    function f() {
      o("close");
    }
    return (p, w) => e.show ? (n(), L($t, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: f
    }, {
      body: h(() => [
        s("div", O2, [
          s("div", A2, [
            (n(), i(W, null, ye(l, (g) => s("button", {
              key: g.id,
              class: Be(["tab-btn", { active: r.value === g.id }]),
              onClick: (_) => r.value = g.id
            }, m(g.icon) + " " + m(g.label), 11, z2)), 64))
          ]),
          s("div", F2, [
            r.value === "workflow" ? (n(), L(T2, {
              key: 0,
              onSelectUrl: v
            })) : r.value === "huggingface" ? (n(), L(lc, {
              key: 1,
              onQueue: u
            })) : r.value === "civitai" ? (n(), L(R2, { key: 2 })) : r.value === "direct" ? (n(), L(U2, {
              key: 3,
              "initial-url": c.value,
              onQueue: d
            }, null, 8, ["initial-url"])) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        $(Ue, {
          variant: "secondary",
          onClick: f
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
}), vc = /* @__PURE__ */ Ie(V2, [["__scopeId", "data-v-de2e4fac"]]), B2 = /* @__PURE__ */ xe({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const o = t, { getEnvironmentModels: a, getStatus: l } = ct(), r = k([]), c = k([]), u = k("production"), d = k(!1), v = k(null), f = k(""), p = k(!1), w = k(null), g = k(!1);
    function _() {
      p.value = !1, o("navigate", "model-index");
    }
    const b = R(
      () => r.value.reduce((D, q) => D + (q.size || 0), 0)
    ), S = R(() => {
      if (!f.value.trim()) return r.value;
      const D = f.value.toLowerCase();
      return r.value.filter((q) => q.filename.toLowerCase().includes(D));
    }), C = R(() => {
      if (!f.value.trim()) return c.value;
      const D = f.value.toLowerCase();
      return c.value.filter((q) => q.filename.toLowerCase().includes(D));
    }), I = R(() => {
      const D = {};
      for (const ue of S.value) {
        const ie = ue.type || "other";
        D[ie] || (D[ie] = []), D[ie].push(ue);
      }
      const q = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(D).sort(([ue], [ie]) => {
        const Y = q.indexOf(ue), me = q.indexOf(ie);
        return Y >= 0 && me >= 0 ? Y - me : Y >= 0 ? -1 : me >= 0 ? 1 : ue.localeCompare(ie);
      }).map(([ue, ie]) => ({ type: ue, models: ie }));
    });
    function E(D) {
      if (!D) return "Unknown";
      const q = D / (1024 * 1024);
      return q >= 1024 ? `${(q / 1024).toFixed(1)} GB` : `${q.toFixed(0)} MB`;
    }
    function M(D) {
      w.value = D.hash || D.filename;
    }
    function N(D) {
      o("navigate", "model-index");
    }
    function F(D) {
      alert(`Download functionality not yet implemented for ${D}`);
    }
    async function V() {
      d.value = !0, v.value = null;
      try {
        const D = await a();
        r.value = D, c.value = [];
        const q = await l();
        u.value = q.environment || "production";
      } catch (D) {
        v.value = D instanceof Error ? D.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return lt(V), (D, q) => (n(), i(W, null, [
      $(Ft, null, {
        header: h(() => [
          $(Vt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: q[1] || (q[1] = (ue) => p.value = !0)
          }, {
            actions: h(() => [
              $(Re, {
                variant: "primary",
                size: "sm",
                onClick: q[0] || (q[0] = (ue) => g.value = !0)
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
          $(go, {
            modelValue: f.value,
            "onUpdate:modelValue": q[2] || (q[2] = (ue) => f.value = ue),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (n(), L(Ps, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (n(), L(Rs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (n(), i(W, { key: 2 }, [
            r.value.length ? (n(), L(Tl, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                x(" Total: " + m(r.value.length) + " models • " + m(E(b.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(W, null, ye(I.value, (ue) => (n(), L(Tt, {
              key: ue.type,
              title: ue.type.toUpperCase(),
              count: ue.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(ue.models, (ie) => (n(), L(Gt, {
                  key: ie.hash || ie.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...q[7] || (q[7] = [
                    x("📦", -1)
                  ])]),
                  title: h(() => [
                    x(m(ie.filename), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(E(ie.size)), 1)
                  ]),
                  details: h(() => [
                    $(kt, {
                      label: "Used by:",
                      value: (ie.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    $(kt, {
                      label: "Path:",
                      value: ie.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => M(ie)
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
            C.value.length ? (n(), L(Tt, {
              key: 1,
              title: "MISSING",
              count: C.value.length
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(C.value, (ue) => (n(), L(Gt, {
                  key: ue.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...q[9] || (q[9] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(ue.filename), 1)
                  ]),
                  subtitle: h(() => [...q[10] || (q[10] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var ie;
                    return [
                      $(kt, {
                        label: "Required by:",
                        value: ((ie = ue.workflow_names) == null ? void 0 : ie.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    $(Re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ie) => F(ue.filename)
                    }, {
                      default: h(() => [...q[11] || (q[11] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ie) => N(ue.filename)
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
            !S.value.length && !C.value.length ? (n(), L(_s, {
              key: 2,
              icon: "📭",
              message: f.value ? `No models match '${f.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      $(fs, {
        show: p.value,
        title: "About Environment Models",
        onClose: q[3] || (q[3] = (ue) => p.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            q[13] || (q[13] = x(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + m(u.value) + '"', 1),
            q[14] || (q[14] = x(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          $(Re, {
            variant: "primary",
            onClick: _
          }, {
            default: h(() => [...q[15] || (q[15] = [
              x(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), L(fc, {
        key: 0,
        identifier: w.value,
        onClose: q[4] || (q[4] = (ue) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      $(vc, {
        show: g.value,
        onClose: q[5] || (q[5] = (ue) => g.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), W2 = /* @__PURE__ */ Ie(B2, [["__scopeId", "data-v-af3ca736"]]), G2 = {
  key: 0,
  class: "indexing-progress"
}, j2 = { class: "progress-info" }, H2 = { class: "progress-label" }, q2 = { class: "progress-count" }, K2 = { class: "progress-bar" }, J2 = { class: "directory-modal-body" }, Q2 = { class: "input-group" }, Y2 = { class: "current-path" }, X2 = { class: "input-group" }, Z2 = /* @__PURE__ */ xe({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = ct(), c = t, u = k([]), d = k(!1), v = k(!1), f = k(null), p = k(""), w = k(!1), g = k(null), _ = k(!1), b = k(null), S = k(""), C = k(!1), I = k(!1), E = k(null), M = R(
      () => u.value.reduce((me, oe) => me + (oe.size || 0), 0)
    ), N = R(() => {
      if (!p.value.trim()) return u.value;
      const me = p.value.toLowerCase();
      return u.value.filter((oe) => {
        const B = oe, H = oe.sha256 || B.sha256_hash || "";
        return oe.filename.toLowerCase().includes(me) || H.toLowerCase().includes(me);
      });
    }), F = R(() => {
      const me = {};
      for (const B of N.value) {
        const H = B.type || "other";
        me[H] || (me[H] = []), me[H].push(B);
      }
      const oe = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(me).sort(([B], [H]) => {
        const we = oe.indexOf(B), se = oe.indexOf(H);
        return we >= 0 && se >= 0 ? we - se : we >= 0 ? -1 : se >= 0 ? 1 : B.localeCompare(H);
      }).map(([B, H]) => ({ type: B, models: H }));
    });
    function V(me) {
      if (!me) return "Unknown";
      const oe = 1024 * 1024 * 1024, B = 1024 * 1024;
      return me >= oe ? `${(me / oe).toFixed(1)} GB` : me >= B ? `${(me / B).toFixed(0)} MB` : `${(me / 1024).toFixed(0)} KB`;
    }
    function D(me) {
      g.value = me.hash || me.filename;
    }
    async function q() {
      v.value = !0, f.value = null;
      try {
        const me = await a();
        await ie(), me.changes > 0 && console.log(`Scan complete: ${me.changes} changes detected`);
      } catch (me) {
        f.value = me instanceof Error ? me.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function ue() {
      if (S.value.trim()) {
        C.value = !0, f.value = null;
        try {
          const me = await r(S.value.trim());
          b.value = me.path, _.value = !1, S.value = "", await ie(), console.log(`Directory changed: ${me.models_indexed} models indexed`), c("refresh");
        } catch (me) {
          f.value = me instanceof Error ? me.message : "Failed to change directory";
        } finally {
          C.value = !1;
        }
      }
    }
    async function ie() {
      d.value = !0, f.value = null;
      try {
        u.value = await o();
      } catch (me) {
        f.value = me instanceof Error ? me.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function Y() {
      try {
        const me = await l();
        b.value = me.path;
      } catch {
      }
    }
    return lt(() => {
      ie(), Y();
    }), (me, oe) => (n(), i(W, null, [
      $(Ft, null, {
        header: h(() => [
          $(Vt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: oe[2] || (oe[2] = (B) => w.value = !0)
          }, {
            actions: h(() => [
              $(Re, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: q
              }, {
                default: h(() => [
                  x(m(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              $(Re, {
                variant: "primary",
                size: "sm",
                onClick: oe[0] || (oe[0] = (B) => _.value = !0)
              }, {
                default: h(() => [...oe[10] || (oe[10] = [
                  x(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              $(Re, {
                variant: "primary",
                size: "sm",
                onClick: oe[1] || (oe[1] = (B) => I.value = !0)
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
          E.value ? (n(), i("div", G2, [
            s("div", j2, [
              s("span", H2, m(E.value.message), 1),
              s("span", q2, m(E.value.current) + "/" + m(E.value.total), 1)
            ]),
            s("div", K2, [
              s("div", {
                class: "progress-fill",
                style: Nt({ width: `${E.value.current / E.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          $(go, {
            modelValue: p.value,
            "onUpdate:modelValue": oe[3] || (oe[3] = (B) => p.value = B),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || E.value ? (n(), L(Ps, {
            key: 0,
            message: E.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : f.value ? (n(), L(Rs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: ie
          }, null, 8, ["message"])) : (n(), i(W, { key: 2 }, [
            u.value.length ? (n(), L(Tl, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                x(" Total: " + m(u.value.length) + " models • " + m(V(M.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(W, null, ye(F.value, (B) => (n(), L(Tt, {
              key: B.type,
              title: B.type.toUpperCase(),
              count: B.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(B.models, (H) => (n(), L(Gt, {
                  key: H.sha256 || H.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...oe[12] || (oe[12] = [
                    x("📦", -1)
                  ])]),
                  title: h(() => [
                    x(m(H.filename), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(V(H.size)), 1)
                  ]),
                  details: h(() => [
                    $(kt, {
                      label: "Hash:",
                      value: H.hash ? H.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (we) => D(H)
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
            N.value.length ? y("", !0) : (n(), L(_s, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      $(fs, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: oe[4] || (oe[4] = (B) => w.value = !1)
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
      g.value ? (n(), L(fc, {
        key: 0,
        identifier: g.value,
        onClose: oe[5] || (oe[5] = (B) => g.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      _.value ? (n(), L($t, {
        key: 1,
        title: "Change Models Directory",
        size: "md",
        "overlay-z-index": 10010,
        onClose: oe[8] || (oe[8] = (B) => _.value = !1)
      }, {
        body: h(() => [
          s("div", J2, [
            s("div", Q2, [
              oe[15] || (oe[15] = s("label", null, "Current Directory", -1)),
              s("code", Y2, m(b.value || "Not set"), 1)
            ]),
            s("div", X2, [
              oe[16] || (oe[16] = s("label", null, "New Directory Path", -1)),
              $(bt, {
                modelValue: S.value,
                "onUpdate:modelValue": oe[6] || (oe[6] = (B) => S.value = B),
                placeholder: "/path/to/models"
              }, null, 8, ["modelValue"])
            ]),
            oe[17] || (oe[17] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
          ])
        ]),
        footer: h(() => [
          $(Ue, {
            variant: "secondary",
            onClick: oe[7] || (oe[7] = (B) => _.value = !1)
          }, {
            default: h(() => [...oe[18] || (oe[18] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          $(Ue, {
            variant: "primary",
            disabled: !S.value.trim() || C.value,
            loading: C.value,
            onClick: ue
          }, {
            default: h(() => [
              x(m(C.value ? "Indexing..." : "Change Directory"), 1)
            ]),
            _: 1
          }, 8, ["disabled", "loading"])
        ]),
        _: 1
      })) : y("", !0),
      $(vc, {
        show: I.value,
        onClose: oe[9] || (oe[9] = (B) => I.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), e$ = /* @__PURE__ */ Ie(Z2, [["__scopeId", "data-v-9fca048b"]]), t$ = { class: "node-details" }, s$ = { class: "status-row" }, o$ = {
  key: 0,
  class: "detail-row"
}, n$ = { class: "value" }, a$ = { class: "detail-row" }, l$ = { class: "value" }, i$ = {
  key: 1,
  class: "detail-row"
}, r$ = { class: "value mono" }, c$ = {
  key: 2,
  class: "detail-row"
}, u$ = ["href"], d$ = {
  key: 3,
  class: "detail-row"
}, m$ = { class: "value mono small" }, f$ = { class: "detail-row" }, v$ = {
  key: 0,
  class: "value"
}, p$ = {
  key: 1,
  class: "workflow-list"
}, g$ = /* @__PURE__ */ xe({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = R(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = R(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = R(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (n(), L($t, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => a("close"))
    }, {
      body: h(() => [
        s("div", t$, [
          s("div", s$, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Be(["status-badge", l.value])
            }, m(r.value), 3)
          ]),
          e.node.version ? (n(), i("div", o$, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", n$, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : y("", !0),
          s("div", a$, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", l$, m(c.value), 1)
          ]),
          e.node.registry_id ? (n(), i("div", i$, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", r$, m(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (n(), i("div", c$, [
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
            ], 8, u$)
          ])) : y("", !0),
          e.node.download_url ? (n(), i("div", d$, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", m$, m(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", f$, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (n(), i("span", v$, " Not used in any workflows ")) : (n(), i("div", p$, [
              (n(!0), i(W, null, ye(e.node.used_in_workflows, (v) => (n(), i("span", {
                key: v,
                class: "workflow-tag"
              }, m(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        $(Ue, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (v) => a("close"))
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
}), h$ = /* @__PURE__ */ Ie(g$, [["__scopeId", "data-v-b342f626"]]), y$ = { class: "dialog-message" }, w$ = {
  key: 0,
  class: "dialog-details"
}, _$ = {
  key: 1,
  class: "dialog-warning"
}, k$ = /* @__PURE__ */ xe({
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
    return (t, o) => (n(), L($t, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (a) => t.$emit("cancel"))
    }, {
      body: h(() => [
        s("p", y$, m(e.message), 1),
        e.details && e.details.length ? (n(), i("div", w$, [
          (n(!0), i(W, null, ye(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (n(), i("p", _$, [
          o[4] || (o[4] = s("span", { class: "warning-icon" }, "⚠", -1)),
          x(" " + m(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        $(Ue, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => t.$emit("cancel"))
        }, {
          default: h(() => [
            x(m(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (n(), L(Ue, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (a) => t.$emit("secondary"))
        }, {
          default: h(() => [
            x(m(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        $(Ue, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (a) => t.$emit("confirm"))
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
}), Pl = /* @__PURE__ */ Ie(k$, [["__scopeId", "data-v-3670b9f5"]]), b$ = { class: "mismatch-warning" }, $$ = { class: "version-mismatch" }, C$ = { class: "version-actual" }, x$ = { class: "version-expected" }, S$ = { style: { color: "var(--cg-color-warning)" } }, I$ = { style: { color: "var(--cg-color-warning)" } }, E$ = {
  key: 0,
  class: "community-status-badge"
}, T$ = { key: 0 }, M$ = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, P$ = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, R$ = { class: "criticality-control" }, L$ = ["value", "disabled", "onChange"], D$ = /* @__PURE__ */ xe({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: t }) {
    const o = e, a = t, {
      getNodes: l,
      trackNodeAsDev: r,
      installNode: c,
      uninstallNode: u,
      queueNodeInstall: d,
      updateNodeCriticality: v
    } = ct(), f = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), p = k(!1), w = k(null), g = k(""), _ = k(!1), b = k(null), S = k(/* @__PURE__ */ new Set()), C = k(/* @__PURE__ */ new Set()), I = k(null), E = R(() => {
      if (!g.value.trim()) return f.value.nodes;
      const ge = g.value.toLowerCase();
      return f.value.nodes.filter(
        (ve) => {
          var T, A;
          return ve.name.toLowerCase().includes(ge) || ((T = ve.description) == null ? void 0 : T.toLowerCase().includes(ge)) || ((A = ve.repository) == null ? void 0 : A.toLowerCase().includes(ge));
        }
      );
    }), M = R(
      () => E.value.filter((ge) => ge.installed && ge.tracked)
    ), N = R(
      () => E.value.filter((ge) => !ge.installed && ge.tracked && !ge.issue_type)
    ), F = R(
      () => E.value.filter((ge) => ge.installed && !ge.tracked)
    ), V = R(
      () => E.value.filter((ge) => ge.issue_type === "version_gated")
    ), D = R(
      () => E.value.filter((ge) => ge.issue_type === "uninstallable")
    );
    function q(ge) {
      return ge.registry_id || ge.name;
    }
    function ue(ge) {
      return S.value.has(q(ge));
    }
    async function ie(ge, ve) {
      const T = ge.registry_id;
      if (!T) {
        a("toast", `Node "${ge.name}" has no package id for install`, "warning");
        return;
      }
      if (ve === "git" && !ge.repository) {
        a("toast", `Node "${ge.name}" has no repository URL for git install`, "warning");
        return;
      }
      const A = {
        id: T,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      ve === "git" && ge.repository && (A.repository = ge.repository, A.install_source = "git"), await d(A), S.value.add(q(ge)), a("toast", `✓ Queued install for "${ge.name}"`, "success");
    }
    function Y(ge) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[ge] || ge;
    }
    const me = R(() => o.versionMismatches.length > 0);
    function oe(ge) {
      return !ge.used_in_workflows || ge.used_in_workflows.length === 0 ? "Not used in any workflows" : ge.used_in_workflows.length === 1 ? ge.used_in_workflows[0] : `${ge.used_in_workflows.length} workflows`;
    }
    function B(ge) {
      return ge.criticality === "optional" ? "optional" : "required";
    }
    function H(ge) {
      return C.value.has(ge.name);
    }
    async function we(ge, ve) {
      const T = ve.target, A = B(ge), le = T.value;
      if (le !== A) {
        C.value = new Set(C.value).add(ge.name), ge.criticality = le;
        try {
          const Ce = await v(ge.name, le);
          if (Ce.status !== "success") {
            ge.criticality = A, a("toast", Ce.message || `Failed to update "${ge.name}" criticality`, "error");
            return;
          }
          a("toast", `Marked "${ge.name}" as ${le}`, "success");
        } catch (Ce) {
          ge.criticality = A, T.value = A, a("toast", `Error updating criticality: ${Ce instanceof Error ? Ce.message : "Unknown error"}`, "error");
        } finally {
          const Ce = new Set(C.value);
          Ce.delete(ge.name), C.value = Ce;
        }
      }
    }
    function se(ge) {
      return ge.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function de(ge) {
      return ge.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function ce(ge) {
      return ge.registry_id ? `Community-mapped package: ${ge.registry_id}` : "Community-mapped package";
    }
    function K(ge) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function ee(ge) {
      b.value = ge;
    }
    function te() {
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
            const ve = await r(ge);
            ve.status === "success" ? (a("toast", `✓ Node "${ge}" tracked as development`, "success"), await Ae()) : a("toast", `Failed to track node: ${ve.message || "Unknown error"}`, "error");
          } catch (ve) {
            a("toast", `Error tracking node: ${ve instanceof Error ? ve.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function Se(ge) {
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
            const ve = await u(ge);
            ve.status === "success" ? (a("toast", `✓ Node "${ge}" removed`, "success"), await Ae()) : a("toast", `Failed to remove node: ${ve.message || "Unknown error"}`, "error");
          } catch (ve) {
            a("toast", `Error removing node: ${ve instanceof Error ? ve.message : "Unknown error"}`, "error");
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
            const ve = await c(ge);
            ve.status === "success" ? (a("toast", `✓ Node "${ge}" installed`, "success"), await Ae()) : a("toast", `Failed to install node: ${ve.message || "Unknown error"}`, "error");
          } catch (ve) {
            a("toast", `Error installing node: ${ve instanceof Error ? ve.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function Ne(ge) {
      I.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${ge.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0, await ie(ge, "registry");
          } catch (ve) {
            a("toast", `Error queueing install: ${ve instanceof Error ? ve.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function be(ge) {
      I.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${ge.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0, await ie(ge, "git");
          } catch (ve) {
            a("toast", `Error queueing git install: ${ve instanceof Error ? ve.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    async function Ae() {
      p.value = !0, w.value = null;
      try {
        f.value = await l();
      } catch (ge) {
        w.value = ge instanceof Error ? ge.message : "Failed to load nodes";
      } finally {
        p.value = !1;
      }
    }
    return lt(Ae), (ge, ve) => (n(), i(W, null, [
      $(Ft, null, {
        header: h(() => [
          $(Vt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: ve[0] || (ve[0] = (T) => _.value = !0)
          }, {
            actions: h(() => [
              $(Re, {
                variant: "primary",
                size: "sm",
                onClick: te
              }, {
                default: h(() => [...ve[7] || (ve[7] = [
                  x(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          $(go, {
            modelValue: g.value,
            "onUpdate:modelValue": ve[1] || (ve[1] = (T) => g.value = T),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          p.value ? (n(), L(Ps, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (n(), L(Rs, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: Ae
          }, null, 8, ["message"])) : (n(), i(W, { key: 2 }, [
            me.value ? (n(), L(Tt, {
              key: 0,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                s("div", b$, [
                  ve[8] || (ve[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(W, null, ye(e.versionMismatches, (T) => (n(), L(Gt, {
                  key: T.name,
                  status: "warning"
                }, {
                  icon: h(() => [...ve[9] || (ve[9] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", $$, [
                      s("span", C$, m(T.actual), 1),
                      ve[10] || (ve[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", x$, m(T.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "warning",
                      size: "sm",
                      onClick: ve[2] || (ve[2] = (A) => a("repair-environment"))
                    }, {
                      default: h(() => [...ve[11] || (ve[11] = [
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
            V.value.length ? (n(), L(Tt, {
              key: 1,
              title: "BLOCKED",
              count: V.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(V.value, (T) => (n(), L(Gt, {
                  key: `blocked-${T.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...ve[12] || (ve[12] = [
                    x("⛔", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", S$, m(se(T)), 1)
                  ]),
                  details: h(() => [
                    $(kt, {
                      label: "Guidance:",
                      value: T.issue_guidance || de(T)
                    }, null, 8, ["value"]),
                    $(kt, {
                      label: "Used by:",
                      value: oe(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => ee(T)
                    }, {
                      default: h(() => [...ve[13] || (ve[13] = [
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
            D.value.length ? (n(), L(Tt, {
              key: 2,
              title: "COMMUNITY-MAPPED",
              count: D.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(D.value, (T) => (n(), L(Gt, {
                  key: `community-${T.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...ve[14] || (ve[14] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", I$, m(ce(T)), 1)
                  ]),
                  details: h(() => [
                    $(kt, {
                      label: "Guidance:",
                      value: T.issue_guidance || K(T)
                    }, null, 8, ["value"]),
                    $(kt, {
                      label: "Used by:",
                      value: oe(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => ee(T)
                    }, {
                      default: h(() => [...ve[15] || (ve[15] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    ue(T) ? (n(), i("span", E$, "Queued")) : (n(), i(W, { key: 1 }, [
                      T.registry_id ? (n(), L(Re, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (A) => Ne(T)
                      }, {
                        default: h(() => [...ve[16] || (ve[16] = [
                          x(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      T.repository ? (n(), L(Re, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (A) => be(T)
                      }, {
                        default: h(() => [...ve[17] || (ve[17] = [
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
            F.value.length ? (n(), L(Tt, {
              key: 3,
              title: "UNTRACKED",
              count: F.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(F.value, (T) => (n(), L(Gt, {
                  key: T.name,
                  status: "warning"
                }, {
                  icon: h(() => [...ve[18] || (ve[18] = [
                    x("?", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [...ve[19] || (ve[19] = [
                    s("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    $(kt, {
                      label: "Used by:",
                      value: oe(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => ee(T)
                    }, {
                      default: h(() => [...ve[20] || (ve[20] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => Me(T.name)
                    }, {
                      default: h(() => [...ve[21] || (ve[21] = [
                        x(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Re, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (A) => Se(T.name)
                    }, {
                      default: h(() => [...ve[22] || (ve[22] = [
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
            M.value.length ? (n(), L(Tt, {
              key: 4,
              title: "INSTALLED",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(M.value, (T) => (n(), L(Gt, {
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
                    T.version ? (n(), i("span", T$, m(T.source === "development" ? "" : "v") + m(T.version), 1)) : (n(), i("span", M$, "version unknown")),
                    s("span", P$, " • " + m(Y(T.source)), 1)
                  ]),
                  details: h(() => [
                    $(kt, {
                      label: "Used by:",
                      value: oe(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => ee(T)
                    }, {
                      default: h(() => [...ve[23] || (ve[23] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    s("label", R$, [
                      ve[25] || (ve[25] = s("span", null, "Readiness", -1)),
                      s("select", {
                        class: "criticality-select",
                        value: B(T),
                        disabled: H(T),
                        onChange: (A) => we(T, A)
                      }, [...ve[24] || (ve[24] = [
                        s("option", { value: "required" }, "Required", -1),
                        s("option", { value: "optional" }, "Optional", -1)
                      ])], 40, L$)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            N.value.length ? (n(), L(Tt, {
              key: 5,
              title: "MISSING",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(N.value, (T) => (n(), L(Gt, {
                  key: T.name,
                  status: "missing"
                }, {
                  icon: h(() => [...ve[26] || (ve[26] = [
                    x("!", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [...ve[27] || (ve[27] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    $(kt, {
                      label: "Required by:",
                      value: oe(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => ee(T)
                    }, {
                      default: h(() => [...ve[28] || (ve[28] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => ze(T.name)
                    }, {
                      default: h(() => [...ve[29] || (ve[29] = [
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
            !M.value.length && !N.value.length && !V.value.length && !D.value.length && !F.value.length ? (n(), L(_s, {
              key: 6,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      $(fs, {
        show: _.value,
        title: "About Custom Nodes",
        onClose: ve[4] || (ve[4] = (T) => _.value = !1)
      }, {
        content: h(() => [...ve[30] || (ve[30] = [
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
          $(Re, {
            variant: "primary",
            onClick: ve[3] || (ve[3] = (T) => _.value = !1)
          }, {
            default: h(() => [...ve[31] || (ve[31] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b.value ? (n(), L(h$, {
        key: 0,
        node: b.value,
        onClose: ve[5] || (ve[5] = (T) => b.value = null)
      }, null, 8, ["node"])) : y("", !0),
      I.value ? (n(), L(Pl, {
        key: 1,
        title: I.value.title,
        message: I.value.message,
        warning: I.value.warning,
        "confirm-label": I.value.confirmLabel,
        destructive: I.value.destructive,
        onConfirm: I.value.onConfirm,
        onCancel: ve[6] || (ve[6] = (T) => I.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), N$ = /* @__PURE__ */ Ie(D$, [["__scopeId", "data-v-edfa1c86"]]), U$ = { class: "setting-info" }, O$ = { class: "setting-label" }, A$ = {
  key: 0,
  class: "required-marker"
}, z$ = {
  key: 0,
  class: "setting-description"
}, F$ = { class: "setting-control" }, V$ = /* @__PURE__ */ xe({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (n(), i("div", {
      class: Be(["setting-row", { disabled: e.disabled, stacked: e.stacked }])
    }, [
      s("div", U$, [
        s("div", O$, [
          x(m(e.label) + " ", 1),
          e.required ? (n(), i("span", A$, "*")) : y("", !0)
        ]),
        e.description ? (n(), i("div", z$, m(e.description), 1)) : y("", !0)
      ]),
      s("div", F$, [
        at(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), ko = /* @__PURE__ */ Ie(V$, [["__scopeId", "data-v-3e106b1c"]]), B$ = ["type", "value", "placeholder", "disabled"], W$ = /* @__PURE__ */ xe({
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
    const a = e, l = o, r = k(null);
    function c(u) {
      const d = u.target.value;
      l("update:modelValue", d);
    }
    return lt(() => {
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
    }), (u, d) => (n(), i("input", {
      ref_key: "inputRef",
      ref: r,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Be(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = gs((v) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = gs((v) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => u.$emit("blur"))
    }, null, 42, B$));
  }
}), xo = /* @__PURE__ */ Ie(W$, [["__scopeId", "data-v-0380d08f"]]), G$ = { class: "toggle" }, j$ = ["checked", "disabled"], H$ = /* @__PURE__ */ xe({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (n(), i("label", G$, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (a) => t.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, j$),
      o[1] || (o[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Mi = /* @__PURE__ */ Ie(H$, [["__scopeId", "data-v-71c0f550"]]), Ga = "ComfyGit.Deploy.GitHubPAT";
function pc(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function q$(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function K$() {
  function e() {
    try {
      return localStorage.getItem(Ga);
    } catch {
      return null;
    }
  }
  function t(l) {
    try {
      localStorage.setItem(Ga, l);
    } catch (r) {
      console.error("[useGitAuth] Failed to save token:", r);
    }
  }
  function o() {
    try {
      localStorage.removeItem(Ga);
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
    clearToken: o,
    hasToken: a,
    isRemoteSsh: pc,
    isRemoteHttps: q$
  };
}
const J$ = { class: "workspace-settings-content" }, Q$ = { class: "settings-section" }, Y$ = { class: "path-setting" }, X$ = { class: "path-value" }, Z$ = { class: "path-setting" }, eC = { class: "path-value" }, tC = { class: "settings-section" }, sC = { class: "token-setting" }, oC = {
  key: 0,
  class: "token-warning"
}, nC = { class: "token-actions" }, aC = { class: "settings-section" }, lC = { class: "settings-section" }, iC = /* @__PURE__ */ xe({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: c, getRemotes: u, testGitAuth: d } = ct(), { getToken: v, setToken: f, clearToken: p, hasToken: w } = K$(), g = k(!1), _ = k(null), b = k(null), S = k(null), C = k(null), I = k(""), E = k(""), M = k(""), N = k(""), F = k(!1), V = k(!1), D = k(!1), q = k(""), ue = k(!1), ie = k(!1), Y = k(null), me = k(!1), oe = k(!0);
    function B(ze) {
      return ze.join(" ");
    }
    function H(ze) {
      return ze.trim() ? ze.trim().split(/\s+/) : [];
    }
    const we = R(() => {
      if (!C.value) return !1;
      const ze = F.value, Ne = V.value, be = D.value, Ae = N.value !== B(C.value.comfyui_extra_args || []);
      return ze || Ne || be || Ae;
    }), se = R(() => w());
    async function de() {
      var ze;
      g.value = !0, _.value = null;
      try {
        S.value = await r(a.workspacePath || void 0), C.value = { ...S.value }, I.value = S.value.civitai_api_key || "", E.value = S.value.huggingface_token || "", N.value = B(S.value.comfyui_extra_args || []), M.value = v() || "", q.value = M.value, F.value = !1, V.value = !1, D.value = !1, Y.value = null;
        const Ne = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        me.value = Ne !== "false", oe.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const Ae = (ze = (await u()).remotes) == null ? void 0 : ze.find((ge) => ge.name === "origin");
          ue.value = !!(Ae && pc(Ae.url));
        } catch {
          ue.value = !1;
        }
      } catch (Ne) {
        _.value = Ne instanceof Error ? Ne.message : "Failed to load settings";
      } finally {
        g.value = !1;
      }
    }
    async function ce() {
      var ze;
      b.value = null;
      try {
        const Ne = {};
        F.value && (Ne.civitai_api_key = I.value || null), V.value && (Ne.huggingface_token = E.value || null), N.value !== B(((ze = C.value) == null ? void 0 : ze.comfyui_extra_args) || []) && (Ne.comfyui_extra_args = H(N.value)), await c(Ne, a.workspacePath || void 0), D.value && (M.value ? f(M.value) : p()), await de(), b.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          b.value = null;
        }, 3e3);
      } catch (Ne) {
        const be = Ne instanceof Error ? Ne.message : "Failed to save settings";
        b.value = { type: "error", message: be }, l("error", be);
      }
    }
    function K() {
      C.value && (I.value = C.value.civitai_api_key || "", E.value = C.value.huggingface_token || "", N.value = B(C.value.comfyui_extra_args || []), M.value = q.value, F.value = !1, V.value = !1, D.value = !1, Y.value = null, b.value = null);
    }
    async function ee() {
      if (M.value) {
        ie.value = !0, Y.value = null;
        try {
          const ze = await d(M.value);
          Y.value = {
            type: ze.status === "success" ? "success" : "error",
            message: ze.message
          };
        } catch (ze) {
          Y.value = {
            type: "error",
            message: ze instanceof Error ? ze.message : "Connection test failed"
          };
        } finally {
          ie.value = !1;
        }
      }
    }
    function te() {
      M.value = "", D.value = !0, Y.value = null;
    }
    function Me(ze) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(ze)), console.log("[ComfyGit] Auto-refresh setting saved:", ze);
    }
    function Se(ze) {
      ze ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", ze ? "enabled" : "disabled");
    }
    return t({
      saveSettings: ce,
      resetSettings: K,
      hasChanges: we,
      loadSettings: de
    }), lt(de), (ze, Ne) => (n(), i("div", J$, [
      g.value ? (n(), L(Ps, {
        key: 0,
        message: "Loading workspace settings..."
      })) : _.value ? (n(), L(Rs, {
        key: 1,
        message: _.value,
        retry: !0,
        onRetry: de
      }, null, 8, ["message"])) : (n(), i(W, { key: 2 }, [
        $(Tt, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var be, Ae;
            return [
              s("div", Q$, [
                s("div", Y$, [
                  Ne[9] || (Ne[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  Ne[10] || (Ne[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", X$, m(((be = S.value) == null ? void 0 : be.workspace_path) || "Loading..."), 1)
                ]),
                s("div", Z$, [
                  Ne[11] || (Ne[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  Ne[12] || (Ne[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", eC, m(((Ae = S.value) == null ? void 0 : Ae.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        $(Tt, { title: "API CREDENTIALS" }, {
          default: h(() => [
            s("div", tC, [
              $(ko, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  $(xo, {
                    modelValue: I.value,
                    "onUpdate:modelValue": Ne[0] || (Ne[0] = (be) => I.value = be),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: Ne[1] || (Ne[1] = (be) => F.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              $(ko, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: h(() => [
                  $(xo, {
                    modelValue: E.value,
                    "onUpdate:modelValue": Ne[2] || (Ne[2] = (be) => E.value = be),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: Ne[3] || (Ne[3] = (be) => V.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              $(ko, {
                label: "GitHub Personal Access Token",
                description: "Client-side token used for private Git remote access during deploy and remote operations",
                stacked: ""
              }, {
                default: h(() => [
                  s("div", sC, [
                    $(xo, {
                      modelValue: M.value,
                      "onUpdate:modelValue": Ne[4] || (Ne[4] = (be) => M.value = be),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: Ne[5] || (Ne[5] = (be) => D.value = !0)
                    }, null, 8, ["modelValue"]),
                    ue.value ? (n(), i("div", oC, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : y("", !0),
                    Ne[15] || (Ne[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", nC, [
                      $(Re, {
                        variant: "ghost",
                        size: "xs",
                        loading: ie.value,
                        disabled: !M.value || ie.value,
                        onClick: ee
                      }, {
                        default: h(() => [...Ne[13] || (Ne[13] = [
                          x(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      se.value ? (n(), L(Re, {
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
                    Y.value ? (n(), i("div", {
                      key: 1,
                      class: Be(["token-test-result", Y.value.type])
                    }, m(Y.value.message), 3)) : y("", !0)
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        $(Tt, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            s("div", aC, [
              $(ko, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  $(xo, {
                    modelValue: N.value,
                    "onUpdate:modelValue": Ne[6] || (Ne[6] = (be) => N.value = be),
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
        $(Tt, { title: "UI SETTINGS" }, {
          default: h(() => [
            s("div", lC, [
              $(ko, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  $(Mi, {
                    modelValue: me.value,
                    "onUpdate:modelValue": [
                      Ne[7] || (Ne[7] = (be) => me.value = be),
                      Me
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              $(ko, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  $(Mi, {
                    modelValue: oe.value,
                    "onUpdate:modelValue": [
                      Ne[8] || (Ne[8] = (be) => oe.value = be),
                      Se
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        b.value ? (n(), L(Tl, {
          key: 0,
          variant: (b.value.type === "success", "compact")
        }, {
          default: h(() => [
            s("span", {
              style: Nt({ color: b.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, m(b.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), gc = /* @__PURE__ */ Ie(iC, [["__scopeId", "data-v-f1bdc574"]]), rC = /* @__PURE__ */ xe({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const t = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (n(), L(Ft, null, {
      header: h(() => [
        $(Vt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var r, c;
            return [
              $(Re, {
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
              (c = t.value) != null && c.hasChanges ? (n(), L(Re, {
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
        $(gc, {
          ref_key: "contentRef",
          ref: t,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), cC = { class: "env-title" }, uC = {
  key: 0,
  class: "current-badge"
}, dC = {
  key: 0,
  class: "branch-info"
}, mC = /* @__PURE__ */ xe({
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
    return (t, o) => (n(), L(Gt, {
      status: e.isCurrent ? "synced" : void 0
    }, ss({
      icon: h(() => [
        x(m(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        s("div", cC, [
          s("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (n(), i("span", uC, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (n(), i("span", dC, [
          o[0] || (o[0] = s("span", { class: "branch-icon" }, "⎇", -1)),
          x(" " + m(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: h(() => [
        at(t.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: h(() => [
          $(kt, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          $(kt, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          $(kt, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (n(), L(kt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), fC = /* @__PURE__ */ Ie(mC, [["__scopeId", "data-v-9231917a"]]), vC = { class: "env-details" }, pC = { class: "status-row" }, gC = {
  key: 0,
  class: "detail-row"
}, hC = { class: "value mono" }, yC = {
  key: 1,
  class: "detail-row"
}, wC = { class: "value mono small" }, _C = { class: "collapsible-section" }, kC = { class: "value" }, bC = {
  key: 0,
  class: "collapsible-body"
}, $C = { class: "item-list" }, CC = { class: "item-name" }, xC = { class: "item-name" }, SC = { class: "item-name" }, IC = { class: "item-name" }, EC = {
  key: 0,
  class: "empty-list"
}, TC = { class: "collapsible-section" }, MC = { class: "value" }, PC = {
  key: 0,
  class: "collapsible-body"
}, RC = { class: "item-list" }, LC = { class: "item-name" }, DC = {
  key: 0,
  class: "item-meta"
}, NC = {
  key: 0,
  class: "empty-list"
}, UC = { class: "collapsible-section" }, OC = { class: "value" }, AC = {
  key: 0,
  class: "missing-count"
}, zC = {
  key: 0,
  class: "collapsible-body"
}, FC = { class: "item-list" }, VC = { class: "model-row" }, BC = { class: "item-name" }, WC = { class: "model-meta" }, GC = { class: "item-meta" }, jC = {
  key: 0,
  class: "item-meta"
}, HC = {
  key: 0,
  class: "empty-list"
}, qC = {
  key: 2,
  class: "section-divider"
}, KC = {
  key: 3,
  class: "detail-row"
}, JC = { class: "value" }, QC = { class: "footer-actions" }, YC = /* @__PURE__ */ xe({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete", "export"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = k(/* @__PURE__ */ new Set());
    function r(d) {
      l.value.has(d) ? l.value.delete(d) : l.value.add(d), l.value = new Set(l.value);
    }
    const c = R(() => {
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
    return (d, v) => (n(), L($t, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[6] || (v[6] = (f) => a("close"))
    }, {
      body: h(() => {
        var f, p, w, g, _, b, S, C, I, E, M, N, F, V;
        return [
          s("div", vC, [
            s("div", pC, [
              v[7] || (v[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Be(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (n(), i("div", gC, [
              v[8] || (v[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", hC, m(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (n(), i("div", yC, [
              v[9] || (v[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", wC, m(e.environment.path), 1)
            ])) : y("", !0),
            v[18] || (v[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", _C, [
              s("div", {
                class: "collapsible-header",
                onClick: v[0] || (v[0] = (D) => r("workflows"))
              }, [
                v[10] || (v[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", kC, m(((f = e.detail) == null ? void 0 : f.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (n(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (n(), i("div", bC, [
                s("div", $C, [
                  (n(!0), i(W, null, ye(e.detail.workflows.synced, (D) => (n(), i("div", {
                    key: "synced-" + D,
                    class: "list-item"
                  }, [
                    s("span", CC, m(D), 1),
                    v[11] || (v[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(W, null, ye(e.detail.workflows.new, (D) => (n(), i("div", {
                    key: "new-" + D,
                    class: "list-item"
                  }, [
                    s("span", xC, m(D), 1),
                    v[12] || (v[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(W, null, ye(e.detail.workflows.modified, (D) => (n(), i("div", {
                    key: "mod-" + D,
                    class: "list-item"
                  }, [
                    s("span", SC, m(D), 1),
                    v[13] || (v[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(W, null, ye(e.detail.workflows.deleted, (D) => (n(), i("div", {
                    key: "del-" + D,
                    class: "list-item"
                  }, [
                    s("span", IC, m(D), 1),
                    v[14] || (v[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (n(), i("div", EC, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            s("div", TC, [
              s("div", {
                class: "collapsible-header",
                onClick: v[1] || (v[1] = (D) => r("nodes"))
              }, [
                v[15] || (v[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", MC, m(((g = e.detail) == null ? void 0 : g.node_count) ?? e.environment.node_count), 1),
                (_ = e.detail) != null && _.nodes ? (n(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (b = e.detail) != null && b.nodes && l.value.has("nodes") ? (n(), i("div", PC, [
                s("div", RC, [
                  (n(!0), i(W, null, ye(e.detail.nodes, (D) => (n(), i("div", {
                    key: D.name,
                    class: "list-item"
                  }, [
                    s("span", LC, m(D.name), 1),
                    D.version ? (n(), i("span", DC, m(D.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (n(), i("div", NC, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            s("div", UC, [
              s("div", {
                class: "collapsible-header",
                onClick: v[2] || (v[2] = (D) => r("models"))
              }, [
                v[16] || (v[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", OC, [
                  x(m(((S = e.detail) == null ? void 0 : S.model_count) ?? e.environment.model_count) + " ", 1),
                  (I = (C = e.detail) == null ? void 0 : C.models) != null && I.missing.length ? (n(), i("span", AC, "(" + m(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (E = e.detail) != null && E.models ? (n(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (M = e.detail) != null && M.models && l.value.has("models") ? (n(), i("div", zC, [
                s("div", FC, [
                  (n(!0), i(W, null, ye(e.detail.models.missing, (D) => (n(), i("div", {
                    key: D.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", VC, [
                      s("span", BC, m(D.filename), 1),
                      s("span", {
                        class: Be(["criticality-badge", D.criticality])
                      }, m(D.criticality), 3)
                    ]),
                    s("div", WC, [
                      s("span", GC, m(D.category), 1),
                      D.workflow_names.length ? (n(), i("span", jC, " used by: " + m(D.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (n(), i("div", HC, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (N = e.detail) != null && N.created_at || e.environment.created_at ? (n(), i("div", qC)) : y("", !0),
            (F = e.detail) != null && F.created_at || e.environment.created_at ? (n(), i("div", KC, [
              v[17] || (v[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", JC, m(u(((V = e.detail) == null ? void 0 : V.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        s("div", QC, [
          $(Ue, {
            variant: "secondary",
            size: "sm",
            onClick: v[3] || (v[3] = (f) => a("export", e.environment.name))
          }, {
            default: h(() => [...v[19] || (v[19] = [
              x(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (n(), L(Ue, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[4] || (v[4] = (f) => a("delete", e.environment.name))
          }, {
            default: h(() => [...v[20] || (v[20] = [
              x(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          v[22] || (v[22] = s("div", { class: "footer-spacer" }, null, -1)),
          $(Ue, {
            variant: "secondary",
            size: "sm",
            onClick: v[5] || (v[5] = (f) => a("close"))
          }, {
            default: h(() => [...v[21] || (v[21] = [
              x(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), XC = /* @__PURE__ */ Ie(YC, [["__scopeId", "data-v-750671f5"]]), hc = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], yc = "3.12", Rl = [
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
], wc = "auto", ZC = { class: "progress-bar" }, ex = /* @__PURE__ */ xe({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, o = R(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (a, l) => (n(), i("div", ZC, [
      s("div", {
        class: Be(["progress-fill", e.variant]),
        style: Nt({ width: o.value })
      }, null, 6)
    ]));
  }
}), _c = /* @__PURE__ */ Ie(ex, [["__scopeId", "data-v-1beb0512"]]), tx = { class: "task-progress" }, sx = { class: "progress-info" }, ox = { class: "progress-percentage" }, nx = { class: "progress-message" }, ax = {
  key: 0,
  class: "progress-steps"
}, lx = { class: "step-icon" }, ix = { class: "step-label" }, rx = /* @__PURE__ */ xe({
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
    function a(l) {
      const r = o(l);
      return r === "completed" ? "✓" : r === "active" ? "⟳" : "○";
    }
    return (l, r) => (n(), i("div", tx, [
      $(_c, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", sx, [
        s("span", ox, m(e.progress) + "%", 1),
        s("span", nx, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (n(), i("div", ax, [
        (n(!0), i(W, null, ye(e.steps, (c) => (n(), i("div", {
          key: c.id,
          class: Be(["step", o(c.id)])
        }, [
          s("span", lx, m(a(c.id)), 1),
          s("span", ix, m(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), aa = /* @__PURE__ */ Ie(rx, [["__scopeId", "data-v-9d1de66c"]]), cx = {
  key: 0,
  class: "create-env-form"
}, ux = { class: "form-field" }, dx = { class: "input-wrapper" }, mx = {
  key: 0,
  class: "validating-indicator"
}, fx = {
  key: 1,
  class: "valid-indicator"
}, vx = {
  key: 0,
  class: "field-error"
}, px = { class: "form-field" }, gx = ["value"], hx = { class: "form-field" }, yx = ["disabled"], wx = ["value"], _x = { class: "form-field" }, kx = ["value"], bx = { class: "form-field form-field--checkbox" }, $x = { class: "form-checkbox" }, Cx = {
  key: 1,
  class: "create-env-progress"
}, xx = { class: "creating-intro" }, Sx = {
  key: 0,
  class: "progress-warning"
}, Ix = {
  key: 1,
  class: "create-error"
}, Ex = { class: "error-message" }, Tx = {
  key: 1,
  class: "footer-status"
}, Mx = 10, Px = /* @__PURE__ */ xe({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const o = t, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = ct(), u = k(""), d = k(yc), v = k("latest"), f = k(wc), p = k(!1), w = k(null), g = k(!1), _ = k(!1);
    let b = null, S = 0;
    const C = R(() => !!u.value.trim() && _.value && !w.value && !g.value && !M.value), I = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), E = k(!1), M = k(!1), N = k({
      progress: 0,
      message: ""
    });
    let F = null, V = 0;
    const D = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], q = k(null);
    gt(u, (se) => {
      _.value = !1, b && (clearTimeout(b), b = null);
      const de = se.trim();
      if (!de) {
        w.value = null, g.value = !1;
        return;
      }
      g.value = !0, b = setTimeout(() => {
        ue(de);
      }, 400);
    });
    async function ue(se, de = !1) {
      const ce = se.trim();
      if (!ce)
        return _.value = !1, g.value = !1, w.value = de ? "Environment name is required" : null, !1;
      const K = ++S;
      g.value = !0;
      try {
        const ee = await c(ce);
        return K !== S ? !1 : (w.value = ee.valid ? null : ee.error || "Invalid name", _.value = !!ee.valid, !!ee.valid);
      } catch {
        return K !== S || (w.value = "Failed to validate name", _.value = !1), !1;
      } finally {
        K === S && (g.value = !1);
      }
    }
    async function ie() {
      b && (clearTimeout(b), b = null), await ue(u.value, !0);
    }
    function Y() {
      M.value || o("close");
    }
    async function me() {
      const se = u.value.trim();
      if (!se) {
        w.value = "Environment name is required";
        return;
      }
      if (b && (clearTimeout(b), b = null), !!await ue(se, !0)) {
        M.value = !0, N.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const ce = {
            name: se,
            python_version: d.value,
            comfyui_version: v.value,
            torch_backend: f.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, K = await l(ce);
          K.status === "started" ? oe() : K.status === "error" && (N.value = {
            progress: 0,
            message: K.message || "Failed to start creation",
            error: K.message
          });
        } catch (ce) {
          N.value = {
            progress: 0,
            message: ce instanceof Error ? ce.message : "Unknown error",
            error: ce instanceof Error ? ce.message : "Unknown error"
          };
        }
      }
    }
    function oe() {
      F || (V = 0, F = window.setInterval(async () => {
        try {
          const se = await r();
          V = 0, N.value = {
            progress: se.progress ?? 0,
            message: se.message,
            phase: se.phase,
            error: se.error
          }, se.state === "complete" ? (B(), o("created", se.environment_name || u.value.trim(), p.value)) : se.state === "error" ? (B(), N.value.error = se.error || se.message) : se.state === "idle" && M.value && (B(), N.value.error = "Creation was interrupted. Please try again.");
        } catch {
          V++, V >= Mx && (B(), N.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function B() {
      F && (clearInterval(F), F = null);
    }
    function H() {
      M.value = !1, N.value = { progress: 0, message: "" }, o("close");
    }
    async function we() {
      E.value = !0;
      try {
        I.value = await a();
      } catch (se) {
        console.error("Failed to load ComfyUI releases:", se);
      } finally {
        E.value = !1;
      }
    }
    return lt(async () => {
      var se;
      await At(), (se = q.value) == null || se.focus(), we();
    }), zo(() => {
      B(), b && (clearTimeout(b), b = null);
    }), (se, de) => (n(), L($t, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !M.value,
      onClose: Y
    }, {
      body: h(() => [
        M.value ? (n(), i("div", Cx, [
          s("p", xx, [
            de[12] || (de[12] = x(" Creating environment ", -1)),
            s("strong", null, m(u.value), 1),
            de[13] || (de[13] = x("... ", -1))
          ]),
          $(aa, {
            progress: N.value.progress,
            message: N.value.message,
            "current-phase": N.value.phase,
            variant: N.value.error ? "error" : "default",
            "show-steps": !0,
            steps: D
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          N.value.error ? y("", !0) : (n(), i("p", Sx, " This may take several minutes. Please wait... ")),
          N.value.error ? (n(), i("div", Ix, [
            s("p", Ex, m(N.value.error), 1)
          ])) : y("", !0)
        ])) : (n(), i("div", cx, [
          s("div", ux, [
            de[6] || (de[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", dx, [
              Rt(s("input", {
                ref_key: "nameInput",
                ref: q,
                "onUpdate:modelValue": de[0] || (de[0] = (ce) => u.value = ce),
                type: "text",
                class: Be(["form-input", { error: !!w.value, valid: _.value }]),
                placeholder: "my-environment",
                onKeyup: gs(me, ["enter"]),
                onBlur: ie
              }, null, 34), [
                [fn, u.value]
              ]),
              g.value ? (n(), i("span", mx, "...")) : _.value ? (n(), i("span", fx, "✓")) : y("", !0)
            ]),
            w.value ? (n(), i("div", vx, m(w.value), 1)) : y("", !0),
            de[7] || (de[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", px, [
            de[8] || (de[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            Rt(s("select", {
              "onUpdate:modelValue": de[1] || (de[1] = (ce) => d.value = ce),
              class: "form-select"
            }, [
              (n(!0), i(W, null, ye(st(hc), (ce) => (n(), i("option", {
                key: ce,
                value: ce
              }, m(ce), 9, gx))), 128))
            ], 512), [
              [Ro, d.value]
            ])
          ]),
          s("div", hx, [
            de[9] || (de[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Rt(s("select", {
              "onUpdate:modelValue": de[2] || (de[2] = (ce) => v.value = ce),
              class: "form-select",
              disabled: E.value
            }, [
              (n(!0), i(W, null, ye(I.value, (ce) => (n(), i("option", {
                key: ce.tag_name,
                value: ce.tag_name
              }, m(ce.name), 9, wx))), 128))
            ], 8, yx), [
              [Ro, v.value]
            ])
          ]),
          s("div", _x, [
            de[10] || (de[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Rt(s("select", {
              "onUpdate:modelValue": de[3] || (de[3] = (ce) => f.value = ce),
              class: "form-select"
            }, [
              (n(!0), i(W, null, ye(st(Rl), (ce) => (n(), i("option", {
                key: ce,
                value: ce
              }, m(ce) + m(ce === "auto" ? " (detect GPU)" : ""), 9, kx))), 128))
            ], 512), [
              [Ro, f.value]
            ])
          ]),
          s("div", bx, [
            s("label", $x, [
              Rt(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": de[4] || (de[4] = (ce) => p.value = ce)
              }, null, 512), [
                [na, p.value]
              ]),
              de[11] || (de[11] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        M.value ? (n(), i(W, { key: 1 }, [
          N.value.error ? (n(), L(Ue, {
            key: 0,
            variant: "secondary",
            onClick: H
          }, {
            default: h(() => [...de[16] || (de[16] = [
              x(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", Tx, " Creating environment... "))
        ], 64)) : (n(), i(W, { key: 0 }, [
          $(Ue, {
            variant: "primary",
            disabled: !C.value,
            onClick: me
          }, {
            default: h(() => [...de[14] || (de[14] = [
              x(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          $(Ue, {
            variant: "secondary",
            onClick: de[5] || (de[5] = (ce) => o("close"))
          }, {
            default: h(() => [...de[15] || (de[15] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), Rx = /* @__PURE__ */ Ie(Px, [["__scopeId", "data-v-3faa3d9b"]]), Lx = /* @__PURE__ */ xe({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = ct(), c = k([]), u = k(!1), d = k(null), v = k(""), f = k(!1), p = k(!1), w = k(null), g = k(null), _ = R(() => [...c.value].sort((F, V) => F.is_current !== V.is_current ? F.is_current ? -1 : 1 : F.name.localeCompare(V.name))), b = R(() => {
      if (!v.value.trim()) return _.value;
      const F = v.value.toLowerCase();
      return _.value.filter(
        (V) => {
          var D;
          return V.name.toLowerCase().includes(F) || ((D = V.current_branch) == null ? void 0 : D.toLowerCase().includes(F));
        }
      );
    });
    function S(F, V) {
      p.value = !1, a("created", F, V);
    }
    function C() {
      p.value = !0;
    }
    async function I(F) {
      w.value = F, g.value = null;
      const V = await r(F.name);
      V && (g.value = V);
    }
    function E(F) {
      w.value = null, g.value = null, a("delete", F);
    }
    function M(F) {
      w.value = null, g.value = null, a("export", F);
    }
    async function N() {
      u.value = !0, d.value = null;
      try {
        c.value = await l();
      } catch (F) {
        d.value = F instanceof Error ? F.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return lt(N), t({
      loadEnvironments: N,
      openCreateModal: C
    }), (F, V) => (n(), i(W, null, [
      $(Ft, null, {
        header: h(() => [
          $(Vt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: V[1] || (V[1] = (D) => f.value = !0)
          }, {
            actions: h(() => [
              e.canCreate ? (n(), L(Re, {
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
              $(Re, {
                variant: "secondary",
                size: "sm",
                onClick: V[0] || (V[0] = (D) => F.$emit("import"))
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
          $(go, {
            modelValue: v.value,
            "onUpdate:modelValue": V[2] || (V[2] = (D) => v.value = D),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (n(), L(Ps, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (n(), L(Rs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (n(), i(W, { key: 2 }, [
            b.value.length ? (n(), L(Tt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: b.value.length
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(b.value, (D) => (n(), L(fC, {
                  key: D.name,
                  "environment-name": D.name,
                  "is-current": D.is_current,
                  "current-branch": D.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    !D.is_current && e.canSwitch ? (n(), L(Re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => F.$emit("switch", D.name)
                    }, {
                      default: h(() => [...V[9] || (V[9] = [
                        x(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : y("", !0),
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => I(D)
                    }, {
                      default: h(() => [...V[10] || (V[10] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => F.$emit("export", D.name)
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
            b.value.length ? y("", !0) : (n(), L(_s, {
              key: 1,
              icon: "🌍",
              message: v.value ? `No environments match '${v.value}'` : "No environments found. Create one to get started!"
            }, ss({ _: 2 }, [
              v.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  e.canCreate ? (n(), L(Re, {
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
      $(fs, {
        show: f.value,
        title: "About Environments",
        onClose: V[4] || (V[4] = (D) => f.value = !1)
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
          $(Re, {
            variant: "secondary",
            onClick: V[3] || (V[3] = (D) => f.value = !1)
          }, {
            default: h(() => [...V[14] || (V[14] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), L(XC, {
        key: 0,
        environment: w.value,
        detail: g.value,
        "can-delete": e.canDelete && c.value.length > 1,
        onClose: V[5] || (V[5] = (D) => {
          w.value = null, g.value = null;
        }),
        onDelete: E,
        onExport: M
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      p.value ? (n(), L(Rx, {
        key: 1,
        onClose: V[6] || (V[6] = (D) => p.value = !1),
        onCreated: S
      })) : y("", !0)
    ], 64));
  }
}), Dx = /* @__PURE__ */ Ie(Lx, [["__scopeId", "data-v-01163d8c"]]), Nx = { class: "file-path" }, Ux = { class: "file-path-text" }, Ox = ["title"], Ax = /* @__PURE__ */ xe({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = k(!1);
    async function a() {
      try {
        await navigator.clipboard.writeText(t.path), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, r) => (n(), i("div", Nx, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", Ux, m(e.path), 1),
      e.copyable ? (n(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: a
      }, m(o.value ? "✓" : "📋"), 9, Ox)) : y("", !0)
    ]));
  }
}), zx = /* @__PURE__ */ Ie(Ax, [["__scopeId", "data-v-f0982173"]]), Fx = { class: "base-textarea-wrapper" }, Vx = ["value", "rows", "placeholder", "disabled", "maxlength"], Bx = {
  key: 0,
  class: "base-textarea-count"
}, Wx = /* @__PURE__ */ xe({
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
    const o = e, a = t;
    function l(r) {
      r.shiftKey || r.ctrlKey || r.metaKey || o.submitOnEnter && (r.preventDefault(), a("submit"));
    }
    return (r, c) => (n(), i("div", Fx, [
      s("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = gs(vt((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = gs(vt((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          gs(l, ["enter"])
        ]
      }, null, 40, Vx),
      e.showCharCount && e.maxLength ? (n(), i("div", Bx, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), Lo = /* @__PURE__ */ Ie(Wx, [["__scopeId", "data-v-c6d16c93"]]), Gx = ["checked", "disabled"], jx = { class: "base-checkbox-box" }, Hx = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, qx = {
  key: 0,
  class: "base-checkbox-label"
}, Kx = /* @__PURE__ */ xe({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (n(), i("label", {
      class: Be(["base-checkbox", { disabled: e.disabled }])
    }, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (a) => t.$emit("update:modelValue", a.target.checked))
      }, null, 40, Gx),
      s("span", jx, [
        e.modelValue ? (n(), i("svg", Hx, [...o[1] || (o[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      t.$slots.default ? (n(), i("span", qx, [
        at(t.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), la = /* @__PURE__ */ Ie(Kx, [["__scopeId", "data-v-bf17c831"]]), Jx = { class: "export-blocked" }, Qx = { class: "error-header" }, Yx = { class: "error-summary" }, Xx = { class: "error-title" }, Zx = { class: "error-description" }, e3 = { class: "issues-list" }, t3 = { class: "issue-message" }, s3 = {
  key: 0,
  class: "issue-details"
}, o3 = ["onClick"], n3 = { class: "issue-fix" }, a3 = {
  key: 0,
  class: "commit-section"
}, l3 = {
  key: 0,
  class: "issues-warning"
}, i3 = {
  key: 1,
  class: "commit-error"
}, r3 = /* @__PURE__ */ xe({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, a = t, { commit: l } = ct(), r = k(""), c = k(!1), u = k(!1), d = k(""), v = ho({}), f = R(() => o.mode === "publish" ? "Publish" : "Export"), p = R(
      () => o.issues.some((C) => C.type === "uncommitted_workflows" || C.type === "uncommitted_git_changes")
    ), w = R(
      () => o.issues.some((C) => C.type === "unresolved_issues")
    ), g = R(
      () => w.value && !u.value
    ), _ = R(
      () => p.value && r.value.trim() !== "" && !c.value && !g.value
    );
    function b(C) {
      const I = o.issues[C];
      return v[C] || I.details.length <= 3 ? I.details : I.details.slice(0, 3);
    }
    async function S() {
      var C;
      if (_.value) {
        c.value = !0, d.value = "";
        try {
          const I = await l(r.value.trim(), u.value);
          if (I.status === "success")
            a("committed");
          else if (I.status === "blocked") {
            const E = ((C = I.issues) == null ? void 0 : C.map((M) => `${M.name}: ${M.issue}`).join("; ")) || "Unknown issues";
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
    return (C, I) => (n(), L($t, {
      title: p.value ? `Commit & ${f.value}` : `Cannot ${f.value}`,
      size: "md",
      onClose: I[4] || (I[4] = (E) => C.$emit("close"))
    }, {
      body: h(() => [
        s("div", Jx, [
          s("div", Qx, [
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
            s("div", Yx, [
              s("h3", Xx, m(f.value) + " blocked", 1),
              s("p", Zx, m(p.value ? `Commit your changes to proceed with ${f.value.toLowerCase()}.` : `The following issues must be resolved before ${f.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", e3, [
            (n(!0), i(W, null, ye(e.issues, (E, M) => (n(), i("div", {
              key: M,
              class: "issue-item"
            }, [
              s("div", t3, m(E.message), 1),
              E.details.length ? (n(), i("div", s3, [
                (n(!0), i(W, null, ye(b(M), (N, F) => (n(), i("div", {
                  key: F,
                  class: "issue-detail"
                }, m(N), 1))), 128)),
                E.details.length > 3 && !v[M] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (N) => v[M] = !0
                }, " +" + m(E.details.length - 3) + " more ", 9, o3)) : y("", !0)
              ])) : y("", !0),
              s("div", n3, [
                E.type === "uncommitted_workflows" ? (n(), i(W, { key: 0 }, [
                  x(" Commit your workflow changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : E.type === "uncommitted_git_changes" ? (n(), i(W, { key: 1 }, [
                  x(" Commit your changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : E.type === "unresolved_issues" ? (n(), i(W, { key: 2 }, [
                  x(" Resolve all workflow issues before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          p.value ? (n(), i("div", a3, [
            w.value ? (n(), i("div", l3, [
              I[7] || (I[7] = s("div", { class: "warning-header" }, [
                s("span", { class: "warning-icon-badge" }, "!"),
                s("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              $(la, {
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
            $(Lo, {
              modelValue: r.value,
              "onUpdate:modelValue": I[1] || (I[1] = (E) => r.value = E),
              placeholder: "Describe your changes...",
              disabled: c.value || g.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: S,
              onCtrlEnter: S
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (n(), i("div", i3, m(d.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        p.value ? (n(), i(W, { key: 0 }, [
          $(Ue, {
            variant: "secondary",
            onClick: I[2] || (I[2] = (E) => C.$emit("close"))
          }, {
            default: h(() => [...I[8] || (I[8] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          $(Ue, {
            variant: u.value ? "danger" : "primary",
            disabled: !_.value,
            loading: c.value,
            onClick: S
          }, {
            default: h(() => [
              x(m(c.value ? "Committing..." : u.value ? `Force Commit & ${f.value}` : `Commit & ${f.value}`), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (n(), L(Ue, {
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
}), c3 = /* @__PURE__ */ Ie(r3, [["__scopeId", "data-v-a8990107"]]), u3 = { class: "repro-warning" }, d3 = { class: "repro-warning-content" }, m3 = {
  key: 0,
  class: "warning-group"
}, f3 = { class: "warning-list" }, v3 = { key: 0 }, p3 = {
  key: 1,
  class: "warning-group"
}, g3 = { class: "warning-list" }, h3 = { key: 0 }, y3 = /* @__PURE__ */ xe({
  __name: "ReproducibilityWarningBanner",
  props: {
    warnings: {},
    message: { default: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly. Review the missing details, or continue anyway." },
    maxItemsPerGroup: { default: 2 }
  },
  emits: ["review"],
  setup(e) {
    const t = e, o = R(() => t.warnings.models_without_sources || []), a = R(() => t.warnings.nodes_without_provenance || []), l = R(() => o.value.length), r = R(() => a.value.length), c = R(() => l.value + r.value), u = R(
      () => o.value.slice(0, t.maxItemsPerGroup)
    ), d = R(
      () => a.value.slice(0, t.maxItemsPerGroup)
    ), v = R(
      () => Math.max(0, l.value - u.value.length)
    ), f = R(
      () => Math.max(0, r.value - d.value.length)
    );
    return (p, w) => (n(), i("div", u3, [
      w[3] || (w[3] = s("span", { class: "repro-warning-icon" }, "!", -1)),
      s("div", d3, [
        s("strong", null, m(c.value) + " reproducibility warning" + m(c.value !== 1 ? "s" : ""), 1),
        s("p", null, m(e.message), 1),
        l.value ? (n(), i("div", m3, [
          w[1] || (w[1] = s("div", { class: "warning-group-label" }, " Models ", -1)),
          s("ul", f3, [
            (n(!0), i(W, null, ye(u.value, (g) => (n(), i("li", {
              key: g.hash || g.filename
            }, m(g.filename), 1))), 128)),
            v.value ? (n(), i("li", v3, "+" + m(v.value) + " more model" + m(v.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        r.value ? (n(), i("div", p3, [
          w[2] || (w[2] = s("div", { class: "warning-group-label" }, " Nodes ", -1)),
          s("ul", g3, [
            (n(!0), i(W, null, ye(d.value, (g) => (n(), i("li", {
              key: g.name
            }, m(g.name) + " (" + m(g.criticality) + ") ", 1))), 128)),
            f.value ? (n(), i("li", h3, "+" + m(f.value) + " more node" + m(f.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        s("button", {
          class: "review-issues-btn",
          onClick: w[0] || (w[0] = (g) => p.$emit("review"))
        }, " Review Issues ")
      ])
    ]));
  }
}), al = /* @__PURE__ */ Ie(y3, [["__scopeId", "data-v-11be310d"]]), w3 = { class: "export-card" }, _3 = { class: "export-path-row" }, k3 = {
  key: 1,
  class: "export-warning"
}, b3 = { class: "export-footer-actions" }, $3 = /* @__PURE__ */ xe({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  emits: ["close"],
  setup(e) {
    const t = e, { validateExport: o, exportEnvWithForce: a, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = ct(), c = k(""), u = k(!1), d = k(!1), v = k(!1), f = k(null), p = k(!1), w = k(null), g = k(!1), _ = k(!1), b = R(() => {
      var B;
      return ((B = t.environmentName) == null ? void 0 : B.trim()) || null;
    }), S = R(() => b.value ? `EXPORT ENVIRONMENT: ${b.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), C = R(() => b.value ? `Environment '${b.value}' has been exported` : "Your environment has been exported"), I = R(() => u.value ? "Validating..." : d.value ? "Exporting..." : V.value ? "Export Anyway" : "Export Environment"), E = R(() => {
      var B;
      return ((B = w.value) == null ? void 0 : B.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), M = R(
      () => E.value.models_without_sources.length
    ), N = R(
      () => {
        var B;
        return ((B = E.value.nodes_without_provenance) == null ? void 0 : B.length) || 0;
      }
    ), F = R(
      () => M.value + N.value
    ), V = R(
      () => {
        var B;
        return !!((B = w.value) != null && B.can_export) && F.value > 0;
      }
    );
    async function D() {
      u.value = !0;
      try {
        const B = b.value ? await l(b.value) : await o();
        return w.value = B, B;
      } catch (B) {
        return f.value = {
          status: "error",
          message: B instanceof Error ? B.message : "Validation failed"
        }, null;
      } finally {
        u.value = !1;
      }
    }
    async function q() {
      f.value = null;
      const B = await D();
      if (B) {
        if (!B.can_export) {
          g.value = !0;
          return;
        }
        await Y();
      }
    }
    async function ue() {
      g.value = !1;
      const B = await D();
      if (B) {
        if (!B.can_export) {
          g.value = !0;
          return;
        }
        await Y();
      }
    }
    async function ie() {
      await D();
    }
    async function Y() {
      d.value = !0;
      try {
        const B = b.value ? await r(b.value, c.value || void 0) : await a(c.value || void 0);
        f.value = B;
      } catch (B) {
        f.value = {
          status: "error",
          message: B instanceof Error ? B.message : "Export failed"
        };
      } finally {
        d.value = !1;
      }
    }
    async function me() {
      var B;
      if ((B = f.value) != null && B.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (H) {
          console.error("Failed to copy path:", H);
        }
    }
    async function oe() {
      var B;
      if ((B = f.value) != null && B.path) {
        v.value = !0;
        try {
          const H = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(f.value.path)}`);
          if (!H.ok)
            throw new Error(`Download failed: ${H.statusText}`);
          const we = await H.blob(), se = URL.createObjectURL(we), de = f.value.path.split("/").pop() || "environment-export.tar.gz", ce = document.createElement("a");
          ce.href = se, ce.download = de, document.body.appendChild(ce), ce.click(), document.body.removeChild(ce), URL.revokeObjectURL(se);
        } catch (H) {
          console.error("Failed to download:", H), alert(`Download failed: ${H instanceof Error ? H.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
      }
    }
    return lt(() => {
      D();
    }), (B, H) => (n(), i(W, null, [
      $(Ft, null, ss({
        content: h(() => [
          V.value ? (n(), L(al, {
            key: 0,
            class: "export-readiness-warning",
            warnings: E.value,
            message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
            onReview: H[1] || (H[1] = (we) => _.value = !0)
          }, null, 8, ["warnings"])) : y("", !0),
          $(Tt, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              s("div", w3, [
                H[8] || (H[8] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", _3, [
                  $(xo, {
                    modelValue: c.value,
                    "onUpdate:modelValue": H[2] || (H[2] = (we) => c.value = we),
                    placeholder: "/mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            _: 1
          }),
          f.value ? (n(), L(Tt, {
            key: 1,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              $(Gt, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, ss({
                icon: h(() => [
                  x(m(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  x(m(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: h(() => [
                  x(m(f.value.status === "success" ? C.value : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    $(kt, { label: "Saved to:" }, {
                      default: h(() => [
                        $(zx, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (n(), L(kt, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (n(), i("div", k3, [...H[9] || (H[9] = [
                      s("span", { class: "warning-icon" }, "!", -1),
                      s("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    $(Re, {
                      variant: "primary",
                      size: "sm",
                      loading: v.value,
                      onClick: oe
                    }, {
                      default: h(() => [...H[10] || (H[10] = [
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
                    $(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: me
                    }, {
                      default: h(() => [...H[11] || (H[11] = [
                        x(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    $(Re, {
                      variant: "ghost",
                      size: "sm",
                      onClick: H[3] || (H[3] = (we) => f.value = null)
                    }, {
                      default: h(() => [...H[12] || (H[12] = [
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
          s("div", b3, [
            e.embedded ? (n(), L(Re, {
              key: 0,
              variant: "secondary",
              size: "md",
              disabled: d.value,
              onClick: H[4] || (H[4] = (we) => B.$emit("close"))
            }, {
              default: h(() => [...H[13] || (H[13] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : y("", !0),
            $(Re, {
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
            $(Vt, {
              title: S.value,
              "show-info": !0,
              onInfoClick: H[0] || (H[0] = (we) => p.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      $(fs, {
        show: p.value,
        title: "What Gets Exported",
        onClose: H[5] || (H[5] = (we) => p.value = !1)
      }, {
        content: h(() => [...H[14] || (H[14] = [
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
      g.value && w.value ? (n(), L(c3, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: H[6] || (H[6] = (we) => g.value = !1),
        onCommitted: ue
      }, null, 8, ["issues"])) : y("", !0),
      _.value && w.value ? (n(), L(El, {
        key: 1,
        warnings: w.value.warnings,
        onClose: H[7] || (H[7] = (we) => _.value = !1),
        onRevalidate: ie
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), C3 = /* @__PURE__ */ Ie($3, [["__scopeId", "data-v-6cf814a2"]]), x3 = { class: "file-input-wrapper" }, S3 = ["accept", "multiple", "disabled"], I3 = /* @__PURE__ */ xe({
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
    const a = o, l = k(null);
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
    }), (u, d) => (n(), i("div", x3, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, S3),
      $(Re, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: h(() => [
          at(u.$slots, "default", {}, () => [
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
}), E3 = /* @__PURE__ */ Ie(I3, [["__scopeId", "data-v-cd192091"]]), T3 = {
  key: 0,
  class: "drop-zone-empty"
}, M3 = { class: "drop-zone-text" }, P3 = { class: "drop-zone-primary" }, R3 = { class: "drop-zone-secondary" }, L3 = { class: "drop-zone-actions" }, D3 = {
  key: 1,
  class: "drop-zone-file"
}, N3 = { class: "file-info" }, U3 = { class: "file-details" }, O3 = { class: "file-name" }, A3 = { class: "file-size" }, z3 = /* @__PURE__ */ xe({
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
    const o = t, a = k(!1), l = k(null), r = k(0), c = R(() => l.value !== null), u = R(() => {
      var S;
      return ((S = l.value) == null ? void 0 : S.name) || "";
    }), d = R(() => {
      if (!l.value) return "";
      const S = l.value.size;
      return S < 1024 ? `${S} B` : S < 1024 * 1024 ? `${(S / 1024).toFixed(1)} KB` : S < 1024 * 1024 * 1024 ? `${(S / (1024 * 1024)).toFixed(1)} MB` : `${(S / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(S) {
      var C;
      S.stopPropagation(), r.value++, (C = S.dataTransfer) != null && C.types.includes("Files") && (a.value = !0);
    }
    function f(S) {
      S.stopPropagation(), S.dataTransfer && (S.dataTransfer.dropEffect = "copy");
    }
    function p(S) {
      S.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function w(S) {
      var I;
      S.stopPropagation(), r.value = 0, a.value = !1;
      const C = (I = S.dataTransfer) == null ? void 0 : I.files;
      C && C.length > 0 && _(C[0]);
    }
    function g(S) {
      S.length > 0 && _(S[0]);
    }
    function _(S) {
      l.value = S, o("fileSelected", S);
    }
    function b() {
      l.value = null, o("clear");
    }
    return (S, C) => (n(), i("div", {
      class: Be(["file-drop-zone", { "drop-active": a.value, "has-file": c.value }]),
      onDragenter: vt(v, ["prevent"]),
      onDragover: vt(f, ["prevent"]),
      onDragleave: vt(p, ["prevent"]),
      onDrop: vt(w, ["prevent"])
    }, [
      c.value ? (n(), i("div", D3, [
        s("div", N3, [
          C[1] || (C[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", U3, [
            s("div", O3, m(u.value), 1),
            s("div", A3, m(d.value), 1)
          ])
        ]),
        $(Re, {
          variant: "ghost",
          size: "xs",
          onClick: b,
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
      ])) : (n(), i("div", T3, [
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
        s("div", M3, [
          s("p", P3, m(e.primaryText), 1),
          s("p", R3, m(e.secondaryText), 1)
        ]),
        s("div", L3, [
          $(E3, {
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
}), F3 = /* @__PURE__ */ Ie(z3, [["__scopeId", "data-v-0f79cb86"]]), V3 = { class: "commit-hash" }, B3 = /* @__PURE__ */ xe({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, o = R(() => t.hash.slice(0, t.length));
    return (a, l) => (n(), i("span", V3, m(o.value), 1));
  }
}), kc = /* @__PURE__ */ Ie(B3, [["__scopeId", "data-v-7c333cc6"]]), W3 = { class: "import-preview" }, G3 = { class: "preview-header" }, j3 = {
  key: 0,
  class: "source-env"
}, H3 = { class: "preview-content" }, q3 = { class: "preview-section" }, K3 = { class: "section-header" }, J3 = { class: "section-info" }, Q3 = { class: "section-count" }, Y3 = {
  key: 0,
  class: "item-list"
}, X3 = { class: "item-name" }, Z3 = {
  key: 0,
  class: "item-more"
}, eS = { class: "preview-section" }, tS = { class: "section-header" }, sS = { class: "section-info" }, oS = { class: "section-count" }, nS = {
  key: 0,
  class: "item-list"
}, aS = { class: "item-details" }, lS = { class: "item-name" }, iS = { class: "item-meta" }, rS = {
  key: 0,
  class: "item-more"
}, cS = { class: "preview-section" }, uS = { class: "section-header" }, dS = { class: "section-info" }, mS = { class: "section-count" }, fS = {
  key: 0,
  class: "item-list"
}, vS = { class: "item-name" }, pS = {
  key: 0,
  class: "item-more"
}, gS = {
  key: 0,
  class: "preview-section"
}, hS = { class: "git-info" }, yS = /* @__PURE__ */ xe({
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
    const t = e, o = R(() => t.workflows.length), a = R(() => t.models.length), l = R(() => t.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (n(), i("div", W3, [
      s("div", G3, [
        $(cs, null, {
          default: h(() => [...u[0] || (u[0] = [
            x("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", j3, [
          u[1] || (u[1] = x(" From: ", -1)),
          $(nl, null, {
            default: h(() => [
              x(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      s("div", H3, [
        s("div", q3, [
          s("div", K3, [
            u[3] || (u[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", J3, [
              u[2] || (u[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", Q3, m(o.value) + " file" + m(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", Y3, [
            (n(!0), i(W, null, ye(e.workflows.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", X3, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (n(), i("div", Z3, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", eS, [
          s("div", tS, [
            u[6] || (u[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", sS, [
              u[5] || (u[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", oS, m(a.value) + " file" + m(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (n(), i("div", nS, [
            (n(!0), i(W, null, ye(e.models.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", aS, [
                s("span", lS, m(d.filename), 1),
                s("span", iS, m(r(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (n(), i("div", rS, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", cS, [
          s("div", uS, [
            u[9] || (u[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", dS, [
              u[8] || (u[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", mS, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (n(), i("div", fS, [
            (n(!0), i(W, null, ye(e.nodes.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", vS, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (n(), i("div", pS, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (n(), i("div", gS, [
          u[11] || (u[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", hS, [
            e.gitBranch ? (n(), L(kt, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                $(nl, null, {
                  default: h(() => [
                    x(m(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (n(), L(kt, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                $(kc, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), wS = /* @__PURE__ */ Ie(yS, [["__scopeId", "data-v-182fe113"]]), _S = { class: "import-config" }, kS = { class: "config-container" }, bS = { class: "config-field" }, $S = { class: "input-wrapper" }, CS = ["value"], xS = {
  key: 0,
  class: "validating-indicator"
}, SS = {
  key: 1,
  class: "valid-indicator"
}, IS = {
  key: 0,
  class: "field-error"
}, ES = { class: "config-field" }, TS = { class: "strategy-options" }, MS = ["value", "checked", "onChange"], PS = { class: "strategy-content" }, RS = { class: "strategy-label" }, LS = { class: "strategy-description" }, DS = { class: "config-field switch-field" }, NS = { class: "switch-label" }, US = ["checked"], OS = { class: "advanced-section" }, AS = { class: "advanced-content" }, zS = { class: "config-field" }, FS = ["value"], VS = ["value"], BS = /* @__PURE__ */ xe({
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
    const o = e, a = t, l = k(!1), r = k(!1);
    gt(() => o.nameError, (f) => {
      l.value = !1, r.value = !f && o.name.length > 0;
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
    function d(f) {
      const p = f.target.value;
      a("update:name", p), r.value = !1, u && clearTimeout(u), p.length > 0 ? (l.value = !0, u = setTimeout(() => {
        a("validate-name", p);
      }, 400)) : l.value = !1;
    }
    function v() {
      o.name.length > 0 && a("validate-name", o.name);
    }
    return (f, p) => (n(), i("div", _S, [
      $(cs, null, {
        default: h(() => [...p[2] || (p[2] = [
          x("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", kS, [
        s("div", bS, [
          $(Hn, { required: "" }, {
            default: h(() => [...p[3] || (p[3] = [
              x("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", $S, [
            s("input", {
              type: "text",
              class: Be(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, CS),
            l.value ? (n(), i("span", xS, "...")) : r.value ? (n(), i("span", SS, "✓")) : y("", !0)
          ]),
          e.nameError ? (n(), i("div", IS, m(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", ES, [
          $(Hn, null, {
            default: h(() => [...p[5] || (p[5] = [
              x("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", TS, [
            (n(), i(W, null, ye(c, (w) => s("label", {
              key: w.value,
              class: Be(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              s("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (g) => a("update:modelStrategy", w.value)
              }, null, 40, MS),
              s("div", PS, [
                s("span", RS, m(w.label), 1),
                s("span", LS, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", DS, [
          s("label", NS, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => a("update:switchAfterImport", w.target.checked))
            }, null, 40, US),
            p[6] || (p[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", OS, [
          p[8] || (p[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", AS, [
            s("div", zS, [
              $(Hn, null, {
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
                (n(!0), i(W, null, ye(st(Rl), (w) => (n(), i("option", {
                  key: w,
                  value: w
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, VS))), 128))
              ], 40, FS)
            ])
          ])
        ])
      ])
    ]));
  }
}), WS = /* @__PURE__ */ Ie(BS, [["__scopeId", "data-v-89ea06a1"]]), GS = { class: "import-flow" }, jS = {
  key: 0,
  class: "import-empty"
}, HS = { class: "git-import-section" }, qS = { class: "git-url-input-row" }, KS = ["disabled"], JS = {
  key: 0,
  class: "git-error"
}, QS = {
  key: 1,
  class: "import-configure"
}, YS = { class: "selected-file-bar" }, XS = {
  key: 0,
  class: "file-bar-content"
}, ZS = { class: "file-bar-info" }, e5 = { class: "file-bar-name" }, t5 = { class: "file-bar-size" }, s5 = {
  key: 1,
  class: "file-bar-content"
}, o5 = { class: "file-bar-info" }, n5 = { class: "file-bar-name" }, a5 = {
  key: 0,
  class: "preview-loading"
}, l5 = { class: "import-actions" }, i5 = {
  key: 2,
  class: "import-progress"
}, r5 = { class: "creating-intro" }, c5 = {
  key: 0,
  class: "progress-warning"
}, u5 = {
  key: 1,
  class: "import-error"
}, d5 = { class: "error-message" }, m5 = {
  key: 3,
  class: "import-complete"
}, f5 = { class: "complete-message" }, v5 = { class: "complete-title" }, p5 = { class: "complete-details" }, g5 = { class: "complete-actions" }, h5 = /* @__PURE__ */ xe({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: o }) {
    var Me, Se, ze, Ne;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: v, getImportProgress: f } = ct();
    let p = null;
    const w = k(null), g = k(a.resumeImport ?? !1), _ = k(!1), b = k(!1), S = k(""), C = k(!1), I = k(null), E = k(""), M = k(null), N = k(!1), F = k(null), V = k(null), D = k({
      name: ((Me = a.initialProgress) == null ? void 0 : Me.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), q = k(null), ue = k({
      message: ((Se = a.initialProgress) == null ? void 0 : Se.message) ?? "Preparing import...",
      phase: ((ze = a.initialProgress) == null ? void 0 : ze.phase) ?? "",
      progress: ((Ne = a.initialProgress) == null ? void 0 : Ne.progress) ?? 0,
      error: null
    }), ie = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Y = R(() => {
      if (!V.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const be = V.value;
      return {
        sourceEnvironment: be.comfyui_version ? `ComfyUI ${be.comfyui_version}` : "Unknown",
        workflows: be.workflows.map((Ae) => Ae.name),
        models: be.models.map((Ae) => ({
          filename: Ae.filename,
          size: 0,
          type: Ae.relative_path.split("/")[0] || "model"
        })),
        nodes: be.nodes.map((Ae) => Ae.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), me = R(() => !C.value && !I.value && V.value && D.value.name.length > 0 && !q.value && (w.value || M.value));
    async function oe(be) {
      w.value = be, C.value = !0, I.value = null, V.value = null;
      try {
        const Ae = await r(be);
        V.value = Ae;
      } catch (Ae) {
        I.value = Ae instanceof Error ? Ae.message : "Failed to analyze file", console.error("Preview error:", Ae);
      } finally {
        C.value = !1;
      }
    }
    function B() {
      w.value = null, M.value = null, E.value = "", F.value = null, _.value = !1, b.value = !1, S.value = "", V.value = null, I.value = null, D.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, q.value = null, l("source-cleared");
    }
    function H() {
      ee(), B(), g.value = !1, C.value = !1, N.value = !1, ue.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function we() {
      if (E.value.trim()) {
        N.value = !0, F.value = null;
        try {
          const be = await c(E.value.trim());
          M.value = E.value.trim(), V.value = be;
        } catch (be) {
          F.value = be instanceof Error ? be.message : "Failed to analyze repository";
        } finally {
          N.value = !1;
        }
      }
    }
    function se(be) {
      try {
        const Ae = new URL(be);
        return Ae.host + Ae.pathname.replace(/\.git$/, "");
      } catch {
        return be;
      }
    }
    async function de(be) {
      if (!be) {
        q.value = "Environment name is required";
        return;
      }
      try {
        const Ae = await u(be);
        q.value = Ae.valid ? null : Ae.error || "Invalid name";
      } catch {
        q.value = "Failed to validate name";
      }
    }
    async function ce() {
      if (D.value.name && !(!w.value && !M.value)) {
        g.value = !0, _.value = !1, ue.value = { message: `Creating environment '${D.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let be;
          if (w.value)
            be = await d(
              w.value,
              D.value.name,
              D.value.modelStrategy,
              D.value.torchBackend
            );
          else if (M.value)
            be = await v(
              M.value,
              D.value.name,
              D.value.modelStrategy,
              D.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          be.status === "started" ? K() : (b.value = !1, S.value = be.message, g.value = !1, _.value = !0);
        } catch (be) {
          b.value = !1, S.value = be instanceof Error ? be.message : "Unknown error occurred during import", g.value = !1, _.value = !0;
        }
      }
    }
    async function K() {
      if (p) return;
      const be = async () => {
        try {
          const ge = await f();
          return ue.value = {
            message: ge.message,
            phase: ge.phase || "",
            progress: ge.progress ?? (ge.state === "importing" ? 50 : 0),
            error: ge.error || null
          }, ge.state === "complete" ? (ee(), b.value = !0, S.value = `Environment '${ge.environment_name}' created successfully`, g.value = !1, _.value = !0, ge.environment_name && l("import-complete", ge.environment_name, D.value.switchAfterImport), !1) : ge.state === "error" ? (ee(), b.value = !1, S.value = ge.error || ge.message, g.value = !1, _.value = !0, !1) : !0;
        } catch (ge) {
          return console.error("Failed to poll import progress:", ge), !0;
        }
      };
      await be() && (p = setInterval(async () => {
        await be() || ee();
      }, 2e3));
    }
    function ee() {
      p && (clearInterval(p), p = null);
    }
    function te(be) {
      return be < 1024 ? `${be} B` : be < 1024 * 1024 ? `${(be / 1024).toFixed(1)} KB` : be < 1024 * 1024 * 1024 ? `${(be / (1024 * 1024)).toFixed(1)} MB` : `${(be / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return lt(async () => {
      try {
        const be = await f();
        console.log("[ComfyGit ImportFlow] Import progress check:", be.state, be), be.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", be.environment_name), g.value = !0, D.value.name = be.environment_name || D.value.name || "", ue.value = {
          progress: be.progress ?? 0,
          message: be.message || "Importing...",
          phase: be.phase || "",
          error: null
        }, K());
      } catch (be) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", be);
      }
    }), t({
      handleReset: H,
      isImporting: g,
      canImport: me
    }), (be, Ae) => {
      var ge;
      return n(), i("div", GS, [
        !w.value && !M.value && !g.value ? (n(), i("div", jS, [
          $(F3, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: oe
          }),
          Ae[7] || (Ae[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", HS, [
            Ae[5] || (Ae[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", qS, [
              Rt(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Ae[0] || (Ae[0] = (ve) => E.value = ve),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: gs(we, ["enter"]),
                disabled: N.value
              }, null, 40, KS), [
                [fn, E.value]
              ]),
              $(Re, {
                variant: "primary",
                size: "sm",
                disabled: !E.value.trim() || N.value,
                onClick: we
              }, {
                default: h(() => [
                  x(m(N.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            F.value ? (n(), i("div", JS, m(F.value), 1)) : y("", !0),
            Ae[6] || (Ae[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || M.value) && !g.value && !_.value ? (n(), i("div", QS, [
          s("div", YS, [
            w.value ? (n(), i("div", XS, [
              Ae[8] || (Ae[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", ZS, [
                s("div", e5, m(w.value.name), 1),
                s("div", t5, m(te(w.value.size)), 1)
              ])
            ])) : M.value ? (n(), i("div", s5, [
              Ae[10] || (Ae[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", o5, [
                s("div", n5, m(se(M.value)), 1),
                Ae[9] || (Ae[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            $(Re, {
              variant: "ghost",
              size: "sm",
              onClick: B
            }, {
              default: h(() => [...Ae[11] || (Ae[11] = [
                x(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          C.value ? (n(), i("div", a5, [...Ae[12] || (Ae[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : I.value ? (n(), L(ns, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [I.value]
          }, null, 8, ["details"])) : V.value ? (n(), L(wS, {
            key: 2,
            "source-environment": Y.value.sourceEnvironment,
            workflows: Y.value.workflows,
            models: Y.value.models,
            nodes: Y.value.nodes,
            "git-branch": Y.value.gitBranch,
            "git-commit": Y.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          V.value ? (n(), L(WS, {
            key: 3,
            name: D.value.name,
            "onUpdate:name": Ae[1] || (Ae[1] = (ve) => D.value.name = ve),
            "model-strategy": D.value.modelStrategy,
            "onUpdate:modelStrategy": Ae[2] || (Ae[2] = (ve) => D.value.modelStrategy = ve),
            "torch-backend": D.value.torchBackend,
            "onUpdate:torchBackend": Ae[3] || (Ae[3] = (ve) => D.value.torchBackend = ve),
            "switch-after-import": D.value.switchAfterImport,
            "onUpdate:switchAfterImport": Ae[4] || (Ae[4] = (ve) => D.value.switchAfterImport = ve),
            "name-error": q.value,
            onValidateName: de
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          D.value.modelStrategy === "skip" && ((ge = V.value) != null && ge.models_needing_download) ? (n(), L(ns, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${V.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          s("div", l5, [
            $(Re, {
              variant: "secondary",
              size: "md",
              onClick: B
            }, {
              default: h(() => [...Ae[13] || (Ae[13] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            $(Re, {
              variant: "primary",
              size: "md",
              disabled: !me.value,
              onClick: ce
            }, {
              default: h(() => [...Ae[14] || (Ae[14] = [
                x(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : g.value ? (n(), i("div", i5, [
          s("p", r5, [
            Ae[15] || (Ae[15] = x(" Importing environment ", -1)),
            s("strong", null, m(D.value.name), 1),
            Ae[16] || (Ae[16] = x("... ", -1))
          ]),
          $(aa, {
            progress: ue.value.progress,
            message: ue.value.message,
            "current-phase": ue.value.phase,
            variant: ue.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ie
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          ue.value.error ? y("", !0) : (n(), i("p", c5, " This may take several minutes. Please wait... ")),
          ue.value.error ? (n(), i("div", u5, [
            s("p", d5, m(ue.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (n(), i("div", m5, [
          s("div", {
            class: Be(["complete-icon", b.value ? "success" : "error"])
          }, m(b.value ? "✓" : "✕"), 3),
          s("div", f5, [
            s("div", v5, m(b.value ? "Import Successful" : "Import Failed"), 1),
            s("div", p5, m(S.value), 1)
          ]),
          s("div", g5, [
            $(Re, {
              variant: "primary",
              size: "md",
              onClick: H
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
}), bc = /* @__PURE__ */ Ie(h5, [["__scopeId", "data-v-72cbc04e"]]), y5 = /* @__PURE__ */ xe({
  __name: "ImportSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["import-complete-switch"],
  setup(e, { emit: t }) {
    const o = t, a = k(!1);
    function l(r, c) {
      c && o("import-complete-switch", r);
    }
    return (r, c) => (n(), i(W, null, [
      $(Ft, null, ss({
        content: h(() => [
          $(bc, { onImportComplete: l })
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            $(Vt, {
              title: "IMPORT ENVIRONMENT",
              "show-info": !0,
              onInfoClick: c[0] || (c[0] = (u) => a.value = !0)
            })
          ]),
          key: "0"
        }
      ]), 1024),
      $(fs, {
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
}), w5 = /* @__PURE__ */ Ie(y5, [["__scopeId", "data-v-41b1f298"]]), _5 = { class: "base-tabs" }, k5 = ["disabled", "onClick"], b5 = {
  key: 0,
  class: "base-tabs__badge"
}, $5 = /* @__PURE__ */ xe({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, a = t;
    function l(r) {
      var c;
      (c = o.tabs.find((u) => u.id === r)) != null && c.disabled || a("update:modelValue", r);
    }
    return (r, c) => (n(), i("div", _5, [
      (n(!0), i(W, null, ye(e.tabs, (u) => (n(), i("button", {
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
        u.badge ? (n(), i("span", b5, m(u.badge), 1)) : y("", !0)
      ], 10, k5))), 128))
    ]));
  }
}), Ll = /* @__PURE__ */ Ie($5, [["__scopeId", "data-v-ad5e6cad"]]), C5 = { class: "commit-list" }, x5 = /* @__PURE__ */ xe({
  __name: "CommitList",
  setup(e) {
    return (t, o) => (n(), i("div", C5, [
      at(t.$slots, "default", {}, void 0)
    ]));
  }
}), $c = /* @__PURE__ */ Ie(x5, [["__scopeId", "data-v-8c5ee761"]]), S5 = { class: "commit-message" }, I5 = { class: "commit-date" }, E5 = /* @__PURE__ */ xe({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = t;
    function l() {
      o.clickable && a("click");
    }
    return (r, c) => (n(), i("div", {
      class: Be(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      $(kc, { hash: e.hash }, null, 8, ["hash"]),
      s("span", S5, m(e.message), 1),
      s("span", I5, m(e.relativeDate), 1),
      r.$slots.actions ? (n(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = vt(() => {
        }, ["stop"]))
      }, [
        at(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Cc = /* @__PURE__ */ Ie(E5, [["__scopeId", "data-v-dd7c621b"]]), T5 = /* @__PURE__ */ xe({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const t = e, o = R(() => `HISTORY (${t.currentRef || "detached"})`);
    return (a, l) => (n(), L(Ft, null, ss({
      content: h(() => [
        e.commits.length === 0 ? (n(), L(_s, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), L($c, { key: 1 }, {
          default: h(() => [
            (n(!0), i(W, null, ye(e.commits, (r) => (n(), L(Cc, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => a.$emit("select", r)
            }, {
              actions: h(() => [
                $(Re, {
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
          $(Vt, { title: o.value }, null, 8, ["title"])
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), M5 = /* @__PURE__ */ Ie(T5, [["__scopeId", "data-v-fa4bf3a1"]]), P5 = { class: "branch-create-form" }, R5 = { class: "form-actions" }, L5 = /* @__PURE__ */ xe({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: t }) {
    const o = t, a = k(""), l = R(() => {
      const u = a.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function r() {
      l.value && (o("create", a.value.trim()), a.value = "");
    }
    function c() {
      a.value = "", o("cancel");
    }
    return (u, d) => (n(), i("div", P5, [
      $(xo, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => a.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      s("div", R5, [
        $(Re, {
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
        $(Re, {
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
}), D5 = /* @__PURE__ */ Ie(L5, [["__scopeId", "data-v-7c500394"]]), N5 = { class: "branch-list-item__indicator" }, U5 = { class: "branch-list-item__name" }, O5 = {
  key: 0,
  class: "branch-list-item__actions"
}, A5 = {
  key: 0,
  class: "branch-list-item__current-label"
}, z5 = /* @__PURE__ */ xe({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (n(), i("div", {
      class: Be(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && t.$emit("click"))
    }, [
      s("span", N5, m(e.isCurrent ? "●" : "○"), 1),
      s("span", U5, m(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (n(), i("div", O5, [
        at(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", A5, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), F5 = /* @__PURE__ */ Ie(z5, [["__scopeId", "data-v-c6581a24"]]), V5 = { class: "header-info" }, B5 = { class: "branch-name" }, W5 = {
  key: 0,
  class: "current-badge"
}, G5 = { class: "branch-meta" }, j5 = { key: 0 }, H5 = {
  key: 0,
  class: "meta-note"
}, q5 = {
  key: 0,
  class: "loading"
}, K5 = {
  key: 1,
  class: "empty-state"
}, J5 = /* @__PURE__ */ xe({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const t = e, { getBranchHistory: o } = ct(), a = k([]), l = k(!1), r = k(!0);
    return lt(async () => {
      try {
        const c = await o(t.branchName, 50);
        a.value = c.commits, l.value = c.has_more;
      } finally {
        r.value = !1;
      }
    }), (c, u) => (n(), L($t, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (d) => c.$emit("close"))
    }, {
      header: h(() => [
        s("div", V5, [
          u[4] || (u[4] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", B5, m(e.branchName), 1),
          e.isCurrent ? (n(), i("span", W5, "CURRENT")) : y("", !0)
        ]),
        $(Ue, {
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
        s("div", G5, [
          r.value ? (n(), i("span", j5, "Loading...")) : (n(), i(W, { key: 1 }, [
            s("span", null, m(a.value.length) + " commits", 1),
            l.value ? (n(), i("span", H5, "(showing first " + m(a.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (n(), i("div", q5, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", K5, " No commits found on this branch ")) : (n(), L($c, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (n(!0), i(W, null, ye(a.value, (d) => (n(), L(Cc, {
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
        e.isCurrent ? y("", !0) : (n(), L(Re, {
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
        e.isCurrent ? y("", !0) : (n(), L(Ue, {
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
}), Q5 = /* @__PURE__ */ Ie(J5, [["__scopeId", "data-v-2e5437cc"]]), Y5 = {
  key: 0,
  class: "branch-toolbar"
}, X5 = {
  key: 3,
  class: "branch-list"
}, Z5 = /* @__PURE__ */ xe({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {},
    embedded: { type: Boolean }
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: t }) {
    const o = t, a = k(!1), l = k(null);
    function r(f) {
      o("create", f), c();
    }
    function c() {
      a.value = !1;
    }
    function u(f) {
      l.value = f;
    }
    function d(f) {
      l.value = null, o("delete", f);
    }
    function v(f) {
      l.value = null, o("switch", f);
    }
    return (f, p) => (n(), L(Ft, null, ss({
      content: h(() => [
        e.embedded && !a.value ? (n(), i("div", Y5, [
          $(Re, {
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
        a.value ? (n(), L(D5, {
          key: 1,
          onCreate: r,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (n(), L(_s, {
          key: 2,
          icon: "○",
          message: "No branches found"
        })) : (n(), i("div", X5, [
          (n(!0), i(W, null, ye(e.branches, (w) => (n(), L(F5, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (g) => u(w)
          }, {
            actions: h(() => [
              w.is_current ? y("", !0) : (n(), L(Re, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: vt((g) => o("switch", w.name), ["stop"])
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
        l.value ? (n(), L(Q5, {
          key: 4,
          "branch-name": l.value.name,
          "is-current": l.value.is_current,
          onClose: p[2] || (p[2] = (w) => l.value = null),
          onDelete: d,
          onSwitch: v
        }, null, 8, ["branch-name", "is-current"])) : y("", !0)
      ]),
      _: 2
    }, [
      e.embedded ? void 0 : {
        name: "header",
        fn: h(() => [
          $(Vt, { title: "BRANCHES" }, {
            actions: h(() => [
              a.value ? y("", !0) : (n(), L(Re, {
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
}), e8 = /* @__PURE__ */ Ie(Z5, [["__scopeId", "data-v-98858eb2"]]);
function xc(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const t8 = { class: "remote-url-display" }, s8 = ["title"], o8 = ["title"], n8 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, a8 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, l8 = /* @__PURE__ */ xe({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const t = e, o = k(!1), a = R(() => {
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
    return (r, c) => (n(), i("div", t8, [
      s("span", {
        class: "url-text",
        title: e.url
      }, m(a.value), 9, s8),
      s("button", {
        class: Be(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (n(), i("svg", a8, [...c[1] || (c[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (n(), i("svg", n8, [...c[0] || (c[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, o8)
    ]));
  }
}), i8 = /* @__PURE__ */ Ie(l8, [["__scopeId", "data-v-7768a58d"]]), r8 = { class: "remote-title" }, c8 = {
  key: 0,
  class: "default-badge"
}, u8 = {
  key: 1,
  class: "sync-badge"
}, d8 = {
  key: 0,
  class: "ahead"
}, m8 = {
  key: 1,
  class: "behind"
}, f8 = {
  key: 1,
  class: "synced"
}, v8 = ["href"], p8 = {
  key: 1,
  class: "remote-url-text"
}, g8 = /* @__PURE__ */ xe({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const t = e, o = R(() => t.fetchingRemote === t.remote.name), a = R(() => t.remote.is_default), l = R(() => t.syncStatus && t.syncStatus.behind > 0), r = R(() => t.syncStatus && t.syncStatus.ahead > 0), c = R(() => t.remote.push_url !== t.remote.fetch_url), u = R(() => {
      const v = t.remote.fetch_url, f = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return f ? `https://${f[1]}/${f[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = R(() => t.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, f) => (n(), L(Gt, {
      status: a.value ? "synced" : void 0
    }, ss({
      icon: h(() => [
        x(m(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        s("div", r8, [
          s("span", null, m(e.remote.name), 1),
          a.value ? (n(), i("span", c8, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", u8, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(W, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", d8, "↑" + m(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", m8, "↓" + m(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", f8, "✓ synced"))
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
          onClick: f[0] || (f[0] = vt(() => {
          }, ["stop"]))
        }, m(d.value), 9, v8)) : (n(), i("span", p8, m(d.value), 1))
      ]),
      actions: h(() => [
        $(Re, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: f[1] || (f[1] = (p) => v.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...f[6] || (f[6] = [
            x(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        $(Re, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: f[2] || (f[2] = (p) => v.$emit("pull", e.remote.name))
        }, {
          default: h(() => [
            x(" Pull" + m(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        $(Re, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: f[3] || (f[3] = (p) => v.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            x(" Push" + m(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        $(Re, {
          variant: "secondary",
          size: "xs",
          onClick: f[4] || (f[4] = (p) => v.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...f[7] || (f[7] = [
            x(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? y("", !0) : (n(), L(Re, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: f[5] || (f[5] = (p) => v.$emit("remove", e.remote.name))
        }, {
          default: h(() => [...f[8] || (f[8] = [
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
          e.remote.push_url !== e.remote.fetch_url ? (n(), L(kt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              $(i8, {
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
}), h8 = /* @__PURE__ */ Ie(g8, [["__scopeId", "data-v-8310f3a8"]]), y8 = ["for"], w8 = {
  key: 0,
  class: "base-form-field-required"
}, _8 = { class: "base-form-field-input" }, k8 = {
  key: 1,
  class: "base-form-field-error"
}, b8 = {
  key: 2,
  class: "base-form-field-hint"
}, $8 = /* @__PURE__ */ xe({
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
    const t = e, o = R(() => t.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (a, l) => (n(), i("div", {
      class: Be(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        x(m(e.label) + " ", 1),
        e.required ? (n(), i("span", w8, "*")) : y("", !0)
      ], 8, y8)) : y("", !0),
      s("div", _8, [
        at(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", k8, m(e.error), 1)) : e.hint ? (n(), i("span", b8, m(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), Ot = /* @__PURE__ */ Ie($8, [["__scopeId", "data-v-9a1cf296"]]), C8 = { class: "remote-form" }, x8 = { class: "form-header" }, S8 = { class: "form-body" }, I8 = {
  key: 0,
  class: "form-error"
}, E8 = { class: "form-actions" }, T8 = /* @__PURE__ */ xe({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = k({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), r = k(!1), c = k(null);
    gt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = R(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!u.value || r.value)) {
        c.value = null, r.value = !0;
        try {
          a("submit", l.value);
        } catch (v) {
          c.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          r.value = !1;
        }
      }
    }
    return (v, f) => (n(), i("div", C8, [
      s("div", x8, [
        $(cs, null, {
          default: h(() => [
            x(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", S8, [
        $(Ot, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            $(bt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": f[0] || (f[0] = (p) => l.value.name = p),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        $(Ot, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            $(bt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": f[1] || (f[1] = (p) => l.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        $(Ot, { label: "Push URL (optional)" }, {
          default: h(() => [
            $(bt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": f[2] || (f[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (n(), i("div", I8, m(c.value), 1)) : y("", !0)
      ]),
      s("div", E8, [
        $(Re, {
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
        $(Re, {
          variant: "ghost",
          size: "md",
          onClick: f[3] || (f[3] = (p) => v.$emit("cancel"))
        }, {
          default: h(() => [...f[4] || (f[4] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), M8 = /* @__PURE__ */ Ie(T8, [["__scopeId", "data-v-56021b18"]]), P8 = { class: "conflict-summary-box" }, R8 = { class: "summary-header" }, L8 = { class: "summary-text" }, D8 = { key: 0 }, N8 = {
  key: 1,
  class: "all-resolved"
}, U8 = { class: "summary-progress" }, O8 = { class: "progress-bar" }, A8 = { class: "progress-text" }, z8 = /* @__PURE__ */ xe({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const t = e, o = R(
      () => t.conflictCount > 0 ? t.resolvedCount / t.conflictCount * 100 : 0
    );
    return (a, l) => (n(), i("div", P8, [
      s("div", R8, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", L8, [
          s("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (n(), i("p", D8, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (n(), i("p", N8, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      s("div", U8, [
        s("div", O8, [
          s("div", {
            class: "progress-fill",
            style: Nt({ width: o.value + "%" })
          }, null, 4)
        ]),
        s("span", A8, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), F8 = /* @__PURE__ */ Ie(z8, [["__scopeId", "data-v-4e9e6cc9"]]), V8 = { class: "modal-header" }, B8 = { class: "modal-title" }, W8 = { class: "modal-body" }, G8 = {
  key: 0,
  class: "error-box"
}, j8 = {
  key: 0,
  class: "error-hint"
}, H8 = {
  key: 1,
  class: "loading-state"
}, q8 = { class: "commit-summary" }, K8 = {
  key: 0,
  class: "commits-section"
}, J8 = { class: "commit-list" }, Q8 = { class: "commit-hash" }, Y8 = { class: "commit-message" }, X8 = { class: "commit-date" }, Z8 = {
  key: 1,
  class: "changes-section"
}, e4 = {
  key: 0,
  class: "change-group",
  open: ""
}, t4 = { class: "change-count" }, s4 = { class: "change-list" }, o4 = {
  key: 0,
  class: "conflict-badge"
}, n4 = {
  key: 1,
  class: "change-group"
}, a4 = { class: "change-count" }, l4 = { class: "change-list" }, i4 = {
  key: 2,
  class: "change-group"
}, r4 = { class: "change-count" }, c4 = { class: "change-list" }, u4 = {
  key: 3,
  class: "strategy-section"
}, d4 = { class: "radio-group" }, m4 = { class: "radio-option" }, f4 = { class: "radio-option" }, v4 = { class: "radio-option" }, p4 = {
  key: 4,
  class: "up-to-date"
}, g4 = { class: "modal-actions" }, Pi = "comfygit.pullModelStrategy", h4 = /* @__PURE__ */ xe({
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
    const o = e, a = t, l = k(localStorage.getItem(Pi) || "skip");
    gt(l, (S) => {
      localStorage.setItem(Pi, S);
    });
    const r = R(() => {
      var S;
      return ((S = o.error) == null ? void 0 : S.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = R(() => {
      if (!o.preview) return 0;
      const S = o.preview.changes.workflows;
      return S.added.length + S.modified.length + S.deleted.length;
    }), u = R(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = R(() => {
      var S;
      return c.value > 0 || u.value > 0 || (((S = o.preview) == null ? void 0 : S.changes.models.count) || 0) > 0;
    }), v = R(() => o.preview && xc(o.preview) ? o.preview : null), f = R(() => {
      var S;
      return ((S = v.value) == null ? void 0 : S.workflow_conflicts.length) ?? 0;
    }), p = R(() => {
      var S;
      return ((S = o.conflictResolutions) == null ? void 0 : S.size) ?? 0;
    }), w = R(
      () => f.value > 0 && p.value === f.value
    ), g = R(() => !(!o.preview || o.preview.has_uncommitted_changes || v.value && !w.value));
    function _(S) {
      if (!v.value) return !1;
      const C = S.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((I) => I.name === C);
    }
    function b(S) {
      const C = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: S, resolutions: C });
    }
    return (S, C) => {
      var I, E;
      return n(), L(Zt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (M) => S.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = vt(() => {
            }, ["stop"]))
          }, [
            s("div", V8, [
              s("h3", B8, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (M) => S.$emit("close"))
              }, "✕")
            ]),
            s("div", W8, [
              e.error ? (n(), i("div", G8, [
                C[13] || (C[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  C[12] || (C[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, m(e.error), 1),
                  r.value ? (n(), i("p", j8, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (n(), i("div", H8, [...C[14] || (C[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                x(" Loading preview... ", -1)
              ])])) : (I = e.preview) != null && I.has_uncommitted_changes ? (n(), i(W, { key: 2 }, [
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
              ], 64)) : e.preview ? (n(), i(W, { key: 3 }, [
                s("div", q8, [
                  C[17] || (C[17] = s("span", { class: "icon" }, "📥", -1)),
                  x(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", K8, [
                  C[18] || (C[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", J8, [
                    (n(!0), i(W, null, ye(e.preview.commits, (M) => (n(), i("div", {
                      key: M.hash,
                      class: "commit-item"
                    }, [
                      s("span", Q8, m(M.short_hash || M.hash.slice(0, 7)), 1),
                      s("span", Y8, m(M.message), 1),
                      s("span", X8, m(M.date_relative || M.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (n(), i("div", Z8, [
                  C[22] || (C[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (n(), i("details", e4, [
                    s("summary", null, [
                      C[19] || (C[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", t4, m(c.value) + " changes", 1)
                    ]),
                    s("div", s4, [
                      (n(!0), i(W, null, ye(e.preview.changes.workflows.added, (M) => (n(), i("div", {
                        key: "a-" + M,
                        class: "change-item add"
                      }, " + " + m(M), 1))), 128)),
                      (n(!0), i(W, null, ye(e.preview.changes.workflows.modified, (M) => (n(), i("div", {
                        key: "m-" + M,
                        class: "change-item modify"
                      }, [
                        x(" ~ " + m(M) + " ", 1),
                        _(M) ? (n(), i("span", o4, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (n(!0), i(W, null, ye(e.preview.changes.workflows.deleted, (M) => (n(), i("div", {
                        key: "d-" + M,
                        class: "change-item delete"
                      }, " - " + m(M), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (n(), i("details", n4, [
                    s("summary", null, [
                      C[20] || (C[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", a4, m(u.value) + " to install", 1)
                    ]),
                    s("div", l4, [
                      (n(!0), i(W, null, ye(e.preview.changes.nodes.to_install, (M) => (n(), i("div", {
                        key: M,
                        class: "change-item add"
                      }, " + " + m(M), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", i4, [
                    s("summary", null, [
                      C[21] || (C[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", r4, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", c4, [
                      (n(!0), i(W, null, ye(e.preview.changes.models.referenced, (M) => (n(), i("div", {
                        key: M,
                        class: "change-item"
                      }, m(M), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                v.value ? (n(), L(F8, {
                  key: 2,
                  "conflict-count": f.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", u4, [
                  C[27] || (C[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", d4, [
                    s("label", m4, [
                      Rt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (M) => l.value = M),
                        value: "all"
                      }, null, 512), [
                        [jn, l.value]
                      ]),
                      C[23] || (C[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", f4, [
                      Rt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (M) => l.value = M),
                        value: "required"
                      }, null, 512), [
                        [jn, l.value]
                      ]),
                      C[24] || (C[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", v4, [
                      Rt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (M) => l.value = M),
                        value: "skip"
                      }, null, 512), [
                        [jn, l.value]
                      ]),
                      C[25] || (C[25] = s("span", null, "Skip model downloads", -1)),
                      C[26] || (C[26] = s("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  C[28] || (C[28] = s("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (n(), i("div", p4, [
                  C[29] || (C[29] = s("span", { class: "icon" }, "✓", -1)),
                  x(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            s("div", g4, [
              $(Re, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (M) => S.$emit("close"))
              }, {
                default: h(() => [...C[30] || (C[30] = [
                  x(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (n(), i(W, { key: 0 }, [
                $(Re, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: C[5] || (C[5] = (M) => b(!1))
                }, {
                  default: h(() => [...C[31] || (C[31] = [
                    x(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                $(Re, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: C[6] || (C[6] = (M) => b(!0))
                }, {
                  default: h(() => [...C[32] || (C[32] = [
                    x(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (E = e.preview) != null && E.has_uncommitted_changes ? (n(), L(Re, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: C[7] || (C[7] = (M) => b(!0))
              }, {
                default: h(() => [...C[33] || (C[33] = [
                  x(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (n(), i(W, { key: 2 }, [
                v.value && !w.value ? (n(), L(Re, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (M) => a("openConflictResolution"))
                }, {
                  default: h(() => [
                    x(" Resolve Conflicts (" + m(p.value) + "/" + m(f.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (n(), L(Re, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !g.value,
                  onClick: C[9] || (C[9] = (M) => b(!1))
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
}), y4 = /* @__PURE__ */ Ie(h4, [["__scopeId", "data-v-1d633bba"]]), w4 = { class: "modal-header" }, _4 = { class: "modal-title" }, k4 = { class: "modal-body" }, b4 = {
  key: 0,
  class: "error-box"
}, $4 = {
  key: 1,
  class: "loading-state"
}, C4 = {
  key: 2,
  class: "warning-box"
}, x4 = {
  key: 1,
  class: "commits-section"
}, S4 = { class: "commit-list" }, I4 = { class: "commit-hash" }, E4 = { class: "commit-message" }, T4 = { class: "commit-date" }, M4 = { class: "force-option" }, P4 = { class: "checkbox-option" }, R4 = { class: "commit-summary" }, L4 = { key: 0 }, D4 = { key: 1 }, N4 = {
  key: 0,
  class: "info-box"
}, U4 = {
  key: 2,
  class: "commits-section"
}, O4 = { class: "commit-list" }, A4 = { class: "commit-hash" }, z4 = { class: "commit-message" }, F4 = { class: "commit-date" }, V4 = {
  key: 3,
  class: "up-to-date"
}, B4 = { class: "modal-actions" }, W4 = /* @__PURE__ */ xe({
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
    const o = e, a = t, l = k(!1), r = k(!1), c = R(() => {
      var w;
      return ((w = o.preview) == null ? void 0 : w.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), u = R(
      () => c.value.models_without_sources.length
    ), d = R(
      () => c.value.nodes_without_provenance.length
    ), v = R(
      () => u.value + d.value
    ), f = R(() => v.value > 0);
    function p(w) {
      a("push", { force: w });
    }
    return (w, g) => {
      var _, b, S, C;
      return n(), i(W, null, [
        (n(), L(Zt, { to: "body" }, [
          e.show ? (n(), i("div", {
            key: 0,
            class: "modal-overlay",
            onClick: g[9] || (g[9] = (I) => w.$emit("close"))
          }, [
            s("div", {
              class: "modal-content",
              onClick: g[8] || (g[8] = vt(() => {
              }, ["stop"]))
            }, [
              s("div", w4, [
                s("h3", _4, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
                s("button", {
                  class: "modal-close",
                  onClick: g[0] || (g[0] = (I) => w.$emit("close"))
                }, "✕")
              ]),
              s("div", k4, [
                e.error ? (n(), i("div", b4, [
                  g[13] || (g[13] = s("span", { class: "error-icon" }, "!", -1)),
                  s("div", null, [
                    g[12] || (g[12] = s("strong", null, "Push failed", -1)),
                    s("p", null, m(e.error), 1)
                  ])
                ])) : y("", !0),
                e.loading ? (n(), i("div", $4, [...g[14] || (g[14] = [
                  s("span", { class: "spinner" }, "⟳", -1),
                  x(" Loading preview... ", -1)
                ])])) : (_ = e.preview) != null && _.has_uncommitted_changes ? (n(), i("div", C4, [...g[15] || (g[15] = [
                  s("span", { class: "warning-icon" }, "!", -1),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "Commit your changes before pushing.")
                  ], -1)
                ])])) : (b = e.preview) != null && b.remote_has_new_commits ? (n(), i(W, { key: 3 }, [
                  g[19] || (g[19] = s("div", { class: "warning-box" }, [
                    s("span", { class: "warning-icon" }, "!"),
                    s("div", null, [
                      s("strong", null, "REMOTE HAS NEW COMMITS"),
                      s("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                    ])
                  ], -1)),
                  f.value ? (n(), L(al, {
                    key: 0,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[1] || (g[1] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (n(), i("div", x4, [
                    g[16] || (g[16] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", S4, [
                      (n(!0), i(W, null, ye(e.preview.commits, (I) => (n(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", I4, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", E4, m(I.message), 1),
                        s("span", T4, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : y("", !0),
                  s("div", M4, [
                    s("label", P4, [
                      Rt(s("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": g[2] || (g[2] = (I) => l.value = I)
                      }, null, 512), [
                        [na, l.value]
                      ]),
                      g[17] || (g[17] = s("span", null, "Force push (overwrite remote)", -1))
                    ]),
                    g[18] || (g[18] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                  ])
                ], 64)) : e.preview ? (n(), i(W, { key: 4 }, [
                  s("div", R4, [
                    g[20] || (g[20] = s("span", { class: "icon" }, "📤", -1)),
                    e.preview.is_first_push ? (n(), i("span", L4, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (n(), i("span", D4, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                  ]),
                  e.preview.is_first_push ? (n(), i("div", N4, [...g[21] || (g[21] = [
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
                  f.value ? (n(), L(al, {
                    key: 1,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[3] || (g[3] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (n(), i("div", U4, [
                    g[22] || (g[22] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", O4, [
                      (n(!0), i(W, null, ye(e.preview.commits, (I) => (n(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", A4, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", z4, m(I.message), 1),
                        s("span", F4, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : (n(), i("div", V4, [
                    g[23] || (g[23] = s("span", { class: "icon" }, "✓", -1)),
                    x(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                  ]))
                ], 64)) : y("", !0)
              ]),
              s("div", B4, [
                $(Re, {
                  variant: "secondary",
                  onClick: g[4] || (g[4] = (I) => w.$emit("close"))
                }, {
                  default: h(() => [...g[24] || (g[24] = [
                    x(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                (S = e.preview) != null && S.remote_has_new_commits ? (n(), i(W, { key: 0 }, [
                  $(Re, {
                    variant: "secondary",
                    onClick: g[5] || (g[5] = (I) => w.$emit("pull-first"))
                  }, {
                    default: h(() => [...g[25] || (g[25] = [
                      x(" Pull First ", -1)
                    ])]),
                    _: 1
                  }),
                  $(Re, {
                    variant: "destructive",
                    disabled: !l.value,
                    loading: e.pushing,
                    onClick: g[6] || (g[6] = (I) => p(!0))
                  }, {
                    default: h(() => [
                      x(m(f.value ? "Force Push Anyway" : "Force Push"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (n(), L(Re, {
                  key: 1,
                  variant: "primary",
                  loading: e.pushing,
                  onClick: g[7] || (g[7] = (I) => p(!1))
                }, {
                  default: h(() => [
                    x(m(f.value ? "Push Anyway" : "Push"), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        r.value && ((C = e.preview) != null && C.warnings) ? (n(), L(El, {
          key: 0,
          warnings: e.preview.warnings,
          onClose: g[10] || (g[10] = (I) => r.value = !1),
          onRevalidate: g[11] || (g[11] = (I) => w.$emit("revalidate"))
        }, null, 8, ["warnings"])) : y("", !0)
      ], 64);
    };
  }
}), G4 = /* @__PURE__ */ Ie(W4, [["__scopeId", "data-v-7748bf33"]]), j4 = { class: "resolution-choice-group" }, H4 = ["disabled"], q4 = ["disabled"], K4 = /* @__PURE__ */ xe({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (n(), i("div", j4, [
      s("button", {
        class: Be(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, H4),
      s("button", {
        class: Be(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, q4)
    ]));
  }
}), J4 = /* @__PURE__ */ Ie(K4, [["__scopeId", "data-v-985715ed"]]), Q4 = { class: "conflict-header" }, Y4 = { class: "conflict-info" }, X4 = { class: "workflow-name" }, Z4 = { class: "conflict-description" }, eI = {
  key: 0,
  class: "resolved-badge"
}, tI = { class: "resolved-text" }, sI = { class: "conflict-hashes" }, oI = { class: "hash-item" }, nI = { class: "hash-item" }, aI = { class: "conflict-actions" }, lI = /* @__PURE__ */ xe({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = k(o.resolution);
    gt(() => o.resolution, (d) => {
      l.value = d;
    }), gt(l, (d) => {
      d && a("resolve", d);
    });
    const r = R(() => l.value !== null), c = R(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = R(() => {
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
      var f, p;
      return n(), i("div", {
        class: Be(["conflict-item", { resolved: r.value }])
      }, [
        s("div", Q4, [
          v[2] || (v[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", Y4, [
            s("code", X4, m(e.conflict.name) + ".json", 1),
            s("div", Z4, m(c.value), 1)
          ]),
          r.value ? (n(), i("div", eI, [
            v[1] || (v[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", tI, m(u.value), 1)
          ])) : y("", !0)
        ]),
        s("div", sI, [
          s("span", oI, [
            v[3] || (v[3] = x("Your: ", -1)),
            s("code", null, m(((f = e.conflict.base_hash) == null ? void 0 : f.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", nI, [
            v[4] || (v[4] = x("Theirs: ", -1)),
            s("code", null, m(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", aI, [
          $(J4, {
            modelValue: l.value,
            "onUpdate:modelValue": v[0] || (v[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), iI = /* @__PURE__ */ Ie(lI, [["__scopeId", "data-v-506d3bbf"]]), rI = { class: "resolution-content" }, cI = {
  key: 0,
  class: "error-box"
}, uI = { class: "resolution-header" }, dI = { class: "header-stats" }, mI = { class: "stat" }, fI = { class: "stat-value" }, vI = { class: "stat resolved" }, pI = { class: "stat-value" }, gI = {
  key: 0,
  class: "stat pending"
}, hI = { class: "stat-value" }, yI = { class: "conflicts-list" }, wI = {
  key: 1,
  class: "all-resolved-message"
}, _I = /* @__PURE__ */ xe({
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
    const o = e, a = t, l = R(() => o.resolutions.size), r = R(() => o.workflowConflicts.length - l.value), c = R(() => l.value === o.workflowConflicts.length), u = R(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(w) {
      const g = o.resolutions.get(w);
      return (g == null ? void 0 : g.resolution) ?? null;
    }
    function v(w, g) {
      a("resolve", w, g);
    }
    function f() {
      a("close");
    }
    function p() {
      a("apply");
    }
    return (w, g) => (n(), L($t, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: f
    }, {
      body: h(() => [
        s("div", rI, [
          e.error ? (n(), i("div", cI, [
            g[1] || (g[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              g[0] || (g[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, m(e.error), 1)
            ])
          ])) : y("", !0),
          s("div", uI, [
            s("div", dI, [
              s("div", mI, [
                s("span", fI, m(e.workflowConflicts.length), 1),
                g[2] || (g[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", vI, [
                s("span", pI, m(l.value), 1),
                g[3] || (g[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (n(), i("div", gI, [
                s("span", hI, m(r.value), 1),
                g[4] || (g[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            g[5] || (g[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", yI, [
            (n(!0), i(W, null, ye(e.workflowConflicts, (_) => (n(), L(iI, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (b) => v(_.name, b)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (n(), i("div", wI, [
            g[6] || (g[6] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", null, 'All conflicts resolved! Click "' + m(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        $(Ue, {
          variant: "secondary",
          onClick: f
        }, {
          default: h(() => [...g[7] || (g[7] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g[8] || (g[8] = s("div", { class: "footer-spacer" }, null, -1)),
        $(Ue, {
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
}), kI = /* @__PURE__ */ Ie(_I, [["__scopeId", "data-v-c58d150d"]]), bI = { class: "node-conflict-item" }, $I = { class: "node-header" }, CI = { class: "node-name" }, xI = { class: "node-id" }, SI = { class: "version-comparison" }, II = { class: "version yours" }, EI = { class: "version theirs" }, TI = { class: "chosen-version" }, MI = { class: "chosen" }, PI = { class: "chosen-reason" }, RI = { class: "affected-workflows" }, LI = { class: "wf-source" }, DI = { class: "wf-version" }, NI = /* @__PURE__ */ xe({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, o) => (n(), i("div", bI, [
      s("div", $I, [
        s("code", CI, m(e.conflict.node_name), 1),
        s("span", xI, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      s("div", SI, [
        s("div", II, [
          o[0] || (o[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, m(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", EI, [
          o[1] || (o[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      s("div", TI, [
        o[3] || (o[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", MI, m(e.conflict.chosen_version), 1),
        s("span", PI, m(e.conflict.chosen_reason), 1)
      ]),
      s("details", RI, [
        s("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (n(!0), i(W, null, ye(e.conflict.affected_workflows, (a) => (n(), i("li", {
            key: a.name
          }, [
            s("code", null, m(a.name), 1),
            s("span", LI, "(" + m(a.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", DI, "needs v" + m(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), UI = /* @__PURE__ */ Ie(NI, [["__scopeId", "data-v-8b626725"]]), OI = { class: "validation-content" }, AI = {
  key: 0,
  class: "compatible-message"
}, zI = { class: "conflicts-list" }, FI = {
  key: 2,
  class: "warnings-section"
}, VI = /* @__PURE__ */ xe({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = R(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (n(), L($t, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => a("cancel"))
    }, {
      body: h(() => [
        s("div", OI, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (n(), i("div", AI, [
            c[5] || (c[5] = s("span", { class: "icon" }, "✓", -1)),
            s("div", null, [
              c[4] || (c[4] = s("strong", null, "All clear!", -1)),
              s("p", null, "Your workflow choices are compatible. Ready to " + m(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (n(), i(W, { key: 1 }, [
            c[6] || (c[6] = s("div", { class: "warning-header" }, [
              s("span", { class: "icon" }, "⚠"),
              s("div", null, [
                s("strong", null, "Node Version Differences"),
                s("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            s("div", zI, [
              (n(!0), i(W, null, ye(e.validation.node_conflicts, (u) => (n(), L(UI, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (n(), i("div", FI, [
            c[8] || (c[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (n(!0), i(W, null, ye(e.validation.warnings, (u, d) => (n(), i("li", { key: d }, m(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        $(Ue, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => a("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = s("div", { class: "footer-spacer" }, null, -1)),
        $(Ue, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => a("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            x(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        $(Ue, {
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
}), BI = /* @__PURE__ */ Ie(VI, [["__scopeId", "data-v-fefd26ed"]]), WI = {
  key: 0,
  class: "embedded-toolbar"
}, GI = { class: "embedded-toolbar-search" }, jI = /* @__PURE__ */ xe({
  __name: "RemotesSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["toast"],
  setup(e, { emit: t }) {
    const o = t, {
      getRemotes: a,
      addRemote: l,
      removeRemote: r,
      updateRemoteUrl: c,
      fetchRemote: u,
      getRemoteSyncStatus: d,
      getPullPreview: v,
      pullFromRemote: f,
      getPushPreview: p,
      pushToRemote: w,
      validateMerge: g
    } = ct(), _ = k([]), b = k({}), S = k(!1), C = k(null), I = k(""), E = k(!1), M = k(null), N = k(!1), F = k("add"), V = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), D = R(() => {
      if (!I.value.trim()) return _.value;
      const Ve = I.value.toLowerCase();
      return _.value.filter(
        (Oe) => Oe.name.toLowerCase().includes(Ve) || Oe.fetch_url.toLowerCase().includes(Ve) || Oe.push_url.toLowerCase().includes(Ve)
      );
    });
    async function q() {
      S.value = !0, C.value = null;
      try {
        const Ve = await a();
        _.value = Ve.remotes, await Promise.all(
          Ve.remotes.map(async (Oe) => {
            const Qe = await d(Oe.name);
            Qe && (b.value[Oe.name] = Qe);
          })
        );
      } catch (Ve) {
        C.value = Ve instanceof Error ? Ve.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function ue() {
      F.value = "add", V.value = { name: "", fetchUrl: "", pushUrl: "" }, N.value = !0;
    }
    function ie(Ve) {
      const Oe = _.value.find((Qe) => Qe.name === Ve);
      Oe && (F.value = "edit", V.value = {
        name: Oe.name,
        fetchUrl: Oe.fetch_url,
        pushUrl: Oe.push_url
      }, N.value = !0);
    }
    async function Y(Ve) {
      try {
        F.value === "add" ? await l(Ve.name, Ve.fetchUrl) : await c(Ve.name, Ve.fetchUrl, Ve.pushUrl || void 0), N.value = !1, await q();
      } catch (Oe) {
        C.value = Oe instanceof Error ? Oe.message : "Operation failed";
      }
    }
    function me() {
      N.value = !1, V.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function oe(Ve) {
      M.value = Ve;
      try {
        await u(Ve);
        const Oe = await d(Ve);
        Oe && (b.value[Ve] = Oe), o("toast", `✓ Fetched from ${Ve}`, "success");
      } catch (Oe) {
        o("toast", Oe instanceof Error ? Oe.message : "Fetch failed", "error");
      } finally {
        M.value = null;
      }
    }
    async function B(Ve) {
      if (confirm(`Remove remote "${Ve}"?`))
        try {
          await r(Ve), await q();
        } catch (Oe) {
          C.value = Oe instanceof Error ? Oe.message : "Failed to remove remote";
        }
    }
    function H() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const we = k("idle"), se = R(() => we.value === "pull_preview"), de = R(
      () => we.value === "resolving" || we.value === "validating"
    ), ce = R(
      () => we.value === "validation_review" || we.value === "executing"
    ), K = k(!1), ee = k(null), te = k(!1), Me = k(null), Se = k(null), ze = k(!1), Ne = k(null), be = k(null), Ae = k(/* @__PURE__ */ new Map()), ge = k(null), ve = k(null), T = R(() => Ne.value && xc(Ne.value) ? Ne.value : null);
    async function A(Ve) {
      Se.value = Ve, we.value = "pull_preview", ze.value = !0, Ne.value = null, be.value = null;
      try {
        Ne.value = await v(Ve);
      } catch (Oe) {
        be.value = Oe instanceof Error ? Oe.message : "Failed to load pull preview";
      } finally {
        ze.value = !1;
      }
    }
    function le() {
      we.value = "idle", Ne.value = null, be.value = null, Se.value = null;
    }
    async function Ce(Ve) {
      if (!Se.value) return;
      we.value = "executing", be.value = null;
      const Oe = Se.value;
      try {
        const Qe = await f(Oe, Ve);
        if (Qe.rolled_back) {
          be.value = `Pull failed and was rolled back: ${Qe.error || "Unknown error"}`, we.value = "pull_preview";
          return;
        }
        We(), we.value = "idle", o("toast", `✓ Pulled from ${Oe}`, "success"), await q();
      } catch (Qe) {
        be.value = Qe instanceof Error ? Qe.message : "Pull failed", we.value = "pull_preview";
      }
    }
    function Ee() {
      T.value && (we.value = "resolving", ve.value = null);
    }
    function ke(Ve, Oe) {
      Ae.value.set(Ve, { name: Ve, resolution: Oe });
    }
    function X() {
      we.value = "pull_preview";
    }
    async function G() {
      we.value = "validating", ve.value = null;
      try {
        const Ve = Array.from(Ae.value.values());
        ge.value = await g(Se.value, Ve), we.value = "validation_review";
      } catch (Ve) {
        ve.value = Ve instanceof Error ? Ve.message : "Validation failed", we.value = "resolving";
      }
    }
    async function fe() {
      we.value = "executing";
      const Ve = Se.value;
      try {
        const Oe = Array.from(Ae.value.values()), Qe = await f(Ve, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Oe
        });
        if (Qe.rolled_back) {
          be.value = `Pull failed and was rolled back: ${Qe.error || "Unknown error"}`, we.value = "pull_preview";
          return;
        }
        We(), we.value = "idle", o("toast", `✓ Pulled from ${Ve}`, "success"), await q();
      } catch (Oe) {
        be.value = Oe instanceof Error ? Oe.message : "Pull failed", we.value = "validation_review";
      }
    }
    function he() {
      we.value = "resolving";
    }
    function je() {
      We(), we.value = "idle";
    }
    function We() {
      Ae.value.clear(), ge.value = null, ve.value = null, be.value = null, Ne.value = null, Se.value = null;
    }
    async function _e(Ve) {
      Se.value = Ve, K.value = !0, ze.value = !0, ee.value = null, Me.value = null;
      try {
        ee.value = await p(Ve);
      } catch (Oe) {
        Me.value = Oe instanceof Error ? Oe.message : "Failed to load push preview";
      } finally {
        ze.value = !1;
      }
    }
    async function Z() {
      if (Se.value) {
        ze.value = !0, Me.value = null;
        try {
          ee.value = await p(Se.value);
        } catch (Ve) {
          Me.value = Ve instanceof Error ? Ve.message : "Failed to refresh push preview";
        } finally {
          ze.value = !1;
        }
      }
    }
    function Fe() {
      K.value = !1, ee.value = null, Me.value = null, Se.value = null;
    }
    async function De(Ve) {
      var Qe;
      if (!Se.value) return;
      te.value = !0;
      const Oe = Se.value;
      Me.value = null;
      try {
        await w(Oe, Ve), Fe(), o("toast", `✓ Pushed to ${Oe}`, "success"), await q();
      } catch (pt) {
        const Q = pt instanceof Error ? pt.message : "Push failed";
        Me.value = Q, pt instanceof ol && pt.status === 409 && ((Qe = pt.data) != null && Qe.needs_force) && ee.value ? ee.value = {
          ...ee.value,
          remote_has_new_commits: !0,
          needs_force: !0,
          can_push: !0,
          block_reason: null
        } : o("toast", Q, "error");
      } finally {
        te.value = !1;
      }
    }
    function He() {
      const Ve = Se.value;
      Fe(), Ve && A(Ve);
    }
    return lt(q), (Ve, Oe) => (n(), i(W, null, [
      $(Ft, null, ss({
        content: h(() => [
          S.value ? (n(), L(Ps, {
            key: 0,
            message: "Loading remotes..."
          })) : C.value ? (n(), L(Rs, {
            key: 1,
            message: C.value,
            retry: !0,
            onRetry: q
          }, null, 8, ["message"])) : (n(), i(W, { key: 2 }, [
            e.embedded && !N.value ? (n(), i("div", WI, [
              s("div", GI, [
                $(go, {
                  modelValue: I.value,
                  "onUpdate:modelValue": Oe[2] || (Oe[2] = (Qe) => I.value = Qe),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              $(Re, {
                variant: "primary",
                size: "sm",
                onClick: ue
              }, {
                default: h(() => [...Oe[5] || (Oe[5] = [
                  x(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : y("", !0),
            N.value ? (n(), L(M8, {
              key: 1,
              mode: F.value,
              "remote-name": V.value.name,
              "fetch-url": V.value.fetchUrl,
              "push-url": V.value.pushUrl,
              onSubmit: Y,
              onCancel: me
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            D.value.length && !N.value ? (n(), L(Tt, {
              key: 2,
              title: "REMOTES",
              count: D.value.length
            }, {
              default: h(() => [
                (n(!0), i(W, null, ye(D.value, (Qe) => (n(), L(h8, {
                  key: Qe.name,
                  remote: Qe,
                  "sync-status": b.value[Qe.name],
                  "fetching-remote": M.value,
                  onFetch: oe,
                  onEdit: ie,
                  onRemove: B,
                  onPull: A,
                  onPush: _e
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !D.value.length && !N.value ? (n(), L(_s, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                $(Re, {
                  variant: "primary",
                  onClick: ue
                }, {
                  default: h(() => [...Oe[6] || (Oe[6] = [
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
            $(Vt, {
              title: "GIT REMOTES",
              "show-info": !0,
              onInfoClick: Oe[0] || (Oe[0] = (Qe) => E.value = !0)
            }, {
              actions: h(() => [
                N.value ? y("", !0) : (n(), L(Re, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: ue
                }, {
                  default: h(() => [...Oe[4] || (Oe[4] = [
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
            N.value ? y("", !0) : (n(), L(go, {
              key: 0,
              modelValue: I.value,
              "onUpdate:modelValue": Oe[1] || (Oe[1] = (Qe) => I.value = Qe),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      $(fs, {
        show: E.value,
        title: "About Git Remotes",
        onClose: Oe[3] || (Oe[3] = (Qe) => E.value = !1)
      }, {
        content: h(() => [...Oe[7] || (Oe[7] = [
          s("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          s("p", null, [
            x(" The "),
            s("strong", null, '"origin"'),
            x(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          $(Re, {
            variant: "link",
            onClick: H
          }, {
            default: h(() => [...Oe[8] || (Oe[8] = [
              x(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      $(y4, {
        show: se.value,
        "remote-name": Se.value || "",
        preview: Ne.value,
        loading: ze.value,
        pulling: we.value === "executing",
        error: be.value,
        "conflict-resolutions": Ae.value,
        onClose: le,
        onPull: Ce,
        onOpenConflictResolution: Ee
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      $(G4, {
        show: K.value,
        "remote-name": Se.value || "",
        preview: ee.value,
        loading: ze.value,
        pushing: te.value,
        error: Me.value,
        onClose: Fe,
        onPush: De,
        onPullFirst: He,
        onRevalidate: Z
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      de.value && T.value ? (n(), L(kI, {
        key: 0,
        "workflow-conflicts": T.value.workflow_conflicts,
        resolutions: Ae.value,
        "operation-type": "pull",
        validating: we.value === "validating",
        error: ve.value,
        onClose: X,
        onResolve: ke,
        onApply: G
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      ce.value && ge.value ? (n(), L(BI, {
        key: 1,
        validation: ge.value,
        "operation-type": "pull",
        executing: we.value === "executing",
        onProceed: fe,
        onGoBack: he,
        onCancel: je
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), HI = /* @__PURE__ */ Ie(jI, [["__scopeId", "data-v-a6651a66"]]), qI = /* @__PURE__ */ xe({
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
    const o = e, a = t, l = [
      { id: "remotes", label: "Remotes" },
      { id: "history", label: "History" },
      { id: "branches", label: "Branches" }
    ], r = k(o.initialTab ?? "remotes");
    return gt(() => o.initialTab, (c) => {
      c && (r.value = c);
    }), (c, u) => (n(), L(Ft, null, {
      header: h(() => [
        $(Vt, { title: "VERSION CONTROL" })
      ]),
      search: h(() => [
        $(Ll, {
          modelValue: r.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: h(() => [
        r.value === "history" ? (n(), L(M5, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: u[1] || (u[1] = (d) => a("select", d)),
          onCheckout: u[2] || (u[2] = (d) => a("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (n(), L(e8, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: u[3] || (u[3] = (d) => a("switch", d)),
          onCreate: u[4] || (u[4] = (d) => a("create", d)),
          onDelete: u[5] || (u[5] = (d) => a("delete", d))
        }, null, 8, ["branches", "current"])) : (n(), L(HI, {
          key: 2,
          embedded: "",
          onToast: u[6] || (u[6] = (d, v) => a("toast", d, v))
        }))
      ]),
      _: 1
    }));
  }
}), KI = { class: "text-viewer-wrapper" }, JI = ["disabled", "title"], QI = { class: "text-content" }, YI = /* @__PURE__ */ xe({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const t = e, o = k(null), a = k("idle");
    async function l() {
      if (t.content)
        try {
          await Ml(t.content), a.value = "copied", setTimeout(() => {
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
    return (u, d) => (n(), i("div", KI, [
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
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy text"
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, JI),
        s("pre", QI, m(e.content), 1)
      ], 544)
    ]));
  }
}), XI = /* @__PURE__ */ Ie(YI, [["__scopeId", "data-v-85a537ba"]]), ZI = {
  key: 1,
  class: "manifest-viewer-shell"
}, e6 = { class: "manifest-path" }, t6 = /* @__PURE__ */ xe({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: t } = ct(), o = k(!1), a = k(null), l = k(!1), r = k({
      path: "",
      exists: !1,
      content: ""
    });
    async function c() {
      o.value = !0, a.value = null;
      try {
        r.value = await t();
      } catch (u) {
        a.value = u instanceof Error ? u.message : "Failed to load manifest";
      } finally {
        o.value = !1;
      }
    }
    return lt(c), (u, d) => (n(), i(W, null, [
      $(Ft, null, ss({
        content: h(() => [
          o.value ? (n(), L(Ps, {
            key: 0,
            message: "Loading manifest..."
          })) : a.value ? (n(), L(Rs, {
            key: 1,
            message: a.value,
            retry: !0,
            onRetry: c
          }, null, 8, ["message"])) : (n(), i(W, { key: 2 }, [
            !r.value.exists || !r.value.content ? (n(), L(_s, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (n(), i("div", ZI, [
              $(XI, {
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
            $(Vt, {
              title: "MANIFEST (PYPROJECT.TOML)",
              "show-info": !0,
              onInfoClick: d[0] || (d[0] = (v) => l.value = !0)
            }, {
              actions: h(() => [
                $(Re, {
                  variant: "secondary",
                  size: "sm",
                  onClick: c,
                  disabled: o.value
                }, {
                  default: h(() => [
                    x(m(o.value ? "Loading..." : "Refresh"), 1)
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
      $(fs, {
        show: l.value,
        title: "About Manifest View",
        onClose: d[2] || (d[2] = (v) => l.value = !1)
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
          s("div", e6, [
            s("code", null, m(r.value.path || "unknown"), 1)
          ]),
          d[6] || (d[6] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, null, -1))
        ]),
        actions: h(() => [
          $(Re, {
            variant: "primary",
            onClick: d[1] || (d[1] = (v) => l.value = !1)
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
}), s6 = /* @__PURE__ */ Ie(t6, [["__scopeId", "data-v-814a8fdd"]]), o6 = { class: "log-viewer-wrapper" }, n6 = ["disabled", "title"], a6 = /* @__PURE__ */ xe({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const t = e, o = k(null), a = k("idle"), l = R(() => t.logs.map((v) => ({
      text: t.rawFormat || !v.timestamp ? v.message : `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function r() {
      var f;
      await At();
      const v = (f = o.value) == null ? void 0 : f.closest(".panel-layout-content");
      v && (v.scrollTop = v.scrollHeight);
    }
    lt(r), gt(() => t.logs, r);
    async function c() {
      if (l.value.length === 0) return;
      const v = l.value.map((f) => f.text).join(`
`);
      try {
        await Ml(v), a.value = "copied", setTimeout(() => {
          a.value = "idle";
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy logs:", f);
      }
    }
    function u(v) {
      (v.ctrlKey || v.metaKey) && v.key === "c" && v.stopPropagation();
    }
    function d(v) {
      v.stopPropagation();
    }
    return (v, f) => (n(), i("div", o6, [
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
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy all logs"
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, n6),
        (n(!0), i(W, null, ye(l.value, (p, w) => (n(), i("div", {
          key: w,
          class: Be(`log-line log-level-${p.level.toLowerCase()}`)
        }, m(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), Sc = /* @__PURE__ */ Ie(a6, [["__scopeId", "data-v-5aaf1b88"]]), l6 = /* @__PURE__ */ xe({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: t, getStatus: o, getEnvironmentLogPath: a, openFile: l } = ct(), r = k([]), c = k(!1), u = k(null), d = k(!1), v = k("production"), f = k(null), p = k(!1);
    async function w() {
      c.value = !0, u.value = null;
      try {
        r.value = await t(void 0, 500);
        try {
          const b = await o();
          v.value = b.environment || "production";
        } catch {
        }
      } catch (b) {
        u.value = b instanceof Error ? b.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function g() {
      try {
        const b = await a();
        b.exists && (f.value = b.path);
      } catch {
      }
    }
    async function _() {
      if (f.value) {
        p.value = !0;
        try {
          await l(f.value);
        } catch (b) {
          console.error("Failed to open log file:", b);
        } finally {
          p.value = !1;
        }
      }
    }
    return lt(() => {
      w(), g();
    }), (b, S) => (n(), i(W, null, [
      $(Ft, null, ss({
        content: h(() => [
          c.value ? (n(), L(Ps, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (n(), L(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (n(), i(W, { key: 2 }, [
            r.value.length === 0 ? (n(), L(_s, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (n(), L(Sc, {
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
            $(Vt, {
              title: "DEBUG (ENVIRONMENT LOGS)",
              "show-info": !0,
              onInfoClick: S[0] || (S[0] = (C) => d.value = !0)
            }, {
              actions: h(() => [
                $(Re, {
                  variant: "secondary",
                  size: "sm",
                  onClick: _,
                  disabled: !f.value || p.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    x(m(p.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                $(Re, {
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
      $(fs, {
        show: d.value,
        title: "About Environment Logs",
        onClose: S[2] || (S[2] = (C) => d.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            S[3] || (S[3] = x(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            s("strong", null, m(v.value), 1),
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
          $(Re, {
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
}), Ri = /* @__PURE__ */ xe({
  __name: "WorkspaceDebugSection",
  props: {
    embedded: { type: Boolean },
    initialTab: {}
  },
  setup(e) {
    const {
      getWorkspaceLogs: t,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = ct(), c = e, u = k(c.initialTab ?? "workspace"), d = k([]), v = k(!1), f = k(null), p = k(!1), w = k(null), g = k(null), _ = k(!1), b = R(() => u.value === "workspace" ? w.value : g.value);
    async function S() {
      v.value = !0, f.value = null;
      try {
        u.value === "workspace" ? d.value = await t(void 0, 500) : d.value = await a(void 0, 500);
      } catch (E) {
        f.value = E instanceof Error ? E.message : `Failed to load ${u.value} logs`;
      } finally {
        v.value = !1;
      }
    }
    async function C() {
      try {
        const [E, M] = await Promise.all([
          o(),
          l()
        ]);
        E.exists && (w.value = E.path), M.exists && (g.value = M.path);
      } catch {
      }
    }
    async function I() {
      if (b.value) {
        _.value = !0;
        try {
          await r(b.value);
        } catch (E) {
          console.error("Failed to open log file:", E);
        } finally {
          _.value = !1;
        }
      }
    }
    return gt(u, () => {
      S();
    }), gt(() => c.initialTab, (E) => {
      E && (u.value = E);
    }), lt(() => {
      S(), C();
    }), (E, M) => (n(), i(W, null, [
      $(Ft, null, ss({
        content: h(() => [
          v.value ? (n(), L(Ps, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : f.value ? (n(), L(Rs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (n(), i(W, { key: 2 }, [
            d.value.length === 0 ? (n(), L(_s, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (n(), L(Sc, {
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
            $(Vt, {
              title: "DEBUG (LOGS)",
              "show-info": !0,
              onInfoClick: M[0] || (M[0] = (N) => p.value = !0)
            }, {
              actions: h(() => [
                $(Re, {
                  variant: "secondary",
                  size: "sm",
                  onClick: I,
                  disabled: !b.value || _.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    x(m(_.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                $(Re, {
                  variant: "secondary",
                  size: "sm",
                  onClick: S,
                  disabled: v.value
                }, {
                  default: h(() => [
                    x(m(v.value ? "Loading..." : "Refresh"), 1)
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
            $(Ll, {
              modelValue: u.value,
              "onUpdate:modelValue": M[1] || (M[1] = (N) => u.value = N),
              tabs: [
                { id: "workspace", label: "Workspace" },
                { id: "orchestrator", label: "Orchestrator" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          key: "1"
        }
      ]), 1024),
      $(fs, {
        show: p.value,
        title: "About Logs",
        onClose: M[3] || (M[3] = (N) => p.value = !1)
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
          $(Re, {
            variant: "primary",
            onClick: M[2] || (M[2] = (N) => p.value = !1)
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
}), i6 = /* @__PURE__ */ xe({
  __name: "DiagnosticsSection",
  props: {
    initialTab: {}
  },
  setup(e) {
    const t = e, o = [
      { id: "env", label: "Environment" },
      { id: "workspace", label: "Workspace" },
      { id: "orchestrator", label: "Orchestrator" }
    ], a = k(t.initialTab ?? "manifest"), l = k(
      t.initialTab && t.initialTab !== "manifest" ? t.initialTab : "env"
    ), r = k(!1), c = R(() => a.value === "manifest" ? "MANIFEST" : "LOGGING"), u = R(() => a.value === "manifest" ? "About Manifest" : "About Logging");
    return gt(() => t.initialTab, (d) => {
      d && (a.value = d, d !== "manifest" && (l.value = d));
    }), gt(l, (d) => {
      a.value !== "manifest" && (a.value = d);
    }), (d, v) => (n(), i(W, null, [
      $(Ft, null, ss({
        header: h(() => [
          $(Vt, {
            title: c.value,
            "show-info": !0,
            onInfoClick: v[0] || (v[0] = (f) => r.value = !0)
          }, null, 8, ["title"])
        ]),
        content: h(() => [
          a.value === "manifest" ? (n(), L(s6, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (n(), L(l6, {
            key: 1,
            embedded: ""
          })) : l.value === "workspace" ? (n(), L(Ri, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (n(), L(Ri, {
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
            $(Ll, {
              modelValue: l.value,
              "onUpdate:modelValue": v[1] || (v[1] = (f) => l.value = f),
              tabs: o
            }, null, 8, ["modelValue"])
          ]),
          key: "0"
        } : void 0
      ]), 1024),
      $(fs, {
        show: r.value,
        title: u.value,
        "max-width": "520px",
        onClose: v[3] || (v[3] = (f) => r.value = !1)
      }, {
        content: h(() => [
          a.value === "manifest" ? (n(), i(W, { key: 0 }, [
            v[4] || (v[4] = s("p", null, [
              s("strong", null, "Manifest"),
              x(" shows the live "),
              s("strong", null, "pyproject.toml"),
              x(" from the current environment's "),
              s("strong", null, ".cec"),
              x(" directory. ")
            ], -1)),
            v[5] || (v[5] = s("p", null, " Use it to inspect the environment state ComfyGit is tracking, including workflows, models, nodes, and workflow execution contracts. ", -1)),
            v[6] || (v[6] = s("p", null, " The manifest is read-only here. Change environment state through the manager actions or CLI, then commit the resulting manifest changes. ", -1))
          ], 64)) : (n(), i(W, { key: 1 }, [
            v[7] || (v[7] = s("p", null, [
              s("strong", null, "Logging"),
              x(" groups read-only logs for the current environment, workspace, and orchestrator. ")
            ], -1)),
            v[8] || (v[8] = s("p", null, [
              s("strong", null, "Environment"),
              x(" logs help debug workflow execution, model resolution, node installation, and other environment-local behavior. ")
            ], -1)),
            v[9] || (v[9] = s("p", null, [
              s("strong", null, "Workspace"),
              x(" logs show workspace-wide events that affect more than one environment. ")
            ], -1)),
            v[10] || (v[10] = s("p", null, [
              s("strong", null, "Orchestrator"),
              x(" logs show supervisor and handoff behavior for environment creation, switching, restarts, and process management. ")
            ], -1))
          ], 64))
        ]),
        actions: h(() => [
          $(Re, {
            variant: "primary",
            size: "sm",
            onClick: v[2] || (v[2] = (f) => r.value = !1)
          }, {
            default: h(() => [...v[11] || (v[11] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show", "title"])
    ], 64));
  }
}), r6 = { class: "header-info" }, c6 = { class: "commit-hash" }, u6 = {
  key: 0,
  class: "commit-refs"
}, d6 = { class: "commit-message" }, m6 = { class: "commit-date" }, f6 = {
  key: 0,
  class: "loading"
}, v6 = {
  key: 1,
  class: "changes-section"
}, p6 = { class: "stats-row" }, g6 = { class: "stat" }, h6 = { class: "stat insertions" }, y6 = { class: "stat deletions" }, w6 = {
  key: 0,
  class: "change-group"
}, _6 = {
  key: 1,
  class: "change-group"
}, k6 = {
  key: 0,
  class: "version"
}, b6 = {
  key: 2,
  class: "change-group"
}, $6 = { class: "change-item" }, C6 = /* @__PURE__ */ xe({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const t = e, { getCommitDetail: o } = ct(), a = k(null), l = k(!0), r = R(() => {
      if (!a.value) return !1;
      const u = a.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = R(() => {
      if (!a.value) return !1;
      const u = a.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return lt(async () => {
      try {
        a.value = await o(t.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (n(), L($t, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => u.$emit("close"))
    }, {
      header: h(() => {
        var v, f, p, w;
        return [
          s("div", r6, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", c6, m(((v = a.value) == null ? void 0 : v.short_hash) || e.commit.short_hash || ((f = e.commit.hash) == null ? void 0 : f.slice(0, 7))), 1),
            (w = (p = a.value) == null ? void 0 : p.refs) != null && w.length ? (n(), i("span", u6, [
              (n(!0), i(W, null, ye(a.value.refs, (g) => (n(), i("span", {
                key: g,
                class: "ref-badge"
              }, m(g), 1))), 128))
            ])) : y("", !0)
          ]),
          $(Ue, {
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
        var v, f;
        return [
          s("div", d6, m(((v = a.value) == null ? void 0 : v.message) || e.commit.message), 1),
          s("div", m6, m(((f = a.value) == null ? void 0 : f.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (n(), i("div", f6, "Loading details...")) : a.value ? (n(), i("div", v6, [
            s("div", p6, [
              s("span", g6, m(a.value.stats.files_changed) + " files", 1),
              s("span", h6, "+" + m(a.value.stats.insertions), 1),
              s("span", y6, "-" + m(a.value.stats.deletions), 1)
            ]),
            r.value ? (n(), i("div", w6, [
              $(fo, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  x("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(W, null, ye(a.value.changes.workflows.added, (p) => (n(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (n(!0), i(W, null, ye(a.value.changes.workflows.modified, (p) => (n(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (n(!0), i(W, null, ye(a.value.changes.workflows.deleted, (p) => (n(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (n(), i("div", _6, [
              $(fo, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  x("NODES", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(W, null, ye(a.value.changes.nodes.added, (p) => (n(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p.name), 1),
                p.version ? (n(), i("span", k6, "(" + m(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (n(!0), i(W, null, ye(a.value.changes.nodes.removed, (p) => (n(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", b6, [
              $(fo, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  x("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", $6, [
                d[14] || (d[14] = s("span", { class: "change-icon" }, "●", -1)),
                s("span", null, m(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        $(Ue, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (v) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            x(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        $(Ue, {
          variant: "primary",
          onClick: d[2] || (d[2] = (v) => u.$emit("checkout", e.commit))
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
}), x6 = /* @__PURE__ */ Ie(C6, [["__scopeId", "data-v-d256ff6d"]]), S6 = { class: "popover-header" }, I6 = { class: "popover-body" }, E6 = {
  key: 0,
  class: "changes-summary"
}, T6 = {
  key: 0,
  class: "change-item"
}, M6 = {
  key: 1,
  class: "change-item"
}, P6 = {
  key: 2,
  class: "change-item"
}, R6 = {
  key: 3,
  class: "change-item"
}, L6 = {
  key: 4,
  class: "change-item"
}, D6 = {
  key: 5,
  class: "change-item"
}, N6 = {
  key: 1,
  class: "no-changes"
}, U6 = {
  key: 2,
  class: "loading"
}, O6 = {
  key: 3,
  class: "issues-error"
}, A6 = { class: "error-header" }, z6 = { class: "error-title" }, F6 = { class: "issues-list" }, V6 = { class: "workflow-state" }, B6 = { class: "message-section" }, W6 = { class: "popover-footer" }, G6 = {
  key: 1,
  class: "commit-popover"
}, j6 = { class: "popover-header" }, H6 = { class: "popover-body" }, q6 = {
  key: 0,
  class: "changes-summary"
}, K6 = {
  key: 0,
  class: "change-item"
}, J6 = {
  key: 1,
  class: "change-item"
}, Q6 = {
  key: 2,
  class: "change-item"
}, Y6 = {
  key: 3,
  class: "change-item"
}, X6 = {
  key: 4,
  class: "change-item"
}, Z6 = {
  key: 5,
  class: "change-item"
}, eE = {
  key: 1,
  class: "no-changes"
}, tE = {
  key: 2,
  class: "loading"
}, sE = {
  key: 3,
  class: "issues-error"
}, oE = { class: "error-header" }, nE = { class: "error-title" }, aE = { class: "issues-list" }, lE = { class: "workflow-state" }, iE = { class: "message-section" }, rE = { class: "popover-footer" }, cE = /* @__PURE__ */ xe({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, a = t, { commit: l } = ct(), r = k(""), c = k(!1), u = k(!1), d = R(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), v = R(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, b = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || b.nodes_added.length > 0 || b.nodes_removed.length > 0;
    }), f = R(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((b) => b.has_issues) : [];
    }), p = R(() => f.value.length > 0), w = R(() => p.value && !u.value);
    async function g() {
      var _, b, S, C;
      if (!(p.value && !u.value) && !(!d.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const I = await l(r.value.trim(), u.value);
          if (I.status === "success") {
            const E = `Committed: ${((_ = I.summary) == null ? void 0 : _.new) || 0} new, ${((b = I.summary) == null ? void 0 : b.modified) || 0} modified, ${((S = I.summary) == null ? void 0 : S.deleted) || 0} deleted`;
            a("committed", { success: !0, message: E });
          } else if (I.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (I.status === "blocked") {
            const E = ((C = I.issues) == null ? void 0 : C.map((M) => `${M.name}: ${M.issue}`).join("; ")) || "Unknown issues";
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
    return (_, b) => e.asModal ? (n(), L(Zt, {
      key: 0,
      to: "body"
    }, [
      s("div", {
        class: "modal-overlay",
        onClick: b[5] || (b[5] = (S) => a("close"))
      }, [
        s("div", {
          class: "commit-popover modal",
          onClick: b[4] || (b[4] = vt(() => {
          }, ["stop"]))
        }, [
          s("div", S6, [
            b[11] || (b[11] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            s("button", {
              class: "close-btn",
              onClick: b[0] || (b[0] = (S) => a("close"))
            }, [...b[10] || (b[10] = [
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
          s("div", I6, [
            e.status && d.value ? (n(), i("div", E6, [
              e.status.workflows.new.length ? (n(), i("div", T6, [
                b[12] || (b[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (n(), i("div", M6, [
                b[13] || (b[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (n(), i("div", P6, [
                b[14] || (b[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (n(), i("div", R6, [
                b[15] || (b[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (n(), i("div", L6, [
                b[16] || (b[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              v.value ? y("", !0) : (n(), i("div", D6, [...b[17] || (b[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (n(), i("div", N6, " No changes to commit ")) : (n(), i("div", U6, " Loading... ")),
            p.value ? (n(), i("div", O6, [
              s("div", A6, [
                b[18] || (b[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", z6, m(f.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", F6, [
                (n(!0), i(W, null, ye(f.value, (S) => (n(), i("div", {
                  key: S.name,
                  class: "issue-item"
                }, [
                  s("strong", null, m(S.name), 1),
                  s("span", V6, "(" + m(S.sync_state) + ")", 1),
                  x(": " + m(S.issue_summary), 1)
                ]))), 128))
              ]),
              $(la, {
                modelValue: u.value,
                "onUpdate:modelValue": b[1] || (b[1] = (S) => u.value = S),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...b[19] || (b[19] = [
                  x(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            s("div", B6, [
              $(Lo, {
                modelValue: r.value,
                "onUpdate:modelValue": b[2] || (b[2] = (S) => r.value = S),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: g,
                onSubmit: g
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          s("div", W6, [
            $(Ue, {
              variant: "secondary",
              onClick: b[3] || (b[3] = (S) => a("close"))
            }, {
              default: h(() => [...b[20] || (b[20] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            $(Ue, {
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
    ])) : (n(), i("div", G6, [
      s("div", j6, [
        b[22] || (b[22] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        s("button", {
          class: "close-btn",
          onClick: b[6] || (b[6] = (S) => a("close"))
        }, [...b[21] || (b[21] = [
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
      s("div", H6, [
        e.status && d.value ? (n(), i("div", q6, [
          e.status.workflows.new.length ? (n(), i("div", K6, [
            b[23] || (b[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (n(), i("div", J6, [
            b[24] || (b[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", Q6, [
            b[25] || (b[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", Y6, [
            b[26] || (b[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", X6, [
            b[27] || (b[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          v.value ? y("", !0) : (n(), i("div", Z6, [...b[28] || (b[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", eE, " No changes to commit ")) : (n(), i("div", tE, " Loading... ")),
        p.value ? (n(), i("div", sE, [
          s("div", oE, [
            b[29] || (b[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", nE, m(f.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", aE, [
            (n(!0), i(W, null, ye(f.value, (S) => (n(), i("div", {
              key: S.name,
              class: "issue-item"
            }, [
              s("strong", null, m(S.name), 1),
              s("span", lE, "(" + m(S.sync_state) + ")", 1),
              x(": " + m(S.issue_summary), 1)
            ]))), 128))
          ]),
          $(la, {
            modelValue: u.value,
            "onUpdate:modelValue": b[7] || (b[7] = (S) => u.value = S),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...b[30] || (b[30] = [
              x(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        s("div", iE, [
          $(Lo, {
            modelValue: r.value,
            "onUpdate:modelValue": b[8] || (b[8] = (S) => r.value = S),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: g,
            onSubmit: g
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      s("div", rE, [
        $(Ue, {
          variant: "secondary",
          onClick: b[9] || (b[9] = (S) => a("close"))
        }, {
          default: h(() => [...b[31] || (b[31] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        $(Ue, {
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
}), Ic = /* @__PURE__ */ Ie(cE, [["__scopeId", "data-v-5f897631"]]), uE = { class: "switch-body" }, dE = { class: "switch-message" }, mE = { class: "switch-details" }, fE = /* @__PURE__ */ xe({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => e.show ? (n(), L($t, {
      key: 0,
      title: "Confirm Environment Switch",
      size: "md",
      "overlay-z-index": 10005,
      onClose: o[2] || (o[2] = (a) => t.$emit("close"))
    }, {
      body: h(() => [
        s("div", uE, [
          s("p", dE, [
            o[3] || (o[3] = x(" Switch from ", -1)),
            s("strong", null, m(e.fromEnvironment), 1),
            o[4] || (o[4] = x(" to ", -1)),
            s("strong", null, m(e.toEnvironment), 1),
            o[5] || (o[5] = x("? ", -1))
          ]),
          o[6] || (o[6] = s("div", { class: "warning-box" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "This will restart ComfyUI")
          ], -1)),
          s("p", mE, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
          o[7] || (o[7] = s("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
        ])
      ]),
      footer: h(() => [
        $(Re, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => t.$emit("close"))
        }, {
          default: h(() => [...o[8] || (o[8] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        $(Re, {
          variant: "primary",
          onClick: o[1] || (o[1] = (a) => t.$emit("confirm"))
        }, {
          default: h(() => [...o[9] || (o[9] = [
            x(" Switch ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), vE = /* @__PURE__ */ Ie(fE, [["__scopeId", "data-v-f6d223e6"]]), pE = {
  key: 0,
  class: "modal-overlay"
}, gE = { class: "modal-content" }, hE = { class: "modal-body" }, yE = { class: "progress-info" }, wE = { class: "progress-percentage" }, _E = { class: "progress-state" }, kE = { class: "switch-steps" }, bE = { class: "step-icon" }, $E = { class: "step-label" }, CE = /* @__PURE__ */ xe({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const t = e, o = R(() => {
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
    }), a = R(() => t.state === "complete" ? "success" : t.state === "critical_failure" || t.state === "rolled_back" ? "error" : "default"), l = R(() => {
      const r = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], c = r.findIndex((u) => u.state === t.state);
      return r.map((u, d) => {
        let v = "pending", f = "○";
        return d < c ? (v = "completed", f = "✓") : d === c && (v = "active", f = "⟳"), {
          ...u,
          status: v,
          icon: f
        };
      });
    });
    return (r, c) => (n(), L(Zt, { to: "body" }, [
      e.show ? (n(), i("div", pE, [
        s("div", gE, [
          c[1] || (c[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", hE, [
            $(_c, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            s("div", yE, [
              s("div", wE, m(e.progress) + "%", 1),
              s("div", _E, m(o.value), 1)
            ]),
            s("div", kE, [
              (n(!0), i(W, null, ye(l.value, (u) => (n(), i("div", {
                key: u.state,
                class: Be(["switch-step", u.status])
              }, [
                s("span", bE, m(u.icon), 1),
                s("span", $E, m(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), xE = /* @__PURE__ */ Ie(CE, [["__scopeId", "data-v-768a5078"]]), SE = { class: "modal-header" }, IE = { class: "modal-body" }, EE = {
  key: 0,
  class: "node-section"
}, TE = { class: "node-list" }, ME = {
  key: 1,
  class: "node-section"
}, PE = { class: "node-list" }, RE = { class: "modal-actions" }, LE = /* @__PURE__ */ xe({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (n(), L(Zt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = vt(() => {
          }, ["stop"]))
        }, [
          s("div", SE, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", IE, [
            o[8] || (o[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", EE, [
              o[6] || (o[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", TE, [
                (n(!0), i(W, null, ye(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + m(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", ME, [
              o[7] || (o[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", PE, [
                (n(!0), i(W, null, ye(e.mismatchDetails.extra_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item remove"
                }, " - " + m(a), 1))), 128))
              ])
            ])) : y("", !0),
            o[9] || (o[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This may take several minutes")
            ], -1))
          ]),
          s("div", RE, [
            $(Re, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => t.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            $(Re, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => t.$emit("confirm"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                x(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), DE = /* @__PURE__ */ Ie(LE, [["__scopeId", "data-v-7cad7518"]]), NE = [
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
], zn = "v0.0.24", UE = "Akatz", OE = { class: "social-buttons" }, AE = ["title", "aria-label", "onClick"], zE = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, FE = ["d"], VE = ["title", "aria-label", "onClick"], BE = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, WE = ["d"], GE = /* @__PURE__ */ xe({
  __name: "SocialButtons",
  setup(e) {
    function t(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", OE, [
      (n(!0), i(W, null, ye(st(NE), (l) => (n(), i(W, {
        key: l.id
      }, [
        l.label ? (n(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          x(m(l.label) + " ", 1),
          (n(), i("svg", zE, [
            s("path", {
              d: l.iconPath
            }, null, 8, FE)
          ]))
        ], 8, AE)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (n(), i("svg", BE, [
            s("path", {
              d: l.iconPath
            }, null, 8, WE)
          ]))
        ], 8, VE))
      ], 64))), 128))
    ]));
  }
}), Ec = /* @__PURE__ */ Ie(GE, [["__scopeId", "data-v-4f846342"]]), jE = { class: "footer-info" }, HE = ["title"], qE = {
  key: 0,
  class: "dev-badge"
}, KE = { class: "made-by" }, JE = /* @__PURE__ */ xe({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: t } = ct(), o = k(null), a = k(null), l = k(null), r = R(() => o.value === "development"), c = R(() => {
      var d;
      if (!r.value) return zn;
      const u = [a.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return u ? `${zn} (${u})` : `${zn} (development)`;
    });
    return lt(async () => {
      try {
        const u = await t();
        o.value = u.manager_source ?? null, a.value = u.manager_branch ?? null, l.value = u.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (u, d) => (n(), i("div", jE, [
      s("span", {
        class: "version",
        title: c.value
      }, [
        x(m(st(zn)) + " ", 1),
        r.value ? (n(), i("span", qE, "dev")) : y("", !0)
      ], 8, HE),
      s("span", KE, [
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
        x(" by " + m(st(UE)), 1)
      ])
    ]));
  }
}), Tc = /* @__PURE__ */ Ie(JE, [["__scopeId", "data-v-4fa265b3"]]), QE = /* @__PURE__ */ xe({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = k(null);
    async function a() {
      var r;
      await ((r = o.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, c) => (n(), L($t, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => r.$emit("close"))
    }, {
      body: h(() => [
        $(gc, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var u;
        return [
          $(Ue, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: a
          }, {
            default: h(() => [...c[2] || (c[2] = [
              x(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          $(Ue, {
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
}), YE = /* @__PURE__ */ Ie(QE, [["__scopeId", "data-v-fac00ae7"]]), XE = { class: "header-actions" }, ZE = {
  key: 0,
  class: "wizard-step"
}, eT = { class: "form-field" }, tT = ["placeholder"], sT = {
  key: 0,
  class: "form-error"
}, oT = { class: "form-field form-field--checkbox" }, nT = { class: "form-checkbox" }, aT = {
  key: 0,
  class: "form-field"
}, lT = ["placeholder"], iT = {
  key: 0,
  class: "form-info"
}, rT = {
  key: 1,
  class: "form-suggestion"
}, cT = {
  key: 2,
  class: "form-error"
}, uT = {
  key: 3,
  class: "form-info"
}, dT = {
  key: 1,
  class: "wizard-step"
}, mT = {
  key: 0,
  class: "progress-check-loading"
}, fT = {
  key: 0,
  class: "cli-warning"
}, vT = { class: "cli-warning-header" }, pT = {
  key: 1,
  class: "env-landing"
}, gT = { class: "env-list" }, hT = ["value"], yT = { class: "env-name" }, wT = {
  key: 2,
  class: "env-create"
}, _T = { class: "form-field" }, kT = { class: "form-field" }, bT = ["value"], $T = { class: "form-field" }, CT = ["disabled"], xT = ["value"], ST = { class: "form-field" }, IT = ["value"], ET = { class: "form-field form-field--checkbox" }, TT = { class: "form-checkbox" }, MT = {
  key: 0,
  class: "form-error"
}, PT = {
  key: 1,
  class: "env-creating"
}, RT = { class: "creating-intro" }, LT = {
  key: 3,
  class: "env-import"
}, DT = { class: "wizard-footer" }, NT = { class: "wizard-footer-actions" }, bo = 10, UT = 600 * 1e3, Li = 1800 * 1e3, OT = /* @__PURE__ */ xe({
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
    const o = e, a = t, {
      initializeWorkspace: l,
      getInitializeProgress: r,
      validatePath: c,
      createEnvironment: u,
      getCreateProgress: d,
      getImportProgress: v,
      getComfyUIReleases: f
    } = ct(), p = k(o.initialStep || 1), w = k(null), g = k("landing"), _ = k(!1), b = k(!1), S = k(!1), C = k(!1), I = k(null), E = k(o.initialStep === 2), M = k(o.defaultPath), N = k(!!o.detectedModelsDir), F = k(o.detectedModelsDir || ""), V = k(null), D = k(null), q = k(null), ue = k(null), ie = k("my-new-env"), Y = k(yc), me = k("latest"), oe = k(wc), B = k(!0), H = k(null), we = k(null), se = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), de = k(!1), ce = k(!1), K = k(!1), ee = k({ progress: 0, message: "" }), te = k({ progress: 0, message: "" }), Me = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Se = k(0), ze = k(null), Ne = k(0), be = k(null), Ae = R(() => {
      var De, He;
      const _e = (De = M.value) == null ? void 0 : De.trim(), Z = !V.value, Fe = !N.value || !D.value && ((He = F.value) == null ? void 0 : He.trim());
      return _e && Z && Fe;
    }), ge = R(() => {
      var _e;
      return (_e = ie.value) == null ? void 0 : _e.trim();
    }), ve = R(() => !!(p.value === 2 || we.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), T = R(() => we.value || o.workspacePath || null);
    async function A() {
      var _e;
      if (V.value = null, !!((_e = M.value) != null && _e.trim()))
        try {
          const Z = await c({ path: M.value, type: "workspace" });
          Z.valid || (V.value = Z.error || "Invalid path");
        } catch (Z) {
          V.value = Z instanceof Error ? Z.message : "Validation failed";
        }
    }
    async function le() {
      var _e;
      if (D.value = null, q.value = null, ue.value = null, !!((_e = F.value) != null && _e.trim()))
        try {
          const Z = await c({ path: F.value, type: "models" });
          if (Z.valid)
            ue.value = Z.model_count ?? null;
          else if (D.value = Z.error || "Invalid path", Z.suggestion) {
            q.value = Z.suggestion, F.value = Z.suggestion, D.value = null;
            const Fe = await c({ path: Z.suggestion, type: "models" });
            Fe.valid && (ue.value = Fe.model_count ?? null);
          }
        } catch (Z) {
          D.value = Z instanceof Error ? Z.message : "Validation failed";
        }
    }
    async function Ce() {
      var _e, Z, Fe, De, He;
      if (V.value = null, D.value = null, await A(), (_e = V.value) != null && _e.includes("already exists")) {
        V.value = null, we.value = ((Z = M.value) == null ? void 0 : Z.trim()) || o.defaultPath, p.value = 2, ke();
        return;
      }
      if (!V.value && !(N.value && ((Fe = F.value) != null && Fe.trim()) && (await le(), D.value))) {
        ce.value = !0;
        try {
          await l({
            workspace_path: ((De = M.value) == null ? void 0 : De.trim()) || o.defaultPath,
            models_directory: N.value && ((He = F.value) == null ? void 0 : He.trim()) || null
          }), Se.value = 0, ze.value = Date.now();
          const Ve = setInterval(async () => {
            var Oe;
            if (ze.value && Date.now() - ze.value > UT) {
              clearInterval(Ve), ce.value = !1, V.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Qe = await r();
              if (Se.value = 0, Qe.state === "idle" && ce.value) {
                clearInterval(Ve), ce.value = !1, V.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              ee.value = { progress: Qe.progress, message: Qe.message }, Qe.state === "complete" ? (clearInterval(Ve), ce.value = !1, we.value = ((Oe = M.value) == null ? void 0 : Oe.trim()) || o.defaultPath, p.value = 2, ke()) : Qe.state === "error" && (clearInterval(Ve), ce.value = !1, V.value = Qe.error || "Workspace creation failed");
            } catch (Qe) {
              Se.value++, console.warn(`Polling failure ${Se.value}/${bo}:`, Qe), Se.value >= bo && (clearInterval(Ve), ce.value = !1, V.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Ve) {
          ce.value = !1, V.value = Ve instanceof Error ? Ve.message : "Failed to create workspace";
        }
      }
    }
    async function Ee() {
      K.value = !0, H.value = null;
      try {
        const _e = {
          name: ie.value.trim() || "my-new-env",
          python_version: Y.value,
          comfyui_version: me.value,
          torch_backend: oe.value,
          switch_after: B.value,
          workspace_path: we.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(_e)).status === "started") {
          Ne.value = 0, be.value = Date.now();
          const Fe = setInterval(async () => {
            if (be.value && Date.now() - be.value > Li) {
              clearInterval(Fe), K.value = !1, H.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const De = await d();
              if (Ne.value = 0, De.state === "idle" && K.value) {
                clearInterval(Fe), K.value = !1, H.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (te.value = {
                progress: De.progress ?? 0,
                message: De.message,
                phase: De.phase
              }, De.state === "complete") {
                clearInterval(Fe), K.value = !1;
                const He = De.environment_name || _e.name;
                B.value ? a("complete", He, we.value) : (g.value = "landing", a("environment-created-no-switch", He));
              } else De.state === "error" && (clearInterval(Fe), K.value = !1, H.value = De.error || "Environment creation failed");
            } catch (De) {
              Ne.value++, console.warn(`Polling failure ${Ne.value}/${bo}:`, De), Ne.value >= bo && (clearInterval(Fe), K.value = !1, H.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (_e) {
        K.value = !1, H.value = _e instanceof Error ? _e.message : "Unknown error";
      }
    }
    async function ke() {
      de.value = !0;
      try {
        se.value = await f();
      } catch (_e) {
        console.error("Failed to load ComfyUI releases:", _e);
      } finally {
        de.value = !1;
      }
    }
    function X() {
      w.value && a("switch-environment", w.value, we.value);
    }
    function G() {
      g.value === "create" || g.value === "import" ? g.value = "landing" : p.value === 2 && o.setupState === "no_workspace" && (p.value = 1);
    }
    function fe(_e, Z) {
      b.value = !1, Z ? a("complete", _e, we.value) : (a("environment-created-no-switch", _e), g.value = "landing");
    }
    function he() {
    }
    lt(async () => {
      if (o.detectedModelsDir && (F.value = o.detectedModelsDir), o.workspacePath && (we.value = o.workspacePath), p.value === 2) {
        ke();
        const _e = setTimeout(() => {
          E.value = !1;
        }, 3e3);
        await je(), clearTimeout(_e), E.value = !1;
      }
    });
    async function je() {
      try {
        const _e = await d();
        if (console.log("[ComfyGit] Create progress check:", _e.state, _e), _e.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", _e.environment_name), g.value = "create", K.value = !0, ie.value = _e.environment_name || "my-new-env", te.value = {
            progress: _e.progress ?? 0,
            message: _e.message,
            phase: _e.phase
          }, We();
          return;
        }
      } catch (_e) {
        console.log("[ComfyGit] Create progress check failed:", _e);
      }
      try {
        const _e = await v();
        console.log("[ComfyGit] Import progress check:", _e.state, _e), _e.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", _e.environment_name), I.value = {
          message: _e.message || "Importing...",
          phase: _e.phase || "",
          progress: _e.progress ?? 0,
          environmentName: _e.environment_name || ""
        }, C.value = !0, g.value = "import", b.value = !0);
      } catch (_e) {
        console.log("[ComfyGit] Import progress check failed:", _e);
      }
    }
    async function We() {
      Ne.value = 0, be.value = Date.now();
      let _e = null;
      const Z = async () => {
        if (be.value && Date.now() - be.value > Li)
          return _e && clearInterval(_e), K.value = !1, H.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const De = await d();
          if (Ne.value = 0, De.state === "idle" && K.value)
            return _e && clearInterval(_e), K.value = !1, H.value = "Environment creation was interrupted. Please try again.", !1;
          if (te.value = {
            progress: De.progress ?? 0,
            message: De.message,
            phase: De.phase
          }, De.state === "complete") {
            _e && clearInterval(_e), K.value = !1;
            const He = De.environment_name || ie.value;
            return a("complete", He, we.value), !1;
          } else if (De.state === "error")
            return _e && clearInterval(_e), K.value = !1, H.value = De.error || "Environment creation failed", !1;
          return !0;
        } catch (De) {
          return Ne.value++, console.warn(`Polling failure ${Ne.value}/${bo}:`, De), Ne.value >= bo ? (_e && clearInterval(_e), K.value = !1, H.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await Z() && (_e = setInterval(async () => {
        !await Z() && _e && clearInterval(_e);
      }, 2e3));
    }
    return (_e, Z) => (n(), i(W, null, [
      $($t, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: Z[15] || (Z[15] = (Fe) => _e.$emit("close"))
      }, {
        header: h(() => [
          Z[20] || (Z[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", XE, [
            $(Ec),
            Z[19] || (Z[19] = s("span", { class: "header-divider" }, null, -1)),
            ve.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: Z[0] || (Z[0] = (Fe) => _.value = !0)
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
              onClick: Z[1] || (Z[1] = (Fe) => _e.$emit("close")),
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
          var Fe;
          return [
            p.value === 1 ? (n(), i("div", ZE, [
              Z[24] || (Z[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", eT, [
                Z[21] || (Z[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                Rt(s("input", {
                  "onUpdate:modelValue": Z[2] || (Z[2] = (De) => M.value = De),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, tT), [
                  [fn, M.value]
                ]),
                V.value ? (n(), i("p", sT, m(V.value), 1)) : y("", !0)
              ]),
              s("div", oT, [
                s("label", nT, [
                  Rt(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Z[3] || (Z[3] = (De) => N.value = De)
                  }, null, 512), [
                    [na, N.value]
                  ]),
                  Z[22] || (Z[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              N.value ? (n(), i("div", aT, [
                Z[23] || (Z[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                Rt(s("input", {
                  "onUpdate:modelValue": Z[4] || (Z[4] = (De) => F.value = De),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, lT), [
                  [fn, F.value]
                ]),
                e.detectedModelsDir && !F.value ? (n(), i("p", iT, " Detected: " + m(e.detectedModelsDir), 1)) : y("", !0),
                q.value ? (n(), i("p", rT, " Did you mean: " + m(q.value), 1)) : y("", !0),
                D.value ? (n(), i("p", cT, m(D.value), 1)) : y("", !0),
                ue.value !== null && !D.value ? (n(), i("p", uT, " Found " + m(ue.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              ce.value ? (n(), L(aa, {
                key: 1,
                progress: ee.value.progress,
                message: ee.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (n(), i("div", dT, [
              E.value ? (n(), i("div", mT, [...Z[25] || (Z[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(W, { key: 1 }, [
                !o.cliInstalled && !S.value ? (n(), i("div", fT, [
                  s("div", vT, [
                    Z[27] || (Z[27] = s("span", { class: "cli-warning-icon" }, "!", -1)),
                    Z[28] || (Z[28] = s("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    s("button", {
                      class: "cli-warning-close",
                      onClick: Z[5] || (Z[5] = (De) => S.value = !0),
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
                g.value === "landing" ? (n(), i("div", pT, [
                  Z[34] || (Z[34] = s("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  s("button", {
                    class: "landing-option",
                    onClick: Z[6] || (Z[6] = (De) => g.value = "create")
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
                    onClick: Z[7] || (Z[7] = (De) => {
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
                  (Fe = o.existingEnvironments) != null && Fe.length ? (n(), i(W, { key: 0 }, [
                    Z[33] || (Z[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", gT, [
                      (n(!0), i(W, null, ye(o.existingEnvironments, (De) => (n(), i("label", {
                        key: De,
                        class: Be(["env-option", { selected: w.value === De }])
                      }, [
                        Rt(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: De,
                          "onUpdate:modelValue": Z[8] || (Z[8] = (He) => w.value = He)
                        }, null, 8, hT), [
                          [jn, w.value]
                        ]),
                        s("span", yT, m(De), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : g.value === "create" ? (n(), i("div", wT, [
                  K.value ? (n(), i("div", PT, [
                    s("p", RT, [
                      Z[41] || (Z[41] = x(" Creating environment ", -1)),
                      s("strong", null, m(ie.value), 1),
                      Z[42] || (Z[42] = x("... ", -1))
                    ]),
                    $(aa, {
                      progress: te.value.progress,
                      message: te.value.message,
                      "current-phase": te.value.phase,
                      "show-steps": !0,
                      steps: Me
                    }, null, 8, ["progress", "message", "current-phase"]),
                    Z[43] || (Z[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(W, { key: 0 }, [
                    Z[40] || (Z[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", _T, [
                      Z[35] || (Z[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      Rt(s("input", {
                        "onUpdate:modelValue": Z[9] || (Z[9] = (De) => ie.value = De),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [fn, ie.value]
                      ])
                    ]),
                    s("div", kT, [
                      Z[36] || (Z[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      Rt(s("select", {
                        "onUpdate:modelValue": Z[10] || (Z[10] = (De) => Y.value = De),
                        class: "form-select"
                      }, [
                        (n(!0), i(W, null, ye(st(hc), (De) => (n(), i("option", {
                          key: De,
                          value: De
                        }, m(De), 9, bT))), 128))
                      ], 512), [
                        [Ro, Y.value]
                      ])
                    ]),
                    s("div", $T, [
                      Z[37] || (Z[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Rt(s("select", {
                        "onUpdate:modelValue": Z[11] || (Z[11] = (De) => me.value = De),
                        class: "form-select",
                        disabled: de.value
                      }, [
                        (n(!0), i(W, null, ye(se.value, (De) => (n(), i("option", {
                          key: De.tag_name,
                          value: De.tag_name
                        }, m(De.name), 9, xT))), 128))
                      ], 8, CT), [
                        [Ro, me.value]
                      ])
                    ]),
                    s("div", ST, [
                      Z[38] || (Z[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Rt(s("select", {
                        "onUpdate:modelValue": Z[12] || (Z[12] = (De) => oe.value = De),
                        class: "form-select"
                      }, [
                        (n(!0), i(W, null, ye(st(Rl), (De) => (n(), i("option", {
                          key: De,
                          value: De
                        }, m(De) + m(De === "auto" ? " (detect GPU)" : ""), 9, IT))), 128))
                      ], 512), [
                        [Ro, oe.value]
                      ])
                    ]),
                    s("div", ET, [
                      s("label", TT, [
                        Rt(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": Z[13] || (Z[13] = (De) => B.value = De)
                        }, null, 512), [
                          [na, B.value]
                        ]),
                        Z[39] || (Z[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    H.value ? (n(), i("div", MT, m(H.value), 1)) : y("", !0)
                  ], 64))
                ])) : g.value === "import" ? (n(), i("div", LT, [
                  $(bc, {
                    "workspace-path": we.value,
                    "resume-import": C.value,
                    "initial-progress": I.value ?? void 0,
                    onImportComplete: fe,
                    onImportStarted: Z[14] || (Z[14] = (De) => b.value = !0),
                    onSourceCleared: he
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          s("div", DT, [
            $(Tc),
            s("div", NT, [
              p.value === 1 ? (n(), L(Ue, {
                key: 0,
                variant: "primary",
                disabled: !Ae.value || ce.value,
                onClick: Ce
              }, {
                default: h(() => [
                  x(m(ce.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (n(), i(W, { key: 1 }, [
                !K.value && !b.value && (g.value !== "landing" || o.setupState === "no_workspace" && !we.value) ? (n(), L(Ue, {
                  key: 0,
                  variant: "secondary",
                  onClick: G
                }, {
                  default: h(() => [...Z[44] || (Z[44] = [
                    x(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                g.value === "create" ? (n(), L(Ue, {
                  key: 1,
                  variant: "primary",
                  disabled: !ge.value || K.value,
                  onClick: Ee
                }, {
                  default: h(() => [
                    x(m(K.value ? "Creating..." : B.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                g.value === "landing" && w.value ? (n(), L(Ue, {
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
      _.value ? (n(), L(YE, {
        key: 0,
        "workspace-path": T.value,
        onClose: Z[16] || (Z[16] = (Fe) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), AT = /* @__PURE__ */ Ie(OT, [["__scopeId", "data-v-9a9aadc0"]]), zT = { class: "update-banner" }, FT = { class: "update-banner__left" }, VT = { class: "update-banner__title" }, BT = {
  key: 0,
  class: "update-banner__summary"
}, WT = { class: "update-banner__actions" }, GT = ["disabled"], jT = ["disabled"], HT = ["disabled"], qT = /* @__PURE__ */ xe({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const o = t;
    return (a, l) => (n(), i("div", zT, [
      s("div", FT, [
        s("div", VT, " ComfyGit Manager v" + m(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (n(), i("div", BT, m(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      s("div", WT, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, m(e.updating ? "Updating…" : "Update"), 9, GT),
        e.info.release_url ? (n(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, jT)) : y("", !0),
        s("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, HT)
      ])
    ]));
  }
}), KT = /* @__PURE__ */ Ie(qT, [["__scopeId", "data-v-49562c5c"]]), Mc = "ComfyGit.UpdateNotice.DismissedVersion";
function JT() {
  try {
    return localStorage.getItem(Mc);
  } catch {
    return null;
  }
}
function QT(e) {
  try {
    localStorage.setItem(Mc, e);
  } catch {
  }
}
function YT(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : JT() !== e.latest_version;
}
const XT = { class: "comfygit-panel" }, ZT = { class: "panel-header" }, eM = { class: "header-left" }, tM = {
  key: 0,
  class: "header-info"
}, sM = { class: "header-actions" }, oM = { class: "env-switcher" }, nM = { class: "env-switcher-header" }, aM = { class: "env-control-buttons" }, lM = {
  key: 0,
  class: "header-info"
}, iM = { class: "branch-name" }, rM = { class: "panel-main" }, cM = { class: "sidebar" }, uM = { class: "sidebar-content" }, dM = { class: "sidebar-section" }, mM = { class: "sidebar-section" }, fM = { class: "sidebar-section" }, vM = { class: "sidebar-footer" }, pM = { class: "content-area" }, gM = {
  key: 0,
  class: "error-message"
}, hM = {
  key: 1,
  class: "loading"
}, yM = { class: "dialog-content env-selector-dialog" }, wM = { class: "dialog-header" }, _M = { class: "dialog-body" }, kM = { class: "env-list" }, bM = { class: "env-info" }, $M = { class: "env-name-row" }, CM = { class: "env-indicator" }, xM = { class: "env-name" }, SM = {
  key: 0,
  class: "env-branch"
}, IM = {
  key: 1,
  class: "current-label"
}, EM = { class: "env-stats" }, TM = ["onClick"], MM = { class: "toast-container" }, PM = { class: "toast-message" }, Di = "ComfyGit.LastView", Ni = "ComfyGit.LastSection", RM = /* @__PURE__ */ xe({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: t }) {
    const o = e, a = t, {
      getStatus: l,
      getHistory: r,
      getBranches: c,
      checkout: u,
      createBranch: d,
      switchBranch: v,
      deleteBranch: f,
      getEnvironments: p,
      switchEnvironment: w,
      getSwitchProgress: g,
      deleteEnvironment: _,
      syncEnvironmentManually: b,
      repairWorkflowModels: S,
      getSetupStatus: C,
      getUpdateCheck: I,
      updateManager: E
    } = ct(), M = Gh(), N = k(null), F = k([]), V = k([]), D = k([]), q = R(() => D.value.find((re) => re.is_current)), ue = k(null), ie = k(!1), Y = k(!1), me = k("remotes");
    function oe(re) {
      return re ? {
        manifest: "manifest",
        "debug-env": "env",
        "debug-workspace": "workspace",
        "debug-orchestrator": "orchestrator"
      }[re] ?? "manifest" : "manifest";
    }
    const B = k(oe(o.initialView)), H = k(null), we = k(!1), se = k(1), de = R(() => {
      var re;
      return ((re = H.value) == null ? void 0 : re.state) || "managed";
    }), ce = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, K = R(() => {
      var re, j;
      return ((j = (re = H.value) == null ? void 0 : re.runtime_context) == null ? void 0 : j.capabilities) || ce;
    }), ee = k(!1), te = k(null), Me = k(null), Se = k(!1), ze = k(null), Ne = k(!1), be = k(!1), Ae = R(() => !Ne.value && YT(ze.value)), ge = k(null), ve = k(null), T = k(null), A = k(!1), le = k(!1), Ce = k(""), Ee = k(null), ke = k({ state: "idle", progress: 0, message: "" });
    let X = null, G = null;
    const fe = {
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
    }, he = o.initialView ? fe[o.initialView] : null, je = [
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
    function _e() {
      try {
        const re = sessionStorage.getItem(Di), j = sessionStorage.getItem(Ni), qe = re === "branches" || re === "history" || re === "remotes" ? "version-control" : re === "manifest" || re === "debug-env" || re === "debug-workspace" ? "diagnostics" : re, et = j === "all-envs" ? "workspace" : j === "sharing" ? "version-control" : j;
        if (re && j && je.includes(qe) && We.includes(et))
          return { view: qe, section: et };
      } catch {
      }
      return null;
    }
    const Z = _e(), Fe = k((he == null ? void 0 : he.view) ?? (Z == null ? void 0 : Z.view) ?? "status"), De = k((he == null ? void 0 : he.section) ?? (Z == null ? void 0 : Z.section) ?? "this-env");
    function He(re, j) {
      Fe.value = re, De.value = j;
      try {
        sessionStorage.setItem(Di, re), sessionStorage.setItem(Ni, j);
      } catch {
      }
    }
    function Ve(re) {
      const qe = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" }
      }[re];
      qe && He(qe.view, qe.section);
    }
    function Oe(re) {
      me.value = re, He("version-control", "version-control");
    }
    function Qe(re) {
      B.value = re, He("diagnostics", "diagnostics");
    }
    function pt() {
      Oe("branches");
    }
    function Q() {
      a("close"), setTimeout(async () => {
        await pe("Comfy.OpenManagerDialog") || await pe("Comfy.Manager.CustomNodesManager.ShowCustomNodesMenu") || P(["Extensions", "Manage extensions"]) || P(["Manager"]) || console.warn("[ComfyGit] Extensions manager entrypoint not found");
      }, 100);
    }
    async function pe(re) {
      var et, dt;
      const j = window.app, qe = [
        (et = j == null ? void 0 : j.extensionManager) == null ? void 0 : et.command,
        (dt = j == null ? void 0 : j.extensionManager) == null ? void 0 : dt.commands,
        j == null ? void 0 : j.command,
        j == null ? void 0 : j.commands
      ];
      for (const yt of qe)
        if (typeof (yt == null ? void 0 : yt.execute) == "function")
          try {
            return await yt.execute(re), !0;
          } catch (Ut) {
            console.debug(`[ComfyGit] Command ${re} did not open Extensions manager`, Ut);
          }
      return !1;
    }
    function P(re) {
      var et, dt, yt;
      const j = re.map((Ut) => Ut.toLowerCase()), qe = document.querySelectorAll('button, [role="button"]');
      for (const Ut of qe) {
        const is = Ut;
        if ([
          (et = is.textContent) == null ? void 0 : et.trim(),
          (dt = is.getAttribute("title")) == null ? void 0 : dt.trim(),
          (yt = is.getAttribute("aria-label")) == null ? void 0 : yt.trim()
        ].filter(Boolean).map((z) => z.toLowerCase()).some((z) => j.includes(z)))
          return is.click(), !0;
      }
      return !1;
    }
    const U = k(null), J = k(!1), Te = k(!1), Le = k([]);
    let Ke = 0;
    function Pe(re, j = "info", qe = 3e3) {
      const et = ++Ke;
      return Le.value.push({ id: et, message: re, type: j }), qe > 0 && setTimeout(() => {
        Le.value = Le.value.filter((dt) => dt.id !== et);
      }, qe), et;
    }
    function Ye(re) {
      Le.value = Le.value.filter((j) => j.id !== re);
    }
    function ot(re, j) {
      Pe(re, j);
    }
    async function It() {
      ze.value = null, Ne.value = !1;
      try {
        ze.value = await I();
      } catch {
      }
    }
    function Bt() {
      var j;
      const re = (j = ze.value) == null ? void 0 : j.release_url;
      if (re)
        try {
          window.open(re, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function Ct() {
      var j;
      const re = (j = ze.value) == null ? void 0 : j.latest_version;
      re && QT(re), Ne.value = !0;
    }
    async function Mt() {
      if (be.value) return;
      be.value = !0;
      const re = Pe("Updating comfygit-manager...", "info", 0);
      try {
        const j = await E();
        if (Ye(re), j.status !== "success") {
          if (Pe(j.message || "Update failed", "error"), j.manual_instructions) {
            const qe = j.manual_instructions.split(`
`).map((et) => et.trim()).filter(Boolean);
            U.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: qe,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                U.value = null;
              }
            };
          }
          return;
        }
        if (Pe(j.message || "Update complete", "success"), Ct(), j.restart_required) {
          Ds();
          try {
            await eo("/v2/manager/reboot");
          } catch {
          }
        }
      } catch (j) {
        Ye(re);
        const qe = j instanceof Error ? j.message : "Update failed";
        Pe(qe, "error");
      } finally {
        be.value = !1;
      }
    }
    const os = R(() => {
      if (!N.value) return "neutral";
      const re = N.value.workflows, j = re.new.length > 0 || re.modified.length > 0 || re.deleted.length > 0 || N.value.has_changes;
      return N.value.comparison.is_synced ? j ? "warning" : "success" : "error";
    });
    R(() => N.value ? os.value === "success" ? "All synced" : os.value === "warning" ? "Uncommitted changes" : os.value === "error" ? "Not synced" : "" : "");
    async function Et(re = {}) {
      ee.value = !0, te.value = null;
      try {
        const [j, qe, et, dt] = await Promise.all([
          l(!0),
          r(),
          c(),
          p()
        ]);
        N.value = j, F.value = qe.commits, V.value = et.branches, D.value = dt, a("statusUpdate", j), (re.refreshWorkflows ?? !0) && ge.value && await ge.value.loadWorkflows(!0);
      } catch (j) {
        te.value = j instanceof Error ? j.message : "Failed to load status", N.value = null, F.value = [], V.value = [];
      } finally {
        ee.value = !1;
      }
    }
    function js(re) {
      Me.value = re;
    }
    async function Ls(re) {
      var qe;
      Me.value = null;
      const j = N.value && (N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes);
      U.value = {
        title: j ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: j ? "You have uncommitted changes that will be lost." : `Checkout commit ${re.short_hash || ((qe = re.hash) == null ? void 0 : qe.slice(0, 7))}?`,
        details: j ? Pn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: j ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: j,
        onConfirm: async () => {
          var yt;
          U.value = null, Ds();
          const et = Pe(`Checking out ${re.short_hash || ((yt = re.hash) == null ? void 0 : yt.slice(0, 7))}...`, "info", 0), dt = await u(re.hash, j);
          Ye(et), dt.status === "success" ? Pe("Restarting ComfyUI...", "success") : Pe(dt.message || "Checkout failed", "error");
        }
      };
    }
    async function Hs(re) {
      const j = N.value && (N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes);
      U.value = {
        title: j ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: j ? "You have uncommitted changes." : `Switch to branch "${re}"?`,
        details: j ? Pn() : void 0,
        warning: j ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: j ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          U.value = null, Ds();
          const qe = Pe(`Switching to ${re}...`, "info", 0), et = await v(re, j);
          Ye(qe), et.status === "success" ? Pe("Restarting ComfyUI...", "success") : Pe(et.message || "Branch switch failed", "error");
        }
      };
    }
    async function qs(re) {
      const j = Pe(`Creating branch ${re}...`, "info", 0), qe = await d(re);
      Ye(j), qe.status === "success" ? (Pe(`Branch "${re}" created`, "success"), await Et()) : Pe(qe.message || "Failed to create branch", "error");
    }
    async function Wo(re, j = !1) {
      const qe = async (et) => {
        var yt;
        const dt = Pe(`Deleting branch ${re}...`, "info", 0);
        try {
          const Ut = await f(re, et);
          Ye(dt), Ut.status === "success" ? (Pe(`Branch "${re}" deleted`, "success"), await Et()) : (yt = Ut.message) != null && yt.includes("not fully merged") ? U.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${re}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              U.value = null, await qe(!0);
            }
          } : Pe(Ut.message || "Failed to delete branch", "error");
        } catch (Ut) {
          Ye(dt);
          const is = Ut instanceof Error ? Ut.message : "Failed to delete branch";
          is.includes("not fully merged") ? U.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${re}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              U.value = null, await qe(!0);
            }
          } : Pe(is, "error");
        }
      };
      U.value = {
        title: "Delete Branch",
        message: `Delete branch "${re}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          U.value = null, await qe(j);
        }
      };
    }
    async function Go(re) {
      Me.value = null;
      const j = prompt("Enter branch name:");
      if (j) {
        const qe = Pe(`Creating branch ${j}...`, "info", 0), et = await d(j, re.hash);
        Ye(qe), et.status === "success" ? (Pe(`Branch "${j}" created from ${re.short_hash}`, "success"), await Et()) : Pe(et.message || "Failed to create branch", "error");
      }
    }
    function Ds() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ae() {
      if (!K.value.can_restart_current) {
        Pe("Restart is not available in this runtime context.", "warning");
        return;
      }
      U.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          U.value = null, Ds(), Pe("Restarting environment...", "info");
          try {
            await eo("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function O() {
      if (!K.value.can_stop_current) {
        Pe("Stop is not available in this runtime context.", "warning");
        return;
      }
      U.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          U.value = null, Pe("Stopping environment...", "info");
          try {
            await eo("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function ne(re, j) {
      if (!K.value.can_switch_environment) {
        Pe("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      Se.value = !1, Ce.value = re, Ee.value = j || null, A.value = !0;
    }
    async function Je() {
      A.value = !1, le.value = !0, Ds(), ke.value = {
        progress: 10,
        state: it(10),
        message: Dt(10)
      };
      try {
        await w(Ce.value, Ee.value || void 0), vs(), es();
      } catch (re) {
        nt(), le.value = !1, Pe(`Failed to initiate switch: ${re instanceof Error ? re.message : "Unknown error"}`, "error"), ke.value = { state: "idle", progress: 0, message: "" }, Ee.value = null;
      }
    }
    function it(re) {
      return re >= 100 ? "complete" : re >= 80 ? "validating" : re >= 60 ? "starting" : re >= 30 ? "syncing" : "preparing";
    }
    function Dt(re) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[it(re)] || "";
    }
    function vs() {
      if (G) return;
      let re = 10;
      const j = 60, qe = 5e3, et = 100, dt = (j - re) / (qe / et);
      G = window.setInterval(() => {
        if (re += dt, re >= j && (re = j, nt()), ke.value.progress < j) {
          const yt = Math.floor(re);
          ke.value = {
            progress: yt,
            state: it(yt),
            message: Dt(yt)
          };
        }
      }, et);
    }
    function nt() {
      G && (clearInterval(G), G = null);
    }
    function es() {
      X || (X = window.setInterval(async () => {
        try {
          let re = await M.getStatus();
          if ((!re || re.state === "idle") && (re = await g()), !re)
            return;
          const j = re.progress || 0;
          j >= 60 && nt();
          const qe = Math.max(j, ke.value.progress), et = re.state && re.state !== "idle" && re.state !== "unknown", dt = et ? re.state : it(qe), yt = et && re.message || Dt(qe);
          ke.value = {
            state: dt,
            progress: qe,
            message: yt
          }, re.state === "complete" ? (nt(), xt(), le.value = !1, Pe(`✓ Switched to ${Ce.value}`, "success"), await Et(), Ce.value = "") : re.state === "rolled_back" ? (nt(), xt(), le.value = !1, Pe("Switch failed, restored previous environment", "warning"), Ce.value = "") : re.state === "critical_failure" && (nt(), xt(), le.value = !1, Pe(`Critical error during switch: ${re.message}`, "error"), Ce.value = "");
        } catch (re) {
          console.error("Failed to poll switch progress:", re);
        }
      }, 1e3));
    }
    function xt() {
      nt(), X && (clearInterval(X), X = null);
    }
    function jo() {
      var re;
      A.value = !1, Ce.value = "", (re = H.value) != null && re.state && H.value.state !== "managed" && (se.value = H.value.state === "no_workspace" ? 1 : 2, we.value = !0);
    }
    async function yo(re) {
      J.value = !1, await Et(), Pe(re.message, re.success ? "success" : "error");
    }
    async function wo() {
      Te.value = !1;
      const re = Pe("Syncing environment...", "info", 0);
      try {
        const j = await b("skip", !0);
        if (Ye(re), j.status === "success") {
          const qe = [];
          j.nodes_installed.length && qe.push(`${j.nodes_installed.length} installed`), j.nodes_removed.length && qe.push(`${j.nodes_removed.length} removed`);
          const et = qe.length ? `: ${qe.join(", ")}` : "";
          Pe(`✓ Environment synced${et}`, "success"), await Et();
        } else {
          const qe = j.errors.length ? j.errors.join("; ") : j.message;
          Pe(`Sync failed: ${qe}`, "error");
        }
      } catch (j) {
        Ye(re), Pe(`Sync error: ${j instanceof Error ? j.message : "Unknown error"}`, "error");
      }
    }
    async function _a(re) {
      var j;
      try {
        const qe = await S(re);
        qe.failed.length === 0 ? Pe(`✓ Repaired ${qe.success} workflow${qe.success === 1 ? "" : "s"}`, "success") : Pe(`Repaired ${qe.success}, failed: ${qe.failed.length}`, "warning"), await Et();
      } catch (qe) {
        Pe(`Repair failed: ${qe instanceof Error ? qe.message : "Unknown error"}`, "error");
      } finally {
        (j = T.value) == null || j.resetRepairingState();
      }
    }
    async function Tn() {
      var j, qe;
      const re = Pe("Repairing environment...", "info", 0);
      try {
        const et = await b("skip", !0);
        if (Ye(re), et.status === "success") {
          const dt = [];
          et.nodes_installed.length && dt.push(`${et.nodes_installed.length} installed`), et.nodes_removed.length && dt.push(`${et.nodes_removed.length} removed`);
          const yt = dt.length ? `: ${dt.join(", ")}` : "";
          Pe(`✓ Environment repaired${yt}`, "success"), (j = T.value) == null || j.closeDetailModal(), await Et();
        } else {
          const dt = et.errors.length ? et.errors.join(", ") : et.message || "Unknown error";
          Pe(`Repair failed: ${dt}`, "error");
        }
      } catch (et) {
        Ye(re), Pe(`Repair error: ${et instanceof Error ? et.message : "Unknown error"}`, "error");
      } finally {
        (qe = T.value) == null || qe.resetRepairingEnvironmentState();
      }
    }
    async function ka(re, j) {
      Pe(`Environment '${re}' created`, "success"), await Et(), ve.value && await ve.value.loadEnvironments(), j && K.value.can_switch_environment && await ne(re);
    }
    async function ba(re) {
      var j;
      if (!K.value.can_delete_environment) {
        Pe("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((j = q.value) == null ? void 0 : j.name) === re) {
        Pe("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      U.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${re}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          U.value = null;
          try {
            const qe = await _(re);
            qe.status === "success" ? (Pe(`Environment "${re}" deleted`, "success"), await Et(), ve.value && await ve.value.loadEnvironments()) : Pe(qe.message || "Failed to delete environment", "error");
          } catch (qe) {
            Pe(`Error deleting environment: ${qe instanceof Error ? qe.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function $a(re, j) {
      we.value = !1;
      try {
        H.value = await C();
      } catch {
      }
      K.value.can_switch_environment && await ne(re, j);
    }
    function Ca() {
      we.value = !1, a("close");
    }
    async function xa(re, j) {
      await ne(re, j);
    }
    async function Sa(re) {
      ie.value = !1, await Et(), await ne(re);
    }
    function Ia() {
      ue.value = null, ie.value = !0;
    }
    function Ea(re) {
      ue.value = re, Y.value = !0;
    }
    function Mn() {
      Y.value = !1, ue.value = null;
    }
    async function Ta(re) {
      H.value = await C(), console.log(`Environment '${re}' created. Available for switching.`);
    }
    function Ma() {
      if (!K.value.can_create_environment) {
        Pe("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      He("environments", "workspace"), setTimeout(() => {
        var re;
        (re = ve.value) == null || re.openCreateModal();
      }, 100);
    }
    function Pn() {
      if (!N.value) return [];
      const re = [], j = N.value.workflows;
      return j.new.length && re.push(`${j.new.length} new workflow(s)`), j.modified.length && re.push(`${j.modified.length} modified workflow(s)`), j.deleted.length && re.push(`${j.deleted.length} deleted workflow(s)`), re;
    }
    return lt(async () => {
      try {
        if (H.value = await C(), H.value.state === "no_workspace" && K.value.can_initialize_workspace) {
          we.value = !0, se.value = 1;
          return;
        }
        if (H.value.state === "empty_workspace" && K.value.can_create_environment) {
          we.value = !0, se.value = 2;
          return;
        }
        if (H.value.state === "unmanaged" && K.value.can_switch_environment) {
          we.value = !0, se.value = 2;
          return;
        }
      } catch (re) {
        console.warn("Setup status check failed, proceeding normally:", re);
      }
      await Promise.all([
        Et({ refreshWorkflows: !1 }),
        It()
      ]);
    }), (re, j) => {
      var qe, et, dt, yt, Ut, is, Ho, z, $e, Ge, mt, Pt, ks;
      return n(), i("div", XT, [
        s("div", ZT, [
          s("div", eM, [
            j[27] || (j[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            N.value ? (n(), i("div", tM)) : y("", !0)
          ]),
          s("div", sM, [
            $(Ec),
            j[30] || (j[30] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Be(["icon-btn", { spinning: ee.value }]),
              onClick: Et,
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
              onClick: j[0] || (j[0] = (Xe) => a("close")),
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
        Ae.value && ze.value ? (n(), L(KT, {
          key: 0,
          info: ze.value,
          updating: be.value,
          onUpdate: Mt,
          onDismiss: Ct,
          onReleaseNotes: Bt
        }, null, 8, ["info", "updating"])) : y("", !0),
        s("div", oM, [
          s("div", nM, [
            j[31] || (j[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", aM, [
              K.value.can_restart_current ? (n(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: ae
              }, " Restart ")) : y("", !0),
              K.value.can_stop_current ? (n(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: O
              }, " Stop ")) : y("", !0)
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: j[1] || (j[1] = (Xe) => He("environments", "workspace"))
          }, [
            N.value ? (n(), i("div", lM, [
              s("span", null, m(((qe = q.value) == null ? void 0 : qe.name) || ((et = N.value) == null ? void 0 : et.environment) || "Loading..."), 1),
              s("span", iM, "(" + m(N.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            j[32] || (j[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", rM, [
          s("div", cM, [
            s("div", uM, [
              s("div", dM, [
                j[33] || (j[33] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "status" && De.value === "this-env" }]),
                  onClick: j[2] || (j[2] = (Xe) => He("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "workflows" }]),
                  onClick: j[3] || (j[3] = (Xe) => He("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "models-env" }]),
                  onClick: j[4] || (j[4] = (Xe) => He("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "nodes" }]),
                  onClick: j[5] || (j[5] = (Xe) => He("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "version-control" }]),
                  onClick: j[6] || (j[6] = (Xe) => Oe("remotes"))
                }, " VERSION CONTROL ", 2)
              ]),
              j[36] || (j[36] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", mM, [
                j[34] || (j[34] = s("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "environments" }]),
                  onClick: j[7] || (j[7] = (Xe) => He("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "model-index" }]),
                  onClick: j[8] || (j[8] = (Xe) => He("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "settings" }]),
                  onClick: j[9] || (j[9] = (Xe) => He("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              j[37] || (j[37] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", fM, [
                j[35] || (j[35] = s("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "diagnostics" && B.value === "manifest" }]),
                  onClick: j[10] || (j[10] = (Xe) => Qe("manifest"))
                }, " MANIFEST ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: Fe.value === "diagnostics" && B.value !== "manifest" }]),
                  onClick: j[11] || (j[11] = (Xe) => Qe("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            s("div", vM, [
              $(Tc)
            ])
          ]),
          s("div", pM, [
            te.value ? (n(), i("div", gM, m(te.value), 1)) : !N.value && Fe.value === "status" ? (n(), i("div", hM, " Loading status... ")) : (n(), i(W, { key: 2 }, [
              Fe.value === "status" ? (n(), L(Wh, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: T,
                status: N.value,
                "setup-state": de.value,
                onSwitchBranch: pt,
                onCommitChanges: j[12] || (j[12] = (Xe) => J.value = !0),
                onSyncEnvironment: j[13] || (j[13] = (Xe) => Te.value = !0),
                onViewWorkflows: j[14] || (j[14] = (Xe) => He("workflows", "this-env")),
                onViewHistory: j[15] || (j[15] = (Xe) => Oe("history")),
                onViewDebug: j[16] || (j[16] = (Xe) => Qe("env")),
                onViewNodes: j[17] || (j[17] = (Xe) => He("nodes", "this-env")),
                onRepairMissingModels: _a,
                onRepairEnvironment: Tn,
                onStartSetup: j[18] || (j[18] = (Xe) => we.value = !0),
                onViewEnvironments: j[19] || (j[19] = (Xe) => He("environments", "workspace")),
                onCreateEnvironment: Ma
              }, null, 8, ["status", "setup-state"])) : Fe.value === "workflows" ? (n(), L(Ob, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: ge,
                onRefresh: Et
              }, null, 512)) : Fe.value === "models-env" ? (n(), L(W2, {
                key: 2,
                onNavigate: Ve
              })) : Fe.value === "version-control" ? (n(), L(qI, {
                key: 3,
                commits: F.value,
                "current-ref": (dt = N.value) == null ? void 0 : dt.branch,
                branches: V.value,
                current: ((yt = N.value) == null ? void 0 : yt.branch) || null,
                "initial-tab": me.value,
                onSelect: js,
                onCheckout: Ls,
                onSwitch: Hs,
                onCreate: qs,
                onDelete: Wo,
                onToast: ot
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : Fe.value === "nodes" ? (n(), L(N$, {
                key: 4,
                "version-mismatches": ((is = (Ut = N.value) == null ? void 0 : Ut.comparison) == null ? void 0 : is.version_mismatches) || [],
                onOpenNodeManager: Q,
                onRepairEnvironment: Tn,
                onToast: ot
              }, null, 8, ["version-mismatches"])) : Fe.value === "diagnostics" ? (n(), L(i6, {
                key: 5,
                "initial-tab": B.value
              }, null, 8, ["initial-tab"])) : Fe.value === "environments" ? (n(), L(Dx, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: ve,
                "can-create": K.value.can_create_environment,
                "can-switch": K.value.can_switch_environment,
                "can-delete": K.value.can_delete_environment,
                onSwitch: ne,
                onCreated: ka,
                onDelete: ba,
                onImport: Ia,
                onExport: Ea
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : Fe.value === "model-index" ? (n(), L(e$, {
                key: 7,
                onRefresh: Et
              })) : Fe.value === "settings" ? (n(), L(rC, { key: 8 })) : y("", !0)
            ], 64))
          ])
        ]),
        Me.value ? (n(), L(x6, {
          key: 1,
          commit: Me.value,
          onClose: j[20] || (j[20] = (Xe) => Me.value = null),
          onCheckout: Ls,
          onCreateBranch: Go
        }, null, 8, ["commit"])) : y("", !0),
        U.value ? (n(), L(Pl, {
          key: 2,
          title: U.value.title,
          message: U.value.message,
          details: U.value.details,
          warning: U.value.warning,
          confirmLabel: U.value.confirmLabel,
          cancelLabel: U.value.cancelLabel,
          secondaryLabel: U.value.secondaryLabel,
          secondaryAction: U.value.secondaryAction,
          destructive: U.value.destructive,
          onConfirm: U.value.onConfirm,
          onCancel: j[21] || (j[21] = (Xe) => U.value = null),
          onSecondary: U.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        ie.value ? (n(), L($t, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: j[22] || (j[22] = (Xe) => ie.value = !1)
        }, {
          body: h(() => [
            $(w5, {
              embedded: "",
              onImportCompleteSwitch: Sa
            })
          ]),
          _: 1
        })) : y("", !0),
        Y.value ? (n(), L($t, {
          key: 4,
          title: ue.value ? `EXPORT ENVIRONMENT: ${ue.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "md",
          onClose: Mn
        }, {
          body: h(() => [
            $(C3, {
              embedded: "",
              "environment-name": ue.value,
              onClose: Mn
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : y("", !0),
        $(vE, {
          show: A.value,
          "from-environment": ((Ho = q.value) == null ? void 0 : Ho.name) || "unknown",
          "to-environment": Ce.value,
          onConfirm: Je,
          onClose: jo
        }, null, 8, ["show", "from-environment", "to-environment"]),
        J.value && N.value ? (n(), L(Ic, {
          key: 5,
          status: N.value,
          "as-modal": !0,
          onClose: j[23] || (j[23] = (Xe) => J.value = !1),
          onCommitted: yo
        }, null, 8, ["status"])) : y("", !0),
        Te.value && N.value ? (n(), L(DE, {
          key: 6,
          show: Te.value,
          "mismatch-details": {
            missing_nodes: N.value.comparison.missing_nodes,
            extra_nodes: N.value.comparison.extra_nodes
          },
          onConfirm: wo,
          onClose: j[24] || (j[24] = (Xe) => Te.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        $(xE, {
          show: le.value,
          state: ke.value.state,
          progress: ke.value.progress,
          message: ke.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        Se.value ? (n(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: j[26] || (j[26] = vt((Xe) => Se.value = !1, ["self"]))
        }, [
          s("div", yM, [
            s("div", wM, [
              j[39] || (j[39] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: j[25] || (j[25] = (Xe) => Se.value = !1)
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
            s("div", _M, [
              j[40] || (j[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", kM, [
                (n(!0), i(W, null, ye(D.value, (Xe) => (n(), i("div", {
                  key: Xe.name,
                  class: Be(["env-item", { current: Xe.is_current }])
                }, [
                  s("div", bM, [
                    s("div", $M, [
                      s("span", CM, m(Xe.is_current ? "●" : "○"), 1),
                      s("span", xM, m(Xe.name), 1),
                      Xe.current_branch ? (n(), i("span", SM, "(" + m(Xe.current_branch) + ")", 1)) : y("", !0),
                      Xe.is_current ? (n(), i("span", IM, "CURRENT")) : y("", !0)
                    ]),
                    s("div", EM, m(Xe.workflow_count) + " workflows • " + m(Xe.node_count) + " nodes ", 1)
                  ]),
                  !Xe.is_current && K.value.can_switch_environment ? (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Kt) => ne(Xe.name)
                  }, " SWITCH ", 8, TM)) : y("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        we.value ? (n(), L(AT, {
          key: 8,
          "default-path": ((z = H.value) == null ? void 0 : z.default_path) || "~/comfygit",
          "detected-models-dir": (($e = H.value) == null ? void 0 : $e.detected_models_dir) || null,
          "initial-step": se.value,
          "existing-environments": ((Ge = H.value) == null ? void 0 : Ge.environments) || [],
          "cli-installed": ((mt = H.value) == null ? void 0 : mt.cli_installed) ?? !0,
          "setup-state": ((Pt = H.value) == null ? void 0 : Pt.state) || "no_workspace",
          "workspace-path": ((ks = H.value) == null ? void 0 : ks.workspace_path) || null,
          onComplete: $a,
          onClose: Ca,
          onSwitchEnvironment: xa,
          onEnvironmentCreatedNoSwitch: Ta
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        s("div", MM, [
          $(lm, { name: "toast" }, {
            default: h(() => [
              (n(!0), i(W, null, ye(Le.value, (Xe) => (n(), i("div", {
                key: Xe.id,
                class: Be(["toast", Xe.type])
              }, [
                s("span", PM, m(Xe.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), LM = /* @__PURE__ */ Ie(RM, [["__scopeId", "data-v-93abae9b"]]), DM = { class: "item-header" }, NM = { class: "item-info" }, UM = { class: "filename" }, OM = { class: "metadata" }, AM = { class: "size" }, zM = {
  key: 0,
  class: "type"
}, FM = { class: "item-actions" }, VM = {
  key: 0,
  class: "progress-section"
}, BM = { class: "progress-bar" }, WM = { class: "progress-stats" }, GM = { class: "downloaded" }, jM = { class: "speed" }, HM = {
  key: 0,
  class: "eta"
}, qM = {
  key: 1,
  class: "status-msg paused"
}, KM = {
  key: 2,
  class: "status-msg queued"
}, JM = {
  key: 3,
  class: "status-msg completed"
}, QM = {
  key: 4,
  class: "status-msg failed"
}, YM = {
  key: 0,
  class: "retries"
}, XM = /* @__PURE__ */ xe({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: t }) {
    const o = t;
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
      class: Be(["download-item", `status-${e.item.status}`])
    }, [
      s("div", DM, [
        s("div", NM, [
          s("div", UM, m(e.item.filename), 1),
          s("div", OM, [
            s("span", AM, m(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", zM, m(e.item.type), 1)) : y("", !0)
          ])
        ]),
        s("div", FM, [
          e.item.status === "queued" || e.item.status === "downloading" ? (n(), i("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (d) => o("cancel")),
            title: "Cancel"
          }, " × ")) : y("", !0),
          e.item.status === "paused" ? (n(), i("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (d) => o("resume")),
            title: "Resume"
          }, " ▶ ")) : y("", !0),
          e.item.status === "failed" ? (n(), i("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (d) => o("retry")),
            title: "Retry"
          }, " ↻ ")) : y("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (n(), i("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (d) => o("remove")),
            title: "Remove"
          }, " × ")) : y("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (n(), i("div", VM, [
        s("div", BM, [
          s("div", {
            class: "progress-fill",
            style: Nt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", WM, [
          s("span", GM, m(a(e.item.downloaded)) + " / " + m(a(e.item.size)), 1),
          s("span", jM, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", HM, m(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", qM, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", KM, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", JM, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", QM, [
        x(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", YM, "(" + m(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Qo = /* @__PURE__ */ Ie(XM, [["__scopeId", "data-v-2110df65"]]), ZM = { class: "queue-title" }, eP = { class: "count" }, tP = { class: "queue-actions" }, sP = { class: "action-label" }, oP = {
  key: 0,
  class: "overall-progress"
}, nP = { class: "progress-bar" }, aP = {
  key: 0,
  class: "current-mini"
}, lP = { class: "filename" }, iP = { class: "speed" }, rP = {
  key: 1,
  class: "queue-content"
}, cP = {
  key: 0,
  class: "section"
}, uP = {
  key: 1,
  class: "section"
}, dP = { class: "section-header" }, mP = { class: "section-label paused" }, fP = { class: "items-list" }, vP = {
  key: 2,
  class: "section"
}, pP = { class: "section-header" }, gP = { class: "section-label" }, hP = { class: "items-list" }, yP = {
  key: 3,
  class: "section"
}, wP = { class: "section-header" }, _P = { class: "section-label" }, kP = { class: "items-list" }, bP = {
  key: 4,
  class: "section"
}, $P = { class: "section-header" }, CP = { class: "section-label failed" }, xP = { class: "items-list" }, SP = /* @__PURE__ */ xe({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: t,
      currentDownload: o,
      queuedItems: a,
      completedItems: l,
      failedItems: r,
      pausedItems: c,
      hasItems: u,
      activeCount: d,
      cancelDownload: v,
      retryDownload: f,
      resumeDownload: p,
      resumeAllPaused: w,
      removeItem: g,
      clearCompleted: _
    } = Bo(), b = k(!1);
    let S = null;
    gt(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (M, N) => {
        S && (clearTimeout(S), S = null);
        const F = M.active === 0 && M.failed === 0 && M.paused === 0 && M.completed > 0, V = N && (N.active > 0 || N.paused > 0);
        F && V && (S = setTimeout(() => {
          _(), S = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = R(() => {
      var F;
      if (t.items.length === 0) return 0;
      const M = l.value.length, N = ((F = o.value) == null ? void 0 : F.progress) || 0;
      return Math.round((M + N / 100) / t.items.length * 100);
    });
    function I(M) {
      v(M);
    }
    function E(M) {
      return M === 0 ? "..." : `${(M / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (M, N) => (n(), L(Zt, { to: "body" }, [
      st(u) ? (n(), i("div", {
        key: 0,
        class: Be(["model-download-queue", { minimized: !b.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: N[0] || (N[0] = (F) => b.value = !b.value)
        }, [
          s("div", ZM, [
            N[4] || (N[4] = s("span", { class: "icon" }, "↓", -1)),
            N[5] || (N[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", eP, "(" + m(st(d)) + "/" + m(st(t).items.length) + ")", 1)
          ]),
          s("div", tP, [
            s("span", sP, m(b.value ? "minimize" : "expand"), 1)
          ])
        ]),
        b.value ? (n(), i("div", rP, [
          st(o) ? (n(), i("div", cP, [
            N[6] || (N[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            $(Qo, {
              item: st(o),
              onCancel: N[1] || (N[1] = (F) => I(st(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          st(c).length > 0 ? (n(), i("div", uP, [
            s("div", dP, [
              s("span", mP, "Paused (" + m(st(c).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: N[2] || (N[2] = //@ts-ignore
                (...F) => st(w) && st(w)(...F))
              }, "Resume All")
            ]),
            s("div", fP, [
              (n(!0), i(W, null, ye(st(c), (F) => (n(), L(Qo, {
                key: F.id,
                item: F,
                onResume: (V) => st(p)(F.id),
                onRemove: (V) => st(g)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          st(a).length > 0 ? (n(), i("div", vP, [
            s("div", pP, [
              s("span", gP, "Queued (" + m(st(a).length) + ")", 1)
            ]),
            s("div", hP, [
              (n(!0), i(W, null, ye(st(a), (F) => (n(), L(Qo, {
                key: F.id,
                item: F,
                onCancel: (V) => I(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          st(l).length > 0 ? (n(), i("div", yP, [
            s("div", wP, [
              s("span", _P, "Completed (" + m(st(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: N[3] || (N[3] = //@ts-ignore
                (...F) => st(_) && st(_)(...F))
              }, "Clear")
            ]),
            s("div", kP, [
              (n(!0), i(W, null, ye(st(l).slice(0, 3), (F) => (n(), L(Qo, {
                key: F.id,
                item: F,
                onRemove: (V) => st(g)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          st(r).length > 0 ? (n(), i("div", bP, [
            s("div", $P, [
              s("span", CP, "Failed (" + m(st(r).length) + ")", 1)
            ]),
            s("div", xP, [
              (n(!0), i(W, null, ye(st(r), (F) => (n(), L(Qo, {
                key: F.id,
                item: F,
                onRetry: (V) => st(f)(F.id),
                onRemove: (V) => st(g)(F.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (n(), i("div", oP, [
          s("div", nP, [
            s("div", {
              class: "progress-fill",
              style: Nt({ width: `${C.value}%` })
            }, null, 4)
          ]),
          st(o) ? (n(), i("div", aP, [
            s("span", lP, m(st(o).filename), 1),
            s("span", iP, m(E(st(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), IP = /* @__PURE__ */ Ie(SP, [["__scopeId", "data-v-3a3c9607"]]), EP = { class: "detail-header" }, TP = { class: "item-count" }, MP = { class: "resource-list" }, PP = { class: "item-info" }, RP = { class: "item-name" }, LP = {
  key: 0,
  class: "item-subtitle"
}, DP = {
  key: 0,
  class: "installing-badge"
}, NP = ["title"], UP = {
  key: 2,
  class: "installed-badge"
}, OP = {
  key: 3,
  class: "queued-badge"
}, AP = {
  key: 4,
  class: "action-buttons"
}, zP = {
  key: 1,
  class: "no-action"
}, FP = /* @__PURE__ */ xe({
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
    const o = e, a = t, l = R(() => o.items.filter((g) => g.canAction)), r = R(() => l.value.length > 0 && l.value.every(
      (g) => {
        var _, b;
        return o.queuedItems.has(g.id) || ((_ = o.installedItems) == null ? void 0 : _.has(g.id)) || ((b = o.failedItems) == null ? void 0 : b.has(g.id));
      }
    )), c = R(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
    function u(g) {
      return o.queuedItems.has(g.id);
    }
    function d(g) {
      return o.installingItem === g.id;
    }
    function v(g) {
      var _;
      return ((_ = o.installedItems) == null ? void 0 : _.has(g.id)) ?? !1;
    }
    function f(g) {
      var _;
      return ((_ = o.failedItems) == null ? void 0 : _.has(g.id)) ?? !1;
    }
    function p(g) {
      var _;
      return ((_ = o.failedItems) == null ? void 0 : _.get(g.id)) || "Unknown error";
    }
    function w(g) {
      return g.actions && g.actions.length > 0 ? g.actions : [{
        key: "default",
        label: o.itemType === "models" ? "Download" : "Install",
        variant: "secondary"
      }];
    }
    return (g, _) => (n(), L($t, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (b) => a("close"))
    }, {
      body: h(() => [
        s("div", EP, [
          s("span", TP, m(e.items.length) + " " + m(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (n(), L(Ue, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: _[0] || (_[0] = (b) => a("bulk-action"))
          }, {
            default: h(() => [
              x(m(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        s("div", MP, [
          (n(!0), i(W, null, ye(e.items, (b) => (n(), i("div", {
            key: b.id,
            class: "resource-item"
          }, [
            s("div", PP, [
              s("span", RP, m(b.name), 1),
              b.subtitle ? (n(), i("span", LP, m(b.subtitle), 1)) : y("", !0)
            ]),
            b.canAction ? (n(), i(W, { key: 0 }, [
              d(b) ? (n(), i("span", DP, "Installing...")) : f(b) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(b)
              }, "Failed ⚠", 8, NP)) : v(b) ? (n(), i("span", UP, "Installed")) : u(b) ? (n(), i("span", OP, "Queued")) : (n(), i("div", AP, [
                (n(!0), i(W, null, ye(w(b), (S) => (n(), L(Ue, {
                  key: `${b.id}-${S.key}`,
                  size: "sm",
                  variant: S.variant || "secondary",
                  onClick: (C) => a("action", b, S.key)
                }, {
                  default: h(() => [
                    x(m(S.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (n(), i("span", zP, m(b.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        $(Ue, {
          variant: "secondary",
          onClick: _[1] || (_[1] = (b) => a("close"))
        }, {
          default: h(() => [..._[3] || (_[3] = [
            x("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), VP = /* @__PURE__ */ Ie(FP, [["__scopeId", "data-v-ec7e9202"]]), BP = {
  key: 0,
  class: "loading-state"
}, WP = {
  key: 1,
  class: "analysis-results"
}, GP = {
  key: 0,
  class: "section"
}, jP = { class: "section-header" }, HP = { class: "section-title" }, qP = { class: "item-list" }, KP = { class: "package-info" }, JP = { class: "package-name" }, QP = { class: "node-count" }, YP = {
  key: 1,
  class: "installing-badge"
}, XP = {
  key: 2,
  class: "queued-badge"
}, ZP = ["title"], e7 = {
  key: 4,
  class: "installed-badge"
}, t7 = {
  key: 1,
  class: "section"
}, s7 = { class: "section-header" }, o7 = { class: "section-title" }, n7 = { class: "item-list" }, a7 = { class: "node-type" }, l7 = {
  key: 0,
  class: "overflow-note"
}, i7 = {
  key: 2,
  class: "section"
}, r7 = { class: "section-header" }, c7 = { class: "section-title" }, u7 = { class: "item-list" }, d7 = { class: "node-type" }, m7 = { class: "not-found" }, f7 = {
  key: 0,
  class: "overflow-note"
}, v7 = {
  key: 3,
  class: "section"
}, p7 = { class: "section-header" }, g7 = { class: "section-title" }, h7 = { class: "item-list" }, y7 = { class: "package-info community-info" }, w7 = { class: "community-title-row" }, _7 = { class: "package-name" }, k7 = { class: "node-count" }, b7 = { class: "community-mapping-note" }, $7 = { key: 0 }, C7 = {
  key: 0,
  class: "community-actions"
}, x7 = {
  key: 1,
  class: "installing-badge"
}, S7 = {
  key: 2,
  class: "queued-badge"
}, I7 = ["title"], E7 = {
  key: 4,
  class: "installed-badge"
}, T7 = ["title"], M7 = {
  key: 1,
  class: "no-url"
}, P7 = {
  key: 4,
  class: "section"
}, R7 = { class: "section-header" }, L7 = { class: "section-title" }, D7 = { class: "item-list" }, N7 = { class: "model-info" }, U7 = { class: "model-name" }, O7 = {
  key: 1,
  class: "queued-badge"
}, A7 = {
  key: 1,
  class: "no-url"
}, z7 = { class: "dont-show-again" }, F7 = 3e4, V7 = /* @__PURE__ */ xe({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = k(!1), o = k(null), a = k(null), l = k(!1), r = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Map()), d = k(/* @__PURE__ */ new Set()), v = k(!1), f = k(null), p = k(0), w = k(null), g = k(/* @__PURE__ */ new Set()), _ = k(/* @__PURE__ */ new Map()), b = k(/* @__PURE__ */ new Map()), { addToQueue: S } = Bo(), { queueNodeInstall: C } = ct(), I = R(() => {
      var Q;
      return ((Q = a.value) == null ? void 0 : Q.package_aliases) || {};
    });
    function E(Q) {
      if (!Q) return null;
      const pe = I.value;
      let P = Q;
      const U = /* @__PURE__ */ new Set();
      for (; pe[P] && !U.has(P); )
        U.add(P), P = pe[P];
      return P;
    }
    function M(Q, pe) {
      return Q instanceof Error && Q.message ? Q.message : typeof Q == "string" && Q.trim().length > 0 ? Q : pe;
    }
    function N(Q) {
      for (const [pe, P] of _.value.entries())
        P === Q && _.value.delete(pe);
    }
    function F(Q) {
      if (!b.value.has(Q)) return;
      const pe = b.value.get(Q);
      clearTimeout(pe), b.value.delete(Q);
    }
    function V() {
      for (const Q of b.value.values())
        clearTimeout(Q);
      b.value = /* @__PURE__ */ new Map();
    }
    function D(Q) {
      F(Q);
      const pe = setTimeout(() => {
        if (b.value.delete(Q), !c.value.has(Q)) return;
        N(Q), c.value.delete(Q), f.value === Q && (f.value = null), u.value.set(Q, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", Q);
      }, F7);
      b.value.set(Q, pe);
    }
    function q(Q) {
      const pe = `Cannot install "${Q.title}" - package_id is missing`;
      u.value.set(Q.item_id, pe), o.value = pe, console.warn("[ComfyGit] Community install requested without package_id:", Q);
    }
    const ue = R(() => ie.value.length > 0 || me.value.length > 0 || oe.value.length > 0 || B.value.length > 0 || ee.value.length > 0), ie = R(() => {
      var P, U;
      if (!((P = a.value) != null && P.nodes)) return [];
      const Q = /* @__PURE__ */ new Map(), pe = (a.value.nodes.resolved || []).filter((J) => {
        var Te;
        return !J.is_installed && ((Te = J.package) == null ? void 0 : Te.package_id);
      });
      for (const J of pe) {
        const Te = E(J.package.package_id);
        if (!Te) continue;
        Q.has(Te) || Q.set(Te, {
          package_id: Te,
          title: J.package.title || Te,
          node_count: 0,
          node_types: [],
          repository: J.package.repository || null,
          latest_version: J.package.latest_version || null
        });
        const Le = Q.get(Te);
        Le.node_count++, Le.node_types.push(((U = J.reference) == null ? void 0 : U.node_type) || J.node_type);
      }
      return Array.from(Q.values());
    }), Y = R(() => ie.value.reduce((Q, pe) => Q + pe.node_count, 0)), me = R(() => {
      var Q;
      return (Q = a.value) != null && Q.nodes ? (a.value.nodes.unresolved || []).map((pe) => {
        var P;
        return {
          node_type: ((P = pe.reference) == null ? void 0 : P.node_type) || pe.node_type
        };
      }) : [];
    }), oe = R(() => {
      var pe;
      if (!((pe = a.value) != null && pe.nodes)) return [];
      const Q = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((P) => {
        var J;
        const U = ((J = P.reference) == null ? void 0 : J.node_type) || P.node_type;
        return {
          node_type: U,
          guidance: P.guidance || Q[U] || null
        };
      });
    }), B = R(() => {
      var P, U, J, Te, Le, Ke, Pe, Ye;
      if (!((P = a.value) != null && P.nodes)) return [];
      const Q = a.value.node_guidance || {}, pe = /* @__PURE__ */ new Map();
      for (const ot of a.value.nodes.uninstallable || []) {
        const It = ((U = ot.reference) == null ? void 0 : U.node_type) || ot.node_type, Bt = E(((J = ot.package) == null ? void 0 : J.package_id) || null), Ct = Bt || `node:${It}`;
        pe.has(Ct) || pe.set(Ct, {
          item_id: Ct,
          node_type: It,
          title: ((Te = ot.package) == null ? void 0 : Te.title) || Bt || It,
          node_count: 0,
          package_id: Bt,
          repository: ((Le = ot.package) == null ? void 0 : Le.repository) || null,
          latest_version: ((Ke = ot.package) == null ? void 0 : Ke.latest_version) || null,
          guidance: ot.guidance || Q[It] || null
        });
        const Mt = pe.get(Ct);
        Mt.node_count++, Mt.guidance || (Mt.guidance = ot.guidance || Q[It] || null), !Mt.repository && ((Pe = ot.package) != null && Pe.repository) && (Mt.repository = ot.package.repository), !Mt.latest_version && ((Ye = ot.package) != null && Ye.latest_version) && (Mt.latest_version = ot.package.latest_version);
      }
      return Array.from(pe.values());
    }), H = R(() => B.value.filter((Q) => !!K(Q))), we = R(() => B.value.length >= 5 ? B.value.slice(0, 4) : B.value), se = R(() => H.value.length > 0 && H.value.every((Q) => {
      const pe = Q.package_id;
      return r.value.has(pe) || c.value.has(pe) || u.value.has(pe);
    }));
    function de(Q) {
      const pe = [];
      return ce(Q) && pe.push({ key: "install_registry", label: "Install from Registry", variant: "secondary" }), Q.repository && pe.push({
        key: "install_git",
        label: "Install via Git",
        variant: ce(Q) ? "ghost" : "secondary"
      }), pe;
    }
    function ce(Q) {
      return !!Q.latest_version;
    }
    function K(Q) {
      return Q.package_id ? ce(Q) ? "registry" : Q.repository ? "git" : null : null;
    }
    const ee = R(() => {
      var J;
      if (!((J = a.value) != null && J.models)) return [];
      const Q = (a.value.models.resolved || []).filter(
        (Te) => Te.match_type === "download_intent" || Te.match_type === "property_download_intent" || Te.match_type === "not_found"
      ).map((Te) => {
        var Le, Ke, Pe, Ye;
        return {
          filename: ((Ke = (Le = Te.reference) == null ? void 0 : Le.widget_value) == null ? void 0 : Ke.split("/").pop()) || ((Pe = Te.reference) == null ? void 0 : Pe.widget_value) || Te.widget_value,
          widget_value: ((Ye = Te.reference) == null ? void 0 : Ye.widget_value) || Te.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: Te.download_source || null,
          targetPath: Te.target_path || null,
          canDownload: !!(Te.download_source && Te.target_path)
        };
      }), pe = (a.value.models.unresolved || []).map((Te) => {
        var Le, Ke, Pe, Ye;
        return {
          filename: ((Ke = (Le = Te.reference) == null ? void 0 : Le.widget_value) == null ? void 0 : Ke.split("/").pop()) || ((Pe = Te.reference) == null ? void 0 : Pe.widget_value) || Te.widget_value,
          widget_value: ((Ye = Te.reference) == null ? void 0 : Ye.widget_value) || Te.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), P = /* @__PURE__ */ new Map(), U = [];
      for (const Te of Q) {
        if (!Te.url) {
          U.push(Te);
          continue;
        }
        const Le = `${Te.filename}::${Te.url}`, Ke = P.get(Le);
        if (!Ke) {
          P.set(Le, Te);
          continue;
        }
        !Ke.targetPath && Te.targetPath && (Ke.targetPath = Te.targetPath), !Ke.canDownload && Te.canDownload && (Ke.canDownload = Te.canDownload);
      }
      return [...P.values(), ...U, ...pe];
    }), te = R(() => ee.value.filter((Q) => Q.canDownload)), Me = R(() => ie.value.length >= 5 ? ie.value.slice(0, 4) : ie.value), Se = R(() => ee.value.length >= 5 ? ee.value.slice(0, 4) : ee.value), ze = R(() => ie.value.length > 0 && ie.value.every(
      (Q) => r.value.has(Q.package_id) || c.value.has(Q.package_id) || u.value.has(Q.package_id)
    )), Ne = R(() => te.value.length > 0 && te.value.every((Q) => d.value.has(Q.url))), be = R(() => ie.value.length > 0 || H.value.length > 0 || te.value.length > 0), Ae = R(() => {
      const Q = (ie.value.length === 0 || ze.value) && (H.value.length === 0 || se.value), pe = te.value.length === 0 || Ne.value;
      return Q && pe;
    }), ge = R(() => w.value === "models" ? `Missing Models (${ee.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${Y.value})` : w.value === "community" ? `Community-Mapped Packages (${B.value.length})` : ""), ve = R(() => w.value === "models" ? ee.value.map((Q) => ({
      id: Q.url || Q.widget_value,
      name: Q.filename,
      canAction: Q.canDownload,
      actionDisabledReason: Q.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? ie.value.map((Q) => ({
      id: Q.package_id,
      name: Q.title,
      subtitle: `(${Q.node_count} ${Q.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : w.value === "community" ? B.value.map((Q) => ({
      id: Q.package_id || Q.item_id,
      name: Q.title,
      subtitle: `(${Q.node_count} ${Q.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!K(Q),
      actionDisabledReason: K(Q) ? void 0 : "Manual setup required",
      actions: de(Q)
    })) : []);
    function T(Q, pe) {
      if (w.value === "models") {
        const P = ee.value.find((U) => U.url === Q.id || U.widget_value === Q.id);
        P && ke(P);
      } else if (w.value === "packages") {
        const P = ie.value.find((U) => U.package_id === Q.id);
        P && le(P);
      } else if (w.value === "community") {
        const P = B.value.find((J) => (J.package_id || J.item_id) === Q.id);
        if (!P) return;
        if (!P.package_id) {
          q({ item_id: P.item_id, title: P.title });
          return;
        }
        const U = pe === "install_git" ? "git" : "registry";
        if (U === "registry" && !ce(P)) {
          q({ item_id: P.item_id, title: P.title });
          return;
        }
        Ce(P, U);
      }
    }
    function A() {
      w.value === "models" ? fe() : w.value === "packages" ? X() : w.value === "community" && G();
    }
    async function le(Q) {
      return Ee(Q.package_id, Q.latest_version, "registry");
    }
    async function Ce(Q, pe) {
      return Q.package_id ? pe === "registry" && !ce(Q) ? (u.value.set(Q.package_id, "No installable registry version is available. Use Git install if a repository is available."), !1) : pe === "git" && !Q.repository ? (u.value.set(Q.package_id, "No Git repository is available for this community mapping."), !1) : Ee(Q.package_id, Q.latest_version, pe, Q.repository) : (q({ item_id: Q.item_id, title: Q.title }), !1);
    }
    async function Ee(Q, pe, P, U) {
      const J = E(Q) || Q, Te = pe || "latest";
      if (r.value.has(J) || c.value.has(J) || u.value.has(J))
        return !0;
      Qe(), f.value = J;
      let Le = null;
      try {
        const Ke = {
          id: J,
          version: Te,
          selected_version: Te,
          mode: "remote",
          channel: "default"
        };
        P === "git" && U && (Ke.repository = U, Ke.install_source = "git");
        const { ui_id: Pe } = await C(Ke, {
          beforeQueueStart: (Ye) => {
            Le = Ye, _.value.set(Ye, J), c.value.add(J), D(J), console.log("[ComfyGit] Registered pending install:", {
              ui_id: Ye,
              packageId: J,
              pendingInstalls: Array.from(_.value.entries())
            });
          }
        });
        return Le || (Le = Pe, _.value.set(Pe, J), c.value.add(J), D(J), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: Pe,
          packageId: J,
          pendingInstalls: Array.from(_.value.entries())
        })), !0;
      } catch (Ke) {
        const Pe = M(Ke, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", Ke), Le && _.value.delete(Le), N(J), F(J), c.value.delete(J), u.value.set(J, Pe), !1;
      } finally {
        f.value = null;
      }
    }
    function ke(Q) {
      !Q.url || !Q.targetPath || d.value.has(Q.url) || (S([{
        workflow: "unsaved",
        filename: Q.filename,
        url: Q.url,
        targetPath: Q.targetPath
      }]), d.value.add(Q.url));
    }
    async function X() {
      const Q = { attempted: 0, failed: 0 };
      for (const pe of ie.value)
        !r.value.has(pe.package_id) && !c.value.has(pe.package_id) && !u.value.has(pe.package_id) && (Q.attempted++, await le(pe) || Q.failed++);
      return Q;
    }
    async function G() {
      const Q = { attempted: 0, failed: 0 };
      for (const pe of H.value) {
        const P = pe.package_id;
        if (!r.value.has(P) && !c.value.has(P) && !u.value.has(P)) {
          Q.attempted++;
          const U = K(pe);
          (U ? await Ce(pe, U) : !1) || Q.failed++;
        }
      }
      return Q;
    }
    function fe() {
      const Q = te.value.filter(
        (pe) => !d.value.has(pe.url)
      );
      if (Q.length === 0) return 0;
      S(Q.map((pe) => ({
        workflow: "unsaved",
        filename: pe.filename,
        url: pe.url,
        targetPath: pe.targetPath
      })));
      for (const pe of Q)
        d.value.add(pe.url);
      return Q.length;
    }
    async function he() {
      const Q = await X(), pe = await G();
      fe();
      const P = Q.attempted + pe.attempted, U = Q.failed + pe.failed;
      if (P > 0 && U > 0) {
        const J = P - U;
        o.value = `${J} of ${P} installs queued, ${U} failed`;
      }
    }
    function je() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function We(Q) {
      var J, Te;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const pe = Q == null ? void 0 : Q.id;
      if (pe && g.value.has(pe)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${pe} this session`);
        return;
      }
      const P = window.app, U = (J = P == null ? void 0 : P.extensionManager) == null ? void 0 : J.workflow;
      if (U) {
        let Pe = !1;
        for (let Ye = 0; Ye < 20; Ye++) {
          const ot = U.activeWorkflow;
          if (!ot) {
            await new Promise((Ct) => setTimeout(Ct, 50));
            continue;
          }
          const It = (Te = ot.activeState) == null ? void 0 : Te.id;
          if (!(pe && It === pe)) {
            Ye < 19 && await new Promise((Ct) => setTimeout(Ct, 50));
            continue;
          }
          if (Pe = !0, ot.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${ot.filename}`), pe && g.value.add(pe);
            return;
          }
          break;
        }
        Pe || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      t.value = !0, o.value = null, V(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), v.value = !1, p.value = 0;
      try {
        const Le = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: Q, name: "unsaved" })
        });
        if (!Le.ok) {
          const Ke = await Le.json();
          throw new Error(Ke.error || "Failed to analyze workflow");
        }
        a.value = await Le.json(), ue.value && (l.value = !0, pe && g.value.add(pe));
      } catch (Le) {
        console.error("[ComfyGit] Failed to analyze workflow:", Le);
      } finally {
        t.value = !1;
      }
    }
    function _e() {
      V(), l.value = !1, a.value = null;
    }
    function Z(Q) {
      const { workflow: pe } = Q.detail;
      pe && We(pe);
    }
    function Fe(Q) {
      var U;
      const pe = (U = Q.detail) == null ? void 0 : U.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: pe,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: Q.detail
      });
      const P = _.value.get(pe);
      P ? (F(P), f.value = P, console.log("[ComfyGit] Installing package:", P)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", pe);
    }
    function De(Q) {
      var J, Te, Le, Ke, Pe, Ye, ot;
      const pe = (J = Q.detail) == null ? void 0 : J.ui_id, P = (Le = (Te = Q.detail) == null ? void 0 : Te.status) == null ? void 0 : Le.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: pe,
        status: P,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: Q.detail
      });
      const U = _.value.get(pe);
      if (U) {
        if (F(U), _.value.delete(pe), c.value.delete(U), f.value === U && (f.value = null), P === "success")
          r.value.add(U), p.value++, console.log("[ComfyGit] Package installed successfully:", U);
        else {
          const It = ((Ye = (Pe = (Ke = Q.detail) == null ? void 0 : Ke.status) == null ? void 0 : Pe.messages) == null ? void 0 : Ye[0]) || ((ot = Q.detail) == null ? void 0 : ot.result) || "Unknown error";
          u.value.set(U, It), console.error("[ComfyGit] Package install failed:", U, It);
        }
        _.value.size === 0 && p.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", p.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: p.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", pe);
    }
    let He = null;
    function Ve() {
      return He || (He = Vo()), He;
    }
    let Oe = !1;
    function Qe() {
      if (Oe) return !0;
      const Q = Ve();
      return Q ? (Q.addEventListener("cm-task-started", Fe), Q.addEventListener("cm-task-completed", De), Q.addEventListener("comfygit:workflow-changed", pt), Oe = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function pt(Q) {
      const { change_type: pe } = Q.detail;
      (pe === "created" || pe === "modified") && l.value && (V(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return lt(() => {
      window.addEventListener("comfygit:workflow-loaded", Z);
    }), zo(() => {
      if (V(), window.removeEventListener("comfygit:workflow-loaded", Z), Oe) {
        const Q = Ve();
        Q && (Q.removeEventListener("cm-task-started", Fe), Q.removeEventListener("cm-task-completed", De), Q.removeEventListener("comfygit:workflow-changed", pt)), Oe = !1;
      }
    }), (Q, pe) => (n(), i(W, null, [
      l.value ? (n(), L($t, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: t.value,
        error: o.value || void 0,
        onClose: _e
      }, {
        body: h(() => [
          t.value ? (n(), i("div", BP, [...pe[5] || (pe[5] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && ue.value ? (n(), i("div", WP, [
            ie.value.length > 0 ? (n(), i("div", GP, [
              s("div", jP, [
                s("span", HP, "Missing Custom Nodes (" + m(Y.value) + ")", 1),
                ie.value.length > 1 ? (n(), L(Ue, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: ze.value,
                  onClick: X
                }, {
                  default: h(() => [
                    x(m(ze.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", qP, [
                (n(!0), i(W, null, ye(Me.value, (P) => (n(), i("div", {
                  key: P.package_id,
                  class: "package-item"
                }, [
                  s("div", KP, [
                    s("span", JP, m(P.title), 1),
                    s("span", QP, "(" + m(P.node_count) + " " + m(P.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(P.package_id) && !c.value.has(P.package_id) && !u.value.has(P.package_id) ? (n(), L(Ue, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: f.value === P.package_id,
                    onClick: (U) => le(P)
                  }, {
                    default: h(() => [
                      x(m(f.value === P.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : f.value === P.package_id ? (n(), i("span", YP, "Installing...")) : c.value.has(P.package_id) ? (n(), i("span", XP, "Queued")) : u.value.has(P.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(P.package_id)
                  }, "Failed ⚠", 8, ZP)) : (n(), i("span", e7, "Installed"))
                ]))), 128)),
                ie.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: pe[0] || (pe[0] = (P) => w.value = "packages")
                }, [
                  s("span", null, "Show all " + m(ie.value.length) + " packages...", 1),
                  pe[6] || (pe[6] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            me.value.length > 0 ? (n(), i("div", t7, [
              s("div", s7, [
                s("span", o7, "Unknown Nodes (" + m(me.value.length) + ")", 1)
              ]),
              s("div", n7, [
                (n(!0), i(W, null, ye(me.value.slice(0, 5), (P) => (n(), i("div", {
                  key: P.node_type,
                  class: "item"
                }, [
                  s("code", a7, m(P.node_type), 1),
                  pe[7] || (pe[7] = s("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                me.value.length > 5 ? (n(), i("div", l7, " ...and " + m(me.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            oe.value.length > 0 ? (n(), i("div", i7, [
              s("div", r7, [
                s("span", c7, "Requires Newer ComfyUI (" + m(oe.value.length) + ")", 1)
              ]),
              s("div", u7, [
                (n(!0), i(W, null, ye(oe.value.slice(0, 5), (P) => (n(), i("div", {
                  key: `vg-${P.node_type}`,
                  class: "item"
                }, [
                  s("code", d7, m(P.node_type), 1),
                  s("span", m7, m(P.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                oe.value.length > 5 ? (n(), i("div", f7, " ...and " + m(oe.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            B.value.length > 0 ? (n(), i("div", v7, [
              s("div", p7, [
                s("span", g7, "Community-Mapped Packages (" + m(B.value.length) + ")", 1),
                H.value.length > 1 ? (n(), L(Ue, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: se.value,
                  onClick: G
                }, {
                  default: h(() => [
                    x(m(se.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", h7, [
                (n(!0), i(W, null, ye(we.value, (P) => (n(), i("div", {
                  key: `community-${P.item_id}`,
                  class: "package-item"
                }, [
                  s("div", y7, [
                    s("div", w7, [
                      s("span", _7, m(P.title), 1),
                      s("span", k7, "(" + m(P.node_count) + " " + m(P.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    s("div", b7, [
                      pe[8] || (pe[8] = x(" Found via community mapping — registry metadata may be incomplete", -1)),
                      P.guidance ? (n(), i("span", $7, ". " + m(P.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  P.package_id ? (n(), i(W, { key: 0 }, [
                    !r.value.has(P.package_id) && !c.value.has(P.package_id) && !u.value.has(P.package_id) ? (n(), i("div", C7, [
                      ce(P) ? (n(), L(Ue, {
                        key: 0,
                        size: "sm",
                        variant: "secondary",
                        disabled: f.value === P.package_id,
                        onClick: (U) => Ce(P, "registry")
                      }, {
                        default: h(() => [
                          x(m(f.value === P.package_id ? "Queueing..." : "Install from Registry"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"])) : y("", !0),
                      P.repository ? (n(), L(Ue, {
                        key: 1,
                        size: "sm",
                        variant: ce(P) ? "ghost" : "secondary",
                        disabled: f.value === P.package_id,
                        onClick: (U) => Ce(P, "git")
                      }, {
                        default: h(() => [...pe[9] || (pe[9] = [
                          x(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["variant", "disabled", "onClick"])) : y("", !0)
                    ])) : f.value === P.package_id ? (n(), i("span", x7, "Installing...")) : c.value.has(P.package_id) ? (n(), i("span", S7, "Queued")) : u.value.has(P.package_id) ? (n(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get(P.package_id)
                    }, "Failed ⚠", 8, I7)) : (n(), i("span", E7, "Installed"))
                  ], 64)) : (n(), i(W, { key: 1 }, [
                    u.value.has(P.item_id) ? (n(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: u.value.get(P.item_id)
                    }, "Failed ⚠", 8, T7)) : (n(), i("span", M7, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                B.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: pe[1] || (pe[1] = (P) => w.value = "community")
                }, [
                  s("span", null, "Show all " + m(B.value.length) + " packages...", 1),
                  pe[10] || (pe[10] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            ee.value.length > 0 ? (n(), i("div", P7, [
              s("div", R7, [
                s("span", L7, "Missing Models (" + m(ee.value.length) + ")", 1),
                te.value.length > 1 ? (n(), L(Ue, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: Ne.value,
                  onClick: fe
                }, {
                  default: h(() => [
                    x(m(Ne.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", D7, [
                (n(!0), i(W, null, ye(Se.value, (P) => (n(), i("div", {
                  key: P.widget_value,
                  class: "model-item"
                }, [
                  s("div", N7, [
                    s("span", U7, m(P.filename), 1)
                  ]),
                  P.canDownload ? (n(), i(W, { key: 0 }, [
                    d.value.has(P.url) ? (n(), i("span", O7, "Queued")) : (n(), L(Ue, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (U) => ke(P)
                    }, {
                      default: h(() => [...pe[11] || (pe[11] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", A7, "Manual download required"))
                ]))), 128)),
                ee.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: pe[2] || (pe[2] = (P) => w.value = "models")
                }, [
                  s("span", null, "Show all " + m(ee.value.length) + " models...", 1),
                  pe[12] || (pe[12] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            s("div", z7, [
              $(la, {
                modelValue: v.value,
                "onUpdate:modelValue": [
                  pe[3] || (pe[3] = (P) => v.value = P),
                  je
                ]
              }, {
                default: h(() => [...pe[13] || (pe[13] = [
                  x(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : y("", !0)
        ]),
        footer: h(() => [
          $(Ue, {
            variant: "secondary",
            onClick: _e
          }, {
            default: h(() => [...pe[14] || (pe[14] = [
              x("Dismiss", -1)
            ])]),
            _: 1
          }),
          be.value ? (n(), L(Ue, {
            key: 0,
            variant: "primary",
            disabled: Ae.value,
            onClick: he
          }, {
            default: h(() => [
              x(m(Ae.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      w.value ? (n(), L(VP, {
        key: 1,
        title: ge.value,
        items: ve.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : c.value,
        "installed-items": w.value === "models" ? void 0 : r.value,
        "failed-items": w.value === "models" ? void 0 : u.value,
        "installing-item": w.value === "models" ? void 0 : f.value,
        onClose: pe[4] || (pe[4] = (P) => w.value = null),
        onAction: T,
        onBulkAction: A
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), B7 = /* @__PURE__ */ Ie(V7, [["__scopeId", "data-v-4e0ac755"]]), W7 = {
  key: 0,
  class: "io-mapping-root"
}, G7 = { class: "io-mapping-visual-layer" }, j7 = { class: "io-mapping-header" }, H7 = { class: "io-mapping-header-main" }, q7 = { class: "io-mapping-subtitle" }, K7 = {
  key: 0,
  class: "io-mapping-hover-summary"
}, J7 = { class: "io-mapping-header-actions" }, Q7 = { class: "io-mapping-sidebar" }, Y7 = { class: "io-mapping-sidebar-scroll" }, X7 = {
  key: 0,
  class: "io-state-block"
}, Z7 = {
  key: 1,
  class: "io-state-block io-state-error"
}, eR = { class: "contract-meta-section" }, tR = { class: "contract-meta-toggle-icon" }, sR = {
  key: 0,
  class: "contract-meta-body"
}, oR = { class: "contract-summary" }, nR = { class: "summary-pill" }, aR = { class: "summary-pill" }, lR = { class: "summary-pill" }, iR = { class: "mapping-section" }, rR = { class: "section-header" }, cR = {
  key: 0,
  class: "empty-message"
}, uR = ["onClick"], dR = { class: "item-card-title" }, mR = { class: "item-card-meta" }, fR = { class: "item-card-summary" }, vR = { key: 0 }, pR = { class: "mapping-section" }, gR = { class: "section-header" }, hR = {
  key: 0,
  class: "empty-message"
}, yR = ["onClick"], wR = { class: "item-card-title" }, _R = { class: "item-card-meta" }, kR = { class: "item-card-summary" }, bR = { class: "io-mapping-footer" }, $R = { class: "io-mapping-footer-left" }, CR = { class: "io-mapping-footer-right" }, xR = /* @__PURE__ */ xe({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: o, saveWorkflowContract: a, deleteWorkflowContract: l } = ct(), r = k(!1), c = k(""), u = k(!1), d = k(!1), v = k(!1), f = k(null), p = k(null), w = k(null), g = k(!1), _ = k(!1), b = k(null), S = k(null), C = k(0), I = k(null), E = k(null);
    let M = null;
    const N = [
      "string",
      "integer",
      "number",
      "boolean",
      "enum",
      "image",
      "video",
      "audio",
      "file"
    ], F = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], V = R(() => {
      var P;
      return ((P = p.value) == null ? void 0 : P.contract_summary.has_contract) === !0;
    }), D = R(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const P = w.value.default_contract || "default";
      return w.value.contracts[P] || (w.value.contracts[P] = { inputs: [], outputs: [] }), w.value.contracts[P];
    }), q = R(() => {
      var U;
      const P = ((U = p.value) == null ? void 0 : U.contract_summary.status) ?? "none";
      return P === "valid" ? "Valid Contract" : P === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function ue(P) {
      return P ? JSON.parse(JSON.stringify(P)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function ie(P) {
      return P === "integer" || P === "number";
    }
    function Y(P) {
      return P === "enum";
    }
    function me(P) {
      return P == null ? "" : String(P);
    }
    function oe(P) {
      const U = P.trim();
      if (!U) return;
      const J = Number(U);
      return Number.isFinite(J) ? J : void 0;
    }
    function B(P) {
      return (P || []).join(`
`);
    }
    function H(P) {
      return P.split(/[\n,]/).map((U) => U.trim()).filter(Boolean);
    }
    function we(P) {
      return typeof P == "string" ? P.length > 24 ? `${P.slice(0, 24)}...` : P : String(P);
    }
    function se(P) {
      return P == null ? "" : String(P);
    }
    function de(P) {
      var J;
      const U = (J = P == null ? void 0 : P.options) == null ? void 0 : J.values;
      return Array.isArray(U) ? U.map((Te) => String(Te)).filter(Boolean) : [];
    }
    function ce(P, U) {
      var Le;
      const J = (Le = P == null ? void 0 : P.options) == null ? void 0 : Le[U];
      if (J == null || J === "") return;
      const Te = Number(J);
      return Number.isFinite(Te) ? Te : void 0;
    }
    function K(P, U) {
      return P.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || U;
    }
    function ee(P) {
      if (!w.value) return;
      const U = P.trim() || "default";
      w.value.default_contract = U, w.value.contracts[U] || (w.value.contracts[U] = { inputs: [], outputs: [] });
    }
    function te(P) {
      const U = String(P ?? "").toLowerCase();
      return U.includes("image") ? "image" : U.includes("video") ? "video" : U.includes("audio") ? "audio" : U.includes("int") ? "integer" : U.includes("float") || U.includes("double") || U.includes("number") ? "number" : U.includes("bool") ? "boolean" : U.includes("combo") || U.includes("enum") ? "enum" : U.includes("string") || U.includes("text") ? "string" : "file";
    }
    function Me(P) {
      D.value.inputs.splice(P, 1), b.value === P && (b.value = null);
    }
    function Se(P) {
      D.value.outputs.splice(P, 1), S.value === P && (S.value = null);
    }
    function ze(P) {
      b.value = b.value === P ? null : P, b.value != null && (S.value = null);
    }
    function Ne(P) {
      S.value = S.value === P ? null : P, S.value != null && (b.value = null);
    }
    function be(P) {
      const U = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(P)) : String(P);
      return document.querySelector(`[data-node-id="${U}"]`);
    }
    function Ae(P) {
      return P instanceof Element ? !!P.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function ge(P) {
      var Te, Le, Ke, Pe, Ye, ot;
      if (!(P instanceof Element)) return null;
      const U = P.closest("[data-node-id]"), J = U == null ? void 0 : U.getAttribute("data-node-id");
      return J ? ((Ke = (Le = (Te = t.comfyApp) == null ? void 0 : Te.graph) == null ? void 0 : Le.getNodeById) == null ? void 0 : Ke.call(Le, J)) ?? ((ot = (Ye = (Pe = t.comfyApp) == null ? void 0 : Pe.rootGraph) == null ? void 0 : Ye.getNodeById) == null ? void 0 : ot.call(Ye, J)) ?? null : null;
    }
    function ve(P, U) {
      if (U == null || U < 0) return null;
      const J = be(P);
      return J ? J.querySelectorAll('[data-testid="node-widget"]')[U] ?? null : null;
    }
    function T(P) {
      return !P || P.width <= 0 || P.height <= 0 ? null : {
        left: `${P.left}px`,
        top: `${P.top}px`,
        width: `${P.width}px`,
        height: `${P.height}px`
      };
    }
    function A(P) {
      const U = be((P == null ? void 0 : P.id) ?? "");
      if (U) return U.getBoundingClientRect();
      const J = t.comfyApp;
      if (!P || typeof (J == null ? void 0 : J.canvasPosToClientPos) != "function") return null;
      const Le = J.canvasPosToClientPos([P.pos[0], P.pos[1] - 32]), Ke = J.canvasPosToClientPos([P.pos[0] + P.size[0], P.pos[1] + P.size[1]]);
      return !Le || !Ke ? null : new DOMRect(Le[0], Le[1], Ke[0] - Le[0], Ke[1] - Le[1]);
    }
    function le(P) {
      var Ye, ot, It, Bt, Ct, Mt, os;
      const U = ve(P.node_id, P.widget_idx);
      if (U) return U.getBoundingClientRect();
      const J = ((It = (ot = (Ye = t.comfyApp) == null ? void 0 : Ye.graph) == null ? void 0 : ot.getNodeById) == null ? void 0 : It.call(ot, String(P.node_id))) ?? ((Mt = (Ct = (Bt = t.comfyApp) == null ? void 0 : Bt.rootGraph) == null ? void 0 : Ct.getNodeById) == null ? void 0 : Mt.call(Ct, String(P.node_id)));
      if (!J || typeof P.widget_idx != "number" || !Array.isArray(J.widgets)) return null;
      const Te = J.widgets[P.widget_idx];
      if (!Te || typeof ((os = t.comfyApp) == null ? void 0 : os.canvasPosToClientPos) != "function") return A(J);
      const Le = 10, Ke = t.comfyApp.canvasPosToClientPos([J.pos[0] + Le, J.pos[1] + (Te.y ?? 0)]), Pe = t.comfyApp.canvasPosToClientPos([J.pos[0] + J.size[0] - Le, J.pos[1] + (Te.y ?? 0) + (Te.computedHeight ?? 24)]);
      return !Ke || !Pe ? A(J) : new DOMRect(Ke[0], Ke[1], Pe[0] - Ke[0], Pe[1] - Ke[1]);
    }
    function Ce(P) {
      var J, Te, Le, Ke, Pe, Ye;
      const U = ((Le = (Te = (J = t.comfyApp) == null ? void 0 : J.graph) == null ? void 0 : Te.getNodeById) == null ? void 0 : Le.call(Te, String(P.node_id))) ?? ((Ye = (Pe = (Ke = t.comfyApp) == null ? void 0 : Ke.rootGraph) == null ? void 0 : Pe.getNodeById) == null ? void 0 : Ye.call(Pe, String(P.node_id)));
      return A(U);
    }
    const Ee = R(() => (C.value, D.value.inputs.map((P, U) => {
      const J = T(le(P));
      return J ? {
        key: `input-${U}-${P.node_id}-${P.widget_idx ?? "na"}`,
        style: J,
        active: b.value === U
      } : null;
    }).filter((P) => !!P))), ke = R(() => (C.value, D.value.outputs.map((P, U) => {
      const J = T(Ce(P));
      return J ? {
        key: `output-${U}-${P.node_id}-${P.selector ?? "primary"}`,
        style: J,
        active: S.value === U
      } : null;
    }).filter((P) => !!P)));
    function X(P) {
      var It, Bt, Ct, Mt, os, Et, js, Ls, Hs, qs;
      if (Ae(P.target)) return null;
      const U = (It = t.comfyApp) == null ? void 0 : It.canvas;
      if (!U) return null;
      const J = (Bt = U.convertEventToCanvasOffset) == null ? void 0 : Bt.call(U, P);
      if (!J || J.length < 2) return null;
      const [Te, Le] = J, Ke = U.graph || ((Ct = t.comfyApp) == null ? void 0 : Ct.graph) || ((Mt = t.comfyApp) == null ? void 0 : Mt.rootGraph), Pe = ((os = Ke == null ? void 0 : Ke.getNodeOnPos) == null ? void 0 : os.call(Ke, Te, Le, U.visible_nodes)) || ((Et = U.getNodeOnPos) == null ? void 0 : Et.call(U, Te, Le)) || ge(P.target);
      if (!Pe) return null;
      const Ye = (js = Pe.getWidgetOnPos) == null ? void 0 : js.call(Pe, Te, Le, !0);
      if (Ye)
        return { kind: "input", node: Pe, widget: Ye, canvasX: Te, canvasY: Le };
      const ot = ((Ls = Pe.getOutputOnPos) == null ? void 0 : Ls.call(Pe, [Te, Le])) || ((qs = (Hs = Pe.constructor) == null ? void 0 : Hs.nodeData) != null && qs.output_node ? { name: Pe.title || Pe.type || "output", type: "image" } : null);
      return ot ? { kind: "output", node: Pe, output: ot, canvasX: Te, canvasY: Le } : null;
    }
    function G(P, U) {
      var Ye;
      const J = Array.isArray(P.widgets) ? P.widgets.indexOf(U) : -1, Te = D.value.inputs.findIndex(
        (ot) => String(ot.node_id) === String(P.id) && ot.widget_idx === J
      );
      if (Te >= 0) {
        b.value = Te;
        return;
      }
      const Le = typeof ((Ye = U == null ? void 0 : U.options) == null ? void 0 : Ye.property) == "string" ? U.options.property : void 0, Ke = (U == null ? void 0 : U.name) || Le || "input", Pe = {
        name: K(String(Ke), `input_${D.value.inputs.length + 1}`),
        display_name: String((U == null ? void 0 : U.name) || Le || `Input ${D.value.inputs.length + 1}`),
        type: te(U == null ? void 0 : U.type),
        node_id: String(P.id),
        widget_idx: J >= 0 ? J : void 0,
        field_key: Le,
        required: !0,
        default: (U == null ? void 0 : U.value) ?? ""
      };
      ie(Pe.type) && (Pe.min = ce(U, "min"), Pe.max = ce(U, "max")), Y(Pe.type) && (Pe.enum_values = de(U)), D.value.inputs.push(Pe), b.value = D.value.inputs.length - 1, S.value = null;
    }
    function fe(P, U) {
      const J = Array.isArray(P.outputs) ? P.outputs.indexOf(U) : -1, Te = J >= 0 ? `slot:${J}` : "primary", Le = D.value.outputs.findIndex(
        (Pe) => String(Pe.node_id) === String(P.id) && (Pe.selector || "primary") === Te
      );
      if (Le >= 0) {
        S.value = Le;
        return;
      }
      const Ke = {
        name: K(String((U == null ? void 0 : U.name) || "output"), `output_${D.value.outputs.length + 1}`),
        display_name: String((U == null ? void 0 : U.name) || `Output ${D.value.outputs.length + 1}`),
        type: te(U == null ? void 0 : U.type),
        node_id: String(P.id),
        selector: Te
      };
      D.value.outputs.push(Ke), S.value = D.value.outputs.length - 1, b.value = null;
    }
    function he(P) {
      var Te, Le, Ke;
      if (!r.value) {
        I.value = null, E.value = null;
        return;
      }
      const U = X(P);
      if (!U) {
        I.value = null, E.value = null;
        return;
      }
      if (U.kind === "input") {
        const Pe = Array.isArray(U.node.widgets) ? U.node.widgets.indexOf(U.widget) : -1, Ye = T(((Te = ve(U.node.id, Pe)) == null ? void 0 : Te.getBoundingClientRect()) ?? le({
          node_id: String(U.node.id),
          widget_idx: Pe >= 0 ? Pe : void 0
        }));
        if (!Ye) {
          I.value = null, E.value = null;
          return;
        }
        I.value = {
          kind: "input",
          label: `${((Le = U.widget) == null ? void 0 : Le.name) || "widget"} · Node ${U.node.id}`
        }, E.value = { kind: "input", style: Ye };
        return;
      }
      const J = T(A(U.node));
      if (!J) {
        I.value = null, E.value = null;
        return;
      }
      I.value = {
        kind: "output",
        label: `${((Ke = U.output) == null ? void 0 : Ke.name) || U.node.title || U.node.type || "output"} · Node ${U.node.id}`
      }, E.value = { kind: "output", style: J };
    }
    function je(P) {
      var Te, Le, Ke;
      if (!r.value || !w.value || P.button !== 0) return;
      const U = X(P);
      if (!U) return;
      const J = (Te = t.comfyApp) == null ? void 0 : Te.canvas;
      if (J) {
        if (U.kind === "input") {
          P.preventDefault(), P.stopImmediatePropagation(), P.stopPropagation(), Array.isArray(J.graph_mouse) && (J.graph_mouse[0] = U.canvasX, J.graph_mouse[1] = U.canvasY), (Le = J.selectNode) == null || Le.call(J, U.node, !1), G(U.node, U.widget);
          return;
        }
        P.preventDefault(), P.stopImmediatePropagation(), P.stopPropagation(), Array.isArray(J.graph_mouse) && (J.graph_mouse[0] = U.canvasX, J.graph_mouse[1] = U.canvasY), (Ke = J.selectNode) == null || Ke.call(J, U.node, !1), fe(U.node, U.output);
      }
    }
    function We() {
      document.addEventListener("pointerdown", je, !0), document.addEventListener("pointermove", he, !0);
    }
    function _e() {
      document.removeEventListener("pointerdown", je, !0), document.removeEventListener("pointermove", he, !0);
    }
    async function Z() {
      if (c.value) {
        u.value = !0, f.value = null;
        try {
          p.value = await o(c.value), w.value = ue(p.value.execution_contract);
        } catch (P) {
          f.value = P instanceof Error ? P.message : "Failed to load workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    async function Fe() {
      if (!(!w.value || !c.value)) {
        d.value = !0, f.value = null;
        try {
          p.value = await a(c.value, w.value), w.value = ue(p.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Oe({ reopenPanel: !0 });
        } catch (P) {
          f.value = P instanceof Error ? P.message : "Failed to save workflow contract";
        } finally {
          d.value = !1;
        }
      }
    }
    async function De() {
      _.value = !0;
    }
    async function He() {
      if (c.value) {
        _.value = !1, v.value = !0, f.value = null;
        try {
          await l(c.value), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Oe({ reopenPanel: !0 });
        } catch (P) {
          f.value = P instanceof Error ? P.message : "Failed to delete workflow contract";
        } finally {
          v.value = !1;
        }
      }
    }
    function Ve() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      }));
    }
    function Oe(P) {
      r.value = !1, I.value = null, E.value = null, _.value = !1, P != null && P.reopenPanel && Ve();
    }
    async function Qe(P) {
      var Te, Le;
      const J = (Le = (Te = P.detail) == null ? void 0 : Te.workflowName) == null ? void 0 : Le.trim();
      J && (c.value = J, b.value = null, S.value = null, g.value = !1, r.value = !0, await Z());
    }
    function pt(P) {
      if (P.key === "Escape" && r.value) {
        if (_.value) {
          _.value = !1;
          return;
        }
        Oe({ reopenPanel: !0 });
      }
    }
    function Q() {
      if (M != null) return;
      const P = () => {
        if (C.value += 1, !r.value) {
          M = null;
          return;
        }
        M = window.requestAnimationFrame(P);
      };
      M = window.requestAnimationFrame(P);
    }
    function pe() {
      M != null && (window.cancelAnimationFrame(M), M = null);
    }
    return gt(r, (P) => {
      P ? (We(), Q()) : (_e(), pe());
    }), lt(() => {
      window.addEventListener("comfygit:open-io-mapping", Qe), window.addEventListener("keydown", pt);
    }), Sn(() => {
      _e(), pe(), window.removeEventListener("comfygit:open-io-mapping", Qe), window.removeEventListener("keydown", pt);
    }), (P, U) => r.value ? (n(), i("div", W7, [
      s("div", G7, [
        (n(!0), i(W, null, ye(Ee.value, (J) => (n(), i("div", {
          key: J.key,
          class: Be(["io-highlight", "io-highlight-input", { active: J.active }]),
          style: Nt(J.style)
        }, null, 6))), 128)),
        (n(!0), i(W, null, ye(ke.value, (J) => (n(), i("div", {
          key: J.key,
          class: Be(["io-highlight", "io-highlight-output", { active: J.active }]),
          style: Nt(J.style)
        }, null, 6))), 128)),
        E.value ? (n(), i("div", {
          key: 0,
          class: Be(["io-highlight", E.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Nt(E.value.style)
        }, null, 6)) : y("", !0)
      ]),
      s("div", j7, [
        s("div", H7, [
          U[8] || (U[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", q7, m(c.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          I.value ? (n(), i("div", K7, " Hovering " + m(I.value.kind) + ": " + m(I.value.label), 1)) : y("", !0)
        ]),
        s("div", J7, [
          $(Ue, {
            size: "sm",
            variant: "secondary",
            onClick: U[0] || (U[0] = (J) => Oe({ reopenPanel: !0 }))
          }, {
            default: h(() => [...U[9] || (U[9] = [
              x(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("aside", Q7, [
        s("div", Y7, [
          u.value ? (n(), i("div", X7, " Loading workflow contract... ")) : f.value ? (n(), i("div", Z7, m(f.value), 1)) : w.value ? (n(), i(W, { key: 2 }, [
            s("section", eR, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: U[1] || (U[1] = (J) => g.value = !g.value)
              }, [
                U[10] || (U[10] = s("span", null, "Contract Details", -1)),
                s("span", tR, m(g.value ? "▾" : "▸"), 1)
              ]),
              g.value ? (n(), i("div", sR, [
                $(Ot, { label: "Default Contract" }, {
                  default: h(() => [
                    $(bt, {
                      "model-value": w.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": ee
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                $(Ot, { label: "Display Name" }, {
                  default: h(() => [
                    $(bt, {
                      modelValue: D.value.display_name,
                      "onUpdate:modelValue": U[2] || (U[2] = (J) => D.value.display_name = J),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                $(Ot, { label: "Description" }, {
                  default: h(() => [
                    $(Lo, {
                      modelValue: D.value.description,
                      "onUpdate:modelValue": U[3] || (U[3] = (J) => D.value.description = J),
                      rows: 2,
                      placeholder: "Optional description for this contract"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])) : y("", !0)
            ]),
            s("section", oR, [
              s("span", nR, m(q.value), 1),
              s("span", aR, m(D.value.inputs.length) + " input" + m(D.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", lR, m(D.value.outputs.length) + " output" + m(D.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", iR, [
              s("div", rR, [
                $(fo, { variant: "section" }, {
                  default: h(() => [...U[11] || (U[11] = [
                    x("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              D.value.inputs.length ? y("", !0) : (n(), i("div", cR, " No inputs configured. ")),
              (n(!0), i(W, null, ye(D.value.inputs, (J, Te) => (n(), i("div", {
                key: `input-${Te}`,
                class: Be(["item-card", { selected: b.value === Te }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Le) => ze(Te)
                }, [
                  s("div", null, [
                    s("div", dR, m(J.name || `Input ${Te + 1}`), 1),
                    s("div", mR, [
                      x(" Node " + m(J.node_id || "?"), 1),
                      J.widget_idx !== void 0 ? (n(), i(W, { key: 0 }, [
                        x(" · Widget " + m(J.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", fR, [
                      s("span", null, m(J.type || "string"), 1),
                      s("span", null, m(J.required ? "required" : "optional"), 1),
                      J.default !== void 0 && J.default !== "" ? (n(), i("span", vR, "default " + m(we(J.default)), 1)) : y("", !0)
                    ])
                  ]),
                  $(Ue, {
                    size: "sm",
                    variant: "ghost",
                    onClick: vt((Le) => Me(Te), ["stop"])
                  }, {
                    default: h(() => [...U[12] || (U[12] = [
                      x(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, uR),
                b.value === Te ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: U[4] || (U[4] = vt(() => {
                  }, ["stop"]))
                }, [
                  $(Ot, { label: "Name" }, {
                    default: h(() => [
                      $(bt, {
                        modelValue: J.name,
                        "onUpdate:modelValue": (Le) => J.name = Le,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(Ot, { label: "Display Name" }, {
                    default: h(() => [
                      $(bt, {
                        modelValue: J.display_name,
                        "onUpdate:modelValue": (Le) => J.display_name = Le,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(Ot, { label: "Type" }, {
                    default: h(() => [
                      $(qn, {
                        "model-value": J.type,
                        options: N,
                        "full-width": "",
                        "onUpdate:modelValue": (Le) => J.type = Le
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(Ot, { label: "Required" }, {
                    default: h(() => [
                      $(qn, {
                        "model-value": J.required ? "true" : "false",
                        options: F,
                        "full-width": "",
                        "onUpdate:modelValue": (Le) => J.required = Le === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(Ot, {
                    class: Be({ "item-grid-full": J.type === "string" || J.type === "enum" }),
                    label: "Default"
                  }, {
                    default: h(() => [
                      J.type === "string" ? (n(), L(Lo, {
                        key: 0,
                        "model-value": se(J.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (Le) => J.default = Le
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (n(), L(bt, {
                        key: 1,
                        modelValue: J.default,
                        "onUpdate:modelValue": (Le) => J.default = Le,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  ie(J.type) ? (n(), L(Ot, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: h(() => [
                      $(bt, {
                        "model-value": me(J.min),
                        "full-width": "",
                        "onUpdate:modelValue": (Le) => J.min = oe(Le)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  ie(J.type) ? (n(), L(Ot, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: h(() => [
                      $(bt, {
                        "model-value": me(J.max),
                        "full-width": "",
                        "onUpdate:modelValue": (Le) => J.max = oe(Le)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  Y(J.type) ? (n(), L(Ot, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: h(() => [
                      $(Lo, {
                        "model-value": B(J.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (Le) => J.enum_values = H(Le)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0)
                ])) : y("", !0)
              ], 2))), 128))
            ]),
            s("section", pR, [
              s("div", gR, [
                $(fo, { variant: "section" }, {
                  default: h(() => [...U[13] || (U[13] = [
                    x("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              D.value.outputs.length ? y("", !0) : (n(), i("div", hR, " No outputs configured. ")),
              (n(!0), i(W, null, ye(D.value.outputs, (J, Te) => (n(), i("div", {
                key: `output-${Te}`,
                class: Be(["item-card", { selected: S.value === Te }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Le) => Ne(Te)
                }, [
                  s("div", null, [
                    s("div", wR, m(J.name || `Output ${Te + 1}`), 1),
                    s("div", _R, [
                      x(" Node " + m(J.node_id || "?"), 1),
                      J.selector ? (n(), i(W, { key: 0 }, [
                        x(" · " + m(J.selector), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", kR, [
                      s("span", null, m(J.type || "file"), 1)
                    ])
                  ]),
                  $(Ue, {
                    size: "sm",
                    variant: "ghost",
                    onClick: vt((Le) => Se(Te), ["stop"])
                  }, {
                    default: h(() => [...U[14] || (U[14] = [
                      x(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, yR),
                S.value === Te ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: U[5] || (U[5] = vt(() => {
                  }, ["stop"]))
                }, [
                  $(Ot, { label: "Name" }, {
                    default: h(() => [
                      $(bt, {
                        modelValue: J.name,
                        "onUpdate:modelValue": (Le) => J.name = Le,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(Ot, { label: "Display Name" }, {
                    default: h(() => [
                      $(bt, {
                        modelValue: J.display_name,
                        "onUpdate:modelValue": (Le) => J.display_name = Le,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(Ot, { label: "Type" }, {
                    default: h(() => [
                      $(qn, {
                        "model-value": J.type,
                        options: N,
                        "full-width": "",
                        "onUpdate:modelValue": (Le) => J.type = Le
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : y("", !0)
              ], 2))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        s("div", bR, [
          s("div", $R, [
            $(Ue, {
              variant: "secondary",
              onClick: U[6] || (U[6] = (J) => Oe({ reopenPanel: !0 }))
            }, {
              default: h(() => [...U[15] || (U[15] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", CR, [
            $(Ue, {
              variant: "danger",
              disabled: !V.value,
              loading: v.value,
              onClick: De
            }, {
              default: h(() => [...U[16] || (U[16] = [
                x(" Delete ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            $(Ue, {
              variant: "primary",
              loading: d.value,
              onClick: Fe
            }, {
              default: h(() => [...U[17] || (U[17] = [
                x(" Save ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]),
      _.value ? (n(), L(Pl, {
        key: 0,
        title: "Delete Workflow Contract",
        message: `Delete the contract for ${c.value}?`,
        warning: "This removes the saved input/output contract for this workflow. The workflow itself will not be deleted.",
        "confirm-label": "Delete",
        "cancel-label": "Cancel",
        destructive: !0,
        onConfirm: He,
        onCancel: U[7] || (U[7] = (J) => _.value = !1)
      }, null, 8, ["message"])) : y("", !0)
    ])) : y("", !0);
  }
}), SR = /* @__PURE__ */ Ie(xR, [["__scopeId", "data-v-13515b27"]]), IR = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', ER = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', TR = {
  comfy: IR,
  phosphor: ER
}, Dl = "comfy", Pc = "comfygit-theme";
let io = null, Rc = Dl;
function MR() {
  try {
    const e = localStorage.getItem(Pc);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Dl;
}
function Lc(e = Dl) {
  io && io.remove(), io = document.createElement("style"), io.id = "comfygit-theme-styles", io.setAttribute("data-theme", e), io.textContent = TR[e], document.head.appendChild(io), document.body.setAttribute("data-comfygit-theme", e), Rc = e;
  try {
    localStorage.setItem(Pc, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function PR() {
  return Rc;
}
function RR(e) {
  Lc(e);
}
function LR(e) {
  var r;
  const { ui_id: t, state: o } = e || {}, a = (o == null ? void 0 : o.history) || {};
  if (!t)
    return null;
  const l = a[t];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Ui = "ComfyGit.DevAutoReload", Dc = "ComfyGit.DevAutoReload.PanelOpen";
function DR() {
  const e = new URLSearchParams(window.location.search).get("comfygitDevReload");
  return e === null ? null : e;
}
function wa() {
  const e = DR();
  if (e !== null) {
    const t = e !== "0" && e !== "false";
    try {
      localStorage.setItem(Ui, t ? "true" : "false");
    } catch {
    }
    return t;
  }
  try {
    return localStorage.getItem(Ui) === "true";
  } catch {
    return !1;
  }
}
function Nc(e) {
  if (wa())
    try {
      sessionStorage.setItem(Dc, e ? "true" : "false");
    } catch {
    }
}
function NR() {
  if (!wa()) return !1;
  try {
    return sessionStorage.getItem(Dc) === "true";
  } catch {
    return !1;
  }
}
async function Oi(e) {
  const t = await fetch(e, { cache: "no-store", method: "HEAD" });
  if (t.ok) {
    const u = t.headers, d = u.get("etag"), v = u.get("last-modified"), f = u.get("content-length");
    if (d || v)
      return [d, v, f].filter(Boolean).join(":");
  }
  const o = await fetch(e, { cache: "no-store", method: "GET" });
  if (!o.ok) return null;
  const a = o.headers, l = [
    a.get("etag"),
    a.get("last-modified"),
    a.get("content-length")
  ].filter(Boolean).join(":"), r = await o.text();
  let c = 0;
  for (let u = 0; u < r.length; u += 1)
    c = (c << 5) - c + r.charCodeAt(u) | 0;
  return `${l}:${r.length}:${c}`;
}
async function UR(e) {
  if (!wa()) return;
  const t = e.map((a) => ({
    ...a,
    signature: null
  }));
  for (const a of t)
    try {
      a.signature = await Oi(a.url);
    } catch (l) {
      console.warn(`[ComfyGit] Dev auto-reload could not read ${a.name}:`, l);
    }
  console.log("[ComfyGit] Dev auto-reload enabled");
  let o = !1;
  window.setInterval(async () => {
    if (!o)
      for (const a of t)
        try {
          const l = await Oi(a.url);
          if (a.signature && l && l !== a.signature) {
            o = !0, console.log(`[ComfyGit] ${a.name} changed, reloading page...`), window.setTimeout(() => window.location.reload(), 500);
            return;
          }
          l && (a.signature = l);
        } catch {
        }
  }, 1e3);
}
const OR = "./comfygit-panel.css", AR = "./comfygit-panel.js", Uc = new URL(OR, import.meta.url).href, zR = new URL(AR, import.meta.url).href, Nl = document.createElement("link");
Nl.rel = "stylesheet";
Nl.href = Uc;
document.head.appendChild(Nl);
const FR = MR();
Lc(FR);
wa() || (sessionStorage.removeItem("ComfyGit.LastView"), sessionStorage.removeItem("ComfyGit.LastSection"));
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), RR(e);
  },
  getTheme: () => {
    const e = PR();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
window.ComfyGitDev = {
  ...window.ComfyGitDev ?? {},
  async exportCurrentApiPrompt() {
    const e = Ss;
    if (typeof e.graphToPrompt != "function")
      throw new Error("ComfyUI graphToPrompt is not available");
    return e.graphToPrompt(e.rootGraph);
  },
  async exportApiPromptForWorkflow(e) {
    const t = Ss;
    if (typeof t.loadGraphData != "function")
      throw new Error("ComfyUI loadGraphData is not available");
    if (typeof t.graphToPrompt != "function")
      throw new Error("ComfyUI graphToPrompt is not available");
    return await t.loadGraphData(e, !0, !1, null, {
      deferWarnings: !0,
      skipAssetScans: !0,
      silentAssetErrors: !0
    }), await new Promise((o) => requestAnimationFrame(o)), t.graphToPrompt(t.rootGraph);
  }
};
let Ts = null, vn = null, as = null, pn = null, Yo = null, Ai = null, Xo = null, zi = null, Zo = null, Fi = null;
const Do = k(null);
let $n = "no_workspace", Oc = !1;
async function on() {
  const e = Vo();
  if (!e) return null;
  try {
    const t = await e.fetchApi("/v2/comfygit/status");
    t.ok && (Do.value = await t.json());
  } catch {
  }
}
async function ll() {
  const e = Vo();
  if (e)
    try {
      const t = await e.fetchApi("/v2/setup/status");
      if (t.ok) {
        const o = await t.json();
        $n = o.state, Oc = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function il() {
  var t;
  if ($n === "managed" || !Oc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((t = o.textContent) == null ? void 0 : t.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function VR() {
  if (!Do.value) return !1;
  const e = Do.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Do.value.has_changes;
}
function en(e) {
  nn(), Nc(!0), Ts = document.createElement("div"), Ts.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ts.appendChild(t), Ts.addEventListener("click", (a) => {
    a.target === Ts && nn();
  });
  const o = (a) => {
    a.key === "Escape" && (nn(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), vn = En({
    render: () => Fo(LM, {
      initialView: e,
      onClose: nn,
      onStatusUpdate: async (a) => {
        Do.value = a, So(), await ll(), Kn(), il();
      }
    })
  }), vn.mount(t), document.body.appendChild(Ts);
}
function nn() {
  Nc(!1), vn && (vn.unmount(), vn = null), Ts && (Ts.remove(), Ts = null);
}
function Vi(e) {
  tn(), as = document.createElement("div"), as.className = "comfygit-commit-popover-container";
  const t = e.getBoundingClientRect();
  as.style.position = "fixed", as.style.top = `${t.bottom + 8}px`, as.style.right = `${window.innerWidth - t.right}px`, as.style.zIndex = "10001";
  const o = (l) => {
    as && !as.contains(l.target) && l.target !== e && (tn(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const a = (l) => {
    l.key === "Escape" && (tn(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), pn = En({
    render: () => Fo(Ic, {
      status: Do.value,
      onClose: tn,
      onCommitted: (l) => {
        tn(), BR(l.success, l.message), on().then(So);
      }
    })
  }), pn.mount(as), document.body.appendChild(as);
}
function tn() {
  pn && (pn.unmount(), pn = null), as && (as.remove(), as = null);
}
function BR(e, t) {
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
  r.textContent = t, o.appendChild(r), document.body.appendChild(o), setTimeout(() => {
    o.style.opacity = "0", o.style.transition = "opacity 0.2s ease", setTimeout(() => o.remove(), 200);
  }, 3e3);
}
function WR() {
  Yo || (Yo = document.createElement("div"), Yo.className = "comfygit-download-queue-root", Ai = En({
    render: () => Fo(IP)
  }), Ai.mount(Yo), document.body.appendChild(Yo), console.log("[ComfyGit] Model download queue mounted"));
}
function GR() {
  Xo || (Xo = document.createElement("div"), Xo.className = "comfygit-missing-resources-root", zi = En({
    render: () => Fo(B7)
  }), zi.mount(Xo), document.body.appendChild(Xo), console.log("[ComfyGit] Missing resources popup mounted"));
}
function jR() {
  Zo || (Zo = document.createElement("div"), Zo.className = "comfygit-io-mapping-root", Fi = En({
    render: () => Fo(SR, {
      comfyApp: Ss
    })
  }), Fi.mount(Zo), document.body.appendChild(Zo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let Yt = null;
function So() {
  if (!Yt) return;
  const e = Yt.querySelector(".commit-indicator");
  e && (e.style.display = VR() ? "block" : "none");
}
function Kn() {
  if (!Yt) return;
  const e = $n !== "managed";
  Yt.disabled = e, Yt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Ac = document.createElement("style");
Ac.textContent = `
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
document.head.appendChild(Ac);
Ss.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => en()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        Yt && !Yt.disabled && Vi(Yt);
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
    if ($n === "managed")
      try {
        await Promise.all([
          Ss.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          Ss.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
        ]);
      } catch (o) {
        console.warn("[ComfyGit] Failed to disable built-in warnings:", o);
      }
    window.__comfygit_pending_workflow = e;
  },
  async afterConfigureGraph(e) {
    if ($n !== "managed") return;
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
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = () => en(), Yt = document.createElement("button"), Yt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Yt.innerHTML = 'Commit <span class="commit-indicator"></span>', Yt.title = "Quick Commit", Yt.onclick = () => Vi(Yt), e.appendChild(t), e.appendChild(Yt), (r = (l = Ss.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Ss.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), WR(), GR(), jR(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      en(u);
    })), window.addEventListener("comfygit:close-panel", (() => {
      nn();
    })), window.addEventListener("comfygit:status-refresh", (async () => {
      await on(), So(), Kn();
    }));
    const { loadPendingDownloads: o } = Bo();
    o(), await Promise.all([on(), ll()]), So(), Kn(), il(), NR() && setTimeout(() => {
      Ts || en();
    }, 100), UR([
      { name: "panel script", url: zR },
      { name: "panel stylesheet", url: Uc }
    ]), setTimeout(il, 100), setInterval(async () => {
      await Promise.all([on(), ll()]), So(), Kn();
    }, 3e4);
    const a = Vo();
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
        const _ = document.createElement("span");
        _.textContent = "⚠️", _.style.fontSize = "20px", g.appendChild(_);
        const b = document.createElement("div");
        b.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const S = document.createElement("div");
        S.textContent = "Node installation failed", S.style.cssText = "font-weight: 600; color: #e53935;", b.appendChild(S);
        const C = document.createElement("div");
        C.textContent = "Dependency conflict detected", C.style.cssText = "font-size: 12px; opacity: 0.8;", b.appendChild(C), g.appendChild(b);
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
          g.remove(), en("debug-env");
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
      }, v = function(p) {
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
        const _ = document.createElement("span");
        _.textContent = "✅", _.style.fontSize = "20px", g.appendChild(_);
        const b = document.createElement("div");
        b.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const S = document.createElement("div");
        S.textContent = "To apply changes, please restart ComfyUI", S.style.cssText = "font-weight: 500; color: #fff;", b.appendChild(S);
        const C = document.createElement("div");
        C.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, C.style.cssText = "font-size: 12px; opacity: 0.7;", b.appendChild(C), g.appendChild(b);
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
            const M = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Ss.refreshComboInNodes && (await Ss.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", S.textContent = "Nodes Installed", S.style.color = "#4caf50", C.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, g.style.borderColor = "#4caf50", I.style.display = "none", setTimeout(() => {
                  g.remove();
                }, 3e3);
              } catch (N) {
                console.error("[ComfyGit] Failed to refresh nodes:", N), _.textContent = "✅", S.textContent = "Restart Complete", S.style.color = "#4caf50", C.textContent = "Refresh the page to load new nodes.", g.style.borderColor = "#4caf50", I.style.display = "none";
              }
            };
            a.addEventListener("reconnected", M, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (M) {
            console.error("[ComfyGit] Failed to restart:", M), S.textContent = "Restart Failed", S.style.color = "#e53935", C.textContent = "Could not restart server. Try again.", g.style.borderColor = "#e53935", I.textContent = "Try Again", I.disabled = !1, I.style.opacity = "1";
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
        console.log(`[ComfyGit] Workflow ${w}: ${g}`), await on(), So();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let f = !1;
      a.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !f && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), f = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (p) => {
        const w = LR(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: g = 1 } = w.detail || {};
        v(g);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
