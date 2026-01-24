import { app as Bt } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ra(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const st = {}, uo = [], ps = () => {
}, Zl = () => !1, Ln = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ma = (e) => e.startsWith("onUpdate:"), gt = Object.assign, Da = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, Vr = Object.prototype.hasOwnProperty, Ze = (e, s) => Vr.call(e, s), Be = Array.isArray, fo = (e) => Zo(e) === "[object Map]", _o = (e) => Zo(e) === "[object Set]", al = (e) => Zo(e) === "[object Date]", je = (e) => typeof e == "function", dt = (e) => typeof e == "string", ts = (e) => typeof e == "symbol", tt = (e) => e !== null && typeof e == "object", ei = (e) => (tt(e) || je(e)) && je(e.then) && je(e.catch), ti = Object.prototype.toString, Zo = (e) => ti.call(e), Wr = (e) => Zo(e).slice(8, -1), si = (e) => Zo(e) === "[object Object]", La = (e) => dt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Oo = /* @__PURE__ */ Ra(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), On = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, Gr = /-\w/g, jt = On(
  (e) => e.replace(Gr, (s) => s.slice(1).toUpperCase())
), jr = /\B([A-Z])/g, Fs = On(
  (e) => e.replace(jr, "-$1").toLowerCase()
), An = On((e) => e.charAt(0).toUpperCase() + e.slice(1)), Yn = On(
  (e) => e ? `on${An(e)}` : ""
), Ns = (e, s) => !Object.is(e, s), pn = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, oi = (e, s, o, n = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, Nn = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, Hr = (e) => {
  const s = dt(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let ll;
const Un = () => ll || (ll = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ht(e) {
  if (Be(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = dt(n) ? Jr(n) : Ht(n);
      if (l)
        for (const i in l)
          s[i] = l[i];
    }
    return s;
  } else if (dt(e) || tt(e))
    return e;
}
const Kr = /;(?![^(]*\))/g, qr = /:([^]+)/, Yr = /\/\*[^]*?\*\//g;
function Jr(e) {
  const s = {};
  return e.replace(Yr, "").split(Kr).forEach((o) => {
    if (o) {
      const n = o.split(qr);
      n.length > 1 && (s[n[0].trim()] = n[1].trim());
    }
  }), s;
}
function Te(e) {
  let s = "";
  if (dt(e))
    s = e;
  else if (Be(e))
    for (let o = 0; o < e.length; o++) {
      const n = Te(e[o]);
      n && (s += n + " ");
    }
  else if (tt(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const Xr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Qr = /* @__PURE__ */ Ra(Xr);
function ni(e) {
  return !!e || e === "";
}
function Zr(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = Zs(e[n], s[n]);
  return o;
}
function Zs(e, s) {
  if (e === s) return !0;
  let o = al(e), n = al(s);
  if (o || n)
    return o && n ? e.getTime() === s.getTime() : !1;
  if (o = ts(e), n = ts(s), o || n)
    return e === s;
  if (o = Be(e), n = Be(s), o || n)
    return o && n ? Zr(e, s) : !1;
  if (o = tt(e), n = tt(s), o || n) {
    if (!o || !n)
      return !1;
    const l = Object.keys(e).length, i = Object.keys(s).length;
    if (l !== i)
      return !1;
    for (const c in e) {
      const d = e.hasOwnProperty(c), u = s.hasOwnProperty(c);
      if (d && !u || !d && u || !Zs(e[c], s[c]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function Oa(e, s) {
  return e.findIndex((o) => Zs(o, s));
}
const ai = (e) => !!(e && e.__v_isRef === !0), f = (e) => dt(e) ? e : e == null ? "" : Be(e) || tt(e) && (e.toString === ti || !je(e.toString)) ? ai(e) ? f(e.value) : JSON.stringify(e, li, 2) : String(e), li = (e, s) => ai(s) ? li(e, s.value) : fo(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [n, l], i) => (o[Jn(n, i) + " =>"] = l, o),
    {}
  )
} : _o(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => Jn(o))
} : ts(s) ? Jn(s) : tt(s) && !Be(s) && !si(s) ? String(s) : s, Jn = (e, s = "") => {
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
class ec {
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
function tc() {
  return Lt;
}
let nt;
const Xn = /* @__PURE__ */ new WeakSet();
class ii {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Lt && Lt.active && Lt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Xn.has(this) && (Xn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ci(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, il(this), di(this);
    const s = nt, o = Qt;
    nt = this, Qt = !0;
    try {
      return this.fn();
    } finally {
      ui(this), nt = s, Qt = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        Ua(s);
      this.deps = this.depsTail = void 0, il(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Xn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    va(this) && this.run();
  }
  get dirty() {
    return va(this);
  }
}
let ri = 0, Ao, No;
function ci(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = No, No = e;
    return;
  }
  e.next = Ao, Ao = e;
}
function Aa() {
  ri++;
}
function Na() {
  if (--ri > 0)
    return;
  if (No) {
    let s = No;
    for (No = void 0; s; ) {
      const o = s.next;
      s.next = void 0, s.flags &= -9, s = o;
    }
  }
  let e;
  for (; Ao; ) {
    let s = Ao;
    for (Ao = void 0; s; ) {
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
function di(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function ui(e) {
  let s, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), Ua(n), sc(n)) : s = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = s, e.depsTail = o;
}
function va(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (fi(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function fi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === jo) || (e.globalVersion = jo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !va(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = nt, n = Qt;
  nt = e, Qt = !0;
  try {
    di(e);
    const l = e.fn(e._value);
    (s.version === 0 || Ns(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    nt = o, Qt = n, ui(e), e.flags &= -3;
  }
}
function Ua(e, s = !1) {
  const { dep: o, prevSub: n, nextSub: l } = e;
  if (n && (n.nextSub = l, e.prevSub = void 0), l && (l.prevSub = n, e.nextSub = void 0), o.subs === e && (o.subs = n, !n && o.computed)) {
    o.computed.flags &= -5;
    for (let i = o.computed.deps; i; i = i.nextDep)
      Ua(i, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function sc(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let Qt = !0;
const mi = [];
function xs() {
  mi.push(Qt), Qt = !1;
}
function Ss() {
  const e = mi.pop();
  Qt = e === void 0 ? !0 : e;
}
function il(e) {
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
let jo = 0;
class oc {
  constructor(s, o) {
    this.sub = s, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class za {
  // TODO isolatedDeclarations "__v_skip"
  constructor(s) {
    this.computed = s, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(s) {
    if (!nt || !Qt || nt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== nt)
      o = this.activeLink = new oc(nt, this), nt.deps ? (o.prevDep = nt.depsTail, nt.depsTail.nextDep = o, nt.depsTail = o) : nt.deps = nt.depsTail = o, vi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const n = o.nextDep;
      n.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = n), o.prevDep = nt.depsTail, o.nextDep = void 0, nt.depsTail.nextDep = o, nt.depsTail = o, nt.deps === o && (nt.deps = n);
    }
    return o;
  }
  trigger(s) {
    this.version++, jo++, this.notify(s);
  }
  notify(s) {
    Aa();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      Na();
    }
  }
}
function vi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let n = s.deps; n; n = n.nextDep)
        vi(n);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const pa = /* @__PURE__ */ new WeakMap(), Xs = Symbol(
  ""
), ga = Symbol(
  ""
), Ho = Symbol(
  ""
);
function _t(e, s, o) {
  if (Qt && nt) {
    let n = pa.get(e);
    n || pa.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new za()), l.map = n, l.key = o), l.track();
  }
}
function ks(e, s, o, n, l, i) {
  const c = pa.get(e);
  if (!c) {
    jo++;
    return;
  }
  const d = (u) => {
    u && u.trigger();
  };
  if (Aa(), s === "clear")
    c.forEach(d);
  else {
    const u = Be(e), m = u && La(o);
    if (u && o === "length") {
      const v = Number(n);
      c.forEach((g, w) => {
        (w === "length" || w === Ho || !ts(w) && w >= v) && d(g);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && d(c.get(o)), m && d(c.get(Ho)), s) {
        case "add":
          u ? m && d(c.get("length")) : (d(c.get(Xs)), fo(e) && d(c.get(ga)));
          break;
        case "delete":
          u || (d(c.get(Xs)), fo(e) && d(c.get(ga)));
          break;
        case "set":
          fo(e) && d(c.get(Xs));
          break;
      }
  }
  Na();
}
function no(e) {
  const s = Xe(e);
  return s === e ? s : (_t(s, "iterate", Ho), Wt(e) ? s : s.map(ss));
}
function zn(e) {
  return _t(e = Xe(e), "iterate", Ho), e;
}
function Ls(e, s) {
  return Is(e) ? Qs(e) ? ho(ss(s)) : ho(s) : ss(s);
}
const nc = {
  __proto__: null,
  [Symbol.iterator]() {
    return Qn(this, Symbol.iterator, (e) => Ls(this, e));
  },
  concat(...e) {
    return no(this).concat(
      ...e.map((s) => Be(s) ? no(s) : s)
    );
  },
  entries() {
    return Qn(this, "entries", (e) => (e[1] = Ls(this, e[1]), e));
  },
  every(e, s) {
    return ws(this, "every", e, s, void 0, arguments);
  },
  filter(e, s) {
    return ws(
      this,
      "filter",
      e,
      s,
      (o) => o.map((n) => Ls(this, n)),
      arguments
    );
  },
  find(e, s) {
    return ws(
      this,
      "find",
      e,
      s,
      (o) => Ls(this, o),
      arguments
    );
  },
  findIndex(e, s) {
    return ws(this, "findIndex", e, s, void 0, arguments);
  },
  findLast(e, s) {
    return ws(
      this,
      "findLast",
      e,
      s,
      (o) => Ls(this, o),
      arguments
    );
  },
  findLastIndex(e, s) {
    return ws(this, "findLastIndex", e, s, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, s) {
    return ws(this, "forEach", e, s, void 0, arguments);
  },
  includes(...e) {
    return Zn(this, "includes", e);
  },
  indexOf(...e) {
    return Zn(this, "indexOf", e);
  },
  join(e) {
    return no(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Zn(this, "lastIndexOf", e);
  },
  map(e, s) {
    return ws(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return Io(this, "pop");
  },
  push(...e) {
    return Io(this, "push", e);
  },
  reduce(e, ...s) {
    return rl(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return rl(this, "reduceRight", e, s);
  },
  shift() {
    return Io(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return ws(this, "some", e, s, void 0, arguments);
  },
  splice(...e) {
    return Io(this, "splice", e);
  },
  toReversed() {
    return no(this).toReversed();
  },
  toSorted(e) {
    return no(this).toSorted(e);
  },
  toSpliced(...e) {
    return no(this).toSpliced(...e);
  },
  unshift(...e) {
    return Io(this, "unshift", e);
  },
  values() {
    return Qn(this, "values", (e) => Ls(this, e));
  }
};
function Qn(e, s, o) {
  const n = zn(e), l = n[s]();
  return n !== e && !Wt(e) && (l._next = l.next, l.next = () => {
    const i = l._next();
    return i.done || (i.value = o(i.value)), i;
  }), l;
}
const ac = Array.prototype;
function ws(e, s, o, n, l, i) {
  const c = zn(e), d = c !== e && !Wt(e), u = c[s];
  if (u !== ac[s]) {
    const g = u.apply(e, i);
    return d ? ss(g) : g;
  }
  let m = o;
  c !== e && (d ? m = function(g, w) {
    return o.call(this, Ls(e, g), w, e);
  } : o.length > 2 && (m = function(g, w) {
    return o.call(this, g, w, e);
  }));
  const v = u.call(c, m, n);
  return d && l ? l(v) : v;
}
function rl(e, s, o, n) {
  const l = zn(e);
  let i = o;
  return l !== e && (Wt(e) ? o.length > 3 && (i = function(c, d, u) {
    return o.call(this, c, d, u, e);
  }) : i = function(c, d, u) {
    return o.call(this, c, Ls(e, d), u, e);
  }), l[s](i, ...n);
}
function Zn(e, s, o) {
  const n = Xe(e);
  _t(n, "iterate", Ho);
  const l = n[s](...o);
  return (l === -1 || l === !1) && Va(o[0]) ? (o[0] = Xe(o[0]), n[s](...o)) : l;
}
function Io(e, s, o = []) {
  xs(), Aa();
  const n = Xe(e)[s].apply(e, o);
  return Na(), Ss(), n;
}
const lc = /* @__PURE__ */ Ra("__proto__,__v_isRef,__isVue"), pi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ts)
);
function ic(e) {
  ts(e) || (e = String(e));
  const s = Xe(this);
  return _t(s, "has", e), s.hasOwnProperty(e);
}
class gi {
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
      return n === (l ? i ? hc : _i : i ? wi : yi).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(n) ? s : void 0;
    const c = Be(s);
    if (!l) {
      let u;
      if (c && (u = nc[o]))
        return u;
      if (o === "hasOwnProperty")
        return ic;
    }
    const d = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      $t(s) ? s : n
    );
    if ((ts(o) ? pi.has(o) : lc(o)) || (l || _t(s, "get", o), i))
      return d;
    if ($t(d)) {
      const u = c && La(o) ? d : d.value;
      return l && tt(u) ? kn(u) : u;
    }
    return tt(d) ? l ? kn(d) : Bs(d) : d;
  }
}
class hi extends gi {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, n, l) {
    let i = s[o];
    const c = Be(s) && La(o);
    if (!this._isShallow) {
      const m = Is(i);
      if (!Wt(n) && !Is(n) && (i = Xe(i), n = Xe(n)), !c && $t(i) && !$t(n))
        return m || (i.value = n), !0;
    }
    const d = c ? Number(o) < s.length : Ze(s, o), u = Reflect.set(
      s,
      o,
      n,
      $t(s) ? s : l
    );
    return s === Xe(l) && (d ? Ns(n, i) && ks(s, "set", o, n) : ks(s, "add", o, n)), u;
  }
  deleteProperty(s, o) {
    const n = Ze(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && n && ks(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const n = Reflect.has(s, o);
    return (!ts(o) || !pi.has(o)) && _t(s, "has", o), n;
  }
  ownKeys(s) {
    return _t(
      s,
      "iterate",
      Be(s) ? "length" : Xs
    ), Reflect.ownKeys(s);
  }
}
class rc extends gi {
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
const cc = /* @__PURE__ */ new hi(), dc = /* @__PURE__ */ new rc(), uc = /* @__PURE__ */ new hi(!0);
const ha = (e) => e, nn = (e) => Reflect.getPrototypeOf(e);
function fc(e, s, o) {
  return function(...n) {
    const l = this.__v_raw, i = Xe(l), c = fo(i), d = e === "entries" || e === Symbol.iterator && c, u = e === "keys" && c, m = l[e](...n), v = o ? ha : s ? ho : ss;
    return !s && _t(
      i,
      "iterate",
      u ? ga : Xs
    ), {
      // iterator protocol
      next() {
        const { value: g, done: w } = m.next();
        return w ? { value: g, done: w } : {
          value: d ? [v(g[0]), v(g[1])] : v(g),
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
function an(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function mc(e, s) {
  const o = {
    get(l) {
      const i = this.__v_raw, c = Xe(i), d = Xe(l);
      e || (Ns(l, d) && _t(c, "get", l), _t(c, "get", d));
      const { has: u } = nn(c), m = s ? ha : e ? ho : ss;
      if (u.call(c, l))
        return m(i.get(l));
      if (u.call(c, d))
        return m(i.get(d));
      i !== c && i.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && _t(Xe(l), "iterate", Xs), l.size;
    },
    has(l) {
      const i = this.__v_raw, c = Xe(i), d = Xe(l);
      return e || (Ns(l, d) && _t(c, "has", l), _t(c, "has", d)), l === d ? i.has(l) : i.has(l) || i.has(d);
    },
    forEach(l, i) {
      const c = this, d = c.__v_raw, u = Xe(d), m = s ? ha : e ? ho : ss;
      return !e && _t(u, "iterate", Xs), d.forEach((v, g) => l.call(i, m(v), m(g), c));
    }
  };
  return gt(
    o,
    e ? {
      add: an("add"),
      set: an("set"),
      delete: an("delete"),
      clear: an("clear")
    } : {
      add(l) {
        !s && !Wt(l) && !Is(l) && (l = Xe(l));
        const i = Xe(this);
        return nn(i).has.call(i, l) || (i.add(l), ks(i, "add", l, l)), this;
      },
      set(l, i) {
        !s && !Wt(i) && !Is(i) && (i = Xe(i));
        const c = Xe(this), { has: d, get: u } = nn(c);
        let m = d.call(c, l);
        m || (l = Xe(l), m = d.call(c, l));
        const v = u.call(c, l);
        return c.set(l, i), m ? Ns(i, v) && ks(c, "set", l, i) : ks(c, "add", l, i), this;
      },
      delete(l) {
        const i = Xe(this), { has: c, get: d } = nn(i);
        let u = c.call(i, l);
        u || (l = Xe(l), u = c.call(i, l)), d && d.call(i, l);
        const m = i.delete(l);
        return u && ks(i, "delete", l, void 0), m;
      },
      clear() {
        const l = Xe(this), i = l.size !== 0, c = l.clear();
        return i && ks(
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
    o[l] = fc(l, e, s);
  }), o;
}
function Fa(e, s) {
  const o = mc(e, s);
  return (n, l, i) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    Ze(o, l) && l in n ? o : n,
    l,
    i
  );
}
const vc = {
  get: /* @__PURE__ */ Fa(!1, !1)
}, pc = {
  get: /* @__PURE__ */ Fa(!1, !0)
}, gc = {
  get: /* @__PURE__ */ Fa(!0, !1)
};
const yi = /* @__PURE__ */ new WeakMap(), wi = /* @__PURE__ */ new WeakMap(), _i = /* @__PURE__ */ new WeakMap(), hc = /* @__PURE__ */ new WeakMap();
function yc(e) {
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
function wc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : yc(Wr(e));
}
function Bs(e) {
  return Is(e) ? e : Ba(
    e,
    !1,
    cc,
    vc,
    yi
  );
}
function _c(e) {
  return Ba(
    e,
    !1,
    uc,
    pc,
    wi
  );
}
function kn(e) {
  return Ba(
    e,
    !0,
    dc,
    gc,
    _i
  );
}
function Ba(e, s, o, n, l) {
  if (!tt(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const i = wc(e);
  if (i === 0)
    return e;
  const c = l.get(e);
  if (c)
    return c;
  const d = new Proxy(
    e,
    i === 2 ? n : o
  );
  return l.set(e, d), d;
}
function Qs(e) {
  return Is(e) ? Qs(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Is(e) {
  return !!(e && e.__v_isReadonly);
}
function Wt(e) {
  return !!(e && e.__v_isShallow);
}
function Va(e) {
  return e ? !!e.__v_raw : !1;
}
function Xe(e) {
  const s = e && e.__v_raw;
  return s ? Xe(s) : e;
}
function bc(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && oi(e, "__v_skip", !0), e;
}
const ss = (e) => tt(e) ? Bs(e) : e, ho = (e) => tt(e) ? kn(e) : e;
function $t(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return kc(e, !1);
}
function kc(e, s) {
  return $t(e) ? e : new $c(e, s);
}
class $c {
  constructor(s, o) {
    this.dep = new za(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : Xe(s), this._value = o ? s : ss(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, n = this.__v_isShallow || Wt(s) || Is(s);
    s = n ? s : Xe(s), Ns(s, o) && (this._rawValue = s, this._value = n ? s : ss(s), this.dep.trigger());
  }
}
function We(e) {
  return $t(e) ? e.value : e;
}
const Cc = {
  get: (e, s, o) => s === "__v_raw" ? e : We(Reflect.get(e, s, o)),
  set: (e, s, o, n) => {
    const l = e[s];
    return $t(l) && !$t(o) ? (l.value = o, !0) : Reflect.set(e, s, o, n);
  }
};
function bi(e) {
  return Qs(e) ? e : new Proxy(e, Cc);
}
class xc {
  constructor(s, o, n) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new za(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = jo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    nt !== this)
      return ci(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return fi(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function Sc(e, s, o = !1) {
  let n, l;
  return je(e) ? n = e : (n = e.get, l = e.set), new xc(n, l, o);
}
const ln = {}, $n = /* @__PURE__ */ new WeakMap();
let Ys;
function Ic(e, s = !1, o = Ys) {
  if (o) {
    let n = $n.get(o);
    n || $n.set(o, n = []), n.push(e);
  }
}
function Ec(e, s, o = st) {
  const { immediate: n, deep: l, once: i, scheduler: c, augmentJob: d, call: u } = o, m = (x) => l ? x : Wt(x) || l === !1 || l === 0 ? $s(x, 1) : $s(x);
  let v, g, w, p, _ = !1, S = !1;
  if ($t(e) ? (g = () => e.value, _ = Wt(e)) : Qs(e) ? (g = () => m(e), _ = !0) : Be(e) ? (S = !0, _ = e.some((x) => Qs(x) || Wt(x)), g = () => e.map((x) => {
    if ($t(x))
      return x.value;
    if (Qs(x))
      return m(x);
    if (je(x))
      return u ? u(x, 2) : x();
  })) : je(e) ? s ? g = u ? () => u(e, 2) : e : g = () => {
    if (w) {
      xs();
      try {
        w();
      } finally {
        Ss();
      }
    }
    const x = Ys;
    Ys = v;
    try {
      return u ? u(e, 3, [p]) : e(p);
    } finally {
      Ys = x;
    }
  } : g = ps, s && l) {
    const x = g, K = l === !0 ? 1 / 0 : l;
    g = () => $s(x(), K);
  }
  const $ = tc(), P = () => {
    v.stop(), $ && $.active && Da($.effects, v);
  };
  if (i && s) {
    const x = s;
    s = (...K) => {
      x(...K), P();
    };
  }
  let D = S ? new Array(e.length).fill(ln) : ln;
  const I = (x) => {
    if (!(!(v.flags & 1) || !v.dirty && !x))
      if (s) {
        const K = v.run();
        if (l || _ || (S ? K.some((V, z) => Ns(V, D[z])) : Ns(K, D))) {
          w && w();
          const V = Ys;
          Ys = v;
          try {
            const z = [
              K,
              // pass undefined as the old value when it's changed for the first time
              D === ln ? void 0 : S && D[0] === ln ? [] : D,
              p
            ];
            D = K, u ? u(s, 3, z) : (
              // @ts-expect-error
              s(...z)
            );
          } finally {
            Ys = V;
          }
        }
      } else
        v.run();
  };
  return d && d(I), v = new ii(g), v.scheduler = c ? () => c(I, !1) : I, p = (x) => Ic(x, !1, v), w = v.onStop = () => {
    const x = $n.get(v);
    if (x) {
      if (u)
        u(x, 4);
      else
        for (const K of x) K();
      $n.delete(v);
    }
  }, s ? n ? I(!0) : D = v.run() : c ? c(I.bind(null, !0), !0) : v.run(), P.pause = v.pause.bind(v), P.resume = v.resume.bind(v), P.stop = P, P;
}
function $s(e, s = 1 / 0, o) {
  if (s <= 0 || !tt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, $t(e))
    $s(e.value, s, o);
  else if (Be(e))
    for (let n = 0; n < e.length; n++)
      $s(e[n], s, o);
  else if (_o(e) || fo(e))
    e.forEach((n) => {
      $s(n, s, o);
    });
  else if (si(e)) {
    for (const n in e)
      $s(e[n], s, o);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && $s(e[n], s, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function en(e, s, o, n) {
  try {
    return n ? e(...n) : e();
  } catch (l) {
    Fn(l, s, o);
  }
}
function os(e, s, o, n) {
  if (je(e)) {
    const l = en(e, s, o, n);
    return l && ei(l) && l.catch((i) => {
      Fn(i, s, o);
    }), l;
  }
  if (Be(e)) {
    const l = [];
    for (let i = 0; i < e.length; i++)
      l.push(os(e[i], s, o, n));
    return l;
  }
}
function Fn(e, s, o, n = !0) {
  const l = s ? s.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: c } = s && s.appContext.config || st;
  if (s) {
    let d = s.parent;
    const u = s.proxy, m = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; d; ) {
      const v = d.ec;
      if (v) {
        for (let g = 0; g < v.length; g++)
          if (v[g](e, u, m) === !1)
            return;
      }
      d = d.parent;
    }
    if (i) {
      xs(), en(i, null, 10, [
        e,
        u,
        m
      ]), Ss();
      return;
    }
  }
  Tc(e, o, l, n, c);
}
function Tc(e, s, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const It = [];
let fs = -1;
const mo = [];
let Os = null, io = 0;
const ki = /* @__PURE__ */ Promise.resolve();
let Cn = null;
function Et(e) {
  const s = Cn || ki;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function Pc(e) {
  let s = fs + 1, o = It.length;
  for (; s < o; ) {
    const n = s + o >>> 1, l = It[n], i = Ko(l);
    i < e || i === e && l.flags & 2 ? s = n + 1 : o = n;
  }
  return s;
}
function Wa(e) {
  if (!(e.flags & 1)) {
    const s = Ko(e), o = It[It.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= Ko(o) ? It.push(e) : It.splice(Pc(s), 0, e), e.flags |= 1, $i();
  }
}
function $i() {
  Cn || (Cn = ki.then(xi));
}
function Rc(e) {
  Be(e) ? mo.push(...e) : Os && e.id === -1 ? Os.splice(io + 1, 0, e) : e.flags & 1 || (mo.push(e), e.flags |= 1), $i();
}
function cl(e, s, o = fs + 1) {
  for (; o < It.length; o++) {
    const n = It[o];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      It.splice(o, 1), o--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Ci(e) {
  if (mo.length) {
    const s = [...new Set(mo)].sort(
      (o, n) => Ko(o) - Ko(n)
    );
    if (mo.length = 0, Os) {
      Os.push(...s);
      return;
    }
    for (Os = s, io = 0; io < Os.length; io++) {
      const o = Os[io];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Os = null, io = 0;
  }
}
const Ko = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function xi(e) {
  try {
    for (fs = 0; fs < It.length; fs++) {
      const s = It[fs];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), en(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; fs < It.length; fs++) {
      const s = It[fs];
      s && (s.flags &= -2);
    }
    fs = -1, It.length = 0, Ci(), Cn = null, (It.length || mo.length) && xi();
  }
}
let yt = null, Si = null;
function xn(e) {
  const s = yt;
  return yt = e, Si = e && e.type.__scopeId || null, s;
}
function h(e, s = yt, o) {
  if (!s || e._n)
    return e;
  const n = (...l) => {
    n._d && En(-1);
    const i = xn(s);
    let c;
    try {
      c = e(...l);
    } finally {
      xn(i), n._d && En(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ye(e, s) {
  if (yt === null)
    return e;
  const o = jn(yt), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [i, c, d, u = st] = s[l];
    i && (je(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && $s(c), n.push({
      dir: i,
      instance: o,
      value: c,
      oldValue: void 0,
      arg: d,
      modifiers: u
    }));
  }
  return e;
}
function js(e, s, o, n) {
  const l = e.dirs, i = s && s.dirs;
  for (let c = 0; c < l.length; c++) {
    const d = l[c];
    i && (d.oldValue = i[c].value);
    let u = d.dir[n];
    u && (xs(), os(u, o, 8, [
      e.el,
      d,
      e,
      s
    ]), Ss());
  }
}
const Ii = Symbol("_vte"), Ei = (e) => e.__isTeleport, Uo = (e) => e && (e.disabled || e.disabled === ""), dl = (e) => e && (e.defer || e.defer === ""), ul = (e) => typeof SVGElement < "u" && e instanceof SVGElement, fl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ya = (e, s) => {
  const o = e && e.to;
  return dt(o) ? s ? s(o) : null : o;
}, Ti = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, n, l, i, c, d, u, m) {
    const {
      mc: v,
      pc: g,
      pbc: w,
      o: { insert: p, querySelector: _, createText: S, createComment: $ }
    } = m, P = Uo(s.props);
    let { shapeFlag: D, children: I, dynamicChildren: x } = s;
    if (e == null) {
      const K = s.el = S(""), V = s.anchor = S("");
      p(K, o, n), p(V, o, n);
      const z = (E, R) => {
        D & 16 && v(
          I,
          E,
          R,
          l,
          i,
          c,
          d,
          u
        );
      }, T = () => {
        const E = s.target = ya(s.props, _), R = Pi(E, s, S, p);
        E && (c !== "svg" && ul(E) ? c = "svg" : c !== "mathml" && fl(E) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(E), P || (z(E, R), gn(s, !1)));
      };
      P && (z(o, V), gn(s, !0)), dl(s.props) ? (s.el.__isMounted = !1, St(() => {
        T(), delete s.el.__isMounted;
      }, i)) : T();
    } else {
      if (dl(s.props) && e.el.__isMounted === !1) {
        St(() => {
          Ti.process(
            e,
            s,
            o,
            n,
            l,
            i,
            c,
            d,
            u,
            m
          );
        }, i);
        return;
      }
      s.el = e.el, s.targetStart = e.targetStart;
      const K = s.anchor = e.anchor, V = s.target = e.target, z = s.targetAnchor = e.targetAnchor, T = Uo(e.props), E = T ? o : V, R = T ? K : z;
      if (c === "svg" || ul(V) ? c = "svg" : (c === "mathml" || fl(V)) && (c = "mathml"), x ? (w(
        e.dynamicChildren,
        x,
        E,
        l,
        i,
        c,
        d
      ), qa(e, s, !0)) : u || g(
        e,
        s,
        E,
        R,
        l,
        i,
        c,
        d,
        !1
      ), P)
        T ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : rn(
          s,
          o,
          K,
          m,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const Z = s.target = ya(
          s.props,
          _
        );
        Z && rn(
          s,
          Z,
          null,
          m,
          0
        );
      } else T && rn(
        s,
        V,
        z,
        m,
        1
      );
      gn(s, P);
    }
  },
  remove(e, s, o, { um: n, o: { remove: l } }, i) {
    const {
      shapeFlag: c,
      children: d,
      anchor: u,
      targetStart: m,
      targetAnchor: v,
      target: g,
      props: w
    } = e;
    if (g && (l(m), l(v)), i && l(u), c & 16) {
      const p = i || !Uo(w);
      for (let _ = 0; _ < d.length; _++) {
        const S = d[_];
        n(
          S,
          s,
          o,
          p,
          !!S.dynamicChildren
        );
      }
    }
  },
  move: rn,
  hydrate: Mc
};
function rn(e, s, o, { o: { insert: n }, m: l }, i = 2) {
  i === 0 && n(e.targetAnchor, s, o);
  const { el: c, anchor: d, shapeFlag: u, children: m, props: v } = e, g = i === 2;
  if (g && n(c, s, o), (!g || Uo(v)) && u & 16)
    for (let w = 0; w < m.length; w++)
      l(
        m[w],
        s,
        o,
        2
      );
  g && n(d, s, o);
}
function Mc(e, s, o, n, l, i, {
  o: { nextSibling: c, parentNode: d, querySelector: u, insert: m, createText: v }
}, g) {
  function w(S, $, P, D) {
    $.anchor = g(
      c(S),
      $,
      d(S),
      o,
      n,
      l,
      i
    ), $.targetStart = P, $.targetAnchor = D;
  }
  const p = s.target = ya(
    s.props,
    u
  ), _ = Uo(s.props);
  if (p) {
    const S = p._lpa || p.firstChild;
    if (s.shapeFlag & 16)
      if (_)
        w(
          e,
          s,
          S,
          S && c(S)
        );
      else {
        s.anchor = c(e);
        let $ = S;
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
        s.targetAnchor || Pi(p, s, v, m), g(
          S && c(S),
          s,
          p,
          o,
          n,
          l,
          i
        );
      }
    gn(s, _);
  } else _ && s.shapeFlag & 16 && w(e, s, e, c(e));
  return s.anchor && c(s.anchor);
}
const wt = Ti;
function gn(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (s ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function Pi(e, s, o, n) {
  const l = s.targetStart = o(""), i = s.targetAnchor = o("");
  return l[Ii] = i, e && (n(l, e), n(i, e)), i;
}
const bs = Symbol("_leaveCb"), cn = Symbol("_enterCb");
function Ri() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return et(() => {
    e.isMounted = !0;
  }), zi(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ft = [Function, Array], Mi = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ft,
  onEnter: Ft,
  onAfterEnter: Ft,
  onEnterCancelled: Ft,
  // leave
  onBeforeLeave: Ft,
  onLeave: Ft,
  onAfterLeave: Ft,
  onLeaveCancelled: Ft,
  // appear
  onBeforeAppear: Ft,
  onAppear: Ft,
  onAfterAppear: Ft,
  onAppearCancelled: Ft
}, Di = (e) => {
  const s = e.subTree;
  return s.component ? Di(s.component) : s;
}, Dc = {
  name: "BaseTransition",
  props: Mi,
  setup(e, { slots: s }) {
    const o = Ja(), n = Ri();
    return () => {
      const l = s.default && Ga(s.default(), !0);
      if (!l || !l.length)
        return;
      const i = Li(l), c = Xe(e), { mode: d } = c;
      if (n.isLeaving)
        return ea(i);
      const u = ml(i);
      if (!u)
        return ea(i);
      let m = qo(
        u,
        c,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (g) => m = g
      );
      u.type !== bt && eo(u, m);
      let v = o.subTree && ml(o.subTree);
      if (v && v.type !== bt && !Js(v, u) && Di(o).type !== bt) {
        let g = qo(
          v,
          c,
          n,
          o
        );
        if (eo(v, g), d === "out-in" && u.type !== bt)
          return n.isLeaving = !0, g.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete g.afterLeave, v = void 0;
          }, ea(i);
        d === "in-out" && u.type !== bt ? g.delayLeave = (w, p, _) => {
          const S = Oi(
            n,
            v
          );
          S[String(v.key)] = v, w[bs] = () => {
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
function Li(e) {
  let s = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== bt) {
        s = o;
        break;
      }
  }
  return s;
}
const Lc = Dc;
function Oi(e, s) {
  const { leavingVNodes: o } = e;
  let n = o.get(s.type);
  return n || (n = /* @__PURE__ */ Object.create(null), o.set(s.type, n)), n;
}
function qo(e, s, o, n, l) {
  const {
    appear: i,
    mode: c,
    persisted: d = !1,
    onBeforeEnter: u,
    onEnter: m,
    onAfterEnter: v,
    onEnterCancelled: g,
    onBeforeLeave: w,
    onLeave: p,
    onAfterLeave: _,
    onLeaveCancelled: S,
    onBeforeAppear: $,
    onAppear: P,
    onAfterAppear: D,
    onAppearCancelled: I
  } = s, x = String(e.key), K = Oi(o, e), V = (E, R) => {
    E && os(
      E,
      n,
      9,
      R
    );
  }, z = (E, R) => {
    const Z = R[1];
    V(E, R), Be(E) ? E.every((J) => J.length <= 1) && Z() : E.length <= 1 && Z();
  }, T = {
    mode: c,
    persisted: d,
    beforeEnter(E) {
      let R = u;
      if (!o.isMounted)
        if (i)
          R = $ || u;
        else
          return;
      E[bs] && E[bs](
        !0
        /* cancelled */
      );
      const Z = K[x];
      Z && Js(e, Z) && Z.el[bs] && Z.el[bs](), V(R, [E]);
    },
    enter(E) {
      let R = m, Z = v, J = g;
      if (!o.isMounted)
        if (i)
          R = P || m, Z = D || v, J = I || g;
        else
          return;
      let W = !1;
      const se = E[cn] = (ee) => {
        W || (W = !0, ee ? V(J, [E]) : V(Z, [E]), T.delayedLeave && T.delayedLeave(), E[cn] = void 0);
      };
      R ? z(R, [E, se]) : se();
    },
    leave(E, R) {
      const Z = String(e.key);
      if (E[cn] && E[cn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return R();
      V(w, [E]);
      let J = !1;
      const W = E[bs] = (se) => {
        J || (J = !0, R(), se ? V(S, [E]) : V(_, [E]), E[bs] = void 0, K[Z] === e && delete K[Z]);
      };
      K[Z] = e, p ? z(p, [E, W]) : W();
    },
    clone(E) {
      const R = qo(
        E,
        s,
        o,
        n,
        l
      );
      return l && l(R), R;
    }
  };
  return T;
}
function ea(e) {
  if (Bn(e))
    return e = Us(e), e.children = null, e;
}
function ml(e) {
  if (!Bn(e))
    return Ei(e.type) && e.children ? Li(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: s, children: o } = e;
  if (o) {
    if (s & 16)
      return o[0];
    if (s & 32 && je(o.default))
      return o.default();
  }
}
function eo(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, eo(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function Ga(e, s = !1, o) {
  let n = [], l = 0;
  for (let i = 0; i < e.length; i++) {
    let c = e[i];
    const d = o == null ? c.key : String(o) + String(c.key != null ? c.key : i);
    c.type === G ? (c.patchFlag & 128 && l++, n = n.concat(
      Ga(c.children, s, d)
    )) : (s || c.type !== bt) && n.push(d != null ? Us(c, { key: d }) : c);
  }
  if (l > 1)
    for (let i = 0; i < n.length; i++)
      n[i].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function ve(e, s) {
  return je(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    gt({ name: e.name }, s, { setup: e })
  ) : e;
}
function Ai(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Sn = /* @__PURE__ */ new WeakMap();
function zo(e, s, o, n, l = !1) {
  if (Be(e)) {
    e.forEach(
      (_, S) => zo(
        _,
        s && (Be(s) ? s[S] : s),
        o,
        n,
        l
      )
    );
    return;
  }
  if (vo(n) && !l) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && zo(e, s, o, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? jn(n.component) : n.el, c = l ? null : i, { i: d, r: u } = e, m = s && s.r, v = d.refs === st ? d.refs = {} : d.refs, g = d.setupState, w = Xe(g), p = g === st ? Zl : (_) => Ze(w, _);
  if (m != null && m !== u) {
    if (vl(s), dt(m))
      v[m] = null, p(m) && (g[m] = null);
    else if ($t(m)) {
      m.value = null;
      const _ = s;
      _.k && (v[_.k] = null);
    }
  }
  if (je(u))
    en(u, d, 12, [c, v]);
  else {
    const _ = dt(u), S = $t(u);
    if (_ || S) {
      const $ = () => {
        if (e.f) {
          const P = _ ? p(u) ? g[u] : v[u] : u.value;
          if (l)
            Be(P) && Da(P, i);
          else if (Be(P))
            P.includes(i) || P.push(i);
          else if (_)
            v[u] = [i], p(u) && (g[u] = v[u]);
          else {
            const D = [i];
            u.value = D, e.k && (v[e.k] = D);
          }
        } else _ ? (v[u] = c, p(u) && (g[u] = c)) : S && (u.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const P = () => {
          $(), Sn.delete(e);
        };
        P.id = -1, Sn.set(e, P), St(P, o);
      } else
        vl(e), $();
    }
  }
}
function vl(e) {
  const s = Sn.get(e);
  s && (s.flags |= 8, Sn.delete(e));
}
Un().requestIdleCallback;
Un().cancelIdleCallback;
const vo = (e) => !!e.type.__asyncLoader, Bn = (e) => e.type.__isKeepAlive;
function Oc(e, s) {
  Ni(e, "a", s);
}
function Ac(e, s) {
  Ni(e, "da", s);
}
function Ni(e, s, o = kt) {
  const n = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (Vn(s, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      Bn(l.parent.vnode) && Nc(n, s, o, l), l = l.parent;
  }
}
function Nc(e, s, o, n) {
  const l = Vn(
    s,
    e,
    n,
    !0
    /* prepend */
  );
  so(() => {
    Da(n[s], l);
  }, o);
}
function Vn(e, s, o = kt, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), i = s.__weh || (s.__weh = (...c) => {
      xs();
      const d = tn(o), u = os(s, o, e, c);
      return d(), Ss(), u;
    });
    return n ? l.unshift(i) : l.push(i), i;
  }
}
const Es = (e) => (s, o = kt) => {
  (!Xo || e === "sp") && Vn(e, (...n) => s(...n), o);
}, Uc = Es("bm"), et = Es("m"), zc = Es(
  "bu"
), Ui = Es("u"), zi = Es(
  "bum"
), so = Es("um"), Fc = Es(
  "sp"
), Bc = Es("rtg"), Vc = Es("rtc");
function Wc(e, s = kt) {
  Vn("ec", e, s);
}
const Gc = "components", Fi = Symbol.for("v-ndc");
function ja(e) {
  return dt(e) ? jc(Gc, e, !1) || e : e || Fi;
}
function jc(e, s, o = !0, n = !1) {
  const l = yt || kt;
  if (l) {
    const i = l.type;
    {
      const d = Dd(
        i,
        !1
      );
      if (d && (d === s || d === jt(s) || d === An(jt(s))))
        return i;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      pl(l[e] || i[e], s) || // global registration
      pl(l.appContext[e], s)
    );
    return !c && n ? i : c;
  }
}
function pl(e, s) {
  return e && (e[s] || e[jt(s)] || e[An(jt(s))]);
}
function he(e, s, o, n) {
  let l;
  const i = o, c = Be(e);
  if (c || dt(e)) {
    const d = c && Qs(e);
    let u = !1, m = !1;
    d && (u = !Wt(e), m = Is(e), e = zn(e)), l = new Array(e.length);
    for (let v = 0, g = e.length; v < g; v++)
      l[v] = s(
        u ? m ? ho(ss(e[v])) : ss(e[v]) : e[v],
        v,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let d = 0; d < e; d++)
      l[d] = s(d + 1, d, void 0, i);
  } else if (tt(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (d, u) => s(d, u, void 0, i)
      );
    else {
      const d = Object.keys(e);
      l = new Array(d.length);
      for (let u = 0, m = d.length; u < m; u++) {
        const v = d[u];
        l[u] = s(e[v], v, u, i);
      }
    }
  else
    l = [];
  return l;
}
function to(e, s) {
  for (let o = 0; o < s.length; o++) {
    const n = s[o];
    if (Be(n))
      for (let l = 0; l < n.length; l++)
        e[n[l].name] = n[l].fn;
    else n && (e[n.name] = n.key ? (...l) => {
      const i = n.fn(...l);
      return i && (i.key = n.key), i;
    } : n.fn);
  }
  return e;
}
function qe(e, s, o = {}, n, l) {
  if (yt.ce || yt.parent && vo(yt.parent) && yt.parent.ce) {
    const m = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), a(), M(
      G,
      null,
      [C("slot", o, n && n())],
      m ? -2 : 64
    );
  }
  let i = e[s];
  i && i._c && (i._d = !1), a();
  const c = i && Bi(i(o)), d = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, u = M(
    G,
    {
      key: (d && !ts(d) ? d : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!c && n ? "_fb" : "")
    },
    c || (n ? n() : []),
    c && e._ === 1 ? 64 : -2
  );
  return i && i._c && (i._d = !0), u;
}
function Bi(e) {
  return e.some((s) => Jo(s) ? !(s.type === bt || s.type === G && !Bi(s.children)) : !0) ? e : null;
}
const wa = (e) => e ? lr(e) ? jn(e) : wa(e.parent) : null, Fo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ gt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => wa(e.parent),
    $root: (e) => wa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Wi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Wa(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Et.bind(e.proxy)),
    $watch: (e) => od.bind(e)
  })
), ta = (e, s) => e !== st && !e.__isScriptSetup && Ze(e, s), Hc = {
  get({ _: e }, s) {
    if (s === "__v_skip")
      return !0;
    const { ctx: o, setupState: n, data: l, props: i, accessCache: c, type: d, appContext: u } = e;
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
        if (ta(n, s))
          return c[s] = 1, n[s];
        if (l !== st && Ze(l, s))
          return c[s] = 2, l[s];
        if (Ze(i, s))
          return c[s] = 3, i[s];
        if (o !== st && Ze(o, s))
          return c[s] = 4, o[s];
        _a && (c[s] = 0);
      }
    }
    const m = Fo[s];
    let v, g;
    if (m)
      return s === "$attrs" && _t(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (v = d.__cssModules) && (v = v[s])
    )
      return v;
    if (o !== st && Ze(o, s))
      return c[s] = 4, o[s];
    if (
      // global properties
      g = u.config.globalProperties, Ze(g, s)
    )
      return g[s];
  },
  set({ _: e }, s, o) {
    const { data: n, setupState: l, ctx: i } = e;
    return ta(l, s) ? (l[s] = o, !0) : n !== st && Ze(n, s) ? (n[s] = o, !0) : Ze(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (i[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: n, appContext: l, props: i, type: c }
  }, d) {
    let u;
    return !!(o[d] || e !== st && d[0] !== "$" && Ze(e, d) || ta(s, d) || Ze(i, d) || Ze(n, d) || Ze(Fo, d) || Ze(l.config.globalProperties, d) || (u = c.__cssModules) && u[d]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : Ze(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function gl(e) {
  return Be(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let _a = !0;
function Kc(e) {
  const s = Wi(e), o = e.proxy, n = e.ctx;
  _a = !1, s.beforeCreate && hl(s.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: i,
    methods: c,
    watch: d,
    provide: u,
    inject: m,
    // lifecycle
    created: v,
    beforeMount: g,
    mounted: w,
    beforeUpdate: p,
    updated: _,
    activated: S,
    deactivated: $,
    beforeDestroy: P,
    beforeUnmount: D,
    destroyed: I,
    unmounted: x,
    render: K,
    renderTracked: V,
    renderTriggered: z,
    errorCaptured: T,
    serverPrefetch: E,
    // public API
    expose: R,
    inheritAttrs: Z,
    // assets
    components: J,
    directives: W,
    filters: se
  } = s;
  if (m && qc(m, n, null), c)
    for (const j in c) {
      const L = c[j];
      je(L) && (n[j] = L.bind(o));
    }
  if (l) {
    const j = l.call(o, o);
    tt(j) && (e.data = Bs(j));
  }
  if (_a = !0, i)
    for (const j in i) {
      const L = i[j], ne = je(L) ? L.bind(o, o) : je(L.get) ? L.get.bind(o, o) : ps, Y = !je(L) && je(L.set) ? L.set.bind(o) : ps, de = N({
        get: ne,
        set: Y
      });
      Object.defineProperty(n, j, {
        enumerable: !0,
        configurable: !0,
        get: () => de.value,
        set: ($e) => de.value = $e
      });
    }
  if (d)
    for (const j in d)
      Vi(d[j], n, o, j);
  if (u) {
    const j = je(u) ? u.call(o) : u;
    Reflect.ownKeys(j).forEach((L) => {
      ed(L, j[L]);
    });
  }
  v && hl(v, e, "c");
  function A(j, L) {
    Be(L) ? L.forEach((ne) => j(ne.bind(o))) : L && j(L.bind(o));
  }
  if (A(Uc, g), A(et, w), A(zc, p), A(Ui, _), A(Oc, S), A(Ac, $), A(Wc, T), A(Vc, V), A(Bc, z), A(zi, D), A(so, x), A(Fc, E), Be(R))
    if (R.length) {
      const j = e.exposed || (e.exposed = {});
      R.forEach((L) => {
        Object.defineProperty(j, L, {
          get: () => o[L],
          set: (ne) => o[L] = ne,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  K && e.render === ps && (e.render = K), Z != null && (e.inheritAttrs = Z), J && (e.components = J), W && (e.directives = W), E && Ai(e);
}
function qc(e, s, o = ps) {
  Be(e) && (e = ba(e));
  for (const n in e) {
    const l = e[n];
    let i;
    tt(l) ? "default" in l ? i = hn(
      l.from || n,
      l.default,
      !0
    ) : i = hn(l.from || n) : i = hn(l), $t(i) ? Object.defineProperty(s, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (c) => i.value = c
    }) : s[n] = i;
  }
}
function hl(e, s, o) {
  os(
    Be(e) ? e.map((n) => n.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function Vi(e, s, o, n) {
  let l = n.includes(".") ? Hi(o, n) : () => o[n];
  if (dt(e)) {
    const i = s[e];
    je(i) && Ct(l, i);
  } else if (je(e))
    Ct(l, e.bind(o));
  else if (tt(e))
    if (Be(e))
      e.forEach((i) => Vi(i, s, o, n));
    else {
      const i = je(e.handler) ? e.handler.bind(o) : s[e.handler];
      je(i) && Ct(l, i, e);
    }
}
function Wi(e) {
  const s = e.type, { mixins: o, extends: n } = s, {
    mixins: l,
    optionsCache: i,
    config: { optionMergeStrategies: c }
  } = e.appContext, d = i.get(s);
  let u;
  return d ? u = d : !l.length && !o && !n ? u = s : (u = {}, l.length && l.forEach(
    (m) => In(u, m, c, !0)
  ), In(u, s, c)), tt(s) && i.set(s, u), u;
}
function In(e, s, o, n = !1) {
  const { mixins: l, extends: i } = s;
  i && In(e, i, o, !0), l && l.forEach(
    (c) => In(e, c, o, !0)
  );
  for (const c in s)
    if (!(n && c === "expose")) {
      const d = Yc[c] || o && o[c];
      e[c] = d ? d(e[c], s[c]) : s[c];
    }
  return e;
}
const Yc = {
  data: yl,
  props: wl,
  emits: wl,
  // objects
  methods: Lo,
  computed: Lo,
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
  components: Lo,
  directives: Lo,
  // watch
  watch: Xc,
  // provide / inject
  provide: yl,
  inject: Jc
};
function yl(e, s) {
  return s ? e ? function() {
    return gt(
      je(e) ? e.call(this, this) : e,
      je(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function Jc(e, s) {
  return Lo(ba(e), ba(s));
}
function ba(e) {
  if (Be(e)) {
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
function Lo(e, s) {
  return e ? gt(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function wl(e, s) {
  return e ? Be(e) && Be(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : gt(
    /* @__PURE__ */ Object.create(null),
    gl(e),
    gl(s ?? {})
  ) : s;
}
function Xc(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = gt(/* @__PURE__ */ Object.create(null), e);
  for (const n in s)
    o[n] = xt(e[n], s[n]);
  return o;
}
function Gi() {
  return {
    app: null,
    config: {
      isNativeTag: Zl,
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
let Qc = 0;
function Zc(e, s) {
  return function(n, l = null) {
    je(n) || (n = gt({}, n)), l != null && !tt(l) && (l = null);
    const i = Gi(), c = /* @__PURE__ */ new WeakSet(), d = [];
    let u = !1;
    const m = i.app = {
      _uid: Qc++,
      _component: n,
      _props: l,
      _container: null,
      _context: i,
      _instance: null,
      version: Od,
      get config() {
        return i.config;
      },
      set config(v) {
      },
      use(v, ...g) {
        return c.has(v) || (v && je(v.install) ? (c.add(v), v.install(m, ...g)) : je(v) && (c.add(v), v(m, ...g))), m;
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
        if (!u) {
          const p = m._ceVNode || C(n, l);
          return p.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(p, v, w), u = !0, m._container = v, v.__vue_app__ = m, jn(p.component);
        }
      },
      onUnmount(v) {
        d.push(v);
      },
      unmount() {
        u && (os(
          d,
          m._instance,
          16
        ), e(null, m._container), delete m._container.__vue_app__);
      },
      provide(v, g) {
        return i.provides[v] = g, m;
      },
      runWithContext(v) {
        const g = po;
        po = m;
        try {
          return v();
        } finally {
          po = g;
        }
      }
    };
    return m;
  };
}
let po = null;
function ed(e, s) {
  if (kt) {
    let o = kt.provides;
    const n = kt.parent && kt.parent.provides;
    n === o && (o = kt.provides = Object.create(n)), o[e] = s;
  }
}
function hn(e, s, o = !1) {
  const n = Ja();
  if (n || po) {
    let l = po ? po._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && je(s) ? s.call(n && n.proxy) : s;
  }
}
const td = Symbol.for("v-scx"), sd = () => hn(td);
function Ct(e, s, o) {
  return ji(e, s, o);
}
function ji(e, s, o = st) {
  const { immediate: n, deep: l, flush: i, once: c } = o, d = gt({}, o), u = s && n || !s && i !== "post";
  let m;
  if (Xo) {
    if (i === "sync") {
      const p = sd();
      m = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!u) {
      const p = () => {
      };
      return p.stop = ps, p.resume = ps, p.pause = ps, p;
    }
  }
  const v = kt;
  d.call = (p, _, S) => os(p, v, _, S);
  let g = !1;
  i === "post" ? d.scheduler = (p) => {
    St(p, v && v.suspense);
  } : i !== "sync" && (g = !0, d.scheduler = (p, _) => {
    _ ? p() : Wa(p);
  }), d.augmentJob = (p) => {
    s && (p.flags |= 4), g && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const w = Ec(e, s, d);
  return Xo && (m ? m.push(w) : u && w()), w;
}
function od(e, s, o) {
  const n = this.proxy, l = dt(e) ? e.includes(".") ? Hi(n, e) : () => n[e] : e.bind(n, n);
  let i;
  je(s) ? i = s : (i = s.handler, o = s);
  const c = tn(this), d = ji(l, i.bind(n), o);
  return c(), d;
}
function Hi(e, s) {
  const o = s.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const nd = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${jt(s)}Modifiers`] || e[`${Fs(s)}Modifiers`];
function ad(e, s, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || st;
  let l = o;
  const i = s.startsWith("update:"), c = i && nd(n, s.slice(7));
  c && (c.trim && (l = o.map((v) => dt(v) ? v.trim() : v)), c.number && (l = o.map(Nn)));
  let d, u = n[d = Yn(s)] || // also try camelCase event handler (#2249)
  n[d = Yn(jt(s))];
  !u && i && (u = n[d = Yn(Fs(s))]), u && os(
    u,
    e,
    6,
    l
  );
  const m = n[d + "Once"];
  if (m) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[d])
      return;
    e.emitted[d] = !0, os(
      m,
      e,
      6,
      l
    );
  }
}
const ld = /* @__PURE__ */ new WeakMap();
function Ki(e, s, o = !1) {
  const n = o ? ld : s.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const i = e.emits;
  let c = {}, d = !1;
  if (!je(e)) {
    const u = (m) => {
      const v = Ki(m, s, !0);
      v && (d = !0, gt(c, v));
    };
    !o && s.mixins.length && s.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !i && !d ? (tt(e) && n.set(e, null), null) : (Be(i) ? i.forEach((u) => c[u] = null) : gt(c, i), tt(e) && n.set(e, c), c);
}
function Wn(e, s) {
  return !e || !Ln(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), Ze(e, s[0].toLowerCase() + s.slice(1)) || Ze(e, Fs(s)) || Ze(e, s));
}
function _l(e) {
  const {
    type: s,
    vnode: o,
    proxy: n,
    withProxy: l,
    propsOptions: [i],
    slots: c,
    attrs: d,
    emit: u,
    render: m,
    renderCache: v,
    props: g,
    data: w,
    setupState: p,
    ctx: _,
    inheritAttrs: S
  } = e, $ = xn(e);
  let P, D;
  try {
    if (o.shapeFlag & 4) {
      const x = l || n, K = x;
      P = vs(
        m.call(
          K,
          x,
          v,
          g,
          p,
          w,
          _
        )
      ), D = d;
    } else {
      const x = s;
      P = vs(
        x.length > 1 ? x(
          g,
          { attrs: d, slots: c, emit: u }
        ) : x(
          g,
          null
        )
      ), D = s.props ? d : id(d);
    }
  } catch (x) {
    Bo.length = 0, Fn(x, e, 1), P = C(bt);
  }
  let I = P;
  if (D && S !== !1) {
    const x = Object.keys(D), { shapeFlag: K } = I;
    x.length && K & 7 && (i && x.some(Ma) && (D = rd(
      D,
      i
    )), I = Us(I, D, !1, !0));
  }
  return o.dirs && (I = Us(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(o.dirs) : o.dirs), o.transition && eo(I, o.transition), P = I, xn($), P;
}
const id = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Ln(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, rd = (e, s) => {
  const o = {};
  for (const n in e)
    (!Ma(n) || !(n.slice(9) in s)) && (o[n] = e[n]);
  return o;
};
function cd(e, s, o) {
  const { props: n, children: l, component: i } = e, { props: c, children: d, patchFlag: u } = s, m = i.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return n ? bl(n, c, m) : !!c;
    if (u & 8) {
      const v = s.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        const w = v[g];
        if (c[w] !== n[w] && !Wn(m, w))
          return !0;
      }
    }
  } else
    return (l || d) && (!d || !d.$stable) ? !0 : n === c ? !1 : n ? c ? bl(n, c, m) : !0 : !!c;
  return !1;
}
function bl(e, s, o) {
  const n = Object.keys(s);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < n.length; l++) {
    const i = n[l];
    if (s[i] !== e[i] && !Wn(o, i))
      return !0;
  }
  return !1;
}
function dd({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const n = s.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const qi = {}, Yi = () => Object.create(qi), Ji = (e) => Object.getPrototypeOf(e) === qi;
function ud(e, s, o, n = !1) {
  const l = {}, i = Yi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Xi(e, s, l, i);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = n ? l : _c(l) : e.type.props ? e.props = l : e.props = i, e.attrs = i;
}
function fd(e, s, o, n) {
  const {
    props: l,
    attrs: i,
    vnode: { patchFlag: c }
  } = e, d = Xe(l), [u] = e.propsOptions;
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
        if (Wn(e.emitsOptions, w))
          continue;
        const p = s[w];
        if (u)
          if (Ze(i, w))
            p !== i[w] && (i[w] = p, m = !0);
          else {
            const _ = jt(w);
            l[_] = ka(
              u,
              d,
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
    Xi(e, s, l, i) && (m = !0);
    let v;
    for (const g in d)
      (!s || // for camelCase
      !Ze(s, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Fs(g)) === g || !Ze(s, v))) && (u ? o && // for camelCase
      (o[g] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[g] = ka(
        u,
        d,
        g,
        void 0,
        e,
        !0
      )) : delete l[g]);
    if (i !== d)
      for (const g in i)
        (!s || !Ze(s, g)) && (delete i[g], m = !0);
  }
  m && ks(e.attrs, "set", "");
}
function Xi(e, s, o, n) {
  const [l, i] = e.propsOptions;
  let c = !1, d;
  if (s)
    for (let u in s) {
      if (Oo(u))
        continue;
      const m = s[u];
      let v;
      l && Ze(l, v = jt(u)) ? !i || !i.includes(v) ? o[v] = m : (d || (d = {}))[v] = m : Wn(e.emitsOptions, u) || (!(u in n) || m !== n[u]) && (n[u] = m, c = !0);
    }
  if (i) {
    const u = Xe(o), m = d || st;
    for (let v = 0; v < i.length; v++) {
      const g = i[v];
      o[g] = ka(
        l,
        u,
        g,
        m[g],
        e,
        !Ze(m, g)
      );
    }
  }
  return c;
}
function ka(e, s, o, n, l, i) {
  const c = e[o];
  if (c != null) {
    const d = Ze(c, "default");
    if (d && n === void 0) {
      const u = c.default;
      if (c.type !== Function && !c.skipFactory && je(u)) {
        const { propsDefaults: m } = l;
        if (o in m)
          n = m[o];
        else {
          const v = tn(l);
          n = m[o] = u.call(
            null,
            s
          ), v();
        }
      } else
        n = u;
      l.ce && l.ce._setProp(o, n);
    }
    c[
      0
      /* shouldCast */
    ] && (i && !d ? n = !1 : c[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Fs(o)) && (n = !0));
  }
  return n;
}
const md = /* @__PURE__ */ new WeakMap();
function Qi(e, s, o = !1) {
  const n = o ? md : s.propsCache, l = n.get(e);
  if (l)
    return l;
  const i = e.props, c = {}, d = [];
  let u = !1;
  if (!je(e)) {
    const v = (g) => {
      u = !0;
      const [w, p] = Qi(g, s, !0);
      gt(c, w), p && d.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!i && !u)
    return tt(e) && n.set(e, uo), uo;
  if (Be(i))
    for (let v = 0; v < i.length; v++) {
      const g = jt(i[v]);
      kl(g) && (c[g] = st);
    }
  else if (i)
    for (const v in i) {
      const g = jt(v);
      if (kl(g)) {
        const w = i[v], p = c[g] = Be(w) || je(w) ? { type: w } : gt({}, w), _ = p.type;
        let S = !1, $ = !0;
        if (Be(_))
          for (let P = 0; P < _.length; ++P) {
            const D = _[P], I = je(D) && D.name;
            if (I === "Boolean") {
              S = !0;
              break;
            } else I === "String" && ($ = !1);
          }
        else
          S = je(_) && _.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = S, p[
          1
          /* shouldCastTrue */
        ] = $, (S || Ze(p, "default")) && d.push(g);
      }
    }
  const m = [c, d];
  return tt(e) && n.set(e, m), m;
}
function kl(e) {
  return e[0] !== "$" && !Oo(e);
}
const Ha = (e) => e === "_" || e === "_ctx" || e === "$stable", Ka = (e) => Be(e) ? e.map(vs) : [vs(e)], vd = (e, s, o) => {
  if (s._n)
    return s;
  const n = h((...l) => Ka(s(...l)), o);
  return n._c = !1, n;
}, Zi = (e, s, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (Ha(l)) continue;
    const i = e[l];
    if (je(i))
      s[l] = vd(l, i, n);
    else if (i != null) {
      const c = Ka(i);
      s[l] = () => c;
    }
  }
}, er = (e, s) => {
  const o = Ka(s);
  e.slots.default = () => o;
}, tr = (e, s, o) => {
  for (const n in s)
    (o || !Ha(n)) && (e[n] = s[n]);
}, pd = (e, s, o) => {
  const n = e.slots = Yi();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (tr(n, s, o), o && oi(n, "_", l, !0)) : Zi(s, n);
  } else s && er(e, s);
}, gd = (e, s, o) => {
  const { vnode: n, slots: l } = e;
  let i = !0, c = st;
  if (n.shapeFlag & 32) {
    const d = s._;
    d ? o && d === 1 ? i = !1 : tr(l, s, o) : (i = !s.$stable, Zi(s, l)), c = s;
  } else s && (er(e, s), c = { default: 1 });
  if (i)
    for (const d in l)
      !Ha(d) && c[d] == null && delete l[d];
}, St = bd;
function hd(e) {
  return yd(e);
}
function yd(e, s) {
  const o = Un();
  o.__VUE__ = !0;
  const {
    insert: n,
    remove: l,
    patchProp: i,
    createElement: c,
    createText: d,
    createComment: u,
    setText: m,
    setElementText: v,
    parentNode: g,
    nextSibling: w,
    setScopeId: p = ps,
    insertStaticContent: _
  } = e, S = (O, F, ae, ie = null, fe = null, me = null, Ce = void 0, xe = null, le = !!F.dynamicChildren) => {
    if (O === F)
      return;
    O && !Js(O, F) && (ie = Ie(O), $e(O, fe, me, !0), O = null), F.patchFlag === -2 && (le = !1, F.dynamicChildren = null);
    const { type: ue, ref: Ne, shapeFlag: Ee } = F;
    switch (ue) {
      case Gn:
        $(O, F, ae, ie);
        break;
      case bt:
        P(O, F, ae, ie);
        break;
      case oa:
        O == null && D(F, ae, ie, Ce);
        break;
      case G:
        J(
          O,
          F,
          ae,
          ie,
          fe,
          me,
          Ce,
          xe,
          le
        );
        break;
      default:
        Ee & 1 ? K(
          O,
          F,
          ae,
          ie,
          fe,
          me,
          Ce,
          xe,
          le
        ) : Ee & 6 ? W(
          O,
          F,
          ae,
          ie,
          fe,
          me,
          Ce,
          xe,
          le
        ) : (Ee & 64 || Ee & 128) && ue.process(
          O,
          F,
          ae,
          ie,
          fe,
          me,
          Ce,
          xe,
          le,
          Oe
        );
    }
    Ne != null && fe ? zo(Ne, O && O.ref, me, F || O, !F) : Ne == null && O && O.ref != null && zo(O.ref, null, me, O, !0);
  }, $ = (O, F, ae, ie) => {
    if (O == null)
      n(
        F.el = d(F.children),
        ae,
        ie
      );
    else {
      const fe = F.el = O.el;
      F.children !== O.children && m(fe, F.children);
    }
  }, P = (O, F, ae, ie) => {
    O == null ? n(
      F.el = u(F.children || ""),
      ae,
      ie
    ) : F.el = O.el;
  }, D = (O, F, ae, ie) => {
    [O.el, O.anchor] = _(
      O.children,
      F,
      ae,
      ie,
      O.el,
      O.anchor
    );
  }, I = ({ el: O, anchor: F }, ae, ie) => {
    let fe;
    for (; O && O !== F; )
      fe = w(O), n(O, ae, ie), O = fe;
    n(F, ae, ie);
  }, x = ({ el: O, anchor: F }) => {
    let ae;
    for (; O && O !== F; )
      ae = w(O), l(O), O = ae;
    l(F);
  }, K = (O, F, ae, ie, fe, me, Ce, xe, le) => {
    if (F.type === "svg" ? Ce = "svg" : F.type === "math" && (Ce = "mathml"), O == null)
      V(
        F,
        ae,
        ie,
        fe,
        me,
        Ce,
        xe,
        le
      );
    else {
      const ue = O.el && O.el._isVueCE ? O.el : null;
      try {
        ue && ue._beginPatch(), E(
          O,
          F,
          fe,
          me,
          Ce,
          xe,
          le
        );
      } finally {
        ue && ue._endPatch();
      }
    }
  }, V = (O, F, ae, ie, fe, me, Ce, xe) => {
    let le, ue;
    const { props: Ne, shapeFlag: Ee, transition: te, dirs: q } = O;
    if (le = O.el = c(
      O.type,
      me,
      Ne && Ne.is,
      Ne
    ), Ee & 8 ? v(le, O.children) : Ee & 16 && T(
      O.children,
      le,
      null,
      ie,
      fe,
      sa(O, me),
      Ce,
      xe
    ), q && js(O, null, ie, "created"), z(le, O, O.scopeId, Ce, ie), Ne) {
      for (const we in Ne)
        we !== "value" && !Oo(we) && i(le, we, null, Ne[we], me, ie);
      "value" in Ne && i(le, "value", null, Ne.value, me), (ue = Ne.onVnodeBeforeMount) && cs(ue, ie, O);
    }
    q && js(O, null, ie, "beforeMount");
    const De = wd(fe, te);
    De && te.beforeEnter(le), n(le, F, ae), ((ue = Ne && Ne.onVnodeMounted) || De || q) && St(() => {
      ue && cs(ue, ie, O), De && te.enter(le), q && js(O, null, ie, "mounted");
    }, fe);
  }, z = (O, F, ae, ie, fe) => {
    if (ae && p(O, ae), ie)
      for (let me = 0; me < ie.length; me++)
        p(O, ie[me]);
    if (fe) {
      let me = fe.subTree;
      if (F === me || or(me.type) && (me.ssContent === F || me.ssFallback === F)) {
        const Ce = fe.vnode;
        z(
          O,
          Ce,
          Ce.scopeId,
          Ce.slotScopeIds,
          fe.parent
        );
      }
    }
  }, T = (O, F, ae, ie, fe, me, Ce, xe, le = 0) => {
    for (let ue = le; ue < O.length; ue++) {
      const Ne = O[ue] = xe ? As(O[ue]) : vs(O[ue]);
      S(
        null,
        Ne,
        F,
        ae,
        ie,
        fe,
        me,
        Ce,
        xe
      );
    }
  }, E = (O, F, ae, ie, fe, me, Ce) => {
    const xe = F.el = O.el;
    let { patchFlag: le, dynamicChildren: ue, dirs: Ne } = F;
    le |= O.patchFlag & 16;
    const Ee = O.props || st, te = F.props || st;
    let q;
    if (ae && Hs(ae, !1), (q = te.onVnodeBeforeUpdate) && cs(q, ae, F, O), Ne && js(F, O, ae, "beforeUpdate"), ae && Hs(ae, !0), (Ee.innerHTML && te.innerHTML == null || Ee.textContent && te.textContent == null) && v(xe, ""), ue ? R(
      O.dynamicChildren,
      ue,
      xe,
      ae,
      ie,
      sa(F, fe),
      me
    ) : Ce || L(
      O,
      F,
      xe,
      null,
      ae,
      ie,
      sa(F, fe),
      me,
      !1
    ), le > 0) {
      if (le & 16)
        Z(xe, Ee, te, ae, fe);
      else if (le & 2 && Ee.class !== te.class && i(xe, "class", null, te.class, fe), le & 4 && i(xe, "style", Ee.style, te.style, fe), le & 8) {
        const De = F.dynamicProps;
        for (let we = 0; we < De.length; we++) {
          const ye = De[we], B = Ee[ye], U = te[ye];
          (U !== B || ye === "value") && i(xe, ye, B, U, fe, ae);
        }
      }
      le & 1 && O.children !== F.children && v(xe, F.children);
    } else !Ce && ue == null && Z(xe, Ee, te, ae, fe);
    ((q = te.onVnodeUpdated) || Ne) && St(() => {
      q && cs(q, ae, F, O), Ne && js(F, O, ae, "updated");
    }, ie);
  }, R = (O, F, ae, ie, fe, me, Ce) => {
    for (let xe = 0; xe < F.length; xe++) {
      const le = O[xe], ue = F[xe], Ne = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        le.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (le.type === G || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Js(le, ue) || // - In the case of a component, it could contain anything.
        le.shapeFlag & 198) ? g(le.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ae
        )
      );
      S(
        le,
        ue,
        Ne,
        null,
        ie,
        fe,
        me,
        Ce,
        !0
      );
    }
  }, Z = (O, F, ae, ie, fe) => {
    if (F !== ae) {
      if (F !== st)
        for (const me in F)
          !Oo(me) && !(me in ae) && i(
            O,
            me,
            F[me],
            null,
            fe,
            ie
          );
      for (const me in ae) {
        if (Oo(me)) continue;
        const Ce = ae[me], xe = F[me];
        Ce !== xe && me !== "value" && i(O, me, xe, Ce, fe, ie);
      }
      "value" in ae && i(O, "value", F.value, ae.value, fe);
    }
  }, J = (O, F, ae, ie, fe, me, Ce, xe, le) => {
    const ue = F.el = O ? O.el : d(""), Ne = F.anchor = O ? O.anchor : d("");
    let { patchFlag: Ee, dynamicChildren: te, slotScopeIds: q } = F;
    q && (xe = xe ? xe.concat(q) : q), O == null ? (n(ue, ae, ie), n(Ne, ae, ie), T(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      F.children || [],
      ae,
      Ne,
      fe,
      me,
      Ce,
      xe,
      le
    )) : Ee > 0 && Ee & 64 && te && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    O.dynamicChildren ? (R(
      O.dynamicChildren,
      te,
      ae,
      fe,
      me,
      Ce,
      xe
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (F.key != null || fe && F === fe.subTree) && qa(
      O,
      F,
      !0
      /* shallow */
    )) : L(
      O,
      F,
      ae,
      Ne,
      fe,
      me,
      Ce,
      xe,
      le
    );
  }, W = (O, F, ae, ie, fe, me, Ce, xe, le) => {
    F.slotScopeIds = xe, O == null ? F.shapeFlag & 512 ? fe.ctx.activate(
      F,
      ae,
      ie,
      Ce,
      le
    ) : se(
      F,
      ae,
      ie,
      fe,
      me,
      Ce,
      le
    ) : ee(O, F, le);
  }, se = (O, F, ae, ie, fe, me, Ce) => {
    const xe = O.component = Ed(
      O,
      ie,
      fe
    );
    if (Bn(O) && (xe.ctx.renderer = Oe), Td(xe, !1, Ce), xe.asyncDep) {
      if (fe && fe.registerDep(xe, A, Ce), !O.el) {
        const le = xe.subTree = C(bt);
        P(null, le, F, ae), O.placeholder = le.el;
      }
    } else
      A(
        xe,
        O,
        F,
        ae,
        fe,
        me,
        Ce
      );
  }, ee = (O, F, ae) => {
    const ie = F.component = O.component;
    if (cd(O, F, ae))
      if (ie.asyncDep && !ie.asyncResolved) {
        j(ie, F, ae);
        return;
      } else
        ie.next = F, ie.update();
    else
      F.el = O.el, ie.vnode = F;
  }, A = (O, F, ae, ie, fe, me, Ce) => {
    const xe = () => {
      if (O.isMounted) {
        let { next: Ee, bu: te, u: q, parent: De, vnode: we } = O;
        {
          const Ve = sr(O);
          if (Ve) {
            Ee && (Ee.el = we.el, j(O, Ee, Ce)), Ve.asyncDep.then(() => {
              O.isUnmounted || xe();
            });
            return;
          }
        }
        let ye = Ee, B;
        Hs(O, !1), Ee ? (Ee.el = we.el, j(O, Ee, Ce)) : Ee = we, te && pn(te), (B = Ee.props && Ee.props.onVnodeBeforeUpdate) && cs(B, De, Ee, we), Hs(O, !0);
        const U = _l(O), ce = O.subTree;
        O.subTree = U, S(
          ce,
          U,
          // parent may have changed if it's in a teleport
          g(ce.el),
          // anchor may have changed if it's in a fragment
          Ie(ce),
          O,
          fe,
          me
        ), Ee.el = U.el, ye === null && dd(O, U.el), q && St(q, fe), (B = Ee.props && Ee.props.onVnodeUpdated) && St(
          () => cs(B, De, Ee, we),
          fe
        );
      } else {
        let Ee;
        const { el: te, props: q } = F, { bm: De, m: we, parent: ye, root: B, type: U } = O, ce = vo(F);
        Hs(O, !1), De && pn(De), !ce && (Ee = q && q.onVnodeBeforeMount) && cs(Ee, ye, F), Hs(O, !0);
        {
          B.ce && // @ts-expect-error _def is private
          B.ce._def.shadowRoot !== !1 && B.ce._injectChildStyle(U);
          const Ve = O.subTree = _l(O);
          S(
            null,
            Ve,
            ae,
            ie,
            O,
            fe,
            me
          ), F.el = Ve.el;
        }
        if (we && St(we, fe), !ce && (Ee = q && q.onVnodeMounted)) {
          const Ve = F;
          St(
            () => cs(Ee, ye, Ve),
            fe
          );
        }
        (F.shapeFlag & 256 || ye && vo(ye.vnode) && ye.vnode.shapeFlag & 256) && O.a && St(O.a, fe), O.isMounted = !0, F = ae = ie = null;
      }
    };
    O.scope.on();
    const le = O.effect = new ii(xe);
    O.scope.off();
    const ue = O.update = le.run.bind(le), Ne = O.job = le.runIfDirty.bind(le);
    Ne.i = O, Ne.id = O.uid, le.scheduler = () => Wa(Ne), Hs(O, !0), ue();
  }, j = (O, F, ae) => {
    F.component = O;
    const ie = O.vnode.props;
    O.vnode = F, O.next = null, fd(O, F.props, ie, ae), gd(O, F.children, ae), xs(), cl(O), Ss();
  }, L = (O, F, ae, ie, fe, me, Ce, xe, le = !1) => {
    const ue = O && O.children, Ne = O ? O.shapeFlag : 0, Ee = F.children, { patchFlag: te, shapeFlag: q } = F;
    if (te > 0) {
      if (te & 128) {
        Y(
          ue,
          Ee,
          ae,
          ie,
          fe,
          me,
          Ce,
          xe,
          le
        );
        return;
      } else if (te & 256) {
        ne(
          ue,
          Ee,
          ae,
          ie,
          fe,
          me,
          Ce,
          xe,
          le
        );
        return;
      }
    }
    q & 8 ? (Ne & 16 && Se(ue, fe, me), Ee !== ue && v(ae, Ee)) : Ne & 16 ? q & 16 ? Y(
      ue,
      Ee,
      ae,
      ie,
      fe,
      me,
      Ce,
      xe,
      le
    ) : Se(ue, fe, me, !0) : (Ne & 8 && v(ae, ""), q & 16 && T(
      Ee,
      ae,
      ie,
      fe,
      me,
      Ce,
      xe,
      le
    ));
  }, ne = (O, F, ae, ie, fe, me, Ce, xe, le) => {
    O = O || uo, F = F || uo;
    const ue = O.length, Ne = F.length, Ee = Math.min(ue, Ne);
    let te;
    for (te = 0; te < Ee; te++) {
      const q = F[te] = le ? As(F[te]) : vs(F[te]);
      S(
        O[te],
        q,
        ae,
        null,
        fe,
        me,
        Ce,
        xe,
        le
      );
    }
    ue > Ne ? Se(
      O,
      fe,
      me,
      !0,
      !1,
      Ee
    ) : T(
      F,
      ae,
      ie,
      fe,
      me,
      Ce,
      xe,
      le,
      Ee
    );
  }, Y = (O, F, ae, ie, fe, me, Ce, xe, le) => {
    let ue = 0;
    const Ne = F.length;
    let Ee = O.length - 1, te = Ne - 1;
    for (; ue <= Ee && ue <= te; ) {
      const q = O[ue], De = F[ue] = le ? As(F[ue]) : vs(F[ue]);
      if (Js(q, De))
        S(
          q,
          De,
          ae,
          null,
          fe,
          me,
          Ce,
          xe,
          le
        );
      else
        break;
      ue++;
    }
    for (; ue <= Ee && ue <= te; ) {
      const q = O[Ee], De = F[te] = le ? As(F[te]) : vs(F[te]);
      if (Js(q, De))
        S(
          q,
          De,
          ae,
          null,
          fe,
          me,
          Ce,
          xe,
          le
        );
      else
        break;
      Ee--, te--;
    }
    if (ue > Ee) {
      if (ue <= te) {
        const q = te + 1, De = q < Ne ? F[q].el : ie;
        for (; ue <= te; )
          S(
            null,
            F[ue] = le ? As(F[ue]) : vs(F[ue]),
            ae,
            De,
            fe,
            me,
            Ce,
            xe,
            le
          ), ue++;
      }
    } else if (ue > te)
      for (; ue <= Ee; )
        $e(O[ue], fe, me, !0), ue++;
    else {
      const q = ue, De = ue, we = /* @__PURE__ */ new Map();
      for (ue = De; ue <= te; ue++) {
        const lt = F[ue] = le ? As(F[ue]) : vs(F[ue]);
        lt.key != null && we.set(lt.key, ue);
      }
      let ye, B = 0;
      const U = te - De + 1;
      let ce = !1, Ve = 0;
      const Qe = new Array(U);
      for (ue = 0; ue < U; ue++) Qe[ue] = 0;
      for (ue = q; ue <= Ee; ue++) {
        const lt = O[ue];
        if (B >= U) {
          $e(lt, fe, me, !0);
          continue;
        }
        let ut;
        if (lt.key != null)
          ut = we.get(lt.key);
        else
          for (ye = De; ye <= te; ye++)
            if (Qe[ye - De] === 0 && Js(lt, F[ye])) {
              ut = ye;
              break;
            }
        ut === void 0 ? $e(lt, fe, me, !0) : (Qe[ut - De] = ue + 1, ut >= Ve ? Ve = ut : ce = !0, S(
          lt,
          F[ut],
          ae,
          null,
          fe,
          me,
          Ce,
          xe,
          le
        ), B++);
      }
      const vt = ce ? _d(Qe) : uo;
      for (ye = vt.length - 1, ue = U - 1; ue >= 0; ue--) {
        const lt = De + ue, ut = F[lt], Mt = F[lt + 1], zt = lt + 1 < Ne ? (
          // #13559, fallback to el placeholder for unresolved async component
          Mt.el || Mt.placeholder
        ) : ie;
        Qe[ue] === 0 ? S(
          null,
          ut,
          ae,
          zt,
          fe,
          me,
          Ce,
          xe,
          le
        ) : ce && (ye < 0 || ue !== vt[ye] ? de(ut, ae, zt, 2) : ye--);
      }
    }
  }, de = (O, F, ae, ie, fe = null) => {
    const { el: me, type: Ce, transition: xe, children: le, shapeFlag: ue } = O;
    if (ue & 6) {
      de(O.component.subTree, F, ae, ie);
      return;
    }
    if (ue & 128) {
      O.suspense.move(F, ae, ie);
      return;
    }
    if (ue & 64) {
      Ce.move(O, F, ae, Oe);
      return;
    }
    if (Ce === G) {
      n(me, F, ae);
      for (let Ee = 0; Ee < le.length; Ee++)
        de(le[Ee], F, ae, ie);
      n(O.anchor, F, ae);
      return;
    }
    if (Ce === oa) {
      I(O, F, ae);
      return;
    }
    if (ie !== 2 && ue & 1 && xe)
      if (ie === 0)
        xe.beforeEnter(me), n(me, F, ae), St(() => xe.enter(me), fe);
      else {
        const { leave: Ee, delayLeave: te, afterLeave: q } = xe, De = () => {
          O.ctx.isUnmounted ? l(me) : n(me, F, ae);
        }, we = () => {
          me._isLeaving && me[bs](
            !0
            /* cancelled */
          ), Ee(me, () => {
            De(), q && q();
          });
        };
        te ? te(me, De, we) : we();
      }
    else
      n(me, F, ae);
  }, $e = (O, F, ae, ie = !1, fe = !1) => {
    const {
      type: me,
      props: Ce,
      ref: xe,
      children: le,
      dynamicChildren: ue,
      shapeFlag: Ne,
      patchFlag: Ee,
      dirs: te,
      cacheIndex: q
    } = O;
    if (Ee === -2 && (fe = !1), xe != null && (xs(), zo(xe, null, ae, O, !0), Ss()), q != null && (F.renderCache[q] = void 0), Ne & 256) {
      F.ctx.deactivate(O);
      return;
    }
    const De = Ne & 1 && te, we = !vo(O);
    let ye;
    if (we && (ye = Ce && Ce.onVnodeBeforeUnmount) && cs(ye, F, O), Ne & 6)
      Le(O.component, ae, ie);
    else {
      if (Ne & 128) {
        O.suspense.unmount(ae, ie);
        return;
      }
      De && js(O, null, F, "beforeUnmount"), Ne & 64 ? O.type.remove(
        O,
        F,
        ae,
        Oe,
        ie
      ) : ue && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ue.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (me !== G || Ee > 0 && Ee & 64) ? Se(
        ue,
        F,
        ae,
        !1,
        !0
      ) : (me === G && Ee & 384 || !fe && Ne & 16) && Se(le, F, ae), ie && Pe(O);
    }
    (we && (ye = Ce && Ce.onVnodeUnmounted) || De) && St(() => {
      ye && cs(ye, F, O), De && js(O, null, F, "unmounted");
    }, ae);
  }, Pe = (O) => {
    const { type: F, el: ae, anchor: ie, transition: fe } = O;
    if (F === G) {
      Ge(ae, ie);
      return;
    }
    if (F === oa) {
      x(O);
      return;
    }
    const me = () => {
      l(ae), fe && !fe.persisted && fe.afterLeave && fe.afterLeave();
    };
    if (O.shapeFlag & 1 && fe && !fe.persisted) {
      const { leave: Ce, delayLeave: xe } = fe, le = () => Ce(ae, me);
      xe ? xe(O.el, me, le) : le();
    } else
      me();
  }, Ge = (O, F) => {
    let ae;
    for (; O !== F; )
      ae = w(O), l(O), O = ae;
    l(F);
  }, Le = (O, F, ae) => {
    const { bum: ie, scope: fe, job: me, subTree: Ce, um: xe, m: le, a: ue } = O;
    $l(le), $l(ue), ie && pn(ie), fe.stop(), me && (me.flags |= 8, $e(Ce, O, F, ae)), xe && St(xe, F), St(() => {
      O.isUnmounted = !0;
    }, F);
  }, Se = (O, F, ae, ie = !1, fe = !1, me = 0) => {
    for (let Ce = me; Ce < O.length; Ce++)
      $e(O[Ce], F, ae, ie, fe);
  }, Ie = (O) => {
    if (O.shapeFlag & 6)
      return Ie(O.component.subTree);
    if (O.shapeFlag & 128)
      return O.suspense.next();
    const F = w(O.anchor || O.el), ae = F && F[Ii];
    return ae ? w(ae) : F;
  };
  let _e = !1;
  const ge = (O, F, ae) => {
    O == null ? F._vnode && $e(F._vnode, null, null, !0) : S(
      F._vnode || null,
      O,
      F,
      null,
      null,
      null,
      ae
    ), F._vnode = O, _e || (_e = !0, cl(), Ci(), _e = !1);
  }, Oe = {
    p: S,
    um: $e,
    m: de,
    r: Pe,
    mt: se,
    mc: T,
    pc: L,
    pbc: R,
    n: Ie,
    o: e
  };
  return {
    render: ge,
    hydrate: void 0,
    createApp: Zc(ge)
  };
}
function sa({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function Hs({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function wd(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function qa(e, s, o = !1) {
  const n = e.children, l = s.children;
  if (Be(n) && Be(l))
    for (let i = 0; i < n.length; i++) {
      const c = n[i];
      let d = l[i];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = l[i] = As(l[i]), d.el = c.el), !o && d.patchFlag !== -2 && qa(c, d)), d.type === Gn && // avoid cached text nodes retaining detached dom nodes
      d.patchFlag !== -1 && (d.el = c.el), d.type === bt && !d.el && (d.el = c.el);
    }
}
function _d(e) {
  const s = e.slice(), o = [0];
  let n, l, i, c, d;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const m = e[n];
    if (m !== 0) {
      if (l = o[o.length - 1], e[l] < m) {
        s[n] = l, o.push(n);
        continue;
      }
      for (i = 0, c = o.length - 1; i < c; )
        d = i + c >> 1, e[o[d]] < m ? i = d + 1 : c = d;
      m < e[o[i]] && (i > 0 && (s[n] = o[i - 1]), o[i] = n);
    }
  }
  for (i = o.length, c = o[i - 1]; i-- > 0; )
    o[i] = c, c = s[c];
  return o;
}
function sr(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : sr(s);
}
function $l(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const or = (e) => e.__isSuspense;
function bd(e, s) {
  s && s.pendingBranch ? Be(e) ? s.effects.push(...e) : s.effects.push(e) : Rc(e);
}
const G = Symbol.for("v-fgt"), Gn = Symbol.for("v-txt"), bt = Symbol.for("v-cmt"), oa = Symbol.for("v-stc"), Bo = [];
let Nt = null;
function a(e = !1) {
  Bo.push(Nt = e ? null : []);
}
function kd() {
  Bo.pop(), Nt = Bo[Bo.length - 1] || null;
}
let Yo = 1;
function En(e, s = !1) {
  Yo += e, e < 0 && Nt && s && (Nt.hasOnce = !0);
}
function nr(e) {
  return e.dynamicChildren = Yo > 0 ? Nt || uo : null, kd(), Yo > 0 && Nt && Nt.push(e), e;
}
function r(e, s, o, n, l, i) {
  return nr(
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
function M(e, s, o, n, l) {
  return nr(
    C(
      e,
      s,
      o,
      n,
      l,
      !0
    )
  );
}
function Jo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Js(e, s) {
  return e.type === s.type && e.key === s.key;
}
const ar = ({ key: e }) => e ?? null, yn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? dt(e) || $t(e) || je(e) ? { i: yt, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, n = 0, l = null, i = e === G ? 0 : 1, c = !1, d = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && ar(s),
    ref: s && yn(s),
    scopeId: Si,
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
    ctx: yt
  };
  return d ? (Ya(u, o), i & 128 && e.normalize(u)) : o && (u.shapeFlag |= dt(o) ? 8 : 16), Yo > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Nt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && Nt.push(u), u;
}
const C = $d;
function $d(e, s = null, o = null, n = 0, l = null, i = !1) {
  if ((!e || e === Fi) && (e = bt), Jo(e)) {
    const d = Us(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && Ya(d, o), Yo > 0 && !i && Nt && (d.shapeFlag & 6 ? Nt[Nt.indexOf(e)] = d : Nt.push(d)), d.patchFlag = -2, d;
  }
  if (Ld(e) && (e = e.__vccOpts), s) {
    s = Cd(s);
    let { class: d, style: u } = s;
    d && !dt(d) && (s.class = Te(d)), tt(u) && (Va(u) && !Be(u) && (u = gt({}, u)), s.style = Ht(u));
  }
  const c = dt(e) ? 1 : or(e) ? 128 : Ei(e) ? 64 : tt(e) ? 4 : je(e) ? 2 : 0;
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
function Cd(e) {
  return e ? Va(e) || Ji(e) ? gt({}, e) : e : null;
}
function Us(e, s, o = !1, n = !1) {
  const { props: l, ref: i, patchFlag: c, children: d, transition: u } = e, m = s ? xd(l || {}, s) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && ar(m),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && i ? Be(i) ? i.concat(yn(s)) : [i, yn(s)] : yn(s)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: d,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: s && e.type !== G ? c === -1 ? 16 : c | 16 : c,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Us(e.ssContent),
    ssFallback: e.ssFallback && Us(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && n && eo(
    v,
    u.clone(v)
  ), v;
}
function b(e = " ", s = 0) {
  return C(Gn, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (a(), M(bt, null, e)) : C(bt, null, e);
}
function vs(e) {
  return e == null || typeof e == "boolean" ? C(bt) : Be(e) ? C(
    G,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Jo(e) ? As(e) : C(Gn, null, String(e));
}
function As(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Us(e);
}
function Ya(e, s) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (s == null)
    s = null;
  else if (Be(s))
    o = 16;
  else if (typeof s == "object")
    if (n & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), Ya(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !Ji(s) ? s._ctx = yt : l === 3 && yt && (yt.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else je(s) ? (s = { default: s, _ctx: yt }, o = 32) : (s = String(s), n & 64 ? (o = 16, s = [b(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function xd(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        s.class !== n.class && (s.class = Te([s.class, n.class]));
      else if (l === "style")
        s.style = Ht([s.style, n.style]);
      else if (Ln(l)) {
        const i = s[l], c = n[l];
        c && i !== c && !(Be(i) && i.includes(c)) && (s[l] = i ? [].concat(i, c) : c);
      } else l !== "" && (s[l] = n[l]);
  }
  return s;
}
function cs(e, s, o, n = null) {
  os(e, s, 7, [
    o,
    n
  ]);
}
const Sd = Gi();
let Id = 0;
function Ed(e, s, o) {
  const n = e.type, l = (s ? s.appContext : e.appContext) || Sd, i = {
    uid: Id++,
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
    scope: new ec(
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
    propsOptions: Qi(n, l),
    emitsOptions: Ki(n, l),
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
  return i.ctx = { _: i }, i.root = s ? s.root : i, i.emit = ad.bind(null, i), e.ce && e.ce(i), i;
}
let kt = null;
const Ja = () => kt || yt;
let Tn, $a;
{
  const e = Un(), s = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (i) => {
      l.length > 1 ? l.forEach((c) => c(i)) : l[0](i);
    };
  };
  Tn = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => kt = o
  ), $a = s(
    "__VUE_SSR_SETTERS__",
    (o) => Xo = o
  );
}
const tn = (e) => {
  const s = kt;
  return Tn(e), e.scope.on(), () => {
    e.scope.off(), Tn(s);
  };
}, Cl = () => {
  kt && kt.scope.off(), Tn(null);
};
function lr(e) {
  return e.vnode.shapeFlag & 4;
}
let Xo = !1;
function Td(e, s = !1, o = !1) {
  s && $a(s);
  const { props: n, children: l } = e.vnode, i = lr(e);
  ud(e, n, i, s), pd(e, l, o || s);
  const c = i ? Pd(e, s) : void 0;
  return s && $a(!1), c;
}
function Pd(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Hc);
  const { setup: n } = o;
  if (n) {
    xs();
    const l = e.setupContext = n.length > 1 ? Md(e) : null, i = tn(e), c = en(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), d = ei(c);
    if (Ss(), i(), (d || e.sp) && !vo(e) && Ai(e), d) {
      if (c.then(Cl, Cl), s)
        return c.then((u) => {
          xl(e, u);
        }).catch((u) => {
          Fn(u, e, 0);
        });
      e.asyncDep = c;
    } else
      xl(e, c);
  } else
    ir(e);
}
function xl(e, s, o) {
  je(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : tt(s) && (e.setupState = bi(s)), ir(e);
}
function ir(e, s, o) {
  const n = e.type;
  e.render || (e.render = n.render || ps);
  {
    const l = tn(e);
    xs();
    try {
      Kc(e);
    } finally {
      Ss(), l();
    }
  }
}
const Rd = {
  get(e, s) {
    return _t(e, "get", ""), e[s];
  }
};
function Md(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Rd),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function jn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(bi(bc(e.exposed)), {
    get(s, o) {
      if (o in s)
        return s[o];
      if (o in Fo)
        return Fo[o](e);
    },
    has(s, o) {
      return o in s || o in Fo;
    }
  })) : e.proxy;
}
function Dd(e, s = !0) {
  return je(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function Ld(e) {
  return je(e) && "__vccOpts" in e;
}
const N = (e, s) => Sc(e, s, Xo);
function sn(e, s, o) {
  try {
    En(-1);
    const n = arguments.length;
    return n === 2 ? tt(s) && !Be(s) ? Jo(s) ? C(e, null, [s]) : C(e, s) : C(e, null, s) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && Jo(o) && (o = [o]), C(e, s, o));
  } finally {
    En(1);
  }
}
const Od = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ca;
const Sl = typeof window < "u" && window.trustedTypes;
if (Sl)
  try {
    Ca = /* @__PURE__ */ Sl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const rr = Ca ? (e) => Ca.createHTML(e) : (e) => e, Ad = "http://www.w3.org/2000/svg", Nd = "http://www.w3.org/1998/Math/MathML", _s = typeof document < "u" ? document : null, Il = _s && /* @__PURE__ */ _s.createElement("template"), Ud = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, n) => {
    const l = s === "svg" ? _s.createElementNS(Ad, e) : s === "mathml" ? _s.createElementNS(Nd, e) : o ? _s.createElement(e, { is: o }) : _s.createElement(e);
    return e === "select" && n && n.multiple != null && l.setAttribute("multiple", n.multiple), l;
  },
  createText: (e) => _s.createTextNode(e),
  createComment: (e) => _s.createComment(e),
  setText: (e, s) => {
    e.nodeValue = s;
  },
  setElementText: (e, s) => {
    e.textContent = s;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => _s.querySelector(e),
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
      Il.innerHTML = rr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const d = Il.content;
      if (n === "svg" || n === "mathml") {
        const u = d.firstChild;
        for (; u.firstChild; )
          d.appendChild(u.firstChild);
        d.removeChild(u);
      }
      s.insertBefore(d, o);
    }
    return [
      // first
      c ? c.nextSibling : s.firstChild,
      // last
      o ? o.previousSibling : s.lastChild
    ];
  }
}, Ms = "transition", Eo = "animation", yo = Symbol("_vtc"), cr = {
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
}, dr = /* @__PURE__ */ gt(
  {},
  Mi,
  cr
), zd = (e) => (e.displayName = "Transition", e.props = dr, e), Fd = /* @__PURE__ */ zd(
  (e, { slots: s }) => sn(Lc, ur(e), s)
), Ks = (e, s = []) => {
  Be(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, El = (e) => e ? Be(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function ur(e) {
  const s = {};
  for (const J in e)
    J in cr || (s[J] = e[J]);
  if (e.css === !1)
    return s;
  const {
    name: o = "v",
    type: n,
    duration: l,
    enterFromClass: i = `${o}-enter-from`,
    enterActiveClass: c = `${o}-enter-active`,
    enterToClass: d = `${o}-enter-to`,
    appearFromClass: u = i,
    appearActiveClass: m = c,
    appearToClass: v = d,
    leaveFromClass: g = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: p = `${o}-leave-to`
  } = e, _ = Bd(l), S = _ && _[0], $ = _ && _[1], {
    onBeforeEnter: P,
    onEnter: D,
    onEnterCancelled: I,
    onLeave: x,
    onLeaveCancelled: K,
    onBeforeAppear: V = P,
    onAppear: z = D,
    onAppearCancelled: T = I
  } = s, E = (J, W, se, ee) => {
    J._enterCancelled = ee, Ds(J, W ? v : d), Ds(J, W ? m : c), se && se();
  }, R = (J, W) => {
    J._isLeaving = !1, Ds(J, g), Ds(J, p), Ds(J, w), W && W();
  }, Z = (J) => (W, se) => {
    const ee = J ? z : D, A = () => E(W, J, se);
    Ks(ee, [W, A]), Tl(() => {
      Ds(W, J ? u : i), us(W, J ? v : d), El(ee) || Pl(W, n, S, A);
    });
  };
  return gt(s, {
    onBeforeEnter(J) {
      Ks(P, [J]), us(J, i), us(J, c);
    },
    onBeforeAppear(J) {
      Ks(V, [J]), us(J, u), us(J, m);
    },
    onEnter: Z(!1),
    onAppear: Z(!0),
    onLeave(J, W) {
      J._isLeaving = !0;
      const se = () => R(J, W);
      us(J, g), J._enterCancelled ? (us(J, w), xa(J)) : (xa(J), us(J, w)), Tl(() => {
        J._isLeaving && (Ds(J, g), us(J, p), El(x) || Pl(J, n, $, se));
      }), Ks(x, [J, se]);
    },
    onEnterCancelled(J) {
      E(J, !1, void 0, !0), Ks(I, [J]);
    },
    onAppearCancelled(J) {
      E(J, !0, void 0, !0), Ks(T, [J]);
    },
    onLeaveCancelled(J) {
      R(J), Ks(K, [J]);
    }
  });
}
function Bd(e) {
  if (e == null)
    return null;
  if (tt(e))
    return [na(e.enter), na(e.leave)];
  {
    const s = na(e);
    return [s, s];
  }
}
function na(e) {
  return Hr(e);
}
function us(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[yo] || (e[yo] = /* @__PURE__ */ new Set())).add(s);
}
function Ds(e, s) {
  s.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[yo];
  o && (o.delete(s), o.size || (e[yo] = void 0));
}
function Tl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Vd = 0;
function Pl(e, s, o, n) {
  const l = e._endId = ++Vd, i = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(i, o);
  const { type: c, timeout: d, propCount: u } = fr(e, s);
  if (!c)
    return n();
  const m = c + "end";
  let v = 0;
  const g = () => {
    e.removeEventListener(m, w), i();
  }, w = (p) => {
    p.target === e && ++v >= u && g();
  };
  setTimeout(() => {
    v < u && g();
  }, d + 1), e.addEventListener(m, w);
}
function fr(e, s) {
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${Ms}Delay`), i = n(`${Ms}Duration`), c = Rl(l, i), d = n(`${Eo}Delay`), u = n(`${Eo}Duration`), m = Rl(d, u);
  let v = null, g = 0, w = 0;
  s === Ms ? c > 0 && (v = Ms, g = c, w = i.length) : s === Eo ? m > 0 && (v = Eo, g = m, w = u.length) : (g = Math.max(c, m), v = g > 0 ? c > m ? Ms : Eo : null, w = v ? v === Ms ? i.length : u.length : 0);
  const p = v === Ms && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Ms}Property`).toString()
  );
  return {
    type: v,
    timeout: g,
    propCount: w,
    hasTransform: p
  };
}
function Rl(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, n) => Ml(o) + Ml(e[n])));
}
function Ml(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function xa(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Wd(e, s, o) {
  const n = e[yo];
  n && (s = (s ? [s, ...n] : [...n]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Dl = Symbol("_vod"), Gd = Symbol("_vsh"), jd = Symbol(""), Hd = /(?:^|;)\s*display\s*:/;
function Kd(e, s, o) {
  const n = e.style, l = dt(o);
  let i = !1;
  if (o && !l) {
    if (s)
      if (dt(s))
        for (const c of s.split(";")) {
          const d = c.slice(0, c.indexOf(":")).trim();
          o[d] == null && wn(n, d, "");
        }
      else
        for (const c in s)
          o[c] == null && wn(n, c, "");
    for (const c in o)
      c === "display" && (i = !0), wn(n, c, o[c]);
  } else if (l) {
    if (s !== o) {
      const c = n[jd];
      c && (o += ";" + c), n.cssText = o, i = Hd.test(o);
    }
  } else s && e.removeAttribute("style");
  Dl in e && (e[Dl] = i ? n.display : "", e[Gd] && (n.display = "none"));
}
const Ll = /\s*!important$/;
function wn(e, s, o) {
  if (Be(o))
    o.forEach((n) => wn(e, s, n));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const n = qd(e, s);
    Ll.test(o) ? e.setProperty(
      Fs(n),
      o.replace(Ll, ""),
      "important"
    ) : e[n] = o;
  }
}
const Ol = ["Webkit", "Moz", "ms"], aa = {};
function qd(e, s) {
  const o = aa[s];
  if (o)
    return o;
  let n = jt(s);
  if (n !== "filter" && n in e)
    return aa[s] = n;
  n = An(n);
  for (let l = 0; l < Ol.length; l++) {
    const i = Ol[l] + n;
    if (i in e)
      return aa[s] = i;
  }
  return s;
}
const Al = "http://www.w3.org/1999/xlink";
function Nl(e, s, o, n, l, i = Qr(s)) {
  n && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Al, s.slice(6, s.length)) : e.setAttributeNS(Al, s, o) : o == null || i && !ni(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    i ? "" : ts(o) ? String(o) : o
  );
}
function Ul(e, s, o, n, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? rr(o) : o);
    return;
  }
  const i = e.tagName;
  if (s === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const d = i === "OPTION" ? e.getAttribute("value") || "" : e.value, u = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (d !== u || !("_value" in e)) && (e.value = u), o == null && e.removeAttribute(s), e._value = o;
    return;
  }
  let c = !1;
  if (o === "" || o == null) {
    const d = typeof e[s];
    d === "boolean" ? o = ni(o) : o == null && d === "string" ? (o = "", c = !0) : d === "number" && (o = 0, c = !0);
  }
  try {
    e[s] = o;
  } catch {
  }
  c && e.removeAttribute(l || s);
}
function Cs(e, s, o, n) {
  e.addEventListener(s, o, n);
}
function Yd(e, s, o, n) {
  e.removeEventListener(s, o, n);
}
const zl = Symbol("_vei");
function Jd(e, s, o, n, l = null) {
  const i = e[zl] || (e[zl] = {}), c = i[s];
  if (n && c)
    c.value = n;
  else {
    const [d, u] = Xd(s);
    if (n) {
      const m = i[s] = eu(
        n,
        l
      );
      Cs(e, d, m, u);
    } else c && (Yd(e, d, c, u), i[s] = void 0);
  }
}
const Fl = /(?:Once|Passive|Capture)$/;
function Xd(e) {
  let s;
  if (Fl.test(e)) {
    s = {};
    let n;
    for (; n = e.match(Fl); )
      e = e.slice(0, e.length - n[0].length), s[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Fs(e.slice(2)), s];
}
let la = 0;
const Qd = /* @__PURE__ */ Promise.resolve(), Zd = () => la || (Qd.then(() => la = 0), la = Date.now());
function eu(e, s) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    os(
      tu(n, o.value),
      s,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = Zd(), o;
}
function tu(e, s) {
  if (Be(s)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, s.map(
      (n) => (l) => !l._stopped && n && n(l)
    );
  } else
    return s;
}
const Bl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, su = (e, s, o, n, l, i) => {
  const c = l === "svg";
  s === "class" ? Wd(e, n, c) : s === "style" ? Kd(e, o, n) : Ln(s) ? Ma(s) || Jd(e, s, o, n, i) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : ou(e, s, n, c)) ? (Ul(e, s, n), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Nl(e, s, n, c, i, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !dt(n)) ? Ul(e, jt(s), n, i, s) : (s === "true-value" ? e._trueValue = n : s === "false-value" && (e._falseValue = n), Nl(e, s, n, c));
};
function ou(e, s, o, n) {
  if (n)
    return !!(s === "innerHTML" || s === "textContent" || s in e && Bl(s) && je(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return Bl(s) && dt(o) ? !1 : s in e;
}
const mr = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), Pn = Symbol("_moveCb"), Vl = Symbol("_enterCb"), nu = (e) => (delete e.props.mode, e), au = /* @__PURE__ */ nu({
  name: "TransitionGroup",
  props: /* @__PURE__ */ gt({}, dr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = Ja(), n = Ri();
    let l, i;
    return Ui(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!du(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(iu), l.forEach(ru);
      const d = l.filter(cu);
      xa(o.vnode.el), d.forEach((u) => {
        const m = u.el, v = m.style;
        us(m, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const g = m[Pn] = (w) => {
          w && w.target !== m || (!w || w.propertyName.endsWith("transform")) && (m.removeEventListener("transitionend", g), m[Pn] = null, Ds(m, c));
        };
        m.addEventListener("transitionend", g);
      }), l = [];
    }), () => {
      const c = Xe(e), d = ur(c);
      let u = c.tag || G;
      if (l = [], i)
        for (let m = 0; m < i.length; m++) {
          const v = i[m];
          v.el && v.el instanceof Element && (l.push(v), eo(
            v,
            qo(
              v,
              d,
              n,
              o
            )
          ), mr.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      i = s.default ? Ga(s.default()) : [];
      for (let m = 0; m < i.length; m++) {
        const v = i[m];
        v.key != null && eo(
          v,
          qo(v, d, n, o)
        );
      }
      return C(u, null, i);
    };
  }
}), lu = au;
function iu(e) {
  const s = e.el;
  s[Pn] && s[Pn](), s[Vl] && s[Vl]();
}
function ru(e) {
  vr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function cu(e) {
  const s = mr.get(e), o = vr.get(e), n = s.left - o.left, l = s.top - o.top;
  if (n || l) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${n}px,${l}px)`, i.transitionDuration = "0s", e;
  }
}
function du(e, s, o) {
  const n = e.cloneNode(), l = e[yo];
  l && l.forEach((d) => {
    d.split(/\s+/).forEach((u) => u && n.classList.remove(u));
  }), o.split(/\s+/).forEach((d) => d && n.classList.add(d)), n.style.display = "none";
  const i = s.nodeType === 1 ? s : s.parentNode;
  i.appendChild(n);
  const { hasTransform: c } = fr(n);
  return i.removeChild(n), c;
}
const zs = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Be(s) ? (o) => pn(s, o) : s;
};
function uu(e) {
  e.target.composing = !0;
}
function Wl(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const Gt = Symbol("_assign");
function Gl(e, s, o) {
  return s && (e = e.trim()), o && (e = Nn(e)), e;
}
const Ut = {
  created(e, { modifiers: { lazy: s, trim: o, number: n } }, l) {
    e[Gt] = zs(l);
    const i = n || l.props && l.props.type === "number";
    Cs(e, s ? "change" : "input", (c) => {
      c.target.composing || e[Gt](Gl(e.value, o, i));
    }), (o || i) && Cs(e, "change", () => {
      e.value = Gl(e.value, o, i);
    }), s || (Cs(e, "compositionstart", uu), Cs(e, "compositionend", Wl), Cs(e, "change", Wl));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: n, trim: l, number: i } }, c) {
    if (e[Gt] = zs(c), e.composing) return;
    const d = (i || e.type === "number") && !/^0\d/.test(e.value) ? Nn(e.value) : e.value, u = s ?? "";
    d !== u && (document.activeElement === e && e.type !== "range" && (n && s === o || l && e.value.trim() === u) || (e.value = u));
  }
}, Qo = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[Gt] = zs(o), Cs(e, "change", () => {
      const n = e._modelValue, l = wo(e), i = e.checked, c = e[Gt];
      if (Be(n)) {
        const d = Oa(n, l), u = d !== -1;
        if (i && !u)
          c(n.concat(l));
        else if (!i && u) {
          const m = [...n];
          m.splice(d, 1), c(m);
        }
      } else if (_o(n)) {
        const d = new Set(n);
        i ? d.add(l) : d.delete(l), c(d);
      } else
        c(pr(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: jl,
  beforeUpdate(e, s, o) {
    e[Gt] = zs(o), jl(e, s, o);
  }
};
function jl(e, { value: s, oldValue: o }, n) {
  e._modelValue = s;
  let l;
  if (Be(s))
    l = Oa(s, n.props.value) > -1;
  else if (_o(s))
    l = s.has(n.props.value);
  else {
    if (s === o) return;
    l = Zs(s, pr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Xt = {
  created(e, { value: s }, o) {
    e.checked = Zs(s, o.props.value), e[Gt] = zs(o), Cs(e, "change", () => {
      e[Gt](wo(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, n) {
    e[Gt] = zs(n), s !== o && (e.checked = Zs(s, n.props.value));
  }
}, gs = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, n) {
    const l = _o(s);
    Cs(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? Nn(wo(c)) : wo(c)
      );
      e[Gt](
        e.multiple ? l ? new Set(i) : i : i[0]
      ), e._assigning = !0, Et(() => {
        e._assigning = !1;
      });
    }), e[Gt] = zs(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    Hl(e, s);
  },
  beforeUpdate(e, s, o) {
    e[Gt] = zs(o);
  },
  updated(e, { value: s }) {
    e._assigning || Hl(e, s);
  }
};
function Hl(e, s) {
  const o = e.multiple, n = Be(s);
  if (!(o && !n && !_o(s))) {
    for (let l = 0, i = e.options.length; l < i; l++) {
      const c = e.options[l], d = wo(c);
      if (o)
        if (n) {
          const u = typeof d;
          u === "string" || u === "number" ? c.selected = s.some((m) => String(m) === String(d)) : c.selected = Oa(s, d) > -1;
        } else
          c.selected = s.has(d);
      else if (Zs(wo(c), s)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function wo(e) {
  return "_value" in e ? e._value : e.value;
}
function pr(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
}
const Hn = {
  created(e, s, o) {
    dn(e, s, o, null, "created");
  },
  mounted(e, s, o) {
    dn(e, s, o, null, "mounted");
  },
  beforeUpdate(e, s, o, n) {
    dn(e, s, o, n, "beforeUpdate");
  },
  updated(e, s, o, n) {
    dn(e, s, o, n, "updated");
  }
};
function fu(e, s) {
  switch (e) {
    case "SELECT":
      return gs;
    case "TEXTAREA":
      return Ut;
    default:
      switch (s) {
        case "checkbox":
          return Qo;
        case "radio":
          return Xt;
        default:
          return Ut;
      }
  }
}
function dn(e, s, o, n, l) {
  const c = fu(
    e.tagName,
    o.props && o.props.type
  )[l];
  c && c(e, s, o, n);
}
const mu = ["ctrl", "shift", "alt", "meta"], vu = {
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
  exact: (e, s) => mu.some((o) => e[`${o}Key`] && !s.includes(o))
}, rt = (e, s) => {
  const o = e._withMods || (e._withMods = {}), n = s.join(".");
  return o[n] || (o[n] = ((l, ...i) => {
    for (let c = 0; c < s.length; c++) {
      const d = vu[s[c]];
      if (d && d(l, s)) return;
    }
    return e(l, ...i);
  }));
}, pu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Zt = (e, s) => {
  const o = e._withKeys || (e._withKeys = {}), n = s.join(".");
  return o[n] || (o[n] = ((l) => {
    if (!("key" in l))
      return;
    const i = Fs(l.key);
    if (s.some(
      (c) => c === i || pu[c] === i
    ))
      return e(l);
  }));
}, gu = /* @__PURE__ */ gt({ patchProp: su }, Ud);
let Kl;
function hu() {
  return Kl || (Kl = hd(gu));
}
const Kn = ((...e) => {
  const s = hu().createApp(...e), { mount: o } = s;
  return s.mount = (n) => {
    const l = wu(n);
    if (!l) return;
    const i = s._component;
    !je(i) && !i.render && !i.template && (i.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, yu(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, s;
});
function yu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function wu(e) {
  return dt(e) ? document.querySelector(e) : e;
}
const _u = { class: "panel-layout" }, bu = {
  key: 0,
  class: "panel-layout-header"
}, ku = {
  key: 1,
  class: "panel-layout-search"
}, $u = { class: "panel-layout-content" }, Cu = {
  key: 2,
  class: "panel-layout-footer"
}, xu = /* @__PURE__ */ ve({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (a(), r("div", _u, [
      s.$slots.header ? (a(), r("div", bu, [
        qe(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (a(), r("div", ku, [
        qe(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", $u, [
        qe(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (a(), r("div", Cu, [
        qe(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), pe = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of s)
    o[n] = l;
  return o;
}, Pt = /* @__PURE__ */ pe(xu, [["__scopeId", "data-v-21565df9"]]), Su = {
  key: 0,
  class: "panel-title-prefix"
}, Iu = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Eu = /* @__PURE__ */ ve({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (a(), M(ja(`h${e.level}`), {
      class: Te(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (a(), r("span", Su, f(e.prefix), 1)) : (a(), r("span", Iu)),
        qe(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Tu = /* @__PURE__ */ pe(Eu, [["__scopeId", "data-v-c3875efc"]]), Pu = ["title"], Ru = ["width", "height"], Mu = /* @__PURE__ */ ve({
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
      ])], 8, Ru))
    ], 8, Pu));
  }
}), gr = /* @__PURE__ */ pe(Mu, [["__scopeId", "data-v-6fc7f16d"]]), Du = { class: "header-left" }, Lu = {
  key: 0,
  class: "header-actions"
}, Ou = /* @__PURE__ */ ve({
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
      class: Te(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Du, [
        C(Tu, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            b(f(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), M(gr, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (a(), r("div", Lu, [
        qe(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Rt = /* @__PURE__ */ pe(Ou, [["__scopeId", "data-v-55a62cd6"]]), Au = {
  key: 0,
  class: "section-title-count"
}, Nu = {
  key: 1,
  class: "section-title-icon"
}, Uu = /* @__PURE__ */ ve({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (a(), M(ja(`h${e.level}`), {
      class: Te(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, {
      default: h(() => [
        qe(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", Au, "(" + f(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), r("span", Nu, f(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), At = /* @__PURE__ */ pe(Uu, [["__scopeId", "data-v-559361eb"]]), zu = { class: "status-grid" }, Fu = { class: "status-grid__columns" }, Bu = { class: "status-grid__column" }, Vu = { class: "status-grid__title" }, Wu = { class: "status-grid__column status-grid__column--right" }, Gu = { class: "status-grid__title" }, ju = {
  key: 0,
  class: "status-grid__footer"
}, Hu = /* @__PURE__ */ ve({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (a(), r("div", zu, [
      t("div", Fu, [
        t("div", Bu, [
          t("h4", Vu, f(e.leftTitle), 1),
          qe(s.$slots, "left", {}, void 0)
        ]),
        t("div", Wu, [
          t("h4", Gu, f(e.rightTitle), 1),
          qe(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (a(), r("div", ju, [
        qe(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Ku = /* @__PURE__ */ pe(Hu, [["__scopeId", "data-v-73b7ba3f"]]), qu = {
  key: 0,
  class: "status-item__icon"
}, Yu = {
  key: 1,
  class: "status-item__count"
}, Ju = { class: "status-item__label" }, Xu = /* @__PURE__ */ ve({
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
      class: Te(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), r("span", qu, f(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), r("span", Yu, f(e.count), 1)) : y("", !0),
      t("span", Ju, f(e.label), 1)
    ], 2));
  }
}), ds = /* @__PURE__ */ pe(Xu, [["__scopeId", "data-v-6f929183"]]), Qu = { class: "issue-card__header" }, Zu = { class: "issue-card__icon" }, ef = { class: "issue-card__title" }, tf = {
  key: 0,
  class: "issue-card__content"
}, sf = {
  key: 0,
  class: "issue-card__description"
}, of = {
  key: 1,
  class: "issue-card__items"
}, nf = {
  key: 2,
  class: "issue-card__actions"
}, af = /* @__PURE__ */ ve({
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
      class: Te(["issue-card", o.value])
    }, [
      t("div", Qu, [
        t("span", Zu, f(e.icon), 1),
        t("h4", ef, f(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), r("div", tf, [
        e.description ? (a(), r("p", sf, f(e.description), 1)) : y("", !0),
        qe(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), r("div", of, [
        (a(!0), r(G, null, he(e.items, (i, c) => (a(), r("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, f(i), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), r("div", nf, [
        qe(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Yt = /* @__PURE__ */ pe(af, [["__scopeId", "data-v-df6aa348"]]), lf = ["type", "disabled"], rf = {
  key: 0,
  class: "spinner"
}, cf = /* @__PURE__ */ ve({
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
      class: Te(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), r("span", rf)) : y("", !0),
      e.loading ? y("", !0) : qe(s.$slots, "default", { key: 1 }, void 0)
    ], 10, lf));
  }
}), re = /* @__PURE__ */ pe(cf, [["__scopeId", "data-v-772abe47"]]), df = { class: "empty-state" }, uf = {
  key: 0,
  class: "empty-icon"
}, ff = { class: "empty-message" }, mf = /* @__PURE__ */ ve({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (a(), r("div", df, [
      e.icon ? (a(), r("div", uf, f(e.icon), 1)) : y("", !0),
      t("p", ff, f(e.message), 1),
      e.actionLabel ? (a(), M(re, {
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
}), ns = /* @__PURE__ */ pe(mf, [["__scopeId", "data-v-4466284f"]]), vf = /* @__PURE__ */ ve({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (a(), r("span", {
      class: Te(["detail-label"]),
      style: Ht({ minWidth: e.minWidth })
    }, [
      qe(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), _n = /* @__PURE__ */ pe(vf, [["__scopeId", "data-v-75e9eeb8"]]), pf = /* @__PURE__ */ ve({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), r("span", {
      class: Te(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      qe(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Sa = /* @__PURE__ */ pe(pf, [["__scopeId", "data-v-2f186e4c"]]), gf = { class: "detail-row" }, hf = /* @__PURE__ */ ve({
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
    return (s, o) => (a(), r("div", gf, [
      C(_n, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          b(f(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), M(Sa, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          b(f(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : qe(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), ft = /* @__PURE__ */ pe(hf, [["__scopeId", "data-v-ef15664a"]]), yf = { class: "modal-header" }, wf = { class: "modal-body" }, _f = { class: "status-section" }, bf = {
  key: 0,
  class: "status-section"
}, kf = { class: "section-header-row" }, $f = {
  key: 0,
  class: "workflow-group"
}, Cf = { class: "workflow-group-header" }, xf = { class: "workflow-group-title" }, Sf = { class: "workflow-list" }, If = { class: "workflow-name" }, Ef = { class: "workflow-issue" }, Tf = {
  key: 1,
  class: "workflow-group"
}, Pf = { class: "workflow-group-header" }, Rf = { class: "workflow-group-title" }, Mf = { class: "workflow-list" }, Df = { class: "workflow-name" }, Lf = { class: "workflow-issue" }, Of = {
  key: 2,
  class: "workflow-group"
}, Af = { class: "workflow-group-header" }, Nf = { class: "workflow-group-title" }, Uf = { class: "workflow-list" }, zf = { class: "workflow-name" }, Ff = {
  key: 3,
  class: "workflow-group"
}, Bf = { class: "workflow-group-header" }, Vf = { class: "workflow-group-title" }, Wf = { class: "workflow-list" }, Gf = { class: "workflow-name" }, jf = {
  key: 4,
  class: "workflow-group"
}, Hf = { class: "workflow-group-header" }, Kf = { class: "workflow-group-title" }, qf = { class: "workflow-list" }, Yf = { class: "workflow-name" }, Jf = {
  key: 5,
  class: "workflow-group"
}, Xf = { class: "workflow-group-title" }, Qf = { class: "expand-icon" }, Zf = {
  key: 0,
  class: "workflow-list"
}, em = { class: "workflow-name" }, tm = {
  key: 1,
  class: "status-section"
}, sm = {
  key: 0,
  class: "change-group"
}, om = { class: "change-group-header" }, nm = { class: "change-group-title" }, am = { class: "change-list" }, lm = { class: "node-name" }, im = {
  key: 0,
  class: "dev-badge"
}, rm = {
  key: 1,
  class: "change-group"
}, cm = { class: "change-group-header" }, dm = { class: "change-group-title" }, um = { class: "change-list" }, fm = { class: "node-name" }, mm = {
  key: 0,
  class: "dev-badge"
}, vm = {
  key: 2,
  class: "change-group"
}, pm = { class: "change-list" }, gm = { class: "change-item" }, hm = { class: "node-name" }, ym = {
  key: 3,
  class: "change-group"
}, wm = {
  key: 2,
  class: "status-section"
}, _m = { class: "section-header-row" }, bm = {
  key: 0,
  class: "drift-item"
}, km = { class: "drift-list" }, $m = {
  key: 0,
  class: "drift-list-more"
}, Cm = {
  key: 1,
  class: "drift-item"
}, xm = { class: "drift-list" }, Sm = {
  key: 0,
  class: "drift-list-more"
}, Im = {
  key: 2,
  class: "drift-item"
}, Em = { class: "drift-list" }, Tm = { class: "version-actual" }, Pm = { class: "version-expected" }, Rm = {
  key: 0,
  class: "drift-list-more"
}, Mm = {
  key: 3,
  class: "drift-item"
}, Dm = { class: "repair-action" }, Lm = {
  key: 3,
  class: "status-section"
}, Om = { class: "info-box" }, Am = { class: "drift-list" }, Nm = {
  key: 0,
  class: "drift-list-more"
}, Um = {
  key: 4,
  class: "status-section"
}, zm = { class: "warning-box" }, Fm = {
  key: 5,
  class: "empty-state-inline"
}, Bm = { class: "modal-actions" }, Vm = /* @__PURE__ */ ve({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = k(!1);
    et(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), Ct(() => s.show, (w, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", w);
    }, { immediate: !0 });
    const n = N(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (S) => S.status === "broken" && S.sync_state === "synced"
      )) || [];
    }), l = N(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : _.filter(
        (S) => S.status === "broken" && S.sync_state !== "synced"
      )) || [];
    }), i = N(() => {
      var w, p, _;
      return ((_ = (p = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : p.synced) == null ? void 0 : _.filter((S) => {
        var P, D, I;
        const $ = (I = (D = (P = s.status) == null ? void 0 : P.workflows) == null ? void 0 : D.analyzed) == null ? void 0 : I.find((x) => x.name === S);
        return !$ || $.status !== "broken";
      })) || [];
    }), c = N(() => {
      var w, p, _, S, $;
      return (w = s.status) != null && w.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((_ = s.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((S = s.status.workflows.deleted) == null ? void 0 : S.length) ?? 0) > 0 || ((($ = s.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), d = N(() => {
      var p, _, S;
      const w = (p = s.status) == null ? void 0 : p.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((S = w.nodes_removed) == null ? void 0 : S.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), u = N(() => {
      var w, p, _, S, $, P;
      return !c.value && !d.value && ((p = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : p.is_synced) && (((_ = s.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((P = ($ = (S = s.status) == null ? void 0 : S.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : P.length) ?? 0) === 0;
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
      var _, S, $, P, D, I, x, K, V, z, T, E, R, Z, J, W, se, ee, A, j, L, ne;
      return a(), M(wt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (Y) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = rt(() => {
            }, ["stop"]))
          }, [
            t("div", yf, [
              p[8] || (p[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (Y) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", wf, [
              t("div", _f, [
                C(At, { level: "4" }, {
                  default: h(() => [...p[9] || (p[9] = [
                    b("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                C(ft, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (a(), r("div", bf, [
                t("div", kf, [
                  C(At, { level: "4" }, {
                    default: h(() => [...p[10] || (p[10] = [
                      b("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[1] || (p[1] = (Y) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), r("div", $f, [
                  t("div", Cf, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", xf, "BROKEN (COMMITTED) (" + f(n.value.length) + ")", 1)
                  ]),
                  t("div", Sf, [
                    (a(!0), r(G, null, he(n.value, (Y) => (a(), r("div", {
                      key: Y.name,
                      class: "workflow-item"
                    }, [
                      t("span", If, f(Y.name), 1),
                      t("span", Ef, f(Y.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), r("div", Tf, [
                  t("div", Pf, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Rf, "BROKEN (UNCOMMITTED) (" + f(l.value.length) + ")", 1)
                  ]),
                  t("div", Mf, [
                    (a(!0), r(G, null, he(l.value, (Y) => (a(), r("div", {
                      key: Y.name,
                      class: "workflow-item"
                    }, [
                      t("span", Df, f(Y.name), 1),
                      t("span", Lf, f(Y.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = (_ = e.status.workflows) == null ? void 0 : _.new) != null && S.length ? (a(), r("div", Of, [
                  t("div", Af, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Nf, "NEW (" + f(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", Uf, [
                    (a(!0), r(G, null, he(e.status.workflows.new, (Y) => (a(), r("div", {
                      key: Y,
                      class: "workflow-item"
                    }, [
                      t("span", zf, f(Y), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (P = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && P.length ? (a(), r("div", Ff, [
                  t("div", Bf, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", Vf, "MODIFIED (" + f(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Wf, [
                    (a(!0), r(G, null, he(e.status.workflows.modified, (Y) => (a(), r("div", {
                      key: Y,
                      class: "workflow-item"
                    }, [
                      t("span", Gf, f(Y), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = (D = e.status.workflows) == null ? void 0 : D.deleted) != null && I.length ? (a(), r("div", jf, [
                  t("div", Hf, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", Kf, "DELETED (" + f(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", qf, [
                    (a(!0), r(G, null, he(e.status.workflows.deleted, (Y) => (a(), r("div", {
                      key: Y,
                      class: "workflow-item"
                    }, [
                      t("span", Yf, f(Y), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                i.value.length ? (a(), r("div", Jf, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (Y) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", Xf, "SYNCED (" + f(i.value.length) + ")", 1),
                    t("span", Qf, f(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), r("div", Zf, [
                    (a(!0), r(G, null, he(i.value, (Y) => (a(), r("div", {
                      key: Y,
                      class: "workflow-item"
                    }, [
                      t("span", em, f(Y), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              d.value ? (a(), r("div", tm, [
                C(At, { level: "4" }, {
                  default: h(() => [...p[17] || (p[17] = [
                    b("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (K = (x = e.status.git_changes) == null ? void 0 : x.nodes_added) != null && K.length ? (a(), r("div", sm, [
                  t("div", om, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", nm, "NODES ADDED (" + f(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", am, [
                    (a(!0), r(G, null, he(e.status.git_changes.nodes_added, (Y) => (a(), r("div", {
                      key: v(Y),
                      class: "change-item"
                    }, [
                      t("span", lm, f(v(Y)), 1),
                      g(Y) ? (a(), r("span", im, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (z = (V = e.status.git_changes) == null ? void 0 : V.nodes_removed) != null && z.length ? (a(), r("div", rm, [
                  t("div", cm, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", dm, "NODES REMOVED (" + f(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", um, [
                    (a(!0), r(G, null, he(e.status.git_changes.nodes_removed, (Y) => (a(), r("div", {
                      key: v(Y),
                      class: "change-item"
                    }, [
                      t("span", fm, f(v(Y)), 1),
                      g(Y) ? (a(), r("span", mm, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (T = e.status.git_changes) != null && T.workflow_changes ? (a(), r("div", vm, [
                  p[20] || (p[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", pm, [
                    t("div", gm, [
                      t("span", hm, f(m.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (E = e.status.git_changes) != null && E.has_other_changes ? (a(), r("div", ym, [...p[21] || (p[21] = [
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
              (R = e.status.comparison) != null && R.is_synced ? y("", !0) : (a(), r("div", wm, [
                t("div", _m, [
                  C(At, { level: "4" }, {
                    default: h(() => [...p[22] || (p[22] = [
                      b("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[3] || (p[3] = (Y) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                p[26] || (p[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (J = (Z = e.status.comparison) == null ? void 0 : Z.missing_nodes) != null && J.length ? (a(), r("div", bm, [
                  C(ft, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", km, [
                    (a(!0), r(G, null, he(e.status.comparison.missing_nodes.slice(0, 10), (Y) => (a(), r("div", {
                      key: Y,
                      class: "drift-list-item"
                    }, " - " + f(Y), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), r("div", $m, " ... and " + f(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (se = (W = e.status.comparison) == null ? void 0 : W.extra_nodes) != null && se.length ? (a(), r("div", Cm, [
                  C(ft, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", xm, [
                    (a(!0), r(G, null, he(e.status.comparison.extra_nodes.slice(0, 10), (Y) => (a(), r("div", {
                      key: Y,
                      class: "drift-list-item"
                    }, " - " + f(Y), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), r("div", Sm, " ... and " + f(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (A = (ee = e.status.comparison) == null ? void 0 : ee.version_mismatches) != null && A.length ? (a(), r("div", Im, [
                  C(ft, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Em, [
                    (a(!0), r(G, null, he(e.status.comparison.version_mismatches.slice(0, 10), (Y) => (a(), r("div", {
                      key: Y.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      b(f(Y.name) + ": ", 1),
                      t("span", Tm, f(Y.actual), 1),
                      p[23] || (p[23] = b(" → ", -1)),
                      t("span", Pm, f(Y.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), r("div", Rm, " ... and " + f(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((j = e.status.comparison) == null ? void 0 : j.packages_in_sync) === !1 ? (a(), r("div", Mm, [
                  C(ft, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", Dm, [
                  C(re, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: p[4] || (p[4] = (Y) => w.$emit("repair"))
                  }, {
                    default: h(() => [...p[24] || (p[24] = [
                      b(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ne = (L = e.status.comparison) == null ? void 0 : L.disabled_nodes) != null && ne.length ? (a(), r("div", Lm, [
                C(At, { level: "4" }, {
                  default: h(() => [...p[27] || (p[27] = [
                    b("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", Om, [
                  p[28] || (p[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, f(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", Am, [
                  (a(!0), r(G, null, he(e.status.comparison.disabled_nodes.slice(0, 10), (Y) => (a(), r("div", {
                    key: Y,
                    class: "drift-list-item"
                  }, " • " + f(Y), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), r("div", Nm, " ... and " + f(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), r("div", Um, [
                C(At, { level: "4" }, {
                  default: h(() => [...p[29] || (p[29] = [
                    b("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", zm, [
                  p[30] || (p[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                p[31] || (p[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              u.value ? (a(), r("div", Fm, [...p[32] || (p[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            t("div", Bm, [
              C(re, {
                variant: "secondary",
                onClick: p[5] || (p[5] = (Y) => w.$emit("close"))
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
}), Wm = /* @__PURE__ */ pe(Vm, [["__scopeId", "data-v-e2b37122"]]), Gm = { class: "health-section-header" }, jm = { class: "suggestions-content" }, Hm = { class: "suggestions-text" }, Km = { style: { "margin-top": "var(--cg-space-3)" } }, qm = {
  key: 1,
  class: "no-issues-text"
}, Ym = /* @__PURE__ */ ve({
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
    function d() {
      l.value = !1, m("view-workflows");
    }
    function u() {
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
    const S = N(() => {
      const ee = n.status.workflows.analyzed || [], A = ee.filter(
        (j) => j.unresolved_models_count > 0 || j.ambiguous_models_count > 0
      );
      return A.length === 0 && n.status.missing_models_count > 0 ? ee.filter((j) => j.sync_state === "synced") : A;
    });
    function $() {
      const ee = S.value;
      ee.length !== 0 && (v.value = !0, m("repair-missing-models", ee.map((A) => A.name)));
    }
    function P() {
      v.value = !1;
    }
    s({ resetRepairingState: P, resetRepairingEnvironmentState: p, closeDetailModal: _ });
    const D = N(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), I = N(() => n.status.has_changes), x = N(() => {
      const ee = n.status.git_changes;
      return ee.nodes_added.length > 0 || ee.nodes_removed.length > 0 || ee.workflow_changes;
    }), K = N(() => n.status.has_changes || D.value), V = N(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), z = N(() => n.status.git_changes.has_other_changes), T = N(() => {
      var ee;
      return ((ee = n.status.workflows.analyzed) == null ? void 0 : ee.filter((A) => A.status === "broken")) || [];
    }), E = N(() => {
      var ee;
      return ((ee = n.status.workflows.analyzed) == null ? void 0 : ee.filter(
        (A) => A.has_path_sync_issues && !A.has_issues
      )) || [];
    }), R = N(() => T.value.length > 0), Z = N(() => R.value || E.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), J = N(() => {
      const ee = [];
      return n.status.workflows.new.length > 0 && ee.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && ee.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && ee.push(`${n.status.workflows.deleted.length} deleted`), ee.length > 0 ? `${ee.join(", ")} workflow${ee.length === 1 && !ee[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), W = N(() => {
      var j, L;
      const ee = [], A = n.status.comparison;
      return (j = A.missing_nodes) != null && j.length && ee.push(`${A.missing_nodes.length} missing node${A.missing_nodes.length === 1 ? "" : "s"}`), (L = A.extra_nodes) != null && L.length && ee.push(`${A.extra_nodes.length} untracked node${A.extra_nodes.length === 1 ? "" : "s"}`), ee.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${ee.join(" and ")}.`;
    }), se = N(() => {
      var j, L;
      const ee = [], A = n.status.comparison;
      return (j = A.extra_nodes) != null && j.length && (A.extra_nodes.slice(0, 3).forEach((ne) => {
        ee.push(`Untracked: ${ne}`);
      }), A.extra_nodes.length > 3 && ee.push(`...and ${A.extra_nodes.length - 3} more untracked`)), (L = A.missing_nodes) != null && L.length && (A.missing_nodes.slice(0, 3).forEach((ne) => {
        ee.push(`Missing: ${ne}`);
      }), A.missing_nodes.length > 3 && ee.push(`...and ${A.missing_nodes.length - 3} more missing`)), ee;
    });
    return (ee, A) => (a(), r(G, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, { title: "STATUS" })
        ]),
        content: h(() => [
          n.setupState === "no_workspace" ? (a(), M(Yt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: A[0] || (A[0] = (j) => ee.$emit("start-setup"))
              }, {
                default: h(() => [...A[13] || (A[13] = [
                  b(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), M(Yt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: A[1] || (A[1] = (j) => ee.$emit("view-environments"))
              }, {
                default: h(() => [...A[14] || (A[14] = [
                  b(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), M(Yt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: A[2] || (A[2] = (j) => ee.$emit("create-environment"))
              }, {
                default: h(() => [...A[15] || (A[15] = [
                  b(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: A[4] || (A[4] = (j) => i.value = !0),
            onMouseleave: A[5] || (A[5] = (j) => i.value = !1)
          }, [
            t("div", Gm, [
              C(At, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...A[16] || (A[16] = [
                  b(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              C(Fd, { name: "fade" }, {
                default: h(() => [
                  i.value ? (a(), M(re, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: h(() => [...A[17] || (A[17] = [
                      b(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            C(Ku, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, to({
              left: h(() => [
                e.status.workflows.new.length ? (a(), M(ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), M(ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), M(ds, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                C(ds, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: D.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (a(), M(ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), M(ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), M(ds, {
                  key: 2,
                  icon: "●",
                  count: V.value,
                  label: V.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                z.value ? (a(), M(ds, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                I.value && !x.value && !z.value ? (a(), M(ds, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                I.value ? y("", !0) : (a(), M(ds, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              K.value ? {
                name: "footer",
                fn: h(() => [
                  A[19] || (A[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", jm, [
                    t("span", Hm, f(J.value), 1),
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: A[3] || (A[3] = (j) => ee.$emit("commit-changes"))
                    }, {
                      default: h(() => [...A[18] || (A[18] = [
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
          e.status.is_detached_head ? (a(), M(Yt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: A[6] || (A[6] = (j) => ee.$emit("create-branch"))
              }, {
                default: h(() => [...A[20] || (A[20] = [
                  b(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", Km, [
            C(At, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...A[21] || (A[21] = [
                b(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            Z.value ? (a(), r(G, { key: 0 }, [
              T.value.length > 0 ? (a(), M(Yt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${T.value.length} workflow${T.value.length === 1 ? "" : "s"} can't run`,
                description: "These workflows have missing dependencies that must be resolved before they can run.",
                items: T.value.map((j) => `${j.name} — ${j.issue_summary}`)
              }, {
                actions: h(() => [
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[7] || (A[7] = (j) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...A[22] || (A[22] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              E.value.length > 0 ? (a(), M(Yt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: E.value.map((j) => `${j.name} — ${j.models_needing_path_sync_count} model path${j.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[8] || (A[8] = (j) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...A[23] || (A[23] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !R.value ? (a(), M(Yt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  C(re, {
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
                  C(re, {
                    variant: "secondary",
                    size: "sm",
                    onClick: A[9] || (A[9] = (j) => ee.$emit("view-workflows"))
                  }, {
                    default: h(() => [...A[24] || (A[24] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (a(), M(Yt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: W.value,
                items: se.value
              }, {
                actions: h(() => [
                  C(re, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: h(() => [...A[25] || (A[25] = [
                      b(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[10] || (A[10] = (j) => ee.$emit("view-nodes"))
                  }, {
                    default: h(() => [...A[26] || (A[26] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), M(Yt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  C(re, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[11] || (A[11] = (j) => ee.$emit("view-nodes"))
                  }, {
                    default: h(() => [...A[27] || (A[27] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : K.value ? (a(), r("span", qm, "No issues")) : (a(), M(ns, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      C(Wm, {
        show: l.value,
        status: e.status,
        "is-repairing": g.value,
        onClose: A[12] || (A[12] = (j) => l.value = !1),
        onNavigateWorkflows: d,
        onNavigateNodes: u,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), Jm = /* @__PURE__ */ pe(Ym, [["__scopeId", "data-v-55fcd77f"]]), Xm = ["type", "value", "placeholder", "disabled"], Qm = /* @__PURE__ */ ve({
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
    function c(d) {
      const u = d.target.value;
      l("update:modelValue", u);
    }
    return et(() => {
      n.autoFocus && i.value && i.value.focus();
    }), s({
      focus: () => {
        var d;
        return (d = i.value) == null ? void 0 : d.focus();
      },
      blur: () => {
        var d;
        return (d = i.value) == null ? void 0 : d.blur();
      }
    }), (d, u) => (a(), r("input", {
      ref_key: "inputRef",
      ref: i,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Te(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        u[0] || (u[0] = Zt((m) => d.$emit("enter"), ["enter"])),
        u[1] || (u[1] = Zt((m) => d.$emit("escape"), ["escape"]))
      ],
      onFocus: u[2] || (u[2] = (m) => d.$emit("focus")),
      onBlur: u[3] || (u[3] = (m) => d.$emit("blur"))
    }, null, 42, Xm));
  }
}), Rn = /* @__PURE__ */ pe(Qm, [["__scopeId", "data-v-0380d08f"]]), Zm = { class: "branch-create-form" }, ev = { class: "form-actions" }, tv = /* @__PURE__ */ ve({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, n = k(""), l = N(() => {
      const d = n.value.trim();
      return d.length > 0 && !d.startsWith("-") && !d.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(d);
    });
    function i() {
      l.value && (o("create", n.value.trim()), n.value = "");
    }
    function c() {
      n.value = "", o("cancel");
    }
    return (d, u) => (a(), r("div", Zm, [
      C(Rn, {
        modelValue: n.value,
        "onUpdate:modelValue": u[0] || (u[0] = (m) => n.value = m),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: i,
        onEscape: c
      }, null, 8, ["modelValue"]),
      t("div", ev, [
        C(re, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: i
        }, {
          default: h(() => [...u[1] || (u[1] = [
            b(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        C(re, {
          variant: "secondary",
          size: "sm",
          onClick: c
        }, {
          default: h(() => [...u[2] || (u[2] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), sv = /* @__PURE__ */ pe(tv, [["__scopeId", "data-v-7c500394"]]), ov = { class: "branch-list-item__indicator" }, nv = { class: "branch-list-item__name" }, av = {
  key: 0,
  class: "branch-list-item__actions"
}, lv = {
  key: 0,
  class: "branch-list-item__current-label"
}, iv = /* @__PURE__ */ ve({
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
      class: Te(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && s.$emit("click"))
    }, [
      t("span", ov, f(e.isCurrent ? "●" : "○"), 1),
      t("span", nv, f(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (a(), r("div", av, [
        qe(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), r("span", lv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), rv = /* @__PURE__ */ pe(iv, [["__scopeId", "data-v-c6581a24"]]), cv = {
  key: 2,
  class: "branch-list"
}, dv = /* @__PURE__ */ ve({
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
    return (c, d) => (a(), M(Pt, null, {
      header: h(() => [
        C(Rt, { title: "BRANCHES" }, {
          actions: h(() => [
            n.value ? y("", !0) : (a(), M(re, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: d[0] || (d[0] = (u) => n.value = !0)
            }, {
              default: h(() => [...d[1] || (d[1] = [
                b(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: h(() => [
        n.value ? (a(), M(sv, {
          key: 0,
          onCreate: l,
          onCancel: i
        })) : y("", !0),
        e.branches.length === 0 ? (a(), M(ns, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), r("div", cv, [
          (a(!0), r(G, null, he(e.branches, (u) => (a(), M(rv, {
            key: u.name,
            "branch-name": u.name,
            "is-current": u.is_current
          }, {
            actions: h(() => [
              u.is_current ? y("", !0) : (a(), M(re, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: (m) => c.$emit("delete", u.name)
              }, {
                default: h(() => [...d[2] || (d[2] = [
                  b(" Delete ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])),
              u.is_current ? y("", !0) : (a(), M(re, {
                key: 1,
                variant: "secondary",
                size: "xs",
                onClick: (m) => c.$emit("switch", u.name)
              }, {
                default: h(() => [...d[3] || (d[3] = [
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
}), uv = /* @__PURE__ */ pe(dv, [["__scopeId", "data-v-86784ddd"]]), fv = { class: "commit-list" }, mv = /* @__PURE__ */ ve({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (a(), r("div", fv, [
      qe(s.$slots, "default", {}, void 0)
    ]));
  }
}), vv = /* @__PURE__ */ pe(mv, [["__scopeId", "data-v-8c5ee761"]]), pv = { class: "commit-hash" }, gv = /* @__PURE__ */ ve({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = N(() => s.hash.slice(0, s.length));
    return (n, l) => (a(), r("span", pv, f(o.value), 1));
  }
}), hr = /* @__PURE__ */ pe(gv, [["__scopeId", "data-v-7c333cc6"]]), hv = { class: "commit-message" }, yv = { class: "commit-date" }, wv = /* @__PURE__ */ ve({
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
      class: Te(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      C(hr, { hash: e.hash }, null, 8, ["hash"]),
      t("span", hv, f(e.message), 1),
      t("span", yv, f(e.relativeDate), 1),
      i.$slots.actions ? (a(), r("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = rt(() => {
        }, ["stop"]))
      }, [
        qe(i.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), _v = /* @__PURE__ */ pe(wv, [["__scopeId", "data-v-dd7c621b"]]), bv = /* @__PURE__ */ ve({
  __name: "HistorySection",
  props: {
    commits: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    return (s, o) => (a(), M(Pt, null, {
      header: h(() => [
        C(Rt, { title: "HISTORY" })
      ]),
      content: h(() => [
        e.commits.length === 0 ? (a(), M(ns, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), M(vv, { key: 1 }, {
          default: h(() => [
            (a(!0), r(G, null, he(e.commits, (n) => (a(), M(_v, {
              key: n.hash,
              hash: n.short_hash || n.hash,
              message: n.message,
              "relative-date": n.date_relative || n.relative_date,
              onClick: (l) => s.$emit("select", n)
            }, {
              actions: h(() => [
                C(re, {
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
}), kv = /* @__PURE__ */ pe(bv, [["__scopeId", "data-v-981c3c64"]]), i7 = Bs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const r7 = [
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
], c7 = {
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
}, $v = [
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
], d7 = [
  ...$v,
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
function ro() {
  return !1;
}
function at() {
  const e = k(!1), s = k(null);
  async function o(X, ke) {
    var ct;
    if (!((ct = window.app) != null && ct.api))
      throw new Error("ComfyUI API not available");
    const ze = await window.app.api.fetchApi(X, ke);
    if (!ze.ok) {
      const Fe = await ze.json().catch(() => ({}));
      throw new Error(Fe.error || Fe.message || `Request failed: ${ze.status}`);
    }
    return ze.json();
  }
  async function n(X = !1) {
    return o(X ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(X, ke = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: X, allow_issues: ke })
    });
  }
  async function i(X = 10, ke = 0) {
    return o(`/v2/comfygit/log?limit=${X}&offset=${ke}`);
  }
  async function c(X) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: X })
    });
  }
  async function d() {
    return o("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function u() {
    return o("/v2/comfygit/deploy/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function m(X) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: X, force: !0 })
    });
  }
  async function v() {
    return o("/v2/comfygit/branches");
  }
  async function g(X) {
    return o(`/v2/comfygit/commit/${X}`);
  }
  async function w(X, ke = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: X, force: ke })
    });
  }
  async function p(X, ke = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: X, start_point: ke })
    });
  }
  async function _(X, ke = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: X, force: ke })
    });
  }
  async function S(X, ke = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(X)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: ke })
    });
  }
  async function $() {
    try {
      return (await o("/v2/comfygit/environments")).environments;
    } catch {
      try {
        const X = await n();
        return [{
          name: X.environment,
          is_current: !0,
          path: "~/comfygit/environments/" + X.environment,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          workflow_count: X.workflows.total,
          node_count: 0,
          model_count: 0,
          current_branch: X.branch
        }];
      } catch {
        return [];
      }
    }
  }
  async function P(X, ke) {
    const ze = { target_env: X };
    return ke && (ze.workspace_path = ke), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ze)
    });
  }
  async function D() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function I(X) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function x() {
    return o("/v2/workspace/environments/create_status");
  }
  async function K(X = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${X}`);
  }
  async function V(X) {
    return o(`/v2/workspace/environments/${X}`, {
      method: "DELETE"
    });
  }
  async function z(X = !1) {
    try {
      return o(X ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const ke = await n(X), ze = [];
      return ke.workflows.new.forEach((ct) => {
        ze.push({ name: ct, status: "new", missing_nodes: 0, missing_models: 0, path: ct });
      }), ke.workflows.modified.forEach((ct) => {
        ze.push({ name: ct, status: "modified", missing_nodes: 0, missing_models: 0, path: ct });
      }), ke.workflows.synced.forEach((ct) => {
        ze.push({ name: ct, status: "synced", missing_nodes: 0, missing_models: 0, path: ct });
      }), ze;
    }
  }
  async function T(X) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(X)}/details`);
  }
  async function E(X) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(X)}/resolve`, {
      method: "POST"
    });
  }
  async function R(X, ke, ze) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(X)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: ke, install_models: ze })
    });
  }
  async function Z(X, ke, ze) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(X)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: ke, importance: ze })
    });
  }
  async function J() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function W() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function se(X) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(X)}`);
  }
  async function ee(X) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: X })
    });
  }
  async function A(X, ke) {
    return o(`/v2/workspace/models/${X}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ke })
    });
  }
  async function j(X, ke) {
    return o(`/v2/workspace/models/${X}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: ke })
    });
  }
  async function L(X) {
    return o(`/v2/workspace/models/${X}`, {
      method: "DELETE"
    });
  }
  async function ne(X) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function Y() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function de() {
    return o("/v2/workspace/models/directory");
  }
  async function $e(X) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: X })
    });
  }
  async function Pe(X) {
    try {
      const ke = X ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(X)}` : "/v2/comfygit/config";
      return o(ke);
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
  async function Ge(X, ke) {
    const ze = ke ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ke)}` : "/v2/comfygit/config";
    return o(ze, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function Le(X, ke) {
    try {
      const ze = new URLSearchParams();
      return X && ze.append("level", X), ke && ze.append("lines", ke.toString()), o(`/v2/comfygit/debug/logs?${ze}`);
    } catch {
      return [];
    }
  }
  async function Se(X, ke) {
    try {
      const ze = new URLSearchParams();
      return X && ze.append("level", X), ke && ze.append("lines", ke.toString()), o(`/v2/workspace/debug/logs?${ze}`);
    } catch {
      return [];
    }
  }
  async function Ie() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function _e() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function ge(X, ke) {
    try {
      const ze = new URLSearchParams();
      return X && ze.append("level", X), ke && ze.append("lines", ke.toString()), o(`/v2/workspace/debug/orchestrator-logs?${ze}`);
    } catch {
      return [];
    }
  }
  async function Oe() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function Re(X) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: X })
    });
  }
  async function O() {
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
  async function F(X) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(X)}/track-dev`, {
      method: "POST"
    });
  }
  async function ae(X) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(X)}/install`, {
      method: "POST"
    });
  }
  async function ie(X) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(X)}/update`, {
      method: "POST"
    });
  }
  async function fe(X) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(X)}`, {
      method: "DELETE"
    });
  }
  async function me() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Ce(X, ke) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: X, url: ke })
    });
  }
  async function xe(X) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(X)}`, {
      method: "DELETE"
    });
  }
  async function le(X, ke, ze) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(X)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: ke, push_url: ze })
    });
  }
  async function ue(X, ke) {
    const ze = {};
    return ke && (ze["X-Git-Auth-Token"] = ke), o(`/v2/comfygit/remotes/${encodeURIComponent(X)}/fetch`, {
      method: "POST",
      headers: ze
    });
  }
  async function Ne(X) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(X)}/status`);
    } catch {
      return null;
    }
  }
  async function Ee(X = "skip", ke = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: X,
        remove_extra_nodes: ke
      })
    });
  }
  async function te(X, ke) {
    const ze = ke ? `/v2/comfygit/remotes/${encodeURIComponent(X)}/pull-preview?branch=${encodeURIComponent(ke)}` : `/v2/comfygit/remotes/${encodeURIComponent(X)}/pull-preview`;
    return o(ze);
  }
  async function q(X, ke = {}) {
    const ze = { "Content-Type": "application/json" };
    return ke.authToken && (ze["X-Git-Auth-Token"] = ke.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(X)}/pull`, {
      method: "POST",
      headers: ze,
      body: JSON.stringify({
        model_strategy: ke.modelStrategy || "skip",
        force: ke.force || !1,
        resolutions: ke.resolutions
      })
    });
  }
  async function De(X, ke) {
    const ze = ke ? `/v2/comfygit/remotes/${encodeURIComponent(X)}/push-preview?branch=${encodeURIComponent(ke)}` : `/v2/comfygit/remotes/${encodeURIComponent(X)}/push-preview`;
    return o(ze);
  }
  async function we(X, ke = {}) {
    const ze = { "Content-Type": "application/json" };
    return ke.authToken && (ze["X-Git-Auth-Token"] = ke.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(X)}/push`, {
      method: "POST",
      headers: ze,
      body: JSON.stringify({ force: ke.force || !1 })
    });
  }
  async function ye(X, ke) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(X)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: ke })
    });
  }
  async function B(X) {
    const ke = {
      success: 0,
      failed: []
    };
    for (const ze of X)
      try {
        await E(ze), ke.success++;
      } catch (ct) {
        ke.failed.push({
          name: ze,
          error: ct instanceof Error ? ct.message : "Unknown error"
        });
      }
    return ke;
  }
  async function U(X) {
    var ct;
    const ke = new FormData();
    if (ke.append("file", X), !((ct = window.app) != null && ct.api))
      throw new Error("ComfyUI API not available");
    const ze = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: ke
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!ze.ok) {
      const Fe = await ze.json().catch(() => ({}));
      throw new Error(Fe.error || `Preview failed: ${ze.status}`);
    }
    return ze.json();
  }
  async function ce(X) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(X)}`
    );
  }
  async function Ve(X, ke, ze, ct) {
    var ol;
    const Fe = new FormData();
    if (Fe.append("file", X), Fe.append("name", ke), Fe.append("model_strategy", ze), Fe.append("torch_backend", ct), !((ol = window.app) != null && ol.api))
      throw new Error("ComfyUI API not available");
    const So = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Fe
    });
    if (!So.ok) {
      const nl = await So.json().catch(() => ({}));
      throw new Error(nl.message || nl.error || `Import failed: ${So.status}`);
    }
    return So.json();
  }
  async function Qe() {
    return o("/v2/workspace/import/status");
  }
  async function vt(X) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: X })
    });
  }
  async function lt(X, ke, ze, ct) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: X,
        name: ke,
        model_strategy: ze,
        torch_backend: ct
      })
    });
  }
  async function ut() {
    return o("/v2/setup/status");
  }
  async function Mt(X) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function zt() {
    return o("/v2/setup/initialize_status");
  }
  async function Kt(X) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function Vs() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function Rs() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function oo(X, ke) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: X, save_key: ke })
    });
  }
  async function $o() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function Co(X) {
    const ke = X ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(X)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(ke);
  }
  async function xo(X) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function be() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function Q(X) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(X)}`, {
      method: "DELETE"
    });
  }
  async function Ke(X) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(X)}/stop`, {
      method: "POST"
    });
  }
  async function ht(X) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(X)}/start`, {
      method: "POST"
    });
  }
  async function qt(X) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(X)}/status`);
  }
  async function hs(X) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: X })
    });
  }
  async function ys(X = !1) {
    return o(X ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function ls() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Ue() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function is(X) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function oe(X) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(X)}`, {
      method: "DELETE"
    });
  }
  async function H(X) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function Ae() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function He(X) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(X)}/info`);
  }
  async function ot(X) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(X)}/instances`);
  }
  async function mt(X, ke) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(X)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ke)
    });
  }
  async function Dt(X, ke) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(X)}/instances/${encodeURIComponent(ke)}/start`, {
      method: "POST"
    });
  }
  async function rs(X, ke) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(X)}/instances/${encodeURIComponent(ke)}/stop`, {
      method: "POST"
    });
  }
  async function Ws(X, ke) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(X)}/instances/${encodeURIComponent(ke)}`, {
      method: "DELETE"
    });
  }
  async function Gs(X) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: X })
    });
  }
  return {
    isLoading: e,
    error: s,
    getStatus: n,
    commit: l,
    getHistory: i,
    exportEnv: c,
    validateExport: d,
    validateDeploy: u,
    exportEnvWithForce: m,
    // Git Operations
    getBranches: v,
    getCommitDetail: g,
    checkout: w,
    createBranch: p,
    switchBranch: _,
    deleteBranch: S,
    // Environment Management
    getEnvironments: $,
    switchEnvironment: P,
    getSwitchProgress: D,
    createEnvironment: I,
    getCreateProgress: x,
    getComfyUIReleases: K,
    deleteEnvironment: V,
    // Workflow Management
    getWorkflows: z,
    getWorkflowDetails: T,
    resolveWorkflow: E,
    installWorkflowDeps: R,
    setModelImportance: Z,
    // Model Management
    getEnvironmentModels: J,
    getWorkspaceModels: W,
    getModelDetails: se,
    openFileLocation: ee,
    addModelSource: A,
    removeModelSource: j,
    deleteModel: L,
    downloadModel: ne,
    scanWorkspaceModels: Y,
    getModelsDirectory: de,
    setModelsDirectory: $e,
    // Settings
    getConfig: Pe,
    updateConfig: Ge,
    // Debug/Logs
    getEnvironmentLogs: Le,
    getWorkspaceLogs: Se,
    getEnvironmentLogPath: Ie,
    getWorkspaceLogPath: _e,
    getOrchestratorLogs: ge,
    getOrchestratorLogPath: Oe,
    openFile: Re,
    // Node Management
    getNodes: O,
    trackNodeAsDev: F,
    installNode: ae,
    updateNode: ie,
    uninstallNode: fe,
    // Git Remotes
    getRemotes: me,
    addRemote: Ce,
    removeRemote: xe,
    updateRemoteUrl: le,
    fetchRemote: ue,
    getRemoteSyncStatus: Ne,
    // Push/Pull
    getPullPreview: te,
    pullFromRemote: q,
    getPushPreview: De,
    pushToRemote: we,
    validateMerge: ye,
    // Environment Sync
    syncEnvironmentManually: Ee,
    // Workflow Repair
    repairWorkflowModels: B,
    // Import Operations
    previewTarballImport: U,
    previewGitImport: vt,
    validateEnvironmentName: ce,
    executeImport: Ve,
    executeGitImport: lt,
    getImportProgress: Qe,
    // First-Time Setup
    getSetupStatus: ut,
    initializeWorkspace: Mt,
    getInitializeProgress: zt,
    validatePath: Kt,
    // Deploy Operations
    getDeploySummary: Vs,
    getDataCenters: Rs,
    testRunPodConnection: oo,
    getNetworkVolumes: $o,
    getRunPodGpuTypes: Co,
    deployToRunPod: xo,
    getRunPodPods: be,
    terminateRunPodPod: Q,
    stopRunPodPod: Ke,
    startRunPodPod: ht,
    getDeploymentStatus: qt,
    exportDeployPackage: hs,
    getStoredRunPodKey: ys,
    clearRunPodKey: ls,
    // Custom Worker Operations
    getCustomWorkers: Ue,
    addCustomWorker: is,
    removeCustomWorker: oe,
    testWorkerConnection: H,
    scanForWorkers: Ae,
    getWorkerSystemInfo: He,
    getWorkerInstances: ot,
    deployToWorker: mt,
    startWorkerInstance: Dt,
    stopWorkerInstance: rs,
    terminateWorkerInstance: Ws,
    // Git Authentication
    testGitAuth: Gs
  };
}
async function un(e, s) {
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
function Cv() {
  async function e() {
    try {
      return await un("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await un("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await un("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function n() {
    await un("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: s,
    restart: o,
    kill: n
  };
}
const xv = { class: "base-modal-header" }, Sv = {
  key: 0,
  class: "base-modal-title"
}, Iv = { class: "base-modal-body" }, Ev = {
  key: 0,
  class: "base-modal-loading"
}, Tv = {
  key: 1,
  class: "base-modal-error"
}, Pv = {
  key: 0,
  class: "base-modal-footer"
}, Rv = /* @__PURE__ */ ve({
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
    return et(() => {
      document.addEventListener("keydown", i), document.body.style.overflow = "hidden";
    }), so(() => {
      document.removeEventListener("keydown", i), document.body.style.overflow = "";
    }), (c, d) => (a(), M(wt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Te(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: d[1] || (d[1] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", xv, [
            qe(c.$slots, "header", {}, () => [
              e.title ? (a(), r("h3", Sv, f(e.title), 1)) : y("", !0)
            ]),
            e.showCloseButton ? (a(), r("button", {
              key: 0,
              class: "base-modal-close",
              onClick: d[0] || (d[0] = (u) => c.$emit("close"))
            }, [...d[2] || (d[2] = [
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
          t("div", Iv, [
            e.loading ? (a(), r("div", Ev, "Loading...")) : e.error ? (a(), r("div", Tv, f(e.error), 1)) : qe(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (a(), r("div", Pv, [
            qe(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), pt = /* @__PURE__ */ pe(Rv, [["__scopeId", "data-v-8dab1081"]]), Mv = ["type", "disabled"], Dv = {
  key: 0,
  class: "spinner"
}, Lv = /* @__PURE__ */ ve({
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
      class: Te(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => s.$emit("click", n))
    }, [
      e.loading ? (a(), r("span", Dv)) : y("", !0),
      qe(s.$slots, "default", {}, void 0)
    ], 10, Mv));
  }
}), Me = /* @__PURE__ */ pe(Lv, [["__scopeId", "data-v-f3452606"]]), Ov = {
  key: 0,
  class: "base-title-count"
}, Av = /* @__PURE__ */ ve({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (a(), M(ja(`h${e.level}`), {
      class: Te(["base-title", e.variant])
    }, {
      default: h(() => [
        qe(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), r("span", Ov, "(" + f(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Vo = /* @__PURE__ */ pe(Av, [["__scopeId", "data-v-5a01561d"]]), Nv = ["value", "disabled"], Uv = {
  key: 0,
  value: "",
  disabled: ""
}, zv = ["value"], Fv = {
  key: 0,
  class: "base-select-error"
}, Bv = /* @__PURE__ */ ve({
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
      class: Te(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Te(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (i) => n.$emit("update:modelValue", i.target.value))
      }, [
        e.placeholder ? (a(), r("option", Uv, f(e.placeholder), 1)) : y("", !0),
        (a(!0), r(G, null, he(e.options, (i) => (a(), r("option", {
          key: s(i),
          value: s(i)
        }, f(o(i)), 9, zv))), 128))
      ], 42, Nv),
      e.error ? (a(), r("span", Fv, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Vv = /* @__PURE__ */ pe(Bv, [["__scopeId", "data-v-7436d745"]]), Wv = { class: "popover-header" }, Gv = { class: "popover-title" }, jv = { class: "popover-content" }, Hv = {
  key: 0,
  class: "popover-actions"
}, Kv = /* @__PURE__ */ ve({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (a(), M(wt, { to: "body" }, [
      e.show ? (a(), r("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Ht({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", Wv, [
            t("h4", Gv, f(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", jv, [
            qe(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (a(), r("div", Hv, [
            qe(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), as = /* @__PURE__ */ pe(Kv, [["__scopeId", "data-v-42815ace"]]), qv = { class: "detail-section" }, Yv = {
  key: 0,
  class: "empty-message"
}, Jv = { class: "model-header" }, Xv = { class: "model-name" }, Qv = { class: "model-details" }, Zv = { class: "model-row" }, ep = { class: "model-row" }, tp = { class: "label" }, sp = {
  key: 0,
  class: "model-row model-row-nodes"
}, op = { class: "node-list" }, np = ["onClick"], ap = {
  key: 1,
  class: "model-row"
}, lp = { class: "value" }, ip = {
  key: 2,
  class: "model-row"
}, rp = { class: "value error" }, cp = {
  key: 0,
  class: "model-actions"
}, dp = { class: "detail-section" }, up = {
  key: 0,
  class: "empty-message"
}, fp = { class: "node-name" }, mp = {
  key: 0,
  class: "node-version"
}, vp = /* @__PURE__ */ ve({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getWorkflowDetails: l, setModelImportance: i, openFileLocation: c } = at(), d = k(null), u = k(!1), m = k(null), v = k(!1), g = k({}), w = k(!1), p = k(/* @__PURE__ */ new Set()), _ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(T) {
      switch (T) {
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
    function $(T) {
      switch (T) {
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
    function P(T) {
      if (!T.loaded_by || T.loaded_by.length === 0) return [];
      const E = T.hash || T.filename;
      return p.value.has(E) ? T.loaded_by : T.loaded_by.slice(0, 3);
    }
    function D(T) {
      return p.value.has(T);
    }
    function I(T) {
      p.value.has(T) ? p.value.delete(T) : p.value.add(T), p.value = new Set(p.value);
    }
    async function x() {
      u.value = !0, m.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load workflow details";
      } finally {
        u.value = !1;
      }
    }
    function K(T, E) {
      g.value[T] = E, v.value = !0;
    }
    async function V(T) {
      try {
        await c(T);
      } catch (E) {
        m.value = E instanceof Error ? E.message : "Failed to open file location";
      }
    }
    async function z() {
      if (!v.value) {
        n("close");
        return;
      }
      u.value = !0, m.value = null;
      try {
        for (const [T, E] of Object.entries(g.value))
          await i(o.workflowName, T, E);
        n("refresh"), n("close");
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to save changes";
      } finally {
        u.value = !1;
      }
    }
    return et(x), (T, E) => (a(), r(G, null, [
      C(pt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: u.value,
        error: m.value || void 0,
        onClose: E[4] || (E[4] = (R) => n("close"))
      }, {
        body: h(() => [
          d.value ? (a(), r(G, { key: 0 }, [
            t("section", qv, [
              C(Vo, { variant: "section" }, {
                default: h(() => [
                  b("MODELS USED (" + f(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (a(), r("div", Yv, " No models used in this workflow ")) : y("", !0),
              (a(!0), r(G, null, he(d.value.models, (R) => {
                var Z;
                return a(), r("div", {
                  key: R.hash || R.filename,
                  class: "model-card"
                }, [
                  t("div", Jv, [
                    E[6] || (E[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", Xv, f(R.filename), 1)
                  ]),
                  t("div", Qv, [
                    t("div", Zv, [
                      E[7] || (E[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Te(["value", S(R.status)])
                      }, f($(R.status)), 3)
                    ]),
                    t("div", ep, [
                      t("span", tp, [
                        E[8] || (E[8] = b(" Importance: ", -1)),
                        C(gr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: E[0] || (E[0] = (J) => w.value = !0)
                        })
                      ]),
                      C(Vv, {
                        "model-value": g.value[R.filename] || R.importance,
                        options: _,
                        "onUpdate:modelValue": (J) => K(R.filename, J)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    R.loaded_by && R.loaded_by.length > 0 ? (a(), r("div", sp, [
                      E[9] || (E[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", op, [
                        (a(!0), r(G, null, he(P(R), (J, W) => (a(), r("div", {
                          key: `${J.node_id}-${W}`,
                          class: "node-reference"
                        }, f(J.node_type) + " (Node #" + f(J.node_id) + ") ", 1))), 128)),
                        R.loaded_by.length > 3 ? (a(), r("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (J) => I(R.hash || R.filename)
                        }, f(D(R.hash || R.filename) ? "▼ Show less" : `▶ View all (${R.loaded_by.length})`), 9, np)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    R.size_mb ? (a(), r("div", ap, [
                      E[10] || (E[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", lp, f(R.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    R.has_category_mismatch ? (a(), r("div", ip, [
                      E[13] || (E[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", rp, [
                        E[11] || (E[11] = b(" In ", -1)),
                        t("code", null, f(R.actual_category) + "/", 1),
                        E[12] || (E[12] = b(" but loader needs ", -1)),
                        t("code", null, f((Z = R.expected_categories) == null ? void 0 : Z[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  R.status !== "available" ? (a(), r("div", cp, [
                    R.status === "downloadable" ? (a(), M(Me, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: E[1] || (E[1] = (J) => n("resolve"))
                    }, {
                      default: h(() => [...E[14] || (E[14] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    })) : R.status === "category_mismatch" && R.file_path ? (a(), M(Me, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (J) => V(R.file_path)
                    }, {
                      default: h(() => [...E[15] || (E[15] = [
                        b(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : R.status !== "path_mismatch" ? (a(), M(Me, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: E[2] || (E[2] = (J) => n("resolve"))
                    }, {
                      default: h(() => [...E[16] || (E[16] = [
                        b(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            t("section", dp, [
              C(Vo, { variant: "section" }, {
                default: h(() => [
                  b("NODES USED (" + f(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (a(), r("div", up, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), r(G, null, he(d.value.nodes, (R) => (a(), r("div", {
                key: R.name,
                class: "node-item"
              }, [
                t("span", {
                  class: Te(["node-status", R.status === "installed" ? "installed" : "missing"])
                }, f(R.status === "installed" ? "✓" : "✕"), 3),
                t("span", fp, f(R.name), 1),
                R.version ? (a(), r("span", mp, "v" + f(R.version), 1)) : y("", !0)
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          C(Me, {
            variant: "secondary",
            onClick: E[3] || (E[3] = (R) => n("close"))
          }, {
            default: h(() => [...E[17] || (E[17] = [
              b(" Close ", -1)
            ])]),
            _: 1
          }),
          v.value ? (a(), M(Me, {
            key: 0,
            variant: "primary",
            onClick: z
          }, {
            default: h(() => [...E[18] || (E[18] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      C(as, {
        show: w.value,
        title: "Model Importance Levels",
        onClose: E[5] || (E[5] = (R) => w.value = !1)
      }, {
        content: h(() => [...E[19] || (E[19] = [
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
}), pp = /* @__PURE__ */ pe(vp, [["__scopeId", "data-v-668728e6"]]), Je = Bs({
  items: [],
  status: "idle"
});
let ms = null;
function yr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function ia(e) {
  return Je.items.find((s) => s.id === e);
}
async function co() {
  if (Je.status === "downloading") return;
  const e = Je.items.find((s) => s.status === "queued");
  if (!e) {
    Je.status = "idle";
    return;
  }
  Je.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await gp(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    Je.status = "idle", co();
  }
}
async function gp(e) {
  return new Promise((s, o) => {
    ms && (ms.close(), ms = null);
    const n = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${n}`);
    ms = l;
    let i = Date.now(), c = 0, d = !1;
    l.onmessage = (u) => {
      try {
        const m = JSON.parse(u.data);
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
            d = !0, l.close(), ms = null, s();
            break;
          case "error":
            d = !0, l.close(), ms = null, o(new Error(m.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      l.close(), ms = null, d || o(new Error("Connection lost"));
    };
  });
}
async function hp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (Je.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: yr(),
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
      Je.items.push(n);
    }
    console.log(`[ComfyGit] Loaded ${s.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function bo() {
  function e($) {
    for (const P of $) {
      if (Je.items.some(
        (x) => x.url === P.url && x.targetPath === P.targetPath && ["queued", "downloading", "paused", "completed"].includes(x.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${P.filename}`);
        continue;
      }
      const I = {
        id: yr(),
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
      Je.items.push(I);
    }
    Je.status === "idle" && co();
  }
  async function s($) {
    const P = ia($);
    if (P) {
      if (P.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(P.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        ms && (ms.close(), ms = null), P.status = "failed", P.error = "Cancelled by user", Je.status = "idle", co();
      } else if (P.status === "queued") {
        const D = Je.items.findIndex((I) => I.id === $);
        D >= 0 && Je.items.splice(D, 1);
      }
    }
  }
  function o($) {
    const P = ia($);
    !P || P.status !== "failed" || (P.status = "queued", P.error = void 0, P.progress = 0, P.downloaded = 0, Je.status === "idle" && co());
  }
  function n($) {
    const P = ia($);
    !P || P.status !== "paused" || (P.status = "queued", Je.status === "idle" && co());
  }
  function l() {
    const $ = Je.items.filter((P) => P.status === "paused");
    for (const P of $)
      P.status = "queued";
    Je.status === "idle" && co();
  }
  function i($) {
    const P = Je.items.findIndex((D) => D.id === $);
    P >= 0 && ["completed", "failed", "paused"].includes(Je.items[P].status) && Je.items.splice(P, 1);
  }
  function c() {
    Je.items = Je.items.filter(($) => $.status !== "completed");
  }
  function d() {
    Je.items = Je.items.filter(($) => $.status !== "failed");
  }
  const u = N(
    () => Je.items.find(($) => $.status === "downloading")
  ), m = N(
    () => Je.items.filter(($) => $.status === "queued")
  ), v = N(
    () => Je.items.filter(($) => $.status === "completed")
  ), g = N(
    () => Je.items.filter(($) => $.status === "failed")
  ), w = N(
    () => Je.items.filter(($) => $.status === "paused")
  ), p = N(() => Je.items.length > 0), _ = N(
    () => Je.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), S = N(
    () => Je.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: kn(Je),
    // Computed
    currentDownload: u,
    queuedItems: m,
    completedItems: v,
    failedItems: g,
    pausedItems: w,
    hasItems: p,
    activeCount: _,
    hasPaused: S,
    // Actions
    addToQueue: e,
    cancelDownload: s,
    retryDownload: o,
    resumeDownload: n,
    resumeAllPaused: l,
    removeItem: i,
    clearCompleted: c,
    clearFailed: d,
    loadPendingDownloads: hp
  };
}
function wr() {
  const e = k(null), s = k(null), o = k([]), n = k([]), l = k(!1), i = k(null);
  async function c(D, I) {
    var K;
    if (!((K = window.app) != null && K.api))
      throw new Error("ComfyUI API not available");
    const x = await window.app.api.fetchApi(D, I);
    if (!x.ok) {
      const V = await x.json().catch(() => ({})), z = V.error || V.message || `Request failed: ${x.status}`;
      throw new Error(z);
    }
    return x.json();
  }
  async function d(D) {
    l.value = !0, i.value = null;
    try {
      let I;
      return ro() || (I = await c(
        `/v2/comfygit/workflow/${D}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), e.value = I, I;
    } catch (I) {
      const x = I instanceof Error ? I.message : "Unknown error occurred";
      throw i.value = x, I;
    } finally {
      l.value = !1;
    }
  }
  async function u(D, I, x, K) {
    l.value = !0, i.value = null;
    try {
      let V;
      if (!ro()) {
        const z = Object.fromEntries(I), T = Object.fromEntries(x), E = K ? Array.from(K) : [];
        V = await c(
          `/v2/comfygit/workflow/${D}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: z,
              model_choices: T,
              skipped_packages: E
            })
          }
        );
      }
      return s.value = V, V;
    } catch (V) {
      const z = V instanceof Error ? V.message : "Unknown error occurred";
      throw i.value = z, V;
    } finally {
      l.value = !1;
    }
  }
  async function m(D, I = 10) {
    l.value = !0, i.value = null;
    try {
      let x;
      return ro() || (x = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: D, limit: I })
        }
      )), o.value = x.results, x.results;
    } catch (x) {
      const K = x instanceof Error ? x.message : "Unknown error occurred";
      throw i.value = K, x;
    } finally {
      l.value = !1;
    }
  }
  async function v(D, I = 10) {
    l.value = !0, i.value = null;
    try {
      let x;
      return ro() || (x = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: D, limit: I })
        }
      )), n.value = x.results, x.results;
    } catch (x) {
      const K = x instanceof Error ? x.message : "Unknown error occurred";
      throw i.value = K, x;
    } finally {
      l.value = !1;
    }
  }
  const g = Bs({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function w() {
    g.phase = "idle", g.currentFile = void 0, g.currentFileIndex = void 0, g.totalFiles = void 0, g.bytesDownloaded = void 0, g.bytesTotal = void 0, g.completedFiles = [], g.nodesToInstall = [], g.nodesInstalled = [], g.installError = void 0, g.needsRestart = void 0, g.error = void 0, g.nodeInstallProgress = void 0;
  }
  async function p(D) {
    g.phase = "installing", g.nodesInstalled = [], g.installError = void 0, g.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return ro(), await _(D);
    } catch (I) {
      const x = I instanceof Error ? I.message : "Failed to install nodes";
      throw g.installError = x, I;
    }
  }
  async function _(D) {
    var x;
    const I = await c(
      `/v2/comfygit/workflow/${D}/install`,
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
      const K = new Map(((x = I.failed) == null ? void 0 : x.map((V) => [V.node_id, V.error])) || []);
      for (let V = 0; V < g.nodesToInstall.length; V++) {
        const z = g.nodesToInstall[V], T = K.get(z);
        g.nodeInstallProgress.completedNodes.push({
          node_id: z,
          success: !T,
          error: T
        });
      }
    }
    return g.nodesInstalled = I.nodes_installed, g.needsRestart = I.nodes_installed.length > 0, I.failed && I.failed.length > 0 && (g.installError = `${I.failed.length} package(s) failed to install`), I;
  }
  async function S(D, I, x) {
    w(), g.phase = "resolving", i.value = null;
    const K = Object.fromEntries(I), V = Object.fromEntries(x);
    try {
      const z = await fetch(`/v2/comfygit/workflow/${D}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: K,
          model_choices: V
        })
      });
      if (!z.ok)
        throw new Error(`Request failed: ${z.status}`);
      if (!z.body)
        throw new Error("No response body");
      const T = z.body.getReader(), E = new TextDecoder();
      let R = "";
      for (; ; ) {
        const { done: Z, value: J } = await T.read();
        if (Z) break;
        R += E.decode(J, { stream: !0 });
        const W = R.split(`

`);
        R = W.pop() || "";
        for (const se of W) {
          if (!se.trim()) continue;
          const ee = se.split(`
`);
          let A = "", j = "";
          for (const L of ee)
            L.startsWith("event: ") ? A = L.slice(7) : L.startsWith("data: ") && (j = L.slice(6));
          if (j)
            try {
              const L = JSON.parse(j);
              $(A, L);
            } catch (L) {
              console.warn("Failed to parse SSE event:", L);
            }
        }
      }
    } catch (z) {
      const T = z instanceof Error ? z.message : "Unknown error occurred";
      throw i.value = T, g.error = T, g.phase = "error", z;
    }
  }
  function $(D, I) {
    switch (D) {
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
  function P(D, I) {
    const { addToQueue: x } = bo(), K = I.filter((V) => V.url && V.target_path).map((V) => ({
      workflow: D,
      filename: V.filename,
      url: V.url,
      targetPath: V.target_path,
      size: V.size || 0,
      type: "model"
    }));
    return K.length > 0 && x(K), K.length;
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
    analyzeWorkflow: d,
    applyResolution: u,
    applyResolutionWithProgress: S,
    installNodes: p,
    searchNodes: m,
    searchModels: v,
    resetProgress: w,
    queueModelDownloads: P
  };
}
const yp = { class: "resolution-stepper" }, wp = { class: "stepper-header" }, _p = ["onClick"], bp = {
  key: 0,
  class: "step-icon"
}, kp = {
  key: 1,
  class: "step-number"
}, $p = { class: "step-label" }, Cp = {
  key: 0,
  class: "step-connector"
}, xp = { class: "stepper-content" }, Sp = /* @__PURE__ */ ve({
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
    function d(m) {
      return !1;
    }
    function u(m) {
      n("step-change", m);
    }
    return (m, v) => (a(), r("div", yp, [
      t("div", wp, [
        (a(!0), r(G, null, he(e.steps, (g, w) => (a(), r("div", {
          key: g.id,
          class: Te(["step", {
            active: e.currentStep === g.id,
            completed: l(g.id),
            "in-progress": i(g.id),
            disabled: d(g.id)
          }]),
          onClick: (p) => u(g.id)
        }, [
          t("div", {
            class: Te(["step-indicator", c(g.id)])
          }, [
            l(g.id) ? (a(), r("span", bp, "✓")) : (a(), r("span", kp, f(w + 1), 1))
          ], 2),
          t("div", $p, f(g.label), 1),
          w < e.steps.length - 1 ? (a(), r("div", Cp)) : y("", !0)
        ], 10, _p))), 128))
      ]),
      t("div", xp, [
        qe(m.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Ip = /* @__PURE__ */ pe(Sp, [["__scopeId", "data-v-2a7b3af8"]]), Ep = /* @__PURE__ */ ve({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = N(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), n = N(() => `confidence-${o.value}`), l = N(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (i, c) => (a(), r("span", {
      class: Te(["confidence-badge", n.value, e.size])
    }, f(l.value), 3));
  }
}), Mn = /* @__PURE__ */ pe(Ep, [["__scopeId", "data-v-17ec4b80"]]), Tp = { class: "node-info" }, Pp = { class: "node-info-text" }, Rp = { class: "item-body" }, Mp = {
  key: 0,
  class: "resolved-state"
}, Dp = {
  key: 1,
  class: "multiple-options"
}, Lp = { class: "options-list" }, Op = ["onClick"], Ap = ["name", "value", "checked", "onChange"], Np = { class: "option-content" }, Up = { class: "option-header" }, zp = { class: "option-package-id" }, Fp = {
  key: 0,
  class: "option-title"
}, Bp = { class: "option-meta" }, Vp = {
  key: 0,
  class: "installed-badge"
}, Wp = { class: "action-buttons" }, Gp = {
  key: 2,
  class: "unresolved"
}, jp = {
  key: 0,
  class: "searching-state"
}, Hp = { class: "options-list" }, Kp = ["onClick"], qp = ["name", "value"], Yp = { class: "option-content" }, Jp = { class: "option-header" }, Xp = { class: "option-package-id" }, Qp = {
  key: 0,
  class: "option-description"
}, Zp = { class: "option-meta" }, eg = {
  key: 0,
  class: "installed-badge"
}, tg = {
  key: 2,
  class: "unresolved-message"
}, sg = { class: "action-buttons" }, og = /* @__PURE__ */ ve({
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
    function l(u, m = 80) {
      return u.length <= m ? u : u.slice(0, m - 3) + "...";
    }
    const i = N(() => !!o.choice);
    N(() => {
      var u;
      return (u = o.choice) == null ? void 0 : u.action;
    }), N(() => {
      var u;
      return (u = o.choice) == null ? void 0 : u.package_id;
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
    function d(u) {
      n("option-selected", u);
    }
    return (u, m) => (a(), r("div", {
      class: Te(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: i.value }])
    }, [
      t("div", Tp, [
        t("span", Pp, [
          m[7] || (m[7] = b("Node type: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Te(["status-badge", c.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Rp, [
        i.value ? (a(), r("div", Mp, [
          C(Me, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", Dp, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", Lp, [
            (a(!0), r(G, null, he(e.options, (v, g) => (a(), r("label", {
              key: v.package_id,
              class: Te(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => d(g)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => d(g)
              }, null, 40, Ap),
              t("div", Np, [
                t("div", Up, [
                  t("span", zp, f(v.package_id), 1),
                  C(Mn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (a(), r("div", Fp, f(v.title), 1)) : y("", !0),
                t("div", Bp, [
                  v.is_installed ? (a(), r("span", Vp, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, Op))), 128))
          ]),
          t("div", Wp, [
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                b(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
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
        ])) : (a(), r("div", Gp, [
          e.isSearching ? (a(), r("div", jp, [...m[13] || (m[13] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), r(G, { key: 1 }, [
            m[14] || (m[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", Hp, [
              (a(!0), r(G, null, he(e.searchResults.slice(0, 5), (v, g) => (a(), r("label", {
                key: v.package_id,
                class: "option-card",
                onClick: (w) => n("search-result-selected", v)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, qp),
                t("div", Yp, [
                  t("div", Jp, [
                    t("span", Xp, f(v.package_id), 1),
                    C(Mn, {
                      confidence: v.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  v.description ? (a(), r("div", Qp, f(l(v.description)), 1)) : y("", !0),
                  t("div", Zp, [
                    v.is_installed ? (a(), r("span", eg, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, Kp))), 128))
            ])
          ], 64)) : (a(), r("div", tg, [...m[15] || (m[15] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", sg, [
            C(Me, {
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
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("manual-entry"))
            }, {
              default: h(() => [...m[16] || (m[16] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
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
}), ng = /* @__PURE__ */ pe(og, [["__scopeId", "data-v-c2997d1d"]]), ag = { class: "item-navigator" }, lg = { class: "nav-item-info" }, ig = ["title"], rg = { class: "nav-controls" }, cg = { class: "nav-arrows" }, dg = ["disabled"], ug = ["disabled"], fg = { class: "nav-position" }, mg = /* @__PURE__ */ ve({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (n, l) => (a(), r("div", ag, [
      t("div", lg, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, f(e.itemName), 9, ig)
      ]),
      t("div", rg, [
        t("div", cg, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (i) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, dg),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (i) => o("next")),
            title: "Next item"
          }, " → ", 8, ug)
        ]),
        t("span", fg, f(e.currentIndex + 1) + "/" + f(e.totalItems), 1)
      ])
    ]));
  }
}), _r = /* @__PURE__ */ pe(mg, [["__scopeId", "data-v-74af7920"]]), vg = ["type", "value", "placeholder", "disabled"], pg = {
  key: 0,
  class: "base-input-error"
}, gg = /* @__PURE__ */ ve({
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
      class: Te(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Te(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.value)),
        onKeyup: [
          o[1] || (o[1] = Zt((n) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = Zt((n) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, vg),
      e.error ? (a(), r("span", pg, f(e.error), 1)) : y("", !0)
    ], 2));
  }
}), es = /* @__PURE__ */ pe(gg, [["__scopeId", "data-v-9ba02cdc"]]), hg = { class: "node-resolution-step" }, yg = {
  key: 0,
  class: "auto-resolved-section"
}, wg = { class: "section-header" }, _g = { class: "stat-badge" }, bg = { class: "resolved-packages-list" }, kg = { class: "package-info" }, $g = { class: "package-id" }, Cg = { class: "node-count" }, xg = { class: "package-actions" }, Sg = {
  key: 0,
  class: "status-badge install"
}, Ig = {
  key: 1,
  class: "status-badge skip"
}, Eg = ["onClick"], Tg = {
  key: 1,
  class: "section-divider"
}, Pg = { class: "step-header" }, Rg = { class: "stat-badge" }, Mg = {
  key: 1,
  class: "step-body"
}, Dg = {
  key: 3,
  class: "empty-state"
}, Lg = { class: "node-modal-body" }, Og = { class: "node-search-results-container" }, Ag = {
  key: 0,
  class: "node-search-results"
}, Ng = ["onClick"], Ug = { class: "node-result-header" }, zg = { class: "node-result-package-id" }, Fg = {
  key: 0,
  class: "node-result-description"
}, Bg = {
  key: 1,
  class: "node-empty-state"
}, Vg = {
  key: 2,
  class: "node-empty-state"
}, Wg = {
  key: 3,
  class: "node-empty-state"
}, Gg = { class: "node-manual-entry-modal" }, jg = { class: "node-modal-body" }, Hg = { class: "node-modal-actions" }, Kg = /* @__PURE__ */ ve({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, n = s, { searchNodes: l } = wr(), i = k(0), c = k(!1), d = k(!1), u = k(""), m = k(""), v = k([]), g = k(!1), w = k(/* @__PURE__ */ new Map()), p = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function S() {
      _.value && L(), _.value = !1;
    }
    const $ = N(() => o.nodes[i.value]), P = N(() => o.nodes.filter((Se) => o.nodeChoices.has(Se.node_type)).length), D = N(() => $.value ? w.value.get($.value.node_type) || [] : []), I = N(() => $.value ? p.value.has($.value.node_type) : !1);
    Ct($, async (Se) => {
      var Ie;
      Se && ((Ie = Se.options) != null && Ie.length || w.value.has(Se.node_type) || p.value.has(Se.node_type) || o.nodeChoices.has(Se.node_type) || await x(Se.node_type));
    }, { immediate: !0 });
    async function x(Se) {
      p.value.add(Se);
      try {
        const Ie = await l(Se, 5);
        w.value.set(Se, Ie);
      } catch {
        w.value.set(Se, []);
      } finally {
        p.value.delete(Se);
      }
    }
    const K = N(() => o.autoResolvedPackages.filter((Se) => !o.skippedPackages.has(Se.package_id)).length);
    function V(Se) {
      return o.skippedPackages.has(Se);
    }
    function z(Se) {
      n("package-skip", Se);
    }
    const T = N(() => {
      var Ie;
      if (!$.value) return "not-found";
      const Se = o.nodeChoices.get($.value.node_type);
      if (Se)
        switch (Se.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (Ie = $.value.options) != null && Ie.length ? "ambiguous" : "not-found";
    }), E = N(() => {
      var Ie;
      if (!$.value) return;
      const Se = o.nodeChoices.get($.value.node_type);
      if (Se)
        switch (Se.action) {
          case "install":
            return Se.package_id ? `→ ${Se.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (Ie = $.value.options) != null && Ie.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function R(Se) {
      Se >= 0 && Se < o.nodes.length && (i.value = Se);
    }
    function Z() {
      var Se;
      for (let Ie = i.value + 1; Ie < o.nodes.length; Ie++) {
        const _e = o.nodes[Ie];
        if (!((Se = o.nodeChoices) != null && Se.has(_e.node_type))) {
          R(Ie);
          return;
        }
      }
    }
    function J() {
      $.value && (n("mark-optional", $.value.node_type), Et(() => Z()));
    }
    function W() {
      $.value && (n("skip", $.value.node_type), Et(() => Z()));
    }
    function se(Se) {
      $.value && (n("option-selected", $.value.node_type, Se), Et(() => Z()));
    }
    function ee() {
      $.value && n("clear-choice", $.value.node_type);
    }
    function A() {
      $.value && (u.value = $.value.node_type, v.value = D.value, c.value = !0, $e(u.value));
    }
    function j() {
      m.value = "", d.value = !0;
    }
    function L() {
      c.value = !1, u.value = "", v.value = [];
    }
    function ne() {
      d.value = !1, m.value = "";
    }
    let Y = null;
    function de() {
      Y && clearTimeout(Y), Y = setTimeout(() => {
        $e(u.value);
      }, 300);
    }
    async function $e(Se) {
      if (!Se.trim()) {
        v.value = [];
        return;
      }
      g.value = !0;
      try {
        v.value = await l(Se, 10);
      } catch {
        v.value = [];
      } finally {
        g.value = !1;
      }
    }
    function Pe(Se) {
      $.value && (n("manual-entry", $.value.node_type, Se.package_id), L(), Et(() => Z()));
    }
    function Ge(Se) {
      $.value && (n("manual-entry", $.value.node_type, Se.package_id), Et(() => Z()));
    }
    function Le() {
      !$.value || !m.value.trim() || (n("manual-entry", $.value.node_type, m.value.trim()), ne());
    }
    return (Se, Ie) => {
      var _e, ge;
      return a(), r("div", hg, [
        e.autoResolvedPackages.length > 0 ? (a(), r("div", yg, [
          t("div", wg, [
            Ie[6] || (Ie[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", _g, f(K.value) + "/" + f(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", bg, [
            (a(!0), r(G, null, he(e.autoResolvedPackages, (Oe) => (a(), r("div", {
              key: Oe.package_id,
              class: "resolved-package-item"
            }, [
              t("div", kg, [
                t("code", $g, f(Oe.package_id), 1),
                t("span", Cg, f(Oe.node_types_count) + " node type" + f(Oe.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", xg, [
                V(Oe.package_id) ? (a(), r("span", Ig, " SKIPPED ")) : (a(), r("span", Sg, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (Re) => z(Oe.package_id)
                }, f(V(Oe.package_id) ? "Include" : "Skip"), 9, Eg)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), r("div", Tg)) : y("", !0),
        e.nodes.length > 0 ? (a(), r(G, { key: 2 }, [
          t("div", Pg, [
            Ie[7] || (Ie[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", Rg, f(P.value) + "/" + f(e.nodes.length) + " resolved", 1)
          ]),
          $.value ? (a(), M(_r, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": i.value,
            "total-items": e.nodes.length,
            onPrev: Ie[0] || (Ie[0] = (Oe) => R(i.value - 1)),
            onNext: Ie[1] || (Ie[1] = (Oe) => R(i.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          $.value ? (a(), r("div", Mg, [
            C(ng, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((_e = $.value.options) != null && _e.length),
              options: $.value.options,
              choice: (ge = e.nodeChoices) == null ? void 0 : ge.get($.value.node_type),
              status: T.value,
              "status-label": E.value,
              "search-results": D.value,
              "is-searching": I.value,
              onMarkOptional: J,
              onSkip: W,
              onManualEntry: j,
              onSearch: A,
              onOptionSelected: se,
              onClearChoice: ee,
              onSearchResultSelected: Ge
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), r("div", Dg, [...Ie[8] || (Ie[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), M(wt, { to: "body" }, [
          c.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: Ie[4] || (Ie[4] = rt((Oe) => _.value = !0, ["self"])),
            onMouseup: rt(S, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: Ie[3] || (Ie[3] = (Oe) => _.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                Ie[9] || (Ie[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: L
                }, "✕")
              ]),
              t("div", Lg, [
                C(es, {
                  modelValue: u.value,
                  "onUpdate:modelValue": Ie[2] || (Ie[2] = (Oe) => u.value = Oe),
                  placeholder: "Search by node type, package name...",
                  onInput: de
                }, null, 8, ["modelValue"]),
                t("div", Og, [
                  v.value.length > 0 ? (a(), r("div", Ag, [
                    (a(!0), r(G, null, he(v.value, (Oe) => (a(), r("div", {
                      key: Oe.package_id,
                      class: "node-search-result-item",
                      onClick: (Re) => Pe(Oe)
                    }, [
                      t("div", Ug, [
                        t("code", zg, f(Oe.package_id), 1),
                        Oe.match_confidence ? (a(), M(Mn, {
                          key: 0,
                          confidence: Oe.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      Oe.description ? (a(), r("div", Fg, f(Oe.description), 1)) : y("", !0)
                    ], 8, Ng))), 128))
                  ])) : g.value ? (a(), r("div", Bg, "Searching...")) : u.value ? (a(), r("div", Vg, 'No packages found matching "' + f(u.value) + '"', 1)) : (a(), r("div", Wg, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), M(wt, { to: "body" }, [
          d.value ? (a(), r("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: rt(ne, ["self"])
          }, [
            t("div", Gg, [
              t("div", { class: "node-modal-header" }, [
                Ie[10] || (Ie[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ne
                }, "✕")
              ]),
              t("div", jg, [
                C(es, {
                  modelValue: m.value,
                  "onUpdate:modelValue": Ie[5] || (Ie[5] = (Oe) => m.value = Oe),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", Hg, [
                  C(Me, {
                    variant: "secondary",
                    onClick: ne
                  }, {
                    default: h(() => [...Ie[11] || (Ie[11] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Me, {
                    variant: "primary",
                    disabled: !m.value.trim(),
                    onClick: Le
                  }, {
                    default: h(() => [...Ie[12] || (Ie[12] = [
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
}), qg = /* @__PURE__ */ pe(Kg, [["__scopeId", "data-v-6b44801f"]]), Yg = { class: "node-info" }, Jg = { class: "node-info-text" }, Xg = { class: "item-body" }, Qg = {
  key: 0,
  class: "resolved-state"
}, Zg = {
  key: 1,
  class: "multiple-options"
}, eh = { class: "options-list" }, th = ["onClick"], sh = ["name", "value", "checked", "onChange"], oh = { class: "option-content" }, nh = { class: "option-header" }, ah = { class: "option-filename" }, lh = { class: "option-meta" }, ih = { class: "option-size" }, rh = { class: "option-category" }, ch = { class: "option-path" }, dh = { class: "action-buttons" }, uh = {
  key: 2,
  class: "unresolved"
}, fh = { class: "action-buttons" }, mh = /* @__PURE__ */ ve({
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
      var u;
      return (u = o.choice) == null ? void 0 : u.action;
    }), N(() => {
      var u, m;
      return ((m = (u = o.choice) == null ? void 0 : u.selected_model) == null ? void 0 : m.filename) || "selected";
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
    function c(u) {
      n("option-selected", u);
    }
    function d(u) {
      if (!u) return "Unknown";
      const m = u / (1024 * 1024 * 1024);
      return m >= 1 ? `${m.toFixed(2)} GB` : `${(u / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (u, m) => (a(), r("div", {
      class: Te(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", Yg, [
        t("span", Jg, [
          m[7] || (m[7] = b("Used by: ", -1)),
          t("code", null, f(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), r("span", {
          key: 0,
          class: Te(["status-badge", i.value])
        }, f(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Xg, [
        l.value ? (a(), r("div", Qg, [
          C(Me, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (v) => n("clear-choice"))
          }, {
            default: h(() => [...m[8] || (m[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), r("div", Zg, [
          m[12] || (m[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", eh, [
            (a(!0), r(G, null, he(e.options, (v, g) => (a(), r("label", {
              key: v.model.hash,
              class: Te(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (w) => c(g)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (w) => c(g)
              }, null, 40, sh),
              t("div", oh, [
                t("div", nh, [
                  t("span", ah, f(v.model.filename), 1),
                  C(Mn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", lh, [
                  t("span", ih, f(d(v.model.size)), 1),
                  t("span", rh, f(v.model.category), 1)
                ]),
                t("div", ch, f(v.model.relative_path), 1)
              ])
            ], 10, th))), 128))
          ]),
          t("div", dh, [
            C(Me, {
              variant: "ghost",
              size: "sm",
              onClick: m[1] || (m[1] = (v) => n("search"))
            }, {
              default: h(() => [...m[9] || (m[9] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: "ghost",
              size: "sm",
              onClick: m[2] || (m[2] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[10] || (m[10] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
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
        ])) : (a(), r("div", uh, [
          m[16] || (m[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", fh, [
            C(Me, {
              variant: "primary",
              size: "sm",
              onClick: m[4] || (m[4] = (v) => n("search"))
            }, {
              default: h(() => [...m[13] || (m[13] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: m[5] || (m[5] = (v) => n("download-url"))
            }, {
              default: h(() => [...m[14] || (m[14] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
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
}), vh = /* @__PURE__ */ pe(mh, [["__scopeId", "data-v-8a82fefa"]]), ph = { class: "model-resolution-step" }, gh = { class: "step-header" }, hh = { class: "step-info" }, yh = { class: "step-title" }, wh = { class: "step-description" }, _h = { class: "stat-badge" }, bh = {
  key: 1,
  class: "step-body"
}, kh = {
  key: 2,
  class: "empty-state"
}, $h = { class: "model-search-modal" }, Ch = { class: "model-modal-body" }, xh = {
  key: 0,
  class: "model-search-results"
}, Sh = ["onClick"], Ih = { class: "model-result-header" }, Eh = { class: "model-result-filename" }, Th = { class: "model-result-meta" }, Ph = { class: "model-result-category" }, Rh = { class: "model-result-size" }, Mh = {
  key: 0,
  class: "model-result-path"
}, Dh = {
  key: 1,
  class: "model-no-results"
}, Lh = {
  key: 2,
  class: "model-searching"
}, Oh = { class: "model-download-url-modal" }, Ah = { class: "model-modal-body" }, Nh = { class: "model-input-group" }, Uh = { class: "model-input-group" }, zh = { class: "model-modal-actions" }, Fh = /* @__PURE__ */ ve({
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
    function n(L) {
      var ne;
      return L && ((ne = o[L]) == null ? void 0 : ne[0]) || null;
    }
    const l = e, i = s, c = k(0), d = k(!1), u = k(!1), m = k(""), v = k(""), g = k(""), w = k([]), p = k(!1), _ = N(() => l.models[c.value]), S = N(() => l.models.some((L) => L.is_download_intent)), $ = N(() => l.models.filter(
      (L) => l.modelChoices.has(L.filename) || L.is_download_intent
    ).length), P = N(() => {
      var ne;
      if (!_.value) return "";
      const L = n((ne = _.value.reference) == null ? void 0 : ne.node_type);
      return L ? `${L}/${_.value.filename}` : "";
    }), D = N(() => {
      var ne;
      if (!_.value) return "not-found";
      const L = l.modelChoices.get(_.value.filename);
      if (L)
        switch (L.action) {
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
      return _.value.is_download_intent ? "download" : (ne = _.value.options) != null && ne.length ? "ambiguous" : "not-found";
    }), I = N(() => {
      var ne, Y;
      if (!_.value) return;
      const L = l.modelChoices.get(_.value.filename);
      if (L)
        switch (L.action) {
          case "select":
            return (ne = L.selected_model) != null && ne.filename ? `→ ${L.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (Y = _.value.options) != null && Y.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function x(L) {
      L >= 0 && L < l.models.length && (c.value = L);
    }
    function K() {
      var L;
      for (let ne = c.value + 1; ne < l.models.length; ne++) {
        const Y = l.models[ne];
        if (!Y.is_download_intent && !((L = l.modelChoices) != null && L.has(Y.filename))) {
          x(ne);
          return;
        }
      }
    }
    function V() {
      _.value && (i("mark-optional", _.value.filename), Et(() => K()));
    }
    function z() {
      _.value && (i("skip", _.value.filename), Et(() => K()));
    }
    function T(L) {
      _.value && (i("option-selected", _.value.filename, L), Et(() => K()));
    }
    function E() {
      _.value && i("clear-choice", _.value.filename);
    }
    function R() {
      _.value && (m.value = _.value.filename, d.value = !0);
    }
    function Z() {
      _.value && (v.value = _.value.download_source || "", g.value = _.value.target_path || P.value, u.value = !0);
    }
    function J() {
      d.value = !1, m.value = "", w.value = [];
    }
    function W() {
      u.value = !1, v.value = "", g.value = "";
    }
    function se() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function ee(L) {
      _.value && (J(), Et(() => K()));
    }
    function A() {
      !_.value || !v.value.trim() || (i("download-url", _.value.filename, v.value.trim(), g.value.trim() || void 0), W(), Et(() => K()));
    }
    function j(L) {
      if (!L) return "Unknown";
      const ne = L / (1024 * 1024 * 1024);
      return ne >= 1 ? `${ne.toFixed(2)} GB` : `${(L / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (L, ne) => {
      var Y, de, $e;
      return a(), r("div", ph, [
        t("div", gh, [
          t("div", hh, [
            t("h3", yh, f(S.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", wh, f(S.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", _h, f($.value) + "/" + f(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), M(_r, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: ne[0] || (ne[0] = (Pe) => x(c.value - 1)),
          onNext: ne[1] || (ne[1] = (Pe) => x(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), r("div", bh, [
          C(vh, {
            filename: _.value.filename,
            "node-type": ((Y = _.value.reference) == null ? void 0 : Y.node_type) || "Unknown",
            "has-multiple-options": !!((de = _.value.options) != null && de.length),
            options: _.value.options,
            choice: ($e = e.modelChoices) == null ? void 0 : $e.get(_.value.filename),
            status: D.value,
            "status-label": I.value,
            onMarkOptional: V,
            onSkip: z,
            onDownloadUrl: Z,
            onSearch: R,
            onOptionSelected: T,
            onClearChoice: E
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), r("div", kh, [...ne[5] || (ne[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (a(), M(wt, { to: "body" }, [
          d.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: rt(J, ["self"])
          }, [
            t("div", $h, [
              t("div", { class: "model-modal-header" }, [
                ne[6] || (ne[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: J
                }, "✕")
              ]),
              t("div", Ch, [
                C(es, {
                  modelValue: m.value,
                  "onUpdate:modelValue": ne[2] || (ne[2] = (Pe) => m.value = Pe),
                  placeholder: "Search by filename, category...",
                  onInput: se
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), r("div", xh, [
                  (a(!0), r(G, null, he(w.value, (Pe) => (a(), r("div", {
                    key: Pe.hash,
                    class: "model-search-result-item",
                    onClick: (Ge) => ee()
                  }, [
                    t("div", Ih, [
                      t("code", Eh, f(Pe.filename), 1)
                    ]),
                    t("div", Th, [
                      t("span", Ph, f(Pe.category), 1),
                      t("span", Rh, f(j(Pe.size)), 1)
                    ]),
                    Pe.relative_path ? (a(), r("div", Mh, f(Pe.relative_path), 1)) : y("", !0)
                  ], 8, Sh))), 128))
                ])) : m.value && !p.value ? (a(), r("div", Dh, ' No models found matching "' + f(m.value) + '" ', 1)) : y("", !0),
                p.value ? (a(), r("div", Lh, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), M(wt, { to: "body" }, [
          u.value ? (a(), r("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: rt(W, ["self"])
          }, [
            t("div", Oh, [
              t("div", { class: "model-modal-header" }, [
                ne[7] || (ne[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: W
                }, "✕")
              ]),
              t("div", Ah, [
                t("div", Nh, [
                  ne[8] || (ne[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  C(es, {
                    modelValue: v.value,
                    "onUpdate:modelValue": ne[3] || (ne[3] = (Pe) => v.value = Pe),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", Uh, [
                  ne[9] || (ne[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  C(es, {
                    modelValue: g.value,
                    "onUpdate:modelValue": ne[4] || (ne[4] = (Pe) => g.value = Pe),
                    placeholder: P.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", zh, [
                  C(Me, {
                    variant: "secondary",
                    onClick: W
                  }, {
                    default: h(() => [...ne[10] || (ne[10] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Me, {
                    variant: "primary",
                    disabled: !v.value.trim() || !g.value.trim(),
                    onClick: A
                  }, {
                    default: h(() => [...ne[11] || (ne[11] = [
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
}), Bh = /* @__PURE__ */ pe(Fh, [["__scopeId", "data-v-5c700bfa"]]), Vh = { class: "applying-step" }, Wh = {
  key: 0,
  class: "phase-content"
}, Gh = {
  key: 1,
  class: "phase-content"
}, jh = { class: "phase-description" }, Hh = { class: "overall-progress" }, Kh = { class: "progress-bar" }, qh = { class: "progress-label" }, Yh = { class: "install-list" }, Jh = { class: "install-icon" }, Xh = { key: 0 }, Qh = {
  key: 1,
  class: "spinner"
}, Zh = { key: 2 }, ey = { key: 3 }, ty = {
  key: 0,
  class: "install-error"
}, sy = {
  key: 2,
  class: "phase-content"
}, oy = { class: "phase-header" }, ny = { class: "phase-title" }, ay = { class: "completion-summary" }, ly = {
  key: 0,
  class: "summary-item success"
}, iy = { class: "summary-text" }, ry = {
  key: 1,
  class: "summary-item error"
}, cy = { class: "summary-text" }, dy = {
  key: 2,
  class: "failed-list"
}, uy = { class: "failed-node-id" }, fy = { class: "failed-error" }, my = {
  key: 4,
  class: "summary-item success"
}, vy = {
  key: 5,
  class: "restart-prompt"
}, py = {
  key: 3,
  class: "phase-content error"
}, gy = { class: "error-message" }, hy = /* @__PURE__ */ ve({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = N(() => {
      var m, v;
      const d = ((m = s.progress.nodeInstallProgress) == null ? void 0 : m.totalNodes) || s.progress.nodesToInstall.length;
      if (!d) return 0;
      const u = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(u / d * 100);
    }), n = N(() => {
      var d;
      return ((d = s.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.filter((u) => !u.success)) || [];
    }), l = N(() => n.value.length > 0);
    function i(d, u) {
      var v, g;
      const m = (v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.find((w) => w.node_id === d);
      return m ? m.success ? "complete" : "failed" : ((g = s.progress.nodeInstallProgress) == null ? void 0 : g.currentIndex) === u ? "installing" : "pending";
    }
    function c(d) {
      var u, m;
      return (m = (u = s.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.find((v) => v.node_id === d)) == null ? void 0 : m.error;
    }
    return (d, u) => {
      var m, v, g, w;
      return a(), r("div", Vh, [
        e.progress.phase === "resolving" ? (a(), r("div", Wh, [...u[2] || (u[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), r("div", Gh, [
          u[3] || (u[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", jh, " Installing " + f((((m = e.progress.nodeInstallProgress) == null ? void 0 : m.currentIndex) ?? 0) + 1) + " of " + f(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", Hh, [
            t("div", Kh, [
              t("div", {
                class: "progress-fill",
                style: Ht({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", qh, f(((g = e.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0) + " / " + f(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", Yh, [
            (a(!0), r(G, null, he(e.progress.nodesToInstall, (p, _) => (a(), r("div", {
              key: p,
              class: Te(["install-item", i(p, _)])
            }, [
              t("span", Jh, [
                i(p, _) === "pending" ? (a(), r("span", Xh, "○")) : i(p, _) === "installing" ? (a(), r("span", Qh, "◌")) : i(p, _) === "complete" ? (a(), r("span", Zh, "✓")) : i(p, _) === "failed" ? (a(), r("span", ey, "✗")) : y("", !0)
              ]),
              t("code", null, f(p), 1),
              c(p) ? (a(), r("span", ty, f(c(p)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), r("div", sy, [
          t("div", oy, [
            t("span", {
              class: Te(["phase-icon", l.value ? "warning" : "success"])
            }, f(l.value ? "⚠" : "✓"), 3),
            t("h3", ny, f(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", ay, [
            e.progress.nodesInstalled.length > 0 ? (a(), r("div", ly, [
              u[4] || (u[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", iy, f(e.progress.nodesInstalled.length) + " node package" + f(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("div", ry, [
              u[5] || (u[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", cy, f(n.value.length) + " package" + f(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("div", dy, [
              (a(!0), r(G, null, he(n.value, (p) => (a(), r("div", {
                key: p.node_id,
                class: "failed-item"
              }, [
                t("code", uy, f(p.node_id), 1),
                t("span", fy, f(p.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), r("button", {
              key: 3,
              class: "retry-button",
              onClick: u[0] || (u[0] = (p) => d.$emit("retry-failed"))
            }, " Retry Failed (" + f(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), r("div", my, [...u[6] || (u[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            u[8] || (u[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), r("div", vy, [
              u[7] || (u[7] = t("div", { class: "restart-warning" }, [
                t("span", { class: "warning-icon" }, "⚠"),
                t("div", { class: "warning-content" }, [
                  t("strong", null, "Restart Required"),
                  t("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              t("button", {
                class: "restart-button",
                onClick: u[1] || (u[1] = (p) => d.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (a(), r("div", py, [
          u[9] || (u[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", gy, f(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), yy = /* @__PURE__ */ pe(hy, [["__scopeId", "data-v-5efaae58"]]), wy = {
  key: 0,
  class: "loading-state"
}, _y = {
  key: 1,
  class: "wizard-content"
}, by = {
  key: 0,
  class: "step-content"
}, ky = { class: "analysis-summary" }, $y = { class: "analysis-header" }, Cy = { class: "summary-description" }, xy = { class: "stats-grid" }, Sy = { class: "stat-card" }, Iy = { class: "stat-items" }, Ey = {
  key: 0,
  class: "stat-item success"
}, Ty = { class: "stat-count" }, Py = {
  key: 1,
  class: "stat-item info"
}, Ry = { class: "stat-count" }, My = {
  key: 2,
  class: "stat-item warning"
}, Dy = { class: "stat-count" }, Ly = {
  key: 3,
  class: "stat-item error"
}, Oy = { class: "stat-count" }, Ay = { class: "stat-card" }, Ny = { class: "stat-items" }, Uy = { class: "stat-item success" }, zy = { class: "stat-count" }, Fy = {
  key: 0,
  class: "stat-item info"
}, By = { class: "stat-count" }, Vy = {
  key: 1,
  class: "stat-item warning"
}, Wy = { class: "stat-count" }, Gy = {
  key: 2,
  class: "stat-item warning"
}, jy = { class: "stat-count" }, Hy = {
  key: 3,
  class: "stat-item error"
}, Ky = { class: "stat-count" }, qy = {
  key: 0,
  class: "status-message warning"
}, Yy = { class: "status-text" }, Jy = {
  key: 1,
  class: "status-message info"
}, Xy = { class: "status-text" }, Qy = {
  key: 2,
  class: "status-message info"
}, Zy = { class: "status-text" }, e1 = {
  key: 3,
  class: "status-message warning"
}, t1 = { class: "status-text" }, s1 = {
  key: 4,
  class: "status-message success"
}, o1 = {
  key: 5,
  class: "category-mismatch-section"
}, n1 = { class: "mismatch-list" }, a1 = { class: "mismatch-path" }, l1 = { class: "mismatch-target" }, i1 = {
  key: 3,
  class: "step-content"
}, r1 = { class: "review-summary" }, c1 = { class: "review-stats" }, d1 = { class: "review-stat" }, u1 = { class: "stat-value" }, f1 = { class: "review-stat" }, m1 = { class: "stat-value" }, v1 = { class: "review-stat" }, p1 = { class: "stat-value" }, g1 = { class: "review-stat" }, h1 = { class: "stat-value" }, y1 = {
  key: 0,
  class: "review-section"
}, w1 = { class: "section-title" }, _1 = { class: "review-items" }, b1 = { class: "item-name" }, k1 = { class: "item-choice" }, $1 = {
  key: 0,
  class: "choice-badge install"
}, C1 = {
  key: 1,
  class: "choice-badge skip"
}, x1 = {
  key: 1,
  class: "review-section"
}, S1 = { class: "section-title" }, I1 = { class: "review-items" }, E1 = { class: "item-name" }, T1 = { class: "item-choice" }, P1 = {
  key: 0,
  class: "choice-badge install"
}, R1 = {
  key: 1,
  class: "choice-badge optional"
}, M1 = {
  key: 2,
  class: "choice-badge skip"
}, D1 = {
  key: 1,
  class: "choice-badge pending"
}, L1 = {
  key: 2,
  class: "review-section"
}, O1 = { class: "section-title" }, A1 = { class: "review-items download-details" }, N1 = { class: "download-info" }, U1 = { class: "item-name" }, z1 = { class: "download-meta" }, F1 = { class: "download-path" }, B1 = ["title"], V1 = {
  key: 3,
  class: "review-section"
}, W1 = { class: "section-title" }, G1 = { class: "review-items" }, j1 = { class: "item-name" }, H1 = { class: "item-choice" }, K1 = {
  key: 0,
  class: "choice-badge install"
}, q1 = {
  key: 1,
  class: "choice-badge download"
}, Y1 = {
  key: 2,
  class: "choice-badge optional"
}, J1 = {
  key: 3,
  class: "choice-badge skip"
}, X1 = {
  key: 4,
  class: "choice-badge skip"
}, Q1 = {
  key: 1,
  class: "choice-badge download"
}, Z1 = {
  key: 2,
  class: "choice-badge pending"
}, e0 = {
  key: 4,
  class: "no-choices"
}, t0 = /* @__PURE__ */ ve({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, n = s, { analyzeWorkflow: l, applyResolution: i, installNodes: c, queueModelDownloads: d, progress: u, resetProgress: m } = wr(), { loadPendingDownloads: v } = bo(), { openFileLocation: g } = at(), w = k(null), p = k(!1), _ = k(!1), S = k(null), $ = k("analysis"), P = k([]), D = k(/* @__PURE__ */ new Map()), I = k(/* @__PURE__ */ new Map()), x = k(/* @__PURE__ */ new Set()), K = N(() => {
      const B = [
        { id: "analysis", label: "Analysis" }
      ];
      return (z.value || R.value) && B.push({ id: "nodes", label: "Nodes" }), T.value && B.push({ id: "models", label: "Models" }), B.push({ id: "review", label: "Review" }), $.value === "applying" && B.push({ id: "applying", label: "Applying" }), B;
    }), V = N(() => w.value ? w.value.stats.needs_user_input : !1), z = N(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), T = N(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), E = N(() => w.value ? w.value.stats.download_intents > 0 : !1), R = N(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), Z = N(() => w.value ? w.value.nodes.resolved.length : 0), J = N(() => w.value ? w.value.models.resolved.filter((B) => B.has_category_mismatch) : []), W = N(() => J.value.length > 0), se = N(() => z.value || R.value ? "nodes" : T.value ? "models" : "review"), ee = N(() => {
      if (!w.value) return [];
      const B = w.value.nodes.resolved.filter((ce) => !ce.is_installed), U = /* @__PURE__ */ new Set();
      return B.filter((ce) => U.has(ce.package.package_id) ? !1 : (U.add(ce.package.package_id), !0));
    }), A = N(() => {
      if (!w.value) return [];
      const B = w.value.nodes.resolved.filter((ce) => !ce.is_installed), U = /* @__PURE__ */ new Map();
      for (const ce of B) {
        const Ve = U.get(ce.package.package_id);
        Ve ? Ve.node_types_count++ : U.set(ce.package.package_id, {
          package_id: ce.package.package_id,
          title: ce.package.title,
          node_types_count: 1
        });
      }
      return Array.from(U.values());
    }), j = N(() => ee.value.filter((B) => !x.value.has(B.package.package_id))), L = N(() => w.value ? w.value.models.resolved.filter(
      (B) => B.match_type === "download_intent" || B.match_type === "property_download_intent"
    ).map((B) => ({
      filename: B.reference.widget_value,
      reference: B.reference,
      is_download_intent: !0,
      resolved_model: B.model,
      download_source: B.download_source,
      target_path: B.target_path
    })) : []), ne = N(() => {
      if (!w.value) return [];
      const B = w.value.nodes.unresolved.map((ce) => ({
        node_type: ce.reference.node_type,
        reason: ce.reason,
        is_unresolved: !0,
        options: void 0
      })), U = w.value.nodes.ambiguous.map((ce) => ({
        node_type: ce.reference.node_type,
        has_multiple_options: !0,
        options: ce.options.map((Ve) => ({
          package_id: Ve.package.package_id,
          title: Ve.package.title,
          match_confidence: Ve.match_confidence,
          match_type: Ve.match_type,
          is_installed: Ve.is_installed
        }))
      }));
      return [...B, ...U];
    }), Y = N(() => {
      if (!w.value) return [];
      const B = w.value.models.unresolved.map((ce) => ({
        filename: ce.reference.widget_value,
        reference: ce.reference,
        reason: ce.reason,
        is_unresolved: !0,
        options: void 0
      })), U = w.value.models.ambiguous.map((ce) => ({
        filename: ce.reference.widget_value,
        reference: ce.reference,
        has_multiple_options: !0,
        options: ce.options.map((Ve) => ({
          model: Ve.model,
          match_confidence: Ve.match_confidence,
          match_type: Ve.match_type,
          has_download_source: Ve.has_download_source
        }))
      }));
      return [...B, ...U];
    }), de = N(() => {
      const B = Y.value, U = L.value.map((ce) => ({
        filename: ce.filename,
        reference: ce.reference,
        is_download_intent: !0,
        resolved_model: ce.resolved_model,
        download_source: ce.download_source,
        target_path: ce.target_path,
        options: void 0
      }));
      return [...B, ...U];
    }), $e = N(() => L.value.filter((B) => {
      const U = I.value.get(B.filename);
      return U ? U.action === "download" : !0;
    }).map((B) => ({
      filename: B.filename,
      url: B.download_source,
      target_path: B.target_path
    })));
    function Pe(B, U = 50) {
      return B.length <= U ? B : B.slice(0, U - 3) + "...";
    }
    const Ge = N(() => {
      let B = j.value.length;
      for (const U of D.value.values())
        U.action === "install" && B++;
      for (const U of I.value.values())
        U.action === "select" && B++;
      return B;
    }), Le = N(() => {
      let B = 0;
      for (const U of I.value.values())
        U.action === "download" && B++;
      for (const U of L.value)
        I.value.get(U.filename) || B++;
      return B;
    }), Se = N(() => {
      let B = 0;
      for (const U of D.value.values())
        U.action === "optional" && B++;
      for (const U of I.value.values())
        U.action === "optional" && B++;
      return B;
    }), Ie = N(() => {
      let B = x.value.size;
      for (const U of D.value.values())
        U.action === "skip" && B++;
      for (const U of I.value.values())
        U.action === "skip" && B++;
      for (const U of ne.value)
        D.value.has(U.node_type) || B++;
      for (const U of Y.value)
        I.value.has(U.filename) || B++;
      return B;
    }), _e = N(() => {
      const B = {};
      if (B.analysis = { resolved: 1, total: 1 }, z.value) {
        const U = ne.value.length, ce = ne.value.filter(
          (Ve) => D.value.has(Ve.node_type)
        ).length;
        B.nodes = { resolved: ce, total: U };
      }
      if (T.value) {
        const U = de.value.length, ce = de.value.filter(
          (Ve) => I.value.has(Ve.filename) || Ve.is_download_intent
        ).length;
        B.models = { resolved: ce, total: U };
      }
      if (B.review = { resolved: 1, total: 1 }, $.value === "applying") {
        const U = u.totalFiles || 1, ce = u.completedFiles.length;
        B.applying = { resolved: ce, total: U };
      }
      return B;
    });
    function ge(B) {
      $.value = B;
    }
    function Oe() {
      const B = K.value.findIndex((U) => U.id === $.value);
      B > 0 && ($.value = K.value[B - 1].id);
    }
    function Re() {
      const B = K.value.findIndex((U) => U.id === $.value);
      B < K.value.length - 1 && ($.value = K.value[B + 1].id);
    }
    async function O() {
      p.value = !0, S.value = null;
      try {
        w.value = await l(o.workflowName);
      } catch (B) {
        S.value = B instanceof Error ? B.message : "Failed to analyze workflow";
      } finally {
        p.value = !1;
      }
    }
    function F() {
      P.value.includes("analysis") || P.value.push("analysis"), z.value || R.value ? $.value = "nodes" : T.value ? $.value = "models" : $.value = "review";
    }
    function ae(B) {
      D.value.set(B, { action: "optional" });
    }
    function ie(B) {
      D.value.set(B, { action: "skip" });
    }
    function fe(B, U) {
      var Ve;
      const ce = ne.value.find((Qe) => Qe.node_type === B);
      (Ve = ce == null ? void 0 : ce.options) != null && Ve[U] && D.value.set(B, {
        action: "install",
        package_id: ce.options[U].package_id
      });
    }
    function me(B, U) {
      D.value.set(B, {
        action: "install",
        package_id: U
      });
    }
    function Ce(B) {
      D.value.delete(B);
    }
    function xe(B) {
      x.value.has(B) ? x.value.delete(B) : x.value.add(B);
    }
    function le(B) {
      I.value.set(B, { action: "optional" });
    }
    function ue(B) {
      I.value.set(B, { action: "skip" });
    }
    function Ne(B, U) {
      var Ve;
      const ce = Y.value.find((Qe) => Qe.filename === B);
      (Ve = ce == null ? void 0 : ce.options) != null && Ve[U] && I.value.set(B, {
        action: "select",
        selected_model: ce.options[U].model
      });
    }
    function Ee(B, U, ce) {
      I.value.set(B, {
        action: "download",
        url: U,
        target_path: ce
      });
    }
    function te(B) {
      I.value.delete(B);
    }
    async function q(B) {
      try {
        await g(B);
      } catch (U) {
        S.value = U instanceof Error ? U.message : "Failed to open file location";
      }
    }
    async function De() {
      var B;
      _.value = !0, S.value = null, m(), u.phase = "resolving", $.value = "applying";
      try {
        const U = await i(o.workflowName, D.value, I.value, x.value);
        U.models_to_download && U.models_to_download.length > 0 && d(o.workflowName, U.models_to_download);
        const ce = [
          ...U.nodes_to_install || [],
          ...j.value.map((Qe) => Qe.package.package_id)
        ];
        u.nodesToInstall = [...new Set(ce)], u.nodesToInstall.length > 0 && await c(o.workflowName), u.phase = "complete", await v();
        const Ve = u.installError || ((B = u.nodeInstallProgress) == null ? void 0 : B.completedNodes.some((Qe) => !Qe.success));
        !u.needsRestart && !Ve && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (U) {
        S.value = U instanceof Error ? U.message : "Failed to apply resolution", u.error = S.value, u.phase = "error";
      } finally {
        _.value = !1;
      }
    }
    function we() {
      n("refresh"), n("restart"), n("close");
    }
    async function ye() {
      var U;
      const B = ((U = u.nodeInstallProgress) == null ? void 0 : U.completedNodes.filter((ce) => !ce.success).map((ce) => ce.node_id)) || [];
      if (B.length !== 0) {
        u.phase = "installing", u.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: B.length
        }, u.nodesToInstall = B, u.nodesInstalled = [], u.installError = void 0;
        try {
          await c(o.workflowName), u.phase = "complete";
        } catch (ce) {
          u.error = ce instanceof Error ? ce.message : "Retry failed", u.phase = "error";
        }
      }
    }
    return et(O), (B, U) => (a(), M(pt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: p.value,
      error: S.value || void 0,
      "fixed-height": !0,
      onClose: U[1] || (U[1] = (ce) => n("close"))
    }, {
      body: h(() => [
        p.value && !w.value ? (a(), r("div", wy, [...U[2] || (U[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (a(), r("div", _y, [
          C(Ip, {
            steps: K.value,
            "current-step": $.value,
            "completed-steps": P.value,
            "step-stats": _e.value,
            onStepChange: ge
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          $.value === "analysis" ? (a(), r("div", by, [
            t("div", ky, [
              t("div", $y, [
                U[3] || (U[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", Cy, " Found " + f(w.value.stats.total_nodes) + " nodes and " + f(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", xy, [
                t("div", Sy, [
                  U[12] || (U[12] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", Iy, [
                    Z.value > 0 ? (a(), r("div", Ey, [
                      U[4] || (U[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", Ty, f(Z.value), 1),
                      U[5] || (U[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (a(), r("div", Py, [
                      U[6] || (U[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", Ry, f(w.value.stats.packages_needing_installation), 1),
                      U[7] || (U[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (a(), r("div", My, [
                      U[8] || (U[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", Dy, f(w.value.nodes.ambiguous.length), 1),
                      U[9] || (U[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (a(), r("div", Ly, [
                      U[10] || (U[10] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", Oy, f(w.value.nodes.unresolved.length), 1),
                      U[11] || (U[11] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", Ay, [
                  U[23] || (U[23] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", Ny, [
                    t("div", Uy, [
                      U[13] || (U[13] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", zy, f(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      U[14] || (U[14] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (a(), r("div", Fy, [
                      U[15] || (U[15] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", By, f(w.value.stats.download_intents), 1),
                      U[16] || (U[16] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    W.value ? (a(), r("div", Vy, [
                      U[17] || (U[17] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", Wy, f(J.value.length), 1),
                      U[18] || (U[18] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (a(), r("div", Gy, [
                      U[19] || (U[19] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", jy, f(w.value.models.ambiguous.length), 1),
                      U[20] || (U[20] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (a(), r("div", Hy, [
                      U[21] || (U[21] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", Ky, f(w.value.models.unresolved.length), 1),
                      U[22] || (U[22] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              V.value ? (a(), r("div", qy, [
                U[24] || (U[24] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Yy, f(ne.value.length + Y.value.length) + " items need your input", 1)
              ])) : R.value ? (a(), r("div", Jy, [
                U[25] || (U[25] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", Xy, f(w.value.stats.packages_needing_installation) + " package" + f(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + f(w.value.stats.nodes_needing_installation) + " node type" + f(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + f(E.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : E.value ? (a(), r("div", Qy, [
                U[26] || (U[26] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", Zy, f(w.value.stats.download_intents) + " model" + f(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : W.value ? (a(), r("div", e1, [
                U[27] || (U[27] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", t1, f(J.value.length) + " model" + f(J.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), r("div", s1, [...U[28] || (U[28] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              W.value ? (a(), r("div", o1, [
                U[31] || (U[31] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", n1, [
                  (a(!0), r(G, null, he(J.value, (ce) => {
                    var Ve, Qe;
                    return a(), r("div", {
                      key: ce.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", a1, f(ce.actual_category) + "/" + f((Ve = ce.model) == null ? void 0 : Ve.filename), 1),
                      U[30] || (U[30] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", l1, f((Qe = ce.expected_categories) == null ? void 0 : Qe[0]) + "/", 1),
                      ce.file_path ? (a(), M(Me, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (vt) => q(ce.file_path)
                      }, {
                        default: h(() => [...U[29] || (U[29] = [
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
          $.value === "nodes" ? (a(), M(qg, {
            key: 1,
            nodes: ne.value,
            "node-choices": D.value,
            "auto-resolved-packages": A.value,
            "skipped-packages": x.value,
            onMarkOptional: ae,
            onSkip: ie,
            onOptionSelected: fe,
            onManualEntry: me,
            onClearChoice: Ce,
            onPackageSkip: xe
          }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"])) : y("", !0),
          $.value === "models" ? (a(), M(Bh, {
            key: 2,
            models: de.value,
            "model-choices": I.value,
            onMarkOptional: le,
            onSkip: ue,
            onOptionSelected: Ne,
            onDownloadUrl: Ee,
            onClearChoice: te
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          $.value === "review" ? (a(), r("div", i1, [
            t("div", r1, [
              U[37] || (U[37] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", c1, [
                t("div", d1, [
                  t("span", u1, f(Ge.value), 1),
                  U[32] || (U[32] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", f1, [
                  t("span", m1, f(Le.value), 1),
                  U[33] || (U[33] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", v1, [
                  t("span", p1, f(Se.value), 1),
                  U[34] || (U[34] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", g1, [
                  t("span", h1, f(Ie.value), 1),
                  U[35] || (U[35] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              A.value.length > 0 ? (a(), r("div", y1, [
                t("h4", w1, "Node Packages (" + f(A.value.length) + ")", 1),
                t("div", _1, [
                  (a(!0), r(G, null, he(A.value, (ce) => (a(), r("div", {
                    key: ce.package_id,
                    class: "review-item"
                  }, [
                    t("code", b1, f(ce.package_id), 1),
                    t("div", k1, [
                      x.value.has(ce.package_id) ? (a(), r("span", C1, "Skipped")) : (a(), r("span", $1, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              ne.value.length > 0 ? (a(), r("div", x1, [
                t("h4", S1, "Node Choices (" + f(ne.value.length) + ")", 1),
                t("div", I1, [
                  (a(!0), r(G, null, he(ne.value, (ce) => {
                    var Ve, Qe, vt, lt;
                    return a(), r("div", {
                      key: ce.node_type,
                      class: "review-item"
                    }, [
                      t("code", E1, f(ce.node_type), 1),
                      t("div", T1, [
                        D.value.has(ce.node_type) ? (a(), r(G, { key: 0 }, [
                          ((Ve = D.value.get(ce.node_type)) == null ? void 0 : Ve.action) === "install" ? (a(), r("span", P1, f((Qe = D.value.get(ce.node_type)) == null ? void 0 : Qe.package_id), 1)) : ((vt = D.value.get(ce.node_type)) == null ? void 0 : vt.action) === "optional" ? (a(), r("span", R1, " Optional ")) : ((lt = D.value.get(ce.node_type)) == null ? void 0 : lt.action) === "skip" ? (a(), r("span", M1, " Skip ")) : y("", !0)
                        ], 64)) : (a(), r("span", D1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              $e.value.length > 0 ? (a(), r("div", L1, [
                t("h4", O1, "Models to Download (" + f($e.value.length) + ")", 1),
                t("div", A1, [
                  (a(!0), r(G, null, he($e.value, (ce) => (a(), r("div", {
                    key: ce.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", N1, [
                      t("code", U1, f(ce.filename), 1),
                      t("div", z1, [
                        t("span", F1, "→ " + f(ce.target_path), 1),
                        ce.url ? (a(), r("span", {
                          key: 0,
                          class: "download-url",
                          title: ce.url
                        }, f(Pe(ce.url)), 9, B1)) : y("", !0)
                      ])
                    ]),
                    U[36] || (U[36] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              de.value.length > 0 ? (a(), r("div", V1, [
                t("h4", W1, "Models (" + f(de.value.length) + ")", 1),
                t("div", G1, [
                  (a(!0), r(G, null, he(de.value, (ce) => {
                    var Ve, Qe, vt, lt, ut, Mt, zt;
                    return a(), r("div", {
                      key: ce.filename,
                      class: "review-item"
                    }, [
                      t("code", j1, f(ce.filename), 1),
                      t("div", H1, [
                        I.value.has(ce.filename) ? (a(), r(G, { key: 0 }, [
                          ((Ve = I.value.get(ce.filename)) == null ? void 0 : Ve.action) === "select" ? (a(), r("span", K1, f((vt = (Qe = I.value.get(ce.filename)) == null ? void 0 : Qe.selected_model) == null ? void 0 : vt.filename), 1)) : ((lt = I.value.get(ce.filename)) == null ? void 0 : lt.action) === "download" ? (a(), r("span", q1, " Download ")) : ((ut = I.value.get(ce.filename)) == null ? void 0 : ut.action) === "optional" ? (a(), r("span", Y1, " Optional ")) : ((Mt = I.value.get(ce.filename)) == null ? void 0 : Mt.action) === "skip" ? (a(), r("span", J1, " Skip ")) : ((zt = I.value.get(ce.filename)) == null ? void 0 : zt.action) === "cancel_download" ? (a(), r("span", X1, " Cancel Download ")) : y("", !0)
                        ], 64)) : ce.is_download_intent ? (a(), r("span", Q1, " Pending Download ")) : (a(), r("span", Z1, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ee.value.length === 0 && ne.value.length === 0 && de.value.length === 0 ? (a(), r("div", e0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          $.value === "applying" ? (a(), M(yy, {
            key: 4,
            progress: We(u),
            onRestart: we,
            onRetryFailed: ye
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        $.value !== "analysis" && $.value !== "applying" ? (a(), M(Me, {
          key: 0,
          variant: "secondary",
          disabled: _.value,
          onClick: Oe
        }, {
          default: h(() => [...U[38] || (U[38] = [
            b(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        U[41] || (U[41] = t("div", { class: "footer-spacer" }, null, -1)),
        $.value !== "applying" || We(u).phase === "complete" || We(u).phase === "error" ? (a(), M(Me, {
          key: 1,
          variant: "secondary",
          onClick: U[0] || (U[0] = (ce) => n("close"))
        }, {
          default: h(() => [
            b(f(We(u).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "analysis" ? (a(), M(Me, {
          key: 2,
          variant: "primary",
          disabled: p.value,
          onClick: F
        }, {
          default: h(() => [
            b(f(se.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        $.value === "nodes" ? (a(), M(Me, {
          key: 3,
          variant: "primary",
          onClick: Re
        }, {
          default: h(() => [
            b(f(T.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        $.value === "models" ? (a(), M(Me, {
          key: 4,
          variant: "primary",
          onClick: Re
        }, {
          default: h(() => [...U[39] || (U[39] = [
            b(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        $.value === "review" ? (a(), M(Me, {
          key: 5,
          variant: "primary",
          disabled: _.value,
          loading: _.value,
          onClick: De
        }, {
          default: h(() => [...U[40] || (U[40] = [
            b(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), s0 = /* @__PURE__ */ pe(t0, [["__scopeId", "data-v-40d8d5a8"]]), o0 = { class: "search-input-wrapper" }, n0 = ["value", "placeholder"], a0 = /* @__PURE__ */ ve({
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
    function c(u) {
      const m = u.target.value;
      o.debounce > 0 ? (clearTimeout(i), i = window.setTimeout(() => {
        n("update:modelValue", m);
      }, o.debounce)) : n("update:modelValue", m);
    }
    function d() {
      var u;
      n("update:modelValue", ""), n("clear"), (u = l.value) == null || u.focus();
    }
    return et(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (u, m) => (a(), r("div", o0, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: Zt(d, ["escape"])
      }, null, 40, n0),
      e.clearable && e.modelValue ? (a(), r("button", {
        key: 0,
        class: "clear-button",
        onClick: d,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), l0 = /* @__PURE__ */ pe(a0, [["__scopeId", "data-v-266f857a"]]), i0 = { class: "search-bar" }, r0 = /* @__PURE__ */ ve({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (a(), r("div", i0, [
      C(l0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => s.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), ko = /* @__PURE__ */ pe(r0, [["__scopeId", "data-v-3d51bbfd"]]), c0 = { class: "section-group" }, d0 = {
  key: 0,
  class: "section-content"
}, u0 = /* @__PURE__ */ ve({
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
    return (c, d) => (a(), r("section", c0, [
      C(At, {
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
      !e.collapsible || l.value ? (a(), r("div", d0, [
        qe(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), it = /* @__PURE__ */ pe(u0, [["__scopeId", "data-v-c48e33ed"]]), f0 = { class: "item-header" }, m0 = {
  key: 0,
  class: "item-icon"
}, v0 = { class: "item-info" }, p0 = {
  key: 0,
  class: "item-title"
}, g0 = {
  key: 1,
  class: "item-subtitle"
}, h0 = {
  key: 0,
  class: "item-details"
}, y0 = {
  key: 1,
  class: "item-actions"
}, w0 = /* @__PURE__ */ ve({
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
      class: Te(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: i[0] || (i[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", f0, [
        l.$slots.icon ? (a(), r("span", m0, [
          qe(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", v0, [
          l.$slots.title ? (a(), r("div", p0, [
            qe(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), r("div", g0, [
            qe(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), r("div", h0, [
        qe(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), r("div", y0, [
        qe(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Tt = /* @__PURE__ */ pe(w0, [["__scopeId", "data-v-cc435e0e"]]), _0 = { class: "loading-state" }, b0 = { class: "loading-message" }, k0 = /* @__PURE__ */ ve({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (a(), r("div", _0, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", b0, f(e.message), 1)
    ]));
  }
}), Ts = /* @__PURE__ */ pe(k0, [["__scopeId", "data-v-ad8436c9"]]), $0 = { class: "error-state" }, C0 = { class: "error-message" }, x0 = /* @__PURE__ */ ve({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (a(), r("div", $0, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", C0, f(e.message), 1),
      e.retry ? (a(), M(re, {
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
}), Ps = /* @__PURE__ */ pe(x0, [["__scopeId", "data-v-5397be48"]]), S0 = /* @__PURE__ */ ve({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getWorkflows: l } = at(), i = k([]), c = k(!1), d = k(null), u = k(""), m = k(!0), v = k(!1), g = k(!1), w = k(!1), p = k(null), _ = N(
      () => i.value.filter((A) => A.status === "broken")
    ), S = N(
      () => i.value.filter((A) => A.status === "new")
    ), $ = N(
      () => i.value.filter((A) => A.status === "modified")
    ), P = N(
      () => i.value.filter((A) => A.status === "synced")
    ), D = N(() => {
      if (!u.value.trim()) return i.value;
      const A = u.value.toLowerCase();
      return i.value.filter((j) => j.name.toLowerCase().includes(A));
    }), I = N(
      () => _.value.filter(
        (A) => !u.value.trim() || A.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), x = N(
      () => S.value.filter(
        (A) => !u.value.trim() || A.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), K = N(
      () => $.value.filter(
        (A) => !u.value.trim() || A.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), V = N(
      () => P.value.filter(
        (A) => !u.value.trim() || A.name.toLowerCase().includes(u.value.toLowerCase())
      )
    ), z = N(
      () => v.value ? V.value : V.value.slice(0, 5)
    );
    async function T(A = !1) {
      c.value = !0, d.value = null;
      try {
        i.value = await l(A);
      } catch (j) {
        d.value = j instanceof Error ? j.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: T });
    function E(A) {
      p.value = A, g.value = !0;
    }
    function R(A) {
      p.value = A, w.value = !0;
    }
    function Z() {
      n("refresh");
    }
    async function J() {
      w.value = !1, await T(!0);
    }
    async function W() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function se(A) {
      const j = [];
      return A.missing_nodes > 0 && j.push(`${A.missing_nodes} missing node${A.missing_nodes > 1 ? "s" : ""}`), A.missing_models > 0 && j.push(`${A.missing_models} missing model${A.missing_models > 1 ? "s" : ""}`), A.models_with_category_mismatch && A.models_with_category_mismatch > 0 && j.push(`${A.models_with_category_mismatch} model${A.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), A.pending_downloads && A.pending_downloads > 0 && j.push(`${A.pending_downloads} pending download${A.pending_downloads > 1 ? "s" : ""}`), j.length > 0 ? j.join(", ") : "Has issues";
    }
    function ee(A) {
      const j = A.sync_state === "new" ? "New" : A.sync_state === "modified" ? "Modified" : A.sync_state === "synced" ? "Synced" : A.sync_state;
      return A.has_path_sync_issues && A.models_needing_path_sync && A.models_needing_path_sync > 0 ? `${A.models_needing_path_sync} model path${A.models_needing_path_sync > 1 ? "s" : ""} need${A.models_needing_path_sync === 1 ? "s" : ""} sync` : j || "Unknown";
    }
    return et(T), (A, j) => (a(), r(G, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          C(ko, {
            modelValue: u.value,
            "onUpdate:modelValue": j[0] || (j[0] = (L) => u.value = L),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), M(Ts, {
            key: 0,
            message: "Loading workflows..."
          })) : d.value ? (a(), M(Ps, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            I.value.length ? (a(), M(it, {
              key: 0,
              title: "BROKEN",
              count: I.value.length
            }, {
              default: h(() => [
                (a(!0), r(G, null, he(I.value, (L) => (a(), M(Tt, {
                  key: L.name,
                  status: "broken"
                }, {
                  icon: h(() => [...j[7] || (j[7] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(L.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(se(L)), 1)
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ne) => R(L.name)
                    }, {
                      default: h(() => [...j[8] || (j[8] = [
                        b(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => E(L.name)
                    }, {
                      default: h(() => [...j[9] || (j[9] = [
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
            x.value.length ? (a(), M(it, {
              key: 1,
              title: "NEW",
              count: x.value.length
            }, {
              default: h(() => [
                (a(!0), r(G, null, he(x.value, (L) => (a(), M(Tt, {
                  key: L.name,
                  status: L.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    b(f(L.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    b(f(L.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(ee(L)), 1)
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => E(L.name)
                    }, {
                      default: h(() => [...j[10] || (j[10] = [
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
            K.value.length ? (a(), M(it, {
              key: 2,
              title: "MODIFIED",
              count: K.value.length
            }, {
              default: h(() => [
                (a(!0), r(G, null, he(K.value, (L) => (a(), M(Tt, {
                  key: L.name,
                  status: L.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...j[11] || (j[11] = [
                    b("⚡", -1)
                  ])]),
                  title: h(() => [
                    b(f(L.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(ee(L)), 1)
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => E(L.name)
                    }, {
                      default: h(() => [...j[12] || (j[12] = [
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
            V.value.length ? (a(), M(it, {
              key: 3,
              title: "SYNCED",
              count: V.value.length,
              collapsible: !0,
              "initially-expanded": m.value,
              onToggle: j[2] || (j[2] = (L) => m.value = L)
            }, {
              default: h(() => [
                (a(!0), r(G, null, he(z.value, (L) => (a(), M(Tt, {
                  key: L.name,
                  status: L.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    b(f(L.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    b(f(L.name), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(ee(L)), 1)
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => E(L.name)
                    }, {
                      default: h(() => [...j[13] || (j[13] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && V.value.length > 5 ? (a(), M(re, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: j[1] || (j[1] = (L) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    b(" View all " + f(V.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            D.value.length ? y("", !0) : (a(), M(ns, {
              key: 4,
              icon: "📭",
              message: u.value ? `No workflows match '${u.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && p.value ? (a(), M(pp, {
        key: 0,
        "workflow-name": p.value,
        onClose: j[3] || (j[3] = (L) => g.value = !1),
        onResolve: j[4] || (j[4] = (L) => R(p.value)),
        onRefresh: j[5] || (j[5] = (L) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && p.value ? (a(), M(s0, {
        key: 1,
        "workflow-name": p.value,
        onClose: J,
        onInstall: Z,
        onRefresh: j[6] || (j[6] = (L) => n("refresh")),
        onRestart: W
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), I0 = /* @__PURE__ */ pe(S0, [["__scopeId", "data-v-fa3f076e"]]), E0 = /* @__PURE__ */ ve({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Te(["summary-bar", e.variant])
    }, [
      qe(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), on = /* @__PURE__ */ pe(E0, [["__scopeId", "data-v-ccb7816e"]]), T0 = {
  key: 0,
  class: "model-details"
}, P0 = { class: "detail-section" }, R0 = { class: "detail-row" }, M0 = { class: "detail-value mono" }, D0 = { class: "detail-row" }, L0 = { class: "detail-value mono" }, O0 = { class: "detail-row" }, A0 = { class: "detail-value mono" }, N0 = { class: "detail-row" }, U0 = { class: "detail-value" }, z0 = { class: "detail-row" }, F0 = { class: "detail-value" }, B0 = { class: "detail-row" }, V0 = { class: "detail-value" }, W0 = { class: "detail-section" }, G0 = { class: "section-header" }, j0 = {
  key: 0,
  class: "locations-list"
}, H0 = { class: "location-path mono" }, K0 = {
  key: 0,
  class: "location-modified"
}, q0 = ["onClick"], Y0 = {
  key: 1,
  class: "empty-state"
}, J0 = { class: "detail-section" }, X0 = { class: "section-header" }, Q0 = {
  key: 0,
  class: "sources-list"
}, Z0 = { class: "source-type" }, ew = ["href"], tw = ["disabled", "onClick"], sw = {
  key: 1,
  class: "empty-state"
}, ow = { class: "add-source-form" }, nw = ["disabled"], aw = {
  key: 2,
  class: "source-error"
}, lw = {
  key: 3,
  class: "source-success"
}, iw = /* @__PURE__ */ ve({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: n, addModelSource: l, removeModelSource: i, openFileLocation: c } = at(), d = k(null), u = k(!0), m = k(null), v = k(""), g = k(!1), w = k(null), p = k(null), _ = k(null), S = k(null);
    let $ = null;
    function P(T, E = "success", R = 2e3) {
      $ && clearTimeout($), S.value = { message: T, type: E }, $ = setTimeout(() => {
        S.value = null;
      }, R);
    }
    function D(T) {
      if (!T) return "Unknown";
      const E = 1024 * 1024 * 1024, R = 1024 * 1024;
      return T >= E ? `${(T / E).toFixed(1)} GB` : T >= R ? `${(T / R).toFixed(0)} MB` : `${(T / 1024).toFixed(0)} KB`;
    }
    function I(T) {
      navigator.clipboard.writeText(T), P("Copied to clipboard!");
    }
    async function x(T) {
      try {
        await c(T), P("Opening file location...");
      } catch {
        P("Failed to open location", "error");
      }
    }
    async function K() {
      if (!(!v.value.trim() || !d.value)) {
        g.value = !0, p.value = null, _.value = null;
        try {
          await l(d.value.hash, v.value.trim()), _.value = "Source added successfully!", v.value = "", await z();
        } catch (T) {
          p.value = T instanceof Error ? T.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function V(T) {
      if (d.value) {
        w.value = T, p.value = null, _.value = null;
        try {
          await i(d.value.hash, T), P("Source removed"), await z();
        } catch (E) {
          p.value = E instanceof Error ? E.message : "Failed to remove source";
        } finally {
          w.value = null;
        }
      }
    }
    async function z() {
      u.value = !0, m.value = null;
      try {
        d.value = await n(o.identifier);
      } catch (T) {
        m.value = T instanceof Error ? T.message : "Failed to load model details";
      } finally {
        u.value = !1;
      }
    }
    return et(z), (T, E) => {
      var R;
      return a(), r(G, null, [
        C(pt, {
          title: `Model Details: ${((R = d.value) == null ? void 0 : R.filename) || "Loading..."}`,
          size: "lg",
          loading: u.value,
          error: m.value,
          onClose: E[5] || (E[5] = (Z) => T.$emit("close"))
        }, {
          body: h(() => {
            var Z, J, W, se;
            return [
              d.value ? (a(), r("div", T0, [
                t("section", P0, [
                  t("div", R0, [
                    E[6] || (E[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", M0, f(d.value.hash || "Not computed"), 1),
                    d.value.hash ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[0] || (E[0] = (ee) => I(d.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", D0, [
                    E[7] || (E[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", L0, f(d.value.blake3 || "Not computed"), 1),
                    d.value.blake3 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[1] || (E[1] = (ee) => I(d.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", O0, [
                    E[8] || (E[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", A0, f(d.value.sha256 || "Not computed"), 1),
                    d.value.sha256 ? (a(), r("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: E[2] || (E[2] = (ee) => I(d.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", N0, [
                    E[9] || (E[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", U0, f(D(d.value.size)), 1)
                  ]),
                  t("div", z0, [
                    E[10] || (E[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", F0, f(d.value.category), 1)
                  ]),
                  t("div", B0, [
                    E[11] || (E[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", V0, f(d.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", W0, [
                  t("h4", G0, "Locations (" + f(((Z = d.value.locations) == null ? void 0 : Z.length) || 0) + ")", 1),
                  (J = d.value.locations) != null && J.length ? (a(), r("div", j0, [
                    (a(!0), r(G, null, he(d.value.locations, (ee, A) => (a(), r("div", {
                      key: A,
                      class: "location-item"
                    }, [
                      t("span", H0, f(ee.path), 1),
                      ee.modified ? (a(), r("span", K0, "Modified: " + f(ee.modified), 1)) : y("", !0),
                      ee.path ? (a(), r("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (j) => x(ee.path)
                      }, " Open File Location ", 8, q0)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), r("div", Y0, "No locations found"))
                ]),
                t("section", J0, [
                  t("h4", X0, "Download Sources (" + f(((W = d.value.sources) == null ? void 0 : W.length) || 0) + ")", 1),
                  (se = d.value.sources) != null && se.length ? (a(), r("div", Q0, [
                    (a(!0), r(G, null, he(d.value.sources, (ee, A) => (a(), r("div", {
                      key: A,
                      class: "source-item"
                    }, [
                      t("span", Z0, f(ee.type) + ":", 1),
                      t("a", {
                        href: ee.url,
                        target: "_blank",
                        class: "source-url"
                      }, f(ee.url), 9, ew),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: w.value === ee.url,
                        onClick: (j) => V(ee.url)
                      }, f(w.value === ee.url ? "..." : "×"), 9, tw)
                    ]))), 128))
                  ])) : (a(), r("div", sw, " No download sources configured ")),
                  t("div", ow, [
                    Ye(t("input", {
                      "onUpdate:modelValue": E[3] || (E[3] = (ee) => v.value = ee),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Ut, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || g.value,
                      onClick: K
                    }, f(g.value ? "Adding..." : "Add Source"), 9, nw)
                  ]),
                  p.value ? (a(), r("p", aw, f(p.value), 1)) : y("", !0),
                  _.value ? (a(), r("p", lw, f(_.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            t("button", {
              class: "btn-secondary",
              onClick: E[4] || (E[4] = (Z) => T.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (a(), M(wt, { to: "body" }, [
          S.value ? (a(), r("div", {
            key: 0,
            class: Te(["toast", S.value.type])
          }, f(S.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), Xa = /* @__PURE__ */ pe(iw, [["__scopeId", "data-v-f15cbb56"]]), rw = /* @__PURE__ */ ve({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: n, getStatus: l } = at(), i = k([]), c = k([]), d = k("production"), u = k(!1), m = k(null), v = k(""), g = k(!1), w = k(null);
    function p() {
      g.value = !1, o("navigate", "model-index");
    }
    const _ = N(
      () => i.value.reduce((z, T) => z + (T.size || 0), 0)
    ), S = N(() => {
      if (!v.value.trim()) return i.value;
      const z = v.value.toLowerCase();
      return i.value.filter((T) => T.filename.toLowerCase().includes(z));
    }), $ = N(() => {
      if (!v.value.trim()) return c.value;
      const z = v.value.toLowerCase();
      return c.value.filter((T) => T.filename.toLowerCase().includes(z));
    }), P = N(() => {
      const z = {};
      for (const E of S.value) {
        const R = E.type || "other";
        z[R] || (z[R] = []), z[R].push(E);
      }
      const T = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(z).sort(([E], [R]) => {
        const Z = T.indexOf(E), J = T.indexOf(R);
        return Z >= 0 && J >= 0 ? Z - J : Z >= 0 ? -1 : J >= 0 ? 1 : E.localeCompare(R);
      }).map(([E, R]) => ({ type: E, models: R }));
    });
    function D(z) {
      if (!z) return "Unknown";
      const T = z / (1024 * 1024);
      return T >= 1024 ? `${(T / 1024).toFixed(1)} GB` : `${T.toFixed(0)} MB`;
    }
    function I(z) {
      w.value = z.hash || z.filename;
    }
    function x(z) {
      o("navigate", "model-index");
    }
    function K(z) {
      alert(`Download functionality not yet implemented for ${z}`);
    }
    async function V() {
      u.value = !0, m.value = null;
      try {
        const z = await n();
        i.value = z, c.value = [];
        const T = await l();
        d.value = T.environment || "production";
      } catch (z) {
        m.value = z instanceof Error ? z.message : "Failed to load models";
      } finally {
        u.value = !1;
      }
    }
    return et(V), (z, T) => (a(), r(G, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (E) => g.value = !0)
          })
        ]),
        search: h(() => [
          C(ko, {
            modelValue: v.value,
            "onUpdate:modelValue": T[1] || (T[1] = (E) => v.value = E),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (a(), M(Ts, {
            key: 0,
            message: "Loading environment models..."
          })) : m.value ? (a(), M(Ps, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: V
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            i.value.length ? (a(), M(on, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(i.value.length) + " models • " + f(D(_.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(G, null, he(P.value, (E) => (a(), M(it, {
              key: E.type,
              title: E.type.toUpperCase(),
              count: E.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(G, null, he(E.models, (R) => (a(), M(Tt, {
                  key: R.hash || R.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...T[4] || (T[4] = [
                    b("📦", -1)
                  ])]),
                  title: h(() => [
                    b(f(R.filename), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(D(R.size)), 1)
                  ]),
                  details: h(() => [
                    C(ft, {
                      label: "Used by:",
                      value: (R.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    C(ft, {
                      label: "Path:",
                      value: R.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Z) => I(R)
                    }, {
                      default: h(() => [...T[5] || (T[5] = [
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
            $.value.length ? (a(), M(it, {
              key: 1,
              title: "MISSING",
              count: $.value.length
            }, {
              default: h(() => [
                (a(!0), r(G, null, he($.value, (E) => (a(), M(Tt, {
                  key: E.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...T[6] || (T[6] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(E.filename), 1)
                  ]),
                  subtitle: h(() => [...T[7] || (T[7] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var R;
                    return [
                      C(ft, {
                        label: "Required by:",
                        value: ((R = E.workflow_names) == null ? void 0 : R.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (R) => K(E.filename)
                    }, {
                      default: h(() => [...T[8] || (T[8] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (R) => x(E.filename)
                    }, {
                      default: h(() => [...T[9] || (T[9] = [
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
            !S.value.length && !$.value.length ? (a(), M(ns, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      C(as, {
        show: g.value,
        title: "About Environment Models",
        onClose: T[2] || (T[2] = (E) => g.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            T[10] || (T[10] = b(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + f(d.value) + '"', 1),
            T[11] || (T[11] = b(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          C(re, {
            variant: "primary",
            onClick: p
          }, {
            default: h(() => [...T[12] || (T[12] = [
              b(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), M(Xa, {
        key: 0,
        identifier: w.value,
        onClose: T[3] || (T[3] = (E) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), cw = /* @__PURE__ */ pe(rw, [["__scopeId", "data-v-cb4f12b3"]]), dw = {
  key: 0,
  class: "indexing-progress"
}, uw = { class: "progress-info" }, fw = { class: "progress-label" }, mw = { class: "progress-count" }, vw = { class: "progress-bar" }, pw = { class: "modal-content" }, gw = { class: "modal-header" }, hw = { class: "modal-body" }, yw = { class: "input-group" }, ww = { class: "current-path" }, _w = { class: "input-group" }, bw = { class: "modal-footer" }, kw = { class: "modal-content" }, $w = { class: "modal-header" }, Cw = { class: "modal-body" }, xw = { class: "input-group" }, Sw = { class: "input-group" }, Iw = { class: "modal-footer" }, Ew = /* @__PURE__ */ ve({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: i
    } = at(), { addToQueue: c } = bo(), d = s, u = k([]), m = k(!1), v = k(!1), g = k(null), w = k(""), p = k(!1), _ = k(null), S = k(!1), $ = k(null), P = k(""), D = k(!1), I = k(!1), x = k(""), K = k(""), V = k(null), z = N(
      () => u.value.reduce((j, L) => j + (L.size || 0), 0)
    ), T = N(() => {
      if (!w.value.trim()) return u.value;
      const j = w.value.toLowerCase();
      return u.value.filter((L) => {
        const ne = L, Y = L.sha256 || ne.sha256_hash || "";
        return L.filename.toLowerCase().includes(j) || Y.toLowerCase().includes(j);
      });
    }), E = N(() => {
      const j = {};
      for (const ne of T.value) {
        const Y = ne.type || "other";
        j[Y] || (j[Y] = []), j[Y].push(ne);
      }
      const L = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(j).sort(([ne], [Y]) => {
        const de = L.indexOf(ne), $e = L.indexOf(Y);
        return de >= 0 && $e >= 0 ? de - $e : de >= 0 ? -1 : $e >= 0 ? 1 : ne.localeCompare(Y);
      }).map(([ne, Y]) => ({ type: ne, models: Y }));
    });
    function R(j) {
      if (!j) return "Unknown";
      const L = 1024 * 1024 * 1024, ne = 1024 * 1024;
      return j >= L ? `${(j / L).toFixed(1)} GB` : j >= ne ? `${(j / ne).toFixed(0)} MB` : `${(j / 1024).toFixed(0)} KB`;
    }
    function Z(j) {
      _.value = j.hash || j.filename;
    }
    async function J() {
      v.value = !0, g.value = null;
      try {
        const j = await n();
        await ee(), j.changes > 0 && console.log(`Scan complete: ${j.changes} changes detected`);
      } catch (j) {
        g.value = j instanceof Error ? j.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function W() {
      if (P.value.trim()) {
        D.value = !0, g.value = null;
        try {
          const j = await i(P.value.trim());
          $.value = j.path, S.value = !1, P.value = "", await ee(), console.log(`Directory changed: ${j.models_indexed} models indexed`), d("refresh");
        } catch (j) {
          g.value = j instanceof Error ? j.message : "Failed to change directory";
        } finally {
          D.value = !1;
        }
      }
    }
    function se() {
      if (!x.value.trim() || !K.value.trim()) return;
      const j = K.value.split("/").pop() || "model.safetensors";
      c([{
        workflow: "__manual__",
        filename: j,
        url: x.value.trim(),
        targetPath: K.value.trim()
      }]), x.value = "", K.value = "", I.value = !1;
    }
    async function ee() {
      m.value = !0, g.value = null;
      try {
        u.value = await o();
      } catch (j) {
        g.value = j instanceof Error ? j.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function A() {
      try {
        const j = await l();
        $.value = j.path;
      } catch {
      }
    }
    return et(() => {
      ee(), A();
    }), (j, L) => (a(), r(G, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: L[2] || (L[2] = (ne) => p.value = !0)
          }, {
            actions: h(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: J
              }, {
                default: h(() => [
                  b(f(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: L[0] || (L[0] = (ne) => S.value = !0)
              }, {
                default: h(() => [...L[15] || (L[15] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: L[1] || (L[1] = (ne) => I.value = !0)
              }, {
                default: h(() => [...L[16] || (L[16] = [
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
          V.value ? (a(), r("div", dw, [
            t("div", uw, [
              t("span", fw, f(V.value.message), 1),
              t("span", mw, f(V.value.current) + "/" + f(V.value.total), 1)
            ]),
            t("div", vw, [
              t("div", {
                class: "progress-fill",
                style: Ht({ width: `${V.value.current / V.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          C(ko, {
            modelValue: w.value,
            "onUpdate:modelValue": L[3] || (L[3] = (ne) => w.value = ne),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value || V.value ? (a(), M(Ts, {
            key: 0,
            message: V.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : g.value ? (a(), M(Ps, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: ee
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            u.value.length ? (a(), M(on, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(u.value.length) + " models • " + f(R(z.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), r(G, null, he(E.value, (ne) => (a(), M(it, {
              key: ne.type,
              title: ne.type.toUpperCase(),
              count: ne.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (a(!0), r(G, null, he(ne.models, (Y) => (a(), M(Tt, {
                  key: Y.sha256 || Y.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...L[17] || (L[17] = [
                    b("📦", -1)
                  ])]),
                  title: h(() => [
                    b(f(Y.filename), 1)
                  ]),
                  subtitle: h(() => [
                    b(f(R(Y.size)), 1)
                  ]),
                  details: h(() => [
                    C(ft, {
                      label: "Hash:",
                      value: Y.hash ? Y.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (de) => Z(Y)
                    }, {
                      default: h(() => [...L[18] || (L[18] = [
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
            T.value.length ? y("", !0) : (a(), M(ns, {
              key: 1,
              icon: "📭",
              message: w.value ? `No models match '${w.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      C(as, {
        show: p.value,
        title: "About Workspace Model Index",
        onClose: L[4] || (L[4] = (ne) => p.value = !1)
      }, {
        content: h(() => [...L[19] || (L[19] = [
          t("p", null, [
            b(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            b(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      _.value ? (a(), M(Xa, {
        key: 0,
        identifier: _.value,
        onClose: L[5] || (L[5] = (ne) => _.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (a(), M(wt, { to: "body" }, [
        S.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: L[9] || (L[9] = rt((ne) => S.value = !1, ["self"]))
        }, [
          t("div", pw, [
            t("div", gw, [
              L[20] || (L[20] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: L[6] || (L[6] = (ne) => S.value = !1)
              }, "✕")
            ]),
            t("div", hw, [
              t("div", yw, [
                L[21] || (L[21] = t("label", null, "Current Directory", -1)),
                t("code", ww, f($.value || "Not set"), 1)
              ]),
              t("div", _w, [
                L[22] || (L[22] = t("label", null, "New Directory Path", -1)),
                C(es, {
                  modelValue: P.value,
                  "onUpdate:modelValue": L[7] || (L[7] = (ne) => P.value = ne),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              L[23] || (L[23] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", bw, [
              C(Me, {
                variant: "secondary",
                onClick: L[8] || (L[8] = (ne) => S.value = !1)
              }, {
                default: h(() => [...L[24] || (L[24] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Me, {
                variant: "primary",
                disabled: !P.value.trim() || D.value,
                loading: D.value,
                onClick: W
              }, {
                default: h(() => [
                  b(f(D.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      (a(), M(wt, { to: "body" }, [
        I.value ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: L[14] || (L[14] = rt((ne) => I.value = !1, ["self"]))
        }, [
          t("div", kw, [
            t("div", $w, [
              L[25] || (L[25] = t("h3", null, "Download New Model", -1)),
              t("button", {
                class: "modal-close",
                onClick: L[10] || (L[10] = (ne) => I.value = !1)
              }, "✕")
            ]),
            t("div", Cw, [
              t("div", xw, [
                L[26] || (L[26] = t("label", null, "Download URL", -1)),
                C(es, {
                  modelValue: x.value,
                  "onUpdate:modelValue": L[11] || (L[11] = (ne) => x.value = ne),
                  placeholder: "https://civitai.com/api/download/models/..."
                }, null, 8, ["modelValue"])
              ]),
              t("div", Sw, [
                L[27] || (L[27] = t("label", null, "Target Path (relative to models directory)", -1)),
                C(es, {
                  modelValue: K.value,
                  "onUpdate:modelValue": L[12] || (L[12] = (ne) => K.value = ne),
                  placeholder: "e.g. checkpoints/model.safetensors"
                }, null, 8, ["modelValue"])
              ]),
              L[28] || (L[28] = t("p", { class: "modal-note" }, " The model will be queued for download in the background. You can monitor progress in the download queue. ", -1))
            ]),
            t("div", Iw, [
              C(Me, {
                variant: "secondary",
                onClick: L[13] || (L[13] = (ne) => I.value = !1)
              }, {
                default: h(() => [...L[29] || (L[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Me, {
                variant: "primary",
                disabled: !x.value.trim() || !K.value.trim(),
                onClick: se
              }, {
                default: h(() => [...L[30] || (L[30] = [
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
}), Tw = /* @__PURE__ */ pe(Ew, [["__scopeId", "data-v-73b78d84"]]), Pw = { class: "node-details" }, Rw = { class: "status-row" }, Mw = {
  key: 0,
  class: "detail-row"
}, Dw = { class: "value" }, Lw = { class: "detail-row" }, Ow = { class: "value" }, Aw = {
  key: 1,
  class: "detail-row"
}, Nw = { class: "value mono" }, Uw = {
  key: 2,
  class: "detail-row"
}, zw = ["href"], Fw = {
  key: 3,
  class: "detail-row"
}, Bw = { class: "value mono small" }, Vw = { class: "detail-row" }, Ww = {
  key: 0,
  class: "value"
}, Gw = {
  key: 1,
  class: "workflow-list"
}, jw = /* @__PURE__ */ ve({
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
    return (d, u) => (a(), M(pt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: u[1] || (u[1] = (m) => n("close"))
    }, {
      body: h(() => [
        t("div", Pw, [
          t("div", Rw, [
            u[2] || (u[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Te(["status-badge", l.value])
            }, f(i.value), 3)
          ]),
          e.node.version ? (a(), r("div", Mw, [
            u[3] || (u[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", Dw, f(e.node.source === "development" ? "" : "v") + f(e.node.version), 1)
          ])) : y("", !0),
          t("div", Lw, [
            u[4] || (u[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", Ow, f(c.value), 1)
          ]),
          e.node.registry_id ? (a(), r("div", Aw, [
            u[5] || (u[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", Nw, f(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), r("div", Uw, [
            u[7] || (u[7] = t("span", { class: "label" }, "Repository:", -1)),
            t("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              b(f(e.node.repository) + " ", 1),
              u[6] || (u[6] = t("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                t("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, zw)
          ])) : y("", !0),
          e.node.download_url ? (a(), r("div", Fw, [
            u[8] || (u[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", Bw, f(e.node.download_url), 1)
          ])) : y("", !0),
          u[10] || (u[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", Vw, [
            u[9] || (u[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), r("span", Ww, " Not used in any workflows ")) : (a(), r("div", Gw, [
              (a(!0), r(G, null, he(e.node.used_in_workflows, (m) => (a(), r("span", {
                key: m,
                class: "workflow-tag"
              }, f(m), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        C(Me, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (m) => n("close"))
        }, {
          default: h(() => [...u[11] || (u[11] = [
            b(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Hw = /* @__PURE__ */ pe(jw, [["__scopeId", "data-v-b342f626"]]), Kw = { class: "dialog-message" }, qw = {
  key: 0,
  class: "dialog-details"
}, Yw = {
  key: 1,
  class: "dialog-warning"
}, Jw = /* @__PURE__ */ ve({
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
    return (s, o) => (a(), M(pt, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => s.$emit("cancel"))
    }, {
      body: h(() => [
        t("p", Kw, f(e.message), 1),
        e.details && e.details.length ? (a(), r("div", qw, [
          (a(!0), r(G, null, he(e.details, (n, l) => (a(), r("div", {
            key: l,
            class: "detail-item"
          }, " • " + f(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), r("p", Yw, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          b(" " + f(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        C(Me, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => s.$emit("cancel"))
        }, {
          default: h(() => [
            b(f(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), M(Me, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => s.$emit("secondary"))
        }, {
          default: h(() => [
            b(f(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        C(Me, {
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
}), Qa = /* @__PURE__ */ pe(Jw, [["__scopeId", "data-v-3670b9f5"]]), Xw = { class: "mismatch-warning" }, Qw = { class: "version-mismatch" }, Zw = { class: "version-actual" }, e_ = { class: "version-expected" }, t_ = { key: 0 }, s_ = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, o_ = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, n_ = /* @__PURE__ */ ve({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, n = s, { getNodes: l, trackNodeAsDev: i, installNode: c, uninstallNode: d } = at(), u = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0
    }), m = k(!1), v = k(null), g = k(""), w = k(!1), p = k(null), _ = k(null), S = N(() => {
      if (!g.value.trim()) return u.value.nodes;
      const J = g.value.toLowerCase();
      return u.value.nodes.filter(
        (W) => {
          var se, ee;
          return W.name.toLowerCase().includes(J) || ((se = W.description) == null ? void 0 : se.toLowerCase().includes(J)) || ((ee = W.repository) == null ? void 0 : ee.toLowerCase().includes(J));
        }
      );
    }), $ = N(
      () => S.value.filter((J) => J.installed && J.tracked)
    ), P = N(
      () => S.value.filter((J) => !J.installed && J.tracked)
    ), D = N(
      () => S.value.filter((J) => J.installed && !J.tracked)
    );
    function I(J) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[J] || J;
    }
    const x = N(() => o.versionMismatches.length > 0);
    function K(J) {
      return !J.used_in_workflows || J.used_in_workflows.length === 0 ? "Not used in any workflows" : J.used_in_workflows.length === 1 ? J.used_in_workflows[0] : `${J.used_in_workflows.length} workflows`;
    }
    function V(J) {
      p.value = J;
    }
    function z() {
      n("open-node-manager");
    }
    function T(J) {
      _.value = {
        title: "Track as Development Node",
        message: `Track "${J}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const W = await i(J);
            W.status === "success" ? (n("toast", `✓ Node "${J}" tracked as development`, "success"), await Z()) : n("toast", `Failed to track node: ${W.message || "Unknown error"}`, "error");
          } catch (W) {
            n("toast", `Error tracking node: ${W instanceof Error ? W.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function E(J) {
      _.value = {
        title: "Remove Untracked Node",
        message: `Remove "${J}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const W = await d(J);
            W.status === "success" ? (n("toast", `✓ Node "${J}" removed`, "success"), await Z()) : n("toast", `Failed to remove node: ${W.message || "Unknown error"}`, "error");
          } catch (W) {
            n("toast", `Error removing node: ${W instanceof Error ? W.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    function R(J) {
      _.value = {
        title: "Install Missing Node",
        message: `Install "${J}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          _.value = null;
          try {
            m.value = !0;
            const W = await c(J);
            W.status === "success" ? (n("toast", `✓ Node "${J}" installed`, "success"), await Z()) : n("toast", `Failed to install node: ${W.message || "Unknown error"}`, "error");
          } catch (W) {
            n("toast", `Error installing node: ${W instanceof Error ? W.message : "Unknown error"}`, "error");
          } finally {
            m.value = !1;
          }
        }
      };
    }
    async function Z() {
      m.value = !0, v.value = null;
      try {
        u.value = await l();
      } catch (J) {
        v.value = J instanceof Error ? J.message : "Failed to load nodes";
      } finally {
        m.value = !1;
      }
    }
    return et(Z), (J, W) => (a(), r(G, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: W[0] || (W[0] = (se) => w.value = !0)
          }, {
            actions: h(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: z
              }, {
                default: h(() => [...W[7] || (W[7] = [
                  b(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          C(ko, {
            modelValue: g.value,
            "onUpdate:modelValue": W[1] || (W[1] = (se) => g.value = se),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          m.value ? (a(), M(Ts, {
            key: 0,
            message: "Loading nodes..."
          })) : v.value ? (a(), M(Ps, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: Z
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            u.value.total_count ? (a(), M(on, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                b(f(u.value.installed_count) + " installed ", 1),
                u.value.missing_count ? (a(), r(G, { key: 0 }, [
                  b(" • " + f(u.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                u.value.untracked_count ? (a(), r(G, { key: 1 }, [
                  b(" • " + f(u.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            x.value ? (a(), M(it, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                t("div", Xw, [
                  W[8] || (W[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, f(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), r(G, null, he(e.versionMismatches, (se) => (a(), M(Tt, {
                  key: se.name,
                  status: "warning"
                }, {
                  icon: h(() => [...W[9] || (W[9] = [
                    b("⚠", -1)
                  ])]),
                  title: h(() => [
                    b(f(se.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", Qw, [
                      t("span", Zw, f(se.actual), 1),
                      W[10] || (W[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", e_, f(se.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "warning",
                      size: "sm",
                      onClick: W[2] || (W[2] = (ee) => n("repair-environment"))
                    }, {
                      default: h(() => [...W[11] || (W[11] = [
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
            D.value.length ? (a(), M(it, {
              key: 2,
              title: "UNTRACKED",
              count: D.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(G, null, he(D.value, (se) => (a(), M(Tt, {
                  key: se.name,
                  status: "warning"
                }, {
                  icon: h(() => [...W[12] || (W[12] = [
                    b("?", -1)
                  ])]),
                  title: h(() => [
                    b(f(se.name), 1)
                  ]),
                  subtitle: h(() => [...W[13] || (W[13] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    C(ft, {
                      label: "Used by:",
                      value: K(se)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ee) => V(se)
                    }, {
                      default: h(() => [...W[14] || (W[14] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ee) => T(se.name)
                    }, {
                      default: h(() => [...W[15] || (W[15] = [
                        b(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (ee) => E(se.name)
                    }, {
                      default: h(() => [...W[16] || (W[16] = [
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
            $.value.length ? (a(), M(it, {
              key: 3,
              title: "INSTALLED",
              count: $.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(G, null, he($.value, (se) => (a(), M(Tt, {
                  key: se.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    b(f(se.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    b(f(se.name), 1)
                  ]),
                  subtitle: h(() => [
                    se.version ? (a(), r("span", t_, f(se.source === "development" ? "" : "v") + f(se.version), 1)) : (a(), r("span", s_, "version unknown")),
                    t("span", o_, " • " + f(I(se.source)), 1)
                  ]),
                  details: h(() => [
                    C(ft, {
                      label: "Used by:",
                      value: K(se)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ee) => V(se)
                    }, {
                      default: h(() => [...W[17] || (W[17] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: z
                    }, {
                      default: h(() => [...W[18] || (W[18] = [
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
            P.value.length ? (a(), M(it, {
              key: 4,
              title: "MISSING",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), r(G, null, he(P.value, (se) => (a(), M(Tt, {
                  key: se.name,
                  status: "missing"
                }, {
                  icon: h(() => [...W[19] || (W[19] = [
                    b("!", -1)
                  ])]),
                  title: h(() => [
                    b(f(se.name), 1)
                  ]),
                  subtitle: h(() => [...W[20] || (W[20] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    C(ft, {
                      label: "Required by:",
                      value: K(se)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    C(re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ee) => V(se)
                    }, {
                      default: h(() => [...W[21] || (W[21] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ee) => R(se.name)
                    }, {
                      default: h(() => [...W[22] || (W[22] = [
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
            !$.value.length && !P.value.length && !D.value.length ? (a(), M(ns, {
              key: 5,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      C(as, {
        show: w.value,
        title: "About Custom Nodes",
        onClose: W[4] || (W[4] = (se) => w.value = !1)
      }, {
        content: h(() => [...W[23] || (W[23] = [
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
          C(re, {
            variant: "primary",
            onClick: W[3] || (W[3] = (se) => w.value = !1)
          }, {
            default: h(() => [...W[24] || (W[24] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      p.value ? (a(), M(Hw, {
        key: 0,
        node: p.value,
        onClose: W[5] || (W[5] = (se) => p.value = null)
      }, null, 8, ["node"])) : y("", !0),
      _.value ? (a(), M(Qa, {
        key: 1,
        title: _.value.title,
        message: _.value.message,
        warning: _.value.warning,
        "confirm-label": _.value.confirmLabel,
        destructive: _.value.destructive,
        onConfirm: _.value.onConfirm,
        onCancel: W[6] || (W[6] = (se) => _.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), a_ = /* @__PURE__ */ pe(n_, [["__scopeId", "data-v-1555a802"]]);
function br(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const l_ = { class: "remote-url-display" }, i_ = ["title"], r_ = ["title"], c_ = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, d_ = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, u_ = /* @__PURE__ */ ve({
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
    return (i, c) => (a(), r("div", l_, [
      t("span", {
        class: "url-text",
        title: e.url
      }, f(n.value), 9, i_),
      t("button", {
        class: Te(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), r("svg", d_, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), r("svg", c_, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, r_)
    ]));
  }
}), f_ = /* @__PURE__ */ pe(u_, [["__scopeId", "data-v-7768a58d"]]), m_ = { class: "remote-title" }, v_ = {
  key: 0,
  class: "default-badge"
}, p_ = {
  key: 1,
  class: "sync-badge"
}, g_ = {
  key: 0,
  class: "ahead"
}, h_ = {
  key: 1,
  class: "behind"
}, y_ = {
  key: 1,
  class: "synced"
}, w_ = ["href"], __ = {
  key: 1,
  class: "remote-url-text"
}, b_ = /* @__PURE__ */ ve({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = N(() => s.fetchingRemote === s.remote.name), n = N(() => s.remote.is_default), l = N(() => s.syncStatus && s.syncStatus.behind > 0), i = N(() => s.syncStatus && s.syncStatus.ahead > 0), c = N(() => s.remote.push_url !== s.remote.fetch_url), d = N(() => {
      const m = s.remote.fetch_url, v = m.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : m.startsWith("https://") || m.startsWith("http://") ? m.replace(/\.git$/, "") : null;
    }), u = N(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (m, v) => (a(), M(Tt, {
      status: n.value ? "synced" : void 0
    }, to({
      icon: h(() => [
        b(f(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        t("div", m_, [
          t("span", null, f(e.remote.name), 1),
          n.value ? (a(), r("span", v_, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", p_, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(G, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", g_, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", h_, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", y_, "✓ synced"))
          ])) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        d.value ? (a(), r("a", {
          key: 0,
          href: d.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: v[0] || (v[0] = rt(() => {
          }, ["stop"]))
        }, f(u.value), 9, w_)) : (a(), r("span", __, f(u.value), 1))
      ]),
      actions: h(() => [
        C(re, {
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
        C(re, {
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
        C(re, {
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
        C(re, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (g) => m.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...v[7] || (v[7] = [
            b(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), M(re, {
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
          e.remote.push_url !== e.remote.fetch_url ? (a(), M(ft, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              C(f_, {
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
}), k_ = /* @__PURE__ */ pe(b_, [["__scopeId", "data-v-8310f3a8"]]), $_ = ["for"], C_ = {
  key: 0,
  class: "base-form-field-required"
}, x_ = { class: "base-form-field-input" }, S_ = {
  key: 1,
  class: "base-form-field-error"
}, I_ = {
  key: 2,
  class: "base-form-field-hint"
}, E_ = /* @__PURE__ */ ve({
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
      class: Te(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), r("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        b(f(e.label) + " ", 1),
        e.required ? (a(), r("span", C_, "*")) : y("", !0)
      ], 8, $_)) : y("", !0),
      t("div", x_, [
        qe(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), r("span", S_, f(e.error), 1)) : e.hint ? (a(), r("span", I_, f(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), ra = /* @__PURE__ */ pe(E_, [["__scopeId", "data-v-9a1cf296"]]), T_ = { class: "remote-form" }, P_ = { class: "form-header" }, R_ = { class: "form-body" }, M_ = {
  key: 0,
  class: "form-error"
}, D_ = { class: "form-actions" }, L_ = /* @__PURE__ */ ve({
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
    Ct(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const d = N(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function u() {
      if (!(!d.value || i.value)) {
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
    return (m, v) => (a(), r("div", T_, [
      t("div", P_, [
        C(At, null, {
          default: h(() => [
            b(f(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", R_, [
        C(ra, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            C(es, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (g) => l.value.name = g),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        C(ra, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            C(es, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (g) => l.value.fetchUrl = g),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        C(ra, { label: "Push URL (optional)" }, {
          default: h(() => [
            C(es, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (g) => l.value.pushUrl = g),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (a(), r("div", M_, f(c.value), 1)) : y("", !0)
      ]),
      t("div", D_, [
        C(re, {
          variant: "primary",
          size: "md",
          disabled: !d.value,
          loading: i.value,
          onClick: u
        }, {
          default: h(() => [
            b(f(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        C(re, {
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
}), O_ = /* @__PURE__ */ pe(L_, [["__scopeId", "data-v-56021b18"]]), A_ = { class: "conflict-summary-box" }, N_ = { class: "summary-header" }, U_ = { class: "summary-text" }, z_ = { key: 0 }, F_ = {
  key: 1,
  class: "all-resolved"
}, B_ = { class: "summary-progress" }, V_ = { class: "progress-bar" }, W_ = { class: "progress-text" }, G_ = /* @__PURE__ */ ve({
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
    return (n, l) => (a(), r("div", A_, [
      t("div", N_, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", U_, [
          t("strong", null, f(e.conflictCount) + " conflict" + f(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), r("p", z_, " Resolve all conflicts before " + f(e.operationType) + "ing ", 1)) : (a(), r("p", F_, " All conflicts resolved - ready to " + f(e.operationType), 1))
        ])
      ]),
      t("div", B_, [
        t("div", V_, [
          t("div", {
            class: "progress-fill",
            style: Ht({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", W_, f(e.resolvedCount) + " / " + f(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), j_ = /* @__PURE__ */ pe(G_, [["__scopeId", "data-v-4e9e6cc9"]]), H_ = { class: "modal-header" }, K_ = { class: "modal-title" }, q_ = { class: "modal-body" }, Y_ = {
  key: 0,
  class: "error-box"
}, J_ = {
  key: 0,
  class: "error-hint"
}, X_ = {
  key: 1,
  class: "loading-state"
}, Q_ = { class: "commit-summary" }, Z_ = {
  key: 0,
  class: "changes-section"
}, eb = {
  key: 0,
  class: "change-group",
  open: ""
}, tb = { class: "change-count" }, sb = { class: "change-list" }, ob = {
  key: 0,
  class: "conflict-badge"
}, nb = {
  key: 1,
  class: "change-group"
}, ab = { class: "change-count" }, lb = { class: "change-list" }, ib = {
  key: 2,
  class: "change-group"
}, rb = { class: "change-count" }, cb = { class: "change-list" }, db = {
  key: 2,
  class: "strategy-section"
}, ub = { class: "radio-group" }, fb = { class: "radio-option" }, mb = { class: "radio-option" }, vb = { class: "radio-option" }, pb = {
  key: 3,
  class: "up-to-date"
}, gb = { class: "modal-actions" }, ql = "comfygit.pullModelStrategy", hb = /* @__PURE__ */ ve({
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
    const o = e, n = s, l = k(localStorage.getItem(ql) || "skip");
    Ct(l, ($) => {
      localStorage.setItem(ql, $);
    });
    const i = N(() => {
      var $;
      return (($ = o.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = N(() => {
      if (!o.preview) return 0;
      const $ = o.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), d = N(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), u = N(() => {
      var $;
      return c.value > 0 || d.value > 0 || ((($ = o.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), m = N(() => o.preview && br(o.preview) ? o.preview : null), v = N(() => {
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
      return m.value.workflow_conflicts.some((D) => D.name === P);
    }
    function S($) {
      const P = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: $, resolutions: P });
    }
    return ($, P) => {
      var D, I;
      return a(), M(wt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: P[11] || (P[11] = (x) => $.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: P[10] || (P[10] = rt(() => {
            }, ["stop"]))
          }, [
            t("div", H_, [
              t("h3", K_, "PULL FROM " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: P[0] || (P[0] = (x) => $.$emit("close"))
              }, "✕")
            ]),
            t("div", q_, [
              e.error ? (a(), r("div", Y_, [
                P[13] || (P[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  P[12] || (P[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, f(e.error), 1),
                  i.value ? (a(), r("p", J_, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), r("div", X_, [...P[14] || (P[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (D = e.preview) != null && D.has_uncommitted_changes ? (a(), r(G, { key: 2 }, [
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
              ], 64)) : e.preview ? (a(), r(G, { key: 3 }, [
                t("div", Q_, [
                  P[17] || (P[17] = t("span", { class: "icon" }, "📥", -1)),
                  b(" " + f(e.preview.commits_behind) + " commit" + f(e.preview.commits_behind !== 1 ? "s" : "") + " from " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]),
                u.value ? (a(), r("div", Z_, [
                  P[21] || (P[21] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (a(), r("details", eb, [
                    t("summary", null, [
                      P[18] || (P[18] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", tb, f(c.value) + " changes", 1)
                    ]),
                    t("div", sb, [
                      (a(!0), r(G, null, he(e.preview.changes.workflows.added, (x) => (a(), r("div", {
                        key: "a-" + x,
                        class: "change-item add"
                      }, " + " + f(x), 1))), 128)),
                      (a(!0), r(G, null, he(e.preview.changes.workflows.modified, (x) => (a(), r("div", {
                        key: "m-" + x,
                        class: "change-item modify"
                      }, [
                        b(" ~ " + f(x) + " ", 1),
                        _(x) ? (a(), r("span", ob, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), r(G, null, he(e.preview.changes.workflows.deleted, (x) => (a(), r("div", {
                        key: "d-" + x,
                        class: "change-item delete"
                      }, " - " + f(x), 1))), 128))
                    ])
                  ])) : y("", !0),
                  d.value > 0 ? (a(), r("details", nb, [
                    t("summary", null, [
                      P[19] || (P[19] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", ab, f(d.value) + " to install", 1)
                    ]),
                    t("div", lb, [
                      (a(!0), r(G, null, he(e.preview.changes.nodes.to_install, (x) => (a(), r("div", {
                        key: x,
                        class: "change-item add"
                      }, " + " + f(x), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), r("details", ib, [
                    t("summary", null, [
                      P[20] || (P[20] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", rb, f(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", cb, [
                      (a(!0), r(G, null, he(e.preview.changes.models.referenced, (x) => (a(), r("div", {
                        key: x,
                        class: "change-item"
                      }, f(x), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                m.value ? (a(), M(j_, {
                  key: 1,
                  "conflict-count": v.value,
                  "resolved-count": g.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), r("div", db, [
                  P[26] || (P[26] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", ub, [
                    t("label", fb, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[1] || (P[1] = (x) => l.value = x),
                        value: "all"
                      }, null, 512), [
                        [Xt, l.value]
                      ]),
                      P[22] || (P[22] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", mb, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[2] || (P[2] = (x) => l.value = x),
                        value: "required"
                      }, null, 512), [
                        [Xt, l.value]
                      ]),
                      P[23] || (P[23] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", vb, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": P[3] || (P[3] = (x) => l.value = x),
                        value: "skip"
                      }, null, 512), [
                        [Xt, l.value]
                      ]),
                      P[24] || (P[24] = t("span", null, "Skip model downloads", -1)),
                      P[25] || (P[25] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  P[27] || (P[27] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (a(), r("div", pb, [
                  P[28] || (P[28] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", gb, [
              C(re, {
                variant: "secondary",
                onClick: P[4] || (P[4] = (x) => $.$emit("close"))
              }, {
                default: h(() => [...P[29] || (P[29] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), r(G, { key: 0 }, [
                C(re, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: P[5] || (P[5] = (x) => S(!1))
                }, {
                  default: h(() => [...P[30] || (P[30] = [
                    b(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                C(re, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: P[6] || (P[6] = (x) => S(!0))
                }, {
                  default: h(() => [...P[31] || (P[31] = [
                    b(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (I = e.preview) != null && I.has_uncommitted_changes ? (a(), M(re, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: P[7] || (P[7] = (x) => S(!0))
              }, {
                default: h(() => [...P[32] || (P[32] = [
                  b(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), r(G, { key: 2 }, [
                m.value && !w.value ? (a(), M(re, {
                  key: 0,
                  variant: "primary",
                  onClick: P[8] || (P[8] = (x) => n("openConflictResolution"))
                }, {
                  default: h(() => [
                    b(" Resolve Conflicts (" + f(g.value) + "/" + f(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), M(re, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !p.value,
                  onClick: P[9] || (P[9] = (x) => S(!1))
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
}), yb = /* @__PURE__ */ pe(hb, [["__scopeId", "data-v-300c7b2f"]]), wb = { class: "modal-header" }, _b = { class: "modal-title" }, bb = { class: "modal-body" }, kb = {
  key: 0,
  class: "loading-state"
}, $b = {
  key: 1,
  class: "warning-box"
}, Cb = {
  key: 0,
  class: "commits-section"
}, xb = { class: "commit-list" }, Sb = { class: "commit-hash" }, Ib = { class: "commit-message" }, Eb = { class: "commit-date" }, Tb = { class: "force-option" }, Pb = { class: "checkbox-option" }, Rb = { class: "commit-summary" }, Mb = { key: 0 }, Db = { key: 1 }, Lb = {
  key: 0,
  class: "info-box"
}, Ob = {
  key: 1,
  class: "commits-section"
}, Ab = { class: "commit-list" }, Nb = { class: "commit-hash" }, Ub = { class: "commit-message" }, zb = { class: "commit-date" }, Fb = {
  key: 2,
  class: "up-to-date"
}, Bb = { class: "modal-actions" }, Vb = /* @__PURE__ */ ve({
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
      var d, u, m;
      return a(), M(wt, { to: "body" }, [
        e.show ? (a(), r("div", {
          key: 0,
          class: "modal-overlay",
          onClick: c[7] || (c[7] = (v) => i.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: c[6] || (c[6] = rt(() => {
            }, ["stop"]))
          }, [
            t("div", wb, [
              t("h3", _b, "PUSH TO " + f(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (v) => i.$emit("close"))
              }, "✕")
            ]),
            t("div", bb, [
              e.loading ? (a(), r("div", kb, [...c[8] || (c[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (d = e.preview) != null && d.has_uncommitted_changes ? (a(), r("div", $b, [...c[9] || (c[9] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (u = e.preview) != null && u.remote_has_new_commits ? (a(), r(G, { key: 2 }, [
                c[13] || (c[13] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "REMOTE HAS NEW COMMITS"),
                    t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (a(), r("div", Cb, [
                  c[10] || (c[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", xb, [
                    (a(!0), r(G, null, he(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", Sb, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", Ib, f(v.message), 1),
                      t("span", Eb, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", Tb, [
                  t("label", Pb, [
                    Ye(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": c[1] || (c[1] = (v) => n.value = v)
                    }, null, 512), [
                      [Qo, n.value]
                    ]),
                    c[11] || (c[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  c[12] || (c[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (a(), r(G, { key: 3 }, [
                t("div", Rb, [
                  c[14] || (c[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (a(), r("span", Mb, " Creating " + f(e.preview.remote) + "/" + f(e.preview.branch) + " with " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), r("span", Db, " Pushing " + f(e.preview.commits_ahead) + " commit" + f(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + f(e.preview.remote) + "/" + f(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (a(), r("div", Lb, [...c[15] || (c[15] = [
                  t("span", { class: "info-icon" }, "ℹ", -1),
                  t("span", null, "This will create the remote branch for the first time.", -1)
                ])])) : y("", !0),
                e.preview.commits_ahead > 0 ? (a(), r("div", Ob, [
                  c[16] || (c[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", Ab, [
                    (a(!0), r(G, null, he(e.preview.commits, (v) => (a(), r("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", Nb, f(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", Ub, f(v.message), 1),
                      t("span", zb, f(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (a(), r("div", Fb, [
                  c[17] || (c[17] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Nothing to push - already up to date with " + f(e.preview.remote) + "/" + f(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", Bb, [
              C(re, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (v) => i.$emit("close"))
              }, {
                default: h(() => [...c[18] || (c[18] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (m = e.preview) != null && m.remote_has_new_commits ? (a(), r(G, { key: 0 }, [
                C(re, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (v) => i.$emit("pull-first"))
                }, {
                  default: h(() => [...c[19] || (c[19] = [
                    b(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                C(re, {
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
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), M(re, {
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
}), Wb = /* @__PURE__ */ pe(Vb, [["__scopeId", "data-v-ae86b6a7"]]), Gb = { class: "resolution-choice-group" }, jb = ["disabled"], Hb = ["disabled"], Kb = /* @__PURE__ */ ve({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("div", Gb, [
      t("button", {
        class: Te(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, jb),
      t("button", {
        class: Te(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, Hb)
    ]));
  }
}), qb = /* @__PURE__ */ pe(Kb, [["__scopeId", "data-v-985715ed"]]), Yb = { class: "conflict-header" }, Jb = { class: "conflict-info" }, Xb = { class: "workflow-name" }, Qb = { class: "conflict-description" }, Zb = {
  key: 0,
  class: "resolved-badge"
}, ek = { class: "resolved-text" }, tk = { class: "conflict-hashes" }, sk = { class: "hash-item" }, ok = { class: "hash-item" }, nk = { class: "conflict-actions" }, ak = /* @__PURE__ */ ve({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k(o.resolution);
    Ct(() => o.resolution, (u) => {
      l.value = u;
    }), Ct(l, (u) => {
      u && n("resolve", u);
    });
    const i = N(() => l.value !== null), c = N(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), d = N(() => {
      switch (l.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (u, m) => {
      var v, g;
      return a(), r("div", {
        class: Te(["conflict-item", { resolved: i.value }])
      }, [
        t("div", Yb, [
          m[2] || (m[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", Jb, [
            t("code", Xb, f(e.conflict.name) + ".json", 1),
            t("div", Qb, f(c.value), 1)
          ]),
          i.value ? (a(), r("div", Zb, [
            m[1] || (m[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", ek, f(d.value), 1)
          ])) : y("", !0)
        ]),
        t("div", tk, [
          t("span", sk, [
            m[3] || (m[3] = b("Your: ", -1)),
            t("code", null, f(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", ok, [
            m[4] || (m[4] = b("Theirs: ", -1)),
            t("code", null, f(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", nk, [
          C(qb, {
            modelValue: l.value,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), lk = /* @__PURE__ */ pe(ak, [["__scopeId", "data-v-506d3bbf"]]), ik = { class: "resolution-content" }, rk = {
  key: 0,
  class: "error-box"
}, ck = { class: "resolution-header" }, dk = { class: "header-stats" }, uk = { class: "stat" }, fk = { class: "stat-value" }, mk = { class: "stat resolved" }, vk = { class: "stat-value" }, pk = {
  key: 0,
  class: "stat pending"
}, gk = { class: "stat-value" }, hk = { class: "conflicts-list" }, yk = {
  key: 1,
  class: "all-resolved-message"
}, wk = /* @__PURE__ */ ve({
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
    const o = e, n = s, l = N(() => o.resolutions.size), i = N(() => o.workflowConflicts.length - l.value), c = N(() => l.value === o.workflowConflicts.length), d = N(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function u(w) {
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
    return (w, p) => (a(), M(pt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: h(() => [
        t("div", ik, [
          e.error ? (a(), r("div", rk, [
            p[1] || (p[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              p[0] || (p[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, f(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", ck, [
            t("div", dk, [
              t("div", uk, [
                t("span", fk, f(e.workflowConflicts.length), 1),
                p[2] || (p[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", mk, [
                t("span", vk, f(l.value), 1),
                p[3] || (p[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              i.value > 0 ? (a(), r("div", pk, [
                t("span", gk, f(i.value), 1),
                p[4] || (p[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            p[5] || (p[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", hk, [
            (a(!0), r(G, null, he(e.workflowConflicts, (_) => (a(), M(lk, {
              key: _.name,
              conflict: _,
              resolution: u(_.name),
              onResolve: (S) => m(_.name, S)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (a(), r("div", yk, [
            p[6] || (p[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + f(d.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        C(Me, {
          variant: "secondary",
          onClick: v
        }, {
          default: h(() => [...p[7] || (p[7] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        C(Me, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: g
        }, {
          default: h(() => [
            b(f(d.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), _k = /* @__PURE__ */ pe(wk, [["__scopeId", "data-v-c58d150d"]]), bk = { class: "node-conflict-item" }, kk = { class: "node-header" }, $k = { class: "node-name" }, Ck = { class: "node-id" }, xk = { class: "version-comparison" }, Sk = { class: "version yours" }, Ik = { class: "version theirs" }, Ek = { class: "chosen-version" }, Tk = { class: "chosen" }, Pk = { class: "chosen-reason" }, Rk = { class: "affected-workflows" }, Mk = { class: "wf-source" }, Dk = { class: "wf-version" }, Lk = /* @__PURE__ */ ve({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (a(), r("div", bk, [
      t("div", kk, [
        t("code", $k, f(e.conflict.node_name), 1),
        t("span", Ck, "(" + f(e.conflict.node_id) + ")", 1)
      ]),
      t("div", xk, [
        t("div", Sk, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, f(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", Ik, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, f(e.conflict.target_version), 1)
        ])
      ]),
      t("div", Ek, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", Tk, f(e.conflict.chosen_version), 1),
        t("span", Pk, f(e.conflict.chosen_reason), 1)
      ]),
      t("details", Rk, [
        t("summary", null, " Affected workflows (" + f(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (a(!0), r(G, null, he(e.conflict.affected_workflows, (n) => (a(), r("li", {
            key: n.name
          }, [
            t("code", null, f(n.name), 1),
            t("span", Mk, "(" + f(n.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", Dk, "needs v" + f(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), Ok = /* @__PURE__ */ pe(Lk, [["__scopeId", "data-v-8b626725"]]), Ak = { class: "validation-content" }, Nk = {
  key: 0,
  class: "compatible-message"
}, Uk = { class: "conflicts-list" }, zk = {
  key: 2,
  class: "warnings-section"
}, Fk = /* @__PURE__ */ ve({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = N(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (i, c) => (a(), M(pt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (d) => n("cancel"))
    }, {
      body: h(() => [
        t("div", Ak, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), r("div", Nk, [
            c[5] || (c[5] = t("span", { class: "icon" }, "✓", -1)),
            t("div", null, [
              c[4] || (c[4] = t("strong", null, "All clear!", -1)),
              t("p", null, "Your workflow choices are compatible. Ready to " + f(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (a(), r(G, { key: 1 }, [
            c[6] || (c[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", Uk, [
              (a(!0), r(G, null, he(e.validation.node_conflicts, (d) => (a(), M(Ok, {
                key: d.node_id,
                conflict: d
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), r("div", zk, [
            c[8] || (c[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (a(!0), r(G, null, he(e.validation.warnings, (d, u) => (a(), r("li", { key: u }, f(d), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        C(Me, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (d) => n("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        C(Me, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (d) => n("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            b(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        C(Me, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (d) => n("proceed"))
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
}), Bk = /* @__PURE__ */ pe(Fk, [["__scopeId", "data-v-fefd26ed"]]), Vk = { key: 0 }, Wk = /* @__PURE__ */ ve({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(e, { emit: s }) {
    const o = s, {
      getRemotes: n,
      addRemote: l,
      removeRemote: i,
      updateRemoteUrl: c,
      fetchRemote: d,
      getRemoteSyncStatus: u,
      getPullPreview: m,
      pullFromRemote: v,
      getPushPreview: g,
      pushToRemote: w,
      validateMerge: p
    } = at(), _ = k([]), S = k(null), $ = k({}), P = k(!1), D = k(null), I = k(""), x = k(!1), K = k(null), V = k(!1), z = k("add"), T = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), E = N(() => {
      if (!I.value.trim()) return _.value;
      const ye = I.value.toLowerCase();
      return _.value.filter(
        (B) => B.name.toLowerCase().includes(ye) || B.fetch_url.toLowerCase().includes(ye) || B.push_url.toLowerCase().includes(ye)
      );
    });
    async function R() {
      P.value = !0, D.value = null;
      try {
        const ye = await n();
        _.value = ye.remotes, S.value = ye.current_branch_tracking || null, await Promise.all(
          ye.remotes.map(async (B) => {
            const U = await u(B.name);
            U && ($.value[B.name] = U);
          })
        );
      } catch (ye) {
        D.value = ye instanceof Error ? ye.message : "Failed to load remotes";
      } finally {
        P.value = !1;
      }
    }
    function Z() {
      z.value = "add", T.value = { name: "", fetchUrl: "", pushUrl: "" }, V.value = !0;
    }
    function J(ye) {
      const B = _.value.find((U) => U.name === ye);
      B && (z.value = "edit", T.value = {
        name: B.name,
        fetchUrl: B.fetch_url,
        pushUrl: B.push_url
      }, V.value = !0);
    }
    async function W(ye) {
      try {
        z.value === "add" ? await l(ye.name, ye.fetchUrl) : await c(ye.name, ye.fetchUrl, ye.pushUrl || void 0), V.value = !1, await R();
      } catch (B) {
        D.value = B instanceof Error ? B.message : "Operation failed";
      }
    }
    function se() {
      V.value = !1, T.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function ee(ye) {
      K.value = ye;
      try {
        await d(ye);
        const B = await u(ye);
        B && ($.value[ye] = B), o("toast", `✓ Fetched from ${ye}`, "success");
      } catch (B) {
        o("toast", B instanceof Error ? B.message : "Fetch failed", "error");
      } finally {
        K.value = null;
      }
    }
    async function A(ye) {
      if (confirm(`Remove remote "${ye}"?`))
        try {
          await i(ye), await R();
        } catch (B) {
          D.value = B instanceof Error ? B.message : "Failed to remove remote";
        }
    }
    function j() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const L = k("idle"), ne = N(() => L.value === "pull_preview"), Y = N(
      () => L.value === "resolving" || L.value === "validating"
    ), de = N(
      () => L.value === "validation_review" || L.value === "executing"
    ), $e = k(!1), Pe = k(null), Ge = k(!1), Le = k(null), Se = k(!1), Ie = k(null), _e = k(null), ge = k(/* @__PURE__ */ new Map()), Oe = k(null), Re = k(null), O = N(() => Ie.value && br(Ie.value) ? Ie.value : null);
    async function F(ye) {
      Le.value = ye, L.value = "pull_preview", Se.value = !0, Ie.value = null, _e.value = null;
      try {
        Ie.value = await m(ye);
      } catch (B) {
        _e.value = B instanceof Error ? B.message : "Failed to load pull preview";
      } finally {
        Se.value = !1;
      }
    }
    function ae() {
      L.value = "idle", Ie.value = null, _e.value = null, Le.value = null;
    }
    async function ie(ye) {
      if (!Le.value) return;
      L.value = "executing", _e.value = null;
      const B = Le.value;
      try {
        const U = await v(B, ye);
        if (U.rolled_back) {
          _e.value = `Pull failed and was rolled back: ${U.error || "Unknown error"}`, L.value = "pull_preview";
          return;
        }
        Ee(), L.value = "idle", o("toast", `✓ Pulled from ${B}`, "success"), await R();
      } catch (U) {
        _e.value = U instanceof Error ? U.message : "Pull failed", L.value = "pull_preview";
      }
    }
    function fe() {
      O.value && (L.value = "resolving", Re.value = null);
    }
    function me(ye, B) {
      ge.value.set(ye, { name: ye, resolution: B });
    }
    function Ce() {
      L.value = "pull_preview";
    }
    async function xe() {
      L.value = "validating", Re.value = null;
      try {
        const ye = Array.from(ge.value.values());
        Oe.value = await p(Le.value, ye), L.value = "validation_review";
      } catch (ye) {
        Re.value = ye instanceof Error ? ye.message : "Validation failed", L.value = "resolving";
      }
    }
    async function le() {
      L.value = "executing";
      const ye = Le.value;
      try {
        const B = Array.from(ge.value.values()), U = await v(ye, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: B
        });
        if (U.rolled_back) {
          _e.value = `Pull failed and was rolled back: ${U.error || "Unknown error"}`, L.value = "pull_preview";
          return;
        }
        Ee(), L.value = "idle", o("toast", `✓ Pulled from ${ye}`, "success"), await R();
      } catch (B) {
        _e.value = B instanceof Error ? B.message : "Pull failed", L.value = "validation_review";
      }
    }
    function ue() {
      L.value = "resolving";
    }
    function Ne() {
      Ee(), L.value = "idle";
    }
    function Ee() {
      ge.value.clear(), Oe.value = null, Re.value = null, _e.value = null, Ie.value = null, Le.value = null;
    }
    async function te(ye) {
      Le.value = ye, $e.value = !0, Se.value = !0, Pe.value = null;
      try {
        Pe.value = await g(ye);
      } catch (B) {
        D.value = B instanceof Error ? B.message : "Failed to load push preview";
      } finally {
        Se.value = !1;
      }
    }
    function q() {
      $e.value = !1, Pe.value = null, Le.value = null;
    }
    async function De(ye) {
      if (!Le.value) return;
      Ge.value = !0;
      const B = Le.value;
      try {
        await w(B, ye), q(), o("toast", `✓ Pushed to ${B}`, "success"), await R();
      } catch (U) {
        o("toast", U instanceof Error ? U.message : "Push failed", "error");
      } finally {
        Ge.value = !1;
      }
    }
    function we() {
      const ye = Le.value;
      q(), ye && F(ye);
    }
    return et(R), (ye, B) => (a(), r(G, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: B[0] || (B[0] = (U) => x.value = !0)
          }, {
            actions: h(() => [
              V.value ? y("", !0) : (a(), M(re, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: Z
              }, {
                default: h(() => [...B[3] || (B[3] = [
                  b(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          V.value ? y("", !0) : (a(), M(ko, {
            key: 0,
            modelValue: I.value,
            "onUpdate:modelValue": B[1] || (B[1] = (U) => I.value = U),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: h(() => [
          P.value ? (a(), M(Ts, {
            key: 0,
            message: "Loading remotes..."
          })) : D.value ? (a(), M(Ps, {
            key: 1,
            message: D.value,
            retry: !0,
            onRetry: R
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            V.value ? (a(), M(O_, {
              key: 0,
              mode: z.value,
              "remote-name": T.value.name,
              "fetch-url": T.value.fetchUrl,
              "push-url": T.value.pushUrl,
              onSubmit: W,
              onCancel: se
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            _.value.length && !V.value ? (a(), M(on, {
              key: 1,
              variant: "compact"
            }, {
              default: h(() => [
                b(" Total: " + f(_.value.length) + " remote" + f(_.value.length !== 1 ? "s" : "") + " ", 1),
                S.value ? (a(), r("span", Vk, " • Tracking: " + f(S.value.remote) + "/" + f(S.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            E.value.length && !V.value ? (a(), M(it, {
              key: 2,
              title: "REMOTES",
              count: E.value.length
            }, {
              default: h(() => [
                (a(!0), r(G, null, he(E.value, (U) => (a(), M(k_, {
                  key: U.name,
                  remote: U,
                  "sync-status": $.value[U.name],
                  "fetching-remote": K.value,
                  onFetch: ee,
                  onEdit: J,
                  onRemove: A,
                  onPull: F,
                  onPush: te
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !E.value.length && !V.value ? (a(), M(ns, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                C(re, {
                  variant: "primary",
                  onClick: Z
                }, {
                  default: h(() => [...B[4] || (B[4] = [
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
      C(as, {
        show: x.value,
        title: "About Git Remotes",
        onClose: B[2] || (B[2] = (U) => x.value = !1)
      }, {
        content: h(() => [...B[5] || (B[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            b(" The "),
            t("strong", null, '"origin"'),
            b(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          C(re, {
            variant: "link",
            onClick: j
          }, {
            default: h(() => [...B[6] || (B[6] = [
              b(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      C(yb, {
        show: ne.value,
        "remote-name": Le.value || "",
        preview: Ie.value,
        loading: Se.value,
        pulling: L.value === "executing",
        error: _e.value,
        "conflict-resolutions": ge.value,
        onClose: ae,
        onPull: ie,
        onOpenConflictResolution: fe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      C(Wb, {
        show: $e.value,
        "remote-name": Le.value || "",
        preview: Pe.value,
        loading: Se.value,
        pushing: Ge.value,
        onClose: q,
        onPush: De,
        onPullFirst: we
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      Y.value && O.value ? (a(), M(_k, {
        key: 0,
        "workflow-conflicts": O.value.workflow_conflicts,
        resolutions: ge.value,
        "operation-type": "pull",
        validating: L.value === "validating",
        error: Re.value,
        onClose: Ce,
        onResolve: me,
        onApply: xe
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      de.value && Oe.value ? (a(), M(Bk, {
        key: 1,
        validation: Oe.value,
        "operation-type": "pull",
        executing: L.value === "executing",
        onProceed: le,
        onGoBack: ue,
        onCancel: Ne
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), Gk = /* @__PURE__ */ pe(Wk, [["__scopeId", "data-v-9ae3b76d"]]), jk = { class: "setting-info" }, Hk = { class: "setting-label" }, Kk = {
  key: 0,
  class: "required-marker"
}, qk = {
  key: 0,
  class: "setting-description"
}, Yk = { class: "setting-control" }, Jk = /* @__PURE__ */ ve({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Te(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", jk, [
        t("div", Hk, [
          b(f(e.label) + " ", 1),
          e.required ? (a(), r("span", Kk, "*")) : y("", !0)
        ]),
        e.description ? (a(), r("div", qk, f(e.description), 1)) : y("", !0)
      ]),
      t("div", Yk, [
        qe(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), fn = /* @__PURE__ */ pe(Jk, [["__scopeId", "data-v-cb5d236c"]]), Xk = { class: "toggle" }, Qk = ["checked", "disabled"], Zk = /* @__PURE__ */ ve({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("label", Xk, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, Qk),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), e2 = /* @__PURE__ */ pe(Zk, [["__scopeId", "data-v-71c0f550"]]), t2 = { class: "workspace-settings-content" }, s2 = { class: "settings-section" }, o2 = { class: "path-setting" }, n2 = { class: "path-value" }, a2 = { class: "path-setting" }, l2 = { class: "path-value" }, i2 = { class: "settings-section" }, r2 = { class: "settings-section" }, c2 = { class: "settings-section" }, d2 = /* @__PURE__ */ ve({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const n = e, l = o, { getConfig: i, updateConfig: c } = at(), d = k(!1), u = k(null), m = k(null), v = k(null), g = k(null), w = k(""), p = k(""), _ = k(!1), S = k(0);
    function $(E) {
      return E.join(" ");
    }
    function P(E) {
      return E.trim() ? E.trim().split(/\s+/) : [];
    }
    const D = N(() => {
      if (!g.value) return !1;
      const E = w.value !== (g.value.civitai_api_key || ""), R = p.value !== $(g.value.comfyui_extra_args || []);
      return E || R;
    });
    async function I() {
      d.value = !0, u.value = null;
      try {
        v.value = await i(n.workspacePath || void 0), g.value = { ...v.value }, w.value = v.value.civitai_api_key || "", p.value = $(v.value.comfyui_extra_args || []);
        const E = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        _.value = E !== "false", S.value = z();
      } catch (E) {
        u.value = E instanceof Error ? E.message : "Failed to load settings";
      } finally {
        d.value = !1;
      }
    }
    async function x() {
      var E, R;
      m.value = null;
      try {
        const Z = {};
        w.value !== (((E = g.value) == null ? void 0 : E.civitai_api_key) || "") && (Z.civitai_api_key = w.value || null), p.value !== $(((R = g.value) == null ? void 0 : R.comfyui_extra_args) || []) && (Z.comfyui_extra_args = P(p.value)), await c(Z, n.workspacePath || void 0), await I(), m.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          m.value = null;
        }, 3e3);
      } catch (Z) {
        const J = Z instanceof Error ? Z.message : "Failed to save settings";
        m.value = { type: "error", message: J }, l("error", J);
      }
    }
    function K() {
      g.value && (w.value = g.value.civitai_api_key || "", p.value = $(g.value.comfyui_extra_args || []), m.value = null);
    }
    function V(E) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(E)), console.log("[ComfyGit] Auto-refresh setting saved:", E);
    }
    function z() {
      let E = 0;
      for (let R = 0; R < localStorage.length; R++) {
        const Z = localStorage.key(R);
        Z != null && Z.startsWith("comfygit:popup-dismissed:") && E++;
      }
      return E;
    }
    function T() {
      const E = [];
      for (let R = 0; R < localStorage.length; R++) {
        const Z = localStorage.key(R);
        Z != null && Z.startsWith("comfygit:popup-dismissed:") && E.push(Z);
      }
      E.forEach((R) => localStorage.removeItem(R)), S.value = 0, console.log(`[ComfyGit] Reset ${E.length} dismissed popup(s)`);
    }
    return s({
      saveSettings: x,
      resetSettings: K,
      hasChanges: D,
      loadSettings: I
    }), et(I), (E, R) => (a(), r("div", t2, [
      d.value ? (a(), M(Ts, {
        key: 0,
        message: "Loading workspace settings..."
      })) : u.value ? (a(), M(Ps, {
        key: 1,
        message: u.value,
        retry: !0,
        onRetry: I
      }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
        C(it, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var Z, J;
            return [
              t("div", s2, [
                t("div", o2, [
                  R[3] || (R[3] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  R[4] || (R[4] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", n2, f(((Z = v.value) == null ? void 0 : Z.workspace_path) || "Loading..."), 1)
                ]),
                t("div", a2, [
                  R[5] || (R[5] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  R[6] || (R[6] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", l2, f(((J = v.value) == null ? void 0 : J.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        C(it, { title: "API CREDENTIALS" }, {
          default: h(() => [
            t("div", i2, [
              C(fn, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  C(Rn, {
                    modelValue: w.value,
                    "onUpdate:modelValue": R[0] || (R[0] = (Z) => w.value = Z),
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
        C(it, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            t("div", r2, [
              C(fn, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  C(Rn, {
                    modelValue: p.value,
                    "onUpdate:modelValue": R[1] || (R[1] = (Z) => p.value = Z),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              R[7] || (R[7] = t("div", { class: "setting-hint" }, [
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
        C(it, { title: "UI SETTINGS" }, {
          default: h(() => [
            t("div", c2, [
              C(fn, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  C(e2, {
                    modelValue: _.value,
                    "onUpdate:modelValue": [
                      R[2] || (R[2] = (Z) => _.value = Z),
                      V
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              C(fn, {
                label: "Dismissed Dependency Popups",
                description: "Reset the 'don't show again' state for missing dependency popups when loading workflows."
              }, {
                default: h(() => [
                  C(Me, {
                    variant: "secondary",
                    size: "sm",
                    disabled: S.value === 0,
                    onClick: T
                  }, {
                    default: h(() => [
                      b(f(S.value > 0 ? `Reset (${S.value})` : "None Dismissed"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        m.value ? (a(), M(on, {
          key: 0,
          variant: (m.value.type === "success", "compact")
        }, {
          default: h(() => [
            t("span", {
              style: Ht({ color: m.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, f(m.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), kr = /* @__PURE__ */ pe(d2, [["__scopeId", "data-v-cba07f84"]]), u2 = /* @__PURE__ */ ve({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), M(Pt, null, {
      header: h(() => [
        C(Rt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var i, c;
            return [
              C(re, {
                variant: "primary",
                size: "sm",
                disabled: !((i = s.value) != null && i.hasChanges),
                onClick: l[0] || (l[0] = (d) => {
                  var u;
                  return (u = s.value) == null ? void 0 : u.saveSettings();
                })
              }, {
                default: h(() => [...l[2] || (l[2] = [
                  b(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = s.value) != null && c.hasChanges ? (a(), M(re, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (d) => {
                  var u;
                  return (u = s.value) == null ? void 0 : u.resetSettings();
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
        C(kr, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), f2 = { class: "base-tabs" }, m2 = ["disabled", "onClick"], v2 = {
  key: 0,
  class: "base-tabs__badge"
}, p2 = /* @__PURE__ */ ve({
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
      (c = o.tabs.find((d) => d.id === i)) != null && c.disabled || n("update:modelValue", i);
    }
    return (i, c) => (a(), r("div", f2, [
      (a(!0), r(G, null, he(e.tabs, (d) => (a(), r("button", {
        key: d.id,
        class: Te([
          "base-tabs__tab",
          {
            active: e.modelValue === d.id,
            disabled: d.disabled
          }
        ]),
        disabled: d.disabled,
        onClick: (u) => l(d.id)
      }, [
        b(f(d.label) + " ", 1),
        d.badge ? (a(), r("span", v2, f(d.badge), 1)) : y("", !0)
      ], 10, m2))), 128))
    ]));
  }
}), $r = /* @__PURE__ */ pe(p2, [["__scopeId", "data-v-ad5e6cad"]]), g2 = { class: "log-viewer-wrapper" }, h2 = ["disabled", "title"], y2 = /* @__PURE__ */ ve({
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
      await Et();
      const m = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      m && (m.scrollTop = m.scrollHeight);
    }
    et(i), Ct(() => s.logs, i);
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
    function d(m) {
      (m.ctrlKey || m.metaKey) && m.key === "c" && m.stopPropagation();
    }
    function u(m) {
      m.stopPropagation();
    }
    return (m, v) => (a(), r("div", g2, [
      t("div", {
        ref_key: "logOutputElement",
        ref: o,
        class: "log-output",
        onKeydown: d,
        onCopy: u,
        tabindex: "0"
      }, [
        t("button", {
          class: "copy-overlay-btn",
          onClick: c,
          disabled: n.value !== "idle",
          title: n.value === "copied" ? "Copied!" : "Copy all logs"
        }, f(n.value === "copied" ? "Copied!" : "Copy"), 9, h2),
        (a(!0), r(G, null, he(l.value, (g, w) => (a(), r("div", {
          key: w,
          class: Te(`log-line log-level-${g.level.toLowerCase()}`)
        }, f(g.text), 3))), 128))
      ], 544)
    ]));
  }
}), Cr = /* @__PURE__ */ pe(y2, [["__scopeId", "data-v-c0cc6d21"]]), w2 = /* @__PURE__ */ ve({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: i
    } = at(), c = k("workspace"), d = k([]), u = k(!1), m = k(null), v = k(!1), g = k(null), w = k(null), p = k(!1), _ = N(() => c.value === "workspace" ? g.value : w.value);
    async function S() {
      u.value = !0, m.value = null;
      try {
        c.value === "workspace" ? d.value = await s(void 0, 500) : d.value = await n(void 0, 500);
      } catch (D) {
        m.value = D instanceof Error ? D.message : `Failed to load ${c.value} logs`;
      } finally {
        u.value = !1;
      }
    }
    async function $() {
      try {
        const [D, I] = await Promise.all([
          o(),
          l()
        ]);
        D.exists && (g.value = D.path), I.exists && (w.value = I.path);
      } catch {
      }
    }
    async function P() {
      if (_.value) {
        p.value = !0;
        try {
          await i(_.value);
        } catch (D) {
          console.error("Failed to open log file:", D);
        } finally {
          p.value = !1;
        }
      }
    }
    return Ct(c, () => {
      S();
    }), et(() => {
      S(), $();
    }), (D, I) => (a(), r(G, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (x) => v.value = !0)
          }, {
            actions: h(() => [
              C(re, {
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
              C(re, {
                variant: "secondary",
                size: "sm",
                onClick: S,
                disabled: u.value
              }, {
                default: h(() => [
                  b(f(u.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          C($r, {
            modelValue: c.value,
            "onUpdate:modelValue": I[1] || (I[1] = (x) => c.value = x),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (a(), M(Ts, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : m.value ? (a(), M(Ps, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            d.value.length === 0 ? (a(), M(ns, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (a(), M(Cr, {
              key: 1,
              logs: d.value,
              "raw-format": c.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      C(as, {
        show: v.value,
        title: "About Logs",
        onClose: I[3] || (I[3] = (x) => v.value = !1)
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
          C(re, {
            variant: "primary",
            onClick: I[2] || (I[2] = (x) => v.value = !1)
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
}), _2 = /* @__PURE__ */ ve({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: n, openFile: l } = at(), i = k([]), c = k(!1), d = k(null), u = k(!1), m = k("production"), v = k(null), g = k(!1);
    async function w() {
      c.value = !0, d.value = null;
      try {
        i.value = await s(void 0, 500);
        try {
          const S = await o();
          m.value = S.environment || "production";
        } catch {
        }
      } catch (S) {
        d.value = S instanceof Error ? S.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function p() {
      try {
        const S = await n();
        S.exists && (v.value = S.path);
      } catch {
      }
    }
    async function _() {
      if (v.value) {
        g.value = !0;
        try {
          await l(v.value);
        } catch (S) {
          console.error("Failed to open log file:", S);
        } finally {
          g.value = !1;
        }
      }
    }
    return et(() => {
      w(), p();
    }), (S, $) => (a(), r(G, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (P) => u.value = !0)
          }, {
            actions: h(() => [
              C(re, {
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
              C(re, {
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
          c.value ? (a(), M(Ts, {
            key: 0,
            message: "Loading environment logs..."
          })) : d.value ? (a(), M(Ps, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            i.value.length === 0 ? (a(), M(ns, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), M(Cr, {
              key: 1,
              logs: i.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      C(as, {
        show: u.value,
        title: "About Environment Logs",
        onClose: $[2] || ($[2] = (P) => u.value = !1)
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
          C(re, {
            variant: "primary",
            onClick: $[1] || ($[1] = (P) => u.value = !1)
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
}), b2 = { class: "env-title" }, k2 = {
  key: 0,
  class: "current-badge"
}, $2 = {
  key: 0,
  class: "branch-info"
}, C2 = /* @__PURE__ */ ve({
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
    return (s, o) => (a(), M(Tt, {
      status: e.isCurrent ? "synced" : void 0
    }, to({
      icon: h(() => [
        b(f(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        t("div", b2, [
          t("span", null, f(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), r("span", k2, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (a(), r("span", $2, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          b(" " + f(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: h(() => [
        qe(s.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: h(() => [
          C(ft, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          C(ft, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          C(ft, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (a(), M(ft, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), x2 = /* @__PURE__ */ pe(C2, [["__scopeId", "data-v-9231917a"]]), S2 = { class: "env-details" }, I2 = { class: "status-row" }, E2 = {
  key: 0,
  class: "detail-row"
}, T2 = { class: "value mono" }, P2 = {
  key: 1,
  class: "detail-row"
}, R2 = { class: "value mono small" }, M2 = { class: "detail-row" }, D2 = { class: "value" }, L2 = { class: "detail-row" }, O2 = { class: "value" }, A2 = { class: "detail-row" }, N2 = { class: "value" }, U2 = {
  key: 2,
  class: "section-divider"
}, z2 = {
  key: 3,
  class: "detail-row"
}, F2 = { class: "value" }, B2 = {
  key: 4,
  class: "detail-row"
}, V2 = { class: "value" }, W2 = { class: "footer-actions" }, G2 = /* @__PURE__ */ ve({
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
        const i = new Date(l), d = (/* @__PURE__ */ new Date()).getTime() - i.getTime(), u = Math.floor(d / 6e4), m = Math.floor(d / 36e5), v = Math.floor(d / 864e5);
        return u < 1 ? "just now" : u < 60 ? `${u} ${u === 1 ? "minute" : "minutes"} ago` : m < 24 ? `${m} ${m === 1 ? "hour" : "hours"} ago` : v < 30 ? `${v} ${v === 1 ? "day" : "days"} ago` : i.toLocaleDateString();
      } catch {
        return l;
      }
    }
    return (l, i) => (a(), M(pt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: i[2] || (i[2] = (c) => o("close"))
    }, {
      body: h(() => [
        t("div", S2, [
          t("div", I2, [
            i[3] || (i[3] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Te(["status-badge", e.environment.is_current ? "current" : "inactive"])
            }, f(e.environment.is_current ? "Current" : "Inactive"), 3)
          ]),
          e.environment.current_branch ? (a(), r("div", E2, [
            i[4] || (i[4] = t("span", { class: "label" }, "Branch:", -1)),
            t("span", T2, f(e.environment.current_branch), 1)
          ])) : y("", !0),
          e.environment.path ? (a(), r("div", P2, [
            i[5] || (i[5] = t("span", { class: "label" }, "Path:", -1)),
            t("span", R2, f(e.environment.path), 1)
          ])) : y("", !0),
          i[11] || (i[11] = t("div", { class: "section-divider" }, null, -1)),
          t("div", M2, [
            i[6] || (i[6] = t("span", { class: "label" }, "Workflows:", -1)),
            t("span", D2, f(e.environment.workflow_count), 1)
          ]),
          t("div", L2, [
            i[7] || (i[7] = t("span", { class: "label" }, "Nodes:", -1)),
            t("span", O2, f(e.environment.node_count), 1)
          ]),
          t("div", A2, [
            i[8] || (i[8] = t("span", { class: "label" }, "Models:", -1)),
            t("span", N2, f(e.environment.model_count), 1)
          ]),
          e.environment.created_at || e.environment.last_used ? (a(), r("div", U2)) : y("", !0),
          e.environment.created_at ? (a(), r("div", z2, [
            i[9] || (i[9] = t("span", { class: "label" }, "Created:", -1)),
            t("span", F2, f(n(e.environment.created_at)), 1)
          ])) : y("", !0),
          e.environment.last_used ? (a(), r("div", B2, [
            i[10] || (i[10] = t("span", { class: "label" }, "Last Used:", -1)),
            t("span", V2, f(n(e.environment.last_used)), 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", W2, [
          e.canDelete ? (a(), M(Me, {
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
          C(Me, {
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
}), j2 = /* @__PURE__ */ pe(G2, [["__scopeId", "data-v-59855453"]]), xr = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Sr = "3.12", Za = [
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
], Ir = "auto", H2 = { class: "progress-bar" }, K2 = /* @__PURE__ */ ve({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = N(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (n, l) => (a(), r("div", H2, [
      t("div", {
        class: Te(["progress-fill", e.variant]),
        style: Ht({ width: o.value })
      }, null, 6)
    ]));
  }
}), qn = /* @__PURE__ */ pe(K2, [["__scopeId", "data-v-1beb0512"]]), q2 = { class: "task-progress" }, Y2 = { class: "progress-info" }, J2 = { class: "progress-percentage" }, X2 = { class: "progress-message" }, Q2 = {
  key: 0,
  class: "progress-steps"
}, Z2 = { class: "step-icon" }, e$ = { class: "step-label" }, t$ = /* @__PURE__ */ ve({
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
    return (l, i) => (a(), r("div", q2, [
      C(qn, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", Y2, [
        t("span", J2, f(e.progress) + "%", 1),
        t("span", X2, f(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), r("div", Q2, [
        (a(!0), r(G, null, he(e.steps, (c) => (a(), r("div", {
          key: c.id,
          class: Te(["step", o(c.id)])
        }, [
          t("span", Z2, f(n(c.id)), 1),
          t("span", e$, f(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Dn = /* @__PURE__ */ pe(t$, [["__scopeId", "data-v-9d1de66c"]]), s$ = {
  key: 0,
  class: "create-env-form"
}, o$ = { class: "form-field" }, n$ = { class: "form-field" }, a$ = ["value"], l$ = { class: "form-field" }, i$ = ["disabled"], r$ = ["value"], c$ = { class: "form-field" }, d$ = ["value"], u$ = { class: "form-field form-field--checkbox" }, f$ = { class: "form-checkbox" }, m$ = {
  key: 1,
  class: "create-env-progress"
}, v$ = { class: "creating-intro" }, p$ = {
  key: 0,
  class: "progress-warning"
}, g$ = {
  key: 1,
  class: "create-error"
}, h$ = { class: "error-message" }, y$ = {
  key: 1,
  class: "footer-status"
}, w$ = 10, _$ = /* @__PURE__ */ ve({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: i } = at(), c = k(""), d = k(Sr), u = k("latest"), m = k(Ir), v = k(!1), g = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), w = k(!1), p = k(!1), _ = k({
      progress: 0,
      message: ""
    });
    let S = null, $ = 0;
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
    ], D = k(null);
    function I() {
      p.value || o("close");
    }
    async function x() {
      const E = c.value.trim();
      if (E) {
        p.value = !0, _.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const R = {
            name: E,
            python_version: d.value,
            comfyui_version: u.value,
            torch_backend: m.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, Z = await l(R);
          Z.status === "started" ? K() : Z.status === "error" && (_.value = {
            progress: 0,
            message: Z.message || "Failed to start creation",
            error: Z.message
          });
        } catch (R) {
          _.value = {
            progress: 0,
            message: R instanceof Error ? R.message : "Unknown error",
            error: R instanceof Error ? R.message : "Unknown error"
          };
        }
      }
    }
    function K() {
      S || ($ = 0, S = window.setInterval(async () => {
        try {
          const E = await i();
          $ = 0, _.value = {
            progress: E.progress ?? 0,
            message: E.message,
            phase: E.phase,
            error: E.error
          }, E.state === "complete" ? (V(), o("created", E.environment_name || c.value.trim(), v.value)) : E.state === "error" ? (V(), _.value.error = E.error || E.message) : E.state === "idle" && p.value && (V(), _.value.error = "Creation was interrupted. Please try again.");
        } catch {
          $++, $ >= w$ && (V(), _.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function V() {
      S && (clearInterval(S), S = null);
    }
    function z() {
      p.value = !1, _.value = { progress: 0, message: "" }, o("close");
    }
    async function T() {
      w.value = !0;
      try {
        g.value = await n();
      } catch (E) {
        console.error("Failed to load ComfyUI releases:", E);
      } finally {
        w.value = !1;
      }
    }
    return et(async () => {
      var E;
      await Et(), (E = D.value) == null || E.focus(), T();
    }), so(() => {
      V();
    }), (E, R) => (a(), M(pt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !p.value,
      onClose: I
    }, {
      body: h(() => [
        p.value ? (a(), r("div", m$, [
          t("p", v$, [
            R[11] || (R[11] = b(" Creating environment ", -1)),
            t("strong", null, f(c.value), 1),
            R[12] || (R[12] = b("... ", -1))
          ]),
          C(Dn, {
            progress: _.value.progress,
            message: _.value.message,
            "current-phase": _.value.phase,
            variant: _.value.error ? "error" : "default",
            "show-steps": !0,
            steps: P
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          _.value.error ? y("", !0) : (a(), r("p", p$, " This may take several minutes. Please wait... ")),
          _.value.error ? (a(), r("div", g$, [
            t("p", h$, f(_.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), r("div", s$, [
          t("div", o$, [
            R[6] || (R[6] = t("label", { class: "form-label" }, "Name", -1)),
            Ye(t("input", {
              ref_key: "nameInput",
              ref: D,
              "onUpdate:modelValue": R[0] || (R[0] = (Z) => c.value = Z),
              type: "text",
              class: "form-input",
              placeholder: "my-environment",
              onKeyup: Zt(x, ["enter"])
            }, null, 544), [
              [Ut, c.value]
            ])
          ]),
          t("div", n$, [
            R[7] || (R[7] = t("label", { class: "form-label" }, "Python Version", -1)),
            Ye(t("select", {
              "onUpdate:modelValue": R[1] || (R[1] = (Z) => d.value = Z),
              class: "form-select"
            }, [
              (a(!0), r(G, null, he(We(xr), (Z) => (a(), r("option", {
                key: Z,
                value: Z
              }, f(Z), 9, a$))), 128))
            ], 512), [
              [gs, d.value]
            ])
          ]),
          t("div", l$, [
            R[8] || (R[8] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Ye(t("select", {
              "onUpdate:modelValue": R[2] || (R[2] = (Z) => u.value = Z),
              class: "form-select",
              disabled: w.value
            }, [
              (a(!0), r(G, null, he(g.value, (Z) => (a(), r("option", {
                key: Z.tag_name,
                value: Z.tag_name
              }, f(Z.name), 9, r$))), 128))
            ], 8, i$), [
              [gs, u.value]
            ])
          ]),
          t("div", c$, [
            R[9] || (R[9] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Ye(t("select", {
              "onUpdate:modelValue": R[3] || (R[3] = (Z) => m.value = Z),
              class: "form-select"
            }, [
              (a(!0), r(G, null, he(We(Za), (Z) => (a(), r("option", {
                key: Z,
                value: Z
              }, f(Z) + f(Z === "auto" ? " (detect GPU)" : ""), 9, d$))), 128))
            ], 512), [
              [gs, m.value]
            ])
          ]),
          t("div", u$, [
            t("label", f$, [
              Ye(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": R[4] || (R[4] = (Z) => v.value = Z)
              }, null, 512), [
                [Qo, v.value]
              ]),
              R[10] || (R[10] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        p.value ? (a(), r(G, { key: 1 }, [
          _.value.error ? (a(), M(Me, {
            key: 0,
            variant: "secondary",
            onClick: z
          }, {
            default: h(() => [...R[15] || (R[15] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), r("span", y$, " Creating environment... "))
        ], 64)) : (a(), r(G, { key: 0 }, [
          C(Me, {
            variant: "primary",
            disabled: !c.value.trim(),
            onClick: x
          }, {
            default: h(() => [...R[13] || (R[13] = [
              b(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Me, {
            variant: "secondary",
            onClick: R[5] || (R[5] = (Z) => o("close"))
          }, {
            default: h(() => [...R[14] || (R[14] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), b$ = /* @__PURE__ */ pe(_$, [["__scopeId", "data-v-f37eaa42"]]), k$ = /* @__PURE__ */ ve({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const n = o, { getEnvironments: l } = at(), i = k([]), c = k(!1), d = k(null), u = k(""), m = k(!1), v = k(!1), g = k(null), w = N(() => {
      if (!u.value.trim()) return i.value;
      const D = u.value.toLowerCase();
      return i.value.filter(
        (I) => {
          var x;
          return I.name.toLowerCase().includes(D) || ((x = I.current_branch) == null ? void 0 : x.toLowerCase().includes(D));
        }
      );
    });
    function p(D, I) {
      v.value = !1, n("created", D, I);
    }
    function _() {
      v.value = !0;
    }
    function S(D) {
      g.value = D;
    }
    function $(D) {
      g.value = null, n("delete", D);
    }
    async function P() {
      c.value = !0, d.value = null;
      try {
        i.value = await l();
      } catch (D) {
        d.value = D instanceof Error ? D.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return et(P), s({
      loadEnvironments: P,
      openCreateModal: _
    }), (D, I) => (a(), r(G, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (x) => m.value = !0)
          }, {
            actions: h(() => [
              C(re, {
                variant: "primary",
                size: "sm",
                onClick: _
              }, {
                default: h(() => [...I[6] || (I[6] = [
                  b(" Create ", -1)
                ])]),
                _: 1
              }),
              C(re, {
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
          C(ko, {
            modelValue: u.value,
            "onUpdate:modelValue": I[1] || (I[1] = (x) => u.value = x),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), M(Ts, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (a(), M(Ps, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: P
          }, null, 8, ["message"])) : (a(), r(G, { key: 2 }, [
            w.value.length ? (a(), M(it, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: h(() => [
                (a(!0), r(G, null, he(w.value, (x) => (a(), M(x2, {
                  key: x.name,
                  "environment-name": x.name,
                  "is-current": x.is_current,
                  "current-branch": x.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    x.is_current ? y("", !0) : (a(), M(re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => D.$emit("switch", x.name)
                    }, {
                      default: h(() => [...I[8] || (I[8] = [
                        b(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => S(x)
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
            w.value.length ? y("", !0) : (a(), M(ns, {
              key: 1,
              icon: "🌍",
              message: u.value ? `No environments match '${u.value}'` : "No environments found. Create one to get started!"
            }, to({ _: 2 }, [
              u.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  C(re, {
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
      C(as, {
        show: m.value,
        title: "About Environments",
        onClose: I[3] || (I[3] = (x) => m.value = !1)
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
          C(re, {
            variant: "secondary",
            onClick: I[2] || (I[2] = (x) => m.value = !1)
          }, {
            default: h(() => [...I[12] || (I[12] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      g.value ? (a(), M(j2, {
        key: 0,
        environment: g.value,
        "can-delete": i.value.length > 1,
        onClose: I[4] || (I[4] = (x) => g.value = null),
        onDelete: $
      }, null, 8, ["environment", "can-delete"])) : y("", !0),
      v.value ? (a(), M(b$, {
        key: 1,
        onClose: I[5] || (I[5] = (x) => v.value = !1),
        onCreated: p
      })) : y("", !0)
    ], 64));
  }
}), $$ = /* @__PURE__ */ pe(k$, [["__scopeId", "data-v-f95999f4"]]), C$ = { class: "file-path" }, x$ = { class: "file-path-text" }, S$ = ["title"], I$ = /* @__PURE__ */ ve({
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
    return (l, i) => (a(), r("div", C$, [
      i[0] || (i[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", x$, f(e.path), 1),
      e.copyable ? (a(), r("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, f(o.value ? "✓" : "📋"), 9, S$)) : y("", !0)
    ]));
  }
}), E$ = /* @__PURE__ */ pe(I$, [["__scopeId", "data-v-f0982173"]]), T$ = { class: "export-blocked" }, P$ = { class: "issues-list" }, R$ = { class: "issue-message" }, M$ = {
  key: 0,
  class: "issue-details"
}, D$ = ["onClick"], L$ = { class: "issue-fix" }, O$ = /* @__PURE__ */ ve({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close"],
  setup(e) {
    const s = e, o = Bs({});
    function n(l) {
      const i = s.issues[l];
      return o[l] || i.details.length <= 3 ? i.details : i.details.slice(0, 3);
    }
    return (l, i) => (a(), M(pt, {
      title: "Cannot Export",
      size: "md",
      onClose: i[1] || (i[1] = (c) => l.$emit("close"))
    }, {
      body: h(() => [
        t("div", T$, [
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
          t("div", P$, [
            (a(!0), r(G, null, he(e.issues, (c, d) => (a(), r("div", {
              key: d,
              class: "issue-item"
            }, [
              t("div", R$, f(c.message), 1),
              c.details.length ? (a(), r("div", M$, [
                (a(!0), r(G, null, he(n(d), (u, m) => (a(), r("div", {
                  key: m,
                  class: "issue-detail"
                }, f(u), 1))), 128)),
                c.details.length > 3 && !o[d] ? (a(), r("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (u) => o[d] = !0
                }, " +" + f(c.details.length - 3) + " more ", 9, D$)) : y("", !0)
              ])) : y("", !0),
              t("div", L$, [
                c.type === "uncommitted_workflows" ? (a(), r(G, { key: 0 }, [
                  b(" Commit your workflow changes before exporting. ")
                ], 64)) : c.type === "uncommitted_git_changes" ? (a(), r(G, { key: 1 }, [
                  b(" Commit your changes before exporting. ")
                ], 64)) : c.type === "unresolved_issues" ? (a(), r(G, { key: 2 }, [
                  b(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ])
        ])
      ]),
      footer: h(() => [
        C(Me, {
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
}), Er = /* @__PURE__ */ pe(O$, [["__scopeId", "data-v-b52f5e32"]]), A$ = { class: "export-warnings" }, N$ = {
  key: 0,
  class: "success-header"
}, U$ = { class: "warning-header" }, z$ = { class: "warning-summary" }, F$ = { class: "warning-title" }, B$ = { class: "models-section" }, V$ = { class: "models-list" }, W$ = { class: "model-info" }, G$ = { class: "model-filename" }, j$ = { class: "model-workflows" }, H$ = ["onClick"], K$ = /* @__PURE__ */ ve({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, n = s, l = k(!1), i = k(null), c = N(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function d() {
      i.value = null, n("revalidate");
    }
    return (u, m) => (a(), r(G, null, [
      C(pt, {
        title: "Export Warnings",
        size: "md",
        onClose: m[3] || (m[3] = (v) => u.$emit("cancel"))
      }, {
        body: h(() => [
          t("div", A$, [
            e.models.length === 0 ? (a(), r("div", N$, [...m[4] || (m[4] = [
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
            ])])) : (a(), r(G, { key: 1 }, [
              t("div", U$, [
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
                t("div", z$, [
                  t("h3", F$, f(e.models.length) + " model" + f(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  m[5] || (m[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", B$, [
                t("div", V$, [
                  (a(!0), r(G, null, he(c.value, (v) => (a(), r("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", W$, [
                      t("div", G$, f(v.filename), 1),
                      t("div", j$, " Used by: " + f(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (g) => i.value = v.hash
                    }, " Add Source ", 8, H$)
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
          C(Me, {
            variant: "secondary",
            onClick: m[1] || (m[1] = (v) => u.$emit("cancel"))
          }, {
            default: h(() => [...m[7] || (m[7] = [
              b(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          C(Me, {
            variant: "primary",
            onClick: m[2] || (m[2] = (v) => u.$emit("confirm"))
          }, {
            default: h(() => [
              b(f(e.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      i.value ? (a(), M(Xa, {
        key: 0,
        identifier: i.value,
        onClose: d
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Tr = /* @__PURE__ */ pe(K$, [["__scopeId", "data-v-b698d882"]]), q$ = { class: "export-card" }, Y$ = { class: "export-path-row" }, J$ = { class: "export-actions" }, X$ = {
  key: 1,
  class: "export-warning"
}, Q$ = /* @__PURE__ */ ve({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = at(), n = k(""), l = k(!1), i = k(!1), c = k(!1), d = k(null), u = k(!1), m = k(null), v = k(!1), g = k(!1), w = N(() => l.value ? "Validating..." : i.value ? "Exporting..." : "Export Environment");
    async function p() {
      l.value = !0, d.value = null;
      try {
        const I = await s();
        m.value = I, I.can_export ? I.warnings.models_without_sources.length > 0 ? g.value = !0 : await $() : v.value = !0;
      } catch (I) {
        d.value = {
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
    async function S() {
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
        d.value = I;
      } catch (I) {
        d.value = {
          status: "error",
          message: I instanceof Error ? I.message : "Export failed"
        };
      } finally {
        i.value = !1;
      }
    }
    async function P() {
      var I;
      if ((I = d.value) != null && I.path)
        try {
          await navigator.clipboard.writeText(d.value.path);
        } catch (x) {
          console.error("Failed to copy path:", x);
        }
    }
    async function D() {
      var I;
      if ((I = d.value) != null && I.path) {
        c.value = !0;
        try {
          const x = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(d.value.path)}`);
          if (!x.ok)
            throw new Error(`Download failed: ${x.statusText}`);
          const K = await x.blob(), V = URL.createObjectURL(K), z = d.value.path.split("/").pop() || "environment-export.tar.gz", T = document.createElement("a");
          T.href = V, T.download = z, document.body.appendChild(T), T.click(), document.body.removeChild(T), URL.revokeObjectURL(V);
        } catch (x) {
          console.error("Failed to download:", x), alert(`Download failed: ${x instanceof Error ? x.message : "Unknown error"}`);
        } finally {
          c.value = !1;
        }
      }
    }
    return (I, x) => (a(), r(G, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: x[0] || (x[0] = (K) => u.value = !0)
          })
        ]),
        content: h(() => [
          C(it, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              t("div", q$, [
                x[7] || (x[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", Y$, [
                  C(Rn, {
                    modelValue: n.value,
                    "onUpdate:modelValue": x[1] || (x[1] = (K) => n.value = K),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", J$, [
                  C(re, {
                    variant: "primary",
                    size: "md",
                    loading: l.value || i.value,
                    disabled: l.value || i.value,
                    onClick: p
                  }, {
                    default: h(() => [
                      x[6] || (x[6] = t("svg", {
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
          d.value ? (a(), M(it, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              C(Tt, {
                status: d.value.status === "success" ? "synced" : "broken"
              }, to({
                icon: h(() => [
                  b(f(d.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  b(f(d.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: h(() => [
                  b(f(d.value.status === "success" ? "Your environment has been exported" : d.value.message), 1)
                ]),
                _: 2
              }, [
                d.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    C(ft, { label: "Saved to:" }, {
                      default: h(() => [
                        C(E$, {
                          path: d.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    d.value.models_without_sources !== void 0 ? (a(), M(ft, {
                      key: 0,
                      label: "Models without sources:",
                      value: d.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    d.value.models_without_sources && d.value.models_without_sources > 0 ? (a(), r("div", X$, [...x[8] || (x[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                d.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    C(re, {
                      variant: "primary",
                      size: "sm",
                      loading: c.value,
                      onClick: D
                    }, {
                      default: h(() => [...x[9] || (x[9] = [
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
                    C(re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: P
                    }, {
                      default: h(() => [...x[10] || (x[10] = [
                        b(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    C(re, {
                      variant: "ghost",
                      size: "sm",
                      onClick: x[2] || (x[2] = (K) => d.value = null)
                    }, {
                      default: h(() => [...x[11] || (x[11] = [
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
      C(as, {
        show: u.value,
        title: "What Gets Exported",
        onClose: x[3] || (x[3] = (K) => u.value = !1)
      }, {
        content: h(() => [...x[12] || (x[12] = [
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
      v.value && m.value ? (a(), M(Er, {
        key: 0,
        issues: m.value.blocking_issues,
        onClose: x[4] || (x[4] = (K) => v.value = !1)
      }, null, 8, ["issues"])) : y("", !0),
      g.value && m.value ? (a(), M(Tr, {
        key: 1,
        models: m.value.warnings.models_without_sources,
        onConfirm: _,
        onCancel: x[5] || (x[5] = (K) => g.value = !1),
        onRevalidate: S
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), Z$ = /* @__PURE__ */ pe(Q$, [["__scopeId", "data-v-f4d120f2"]]), eC = { class: "file-input-wrapper" }, tC = ["accept", "multiple", "disabled"], sC = /* @__PURE__ */ ve({
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
      var d;
      (d = l.value) == null || d.click();
    }
    function c(d) {
      const u = d.target;
      u.files && u.files.length > 0 && (n("change", u.files), u.value = "");
    }
    return s({
      triggerInput: i
    }), (d, u) => (a(), r("div", eC, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, tC),
      C(re, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: i
      }, {
        default: h(() => [
          qe(d.$slots, "default", {}, () => [
            u[0] || (u[0] = t("svg", {
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
}), oC = /* @__PURE__ */ pe(sC, [["__scopeId", "data-v-cd192091"]]), nC = {
  key: 0,
  class: "drop-zone-empty"
}, aC = { class: "drop-zone-text" }, lC = { class: "drop-zone-primary" }, iC = { class: "drop-zone-secondary" }, rC = { class: "drop-zone-actions" }, cC = {
  key: 1,
  class: "drop-zone-file"
}, dC = { class: "file-info" }, uC = { class: "file-details" }, fC = { class: "file-name" }, mC = { class: "file-size" }, vC = /* @__PURE__ */ ve({
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
    const o = s, n = k(!1), l = k(null), i = k(0), c = N(() => l.value !== null), d = N(() => {
      var $;
      return (($ = l.value) == null ? void 0 : $.name) || "";
    }), u = N(() => {
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
      var D;
      $.stopPropagation(), i.value = 0, n.value = !1;
      const P = (D = $.dataTransfer) == null ? void 0 : D.files;
      P && P.length > 0 && _(P[0]);
    }
    function p($) {
      $.length > 0 && _($[0]);
    }
    function _($) {
      l.value = $, o("fileSelected", $);
    }
    function S() {
      l.value = null, o("clear");
    }
    return ($, P) => (a(), r("div", {
      class: Te(["file-drop-zone", { "drop-active": n.value, "has-file": c.value }]),
      onDragenter: rt(m, ["prevent"]),
      onDragover: rt(v, ["prevent"]),
      onDragleave: rt(g, ["prevent"]),
      onDrop: rt(w, ["prevent"])
    }, [
      c.value ? (a(), r("div", cC, [
        t("div", dC, [
          P[1] || (P[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", uC, [
            t("div", fC, f(d.value), 1),
            t("div", mC, f(u.value), 1)
          ])
        ]),
        C(re, {
          variant: "ghost",
          size: "xs",
          onClick: S,
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
      ])) : (a(), r("div", nC, [
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
        t("div", aC, [
          t("p", lC, f(e.primaryText), 1),
          t("p", iC, f(e.secondaryText), 1)
        ]),
        t("div", rC, [
          C(oC, {
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
}), pC = /* @__PURE__ */ pe(vC, [["__scopeId", "data-v-0f79cb86"]]), gC = { class: "import-preview" }, hC = { class: "preview-header" }, yC = {
  key: 0,
  class: "source-env"
}, wC = { class: "preview-content" }, _C = { class: "preview-section" }, bC = { class: "section-header" }, kC = { class: "section-info" }, $C = { class: "section-count" }, CC = {
  key: 0,
  class: "item-list"
}, xC = { class: "item-name" }, SC = {
  key: 0,
  class: "item-more"
}, IC = { class: "preview-section" }, EC = { class: "section-header" }, TC = { class: "section-info" }, PC = { class: "section-count" }, RC = {
  key: 0,
  class: "item-list"
}, MC = { class: "item-details" }, DC = { class: "item-name" }, LC = { class: "item-meta" }, OC = {
  key: 0,
  class: "item-more"
}, AC = { class: "preview-section" }, NC = { class: "section-header" }, UC = { class: "section-info" }, zC = { class: "section-count" }, FC = {
  key: 0,
  class: "item-list"
}, BC = { class: "item-name" }, VC = {
  key: 0,
  class: "item-more"
}, WC = {
  key: 0,
  class: "preview-section"
}, GC = { class: "git-info" }, jC = /* @__PURE__ */ ve({
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
    return (c, d) => (a(), r("div", gC, [
      t("div", hC, [
        C(At, null, {
          default: h(() => [...d[0] || (d[0] = [
            b("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), r("span", yC, [
          d[1] || (d[1] = b(" From: ", -1)),
          C(Sa, null, {
            default: h(() => [
              b(f(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", wC, [
        t("div", _C, [
          t("div", bC, [
            d[3] || (d[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", kC, [
              d[2] || (d[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", $C, f(o.value) + " file" + f(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), r("div", CC, [
            (a(!0), r(G, null, he(e.workflows.slice(0, e.maxPreviewItems), (u) => (a(), r("div", {
              key: u,
              class: "preview-item"
            }, [
              d[4] || (d[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", xC, f(u), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), r("div", SC, " +" + f(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", IC, [
          t("div", EC, [
            d[6] || (d[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", TC, [
              d[5] || (d[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", PC, f(n.value) + " file" + f(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), r("div", RC, [
            (a(!0), r(G, null, he(e.models.slice(0, e.maxPreviewItems), (u) => (a(), r("div", {
              key: u.filename,
              class: "preview-item"
            }, [
              d[7] || (d[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", MC, [
                t("span", DC, f(u.filename), 1),
                t("span", LC, f(i(u.size)) + " • " + f(u.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), r("div", OC, " +" + f(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", AC, [
          t("div", NC, [
            d[9] || (d[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", UC, [
              d[8] || (d[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", zC, f(l.value) + " node" + f(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), r("div", FC, [
            (a(!0), r(G, null, he(e.nodes.slice(0, e.maxPreviewItems), (u) => (a(), r("div", {
              key: u,
              class: "preview-item"
            }, [
              d[10] || (d[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", BC, f(u), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), r("div", VC, " +" + f(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), r("div", WC, [
          d[11] || (d[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", GC, [
            e.gitBranch ? (a(), M(ft, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                C(Sa, null, {
                  default: h(() => [
                    b(f(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (a(), M(ft, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                C(hr, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), HC = /* @__PURE__ */ pe(jC, [["__scopeId", "data-v-182fe113"]]), KC = { class: "import-config" }, qC = { class: "config-container" }, YC = { class: "config-field" }, JC = { class: "input-wrapper" }, XC = ["value"], QC = {
  key: 0,
  class: "validating-indicator"
}, ZC = {
  key: 1,
  class: "valid-indicator"
}, ex = {
  key: 0,
  class: "field-error"
}, tx = { class: "config-field" }, sx = { class: "strategy-options" }, ox = ["value", "checked", "onChange"], nx = { class: "strategy-content" }, ax = { class: "strategy-label" }, lx = { class: "strategy-description" }, ix = { class: "config-field switch-field" }, rx = { class: "switch-label" }, cx = ["checked"], dx = { class: "advanced-section" }, ux = { class: "advanced-content" }, fx = { class: "config-field" }, mx = ["value"], vx = ["value"], px = /* @__PURE__ */ ve({
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
    Ct(() => o.nameError, (v) => {
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
    let d = null;
    function u(v) {
      const g = v.target.value;
      n("update:name", g), i.value = !1, d && clearTimeout(d), g.length > 0 ? (l.value = !0, d = setTimeout(() => {
        n("validate-name", g);
      }, 400)) : l.value = !1;
    }
    function m() {
      o.name.length > 0 && n("validate-name", o.name);
    }
    return (v, g) => (a(), r("div", KC, [
      C(At, null, {
        default: h(() => [...g[2] || (g[2] = [
          b("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", qC, [
        t("div", YC, [
          C(_n, { required: "" }, {
            default: h(() => [...g[3] || (g[3] = [
              b("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", JC, [
            t("input", {
              type: "text",
              class: Te(["name-input", { error: e.nameError || e.name.length === 0, valid: i.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: u,
              onBlur: m
            }, null, 42, XC),
            l.value ? (a(), r("span", QC, "...")) : i.value ? (a(), r("span", ZC, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), r("div", ex, f(e.nameError), 1)) : y("", !0),
          g[4] || (g[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", tx, [
          C(_n, null, {
            default: h(() => [...g[5] || (g[5] = [
              b("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", sx, [
            (a(), r(G, null, he(c, (w) => t("label", {
              key: w.value,
              class: Te(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (p) => n("update:modelStrategy", w.value)
              }, null, 40, ox),
              t("div", nx, [
                t("span", ax, f(w.label), 1),
                t("span", lx, f(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", ix, [
          t("label", rx, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: g[0] || (g[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, cx),
            g[6] || (g[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", dx, [
          g[8] || (g[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", ux, [
            t("div", fx, [
              C(_n, null, {
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
                (a(!0), r(G, null, he(We(Za), (w) => (a(), r("option", {
                  key: w,
                  value: w
                }, f(w) + f(w === "auto" ? " (detect GPU)" : ""), 9, vx))), 128))
              ], 40, mx)
            ])
          ])
        ])
      ])
    ]));
  }
}), gx = /* @__PURE__ */ pe(px, [["__scopeId", "data-v-89ea06a1"]]), hx = { class: "import-flow" }, yx = {
  key: 0,
  class: "import-empty"
}, wx = { class: "git-import-section" }, _x = { class: "git-url-input-row" }, bx = ["disabled"], kx = {
  key: 0,
  class: "git-error"
}, $x = {
  key: 1,
  class: "import-configure"
}, Cx = { class: "selected-file-bar" }, xx = {
  key: 0,
  class: "file-bar-content"
}, Sx = { class: "file-bar-info" }, Ix = { class: "file-bar-name" }, Ex = { class: "file-bar-size" }, Tx = {
  key: 1,
  class: "file-bar-content"
}, Px = { class: "file-bar-info" }, Rx = { class: "file-bar-name" }, Mx = {
  key: 0,
  class: "preview-loading"
}, Dx = { class: "import-actions" }, Lx = {
  key: 2,
  class: "import-progress"
}, Ox = { class: "creating-intro" }, Ax = {
  key: 0,
  class: "progress-warning"
}, Nx = {
  key: 1,
  class: "import-error"
}, Ux = { class: "error-message" }, zx = {
  key: 3,
  class: "import-complete"
}, Fx = { class: "complete-message" }, Bx = { class: "complete-title" }, Vx = { class: "complete-details" }, Wx = { class: "complete-actions" }, Gx = /* @__PURE__ */ ve({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var Ge, Le, Se, Ie;
    const n = e, l = o, { previewTarballImport: i, previewGitImport: c, validateEnvironmentName: d, executeImport: u, executeGitImport: m, getImportProgress: v } = at();
    let g = null;
    const w = k(null), p = k(n.resumeImport ?? !1), _ = k(!1), S = k(!1), $ = k(""), P = k(!1), D = k(null), I = k(""), x = k(null), K = k(!1), V = k(null), z = k(null), T = k({
      name: ((Ge = n.initialProgress) == null ? void 0 : Ge.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), E = k(null), R = k({
      message: ((Le = n.initialProgress) == null ? void 0 : Le.message) ?? "Preparing import...",
      phase: ((Se = n.initialProgress) == null ? void 0 : Se.phase) ?? "",
      progress: ((Ie = n.initialProgress) == null ? void 0 : Ie.progress) ?? 0,
      error: null
    }), Z = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], J = N(() => {
      if (!z.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const _e = z.value;
      return {
        sourceEnvironment: _e.comfyui_version ? `ComfyUI ${_e.comfyui_version}` : "Unknown",
        workflows: _e.workflows.map((ge) => ge.name),
        models: _e.models.map((ge) => ({
          filename: ge.filename,
          size: 0,
          type: ge.relative_path.split("/")[0] || "model"
        })),
        nodes: _e.nodes.map((ge) => ge.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), W = N(() => !P.value && !D.value && z.value && T.value.name.length > 0 && !E.value && (w.value || x.value));
    async function se(_e) {
      w.value = _e, P.value = !0, D.value = null, z.value = null;
      try {
        const ge = await i(_e);
        z.value = ge;
      } catch (ge) {
        D.value = ge instanceof Error ? ge.message : "Failed to analyze file", console.error("Preview error:", ge);
      } finally {
        P.value = !1;
      }
    }
    function ee() {
      w.value = null, x.value = null, I.value = "", V.value = null, _.value = !1, S.value = !1, $.value = "", z.value = null, D.value = null, T.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, E.value = null, l("source-cleared");
    }
    function A() {
      $e(), ee(), p.value = !1, P.value = !1, K.value = !1, R.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function j() {
      if (I.value.trim()) {
        K.value = !0, V.value = null;
        try {
          const _e = await c(I.value.trim());
          x.value = I.value.trim(), z.value = _e;
        } catch (_e) {
          V.value = _e instanceof Error ? _e.message : "Failed to analyze repository";
        } finally {
          K.value = !1;
        }
      }
    }
    function L(_e) {
      try {
        const ge = new URL(_e);
        return ge.host + ge.pathname.replace(/\.git$/, "");
      } catch {
        return _e;
      }
    }
    async function ne(_e) {
      if (!_e) {
        E.value = "Environment name is required";
        return;
      }
      try {
        const ge = await d(_e);
        E.value = ge.valid ? null : ge.error || "Invalid name";
      } catch {
        E.value = "Failed to validate name";
      }
    }
    async function Y() {
      if (T.value.name && !(!w.value && !x.value)) {
        p.value = !0, _.value = !1, R.value = { message: `Creating environment '${T.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let _e;
          if (w.value)
            _e = await u(
              w.value,
              T.value.name,
              T.value.modelStrategy,
              T.value.torchBackend
            );
          else if (x.value)
            _e = await m(
              x.value,
              T.value.name,
              T.value.modelStrategy,
              T.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          _e.status === "started" ? de() : (S.value = !1, $.value = _e.message, p.value = !1, _.value = !0);
        } catch (_e) {
          S.value = !1, $.value = _e instanceof Error ? _e.message : "Unknown error occurred during import", p.value = !1, _.value = !0;
        }
      }
    }
    async function de() {
      if (g) return;
      const _e = async () => {
        try {
          const Oe = await v();
          return R.value = {
            message: Oe.message,
            phase: Oe.phase || "",
            progress: Oe.progress ?? (Oe.state === "importing" ? 50 : 0),
            error: Oe.error || null
          }, Oe.state === "complete" ? ($e(), S.value = !0, $.value = `Environment '${Oe.environment_name}' created successfully`, p.value = !1, _.value = !0, Oe.environment_name && l("import-complete", Oe.environment_name, T.value.switchAfterImport), !1) : Oe.state === "error" ? ($e(), S.value = !1, $.value = Oe.error || Oe.message, p.value = !1, _.value = !0, !1) : !0;
        } catch (Oe) {
          return console.error("Failed to poll import progress:", Oe), !0;
        }
      };
      await _e() && (g = setInterval(async () => {
        await _e() || $e();
      }, 2e3));
    }
    function $e() {
      g && (clearInterval(g), g = null);
    }
    function Pe(_e) {
      return _e < 1024 ? `${_e} B` : _e < 1024 * 1024 ? `${(_e / 1024).toFixed(1)} KB` : _e < 1024 * 1024 * 1024 ? `${(_e / (1024 * 1024)).toFixed(1)} MB` : `${(_e / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return et(async () => {
      try {
        const _e = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", _e.state, _e), _e.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", _e.environment_name), p.value = !0, T.value.name = _e.environment_name || T.value.name || "", R.value = {
          progress: _e.progress ?? 0,
          message: _e.message || "Importing...",
          phase: _e.phase || "",
          error: null
        }, de());
      } catch (_e) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", _e);
      }
    }), s({
      handleReset: A,
      isImporting: p,
      canImport: W
    }), (_e, ge) => {
      var Oe;
      return a(), r("div", hx, [
        !w.value && !x.value && !p.value ? (a(), r("div", yx, [
          C(pC, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: se
          }),
          ge[7] || (ge[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", wx, [
            ge[5] || (ge[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", _x, [
              Ye(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ge[0] || (ge[0] = (Re) => I.value = Re),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Zt(j, ["enter"]),
                disabled: K.value
              }, null, 40, bx), [
                [Ut, I.value]
              ]),
              C(re, {
                variant: "primary",
                size: "sm",
                disabled: !I.value.trim() || K.value,
                onClick: j
              }, {
                default: h(() => [
                  b(f(K.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            V.value ? (a(), r("div", kx, f(V.value), 1)) : y("", !0),
            ge[6] || (ge[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || x.value) && !p.value && !_.value ? (a(), r("div", $x, [
          t("div", Cx, [
            w.value ? (a(), r("div", xx, [
              ge[8] || (ge[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", Sx, [
                t("div", Ix, f(w.value.name), 1),
                t("div", Ex, f(Pe(w.value.size)), 1)
              ])
            ])) : x.value ? (a(), r("div", Tx, [
              ge[10] || (ge[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", Px, [
                t("div", Rx, f(L(x.value)), 1),
                ge[9] || (ge[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            C(re, {
              variant: "ghost",
              size: "sm",
              onClick: ee
            }, {
              default: h(() => [...ge[11] || (ge[11] = [
                b(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          P.value ? (a(), r("div", Mx, [...ge[12] || (ge[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : D.value ? (a(), M(Yt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [D.value]
          }, null, 8, ["details"])) : z.value ? (a(), M(HC, {
            key: 2,
            "source-environment": J.value.sourceEnvironment,
            workflows: J.value.workflows,
            models: J.value.models,
            nodes: J.value.nodes,
            "git-branch": J.value.gitBranch,
            "git-commit": J.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          z.value ? (a(), M(gx, {
            key: 3,
            name: T.value.name,
            "onUpdate:name": ge[1] || (ge[1] = (Re) => T.value.name = Re),
            "model-strategy": T.value.modelStrategy,
            "onUpdate:modelStrategy": ge[2] || (ge[2] = (Re) => T.value.modelStrategy = Re),
            "torch-backend": T.value.torchBackend,
            "onUpdate:torchBackend": ge[3] || (ge[3] = (Re) => T.value.torchBackend = Re),
            "switch-after-import": T.value.switchAfterImport,
            "onUpdate:switchAfterImport": ge[4] || (ge[4] = (Re) => T.value.switchAfterImport = Re),
            "name-error": E.value,
            onValidateName: ne
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          T.value.modelStrategy === "skip" && ((Oe = z.value) != null && Oe.models_needing_download) ? (a(), M(Yt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${z.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", Dx, [
            C(re, {
              variant: "secondary",
              size: "md",
              onClick: ee
            }, {
              default: h(() => [...ge[13] || (ge[13] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(re, {
              variant: "primary",
              size: "md",
              disabled: !W.value,
              onClick: Y
            }, {
              default: h(() => [...ge[14] || (ge[14] = [
                b(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (a(), r("div", Lx, [
          t("p", Ox, [
            ge[15] || (ge[15] = b(" Importing environment ", -1)),
            t("strong", null, f(T.value.name), 1),
            ge[16] || (ge[16] = b("... ", -1))
          ]),
          C(Dn, {
            progress: R.value.progress,
            message: R.value.message,
            "current-phase": R.value.phase,
            variant: R.value.error ? "error" : "default",
            "show-steps": !0,
            steps: Z
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          R.value.error ? y("", !0) : (a(), r("p", Ax, " This may take several minutes. Please wait... ")),
          R.value.error ? (a(), r("div", Nx, [
            t("p", Ux, f(R.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), r("div", zx, [
          t("div", {
            class: Te(["complete-icon", S.value ? "success" : "error"])
          }, f(S.value ? "✓" : "✕"), 3),
          t("div", Fx, [
            t("div", Bx, f(S.value ? "Import Successful" : "Import Failed"), 1),
            t("div", Vx, f($.value), 1)
          ]),
          t("div", Wx, [
            C(re, {
              variant: "primary",
              size: "md",
              onClick: A
            }, {
              default: h(() => [...ge[17] || (ge[17] = [
                b(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Pr = /* @__PURE__ */ pe(Gx, [["__scopeId", "data-v-72cbc04e"]]), jx = /* @__PURE__ */ ve({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, n = k(!1);
    function l(i, c) {
      c && o("import-complete-switch", i);
    }
    return (i, c) => (a(), r(G, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: c[0] || (c[0] = (d) => n.value = !0)
          })
        ]),
        content: h(() => [
          C(Pr, { onImportComplete: l })
        ]),
        _: 1
      }),
      C(as, {
        show: n.value,
        title: "How Import Works",
        onClose: c[1] || (c[1] = (d) => n.value = !1)
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
}), Hx = /* @__PURE__ */ pe(jx, [["__scopeId", "data-v-e13bfe76"]]), mn = ro(), Kx = 5e3, ao = k([]), ca = k(!1), da = k(null);
let To = null;
async function vn(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Rr(e) {
  const s = N(
    () => ao.value.filter((p) => p.status === "running")
  ), o = N(
    () => ao.value.filter((p) => p.status === "deploying")
  ), n = N(
    () => ao.value.filter((p) => p.status === "stopped")
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
    return [...ao.value].sort(
      (_, S) => (p[_.status] ?? 5) - (p[S.status] ?? 5)
    );
  });
  async function c() {
    ca.value = !0, da.value = null;
    try {
      let p;
      if (!mn) {
        const _ = await vn("/v2/comfygit/deploy/instances");
        if (!_.ok)
          throw new Error(`Failed to fetch instances: ${_.status}`);
        p = await _.json();
      }
      ao.value = p.instances;
    } catch (p) {
      da.value = p instanceof Error ? p.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", p);
    } finally {
      ca.value = !1;
    }
  }
  function d(p, _) {
    if (p.provider === "custom" && p.worker_name) {
      const S = p.id.includes(":") ? p.id.split(":").slice(1).join(":") : p.id;
      return _ === "terminate" ? `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${S}` : `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${S}/${_}`;
    }
    return _ === "terminate" ? `/v2/comfygit/deploy/${p.provider}/${p.id}` : `/v2/comfygit/deploy/${p.provider}/${p.id}/${_}`;
  }
  async function u(p) {
    try {
      if (!mn) {
        const _ = d(p, "stop"), S = await vn(_, { method: "POST" });
        if (!S.ok) {
          const $ = await S.json();
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
      if (!mn) {
        const _ = d(p, "start"), S = await vn(_, { method: "POST" });
        if (!S.ok) {
          const $ = await S.json();
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
      if (!mn) {
        const _ = d(p, "terminate"), S = await vn(_, { method: "DELETE" });
        if (!S.ok) {
          const $ = await S.json();
          throw new Error($.message || "Failed to terminate instance");
        }
      }
      await c();
    } catch (_) {
      throw console.error("[useDeployInstances] terminateInstance error:", _), _;
    }
  }
  function g() {
    To || (To = window.setInterval(c, Kx));
  }
  function w() {
    To && (clearInterval(To), To = null);
  }
  return Ct(o, (p) => {
    p.length > 0 && g();
  }, { immediate: !0 }), e != null && e.autoStart && (c(), g()), {
    // State
    instances: ao,
    isLoading: ca,
    error: da,
    // Computed
    runningInstances: s,
    deployingInstances: o,
    stoppedInstances: n,
    liveInstanceCount: l,
    sortedInstances: i,
    // Actions
    refreshInstances: c,
    stopInstance: u,
    startInstance: m,
    terminateInstance: v,
    // Polling
    startPolling: g,
    stopPolling: w
  };
}
const qx = { class: "instance-header" }, Yx = { class: "provider-badge" }, Jx = { class: "instance-name" }, Xx = {
  key: 0,
  class: "spinner"
}, Qx = { class: "instance-details" }, Zx = {
  key: 0,
  class: "detail"
}, e3 = {
  key: 1,
  class: "detail instance-url"
}, t3 = {
  key: 2,
  class: "detail"
}, s3 = {
  key: 3,
  class: "detail"
}, o3 = {
  key: 4,
  class: "detail total-cost"
}, n3 = {
  key: 0,
  class: "deployment-progress"
}, a3 = { class: "progress-message" }, l3 = { class: "instance-actions" }, i3 = /* @__PURE__ */ ve({
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
    function d(u) {
      const m = Math.floor(u / 3600), v = Math.floor(u % 3600 / 60);
      return m > 0 ? `${m}h ${v}m` : `${v}m`;
    }
    return (u, m) => (a(), r("div", {
      class: Te(["instance-card", l.value])
    }, [
      t("div", qx, [
        t("span", Yx, f(o.value), 1),
        t("span", Jx, f(e.instance.name), 1),
        t("span", {
          class: Te(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (a(), r("span", Xx)) : y("", !0),
          b(" " + f(n.value), 1)
        ], 2)
      ]),
      t("div", Qx, [
        e.instance.gpu_type ? (a(), r("span", Zx, f(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (a(), r("span", e3, f(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (a(), r("span", t3, f(d(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (a(), r("span", s3, "$" + f(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (a(), r("span", o3, "$" + f(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (a(), r("div", n3, [
        t("div", a3, f(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (a(), M(qn, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", l3, [
        e.instance.status === "running" && e.instance.comfyui_url ? (a(), M(re, {
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
        e.instance.console_url && e.instance.provider !== "custom" ? (a(), M(re, {
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
        e.instance.status === "running" ? (a(), M(re, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[0] || (m[0] = (v) => u.$emit("stop", e.instance))
        }, {
          default: h(() => [...m[5] || (m[5] = [
            b(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        e.instance.status === "stopped" ? (a(), M(re, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[1] || (m[1] = (v) => u.$emit("start", e.instance))
        }, {
          default: h(() => [...m[6] || (m[6] = [
            b(" Start ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        C(re, {
          variant: "destructive",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: m[2] || (m[2] = (v) => u.$emit("terminate", e.instance))
        }, {
          default: h(() => [...m[7] || (m[7] = [
            b(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), r3 = /* @__PURE__ */ pe(i3, [["__scopeId", "data-v-746c3894"]]), c3 = { class: "instances-tab" }, d3 = { class: "instances-header" }, u3 = {
  key: 0,
  class: "loading-state"
}, f3 = {
  key: 1,
  class: "empty-state"
}, m3 = {
  key: 2,
  class: "instances-list"
}, v3 = /* @__PURE__ */ ve({
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
    return (n, l) => (a(), r("div", c3, [
      t("div", d3, [
        C(At, null, {
          default: h(() => [...l[4] || (l[4] = [
            b("Active Instances", -1)
          ])]),
          _: 1
        }),
        C(re, {
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
      e.isLoading && e.instances.length === 0 ? (a(), r("div", u3, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        b(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (a(), r("div", f3, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (a(), r("div", m3, [
        (a(!0), r(G, null, he(o.value, (i) => (a(), M(r3, {
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
}), p3 = /* @__PURE__ */ pe(v3, [["__scopeId", "data-v-ba614fc3"]]), g3 = { class: "remote-header" }, h3 = { class: "remote-info" }, y3 = { class: "remote-icon" }, w3 = { class: "remote-name" }, _3 = {
  key: 0,
  class: "default-badge"
}, b3 = {
  key: 1,
  class: "sync-badge"
}, k3 = {
  key: 0,
  class: "ahead"
}, $3 = {
  key: 1,
  class: "behind"
}, C3 = {
  key: 1,
  class: "synced"
}, x3 = ["href"], S3 = {
  key: 1,
  class: "remote-url-text"
}, I3 = { class: "remote-actions" }, E3 = /* @__PURE__ */ ve({
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
      class: Te(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", g3, [
        t("div", h3, [
          t("span", y3, f(o.value ? "🔗" : "🌐"), 1),
          t("span", w3, f(e.remote.name), 1),
          o.value ? (a(), r("span", _3, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), r("span", b3, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), r(G, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), r("span", k3, "↑" + f(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), r("span", $3, "↓" + f(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), r("span", C3, "✓ synced"))
          ])) : y("", !0)
        ]),
        n.value ? (a(), r("a", {
          key: 0,
          href: n.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: c[0] || (c[0] = rt(() => {
          }, ["stop"]))
        }, f(l.value), 9, x3)) : (a(), r("span", S3, f(l.value), 1))
      ]),
      t("div", I3, [
        C(re, {
          variant: "secondary",
          size: "xs",
          loading: e.isFetching,
          onClick: c[1] || (c[1] = (d) => i.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...c[4] || (c[4] = [
            b(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        e.syncStatus && e.syncStatus.ahead > 0 ? (a(), M(re, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: e.isPushing,
          onClick: c[2] || (c[2] = (d) => i.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            b(" Push ↑" + f(e.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : y("", !0),
        C(re, {
          variant: e.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: c[3] || (c[3] = (d) => i.$emit("select", e.remote.name))
        }, {
          default: h(() => [
            b(f(e.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), Mr = /* @__PURE__ */ pe(E3, [["__scopeId", "data-v-d687d161"]]), T3 = { class: "runpod-tab" }, P3 = { class: "api-key-card" }, R3 = { class: "api-key-row" }, M3 = { class: "api-key-input-wrapper" }, D3 = ["type", "disabled"], L3 = ["title"], O3 = { class: "status-icon" }, A3 = { class: "status-text" }, N3 = {
  key: 0,
  class: "credit-balance"
}, U3 = { class: "config-card" }, z3 = { class: "config-row" }, F3 = ["disabled"], B3 = {
  key: 0,
  value: ""
}, V3 = {
  key: 1,
  value: "",
  disabled: ""
}, W3 = ["value", "disabled"], G3 = { class: "config-row" }, j3 = {
  key: 0,
  class: "loading-inline"
}, H3 = { class: "no-volumes-state" }, K3 = { class: "no-volumes-text" }, q3 = ["value"], Y3 = { class: "config-row" }, J3 = ["disabled"], X3 = {
  key: 0,
  value: ""
}, Q3 = {
  key: 1,
  value: ""
}, Z3 = {
  key: 2,
  value: ""
}, e5 = ["value"], t5 = { class: "config-row" }, s5 = { class: "radio-group" }, o5 = { class: "radio-option" }, n5 = { class: "radio-label" }, a5 = { class: "radio-option disabled" }, l5 = { class: "radio-label" }, i5 = { class: "config-row" }, r5 = { class: "radio-group" }, c5 = { class: "radio-option" }, d5 = { class: "radio-label" }, u5 = { class: "radio-option disabled" }, f5 = { class: "radio-label" }, m5 = { class: "config-row" }, v5 = {
  key: 0,
  class: "loading-text"
}, p5 = {
  key: 1,
  class: "empty-remotes"
}, g5 = { class: "remotes-list" }, h5 = {
  key: 0,
  class: "sync-warning"
}, y5 = { class: "warning-content" }, w5 = { class: "remotes-footer" }, _5 = { class: "summary-card" }, b5 = {
  key: 0,
  class: "loading-text"
}, k5 = { class: "summary-row" }, $5 = { class: "summary-value" }, C5 = { class: "summary-row" }, x5 = { class: "summary-value" }, S5 = { class: "summary-row" }, I5 = { class: "summary-value" }, E5 = {
  key: 0,
  class: "summary-sub-row"
}, T5 = { class: "summary-sub-label" }, P5 = {
  key: 1,
  class: "summary-sub-row warning"
}, R5 = { class: "summary-sub-label" }, M5 = { class: "summary-row" }, D5 = { class: "summary-value" }, L5 = { class: "summary-row" }, O5 = { class: "summary-value" }, A5 = { class: "deployment-summary" }, N5 = { class: "summary-columns" }, U5 = { class: "summary-column" }, z5 = { class: "pricing-row" }, F5 = { class: "pricing-value" }, B5 = { class: "pricing-row" }, V5 = { class: "pricing-value" }, W5 = { class: "pricing-row" }, G5 = { class: "pricing-value" }, j5 = { class: "pricing-row total" }, H5 = { class: "pricing-value" }, K5 = { class: "summary-column" }, q5 = { class: "spec-row" }, Y5 = { class: "spec-row" }, J5 = {
  key: 0,
  class: "spec-row"
}, X5 = {
  key: 1,
  class: "spec-row spot-warning"
}, Q5 = {
  key: 4,
  class: "deploy-actions"
}, Z5 = { class: "progress-content" }, e8 = { class: "phase-indicator" }, t8 = { key: 0 }, s8 = { key: 1 }, o8 = { key: 2 }, n8 = {
  key: 3,
  class: "spinner"
}, a8 = { class: "phase-text" }, l8 = { class: "phase-name" }, i8 = { class: "phase-detail" }, r8 = {
  key: 0,
  class: "ready-actions"
}, c8 = { class: "console-link" }, d8 = ["href"], u8 = /* @__PURE__ */ ve({
  __name: "RunPodTab",
  emits: ["toast", "navigate", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getDeploySummary: n,
      testRunPodConnection: l,
      getNetworkVolumes: i,
      getRunPodGpuTypes: c,
      deployToRunPod: d,
      getDeploymentStatus: u,
      getStoredRunPodKey: m,
      clearRunPodKey: v,
      validateDeploy: g,
      getRemotes: w,
      getRemoteSyncStatus: p,
      fetchRemote: _,
      pushToRemote: S,
      getDataCenters: $
    } = at(), P = k(!1), D = k(""), I = k(!1), x = k(!1), K = k(null), V = k(null), z = k(""), T = k(""), E = k(""), R = k("SECURE"), Z = k("ON_DEMAND"), J = k("my-comfyui-deploy"), W = k([]), se = k({}), ee = k(!1), A = k(null), j = k(null), L = k(null), ne = k([]), Y = k(!1), de = k([]), $e = k(!1), Pe = k([]), Ge = k(!1), Le = k(null), Se = k(!1), Ie = k(!1), _e = k(null), ge = k(!1), Oe = k(null), Re = k(null), O = k(null), F = k(!1), ae = k(null), ie = k(!1), fe = k(!1), me = N(() => de.value.find((be) => be.id === T.value) || null), Ce = N(() => z.value ? de.value.filter((be) => be.data_center_id === z.value) : de.value), xe = N(() => Pe.value.filter((be) => be.available)), le = N(() => A.value && se.value[A.value] || null), ue = N(() => {
      if (!A.value) return null;
      const be = W.value.find((Q) => Q.name === A.value);
      return (be == null ? void 0 : be.fetch_url) || null;
    }), Ne = N(() => I.value && T.value && E.value && ue.value && !Ie.value && !F.value), Ee = (be) => {
      const Q = Pe.value.find((ht) => ht.id === E.value);
      if (!Q) return "0.00";
      if (be === "SECURE") return (Q.securePrice ?? 0).toFixed(2);
      if (be === "COMMUNITY") return (Q.communityPrice ?? 0).toFixed(2);
      const Ke = R.value === "SECURE";
      return be === "ON_DEMAND" ? Ke ? (Q.securePrice ?? 0).toFixed(2) : (Q.communityPrice ?? 0).toFixed(2) : Ke ? (Q.secureSpotPrice ?? 0).toFixed(2) : (Q.communitySpotPrice ?? 0).toFixed(2);
    }, te = N(() => {
      const be = Pe.value.find((ls) => ls.id === E.value), Q = de.value.find((ls) => ls.id === T.value);
      if (!be) return null;
      const Ke = R.value === "SECURE", ht = Z.value === "SPOT";
      let qt;
      ht ? qt = Ke ? be.secureSpotPrice ?? 0 : be.communitySpotPrice ?? 0 : qt = Ke ? be.securePrice ?? 0 : be.communityPrice ?? 0;
      const hs = Q ? Q.size_gb * 14e-5 : 0, ys = 4e-3;
      return {
        gpu: qt,
        volume: hs,
        container: ys,
        total: qt + hs + ys
      };
    });
    async function q() {
      await Ve(), await Promise.all([vt(), De()]);
    }
    async function De() {
      ee.value = !0;
      try {
        const be = await w();
        W.value = be.remotes, await Promise.all(
          be.remotes.map(async (Ke) => {
            const ht = await p(Ke.name);
            ht && (se.value[Ke.name] = ht);
          })
        );
        const Q = be.remotes.find((Ke) => Ke.is_default);
        Q ? A.value = Q.name : be.remotes.length > 0 && (A.value = be.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        ee.value = !1;
      }
    }
    async function we(be) {
      j.value = be;
      try {
        await _(be);
        const Q = await p(be);
        Q && (se.value[be] = Q), o("toast", `Fetched from ${be}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        j.value = null;
      }
    }
    async function ye(be) {
      L.value = be;
      try {
        await S(be, { force: !1 });
        const Q = await p(be);
        Q && (se.value[be] = Q), o("toast", `Pushed to ${be}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        L.value = null;
      }
    }
    function B(be) {
      A.value = be;
    }
    async function U() {
      if (D.value) {
        x.value = !0, K.value = null;
        try {
          const be = await l(D.value, !0);
          be.status === "success" ? (I.value = !0, V.value = be.credit_balance ?? null, K.value = { type: "success", message: be.message }, await q()) : K.value = { type: "error", message: be.message };
        } catch (be) {
          K.value = {
            type: "error",
            message: be instanceof Error ? be.message : "Connection test failed"
          };
        } finally {
          x.value = !1;
        }
      }
    }
    async function ce() {
      try {
        await v(), D.value = "", I.value = !1, K.value = null, V.value = null, ne.value = [], z.value = "", de.value = [], T.value = "", Pe.value = [], E.value = "", Le.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function Ve() {
      $e.value = !0, Y.value = !0;
      try {
        const be = await i();
        de.value = be.volumes;
        const Q = /* @__PURE__ */ new Map();
        for (const Ke of be.volumes)
          Ke.data_center_id && !Q.has(Ke.data_center_id) && Q.set(Ke.data_center_id, {
            id: Ke.data_center_id,
            name: Ke.data_center_name || Ke.data_center_id,
            available: !0
          });
        if (be.volumes.length === 0) {
          const Ke = await $();
          ne.value = Ke.data_centers;
        } else
          ne.value = Array.from(Q.values());
        if (de.value.length > 0) {
          const Ke = de.value[0];
          T.value = Ke.id, Ke.data_center_id && (z.value = Ke.data_center_id, await Qe(Ke.data_center_id));
        } else ne.value.length > 0 && (z.value = ne.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        $e.value = !1, Y.value = !1;
      }
    }
    async function Qe(be) {
      Ge.value = !0;
      try {
        const Q = await c(be);
        Pe.value = Q.gpu_types;
        const Ke = Pe.value.find((ht) => ht.available);
        Ke ? E.value = Ke.id : E.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        Ge.value = !1;
      }
    }
    Ct(z, async (be) => {
      if (!be || $e.value) return;
      const Q = de.value.find((Ke) => Ke.id === T.value);
      Q && Q.data_center_id !== be && (T.value = ""), await Qe(be);
    }), Ct(T, async (be) => {
      if (!be) {
        Pe.value = [], E.value = "";
        return;
      }
      if ($e.value) return;
      const Q = de.value.find((Ke) => Ke.id === be);
      Q && Q.data_center_id !== z.value ? z.value = Q.data_center_id : Q && await Qe(Q.data_center_id);
    });
    async function vt() {
      Se.value = !0;
      try {
        Le.value = await n();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        Se.value = !1;
      }
    }
    async function lt() {
      if (!(!E.value || !T.value)) {
        F.value = !0, _e.value = null;
        try {
          const be = await g();
          ae.value = be, be.can_export ? be.warnings.models_without_sources.length > 0 ? fe.value = !0 : await zt() : ie.value = !0;
        } catch (be) {
          _e.value = {
            status: "error",
            message: be instanceof Error ? be.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          F.value = !1;
        }
      }
    }
    async function ut() {
      fe.value = !1, await zt();
    }
    async function Mt() {
      try {
        const be = await g();
        ae.value = be;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function zt() {
      Ie.value = !0;
      try {
        let be;
        if (Z.value === "SPOT") {
          const Ke = Pe.value.find((ht) => ht.id === E.value);
          Ke && (be = R.value === "SECURE" ? Ke.secureSpotPrice : Ke.communitySpotPrice);
        }
        const Q = await d({
          gpu_type_id: E.value,
          pod_name: J.value || "my-comfyui-deploy",
          network_volume_id: T.value,
          cloud_type: R.value,
          pricing_type: Z.value,
          spot_bid: be,
          import_source: ue.value
        });
        _e.value = Q, Q.status === "success" && Q.pod_id ? (Oe.value = Q.pod_id, ge.value = !0, Kt(Q.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", Q.message, "error");
      } catch (be) {
        _e.value = {
          status: "error",
          message: be instanceof Error ? be.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        Ie.value = !1;
      }
    }
    function Kt(be) {
      Rs(be), O.value = window.setInterval(() => Rs(be), 3e3);
    }
    function Vs() {
      O.value && (clearInterval(O.value), O.value = null);
    }
    async function Rs(be) {
      try {
        const Q = await u(be);
        Re.value = Q, (Q.phase === "READY" || Q.phase === "ERROR" || Q.phase === "STOPPED") && (Vs(), Q.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (Q) {
        console.error("Failed to poll deployment status:", Q);
      }
    }
    function oo() {
      ge.value = !1, Vs(), Oe.value = null, Re.value = null;
    }
    function $o() {
      var be;
      (be = Re.value) != null && be.comfyui_url && window.open(Re.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function Co(be) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[be || ""] || "Initializing...";
    }
    function xo(be) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[be || ""] ?? 10;
    }
    return et(async () => {
      try {
        const be = await m(!0);
        be.has_key && be.key_preview && (D.value = `****${be.key_preview}`, be.valid ? (I.value = !0, V.value = be.credit_balance ?? null, K.value = { type: "success", message: "Connected to RunPod" }, await q()) : be.error && (K.value = { type: "error", message: be.error }));
      } catch {
      }
    }), so(() => {
      Vs();
    }), (be, Q) => {
      var Ke, ht, qt, hs, ys, ls;
      return a(), r(G, null, [
        t("div", T3, [
          C(it, { title: "RUNPOD API KEY" }, {
            default: h(() => [
              t("div", P3, [
                t("div", R3, [
                  t("div", M3, [
                    Ye(t("input", {
                      "onUpdate:modelValue": Q[0] || (Q[0] = (Ue) => D.value = Ue),
                      type: P.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: I.value
                    }, null, 8, D3), [
                      [Hn, D.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: Q[1] || (Q[1] = (Ue) => P.value = !P.value),
                      title: P.value ? "Hide key" : "Show key"
                    }, f(P.value ? "👁" : "👁‍🗨"), 9, L3)
                  ]),
                  I.value ? y("", !0) : (a(), M(re, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: x.value,
                    disabled: !D.value || x.value,
                    onClick: U
                  }, {
                    default: h(() => [...Q[16] || (Q[16] = [
                      b(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  I.value ? (a(), M(re, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: ce
                  }, {
                    default: h(() => [...Q[17] || (Q[17] = [
                      b(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                K.value ? (a(), r("div", {
                  key: 0,
                  class: Te(["connection-status", K.value.type])
                }, [
                  t("span", O3, f(K.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", A3, f(K.value.message), 1),
                  V.value !== null ? (a(), r("span", N3, " $" + f(V.value.toFixed(2)) + " credit ", 1)) : y("", !0)
                ], 2)) : y("", !0),
                Q[18] || (Q[18] = t("div", { class: "api-key-help" }, [
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
          I.value ? (a(), M(it, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: h(() => [
              t("div", U3, [
                t("div", z3, [
                  Q[19] || (Q[19] = t("label", { class: "config-label" }, "Region", -1)),
                  Ye(t("select", {
                    "onUpdate:modelValue": Q[2] || (Q[2] = (Ue) => z.value = Ue),
                    class: "config-select",
                    disabled: Y.value
                  }, [
                    Y.value ? (a(), r("option", B3, "Loading...")) : z.value ? y("", !0) : (a(), r("option", V3, "Select a region")),
                    (a(!0), r(G, null, he(ne.value, (Ue) => (a(), r("option", {
                      key: Ue.id,
                      value: Ue.id,
                      disabled: !Ue.available
                    }, f(Ue.id) + " (" + f(Ue.name) + ")" + f(Ue.available ? "" : " [Unavailable]"), 9, W3))), 128))
                  ], 8, F3), [
                    [gs, z.value]
                  ])
                ]),
                t("div", G3, [
                  Q[24] || (Q[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  $e.value ? (a(), r("div", j3, "Loading volumes...")) : Ce.value.length === 0 ? (a(), r(G, { key: 1 }, [
                    t("div", H3, [
                      Q[20] || (Q[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", K3, "No volumes in " + f(z.value || "this region"), 1)
                    ]),
                    Q[21] || (Q[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    Q[22] || (Q[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (a(), r(G, { key: 2 }, [
                    Ye(t("select", {
                      "onUpdate:modelValue": Q[3] || (Q[3] = (Ue) => T.value = Ue),
                      class: "config-select"
                    }, [
                      (a(!0), r(G, null, he(Ce.value, (Ue) => (a(), r("option", {
                        key: Ue.id,
                        value: Ue.id
                      }, f(Ue.name) + " (" + f(Ue.size_gb) + "GB) ", 9, q3))), 128))
                    ], 512), [
                      [gs, T.value]
                    ]),
                    Q[23] || (Q[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", Y3, [
                  Q[25] || (Q[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  Ye(t("select", {
                    "onUpdate:modelValue": Q[4] || (Q[4] = (Ue) => E.value = Ue),
                    class: "config-select",
                    disabled: Ge.value || !T.value
                  }, [
                    T.value ? Ge.value ? (a(), r("option", Q3, "Loading GPUs...")) : xe.value.length === 0 ? (a(), r("option", Z3, "No GPUs available in this region")) : y("", !0) : (a(), r("option", X3, "Select a volume first")),
                    (a(!0), r(G, null, he(xe.value, (Ue) => (a(), r("option", {
                      key: Ue.id,
                      value: Ue.id
                    }, f(Ue.displayName) + " (" + f(Ue.memoryInGb) + "GB) - $" + f(R.value === "SECURE" ? (Ue.securePrice ?? 0).toFixed(2) : (Ue.communityPrice ?? 0).toFixed(2)) + "/hr " + f(Ue.stockStatus ? `[${Ue.stockStatus}]` : ""), 9, e5))), 128))
                  ], 8, J3), [
                    [gs, E.value]
                  ])
                ]),
                t("div", t5, [
                  Q[26] || (Q[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", s5, [
                    t("label", o5, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[5] || (Q[5] = (Ue) => R.value = Ue),
                        value: "SECURE"
                      }, null, 512), [
                        [Xt, R.value]
                      ]),
                      t("span", n5, "Secure ($" + f(Ee("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", a5, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[6] || (Q[6] = (Ue) => R.value = Ue),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [Xt, R.value]
                      ]),
                      t("span", l5, "Community ($" + f(Ee("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", i5, [
                  Q[27] || (Q[27] = t("label", { class: "config-label" }, [
                    b(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", r5, [
                    t("label", c5, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[7] || (Q[7] = (Ue) => Z.value = Ue),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [Xt, Z.value]
                      ]),
                      t("span", d5, "On-Demand ($" + f(Ee("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", u5, [
                      Ye(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Q[8] || (Q[8] = (Ue) => Z.value = Ue),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [Xt, Z.value]
                      ]),
                      t("span", f5, "Spot ($" + f(Ee("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", m5, [
                  Q[28] || (Q[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  Ye(t("input", {
                    "onUpdate:modelValue": Q[9] || (Q[9] = (Ue) => J.value = Ue),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [Ut, J.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : y("", !0),
          I.value ? (a(), M(it, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: h(() => [
              ee.value ? (a(), r("div", v5, "Loading remotes...")) : W.value.length === 0 ? (a(), r("div", p5, [
                Q[30] || (Q[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                C(re, {
                  variant: "primary",
                  size: "xs",
                  onClick: Q[10] || (Q[10] = (Ue) => o("navigate", "remotes"))
                }, {
                  default: h(() => [...Q[29] || (Q[29] = [
                    b(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (a(), r(G, { key: 2 }, [
                t("div", g5, [
                  (a(!0), r(G, null, he(W.value, (Ue) => (a(), M(Mr, {
                    key: Ue.name,
                    remote: Ue,
                    "sync-status": se.value[Ue.name],
                    "is-selected": A.value === Ue.name,
                    "is-fetching": j.value === Ue.name,
                    "is-pushing": L.value === Ue.name,
                    onFetch: we,
                    onPush: ye,
                    onSelect: B
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                le.value && le.value.ahead > 0 ? (a(), r("div", h5, [
                  Q[31] || (Q[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", y5, [
                    t("strong", null, f(le.value.ahead) + " unpushed commit" + f(le.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + f(A.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  C(re, {
                    variant: "primary",
                    size: "xs",
                    loading: L.value === A.value,
                    onClick: Q[11] || (Q[11] = (Ue) => A.value && ye(A.value))
                  }, {
                    default: h(() => [
                      b(" Push to " + f(A.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", w5, [
                  C(re, {
                    variant: "link",
                    size: "xs",
                    onClick: Q[12] || (Q[12] = (Ue) => o("navigate", "remotes"))
                  }, {
                    default: h(() => [...Q[32] || (Q[32] = [
                      b(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          I.value ? (a(), M(it, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: h(() => [
              t("div", _5, [
                Se.value ? (a(), r("div", b5, "Loading environment summary...")) : Le.value ? (a(), r(G, { key: 1 }, [
                  t("div", k5, [
                    Q[33] || (Q[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", $5, f(Le.value.comfyui_version), 1)
                  ]),
                  t("div", C5, [
                    Q[34] || (Q[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", x5, f(Le.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", S5, [
                    Q[35] || (Q[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", I5, f(Le.value.model_count) + " models", 1)
                  ]),
                  Le.value.models_with_sources > 0 ? (a(), r("div", E5, [
                    t("span", T5, "└─ " + f(Le.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  Le.value.models_without_sources > 0 ? (a(), r("div", P5, [
                    t("span", R5, "└─ " + f(Le.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", M5, [
                    Q[36] || (Q[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", D5, f(Le.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", L5, [
                    Q[37] || (Q[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", O5, "~" + f(Le.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          I.value && te.value ? (a(), M(it, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: h(() => {
              var Ue, is;
              return [
                t("div", A5, [
                  t("div", N5, [
                    t("div", U5, [
                      Q[42] || (Q[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", z5, [
                        Q[38] || (Q[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", F5, "$" + f(te.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", B5, [
                        Q[39] || (Q[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", V5, "$" + f(te.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", W5, [
                        Q[40] || (Q[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", G5, "$" + f(te.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      Q[43] || (Q[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", j5, [
                        Q[41] || (Q[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", H5, "~$" + f(te.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", K5, [
                      Q[45] || (Q[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", q5, [
                        t("span", null, f(((Ue = Pe.value.find((oe) => oe.id === E.value)) == null ? void 0 : Ue.displayName) || "GPU") + " (" + f(((is = Pe.value.find((oe) => oe.id === E.value)) == null ? void 0 : is.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", Y5, [
                        t("span", null, "Region: " + f(z.value), 1)
                      ]),
                      me.value ? (a(), r("div", J5, [
                        t("span", null, "Volume: " + f(me.value.name), 1)
                      ])) : y("", !0),
                      Z.value === "SPOT" ? (a(), r("div", X5, [...Q[44] || (Q[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          I.value ? (a(), r("div", Q5, [
            C(re, {
              variant: "primary",
              size: "md",
              loading: F.value || Ie.value,
              disabled: !Ne.value,
              onClick: lt
            }, {
              default: h(() => [
                Q[46] || (Q[46] = t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  t("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                b(" " + f(F.value ? "Validating..." : Ie.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          _e.value ? (a(), M(it, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: h(() => [
              C(Tt, {
                status: _e.value.status === "success" ? "synced" : "broken"
              }, to({
                icon: h(() => [
                  b(f(_e.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  b(f(_e.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: h(() => [
                  b(f(_e.value.message), 1)
                ]),
                actions: h(() => [
                  C(re, {
                    variant: "ghost",
                    size: "xs",
                    onClick: Q[13] || (Q[13] = (Ue) => _e.value = null)
                  }, {
                    default: h(() => [...Q[47] || (Q[47] = [
                      b(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                _e.value.pod_id ? {
                  name: "details",
                  fn: h(() => [
                    C(ft, {
                      label: "Pod ID:",
                      value: _e.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        ge.value ? (a(), M(pt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((Ke = Re.value) == null ? void 0 : Ke.phase) === "READY" || ((ht = Re.value) == null ? void 0 : ht.phase) === "ERROR" || ((qt = Re.value) == null ? void 0 : qt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: oo
        }, to({
          body: h(() => {
            var Ue, is, oe, H, Ae, He, ot, mt, Dt, rs, Ws, Gs;
            return [
              t("div", Z5, [
                t("div", e8, [
                  t("div", {
                    class: Te(["phase-icon", (is = (Ue = Re.value) == null ? void 0 : Ue.phase) == null ? void 0 : is.toLowerCase()])
                  }, [
                    ((oe = Re.value) == null ? void 0 : oe.phase) === "READY" ? (a(), r("span", t8, "✓")) : ((H = Re.value) == null ? void 0 : H.phase) === "ERROR" ? (a(), r("span", s8, "✕")) : ((Ae = Re.value) == null ? void 0 : Ae.phase) === "STOPPED" ? (a(), r("span", o8, "○")) : (a(), r("span", n8, "⟳"))
                  ], 2),
                  t("div", a8, [
                    t("div", l8, f(Co((He = Re.value) == null ? void 0 : He.phase)), 1),
                    t("div", i8, f(((ot = Re.value) == null ? void 0 : ot.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                C(qn, {
                  progress: xo((mt = Re.value) == null ? void 0 : mt.phase),
                  variant: ((Dt = Re.value) == null ? void 0 : Dt.phase) === "ERROR" ? "error" : ((rs = Re.value) == null ? void 0 : rs.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((Ws = Re.value) == null ? void 0 : Ws.phase) === "READY" ? (a(), r("div", r8, [
                  C(re, {
                    variant: "primary",
                    size: "md",
                    onClick: $o
                  }, {
                    default: h(() => [...Q[48] || (Q[48] = [
                      b(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", c8, [
                  (Gs = Re.value) != null && Gs.console_url ? (a(), r("a", {
                    key: 0,
                    href: Re.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, d8)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((hs = Re.value) == null ? void 0 : hs.phase) === "READY" || ((ys = Re.value) == null ? void 0 : ys.phase) === "ERROR" || ((ls = Re.value) == null ? void 0 : ls.phase) === "STOPPED" ? {
            name: "footer",
            fn: h(() => [
              C(re, {
                variant: "ghost",
                size: "xs",
                onClick: oo
              }, {
                default: h(() => [...Q[49] || (Q[49] = [
                  b(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        ie.value && ae.value ? (a(), M(Er, {
          key: 1,
          issues: ae.value.blocking_issues,
          onClose: Q[14] || (Q[14] = (Ue) => ie.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        fe.value && ae.value ? (a(), M(Tr, {
          key: 2,
          models: ae.value.warnings.models_without_sources,
          onConfirm: ut,
          onCancel: Q[15] || (Q[15] = (Ue) => fe.value = !1),
          onRevalidate: Mt
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), f8 = /* @__PURE__ */ pe(u8, [["__scopeId", "data-v-522cd4d9"]]), m8 = { class: "worker-header" }, v8 = { class: "worker-status" }, p8 = { class: "worker-name" }, g8 = { class: "worker-actions" }, h8 = { class: "worker-details" }, y8 = { class: "detail-item" }, w8 = { class: "detail-value" }, _8 = {
  key: 0,
  class: "detail-item"
}, b8 = { class: "detail-value" }, k8 = {
  key: 1,
  class: "detail-item"
}, $8 = { class: "detail-value mode-badge" }, C8 = {
  key: 0,
  class: "worker-stats"
}, x8 = {
  key: 0,
  class: "stat-item"
}, S8 = { key: 0 }, I8 = {
  key: 1,
  class: "worker-stats offline"
}, E8 = /* @__PURE__ */ ve({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (s, o) => (a(), r("div", {
      class: Te(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", m8, [
        t("div", v8, [
          t("span", {
            class: Te(["status-dot", e.worker.status])
          }, null, 2),
          t("span", p8, f(e.worker.name), 1)
        ]),
        t("div", g8, [
          e.worker.status === "online" ? (a(), M(re, {
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
          C(re, {
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
      t("div", h8, [
        t("span", y8, [
          t("span", w8, f(e.worker.host) + ":" + f(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (a(), r("span", _8, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", b8, f(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (a(), r("span", k8, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", $8, f(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (a(), r("div", C8, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (a(), r("span", x8, [
          b(" • " + f(e.worker.instance_count) + " instance" + f(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (a(), r("span", S8, "(" + f(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (a(), r("div", I8, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), T8 = /* @__PURE__ */ pe(E8, [["__scopeId", "data-v-b1be7134"]]), P8 = { class: "add-worker-content" }, R8 = { class: "manual-form" }, M8 = { class: "form-row" }, D8 = { class: "form-row-inline" }, L8 = { class: "form-field flex-2" }, O8 = { class: "form-field flex-1" }, A8 = { class: "form-row" }, N8 = { class: "api-key-wrapper" }, U8 = ["type"], z8 = { class: "result-icon" }, F8 = { class: "result-content" }, B8 = { class: "result-message" }, V8 = {
  key: 0,
  class: "result-detail"
}, W8 = { class: "modal-actions" }, G8 = /* @__PURE__ */ ve({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = at(), l = Bs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), i = k(!1), c = k(!1), d = k(!1), u = k(null), m = N(() => l.host && l.port && l.apiKey), v = N(() => l.name && l.host && l.port && l.apiKey);
    async function g() {
      if (m.value) {
        c.value = !0, u.value = null;
        try {
          const p = await n({
            host: l.host,
            port: l.port,
            api_key: l.apiKey
          });
          p.status === "success" ? (u.value = {
            type: "success",
            message: p.message,
            gpu_info: p.gpu_info
          }, !l.name && p.gpu_info && (l.name = `worker-${l.host.split(".").pop()}`)) : u.value = {
            type: "error",
            message: p.message
          };
        } catch (p) {
          u.value = {
            type: "error",
            message: p instanceof Error ? p.message : "Connection test failed"
          };
        } finally {
          c.value = !1;
        }
      }
    }
    function w() {
      v.value && (d.value = !0, o("add", {
        name: l.name,
        host: l.host,
        port: l.port,
        api_key: l.apiKey
      }));
    }
    return (p, _) => (a(), M(pt, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: _[5] || (_[5] = (S) => p.$emit("close"))
    }, {
      body: h(() => [
        t("div", P8, [
          t("div", R8, [
            t("div", M8, [
              _[6] || (_[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              Ye(t("input", {
                "onUpdate:modelValue": _[0] || (_[0] = (S) => l.name = S),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [Ut, l.name]
              ])
            ]),
            t("div", D8, [
              t("div", L8, [
                _[7] || (_[7] = t("label", { class: "form-label" }, "Host", -1)),
                Ye(t("input", {
                  "onUpdate:modelValue": _[1] || (_[1] = (S) => l.host = S),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [Ut, l.host]
                ])
              ]),
              t("div", O8, [
                _[8] || (_[8] = t("label", { class: "form-label" }, "Port", -1)),
                Ye(t("input", {
                  "onUpdate:modelValue": _[2] || (_[2] = (S) => l.port = S),
                  type: "number",
                  class: "form-input",
                  placeholder: "9090"
                }, null, 512), [
                  [
                    Ut,
                    l.port,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ]),
            t("div", A8, [
              _[9] || (_[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", N8, [
                Ye(t("input", {
                  "onUpdate:modelValue": _[3] || (_[3] = (S) => l.apiKey = S),
                  type: i.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, U8), [
                  [Hn, l.apiKey]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: _[4] || (_[4] = (S) => i.value = !i.value),
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
            u.value ? (a(), r("div", {
              key: 0,
              class: Te(["test-result", u.value.type])
            }, [
              t("span", z8, f(u.value.type === "success" ? "✓" : "✕"), 1),
              t("div", F8, [
                t("span", B8, f(u.value.message), 1),
                u.value.gpu_info ? (a(), r("span", V8, "GPU: " + f(u.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        t("div", W8, [
          C(re, {
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
          C(re, {
            variant: "primary",
            size: "sm",
            loading: d.value,
            disabled: !v.value || d.value,
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
}), j8 = /* @__PURE__ */ pe(G8, [["__scopeId", "data-v-07a00732"]]), H8 = { class: "discovered-content" }, K8 = {
  key: 0,
  class: "workers-list"
}, q8 = { class: "worker-info" }, Y8 = { class: "worker-name" }, J8 = { class: "worker-address" }, X8 = {
  key: 0,
  class: "worker-gpu"
}, Q8 = {
  key: 1,
  class: "empty-state"
}, Z8 = {
  key: 2,
  class: "api-key-section"
}, eS = { class: "selected-worker" }, tS = { class: "selected-name" }, sS = { class: "selected-address" }, oS = { class: "form-row" }, nS = { class: "api-key-wrapper" }, aS = ["type"], lS = { class: "result-icon" }, iS = { class: "result-message" }, rS = { class: "modal-actions" }, cS = /* @__PURE__ */ ve({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: n } = at(), l = k(null), i = k(""), c = k(!1), d = k(!1), u = k(null), m = k(null);
    async function v(w) {
      var p;
      l.value = w, i.value = "", m.value = null, await Et(), (p = u.value) == null || p.focus();
    }
    async function g() {
      if (!(!l.value || !i.value)) {
        d.value = !0, m.value = null;
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
          d.value = !1;
        }
      }
    }
    return (w, p) => (a(), M(pt, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (_) => w.$emit("close"))
    }, {
      body: h(() => [
        t("div", H8, [
          e.workers.length > 0 ? (a(), r("div", K8, [
            (a(!0), r(G, null, he(e.workers, (_) => (a(), r("div", {
              key: `${_.host}:${_.port}`,
              class: "worker-item"
            }, [
              t("div", q8, [
                t("span", Y8, f(_.name), 1),
                t("span", J8, f(_.host) + ":" + f(_.port), 1),
                _.gpu_info ? (a(), r("span", X8, f(_.gpu_info), 1)) : y("", !0)
              ]),
              C(re, {
                variant: "primary",
                size: "xs",
                onClick: (S) => v(_)
              }, {
                default: h(() => [...p[4] || (p[4] = [
                  b(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (a(), r("div", Q8, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              b("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (a(), r("div", Z8, [
            t("div", eS, [
              p[6] || (p[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", tS, f(l.value.name), 1),
              t("span", sS, "(" + f(l.value.host) + ":" + f(l.value.port) + ")", 1)
            ]),
            t("div", oS, [
              p[7] || (p[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", nS, [
                Ye(t("input", {
                  ref_key: "apiKeyInput",
                  ref: u,
                  "onUpdate:modelValue": p[0] || (p[0] = (_) => i.value = _),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: Zt(g, ["enter"])
                }, null, 40, aS), [
                  [Hn, i.value]
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
              class: Te(["test-result", m.value.type])
            }, [
              t("span", lS, f(m.value.type === "success" ? "✓" : "✕"), 1),
              t("span", iS, f(m.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", rS, [
          l.value ? (a(), M(re, {
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
          l.value ? (a(), M(re, {
            key: 1,
            variant: "primary",
            size: "sm",
            loading: d.value,
            disabled: !i.value || d.value,
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
}), dS = /* @__PURE__ */ pe(cS, [["__scopeId", "data-v-5a3e40a4"]]), uS = { class: "deploy-content" }, fS = { class: "section" }, mS = {
  key: 0,
  class: "loading-text"
}, vS = {
  key: 1,
  class: "empty-remotes"
}, pS = {
  key: 2,
  class: "remotes-list"
}, gS = { class: "section" }, hS = { class: "mode-options" }, yS = { class: "mode-option" }, wS = ["disabled"], _S = { class: "mode-option" }, bS = { class: "section" }, kS = {
  key: 0,
  class: "section"
}, $S = { class: "summary-row" }, CS = {
  key: 1,
  class: "sync-warning"
}, xS = { class: "warning-content" }, SS = { class: "modal-actions" }, IS = /* @__PURE__ */ ve({
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
      pushToRemote: d,
      getDeploySummary: u,
      deployToWorker: m
    } = at(), v = k([]), g = k({}), w = k(!1), p = k(null), _ = k(null), S = k(null), $ = k(o.worker.mode || "native"), P = k(""), D = k(null), I = k(!1), x = N(() => p.value && g.value[p.value] || null), K = N(() => {
      if (!p.value) return null;
      const W = v.value.find((se) => se.name === p.value);
      return (W == null ? void 0 : W.fetch_url) || null;
    }), V = N(() => K.value && !I.value);
    async function z() {
      w.value = !0;
      try {
        const W = await l();
        v.value = W.remotes, await Promise.all(
          W.remotes.map(async (ee) => {
            const A = await i(ee.name);
            A && (g.value[ee.name] = A);
          })
        );
        const se = W.remotes.find((ee) => ee.is_default);
        se ? p.value = se.name : W.remotes.length > 0 && (p.value = W.remotes[0].name);
      } catch {
        n("toast", "Failed to load remotes", "error");
      } finally {
        w.value = !1;
      }
    }
    async function T() {
      try {
        D.value = await u();
      } catch {
      }
    }
    async function E(W) {
      _.value = W;
      try {
        await c(W);
        const se = await i(W);
        se && (g.value[W] = se), n("toast", `Fetched from ${W}`, "success");
      } catch {
        n("toast", "Fetch failed", "error");
      } finally {
        _.value = null;
      }
    }
    async function R(W) {
      S.value = W;
      try {
        await d(W, { force: !1 });
        const se = await i(W);
        se && (g.value[W] = se), n("toast", `Pushed to ${W}`, "success");
      } catch {
        n("toast", "Push failed", "error");
      } finally {
        S.value = null;
      }
    }
    function Z(W) {
      p.value = W;
    }
    async function J() {
      if (K.value) {
        I.value = !0;
        try {
          const W = await m(o.worker.name, {
            import_source: K.value,
            mode: $.value,
            name: P.value || void 0
          });
          W.id ? (n("toast", `Deployment started: ${W.name || W.id}`, "success"), n("deployed")) : W.status === "error" ? n("toast", W.message || "Deployment failed", "error") : n("toast", "Unexpected response from worker", "error");
        } catch (W) {
          n("toast", W instanceof Error ? W.message : "Deployment failed", "error");
        } finally {
          I.value = !1;
        }
      }
    }
    return et(() => {
      z(), T();
    }), (W, se) => (a(), M(pt, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: se[5] || (se[5] = (ee) => W.$emit("close"))
    }, {
      body: h(() => [
        t("div", uS, [
          t("div", fS, [
            se[7] || (se[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            w.value ? (a(), r("div", mS, "Loading remotes...")) : v.value.length === 0 ? (a(), r("div", vS, [...se[6] || (se[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (a(), r("div", pS, [
              (a(!0), r(G, null, he(v.value, (ee) => (a(), M(Mr, {
                key: ee.name,
                remote: ee,
                "sync-status": g.value[ee.name],
                "is-selected": p.value === ee.name,
                "is-fetching": _.value === ee.name,
                "is-pushing": S.value === ee.name,
                onFetch: E,
                onPush: R,
                onSelect: Z
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", gS, [
            se[10] || (se[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", hS, [
              t("label", yS, [
                Ye(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": se[0] || (se[0] = (ee) => $.value = ee),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, wS), [
                  [Xt, $.value]
                ]),
                se[8] || (se[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", _S, [
                Ye(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": se[1] || (se[1] = (ee) => $.value = ee),
                  value: "native"
                }, null, 512), [
                  [Xt, $.value]
                ]),
                se[9] || (se[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", bS, [
            se[11] || (se[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            Ye(t("input", {
              "onUpdate:modelValue": se[2] || (se[2] = (ee) => P.value = ee),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [Ut, P.value]
            ])
          ]),
          D.value ? (a(), r("div", kS, [
            se[12] || (se[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", $S, " ComfyUI: " + f(D.value.comfyui_version) + " • " + f(D.value.node_count) + " nodes • " + f(D.value.model_count) + " models • " + f(D.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          x.value && x.value.ahead > 0 ? (a(), r("div", CS, [
            se[14] || (se[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", xS, [
              t("strong", null, f(x.value.ahead) + " unpushed commit" + f(x.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + f(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            C(re, {
              variant: "primary",
              size: "xs",
              loading: S.value === p.value,
              onClick: se[3] || (se[3] = (ee) => p.value && R(p.value))
            }, {
              default: h(() => [...se[13] || (se[13] = [
                b(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        t("div", SS, [
          C(re, {
            variant: "ghost",
            size: "sm",
            onClick: se[4] || (se[4] = (ee) => W.$emit("close"))
          }, {
            default: h(() => [...se[15] || (se[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          C(re, {
            variant: "primary",
            size: "sm",
            loading: I.value,
            disabled: !V.value || I.value,
            onClick: J
          }, {
            default: h(() => [...se[16] || (se[16] = [
              b(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), ES = /* @__PURE__ */ pe(IS, [["__scopeId", "data-v-c12720d3"]]), TS = { class: "custom-tab" }, PS = { class: "section-header" }, RS = { class: "section-actions" }, MS = { class: "workers-content" }, DS = {
  key: 0,
  class: "loading-state"
}, LS = {
  key: 1,
  class: "empty-state"
}, OS = {
  key: 2,
  class: "workers-list"
}, AS = { class: "scan-icon" }, NS = { class: "scan-message" }, US = /* @__PURE__ */ ve({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: n,
      addCustomWorker: l,
      removeCustomWorker: i,
      scanForWorkers: c
    } = at(), d = k([]), u = k([]), m = k(!1), v = k(!1), g = k(null), w = k(!1), p = k(!1), _ = k(null), S = k(null);
    async function $() {
      m.value = !0;
      try {
        const z = await n();
        d.value = z.workers;
      } catch (z) {
        o("toast", z instanceof Error ? z.message : "Failed to load workers", "error");
      } finally {
        m.value = !1;
      }
    }
    async function P() {
      v.value = !0, S.value = null;
      try {
        const z = await c(), T = z.discovered.filter(
          (E) => !d.value.some((R) => R.host === E.host && R.port === E.port)
        );
        u.value = T, T.length > 0 ? p.value = !0 : z.discovered.length > 0 ? S.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : S.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (z) {
        o("toast", z instanceof Error ? z.message : "Network scan failed", "error");
      } finally {
        v.value = !1;
      }
    }
    async function D(z) {
      try {
        await l(z), o("toast", `Worker '${z.name}' added`, "success"), w.value = !1, await $();
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to add worker", "error");
      }
    }
    async function I(z) {
      try {
        await l(z), o("toast", `Worker '${z.name}' added`, "success"), p.value = !1, await $();
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to add worker", "error");
      }
    }
    async function x(z) {
      g.value = z;
      try {
        await i(z), o("toast", `Worker '${z}' removed`, "success"), await $();
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to remove worker", "error");
      } finally {
        g.value = null;
      }
    }
    function K(z) {
      _.value = z;
    }
    function V() {
      _.value = null, o("deployed");
    }
    return et(() => {
      $();
    }), (z, T) => (a(), r("div", TS, [
      t("div", PS, [
        T[8] || (T[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", RS, [
          C(re, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: P
          }, {
            default: h(() => [...T[6] || (T[6] = [
              b(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          C(re, {
            variant: "secondary",
            size: "xs",
            onClick: T[0] || (T[0] = (E) => w.value = !0)
          }, {
            default: h(() => [...T[7] || (T[7] = [
              b(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", MS, [
        m.value && d.value.length === 0 ? (a(), r("div", DS, [...T[9] || (T[9] = [
          t("span", { class: "spinner" }, null, -1),
          b(" Loading workers... ", -1)
        ])])) : d.value.length === 0 ? (a(), r("div", LS, [...T[10] || (T[10] = [
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
        ])])) : (a(), r("div", OS, [
          (a(!0), r(G, null, he(d.value, (E) => (a(), M(T8, {
            key: E.name,
            worker: E,
            "is-action-loading": g.value === E.name,
            onDeploy: K,
            onRemove: x
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      S.value ? (a(), r("div", {
        key: 0,
        class: Te(["scan-result", S.value.type])
      }, [
        t("span", AS, f(S.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", NS, f(S.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: T[1] || (T[1] = (E) => S.value = null)
        }, "×")
      ], 2)) : y("", !0),
      p.value ? (a(), M(dS, {
        key: 1,
        workers: u.value,
        onClose: T[2] || (T[2] = (E) => p.value = !1),
        onAdd: I
      }, null, 8, ["workers"])) : y("", !0),
      w.value ? (a(), M(j8, {
        key: 2,
        onClose: T[3] || (T[3] = (E) => w.value = !1),
        onAdd: D
      })) : y("", !0),
      _.value ? (a(), M(ES, {
        key: 3,
        worker: _.value,
        onClose: T[4] || (T[4] = (E) => _.value = null),
        onToast: T[5] || (T[5] = (E, R) => o("toast", E, R)),
        onDeployed: V
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), zS = /* @__PURE__ */ pe(US, [["__scopeId", "data-v-1637dead"]]), ua = "ComfyGit.Deploy.GitHubPAT";
function Dr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function FS(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function BS() {
  function e() {
    try {
      return localStorage.getItem(ua);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(ua, l);
    } catch (i) {
      console.error("[useGitAuth] Failed to save token:", i);
    }
  }
  function o() {
    try {
      localStorage.removeItem(ua);
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
    isRemoteSsh: Dr,
    isRemoteHttps: FS
  };
}
const VS = { class: "settings-content" }, WS = { class: "settings-section" }, GS = {
  key: 0,
  class: "ssh-warning"
}, jS = { class: "form-row" }, HS = { class: "token-wrapper" }, KS = ["type"], qS = { class: "result-icon" }, YS = { class: "result-message" }, JS = { class: "token-actions" }, XS = /* @__PURE__ */ ve({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: n, setToken: l, clearToken: i, hasToken: c } = BS(), { getRemotes: d, testGitAuth: u } = at(), m = k(""), v = k(!1), g = k(!1), w = k(null), p = k(!1), _ = N(() => c());
    et(async () => {
      var I;
      const D = n();
      D && (m.value = D);
      try {
        const K = (I = (await d()).remotes) == null ? void 0 : I.find((V) => V.name === "origin");
        K && Dr(K.url) && (p.value = !0);
      } catch {
      }
    });
    async function S() {
      if (m.value) {
        g.value = !0, w.value = null;
        try {
          const D = await u(m.value);
          w.value = {
            type: D.status === "success" ? "success" : "error",
            message: D.message
          };
        } catch (D) {
          w.value = {
            type: "error",
            message: D instanceof Error ? D.message : "Connection test failed"
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
    return (D, I) => (a(), M(pt, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: I[2] || (I[2] = (x) => D.$emit("close"))
    }, {
      body: h(() => [
        t("div", VS, [
          t("div", WS, [
            I[8] || (I[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            I[9] || (I[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (a(), r("div", GS, [...I[3] || (I[3] = [
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
            t("div", jS, [
              I[4] || (I[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", HS, [
                Ye(t("input", {
                  "onUpdate:modelValue": I[0] || (I[0] = (x) => m.value = x),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, KS), [
                  [Hn, m.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: I[1] || (I[1] = (x) => v.value = !v.value)
                }, f(v.value ? "Hide" : "Show"), 1)
              ]),
              I[5] || (I[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            w.value ? (a(), r("div", {
              key: 1,
              class: Te(["test-result", w.value.type])
            }, [
              t("span", qS, f(w.value.type === "success" ? "✓" : "✕"), 1),
              t("span", YS, f(w.value.message), 1)
            ], 2)) : y("", !0),
            t("div", JS, [
              C(re, {
                variant: "ghost",
                size: "sm",
                loading: g.value,
                disabled: !m.value || g.value,
                onClick: S
              }, {
                default: h(() => [...I[6] || (I[6] = [
                  b(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              _.value ? (a(), M(re, {
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
        C(re, {
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
}), QS = /* @__PURE__ */ pe(XS, [["__scopeId", "data-v-b21588ad"]]), ZS = /* @__PURE__ */ ve({
  __name: "DeploySection",
  emits: ["toast", "navigate"],
  setup(e, { emit: s }) {
    const o = s, {
      instances: n,
      isLoading: l,
      liveInstanceCount: i,
      refreshInstances: c,
      stopInstance: d,
      startInstance: u,
      terminateInstance: m,
      startPolling: v,
      stopPolling: g
    } = Rr(), w = k(!1), p = k(!1), _ = k("instances"), S = k(null), $ = k(null), P = N(() => [
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
    async function D(z) {
      S.value = z.id;
      try {
        await d(z), o("toast", "Instance stopped", "success");
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to stop instance", "error");
      } finally {
        S.value = null;
      }
    }
    async function I(z) {
      S.value = z.id;
      try {
        await u(z), o("toast", "Instance starting...", "success");
      } catch (T) {
        o("toast", T instanceof Error ? T.message : "Failed to start instance", "error");
      } finally {
        S.value = null;
      }
    }
    function x(z) {
      $.value = z;
    }
    async function K() {
      const z = $.value;
      if (z) {
        $.value = null, S.value = z.id;
        try {
          await m(z), o("toast", "Instance terminated", "success");
        } catch (T) {
          o("toast", T instanceof Error ? T.message : "Failed to terminate instance", "error");
        } finally {
          S.value = null;
        }
      }
    }
    async function V() {
      await c(), _.value = "instances";
    }
    return et(() => {
      c(), v();
    }), so(() => {
      g();
    }), (z, T) => (a(), r(G, null, [
      C(Pt, null, {
        header: h(() => [
          C(Rt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: T[1] || (T[1] = (E) => w.value = !0)
          }, {
            actions: h(() => [
              C(re, {
                variant: "ghost",
                size: "xs",
                onClick: T[0] || (T[0] = (E) => p.value = !0)
              }, {
                default: h(() => [...T[10] || (T[10] = [
                  b(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          C($r, {
            modelValue: _.value,
            "onUpdate:modelValue": T[2] || (T[2] = (E) => _.value = E),
            tabs: P.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: h(() => [
          _.value === "instances" ? (a(), M(p3, {
            key: 0,
            instances: We(n),
            "is-loading": We(l),
            "action-loading-id": S.value,
            onRefresh: We(c),
            onStop: D,
            onStart: I,
            onTerminate: x
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          _.value === "runpod" ? (a(), M(f8, {
            key: 1,
            onToast: T[3] || (T[3] = (E, R) => o("toast", E, R)),
            onNavigate: T[4] || (T[4] = (E) => o("navigate", E)),
            onDeployed: V
          })) : y("", !0),
          _.value === "custom" ? (a(), M(zS, {
            key: 2,
            onToast: T[5] || (T[5] = (E, R) => o("toast", E, R)),
            onDeployed: V
          })) : y("", !0)
        ]),
        _: 1
      }),
      $.value ? (a(), M(Qa, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${$.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: K,
        onCancel: T[6] || (T[6] = (E) => $.value = null)
      }, null, 8, ["message"])) : y("", !0),
      C(as, {
        show: w.value,
        title: "Deploy to Cloud",
        onClose: T[7] || (T[7] = (E) => w.value = !1)
      }, {
        content: h(() => [...T[11] || (T[11] = [
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
      p.value ? (a(), M(QS, {
        key: 1,
        onClose: T[8] || (T[8] = (E) => p.value = !1),
        onSaved: T[9] || (T[9] = (E) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), e4 = /* @__PURE__ */ pe(ZS, [["__scopeId", "data-v-d4e32a10"]]), t4 = { class: "header-info" }, s4 = { class: "commit-hash" }, o4 = {
  key: 0,
  class: "commit-refs"
}, n4 = { class: "commit-message" }, a4 = { class: "commit-date" }, l4 = {
  key: 0,
  class: "loading"
}, i4 = {
  key: 1,
  class: "changes-section"
}, r4 = { class: "stats-row" }, c4 = { class: "stat" }, d4 = { class: "stat insertions" }, u4 = { class: "stat deletions" }, f4 = {
  key: 0,
  class: "change-group"
}, m4 = {
  key: 1,
  class: "change-group"
}, v4 = {
  key: 0,
  class: "version"
}, p4 = {
  key: 2,
  class: "change-group"
}, g4 = { class: "change-item" }, h4 = /* @__PURE__ */ ve({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = at(), n = k(null), l = k(!0), i = N(() => {
      if (!n.value) return !1;
      const d = n.value.changes.workflows;
      return d.added.length > 0 || d.modified.length > 0 || d.deleted.length > 0;
    }), c = N(() => {
      if (!n.value) return !1;
      const d = n.value.changes.nodes;
      return d.added.length > 0 || d.removed.length > 0;
    });
    return et(async () => {
      try {
        n.value = await o(s.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (d, u) => (a(), M(pt, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (m) => d.$emit("close"))
    }, {
      header: h(() => {
        var m, v, g, w;
        return [
          t("div", t4, [
            u[4] || (u[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", s4, f(((m = n.value) == null ? void 0 : m.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (w = (g = n.value) == null ? void 0 : g.refs) != null && w.length ? (a(), r("span", o4, [
              (a(!0), r(G, null, he(n.value.refs, (p) => (a(), r("span", {
                key: p,
                class: "ref-badge"
              }, f(p), 1))), 128))
            ])) : y("", !0)
          ]),
          C(Me, {
            variant: "ghost",
            size: "sm",
            onClick: u[0] || (u[0] = (p) => d.$emit("close"))
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
        ];
      }),
      body: h(() => {
        var m, v;
        return [
          t("div", n4, f(((m = n.value) == null ? void 0 : m.message) || e.commit.message), 1),
          t("div", a4, f(((v = n.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), r("div", l4, "Loading details...")) : n.value ? (a(), r("div", i4, [
            t("div", r4, [
              t("span", c4, f(n.value.stats.files_changed) + " files", 1),
              t("span", d4, "+" + f(n.value.stats.insertions), 1),
              t("span", u4, "-" + f(n.value.stats.deletions), 1)
            ]),
            i.value ? (a(), r("div", f4, [
              C(Vo, { variant: "section" }, {
                default: h(() => [...u[6] || (u[6] = [
                  b("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(G, null, he(n.value.changes.workflows.added, (g) => (a(), r("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                u[7] || (u[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(G, null, he(n.value.changes.workflows.modified, (g) => (a(), r("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                u[8] || (u[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, f(g), 1)
              ]))), 128)),
              (a(!0), r(G, null, he(n.value.changes.workflows.deleted, (g) => (a(), r("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                u[9] || (u[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (a(), r("div", m4, [
              C(Vo, { variant: "section" }, {
                default: h(() => [...u[10] || (u[10] = [
                  b("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), r(G, null, he(n.value.changes.nodes.added, (g) => (a(), r("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                u[11] || (u[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, f(g.name), 1),
                g.version ? (a(), r("span", v4, "(" + f(g.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), r(G, null, he(n.value.changes.nodes.removed, (g) => (a(), r("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                u[12] || (u[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, f(g.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), r("div", p4, [
              C(Vo, { variant: "section" }, {
                default: h(() => [...u[13] || (u[13] = [
                  b("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", g4, [
                u[14] || (u[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, f(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        C(Me, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (m) => d.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...u[15] || (u[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        C(Me, {
          variant: "primary",
          onClick: u[2] || (u[2] = (m) => d.$emit("checkout", e.commit))
        }, {
          default: h(() => [...u[16] || (u[16] = [
            b(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), y4 = /* @__PURE__ */ pe(h4, [["__scopeId", "data-v-d256ff6d"]]), w4 = { class: "base-textarea-wrapper" }, _4 = ["value", "rows", "placeholder", "disabled", "maxlength"], b4 = {
  key: 0,
  class: "base-textarea-count"
}, k4 = /* @__PURE__ */ ve({
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
    return (i, c) => (a(), r("div", w4, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (d) => i.$emit("update:modelValue", d.target.value)),
        onKeydown: [
          c[1] || (c[1] = Zt(rt((d) => i.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = Zt(rt((d) => i.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Zt(l, ["enter"])
        ]
      }, null, 40, _4),
      e.showCharCount && e.maxLength ? (a(), r("div", b4, f(e.modelValue.length) + " / " + f(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), Yl = /* @__PURE__ */ pe(k4, [["__scopeId", "data-v-c6d16c93"]]), $4 = ["checked", "disabled"], C4 = { class: "base-checkbox-box" }, x4 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, S4 = {
  key: 0,
  class: "base-checkbox-label"
}, I4 = /* @__PURE__ */ ve({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (a(), r("label", {
      class: Te(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (n) => s.$emit("update:modelValue", n.target.checked))
      }, null, 40, $4),
      t("span", C4, [
        e.modelValue ? (a(), r("svg", x4, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (a(), r("span", S4, [
        qe(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Ia = /* @__PURE__ */ pe(I4, [["__scopeId", "data-v-bf17c831"]]), E4 = { class: "popover-header" }, T4 = { class: "popover-body" }, P4 = {
  key: 0,
  class: "changes-summary"
}, R4 = {
  key: 0,
  class: "change-item"
}, M4 = {
  key: 1,
  class: "change-item"
}, D4 = {
  key: 2,
  class: "change-item"
}, L4 = {
  key: 3,
  class: "change-item"
}, O4 = {
  key: 4,
  class: "change-item"
}, A4 = {
  key: 5,
  class: "change-item"
}, N4 = {
  key: 1,
  class: "no-changes"
}, U4 = {
  key: 2,
  class: "loading"
}, z4 = {
  key: 3,
  class: "issues-error"
}, F4 = { class: "error-header" }, B4 = { class: "error-title" }, V4 = { class: "issues-list" }, W4 = { class: "workflow-state" }, G4 = { class: "message-section" }, j4 = { class: "popover-footer" }, H4 = {
  key: 1,
  class: "commit-popover"
}, K4 = { class: "popover-header" }, q4 = { class: "popover-body" }, Y4 = {
  key: 0,
  class: "changes-summary"
}, J4 = {
  key: 0,
  class: "change-item"
}, X4 = {
  key: 1,
  class: "change-item"
}, Q4 = {
  key: 2,
  class: "change-item"
}, Z4 = {
  key: 3,
  class: "change-item"
}, e6 = {
  key: 4,
  class: "change-item"
}, t6 = {
  key: 5,
  class: "change-item"
}, s6 = {
  key: 1,
  class: "no-changes"
}, o6 = {
  key: 2,
  class: "loading"
}, n6 = {
  key: 3,
  class: "issues-error"
}, a6 = { class: "error-header" }, l6 = { class: "error-title" }, i6 = { class: "issues-list" }, r6 = { class: "workflow-state" }, c6 = { class: "message-section" }, d6 = { class: "popover-footer" }, u6 = /* @__PURE__ */ ve({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, n = s, { commit: l } = at(), i = k(""), c = k(!1), d = k(!1), u = N(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), m = N(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, S = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || S.nodes_added.length > 0 || S.nodes_removed.length > 0;
    }), v = N(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((S) => S.has_issues) : [];
    }), g = N(() => v.value.length > 0), w = N(() => g.value && !d.value);
    async function p() {
      var _, S, $, P;
      if (!(g.value && !d.value) && !(!u.value || !i.value.trim() || c.value)) {
        c.value = !0;
        try {
          const D = await l(i.value.trim(), d.value);
          if (D.status === "success") {
            const I = `Committed: ${((_ = D.summary) == null ? void 0 : _.new) || 0} new, ${((S = D.summary) == null ? void 0 : S.modified) || 0} modified, ${(($ = D.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            n("committed", { success: !0, message: I });
          } else if (D.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (D.status === "blocked") {
            const I = ((P = D.issues) == null ? void 0 : P.map((x) => `${x.name}: ${x.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${I}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: D.message || "Commit failed" });
        } catch (D) {
          n("committed", { success: !1, message: D instanceof Error ? D.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (_, S) => e.asModal ? (a(), M(wt, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: S[5] || (S[5] = ($) => n("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: S[4] || (S[4] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", E4, [
            S[11] || (S[11] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            t("button", {
              class: "close-btn",
              onClick: S[0] || (S[0] = ($) => n("close"))
            }, [...S[10] || (S[10] = [
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
          t("div", T4, [
            e.status && u.value ? (a(), r("div", P4, [
              e.status.workflows.new.length ? (a(), r("div", R4, [
                S[12] || (S[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), r("div", M4, [
                S[13] || (S[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), r("div", D4, [
                S[14] || (S[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), r("div", L4, [
                S[15] || (S[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), r("div", O4, [
                S[16] || (S[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              m.value ? y("", !0) : (a(), r("div", A4, [...S[17] || (S[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), r("div", N4, " No changes to commit ")) : (a(), r("div", U4, " Loading... ")),
            g.value ? (a(), r("div", z4, [
              t("div", F4, [
                S[18] || (S[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", B4, f(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", V4, [
                (a(!0), r(G, null, he(v.value, ($) => (a(), r("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  t("strong", null, f($.name), 1),
                  t("span", W4, "(" + f($.sync_state) + ")", 1),
                  b(": " + f($.issue_summary), 1)
                ]))), 128))
              ]),
              C(Ia, {
                modelValue: d.value,
                "onUpdate:modelValue": S[1] || (S[1] = ($) => d.value = $),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...S[19] || (S[19] = [
                  b(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            t("div", G4, [
              C(Yl, {
                modelValue: i.value,
                "onUpdate:modelValue": S[2] || (S[2] = ($) => i.value = $),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
                disabled: !u.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: p,
                onSubmit: p
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          t("div", j4, [
            C(Me, {
              variant: "secondary",
              onClick: S[3] || (S[3] = ($) => n("close"))
            }, {
              default: h(() => [...S[20] || (S[20] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: d.value ? "danger" : "primary",
              disabled: !u.value || !i.value.trim() || c.value || w.value,
              loading: c.value,
              onClick: p
            }, {
              default: h(() => [
                b(f(c.value ? "Committing..." : d.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (a(), r("div", H4, [
      t("div", K4, [
        S[22] || (S[22] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: S[6] || (S[6] = ($) => n("close"))
        }, [...S[21] || (S[21] = [
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
      t("div", q4, [
        e.status && u.value ? (a(), r("div", Y4, [
          e.status.workflows.new.length ? (a(), r("div", J4, [
            S[23] || (S[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), r("div", X4, [
            S[24] || (S[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, f(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), r("div", Q4, [
            S[25] || (S[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), r("div", Z4, [
            S[26] || (S[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, f(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), r("div", e6, [
            S[27] || (S[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, f(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          m.value ? y("", !0) : (a(), r("div", t6, [...S[28] || (S[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), r("div", s6, " No changes to commit ")) : (a(), r("div", o6, " Loading... ")),
        g.value ? (a(), r("div", n6, [
          t("div", a6, [
            S[29] || (S[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", l6, f(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", i6, [
            (a(!0), r(G, null, he(v.value, ($) => (a(), r("div", {
              key: $.name,
              class: "issue-item"
            }, [
              t("strong", null, f($.name), 1),
              t("span", r6, "(" + f($.sync_state) + ")", 1),
              b(": " + f($.issue_summary), 1)
            ]))), 128))
          ]),
          C(Ia, {
            modelValue: d.value,
            "onUpdate:modelValue": S[7] || (S[7] = ($) => d.value = $),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...S[30] || (S[30] = [
              b(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        t("div", c6, [
          C(Yl, {
            modelValue: i.value,
            "onUpdate:modelValue": S[8] || (S[8] = ($) => i.value = $),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : u.value ? "Describe your changes..." : "No changes",
            disabled: !u.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: p,
            onSubmit: p
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", d6, [
        C(Me, {
          variant: "secondary",
          onClick: S[9] || (S[9] = ($) => n("close"))
        }, {
          default: h(() => [...S[31] || (S[31] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        C(Me, {
          variant: d.value ? "danger" : "primary",
          disabled: !u.value || !i.value.trim() || c.value || w.value,
          loading: c.value,
          onClick: p
        }, {
          default: h(() => [
            b(f(c.value ? "Committing..." : d.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Lr = /* @__PURE__ */ pe(u6, [["__scopeId", "data-v-5f897631"]]), f6 = { class: "modal-header" }, m6 = { class: "modal-body" }, v6 = { class: "switch-message" }, p6 = { class: "switch-details" }, g6 = { class: "modal-actions" }, h6 = /* @__PURE__ */ ve({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), M(wt, { to: "body" }, [
      e.show ? (a(), r("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", f6, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", m6, [
            t("p", v6, [
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
            t("p", p6, ' Your current work will be preserved. You can switch back to "' + f(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", g6, [
            C(re, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(re, {
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
}), y6 = /* @__PURE__ */ pe(h6, [["__scopeId", "data-v-e9c5253e"]]), w6 = {
  key: 0,
  class: "modal-overlay"
}, _6 = { class: "modal-content" }, b6 = { class: "modal-body" }, k6 = { class: "progress-info" }, $6 = { class: "progress-percentage" }, C6 = { class: "progress-state" }, x6 = { class: "switch-steps" }, S6 = { class: "step-icon" }, I6 = { class: "step-label" }, E6 = /* @__PURE__ */ ve({
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
      ], c = i.findIndex((d) => d.state === s.state);
      return i.map((d, u) => {
        let m = "pending", v = "○";
        return u < c ? (m = "completed", v = "✓") : u === c && (m = "active", v = "⟳"), {
          ...d,
          status: m,
          icon: v
        };
      });
    });
    return (i, c) => (a(), M(wt, { to: "body" }, [
      e.show ? (a(), r("div", w6, [
        t("div", _6, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", b6, [
            C(qn, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            t("div", k6, [
              t("div", $6, f(e.progress) + "%", 1),
              t("div", C6, f(o.value), 1)
            ]),
            t("div", x6, [
              (a(!0), r(G, null, he(l.value, (d) => (a(), r("div", {
                key: d.state,
                class: Te(["switch-step", d.status])
              }, [
                t("span", S6, f(d.icon), 1),
                t("span", I6, f(d.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), T6 = /* @__PURE__ */ pe(E6, [["__scopeId", "data-v-768a5078"]]), P6 = { class: "modal-header" }, R6 = { class: "modal-body" }, M6 = {
  key: 0,
  class: "node-section"
}, D6 = { class: "node-list" }, L6 = {
  key: 1,
  class: "node-section"
}, O6 = { class: "node-list" }, A6 = { class: "modal-actions" }, N6 = /* @__PURE__ */ ve({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (a(), M(wt, { to: "body" }, [
      e.show ? (a(), r("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = rt(() => {
          }, ["stop"]))
        }, [
          t("div", P6, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", R6, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), r("div", M6, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", D6, [
                (a(!0), r(G, null, he(e.mismatchDetails.missing_nodes, (n) => (a(), r("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + f(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), r("div", L6, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", O6, [
                (a(!0), r(G, null, he(e.mismatchDetails.extra_nodes, (n) => (a(), r("div", {
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
          t("div", A6, [
            C(re, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => s.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(re, {
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
}), U6 = /* @__PURE__ */ pe(N6, [["__scopeId", "data-v-7cad7518"]]), z6 = [
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
], F6 = "v0.0.16", B6 = "Akatz", V6 = { class: "social-buttons" }, W6 = ["title", "aria-label", "onClick"], G6 = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, j6 = ["d"], H6 = ["title", "aria-label", "onClick"], K6 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, q6 = ["d"], Y6 = /* @__PURE__ */ ve({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), r("div", V6, [
      (a(!0), r(G, null, he(We(z6), (l) => (a(), r(G, {
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
          (a(), r("svg", G6, [
            t("path", {
              d: l.iconPath
            }, null, 8, j6)
          ]))
        ], 8, W6)) : (a(), r("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (i) => s(l.url)
        }, [
          (a(), r("svg", K6, [
            t("path", {
              d: l.iconPath
            }, null, 8, q6)
          ]))
        ], 8, H6))
      ], 64))), 128))
    ]));
  }
}), Or = /* @__PURE__ */ pe(Y6, [["__scopeId", "data-v-4f846342"]]), J6 = { class: "footer-info" }, X6 = { class: "version" }, Q6 = { class: "made-by" }, Z6 = /* @__PURE__ */ ve({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (a(), r("div", J6, [
      t("span", X6, f(We(F6)), 1),
      t("span", Q6, [
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
        b(" by " + f(We(B6)), 1)
      ])
    ]));
  }
}), Ar = /* @__PURE__ */ pe(Z6, [["__scopeId", "data-v-8bc3db0a"]]), eI = /* @__PURE__ */ ve({
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
    return (i, c) => (a(), M(pt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (d) => i.$emit("close"))
    }, {
      body: h(() => [
        C(kr, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var d;
        return [
          C(Me, {
            variant: "primary",
            disabled: !((d = o.value) != null && d.hasChanges),
            onClick: n
          }, {
            default: h(() => [...c[2] || (c[2] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Me, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (u) => i.$emit("close"))
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
}), tI = /* @__PURE__ */ pe(eI, [["__scopeId", "data-v-fac00ae7"]]), sI = { class: "header-actions" }, oI = {
  key: 0,
  class: "wizard-step"
}, nI = { class: "form-field" }, aI = ["placeholder"], lI = {
  key: 0,
  class: "form-error"
}, iI = { class: "form-field form-field--checkbox" }, rI = { class: "form-checkbox" }, cI = {
  key: 0,
  class: "form-field"
}, dI = ["placeholder"], uI = {
  key: 0,
  class: "form-info"
}, fI = {
  key: 1,
  class: "form-suggestion"
}, mI = {
  key: 2,
  class: "form-error"
}, vI = {
  key: 3,
  class: "form-info"
}, pI = {
  key: 1,
  class: "wizard-step"
}, gI = {
  key: 0,
  class: "progress-check-loading"
}, hI = {
  key: 0,
  class: "cli-warning"
}, yI = { class: "cli-warning-header" }, wI = {
  key: 1,
  class: "env-landing"
}, _I = { class: "env-list" }, bI = ["value"], kI = { class: "env-name" }, $I = {
  key: 2,
  class: "env-create"
}, CI = { class: "form-field" }, xI = { class: "form-field" }, SI = ["value"], II = { class: "form-field" }, EI = ["disabled"], TI = ["value"], PI = { class: "form-field" }, RI = ["value"], MI = { class: "form-field form-field--checkbox" }, DI = { class: "form-checkbox" }, LI = {
  key: 0,
  class: "form-error"
}, OI = {
  key: 1,
  class: "env-creating"
}, AI = { class: "creating-intro" }, NI = {
  key: 3,
  class: "env-import"
}, UI = { class: "wizard-footer" }, zI = { class: "wizard-footer-actions" }, lo = 10, FI = 600 * 1e3, Jl = 1800 * 1e3, BI = /* @__PURE__ */ ve({
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
      createEnvironment: d,
      getCreateProgress: u,
      getImportProgress: m,
      getComfyUIReleases: v
    } = at(), g = k(o.initialStep || 1), w = k(null), p = k("landing"), _ = k(!1), S = k(!1), $ = k(!1), P = k(!1), D = k(null), I = k(o.initialStep === 2), x = k(o.defaultPath), K = k(!!o.detectedModelsDir), V = k(o.detectedModelsDir || ""), z = k(null), T = k(null), E = k(null), R = k(null), Z = k("my-new-env"), J = k(Sr), W = k("latest"), se = k(Ir), ee = k(!0), A = k(null), j = k(null), L = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), ne = k(!1), Y = k(!1), de = k(!1), $e = k({ progress: 0, message: "" }), Pe = k({ progress: 0, message: "" }), Ge = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Le = k(0), Se = k(null), Ie = k(0), _e = k(null), ge = N(() => {
      var we, ye;
      const te = (we = x.value) == null ? void 0 : we.trim(), q = !z.value, De = !K.value || !T.value && ((ye = V.value) == null ? void 0 : ye.trim());
      return te && q && De;
    }), Oe = N(() => {
      var te;
      return (te = Z.value) == null ? void 0 : te.trim();
    }), Re = N(() => !!(g.value === 2 || j.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), O = N(() => j.value || o.workspacePath || null);
    async function F() {
      var te;
      if (z.value = null, !!((te = x.value) != null && te.trim()))
        try {
          const q = await c({ path: x.value, type: "workspace" });
          q.valid || (z.value = q.error || "Invalid path");
        } catch (q) {
          z.value = q instanceof Error ? q.message : "Validation failed";
        }
    }
    async function ae() {
      var te;
      if (T.value = null, E.value = null, R.value = null, !!((te = V.value) != null && te.trim()))
        try {
          const q = await c({ path: V.value, type: "models" });
          if (q.valid)
            R.value = q.model_count ?? null;
          else if (T.value = q.error || "Invalid path", q.suggestion) {
            E.value = q.suggestion, V.value = q.suggestion, T.value = null;
            const De = await c({ path: q.suggestion, type: "models" });
            De.valid && (R.value = De.model_count ?? null);
          }
        } catch (q) {
          T.value = q instanceof Error ? q.message : "Validation failed";
        }
    }
    async function ie() {
      var te, q, De, we, ye;
      if (z.value = null, T.value = null, await F(), (te = z.value) != null && te.includes("already exists")) {
        z.value = null, j.value = ((q = x.value) == null ? void 0 : q.trim()) || o.defaultPath, g.value = 2, me();
        return;
      }
      if (!z.value && !(K.value && ((De = V.value) != null && De.trim()) && (await ae(), T.value))) {
        Y.value = !0;
        try {
          await l({
            workspace_path: ((we = x.value) == null ? void 0 : we.trim()) || o.defaultPath,
            models_directory: K.value && ((ye = V.value) == null ? void 0 : ye.trim()) || null
          }), Le.value = 0, Se.value = Date.now();
          const B = setInterval(async () => {
            var U;
            if (Se.value && Date.now() - Se.value > FI) {
              clearInterval(B), Y.value = !1, z.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const ce = await i();
              if (Le.value = 0, ce.state === "idle" && Y.value) {
                clearInterval(B), Y.value = !1, z.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              $e.value = { progress: ce.progress, message: ce.message }, ce.state === "complete" ? (clearInterval(B), Y.value = !1, j.value = ((U = x.value) == null ? void 0 : U.trim()) || o.defaultPath, g.value = 2, me()) : ce.state === "error" && (clearInterval(B), Y.value = !1, z.value = ce.error || "Workspace creation failed");
            } catch (ce) {
              Le.value++, console.warn(`Polling failure ${Le.value}/${lo}:`, ce), Le.value >= lo && (clearInterval(B), Y.value = !1, z.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (B) {
          Y.value = !1, z.value = B instanceof Error ? B.message : "Failed to create workspace";
        }
      }
    }
    async function fe() {
      de.value = !0, A.value = null;
      try {
        const te = {
          name: Z.value.trim() || "my-new-env",
          python_version: J.value,
          comfyui_version: W.value,
          torch_backend: se.value,
          switch_after: ee.value,
          workspace_path: j.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await d(te)).status === "started") {
          Ie.value = 0, _e.value = Date.now();
          const De = setInterval(async () => {
            if (_e.value && Date.now() - _e.value > Jl) {
              clearInterval(De), de.value = !1, A.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const we = await u();
              if (Ie.value = 0, we.state === "idle" && de.value) {
                clearInterval(De), de.value = !1, A.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Pe.value = {
                progress: we.progress ?? 0,
                message: we.message,
                phase: we.phase
              }, we.state === "complete") {
                clearInterval(De), de.value = !1;
                const ye = we.environment_name || te.name;
                ee.value ? n("complete", ye, j.value) : (p.value = "landing", n("environment-created-no-switch", ye));
              } else we.state === "error" && (clearInterval(De), de.value = !1, A.value = we.error || "Environment creation failed");
            } catch (we) {
              Ie.value++, console.warn(`Polling failure ${Ie.value}/${lo}:`, we), Ie.value >= lo && (clearInterval(De), de.value = !1, A.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (te) {
        de.value = !1, A.value = te instanceof Error ? te.message : "Unknown error";
      }
    }
    async function me() {
      ne.value = !0;
      try {
        L.value = await v();
      } catch (te) {
        console.error("Failed to load ComfyUI releases:", te);
      } finally {
        ne.value = !1;
      }
    }
    function Ce() {
      w.value && n("switch-environment", w.value, j.value);
    }
    function xe() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function le(te, q) {
      S.value = !1, q ? n("complete", te, j.value) : (n("environment-created-no-switch", te), p.value = "landing");
    }
    function ue() {
    }
    et(async () => {
      if (o.detectedModelsDir && (V.value = o.detectedModelsDir), o.workspacePath && (j.value = o.workspacePath), g.value === 2) {
        me();
        const te = setTimeout(() => {
          I.value = !1;
        }, 3e3);
        await Ne(), clearTimeout(te), I.value = !1;
      }
    });
    async function Ne() {
      try {
        const te = await u();
        if (console.log("[ComfyGit] Create progress check:", te.state, te), te.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", te.environment_name), p.value = "create", de.value = !0, Z.value = te.environment_name || "my-new-env", Pe.value = {
            progress: te.progress ?? 0,
            message: te.message,
            phase: te.phase
          }, Ee();
          return;
        }
      } catch (te) {
        console.log("[ComfyGit] Create progress check failed:", te);
      }
      try {
        const te = await m();
        console.log("[ComfyGit] Import progress check:", te.state, te), te.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", te.environment_name), D.value = {
          message: te.message || "Importing...",
          phase: te.phase || "",
          progress: te.progress ?? 0,
          environmentName: te.environment_name || ""
        }, P.value = !0, p.value = "import", S.value = !0);
      } catch (te) {
        console.log("[ComfyGit] Import progress check failed:", te);
      }
    }
    async function Ee() {
      Ie.value = 0, _e.value = Date.now();
      let te = null;
      const q = async () => {
        if (_e.value && Date.now() - _e.value > Jl)
          return te && clearInterval(te), de.value = !1, A.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const we = await u();
          if (Ie.value = 0, we.state === "idle" && de.value)
            return te && clearInterval(te), de.value = !1, A.value = "Environment creation was interrupted. Please try again.", !1;
          if (Pe.value = {
            progress: we.progress ?? 0,
            message: we.message,
            phase: we.phase
          }, we.state === "complete") {
            te && clearInterval(te), de.value = !1;
            const ye = we.environment_name || Z.value;
            return n("complete", ye, j.value), !1;
          } else if (we.state === "error")
            return te && clearInterval(te), de.value = !1, A.value = we.error || "Environment creation failed", !1;
          return !0;
        } catch (we) {
          return Ie.value++, console.warn(`Polling failure ${Ie.value}/${lo}:`, we), Ie.value >= lo ? (te && clearInterval(te), de.value = !1, A.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await q() && (te = setInterval(async () => {
        !await q() && te && clearInterval(te);
      }, 2e3));
    }
    return (te, q) => (a(), r(G, null, [
      C(pt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: q[15] || (q[15] = (De) => te.$emit("close"))
      }, {
        header: h(() => [
          q[20] || (q[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", sI, [
            C(Or),
            q[19] || (q[19] = t("span", { class: "header-divider" }, null, -1)),
            Re.value ? (a(), r("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: q[0] || (q[0] = (De) => _.value = !0)
            }, [...q[17] || (q[17] = [
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
              onClick: q[1] || (q[1] = (De) => te.$emit("close")),
              title: "Close"
            }, [...q[18] || (q[18] = [
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
          var De;
          return [
            g.value === 1 ? (a(), r("div", oI, [
              q[24] || (q[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", nI, [
                q[21] || (q[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                Ye(t("input", {
                  "onUpdate:modelValue": q[2] || (q[2] = (we) => x.value = we),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, aI), [
                  [Ut, x.value]
                ]),
                z.value ? (a(), r("p", lI, f(z.value), 1)) : y("", !0)
              ]),
              t("div", iI, [
                t("label", rI, [
                  Ye(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": q[3] || (q[3] = (we) => K.value = we)
                  }, null, 512), [
                    [Qo, K.value]
                  ]),
                  q[22] || (q[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              K.value ? (a(), r("div", cI, [
                q[23] || (q[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                Ye(t("input", {
                  "onUpdate:modelValue": q[4] || (q[4] = (we) => V.value = we),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, dI), [
                  [Ut, V.value]
                ]),
                e.detectedModelsDir && !V.value ? (a(), r("p", uI, " Detected: " + f(e.detectedModelsDir), 1)) : y("", !0),
                E.value ? (a(), r("p", fI, " Did you mean: " + f(E.value), 1)) : y("", !0),
                T.value ? (a(), r("p", mI, f(T.value), 1)) : y("", !0),
                R.value !== null && !T.value ? (a(), r("p", vI, " Found " + f(R.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              Y.value ? (a(), M(Dn, {
                key: 1,
                progress: $e.value.progress,
                message: $e.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (a(), r("div", pI, [
              I.value ? (a(), r("div", gI, [...q[25] || (q[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), r(G, { key: 1 }, [
                !o.cliInstalled && !$.value ? (a(), r("div", hI, [
                  t("div", yI, [
                    q[27] || (q[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    q[28] || (q[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: q[5] || (q[5] = (we) => $.value = !0),
                      title: "Dismiss"
                    }, [...q[26] || (q[26] = [
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
                  q[29] || (q[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  q[30] || (q[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                p.value === "landing" ? (a(), r("div", wI, [
                  q[34] || (q[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: q[6] || (q[6] = (we) => p.value = "create")
                  }, [...q[31] || (q[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: q[7] || (q[7] = (we) => {
                      P.value = !1, p.value = "import";
                    })
                  }, [...q[32] || (q[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (De = o.existingEnvironments) != null && De.length ? (a(), r(G, { key: 0 }, [
                    q[33] || (q[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", _I, [
                      (a(!0), r(G, null, he(o.existingEnvironments, (we) => (a(), r("label", {
                        key: we,
                        class: Te(["env-option", { selected: w.value === we }])
                      }, [
                        Ye(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: we,
                          "onUpdate:modelValue": q[8] || (q[8] = (ye) => w.value = ye)
                        }, null, 8, bI), [
                          [Xt, w.value]
                        ]),
                        t("span", kI, f(we), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : p.value === "create" ? (a(), r("div", $I, [
                  de.value ? (a(), r("div", OI, [
                    t("p", AI, [
                      q[41] || (q[41] = b(" Creating environment ", -1)),
                      t("strong", null, f(Z.value), 1),
                      q[42] || (q[42] = b("... ", -1))
                    ]),
                    C(Dn, {
                      progress: Pe.value.progress,
                      message: Pe.value.message,
                      "current-phase": Pe.value.phase,
                      "show-steps": !0,
                      steps: Ge
                    }, null, 8, ["progress", "message", "current-phase"]),
                    q[43] || (q[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), r(G, { key: 0 }, [
                    q[40] || (q[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", CI, [
                      q[35] || (q[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      Ye(t("input", {
                        "onUpdate:modelValue": q[9] || (q[9] = (we) => Z.value = we),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Ut, Z.value]
                      ])
                    ]),
                    t("div", xI, [
                      q[36] || (q[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      Ye(t("select", {
                        "onUpdate:modelValue": q[10] || (q[10] = (we) => J.value = we),
                        class: "form-select"
                      }, [
                        (a(!0), r(G, null, he(We(xr), (we) => (a(), r("option", {
                          key: we,
                          value: we
                        }, f(we), 9, SI))), 128))
                      ], 512), [
                        [gs, J.value]
                      ])
                    ]),
                    t("div", II, [
                      q[37] || (q[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Ye(t("select", {
                        "onUpdate:modelValue": q[11] || (q[11] = (we) => W.value = we),
                        class: "form-select",
                        disabled: ne.value
                      }, [
                        (a(!0), r(G, null, he(L.value, (we) => (a(), r("option", {
                          key: we.tag_name,
                          value: we.tag_name
                        }, f(we.name), 9, TI))), 128))
                      ], 8, EI), [
                        [gs, W.value]
                      ])
                    ]),
                    t("div", PI, [
                      q[38] || (q[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Ye(t("select", {
                        "onUpdate:modelValue": q[12] || (q[12] = (we) => se.value = we),
                        class: "form-select"
                      }, [
                        (a(!0), r(G, null, he(We(Za), (we) => (a(), r("option", {
                          key: we,
                          value: we
                        }, f(we) + f(we === "auto" ? " (detect GPU)" : ""), 9, RI))), 128))
                      ], 512), [
                        [gs, se.value]
                      ])
                    ]),
                    t("div", MI, [
                      t("label", DI, [
                        Ye(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": q[13] || (q[13] = (we) => ee.value = we)
                        }, null, 512), [
                          [Qo, ee.value]
                        ]),
                        q[39] || (q[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    A.value ? (a(), r("div", LI, f(A.value), 1)) : y("", !0)
                  ], 64))
                ])) : p.value === "import" ? (a(), r("div", NI, [
                  C(Pr, {
                    "workspace-path": j.value,
                    "resume-import": P.value,
                    "initial-progress": D.value ?? void 0,
                    onImportComplete: le,
                    onImportStarted: q[14] || (q[14] = (we) => S.value = !0),
                    onSourceCleared: ue
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          t("div", UI, [
            C(Ar),
            t("div", zI, [
              g.value === 1 ? (a(), M(Me, {
                key: 0,
                variant: "primary",
                disabled: !ge.value || Y.value,
                onClick: ie
              }, {
                default: h(() => [
                  b(f(Y.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (a(), r(G, { key: 1 }, [
                !de.value && !S.value && (p.value !== "landing" || o.setupState === "no_workspace" && !j.value) ? (a(), M(Me, {
                  key: 0,
                  variant: "secondary",
                  onClick: xe
                }, {
                  default: h(() => [...q[44] || (q[44] = [
                    b(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                p.value === "create" ? (a(), M(Me, {
                  key: 1,
                  variant: "primary",
                  disabled: !Oe.value || de.value,
                  onClick: fe
                }, {
                  default: h(() => [
                    b(f(de.value ? "Creating..." : ee.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                p.value === "landing" && w.value ? (a(), M(Me, {
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
      _.value ? (a(), M(tI, {
        key: 0,
        "workspace-path": O.value,
        onClose: q[16] || (q[16] = (De) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), VI = /* @__PURE__ */ pe(BI, [["__scopeId", "data-v-9a9aadc0"]]), WI = { class: "comfygit-panel" }, GI = { class: "panel-header" }, jI = { class: "header-left" }, HI = {
  key: 0,
  class: "header-info"
}, KI = { class: "header-actions" }, qI = { class: "env-switcher" }, YI = {
  key: 0,
  class: "header-info"
}, JI = { class: "branch-name" }, XI = { class: "panel-main" }, QI = { class: "sidebar" }, ZI = { class: "sidebar-content" }, eE = { class: "sidebar-section" }, tE = { class: "sidebar-section" }, sE = { class: "sidebar-section" }, oE = {
  key: 0,
  class: "sidebar-badge"
}, nE = { class: "sidebar-footer" }, aE = { class: "content-area" }, lE = {
  key: 0,
  class: "error-message"
}, iE = {
  key: 1,
  class: "loading"
}, rE = { class: "dialog-content env-selector-dialog" }, cE = { class: "dialog-header" }, dE = { class: "dialog-body" }, uE = { class: "env-list" }, fE = { class: "env-info" }, mE = { class: "env-name-row" }, vE = { class: "env-indicator" }, pE = { class: "env-name" }, gE = {
  key: 0,
  class: "env-branch"
}, hE = {
  key: 1,
  class: "current-label"
}, yE = { class: "env-stats" }, wE = ["onClick"], _E = { class: "toast-container" }, bE = { class: "toast-message" }, kE = /* @__PURE__ */ ve({
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
      checkout: d,
      createBranch: u,
      switchBranch: m,
      deleteBranch: v,
      getEnvironments: g,
      switchEnvironment: w,
      getSwitchProgress: p,
      deleteEnvironment: _,
      syncEnvironmentManually: S,
      repairWorkflowModels: $,
      getSetupStatus: P
    } = at(), D = Cv(), { liveInstanceCount: I } = Rr({ autoStart: !0 }), x = k(null), K = k([]), V = k([]), z = k([]), T = N(() => z.value.find((oe) => oe.is_current)), E = k(null), R = k(!1), Z = k(1), J = N(() => {
      var oe;
      return ((oe = E.value) == null ? void 0 : oe.state) || "managed";
    }), W = k(!1), se = k(null), ee = k(null), A = k(!1), j = k(null), L = k(null), ne = k(null), Y = k(!1), de = k(!1), $e = k(""), Pe = k(null), Ge = k({ state: "idle", progress: 0, message: "" });
    let Le = null, Se = null;
    const Ie = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, _e = o.initialView ? Ie[o.initialView] : null, ge = k((_e == null ? void 0 : _e.view) ?? "status"), Oe = k((_e == null ? void 0 : _e.section) ?? "this-env");
    function Re(oe, H) {
      ge.value = oe, Oe.value = H;
    }
    function O(oe) {
      const Ae = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[oe];
      Ae && Re(Ae.view, Ae.section);
    }
    function F() {
      Re("branches", "this-env");
    }
    function ae() {
      n("close"), setTimeout(() => {
        var H;
        const oe = document.querySelectorAll("button.comfyui-button");
        for (const Ae of oe)
          if (((H = Ae.textContent) == null ? void 0 : H.trim()) === "Manager") {
            Ae.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const ie = k(null), fe = k(!1), me = k(!1), Ce = k([]);
    let xe = 0;
    function le(oe, H = "info", Ae = 3e3) {
      const He = ++xe;
      return Ce.value.push({ id: He, message: oe, type: H }), Ae > 0 && setTimeout(() => {
        Ce.value = Ce.value.filter((ot) => ot.id !== He);
      }, Ae), He;
    }
    function ue(oe) {
      Ce.value = Ce.value.filter((H) => H.id !== oe);
    }
    function Ne(oe, H) {
      le(oe, H);
    }
    const Ee = N(() => {
      if (!x.value) return "neutral";
      const oe = x.value.workflows, H = oe.new.length > 0 || oe.modified.length > 0 || oe.deleted.length > 0 || x.value.has_changes;
      return x.value.comparison.is_synced ? H ? "warning" : "success" : "error";
    });
    N(() => x.value ? Ee.value === "success" ? "All synced" : Ee.value === "warning" ? "Uncommitted changes" : Ee.value === "error" ? "Not synced" : "" : "");
    async function te() {
      W.value = !0, se.value = null;
      try {
        const [oe, H, Ae, He] = await Promise.all([
          l(!0),
          i(),
          c(),
          g()
        ]);
        x.value = oe, K.value = H.commits, V.value = Ae.branches, z.value = He, n("statusUpdate", oe), j.value && await j.value.loadWorkflows(!0);
      } catch (oe) {
        se.value = oe instanceof Error ? oe.message : "Failed to load status", x.value = null, K.value = [], V.value = [];
      } finally {
        W.value = !1;
      }
    }
    function q(oe) {
      ee.value = oe;
    }
    async function De(oe) {
      var Ae;
      ee.value = null;
      const H = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      ie.value = {
        title: H ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: H ? "You have uncommitted changes that will be lost." : `Checkout commit ${oe.short_hash || ((Ae = oe.hash) == null ? void 0 : Ae.slice(0, 7))}?`,
        details: H ? is() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: H ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: H,
        onConfirm: async () => {
          var mt;
          ie.value = null, ce();
          const He = le(`Checking out ${oe.short_hash || ((mt = oe.hash) == null ? void 0 : mt.slice(0, 7))}...`, "info", 0), ot = await d(oe.hash, H);
          ue(He), ot.status === "success" ? le("Restarting ComfyUI...", "success") : le(ot.message || "Checkout failed", "error");
        }
      };
    }
    async function we(oe) {
      const H = x.value && (x.value.workflows.new.length > 0 || x.value.workflows.modified.length > 0 || x.value.workflows.deleted.length > 0 || x.value.has_changes);
      ie.value = {
        title: H ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: H ? "You have uncommitted changes." : `Switch to branch "${oe}"?`,
        details: H ? is() : void 0,
        warning: H ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: H ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ie.value = null, ce();
          const Ae = le(`Switching to ${oe}...`, "info", 0), He = await m(oe, H);
          ue(Ae), He.status === "success" ? le("Restarting ComfyUI...", "success") : le(He.message || "Branch switch failed", "error");
        }
      };
    }
    async function ye(oe) {
      const H = le(`Creating branch ${oe}...`, "info", 0), Ae = await u(oe);
      ue(H), Ae.status === "success" ? (le(`Branch "${oe}" created`, "success"), await te()) : le(Ae.message || "Failed to create branch", "error");
    }
    async function B(oe, H = !1) {
      const Ae = async (He) => {
        var mt;
        const ot = le(`Deleting branch ${oe}...`, "info", 0);
        try {
          const Dt = await v(oe, He);
          ue(ot), Dt.status === "success" ? (le(`Branch "${oe}" deleted`, "success"), await te()) : (mt = Dt.message) != null && mt.includes("not fully merged") ? ie.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${oe}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ie.value = null, await Ae(!0);
            }
          } : le(Dt.message || "Failed to delete branch", "error");
        } catch (Dt) {
          ue(ot);
          const rs = Dt instanceof Error ? Dt.message : "Failed to delete branch";
          rs.includes("not fully merged") ? ie.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${oe}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              ie.value = null, await Ae(!0);
            }
          } : le(rs, "error");
        }
      };
      ie.value = {
        title: "Delete Branch",
        message: `Delete branch "${oe}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          ie.value = null, await Ae(H);
        }
      };
    }
    async function U(oe) {
      ee.value = null;
      const H = prompt("Enter branch name:");
      if (H) {
        const Ae = le(`Creating branch ${H}...`, "info", 0), He = await u(H, oe.hash);
        ue(Ae), He.status === "success" ? (le(`Branch "${H}" created from ${oe.short_hash}`, "success"), await te()) : le(He.message || "Failed to create branch", "error");
      }
    }
    function ce() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Ve() {
      ie.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var oe;
          ie.value = null, ce(), le("Restarting environment...", "info");
          try {
            (oe = window.app) != null && oe.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Qe() {
      ie.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var oe;
          ie.value = null, le("Stopping environment...", "info");
          try {
            (oe = window.app) != null && oe.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function vt(oe, H) {
      A.value = !1, $e.value = oe, Pe.value = H || null, Y.value = !0;
    }
    async function lt() {
      Y.value = !1, de.value = !0, ce(), Ge.value = {
        progress: 10,
        state: ut(10),
        message: Mt(10)
      };
      try {
        await w($e.value, Pe.value || void 0), zt(), Vs();
      } catch (oe) {
        Kt(), de.value = !1, le(`Failed to initiate switch: ${oe instanceof Error ? oe.message : "Unknown error"}`, "error"), Ge.value = { state: "idle", progress: 0, message: "" }, Pe.value = null;
      }
    }
    function ut(oe) {
      return oe >= 100 ? "complete" : oe >= 80 ? "validating" : oe >= 60 ? "starting" : oe >= 30 ? "syncing" : "preparing";
    }
    function Mt(oe) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[ut(oe)] || "";
    }
    function zt() {
      if (Se) return;
      let oe = 10;
      const H = 60, Ae = 5e3, He = 100, ot = (H - oe) / (Ae / He);
      Se = window.setInterval(() => {
        if (oe += ot, oe >= H && (oe = H, Kt()), Ge.value.progress < H) {
          const mt = Math.floor(oe);
          Ge.value = {
            progress: mt,
            state: ut(mt),
            message: Mt(mt)
          };
        }
      }, He);
    }
    function Kt() {
      Se && (clearInterval(Se), Se = null);
    }
    function Vs() {
      Le || (Le = window.setInterval(async () => {
        try {
          let oe = await D.getStatus();
          if ((!oe || oe.state === "idle") && (oe = await p()), !oe)
            return;
          const H = oe.progress || 0;
          H >= 60 && Kt();
          const Ae = Math.max(H, Ge.value.progress), He = oe.state && oe.state !== "idle" && oe.state !== "unknown", ot = He ? oe.state : ut(Ae), mt = He && oe.message || Mt(Ae);
          Ge.value = {
            state: ot,
            progress: Ae,
            message: mt
          }, oe.state === "complete" ? (Kt(), Rs(), de.value = !1, le(`✓ Switched to ${$e.value}`, "success"), await te(), $e.value = "") : oe.state === "rolled_back" ? (Kt(), Rs(), de.value = !1, le("Switch failed, restored previous environment", "warning"), $e.value = "") : oe.state === "critical_failure" && (Kt(), Rs(), de.value = !1, le(`Critical error during switch: ${oe.message}`, "error"), $e.value = "");
        } catch (oe) {
          console.error("Failed to poll switch progress:", oe);
        }
      }, 1e3));
    }
    function Rs() {
      Kt(), Le && (clearInterval(Le), Le = null);
    }
    function oo() {
      var oe;
      Y.value = !1, $e.value = "", (oe = E.value) != null && oe.state && E.value.state !== "managed" && (Z.value = E.value.state === "no_workspace" ? 1 : 2, R.value = !0);
    }
    async function $o(oe) {
      fe.value = !1, await te(), le(oe.message, oe.success ? "success" : "error");
    }
    async function Co() {
      me.value = !1;
      const oe = le("Syncing environment...", "info", 0);
      try {
        const H = await S("skip", !0);
        if (ue(oe), H.status === "success") {
          const Ae = [];
          H.nodes_installed.length && Ae.push(`${H.nodes_installed.length} installed`), H.nodes_removed.length && Ae.push(`${H.nodes_removed.length} removed`);
          const He = Ae.length ? `: ${Ae.join(", ")}` : "";
          le(`✓ Environment synced${He}`, "success"), await te();
        } else {
          const Ae = H.errors.length ? H.errors.join("; ") : H.message;
          le(`Sync failed: ${Ae}`, "error");
        }
      } catch (H) {
        ue(oe), le(`Sync error: ${H instanceof Error ? H.message : "Unknown error"}`, "error");
      }
    }
    async function xo(oe) {
      var H;
      try {
        const Ae = await $(oe);
        Ae.failed.length === 0 ? le(`✓ Repaired ${Ae.success} workflow${Ae.success === 1 ? "" : "s"}`, "success") : le(`Repaired ${Ae.success}, failed: ${Ae.failed.length}`, "warning"), await te();
      } catch (Ae) {
        le(`Repair failed: ${Ae instanceof Error ? Ae.message : "Unknown error"}`, "error");
      } finally {
        (H = ne.value) == null || H.resetRepairingState();
      }
    }
    async function be() {
      var H, Ae;
      const oe = le("Repairing environment...", "info", 0);
      try {
        const He = await S("skip", !0);
        if (ue(oe), He.status === "success") {
          const ot = [];
          He.nodes_installed.length && ot.push(`${He.nodes_installed.length} installed`), He.nodes_removed.length && ot.push(`${He.nodes_removed.length} removed`);
          const mt = ot.length ? `: ${ot.join(", ")}` : "";
          le(`✓ Environment repaired${mt}`, "success"), (H = ne.value) == null || H.closeDetailModal(), await te();
        } else {
          const ot = He.errors.length ? He.errors.join(", ") : He.message || "Unknown error";
          le(`Repair failed: ${ot}`, "error");
        }
      } catch (He) {
        ue(oe), le(`Repair error: ${He instanceof Error ? He.message : "Unknown error"}`, "error");
      } finally {
        (Ae = ne.value) == null || Ae.resetRepairingEnvironmentState();
      }
    }
    async function Q(oe, H) {
      le(`Environment '${oe}' created`, "success"), await te(), L.value && await L.value.loadEnvironments(), H && await vt(oe);
    }
    async function Ke(oe) {
      var H;
      if (((H = T.value) == null ? void 0 : H.name) === oe) {
        le("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      ie.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${oe}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          ie.value = null;
          try {
            const Ae = await _(oe);
            Ae.status === "success" ? (le(`Environment "${oe}" deleted`, "success"), await te(), L.value && await L.value.loadEnvironments()) : le(Ae.message || "Failed to delete environment", "error");
          } catch (Ae) {
            le(`Error deleting environment: ${Ae instanceof Error ? Ae.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ht(oe, H) {
      R.value = !1;
      try {
        E.value = await P();
      } catch {
      }
      await vt(oe, H);
    }
    function qt() {
      R.value = !1, n("close");
    }
    async function hs(oe, H) {
      await vt(oe, H);
    }
    async function ys(oe) {
      await te(), await vt(oe);
    }
    async function ls(oe) {
      E.value = await P(), console.log(`Environment '${oe}' created. Available for switching.`);
    }
    function Ue() {
      Re("environments", "all-envs"), setTimeout(() => {
        var oe;
        (oe = L.value) == null || oe.openCreateModal();
      }, 100);
    }
    function is() {
      if (!x.value) return [];
      const oe = [], H = x.value.workflows;
      return H.new.length && oe.push(`${H.new.length} new workflow(s)`), H.modified.length && oe.push(`${H.modified.length} modified workflow(s)`), H.deleted.length && oe.push(`${H.deleted.length} deleted workflow(s)`), oe;
    }
    return et(async () => {
      try {
        if (E.value = await P(), E.value.state === "no_workspace") {
          R.value = !0, Z.value = 1;
          return;
        }
        if (E.value.state === "empty_workspace") {
          R.value = !0, Z.value = 2;
          return;
        }
        if (E.value.state === "unmanaged") {
          R.value = !0, Z.value = 2;
          return;
        }
      } catch (oe) {
        console.warn("Setup status check failed, proceeding normally:", oe);
      }
      await te();
    }), (oe, H) => {
      var Ae, He, ot, mt, Dt, rs, Ws, Gs, X, ke, ze, ct;
      return a(), r("div", WI, [
        t("div", GI, [
          t("div", jI, [
            H[31] || (H[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            x.value ? (a(), r("div", HI)) : y("", !0)
          ]),
          t("div", KI, [
            C(Or),
            H[34] || (H[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Te(["icon-btn", { spinning: W.value }]),
              onClick: te,
              title: "Refresh"
            }, [...H[32] || (H[32] = [
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
              onClick: H[0] || (H[0] = (Fe) => n("close")),
              title: "Close"
            }, [...H[33] || (H[33] = [
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
        t("div", qI, [
          t("div", { class: "env-switcher-header" }, [
            H[35] || (H[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", { class: "env-control-buttons" }, [
              t("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Ve
              }, " Restart "),
              t("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: Qe
              }, " Stop ")
            ])
          ]),
          t("button", {
            class: "env-switcher-btn",
            onClick: H[1] || (H[1] = (Fe) => Re("environments", "all-envs"))
          }, [
            x.value ? (a(), r("div", YI, [
              t("span", null, f(((Ae = T.value) == null ? void 0 : Ae.name) || ((He = x.value) == null ? void 0 : He.environment) || "Loading..."), 1),
              t("span", JI, "(" + f(x.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            H[36] || (H[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", XI, [
          t("div", QI, [
            t("div", ZI, [
              t("div", eE, [
                H[37] || (H[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Te(["sidebar-item", { active: ge.value === "status" && Oe.value === "this-env" }]),
                  onClick: H[2] || (H[2] = (Fe) => Re("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ge.value === "workflows" }]),
                  onClick: H[3] || (H[3] = (Fe) => Re("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ge.value === "models-env" }]),
                  onClick: H[4] || (H[4] = (Fe) => Re("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ge.value === "branches" }]),
                  onClick: H[5] || (H[5] = (Fe) => Re("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ge.value === "history" }]),
                  onClick: H[6] || (H[6] = (Fe) => Re("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ge.value === "nodes" }]),
                  onClick: H[7] || (H[7] = (Fe) => Re("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ge.value === "debug-env" }]),
                  onClick: H[8] || (H[8] = (Fe) => Re("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              H[41] || (H[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", tE, [
                H[38] || (H[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Te(["sidebar-item", { active: ge.value === "environments" }]),
                  onClick: H[9] || (H[9] = (Fe) => Re("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ge.value === "model-index" }]),
                  onClick: H[10] || (H[10] = (Fe) => Re("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ge.value === "settings" }]),
                  onClick: H[11] || (H[11] = (Fe) => Re("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ge.value === "debug-workspace" }]),
                  onClick: H[12] || (H[12] = (Fe) => Re("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              H[42] || (H[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", sE, [
                H[40] || (H[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Te(["sidebar-item", { active: ge.value === "deploy" }]),
                  onClick: H[13] || (H[13] = (Fe) => Re("deploy", "sharing"))
                }, [
                  H[39] || (H[39] = b(" DEPLOY ", -1)),
                  We(I) > 0 ? (a(), r("span", oE, f(We(I)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ge.value === "export" }]),
                  onClick: H[14] || (H[14] = (Fe) => Re("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ge.value === "import" }]),
                  onClick: H[15] || (H[15] = (Fe) => Re("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Te(["sidebar-item", { active: ge.value === "remotes" }]),
                  onClick: H[16] || (H[16] = (Fe) => Re("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", nE, [
              C(Ar)
            ])
          ]),
          t("div", aE, [
            se.value ? (a(), r("div", lE, f(se.value), 1)) : !x.value && ge.value === "status" ? (a(), r("div", iE, " Loading status... ")) : (a(), r(G, { key: 2 }, [
              ge.value === "status" ? (a(), M(Jm, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ne,
                status: x.value,
                "setup-state": J.value,
                onSwitchBranch: F,
                onCommitChanges: H[17] || (H[17] = (Fe) => fe.value = !0),
                onSyncEnvironment: H[18] || (H[18] = (Fe) => me.value = !0),
                onViewWorkflows: H[19] || (H[19] = (Fe) => Re("workflows", "this-env")),
                onViewHistory: H[20] || (H[20] = (Fe) => Re("history", "this-env")),
                onViewDebug: H[21] || (H[21] = (Fe) => Re("debug-env", "this-env")),
                onViewNodes: H[22] || (H[22] = (Fe) => Re("nodes", "this-env")),
                onRepairMissingModels: xo,
                onRepairEnvironment: be,
                onStartSetup: H[23] || (H[23] = (Fe) => R.value = !0),
                onViewEnvironments: H[24] || (H[24] = (Fe) => Re("environments", "all-envs")),
                onCreateEnvironment: Ue
              }, null, 8, ["status", "setup-state"])) : ge.value === "workflows" ? (a(), M(I0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: j,
                onRefresh: te
              }, null, 512)) : ge.value === "models-env" ? (a(), M(cw, {
                key: 2,
                onNavigate: O
              })) : ge.value === "branches" ? (a(), M(uv, {
                key: 3,
                branches: V.value,
                current: ((ot = x.value) == null ? void 0 : ot.branch) || null,
                onSwitch: we,
                onCreate: ye,
                onDelete: B
              }, null, 8, ["branches", "current"])) : ge.value === "history" ? (a(), M(kv, {
                key: 4,
                commits: K.value,
                onSelect: q,
                onCheckout: De
              }, null, 8, ["commits"])) : ge.value === "nodes" ? (a(), M(a_, {
                key: 5,
                "version-mismatches": ((Dt = (mt = x.value) == null ? void 0 : mt.comparison) == null ? void 0 : Dt.version_mismatches) || [],
                onOpenNodeManager: ae,
                onRepairEnvironment: be,
                onToast: Ne
              }, null, 8, ["version-mismatches"])) : ge.value === "debug-env" ? (a(), M(_2, { key: 6 })) : ge.value === "environments" ? (a(), M($$, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: L,
                onSwitch: vt,
                onCreated: Q,
                onDelete: Ke
              }, null, 512)) : ge.value === "model-index" ? (a(), M(Tw, {
                key: 8,
                onRefresh: te
              })) : ge.value === "settings" ? (a(), M(u2, { key: 9 })) : ge.value === "debug-workspace" ? (a(), M(w2, { key: 10 })) : ge.value === "deploy" ? (a(), M(e4, {
                key: 11,
                onToast: Ne,
                onNavigate: O
              })) : ge.value === "export" ? (a(), M(Z$, { key: 12 })) : ge.value === "import" ? (a(), M(Hx, {
                key: 13,
                onImportCompleteSwitch: ys
              })) : ge.value === "remotes" ? (a(), M(Gk, {
                key: 14,
                onToast: Ne
              })) : y("", !0)
            ], 64))
          ])
        ]),
        ee.value ? (a(), M(y4, {
          key: 0,
          commit: ee.value,
          onClose: H[25] || (H[25] = (Fe) => ee.value = null),
          onCheckout: De,
          onCreateBranch: U
        }, null, 8, ["commit"])) : y("", !0),
        ie.value ? (a(), M(Qa, {
          key: 1,
          title: ie.value.title,
          message: ie.value.message,
          details: ie.value.details,
          warning: ie.value.warning,
          confirmLabel: ie.value.confirmLabel,
          cancelLabel: ie.value.cancelLabel,
          secondaryLabel: ie.value.secondaryLabel,
          secondaryAction: ie.value.secondaryAction,
          destructive: ie.value.destructive,
          onConfirm: ie.value.onConfirm,
          onCancel: H[26] || (H[26] = (Fe) => ie.value = null),
          onSecondary: ie.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        C(y6, {
          show: Y.value,
          "from-environment": ((rs = T.value) == null ? void 0 : rs.name) || "unknown",
          "to-environment": $e.value,
          onConfirm: lt,
          onClose: oo
        }, null, 8, ["show", "from-environment", "to-environment"]),
        fe.value && x.value ? (a(), M(Lr, {
          key: 2,
          status: x.value,
          "as-modal": !0,
          onClose: H[27] || (H[27] = (Fe) => fe.value = !1),
          onCommitted: $o
        }, null, 8, ["status"])) : y("", !0),
        me.value && x.value ? (a(), M(U6, {
          key: 3,
          show: me.value,
          "mismatch-details": {
            missing_nodes: x.value.comparison.missing_nodes,
            extra_nodes: x.value.comparison.extra_nodes
          },
          onConfirm: Co,
          onClose: H[28] || (H[28] = (Fe) => me.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        C(T6, {
          show: de.value,
          state: Ge.value.state,
          progress: Ge.value.progress,
          message: Ge.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        A.value ? (a(), r("div", {
          key: 4,
          class: "dialog-overlay",
          onClick: H[30] || (H[30] = rt((Fe) => A.value = !1, ["self"]))
        }, [
          t("div", rE, [
            t("div", cE, [
              H[44] || (H[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: H[29] || (H[29] = (Fe) => A.value = !1)
              }, [...H[43] || (H[43] = [
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
            t("div", dE, [
              H[45] || (H[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", uE, [
                (a(!0), r(G, null, he(z.value, (Fe) => (a(), r("div", {
                  key: Fe.name,
                  class: Te(["env-item", { current: Fe.is_current }])
                }, [
                  t("div", fE, [
                    t("div", mE, [
                      t("span", vE, f(Fe.is_current ? "●" : "○"), 1),
                      t("span", pE, f(Fe.name), 1),
                      Fe.current_branch ? (a(), r("span", gE, "(" + f(Fe.current_branch) + ")", 1)) : y("", !0),
                      Fe.is_current ? (a(), r("span", hE, "CURRENT")) : y("", !0)
                    ]),
                    t("div", yE, f(Fe.workflow_count) + " workflows • " + f(Fe.node_count) + " nodes ", 1)
                  ]),
                  Fe.is_current ? y("", !0) : (a(), r("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (So) => vt(Fe.name)
                  }, " SWITCH ", 8, wE))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        R.value ? (a(), M(VI, {
          key: 5,
          "default-path": ((Ws = E.value) == null ? void 0 : Ws.default_path) || "~/comfygit",
          "detected-models-dir": ((Gs = E.value) == null ? void 0 : Gs.detected_models_dir) || null,
          "initial-step": Z.value,
          "existing-environments": ((X = E.value) == null ? void 0 : X.environments) || [],
          "cli-installed": ((ke = E.value) == null ? void 0 : ke.cli_installed) ?? !0,
          "setup-state": ((ze = E.value) == null ? void 0 : ze.state) || "no_workspace",
          "workspace-path": ((ct = E.value) == null ? void 0 : ct.workspace_path) || null,
          onComplete: ht,
          onClose: qt,
          onSwitchEnvironment: hs,
          onEnvironmentCreatedNoSwitch: ls
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", _E, [
          C(lu, { name: "toast" }, {
            default: h(() => [
              (a(!0), r(G, null, he(Ce.value, (Fe) => (a(), r("div", {
                key: Fe.id,
                class: Te(["toast", Fe.type])
              }, [
                t("span", bE, f(Fe.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), $E = /* @__PURE__ */ pe(kE, [["__scopeId", "data-v-037b3ee3"]]), CE = { class: "item-header" }, xE = { class: "item-info" }, SE = { class: "filename" }, IE = { class: "metadata" }, EE = { class: "size" }, TE = {
  key: 0,
  class: "type"
}, PE = { class: "item-actions" }, RE = {
  key: 0,
  class: "progress-section"
}, ME = { class: "progress-bar" }, DE = { class: "progress-stats" }, LE = { class: "downloaded" }, OE = { class: "speed" }, AE = {
  key: 0,
  class: "eta"
}, NE = {
  key: 1,
  class: "status-msg paused"
}, UE = {
  key: 2,
  class: "status-msg queued"
}, zE = {
  key: 3,
  class: "status-msg completed"
}, FE = {
  key: 4,
  class: "status-msg failed"
}, BE = {
  key: 0,
  class: "retries"
}, VE = /* @__PURE__ */ ve({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: s }) {
    const o = s;
    function n(c) {
      if (c === 0) return "?";
      const d = c / (1024 * 1024 * 1024);
      return d >= 1 ? `${d.toFixed(2)} GB` : `${(c / (1024 * 1024)).toFixed(1)} MB`;
    }
    function l(c) {
      return c === 0 ? "-" : `${(c / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function i(c) {
      if (c < 60) return `${Math.round(c)}s`;
      const d = Math.floor(c / 60);
      return d < 60 ? `${d}m` : `${Math.floor(d / 60)}h ${d % 60}m`;
    }
    return (c, d) => (a(), r("div", {
      class: Te(["download-item", `status-${e.item.status}`])
    }, [
      t("div", CE, [
        t("div", xE, [
          t("div", SE, f(e.item.filename), 1),
          t("div", IE, [
            t("span", EE, f(n(e.item.size)), 1),
            e.item.type ? (a(), r("span", TE, f(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", PE, [
          e.item.status === "queued" || e.item.status === "downloading" ? (a(), r("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: d[0] || (d[0] = (u) => o("cancel")),
            title: "Cancel"
          }, " × ")) : y("", !0),
          e.item.status === "paused" ? (a(), r("button", {
            key: 1,
            class: "action-icon resume",
            onClick: d[1] || (d[1] = (u) => o("resume")),
            title: "Resume"
          }, " ▶ ")) : y("", !0),
          e.item.status === "failed" ? (a(), r("button", {
            key: 2,
            class: "action-icon retry",
            onClick: d[2] || (d[2] = (u) => o("retry")),
            title: "Retry"
          }, " ↻ ")) : y("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (a(), r("button", {
            key: 3,
            class: "action-icon remove",
            onClick: d[3] || (d[3] = (u) => o("remove")),
            title: "Remove"
          }, " × ")) : y("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (a(), r("div", RE, [
        t("div", ME, [
          t("div", {
            class: "progress-fill",
            style: Ht({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", DE, [
          t("span", LE, f(n(e.item.downloaded)) + " / " + f(n(e.item.size)), 1),
          t("span", OE, f(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), r("span", AE, f(i(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), r("div", NE, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), r("div", UE, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), r("div", zE, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), r("div", FE, [
        b(" ✗ " + f(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), r("span", BE, "(" + f(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Po = /* @__PURE__ */ pe(VE, [["__scopeId", "data-v-2110df65"]]), WE = { class: "queue-title" }, GE = { class: "count" }, jE = { class: "queue-actions" }, HE = { class: "action-label" }, KE = {
  key: 0,
  class: "overall-progress"
}, qE = { class: "progress-bar" }, YE = {
  key: 0,
  class: "current-mini"
}, JE = { class: "filename" }, XE = { class: "speed" }, QE = {
  key: 1,
  class: "queue-content"
}, ZE = {
  key: 0,
  class: "section"
}, eT = {
  key: 1,
  class: "section"
}, tT = { class: "section-header" }, sT = { class: "section-label paused" }, oT = { class: "items-list" }, nT = {
  key: 2,
  class: "section"
}, aT = { class: "section-header" }, lT = { class: "section-label" }, iT = { class: "items-list" }, rT = {
  key: 3,
  class: "section"
}, cT = { class: "section-header" }, dT = { class: "section-label" }, uT = { class: "items-list" }, fT = {
  key: 4,
  class: "section"
}, mT = { class: "section-header" }, vT = { class: "section-label failed" }, pT = { class: "items-list" }, gT = /* @__PURE__ */ ve({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: s,
      currentDownload: o,
      queuedItems: n,
      completedItems: l,
      failedItems: i,
      pausedItems: c,
      hasItems: d,
      activeCount: u,
      cancelDownload: m,
      retryDownload: v,
      resumeDownload: g,
      resumeAllPaused: w,
      removeItem: p,
      clearCompleted: _
    } = bo(), S = k(!1);
    let $ = null;
    Ct(
      () => ({
        active: u.value,
        failed: i.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (x, K) => {
        $ && (clearTimeout($), $ = null);
        const V = x.active === 0 && x.failed === 0 && x.paused === 0 && x.completed > 0, z = K && (K.active > 0 || K.paused > 0);
        V && z && ($ = setTimeout(() => {
          _(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const P = N(() => {
      var V;
      if (s.items.length === 0) return 0;
      const x = l.value.length, K = ((V = o.value) == null ? void 0 : V.progress) || 0;
      return Math.round((x + K / 100) / s.items.length * 100);
    });
    function D(x) {
      m(x);
    }
    function I(x) {
      return x === 0 ? "" : `${(x / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (x, K) => (a(), M(wt, { to: "body" }, [
      We(d) ? (a(), r("div", {
        key: 0,
        class: Te(["model-download-queue", { minimized: !S.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: K[0] || (K[0] = (V) => S.value = !S.value)
        }, [
          t("div", WE, [
            K[4] || (K[4] = t("span", { class: "icon" }, "↓", -1)),
            K[5] || (K[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", GE, "(" + f(We(u)) + "/" + f(We(s).items.length) + ")", 1)
          ]),
          t("div", jE, [
            t("span", HE, f(S.value ? "minimize" : "expand"), 1)
          ])
        ]),
        S.value ? (a(), r("div", QE, [
          We(o) ? (a(), r("div", ZE, [
            K[6] || (K[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            C(Po, {
              item: We(o),
              onCancel: K[1] || (K[1] = (V) => D(We(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          We(c).length > 0 ? (a(), r("div", eT, [
            t("div", tT, [
              t("span", sT, "Paused (" + f(We(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: K[2] || (K[2] = //@ts-ignore
                (...V) => We(w) && We(w)(...V))
              }, "Resume All")
            ]),
            t("div", oT, [
              (a(!0), r(G, null, he(We(c), (V) => (a(), M(Po, {
                key: V.id,
                item: V,
                onResume: (z) => We(g)(V.id),
                onRemove: (z) => We(p)(V.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(n).length > 0 ? (a(), r("div", nT, [
            t("div", aT, [
              t("span", lT, "Queued (" + f(We(n).length) + ")", 1)
            ]),
            t("div", iT, [
              (a(!0), r(G, null, he(We(n), (V) => (a(), M(Po, {
                key: V.id,
                item: V,
                onCancel: (z) => D(V.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          We(l).length > 0 ? (a(), r("div", rT, [
            t("div", cT, [
              t("span", dT, "Completed (" + f(We(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: K[3] || (K[3] = //@ts-ignore
                (...V) => We(_) && We(_)(...V))
              }, "Clear")
            ]),
            t("div", uT, [
              (a(!0), r(G, null, he(We(l).slice(0, 3), (V) => (a(), M(Po, {
                key: V.id,
                item: V,
                onRemove: (z) => We(p)(V.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          We(i).length > 0 ? (a(), r("div", fT, [
            t("div", mT, [
              t("span", vT, "Failed (" + f(We(i).length) + ")", 1)
            ]),
            t("div", pT, [
              (a(!0), r(G, null, he(We(i), (V) => (a(), M(Po, {
                key: V.id,
                item: V,
                onRetry: (z) => We(v)(V.id),
                onRemove: (z) => We(p)(V.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), r("div", KE, [
          t("div", qE, [
            t("div", {
              class: "progress-fill",
              style: Ht({ width: `${P.value}%` })
            }, null, 4)
          ]),
          We(o) ? (a(), r("div", YE, [
            t("span", JE, f(We(o).filename), 1),
            t("span", XE, f(I(We(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), hT = /* @__PURE__ */ pe(gT, [["__scopeId", "data-v-60751cfa"]]), yT = {
  key: 0,
  class: "loading-state"
}, wT = {
  key: 1,
  class: "analysis-results"
}, _T = {
  key: 0,
  class: "section"
}, bT = { class: "section-header" }, kT = { class: "section-title" }, $T = { class: "item-list" }, CT = { class: "package-info" }, xT = { class: "package-name" }, ST = { class: "node-count" }, IT = {
  key: 1,
  class: "installed-badge"
}, ET = {
  key: 0,
  class: "overflow-note"
}, TT = {
  key: 1,
  class: "section"
}, PT = { class: "section-header" }, RT = { class: "section-title" }, MT = { class: "item-list" }, DT = { class: "node-type" }, LT = {
  key: 0,
  class: "overflow-note"
}, OT = {
  key: 2,
  class: "section"
}, AT = { class: "section-header" }, NT = { class: "section-title" }, UT = { class: "item-list" }, zT = { class: "model-info" }, FT = { class: "model-name" }, BT = {
  key: 1,
  class: "queued-badge"
}, VT = {
  key: 1,
  class: "no-url"
}, WT = {
  key: 0,
  class: "overflow-note"
}, GT = { class: "dont-show-again" }, jT = /* @__PURE__ */ ve({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = k(!1), o = k(null), n = k(null), l = k(!1), i = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), d = k(!1), u = k(null), m = k(null), v = k(0), { addToQueue: g } = bo(), { installNode: w } = at(), p = N(() => _.value.length > 0 || $.value.length > 0 || P.value.length > 0), _ = N(() => {
      var $e, Pe;
      if (!(($e = n.value) != null && $e.nodes)) return [];
      const Y = /* @__PURE__ */ new Map(), de = (n.value.nodes.resolved || []).filter((Ge) => {
        var Le;
        return !Ge.is_installed && ((Le = Ge.package) == null ? void 0 : Le.package_id);
      });
      for (const Ge of de) {
        const Le = Ge.package.package_id;
        Y.has(Le) || Y.set(Le, {
          package_id: Le,
          title: Ge.package.title || Le,
          node_count: 0,
          node_types: []
        });
        const Se = Y.get(Le);
        Se.node_count++, Se.node_types.push(((Pe = Ge.reference) == null ? void 0 : Pe.node_type) || Ge.node_type);
      }
      return Array.from(Y.values());
    }), S = N(() => _.value.reduce((Y, de) => Y + de.node_count, 0)), $ = N(() => {
      var Y;
      return (Y = n.value) != null && Y.nodes ? (n.value.nodes.unresolved || []).map((de) => {
        var $e;
        return {
          node_type: (($e = de.reference) == null ? void 0 : $e.node_type) || de.node_type
        };
      }) : [];
    }), P = N(() => {
      var $e;
      if (!(($e = n.value) != null && $e.models)) return [];
      const Y = (n.value.models.resolved || []).filter(
        (Pe) => Pe.match_type === "download_intent" || Pe.match_type === "property_download_intent" || Pe.match_type === "not_found"
      ).map((Pe) => {
        var Ge, Le, Se, Ie;
        return {
          filename: ((Le = (Ge = Pe.reference) == null ? void 0 : Ge.widget_value) == null ? void 0 : Le.split("/").pop()) || ((Se = Pe.reference) == null ? void 0 : Se.widget_value) || Pe.widget_value,
          widget_value: ((Ie = Pe.reference) == null ? void 0 : Ie.widget_value) || Pe.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: Pe.download_source || null,
          targetPath: Pe.target_path || null,
          canDownload: !!(Pe.download_source && Pe.target_path)
        };
      }), de = (n.value.models.unresolved || []).map((Pe) => {
        var Ge, Le, Se, Ie;
        return {
          filename: ((Le = (Ge = Pe.reference) == null ? void 0 : Ge.widget_value) == null ? void 0 : Le.split("/").pop()) || ((Se = Pe.reference) == null ? void 0 : Se.widget_value) || Pe.widget_value,
          widget_value: ((Ie = Pe.reference) == null ? void 0 : Ie.widget_value) || Pe.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...Y, ...de];
    }), D = N(() => P.value.filter((Y) => Y.canDownload)), I = N(() => _.value.length > 0 && _.value.every((Y) => i.value.has(Y.package_id))), x = N(() => D.value.length > 0 && D.value.every((Y) => c.value.has(Y.url))), K = N(() => _.value.length > 0 || D.value.length > 0), V = N(() => {
      const Y = _.value.length === 0 || I.value, de = D.value.length === 0 || x.value;
      return Y && de;
    });
    async function z(Y) {
      if (!i.value.has(Y)) {
        u.value = Y;
        try {
          await w(Y), i.value.add(Y), v.value++, window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
            detail: { count: v.value }
          }));
        } catch (de) {
          console.error("[ComfyGit] Failed to install package:", de);
        } finally {
          u.value = null;
        }
      }
    }
    function T(Y) {
      !Y.url || !Y.targetPath || c.value.has(Y.url) || (g([{
        workflow: "unsaved",
        filename: Y.filename,
        url: Y.url,
        targetPath: Y.targetPath
      }]), c.value.add(Y.url));
    }
    function E() {
      for (const Y of _.value)
        i.value.has(Y.package_id) || z(Y.package_id);
    }
    function R() {
      const Y = D.value.filter(
        (de) => !c.value.has(de.url)
      );
      if (Y.length !== 0) {
        g(Y.map((de) => ({
          workflow: "unsaved",
          filename: de.filename,
          url: de.url,
          targetPath: de.targetPath
        })));
        for (const de of Y)
          c.value.add(de.url);
      }
    }
    function Z() {
      E(), R();
    }
    function J(Y) {
      let de = 5381;
      for (let $e = 0; $e < Y.length; $e++)
        de = (de << 5) + de ^ Y.charCodeAt($e);
      return Math.abs(de).toString(16).padStart(8, "0");
    }
    function W(Y) {
      const de = ((Y == null ? void 0 : Y.nodes) || []).map(($e) => `${$e.id}:${$e.type}`).sort().join(",");
      return J(de);
    }
    function se(Y) {
      const de = W(Y);
      return localStorage.getItem("comfygit:popup-dismissed:" + de) !== "true";
    }
    function ee() {
      m.value && (d.value ? localStorage.setItem("comfygit:popup-dismissed:" + m.value, "true") : localStorage.removeItem("comfygit:popup-dismissed:" + m.value));
    }
    async function A(Y) {
      if (se(Y)) {
        s.value = !0, o.value = null, m.value = W(Y), i.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), d.value = !1, v.value = 0;
        try {
          const de = await fetch("/v2/comfygit/workflow/analyze-json", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ workflow: Y, name: "unsaved" })
          });
          if (!de.ok) {
            const $e = await de.json();
            throw new Error($e.error || "Failed to analyze workflow");
          }
          n.value = await de.json(), p.value && (l.value = !0);
        } catch (de) {
          console.error("[ComfyGit] Failed to analyze workflow:", de);
        } finally {
          s.value = !1;
        }
      }
    }
    function j() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      })), L();
    }
    function L() {
      l.value = !1, n.value = null, m.value = null;
    }
    function ne(Y) {
      const { workflow: de } = Y.detail;
      de && A(de);
    }
    return et(() => {
      window.addEventListener("comfygit:workflow-loaded", ne);
    }), so(() => {
      window.removeEventListener("comfygit:workflow-loaded", ne);
    }), (Y, de) => l.value ? (a(), M(pt, {
      key: 0,
      title: "Missing Dependencies",
      size: "md",
      loading: s.value,
      error: o.value || void 0,
      onClose: L
    }, {
      body: h(() => [
        s.value ? (a(), r("div", yT, [...de[1] || (de[1] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("span", null, "Analyzing workflow...", -1)
        ])])) : n.value && p.value ? (a(), r("div", wT, [
          _.value.length > 0 ? (a(), r("div", _T, [
            t("div", bT, [
              t("span", kT, "Missing Custom Nodes (" + f(S.value) + ")", 1),
              _.value.length > 1 ? (a(), M(Me, {
                key: 0,
                size: "sm",
                variant: "secondary",
                disabled: I.value,
                onClick: E
              }, {
                default: h(() => [
                  b(f(I.value ? "All Installed" : "Install All"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y("", !0)
            ]),
            t("div", $T, [
              (a(!0), r(G, null, he(_.value.slice(0, 5), ($e) => (a(), r("div", {
                key: $e.package_id,
                class: "package-item"
              }, [
                t("div", CT, [
                  t("span", xT, f($e.title), 1),
                  t("span", ST, "(" + f($e.node_count) + " " + f($e.node_count === 1 ? "node" : "nodes") + ")", 1)
                ]),
                i.value.has($e.package_id) ? (a(), r("span", IT, "Installed")) : (a(), M(Me, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: u.value === $e.package_id,
                  onClick: (Pe) => z($e.package_id)
                }, {
                  default: h(() => [
                    b(f(u.value === $e.package_id ? "Installing..." : "Install"), 1)
                  ]),
                  _: 2
                }, 1032, ["disabled", "onClick"]))
              ]))), 128)),
              _.value.length > 5 ? (a(), r("div", ET, " ...and " + f(_.value.length - 5) + " more packages ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          $.value.length > 0 ? (a(), r("div", TT, [
            t("div", PT, [
              t("span", RT, "Unknown Nodes (" + f($.value.length) + ")", 1)
            ]),
            t("div", MT, [
              (a(!0), r(G, null, he($.value.slice(0, 5), ($e) => (a(), r("div", {
                key: $e.node_type,
                class: "item"
              }, [
                t("code", DT, f($e.node_type), 1),
                de[2] || (de[2] = t("span", { class: "not-found" }, "Not found in registry", -1))
              ]))), 128)),
              $.value.length > 5 ? (a(), r("div", LT, " ...and " + f($.value.length - 5) + " more ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          P.value.length > 0 ? (a(), r("div", OT, [
            t("div", AT, [
              t("span", NT, "Missing Models (" + f(P.value.length) + ")", 1),
              D.value.length > 1 ? (a(), M(Me, {
                key: 0,
                size: "sm",
                variant: "secondary",
                disabled: x.value,
                onClick: R
              }, {
                default: h(() => [
                  b(f(x.value ? "All Queued" : "Download All"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y("", !0)
            ]),
            t("div", UT, [
              (a(!0), r(G, null, he(P.value.slice(0, 5), ($e) => (a(), r("div", {
                key: $e.widget_value,
                class: "model-item"
              }, [
                t("div", zT, [
                  t("span", FT, f($e.filename), 1)
                ]),
                $e.canDownload ? (a(), r(G, { key: 0 }, [
                  c.value.has($e.url) ? (a(), r("span", BT, "Queued")) : (a(), M(Me, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    onClick: (Pe) => T($e)
                  }, {
                    default: h(() => [...de[3] || (de[3] = [
                      b(" Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"]))
                ], 64)) : (a(), r("span", VT, "Manual download required"))
              ]))), 128)),
              P.value.length > 5 ? (a(), r("div", WT, " ...and " + f(P.value.length - 5) + " more ", 1)) : y("", !0)
            ])
          ])) : y("", !0),
          t("div", GT, [
            C(Ia, {
              modelValue: d.value,
              "onUpdate:modelValue": [
                de[0] || (de[0] = ($e) => d.value = $e),
                ee
              ]
            }, {
              default: h(() => [...de[4] || (de[4] = [
                b(" Don't show again for this workflow ", -1)
              ])]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])) : y("", !0)
      ]),
      footer: h(() => [
        C(Me, {
          variant: "secondary",
          onClick: L
        }, {
          default: h(() => [...de[5] || (de[5] = [
            b("Dismiss", -1)
          ])]),
          _: 1
        }),
        K.value ? (a(), M(Me, {
          key: 0,
          variant: "primary",
          disabled: V.value,
          onClick: Z
        }, {
          default: h(() => [
            b(f(V.value ? "All Done" : "Download All"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : (a(), M(Me, {
          key: 1,
          variant: "primary",
          onClick: j
        }, {
          default: h(() => [...de[6] || (de[6] = [
            b("Open ComfyGit Panel", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["loading", "error"])) : y("", !0);
  }
}), HT = /* @__PURE__ */ pe(jT, [["__scopeId", "data-v-33e253ea"]]), KT = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', qT = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', YT = {
  comfy: KT,
  phosphor: qT
}, el = "comfy", Nr = "comfygit-theme";
let qs = null, Ur = el;
function JT() {
  try {
    const e = localStorage.getItem(Nr);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return el;
}
function zr(e = el) {
  qs && qs.remove(), qs = document.createElement("style"), qs.id = "comfygit-theme-styles", qs.setAttribute("data-theme", e), qs.textContent = YT[e], document.head.appendChild(qs), document.body.setAttribute("data-comfygit-theme", e), Ur = e;
  try {
    localStorage.setItem(Nr, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function XT() {
  return Ur;
}
function QT(e) {
  zr(e);
}
function ZT(e) {
  var i;
  const { ui_id: s, state: o } = e || {}, n = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = n[s];
  return l && l.result === "error" && ((i = l.status) == null ? void 0 : i.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const tl = document.createElement("link");
tl.rel = "stylesheet";
tl.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(tl);
const e7 = JT();
zr(e7);
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), QT(e);
  },
  getTheme: () => {
    const e = XT();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Jt = null, Ot = null, Wo = null, Ro = null, Xl = null, Mo = null, Ql = null;
const go = k(null);
let sl = "managed", Fr = !1;
async function bn() {
  var e;
  if (!((e = Bt) != null && e.api)) return null;
  try {
    const s = await Bt.api.fetchApi("/v2/comfygit/status");
    s.ok && (go.value = await s.json());
  } catch {
  }
}
async function Ea() {
  var e;
  if ((e = Bt) != null && e.api)
    try {
      const s = await Bt.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        sl = o.state, Fr = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Ta() {
  var s;
  if (sl === "managed" || !Fr) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function t7() {
  if (!go.value) return !1;
  const e = go.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || go.value.has_changes;
}
function fa(e) {
  Jt && Jt.remove(), Jt = document.createElement("div"), Jt.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", Jt.appendChild(s), Jt.addEventListener("click", (l) => {
    l.target === Jt && ma();
  });
  const o = (l) => {
    l.key === "Escape" && (ma(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), Kn({
    render: () => sn($E, {
      initialView: e,
      onClose: ma,
      onStatusUpdate: async (l) => {
        go.value = l, Go(), await Ea(), Pa(), Ta();
      }
    })
  }).mount(s), document.body.appendChild(Jt);
}
function ma() {
  Jt && (Jt.remove(), Jt = null);
}
function s7(e) {
  Do(), Ot = document.createElement("div"), Ot.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Ot.style.position = "fixed", Ot.style.top = `${s.bottom + 8}px`, Ot.style.right = `${window.innerWidth - s.right}px`, Ot.style.zIndex = "10001";
  const o = (l) => {
    Ot && !Ot.contains(l.target) && l.target !== e && (Do(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const n = (l) => {
    l.key === "Escape" && (Do(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), Wo = Kn({
    render: () => sn(Lr, {
      status: go.value,
      onClose: Do,
      onCommitted: (l) => {
        Do(), o7(l.success, l.message), bn().then(Go);
      }
    })
  }), Wo.mount(Ot), document.body.appendChild(Ot);
}
function Do() {
  Wo && (Wo.unmount(), Wo = null), Ot && (Ot.remove(), Ot = null);
}
function o7(e, s) {
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
function n7() {
  Ro || (Ro = document.createElement("div"), Ro.className = "comfygit-download-queue-root", Xl = Kn({
    render: () => sn(hT)
  }), Xl.mount(Ro), document.body.appendChild(Ro), console.log("[ComfyGit] Model download queue mounted"));
}
function a7() {
  Mo || (Mo = document.createElement("div"), Mo.className = "comfygit-missing-resources-root", Ql = Kn({
    render: () => sn(HT)
  }), Ql.mount(Mo), document.body.appendChild(Mo), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Vt = null;
function Go() {
  if (!Vt) return;
  const e = Vt.querySelector(".commit-indicator");
  e && (e.style.display = t7() ? "block" : "none");
}
function Pa() {
  if (!Vt) return;
  const e = sl !== "managed";
  Vt.disabled = e, Vt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Br = document.createElement("style");
Br.textContent = `
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
document.head.appendChild(Br);
Bt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Hook into workflow loading to intercept missing resources
  // This runs BEFORE ComfyUI's missing nodes/models dialogs
  async beforeConfigureGraph(e, s) {
    var o;
    try {
      await Promise.all([
        Bt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
        Bt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = fa, Vt = document.createElement("button"), Vt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Vt.innerHTML = 'Commit <span class="commit-indicator"></span>', Vt.title = "Quick Commit", Vt.onclick = () => s7(Vt), e.appendChild(s), e.appendChild(Vt), (i = (l = Bt.menu) == null ? void 0 : l.settingsGroup) != null && i.element && (Bt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), n7(), a7(), window.addEventListener("comfygit:open-panel", ((c) => {
      var u;
      const d = (u = c.detail) == null ? void 0 : u.initialView;
      fa(d);
    }));
    const { loadPendingDownloads: o } = bo();
    o(), await Promise.all([bn(), Ea()]), Go(), Pa(), Ta(), setTimeout(Ta, 100), setInterval(async () => {
      await Promise.all([bn(), Ea()]), Go(), Pa();
    }, 3e4);
    const n = Bt.api;
    if (n) {
      let c = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((g) => {
          (g.startsWith("workflow:") || g.startsWith("Comfy.OpenWorkflowsPaths:") || g.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(g);
        }), window.location.reload();
      }, d = function() {
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
      }, u = function(g) {
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
        const S = document.createElement("div");
        S.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const $ = document.createElement("div");
        $.textContent = "Node installation failed", $.style.cssText = "font-weight: 600; color: #e53935;", S.appendChild($);
        const P = document.createElement("div");
        P.textContent = "Dependency conflict detected", P.style.cssText = "font-size: 12px; opacity: 0.8;", S.appendChild(P), p.appendChild(S);
        const D = document.createElement("button");
        D.textContent = "View Logs", D.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, D.onmouseover = () => D.style.background = "#c62828", D.onmouseout = () => D.style.background = "#e53935", D.onclick = () => {
          p.remove(), fa("debug-env");
        }, p.appendChild(D);
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
        const S = document.createElement("div");
        S.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const $ = document.createElement("div");
        $.textContent = "To apply changes, please restart ComfyUI", $.style.cssText = "font-weight: 500; color: #fff;", S.appendChild($);
        const P = document.createElement("div");
        P.textContent = `${g} node package${g > 1 ? "s" : ""} ready to install`, P.style.cssText = "font-size: 12px; opacity: 0.7;", S.appendChild(P), p.appendChild(S);
        const D = document.createElement("button");
        D.textContent = "Apply Changes", D.style.cssText = `
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
        `, D.onmouseover = () => D.style.background = "rgba(255,255,255,0.1)", D.onmouseout = () => D.style.background = "transparent", D.onclick = async () => {
          D.disabled = !0, D.textContent = "Restarting...", D.style.opacity = "0.7", $.textContent = "Restarting...", P.textContent = "Applying changes, please wait...";
          try {
            const x = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Bt.refreshComboInNodes && (await Bt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", $.textContent = "Nodes Installed", $.style.color = "#4caf50", P.textContent = `${g} package${g > 1 ? "s" : ""} installed successfully!`, p.style.borderColor = "#4caf50", D.style.display = "none", setTimeout(() => {
                  p.remove();
                }, 3e3);
              } catch (K) {
                console.error("[ComfyGit] Failed to refresh nodes:", K), _.textContent = "✅", $.textContent = "Restart Complete", $.style.color = "#4caf50", P.textContent = "Refresh the page to load new nodes.", p.style.borderColor = "#4caf50", D.style.display = "none";
              }
            };
            n.addEventListener("reconnected", x, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (x) {
            console.error("[ComfyGit] Failed to restart:", x), $.textContent = "Restart Failed", $.style.color = "#e53935", P.textContent = "Could not restart server. Try again.", p.style.borderColor = "#e53935", D.textContent = "Try Again", D.disabled = !1, D.style.opacity = "1";
          }
        }, p.appendChild(D);
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
        console.log(`[ComfyGit] Workflow ${w}: ${p}`), await bn(), Go();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      n.addEventListener("status", async (g) => {
        const w = g.detail != null;
        w && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : d()), v = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (g) => {
        const w = ZT(g.detail);
        w && u(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const w = g, { count: p = 1 } = w.detail || {};
        m(p);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
