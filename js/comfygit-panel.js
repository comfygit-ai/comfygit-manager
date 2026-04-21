import { app as ss } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ja(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const ht = {}, Io = [], Ss = () => {
}, wi = () => !1, Xn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Qa = (e) => e.startsWith("onUpdate:"), Mt = Object.assign, Xa = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, mc = Object.prototype.hasOwnProperty, ut = (e, s) => mc.call(e, s), Ye = Array.isArray, Eo = (e) => vn(e) === "[object Map]", No = (e) => vn(e) === "[object Set]", bl = (e) => vn(e) === "[object Date]", Ze = (e) => typeof e == "function", St = (e) => typeof e == "string", vs = (e) => typeof e == "symbol", pt = (e) => e !== null && typeof e == "object", _i = (e) => (pt(e) || Ze(e)) && Ze(e.then) && Ze(e.catch), ki = Object.prototype.toString, vn = (e) => ki.call(e), fc = (e) => vn(e).slice(8, -1), bi = (e) => vn(e) === "[object Object]", Za = (e) => St(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, qo = /* @__PURE__ */ Ja(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Zn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, vc = /-\w/g, ls = Zn(
  (e) => e.replace(vc, (s) => s.slice(1).toUpperCase())
), pc = /\B([A-Z])/g, Ys = Zn(
  (e) => e.replace(pc, "-$1").toLowerCase()
), ea = Zn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ha = Zn(
  (e) => e ? `on${ea(e)}` : ""
), Hs = (e, s) => !Object.is(e, s), Rn = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, $i = (e, s, o, a = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: o
  });
}, ta = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, gc = (e) => {
  const s = St(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let $l;
const sa = () => $l || ($l = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Zt(e) {
  if (Ye(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = St(a) ? _c(a) : Zt(a);
      if (l)
        for (const r in l)
          s[r] = l[r];
    }
    return s;
  } else if (St(e) || pt(e))
    return e;
}
const hc = /;(?![^(]*\))/g, yc = /:([^]+)/, wc = /\/\*[^]*?\*\//g;
function _c(e) {
  const s = {};
  return e.replace(wc, "").split(hc).forEach((o) => {
    if (o) {
      const a = o.split(yc);
      a.length > 1 && (s[a[0].trim()] = a[1].trim());
    }
  }), s;
}
function De(e) {
  let s = "";
  if (St(e))
    s = e;
  else if (Ye(e))
    for (let o = 0; o < e.length; o++) {
      const a = De(e[o]);
      a && (s += a + " ");
    }
  else if (pt(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const kc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", bc = /* @__PURE__ */ Ja(kc);
function Ci(e) {
  return !!e || e === "";
}
function $c(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let a = 0; o && a < e.length; a++)
    o = co(e[a], s[a]);
  return o;
}
function co(e, s) {
  if (e === s) return !0;
  let o = bl(e), a = bl(s);
  if (o || a)
    return o && a ? e.getTime() === s.getTime() : !1;
  if (o = vs(e), a = vs(s), o || a)
    return e === s;
  if (o = Ye(e), a = Ye(s), o || a)
    return o && a ? $c(e, s) : !1;
  if (o = pt(e), a = pt(s), o || a) {
    if (!o || !a)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(s).length;
    if (l !== r)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), m = s.hasOwnProperty(c);
      if (u && !m || !u && m || !co(e[c], s[c]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function el(e, s) {
  return e.findIndex((o) => co(o, s));
}
const xi = (e) => !!(e && e.__v_isRef === !0), d = (e) => St(e) ? e : e == null ? "" : Ye(e) || pt(e) && (e.toString === ki || !Ze(e.toString)) ? xi(e) ? d(e.value) : JSON.stringify(e, Si, 2) : String(e), Si = (e, s) => xi(s) ? Si(e, s.value) : Eo(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [a, l], r) => (o[ya(a, r) + " =>"] = l, o),
    {}
  )
} : No(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => ya(o))
} : vs(s) ? ya(s) : pt(s) && !Ye(s) && !bi(s) ? String(s) : s, ya = (e, s = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    vs(e) ? `Symbol(${(o = e.description) != null ? o : s})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let qt;
class Cc {
  constructor(s = !1) {
    this.detached = s, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = qt, !s && qt && (this.index = (qt.scopes || (qt.scopes = [])).push(
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
      const o = qt;
      try {
        return qt = this, s();
      } finally {
        qt = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = qt, qt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (qt = this.prevScope, this.prevScope = void 0);
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
function xc() {
  return qt;
}
let _t;
const wa = /* @__PURE__ */ new WeakSet();
class Ii {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, qt && qt.active && qt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, wa.has(this) && (wa.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ti(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Cl(this), Pi(this);
    const s = _t, o = fs;
    _t = this, fs = !0;
    try {
      return this.fn();
    } finally {
      Ri(this), _t = s, fs = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        ol(s);
      this.deps = this.depsTail = void 0, Cl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? wa.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    La(this) && this.run();
  }
  get dirty() {
    return La(this);
  }
}
let Ei = 0, Yo, Jo;
function Ti(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = Jo, Jo = e;
    return;
  }
  e.next = Yo, Yo = e;
}
function tl() {
  Ei++;
}
function sl() {
  if (--Ei > 0)
    return;
  if (Jo) {
    let s = Jo;
    for (Jo = void 0; s; ) {
      const o = s.next;
      s.next = void 0, s.flags &= -9, s = o;
    }
  }
  let e;
  for (; Yo; ) {
    let s = Yo;
    for (Yo = void 0; s; ) {
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
function Pi(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function Ri(e) {
  let s, o = e.depsTail, a = o;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === o && (o = l), ol(a), Sc(a)) : s = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = s, e.depsTail = o;
}
function La(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (Mi(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function Mi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === nn) || (e.globalVersion = nn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !La(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = _t, a = fs;
  _t = e, fs = !0;
  try {
    Pi(e);
    const l = e.fn(e._value);
    (s.version === 0 || Hs(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    _t = o, fs = a, Ri(e), e.flags &= -3;
  }
}
function ol(e, s = !1) {
  const { dep: o, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), o.subs === e && (o.subs = a, !a && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      ol(r, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function Sc(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let fs = !0;
const Di = [];
function Ls() {
  Di.push(fs), fs = !1;
}
function Us() {
  const e = Di.pop();
  fs = e === void 0 ? !0 : e;
}
function Cl(e) {
  const { cleanup: s } = e;
  if (e.cleanup = void 0, s) {
    const o = _t;
    _t = void 0;
    try {
      s();
    } finally {
      _t = o;
    }
  }
}
let nn = 0;
class Ic {
  constructor(s, o) {
    this.sub = s, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class nl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(s) {
    this.computed = s, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(s) {
    if (!_t || !fs || _t === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== _t)
      o = this.activeLink = new Ic(_t, this), _t.deps ? (o.prevDep = _t.depsTail, _t.depsTail.nextDep = o, _t.depsTail = o) : _t.deps = _t.depsTail = o, Li(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = _t.depsTail, o.nextDep = void 0, _t.depsTail.nextDep = o, _t.depsTail = o, _t.deps === o && (_t.deps = a);
    }
    return o;
  }
  trigger(s) {
    this.version++, nn++, this.notify(s);
  }
  notify(s) {
    tl();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      sl();
    }
  }
}
function Li(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let a = s.deps; a; a = a.nextDep)
        Li(a);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Ua = /* @__PURE__ */ new WeakMap(), lo = Symbol(
  ""
), Na = Symbol(
  ""
), an = Symbol(
  ""
);
function At(e, s, o) {
  if (fs && _t) {
    let a = Ua.get(e);
    a || Ua.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(o);
    l || (a.set(o, l = new nl()), l.map = a, l.key = o), l.track();
  }
}
function Rs(e, s, o, a, l, r) {
  const c = Ua.get(e);
  if (!c) {
    nn++;
    return;
  }
  const u = (m) => {
    m && m.trigger();
  };
  if (tl(), s === "clear")
    c.forEach(u);
  else {
    const m = Ye(e), f = m && Za(o);
    if (m && o === "length") {
      const v = Number(a);
      c.forEach((p, _) => {
        (_ === "length" || _ === an || !vs(_) && _ >= v) && u(p);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), f && u(c.get(an)), s) {
        case "add":
          m ? f && u(c.get("length")) : (u(c.get(lo)), Eo(e) && u(c.get(Na)));
          break;
        case "delete":
          m || (u(c.get(lo)), Eo(e) && u(c.get(Na)));
          break;
        case "set":
          Eo(e) && u(c.get(lo));
          break;
      }
  }
  sl();
}
function ko(e) {
  const s = rt(e);
  return s === e ? s : (At(s, "iterate", an), os(e) ? s : s.map(ps));
}
function oa(e) {
  return At(e = rt(e), "iterate", an), e;
}
function Ws(e, s) {
  return Ns(e) ? io(e) ? Do(ps(s)) : Do(s) : ps(s);
}
const Ec = {
  __proto__: null,
  [Symbol.iterator]() {
    return _a(this, Symbol.iterator, (e) => Ws(this, e));
  },
  concat(...e) {
    return ko(this).concat(
      ...e.map((s) => Ye(s) ? ko(s) : s)
    );
  },
  entries() {
    return _a(this, "entries", (e) => (e[1] = Ws(this, e[1]), e));
  },
  every(e, s) {
    return Es(this, "every", e, s, void 0, arguments);
  },
  filter(e, s) {
    return Es(
      this,
      "filter",
      e,
      s,
      (o) => o.map((a) => Ws(this, a)),
      arguments
    );
  },
  find(e, s) {
    return Es(
      this,
      "find",
      e,
      s,
      (o) => Ws(this, o),
      arguments
    );
  },
  findIndex(e, s) {
    return Es(this, "findIndex", e, s, void 0, arguments);
  },
  findLast(e, s) {
    return Es(
      this,
      "findLast",
      e,
      s,
      (o) => Ws(this, o),
      arguments
    );
  },
  findLastIndex(e, s) {
    return Es(this, "findLastIndex", e, s, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, s) {
    return Es(this, "forEach", e, s, void 0, arguments);
  },
  includes(...e) {
    return ka(this, "includes", e);
  },
  indexOf(...e) {
    return ka(this, "indexOf", e);
  },
  join(e) {
    return ko(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ka(this, "lastIndexOf", e);
  },
  map(e, s) {
    return Es(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return zo(this, "pop");
  },
  push(...e) {
    return zo(this, "push", e);
  },
  reduce(e, ...s) {
    return xl(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return xl(this, "reduceRight", e, s);
  },
  shift() {
    return zo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return Es(this, "some", e, s, void 0, arguments);
  },
  splice(...e) {
    return zo(this, "splice", e);
  },
  toReversed() {
    return ko(this).toReversed();
  },
  toSorted(e) {
    return ko(this).toSorted(e);
  },
  toSpliced(...e) {
    return ko(this).toSpliced(...e);
  },
  unshift(...e) {
    return zo(this, "unshift", e);
  },
  values() {
    return _a(this, "values", (e) => Ws(this, e));
  }
};
function _a(e, s, o) {
  const a = oa(e), l = a[s]();
  return a !== e && !os(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const Tc = Array.prototype;
function Es(e, s, o, a, l, r) {
  const c = oa(e), u = c !== e && !os(e), m = c[s];
  if (m !== Tc[s]) {
    const p = m.apply(e, r);
    return u ? ps(p) : p;
  }
  let f = o;
  c !== e && (u ? f = function(p, _) {
    return o.call(this, Ws(e, p), _, e);
  } : o.length > 2 && (f = function(p, _) {
    return o.call(this, p, _, e);
  }));
  const v = m.call(c, f, a);
  return u && l ? l(v) : v;
}
function xl(e, s, o, a) {
  const l = oa(e);
  let r = o;
  return l !== e && (os(e) ? o.length > 3 && (r = function(c, u, m) {
    return o.call(this, c, u, m, e);
  }) : r = function(c, u, m) {
    return o.call(this, c, Ws(e, u), m, e);
  }), l[s](r, ...a);
}
function ka(e, s, o) {
  const a = rt(e);
  At(a, "iterate", an);
  const l = a[s](...o);
  return (l === -1 || l === !1) && il(o[0]) ? (o[0] = rt(o[0]), a[s](...o)) : l;
}
function zo(e, s, o = []) {
  Ls(), tl();
  const a = rt(e)[s].apply(e, o);
  return sl(), Us(), a;
}
const Pc = /* @__PURE__ */ Ja("__proto__,__v_isRef,__isVue"), Ui = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(vs)
);
function Rc(e) {
  vs(e) || (e = String(e));
  const s = rt(this);
  return At(s, "has", e), s.hasOwnProperty(e);
}
class Ni {
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
      return a === (l ? r ? Fc : Vi : r ? zi : Ai).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(a) ? s : void 0;
    const c = Ye(s);
    if (!l) {
      let m;
      if (c && (m = Ec[o]))
        return m;
      if (o === "hasOwnProperty")
        return Rc;
    }
    const u = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ft(s) ? s : a
    );
    if ((vs(o) ? Ui.has(o) : Pc(o)) || (l || At(s, "get", o), r))
      return u;
    if (Ft(u)) {
      const m = c && Za(o) ? u : u.value;
      return l && pt(m) ? zn(m) : m;
    }
    return pt(u) ? l ? zn(u) : Js(u) : u;
  }
}
class Oi extends Ni {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, a, l) {
    let r = s[o];
    const c = Ye(s) && Za(o);
    if (!this._isShallow) {
      const f = Ns(r);
      if (!os(a) && !Ns(a) && (r = rt(r), a = rt(a)), !c && Ft(r) && !Ft(a))
        return f || (r.value = a), !0;
    }
    const u = c ? Number(o) < s.length : ut(s, o), m = Reflect.set(
      s,
      o,
      a,
      Ft(s) ? s : l
    );
    return s === rt(l) && (u ? Hs(a, r) && Rs(s, "set", o, a) : Rs(s, "add", o, a)), m;
  }
  deleteProperty(s, o) {
    const a = ut(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && a && Rs(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const a = Reflect.has(s, o);
    return (!vs(o) || !Ui.has(o)) && At(s, "has", o), a;
  }
  ownKeys(s) {
    return At(
      s,
      "iterate",
      Ye(s) ? "length" : lo
    ), Reflect.ownKeys(s);
  }
}
class Mc extends Ni {
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
const Dc = /* @__PURE__ */ new Oi(), Lc = /* @__PURE__ */ new Mc(), Uc = /* @__PURE__ */ new Oi(!0);
const Oa = (e) => e, _n = (e) => Reflect.getPrototypeOf(e);
function Nc(e, s, o) {
  return function(...a) {
    const l = this.__v_raw, r = rt(l), c = Eo(r), u = e === "entries" || e === Symbol.iterator && c, m = e === "keys" && c, f = l[e](...a), v = o ? Oa : s ? Do : ps;
    return !s && At(
      r,
      "iterate",
      m ? Na : lo
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
function kn(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Oc(e, s) {
  const o = {
    get(l) {
      const r = this.__v_raw, c = rt(r), u = rt(l);
      e || (Hs(l, u) && At(c, "get", l), At(c, "get", u));
      const { has: m } = _n(c), f = s ? Oa : e ? Do : ps;
      if (m.call(c, l))
        return f(r.get(l));
      if (m.call(c, u))
        return f(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && At(rt(l), "iterate", lo), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = rt(r), u = rt(l);
      return e || (Hs(l, u) && At(c, "has", l), At(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, m = rt(u), f = s ? Oa : e ? Do : ps;
      return !e && At(m, "iterate", lo), u.forEach((v, p) => l.call(r, f(v), f(p), c));
    }
  };
  return Mt(
    o,
    e ? {
      add: kn("add"),
      set: kn("set"),
      delete: kn("delete"),
      clear: kn("clear")
    } : {
      add(l) {
        !s && !os(l) && !Ns(l) && (l = rt(l));
        const r = rt(this);
        return _n(r).has.call(r, l) || (r.add(l), Rs(r, "add", l, l)), this;
      },
      set(l, r) {
        !s && !os(r) && !Ns(r) && (r = rt(r));
        const c = rt(this), { has: u, get: m } = _n(c);
        let f = u.call(c, l);
        f || (l = rt(l), f = u.call(c, l));
        const v = m.call(c, l);
        return c.set(l, r), f ? Hs(r, v) && Rs(c, "set", l, r) : Rs(c, "add", l, r), this;
      },
      delete(l) {
        const r = rt(this), { has: c, get: u } = _n(r);
        let m = c.call(r, l);
        m || (l = rt(l), m = c.call(r, l)), u && u.call(r, l);
        const f = r.delete(l);
        return m && Rs(r, "delete", l, void 0), f;
      },
      clear() {
        const l = rt(this), r = l.size !== 0, c = l.clear();
        return r && Rs(
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
    o[l] = Nc(l, e, s);
  }), o;
}
function al(e, s) {
  const o = Oc(e, s);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    ut(o, l) && l in a ? o : a,
    l,
    r
  );
}
const Ac = {
  get: /* @__PURE__ */ al(!1, !1)
}, zc = {
  get: /* @__PURE__ */ al(!1, !0)
}, Vc = {
  get: /* @__PURE__ */ al(!0, !1)
};
const Ai = /* @__PURE__ */ new WeakMap(), zi = /* @__PURE__ */ new WeakMap(), Vi = /* @__PURE__ */ new WeakMap(), Fc = /* @__PURE__ */ new WeakMap();
function Bc(e) {
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
function Wc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Bc(fc(e));
}
function Js(e) {
  return Ns(e) ? e : ll(
    e,
    !1,
    Dc,
    Ac,
    Ai
  );
}
function Gc(e) {
  return ll(
    e,
    !1,
    Uc,
    zc,
    zi
  );
}
function zn(e) {
  return ll(
    e,
    !0,
    Lc,
    Vc,
    Vi
  );
}
function ll(e, s, o, a, l) {
  if (!pt(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const r = Wc(e);
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
function io(e) {
  return Ns(e) ? io(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ns(e) {
  return !!(e && e.__v_isReadonly);
}
function os(e) {
  return !!(e && e.__v_isShallow);
}
function il(e) {
  return e ? !!e.__v_raw : !1;
}
function rt(e) {
  const s = e && e.__v_raw;
  return s ? rt(s) : e;
}
function jc(e) {
  return !ut(e, "__v_skip") && Object.isExtensible(e) && $i(e, "__v_skip", !0), e;
}
const ps = (e) => pt(e) ? Js(e) : e, Do = (e) => pt(e) ? zn(e) : e;
function Ft(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return Hc(e, !1);
}
function Hc(e, s) {
  return Ft(e) ? e : new Kc(e, s);
}
class Kc {
  constructor(s, o) {
    this.dep = new nl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : rt(s), this._value = o ? s : ps(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, a = this.__v_isShallow || os(s) || Ns(s);
    s = a ? s : rt(s), Hs(s, o) && (this._rawValue = s, this._value = a ? s : ps(s), this.dep.trigger());
  }
}
function Xe(e) {
  return Ft(e) ? e.value : e;
}
const qc = {
  get: (e, s, o) => s === "__v_raw" ? e : Xe(Reflect.get(e, s, o)),
  set: (e, s, o, a) => {
    const l = e[s];
    return Ft(l) && !Ft(o) ? (l.value = o, !0) : Reflect.set(e, s, o, a);
  }
};
function Fi(e) {
  return io(e) ? e : new Proxy(e, qc);
}
class Yc {
  constructor(s, o, a) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new nl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = nn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    _t !== this)
      return Ti(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return Mi(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function Jc(e, s, o = !1) {
  let a, l;
  return Ze(e) ? a = e : (a = e.get, l = e.set), new Yc(a, l, o);
}
const bn = {}, Vn = /* @__PURE__ */ new WeakMap();
let no;
function Qc(e, s = !1, o = no) {
  if (o) {
    let a = Vn.get(o);
    a || Vn.set(o, a = []), a.push(e);
  }
}
function Xc(e, s, o = ht) {
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: m } = o, f = (P) => l ? P : os(P) || l === !1 || l === 0 ? Ms(P, 1) : Ms(P);
  let v, p, _, h, w = !1, x = !1;
  if (Ft(e) ? (p = () => e.value, w = os(e)) : io(e) ? (p = () => f(e), w = !0) : Ye(e) ? (x = !0, w = e.some((P) => io(P) || os(P)), p = () => e.map((P) => {
    if (Ft(P))
      return P.value;
    if (io(P))
      return f(P);
    if (Ze(P))
      return m ? m(P, 2) : P();
  })) : Ze(e) ? s ? p = m ? () => m(e, 2) : e : p = () => {
    if (_) {
      Ls();
      try {
        _();
      } finally {
        Us();
      }
    }
    const P = no;
    no = v;
    try {
      return m ? m(e, 3, [h]) : e(h);
    } finally {
      no = P;
    }
  } : p = Ss, s && l) {
    const P = p, M = l === !0 ? 1 / 0 : l;
    p = () => Ms(P(), M);
  }
  const b = xc(), S = () => {
    v.stop(), b && b.active && Xa(b.effects, v);
  };
  if (r && s) {
    const P = s;
    s = (...M) => {
      P(...M), S();
    };
  }
  let A = x ? new Array(e.length).fill(bn) : bn;
  const T = (P) => {
    if (!(!(v.flags & 1) || !v.dirty && !P))
      if (s) {
        const M = v.run();
        if (l || w || (x ? M.some((O, F) => Hs(O, A[F])) : Hs(M, A))) {
          _ && _();
          const O = no;
          no = v;
          try {
            const F = [
              M,
              // pass undefined as the old value when it's changed for the first time
              A === bn ? void 0 : x && A[0] === bn ? [] : A,
              h
            ];
            A = M, m ? m(s, 3, F) : (
              // @ts-expect-error
              s(...F)
            );
          } finally {
            no = O;
          }
        }
      } else
        v.run();
  };
  return u && u(T), v = new Ii(p), v.scheduler = c ? () => c(T, !1) : T, h = (P) => Qc(P, !1, v), _ = v.onStop = () => {
    const P = Vn.get(v);
    if (P) {
      if (m)
        m(P, 4);
      else
        for (const M of P) M();
      Vn.delete(v);
    }
  }, s ? a ? T(!0) : A = v.run() : c ? c(T.bind(null, !0), !0) : v.run(), S.pause = v.pause.bind(v), S.resume = v.resume.bind(v), S.stop = S, S;
}
function Ms(e, s = 1 / 0, o) {
  if (s <= 0 || !pt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, Ft(e))
    Ms(e.value, s, o);
  else if (Ye(e))
    for (let a = 0; a < e.length; a++)
      Ms(e[a], s, o);
  else if (No(e) || Eo(e))
    e.forEach((a) => {
      Ms(a, s, o);
    });
  else if (bi(e)) {
    for (const a in e)
      Ms(e[a], s, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Ms(e[a], s, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function pn(e, s, o, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    na(l, s, o);
  }
}
function gs(e, s, o, a) {
  if (Ze(e)) {
    const l = pn(e, s, o, a);
    return l && _i(l) && l.catch((r) => {
      na(r, s, o);
    }), l;
  }
  if (Ye(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(gs(e[r], s, o, a));
    return l;
  }
}
function na(e, s, o, a = !0) {
  const l = s ? s.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = s && s.appContext.config || ht;
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
      Ls(), pn(r, null, 10, [
        e,
        m,
        f
      ]), Us();
      return;
    }
  }
  Zc(e, o, l, a, c);
}
function Zc(e, s, o, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const jt = [];
let $s = -1;
const To = [];
let Gs = null, Co = 0;
const Bi = /* @__PURE__ */ Promise.resolve();
let Fn = null;
function Rt(e) {
  const s = Fn || Bi;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function eu(e) {
  let s = $s + 1, o = jt.length;
  for (; s < o; ) {
    const a = s + o >>> 1, l = jt[a], r = ln(l);
    r < e || r === e && l.flags & 2 ? s = a + 1 : o = a;
  }
  return s;
}
function rl(e) {
  if (!(e.flags & 1)) {
    const s = ln(e), o = jt[jt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= ln(o) ? jt.push(e) : jt.splice(eu(s), 0, e), e.flags |= 1, Wi();
  }
}
function Wi() {
  Fn || (Fn = Bi.then(ji));
}
function tu(e) {
  Ye(e) ? To.push(...e) : Gs && e.id === -1 ? Gs.splice(Co + 1, 0, e) : e.flags & 1 || (To.push(e), e.flags |= 1), Wi();
}
function Sl(e, s, o = $s + 1) {
  for (; o < jt.length; o++) {
    const a = jt[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      jt.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function Gi(e) {
  if (To.length) {
    const s = [...new Set(To)].sort(
      (o, a) => ln(o) - ln(a)
    );
    if (To.length = 0, Gs) {
      Gs.push(...s);
      return;
    }
    for (Gs = s, Co = 0; Co < Gs.length; Co++) {
      const o = Gs[Co];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Gs = null, Co = 0;
  }
}
const ln = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ji(e) {
  try {
    for ($s = 0; $s < jt.length; $s++) {
      const s = jt[$s];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), pn(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; $s < jt.length; $s++) {
      const s = jt[$s];
      s && (s.flags &= -2);
    }
    $s = -1, jt.length = 0, Gi(), Fn = null, (jt.length || To.length) && ji();
  }
}
let Ut = null, Hi = null;
function Bn(e) {
  const s = Ut;
  return Ut = e, Hi = e && e.type.__scopeId || null, s;
}
function g(e, s = Ut, o) {
  if (!s || e._n)
    return e;
  const a = (...l) => {
    a._d && jn(-1);
    const r = Bn(s);
    let c;
    try {
      c = e(...l);
    } finally {
      Bn(r), a._d && jn(1);
    }
    return c;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function nt(e, s) {
  if (Ut === null)
    return e;
  const o = ca(Ut), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [r, c, u, m = ht] = s[l];
    r && (Ze(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ms(c), a.push({
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
function eo(e, s, o, a) {
  const l = e.dirs, r = s && s.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let m = u.dir[a];
    m && (Ls(), gs(m, o, 8, [
      e.el,
      u,
      e,
      s
    ]), Us());
  }
}
const Ki = Symbol("_vte"), qi = (e) => e.__isTeleport, Qo = (e) => e && (e.disabled || e.disabled === ""), Il = (e) => e && (e.defer || e.defer === ""), El = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Tl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Aa = (e, s) => {
  const o = e && e.to;
  return St(o) ? s ? s(o) : null : o;
}, Yi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, a, l, r, c, u, m, f) {
    const {
      mc: v,
      pc: p,
      pbc: _,
      o: { insert: h, querySelector: w, createText: x, createComment: b }
    } = f, S = Qo(s.props);
    let { shapeFlag: A, children: T, dynamicChildren: P } = s;
    if (e == null) {
      const M = s.el = x(""), O = s.anchor = x("");
      h(M, o, a), h(O, o, a);
      const F = (L, te) => {
        A & 16 && v(
          T,
          L,
          te,
          l,
          r,
          c,
          u,
          m
        );
      }, I = () => {
        const L = s.target = Aa(s.props, w), te = Ji(L, s, x, h);
        L && (c !== "svg" && El(L) ? c = "svg" : c !== "mathml" && Tl(L) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(L), S || (F(L, te), Mn(s, !1)));
      };
      S && (F(o, O), Mn(s, !0)), Il(s.props) ? (s.el.__isMounted = !1, Wt(() => {
        I(), delete s.el.__isMounted;
      }, r)) : I();
    } else {
      if (Il(s.props) && e.el.__isMounted === !1) {
        Wt(() => {
          Yi.process(
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
      const M = s.anchor = e.anchor, O = s.target = e.target, F = s.targetAnchor = e.targetAnchor, I = Qo(e.props), L = I ? o : O, te = I ? M : F;
      if (c === "svg" || El(O) ? c = "svg" : (c === "mathml" || Tl(O)) && (c = "mathml"), P ? (_(
        e.dynamicChildren,
        P,
        L,
        l,
        r,
        c,
        u
      ), fl(e, s, !0)) : m || p(
        e,
        s,
        L,
        te,
        l,
        r,
        c,
        u,
        !1
      ), S)
        I ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : $n(
          s,
          o,
          M,
          f,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const Y = s.target = Aa(
          s.props,
          w
        );
        Y && $n(
          s,
          Y,
          null,
          f,
          0
        );
      } else I && $n(
        s,
        O,
        F,
        f,
        1
      );
      Mn(s, S);
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
      const h = r || !Qo(_);
      for (let w = 0; w < u.length; w++) {
        const x = u[w];
        a(
          x,
          s,
          o,
          h,
          !!x.dynamicChildren
        );
      }
    }
  },
  move: $n,
  hydrate: su
};
function $n(e, s, o, { o: { insert: a }, m: l }, r = 2) {
  r === 0 && a(e.targetAnchor, s, o);
  const { el: c, anchor: u, shapeFlag: m, children: f, props: v } = e, p = r === 2;
  if (p && a(c, s, o), (!p || Qo(v)) && m & 16)
    for (let _ = 0; _ < f.length; _++)
      l(
        f[_],
        s,
        o,
        2
      );
  p && a(u, s, o);
}
function su(e, s, o, a, l, r, {
  o: { nextSibling: c, parentNode: u, querySelector: m, insert: f, createText: v }
}, p) {
  function _(x, b, S, A) {
    b.anchor = p(
      c(x),
      b,
      u(x),
      o,
      a,
      l,
      r
    ), b.targetStart = S, b.targetAnchor = A;
  }
  const h = s.target = Aa(
    s.props,
    m
  ), w = Qo(s.props);
  if (h) {
    const x = h._lpa || h.firstChild;
    if (s.shapeFlag & 16)
      if (w)
        _(
          e,
          s,
          x,
          x && c(x)
        );
      else {
        s.anchor = c(e);
        let b = x;
        for (; b; ) {
          if (b && b.nodeType === 8) {
            if (b.data === "teleport start anchor")
              s.targetStart = b;
            else if (b.data === "teleport anchor") {
              s.targetAnchor = b, h._lpa = s.targetAnchor && c(s.targetAnchor);
              break;
            }
          }
          b = c(b);
        }
        s.targetAnchor || Ji(h, s, v, f), p(
          x && c(x),
          s,
          h,
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
const Nt = Yi;
function Mn(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let a, l;
    for (s ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", o.uid), a = a.nextSibling;
    o.ut();
  }
}
function Ji(e, s, o, a) {
  const l = s.targetStart = o(""), r = s.targetAnchor = o("");
  return l[Ki] = r, e && (a(l, e), a(r, e)), r;
}
const Ps = Symbol("_leaveCb"), Cn = Symbol("_enterCb");
function Qi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return at(() => {
    e.isMounted = !0;
  }), ar(() => {
    e.isUnmounting = !0;
  }), e;
}
const ts = [Function, Array], Xi = {
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
}, Zi = (e) => {
  const s = e.subTree;
  return s.component ? Zi(s.component) : s;
}, ou = {
  name: "BaseTransition",
  props: Xi,
  setup(e, { slots: s }) {
    const o = pl(), a = Qi();
    return () => {
      const l = s.default && cl(s.default(), !0);
      if (!l || !l.length)
        return;
      const r = er(l), c = rt(e), { mode: u } = c;
      if (a.isLeaving)
        return ba(r);
      const m = Pl(r);
      if (!m)
        return ba(r);
      let f = rn(
        m,
        c,
        a,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (p) => f = p
      );
      m.type !== zt && uo(m, f);
      let v = o.subTree && Pl(o.subTree);
      if (v && v.type !== zt && !ao(v, m) && Zi(o).type !== zt) {
        let p = rn(
          v,
          c,
          a,
          o
        );
        if (uo(v, p), u === "out-in" && m.type !== zt)
          return a.isLeaving = !0, p.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, v = void 0;
          }, ba(r);
        u === "in-out" && m.type !== zt ? p.delayLeave = (_, h, w) => {
          const x = tr(
            a,
            v
          );
          x[String(v.key)] = v, _[Ps] = () => {
            h(), _[Ps] = void 0, delete f.delayedLeave, v = void 0;
          }, f.delayedLeave = () => {
            w(), delete f.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return r;
    };
  }
};
function er(e) {
  let s = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== zt) {
        s = o;
        break;
      }
  }
  return s;
}
const nu = ou;
function tr(e, s) {
  const { leavingVNodes: o } = e;
  let a = o.get(s.type);
  return a || (a = /* @__PURE__ */ Object.create(null), o.set(s.type, a)), a;
}
function rn(e, s, o, a, l) {
  const {
    appear: r,
    mode: c,
    persisted: u = !1,
    onBeforeEnter: m,
    onEnter: f,
    onAfterEnter: v,
    onEnterCancelled: p,
    onBeforeLeave: _,
    onLeave: h,
    onAfterLeave: w,
    onLeaveCancelled: x,
    onBeforeAppear: b,
    onAppear: S,
    onAfterAppear: A,
    onAppearCancelled: T
  } = s, P = String(e.key), M = tr(o, e), O = (L, te) => {
    L && gs(
      L,
      a,
      9,
      te
    );
  }, F = (L, te) => {
    const Y = te[1];
    O(L, te), Ye(L) ? L.every((K) => K.length <= 1) && Y() : L.length <= 1 && Y();
  }, I = {
    mode: c,
    persisted: u,
    beforeEnter(L) {
      let te = m;
      if (!o.isMounted)
        if (r)
          te = b || m;
        else
          return;
      L[Ps] && L[Ps](
        !0
        /* cancelled */
      );
      const Y = M[P];
      Y && ao(e, Y) && Y.el[Ps] && Y.el[Ps](), O(te, [L]);
    },
    enter(L) {
      let te = f, Y = v, K = p;
      if (!o.isMounted)
        if (r)
          te = S || f, Y = A || v, K = T || p;
        else
          return;
      let H = !1;
      const B = L[Cn] = (W) => {
        H || (H = !0, W ? O(K, [L]) : O(Y, [L]), I.delayedLeave && I.delayedLeave(), L[Cn] = void 0);
      };
      te ? F(te, [L, B]) : B();
    },
    leave(L, te) {
      const Y = String(e.key);
      if (L[Cn] && L[Cn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return te();
      O(_, [L]);
      let K = !1;
      const H = L[Ps] = (B) => {
        K || (K = !0, te(), B ? O(x, [L]) : O(w, [L]), L[Ps] = void 0, M[Y] === e && delete M[Y]);
      };
      M[Y] = e, h ? F(h, [L, H]) : H();
    },
    clone(L) {
      const te = rn(
        L,
        s,
        o,
        a,
        l
      );
      return l && l(te), te;
    }
  };
  return I;
}
function ba(e) {
  if (aa(e))
    return e = Ks(e), e.children = null, e;
}
function Pl(e) {
  if (!aa(e))
    return qi(e.type) && e.children ? er(e.children) : e;
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
function uo(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, uo(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function cl(e, s = !1, o) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : r);
    c.type === j ? (c.patchFlag & 128 && l++, a = a.concat(
      cl(c.children, s, u)
    )) : (s || c.type !== zt) && a.push(u != null ? Ks(c, { key: u }) : c);
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
    Mt({ name: e.name }, s, { setup: e })
  ) : e;
}
function sr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Wn = /* @__PURE__ */ new WeakMap();
function Xo(e, s, o, a, l = !1) {
  if (Ye(e)) {
    e.forEach(
      (w, x) => Xo(
        w,
        s && (Ye(s) ? s[x] : s),
        o,
        a,
        l
      )
    );
    return;
  }
  if (Po(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Xo(e, s, o, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? ca(a.component) : a.el, c = l ? null : r, { i: u, r: m } = e, f = s && s.r, v = u.refs === ht ? u.refs = {} : u.refs, p = u.setupState, _ = rt(p), h = p === ht ? wi : (w) => ut(_, w);
  if (f != null && f !== m) {
    if (Rl(s), St(f))
      v[f] = null, h(f) && (p[f] = null);
    else if (Ft(f)) {
      f.value = null;
      const w = s;
      w.k && (v[w.k] = null);
    }
  }
  if (Ze(m))
    pn(m, u, 12, [c, v]);
  else {
    const w = St(m), x = Ft(m);
    if (w || x) {
      const b = () => {
        if (e.f) {
          const S = w ? h(m) ? p[m] : v[m] : m.value;
          if (l)
            Ye(S) && Xa(S, r);
          else if (Ye(S))
            S.includes(r) || S.push(r);
          else if (w)
            v[m] = [r], h(m) && (p[m] = v[m]);
          else {
            const A = [r];
            m.value = A, e.k && (v[e.k] = A);
          }
        } else w ? (v[m] = c, h(m) && (p[m] = c)) : x && (m.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const S = () => {
          b(), Wn.delete(e);
        };
        S.id = -1, Wn.set(e, S), Wt(S, o);
      } else
        Rl(e), b();
    }
  }
}
function Rl(e) {
  const s = Wn.get(e);
  s && (s.flags |= 8, Wn.delete(e));
}
sa().requestIdleCallback;
sa().cancelIdleCallback;
const Po = (e) => !!e.type.__asyncLoader, aa = (e) => e.type.__isKeepAlive;
function au(e, s) {
  or(e, "a", s);
}
function lu(e, s) {
  or(e, "da", s);
}
function or(e, s, o = Vt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (la(s, a, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      aa(l.parent.vnode) && iu(a, s, o, l), l = l.parent;
  }
}
function iu(e, s, o, a) {
  const l = la(
    s,
    e,
    a,
    !0
    /* prepend */
  );
  Qs(() => {
    Xa(a[s], l);
  }, o);
}
function la(e, s, o = Vt, a = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = s.__weh || (s.__weh = (...c) => {
      Ls();
      const u = gn(o), m = gs(s, o, e, c);
      return u(), Us(), m;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const Os = (e) => (s, o = Vt) => {
  (!dn || e === "sp") && la(e, (...a) => s(...a), o);
}, ru = Os("bm"), at = Os("m"), cu = Os(
  "bu"
), nr = Os("u"), ar = Os(
  "bum"
), Qs = Os("um"), uu = Os(
  "sp"
), du = Os("rtg"), mu = Os("rtc");
function fu(e, s = Vt) {
  la("ec", e, s);
}
const vu = "components", lr = Symbol.for("v-ndc");
function ul(e) {
  return St(e) ? pu(vu, e, !1) || e : e || lr;
}
function pu(e, s, o = !0, a = !1) {
  const l = Ut || Vt;
  if (l) {
    const r = l.type;
    {
      const u = od(
        r,
        !1
      );
      if (u && (u === s || u === ls(s) || u === ea(ls(s))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ml(l[e] || r[e], s) || // global registration
      Ml(l.appContext[e], s)
    );
    return !c && a ? r : c;
  }
}
function Ml(e, s) {
  return e && (e[s] || e[ls(s)] || e[ea(ls(s))]);
}
function ve(e, s, o, a) {
  let l;
  const r = o, c = Ye(e);
  if (c || St(e)) {
    const u = c && io(e);
    let m = !1, f = !1;
    u && (m = !os(e), f = Ns(e), e = oa(e)), l = new Array(e.length);
    for (let v = 0, p = e.length; v < p; v++)
      l[v] = s(
        m ? f ? Do(ps(e[v])) : ps(e[v]) : e[v],
        v,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = s(u + 1, u, void 0, r);
  } else if (pt(e))
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
function mo(e, s) {
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
  if (Ut.ce || Ut.parent && Po(Ut.parent) && Ut.parent.ce) {
    const f = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), n(), D(
      j,
      null,
      [C("slot", o, a && a())],
      f ? -2 : 64
    );
  }
  let r = e[s];
  r && r._c && (r._d = !1), n();
  const c = r && ir(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, m = D(
    j,
    {
      key: (u && !vs(u) ? u : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!c && a ? "_fb" : "")
    },
    c || (a ? a() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), m;
}
function ir(e) {
  return e.some((s) => un(s) ? !(s.type === zt || s.type === j && !ir(s.children)) : !0) ? e : null;
}
const za = (e) => e ? Sr(e) ? ca(e) : za(e.parent) : null, Zo = (
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
    $parent: (e) => za(e.parent),
    $root: (e) => za(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => cr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      rl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Rt.bind(e.proxy)),
    $watch: (e) => Iu.bind(e)
  })
), $a = (e, s) => e !== ht && !e.__isScriptSetup && ut(e, s), gu = {
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
        if ($a(a, s))
          return c[s] = 1, a[s];
        if (l !== ht && ut(l, s))
          return c[s] = 2, l[s];
        if (ut(r, s))
          return c[s] = 3, r[s];
        if (o !== ht && ut(o, s))
          return c[s] = 4, o[s];
        Va && (c[s] = 0);
      }
    }
    const f = Zo[s];
    let v, p;
    if (f)
      return s === "$attrs" && At(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (v = u.__cssModules) && (v = v[s])
    )
      return v;
    if (o !== ht && ut(o, s))
      return c[s] = 4, o[s];
    if (
      // global properties
      p = m.config.globalProperties, ut(p, s)
    )
      return p[s];
  },
  set({ _: e }, s, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return $a(l, s) ? (l[s] = o, !0) : a !== ht && ut(a, s) ? (a[s] = o, !0) : ut(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (r[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: a, appContext: l, props: r, type: c }
  }, u) {
    let m;
    return !!(o[u] || e !== ht && u[0] !== "$" && ut(e, u) || $a(s, u) || ut(r, u) || ut(a, u) || ut(Zo, u) || ut(l.config.globalProperties, u) || (m = c.__cssModules) && m[u]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : ut(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function Dl(e) {
  return Ye(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let Va = !0;
function hu(e) {
  const s = cr(e), o = e.proxy, a = e.ctx;
  Va = !1, s.beforeCreate && Ll(s.beforeCreate, e, "bc");
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
    beforeUpdate: h,
    updated: w,
    activated: x,
    deactivated: b,
    beforeDestroy: S,
    beforeUnmount: A,
    destroyed: T,
    unmounted: P,
    render: M,
    renderTracked: O,
    renderTriggered: F,
    errorCaptured: I,
    serverPrefetch: L,
    // public API
    expose: te,
    inheritAttrs: Y,
    // assets
    components: K,
    directives: H,
    filters: B
  } = s;
  if (f && yu(f, a, null), c)
    for (const Ue in c) {
      const ee = c[Ue];
      Ze(ee) && (a[Ue] = ee.bind(o));
    }
  if (l) {
    const Ue = l.call(o, o);
    pt(Ue) && (e.data = Js(Ue));
  }
  if (Va = !0, r)
    for (const Ue in r) {
      const ee = r[Ue], ue = Ze(ee) ? ee.bind(o, o) : Ze(ee.get) ? ee.get.bind(o, o) : Ss, ne = !Ze(ee) && Ze(ee.set) ? ee.set.bind(o) : Ss, ie = N({
        get: ue,
        set: ne
      });
      Object.defineProperty(a, Ue, {
        enumerable: !0,
        configurable: !0,
        get: () => ie.value,
        set: (ke) => ie.value = ke
      });
    }
  if (u)
    for (const Ue in u)
      rr(u[Ue], a, o, Ue);
  if (m) {
    const Ue = Ze(m) ? m.call(o) : m;
    Reflect.ownKeys(Ue).forEach((ee) => {
      Cu(ee, Ue[ee]);
    });
  }
  v && Ll(v, e, "c");
  function se(Ue, ee) {
    Ye(ee) ? ee.forEach((ue) => Ue(ue.bind(o))) : ee && Ue(ee.bind(o));
  }
  if (se(ru, p), se(at, _), se(cu, h), se(nr, w), se(au, x), se(lu, b), se(fu, I), se(mu, O), se(du, F), se(ar, A), se(Qs, P), se(uu, L), Ye(te))
    if (te.length) {
      const Ue = e.exposed || (e.exposed = {});
      te.forEach((ee) => {
        Object.defineProperty(Ue, ee, {
          get: () => o[ee],
          set: (ue) => o[ee] = ue,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  M && e.render === Ss && (e.render = M), Y != null && (e.inheritAttrs = Y), K && (e.components = K), H && (e.directives = H), L && sr(e);
}
function yu(e, s, o = Ss) {
  Ye(e) && (e = Fa(e));
  for (const a in e) {
    const l = e[a];
    let r;
    pt(l) ? "default" in l ? r = Dn(
      l.from || a,
      l.default,
      !0
    ) : r = Dn(l.from || a) : r = Dn(l), Ft(r) ? Object.defineProperty(s, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : s[a] = r;
  }
}
function Ll(e, s, o) {
  gs(
    Ye(e) ? e.map((a) => a.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function rr(e, s, o, a) {
  let l = a.includes(".") ? mr(o, a) : () => o[a];
  if (St(e)) {
    const r = s[e];
    Ze(r) && xt(l, r);
  } else if (Ze(e))
    xt(l, e.bind(o));
  else if (pt(e))
    if (Ye(e))
      e.forEach((r) => rr(r, s, o, a));
    else {
      const r = Ze(e.handler) ? e.handler.bind(o) : s[e.handler];
      Ze(r) && xt(l, r, e);
    }
}
function cr(e) {
  const s = e.type, { mixins: o, extends: a } = s, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(s);
  let m;
  return u ? m = u : !l.length && !o && !a ? m = s : (m = {}, l.length && l.forEach(
    (f) => Gn(m, f, c, !0)
  ), Gn(m, s, c)), pt(s) && r.set(s, m), m;
}
function Gn(e, s, o, a = !1) {
  const { mixins: l, extends: r } = s;
  r && Gn(e, r, o, !0), l && l.forEach(
    (c) => Gn(e, c, o, !0)
  );
  for (const c in s)
    if (!(a && c === "expose")) {
      const u = wu[c] || o && o[c];
      e[c] = u ? u(e[c], s[c]) : s[c];
    }
  return e;
}
const wu = {
  data: Ul,
  props: Nl,
  emits: Nl,
  // objects
  methods: Ko,
  computed: Ko,
  // lifecycle
  beforeCreate: Bt,
  created: Bt,
  beforeMount: Bt,
  mounted: Bt,
  beforeUpdate: Bt,
  updated: Bt,
  beforeDestroy: Bt,
  beforeUnmount: Bt,
  destroyed: Bt,
  unmounted: Bt,
  activated: Bt,
  deactivated: Bt,
  errorCaptured: Bt,
  serverPrefetch: Bt,
  // assets
  components: Ko,
  directives: Ko,
  // watch
  watch: ku,
  // provide / inject
  provide: Ul,
  inject: _u
};
function Ul(e, s) {
  return s ? e ? function() {
    return Mt(
      Ze(e) ? e.call(this, this) : e,
      Ze(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function _u(e, s) {
  return Ko(Fa(e), Fa(s));
}
function Fa(e) {
  if (Ye(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++)
      s[e[o]] = e[o];
    return s;
  }
  return e;
}
function Bt(e, s) {
  return e ? [...new Set([].concat(e, s))] : s;
}
function Ko(e, s) {
  return e ? Mt(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function Nl(e, s) {
  return e ? Ye(e) && Ye(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : Mt(
    /* @__PURE__ */ Object.create(null),
    Dl(e),
    Dl(s ?? {})
  ) : s;
}
function ku(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = Mt(/* @__PURE__ */ Object.create(null), e);
  for (const a in s)
    o[a] = Bt(e[a], s[a]);
  return o;
}
function ur() {
  return {
    app: null,
    config: {
      isNativeTag: wi,
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
let bu = 0;
function $u(e, s) {
  return function(a, l = null) {
    Ze(a) || (a = Mt({}, a)), l != null && !pt(l) && (l = null);
    const r = ur(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let m = !1;
    const f = r.app = {
      _uid: bu++,
      _component: a,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: ad,
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
          const h = f._ceVNode || C(a, l);
          return h.appContext = r, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), e(h, v, _), m = !0, f._container = v, v.__vue_app__ = f, ca(h.component);
        }
      },
      onUnmount(v) {
        u.push(v);
      },
      unmount() {
        m && (gs(
          u,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(v, p) {
        return r.provides[v] = p, f;
      },
      runWithContext(v) {
        const p = Ro;
        Ro = f;
        try {
          return v();
        } finally {
          Ro = p;
        }
      }
    };
    return f;
  };
}
let Ro = null;
function Cu(e, s) {
  if (Vt) {
    let o = Vt.provides;
    const a = Vt.parent && Vt.parent.provides;
    a === o && (o = Vt.provides = Object.create(a)), o[e] = s;
  }
}
function Dn(e, s, o = !1) {
  const a = pl();
  if (a || Ro) {
    let l = Ro ? Ro._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && Ze(s) ? s.call(a && a.proxy) : s;
  }
}
const xu = Symbol.for("v-scx"), Su = () => Dn(xu);
function xt(e, s, o) {
  return dr(e, s, o);
}
function dr(e, s, o = ht) {
  const { immediate: a, deep: l, flush: r, once: c } = o, u = Mt({}, o), m = s && a || !s && r !== "post";
  let f;
  if (dn) {
    if (r === "sync") {
      const h = Su();
      f = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!m) {
      const h = () => {
      };
      return h.stop = Ss, h.resume = Ss, h.pause = Ss, h;
    }
  }
  const v = Vt;
  u.call = (h, w, x) => gs(h, v, w, x);
  let p = !1;
  r === "post" ? u.scheduler = (h) => {
    Wt(h, v && v.suspense);
  } : r !== "sync" && (p = !0, u.scheduler = (h, w) => {
    w ? h() : rl(h);
  }), u.augmentJob = (h) => {
    s && (h.flags |= 4), p && (h.flags |= 2, v && (h.id = v.uid, h.i = v));
  };
  const _ = Xc(e, s, u);
  return dn && (f ? f.push(_) : m && _()), _;
}
function Iu(e, s, o) {
  const a = this.proxy, l = St(e) ? e.includes(".") ? mr(a, e) : () => a[e] : e.bind(a, a);
  let r;
  Ze(s) ? r = s : (r = s.handler, o = s);
  const c = gn(this), u = dr(l, r.bind(a), o);
  return c(), u;
}
function mr(e, s) {
  const o = s.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < o.length && a; l++)
      a = a[o[l]];
    return a;
  };
}
const Eu = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${ls(s)}Modifiers`] || e[`${Ys(s)}Modifiers`];
function Tu(e, s, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || ht;
  let l = o;
  const r = s.startsWith("update:"), c = r && Eu(a, s.slice(7));
  c && (c.trim && (l = o.map((v) => St(v) ? v.trim() : v)), c.number && (l = o.map(ta)));
  let u, m = a[u = ha(s)] || // also try camelCase event handler (#2249)
  a[u = ha(ls(s))];
  !m && r && (m = a[u = ha(Ys(s))]), m && gs(
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
    e.emitted[u] = !0, gs(
      f,
      e,
      6,
      l
    );
  }
}
const Pu = /* @__PURE__ */ new WeakMap();
function fr(e, s, o = !1) {
  const a = o ? Pu : s.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!Ze(e)) {
    const m = (f) => {
      const v = fr(f, s, !0);
      v && (u = !0, Mt(c, v));
    };
    !o && s.mixins.length && s.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  return !r && !u ? (pt(e) && a.set(e, null), null) : (Ye(r) ? r.forEach((m) => c[m] = null) : Mt(c, r), pt(e) && a.set(e, c), c);
}
function ia(e, s) {
  return !e || !Xn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), ut(e, s[0].toLowerCase() + s.slice(1)) || ut(e, Ys(s)) || ut(e, s));
}
function Ol(e) {
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
    setupState: h,
    ctx: w,
    inheritAttrs: x
  } = e, b = Bn(e);
  let S, A;
  try {
    if (o.shapeFlag & 4) {
      const P = l || a, M = P;
      S = xs(
        f.call(
          M,
          P,
          v,
          p,
          h,
          _,
          w
        )
      ), A = u;
    } else {
      const P = s;
      S = xs(
        P.length > 1 ? P(
          p,
          { attrs: u, slots: c, emit: m }
        ) : P(
          p,
          null
        )
      ), A = s.props ? u : Ru(u);
    }
  } catch (P) {
    en.length = 0, na(P, e, 1), S = C(zt);
  }
  let T = S;
  if (A && x !== !1) {
    const P = Object.keys(A), { shapeFlag: M } = T;
    P.length && M & 7 && (r && P.some(Qa) && (A = Mu(
      A,
      r
    )), T = Ks(T, A, !1, !0));
  }
  return o.dirs && (T = Ks(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(o.dirs) : o.dirs), o.transition && uo(T, o.transition), S = T, Bn(b), S;
}
const Ru = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Xn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, Mu = (e, s) => {
  const o = {};
  for (const a in e)
    (!Qa(a) || !(a.slice(9) in s)) && (o[a] = e[a]);
  return o;
};
function Du(e, s, o) {
  const { props: a, children: l, component: r } = e, { props: c, children: u, patchFlag: m } = s, f = r.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && m >= 0) {
    if (m & 1024)
      return !0;
    if (m & 16)
      return a ? Al(a, c, f) : !!c;
    if (m & 8) {
      const v = s.dynamicProps;
      for (let p = 0; p < v.length; p++) {
        const _ = v[p];
        if (c[_] !== a[_] && !ia(f, _))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : a === c ? !1 : a ? c ? Al(a, c, f) : !0 : !!c;
  return !1;
}
function Al(e, s, o) {
  const a = Object.keys(s);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (s[r] !== e[r] && !ia(o, r))
      return !0;
  }
  return !1;
}
function Lu({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const a = s.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const vr = {}, pr = () => Object.create(vr), gr = (e) => Object.getPrototypeOf(e) === vr;
function Uu(e, s, o, a = !1) {
  const l = {}, r = pr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), hr(e, s, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = a ? l : Gc(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function Nu(e, s, o, a) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: c }
  } = e, u = rt(l), [m] = e.propsOptions;
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
        if (ia(e.emitsOptions, _))
          continue;
        const h = s[_];
        if (m)
          if (ut(r, _))
            h !== r[_] && (r[_] = h, f = !0);
          else {
            const w = ls(_);
            l[w] = Ba(
              m,
              u,
              w,
              h,
              e,
              !1
            );
          }
        else
          h !== r[_] && (r[_] = h, f = !0);
      }
    }
  } else {
    hr(e, s, l, r) && (f = !0);
    let v;
    for (const p in u)
      (!s || // for camelCase
      !ut(s, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Ys(p)) === p || !ut(s, v))) && (m ? o && // for camelCase
      (o[p] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[p] = Ba(
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
  f && Rs(e.attrs, "set", "");
}
function hr(e, s, o, a) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (s)
    for (let m in s) {
      if (qo(m))
        continue;
      const f = s[m];
      let v;
      l && ut(l, v = ls(m)) ? !r || !r.includes(v) ? o[v] = f : (u || (u = {}))[v] = f : ia(e.emitsOptions, m) || (!(m in a) || f !== a[m]) && (a[m] = f, c = !0);
    }
  if (r) {
    const m = rt(o), f = u || ht;
    for (let v = 0; v < r.length; v++) {
      const p = r[v];
      o[p] = Ba(
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
function Ba(e, s, o, a, l, r) {
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
          const v = gn(l);
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
    ] && (a === "" || a === Ys(o)) && (a = !0));
  }
  return a;
}
const Ou = /* @__PURE__ */ new WeakMap();
function yr(e, s, o = !1) {
  const a = o ? Ou : s.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let m = !1;
  if (!Ze(e)) {
    const v = (p) => {
      m = !0;
      const [_, h] = yr(p, s, !0);
      Mt(c, _), h && u.push(...h);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !m)
    return pt(e) && a.set(e, Io), Io;
  if (Ye(r))
    for (let v = 0; v < r.length; v++) {
      const p = ls(r[v]);
      zl(p) && (c[p] = ht);
    }
  else if (r)
    for (const v in r) {
      const p = ls(v);
      if (zl(p)) {
        const _ = r[v], h = c[p] = Ye(_) || Ze(_) ? { type: _ } : Mt({}, _), w = h.type;
        let x = !1, b = !0;
        if (Ye(w))
          for (let S = 0; S < w.length; ++S) {
            const A = w[S], T = Ze(A) && A.name;
            if (T === "Boolean") {
              x = !0;
              break;
            } else T === "String" && (b = !1);
          }
        else
          x = Ze(w) && w.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = x, h[
          1
          /* shouldCastTrue */
        ] = b, (x || ut(h, "default")) && u.push(p);
      }
    }
  const f = [c, u];
  return pt(e) && a.set(e, f), f;
}
function zl(e) {
  return e[0] !== "$" && !qo(e);
}
const dl = (e) => e === "_" || e === "_ctx" || e === "$stable", ml = (e) => Ye(e) ? e.map(xs) : [xs(e)], Au = (e, s, o) => {
  if (s._n)
    return s;
  const a = g((...l) => ml(s(...l)), o);
  return a._c = !1, a;
}, wr = (e, s, o) => {
  const a = e._ctx;
  for (const l in e) {
    if (dl(l)) continue;
    const r = e[l];
    if (Ze(r))
      s[l] = Au(l, r, a);
    else if (r != null) {
      const c = ml(r);
      s[l] = () => c;
    }
  }
}, _r = (e, s) => {
  const o = ml(s);
  e.slots.default = () => o;
}, kr = (e, s, o) => {
  for (const a in s)
    (o || !dl(a)) && (e[a] = s[a]);
}, zu = (e, s, o) => {
  const a = e.slots = pr();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (kr(a, s, o), o && $i(a, "_", l, !0)) : wr(s, a);
  } else s && _r(e, s);
}, Vu = (e, s, o) => {
  const { vnode: a, slots: l } = e;
  let r = !0, c = ht;
  if (a.shapeFlag & 32) {
    const u = s._;
    u ? o && u === 1 ? r = !1 : kr(l, s, o) : (r = !s.$stable, wr(s, l)), c = s;
  } else s && (_r(e, s), c = { default: 1 });
  if (r)
    for (const u in l)
      !dl(u) && c[u] == null && delete l[u];
}, Wt = ju;
function Fu(e) {
  return Bu(e);
}
function Bu(e, s) {
  const o = sa();
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
    setScopeId: h = Ss,
    insertStaticContent: w
  } = e, x = (z, J, re, Ie = null, be = null, $e = null, Le = void 0, ye = null, Re = !!J.dynamicChildren) => {
    if (z === J)
      return;
    z && !ao(z, J) && (Ie = V(z), ke(z, be, $e, !0), z = null), J.patchFlag === -2 && (Re = !1, J.dynamicChildren = null);
    const { type: fe, ref: je, shapeFlag: Oe } = J;
    switch (fe) {
      case ra:
        b(z, J, re, Ie);
        break;
      case zt:
        S(z, J, re, Ie);
        break;
      case xa:
        z == null && A(J, re, Ie, Le);
        break;
      case j:
        K(
          z,
          J,
          re,
          Ie,
          be,
          $e,
          Le,
          ye,
          Re
        );
        break;
      default:
        Oe & 1 ? M(
          z,
          J,
          re,
          Ie,
          be,
          $e,
          Le,
          ye,
          Re
        ) : Oe & 6 ? H(
          z,
          J,
          re,
          Ie,
          be,
          $e,
          Le,
          ye,
          Re
        ) : (Oe & 64 || Oe & 128) && fe.process(
          z,
          J,
          re,
          Ie,
          be,
          $e,
          Le,
          ye,
          Re,
          Ae
        );
    }
    je != null && be ? Xo(je, z && z.ref, $e, J || z, !J) : je == null && z && z.ref != null && Xo(z.ref, null, $e, z, !0);
  }, b = (z, J, re, Ie) => {
    if (z == null)
      a(
        J.el = u(J.children),
        re,
        Ie
      );
    else {
      const be = J.el = z.el;
      J.children !== z.children && f(be, J.children);
    }
  }, S = (z, J, re, Ie) => {
    z == null ? a(
      J.el = m(J.children || ""),
      re,
      Ie
    ) : J.el = z.el;
  }, A = (z, J, re, Ie) => {
    [z.el, z.anchor] = w(
      z.children,
      J,
      re,
      Ie,
      z.el,
      z.anchor
    );
  }, T = ({ el: z, anchor: J }, re, Ie) => {
    let be;
    for (; z && z !== J; )
      be = _(z), a(z, re, Ie), z = be;
    a(J, re, Ie);
  }, P = ({ el: z, anchor: J }) => {
    let re;
    for (; z && z !== J; )
      re = _(z), l(z), z = re;
    l(J);
  }, M = (z, J, re, Ie, be, $e, Le, ye, Re) => {
    if (J.type === "svg" ? Le = "svg" : J.type === "math" && (Le = "mathml"), z == null)
      O(
        J,
        re,
        Ie,
        be,
        $e,
        Le,
        ye,
        Re
      );
    else {
      const fe = z.el && z.el._isVueCE ? z.el : null;
      try {
        fe && fe._beginPatch(), L(
          z,
          J,
          be,
          $e,
          Le,
          ye,
          Re
        );
      } finally {
        fe && fe._endPatch();
      }
    }
  }, O = (z, J, re, Ie, be, $e, Le, ye) => {
    let Re, fe;
    const { props: je, shapeFlag: Oe, transition: pe, dirs: q } = z;
    if (Re = z.el = c(
      z.type,
      $e,
      je && je.is,
      je
    ), Oe & 8 ? v(Re, z.children) : Oe & 16 && I(
      z.children,
      Re,
      null,
      Ie,
      be,
      Ca(z, $e),
      Le,
      ye
    ), q && eo(z, null, Ie, "created"), F(Re, z, z.scopeId, Le, Ie), je) {
      for (const Se in je)
        Se !== "value" && !qo(Se) && r(Re, Se, null, je[Se], $e, Ie);
      "value" in je && r(Re, "value", null, je.value, $e), (fe = je.onVnodeBeforeMount) && _s(fe, Ie, z);
    }
    q && eo(z, null, Ie, "beforeMount");
    const Ve = Wu(be, pe);
    Ve && pe.beforeEnter(Re), a(Re, J, re), ((fe = je && je.onVnodeMounted) || Ve || q) && Wt(() => {
      fe && _s(fe, Ie, z), Ve && pe.enter(Re), q && eo(z, null, Ie, "mounted");
    }, be);
  }, F = (z, J, re, Ie, be) => {
    if (re && h(z, re), Ie)
      for (let $e = 0; $e < Ie.length; $e++)
        h(z, Ie[$e]);
    if (be) {
      let $e = be.subTree;
      if (J === $e || $r($e.type) && ($e.ssContent === J || $e.ssFallback === J)) {
        const Le = be.vnode;
        F(
          z,
          Le,
          Le.scopeId,
          Le.slotScopeIds,
          be.parent
        );
      }
    }
  }, I = (z, J, re, Ie, be, $e, Le, ye, Re = 0) => {
    for (let fe = Re; fe < z.length; fe++) {
      const je = z[fe] = ye ? js(z[fe]) : xs(z[fe]);
      x(
        null,
        je,
        J,
        re,
        Ie,
        be,
        $e,
        Le,
        ye
      );
    }
  }, L = (z, J, re, Ie, be, $e, Le) => {
    const ye = J.el = z.el;
    let { patchFlag: Re, dynamicChildren: fe, dirs: je } = J;
    Re |= z.patchFlag & 16;
    const Oe = z.props || ht, pe = J.props || ht;
    let q;
    if (re && to(re, !1), (q = pe.onVnodeBeforeUpdate) && _s(q, re, J, z), je && eo(J, z, re, "beforeUpdate"), re && to(re, !0), (Oe.innerHTML && pe.innerHTML == null || Oe.textContent && pe.textContent == null) && v(ye, ""), fe ? te(
      z.dynamicChildren,
      fe,
      ye,
      re,
      Ie,
      Ca(J, be),
      $e
    ) : Le || ee(
      z,
      J,
      ye,
      null,
      re,
      Ie,
      Ca(J, be),
      $e,
      !1
    ), Re > 0) {
      if (Re & 16)
        Y(ye, Oe, pe, re, be);
      else if (Re & 2 && Oe.class !== pe.class && r(ye, "class", null, pe.class, be), Re & 4 && r(ye, "style", Oe.style, pe.style, be), Re & 8) {
        const Ve = J.dynamicProps;
        for (let Se = 0; Se < Ve.length; Se++) {
          const Ce = Ve[Se], Ne = Oe[Ce], Pe = pe[Ce];
          (Pe !== Ne || Ce === "value") && r(ye, Ce, Ne, Pe, be, re);
        }
      }
      Re & 1 && z.children !== J.children && v(ye, J.children);
    } else !Le && fe == null && Y(ye, Oe, pe, re, be);
    ((q = pe.onVnodeUpdated) || je) && Wt(() => {
      q && _s(q, re, J, z), je && eo(J, z, re, "updated");
    }, Ie);
  }, te = (z, J, re, Ie, be, $e, Le) => {
    for (let ye = 0; ye < J.length; ye++) {
      const Re = z[ye], fe = J[ye], je = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Re.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Re.type === j || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ao(Re, fe) || // - In the case of a component, it could contain anything.
        Re.shapeFlag & 198) ? p(Re.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          re
        )
      );
      x(
        Re,
        fe,
        je,
        null,
        Ie,
        be,
        $e,
        Le,
        !0
      );
    }
  }, Y = (z, J, re, Ie, be) => {
    if (J !== re) {
      if (J !== ht)
        for (const $e in J)
          !qo($e) && !($e in re) && r(
            z,
            $e,
            J[$e],
            null,
            be,
            Ie
          );
      for (const $e in re) {
        if (qo($e)) continue;
        const Le = re[$e], ye = J[$e];
        Le !== ye && $e !== "value" && r(z, $e, ye, Le, be, Ie);
      }
      "value" in re && r(z, "value", J.value, re.value, be);
    }
  }, K = (z, J, re, Ie, be, $e, Le, ye, Re) => {
    const fe = J.el = z ? z.el : u(""), je = J.anchor = z ? z.anchor : u("");
    let { patchFlag: Oe, dynamicChildren: pe, slotScopeIds: q } = J;
    q && (ye = ye ? ye.concat(q) : q), z == null ? (a(fe, re, Ie), a(je, re, Ie), I(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      J.children || [],
      re,
      je,
      be,
      $e,
      Le,
      ye,
      Re
    )) : Oe > 0 && Oe & 64 && pe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    z.dynamicChildren ? (te(
      z.dynamicChildren,
      pe,
      re,
      be,
      $e,
      Le,
      ye
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (J.key != null || be && J === be.subTree) && fl(
      z,
      J,
      !0
      /* shallow */
    )) : ee(
      z,
      J,
      re,
      je,
      be,
      $e,
      Le,
      ye,
      Re
    );
  }, H = (z, J, re, Ie, be, $e, Le, ye, Re) => {
    J.slotScopeIds = ye, z == null ? J.shapeFlag & 512 ? be.ctx.activate(
      J,
      re,
      Ie,
      Le,
      Re
    ) : B(
      J,
      re,
      Ie,
      be,
      $e,
      Le,
      Re
    ) : W(z, J, Re);
  }, B = (z, J, re, Ie, be, $e, Le) => {
    const ye = z.component = Xu(
      z,
      Ie,
      be
    );
    if (aa(z) && (ye.ctx.renderer = Ae), Zu(ye, !1, Le), ye.asyncDep) {
      if (be && be.registerDep(ye, se, Le), !z.el) {
        const Re = ye.subTree = C(zt);
        S(null, Re, J, re), z.placeholder = Re.el;
      }
    } else
      se(
        ye,
        z,
        J,
        re,
        be,
        $e,
        Le
      );
  }, W = (z, J, re) => {
    const Ie = J.component = z.component;
    if (Du(z, J, re))
      if (Ie.asyncDep && !Ie.asyncResolved) {
        Ue(Ie, J, re);
        return;
      } else
        Ie.next = J, Ie.update();
    else
      J.el = z.el, Ie.vnode = J;
  }, se = (z, J, re, Ie, be, $e, Le) => {
    const ye = () => {
      if (z.isMounted) {
        let { next: Oe, bu: pe, u: q, parent: Ve, vnode: Se } = z;
        {
          const de = br(z);
          if (de) {
            Oe && (Oe.el = Se.el, Ue(z, Oe, Le)), de.asyncDep.then(() => {
              z.isUnmounted || ye();
            });
            return;
          }
        }
        let Ce = Oe, Ne;
        to(z, !1), Oe ? (Oe.el = Se.el, Ue(z, Oe, Le)) : Oe = Se, pe && Rn(pe), (Ne = Oe.props && Oe.props.onVnodeBeforeUpdate) && _s(Ne, Ve, Oe, Se), to(z, !0);
        const Pe = Ol(z), Q = z.subTree;
        z.subTree = Pe, x(
          Q,
          Pe,
          // parent may have changed if it's in a teleport
          p(Q.el),
          // anchor may have changed if it's in a fragment
          V(Q),
          z,
          be,
          $e
        ), Oe.el = Pe.el, Ce === null && Lu(z, Pe.el), q && Wt(q, be), (Ne = Oe.props && Oe.props.onVnodeUpdated) && Wt(
          () => _s(Ne, Ve, Oe, Se),
          be
        );
      } else {
        let Oe;
        const { el: pe, props: q } = J, { bm: Ve, m: Se, parent: Ce, root: Ne, type: Pe } = z, Q = Po(J);
        to(z, !1), Ve && Rn(Ve), !Q && (Oe = q && q.onVnodeBeforeMount) && _s(Oe, Ce, J), to(z, !0);
        {
          Ne.ce && // @ts-expect-error _def is private
          Ne.ce._def.shadowRoot !== !1 && Ne.ce._injectChildStyle(Pe);
          const de = z.subTree = Ol(z);
          x(
            null,
            de,
            re,
            Ie,
            z,
            be,
            $e
          ), J.el = de.el;
        }
        if (Se && Wt(Se, be), !Q && (Oe = q && q.onVnodeMounted)) {
          const de = J;
          Wt(
            () => _s(Oe, Ce, de),
            be
          );
        }
        (J.shapeFlag & 256 || Ce && Po(Ce.vnode) && Ce.vnode.shapeFlag & 256) && z.a && Wt(z.a, be), z.isMounted = !0, J = re = Ie = null;
      }
    };
    z.scope.on();
    const Re = z.effect = new Ii(ye);
    z.scope.off();
    const fe = z.update = Re.run.bind(Re), je = z.job = Re.runIfDirty.bind(Re);
    je.i = z, je.id = z.uid, Re.scheduler = () => rl(je), to(z, !0), fe();
  }, Ue = (z, J, re) => {
    J.component = z;
    const Ie = z.vnode.props;
    z.vnode = J, z.next = null, Nu(z, J.props, Ie, re), Vu(z, J.children, re), Ls(), Sl(z), Us();
  }, ee = (z, J, re, Ie, be, $e, Le, ye, Re = !1) => {
    const fe = z && z.children, je = z ? z.shapeFlag : 0, Oe = J.children, { patchFlag: pe, shapeFlag: q } = J;
    if (pe > 0) {
      if (pe & 128) {
        ne(
          fe,
          Oe,
          re,
          Ie,
          be,
          $e,
          Le,
          ye,
          Re
        );
        return;
      } else if (pe & 256) {
        ue(
          fe,
          Oe,
          re,
          Ie,
          be,
          $e,
          Le,
          ye,
          Re
        );
        return;
      }
    }
    q & 8 ? (je & 16 && ae(fe, be, $e), Oe !== fe && v(re, Oe)) : je & 16 ? q & 16 ? ne(
      fe,
      Oe,
      re,
      Ie,
      be,
      $e,
      Le,
      ye,
      Re
    ) : ae(fe, be, $e, !0) : (je & 8 && v(re, ""), q & 16 && I(
      Oe,
      re,
      Ie,
      be,
      $e,
      Le,
      ye,
      Re
    ));
  }, ue = (z, J, re, Ie, be, $e, Le, ye, Re) => {
    z = z || Io, J = J || Io;
    const fe = z.length, je = J.length, Oe = Math.min(fe, je);
    let pe;
    for (pe = 0; pe < Oe; pe++) {
      const q = J[pe] = Re ? js(J[pe]) : xs(J[pe]);
      x(
        z[pe],
        q,
        re,
        null,
        be,
        $e,
        Le,
        ye,
        Re
      );
    }
    fe > je ? ae(
      z,
      be,
      $e,
      !0,
      !1,
      Oe
    ) : I(
      J,
      re,
      Ie,
      be,
      $e,
      Le,
      ye,
      Re,
      Oe
    );
  }, ne = (z, J, re, Ie, be, $e, Le, ye, Re) => {
    let fe = 0;
    const je = J.length;
    let Oe = z.length - 1, pe = je - 1;
    for (; fe <= Oe && fe <= pe; ) {
      const q = z[fe], Ve = J[fe] = Re ? js(J[fe]) : xs(J[fe]);
      if (ao(q, Ve))
        x(
          q,
          Ve,
          re,
          null,
          be,
          $e,
          Le,
          ye,
          Re
        );
      else
        break;
      fe++;
    }
    for (; fe <= Oe && fe <= pe; ) {
      const q = z[Oe], Ve = J[pe] = Re ? js(J[pe]) : xs(J[pe]);
      if (ao(q, Ve))
        x(
          q,
          Ve,
          re,
          null,
          be,
          $e,
          Le,
          ye,
          Re
        );
      else
        break;
      Oe--, pe--;
    }
    if (fe > Oe) {
      if (fe <= pe) {
        const q = pe + 1, Ve = q < je ? J[q].el : Ie;
        for (; fe <= pe; )
          x(
            null,
            J[fe] = Re ? js(J[fe]) : xs(J[fe]),
            re,
            Ve,
            be,
            $e,
            Le,
            ye,
            Re
          ), fe++;
      }
    } else if (fe > pe)
      for (; fe <= Oe; )
        ke(z[fe], be, $e, !0), fe++;
    else {
      const q = fe, Ve = fe, Se = /* @__PURE__ */ new Map();
      for (fe = Ve; fe <= pe; fe++) {
        const Fe = J[fe] = Re ? js(J[fe]) : xs(J[fe]);
        Fe.key != null && Se.set(Fe.key, fe);
      }
      let Ce, Ne = 0;
      const Pe = pe - Ve + 1;
      let Q = !1, de = 0;
      const ge = new Array(Pe);
      for (fe = 0; fe < Pe; fe++) ge[fe] = 0;
      for (fe = q; fe <= Oe; fe++) {
        const Fe = z[fe];
        if (Ne >= Pe) {
          ke(Fe, be, $e, !0);
          continue;
        }
        let Be;
        if (Fe.key != null)
          Be = Se.get(Fe.key);
        else
          for (Ce = Ve; Ce <= pe; Ce++)
            if (ge[Ce - Ve] === 0 && ao(Fe, J[Ce])) {
              Be = Ce;
              break;
            }
        Be === void 0 ? ke(Fe, be, $e, !0) : (ge[Be - Ve] = fe + 1, Be >= de ? de = Be : Q = !0, x(
          Fe,
          J[Be],
          re,
          null,
          be,
          $e,
          Le,
          ye,
          Re
        ), Ne++);
      }
      const Ke = Q ? Gu(ge) : Io;
      for (Ce = Ke.length - 1, fe = Pe - 1; fe >= 0; fe--) {
        const Fe = Ve + fe, Be = J[Fe], et = J[Fe + 1], qe = Fe + 1 < je ? (
          // #13559, fallback to el placeholder for unresolved async component
          et.el || et.placeholder
        ) : Ie;
        ge[fe] === 0 ? x(
          null,
          Be,
          re,
          qe,
          be,
          $e,
          Le,
          ye,
          Re
        ) : Q && (Ce < 0 || fe !== Ke[Ce] ? ie(Be, re, qe, 2) : Ce--);
      }
    }
  }, ie = (z, J, re, Ie, be = null) => {
    const { el: $e, type: Le, transition: ye, children: Re, shapeFlag: fe } = z;
    if (fe & 6) {
      ie(z.component.subTree, J, re, Ie);
      return;
    }
    if (fe & 128) {
      z.suspense.move(J, re, Ie);
      return;
    }
    if (fe & 64) {
      Le.move(z, J, re, Ae);
      return;
    }
    if (Le === j) {
      a($e, J, re);
      for (let Oe = 0; Oe < Re.length; Oe++)
        ie(Re[Oe], J, re, Ie);
      a(z.anchor, J, re);
      return;
    }
    if (Le === xa) {
      T(z, J, re);
      return;
    }
    if (Ie !== 2 && fe & 1 && ye)
      if (Ie === 0)
        ye.beforeEnter($e), a($e, J, re), Wt(() => ye.enter($e), be);
      else {
        const { leave: Oe, delayLeave: pe, afterLeave: q } = ye, Ve = () => {
          z.ctx.isUnmounted ? l($e) : a($e, J, re);
        }, Se = () => {
          $e._isLeaving && $e[Ps](
            !0
            /* cancelled */
          ), Oe($e, () => {
            Ve(), q && q();
          });
        };
        pe ? pe($e, Ve, Se) : Se();
      }
    else
      a($e, J, re);
  }, ke = (z, J, re, Ie = !1, be = !1) => {
    const {
      type: $e,
      props: Le,
      ref: ye,
      children: Re,
      dynamicChildren: fe,
      shapeFlag: je,
      patchFlag: Oe,
      dirs: pe,
      cacheIndex: q
    } = z;
    if (Oe === -2 && (be = !1), ye != null && (Ls(), Xo(ye, null, re, z, !0), Us()), q != null && (J.renderCache[q] = void 0), je & 256) {
      J.ctx.deactivate(z);
      return;
    }
    const Ve = je & 1 && pe, Se = !Po(z);
    let Ce;
    if (Se && (Ce = Le && Le.onVnodeBeforeUnmount) && _s(Ce, J, z), je & 6)
      G(z.component, re, Ie);
    else {
      if (je & 128) {
        z.suspense.unmount(re, Ie);
        return;
      }
      Ve && eo(z, null, J, "beforeUnmount"), je & 64 ? z.type.remove(
        z,
        J,
        re,
        Ae,
        Ie
      ) : fe && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !fe.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      ($e !== j || Oe > 0 && Oe & 64) ? ae(
        fe,
        J,
        re,
        !1,
        !0
      ) : ($e === j && Oe & 384 || !be && je & 16) && ae(Re, J, re), Ie && Ee(z);
    }
    (Se && (Ce = Le && Le.onVnodeUnmounted) || Ve) && Wt(() => {
      Ce && _s(Ce, J, z), Ve && eo(z, null, J, "unmounted");
    }, re);
  }, Ee = (z) => {
    const { type: J, el: re, anchor: Ie, transition: be } = z;
    if (J === j) {
      we(re, Ie);
      return;
    }
    if (J === xa) {
      P(z);
      return;
    }
    const $e = () => {
      l(re), be && !be.persisted && be.afterLeave && be.afterLeave();
    };
    if (z.shapeFlag & 1 && be && !be.persisted) {
      const { leave: Le, delayLeave: ye } = be, Re = () => Le(re, $e);
      ye ? ye(z.el, $e, Re) : Re();
    } else
      $e();
  }, we = (z, J) => {
    let re;
    for (; z !== J; )
      re = _(z), l(z), z = re;
    l(J);
  }, G = (z, J, re) => {
    const { bum: Ie, scope: be, job: $e, subTree: Le, um: ye, m: Re, a: fe } = z;
    Vl(Re), Vl(fe), Ie && Rn(Ie), be.stop(), $e && ($e.flags |= 8, ke(Le, z, J, re)), ye && Wt(ye, J), Wt(() => {
      z.isUnmounted = !0;
    }, J);
  }, ae = (z, J, re, Ie = !1, be = !1, $e = 0) => {
    for (let Le = $e; Le < z.length; Le++)
      ke(z[Le], J, re, Ie, be);
  }, V = (z) => {
    if (z.shapeFlag & 6)
      return V(z.component.subTree);
    if (z.shapeFlag & 128)
      return z.suspense.next();
    const J = _(z.anchor || z.el), re = J && J[Ki];
    return re ? _(re) : J;
  };
  let U = !1;
  const oe = (z, J, re) => {
    z == null ? J._vnode && ke(J._vnode, null, null, !0) : x(
      J._vnode || null,
      z,
      J,
      null,
      null,
      null,
      re
    ), J._vnode = z, U || (U = !0, Sl(), Gi(), U = !1);
  }, Ae = {
    p: x,
    um: ke,
    m: ie,
    r: Ee,
    mt: B,
    mc: I,
    pc: ee,
    pbc: te,
    n: V,
    o: e
  };
  return {
    render: oe,
    hydrate: void 0,
    createApp: $u(oe)
  };
}
function Ca({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function to({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function Wu(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function fl(e, s, o = !1) {
  const a = e.children, l = s.children;
  if (Ye(a) && Ye(l))
    for (let r = 0; r < a.length; r++) {
      const c = a[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = js(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && fl(c, u)), u.type === ra && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === zt && !u.el && (u.el = c.el);
    }
}
function Gu(e) {
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
function br(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : br(s);
}
function Vl(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const $r = (e) => e.__isSuspense;
function ju(e, s) {
  s && s.pendingBranch ? Ye(e) ? s.effects.push(...e) : s.effects.push(e) : tu(e);
}
const j = Symbol.for("v-fgt"), ra = Symbol.for("v-txt"), zt = Symbol.for("v-cmt"), xa = Symbol.for("v-stc"), en = [];
let Qt = null;
function n(e = !1) {
  en.push(Qt = e ? null : []);
}
function Hu() {
  en.pop(), Qt = en[en.length - 1] || null;
}
let cn = 1;
function jn(e, s = !1) {
  cn += e, e < 0 && Qt && s && (Qt.hasOnce = !0);
}
function Cr(e) {
  return e.dynamicChildren = cn > 0 ? Qt || Io : null, Hu(), cn > 0 && Qt && Qt.push(e), e;
}
function i(e, s, o, a, l, r) {
  return Cr(
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
  return Cr(
    C(
      e,
      s,
      o,
      a,
      l,
      !0
    )
  );
}
function un(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ao(e, s) {
  return e.type === s.type && e.key === s.key;
}
const xr = ({ key: e }) => e ?? null, Ln = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? St(e) || Ft(e) || Ze(e) ? { i: Ut, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, a = 0, l = null, r = e === j ? 0 : 1, c = !1, u = !1) {
  const m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && xr(s),
    ref: s && Ln(s),
    scopeId: Hi,
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
    ctx: Ut
  };
  return u ? (vl(m, o), r & 128 && e.normalize(m)) : o && (m.shapeFlag |= St(o) ? 8 : 16), cn > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Qt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && Qt.push(m), m;
}
const C = Ku;
function Ku(e, s = null, o = null, a = 0, l = null, r = !1) {
  if ((!e || e === lr) && (e = zt), un(e)) {
    const u = Ks(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && vl(u, o), cn > 0 && !r && Qt && (u.shapeFlag & 6 ? Qt[Qt.indexOf(e)] = u : Qt.push(u)), u.patchFlag = -2, u;
  }
  if (nd(e) && (e = e.__vccOpts), s) {
    s = qu(s);
    let { class: u, style: m } = s;
    u && !St(u) && (s.class = De(u)), pt(m) && (il(m) && !Ye(m) && (m = Mt({}, m)), s.style = Zt(m));
  }
  const c = St(e) ? 1 : $r(e) ? 128 : qi(e) ? 64 : pt(e) ? 4 : Ze(e) ? 2 : 0;
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
function qu(e) {
  return e ? il(e) || gr(e) ? Mt({}, e) : e : null;
}
function Ks(e, s, o = !1, a = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: m } = e, f = s ? Yu(l || {}, s) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && xr(f),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Ye(r) ? r.concat(Ln(s)) : [r, Ln(s)] : Ln(s)
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
    ssContent: e.ssContent && Ks(e.ssContent),
    ssFallback: e.ssFallback && Ks(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return m && a && uo(
    v,
    m.clone(v)
  ), v;
}
function $(e = " ", s = 0) {
  return C(ra, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (n(), D(zt, null, e)) : C(zt, null, e);
}
function xs(e) {
  return e == null || typeof e == "boolean" ? C(zt) : Ye(e) ? C(
    j,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : un(e) ? js(e) : C(ra, null, String(e));
}
function js(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ks(e);
}
function vl(e, s) {
  let o = 0;
  const { shapeFlag: a } = e;
  if (s == null)
    s = null;
  else if (Ye(s))
    o = 16;
  else if (typeof s == "object")
    if (a & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), vl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !gr(s) ? s._ctx = Ut : l === 3 && Ut && (Ut.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else Ze(s) ? (s = { default: s, _ctx: Ut }, o = 32) : (s = String(s), a & 64 ? (o = 16, s = [$(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function Yu(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        s.class !== a.class && (s.class = De([s.class, a.class]));
      else if (l === "style")
        s.style = Zt([s.style, a.style]);
      else if (Xn(l)) {
        const r = s[l], c = a[l];
        c && r !== c && !(Ye(r) && r.includes(c)) && (s[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (s[l] = a[l]);
  }
  return s;
}
function _s(e, s, o, a = null) {
  gs(e, s, 7, [
    o,
    a
  ]);
}
const Ju = ur();
let Qu = 0;
function Xu(e, s, o) {
  const a = e.type, l = (s ? s.appContext : e.appContext) || Ju, r = {
    uid: Qu++,
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
    scope: new Cc(
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
    propsOptions: yr(a, l),
    emitsOptions: fr(a, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ht,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: ht,
    data: ht,
    props: ht,
    attrs: ht,
    slots: ht,
    refs: ht,
    setupState: ht,
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
  return r.ctx = { _: r }, r.root = s ? s.root : r, r.emit = Tu.bind(null, r), e.ce && e.ce(r), r;
}
let Vt = null;
const pl = () => Vt || Ut;
let Hn, Wa;
{
  const e = sa(), s = (o, a) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  Hn = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Vt = o
  ), Wa = s(
    "__VUE_SSR_SETTERS__",
    (o) => dn = o
  );
}
const gn = (e) => {
  const s = Vt;
  return Hn(e), e.scope.on(), () => {
    e.scope.off(), Hn(s);
  };
}, Fl = () => {
  Vt && Vt.scope.off(), Hn(null);
};
function Sr(e) {
  return e.vnode.shapeFlag & 4;
}
let dn = !1;
function Zu(e, s = !1, o = !1) {
  s && Wa(s);
  const { props: a, children: l } = e.vnode, r = Sr(e);
  Uu(e, a, r, s), zu(e, l, o || s);
  const c = r ? ed(e, s) : void 0;
  return s && Wa(!1), c;
}
function ed(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, gu);
  const { setup: a } = o;
  if (a) {
    Ls();
    const l = e.setupContext = a.length > 1 ? sd(e) : null, r = gn(e), c = pn(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = _i(c);
    if (Us(), r(), (u || e.sp) && !Po(e) && sr(e), u) {
      if (c.then(Fl, Fl), s)
        return c.then((m) => {
          Bl(e, m);
        }).catch((m) => {
          na(m, e, 0);
        });
      e.asyncDep = c;
    } else
      Bl(e, c);
  } else
    Ir(e);
}
function Bl(e, s, o) {
  Ze(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : pt(s) && (e.setupState = Fi(s)), Ir(e);
}
function Ir(e, s, o) {
  const a = e.type;
  e.render || (e.render = a.render || Ss);
  {
    const l = gn(e);
    Ls();
    try {
      hu(e);
    } finally {
      Us(), l();
    }
  }
}
const td = {
  get(e, s) {
    return At(e, "get", ""), e[s];
  }
};
function sd(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, td),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function ca(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Fi(jc(e.exposed)), {
    get(s, o) {
      if (o in s)
        return s[o];
      if (o in Zo)
        return Zo[o](e);
    },
    has(s, o) {
      return o in s || o in Zo;
    }
  })) : e.proxy;
}
function od(e, s = !0) {
  return Ze(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function nd(e) {
  return Ze(e) && "__vccOpts" in e;
}
const N = (e, s) => Jc(e, s, dn);
function hn(e, s, o) {
  try {
    jn(-1);
    const a = arguments.length;
    return a === 2 ? pt(s) && !Ye(s) ? un(s) ? C(e, null, [s]) : C(e, s) : C(e, null, s) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && un(o) && (o = [o]), C(e, s, o));
  } finally {
    jn(1);
  }
}
const ad = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ga;
const Wl = typeof window < "u" && window.trustedTypes;
if (Wl)
  try {
    Ga = /* @__PURE__ */ Wl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Er = Ga ? (e) => Ga.createHTML(e) : (e) => e, ld = "http://www.w3.org/2000/svg", id = "http://www.w3.org/1998/Math/MathML", Ts = typeof document < "u" ? document : null, Gl = Ts && /* @__PURE__ */ Ts.createElement("template"), rd = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, a) => {
    const l = s === "svg" ? Ts.createElementNS(ld, e) : s === "mathml" ? Ts.createElementNS(id, e) : o ? Ts.createElement(e, { is: o }) : Ts.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => Ts.createTextNode(e),
  createComment: (e) => Ts.createComment(e),
  setText: (e, s) => {
    e.nodeValue = s;
  },
  setElementText: (e, s) => {
    e.textContent = s;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ts.querySelector(e),
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
      Gl.innerHTML = Er(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Gl.content;
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
}, Fs = "transition", Vo = "animation", Lo = Symbol("_vtc"), Tr = {
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
}, Pr = /* @__PURE__ */ Mt(
  {},
  Xi,
  Tr
), cd = (e) => (e.displayName = "Transition", e.props = Pr, e), ud = /* @__PURE__ */ cd(
  (e, { slots: s }) => hn(nu, Rr(e), s)
), so = (e, s = []) => {
  Ye(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, jl = (e) => e ? Ye(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function Rr(e) {
  const s = {};
  for (const K in e)
    K in Tr || (s[K] = e[K]);
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
    leaveToClass: h = `${o}-leave-to`
  } = e, w = dd(l), x = w && w[0], b = w && w[1], {
    onBeforeEnter: S,
    onEnter: A,
    onEnterCancelled: T,
    onLeave: P,
    onLeaveCancelled: M,
    onBeforeAppear: O = S,
    onAppear: F = A,
    onAppearCancelled: I = T
  } = s, L = (K, H, B, W) => {
    K._enterCancelled = W, Bs(K, H ? v : u), Bs(K, H ? f : c), B && B();
  }, te = (K, H) => {
    K._isLeaving = !1, Bs(K, p), Bs(K, h), Bs(K, _), H && H();
  }, Y = (K) => (H, B) => {
    const W = K ? F : A, se = () => L(H, K, B);
    so(W, [H, se]), Hl(() => {
      Bs(H, K ? m : r), bs(H, K ? v : u), jl(W) || Kl(H, a, x, se);
    });
  };
  return Mt(s, {
    onBeforeEnter(K) {
      so(S, [K]), bs(K, r), bs(K, c);
    },
    onBeforeAppear(K) {
      so(O, [K]), bs(K, m), bs(K, f);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(K, H) {
      K._isLeaving = !0;
      const B = () => te(K, H);
      bs(K, p), K._enterCancelled ? (bs(K, _), ja(K)) : (ja(K), bs(K, _)), Hl(() => {
        K._isLeaving && (Bs(K, p), bs(K, h), jl(P) || Kl(K, a, b, B));
      }), so(P, [K, B]);
    },
    onEnterCancelled(K) {
      L(K, !1, void 0, !0), so(T, [K]);
    },
    onAppearCancelled(K) {
      L(K, !0, void 0, !0), so(I, [K]);
    },
    onLeaveCancelled(K) {
      te(K), so(M, [K]);
    }
  });
}
function dd(e) {
  if (e == null)
    return null;
  if (pt(e))
    return [Sa(e.enter), Sa(e.leave)];
  {
    const s = Sa(e);
    return [s, s];
  }
}
function Sa(e) {
  return gc(e);
}
function bs(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Lo] || (e[Lo] = /* @__PURE__ */ new Set())).add(s);
}
function Bs(e, s) {
  s.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const o = e[Lo];
  o && (o.delete(s), o.size || (e[Lo] = void 0));
}
function Hl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let md = 0;
function Kl(e, s, o, a) {
  const l = e._endId = ++md, r = () => {
    l === e._endId && a();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: c, timeout: u, propCount: m } = Mr(e, s);
  if (!c)
    return a();
  const f = c + "end";
  let v = 0;
  const p = () => {
    e.removeEventListener(f, _), r();
  }, _ = (h) => {
    h.target === e && ++v >= m && p();
  };
  setTimeout(() => {
    v < m && p();
  }, u + 1), e.addEventListener(f, _);
}
function Mr(e, s) {
  const o = window.getComputedStyle(e), a = (w) => (o[w] || "").split(", "), l = a(`${Fs}Delay`), r = a(`${Fs}Duration`), c = ql(l, r), u = a(`${Vo}Delay`), m = a(`${Vo}Duration`), f = ql(u, m);
  let v = null, p = 0, _ = 0;
  s === Fs ? c > 0 && (v = Fs, p = c, _ = r.length) : s === Vo ? f > 0 && (v = Vo, p = f, _ = m.length) : (p = Math.max(c, f), v = p > 0 ? c > f ? Fs : Vo : null, _ = v ? v === Fs ? r.length : m.length : 0);
  const h = v === Fs && /\b(?:transform|all)(?:,|$)/.test(
    a(`${Fs}Property`).toString()
  );
  return {
    type: v,
    timeout: p,
    propCount: _,
    hasTransform: h
  };
}
function ql(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, a) => Yl(o) + Yl(e[a])));
}
function Yl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ja(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function fd(e, s, o) {
  const a = e[Lo];
  a && (s = (s ? [s, ...a] : [...a]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Jl = Symbol("_vod"), vd = Symbol("_vsh"), pd = Symbol(""), gd = /(?:^|;)\s*display\s*:/;
function hd(e, s, o) {
  const a = e.style, l = St(o);
  let r = !1;
  if (o && !l) {
    if (s)
      if (St(s))
        for (const c of s.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && Un(a, u, "");
        }
      else
        for (const c in s)
          o[c] == null && Un(a, c, "");
    for (const c in o)
      c === "display" && (r = !0), Un(a, c, o[c]);
  } else if (l) {
    if (s !== o) {
      const c = a[pd];
      c && (o += ";" + c), a.cssText = o, r = gd.test(o);
    }
  } else s && e.removeAttribute("style");
  Jl in e && (e[Jl] = r ? a.display : "", e[vd] && (a.display = "none"));
}
const Ql = /\s*!important$/;
function Un(e, s, o) {
  if (Ye(o))
    o.forEach((a) => Un(e, s, a));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const a = yd(e, s);
    Ql.test(o) ? e.setProperty(
      Ys(a),
      o.replace(Ql, ""),
      "important"
    ) : e[a] = o;
  }
}
const Xl = ["Webkit", "Moz", "ms"], Ia = {};
function yd(e, s) {
  const o = Ia[s];
  if (o)
    return o;
  let a = ls(s);
  if (a !== "filter" && a in e)
    return Ia[s] = a;
  a = ea(a);
  for (let l = 0; l < Xl.length; l++) {
    const r = Xl[l] + a;
    if (r in e)
      return Ia[s] = r;
  }
  return s;
}
const Zl = "http://www.w3.org/1999/xlink";
function ei(e, s, o, a, l, r = bc(s)) {
  a && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Zl, s.slice(6, s.length)) : e.setAttributeNS(Zl, s, o) : o == null || r && !Ci(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    r ? "" : vs(o) ? String(o) : o
  );
}
function ti(e, s, o, a, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? Er(o) : o);
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
    u === "boolean" ? o = Ci(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
  }
  try {
    e[s] = o;
  } catch {
  }
  c && e.removeAttribute(l || s);
}
function Ds(e, s, o, a) {
  e.addEventListener(s, o, a);
}
function wd(e, s, o, a) {
  e.removeEventListener(s, o, a);
}
const si = Symbol("_vei");
function _d(e, s, o, a, l = null) {
  const r = e[si] || (e[si] = {}), c = r[s];
  if (a && c)
    c.value = a;
  else {
    const [u, m] = kd(s);
    if (a) {
      const f = r[s] = Cd(
        a,
        l
      );
      Ds(e, u, f, m);
    } else c && (wd(e, u, c, m), r[s] = void 0);
  }
}
const oi = /(?:Once|Passive|Capture)$/;
function kd(e) {
  let s;
  if (oi.test(e)) {
    s = {};
    let a;
    for (; a = e.match(oi); )
      e = e.slice(0, e.length - a[0].length), s[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ys(e.slice(2)), s];
}
let Ea = 0;
const bd = /* @__PURE__ */ Promise.resolve(), $d = () => Ea || (bd.then(() => Ea = 0), Ea = Date.now());
function Cd(e, s) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    gs(
      xd(a, o.value),
      s,
      5,
      [a]
    );
  };
  return o.value = e, o.attached = $d(), o;
}
function xd(e, s) {
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
const ni = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Sd = (e, s, o, a, l, r) => {
  const c = l === "svg";
  s === "class" ? fd(e, a, c) : s === "style" ? hd(e, o, a) : Xn(s) ? Qa(s) || _d(e, s, o, a, r) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : Id(e, s, a, c)) ? (ti(e, s, a), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && ei(e, s, a, c, r, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !St(a)) ? ti(e, ls(s), a, r, s) : (s === "true-value" ? e._trueValue = a : s === "false-value" && (e._falseValue = a), ei(e, s, a, c));
};
function Id(e, s, o, a) {
  if (a)
    return !!(s === "innerHTML" || s === "textContent" || s in e && ni(s) && Ze(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return ni(s) && St(o) ? !1 : s in e;
}
const Dr = /* @__PURE__ */ new WeakMap(), Lr = /* @__PURE__ */ new WeakMap(), Kn = Symbol("_moveCb"), ai = Symbol("_enterCb"), Ed = (e) => (delete e.props.mode, e), Td = /* @__PURE__ */ Ed({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Mt({}, Pr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = pl(), a = Qi();
    let l, r;
    return nr(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!Ld(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(Rd), l.forEach(Md);
      const u = l.filter(Dd);
      ja(o.vnode.el), u.forEach((m) => {
        const f = m.el, v = f.style;
        bs(f, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const p = f[Kn] = (_) => {
          _ && _.target !== f || (!_ || _.propertyName.endsWith("transform")) && (f.removeEventListener("transitionend", p), f[Kn] = null, Bs(f, c));
        };
        f.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const c = rt(e), u = Rr(c);
      let m = c.tag || j;
      if (l = [], r)
        for (let f = 0; f < r.length; f++) {
          const v = r[f];
          v.el && v.el instanceof Element && (l.push(v), uo(
            v,
            rn(
              v,
              u,
              a,
              o
            )
          ), Dr.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      r = s.default ? cl(s.default()) : [];
      for (let f = 0; f < r.length; f++) {
        const v = r[f];
        v.key != null && uo(
          v,
          rn(v, u, a, o)
        );
      }
      return C(m, null, r);
    };
  }
}), Pd = Td;
function Rd(e) {
  const s = e.el;
  s[Kn] && s[Kn](), s[ai] && s[ai]();
}
function Md(e) {
  Lr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function Dd(e) {
  const s = Dr.get(e), o = Lr.get(e), a = s.left - o.left, l = s.top - o.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function Ld(e, s, o) {
  const a = e.cloneNode(), l = e[Lo];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((m) => m && a.classList.remove(m));
  }), o.split(/\s+/).forEach((u) => u && a.classList.add(u)), a.style.display = "none";
  const r = s.nodeType === 1 ? s : s.parentNode;
  r.appendChild(a);
  const { hasTransform: c } = Mr(a);
  return r.removeChild(a), c;
}
const qs = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Ye(s) ? (o) => Rn(s, o) : s;
};
function Ud(e) {
  e.target.composing = !0;
}
function li(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const ns = Symbol("_assign");
function ii(e, s, o) {
  return s && (e = e.trim()), o && (e = ta(e)), e;
}
const Xt = {
  created(e, { modifiers: { lazy: s, trim: o, number: a } }, l) {
    e[ns] = qs(l);
    const r = a || l.props && l.props.type === "number";
    Ds(e, s ? "change" : "input", (c) => {
      c.target.composing || e[ns](ii(e.value, o, r));
    }), (o || r) && Ds(e, "change", () => {
      e.value = ii(e.value, o, r);
    }), s || (Ds(e, "compositionstart", Ud), Ds(e, "compositionend", li), Ds(e, "change", li));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: a, trim: l, number: r } }, c) {
    if (e[ns] = qs(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? ta(e.value) : e.value, m = s ?? "";
    u !== m && (document.activeElement === e && e.type !== "range" && (a && s === o || l && e.value.trim() === m) || (e.value = m));
  }
}, mn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[ns] = qs(o), Ds(e, "change", () => {
      const a = e._modelValue, l = Uo(e), r = e.checked, c = e[ns];
      if (Ye(a)) {
        const u = el(a, l), m = u !== -1;
        if (r && !m)
          c(a.concat(l));
        else if (!r && m) {
          const f = [...a];
          f.splice(u, 1), c(f);
        }
      } else if (No(a)) {
        const u = new Set(a);
        r ? u.add(l) : u.delete(l), c(u);
      } else
        c(Ur(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ri,
  beforeUpdate(e, s, o) {
    e[ns] = qs(o), ri(e, s, o);
  }
};
function ri(e, { value: s, oldValue: o }, a) {
  e._modelValue = s;
  let l;
  if (Ye(s))
    l = el(s, a.props.value) > -1;
  else if (No(s))
    l = s.has(a.props.value);
  else {
    if (s === o) return;
    l = co(s, Ur(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const ms = {
  created(e, { value: s }, o) {
    e.checked = co(s, o.props.value), e[ns] = qs(o), Ds(e, "change", () => {
      e[ns](Uo(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, a) {
    e[ns] = qs(a), s !== o && (e.checked = co(s, a.props.value));
  }
}, Is = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, a) {
    const l = No(s);
    Ds(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? ta(Uo(c)) : Uo(c)
      );
      e[ns](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Rt(() => {
        e._assigning = !1;
      });
    }), e[ns] = qs(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    ci(e, s);
  },
  beforeUpdate(e, s, o) {
    e[ns] = qs(o);
  },
  updated(e, { value: s }) {
    e._assigning || ci(e, s);
  }
};
function ci(e, s) {
  const o = e.multiple, a = Ye(s);
  if (!(o && !a && !No(s))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = Uo(c);
      if (o)
        if (a) {
          const m = typeof u;
          m === "string" || m === "number" ? c.selected = s.some((f) => String(f) === String(u)) : c.selected = el(s, u) > -1;
        } else
          c.selected = s.has(u);
      else if (co(Uo(c), s)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Uo(e) {
  return "_value" in e ? e._value : e.value;
}
function Ur(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
}
const ua = {
  created(e, s, o) {
    xn(e, s, o, null, "created");
  },
  mounted(e, s, o) {
    xn(e, s, o, null, "mounted");
  },
  beforeUpdate(e, s, o, a) {
    xn(e, s, o, a, "beforeUpdate");
  },
  updated(e, s, o, a) {
    xn(e, s, o, a, "updated");
  }
};
function Nd(e, s) {
  switch (e) {
    case "SELECT":
      return Is;
    case "TEXTAREA":
      return Xt;
    default:
      switch (s) {
        case "checkbox":
          return mn;
        case "radio":
          return ms;
        default:
          return Xt;
      }
  }
}
function xn(e, s, o, a, l) {
  const c = Nd(
    e.tagName,
    o.props && o.props.type
  )[l];
  c && c(e, s, o, a);
}
const Od = ["ctrl", "shift", "alt", "meta"], Ad = {
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
  exact: (e, s) => Od.some((o) => e[`${o}Key`] && !s.includes(o))
}, bt = (e, s) => {
  const o = e._withMods || (e._withMods = {}), a = s.join(".");
  return o[a] || (o[a] = ((l, ...r) => {
    for (let c = 0; c < s.length; c++) {
      const u = Ad[s[c]];
      if (u && u(l, s)) return;
    }
    return e(l, ...r);
  }));
}, zd = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, as = (e, s) => {
  const o = e._withKeys || (e._withKeys = {}), a = s.join(".");
  return o[a] || (o[a] = ((l) => {
    if (!("key" in l))
      return;
    const r = Ys(l.key);
    if (s.some(
      (c) => c === r || zd[c] === r
    ))
      return e(l);
  }));
}, Vd = /* @__PURE__ */ Mt({ patchProp: Sd }, rd);
let ui;
function Fd() {
  return ui || (ui = Fu(Vd));
}
const da = ((...e) => {
  const s = Fd().createApp(...e), { mount: o } = s;
  return s.mount = (a) => {
    const l = Wd(a);
    if (!l) return;
    const r = s._component;
    !Ze(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, Bd(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, s;
});
function Bd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Wd(e) {
  return St(e) ? document.querySelector(e) : e;
}
const Gd = { class: "panel-layout" }, jd = {
  key: 0,
  class: "panel-layout-header"
}, Hd = {
  key: 1,
  class: "panel-layout-search"
}, Kd = { class: "panel-layout-content" }, qd = {
  key: 2,
  class: "panel-layout-footer"
}, Yd = /* @__PURE__ */ he({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (n(), i("div", Gd, [
      s.$slots.header ? (n(), i("div", jd, [
        ot(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (n(), i("div", Hd, [
        ot(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", Kd, [
        ot(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (n(), i("div", qd, [
        ot(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), _e = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of s)
    o[a] = l;
  return o;
}, Ht = /* @__PURE__ */ _e(Yd, [["__scopeId", "data-v-21565df9"]]), Jd = {
  key: 0,
  class: "panel-title-prefix"
}, Qd = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Xd = /* @__PURE__ */ he({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (n(), D(ul(`h${e.level}`), {
      class: De(["panel-title", e.variant])
    }, {
      default: g(() => [
        e.showPrefix ? (n(), i("span", Jd, d(e.prefix), 1)) : (n(), i("span", Qd)),
        ot(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Zd = /* @__PURE__ */ _e(Xd, [["__scopeId", "data-v-c3875efc"]]), em = ["title"], tm = ["width", "height"], sm = /* @__PURE__ */ he({
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
      ])], 8, tm))
    ], 8, em));
  }
}), Nr = /* @__PURE__ */ _e(sm, [["__scopeId", "data-v-6fc7f16d"]]), om = { class: "header-left" }, nm = {
  key: 0,
  class: "header-actions"
}, am = /* @__PURE__ */ he({
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
      class: De(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", om, [
        C(Zd, { "show-prefix": e.showPrefix }, {
          default: g(() => [
            $(d(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), D(Nr, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (n(), i("div", nm, [
        ot(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Kt = /* @__PURE__ */ _e(am, [["__scopeId", "data-v-55a62cd6"]]), lm = {
  key: 0,
  class: "section-title-count"
}, im = {
  key: 1,
  class: "section-title-icon"
}, rm = /* @__PURE__ */ he({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (n(), D(ul(`h${e.level}`), {
      class: De(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, {
      default: g(() => [
        ot(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", lm, "(" + d(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (n(), i("span", im, d(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Jt = /* @__PURE__ */ _e(rm, [["__scopeId", "data-v-559361eb"]]), cm = { class: "status-grid" }, um = { class: "status-grid__columns" }, dm = { class: "status-grid__column" }, mm = { class: "status-grid__title" }, fm = { class: "status-grid__column status-grid__column--right" }, vm = { class: "status-grid__title" }, pm = {
  key: 0,
  class: "status-grid__footer"
}, gm = /* @__PURE__ */ he({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", cm, [
      t("div", um, [
        t("div", dm, [
          t("h4", mm, d(e.leftTitle), 1),
          ot(s.$slots, "left", {}, void 0)
        ]),
        t("div", fm, [
          t("h4", vm, d(e.rightTitle), 1),
          ot(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (n(), i("div", pm, [
        ot(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), hm = /* @__PURE__ */ _e(gm, [["__scopeId", "data-v-73b7ba3f"]]), ym = {
  key: 0,
  class: "status-item__icon"
}, wm = {
  key: 1,
  class: "status-item__count"
}, _m = { class: "status-item__label" }, km = /* @__PURE__ */ he({
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
    return (a, l) => (n(), i("div", {
      class: De(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (n(), i("span", ym, d(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (n(), i("span", wm, d(e.count), 1)) : y("", !0),
      t("span", _m, d(e.label), 1)
    ], 2));
  }
}), ks = /* @__PURE__ */ _e(km, [["__scopeId", "data-v-6f929183"]]), bm = { class: "issue-card__header" }, $m = { class: "issue-card__icon" }, Cm = { class: "issue-card__title" }, xm = {
  key: 0,
  class: "issue-card__content"
}, Sm = {
  key: 0,
  class: "issue-card__description"
}, Im = {
  key: 1,
  class: "issue-card__items"
}, Em = {
  key: 2,
  class: "issue-card__actions"
}, Tm = /* @__PURE__ */ he({
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
    return (a, l) => (n(), i("div", {
      class: De(["issue-card", o.value])
    }, [
      t("div", bm, [
        t("span", $m, d(e.icon), 1),
        t("h4", Cm, d(e.title), 1)
      ]),
      a.$slots.default || e.description ? (n(), i("div", xm, [
        e.description ? (n(), i("p", Sm, d(e.description), 1)) : y("", !0),
        ot(a.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (n(), i("div", Im, [
        (n(!0), i(j, null, ve(e.items, (r, c) => (n(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, d(r), 1)
        ]))), 128))
      ])) : y("", !0),
      a.$slots.actions ? (n(), i("div", Em, [
        ot(a.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), us = /* @__PURE__ */ _e(Tm, [["__scopeId", "data-v-df6aa348"]]), Pm = ["type", "disabled"], Rm = {
  key: 0,
  class: "spinner"
}, Mm = /* @__PURE__ */ he({
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
      class: De(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", Rm)) : y("", !0),
      e.loading ? y("", !0) : ot(s.$slots, "default", { key: 1 }, void 0)
    ], 10, Pm));
  }
}), me = /* @__PURE__ */ _e(Mm, [["__scopeId", "data-v-772abe47"]]), Dm = { class: "empty-state" }, Lm = {
  key: 0,
  class: "empty-icon"
}, Um = { class: "empty-message" }, Nm = /* @__PURE__ */ he({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (n(), i("div", Dm, [
      e.icon ? (n(), i("div", Lm, d(e.icon), 1)) : y("", !0),
      t("p", Um, d(e.message), 1),
      e.actionLabel ? (n(), D(me, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => s.$emit("action"))
      }, {
        default: g(() => [
          $(d(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), hs = /* @__PURE__ */ _e(Nm, [["__scopeId", "data-v-4466284f"]]), Om = /* @__PURE__ */ he({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: De(["detail-label"]),
      style: Zt({ minWidth: e.minWidth })
    }, [
      ot(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), Nn = /* @__PURE__ */ _e(Om, [["__scopeId", "data-v-75e9eeb8"]]), Am = /* @__PURE__ */ he({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: De(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      ot(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Ha = /* @__PURE__ */ _e(Am, [["__scopeId", "data-v-2f186e4c"]]), zm = { class: "detail-row" }, Vm = /* @__PURE__ */ he({
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
    return (s, o) => (n(), i("div", zm, [
      C(Nn, { "min-width": e.labelMinWidth }, {
        default: g(() => [
          $(d(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (n(), D(Ha, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: g(() => [
          $(d(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ot(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), kt = /* @__PURE__ */ _e(Vm, [["__scopeId", "data-v-ef15664a"]]), Fm = { class: "modal-header" }, Bm = { class: "modal-body" }, Wm = { class: "status-section" }, Gm = {
  key: 0,
  class: "status-section"
}, jm = { class: "section-header-row" }, Hm = {
  key: 0,
  class: "workflow-group"
}, Km = { class: "workflow-group-header" }, qm = { class: "workflow-group-title" }, Ym = { class: "workflow-list" }, Jm = { class: "workflow-name" }, Qm = { class: "workflow-issue" }, Xm = {
  key: 1,
  class: "workflow-group"
}, Zm = { class: "workflow-group-header" }, ef = { class: "workflow-group-title" }, tf = { class: "workflow-list" }, sf = { class: "workflow-name" }, of = { class: "workflow-issue" }, nf = {
  key: 2,
  class: "workflow-group"
}, af = { class: "workflow-group-header" }, lf = { class: "workflow-group-title" }, rf = { class: "workflow-list" }, cf = { class: "workflow-name" }, uf = {
  key: 3,
  class: "workflow-group"
}, df = { class: "workflow-group-header" }, mf = { class: "workflow-group-title" }, ff = { class: "workflow-list" }, vf = { class: "workflow-name" }, pf = {
  key: 4,
  class: "workflow-group"
}, gf = { class: "workflow-group-header" }, hf = { class: "workflow-group-title" }, yf = { class: "workflow-list" }, wf = { class: "workflow-name" }, _f = {
  key: 5,
  class: "workflow-group"
}, kf = { class: "workflow-group-title" }, bf = { class: "expand-icon" }, $f = {
  key: 0,
  class: "workflow-list"
}, Cf = { class: "workflow-name" }, xf = {
  key: 1,
  class: "status-section"
}, Sf = {
  key: 0,
  class: "change-group"
}, If = { class: "change-group-header" }, Ef = { class: "change-group-title" }, Tf = { class: "change-list" }, Pf = { class: "node-name" }, Rf = {
  key: 0,
  class: "dev-badge"
}, Mf = {
  key: 1,
  class: "change-group"
}, Df = { class: "change-group-header" }, Lf = { class: "change-group-title" }, Uf = { class: "change-list" }, Nf = { class: "node-name" }, Of = {
  key: 0,
  class: "dev-badge"
}, Af = {
  key: 2,
  class: "change-group"
}, zf = { class: "change-list" }, Vf = { class: "change-item" }, Ff = { class: "node-name" }, Bf = {
  key: 3,
  class: "change-group"
}, Wf = {
  key: 2,
  class: "status-section"
}, Gf = { class: "section-header-row" }, jf = {
  key: 0,
  class: "drift-item"
}, Hf = { class: "drift-list" }, Kf = {
  key: 0,
  class: "drift-list-more"
}, qf = {
  key: 1,
  class: "drift-item"
}, Yf = { class: "drift-list" }, Jf = {
  key: 0,
  class: "drift-list-more"
}, Qf = {
  key: 2,
  class: "drift-item"
}, Xf = { class: "drift-list" }, Zf = { class: "version-actual" }, ev = { class: "version-expected" }, tv = {
  key: 0,
  class: "drift-list-more"
}, sv = {
  key: 3,
  class: "drift-item"
}, ov = { class: "repair-action" }, nv = {
  key: 3,
  class: "status-section"
}, av = { class: "info-box" }, lv = { class: "drift-list" }, iv = {
  key: 0,
  class: "drift-list-more"
}, rv = {
  key: 4,
  class: "status-section"
}, cv = { class: "warning-box" }, uv = {
  key: 5,
  class: "empty-state-inline"
}, dv = { class: "modal-actions" }, mv = /* @__PURE__ */ he({
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
    }), xt(() => s.show, (_, h) => {
      console.log("StatusDetailModal show prop changed from", h, "to", _);
    }, { immediate: !0 });
    const a = N(() => {
      var _, h, w;
      return ((w = (h = (_ = s.status) == null ? void 0 : _.workflows) == null ? void 0 : h.analyzed) == null ? void 0 : w.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), l = N(() => {
      var _, h, w;
      return ((w = (h = (_ = s.status) == null ? void 0 : _.workflows) == null ? void 0 : h.analyzed) == null ? void 0 : w.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), r = N(() => {
      var _, h, w;
      return ((w = (h = (_ = s.status) == null ? void 0 : _.workflows) == null ? void 0 : h.synced) == null ? void 0 : w.filter((x) => {
        var S, A, T;
        const b = (T = (A = (S = s.status) == null ? void 0 : S.workflows) == null ? void 0 : A.analyzed) == null ? void 0 : T.find((P) => P.name === x);
        return !b || b.status !== "broken";
      })) || [];
    }), c = N(() => {
      var _, h, w, x, b;
      return (_ = s.status) != null && _.workflows ? (((h = s.status.workflows.new) == null ? void 0 : h.length) ?? 0) > 0 || (((w = s.status.workflows.modified) == null ? void 0 : w.length) ?? 0) > 0 || (((x = s.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || (((b = s.status.workflows.synced) == null ? void 0 : b.length) ?? 0) > 0 : !1;
    }), u = N(() => {
      var h, w, x;
      const _ = (h = s.status) == null ? void 0 : h.git_changes;
      return _ ? (((w = _.nodes_added) == null ? void 0 : w.length) ?? 0) > 0 || (((x = _.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), m = N(() => {
      var _, h, w, x, b, S;
      return !c.value && !u.value && ((h = (_ = s.status) == null ? void 0 : _.comparison) == null ? void 0 : h.is_synced) && (((w = s.status) == null ? void 0 : w.missing_models_count) ?? 0) === 0 && (((S = (b = (x = s.status) == null ? void 0 : x.comparison) == null ? void 0 : b.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
    }), f = N(() => {
      var h, w;
      const _ = (w = (h = s.status) == null ? void 0 : h.git_changes) == null ? void 0 : w.workflow_changes;
      return _ ? typeof _ == "number" ? _ : Object.keys(_).length : 0;
    });
    function v(_) {
      return typeof _ == "string" ? _ : _.name;
    }
    function p(_) {
      return typeof _ == "object" && _.is_development === !0;
    }
    return (_, h) => {
      var w, x, b, S, A, T, P, M, O, F, I, L, te, Y, K, H, B, W, se, Ue, ee, ue;
      return n(), D(Nt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: h[7] || (h[7] = (ne) => _.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: h[6] || (h[6] = bt(() => {
            }, ["stop"]))
          }, [
            t("div", Fm, [
              h[8] || (h[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: h[0] || (h[0] = (ne) => _.$emit("close"))
              }, "✕")
            ]),
            t("div", Bm, [
              t("div", Wm, [
                C(Jt, { level: "4" }, {
                  default: g(() => [...h[9] || (h[9] = [
                    $("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                C(kt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (n(), i("div", Gm, [
                t("div", jm, [
                  C(Jt, { level: "4" }, {
                    default: g(() => [...h[10] || (h[10] = [
                      $("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: h[1] || (h[1] = (ne) => _.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", Hm, [
                  t("div", Km, [
                    h[11] || (h[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", qm, "BROKEN (COMMITTED) (" + d(a.value.length) + ")", 1)
                  ]),
                  t("div", Ym, [
                    (n(!0), i(j, null, ve(a.value, (ne) => (n(), i("div", {
                      key: ne.name,
                      class: "workflow-item"
                    }, [
                      t("span", Jm, d(ne.name), 1),
                      t("span", Qm, d(ne.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (n(), i("div", Xm, [
                  t("div", Zm, [
                    h[12] || (h[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", ef, "BROKEN (UNCOMMITTED) (" + d(l.value.length) + ")", 1)
                  ]),
                  t("div", tf, [
                    (n(!0), i(j, null, ve(l.value, (ne) => (n(), i("div", {
                      key: ne.name,
                      class: "workflow-item"
                    }, [
                      t("span", sf, d(ne.name), 1),
                      t("span", of, d(ne.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = (w = e.status.workflows) == null ? void 0 : w.new) != null && x.length ? (n(), i("div", nf, [
                  t("div", af, [
                    h[13] || (h[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", lf, "NEW (" + d(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", rf, [
                    (n(!0), i(j, null, ve(e.status.workflows.new, (ne) => (n(), i("div", {
                      key: ne,
                      class: "workflow-item"
                    }, [
                      t("span", cf, d(ne), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = (b = e.status.workflows) == null ? void 0 : b.modified) != null && S.length ? (n(), i("div", uf, [
                  t("div", df, [
                    h[14] || (h[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", mf, "MODIFIED (" + d(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", ff, [
                    (n(!0), i(j, null, ve(e.status.workflows.modified, (ne) => (n(), i("div", {
                      key: ne,
                      class: "workflow-item"
                    }, [
                      t("span", vf, d(ne), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (T = (A = e.status.workflows) == null ? void 0 : A.deleted) != null && T.length ? (n(), i("div", pf, [
                  t("div", gf, [
                    h[15] || (h[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", hf, "DELETED (" + d(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", yf, [
                    (n(!0), i(j, null, ve(e.status.workflows.deleted, (ne) => (n(), i("div", {
                      key: ne,
                      class: "workflow-item"
                    }, [
                      t("span", wf, d(ne), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (n(), i("div", _f, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: h[2] || (h[2] = (ne) => o.value = !o.value)
                  }, [
                    h[16] || (h[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", kf, "SYNCED (" + d(r.value.length) + ")", 1),
                    t("span", bf, d(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", $f, [
                    (n(!0), i(j, null, ve(r.value, (ne) => (n(), i("div", {
                      key: ne,
                      class: "workflow-item"
                    }, [
                      t("span", Cf, d(ne), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (n(), i("div", xf, [
                C(Jt, { level: "4" }, {
                  default: g(() => [...h[17] || (h[17] = [
                    $("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (M = (P = e.status.git_changes) == null ? void 0 : P.nodes_added) != null && M.length ? (n(), i("div", Sf, [
                  t("div", If, [
                    h[18] || (h[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", Ef, "NODES ADDED (" + d(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", Tf, [
                    (n(!0), i(j, null, ve(e.status.git_changes.nodes_added, (ne) => (n(), i("div", {
                      key: v(ne),
                      class: "change-item"
                    }, [
                      t("span", Pf, d(v(ne)), 1),
                      p(ne) ? (n(), i("span", Rf, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (F = (O = e.status.git_changes) == null ? void 0 : O.nodes_removed) != null && F.length ? (n(), i("div", Mf, [
                  t("div", Df, [
                    h[19] || (h[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", Lf, "NODES REMOVED (" + d(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", Uf, [
                    (n(!0), i(j, null, ve(e.status.git_changes.nodes_removed, (ne) => (n(), i("div", {
                      key: v(ne),
                      class: "change-item"
                    }, [
                      t("span", Nf, d(v(ne)), 1),
                      p(ne) ? (n(), i("span", Of, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = e.status.git_changes) != null && I.workflow_changes ? (n(), i("div", Af, [
                  h[20] || (h[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", zf, [
                    t("div", Vf, [
                      t("span", Ff, d(f.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (L = e.status.git_changes) != null && L.has_other_changes ? (n(), i("div", Bf, [...h[21] || (h[21] = [
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
              (te = e.status.comparison) != null && te.is_synced ? y("", !0) : (n(), i("div", Wf, [
                t("div", Gf, [
                  C(Jt, { level: "4" }, {
                    default: g(() => [...h[22] || (h[22] = [
                      $("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: h[3] || (h[3] = (ne) => _.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                h[26] || (h[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (K = (Y = e.status.comparison) == null ? void 0 : Y.missing_nodes) != null && K.length ? (n(), i("div", jf, [
                  C(kt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Hf, [
                    (n(!0), i(j, null, ve(e.status.comparison.missing_nodes.slice(0, 10), (ne) => (n(), i("div", {
                      key: ne,
                      class: "drift-list-item"
                    }, " - " + d(ne), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", Kf, " ... and " + d(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (B = (H = e.status.comparison) == null ? void 0 : H.extra_nodes) != null && B.length ? (n(), i("div", qf, [
                  C(kt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", Yf, [
                    (n(!0), i(j, null, ve(e.status.comparison.extra_nodes.slice(0, 10), (ne) => (n(), i("div", {
                      key: ne,
                      class: "drift-list-item"
                    }, " - " + d(ne), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", Jf, " ... and " + d(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (se = (W = e.status.comparison) == null ? void 0 : W.version_mismatches) != null && se.length ? (n(), i("div", Qf, [
                  C(kt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", Xf, [
                    (n(!0), i(j, null, ve(e.status.comparison.version_mismatches.slice(0, 10), (ne) => (n(), i("div", {
                      key: ne.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      $(d(ne.name) + ": ", 1),
                      t("span", Zf, d(ne.actual), 1),
                      h[23] || (h[23] = $(" → ", -1)),
                      t("span", ev, d(ne.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", tv, " ... and " + d(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((Ue = e.status.comparison) == null ? void 0 : Ue.packages_in_sync) === !1 ? (n(), i("div", sv, [
                  C(kt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", ov, [
                  C(me, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: h[4] || (h[4] = (ne) => _.$emit("repair"))
                  }, {
                    default: g(() => [...h[24] || (h[24] = [
                      $(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  h[25] || (h[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ue = (ee = e.status.comparison) == null ? void 0 : ee.disabled_nodes) != null && ue.length ? (n(), i("div", nv, [
                C(Jt, { level: "4" }, {
                  default: g(() => [...h[27] || (h[27] = [
                    $("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", av, [
                  h[28] || (h[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, d(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", lv, [
                  (n(!0), i(j, null, ve(e.status.comparison.disabled_nodes.slice(0, 10), (ne) => (n(), i("div", {
                    key: ne,
                    class: "drift-list-item"
                  }, " • " + d(ne), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (n(), i("div", iv, " ... and " + d(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (n(), i("div", rv, [
                C(Jt, { level: "4" }, {
                  default: g(() => [...h[29] || (h[29] = [
                    $("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", cv, [
                  h[30] || (h[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, d(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                h[31] || (h[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              m.value ? (n(), i("div", uv, [...h[32] || (h[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            t("div", dv, [
              C(me, {
                variant: "secondary",
                onClick: h[5] || (h[5] = (ne) => _.$emit("close"))
              }, {
                default: g(() => [...h[33] || (h[33] = [
                  $(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), fv = /* @__PURE__ */ _e(mv, [["__scopeId", "data-v-e2b37122"]]), vv = { class: "health-section-header" }, pv = { class: "suggestions-content" }, gv = { class: "suggestions-text" }, hv = { style: { "margin-top": "var(--cg-space-3)" } }, yv = {
  key: 1,
  class: "no-issues-text"
}, wv = /* @__PURE__ */ he({
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
    function h() {
      p.value = !1;
    }
    function w() {
      l.value = !1;
    }
    const x = N(() => {
      const we = a.status.workflows.analyzed || [], G = we.filter(
        (ae) => ae.unresolved_models_count > 0 || ae.ambiguous_models_count > 0
      );
      return G.length === 0 && a.status.missing_models_count > 0 ? we.filter((ae) => ae.sync_state === "synced") : G;
    });
    function b() {
      const we = x.value;
      we.length !== 0 && (v.value = !0, f("repair-missing-models", we.map((G) => G.name)));
    }
    function S() {
      v.value = !1;
    }
    s({ resetRepairingState: S, resetRepairingEnvironmentState: h, closeDetailModal: w });
    const A = N(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), T = N(() => a.status.has_changes), P = N(() => {
      const we = a.status.git_changes;
      return we.nodes_added.length > 0 || we.nodes_removed.length > 0 || we.workflow_changes;
    }), M = N(() => a.status.has_changes || A.value), O = N(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), F = N(() => a.status.git_changes.has_other_changes), I = N(() => {
      var we;
      return ((we = a.status.workflows.analyzed) == null ? void 0 : we.filter((G) => G.status === "broken")) || [];
    }), L = N(() => {
      var we;
      return ((we = a.status.workflows.analyzed) == null ? void 0 : we.filter(
        (G) => G.has_path_sync_issues && !G.has_issues
      )) || [];
    }), te = N(() => I.value.length > 0);
    function Y(we) {
      const G = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const ae of G) {
        const V = we.match(ae);
        if (V != null && V[1])
          return V[1];
      }
      return null;
    }
    function K(we) {
      const G = we.map(Y).filter((ae) => !!ae);
      return [...new Set(G)];
    }
    function H(we) {
      if (we.length === 0) return "";
      if (we.length === 1) return ` (>= ${we[0]})`;
      const G = we.slice(0, 2).map((V) => `>= ${V}`).join(", "), ae = we.length > 2;
      return ` (${G}${ae ? ", ..." : ""})`;
    }
    function B(we) {
      return we.replace(/uninstallable node mappings?/gi, (G) => G.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function W(we) {
      const G = B(we.issue_summary || "Has issues"), ae = /(?:>=|v?\d+\.\d+)/i.test(G), V = K(we.version_gated_guidance || []);
      return (we.nodes_version_gated_count || 0) > 0 && V.length > 0 && !ae ? `${we.name} — ${G} (needs ComfyUI ${V.map((U) => `>= ${U}`).join(", ")})` : `${we.name} — ${G}`;
    }
    const se = N(() => I.value.reduce(
      (we, G) => we + (G.nodes_version_gated_count || 0),
      0
    )), Ue = N(() => {
      const we = I.value.flatMap(
        (G) => K(G.version_gated_guidance || [])
      );
      return [...new Set(we)];
    }), ee = N(() => I.value.reduce(
      (we, G) => we + (G.nodes_uninstallable_count || 0),
      0
    )), ue = N(() => {
      const we = [];
      return se.value > 0 && we.push(
        `${se.value} require newer ComfyUI${H(Ue.value)}`
      ), ee.value > 0 && we.push(`${ee.value} need community packages`), we.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${we.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), ne = N(() => te.value || L.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), ie = N(() => {
      const we = [];
      return a.status.workflows.new.length > 0 && we.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && we.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && we.push(`${a.status.workflows.deleted.length} deleted`), we.length > 0 ? `${we.join(", ")} workflow${we.length === 1 && !we[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), ke = N(() => {
      var ae, V;
      const we = [], G = a.status.comparison;
      return (ae = G.missing_nodes) != null && ae.length && we.push(`${G.missing_nodes.length} missing node${G.missing_nodes.length === 1 ? "" : "s"}`), (V = G.extra_nodes) != null && V.length && we.push(`${G.extra_nodes.length} untracked node${G.extra_nodes.length === 1 ? "" : "s"}`), we.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${we.join(" and ")}.`;
    }), Ee = N(() => {
      var ae, V;
      const we = [], G = a.status.comparison;
      return (ae = G.extra_nodes) != null && ae.length && (G.extra_nodes.slice(0, 3).forEach((U) => {
        we.push(`Untracked: ${U}`);
      }), G.extra_nodes.length > 3 && we.push(`...and ${G.extra_nodes.length - 3} more untracked`)), (V = G.missing_nodes) != null && V.length && (G.missing_nodes.slice(0, 3).forEach((U) => {
        we.push(`Missing: ${U}`);
      }), G.missing_nodes.length > 3 && we.push(`...and ${G.missing_nodes.length - 3} more missing`)), we;
    });
    return (we, G) => (n(), i(j, null, [
      C(Ht, null, {
        header: g(() => [
          C(Kt, { title: "STATUS" })
        ]),
        content: g(() => [
          a.setupState === "no_workspace" ? (n(), D(us, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: g(() => [
              C(me, {
                variant: "primary",
                size: "sm",
                onClick: G[0] || (G[0] = (ae) => we.$emit("start-setup"))
              }, {
                default: g(() => [...G[13] || (G[13] = [
                  $(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (n(), D(us, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: g(() => [
              C(me, {
                variant: "primary",
                size: "sm",
                onClick: G[1] || (G[1] = (ae) => we.$emit("view-environments"))
              }, {
                default: g(() => [...G[14] || (G[14] = [
                  $(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (n(), D(us, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: g(() => [
              C(me, {
                variant: "primary",
                size: "sm",
                onClick: G[2] || (G[2] = (ae) => we.$emit("create-environment"))
              }, {
                default: g(() => [...G[15] || (G[15] = [
                  $(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: G[4] || (G[4] = (ae) => r.value = !0),
            onMouseleave: G[5] || (G[5] = (ae) => r.value = !1)
          }, [
            t("div", vv, [
              C(Jt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: g(() => [...G[16] || (G[16] = [
                  $(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              C(ud, { name: "fade" }, {
                default: g(() => [
                  r.value ? (n(), D(me, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: g(() => [...G[17] || (G[17] = [
                      $(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            C(hm, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, mo({
              left: g(() => [
                e.status.workflows.new.length ? (n(), D(ks, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (n(), D(ks, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (n(), D(ks, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                C(ks, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: A.value
                }, null, 8, ["count", "separator"])
              ]),
              right: g(() => [
                e.status.git_changes.nodes_added.length ? (n(), D(ks, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (n(), D(ks, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (n(), D(ks, {
                  key: 2,
                  icon: "●",
                  count: O.value,
                  label: O.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                F.value ? (n(), D(ks, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                T.value && !P.value && !F.value ? (n(), D(ks, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                T.value ? y("", !0) : (n(), D(ks, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              M.value ? {
                name: "footer",
                fn: g(() => [
                  G[19] || (G[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", pv, [
                    t("span", gv, d(ie.value), 1),
                    C(me, {
                      variant: "primary",
                      size: "sm",
                      onClick: G[3] || (G[3] = (ae) => we.$emit("commit-changes"))
                    }, {
                      default: g(() => [...G[18] || (G[18] = [
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
          e.status.is_detached_head ? (n(), D(us, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: g(() => [
              C(me, {
                variant: "primary",
                size: "sm",
                onClick: G[6] || (G[6] = (ae) => we.$emit("create-branch"))
              }, {
                default: g(() => [...G[20] || (G[20] = [
                  $(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", hv, [
            C(Jt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: g(() => [...G[21] || (G[21] = [
                $(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ne.value ? (n(), i(j, { key: 0 }, [
              I.value.length > 0 ? (n(), D(us, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} can't run`,
                description: ue.value,
                items: I.value.map(W)
              }, {
                actions: g(() => [
                  C(me, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[7] || (G[7] = (ae) => we.$emit("view-workflows"))
                  }, {
                    default: g(() => [...G[22] || (G[22] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              L.value.length > 0 ? (n(), D(us, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${L.value.length} workflow${L.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: L.value.map((ae) => `${ae.name} — ${ae.models_needing_path_sync_count} model path${ae.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: g(() => [
                  C(me, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[8] || (G[8] = (ae) => we.$emit("view-workflows"))
                  }, {
                    default: g(() => [...G[23] || (G[23] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !te.value ? (n(), D(us, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: g(() => [
                  C(me, {
                    variant: "primary",
                    size: "sm",
                    disabled: v.value,
                    onClick: b
                  }, {
                    default: g(() => [
                      $(d(v.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  C(me, {
                    variant: "secondary",
                    size: "sm",
                    onClick: G[9] || (G[9] = (ae) => we.$emit("view-workflows"))
                  }, {
                    default: g(() => [...G[24] || (G[24] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (n(), D(us, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: ke.value,
                items: Ee.value
              }, {
                actions: g(() => [
                  C(me, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: g(() => [...G[25] || (G[25] = [
                      $(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  C(me, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[10] || (G[10] = (ae) => we.$emit("view-nodes"))
                  }, {
                    default: g(() => [...G[26] || (G[26] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (n(), D(us, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: g(() => [
                  C(me, {
                    variant: "primary",
                    size: "sm",
                    onClick: G[11] || (G[11] = (ae) => we.$emit("view-nodes"))
                  }, {
                    default: g(() => [...G[27] || (G[27] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : M.value ? (n(), i("span", yv, "No issues")) : (n(), D(hs, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      C(fv, {
        show: l.value,
        status: e.status,
        "is-repairing": p.value,
        onClose: G[12] || (G[12] = (ae) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: m,
        onRepair: _
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), _v = /* @__PURE__ */ _e(wv, [["__scopeId", "data-v-df52ba90"]]), kv = ["type", "value", "placeholder", "disabled"], bv = /* @__PURE__ */ he({
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
      class: De(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        m[0] || (m[0] = as((f) => u.$emit("enter"), ["enter"])),
        m[1] || (m[1] = as((f) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: m[2] || (m[2] = (f) => u.$emit("focus")),
      onBlur: m[3] || (m[3] = (f) => u.$emit("blur"))
    }, null, 42, kv));
  }
}), tn = /* @__PURE__ */ _e(bv, [["__scopeId", "data-v-0380d08f"]]), $v = { class: "branch-create-form" }, Cv = { class: "form-actions" }, xv = /* @__PURE__ */ he({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, a = k(""), l = N(() => {
      const u = a.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function r() {
      l.value && (o("create", a.value.trim()), a.value = "");
    }
    function c() {
      a.value = "", o("cancel");
    }
    return (u, m) => (n(), i("div", $v, [
      C(tn, {
        modelValue: a.value,
        "onUpdate:modelValue": m[0] || (m[0] = (f) => a.value = f),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      t("div", Cv, [
        C(me, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: r
        }, {
          default: g(() => [...m[1] || (m[1] = [
            $(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        C(me, {
          variant: "secondary",
          size: "sm",
          onClick: c
        }, {
          default: g(() => [...m[2] || (m[2] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Sv = /* @__PURE__ */ _e(xv, [["__scopeId", "data-v-7c500394"]]), Iv = { class: "branch-list-item__indicator" }, Ev = { class: "branch-list-item__name" }, Tv = {
  key: 0,
  class: "branch-list-item__actions"
}, Pv = {
  key: 0,
  class: "branch-list-item__current-label"
}, Rv = /* @__PURE__ */ he({
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
      class: De(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, [
      t("span", Iv, d(e.isCurrent ? "●" : "○"), 1),
      t("span", Ev, d(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (n(), i("div", Tv, [
        ot(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", Pv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Mv = /* @__PURE__ */ _e(Rv, [["__scopeId", "data-v-c6581a24"]]), cL = Js({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const uL = [
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
], dL = {
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
}, Dv = [
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
], mL = [
  ...Dv,
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
function xo() {
  return !1;
}
function Lv() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const s = Math.random() * 16 | 0;
    return (e === "x" ? s : s & 3 | 8).toString(16);
  });
}
function it() {
  const e = k(!1), s = k(null);
  async function o(X, xe) {
    var Dt;
    if (!((Dt = window.app) != null && Dt.api))
      throw new Error("ComfyUI API not available");
    const Ge = await window.app.api.fetchApi(X, xe);
    if (!Ge.ok) {
      const cs = await Ge.json().catch(() => ({}));
      throw new Error(cs.error || cs.message || `Request failed: ${Ge.status}`);
    }
    const wt = await Ge.text();
    if (wt)
      return JSON.parse(wt);
  }
  async function a(X = !1) {
    return o(X ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(X, xe = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: X, allow_issues: xe })
    });
  }
  async function r(X = 10, xe = 0) {
    return o(`/v2/comfygit/log?limit=${X}&offset=${xe}`);
  }
  async function c(X, xe = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(X)}&limit=${xe}`);
  }
  async function u(X) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: X })
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
  async function v(X) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: X, force: !0 })
    });
  }
  async function p() {
    return o("/v2/comfygit/branches");
  }
  async function _(X) {
    return o(`/v2/comfygit/commit/${X}`);
  }
  async function h(X, xe = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: X, force: xe })
    });
  }
  async function w(X, xe = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: X, start_point: xe })
    });
  }
  async function x(X, xe = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: X, force: xe })
    });
  }
  async function b(X, xe = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(X)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: xe })
    });
  }
  async function S() {
    try {
      return await o("/v2/comfygit/environments");
    } catch {
      try {
        const X = await a();
        return {
          environments: [{
            name: X.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + X.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: X.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: X.branch
          }],
          current: X.environment,
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
  async function A() {
    return (await S()).environments;
  }
  async function T(X) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(X)}`);
    } catch {
      return null;
    }
  }
  async function P(X, xe) {
    const Ge = { target_env: X };
    return xe && (Ge.workspace_path = xe), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ge)
    });
  }
  async function M() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function O(X) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function F() {
    return o("/v2/workspace/environments/create_status");
  }
  async function I(X = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${X}`);
  }
  async function L(X) {
    return o(`/v2/workspace/environments/${X}`, {
      method: "DELETE"
    });
  }
  async function te(X = !1) {
    try {
      return o(X ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const xe = await a(X), Ge = [];
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
  async function Y(X) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(X)}/details`);
  }
  async function K(X) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(X)}/contract`);
  }
  async function H(X, xe) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(X)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(xe)
    });
  }
  async function B(X) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(X)}/contract`, {
      method: "DELETE"
    });
  }
  async function W(X) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(X)}/resolve`, {
      method: "POST"
    });
  }
  async function se(X, xe, Ge) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(X)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: xe, install_models: Ge })
    });
  }
  async function Ue(X, xe, Ge) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(X)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: xe, importance: Ge })
    });
  }
  async function ee() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function ue() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function ne(X) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(X)}`);
  }
  async function ie(X) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: X })
    });
  }
  async function ke(X, xe) {
    return o(`/v2/workspace/models/${X}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: xe })
    });
  }
  async function Ee(X, xe) {
    return o(`/v2/workspace/models/${X}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: xe })
    });
  }
  async function we(X) {
    return o(`/v2/workspace/models/${X}`, {
      method: "DELETE"
    });
  }
  async function G(X) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function ae() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function V() {
    return o("/v2/workspace/models/directory");
  }
  async function U(X) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: X })
    });
  }
  async function oe(X) {
    const xe = new URLSearchParams({ url: X });
    return o(`/v2/workspace/huggingface/repo-info?${xe}`);
  }
  async function Ae() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function ze(X, xe = 10) {
    const Ge = new URLSearchParams({ query: X, limit: String(xe) });
    return o(`/v2/workspace/huggingface/search?${Ge}`);
  }
  async function z(X) {
    try {
      const xe = X ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(X)}` : "/v2/comfygit/config";
      return o(xe);
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
  async function J(X, xe) {
    const Ge = xe ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(xe)}` : "/v2/comfygit/config";
    return o(Ge, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function re(X, xe) {
    try {
      const Ge = new URLSearchParams();
      return X && Ge.append("level", X), xe && Ge.append("lines", xe.toString()), o(`/v2/comfygit/debug/logs?${Ge}`);
    } catch {
      return [];
    }
  }
  async function Ie(X, xe) {
    try {
      const Ge = new URLSearchParams();
      return X && Ge.append("level", X), xe && Ge.append("lines", xe.toString()), o(`/v2/workspace/debug/logs?${Ge}`);
    } catch {
      return [];
    }
  }
  async function be() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function $e() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function Le(X, xe) {
    try {
      const Ge = new URLSearchParams();
      return X && Ge.append("level", X), xe && Ge.append("lines", xe.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Ge}`);
    } catch {
      return [];
    }
  }
  async function ye() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function Re(X) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: X })
    });
  }
  async function fe() {
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
  async function je(X) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(X)}/track-dev`, {
      method: "POST"
    });
  }
  async function Oe(X) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(X)}/install`, {
      method: "POST"
    });
  }
  async function pe(X, xe) {
    var Vs, Je, ga, kl;
    const Ge = Lv(), wt = ((Je = (Vs = window.app) == null ? void 0 : Vs.api) == null ? void 0 : Je.clientId) ?? ((kl = (ga = window.app) == null ? void 0 : ga.api) == null ? void 0 : kl.initialClientId) ?? "comfygit-panel", Dt = {
      id: X.id,
      version: X.version || X.selected_version || "latest",
      selected_version: X.selected_version || "latest",
      mode: X.mode || "remote",
      channel: X.channel || "default"
    };
    return X.install_source && (Dt.install_source = X.install_source), X.install_source === "git" && X.repository && (Dt.repository = X.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Dt,
        ui_id: Ge,
        client_id: wt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", Ge, "for package:", X.id), xe != null && xe.beforeQueueStart && await xe.beforeQueueStart(Ge), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: Ge };
  }
  async function q(X) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(X)}/update`, {
      method: "POST"
    });
  }
  async function Ve(X) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(X)}`, {
      method: "DELETE"
    });
  }
  async function Se() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Ce(X, xe) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: X, url: xe })
    });
  }
  async function Ne(X) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(X)}`, {
      method: "DELETE"
    });
  }
  async function Pe(X, xe, Ge) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(X)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: xe, push_url: Ge })
    });
  }
  async function Q(X, xe) {
    const Ge = {};
    return xe && (Ge["X-Git-Auth-Token"] = xe), o(`/v2/comfygit/remotes/${encodeURIComponent(X)}/fetch`, {
      method: "POST",
      headers: Ge
    });
  }
  async function de(X) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(X)}/status`);
    } catch {
      return null;
    }
  }
  async function ge(X = "skip", xe = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: X,
        remove_extra_nodes: xe
      })
    });
  }
  async function Ke(X, xe) {
    const Ge = xe ? `/v2/comfygit/remotes/${encodeURIComponent(X)}/pull-preview?branch=${encodeURIComponent(xe)}` : `/v2/comfygit/remotes/${encodeURIComponent(X)}/pull-preview`;
    return o(Ge);
  }
  async function Fe(X, xe = {}) {
    const Ge = { "Content-Type": "application/json" };
    return xe.authToken && (Ge["X-Git-Auth-Token"] = xe.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(X)}/pull`, {
      method: "POST",
      headers: Ge,
      body: JSON.stringify({
        model_strategy: xe.modelStrategy || "skip",
        force: xe.force || !1,
        resolutions: xe.resolutions
      })
    });
  }
  async function Be(X, xe) {
    const Ge = xe ? `/v2/comfygit/remotes/${encodeURIComponent(X)}/push-preview?branch=${encodeURIComponent(xe)}` : `/v2/comfygit/remotes/${encodeURIComponent(X)}/push-preview`;
    return o(Ge);
  }
  async function et(X, xe = {}) {
    const Ge = { "Content-Type": "application/json" };
    return xe.authToken && (Ge["X-Git-Auth-Token"] = xe.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(X)}/push`, {
      method: "POST",
      headers: Ge,
      body: JSON.stringify({ force: xe.force || !1 })
    });
  }
  async function qe(X, xe) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(X)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: xe })
    });
  }
  async function mt(X) {
    const xe = {
      success: 0,
      failed: []
    };
    for (const Ge of X)
      try {
        await W(Ge), xe.success++;
      } catch (wt) {
        xe.failed.push({
          name: Ge,
          error: wt instanceof Error ? wt.message : "Unknown error"
        });
      }
    return xe;
  }
  async function ct(X) {
    var wt;
    const xe = new FormData();
    if (xe.append("file", X), !((wt = window.app) != null && wt.api))
      throw new Error("ComfyUI API not available");
    const Ge = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: xe
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ge.ok) {
      const Dt = await Ge.json().catch(() => ({}));
      throw new Error(Dt.error || `Preview failed: ${Ge.status}`);
    }
    return Ge.json();
  }
  async function dt(X) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(X)}`
    );
  }
  async function Tt(X, xe, Ge, wt) {
    var Vs;
    const Dt = new FormData();
    if (Dt.append("file", X), Dt.append("name", xe), Dt.append("model_strategy", Ge), Dt.append("torch_backend", wt), !((Vs = window.app) != null && Vs.api))
      throw new Error("ComfyUI API not available");
    const cs = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Dt
    });
    if (!cs.ok) {
      const Je = await cs.json().catch(() => ({}));
      throw new Error(Je.message || Je.error || `Import failed: ${cs.status}`);
    }
    return cs.json();
  }
  async function es() {
    return o("/v2/workspace/import/status");
  }
  async function Ot(X) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: X })
    });
  }
  async function le(X, xe, Ge, wt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: X,
        name: xe,
        model_strategy: Ge,
        torch_backend: wt
      })
    });
  }
  async function E() {
    return o("/v2/setup/status");
  }
  async function R() {
    return o("/v2/comfygit/update-check");
  }
  async function Te() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function tt(X) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function ft() {
    return o("/v2/setup/initialize_status");
  }
  async function st(X) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function Ct() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function It() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function We(X, xe) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: X, save_key: xe })
    });
  }
  async function is() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function ws(X) {
    const xe = X ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(X)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(xe);
  }
  async function fo(X) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function vo() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function po(X) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(X)}`, {
      method: "DELETE"
    });
  }
  async function Xs(X) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(X)}/stop`, {
      method: "POST"
    });
  }
  async function go(X) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(X)}/start`, {
      method: "POST"
    });
  }
  async function ho(X) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(X)}/status`);
  }
  async function yo(X) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: X })
    });
  }
  async function wo(X = !1) {
    return o(X ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function _o() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function fa() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function va(X) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function pa(X) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(X)}`, {
      method: "DELETE"
    });
  }
  async function wn(X) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(X)
    });
  }
  async function ce() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function Z(X) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(X)}/info`);
  }
  async function He(X) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(X)}/instances`);
  }
  async function Qe(X, xe) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(X)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(xe)
    });
  }
  async function gt(X, xe) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(X)}/instances/${encodeURIComponent(xe)}/start`, {
      method: "POST"
    });
  }
  async function Et(X, xe) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(X)}/instances/${encodeURIComponent(xe)}/stop`, {
      method: "POST"
    });
  }
  async function rs(X, xe) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(X)}/instances/${encodeURIComponent(xe)}`, {
      method: "DELETE"
    });
  }
  async function Zs(X) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: X })
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
    checkout: h,
    createBranch: w,
    switchBranch: x,
    deleteBranch: b,
    // Environment Management
    listEnvironments: S,
    getEnvironments: A,
    getEnvironmentDetails: T,
    switchEnvironment: P,
    getSwitchProgress: M,
    createEnvironment: O,
    getCreateProgress: F,
    getComfyUIReleases: I,
    deleteEnvironment: L,
    // Workflow Management
    getWorkflows: te,
    getWorkflowDetails: Y,
    getWorkflowContract: K,
    saveWorkflowContract: H,
    deleteWorkflowContract: B,
    resolveWorkflow: W,
    installWorkflowDeps: se,
    setModelImportance: Ue,
    // Model Management
    getEnvironmentModels: ee,
    getWorkspaceModels: ue,
    getModelDetails: ne,
    openFileLocation: ie,
    addModelSource: ke,
    removeModelSource: Ee,
    deleteModel: we,
    downloadModel: G,
    scanWorkspaceModels: ae,
    getModelsDirectory: V,
    setModelsDirectory: U,
    getHuggingFaceRepoInfo: oe,
    getModelsSubdirectories: Ae,
    searchHuggingFaceRepos: ze,
    // Settings
    getConfig: z,
    updateConfig: J,
    // Debug/Logs
    getEnvironmentLogs: re,
    getWorkspaceLogs: Ie,
    getEnvironmentLogPath: be,
    getWorkspaceLogPath: $e,
    getOrchestratorLogs: Le,
    getOrchestratorLogPath: ye,
    openFile: Re,
    // Node Management
    getNodes: fe,
    trackNodeAsDev: je,
    installNode: Oe,
    queueNodeInstall: pe,
    updateNode: q,
    uninstallNode: Ve,
    // Git Remotes
    getRemotes: Se,
    addRemote: Ce,
    removeRemote: Ne,
    updateRemoteUrl: Pe,
    fetchRemote: Q,
    getRemoteSyncStatus: de,
    // Push/Pull
    getPullPreview: Ke,
    pullFromRemote: Fe,
    getPushPreview: Be,
    pushToRemote: et,
    validateMerge: qe,
    // Environment Sync
    syncEnvironmentManually: ge,
    // Workflow Repair
    repairWorkflowModels: mt,
    // Import Operations
    previewTarballImport: ct,
    previewGitImport: Ot,
    validateEnvironmentName: dt,
    executeImport: Tt,
    executeGitImport: le,
    getImportProgress: es,
    // First-Time Setup
    getSetupStatus: E,
    // Manager Update Notice
    getUpdateCheck: R,
    updateManager: Te,
    initializeWorkspace: tt,
    getInitializeProgress: ft,
    validatePath: st,
    // Deploy Operations
    getDeploySummary: Ct,
    getDataCenters: It,
    testRunPodConnection: We,
    getNetworkVolumes: is,
    getRunPodGpuTypes: ws,
    deployToRunPod: fo,
    getRunPodPods: vo,
    terminateRunPodPod: po,
    stopRunPodPod: Xs,
    startRunPodPod: go,
    getDeploymentStatus: ho,
    exportDeployPackage: yo,
    getStoredRunPodKey: wo,
    clearRunPodKey: _o,
    // Custom Worker Operations
    getCustomWorkers: fa,
    addCustomWorker: va,
    removeCustomWorker: pa,
    testWorkerConnection: wn,
    scanForWorkers: ce,
    getWorkerSystemInfo: Z,
    getWorkerInstances: He,
    deployToWorker: Qe,
    startWorkerInstance: gt,
    stopWorkerInstance: Et,
    terminateWorkerInstance: rs,
    // Git Authentication
    testGitAuth: Zs
  };
}
const Uv = { class: "base-modal-header" }, Nv = {
  key: 0,
  class: "base-modal-title"
}, Ov = { class: "base-modal-body" }, Av = {
  key: 0,
  class: "base-modal-loading"
}, zv = {
  key: 1,
  class: "base-modal-error"
}, Vv = {
  key: 0,
  class: "base-modal-footer"
}, Fv = /* @__PURE__ */ he({
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
    }), Qs(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (n(), D(Nt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: De(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = bt(() => {
          }, ["stop"]))
        }, [
          t("div", Uv, [
            ot(c.$slots, "header", {}, () => [
              e.title ? (n(), i("h3", Nv, d(e.title), 1)) : y("", !0)
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
          t("div", Ov, [
            e.loading ? (n(), i("div", Av, "Loading...")) : e.error ? (n(), i("div", zv, d(e.error), 1)) : ot(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (n(), i("div", Vv, [
            ot(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), $t = /* @__PURE__ */ _e(Fv, [["__scopeId", "data-v-8dab1081"]]), Bv = ["type", "disabled"], Wv = {
  key: 0,
  class: "spinner"
}, Gv = /* @__PURE__ */ he({
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
      class: De(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", Wv)) : y("", !0),
      ot(s.$slots, "default", {}, void 0)
    ], 10, Bv));
  }
}), Me = /* @__PURE__ */ _e(Gv, [["__scopeId", "data-v-f3452606"]]), jv = { class: "commit-list" }, Hv = /* @__PURE__ */ he({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (n(), i("div", jv, [
      ot(s.$slots, "default", {}, void 0)
    ]));
  }
}), Or = /* @__PURE__ */ _e(Hv, [["__scopeId", "data-v-8c5ee761"]]), Kv = { class: "commit-hash" }, qv = /* @__PURE__ */ he({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = N(() => s.hash.slice(0, s.length));
    return (a, l) => (n(), i("span", Kv, d(o.value), 1));
  }
}), Ar = /* @__PURE__ */ _e(qv, [["__scopeId", "data-v-7c333cc6"]]), Yv = { class: "commit-message" }, Jv = { class: "commit-date" }, Qv = /* @__PURE__ */ he({
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
      class: De(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      C(Ar, { hash: e.hash }, null, 8, ["hash"]),
      t("span", Yv, d(e.message), 1),
      t("span", Jv, d(e.relativeDate), 1),
      r.$slots.actions ? (n(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = bt(() => {
        }, ["stop"]))
      }, [
        ot(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), zr = /* @__PURE__ */ _e(Qv, [["__scopeId", "data-v-dd7c621b"]]), Xv = { class: "header-info" }, Zv = { class: "branch-name" }, ep = {
  key: 0,
  class: "current-badge"
}, tp = { class: "branch-meta" }, sp = { key: 0 }, op = {
  key: 0,
  class: "meta-note"
}, np = {
  key: 0,
  class: "loading"
}, ap = {
  key: 1,
  class: "empty-state"
}, lp = /* @__PURE__ */ he({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const s = e, { getBranchHistory: o } = it(), a = k([]), l = k(!1), r = k(!0);
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
      header: g(() => [
        t("div", Xv, [
          u[4] || (u[4] = t("h3", { class: "header-title" }, "BRANCH", -1)),
          t("span", Zv, d(e.branchName), 1),
          e.isCurrent ? (n(), i("span", ep, "CURRENT")) : y("", !0)
        ]),
        C(Me, {
          variant: "ghost",
          size: "sm",
          onClick: u[0] || (u[0] = (m) => c.$emit("close"))
        }, {
          default: g(() => [...u[5] || (u[5] = [
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
      body: g(() => [
        t("div", tp, [
          r.value ? (n(), i("span", sp, "Loading...")) : (n(), i(j, { key: 1 }, [
            t("span", null, d(a.value.length) + " commits", 1),
            l.value ? (n(), i("span", op, "(showing first " + d(a.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (n(), i("div", np, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", ap, " No commits found on this branch ")) : (n(), D(Or, {
          key: 2,
          class: "branch-commits"
        }, {
          default: g(() => [
            (n(!0), i(j, null, ve(a.value, (m) => (n(), D(zr, {
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
      footer: g(() => [
        e.isCurrent ? y("", !0) : (n(), D(me, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: u[1] || (u[1] = (m) => c.$emit("delete", e.branchName))
        }, {
          default: g(() => [...u[6] || (u[6] = [
            $(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        u[8] || (u[8] = t("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? y("", !0) : (n(), D(Me, {
          key: 1,
          variant: "primary",
          onClick: u[2] || (u[2] = (m) => c.$emit("switch", e.branchName))
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
}), ip = /* @__PURE__ */ _e(lp, [["__scopeId", "data-v-2e5437cc"]]), rp = {
  key: 2,
  class: "branch-list"
}, cp = /* @__PURE__ */ he({
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
    return (v, p) => (n(), D(Ht, null, {
      header: g(() => [
        C(Kt, { title: "BRANCHES" }, {
          actions: g(() => [
            a.value ? y("", !0) : (n(), D(me, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: p[0] || (p[0] = (_) => a.value = !0)
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
      content: g(() => [
        a.value ? (n(), D(Sv, {
          key: 0,
          onCreate: r,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (n(), D(hs, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (n(), i("div", rp, [
          (n(!0), i(j, null, ve(e.branches, (_) => (n(), D(Mv, {
            key: _.name,
            "branch-name": _.name,
            "is-current": _.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (h) => u(_)
          }, {
            actions: g(() => [
              _.is_current ? y("", !0) : (n(), D(me, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: bt((h) => o("switch", _.name), ["stop"])
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
        l.value ? (n(), D(ip, {
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
}), up = /* @__PURE__ */ _e(cp, [["__scopeId", "data-v-eefdcb00"]]), dp = /* @__PURE__ */ he({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    const s = e, o = N(() => `HISTORY (${s.currentRef || "detached"})`);
    return (a, l) => (n(), D(Ht, null, {
      header: g(() => [
        C(Kt, { title: o.value }, null, 8, ["title"])
      ]),
      content: g(() => [
        e.commits.length === 0 ? (n(), D(hs, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), D(Or, { key: 1 }, {
          default: g(() => [
            (n(!0), i(j, null, ve(e.commits, (r) => (n(), D(zr, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => a.$emit("select", r)
            }, {
              actions: g(() => [
                C(me, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (c) => a.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: g(() => [...l[0] || (l[0] = [
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
}), mp = /* @__PURE__ */ _e(dp, [["__scopeId", "data-v-62a5d9da"]]);
async function Sn(e, s) {
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
function fp() {
  async function e() {
    try {
      return await Sn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await Sn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await Sn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await Sn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: s,
    restart: o,
    kill: a
  };
}
const vp = {
  key: 0,
  class: "base-title-count"
}, pp = /* @__PURE__ */ he({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (n(), D(ul(`h${e.level}`), {
      class: De(["base-title", e.variant])
    }, {
      default: g(() => [
        ot(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", vp, "(" + d(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ro = /* @__PURE__ */ _e(pp, [["__scopeId", "data-v-5a01561d"]]), gp = ["value", "disabled"], hp = {
  key: 0,
  value: "",
  disabled: ""
}, yp = ["value"], wp = {
  key: 0,
  class: "base-select-error"
}, _p = /* @__PURE__ */ he({
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
      class: De(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: De(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => a.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (n(), i("option", hp, d(e.placeholder), 1)) : y("", !0),
        (n(!0), i(j, null, ve(e.options, (r) => (n(), i("option", {
          key: s(r),
          value: s(r)
        }, d(o(r)), 9, yp))), 128))
      ], 42, gp),
      e.error ? (n(), i("span", wp, d(e.error), 1)) : y("", !0)
    ], 2));
  }
}), On = /* @__PURE__ */ _e(_p, [["__scopeId", "data-v-4996bfe0"]]), kp = { class: "popover-header" }, bp = { class: "popover-title" }, $p = { class: "popover-content" }, Cp = {
  key: 0,
  class: "popover-actions"
}, xp = /* @__PURE__ */ he({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (n(), D(Nt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Zt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = bt(() => {
          }, ["stop"]))
        }, [
          t("div", kp, [
            t("h4", bp, d(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", $p, [
            ot(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (n(), i("div", Cp, [
            ot(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), ys = /* @__PURE__ */ _e(xp, [["__scopeId", "data-v-42815ace"]]), Sp = { class: "detail-section" }, Ip = {
  key: 0,
  class: "empty-message"
}, Ep = { class: "model-header" }, Tp = { class: "model-name" }, Pp = { class: "model-details" }, Rp = { class: "model-row" }, Mp = { class: "model-row" }, Dp = { class: "label" }, Lp = {
  key: 0,
  class: "model-row model-row-nodes"
}, Up = { class: "node-list" }, Np = ["onClick"], Op = {
  key: 1,
  class: "model-row"
}, Ap = { class: "value" }, zp = {
  key: 2,
  class: "model-row"
}, Vp = { class: "value error" }, Fp = {
  key: 0,
  class: "model-actions"
}, Bp = { class: "detail-section" }, Wp = {
  key: 0,
  class: "empty-message"
}, Gp = { class: "node-content" }, jp = { class: "node-main" }, Hp = { class: "node-name" }, Kp = { class: "node-badge" }, qp = {
  key: 0,
  class: "node-version"
}, Yp = ["onClick"], Jp = {
  key: 2,
  class: "node-install-queued"
}, Qp = {
  key: 0,
  class: "node-guidance"
}, Xp = /* @__PURE__ */ he({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = it(), m = k(null), f = k(!1), v = k(null), p = k(!1), _ = k({}), h = k(!1), w = k(/* @__PURE__ */ new Set()), x = k(/* @__PURE__ */ new Set()), b = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(B) {
      switch (B) {
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
    function A(B) {
      switch (B) {
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
    function T(B) {
      switch (B) {
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
    function P(B) {
      switch (B) {
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
    function M(B) {
      switch (B) {
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
    function O(B) {
      if (!B.loaded_by || B.loaded_by.length === 0) return [];
      const W = B.hash || B.filename;
      return w.value.has(W) ? B.loaded_by : B.loaded_by.slice(0, 3);
    }
    function F(B) {
      return w.value.has(B);
    }
    function I(B) {
      w.value.has(B) ? w.value.delete(B) : w.value.add(B), w.value = new Set(w.value);
    }
    async function L() {
      f.value = !0, v.value = null;
      try {
        m.value = await l(o.workflowName);
      } catch (B) {
        v.value = B instanceof Error ? B.message : "Failed to load workflow details";
      } finally {
        f.value = !1;
      }
    }
    function te(B, W) {
      _.value[B] = W, p.value = !0;
    }
    async function Y(B) {
      try {
        await c(B);
      } catch (W) {
        v.value = W instanceof Error ? W.message : "Failed to open file location";
      }
    }
    async function K(B) {
      if (B.package_id)
        try {
          const W = B.latest_version || "latest";
          await u({
            id: B.package_id,
            version: W,
            selected_version: W,
            mode: "remote",
            channel: "default"
          }), x.value.add(B.package_id);
        } catch (W) {
          v.value = W instanceof Error ? W.message : "Failed to queue node install";
        }
    }
    async function H() {
      if (!p.value) {
        a("close");
        return;
      }
      f.value = !0, v.value = null;
      try {
        for (const [B, W] of Object.entries(_.value))
          await r(o.workflowName, B, W);
        a("refresh"), a("close");
      } catch (B) {
        v.value = B instanceof Error ? B.message : "Failed to save changes";
      } finally {
        f.value = !1;
      }
    }
    return at(L), (B, W) => (n(), i(j, null, [
      C($t, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: f.value,
        error: v.value || void 0,
        onClose: W[4] || (W[4] = (se) => a("close"))
      }, {
        body: g(() => [
          m.value ? (n(), i(j, { key: 0 }, [
            t("section", Sp, [
              C(ro, { variant: "section" }, {
                default: g(() => [
                  $("MODELS USED (" + d(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (n(), i("div", Ip, " No models used in this workflow ")) : y("", !0),
              (n(!0), i(j, null, ve(m.value.models, (se) => {
                var Ue;
                return n(), i("div", {
                  key: se.hash || se.filename,
                  class: "model-card"
                }, [
                  t("div", Ep, [
                    W[6] || (W[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", Tp, d(se.filename), 1)
                  ]),
                  t("div", Pp, [
                    t("div", Rp, [
                      W[7] || (W[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: De(["value", S(se.status)])
                      }, d(A(se.status)), 3)
                    ]),
                    t("div", Mp, [
                      t("span", Dp, [
                        W[8] || (W[8] = $(" Importance: ", -1)),
                        C(Nr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: W[0] || (W[0] = (ee) => h.value = !0)
                        })
                      ]),
                      C(On, {
                        "model-value": _.value[se.filename] || se.importance,
                        options: b,
                        "onUpdate:modelValue": (ee) => te(se.filename, ee)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    se.loaded_by && se.loaded_by.length > 0 ? (n(), i("div", Lp, [
                      W[9] || (W[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", Up, [
                        (n(!0), i(j, null, ve(O(se), (ee, ue) => (n(), i("div", {
                          key: `${ee.node_id}-${ue}`,
                          class: "node-reference"
                        }, d(ee.node_type) + " (Node #" + d(ee.node_id) + ") ", 1))), 128)),
                        se.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (ee) => I(se.hash || se.filename)
                        }, d(F(se.hash || se.filename) ? "▼ Show less" : `▶ View all (${se.loaded_by.length})`), 9, Np)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    se.size_mb ? (n(), i("div", Op, [
                      W[10] || (W[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", Ap, d(se.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    se.has_category_mismatch ? (n(), i("div", zp, [
                      W[13] || (W[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", Vp, [
                        W[11] || (W[11] = $(" In ", -1)),
                        t("code", null, d(se.actual_category) + "/", 1),
                        W[12] || (W[12] = $(" but loader needs ", -1)),
                        t("code", null, d((Ue = se.expected_categories) == null ? void 0 : Ue[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  se.status !== "available" ? (n(), i("div", Fp, [
                    se.status === "downloadable" ? (n(), D(Me, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: W[1] || (W[1] = (ee) => a("resolve"))
                    }, {
                      default: g(() => [...W[14] || (W[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : se.status === "category_mismatch" && se.file_path ? (n(), D(Me, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (ee) => Y(se.file_path)
                    }, {
                      default: g(() => [...W[15] || (W[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : se.status !== "path_mismatch" ? (n(), D(Me, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: W[2] || (W[2] = (ee) => a("resolve"))
                    }, {
                      default: g(() => [...W[16] || (W[16] = [
                        $(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            t("section", Bp, [
              C(ro, { variant: "section" }, {
                default: g(() => [
                  $("NODES USED (" + d(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (n(), i("div", Wp, " No custom nodes used in this workflow ")) : y("", !0),
              (n(!0), i(j, null, ve(m.value.nodes, (se, Ue) => (n(), i("div", {
                key: `${se.name}-${se.status}-${Ue}`,
                class: "node-item"
              }, [
                t("span", {
                  class: De(["node-status", T(se.status)])
                }, d(P(se.status)), 3),
                t("div", Gp, [
                  t("div", jp, [
                    t("span", Hp, d(se.name), 1),
                    t("span", Kp, d(M(se.status)), 1),
                    se.version ? (n(), i("span", qp, "v" + d(se.version), 1)) : y("", !0),
                    se.status === "uninstallable" && se.package_id && !x.value.has(se.package_id) ? (n(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (ee) => K(se)
                    }, " Install ", 8, Yp)) : se.status === "uninstallable" && se.package_id && x.value.has(se.package_id) ? (n(), i("span", Jp, " Queued ")) : y("", !0)
                  ]),
                  se.guidance ? (n(), i("div", Qp, d(se.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: g(() => [
          C(Me, {
            variant: "secondary",
            onClick: W[3] || (W[3] = (se) => a("close"))
          }, {
            default: g(() => [...W[17] || (W[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (n(), D(Me, {
            key: 0,
            variant: "primary",
            onClick: H
          }, {
            default: g(() => [...W[18] || (W[18] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      C(ys, {
        show: h.value,
        title: "Model Importance Levels",
        onClose: W[5] || (W[5] = (se) => h.value = !1)
      }, {
        content: g(() => [...W[19] || (W[19] = [
          t("ul", { class: "importance-info-list" }, [
            t("li", null, [
              t("strong", null, "Required"),
              $(" — Must have for workflow to run")
            ]),
            t("li", null, [
              t("strong", null, "Flexible"),
              $(" — Workflow adapts if missing")
            ]),
            t("li", null, [
              t("strong", null, "Optional"),
              $(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Zp = /* @__PURE__ */ _e(Xp, [["__scopeId", "data-v-543076d9"]]), eg = ["type", "value", "placeholder", "disabled"], tg = {
  key: 0,
  class: "base-input-error"
}, sg = /* @__PURE__ */ he({
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
      class: De(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: De(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          o[1] || (o[1] = as((a) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = as((a) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, eg),
      e.error ? (n(), i("span", tg, d(e.error), 1)) : y("", !0)
    ], 2));
  }
}), vt = /* @__PURE__ */ _e(sg, [["__scopeId", "data-v-9ba02cdc"]]), og = { class: "base-textarea-wrapper" }, ng = ["value", "rows", "placeholder", "disabled", "maxlength"], ag = {
  key: 0,
  class: "base-textarea-count"
}, lg = /* @__PURE__ */ he({
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
    return (r, c) => (n(), i("div", og, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = as(bt((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = as(bt((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          as(l, ["enter"])
        ]
      }, null, 40, ng),
      e.showCharCount && e.maxLength ? (n(), i("div", ag, d(e.modelValue.length) + " / " + d(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), qn = /* @__PURE__ */ _e(lg, [["__scopeId", "data-v-c6d16c93"]]), ig = ["for"], rg = {
  key: 0,
  class: "base-form-field-required"
}, cg = { class: "base-form-field-input" }, ug = {
  key: 1,
  class: "base-form-field-error"
}, dg = {
  key: 2,
  class: "base-form-field-hint"
}, mg = /* @__PURE__ */ he({
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
    return (a, l) => (n(), i("div", {
      class: De(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        $(d(e.label) + " ", 1),
        e.required ? (n(), i("span", rg, "*")) : y("", !0)
      ], 8, ig)) : y("", !0),
      t("div", cg, [
        ot(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", ug, d(e.error), 1)) : e.hint ? (n(), i("span", dg, d(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), Pt = /* @__PURE__ */ _e(mg, [["__scopeId", "data-v-9a1cf296"]]), fg = { class: "contract-meta" }, vg = { class: "contract-summary" }, pg = { class: "summary-pill" }, gg = { class: "summary-pill" }, hg = { class: "summary-pill" }, yg = { class: "contract-meta-grid" }, wg = { class: "contract-layout" }, _g = { class: "contract-column" }, kg = { class: "section-header" }, bg = {
  key: 0,
  class: "empty-message"
}, $g = { class: "item-card-header" }, Cg = { class: "item-card-title" }, xg = { class: "item-grid" }, Sg = { class: "contract-column" }, Ig = { class: "section-header" }, Eg = {
  key: 0,
  class: "empty-message"
}, Tg = { class: "item-card-header" }, Pg = { class: "item-card-title" }, Rg = { class: "item-grid" }, Mg = /* @__PURE__ */ he({
  __name: "WorkflowContractModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowContract: l, saveWorkflowContract: r, deleteWorkflowContract: c } = it(), u = k(!1), m = k(!1), f = k(!1), v = k(null), p = k(null), _ = k(null), h = [
      "string",
      "integer",
      "number",
      "boolean",
      "enum",
      "image",
      "video",
      "audio",
      "file"
    ], w = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], x = N(() => {
      var Y;
      return ((Y = p.value) == null ? void 0 : Y.contract_summary.has_contract) === !0;
    }), b = N(() => {
      if (!_.value)
        return { inputs: [], outputs: [] };
      const Y = _.value.default_contract || "default";
      return _.value.contracts[Y] || (_.value.contracts[Y] = { inputs: [], outputs: [] }), _.value.contracts[Y];
    }), S = N(() => {
      var K;
      const Y = ((K = p.value) == null ? void 0 : K.contract_summary.status) ?? "none";
      return Y === "valid" ? "Valid Contract" : Y === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function A(Y) {
      return Y ? JSON.parse(JSON.stringify(Y)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function T(Y) {
      if (!_.value) return;
      const K = Y.trim() || "default";
      _.value.default_contract = K, _.value.contracts[K] || (_.value.contracts[K] = { inputs: [], outputs: [] });
    }
    function P() {
      b.value.inputs.push({
        name: "",
        type: "string",
        node_id: "",
        required: !0,
        default: ""
      });
    }
    function M() {
      b.value.outputs.push({
        name: "",
        type: "image",
        node_id: "",
        selector: "primary"
      });
    }
    function O(Y) {
      b.value.inputs.splice(Y, 1);
    }
    function F(Y) {
      b.value.outputs.splice(Y, 1);
    }
    async function I() {
      u.value = !0, v.value = null;
      try {
        p.value = await l(o.workflowName), _.value = A(p.value.execution_contract);
      } catch (Y) {
        v.value = Y instanceof Error ? Y.message : "Failed to load workflow contract";
      } finally {
        u.value = !1;
      }
    }
    async function L() {
      if (_.value) {
        m.value = !0, v.value = null;
        try {
          p.value = await r(o.workflowName, _.value), _.value = A(p.value.execution_contract), a("refresh");
        } catch (Y) {
          v.value = Y instanceof Error ? Y.message : "Failed to save workflow contract";
        } finally {
          m.value = !1;
        }
      }
    }
    async function te() {
      f.value = !0, v.value = null;
      try {
        await c(o.workflowName), await I(), a("refresh");
      } catch (Y) {
        v.value = Y instanceof Error ? Y.message : "Failed to delete workflow contract";
      } finally {
        f.value = !1;
      }
    }
    return at(I), (Y, K) => (n(), D($t, {
      title: `WORKFLOW CONTRACT: ${e.workflowName}`,
      size: "xl",
      loading: u.value,
      error: v.value || void 0,
      "fixed-height": "",
      onClose: K[5] || (K[5] = (H) => a("close"))
    }, {
      body: g(() => [
        _.value ? (n(), i(j, { key: 0 }, [
          t("section", fg, [
            t("div", vg, [
              t("span", pg, d(S.value), 1),
              t("span", gg, d(b.value.inputs.length) + " input" + d(b.value.inputs.length === 1 ? "" : "s"), 1),
              t("span", hg, d(b.value.outputs.length) + " output" + d(b.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            t("div", yg, [
              C(Pt, { label: "Default Contract" }, {
                default: g(() => [
                  C(vt, {
                    "model-value": _.value.default_contract,
                    "full-width": "",
                    "onUpdate:modelValue": T
                  }, null, 8, ["model-value"])
                ]),
                _: 1
              }),
              C(Pt, { label: "Display Name" }, {
                default: g(() => [
                  C(vt, {
                    modelValue: b.value.display_name,
                    "onUpdate:modelValue": K[0] || (K[0] = (H) => b.value.display_name = H),
                    "full-width": ""
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            C(Pt, { label: "Description" }, {
              default: g(() => [
                C(qn, {
                  modelValue: b.value.description,
                  "onUpdate:modelValue": K[1] || (K[1] = (H) => b.value.description = H),
                  rows: 2,
                  placeholder: "Optional description for this contract"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          t("section", wg, [
            t("div", _g, [
              t("div", kg, [
                C(ro, { variant: "section" }, {
                  default: g(() => [...K[6] || (K[6] = [
                    $("INPUTS", -1)
                  ])]),
                  _: 1
                }),
                C(Me, {
                  size: "sm",
                  variant: "secondary",
                  onClick: K[2] || (K[2] = (H) => P())
                }, {
                  default: g(() => [...K[7] || (K[7] = [
                    $(" Add Input ", -1)
                  ])]),
                  _: 1
                })
              ]),
              b.value.inputs.length ? y("", !0) : (n(), i("div", bg, " No inputs configured. ")),
              (n(!0), i(j, null, ve(b.value.inputs, (H, B) => (n(), i("div", {
                key: `input-${B}`,
                class: "item-card"
              }, [
                t("div", $g, [
                  t("div", Cg, "Input " + d(B + 1), 1),
                  C(Me, {
                    size: "sm",
                    variant: "ghost",
                    onClick: (W) => O(B)
                  }, {
                    default: g(() => [...K[8] || (K[8] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                t("div", xg, [
                  C(Pt, { label: "Name" }, {
                    default: g(() => [
                      C(vt, {
                        modelValue: H.name,
                        "onUpdate:modelValue": (W) => H.name = W,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Pt, { label: "Display Name" }, {
                    default: g(() => [
                      C(vt, {
                        modelValue: H.display_name,
                        "onUpdate:modelValue": (W) => H.display_name = W,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Pt, { label: "Type" }, {
                    default: g(() => [
                      C(On, {
                        "model-value": H.type,
                        options: h,
                        "full-width": "",
                        "onUpdate:modelValue": (W) => H.type = W
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Pt, { label: "Required" }, {
                    default: g(() => [
                      C(On, {
                        "model-value": H.required ? "true" : "false",
                        options: w,
                        "full-width": "",
                        "onUpdate:modelValue": (W) => H.required = W === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Pt, { label: "Node ID" }, {
                    default: g(() => [
                      C(vt, {
                        modelValue: H.node_id,
                        "onUpdate:modelValue": (W) => H.node_id = W,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Pt, { label: "Widget Index" }, {
                    default: g(() => [
                      C(vt, {
                        modelValue: H.widget_idx,
                        "onUpdate:modelValue": (W) => H.widget_idx = W,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Pt, { label: "Field Key" }, {
                    default: g(() => [
                      C(vt, {
                        modelValue: H.field_key,
                        "onUpdate:modelValue": (W) => H.field_key = W,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Pt, { label: "Default" }, {
                    default: g(() => [
                      C(vt, {
                        modelValue: H.default,
                        "onUpdate:modelValue": (W) => H.default = W,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])
              ]))), 128))
            ]),
            t("div", Sg, [
              t("div", Ig, [
                C(ro, { variant: "section" }, {
                  default: g(() => [...K[9] || (K[9] = [
                    $("OUTPUTS", -1)
                  ])]),
                  _: 1
                }),
                C(Me, {
                  size: "sm",
                  variant: "secondary",
                  onClick: K[3] || (K[3] = (H) => M())
                }, {
                  default: g(() => [...K[10] || (K[10] = [
                    $(" Add Output ", -1)
                  ])]),
                  _: 1
                })
              ]),
              b.value.outputs.length ? y("", !0) : (n(), i("div", Eg, " No outputs configured. ")),
              (n(!0), i(j, null, ve(b.value.outputs, (H, B) => (n(), i("div", {
                key: `output-${B}`,
                class: "item-card"
              }, [
                t("div", Tg, [
                  t("div", Pg, "Output " + d(B + 1), 1),
                  C(Me, {
                    size: "sm",
                    variant: "ghost",
                    onClick: (W) => F(B)
                  }, {
                    default: g(() => [...K[11] || (K[11] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                t("div", Rg, [
                  C(Pt, { label: "Name" }, {
                    default: g(() => [
                      C(vt, {
                        modelValue: H.name,
                        "onUpdate:modelValue": (W) => H.name = W,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Pt, { label: "Display Name" }, {
                    default: g(() => [
                      C(vt, {
                        modelValue: H.display_name,
                        "onUpdate:modelValue": (W) => H.display_name = W,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Pt, { label: "Type" }, {
                    default: g(() => [
                      C(On, {
                        "model-value": H.type,
                        options: h,
                        "full-width": "",
                        "onUpdate:modelValue": (W) => H.type = W
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Pt, { label: "Node ID" }, {
                    default: g(() => [
                      C(vt, {
                        modelValue: H.node_id,
                        "onUpdate:modelValue": (W) => H.node_id = W,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  C(Pt, { label: "Selector" }, {
                    default: g(() => [
                      C(vt, {
                        modelValue: H.selector,
                        "onUpdate:modelValue": (W) => H.selector = W,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])
              ]))), 128))
            ])
          ])
        ], 64)) : y("", !0)
      ]),
      footer: g(() => [
        C(Me, {
          variant: "secondary",
          onClick: K[4] || (K[4] = (H) => a("close"))
        }, {
          default: g(() => [...K[12] || (K[12] = [
            $(" Close ", -1)
          ])]),
          _: 1
        }),
        C(Me, {
          variant: "danger",
          disabled: !x.value,
          loading: f.value,
          onClick: te
        }, {
          default: g(() => [...K[13] || (K[13] = [
            $(" Delete Contract ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"]),
        C(Me, {
          variant: "primary",
          loading: m.value,
          onClick: L
        }, {
          default: g(() => [...K[14] || (K[14] = [
            $(" Save Contract ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Dg = /* @__PURE__ */ _e(Mg, [["__scopeId", "data-v-cc5bec81"]]), lt = Js({
  items: [],
  status: "idle"
});
let Cs = null;
function Vr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Ta(e) {
  return lt.items.find((s) => s.id === e);
}
async function So() {
  if (lt.status === "downloading") return;
  const e = lt.items.find((s) => s.status === "queued");
  if (!e) {
    lt.status = "idle";
    return;
  }
  lt.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Lg(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    lt.status = "idle", So();
  }
}
async function Lg(e) {
  return new Promise((s, o) => {
    Cs && (Cs.close(), Cs = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    Cs = l;
    let r = Date.now(), c = 0, u = Date.now(), m = !1;
    const f = 2e3, v = window.setInterval(() => {
      m || Date.now() - u > f && (e.speed = 0, e.eta = 0);
    }, 250), p = () => {
      window.clearInterval(v);
    };
    l.onmessage = (_) => {
      try {
        const h = JSON.parse(_.data);
        switch (h.type) {
          case "progress":
            e.downloaded = h.downloaded || 0, e.size = h.total || e.size, u = Date.now();
            const w = u, x = (w - r) / 1e3, b = e.downloaded - c;
            if (b > 0 && x > 0)
              if (e.speed = b / x, r = w, c = e.downloaded, e.speed > 0 && e.size > 0) {
                const S = e.size - e.downloaded;
                e.eta = S / e.speed;
              } else
                e.eta = 0;
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            m = !0, p(), l.close(), Cs = null, s();
            break;
          case "error":
            m = !0, p(), l.close(), Cs = null, o(new Error(h.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      p(), l.close(), Cs = null, m || o(new Error("Connection lost"));
    };
  });
}
async function Ug() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (lt.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const a = {
        id: Vr(),
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
function Oo() {
  function e(b) {
    for (const S of b) {
      if (lt.items.some(
        (P) => P.url === S.url && P.targetPath === S.targetPath && ["queued", "downloading", "paused", "completed"].includes(P.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${S.filename}`);
        continue;
      }
      const T = {
        id: Vr(),
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
    lt.status === "idle" && So();
  }
  async function s(b) {
    const S = Ta(b);
    if (S) {
      if (S.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(S.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Cs && (Cs.close(), Cs = null), S.status = "failed", S.error = "Cancelled by user", lt.status = "idle", So();
      } else if (S.status === "queued") {
        const A = lt.items.findIndex((T) => T.id === b);
        A >= 0 && lt.items.splice(A, 1);
      }
    }
  }
  function o(b) {
    const S = Ta(b);
    !S || S.status !== "failed" || (S.status = "queued", S.error = void 0, S.progress = 0, S.downloaded = 0, lt.status === "idle" && So());
  }
  function a(b) {
    const S = Ta(b);
    !S || S.status !== "paused" || (S.status = "queued", lt.status === "idle" && So());
  }
  function l() {
    const b = lt.items.filter((S) => S.status === "paused");
    for (const S of b)
      S.status = "queued";
    lt.status === "idle" && So();
  }
  function r(b) {
    const S = lt.items.findIndex((A) => A.id === b);
    S >= 0 && ["completed", "failed", "paused"].includes(lt.items[S].status) && lt.items.splice(S, 1);
  }
  function c() {
    lt.items = lt.items.filter((b) => b.status !== "completed");
  }
  function u() {
    lt.items = lt.items.filter((b) => b.status !== "failed");
  }
  const m = N(
    () => lt.items.find((b) => b.status === "downloading")
  ), f = N(
    () => lt.items.filter((b) => b.status === "queued")
  ), v = N(
    () => lt.items.filter((b) => b.status === "completed")
  ), p = N(
    () => lt.items.filter((b) => b.status === "failed")
  ), _ = N(
    () => lt.items.filter((b) => b.status === "paused")
  ), h = N(() => lt.items.length > 0), w = N(
    () => lt.items.filter((b) => b.status === "queued" || b.status === "downloading").length
  ), x = N(
    () => lt.items.some((b) => b.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: zn(lt),
    // Computed
    currentDownload: m,
    queuedItems: f,
    completedItems: v,
    failedItems: p,
    pausedItems: _,
    hasItems: h,
    activeCount: w,
    hasPaused: x,
    // Actions
    addToQueue: e,
    cancelDownload: s,
    retryDownload: o,
    resumeDownload: a,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: c,
    clearFailed: u,
    loadPendingDownloads: Ug
  };
}
function Fr() {
  const e = k(null), s = k(null), o = k([]), a = k([]), l = k(!1), r = k(null);
  async function c(A, T) {
    var M;
    if (!((M = window.app) != null && M.api))
      throw new Error("ComfyUI API not available");
    const P = await window.app.api.fetchApi(A, T);
    if (!P.ok) {
      const O = await P.json().catch(() => ({})), F = O.error || O.message || `Request failed: ${P.status}`;
      throw new Error(F);
    }
    return P.json();
  }
  async function u(A) {
    l.value = !0, r.value = null;
    try {
      let T;
      return xo() || (T = await c(
        `/v2/comfygit/workflow/${A}/analyze`,
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
  async function m(A, T, P, M) {
    l.value = !0, r.value = null;
    try {
      let O;
      if (!xo()) {
        const F = Object.fromEntries(T), I = Object.fromEntries(P), L = M ? Array.from(M) : [];
        O = await c(
          `/v2/comfygit/workflow/${A}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: F,
              model_choices: I,
              skipped_packages: L
            })
          }
        );
      }
      return s.value = O, O;
    } catch (O) {
      const F = O instanceof Error ? O.message : "Unknown error occurred";
      throw r.value = F, O;
    } finally {
      l.value = !1;
    }
  }
  async function f(A, T = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return xo() || (P = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: A, limit: T })
        }
      )), o.value = P.results, P.results;
    } catch (P) {
      const M = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = M, P;
    } finally {
      l.value = !1;
    }
  }
  async function v(A, T = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return xo() || (P = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: A, limit: T })
        }
      )), a.value = P.results, P.results;
    } catch (P) {
      const M = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = M, P;
    } finally {
      l.value = !1;
    }
  }
  const p = Js({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function _() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.nodesInstalled = [], p.installError = void 0, p.needsRestart = void 0, p.error = void 0, p.nodeInstallProgress = void 0;
  }
  async function h(A) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return xo(), await w(A);
    } catch (T) {
      const P = T instanceof Error ? T.message : "Failed to install nodes";
      throw p.installError = P, T;
    }
  }
  async function w(A) {
    var P;
    const T = await c(
      `/v2/comfygit/workflow/${A}/install`,
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
      const M = new Map(((P = T.failed) == null ? void 0 : P.map((O) => [O.node_id, O.error])) || []);
      for (let O = 0; O < p.nodesToInstall.length; O++) {
        const F = p.nodesToInstall[O], I = M.get(F);
        p.nodeInstallProgress.completedNodes.push({
          node_id: F,
          success: !I,
          error: I
        });
      }
    }
    return p.nodesInstalled = T.nodes_installed, p.needsRestart = T.nodes_installed.length > 0, T.failed && T.failed.length > 0 && (p.installError = `${T.failed.length} package(s) failed to install`), T;
  }
  async function x(A, T, P) {
    _(), p.phase = "resolving", r.value = null;
    const M = Object.fromEntries(T), O = Object.fromEntries(P);
    try {
      const F = await fetch(`/v2/comfygit/workflow/${A}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: M,
          model_choices: O
        })
      });
      if (!F.ok)
        throw new Error(`Request failed: ${F.status}`);
      if (!F.body)
        throw new Error("No response body");
      const I = F.body.getReader(), L = new TextDecoder();
      let te = "";
      for (; ; ) {
        const { done: Y, value: K } = await I.read();
        if (Y) break;
        te += L.decode(K, { stream: !0 });
        const H = te.split(`

`);
        te = H.pop() || "";
        for (const B of H) {
          if (!B.trim()) continue;
          const W = B.split(`
`);
          let se = "", Ue = "";
          for (const ee of W)
            ee.startsWith("event: ") ? se = ee.slice(7) : ee.startsWith("data: ") && (Ue = ee.slice(6));
          if (Ue)
            try {
              const ee = JSON.parse(Ue);
              b(se, ee);
            } catch (ee) {
              console.warn("Failed to parse SSE event:", ee);
            }
        }
      }
    } catch (F) {
      const I = F instanceof Error ? F.message : "Unknown error occurred";
      throw r.value = I, p.error = I, p.phase = "error", F;
    }
  }
  function b(A, T) {
    switch (A) {
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
  function S(A, T) {
    const { addToQueue: P } = Oo(), M = T.filter((O) => O.url && O.target_path).map((O) => ({
      workflow: A,
      filename: O.filename,
      url: O.url,
      targetPath: O.target_path,
      size: O.size || 0,
      type: "model"
    }));
    return M.length > 0 && P(M), M.length;
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
    applyResolutionWithProgress: x,
    installNodes: h,
    searchNodes: f,
    searchModels: v,
    resetProgress: _,
    queueModelDownloads: S
  };
}
const Ng = { class: "resolution-stepper" }, Og = { class: "stepper-header" }, Ag = ["onClick"], zg = {
  key: 0,
  class: "step-icon"
}, Vg = {
  key: 1,
  class: "step-number"
}, Fg = { class: "step-label" }, Bg = {
  key: 0,
  class: "step-connector"
}, Wg = { class: "stepper-content" }, Gg = /* @__PURE__ */ he({
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
    return (f, v) => (n(), i("div", Ng, [
      t("div", Og, [
        (n(!0), i(j, null, ve(e.steps, (p, _) => (n(), i("div", {
          key: p.id,
          class: De(["step", {
            active: e.currentStep === p.id,
            completed: l(p.id),
            "in-progress": r(p.id),
            disabled: u(p.id)
          }]),
          onClick: (h) => m(p.id)
        }, [
          t("div", {
            class: De(["step-indicator", c(p.id)])
          }, [
            l(p.id) ? (n(), i("span", zg, "✓")) : (n(), i("span", Vg, d(_ + 1), 1))
          ], 2),
          t("div", Fg, d(p.label), 1),
          _ < e.steps.length - 1 ? (n(), i("div", Bg)) : y("", !0)
        ], 10, Ag))), 128))
      ]),
      t("div", Wg, [
        ot(f.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), jg = /* @__PURE__ */ _e(Gg, [["__scopeId", "data-v-2a7b3af8"]]), Hg = /* @__PURE__ */ he({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = N(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), a = N(() => `confidence-${o.value}`), l = N(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, c) => (n(), i("span", {
      class: De(["confidence-badge", a.value, e.size])
    }, d(l.value), 3));
  }
}), Yn = /* @__PURE__ */ _e(Hg, [["__scopeId", "data-v-17ec4b80"]]), Kg = { class: "node-info" }, qg = { class: "node-info-text" }, Yg = { class: "item-body" }, Jg = {
  key: 0,
  class: "resolved-state"
}, Qg = {
  key: 1,
  class: "multiple-options"
}, Xg = {
  key: 0,
  class: "installed-packs-section"
}, Zg = { class: "installed-packs-list" }, eh = ["onClick"], th = { class: "installed-pack-name" }, sh = { class: "installed-pack-source" }, oh = { class: "options-list" }, nh = ["onClick"], ah = ["name", "value", "checked", "onChange"], lh = { class: "option-content" }, ih = { class: "option-header" }, rh = { class: "option-package-id" }, ch = {
  key: 0,
  class: "option-title"
}, uh = { class: "option-meta" }, dh = {
  key: 0,
  class: "installed-badge"
}, mh = { class: "action-buttons" }, fh = {
  key: 2,
  class: "unresolved"
}, vh = {
  key: 0,
  class: "installed-packs-section"
}, ph = { class: "installed-packs-list" }, gh = ["onClick"], hh = { class: "installed-pack-name" }, yh = { class: "installed-pack-source" }, wh = {
  key: 1,
  class: "searching-state"
}, _h = { class: "options-list" }, kh = ["onClick"], bh = ["name", "value"], $h = { class: "option-content" }, Ch = { class: "option-header" }, xh = { class: "option-package-id" }, Sh = {
  key: 0,
  class: "option-description"
}, Ih = { class: "option-meta" }, Eh = {
  key: 0,
  class: "installed-badge"
}, Th = {
  key: 3,
  class: "unresolved-message"
}, Ph = { class: "action-buttons" }, Rh = /* @__PURE__ */ he({
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
    const r = N(() => !!o.choice);
    N(() => {
      var v;
      return (v = o.choice) == null ? void 0 : v.action;
    }), N(() => {
      var v;
      return (v = o.choice) == null ? void 0 : v.package_id;
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
      class: De(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      t("div", Kg, [
        t("span", qg, [
          p[7] || (p[7] = $("Node type: ", -1)),
          t("code", null, d(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: De(["status-badge", u.value])
        }, d(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Yg, [
        r.value ? (n(), i("div", Jg, [
          C(Me, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (_) => a("clear-choice"))
          }, {
            default: g(() => [...p[8] || (p[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", Qg, [
          c.value.length > 0 ? (n(), i("div", Xg, [
            p[9] || (p[9] = t("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            t("div", Zg, [
              (n(!0), i(j, null, ve(c.value, (_) => (n(), i("button", {
                key: _.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (h) => a("installed-pack-selected", _.package_id)
              }, [
                t("span", th, d(_.package_id), 1),
                t("span", sh, d(f(_.source)), 1)
              ], 8, eh))), 128))
            ])
          ])) : y("", !0),
          p[13] || (p[13] = t("p", { class: "options-prompt" }, "Potential matches:", -1)),
          t("div", oh, [
            (n(!0), i(j, null, ve(e.options, (_, h) => (n(), i("label", {
              key: _.package_id,
              class: De(["option-card", { selected: e.selectedOptionIndex === h }]),
              onClick: (w) => m(h)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: h,
                checked: e.selectedOptionIndex === h,
                onChange: (w) => m(h)
              }, null, 40, ah),
              t("div", lh, [
                t("div", ih, [
                  t("span", rh, d(_.package_id), 1),
                  C(Yn, {
                    confidence: _.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                _.title && _.title !== _.package_id ? (n(), i("div", ch, d(_.title), 1)) : y("", !0),
                t("div", uh, [
                  _.is_installed ? (n(), i("span", dh, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, nh))), 128))
          ]),
          t("div", mh, [
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (_) => a("search"))
            }, {
              default: g(() => [...p[10] || (p[10] = [
                $(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (_) => a("manual-entry"))
            }, {
              default: g(() => [...p[11] || (p[11] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (_) => a("mark-optional"))
            }, {
              default: g(() => [...p[12] || (p[12] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", fh, [
          c.value.length > 0 ? (n(), i("div", vh, [
            p[14] || (p[14] = t("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            t("div", ph, [
              (n(!0), i(j, null, ve(c.value, (_) => (n(), i("button", {
                key: _.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (h) => a("installed-pack-selected", _.package_id)
              }, [
                t("span", hh, d(_.package_id), 1),
                t("span", yh, d(f(_.source)), 1)
              ], 8, gh))), 128))
            ])
          ])) : y("", !0),
          e.isSearching ? (n(), i("div", wh, [...p[15] || (p[15] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (n(), i(j, { key: 2 }, [
            p[16] || (p[16] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", _h, [
              (n(!0), i(j, null, ve(e.searchResults.slice(0, 5), (_, h) => (n(), i("label", {
                key: _.package_id,
                class: "option-card",
                onClick: (w) => a("search-result-selected", _)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: h
                }, null, 8, bh),
                t("div", $h, [
                  t("div", Ch, [
                    t("span", xh, d(_.package_id), 1),
                    C(Yn, {
                      confidence: _.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  _.description ? (n(), i("div", Sh, d(l(_.description)), 1)) : y("", !0),
                  t("div", Ih, [
                    _.is_installed ? (n(), i("span", Eh, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, kh))), 128))
            ])
          ], 64)) : (n(), i("div", Th, [...p[17] || (p[17] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", Ph, [
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: p[4] || (p[4] = (_) => a("search"))
            }, {
              default: g(() => {
                var _;
                return [
                  $(d((_ = e.searchResults) != null && _.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: p[5] || (p[5] = (_) => a("manual-entry"))
            }, {
              default: g(() => [...p[18] || (p[18] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: p[6] || (p[6] = (_) => a("mark-optional"))
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
}), Mh = /* @__PURE__ */ _e(Rh, [["__scopeId", "data-v-fb0bbf03"]]), Dh = { class: "item-navigator" }, Lh = { class: "nav-item-info" }, Uh = ["title"], Nh = { class: "nav-controls" }, Oh = { class: "nav-arrows" }, Ah = ["disabled"], zh = ["disabled"], Vh = { class: "nav-position" }, Fh = /* @__PURE__ */ he({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", Dh, [
      t("div", Lh, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, d(e.itemName), 9, Uh)
      ]),
      t("div", Nh, [
        t("div", Oh, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, Ah),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, zh)
        ]),
        t("span", Vh, d(e.currentIndex + 1) + "/" + d(e.totalItems), 1)
      ])
    ]));
  }
}), Br = /* @__PURE__ */ _e(Fh, [["__scopeId", "data-v-74af7920"]]), Bh = { class: "node-resolution-step" }, Wh = {
  key: 0,
  class: "auto-resolved-section"
}, Gh = { class: "section-header" }, jh = { class: "stat-badge" }, Hh = { class: "resolved-packages-list" }, Kh = { class: "package-info" }, qh = { class: "package-id" }, Yh = { class: "node-count" }, Jh = { class: "package-actions" }, Qh = {
  key: 0,
  class: "status-badge install"
}, Xh = {
  key: 1,
  class: "status-badge skip"
}, Zh = ["onClick"], ey = {
  key: 1,
  class: "section-divider"
}, ty = { class: "step-header" }, sy = { class: "stat-badge" }, oy = {
  key: 1,
  class: "step-body"
}, ny = {
  key: 3,
  class: "empty-state"
}, ay = { class: "node-modal-body" }, ly = { class: "node-search-results-container" }, iy = {
  key: 0,
  class: "node-search-results"
}, ry = ["onClick"], cy = { class: "node-result-header" }, uy = { class: "node-result-package-id" }, dy = {
  key: 0,
  class: "node-result-description"
}, my = {
  key: 1,
  class: "node-empty-state"
}, fy = {
  key: 2,
  class: "node-empty-state"
}, vy = {
  key: 3,
  class: "node-empty-state"
}, py = { class: "node-manual-entry-modal" }, gy = { class: "node-modal-body" }, hy = { class: "node-modal-actions" }, yy = /* @__PURE__ */ he({
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
    const o = e, a = s, { searchNodes: l } = Fr(), r = k(0), c = k(!1), u = k(!1), m = k(""), f = k(""), v = k([]), p = k(!1), _ = k(/* @__PURE__ */ new Map()), h = k(/* @__PURE__ */ new Set()), w = k(!1);
    function x() {
      w.value && ue(), w.value = !1;
    }
    const b = N(() => o.nodes[r.value]), S = N(() => o.nodes.filter((V) => o.nodeChoices.has(V.node_type)).length), A = N(() => b.value ? _.value.get(b.value.node_type) || [] : []), T = N(() => b.value ? h.value.has(b.value.node_type) : !1);
    xt(b, async (V) => {
      var U;
      V && ((U = V.options) != null && U.length || _.value.has(V.node_type) || h.value.has(V.node_type) || o.nodeChoices.has(V.node_type) || await P(V.node_type));
    }, { immediate: !0 });
    async function P(V) {
      h.value.add(V);
      try {
        const U = await l(V, 5);
        _.value.set(V, U);
      } catch {
        _.value.set(V, []);
      } finally {
        h.value.delete(V);
      }
    }
    const M = N(() => o.autoResolvedPackages.filter((V) => !o.skippedPackages.has(V.package_id)).length);
    function O(V) {
      return o.skippedPackages.has(V);
    }
    function F(V) {
      a("package-skip", V);
    }
    const I = N(() => {
      var U;
      if (!b.value) return "not-found";
      const V = o.nodeChoices.get(b.value.node_type);
      if (V)
        switch (V.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (U = b.value.options) != null && U.length ? "ambiguous" : "not-found";
    }), L = N(() => {
      var U;
      if (!b.value) return;
      const V = o.nodeChoices.get(b.value.node_type);
      if (V)
        switch (V.action) {
          case "install":
            return V.package_id ? `→ ${V.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (U = b.value.options) != null && U.length ? `${b.value.options.length} matches` : "Not Found";
    });
    function te(V) {
      V >= 0 && V < o.nodes.length && (r.value = V);
    }
    function Y() {
      var V;
      for (let U = r.value + 1; U < o.nodes.length; U++) {
        const oe = o.nodes[U];
        if (!((V = o.nodeChoices) != null && V.has(oe.node_type))) {
          te(U);
          return;
        }
      }
    }
    function K() {
      b.value && (a("mark-optional", b.value.node_type), Rt(() => Y()));
    }
    function H() {
      b.value && (a("skip", b.value.node_type), Rt(() => Y()));
    }
    function B(V) {
      b.value && (a("option-selected", b.value.node_type, V), Rt(() => Y()));
    }
    function W() {
      b.value && a("clear-choice", b.value.node_type);
    }
    function se() {
      b.value && (m.value = b.value.node_type, v.value = A.value, c.value = !0, Ee(m.value));
    }
    function Ue() {
      f.value = "", u.value = !0;
    }
    function ee(V) {
      b.value && (a("manual-entry", b.value.node_type, V), Rt(() => Y()));
    }
    function ue() {
      c.value = !1, m.value = "", v.value = [];
    }
    function ne() {
      u.value = !1, f.value = "";
    }
    let ie = null;
    function ke() {
      ie && clearTimeout(ie), ie = setTimeout(() => {
        Ee(m.value);
      }, 300);
    }
    async function Ee(V) {
      if (!V.trim()) {
        v.value = [];
        return;
      }
      p.value = !0;
      try {
        v.value = await l(V, 10);
      } catch {
        v.value = [];
      } finally {
        p.value = !1;
      }
    }
    function we(V) {
      b.value && (a("manual-entry", b.value.node_type, V.package_id), ue(), Rt(() => Y()));
    }
    function G(V) {
      b.value && (a("manual-entry", b.value.node_type, V.package_id), Rt(() => Y()));
    }
    function ae() {
      !b.value || !f.value.trim() || (a("manual-entry", b.value.node_type, f.value.trim()), ne(), Rt(() => Y()));
    }
    return (V, U) => {
      var oe, Ae;
      return n(), i("div", Bh, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", Wh, [
          t("div", Gh, [
            U[6] || (U[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", jh, d(M.value) + "/" + d(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", Hh, [
            (n(!0), i(j, null, ve(e.autoResolvedPackages, (ze) => (n(), i("div", {
              key: ze.package_id,
              class: "resolved-package-item"
            }, [
              t("div", Kh, [
                t("code", qh, d(ze.package_id), 1),
                t("span", Yh, d(ze.node_types_count) + " node type" + d(ze.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", Jh, [
                O(ze.package_id) ? (n(), i("span", Xh, " SKIPPED ")) : (n(), i("span", Qh, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (z) => F(ze.package_id)
                }, d(O(ze.package_id) ? "Include" : "Skip"), 9, Zh)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", ey)) : y("", !0),
        e.nodes.length > 0 ? (n(), i(j, { key: 2 }, [
          t("div", ty, [
            U[7] || (U[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", sy, d(S.value) + "/" + d(e.nodes.length) + " resolved", 1)
          ]),
          b.value ? (n(), D(Br, {
            key: 0,
            "item-name": b.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: U[0] || (U[0] = (ze) => te(r.value - 1)),
            onNext: U[1] || (U[1] = (ze) => te(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          b.value ? (n(), i("div", oy, [
            C(Mh, {
              "node-type": b.value.node_type,
              "has-multiple-options": !!((oe = b.value.options) != null && oe.length),
              options: b.value.options,
              choice: (Ae = e.nodeChoices) == null ? void 0 : Ae.get(b.value.node_type),
              status: I.value,
              "status-label": L.value,
              "search-results": A.value,
              "is-searching": T.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: K,
              onSkip: H,
              onManualEntry: Ue,
              onSearch: se,
              onOptionSelected: B,
              onClearChoice: W,
              onSearchResultSelected: G,
              onInstalledPackSelected: ee
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", ny, [...U[8] || (U[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (n(), D(Nt, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: U[4] || (U[4] = bt((ze) => w.value = !0, ["self"])),
            onMouseup: bt(x, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: U[3] || (U[3] = (ze) => w.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                U[9] || (U[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ue
                }, "✕")
              ]),
              t("div", ay, [
                C(vt, {
                  modelValue: m.value,
                  "onUpdate:modelValue": U[2] || (U[2] = (ze) => m.value = ze),
                  placeholder: "Search by node type, package name...",
                  onInput: ke
                }, null, 8, ["modelValue"]),
                t("div", ly, [
                  v.value.length > 0 ? (n(), i("div", iy, [
                    (n(!0), i(j, null, ve(v.value, (ze) => (n(), i("div", {
                      key: ze.package_id,
                      class: "node-search-result-item",
                      onClick: (z) => we(ze)
                    }, [
                      t("div", cy, [
                        t("code", uy, d(ze.package_id), 1),
                        ze.match_confidence ? (n(), D(Yn, {
                          key: 0,
                          confidence: ze.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      ze.description ? (n(), i("div", dy, d(ze.description), 1)) : y("", !0)
                    ], 8, ry))), 128))
                  ])) : p.value ? (n(), i("div", my, "Searching...")) : m.value ? (n(), i("div", fy, 'No packages found matching "' + d(m.value) + '"', 1)) : (n(), i("div", vy, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (n(), D(Nt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: bt(ne, ["self"])
          }, [
            t("div", py, [
              t("div", { class: "node-modal-header" }, [
                U[10] || (U[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ne
                }, "✕")
              ]),
              t("div", gy, [
                C(vt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": U[5] || (U[5] = (ze) => f.value = ze),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", hy, [
                  C(Me, {
                    variant: "secondary",
                    onClick: ne
                  }, {
                    default: g(() => [...U[11] || (U[11] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Me, {
                    variant: "primary",
                    disabled: !f.value.trim(),
                    onClick: ae
                  }, {
                    default: g(() => [...U[12] || (U[12] = [
                      $(" Add Package ", -1)
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
}), wy = /* @__PURE__ */ _e(yy, [["__scopeId", "data-v-94c6a438"]]), _y = { class: "node-info" }, ky = { class: "node-info-text" }, by = { class: "item-body" }, $y = {
  key: 0,
  class: "resolved-state"
}, Cy = {
  key: 1,
  class: "multiple-options"
}, xy = { class: "options-list" }, Sy = ["onClick"], Iy = ["name", "value", "checked", "onChange"], Ey = { class: "option-content" }, Ty = { class: "option-header" }, Py = { class: "option-filename" }, Ry = { class: "option-meta" }, My = { class: "option-size" }, Dy = { class: "option-category" }, Ly = { class: "option-path" }, Uy = { class: "action-buttons" }, Ny = {
  key: 2,
  class: "unresolved"
}, Oy = { class: "action-buttons" }, Ay = /* @__PURE__ */ he({
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
    const o = e, a = s, l = N(() => !!o.choice);
    N(() => {
      var m;
      return (m = o.choice) == null ? void 0 : m.action;
    }), N(() => {
      var m, f;
      return ((f = (m = o.choice) == null ? void 0 : m.selected_model) == null ? void 0 : f.filename) || "selected";
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
    function c(m) {
      a("option-selected", m);
    }
    function u(m) {
      if (!m) return "Unknown";
      const f = m / (1024 * 1024 * 1024);
      return f >= 1 ? `${f.toFixed(2)} GB` : `${(m / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (m, f) => (n(), i("div", {
      class: De(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", _y, [
        t("span", ky, [
          f[7] || (f[7] = $("Used by: ", -1)),
          t("code", null, d(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: De(["status-badge", r.value])
        }, d(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", by, [
        l.value ? (n(), i("div", $y, [
          C(Me, {
            variant: "ghost",
            size: "sm",
            onClick: f[0] || (f[0] = (v) => a("clear-choice"))
          }, {
            default: g(() => [...f[8] || (f[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", Cy, [
          f[12] || (f[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", xy, [
            (n(!0), i(j, null, ve(e.options, (v, p) => (n(), i("label", {
              key: v.model.hash,
              class: De(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (_) => c(p)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (_) => c(p)
              }, null, 40, Iy),
              t("div", Ey, [
                t("div", Ty, [
                  t("span", Py, d(v.model.filename), 1),
                  C(Yn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", Ry, [
                  t("span", My, d(u(v.model.size)), 1),
                  t("span", Dy, d(v.model.category), 1)
                ]),
                t("div", Ly, d(v.model.relative_path), 1)
              ])
            ], 10, Sy))), 128))
          ]),
          t("div", Uy, [
            C(Me, {
              variant: "ghost",
              size: "sm",
              onClick: f[1] || (f[1] = (v) => a("search"))
            }, {
              default: g(() => [...f[9] || (f[9] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: "ghost",
              size: "sm",
              onClick: f[2] || (f[2] = (v) => a("download-url"))
            }, {
              default: g(() => [...f[10] || (f[10] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: f[3] || (f[3] = (v) => a("mark-optional"))
            }, {
              default: g(() => [...f[11] || (f[11] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", Ny, [
          f[16] || (f[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", Oy, [
            C(Me, {
              variant: "primary",
              size: "sm",
              onClick: f[4] || (f[4] = (v) => a("search"))
            }, {
              default: g(() => [...f[13] || (f[13] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: f[5] || (f[5] = (v) => a("download-url"))
            }, {
              default: g(() => [...f[14] || (f[14] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: "secondary",
              size: "sm",
              onClick: f[6] || (f[6] = (v) => a("mark-optional"))
            }, {
              default: g(() => [...f[15] || (f[15] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), zy = /* @__PURE__ */ _e(Ay, [["__scopeId", "data-v-8a82fefa"]]), Vy = { class: "model-resolution-step" }, Fy = { class: "step-header" }, By = { class: "step-info" }, Wy = { class: "step-title" }, Gy = { class: "step-description" }, jy = { class: "stat-badge" }, Hy = {
  key: 1,
  class: "step-body"
}, Ky = {
  key: 2,
  class: "empty-state"
}, qy = { class: "model-search-modal" }, Yy = { class: "model-modal-body" }, Jy = {
  key: 0,
  class: "model-search-results"
}, Qy = ["onClick"], Xy = { class: "model-result-header" }, Zy = { class: "model-result-filename" }, e1 = { class: "model-result-meta" }, t1 = { class: "model-result-category" }, s1 = { class: "model-result-size" }, o1 = {
  key: 0,
  class: "model-result-path"
}, n1 = {
  key: 1,
  class: "model-no-results"
}, a1 = {
  key: 2,
  class: "model-searching"
}, l1 = { class: "model-download-url-modal" }, i1 = { class: "model-modal-body" }, r1 = { class: "model-input-group" }, c1 = { class: "model-input-group" }, u1 = { class: "model-modal-actions" }, d1 = /* @__PURE__ */ he({
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
    function a(ee) {
      var ue;
      return ee && ((ue = o[ee]) == null ? void 0 : ue[0]) || null;
    }
    const l = e, r = s, c = k(0), u = k(!1), m = k(!1), f = k(""), v = k(""), p = k(""), _ = k([]), h = k(!1), w = N(() => l.models[c.value]), x = N(() => l.models.some((ee) => ee.is_download_intent)), b = N(() => l.models.filter(
      (ee) => l.modelChoices.has(ee.filename) || ee.is_download_intent
    ).length), S = N(() => {
      var ue;
      if (!w.value) return "";
      const ee = a((ue = w.value.reference) == null ? void 0 : ue.node_type);
      return ee ? `${ee}/${w.value.filename}` : "";
    }), A = N(() => {
      var ue;
      if (!w.value) return "not-found";
      const ee = l.modelChoices.get(w.value.filename);
      if (ee)
        switch (ee.action) {
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
      return w.value.is_download_intent ? "download" : (ue = w.value.options) != null && ue.length ? "ambiguous" : "not-found";
    }), T = N(() => {
      var ue, ne;
      if (!w.value) return;
      const ee = l.modelChoices.get(w.value.filename);
      if (ee)
        switch (ee.action) {
          case "select":
            return (ue = ee.selected_model) != null && ue.filename ? `→ ${ee.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return w.value.is_download_intent ? "Pending Download" : (ne = w.value.options) != null && ne.length ? `${w.value.options.length} matches` : "Not Found";
    });
    function P(ee) {
      ee >= 0 && ee < l.models.length && (c.value = ee);
    }
    function M() {
      var ee;
      for (let ue = c.value + 1; ue < l.models.length; ue++) {
        const ne = l.models[ue];
        if (!ne.is_download_intent && !((ee = l.modelChoices) != null && ee.has(ne.filename))) {
          P(ue);
          return;
        }
      }
    }
    function O() {
      w.value && (r("mark-optional", w.value.filename), Rt(() => M()));
    }
    function F() {
      w.value && (r("skip", w.value.filename), Rt(() => M()));
    }
    function I(ee) {
      w.value && (r("option-selected", w.value.filename, ee), Rt(() => M()));
    }
    function L() {
      w.value && r("clear-choice", w.value.filename);
    }
    function te() {
      w.value && (f.value = w.value.filename, u.value = !0);
    }
    function Y() {
      w.value && (v.value = w.value.download_source || "", p.value = w.value.target_path || S.value, m.value = !0);
    }
    function K() {
      u.value = !1, f.value = "", _.value = [];
    }
    function H() {
      m.value = !1, v.value = "", p.value = "";
    }
    function B() {
      h.value = !0, setTimeout(() => {
        h.value = !1;
      }, 300);
    }
    function W(ee) {
      w.value && (K(), Rt(() => M()));
    }
    function se() {
      !w.value || !v.value.trim() || (r("download-url", w.value.filename, v.value.trim(), p.value.trim() || void 0), H(), Rt(() => M()));
    }
    function Ue(ee) {
      if (!ee) return "Unknown";
      const ue = ee / (1024 * 1024 * 1024);
      return ue >= 1 ? `${ue.toFixed(2)} GB` : `${(ee / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (ee, ue) => {
      var ne, ie, ke;
      return n(), i("div", Vy, [
        t("div", Fy, [
          t("div", By, [
            t("h3", Wy, d(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", Gy, d(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", jy, d(b.value) + "/" + d(e.models.length) + " resolved", 1)
        ]),
        w.value ? (n(), D(Br, {
          key: 0,
          "item-name": w.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: ue[0] || (ue[0] = (Ee) => P(c.value - 1)),
          onNext: ue[1] || (ue[1] = (Ee) => P(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        w.value ? (n(), i("div", Hy, [
          C(zy, {
            filename: w.value.filename,
            "node-type": ((ne = w.value.reference) == null ? void 0 : ne.node_type) || "Unknown",
            "has-multiple-options": !!((ie = w.value.options) != null && ie.length),
            options: w.value.options,
            choice: (ke = e.modelChoices) == null ? void 0 : ke.get(w.value.filename),
            status: A.value,
            "status-label": T.value,
            onMarkOptional: O,
            onSkip: F,
            onDownloadUrl: Y,
            onSearch: te,
            onOptionSelected: I,
            onClearChoice: L
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", Ky, [...ue[5] || (ue[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (n(), D(Nt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: bt(K, ["self"])
          }, [
            t("div", qy, [
              t("div", { class: "model-modal-header" }, [
                ue[6] || (ue[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: K
                }, "✕")
              ]),
              t("div", Yy, [
                C(vt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": ue[2] || (ue[2] = (Ee) => f.value = Ee),
                  placeholder: "Search by filename, category...",
                  onInput: B
                }, null, 8, ["modelValue"]),
                _.value.length > 0 ? (n(), i("div", Jy, [
                  (n(!0), i(j, null, ve(_.value, (Ee) => (n(), i("div", {
                    key: Ee.hash,
                    class: "model-search-result-item",
                    onClick: (we) => W()
                  }, [
                    t("div", Xy, [
                      t("code", Zy, d(Ee.filename), 1)
                    ]),
                    t("div", e1, [
                      t("span", t1, d(Ee.category), 1),
                      t("span", s1, d(Ue(Ee.size)), 1)
                    ]),
                    Ee.relative_path ? (n(), i("div", o1, d(Ee.relative_path), 1)) : y("", !0)
                  ], 8, Qy))), 128))
                ])) : f.value && !h.value ? (n(), i("div", n1, ' No models found matching "' + d(f.value) + '" ', 1)) : y("", !0),
                h.value ? (n(), i("div", a1, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (n(), D(Nt, { to: "body" }, [
          m.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: bt(H, ["self"])
          }, [
            t("div", l1, [
              t("div", { class: "model-modal-header" }, [
                ue[7] || (ue[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: H
                }, "✕")
              ]),
              t("div", i1, [
                t("div", r1, [
                  ue[8] || (ue[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  C(vt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": ue[3] || (ue[3] = (Ee) => v.value = Ee),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", c1, [
                  ue[9] || (ue[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  C(vt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": ue[4] || (ue[4] = (Ee) => p.value = Ee),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", u1, [
                  C(Me, {
                    variant: "secondary",
                    onClick: H
                  }, {
                    default: g(() => [...ue[10] || (ue[10] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  C(Me, {
                    variant: "primary",
                    disabled: !v.value.trim() || !p.value.trim(),
                    onClick: se
                  }, {
                    default: g(() => [...ue[11] || (ue[11] = [
                      $(" Queue Download ", -1)
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
}), m1 = /* @__PURE__ */ _e(d1, [["__scopeId", "data-v-5c700bfa"]]), f1 = { class: "applying-step" }, v1 = {
  key: 0,
  class: "phase-content"
}, p1 = {
  key: 1,
  class: "phase-content"
}, g1 = { class: "phase-description" }, h1 = { class: "overall-progress" }, y1 = { class: "progress-bar" }, w1 = { class: "progress-label" }, _1 = { class: "install-list" }, k1 = { class: "install-icon" }, b1 = { key: 0 }, $1 = {
  key: 1,
  class: "spinner"
}, C1 = { key: 2 }, x1 = { key: 3 }, S1 = {
  key: 0,
  class: "install-error"
}, I1 = {
  key: 2,
  class: "phase-content"
}, E1 = { class: "phase-header" }, T1 = { class: "phase-title" }, P1 = { class: "completion-summary" }, R1 = {
  key: 0,
  class: "summary-item success"
}, M1 = { class: "summary-text" }, D1 = {
  key: 1,
  class: "summary-item error"
}, L1 = { class: "summary-text" }, U1 = {
  key: 2,
  class: "failed-list"
}, N1 = { class: "failed-node-id" }, O1 = { class: "failed-error" }, A1 = {
  key: 4,
  class: "summary-item success"
}, z1 = {
  key: 5,
  class: "restart-prompt"
}, V1 = {
  key: 3,
  class: "phase-content error"
}, F1 = { class: "error-message" }, B1 = /* @__PURE__ */ he({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = N(() => {
      var f, v;
      const u = ((f = s.progress.nodeInstallProgress) == null ? void 0 : f.totalNodes) || s.progress.nodesToInstall.length;
      if (!u) return 0;
      const m = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(m / u * 100);
    }), a = N(() => {
      var u;
      return ((u = s.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((m) => !m.success)) || [];
    }), l = N(() => a.value.length > 0);
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
      return n(), i("div", f1, [
        e.progress.phase === "resolving" ? (n(), i("div", v1, [...m[2] || (m[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (n(), i("div", p1, [
          m[3] || (m[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", g1, " Installing " + d((((f = e.progress.nodeInstallProgress) == null ? void 0 : f.currentIndex) ?? 0) + 1) + " of " + d(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", h1, [
            t("div", y1, [
              t("div", {
                class: "progress-fill",
                style: Zt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", w1, d(((p = e.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + d(((_ = e.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", _1, [
            (n(!0), i(j, null, ve(e.progress.nodesToInstall, (h, w) => (n(), i("div", {
              key: h,
              class: De(["install-item", r(h, w)])
            }, [
              t("span", k1, [
                r(h, w) === "pending" ? (n(), i("span", b1, "○")) : r(h, w) === "installing" ? (n(), i("span", $1, "◌")) : r(h, w) === "complete" ? (n(), i("span", C1, "✓")) : r(h, w) === "failed" ? (n(), i("span", x1, "✗")) : y("", !0)
              ]),
              t("code", null, d(h), 1),
              c(h) ? (n(), i("span", S1, d(c(h)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", I1, [
          t("div", E1, [
            t("span", {
              class: De(["phase-icon", l.value ? "warning" : "success"])
            }, d(l.value ? "⚠" : "✓"), 3),
            t("h3", T1, d(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", P1, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", R1, [
              m[4] || (m[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", M1, d(e.progress.nodesInstalled.length) + " node package" + d(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", D1, [
              m[5] || (m[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", L1, d(a.value.length) + " package" + d(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", U1, [
              (n(!0), i(j, null, ve(a.value, (h) => (n(), i("div", {
                key: h.node_id,
                class: "failed-item"
              }, [
                t("code", N1, d(h.node_id), 1),
                t("span", O1, d(h.error), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: m[0] || (m[0] = (h) => u.$emit("retry-failed"))
            }, " Retry Failed (" + d(a.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (n(), i("div", A1, [...m[6] || (m[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            m[8] || (m[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (n(), i("div", z1, [
              m[7] || (m[7] = t("div", { class: "restart-warning" }, [
                t("span", { class: "warning-icon" }, "⚠"),
                t("div", { class: "warning-content" }, [
                  t("strong", null, "Restart Required"),
                  t("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              t("button", {
                class: "restart-button",
                onClick: m[1] || (m[1] = (h) => u.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (n(), i("div", V1, [
          m[9] || (m[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", F1, d(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), W1 = /* @__PURE__ */ _e(B1, [["__scopeId", "data-v-5efaae58"]]), G1 = {
  key: 0,
  class: "loading-state"
}, j1 = {
  key: 1,
  class: "wizard-content"
}, H1 = {
  key: 0,
  class: "step-content"
}, K1 = { class: "analysis-summary" }, q1 = { class: "analysis-header" }, Y1 = { class: "summary-description" }, J1 = { class: "stats-grid" }, Q1 = { class: "stat-card" }, X1 = { class: "stat-items" }, Z1 = {
  key: 0,
  class: "stat-item success"
}, e0 = { class: "stat-count" }, t0 = {
  key: 1,
  class: "stat-item info"
}, s0 = { class: "stat-count" }, o0 = {
  key: 2,
  class: "stat-item warning"
}, n0 = { class: "stat-count" }, a0 = {
  key: 3,
  class: "stat-item warning"
}, l0 = { class: "stat-count" }, i0 = {
  key: 4,
  class: "stat-item warning"
}, r0 = { class: "stat-count" }, c0 = {
  key: 5,
  class: "stat-item error"
}, u0 = { class: "stat-count" }, d0 = { class: "stat-card" }, m0 = { class: "stat-items" }, f0 = { class: "stat-item success" }, v0 = { class: "stat-count" }, p0 = {
  key: 0,
  class: "stat-item info"
}, g0 = { class: "stat-count" }, h0 = {
  key: 1,
  class: "stat-item warning"
}, y0 = { class: "stat-count" }, w0 = {
  key: 2,
  class: "stat-item warning"
}, _0 = { class: "stat-count" }, k0 = {
  key: 3,
  class: "stat-item error"
}, b0 = { class: "stat-count" }, $0 = {
  key: 0,
  class: "status-message warning"
}, C0 = { class: "status-text" }, x0 = {
  key: 1,
  class: "status-message warning"
}, S0 = { class: "status-text" }, I0 = {
  key: 2,
  class: "status-message info"
}, E0 = { class: "status-text" }, T0 = {
  key: 3,
  class: "status-message info"
}, P0 = { class: "status-text" }, R0 = {
  key: 4,
  class: "status-message info"
}, M0 = { class: "status-text" }, D0 = {
  key: 5,
  class: "status-message warning"
}, L0 = { class: "status-text" }, U0 = {
  key: 6,
  class: "status-message success"
}, N0 = {
  key: 7,
  class: "category-mismatch-section"
}, O0 = { class: "mismatch-list" }, A0 = { class: "mismatch-path" }, z0 = { class: "mismatch-target" }, V0 = {
  key: 8,
  class: "category-mismatch-section"
}, F0 = { class: "mismatch-list" }, B0 = { class: "mismatch-path" }, W0 = { class: "status-text" }, G0 = {
  key: 1,
  class: "step-content node-step-content"
}, j0 = {
  key: 0,
  class: "community-node-section"
}, H0 = { class: "community-node-header" }, K0 = { class: "community-node-title" }, q0 = { class: "community-node-list" }, Y0 = { class: "community-node-info" }, J0 = { class: "community-node-heading" }, Q0 = { class: "item-name" }, X0 = { class: "community-node-package" }, Z0 = { class: "community-node-meta" }, ew = { class: "community-node-guidance" }, tw = { key: 0 }, sw = { class: "community-choice-status" }, ow = { class: "community-node-actions" }, nw = {
  key: 3,
  class: "step-content"
}, aw = { class: "review-summary" }, lw = { class: "review-stats" }, iw = { class: "review-stat" }, rw = { class: "stat-value" }, cw = { class: "review-stat" }, uw = { class: "stat-value" }, dw = { class: "review-stat" }, mw = { class: "stat-value" }, fw = { class: "review-stat" }, vw = { class: "stat-value" }, pw = {
  key: 0,
  class: "review-section"
}, gw = { class: "section-title" }, hw = { class: "review-items" }, yw = { class: "item-name" }, ww = { class: "item-choice" }, _w = {
  key: 0,
  class: "choice-badge install"
}, kw = {
  key: 1,
  class: "choice-badge skip"
}, bw = {
  key: 1,
  class: "review-section"
}, $w = { class: "section-title" }, Cw = { class: "review-items" }, xw = { class: "item-name" }, Sw = { class: "item-choice" }, Iw = {
  key: 0,
  class: "choice-badge install"
}, Ew = {
  key: 1,
  class: "choice-badge optional"
}, Tw = {
  key: 2,
  class: "choice-badge skip"
}, Pw = {
  key: 2,
  class: "review-section"
}, Rw = { class: "section-title" }, Mw = { class: "review-items" }, Dw = { class: "item-name" }, Lw = { class: "item-choice" }, Uw = {
  key: 0,
  class: "choice-badge install"
}, Nw = {
  key: 1,
  class: "choice-badge optional"
}, Ow = {
  key: 2,
  class: "choice-badge skip"
}, Aw = {
  key: 1,
  class: "choice-badge pending"
}, zw = {
  key: 3,
  class: "review-section"
}, Vw = { class: "section-title" }, Fw = { class: "review-items download-details" }, Bw = { class: "download-info" }, Ww = { class: "item-name" }, Gw = { class: "download-meta" }, jw = { class: "download-path" }, Hw = ["title"], Kw = {
  key: 4,
  class: "review-section"
}, qw = { class: "section-title" }, Yw = { class: "review-items" }, Jw = { class: "item-name" }, Qw = { class: "item-choice" }, Xw = {
  key: 0,
  class: "choice-badge install"
}, Zw = {
  key: 1,
  class: "choice-badge download"
}, e_ = {
  key: 2,
  class: "choice-badge optional"
}, t_ = {
  key: 3,
  class: "choice-badge skip"
}, s_ = {
  key: 4,
  class: "choice-badge skip"
}, o_ = {
  key: 1,
  class: "choice-badge download"
}, n_ = {
  key: 2,
  class: "choice-badge pending"
}, a_ = {
  key: 5,
  class: "no-choices"
}, l_ = /* @__PURE__ */ he({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, a = s, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: m, resetProgress: f } = Fr(), { loadPendingDownloads: v } = Oo(), { openFileLocation: p, queueNodeInstall: _, getNodes: h } = it(), w = k(null), x = k([]), b = k(!1), S = k(!1), A = k(null), T = k("analysis"), P = k([]), M = k(/* @__PURE__ */ new Map()), O = k(/* @__PURE__ */ new Map()), F = k(/* @__PURE__ */ new Set()), I = N(() => {
      const le = [
        { id: "analysis", label: "Analysis" }
      ];
      return (B.value || Ue.value || ee.value) && le.push({ id: "nodes", label: "Nodes" }), W.value && le.push({ id: "models", label: "Models" }), le.push({ id: "review", label: "Review" }), T.value === "applying" && le.push({ id: "applying", label: "Applying" }), le;
    }), L = N(() => w.value ? w.value.stats.needs_user_input : !1), te = N(() => w.value ? w.value.nodes.version_gated || [] : []), Y = N(() => w.value ? w.value.nodes.uninstallable || [] : []), K = N(() => Y.value.filter((le) => {
      var E;
      return !!((E = le.package) != null && E.package_id);
    })), H = N(() => te.value.length > 0), B = N(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), W = N(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), se = N(() => w.value ? w.value.stats.download_intents > 0 : !1), Ue = N(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), ee = N(() => K.value.length > 0), ue = N(() => w.value ? w.value.nodes.resolved.length : 0), ne = N(() => w.value ? w.value.models.resolved.filter((le) => le.has_category_mismatch) : []), ie = N(() => ne.value.length > 0), ke = N(() => B.value || Ue.value || ee.value ? "nodes" : W.value ? "models" : "review"), Ee = N(() => {
      if (!w.value) return [];
      const le = w.value.nodes.resolved.filter((R) => !R.is_installed), E = /* @__PURE__ */ new Set();
      return le.filter((R) => E.has(R.package.package_id) ? !1 : (E.add(R.package.package_id), !0));
    }), we = N(() => {
      if (!w.value) return [];
      const le = w.value.nodes.resolved.filter((R) => !R.is_installed), E = /* @__PURE__ */ new Map();
      for (const R of le) {
        const Te = E.get(R.package.package_id);
        Te ? Te.node_types_count++ : E.set(R.package.package_id, {
          package_id: R.package.package_id,
          title: R.package.title,
          node_types_count: 1
        });
      }
      return Array.from(E.values());
    }), G = N(() => Ee.value.filter((le) => !F.value.has(le.package.package_id))), ae = N(() => w.value ? w.value.models.resolved.filter(
      (le) => le.match_type === "download_intent" || le.match_type === "property_download_intent"
    ).map((le) => ({
      filename: le.reference.widget_value,
      reference: le.reference,
      is_download_intent: !0,
      resolved_model: le.model,
      download_source: le.download_source,
      target_path: le.target_path
    })) : []), V = N(() => {
      if (!w.value) return [];
      const le = w.value.nodes.unresolved.map((R) => ({
        node_type: R.reference.node_type,
        reason: R.reason,
        is_unresolved: !0,
        options: void 0
      })), E = w.value.nodes.ambiguous.map((R) => ({
        node_type: R.reference.node_type,
        has_multiple_options: !0,
        options: R.options.map((Te) => ({
          package_id: Te.package.package_id,
          title: Te.package.title,
          match_confidence: Te.match_confidence,
          match_type: Te.match_type,
          is_installed: Te.is_installed
        }))
      }));
      return [...le, ...E];
    }), U = N(() => {
      if (!w.value) return [];
      const le = w.value.models.unresolved.map((R) => ({
        filename: R.reference.widget_value,
        reference: R.reference,
        reason: R.reason,
        is_unresolved: !0,
        options: void 0
      })), E = w.value.models.ambiguous.map((R) => ({
        filename: R.reference.widget_value,
        reference: R.reference,
        has_multiple_options: !0,
        options: R.options.map((Te) => ({
          model: Te.model,
          match_confidence: Te.match_confidence,
          match_type: Te.match_type,
          has_download_source: Te.has_download_source
        }))
      }));
      return [...le, ...E];
    }), oe = N(() => {
      const le = U.value, E = ae.value.map((R) => ({
        filename: R.filename,
        reference: R.reference,
        is_download_intent: !0,
        resolved_model: R.resolved_model,
        download_source: R.download_source,
        target_path: R.target_path,
        options: void 0
      }));
      return [...le, ...E];
    }), Ae = N(() => ae.value.filter((le) => {
      const E = O.value.get(le.filename);
      return E ? E.action === "download" : !0;
    }).map((le) => ({
      filename: le.filename,
      url: le.download_source,
      target_path: le.target_path
    })));
    function ze(le, E = 50) {
      return le.length <= E ? le : le.slice(0, E - 3) + "...";
    }
    const z = N(() => {
      let le = G.value.length;
      for (const E of M.value.values())
        E.action === "install" && le++;
      for (const E of O.value.values())
        E.action === "select" && le++;
      return le;
    }), J = N(() => {
      let le = 0;
      for (const E of O.value.values())
        E.action === "download" && le++;
      for (const E of ae.value)
        O.value.get(E.filename) || le++;
      return le;
    }), re = N(() => {
      let le = 0;
      for (const E of M.value.values())
        E.action === "optional" && le++;
      for (const E of O.value.values())
        E.action === "optional" && le++;
      return le;
    }), Ie = N(() => {
      let le = F.value.size;
      for (const E of M.value.values())
        E.action === "skip" && le++;
      for (const E of O.value.values())
        E.action === "skip" && le++;
      for (const E of V.value)
        M.value.has(E.node_type) || le++;
      for (const E of U.value)
        O.value.has(E.filename) || le++;
      return le;
    }), be = N(() => {
      const le = {};
      if (le.analysis = { resolved: 1, total: 1 }, B.value || ee.value) {
        const E = V.value.length, R = K.value.length, Te = V.value.filter(
          (Ct) => M.value.has(Ct.node_type)
        ).length, tt = K.value.filter(
          (Ct) => M.value.has(Ct.reference.node_type)
        ).length, ft = E + R, st = Te + tt;
        le.nodes = { resolved: st, total: ft };
      }
      if (W.value) {
        const E = oe.value.length, R = oe.value.filter(
          (Te) => O.value.has(Te.filename) || Te.is_download_intent
        ).length;
        le.models = { resolved: R, total: E };
      }
      if (le.review = { resolved: 1, total: 1 }, T.value === "applying") {
        const E = m.totalFiles || 1, R = m.completedFiles.length;
        le.applying = { resolved: R, total: E };
      }
      return le;
    });
    function $e(le) {
      T.value = le;
    }
    function Le() {
      const le = I.value.findIndex((E) => E.id === T.value);
      le > 0 && (T.value = I.value[le - 1].id);
    }
    function ye() {
      const le = I.value.findIndex((E) => E.id === T.value);
      le < I.value.length - 1 && (T.value = I.value[le + 1].id);
    }
    function Re() {
      for (const le of K.value) {
        const E = le.reference.node_type;
        M.value.has(E) || de(le, "registry");
      }
    }
    function fe(le) {
      switch (le) {
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
    function je(le) {
      return le.filter((E) => E.installed && E.tracked).filter((E) => E.name !== "comfygit-manager").map((E) => ({
        package_id: E.registry_id || E.name,
        source: E.source
      })).filter((E, R, Te) => Te.findIndex((tt) => tt.package_id === E.package_id) === R).sort((E, R) => {
        const Te = fe(E.source) - fe(R.source);
        return Te !== 0 ? Te : E.package_id.localeCompare(R.package_id);
      });
    }
    async function Oe() {
      b.value = !0, A.value = null;
      try {
        const [le, E] = await Promise.all([
          l(o.workflowName),
          h()
        ]);
        w.value = le, x.value = je(E.nodes), Re();
      } catch (le) {
        A.value = le instanceof Error ? le.message : "Failed to analyze workflow";
      } finally {
        b.value = !1;
      }
    }
    function pe() {
      P.value.includes("analysis") || P.value.push("analysis"), B.value || Ue.value || ee.value ? T.value = "nodes" : W.value ? T.value = "models" : T.value = "review";
    }
    function q(le) {
      M.value.set(le, { action: "optional" });
    }
    function Ve(le) {
      M.value.set(le, { action: "skip" });
    }
    function Se(le, E) {
      var Te;
      const R = V.value.find((tt) => tt.node_type === le);
      (Te = R == null ? void 0 : R.options) != null && Te[E] && M.value.set(le, {
        action: "install",
        package_id: R.options[E].package_id
      });
    }
    function Ce(le, E) {
      M.value.set(le, {
        action: "install",
        package_id: E
      });
    }
    function Ne(le) {
      M.value.delete(le);
    }
    function Pe(le) {
      return M.value.get(le);
    }
    function Q(le) {
      const E = Pe(le);
      return E ? E.action === "optional" ? "Marked optional" : E.action === "skip" ? "Skipped" : E.action === "install" ? E.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function de(le, E) {
      var tt;
      const R = (tt = le.package) == null ? void 0 : tt.package_id;
      if (!R) return;
      const Te = {
        action: "install",
        package_id: R,
        version: le.package.latest_version || null,
        install_source: E
      };
      E === "git" && le.package.repository && (Te.repository = le.package.repository), M.value.set(le.reference.node_type, Te);
    }
    function ge(le) {
      M.value.set(le, { action: "optional" });
    }
    function Ke(le) {
      M.value.set(le, { action: "skip" });
    }
    function Fe(le) {
      F.value.has(le) ? F.value.delete(le) : F.value.add(le);
    }
    function Be(le) {
      O.value.set(le, { action: "optional" });
    }
    function et(le) {
      O.value.set(le, { action: "skip" });
    }
    function qe(le, E) {
      var Te;
      const R = U.value.find((tt) => tt.filename === le);
      (Te = R == null ? void 0 : R.options) != null && Te[E] && O.value.set(le, {
        action: "select",
        selected_model: R.options[E].model
      });
    }
    function mt(le, E, R) {
      O.value.set(le, {
        action: "download",
        url: E,
        target_path: R
      });
    }
    function ct(le) {
      O.value.delete(le);
    }
    async function dt(le) {
      try {
        await p(le);
      } catch (E) {
        A.value = E instanceof Error ? E.message : "Failed to open file location";
      }
    }
    async function Tt() {
      var le;
      S.value = !0, A.value = null, f(), m.phase = "resolving", T.value = "applying";
      try {
        const E = await r(o.workflowName, M.value, O.value, F.value);
        E.models_to_download && E.models_to_download.length > 0 && u(o.workflowName, E.models_to_download);
        const R = K.value.map((st) => {
          const Ct = Pe(st.reference.node_type);
          if ((Ct == null ? void 0 : Ct.action) !== "install" || Ct.install_source !== "git")
            return null;
          const It = Ct.repository || st.package.repository, We = Ct.package_id || st.package.package_id;
          return !It || !We ? null : {
            id: We,
            repository: It,
            selectedVersion: Ct.version || st.package.latest_version || "latest"
          };
        }).filter((st) => !!st), Te = new Set(R.map((st) => st.id)), tt = [
          ...E.nodes_to_install || [],
          ...G.value.map((st) => st.package.package_id)
        ];
        m.nodesToInstall = [...new Set(tt)].filter((st) => !Te.has(st)), m.nodesToInstall.length > 0 && await c(o.workflowName);
        for (const st of R)
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
        const ft = m.installError || ((le = m.nodeInstallProgress) == null ? void 0 : le.completedNodes.some((st) => !st.success));
        !m.needsRestart && !ft && setTimeout(() => {
          a("refresh"), a("install"), a("close");
        }, 1500);
      } catch (E) {
        A.value = E instanceof Error ? E.message : "Failed to apply resolution", m.error = A.value, m.phase = "error";
      } finally {
        S.value = !1;
      }
    }
    function es() {
      a("refresh"), a("restart"), a("close");
    }
    async function Ot() {
      var E;
      const le = ((E = m.nodeInstallProgress) == null ? void 0 : E.completedNodes.filter((R) => !R.success).map((R) => R.node_id)) || [];
      if (le.length !== 0) {
        m.phase = "installing", m.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: le.length
        }, m.nodesToInstall = le, m.nodesInstalled = [], m.installError = void 0;
        try {
          await c(o.workflowName), m.phase = "complete";
        } catch (R) {
          m.error = R instanceof Error ? R.message : "Retry failed", m.phase = "error";
        }
      }
    }
    return at(Oe), (le, E) => (n(), D($t, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: b.value,
      error: A.value || void 0,
      "fixed-height": !0,
      onClose: E[1] || (E[1] = (R) => a("close"))
    }, {
      body: g(() => [
        b.value && !w.value ? (n(), i("div", G1, [...E[2] || (E[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (n(), i("div", j1, [
          C(jg, {
            steps: I.value,
            "current-step": T.value,
            "completed-steps": P.value,
            "step-stats": be.value,
            onStepChange: $e
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          T.value === "analysis" ? (n(), i("div", H1, [
            t("div", K1, [
              t("div", q1, [
                E[3] || (E[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", Y1, " Found " + d(w.value.stats.total_nodes) + " nodes and " + d(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", J1, [
                t("div", Q1, [
                  E[16] || (E[16] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", X1, [
                    ue.value > 0 ? (n(), i("div", Z1, [
                      E[4] || (E[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", e0, d(ue.value), 1),
                      E[5] || (E[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (n(), i("div", t0, [
                      E[6] || (E[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", s0, d(w.value.stats.packages_needing_installation), 1),
                      E[7] || (E[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (n(), i("div", o0, [
                      E[8] || (E[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", n0, d(w.value.nodes.ambiguous.length), 1),
                      E[9] || (E[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    te.value.length > 0 ? (n(), i("div", a0, [
                      E[10] || (E[10] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", l0, d(te.value.length), 1),
                      E[11] || (E[11] = t("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    Y.value.length > 0 ? (n(), i("div", i0, [
                      E[12] || (E[12] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", r0, d(Y.value.length), 1),
                      E[13] || (E[13] = t("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (n(), i("div", c0, [
                      E[14] || (E[14] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", u0, d(w.value.nodes.unresolved.length), 1),
                      E[15] || (E[15] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", d0, [
                  E[27] || (E[27] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", m0, [
                    t("div", f0, [
                      E[17] || (E[17] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", v0, d(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      E[18] || (E[18] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (n(), i("div", p0, [
                      E[19] || (E[19] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", g0, d(w.value.stats.download_intents), 1),
                      E[20] || (E[20] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    ie.value ? (n(), i("div", h0, [
                      E[21] || (E[21] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", y0, d(ne.value.length), 1),
                      E[22] || (E[22] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (n(), i("div", w0, [
                      E[23] || (E[23] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", _0, d(w.value.models.ambiguous.length), 1),
                      E[24] || (E[24] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (n(), i("div", k0, [
                      E[25] || (E[25] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", b0, d(w.value.models.unresolved.length), 1),
                      E[26] || (E[26] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              L.value ? (n(), i("div", $0, [
                E[28] || (E[28] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", C0, d(V.value.length + U.value.length) + " items need your input", 1)
              ])) : H.value ? (n(), i("div", x0, [
                E[29] || (E[29] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", S0, d(te.value.length) + " node type" + d(te.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : Y.value.length > 0 ? (n(), i("div", I0, [
                E[30] || (E[30] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", E0, d(Y.value.length) + " community-mapped node type" + d(Y.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : Ue.value ? (n(), i("div", T0, [
                E[31] || (E[31] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", P0, d(w.value.stats.packages_needing_installation) + " package" + d(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + d(w.value.stats.nodes_needing_installation) + " node type" + d(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + d(se.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : se.value ? (n(), i("div", R0, [
                E[32] || (E[32] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", M0, d(w.value.stats.download_intents) + " model" + d(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : ie.value ? (n(), i("div", D0, [
                E[33] || (E[33] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", L0, d(ne.value.length) + " model" + d(ne.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", U0, [...E[34] || (E[34] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              ie.value ? (n(), i("div", N0, [
                E[37] || (E[37] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", O0, [
                  (n(!0), i(j, null, ve(ne.value, (R) => {
                    var Te, tt;
                    return n(), i("div", {
                      key: R.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", A0, d(R.actual_category) + "/" + d((Te = R.model) == null ? void 0 : Te.filename), 1),
                      E[36] || (E[36] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", z0, d((tt = R.expected_categories) == null ? void 0 : tt[0]) + "/", 1),
                      R.file_path ? (n(), D(Me, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (ft) => dt(R.file_path)
                      }, {
                        default: g(() => [...E[35] || (E[35] = [
                          $(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              H.value ? (n(), i("div", V0, [
                E[38] || (E[38] = t("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                t("div", F0, [
                  (n(!0), i(j, null, ve(te.value, (R) => {
                    var Te;
                    return n(), i("div", {
                      key: `vg-${R.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      t("code", B0, d(R.reference.node_type), 1),
                      t("span", W0, d(R.guidance || ((Te = w.value.node_guidance) == null ? void 0 : Te[R.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          T.value === "nodes" ? (n(), i("div", G0, [
            C(wy, {
              nodes: V.value,
              "node-choices": M.value,
              "auto-resolved-packages": we.value,
              "skipped-packages": F.value,
              "installed-node-packs": x.value,
              onMarkOptional: q,
              onSkip: Ve,
              onOptionSelected: Se,
              onManualEntry: Ce,
              onClearChoice: Ne,
              onPackageSkip: Fe
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            K.value.length > 0 ? (n(), i("div", j0, [
              t("div", H0, [
                t("h4", K0, "Community-Mapped Packages (" + d(K.value.length) + ")", 1),
                E[39] || (E[39] = t("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              t("div", q0, [
                (n(!0), i(j, null, ve(K.value, (R) => (n(), i("div", {
                  key: `community-${R.reference.node_type}-${R.package.package_id}`,
                  class: "community-node-item"
                }, [
                  t("div", Y0, [
                    t("div", J0, [
                      t("code", Q0, d(R.reference.node_type), 1),
                      t("span", X0, d(R.package.title || R.package.package_id), 1)
                    ]),
                    t("div", Z0, d(R.package.package_id), 1),
                    t("div", ew, [
                      E[40] || (E[40] = $(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      R.guidance ? (n(), i("span", tw, d(R.guidance), 1)) : y("", !0)
                    ]),
                    t("div", sw, d(Q(R.reference.node_type)), 1)
                  ]),
                  t("div", ow, [
                    C(Me, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !R.package.package_id,
                      onClick: (Te) => de(R, "registry")
                    }, {
                      default: g(() => [...E[41] || (E[41] = [
                        $(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    R.package.repository ? (n(), D(Me, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !R.package.package_id,
                      onClick: (Te) => de(R, "git")
                    }, {
                      default: g(() => [...E[42] || (E[42] = [
                        $(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    C(Me, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Te) => ge(R.reference.node_type)
                    }, {
                      default: g(() => [...E[43] || (E[43] = [
                        $(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(Me, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Te) => Ke(R.reference.node_type)
                    }, {
                      default: g(() => [...E[44] || (E[44] = [
                        $(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : y("", !0)
          ])) : y("", !0),
          T.value === "models" ? (n(), D(m1, {
            key: 2,
            models: oe.value,
            "model-choices": O.value,
            onMarkOptional: Be,
            onSkip: et,
            onOptionSelected: qe,
            onDownloadUrl: mt,
            onClearChoice: ct
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          T.value === "review" ? (n(), i("div", nw, [
            t("div", aw, [
              E[50] || (E[50] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", lw, [
                t("div", iw, [
                  t("span", rw, d(z.value), 1),
                  E[45] || (E[45] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", cw, [
                  t("span", uw, d(J.value), 1),
                  E[46] || (E[46] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", dw, [
                  t("span", mw, d(re.value), 1),
                  E[47] || (E[47] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", fw, [
                  t("span", vw, d(Ie.value), 1),
                  E[48] || (E[48] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              we.value.length > 0 ? (n(), i("div", pw, [
                t("h4", gw, "Node Packages (" + d(we.value.length) + ")", 1),
                t("div", hw, [
                  (n(!0), i(j, null, ve(we.value, (R) => (n(), i("div", {
                    key: R.package_id,
                    class: "review-item"
                  }, [
                    t("code", yw, d(R.package_id), 1),
                    t("div", ww, [
                      F.value.has(R.package_id) ? (n(), i("span", kw, "Skipped")) : (n(), i("span", _w, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              K.value.length > 0 ? (n(), i("div", bw, [
                t("h4", $w, "Community-Mapped Packages (" + d(K.value.length) + ")", 1),
                t("div", Cw, [
                  (n(!0), i(j, null, ve(K.value, (R) => {
                    var Te, tt, ft;
                    return n(), i("div", {
                      key: `review-community-${R.reference.node_type}-${R.package.package_id}`,
                      class: "review-item"
                    }, [
                      t("code", xw, d(R.reference.node_type), 1),
                      t("div", Sw, [
                        ((Te = Pe(R.reference.node_type)) == null ? void 0 : Te.action) === "install" ? (n(), i("span", Iw, d(((tt = Pe(R.reference.node_type)) == null ? void 0 : tt.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((ft = Pe(R.reference.node_type)) == null ? void 0 : ft.action) === "optional" ? (n(), i("span", Ew, " Optional ")) : (n(), i("span", Tw, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              V.value.length > 0 ? (n(), i("div", Pw, [
                t("h4", Rw, "Node Choices (" + d(V.value.length) + ")", 1),
                t("div", Mw, [
                  (n(!0), i(j, null, ve(V.value, (R) => {
                    var Te, tt, ft, st;
                    return n(), i("div", {
                      key: R.node_type,
                      class: "review-item"
                    }, [
                      t("code", Dw, d(R.node_type), 1),
                      t("div", Lw, [
                        M.value.has(R.node_type) ? (n(), i(j, { key: 0 }, [
                          ((Te = M.value.get(R.node_type)) == null ? void 0 : Te.action) === "install" ? (n(), i("span", Uw, d((tt = M.value.get(R.node_type)) == null ? void 0 : tt.package_id), 1)) : ((ft = M.value.get(R.node_type)) == null ? void 0 : ft.action) === "optional" ? (n(), i("span", Nw, " Optional ")) : ((st = M.value.get(R.node_type)) == null ? void 0 : st.action) === "skip" ? (n(), i("span", Ow, " Skip ")) : y("", !0)
                        ], 64)) : (n(), i("span", Aw, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Ae.value.length > 0 ? (n(), i("div", zw, [
                t("h4", Vw, "Models to Download (" + d(Ae.value.length) + ")", 1),
                t("div", Fw, [
                  (n(!0), i(j, null, ve(Ae.value, (R) => (n(), i("div", {
                    key: R.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", Bw, [
                      t("code", Ww, d(R.filename), 1),
                      t("div", Gw, [
                        t("span", jw, "→ " + d(R.target_path), 1),
                        R.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: R.url
                        }, d(ze(R.url)), 9, Hw)) : y("", !0)
                      ])
                    ]),
                    E[49] || (E[49] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              oe.value.length > 0 ? (n(), i("div", Kw, [
                t("h4", qw, "Models (" + d(oe.value.length) + ")", 1),
                t("div", Yw, [
                  (n(!0), i(j, null, ve(oe.value, (R) => {
                    var Te, tt, ft, st, Ct, It, We;
                    return n(), i("div", {
                      key: R.filename,
                      class: "review-item"
                    }, [
                      t("code", Jw, d(R.filename), 1),
                      t("div", Qw, [
                        O.value.has(R.filename) ? (n(), i(j, { key: 0 }, [
                          ((Te = O.value.get(R.filename)) == null ? void 0 : Te.action) === "select" ? (n(), i("span", Xw, d((ft = (tt = O.value.get(R.filename)) == null ? void 0 : tt.selected_model) == null ? void 0 : ft.filename), 1)) : ((st = O.value.get(R.filename)) == null ? void 0 : st.action) === "download" ? (n(), i("span", Zw, " Download ")) : ((Ct = O.value.get(R.filename)) == null ? void 0 : Ct.action) === "optional" ? (n(), i("span", e_, " Optional ")) : ((It = O.value.get(R.filename)) == null ? void 0 : It.action) === "skip" ? (n(), i("span", t_, " Skip ")) : ((We = O.value.get(R.filename)) == null ? void 0 : We.action) === "cancel_download" ? (n(), i("span", s_, " Cancel Download ")) : y("", !0)
                        ], 64)) : R.is_download_intent ? (n(), i("span", o_, " Pending Download ")) : (n(), i("span", n_, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Ee.value.length === 0 && K.value.length === 0 && V.value.length === 0 && oe.value.length === 0 ? (n(), i("div", a_, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          T.value === "applying" ? (n(), D(W1, {
            key: 4,
            progress: Xe(m),
            onRestart: es,
            onRetryFailed: Ot
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: g(() => [
        T.value !== "analysis" && T.value !== "applying" ? (n(), D(Me, {
          key: 0,
          variant: "secondary",
          disabled: S.value,
          onClick: Le
        }, {
          default: g(() => [...E[51] || (E[51] = [
            $(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        E[54] || (E[54] = t("div", { class: "footer-spacer" }, null, -1)),
        T.value !== "applying" || Xe(m).phase === "complete" || Xe(m).phase === "error" ? (n(), D(Me, {
          key: 1,
          variant: "secondary",
          onClick: E[0] || (E[0] = (R) => a("close"))
        }, {
          default: g(() => [
            $(d(Xe(m).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        T.value === "analysis" ? (n(), D(Me, {
          key: 2,
          variant: "primary",
          disabled: b.value,
          onClick: pe
        }, {
          default: g(() => [
            $(d(ke.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        T.value === "nodes" ? (n(), D(Me, {
          key: 3,
          variant: "primary",
          onClick: ye
        }, {
          default: g(() => [
            $(d(W.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        T.value === "models" ? (n(), D(Me, {
          key: 4,
          variant: "primary",
          onClick: ye
        }, {
          default: g(() => [...E[52] || (E[52] = [
            $(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        T.value === "review" ? (n(), D(Me, {
          key: 5,
          variant: "primary",
          disabled: S.value,
          loading: S.value,
          onClick: Tt
        }, {
          default: g(() => [...E[53] || (E[53] = [
            $(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), i_ = /* @__PURE__ */ _e(l_, [["__scopeId", "data-v-49848358"]]), r_ = { class: "search-input-wrapper" }, c_ = ["value", "placeholder"], u_ = /* @__PURE__ */ he({
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
    }), (m, f) => (n(), i("div", r_, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: as(u, ["escape"])
      }, null, 40, c_),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), d_ = /* @__PURE__ */ _e(u_, [["__scopeId", "data-v-266f857a"]]), m_ = { class: "search-bar" }, f_ = /* @__PURE__ */ he({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (n(), i("div", m_, [
      C(d_, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => s.$emit("update:modelValue", a)),
        onClear: o[1] || (o[1] = (a) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Ao = /* @__PURE__ */ _e(f_, [["__scopeId", "data-v-3d51bbfd"]]), v_ = { class: "section-group" }, p_ = {
  key: 0,
  class: "section-content"
}, g_ = /* @__PURE__ */ he({
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
    return (c, u) => (n(), i("section", v_, [
      C(Jt, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: g(() => [
          $(d(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (n(), i("div", p_, [
        ot(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), yt = /* @__PURE__ */ _e(g_, [["__scopeId", "data-v-c48e33ed"]]), h_ = { class: "item-header" }, y_ = {
  key: 0,
  class: "item-icon"
}, w_ = { class: "item-info" }, __ = {
  key: 0,
  class: "item-title"
}, k_ = {
  key: 1,
  class: "item-subtitle"
}, b_ = {
  key: 0,
  class: "item-details"
}, $_ = {
  key: 1,
  class: "item-actions"
}, C_ = /* @__PURE__ */ he({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, a = N(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (n(), i("div", {
      class: De(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", h_, [
        l.$slots.icon ? (n(), i("span", y_, [
          ot(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", w_, [
          l.$slots.title ? (n(), i("div", __, [
            ot(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (n(), i("div", k_, [
            ot(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", b_, [
        ot(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (n(), i("div", $_, [
        ot(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Lt = /* @__PURE__ */ _e(C_, [["__scopeId", "data-v-cc435e0e"]]), x_ = { class: "loading-state" }, S_ = { class: "loading-message" }, I_ = /* @__PURE__ */ he({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (n(), i("div", x_, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", S_, d(e.message), 1)
    ]));
  }
}), As = /* @__PURE__ */ _e(I_, [["__scopeId", "data-v-ad8436c9"]]), E_ = { class: "error-state" }, T_ = { class: "error-message" }, P_ = /* @__PURE__ */ he({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (n(), i("div", E_, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", T_, d(e.message), 1),
      e.retry ? (n(), D(me, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => s.$emit("retry"))
      }, {
        default: g(() => [...o[1] || (o[1] = [
          $(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), zs = /* @__PURE__ */ _e(P_, [["__scopeId", "data-v-5397be48"]]), R_ = /* @__PURE__ */ he({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getWorkflows: l } = it(), r = k([]), c = k(!1), u = k(null), m = k(""), f = k(!0), v = k(!1), p = k(!1), _ = k(!1), h = k(!1), w = k(null), x = N(
      () => r.value.filter((ie) => ie.status === "broken")
    ), b = N(
      () => r.value.filter((ie) => ie.status === "new")
    ), S = N(
      () => r.value.filter((ie) => ie.status === "modified")
    ), A = N(
      () => r.value.filter((ie) => ie.status === "synced")
    ), T = N(() => {
      if (!m.value.trim()) return r.value;
      const ie = m.value.toLowerCase();
      return r.value.filter((ke) => ke.name.toLowerCase().includes(ie));
    }), P = N(
      () => x.value.filter(
        (ie) => !m.value.trim() || ie.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), M = N(
      () => b.value.filter(
        (ie) => !m.value.trim() || ie.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), O = N(
      () => S.value.filter(
        (ie) => !m.value.trim() || ie.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), F = N(
      () => A.value.filter(
        (ie) => !m.value.trim() || ie.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), I = N(
      () => v.value ? F.value : F.value.slice(0, 5)
    );
    async function L(ie = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(ie);
      } catch (ke) {
        u.value = ke instanceof Error ? ke.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: L });
    function te(ie) {
      w.value = ie, p.value = !0;
    }
    function Y(ie) {
      w.value = ie, _.value = !0;
    }
    function K(ie) {
      w.value = ie, h.value = !0;
    }
    function H() {
      a("refresh");
    }
    async function B() {
      _.value = !1, await L(!0);
    }
    async function W() {
      await L(!0), a("refresh");
    }
    async function se() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function Ue(ie) {
      return ie.replace(/uninstallable node mappings?/gi, (ke) => ke.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function ee(ie) {
      if (ie.issue_summary && ie.issue_summary.trim().length > 0)
        return Ue(ie.issue_summary);
      const ke = [];
      return ie.version_gated_count && ie.version_gated_count > 0 && ke.push(`${ie.version_gated_count} node${ie.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), ie.uninstallable_count && ie.uninstallable_count > 0 && ke.push(`${ie.uninstallable_count} node${ie.uninstallable_count > 1 ? "s" : ""} need community packages`), ie.missing_nodes > 0 && ke.push(`${ie.missing_nodes} missing node${ie.missing_nodes > 1 ? "s" : ""}`), ie.missing_models > 0 && ke.push(`${ie.missing_models} missing model${ie.missing_models > 1 ? "s" : ""}`), ie.models_with_category_mismatch && ie.models_with_category_mismatch > 0 && ke.push(`${ie.models_with_category_mismatch} model${ie.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), ie.pending_downloads && ie.pending_downloads > 0 && ke.push(`${ie.pending_downloads} pending download${ie.pending_downloads > 1 ? "s" : ""}`), ke.length > 0 ? ke.join(", ") : "Has issues";
    }
    function ue(ie) {
      const ke = ie.sync_state === "new" ? "New" : ie.sync_state === "modified" ? "Modified" : ie.sync_state === "synced" ? "Synced" : ie.sync_state, Ee = ne(ie);
      return ie.has_path_sync_issues && ie.models_needing_path_sync && ie.models_needing_path_sync > 0 ? `${ie.models_needing_path_sync} model path${ie.models_needing_path_sync > 1 ? "s" : ""} need${ie.models_needing_path_sync === 1 ? "s" : ""} sync · ${Ee}` : `${ke || "Unknown"} · ${Ee}`;
    }
    function ne(ie) {
      const ke = ie.contract_summary;
      return !ke || !ke.has_contract ? "No contract" : ke.status === "incomplete" ? `${ke.input_count} in / ${ke.output_count} out · incomplete` : `${ke.input_count} in / ${ke.output_count} out`;
    }
    return at(L), (ie, ke) => (n(), i(j, null, [
      C(Ht, null, {
        header: g(() => [
          C(Kt, { title: "WORKFLOWS" })
        ]),
        search: g(() => [
          C(Ao, {
            modelValue: m.value,
            "onUpdate:modelValue": ke[0] || (ke[0] = (Ee) => m.value = Ee),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          c.value ? (n(), D(As, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (n(), D(zs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            P.value.length ? (n(), D(yt, {
              key: 0,
              title: "BROKEN",
              count: P.value.length
            }, {
              default: g(() => [
                (n(!0), i(j, null, ve(P.value, (Ee) => (n(), D(Lt, {
                  key: Ee.name,
                  status: "broken"
                }, {
                  icon: g(() => [...ke[8] || (ke[8] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(d(Ee.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(d(ee(Ee)), 1)
                  ]),
                  actions: g(() => [
                    C(me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (we) => Y(Ee.name)
                    }, {
                      default: g(() => [...ke[9] || (ke[9] = [
                        $(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (we) => K(Ee.name)
                    }, {
                      default: g(() => [...ke[10] || (ke[10] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (we) => te(Ee.name)
                    }, {
                      default: g(() => [...ke[11] || (ke[11] = [
                        $(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            M.value.length ? (n(), D(yt, {
              key: 1,
              title: "NEW",
              count: M.value.length
            }, {
              default: g(() => [
                (n(!0), i(j, null, ve(M.value, (Ee) => (n(), D(Lt, {
                  key: Ee.name,
                  status: Ee.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: g(() => [
                    $(d(Ee.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: g(() => [
                    $(d(Ee.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(d(ue(Ee)), 1)
                  ]),
                  actions: g(() => [
                    C(me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (we) => K(Ee.name)
                    }, {
                      default: g(() => [...ke[12] || (ke[12] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (we) => te(Ee.name)
                    }, {
                      default: g(() => [...ke[13] || (ke[13] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            O.value.length ? (n(), D(yt, {
              key: 2,
              title: "MODIFIED",
              count: O.value.length
            }, {
              default: g(() => [
                (n(!0), i(j, null, ve(O.value, (Ee) => (n(), D(Lt, {
                  key: Ee.name,
                  status: Ee.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: g(() => [...ke[14] || (ke[14] = [
                    $("⚡", -1)
                  ])]),
                  title: g(() => [
                    $(d(Ee.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(d(ue(Ee)), 1)
                  ]),
                  actions: g(() => [
                    C(me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (we) => K(Ee.name)
                    }, {
                      default: g(() => [...ke[15] || (ke[15] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (we) => te(Ee.name)
                    }, {
                      default: g(() => [...ke[16] || (ke[16] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            F.value.length ? (n(), D(yt, {
              key: 3,
              title: "SYNCED",
              count: F.value.length,
              collapsible: !0,
              "initially-expanded": f.value,
              onToggle: ke[2] || (ke[2] = (Ee) => f.value = Ee)
            }, {
              default: g(() => [
                (n(!0), i(j, null, ve(I.value, (Ee) => (n(), D(Lt, {
                  key: Ee.name,
                  status: Ee.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: g(() => [
                    $(d(Ee.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: g(() => [
                    $(d(Ee.name), 1)
                  ]),
                  subtitle: g(() => [
                    $(d(ue(Ee)), 1)
                  ]),
                  actions: g(() => [
                    C(me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (we) => K(Ee.name)
                    }, {
                      default: g(() => [...ke[17] || (ke[17] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (we) => te(Ee.name)
                    }, {
                      default: g(() => [...ke[18] || (ke[18] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && F.value.length > 5 ? (n(), D(me, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: ke[1] || (ke[1] = (Ee) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: g(() => [
                    $(" View all " + d(F.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            T.value.length ? y("", !0) : (n(), D(hs, {
              key: 4,
              icon: "📭",
              message: m.value ? `No workflows match '${m.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && w.value ? (n(), D(Zp, {
        key: 0,
        "workflow-name": w.value,
        onClose: ke[3] || (ke[3] = (Ee) => p.value = !1),
        onResolve: ke[4] || (ke[4] = (Ee) => Y(w.value)),
        onRefresh: ke[5] || (ke[5] = (Ee) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      _.value && w.value ? (n(), D(i_, {
        key: 1,
        "workflow-name": w.value,
        onClose: B,
        onInstall: H,
        onRefresh: ke[6] || (ke[6] = (Ee) => a("refresh")),
        onRestart: se
      }, null, 8, ["workflow-name"])) : y("", !0),
      h.value && w.value ? (n(), D(Dg, {
        key: 2,
        "workflow-name": w.value,
        onClose: ke[7] || (ke[7] = (Ee) => h.value = !1),
        onRefresh: W
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), M_ = /* @__PURE__ */ _e(R_, [["__scopeId", "data-v-ede3bc28"]]), D_ = /* @__PURE__ */ he({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: De(["summary-bar", e.variant])
    }, [
      ot(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), yn = /* @__PURE__ */ _e(D_, [["__scopeId", "data-v-ccb7816e"]]), L_ = {
  key: 0,
  class: "model-details"
}, U_ = { class: "detail-section" }, N_ = { class: "detail-row" }, O_ = { class: "detail-value mono" }, A_ = { class: "detail-row" }, z_ = { class: "detail-value mono" }, V_ = { class: "detail-row" }, F_ = { class: "detail-value mono" }, B_ = { class: "detail-row" }, W_ = { class: "detail-value" }, G_ = { class: "detail-row" }, j_ = { class: "detail-value" }, H_ = { class: "detail-row" }, K_ = { class: "detail-value" }, q_ = { class: "detail-section" }, Y_ = { class: "section-header" }, J_ = {
  key: 0,
  class: "locations-list"
}, Q_ = { class: "location-path mono" }, X_ = {
  key: 0,
  class: "location-modified"
}, Z_ = ["onClick"], ek = {
  key: 1,
  class: "empty-state"
}, tk = { class: "detail-section" }, sk = { class: "section-header" }, ok = {
  key: 0,
  class: "sources-list"
}, nk = { class: "source-type" }, ak = ["href"], lk = ["disabled", "onClick"], ik = {
  key: 1,
  class: "empty-state"
}, rk = { class: "add-source-form" }, ck = ["disabled"], uk = {
  key: 2,
  class: "source-error"
}, dk = {
  key: 3,
  class: "source-success"
}, mk = /* @__PURE__ */ he({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: a, addModelSource: l, removeModelSource: r, openFileLocation: c } = it(), u = k(null), m = k(!0), f = k(null), v = k(""), p = k(!1), _ = k(null), h = k(null), w = k(null), x = k(null);
    let b = null;
    function S(I, L = "success", te = 2e3) {
      b && clearTimeout(b), x.value = { message: I, type: L }, b = setTimeout(() => {
        x.value = null;
      }, te);
    }
    function A(I) {
      if (!I) return "Unknown";
      const L = 1024 * 1024 * 1024, te = 1024 * 1024;
      return I >= L ? `${(I / L).toFixed(1)} GB` : I >= te ? `${(I / te).toFixed(0)} MB` : `${(I / 1024).toFixed(0)} KB`;
    }
    function T(I) {
      navigator.clipboard.writeText(I), S("Copied to clipboard!");
    }
    async function P(I) {
      try {
        await c(I), S("Opening file location...");
      } catch {
        S("Failed to open location", "error");
      }
    }
    async function M() {
      if (!(!v.value.trim() || !u.value)) {
        p.value = !0, h.value = null, w.value = null;
        try {
          await l(u.value.hash, v.value.trim()), w.value = "Source added successfully!", v.value = "", await F();
        } catch (I) {
          h.value = I instanceof Error ? I.message : "Failed to add source";
        } finally {
          p.value = !1;
        }
      }
    }
    async function O(I) {
      if (u.value) {
        _.value = I, h.value = null, w.value = null;
        try {
          await r(u.value.hash, I), S("Source removed"), await F();
        } catch (L) {
          h.value = L instanceof Error ? L.message : "Failed to remove source";
        } finally {
          _.value = null;
        }
      }
    }
    async function F() {
      m.value = !0, f.value = null;
      try {
        u.value = await a(o.identifier);
      } catch (I) {
        f.value = I instanceof Error ? I.message : "Failed to load model details";
      } finally {
        m.value = !1;
      }
    }
    return at(F), (I, L) => {
      var te;
      return n(), i(j, null, [
        C($t, {
          title: `Model Details: ${((te = u.value) == null ? void 0 : te.filename) || "Loading..."}`,
          size: "lg",
          loading: m.value,
          error: f.value,
          onClose: L[5] || (L[5] = (Y) => I.$emit("close"))
        }, {
          body: g(() => {
            var Y, K, H, B;
            return [
              u.value ? (n(), i("div", L_, [
                t("section", U_, [
                  t("div", N_, [
                    L[6] || (L[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", O_, d(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[0] || (L[0] = (W) => T(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", A_, [
                    L[7] || (L[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", z_, d(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[1] || (L[1] = (W) => T(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", V_, [
                    L[8] || (L[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", F_, d(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[2] || (L[2] = (W) => T(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", B_, [
                    L[9] || (L[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", W_, d(A(u.value.size)), 1)
                  ]),
                  t("div", G_, [
                    L[10] || (L[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", j_, d(u.value.category), 1)
                  ]),
                  t("div", H_, [
                    L[11] || (L[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", K_, d(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", q_, [
                  t("h4", Y_, "Locations (" + d(((Y = u.value.locations) == null ? void 0 : Y.length) || 0) + ")", 1),
                  (K = u.value.locations) != null && K.length ? (n(), i("div", J_, [
                    (n(!0), i(j, null, ve(u.value.locations, (W, se) => (n(), i("div", {
                      key: se,
                      class: "location-item"
                    }, [
                      t("span", Q_, d(W.path), 1),
                      W.modified ? (n(), i("span", X_, "Modified: " + d(W.modified), 1)) : y("", !0),
                      W.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (Ue) => P(W.path)
                      }, " Open File Location ", 8, Z_)) : y("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", ek, "No locations found"))
                ]),
                t("section", tk, [
                  t("h4", sk, "Download Sources (" + d(((H = u.value.sources) == null ? void 0 : H.length) || 0) + ")", 1),
                  (B = u.value.sources) != null && B.length ? (n(), i("div", ok, [
                    (n(!0), i(j, null, ve(u.value.sources, (W, se) => (n(), i("div", {
                      key: se,
                      class: "source-item"
                    }, [
                      t("span", nk, d(W.type) + ":", 1),
                      t("a", {
                        href: W.url,
                        target: "_blank",
                        class: "source-url"
                      }, d(W.url), 9, ak),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: _.value === W.url,
                        onClick: (Ue) => O(W.url)
                      }, d(_.value === W.url ? "..." : "×"), 9, lk)
                    ]))), 128))
                  ])) : (n(), i("div", ik, " No download sources configured ")),
                  t("div", rk, [
                    nt(t("input", {
                      "onUpdate:modelValue": L[3] || (L[3] = (W) => v.value = W),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Xt, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || p.value,
                      onClick: M
                    }, d(p.value ? "Adding..." : "Add Source"), 9, ck)
                  ]),
                  h.value ? (n(), i("p", uk, d(h.value), 1)) : y("", !0),
                  w.value ? (n(), i("p", dk, d(w.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: g(() => [
            t("button", {
              class: "btn-secondary",
              onClick: L[4] || (L[4] = (Y) => I.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (n(), D(Nt, { to: "body" }, [
          x.value ? (n(), i("div", {
            key: 0,
            class: De(["toast", x.value.type])
          }, d(x.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), gl = /* @__PURE__ */ _e(mk, [["__scopeId", "data-v-f15cbb56"]]), fk = ["disabled"], vk = { class: "dropdown-value" }, pk = ["onClick"], gk = {
  key: 0,
  class: "dropdown-error"
}, hk = /* @__PURE__ */ he({
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
    function m(S) {
      return typeof S == "string" ? S : S.value;
    }
    function f(S) {
      return typeof S == "string" ? S : S.label;
    }
    const v = N(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const S = o.options.find((A) => m(A) === o.modelValue);
      return S ? f(S) : String(o.modelValue);
    });
    function p() {
      o.disabled || (l.value = !l.value);
    }
    function _() {
      l.value = !1;
    }
    function h(S) {
      a("update:modelValue", m(S)), _();
    }
    function w() {
      if (!r.value) return;
      const S = r.value.getBoundingClientRect(), A = window.innerHeight, T = A - S.bottom, P = S.top, M = Math.min(300, o.options.length * 36 + 8), O = T < M && P > T;
      u.value = {
        position: "fixed",
        left: `${S.left}px`,
        width: `${S.width}px`,
        maxHeight: "300px",
        ...O ? { bottom: `${A - S.top + 4}px` } : { top: `${S.bottom + 4}px` }
      };
    }
    xt(l, async (S) => {
      S && (await Rt(), w());
    });
    function x() {
      l.value && w();
    }
    function b(S) {
      S.key === "Escape" && l.value && _();
    }
    return at(() => {
      window.addEventListener("scroll", x, !0), window.addEventListener("keydown", b);
    }), Qs(() => {
      window.removeEventListener("scroll", x, !0), window.removeEventListener("keydown", b);
    }), (S, A) => (n(), i("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      t("button", {
        type: "button",
        class: De(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: p
      }, [
        t("span", vk, d(v.value), 1),
        A[0] || (A[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, fk),
      (n(), D(Nt, { to: "body" }, [
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
          style: Zt(u.value)
        }, [
          (n(!0), i(j, null, ve(e.options, (T) => (n(), i("div", {
            key: m(T),
            class: De(["dropdown-option", { selected: m(T) === e.modelValue }]),
            onClick: (P) => h(T)
          }, d(f(T)), 11, pk))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (n(), i("span", gk, d(e.error), 1)) : y("", !0)
    ], 512));
  }
}), yk = /* @__PURE__ */ _e(hk, [["__scopeId", "data-v-857e085b"]]);
function wk(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function _k(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
  } catch {
    return { kind: "unknown" };
  }
  if (!wk(o.hostname)) return { kind: "unknown" };
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
function kk(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function bk(e, s, o) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${kk(o)}`;
}
const $k = { class: "hf-file-browser" }, Ck = { class: "browser-header" }, xk = { class: "repo-info" }, Sk = { class: "repo-id" }, Ik = {
  key: 0,
  class: "revision-pill"
}, Ek = {
  key: 0,
  class: "loading-state"
}, Tk = {
  key: 1,
  class: "error-state"
}, Pk = { class: "toolbar" }, Rk = { class: "toolbar-actions" }, Mk = { class: "file-list-container" }, Dk = {
  key: 0,
  class: "file-list-header"
}, Lk = ["checked", "indeterminate"], Uk = { class: "sort-indicator" }, Nk = { class: "sort-indicator" }, Ok = {
  key: 1,
  class: "empty-state"
}, Ak = {
  key: 2,
  class: "file-list"
}, zk = ["onClick"], Vk = ["checked", "onChange"], Fk = { class: "file-path" }, Bk = { class: "file-size" }, Wk = { class: "destination-section" }, Gk = { class: "destination-row" }, jk = {
  key: 0,
  class: "path-separator"
}, Hk = { class: "action-bar" }, Kk = { class: "summary-info" }, qk = { class: "summary-count" }, Yk = { class: "summary-size" }, Jk = /* @__PURE__ */ he({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = it(), c = k([]), u = k(/* @__PURE__ */ new Set()), m = k(!1), f = k(null), v = k(""), p = k(!1), _ = k("name"), h = k(!0), w = k(""), x = k(""), b = k(""), S = k([]), A = k(!1);
    let T = !1;
    const P = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, M = N(() => {
      let G = c.value;
      if (o.initialPath) {
        const ae = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        G = G.filter((V) => V.path.startsWith(ae) || V.path === o.initialPath);
      }
      if (p.value && (G = G.filter((ae) => ae.is_model_file)), v.value.trim()) {
        const ae = v.value.toLowerCase();
        G = G.filter((V) => V.path.toLowerCase().includes(ae));
      }
      return G;
    }), O = N(() => {
      const G = [...M.value];
      return G.sort((ae, V) => {
        let U;
        return _.value === "name" ? U = ae.path.localeCompare(V.path) : U = ae.size - V.size, h.value ? U : -U;
      }), G;
    }), F = N(() => M.value.length === 0 ? !1 : M.value.every((G) => u.value.has(G.path))), I = N(() => M.value.some((G) => u.value.has(G.path))), L = N(() => {
      const G = S.value.map((ae) => ({
        label: ae,
        value: ae
      }));
      return G.push({ label: "Custom path...", value: "__custom__" }), G;
    }), te = N(() => w.value === "__custom__" ? b.value.trim().length > 0 : w.value.length > 0), Y = N(() => {
      let G = 0;
      for (const ae of u.value) {
        const V = c.value.find((U) => U.path === ae);
        V && (G += V.size);
      }
      return G;
    });
    function K(G) {
      if (G === 0) return "0 B";
      const ae = 1024 * 1024 * 1024, V = 1024 * 1024, U = 1024;
      return G >= ae ? `${(G / ae).toFixed(2)} GB` : G >= V ? `${(G / V).toFixed(1)} MB` : G >= U ? `${(G / U).toFixed(0)} KB` : `${G} B`;
    }
    function H(G) {
      const ae = G.match(P);
      return ae ? `${ae[1]}${ae[4]}` : null;
    }
    function B(G) {
      const ae = new Set(u.value), V = ae.has(G.path), U = G.shard_group || H(G.path);
      if (U) {
        const oe = c.value.filter((Ae) => (Ae.shard_group || H(Ae.path)) === U);
        V ? oe.forEach((Ae) => ae.delete(Ae.path)) : oe.forEach((Ae) => ae.add(Ae.path));
      } else
        V ? ae.delete(G.path) : ae.add(G.path);
      u.value = ae;
    }
    function W() {
      const G = new Set(u.value);
      for (const ae of M.value)
        ae.is_model_file && G.add(ae.path);
      u.value = G;
    }
    function se() {
      u.value = /* @__PURE__ */ new Set();
    }
    function Ue() {
      if (F.value) {
        const G = new Set(u.value);
        for (const ae of M.value)
          G.delete(ae.path);
        u.value = G;
      } else {
        const G = new Set(u.value);
        for (const ae of M.value)
          G.add(ae.path);
        u.value = G;
      }
    }
    function ee(G) {
      _.value === G ? h.value = !h.value : (_.value = G, h.value = !0);
    }
    function ue(G) {
      const ae = G.split("/");
      return ae.length >= 2 ? ae[ae.length - 2] : null;
    }
    function ne() {
      if (A.value || u.value.size === 0) return;
      const G = /* @__PURE__ */ new Set();
      for (const U of u.value) {
        const oe = ue(U);
        oe && G.add(oe.toLowerCase());
      }
      if (G.size !== 1) return;
      const ae = [...G][0], V = S.value.find(
        (U) => U.toLowerCase() === ae
      );
      V && V !== w.value && (T = !0, w.value = V, Rt(() => {
        T = !1;
      }));
    }
    function ie() {
      return w.value === "__custom__" ? b.value.trim() : x.value.trim() ? `${w.value}/${x.value.trim()}` : w.value;
    }
    function ke() {
      if (u.value.size === 0 || !te.value) return;
      const G = ie(), ae = [];
      for (const V of u.value) {
        const U = c.value.find((oe) => oe.path === V);
        U && ae.push({
          url: bk(o.repoId, o.revision, U.path),
          destination: G,
          filename: U.path.split("/").pop() || U.path
        });
      }
      a("queue", ae);
    }
    async function Ee() {
      if (o.repoId) {
        m.value = !0, f.value = null;
        try {
          const G = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, ae = await l(G);
          if (c.value = ae.files, o.preselectedFile) {
            const V = c.value.find((U) => U.path === o.preselectedFile);
            V && B(V);
          }
        } catch (G) {
          f.value = G instanceof Error ? G.message : "Failed to load repository";
        } finally {
          m.value = !1;
        }
      }
    }
    async function we() {
      try {
        const G = await r();
        S.value = G.directories, G.directories.length > 0 && !w.value && (w.value = G.directories[0]);
      } catch {
        S.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], w.value || (w.value = "checkpoints");
      }
    }
    return xt(() => [o.repoId, o.revision], () => {
      o.repoId && Ee();
    }, { immediate: !1 }), xt(() => o.repoId, () => {
      A.value = !1;
    }), xt(u, () => {
      ne();
    }, { deep: !0 }), xt(S, () => {
      S.value.length > 0 && u.value.size > 0 && ne();
    }), xt(w, (G, ae) => {
      T || ae === "" || (A.value = !0);
    }), at(() => {
      Ee(), we();
    }), (G, ae) => (n(), i("div", $k, [
      t("div", Ck, [
        t("button", {
          class: "back-btn",
          onClick: ae[0] || (ae[0] = (V) => G.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", xk, [
          t("span", Sk, d(e.repoId), 1),
          e.revision ? (n(), i("span", Ik, d(e.revision), 1)) : y("", !0)
        ])
      ]),
      m.value ? (n(), i("div", Ek, " Loading repository files... ")) : f.value ? (n(), i("div", Tk, d(f.value), 1)) : (n(), i(j, { key: 2 }, [
        t("div", Pk, [
          C(vt, {
            modelValue: v.value,
            "onUpdate:modelValue": ae[1] || (ae[1] = (V) => v.value = V),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", Rk, [
            t("button", {
              class: De(["toggle-btn", { active: p.value }]),
              onClick: ae[2] || (ae[2] = (V) => p.value = !p.value)
            }, d(p.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: W
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: se
            }, "Clear")
          ])
        ]),
        t("div", Mk, [
          M.value.length > 0 ? (n(), i("div", Dk, [
            t("input", {
              type: "checkbox",
              checked: F.value,
              indeterminate: I.value && !F.value,
              class: "file-checkbox",
              onChange: Ue
            }, null, 40, Lk),
            t("span", {
              class: "header-name",
              onClick: ae[3] || (ae[3] = (V) => ee("name"))
            }, [
              ae[9] || (ae[9] = $(" Name ", -1)),
              t("span", Uk, d(_.value === "name" ? h.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: ae[4] || (ae[4] = (V) => ee("size"))
            }, [
              ae[10] || (ae[10] = $(" Size ", -1)),
              t("span", Nk, d(_.value === "size" ? h.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          M.value.length === 0 ? (n(), i("div", Ok, d(c.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", Ak, [
            (n(!0), i(j, null, ve(O.value, (V) => (n(), i("div", {
              key: V.path,
              class: De(["file-item", { selected: u.value.has(V.path) }]),
              onClick: (U) => B(V)
            }, [
              t("input", {
                type: "checkbox",
                checked: u.value.has(V.path),
                class: "file-checkbox",
                onClick: ae[5] || (ae[5] = bt(() => {
                }, ["stop"])),
                onChange: (U) => B(V)
              }, null, 40, Vk),
              t("span", Fk, d(V.path), 1),
              t("span", Bk, d(K(V.size)), 1)
            ], 10, zk))), 128))
          ]))
        ]),
        t("div", Wk, [
          ae[11] || (ae[11] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", Gk, [
            C(yk, {
              modelValue: w.value,
              "onUpdate:modelValue": ae[6] || (ae[6] = (V) => w.value = V),
              options: L.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            w.value !== "__custom__" ? (n(), i("span", jk, "/")) : y("", !0),
            w.value !== "__custom__" ? (n(), D(vt, {
              key: 1,
              modelValue: x.value,
              "onUpdate:modelValue": ae[7] || (ae[7] = (V) => x.value = V),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : y("", !0)
          ]),
          w.value === "__custom__" ? (n(), D(vt, {
            key: 0,
            modelValue: b.value,
            "onUpdate:modelValue": ae[8] || (ae[8] = (V) => b.value = V),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : y("", !0)
        ]),
        t("div", Hk, [
          t("div", Kk, [
            t("span", qk, d(u.value.size) + " file(s) selected", 1),
            t("span", Yk, d(K(Y.value)), 1)
          ]),
          C(Me, {
            variant: "primary",
            disabled: u.value.size === 0 || !te.value,
            onClick: ke
          }, {
            default: g(() => [...ae[12] || (ae[12] = [
              $(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), Qk = /* @__PURE__ */ _e(Jk, [["__scopeId", "data-v-183acebc"]]), Xk = { class: "token-config-modal" }, Zk = { class: "provider-info" }, eb = { class: "provider-icon" }, tb = { class: "provider-name" }, sb = {
  key: 0,
  class: "current-token"
}, ob = { class: "mask" }, nb = { class: "token-input-section" }, ab = { class: "input-label" }, lb = { class: "help-text" }, ib = ["href"], rb = { class: "modal-actions" }, cb = /* @__PURE__ */ he({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: s }) {
    const o = e, a = s, { updateConfig: l } = it(), r = k(""), c = k(!1), u = k(!1), m = N(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), f = N(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), v = N(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), p = N(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), _ = N(
      () => o.provider === "huggingface" ? "Get your HuggingFace token →" : "Get your CivitAI API key →"
    );
    async function h() {
      if (r.value.trim()) {
        c.value = !0;
        try {
          const x = o.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l(x), r.value = "", a("saved"), a("close");
        } catch (x) {
          console.error("Failed to save token:", x);
        } finally {
          c.value = !1;
        }
      }
    }
    async function w() {
      u.value = !0;
      try {
        const x = o.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l(x), a("cleared"), a("close");
      } catch (x) {
        console.error("Failed to clear token:", x);
      } finally {
        u.value = !1;
      }
    }
    return (x, b) => (n(), D($t, {
      title: "Configure API Token",
      onClose: b[2] || (b[2] = (S) => x.$emit("close"))
    }, {
      body: g(() => [
        t("div", Xk, [
          t("div", Zk, [
            t("span", eb, d(f.value), 1),
            t("span", tb, d(m.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", sb, [
            b[4] || (b[4] = t("span", { class: "label" }, "Current token:", -1)),
            t("span", ob, d(e.currentTokenMask), 1),
            C(Me, {
              variant: "danger",
              size: "sm",
              onClick: w,
              loading: u.value
            }, {
              default: g(() => [...b[3] || (b[3] = [
                $(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0),
          t("div", nb, [
            t("label", ab, d(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            C(vt, {
              modelValue: r.value,
              "onUpdate:modelValue": b[0] || (b[0] = (S) => r.value = S),
              type: "password",
              placeholder: v.value
            }, null, 8, ["modelValue", "placeholder"]),
            t("div", lb, [
              t("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, d(_.value), 9, ib)
            ])
          ])
        ])
      ]),
      footer: g(() => [
        t("div", rb, [
          C(Me, {
            variant: "secondary",
            onClick: b[1] || (b[1] = (S) => x.$emit("close"))
          }, {
            default: g(() => [...b[5] || (b[5] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          C(Me, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: c.value,
            onClick: h
          }, {
            default: g(() => [...b[6] || (b[6] = [
              $(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }));
  }
}), ub = /* @__PURE__ */ _e(cb, [["__scopeId", "data-v-0687d0ce"]]), db = { class: "huggingface-tab" }, mb = {
  key: 0,
  class: "search-section"
}, fb = { class: "search-header" }, vb = { class: "search-bar" }, pb = {
  key: 1,
  class: "search-results"
}, gb = {
  key: 0,
  class: "loading-state"
}, hb = {
  key: 1,
  class: "error-state"
}, yb = {
  key: 2,
  class: "results-list"
}, wb = ["onClick"], _b = { class: "repo-header" }, kb = { class: "repo-id" }, bb = { class: "repo-stats" }, $b = {
  class: "stat",
  title: "Downloads"
}, Cb = {
  class: "stat",
  title: "Likes"
}, xb = {
  key: 0,
  class: "repo-desc"
}, Sb = {
  key: 1,
  class: "repo-tags"
}, Ib = {
  key: 3,
  class: "empty-state"
}, Eb = {
  key: 4,
  class: "hint-state"
}, Tb = /* @__PURE__ */ he({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s, getConfig: o } = it(), a = k("search"), l = k(""), r = k([]), c = k(!1), u = k(null), m = k(!1), f = k(null), v = k("main"), p = k(), _ = k(), h = k(!1), w = k(null), x = N(() => {
      if (!u.value) return !1;
      const F = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || F.includes("authentication") || F.includes("unauthorized");
    });
    function b(F) {
      return F >= 1e6 ? `${(F / 1e6).toFixed(1)}M` : F >= 1e3 ? `${(F / 1e3).toFixed(1)}K` : String(F);
    }
    async function S() {
      const F = l.value.trim();
      if (!F) return;
      u.value = null;
      const I = _k(F);
      if (I.kind === "file" && I.repoId && I.path) {
        f.value = I.repoId, v.value = I.revision || "main";
        const L = I.path.split("/");
        L.length > 1 ? p.value = L.slice(0, -1).join("/") : p.value = void 0, _.value = I.path, a.value = "browse";
        return;
      }
      if (I.kind === "repo" && I.repoId) {
        f.value = I.repoId, v.value = I.revision || "main", p.value = I.path, _.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(F) && !F.includes("://")) {
        f.value = F, v.value = "main", p.value = void 0, _.value = void 0, a.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const L = await s(F);
        r.value = L.results, m.value = !0;
      } catch (L) {
        u.value = L instanceof Error ? L.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function A(F) {
      f.value = F, v.value = "main", p.value = void 0, _.value = void 0, a.value = "browse";
    }
    function T() {
      a.value = "search", f.value = null, p.value = void 0, _.value = void 0;
    }
    async function P() {
      try {
        const F = await o();
        w.value = F.huggingface_token || null;
      } catch (F) {
        console.error("Failed to load config:", F);
      }
    }
    function M() {
      P(), x.value && l.value && S();
    }
    function O() {
      w.value = null;
    }
    return at(P), (F, I) => (n(), i("div", db, [
      a.value === "search" ? (n(), i("div", mb, [
        t("div", fb, [
          t("div", vb, [
            C(vt, {
              modelValue: l.value,
              "onUpdate:modelValue": I[0] || (I[0] = (L) => l.value = L),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: as(S, ["enter"])
            }, null, 8, ["modelValue"]),
            C(Me, {
              variant: "primary",
              onClick: S,
              loading: c.value
            }, {
              default: g(() => [...I[5] || (I[5] = [
                $(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          C(Me, {
            variant: "secondary",
            size: "sm",
            onClick: I[1] || (I[1] = (L) => h.value = !0)
          }, {
            default: g(() => [
              $(d(w.value ? `Token: ${w.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      a.value === "search" ? (n(), i("div", pb, [
        c.value ? (n(), i("div", gb, " Searching HuggingFace... ")) : u.value ? (n(), i("div", hb, [
          t("p", null, d(u.value), 1),
          x.value ? (n(), D(Me, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: I[2] || (I[2] = (L) => h.value = !0)
          }, {
            default: g(() => [...I[6] || (I[6] = [
              $(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (n(), i("div", yb, [
          (n(!0), i(j, null, ve(r.value, (L) => (n(), i("div", {
            key: L.repo_id,
            class: "repo-card",
            onClick: (te) => A(L.repo_id)
          }, [
            t("div", _b, [
              t("span", kb, d(L.repo_id), 1),
              t("div", bb, [
                t("span", $b, [
                  I[7] || (I[7] = t("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + d(b(L.downloads)), 1)
                ]),
                t("span", Cb, [
                  I[8] || (I[8] = t("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + d(b(L.likes)), 1)
                ])
              ])
            ]),
            L.description ? (n(), i("p", xb, d(L.description), 1)) : y("", !0),
            L.tags.length > 0 ? (n(), i("div", Sb, [
              (n(!0), i(j, null, ve(L.tags.slice(0, 5), (te) => (n(), i("span", {
                key: te,
                class: "tag"
              }, d(te), 1))), 128))
            ])) : y("", !0)
          ], 8, wb))), 128))
        ])) : m.value ? (n(), i("div", Ib, " No repositories found ")) : (n(), i("div", Eb, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), D(Qk, {
        key: 2,
        "repo-id": f.value,
        revision: v.value,
        "initial-path": p.value,
        "preselected-file": _.value,
        onBack: T,
        onQueue: I[3] || (I[3] = (L) => F.$emit("queue", L))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      h.value ? (n(), D(ub, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": w.value,
        onClose: I[4] || (I[4] = (L) => h.value = !1),
        onSaved: M,
        onCleared: O
      }, null, 8, ["current-token-mask"])) : y("", !0)
    ]));
  }
}), Pb = /* @__PURE__ */ _e(Tb, [["__scopeId", "data-v-e13209bf"]]), Rb = { class: "civitai-tab" }, Mb = /* @__PURE__ */ he({
  __name: "CivitaiTab",
  setup(e) {
    return (s, o) => (n(), i("div", Rb, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), Db = /* @__PURE__ */ _e(Mb, [["__scopeId", "data-v-44948051"]]), Lb = { class: "direct-url-tab" }, Ub = { class: "input-group" }, Nb = { class: "input-group" }, Ob = {
  key: 0,
  class: "error"
}, Ab = { class: "actions" }, zb = /* @__PURE__ */ he({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: s }) {
    const o = s, a = k(""), l = k(""), r = N(() => {
      const m = l.value.trim();
      if (!m) return null;
      const f = m.replace(/\\/g, "/").split("/").pop() || "";
      return f.includes(".") && !f.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), c = N(() => a.value.trim() !== "" && l.value.trim() !== "" && !r.value), u = () => {
      if (!c.value) return;
      const m = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: a.value.trim(),
        targetPath: l.value.trim(),
        filename: m
      }]), a.value = "", l.value = "";
    };
    return (m, f) => (n(), i("div", Lb, [
      t("div", Ub, [
        f[2] || (f[2] = t("label", null, "Download URL", -1)),
        C(vt, {
          modelValue: a.value,
          "onUpdate:modelValue": f[0] || (f[0] = (v) => a.value = v),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", Nb, [
        f[3] || (f[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        C(vt, {
          modelValue: l.value,
          "onUpdate:modelValue": f[1] || (f[1] = (v) => l.value = v),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (n(), i("p", Ob, d(r.value), 1)) : y("", !0)
      ]),
      f[5] || (f[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", Ab, [
        C(Me, {
          variant: "primary",
          disabled: !c.value,
          onClick: u
        }, {
          default: g(() => [...f[4] || (f[4] = [
            $(" Queue Download ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Vb = /* @__PURE__ */ _e(zb, [["__scopeId", "data-v-01def7aa"]]), Fb = { class: "download-modal" }, Bb = { class: "tab-bar" }, Wb = ["onClick"], Gb = { class: "tab-content" }, jb = /* @__PURE__ */ he({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = s, { addToQueue: a } = Oo(), l = [
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
      body: g(() => [
        t("div", Fb, [
          t("div", Bb, [
            (n(), i(j, null, ve(l, (p) => t("button", {
              key: p.id,
              class: De(["tab-btn", { active: r.value === p.id }]),
              onClick: (_) => r.value = p.id
            }, d(p.icon) + " " + d(p.label), 11, Wb)), 64))
          ]),
          t("div", Gb, [
            r.value === "huggingface" ? (n(), D(Pb, {
              key: 0,
              onQueue: c
            })) : r.value === "civitai" ? (n(), D(Db, { key: 1 })) : r.value === "direct" ? (n(), D(Vb, {
              key: 2,
              onQueue: u
            })) : y("", !0)
          ])
        ])
      ]),
      footer: g(() => [
        C(Me, {
          variant: "secondary",
          onClick: m
        }, {
          default: g(() => [...v[0] || (v[0] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), Wr = /* @__PURE__ */ _e(jb, [["__scopeId", "data-v-90a9f401"]]), Hb = /* @__PURE__ */ he({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: a, getStatus: l } = it(), r = k([]), c = k([]), u = k("production"), m = k(!1), f = k(null), v = k(""), p = k(!1), _ = k(null), h = k(!1);
    function w() {
      p.value = !1, o("navigate", "model-index");
    }
    const x = N(
      () => r.value.reduce((I, L) => I + (L.size || 0), 0)
    ), b = N(() => {
      if (!v.value.trim()) return r.value;
      const I = v.value.toLowerCase();
      return r.value.filter((L) => L.filename.toLowerCase().includes(I));
    }), S = N(() => {
      if (!v.value.trim()) return c.value;
      const I = v.value.toLowerCase();
      return c.value.filter((L) => L.filename.toLowerCase().includes(I));
    }), A = N(() => {
      const I = {};
      for (const te of b.value) {
        const Y = te.type || "other";
        I[Y] || (I[Y] = []), I[Y].push(te);
      }
      const L = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(I).sort(([te], [Y]) => {
        const K = L.indexOf(te), H = L.indexOf(Y);
        return K >= 0 && H >= 0 ? K - H : K >= 0 ? -1 : H >= 0 ? 1 : te.localeCompare(Y);
      }).map(([te, Y]) => ({ type: te, models: Y }));
    });
    function T(I) {
      if (!I) return "Unknown";
      const L = I / (1024 * 1024);
      return L >= 1024 ? `${(L / 1024).toFixed(1)} GB` : `${L.toFixed(0)} MB`;
    }
    function P(I) {
      _.value = I.hash || I.filename;
    }
    function M(I) {
      o("navigate", "model-index");
    }
    function O(I) {
      alert(`Download functionality not yet implemented for ${I}`);
    }
    async function F() {
      m.value = !0, f.value = null;
      try {
        const I = await a();
        r.value = I, c.value = [];
        const L = await l();
        u.value = L.environment || "production";
      } catch (I) {
        f.value = I instanceof Error ? I.message : "Failed to load models";
      } finally {
        m.value = !1;
      }
    }
    return at(F), (I, L) => (n(), i(j, null, [
      C(Ht, null, {
        header: g(() => [
          C(Kt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: L[1] || (L[1] = (te) => p.value = !0)
          }, {
            actions: g(() => [
              C(me, {
                variant: "primary",
                size: "sm",
                onClick: L[0] || (L[0] = (te) => h.value = !0)
              }, {
                default: g(() => [...L[6] || (L[6] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    t("path", { d: "M14 14H2v-2h12v2z" })
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
          C(Ao, {
            modelValue: v.value,
            "onUpdate:modelValue": L[2] || (L[2] = (te) => v.value = te),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value ? (n(), D(As, {
            key: 0,
            message: "Loading environment models..."
          })) : f.value ? (n(), D(zs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            r.value.length ? (n(), D(yn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                $(" Total: " + d(r.value.length) + " models • " + d(T(x.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(j, null, ve(A.value, (te) => (n(), D(yt, {
              key: te.type,
              title: te.type.toUpperCase(),
              count: te.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(j, null, ve(te.models, (Y) => (n(), D(Lt, {
                  key: Y.hash || Y.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...L[7] || (L[7] = [
                    $("📦", -1)
                  ])]),
                  title: g(() => [
                    $(d(Y.filename), 1)
                  ]),
                  subtitle: g(() => [
                    $(d(T(Y.size)), 1)
                  ]),
                  details: g(() => [
                    C(kt, {
                      label: "Used by:",
                      value: (Y.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    C(kt, {
                      label: "Path:",
                      value: Y.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => P(Y)
                    }, {
                      default: g(() => [...L[8] || (L[8] = [
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
            S.value.length ? (n(), D(yt, {
              key: 1,
              title: "MISSING",
              count: S.value.length
            }, {
              default: g(() => [
                (n(!0), i(j, null, ve(S.value, (te) => (n(), D(Lt, {
                  key: te.filename,
                  status: "broken"
                }, {
                  icon: g(() => [...L[9] || (L[9] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(d(te.filename), 1)
                  ]),
                  subtitle: g(() => [...L[10] || (L[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: g(() => {
                    var Y;
                    return [
                      C(kt, {
                        label: "Required by:",
                        value: ((Y = te.workflow_names) == null ? void 0 : Y.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: g(() => [
                    C(me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Y) => O(te.filename)
                    }, {
                      default: g(() => [...L[11] || (L[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Y) => M(te.filename)
                    }, {
                      default: g(() => [...L[12] || (L[12] = [
                        $(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !b.value.length && !S.value.length ? (n(), D(hs, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      C(ys, {
        show: p.value,
        title: "About Environment Models",
        onClose: L[3] || (L[3] = (te) => p.value = !1)
      }, {
        content: g(() => [
          t("p", null, [
            L[13] || (L[13] = $(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + d(u.value) + '"', 1),
            L[14] || (L[14] = $(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: g(() => [
          C(me, {
            variant: "primary",
            onClick: w
          }, {
            default: g(() => [...L[15] || (L[15] = [
              $(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (n(), D(gl, {
        key: 0,
        identifier: _.value,
        onClose: L[4] || (L[4] = (te) => _.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      C(Wr, {
        show: h.value,
        onClose: L[5] || (L[5] = (te) => h.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Kb = /* @__PURE__ */ _e(Hb, [["__scopeId", "data-v-af3ca736"]]), qb = {
  key: 0,
  class: "indexing-progress"
}, Yb = { class: "progress-info" }, Jb = { class: "progress-label" }, Qb = { class: "progress-count" }, Xb = { class: "progress-bar" }, Zb = { class: "modal-content" }, e2 = { class: "modal-header" }, t2 = { class: "modal-body" }, s2 = { class: "input-group" }, o2 = { class: "current-path" }, n2 = { class: "input-group" }, a2 = { class: "modal-footer" }, l2 = /* @__PURE__ */ he({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = it(), c = s, u = k([]), m = k(!1), f = k(!1), v = k(null), p = k(""), _ = k(!1), h = k(null), w = k(!1), x = k(null), b = k(""), S = k(!1), A = k(!1), T = k(null), P = N(
      () => u.value.reduce((H, B) => H + (B.size || 0), 0)
    ), M = N(() => {
      if (!p.value.trim()) return u.value;
      const H = p.value.toLowerCase();
      return u.value.filter((B) => {
        const W = B, se = B.sha256 || W.sha256_hash || "";
        return B.filename.toLowerCase().includes(H) || se.toLowerCase().includes(H);
      });
    }), O = N(() => {
      const H = {};
      for (const W of M.value) {
        const se = W.type || "other";
        H[se] || (H[se] = []), H[se].push(W);
      }
      const B = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(H).sort(([W], [se]) => {
        const Ue = B.indexOf(W), ee = B.indexOf(se);
        return Ue >= 0 && ee >= 0 ? Ue - ee : Ue >= 0 ? -1 : ee >= 0 ? 1 : W.localeCompare(se);
      }).map(([W, se]) => ({ type: W, models: se }));
    });
    function F(H) {
      if (!H) return "Unknown";
      const B = 1024 * 1024 * 1024, W = 1024 * 1024;
      return H >= B ? `${(H / B).toFixed(1)} GB` : H >= W ? `${(H / W).toFixed(0)} MB` : `${(H / 1024).toFixed(0)} KB`;
    }
    function I(H) {
      h.value = H.hash || H.filename;
    }
    async function L() {
      f.value = !0, v.value = null;
      try {
        const H = await a();
        await Y(), H.changes > 0 && console.log(`Scan complete: ${H.changes} changes detected`);
      } catch (H) {
        v.value = H instanceof Error ? H.message : "Failed to scan models";
      } finally {
        f.value = !1;
      }
    }
    async function te() {
      if (b.value.trim()) {
        S.value = !0, v.value = null;
        try {
          const H = await r(b.value.trim());
          x.value = H.path, w.value = !1, b.value = "", await Y(), console.log(`Directory changed: ${H.models_indexed} models indexed`), c("refresh");
        } catch (H) {
          v.value = H instanceof Error ? H.message : "Failed to change directory";
        } finally {
          S.value = !1;
        }
      }
    }
    async function Y() {
      m.value = !0, v.value = null;
      try {
        u.value = await o();
      } catch (H) {
        v.value = H instanceof Error ? H.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function K() {
      try {
        const H = await l();
        x.value = H.path;
      } catch {
      }
    }
    return at(() => {
      Y(), K();
    }), (H, B) => (n(), i(j, null, [
      C(Ht, null, {
        header: g(() => [
          C(Kt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: B[2] || (B[2] = (W) => _.value = !0)
          }, {
            actions: g(() => [
              C(me, {
                variant: "primary",
                size: "sm",
                disabled: f.value,
                onClick: L
              }, {
                default: g(() => [
                  $(d(f.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(me, {
                variant: "primary",
                size: "sm",
                onClick: B[0] || (B[0] = (W) => w.value = !0)
              }, {
                default: g(() => [...B[11] || (B[11] = [
                  $(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              C(me, {
                variant: "primary",
                size: "sm",
                onClick: B[1] || (B[1] = (W) => A.value = !0)
              }, {
                default: g(() => [...B[12] || (B[12] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    t("path", { d: "M14 14H2v-2h12v2z" })
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
          T.value ? (n(), i("div", qb, [
            t("div", Yb, [
              t("span", Jb, d(T.value.message), 1),
              t("span", Qb, d(T.value.current) + "/" + d(T.value.total), 1)
            ]),
            t("div", Xb, [
              t("div", {
                class: "progress-fill",
                style: Zt({ width: `${T.value.current / T.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          C(Ao, {
            modelValue: p.value,
            "onUpdate:modelValue": B[3] || (B[3] = (W) => p.value = W),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value || T.value ? (n(), D(As, {
            key: 0,
            message: T.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (n(), D(zs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: Y
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            u.value.length ? (n(), D(yn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                $(" Total: " + d(u.value.length) + " models • " + d(F(P.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(j, null, ve(O.value, (W) => (n(), D(yt, {
              key: W.type,
              title: W.type.toUpperCase(),
              count: W.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: g(() => [
                (n(!0), i(j, null, ve(W.models, (se) => (n(), D(Lt, {
                  key: se.sha256 || se.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...B[13] || (B[13] = [
                    $("📦", -1)
                  ])]),
                  title: g(() => [
                    $(d(se.filename), 1)
                  ]),
                  subtitle: g(() => [
                    $(d(F(se.size)), 1)
                  ]),
                  details: g(() => [
                    C(kt, {
                      label: "Hash:",
                      value: se.hash ? se.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ue) => I(se)
                    }, {
                      default: g(() => [...B[14] || (B[14] = [
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
            M.value.length ? y("", !0) : (n(), D(hs, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      C(ys, {
        show: _.value,
        title: "About Workspace Model Index",
        onClose: B[4] || (B[4] = (W) => _.value = !1)
      }, {
        content: g(() => [...B[15] || (B[15] = [
          t("p", null, [
            $(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            $(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      h.value ? (n(), D(gl, {
        key: 0,
        identifier: h.value,
        onClose: B[5] || (B[5] = (W) => h.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (n(), D(Nt, { to: "body" }, [
        w.value ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: B[9] || (B[9] = bt((W) => w.value = !1, ["self"]))
        }, [
          t("div", Zb, [
            t("div", e2, [
              B[16] || (B[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: B[6] || (B[6] = (W) => w.value = !1)
              }, "✕")
            ]),
            t("div", t2, [
              t("div", s2, [
                B[17] || (B[17] = t("label", null, "Current Directory", -1)),
                t("code", o2, d(x.value || "Not set"), 1)
              ]),
              t("div", n2, [
                B[18] || (B[18] = t("label", null, "New Directory Path", -1)),
                C(vt, {
                  modelValue: b.value,
                  "onUpdate:modelValue": B[7] || (B[7] = (W) => b.value = W),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              B[19] || (B[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", a2, [
              C(Me, {
                variant: "secondary",
                onClick: B[8] || (B[8] = (W) => w.value = !1)
              }, {
                default: g(() => [...B[20] || (B[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              C(Me, {
                variant: "primary",
                disabled: !b.value.trim() || S.value,
                loading: S.value,
                onClick: te
              }, {
                default: g(() => [
                  $(d(S.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      C(Wr, {
        show: A.value,
        onClose: B[10] || (B[10] = (W) => A.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), i2 = /* @__PURE__ */ _e(l2, [["__scopeId", "data-v-3705114c"]]), r2 = { class: "node-details" }, c2 = { class: "status-row" }, u2 = {
  key: 0,
  class: "detail-row"
}, d2 = { class: "value" }, m2 = { class: "detail-row" }, f2 = { class: "value" }, v2 = {
  key: 1,
  class: "detail-row"
}, p2 = { class: "value mono" }, g2 = {
  key: 2,
  class: "detail-row"
}, h2 = ["href"], y2 = {
  key: 3,
  class: "detail-row"
}, w2 = { class: "value mono small" }, _2 = { class: "detail-row" }, k2 = {
  key: 0,
  class: "value"
}, b2 = {
  key: 1,
  class: "workflow-list"
}, $2 = /* @__PURE__ */ he({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = N(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = N(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = N(() => ({
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
      body: g(() => [
        t("div", r2, [
          t("div", c2, [
            m[2] || (m[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: De(["status-badge", l.value])
            }, d(r.value), 3)
          ]),
          e.node.version ? (n(), i("div", u2, [
            m[3] || (m[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", d2, d(e.node.source === "development" ? "" : "v") + d(e.node.version), 1)
          ])) : y("", !0),
          t("div", m2, [
            m[4] || (m[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", f2, d(c.value), 1)
          ]),
          e.node.registry_id ? (n(), i("div", v2, [
            m[5] || (m[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", p2, d(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (n(), i("div", g2, [
            m[7] || (m[7] = t("span", { class: "label" }, "Repository:", -1)),
            t("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              $(d(e.node.repository) + " ", 1),
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
            ], 8, h2)
          ])) : y("", !0),
          e.node.download_url ? (n(), i("div", y2, [
            m[8] || (m[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", w2, d(e.node.download_url), 1)
          ])) : y("", !0),
          m[10] || (m[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", _2, [
            m[9] || (m[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (n(), i("span", k2, " Not used in any workflows ")) : (n(), i("div", b2, [
              (n(!0), i(j, null, ve(e.node.used_in_workflows, (f) => (n(), i("span", {
                key: f,
                class: "workflow-tag"
              }, d(f), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: g(() => [
        C(Me, {
          variant: "secondary",
          onClick: m[0] || (m[0] = (f) => a("close"))
        }, {
          default: g(() => [...m[11] || (m[11] = [
            $(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), C2 = /* @__PURE__ */ _e($2, [["__scopeId", "data-v-b342f626"]]), x2 = { class: "dialog-message" }, S2 = {
  key: 0,
  class: "dialog-details"
}, I2 = {
  key: 1,
  class: "dialog-warning"
}, E2 = /* @__PURE__ */ he({
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
      body: g(() => [
        t("p", x2, d(e.message), 1),
        e.details && e.details.length ? (n(), i("div", S2, [
          (n(!0), i(j, null, ve(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + d(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (n(), i("p", I2, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          $(" " + d(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: g(() => [
        C(Me, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => s.$emit("cancel"))
        }, {
          default: g(() => [
            $(d(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (n(), D(Me, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (a) => s.$emit("secondary"))
        }, {
          default: g(() => [
            $(d(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        C(Me, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
        }, {
          default: g(() => [
            $(d(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), hl = /* @__PURE__ */ _e(E2, [["__scopeId", "data-v-3670b9f5"]]), T2 = { class: "mismatch-warning" }, P2 = { class: "version-mismatch" }, R2 = { class: "version-actual" }, M2 = { class: "version-expected" }, D2 = { style: { color: "var(--cg-color-warning)" } }, L2 = { style: { color: "var(--cg-color-warning)" } }, U2 = {
  key: 0,
  class: "community-status-badge"
}, N2 = { key: 0 }, O2 = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, A2 = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, z2 = /* @__PURE__ */ he({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getNodes: l, trackNodeAsDev: r, installNode: c, uninstallNode: u, queueNodeInstall: m } = it(), f = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), v = k(!1), p = k(null), _ = k(""), h = k(!1), w = k(null), x = k(/* @__PURE__ */ new Set()), b = k(null), S = N(() => {
      if (!_.value.trim()) return f.value.nodes;
      const V = _.value.toLowerCase();
      return f.value.nodes.filter(
        (U) => {
          var oe, Ae;
          return U.name.toLowerCase().includes(V) || ((oe = U.description) == null ? void 0 : oe.toLowerCase().includes(V)) || ((Ae = U.repository) == null ? void 0 : Ae.toLowerCase().includes(V));
        }
      );
    }), A = N(
      () => S.value.filter((V) => V.installed && V.tracked)
    ), T = N(
      () => S.value.filter((V) => !V.installed && V.tracked && !V.issue_type)
    ), P = N(
      () => S.value.filter((V) => V.installed && !V.tracked)
    ), M = N(
      () => S.value.filter((V) => V.issue_type === "version_gated")
    ), O = N(
      () => S.value.filter((V) => V.issue_type === "uninstallable")
    ), F = N(() => M.value.length), I = N(() => O.value.length);
    function L(V) {
      return V.registry_id || V.name;
    }
    function te(V) {
      return x.value.has(L(V));
    }
    async function Y(V, U) {
      const oe = V.registry_id;
      if (!oe) {
        a("toast", `Node "${V.name}" has no package id for install`, "warning");
        return;
      }
      if (U === "git" && !V.repository) {
        a("toast", `Node "${V.name}" has no repository URL for git install`, "warning");
        return;
      }
      const Ae = {
        id: oe,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      U === "git" && V.repository && (Ae.repository = V.repository, Ae.install_source = "git"), await m(Ae), x.value.add(L(V)), a("toast", `✓ Queued install for "${V.name}"`, "success");
    }
    function K(V) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[V] || V;
    }
    const H = N(() => o.versionMismatches.length > 0);
    function B(V) {
      return !V.used_in_workflows || V.used_in_workflows.length === 0 ? "Not used in any workflows" : V.used_in_workflows.length === 1 ? V.used_in_workflows[0] : `${V.used_in_workflows.length} workflows`;
    }
    function W(V) {
      return V.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function se(V) {
      return V.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function Ue(V) {
      return V.registry_id ? `Community-mapped package: ${V.registry_id}` : "Community-mapped package";
    }
    function ee(V) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function ue(V) {
      w.value = V;
    }
    function ne() {
      a("open-node-manager");
    }
    function ie(V) {
      b.value = {
        title: "Track as Development Node",
        message: `Track "${V}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          b.value = null;
          try {
            v.value = !0;
            const U = await r(V);
            U.status === "success" ? (a("toast", `✓ Node "${V}" tracked as development`, "success"), await ae()) : a("toast", `Failed to track node: ${U.message || "Unknown error"}`, "error");
          } catch (U) {
            a("toast", `Error tracking node: ${U instanceof Error ? U.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function ke(V) {
      b.value = {
        title: "Remove Untracked Node",
        message: `Remove "${V}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          b.value = null;
          try {
            v.value = !0;
            const U = await u(V);
            U.status === "success" ? (a("toast", `✓ Node "${V}" removed`, "success"), await ae()) : a("toast", `Failed to remove node: ${U.message || "Unknown error"}`, "error");
          } catch (U) {
            a("toast", `Error removing node: ${U instanceof Error ? U.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function Ee(V) {
      b.value = {
        title: "Install Missing Node",
        message: `Install "${V}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          b.value = null;
          try {
            v.value = !0;
            const U = await c(V);
            U.status === "success" ? (a("toast", `✓ Node "${V}" installed`, "success"), await ae()) : a("toast", `Failed to install node: ${U.message || "Unknown error"}`, "error");
          } catch (U) {
            a("toast", `Error installing node: ${U instanceof Error ? U.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function we(V) {
      b.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${V.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          b.value = null;
          try {
            v.value = !0, await Y(V, "registry");
          } catch (U) {
            a("toast", `Error queueing install: ${U instanceof Error ? U.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function G(V) {
      b.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${V.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          b.value = null;
          try {
            v.value = !0, await Y(V, "git");
          } catch (U) {
            a("toast", `Error queueing git install: ${U instanceof Error ? U.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    async function ae() {
      v.value = !0, p.value = null;
      try {
        f.value = await l();
      } catch (V) {
        p.value = V instanceof Error ? V.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return at(ae), (V, U) => (n(), i(j, null, [
      C(Ht, null, {
        header: g(() => [
          C(Kt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: U[0] || (U[0] = (oe) => h.value = !0)
          }, {
            actions: g(() => [
              C(me, {
                variant: "primary",
                size: "sm",
                onClick: ne
              }, {
                default: g(() => [...U[7] || (U[7] = [
                  $(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          C(Ao, {
            modelValue: _.value,
            "onUpdate:modelValue": U[1] || (U[1] = (oe) => _.value = oe),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          v.value ? (n(), D(As, {
            key: 0,
            message: "Loading nodes..."
          })) : p.value ? (n(), D(zs, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: ae
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            f.value.total_count ? (n(), D(yn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                $(d(f.value.installed_count) + " installed ", 1),
                f.value.missing_count ? (n(), i(j, { key: 0 }, [
                  $(" • " + d(f.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                F.value ? (n(), i(j, { key: 1 }, [
                  $(" • " + d(F.value) + " blocked", 1)
                ], 64)) : y("", !0),
                I.value ? (n(), i(j, { key: 2 }, [
                  $(" • " + d(I.value) + " community-mapped", 1)
                ], 64)) : y("", !0),
                f.value.untracked_count ? (n(), i(j, { key: 3 }, [
                  $(" • " + d(f.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            H.value ? (n(), D(yt, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                t("div", T2, [
                  U[8] || (U[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, d(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(j, null, ve(e.versionMismatches, (oe) => (n(), D(Lt, {
                  key: oe.name,
                  status: "warning"
                }, {
                  icon: g(() => [...U[9] || (U[9] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(d(oe.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", P2, [
                      t("span", R2, d(oe.actual), 1),
                      U[10] || (U[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", M2, d(oe.expected), 1)
                    ])
                  ]),
                  actions: g(() => [
                    C(me, {
                      variant: "warning",
                      size: "sm",
                      onClick: U[2] || (U[2] = (Ae) => a("repair-environment"))
                    }, {
                      default: g(() => [...U[11] || (U[11] = [
                        $(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            M.value.length ? (n(), D(yt, {
              key: 2,
              title: "BLOCKED",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(j, null, ve(M.value, (oe) => (n(), D(Lt, {
                  key: `blocked-${oe.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...U[12] || (U[12] = [
                    $("⛔", -1)
                  ])]),
                  title: g(() => [
                    $(d(oe.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", D2, d(W(oe)), 1)
                  ]),
                  details: g(() => [
                    C(kt, {
                      label: "Guidance:",
                      value: oe.issue_guidance || se(oe)
                    }, null, 8, ["value"]),
                    C(kt, {
                      label: "Used by:",
                      value: B(oe)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ae) => ue(oe)
                    }, {
                      default: g(() => [...U[13] || (U[13] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            O.value.length ? (n(), D(yt, {
              key: 3,
              title: "COMMUNITY-MAPPED",
              count: O.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(j, null, ve(O.value, (oe) => (n(), D(Lt, {
                  key: `community-${oe.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...U[14] || (U[14] = [
                    $("⚠", -1)
                  ])]),
                  title: g(() => [
                    $(d(oe.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", L2, d(Ue(oe)), 1)
                  ]),
                  details: g(() => [
                    C(kt, {
                      label: "Guidance:",
                      value: oe.issue_guidance || ee(oe)
                    }, null, 8, ["value"]),
                    C(kt, {
                      label: "Used by:",
                      value: B(oe)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ae) => ue(oe)
                    }, {
                      default: g(() => [...U[15] || (U[15] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    te(oe) ? (n(), i("span", U2, "Queued")) : (n(), i(j, { key: 1 }, [
                      oe.registry_id ? (n(), D(me, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (Ae) => we(oe)
                      }, {
                        default: g(() => [...U[16] || (U[16] = [
                          $(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      oe.repository ? (n(), D(me, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (Ae) => G(oe)
                      }, {
                        default: g(() => [...U[17] || (U[17] = [
                          $(" Install via Git ", -1)
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
            P.value.length ? (n(), D(yt, {
              key: 4,
              title: "UNTRACKED",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(j, null, ve(P.value, (oe) => (n(), D(Lt, {
                  key: oe.name,
                  status: "warning"
                }, {
                  icon: g(() => [...U[18] || (U[18] = [
                    $("?", -1)
                  ])]),
                  title: g(() => [
                    $(d(oe.name), 1)
                  ]),
                  subtitle: g(() => [...U[19] || (U[19] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: g(() => [
                    C(kt, {
                      label: "Used by:",
                      value: B(oe)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ae) => ue(oe)
                    }, {
                      default: g(() => [...U[20] || (U[20] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ae) => ie(oe.name)
                    }, {
                      default: g(() => [...U[21] || (U[21] = [
                        $(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(me, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Ae) => ke(oe.name)
                    }, {
                      default: g(() => [...U[22] || (U[22] = [
                        $(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            A.value.length ? (n(), D(yt, {
              key: 5,
              title: "INSTALLED",
              count: A.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(j, null, ve(A.value, (oe) => (n(), D(Lt, {
                  key: oe.name,
                  status: "synced"
                }, {
                  icon: g(() => [
                    $(d(oe.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: g(() => [
                    $(d(oe.name), 1)
                  ]),
                  subtitle: g(() => [
                    oe.version ? (n(), i("span", N2, d(oe.source === "development" ? "" : "v") + d(oe.version), 1)) : (n(), i("span", O2, "version unknown")),
                    t("span", A2, " • " + d(K(oe.source)), 1)
                  ]),
                  details: g(() => [
                    C(kt, {
                      label: "Used by:",
                      value: B(oe)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ae) => ue(oe)
                    }, {
                      default: g(() => [...U[23] || (U[23] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: ne
                    }, {
                      default: g(() => [...U[24] || (U[24] = [
                        $(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            T.value.length ? (n(), D(yt, {
              key: 6,
              title: "MISSING",
              count: T.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(j, null, ve(T.value, (oe) => (n(), D(Lt, {
                  key: oe.name,
                  status: "missing"
                }, {
                  icon: g(() => [...U[25] || (U[25] = [
                    $("!", -1)
                  ])]),
                  title: g(() => [
                    $(d(oe.name), 1)
                  ]),
                  subtitle: g(() => [...U[26] || (U[26] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: g(() => [
                    C(kt, {
                      label: "Required by:",
                      value: B(oe)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    C(me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ae) => ue(oe)
                    }, {
                      default: g(() => [...U[27] || (U[27] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    C(me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ae) => Ee(oe.name)
                    }, {
                      default: g(() => [...U[28] || (U[28] = [
                        $(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !A.value.length && !T.value.length && !M.value.length && !O.value.length && !P.value.length ? (n(), D(hs, {
              key: 7,
              icon: "📭",
              message: _.value ? `No nodes match '${_.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      C(ys, {
        show: h.value,
        title: "About Custom Nodes",
        onClose: U[4] || (U[4] = (oe) => h.value = !1)
      }, {
        content: g(() => [...U[29] || (U[29] = [
          t("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Installed:"),
            $(" Tracked nodes available in this environment"),
            t("br"),
            t("strong", null, "Missing:"),
            $(" Tracked nodes that need to be installed"),
            t("br"),
            t("strong", null, "Blocked:"),
            $(" Node types that require newer ComfyUI"),
            t("br"),
            t("strong", null, "Community-Mapped:"),
            $(" Actionable package mappings from community metadata"),
            t("br"),
            t("strong", null, "Untracked:"),
            $(" Nodes on filesystem but not in manifest ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: g(() => [
          C(me, {
            variant: "primary",
            onClick: U[3] || (U[3] = (oe) => h.value = !1)
          }, {
            default: g(() => [...U[30] || (U[30] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), D(C2, {
        key: 0,
        node: w.value,
        onClose: U[5] || (U[5] = (oe) => w.value = null)
      }, null, 8, ["node"])) : y("", !0),
      b.value ? (n(), D(hl, {
        key: 1,
        title: b.value.title,
        message: b.value.message,
        warning: b.value.warning,
        "confirm-label": b.value.confirmLabel,
        destructive: b.value.destructive,
        onConfirm: b.value.onConfirm,
        onCancel: U[6] || (U[6] = (oe) => b.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), V2 = /* @__PURE__ */ _e(z2, [["__scopeId", "data-v-3ef68ac4"]]);
function Gr(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const F2 = { class: "remote-url-display" }, B2 = ["title"], W2 = ["title"], G2 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, j2 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, H2 = /* @__PURE__ */ he({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = k(!1), a = N(() => {
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
    return (r, c) => (n(), i("div", F2, [
      t("span", {
        class: "url-text",
        title: e.url
      }, d(a.value), 9, B2),
      t("button", {
        class: De(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (n(), i("svg", j2, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (n(), i("svg", G2, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, W2)
    ]));
  }
}), K2 = /* @__PURE__ */ _e(H2, [["__scopeId", "data-v-7768a58d"]]), q2 = { class: "remote-title" }, Y2 = {
  key: 0,
  class: "default-badge"
}, J2 = {
  key: 1,
  class: "sync-badge"
}, Q2 = {
  key: 0,
  class: "ahead"
}, X2 = {
  key: 1,
  class: "behind"
}, Z2 = {
  key: 1,
  class: "synced"
}, e$ = ["href"], t$ = {
  key: 1,
  class: "remote-url-text"
}, s$ = /* @__PURE__ */ he({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = N(() => s.fetchingRemote === s.remote.name), a = N(() => s.remote.is_default), l = N(() => s.syncStatus && s.syncStatus.behind > 0), r = N(() => s.syncStatus && s.syncStatus.ahead > 0), c = N(() => s.remote.push_url !== s.remote.fetch_url), u = N(() => {
      const f = s.remote.fetch_url, v = f.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : f.startsWith("https://") || f.startsWith("http://") ? f.replace(/\.git$/, "") : null;
    }), m = N(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (f, v) => (n(), D(Lt, {
      status: a.value ? "synced" : void 0
    }, mo({
      icon: g(() => [
        $(d(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: g(() => [
        t("div", q2, [
          t("span", null, d(e.remote.name), 1),
          a.value ? (n(), i("span", Y2, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", J2, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", Q2, "↑" + d(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", X2, "↓" + d(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", Z2, "✓ synced"))
          ])) : y("", !0)
        ])
      ]),
      subtitle: g(() => [
        u.value ? (n(), i("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: v[0] || (v[0] = bt(() => {
          }, ["stop"]))
        }, d(m.value), 9, e$)) : (n(), i("span", t$, d(m.value), 1))
      ]),
      actions: g(() => [
        C(me, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: v[1] || (v[1] = (p) => f.$emit("fetch", e.remote.name))
        }, {
          default: g(() => [...v[6] || (v[6] = [
            $(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        C(me, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[2] || (v[2] = (p) => f.$emit("pull", e.remote.name))
        }, {
          default: g(() => [
            $(" Pull" + d(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        C(me, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[3] || (v[3] = (p) => f.$emit("push", e.remote.name))
        }, {
          default: g(() => [
            $(" Push" + d(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        C(me, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (p) => f.$emit("edit", e.remote.name))
        }, {
          default: g(() => [...v[7] || (v[7] = [
            $(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? y("", !0) : (n(), D(me, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[5] || (v[5] = (p) => f.$emit("remove", e.remote.name))
        }, {
          default: g(() => [...v[8] || (v[8] = [
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
          e.remote.push_url !== e.remote.fetch_url ? (n(), D(kt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: g(() => [
              C(K2, {
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
}), o$ = /* @__PURE__ */ _e(s$, [["__scopeId", "data-v-8310f3a8"]]), n$ = { class: "remote-form" }, a$ = { class: "form-header" }, l$ = { class: "form-body" }, i$ = {
  key: 0,
  class: "form-error"
}, r$ = { class: "form-actions" }, c$ = /* @__PURE__ */ he({
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
    xt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = N(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
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
    return (f, v) => (n(), i("div", n$, [
      t("div", a$, [
        C(Jt, null, {
          default: g(() => [
            $(d(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", l$, [
        C(Pt, {
          label: "Remote Name",
          required: ""
        }, {
          default: g(() => [
            C(vt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (p) => l.value.name = p),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        C(Pt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: g(() => [
            C(vt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (p) => l.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        C(Pt, { label: "Push URL (optional)" }, {
          default: g(() => [
            C(vt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (n(), i("div", i$, d(c.value), 1)) : y("", !0)
      ]),
      t("div", r$, [
        C(me, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: r.value,
          onClick: m
        }, {
          default: g(() => [
            $(d(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        C(me, {
          variant: "ghost",
          size: "md",
          onClick: v[3] || (v[3] = (p) => f.$emit("cancel"))
        }, {
          default: g(() => [...v[4] || (v[4] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), u$ = /* @__PURE__ */ _e(c$, [["__scopeId", "data-v-56021b18"]]), d$ = { class: "conflict-summary-box" }, m$ = { class: "summary-header" }, f$ = { class: "summary-text" }, v$ = { key: 0 }, p$ = {
  key: 1,
  class: "all-resolved"
}, g$ = { class: "summary-progress" }, h$ = { class: "progress-bar" }, y$ = { class: "progress-text" }, w$ = /* @__PURE__ */ he({
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
    return (a, l) => (n(), i("div", d$, [
      t("div", m$, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", f$, [
          t("strong", null, d(e.conflictCount) + " conflict" + d(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (n(), i("p", v$, " Resolve all conflicts before " + d(e.operationType) + "ing ", 1)) : (n(), i("p", p$, " All conflicts resolved - ready to " + d(e.operationType), 1))
        ])
      ]),
      t("div", g$, [
        t("div", h$, [
          t("div", {
            class: "progress-fill",
            style: Zt({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", y$, d(e.resolvedCount) + " / " + d(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), _$ = /* @__PURE__ */ _e(w$, [["__scopeId", "data-v-4e9e6cc9"]]), k$ = { class: "modal-header" }, b$ = { class: "modal-title" }, $$ = { class: "modal-body" }, C$ = {
  key: 0,
  class: "error-box"
}, x$ = {
  key: 0,
  class: "error-hint"
}, S$ = {
  key: 1,
  class: "loading-state"
}, I$ = { class: "commit-summary" }, E$ = {
  key: 0,
  class: "commits-section"
}, T$ = { class: "commit-list" }, P$ = { class: "commit-hash" }, R$ = { class: "commit-message" }, M$ = { class: "commit-date" }, D$ = {
  key: 1,
  class: "changes-section"
}, L$ = {
  key: 0,
  class: "change-group",
  open: ""
}, U$ = { class: "change-count" }, N$ = { class: "change-list" }, O$ = {
  key: 0,
  class: "conflict-badge"
}, A$ = {
  key: 1,
  class: "change-group"
}, z$ = { class: "change-count" }, V$ = { class: "change-list" }, F$ = {
  key: 2,
  class: "change-group"
}, B$ = { class: "change-count" }, W$ = { class: "change-list" }, G$ = {
  key: 3,
  class: "strategy-section"
}, j$ = { class: "radio-group" }, H$ = { class: "radio-option" }, K$ = { class: "radio-option" }, q$ = { class: "radio-option" }, Y$ = {
  key: 4,
  class: "up-to-date"
}, J$ = { class: "modal-actions" }, di = "comfygit.pullModelStrategy", Q$ = /* @__PURE__ */ he({
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
    const o = e, a = s, l = k(localStorage.getItem(di) || "skip");
    xt(l, (b) => {
      localStorage.setItem(di, b);
    });
    const r = N(() => {
      var b;
      return ((b = o.error) == null ? void 0 : b.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = N(() => {
      if (!o.preview) return 0;
      const b = o.preview.changes.workflows;
      return b.added.length + b.modified.length + b.deleted.length;
    }), u = N(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), m = N(() => {
      var b;
      return c.value > 0 || u.value > 0 || (((b = o.preview) == null ? void 0 : b.changes.models.count) || 0) > 0;
    }), f = N(() => o.preview && Gr(o.preview) ? o.preview : null), v = N(() => {
      var b;
      return ((b = f.value) == null ? void 0 : b.workflow_conflicts.length) ?? 0;
    }), p = N(() => {
      var b;
      return ((b = o.conflictResolutions) == null ? void 0 : b.size) ?? 0;
    }), _ = N(
      () => v.value > 0 && p.value === v.value
    ), h = N(() => !(!o.preview || o.preview.has_uncommitted_changes || f.value && !_.value));
    function w(b) {
      if (!f.value) return !1;
      const S = b.replace(/\.json$/, "");
      return f.value.workflow_conflicts.some((A) => A.name === S);
    }
    function x(b) {
      const S = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: b, resolutions: S });
    }
    return (b, S) => {
      var A, T;
      return n(), D(Nt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[11] || (S[11] = (P) => b.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: S[10] || (S[10] = bt(() => {
            }, ["stop"]))
          }, [
            t("div", k$, [
              t("h3", b$, "PULL FROM " + d(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: S[0] || (S[0] = (P) => b.$emit("close"))
              }, "✕")
            ]),
            t("div", $$, [
              e.error ? (n(), i("div", C$, [
                S[13] || (S[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  S[12] || (S[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, d(e.error), 1),
                  r.value ? (n(), i("p", x$, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (n(), i("div", S$, [...S[14] || (S[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (A = e.preview) != null && A.has_uncommitted_changes ? (n(), i(j, { key: 2 }, [
                S[15] || (S[15] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "UNCOMMITTED CHANGES"),
                    t("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                S[16] || (S[16] = t("div", { class: "options-section" }, [
                  t("p", null, [
                    t("strong", null, "Options:")
                  ]),
                  t("ul", null, [
                    t("li", null, "Commit your changes first (recommended)"),
                    t("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (n(), i(j, { key: 3 }, [
                t("div", I$, [
                  S[17] || (S[17] = t("span", { class: "icon" }, "📥", -1)),
                  $(" " + d(e.preview.commits_behind) + " commit" + d(e.preview.commits_behind !== 1 ? "s" : "") + " from " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", E$, [
                  S[18] || (S[18] = t("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  t("div", T$, [
                    (n(!0), i(j, null, ve(e.preview.commits, (P) => (n(), i("div", {
                      key: P.hash,
                      class: "commit-item"
                    }, [
                      t("span", P$, d(P.short_hash || P.hash.slice(0, 7)), 1),
                      t("span", R$, d(P.message), 1),
                      t("span", M$, d(P.date_relative || P.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                m.value ? (n(), i("div", D$, [
                  S[22] || (S[22] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (n(), i("details", L$, [
                    t("summary", null, [
                      S[19] || (S[19] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", U$, d(c.value) + " changes", 1)
                    ]),
                    t("div", N$, [
                      (n(!0), i(j, null, ve(e.preview.changes.workflows.added, (P) => (n(), i("div", {
                        key: "a-" + P,
                        class: "change-item add"
                      }, " + " + d(P), 1))), 128)),
                      (n(!0), i(j, null, ve(e.preview.changes.workflows.modified, (P) => (n(), i("div", {
                        key: "m-" + P,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + d(P) + " ", 1),
                        w(P) ? (n(), i("span", O$, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (n(!0), i(j, null, ve(e.preview.changes.workflows.deleted, (P) => (n(), i("div", {
                        key: "d-" + P,
                        class: "change-item delete"
                      }, " - " + d(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (n(), i("details", A$, [
                    t("summary", null, [
                      S[20] || (S[20] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", z$, d(u.value) + " to install", 1)
                    ]),
                    t("div", V$, [
                      (n(!0), i(j, null, ve(e.preview.changes.nodes.to_install, (P) => (n(), i("div", {
                        key: P,
                        class: "change-item add"
                      }, " + " + d(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", F$, [
                    t("summary", null, [
                      S[21] || (S[21] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", B$, d(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", W$, [
                      (n(!0), i(j, null, ve(e.preview.changes.models.referenced, (P) => (n(), i("div", {
                        key: P,
                        class: "change-item"
                      }, d(P), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                f.value ? (n(), D(_$, {
                  key: 2,
                  "conflict-count": v.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", G$, [
                  S[27] || (S[27] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", j$, [
                    t("label", H$, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[1] || (S[1] = (P) => l.value = P),
                        value: "all"
                      }, null, 512), [
                        [ms, l.value]
                      ]),
                      S[23] || (S[23] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", K$, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (P) => l.value = P),
                        value: "required"
                      }, null, 512), [
                        [ms, l.value]
                      ]),
                      S[24] || (S[24] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", q$, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[3] || (S[3] = (P) => l.value = P),
                        value: "skip"
                      }, null, 512), [
                        [ms, l.value]
                      ]),
                      S[25] || (S[25] = t("span", null, "Skip model downloads", -1)),
                      S[26] || (S[26] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  S[28] || (S[28] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (n(), i("div", Y$, [
                  S[29] || (S[29] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Already up to date with " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", J$, [
              C(me, {
                variant: "secondary",
                onClick: S[4] || (S[4] = (P) => b.$emit("close"))
              }, {
                default: g(() => [...S[30] || (S[30] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (n(), i(j, { key: 0 }, [
                C(me, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: S[5] || (S[5] = (P) => x(!1))
                }, {
                  default: g(() => [...S[31] || (S[31] = [
                    $(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                C(me, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: S[6] || (S[6] = (P) => x(!0))
                }, {
                  default: g(() => [...S[32] || (S[32] = [
                    $(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (T = e.preview) != null && T.has_uncommitted_changes ? (n(), D(me, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: S[7] || (S[7] = (P) => x(!0))
              }, {
                default: g(() => [...S[33] || (S[33] = [
                  $(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (n(), i(j, { key: 2 }, [
                f.value && !_.value ? (n(), D(me, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (P) => a("openConflictResolution"))
                }, {
                  default: g(() => [
                    $(" Resolve Conflicts (" + d(p.value) + "/" + d(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (n(), D(me, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !h.value,
                  onClick: S[9] || (S[9] = (P) => x(!1))
                }, {
                  default: g(() => [...S[34] || (S[34] = [
                    $(" Pull Changes ", -1)
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
}), X$ = /* @__PURE__ */ _e(Q$, [["__scopeId", "data-v-1d633bba"]]), Z$ = { class: "modal-header" }, eC = { class: "modal-title" }, tC = { class: "modal-body" }, sC = {
  key: 0,
  class: "loading-state"
}, oC = {
  key: 1,
  class: "warning-box"
}, nC = {
  key: 0,
  class: "commits-section"
}, aC = { class: "commit-list" }, lC = { class: "commit-hash" }, iC = { class: "commit-message" }, rC = { class: "commit-date" }, cC = { class: "force-option" }, uC = { class: "checkbox-option" }, dC = { class: "commit-summary" }, mC = { key: 0 }, fC = { key: 1 }, vC = {
  key: 0,
  class: "info-box"
}, pC = {
  key: 1,
  class: "commits-section"
}, gC = { class: "commit-list" }, hC = { class: "commit-hash" }, yC = { class: "commit-message" }, wC = { class: "commit-date" }, _C = {
  key: 2,
  class: "up-to-date"
}, kC = { class: "modal-actions" }, bC = /* @__PURE__ */ he({
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
      return n(), D(Nt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: c[7] || (c[7] = (v) => r.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: c[6] || (c[6] = bt(() => {
            }, ["stop"]))
          }, [
            t("div", Z$, [
              t("h3", eC, "PUSH TO " + d(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (v) => r.$emit("close"))
              }, "✕")
            ]),
            t("div", tC, [
              e.loading ? (n(), i("div", sC, [...c[8] || (c[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (n(), i("div", oC, [...c[9] || (c[9] = [
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
                e.preview.commits_ahead > 0 ? (n(), i("div", nC, [
                  c[10] || (c[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", aC, [
                    (n(!0), i(j, null, ve(e.preview.commits, (v) => (n(), i("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", lC, d(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", iC, d(v.message), 1),
                      t("span", rC, d(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", cC, [
                  t("label", uC, [
                    nt(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": c[1] || (c[1] = (v) => a.value = v)
                    }, null, 512), [
                      [mn, a.value]
                    ]),
                    c[11] || (c[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  c[12] || (c[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (n(), i(j, { key: 3 }, [
                t("div", dC, [
                  c[14] || (c[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (n(), i("span", mC, " Creating " + d(e.preview.remote) + "/" + d(e.preview.branch) + " with " + d(e.preview.commits_ahead) + " commit" + d(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (n(), i("span", fC, " Pushing " + d(e.preview.commits_ahead) + " commit" + d(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + d(e.preview.remote) + "/" + d(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (n(), i("div", vC, [...c[15] || (c[15] = [
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
                e.preview.commits_ahead > 0 ? (n(), i("div", pC, [
                  c[16] || (c[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", gC, [
                    (n(!0), i(j, null, ve(e.preview.commits, (v) => (n(), i("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", hC, d(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", yC, d(v.message), 1),
                      t("span", wC, d(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (n(), i("div", _C, [
                  c[17] || (c[17] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Nothing to push - already up to date with " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", kC, [
              C(me, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (v) => r.$emit("close"))
              }, {
                default: g(() => [...c[18] || (c[18] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (f = e.preview) != null && f.remote_has_new_commits ? (n(), i(j, { key: 0 }, [
                C(me, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (v) => r.$emit("pull-first"))
                }, {
                  default: g(() => [...c[19] || (c[19] = [
                    $(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                C(me, {
                  variant: "destructive",
                  disabled: !a.value,
                  loading: e.pushing,
                  onClick: c[4] || (c[4] = (v) => l(!0))
                }, {
                  default: g(() => [...c[20] || (c[20] = [
                    $(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (n(), D(me, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: c[5] || (c[5] = (v) => l(!1))
              }, {
                default: g(() => [...c[21] || (c[21] = [
                  $(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : y("", !0)
            ])
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), $C = /* @__PURE__ */ _e(bC, [["__scopeId", "data-v-3c2e35ab"]]), CC = { class: "resolution-choice-group" }, xC = ["disabled"], SC = ["disabled"], IC = /* @__PURE__ */ he({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("div", CC, [
      t("button", {
        class: De(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, xC),
      t("button", {
        class: De(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, SC)
    ]));
  }
}), EC = /* @__PURE__ */ _e(IC, [["__scopeId", "data-v-985715ed"]]), TC = { class: "conflict-header" }, PC = { class: "conflict-info" }, RC = { class: "workflow-name" }, MC = { class: "conflict-description" }, DC = {
  key: 0,
  class: "resolved-badge"
}, LC = { class: "resolved-text" }, UC = { class: "conflict-hashes" }, NC = { class: "hash-item" }, OC = { class: "hash-item" }, AC = { class: "conflict-actions" }, zC = /* @__PURE__ */ he({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = k(o.resolution);
    xt(() => o.resolution, (m) => {
      l.value = m;
    }), xt(l, (m) => {
      m && a("resolve", m);
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
    return (m, f) => {
      var v, p;
      return n(), i("div", {
        class: De(["conflict-item", { resolved: r.value }])
      }, [
        t("div", TC, [
          f[2] || (f[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", PC, [
            t("code", RC, d(e.conflict.name) + ".json", 1),
            t("div", MC, d(c.value), 1)
          ]),
          r.value ? (n(), i("div", DC, [
            f[1] || (f[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", LC, d(u.value), 1)
          ])) : y("", !0)
        ]),
        t("div", UC, [
          t("span", NC, [
            f[3] || (f[3] = $("Your: ", -1)),
            t("code", null, d(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", OC, [
            f[4] || (f[4] = $("Theirs: ", -1)),
            t("code", null, d(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", AC, [
          C(EC, {
            modelValue: l.value,
            "onUpdate:modelValue": f[0] || (f[0] = (_) => l.value = _),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), VC = /* @__PURE__ */ _e(zC, [["__scopeId", "data-v-506d3bbf"]]), FC = { class: "resolution-content" }, BC = {
  key: 0,
  class: "error-box"
}, WC = { class: "resolution-header" }, GC = { class: "header-stats" }, jC = { class: "stat" }, HC = { class: "stat-value" }, KC = { class: "stat resolved" }, qC = { class: "stat-value" }, YC = {
  key: 0,
  class: "stat pending"
}, JC = { class: "stat-value" }, QC = { class: "conflicts-list" }, XC = {
  key: 1,
  class: "all-resolved-message"
}, ZC = /* @__PURE__ */ he({
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
    const o = e, a = s, l = N(() => o.resolutions.size), r = N(() => o.workflowConflicts.length - l.value), c = N(() => l.value === o.workflowConflicts.length), u = N(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function m(_) {
      const h = o.resolutions.get(_);
      return (h == null ? void 0 : h.resolution) ?? null;
    }
    function f(_, h) {
      a("resolve", _, h);
    }
    function v() {
      a("close");
    }
    function p() {
      a("apply");
    }
    return (_, h) => (n(), D($t, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: g(() => [
        t("div", FC, [
          e.error ? (n(), i("div", BC, [
            h[1] || (h[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              h[0] || (h[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, d(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", WC, [
            t("div", GC, [
              t("div", jC, [
                t("span", HC, d(e.workflowConflicts.length), 1),
                h[2] || (h[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", KC, [
                t("span", qC, d(l.value), 1),
                h[3] || (h[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (n(), i("div", YC, [
                t("span", JC, d(r.value), 1),
                h[4] || (h[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            h[5] || (h[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", QC, [
            (n(!0), i(j, null, ve(e.workflowConflicts, (w) => (n(), D(VC, {
              key: w.name,
              conflict: w,
              resolution: m(w.name),
              onResolve: (x) => f(w.name, x)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (n(), i("div", XC, [
            h[6] || (h[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + d(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        C(Me, {
          variant: "secondary",
          onClick: v
        }, {
          default: g(() => [...h[7] || (h[7] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        h[8] || (h[8] = t("div", { class: "footer-spacer" }, null, -1)),
        C(Me, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: p
        }, {
          default: g(() => [
            $(d(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), e3 = /* @__PURE__ */ _e(ZC, [["__scopeId", "data-v-c58d150d"]]), t3 = { class: "node-conflict-item" }, s3 = { class: "node-header" }, o3 = { class: "node-name" }, n3 = { class: "node-id" }, a3 = { class: "version-comparison" }, l3 = { class: "version yours" }, i3 = { class: "version theirs" }, r3 = { class: "chosen-version" }, c3 = { class: "chosen" }, u3 = { class: "chosen-reason" }, d3 = { class: "affected-workflows" }, m3 = { class: "wf-source" }, f3 = { class: "wf-version" }, v3 = /* @__PURE__ */ he({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", t3, [
      t("div", s3, [
        t("code", o3, d(e.conflict.node_name), 1),
        t("span", n3, "(" + d(e.conflict.node_id) + ")", 1)
      ]),
      t("div", a3, [
        t("div", l3, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, d(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", i3, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, d(e.conflict.target_version), 1)
        ])
      ]),
      t("div", r3, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", c3, d(e.conflict.chosen_version), 1),
        t("span", u3, d(e.conflict.chosen_reason), 1)
      ]),
      t("details", d3, [
        t("summary", null, " Affected workflows (" + d(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (n(!0), i(j, null, ve(e.conflict.affected_workflows, (a) => (n(), i("li", {
            key: a.name
          }, [
            t("code", null, d(a.name), 1),
            t("span", m3, "(" + d(a.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", f3, "needs v" + d(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), p3 = /* @__PURE__ */ _e(v3, [["__scopeId", "data-v-8b626725"]]), g3 = { class: "validation-content" }, h3 = {
  key: 0,
  class: "compatible-message"
}, y3 = { class: "conflicts-list" }, w3 = {
  key: 2,
  class: "warnings-section"
}, _3 = /* @__PURE__ */ he({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = N(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (n(), D($t, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => a("cancel"))
    }, {
      body: g(() => [
        t("div", g3, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (n(), i("div", h3, [
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
            t("div", y3, [
              (n(!0), i(j, null, ve(e.validation.node_conflicts, (u) => (n(), D(p3, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (n(), i("div", w3, [
            c[8] || (c[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (n(!0), i(j, null, ve(e.validation.warnings, (u, m) => (n(), i("li", { key: m }, d(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        C(Me, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => a("cancel"))
        }, {
          default: g(() => [...c[9] || (c[9] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        C(Me, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => a("goBack"))
        }, {
          default: g(() => [...c[10] || (c[10] = [
            $(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        C(Me, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => a("proceed"))
        }, {
          default: g(() => [
            $(d(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), k3 = /* @__PURE__ */ _e(_3, [["__scopeId", "data-v-fefd26ed"]]), b3 = { key: 0 }, $3 = /* @__PURE__ */ he({
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
      validateMerge: h
    } = it(), w = k([]), x = k(null), b = k({}), S = k(!1), A = k(null), T = k(""), P = k(!1), M = k(null), O = k(!1), F = k("add"), I = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), L = N(() => {
      if (!T.value.trim()) return w.value;
      const Ce = T.value.toLowerCase();
      return w.value.filter(
        (Ne) => Ne.name.toLowerCase().includes(Ce) || Ne.fetch_url.toLowerCase().includes(Ce) || Ne.push_url.toLowerCase().includes(Ce)
      );
    });
    async function te() {
      S.value = !0, A.value = null;
      try {
        const Ce = await a();
        w.value = Ce.remotes, x.value = Ce.current_branch_tracking || null, await Promise.all(
          Ce.remotes.map(async (Ne) => {
            const Pe = await m(Ne.name);
            Pe && (b.value[Ne.name] = Pe);
          })
        );
      } catch (Ce) {
        A.value = Ce instanceof Error ? Ce.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function Y() {
      F.value = "add", I.value = { name: "", fetchUrl: "", pushUrl: "" }, O.value = !0;
    }
    function K(Ce) {
      const Ne = w.value.find((Pe) => Pe.name === Ce);
      Ne && (F.value = "edit", I.value = {
        name: Ne.name,
        fetchUrl: Ne.fetch_url,
        pushUrl: Ne.push_url
      }, O.value = !0);
    }
    async function H(Ce) {
      try {
        F.value === "add" ? await l(Ce.name, Ce.fetchUrl) : await c(Ce.name, Ce.fetchUrl, Ce.pushUrl || void 0), O.value = !1, await te();
      } catch (Ne) {
        A.value = Ne instanceof Error ? Ne.message : "Operation failed";
      }
    }
    function B() {
      O.value = !1, I.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function W(Ce) {
      M.value = Ce;
      try {
        await u(Ce);
        const Ne = await m(Ce);
        Ne && (b.value[Ce] = Ne), o("toast", `✓ Fetched from ${Ce}`, "success");
      } catch (Ne) {
        o("toast", Ne instanceof Error ? Ne.message : "Fetch failed", "error");
      } finally {
        M.value = null;
      }
    }
    async function se(Ce) {
      if (confirm(`Remove remote "${Ce}"?`))
        try {
          await r(Ce), await te();
        } catch (Ne) {
          A.value = Ne instanceof Error ? Ne.message : "Failed to remove remote";
        }
    }
    function Ue() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const ee = k("idle"), ue = N(() => ee.value === "pull_preview"), ne = N(
      () => ee.value === "resolving" || ee.value === "validating"
    ), ie = N(
      () => ee.value === "validation_review" || ee.value === "executing"
    ), ke = k(!1), Ee = k(null), we = k(!1), G = k(null), ae = k(!1), V = k(null), U = k(null), oe = k(/* @__PURE__ */ new Map()), Ae = k(null), ze = k(null), z = N(() => V.value && Gr(V.value) ? V.value : null);
    async function J(Ce) {
      G.value = Ce, ee.value = "pull_preview", ae.value = !0, V.value = null, U.value = null;
      try {
        V.value = await f(Ce);
      } catch (Ne) {
        U.value = Ne instanceof Error ? Ne.message : "Failed to load pull preview";
      } finally {
        ae.value = !1;
      }
    }
    function re() {
      ee.value = "idle", V.value = null, U.value = null, G.value = null;
    }
    async function Ie(Ce) {
      if (!G.value) return;
      ee.value = "executing", U.value = null;
      const Ne = G.value;
      try {
        const Pe = await v(Ne, Ce);
        if (Pe.rolled_back) {
          U.value = `Pull failed and was rolled back: ${Pe.error || "Unknown error"}`, ee.value = "pull_preview";
          return;
        }
        Oe(), ee.value = "idle", o("toast", `✓ Pulled from ${Ne}`, "success"), await te();
      } catch (Pe) {
        U.value = Pe instanceof Error ? Pe.message : "Pull failed", ee.value = "pull_preview";
      }
    }
    function be() {
      z.value && (ee.value = "resolving", ze.value = null);
    }
    function $e(Ce, Ne) {
      oe.value.set(Ce, { name: Ce, resolution: Ne });
    }
    function Le() {
      ee.value = "pull_preview";
    }
    async function ye() {
      ee.value = "validating", ze.value = null;
      try {
        const Ce = Array.from(oe.value.values());
        Ae.value = await h(G.value, Ce), ee.value = "validation_review";
      } catch (Ce) {
        ze.value = Ce instanceof Error ? Ce.message : "Validation failed", ee.value = "resolving";
      }
    }
    async function Re() {
      ee.value = "executing";
      const Ce = G.value;
      try {
        const Ne = Array.from(oe.value.values()), Pe = await v(Ce, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Ne
        });
        if (Pe.rolled_back) {
          U.value = `Pull failed and was rolled back: ${Pe.error || "Unknown error"}`, ee.value = "pull_preview";
          return;
        }
        Oe(), ee.value = "idle", o("toast", `✓ Pulled from ${Ce}`, "success"), await te();
      } catch (Ne) {
        U.value = Ne instanceof Error ? Ne.message : "Pull failed", ee.value = "validation_review";
      }
    }
    function fe() {
      ee.value = "resolving";
    }
    function je() {
      Oe(), ee.value = "idle";
    }
    function Oe() {
      oe.value.clear(), Ae.value = null, ze.value = null, U.value = null, V.value = null, G.value = null;
    }
    async function pe(Ce) {
      G.value = Ce, ke.value = !0, ae.value = !0, Ee.value = null;
      try {
        Ee.value = await p(Ce);
      } catch (Ne) {
        A.value = Ne instanceof Error ? Ne.message : "Failed to load push preview";
      } finally {
        ae.value = !1;
      }
    }
    function q() {
      ke.value = !1, Ee.value = null, G.value = null;
    }
    async function Ve(Ce) {
      if (!G.value) return;
      we.value = !0;
      const Ne = G.value;
      try {
        await _(Ne, Ce), q(), o("toast", `✓ Pushed to ${Ne}`, "success"), await te();
      } catch (Pe) {
        o("toast", Pe instanceof Error ? Pe.message : "Push failed", "error");
      } finally {
        we.value = !1;
      }
    }
    function Se() {
      const Ce = G.value;
      q(), Ce && J(Ce);
    }
    return at(te), (Ce, Ne) => (n(), i(j, null, [
      C(Ht, null, {
        header: g(() => [
          C(Kt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Ne[0] || (Ne[0] = (Pe) => P.value = !0)
          }, {
            actions: g(() => [
              O.value ? y("", !0) : (n(), D(me, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: Y
              }, {
                default: g(() => [...Ne[3] || (Ne[3] = [
                  $(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          O.value ? y("", !0) : (n(), D(Ao, {
            key: 0,
            modelValue: T.value,
            "onUpdate:modelValue": Ne[1] || (Ne[1] = (Pe) => T.value = Pe),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: g(() => [
          S.value ? (n(), D(As, {
            key: 0,
            message: "Loading remotes..."
          })) : A.value ? (n(), D(zs, {
            key: 1,
            message: A.value,
            retry: !0,
            onRetry: te
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            O.value ? (n(), D(u$, {
              key: 0,
              mode: F.value,
              "remote-name": I.value.name,
              "fetch-url": I.value.fetchUrl,
              "push-url": I.value.pushUrl,
              onSubmit: H,
              onCancel: B
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            w.value.length && !O.value ? (n(), D(yn, {
              key: 1,
              variant: "compact"
            }, {
              default: g(() => [
                $(" Total: " + d(w.value.length) + " remote" + d(w.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (n(), i("span", b3, " • Tracking: " + d(x.value.remote) + "/" + d(x.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            L.value.length && !O.value ? (n(), D(yt, {
              key: 2,
              title: "REMOTES",
              count: L.value.length
            }, {
              default: g(() => [
                (n(!0), i(j, null, ve(L.value, (Pe) => (n(), D(o$, {
                  key: Pe.name,
                  remote: Pe,
                  "sync-status": b.value[Pe.name],
                  "fetching-remote": M.value,
                  onFetch: W,
                  onEdit: K,
                  onRemove: se,
                  onPull: J,
                  onPush: pe
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !L.value.length && !O.value ? (n(), D(hs, {
              key: 3,
              icon: "🌐",
              message: T.value ? `No remotes match '${T.value}'` : "No remotes configured."
            }, {
              actions: g(() => [
                C(me, {
                  variant: "primary",
                  onClick: Y
                }, {
                  default: g(() => [...Ne[4] || (Ne[4] = [
                    $(" Add Your First Remote ", -1)
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
      C(ys, {
        show: P.value,
        title: "About Git Remotes",
        onClose: Ne[2] || (Ne[2] = (Pe) => P.value = !1)
      }, {
        content: g(() => [...Ne[5] || (Ne[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            $(" The "),
            t("strong", null, '"origin"'),
            $(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: g(() => [
          C(me, {
            variant: "link",
            onClick: Ue
          }, {
            default: g(() => [...Ne[6] || (Ne[6] = [
              $(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      C(X$, {
        show: ue.value,
        "remote-name": G.value || "",
        preview: V.value,
        loading: ae.value,
        pulling: ee.value === "executing",
        error: U.value,
        "conflict-resolutions": oe.value,
        onClose: re,
        onPull: Ie,
        onOpenConflictResolution: be
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      C($C, {
        show: ke.value,
        "remote-name": G.value || "",
        preview: Ee.value,
        loading: ae.value,
        pushing: we.value,
        onClose: q,
        onPush: Ve,
        onPullFirst: Se
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ne.value && z.value ? (n(), D(e3, {
        key: 0,
        "workflow-conflicts": z.value.workflow_conflicts,
        resolutions: oe.value,
        "operation-type": "pull",
        validating: ee.value === "validating",
        error: ze.value,
        onClose: Le,
        onResolve: $e,
        onApply: ye
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      ie.value && Ae.value ? (n(), D(k3, {
        key: 1,
        validation: Ae.value,
        "operation-type": "pull",
        executing: ee.value === "executing",
        onProceed: Re,
        onGoBack: fe,
        onCancel: je
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), C3 = /* @__PURE__ */ _e($3, [["__scopeId", "data-v-9ae3b76d"]]), x3 = { class: "setting-info" }, S3 = { class: "setting-label" }, I3 = {
  key: 0,
  class: "required-marker"
}, E3 = {
  key: 0,
  class: "setting-description"
}, T3 = { class: "setting-control" }, P3 = /* @__PURE__ */ he({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: De(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", x3, [
        t("div", S3, [
          $(d(e.label) + " ", 1),
          e.required ? (n(), i("span", I3, "*")) : y("", !0)
        ]),
        e.description ? (n(), i("div", E3, d(e.description), 1)) : y("", !0)
      ]),
      t("div", T3, [
        ot(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), Fo = /* @__PURE__ */ _e(P3, [["__scopeId", "data-v-cb5d236c"]]), R3 = { class: "toggle" }, M3 = ["checked", "disabled"], D3 = /* @__PURE__ */ he({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", R3, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, M3),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), mi = /* @__PURE__ */ _e(D3, [["__scopeId", "data-v-71c0f550"]]), L3 = { class: "workspace-settings-content" }, U3 = { class: "settings-section" }, N3 = { class: "path-setting" }, O3 = { class: "path-value" }, A3 = { class: "path-setting" }, z3 = { class: "path-value" }, V3 = { class: "settings-section" }, F3 = { class: "settings-section" }, B3 = { class: "settings-section" }, W3 = /* @__PURE__ */ he({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: c } = it(), u = k(!1), m = k(null), f = k(null), v = k(null), p = k(null), _ = k(""), h = k(""), w = k(""), x = k(!1), b = k(!1), S = k(!1), A = k(!0);
    function T(Y) {
      return Y.join(" ");
    }
    function P(Y) {
      return Y.trim() ? Y.trim().split(/\s+/) : [];
    }
    const M = N(() => {
      if (!p.value) return !1;
      const Y = x.value, K = b.value, H = w.value !== T(p.value.comfyui_extra_args || []);
      return Y || K || H;
    });
    async function O() {
      u.value = !0, m.value = null;
      try {
        v.value = await r(a.workspacePath || void 0), p.value = { ...v.value }, _.value = v.value.civitai_api_key || "", h.value = v.value.huggingface_token || "", w.value = T(v.value.comfyui_extra_args || []), x.value = !1, b.value = !1;
        const Y = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        S.value = Y !== "false", A.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
      } catch (Y) {
        m.value = Y instanceof Error ? Y.message : "Failed to load settings";
      } finally {
        u.value = !1;
      }
    }
    async function F() {
      var Y;
      f.value = null;
      try {
        const K = {};
        x.value && (K.civitai_api_key = _.value || null), b.value && (K.huggingface_token = h.value || null), w.value !== T(((Y = p.value) == null ? void 0 : Y.comfyui_extra_args) || []) && (K.comfyui_extra_args = P(w.value)), await c(K, a.workspacePath || void 0), await O(), f.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          f.value = null;
        }, 3e3);
      } catch (K) {
        const H = K instanceof Error ? K.message : "Failed to save settings";
        f.value = { type: "error", message: H }, l("error", H);
      }
    }
    function I() {
      p.value && (_.value = p.value.civitai_api_key || "", h.value = p.value.huggingface_token || "", w.value = T(p.value.comfyui_extra_args || []), x.value = !1, b.value = !1, f.value = null);
    }
    function L(Y) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(Y)), console.log("[ComfyGit] Auto-refresh setting saved:", Y);
    }
    function te(Y) {
      Y ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", Y ? "enabled" : "disabled");
    }
    return s({
      saveSettings: F,
      resetSettings: I,
      hasChanges: M,
      loadSettings: O
    }), at(O), (Y, K) => (n(), i("div", L3, [
      u.value ? (n(), D(As, {
        key: 0,
        message: "Loading workspace settings..."
      })) : m.value ? (n(), D(zs, {
        key: 1,
        message: m.value,
        retry: !0,
        onRetry: O
      }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
        C(yt, { title: "WORKSPACE PATHS" }, {
          default: g(() => {
            var H, B;
            return [
              t("div", U3, [
                t("div", N3, [
                  K[7] || (K[7] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  K[8] || (K[8] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", O3, d(((H = v.value) == null ? void 0 : H.workspace_path) || "Loading..."), 1)
                ]),
                t("div", A3, [
                  K[9] || (K[9] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  K[10] || (K[10] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", z3, d(((B = v.value) == null ? void 0 : B.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        C(yt, { title: "API CREDENTIALS" }, {
          default: g(() => [
            t("div", V3, [
              C(Fo, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: g(() => [
                  C(tn, {
                    modelValue: _.value,
                    "onUpdate:modelValue": K[0] || (K[0] = (H) => _.value = H),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: K[1] || (K[1] = (H) => x.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              C(Fo, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: g(() => [
                  C(tn, {
                    modelValue: h.value,
                    "onUpdate:modelValue": K[2] || (K[2] = (H) => h.value = H),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: K[3] || (K[3] = (H) => b.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        C(yt, { title: "COMFYUI SETTINGS" }, {
          default: g(() => [
            t("div", F3, [
              C(Fo, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: g(() => [
                  C(tn, {
                    modelValue: w.value,
                    "onUpdate:modelValue": K[4] || (K[4] = (H) => w.value = H),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              K[11] || (K[11] = t("div", { class: "setting-hint" }, [
                $(" Common flags: "),
                t("code", null, "--lowvram"),
                $(", "),
                t("code", null, "--highvram"),
                $(", "),
                t("code", null, "--listen 0.0.0.0"),
                $(", "),
                t("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        C(yt, { title: "UI SETTINGS" }, {
          default: g(() => [
            t("div", B3, [
              C(Fo, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: g(() => [
                  C(mi, {
                    modelValue: S.value,
                    "onUpdate:modelValue": [
                      K[5] || (K[5] = (H) => S.value = H),
                      L
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              C(Fo, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: g(() => [
                  C(mi, {
                    modelValue: A.value,
                    "onUpdate:modelValue": [
                      K[6] || (K[6] = (H) => A.value = H),
                      te
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        f.value ? (n(), D(yn, {
          key: 0,
          variant: (f.value.type === "success", "compact")
        }, {
          default: g(() => [
            t("span", {
              style: Zt({ color: f.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, d(f.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), jr = /* @__PURE__ */ _e(W3, [["__scopeId", "data-v-9c5b427b"]]), G3 = /* @__PURE__ */ he({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (n(), D(Ht, null, {
      header: g(() => [
        C(Kt, { title: "WORKSPACE SETTINGS" }, {
          actions: g(() => {
            var r, c;
            return [
              C(me, {
                variant: "primary",
                size: "sm",
                disabled: !((r = s.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (u) => {
                  var m;
                  return (m = s.value) == null ? void 0 : m.saveSettings();
                })
              }, {
                default: g(() => [...l[2] || (l[2] = [
                  $(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = s.value) != null && c.hasChanges ? (n(), D(me, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var m;
                  return (m = s.value) == null ? void 0 : m.resetSettings();
                })
              }, {
                default: g(() => [...l[3] || (l[3] = [
                  $(" Reset ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: g(() => [
        C(jr, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), j3 = { class: "base-tabs" }, H3 = ["disabled", "onClick"], K3 = {
  key: 0,
  class: "base-tabs__badge"
}, q3 = /* @__PURE__ */ he({
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
    return (r, c) => (n(), i("div", j3, [
      (n(!0), i(j, null, ve(e.tabs, (u) => (n(), i("button", {
        key: u.id,
        class: De([
          "base-tabs__tab",
          {
            active: e.modelValue === u.id,
            disabled: u.disabled
          }
        ]),
        disabled: u.disabled,
        onClick: (m) => l(u.id)
      }, [
        $(d(u.label) + " ", 1),
        u.badge ? (n(), i("span", K3, d(u.badge), 1)) : y("", !0)
      ], 10, H3))), 128))
    ]));
  }
}), Hr = /* @__PURE__ */ _e(q3, [["__scopeId", "data-v-ad5e6cad"]]), Y3 = { class: "log-viewer-wrapper" }, J3 = ["disabled", "title"], Q3 = /* @__PURE__ */ he({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = k(null), a = k("idle"), l = N(() => s.logs.map((f) => ({
      text: s.rawFormat || !f.timestamp ? f.message : `${f.timestamp} - ${f.name} - ${f.level} - ${f.func}:${f.line} - ${f.message}`,
      level: f.level
    })));
    async function r() {
      var v;
      await Rt();
      const f = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      f && (f.scrollTop = f.scrollHeight);
    }
    at(r), xt(() => s.logs, r);
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
    return (f, v) => (n(), i("div", Y3, [
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
        }, d(a.value === "copied" ? "Copied!" : "Copy"), 9, J3),
        (n(!0), i(j, null, ve(l.value, (p, _) => (n(), i("div", {
          key: _,
          class: De(`log-line log-level-${p.level.toLowerCase()}`)
        }, d(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), Kr = /* @__PURE__ */ _e(Q3, [["__scopeId", "data-v-c0cc6d21"]]), X3 = /* @__PURE__ */ he({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = it(), c = k("workspace"), u = k([]), m = k(!1), f = k(null), v = k(!1), p = k(null), _ = k(null), h = k(!1), w = N(() => c.value === "workspace" ? p.value : _.value);
    async function x() {
      m.value = !0, f.value = null;
      try {
        c.value === "workspace" ? u.value = await s(void 0, 500) : u.value = await a(void 0, 500);
      } catch (A) {
        f.value = A instanceof Error ? A.message : `Failed to load ${c.value} logs`;
      } finally {
        m.value = !1;
      }
    }
    async function b() {
      try {
        const [A, T] = await Promise.all([
          o(),
          l()
        ]);
        A.exists && (p.value = A.path), T.exists && (_.value = T.path);
      } catch {
      }
    }
    async function S() {
      if (w.value) {
        h.value = !0;
        try {
          await r(w.value);
        } catch (A) {
          console.error("Failed to open log file:", A);
        } finally {
          h.value = !1;
        }
      }
    }
    return xt(c, () => {
      x();
    }), at(() => {
      x(), b();
    }), (A, T) => (n(), i(j, null, [
      C(Ht, null, {
        header: g(() => [
          C(Kt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (P) => v.value = !0)
          }, {
            actions: g(() => [
              C(me, {
                variant: "secondary",
                size: "sm",
                onClick: S,
                disabled: !w.value || h.value,
                title: "Open log file in default editor"
              }, {
                default: g(() => [
                  $(d(h.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(me, {
                variant: "secondary",
                size: "sm",
                onClick: x,
                disabled: m.value
              }, {
                default: g(() => [
                  $(d(m.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          C(Hr, {
            modelValue: c.value,
            "onUpdate:modelValue": T[1] || (T[1] = (P) => c.value = P),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value ? (n(), D(As, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : f.value ? (n(), D(zs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            u.value.length === 0 ? (n(), D(hs, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (n(), D(Kr, {
              key: 1,
              logs: u.value,
              "raw-format": c.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      C(ys, {
        show: v.value,
        title: "About Logs",
        onClose: T[3] || (T[3] = (P) => v.value = !1)
      }, {
        content: g(() => [...T[4] || (T[4] = [
          t("p", null, [
            t("strong", null, "Workspace Logs:"),
            $(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Orchestrator Logs:"),
            $(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            $(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            $(" Potential issues or deprecated features"),
            t("br"),
            t("strong", null, "INFO:"),
            $(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            $(" Detailed debugging information ")
          ], -1)
        ])]),
        actions: g(() => [
          C(me, {
            variant: "primary",
            onClick: T[2] || (T[2] = (P) => v.value = !1)
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
}), Z3 = /* @__PURE__ */ he({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: a, openFile: l } = it(), r = k([]), c = k(!1), u = k(null), m = k(!1), f = k("production"), v = k(null), p = k(!1);
    async function _() {
      c.value = !0, u.value = null;
      try {
        r.value = await s(void 0, 500);
        try {
          const x = await o();
          f.value = x.environment || "production";
        } catch {
        }
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function h() {
      try {
        const x = await a();
        x.exists && (v.value = x.path);
      } catch {
      }
    }
    async function w() {
      if (v.value) {
        p.value = !0;
        try {
          await l(v.value);
        } catch (x) {
          console.error("Failed to open log file:", x);
        } finally {
          p.value = !1;
        }
      }
    }
    return at(() => {
      _(), h();
    }), (x, b) => (n(), i(j, null, [
      C(Ht, null, {
        header: g(() => [
          C(Kt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (S) => m.value = !0)
          }, {
            actions: g(() => [
              C(me, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: !v.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: g(() => [
                  $(d(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              C(me, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: c.value
              }, {
                default: g(() => [
                  $(d(c.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: g(() => [
          c.value ? (n(), D(As, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (n(), D(zs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            r.value.length === 0 ? (n(), D(hs, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (n(), D(Kr, {
              key: 1,
              logs: r.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      C(ys, {
        show: m.value,
        title: "About Environment Logs",
        onClose: b[2] || (b[2] = (S) => m.value = !1)
      }, {
        content: g(() => [
          t("p", null, [
            b[3] || (b[3] = $(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, d(f.value), 1),
            b[4] || (b[4] = $(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          b[5] || (b[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            $(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            $(" Potential issues or important notices"),
            t("br"),
            t("strong", null, "INFO:"),
            $(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            $(" Detailed debugging information ")
          ], -1))
        ]),
        actions: g(() => [
          C(me, {
            variant: "primary",
            onClick: b[1] || (b[1] = (S) => m.value = !1)
          }, {
            default: g(() => [...b[6] || (b[6] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ex = { class: "env-title" }, tx = {
  key: 0,
  class: "current-badge"
}, sx = {
  key: 0,
  class: "branch-info"
}, ox = /* @__PURE__ */ he({
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
    return (s, o) => (n(), D(Lt, {
      status: e.isCurrent ? "synced" : void 0
    }, mo({
      icon: g(() => [
        $(d(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: g(() => [
        t("div", ex, [
          t("span", null, d(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (n(), i("span", tx, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: g(() => [
        e.currentBranch ? (n(), i("span", sx, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          $(" " + d(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: g(() => [
        ot(s.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: g(() => [
          C(kt, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          C(kt, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          C(kt, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (n(), D(kt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), nx = /* @__PURE__ */ _e(ox, [["__scopeId", "data-v-9231917a"]]), ax = { class: "env-details" }, lx = { class: "status-row" }, ix = {
  key: 0,
  class: "detail-row"
}, rx = { class: "value mono" }, cx = {
  key: 1,
  class: "detail-row"
}, ux = { class: "value mono small" }, dx = { class: "collapsible-section" }, mx = { class: "value" }, fx = {
  key: 0,
  class: "collapsible-body"
}, vx = { class: "item-list" }, px = { class: "item-name" }, gx = { class: "item-name" }, hx = { class: "item-name" }, yx = { class: "item-name" }, wx = {
  key: 0,
  class: "empty-list"
}, _x = { class: "collapsible-section" }, kx = { class: "value" }, bx = {
  key: 0,
  class: "collapsible-body"
}, $x = { class: "item-list" }, Cx = { class: "item-name" }, xx = {
  key: 0,
  class: "item-meta"
}, Sx = {
  key: 0,
  class: "empty-list"
}, Ix = { class: "collapsible-section" }, Ex = { class: "value" }, Tx = {
  key: 0,
  class: "missing-count"
}, Px = {
  key: 0,
  class: "collapsible-body"
}, Rx = { class: "item-list" }, Mx = { class: "model-row" }, Dx = { class: "item-name" }, Lx = { class: "model-meta" }, Ux = { class: "item-meta" }, Nx = {
  key: 0,
  class: "item-meta"
}, Ox = {
  key: 0,
  class: "empty-list"
}, Ax = {
  key: 2,
  class: "section-divider"
}, zx = {
  key: 3,
  class: "detail-row"
}, Vx = { class: "value" }, Fx = { class: "footer-actions" }, Bx = /* @__PURE__ */ he({
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
    const c = N(() => {
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
      body: g(() => {
        var v, p, _, h, w, x, b, S, A, T, P, M, O, F;
        return [
          t("div", ax, [
            t("div", lx, [
              f[6] || (f[6] = t("span", { class: "label" }, "Status:", -1)),
              t("span", {
                class: De(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, d(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (n(), i("div", ix, [
              f[7] || (f[7] = t("span", { class: "label" }, "Branch:", -1)),
              t("span", rx, d(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (n(), i("div", cx, [
              f[8] || (f[8] = t("span", { class: "label" }, "Path:", -1)),
              t("span", ux, d(e.environment.path), 1)
            ])) : y("", !0),
            f[17] || (f[17] = t("div", { class: "section-divider" }, null, -1)),
            t("div", dx, [
              t("div", {
                class: "collapsible-header",
                onClick: f[0] || (f[0] = (I) => r("workflows"))
              }, [
                f[9] || (f[9] = t("span", { class: "label" }, "Workflows:", -1)),
                t("span", mx, d(((v = e.detail) == null ? void 0 : v.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (n(), i("span", {
                  key: 0,
                  class: De(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (_ = e.detail) != null && _.workflows && l.value.has("workflows") ? (n(), i("div", fx, [
                t("div", vx, [
                  (n(!0), i(j, null, ve(e.detail.workflows.synced, (I) => (n(), i("div", {
                    key: "synced-" + I,
                    class: "list-item"
                  }, [
                    t("span", px, d(I), 1),
                    f[10] || (f[10] = t("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(j, null, ve(e.detail.workflows.new, (I) => (n(), i("div", {
                    key: "new-" + I,
                    class: "list-item"
                  }, [
                    t("span", gx, d(I), 1),
                    f[11] || (f[11] = t("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(j, null, ve(e.detail.workflows.modified, (I) => (n(), i("div", {
                    key: "mod-" + I,
                    class: "list-item"
                  }, [
                    t("span", hx, d(I), 1),
                    f[12] || (f[12] = t("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(j, null, ve(e.detail.workflows.deleted, (I) => (n(), i("div", {
                    key: "del-" + I,
                    class: "list-item"
                  }, [
                    t("span", yx, d(I), 1),
                    f[13] || (f[13] = t("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (n(), i("div", wx, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            t("div", _x, [
              t("div", {
                class: "collapsible-header",
                onClick: f[1] || (f[1] = (I) => r("nodes"))
              }, [
                f[14] || (f[14] = t("span", { class: "label" }, "Nodes:", -1)),
                t("span", kx, d(((h = e.detail) == null ? void 0 : h.node_count) ?? e.environment.node_count), 1),
                (w = e.detail) != null && w.nodes ? (n(), i("span", {
                  key: 0,
                  class: De(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (x = e.detail) != null && x.nodes && l.value.has("nodes") ? (n(), i("div", bx, [
                t("div", $x, [
                  (n(!0), i(j, null, ve(e.detail.nodes, (I) => (n(), i("div", {
                    key: I.name,
                    class: "list-item"
                  }, [
                    t("span", Cx, d(I.name), 1),
                    I.version ? (n(), i("span", xx, d(I.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (n(), i("div", Sx, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            t("div", Ix, [
              t("div", {
                class: "collapsible-header",
                onClick: f[2] || (f[2] = (I) => r("models"))
              }, [
                f[15] || (f[15] = t("span", { class: "label" }, "Models:", -1)),
                t("span", Ex, [
                  $(d(((b = e.detail) == null ? void 0 : b.model_count) ?? e.environment.model_count) + " ", 1),
                  (A = (S = e.detail) == null ? void 0 : S.models) != null && A.missing.length ? (n(), i("span", Tx, "(" + d(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (T = e.detail) != null && T.models ? (n(), i("span", {
                  key: 0,
                  class: De(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (P = e.detail) != null && P.models && l.value.has("models") ? (n(), i("div", Px, [
                t("div", Rx, [
                  (n(!0), i(j, null, ve(e.detail.models.missing, (I) => (n(), i("div", {
                    key: I.filename,
                    class: "list-item model-item"
                  }, [
                    t("div", Mx, [
                      t("span", Dx, d(I.filename), 1),
                      t("span", {
                        class: De(["criticality-badge", I.criticality])
                      }, d(I.criticality), 3)
                    ]),
                    t("div", Lx, [
                      t("span", Ux, d(I.category), 1),
                      I.workflow_names.length ? (n(), i("span", Nx, " used by: " + d(I.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (n(), i("div", Ox, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (M = e.detail) != null && M.created_at || e.environment.created_at ? (n(), i("div", Ax)) : y("", !0),
            (O = e.detail) != null && O.created_at || e.environment.created_at ? (n(), i("div", zx, [
              f[16] || (f[16] = t("span", { class: "label" }, "Created:", -1)),
              t("span", Vx, d(u(((F = e.detail) == null ? void 0 : F.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: g(() => [
        t("div", Fx, [
          e.canDelete ? (n(), D(Me, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: f[3] || (f[3] = (v) => a("delete", e.environment.name))
          }, {
            default: g(() => [...f[18] || (f[18] = [
              $(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          f[20] || (f[20] = t("div", { class: "footer-spacer" }, null, -1)),
          C(Me, {
            variant: "secondary",
            size: "sm",
            onClick: f[4] || (f[4] = (v) => a("close"))
          }, {
            default: g(() => [...f[19] || (f[19] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Wx = /* @__PURE__ */ _e(Bx, [["__scopeId", "data-v-92e68b76"]]), qr = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Yr = "3.12", yl = [
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
], Jr = "auto", Gx = { class: "progress-bar" }, jx = /* @__PURE__ */ he({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = N(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (a, l) => (n(), i("div", Gx, [
      t("div", {
        class: De(["progress-fill", e.variant]),
        style: Zt({ width: o.value })
      }, null, 6)
    ]));
  }
}), ma = /* @__PURE__ */ _e(jx, [["__scopeId", "data-v-1beb0512"]]), Hx = { class: "task-progress" }, Kx = { class: "progress-info" }, qx = { class: "progress-percentage" }, Yx = { class: "progress-message" }, Jx = {
  key: 0,
  class: "progress-steps"
}, Qx = { class: "step-icon" }, Xx = { class: "step-label" }, Zx = /* @__PURE__ */ he({
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
    return (l, r) => (n(), i("div", Hx, [
      C(ma, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", Kx, [
        t("span", qx, d(e.progress) + "%", 1),
        t("span", Yx, d(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (n(), i("div", Jx, [
        (n(!0), i(j, null, ve(e.steps, (c) => (n(), i("div", {
          key: c.id,
          class: De(["step", o(c.id)])
        }, [
          t("span", Qx, d(a(c.id)), 1),
          t("span", Xx, d(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Jn = /* @__PURE__ */ _e(Zx, [["__scopeId", "data-v-9d1de66c"]]), e5 = {
  key: 0,
  class: "create-env-form"
}, t5 = { class: "form-field" }, s5 = { class: "input-wrapper" }, o5 = {
  key: 0,
  class: "validating-indicator"
}, n5 = {
  key: 1,
  class: "valid-indicator"
}, a5 = {
  key: 0,
  class: "field-error"
}, l5 = { class: "form-field" }, i5 = ["value"], r5 = { class: "form-field" }, c5 = ["disabled"], u5 = ["value"], d5 = { class: "form-field" }, m5 = ["value"], f5 = { class: "form-field form-field--checkbox" }, v5 = { class: "form-checkbox" }, p5 = {
  key: 1,
  class: "create-env-progress"
}, g5 = { class: "creating-intro" }, h5 = {
  key: 0,
  class: "progress-warning"
}, y5 = {
  key: 1,
  class: "create-error"
}, w5 = { class: "error-message" }, _5 = {
  key: 1,
  class: "footer-status"
}, k5 = 10, b5 = /* @__PURE__ */ he({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = it(), u = k(""), m = k(Yr), f = k("latest"), v = k(Jr), p = k(!1), _ = k(null), h = k(!1), w = k(!1);
    let x = null, b = 0;
    const S = N(() => !!u.value.trim() && w.value && !_.value && !h.value && !P.value), A = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), T = k(!1), P = k(!1), M = k({
      progress: 0,
      message: ""
    });
    let O = null, F = 0;
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
    ], L = k(null);
    xt(u, (ee) => {
      w.value = !1, x && (clearTimeout(x), x = null);
      const ue = ee.trim();
      if (!ue) {
        _.value = null, h.value = !1;
        return;
      }
      h.value = !0, x = setTimeout(() => {
        te(ue);
      }, 400);
    });
    async function te(ee, ue = !1) {
      const ne = ee.trim();
      if (!ne)
        return w.value = !1, h.value = !1, _.value = ue ? "Environment name is required" : null, !1;
      const ie = ++b;
      h.value = !0;
      try {
        const ke = await c(ne);
        return ie !== b ? !1 : (_.value = ke.valid ? null : ke.error || "Invalid name", w.value = !!ke.valid, !!ke.valid);
      } catch {
        return ie !== b || (_.value = "Failed to validate name", w.value = !1), !1;
      } finally {
        ie === b && (h.value = !1);
      }
    }
    async function Y() {
      x && (clearTimeout(x), x = null), await te(u.value, !0);
    }
    function K() {
      P.value || o("close");
    }
    async function H() {
      const ee = u.value.trim();
      if (!ee) {
        _.value = "Environment name is required";
        return;
      }
      if (x && (clearTimeout(x), x = null), !!await te(ee, !0)) {
        P.value = !0, M.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const ne = {
            name: ee,
            python_version: m.value,
            comfyui_version: f.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, ie = await l(ne);
          ie.status === "started" ? B() : ie.status === "error" && (M.value = {
            progress: 0,
            message: ie.message || "Failed to start creation",
            error: ie.message
          });
        } catch (ne) {
          M.value = {
            progress: 0,
            message: ne instanceof Error ? ne.message : "Unknown error",
            error: ne instanceof Error ? ne.message : "Unknown error"
          };
        }
      }
    }
    function B() {
      O || (F = 0, O = window.setInterval(async () => {
        try {
          const ee = await r();
          F = 0, M.value = {
            progress: ee.progress ?? 0,
            message: ee.message,
            phase: ee.phase,
            error: ee.error
          }, ee.state === "complete" ? (W(), o("created", ee.environment_name || u.value.trim(), p.value)) : ee.state === "error" ? (W(), M.value.error = ee.error || ee.message) : ee.state === "idle" && P.value && (W(), M.value.error = "Creation was interrupted. Please try again.");
        } catch {
          F++, F >= k5 && (W(), M.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function W() {
      O && (clearInterval(O), O = null);
    }
    function se() {
      P.value = !1, M.value = { progress: 0, message: "" }, o("close");
    }
    async function Ue() {
      T.value = !0;
      try {
        A.value = await a();
      } catch (ee) {
        console.error("Failed to load ComfyUI releases:", ee);
      } finally {
        T.value = !1;
      }
    }
    return at(async () => {
      var ee;
      await Rt(), (ee = L.value) == null || ee.focus(), Ue();
    }), Qs(() => {
      W(), x && (clearTimeout(x), x = null);
    }), (ee, ue) => (n(), D($t, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !P.value,
      onClose: K
    }, {
      body: g(() => [
        P.value ? (n(), i("div", p5, [
          t("p", g5, [
            ue[12] || (ue[12] = $(" Creating environment ", -1)),
            t("strong", null, d(u.value), 1),
            ue[13] || (ue[13] = $("... ", -1))
          ]),
          C(Jn, {
            progress: M.value.progress,
            message: M.value.message,
            "current-phase": M.value.phase,
            variant: M.value.error ? "error" : "default",
            "show-steps": !0,
            steps: I
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          M.value.error ? y("", !0) : (n(), i("p", h5, " This may take several minutes. Please wait... ")),
          M.value.error ? (n(), i("div", y5, [
            t("p", w5, d(M.value.error), 1)
          ])) : y("", !0)
        ])) : (n(), i("div", e5, [
          t("div", t5, [
            ue[6] || (ue[6] = t("label", { class: "form-label" }, "Name", -1)),
            t("div", s5, [
              nt(t("input", {
                ref_key: "nameInput",
                ref: L,
                "onUpdate:modelValue": ue[0] || (ue[0] = (ne) => u.value = ne),
                type: "text",
                class: De(["form-input", { error: !!_.value, valid: w.value }]),
                placeholder: "my-environment",
                onKeyup: as(H, ["enter"]),
                onBlur: Y
              }, null, 34), [
                [Xt, u.value]
              ]),
              h.value ? (n(), i("span", o5, "...")) : w.value ? (n(), i("span", n5, "✓")) : y("", !0)
            ]),
            _.value ? (n(), i("div", a5, d(_.value), 1)) : y("", !0),
            ue[7] || (ue[7] = t("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          t("div", l5, [
            ue[8] || (ue[8] = t("label", { class: "form-label" }, "Python Version", -1)),
            nt(t("select", {
              "onUpdate:modelValue": ue[1] || (ue[1] = (ne) => m.value = ne),
              class: "form-select"
            }, [
              (n(!0), i(j, null, ve(Xe(qr), (ne) => (n(), i("option", {
                key: ne,
                value: ne
              }, d(ne), 9, i5))), 128))
            ], 512), [
              [Is, m.value]
            ])
          ]),
          t("div", r5, [
            ue[9] || (ue[9] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            nt(t("select", {
              "onUpdate:modelValue": ue[2] || (ue[2] = (ne) => f.value = ne),
              class: "form-select",
              disabled: T.value
            }, [
              (n(!0), i(j, null, ve(A.value, (ne) => (n(), i("option", {
                key: ne.tag_name,
                value: ne.tag_name
              }, d(ne.name), 9, u5))), 128))
            ], 8, c5), [
              [Is, f.value]
            ])
          ]),
          t("div", d5, [
            ue[10] || (ue[10] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            nt(t("select", {
              "onUpdate:modelValue": ue[3] || (ue[3] = (ne) => v.value = ne),
              class: "form-select"
            }, [
              (n(!0), i(j, null, ve(Xe(yl), (ne) => (n(), i("option", {
                key: ne,
                value: ne
              }, d(ne) + d(ne === "auto" ? " (detect GPU)" : ""), 9, m5))), 128))
            ], 512), [
              [Is, v.value]
            ])
          ]),
          t("div", f5, [
            t("label", v5, [
              nt(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": ue[4] || (ue[4] = (ne) => p.value = ne)
              }, null, 512), [
                [mn, p.value]
              ]),
              ue[11] || (ue[11] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: g(() => [
        P.value ? (n(), i(j, { key: 1 }, [
          M.value.error ? (n(), D(Me, {
            key: 0,
            variant: "secondary",
            onClick: se
          }, {
            default: g(() => [...ue[16] || (ue[16] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", _5, " Creating environment... "))
        ], 64)) : (n(), i(j, { key: 0 }, [
          C(Me, {
            variant: "primary",
            disabled: !S.value,
            onClick: H
          }, {
            default: g(() => [...ue[14] || (ue[14] = [
              $(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Me, {
            variant: "secondary",
            onClick: ue[5] || (ue[5] = (ne) => o("close"))
          }, {
            default: g(() => [...ue[15] || (ue[15] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), $5 = /* @__PURE__ */ _e(b5, [["__scopeId", "data-v-3faa3d9b"]]), C5 = /* @__PURE__ */ he({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = it(), c = k([]), u = k(!1), m = k(null), f = k(""), v = k(!1), p = k(!1), _ = k(null), h = k(null), w = N(() => {
      if (!f.value.trim()) return c.value;
      const P = f.value.toLowerCase();
      return c.value.filter(
        (M) => {
          var O;
          return M.name.toLowerCase().includes(P) || ((O = M.current_branch) == null ? void 0 : O.toLowerCase().includes(P));
        }
      );
    });
    function x(P, M) {
      p.value = !1, a("created", P, M);
    }
    function b() {
      p.value = !0;
    }
    async function S(P) {
      _.value = P, h.value = null;
      const M = await r(P.name);
      M && (h.value = M);
    }
    function A(P) {
      _.value = null, h.value = null, a("delete", P);
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
      openCreateModal: b
    }), (P, M) => (n(), i(j, null, [
      C(Ht, null, {
        header: g(() => [
          C(Kt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (O) => v.value = !0)
          }, {
            actions: g(() => [
              C(me, {
                variant: "primary",
                size: "sm",
                onClick: b
              }, {
                default: g(() => [...M[6] || (M[6] = [
                  $(" Create ", -1)
                ])]),
                _: 1
              }),
              C(me, {
                variant: "secondary",
                size: "sm",
                onClick: T
              }, {
                default: g(() => [...M[7] || (M[7] = [
                  $(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          C(Ao, {
            modelValue: f.value,
            "onUpdate:modelValue": M[1] || (M[1] = (O) => f.value = O),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          u.value ? (n(), D(As, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (n(), D(zs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (n(), i(j, { key: 2 }, [
            w.value.length ? (n(), D(yt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: g(() => [
                (n(!0), i(j, null, ve(w.value, (O) => (n(), D(nx, {
                  key: O.name,
                  "environment-name": O.name,
                  "is-current": O.is_current,
                  "current-branch": O.current_branch,
                  "show-last-used": !1
                }, {
                  actions: g(() => [
                    O.is_current ? y("", !0) : (n(), D(me, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (F) => P.$emit("switch", O.name)
                    }, {
                      default: g(() => [...M[8] || (M[8] = [
                        $(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    C(me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (F) => S(O)
                    }, {
                      default: g(() => [...M[9] || (M[9] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            w.value.length ? y("", !0) : (n(), D(hs, {
              key: 1,
              icon: "🌍",
              message: f.value ? `No environments match '${f.value}'` : "No environments found. Create one to get started!"
            }, mo({ _: 2 }, [
              f.value ? void 0 : {
                name: "actions",
                fn: g(() => [
                  C(me, {
                    variant: "primary",
                    onClick: b
                  }, {
                    default: g(() => [...M[10] || (M[10] = [
                      $(" Create Environment ", -1)
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
      C(ys, {
        show: v.value,
        title: "About Environments",
        onClose: M[3] || (M[3] = (O) => v.value = !1)
      }, {
        content: g(() => [...M[11] || (M[11] = [
          t("p", null, [
            t("strong", null, "Environments"),
            $(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
        actions: g(() => [
          C(me, {
            variant: "secondary",
            onClick: M[2] || (M[2] = (O) => v.value = !1)
          }, {
            default: g(() => [...M[12] || (M[12] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (n(), D(Wx, {
        key: 0,
        environment: _.value,
        detail: h.value,
        "can-delete": c.value.length > 1,
        onClose: M[4] || (M[4] = (O) => {
          _.value = null, h.value = null;
        }),
        onDelete: A
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      p.value ? (n(), D($5, {
        key: 1,
        onClose: M[5] || (M[5] = (O) => p.value = !1),
        onCreated: x
      })) : y("", !0)
    ], 64));
  }
}), x5 = /* @__PURE__ */ _e(C5, [["__scopeId", "data-v-0c0fbd88"]]), S5 = { class: "file-path" }, I5 = { class: "file-path-text" }, E5 = ["title"], T5 = /* @__PURE__ */ he({
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
    return (l, r) => (n(), i("div", S5, [
      r[0] || (r[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", I5, d(e.path), 1),
      e.copyable ? (n(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: a
      }, d(o.value ? "✓" : "📋"), 9, E5)) : y("", !0)
    ]));
  }
}), P5 = /* @__PURE__ */ _e(T5, [["__scopeId", "data-v-f0982173"]]), R5 = ["checked", "disabled"], M5 = { class: "base-checkbox-box" }, D5 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, L5 = {
  key: 0,
  class: "base-checkbox-label"
}, U5 = /* @__PURE__ */ he({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", {
      class: De(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked))
      }, null, 40, R5),
      t("span", M5, [
        e.modelValue ? (n(), i("svg", D5, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (n(), i("span", L5, [
        ot(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Qn = /* @__PURE__ */ _e(U5, [["__scopeId", "data-v-bf17c831"]]), N5 = { class: "export-blocked" }, O5 = { class: "error-header" }, A5 = { class: "error-summary" }, z5 = { class: "error-description" }, V5 = { class: "issues-list" }, F5 = { class: "issue-message" }, B5 = {
  key: 0,
  class: "issue-details"
}, W5 = ["onClick"], G5 = { class: "issue-fix" }, j5 = {
  key: 0,
  class: "commit-section"
}, H5 = {
  key: 0,
  class: "issues-warning"
}, K5 = {
  key: 1,
  class: "commit-error"
}, q5 = /* @__PURE__ */ he({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = it(), r = k(""), c = k(!1), u = k(!1), m = k(""), f = Js({}), v = N(
      () => o.issues.some((b) => b.type === "uncommitted_workflows" || b.type === "uncommitted_git_changes")
    ), p = N(
      () => o.issues.some((b) => b.type === "unresolved_issues")
    ), _ = N(
      () => p.value && !u.value
    ), h = N(
      () => v.value && r.value.trim() !== "" && !c.value && !_.value
    );
    function w(b) {
      const S = o.issues[b];
      return f[b] || S.details.length <= 3 ? S.details : S.details.slice(0, 3);
    }
    async function x() {
      var b;
      if (h.value) {
        c.value = !0, m.value = "";
        try {
          const S = await l(r.value.trim(), u.value);
          if (S.status === "success")
            a("committed");
          else if (S.status === "blocked") {
            const A = ((b = S.issues) == null ? void 0 : b.map((T) => `${T.name}: ${T.issue}`).join("; ")) || "Unknown issues";
            m.value = `Commit blocked: ${A}`;
          } else
            m.value = S.message || "Commit failed";
        } catch (S) {
          m.value = S instanceof Error ? S.message : "Commit failed";
        } finally {
          c.value = !1;
        }
      }
    }
    return (b, S) => (n(), D($t, {
      title: v.value ? "Commit & Export" : "Cannot Export",
      size: "md",
      onClose: S[4] || (S[4] = (A) => b.$emit("close"))
    }, {
      body: g(() => [
        t("div", N5, [
          t("div", O5, [
            S[6] || (S[6] = t("span", { class: "error-icon" }, [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ], -1)),
            t("div", A5, [
              S[5] || (S[5] = t("h3", { class: "error-title" }, "Export blocked", -1)),
              t("p", z5, d(v.value ? "Commit your changes to proceed with export." : "The following issues must be resolved before exporting."), 1)
            ])
          ]),
          t("div", V5, [
            (n(!0), i(j, null, ve(e.issues, (A, T) => (n(), i("div", {
              key: T,
              class: "issue-item"
            }, [
              t("div", F5, d(A.message), 1),
              A.details.length ? (n(), i("div", B5, [
                (n(!0), i(j, null, ve(w(T), (P, M) => (n(), i("div", {
                  key: M,
                  class: "issue-detail"
                }, d(P), 1))), 128)),
                A.details.length > 3 && !f[T] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (P) => f[T] = !0
                }, " +" + d(A.details.length - 3) + " more ", 9, W5)) : y("", !0)
              ])) : y("", !0),
              t("div", G5, [
                A.type === "uncommitted_workflows" ? (n(), i(j, { key: 0 }, [
                  $(" Commit your workflow changes before exporting. ")
                ], 64)) : A.type === "uncommitted_git_changes" ? (n(), i(j, { key: 1 }, [
                  $(" Commit your changes before exporting. ")
                ], 64)) : A.type === "unresolved_issues" ? (n(), i(j, { key: 2 }, [
                  $(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          v.value ? (n(), i("div", j5, [
            p.value ? (n(), i("div", H5, [
              S[8] || (S[8] = t("div", { class: "warning-header" }, [
                t("span", { class: "warning-icon-badge" }, "!"),
                t("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              C(Qn, {
                modelValue: u.value,
                "onUpdate:modelValue": S[0] || (S[0] = (A) => u.value = A),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...S[7] || (S[7] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            C(qn, {
              modelValue: r.value,
              "onUpdate:modelValue": S[1] || (S[1] = (A) => r.value = A),
              placeholder: "Describe your changes...",
              disabled: c.value || _.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: x,
              onCtrlEnter: x
            }, null, 8, ["modelValue", "disabled"]),
            m.value ? (n(), i("div", K5, d(m.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        v.value ? (n(), i(j, { key: 0 }, [
          C(Me, {
            variant: "secondary",
            onClick: S[2] || (S[2] = (A) => b.$emit("close"))
          }, {
            default: g(() => [...S[9] || (S[9] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          C(Me, {
            variant: u.value ? "danger" : "primary",
            disabled: !h.value,
            loading: c.value,
            onClick: x
          }, {
            default: g(() => [
              $(d(c.value ? "Committing..." : u.value ? "Force Commit & Export" : "Commit & Export"), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (n(), D(Me, {
          key: 1,
          variant: "primary",
          onClick: S[3] || (S[3] = (A) => b.$emit("close"))
        }, {
          default: g(() => [...S[10] || (S[10] = [
            $(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Qr = /* @__PURE__ */ _e(q5, [["__scopeId", "data-v-bd79ba24"]]), Y5 = { class: "export-warnings" }, J5 = {
  key: 0,
  class: "success-header"
}, Q5 = { class: "warning-header" }, X5 = { class: "warning-summary" }, Z5 = { class: "warning-title" }, e8 = { class: "models-section" }, t8 = { class: "models-list" }, s8 = { class: "model-info" }, o8 = { class: "model-filename" }, n8 = { class: "model-workflows" }, a8 = ["onClick"], l8 = /* @__PURE__ */ he({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = k(!1), r = k(null), c = N(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function u() {
      r.value = null, a("revalidate");
    }
    return (m, f) => (n(), i(j, null, [
      C($t, {
        title: "Export Warnings",
        size: "md",
        onClose: f[3] || (f[3] = (v) => m.$emit("cancel"))
      }, {
        body: g(() => [
          t("div", Y5, [
            e.models.length === 0 ? (n(), i("div", J5, [...f[4] || (f[4] = [
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
              t("div", Q5, [
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
                t("div", X5, [
                  t("h3", Z5, d(e.models.length) + " model" + d(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  f[5] || (f[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", e8, [
                t("div", t8, [
                  (n(!0), i(j, null, ve(c.value, (v) => (n(), i("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", s8, [
                      t("div", o8, d(v.filename), 1),
                      t("div", n8, " Used by: " + d(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (p) => r.value = v.hash
                    }, " Add Source ", 8, a8)
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
        footer: g(() => [
          C(Me, {
            variant: "secondary",
            onClick: f[1] || (f[1] = (v) => m.$emit("cancel"))
          }, {
            default: g(() => [...f[7] || (f[7] = [
              $(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          C(Me, {
            variant: "primary",
            onClick: f[2] || (f[2] = (v) => m.$emit("confirm"))
          }, {
            default: g(() => [
              $(d(e.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      r.value ? (n(), D(gl, {
        key: 0,
        identifier: r.value,
        onClose: u
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), Xr = /* @__PURE__ */ _e(l8, [["__scopeId", "data-v-b698d882"]]), i8 = { class: "export-card" }, r8 = { class: "export-path-row" }, c8 = { class: "export-actions" }, u8 = {
  key: 1,
  class: "export-warning"
}, d8 = /* @__PURE__ */ he({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = it(), a = k(""), l = k(!1), r = k(!1), c = k(!1), u = k(null), m = k(!1), f = k(null), v = k(!1), p = k(!1), _ = N(() => l.value ? "Validating..." : r.value ? "Exporting..." : "Export Environment");
    async function h() {
      l.value = !0, u.value = null;
      try {
        const P = await s();
        f.value = P, P.can_export ? P.warnings.models_without_sources.length > 0 ? p.value = !0 : await S() : v.value = !0;
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
      p.value = !1, await S();
    }
    async function x() {
      v.value = !1, l.value = !0;
      try {
        const P = await s();
        f.value = P, P.can_export ? P.warnings.models_without_sources.length > 0 ? p.value = !0 : await S() : v.value = !0;
      } catch (P) {
        u.value = {
          status: "error",
          message: P instanceof Error ? P.message : "Re-validation failed"
        };
      } finally {
        l.value = !1;
      }
    }
    async function b() {
      try {
        const P = await s();
        f.value = P;
      } catch (P) {
        console.error("Re-validation failed:", P);
      }
    }
    async function S() {
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
    async function A() {
      var P;
      if ((P = u.value) != null && P.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (M) {
          console.error("Failed to copy path:", M);
        }
    }
    async function T() {
      var P;
      if ((P = u.value) != null && P.path) {
        c.value = !0;
        try {
          const M = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!M.ok)
            throw new Error(`Download failed: ${M.statusText}`);
          const O = await M.blob(), F = URL.createObjectURL(O), I = u.value.path.split("/").pop() || "environment-export.tar.gz", L = document.createElement("a");
          L.href = F, L.download = I, document.body.appendChild(L), L.click(), document.body.removeChild(L), URL.revokeObjectURL(F);
        } catch (M) {
          console.error("Failed to download:", M), alert(`Download failed: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          c.value = !1;
        }
      }
    }
    return (P, M) => (n(), i(j, null, [
      C(Ht, null, {
        header: g(() => [
          C(Kt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (O) => m.value = !0)
          })
        ]),
        content: g(() => [
          C(yt, { title: "EXPORT OPTIONS" }, {
            default: g(() => [
              t("div", i8, [
                M[7] || (M[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", r8, [
                  C(tn, {
                    modelValue: a.value,
                    "onUpdate:modelValue": M[1] || (M[1] = (O) => a.value = O),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", c8, [
                  C(me, {
                    variant: "primary",
                    size: "md",
                    loading: l.value || r.value,
                    disabled: l.value || r.value,
                    onClick: h
                  }, {
                    default: g(() => [
                      M[6] || (M[6] = t("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        t("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        t("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      $(" " + d(_.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          u.value ? (n(), D(yt, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: g(() => [
              C(Lt, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, mo({
                icon: g(() => [
                  $(d(u.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  $(d(u.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: g(() => [
                  $(d(u.value.status === "success" ? "Your environment has been exported" : u.value.message), 1)
                ]),
                _: 2
              }, [
                u.value.status === "success" ? {
                  name: "details",
                  fn: g(() => [
                    C(kt, { label: "Saved to:" }, {
                      default: g(() => [
                        C(P5, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (n(), D(kt, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (n(), i("div", u8, [...M[8] || (M[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: g(() => [
                    C(me, {
                      variant: "primary",
                      size: "sm",
                      loading: c.value,
                      onClick: T
                    }, {
                      default: g(() => [...M[9] || (M[9] = [
                        t("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          t("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    C(me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: A
                    }, {
                      default: g(() => [...M[10] || (M[10] = [
                        $(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    C(me, {
                      variant: "ghost",
                      size: "sm",
                      onClick: M[2] || (M[2] = (O) => u.value = null)
                    }, {
                      default: g(() => [...M[11] || (M[11] = [
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
          })) : y("", !0)
        ]),
        _: 1
      }),
      C(ys, {
        show: m.value,
        title: "What Gets Exported",
        onClose: M[3] || (M[3] = (O) => m.value = !1)
      }, {
        content: g(() => [...M[12] || (M[12] = [
          t("div", { class: "export-info" }, [
            t("div", { class: "info-section" }, [
              t("strong", null, "Included in Export:"),
              t("ul", null, [
                t("li", null, [
                  t("strong", null, "Workflows"),
                  $(" — All workflows in this environment")
                ]),
                t("li", null, [
                  t("strong", null, "Custom Nodes"),
                  $(" — Node definitions and dependencies")
                ]),
                t("li", null, [
                  t("strong", null, "Models"),
                  $(" — References and source URLs (not the files)")
                ]),
                t("li", null, [
                  t("strong", null, "Configuration"),
                  $(" — Environment settings and metadata")
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
              $(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      v.value && f.value ? (n(), D(Qr, {
        key: 0,
        issues: f.value.blocking_issues,
        onClose: M[4] || (M[4] = (O) => v.value = !1),
        onCommitted: x
      }, null, 8, ["issues"])) : y("", !0),
      p.value && f.value ? (n(), D(Xr, {
        key: 1,
        models: f.value.warnings.models_without_sources,
        onConfirm: w,
        onCancel: M[5] || (M[5] = (O) => p.value = !1),
        onRevalidate: b
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), m8 = /* @__PURE__ */ _e(d8, [["__scopeId", "data-v-ddeffd68"]]), f8 = { class: "file-input-wrapper" }, v8 = ["accept", "multiple", "disabled"], p8 = /* @__PURE__ */ he({
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
    }), (u, m) => (n(), i("div", f8, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, v8),
      C(me, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: g(() => [
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
            $(" " + d(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), g8 = /* @__PURE__ */ _e(p8, [["__scopeId", "data-v-cd192091"]]), h8 = {
  key: 0,
  class: "drop-zone-empty"
}, y8 = { class: "drop-zone-text" }, w8 = { class: "drop-zone-primary" }, _8 = { class: "drop-zone-secondary" }, k8 = { class: "drop-zone-actions" }, b8 = {
  key: 1,
  class: "drop-zone-file"
}, $8 = { class: "file-info" }, C8 = { class: "file-details" }, x8 = { class: "file-name" }, S8 = { class: "file-size" }, I8 = /* @__PURE__ */ he({
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
    const o = s, a = k(!1), l = k(null), r = k(0), c = N(() => l.value !== null), u = N(() => {
      var b;
      return ((b = l.value) == null ? void 0 : b.name) || "";
    }), m = N(() => {
      if (!l.value) return "";
      const b = l.value.size;
      return b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : b < 1024 * 1024 * 1024 ? `${(b / (1024 * 1024)).toFixed(1)} MB` : `${(b / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function f(b) {
      var S;
      b.stopPropagation(), r.value++, (S = b.dataTransfer) != null && S.types.includes("Files") && (a.value = !0);
    }
    function v(b) {
      b.stopPropagation(), b.dataTransfer && (b.dataTransfer.dropEffect = "copy");
    }
    function p(b) {
      b.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function _(b) {
      var A;
      b.stopPropagation(), r.value = 0, a.value = !1;
      const S = (A = b.dataTransfer) == null ? void 0 : A.files;
      S && S.length > 0 && w(S[0]);
    }
    function h(b) {
      b.length > 0 && w(b[0]);
    }
    function w(b) {
      l.value = b, o("fileSelected", b);
    }
    function x() {
      l.value = null, o("clear");
    }
    return (b, S) => (n(), i("div", {
      class: De(["file-drop-zone", { "drop-active": a.value, "has-file": c.value }]),
      onDragenter: bt(f, ["prevent"]),
      onDragover: bt(v, ["prevent"]),
      onDragleave: bt(p, ["prevent"]),
      onDrop: bt(_, ["prevent"])
    }, [
      c.value ? (n(), i("div", b8, [
        t("div", $8, [
          S[1] || (S[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", C8, [
            t("div", x8, d(u.value), 1),
            t("div", S8, d(m.value), 1)
          ])
        ]),
        C(me, {
          variant: "ghost",
          size: "xs",
          onClick: x,
          title: "Remove file"
        }, {
          default: g(() => [...S[2] || (S[2] = [
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
      ])) : (n(), i("div", h8, [
        S[0] || (S[0] = t("div", { class: "drop-zone-icon" }, [
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
        t("div", y8, [
          t("p", w8, d(e.primaryText), 1),
          t("p", _8, d(e.secondaryText), 1)
        ]),
        t("div", k8, [
          C(g8, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: h
          }, {
            default: g(() => [
              $(d(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), E8 = /* @__PURE__ */ _e(I8, [["__scopeId", "data-v-0f79cb86"]]), T8 = { class: "import-preview" }, P8 = { class: "preview-header" }, R8 = {
  key: 0,
  class: "source-env"
}, M8 = { class: "preview-content" }, D8 = { class: "preview-section" }, L8 = { class: "section-header" }, U8 = { class: "section-info" }, N8 = { class: "section-count" }, O8 = {
  key: 0,
  class: "item-list"
}, A8 = { class: "item-name" }, z8 = {
  key: 0,
  class: "item-more"
}, V8 = { class: "preview-section" }, F8 = { class: "section-header" }, B8 = { class: "section-info" }, W8 = { class: "section-count" }, G8 = {
  key: 0,
  class: "item-list"
}, j8 = { class: "item-details" }, H8 = { class: "item-name" }, K8 = { class: "item-meta" }, q8 = {
  key: 0,
  class: "item-more"
}, Y8 = { class: "preview-section" }, J8 = { class: "section-header" }, Q8 = { class: "section-info" }, X8 = { class: "section-count" }, Z8 = {
  key: 0,
  class: "item-list"
}, eS = { class: "item-name" }, tS = {
  key: 0,
  class: "item-more"
}, sS = {
  key: 0,
  class: "preview-section"
}, oS = { class: "git-info" }, nS = /* @__PURE__ */ he({
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
    const s = e, o = N(() => s.workflows.length), a = N(() => s.models.length), l = N(() => s.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (n(), i("div", T8, [
      t("div", P8, [
        C(Jt, null, {
          default: g(() => [...u[0] || (u[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", R8, [
          u[1] || (u[1] = $(" From: ", -1)),
          C(Ha, null, {
            default: g(() => [
              $(d(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", M8, [
        t("div", D8, [
          t("div", L8, [
            u[3] || (u[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", U8, [
              u[2] || (u[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", N8, d(o.value) + " file" + d(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", O8, [
            (n(!0), i(j, null, ve(e.workflows.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
              key: m,
              class: "preview-item"
            }, [
              u[4] || (u[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", A8, d(m), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (n(), i("div", z8, " +" + d(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", V8, [
          t("div", F8, [
            u[6] || (u[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", B8, [
              u[5] || (u[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", W8, d(a.value) + " file" + d(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (n(), i("div", G8, [
            (n(!0), i(j, null, ve(e.models.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
              key: m.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", j8, [
                t("span", H8, d(m.filename), 1),
                t("span", K8, d(r(m.size)) + " • " + d(m.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (n(), i("div", q8, " +" + d(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", Y8, [
          t("div", J8, [
            u[9] || (u[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", Q8, [
              u[8] || (u[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", X8, d(l.value) + " node" + d(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (n(), i("div", Z8, [
            (n(!0), i(j, null, ve(e.nodes.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
              key: m,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", eS, d(m), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (n(), i("div", tS, " +" + d(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (n(), i("div", sS, [
          u[11] || (u[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", oS, [
            e.gitBranch ? (n(), D(kt, {
              key: 0,
              label: "Branch"
            }, {
              default: g(() => [
                C(Ha, null, {
                  default: g(() => [
                    $(d(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (n(), D(kt, {
              key: 1,
              label: "Commit"
            }, {
              default: g(() => [
                C(Ar, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), aS = /* @__PURE__ */ _e(nS, [["__scopeId", "data-v-182fe113"]]), lS = { class: "import-config" }, iS = { class: "config-container" }, rS = { class: "config-field" }, cS = { class: "input-wrapper" }, uS = ["value"], dS = {
  key: 0,
  class: "validating-indicator"
}, mS = {
  key: 1,
  class: "valid-indicator"
}, fS = {
  key: 0,
  class: "field-error"
}, vS = { class: "config-field" }, pS = { class: "strategy-options" }, gS = ["value", "checked", "onChange"], hS = { class: "strategy-content" }, yS = { class: "strategy-label" }, wS = { class: "strategy-description" }, _S = { class: "config-field switch-field" }, kS = { class: "switch-label" }, bS = ["checked"], $S = { class: "advanced-section" }, CS = { class: "advanced-content" }, xS = { class: "config-field" }, SS = ["value"], IS = ["value"], ES = /* @__PURE__ */ he({
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
    xt(() => o.nameError, (v) => {
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
    return (v, p) => (n(), i("div", lS, [
      C(Jt, null, {
        default: g(() => [...p[2] || (p[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", iS, [
        t("div", rS, [
          C(Nn, { required: "" }, {
            default: g(() => [...p[3] || (p[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", cS, [
            t("input", {
              type: "text",
              class: De(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: m,
              onBlur: f
            }, null, 42, uS),
            l.value ? (n(), i("span", dS, "...")) : r.value ? (n(), i("span", mS, "✓")) : y("", !0)
          ]),
          e.nameError ? (n(), i("div", fS, d(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", vS, [
          C(Nn, null, {
            default: g(() => [...p[5] || (p[5] = [
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", pS, [
            (n(), i(j, null, ve(c, (_) => t("label", {
              key: _.value,
              class: De(["strategy-option", { active: e.modelStrategy === _.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: _.value,
                checked: e.modelStrategy === _.value,
                onChange: (h) => a("update:modelStrategy", _.value)
              }, null, 40, gS),
              t("div", hS, [
                t("span", yS, d(_.label), 1),
                t("span", wS, d(_.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", _S, [
          t("label", kS, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (_) => a("update:switchAfterImport", _.target.checked))
            }, null, 40, bS),
            p[6] || (p[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", $S, [
          p[8] || (p[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", CS, [
            t("div", xS, [
              C(Nn, null, {
                default: g(() => [...p[7] || (p[7] = [
                  $("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              t("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: p[1] || (p[1] = (_) => a("update:torchBackend", _.target.value))
              }, [
                (n(!0), i(j, null, ve(Xe(yl), (_) => (n(), i("option", {
                  key: _,
                  value: _
                }, d(_) + d(_ === "auto" ? " (detect GPU)" : ""), 9, IS))), 128))
              ], 40, SS)
            ])
          ])
        ])
      ])
    ]));
  }
}), TS = /* @__PURE__ */ _e(ES, [["__scopeId", "data-v-89ea06a1"]]), PS = { class: "import-flow" }, RS = {
  key: 0,
  class: "import-empty"
}, MS = { class: "git-import-section" }, DS = { class: "git-url-input-row" }, LS = ["disabled"], US = {
  key: 0,
  class: "git-error"
}, NS = {
  key: 1,
  class: "import-configure"
}, OS = { class: "selected-file-bar" }, AS = {
  key: 0,
  class: "file-bar-content"
}, zS = { class: "file-bar-info" }, VS = { class: "file-bar-name" }, FS = { class: "file-bar-size" }, BS = {
  key: 1,
  class: "file-bar-content"
}, WS = { class: "file-bar-info" }, GS = { class: "file-bar-name" }, jS = {
  key: 0,
  class: "preview-loading"
}, HS = { class: "import-actions" }, KS = {
  key: 2,
  class: "import-progress"
}, qS = { class: "creating-intro" }, YS = {
  key: 0,
  class: "progress-warning"
}, JS = {
  key: 1,
  class: "import-error"
}, QS = { class: "error-message" }, XS = {
  key: 3,
  class: "import-complete"
}, ZS = { class: "complete-message" }, e4 = { class: "complete-title" }, t4 = { class: "complete-details" }, s4 = { class: "complete-actions" }, o4 = /* @__PURE__ */ he({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var we, G, ae, V;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: m, executeGitImport: f, getImportProgress: v } = it();
    let p = null;
    const _ = k(null), h = k(a.resumeImport ?? !1), w = k(!1), x = k(!1), b = k(""), S = k(!1), A = k(null), T = k(""), P = k(null), M = k(!1), O = k(null), F = k(null), I = k({
      name: ((we = a.initialProgress) == null ? void 0 : we.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), L = k(null), te = k({
      message: ((G = a.initialProgress) == null ? void 0 : G.message) ?? "Preparing import...",
      phase: ((ae = a.initialProgress) == null ? void 0 : ae.phase) ?? "",
      progress: ((V = a.initialProgress) == null ? void 0 : V.progress) ?? 0,
      error: null
    }), Y = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], K = N(() => {
      if (!F.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const U = F.value;
      return {
        sourceEnvironment: U.comfyui_version ? `ComfyUI ${U.comfyui_version}` : "Unknown",
        workflows: U.workflows.map((oe) => oe.name),
        models: U.models.map((oe) => ({
          filename: oe.filename,
          size: 0,
          type: oe.relative_path.split("/")[0] || "model"
        })),
        nodes: U.nodes.map((oe) => oe.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), H = N(() => !S.value && !A.value && F.value && I.value.name.length > 0 && !L.value && (_.value || P.value));
    async function B(U) {
      _.value = U, S.value = !0, A.value = null, F.value = null;
      try {
        const oe = await r(U);
        F.value = oe;
      } catch (oe) {
        A.value = oe instanceof Error ? oe.message : "Failed to analyze file", console.error("Preview error:", oe);
      } finally {
        S.value = !1;
      }
    }
    function W() {
      _.value = null, P.value = null, T.value = "", O.value = null, w.value = !1, x.value = !1, b.value = "", F.value = null, A.value = null, I.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, L.value = null, l("source-cleared");
    }
    function se() {
      ke(), W(), h.value = !1, S.value = !1, M.value = !1, te.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function Ue() {
      if (T.value.trim()) {
        M.value = !0, O.value = null;
        try {
          const U = await c(T.value.trim());
          P.value = T.value.trim(), F.value = U;
        } catch (U) {
          O.value = U instanceof Error ? U.message : "Failed to analyze repository";
        } finally {
          M.value = !1;
        }
      }
    }
    function ee(U) {
      try {
        const oe = new URL(U);
        return oe.host + oe.pathname.replace(/\.git$/, "");
      } catch {
        return U;
      }
    }
    async function ue(U) {
      if (!U) {
        L.value = "Environment name is required";
        return;
      }
      try {
        const oe = await u(U);
        L.value = oe.valid ? null : oe.error || "Invalid name";
      } catch {
        L.value = "Failed to validate name";
      }
    }
    async function ne() {
      if (I.value.name && !(!_.value && !P.value)) {
        h.value = !0, w.value = !1, te.value = { message: `Creating environment '${I.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let U;
          if (_.value)
            U = await m(
              _.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else if (P.value)
            U = await f(
              P.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          U.status === "started" ? ie() : (x.value = !1, b.value = U.message, h.value = !1, w.value = !0);
        } catch (U) {
          x.value = !1, b.value = U instanceof Error ? U.message : "Unknown error occurred during import", h.value = !1, w.value = !0;
        }
      }
    }
    async function ie() {
      if (p) return;
      const U = async () => {
        try {
          const Ae = await v();
          return te.value = {
            message: Ae.message,
            phase: Ae.phase || "",
            progress: Ae.progress ?? (Ae.state === "importing" ? 50 : 0),
            error: Ae.error || null
          }, Ae.state === "complete" ? (ke(), x.value = !0, b.value = `Environment '${Ae.environment_name}' created successfully`, h.value = !1, w.value = !0, Ae.environment_name && l("import-complete", Ae.environment_name, I.value.switchAfterImport), !1) : Ae.state === "error" ? (ke(), x.value = !1, b.value = Ae.error || Ae.message, h.value = !1, w.value = !0, !1) : !0;
        } catch (Ae) {
          return console.error("Failed to poll import progress:", Ae), !0;
        }
      };
      await U() && (p = setInterval(async () => {
        await U() || ke();
      }, 2e3));
    }
    function ke() {
      p && (clearInterval(p), p = null);
    }
    function Ee(U) {
      return U < 1024 ? `${U} B` : U < 1024 * 1024 ? `${(U / 1024).toFixed(1)} KB` : U < 1024 * 1024 * 1024 ? `${(U / (1024 * 1024)).toFixed(1)} MB` : `${(U / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return at(async () => {
      try {
        const U = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", U.state, U), U.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", U.environment_name), h.value = !0, I.value.name = U.environment_name || I.value.name || "", te.value = {
          progress: U.progress ?? 0,
          message: U.message || "Importing...",
          phase: U.phase || "",
          error: null
        }, ie());
      } catch (U) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", U);
      }
    }), s({
      handleReset: se,
      isImporting: h,
      canImport: H
    }), (U, oe) => {
      var Ae;
      return n(), i("div", PS, [
        !_.value && !P.value && !h.value ? (n(), i("div", RS, [
          C(E8, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: B
          }),
          oe[7] || (oe[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", MS, [
            oe[5] || (oe[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", DS, [
              nt(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": oe[0] || (oe[0] = (ze) => T.value = ze),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: as(Ue, ["enter"]),
                disabled: M.value
              }, null, 40, LS), [
                [Xt, T.value]
              ]),
              C(me, {
                variant: "primary",
                size: "sm",
                disabled: !T.value.trim() || M.value,
                onClick: Ue
              }, {
                default: g(() => [
                  $(d(M.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            O.value ? (n(), i("div", US, d(O.value), 1)) : y("", !0),
            oe[6] || (oe[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (_.value || P.value) && !h.value && !w.value ? (n(), i("div", NS, [
          t("div", OS, [
            _.value ? (n(), i("div", AS, [
              oe[8] || (oe[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", zS, [
                t("div", VS, d(_.value.name), 1),
                t("div", FS, d(Ee(_.value.size)), 1)
              ])
            ])) : P.value ? (n(), i("div", BS, [
              oe[10] || (oe[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", WS, [
                t("div", GS, d(ee(P.value)), 1),
                oe[9] || (oe[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            C(me, {
              variant: "ghost",
              size: "sm",
              onClick: W
            }, {
              default: g(() => [...oe[11] || (oe[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (n(), i("div", jS, [...oe[12] || (oe[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : A.value ? (n(), D(us, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [A.value]
          }, null, 8, ["details"])) : F.value ? (n(), D(aS, {
            key: 2,
            "source-environment": K.value.sourceEnvironment,
            workflows: K.value.workflows,
            models: K.value.models,
            nodes: K.value.nodes,
            "git-branch": K.value.gitBranch,
            "git-commit": K.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          F.value ? (n(), D(TS, {
            key: 3,
            name: I.value.name,
            "onUpdate:name": oe[1] || (oe[1] = (ze) => I.value.name = ze),
            "model-strategy": I.value.modelStrategy,
            "onUpdate:modelStrategy": oe[2] || (oe[2] = (ze) => I.value.modelStrategy = ze),
            "torch-backend": I.value.torchBackend,
            "onUpdate:torchBackend": oe[3] || (oe[3] = (ze) => I.value.torchBackend = ze),
            "switch-after-import": I.value.switchAfterImport,
            "onUpdate:switchAfterImport": oe[4] || (oe[4] = (ze) => I.value.switchAfterImport = ze),
            "name-error": L.value,
            onValidateName: ue
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          I.value.modelStrategy === "skip" && ((Ae = F.value) != null && Ae.models_needing_download) ? (n(), D(us, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${F.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", HS, [
            C(me, {
              variant: "secondary",
              size: "md",
              onClick: W
            }, {
              default: g(() => [...oe[13] || (oe[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(me, {
              variant: "primary",
              size: "md",
              disabled: !H.value,
              onClick: ne
            }, {
              default: g(() => [...oe[14] || (oe[14] = [
                $(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : h.value ? (n(), i("div", KS, [
          t("p", qS, [
            oe[15] || (oe[15] = $(" Importing environment ", -1)),
            t("strong", null, d(I.value.name), 1),
            oe[16] || (oe[16] = $("... ", -1))
          ]),
          C(Jn, {
            progress: te.value.progress,
            message: te.value.message,
            "current-phase": te.value.phase,
            variant: te.value.error ? "error" : "default",
            "show-steps": !0,
            steps: Y
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          te.value.error ? y("", !0) : (n(), i("p", YS, " This may take several minutes. Please wait... ")),
          te.value.error ? (n(), i("div", JS, [
            t("p", QS, d(te.value.error), 1)
          ])) : y("", !0)
        ])) : w.value ? (n(), i("div", XS, [
          t("div", {
            class: De(["complete-icon", x.value ? "success" : "error"])
          }, d(x.value ? "✓" : "✕"), 3),
          t("div", ZS, [
            t("div", e4, d(x.value ? "Import Successful" : "Import Failed"), 1),
            t("div", t4, d(b.value), 1)
          ]),
          t("div", s4, [
            C(me, {
              variant: "primary",
              size: "md",
              onClick: se
            }, {
              default: g(() => [...oe[17] || (oe[17] = [
                $(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Zr = /* @__PURE__ */ _e(o4, [["__scopeId", "data-v-72cbc04e"]]), n4 = /* @__PURE__ */ he({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, a = k(!1);
    function l(r, c) {
      c && o("import-complete-switch", r);
    }
    return (r, c) => (n(), i(j, null, [
      C(Ht, null, {
        header: g(() => [
          C(Kt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: c[0] || (c[0] = (u) => a.value = !0)
          })
        ]),
        content: g(() => [
          C(Zr, { onImportComplete: l })
        ]),
        _: 1
      }),
      C(ys, {
        show: a.value,
        title: "How Import Works",
        onClose: c[1] || (c[1] = (u) => a.value = !1)
      }, {
        content: g(() => [...c[2] || (c[2] = [
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
}), a4 = /* @__PURE__ */ _e(n4, [["__scopeId", "data-v-e13bfe76"]]), In = xo(), l4 = 5e3, bo = k([]), Pa = k(!1), Ra = k(null);
let Bo = null;
async function En(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function ec(e) {
  const s = N(
    () => bo.value.filter((h) => h.status === "running")
  ), o = N(
    () => bo.value.filter((h) => h.status === "deploying")
  ), a = N(
    () => bo.value.filter((h) => h.status === "stopped")
  ), l = N(
    () => s.value.length + o.value.length
  ), r = N(() => {
    const h = {
      deploying: 0,
      running: 1,
      stopped: 2,
      error: 3,
      terminated: 4
    };
    return [...bo.value].sort(
      (w, x) => (h[w.status] ?? 5) - (h[x.status] ?? 5)
    );
  });
  async function c() {
    Pa.value = !0, Ra.value = null;
    try {
      let h;
      if (!In) {
        const w = await En("/v2/comfygit/deploy/instances");
        if (!w.ok)
          throw new Error(`Failed to fetch instances: ${w.status}`);
        h = await w.json();
      }
      bo.value = h.instances;
    } catch (h) {
      Ra.value = h instanceof Error ? h.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", h);
    } finally {
      Pa.value = !1;
    }
  }
  function u(h, w) {
    if (h.provider === "custom" && h.worker_name) {
      const x = h.id.includes(":") ? h.id.split(":").slice(1).join(":") : h.id;
      return w === "terminate" ? `/v2/comfygit/deploy/custom/${h.worker_name}/instances/${x}` : `/v2/comfygit/deploy/custom/${h.worker_name}/instances/${x}/${w}`;
    }
    return w === "terminate" ? `/v2/comfygit/deploy/${h.provider}/${h.id}` : `/v2/comfygit/deploy/${h.provider}/${h.id}/${w}`;
  }
  async function m(h) {
    try {
      if (!In) {
        const w = u(h, "stop"), x = await En(w, { method: "POST" });
        if (!x.ok) {
          const b = await x.json();
          throw new Error(b.message || "Failed to stop instance");
        }
      }
      await c();
    } catch (w) {
      throw console.error("[useDeployInstances] stopInstance error:", w), w;
    }
  }
  async function f(h) {
    try {
      if (!In) {
        const w = u(h, "start"), x = await En(w, { method: "POST" });
        if (!x.ok) {
          const b = await x.json();
          throw new Error(b.message || "Failed to start instance");
        }
      }
      await c();
    } catch (w) {
      throw console.error("[useDeployInstances] startInstance error:", w), w;
    }
  }
  async function v(h) {
    try {
      if (!In) {
        const w = u(h, "terminate"), x = await En(w, { method: "DELETE" });
        if (!x.ok) {
          const b = await x.json();
          throw new Error(b.message || "Failed to terminate instance");
        }
      }
      await c();
    } catch (w) {
      throw console.error("[useDeployInstances] terminateInstance error:", w), w;
    }
  }
  function p() {
    Bo || (Bo = window.setInterval(c, l4));
  }
  function _() {
    Bo && (clearInterval(Bo), Bo = null);
  }
  return xt(o, (h) => {
    h.length > 0 && p();
  }, { immediate: !0 }), e != null && e.autoStart && (c(), p()), {
    // State
    instances: bo,
    isLoading: Pa,
    error: Ra,
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
const i4 = { class: "instance-header" }, r4 = { class: "provider-badge" }, c4 = { class: "instance-name" }, u4 = {
  key: 0,
  class: "spinner"
}, d4 = { class: "instance-details" }, m4 = {
  key: 0,
  class: "detail"
}, f4 = {
  key: 1,
  class: "detail instance-url"
}, v4 = {
  key: 2,
  class: "detail"
}, p4 = {
  key: 3,
  class: "detail"
}, g4 = {
  key: 4,
  class: "detail total-cost"
}, h4 = {
  key: 0,
  class: "deployment-progress"
}, y4 = { class: "progress-message" }, w4 = { class: "instance-actions" }, _4 = /* @__PURE__ */ he({
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
    }[s.instance.provider] || s.instance.provider), a = N(() => ({
      deploying: "Deploying",
      starting: "Starting",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[s.instance.status] || s.instance.status), l = N(() => `status-${s.instance.status}`);
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
      class: De(["instance-card", l.value])
    }, [
      t("div", i4, [
        t("span", r4, d(o.value), 1),
        t("span", c4, d(e.instance.name), 1),
        t("span", {
          class: De(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (n(), i("span", u4)) : y("", !0),
          $(" " + d(a.value), 1)
        ], 2)
      ]),
      t("div", d4, [
        e.instance.gpu_type ? (n(), i("span", m4, d(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (n(), i("span", f4, d(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (n(), i("span", v4, d(u(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (n(), i("span", p4, "$" + d(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (n(), i("span", g4, "$" + d(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (n(), i("div", h4, [
        t("div", y4, d(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (n(), D(ma, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", w4, [
        e.instance.status === "running" && e.instance.comfyui_url ? (n(), D(me, {
          key: 0,
          variant: "primary",
          size: "xs",
          onClick: r
        }, {
          default: g(() => [...f[3] || (f[3] = [
            $(" Open ComfyUI ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.console_url && e.instance.provider !== "custom" ? (n(), D(me, {
          key: 1,
          variant: "ghost",
          size: "xs",
          onClick: c
        }, {
          default: g(() => [...f[4] || (f[4] = [
            $(" Console ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.status === "running" ? (n(), D(me, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: f[0] || (f[0] = (v) => m.$emit("stop", e.instance))
        }, {
          default: g(() => [...f[5] || (f[5] = [
            $(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        e.instance.status === "stopped" ? (n(), D(me, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: f[1] || (f[1] = (v) => m.$emit("start", e.instance))
        }, {
          default: g(() => [...f[6] || (f[6] = [
            $(" Start ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        C(me, {
          variant: "destructive",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: f[2] || (f[2] = (v) => m.$emit("terminate", e.instance))
        }, {
          default: g(() => [...f[7] || (f[7] = [
            $(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), k4 = /* @__PURE__ */ _e(_4, [["__scopeId", "data-v-746c3894"]]), b4 = { class: "instances-tab" }, $4 = { class: "instances-header" }, C4 = {
  key: 0,
  class: "loading-state"
}, x4 = {
  key: 1,
  class: "empty-state"
}, S4 = {
  key: 2,
  class: "instances-list"
}, I4 = /* @__PURE__ */ he({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(e) {
    const s = e, o = N(() => {
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
    return (a, l) => (n(), i("div", b4, [
      t("div", $4, [
        C(Jt, null, {
          default: g(() => [...l[4] || (l[4] = [
            $("Active Instances", -1)
          ])]),
          _: 1
        }),
        C(me, {
          variant: "ghost",
          size: "xs",
          loading: e.isLoading,
          onClick: l[0] || (l[0] = (r) => a.$emit("refresh"))
        }, {
          default: g(() => [...l[5] || (l[5] = [
            $(" Refresh ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      e.isLoading && e.instances.length === 0 ? (n(), i("div", C4, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        $(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (n(), i("div", x4, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (n(), i("div", S4, [
        (n(!0), i(j, null, ve(o.value, (r) => (n(), D(k4, {
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
}), E4 = /* @__PURE__ */ _e(I4, [["__scopeId", "data-v-ba614fc3"]]), T4 = { class: "remote-header" }, P4 = { class: "remote-info" }, R4 = { class: "remote-icon" }, M4 = { class: "remote-name" }, D4 = {
  key: 0,
  class: "default-badge"
}, L4 = {
  key: 1,
  class: "sync-badge"
}, U4 = {
  key: 0,
  class: "ahead"
}, N4 = {
  key: 1,
  class: "behind"
}, O4 = {
  key: 1,
  class: "synced"
}, A4 = ["href"], z4 = {
  key: 1,
  class: "remote-url-text"
}, V4 = { class: "remote-actions" }, F4 = /* @__PURE__ */ he({
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
    const s = e, o = N(() => s.remote.is_default), a = N(() => {
      const r = s.remote.fetch_url, c = r.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return c ? `https://${c[1]}/${c[2]}` : r.startsWith("https://") || r.startsWith("http://") ? r.replace(/\.git$/, "") : null;
    }), l = N(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (r, c) => (n(), i("div", {
      class: De(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", T4, [
        t("div", P4, [
          t("span", R4, d(o.value ? "🔗" : "🌐"), 1),
          t("span", M4, d(e.remote.name), 1),
          o.value ? (n(), i("span", D4, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", L4, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(j, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", U4, "↑" + d(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", N4, "↓" + d(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", O4, "✓ synced"))
          ])) : y("", !0)
        ]),
        a.value ? (n(), i("a", {
          key: 0,
          href: a.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: c[0] || (c[0] = bt(() => {
          }, ["stop"]))
        }, d(l.value), 9, A4)) : (n(), i("span", z4, d(l.value), 1))
      ]),
      t("div", V4, [
        C(me, {
          variant: "secondary",
          size: "xs",
          loading: e.isFetching,
          onClick: c[1] || (c[1] = (u) => r.$emit("fetch", e.remote.name))
        }, {
          default: g(() => [...c[4] || (c[4] = [
            $(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        e.syncStatus && e.syncStatus.ahead > 0 ? (n(), D(me, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: e.isPushing,
          onClick: c[2] || (c[2] = (u) => r.$emit("push", e.remote.name))
        }, {
          default: g(() => [
            $(" Push ↑" + d(e.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : y("", !0),
        C(me, {
          variant: e.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: c[3] || (c[3] = (u) => r.$emit("select", e.remote.name))
        }, {
          default: g(() => [
            $(d(e.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), tc = /* @__PURE__ */ _e(F4, [["__scopeId", "data-v-d687d161"]]), B4 = { class: "runpod-tab" }, W4 = { class: "api-key-card" }, G4 = { class: "api-key-row" }, j4 = { class: "api-key-input-wrapper" }, H4 = ["type", "disabled"], K4 = ["title"], q4 = { class: "status-icon" }, Y4 = { class: "status-text" }, J4 = {
  key: 0,
  class: "credit-balance"
}, Q4 = { class: "config-card" }, X4 = { class: "config-row" }, Z4 = ["disabled"], eI = {
  key: 0,
  value: ""
}, tI = {
  key: 1,
  value: "",
  disabled: ""
}, sI = ["value", "disabled"], oI = { class: "config-row" }, nI = {
  key: 0,
  class: "loading-inline"
}, aI = { class: "no-volumes-state" }, lI = { class: "no-volumes-text" }, iI = ["value"], rI = { class: "config-row" }, cI = ["disabled"], uI = {
  key: 0,
  value: ""
}, dI = {
  key: 1,
  value: ""
}, mI = {
  key: 2,
  value: ""
}, fI = ["value"], vI = { class: "config-row" }, pI = { class: "radio-group" }, gI = { class: "radio-option" }, hI = { class: "radio-label" }, yI = { class: "radio-option disabled" }, wI = { class: "radio-label" }, _I = { class: "config-row" }, kI = { class: "radio-group" }, bI = { class: "radio-option" }, $I = { class: "radio-label" }, CI = { class: "radio-option disabled" }, xI = { class: "radio-label" }, SI = { class: "config-row" }, II = {
  key: 0,
  class: "loading-text"
}, EI = {
  key: 1,
  class: "empty-remotes"
}, TI = { class: "remotes-list" }, PI = {
  key: 0,
  class: "sync-warning"
}, RI = { class: "warning-content" }, MI = { class: "remotes-footer" }, DI = { class: "summary-card" }, LI = {
  key: 0,
  class: "loading-text"
}, UI = { class: "summary-row" }, NI = { class: "summary-value" }, OI = { class: "summary-row" }, AI = { class: "summary-value" }, zI = { class: "summary-row" }, VI = { class: "summary-value" }, FI = {
  key: 0,
  class: "summary-sub-row"
}, BI = { class: "summary-sub-label" }, WI = {
  key: 1,
  class: "summary-sub-row warning"
}, GI = { class: "summary-sub-label" }, jI = { class: "summary-row" }, HI = { class: "summary-value" }, KI = { class: "summary-row" }, qI = { class: "summary-value" }, YI = { class: "deployment-summary" }, JI = { class: "summary-columns" }, QI = { class: "summary-column" }, XI = { class: "pricing-row" }, ZI = { class: "pricing-value" }, e6 = { class: "pricing-row" }, t6 = { class: "pricing-value" }, s6 = { class: "pricing-row" }, o6 = { class: "pricing-value" }, n6 = { class: "pricing-row total" }, a6 = { class: "pricing-value" }, l6 = { class: "summary-column" }, i6 = { class: "spec-row" }, r6 = { class: "spec-row" }, c6 = {
  key: 0,
  class: "spec-row"
}, u6 = {
  key: 1,
  class: "spec-row spot-warning"
}, d6 = {
  key: 4,
  class: "deploy-actions"
}, m6 = { class: "progress-content" }, f6 = { class: "phase-indicator" }, v6 = { key: 0 }, p6 = { key: 1 }, g6 = { key: 2 }, h6 = {
  key: 3,
  class: "spinner"
}, y6 = { class: "phase-text" }, w6 = { class: "phase-name" }, _6 = { class: "phase-detail" }, k6 = {
  key: 0,
  class: "ready-actions"
}, b6 = { class: "console-link" }, $6 = ["href"], C6 = /* @__PURE__ */ he({
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
      getRemoteSyncStatus: h,
      fetchRemote: w,
      pushToRemote: x,
      getDataCenters: b
    } = it(), S = k(!1), A = k(""), T = k(!1), P = k(!1), M = k(null), O = k(null), F = k(""), I = k(""), L = k(""), te = k("SECURE"), Y = k("ON_DEMAND"), K = k("my-comfyui-deploy"), H = k([]), B = k({}), W = k(!1), se = k(null), Ue = k(null), ee = k(null), ue = k([]), ne = k(!1), ie = k([]), ke = k(!1), Ee = k([]), we = k(!1), G = k(null), ae = k(!1), V = k(!1), U = k(null), oe = k(!1), Ae = k(null), ze = k(null), z = k(null), J = k(!1), re = k(null), Ie = k(!1), be = k(!1), $e = N(() => ie.value.find((E) => E.id === I.value) || null), Le = N(() => F.value ? ie.value.filter((E) => E.data_center_id === F.value) : ie.value), ye = N(() => Ee.value.filter((E) => E.available)), Re = N(() => se.value && B.value[se.value] || null), fe = N(() => {
      if (!se.value) return null;
      const E = H.value.find((R) => R.name === se.value);
      return (E == null ? void 0 : E.fetch_url) || null;
    }), je = N(() => T.value && I.value && L.value && fe.value && !V.value && !J.value), Oe = (E) => {
      const R = Ee.value.find((tt) => tt.id === L.value);
      if (!R) return "0.00";
      if (E === "SECURE") return (R.securePrice ?? 0).toFixed(2);
      if (E === "COMMUNITY") return (R.communityPrice ?? 0).toFixed(2);
      const Te = te.value === "SECURE";
      return E === "ON_DEMAND" ? Te ? (R.securePrice ?? 0).toFixed(2) : (R.communityPrice ?? 0).toFixed(2) : Te ? (R.secureSpotPrice ?? 0).toFixed(2) : (R.communitySpotPrice ?? 0).toFixed(2);
    }, pe = N(() => {
      const E = Ee.value.find((It) => It.id === L.value), R = ie.value.find((It) => It.id === I.value);
      if (!E) return null;
      const Te = te.value === "SECURE", tt = Y.value === "SPOT";
      let ft;
      tt ? ft = Te ? E.secureSpotPrice ?? 0 : E.communitySpotPrice ?? 0 : ft = Te ? E.securePrice ?? 0 : E.communityPrice ?? 0;
      const st = R ? R.size_gb * 14e-5 : 0, Ct = 4e-3;
      return {
        gpu: ft,
        volume: st,
        container: Ct,
        total: ft + st + Ct
      };
    });
    async function q() {
      await de(), await Promise.all([Ke(), Ve()]);
    }
    async function Ve() {
      W.value = !0;
      try {
        const E = await _();
        H.value = E.remotes, await Promise.all(
          E.remotes.map(async (Te) => {
            const tt = await h(Te.name);
            tt && (B.value[Te.name] = tt);
          })
        );
        const R = E.remotes.find((Te) => Te.is_default);
        R ? se.value = R.name : E.remotes.length > 0 && (se.value = E.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        W.value = !1;
      }
    }
    async function Se(E) {
      Ue.value = E;
      try {
        await w(E);
        const R = await h(E);
        R && (B.value[E] = R), o("toast", `Fetched from ${E}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        Ue.value = null;
      }
    }
    async function Ce(E) {
      ee.value = E;
      try {
        await x(E, { force: !1 });
        const R = await h(E);
        R && (B.value[E] = R), o("toast", `Pushed to ${E}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        ee.value = null;
      }
    }
    function Ne(E) {
      se.value = E;
    }
    async function Pe() {
      if (A.value) {
        P.value = !0, M.value = null;
        try {
          const E = await l(A.value, !0);
          E.status === "success" ? (T.value = !0, O.value = E.credit_balance ?? null, M.value = { type: "success", message: E.message }, await q()) : M.value = { type: "error", message: E.message };
        } catch (E) {
          M.value = {
            type: "error",
            message: E instanceof Error ? E.message : "Connection test failed"
          };
        } finally {
          P.value = !1;
        }
      }
    }
    async function Q() {
      try {
        await v(), A.value = "", T.value = !1, M.value = null, O.value = null, ue.value = [], F.value = "", ie.value = [], I.value = "", Ee.value = [], L.value = "", G.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function de() {
      ke.value = !0, ne.value = !0;
      try {
        const E = await r();
        ie.value = E.volumes;
        const R = /* @__PURE__ */ new Map();
        for (const Te of E.volumes)
          Te.data_center_id && !R.has(Te.data_center_id) && R.set(Te.data_center_id, {
            id: Te.data_center_id,
            name: Te.data_center_name || Te.data_center_id,
            available: !0
          });
        if (E.volumes.length === 0) {
          const Te = await b();
          ue.value = Te.data_centers;
        } else
          ue.value = Array.from(R.values());
        if (ie.value.length > 0) {
          const Te = ie.value[0];
          I.value = Te.id, Te.data_center_id && (F.value = Te.data_center_id, await ge(Te.data_center_id));
        } else ue.value.length > 0 && (F.value = ue.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        ke.value = !1, ne.value = !1;
      }
    }
    async function ge(E) {
      we.value = !0;
      try {
        const R = await c(E);
        Ee.value = R.gpu_types;
        const Te = Ee.value.find((tt) => tt.available);
        Te ? L.value = Te.id : L.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        we.value = !1;
      }
    }
    xt(F, async (E) => {
      if (!E || ke.value) return;
      const R = ie.value.find((Te) => Te.id === I.value);
      R && R.data_center_id !== E && (I.value = ""), await ge(E);
    }), xt(I, async (E) => {
      if (!E) {
        Ee.value = [], L.value = "";
        return;
      }
      if (ke.value) return;
      const R = ie.value.find((Te) => Te.id === E);
      R && R.data_center_id !== F.value ? F.value = R.data_center_id : R && await ge(R.data_center_id);
    });
    async function Ke() {
      ae.value = !0;
      try {
        G.value = await a();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        ae.value = !1;
      }
    }
    async function Fe() {
      if (!(!L.value || !I.value)) {
        J.value = !0, U.value = null;
        try {
          const E = await p();
          re.value = E, E.can_export ? E.warnings.models_without_sources.length > 0 ? be.value = !0 : await qe() : Ie.value = !0;
        } catch (E) {
          U.value = {
            status: "error",
            message: E instanceof Error ? E.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          J.value = !1;
        }
      }
    }
    async function Be() {
      be.value = !1, await qe();
    }
    async function et() {
      try {
        const E = await p();
        re.value = E;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function qe() {
      V.value = !0;
      try {
        let E;
        if (Y.value === "SPOT") {
          const Te = Ee.value.find((tt) => tt.id === L.value);
          Te && (E = te.value === "SECURE" ? Te.secureSpotPrice : Te.communitySpotPrice);
        }
        const R = await u({
          gpu_type_id: L.value,
          pod_name: K.value || "my-comfyui-deploy",
          network_volume_id: I.value,
          cloud_type: te.value,
          pricing_type: Y.value,
          spot_bid: E,
          import_source: fe.value
        });
        U.value = R, R.status === "success" && R.pod_id ? (Ae.value = R.pod_id, oe.value = !0, mt(R.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", R.message, "error");
      } catch (E) {
        U.value = {
          status: "error",
          message: E instanceof Error ? E.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        V.value = !1;
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
        const R = await m(E);
        ze.value = R, (R.phase === "READY" || R.phase === "ERROR" || R.phase === "STOPPED") && (ct(), R.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (R) {
        console.error("Failed to poll deployment status:", R);
      }
    }
    function Tt() {
      oe.value = !1, ct(), Ae.value = null, ze.value = null;
    }
    function es() {
      var E;
      (E = ze.value) != null && E.comfyui_url && window.open(ze.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function Ot(E) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[E || ""] || "Initializing...";
    }
    function le(E) {
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
        E.has_key && E.key_preview && (A.value = `****${E.key_preview}`, E.valid ? (T.value = !0, O.value = E.credit_balance ?? null, M.value = { type: "success", message: "Connected to RunPod" }, await q()) : E.error && (M.value = { type: "error", message: E.error }));
      } catch {
      }
    }), Qs(() => {
      ct();
    }), (E, R) => {
      var Te, tt, ft, st, Ct, It;
      return n(), i(j, null, [
        t("div", B4, [
          C(yt, { title: "RUNPOD API KEY" }, {
            default: g(() => [
              t("div", W4, [
                t("div", G4, [
                  t("div", j4, [
                    nt(t("input", {
                      "onUpdate:modelValue": R[0] || (R[0] = (We) => A.value = We),
                      type: S.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: T.value
                    }, null, 8, H4), [
                      [ua, A.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: R[1] || (R[1] = (We) => S.value = !S.value),
                      title: S.value ? "Hide key" : "Show key"
                    }, d(S.value ? "👁" : "👁‍🗨"), 9, K4)
                  ]),
                  T.value ? y("", !0) : (n(), D(me, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: P.value,
                    disabled: !A.value || P.value,
                    onClick: Pe
                  }, {
                    default: g(() => [...R[16] || (R[16] = [
                      $(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  T.value ? (n(), D(me, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: Q
                  }, {
                    default: g(() => [...R[17] || (R[17] = [
                      $(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                M.value ? (n(), i("div", {
                  key: 0,
                  class: De(["connection-status", M.value.type])
                }, [
                  t("span", q4, d(M.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", Y4, d(M.value.message), 1),
                  O.value !== null ? (n(), i("span", J4, " $" + d(O.value.toFixed(2)) + " credit ", 1)) : y("", !0)
                ], 2)) : y("", !0),
                R[18] || (R[18] = t("div", { class: "api-key-help" }, [
                  t("span", { class: "help-icon" }, "i"),
                  t("span", { class: "help-text" }, [
                    $(" Get your API key at "),
                    t("a", {
                      href: "https://runpod.io/console/user/settings",
                      target: "_blank",
                      rel: "noopener"
                    }, "runpod.io/console/user/settings"),
                    $(". Key stored locally, never sent to ComfyGit servers. ")
                  ])
                ], -1))
              ])
            ]),
            _: 1
          }),
          T.value ? (n(), D(yt, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: g(() => [
              t("div", Q4, [
                t("div", X4, [
                  R[19] || (R[19] = t("label", { class: "config-label" }, "Region", -1)),
                  nt(t("select", {
                    "onUpdate:modelValue": R[2] || (R[2] = (We) => F.value = We),
                    class: "config-select",
                    disabled: ne.value
                  }, [
                    ne.value ? (n(), i("option", eI, "Loading...")) : F.value ? y("", !0) : (n(), i("option", tI, "Select a region")),
                    (n(!0), i(j, null, ve(ue.value, (We) => (n(), i("option", {
                      key: We.id,
                      value: We.id,
                      disabled: !We.available
                    }, d(We.id) + " (" + d(We.name) + ")" + d(We.available ? "" : " [Unavailable]"), 9, sI))), 128))
                  ], 8, Z4), [
                    [Is, F.value]
                  ])
                ]),
                t("div", oI, [
                  R[24] || (R[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  ke.value ? (n(), i("div", nI, "Loading volumes...")) : Le.value.length === 0 ? (n(), i(j, { key: 1 }, [
                    t("div", aI, [
                      R[20] || (R[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", lI, "No volumes in " + d(F.value || "this region"), 1)
                    ]),
                    R[21] || (R[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    R[22] || (R[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (n(), i(j, { key: 2 }, [
                    nt(t("select", {
                      "onUpdate:modelValue": R[3] || (R[3] = (We) => I.value = We),
                      class: "config-select"
                    }, [
                      (n(!0), i(j, null, ve(Le.value, (We) => (n(), i("option", {
                        key: We.id,
                        value: We.id
                      }, d(We.name) + " (" + d(We.size_gb) + "GB) ", 9, iI))), 128))
                    ], 512), [
                      [Is, I.value]
                    ]),
                    R[23] || (R[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", rI, [
                  R[25] || (R[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  nt(t("select", {
                    "onUpdate:modelValue": R[4] || (R[4] = (We) => L.value = We),
                    class: "config-select",
                    disabled: we.value || !I.value
                  }, [
                    I.value ? we.value ? (n(), i("option", dI, "Loading GPUs...")) : ye.value.length === 0 ? (n(), i("option", mI, "No GPUs available in this region")) : y("", !0) : (n(), i("option", uI, "Select a volume first")),
                    (n(!0), i(j, null, ve(ye.value, (We) => (n(), i("option", {
                      key: We.id,
                      value: We.id
                    }, d(We.displayName) + " (" + d(We.memoryInGb) + "GB) - $" + d(te.value === "SECURE" ? (We.securePrice ?? 0).toFixed(2) : (We.communityPrice ?? 0).toFixed(2)) + "/hr " + d(We.stockStatus ? `[${We.stockStatus}]` : ""), 9, fI))), 128))
                  ], 8, cI), [
                    [Is, L.value]
                  ])
                ]),
                t("div", vI, [
                  R[26] || (R[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", pI, [
                    t("label", gI, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[5] || (R[5] = (We) => te.value = We),
                        value: "SECURE"
                      }, null, 512), [
                        [ms, te.value]
                      ]),
                      t("span", hI, "Secure ($" + d(Oe("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", yI, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[6] || (R[6] = (We) => te.value = We),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [ms, te.value]
                      ]),
                      t("span", wI, "Community ($" + d(Oe("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", _I, [
                  R[27] || (R[27] = t("label", { class: "config-label" }, [
                    $(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", kI, [
                    t("label", bI, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[7] || (R[7] = (We) => Y.value = We),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [ms, Y.value]
                      ]),
                      t("span", $I, "On-Demand ($" + d(Oe("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", CI, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[8] || (R[8] = (We) => Y.value = We),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [ms, Y.value]
                      ]),
                      t("span", xI, "Spot ($" + d(Oe("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", SI, [
                  R[28] || (R[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  nt(t("input", {
                    "onUpdate:modelValue": R[9] || (R[9] = (We) => K.value = We),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [Xt, K.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : y("", !0),
          T.value ? (n(), D(yt, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: g(() => [
              W.value ? (n(), i("div", II, "Loading remotes...")) : H.value.length === 0 ? (n(), i("div", EI, [
                R[30] || (R[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                C(me, {
                  variant: "primary",
                  size: "xs",
                  onClick: R[10] || (R[10] = (We) => o("navigate", "remotes"))
                }, {
                  default: g(() => [...R[29] || (R[29] = [
                    $(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (n(), i(j, { key: 2 }, [
                t("div", TI, [
                  (n(!0), i(j, null, ve(H.value, (We) => (n(), D(tc, {
                    key: We.name,
                    remote: We,
                    "sync-status": B.value[We.name],
                    "is-selected": se.value === We.name,
                    "is-fetching": Ue.value === We.name,
                    "is-pushing": ee.value === We.name,
                    onFetch: Se,
                    onPush: Ce,
                    onSelect: Ne
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                Re.value && Re.value.ahead > 0 ? (n(), i("div", PI, [
                  R[31] || (R[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", RI, [
                    t("strong", null, d(Re.value.ahead) + " unpushed commit" + d(Re.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + d(se.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  C(me, {
                    variant: "primary",
                    size: "xs",
                    loading: ee.value === se.value,
                    onClick: R[11] || (R[11] = (We) => se.value && Ce(se.value))
                  }, {
                    default: g(() => [
                      $(" Push to " + d(se.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", MI, [
                  C(me, {
                    variant: "link",
                    size: "xs",
                    onClick: R[12] || (R[12] = (We) => o("navigate", "remotes"))
                  }, {
                    default: g(() => [...R[32] || (R[32] = [
                      $(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          T.value ? (n(), D(yt, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: g(() => [
              t("div", DI, [
                ae.value ? (n(), i("div", LI, "Loading environment summary...")) : G.value ? (n(), i(j, { key: 1 }, [
                  t("div", UI, [
                    R[33] || (R[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", NI, d(G.value.comfyui_version), 1)
                  ]),
                  t("div", OI, [
                    R[34] || (R[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", AI, d(G.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", zI, [
                    R[35] || (R[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", VI, d(G.value.model_count) + " models", 1)
                  ]),
                  G.value.models_with_sources > 0 ? (n(), i("div", FI, [
                    t("span", BI, "└─ " + d(G.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  G.value.models_without_sources > 0 ? (n(), i("div", WI, [
                    t("span", GI, "└─ " + d(G.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", jI, [
                    R[36] || (R[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", HI, d(G.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", KI, [
                    R[37] || (R[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", qI, "~" + d(G.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          T.value && pe.value ? (n(), D(yt, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: g(() => {
              var We, is;
              return [
                t("div", YI, [
                  t("div", JI, [
                    t("div", QI, [
                      R[42] || (R[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", XI, [
                        R[38] || (R[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", ZI, "$" + d(pe.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", e6, [
                        R[39] || (R[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", t6, "$" + d(pe.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", s6, [
                        R[40] || (R[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", o6, "$" + d(pe.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      R[43] || (R[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", n6, [
                        R[41] || (R[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", a6, "~$" + d(pe.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", l6, [
                      R[45] || (R[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", i6, [
                        t("span", null, d(((We = Ee.value.find((ws) => ws.id === L.value)) == null ? void 0 : We.displayName) || "GPU") + " (" + d(((is = Ee.value.find((ws) => ws.id === L.value)) == null ? void 0 : is.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", r6, [
                        t("span", null, "Region: " + d(F.value), 1)
                      ]),
                      $e.value ? (n(), i("div", c6, [
                        t("span", null, "Volume: " + d($e.value.name), 1)
                      ])) : y("", !0),
                      Y.value === "SPOT" ? (n(), i("div", u6, [...R[44] || (R[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          T.value ? (n(), i("div", d6, [
            C(me, {
              variant: "primary",
              size: "md",
              loading: J.value || V.value,
              disabled: !je.value,
              onClick: Fe
            }, {
              default: g(() => [
                R[46] || (R[46] = t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  t("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                $(" " + d(J.value ? "Validating..." : V.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          U.value ? (n(), D(yt, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: g(() => [
              C(Lt, {
                status: U.value.status === "success" ? "synced" : "broken"
              }, mo({
                icon: g(() => [
                  $(d(U.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  $(d(U.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: g(() => [
                  $(d(U.value.message), 1)
                ]),
                actions: g(() => [
                  C(me, {
                    variant: "ghost",
                    size: "xs",
                    onClick: R[13] || (R[13] = (We) => U.value = null)
                  }, {
                    default: g(() => [...R[47] || (R[47] = [
                      $(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                U.value.pod_id ? {
                  name: "details",
                  fn: g(() => [
                    C(kt, {
                      label: "Pod ID:",
                      value: U.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        oe.value ? (n(), D($t, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((Te = ze.value) == null ? void 0 : Te.phase) === "READY" || ((tt = ze.value) == null ? void 0 : tt.phase) === "ERROR" || ((ft = ze.value) == null ? void 0 : ft.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: Tt
        }, mo({
          body: g(() => {
            var We, is, ws, fo, vo, po, Xs, go, ho, yo, wo, _o;
            return [
              t("div", m6, [
                t("div", f6, [
                  t("div", {
                    class: De(["phase-icon", (is = (We = ze.value) == null ? void 0 : We.phase) == null ? void 0 : is.toLowerCase()])
                  }, [
                    ((ws = ze.value) == null ? void 0 : ws.phase) === "READY" ? (n(), i("span", v6, "✓")) : ((fo = ze.value) == null ? void 0 : fo.phase) === "ERROR" ? (n(), i("span", p6, "✕")) : ((vo = ze.value) == null ? void 0 : vo.phase) === "STOPPED" ? (n(), i("span", g6, "○")) : (n(), i("span", h6, "⟳"))
                  ], 2),
                  t("div", y6, [
                    t("div", w6, d(Ot((po = ze.value) == null ? void 0 : po.phase)), 1),
                    t("div", _6, d(((Xs = ze.value) == null ? void 0 : Xs.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                C(ma, {
                  progress: le((go = ze.value) == null ? void 0 : go.phase),
                  variant: ((ho = ze.value) == null ? void 0 : ho.phase) === "ERROR" ? "error" : ((yo = ze.value) == null ? void 0 : yo.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((wo = ze.value) == null ? void 0 : wo.phase) === "READY" ? (n(), i("div", k6, [
                  C(me, {
                    variant: "primary",
                    size: "md",
                    onClick: es
                  }, {
                    default: g(() => [...R[48] || (R[48] = [
                      $(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", b6, [
                  (_o = ze.value) != null && _o.console_url ? (n(), i("a", {
                    key: 0,
                    href: ze.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, $6)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((st = ze.value) == null ? void 0 : st.phase) === "READY" || ((Ct = ze.value) == null ? void 0 : Ct.phase) === "ERROR" || ((It = ze.value) == null ? void 0 : It.phase) === "STOPPED" ? {
            name: "footer",
            fn: g(() => [
              C(me, {
                variant: "ghost",
                size: "xs",
                onClick: Tt
              }, {
                default: g(() => [...R[49] || (R[49] = [
                  $(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        Ie.value && re.value ? (n(), D(Qr, {
          key: 1,
          issues: re.value.blocking_issues,
          onClose: R[14] || (R[14] = (We) => Ie.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        be.value && re.value ? (n(), D(Xr, {
          key: 2,
          models: re.value.warnings.models_without_sources,
          onConfirm: Be,
          onCancel: R[15] || (R[15] = (We) => be.value = !1),
          onRevalidate: et
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), x6 = /* @__PURE__ */ _e(C6, [["__scopeId", "data-v-522cd4d9"]]), S6 = { class: "worker-header" }, I6 = { class: "worker-status" }, E6 = { class: "worker-name" }, T6 = { class: "worker-actions" }, P6 = { class: "worker-details" }, R6 = { class: "detail-item" }, M6 = { class: "detail-value" }, D6 = {
  key: 0,
  class: "detail-item"
}, L6 = { class: "detail-value" }, U6 = {
  key: 1,
  class: "detail-item"
}, N6 = { class: "detail-value mode-badge" }, O6 = {
  key: 0,
  class: "worker-stats"
}, A6 = {
  key: 0,
  class: "stat-item"
}, z6 = { key: 0 }, V6 = {
  key: 1,
  class: "worker-stats offline"
}, F6 = /* @__PURE__ */ he({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: De(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", S6, [
        t("div", I6, [
          t("span", {
            class: De(["status-dot", e.worker.status])
          }, null, 2),
          t("span", E6, d(e.worker.name), 1)
        ]),
        t("div", T6, [
          e.worker.status === "online" ? (n(), D(me, {
            key: 0,
            variant: "primary",
            size: "xs",
            disabled: e.isActionLoading,
            onClick: o[0] || (o[0] = (a) => s.$emit("deploy", e.worker))
          }, {
            default: g(() => [...o[2] || (o[2] = [
              $(" Deploy ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : y("", !0),
          C(me, {
            variant: "ghost",
            size: "xs",
            loading: e.isActionLoading,
            onClick: o[1] || (o[1] = (a) => s.$emit("remove", e.worker.name))
          }, {
            default: g(() => [...o[3] || (o[3] = [
              $(" Remove ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ]),
      t("div", P6, [
        t("span", R6, [
          t("span", M6, d(e.worker.host) + ":" + d(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (n(), i("span", D6, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", L6, d(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (n(), i("span", U6, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", N6, d(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (n(), i("div", O6, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          $(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (n(), i("span", A6, [
          $(" • " + d(e.worker.instance_count) + " instance" + d(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (n(), i("span", z6, "(" + d(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (n(), i("div", V6, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          $(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), B6 = /* @__PURE__ */ _e(F6, [["__scopeId", "data-v-b1be7134"]]), W6 = { class: "add-worker-content" }, G6 = { class: "manual-form" }, j6 = { class: "form-row" }, H6 = { class: "form-row-inline" }, K6 = { class: "form-field flex-2" }, q6 = { class: "form-field flex-1" }, Y6 = { class: "form-row" }, J6 = { class: "api-key-wrapper" }, Q6 = ["type"], X6 = { class: "result-icon" }, Z6 = { class: "result-content" }, eE = { class: "result-message" }, tE = {
  key: 0,
  class: "result-detail"
}, sE = { class: "modal-actions" }, oE = /* @__PURE__ */ he({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = it(), l = Js({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), r = k(!1), c = k(!1), u = k(!1), m = k(null), f = N(() => l.host && l.port && l.apiKey), v = N(() => l.name && l.host && l.port && l.apiKey);
    async function p() {
      if (f.value) {
        c.value = !0, m.value = null;
        try {
          const h = await a({
            host: l.host,
            port: l.port,
            api_key: l.apiKey
          });
          h.status === "success" ? (m.value = {
            type: "success",
            message: h.message,
            gpu_info: h.gpu_info
          }, !l.name && h.gpu_info && (l.name = `worker-${l.host.split(".").pop()}`)) : m.value = {
            type: "error",
            message: h.message
          };
        } catch (h) {
          m.value = {
            type: "error",
            message: h instanceof Error ? h.message : "Connection test failed"
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
    return (h, w) => (n(), D($t, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: w[5] || (w[5] = (x) => h.$emit("close"))
    }, {
      body: g(() => [
        t("div", W6, [
          t("div", G6, [
            t("div", j6, [
              w[6] || (w[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              nt(t("input", {
                "onUpdate:modelValue": w[0] || (w[0] = (x) => l.name = x),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [Xt, l.name]
              ])
            ]),
            t("div", H6, [
              t("div", K6, [
                w[7] || (w[7] = t("label", { class: "form-label" }, "Host", -1)),
                nt(t("input", {
                  "onUpdate:modelValue": w[1] || (w[1] = (x) => l.host = x),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [Xt, l.host]
                ])
              ]),
              t("div", q6, [
                w[8] || (w[8] = t("label", { class: "form-label" }, "Port", -1)),
                nt(t("input", {
                  "onUpdate:modelValue": w[2] || (w[2] = (x) => l.port = x),
                  type: "number",
                  class: "form-input",
                  placeholder: "9090"
                }, null, 512), [
                  [
                    Xt,
                    l.port,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ]),
            t("div", Y6, [
              w[9] || (w[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", J6, [
                nt(t("input", {
                  "onUpdate:modelValue": w[3] || (w[3] = (x) => l.apiKey = x),
                  type: r.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, Q6), [
                  [ua, l.apiKey]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: w[4] || (w[4] = (x) => r.value = !r.value),
                  type: "button"
                }, d(r.value ? "👁" : "👁‍🗨"), 1)
              ]),
              w[10] || (w[10] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                $(" Run "),
                t("code", null, "cg-deploy worker setup"),
                $(" on the worker to get the key ")
              ], -1))
            ]),
            m.value ? (n(), i("div", {
              key: 0,
              class: De(["test-result", m.value.type])
            }, [
              t("span", X6, d(m.value.type === "success" ? "✓" : "✕"), 1),
              t("div", Z6, [
                t("span", eE, d(m.value.message), 1),
                m.value.gpu_info ? (n(), i("span", tE, "GPU: " + d(m.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: g(() => [
        t("div", sE, [
          C(me, {
            variant: "ghost",
            size: "sm",
            loading: c.value,
            disabled: !f.value || c.value,
            onClick: p
          }, {
            default: g(() => [...w[11] || (w[11] = [
              $(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          C(me, {
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !v.value || u.value,
            onClick: _
          }, {
            default: g(() => [...w[12] || (w[12] = [
              $(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }));
  }
}), nE = /* @__PURE__ */ _e(oE, [["__scopeId", "data-v-07a00732"]]), aE = { class: "discovered-content" }, lE = {
  key: 0,
  class: "workers-list"
}, iE = { class: "worker-info" }, rE = { class: "worker-name" }, cE = { class: "worker-address" }, uE = {
  key: 0,
  class: "worker-gpu"
}, dE = {
  key: 1,
  class: "empty-state"
}, mE = {
  key: 2,
  class: "api-key-section"
}, fE = { class: "selected-worker" }, vE = { class: "selected-name" }, pE = { class: "selected-address" }, gE = { class: "form-row" }, hE = { class: "api-key-wrapper" }, yE = ["type"], wE = { class: "result-icon" }, _E = { class: "result-message" }, kE = { class: "modal-actions" }, bE = /* @__PURE__ */ he({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = it(), l = k(null), r = k(""), c = k(!1), u = k(!1), m = k(null), f = k(null);
    async function v(_) {
      var h;
      l.value = _, r.value = "", f.value = null, await Rt(), (h = m.value) == null || h.focus();
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
    return (_, h) => (n(), D($t, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: h[3] || (h[3] = (w) => _.$emit("close"))
    }, {
      body: g(() => [
        t("div", aE, [
          e.workers.length > 0 ? (n(), i("div", lE, [
            (n(!0), i(j, null, ve(e.workers, (w) => (n(), i("div", {
              key: `${w.host}:${w.port}`,
              class: "worker-item"
            }, [
              t("div", iE, [
                t("span", rE, d(w.name), 1),
                t("span", cE, d(w.host) + ":" + d(w.port), 1),
                w.gpu_info ? (n(), i("span", uE, d(w.gpu_info), 1)) : y("", !0)
              ]),
              C(me, {
                variant: "primary",
                size: "xs",
                onClick: (x) => v(w)
              }, {
                default: g(() => [...h[4] || (h[4] = [
                  $(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (n(), i("div", dE, [...h[5] || (h[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              $("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (n(), i("div", mE, [
            t("div", fE, [
              h[6] || (h[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", vE, d(l.value.name), 1),
              t("span", pE, "(" + d(l.value.host) + ":" + d(l.value.port) + ")", 1)
            ]),
            t("div", gE, [
              h[7] || (h[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", hE, [
                nt(t("input", {
                  ref_key: "apiKeyInput",
                  ref: m,
                  "onUpdate:modelValue": h[0] || (h[0] = (w) => r.value = w),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: as(p, ["enter"])
                }, null, 40, yE), [
                  [ua, r.value]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: h[1] || (h[1] = (w) => c.value = !c.value),
                  type: "button"
                }, d(c.value ? "👁" : "👁‍🗨"), 1)
              ]),
              h[8] || (h[8] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                $(" Run "),
                t("code", null, "cg-deploy worker setup"),
                $(" on the worker to get the key ")
              ], -1))
            ]),
            f.value ? (n(), i("div", {
              key: 0,
              class: De(["test-result", f.value.type])
            }, [
              t("span", wE, d(f.value.type === "success" ? "✓" : "✕"), 1),
              t("span", _E, d(f.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        t("div", kE, [
          l.value ? (n(), D(me, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: h[2] || (h[2] = (w) => {
              l.value = null, r.value = "", f.value = null;
            })
          }, {
            default: g(() => [...h[9] || (h[9] = [
              $(" Back ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          l.value ? (n(), D(me, {
            key: 1,
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !r.value || u.value,
            onClick: p
          }, {
            default: g(() => [...h[10] || (h[10] = [
              $(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), $E = /* @__PURE__ */ _e(bE, [["__scopeId", "data-v-5a3e40a4"]]), CE = { class: "deploy-content" }, xE = { class: "section" }, SE = {
  key: 0,
  class: "loading-text"
}, IE = {
  key: 1,
  class: "empty-remotes"
}, EE = {
  key: 2,
  class: "remotes-list"
}, TE = { class: "section" }, PE = { class: "mode-options" }, RE = { class: "mode-option" }, ME = ["disabled"], DE = { class: "mode-option" }, LE = { class: "section" }, UE = {
  key: 0,
  class: "section"
}, NE = { class: "summary-row" }, OE = {
  key: 1,
  class: "sync-warning"
}, AE = { class: "warning-content" }, zE = { class: "modal-actions" }, VE = /* @__PURE__ */ he({
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
    } = it(), v = k([]), p = k({}), _ = k(!1), h = k(null), w = k(null), x = k(null), b = k(o.worker.mode || "native"), S = k(""), A = k(null), T = k(!1), P = N(() => h.value && p.value[h.value] || null), M = N(() => {
      if (!h.value) return null;
      const H = v.value.find((B) => B.name === h.value);
      return (H == null ? void 0 : H.fetch_url) || null;
    }), O = N(() => M.value && !T.value);
    async function F() {
      _.value = !0;
      try {
        const H = await l();
        v.value = H.remotes, await Promise.all(
          H.remotes.map(async (W) => {
            const se = await r(W.name);
            se && (p.value[W.name] = se);
          })
        );
        const B = H.remotes.find((W) => W.is_default);
        B ? h.value = B.name : H.remotes.length > 0 && (h.value = H.remotes[0].name);
      } catch {
        a("toast", "Failed to load remotes", "error");
      } finally {
        _.value = !1;
      }
    }
    async function I() {
      try {
        A.value = await m();
      } catch {
      }
    }
    async function L(H) {
      w.value = H;
      try {
        await c(H);
        const B = await r(H);
        B && (p.value[H] = B), a("toast", `Fetched from ${H}`, "success");
      } catch {
        a("toast", "Fetch failed", "error");
      } finally {
        w.value = null;
      }
    }
    async function te(H) {
      x.value = H;
      try {
        await u(H, { force: !1 });
        const B = await r(H);
        B && (p.value[H] = B), a("toast", `Pushed to ${H}`, "success");
      } catch {
        a("toast", "Push failed", "error");
      } finally {
        x.value = null;
      }
    }
    function Y(H) {
      h.value = H;
    }
    async function K() {
      if (M.value) {
        T.value = !0;
        try {
          const H = await f(o.worker.name, {
            import_source: M.value,
            mode: b.value,
            name: S.value || void 0
          });
          H.id ? (a("toast", `Deployment started: ${H.name || H.id}`, "success"), a("deployed")) : H.status === "error" ? a("toast", H.message || "Deployment failed", "error") : a("toast", "Unexpected response from worker", "error");
        } catch (H) {
          a("toast", H instanceof Error ? H.message : "Deployment failed", "error");
        } finally {
          T.value = !1;
        }
      }
    }
    return at(() => {
      F(), I();
    }), (H, B) => (n(), D($t, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: B[5] || (B[5] = (W) => H.$emit("close"))
    }, {
      body: g(() => [
        t("div", CE, [
          t("div", xE, [
            B[7] || (B[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            _.value ? (n(), i("div", SE, "Loading remotes...")) : v.value.length === 0 ? (n(), i("div", IE, [...B[6] || (B[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (n(), i("div", EE, [
              (n(!0), i(j, null, ve(v.value, (W) => (n(), D(tc, {
                key: W.name,
                remote: W,
                "sync-status": p.value[W.name],
                "is-selected": h.value === W.name,
                "is-fetching": w.value === W.name,
                "is-pushing": x.value === W.name,
                onFetch: L,
                onPush: te,
                onSelect: Y
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", TE, [
            B[10] || (B[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", PE, [
              t("label", RE, [
                nt(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": B[0] || (B[0] = (W) => b.value = W),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, ME), [
                  [ms, b.value]
                ]),
                B[8] || (B[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", DE, [
                nt(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": B[1] || (B[1] = (W) => b.value = W),
                  value: "native"
                }, null, 512), [
                  [ms, b.value]
                ]),
                B[9] || (B[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", LE, [
            B[11] || (B[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            nt(t("input", {
              "onUpdate:modelValue": B[2] || (B[2] = (W) => S.value = W),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [Xt, S.value]
            ])
          ]),
          A.value ? (n(), i("div", UE, [
            B[12] || (B[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", NE, " ComfyUI: " + d(A.value.comfyui_version) + " • " + d(A.value.node_count) + " nodes • " + d(A.value.model_count) + " models • " + d(A.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          P.value && P.value.ahead > 0 ? (n(), i("div", OE, [
            B[14] || (B[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", AE, [
              t("strong", null, d(P.value.ahead) + " unpushed commit" + d(P.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + d(h.value) + "' before deploying to include your latest changes.", 1)
            ]),
            C(me, {
              variant: "primary",
              size: "xs",
              loading: x.value === h.value,
              onClick: B[3] || (B[3] = (W) => h.value && te(h.value))
            }, {
              default: g(() => [...B[13] || (B[13] = [
                $(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        t("div", zE, [
          C(me, {
            variant: "ghost",
            size: "sm",
            onClick: B[4] || (B[4] = (W) => H.$emit("close"))
          }, {
            default: g(() => [...B[15] || (B[15] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          C(me, {
            variant: "primary",
            size: "sm",
            loading: T.value,
            disabled: !O.value || T.value,
            onClick: K
          }, {
            default: g(() => [...B[16] || (B[16] = [
              $(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), FE = /* @__PURE__ */ _e(VE, [["__scopeId", "data-v-c12720d3"]]), BE = { class: "custom-tab" }, WE = { class: "section-header" }, GE = { class: "section-actions" }, jE = { class: "workers-content" }, HE = {
  key: 0,
  class: "loading-state"
}, KE = {
  key: 1,
  class: "empty-state"
}, qE = {
  key: 2,
  class: "workers-list"
}, YE = { class: "scan-icon" }, JE = { class: "scan-message" }, QE = /* @__PURE__ */ he({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: a,
      addCustomWorker: l,
      removeCustomWorker: r,
      scanForWorkers: c
    } = it(), u = k([]), m = k([]), f = k(!1), v = k(!1), p = k(null), _ = k(!1), h = k(!1), w = k(null), x = k(null);
    async function b() {
      f.value = !0;
      try {
        const F = await a();
        u.value = F.workers;
      } catch (F) {
        o("toast", F instanceof Error ? F.message : "Failed to load workers", "error");
      } finally {
        f.value = !1;
      }
    }
    async function S() {
      v.value = !0, x.value = null;
      try {
        const F = await c(), I = F.discovered.filter(
          (L) => !u.value.some((te) => te.host === L.host && te.port === L.port)
        );
        m.value = I, I.length > 0 ? h.value = !0 : F.discovered.length > 0 ? x.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : x.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (F) {
        o("toast", F instanceof Error ? F.message : "Network scan failed", "error");
      } finally {
        v.value = !1;
      }
    }
    async function A(F) {
      try {
        await l(F), o("toast", `Worker '${F.name}' added`, "success"), _.value = !1, await b();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function T(F) {
      try {
        await l(F), o("toast", `Worker '${F.name}' added`, "success"), h.value = !1, await b();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function P(F) {
      p.value = F;
      try {
        await r(F), o("toast", `Worker '${F}' removed`, "success"), await b();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to remove worker", "error");
      } finally {
        p.value = null;
      }
    }
    function M(F) {
      w.value = F;
    }
    function O() {
      w.value = null, o("deployed");
    }
    return at(() => {
      b();
    }), (F, I) => (n(), i("div", BE, [
      t("div", WE, [
        I[8] || (I[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", GE, [
          C(me, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: S
          }, {
            default: g(() => [...I[6] || (I[6] = [
              $(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          C(me, {
            variant: "secondary",
            size: "xs",
            onClick: I[0] || (I[0] = (L) => _.value = !0)
          }, {
            default: g(() => [...I[7] || (I[7] = [
              $(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", jE, [
        f.value && u.value.length === 0 ? (n(), i("div", HE, [...I[9] || (I[9] = [
          t("span", { class: "spinner" }, null, -1),
          $(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (n(), i("div", KE, [...I[10] || (I[10] = [
          t("div", { class: "empty-card" }, [
            t("span", { class: "empty-text" }, "No workers registered yet"),
            t("p", { class: "empty-help" }, " To add a custom worker: "),
            t("ol", { class: "setup-steps" }, [
              t("li", null, [
                $("On your GPU machine, run:"),
                t("br"),
                t("code", null, "cg-deploy worker setup"),
                t("br"),
                t("code", null, "cg-deploy worker up --broadcast")
              ]),
              t("li", null, 'Click "Scan Network" above or "Add" to enter manually')
            ])
          ], -1)
        ])])) : (n(), i("div", qE, [
          (n(!0), i(j, null, ve(u.value, (L) => (n(), D(B6, {
            key: L.name,
            worker: L,
            "is-action-loading": p.value === L.name,
            onDeploy: M,
            onRemove: P
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      x.value ? (n(), i("div", {
        key: 0,
        class: De(["scan-result", x.value.type])
      }, [
        t("span", YE, d(x.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", JE, d(x.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: I[1] || (I[1] = (L) => x.value = null)
        }, "×")
      ], 2)) : y("", !0),
      h.value ? (n(), D($E, {
        key: 1,
        workers: m.value,
        onClose: I[2] || (I[2] = (L) => h.value = !1),
        onAdd: T
      }, null, 8, ["workers"])) : y("", !0),
      _.value ? (n(), D(nE, {
        key: 2,
        onClose: I[3] || (I[3] = (L) => _.value = !1),
        onAdd: A
      })) : y("", !0),
      w.value ? (n(), D(FE, {
        key: 3,
        worker: w.value,
        onClose: I[4] || (I[4] = (L) => w.value = null),
        onToast: I[5] || (I[5] = (L, te) => o("toast", L, te)),
        onDeployed: O
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), XE = /* @__PURE__ */ _e(QE, [["__scopeId", "data-v-1637dead"]]), Ma = "ComfyGit.Deploy.GitHubPAT";
function sc(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function ZE(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function eT() {
  function e() {
    try {
      return localStorage.getItem(Ma);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(Ma, l);
    } catch (r) {
      console.error("[useGitAuth] Failed to save token:", r);
    }
  }
  function o() {
    try {
      localStorage.removeItem(Ma);
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
    isRemoteSsh: sc,
    isRemoteHttps: ZE
  };
}
const tT = { class: "settings-content" }, sT = { class: "settings-section" }, oT = {
  key: 0,
  class: "ssh-warning"
}, nT = { class: "form-row" }, aT = { class: "token-wrapper" }, lT = ["type"], iT = { class: "result-icon" }, rT = { class: "result-message" }, cT = { class: "token-actions" }, uT = /* @__PURE__ */ he({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: a, setToken: l, clearToken: r, hasToken: c } = eT(), { getRemotes: u, testGitAuth: m } = it(), f = k(""), v = k(!1), p = k(!1), _ = k(null), h = k(!1), w = N(() => c());
    at(async () => {
      var T;
      const A = a();
      A && (f.value = A);
      try {
        const M = (T = (await u()).remotes) == null ? void 0 : T.find((O) => O.name === "origin");
        M && sc(M.url) && (h.value = !0);
      } catch {
      }
    });
    async function x() {
      if (f.value) {
        p.value = !0, _.value = null;
        try {
          const A = await m(f.value);
          _.value = {
            type: A.status === "success" ? "success" : "error",
            message: A.message
          };
        } catch (A) {
          _.value = {
            type: "error",
            message: A instanceof Error ? A.message : "Connection test failed"
          };
        } finally {
          p.value = !1;
        }
      }
    }
    function b() {
      f.value && (l(f.value), o("saved"), o("close"));
    }
    function S() {
      r(), f.value = "", _.value = null;
    }
    return (A, T) => (n(), D($t, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: T[2] || (T[2] = (P) => A.$emit("close"))
    }, {
      body: g(() => [
        t("div", tT, [
          t("div", sT, [
            T[8] || (T[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            T[9] || (T[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            h.value ? (n(), i("div", oT, [...T[3] || (T[3] = [
              t("span", { class: "warning-icon" }, "!", -1),
              t("div", { class: "warning-content" }, [
                t("strong", null, "SSH remote detected"),
                t("p", null, [
                  $("PAT authentication only works with HTTPS remotes. Consider converting your remote URL from "),
                  t("code", null, "git@github.com:..."),
                  $(" to "),
                  t("code", null, "https://github.com/...")
                ])
              ], -1)
            ])])) : y("", !0),
            t("div", nT, [
              T[4] || (T[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", aT, [
                nt(t("input", {
                  "onUpdate:modelValue": T[0] || (T[0] = (P) => f.value = P),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, lT), [
                  [ua, f.value]
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
              class: De(["test-result", _.value.type])
            }, [
              t("span", iT, d(_.value.type === "success" ? "✓" : "✕"), 1),
              t("span", rT, d(_.value.message), 1)
            ], 2)) : y("", !0),
            t("div", cT, [
              C(me, {
                variant: "ghost",
                size: "sm",
                loading: p.value,
                disabled: !f.value || p.value,
                onClick: x
              }, {
                default: g(() => [...T[6] || (T[6] = [
                  $(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              w.value ? (n(), D(me, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: S
              }, {
                default: g(() => [...T[7] || (T[7] = [
                  $(" Clear ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ])
      ]),
      footer: g(() => [
        C(me, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: b
        }, {
          default: g(() => [...T[10] || (T[10] = [
            $(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), dT = /* @__PURE__ */ _e(uT, [["__scopeId", "data-v-b21588ad"]]), mT = /* @__PURE__ */ he({
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
    } = ec(), _ = k(!1), h = k(!1), w = k("instances"), x = k(null), b = k(null), S = N(() => [
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
    async function A(F) {
      x.value = F.id;
      try {
        await u(F), o("toast", "Instance stopped", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to stop instance", "error");
      } finally {
        x.value = null;
      }
    }
    async function T(F) {
      x.value = F.id;
      try {
        await m(F), o("toast", "Instance starting...", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to start instance", "error");
      } finally {
        x.value = null;
      }
    }
    function P(F) {
      b.value = F;
    }
    async function M() {
      const F = b.value;
      if (F) {
        b.value = null, x.value = F.id;
        try {
          await f(F), o("toast", "Instance terminated", "success");
        } catch (I) {
          o("toast", I instanceof Error ? I.message : "Failed to terminate instance", "error");
        } finally {
          x.value = null;
        }
      }
    }
    async function O() {
      await c(), w.value = "instances";
    }
    return at(() => {
      c(), v();
    }), Qs(() => {
      p();
    }), (F, I) => (n(), i(j, null, [
      C(Ht, null, {
        header: g(() => [
          C(Kt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: I[1] || (I[1] = (L) => _.value = !0)
          }, {
            actions: g(() => [
              C(me, {
                variant: "ghost",
                size: "xs",
                onClick: I[0] || (I[0] = (L) => h.value = !0)
              }, {
                default: g(() => [...I[10] || (I[10] = [
                  $(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          C(Hr, {
            modelValue: w.value,
            "onUpdate:modelValue": I[2] || (I[2] = (L) => w.value = L),
            tabs: S.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: g(() => [
          w.value === "instances" ? (n(), D(E4, {
            key: 0,
            instances: Xe(a),
            "is-loading": Xe(l),
            "action-loading-id": x.value,
            onRefresh: Xe(c),
            onStop: A,
            onStart: T,
            onTerminate: P
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          w.value === "runpod" ? (n(), D(x6, {
            key: 1,
            onToast: I[3] || (I[3] = (L, te) => o("toast", L, te)),
            onNavigate: I[4] || (I[4] = (L) => o("navigate", L)),
            onDeployed: O
          })) : y("", !0),
          w.value === "custom" ? (n(), D(XE, {
            key: 2,
            onToast: I[5] || (I[5] = (L, te) => o("toast", L, te)),
            onDeployed: O
          })) : y("", !0)
        ]),
        _: 1
      }),
      b.value ? (n(), D(hl, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${b.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: M,
        onCancel: I[6] || (I[6] = (L) => b.value = null)
      }, null, 8, ["message"])) : y("", !0),
      C(ys, {
        show: _.value,
        title: "Deploy to Cloud",
        onClose: I[7] || (I[7] = (L) => _.value = !1)
      }, {
        content: g(() => [...I[11] || (I[11] = [
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
                  $(" - All committed workflows")
                ]),
                t("li", null, [
                  t("strong", null, "Custom Nodes"),
                  $(" - Installed automatically")
                ]),
                t("li", null, [
                  t("strong", null, "Models"),
                  $(" - Downloaded from sources (when available)")
                ]),
                t("li", null, [
                  t("strong", null, "Configuration"),
                  $(" - Environment settings")
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
      h.value ? (n(), D(dT, {
        key: 1,
        onClose: I[8] || (I[8] = (L) => h.value = !1),
        onSaved: I[9] || (I[9] = (L) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), fT = /* @__PURE__ */ _e(mT, [["__scopeId", "data-v-d4e32a10"]]), vT = { class: "header-info" }, pT = { class: "commit-hash" }, gT = {
  key: 0,
  class: "commit-refs"
}, hT = { class: "commit-message" }, yT = { class: "commit-date" }, wT = {
  key: 0,
  class: "loading"
}, _T = {
  key: 1,
  class: "changes-section"
}, kT = { class: "stats-row" }, bT = { class: "stat" }, $T = { class: "stat insertions" }, CT = { class: "stat deletions" }, xT = {
  key: 0,
  class: "change-group"
}, ST = {
  key: 1,
  class: "change-group"
}, IT = {
  key: 0,
  class: "version"
}, ET = {
  key: 2,
  class: "change-group"
}, TT = { class: "change-item" }, PT = /* @__PURE__ */ he({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = it(), a = k(null), l = k(!0), r = N(() => {
      if (!a.value) return !1;
      const u = a.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = N(() => {
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
      header: g(() => {
        var f, v, p, _;
        return [
          t("div", vT, [
            m[4] || (m[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", pT, d(((f = a.value) == null ? void 0 : f.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (_ = (p = a.value) == null ? void 0 : p.refs) != null && _.length ? (n(), i("span", gT, [
              (n(!0), i(j, null, ve(a.value.refs, (h) => (n(), i("span", {
                key: h,
                class: "ref-badge"
              }, d(h), 1))), 128))
            ])) : y("", !0)
          ]),
          C(Me, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (h) => u.$emit("close"))
          }, {
            default: g(() => [...m[5] || (m[5] = [
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
      body: g(() => {
        var f, v;
        return [
          t("div", hT, d(((f = a.value) == null ? void 0 : f.message) || e.commit.message), 1),
          t("div", yT, d(((v = a.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (n(), i("div", wT, "Loading details...")) : a.value ? (n(), i("div", _T, [
            t("div", kT, [
              t("span", bT, d(a.value.stats.files_changed) + " files", 1),
              t("span", $T, "+" + d(a.value.stats.insertions), 1),
              t("span", CT, "-" + d(a.value.stats.deletions), 1)
            ]),
            r.value ? (n(), i("div", xT, [
              C(ro, { variant: "section" }, {
                default: g(() => [...m[6] || (m[6] = [
                  $("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(j, null, ve(a.value.changes.workflows.added, (p) => (n(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                m[7] || (m[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, d(p), 1)
              ]))), 128)),
              (n(!0), i(j, null, ve(a.value.changes.workflows.modified, (p) => (n(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                m[8] || (m[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, d(p), 1)
              ]))), 128)),
              (n(!0), i(j, null, ve(a.value.changes.workflows.deleted, (p) => (n(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                m[9] || (m[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, d(p), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (n(), i("div", ST, [
              C(ro, { variant: "section" }, {
                default: g(() => [...m[10] || (m[10] = [
                  $("NODES", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(j, null, ve(a.value.changes.nodes.added, (p) => (n(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                m[11] || (m[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, d(p.name), 1),
                p.version ? (n(), i("span", IT, "(" + d(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (n(!0), i(j, null, ve(a.value.changes.nodes.removed, (p) => (n(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                m[12] || (m[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, d(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", ET, [
              C(ro, { variant: "section" }, {
                default: g(() => [...m[13] || (m[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", TT, [
                m[14] || (m[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, d(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: g(() => [
        C(Me, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (f) => u.$emit("createBranch", e.commit))
        }, {
          default: g(() => [...m[15] || (m[15] = [
            $(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        C(Me, {
          variant: "primary",
          onClick: m[2] || (m[2] = (f) => u.$emit("checkout", e.commit))
        }, {
          default: g(() => [...m[16] || (m[16] = [
            $(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), RT = /* @__PURE__ */ _e(PT, [["__scopeId", "data-v-d256ff6d"]]), MT = { class: "popover-header" }, DT = { class: "popover-body" }, LT = {
  key: 0,
  class: "changes-summary"
}, UT = {
  key: 0,
  class: "change-item"
}, NT = {
  key: 1,
  class: "change-item"
}, OT = {
  key: 2,
  class: "change-item"
}, AT = {
  key: 3,
  class: "change-item"
}, zT = {
  key: 4,
  class: "change-item"
}, VT = {
  key: 5,
  class: "change-item"
}, FT = {
  key: 1,
  class: "no-changes"
}, BT = {
  key: 2,
  class: "loading"
}, WT = {
  key: 3,
  class: "issues-error"
}, GT = { class: "error-header" }, jT = { class: "error-title" }, HT = { class: "issues-list" }, KT = { class: "workflow-state" }, qT = { class: "message-section" }, YT = { class: "popover-footer" }, JT = {
  key: 1,
  class: "commit-popover"
}, QT = { class: "popover-header" }, XT = { class: "popover-body" }, ZT = {
  key: 0,
  class: "changes-summary"
}, e7 = {
  key: 0,
  class: "change-item"
}, t7 = {
  key: 1,
  class: "change-item"
}, s7 = {
  key: 2,
  class: "change-item"
}, o7 = {
  key: 3,
  class: "change-item"
}, n7 = {
  key: 4,
  class: "change-item"
}, a7 = {
  key: 5,
  class: "change-item"
}, l7 = {
  key: 1,
  class: "no-changes"
}, i7 = {
  key: 2,
  class: "loading"
}, r7 = {
  key: 3,
  class: "issues-error"
}, c7 = { class: "error-header" }, u7 = { class: "error-title" }, d7 = { class: "issues-list" }, m7 = { class: "workflow-state" }, f7 = { class: "message-section" }, v7 = { class: "popover-footer" }, p7 = /* @__PURE__ */ he({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = it(), r = k(""), c = k(!1), u = k(!1), m = N(() => {
      if (!o.status) return !1;
      const w = o.status.workflows;
      return w.new.length > 0 || w.modified.length > 0 || w.deleted.length > 0 || o.status.has_changes;
    }), f = N(() => {
      if (!o.status) return !1;
      const w = o.status.workflows, x = o.status.git_changes;
      return w.new.length > 0 || w.modified.length > 0 || w.deleted.length > 0 || x.nodes_added.length > 0 || x.nodes_removed.length > 0;
    }), v = N(() => {
      var w;
      return (w = o.status) != null && w.workflows.analyzed ? o.status.workflows.analyzed.filter((x) => x.has_issues) : [];
    }), p = N(() => v.value.length > 0), _ = N(() => p.value && !u.value);
    async function h() {
      var w, x, b, S;
      if (!(p.value && !u.value) && !(!m.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const A = await l(r.value.trim(), u.value);
          if (A.status === "success") {
            const T = `Committed: ${((w = A.summary) == null ? void 0 : w.new) || 0} new, ${((x = A.summary) == null ? void 0 : x.modified) || 0} modified, ${((b = A.summary) == null ? void 0 : b.deleted) || 0} deleted`;
            a("committed", { success: !0, message: T });
          } else if (A.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (A.status === "blocked") {
            const T = ((S = A.issues) == null ? void 0 : S.map((P) => `${P.name}: ${P.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${T}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: A.message || "Commit failed" });
        } catch (A) {
          a("committed", { success: !1, message: A instanceof Error ? A.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (w, x) => e.asModal ? (n(), D(Nt, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = (b) => a("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = bt(() => {
          }, ["stop"]))
        }, [
          t("div", MT, [
            x[11] || (x[11] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            t("button", {
              class: "close-btn",
              onClick: x[0] || (x[0] = (b) => a("close"))
            }, [...x[10] || (x[10] = [
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
          t("div", DT, [
            e.status && m.value ? (n(), i("div", LT, [
              e.status.workflows.new.length ? (n(), i("div", UT, [
                x[12] || (x[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, d(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (n(), i("div", NT, [
                x[13] || (x[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, d(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (n(), i("div", OT, [
                x[14] || (x[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, d(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (n(), i("div", AT, [
                x[15] || (x[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, d(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (n(), i("div", zT, [
                x[16] || (x[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, d(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              f.value ? y("", !0) : (n(), i("div", VT, [...x[17] || (x[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (n(), i("div", FT, " No changes to commit ")) : (n(), i("div", BT, " Loading... ")),
            p.value ? (n(), i("div", WT, [
              t("div", GT, [
                x[18] || (x[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", jT, d(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", HT, [
                (n(!0), i(j, null, ve(v.value, (b) => (n(), i("div", {
                  key: b.name,
                  class: "issue-item"
                }, [
                  t("strong", null, d(b.name), 1),
                  t("span", KT, "(" + d(b.sync_state) + ")", 1),
                  $(": " + d(b.issue_summary), 1)
                ]))), 128))
              ]),
              C(Qn, {
                modelValue: u.value,
                "onUpdate:modelValue": x[1] || (x[1] = (b) => u.value = b),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...x[19] || (x[19] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            t("div", qT, [
              C(qn, {
                modelValue: r.value,
                "onUpdate:modelValue": x[2] || (x[2] = (b) => r.value = b),
                placeholder: _.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
                disabled: !m.value || c.value || _.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: h,
                onSubmit: h
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          t("div", YT, [
            C(Me, {
              variant: "secondary",
              onClick: x[3] || (x[3] = (b) => a("close"))
            }, {
              default: g(() => [...x[20] || (x[20] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(Me, {
              variant: u.value ? "danger" : "primary",
              disabled: !m.value || !r.value.trim() || c.value || _.value,
              loading: c.value,
              onClick: h
            }, {
              default: g(() => [
                $(d(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (n(), i("div", JT, [
      t("div", QT, [
        x[22] || (x[22] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: x[6] || (x[6] = (b) => a("close"))
        }, [...x[21] || (x[21] = [
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
      t("div", XT, [
        e.status && m.value ? (n(), i("div", ZT, [
          e.status.workflows.new.length ? (n(), i("div", e7, [
            x[23] || (x[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, d(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (n(), i("div", t7, [
            x[24] || (x[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, d(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", s7, [
            x[25] || (x[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, d(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", o7, [
            x[26] || (x[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, d(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", n7, [
            x[27] || (x[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, d(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          f.value ? y("", !0) : (n(), i("div", a7, [...x[28] || (x[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", l7, " No changes to commit ")) : (n(), i("div", i7, " Loading... ")),
        p.value ? (n(), i("div", r7, [
          t("div", c7, [
            x[29] || (x[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", u7, d(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", d7, [
            (n(!0), i(j, null, ve(v.value, (b) => (n(), i("div", {
              key: b.name,
              class: "issue-item"
            }, [
              t("strong", null, d(b.name), 1),
              t("span", m7, "(" + d(b.sync_state) + ")", 1),
              $(": " + d(b.issue_summary), 1)
            ]))), 128))
          ]),
          C(Qn, {
            modelValue: u.value,
            "onUpdate:modelValue": x[7] || (x[7] = (b) => u.value = b),
            class: "allow-issues-toggle"
          }, {
            default: g(() => [...x[30] || (x[30] = [
              $(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        t("div", f7, [
          C(qn, {
            modelValue: r.value,
            "onUpdate:modelValue": x[8] || (x[8] = (b) => r.value = b),
            placeholder: _.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || c.value || _.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: h,
            onSubmit: h
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", v7, [
        C(Me, {
          variant: "secondary",
          onClick: x[9] || (x[9] = (b) => a("close"))
        }, {
          default: g(() => [...x[31] || (x[31] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        C(Me, {
          variant: u.value ? "danger" : "primary",
          disabled: !m.value || !r.value.trim() || c.value || _.value,
          loading: c.value,
          onClick: h
        }, {
          default: g(() => [
            $(d(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), oc = /* @__PURE__ */ _e(p7, [["__scopeId", "data-v-5f897631"]]), g7 = { class: "modal-header" }, h7 = { class: "modal-body" }, y7 = { class: "switch-message" }, w7 = { class: "switch-details" }, _7 = { class: "modal-actions" }, k7 = /* @__PURE__ */ he({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), D(Nt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = bt(() => {
          }, ["stop"]))
        }, [
          t("div", g7, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", h7, [
            t("p", y7, [
              o[6] || (o[6] = $(" Switch from ", -1)),
              t("strong", null, d(e.fromEnvironment), 1),
              o[7] || (o[7] = $(" to ", -1)),
              t("strong", null, d(e.toEnvironment), 1),
              o[8] || (o[8] = $("? ", -1))
            ]),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This will restart ComfyUI")
            ], -1)),
            t("p", w7, ' Your current work will be preserved. You can switch back to "' + d(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", _7, [
            C(me, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(me, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
            }, {
              default: g(() => [...o[12] || (o[12] = [
                $(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), b7 = /* @__PURE__ */ _e(k7, [["__scopeId", "data-v-e9c5253e"]]), $7 = {
  key: 0,
  class: "modal-overlay"
}, C7 = { class: "modal-content" }, x7 = { class: "modal-body" }, S7 = { class: "progress-info" }, I7 = { class: "progress-percentage" }, E7 = { class: "progress-state" }, T7 = { class: "switch-steps" }, P7 = { class: "step-icon" }, R7 = { class: "step-label" }, M7 = /* @__PURE__ */ he({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const s = e, o = N(() => {
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
    }), a = N(() => s.state === "complete" ? "success" : s.state === "critical_failure" || s.state === "rolled_back" ? "error" : "default"), l = N(() => {
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
    return (r, c) => (n(), D(Nt, { to: "body" }, [
      e.show ? (n(), i("div", $7, [
        t("div", C7, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", x7, [
            C(ma, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            t("div", S7, [
              t("div", I7, d(e.progress) + "%", 1),
              t("div", E7, d(o.value), 1)
            ]),
            t("div", T7, [
              (n(!0), i(j, null, ve(l.value, (u) => (n(), i("div", {
                key: u.state,
                class: De(["switch-step", u.status])
              }, [
                t("span", P7, d(u.icon), 1),
                t("span", R7, d(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), D7 = /* @__PURE__ */ _e(M7, [["__scopeId", "data-v-768a5078"]]), L7 = { class: "modal-header" }, U7 = { class: "modal-body" }, N7 = {
  key: 0,
  class: "node-section"
}, O7 = { class: "node-list" }, A7 = {
  key: 1,
  class: "node-section"
}, z7 = { class: "node-list" }, V7 = { class: "modal-actions" }, F7 = /* @__PURE__ */ he({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), D(Nt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = bt(() => {
          }, ["stop"]))
        }, [
          t("div", L7, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", U7, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", N7, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", O7, [
                (n(!0), i(j, null, ve(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + d(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", A7, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", z7, [
                (n(!0), i(j, null, ve(e.mismatchDetails.extra_nodes, (a) => (n(), i("div", {
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
          t("div", V7, [
            C(me, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: g(() => [...o[10] || (o[10] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            C(me, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                $(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), B7 = /* @__PURE__ */ _e(F7, [["__scopeId", "data-v-7cad7518"]]), W7 = [
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
], Tn = "v0.0.24", G7 = "Akatz", j7 = { class: "social-buttons" }, H7 = ["title", "aria-label", "onClick"], K7 = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, q7 = ["d"], Y7 = ["title", "aria-label", "onClick"], J7 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Q7 = ["d"], X7 = /* @__PURE__ */ he({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", j7, [
      (n(!0), i(j, null, ve(Xe(W7), (l) => (n(), i(j, {
        key: l.id
      }, [
        l.label ? (n(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          $(d(l.label) + " ", 1),
          (n(), i("svg", K7, [
            t("path", {
              d: l.iconPath
            }, null, 8, q7)
          ]))
        ], 8, H7)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          (n(), i("svg", J7, [
            t("path", {
              d: l.iconPath
            }, null, 8, Q7)
          ]))
        ], 8, Y7))
      ], 64))), 128))
    ]));
  }
}), nc = /* @__PURE__ */ _e(X7, [["__scopeId", "data-v-4f846342"]]), Z7 = { class: "footer-info" }, eP = ["title"], tP = {
  key: 0,
  class: "dev-badge"
}, sP = { class: "made-by" }, oP = /* @__PURE__ */ he({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: s } = it(), o = k(null), a = k(null), l = k(null), r = N(() => o.value === "development"), c = N(() => {
      var m;
      if (!r.value) return Tn;
      const u = [a.value, (m = l.value) == null ? void 0 : m.slice(0, 7)].filter(Boolean).join(" @ ");
      return u ? `${Tn} (${u})` : `${Tn} (development)`;
    });
    return at(async () => {
      try {
        const u = await s();
        o.value = u.manager_source ?? null, a.value = u.manager_branch ?? null, l.value = u.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (u, m) => (n(), i("div", Z7, [
      t("span", {
        class: "version",
        title: c.value
      }, [
        $(d(Xe(Tn)) + " ", 1),
        r.value ? (n(), i("span", tP, "dev")) : y("", !0)
      ], 8, eP),
      t("span", sP, [
        m[0] || (m[0] = $(" made with ", -1)),
        m[1] || (m[1] = t("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          t("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        $(" by " + d(Xe(G7)), 1)
      ])
    ]));
  }
}), ac = /* @__PURE__ */ _e(oP, [["__scopeId", "data-v-4fa265b3"]]), nP = /* @__PURE__ */ he({
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
      body: g(() => [
        C(jr, {
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
            onClick: a
          }, {
            default: g(() => [...c[2] || (c[2] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          C(Me, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (m) => r.$emit("close"))
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
}), aP = /* @__PURE__ */ _e(nP, [["__scopeId", "data-v-fac00ae7"]]), lP = { class: "header-actions" }, iP = {
  key: 0,
  class: "wizard-step"
}, rP = { class: "form-field" }, cP = ["placeholder"], uP = {
  key: 0,
  class: "form-error"
}, dP = { class: "form-field form-field--checkbox" }, mP = { class: "form-checkbox" }, fP = {
  key: 0,
  class: "form-field"
}, vP = ["placeholder"], pP = {
  key: 0,
  class: "form-info"
}, gP = {
  key: 1,
  class: "form-suggestion"
}, hP = {
  key: 2,
  class: "form-error"
}, yP = {
  key: 3,
  class: "form-info"
}, wP = {
  key: 1,
  class: "wizard-step"
}, _P = {
  key: 0,
  class: "progress-check-loading"
}, kP = {
  key: 0,
  class: "cli-warning"
}, bP = { class: "cli-warning-header" }, $P = {
  key: 1,
  class: "env-landing"
}, CP = { class: "env-list" }, xP = ["value"], SP = { class: "env-name" }, IP = {
  key: 2,
  class: "env-create"
}, EP = { class: "form-field" }, TP = { class: "form-field" }, PP = ["value"], RP = { class: "form-field" }, MP = ["disabled"], DP = ["value"], LP = { class: "form-field" }, UP = ["value"], NP = { class: "form-field form-field--checkbox" }, OP = { class: "form-checkbox" }, AP = {
  key: 0,
  class: "form-error"
}, zP = {
  key: 1,
  class: "env-creating"
}, VP = { class: "creating-intro" }, FP = {
  key: 3,
  class: "env-import"
}, BP = { class: "wizard-footer" }, WP = { class: "wizard-footer-actions" }, $o = 10, GP = 600 * 1e3, fi = 1800 * 1e3, jP = /* @__PURE__ */ he({
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
    } = it(), p = k(o.initialStep || 1), _ = k(null), h = k("landing"), w = k(!1), x = k(!1), b = k(!1), S = k(!1), A = k(null), T = k(o.initialStep === 2), P = k(o.defaultPath), M = k(!!o.detectedModelsDir), O = k(o.detectedModelsDir || ""), F = k(null), I = k(null), L = k(null), te = k(null), Y = k("my-new-env"), K = k(Yr), H = k("latest"), B = k(Jr), W = k(!0), se = k(null), Ue = k(null), ee = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), ue = k(!1), ne = k(!1), ie = k(!1), ke = k({ progress: 0, message: "" }), Ee = k({ progress: 0, message: "" }), we = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], G = k(0), ae = k(null), V = k(0), U = k(null), oe = N(() => {
      var Se, Ce;
      const pe = (Se = P.value) == null ? void 0 : Se.trim(), q = !F.value, Ve = !M.value || !I.value && ((Ce = O.value) == null ? void 0 : Ce.trim());
      return pe && q && Ve;
    }), Ae = N(() => {
      var pe;
      return (pe = Y.value) == null ? void 0 : pe.trim();
    }), ze = N(() => !!(p.value === 2 || Ue.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), z = N(() => Ue.value || o.workspacePath || null);
    async function J() {
      var pe;
      if (F.value = null, !!((pe = P.value) != null && pe.trim()))
        try {
          const q = await c({ path: P.value, type: "workspace" });
          q.valid || (F.value = q.error || "Invalid path");
        } catch (q) {
          F.value = q instanceof Error ? q.message : "Validation failed";
        }
    }
    async function re() {
      var pe;
      if (I.value = null, L.value = null, te.value = null, !!((pe = O.value) != null && pe.trim()))
        try {
          const q = await c({ path: O.value, type: "models" });
          if (q.valid)
            te.value = q.model_count ?? null;
          else if (I.value = q.error || "Invalid path", q.suggestion) {
            L.value = q.suggestion, O.value = q.suggestion, I.value = null;
            const Ve = await c({ path: q.suggestion, type: "models" });
            Ve.valid && (te.value = Ve.model_count ?? null);
          }
        } catch (q) {
          I.value = q instanceof Error ? q.message : "Validation failed";
        }
    }
    async function Ie() {
      var pe, q, Ve, Se, Ce;
      if (F.value = null, I.value = null, await J(), (pe = F.value) != null && pe.includes("already exists")) {
        F.value = null, Ue.value = ((q = P.value) == null ? void 0 : q.trim()) || o.defaultPath, p.value = 2, $e();
        return;
      }
      if (!F.value && !(M.value && ((Ve = O.value) != null && Ve.trim()) && (await re(), I.value))) {
        ne.value = !0;
        try {
          await l({
            workspace_path: ((Se = P.value) == null ? void 0 : Se.trim()) || o.defaultPath,
            models_directory: M.value && ((Ce = O.value) == null ? void 0 : Ce.trim()) || null
          }), G.value = 0, ae.value = Date.now();
          const Ne = setInterval(async () => {
            var Pe;
            if (ae.value && Date.now() - ae.value > GP) {
              clearInterval(Ne), ne.value = !1, F.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Q = await r();
              if (G.value = 0, Q.state === "idle" && ne.value) {
                clearInterval(Ne), ne.value = !1, F.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              ke.value = { progress: Q.progress, message: Q.message }, Q.state === "complete" ? (clearInterval(Ne), ne.value = !1, Ue.value = ((Pe = P.value) == null ? void 0 : Pe.trim()) || o.defaultPath, p.value = 2, $e()) : Q.state === "error" && (clearInterval(Ne), ne.value = !1, F.value = Q.error || "Workspace creation failed");
            } catch (Q) {
              G.value++, console.warn(`Polling failure ${G.value}/${$o}:`, Q), G.value >= $o && (clearInterval(Ne), ne.value = !1, F.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Ne) {
          ne.value = !1, F.value = Ne instanceof Error ? Ne.message : "Failed to create workspace";
        }
      }
    }
    async function be() {
      ie.value = !0, se.value = null;
      try {
        const pe = {
          name: Y.value.trim() || "my-new-env",
          python_version: K.value,
          comfyui_version: H.value,
          torch_backend: B.value,
          switch_after: W.value,
          workspace_path: Ue.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(pe)).status === "started") {
          V.value = 0, U.value = Date.now();
          const Ve = setInterval(async () => {
            if (U.value && Date.now() - U.value > fi) {
              clearInterval(Ve), ie.value = !1, se.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Se = await m();
              if (V.value = 0, Se.state === "idle" && ie.value) {
                clearInterval(Ve), ie.value = !1, se.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Ee.value = {
                progress: Se.progress ?? 0,
                message: Se.message,
                phase: Se.phase
              }, Se.state === "complete") {
                clearInterval(Ve), ie.value = !1;
                const Ce = Se.environment_name || pe.name;
                W.value ? a("complete", Ce, Ue.value) : (h.value = "landing", a("environment-created-no-switch", Ce));
              } else Se.state === "error" && (clearInterval(Ve), ie.value = !1, se.value = Se.error || "Environment creation failed");
            } catch (Se) {
              V.value++, console.warn(`Polling failure ${V.value}/${$o}:`, Se), V.value >= $o && (clearInterval(Ve), ie.value = !1, se.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (pe) {
        ie.value = !1, se.value = pe instanceof Error ? pe.message : "Unknown error";
      }
    }
    async function $e() {
      ue.value = !0;
      try {
        ee.value = await v();
      } catch (pe) {
        console.error("Failed to load ComfyUI releases:", pe);
      } finally {
        ue.value = !1;
      }
    }
    function Le() {
      _.value && a("switch-environment", _.value, Ue.value);
    }
    function ye() {
      h.value === "create" || h.value === "import" ? h.value = "landing" : p.value === 2 && o.setupState === "no_workspace" && (p.value = 1);
    }
    function Re(pe, q) {
      x.value = !1, q ? a("complete", pe, Ue.value) : (a("environment-created-no-switch", pe), h.value = "landing");
    }
    function fe() {
    }
    at(async () => {
      if (o.detectedModelsDir && (O.value = o.detectedModelsDir), o.workspacePath && (Ue.value = o.workspacePath), p.value === 2) {
        $e();
        const pe = setTimeout(() => {
          T.value = !1;
        }, 3e3);
        await je(), clearTimeout(pe), T.value = !1;
      }
    });
    async function je() {
      try {
        const pe = await m();
        if (console.log("[ComfyGit] Create progress check:", pe.state, pe), pe.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", pe.environment_name), h.value = "create", ie.value = !0, Y.value = pe.environment_name || "my-new-env", Ee.value = {
            progress: pe.progress ?? 0,
            message: pe.message,
            phase: pe.phase
          }, Oe();
          return;
        }
      } catch (pe) {
        console.log("[ComfyGit] Create progress check failed:", pe);
      }
      try {
        const pe = await f();
        console.log("[ComfyGit] Import progress check:", pe.state, pe), pe.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", pe.environment_name), A.value = {
          message: pe.message || "Importing...",
          phase: pe.phase || "",
          progress: pe.progress ?? 0,
          environmentName: pe.environment_name || ""
        }, S.value = !0, h.value = "import", x.value = !0);
      } catch (pe) {
        console.log("[ComfyGit] Import progress check failed:", pe);
      }
    }
    async function Oe() {
      V.value = 0, U.value = Date.now();
      let pe = null;
      const q = async () => {
        if (U.value && Date.now() - U.value > fi)
          return pe && clearInterval(pe), ie.value = !1, se.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Se = await m();
          if (V.value = 0, Se.state === "idle" && ie.value)
            return pe && clearInterval(pe), ie.value = !1, se.value = "Environment creation was interrupted. Please try again.", !1;
          if (Ee.value = {
            progress: Se.progress ?? 0,
            message: Se.message,
            phase: Se.phase
          }, Se.state === "complete") {
            pe && clearInterval(pe), ie.value = !1;
            const Ce = Se.environment_name || Y.value;
            return a("complete", Ce, Ue.value), !1;
          } else if (Se.state === "error")
            return pe && clearInterval(pe), ie.value = !1, se.value = Se.error || "Environment creation failed", !1;
          return !0;
        } catch (Se) {
          return V.value++, console.warn(`Polling failure ${V.value}/${$o}:`, Se), V.value >= $o ? (pe && clearInterval(pe), ie.value = !1, se.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await q() && (pe = setInterval(async () => {
        !await q() && pe && clearInterval(pe);
      }, 2e3));
    }
    return (pe, q) => (n(), i(j, null, [
      C($t, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: q[15] || (q[15] = (Ve) => pe.$emit("close"))
      }, {
        header: g(() => [
          q[20] || (q[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", lP, [
            C(nc),
            q[19] || (q[19] = t("span", { class: "header-divider" }, null, -1)),
            ze.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: q[0] || (q[0] = (Ve) => w.value = !0)
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
              onClick: q[1] || (q[1] = (Ve) => pe.$emit("close")),
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
        body: g(() => {
          var Ve;
          return [
            p.value === 1 ? (n(), i("div", iP, [
              q[24] || (q[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", rP, [
                q[21] || (q[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                nt(t("input", {
                  "onUpdate:modelValue": q[2] || (q[2] = (Se) => P.value = Se),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, cP), [
                  [Xt, P.value]
                ]),
                F.value ? (n(), i("p", uP, d(F.value), 1)) : y("", !0)
              ]),
              t("div", dP, [
                t("label", mP, [
                  nt(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": q[3] || (q[3] = (Se) => M.value = Se)
                  }, null, 512), [
                    [mn, M.value]
                  ]),
                  q[22] || (q[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              M.value ? (n(), i("div", fP, [
                q[23] || (q[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                nt(t("input", {
                  "onUpdate:modelValue": q[4] || (q[4] = (Se) => O.value = Se),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, vP), [
                  [Xt, O.value]
                ]),
                e.detectedModelsDir && !O.value ? (n(), i("p", pP, " Detected: " + d(e.detectedModelsDir), 1)) : y("", !0),
                L.value ? (n(), i("p", gP, " Did you mean: " + d(L.value), 1)) : y("", !0),
                I.value ? (n(), i("p", hP, d(I.value), 1)) : y("", !0),
                te.value !== null && !I.value ? (n(), i("p", yP, " Found " + d(te.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              ne.value ? (n(), D(Jn, {
                key: 1,
                progress: ke.value.progress,
                message: ke.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (n(), i("div", wP, [
              T.value ? (n(), i("div", _P, [...q[25] || (q[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(j, { key: 1 }, [
                !o.cliInstalled && !b.value ? (n(), i("div", kP, [
                  t("div", bP, [
                    q[27] || (q[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    q[28] || (q[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: q[5] || (q[5] = (Se) => b.value = !0),
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
                h.value === "landing" ? (n(), i("div", $P, [
                  q[34] || (q[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: q[6] || (q[6] = (Se) => h.value = "create")
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
                    onClick: q[7] || (q[7] = (Se) => {
                      S.value = !1, h.value = "import";
                    })
                  }, [...q[32] || (q[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Ve = o.existingEnvironments) != null && Ve.length ? (n(), i(j, { key: 0 }, [
                    q[33] || (q[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", CP, [
                      (n(!0), i(j, null, ve(o.existingEnvironments, (Se) => (n(), i("label", {
                        key: Se,
                        class: De(["env-option", { selected: _.value === Se }])
                      }, [
                        nt(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: Se,
                          "onUpdate:modelValue": q[8] || (q[8] = (Ce) => _.value = Ce)
                        }, null, 8, xP), [
                          [ms, _.value]
                        ]),
                        t("span", SP, d(Se), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : h.value === "create" ? (n(), i("div", IP, [
                  ie.value ? (n(), i("div", zP, [
                    t("p", VP, [
                      q[41] || (q[41] = $(" Creating environment ", -1)),
                      t("strong", null, d(Y.value), 1),
                      q[42] || (q[42] = $("... ", -1))
                    ]),
                    C(Jn, {
                      progress: Ee.value.progress,
                      message: Ee.value.message,
                      "current-phase": Ee.value.phase,
                      "show-steps": !0,
                      steps: we
                    }, null, 8, ["progress", "message", "current-phase"]),
                    q[43] || (q[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(j, { key: 0 }, [
                    q[40] || (q[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", EP, [
                      q[35] || (q[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      nt(t("input", {
                        "onUpdate:modelValue": q[9] || (q[9] = (Se) => Y.value = Se),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Xt, Y.value]
                      ])
                    ]),
                    t("div", TP, [
                      q[36] || (q[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      nt(t("select", {
                        "onUpdate:modelValue": q[10] || (q[10] = (Se) => K.value = Se),
                        class: "form-select"
                      }, [
                        (n(!0), i(j, null, ve(Xe(qr), (Se) => (n(), i("option", {
                          key: Se,
                          value: Se
                        }, d(Se), 9, PP))), 128))
                      ], 512), [
                        [Is, K.value]
                      ])
                    ]),
                    t("div", RP, [
                      q[37] || (q[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      nt(t("select", {
                        "onUpdate:modelValue": q[11] || (q[11] = (Se) => H.value = Se),
                        class: "form-select",
                        disabled: ue.value
                      }, [
                        (n(!0), i(j, null, ve(ee.value, (Se) => (n(), i("option", {
                          key: Se.tag_name,
                          value: Se.tag_name
                        }, d(Se.name), 9, DP))), 128))
                      ], 8, MP), [
                        [Is, H.value]
                      ])
                    ]),
                    t("div", LP, [
                      q[38] || (q[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      nt(t("select", {
                        "onUpdate:modelValue": q[12] || (q[12] = (Se) => B.value = Se),
                        class: "form-select"
                      }, [
                        (n(!0), i(j, null, ve(Xe(yl), (Se) => (n(), i("option", {
                          key: Se,
                          value: Se
                        }, d(Se) + d(Se === "auto" ? " (detect GPU)" : ""), 9, UP))), 128))
                      ], 512), [
                        [Is, B.value]
                      ])
                    ]),
                    t("div", NP, [
                      t("label", OP, [
                        nt(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": q[13] || (q[13] = (Se) => W.value = Se)
                        }, null, 512), [
                          [mn, W.value]
                        ]),
                        q[39] || (q[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    se.value ? (n(), i("div", AP, d(se.value), 1)) : y("", !0)
                  ], 64))
                ])) : h.value === "import" ? (n(), i("div", FP, [
                  C(Zr, {
                    "workspace-path": Ue.value,
                    "resume-import": S.value,
                    "initial-progress": A.value ?? void 0,
                    onImportComplete: Re,
                    onImportStarted: q[14] || (q[14] = (Se) => x.value = !0),
                    onSourceCleared: fe
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: g(() => [
          t("div", BP, [
            C(ac),
            t("div", WP, [
              p.value === 1 ? (n(), D(Me, {
                key: 0,
                variant: "primary",
                disabled: !oe.value || ne.value,
                onClick: Ie
              }, {
                default: g(() => [
                  $(d(ne.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (n(), i(j, { key: 1 }, [
                !ie.value && !x.value && (h.value !== "landing" || o.setupState === "no_workspace" && !Ue.value) ? (n(), D(Me, {
                  key: 0,
                  variant: "secondary",
                  onClick: ye
                }, {
                  default: g(() => [...q[44] || (q[44] = [
                    $(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                h.value === "create" ? (n(), D(Me, {
                  key: 1,
                  variant: "primary",
                  disabled: !Ae.value || ie.value,
                  onClick: be
                }, {
                  default: g(() => [
                    $(d(ie.value ? "Creating..." : W.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                h.value === "landing" && _.value ? (n(), D(Me, {
                  key: 2,
                  variant: "primary",
                  onClick: Le
                }, {
                  default: g(() => [
                    $(" Switch to " + d(_.value), 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ], 64)) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      w.value ? (n(), D(aP, {
        key: 0,
        "workspace-path": z.value,
        onClose: q[16] || (q[16] = (Ve) => w.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), HP = /* @__PURE__ */ _e(jP, [["__scopeId", "data-v-9a9aadc0"]]), KP = { class: "update-banner" }, qP = { class: "update-banner__left" }, YP = { class: "update-banner__title" }, JP = {
  key: 0,
  class: "update-banner__summary"
}, QP = { class: "update-banner__actions" }, XP = ["disabled"], ZP = ["disabled"], eR = ["disabled"], tR = /* @__PURE__ */ he({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", KP, [
      t("div", qP, [
        t("div", YP, " ComfyGit Manager v" + d(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (n(), i("div", JP, d(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      t("div", QP, [
        t("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, d(e.updating ? "Updating…" : "Update"), 9, XP),
        e.info.release_url ? (n(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, ZP)) : y("", !0),
        t("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, eR)
      ])
    ]));
  }
}), sR = /* @__PURE__ */ _e(tR, [["__scopeId", "data-v-49562c5c"]]), lc = "ComfyGit.UpdateNotice.DismissedVersion";
function oR() {
  try {
    return localStorage.getItem(lc);
  } catch {
    return null;
  }
}
function nR(e) {
  try {
    localStorage.setItem(lc, e);
  } catch {
  }
}
function aR(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : oR() !== e.latest_version;
}
const lR = { class: "comfygit-panel" }, iR = { class: "panel-header" }, rR = { class: "header-left" }, cR = {
  key: 0,
  class: "header-info"
}, uR = { class: "header-actions" }, dR = { class: "env-switcher" }, mR = {
  key: 0,
  class: "header-info"
}, fR = { class: "branch-name" }, vR = { class: "panel-main" }, pR = { class: "sidebar" }, gR = { class: "sidebar-content" }, hR = { class: "sidebar-section" }, yR = { class: "sidebar-section" }, wR = { class: "sidebar-section" }, _R = {
  key: 0,
  class: "sidebar-badge"
}, kR = { class: "sidebar-footer" }, bR = { class: "content-area" }, $R = {
  key: 0,
  class: "error-message"
}, CR = {
  key: 1,
  class: "loading"
}, xR = { class: "dialog-content env-selector-dialog" }, SR = { class: "dialog-header" }, IR = { class: "dialog-body" }, ER = { class: "env-list" }, TR = { class: "env-info" }, PR = { class: "env-name-row" }, RR = { class: "env-indicator" }, MR = { class: "env-name" }, DR = {
  key: 0,
  class: "env-branch"
}, LR = {
  key: 1,
  class: "current-label"
}, UR = { class: "env-stats" }, NR = ["onClick"], OR = { class: "toast-container" }, AR = { class: "toast-message" }, vi = "ComfyGit.LastView", pi = "ComfyGit.LastSection", zR = /* @__PURE__ */ he({
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
      getSwitchProgress: h,
      deleteEnvironment: w,
      syncEnvironmentManually: x,
      repairWorkflowModels: b,
      getSetupStatus: S,
      getUpdateCheck: A,
      updateManager: T
    } = it(), P = fp(), { liveInstanceCount: M } = ec({ autoStart: !0 }), O = k(null), F = k([]), I = k([]), L = k([]), te = N(() => L.value.find((ce) => ce.is_current)), Y = k(null), K = k(!1), H = k(1), B = N(() => {
      var ce;
      return ((ce = Y.value) == null ? void 0 : ce.state) || "managed";
    }), W = k(!1), se = k(null), Ue = k(null), ee = k(!1), ue = k(null), ne = k(!1), ie = k(!1), ke = N(() => !ne.value && aR(ue.value)), Ee = k(null), we = k(null), G = k(null), ae = k(!1), V = k(!1), U = k(""), oe = k(null), Ae = k({ state: "idle", progress: 0, message: "" });
    let ze = null, z = null;
    const J = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, re = o.initialView ? J[o.initialView] : null, Ie = [
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
    ], be = ["this-env", "all-envs", "sharing"];
    function $e() {
      try {
        const ce = sessionStorage.getItem(vi), Z = sessionStorage.getItem(pi);
        if (ce && Z && Ie.includes(ce) && be.includes(Z))
          return { view: ce, section: Z };
      } catch {
      }
      return null;
    }
    const Le = $e(), ye = k((re == null ? void 0 : re.view) ?? (Le == null ? void 0 : Le.view) ?? "status"), Re = k((re == null ? void 0 : re.section) ?? (Le == null ? void 0 : Le.section) ?? "this-env");
    function fe(ce, Z) {
      ye.value = ce, Re.value = Z;
      try {
        sessionStorage.setItem(vi, ce), sessionStorage.setItem(pi, Z);
      } catch {
      }
    }
    function je(ce) {
      const He = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[ce];
      He && fe(He.view, He.section);
    }
    function Oe() {
      fe("branches", "this-env");
    }
    function pe() {
      a("close"), setTimeout(() => {
        var Z;
        const ce = document.querySelectorAll("button.comfyui-button");
        for (const He of ce)
          if (((Z = He.textContent) == null ? void 0 : Z.trim()) === "Manager") {
            He.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const q = k(null), Ve = k(!1), Se = k(!1), Ce = k([]);
    let Ne = 0;
    function Pe(ce, Z = "info", He = 3e3) {
      const Qe = ++Ne;
      return Ce.value.push({ id: Qe, message: ce, type: Z }), He > 0 && setTimeout(() => {
        Ce.value = Ce.value.filter((gt) => gt.id !== Qe);
      }, He), Qe;
    }
    function Q(ce) {
      Ce.value = Ce.value.filter((Z) => Z.id !== ce);
    }
    function de(ce, Z) {
      Pe(ce, Z);
    }
    async function ge() {
      ue.value = null, ne.value = !1;
      try {
        ue.value = await A();
      } catch {
      }
    }
    function Ke() {
      var Z;
      const ce = (Z = ue.value) == null ? void 0 : Z.release_url;
      if (ce)
        try {
          window.open(ce, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function Fe() {
      var Z;
      const ce = (Z = ue.value) == null ? void 0 : Z.latest_version;
      ce && nR(ce), ne.value = !0;
    }
    async function Be() {
      var Z, He;
      if (ie.value) return;
      ie.value = !0;
      const ce = Pe("Updating comfygit-manager...", "info", 0);
      try {
        const Qe = await T();
        if (Q(ce), Qe.status !== "success") {
          if (Pe(Qe.message || "Update failed", "error"), Qe.manual_instructions) {
            const gt = Qe.manual_instructions.split(`
`).map((Et) => Et.trim()).filter(Boolean);
            q.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: gt,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                q.value = null;
              }
            };
          }
          return;
        }
        if (Pe(Qe.message || "Update complete", "success"), Fe(), Qe.restart_required) {
          le();
          try {
            await ((He = (Z = window.app) == null ? void 0 : Z.api) == null ? void 0 : He.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Qe) {
        Q(ce);
        const gt = Qe instanceof Error ? Qe.message : "Update failed";
        Pe(gt, "error");
      } finally {
        ie.value = !1;
      }
    }
    const et = N(() => {
      if (!O.value) return "neutral";
      const ce = O.value.workflows, Z = ce.new.length > 0 || ce.modified.length > 0 || ce.deleted.length > 0 || O.value.has_changes;
      return O.value.comparison.is_synced ? Z ? "warning" : "success" : "error";
    });
    N(() => O.value ? et.value === "success" ? "All synced" : et.value === "warning" ? "Uncommitted changes" : et.value === "error" ? "Not synced" : "" : "");
    async function qe() {
      W.value = !0, se.value = null;
      try {
        const [ce, Z, He, Qe] = await Promise.all([
          l(!0),
          r(),
          c(),
          p()
        ]);
        O.value = ce, F.value = Z.commits, I.value = He.branches, L.value = Qe, a("statusUpdate", ce), Ee.value && await Ee.value.loadWorkflows(!0);
      } catch (ce) {
        se.value = ce instanceof Error ? ce.message : "Failed to load status", O.value = null, F.value = [], I.value = [];
      } finally {
        W.value = !1;
      }
    }
    function mt(ce) {
      Ue.value = ce;
    }
    async function ct(ce) {
      var He;
      Ue.value = null;
      const Z = O.value && (O.value.workflows.new.length > 0 || O.value.workflows.modified.length > 0 || O.value.workflows.deleted.length > 0 || O.value.has_changes);
      q.value = {
        title: Z ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: Z ? "You have uncommitted changes that will be lost." : `Checkout commit ${ce.short_hash || ((He = ce.hash) == null ? void 0 : He.slice(0, 7))}?`,
        details: Z ? wn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: Z ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: Z,
        onConfirm: async () => {
          var Et;
          q.value = null, le();
          const Qe = Pe(`Checking out ${ce.short_hash || ((Et = ce.hash) == null ? void 0 : Et.slice(0, 7))}...`, "info", 0), gt = await u(ce.hash, Z);
          Q(Qe), gt.status === "success" ? Pe("Restarting ComfyUI...", "success") : Pe(gt.message || "Checkout failed", "error");
        }
      };
    }
    async function dt(ce) {
      const Z = O.value && (O.value.workflows.new.length > 0 || O.value.workflows.modified.length > 0 || O.value.workflows.deleted.length > 0 || O.value.has_changes);
      q.value = {
        title: Z ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: Z ? "You have uncommitted changes." : `Switch to branch "${ce}"?`,
        details: Z ? wn() : void 0,
        warning: Z ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: Z ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          q.value = null, le();
          const He = Pe(`Switching to ${ce}...`, "info", 0), Qe = await f(ce, Z);
          Q(He), Qe.status === "success" ? Pe("Restarting ComfyUI...", "success") : Pe(Qe.message || "Branch switch failed", "error");
        }
      };
    }
    async function Tt(ce) {
      const Z = Pe(`Creating branch ${ce}...`, "info", 0), He = await m(ce);
      Q(Z), He.status === "success" ? (Pe(`Branch "${ce}" created`, "success"), await qe()) : Pe(He.message || "Failed to create branch", "error");
    }
    async function es(ce, Z = !1) {
      const He = async (Qe) => {
        var Et;
        const gt = Pe(`Deleting branch ${ce}...`, "info", 0);
        try {
          const rs = await v(ce, Qe);
          Q(gt), rs.status === "success" ? (Pe(`Branch "${ce}" deleted`, "success"), await qe()) : (Et = rs.message) != null && Et.includes("not fully merged") ? q.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ce}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              q.value = null, await He(!0);
            }
          } : Pe(rs.message || "Failed to delete branch", "error");
        } catch (rs) {
          Q(gt);
          const Zs = rs instanceof Error ? rs.message : "Failed to delete branch";
          Zs.includes("not fully merged") ? q.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ce}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              q.value = null, await He(!0);
            }
          } : Pe(Zs, "error");
        }
      };
      q.value = {
        title: "Delete Branch",
        message: `Delete branch "${ce}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          q.value = null, await He(Z);
        }
      };
    }
    async function Ot(ce) {
      Ue.value = null;
      const Z = prompt("Enter branch name:");
      if (Z) {
        const He = Pe(`Creating branch ${Z}...`, "info", 0), Qe = await m(Z, ce.hash);
        Q(He), Qe.status === "success" ? (Pe(`Branch "${Z}" created from ${ce.short_hash}`, "success"), await qe()) : Pe(Qe.message || "Failed to create branch", "error");
      }
    }
    function le() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function E() {
      q.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ce;
          q.value = null, le(), Pe("Restarting environment...", "info");
          try {
            (ce = window.app) != null && ce.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function R() {
      q.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ce;
          q.value = null, Pe("Stopping environment...", "info");
          try {
            (ce = window.app) != null && ce.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Te(ce, Z) {
      ee.value = !1, U.value = ce, oe.value = Z || null, ae.value = !0;
    }
    async function tt() {
      ae.value = !1, V.value = !0, le(), Ae.value = {
        progress: 10,
        state: ft(10),
        message: st(10)
      };
      try {
        await _(U.value, oe.value || void 0), Ct(), We();
      } catch (ce) {
        It(), V.value = !1, Pe(`Failed to initiate switch: ${ce instanceof Error ? ce.message : "Unknown error"}`, "error"), Ae.value = { state: "idle", progress: 0, message: "" }, oe.value = null;
      }
    }
    function ft(ce) {
      return ce >= 100 ? "complete" : ce >= 80 ? "validating" : ce >= 60 ? "starting" : ce >= 30 ? "syncing" : "preparing";
    }
    function st(ce) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[ft(ce)] || "";
    }
    function Ct() {
      if (z) return;
      let ce = 10;
      const Z = 60, He = 5e3, Qe = 100, gt = (Z - ce) / (He / Qe);
      z = window.setInterval(() => {
        if (ce += gt, ce >= Z && (ce = Z, It()), Ae.value.progress < Z) {
          const Et = Math.floor(ce);
          Ae.value = {
            progress: Et,
            state: ft(Et),
            message: st(Et)
          };
        }
      }, Qe);
    }
    function It() {
      z && (clearInterval(z), z = null);
    }
    function We() {
      ze || (ze = window.setInterval(async () => {
        try {
          let ce = await P.getStatus();
          if ((!ce || ce.state === "idle") && (ce = await h()), !ce)
            return;
          const Z = ce.progress || 0;
          Z >= 60 && It();
          const He = Math.max(Z, Ae.value.progress), Qe = ce.state && ce.state !== "idle" && ce.state !== "unknown", gt = Qe ? ce.state : ft(He), Et = Qe && ce.message || st(He);
          Ae.value = {
            state: gt,
            progress: He,
            message: Et
          }, ce.state === "complete" ? (It(), is(), V.value = !1, Pe(`✓ Switched to ${U.value}`, "success"), await qe(), U.value = "") : ce.state === "rolled_back" ? (It(), is(), V.value = !1, Pe("Switch failed, restored previous environment", "warning"), U.value = "") : ce.state === "critical_failure" && (It(), is(), V.value = !1, Pe(`Critical error during switch: ${ce.message}`, "error"), U.value = "");
        } catch (ce) {
          console.error("Failed to poll switch progress:", ce);
        }
      }, 1e3));
    }
    function is() {
      It(), ze && (clearInterval(ze), ze = null);
    }
    function ws() {
      var ce;
      ae.value = !1, U.value = "", (ce = Y.value) != null && ce.state && Y.value.state !== "managed" && (H.value = Y.value.state === "no_workspace" ? 1 : 2, K.value = !0);
    }
    async function fo(ce) {
      Ve.value = !1, await qe(), Pe(ce.message, ce.success ? "success" : "error");
    }
    async function vo() {
      Se.value = !1;
      const ce = Pe("Syncing environment...", "info", 0);
      try {
        const Z = await x("skip", !0);
        if (Q(ce), Z.status === "success") {
          const He = [];
          Z.nodes_installed.length && He.push(`${Z.nodes_installed.length} installed`), Z.nodes_removed.length && He.push(`${Z.nodes_removed.length} removed`);
          const Qe = He.length ? `: ${He.join(", ")}` : "";
          Pe(`✓ Environment synced${Qe}`, "success"), await qe();
        } else {
          const He = Z.errors.length ? Z.errors.join("; ") : Z.message;
          Pe(`Sync failed: ${He}`, "error");
        }
      } catch (Z) {
        Q(ce), Pe(`Sync error: ${Z instanceof Error ? Z.message : "Unknown error"}`, "error");
      }
    }
    async function po(ce) {
      var Z;
      try {
        const He = await b(ce);
        He.failed.length === 0 ? Pe(`✓ Repaired ${He.success} workflow${He.success === 1 ? "" : "s"}`, "success") : Pe(`Repaired ${He.success}, failed: ${He.failed.length}`, "warning"), await qe();
      } catch (He) {
        Pe(`Repair failed: ${He instanceof Error ? He.message : "Unknown error"}`, "error");
      } finally {
        (Z = G.value) == null || Z.resetRepairingState();
      }
    }
    async function Xs() {
      var Z, He;
      const ce = Pe("Repairing environment...", "info", 0);
      try {
        const Qe = await x("skip", !0);
        if (Q(ce), Qe.status === "success") {
          const gt = [];
          Qe.nodes_installed.length && gt.push(`${Qe.nodes_installed.length} installed`), Qe.nodes_removed.length && gt.push(`${Qe.nodes_removed.length} removed`);
          const Et = gt.length ? `: ${gt.join(", ")}` : "";
          Pe(`✓ Environment repaired${Et}`, "success"), (Z = G.value) == null || Z.closeDetailModal(), await qe();
        } else {
          const gt = Qe.errors.length ? Qe.errors.join(", ") : Qe.message || "Unknown error";
          Pe(`Repair failed: ${gt}`, "error");
        }
      } catch (Qe) {
        Q(ce), Pe(`Repair error: ${Qe instanceof Error ? Qe.message : "Unknown error"}`, "error");
      } finally {
        (He = G.value) == null || He.resetRepairingEnvironmentState();
      }
    }
    async function go(ce, Z) {
      Pe(`Environment '${ce}' created`, "success"), await qe(), we.value && await we.value.loadEnvironments(), Z && await Te(ce);
    }
    async function ho(ce) {
      var Z;
      if (((Z = te.value) == null ? void 0 : Z.name) === ce) {
        Pe("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      q.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ce}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          q.value = null;
          try {
            const He = await w(ce);
            He.status === "success" ? (Pe(`Environment "${ce}" deleted`, "success"), await qe(), we.value && await we.value.loadEnvironments()) : Pe(He.message || "Failed to delete environment", "error");
          } catch (He) {
            Pe(`Error deleting environment: ${He instanceof Error ? He.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function yo(ce, Z) {
      K.value = !1;
      try {
        Y.value = await S();
      } catch {
      }
      await Te(ce, Z);
    }
    function wo() {
      K.value = !1, a("close");
    }
    async function _o(ce, Z) {
      await Te(ce, Z);
    }
    async function fa(ce) {
      await qe(), await Te(ce);
    }
    async function va(ce) {
      Y.value = await S(), console.log(`Environment '${ce}' created. Available for switching.`);
    }
    function pa() {
      fe("environments", "all-envs"), setTimeout(() => {
        var ce;
        (ce = we.value) == null || ce.openCreateModal();
      }, 100);
    }
    function wn() {
      if (!O.value) return [];
      const ce = [], Z = O.value.workflows;
      return Z.new.length && ce.push(`${Z.new.length} new workflow(s)`), Z.modified.length && ce.push(`${Z.modified.length} modified workflow(s)`), Z.deleted.length && ce.push(`${Z.deleted.length} deleted workflow(s)`), ce;
    }
    return at(async () => {
      try {
        if (Y.value = await S(), Y.value.state === "no_workspace") {
          K.value = !0, H.value = 1;
          return;
        }
        if (Y.value.state === "empty_workspace") {
          K.value = !0, H.value = 2;
          return;
        }
        if (Y.value.state === "unmanaged") {
          K.value = !0, H.value = 2;
          return;
        }
      } catch (ce) {
        console.warn("Setup status check failed, proceeding normally:", ce);
      }
      await Promise.all([
        qe(),
        ge()
      ]);
    }), (ce, Z) => {
      var He, Qe, gt, Et, rs, Zs, X, xe, Ge, wt, Dt, cs, Vs;
      return n(), i("div", lR, [
        t("div", iR, [
          t("div", rR, [
            Z[31] || (Z[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            O.value ? (n(), i("div", cR)) : y("", !0)
          ]),
          t("div", uR, [
            C(nc),
            Z[34] || (Z[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: De(["icon-btn", { spinning: W.value }]),
              onClick: qe,
              title: "Refresh"
            }, [...Z[32] || (Z[32] = [
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
              onClick: Z[0] || (Z[0] = (Je) => a("close")),
              title: "Close"
            }, [...Z[33] || (Z[33] = [
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
        ke.value && ue.value ? (n(), D(sR, {
          key: 0,
          info: ue.value,
          updating: ie.value,
          onUpdate: Be,
          onDismiss: Fe,
          onReleaseNotes: Ke
        }, null, 8, ["info", "updating"])) : y("", !0),
        t("div", dR, [
          t("div", { class: "env-switcher-header" }, [
            Z[35] || (Z[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", { class: "env-control-buttons" }, [
              t("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: E
              }, " Restart "),
              t("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: R
              }, " Stop ")
            ])
          ]),
          t("button", {
            class: "env-switcher-btn",
            onClick: Z[1] || (Z[1] = (Je) => fe("environments", "all-envs"))
          }, [
            O.value ? (n(), i("div", mR, [
              t("span", null, d(((He = te.value) == null ? void 0 : He.name) || ((Qe = O.value) == null ? void 0 : Qe.environment) || "Loading..."), 1),
              t("span", fR, "(" + d(O.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            Z[36] || (Z[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", vR, [
          t("div", pR, [
            t("div", gR, [
              t("div", hR, [
                Z[37] || (Z[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: De(["sidebar-item", { active: ye.value === "status" && Re.value === "this-env" }]),
                  onClick: Z[2] || (Z[2] = (Je) => fe("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: ye.value === "workflows" }]),
                  onClick: Z[3] || (Z[3] = (Je) => fe("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: ye.value === "models-env" }]),
                  onClick: Z[4] || (Z[4] = (Je) => fe("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: ye.value === "branches" }]),
                  onClick: Z[5] || (Z[5] = (Je) => fe("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: ye.value === "history" }]),
                  onClick: Z[6] || (Z[6] = (Je) => fe("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: ye.value === "nodes" }]),
                  onClick: Z[7] || (Z[7] = (Je) => fe("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: ye.value === "debug-env" }]),
                  onClick: Z[8] || (Z[8] = (Je) => fe("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              Z[41] || (Z[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", yR, [
                Z[38] || (Z[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: De(["sidebar-item", { active: ye.value === "environments" }]),
                  onClick: Z[9] || (Z[9] = (Je) => fe("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: ye.value === "model-index" }]),
                  onClick: Z[10] || (Z[10] = (Je) => fe("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: ye.value === "settings" }]),
                  onClick: Z[11] || (Z[11] = (Je) => fe("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: ye.value === "debug-workspace" }]),
                  onClick: Z[12] || (Z[12] = (Je) => fe("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              Z[42] || (Z[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", wR, [
                Z[40] || (Z[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: De(["sidebar-item", { active: ye.value === "deploy" }]),
                  onClick: Z[13] || (Z[13] = (Je) => fe("deploy", "sharing"))
                }, [
                  Z[39] || (Z[39] = $(" DEPLOY ", -1)),
                  Xe(M) > 0 ? (n(), i("span", _R, d(Xe(M)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: De(["sidebar-item", { active: ye.value === "export" }]),
                  onClick: Z[14] || (Z[14] = (Je) => fe("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: ye.value === "import" }]),
                  onClick: Z[15] || (Z[15] = (Je) => fe("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: De(["sidebar-item", { active: ye.value === "remotes" }]),
                  onClick: Z[16] || (Z[16] = (Je) => fe("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", kR, [
              C(ac)
            ])
          ]),
          t("div", bR, [
            se.value ? (n(), i("div", $R, d(se.value), 1)) : !O.value && ye.value === "status" ? (n(), i("div", CR, " Loading status... ")) : (n(), i(j, { key: 2 }, [
              ye.value === "status" ? (n(), D(_v, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: G,
                status: O.value,
                "setup-state": B.value,
                onSwitchBranch: Oe,
                onCommitChanges: Z[17] || (Z[17] = (Je) => Ve.value = !0),
                onSyncEnvironment: Z[18] || (Z[18] = (Je) => Se.value = !0),
                onViewWorkflows: Z[19] || (Z[19] = (Je) => fe("workflows", "this-env")),
                onViewHistory: Z[20] || (Z[20] = (Je) => fe("history", "this-env")),
                onViewDebug: Z[21] || (Z[21] = (Je) => fe("debug-env", "this-env")),
                onViewNodes: Z[22] || (Z[22] = (Je) => fe("nodes", "this-env")),
                onRepairMissingModels: po,
                onRepairEnvironment: Xs,
                onStartSetup: Z[23] || (Z[23] = (Je) => K.value = !0),
                onViewEnvironments: Z[24] || (Z[24] = (Je) => fe("environments", "all-envs")),
                onCreateEnvironment: pa
              }, null, 8, ["status", "setup-state"])) : ye.value === "workflows" ? (n(), D(M_, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: Ee,
                onRefresh: qe
              }, null, 512)) : ye.value === "models-env" ? (n(), D(Kb, {
                key: 2,
                onNavigate: je
              })) : ye.value === "branches" ? (n(), D(up, {
                key: 3,
                branches: I.value,
                current: ((gt = O.value) == null ? void 0 : gt.branch) || null,
                onSwitch: dt,
                onCreate: Tt,
                onDelete: es
              }, null, 8, ["branches", "current"])) : ye.value === "history" ? (n(), D(mp, {
                key: 4,
                commits: F.value,
                "current-ref": (Et = O.value) == null ? void 0 : Et.branch,
                onSelect: mt,
                onCheckout: ct
              }, null, 8, ["commits", "current-ref"])) : ye.value === "nodes" ? (n(), D(V2, {
                key: 5,
                "version-mismatches": ((Zs = (rs = O.value) == null ? void 0 : rs.comparison) == null ? void 0 : Zs.version_mismatches) || [],
                onOpenNodeManager: pe,
                onRepairEnvironment: Xs,
                onToast: de
              }, null, 8, ["version-mismatches"])) : ye.value === "debug-env" ? (n(), D(Z3, { key: 6 })) : ye.value === "environments" ? (n(), D(x5, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: we,
                onSwitch: Te,
                onCreated: go,
                onDelete: ho
              }, null, 512)) : ye.value === "model-index" ? (n(), D(i2, {
                key: 8,
                onRefresh: qe
              })) : ye.value === "settings" ? (n(), D(G3, { key: 9 })) : ye.value === "debug-workspace" ? (n(), D(X3, { key: 10 })) : ye.value === "deploy" ? (n(), D(fT, {
                key: 11,
                onToast: de,
                onNavigate: je
              })) : ye.value === "export" ? (n(), D(m8, { key: 12 })) : ye.value === "import" ? (n(), D(a4, {
                key: 13,
                onImportCompleteSwitch: fa
              })) : ye.value === "remotes" ? (n(), D(C3, {
                key: 14,
                onToast: de
              })) : y("", !0)
            ], 64))
          ])
        ]),
        Ue.value ? (n(), D(RT, {
          key: 1,
          commit: Ue.value,
          onClose: Z[25] || (Z[25] = (Je) => Ue.value = null),
          onCheckout: ct,
          onCreateBranch: Ot
        }, null, 8, ["commit"])) : y("", !0),
        q.value ? (n(), D(hl, {
          key: 2,
          title: q.value.title,
          message: q.value.message,
          details: q.value.details,
          warning: q.value.warning,
          confirmLabel: q.value.confirmLabel,
          cancelLabel: q.value.cancelLabel,
          secondaryLabel: q.value.secondaryLabel,
          secondaryAction: q.value.secondaryAction,
          destructive: q.value.destructive,
          onConfirm: q.value.onConfirm,
          onCancel: Z[26] || (Z[26] = (Je) => q.value = null),
          onSecondary: q.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        C(b7, {
          show: ae.value,
          "from-environment": ((X = te.value) == null ? void 0 : X.name) || "unknown",
          "to-environment": U.value,
          onConfirm: tt,
          onClose: ws
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Ve.value && O.value ? (n(), D(oc, {
          key: 3,
          status: O.value,
          "as-modal": !0,
          onClose: Z[27] || (Z[27] = (Je) => Ve.value = !1),
          onCommitted: fo
        }, null, 8, ["status"])) : y("", !0),
        Se.value && O.value ? (n(), D(B7, {
          key: 4,
          show: Se.value,
          "mismatch-details": {
            missing_nodes: O.value.comparison.missing_nodes,
            extra_nodes: O.value.comparison.extra_nodes
          },
          onConfirm: vo,
          onClose: Z[28] || (Z[28] = (Je) => Se.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        C(D7, {
          show: V.value,
          state: Ae.value.state,
          progress: Ae.value.progress,
          message: Ae.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        ee.value ? (n(), i("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: Z[30] || (Z[30] = bt((Je) => ee.value = !1, ["self"]))
        }, [
          t("div", xR, [
            t("div", SR, [
              Z[44] || (Z[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: Z[29] || (Z[29] = (Je) => ee.value = !1)
              }, [...Z[43] || (Z[43] = [
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
            t("div", IR, [
              Z[45] || (Z[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", ER, [
                (n(!0), i(j, null, ve(L.value, (Je) => (n(), i("div", {
                  key: Je.name,
                  class: De(["env-item", { current: Je.is_current }])
                }, [
                  t("div", TR, [
                    t("div", PR, [
                      t("span", RR, d(Je.is_current ? "●" : "○"), 1),
                      t("span", MR, d(Je.name), 1),
                      Je.current_branch ? (n(), i("span", DR, "(" + d(Je.current_branch) + ")", 1)) : y("", !0),
                      Je.is_current ? (n(), i("span", LR, "CURRENT")) : y("", !0)
                    ]),
                    t("div", UR, d(Je.workflow_count) + " workflows • " + d(Je.node_count) + " nodes ", 1)
                  ]),
                  Je.is_current ? y("", !0) : (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (ga) => Te(Je.name)
                  }, " SWITCH ", 8, NR))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        K.value ? (n(), D(HP, {
          key: 6,
          "default-path": ((xe = Y.value) == null ? void 0 : xe.default_path) || "~/comfygit",
          "detected-models-dir": ((Ge = Y.value) == null ? void 0 : Ge.detected_models_dir) || null,
          "initial-step": H.value,
          "existing-environments": ((wt = Y.value) == null ? void 0 : wt.environments) || [],
          "cli-installed": ((Dt = Y.value) == null ? void 0 : Dt.cli_installed) ?? !0,
          "setup-state": ((cs = Y.value) == null ? void 0 : cs.state) || "no_workspace",
          "workspace-path": ((Vs = Y.value) == null ? void 0 : Vs.workspace_path) || null,
          onComplete: yo,
          onClose: wo,
          onSwitchEnvironment: _o,
          onEnvironmentCreatedNoSwitch: va
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", OR, [
          C(Pd, { name: "toast" }, {
            default: g(() => [
              (n(!0), i(j, null, ve(Ce.value, (Je) => (n(), i("div", {
                key: Je.id,
                class: De(["toast", Je.type])
              }, [
                t("span", AR, d(Je.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), VR = /* @__PURE__ */ _e(zR, [["__scopeId", "data-v-9c2af32e"]]), FR = { class: "item-header" }, BR = { class: "item-info" }, WR = { class: "filename" }, GR = { class: "metadata" }, jR = { class: "size" }, HR = {
  key: 0,
  class: "type"
}, KR = { class: "item-actions" }, qR = {
  key: 0,
  class: "progress-section"
}, YR = { class: "progress-bar" }, JR = { class: "progress-stats" }, QR = { class: "downloaded" }, XR = { class: "speed" }, ZR = {
  key: 0,
  class: "eta"
}, eM = {
  key: 1,
  class: "status-msg paused"
}, tM = {
  key: 2,
  class: "status-msg queued"
}, sM = {
  key: 3,
  class: "status-msg completed"
}, oM = {
  key: 4,
  class: "status-msg failed"
}, nM = {
  key: 0,
  class: "retries"
}, aM = /* @__PURE__ */ he({
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
      class: De(["download-item", `status-${e.item.status}`])
    }, [
      t("div", FR, [
        t("div", BR, [
          t("div", WR, d(e.item.filename), 1),
          t("div", GR, [
            t("span", jR, d(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", HR, d(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", KR, [
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
      e.item.status === "downloading" ? (n(), i("div", qR, [
        t("div", YR, [
          t("div", {
            class: "progress-fill",
            style: Zt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", JR, [
          t("span", QR, d(a(e.item.downloaded)) + " / " + d(a(e.item.size)), 1),
          t("span", XR, d(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", ZR, d(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", eM, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", tM, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", sM, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", oM, [
        $(" ✗ " + d(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", nM, "(" + d(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Wo = /* @__PURE__ */ _e(aM, [["__scopeId", "data-v-2110df65"]]), lM = { class: "queue-title" }, iM = { class: "count" }, rM = { class: "queue-actions" }, cM = { class: "action-label" }, uM = {
  key: 0,
  class: "overall-progress"
}, dM = { class: "progress-bar" }, mM = {
  key: 0,
  class: "current-mini"
}, fM = { class: "filename" }, vM = { class: "speed" }, pM = {
  key: 1,
  class: "queue-content"
}, gM = {
  key: 0,
  class: "section"
}, hM = {
  key: 1,
  class: "section"
}, yM = { class: "section-header" }, wM = { class: "section-label paused" }, _M = { class: "items-list" }, kM = {
  key: 2,
  class: "section"
}, bM = { class: "section-header" }, $M = { class: "section-label" }, CM = { class: "items-list" }, xM = {
  key: 3,
  class: "section"
}, SM = { class: "section-header" }, IM = { class: "section-label" }, EM = { class: "items-list" }, TM = {
  key: 4,
  class: "section"
}, PM = { class: "section-header" }, RM = { class: "section-label failed" }, MM = { class: "items-list" }, DM = /* @__PURE__ */ he({
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
      removeItem: h,
      clearCompleted: w
    } = Oo(), x = k(!1);
    let b = null;
    xt(
      () => ({
        active: m.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (P, M) => {
        b && (clearTimeout(b), b = null);
        const O = P.active === 0 && P.failed === 0 && P.paused === 0 && P.completed > 0, F = M && (M.active > 0 || M.paused > 0);
        O && F && (b = setTimeout(() => {
          w(), b = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = N(() => {
      var O;
      if (s.items.length === 0) return 0;
      const P = l.value.length, M = ((O = o.value) == null ? void 0 : O.progress) || 0;
      return Math.round((P + M / 100) / s.items.length * 100);
    });
    function A(P) {
      f(P);
    }
    function T(P) {
      return P === 0 ? "..." : `${(P / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (P, M) => (n(), D(Nt, { to: "body" }, [
      Xe(u) ? (n(), i("div", {
        key: 0,
        class: De(["model-download-queue", { minimized: !x.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: M[0] || (M[0] = (O) => x.value = !x.value)
        }, [
          t("div", lM, [
            M[4] || (M[4] = t("span", { class: "icon" }, "↓", -1)),
            M[5] || (M[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", iM, "(" + d(Xe(m)) + "/" + d(Xe(s).items.length) + ")", 1)
          ]),
          t("div", rM, [
            t("span", cM, d(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (n(), i("div", pM, [
          Xe(o) ? (n(), i("div", gM, [
            M[6] || (M[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            C(Wo, {
              item: Xe(o),
              onCancel: M[1] || (M[1] = (O) => A(Xe(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          Xe(c).length > 0 ? (n(), i("div", hM, [
            t("div", yM, [
              t("span", wM, "Paused (" + d(Xe(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: M[2] || (M[2] = //@ts-ignore
                (...O) => Xe(_) && Xe(_)(...O))
              }, "Resume All")
            ]),
            t("div", _M, [
              (n(!0), i(j, null, ve(Xe(c), (O) => (n(), D(Wo, {
                key: O.id,
                item: O,
                onResume: (F) => Xe(p)(O.id),
                onRemove: (F) => Xe(h)(O.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Xe(a).length > 0 ? (n(), i("div", kM, [
            t("div", bM, [
              t("span", $M, "Queued (" + d(Xe(a).length) + ")", 1)
            ]),
            t("div", CM, [
              (n(!0), i(j, null, ve(Xe(a), (O) => (n(), D(Wo, {
                key: O.id,
                item: O,
                onCancel: (F) => A(O.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          Xe(l).length > 0 ? (n(), i("div", xM, [
            t("div", SM, [
              t("span", IM, "Completed (" + d(Xe(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: M[3] || (M[3] = //@ts-ignore
                (...O) => Xe(w) && Xe(w)(...O))
              }, "Clear")
            ]),
            t("div", EM, [
              (n(!0), i(j, null, ve(Xe(l).slice(0, 3), (O) => (n(), D(Wo, {
                key: O.id,
                item: O,
                onRemove: (F) => Xe(h)(O.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Xe(r).length > 0 ? (n(), i("div", TM, [
            t("div", PM, [
              t("span", RM, "Failed (" + d(Xe(r).length) + ")", 1)
            ]),
            t("div", MM, [
              (n(!0), i(j, null, ve(Xe(r), (O) => (n(), D(Wo, {
                key: O.id,
                item: O,
                onRetry: (F) => Xe(v)(O.id),
                onRemove: (F) => Xe(h)(O.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (n(), i("div", uM, [
          t("div", dM, [
            t("div", {
              class: "progress-fill",
              style: Zt({ width: `${S.value}%` })
            }, null, 4)
          ]),
          Xe(o) ? (n(), i("div", mM, [
            t("span", fM, d(Xe(o).filename), 1),
            t("span", vM, d(T(Xe(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), LM = /* @__PURE__ */ _e(DM, [["__scopeId", "data-v-3a3c9607"]]), UM = { class: "detail-header" }, NM = { class: "item-count" }, OM = { class: "resource-list" }, AM = { class: "item-info" }, zM = { class: "item-name" }, VM = {
  key: 0,
  class: "item-subtitle"
}, FM = {
  key: 0,
  class: "installing-badge"
}, BM = ["title"], WM = {
  key: 2,
  class: "installed-badge"
}, GM = {
  key: 3,
  class: "queued-badge"
}, jM = {
  key: 4,
  class: "action-buttons"
}, HM = {
  key: 1,
  class: "no-action"
}, KM = /* @__PURE__ */ he({
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
    const o = e, a = s, l = N(() => o.items.filter((h) => h.canAction)), r = N(() => l.value.length > 0 && l.value.every(
      (h) => {
        var w, x;
        return o.queuedItems.has(h.id) || ((w = o.installedItems) == null ? void 0 : w.has(h.id)) || ((x = o.failedItems) == null ? void 0 : x.has(h.id));
      }
    )), c = N(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
    function u(h) {
      return o.queuedItems.has(h.id);
    }
    function m(h) {
      return o.installingItem === h.id;
    }
    function f(h) {
      var w;
      return ((w = o.installedItems) == null ? void 0 : w.has(h.id)) ?? !1;
    }
    function v(h) {
      var w;
      return ((w = o.failedItems) == null ? void 0 : w.has(h.id)) ?? !1;
    }
    function p(h) {
      var w;
      return ((w = o.failedItems) == null ? void 0 : w.get(h.id)) || "Unknown error";
    }
    function _(h) {
      return h.actions && h.actions.length > 0 ? h.actions : [{
        key: "default",
        label: o.itemType === "models" ? "Download" : "Install",
        variant: "secondary"
      }];
    }
    return (h, w) => (n(), D($t, {
      title: e.title,
      size: "md",
      onClose: w[2] || (w[2] = (x) => a("close"))
    }, {
      body: g(() => [
        t("div", UM, [
          t("span", NM, d(e.items.length) + " " + d(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (n(), D(Me, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: w[0] || (w[0] = (x) => a("bulk-action"))
          }, {
            default: g(() => [
              $(d(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        t("div", OM, [
          (n(!0), i(j, null, ve(e.items, (x) => (n(), i("div", {
            key: x.id,
            class: "resource-item"
          }, [
            t("div", AM, [
              t("span", zM, d(x.name), 1),
              x.subtitle ? (n(), i("span", VM, d(x.subtitle), 1)) : y("", !0)
            ]),
            x.canAction ? (n(), i(j, { key: 0 }, [
              m(x) ? (n(), i("span", FM, "Installing...")) : v(x) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(x)
              }, "Failed ⚠", 8, BM)) : f(x) ? (n(), i("span", WM, "Installed")) : u(x) ? (n(), i("span", GM, "Queued")) : (n(), i("div", jM, [
                (n(!0), i(j, null, ve(_(x), (b) => (n(), D(Me, {
                  key: `${x.id}-${b.key}`,
                  size: "sm",
                  variant: b.variant || "secondary",
                  onClick: (S) => a("action", x, b.key)
                }, {
                  default: g(() => [
                    $(d(b.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (n(), i("span", HM, d(x.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: g(() => [
        C(Me, {
          variant: "secondary",
          onClick: w[1] || (w[1] = (x) => a("close"))
        }, {
          default: g(() => [...w[3] || (w[3] = [
            $("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), qM = /* @__PURE__ */ _e(KM, [["__scopeId", "data-v-ec7e9202"]]), YM = {
  key: 0,
  class: "loading-state"
}, JM = {
  key: 1,
  class: "analysis-results"
}, QM = {
  key: 0,
  class: "section"
}, XM = { class: "section-header" }, ZM = { class: "section-title" }, eD = { class: "item-list" }, tD = { class: "package-info" }, sD = { class: "package-name" }, oD = { class: "node-count" }, nD = {
  key: 1,
  class: "installing-badge"
}, aD = {
  key: 2,
  class: "queued-badge"
}, lD = ["title"], iD = {
  key: 4,
  class: "installed-badge"
}, rD = {
  key: 1,
  class: "section"
}, cD = { class: "section-header" }, uD = { class: "section-title" }, dD = { class: "item-list" }, mD = { class: "node-type" }, fD = {
  key: 0,
  class: "overflow-note"
}, vD = {
  key: 2,
  class: "section"
}, pD = { class: "section-header" }, gD = { class: "section-title" }, hD = { class: "item-list" }, yD = { class: "node-type" }, wD = { class: "not-found" }, _D = {
  key: 0,
  class: "overflow-note"
}, kD = {
  key: 3,
  class: "section"
}, bD = { class: "section-header" }, $D = { class: "section-title" }, CD = { class: "item-list" }, xD = { class: "package-info community-info" }, SD = { class: "community-title-row" }, ID = { class: "package-name" }, ED = { class: "node-count" }, TD = { class: "community-mapping-note" }, PD = { key: 0 }, RD = {
  key: 0,
  class: "community-actions"
}, MD = {
  key: 1,
  class: "installing-badge"
}, DD = {
  key: 2,
  class: "queued-badge"
}, LD = ["title"], UD = {
  key: 4,
  class: "installed-badge"
}, ND = ["title"], OD = {
  key: 1,
  class: "no-url"
}, AD = {
  key: 4,
  class: "section"
}, zD = { class: "section-header" }, VD = { class: "section-title" }, FD = { class: "item-list" }, BD = { class: "model-info" }, WD = { class: "model-name" }, GD = {
  key: 1,
  class: "queued-badge"
}, jD = {
  key: 1,
  class: "no-url"
}, HD = { class: "dont-show-again" }, KD = 3e4, qD = /* @__PURE__ */ he({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = k(!1), o = k(null), a = k(null), l = k(!1), r = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Map()), m = k(/* @__PURE__ */ new Set()), f = k(!1), v = k(null), p = k(0), _ = k(null), h = k(/* @__PURE__ */ new Set()), w = k(/* @__PURE__ */ new Map()), x = k(/* @__PURE__ */ new Map()), { addToQueue: b } = Oo(), { queueNodeInstall: S } = it(), A = N(() => {
      var Q;
      return ((Q = a.value) == null ? void 0 : Q.package_aliases) || {};
    });
    function T(Q) {
      if (!Q) return null;
      const de = A.value;
      let ge = Q;
      const Ke = /* @__PURE__ */ new Set();
      for (; de[ge] && !Ke.has(ge); )
        Ke.add(ge), ge = de[ge];
      return ge;
    }
    function P(Q, de) {
      return Q instanceof Error && Q.message ? Q.message : typeof Q == "string" && Q.trim().length > 0 ? Q : de;
    }
    function M(Q) {
      for (const [de, ge] of w.value.entries())
        ge === Q && w.value.delete(de);
    }
    function O(Q) {
      if (!x.value.has(Q)) return;
      const de = x.value.get(Q);
      clearTimeout(de), x.value.delete(Q);
    }
    function F() {
      for (const Q of x.value.values())
        clearTimeout(Q);
      x.value = /* @__PURE__ */ new Map();
    }
    function I(Q) {
      O(Q);
      const de = setTimeout(() => {
        if (x.value.delete(Q), !c.value.has(Q)) return;
        M(Q), c.value.delete(Q), v.value === Q && (v.value = null), u.value.set(Q, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", Q);
      }, KD);
      x.value.set(Q, de);
    }
    function L(Q) {
      const de = `Cannot install "${Q.title}" - package_id is missing`;
      u.value.set(Q.item_id, de), o.value = de, console.warn("[ComfyGit] Community install requested without package_id:", Q);
    }
    const te = N(() => Y.value.length > 0 || H.value.length > 0 || B.value.length > 0 || W.value.length > 0 || ne.value.length > 0), Y = N(() => {
      var ge, Ke;
      if (!((ge = a.value) != null && ge.nodes)) return [];
      const Q = /* @__PURE__ */ new Map(), de = (a.value.nodes.resolved || []).filter((Fe) => {
        var Be;
        return !Fe.is_installed && ((Be = Fe.package) == null ? void 0 : Be.package_id);
      });
      for (const Fe of de) {
        const Be = T(Fe.package.package_id);
        if (!Be) continue;
        Q.has(Be) || Q.set(Be, {
          package_id: Be,
          title: Fe.package.title || Be,
          node_count: 0,
          node_types: [],
          repository: Fe.package.repository || null,
          latest_version: Fe.package.latest_version || null
        });
        const et = Q.get(Be);
        et.node_count++, et.node_types.push(((Ke = Fe.reference) == null ? void 0 : Ke.node_type) || Fe.node_type);
      }
      return Array.from(Q.values());
    }), K = N(() => Y.value.reduce((Q, de) => Q + de.node_count, 0)), H = N(() => {
      var Q;
      return (Q = a.value) != null && Q.nodes ? (a.value.nodes.unresolved || []).map((de) => {
        var ge;
        return {
          node_type: ((ge = de.reference) == null ? void 0 : ge.node_type) || de.node_type
        };
      }) : [];
    }), B = N(() => {
      var de;
      if (!((de = a.value) != null && de.nodes)) return [];
      const Q = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((ge) => {
        var Fe;
        const Ke = ((Fe = ge.reference) == null ? void 0 : Fe.node_type) || ge.node_type;
        return {
          node_type: Ke,
          guidance: ge.guidance || Q[Ke] || null
        };
      });
    }), W = N(() => {
      var ge, Ke, Fe, Be, et, qe, mt, ct;
      if (!((ge = a.value) != null && ge.nodes)) return [];
      const Q = a.value.node_guidance || {}, de = /* @__PURE__ */ new Map();
      for (const dt of a.value.nodes.uninstallable || []) {
        const Tt = ((Ke = dt.reference) == null ? void 0 : Ke.node_type) || dt.node_type, es = T(((Fe = dt.package) == null ? void 0 : Fe.package_id) || null), Ot = es || `node:${Tt}`;
        de.has(Ot) || de.set(Ot, {
          item_id: Ot,
          node_type: Tt,
          title: ((Be = dt.package) == null ? void 0 : Be.title) || es || Tt,
          node_count: 0,
          package_id: es,
          repository: ((et = dt.package) == null ? void 0 : et.repository) || null,
          latest_version: ((qe = dt.package) == null ? void 0 : qe.latest_version) || null,
          guidance: dt.guidance || Q[Tt] || null
        });
        const le = de.get(Ot);
        le.node_count++, le.guidance || (le.guidance = dt.guidance || Q[Tt] || null), !le.repository && ((mt = dt.package) != null && mt.repository) && (le.repository = dt.package.repository), !le.latest_version && ((ct = dt.package) != null && ct.latest_version) && (le.latest_version = dt.package.latest_version);
      }
      return Array.from(de.values());
    }), se = N(() => W.value.filter((Q) => !!Q.package_id)), Ue = N(() => W.value.length >= 5 ? W.value.slice(0, 4) : W.value), ee = N(() => se.value.length > 0 && se.value.every((Q) => {
      const de = Q.package_id;
      return r.value.has(de) || c.value.has(de) || u.value.has(de);
    }));
    function ue(Q) {
      const de = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return Q.repository && de.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), de;
    }
    const ne = N(() => {
      var Fe;
      if (!((Fe = a.value) != null && Fe.models)) return [];
      const Q = (a.value.models.resolved || []).filter(
        (Be) => Be.match_type === "download_intent" || Be.match_type === "property_download_intent" || Be.match_type === "not_found"
      ).map((Be) => {
        var et, qe, mt, ct;
        return {
          filename: ((qe = (et = Be.reference) == null ? void 0 : et.widget_value) == null ? void 0 : qe.split("/").pop()) || ((mt = Be.reference) == null ? void 0 : mt.widget_value) || Be.widget_value,
          widget_value: ((ct = Be.reference) == null ? void 0 : ct.widget_value) || Be.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: Be.download_source || null,
          targetPath: Be.target_path || null,
          canDownload: !!(Be.download_source && Be.target_path)
        };
      }), de = (a.value.models.unresolved || []).map((Be) => {
        var et, qe, mt, ct;
        return {
          filename: ((qe = (et = Be.reference) == null ? void 0 : et.widget_value) == null ? void 0 : qe.split("/").pop()) || ((mt = Be.reference) == null ? void 0 : mt.widget_value) || Be.widget_value,
          widget_value: ((ct = Be.reference) == null ? void 0 : ct.widget_value) || Be.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), ge = /* @__PURE__ */ new Map(), Ke = [];
      for (const Be of Q) {
        if (!Be.url) {
          Ke.push(Be);
          continue;
        }
        const et = `${Be.filename}::${Be.url}`, qe = ge.get(et);
        if (!qe) {
          ge.set(et, Be);
          continue;
        }
        !qe.targetPath && Be.targetPath && (qe.targetPath = Be.targetPath), !qe.canDownload && Be.canDownload && (qe.canDownload = Be.canDownload);
      }
      return [...ge.values(), ...Ke, ...de];
    }), ie = N(() => ne.value.filter((Q) => Q.canDownload)), ke = N(() => Y.value.length >= 5 ? Y.value.slice(0, 4) : Y.value), Ee = N(() => ne.value.length >= 5 ? ne.value.slice(0, 4) : ne.value), we = N(() => Y.value.length > 0 && Y.value.every(
      (Q) => r.value.has(Q.package_id) || c.value.has(Q.package_id) || u.value.has(Q.package_id)
    )), G = N(() => ie.value.length > 0 && ie.value.every((Q) => m.value.has(Q.url))), ae = N(() => Y.value.length > 0 || se.value.length > 0 || ie.value.length > 0), V = N(() => {
      const Q = (Y.value.length === 0 || we.value) && (se.value.length === 0 || ee.value), de = ie.value.length === 0 || G.value;
      return Q && de;
    }), U = N(() => _.value === "models" ? `Missing Models (${ne.value.length})` : _.value === "packages" ? `Missing Custom Nodes (${K.value})` : _.value === "community" ? `Community-Mapped Packages (${W.value.length})` : ""), oe = N(() => _.value === "models" ? ne.value.map((Q) => ({
      id: Q.url || Q.widget_value,
      name: Q.filename,
      canAction: Q.canDownload,
      actionDisabledReason: Q.canDownload ? void 0 : "Manual download required"
    })) : _.value === "packages" ? Y.value.map((Q) => ({
      id: Q.package_id,
      name: Q.title,
      subtitle: `(${Q.node_count} ${Q.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : _.value === "community" ? W.value.map((Q) => ({
      id: Q.package_id || Q.item_id,
      name: Q.title,
      subtitle: `(${Q.node_count} ${Q.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!Q.package_id,
      actionDisabledReason: Q.package_id ? void 0 : "Manual setup required",
      actions: Q.package_id ? ue(Q) : []
    })) : []);
    function Ae(Q, de) {
      if (_.value === "models") {
        const ge = ne.value.find((Ke) => Ke.url === Q.id || Ke.widget_value === Q.id);
        ge && Ie(ge);
      } else if (_.value === "packages") {
        const ge = Y.value.find((Ke) => Ke.package_id === Q.id);
        ge && z(ge);
      } else if (_.value === "community") {
        const ge = W.value.find((Fe) => (Fe.package_id || Fe.item_id) === Q.id);
        if (!ge) return;
        if (!ge.package_id) {
          L({ item_id: ge.item_id, title: ge.title });
          return;
        }
        J(ge, de === "install_git" ? "git" : "registry");
      }
    }
    function ze() {
      _.value === "models" ? Le() : _.value === "packages" ? be() : _.value === "community" && $e();
    }
    async function z(Q) {
      return re(Q.package_id, Q.latest_version, "registry");
    }
    async function J(Q, de) {
      return Q.package_id ? re(Q.package_id, Q.latest_version, de, Q.repository) : (L({ item_id: Q.item_id, title: Q.title }), !1);
    }
    async function re(Q, de, ge, Ke) {
      const Fe = T(Q) || Q, Be = de || "latest";
      if (r.value.has(Fe) || c.value.has(Fe) || u.value.has(Fe))
        return !0;
      Ne(), v.value = Fe;
      let et = null;
      try {
        const qe = {
          id: Fe,
          version: Be,
          selected_version: Be,
          mode: "remote",
          channel: "default"
        };
        ge === "git" && Ke && (qe.repository = Ke, qe.install_source = "git");
        const { ui_id: mt } = await S(qe, {
          beforeQueueStart: (ct) => {
            et = ct, w.value.set(ct, Fe), c.value.add(Fe), I(Fe), console.log("[ComfyGit] Registered pending install:", {
              ui_id: ct,
              packageId: Fe,
              pendingInstalls: Array.from(w.value.entries())
            });
          }
        });
        return et || (et = mt, w.value.set(mt, Fe), c.value.add(Fe), I(Fe), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: mt,
          packageId: Fe,
          pendingInstalls: Array.from(w.value.entries())
        })), !0;
      } catch (qe) {
        const mt = P(qe, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", qe), et && w.value.delete(et), M(Fe), O(Fe), c.value.delete(Fe), u.value.set(Fe, mt), !1;
      } finally {
        v.value = null;
      }
    }
    function Ie(Q) {
      !Q.url || !Q.targetPath || m.value.has(Q.url) || (b([{
        workflow: "unsaved",
        filename: Q.filename,
        url: Q.url,
        targetPath: Q.targetPath
      }]), m.value.add(Q.url));
    }
    async function be() {
      const Q = { attempted: 0, failed: 0 };
      for (const de of Y.value)
        !r.value.has(de.package_id) && !c.value.has(de.package_id) && !u.value.has(de.package_id) && (Q.attempted++, await z(de) || Q.failed++);
      return Q;
    }
    async function $e() {
      const Q = { attempted: 0, failed: 0 };
      for (const de of se.value) {
        const ge = de.package_id;
        !r.value.has(ge) && !c.value.has(ge) && !u.value.has(ge) && (Q.attempted++, await J(de, "registry") || Q.failed++);
      }
      return Q;
    }
    function Le() {
      const Q = ie.value.filter(
        (de) => !m.value.has(de.url)
      );
      if (Q.length === 0) return 0;
      b(Q.map((de) => ({
        workflow: "unsaved",
        filename: de.filename,
        url: de.url,
        targetPath: de.targetPath
      })));
      for (const de of Q)
        m.value.add(de.url);
      return Q.length;
    }
    async function ye() {
      const Q = await be(), de = await $e();
      Le();
      const ge = Q.attempted + de.attempted, Ke = Q.failed + de.failed;
      if (ge > 0 && Ke > 0) {
        const Fe = ge - Ke;
        o.value = `${Fe} of ${ge} installs queued, ${Ke} failed`;
      }
    }
    function Re() {
      f.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function fe(Q) {
      var Fe, Be;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const de = Q == null ? void 0 : Q.id;
      if (de && h.value.has(de)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${de} this session`);
        return;
      }
      const ge = window.app, Ke = (Fe = ge == null ? void 0 : ge.extensionManager) == null ? void 0 : Fe.workflow;
      if (Ke) {
        let mt = !1;
        for (let ct = 0; ct < 20; ct++) {
          const dt = Ke.activeWorkflow;
          if (!dt) {
            await new Promise((Ot) => setTimeout(Ot, 50));
            continue;
          }
          const Tt = (Be = dt.activeState) == null ? void 0 : Be.id;
          if (!(de && Tt === de)) {
            ct < 19 && await new Promise((Ot) => setTimeout(Ot, 50));
            continue;
          }
          if (mt = !0, dt.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${dt.filename}`), de && h.value.add(de);
            return;
          }
          break;
        }
        mt || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      s.value = !0, o.value = null, F(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), m.value = /* @__PURE__ */ new Set(), w.value = /* @__PURE__ */ new Map(), f.value = !1, p.value = 0;
      try {
        const et = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: Q, name: "unsaved" })
        });
        if (!et.ok) {
          const qe = await et.json();
          throw new Error(qe.error || "Failed to analyze workflow");
        }
        a.value = await et.json(), te.value && (l.value = !0, de && h.value.add(de));
      } catch (et) {
        console.error("[ComfyGit] Failed to analyze workflow:", et);
      } finally {
        s.value = !1;
      }
    }
    function je() {
      F(), l.value = !1, a.value = null;
    }
    function Oe(Q) {
      const { workflow: de } = Q.detail;
      de && fe(de);
    }
    function pe(Q) {
      var Ke;
      const de = (Ke = Q.detail) == null ? void 0 : Ke.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: de,
        pendingInstalls: Array.from(w.value.entries()),
        eventDetail: Q.detail
      });
      const ge = w.value.get(de);
      ge ? (O(ge), v.value = ge, console.log("[ComfyGit] Installing package:", ge)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", de);
    }
    function q(Q) {
      var Fe, Be, et, qe, mt, ct, dt;
      const de = (Fe = Q.detail) == null ? void 0 : Fe.ui_id, ge = (et = (Be = Q.detail) == null ? void 0 : Be.status) == null ? void 0 : et.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: de,
        status: ge,
        pendingInstalls: Array.from(w.value.entries()),
        eventDetail: Q.detail
      });
      const Ke = w.value.get(de);
      if (Ke) {
        if (O(Ke), w.value.delete(de), c.value.delete(Ke), v.value === Ke && (v.value = null), ge === "success")
          r.value.add(Ke), p.value++, console.log("[ComfyGit] Package installed successfully:", Ke);
        else {
          const Tt = ((ct = (mt = (qe = Q.detail) == null ? void 0 : qe.status) == null ? void 0 : mt.messages) == null ? void 0 : ct[0]) || ((dt = Q.detail) == null ? void 0 : dt.result) || "Unknown error";
          u.value.set(Ke, Tt), console.error("[ComfyGit] Package install failed:", Ke, Tt);
        }
        w.value.size === 0 && p.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", p.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: p.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", de);
    }
    let Ve = null;
    function Se() {
      var Q;
      return Ve || (Ve = (Q = window.app) == null ? void 0 : Q.api), Ve;
    }
    let Ce = !1;
    function Ne() {
      if (Ce) return !0;
      const Q = Se();
      return Q ? (Q.addEventListener("cm-task-started", pe), Q.addEventListener("cm-task-completed", q), Q.addEventListener("comfygit:workflow-changed", Pe), Ce = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Pe(Q) {
      const { change_type: de } = Q.detail;
      (de === "created" || de === "modified") && l.value && (F(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return at(() => {
      window.addEventListener("comfygit:workflow-loaded", Oe);
    }), Qs(() => {
      if (F(), window.removeEventListener("comfygit:workflow-loaded", Oe), Ce) {
        const Q = Se();
        Q && (Q.removeEventListener("cm-task-started", pe), Q.removeEventListener("cm-task-completed", q), Q.removeEventListener("comfygit:workflow-changed", Pe)), Ce = !1;
      }
    }), (Q, de) => (n(), i(j, null, [
      l.value ? (n(), D($t, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: je
      }, {
        body: g(() => [
          s.value ? (n(), i("div", YM, [...de[5] || (de[5] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && te.value ? (n(), i("div", JM, [
            Y.value.length > 0 ? (n(), i("div", QM, [
              t("div", XM, [
                t("span", ZM, "Missing Custom Nodes (" + d(K.value) + ")", 1),
                Y.value.length > 1 ? (n(), D(Me, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: we.value,
                  onClick: be
                }, {
                  default: g(() => [
                    $(d(we.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", eD, [
                (n(!0), i(j, null, ve(ke.value, (ge) => (n(), i("div", {
                  key: ge.package_id,
                  class: "package-item"
                }, [
                  t("div", tD, [
                    t("span", sD, d(ge.title), 1),
                    t("span", oD, "(" + d(ge.node_count) + " " + d(ge.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(ge.package_id) && !c.value.has(ge.package_id) && !u.value.has(ge.package_id) ? (n(), D(Me, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: v.value === ge.package_id,
                    onClick: (Ke) => z(ge)
                  }, {
                    default: g(() => [
                      $(d(v.value === ge.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : v.value === ge.package_id ? (n(), i("span", nD, "Installing...")) : c.value.has(ge.package_id) ? (n(), i("span", aD, "Queued")) : u.value.has(ge.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(ge.package_id)
                  }, "Failed ⚠", 8, lD)) : (n(), i("span", iD, "Installed"))
                ]))), 128)),
                Y.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: de[0] || (de[0] = (ge) => _.value = "packages")
                }, [
                  t("span", null, "Show all " + d(Y.value.length) + " packages...", 1),
                  de[6] || (de[6] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            H.value.length > 0 ? (n(), i("div", rD, [
              t("div", cD, [
                t("span", uD, "Unknown Nodes (" + d(H.value.length) + ")", 1)
              ]),
              t("div", dD, [
                (n(!0), i(j, null, ve(H.value.slice(0, 5), (ge) => (n(), i("div", {
                  key: ge.node_type,
                  class: "item"
                }, [
                  t("code", mD, d(ge.node_type), 1),
                  de[7] || (de[7] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                H.value.length > 5 ? (n(), i("div", fD, " ...and " + d(H.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            B.value.length > 0 ? (n(), i("div", vD, [
              t("div", pD, [
                t("span", gD, "Requires Newer ComfyUI (" + d(B.value.length) + ")", 1)
              ]),
              t("div", hD, [
                (n(!0), i(j, null, ve(B.value.slice(0, 5), (ge) => (n(), i("div", {
                  key: `vg-${ge.node_type}`,
                  class: "item"
                }, [
                  t("code", yD, d(ge.node_type), 1),
                  t("span", wD, d(ge.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                B.value.length > 5 ? (n(), i("div", _D, " ...and " + d(B.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            W.value.length > 0 ? (n(), i("div", kD, [
              t("div", bD, [
                t("span", $D, "Community-Mapped Packages (" + d(W.value.length) + ")", 1),
                se.value.length > 1 ? (n(), D(Me, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: ee.value,
                  onClick: $e
                }, {
                  default: g(() => [
                    $(d(ee.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", CD, [
                (n(!0), i(j, null, ve(Ue.value, (ge) => (n(), i("div", {
                  key: `community-${ge.item_id}`,
                  class: "package-item"
                }, [
                  t("div", xD, [
                    t("div", SD, [
                      t("span", ID, d(ge.title), 1),
                      t("span", ED, "(" + d(ge.node_count) + " " + d(ge.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    t("div", TD, [
                      de[8] || (de[8] = $(" Found via community mapping — registry metadata may be incomplete", -1)),
                      ge.guidance ? (n(), i("span", PD, ". " + d(ge.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  ge.package_id ? (n(), i(j, { key: 0 }, [
                    !r.value.has(ge.package_id) && !c.value.has(ge.package_id) && !u.value.has(ge.package_id) ? (n(), i("div", RD, [
                      C(Me, {
                        size: "sm",
                        variant: "secondary",
                        disabled: v.value === ge.package_id,
                        onClick: (Ke) => J(ge, "registry")
                      }, {
                        default: g(() => [
                          $(d(v.value === ge.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      ge.repository ? (n(), D(Me, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: v.value === ge.package_id,
                        onClick: (Ke) => J(ge, "git")
                      }, {
                        default: g(() => [...de[9] || (de[9] = [
                          $(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : y("", !0)
                    ])) : v.value === ge.package_id ? (n(), i("span", MD, "Installing...")) : c.value.has(ge.package_id) ? (n(), i("span", DD, "Queued")) : u.value.has(ge.package_id) ? (n(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get(ge.package_id)
                    }, "Failed ⚠", 8, LD)) : (n(), i("span", UD, "Installed"))
                  ], 64)) : (n(), i(j, { key: 1 }, [
                    u.value.has(ge.item_id) ? (n(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: u.value.get(ge.item_id)
                    }, "Failed ⚠", 8, ND)) : (n(), i("span", OD, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                W.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: de[1] || (de[1] = (ge) => _.value = "community")
                }, [
                  t("span", null, "Show all " + d(W.value.length) + " packages...", 1),
                  de[10] || (de[10] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            ne.value.length > 0 ? (n(), i("div", AD, [
              t("div", zD, [
                t("span", VD, "Missing Models (" + d(ne.value.length) + ")", 1),
                ie.value.length > 1 ? (n(), D(Me, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: G.value,
                  onClick: Le
                }, {
                  default: g(() => [
                    $(d(G.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", FD, [
                (n(!0), i(j, null, ve(Ee.value, (ge) => (n(), i("div", {
                  key: ge.widget_value,
                  class: "model-item"
                }, [
                  t("div", BD, [
                    t("span", WD, d(ge.filename), 1)
                  ]),
                  ge.canDownload ? (n(), i(j, { key: 0 }, [
                    m.value.has(ge.url) ? (n(), i("span", GD, "Queued")) : (n(), D(Me, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ke) => Ie(ge)
                    }, {
                      default: g(() => [...de[11] || (de[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", jD, "Manual download required"))
                ]))), 128)),
                ne.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: de[2] || (de[2] = (ge) => _.value = "models")
                }, [
                  t("span", null, "Show all " + d(ne.value.length) + " models...", 1),
                  de[12] || (de[12] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            t("div", HD, [
              C(Qn, {
                modelValue: f.value,
                "onUpdate:modelValue": [
                  de[3] || (de[3] = (ge) => f.value = ge),
                  Re
                ]
              }, {
                default: g(() => [...de[13] || (de[13] = [
                  $(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : y("", !0)
        ]),
        footer: g(() => [
          C(Me, {
            variant: "secondary",
            onClick: je
          }, {
            default: g(() => [...de[14] || (de[14] = [
              $("Dismiss", -1)
            ])]),
            _: 1
          }),
          ae.value ? (n(), D(Me, {
            key: 0,
            variant: "primary",
            disabled: V.value,
            onClick: ye
          }, {
            default: g(() => [
              $(d(V.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      _.value ? (n(), D(qM, {
        key: 1,
        title: U.value,
        items: oe.value,
        "item-type": _.value,
        "queued-items": _.value === "models" ? m.value : c.value,
        "installed-items": _.value === "models" ? void 0 : r.value,
        "failed-items": _.value === "models" ? void 0 : u.value,
        "installing-item": _.value === "models" ? void 0 : v.value,
        onClose: de[4] || (de[4] = (ge) => _.value = null),
        onAction: Ae,
        onBulkAction: ze
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), YD = /* @__PURE__ */ _e(qD, [["__scopeId", "data-v-dfb55c3f"]]), JD = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', QD = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', XD = {
  comfy: JD,
  phosphor: QD
}, wl = "comfy", ic = "comfygit-theme";
let oo = null, rc = wl;
function ZD() {
  try {
    const e = localStorage.getItem(ic);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return wl;
}
function cc(e = wl) {
  oo && oo.remove(), oo = document.createElement("style"), oo.id = "comfygit-theme-styles", oo.setAttribute("data-theme", e), oo.textContent = XD[e], document.head.appendChild(oo), document.body.setAttribute("data-comfygit-theme", e), rc = e;
  try {
    localStorage.setItem(ic, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function eL() {
  return rc;
}
function tL(e) {
  cc(e);
}
function sL(e) {
  var r;
  const { ui_id: s, state: o } = e || {}, a = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = a[s];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const _l = document.createElement("link");
_l.rel = "stylesheet";
_l.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(_l);
const oL = ZD();
cc(oL);
sessionStorage.removeItem("ComfyGit.LastView");
sessionStorage.removeItem("ComfyGit.LastSection");
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), tL(e);
  },
  getTheme: () => {
    const e = eL();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let ds = null, Yt = null, sn = null, Go = null, gi = null, jo = null, hi = null;
const Mo = k(null);
let fn = "no_workspace", uc = !1;
async function An() {
  var e;
  if (!((e = ss) != null && e.api)) return null;
  try {
    const s = await ss.api.fetchApi("/v2/comfygit/status");
    s.ok && (Mo.value = await s.json());
  } catch {
  }
}
async function Ka() {
  var e;
  if ((e = ss) != null && e.api)
    try {
      const s = await ss.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        fn = o.state, uc = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function qa() {
  var s;
  if (fn === "managed" || !uc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function nL() {
  if (!Mo.value) return !1;
  const e = Mo.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Mo.value.has_changes;
}
function Pn(e) {
  ds && ds.remove(), ds = document.createElement("div"), ds.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", ds.appendChild(s), ds.addEventListener("click", (l) => {
    l.target === ds && Da();
  });
  const o = (l) => {
    l.key === "Escape" && (Da(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), da({
    render: () => hn(VR, {
      initialView: e,
      onClose: Da,
      onStatusUpdate: async (l) => {
        Mo.value = l, on(), await Ka(), Ya(), qa();
      }
    })
  }).mount(s), document.body.appendChild(ds);
}
function Da() {
  ds && (ds.remove(), ds = null);
}
function yi(e) {
  Ho(), Yt = document.createElement("div"), Yt.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Yt.style.position = "fixed", Yt.style.top = `${s.bottom + 8}px`, Yt.style.right = `${window.innerWidth - s.right}px`, Yt.style.zIndex = "10001";
  const o = (l) => {
    Yt && !Yt.contains(l.target) && l.target !== e && (Ho(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const a = (l) => {
    l.key === "Escape" && (Ho(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), sn = da({
    render: () => hn(oc, {
      status: Mo.value,
      onClose: Ho,
      onCommitted: (l) => {
        Ho(), aL(l.success, l.message), An().then(on);
      }
    })
  }), sn.mount(Yt), document.body.appendChild(Yt);
}
function Ho() {
  sn && (sn.unmount(), sn = null), Yt && (Yt.remove(), Yt = null);
}
function aL(e, s) {
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
function lL() {
  Go || (Go = document.createElement("div"), Go.className = "comfygit-download-queue-root", gi = da({
    render: () => hn(LM)
  }), gi.mount(Go), document.body.appendChild(Go), console.log("[ComfyGit] Model download queue mounted"));
}
function iL() {
  jo || (jo = document.createElement("div"), jo.className = "comfygit-missing-resources-root", hi = da({
    render: () => hn(YD)
  }), hi.mount(jo), document.body.appendChild(jo), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Gt = null;
function on() {
  if (!Gt) return;
  const e = Gt.querySelector(".commit-indicator");
  e && (e.style.display = nL() ? "block" : "none");
}
function Ya() {
  if (!Gt) return;
  const e = fn !== "managed";
  Gt.disabled = e, Gt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const dc = document.createElement("style");
dc.textContent = `
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
document.head.appendChild(dc);
ss.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => Pn()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        Gt && !Gt.disabled && yi(Gt);
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
    if (fn === "managed")
      try {
        await Promise.all([
          ss.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          ss.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
        ]);
      } catch (o) {
        console.warn("[ComfyGit] Failed to disable built-in warnings:", o);
      }
    window.__comfygit_pending_workflow = e;
  },
  async afterConfigureGraph(e) {
    if (fn !== "managed") return;
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = Pn, Gt = document.createElement("button"), Gt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Gt.innerHTML = 'Commit <span class="commit-indicator"></span>', Gt.title = "Quick Commit", Gt.onclick = () => yi(Gt), e.appendChild(s), e.appendChild(Gt), (r = (l = ss.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (ss.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), lL(), iL(), window.addEventListener("comfygit:open-panel", ((c) => {
      var m;
      const u = (m = c.detail) == null ? void 0 : m.initialView;
      Pn(u);
    }));
    const { loadPendingDownloads: o } = Oo();
    o(), await Promise.all([An(), Ka()]), on(), Ya(), qa(), setTimeout(qa, 100), setInterval(async () => {
      await Promise.all([An(), Ka()]), on(), Ya();
    }, 3e4);
    const a = ss.api;
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
        const h = document.createElement("button");
        h.textContent = "Refresh", h.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, h.onmouseover = () => h.style.background = "var(--comfy-input-bg)", h.onmouseout = () => h.style.background = "var(--comfy-menu-bg)", h.onclick = () => c(), p.appendChild(h);
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
        const h = document.createElement("div");
        h.id = "comfygit-error-toast", h.style.cssText = `
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
        w.textContent = "⚠️", w.style.fontSize = "20px", h.appendChild(w);
        const x = document.createElement("div");
        x.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const b = document.createElement("div");
        b.textContent = "Node installation failed", b.style.cssText = "font-weight: 600; color: #e53935;", x.appendChild(b);
        const S = document.createElement("div");
        S.textContent = "Dependency conflict detected", S.style.cssText = "font-size: 12px; opacity: 0.8;", x.appendChild(S), h.appendChild(x);
        const A = document.createElement("button");
        A.textContent = "View Logs", A.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, A.onmouseover = () => A.style.background = "#c62828", A.onmouseout = () => A.style.background = "#e53935", A.onclick = () => {
          h.remove(), Pn("debug-env");
        }, h.appendChild(A);
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
        `, T.onmouseover = () => T.style.opacity = "1", T.onmouseout = () => T.style.opacity = "0.6", T.onclick = () => h.remove(), h.appendChild(T), document.body.appendChild(h), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && h.remove();
        }, 1e4);
      }, f = function(p) {
        const _ = document.getElementById("comfygit-restart-toast");
        _ && _.remove();
        const h = document.createElement("div");
        h.id = "comfygit-restart-toast", h.style.cssText = `
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
        w.textContent = "✅", w.style.fontSize = "20px", h.appendChild(w);
        const x = document.createElement("div");
        x.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const b = document.createElement("div");
        b.textContent = "To apply changes, please restart ComfyUI", b.style.cssText = "font-weight: 500; color: #fff;", x.appendChild(b);
        const S = document.createElement("div");
        S.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, S.style.cssText = "font-size: 12px; opacity: 0.7;", x.appendChild(S), h.appendChild(x);
        const A = document.createElement("button");
        A.textContent = "Apply Changes", A.style.cssText = `
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
        `, A.onmouseover = () => A.style.background = "rgba(255,255,255,0.1)", A.onmouseout = () => A.style.background = "transparent", A.onclick = async () => {
          A.disabled = !0, A.textContent = "Restarting...", A.style.opacity = "0.7", b.textContent = "Restarting...", S.textContent = "Applying changes, please wait...";
          try {
            const P = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                ss.refreshComboInNodes && (await ss.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), w.textContent = "✅", b.textContent = "Nodes Installed", b.style.color = "#4caf50", S.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, h.style.borderColor = "#4caf50", A.style.display = "none", setTimeout(() => {
                  h.remove();
                }, 3e3);
              } catch (M) {
                console.error("[ComfyGit] Failed to refresh nodes:", M), w.textContent = "✅", b.textContent = "Restart Complete", b.style.color = "#4caf50", S.textContent = "Refresh the page to load new nodes.", h.style.borderColor = "#4caf50", A.style.display = "none";
              }
            };
            a.addEventListener("reconnected", P, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (P) {
            console.error("[ComfyGit] Failed to restart:", P), b.textContent = "Restart Failed", b.style.color = "#e53935", S.textContent = "Could not restart server. Try again.", h.style.borderColor = "#e53935", A.textContent = "Try Again", A.disabled = !1, A.style.opacity = "1";
          }
        }, h.appendChild(A);
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
        `, T.onmouseover = () => T.style.opacity = "1", T.onmouseout = () => T.style.opacity = "0.6", T.onclick = () => h.remove(), h.appendChild(T), document.body.appendChild(h), console.log(`[ComfyGit] Restart required notification displayed (${p} packages installed)`);
      };
      a.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: _, workflow_name: h } = p.detail;
        console.log(`[ComfyGit] Workflow ${_}: ${h}`), await An(), on();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      a.addEventListener("status", async (p) => {
        const _ = p.detail != null;
        _ && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), v = _;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (p) => {
        const _ = sL(p.detail);
        _ && m(_);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const _ = p, { count: h = 1 } = _.detail || {};
        f(h);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
