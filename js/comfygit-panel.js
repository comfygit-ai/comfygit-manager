var Vc = Object.defineProperty;
var Bc = (e, t, o) => t in e ? Vc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var Rn = (e, t, o) => Bc(e, typeof t != "symbol" ? t + "" : t, o);
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
}, Wi = () => !1, ia = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), cl = (e) => e.startsWith("onUpdate:"), Lt = Object.assign, ul = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, Wc = Object.prototype.hasOwnProperty, ft = (e, t) => Wc.call(e, t), Ze = Array.isArray, Eo = (e) => Cn(e) === "[object Map]", Ao = (e) => Cn(e) === "[object Set]", Fl = (e) => Cn(e) === "[object Date]", tt = (e) => typeof e == "function", St = (e) => typeof e == "string", hs = (e) => typeof e == "symbol", ht = (e) => e !== null && typeof e == "object", Gi = (e) => (ht(e) || tt(e)) && tt(e.then) && tt(e.catch), ji = Object.prototype.toString, Cn = (e) => ji.call(e), Gc = (e) => Cn(e).slice(8, -1), Hi = (e) => Cn(e) === "[object Object]", dl = (e) => St(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, an = /* @__PURE__ */ rl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ra = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((o) => t[o] || (t[o] = e(o)));
}, jc = /-\w/g, ms = ra(
  (e) => e.replace(jc, (t) => t.slice(1).toUpperCase())
), Hc = /\B([A-Z])/g, oo = ra(
  (e) => e.replace(Hc, "-$1").toLowerCase()
), ca = ra((e) => e.charAt(0).toUpperCase() + e.slice(1)), Pa = ra(
  (e) => e ? `on${ca(e)}` : ""
), eo = (e, t) => !Object.is(e, t), Fn = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, qi = (e, t, o, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, ua = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, qc = (e) => {
  const t = St(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Vl;
const da = () => Vl || (Vl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Nt(e) {
  if (Ze(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = St(n) ? Yc(n) : Nt(n);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if (St(e) || ht(e))
    return e;
}
const Kc = /;(?![^(]*\))/g, Jc = /:([^]+)/, Qc = /\/\*[^]*?\*\//g;
function Yc(e) {
  const t = {};
  return e.replace(Qc, "").split(Kc).forEach((o) => {
    if (o) {
      const n = o.split(Jc);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Be(e) {
  let t = "";
  if (St(e))
    t = e;
  else if (Ze(e))
    for (let o = 0; o < e.length; o++) {
      const n = Be(e[o]);
      n && (t += n + " ");
    }
  else if (ht(e))
    for (const o in e)
      e[o] && (t += o + " ");
  return t.trim();
}
const Xc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Zc = /* @__PURE__ */ rl(Xc);
function Ki(e) {
  return !!e || e === "";
}
function eu(e, t) {
  if (e.length !== t.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = vo(e[n], t[n]);
  return o;
}
function vo(e, t) {
  if (e === t) return !0;
  let o = Fl(e), n = Fl(t);
  if (o || n)
    return o && n ? e.getTime() === t.getTime() : !1;
  if (o = hs(e), n = hs(t), o || n)
    return e === t;
  if (o = Ze(e), n = Ze(t), o || n)
    return o && n ? eu(e, t) : !1;
  if (o = ht(e), n = ht(t), o || n) {
    if (!o || !n)
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
const Ji = (e) => !!(e && e.__v_isRef === !0), m = (e) => St(e) ? e : e == null ? "" : Ze(e) || ht(e) && (e.toString === ji || !tt(e.toString)) ? Ji(e) ? m(e.value) : JSON.stringify(e, Qi, 2) : String(e), Qi = (e, t) => Ji(t) ? Qi(e, t.value) : Eo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [n, l], r) => (o[Ra(n, r) + " =>"] = l, o),
    {}
  )
} : Ao(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => Ra(o))
} : hs(t) ? Ra(t) : ht(t) && !Ze(t) && !Hi(t) ? String(t) : t, Ra = (e, t = "") => {
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
class tu {
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
function su() {
  return ts;
}
let _t;
const La = /* @__PURE__ */ new WeakSet();
class Yi {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Zi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Bl(this), er(this);
    const t = _t, o = ps;
    _t = this, ps = !0;
    try {
      return this.fn();
    } finally {
      tr(this), _t = t, ps = o, this.flags &= -3;
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
let Xi = 0, ln, rn;
function Zi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = rn, rn = e;
    return;
  }
  e.next = ln, ln = e;
}
function fl() {
  Xi++;
}
function vl() {
  if (--Xi > 0)
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
        } catch (n) {
          e || (e = n);
        }
      t = o;
    }
  }
  if (e) throw e;
}
function er(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function tr(e) {
  let t, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), pl(n), ou(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = t, e.depsTail = o;
}
function ja(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (sr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function sr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === gn) || (e.globalVersion = gn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ja(e))))
    return;
  e.flags |= 2;
  const t = e.dep, o = _t, n = ps;
  _t = e, ps = !0;
  try {
    er(e);
    const l = e.fn(e._value);
    (t.version === 0 || eo(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    _t = o, ps = n, tr(e), e.flags &= -3;
  }
}
function pl(e, t = !1) {
  const { dep: o, prevSub: n, nextSub: l } = e;
  if (n && (n.nextSub = l, e.prevSub = void 0), l && (l.prevSub = n, e.nextSub = void 0), o.subs === e && (o.subs = n, !n && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      pl(r, !0);
  }
  !t && !--o.sc && o.map && o.map.delete(o.key);
}
function ou(e) {
  const { prevDep: t, nextDep: o } = e;
  t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
}
let ps = !0;
const or = [];
function Bs() {
  or.push(ps), ps = !1;
}
function Ws() {
  const e = or.pop();
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
class nu {
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
      o = this.activeLink = new nu(_t, this), _t.deps ? (o.prevDep = _t.depsTail, _t.depsTail.nextDep = o, _t.depsTail = o) : _t.deps = _t.depsTail = o, nr(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const n = o.nextDep;
      n.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = n), o.prevDep = _t.depsTail, o.nextDep = void 0, _t.depsTail.nextDep = o, _t.depsTail = o, _t.deps === o && (_t.deps = n);
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
function nr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        nr(n);
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
    let n = Ha.get(e);
    n || Ha.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new gl()), l.map = n, l.key = o), l.track();
  }
}
function As(e, t, o, n, l, r) {
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
      const f = Number(n);
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
function Ys(e, t) {
  return Gs(e) ? mo(e) ? No(ys(t)) : No(t) : ys(t);
}
const au = {
  __proto__: null,
  [Symbol.iterator]() {
    return Da(this, Symbol.iterator, (e) => Ys(this, e));
  },
  concat(...e) {
    return _o(this).concat(
      ...e.map((t) => Ze(t) ? _o(t) : t)
    );
  },
  entries() {
    return Da(this, "entries", (e) => (e[1] = Ys(this, e[1]), e));
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
      (o) => o.map((n) => Ys(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Ns(
      this,
      "find",
      e,
      t,
      (o) => Ys(this, o),
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
      (o) => Ys(this, o),
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
    return Da(this, "values", (e) => Ys(this, e));
  }
};
function Da(e, t, o) {
  const n = ma(e), l = n[t]();
  return n !== e && !us(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const lu = Array.prototype;
function Ns(e, t, o, n, l, r) {
  const c = ma(e), u = c !== e && !us(e), d = c[t];
  if (d !== lu[t]) {
    const p = d.apply(e, r);
    return u ? ys(p) : p;
  }
  let v = o;
  c !== e && (u ? v = function(p, w) {
    return o.call(this, Ys(e, p), w, e);
  } : o.length > 2 && (v = function(p, w) {
    return o.call(this, p, w, e);
  }));
  const f = d.call(c, v, n);
  return u && l ? l(f) : f;
}
function Wl(e, t, o, n) {
  const l = ma(e);
  let r = o;
  return l !== e && (us(e) ? o.length > 3 && (r = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return o.call(this, c, Ys(e, u), d, e);
  }), l[t](r, ...n);
}
function Na(e, t, o) {
  const n = ut(e);
  Wt(n, "iterate", hn);
  const l = n[t](...o);
  return (l === -1 || l === !1) && wl(o[0]) ? (o[0] = ut(o[0]), n[t](...o)) : l;
}
function qo(e, t, o = []) {
  Bs(), fl();
  const n = ut(e)[t].apply(e, o);
  return vl(), Ws(), n;
}
const iu = /* @__PURE__ */ rl("__proto__,__v_isRef,__isVue"), ar = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(hs)
);
function ru(e) {
  hs(e) || (e = String(e));
  const t = ut(this);
  return Wt(t, "has", e), t.hasOwnProperty(e);
}
class lr {
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
      return n === (l ? r ? yu : ur : r ? cr : rr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const c = Ze(t);
    if (!l) {
      let d;
      if (c && (d = au[o]))
        return d;
      if (o === "hasOwnProperty")
        return ru;
    }
    const u = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      qt(t) ? t : n
    );
    if ((hs(o) ? ar.has(o) : iu(o)) || (l || Wt(t, "get", o), r))
      return u;
    if (qt(u)) {
      const d = c && dl(o) ? u : u.value;
      return l && ht(d) ? Jn(d) : d;
    }
    return ht(u) ? l ? Jn(u) : ho(u) : u;
  }
}
class ir extends lr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, n, l) {
    let r = t[o];
    const c = Ze(t) && dl(o);
    if (!this._isShallow) {
      const v = Gs(r);
      if (!us(n) && !Gs(n) && (r = ut(r), n = ut(n)), !c && qt(r) && !qt(n))
        return v || (r.value = n), !0;
    }
    const u = c ? Number(o) < t.length : ft(t, o), d = Reflect.set(
      t,
      o,
      n,
      qt(t) ? t : l
    );
    return t === ut(l) && (u ? eo(n, r) && As(t, "set", o, n) : As(t, "add", o, n)), d;
  }
  deleteProperty(t, o) {
    const n = ft(t, o);
    t[o];
    const l = Reflect.deleteProperty(t, o);
    return l && n && As(t, "delete", o, void 0), l;
  }
  has(t, o) {
    const n = Reflect.has(t, o);
    return (!hs(o) || !ar.has(o)) && Wt(t, "has", o), n;
  }
  ownKeys(t) {
    return Wt(
      t,
      "iterate",
      Ze(t) ? "length" : uo
    ), Reflect.ownKeys(t);
  }
}
class cu extends lr {
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
const uu = /* @__PURE__ */ new ir(), du = /* @__PURE__ */ new cu(), mu = /* @__PURE__ */ new ir(!0);
const Ka = (e) => e, Ln = (e) => Reflect.getPrototypeOf(e);
function fu(e, t, o) {
  return function(...n) {
    const l = this.__v_raw, r = ut(l), c = Eo(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, v = l[e](...n), f = o ? Ka : t ? No : ys;
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
function vu(e, t) {
  const o = {
    get(l) {
      const r = this.__v_raw, c = ut(r), u = ut(l);
      e || (eo(l, u) && Wt(c, "get", l), Wt(c, "get", u));
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
      return e || (eo(l, u) && Wt(c, "has", l), Wt(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
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
        !t && !us(l) && !Gs(l) && (l = ut(l));
        const r = ut(this);
        return Ln(r).has.call(r, l) || (r.add(l), As(r, "add", l, l)), this;
      },
      set(l, r) {
        !t && !us(r) && !Gs(r) && (r = ut(r));
        const c = ut(this), { has: u, get: d } = Ln(c);
        let v = u.call(c, l);
        v || (l = ut(l), v = u.call(c, l));
        const f = d.call(c, l);
        return c.set(l, r), v ? eo(r, f) && As(c, "set", l, r) : As(c, "add", l, r), this;
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
    o[l] = fu(l, e, t);
  }), o;
}
function hl(e, t) {
  const o = vu(e, t);
  return (n, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    ft(o, l) && l in n ? o : n,
    l,
    r
  );
}
const pu = {
  get: /* @__PURE__ */ hl(!1, !1)
}, gu = {
  get: /* @__PURE__ */ hl(!1, !0)
}, hu = {
  get: /* @__PURE__ */ hl(!0, !1)
};
const rr = /* @__PURE__ */ new WeakMap(), cr = /* @__PURE__ */ new WeakMap(), ur = /* @__PURE__ */ new WeakMap(), yu = /* @__PURE__ */ new WeakMap();
function wu(e) {
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
function _u(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : wu(Gc(e));
}
function ho(e) {
  return Gs(e) ? e : yl(
    e,
    !1,
    uu,
    pu,
    rr
  );
}
function ku(e) {
  return yl(
    e,
    !1,
    mu,
    gu,
    cr
  );
}
function Jn(e) {
  return yl(
    e,
    !0,
    du,
    hu,
    ur
  );
}
function yl(e, t, o, n, l) {
  if (!ht(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = _u(e);
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
function mo(e) {
  return Gs(e) ? mo(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Gs(e) {
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
function bu(e) {
  return !ft(e, "__v_skip") && Object.isExtensible(e) && qi(e, "__v_skip", !0), e;
}
const ys = (e) => ht(e) ? ho(e) : e, No = (e) => ht(e) ? Jn(e) : e;
function qt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return $u(e, !1);
}
function $u(e, t) {
  return qt(e) ? e : new Cu(e, t);
}
class Cu {
  constructor(t, o) {
    this.dep = new gl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? t : ut(t), this._value = o ? t : ys(t), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const o = this._rawValue, n = this.__v_isShallow || us(t) || Gs(t);
    t = n ? t : ut(t), eo(t, o) && (this._rawValue = t, this._value = n ? t : ys(t), this.dep.trigger());
  }
}
function st(e) {
  return qt(e) ? e.value : e;
}
const xu = {
  get: (e, t, o) => t === "__v_raw" ? e : st(Reflect.get(e, t, o)),
  set: (e, t, o, n) => {
    const l = e[t];
    return qt(l) && !qt(o) ? (l.value = o, !0) : Reflect.set(e, t, o, n);
  }
};
function dr(e) {
  return mo(e) ? e : new Proxy(e, xu);
}
class Su {
  constructor(t, o, n) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new gl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = gn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    _t !== this)
      return Zi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return sr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Iu(e, t, o = !1) {
  let n, l;
  return tt(e) ? n = e : (n = e.get, l = e.set), new Su(n, l, o);
}
const Nn = {}, Qn = /* @__PURE__ */ new WeakMap();
let ro;
function Eu(e, t = !1, o = ro) {
  if (o) {
    let n = Qn.get(o);
    n || Qn.set(o, n = []), n.push(e);
  }
}
function Tu(e, t, o = wt) {
  const { immediate: n, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = o, v = (M) => l ? M : us(M) || l === !1 || l === 0 ? zs(M, 1) : zs(M);
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
      Bs();
      try {
        w();
      } finally {
        Ws();
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
  const S = su(), C = () => {
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
        if (l || _ || (b ? N.some((F, V) => eo(F, I[V])) : eo(N, I))) {
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
  return u && u(E), f = new Yi(p), f.scheduler = c ? () => c(E, !1) : E, g = (M) => Eu(M, !1, f), w = f.onStop = () => {
    const M = Qn.get(f);
    if (M) {
      if (d)
        d(M, 4);
      else
        for (const N of M) N();
      Qn.delete(f);
    }
  }, t ? n ? E(!0) : I = f.run() : c ? c(E.bind(null, !0), !0) : f.run(), C.pause = f.pause.bind(f), C.resume = f.resume.bind(f), C.stop = C, C;
}
function zs(e, t = 1 / 0, o) {
  if (t <= 0 || !ht(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= t))
    return e;
  if (o.set(e, t), t--, qt(e))
    zs(e.value, t, o);
  else if (Ze(e))
    for (let n = 0; n < e.length; n++)
      zs(e[n], t, o);
  else if (Ao(e) || Eo(e))
    e.forEach((n) => {
      zs(n, t, o);
    });
  else if (Hi(e)) {
    for (const n in e)
      zs(e[n], t, o);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && zs(e[n], t, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function xn(e, t, o, n) {
  try {
    return n ? e(...n) : e();
  } catch (l) {
    fa(l, t, o);
  }
}
function ws(e, t, o, n) {
  if (tt(e)) {
    const l = xn(e, t, o, n);
    return l && Gi(l) && l.catch((r) => {
      fa(r, t, o);
    }), l;
  }
  if (Ze(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(ws(e[r], t, o, n));
    return l;
  }
}
function fa(e, t, o, n = !0) {
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
      Bs(), xn(r, null, 10, [
        e,
        d,
        v
      ]), Ws();
      return;
    }
  }
  Mu(e, o, l, n, c);
}
function Mu(e, t, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Xt = [];
let xs = -1;
const To = [];
let Xs = null, $o = 0;
const mr = /* @__PURE__ */ Promise.resolve();
let Yn = null;
function At(e) {
  const t = Yn || mr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Pu(e) {
  let t = xs + 1, o = Xt.length;
  for (; t < o; ) {
    const n = t + o >>> 1, l = Xt[n], r = yn(l);
    r < e || r === e && l.flags & 2 ? t = n + 1 : o = n;
  }
  return t;
}
function _l(e) {
  if (!(e.flags & 1)) {
    const t = yn(e), o = Xt[Xt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= yn(o) ? Xt.push(e) : Xt.splice(Pu(t), 0, e), e.flags |= 1, fr();
  }
}
function fr() {
  Yn || (Yn = mr.then(pr));
}
function Ru(e) {
  Ze(e) ? To.push(...e) : Xs && e.id === -1 ? Xs.splice($o + 1, 0, e) : e.flags & 1 || (To.push(e), e.flags |= 1), fr();
}
function Gl(e, t, o = xs + 1) {
  for (; o < Xt.length; o++) {
    const n = Xt[o];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Xt.splice(o, 1), o--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function vr(e) {
  if (To.length) {
    const t = [...new Set(To)].sort(
      (o, n) => yn(o) - yn(n)
    );
    if (To.length = 0, Xs) {
      Xs.push(...t);
      return;
    }
    for (Xs = t, $o = 0; $o < Xs.length; $o++) {
      const o = Xs[$o];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Xs = null, $o = 0;
  }
}
const yn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function pr(e) {
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
    xs = -1, Xt.length = 0, vr(), Yn = null, (Xt.length || To.length) && pr();
  }
}
let zt = null, gr = null;
function Xn(e) {
  const t = zt;
  return zt = e, gr = e && e.type.__scopeId || null, t;
}
function h(e, t = zt, o) {
  if (!t || e._n)
    return e;
  const n = (...l) => {
    n._d && ta(-1);
    const r = Xn(t);
    let c;
    try {
      c = e(...l);
    } finally {
      Xn(r), n._d && ta(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Rt(e, t) {
  if (zt === null)
    return e;
  const o = ya(zt), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [r, c, u, d = wt] = t[l];
    r && (tt(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && zs(c), n.push({
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
function no(e, t, o, n) {
  const l = e.dirs, r = t && t.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let d = u.dir[n];
    d && (Bs(), ws(d, o, 8, [
      e.el,
      u,
      e,
      t
    ]), Ws());
  }
}
const hr = Symbol("_vte"), yr = (e) => e.__isTeleport, cn = (e) => e && (e.disabled || e.disabled === ""), jl = (e) => e && (e.defer || e.defer === ""), Hl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ql = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ja = (e, t) => {
  const o = e && e.to;
  return St(o) ? t ? t(o) : null : o;
}, wr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, o, n, l, r, c, u, d, v) {
    const {
      mc: f,
      pc: p,
      pbc: w,
      o: { insert: g, querySelector: _, createText: b, createComment: S }
    } = v, C = cn(t.props);
    let { shapeFlag: I, children: E, dynamicChildren: M } = t;
    if (e == null) {
      const N = t.el = b(""), F = t.anchor = b("");
      g(N, o, n), g(F, o, n);
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
        const q = t.target = Ja(t.props, _), ue = _r(q, t, b, g);
        q && (c !== "svg" && Hl(q) ? c = "svg" : c !== "mathml" && ql(q) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(q), C || (V(q, ue), Vn(t, !1)));
      };
      C && (V(o, F), Vn(t, !0)), jl(t.props) ? (t.el.__isMounted = !1, Qt(() => {
        D(), delete t.el.__isMounted;
      }, r)) : D();
    } else {
      if (jl(t.props) && e.el.__isMounted === !1) {
        Qt(() => {
          wr.process(
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
  remove(e, t, o, { um: n, o: { remove: l } }, r) {
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
        n(
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
  hydrate: Lu
};
function Un(e, t, o, { o: { insert: n }, m: l }, r = 2) {
  r === 0 && n(e.targetAnchor, t, o);
  const { el: c, anchor: u, shapeFlag: d, children: v, props: f } = e, p = r === 2;
  if (p && n(c, t, o), (!p || cn(f)) && d & 16)
    for (let w = 0; w < v.length; w++)
      l(
        v[w],
        t,
        o,
        2
      );
  p && n(u, t, o);
}
function Lu(e, t, o, n, l, r, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: v, createText: f }
}, p) {
  function w(b, S, C, I) {
    S.anchor = p(
      c(b),
      S,
      u(b),
      o,
      n,
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
        t.targetAnchor || _r(g, t, f, v), p(
          b && c(b),
          t,
          g,
          o,
          n,
          l,
          r
        );
      }
    Vn(t, _);
  } else _ && t.shapeFlag & 16 && w(e, t, e, c(e));
  return t.anchor && c(t.anchor);
}
const Zt = wr;
function Vn(e, t) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (t ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function _r(e, t, o, n) {
  const l = t.targetStart = o(""), r = t.targetAnchor = o("");
  return l[hr] = r, e && (n(l, e), n(r, e)), r;
}
const Os = Symbol("_leaveCb"), On = Symbol("_enterCb");
function kr() {
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
const rs = [Function, Array], br = {
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
}, $r = (e) => {
  const t = e.subTree;
  return t.component ? $r(t.component) : t;
}, Du = {
  name: "BaseTransition",
  props: br,
  setup(e, { slots: t }) {
    const o = Il(), n = kr();
    return () => {
      const l = t.default && kl(t.default(), !0);
      if (!l || !l.length)
        return;
      const r = Cr(l), c = ut(e), { mode: u } = c;
      if (n.isLeaving)
        return Ua(r);
      const d = Kl(r);
      if (!d)
        return Ua(r);
      let v = wn(
        d,
        c,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (p) => v = p
      );
      d.type !== jt && po(d, v);
      let f = o.subTree && Kl(o.subTree);
      if (f && f.type !== jt && !co(f, d) && $r(o).type !== jt) {
        let p = wn(
          f,
          c,
          n,
          o
        );
        if (po(f, p), u === "out-in" && d.type !== jt)
          return n.isLeaving = !0, p.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, f = void 0;
          }, Ua(r);
        u === "in-out" && d.type !== jt ? p.delayLeave = (w, g, _) => {
          const b = xr(
            n,
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
function Cr(e) {
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
const Nu = Du;
function xr(e, t) {
  const { leavingVNodes: o } = e;
  let n = o.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), o.set(t.type, n)), n;
}
function wn(e, t, o, n, l) {
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
  } = t, M = String(e.key), N = xr(o, e), F = (q, ue) => {
    q && ws(
      q,
      n,
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
        n,
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
    return yr(e.type) && e.children ? Cr(e.children) : e;
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
  let n = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : r);
    c.type === W ? (c.patchFlag & 128 && l++, n = n.concat(
      kl(c.children, t, u)
    )) : (t || c.type !== jt) && n.push(u != null ? to(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function xe(e, t) {
  return tt(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Lt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Sr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Zn = /* @__PURE__ */ new WeakMap();
function un(e, t, o, n, l = !1) {
  if (Ze(e)) {
    e.forEach(
      (_, b) => un(
        _,
        t && (Ze(t) ? t[b] : t),
        o,
        n,
        l
      )
    );
    return;
  }
  if (Mo(n) && !l) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && un(e, t, o, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? ya(n.component) : n.el, c = l ? null : r, { i: u, r: d } = e, v = t && t.r, f = u.refs === wt ? u.refs = {} : u.refs, p = u.setupState, w = ut(p), g = p === wt ? Wi : (_) => ft(w, _);
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
function Uu(e, t) {
  Ir(e, "a", t);
}
function Ou(e, t) {
  Ir(e, "da", t);
}
function Ir(e, t, o = Ht) {
  const n = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (pa(t, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      va(l.parent.vnode) && Au(n, t, o, l), l = l.parent;
  }
}
function Au(e, t, o, n) {
  const l = pa(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  zo(() => {
    ul(n[t], l);
  }, o);
}
function pa(e, t, o = Ht, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = t.__weh || (t.__weh = (...c) => {
      Bs();
      const u = In(o), d = ws(t, o, e, c);
      return u(), Ws(), d;
    });
    return n ? l.unshift(r) : l.push(r), r;
  }
}
const js = (e) => (t, o = Ht) => {
  (!bn || e === "sp") && pa(e, (...n) => t(...n), o);
}, zu = js("bm"), lt = js("m"), Fu = js(
  "bu"
), Er = js("u"), Sn = js(
  "bum"
), zo = js("um"), Vu = js(
  "sp"
), Bu = js("rtg"), Wu = js("rtc");
function Gu(e, t = Ht) {
  pa("ec", e, t);
}
const ju = "components", Tr = Symbol.for("v-ndc");
function bl(e) {
  return St(e) ? Hu(ju, e, !1) || e : e || Tr;
}
function Hu(e, t, o = !0, n = !1) {
  const l = zt || Ht;
  if (l) {
    const r = l.type;
    {
      const u = Dd(
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
    return !c && n ? r : c;
  }
}
function Ql(e, t) {
  return e && (e[t] || e[ms(t)] || e[ca(ms(t))]);
}
function ye(e, t, o, n) {
  let l;
  const r = o, c = Ze(e);
  if (c || St(e)) {
    const u = c && mo(e);
    let d = !1, v = !1;
    u && (d = !us(e), v = Gs(e), e = ma(e)), l = new Array(e.length);
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
function at(e, t, o = {}, n, l) {
  if (zt.ce || zt.parent && Mo(zt.parent) && zt.parent.ce) {
    const v = Object.keys(o).length > 0;
    return t !== "default" && (o.name = t), a(), L(
      W,
      null,
      [$("slot", o, n && n())],
      v ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), a();
  const c = r && Mr(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = L(
    W,
    {
      key: (u && !hs(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!c && n ? "_fb" : "")
    },
    c || (n ? n() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function Mr(e) {
  return e.some((t) => kn(t) ? !(t.type === jt || t.type === W && !Mr(t.children)) : !0) ? e : null;
}
const Qa = (e) => e ? Jr(e) ? ya(e) : Qa(e.parent) : null, dn = (
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
    $options: (e) => Rr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      _l(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = At.bind(e.proxy)),
    $watch: (e) => nd.bind(e)
  })
), Oa = (e, t) => e !== wt && !e.__isScriptSetup && ft(e, t), qu = {
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
        if (Oa(n, t))
          return c[t] = 1, n[t];
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
    const { data: n, setupState: l, ctx: r } = e;
    return Oa(l, t) ? (l[t] = o, !0) : n !== wt && ft(n, t) ? (n[t] = o, !0) : ft(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: n, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(o[u] || e !== wt && u[0] !== "$" && ft(e, u) || Oa(t, u) || ft(r, u) || ft(n, u) || ft(dn, u) || ft(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
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
function Ku(e) {
  const t = Rr(e), o = e.proxy, n = e.ctx;
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
  if (v && Ju(v, n, null), c)
    for (const we in c) {
      const se = c[we];
      tt(se) && (n[we] = se.bind(o));
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
      Object.defineProperty(n, we, {
        enumerable: !0,
        configurable: !0,
        get: () => K.value,
        set: (ee) => K.value = ee
      });
    }
  if (u)
    for (const we in u)
      Pr(u[we], n, o, we);
  if (d) {
    const we = tt(d) ? d.call(o) : d;
    Reflect.ownKeys(we).forEach((se) => {
      td(se, we[se]);
    });
  }
  f && Xl(f, e, "c");
  function H(we, se) {
    Ze(se) ? se.forEach((de) => we(de.bind(o))) : se && we(se.bind(o));
  }
  if (H(zu, p), H(lt, w), H(Fu, g), H(Er, _), H(Uu, b), H(Ou, S), H(Gu, D), H(Wu, F), H(Bu, V), H(Sn, I), H(zo, M), H(Vu, q), Ze(ue))
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
  N && e.render === Ms && (e.render = N), ie != null && (e.inheritAttrs = ie), Y && (e.components = Y), me && (e.directives = me), q && Sr(e);
}
function Ju(e, t, o = Ms) {
  Ze(e) && (e = Xa(e));
  for (const n in e) {
    const l = e[n];
    let r;
    ht(l) ? "default" in l ? r = Bn(
      l.from || n,
      l.default,
      !0
    ) : r = Bn(l.from || n) : r = Bn(l), qt(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : t[n] = r;
  }
}
function Xl(e, t, o) {
  ws(
    Ze(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function Pr(e, t, o, n) {
  let l = n.includes(".") ? Nr(o, n) : () => o[n];
  if (St(e)) {
    const r = t[e];
    tt(r) && gt(l, r);
  } else if (tt(e))
    gt(l, e.bind(o));
  else if (ht(e))
    if (Ze(e))
      e.forEach((r) => Pr(r, t, o, n));
    else {
      const r = tt(e.handler) ? e.handler.bind(o) : t[e.handler];
      tt(r) && gt(l, r, e);
    }
}
function Rr(e) {
  const t = e.type, { mixins: o, extends: n } = t, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(t);
  let d;
  return u ? d = u : !l.length && !o && !n ? d = t : (d = {}, l.length && l.forEach(
    (v) => ea(d, v, c, !0)
  ), ea(d, t, c)), ht(t) && r.set(t, d), d;
}
function ea(e, t, o, n = !1) {
  const { mixins: l, extends: r } = t;
  r && ea(e, r, o, !0), l && l.forEach(
    (c) => ea(e, c, o, !0)
  );
  for (const c in t)
    if (!(n && c === "expose")) {
      const u = Qu[c] || o && o[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const Qu = {
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
  watch: Xu,
  // provide / inject
  provide: Zl,
  inject: Yu
};
function Zl(e, t) {
  return t ? e ? function() {
    return Lt(
      tt(e) ? e.call(this, this) : e,
      tt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Yu(e, t) {
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
function Xu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = Lt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    o[n] = Jt(e[n], t[n]);
  return o;
}
function Lr() {
  return {
    app: null,
    config: {
      isNativeTag: Wi,
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
let Zu = 0;
function ed(e, t) {
  return function(n, l = null) {
    tt(n) || (n = Lt({}, n)), l != null && !ht(l) && (l = null);
    const r = Lr(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const v = r.app = {
      _uid: Zu++,
      _component: n,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: Ud,
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
          const g = v._ceVNode || $(n, l);
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
function td(e, t) {
  if (Ht) {
    let o = Ht.provides;
    const n = Ht.parent && Ht.parent.provides;
    n === o && (o = Ht.provides = Object.create(n)), o[e] = t;
  }
}
function Bn(e, t, o = !1) {
  const n = Il();
  if (n || Po) {
    let l = Po ? Po._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && tt(t) ? t.call(n && n.proxy) : t;
  }
}
const sd = Symbol.for("v-scx"), od = () => Bn(sd);
function gt(e, t, o) {
  return Dr(e, t, o);
}
function Dr(e, t, o = wt) {
  const { immediate: n, deep: l, flush: r, once: c } = o, u = Lt({}, o), d = t && n || !t && r !== "post";
  let v;
  if (bn) {
    if (r === "sync") {
      const g = od();
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
  const w = Tu(e, t, u);
  return bn && (v ? v.push(w) : d && w()), w;
}
function nd(e, t, o) {
  const n = this.proxy, l = St(e) ? e.includes(".") ? Nr(n, e) : () => n[e] : e.bind(n, n);
  let r;
  tt(t) ? r = t : (r = t.handler, o = t);
  const c = In(this), u = Dr(l, r.bind(n), o);
  return c(), u;
}
function Nr(e, t) {
  const o = t.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const ad = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ms(t)}Modifiers`] || e[`${oo(t)}Modifiers`];
function ld(e, t, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || wt;
  let l = o;
  const r = t.startsWith("update:"), c = r && ad(n, t.slice(7));
  c && (c.trim && (l = o.map((f) => St(f) ? f.trim() : f)), c.number && (l = o.map(ua)));
  let u, d = n[u = Pa(t)] || // also try camelCase event handler (#2249)
  n[u = Pa(ms(t))];
  !d && r && (d = n[u = Pa(oo(t))]), d && ws(
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
    e.emitted[u] = !0, ws(
      v,
      e,
      6,
      l
    );
  }
}
const id = /* @__PURE__ */ new WeakMap();
function Ur(e, t, o = !1) {
  const n = o ? id : t.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!tt(e)) {
    const d = (v) => {
      const f = Ur(v, t, !0);
      f && (u = !0, Lt(c, f));
    };
    !o && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (ht(e) && n.set(e, null), null) : (Ze(r) ? r.forEach((d) => c[d] = null) : Lt(c, r), ht(e) && n.set(e, c), c);
}
function ga(e, t) {
  return !e || !ia(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ft(e, t[0].toLowerCase() + t.slice(1)) || ft(e, oo(t)) || ft(e, t));
}
function ti(e) {
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
      const M = l || n, N = M;
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
      ), I = t.props ? u : rd(u);
    }
  } catch (M) {
    mn.length = 0, fa(M, e, 1), C = $(jt);
  }
  let E = C;
  if (I && b !== !1) {
    const M = Object.keys(I), { shapeFlag: N } = E;
    M.length && N & 7 && (r && M.some(cl) && (I = cd(
      I,
      r
    )), E = to(E, I, !1, !0));
  }
  return o.dirs && (E = to(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(o.dirs) : o.dirs), o.transition && po(E, o.transition), C = E, Xn(S), C;
}
const rd = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || ia(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, cd = (e, t) => {
  const o = {};
  for (const n in e)
    (!cl(n) || !(n.slice(9) in t)) && (o[n] = e[n]);
  return o;
};
function ud(e, t, o) {
  const { props: n, children: l, component: r } = e, { props: c, children: u, patchFlag: d } = t, v = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? si(n, c, v) : !!c;
    if (d & 8) {
      const f = t.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const w = f[p];
        if (c[w] !== n[w] && !ga(v, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : n === c ? !1 : n ? c ? si(n, c, v) : !0 : !!c;
  return !1;
}
function si(e, t, o) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < n.length; l++) {
    const r = n[l];
    if (t[r] !== e[r] && !ga(o, r))
      return !0;
  }
  return !1;
}
function dd({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const Or = {}, Ar = () => Object.create(Or), zr = (e) => Object.getPrototypeOf(e) === Or;
function md(e, t, o, n = !1) {
  const l = {}, r = Ar();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Fr(e, t, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = n ? l : ku(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function fd(e, t, o, n) {
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
    (n || c > 0) && !(c & 16)
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
    Fr(e, t, l, r) && (v = !0);
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
function Fr(e, t, o, n) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (an(d))
        continue;
      const v = t[d];
      let f;
      l && ft(l, f = ms(d)) ? !r || !r.includes(f) ? o[f] = v : (u || (u = {}))[f] = v : ga(e.emitsOptions, d) || (!(d in n) || v !== n[d]) && (n[d] = v, c = !0);
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
function Za(e, t, o, n, l, r) {
  const c = e[o];
  if (c != null) {
    const u = ft(c, "default");
    if (u && n === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && tt(d)) {
        const { propsDefaults: v } = l;
        if (o in v)
          n = v[o];
        else {
          const f = In(l);
          n = v[o] = d.call(
            null,
            t
          ), f();
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
    ] && (n === "" || n === oo(o)) && (n = !0));
  }
  return n;
}
const vd = /* @__PURE__ */ new WeakMap();
function Vr(e, t, o = !1) {
  const n = o ? vd : t.propsCache, l = n.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!tt(e)) {
    const f = (p) => {
      d = !0;
      const [w, g] = Vr(p, t, !0);
      Lt(c, w), g && u.push(...g);
    };
    !o && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !d)
    return ht(e) && n.set(e, Io), Io;
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
  return ht(e) && n.set(e, v), v;
}
function oi(e) {
  return e[0] !== "$" && !an(e);
}
const $l = (e) => e === "_" || e === "_ctx" || e === "$stable", Cl = (e) => Ze(e) ? e.map(Es) : [Es(e)], pd = (e, t, o) => {
  if (t._n)
    return t;
  const n = h((...l) => Cl(t(...l)), o);
  return n._c = !1, n;
}, Br = (e, t, o) => {
  const n = e._ctx;
  for (const l in e) {
    if ($l(l)) continue;
    const r = e[l];
    if (tt(r))
      t[l] = pd(l, r, n);
    else if (r != null) {
      const c = Cl(r);
      t[l] = () => c;
    }
  }
}, Wr = (e, t) => {
  const o = Cl(t);
  e.slots.default = () => o;
}, Gr = (e, t, o) => {
  for (const n in t)
    (o || !$l(n)) && (e[n] = t[n]);
}, gd = (e, t, o) => {
  const n = e.slots = Ar();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Gr(n, t, o), o && qi(n, "_", l, !0)) : Br(t, n);
  } else t && Wr(e, t);
}, hd = (e, t, o) => {
  const { vnode: n, slots: l } = e;
  let r = !0, c = wt;
  if (n.shapeFlag & 32) {
    const u = t._;
    u ? o && u === 1 ? r = !1 : Gr(l, t, o) : (r = !t.$stable, Br(t, l)), c = t;
  } else t && (Wr(e, t), c = { default: 1 });
  if (r)
    for (const u in l)
      !$l(u) && c[u] == null && delete l[u];
}, Qt = bd;
function yd(e) {
  return wd(e);
}
function wd(e, t) {
  const o = da();
  o.__VUE__ = !0;
  const {
    insert: n,
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
      n(
        A.el = u(A.children),
        le,
        Ce
      );
    else {
      const Ee = A.el = T.el;
      A.children !== T.children && v(Ee, A.children);
    }
  }, C = (T, A, le, Ce) => {
    T == null ? n(
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
      Ee = w(T), n(T, le, Ce), T = Ee;
    n(A, le, Ce);
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
    const Fe = _d(Ee, _e);
    Fe && _e.beforeEnter(fe), n(fe, A, le), ((he = je && je.onVnodeMounted) || Fe || Z) && Qt(() => {
      he && bs(he, Ce, T), Fe && _e.enter(fe), Z && no(T, null, Ce, "mounted");
    }, Ee);
  }, V = (T, A, le, Ce, Ee) => {
    if (le && g(T, le), Ce)
      for (let ke = 0; ke < Ce.length; ke++)
        g(T, Ce[ke]);
    if (Ee) {
      let ke = Ee.subTree;
      if (A === ke || Hr(ke.type) && (ke.ssContent === A || ke.ssFallback === A)) {
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
      const je = T[he] = G ? Zs(T[he]) : Es(T[he]);
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
    Z && (G = G ? G.concat(Z) : Z), T == null ? (n(he, le, Ce), n(je, le, Ce), D(
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
    const G = T.component = Td(
      T,
      Ce,
      Ee
    );
    if (va(T) && (G.ctx.renderer = ge), Md(G, !1, X), G.asyncDep) {
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
    if (ud(T, A, le))
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
          const pt = jr(T);
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
        ), We.el = Oe.el, He === null && dd(T, Oe.el), Z && Qt(Z, Ee), (Ve = We.props && We.props.onVnodeUpdated) && Qt(
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
    const fe = T.effect = new Yi(G);
    T.scope.off();
    const he = T.update = fe.run.bind(fe), je = T.job = fe.runIfDirty.bind(fe);
    je.i = T, je.id = T.uid, fe.scheduler = () => _l(je), ao(T, !0), he();
  }, we = (T, A, le) => {
    A.component = T;
    const Ce = T.vnode.props;
    T.vnode = A, T.next = null, fd(T, A.props, Ce, le), hd(T, A.children, le), Bs(), Gl(T), Ws();
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
      const Z = A[_e] = fe ? Zs(A[_e]) : Es(A[_e]);
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
      const Z = T[he], Fe = A[he] = fe ? Zs(A[he]) : Es(A[he]);
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
      const Z = T[We], Fe = A[_e] = fe ? Zs(A[_e]) : Es(A[_e]);
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
            A[he] = fe ? Zs(A[he]) : Es(A[he]),
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
        const P = A[he] = fe ? Zs(A[he]) : Es(A[he]);
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
      const pe = Qe ? kd(Q) : Io;
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
      n(ke, A, le);
      for (let We = 0; We < fe.length; We++)
        K(fe[We], A, le, Ce);
      n(T.anchor, A, le);
      return;
    }
    if (X === za) {
      E(T, A, le);
      return;
    }
    if (Ce !== 2 && he & 1 && G)
      if (Ce === 0)
        G.beforeEnter(ke), n(ke, A, le), Qt(() => G.enter(ke), Ee);
      else {
        const { leave: We, delayLeave: _e, afterLeave: Z } = G, Fe = () => {
          T.ctx.isUnmounted ? l(ke) : n(ke, A, le);
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
      n(ke, A, le);
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
    if (We === -2 && (Ee = !1), G != null && (Bs(), un(G, null, le, T, !0), Ws()), Z != null && (A.renderCache[Z] = void 0), je & 256) {
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
    const A = w(T.anchor || T.el), le = A && A[hr];
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
    ), A._vnode = T, be || (be = !0, Gl(), vr(), be = !1);
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
    createApp: ed(Ae)
  };
}
function Aa({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function ao({ effect: e, job: t }, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function _d(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function xl(e, t, o = !1) {
  const n = e.children, l = t.children;
  if (Ze(n) && Ze(l))
    for (let r = 0; r < n.length; r++) {
      const c = n[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = Zs(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && xl(c, u)), u.type === ha && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === jt && !u.el && (u.el = c.el);
    }
}
function kd(e) {
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
function jr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : jr(t);
}
function ni(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Hr = (e) => e.__isSuspense;
function bd(e, t) {
  t && t.pendingBranch ? Ze(e) ? t.effects.push(...e) : t.effects.push(e) : Ru(e);
}
const W = Symbol.for("v-fgt"), ha = Symbol.for("v-txt"), jt = Symbol.for("v-cmt"), za = Symbol.for("v-stc"), mn = [];
let ls = null;
function a(e = !1) {
  mn.push(ls = e ? null : []);
}
function $d() {
  mn.pop(), ls = mn[mn.length - 1] || null;
}
let _n = 1;
function ta(e, t = !1) {
  _n += e, e < 0 && ls && t && (ls.hasOnce = !0);
}
function qr(e) {
  return e.dynamicChildren = _n > 0 ? ls || Io : null, $d(), _n > 0 && ls && ls.push(e), e;
}
function i(e, t, o, n, l, r) {
  return qr(
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
function L(e, t, o, n, l) {
  return qr(
    $(
      e,
      t,
      o,
      n,
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
const Kr = ({ key: e }) => e ?? null, Wn = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? St(e) || qt(e) || tt(e) ? { i: zt, r: e, k: t, f: !!o } : e : null);
function s(e, t = null, o = null, n = 0, l = null, r = e === W ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Kr(t),
    ref: t && Wn(t),
    scopeId: gr,
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
const $ = Cd;
function Cd(e, t = null, o = null, n = 0, l = null, r = !1) {
  if ((!e || e === Tr) && (e = jt), kn(e)) {
    const u = to(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && Sl(u, o), _n > 0 && !r && ls && (u.shapeFlag & 6 ? ls[ls.indexOf(e)] = u : ls.push(u)), u.patchFlag = -2, u;
  }
  if (Nd(e) && (e = e.__vccOpts), t) {
    t = xd(t);
    let { class: u, style: d } = t;
    u && !St(u) && (t.class = Be(u)), ht(d) && (wl(d) && !Ze(d) && (d = Lt({}, d)), t.style = Nt(d));
  }
  const c = St(e) ? 1 : Hr(e) ? 128 : yr(e) ? 64 : ht(e) ? 4 : tt(e) ? 2 : 0;
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
function xd(e) {
  return e ? wl(e) || zr(e) ? Lt({}, e) : e : null;
}
function to(e, t, o = !1, n = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, v = t ? Sd(l || {}, t) : l, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Kr(v),
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
  return d && n && po(
    f,
    d.clone(f)
  ), f;
}
function x(e = " ", t = 0) {
  return $(ha, null, e, t);
}
function y(e = "", t = !1) {
  return t ? (a(), L(jt, null, e)) : $(jt, null, e);
}
function Es(e) {
  return e == null || typeof e == "boolean" ? $(jt) : Ze(e) ? $(
    W,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : kn(e) ? Zs(e) : $(ha, null, String(e));
}
function Zs(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : to(e);
}
function Sl(e, t) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Ze(t))
    o = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), Sl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = t._;
      !l && !zr(t) ? t._ctx = zt : l === 3 && zt && (zt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else tt(t) ? (t = { default: t, _ctx: zt }, o = 32) : (t = String(t), n & 64 ? (o = 16, t = [x(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function Sd(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        t.class !== n.class && (t.class = Be([t.class, n.class]));
      else if (l === "style")
        t.style = Nt([t.style, n.style]);
      else if (ia(l)) {
        const r = t[l], c = n[l];
        c && r !== c && !(Ze(r) && r.includes(c)) && (t[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (t[l] = n[l]);
  }
  return t;
}
function bs(e, t, o, n = null) {
  ws(e, t, 7, [
    o,
    n
  ]);
}
const Id = Lr();
let Ed = 0;
function Td(e, t, o) {
  const n = e.type, l = (t ? t.appContext : e.appContext) || Id, r = {
    uid: Ed++,
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
    scope: new tu(
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
    propsOptions: Vr(n, l),
    emitsOptions: Ur(n, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: wt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = ld.bind(null, r), e.ce && e.ce(r), r;
}
let Ht = null;
const Il = () => Ht || zt;
let sa, el;
{
  const e = da(), t = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (r) => {
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
function Jr(e) {
  return e.vnode.shapeFlag & 4;
}
let bn = !1;
function Md(e, t = !1, o = !1) {
  t && el(t);
  const { props: n, children: l } = e.vnode, r = Jr(e);
  md(e, n, r, t), gd(e, l, o || t);
  const c = r ? Pd(e, t) : void 0;
  return t && el(!1), c;
}
function Pd(e, t) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, qu);
  const { setup: n } = o;
  if (n) {
    Bs();
    const l = e.setupContext = n.length > 1 ? Ld(e) : null, r = In(e), c = xn(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = Gi(c);
    if (Ws(), r(), (u || e.sp) && !Mo(e) && Sr(e), u) {
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
    Qr(e);
}
function li(e, t, o) {
  tt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ht(t) && (e.setupState = dr(t)), Qr(e);
}
function Qr(e, t, o) {
  const n = e.type;
  e.render || (e.render = n.render || Ms);
  {
    const l = In(e);
    Bs();
    try {
      Ku(e);
    } finally {
      Ws(), l();
    }
  }
}
const Rd = {
  get(e, t) {
    return Wt(e, "get", ""), e[t];
  }
};
function Ld(e) {
  const t = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Rd),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ya(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(dr(bu(e.exposed)), {
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
function Dd(e, t = !0) {
  return tt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Nd(e) {
  return tt(e) && "__vccOpts" in e;
}
const R = (e, t) => Iu(e, t, bn);
function Fo(e, t, o) {
  try {
    ta(-1);
    const n = arguments.length;
    return n === 2 ? ht(t) && !Ze(t) ? kn(t) ? $(e, null, [t]) : $(e, t) : $(e, null, t) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && kn(o) && (o = [o]), $(e, t, o));
  } finally {
    ta(1);
  }
}
const Ud = "3.5.25";
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
const Yr = tl ? (e) => tl.createHTML(e) : (e) => e, Od = "http://www.w3.org/2000/svg", Ad = "http://www.w3.org/1998/Math/MathML", Us = typeof document < "u" ? document : null, ri = Us && /* @__PURE__ */ Us.createElement("template"), zd = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, n) => {
    const l = t === "svg" ? Us.createElementNS(Od, e) : t === "mathml" ? Us.createElementNS(Ad, e) : o ? Us.createElement(e, { is: o }) : Us.createElement(e);
    return e === "select" && n && n.multiple != null && l.setAttribute("multiple", n.multiple), l;
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
  insertStaticContent(e, t, o, n, l, r) {
    const c = o ? o.previousSibling : t.lastChild;
    if (l && (l === r || l.nextSibling))
      for (; t.insertBefore(l.cloneNode(!0), o), !(l === r || !(l = l.nextSibling)); )
        ;
    else {
      ri.innerHTML = Yr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = ri.content;
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
}, Js = "transition", Ko = "animation", Uo = Symbol("_vtc"), Xr = {
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
}, Zr = /* @__PURE__ */ Lt(
  {},
  br,
  Xr
), Fd = (e) => (e.displayName = "Transition", e.props = Zr, e), Vd = /* @__PURE__ */ Fd(
  (e, { slots: t }) => Fo(Nu, ec(e), t)
), lo = (e, t = []) => {
  Ze(e) ? e.forEach((o) => o(...t)) : e && e(...t);
}, ci = (e) => e ? Ze(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ec(e) {
  const t = {};
  for (const Y in e)
    Y in Xr || (t[Y] = e[Y]);
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
    appearToClass: f = u,
    leaveFromClass: p = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: g = `${o}-leave-to`
  } = e, _ = Bd(l), b = _ && _[0], S = _ && _[1], {
    onBeforeEnter: C,
    onEnter: I,
    onEnterCancelled: E,
    onLeave: M,
    onLeaveCancelled: N,
    onBeforeAppear: F = C,
    onAppear: V = I,
    onAppearCancelled: D = E
  } = t, q = (Y, me, oe, B) => {
    Y._enterCancelled = B, Qs(Y, me ? f : u), Qs(Y, me ? v : c), oe && oe();
  }, ue = (Y, me) => {
    Y._isLeaving = !1, Qs(Y, p), Qs(Y, g), Qs(Y, w), me && me();
  }, ie = (Y) => (me, oe) => {
    const B = Y ? V : I, H = () => q(me, Y, oe);
    lo(B, [me, H]), ui(() => {
      Qs(me, Y ? d : r), Cs(me, Y ? f : u), ci(B) || di(me, n, b, H);
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
        Y._isLeaving && (Qs(Y, p), Cs(Y, g), ci(M) || di(Y, n, S, oe));
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
function Bd(e) {
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
  return qc(e);
}
function Cs(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Uo] || (e[Uo] = /* @__PURE__ */ new Set())).add(t);
}
function Qs(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[Uo];
  o && (o.delete(t), o.size || (e[Uo] = void 0));
}
function ui(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Wd = 0;
function di(e, t, o, n) {
  const l = e._endId = ++Wd, r = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: c, timeout: u, propCount: d } = tc(e, t);
  if (!c)
    return n();
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
function tc(e, t) {
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${Js}Delay`), r = n(`${Js}Duration`), c = mi(l, r), u = n(`${Ko}Delay`), d = n(`${Ko}Duration`), v = mi(u, d);
  let f = null, p = 0, w = 0;
  t === Js ? c > 0 && (f = Js, p = c, w = r.length) : t === Ko ? v > 0 && (f = Ko, p = v, w = d.length) : (p = Math.max(c, v), f = p > 0 ? c > v ? Js : Ko : null, w = f ? f === Js ? r.length : d.length : 0);
  const g = f === Js && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Js}Property`).toString()
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
  return Math.max(...t.map((o, n) => fi(o) + fi(e[n])));
}
function fi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function sl(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Gd(e, t, o) {
  const n = e[Uo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const vi = Symbol("_vod"), jd = Symbol("_vsh"), Hd = Symbol(""), qd = /(?:^|;)\s*display\s*:/;
function Kd(e, t, o) {
  const n = e.style, l = St(o);
  let r = !1;
  if (o && !l) {
    if (t)
      if (St(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && Gn(n, u, "");
        }
      else
        for (const c in t)
          o[c] == null && Gn(n, c, "");
    for (const c in o)
      c === "display" && (r = !0), Gn(n, c, o[c]);
  } else if (l) {
    if (t !== o) {
      const c = n[Hd];
      c && (o += ";" + c), n.cssText = o, r = qd.test(o);
    }
  } else t && e.removeAttribute("style");
  vi in e && (e[vi] = r ? n.display : "", e[jd] && (n.display = "none"));
}
const pi = /\s*!important$/;
function Gn(e, t, o) {
  if (Ze(o))
    o.forEach((n) => Gn(e, t, n));
  else if (o == null && (o = ""), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const n = Jd(e, t);
    pi.test(o) ? e.setProperty(
      oo(n),
      o.replace(pi, ""),
      "important"
    ) : e[n] = o;
  }
}
const gi = ["Webkit", "Moz", "ms"], Va = {};
function Jd(e, t) {
  const o = Va[t];
  if (o)
    return o;
  let n = ms(t);
  if (n !== "filter" && n in e)
    return Va[t] = n;
  n = ca(n);
  for (let l = 0; l < gi.length; l++) {
    const r = gi[l] + n;
    if (r in e)
      return Va[t] = r;
  }
  return t;
}
const hi = "http://www.w3.org/1999/xlink";
function yi(e, t, o, n, l, r = Zc(t)) {
  n && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(hi, t.slice(6, t.length)) : e.setAttributeNS(hi, t, o) : o == null || r && !Ki(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : hs(o) ? String(o) : o
  );
}
function wi(e, t, o, n, l) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? Yr(o) : o);
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
    u === "boolean" ? o = Ki(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
  }
  try {
    e[t] = o;
  } catch {
  }
  c && e.removeAttribute(l || t);
}
function Fs(e, t, o, n) {
  e.addEventListener(t, o, n);
}
function Qd(e, t, o, n) {
  e.removeEventListener(t, o, n);
}
const _i = Symbol("_vei");
function Yd(e, t, o, n, l = null) {
  const r = e[_i] || (e[_i] = {}), c = r[t];
  if (n && c)
    c.value = n;
  else {
    const [u, d] = Xd(t);
    if (n) {
      const v = r[t] = tm(
        n,
        l
      );
      Fs(e, u, v, d);
    } else c && (Qd(e, u, c, d), r[t] = void 0);
  }
}
const ki = /(?:Once|Passive|Capture)$/;
function Xd(e) {
  let t;
  if (ki.test(e)) {
    t = {};
    let n;
    for (; n = e.match(ki); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : oo(e.slice(2)), t];
}
let Ba = 0;
const Zd = /* @__PURE__ */ Promise.resolve(), em = () => Ba || (Zd.then(() => Ba = 0), Ba = Date.now());
function tm(e, t) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    ws(
      sm(n, o.value),
      t,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = em(), o;
}
function sm(e, t) {
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
const bi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, om = (e, t, o, n, l, r) => {
  const c = l === "svg";
  t === "class" ? Gd(e, n, c) : t === "style" ? Kd(e, o, n) : ia(t) ? cl(t) || Yd(e, t, o, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : nm(e, t, n, c)) ? (wi(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && yi(e, t, n, c, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !St(n)) ? wi(e, ms(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), yi(e, t, n, c));
};
function nm(e, t, o, n) {
  if (n)
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
const sc = /* @__PURE__ */ new WeakMap(), oc = /* @__PURE__ */ new WeakMap(), oa = Symbol("_moveCb"), $i = Symbol("_enterCb"), am = (e) => (delete e.props.mode, e), lm = /* @__PURE__ */ am({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Lt({}, Zr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const o = Il(), n = kr();
    let l, r;
    return Er(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!dm(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(rm), l.forEach(cm);
      const u = l.filter(um);
      sl(o.vnode.el), u.forEach((d) => {
        const v = d.el, f = v.style;
        Cs(v, c), f.transform = f.webkitTransform = f.transitionDuration = "";
        const p = v[oa] = (w) => {
          w && w.target !== v || (!w || w.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", p), v[oa] = null, Qs(v, c));
        };
        v.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const c = ut(e), u = ec(c);
      let d = c.tag || W;
      if (l = [], r)
        for (let v = 0; v < r.length; v++) {
          const f = r[v];
          f.el && f.el instanceof Element && (l.push(f), po(
            f,
            wn(
              f,
              u,
              n,
              o
            )
          ), sc.set(f, {
            left: f.el.offsetLeft,
            top: f.el.offsetTop
          }));
        }
      r = t.default ? kl(t.default()) : [];
      for (let v = 0; v < r.length; v++) {
        const f = r[v];
        f.key != null && po(
          f,
          wn(f, u, n, o)
        );
      }
      return $(d, null, r);
    };
  }
}), im = lm;
function rm(e) {
  const t = e.el;
  t[oa] && t[oa](), t[$i] && t[$i]();
}
function cm(e) {
  oc.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function um(e) {
  const t = sc.get(e), o = oc.get(e), n = t.left - o.left, l = t.top - o.top;
  if (n || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${n}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function dm(e, t, o) {
  const n = e.cloneNode(), l = e[Uo];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && n.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && n.classList.add(u)), n.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(n);
  const { hasTransform: c } = tc(n);
  return r.removeChild(n), c;
}
const so = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ze(t) ? (o) => Fn(t, o) : t;
};
function mm(e) {
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
  created(e, { modifiers: { lazy: t, trim: o, number: n } }, l) {
    e[ds] = so(l);
    const r = n || l.props && l.props.type === "number";
    Fs(e, t ? "change" : "input", (c) => {
      c.target.composing || e[ds](xi(e.value, o, r));
    }), (o || r) && Fs(e, "change", () => {
      e.value = xi(e.value, o, r);
    }), t || (Fs(e, "compositionstart", mm), Fs(e, "compositionend", Ci), Fs(e, "change", Ci));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: n, trim: l, number: r } }, c) {
    if (e[ds] = so(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? ua(e.value) : e.value, d = t ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (n && t === o || l && e.value.trim() === d) || (e.value = d));
  }
}, na = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, o) {
    e[ds] = so(o), Fs(e, "change", () => {
      const n = e._modelValue, l = Oo(e), r = e.checked, c = e[ds];
      if (Ze(n)) {
        const u = ml(n, l), d = u !== -1;
        if (r && !d)
          c(n.concat(l));
        else if (!r && d) {
          const v = [...n];
          v.splice(u, 1), c(v);
        }
      } else if (Ao(n)) {
        const u = new Set(n);
        r ? u.add(l) : u.delete(l), c(u);
      } else
        c(nc(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Si,
  beforeUpdate(e, t, o) {
    e[ds] = so(o), Si(e, t, o);
  }
};
function Si(e, { value: t, oldValue: o }, n) {
  e._modelValue = t;
  let l;
  if (Ze(t))
    l = ml(t, n.props.value) > -1;
  else if (Ao(t))
    l = t.has(n.props.value);
  else {
    if (t === o) return;
    l = vo(t, nc(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const jn = {
  created(e, { value: t }, o) {
    e.checked = vo(t, o.props.value), e[ds] = so(o), Fs(e, "change", () => {
      e[ds](Oo(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: o }, n) {
    e[ds] = so(n), t !== o && (e.checked = vo(t, n.props.value));
  }
}, Ro = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: o } }, n) {
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
    }), e[ds] = so(n);
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
  const o = e.multiple, n = Ze(t);
  if (!(o && !n && !Ao(t))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = Oo(c);
      if (o)
        if (n) {
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
function nc(e, t) {
  const o = t ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : t;
}
const fm = ["ctrl", "shift", "alt", "meta"], vm = {
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
  exact: (e, t) => fm.some((o) => e[`${o}Key`] && !t.includes(o))
}, vt = (e, t) => {
  const o = e._withMods || (e._withMods = {}), n = t.join(".");
  return o[n] || (o[n] = ((l, ...r) => {
    for (let c = 0; c < t.length; c++) {
      const u = vm[t[c]];
      if (u && u(l, t)) return;
    }
    return e(l, ...r);
  }));
}, pm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, gs = (e, t) => {
  const o = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return o[n] || (o[n] = ((l) => {
    if (!("key" in l))
      return;
    const r = oo(l.key);
    if (t.some(
      (c) => c === r || pm[c] === r
    ))
      return e(l);
  }));
}, gm = /* @__PURE__ */ Lt({ patchProp: om }, zd);
let Ei;
function hm() {
  return Ei || (Ei = yd(gm));
}
const En = ((...e) => {
  const t = hm().createApp(...e), { mount: o } = t;
  return t.mount = (n) => {
    const l = wm(n);
    if (!l) return;
    const r = t._component;
    !tt(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, ym(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, t;
});
function ym(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function wm(e) {
  return St(e) ? document.querySelector(e) : e;
}
const eL = ho({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const tL = [
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
], sL = {
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
}, _m = [
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
], oL = [
  ..._m,
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
function km(e) {
  return !!(e && typeof e.fetchApi == "function");
}
function Vo() {
  var o, n, l;
  const e = window, t = [
    (o = e.app) == null ? void 0 : o.api,
    (l = (n = e.comfyAPI) == null ? void 0 : n.api) == null ? void 0 : l.api
  ];
  for (const r of t)
    if (km(r))
      return r;
  return null;
}
async function Vs(e, t) {
  const o = Vo();
  if (!o)
    throw new Error("ComfyUI API not available");
  return o.fetchApi(e, t);
}
function bm(e = "comfygit-panel") {
  const t = Vo();
  return (t == null ? void 0 : t.clientId) ?? (t == null ? void 0 : t.initialClientId) ?? e;
}
class ol extends Error {
  constructor(o, n, l, r) {
    super(o);
    Rn(this, "status");
    Rn(this, "data");
    Rn(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = n, this.data = l, this.endpoint = r;
  }
}
function $m() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function ct() {
  const e = k(!1), t = k(null);
  async function o(z, $e) {
    const Ge = await Vs(z, $e), mt = await Ge.text();
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
  async function n(z) {
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
    const Ge = $m(), mt = bm(), Pt = {
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
      const Fc = ((zl = (Al = Kt.status) == null ? void 0 : Al.messages) == null ? void 0 : zl[0]) || `Failed to install ${z.id}`;
      throw new ol(Fc, 500, Kt.status || {}, "/v2/manager/queue/start");
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
  async function Hs(z, $e = {}) {
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
  async function qs(z, $e = {}) {
    const Ge = { "Content-Type": "application/json" };
    return $e.authToken && (Ge["X-Git-Auth-Token"] = $e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(z)}/push`, {
      method: "POST",
      headers: Ge,
      body: JSON.stringify({ force: $e.force || !1 })
    });
  }
  async function Ks(z, $e) {
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
    const Ge = await Vs("/v2/workspace/import/preview", {
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
    const ks = await Vs("/v2/workspace/import", {
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
    getCloudAuthConfig: n,
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
    pullFromRemote: Hs,
    getPushPreview: Ls,
    pushToRemote: qs,
    validateMerge: Ks,
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
const Cm = { class: "panel-layout" }, xm = {
  key: 0,
  class: "panel-layout-header"
}, Sm = {
  key: 1,
  class: "panel-layout-search"
}, Im = { class: "panel-layout-content" }, Em = {
  key: 2,
  class: "panel-layout-footer"
}, Tm = /* @__PURE__ */ xe({
  __name: "PanelLayout",
  setup(e) {
    return (t, o) => (a(), i("div", Cm, [
      t.$slots.header ? (a(), i("div", xm, [
        at(t.$slots, "header", {}, void 0)
      ])) : y("", !0),
      t.$slots.search ? (a(), i("div", Sm, [
        at(t.$slots, "search", {}, void 0)
      ])) : y("", !0),
      s("div", Im, [
        at(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (a(), i("div", Em, [
        at(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Ie = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of t)
    o[n] = l;
  return o;
}, Ft = /* @__PURE__ */ Ie(Tm, [["__scopeId", "data-v-21565df9"]]), Mm = {
  key: 0,
  class: "panel-title-prefix"
}, Pm = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Rm = /* @__PURE__ */ xe({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (t, o) => (a(), L(bl(`h${e.level}`), {
      class: Be(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (a(), i("span", Mm, m(e.prefix), 1)) : (a(), i("span", Pm)),
        at(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Lm = /* @__PURE__ */ Ie(Rm, [["__scopeId", "data-v-c3875efc"]]), Dm = ["title"], Nm = ["width", "height"], Um = /* @__PURE__ */ xe({
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
      ])], 8, Nm))
    ], 8, Dm));
  }
}), ac = /* @__PURE__ */ Ie(Um, [["__scopeId", "data-v-6fc7f16d"]]), Om = { class: "header-left" }, Am = {
  key: 0,
  class: "header-actions"
}, zm = /* @__PURE__ */ xe({
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
      class: Be(["panel-header", { stacked: e.stacked }])
    }, [
      s("div", Om, [
        $(Lm, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            x(m(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), L(ac, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => t.$emit("info-click"))
        })) : y("", !0)
      ]),
      t.$slots.actions ? (a(), i("div", Am, [
        at(t.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Vt = /* @__PURE__ */ Ie(zm, [["__scopeId", "data-v-55a62cd6"]]), Fm = {
  key: 0,
  class: "section-title-count"
}, Vm = {
  key: 1,
  class: "section-title-icon"
}, Bm = /* @__PURE__ */ xe({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (a(), L(bl(`h${e.level}`), {
      class: Be(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && t.$emit("click"))
    }, {
      default: h(() => [
        at(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), i("span", Fm, "(" + m(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), i("span", Vm, m(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), cs = /* @__PURE__ */ Ie(Bm, [["__scopeId", "data-v-559361eb"]]), Wm = { class: "status-grid" }, Gm = { class: "status-grid__columns" }, jm = { class: "status-grid__column" }, Hm = { class: "status-grid__title" }, qm = { class: "status-grid__column status-grid__column--right" }, Km = { class: "status-grid__title" }, Jm = {
  key: 0,
  class: "status-grid__footer"
}, Qm = /* @__PURE__ */ xe({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, o) => (a(), i("div", Wm, [
      s("div", Gm, [
        s("div", jm, [
          s("h4", Hm, m(e.leftTitle), 1),
          at(t.$slots, "left", {}, void 0)
        ]),
        s("div", qm, [
          s("h4", Km, m(e.rightTitle), 1),
          at(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (a(), i("div", Jm, [
        at(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Ym = /* @__PURE__ */ Ie(Qm, [["__scopeId", "data-v-73b7ba3f"]]), Xm = {
  key: 0,
  class: "status-item__icon"
}, Zm = {
  key: 1,
  class: "status-item__count"
}, ef = { class: "status-item__label" }, tf = /* @__PURE__ */ xe({
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
    return (n, l) => (a(), i("div", {
      class: Be(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), i("span", Xm, m(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), i("span", Zm, m(e.count), 1)) : y("", !0),
      s("span", ef, m(e.label), 1)
    ], 2));
  }
}), $s = /* @__PURE__ */ Ie(tf, [["__scopeId", "data-v-6f929183"]]), sf = { class: "issue-card__header" }, of = { class: "issue-card__icon" }, nf = { class: "issue-card__title" }, af = {
  key: 0,
  class: "issue-card__content"
}, lf = {
  key: 0,
  class: "issue-card__description"
}, rf = {
  key: 1,
  class: "issue-card__items"
}, cf = {
  key: 2,
  class: "issue-card__actions"
}, uf = /* @__PURE__ */ xe({
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
    return (n, l) => (a(), i("div", {
      class: Be(["issue-card", o.value])
    }, [
      s("div", sf, [
        s("span", of, m(e.icon), 1),
        s("h4", nf, m(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), i("div", af, [
        e.description ? (a(), i("p", lf, m(e.description), 1)) : y("", !0),
        at(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), i("div", rf, [
        (a(!0), i(W, null, ye(e.items, (r, c) => (a(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, m(r), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), i("div", cf, [
        at(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), ns = /* @__PURE__ */ Ie(uf, [["__scopeId", "data-v-df6aa348"]]), df = ["type", "disabled"], mf = {
  key: 0,
  class: "spinner"
}, ff = /* @__PURE__ */ xe({
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
      class: Be(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => t.$emit("click", n))
    }, [
      e.loading ? (a(), i("span", mf)) : y("", !0),
      e.loading ? y("", !0) : at(t.$slots, "default", { key: 1 }, void 0)
    ], 10, df));
  }
}), Re = /* @__PURE__ */ Ie(ff, [["__scopeId", "data-v-772abe47"]]), vf = /* @__PURE__ */ xe({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (t, o) => (a(), i("span", {
      class: Be(["detail-label"]),
      style: Nt({ minWidth: e.minWidth })
    }, [
      at(t.$slots, "default", {}, void 0)
    ], 4));
  }
}), Hn = /* @__PURE__ */ Ie(vf, [["__scopeId", "data-v-75e9eeb8"]]), pf = /* @__PURE__ */ xe({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (a(), i("span", {
      class: Be(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      at(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), nl = /* @__PURE__ */ Ie(pf, [["__scopeId", "data-v-2f186e4c"]]), gf = { class: "detail-row" }, hf = /* @__PURE__ */ xe({
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
    return (t, o) => (a(), i("div", gf, [
      $(Hn, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          x(m(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), L(nl, {
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
}), kt = /* @__PURE__ */ Ie(hf, [["__scopeId", "data-v-ef15664a"]]), yf = { class: "modal-header" }, wf = { class: "modal-body" }, _f = { class: "status-section" }, kf = {
  key: 0,
  class: "status-section"
}, bf = { class: "section-header-row" }, $f = {
  key: 0,
  class: "workflow-group"
}, Cf = { class: "workflow-group-header" }, xf = { class: "workflow-group-title" }, Sf = { class: "workflow-list" }, If = { class: "workflow-name" }, Ef = { class: "workflow-issue" }, Tf = {
  key: 1,
  class: "workflow-group"
}, Mf = { class: "workflow-group-header" }, Pf = { class: "workflow-group-title" }, Rf = { class: "workflow-list" }, Lf = { class: "workflow-name" }, Df = { class: "workflow-issue" }, Nf = {
  key: 2,
  class: "workflow-group"
}, Uf = { class: "workflow-group-header" }, Of = { class: "workflow-group-title" }, Af = { class: "workflow-list" }, zf = { class: "workflow-name" }, Ff = {
  key: 3,
  class: "workflow-group"
}, Vf = { class: "workflow-group-header" }, Bf = { class: "workflow-group-title" }, Wf = { class: "workflow-list" }, Gf = { class: "workflow-name" }, jf = {
  key: 4,
  class: "workflow-group"
}, Hf = { class: "workflow-group-header" }, qf = { class: "workflow-group-title" }, Kf = { class: "workflow-list" }, Jf = { class: "workflow-name" }, Qf = {
  key: 5,
  class: "workflow-group"
}, Yf = { class: "workflow-group-title" }, Xf = { class: "expand-icon" }, Zf = {
  key: 0,
  class: "workflow-list"
}, ev = { class: "workflow-name" }, tv = {
  key: 1,
  class: "status-section"
}, sv = {
  key: 0,
  class: "change-group"
}, ov = { class: "change-group-header" }, nv = { class: "change-group-title" }, av = { class: "change-list" }, lv = { class: "node-name" }, iv = {
  key: 0,
  class: "dev-badge"
}, rv = {
  key: 1,
  class: "change-group"
}, cv = { class: "change-group-header" }, uv = { class: "change-group-title" }, dv = { class: "change-list" }, mv = { class: "node-name" }, fv = {
  key: 0,
  class: "dev-badge"
}, vv = {
  key: 2,
  class: "change-group"
}, pv = { class: "change-list" }, gv = { class: "change-item" }, hv = { class: "node-name" }, yv = {
  key: 3,
  class: "change-group"
}, wv = {
  key: 2,
  class: "status-section"
}, _v = { class: "section-header-row" }, kv = {
  key: 0,
  class: "drift-item"
}, bv = { class: "drift-list" }, $v = {
  key: 0,
  class: "drift-list-more"
}, Cv = {
  key: 1,
  class: "drift-item"
}, xv = { class: "drift-list" }, Sv = {
  key: 0,
  class: "drift-list-more"
}, Iv = {
  key: 2,
  class: "drift-item"
}, Ev = { class: "drift-list" }, Tv = { class: "version-actual" }, Mv = { class: "version-expected" }, Pv = {
  key: 0,
  class: "drift-list-more"
}, Rv = {
  key: 3,
  class: "drift-item"
}, Lv = { class: "repair-action" }, Dv = {
  key: 3,
  class: "status-section"
}, Nv = { class: "info-box" }, Uv = { class: "drift-list" }, Ov = {
  key: 0,
  class: "drift-list-more"
}, Av = {
  key: 4,
  class: "status-section"
}, zv = { class: "warning-box" }, Fv = {
  key: 5,
  class: "empty-state-inline"
}, Vv = { class: "modal-actions" }, Bv = /* @__PURE__ */ xe({
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
    const n = R(() => {
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
      return a(), L(Zt, { to: "body" }, [
        e.show ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: g[7] || (g[7] = (ce) => w.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: g[6] || (g[6] = vt(() => {
            }, ["stop"]))
          }, [
            s("div", yf, [
              g[8] || (g[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: g[0] || (g[0] = (ce) => w.$emit("close"))
              }, "✕")
            ]),
            s("div", wf, [
              s("div", _f, [
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
              c.value ? (a(), i("div", kf, [
                s("div", bf, [
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
                n.value.length ? (a(), i("div", $f, [
                  s("div", Cf, [
                    g[11] || (g[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", xf, "BROKEN (COMMITTED) (" + m(n.value.length) + ")", 1)
                  ]),
                  s("div", Sf, [
                    (a(!0), i(W, null, ye(n.value, (ce) => (a(), i("div", {
                      key: ce.name,
                      class: "workflow-item"
                    }, [
                      s("span", If, m(ce.name), 1),
                      s("span", Ef, m(ce.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), i("div", Tf, [
                  s("div", Mf, [
                    g[12] || (g[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", Pf, "BROKEN (UNCOMMITTED) (" + m(l.value.length) + ")", 1)
                  ]),
                  s("div", Rf, [
                    (a(!0), i(W, null, ye(l.value, (ce) => (a(), i("div", {
                      key: ce.name,
                      class: "workflow-item"
                    }, [
                      s("span", Lf, m(ce.name), 1),
                      s("span", Df, m(ce.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (b = (_ = e.status.workflows) == null ? void 0 : _.new) != null && b.length ? (a(), i("div", Nf, [
                  s("div", Uf, [
                    g[13] || (g[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", Of, "NEW (" + m(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", Af, [
                    (a(!0), i(W, null, ye(e.status.workflows.new, (ce) => (a(), i("div", {
                      key: ce,
                      class: "workflow-item"
                    }, [
                      s("span", zf, m(ce), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (S = e.status.workflows) == null ? void 0 : S.modified) != null && C.length ? (a(), i("div", Ff, [
                  s("div", Vf, [
                    g[14] || (g[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", Bf, "MODIFIED (" + m(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", Wf, [
                    (a(!0), i(W, null, ye(e.status.workflows.modified, (ce) => (a(), i("div", {
                      key: ce,
                      class: "workflow-item"
                    }, [
                      s("span", Gf, m(ce), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = (I = e.status.workflows) == null ? void 0 : I.deleted) != null && E.length ? (a(), i("div", jf, [
                  s("div", Hf, [
                    g[15] || (g[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", qf, "DELETED (" + m(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", Kf, [
                    (a(!0), i(W, null, ye(e.status.workflows.deleted, (ce) => (a(), i("div", {
                      key: ce,
                      class: "workflow-item"
                    }, [
                      s("span", Jf, m(ce), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (a(), i("div", Qf, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: g[2] || (g[2] = (ce) => o.value = !o.value)
                  }, [
                    g[16] || (g[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", Yf, "SYNCED (" + m(r.value.length) + ")", 1),
                    s("span", Xf, m(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), i("div", Zf, [
                    (a(!0), i(W, null, ye(r.value, (ce) => (a(), i("div", {
                      key: ce,
                      class: "workflow-item"
                    }, [
                      s("span", ev, m(ce), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (a(), i("div", tv, [
                $(cs, { level: "4" }, {
                  default: h(() => [...g[17] || (g[17] = [
                    x("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (N = (M = e.status.git_changes) == null ? void 0 : M.nodes_added) != null && N.length ? (a(), i("div", sv, [
                  s("div", ov, [
                    g[18] || (g[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", nv, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", av, [
                    (a(!0), i(W, null, ye(e.status.git_changes.nodes_added, (ce) => (a(), i("div", {
                      key: f(ce),
                      class: "change-item"
                    }, [
                      s("span", lv, m(f(ce)), 1),
                      p(ce) ? (a(), i("span", iv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (V = (F = e.status.git_changes) == null ? void 0 : F.nodes_removed) != null && V.length ? (a(), i("div", rv, [
                  s("div", cv, [
                    g[19] || (g[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", uv, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", dv, [
                    (a(!0), i(W, null, ye(e.status.git_changes.nodes_removed, (ce) => (a(), i("div", {
                      key: f(ce),
                      class: "change-item"
                    }, [
                      s("span", mv, m(f(ce)), 1),
                      p(ce) ? (a(), i("span", fv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (D = e.status.git_changes) != null && D.workflow_changes ? (a(), i("div", vv, [
                  g[20] || (g[20] = s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  s("div", pv, [
                    s("div", gv, [
                      s("span", hv, m(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (q = e.status.git_changes) != null && q.has_other_changes ? (a(), i("div", yv, [...g[21] || (g[21] = [
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
              (ue = e.status.comparison) != null && ue.is_synced ? y("", !0) : (a(), i("div", wv, [
                s("div", _v, [
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
                (Y = (ie = e.status.comparison) == null ? void 0 : ie.missing_nodes) != null && Y.length ? (a(), i("div", kv, [
                  $(kt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", bv, [
                    (a(!0), i(W, null, ye(e.status.comparison.missing_nodes.slice(0, 10), (ce) => (a(), i("div", {
                      key: ce,
                      class: "drift-list-item"
                    }, " - " + m(ce), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), i("div", $v, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (oe = (me = e.status.comparison) == null ? void 0 : me.extra_nodes) != null && oe.length ? (a(), i("div", Cv, [
                  $(kt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", xv, [
                    (a(!0), i(W, null, ye(e.status.comparison.extra_nodes.slice(0, 10), (ce) => (a(), i("div", {
                      key: ce,
                      class: "drift-list-item"
                    }, " - " + m(ce), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), i("div", Sv, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (H = (B = e.status.comparison) == null ? void 0 : B.version_mismatches) != null && H.length ? (a(), i("div", Iv, [
                  $(kt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", Ev, [
                    (a(!0), i(W, null, ye(e.status.comparison.version_mismatches.slice(0, 10), (ce) => (a(), i("div", {
                      key: ce.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      x(m(ce.name) + ": ", 1),
                      s("span", Tv, m(ce.actual), 1),
                      g[23] || (g[23] = x(" → ", -1)),
                      s("span", Mv, m(ce.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), i("div", Pv, " ... and " + m(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((we = e.status.comparison) == null ? void 0 : we.packages_in_sync) === !1 ? (a(), i("div", Rv, [
                  $(kt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                s("div", Lv, [
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
              (de = (se = e.status.comparison) == null ? void 0 : se.disabled_nodes) != null && de.length ? (a(), i("div", Dv, [
                $(cs, { level: "4" }, {
                  default: h(() => [...g[27] || (g[27] = [
                    x("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", Nv, [
                  g[28] || (g[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, m(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", Uv, [
                  (a(!0), i(W, null, ye(e.status.comparison.disabled_nodes.slice(0, 10), (ce) => (a(), i("div", {
                    key: ce,
                    class: "drift-list-item"
                  }, " • " + m(ce), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), i("div", Ov, " ... and " + m(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), i("div", Av, [
                $(cs, { level: "4" }, {
                  default: h(() => [...g[29] || (g[29] = [
                    x("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", zv, [
                  g[30] || (g[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                g[31] || (g[31] = s("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (a(), i("div", Fv, [...g[32] || (g[32] = [
                s("div", { class: "empty-icon" }, "✅", -1),
                s("div", { class: "empty-message" }, [
                  s("strong", null, "Environment is clean!"),
                  s("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            s("div", Vv, [
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
}), Wv = /* @__PURE__ */ Ie(Bv, [["__scopeId", "data-v-e2b37122"]]), Gv = { class: "base-modal-header" }, jv = {
  key: 0,
  class: "base-modal-title"
}, Hv = { class: "base-modal-body" }, qv = {
  key: 0,
  class: "base-modal-loading"
}, Kv = {
  key: 1,
  class: "base-modal-error"
}, Jv = {
  key: 0,
  class: "base-modal-footer"
}, Qv = /* @__PURE__ */ xe({
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
    const o = e, n = t;
    function l() {
      o.closeOnOverlayClick && n("close");
    }
    function r(c) {
      c.key === "Escape" && o.showCloseButton && n("close");
    }
    return lt(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), zo(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (a(), L(Zt, { to: "body" }, [
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
          s("div", Gv, [
            at(c.$slots, "header", {}, () => [
              e.title ? (a(), i("h3", jv, m(e.title), 1)) : y("", !0)
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
            ])])) : y("", !0)
          ]),
          s("div", Hv, [
            e.loading ? (a(), i("div", qv, "Loading...")) : e.error ? (a(), i("div", Kv, m(e.error), 1)) : at(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (a(), i("div", Jv, [
            at(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ], 4)
    ]));
  }
}), $t = /* @__PURE__ */ Ie(Qv, [["__scopeId", "data-v-06a4be14"]]), Yv = ["type", "disabled"], Xv = {
  key: 0,
  class: "spinner"
}, Zv = /* @__PURE__ */ xe({
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
      class: Be(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => t.$emit("click", n))
    }, [
      e.loading ? (a(), i("span", Xv)) : y("", !0),
      at(t.$slots, "default", {}, void 0)
    ], 10, Yv));
  }
}), Ue = /* @__PURE__ */ Ie(Zv, [["__scopeId", "data-v-f3452606"]]), ep = ["type", "value", "placeholder", "disabled"], tp = {
  key: 0,
  class: "base-input-error"
}, sp = /* @__PURE__ */ xe({
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
      class: Be(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Be(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.value)),
        onKeyup: [
          o[1] || (o[1] = gs((n) => t.$emit("enter"), ["enter"])),
          o[2] || (o[2] = gs((n) => t.$emit("escape"), ["escape"]))
        ]
      }, null, 42, ep),
      e.error ? (a(), i("span", tp, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ Ie(sp, [["__scopeId", "data-v-9ba02cdc"]]), op = ["disabled"], np = { class: "dropdown-value" }, ap = ["onClick"], lp = {
  key: 0,
  class: "dropdown-error"
}, ip = /* @__PURE__ */ xe({
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
    const o = e, n = t, l = k(!1), r = k(null), c = k(null), u = k({});
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
      n("update:modelValue", d(C)), w();
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
    }), (C, I) => (a(), i("div", {
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
        s("span", np, m(f.value), 1),
        I[0] || (I[0] = s("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, op),
      (a(), L(Zt, { to: "body" }, [
        l.value ? (a(), i("div", {
          key: 0,
          class: "dropdown-overlay",
          onClick: w
        })) : y("", !0),
        l.value ? (a(), i("div", {
          key: 1,
          ref_key: "menuRef",
          ref: c,
          class: "dropdown-menu",
          style: Nt(u.value)
        }, [
          (a(!0), i(W, null, ye(e.options, (E) => (a(), i("div", {
            key: d(E),
            class: Be(["dropdown-option", { selected: d(E) === e.modelValue }]),
            onClick: (M) => g(E)
          }, m(v(E)), 11, ap))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (a(), i("span", lp, m(e.error), 1)) : y("", !0)
    ], 512));
  }
}), rp = /* @__PURE__ */ Ie(ip, [["__scopeId", "data-v-857e085b"]]), cp = { class: "destination-section" }, up = { class: "section-label" }, dp = { class: "destination-row" }, mp = {
  key: 0,
  class: "path-separator"
}, fp = /* @__PURE__ */ xe({
  __name: "DownloadDestinationPicker",
  props: {
    modelValue: {},
    label: { default: "Download Destination" },
    suggestedDirectory: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getModelsSubdirectories: l } = ct(), r = k(""), c = k(""), u = k(""), d = k([]), v = k(!1);
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
      n("update:modelValue", b);
    }, { immediate: !0 }), gt(() => o.suggestedDirectory, g), gt(d, g), gt(r, (b, S) => {
      f || S === "" || (v.value = !0);
    }), lt(_), (b, S) => (a(), i("div", cp, [
      s("h4", up, m(e.label), 1),
      s("div", dp, [
        $(rp, {
          modelValue: r.value,
          "onUpdate:modelValue": S[0] || (S[0] = (C) => r.value = C),
          options: p.value,
          placeholder: "Select directory...",
          class: "dest-select"
        }, null, 8, ["modelValue", "options"]),
        r.value !== "__custom__" ? (a(), i("span", mp, "/")) : y("", !0),
        r.value !== "__custom__" ? (a(), L(bt, {
          key: 1,
          modelValue: c.value,
          "onUpdate:modelValue": S[1] || (S[1] = (C) => c.value = C),
          placeholder: "subfolder (optional)",
          class: "dest-subfolder"
        }, null, 8, ["modelValue"])) : y("", !0)
      ]),
      r.value === "__custom__" ? (a(), L(bt, {
        key: 0,
        modelValue: u.value,
        "onUpdate:modelValue": S[2] || (S[2] = (C) => u.value = C),
        placeholder: "Enter directory relative to models folder...",
        class: "dest-custom",
        "full-width": ""
      }, null, 8, ["modelValue"])) : y("", !0)
    ]));
  }
}), lc = /* @__PURE__ */ Ie(fp, [["__scopeId", "data-v-2fbc2b02"]]);
function vp(e) {
  const t = e.toLowerCase();
  return t === "huggingface.co" || t.endsWith(".huggingface.co") || t === "hf.co";
}
function pp(e) {
  const t = e.trim();
  if (!t) return { kind: "unknown" };
  let o;
  try {
    o = new URL(t);
  } catch {
    return { kind: "unknown" };
  }
  if (!vp(o.hostname)) return { kind: "unknown" };
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
function gp(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function Ti(e, t, o) {
  const [n, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(n)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(t)}/${gp(o)}`;
}
const hp = { class: "hf-file-browser" }, yp = { class: "browser-header" }, wp = { class: "repo-info" }, _p = { class: "repo-id" }, kp = {
  key: 0,
  class: "revision-pill"
}, bp = {
  key: 0,
  class: "loading-state"
}, $p = {
  key: 1,
  class: "error-state"
}, Cp = { class: "toolbar" }, xp = { class: "toolbar-actions" }, Sp = { class: "file-list-container" }, Ip = {
  key: 0,
  class: "file-list-header"
}, Ep = ["checked", "indeterminate"], Tp = {
  key: 1,
  class: "file-checkbox-spacer"
}, Mp = { class: "sort-indicator" }, Pp = { class: "sort-indicator" }, Rp = {
  key: 1,
  class: "empty-state"
}, Lp = {
  key: 2,
  class: "file-list"
}, Dp = ["onClick"], Np = ["checked", "onChange"], Up = { class: "file-path" }, Op = { class: "file-size" }, Ap = { class: "action-bar" }, zp = { class: "summary-info" }, Fp = { class: "summary-count" }, Vp = { class: "summary-size" }, Bp = /* @__PURE__ */ xe({
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
    const o = e, n = t, { getHuggingFaceRepoInfo: l } = ct(), r = k([]), c = k(/* @__PURE__ */ new Set()), u = k(!1), d = k(null), v = k(""), f = k(!1), p = k("name"), w = k(!0), g = k(""), _ = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, b = R(() => {
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
      n("queue", Me);
    }
    function ce() {
      if (c.value.size !== 1) return;
      const [te] = c.value;
      n("selectSource", Ti(o.repoId, o.revision, te));
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
    }), (te, Me) => (a(), i("div", hp, [
      s("div", yp, [
        s("button", {
          class: "back-btn",
          onClick: Me[0] || (Me[0] = (Se) => te.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        s("div", wp, [
          s("span", _p, m(e.repoId), 1),
          e.revision ? (a(), i("span", kp, m(e.revision), 1)) : y("", !0)
        ])
      ]),
      u.value ? (a(), i("div", bp, " Loading repository files... ")) : d.value ? (a(), i("div", $p, m(d.value), 1)) : (a(), i(W, { key: 2 }, [
        s("div", Cp, [
          $(bt, {
            modelValue: v.value,
            "onUpdate:modelValue": Me[1] || (Me[1] = (Se) => v.value = Se),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          s("div", xp, [
            s("button", {
              class: Be(["toggle-btn", { active: f.value }]),
              onClick: Me[2] || (Me[2] = (Se) => f.value = !f.value)
            }, m(f.value ? "Models Only" : "All Files"), 3),
            F.value === "download" ? (a(), i("button", {
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
        s("div", Sp, [
          b.value.length > 0 ? (a(), i("div", Ip, [
            F.value === "download" ? (a(), i("input", {
              key: 0,
              type: "checkbox",
              checked: C.value,
              indeterminate: I.value && !C.value,
              class: "file-checkbox",
              onChange: B
            }, null, 40, Ep)) : (a(), i("span", Tp)),
            s("span", {
              class: "header-name",
              onClick: Me[3] || (Me[3] = (Se) => H("name"))
            }, [
              Me[7] || (Me[7] = x(" Name ", -1)),
              s("span", Mp, m(p.value === "name" ? w.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: Me[4] || (Me[4] = (Se) => H("size"))
            }, [
              Me[8] || (Me[8] = x(" Size ", -1)),
              s("span", Pp, m(p.value === "size" ? w.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          b.value.length === 0 ? (a(), i("div", Rp, m(r.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (a(), i("div", Lp, [
            (a(!0), i(W, null, ye(S.value, (Se) => (a(), i("div", {
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
              }, null, 40, Np),
              s("span", Up, m(Se.path), 1),
              s("span", Op, m(ue(Se.size)), 1)
            ], 10, Dp))), 128))
          ]))
        ]),
        F.value === "download" ? (a(), L(lc, {
          key: 0,
          modelValue: g.value,
          "onUpdate:modelValue": Me[6] || (Me[6] = (Se) => g.value = Se),
          "suggested-directory": N.value
        }, null, 8, ["modelValue", "suggested-directory"])) : y("", !0),
        s("div", Ap, [
          s("div", zp, [
            s("span", Fp, m(D.value), 1),
            s("span", Vp, m(ue(M.value)), 1)
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
}), Wp = /* @__PURE__ */ Ie(Bp, [["__scopeId", "data-v-06caa551"]]), Gp = { class: "token-config-modal" }, jp = { class: "provider-info" }, Hp = { class: "provider-icon" }, qp = { class: "provider-name" }, Kp = {
  key: 0,
  class: "current-token"
}, Jp = { class: "mask" }, Qp = { class: "token-input-section" }, Yp = { class: "input-label" }, Xp = { class: "help-text" }, Zp = ["href"], eg = { class: "modal-actions" }, tg = /* @__PURE__ */ xe({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {},
    overlayZIndex: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: t }) {
    const o = e, n = t, { updateConfig: l } = ct(), r = k(""), c = k(!1), u = k(!1), d = R(
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
          await l(b), r.value = "", n("saved"), n("close");
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
        await l(b), n("cleared"), n("close");
      } catch (b) {
        console.error("Failed to clear token:", b);
      } finally {
        u.value = !1;
      }
    }
    return (b, S) => (a(), L($t, {
      title: "Configure API Token",
      "overlay-z-index": e.overlayZIndex,
      onClose: S[2] || (S[2] = (C) => b.$emit("close"))
    }, {
      body: h(() => [
        s("div", Gp, [
          s("div", jp, [
            s("span", Hp, m(v.value), 1),
            s("span", qp, m(d.value), 1)
          ]),
          e.currentTokenMask ? (a(), i("div", Kp, [
            S[4] || (S[4] = s("span", { class: "label" }, "Current token:", -1)),
            s("span", Jp, m(e.currentTokenMask), 1),
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
          s("div", Qp, [
            s("label", Yp, m(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            $(bt, {
              modelValue: r.value,
              "onUpdate:modelValue": S[0] || (S[0] = (C) => r.value = C),
              type: "password",
              placeholder: f.value
            }, null, 8, ["modelValue", "placeholder"]),
            s("div", Xp, [
              s("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, m(w.value), 9, Zp)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        s("div", eg, [
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
}), sg = /* @__PURE__ */ Ie(tg, [["__scopeId", "data-v-525ec64a"]]), og = { class: "huggingface-tab" }, ng = {
  key: 0,
  class: "search-section"
}, ag = { class: "search-header" }, lg = { class: "search-bar" }, ig = {
  key: 1,
  class: "search-results"
}, rg = {
  key: 0,
  class: "loading-state"
}, cg = {
  key: 1,
  class: "error-state"
}, ug = {
  key: 2,
  class: "results-list"
}, dg = ["onClick"], mg = { class: "repo-header" }, fg = { class: "repo-id" }, vg = { class: "repo-stats" }, pg = {
  class: "stat",
  title: "Downloads"
}, gg = {
  class: "stat",
  title: "Likes"
}, hg = {
  key: 0,
  class: "repo-desc"
}, yg = {
  key: 1,
  class: "repo-tags"
}, wg = {
  key: 3,
  class: "empty-state"
}, _g = {
  key: 4,
  class: "hint-state"
}, kg = /* @__PURE__ */ xe({
  __name: "HuggingFaceTab",
  props: {
    modeKind: { default: "download" },
    actionLabel: { default: "Queue Download" },
    overlayZIndex: { default: 10003 }
  },
  emits: ["queue", "selectSource"],
  setup(e) {
    const { searchHuggingFaceRepos: t, getConfig: o } = ct(), n = k("search"), l = k(""), r = k([]), c = k(!1), u = k(null), d = k(!1), v = k(null), f = k("main"), p = k(), w = k(), g = k(!1), _ = k(null), b = R(() => {
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
      const D = pp(V);
      if (D.kind === "file" && D.repoId && D.path) {
        v.value = D.repoId, f.value = D.revision || "main";
        const q = D.path.split("/");
        q.length > 1 ? p.value = q.slice(0, -1).join("/") : p.value = void 0, w.value = D.path, n.value = "browse";
        return;
      }
      if (D.kind === "repo" && D.repoId) {
        v.value = D.repoId, f.value = D.revision || "main", p.value = D.path, w.value = void 0, n.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(V) && !V.includes("://")) {
        v.value = V, f.value = "main", p.value = void 0, w.value = void 0, n.value = "browse";
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
      v.value = V, f.value = "main", p.value = void 0, w.value = void 0, n.value = "browse";
    }
    function E() {
      n.value = "search", v.value = null, p.value = void 0, w.value = void 0;
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
    return lt(M), (V, D) => (a(), i("div", og, [
      n.value === "search" ? (a(), i("div", ng, [
        s("div", ag, [
          s("div", lg, [
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
      n.value === "search" ? (a(), i("div", ig, [
        c.value ? (a(), i("div", rg, " Searching HuggingFace... ")) : u.value ? (a(), i("div", cg, [
          s("p", null, m(u.value), 1),
          b.value ? (a(), L(Ue, {
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
        ])) : r.value.length > 0 ? (a(), i("div", ug, [
          (a(!0), i(W, null, ye(r.value, (q) => (a(), i("div", {
            key: q.repo_id,
            class: "repo-card",
            onClick: (ue) => I(q.repo_id)
          }, [
            s("div", mg, [
              s("span", fg, m(q.repo_id), 1),
              s("div", vg, [
                s("span", pg, [
                  D[8] || (D[8] = s("span", { class: "stat-icon" }, "↓", -1)),
                  x(" " + m(S(q.downloads)), 1)
                ]),
                s("span", gg, [
                  D[9] || (D[9] = s("span", { class: "stat-icon" }, "★", -1)),
                  x(" " + m(S(q.likes)), 1)
                ])
              ])
            ]),
            q.description ? (a(), i("p", hg, m(q.description), 1)) : y("", !0),
            q.tags.length > 0 ? (a(), i("div", yg, [
              (a(!0), i(W, null, ye(q.tags.slice(0, 5), (ue) => (a(), i("span", {
                key: ue,
                class: "tag"
              }, m(ue), 1))), 128))
            ])) : y("", !0)
          ], 8, dg))), 128))
        ])) : d.value ? (a(), i("div", wg, " No repositories found ")) : (a(), i("div", _g, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (a(), L(Wp, {
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
      g.value ? (a(), L(sg, {
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
}), ic = /* @__PURE__ */ Ie(kg, [["__scopeId", "data-v-eccbf32d"]]), bg = { class: "candidate-card" }, $g = { class: "candidate-main" }, Cg = { class: "candidate-url" }, xg = { class: "candidate-meta" }, Sg = { class: "meta-chip" }, Ig = {
  key: 0,
  class: "meta-chip"
}, Eg = ["aria-expanded"], Tg = {
  key: 1,
  class: "meta-chip"
}, Mg = { class: "match-popover-reasons" }, Pg = { class: "candidate-footer" }, Rg = {
  key: 0,
  class: "candidate-context"
}, Lg = { key: 1 }, Dg = /* @__PURE__ */ xe({
  __name: "ModelSourceCandidateCard",
  props: {
    candidate: {},
    actionLabel: { default: "Use as Source" },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = t, n = k(!1), l = k(null);
    function r() {
      n.value = !1;
    }
    function c(f) {
      var w;
      const p = f.target;
      p instanceof Node && ((w = l.value) != null && w.contains(p) || r());
    }
    function u(f) {
      f.key === "Escape" && r();
    }
    gt(n, (f) => {
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
      return a(), i("article", bg, [
        s("div", $g, [
          s("div", Cg, m(e.candidate.url), 1),
          s("div", xg, [
            s("span", Sg, [
              p[3] || (p[3] = s("span", { class: "chip-label" }, "Provider", -1)),
              s("span", null, m(d(e.candidate.source_type)), 1)
            ]),
            e.candidate.workflow ? (a(), i("span", Ig, [
              p[4] || (p[4] = s("span", { class: "chip-label" }, "Workflow", -1)),
              s("span", null, m(e.candidate.workflow), 1)
            ])) : y("", !0),
            e.candidate.confidence ? (a(), i("span", {
              key: 1,
              ref_key: "matchPopoverRoot",
              ref: l,
              class: "match-chip-wrap"
            }, [
              (w = e.candidate.reasons) != null && w.length ? (a(), i("button", {
                key: 0,
                class: "meta-chip meta-chip-button",
                type: "button",
                "aria-expanded": n.value,
                onClick: p[0] || (p[0] = vt((_) => n.value = !n.value, ["stop"]))
              }, [
                p[5] || (p[5] = s("span", { class: "chip-label" }, "Match", -1)),
                s("span", null, m(v(e.candidate.confidence)), 1)
              ], 8, Eg)) : (a(), i("span", Tg, [
                p[6] || (p[6] = s("span", { class: "chip-label" }, "Match", -1)),
                s("span", null, m(v(e.candidate.confidence)), 1)
              ])),
              n.value && ((g = e.candidate.reasons) != null && g.length) ? (a(), i("div", {
                key: 2,
                class: "match-popover",
                onClick: p[1] || (p[1] = vt(() => {
                }, ["stop"]))
              }, [
                p[7] || (p[7] = s("div", { class: "match-popover-title" }, "Matched by", -1)),
                s("div", Mg, [
                  (a(!0), i(W, null, ye(e.candidate.reasons, (_) => (a(), i("span", {
                    key: _,
                    class: "reason-chip"
                  }, m(_), 1))), 128))
                ])
              ])) : y("", !0)
            ], 512)) : y("", !0)
          ]),
          s("div", Pg, [
            e.candidate.context ? (a(), i("details", Rg, [
              p[8] || (p[8] = s("summary", null, "Workflow snippet", -1)),
              s("p", null, m(e.candidate.context), 1)
            ])) : (a(), i("div", Lg)),
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
}), rc = /* @__PURE__ */ Ie(Dg, [["__scopeId", "data-v-329b9068"]]), Ng = { class: "source-url-form" }, Ug = { class: "input-group" }, Og = { key: 0 }, Ag = {
  key: 1,
  class: "description"
}, zg = { class: "actions" }, Fg = /* @__PURE__ */ xe({
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
    const o = e, n = t, l = R(() => o.modelValue.trim()), r = R(() => {
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
      c.value && n("submit", l.value);
    }
    return (d, v) => (a(), i("div", Ng, [
      s("div", Ug, [
        e.label ? (a(), i("label", Og, m(e.label), 1)) : y("", !0),
        $(bt, {
          "model-value": e.modelValue,
          placeholder: e.placeholder,
          error: r.value || void 0,
          "full-width": "",
          "onUpdate:modelValue": v[0] || (v[0] = (f) => n("update:modelValue", f)),
          onEnter: u
        }, null, 8, ["model-value", "placeholder", "error"]),
        e.description ? (a(), i("p", Ag, m(e.description), 1)) : y("", !0)
      ]),
      at(d.$slots, "default", {}, void 0),
      s("div", zg, [
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
}), cc = /* @__PURE__ */ Ie(Fg, [["__scopeId", "data-v-e2610d45"]]), Vg = { class: "source-picker" }, Bg = {
  key: 0,
  class: "model-summary"
}, Wg = { class: "model-heading" }, Gg = { class: "summary-name" }, jg = { class: "summary-meta" }, Hg = {
  key: 0,
  class: "hash-row"
}, qg = { class: "hash-value" }, Kg = {
  key: 1,
  class: "hash-row"
}, Jg = { class: "hash-value" }, Qg = {
  key: 2,
  class: "hash-row"
}, Yg = { class: "hash-value" }, Xg = {
  key: 4,
  class: "hash-error"
}, Zg = { class: "tab-bar" }, eh = ["onClick"], th = {
  key: 1,
  class: "tab-content"
}, sh = { class: "section-header-row" }, oh = {
  key: 0,
  class: "state-message"
}, nh = {
  key: 1,
  class: "error-message"
}, ah = {
  key: 2,
  class: "candidate-list"
}, lh = {
  key: 3,
  class: "state-message"
}, ih = {
  key: 2,
  class: "tab-content source-browser-content"
}, rh = {
  key: 3,
  class: "tab-content"
}, ch = { class: "section-header-row" }, uh = /* @__PURE__ */ xe({
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
    const o = e, n = t, { getModelSourceCandidates: l, computeModelHashes: r } = ct(), c = [
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
          n("hashesComputed", I);
        } catch (I) {
          g.value = I instanceof Error ? I.message : "Failed to compute hashes";
        } finally {
          w.value = !1;
        }
      }
    }
    return lt(S), (I, E) => (a(), i("div", Vg, [
      e.showModelSummary ? (a(), i("div", Bg, [
        s("div", Wg, [
          E[4] || (E[4] = s("div", { class: "summary-label" }, "Local model", -1)),
          s("div", Gg, m(e.model.filename), 1)
        ]),
        s("div", jg, [
          e.model.hash ? (a(), i("div", Hg, [
            E[5] || (E[5] = s("span", { class: "hash-label" }, "quick hash", -1)),
            s("span", qg, m(e.model.hash), 1)
          ])) : y("", !0),
          e.model.blake3 ? (a(), i("div", Kg, [
            E[6] || (E[6] = s("span", { class: "hash-label" }, "blake3", -1)),
            s("span", Jg, m(e.model.blake3), 1)
          ])) : y("", !0),
          e.model.sha256 ? (a(), i("div", Qg, [
            E[7] || (E[7] = s("span", { class: "hash-label" }, "sha256", -1)),
            s("span", Yg, m(e.model.sha256), 1)
          ])) : y("", !0),
          b.value ? (a(), L(Ue, {
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
          g.value ? (a(), i("p", Xg, m(g.value), 1)) : y("", !0)
        ])
      ])) : y("", !0),
      s("div", Zg, [
        (a(), i(W, null, ye(c, (M) => s("button", {
          key: M.id,
          class: Be(["tab-btn", { active: u.value === M.id }]),
          onClick: (N) => u.value = M.id
        }, m(M.label), 11, eh)), 64))
      ]),
      u.value === "workflow" ? (a(), i("section", th, [
        s("div", sh, [
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
        v.value ? (a(), i("div", oh, "Scanning workflows...")) : f.value ? (a(), i("div", nh, m(f.value), 1)) : _.value.length ? (a(), i("div", ah, [
          (a(!0), i(W, null, ye(_.value, (M) => (a(), L(rc, {
            key: `${M.workflow}:${M.url}`,
            candidate: M,
            "action-label": e.actionLabel,
            loading: e.loadingUrl === M.url,
            onSelect: E[0] || (E[0] = (N) => n("selectSource", N))
          }, null, 8, ["candidate", "action-label", "loading"]))), 128))
        ])) : (a(), i("div", lh, " No likely workflow links found. Try direct URL for now. "))
      ])) : u.value === "huggingface" ? (a(), i("section", ih, [
        $(ic, {
          "mode-kind": "source",
          "action-label": e.actionLabel,
          "overlay-z-index": e.overlayZIndex,
          onSelectSource: E[1] || (E[1] = (M) => n("selectSource", M))
        }, null, 8, ["action-label", "overlay-z-index"])
      ])) : u.value === "direct" ? (a(), i("section", rh, [
        s("div", ch, [
          s("div", null, [
            E[11] || (E[11] = s("h4", null, "Direct URL", -1)),
            s("p", null, m(e.directDescription), 1)
          ])
        ]),
        $(cc, {
          modelValue: p.value,
          "onUpdate:modelValue": E[2] || (E[2] = (M) => p.value = M),
          label: "",
          placeholder: e.directPlaceholder,
          "action-label": e.actionLabel,
          loading: e.loadingUrl === p.value.trim(),
          onSubmit: E[3] || (E[3] = (M) => n("selectSource", M))
        }, null, 8, ["modelValue", "placeholder", "action-label", "loading"])
      ])) : y("", !0)
    ]));
  }
}), dh = /* @__PURE__ */ Ie(uh, [["__scopeId", "data-v-e9633660"]]), mh = {
  key: 0,
  class: "error-message"
}, fh = /* @__PURE__ */ xe({
  __name: "ModelSourceModal",
  props: {
    model: {},
    overlayZIndex: { default: 10011 }
  },
  emits: ["close", "saved", "hashesComputed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { addModelSource: l } = ct(), r = k(o.model), c = k(null), u = k(null);
    gt(() => o.model, (f) => {
      r.value = f;
    });
    async function d(f) {
      if (!(!f || !o.model.hash)) {
        c.value = f, u.value = null;
        try {
          await l(o.model.hash, f), n("saved"), n("close");
        } catch (p) {
          u.value = p instanceof Error ? p.message : "Failed to save source";
        } finally {
          c.value = null;
        }
      }
    }
    function v(f) {
      r.value = f, n("hashesComputed");
    }
    return (f, p) => (a(), L($t, {
      title: `Find Source: ${e.model.filename}`,
      size: "lg",
      "fixed-height": "",
      "overlay-z-index": e.overlayZIndex,
      onClose: p[1] || (p[1] = (w) => n("close"))
    }, {
      body: h(() => [
        $(dh, {
          model: r.value,
          "loading-url": c.value,
          "overlay-z-index": e.overlayZIndex,
          "action-label": "Use as Source",
          onSelectSource: d,
          onHashesComputed: v
        }, null, 8, ["model", "loading-url", "overlay-z-index"]),
        u.value ? (a(), i("p", mh, m(u.value), 1)) : y("", !0)
      ]),
      footer: h(() => [
        $(Ue, {
          variant: "secondary",
          onClick: p[0] || (p[0] = (w) => n("close"))
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
}), uc = /* @__PURE__ */ Ie(fh, [["__scopeId", "data-v-62104cdb"]]), vh = { class: "readiness-body" }, ph = {
  key: 0,
  class: "issue-section"
}, gh = { class: "section-heading" }, hh = { class: "issue-list" }, yh = { class: "issue-main" }, wh = { class: "issue-name" }, _h = { class: "issue-meta" }, kh = { key: 0 }, bh = { key: 1 }, $h = ["disabled", "onClick"], Ch = {
  key: 1,
  class: "issue-note"
}, xh = {
  key: 1,
  class: "issue-section"
}, Sh = { class: "section-heading" }, Ih = { class: "issue-list" }, Eh = { class: "issue-main" }, Th = { class: "issue-name" }, Mh = { class: "issue-meta" }, Ph = { class: "issue-reason" }, Rh = ["disabled", "onClick"], Lh = {
  key: 1,
  class: "issue-note"
}, Dh = {
  key: 2,
  class: "empty-state"
}, Nh = {
  key: 3,
  class: "error-message"
}, Uh = /* @__PURE__ */ xe({
  __name: "ReadinessIssuesModal",
  props: {
    warnings: {}
  },
  emits: ["close", "revalidate"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getModelDetails: l, updateNodeCriticality: r } = ct(), c = k(null), u = k(null), d = k(null), v = k(null), f = R(() => o.warnings.models_without_sources), p = R(() => o.warnings.nodes_without_provenance);
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
        n("revalidate");
      } catch (C) {
        v.value = C instanceof Error ? C.message : `Failed to update ${S}`;
      } finally {
        d.value = null;
      }
    }
    function _() {
      c.value = null, n("revalidate");
    }
    function b() {
      n("revalidate");
    }
    return (S, C) => (a(), i(W, null, [
      $($t, {
        size: "lg",
        "overlay-z-index": 10007,
        onClose: C[1] || (C[1] = (I) => n("close"))
      }, {
        header: h(() => [...C[3] || (C[3] = [
          s("div", { class: "readiness-heading" }, [
            s("h3", { class: "readiness-title" }, "Review Reproducibility Issues"),
            s("p", { class: "readiness-subtitle" }, " Add missing source details where possible. Required development nodes can also be marked optional when they should stay local but not be part of portable builds. ")
          ], -1)
        ])]),
        body: h(() => [
          s("div", vh, [
            f.value.length ? (a(), i("section", ph, [
              s("div", gh, [
                C[4] || (C[4] = s("h4", null, "Models Missing Source URLs", -1)),
                s("span", null, m(f.value.length), 1)
              ]),
              s("div", hh, [
                (a(!0), i(W, null, ye(f.value, (I) => (a(), i("article", {
                  key: I.hash || I.filename,
                  class: "issue-item"
                }, [
                  s("div", yh, [
                    s("div", wh, m(I.filename), 1),
                    s("div", _h, [
                      I.hash ? (a(), i("span", kh, "hash " + m(I.hash), 1)) : y("", !0),
                      I.workflows.length ? (a(), i("span", bh, "used by " + m(I.workflows.join(", ")), 1)) : y("", !0),
                      s("span", null, m(I.criticality || "required"), 1)
                    ])
                  ]),
                  I.hash ? (a(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: u.value === I.hash,
                    onClick: (E) => w(I.hash)
                  }, m(u.value === I.hash ? "Loading..." : "Add Source"), 9, $h)) : (a(), i("span", Ch, "Missing hash"))
                ]))), 128))
              ])
            ])) : y("", !0),
            p.value.length ? (a(), i("section", xh, [
              s("div", Sh, [
                C[5] || (C[5] = s("h4", null, "Custom Nodes Missing Portable Provenance", -1)),
                s("span", null, m(p.value.length), 1)
              ]),
              s("div", Ih, [
                (a(!0), i(W, null, ye(p.value, (I) => (a(), i("article", {
                  key: I.name,
                  class: "issue-item"
                }, [
                  s("div", Eh, [
                    s("div", Th, m(I.name), 1),
                    s("div", Mh, [
                      s("span", null, m(I.source), 1),
                      s("span", null, m(I.criticality), 1)
                    ]),
                    s("p", Ph, m(I.reason), 1)
                  ]),
                  I.criticality === "required" ? (a(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: d.value === I.name,
                    onClick: (E) => g(I.name)
                  }, m(d.value === I.name ? "Saving..." : "Mark Optional"), 9, Rh)) : (a(), i("span", Lh, "Optional warning"))
                ]))), 128))
              ])
            ])) : y("", !0),
            !f.value.length && !p.value.length ? (a(), i("div", Dh, " No reproducibility issues remain. ")) : y("", !0),
            v.value ? (a(), i("div", Nh, m(v.value), 1)) : y("", !0)
          ])
        ]),
        footer: h(() => [
          s("button", {
            class: "primary-action",
            onClick: C[0] || (C[0] = (I) => n("close"))
          }, " Done ")
        ]),
        _: 1
      }),
      c.value ? (a(), L(uc, {
        key: 0,
        model: c.value,
        "overlay-z-index": 10008,
        onClose: C[2] || (C[2] = (I) => c.value = null),
        onSaved: _,
        onHashesComputed: b
      }, null, 8, ["model"])) : y("", !0)
    ], 64));
  }
}), El = /* @__PURE__ */ Ie(Uh, [["__scopeId", "data-v-03f88a10"]]), Oh = { class: "health-section-header" }, Ah = { class: "suggestions-content" }, zh = { class: "suggestions-text" }, Fh = { style: { "margin-top": "var(--cg-space-3)" } }, Vh = {
  key: 1,
  class: "no-issues-text"
}, Bh = {
  key: 2,
  class: "no-issues-text"
}, Wh = /* @__PURE__ */ xe({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: t, emit: o }) {
    const n = e, l = k(!1), r = k(!1), c = k(!1), u = k(null), d = k(null), v = k(!1), { validateExport: f } = ct();
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
      const X = n.status.workflows.analyzed || [], G = X.filter(
        (fe) => fe.unresolved_models_count > 0 || fe.ambiguous_models_count > 0
      );
      return G.length === 0 && n.status.missing_models_count > 0 ? X.filter((fe) => fe.sync_state === "synced") : G;
    });
    function N() {
      const X = M.value;
      X.length !== 0 && (b.value = !0, _("repair-missing-models", X.map((G) => G.name)));
    }
    function F() {
      b.value = !1;
    }
    t({ resetRepairingState: F, resetRepairingEnvironmentState: I, closeDetailModal: E });
    const V = R(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), D = R(() => n.status.has_changes), q = R(() => {
      const X = n.status.git_changes;
      return X.nodes_added.length > 0 || X.nodes_removed.length > 0 || X.workflow_changes;
    }), ue = R(() => n.status.has_changes || V.value), ie = R(() => {
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
        n.setupState,
        n.status.has_changes,
        n.status.workflows.new.length,
        n.status.workflows.modified.length,
        n.status.workflows.deleted.length,
        n.status.missing_models_count,
        n.status.comparison.is_synced,
        n.status.has_legacy_manager
      ],
      () => {
        n.setupState === "managed" && we();
      },
      { immediate: !0 }
    );
    const de = R(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), ce = R(() => n.status.git_changes.has_other_changes), K = R(() => {
      var X;
      return ((X = n.status.workflows.analyzed) == null ? void 0 : X.filter((G) => G.status === "broken")) || [];
    }), ee = R(() => {
      var X;
      return ((X = n.status.workflows.analyzed) == null ? void 0 : X.filter(
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
    }), A = R(() => te.value || ee.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), le = R(() => A.value || B.value || !!d.value), Ce = R(() => {
      const X = [];
      return n.status.workflows.new.length > 0 && X.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && X.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && X.push(`${n.status.workflows.deleted.length} deleted`), X.length > 0 ? `${X.join(", ")} workflow${X.length === 1 && !X[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Ee = R(() => {
      var fe, he;
      const X = [], G = n.status.comparison;
      return (fe = G.missing_nodes) != null && fe.length && X.push(`${G.missing_nodes.length} missing node${G.missing_nodes.length === 1 ? "" : "s"}`), (he = G.extra_nodes) != null && he.length && X.push(`${G.extra_nodes.length} untracked node${G.extra_nodes.length === 1 ? "" : "s"}`), X.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${X.join(" and ")}.`;
    }), ke = R(() => {
      var fe, he;
      const X = [], G = n.status.comparison;
      return (fe = G.extra_nodes) != null && fe.length && (G.extra_nodes.slice(0, 3).forEach((je) => {
        X.push(`Untracked: ${je}`);
      }), G.extra_nodes.length > 3 && X.push(`...and ${G.extra_nodes.length - 3} more untracked`)), (he = G.missing_nodes) != null && he.length && (G.missing_nodes.slice(0, 3).forEach((je) => {
        X.push(`Missing: ${je}`);
      }), G.missing_nodes.length > 3 && X.push(`...and ${G.missing_nodes.length - 3} more missing`)), X;
    });
    return (X, G) => (a(), i(W, null, [
      $(Ft, null, {
        header: h(() => [
          $(Vt, { title: "STATUS" })
        ]),
        content: h(() => [
          n.setupState === "no_workspace" ? (a(), L(ns, {
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
          })) : n.setupState === "unmanaged" ? (a(), L(ns, {
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
          })) : n.setupState === "empty_workspace" ? (a(), L(ns, {
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
            s("div", Oh, [
              $(cs, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...G[18] || (G[18] = [
                  x(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              $(Vd, { name: "fade" }, {
                default: h(() => [
                  r.value ? (a(), L(Re, {
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
            $(Ym, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, ss({
              left: h(() => [
                e.status.workflows.new.length ? (a(), L($s, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), L($s, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), L($s, {
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
                e.status.git_changes.nodes_added.length ? (a(), L($s, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), L($s, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), L($s, {
                  key: 2,
                  icon: "●",
                  count: de.value,
                  label: de.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                ce.value ? (a(), L($s, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                D.value && !q.value && !ce.value ? (a(), L($s, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                D.value ? y("", !0) : (a(), L($s, {
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
                  s("div", Ah, [
                    s("span", zh, m(Ce.value), 1),
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
          e.status.is_detached_head ? (a(), L(ns, {
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
          s("div", Fh, [
            $(cs, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...G[23] || (G[23] = [
                x(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            le.value ? (a(), i(W, { key: 0 }, [
              K.value.length > 0 ? (a(), L(ns, {
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
              ee.value.length > 0 ? (a(), L(ns, {
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
              e.status.missing_models_count > 0 && !te.value ? (a(), L(ns, {
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
              e.status.comparison.is_synced ? y("", !0) : (a(), L(ns, {
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
              e.status.has_legacy_manager ? (a(), L(ns, {
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
              B.value ? (a(), L(ns, {
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
              }, 8, ["items"])) : d.value ? (a(), L(ns, {
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
            ], 64)) : ue.value ? (a(), i("span", Vh, "No issues")) : (a(), i("span", Bh, "No runtime issues detected"))
          ])
        ]),
        _: 1
      }),
      $(Wv, {
        show: l.value,
        status: e.status,
        "is-repairing": S.value,
        onClose: G[13] || (G[13] = (fe) => l.value = !1),
        onNavigateWorkflows: w,
        onNavigateNodes: g,
        onRepair: C
      }, null, 8, ["show", "status", "is-repairing"]),
      c.value && u.value ? (a(), L(El, {
        key: 0,
        warnings: u.value.warnings,
        onClose: G[14] || (G[14] = (fe) => c.value = !1),
        onRevalidate: se
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), Gh = /* @__PURE__ */ Ie(Wh, [["__scopeId", "data-v-f6b165fd"]]);
async function An(e, t) {
  const o = await Vs(e, t);
  if (!o.ok) {
    const n = await o.json().catch(() => ({}));
    throw new Error(n.error || n.message || `Request failed: ${o.status}`);
  }
  return o.json();
}
function jh() {
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
  async function n() {
    await An("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: t,
    restart: o,
    kill: n
  };
}
const Hh = {
  key: 0,
  class: "base-title-count"
}, qh = /* @__PURE__ */ xe({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (t, o) => (a(), L(bl(`h${e.level}`), {
      class: Be(["base-title", e.variant])
    }, {
      default: h(() => [
        at(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), i("span", Hh, "(" + m(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), fo = /* @__PURE__ */ Ie(qh, [["__scopeId", "data-v-5a01561d"]]), Kh = ["value", "disabled"], Jh = {
  key: 0,
  value: "",
  disabled: ""
}, Qh = ["value"], Yh = {
  key: 0,
  class: "base-select-error"
}, Xh = /* @__PURE__ */ xe({
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
      class: Be(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Be(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => n.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (a(), i("option", Jh, m(e.placeholder), 1)) : y("", !0),
        (a(!0), i(W, null, ye(e.options, (r) => (a(), i("option", {
          key: t(r),
          value: t(r)
        }, m(o(r)), 9, Qh))), 128))
      ], 42, Kh),
      e.error ? (a(), i("span", Yh, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), qn = /* @__PURE__ */ Ie(Xh, [["__scopeId", "data-v-4996bfe0"]]), Zh = { class: "popover-header" }, ey = { class: "popover-title" }, ty = { class: "popover-content" }, sy = {
  key: 0,
  class: "popover-actions"
}, oy = /* @__PURE__ */ xe({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" },
    overlayZIndex: { default: 10004 }
  },
  emits: ["close"],
  setup(e) {
    return (t, o) => (a(), L(Zt, { to: "body" }, [
      e.show ? (a(), i("div", {
        key: 0,
        class: "popover-overlay",
        style: Nt({ zIndex: e.overlayZIndex }),
        onClick: o[2] || (o[2] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "popover",
          style: Nt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = vt(() => {
          }, ["stop"]))
        }, [
          s("div", Zh, [
            s("h4", ey, m(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", ty, [
            at(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (a(), i("div", sy, [
            at(t.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ], 4)) : y("", !0)
    ]));
  }
}), fs = /* @__PURE__ */ Ie(oy, [["__scopeId", "data-v-7c1f5547"]]), ny = { class: "detail-section" }, ay = {
  key: 0,
  class: "empty-message"
}, ly = { class: "model-header" }, iy = { class: "model-name" }, ry = { class: "model-details" }, cy = { class: "model-row" }, uy = { class: "model-row" }, dy = { class: "label" }, my = {
  key: 0,
  class: "model-row model-row-nodes"
}, fy = { class: "node-list" }, vy = ["onClick"], py = {
  key: 1,
  class: "model-row"
}, gy = { class: "value" }, hy = {
  key: 2,
  class: "model-row"
}, yy = { class: "value error" }, wy = {
  key: 0,
  class: "model-actions"
}, _y = { class: "detail-section" }, ky = {
  key: 0,
  class: "empty-message"
}, by = { class: "node-content" }, $y = { class: "node-main" }, Cy = { class: "node-name" }, xy = { class: "node-badge" }, Sy = {
  key: 0,
  class: "node-version"
}, Iy = ["onClick"], Ey = {
  key: 2,
  class: "node-install-queued"
}, Ty = {
  key: 0,
  class: "node-guidance"
}, My = { class: "details-footer" }, Py = { class: "details-footer-actions" }, Ry = /* @__PURE__ */ xe({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = ct(), d = k(null), v = k(!1), f = k(null), p = k(!1), w = k({}), g = k(!1), _ = k(/* @__PURE__ */ new Set()), b = k(/* @__PURE__ */ new Set()), S = [
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
        n("close");
        return;
      }
      v.value = !0, f.value = null;
      try {
        for (const [oe, B] of Object.entries(w.value))
          await r(o.workflowName, oe, B);
        n("refresh"), n("close");
      } catch (oe) {
        f.value = oe instanceof Error ? oe.message : "Failed to save changes";
      } finally {
        v.value = !1;
      }
    }
    return lt(q), (oe, B) => (a(), i(W, null, [
      $($t, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: v.value,
        error: f.value || void 0,
        onClose: B[5] || (B[5] = (H) => n("close"))
      }, {
        body: h(() => [
          d.value ? (a(), i(W, { key: 0 }, [
            s("section", ny, [
              $(fo, { variant: "section" }, {
                default: h(() => [
                  x("MODELS USED (" + m(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (a(), i("div", ay, " No models used in this workflow ")) : y("", !0),
              (a(!0), i(W, null, ye(d.value.models, (H) => {
                var we;
                return a(), i("div", {
                  key: H.hash || H.filename,
                  class: "model-card"
                }, [
                  s("div", ly, [
                    B[7] || (B[7] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", iy, m(H.filename), 1)
                  ]),
                  s("div", ry, [
                    s("div", cy, [
                      B[8] || (B[8] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Be(["value", C(H.status)])
                      }, m(I(H.status)), 3)
                    ]),
                    s("div", uy, [
                      s("span", dy, [
                        B[9] || (B[9] = x(" Importance: ", -1)),
                        $(ac, {
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
                    H.loaded_by && H.loaded_by.length > 0 ? (a(), i("div", my, [
                      B[10] || (B[10] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", fy, [
                        (a(!0), i(W, null, ye(F(H), (se, de) => (a(), i("div", {
                          key: `${se.node_id}-${de}`,
                          class: "node-reference"
                        }, m(se.node_type) + " (Node #" + m(se.node_id) + ") ", 1))), 128)),
                        H.loaded_by.length > 3 ? (a(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (se) => D(H.hash || H.filename)
                        }, m(V(H.hash || H.filename) ? "▼ Show less" : `▶ View all (${H.loaded_by.length})`), 9, vy)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    H.size_mb ? (a(), i("div", py, [
                      B[11] || (B[11] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", gy, m(H.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    H.has_category_mismatch ? (a(), i("div", hy, [
                      B[14] || (B[14] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", yy, [
                        B[12] || (B[12] = x(" In ", -1)),
                        s("code", null, m(H.actual_category) + "/", 1),
                        B[13] || (B[13] = x(" but loader needs ", -1)),
                        s("code", null, m((we = H.expected_categories) == null ? void 0 : we[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  H.status !== "available" ? (a(), i("div", wy, [
                    H.status === "downloadable" ? (a(), L(Ue, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: B[1] || (B[1] = (se) => n("resolve"))
                    }, {
                      default: h(() => [...B[15] || (B[15] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    })) : H.status === "category_mismatch" && H.file_path ? (a(), L(Ue, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => ie(H.file_path)
                    }, {
                      default: h(() => [...B[16] || (B[16] = [
                        x(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : H.status !== "path_mismatch" ? (a(), L(Ue, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: B[2] || (B[2] = (se) => n("resolve"))
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
            s("section", _y, [
              $(fo, { variant: "section" }, {
                default: h(() => [
                  x("NODES USED (" + m(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (a(), i("div", ky, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), i(W, null, ye(d.value.nodes, (H, we) => (a(), i("div", {
                key: `${H.name}-${H.status}-${we}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Be(["node-status", E(H.status)])
                }, m(M(H.status)), 3),
                s("div", by, [
                  s("div", $y, [
                    s("span", Cy, m(H.name), 1),
                    s("span", xy, m(N(H.status)), 1),
                    H.version ? (a(), i("span", Sy, "v" + m(H.version), 1)) : y("", !0),
                    H.status === "uninstallable" && H.package_id && !b.value.has(H.package_id) ? (a(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (se) => Y(H)
                    }, " Install ", 8, Iy)) : H.status === "uninstallable" && H.package_id && b.value.has(H.package_id) ? (a(), i("span", Ey, " Queued ")) : y("", !0)
                  ]),
                  H.guidance ? (a(), i("div", Ty, m(H.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          s("div", My, [
            $(Ue, {
              variant: "secondary",
              onClick: B[3] || (B[3] = (H) => n("resolve"))
            }, {
              default: h(() => [...B[18] || (B[18] = [
                x(" Review Resolution ", -1)
              ])]),
              _: 1
            }),
            s("div", Py, [
              $(Ue, {
                variant: "secondary",
                onClick: B[4] || (B[4] = (H) => n("close"))
              }, {
                default: h(() => [...B[19] || (B[19] = [
                  x(" Close ", -1)
                ])]),
                _: 1
              }),
              p.value ? (a(), L(Ue, {
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
}), Ly = /* @__PURE__ */ Ie(Ry, [["__scopeId", "data-v-00cf34e6"]]), rt = ho({
  items: [],
  status: "idle"
});
let Is = null;
function dc() {
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
    await Dy(e), e.status = "completed", e.progress = 100;
  } catch (t) {
    e.status = "failed", e.error = t instanceof Error ? t.message : "Download failed", e.retries++;
  } finally {
    rt.status = "idle", Co();
  }
}
async function Dy(e) {
  return new Promise((t, o) => {
    Is && (Is.close(), Is = null);
    const n = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${n}`);
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
async function Ny() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const t = await e.json();
    if (!t.pending_downloads || t.pending_downloads.length === 0) return;
    for (const o of t.pending_downloads) {
      if (rt.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: dc(),
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
      rt.items.push(n);
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
        id: dc(),
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
  function n(S) {
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
    resumeDownload: n,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: c,
    clearFailed: u,
    loadPendingDownloads: Ny
  };
}
function mc() {
  const e = k(null), t = k(null), o = k([]), n = k([]), l = k(!1), r = k(null);
  async function c(I, E) {
    const M = await Vs(I, E);
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
      )), n.value = M.results, M.results;
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
    modelSearchResults: n,
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
const Uy = { class: "resolution-stepper" }, Oy = { class: "stepper-header" }, Ay = ["onClick"], zy = {
  key: 0,
  class: "step-icon"
}, Fy = {
  key: 1,
  class: "step-number"
}, Vy = { class: "step-label" }, By = {
  key: 0,
  class: "step-connector"
}, Wy = { class: "stepper-content" }, Gy = /* @__PURE__ */ xe({
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
      n("step-change", v);
    }
    return (v, f) => (a(), i("div", Uy, [
      s("div", Oy, [
        (a(!0), i(W, null, ye(e.steps, (p, w) => (a(), i("div", {
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
            l(p.id) ? (a(), i("span", zy, "✓")) : (a(), i("span", Fy, m(w + 1), 1))
          ], 2),
          s("div", Vy, m(p.label), 1),
          w < e.steps.length - 1 ? (a(), i("div", By)) : y("", !0)
        ], 10, Ay))), 128))
      ]),
      s("div", Wy, [
        at(v.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), jy = /* @__PURE__ */ Ie(Gy, [["__scopeId", "data-v-2a7b3af8"]]), Hy = { class: "item-body" }, qy = {
  key: 0,
  class: "resolved-state"
}, Ky = { class: "resolved-message" }, Jy = {
  key: 1,
  class: "unresolved"
}, Qy = {
  key: 0,
  class: "installed-packs-section"
}, Yy = { class: "installed-packs-list" }, Xy = ["onClick"], Zy = { class: "installed-pack-name" }, e1 = { class: "installed-pack-source" }, t1 = { class: "action-buttons" }, s1 = /* @__PURE__ */ xe({
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
    const o = e, n = t, l = R(() => !!o.choice), r = R(() => {
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
    return (f, p) => (a(), i("div", {
      class: Be(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: l.value }])
    }, [
      s("div", Hy, [
        l.value ? (a(), i("div", qy, [
          s("span", Ky, m(d.value), 1),
          $(Ue, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => n("clear-choice"))
          }, {
            default: h(() => [...p[4] || (p[4] = [
              x(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : (a(), i("div", Jy, [
          u.value.length > 0 ? (a(), i("div", Qy, [
            p[5] || (p[5] = s("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            s("div", Yy, [
              (a(!0), i(W, null, ye(u.value, (w) => (a(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => n("installed-pack-selected", w.package_id)
              }, [
                s("span", Zy, m(w.package_id), 1),
                s("span", e1, m(v(w.source)), 1)
              ], 8, Xy))), 128))
            ])
          ])) : y("", !0),
          s("div", t1, [
            $(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => n("search"))
            }, {
              default: h(() => [...p[6] || (p[6] = [
                x(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            $(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => n("manual-entry"))
            }, {
              default: h(() => [...p[7] || (p[7] = [
                x(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            $(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (w) => n("mark-optional"))
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
}), o1 = /* @__PURE__ */ Ie(s1, [["__scopeId", "data-v-4338b305"]]), n1 = { class: "item-navigator" }, a1 = { class: "nav-item-info" }, l1 = ["title"], i1 = { class: "nav-controls" }, r1 = { class: "nav-arrows" }, c1 = ["disabled"], u1 = ["disabled"], d1 = { class: "nav-position" }, m1 = /* @__PURE__ */ xe({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const o = t;
    return (n, l) => (a(), i("div", n1, [
      s("div", a1, [
        s("code", {
          class: "item-name",
          title: e.itemName
        }, m(e.itemName), 9, l1)
      ]),
      s("div", i1, [
        s("div", r1, [
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, c1),
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, u1)
        ]),
        s("span", d1, m(e.currentIndex + 1) + "/" + m(e.totalItems), 1)
      ])
    ]));
  }
}), fc = /* @__PURE__ */ Ie(m1, [["__scopeId", "data-v-74af7920"]]), f1 = { class: "node-resolution-step" }, v1 = {
  key: 0,
  class: "auto-resolved-section"
}, p1 = { class: "section-header" }, g1 = { class: "stat-badge" }, h1 = { class: "resolved-packages-list" }, y1 = { class: "package-info" }, w1 = { class: "package-id" }, _1 = { class: "node-count" }, k1 = { class: "package-actions" }, b1 = {
  key: 0,
  class: "status-badge install"
}, $1 = {
  key: 1,
  class: "status-badge skip"
}, C1 = ["onClick"], x1 = {
  key: 1,
  class: "section-divider"
}, S1 = { class: "step-header" }, I1 = { class: "stat-badge" }, E1 = {
  key: 1,
  class: "step-body"
}, T1 = {
  key: 3,
  class: "empty-state"
}, M1 = { class: "node-modal-body" }, P1 = { class: "node-search-results-container" }, R1 = {
  key: 0,
  class: "node-search-results"
}, L1 = { class: "node-result-header" }, D1 = { class: "node-result-title" }, N1 = { class: "node-result-package-id" }, U1 = {
  key: 0,
  class: "node-result-display-name"
}, O1 = {
  key: 0,
  class: "node-result-stats",
  "aria-label": "Package popularity"
}, A1 = {
  key: 0,
  class: "node-result-stat"
}, z1 = {
  key: 1,
  class: "node-result-stat"
}, F1 = {
  key: 0,
  class: "node-result-description"
}, V1 = { class: "node-result-actions" }, B1 = ["onClick"], W1 = ["onClick"], G1 = {
  key: 1,
  class: "node-empty-state"
}, j1 = {
  key: 2,
  class: "node-empty-state"
}, H1 = {
  key: 3,
  class: "node-empty-state"
}, q1 = { class: "node-manual-entry-modal" }, K1 = { class: "node-modal-body" }, J1 = { class: "node-modal-actions" }, Q1 = /* @__PURE__ */ xe({
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
    const o = e, n = t, { searchNodes: l } = mc(), r = k(0), c = k(!1), u = k(!1), d = k(""), v = k(""), f = k([]), p = k(!1), w = k(!1);
    function g() {
      w.value && ie(), w.value = !1;
    }
    const _ = R(() => o.nodes[r.value]), b = R(() => o.nodes.filter((K) => o.nodeChoices.has(K.node_type)).length), S = R(() => o.autoResolvedPackages.filter((K) => !o.skippedPackages.has(K.package_id)).length);
    function C(K) {
      return o.skippedPackages.has(K);
    }
    function I(K) {
      n("package-skip", K);
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
      _.value && (n("mark-optional", _.value.node_type), At(() => M()));
    }
    function F() {
      _.value && (n("skip", _.value.node_type), At(() => M()));
    }
    function V() {
      _.value && n("clear-choice", _.value.node_type);
    }
    function D() {
      _.value && (d.value = _.value.node_type, f.value = [], c.value = !0, B(d.value));
    }
    function q() {
      v.value = "", u.value = !0;
    }
    function ue(K) {
      _.value && (n("installed-pack-selected", _.value.node_type, K), At(() => M()));
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
      _.value && (n("manual-entry", _.value.node_type, K.package_id, {
        install_source: "registry",
        version: K.registry_version || null
      }), ie(), At(() => M()));
    }
    function we(K) {
      !_.value || !K.repository || (n("manual-entry", _.value.node_type, K.package_id, {
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
      !_.value || !v.value.trim() || (n("manual-entry", _.value.node_type, v.value.trim()), Y(), At(() => M()));
    }
    return (K, ee) => {
      var te, Me;
      return a(), i("div", f1, [
        e.autoResolvedPackages.length > 0 ? (a(), i("div", v1, [
          s("div", p1, [
            ee[6] || (ee[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", g1, m(S.value) + "/" + m(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", h1, [
            (a(!0), i(W, null, ye(e.autoResolvedPackages, (Se) => (a(), i("div", {
              key: Se.package_id,
              class: "resolved-package-item"
            }, [
              s("div", y1, [
                s("code", w1, m(Se.package_id), 1),
                s("span", _1, m(Se.node_types_count) + " node type" + m(Se.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", k1, [
                C(Se.package_id) ? (a(), i("span", $1, " SKIPPED ")) : (a(), i("span", b1, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (ze) => I(Se.package_id)
                }, m(C(Se.package_id) ? "Include" : "Skip"), 9, C1)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), i("div", x1)) : y("", !0),
        e.nodes.length > 0 ? (a(), i(W, { key: 2 }, [
          s("div", S1, [
            ee[7] || (ee[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", I1, m(b.value) + "/" + m(e.nodes.length) + " resolved", 1)
          ]),
          _.value ? (a(), L(fc, {
            key: 0,
            "item-name": _.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: ee[0] || (ee[0] = (Se) => E(r.value - 1)),
            onNext: ee[1] || (ee[1] = (Se) => E(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          _.value ? (a(), i("div", E1, [
            $(o1, {
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
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), i("div", T1, [...ee[8] || (ee[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), L(Zt, { to: "body" }, [
          c.value ? (a(), i("div", {
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
              s("div", M1, [
                $(bt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": ee[2] || (ee[2] = (Se) => d.value = Se),
                  placeholder: "Search registry by node type or package name...",
                  onInput: oe
                }, null, 8, ["modelValue"]),
                s("div", P1, [
                  f.value.length > 0 ? (a(), i("div", R1, [
                    (a(!0), i(W, null, ye(f.value, (Se) => (a(), i("div", {
                      key: Se.package_id,
                      class: "node-search-result-item"
                    }, [
                      s("div", L1, [
                        s("div", D1, [
                          s("code", N1, m(Se.package_id), 1),
                          Se.display_name && Se.display_name !== Se.package_id ? (a(), i("span", U1, m(Se.display_name), 1)) : y("", !0)
                        ]),
                        se(Se) ? (a(), i("div", O1, [
                          Se.github_stars ? (a(), i("span", A1, " ★ " + m(de(Se.github_stars)), 1)) : y("", !0),
                          Se.downloads ? (a(), i("span", z1, " ↓ " + m(de(Se.downloads)), 1)) : y("", !0)
                        ])) : y("", !0)
                      ]),
                      Se.description ? (a(), i("div", F1, m(Se.description), 1)) : y("", !0),
                      s("div", V1, [
                        Se.can_install_registry ? (a(), i("button", {
                          key: 0,
                          type: "button",
                          class: "node-result-action",
                          onClick: (ze) => H(Se)
                        }, " Install from Registry ", 8, B1)) : y("", !0),
                        Se.can_install_git ? (a(), i("button", {
                          key: 1,
                          type: "button",
                          class: "node-result-action secondary",
                          onClick: (ze) => we(Se)
                        }, " Install from GitHub ", 8, W1)) : y("", !0)
                      ])
                    ]))), 128))
                  ])) : p.value ? (a(), i("div", G1, "Searching...")) : d.value ? (a(), i("div", j1, 'No packages found matching "' + m(d.value) + '"', 1)) : (a(), i("div", H1, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), L(Zt, { to: "body" }, [
          u.value ? (a(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: vt(Y, ["self"])
          }, [
            s("div", q1, [
              s("div", { class: "node-modal-header" }, [
                ee[10] || (ee[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              s("div", K1, [
                $(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": ee[5] || (ee[5] = (Se) => v.value = Se),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", J1, [
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
}), Y1 = /* @__PURE__ */ Ie(Q1, [["__scopeId", "data-v-a85bb4b7"]]), X1 = /* @__PURE__ */ xe({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = R(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), n = R(() => `confidence-${o.value}`), l = R(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, c) => (a(), i("span", {
      class: Be(["confidence-badge", n.value, e.size])
    }, m(l.value), 3));
  }
}), Z1 = /* @__PURE__ */ Ie(X1, [["__scopeId", "data-v-17ec4b80"]]), ew = { class: "node-info" }, tw = { class: "node-info-text" }, sw = { class: "item-body" }, ow = {
  key: 0,
  class: "resolved-state"
}, nw = {
  key: 1,
  class: "multiple-options"
}, aw = { class: "options-list" }, lw = ["onClick"], iw = ["name", "value", "checked", "onChange"], rw = { class: "option-content" }, cw = { class: "option-header" }, uw = { class: "option-filename" }, dw = { class: "option-meta" }, mw = { class: "option-size" }, fw = { class: "option-category" }, vw = { class: "option-path" }, pw = { class: "action-buttons" }, gw = {
  key: 2,
  class: "unresolved"
}, hw = { class: "action-buttons" }, yw = /* @__PURE__ */ xe({
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
    const o = e, n = t, l = R(() => !!o.choice);
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
      n("option-selected", d);
    }
    function u(d) {
      if (!d) return "Unknown";
      const v = d / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, v) => (a(), i("div", {
      class: Be(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      s("div", ew, [
        s("span", tw, [
          v[7] || (v[7] = x("Used by: ", -1)),
          s("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), i("span", {
          key: 0,
          class: Be(["status-badge", r.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", sw, [
        l.value ? (a(), i("div", ow, [
          $(Ue, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (f) => n("clear-choice"))
          }, {
            default: h(() => [...v[8] || (v[8] = [
              x(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), i("div", nw, [
          v[12] || (v[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", aw, [
            (a(!0), i(W, null, ye(e.options, (f, p) => (a(), i("label", {
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
              }, null, 40, iw),
              s("div", rw, [
                s("div", cw, [
                  s("span", uw, m(f.model.filename), 1),
                  $(Z1, {
                    confidence: f.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", dw, [
                  s("span", mw, m(u(f.model.size)), 1),
                  s("span", fw, m(f.model.category), 1)
                ]),
                s("div", vw, m(f.model.relative_path), 1)
              ])
            ], 10, lw))), 128))
          ]),
          s("div", pw, [
            $(Ue, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (f) => n("search"))
            }, {
              default: h(() => [...v[9] || (v[9] = [
                x(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            $(Ue, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (f) => n("download-url"))
            }, {
              default: h(() => [...v[10] || (v[10] = [
                x(" Download URL ", -1)
              ])]),
              _: 1
            }),
            $(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (f) => n("mark-optional"))
            }, {
              default: h(() => [...v[11] || (v[11] = [
                x(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), i("div", gw, [
          v[16] || (v[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", hw, [
            $(Ue, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (f) => n("search"))
            }, {
              default: h(() => [...v[13] || (v[13] = [
                x(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            $(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (f) => n("download-url"))
            }, {
              default: h(() => [...v[14] || (v[14] = [
                x(" Download URL ", -1)
              ])]),
              _: 1
            }),
            $(Ue, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (f) => n("mark-optional"))
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
}), ww = /* @__PURE__ */ Ie(yw, [["__scopeId", "data-v-8a82fefa"]]), _w = { class: "model-resolution-step" }, kw = { class: "step-header" }, bw = { class: "step-info" }, $w = { class: "step-title" }, Cw = { class: "step-description" }, xw = { class: "stat-badge" }, Sw = {
  key: 1,
  class: "step-body"
}, Iw = {
  key: 2,
  class: "empty-state"
}, Ew = { class: "model-search-modal" }, Tw = { class: "model-modal-body" }, Mw = {
  key: 0,
  class: "model-search-results"
}, Pw = ["onClick"], Rw = { class: "model-result-header" }, Lw = { class: "model-result-filename" }, Dw = { class: "model-result-meta" }, Nw = { class: "model-result-category" }, Uw = { class: "model-result-size" }, Ow = {
  key: 0,
  class: "model-result-path"
}, Aw = {
  key: 1,
  class: "model-no-results"
}, zw = {
  key: 2,
  class: "model-searching"
}, Fw = { class: "model-download-url-modal" }, Vw = { class: "model-modal-body" }, Bw = { class: "model-input-group" }, Ww = { class: "model-input-group" }, Gw = { class: "model-modal-actions" }, jw = /* @__PURE__ */ xe({
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
    function n(se) {
      var de;
      return se && ((de = o[se]) == null ? void 0 : de[0]) || null;
    }
    const l = e, r = t, c = k(0), u = k(!1), d = k(!1), v = k(""), f = k(""), p = k(""), w = k([]), g = k(!1), _ = R(() => l.models[c.value]), b = R(() => l.models.some((se) => se.is_download_intent)), S = R(() => l.models.filter(
      (se) => l.modelChoices.has(se.filename) || se.is_download_intent
    ).length), C = R(() => {
      var de;
      if (!_.value) return "";
      const se = n((de = _.value.reference) == null ? void 0 : de.node_type);
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
      return a(), i("div", _w, [
        s("div", kw, [
          s("div", bw, [
            s("h3", $w, m(b.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", Cw, m(b.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", xw, m(S.value) + "/" + m(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), L(fc, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: de[0] || (de[0] = (te) => M(c.value - 1)),
          onNext: de[1] || (de[1] = (te) => M(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), i("div", Sw, [
          $(ww, {
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
        ])) : (a(), i("div", Iw, [...de[5] || (de[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (a(), L(Zt, { to: "body" }, [
          u.value ? (a(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: vt(Y, ["self"])
          }, [
            s("div", Ew, [
              s("div", { class: "model-modal-header" }, [
                de[6] || (de[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              s("div", Tw, [
                $(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": de[2] || (de[2] = (te) => v.value = te),
                  placeholder: "Search by filename, category...",
                  onInput: oe
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), i("div", Mw, [
                  (a(!0), i(W, null, ye(w.value, (te) => (a(), i("div", {
                    key: te.hash,
                    class: "model-search-result-item",
                    onClick: (Me) => B()
                  }, [
                    s("div", Rw, [
                      s("code", Lw, m(te.filename), 1)
                    ]),
                    s("div", Dw, [
                      s("span", Nw, m(te.category), 1),
                      s("span", Uw, m(we(te.size)), 1)
                    ]),
                    te.relative_path ? (a(), i("div", Ow, m(te.relative_path), 1)) : y("", !0)
                  ], 8, Pw))), 128))
                ])) : v.value && !g.value ? (a(), i("div", Aw, ' No models found matching "' + m(v.value) + '" ', 1)) : y("", !0),
                g.value ? (a(), i("div", zw, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), L(Zt, { to: "body" }, [
          d.value ? (a(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: vt(me, ["self"])
          }, [
            s("div", Fw, [
              s("div", { class: "model-modal-header" }, [
                de[7] || (de[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: me
                }, "✕")
              ]),
              s("div", Vw, [
                s("div", Bw, [
                  de[8] || (de[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  $(bt, {
                    modelValue: f.value,
                    "onUpdate:modelValue": de[3] || (de[3] = (te) => f.value = te),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", Ww, [
                  de[9] || (de[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  $(bt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": de[4] || (de[4] = (te) => p.value = te),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", Gw, [
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
}), Hw = /* @__PURE__ */ Ie(jw, [["__scopeId", "data-v-5c700bfa"]]), qw = { class: "applying-step" }, Kw = {
  key: 0,
  class: "phase-content"
}, Jw = {
  key: 1,
  class: "phase-content"
}, Qw = { class: "phase-description" }, Yw = { class: "overall-progress" }, Xw = { class: "progress-bar" }, Zw = { class: "progress-label" }, e0 = { class: "install-list" }, t0 = { class: "install-icon" }, s0 = { key: 0 }, o0 = {
  key: 1,
  class: "spinner"
}, n0 = { key: 2 }, a0 = { key: 3 }, l0 = {
  key: 0,
  class: "install-error"
}, i0 = {
  key: 2,
  class: "phase-content"
}, r0 = { class: "phase-header" }, c0 = { class: "phase-title" }, u0 = { class: "completion-summary" }, d0 = {
  key: 0,
  class: "summary-item success"
}, m0 = { class: "summary-text" }, f0 = {
  key: 1,
  class: "summary-item success"
}, v0 = { class: "summary-text" }, p0 = {
  key: 2,
  class: "summary-item success"
}, g0 = { class: "summary-text" }, h0 = {
  key: 3,
  class: "summary-item error"
}, y0 = { class: "summary-text" }, w0 = {
  key: 4,
  class: "failed-list"
}, _0 = { class: "failed-node-id" }, k0 = { class: "failed-error" }, b0 = {
  key: 6,
  class: "summary-item success"
}, $0 = { class: "summary-text" }, C0 = {
  key: 7,
  class: "summary-note"
}, x0 = {
  key: 8,
  class: "restart-prompt"
}, S0 = {
  key: 3,
  class: "phase-content error"
}, I0 = { class: "error-message" }, E0 = /* @__PURE__ */ xe({
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
    }), n = R(() => {
      var g;
      return ((g = t.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.filter((_) => !_.success)) || [];
    }), l = R(() => n.value.length > 0), r = R(() => t.progress.nodesInstalled.length), c = R(() => {
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
      return a(), i("div", qw, [
        e.progress.phase === "resolving" ? (a(), i("div", Kw, [..._[2] || (_[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), i("div", Jw, [
          _[3] || (_[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", Qw, " Installing " + m((((b = e.progress.nodeInstallProgress) == null ? void 0 : b.currentIndex) ?? 0) + 1) + " of " + m(((S = e.progress.nodeInstallProgress) == null ? void 0 : S.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", Yw, [
            s("div", Xw, [
              s("div", {
                class: "progress-fill",
                style: Nt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            s("span", Zw, m(((C = e.progress.nodeInstallProgress) == null ? void 0 : C.completedNodes.length) ?? 0) + " / " + m(((I = e.progress.nodeInstallProgress) == null ? void 0 : I.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", e0, [
            (a(!0), i(W, null, ye(e.progress.nodesToInstall, (E, M) => (a(), i("div", {
              key: E,
              class: Be(["install-item", p(E, M)])
            }, [
              s("span", t0, [
                p(E, M) === "pending" ? (a(), i("span", s0, "○")) : p(E, M) === "installing" ? (a(), i("span", o0, "◌")) : p(E, M) === "complete" ? (a(), i("span", n0, "✓")) : p(E, M) === "failed" ? (a(), i("span", a0, "✗")) : y("", !0)
              ]),
              s("code", null, m(E), 1),
              w(E) ? (a(), i("span", l0, m(w(E)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), i("div", i0, [
          s("div", r0, [
            s("span", {
              class: Be(["phase-icon", l.value ? "warning" : "success"])
            }, m(l.value ? "⚠" : "✓"), 3),
            s("h3", c0, m(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", u0, [
            e.progress.nodesInstalled.length > 0 ? (a(), i("div", d0, [
              _[4] || (_[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", m0, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            c.value > 0 ? (a(), i("div", f0, [
              _[5] || (_[5] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", v0, m(c.value) + " node type" + m(c.value > 1 ? "s" : "") + " marked optional", 1)
            ])) : y("", !0),
            u.value > 0 ? (a(), i("div", p0, [
              _[6] || (_[6] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", g0, m(u.value) + " node mapping" + m(u.value > 1 ? "s" : "") + " changed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), i("div", h0, [
              _[7] || (_[7] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", y0, m(n.value.length) + " package" + m(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), i("div", w0, [
              (a(!0), i(W, null, ye(n.value, (E) => (a(), i("div", {
                key: E.node_id,
                class: "failed-item"
              }, [
                s("code", _0, m(E.node_id), 1),
                s("span", k0, m(E.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), i("button", {
              key: 5,
              class: "retry-button",
              onClick: _[0] || (_[0] = (E) => g.$emit("retry-failed"))
            }, " Retry Failed (" + m(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), i("div", b0, [
              _[8] || (_[8] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", $0, m(f.value), 1)
            ])),
            d.value ? (a(), i("p", C0, "Model downloads will continue in the background.")) : y("", !0),
            e.progress.needsRestart ? (a(), i("div", x0, [
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
        ])) : e.progress.phase === "error" ? (a(), i("div", S0, [
          _[10] || (_[10] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", I0, m(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), T0 = /* @__PURE__ */ Ie(E0, [["__scopeId", "data-v-7551fbc3"]]), M0 = {
  key: 0,
  class: "loading-state"
}, P0 = {
  key: 1,
  class: "wizard-content"
}, R0 = {
  key: 0,
  class: "step-content"
}, L0 = { class: "analysis-summary" }, D0 = { class: "analysis-header" }, N0 = { class: "summary-description" }, U0 = { class: "stats-grid" }, O0 = { class: "stat-card" }, A0 = { class: "stat-items" }, z0 = {
  key: 0,
  class: "stat-item success"
}, F0 = { class: "stat-count" }, V0 = {
  key: 1,
  class: "stat-item info"
}, B0 = { class: "stat-count" }, W0 = {
  key: 2,
  class: "stat-item warning"
}, G0 = { class: "stat-count" }, j0 = {
  key: 3,
  class: "stat-item warning"
}, H0 = { class: "stat-count" }, q0 = {
  key: 4,
  class: "stat-item warning"
}, K0 = { class: "stat-count" }, J0 = {
  key: 5,
  class: "stat-item error"
}, Q0 = { class: "stat-count" }, Y0 = { class: "stat-card" }, X0 = { class: "stat-items" }, Z0 = { class: "stat-item success" }, e_ = { class: "stat-count" }, t_ = {
  key: 0,
  class: "stat-item info"
}, s_ = { class: "stat-count" }, o_ = {
  key: 1,
  class: "stat-item warning"
}, n_ = { class: "stat-count" }, a_ = {
  key: 2,
  class: "stat-item warning"
}, l_ = { class: "stat-count" }, i_ = {
  key: 3,
  class: "stat-item error"
}, r_ = { class: "stat-count" }, c_ = {
  key: 0,
  class: "status-message warning"
}, u_ = { class: "status-text" }, d_ = {
  key: 1,
  class: "status-message warning"
}, m_ = { class: "status-text" }, f_ = {
  key: 2,
  class: "status-message info"
}, v_ = { class: "status-text" }, p_ = {
  key: 3,
  class: "status-message info"
}, g_ = { class: "status-text" }, h_ = {
  key: 4,
  class: "status-message info"
}, y_ = { class: "status-text" }, w_ = {
  key: 5,
  class: "status-message warning"
}, __ = { class: "status-text" }, k_ = {
  key: 6,
  class: "status-message success"
}, b_ = {
  key: 7,
  class: "category-mismatch-section"
}, $_ = { class: "mismatch-list" }, C_ = { class: "mismatch-path" }, x_ = { class: "mismatch-target" }, S_ = {
  key: 8,
  class: "category-mismatch-section"
}, I_ = { class: "mismatch-list" }, E_ = { class: "mismatch-path" }, T_ = { class: "status-text" }, M_ = {
  key: 1,
  class: "step-content node-step-content"
}, P_ = {
  key: 2,
  class: "step-content package-step-content"
}, R_ = { class: "package-step-header" }, L_ = { class: "stat-badge" }, D_ = {
  key: 0,
  class: "package-section"
}, N_ = { class: "package-section-header" }, U_ = { class: "package-section-title" }, O_ = { class: "stat-badge" }, A_ = { class: "package-list" }, z_ = { class: "package-info" }, F_ = { class: "item-name" }, V_ = { class: "package-meta" }, B_ = { class: "package-actions" }, W_ = {
  key: 0,
  class: "choice-badge install"
}, G_ = {
  key: 1,
  class: "choice-badge skip"
}, j_ = {
  key: 1,
  class: "community-node-section"
}, H_ = { class: "community-node-header" }, q_ = { class: "community-node-title" }, K_ = { class: "community-node-list" }, J_ = { class: "community-node-info" }, Q_ = { class: "community-node-heading" }, Y_ = { class: "item-name" }, X_ = { class: "community-node-package" }, Z_ = { class: "community-node-meta" }, ek = { class: "community-node-guidance" }, tk = { key: 0 }, sk = {
  key: 0,
  class: "community-node-selection"
}, ok = { class: "community-selected-label" }, nk = {
  key: 1,
  class: "community-node-actions"
}, ak = {
  key: 4,
  class: "step-content"
}, lk = { class: "review-summary" }, ik = { class: "review-stats" }, rk = { class: "review-stat" }, ck = { class: "stat-value" }, uk = { class: "review-stat" }, dk = { class: "stat-value" }, mk = { class: "review-stat" }, fk = { class: "stat-value" }, vk = { class: "review-stat" }, pk = { class: "stat-value" }, gk = {
  key: 0,
  class: "review-section"
}, hk = { class: "section-title" }, yk = { class: "review-items" }, wk = { class: "item-name" }, _k = { class: "item-choice" }, kk = {
  key: 0,
  class: "choice-badge install"
}, bk = {
  key: 1,
  class: "choice-badge skip"
}, $k = {
  key: 1,
  class: "review-section"
}, Ck = { class: "section-title" }, xk = { class: "review-items" }, Sk = { class: "item-name" }, Ik = { class: "item-choice" }, Ek = {
  key: 0,
  class: "choice-badge install"
}, Tk = {
  key: 1,
  class: "choice-badge optional"
}, Mk = {
  key: 2,
  class: "choice-badge skip"
}, Pk = {
  key: 2,
  class: "review-section"
}, Rk = { class: "section-title" }, Lk = { class: "review-items" }, Dk = { class: "item-name" }, Nk = { class: "item-choice" }, Uk = {
  key: 0,
  class: "choice-badge install"
}, Ok = {
  key: 1,
  class: "choice-badge mapped"
}, Ak = {
  key: 2,
  class: "choice-badge optional"
}, zk = {
  key: 3,
  class: "choice-badge skip"
}, Fk = {
  key: 1,
  class: "choice-badge pending"
}, Vk = {
  key: 3,
  class: "review-section"
}, Bk = { class: "section-title" }, Wk = { class: "review-items download-details" }, Gk = { class: "download-info" }, jk = { class: "item-name" }, Hk = { class: "download-meta" }, qk = { class: "download-path" }, Kk = ["title"], Jk = {
  key: 4,
  class: "review-section"
}, Qk = { class: "section-title" }, Yk = { class: "review-items" }, Xk = { class: "item-name" }, Zk = { class: "item-choice" }, eb = {
  key: 0,
  class: "choice-badge install"
}, tb = {
  key: 1,
  class: "choice-badge download"
}, sb = {
  key: 2,
  class: "choice-badge optional"
}, ob = {
  key: 3,
  class: "choice-badge skip"
}, nb = {
  key: 4,
  class: "choice-badge skip"
}, ab = {
  key: 1,
  class: "choice-badge download"
}, lb = {
  key: 2,
  class: "choice-badge pending"
}, ib = {
  key: 5,
  class: "no-choices"
}, rb = /* @__PURE__ */ xe({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const o = e, n = t, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: v } = mc(), { loadPendingDownloads: f } = Bo(), { openFileLocation: p, queueNodeInstall: w, getNodes: g } = ct(), _ = k(null), b = k([]), S = k(!1), C = k(!1), I = k(null), E = k("analysis"), M = k([]), N = k(/* @__PURE__ */ new Map()), F = k(/* @__PURE__ */ new Map()), V = k(/* @__PURE__ */ new Set()), D = R(() => {
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
    function Hs(ae, O) {
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
    function qs(ae) {
      F.value.delete(ae);
    }
    async function Ks(ae) {
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
        d.phase = "complete", await f(), window.dispatchEvent(new CustomEvent("comfygit:status-refresh")), n("refresh"), n("install");
      } catch (ne) {
        I.value = ne instanceof Error ? ne.message : "Failed to apply resolution", d.error = I.value, d.phase = "error";
      } finally {
        C.value = !1;
      }
    }
    function Go() {
      n("refresh"), n("restart"), n("close");
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
    return lt(pt), (ae, O) => (a(), L($t, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: S.value,
      error: I.value || void 0,
      "fixed-height": !0,
      onClose: O[1] || (O[1] = (ne) => n("close"))
    }, {
      body: h(() => [
        S.value && !_.value ? (a(), i("div", M0, [...O[2] || (O[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (a(), i("div", P0, [
          $(jy, {
            steps: D.value,
            "current-step": E.value,
            "completed-steps": M.value,
            "step-stats": _e.value,
            onStepChange: Z
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          E.value === "analysis" ? (a(), i("div", R0, [
            s("div", L0, [
              s("div", D0, [
                O[3] || (O[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", N0, " Found " + m(_.value.stats.total_nodes) + " nodes and " + m(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", U0, [
                s("div", O0, [
                  O[16] || (O[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", A0, [
                    te.value > 0 ? (a(), i("div", z0, [
                      O[4] || (O[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", F0, m(te.value), 1),
                      O[5] || (O[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (a(), i("div", V0, [
                      O[6] || (O[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", B0, m(_.value.stats.packages_needing_installation), 1),
                      O[7] || (O[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    Y.value > 0 ? (a(), i("div", W0, [
                      O[8] || (O[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", G0, m(Y.value), 1),
                      O[9] || (O[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    me.value.length > 0 ? (a(), i("div", j0, [
                      O[10] || (O[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", H0, m(me.value.length), 1),
                      O[11] || (O[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    q.value > 0 ? (a(), i("div", q0, [
                      O[12] || (O[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", K0, m(q.value), 1),
                      O[13] || (O[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    ie.value > 0 ? (a(), i("div", J0, [
                      O[14] || (O[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", Q0, m(ie.value), 1),
                      O[15] || (O[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                s("div", Y0, [
                  O[27] || (O[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", X0, [
                    s("div", Z0, [
                      O[17] || (O[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", e_, m(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      O[18] || (O[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (a(), i("div", t_, [
                      O[19] || (O[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", s_, m(_.value.stats.download_intents), 1),
                      O[20] || (O[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    Se.value ? (a(), i("div", o_, [
                      O[21] || (O[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", n_, m(Me.value.length), 1),
                      O[22] || (O[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    _.value.models.ambiguous.length > 0 ? (a(), i("div", a_, [
                      O[23] || (O[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", l_, m(_.value.models.ambiguous.length), 1),
                      O[24] || (O[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    _.value.models.unresolved.length > 0 ? (a(), i("div", i_, [
                      O[25] || (O[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", r_, m(_.value.models.unresolved.length), 1),
                      O[26] || (O[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              ue.value > 0 ? (a(), i("div", c_, [
                O[28] || (O[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", u_, m(ue.value) + " item" + m(ue.value === 1 ? "" : "s") + " need your input", 1)
              ])) : H.value ? (a(), i("div", d_, [
                O[29] || (O[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", m_, m(me.value.length) + " node type" + m(me.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : q.value > 0 ? (a(), i("div", f_, [
                O[30] || (O[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", v_, m(q.value) + " community-mapped node type" + m(q.value > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : ce.value ? (a(), i("div", p_, [
                O[31] || (O[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", g_, m(_.value.stats.packages_needing_installation) + " package" + m(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(_.value.stats.nodes_needing_installation) + " node type" + m(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(de.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : de.value ? (a(), i("div", h_, [
                O[32] || (O[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", y_, m(_.value.stats.download_intents) + " model" + m(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : Se.value ? (a(), i("div", w_, [
                O[33] || (O[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", __, m(Me.value.length) + " model" + m(Me.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), i("div", k_, [...O[34] || (O[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              Se.value ? (a(), i("div", b_, [
                O[37] || (O[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", $_, [
                  (a(!0), i(W, null, ye(Me.value, (ne) => {
                    var Je, it;
                    return a(), i("div", {
                      key: ne.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", C_, m(ne.actual_category) + "/" + m((Je = ne.model) == null ? void 0 : Je.filename), 1),
                      O[36] || (O[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", x_, m((it = ne.expected_categories) == null ? void 0 : it[0]) + "/", 1),
                      ne.file_path ? (a(), L(Ue, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Dt) => Ks(ne.file_path)
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
              H.value ? (a(), i("div", S_, [
                O[38] || (O[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", I_, [
                  (a(!0), i(W, null, ye(me.value, (ne) => {
                    var Je;
                    return a(), i("div", {
                      key: `vg-${ne.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", E_, m(ne.reference.node_type), 1),
                      s("span", T_, m(ne.guidance || ((Je = _.value.node_guidance) == null ? void 0 : Je[ne.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          E.value === "nodes" ? (a(), i("div", M_, [
            $(Y1, {
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
          E.value === "packages" ? (a(), i("div", P_, [
            s("div", R_, [
              O[39] || (O[39] = s("div", null, [
                s("h3", { class: "summary-title" }, "Review Node Packages"),
                s("p", { class: "summary-description" }, " Choose which package-level installs should run. These decisions are separate from mapping unresolved node names. ")
              ], -1)),
              s("span", L_, m(ve.value) + "/" + m(ge.value) + " decided", 1)
            ]),
            be.value.length > 0 ? (a(), i("div", D_, [
              s("div", N_, [
                s("div", null, [
                  s("h4", U_, "Resolved Packages (" + m(be.value.length) + ")", 1),
                  O[40] || (O[40] = s("p", { class: "package-section-description" }, " These packages were matched automatically. Skip any package you do not want installed. ", -1))
                ]),
                s("span", O_, m(Ae.value) + "/" + m(be.value.length) + " to install", 1)
              ]),
              s("div", A_, [
                (a(!0), i(W, null, ye(be.value, (ne) => (a(), i("div", {
                  key: ne.package_id,
                  class: "package-item"
                }, [
                  s("div", z_, [
                    s("code", F_, m(ne.package_id), 1),
                    s("span", V_, m(ne.node_types_count) + " node type" + m(ne.node_types_count > 1 ? "s" : ""), 1)
                  ]),
                  s("div", B_, [
                    V.value.has(ne.package_id) ? (a(), i("span", G_, "Skipped")) : (a(), i("span", W_, "Will Install")),
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
            B.value.length > 0 ? (a(), i("div", j_, [
              s("div", H_, [
                s("h4", q_, "Community-Mapped Packages (" + m(B.value.length) + ")", 1),
                O[41] || (O[41] = s("p", { class: "community-node-description" }, " These mappings came from community metadata. Use a registry install only when a package version exists; otherwise install from Git or skip. ", -1))
              ]),
              s("div", K_, [
                (a(!0), i(W, null, ye(B.value, (ne) => (a(), i("div", {
                  key: `community-${ne.reference.node_type}-${ne.package.package_id}`,
                  class: "community-node-item"
                }, [
                  s("div", J_, [
                    s("div", Q_, [
                      s("code", Y_, m(ne.reference.node_type), 1),
                      s("span", X_, m(ne.package.title || ne.package.package_id), 1)
                    ]),
                    s("div", Z_, m(ne.package.package_id), 1),
                    s("div", ek, [
                      O[42] || (O[42] = x(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      ne.guidance ? (a(), i("span", tk, m(ne.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  Pe(ne.reference.node_type) ? (a(), i("div", sk, [
                    s("div", ok, m(Ye(ne.reference.node_type)), 1),
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
                  ])) : (a(), i("div", nk, [
                    Ve(ne) ? (a(), L(Ue, {
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
                    ne.package.repository ? (a(), L(Ue, {
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
          E.value === "models" ? (a(), L(Hw, {
            key: 3,
            models: ke.value,
            "model-choices": F.value,
            onMarkOptional: os,
            onSkip: Et,
            onOptionSelected: Hs,
            onDownloadUrl: Ls,
            onClearChoice: qs
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          E.value === "review" ? (a(), i("div", ak, [
            s("div", lk, [
              O[53] || (O[53] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", ik, [
                s("div", rk, [
                  s("span", ck, m(fe.value), 1),
                  O[48] || (O[48] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", uk, [
                  s("span", dk, m(he.value), 1),
                  O[49] || (O[49] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", mk, [
                  s("span", fk, m(je.value), 1),
                  O[50] || (O[50] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", vk, [
                  s("span", pk, m(We.value), 1),
                  O[51] || (O[51] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              be.value.length > 0 ? (a(), i("div", gk, [
                s("h4", hk, "Node Packages (" + m(be.value.length) + ")", 1),
                s("div", yk, [
                  (a(!0), i(W, null, ye(be.value, (ne) => (a(), i("div", {
                    key: ne.package_id,
                    class: "review-item"
                  }, [
                    s("code", wk, m(ne.package_id), 1),
                    s("div", _k, [
                      V.value.has(ne.package_id) ? (a(), i("span", bk, "Skipped")) : (a(), i("span", kk, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              B.value.length > 0 ? (a(), i("div", $k, [
                s("h4", Ck, "Community-Mapped Packages (" + m(B.value.length) + ")", 1),
                s("div", xk, [
                  (a(!0), i(W, null, ye(B.value, (ne) => {
                    var Je, it, Dt;
                    return a(), i("div", {
                      key: `review-community-${ne.reference.node_type}-${ne.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", Sk, m(ne.reference.node_type), 1),
                      s("div", Ik, [
                        ((Je = Pe(ne.reference.node_type)) == null ? void 0 : Je.action) === "install" ? (a(), i("span", Ek, m(((it = Pe(ne.reference.node_type)) == null ? void 0 : it.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((Dt = Pe(ne.reference.node_type)) == null ? void 0 : Dt.action) === "optional" ? (a(), i("span", Tk, " Optional ")) : (a(), i("span", Mk, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              le.value.length > 0 ? (a(), i("div", Pk, [
                s("h4", Rk, "Node Choices (" + m(le.value.length) + ")", 1),
                s("div", Lk, [
                  (a(!0), i(W, null, ye(le.value, (ne) => {
                    var Je, it, Dt, vs, nt, es;
                    return a(), i("div", {
                      key: ne.node_type,
                      class: "review-item"
                    }, [
                      s("code", Dk, m(ne.node_type), 1),
                      s("div", Nk, [
                        N.value.has(ne.node_type) ? (a(), i(W, { key: 0 }, [
                          ((Je = N.value.get(ne.node_type)) == null ? void 0 : Je.action) === "install" ? (a(), i("span", Uk, m((it = N.value.get(ne.node_type)) == null ? void 0 : it.package_id), 1)) : ((Dt = N.value.get(ne.node_type)) == null ? void 0 : Dt.action) === "map-installed" ? (a(), i("span", Ok, " Mapped to " + m((vs = N.value.get(ne.node_type)) == null ? void 0 : vs.package_id), 1)) : ((nt = N.value.get(ne.node_type)) == null ? void 0 : nt.action) === "optional" ? (a(), i("span", Ak, " Optional ")) : ((es = N.value.get(ne.node_type)) == null ? void 0 : es.action) === "skip" ? (a(), i("span", zk, " Skip ")) : y("", !0)
                        ], 64)) : (a(), i("span", Fk, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              X.value.length > 0 ? (a(), i("div", Vk, [
                s("h4", Bk, "Models to Download (" + m(X.value.length) + ")", 1),
                s("div", Wk, [
                  (a(!0), i(W, null, ye(X.value, (ne) => (a(), i("div", {
                    key: ne.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", Gk, [
                      s("code", jk, m(ne.filename), 1),
                      s("div", Hk, [
                        s("span", qk, "→ " + m(ne.target_path), 1),
                        ne.url ? (a(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: ne.url
                        }, m(G(ne.url)), 9, Kk)) : y("", !0)
                      ])
                    ]),
                    O[52] || (O[52] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              ke.value.length > 0 ? (a(), i("div", Jk, [
                s("h4", Qk, "Models (" + m(ke.value.length) + ")", 1),
                s("div", Yk, [
                  (a(!0), i(W, null, ye(ke.value, (ne) => {
                    var Je, it, Dt, vs, nt, es, xt;
                    return a(), i("div", {
                      key: ne.filename,
                      class: "review-item"
                    }, [
                      s("code", Xk, m(ne.filename), 1),
                      s("div", Zk, [
                        F.value.has(ne.filename) ? (a(), i(W, { key: 0 }, [
                          ((Je = F.value.get(ne.filename)) == null ? void 0 : Je.action) === "select" ? (a(), i("span", eb, m((Dt = (it = F.value.get(ne.filename)) == null ? void 0 : it.selected_model) == null ? void 0 : Dt.filename), 1)) : ((vs = F.value.get(ne.filename)) == null ? void 0 : vs.action) === "download" ? (a(), i("span", tb, " Download ")) : ((nt = F.value.get(ne.filename)) == null ? void 0 : nt.action) === "optional" ? (a(), i("span", sb, " Optional ")) : ((es = F.value.get(ne.filename)) == null ? void 0 : es.action) === "skip" ? (a(), i("span", ob, " Skip ")) : ((xt = F.value.get(ne.filename)) == null ? void 0 : xt.action) === "cancel_download" ? (a(), i("span", nb, " Cancel Download ")) : y("", !0)
                        ], 64)) : ne.is_download_intent ? (a(), i("span", ab, " Pending Download ")) : (a(), i("span", lb, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Ne.value.length === 0 && B.value.length === 0 && le.value.length === 0 && ke.value.length === 0 ? (a(), i("div", ib, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          E.value === "applying" ? (a(), L(T0, {
            key: 5,
            progress: st(d),
            onRestart: Go,
            onRetryFailed: Ds
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        E.value !== "analysis" && E.value !== "applying" ? (a(), L(Ue, {
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
        E.value !== "applying" || st(d).phase === "complete" || st(d).phase === "error" ? (a(), L(Ue, {
          key: 1,
          variant: "secondary",
          onClick: O[0] || (O[0] = (ne) => n("close"))
        }, {
          default: h(() => [
            x(m(st(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        E.value === "analysis" ? (a(), L(Ue, {
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
        E.value === "nodes" || E.value === "packages" || E.value === "models" ? (a(), L(Ue, {
          key: 3,
          variant: "primary",
          onClick: De
        }, {
          default: h(() => [
            x(" Continue to " + m(He()) + " → ", 1)
          ]),
          _: 1
        })) : y("", !0),
        E.value === "review" ? (a(), L(Ue, {
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
}), cb = /* @__PURE__ */ Ie(rb, [["__scopeId", "data-v-6b86d2f3"]]), ub = { class: "search-input-wrapper" }, db = ["value", "placeholder"], mb = /* @__PURE__ */ xe({
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
    return lt(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, v) => (a(), i("div", ub, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: gs(u, ["escape"])
      }, null, 40, db),
      e.clearable && e.modelValue ? (a(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), fb = /* @__PURE__ */ Ie(mb, [["__scopeId", "data-v-266f857a"]]), vb = { class: "search-bar" }, pb = /* @__PURE__ */ xe({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, o) => (a(), i("div", vb, [
      $(fb, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => t.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), go = /* @__PURE__ */ Ie(pb, [["__scopeId", "data-v-3d51bbfd"]]), gb = { class: "section-group" }, hb = {
  key: 0,
  class: "section-content"
}, yb = /* @__PURE__ */ xe({
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
    function r() {
      o.collapsible && (l.value = !l.value, n("toggle", l.value));
    }
    return (c, u) => (a(), i("section", gb, [
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
      !e.collapsible || l.value ? (a(), i("div", hb, [
        at(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Tt = /* @__PURE__ */ Ie(yb, [["__scopeId", "data-v-c48e33ed"]]), wb = { class: "item-header" }, _b = {
  key: 0,
  class: "item-icon"
}, kb = { class: "item-info" }, bb = {
  key: 0,
  class: "item-title"
}, $b = {
  key: 1,
  class: "item-subtitle"
}, Cb = {
  key: 0,
  class: "item-details"
}, xb = {
  key: 1,
  class: "item-actions"
}, Sb = /* @__PURE__ */ xe({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, n = R(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (a(), i("div", {
      class: Be(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      s("div", wb, [
        l.$slots.icon ? (a(), i("span", _b, [
          at(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        s("div", kb, [
          l.$slots.title ? (a(), i("div", bb, [
            at(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), i("div", $b, [
            at(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), i("div", Cb, [
        at(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), i("div", xb, [
        at(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Gt = /* @__PURE__ */ Ie(Sb, [["__scopeId", "data-v-cc435e0e"]]), Ib = { class: "empty-state" }, Eb = {
  key: 0,
  class: "empty-icon"
}, Tb = { class: "empty-message" }, Mb = /* @__PURE__ */ xe({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, o) => (a(), i("div", Ib, [
      e.icon ? (a(), i("div", Eb, m(e.icon), 1)) : y("", !0),
      s("p", Tb, m(e.message), 1),
      e.actionLabel ? (a(), L(Re, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => t.$emit("action"))
      }, {
        default: h(() => [
          x(m(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), _s = /* @__PURE__ */ Ie(Mb, [["__scopeId", "data-v-4466284f"]]), Pb = { class: "loading-state" }, Rb = { class: "loading-message" }, Lb = /* @__PURE__ */ xe({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, o) => (a(), i("div", Pb, [
      o[0] || (o[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", Rb, m(e.message), 1)
    ]));
  }
}), Ps = /* @__PURE__ */ Ie(Lb, [["__scopeId", "data-v-ad8436c9"]]), Db = { class: "error-state" }, Nb = { class: "error-message" }, Ub = /* @__PURE__ */ xe({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, o) => (a(), i("div", Db, [
      o[2] || (o[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", Nb, m(e.message), 1),
      e.retry ? (a(), L(Re, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => t.$emit("retry"))
      }, {
        default: h(() => [...o[1] || (o[1] = [
          x(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Rs = /* @__PURE__ */ Ie(Ub, [["__scopeId", "data-v-5397be48"]]);
function Ob(e) {
  return e.toLowerCase().endsWith(".json") ? e : `${e}.json`;
}
function Mi(e) {
  return Array.from(new Set(e.filter(Boolean)));
}
function Ab(e) {
  const t = e.trim(), o = Ob(t);
  return t.startsWith("workflows/") ? Mi([o, t]) : Mi([
    `workflows/${o}`,
    o,
    t
  ]);
}
function zb(e) {
  return e.trim().replace(/^workflows\//, "").replace(/\.json$/i, "");
}
async function Fb(e) {
  const t = Ab(e), o = [];
  for (const n of t)
    try {
      const l = await Vs(`/userdata/${encodeURIComponent(n)}`);
      if (l.ok)
        return l.json();
      o.push(`${n}: ${l.status}`);
    } catch (l) {
      o.push(`${n}: ${l instanceof Error ? l.message : String(l)}`);
    }
  throw new Error(`Could not load saved workflow "${e}" (${o.join(", ")})`);
}
async function Vb(e) {
  const t = window.app;
  if (typeof t.loadGraphData != "function")
    throw new Error("ComfyUI loadGraphData is not available");
  const o = await Fb(e);
  await t.loadGraphData(
    o,
    !0,
    !0,
    zb(e),
    {
      showMissingModelsDialog: !0,
      showMissingNodesDialog: !0
    }
  ), await new Promise((n) => requestAnimationFrame(n));
}
const Bb = /* @__PURE__ */ xe({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getWorkflows: l } = ct(), r = k([]), c = k(!1), u = k(null), d = k(""), v = k(!0), f = k(!1), p = k(!1), w = k(!1), g = k(null), _ = R(
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
    async function ie(K) {
      g.value = K;
      try {
        await Vb(K);
      } catch (ee) {
        console.error("[ComfyGit] Failed to activate workflow for contract mapping:", ee), u.value = ee instanceof Error ? ee.message : "Failed to open workflow for contract mapping";
        return;
      }
      window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
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
      n("refresh", { refreshWorkflows: !1 });
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
    }), (K, ee) => (a(), i(W, null, [
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
          c.value ? (a(), L(Ps, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (a(), L(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (a(), i(W, { key: 2 }, [
            E.value.length ? (a(), L(Tt, {
              key: 0,
              title: "BROKEN",
              count: E.value.length
            }, {
              default: h(() => [
                (a(!0), i(W, null, ye(E.value, (te) => (a(), L(Gt, {
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
            M.value.length ? (a(), L(Tt, {
              key: 1,
              title: "NEW",
              count: M.value.length
            }, {
              default: h(() => [
                (a(!0), i(W, null, ye(M.value, (te) => (a(), L(Gt, {
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
            N.value.length ? (a(), L(Tt, {
              key: 2,
              title: "MODIFIED",
              count: N.value.length
            }, {
              default: h(() => [
                (a(!0), i(W, null, ye(N.value, (te) => (a(), L(Gt, {
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
            F.value.length ? (a(), L(Tt, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: ee[2] || (ee[2] = (te) => v.value = te)
            }, {
              default: h(() => [
                (a(!0), i(W, null, ye(V.value, (te) => (a(), L(Gt, {
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
                !f.value && F.value.length > 5 ? (a(), L(Re, {
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
            I.value.length ? y("", !0) : (a(), L(_s, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && g.value ? (a(), L(Ly, {
        key: 0,
        "workflow-name": g.value,
        onClose: ee[3] || (ee[3] = (te) => p.value = !1),
        onResolve: ee[4] || (ee[4] = (te) => ue(g.value)),
        onRefresh: ee[5] || (ee[5] = (te) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && g.value ? (a(), L(cb, {
        key: 1,
        "workflow-name": g.value,
        onClose: B,
        onInstall: me,
        onRefresh: oe,
        onRestart: H
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), Wb = /* @__PURE__ */ Ie(Bb, [["__scopeId", "data-v-7bf48b3a"]]), Gb = /* @__PURE__ */ xe({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (t, o) => (a(), i("div", {
      class: Be(["summary-bar", e.variant])
    }, [
      at(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), Tl = /* @__PURE__ */ Ie(Gb, [["__scopeId", "data-v-ccb7816e"]]);
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
const jb = {
  key: 0,
  class: "model-details"
}, Hb = { class: "detail-section" }, qb = { class: "detail-row" }, Kb = { class: "detail-value mono" }, Jb = { class: "detail-row" }, Qb = { class: "detail-value mono" }, Yb = { class: "detail-row" }, Xb = { class: "detail-value mono" }, Zb = {
  key: 0,
  class: "detail-row"
}, e2 = { class: "detail-value" }, t2 = ["disabled"], s2 = {
  key: 1,
  class: "detail-row"
}, o2 = { class: "detail-value hash-error" }, n2 = { class: "detail-row" }, a2 = { class: "detail-value" }, l2 = { class: "detail-row" }, i2 = { class: "detail-value" }, r2 = { class: "detail-row" }, c2 = { class: "detail-value" }, u2 = { class: "detail-section" }, d2 = { class: "section-header" }, m2 = {
  key: 0,
  class: "locations-list"
}, f2 = { class: "location-path mono" }, v2 = {
  key: 0,
  class: "location-modified"
}, p2 = ["onClick"], g2 = {
  key: 1,
  class: "empty-state"
}, h2 = { class: "detail-section" }, y2 = { class: "section-header-row" }, w2 = { class: "section-header" }, _2 = {
  key: 0,
  class: "sources-list"
}, k2 = { class: "source-type" }, b2 = ["href"], $2 = ["disabled", "onClick"], C2 = {
  key: 1,
  class: "empty-state"
}, x2 = {
  key: 2,
  class: "source-error"
}, S2 = {
  key: 3,
  class: "source-success"
}, I2 = /* @__PURE__ */ xe({
  __name: "ModelDetailModal",
  props: {
    identifier: {},
    overlayZIndex: {}
  },
  emits: ["close", "sourceSaved"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getModelDetails: l, removeModelSource: r, computeModelHashes: c } = ct(), u = k(null), d = k(!0), v = k(null), f = k(null), p = k(null), w = k(null), g = k(!1), _ = k(!1), b = k(null), S = R(() => {
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
      w.value = "Source added successfully!", g.value = !1, await ue(), n("sourceSaved");
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
      return a(), i(W, null, [
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
              u.value ? (a(), i("div", jb, [
                s("section", Hb, [
                  s("div", qb, [
                    Y[7] || (Y[7] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", Kb, m(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Y[0] || (Y[0] = (se) => N(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", Jb, [
                    Y[8] || (Y[8] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", Qb, m(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Y[1] || (Y[1] = (se) => N(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", Yb, [
                    Y[9] || (Y[9] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", Xb, m(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Y[2] || (Y[2] = (se) => N(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  S.value ? (a(), i("div", Zb, [
                    Y[10] || (Y[10] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", e2, [
                      s("button", {
                        class: "compute-hashes-btn",
                        disabled: _.value,
                        onClick: q
                      }, m(_.value ? "Computing hashes..." : "Compute Full Hashes"), 9, t2)
                    ])
                  ])) : y("", !0),
                  b.value ? (a(), i("div", s2, [
                    Y[11] || (Y[11] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", o2, m(b.value), 1)
                  ])) : y("", !0),
                  s("div", n2, [
                    Y[12] || (Y[12] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", a2, m(M(u.value.size)), 1)
                  ]),
                  s("div", l2, [
                    Y[13] || (Y[13] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", i2, m(u.value.category), 1)
                  ]),
                  s("div", r2, [
                    Y[14] || (Y[14] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", c2, m(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", u2, [
                  s("h4", d2, "Locations (" + m(((oe = u.value.locations) == null ? void 0 : oe.length) || 0) + ")", 1),
                  (B = u.value.locations) != null && B.length ? (a(), i("div", m2, [
                    (a(!0), i(W, null, ye(u.value.locations, (se, de) => (a(), i("div", {
                      key: de,
                      class: "location-item"
                    }, [
                      s("span", f2, m(se.path), 1),
                      se.modified ? (a(), i("span", v2, "Modified: " + m(se.modified), 1)) : y("", !0),
                      se.path ? (a(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (ce) => N(se.path)
                      }, " Copy File Path ", 8, p2)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), i("div", g2, "No locations found"))
                ]),
                s("section", h2, [
                  s("div", y2, [
                    s("h4", w2, "Download Sources (" + m(((H = u.value.sources) == null ? void 0 : H.length) || 0) + ")", 1),
                    s("button", {
                      class: "find-source-btn",
                      onClick: Y[3] || (Y[3] = (se) => g.value = !0)
                    }, " Find Source ")
                  ]),
                  (we = u.value.sources) != null && we.length ? (a(), i("div", _2, [
                    (a(!0), i(W, null, ye(u.value.sources, (se, de) => (a(), i("div", {
                      key: de,
                      class: "source-item"
                    }, [
                      s("span", k2, m(se.type) + ":", 1),
                      s("a", {
                        href: se.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(se.url), 9, b2),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: f.value === se.url,
                        onClick: (ce) => F(se.url)
                      }, m(f.value === se.url ? "..." : "×"), 9, $2)
                    ]))), 128))
                  ])) : (a(), i("div", C2, " No download sources configured ")),
                  p.value ? (a(), i("p", x2, m(p.value), 1)) : y("", !0),
                  w.value ? (a(), i("p", S2, m(w.value), 1)) : y("", !0)
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
        (a(), L(Zt, { to: "body" }, [
          C.value ? (a(), i("div", {
            key: 0,
            class: Be(["toast", C.value.type])
          }, m(C.value.message), 3)) : y("", !0)
        ])),
        u.value && g.value ? (a(), L(uc, {
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
}), vc = /* @__PURE__ */ Ie(I2, [["__scopeId", "data-v-cd808fbc"]]), E2 = { class: "workflow-links-tab" }, T2 = { class: "section-header-row" }, M2 = {
  key: 0,
  class: "state-message"
}, P2 = {
  key: 1,
  class: "error-message"
}, R2 = {
  key: 2,
  class: "candidate-list"
}, L2 = {
  key: 3,
  class: "state-message"
}, D2 = /* @__PURE__ */ xe({
  __name: "WorkflowLinksTab",
  emits: ["selectUrl"],
  setup(e, { emit: t }) {
    const o = t, { getWorkflowSourceCandidates: n } = ct(), l = k([]), r = k(!1), c = k(null), u = R(() => l.value.filter((v) => v.source === "workflow"));
    async function d() {
      r.value = !0, c.value = null;
      try {
        const v = await n();
        l.value = v.candidates;
      } catch (v) {
        c.value = v instanceof Error ? v.message : "Failed to scan workflows";
      } finally {
        r.value = !1;
      }
    }
    return lt(d), (v, f) => (a(), i("div", E2, [
      s("div", T2, [
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
      r.value ? (a(), i("div", M2, "Scanning workflows...")) : c.value ? (a(), i("div", P2, m(c.value), 1)) : u.value.length ? (a(), i("div", R2, [
        (a(!0), i(W, null, ye(u.value, (p) => (a(), L(rc, {
          key: `${p.workflow}:${p.url}`,
          candidate: p,
          "action-label": "Use URL",
          onSelect: f[0] || (f[0] = (w) => o("selectUrl", w))
        }, null, 8, ["candidate"]))), 128))
      ])) : (a(), i("div", L2, " No likely workflow links found. Try Hugging Face or Direct URL. "))
    ]));
  }
}), N2 = /* @__PURE__ */ Ie(D2, [["__scopeId", "data-v-1aac54cc"]]), U2 = { class: "civitai-tab" }, O2 = /* @__PURE__ */ xe({
  __name: "CivitaiTab",
  setup(e) {
    return (t, o) => (a(), i("div", U2, [...o[0] || (o[0] = [
      s("div", { class: "placeholder" }, [
        s("div", { class: "icon" }, "🎨"),
        s("h3", null, "Civitai Integration"),
        s("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), A2 = /* @__PURE__ */ Ie(O2, [["__scopeId", "data-v-44948051"]]), z2 = { class: "direct-url-tab" }, F2 = {
  key: 0,
  class: "error"
}, V2 = /* @__PURE__ */ xe({
  __name: "DirectUrlTab",
  props: {
    initialUrl: {}
  },
  emits: ["queue"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(""), r = k("");
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
      n("queue", [{
        url: v,
        targetPath: f,
        filename: c.value
      }]), l.value = "";
    };
    function d(v, f) {
      return `${v.replace(/\/+$/, "")}/${f.replace(/^\/+/, "")}`;
    }
    return (v, f) => (a(), i("div", z2, [
      $(cc, {
        modelValue: l.value,
        "onUpdate:modelValue": f[1] || (f[1] = (p) => l.value = p),
        label: "Download URL",
        placeholder: "https://example.com/model.safetensors",
        "action-label": "Queue Download",
        disabled: !r.value.trim() || !c.value,
        onSubmit: u
      }, {
        default: h(() => [
          $(lc, {
            modelValue: r.value,
            "onUpdate:modelValue": f[0] || (f[0] = (p) => r.value = p)
          }, null, 8, ["modelValue"]),
          l.value.trim() && !c.value ? (a(), i("p", F2, " Could not infer a filename from this URL. ")) : y("", !0),
          f[2] || (f[2] = s("p", { class: "note" }, "Model will be queued for background download.", -1))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"])
    ]));
  }
}), B2 = /* @__PURE__ */ Ie(V2, [["__scopeId", "data-v-a6d21f27"]]), W2 = { class: "download-modal" }, G2 = { class: "tab-bar" }, j2 = ["onClick"], H2 = { class: "tab-content" }, q2 = /* @__PURE__ */ xe({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = t, { addToQueue: n } = Bo(), l = [
      { id: "workflow", label: "Workflow Links", icon: "🔎" },
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = k("workflow"), c = k("");
    function u(p) {
      n(p.map((w) => ({
        workflow: "__manual__",
        filename: w.filename,
        url: w.url,
        targetPath: w.destination ? `${w.destination}/${w.filename}` : w.filename
      }))), o("close");
    }
    function d(p) {
      n(p.map((w) => ({
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
    return (p, w) => e.show ? (a(), L($t, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: f
    }, {
      body: h(() => [
        s("div", W2, [
          s("div", G2, [
            (a(), i(W, null, ye(l, (g) => s("button", {
              key: g.id,
              class: Be(["tab-btn", { active: r.value === g.id }]),
              onClick: (_) => r.value = g.id
            }, m(g.icon) + " " + m(g.label), 11, j2)), 64))
          ]),
          s("div", H2, [
            r.value === "workflow" ? (a(), L(N2, {
              key: 0,
              onSelectUrl: v
            })) : r.value === "huggingface" ? (a(), L(ic, {
              key: 1,
              onQueue: u
            })) : r.value === "civitai" ? (a(), L(A2, { key: 2 })) : r.value === "direct" ? (a(), L(B2, {
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
}), pc = /* @__PURE__ */ Ie(q2, [["__scopeId", "data-v-de2e4fac"]]), K2 = /* @__PURE__ */ xe({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const o = t, { getEnvironmentModels: n, getStatus: l } = ct(), r = k([]), c = k([]), u = k("production"), d = k(!1), v = k(null), f = k(""), p = k(!1), w = k(null), g = k(!1);
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
        const D = await n();
        r.value = D, c.value = [];
        const q = await l();
        u.value = q.environment || "production";
      } catch (D) {
        v.value = D instanceof Error ? D.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return lt(V), (D, q) => (a(), i(W, null, [
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
          d.value ? (a(), L(Ps, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (a(), L(Rs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (a(), i(W, { key: 2 }, [
            r.value.length ? (a(), L(Tl, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                x(" Total: " + m(r.value.length) + " models • " + m(E(b.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), i(W, null, ye(I.value, (ue) => (a(), L(Tt, {
              key: ue.type,
              title: ue.type.toUpperCase(),
              count: ue.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(W, null, ye(ue.models, (ie) => (a(), L(Gt, {
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
            C.value.length ? (a(), L(Tt, {
              key: 1,
              title: "MISSING",
              count: C.value.length
            }, {
              default: h(() => [
                (a(!0), i(W, null, ye(C.value, (ue) => (a(), L(Gt, {
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
            !S.value.length && !C.value.length ? (a(), L(_s, {
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
      w.value ? (a(), L(vc, {
        key: 0,
        identifier: w.value,
        onClose: q[4] || (q[4] = (ue) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      $(pc, {
        show: g.value,
        onClose: q[5] || (q[5] = (ue) => g.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), J2 = /* @__PURE__ */ Ie(K2, [["__scopeId", "data-v-af3ca736"]]), Q2 = {
  key: 0,
  class: "indexing-progress"
}, Y2 = { class: "progress-info" }, X2 = { class: "progress-label" }, Z2 = { class: "progress-count" }, e$ = { class: "progress-bar" }, t$ = { class: "directory-modal-body" }, s$ = { class: "input-group" }, o$ = { class: "current-path" }, n$ = { class: "input-group" }, a$ = /* @__PURE__ */ xe({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
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
        const me = await n();
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
    }), (me, oe) => (a(), i(W, null, [
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
          E.value ? (a(), i("div", Q2, [
            s("div", Y2, [
              s("span", X2, m(E.value.message), 1),
              s("span", Z2, m(E.value.current) + "/" + m(E.value.total), 1)
            ]),
            s("div", e$, [
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
          d.value || E.value ? (a(), L(Ps, {
            key: 0,
            message: E.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : f.value ? (a(), L(Rs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: ie
          }, null, 8, ["message"])) : (a(), i(W, { key: 2 }, [
            u.value.length ? (a(), L(Tl, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                x(" Total: " + m(u.value.length) + " models • " + m(V(M.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), i(W, null, ye(F.value, (B) => (a(), L(Tt, {
              key: B.type,
              title: B.type.toUpperCase(),
              count: B.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (a(!0), i(W, null, ye(B.models, (H) => (a(), L(Gt, {
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
            N.value.length ? y("", !0) : (a(), L(_s, {
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
      g.value ? (a(), L(vc, {
        key: 0,
        identifier: g.value,
        onClose: oe[5] || (oe[5] = (B) => g.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      _.value ? (a(), L($t, {
        key: 1,
        title: "Change Models Directory",
        size: "md",
        "overlay-z-index": 10010,
        onClose: oe[8] || (oe[8] = (B) => _.value = !1)
      }, {
        body: h(() => [
          s("div", t$, [
            s("div", s$, [
              oe[15] || (oe[15] = s("label", null, "Current Directory", -1)),
              s("code", o$, m(b.value || "Not set"), 1)
            ]),
            s("div", n$, [
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
      $(pc, {
        show: I.value,
        onClose: oe[9] || (oe[9] = (B) => I.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), l$ = /* @__PURE__ */ Ie(a$, [["__scopeId", "data-v-9fca048b"]]), i$ = { class: "node-details" }, r$ = { class: "status-row" }, c$ = {
  key: 0,
  class: "detail-row"
}, u$ = { class: "value" }, d$ = { class: "detail-row" }, m$ = { class: "value" }, f$ = {
  key: 1,
  class: "detail-row"
}, v$ = { class: "value mono" }, p$ = {
  key: 2,
  class: "detail-row"
}, g$ = ["href"], h$ = {
  key: 3,
  class: "detail-row"
}, y$ = { class: "value mono small" }, w$ = { class: "detail-row" }, _$ = {
  key: 0,
  class: "value"
}, k$ = {
  key: 1,
  class: "workflow-list"
}, b$ = /* @__PURE__ */ xe({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = R(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = R(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = R(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (a(), L($t, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => n("close"))
    }, {
      body: h(() => [
        s("div", i$, [
          s("div", r$, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Be(["status-badge", l.value])
            }, m(r.value), 3)
          ]),
          e.node.version ? (a(), i("div", c$, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", u$, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : y("", !0),
          s("div", d$, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", m$, m(c.value), 1)
          ]),
          e.node.registry_id ? (a(), i("div", f$, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", v$, m(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), i("div", p$, [
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
            ], 8, g$)
          ])) : y("", !0),
          e.node.download_url ? (a(), i("div", h$, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", y$, m(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", w$, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), i("span", _$, " Not used in any workflows ")) : (a(), i("div", k$, [
              (a(!0), i(W, null, ye(e.node.used_in_workflows, (v) => (a(), i("span", {
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
          onClick: d[0] || (d[0] = (v) => n("close"))
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
}), $$ = /* @__PURE__ */ Ie(b$, [["__scopeId", "data-v-b342f626"]]), C$ = { class: "dialog-message" }, x$ = {
  key: 0,
  class: "dialog-details"
}, S$ = {
  key: 1,
  class: "dialog-warning"
}, I$ = /* @__PURE__ */ xe({
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
    return (t, o) => (a(), L($t, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => t.$emit("cancel"))
    }, {
      body: h(() => [
        s("p", C$, m(e.message), 1),
        e.details && e.details.length ? (a(), i("div", x$, [
          (a(!0), i(W, null, ye(e.details, (n, l) => (a(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), i("p", S$, [
          o[4] || (o[4] = s("span", { class: "warning-icon" }, "⚠", -1)),
          x(" " + m(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        $(Ue, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => t.$emit("cancel"))
        }, {
          default: h(() => [
            x(m(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), L(Ue, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => t.$emit("secondary"))
        }, {
          default: h(() => [
            x(m(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        $(Ue, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
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
}), Pl = /* @__PURE__ */ Ie(I$, [["__scopeId", "data-v-3670b9f5"]]), E$ = { class: "mismatch-warning" }, T$ = { class: "version-mismatch" }, M$ = { class: "version-actual" }, P$ = { class: "version-expected" }, R$ = { style: { color: "var(--cg-color-warning)" } }, L$ = { style: { color: "var(--cg-color-warning)" } }, D$ = {
  key: 0,
  class: "community-status-badge"
}, N$ = { key: 0 }, U$ = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, O$ = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, A$ = { class: "criticality-control" }, z$ = ["value", "disabled", "onChange"], F$ = /* @__PURE__ */ xe({
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
        n("toast", `Node "${ge.name}" has no package id for install`, "warning");
        return;
      }
      if (ve === "git" && !ge.repository) {
        n("toast", `Node "${ge.name}" has no repository URL for git install`, "warning");
        return;
      }
      const A = {
        id: T,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      ve === "git" && ge.repository && (A.repository = ge.repository, A.install_source = "git"), await d(A), S.value.add(q(ge)), n("toast", `✓ Queued install for "${ge.name}"`, "success");
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
            ge.criticality = A, n("toast", Ce.message || `Failed to update "${ge.name}" criticality`, "error");
            return;
          }
          n("toast", `Marked "${ge.name}" as ${le}`, "success");
        } catch (Ce) {
          ge.criticality = A, T.value = A, n("toast", `Error updating criticality: ${Ce instanceof Error ? Ce.message : "Unknown error"}`, "error");
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
      n("open-node-manager");
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
            ve.status === "success" ? (n("toast", `✓ Node "${ge}" tracked as development`, "success"), await Ae()) : n("toast", `Failed to track node: ${ve.message || "Unknown error"}`, "error");
          } catch (ve) {
            n("toast", `Error tracking node: ${ve instanceof Error ? ve.message : "Unknown error"}`, "error");
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
            ve.status === "success" ? (n("toast", `✓ Node "${ge}" removed`, "success"), await Ae()) : n("toast", `Failed to remove node: ${ve.message || "Unknown error"}`, "error");
          } catch (ve) {
            n("toast", `Error removing node: ${ve instanceof Error ? ve.message : "Unknown error"}`, "error");
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
            ve.status === "success" ? (n("toast", `✓ Node "${ge}" installed`, "success"), await Ae()) : n("toast", `Failed to install node: ${ve.message || "Unknown error"}`, "error");
          } catch (ve) {
            n("toast", `Error installing node: ${ve instanceof Error ? ve.message : "Unknown error"}`, "error");
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
            n("toast", `Error queueing install: ${ve instanceof Error ? ve.message : "Unknown error"}`, "error");
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
            n("toast", `Error queueing git install: ${ve instanceof Error ? ve.message : "Unknown error"}`, "error");
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
    return lt(Ae), (ge, ve) => (a(), i(W, null, [
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
          p.value ? (a(), L(Ps, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (a(), L(Rs, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: Ae
          }, null, 8, ["message"])) : (a(), i(W, { key: 2 }, [
            me.value ? (a(), L(Tt, {
              key: 0,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                s("div", E$, [
                  ve[8] || (ve[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), i(W, null, ye(e.versionMismatches, (T) => (a(), L(Gt, {
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
                    s("span", T$, [
                      s("span", M$, m(T.actual), 1),
                      ve[10] || (ve[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", P$, m(T.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    $(Re, {
                      variant: "warning",
                      size: "sm",
                      onClick: ve[2] || (ve[2] = (A) => n("repair-environment"))
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
            V.value.length ? (a(), L(Tt, {
              key: 1,
              title: "BLOCKED",
              count: V.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(W, null, ye(V.value, (T) => (a(), L(Gt, {
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
                    s("span", R$, m(se(T)), 1)
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
            D.value.length ? (a(), L(Tt, {
              key: 2,
              title: "COMMUNITY-MAPPED",
              count: D.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(W, null, ye(D.value, (T) => (a(), L(Gt, {
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
                    s("span", L$, m(ce(T)), 1)
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
                    ue(T) ? (a(), i("span", D$, "Queued")) : (a(), i(W, { key: 1 }, [
                      T.registry_id ? (a(), L(Re, {
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
                      T.repository ? (a(), L(Re, {
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
            F.value.length ? (a(), L(Tt, {
              key: 3,
              title: "UNTRACKED",
              count: F.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(W, null, ye(F.value, (T) => (a(), L(Gt, {
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
            M.value.length ? (a(), L(Tt, {
              key: 4,
              title: "INSTALLED",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(W, null, ye(M.value, (T) => (a(), L(Gt, {
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
                    T.version ? (a(), i("span", N$, m(T.source === "development" ? "" : "v") + m(T.version), 1)) : (a(), i("span", U$, "version unknown")),
                    s("span", O$, " • " + m(Y(T.source)), 1)
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
                    s("label", A$, [
                      ve[25] || (ve[25] = s("span", null, "Readiness", -1)),
                      s("select", {
                        class: "criticality-select",
                        value: B(T),
                        disabled: H(T),
                        onChange: (A) => we(T, A)
                      }, [...ve[24] || (ve[24] = [
                        s("option", { value: "required" }, "Required", -1),
                        s("option", { value: "optional" }, "Optional", -1)
                      ])], 40, z$)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            N.value.length ? (a(), L(Tt, {
              key: 5,
              title: "MISSING",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(W, null, ye(N.value, (T) => (a(), L(Gt, {
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
            !M.value.length && !N.value.length && !V.value.length && !D.value.length && !F.value.length ? (a(), L(_s, {
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
      b.value ? (a(), L($$, {
        key: 0,
        node: b.value,
        onClose: ve[5] || (ve[5] = (T) => b.value = null)
      }, null, 8, ["node"])) : y("", !0),
      I.value ? (a(), L(Pl, {
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
}), V$ = /* @__PURE__ */ Ie(F$, [["__scopeId", "data-v-edfa1c86"]]), B$ = { class: "setting-info" }, W$ = { class: "setting-label" }, G$ = {
  key: 0,
  class: "required-marker"
}, j$ = {
  key: 0,
  class: "setting-description"
}, H$ = { class: "setting-control" }, q$ = /* @__PURE__ */ xe({
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
      class: Be(["setting-row", { disabled: e.disabled, stacked: e.stacked }])
    }, [
      s("div", B$, [
        s("div", W$, [
          x(m(e.label) + " ", 1),
          e.required ? (a(), i("span", G$, "*")) : y("", !0)
        ]),
        e.description ? (a(), i("div", j$, m(e.description), 1)) : y("", !0)
      ]),
      s("div", H$, [
        at(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), ko = /* @__PURE__ */ Ie(q$, [["__scopeId", "data-v-3e106b1c"]]), K$ = ["type", "value", "placeholder", "disabled"], J$ = /* @__PURE__ */ xe({
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
    const n = e, l = o, r = k(null);
    function c(u) {
      const d = u.target.value;
      l("update:modelValue", d);
    }
    return lt(() => {
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
      class: Be(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = gs((v) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = gs((v) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => u.$emit("blur"))
    }, null, 42, K$));
  }
}), xo = /* @__PURE__ */ Ie(J$, [["__scopeId", "data-v-0380d08f"]]), Q$ = { class: "toggle" }, Y$ = ["checked", "disabled"], X$ = /* @__PURE__ */ xe({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("label", Q$, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, Y$),
      o[1] || (o[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Pi = /* @__PURE__ */ Ie(X$, [["__scopeId", "data-v-71c0f550"]]), Ga = "ComfyGit.Deploy.GitHubPAT";
function gc(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function Z$(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function eC() {
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
  function n() {
    const l = e();
    return l !== null && l.length > 0;
  }
  return {
    getToken: e,
    setToken: t,
    clearToken: o,
    hasToken: n,
    isRemoteSsh: gc,
    isRemoteHttps: Z$
  };
}
const tC = { class: "workspace-settings-content" }, sC = { class: "settings-section" }, oC = { class: "path-setting" }, nC = { class: "path-value" }, aC = { class: "path-setting" }, lC = { class: "path-value" }, iC = { class: "settings-section" }, rC = { class: "token-setting" }, cC = {
  key: 0,
  class: "token-warning"
}, uC = { class: "token-actions" }, dC = { class: "settings-section" }, mC = { class: "settings-section" }, fC = /* @__PURE__ */ xe({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: o }) {
    const n = e, l = o, { getConfig: r, updateConfig: c, getRemotes: u, testGitAuth: d } = ct(), { getToken: v, setToken: f, clearToken: p, hasToken: w } = eC(), g = k(!1), _ = k(null), b = k(null), S = k(null), C = k(null), I = k(""), E = k(""), M = k(""), N = k(""), F = k(!1), V = k(!1), D = k(!1), q = k(""), ue = k(!1), ie = k(!1), Y = k(null), me = k(!1), oe = k(!0);
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
        S.value = await r(n.workspacePath || void 0), C.value = { ...S.value }, I.value = S.value.civitai_api_key || "", E.value = S.value.huggingface_token || "", N.value = B(S.value.comfyui_extra_args || []), M.value = v() || "", q.value = M.value, F.value = !1, V.value = !1, D.value = !1, Y.value = null;
        const Ne = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        me.value = Ne !== "false", oe.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const Ae = (ze = (await u()).remotes) == null ? void 0 : ze.find((ge) => ge.name === "origin");
          ue.value = !!(Ae && gc(Ae.url));
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
        F.value && (Ne.civitai_api_key = I.value || null), V.value && (Ne.huggingface_token = E.value || null), N.value !== B(((ze = C.value) == null ? void 0 : ze.comfyui_extra_args) || []) && (Ne.comfyui_extra_args = H(N.value)), await c(Ne, n.workspacePath || void 0), D.value && (M.value ? f(M.value) : p()), await de(), b.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
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
    }), lt(de), (ze, Ne) => (a(), i("div", tC, [
      g.value ? (a(), L(Ps, {
        key: 0,
        message: "Loading workspace settings..."
      })) : _.value ? (a(), L(Rs, {
        key: 1,
        message: _.value,
        retry: !0,
        onRetry: de
      }, null, 8, ["message"])) : (a(), i(W, { key: 2 }, [
        $(Tt, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var be, Ae;
            return [
              s("div", sC, [
                s("div", oC, [
                  Ne[9] || (Ne[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  Ne[10] || (Ne[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", nC, m(((be = S.value) == null ? void 0 : be.workspace_path) || "Loading..."), 1)
                ]),
                s("div", aC, [
                  Ne[11] || (Ne[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  Ne[12] || (Ne[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", lC, m(((Ae = S.value) == null ? void 0 : Ae.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        $(Tt, { title: "API CREDENTIALS" }, {
          default: h(() => [
            s("div", iC, [
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
                  s("div", rC, [
                    $(xo, {
                      modelValue: M.value,
                      "onUpdate:modelValue": Ne[4] || (Ne[4] = (be) => M.value = be),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: Ne[5] || (Ne[5] = (be) => D.value = !0)
                    }, null, 8, ["modelValue"]),
                    ue.value ? (a(), i("div", cC, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : y("", !0),
                    Ne[15] || (Ne[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", uC, [
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
                      se.value ? (a(), L(Re, {
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
                    Y.value ? (a(), i("div", {
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
            s("div", dC, [
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
            s("div", mC, [
              $(ko, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  $(Pi, {
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
                  $(Pi, {
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
        b.value ? (a(), L(Tl, {
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
}), hc = /* @__PURE__ */ Ie(fC, [["__scopeId", "data-v-f1bdc574"]]), vC = /* @__PURE__ */ xe({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const t = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), L(Ft, null, {
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
              (c = t.value) != null && c.hasChanges ? (a(), L(Re, {
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
        $(hc, {
          ref_key: "contentRef",
          ref: t,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), pC = { class: "env-title" }, gC = {
  key: 0,
  class: "current-badge"
}, hC = {
  key: 0,
  class: "branch-info"
}, yC = /* @__PURE__ */ xe({
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
    return (t, o) => (a(), L(Gt, {
      status: e.isCurrent ? "synced" : void 0
    }, ss({
      icon: h(() => [
        x(m(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        s("div", pC, [
          s("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), i("span", gC, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (a(), i("span", hC, [
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
          e.lastUsed && e.showLastUsed ? (a(), L(kt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), wC = /* @__PURE__ */ Ie(yC, [["__scopeId", "data-v-9231917a"]]), _C = { class: "env-details" }, kC = { class: "status-row" }, bC = {
  key: 0,
  class: "detail-row"
}, $C = { class: "value mono" }, CC = {
  key: 1,
  class: "detail-row"
}, xC = { class: "value mono small" }, SC = { class: "collapsible-section" }, IC = { class: "value" }, EC = {
  key: 0,
  class: "collapsible-body"
}, TC = { class: "item-list" }, MC = { class: "item-name" }, PC = { class: "item-name" }, RC = { class: "item-name" }, LC = { class: "item-name" }, DC = {
  key: 0,
  class: "empty-list"
}, NC = { class: "collapsible-section" }, UC = { class: "value" }, OC = {
  key: 0,
  class: "collapsible-body"
}, AC = { class: "item-list" }, zC = { class: "item-name" }, FC = {
  key: 0,
  class: "item-meta"
}, VC = {
  key: 0,
  class: "empty-list"
}, BC = { class: "collapsible-section" }, WC = { class: "value" }, GC = {
  key: 0,
  class: "missing-count"
}, jC = {
  key: 0,
  class: "collapsible-body"
}, HC = { class: "item-list" }, qC = { class: "model-row" }, KC = { class: "item-name" }, JC = { class: "model-meta" }, QC = { class: "item-meta" }, YC = {
  key: 0,
  class: "item-meta"
}, XC = {
  key: 0,
  class: "empty-list"
}, ZC = {
  key: 2,
  class: "section-divider"
}, ex = {
  key: 3,
  class: "detail-row"
}, tx = { class: "value" }, sx = { class: "footer-actions" }, ox = /* @__PURE__ */ xe({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete", "export"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(/* @__PURE__ */ new Set());
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
    return (d, v) => (a(), L($t, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[6] || (v[6] = (f) => n("close"))
    }, {
      body: h(() => {
        var f, p, w, g, _, b, S, C, I, E, M, N, F, V;
        return [
          s("div", _C, [
            s("div", kC, [
              v[7] || (v[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Be(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (a(), i("div", bC, [
              v[8] || (v[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", $C, m(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (a(), i("div", CC, [
              v[9] || (v[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", xC, m(e.environment.path), 1)
            ])) : y("", !0),
            v[18] || (v[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", SC, [
              s("div", {
                class: "collapsible-header",
                onClick: v[0] || (v[0] = (D) => r("workflows"))
              }, [
                v[10] || (v[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", IC, m(((f = e.detail) == null ? void 0 : f.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (a(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (a(), i("div", EC, [
                s("div", TC, [
                  (a(!0), i(W, null, ye(e.detail.workflows.synced, (D) => (a(), i("div", {
                    key: "synced-" + D,
                    class: "list-item"
                  }, [
                    s("span", MC, m(D), 1),
                    v[11] || (v[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (a(!0), i(W, null, ye(e.detail.workflows.new, (D) => (a(), i("div", {
                    key: "new-" + D,
                    class: "list-item"
                  }, [
                    s("span", PC, m(D), 1),
                    v[12] || (v[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (a(!0), i(W, null, ye(e.detail.workflows.modified, (D) => (a(), i("div", {
                    key: "mod-" + D,
                    class: "list-item"
                  }, [
                    s("span", RC, m(D), 1),
                    v[13] || (v[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (a(!0), i(W, null, ye(e.detail.workflows.deleted, (D) => (a(), i("div", {
                    key: "del-" + D,
                    class: "list-item"
                  }, [
                    s("span", LC, m(D), 1),
                    v[14] || (v[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (a(), i("div", DC, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            s("div", NC, [
              s("div", {
                class: "collapsible-header",
                onClick: v[1] || (v[1] = (D) => r("nodes"))
              }, [
                v[15] || (v[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", UC, m(((g = e.detail) == null ? void 0 : g.node_count) ?? e.environment.node_count), 1),
                (_ = e.detail) != null && _.nodes ? (a(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (b = e.detail) != null && b.nodes && l.value.has("nodes") ? (a(), i("div", OC, [
                s("div", AC, [
                  (a(!0), i(W, null, ye(e.detail.nodes, (D) => (a(), i("div", {
                    key: D.name,
                    class: "list-item"
                  }, [
                    s("span", zC, m(D.name), 1),
                    D.version ? (a(), i("span", FC, m(D.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (a(), i("div", VC, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            s("div", BC, [
              s("div", {
                class: "collapsible-header",
                onClick: v[2] || (v[2] = (D) => r("models"))
              }, [
                v[16] || (v[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", WC, [
                  x(m(((S = e.detail) == null ? void 0 : S.model_count) ?? e.environment.model_count) + " ", 1),
                  (I = (C = e.detail) == null ? void 0 : C.models) != null && I.missing.length ? (a(), i("span", GC, "(" + m(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (E = e.detail) != null && E.models ? (a(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (M = e.detail) != null && M.models && l.value.has("models") ? (a(), i("div", jC, [
                s("div", HC, [
                  (a(!0), i(W, null, ye(e.detail.models.missing, (D) => (a(), i("div", {
                    key: D.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", qC, [
                      s("span", KC, m(D.filename), 1),
                      s("span", {
                        class: Be(["criticality-badge", D.criticality])
                      }, m(D.criticality), 3)
                    ]),
                    s("div", JC, [
                      s("span", QC, m(D.category), 1),
                      D.workflow_names.length ? (a(), i("span", YC, " used by: " + m(D.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (a(), i("div", XC, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (N = e.detail) != null && N.created_at || e.environment.created_at ? (a(), i("div", ZC)) : y("", !0),
            (F = e.detail) != null && F.created_at || e.environment.created_at ? (a(), i("div", ex, [
              v[17] || (v[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", tx, m(u(((V = e.detail) == null ? void 0 : V.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        s("div", sx, [
          $(Ue, {
            variant: "secondary",
            size: "sm",
            onClick: v[3] || (v[3] = (f) => n("export", e.environment.name))
          }, {
            default: h(() => [...v[19] || (v[19] = [
              x(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (a(), L(Ue, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[4] || (v[4] = (f) => n("delete", e.environment.name))
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
            onClick: v[5] || (v[5] = (f) => n("close"))
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
}), nx = /* @__PURE__ */ Ie(ox, [["__scopeId", "data-v-750671f5"]]), yc = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], wc = "3.12", Rl = [
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
], _c = "auto", ax = { class: "progress-bar" }, lx = /* @__PURE__ */ xe({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, o = R(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (n, l) => (a(), i("div", ax, [
      s("div", {
        class: Be(["progress-fill", e.variant]),
        style: Nt({ width: o.value })
      }, null, 6)
    ]));
  }
}), kc = /* @__PURE__ */ Ie(lx, [["__scopeId", "data-v-1beb0512"]]), ix = { class: "task-progress" }, rx = { class: "progress-info" }, cx = { class: "progress-percentage" }, ux = { class: "progress-message" }, dx = {
  key: 0,
  class: "progress-steps"
}, mx = { class: "step-icon" }, fx = { class: "step-label" }, vx = /* @__PURE__ */ xe({
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
    return (l, r) => (a(), i("div", ix, [
      $(kc, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", rx, [
        s("span", cx, m(e.progress) + "%", 1),
        s("span", ux, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), i("div", dx, [
        (a(!0), i(W, null, ye(e.steps, (c) => (a(), i("div", {
          key: c.id,
          class: Be(["step", o(c.id)])
        }, [
          s("span", mx, m(n(c.id)), 1),
          s("span", fx, m(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), aa = /* @__PURE__ */ Ie(vx, [["__scopeId", "data-v-9d1de66c"]]), px = {
  key: 0,
  class: "create-env-form"
}, gx = { class: "form-field" }, hx = { class: "input-wrapper" }, yx = {
  key: 0,
  class: "validating-indicator"
}, wx = {
  key: 1,
  class: "valid-indicator"
}, _x = {
  key: 0,
  class: "field-error"
}, kx = { class: "form-field" }, bx = ["value"], $x = { class: "form-field" }, Cx = ["disabled"], xx = ["value"], Sx = { class: "form-field" }, Ix = ["value"], Ex = { class: "form-field form-field--checkbox" }, Tx = { class: "form-checkbox" }, Mx = {
  key: 1,
  class: "create-env-progress"
}, Px = { class: "creating-intro" }, Rx = {
  key: 0,
  class: "progress-warning"
}, Lx = {
  key: 1,
  class: "create-error"
}, Dx = { class: "error-message" }, Nx = {
  key: 1,
  class: "footer-status"
}, Ux = 10, Ox = /* @__PURE__ */ xe({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const o = t, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = ct(), u = k(""), d = k(wc), v = k("latest"), f = k(_c), p = k(!1), w = k(null), g = k(!1), _ = k(!1);
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
          V++, V >= Ux && (B(), N.value.error = "Lost connection to server.");
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
        I.value = await n();
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
    }), (se, de) => (a(), L($t, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !M.value,
      onClose: Y
    }, {
      body: h(() => [
        M.value ? (a(), i("div", Mx, [
          s("p", Px, [
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
          N.value.error ? y("", !0) : (a(), i("p", Rx, " This may take several minutes. Please wait... ")),
          N.value.error ? (a(), i("div", Lx, [
            s("p", Dx, m(N.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), i("div", px, [
          s("div", gx, [
            de[6] || (de[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", hx, [
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
              g.value ? (a(), i("span", yx, "...")) : _.value ? (a(), i("span", wx, "✓")) : y("", !0)
            ]),
            w.value ? (a(), i("div", _x, m(w.value), 1)) : y("", !0),
            de[7] || (de[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", kx, [
            de[8] || (de[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            Rt(s("select", {
              "onUpdate:modelValue": de[1] || (de[1] = (ce) => d.value = ce),
              class: "form-select"
            }, [
              (a(!0), i(W, null, ye(st(yc), (ce) => (a(), i("option", {
                key: ce,
                value: ce
              }, m(ce), 9, bx))), 128))
            ], 512), [
              [Ro, d.value]
            ])
          ]),
          s("div", $x, [
            de[9] || (de[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Rt(s("select", {
              "onUpdate:modelValue": de[2] || (de[2] = (ce) => v.value = ce),
              class: "form-select",
              disabled: E.value
            }, [
              (a(!0), i(W, null, ye(I.value, (ce) => (a(), i("option", {
                key: ce.tag_name,
                value: ce.tag_name
              }, m(ce.name), 9, xx))), 128))
            ], 8, Cx), [
              [Ro, v.value]
            ])
          ]),
          s("div", Sx, [
            de[10] || (de[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Rt(s("select", {
              "onUpdate:modelValue": de[3] || (de[3] = (ce) => f.value = ce),
              class: "form-select"
            }, [
              (a(!0), i(W, null, ye(st(Rl), (ce) => (a(), i("option", {
                key: ce,
                value: ce
              }, m(ce) + m(ce === "auto" ? " (detect GPU)" : ""), 9, Ix))), 128))
            ], 512), [
              [Ro, f.value]
            ])
          ]),
          s("div", Ex, [
            s("label", Tx, [
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
        M.value ? (a(), i(W, { key: 1 }, [
          N.value.error ? (a(), L(Ue, {
            key: 0,
            variant: "secondary",
            onClick: H
          }, {
            default: h(() => [...de[16] || (de[16] = [
              x(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), i("span", Nx, " Creating environment... "))
        ], 64)) : (a(), i(W, { key: 0 }, [
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
}), Ax = /* @__PURE__ */ Ie(Ox, [["__scopeId", "data-v-3faa3d9b"]]), zx = /* @__PURE__ */ xe({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getEnvironments: l, getEnvironmentDetails: r } = ct(), c = k([]), u = k(!1), d = k(null), v = k(""), f = k(!1), p = k(!1), w = k(null), g = k(null), _ = R(() => [...c.value].sort((F, V) => F.is_current !== V.is_current ? F.is_current ? -1 : 1 : F.name.localeCompare(V.name))), b = R(() => {
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
      p.value = !1, n("created", F, V);
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
      w.value = null, g.value = null, n("delete", F);
    }
    function M(F) {
      w.value = null, g.value = null, n("export", F);
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
    }), (F, V) => (a(), i(W, null, [
      $(Ft, null, {
        header: h(() => [
          $(Vt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: V[1] || (V[1] = (D) => f.value = !0)
          }, {
            actions: h(() => [
              e.canCreate ? (a(), L(Re, {
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
          u.value ? (a(), L(Ps, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (a(), L(Rs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (a(), i(W, { key: 2 }, [
            b.value.length ? (a(), L(Tt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: b.value.length
            }, {
              default: h(() => [
                (a(!0), i(W, null, ye(b.value, (D) => (a(), L(wC, {
                  key: D.name,
                  "environment-name": D.name,
                  "is-current": D.is_current,
                  "current-branch": D.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    !D.is_current && e.canSwitch ? (a(), L(Re, {
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
            b.value.length ? y("", !0) : (a(), L(_s, {
              key: 1,
              icon: "🌍",
              message: v.value ? `No environments match '${v.value}'` : "No environments found. Create one to get started!"
            }, ss({ _: 2 }, [
              v.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  e.canCreate ? (a(), L(Re, {
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
      w.value ? (a(), L(nx, {
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
      p.value ? (a(), L(Ax, {
        key: 1,
        onClose: V[6] || (V[6] = (D) => p.value = !1),
        onCreated: S
      })) : y("", !0)
    ], 64));
  }
}), Fx = /* @__PURE__ */ Ie(zx, [["__scopeId", "data-v-01163d8c"]]), Vx = { class: "file-path" }, Bx = { class: "file-path-text" }, Wx = ["title"], Gx = /* @__PURE__ */ xe({
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
    return (l, r) => (a(), i("div", Vx, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", Bx, m(e.path), 1),
      e.copyable ? (a(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, m(o.value ? "✓" : "📋"), 9, Wx)) : y("", !0)
    ]));
  }
}), jx = /* @__PURE__ */ Ie(Gx, [["__scopeId", "data-v-f0982173"]]), Hx = { class: "base-textarea-wrapper" }, qx = ["value", "rows", "placeholder", "disabled", "maxlength"], Kx = {
  key: 0,
  class: "base-textarea-count"
}, Jx = /* @__PURE__ */ xe({
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
    return (r, c) => (a(), i("div", Hx, [
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
      }, null, 40, qx),
      e.showCharCount && e.maxLength ? (a(), i("div", Kx, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), Lo = /* @__PURE__ */ Ie(Jx, [["__scopeId", "data-v-c6d16c93"]]), Qx = ["checked", "disabled"], Yx = { class: "base-checkbox-box" }, Xx = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Zx = {
  key: 0,
  class: "base-checkbox-label"
}, e3 = /* @__PURE__ */ xe({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("label", {
      class: Be(["base-checkbox", { disabled: e.disabled }])
    }, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked))
      }, null, 40, Qx),
      s("span", Yx, [
        e.modelValue ? (a(), i("svg", Xx, [...o[1] || (o[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      t.$slots.default ? (a(), i("span", Zx, [
        at(t.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), la = /* @__PURE__ */ Ie(e3, [["__scopeId", "data-v-bf17c831"]]), t3 = { class: "export-blocked" }, s3 = { class: "error-header" }, o3 = { class: "error-summary" }, n3 = { class: "error-title" }, a3 = { class: "error-description" }, l3 = { class: "issues-list" }, i3 = { class: "issue-message" }, r3 = {
  key: 0,
  class: "issue-details"
}, c3 = ["onClick"], u3 = { class: "issue-fix" }, d3 = {
  key: 0,
  class: "commit-section"
}, m3 = {
  key: 0,
  class: "issues-warning"
}, f3 = {
  key: 1,
  class: "commit-error"
}, v3 = /* @__PURE__ */ xe({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { commit: l } = ct(), r = k(""), c = k(!1), u = k(!1), d = k(""), v = ho({}), f = R(() => o.mode === "publish" ? "Publish" : "Export"), p = R(
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
            n("committed");
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
    return (C, I) => (a(), L($t, {
      title: p.value ? `Commit & ${f.value}` : `Cannot ${f.value}`,
      size: "md",
      onClose: I[4] || (I[4] = (E) => C.$emit("close"))
    }, {
      body: h(() => [
        s("div", t3, [
          s("div", s3, [
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
            s("div", o3, [
              s("h3", n3, m(f.value) + " blocked", 1),
              s("p", a3, m(p.value ? `Commit your changes to proceed with ${f.value.toLowerCase()}.` : `The following issues must be resolved before ${f.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", l3, [
            (a(!0), i(W, null, ye(e.issues, (E, M) => (a(), i("div", {
              key: M,
              class: "issue-item"
            }, [
              s("div", i3, m(E.message), 1),
              E.details.length ? (a(), i("div", r3, [
                (a(!0), i(W, null, ye(b(M), (N, F) => (a(), i("div", {
                  key: F,
                  class: "issue-detail"
                }, m(N), 1))), 128)),
                E.details.length > 3 && !v[M] ? (a(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (N) => v[M] = !0
                }, " +" + m(E.details.length - 3) + " more ", 9, c3)) : y("", !0)
              ])) : y("", !0),
              s("div", u3, [
                E.type === "uncommitted_workflows" ? (a(), i(W, { key: 0 }, [
                  x(" Commit your workflow changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : E.type === "uncommitted_git_changes" ? (a(), i(W, { key: 1 }, [
                  x(" Commit your changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : E.type === "unresolved_issues" ? (a(), i(W, { key: 2 }, [
                  x(" Resolve all workflow issues before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          p.value ? (a(), i("div", d3, [
            w.value ? (a(), i("div", m3, [
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
            d.value ? (a(), i("div", f3, m(d.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        p.value ? (a(), i(W, { key: 0 }, [
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
        ], 64)) : (a(), L(Ue, {
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
}), p3 = /* @__PURE__ */ Ie(v3, [["__scopeId", "data-v-a8990107"]]), g3 = { class: "repro-warning" }, h3 = { class: "repro-warning-content" }, y3 = {
  key: 0,
  class: "warning-group"
}, w3 = { class: "warning-list" }, _3 = { key: 0 }, k3 = {
  key: 1,
  class: "warning-group"
}, b3 = { class: "warning-list" }, $3 = { key: 0 }, C3 = /* @__PURE__ */ xe({
  __name: "ReproducibilityWarningBanner",
  props: {
    warnings: {},
    message: { default: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly. Review the missing details, or continue anyway." },
    maxItemsPerGroup: { default: 2 }
  },
  emits: ["review"],
  setup(e) {
    const t = e, o = R(() => t.warnings.models_without_sources || []), n = R(() => t.warnings.nodes_without_provenance || []), l = R(() => o.value.length), r = R(() => n.value.length), c = R(() => l.value + r.value), u = R(
      () => o.value.slice(0, t.maxItemsPerGroup)
    ), d = R(
      () => n.value.slice(0, t.maxItemsPerGroup)
    ), v = R(
      () => Math.max(0, l.value - u.value.length)
    ), f = R(
      () => Math.max(0, r.value - d.value.length)
    );
    return (p, w) => (a(), i("div", g3, [
      w[3] || (w[3] = s("span", { class: "repro-warning-icon" }, "!", -1)),
      s("div", h3, [
        s("strong", null, m(c.value) + " reproducibility warning" + m(c.value !== 1 ? "s" : ""), 1),
        s("p", null, m(e.message), 1),
        l.value ? (a(), i("div", y3, [
          w[1] || (w[1] = s("div", { class: "warning-group-label" }, " Models ", -1)),
          s("ul", w3, [
            (a(!0), i(W, null, ye(u.value, (g) => (a(), i("li", {
              key: g.hash || g.filename
            }, m(g.filename), 1))), 128)),
            v.value ? (a(), i("li", _3, "+" + m(v.value) + " more model" + m(v.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        r.value ? (a(), i("div", k3, [
          w[2] || (w[2] = s("div", { class: "warning-group-label" }, " Nodes ", -1)),
          s("ul", b3, [
            (a(!0), i(W, null, ye(d.value, (g) => (a(), i("li", {
              key: g.name
            }, m(g.name) + " (" + m(g.criticality) + ") ", 1))), 128)),
            f.value ? (a(), i("li", $3, "+" + m(f.value) + " more node" + m(f.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        s("button", {
          class: "review-issues-btn",
          onClick: w[0] || (w[0] = (g) => p.$emit("review"))
        }, " Review Issues ")
      ])
    ]));
  }
}), al = /* @__PURE__ */ Ie(C3, [["__scopeId", "data-v-11be310d"]]), x3 = { class: "export-card" }, S3 = { class: "export-path-row" }, I3 = {
  key: 1,
  class: "export-warning"
}, E3 = { class: "export-footer-actions" }, T3 = /* @__PURE__ */ xe({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  emits: ["close"],
  setup(e) {
    const t = e, { validateExport: o, exportEnvWithForce: n, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = ct(), c = k(""), u = k(!1), d = k(!1), v = k(!1), f = k(null), p = k(!1), w = k(null), g = k(!1), _ = k(!1), b = R(() => {
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
        const B = b.value ? await r(b.value, c.value || void 0) : await n(c.value || void 0);
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
    }), (B, H) => (a(), i(W, null, [
      $(Ft, null, ss({
        content: h(() => [
          V.value ? (a(), L(al, {
            key: 0,
            class: "export-readiness-warning",
            warnings: E.value,
            message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
            onReview: H[1] || (H[1] = (we) => _.value = !0)
          }, null, 8, ["warnings"])) : y("", !0),
          $(Tt, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              s("div", x3, [
                H[8] || (H[8] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", S3, [
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
          f.value ? (a(), L(Tt, {
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
                        $(jx, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (a(), L(kt, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (a(), i("div", I3, [...H[9] || (H[9] = [
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
          s("div", E3, [
            e.embedded ? (a(), L(Re, {
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
      g.value && w.value ? (a(), L(p3, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: H[6] || (H[6] = (we) => g.value = !1),
        onCommitted: ue
      }, null, 8, ["issues"])) : y("", !0),
      _.value && w.value ? (a(), L(El, {
        key: 1,
        warnings: w.value.warnings,
        onClose: H[7] || (H[7] = (we) => _.value = !1),
        onRevalidate: ie
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), M3 = /* @__PURE__ */ Ie(T3, [["__scopeId", "data-v-6cf814a2"]]), P3 = { class: "file-input-wrapper" }, R3 = ["accept", "multiple", "disabled"], L3 = /* @__PURE__ */ xe({
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
    }), (u, d) => (a(), i("div", P3, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, R3),
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
}), D3 = /* @__PURE__ */ Ie(L3, [["__scopeId", "data-v-cd192091"]]), N3 = {
  key: 0,
  class: "drop-zone-empty"
}, U3 = { class: "drop-zone-text" }, O3 = { class: "drop-zone-primary" }, A3 = { class: "drop-zone-secondary" }, z3 = { class: "drop-zone-actions" }, F3 = {
  key: 1,
  class: "drop-zone-file"
}, V3 = { class: "file-info" }, B3 = { class: "file-details" }, W3 = { class: "file-name" }, G3 = { class: "file-size" }, j3 = /* @__PURE__ */ xe({
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
    const o = t, n = k(!1), l = k(null), r = k(0), c = R(() => l.value !== null), u = R(() => {
      var S;
      return ((S = l.value) == null ? void 0 : S.name) || "";
    }), d = R(() => {
      if (!l.value) return "";
      const S = l.value.size;
      return S < 1024 ? `${S} B` : S < 1024 * 1024 ? `${(S / 1024).toFixed(1)} KB` : S < 1024 * 1024 * 1024 ? `${(S / (1024 * 1024)).toFixed(1)} MB` : `${(S / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(S) {
      var C;
      S.stopPropagation(), r.value++, (C = S.dataTransfer) != null && C.types.includes("Files") && (n.value = !0);
    }
    function f(S) {
      S.stopPropagation(), S.dataTransfer && (S.dataTransfer.dropEffect = "copy");
    }
    function p(S) {
      S.stopPropagation(), r.value--, r.value === 0 && (n.value = !1);
    }
    function w(S) {
      var I;
      S.stopPropagation(), r.value = 0, n.value = !1;
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
    return (S, C) => (a(), i("div", {
      class: Be(["file-drop-zone", { "drop-active": n.value, "has-file": c.value }]),
      onDragenter: vt(v, ["prevent"]),
      onDragover: vt(f, ["prevent"]),
      onDragleave: vt(p, ["prevent"]),
      onDrop: vt(w, ["prevent"])
    }, [
      c.value ? (a(), i("div", F3, [
        s("div", V3, [
          C[1] || (C[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", B3, [
            s("div", W3, m(u.value), 1),
            s("div", G3, m(d.value), 1)
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
      ])) : (a(), i("div", N3, [
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
        s("div", U3, [
          s("p", O3, m(e.primaryText), 1),
          s("p", A3, m(e.secondaryText), 1)
        ]),
        s("div", z3, [
          $(D3, {
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
}), H3 = /* @__PURE__ */ Ie(j3, [["__scopeId", "data-v-0f79cb86"]]), q3 = { class: "commit-hash" }, K3 = /* @__PURE__ */ xe({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, o = R(() => t.hash.slice(0, t.length));
    return (n, l) => (a(), i("span", q3, m(o.value), 1));
  }
}), bc = /* @__PURE__ */ Ie(K3, [["__scopeId", "data-v-7c333cc6"]]), J3 = { class: "import-preview" }, Q3 = { class: "preview-header" }, Y3 = {
  key: 0,
  class: "source-env"
}, X3 = { class: "preview-content" }, Z3 = { class: "preview-section" }, eS = { class: "section-header" }, tS = { class: "section-info" }, sS = { class: "section-count" }, oS = {
  key: 0,
  class: "item-list"
}, nS = { class: "item-name" }, aS = {
  key: 0,
  class: "item-more"
}, lS = { class: "preview-section" }, iS = { class: "section-header" }, rS = { class: "section-info" }, cS = { class: "section-count" }, uS = {
  key: 0,
  class: "item-list"
}, dS = { class: "item-details" }, mS = { class: "item-name" }, fS = { class: "item-meta" }, vS = {
  key: 0,
  class: "item-more"
}, pS = { class: "preview-section" }, gS = { class: "section-header" }, hS = { class: "section-info" }, yS = { class: "section-count" }, wS = {
  key: 0,
  class: "item-list"
}, _S = { class: "item-name" }, kS = {
  key: 0,
  class: "item-more"
}, bS = {
  key: 0,
  class: "preview-section"
}, $S = { class: "git-info" }, CS = /* @__PURE__ */ xe({
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
    const t = e, o = R(() => t.workflows.length), n = R(() => t.models.length), l = R(() => t.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (a(), i("div", J3, [
      s("div", Q3, [
        $(cs, null, {
          default: h(() => [...u[0] || (u[0] = [
            x("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), i("span", Y3, [
          u[1] || (u[1] = x(" From: ", -1)),
          $(nl, null, {
            default: h(() => [
              x(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      s("div", X3, [
        s("div", Z3, [
          s("div", eS, [
            u[3] || (u[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", tS, [
              u[2] || (u[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", sS, m(o.value) + " file" + m(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), i("div", oS, [
            (a(!0), i(W, null, ye(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", nS, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), i("div", aS, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", lS, [
          s("div", iS, [
            u[6] || (u[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", rS, [
              u[5] || (u[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", cS, m(n.value) + " file" + m(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), i("div", uS, [
            (a(!0), i(W, null, ye(e.models.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", dS, [
                s("span", mS, m(d.filename), 1),
                s("span", fS, m(r(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), i("div", vS, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", pS, [
          s("div", gS, [
            u[9] || (u[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", hS, [
              u[8] || (u[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", yS, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), i("div", wS, [
            (a(!0), i(W, null, ye(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", _S, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), i("div", kS, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), i("div", bS, [
          u[11] || (u[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", $S, [
            e.gitBranch ? (a(), L(kt, {
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
            e.gitCommit ? (a(), L(kt, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                $(bc, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), xS = /* @__PURE__ */ Ie(CS, [["__scopeId", "data-v-182fe113"]]), SS = { class: "import-config" }, IS = { class: "config-container" }, ES = { class: "config-field" }, TS = { class: "input-wrapper" }, MS = ["value"], PS = {
  key: 0,
  class: "validating-indicator"
}, RS = {
  key: 1,
  class: "valid-indicator"
}, LS = {
  key: 0,
  class: "field-error"
}, DS = { class: "config-field" }, NS = { class: "strategy-options" }, US = ["value", "checked", "onChange"], OS = { class: "strategy-content" }, AS = { class: "strategy-label" }, zS = { class: "strategy-description" }, FS = { class: "config-field switch-field" }, VS = { class: "switch-label" }, BS = ["checked"], WS = { class: "advanced-section" }, GS = { class: "advanced-content" }, jS = { class: "config-field" }, HS = ["value"], qS = ["value"], KS = /* @__PURE__ */ xe({
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
    const o = e, n = t, l = k(!1), r = k(!1);
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
      n("update:name", p), r.value = !1, u && clearTimeout(u), p.length > 0 ? (l.value = !0, u = setTimeout(() => {
        n("validate-name", p);
      }, 400)) : l.value = !1;
    }
    function v() {
      o.name.length > 0 && n("validate-name", o.name);
    }
    return (f, p) => (a(), i("div", SS, [
      $(cs, null, {
        default: h(() => [...p[2] || (p[2] = [
          x("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", IS, [
        s("div", ES, [
          $(Hn, { required: "" }, {
            default: h(() => [...p[3] || (p[3] = [
              x("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", TS, [
            s("input", {
              type: "text",
              class: Be(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, MS),
            l.value ? (a(), i("span", PS, "...")) : r.value ? (a(), i("span", RS, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), i("div", LS, m(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", DS, [
          $(Hn, null, {
            default: h(() => [...p[5] || (p[5] = [
              x("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", NS, [
            (a(), i(W, null, ye(c, (w) => s("label", {
              key: w.value,
              class: Be(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              s("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (g) => n("update:modelStrategy", w.value)
              }, null, 40, US),
              s("div", OS, [
                s("span", AS, m(w.label), 1),
                s("span", zS, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", FS, [
          s("label", VS, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, BS),
            p[6] || (p[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", WS, [
          p[8] || (p[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", GS, [
            s("div", jS, [
              $(Hn, null, {
                default: h(() => [...p[7] || (p[7] = [
                  x("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              s("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: p[1] || (p[1] = (w) => n("update:torchBackend", w.target.value))
              }, [
                (a(!0), i(W, null, ye(st(Rl), (w) => (a(), i("option", {
                  key: w,
                  value: w
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, qS))), 128))
              ], 40, HS)
            ])
          ])
        ])
      ])
    ]));
  }
}), JS = /* @__PURE__ */ Ie(KS, [["__scopeId", "data-v-89ea06a1"]]), QS = { class: "import-flow" }, YS = {
  key: 0,
  class: "import-empty"
}, XS = { class: "git-import-section" }, ZS = { class: "git-url-input-row" }, e5 = ["disabled"], t5 = {
  key: 0,
  class: "git-error"
}, s5 = {
  key: 1,
  class: "import-configure"
}, o5 = { class: "selected-file-bar" }, n5 = {
  key: 0,
  class: "file-bar-content"
}, a5 = { class: "file-bar-info" }, l5 = { class: "file-bar-name" }, i5 = { class: "file-bar-size" }, r5 = {
  key: 1,
  class: "file-bar-content"
}, c5 = { class: "file-bar-info" }, u5 = { class: "file-bar-name" }, d5 = {
  key: 0,
  class: "preview-loading"
}, m5 = { class: "import-actions" }, f5 = {
  key: 2,
  class: "import-progress"
}, v5 = { class: "creating-intro" }, p5 = {
  key: 0,
  class: "progress-warning"
}, g5 = {
  key: 1,
  class: "import-error"
}, h5 = { class: "error-message" }, y5 = {
  key: 3,
  class: "import-complete"
}, w5 = { class: "complete-message" }, _5 = { class: "complete-title" }, k5 = { class: "complete-details" }, b5 = { class: "complete-actions" }, $5 = /* @__PURE__ */ xe({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: o }) {
    var Me, Se, ze, Ne;
    const n = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: v, getImportProgress: f } = ct();
    let p = null;
    const w = k(null), g = k(n.resumeImport ?? !1), _ = k(!1), b = k(!1), S = k(""), C = k(!1), I = k(null), E = k(""), M = k(null), N = k(!1), F = k(null), V = k(null), D = k({
      name: ((Me = n.initialProgress) == null ? void 0 : Me.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), q = k(null), ue = k({
      message: ((Se = n.initialProgress) == null ? void 0 : Se.message) ?? "Preparing import...",
      phase: ((ze = n.initialProgress) == null ? void 0 : ze.phase) ?? "",
      progress: ((Ne = n.initialProgress) == null ? void 0 : Ne.progress) ?? 0,
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
      return a(), i("div", QS, [
        !w.value && !M.value && !g.value ? (a(), i("div", YS, [
          $(H3, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: oe
          }),
          Ae[7] || (Ae[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", XS, [
            Ae[5] || (Ae[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", ZS, [
              Rt(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Ae[0] || (Ae[0] = (ve) => E.value = ve),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: gs(we, ["enter"]),
                disabled: N.value
              }, null, 40, e5), [
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
            F.value ? (a(), i("div", t5, m(F.value), 1)) : y("", !0),
            Ae[6] || (Ae[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || M.value) && !g.value && !_.value ? (a(), i("div", s5, [
          s("div", o5, [
            w.value ? (a(), i("div", n5, [
              Ae[8] || (Ae[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", a5, [
                s("div", l5, m(w.value.name), 1),
                s("div", i5, m(te(w.value.size)), 1)
              ])
            ])) : M.value ? (a(), i("div", r5, [
              Ae[10] || (Ae[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", c5, [
                s("div", u5, m(se(M.value)), 1),
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
          C.value ? (a(), i("div", d5, [...Ae[12] || (Ae[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : I.value ? (a(), L(ns, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [I.value]
          }, null, 8, ["details"])) : V.value ? (a(), L(xS, {
            key: 2,
            "source-environment": Y.value.sourceEnvironment,
            workflows: Y.value.workflows,
            models: Y.value.models,
            nodes: Y.value.nodes,
            "git-branch": Y.value.gitBranch,
            "git-commit": Y.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          V.value ? (a(), L(JS, {
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
          D.value.modelStrategy === "skip" && ((ge = V.value) != null && ge.models_needing_download) ? (a(), L(ns, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${V.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          s("div", m5, [
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
        ])) : g.value ? (a(), i("div", f5, [
          s("p", v5, [
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
          ue.value.error ? y("", !0) : (a(), i("p", p5, " This may take several minutes. Please wait... ")),
          ue.value.error ? (a(), i("div", g5, [
            s("p", h5, m(ue.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), i("div", y5, [
          s("div", {
            class: Be(["complete-icon", b.value ? "success" : "error"])
          }, m(b.value ? "✓" : "✕"), 3),
          s("div", w5, [
            s("div", _5, m(b.value ? "Import Successful" : "Import Failed"), 1),
            s("div", k5, m(S.value), 1)
          ]),
          s("div", b5, [
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
}), $c = /* @__PURE__ */ Ie($5, [["__scopeId", "data-v-72cbc04e"]]), C5 = /* @__PURE__ */ xe({
  __name: "ImportSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["import-complete-switch"],
  setup(e, { emit: t }) {
    const o = t, n = k(!1);
    function l(r, c) {
      c && o("import-complete-switch", r);
    }
    return (r, c) => (a(), i(W, null, [
      $(Ft, null, ss({
        content: h(() => [
          $($c, { onImportComplete: l })
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            $(Vt, {
              title: "IMPORT ENVIRONMENT",
              "show-info": !0,
              onInfoClick: c[0] || (c[0] = (u) => n.value = !0)
            })
          ]),
          key: "0"
        }
      ]), 1024),
      $(fs, {
        show: n.value,
        title: "How Import Works",
        onClose: c[1] || (c[1] = (u) => n.value = !1)
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
}), x5 = /* @__PURE__ */ Ie(C5, [["__scopeId", "data-v-41b1f298"]]), S5 = { class: "base-tabs" }, I5 = ["disabled", "onClick"], E5 = {
  key: 0,
  class: "base-tabs__badge"
}, T5 = /* @__PURE__ */ xe({
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
    return (r, c) => (a(), i("div", S5, [
      (a(!0), i(W, null, ye(e.tabs, (u) => (a(), i("button", {
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
        u.badge ? (a(), i("span", E5, m(u.badge), 1)) : y("", !0)
      ], 10, I5))), 128))
    ]));
  }
}), Ll = /* @__PURE__ */ Ie(T5, [["__scopeId", "data-v-ad5e6cad"]]), M5 = { class: "commit-list" }, P5 = /* @__PURE__ */ xe({
  __name: "CommitList",
  setup(e) {
    return (t, o) => (a(), i("div", M5, [
      at(t.$slots, "default", {}, void 0)
    ]));
  }
}), Cc = /* @__PURE__ */ Ie(P5, [["__scopeId", "data-v-8c5ee761"]]), R5 = { class: "commit-message" }, L5 = { class: "commit-date" }, D5 = /* @__PURE__ */ xe({
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
      class: Be(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      $(bc, { hash: e.hash }, null, 8, ["hash"]),
      s("span", R5, m(e.message), 1),
      s("span", L5, m(e.relativeDate), 1),
      r.$slots.actions ? (a(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = vt(() => {
        }, ["stop"]))
      }, [
        at(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), xc = /* @__PURE__ */ Ie(D5, [["__scopeId", "data-v-dd7c621b"]]), N5 = /* @__PURE__ */ xe({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const t = e, o = R(() => `HISTORY (${t.currentRef || "detached"})`);
    return (n, l) => (a(), L(Ft, null, ss({
      content: h(() => [
        e.commits.length === 0 ? (a(), L(_s, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), L(Cc, { key: 1 }, {
          default: h(() => [
            (a(!0), i(W, null, ye(e.commits, (r) => (a(), L(xc, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => n.$emit("select", r)
            }, {
              actions: h(() => [
                $(Re, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (c) => n.$emit("checkout", r),
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
}), U5 = /* @__PURE__ */ Ie(N5, [["__scopeId", "data-v-fa4bf3a1"]]), O5 = { class: "branch-create-form" }, A5 = { class: "form-actions" }, z5 = /* @__PURE__ */ xe({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: t }) {
    const o = t, n = k(""), l = R(() => {
      const u = n.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function r() {
      l.value && (o("create", n.value.trim()), n.value = "");
    }
    function c() {
      n.value = "", o("cancel");
    }
    return (u, d) => (a(), i("div", O5, [
      $(xo, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => n.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      s("div", A5, [
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
}), F5 = /* @__PURE__ */ Ie(z5, [["__scopeId", "data-v-7c500394"]]), V5 = { class: "branch-list-item__indicator" }, B5 = { class: "branch-list-item__name" }, W5 = {
  key: 0,
  class: "branch-list-item__actions"
}, G5 = {
  key: 0,
  class: "branch-list-item__current-label"
}, j5 = /* @__PURE__ */ xe({
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
      class: Be(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && t.$emit("click"))
    }, [
      s("span", V5, m(e.isCurrent ? "●" : "○"), 1),
      s("span", B5, m(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (a(), i("div", W5, [
        at(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), i("span", G5, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), H5 = /* @__PURE__ */ Ie(j5, [["__scopeId", "data-v-c6581a24"]]), q5 = { class: "header-info" }, K5 = { class: "branch-name" }, J5 = {
  key: 0,
  class: "current-badge"
}, Q5 = { class: "branch-meta" }, Y5 = { key: 0 }, X5 = {
  key: 0,
  class: "meta-note"
}, Z5 = {
  key: 0,
  class: "loading"
}, e8 = {
  key: 1,
  class: "empty-state"
}, t8 = /* @__PURE__ */ xe({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const t = e, { getBranchHistory: o } = ct(), n = k([]), l = k(!1), r = k(!0);
    return lt(async () => {
      try {
        const c = await o(t.branchName, 50);
        n.value = c.commits, l.value = c.has_more;
      } finally {
        r.value = !1;
      }
    }), (c, u) => (a(), L($t, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (d) => c.$emit("close"))
    }, {
      header: h(() => [
        s("div", q5, [
          u[4] || (u[4] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", K5, m(e.branchName), 1),
          e.isCurrent ? (a(), i("span", J5, "CURRENT")) : y("", !0)
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
        s("div", Q5, [
          r.value ? (a(), i("span", Y5, "Loading...")) : (a(), i(W, { key: 1 }, [
            s("span", null, m(n.value.length) + " commits", 1),
            l.value ? (a(), i("span", X5, "(showing first " + m(n.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (a(), i("div", Z5, "Loading commit history...")) : n.value.length === 0 ? (a(), i("div", e8, " No commits found on this branch ")) : (a(), L(Cc, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (a(!0), i(W, null, ye(n.value, (d) => (a(), L(xc, {
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
        e.isCurrent ? y("", !0) : (a(), L(Re, {
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
        e.isCurrent ? y("", !0) : (a(), L(Ue, {
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
}), s8 = /* @__PURE__ */ Ie(t8, [["__scopeId", "data-v-2e5437cc"]]), o8 = {
  key: 0,
  class: "branch-toolbar"
}, n8 = {
  key: 3,
  class: "branch-list"
}, a8 = /* @__PURE__ */ xe({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {},
    embedded: { type: Boolean }
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: t }) {
    const o = t, n = k(!1), l = k(null);
    function r(f) {
      o("create", f), c();
    }
    function c() {
      n.value = !1;
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
    return (f, p) => (a(), L(Ft, null, ss({
      content: h(() => [
        e.embedded && !n.value ? (a(), i("div", o8, [
          $(Re, {
            variant: "primary",
            size: "sm",
            onClick: p[1] || (p[1] = (w) => n.value = !0)
          }, {
            default: h(() => [...p[4] || (p[4] = [
              x(" + Create Branch ", -1)
            ])]),
            _: 1
          })
        ])) : y("", !0),
        n.value ? (a(), L(F5, {
          key: 1,
          onCreate: r,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (a(), L(_s, {
          key: 2,
          icon: "○",
          message: "No branches found"
        })) : (a(), i("div", n8, [
          (a(!0), i(W, null, ye(e.branches, (w) => (a(), L(H5, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (g) => u(w)
          }, {
            actions: h(() => [
              w.is_current ? y("", !0) : (a(), L(Re, {
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
        l.value ? (a(), L(s8, {
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
              n.value ? y("", !0) : (a(), L(Re, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: p[0] || (p[0] = (w) => n.value = !0)
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
}), l8 = /* @__PURE__ */ Ie(a8, [["__scopeId", "data-v-98858eb2"]]);
function Sc(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const i8 = { class: "remote-url-display" }, r8 = ["title"], c8 = ["title"], u8 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, d8 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, m8 = /* @__PURE__ */ xe({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const t = e, o = k(!1), n = R(() => {
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
    return (r, c) => (a(), i("div", i8, [
      s("span", {
        class: "url-text",
        title: e.url
      }, m(n.value), 9, r8),
      s("button", {
        class: Be(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), i("svg", d8, [...c[1] || (c[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), i("svg", u8, [...c[0] || (c[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, c8)
    ]));
  }
}), f8 = /* @__PURE__ */ Ie(m8, [["__scopeId", "data-v-7768a58d"]]), v8 = { class: "remote-title" }, p8 = {
  key: 0,
  class: "default-badge"
}, g8 = {
  key: 1,
  class: "sync-badge"
}, h8 = {
  key: 0,
  class: "ahead"
}, y8 = {
  key: 1,
  class: "behind"
}, w8 = {
  key: 1,
  class: "synced"
}, _8 = ["href"], k8 = {
  key: 1,
  class: "remote-url-text"
}, b8 = /* @__PURE__ */ xe({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const t = e, o = R(() => t.fetchingRemote === t.remote.name), n = R(() => t.remote.is_default), l = R(() => t.syncStatus && t.syncStatus.behind > 0), r = R(() => t.syncStatus && t.syncStatus.ahead > 0), c = R(() => t.remote.push_url !== t.remote.fetch_url), u = R(() => {
      const v = t.remote.fetch_url, f = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return f ? `https://${f[1]}/${f[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = R(() => t.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, f) => (a(), L(Gt, {
      status: n.value ? "synced" : void 0
    }, ss({
      icon: h(() => [
        x(m(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        s("div", v8, [
          s("span", null, m(e.remote.name), 1),
          n.value ? (a(), i("span", p8, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), i("span", g8, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), i(W, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), i("span", h8, "↑" + m(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), i("span", y8, "↓" + m(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), i("span", w8, "✓ synced"))
          ])) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        u.value ? (a(), i("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: f[0] || (f[0] = vt(() => {
          }, ["stop"]))
        }, m(d.value), 9, _8)) : (a(), i("span", k8, m(d.value), 1))
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
        n.value ? y("", !0) : (a(), L(Re, {
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
          e.remote.push_url !== e.remote.fetch_url ? (a(), L(kt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              $(f8, {
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
}), $8 = /* @__PURE__ */ Ie(b8, [["__scopeId", "data-v-8310f3a8"]]), C8 = ["for"], x8 = {
  key: 0,
  class: "base-form-field-required"
}, S8 = { class: "base-form-field-input" }, I8 = {
  key: 1,
  class: "base-form-field-error"
}, E8 = {
  key: 2,
  class: "base-form-field-hint"
}, T8 = /* @__PURE__ */ xe({
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
    return (n, l) => (a(), i("div", {
      class: Be(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        x(m(e.label) + " ", 1),
        e.required ? (a(), i("span", x8, "*")) : y("", !0)
      ], 8, C8)) : y("", !0),
      s("div", S8, [
        at(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), i("span", I8, m(e.error), 1)) : e.hint ? (a(), i("span", E8, m(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), Ot = /* @__PURE__ */ Ie(T8, [["__scopeId", "data-v-9a1cf296"]]), M8 = { class: "remote-form" }, P8 = { class: "form-header" }, R8 = { class: "form-body" }, L8 = {
  key: 0,
  class: "form-error"
}, D8 = { class: "form-actions" }, N8 = /* @__PURE__ */ xe({
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
          n("submit", l.value);
        } catch (v) {
          c.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          r.value = !1;
        }
      }
    }
    return (v, f) => (a(), i("div", M8, [
      s("div", P8, [
        $(cs, null, {
          default: h(() => [
            x(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", R8, [
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
        c.value ? (a(), i("div", L8, m(c.value), 1)) : y("", !0)
      ]),
      s("div", D8, [
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
}), U8 = /* @__PURE__ */ Ie(N8, [["__scopeId", "data-v-56021b18"]]), O8 = { class: "conflict-summary-box" }, A8 = { class: "summary-header" }, z8 = { class: "summary-text" }, F8 = { key: 0 }, V8 = {
  key: 1,
  class: "all-resolved"
}, B8 = { class: "summary-progress" }, W8 = { class: "progress-bar" }, G8 = { class: "progress-text" }, j8 = /* @__PURE__ */ xe({
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
    return (n, l) => (a(), i("div", O8, [
      s("div", A8, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", z8, [
          s("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), i("p", F8, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (a(), i("p", V8, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      s("div", B8, [
        s("div", W8, [
          s("div", {
            class: "progress-fill",
            style: Nt({ width: o.value + "%" })
          }, null, 4)
        ]),
        s("span", G8, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), H8 = /* @__PURE__ */ Ie(j8, [["__scopeId", "data-v-4e9e6cc9"]]), q8 = { class: "modal-header" }, K8 = { class: "modal-title" }, J8 = { class: "modal-body" }, Q8 = {
  key: 0,
  class: "error-box"
}, Y8 = {
  key: 0,
  class: "error-hint"
}, X8 = {
  key: 1,
  class: "loading-state"
}, Z8 = { class: "commit-summary" }, e4 = {
  key: 0,
  class: "commits-section"
}, t4 = { class: "commit-list" }, s4 = { class: "commit-hash" }, o4 = { class: "commit-message" }, n4 = { class: "commit-date" }, a4 = {
  key: 1,
  class: "changes-section"
}, l4 = {
  key: 0,
  class: "change-group",
  open: ""
}, i4 = { class: "change-count" }, r4 = { class: "change-list" }, c4 = {
  key: 0,
  class: "conflict-badge"
}, u4 = {
  key: 1,
  class: "change-group"
}, d4 = { class: "change-count" }, m4 = { class: "change-list" }, f4 = {
  key: 2,
  class: "change-group"
}, v4 = { class: "change-count" }, p4 = { class: "change-list" }, g4 = {
  key: 3,
  class: "strategy-section"
}, h4 = { class: "radio-group" }, y4 = { class: "radio-option" }, w4 = { class: "radio-option" }, _4 = { class: "radio-option" }, k4 = {
  key: 4,
  class: "up-to-date"
}, b4 = { class: "modal-actions" }, Ri = "comfygit.pullModelStrategy", $4 = /* @__PURE__ */ xe({
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
    const o = e, n = t, l = k(localStorage.getItem(Ri) || "skip");
    gt(l, (S) => {
      localStorage.setItem(Ri, S);
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
    }), v = R(() => o.preview && Sc(o.preview) ? o.preview : null), f = R(() => {
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
      n("pull", { modelStrategy: l.value, force: S, resolutions: C });
    }
    return (S, C) => {
      var I, E;
      return a(), L(Zt, { to: "body" }, [
        e.show ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (M) => S.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = vt(() => {
            }, ["stop"]))
          }, [
            s("div", q8, [
              s("h3", K8, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (M) => S.$emit("close"))
              }, "✕")
            ]),
            s("div", J8, [
              e.error ? (a(), i("div", Q8, [
                C[13] || (C[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  C[12] || (C[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, m(e.error), 1),
                  r.value ? (a(), i("p", Y8, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), i("div", X8, [...C[14] || (C[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                x(" Loading preview... ", -1)
              ])])) : (I = e.preview) != null && I.has_uncommitted_changes ? (a(), i(W, { key: 2 }, [
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
              ], 64)) : e.preview ? (a(), i(W, { key: 3 }, [
                s("div", Z8, [
                  C[17] || (C[17] = s("span", { class: "icon" }, "📥", -1)),
                  x(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (a(), i("div", e4, [
                  C[18] || (C[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", t4, [
                    (a(!0), i(W, null, ye(e.preview.commits, (M) => (a(), i("div", {
                      key: M.hash,
                      class: "commit-item"
                    }, [
                      s("span", s4, m(M.short_hash || M.hash.slice(0, 7)), 1),
                      s("span", o4, m(M.message), 1),
                      s("span", n4, m(M.date_relative || M.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (a(), i("div", a4, [
                  C[22] || (C[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (a(), i("details", l4, [
                    s("summary", null, [
                      C[19] || (C[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", i4, m(c.value) + " changes", 1)
                    ]),
                    s("div", r4, [
                      (a(!0), i(W, null, ye(e.preview.changes.workflows.added, (M) => (a(), i("div", {
                        key: "a-" + M,
                        class: "change-item add"
                      }, " + " + m(M), 1))), 128)),
                      (a(!0), i(W, null, ye(e.preview.changes.workflows.modified, (M) => (a(), i("div", {
                        key: "m-" + M,
                        class: "change-item modify"
                      }, [
                        x(" ~ " + m(M) + " ", 1),
                        _(M) ? (a(), i("span", c4, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), i(W, null, ye(e.preview.changes.workflows.deleted, (M) => (a(), i("div", {
                        key: "d-" + M,
                        class: "change-item delete"
                      }, " - " + m(M), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (a(), i("details", u4, [
                    s("summary", null, [
                      C[20] || (C[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", d4, m(u.value) + " to install", 1)
                    ]),
                    s("div", m4, [
                      (a(!0), i(W, null, ye(e.preview.changes.nodes.to_install, (M) => (a(), i("div", {
                        key: M,
                        class: "change-item add"
                      }, " + " + m(M), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), i("details", f4, [
                    s("summary", null, [
                      C[21] || (C[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", v4, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", p4, [
                      (a(!0), i(W, null, ye(e.preview.changes.models.referenced, (M) => (a(), i("div", {
                        key: M,
                        class: "change-item"
                      }, m(M), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                v.value ? (a(), L(H8, {
                  key: 2,
                  "conflict-count": f.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), i("div", g4, [
                  C[27] || (C[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", h4, [
                    s("label", y4, [
                      Rt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (M) => l.value = M),
                        value: "all"
                      }, null, 512), [
                        [jn, l.value]
                      ]),
                      C[23] || (C[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", w4, [
                      Rt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (M) => l.value = M),
                        value: "required"
                      }, null, 512), [
                        [jn, l.value]
                      ]),
                      C[24] || (C[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", _4, [
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
                e.preview.commits_behind === 0 ? (a(), i("div", k4, [
                  C[29] || (C[29] = s("span", { class: "icon" }, "✓", -1)),
                  x(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            s("div", b4, [
              $(Re, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (M) => S.$emit("close"))
              }, {
                default: h(() => [...C[30] || (C[30] = [
                  x(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), i(W, { key: 0 }, [
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
              ], 64)) : (E = e.preview) != null && E.has_uncommitted_changes ? (a(), L(Re, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: C[7] || (C[7] = (M) => b(!0))
              }, {
                default: h(() => [...C[33] || (C[33] = [
                  x(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), i(W, { key: 2 }, [
                v.value && !w.value ? (a(), L(Re, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (M) => n("openConflictResolution"))
                }, {
                  default: h(() => [
                    x(" Resolve Conflicts (" + m(p.value) + "/" + m(f.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), L(Re, {
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
}), C4 = /* @__PURE__ */ Ie($4, [["__scopeId", "data-v-1d633bba"]]), x4 = { class: "modal-header" }, S4 = { class: "modal-title" }, I4 = { class: "modal-body" }, E4 = {
  key: 0,
  class: "error-box"
}, T4 = {
  key: 1,
  class: "loading-state"
}, M4 = {
  key: 2,
  class: "warning-box"
}, P4 = {
  key: 1,
  class: "commits-section"
}, R4 = { class: "commit-list" }, L4 = { class: "commit-hash" }, D4 = { class: "commit-message" }, N4 = { class: "commit-date" }, U4 = { class: "force-option" }, O4 = { class: "checkbox-option" }, A4 = { class: "commit-summary" }, z4 = { key: 0 }, F4 = { key: 1 }, V4 = {
  key: 0,
  class: "info-box"
}, B4 = {
  key: 2,
  class: "commits-section"
}, W4 = { class: "commit-list" }, G4 = { class: "commit-hash" }, j4 = { class: "commit-message" }, H4 = { class: "commit-date" }, q4 = {
  key: 3,
  class: "up-to-date"
}, K4 = { class: "modal-actions" }, J4 = /* @__PURE__ */ xe({
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
    const o = e, n = t, l = k(!1), r = k(!1), c = R(() => {
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
      n("push", { force: w });
    }
    return (w, g) => {
      var _, b, S, C;
      return a(), i(W, null, [
        (a(), L(Zt, { to: "body" }, [
          e.show ? (a(), i("div", {
            key: 0,
            class: "modal-overlay",
            onClick: g[9] || (g[9] = (I) => w.$emit("close"))
          }, [
            s("div", {
              class: "modal-content",
              onClick: g[8] || (g[8] = vt(() => {
              }, ["stop"]))
            }, [
              s("div", x4, [
                s("h3", S4, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
                s("button", {
                  class: "modal-close",
                  onClick: g[0] || (g[0] = (I) => w.$emit("close"))
                }, "✕")
              ]),
              s("div", I4, [
                e.error ? (a(), i("div", E4, [
                  g[13] || (g[13] = s("span", { class: "error-icon" }, "!", -1)),
                  s("div", null, [
                    g[12] || (g[12] = s("strong", null, "Push failed", -1)),
                    s("p", null, m(e.error), 1)
                  ])
                ])) : y("", !0),
                e.loading ? (a(), i("div", T4, [...g[14] || (g[14] = [
                  s("span", { class: "spinner" }, "⟳", -1),
                  x(" Loading preview... ", -1)
                ])])) : (_ = e.preview) != null && _.has_uncommitted_changes ? (a(), i("div", M4, [...g[15] || (g[15] = [
                  s("span", { class: "warning-icon" }, "!", -1),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "Commit your changes before pushing.")
                  ], -1)
                ])])) : (b = e.preview) != null && b.remote_has_new_commits ? (a(), i(W, { key: 3 }, [
                  g[19] || (g[19] = s("div", { class: "warning-box" }, [
                    s("span", { class: "warning-icon" }, "!"),
                    s("div", null, [
                      s("strong", null, "REMOTE HAS NEW COMMITS"),
                      s("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                    ])
                  ], -1)),
                  f.value ? (a(), L(al, {
                    key: 0,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[1] || (g[1] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (a(), i("div", P4, [
                    g[16] || (g[16] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", R4, [
                      (a(!0), i(W, null, ye(e.preview.commits, (I) => (a(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", L4, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", D4, m(I.message), 1),
                        s("span", N4, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : y("", !0),
                  s("div", U4, [
                    s("label", O4, [
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
                ], 64)) : e.preview ? (a(), i(W, { key: 4 }, [
                  s("div", A4, [
                    g[20] || (g[20] = s("span", { class: "icon" }, "📤", -1)),
                    e.preview.is_first_push ? (a(), i("span", z4, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), i("span", F4, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                  ]),
                  e.preview.is_first_push ? (a(), i("div", V4, [...g[21] || (g[21] = [
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
                  f.value ? (a(), L(al, {
                    key: 1,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[3] || (g[3] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (a(), i("div", B4, [
                    g[22] || (g[22] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", W4, [
                      (a(!0), i(W, null, ye(e.preview.commits, (I) => (a(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", G4, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", j4, m(I.message), 1),
                        s("span", H4, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : (a(), i("div", q4, [
                    g[23] || (g[23] = s("span", { class: "icon" }, "✓", -1)),
                    x(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                  ]))
                ], 64)) : y("", !0)
              ]),
              s("div", K4, [
                $(Re, {
                  variant: "secondary",
                  onClick: g[4] || (g[4] = (I) => w.$emit("close"))
                }, {
                  default: h(() => [...g[24] || (g[24] = [
                    x(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                (S = e.preview) != null && S.remote_has_new_commits ? (a(), i(W, { key: 0 }, [
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
                ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), L(Re, {
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
        r.value && ((C = e.preview) != null && C.warnings) ? (a(), L(El, {
          key: 0,
          warnings: e.preview.warnings,
          onClose: g[10] || (g[10] = (I) => r.value = !1),
          onRevalidate: g[11] || (g[11] = (I) => w.$emit("revalidate"))
        }, null, 8, ["warnings"])) : y("", !0)
      ], 64);
    };
  }
}), Q4 = /* @__PURE__ */ Ie(J4, [["__scopeId", "data-v-7748bf33"]]), Y4 = { class: "resolution-choice-group" }, X4 = ["disabled"], Z4 = ["disabled"], eI = /* @__PURE__ */ xe({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("div", Y4, [
      s("button", {
        class: Be(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, X4),
      s("button", {
        class: Be(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Z4)
    ]));
  }
}), tI = /* @__PURE__ */ Ie(eI, [["__scopeId", "data-v-985715ed"]]), sI = { class: "conflict-header" }, oI = { class: "conflict-info" }, nI = { class: "workflow-name" }, aI = { class: "conflict-description" }, lI = {
  key: 0,
  class: "resolved-badge"
}, iI = { class: "resolved-text" }, rI = { class: "conflict-hashes" }, cI = { class: "hash-item" }, uI = { class: "hash-item" }, dI = { class: "conflict-actions" }, mI = /* @__PURE__ */ xe({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(o.resolution);
    gt(() => o.resolution, (d) => {
      l.value = d;
    }), gt(l, (d) => {
      d && n("resolve", d);
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
      return a(), i("div", {
        class: Be(["conflict-item", { resolved: r.value }])
      }, [
        s("div", sI, [
          v[2] || (v[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", oI, [
            s("code", nI, m(e.conflict.name) + ".json", 1),
            s("div", aI, m(c.value), 1)
          ]),
          r.value ? (a(), i("div", lI, [
            v[1] || (v[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", iI, m(u.value), 1)
          ])) : y("", !0)
        ]),
        s("div", rI, [
          s("span", cI, [
            v[3] || (v[3] = x("Your: ", -1)),
            s("code", null, m(((f = e.conflict.base_hash) == null ? void 0 : f.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", uI, [
            v[4] || (v[4] = x("Theirs: ", -1)),
            s("code", null, m(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", dI, [
          $(tI, {
            modelValue: l.value,
            "onUpdate:modelValue": v[0] || (v[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), fI = /* @__PURE__ */ Ie(mI, [["__scopeId", "data-v-506d3bbf"]]), vI = { class: "resolution-content" }, pI = {
  key: 0,
  class: "error-box"
}, gI = { class: "resolution-header" }, hI = { class: "header-stats" }, yI = { class: "stat" }, wI = { class: "stat-value" }, _I = { class: "stat resolved" }, kI = { class: "stat-value" }, bI = {
  key: 0,
  class: "stat pending"
}, $I = { class: "stat-value" }, CI = { class: "conflicts-list" }, xI = {
  key: 1,
  class: "all-resolved-message"
}, SI = /* @__PURE__ */ xe({
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
    const o = e, n = t, l = R(() => o.resolutions.size), r = R(() => o.workflowConflicts.length - l.value), c = R(() => l.value === o.workflowConflicts.length), u = R(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(w) {
      const g = o.resolutions.get(w);
      return (g == null ? void 0 : g.resolution) ?? null;
    }
    function v(w, g) {
      n("resolve", w, g);
    }
    function f() {
      n("close");
    }
    function p() {
      n("apply");
    }
    return (w, g) => (a(), L($t, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: f
    }, {
      body: h(() => [
        s("div", vI, [
          e.error ? (a(), i("div", pI, [
            g[1] || (g[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              g[0] || (g[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, m(e.error), 1)
            ])
          ])) : y("", !0),
          s("div", gI, [
            s("div", hI, [
              s("div", yI, [
                s("span", wI, m(e.workflowConflicts.length), 1),
                g[2] || (g[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", _I, [
                s("span", kI, m(l.value), 1),
                g[3] || (g[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (a(), i("div", bI, [
                s("span", $I, m(r.value), 1),
                g[4] || (g[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            g[5] || (g[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", CI, [
            (a(!0), i(W, null, ye(e.workflowConflicts, (_) => (a(), L(fI, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (b) => v(_.name, b)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (a(), i("div", xI, [
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
}), II = /* @__PURE__ */ Ie(SI, [["__scopeId", "data-v-c58d150d"]]), EI = { class: "node-conflict-item" }, TI = { class: "node-header" }, MI = { class: "node-name" }, PI = { class: "node-id" }, RI = { class: "version-comparison" }, LI = { class: "version yours" }, DI = { class: "version theirs" }, NI = { class: "chosen-version" }, UI = { class: "chosen" }, OI = { class: "chosen-reason" }, AI = { class: "affected-workflows" }, zI = { class: "wf-source" }, FI = { class: "wf-version" }, VI = /* @__PURE__ */ xe({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, o) => (a(), i("div", EI, [
      s("div", TI, [
        s("code", MI, m(e.conflict.node_name), 1),
        s("span", PI, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      s("div", RI, [
        s("div", LI, [
          o[0] || (o[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, m(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", DI, [
          o[1] || (o[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      s("div", NI, [
        o[3] || (o[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", UI, m(e.conflict.chosen_version), 1),
        s("span", OI, m(e.conflict.chosen_reason), 1)
      ]),
      s("details", AI, [
        s("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (a(!0), i(W, null, ye(e.conflict.affected_workflows, (n) => (a(), i("li", {
            key: n.name
          }, [
            s("code", null, m(n.name), 1),
            s("span", zI, "(" + m(n.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", FI, "needs v" + m(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), BI = /* @__PURE__ */ Ie(VI, [["__scopeId", "data-v-8b626725"]]), WI = { class: "validation-content" }, GI = {
  key: 0,
  class: "compatible-message"
}, jI = { class: "conflicts-list" }, HI = {
  key: 2,
  class: "warnings-section"
}, qI = /* @__PURE__ */ xe({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = R(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (a(), L($t, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => n("cancel"))
    }, {
      body: h(() => [
        s("div", WI, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), i("div", GI, [
            c[5] || (c[5] = s("span", { class: "icon" }, "✓", -1)),
            s("div", null, [
              c[4] || (c[4] = s("strong", null, "All clear!", -1)),
              s("p", null, "Your workflow choices are compatible. Ready to " + m(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (a(), i(W, { key: 1 }, [
            c[6] || (c[6] = s("div", { class: "warning-header" }, [
              s("span", { class: "icon" }, "⚠"),
              s("div", null, [
                s("strong", null, "Node Version Differences"),
                s("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            s("div", jI, [
              (a(!0), i(W, null, ye(e.validation.node_conflicts, (u) => (a(), L(BI, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), i("div", HI, [
            c[8] || (c[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (a(!0), i(W, null, ye(e.validation.warnings, (u, d) => (a(), i("li", { key: d }, m(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        $(Ue, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => n("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = s("div", { class: "footer-spacer" }, null, -1)),
        $(Ue, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => n("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            x(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        $(Ue, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => n("proceed"))
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
}), KI = /* @__PURE__ */ Ie(qI, [["__scopeId", "data-v-fefd26ed"]]), JI = {
  key: 0,
  class: "embedded-toolbar"
}, QI = { class: "embedded-toolbar-search" }, YI = /* @__PURE__ */ xe({
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
        const Ve = await n();
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
    ), K = k(!1), ee = k(null), te = k(!1), Me = k(null), Se = k(null), ze = k(!1), Ne = k(null), be = k(null), Ae = k(/* @__PURE__ */ new Map()), ge = k(null), ve = k(null), T = R(() => Ne.value && Sc(Ne.value) ? Ne.value : null);
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
    return lt(q), (Ve, Oe) => (a(), i(W, null, [
      $(Ft, null, ss({
        content: h(() => [
          S.value ? (a(), L(Ps, {
            key: 0,
            message: "Loading remotes..."
          })) : C.value ? (a(), L(Rs, {
            key: 1,
            message: C.value,
            retry: !0,
            onRetry: q
          }, null, 8, ["message"])) : (a(), i(W, { key: 2 }, [
            e.embedded && !N.value ? (a(), i("div", JI, [
              s("div", QI, [
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
            N.value ? (a(), L(U8, {
              key: 1,
              mode: F.value,
              "remote-name": V.value.name,
              "fetch-url": V.value.fetchUrl,
              "push-url": V.value.pushUrl,
              onSubmit: Y,
              onCancel: me
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            D.value.length && !N.value ? (a(), L(Tt, {
              key: 2,
              title: "REMOTES",
              count: D.value.length
            }, {
              default: h(() => [
                (a(!0), i(W, null, ye(D.value, (Qe) => (a(), L($8, {
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
            !D.value.length && !N.value ? (a(), L(_s, {
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
                N.value ? y("", !0) : (a(), L(Re, {
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
            N.value ? y("", !0) : (a(), L(go, {
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
      $(C4, {
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
      $(Q4, {
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
      de.value && T.value ? (a(), L(II, {
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
      ce.value && ge.value ? (a(), L(KI, {
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
}), XI = /* @__PURE__ */ Ie(YI, [["__scopeId", "data-v-a6651a66"]]), ZI = /* @__PURE__ */ xe({
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
      { id: "remotes", label: "Remotes" },
      { id: "history", label: "History" },
      { id: "branches", label: "Branches" }
    ], r = k(o.initialTab ?? "remotes");
    return gt(() => o.initialTab, (c) => {
      c && (r.value = c);
    }), (c, u) => (a(), L(Ft, null, {
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
        r.value === "history" ? (a(), L(U5, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: u[1] || (u[1] = (d) => n("select", d)),
          onCheckout: u[2] || (u[2] = (d) => n("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (a(), L(l8, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: u[3] || (u[3] = (d) => n("switch", d)),
          onCreate: u[4] || (u[4] = (d) => n("create", d)),
          onDelete: u[5] || (u[5] = (d) => n("delete", d))
        }, null, 8, ["branches", "current"])) : (a(), L(XI, {
          key: 2,
          embedded: "",
          onToast: u[6] || (u[6] = (d, v) => n("toast", d, v))
        }))
      ]),
      _: 1
    }));
  }
}), e6 = { class: "text-viewer-wrapper" }, t6 = ["disabled", "title"], s6 = { class: "text-content" }, o6 = /* @__PURE__ */ xe({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const t = e, o = k(null), n = k("idle");
    async function l() {
      if (t.content)
        try {
          await Ml(t.content), n.value = "copied", setTimeout(() => {
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
    return (u, d) => (a(), i("div", e6, [
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
        }, m(n.value === "copied" ? "Copied!" : "Copy"), 9, t6),
        s("pre", s6, m(e.content), 1)
      ], 544)
    ]));
  }
}), n6 = /* @__PURE__ */ Ie(o6, [["__scopeId", "data-v-85a537ba"]]), a6 = {
  key: 1,
  class: "manifest-viewer-shell"
}, l6 = { class: "manifest-path" }, i6 = /* @__PURE__ */ xe({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: t } = ct(), o = k(!1), n = k(null), l = k(!1), r = k({
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
    return lt(c), (u, d) => (a(), i(W, null, [
      $(Ft, null, ss({
        content: h(() => [
          o.value ? (a(), L(Ps, {
            key: 0,
            message: "Loading manifest..."
          })) : n.value ? (a(), L(Rs, {
            key: 1,
            message: n.value,
            retry: !0,
            onRetry: c
          }, null, 8, ["message"])) : (a(), i(W, { key: 2 }, [
            !r.value.exists || !r.value.content ? (a(), L(_s, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (a(), i("div", a6, [
              $(n6, {
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
          s("div", l6, [
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
}), r6 = /* @__PURE__ */ Ie(i6, [["__scopeId", "data-v-814a8fdd"]]), c6 = { class: "log-viewer-wrapper" }, u6 = ["disabled", "title"], d6 = /* @__PURE__ */ xe({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const t = e, o = k(null), n = k("idle"), l = R(() => t.logs.map((v) => ({
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
        await Ml(v), n.value = "copied", setTimeout(() => {
          n.value = "idle";
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
    return (v, f) => (a(), i("div", c6, [
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
        }, m(n.value === "copied" ? "Copied!" : "Copy"), 9, u6),
        (a(!0), i(W, null, ye(l.value, (p, w) => (a(), i("div", {
          key: w,
          class: Be(`log-line log-level-${p.level.toLowerCase()}`)
        }, m(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), Ic = /* @__PURE__ */ Ie(d6, [["__scopeId", "data-v-5aaf1b88"]]), m6 = /* @__PURE__ */ xe({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: t, getStatus: o, getEnvironmentLogPath: n, openFile: l } = ct(), r = k([]), c = k(!1), u = k(null), d = k(!1), v = k("production"), f = k(null), p = k(!1);
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
        const b = await n();
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
    }), (b, S) => (a(), i(W, null, [
      $(Ft, null, ss({
        content: h(() => [
          c.value ? (a(), L(Ps, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (a(), L(Rs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), i(W, { key: 2 }, [
            r.value.length === 0 ? (a(), L(_s, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), L(Ic, {
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
}), Li = /* @__PURE__ */ xe({
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
    } = ct(), c = e, u = k(c.initialTab ?? "workspace"), d = k([]), v = k(!1), f = k(null), p = k(!1), w = k(null), g = k(null), _ = k(!1), b = R(() => u.value === "workspace" ? w.value : g.value);
    async function S() {
      v.value = !0, f.value = null;
      try {
        u.value === "workspace" ? d.value = await t(void 0, 500) : d.value = await n(void 0, 500);
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
    }), (E, M) => (a(), i(W, null, [
      $(Ft, null, ss({
        content: h(() => [
          v.value ? (a(), L(Ps, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : f.value ? (a(), L(Rs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (a(), i(W, { key: 2 }, [
            d.value.length === 0 ? (a(), L(_s, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (a(), L(Ic, {
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
}), f6 = /* @__PURE__ */ xe({
  __name: "DiagnosticsSection",
  props: {
    initialTab: {}
  },
  setup(e) {
    const t = e, o = [
      { id: "env", label: "Environment" },
      { id: "workspace", label: "Workspace" },
      { id: "orchestrator", label: "Orchestrator" }
    ], n = k(t.initialTab ?? "manifest"), l = k(
      t.initialTab && t.initialTab !== "manifest" ? t.initialTab : "env"
    ), r = k(!1), c = R(() => n.value === "manifest" ? "MANIFEST" : "LOGGING"), u = R(() => n.value === "manifest" ? "About Manifest" : "About Logging");
    return gt(() => t.initialTab, (d) => {
      d && (n.value = d, d !== "manifest" && (l.value = d));
    }), gt(l, (d) => {
      n.value !== "manifest" && (n.value = d);
    }), (d, v) => (a(), i(W, null, [
      $(Ft, null, ss({
        header: h(() => [
          $(Vt, {
            title: c.value,
            "show-info": !0,
            onInfoClick: v[0] || (v[0] = (f) => r.value = !0)
          }, null, 8, ["title"])
        ]),
        content: h(() => [
          n.value === "manifest" ? (a(), L(r6, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (a(), L(m6, {
            key: 1,
            embedded: ""
          })) : l.value === "workspace" ? (a(), L(Li, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (a(), L(Li, {
            key: 3,
            embedded: "",
            "initial-tab": "orchestrator"
          }))
        ]),
        _: 2
      }, [
        n.value !== "manifest" ? {
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
          n.value === "manifest" ? (a(), i(W, { key: 0 }, [
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
          ], 64)) : (a(), i(W, { key: 1 }, [
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
}), v6 = { class: "header-info" }, p6 = { class: "commit-hash" }, g6 = {
  key: 0,
  class: "commit-refs"
}, h6 = { class: "commit-message" }, y6 = { class: "commit-date" }, w6 = {
  key: 0,
  class: "loading"
}, _6 = {
  key: 1,
  class: "changes-section"
}, k6 = { class: "stats-row" }, b6 = { class: "stat" }, $6 = { class: "stat insertions" }, C6 = { class: "stat deletions" }, x6 = {
  key: 0,
  class: "change-group"
}, S6 = {
  key: 1,
  class: "change-group"
}, I6 = {
  key: 0,
  class: "version"
}, E6 = {
  key: 2,
  class: "change-group"
}, T6 = { class: "change-item" }, M6 = /* @__PURE__ */ xe({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const t = e, { getCommitDetail: o } = ct(), n = k(null), l = k(!0), r = R(() => {
      if (!n.value) return !1;
      const u = n.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = R(() => {
      if (!n.value) return !1;
      const u = n.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return lt(async () => {
      try {
        n.value = await o(t.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (a(), L($t, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => u.$emit("close"))
    }, {
      header: h(() => {
        var v, f, p, w;
        return [
          s("div", v6, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", p6, m(((v = n.value) == null ? void 0 : v.short_hash) || e.commit.short_hash || ((f = e.commit.hash) == null ? void 0 : f.slice(0, 7))), 1),
            (w = (p = n.value) == null ? void 0 : p.refs) != null && w.length ? (a(), i("span", g6, [
              (a(!0), i(W, null, ye(n.value.refs, (g) => (a(), i("span", {
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
          s("div", h6, m(((v = n.value) == null ? void 0 : v.message) || e.commit.message), 1),
          s("div", y6, m(((f = n.value) == null ? void 0 : f.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), i("div", w6, "Loading details...")) : n.value ? (a(), i("div", _6, [
            s("div", k6, [
              s("span", b6, m(n.value.stats.files_changed) + " files", 1),
              s("span", $6, "+" + m(n.value.stats.insertions), 1),
              s("span", C6, "-" + m(n.value.stats.deletions), 1)
            ]),
            r.value ? (a(), i("div", x6, [
              $(fo, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  x("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), i(W, null, ye(n.value.changes.workflows.added, (p) => (a(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (a(!0), i(W, null, ye(n.value.changes.workflows.modified, (p) => (a(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (a(!0), i(W, null, ye(n.value.changes.workflows.deleted, (p) => (a(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (a(), i("div", S6, [
              $(fo, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  x("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), i(W, null, ye(n.value.changes.nodes.added, (p) => (a(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p.name), 1),
                p.version ? (a(), i("span", I6, "(" + m(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), i(W, null, ye(n.value.changes.nodes.removed, (p) => (a(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), i("div", E6, [
              $(fo, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  x("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", T6, [
                d[14] || (d[14] = s("span", { class: "change-icon" }, "●", -1)),
                s("span", null, m(n.value.changes.models.resolved) + " model(s) resolved", 1)
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
}), P6 = /* @__PURE__ */ Ie(M6, [["__scopeId", "data-v-d256ff6d"]]), R6 = { class: "popover-header" }, L6 = { class: "popover-body" }, D6 = {
  key: 0,
  class: "changes-summary"
}, N6 = {
  key: 0,
  class: "change-item"
}, U6 = {
  key: 1,
  class: "change-item"
}, O6 = {
  key: 2,
  class: "change-item"
}, A6 = {
  key: 3,
  class: "change-item"
}, z6 = {
  key: 4,
  class: "change-item"
}, F6 = {
  key: 5,
  class: "change-item"
}, V6 = {
  key: 1,
  class: "no-changes"
}, B6 = {
  key: 2,
  class: "loading"
}, W6 = {
  key: 3,
  class: "issues-error"
}, G6 = { class: "error-header" }, j6 = { class: "error-title" }, H6 = { class: "issues-list" }, q6 = { class: "workflow-state" }, K6 = { class: "message-section" }, J6 = { class: "popover-footer" }, Q6 = {
  key: 1,
  class: "commit-popover"
}, Y6 = { class: "popover-header" }, X6 = { class: "popover-body" }, Z6 = {
  key: 0,
  class: "changes-summary"
}, eE = {
  key: 0,
  class: "change-item"
}, tE = {
  key: 1,
  class: "change-item"
}, sE = {
  key: 2,
  class: "change-item"
}, oE = {
  key: 3,
  class: "change-item"
}, nE = {
  key: 4,
  class: "change-item"
}, aE = {
  key: 5,
  class: "change-item"
}, lE = {
  key: 1,
  class: "no-changes"
}, iE = {
  key: 2,
  class: "loading"
}, rE = {
  key: 3,
  class: "issues-error"
}, cE = { class: "error-header" }, uE = { class: "error-title" }, dE = { class: "issues-list" }, mE = { class: "workflow-state" }, fE = { class: "message-section" }, vE = { class: "popover-footer" }, pE = /* @__PURE__ */ xe({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { commit: l } = ct(), r = k(""), c = k(!1), u = k(!1), d = R(() => {
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
            n("committed", { success: !0, message: E });
          } else if (I.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (I.status === "blocked") {
            const E = ((C = I.issues) == null ? void 0 : C.map((M) => `${M.name}: ${M.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${E}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: I.message || "Commit failed" });
        } catch (I) {
          n("committed", { success: !1, message: I instanceof Error ? I.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (_, b) => e.asModal ? (a(), L(Zt, {
      key: 0,
      to: "body"
    }, [
      s("div", {
        class: "modal-overlay",
        onClick: b[5] || (b[5] = (S) => n("close"))
      }, [
        s("div", {
          class: "commit-popover modal",
          onClick: b[4] || (b[4] = vt(() => {
          }, ["stop"]))
        }, [
          s("div", R6, [
            b[11] || (b[11] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            s("button", {
              class: "close-btn",
              onClick: b[0] || (b[0] = (S) => n("close"))
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
          s("div", L6, [
            e.status && d.value ? (a(), i("div", D6, [
              e.status.workflows.new.length ? (a(), i("div", N6, [
                b[12] || (b[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), i("div", U6, [
                b[13] || (b[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), i("div", O6, [
                b[14] || (b[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), i("div", A6, [
                b[15] || (b[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), i("div", z6, [
                b[16] || (b[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              v.value ? y("", !0) : (a(), i("div", F6, [...b[17] || (b[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), i("div", V6, " No changes to commit ")) : (a(), i("div", B6, " Loading... ")),
            p.value ? (a(), i("div", W6, [
              s("div", G6, [
                b[18] || (b[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", j6, m(f.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", H6, [
                (a(!0), i(W, null, ye(f.value, (S) => (a(), i("div", {
                  key: S.name,
                  class: "issue-item"
                }, [
                  s("strong", null, m(S.name), 1),
                  s("span", q6, "(" + m(S.sync_state) + ")", 1),
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
            s("div", K6, [
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
          s("div", J6, [
            $(Ue, {
              variant: "secondary",
              onClick: b[3] || (b[3] = (S) => n("close"))
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
    ])) : (a(), i("div", Q6, [
      s("div", Y6, [
        b[22] || (b[22] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        s("button", {
          class: "close-btn",
          onClick: b[6] || (b[6] = (S) => n("close"))
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
      s("div", X6, [
        e.status && d.value ? (a(), i("div", Z6, [
          e.status.workflows.new.length ? (a(), i("div", eE, [
            b[23] || (b[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), i("div", tE, [
            b[24] || (b[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), i("div", sE, [
            b[25] || (b[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), i("div", oE, [
            b[26] || (b[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), i("div", nE, [
            b[27] || (b[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          v.value ? y("", !0) : (a(), i("div", aE, [...b[28] || (b[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), i("div", lE, " No changes to commit ")) : (a(), i("div", iE, " Loading... ")),
        p.value ? (a(), i("div", rE, [
          s("div", cE, [
            b[29] || (b[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", uE, m(f.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", dE, [
            (a(!0), i(W, null, ye(f.value, (S) => (a(), i("div", {
              key: S.name,
              class: "issue-item"
            }, [
              s("strong", null, m(S.name), 1),
              s("span", mE, "(" + m(S.sync_state) + ")", 1),
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
        s("div", fE, [
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
      s("div", vE, [
        $(Ue, {
          variant: "secondary",
          onClick: b[9] || (b[9] = (S) => n("close"))
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
}), Ec = /* @__PURE__ */ Ie(pE, [["__scopeId", "data-v-5f897631"]]), gE = { class: "switch-body" }, hE = { class: "switch-message" }, yE = { class: "switch-details" }, wE = /* @__PURE__ */ xe({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => e.show ? (a(), L($t, {
      key: 0,
      title: "Confirm Environment Switch",
      size: "md",
      "overlay-z-index": 10005,
      onClose: o[2] || (o[2] = (n) => t.$emit("close"))
    }, {
      body: h(() => [
        s("div", gE, [
          s("p", hE, [
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
          s("p", yE, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
          o[7] || (o[7] = s("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
        ])
      ]),
      footer: h(() => [
        $(Re, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => t.$emit("close"))
        }, {
          default: h(() => [...o[8] || (o[8] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        $(Re, {
          variant: "primary",
          onClick: o[1] || (o[1] = (n) => t.$emit("confirm"))
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
}), _E = /* @__PURE__ */ Ie(wE, [["__scopeId", "data-v-f6d223e6"]]), kE = {
  key: 0,
  class: "modal-overlay"
}, bE = { class: "modal-content" }, $E = { class: "modal-body" }, CE = { class: "progress-info" }, xE = { class: "progress-percentage" }, SE = { class: "progress-state" }, IE = { class: "switch-steps" }, EE = { class: "step-icon" }, TE = { class: "step-label" }, ME = /* @__PURE__ */ xe({
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
    }), n = R(() => t.state === "complete" ? "success" : t.state === "critical_failure" || t.state === "rolled_back" ? "error" : "default"), l = R(() => {
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
    return (r, c) => (a(), L(Zt, { to: "body" }, [
      e.show ? (a(), i("div", kE, [
        s("div", bE, [
          c[1] || (c[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", $E, [
            $(kc, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            s("div", CE, [
              s("div", xE, m(e.progress) + "%", 1),
              s("div", SE, m(o.value), 1)
            ]),
            s("div", IE, [
              (a(!0), i(W, null, ye(l.value, (u) => (a(), i("div", {
                key: u.state,
                class: Be(["switch-step", u.status])
              }, [
                s("span", EE, m(u.icon), 1),
                s("span", TE, m(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), PE = /* @__PURE__ */ Ie(ME, [["__scopeId", "data-v-768a5078"]]), RE = { class: "modal-header" }, LE = { class: "modal-body" }, DE = {
  key: 0,
  class: "node-section"
}, NE = { class: "node-list" }, UE = {
  key: 1,
  class: "node-section"
}, OE = { class: "node-list" }, AE = { class: "modal-actions" }, zE = /* @__PURE__ */ xe({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (a(), L(Zt, { to: "body" }, [
      e.show ? (a(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = vt(() => {
          }, ["stop"]))
        }, [
          s("div", RE, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", LE, [
            o[8] || (o[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), i("div", DE, [
              o[6] || (o[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", NE, [
                (a(!0), i(W, null, ye(e.mismatchDetails.missing_nodes, (n) => (a(), i("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + m(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), i("div", UE, [
              o[7] || (o[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", OE, [
                (a(!0), i(W, null, ye(e.mismatchDetails.extra_nodes, (n) => (a(), i("div", {
                  key: n,
                  class: "node-item remove"
                }, " - " + m(n), 1))), 128))
              ])
            ])) : y("", !0),
            o[9] || (o[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This may take several minutes")
            ], -1))
          ]),
          s("div", AE, [
            $(Re, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => t.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            $(Re, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
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
}), FE = /* @__PURE__ */ Ie(zE, [["__scopeId", "data-v-7cad7518"]]), VE = [
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
], zn = "v0.0.24", BE = "Akatz", WE = { class: "social-buttons" }, GE = ["title", "aria-label", "onClick"], jE = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, HE = ["d"], qE = ["title", "aria-label", "onClick"], KE = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, JE = ["d"], QE = /* @__PURE__ */ xe({
  __name: "SocialButtons",
  setup(e) {
    function t(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), i("div", WE, [
      (a(!0), i(W, null, ye(st(VE), (l) => (a(), i(W, {
        key: l.id
      }, [
        l.label ? (a(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          x(m(l.label) + " ", 1),
          (a(), i("svg", jE, [
            s("path", {
              d: l.iconPath
            }, null, 8, HE)
          ]))
        ], 8, GE)) : (a(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (a(), i("svg", KE, [
            s("path", {
              d: l.iconPath
            }, null, 8, JE)
          ]))
        ], 8, qE))
      ], 64))), 128))
    ]));
  }
}), Tc = /* @__PURE__ */ Ie(QE, [["__scopeId", "data-v-4f846342"]]), YE = { class: "footer-info" }, XE = ["title"], ZE = {
  key: 0,
  class: "dev-badge"
}, eT = { class: "made-by" }, tT = /* @__PURE__ */ xe({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: t } = ct(), o = k(null), n = k(null), l = k(null), r = R(() => o.value === "development"), c = R(() => {
      var d;
      if (!r.value) return zn;
      const u = [n.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return u ? `${zn} (${u})` : `${zn} (development)`;
    });
    return lt(async () => {
      try {
        const u = await t();
        o.value = u.manager_source ?? null, n.value = u.manager_branch ?? null, l.value = u.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (u, d) => (a(), i("div", YE, [
      s("span", {
        class: "version",
        title: c.value
      }, [
        x(m(st(zn)) + " ", 1),
        r.value ? (a(), i("span", ZE, "dev")) : y("", !0)
      ], 8, XE),
      s("span", eT, [
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
        x(" by " + m(st(BE)), 1)
      ])
    ]));
  }
}), Mc = /* @__PURE__ */ Ie(tT, [["__scopeId", "data-v-4fa265b3"]]), sT = /* @__PURE__ */ xe({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = k(null);
    async function n() {
      var r;
      await ((r = o.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, c) => (a(), L($t, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => r.$emit("close"))
    }, {
      body: h(() => [
        $(hc, {
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
            onClick: n
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
}), oT = /* @__PURE__ */ Ie(sT, [["__scopeId", "data-v-fac00ae7"]]), nT = { class: "header-actions" }, aT = {
  key: 0,
  class: "wizard-step"
}, lT = { class: "form-field" }, iT = ["placeholder"], rT = {
  key: 0,
  class: "form-error"
}, cT = { class: "form-field form-field--checkbox" }, uT = { class: "form-checkbox" }, dT = {
  key: 0,
  class: "form-field"
}, mT = ["placeholder"], fT = {
  key: 0,
  class: "form-info"
}, vT = {
  key: 1,
  class: "form-suggestion"
}, pT = {
  key: 2,
  class: "form-error"
}, gT = {
  key: 3,
  class: "form-info"
}, hT = {
  key: 1,
  class: "wizard-step"
}, yT = {
  key: 0,
  class: "progress-check-loading"
}, wT = {
  key: 0,
  class: "cli-warning"
}, _T = { class: "cli-warning-header" }, kT = {
  key: 1,
  class: "env-landing"
}, bT = { class: "env-list" }, $T = ["value"], CT = { class: "env-name" }, xT = {
  key: 2,
  class: "env-create"
}, ST = { class: "form-field" }, IT = { class: "form-field" }, ET = ["value"], TT = { class: "form-field" }, MT = ["disabled"], PT = ["value"], RT = { class: "form-field" }, LT = ["value"], DT = { class: "form-field form-field--checkbox" }, NT = { class: "form-checkbox" }, UT = {
  key: 0,
  class: "form-error"
}, OT = {
  key: 1,
  class: "env-creating"
}, AT = { class: "creating-intro" }, zT = {
  key: 3,
  class: "env-import"
}, FT = { class: "wizard-footer" }, VT = { class: "wizard-footer-actions" }, bo = 10, BT = 600 * 1e3, Di = 1800 * 1e3, WT = /* @__PURE__ */ xe({
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
      getComfyUIReleases: f
    } = ct(), p = k(o.initialStep || 1), w = k(null), g = k("landing"), _ = k(!1), b = k(!1), S = k(!1), C = k(!1), I = k(null), E = k(o.initialStep === 2), M = k(o.defaultPath), N = k(!!o.detectedModelsDir), F = k(o.detectedModelsDir || ""), V = k(null), D = k(null), q = k(null), ue = k(null), ie = k("my-new-env"), Y = k(wc), me = k("latest"), oe = k(_c), B = k(!0), H = k(null), we = k(null), se = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), de = k(!1), ce = k(!1), K = k(!1), ee = k({ progress: 0, message: "" }), te = k({ progress: 0, message: "" }), Me = [
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
            if (ze.value && Date.now() - ze.value > BT) {
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
            if (be.value && Date.now() - be.value > Di) {
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
                B.value ? n("complete", He, we.value) : (g.value = "landing", n("environment-created-no-switch", He));
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
      w.value && n("switch-environment", w.value, we.value);
    }
    function G() {
      g.value === "create" || g.value === "import" ? g.value = "landing" : p.value === 2 && o.setupState === "no_workspace" && (p.value = 1);
    }
    function fe(_e, Z) {
      b.value = !1, Z ? n("complete", _e, we.value) : (n("environment-created-no-switch", _e), g.value = "landing");
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
        if (be.value && Date.now() - be.value > Di)
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
            return n("complete", He, we.value), !1;
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
    return (_e, Z) => (a(), i(W, null, [
      $($t, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: Z[15] || (Z[15] = (Fe) => _e.$emit("close"))
      }, {
        header: h(() => [
          Z[20] || (Z[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", nT, [
            $(Tc),
            Z[19] || (Z[19] = s("span", { class: "header-divider" }, null, -1)),
            ve.value ? (a(), i("button", {
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
            p.value === 1 ? (a(), i("div", aT, [
              Z[24] || (Z[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", lT, [
                Z[21] || (Z[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                Rt(s("input", {
                  "onUpdate:modelValue": Z[2] || (Z[2] = (De) => M.value = De),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, iT), [
                  [fn, M.value]
                ]),
                V.value ? (a(), i("p", rT, m(V.value), 1)) : y("", !0)
              ]),
              s("div", cT, [
                s("label", uT, [
                  Rt(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Z[3] || (Z[3] = (De) => N.value = De)
                  }, null, 512), [
                    [na, N.value]
                  ]),
                  Z[22] || (Z[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              N.value ? (a(), i("div", dT, [
                Z[23] || (Z[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                Rt(s("input", {
                  "onUpdate:modelValue": Z[4] || (Z[4] = (De) => F.value = De),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, mT), [
                  [fn, F.value]
                ]),
                e.detectedModelsDir && !F.value ? (a(), i("p", fT, " Detected: " + m(e.detectedModelsDir), 1)) : y("", !0),
                q.value ? (a(), i("p", vT, " Did you mean: " + m(q.value), 1)) : y("", !0),
                D.value ? (a(), i("p", pT, m(D.value), 1)) : y("", !0),
                ue.value !== null && !D.value ? (a(), i("p", gT, " Found " + m(ue.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              ce.value ? (a(), L(aa, {
                key: 1,
                progress: ee.value.progress,
                message: ee.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (a(), i("div", hT, [
              E.value ? (a(), i("div", yT, [...Z[25] || (Z[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), i(W, { key: 1 }, [
                !o.cliInstalled && !S.value ? (a(), i("div", wT, [
                  s("div", _T, [
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
                g.value === "landing" ? (a(), i("div", kT, [
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
                  (Fe = o.existingEnvironments) != null && Fe.length ? (a(), i(W, { key: 0 }, [
                    Z[33] || (Z[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", bT, [
                      (a(!0), i(W, null, ye(o.existingEnvironments, (De) => (a(), i("label", {
                        key: De,
                        class: Be(["env-option", { selected: w.value === De }])
                      }, [
                        Rt(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: De,
                          "onUpdate:modelValue": Z[8] || (Z[8] = (He) => w.value = He)
                        }, null, 8, $T), [
                          [jn, w.value]
                        ]),
                        s("span", CT, m(De), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : g.value === "create" ? (a(), i("div", xT, [
                  K.value ? (a(), i("div", OT, [
                    s("p", AT, [
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
                  ])) : (a(), i(W, { key: 0 }, [
                    Z[40] || (Z[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", ST, [
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
                    s("div", IT, [
                      Z[36] || (Z[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      Rt(s("select", {
                        "onUpdate:modelValue": Z[10] || (Z[10] = (De) => Y.value = De),
                        class: "form-select"
                      }, [
                        (a(!0), i(W, null, ye(st(yc), (De) => (a(), i("option", {
                          key: De,
                          value: De
                        }, m(De), 9, ET))), 128))
                      ], 512), [
                        [Ro, Y.value]
                      ])
                    ]),
                    s("div", TT, [
                      Z[37] || (Z[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Rt(s("select", {
                        "onUpdate:modelValue": Z[11] || (Z[11] = (De) => me.value = De),
                        class: "form-select",
                        disabled: de.value
                      }, [
                        (a(!0), i(W, null, ye(se.value, (De) => (a(), i("option", {
                          key: De.tag_name,
                          value: De.tag_name
                        }, m(De.name), 9, PT))), 128))
                      ], 8, MT), [
                        [Ro, me.value]
                      ])
                    ]),
                    s("div", RT, [
                      Z[38] || (Z[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Rt(s("select", {
                        "onUpdate:modelValue": Z[12] || (Z[12] = (De) => oe.value = De),
                        class: "form-select"
                      }, [
                        (a(!0), i(W, null, ye(st(Rl), (De) => (a(), i("option", {
                          key: De,
                          value: De
                        }, m(De) + m(De === "auto" ? " (detect GPU)" : ""), 9, LT))), 128))
                      ], 512), [
                        [Ro, oe.value]
                      ])
                    ]),
                    s("div", DT, [
                      s("label", NT, [
                        Rt(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": Z[13] || (Z[13] = (De) => B.value = De)
                        }, null, 512), [
                          [na, B.value]
                        ]),
                        Z[39] || (Z[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    H.value ? (a(), i("div", UT, m(H.value), 1)) : y("", !0)
                  ], 64))
                ])) : g.value === "import" ? (a(), i("div", zT, [
                  $($c, {
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
          s("div", FT, [
            $(Mc),
            s("div", VT, [
              p.value === 1 ? (a(), L(Ue, {
                key: 0,
                variant: "primary",
                disabled: !Ae.value || ce.value,
                onClick: Ce
              }, {
                default: h(() => [
                  x(m(ce.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (a(), i(W, { key: 1 }, [
                !K.value && !b.value && (g.value !== "landing" || o.setupState === "no_workspace" && !we.value) ? (a(), L(Ue, {
                  key: 0,
                  variant: "secondary",
                  onClick: G
                }, {
                  default: h(() => [...Z[44] || (Z[44] = [
                    x(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                g.value === "create" ? (a(), L(Ue, {
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
                g.value === "landing" && w.value ? (a(), L(Ue, {
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
      _.value ? (a(), L(oT, {
        key: 0,
        "workspace-path": T.value,
        onClose: Z[16] || (Z[16] = (Fe) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), GT = /* @__PURE__ */ Ie(WT, [["__scopeId", "data-v-9a9aadc0"]]), jT = { class: "update-banner" }, HT = { class: "update-banner__left" }, qT = { class: "update-banner__title" }, KT = {
  key: 0,
  class: "update-banner__summary"
}, JT = { class: "update-banner__actions" }, QT = ["disabled"], YT = ["disabled"], XT = ["disabled"], ZT = /* @__PURE__ */ xe({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const o = t;
    return (n, l) => (a(), i("div", jT, [
      s("div", HT, [
        s("div", qT, " ComfyGit Manager v" + m(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (a(), i("div", KT, m(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      s("div", JT, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, m(e.updating ? "Updating…" : "Update"), 9, QT),
        e.info.release_url ? (a(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, YT)) : y("", !0),
        s("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, XT)
      ])
    ]));
  }
}), eM = /* @__PURE__ */ Ie(ZT, [["__scopeId", "data-v-49562c5c"]]), Pc = "ComfyGit.UpdateNotice.DismissedVersion";
function tM() {
  try {
    return localStorage.getItem(Pc);
  } catch {
    return null;
  }
}
function sM(e) {
  try {
    localStorage.setItem(Pc, e);
  } catch {
  }
}
function oM(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : tM() !== e.latest_version;
}
const nM = { class: "comfygit-panel" }, aM = { class: "panel-header" }, lM = { class: "header-left" }, iM = {
  key: 0,
  class: "header-info"
}, rM = { class: "header-actions" }, cM = { class: "env-switcher" }, uM = { class: "env-switcher-header" }, dM = { class: "env-control-buttons" }, mM = {
  key: 0,
  class: "header-info"
}, fM = { class: "branch-name" }, vM = { class: "panel-main" }, pM = { class: "sidebar" }, gM = { class: "sidebar-content" }, hM = { class: "sidebar-section" }, yM = { class: "sidebar-section" }, wM = { class: "sidebar-section" }, _M = { class: "sidebar-footer" }, kM = { class: "content-area" }, bM = {
  key: 0,
  class: "error-message"
}, $M = {
  key: 1,
  class: "loading"
}, CM = { class: "dialog-content env-selector-dialog" }, xM = { class: "dialog-header" }, SM = { class: "dialog-body" }, IM = { class: "env-list" }, EM = { class: "env-info" }, TM = { class: "env-name-row" }, MM = { class: "env-indicator" }, PM = { class: "env-name" }, RM = {
  key: 0,
  class: "env-branch"
}, LM = {
  key: 1,
  class: "current-label"
}, DM = { class: "env-stats" }, NM = ["onClick"], UM = { class: "toast-container" }, OM = { class: "toast-message" }, Ni = "ComfyGit.LastView", Ui = "ComfyGit.LastSection", AM = /* @__PURE__ */ xe({
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
    } = ct(), M = jh(), N = k(null), F = k([]), V = k([]), D = k([]), q = R(() => D.value.find((re) => re.is_current)), ue = k(null), ie = k(!1), Y = k(!1), me = k("remotes");
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
    }), ee = k(!1), te = k(null), Me = k(null), Se = k(!1), ze = k(null), Ne = k(!1), be = k(!1), Ae = R(() => !Ne.value && oM(ze.value)), ge = k(null), ve = k(null), T = k(null), A = k(!1), le = k(!1), Ce = k(""), Ee = k(null), ke = k({ state: "idle", progress: 0, message: "" });
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
        const re = sessionStorage.getItem(Ni), j = sessionStorage.getItem(Ui), qe = re === "branches" || re === "history" || re === "remotes" ? "version-control" : re === "manifest" || re === "debug-env" || re === "debug-workspace" ? "diagnostics" : re, et = j === "all-envs" ? "workspace" : j === "sharing" ? "version-control" : j;
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
        sessionStorage.setItem(Ni, re), sessionStorage.setItem(Ui, j);
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
      n("close"), setTimeout(async () => {
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
      re && sM(re), Ne.value = !0;
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
            await Vs("/v2/manager/reboot");
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
        N.value = j, F.value = qe.commits, V.value = et.branches, D.value = dt, n("statusUpdate", j), (re.refreshWorkflows ?? !0) && ge.value && await ge.value.loadWorkflows(!0);
      } catch (j) {
        te.value = j instanceof Error ? j.message : "Failed to load status", N.value = null, F.value = [], V.value = [];
      } finally {
        ee.value = !1;
      }
    }
    function Hs(re) {
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
    async function qs(re) {
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
    async function Ks(re) {
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
            await Vs("/v2/manager/reboot");
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
            await Vs("/v2/comfygit/stop", { method: "POST" });
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
      we.value = !1, n("close");
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
      return a(), i("div", nM, [
        s("div", aM, [
          s("div", lM, [
            j[27] || (j[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            N.value ? (a(), i("div", iM)) : y("", !0)
          ]),
          s("div", rM, [
            $(Tc),
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
              onClick: j[0] || (j[0] = (Xe) => n("close")),
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
        Ae.value && ze.value ? (a(), L(eM, {
          key: 0,
          info: ze.value,
          updating: be.value,
          onUpdate: Mt,
          onDismiss: Ct,
          onReleaseNotes: Bt
        }, null, 8, ["info", "updating"])) : y("", !0),
        s("div", cM, [
          s("div", uM, [
            j[31] || (j[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", dM, [
              K.value.can_restart_current ? (a(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: ae
              }, " Restart ")) : y("", !0),
              K.value.can_stop_current ? (a(), i("button", {
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
            N.value ? (a(), i("div", mM, [
              s("span", null, m(((qe = q.value) == null ? void 0 : qe.name) || ((et = N.value) == null ? void 0 : et.environment) || "Loading..."), 1),
              s("span", fM, "(" + m(N.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            j[32] || (j[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", vM, [
          s("div", pM, [
            s("div", gM, [
              s("div", hM, [
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
              s("div", yM, [
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
              s("div", wM, [
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
            s("div", _M, [
              $(Mc)
            ])
          ]),
          s("div", kM, [
            te.value ? (a(), i("div", bM, m(te.value), 1)) : !N.value && Fe.value === "status" ? (a(), i("div", $M, " Loading status... ")) : (a(), i(W, { key: 2 }, [
              Fe.value === "status" ? (a(), L(Gh, {
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
              }, null, 8, ["status", "setup-state"])) : Fe.value === "workflows" ? (a(), L(Wb, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: ge,
                onRefresh: Et
              }, null, 512)) : Fe.value === "models-env" ? (a(), L(J2, {
                key: 2,
                onNavigate: Ve
              })) : Fe.value === "version-control" ? (a(), L(ZI, {
                key: 3,
                commits: F.value,
                "current-ref": (dt = N.value) == null ? void 0 : dt.branch,
                branches: V.value,
                current: ((yt = N.value) == null ? void 0 : yt.branch) || null,
                "initial-tab": me.value,
                onSelect: Hs,
                onCheckout: Ls,
                onSwitch: qs,
                onCreate: Ks,
                onDelete: Wo,
                onToast: ot
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : Fe.value === "nodes" ? (a(), L(V$, {
                key: 4,
                "version-mismatches": ((is = (Ut = N.value) == null ? void 0 : Ut.comparison) == null ? void 0 : is.version_mismatches) || [],
                onOpenNodeManager: Q,
                onRepairEnvironment: Tn,
                onToast: ot
              }, null, 8, ["version-mismatches"])) : Fe.value === "diagnostics" ? (a(), L(f6, {
                key: 5,
                "initial-tab": B.value
              }, null, 8, ["initial-tab"])) : Fe.value === "environments" ? (a(), L(Fx, {
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
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : Fe.value === "model-index" ? (a(), L(l$, {
                key: 7,
                onRefresh: Et
              })) : Fe.value === "settings" ? (a(), L(vC, { key: 8 })) : y("", !0)
            ], 64))
          ])
        ]),
        Me.value ? (a(), L(P6, {
          key: 1,
          commit: Me.value,
          onClose: j[20] || (j[20] = (Xe) => Me.value = null),
          onCheckout: Ls,
          onCreateBranch: Go
        }, null, 8, ["commit"])) : y("", !0),
        U.value ? (a(), L(Pl, {
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
        ie.value ? (a(), L($t, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: j[22] || (j[22] = (Xe) => ie.value = !1)
        }, {
          body: h(() => [
            $(x5, {
              embedded: "",
              onImportCompleteSwitch: Sa
            })
          ]),
          _: 1
        })) : y("", !0),
        Y.value ? (a(), L($t, {
          key: 4,
          title: ue.value ? `EXPORT ENVIRONMENT: ${ue.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "md",
          onClose: Mn
        }, {
          body: h(() => [
            $(M3, {
              embedded: "",
              "environment-name": ue.value,
              onClose: Mn
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : y("", !0),
        $(_E, {
          show: A.value,
          "from-environment": ((Ho = q.value) == null ? void 0 : Ho.name) || "unknown",
          "to-environment": Ce.value,
          onConfirm: Je,
          onClose: jo
        }, null, 8, ["show", "from-environment", "to-environment"]),
        J.value && N.value ? (a(), L(Ec, {
          key: 5,
          status: N.value,
          "as-modal": !0,
          onClose: j[23] || (j[23] = (Xe) => J.value = !1),
          onCommitted: yo
        }, null, 8, ["status"])) : y("", !0),
        Te.value && N.value ? (a(), L(FE, {
          key: 6,
          show: Te.value,
          "mismatch-details": {
            missing_nodes: N.value.comparison.missing_nodes,
            extra_nodes: N.value.comparison.extra_nodes
          },
          onConfirm: wo,
          onClose: j[24] || (j[24] = (Xe) => Te.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        $(PE, {
          show: le.value,
          state: ke.value.state,
          progress: ke.value.progress,
          message: ke.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        Se.value ? (a(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: j[26] || (j[26] = vt((Xe) => Se.value = !1, ["self"]))
        }, [
          s("div", CM, [
            s("div", xM, [
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
            s("div", SM, [
              j[40] || (j[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", IM, [
                (a(!0), i(W, null, ye(D.value, (Xe) => (a(), i("div", {
                  key: Xe.name,
                  class: Be(["env-item", { current: Xe.is_current }])
                }, [
                  s("div", EM, [
                    s("div", TM, [
                      s("span", MM, m(Xe.is_current ? "●" : "○"), 1),
                      s("span", PM, m(Xe.name), 1),
                      Xe.current_branch ? (a(), i("span", RM, "(" + m(Xe.current_branch) + ")", 1)) : y("", !0),
                      Xe.is_current ? (a(), i("span", LM, "CURRENT")) : y("", !0)
                    ]),
                    s("div", DM, m(Xe.workflow_count) + " workflows • " + m(Xe.node_count) + " nodes ", 1)
                  ]),
                  !Xe.is_current && K.value.can_switch_environment ? (a(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Kt) => ne(Xe.name)
                  }, " SWITCH ", 8, NM)) : y("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        we.value ? (a(), L(GT, {
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
        s("div", UM, [
          $(im, { name: "toast" }, {
            default: h(() => [
              (a(!0), i(W, null, ye(Le.value, (Xe) => (a(), i("div", {
                key: Xe.id,
                class: Be(["toast", Xe.type])
              }, [
                s("span", OM, m(Xe.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), zM = /* @__PURE__ */ Ie(AM, [["__scopeId", "data-v-93abae9b"]]), FM = { class: "item-header" }, VM = { class: "item-info" }, BM = { class: "filename" }, WM = { class: "metadata" }, GM = { class: "size" }, jM = {
  key: 0,
  class: "type"
}, HM = { class: "item-actions" }, qM = {
  key: 0,
  class: "progress-section"
}, KM = { class: "progress-bar" }, JM = { class: "progress-stats" }, QM = { class: "downloaded" }, YM = { class: "speed" }, XM = {
  key: 0,
  class: "eta"
}, ZM = {
  key: 1,
  class: "status-msg paused"
}, eP = {
  key: 2,
  class: "status-msg queued"
}, tP = {
  key: 3,
  class: "status-msg completed"
}, sP = {
  key: 4,
  class: "status-msg failed"
}, oP = {
  key: 0,
  class: "retries"
}, nP = /* @__PURE__ */ xe({
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
      class: Be(["download-item", `status-${e.item.status}`])
    }, [
      s("div", FM, [
        s("div", VM, [
          s("div", BM, m(e.item.filename), 1),
          s("div", WM, [
            s("span", GM, m(n(e.item.size)), 1),
            e.item.type ? (a(), i("span", jM, m(e.item.type), 1)) : y("", !0)
          ])
        ]),
        s("div", HM, [
          e.item.status === "queued" || e.item.status === "downloading" ? (a(), i("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (d) => o("cancel")),
            title: "Cancel"
          }, " × ")) : y("", !0),
          e.item.status === "paused" ? (a(), i("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (d) => o("resume")),
            title: "Resume"
          }, " ▶ ")) : y("", !0),
          e.item.status === "failed" ? (a(), i("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (d) => o("retry")),
            title: "Retry"
          }, " ↻ ")) : y("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (a(), i("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (d) => o("remove")),
            title: "Remove"
          }, " × ")) : y("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (a(), i("div", qM, [
        s("div", KM, [
          s("div", {
            class: "progress-fill",
            style: Nt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", JM, [
          s("span", QM, m(n(e.item.downloaded)) + " / " + m(n(e.item.size)), 1),
          s("span", YM, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), i("span", XM, m(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), i("div", ZM, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), i("div", eP, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), i("div", tP, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), i("div", sP, [
        x(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), i("span", oP, "(" + m(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Qo = /* @__PURE__ */ Ie(nP, [["__scopeId", "data-v-2110df65"]]), aP = { class: "queue-title" }, lP = { class: "count" }, iP = { class: "queue-actions" }, rP = { class: "action-label" }, cP = {
  key: 0,
  class: "overall-progress"
}, uP = { class: "progress-bar" }, dP = {
  key: 0,
  class: "current-mini"
}, mP = { class: "filename" }, fP = { class: "speed" }, vP = {
  key: 1,
  class: "queue-content"
}, pP = {
  key: 0,
  class: "section"
}, gP = {
  key: 1,
  class: "section"
}, hP = { class: "section-header" }, yP = { class: "section-label paused" }, wP = { class: "items-list" }, _P = {
  key: 2,
  class: "section"
}, kP = { class: "section-header" }, bP = { class: "section-label" }, $P = { class: "items-list" }, CP = {
  key: 3,
  class: "section"
}, xP = { class: "section-header" }, SP = { class: "section-label" }, IP = { class: "items-list" }, EP = {
  key: 4,
  class: "section"
}, TP = { class: "section-header" }, MP = { class: "section-label failed" }, PP = { class: "items-list" }, RP = /* @__PURE__ */ xe({
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
    return (M, N) => (a(), L(Zt, { to: "body" }, [
      st(u) ? (a(), i("div", {
        key: 0,
        class: Be(["model-download-queue", { minimized: !b.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: N[0] || (N[0] = (F) => b.value = !b.value)
        }, [
          s("div", aP, [
            N[4] || (N[4] = s("span", { class: "icon" }, "↓", -1)),
            N[5] || (N[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", lP, "(" + m(st(d)) + "/" + m(st(t).items.length) + ")", 1)
          ]),
          s("div", iP, [
            s("span", rP, m(b.value ? "minimize" : "expand"), 1)
          ])
        ]),
        b.value ? (a(), i("div", vP, [
          st(o) ? (a(), i("div", pP, [
            N[6] || (N[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            $(Qo, {
              item: st(o),
              onCancel: N[1] || (N[1] = (F) => I(st(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          st(c).length > 0 ? (a(), i("div", gP, [
            s("div", hP, [
              s("span", yP, "Paused (" + m(st(c).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: N[2] || (N[2] = //@ts-ignore
                (...F) => st(w) && st(w)(...F))
              }, "Resume All")
            ]),
            s("div", wP, [
              (a(!0), i(W, null, ye(st(c), (F) => (a(), L(Qo, {
                key: F.id,
                item: F,
                onResume: (V) => st(p)(F.id),
                onRemove: (V) => st(g)(F.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          st(n).length > 0 ? (a(), i("div", _P, [
            s("div", kP, [
              s("span", bP, "Queued (" + m(st(n).length) + ")", 1)
            ]),
            s("div", $P, [
              (a(!0), i(W, null, ye(st(n), (F) => (a(), L(Qo, {
                key: F.id,
                item: F,
                onCancel: (V) => I(F.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          st(l).length > 0 ? (a(), i("div", CP, [
            s("div", xP, [
              s("span", SP, "Completed (" + m(st(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: N[3] || (N[3] = //@ts-ignore
                (...F) => st(_) && st(_)(...F))
              }, "Clear")
            ]),
            s("div", IP, [
              (a(!0), i(W, null, ye(st(l).slice(0, 3), (F) => (a(), L(Qo, {
                key: F.id,
                item: F,
                onRemove: (V) => st(g)(F.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          st(r).length > 0 ? (a(), i("div", EP, [
            s("div", TP, [
              s("span", MP, "Failed (" + m(st(r).length) + ")", 1)
            ]),
            s("div", PP, [
              (a(!0), i(W, null, ye(st(r), (F) => (a(), L(Qo, {
                key: F.id,
                item: F,
                onRetry: (V) => st(f)(F.id),
                onRemove: (V) => st(g)(F.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), i("div", cP, [
          s("div", uP, [
            s("div", {
              class: "progress-fill",
              style: Nt({ width: `${C.value}%` })
            }, null, 4)
          ]),
          st(o) ? (a(), i("div", dP, [
            s("span", mP, m(st(o).filename), 1),
            s("span", fP, m(E(st(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), LP = /* @__PURE__ */ Ie(RP, [["__scopeId", "data-v-3a3c9607"]]), DP = { class: "detail-header" }, NP = { class: "item-count" }, UP = { class: "resource-list" }, OP = { class: "item-info" }, AP = { class: "item-name" }, zP = {
  key: 0,
  class: "item-subtitle"
}, FP = {
  key: 0,
  class: "installing-badge"
}, VP = ["title"], BP = {
  key: 2,
  class: "installed-badge"
}, WP = {
  key: 3,
  class: "queued-badge"
}, GP = {
  key: 4,
  class: "action-buttons"
}, jP = {
  key: 1,
  class: "no-action"
}, HP = /* @__PURE__ */ xe({
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
    const o = e, n = t, l = R(() => o.items.filter((g) => g.canAction)), r = R(() => l.value.length > 0 && l.value.every(
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
    return (g, _) => (a(), L($t, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (b) => n("close"))
    }, {
      body: h(() => [
        s("div", DP, [
          s("span", NP, m(e.items.length) + " " + m(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (a(), L(Ue, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: _[0] || (_[0] = (b) => n("bulk-action"))
          }, {
            default: h(() => [
              x(m(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        s("div", UP, [
          (a(!0), i(W, null, ye(e.items, (b) => (a(), i("div", {
            key: b.id,
            class: "resource-item"
          }, [
            s("div", OP, [
              s("span", AP, m(b.name), 1),
              b.subtitle ? (a(), i("span", zP, m(b.subtitle), 1)) : y("", !0)
            ]),
            b.canAction ? (a(), i(W, { key: 0 }, [
              d(b) ? (a(), i("span", FP, "Installing...")) : f(b) ? (a(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(b)
              }, "Failed ⚠", 8, VP)) : v(b) ? (a(), i("span", BP, "Installed")) : u(b) ? (a(), i("span", WP, "Queued")) : (a(), i("div", GP, [
                (a(!0), i(W, null, ye(w(b), (S) => (a(), L(Ue, {
                  key: `${b.id}-${S.key}`,
                  size: "sm",
                  variant: S.variant || "secondary",
                  onClick: (C) => n("action", b, S.key)
                }, {
                  default: h(() => [
                    x(m(S.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (a(), i("span", jP, m(b.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        $(Ue, {
          variant: "secondary",
          onClick: _[1] || (_[1] = (b) => n("close"))
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
}), qP = /* @__PURE__ */ Ie(HP, [["__scopeId", "data-v-ec7e9202"]]), KP = {
  key: 0,
  class: "loading-state"
}, JP = {
  key: 1,
  class: "analysis-results"
}, QP = {
  key: 0,
  class: "section"
}, YP = { class: "section-header" }, XP = { class: "section-title" }, ZP = { class: "item-list" }, e7 = { class: "package-info" }, t7 = { class: "package-name" }, s7 = { class: "node-count" }, o7 = {
  key: 1,
  class: "installing-badge"
}, n7 = {
  key: 2,
  class: "queued-badge"
}, a7 = ["title"], l7 = {
  key: 4,
  class: "installed-badge"
}, i7 = {
  key: 1,
  class: "section"
}, r7 = { class: "section-header" }, c7 = { class: "section-title" }, u7 = { class: "item-list" }, d7 = { class: "node-type" }, m7 = {
  key: 0,
  class: "overflow-note"
}, f7 = {
  key: 2,
  class: "section"
}, v7 = { class: "section-header" }, p7 = { class: "section-title" }, g7 = { class: "item-list" }, h7 = { class: "node-type" }, y7 = { class: "not-found" }, w7 = {
  key: 0,
  class: "overflow-note"
}, _7 = {
  key: 3,
  class: "section"
}, k7 = { class: "section-header" }, b7 = { class: "section-title" }, $7 = { class: "item-list" }, C7 = { class: "package-info community-info" }, x7 = { class: "community-title-row" }, S7 = { class: "package-name" }, I7 = { class: "node-count" }, E7 = { class: "community-mapping-note" }, T7 = { key: 0 }, M7 = {
  key: 0,
  class: "community-actions"
}, P7 = {
  key: 1,
  class: "installing-badge"
}, R7 = {
  key: 2,
  class: "queued-badge"
}, L7 = ["title"], D7 = {
  key: 4,
  class: "installed-badge"
}, N7 = ["title"], U7 = {
  key: 1,
  class: "no-url"
}, O7 = {
  key: 4,
  class: "section"
}, A7 = { class: "section-header" }, z7 = { class: "section-title" }, F7 = { class: "item-list" }, V7 = { class: "model-info" }, B7 = { class: "model-name" }, W7 = {
  key: 1,
  class: "queued-badge"
}, G7 = {
  key: 1,
  class: "no-url"
}, j7 = { class: "dont-show-again" }, H7 = 3e4, q7 = /* @__PURE__ */ xe({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = k(!1), o = k(null), n = k(null), l = k(!1), r = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Map()), d = k(/* @__PURE__ */ new Set()), v = k(!1), f = k(null), p = k(0), w = k(null), g = k(/* @__PURE__ */ new Set()), _ = k(/* @__PURE__ */ new Map()), b = k(/* @__PURE__ */ new Map()), { addToQueue: S } = Bo(), { queueNodeInstall: C } = ct(), I = R(() => {
      var Q;
      return ((Q = n.value) == null ? void 0 : Q.package_aliases) || {};
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
      }, H7);
      b.value.set(Q, pe);
    }
    function q(Q) {
      const pe = `Cannot install "${Q.title}" - package_id is missing`;
      u.value.set(Q.item_id, pe), o.value = pe, console.warn("[ComfyGit] Community install requested without package_id:", Q);
    }
    const ue = R(() => ie.value.length > 0 || me.value.length > 0 || oe.value.length > 0 || B.value.length > 0 || ee.value.length > 0), ie = R(() => {
      var P, U;
      if (!((P = n.value) != null && P.nodes)) return [];
      const Q = /* @__PURE__ */ new Map(), pe = (n.value.nodes.resolved || []).filter((J) => {
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
      return (Q = n.value) != null && Q.nodes ? (n.value.nodes.unresolved || []).map((pe) => {
        var P;
        return {
          node_type: ((P = pe.reference) == null ? void 0 : P.node_type) || pe.node_type
        };
      }) : [];
    }), oe = R(() => {
      var pe;
      if (!((pe = n.value) != null && pe.nodes)) return [];
      const Q = n.value.node_guidance || {};
      return (n.value.nodes.version_gated || []).map((P) => {
        var J;
        const U = ((J = P.reference) == null ? void 0 : J.node_type) || P.node_type;
        return {
          node_type: U,
          guidance: P.guidance || Q[U] || null
        };
      });
    }), B = R(() => {
      var P, U, J, Te, Le, Ke, Pe, Ye;
      if (!((P = n.value) != null && P.nodes)) return [];
      const Q = n.value.node_guidance || {}, pe = /* @__PURE__ */ new Map();
      for (const ot of n.value.nodes.uninstallable || []) {
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
      if (!((J = n.value) != null && J.models)) return [];
      const Q = (n.value.models.resolved || []).filter(
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
      }), pe = (n.value.models.unresolved || []).map((Te) => {
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
        n.value = await Le.json(), ue.value && (l.value = !0, pe && g.value.add(pe));
      } catch (Le) {
        console.error("[ComfyGit] Failed to analyze workflow:", Le);
      } finally {
        t.value = !1;
      }
    }
    function _e() {
      V(), l.value = !1, n.value = null;
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
    }), (Q, pe) => (a(), i(W, null, [
      l.value ? (a(), L($t, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: t.value,
        error: o.value || void 0,
        onClose: _e
      }, {
        body: h(() => [
          t.value ? (a(), i("div", KP, [...pe[5] || (pe[5] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("span", null, "Analyzing workflow...", -1)
          ])])) : n.value && ue.value ? (a(), i("div", JP, [
            ie.value.length > 0 ? (a(), i("div", QP, [
              s("div", YP, [
                s("span", XP, "Missing Custom Nodes (" + m(Y.value) + ")", 1),
                ie.value.length > 1 ? (a(), L(Ue, {
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
              s("div", ZP, [
                (a(!0), i(W, null, ye(Me.value, (P) => (a(), i("div", {
                  key: P.package_id,
                  class: "package-item"
                }, [
                  s("div", e7, [
                    s("span", t7, m(P.title), 1),
                    s("span", s7, "(" + m(P.node_count) + " " + m(P.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(P.package_id) && !c.value.has(P.package_id) && !u.value.has(P.package_id) ? (a(), L(Ue, {
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
                  }, 1032, ["disabled", "onClick"])) : f.value === P.package_id ? (a(), i("span", o7, "Installing...")) : c.value.has(P.package_id) ? (a(), i("span", n7, "Queued")) : u.value.has(P.package_id) ? (a(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(P.package_id)
                  }, "Failed ⚠", 8, a7)) : (a(), i("span", l7, "Installed"))
                ]))), 128)),
                ie.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: pe[0] || (pe[0] = (P) => w.value = "packages")
                }, [
                  s("span", null, "Show all " + m(ie.value.length) + " packages...", 1),
                  pe[6] || (pe[6] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            me.value.length > 0 ? (a(), i("div", i7, [
              s("div", r7, [
                s("span", c7, "Unknown Nodes (" + m(me.value.length) + ")", 1)
              ]),
              s("div", u7, [
                (a(!0), i(W, null, ye(me.value.slice(0, 5), (P) => (a(), i("div", {
                  key: P.node_type,
                  class: "item"
                }, [
                  s("code", d7, m(P.node_type), 1),
                  pe[7] || (pe[7] = s("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                me.value.length > 5 ? (a(), i("div", m7, " ...and " + m(me.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            oe.value.length > 0 ? (a(), i("div", f7, [
              s("div", v7, [
                s("span", p7, "Requires Newer ComfyUI (" + m(oe.value.length) + ")", 1)
              ]),
              s("div", g7, [
                (a(!0), i(W, null, ye(oe.value.slice(0, 5), (P) => (a(), i("div", {
                  key: `vg-${P.node_type}`,
                  class: "item"
                }, [
                  s("code", h7, m(P.node_type), 1),
                  s("span", y7, m(P.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                oe.value.length > 5 ? (a(), i("div", w7, " ...and " + m(oe.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            B.value.length > 0 ? (a(), i("div", _7, [
              s("div", k7, [
                s("span", b7, "Community-Mapped Packages (" + m(B.value.length) + ")", 1),
                H.value.length > 1 ? (a(), L(Ue, {
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
              s("div", $7, [
                (a(!0), i(W, null, ye(we.value, (P) => (a(), i("div", {
                  key: `community-${P.item_id}`,
                  class: "package-item"
                }, [
                  s("div", C7, [
                    s("div", x7, [
                      s("span", S7, m(P.title), 1),
                      s("span", I7, "(" + m(P.node_count) + " " + m(P.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    s("div", E7, [
                      pe[8] || (pe[8] = x(" Found via community mapping — registry metadata may be incomplete", -1)),
                      P.guidance ? (a(), i("span", T7, ". " + m(P.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  P.package_id ? (a(), i(W, { key: 0 }, [
                    !r.value.has(P.package_id) && !c.value.has(P.package_id) && !u.value.has(P.package_id) ? (a(), i("div", M7, [
                      ce(P) ? (a(), L(Ue, {
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
                      P.repository ? (a(), L(Ue, {
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
                    ])) : f.value === P.package_id ? (a(), i("span", P7, "Installing...")) : c.value.has(P.package_id) ? (a(), i("span", R7, "Queued")) : u.value.has(P.package_id) ? (a(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get(P.package_id)
                    }, "Failed ⚠", 8, L7)) : (a(), i("span", D7, "Installed"))
                  ], 64)) : (a(), i(W, { key: 1 }, [
                    u.value.has(P.item_id) ? (a(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: u.value.get(P.item_id)
                    }, "Failed ⚠", 8, N7)) : (a(), i("span", U7, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                B.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: pe[1] || (pe[1] = (P) => w.value = "community")
                }, [
                  s("span", null, "Show all " + m(B.value.length) + " packages...", 1),
                  pe[10] || (pe[10] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            ee.value.length > 0 ? (a(), i("div", O7, [
              s("div", A7, [
                s("span", z7, "Missing Models (" + m(ee.value.length) + ")", 1),
                te.value.length > 1 ? (a(), L(Ue, {
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
              s("div", F7, [
                (a(!0), i(W, null, ye(Se.value, (P) => (a(), i("div", {
                  key: P.widget_value,
                  class: "model-item"
                }, [
                  s("div", V7, [
                    s("span", B7, m(P.filename), 1)
                  ]),
                  P.canDownload ? (a(), i(W, { key: 0 }, [
                    d.value.has(P.url) ? (a(), i("span", W7, "Queued")) : (a(), L(Ue, {
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
                  ], 64)) : (a(), i("span", G7, "Manual download required"))
                ]))), 128)),
                ee.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: pe[2] || (pe[2] = (P) => w.value = "models")
                }, [
                  s("span", null, "Show all " + m(ee.value.length) + " models...", 1),
                  pe[12] || (pe[12] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            s("div", j7, [
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
          be.value ? (a(), L(Ue, {
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
      w.value ? (a(), L(qP, {
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
}), K7 = /* @__PURE__ */ Ie(q7, [["__scopeId", "data-v-4e0ac755"]]), J7 = {
  key: 0,
  class: "io-mapping-root"
}, Q7 = { class: "io-mapping-visual-layer" }, Y7 = { class: "io-mapping-header" }, X7 = { class: "io-mapping-header-main" }, Z7 = { class: "io-mapping-subtitle" }, eR = {
  key: 0,
  class: "io-mapping-hover-summary"
}, tR = { class: "io-mapping-header-actions" }, sR = { class: "io-mapping-sidebar" }, oR = { class: "io-mapping-sidebar-scroll" }, nR = {
  key: 0,
  class: "io-state-block"
}, aR = {
  key: 1,
  class: "io-state-block io-state-error"
}, lR = { class: "contract-meta-section" }, iR = { class: "contract-meta-toggle-icon" }, rR = {
  key: 0,
  class: "contract-meta-body"
}, cR = { class: "contract-summary" }, uR = { class: "summary-pill" }, dR = { class: "summary-pill" }, mR = { class: "summary-pill" }, fR = { class: "mapping-section" }, vR = { class: "section-header" }, pR = {
  key: 0,
  class: "empty-message"
}, gR = ["onClick"], hR = { class: "item-card-title" }, yR = { class: "item-card-meta" }, wR = { class: "item-card-summary" }, _R = { key: 0 }, kR = { class: "mapping-section" }, bR = { class: "section-header" }, $R = {
  key: 0,
  class: "empty-message"
}, CR = ["onClick"], xR = { class: "item-card-title" }, SR = { class: "item-card-meta" }, IR = { class: "item-card-summary" }, ER = { class: "io-mapping-footer" }, TR = { class: "io-mapping-footer-left" }, MR = { class: "io-mapping-footer-right" }, PR = /* @__PURE__ */ xe({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: o, saveWorkflowContract: n, deleteWorkflowContract: l } = ct(), r = k(!1), c = k(""), u = k(!1), d = k(!1), v = k(!1), f = k(null), p = k(null), w = k(null), g = k(!1), _ = k(!1), b = k(null), S = k(null), C = k(0), I = k(null), E = k(null);
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
      var It, Bt, Ct, Mt, os, Et, Hs, Ls, qs, Ks;
      if (Ae(P.target)) return null;
      const U = (It = t.comfyApp) == null ? void 0 : It.canvas;
      if (!U) return null;
      const J = (Bt = U.convertEventToCanvasOffset) == null ? void 0 : Bt.call(U, P);
      if (!J || J.length < 2) return null;
      const [Te, Le] = J, Ke = U.graph || ((Ct = t.comfyApp) == null ? void 0 : Ct.graph) || ((Mt = t.comfyApp) == null ? void 0 : Mt.rootGraph), Pe = ((os = Ke == null ? void 0 : Ke.getNodeOnPos) == null ? void 0 : os.call(Ke, Te, Le, U.visible_nodes)) || ((Et = U.getNodeOnPos) == null ? void 0 : Et.call(U, Te, Le)) || ge(P.target);
      if (!Pe) return null;
      const Ye = (Hs = Pe.getWidgetOnPos) == null ? void 0 : Hs.call(Pe, Te, Le, !0);
      if (Ye)
        return { kind: "input", node: Pe, widget: Ye, canvasX: Te, canvasY: Le };
      const ot = ((Ls = Pe.getOutputOnPos) == null ? void 0 : Ls.call(Pe, [Te, Le])) || ((Ks = (qs = Pe.constructor) == null ? void 0 : qs.nodeData) != null && Ks.output_node ? { name: Pe.title || Pe.type || "output", type: "image" } : null);
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
          p.value = await n(c.value, w.value), w.value = ue(p.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
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
    }), (P, U) => r.value ? (a(), i("div", J7, [
      s("div", Q7, [
        (a(!0), i(W, null, ye(Ee.value, (J) => (a(), i("div", {
          key: J.key,
          class: Be(["io-highlight", "io-highlight-input", { active: J.active }]),
          style: Nt(J.style)
        }, null, 6))), 128)),
        (a(!0), i(W, null, ye(ke.value, (J) => (a(), i("div", {
          key: J.key,
          class: Be(["io-highlight", "io-highlight-output", { active: J.active }]),
          style: Nt(J.style)
        }, null, 6))), 128)),
        E.value ? (a(), i("div", {
          key: 0,
          class: Be(["io-highlight", E.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Nt(E.value.style)
        }, null, 6)) : y("", !0)
      ]),
      s("div", Y7, [
        s("div", X7, [
          U[8] || (U[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", Z7, m(c.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          I.value ? (a(), i("div", eR, " Hovering " + m(I.value.kind) + ": " + m(I.value.label), 1)) : y("", !0)
        ]),
        s("div", tR, [
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
      s("aside", sR, [
        s("div", oR, [
          u.value ? (a(), i("div", nR, " Loading workflow contract... ")) : f.value ? (a(), i("div", aR, m(f.value), 1)) : w.value ? (a(), i(W, { key: 2 }, [
            s("section", lR, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: U[1] || (U[1] = (J) => g.value = !g.value)
              }, [
                U[10] || (U[10] = s("span", null, "Contract Details", -1)),
                s("span", iR, m(g.value ? "▾" : "▸"), 1)
              ]),
              g.value ? (a(), i("div", rR, [
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
            s("section", cR, [
              s("span", uR, m(q.value), 1),
              s("span", dR, m(D.value.inputs.length) + " input" + m(D.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", mR, m(D.value.outputs.length) + " output" + m(D.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", fR, [
              s("div", vR, [
                $(fo, { variant: "section" }, {
                  default: h(() => [...U[11] || (U[11] = [
                    x("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              D.value.inputs.length ? y("", !0) : (a(), i("div", pR, " No inputs configured. ")),
              (a(!0), i(W, null, ye(D.value.inputs, (J, Te) => (a(), i("div", {
                key: `input-${Te}`,
                class: Be(["item-card", { selected: b.value === Te }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Le) => ze(Te)
                }, [
                  s("div", null, [
                    s("div", hR, m(J.name || `Input ${Te + 1}`), 1),
                    s("div", yR, [
                      x(" Node " + m(J.node_id || "?"), 1),
                      J.widget_idx !== void 0 ? (a(), i(W, { key: 0 }, [
                        x(" · Widget " + m(J.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", wR, [
                      s("span", null, m(J.type || "string"), 1),
                      s("span", null, m(J.required ? "required" : "optional"), 1),
                      J.default !== void 0 && J.default !== "" ? (a(), i("span", _R, "default " + m(we(J.default)), 1)) : y("", !0)
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
                ], 8, gR),
                b.value === Te ? (a(), i("div", {
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
                      J.type === "string" ? (a(), L(Lo, {
                        key: 0,
                        "model-value": se(J.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (Le) => J.default = Le
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (a(), L(bt, {
                        key: 1,
                        modelValue: J.default,
                        "onUpdate:modelValue": (Le) => J.default = Le,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  ie(J.type) ? (a(), L(Ot, {
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
                  ie(J.type) ? (a(), L(Ot, {
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
                  Y(J.type) ? (a(), L(Ot, {
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
            s("section", kR, [
              s("div", bR, [
                $(fo, { variant: "section" }, {
                  default: h(() => [...U[13] || (U[13] = [
                    x("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              D.value.outputs.length ? y("", !0) : (a(), i("div", $R, " No outputs configured. ")),
              (a(!0), i(W, null, ye(D.value.outputs, (J, Te) => (a(), i("div", {
                key: `output-${Te}`,
                class: Be(["item-card", { selected: S.value === Te }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Le) => Ne(Te)
                }, [
                  s("div", null, [
                    s("div", xR, m(J.name || `Output ${Te + 1}`), 1),
                    s("div", SR, [
                      x(" Node " + m(J.node_id || "?"), 1),
                      J.selector ? (a(), i(W, { key: 0 }, [
                        x(" · " + m(J.selector), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", IR, [
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
                ], 8, CR),
                S.value === Te ? (a(), i("div", {
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
        s("div", ER, [
          s("div", TR, [
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
          s("div", MR, [
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
      _.value ? (a(), L(Pl, {
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
}), RR = /* @__PURE__ */ Ie(PR, [["__scopeId", "data-v-13515b27"]]), LR = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', DR = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', NR = {
  comfy: LR,
  phosphor: DR
}, Dl = "comfy", Rc = "comfygit-theme";
let io = null, Lc = Dl;
function UR() {
  try {
    const e = localStorage.getItem(Rc);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Dl;
}
function Dc(e = Dl) {
  io && io.remove(), io = document.createElement("style"), io.id = "comfygit-theme-styles", io.setAttribute("data-theme", e), io.textContent = NR[e], document.head.appendChild(io), document.body.setAttribute("data-comfygit-theme", e), Lc = e;
  try {
    localStorage.setItem(Rc, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function OR() {
  return Lc;
}
function AR(e) {
  Dc(e);
}
function zR(e) {
  var r;
  const { ui_id: t, state: o } = e || {}, n = (o == null ? void 0 : o.history) || {};
  if (!t)
    return null;
  const l = n[t];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Oi = "ComfyGit.DevAutoReload", Nc = "ComfyGit.DevAutoReload.PanelOpen";
function FR() {
  const e = new URLSearchParams(window.location.search).get("comfygitDevReload");
  return e === null ? null : e;
}
function wa() {
  const e = FR();
  if (e !== null) {
    const t = e !== "0" && e !== "false";
    try {
      localStorage.setItem(Oi, t ? "true" : "false");
    } catch {
    }
    return t;
  }
  try {
    return localStorage.getItem(Oi) === "true";
  } catch {
    return !1;
  }
}
function Uc(e) {
  if (wa())
    try {
      sessionStorage.setItem(Nc, e ? "true" : "false");
    } catch {
    }
}
function VR() {
  if (!wa()) return !1;
  try {
    return sessionStorage.getItem(Nc) === "true";
  } catch {
    return !1;
  }
}
async function Ai(e) {
  const t = await fetch(e, { cache: "no-store", method: "HEAD" });
  if (t.ok) {
    const u = t.headers, d = u.get("etag"), v = u.get("last-modified"), f = u.get("content-length");
    if (d || v)
      return [d, v, f].filter(Boolean).join(":");
  }
  const o = await fetch(e, { cache: "no-store", method: "GET" });
  if (!o.ok) return null;
  const n = o.headers, l = [
    n.get("etag"),
    n.get("last-modified"),
    n.get("content-length")
  ].filter(Boolean).join(":"), r = await o.text();
  let c = 0;
  for (let u = 0; u < r.length; u += 1)
    c = (c << 5) - c + r.charCodeAt(u) | 0;
  return `${l}:${r.length}:${c}`;
}
async function BR(e) {
  if (!wa()) return;
  const t = e.map((n) => ({
    ...n,
    signature: null
  }));
  for (const n of t)
    try {
      n.signature = await Ai(n.url);
    } catch (l) {
      console.warn(`[ComfyGit] Dev auto-reload could not read ${n.name}:`, l);
    }
  console.log("[ComfyGit] Dev auto-reload enabled");
  let o = !1;
  window.setInterval(async () => {
    if (!o)
      for (const n of t)
        try {
          const l = await Ai(n.url);
          if (n.signature && l && l !== n.signature) {
            o = !0, console.log(`[ComfyGit] ${n.name} changed, reloading page...`), window.setTimeout(() => window.location.reload(), 500);
            return;
          }
          l && (n.signature = l);
        } catch {
        }
  }, 1e3);
}
const WR = "./comfygit-panel.css", GR = "./comfygit-panel.js", Oc = new URL(WR, import.meta.url).href, jR = new URL(GR, import.meta.url).href, Nl = document.createElement("link");
Nl.rel = "stylesheet";
Nl.href = Oc;
document.head.appendChild(Nl);
const HR = UR();
Dc(HR);
wa() || (sessionStorage.removeItem("ComfyGit.LastView"), sessionStorage.removeItem("ComfyGit.LastSection"));
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), AR(e);
  },
  getTheme: () => {
    const e = OR();
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
let Ts = null, vn = null, as = null, pn = null, Yo = null, zi = null, Xo = null, Fi = null, Zo = null, Vi = null;
const Do = k(null);
let $n = "no_workspace", Ac = !1;
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
        $n = o.state, Ac = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function il() {
  var t;
  if ($n === "managed" || !Ac) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((t = o.textContent) == null ? void 0 : t.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function qR() {
  if (!Do.value) return !1;
  const e = Do.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Do.value.has_changes;
}
function en(e) {
  nn(), Uc(!0), Ts = document.createElement("div"), Ts.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", Ts.appendChild(t), Ts.addEventListener("click", (n) => {
    n.target === Ts && nn();
  });
  const o = (n) => {
    n.key === "Escape" && (nn(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), vn = En({
    render: () => Fo(zM, {
      initialView: e,
      onClose: nn,
      onStatusUpdate: async (n) => {
        Do.value = n, So(), await ll(), Kn(), il();
      }
    })
  }), vn.mount(t), document.body.appendChild(Ts);
}
function nn() {
  Uc(!1), vn && (vn.unmount(), vn = null), Ts && (Ts.remove(), Ts = null);
}
function Bi(e) {
  tn(), as = document.createElement("div"), as.className = "comfygit-commit-popover-container";
  const t = e.getBoundingClientRect();
  as.style.position = "fixed", as.style.top = `${t.bottom + 8}px`, as.style.right = `${window.innerWidth - t.right}px`, as.style.zIndex = "10001";
  const o = (l) => {
    as && !as.contains(l.target) && l.target !== e && (tn(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const n = (l) => {
    l.key === "Escape" && (tn(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), pn = En({
    render: () => Fo(Ec, {
      status: Do.value,
      onClose: tn,
      onCommitted: (l) => {
        tn(), KR(l.success, l.message), on().then(So);
      }
    })
  }), pn.mount(as), document.body.appendChild(as);
}
function tn() {
  pn && (pn.unmount(), pn = null), as && (as.remove(), as = null);
}
function KR(e, t) {
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
function JR() {
  Yo || (Yo = document.createElement("div"), Yo.className = "comfygit-download-queue-root", zi = En({
    render: () => Fo(LP)
  }), zi.mount(Yo), document.body.appendChild(Yo), console.log("[ComfyGit] Model download queue mounted"));
}
function QR() {
  Xo || (Xo = document.createElement("div"), Xo.className = "comfygit-missing-resources-root", Fi = En({
    render: () => Fo(K7)
  }), Fi.mount(Xo), document.body.appendChild(Xo), console.log("[ComfyGit] Missing resources popup mounted"));
}
function YR() {
  Zo || (Zo = document.createElement("div"), Zo.className = "comfygit-io-mapping-root", Vi = En({
    render: () => Fo(RR, {
      comfyApp: Ss
    })
  }), Vi.mount(Zo), document.body.appendChild(Zo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let Yt = null;
function So() {
  if (!Yt) return;
  const e = Yt.querySelector(".commit-indicator");
  e && (e.style.display = qR() ? "block" : "none");
}
function Kn() {
  if (!Yt) return;
  const e = $n !== "managed";
  Yt.disabled = e, Yt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const zc = document.createElement("style");
zc.textContent = `
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
document.head.appendChild(zc);
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
        Yt && !Yt.disabled && Bi(Yt);
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
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = () => en(), Yt = document.createElement("button"), Yt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Yt.innerHTML = 'Commit <span class="commit-indicator"></span>', Yt.title = "Quick Commit", Yt.onclick = () => Bi(Yt), e.appendChild(t), e.appendChild(Yt), (r = (l = Ss.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Ss.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), JR(), QR(), YR(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      en(u);
    })), window.addEventListener("comfygit:close-panel", (() => {
      nn();
    })), window.addEventListener("comfygit:status-refresh", (async () => {
      await on(), So(), Kn();
    }));
    const { loadPendingDownloads: o } = Bo();
    o(), await Promise.all([on(), ll()]), So(), Kn(), il(), VR() && setTimeout(() => {
      Ts || en();
    }, 100), BR([
      { name: "panel script", url: jR },
      { name: "panel stylesheet", url: Oc }
    ]), setTimeout(il, 100), setInterval(async () => {
      await Promise.all([on(), ll()]), So(), Kn();
    }, 3e4);
    const n = Vo();
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
            n.addEventListener("reconnected", M, { once: !0 }), await fetch("/v2/manager/reboot");
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
      n.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: w, workflow_name: g } = p.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${g}`), await on(), So();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let f = !1;
      n.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !f && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), f = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (p) => {
        const w = zR(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: g = 1 } = w.detail || {};
        v(g);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
