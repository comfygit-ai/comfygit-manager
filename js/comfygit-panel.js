import { app as Jt } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Za(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const wt = {}, Eo = [], xs = () => {
}, $i = () => !1, sa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), el = (e) => e.startsWith("onUpdate:"), Rt = Object.assign, tl = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, pu = Object.prototype.hasOwnProperty, mt = (e, s) => pu.call(e, s), Ye = Array.isArray, To = (e) => _n(e) === "[object Map]", Oo = (e) => _n(e) === "[object Set]", xl = (e) => _n(e) === "[object Date]", Ze = (e) => typeof e == "function", It = (e) => typeof e == "string", fs = (e) => typeof e == "symbol", ht = (e) => e !== null && typeof e == "object", Ci = (e) => (ht(e) || Ze(e)) && Ze(e.then) && Ze(e.catch), xi = Object.prototype.toString, _n = (e) => xi.call(e), gu = (e) => _n(e).slice(8, -1), Si = (e) => _n(e) === "[object Object]", sl = (e) => It(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xo = /* @__PURE__ */ Za(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), oa = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, hu = /-\w/g, ls = oa(
  (e) => e.replace(hu, (s) => s.slice(1).toUpperCase())
), yu = /\B([A-Z])/g, Js = oa(
  (e) => e.replace(yu, "-$1").toLowerCase()
), na = oa((e) => e.charAt(0).toUpperCase() + e.slice(1)), ka = oa(
  (e) => e ? `on${na(e)}` : ""
), Ks = (e, s) => !Object.is(e, s), On = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, Ii = (e, s, o, a = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: o
  });
}, aa = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, wu = (e) => {
  const s = It(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let Sl;
const la = () => Sl || (Sl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function es(e) {
  if (Ye(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = It(a) ? $u(a) : es(a);
      if (l)
        for (const r in l)
          s[r] = l[r];
    }
    return s;
  } else if (It(e) || ht(e))
    return e;
}
const _u = /;(?![^(]*\))/g, ku = /:([^]+)/, bu = /\/\*[^]*?\*\//g;
function $u(e) {
  const s = {};
  return e.replace(bu, "").split(_u).forEach((o) => {
    if (o) {
      const a = o.split(ku);
      a.length > 1 && (s[a[0].trim()] = a[1].trim());
    }
  }), s;
}
function Re(e) {
  let s = "";
  if (It(e))
    s = e;
  else if (Ye(e))
    for (let o = 0; o < e.length; o++) {
      const a = Re(e[o]);
      a && (s += a + " ");
    }
  else if (ht(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const Cu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xu = /* @__PURE__ */ Za(Cu);
function Ei(e) {
  return !!e || e === "";
}
function Su(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let a = 0; o && a < e.length; a++)
    o = co(e[a], s[a]);
  return o;
}
function co(e, s) {
  if (e === s) return !0;
  let o = xl(e), a = xl(s);
  if (o || a)
    return o && a ? e.getTime() === s.getTime() : !1;
  if (o = fs(e), a = fs(s), o || a)
    return e === s;
  if (o = Ye(e), a = Ye(s), o || a)
    return o && a ? Su(e, s) : !1;
  if (o = ht(e), a = ht(s), o || a) {
    if (!o || !a)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(s).length;
    if (l !== r)
      return !1;
    for (const u in e) {
      const c = e.hasOwnProperty(u), m = s.hasOwnProperty(u);
      if (c && !m || !c && m || !co(e[u], s[u]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function ol(e, s) {
  return e.findIndex((o) => co(o, s));
}
const Ti = (e) => !!(e && e.__v_isRef === !0), d = (e) => It(e) ? e : e == null ? "" : Ye(e) || ht(e) && (e.toString === xi || !Ze(e.toString)) ? Ti(e) ? d(e.value) : JSON.stringify(e, Pi, 2) : String(e), Pi = (e, s) => Ti(s) ? Pi(e, s.value) : To(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [a, l], r) => (o[ba(a, r) + " =>"] = l, o),
    {}
  )
} : Oo(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => ba(o))
} : fs(s) ? ba(s) : ht(s) && !Ye(s) && !Si(s) ? String(s) : s, ba = (e, s = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    fs(e) ? `Symbol(${(o = e.description) != null ? o : s})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let qt;
class Iu {
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
function Eu() {
  return qt;
}
let bt;
const $a = /* @__PURE__ */ new WeakSet();
class Mi {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, qt && qt.active && qt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, $a.has(this) && ($a.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Di(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Il(this), Li(this);
    const s = bt, o = ms;
    bt = this, ms = !0;
    try {
      return this.fn();
    } finally {
      Ui(this), bt = s, ms = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        ll(s);
      this.deps = this.depsTail = void 0, Il(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? $a.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Oa(this) && this.run();
  }
  get dirty() {
    return Oa(this);
  }
}
let Ri = 0, Zo, en;
function Di(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = en, en = e;
    return;
  }
  e.next = Zo, Zo = e;
}
function nl() {
  Ri++;
}
function al() {
  if (--Ri > 0)
    return;
  if (en) {
    let s = en;
    for (en = void 0; s; ) {
      const o = s.next;
      s.next = void 0, s.flags &= -9, s = o;
    }
  }
  let e;
  for (; Zo; ) {
    let s = Zo;
    for (Zo = void 0; s; ) {
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
function Li(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function Ui(e) {
  let s, o = e.depsTail, a = o;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === o && (o = l), ll(a), Tu(a)) : s = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = s, e.depsTail = o;
}
function Oa(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (Ni(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function Ni(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === cn) || (e.globalVersion = cn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Oa(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = bt, a = ms;
  bt = e, ms = !0;
  try {
    Li(e);
    const l = e.fn(e._value);
    (s.version === 0 || Ks(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    bt = o, ms = a, Ui(e), e.flags &= -3;
  }
}
function ll(e, s = !1) {
  const { dep: o, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), o.subs === e && (o.subs = a, !a && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      ll(r, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function Tu(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let ms = !0;
const Oi = [];
function Us() {
  Oi.push(ms), ms = !1;
}
function Ns() {
  const e = Oi.pop();
  ms = e === void 0 ? !0 : e;
}
function Il(e) {
  const { cleanup: s } = e;
  if (e.cleanup = void 0, s) {
    const o = bt;
    bt = void 0;
    try {
      s();
    } finally {
      bt = o;
    }
  }
}
let cn = 0;
class Pu {
  constructor(s, o) {
    this.sub = s, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class il {
  // TODO isolatedDeclarations "__v_skip"
  constructor(s) {
    this.computed = s, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(s) {
    if (!bt || !ms || bt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== bt)
      o = this.activeLink = new Pu(bt, this), bt.deps ? (o.prevDep = bt.depsTail, bt.depsTail.nextDep = o, bt.depsTail = o) : bt.deps = bt.depsTail = o, Ai(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = bt.depsTail, o.nextDep = void 0, bt.depsTail.nextDep = o, bt.depsTail = o, bt.deps === o && (bt.deps = a);
    }
    return o;
  }
  trigger(s) {
    this.version++, cn++, this.notify(s);
  }
  notify(s) {
    nl();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      al();
    }
  }
}
function Ai(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let a = s.deps; a; a = a.nextDep)
        Ai(a);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Aa = /* @__PURE__ */ new WeakMap(), io = Symbol(
  ""
), za = Symbol(
  ""
), dn = Symbol(
  ""
);
function At(e, s, o) {
  if (ms && bt) {
    let a = Aa.get(e);
    a || Aa.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(o);
    l || (a.set(o, l = new il()), l.map = a, l.key = o), l.track();
  }
}
function Ms(e, s, o, a, l, r) {
  const u = Aa.get(e);
  if (!u) {
    cn++;
    return;
  }
  const c = (m) => {
    m && m.trigger();
  };
  if (nl(), s === "clear")
    u.forEach(c);
  else {
    const m = Ye(e), f = m && sl(o);
    if (m && o === "length") {
      const v = Number(a);
      u.forEach((g, _) => {
        (_ === "length" || _ === dn || !fs(_) && _ >= v) && c(g);
      });
    } else
      switch ((o !== void 0 || u.has(void 0)) && c(u.get(o)), f && c(u.get(dn)), s) {
        case "add":
          m ? f && c(u.get("length")) : (c(u.get(io)), To(e) && c(u.get(za)));
          break;
        case "delete":
          m || (c(u.get(io)), To(e) && c(u.get(za)));
          break;
        case "set":
          To(e) && c(u.get(io));
          break;
      }
  }
  al();
}
function bo(e) {
  const s = ct(e);
  return s === e ? s : (At(s, "iterate", dn), os(e) ? s : s.map(vs));
}
function ia(e) {
  return At(e = ct(e), "iterate", dn), e;
}
function Gs(e, s) {
  return Os(e) ? ro(e) ? Lo(vs(s)) : Lo(s) : vs(s);
}
const Mu = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ca(this, Symbol.iterator, (e) => Gs(this, e));
  },
  concat(...e) {
    return bo(this).concat(
      ...e.map((s) => Ye(s) ? bo(s) : s)
    );
  },
  entries() {
    return Ca(this, "entries", (e) => (e[1] = Gs(this, e[1]), e));
  },
  every(e, s) {
    return Is(this, "every", e, s, void 0, arguments);
  },
  filter(e, s) {
    return Is(
      this,
      "filter",
      e,
      s,
      (o) => o.map((a) => Gs(this, a)),
      arguments
    );
  },
  find(e, s) {
    return Is(
      this,
      "find",
      e,
      s,
      (o) => Gs(this, o),
      arguments
    );
  },
  findIndex(e, s) {
    return Is(this, "findIndex", e, s, void 0, arguments);
  },
  findLast(e, s) {
    return Is(
      this,
      "findLast",
      e,
      s,
      (o) => Gs(this, o),
      arguments
    );
  },
  findLastIndex(e, s) {
    return Is(this, "findLastIndex", e, s, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, s) {
    return Is(this, "forEach", e, s, void 0, arguments);
  },
  includes(...e) {
    return xa(this, "includes", e);
  },
  indexOf(...e) {
    return xa(this, "indexOf", e);
  },
  join(e) {
    return bo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return xa(this, "lastIndexOf", e);
  },
  map(e, s) {
    return Is(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return Fo(this, "pop");
  },
  push(...e) {
    return Fo(this, "push", e);
  },
  reduce(e, ...s) {
    return El(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return El(this, "reduceRight", e, s);
  },
  shift() {
    return Fo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return Is(this, "some", e, s, void 0, arguments);
  },
  splice(...e) {
    return Fo(this, "splice", e);
  },
  toReversed() {
    return bo(this).toReversed();
  },
  toSorted(e) {
    return bo(this).toSorted(e);
  },
  toSpliced(...e) {
    return bo(this).toSpliced(...e);
  },
  unshift(...e) {
    return Fo(this, "unshift", e);
  },
  values() {
    return Ca(this, "values", (e) => Gs(this, e));
  }
};
function Ca(e, s, o) {
  const a = ia(e), l = a[s]();
  return a !== e && !os(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const Ru = Array.prototype;
function Is(e, s, o, a, l, r) {
  const u = ia(e), c = u !== e && !os(e), m = u[s];
  if (m !== Ru[s]) {
    const g = m.apply(e, r);
    return c ? vs(g) : g;
  }
  let f = o;
  u !== e && (c ? f = function(g, _) {
    return o.call(this, Gs(e, g), _, e);
  } : o.length > 2 && (f = function(g, _) {
    return o.call(this, g, _, e);
  }));
  const v = m.call(u, f, a);
  return c && l ? l(v) : v;
}
function El(e, s, o, a) {
  const l = ia(e);
  let r = o;
  return l !== e && (os(e) ? o.length > 3 && (r = function(u, c, m) {
    return o.call(this, u, c, m, e);
  }) : r = function(u, c, m) {
    return o.call(this, u, Gs(e, c), m, e);
  }), l[s](r, ...a);
}
function xa(e, s, o) {
  const a = ct(e);
  At(a, "iterate", dn);
  const l = a[s](...o);
  return (l === -1 || l === !1) && cl(o[0]) ? (o[0] = ct(o[0]), a[s](...o)) : l;
}
function Fo(e, s, o = []) {
  Us(), nl();
  const a = ct(e)[s].apply(e, o);
  return al(), Ns(), a;
}
const Du = /* @__PURE__ */ Za("__proto__,__v_isRef,__isVue"), zi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(fs)
);
function Lu(e) {
  fs(e) || (e = String(e));
  const s = ct(this);
  return At(s, "has", e), s.hasOwnProperty(e);
}
class Vi {
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
      return a === (l ? r ? Gu : Gi : r ? Wi : Bi).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(a) ? s : void 0;
    const u = Ye(s);
    if (!l) {
      let m;
      if (u && (m = Mu[o]))
        return m;
      if (o === "hasOwnProperty")
        return Lu;
    }
    const c = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ft(s) ? s : a
    );
    if ((fs(o) ? zi.has(o) : Du(o)) || (l || At(s, "get", o), r))
      return c;
    if (Ft(c)) {
      const m = u && sl(o) ? c : c.value;
      return l && ht(m) ? Gn(m) : m;
    }
    return ht(c) ? l ? Gn(c) : Qs(c) : c;
  }
}
class Fi extends Vi {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, a, l) {
    let r = s[o];
    const u = Ye(s) && sl(o);
    if (!this._isShallow) {
      const f = Os(r);
      if (!os(a) && !Os(a) && (r = ct(r), a = ct(a)), !u && Ft(r) && !Ft(a))
        return f || (r.value = a), !0;
    }
    const c = u ? Number(o) < s.length : mt(s, o), m = Reflect.set(
      s,
      o,
      a,
      Ft(s) ? s : l
    );
    return s === ct(l) && (c ? Ks(a, r) && Ms(s, "set", o, a) : Ms(s, "add", o, a)), m;
  }
  deleteProperty(s, o) {
    const a = mt(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && a && Ms(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const a = Reflect.has(s, o);
    return (!fs(o) || !zi.has(o)) && At(s, "has", o), a;
  }
  ownKeys(s) {
    return At(
      s,
      "iterate",
      Ye(s) ? "length" : io
    ), Reflect.ownKeys(s);
  }
}
class Uu extends Vi {
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
const Nu = /* @__PURE__ */ new Fi(), Ou = /* @__PURE__ */ new Uu(), Au = /* @__PURE__ */ new Fi(!0);
const Va = (e) => e, Sn = (e) => Reflect.getPrototypeOf(e);
function zu(e, s, o) {
  return function(...a) {
    const l = this.__v_raw, r = ct(l), u = To(r), c = e === "entries" || e === Symbol.iterator && u, m = e === "keys" && u, f = l[e](...a), v = o ? Va : s ? Lo : vs;
    return !s && At(
      r,
      "iterate",
      m ? za : io
    ), {
      // iterator protocol
      next() {
        const { value: g, done: _ } = f.next();
        return _ ? { value: g, done: _ } : {
          value: c ? [v(g[0]), v(g[1])] : v(g),
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
function In(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Vu(e, s) {
  const o = {
    get(l) {
      const r = this.__v_raw, u = ct(r), c = ct(l);
      e || (Ks(l, c) && At(u, "get", l), At(u, "get", c));
      const { has: m } = Sn(u), f = s ? Va : e ? Lo : vs;
      if (m.call(u, l))
        return f(r.get(l));
      if (m.call(u, c))
        return f(r.get(c));
      r !== u && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && At(ct(l), "iterate", io), l.size;
    },
    has(l) {
      const r = this.__v_raw, u = ct(r), c = ct(l);
      return e || (Ks(l, c) && At(u, "has", l), At(u, "has", c)), l === c ? r.has(l) : r.has(l) || r.has(c);
    },
    forEach(l, r) {
      const u = this, c = u.__v_raw, m = ct(c), f = s ? Va : e ? Lo : vs;
      return !e && At(m, "iterate", io), c.forEach((v, g) => l.call(r, f(v), f(g), u));
    }
  };
  return Rt(
    o,
    e ? {
      add: In("add"),
      set: In("set"),
      delete: In("delete"),
      clear: In("clear")
    } : {
      add(l) {
        !s && !os(l) && !Os(l) && (l = ct(l));
        const r = ct(this);
        return Sn(r).has.call(r, l) || (r.add(l), Ms(r, "add", l, l)), this;
      },
      set(l, r) {
        !s && !os(r) && !Os(r) && (r = ct(r));
        const u = ct(this), { has: c, get: m } = Sn(u);
        let f = c.call(u, l);
        f || (l = ct(l), f = c.call(u, l));
        const v = m.call(u, l);
        return u.set(l, r), f ? Ks(r, v) && Ms(u, "set", l, r) : Ms(u, "add", l, r), this;
      },
      delete(l) {
        const r = ct(this), { has: u, get: c } = Sn(r);
        let m = u.call(r, l);
        m || (l = ct(l), m = u.call(r, l)), c && c.call(r, l);
        const f = r.delete(l);
        return m && Ms(r, "delete", l, void 0), f;
      },
      clear() {
        const l = ct(this), r = l.size !== 0, u = l.clear();
        return r && Ms(
          l,
          "clear",
          void 0,
          void 0
        ), u;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((l) => {
    o[l] = zu(l, e, s);
  }), o;
}
function rl(e, s) {
  const o = Vu(e, s);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    mt(o, l) && l in a ? o : a,
    l,
    r
  );
}
const Fu = {
  get: /* @__PURE__ */ rl(!1, !1)
}, Bu = {
  get: /* @__PURE__ */ rl(!1, !0)
}, Wu = {
  get: /* @__PURE__ */ rl(!0, !1)
};
const Bi = /* @__PURE__ */ new WeakMap(), Wi = /* @__PURE__ */ new WeakMap(), Gi = /* @__PURE__ */ new WeakMap(), Gu = /* @__PURE__ */ new WeakMap();
function ju(e) {
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
function Hu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ju(gu(e));
}
function Qs(e) {
  return Os(e) ? e : ul(
    e,
    !1,
    Nu,
    Fu,
    Bi
  );
}
function Ku(e) {
  return ul(
    e,
    !1,
    Au,
    Bu,
    Wi
  );
}
function Gn(e) {
  return ul(
    e,
    !0,
    Ou,
    Wu,
    Gi
  );
}
function ul(e, s, o, a, l) {
  if (!ht(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const r = Hu(e);
  if (r === 0)
    return e;
  const u = l.get(e);
  if (u)
    return u;
  const c = new Proxy(
    e,
    r === 2 ? a : o
  );
  return l.set(e, c), c;
}
function ro(e) {
  return Os(e) ? ro(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Os(e) {
  return !!(e && e.__v_isReadonly);
}
function os(e) {
  return !!(e && e.__v_isShallow);
}
function cl(e) {
  return e ? !!e.__v_raw : !1;
}
function ct(e) {
  const s = e && e.__v_raw;
  return s ? ct(s) : e;
}
function qu(e) {
  return !mt(e, "__v_skip") && Object.isExtensible(e) && Ii(e, "__v_skip", !0), e;
}
const vs = (e) => ht(e) ? Qs(e) : e, Lo = (e) => ht(e) ? Gn(e) : e;
function Ft(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function $(e) {
  return Yu(e, !1);
}
function Yu(e, s) {
  return Ft(e) ? e : new Ju(e, s);
}
class Ju {
  constructor(s, o) {
    this.dep = new il(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : ct(s), this._value = o ? s : vs(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, a = this.__v_isShallow || os(s) || Os(s);
    s = a ? s : ct(s), Ks(s, o) && (this._rawValue = s, this._value = a ? s : vs(s), this.dep.trigger());
  }
}
function Xe(e) {
  return Ft(e) ? e.value : e;
}
const Qu = {
  get: (e, s, o) => s === "__v_raw" ? e : Xe(Reflect.get(e, s, o)),
  set: (e, s, o, a) => {
    const l = e[s];
    return Ft(l) && !Ft(o) ? (l.value = o, !0) : Reflect.set(e, s, o, a);
  }
};
function ji(e) {
  return ro(e) ? e : new Proxy(e, Qu);
}
class Xu {
  constructor(s, o, a) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new il(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = cn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    bt !== this)
      return Di(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return Ni(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function Zu(e, s, o = !1) {
  let a, l;
  return Ze(e) ? a = e : (a = e.get, l = e.set), new Xu(a, l, o);
}
const En = {}, jn = /* @__PURE__ */ new WeakMap();
let ao;
function ec(e, s = !1, o = ao) {
  if (o) {
    let a = jn.get(o);
    a || jn.set(o, a = []), a.push(e);
  }
}
function tc(e, s, o = wt) {
  const { immediate: a, deep: l, once: r, scheduler: u, augmentJob: c, call: m } = o, f = (P) => l ? P : os(P) || l === !1 || l === 0 ? Rs(P, 1) : Rs(P);
  let v, g, _, h, w = !1, x = !1;
  if (Ft(e) ? (g = () => e.value, w = os(e)) : ro(e) ? (g = () => f(e), w = !0) : Ye(e) ? (x = !0, w = e.some((P) => ro(P) || os(P)), g = () => e.map((P) => {
    if (Ft(P))
      return P.value;
    if (ro(P))
      return f(P);
    if (Ze(P))
      return m ? m(P, 2) : P();
  })) : Ze(e) ? s ? g = m ? () => m(e, 2) : e : g = () => {
    if (_) {
      Us();
      try {
        _();
      } finally {
        Ns();
      }
    }
    const P = ao;
    ao = v;
    try {
      return m ? m(e, 3, [h]) : e(h);
    } finally {
      ao = P;
    }
  } : g = xs, s && l) {
    const P = g, D = l === !0 ? 1 / 0 : l;
    g = () => Rs(P(), D);
  }
  const b = Eu(), S = () => {
    v.stop(), b && b.active && tl(b.effects, v);
  };
  if (r && s) {
    const P = s;
    s = (...D) => {
      P(...D), S();
    };
  }
  let F = x ? new Array(e.length).fill(En) : En;
  const E = (P) => {
    if (!(!(v.flags & 1) || !v.dirty && !P))
      if (s) {
        const D = v.run();
        if (l || w || (x ? D.some((V, G) => Ks(V, F[G])) : Ks(D, F))) {
          _ && _();
          const V = ao;
          ao = v;
          try {
            const G = [
              D,
              // pass undefined as the old value when it's changed for the first time
              F === En ? void 0 : x && F[0] === En ? [] : F,
              h
            ];
            F = D, m ? m(s, 3, G) : (
              // @ts-expect-error
              s(...G)
            );
          } finally {
            ao = V;
          }
        }
      } else
        v.run();
  };
  return c && c(E), v = new Mi(g), v.scheduler = u ? () => u(E, !1) : E, h = (P) => ec(P, !1, v), _ = v.onStop = () => {
    const P = jn.get(v);
    if (P) {
      if (m)
        m(P, 4);
      else
        for (const D of P) D();
      jn.delete(v);
    }
  }, s ? a ? E(!0) : F = v.run() : u ? u(E.bind(null, !0), !0) : v.run(), S.pause = v.pause.bind(v), S.resume = v.resume.bind(v), S.stop = S, S;
}
function Rs(e, s = 1 / 0, o) {
  if (s <= 0 || !ht(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, Ft(e))
    Rs(e.value, s, o);
  else if (Ye(e))
    for (let a = 0; a < e.length; a++)
      Rs(e[a], s, o);
  else if (Oo(e) || To(e))
    e.forEach((a) => {
      Rs(a, s, o);
    });
  else if (Si(e)) {
    for (const a in e)
      Rs(e[a], s, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Rs(e[a], s, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function kn(e, s, o, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    ra(l, s, o);
  }
}
function ps(e, s, o, a) {
  if (Ze(e)) {
    const l = kn(e, s, o, a);
    return l && Ci(l) && l.catch((r) => {
      ra(r, s, o);
    }), l;
  }
  if (Ye(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(ps(e[r], s, o, a));
    return l;
  }
}
function ra(e, s, o, a = !0) {
  const l = s ? s.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: u } = s && s.appContext.config || wt;
  if (s) {
    let c = s.parent;
    const m = s.proxy, f = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; c; ) {
      const v = c.ec;
      if (v) {
        for (let g = 0; g < v.length; g++)
          if (v[g](e, m, f) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      Us(), kn(r, null, 10, [
        e,
        m,
        f
      ]), Ns();
      return;
    }
  }
  sc(e, o, l, a, u);
}
function sc(e, s, o, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const jt = [];
let bs = -1;
const Po = [];
let js = null, xo = 0;
const Hi = /* @__PURE__ */ Promise.resolve();
let Hn = null;
function Mt(e) {
  const s = Hn || Hi;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function oc(e) {
  let s = bs + 1, o = jt.length;
  for (; s < o; ) {
    const a = s + o >>> 1, l = jt[a], r = mn(l);
    r < e || r === e && l.flags & 2 ? s = a + 1 : o = a;
  }
  return s;
}
function dl(e) {
  if (!(e.flags & 1)) {
    const s = mn(e), o = jt[jt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= mn(o) ? jt.push(e) : jt.splice(oc(s), 0, e), e.flags |= 1, Ki();
  }
}
function Ki() {
  Hn || (Hn = Hi.then(Yi));
}
function nc(e) {
  Ye(e) ? Po.push(...e) : js && e.id === -1 ? js.splice(xo + 1, 0, e) : e.flags & 1 || (Po.push(e), e.flags |= 1), Ki();
}
function Tl(e, s, o = bs + 1) {
  for (; o < jt.length; o++) {
    const a = jt[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      jt.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function qi(e) {
  if (Po.length) {
    const s = [...new Set(Po)].sort(
      (o, a) => mn(o) - mn(a)
    );
    if (Po.length = 0, js) {
      js.push(...s);
      return;
    }
    for (js = s, xo = 0; xo < js.length; xo++) {
      const o = js[xo];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    js = null, xo = 0;
  }
}
const mn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Yi(e) {
  try {
    for (bs = 0; bs < jt.length; bs++) {
      const s = jt[bs];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), kn(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; bs < jt.length; bs++) {
      const s = jt[bs];
      s && (s.flags &= -2);
    }
    bs = -1, jt.length = 0, qi(), Hn = null, (jt.length || Po.length) && Yi();
  }
}
let Ut = null, Ji = null;
function Kn(e) {
  const s = Ut;
  return Ut = e, Ji = e && e.type.__scopeId || null, s;
}
function p(e, s = Ut, o) {
  if (!s || e._n)
    return e;
  const a = (...l) => {
    a._d && Jn(-1);
    const r = Kn(s);
    let u;
    try {
      u = e(...l);
    } finally {
      Kn(r), a._d && Jn(1);
    }
    return u;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function at(e, s) {
  if (Ut === null)
    return e;
  const o = va(Ut), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [r, u, c, m = wt] = s[l];
    r && (Ze(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Rs(u), a.push({
      dir: r,
      instance: o,
      value: u,
      oldValue: void 0,
      arg: c,
      modifiers: m
    }));
  }
  return e;
}
function to(e, s, o, a) {
  const l = e.dirs, r = s && s.dirs;
  for (let u = 0; u < l.length; u++) {
    const c = l[u];
    r && (c.oldValue = r[u].value);
    let m = c.dir[a];
    m && (Us(), ps(m, o, 8, [
      e.el,
      c,
      e,
      s
    ]), Ns());
  }
}
const Qi = Symbol("_vte"), Xi = (e) => e.__isTeleport, tn = (e) => e && (e.disabled || e.disabled === ""), Pl = (e) => e && (e.defer || e.defer === ""), Ml = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Rl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Fa = (e, s) => {
  const o = e && e.to;
  return It(o) ? s ? s(o) : null : o;
}, Zi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, a, l, r, u, c, m, f) {
    const {
      mc: v,
      pc: g,
      pbc: _,
      o: { insert: h, querySelector: w, createText: x, createComment: b }
    } = f, S = tn(s.props);
    let { shapeFlag: F, children: E, dynamicChildren: P } = s;
    if (e == null) {
      const D = s.el = x(""), V = s.anchor = x("");
      h(D, o, a), h(V, o, a);
      const G = (O, le) => {
        F & 16 && v(
          E,
          O,
          le,
          l,
          r,
          u,
          c,
          m
        );
      }, I = () => {
        const O = s.target = Fa(s.props, w), le = er(O, s, x, h);
        O && (u !== "svg" && Ml(O) ? u = "svg" : u !== "mathml" && Rl(O) && (u = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(O), S || (G(O, le), An(s, !1)));
      };
      S && (G(o, V), An(s, !0)), Pl(s.props) ? (s.el.__isMounted = !1, Wt(() => {
        I(), delete s.el.__isMounted;
      }, r)) : I();
    } else {
      if (Pl(s.props) && e.el.__isMounted === !1) {
        Wt(() => {
          Zi.process(
            e,
            s,
            o,
            a,
            l,
            r,
            u,
            c,
            m,
            f
          );
        }, r);
        return;
      }
      s.el = e.el, s.targetStart = e.targetStart;
      const D = s.anchor = e.anchor, V = s.target = e.target, G = s.targetAnchor = e.targetAnchor, I = tn(e.props), O = I ? o : V, le = I ? D : G;
      if (u === "svg" || Ml(V) ? u = "svg" : (u === "mathml" || Rl(V)) && (u = "mathml"), P ? (_(
        e.dynamicChildren,
        P,
        O,
        l,
        r,
        u,
        c
      ), gl(e, s, !0)) : m || g(
        e,
        s,
        O,
        le,
        l,
        r,
        u,
        c,
        !1
      ), S)
        I ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : Tn(
          s,
          o,
          D,
          f,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const ne = s.target = Fa(
          s.props,
          w
        );
        ne && Tn(
          s,
          ne,
          null,
          f,
          0
        );
      } else I && Tn(
        s,
        V,
        G,
        f,
        1
      );
      An(s, S);
    }
  },
  remove(e, s, o, { um: a, o: { remove: l } }, r) {
    const {
      shapeFlag: u,
      children: c,
      anchor: m,
      targetStart: f,
      targetAnchor: v,
      target: g,
      props: _
    } = e;
    if (g && (l(f), l(v)), r && l(m), u & 16) {
      const h = r || !tn(_);
      for (let w = 0; w < c.length; w++) {
        const x = c[w];
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
  move: Tn,
  hydrate: ac
};
function Tn(e, s, o, { o: { insert: a }, m: l }, r = 2) {
  r === 0 && a(e.targetAnchor, s, o);
  const { el: u, anchor: c, shapeFlag: m, children: f, props: v } = e, g = r === 2;
  if (g && a(u, s, o), (!g || tn(v)) && m & 16)
    for (let _ = 0; _ < f.length; _++)
      l(
        f[_],
        s,
        o,
        2
      );
  g && a(c, s, o);
}
function ac(e, s, o, a, l, r, {
  o: { nextSibling: u, parentNode: c, querySelector: m, insert: f, createText: v }
}, g) {
  function _(x, b, S, F) {
    b.anchor = g(
      u(x),
      b,
      c(x),
      o,
      a,
      l,
      r
    ), b.targetStart = S, b.targetAnchor = F;
  }
  const h = s.target = Fa(
    s.props,
    m
  ), w = tn(s.props);
  if (h) {
    const x = h._lpa || h.firstChild;
    if (s.shapeFlag & 16)
      if (w)
        _(
          e,
          s,
          x,
          x && u(x)
        );
      else {
        s.anchor = u(e);
        let b = x;
        for (; b; ) {
          if (b && b.nodeType === 8) {
            if (b.data === "teleport start anchor")
              s.targetStart = b;
            else if (b.data === "teleport anchor") {
              s.targetAnchor = b, h._lpa = s.targetAnchor && u(s.targetAnchor);
              break;
            }
          }
          b = u(b);
        }
        s.targetAnchor || er(h, s, v, f), g(
          x && u(x),
          s,
          h,
          o,
          a,
          l,
          r
        );
      }
    An(s, w);
  } else w && s.shapeFlag & 16 && _(e, s, e, u(e));
  return s.anchor && u(s.anchor);
}
const Nt = Zi;
function An(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let a, l;
    for (s ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", o.uid), a = a.nextSibling;
    o.ut();
  }
}
function er(e, s, o, a) {
  const l = s.targetStart = o(""), r = s.targetAnchor = o("");
  return l[Qi] = r, e && (a(l, e), a(r, e)), r;
}
const Ts = Symbol("_leaveCb"), Pn = Symbol("_enterCb");
function tr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return lt(() => {
    e.isMounted = !0;
  }), da(() => {
    e.isUnmounting = !0;
  }), e;
}
const ss = [Function, Array], sr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ss,
  onEnter: ss,
  onAfterEnter: ss,
  onEnterCancelled: ss,
  // leave
  onBeforeLeave: ss,
  onLeave: ss,
  onAfterLeave: ss,
  onLeaveCancelled: ss,
  // appear
  onBeforeAppear: ss,
  onAppear: ss,
  onAfterAppear: ss,
  onAppearCancelled: ss
}, or = (e) => {
  const s = e.subTree;
  return s.component ? or(s.component) : s;
}, lc = {
  name: "BaseTransition",
  props: sr,
  setup(e, { slots: s }) {
    const o = yl(), a = tr();
    return () => {
      const l = s.default && ml(s.default(), !0);
      if (!l || !l.length)
        return;
      const r = nr(l), u = ct(e), { mode: c } = u;
      if (a.isLeaving)
        return Sa(r);
      const m = Dl(r);
      if (!m)
        return Sa(r);
      let f = fn(
        m,
        u,
        a,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (g) => f = g
      );
      m.type !== zt && mo(m, f);
      let v = o.subTree && Dl(o.subTree);
      if (v && v.type !== zt && !lo(v, m) && or(o).type !== zt) {
        let g = fn(
          v,
          u,
          a,
          o
        );
        if (mo(v, g), c === "out-in" && m.type !== zt)
          return a.isLeaving = !0, g.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete g.afterLeave, v = void 0;
          }, Sa(r);
        c === "in-out" && m.type !== zt ? g.delayLeave = (_, h, w) => {
          const x = ar(
            a,
            v
          );
          x[String(v.key)] = v, _[Ts] = () => {
            h(), _[Ts] = void 0, delete f.delayedLeave, v = void 0;
          }, f.delayedLeave = () => {
            w(), delete f.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return r;
    };
  }
};
function nr(e) {
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
const ic = lc;
function ar(e, s) {
  const { leavingVNodes: o } = e;
  let a = o.get(s.type);
  return a || (a = /* @__PURE__ */ Object.create(null), o.set(s.type, a)), a;
}
function fn(e, s, o, a, l) {
  const {
    appear: r,
    mode: u,
    persisted: c = !1,
    onBeforeEnter: m,
    onEnter: f,
    onAfterEnter: v,
    onEnterCancelled: g,
    onBeforeLeave: _,
    onLeave: h,
    onAfterLeave: w,
    onLeaveCancelled: x,
    onBeforeAppear: b,
    onAppear: S,
    onAfterAppear: F,
    onAppearCancelled: E
  } = s, P = String(e.key), D = ar(o, e), V = (O, le) => {
    O && ps(
      O,
      a,
      9,
      le
    );
  }, G = (O, le) => {
    const ne = le[1];
    V(O, le), Ye(O) ? O.every((K) => K.length <= 1) && ne() : O.length <= 1 && ne();
  }, I = {
    mode: u,
    persisted: c,
    beforeEnter(O) {
      let le = m;
      if (!o.isMounted)
        if (r)
          le = b || m;
        else
          return;
      O[Ts] && O[Ts](
        !0
        /* cancelled */
      );
      const ne = D[P];
      ne && lo(e, ne) && ne.el[Ts] && ne.el[Ts](), V(le, [O]);
    },
    enter(O) {
      let le = f, ne = v, K = g;
      if (!o.isMounted)
        if (r)
          le = S || f, ne = F || v, K = E || g;
        else
          return;
      let j = !1;
      const B = O[Pn] = (q) => {
        j || (j = !0, q ? V(K, [O]) : V(ne, [O]), I.delayedLeave && I.delayedLeave(), O[Pn] = void 0);
      };
      le ? G(le, [O, B]) : B();
    },
    leave(O, le) {
      const ne = String(e.key);
      if (O[Pn] && O[Pn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return le();
      V(_, [O]);
      let K = !1;
      const j = O[Ts] = (B) => {
        K || (K = !0, le(), B ? V(x, [O]) : V(w, [O]), O[Ts] = void 0, D[ne] === e && delete D[ne]);
      };
      D[ne] = e, h ? G(h, [O, j]) : j();
    },
    clone(O) {
      const le = fn(
        O,
        s,
        o,
        a,
        l
      );
      return l && l(le), le;
    }
  };
  return I;
}
function Sa(e) {
  if (ua(e))
    return e = qs(e), e.children = null, e;
}
function Dl(e) {
  if (!ua(e))
    return Xi(e.type) && e.children ? nr(e.children) : e;
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
function mo(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, mo(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function ml(e, s = !1, o) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let u = e[r];
    const c = o == null ? u.key : String(o) + String(u.key != null ? u.key : r);
    u.type === H ? (u.patchFlag & 128 && l++, a = a.concat(
      ml(u.children, s, c)
    )) : (s || u.type !== zt) && a.push(c != null ? qs(u, { key: c }) : u);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function we(e, s) {
  return Ze(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Rt({ name: e.name }, s, { setup: e })
  ) : e;
}
function lr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const qn = /* @__PURE__ */ new WeakMap();
function sn(e, s, o, a, l = !1) {
  if (Ye(e)) {
    e.forEach(
      (w, x) => sn(
        w,
        s && (Ye(s) ? s[x] : s),
        o,
        a,
        l
      )
    );
    return;
  }
  if (Mo(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && sn(e, s, o, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? va(a.component) : a.el, u = l ? null : r, { i: c, r: m } = e, f = s && s.r, v = c.refs === wt ? c.refs = {} : c.refs, g = c.setupState, _ = ct(g), h = g === wt ? $i : (w) => mt(_, w);
  if (f != null && f !== m) {
    if (Ll(s), It(f))
      v[f] = null, h(f) && (g[f] = null);
    else if (Ft(f)) {
      f.value = null;
      const w = s;
      w.k && (v[w.k] = null);
    }
  }
  if (Ze(m))
    kn(m, c, 12, [u, v]);
  else {
    const w = It(m), x = Ft(m);
    if (w || x) {
      const b = () => {
        if (e.f) {
          const S = w ? h(m) ? g[m] : v[m] : m.value;
          if (l)
            Ye(S) && tl(S, r);
          else if (Ye(S))
            S.includes(r) || S.push(r);
          else if (w)
            v[m] = [r], h(m) && (g[m] = v[m]);
          else {
            const F = [r];
            m.value = F, e.k && (v[e.k] = F);
          }
        } else w ? (v[m] = u, h(m) && (g[m] = u)) : x && (m.value = u, e.k && (v[e.k] = u));
      };
      if (u) {
        const S = () => {
          b(), qn.delete(e);
        };
        S.id = -1, qn.set(e, S), Wt(S, o);
      } else
        Ll(e), b();
    }
  }
}
function Ll(e) {
  const s = qn.get(e);
  s && (s.flags |= 8, qn.delete(e));
}
la().requestIdleCallback;
la().cancelIdleCallback;
const Mo = (e) => !!e.type.__asyncLoader, ua = (e) => e.type.__isKeepAlive;
function rc(e, s) {
  ir(e, "a", s);
}
function uc(e, s) {
  ir(e, "da", s);
}
function ir(e, s, o = Vt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (ca(s, a, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      ua(l.parent.vnode) && cc(a, s, o, l), l = l.parent;
  }
}
function cc(e, s, o, a) {
  const l = ca(
    s,
    e,
    a,
    !0
    /* prepend */
  );
  Xs(() => {
    tl(a[s], l);
  }, o);
}
function ca(e, s, o = Vt, a = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = s.__weh || (s.__weh = (...u) => {
      Us();
      const c = bn(o), m = ps(s, o, e, u);
      return c(), Ns(), m;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const As = (e) => (s, o = Vt) => {
  (!gn || e === "sp") && ca(e, (...a) => s(...a), o);
}, dc = As("bm"), lt = As("m"), mc = As(
  "bu"
), rr = As("u"), da = As(
  "bum"
), Xs = As("um"), fc = As(
  "sp"
), vc = As("rtg"), pc = As("rtc");
function gc(e, s = Vt) {
  ca("ec", e, s);
}
const hc = "components", ur = Symbol.for("v-ndc");
function fl(e) {
  return It(e) ? yc(hc, e, !1) || e : e || ur;
}
function yc(e, s, o = !0, a = !1) {
  const l = Ut || Vt;
  if (l) {
    const r = l.type;
    {
      const c = ld(
        r,
        !1
      );
      if (c && (c === s || c === ls(s) || c === na(ls(s))))
        return r;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ul(l[e] || r[e], s) || // global registration
      Ul(l.appContext[e], s)
    );
    return !u && a ? r : u;
  }
}
function Ul(e, s) {
  return e && (e[s] || e[ls(s)] || e[na(ls(s))]);
}
function pe(e, s, o, a) {
  let l;
  const r = o, u = Ye(e);
  if (u || It(e)) {
    const c = u && ro(e);
    let m = !1, f = !1;
    c && (m = !os(e), f = Os(e), e = ia(e)), l = new Array(e.length);
    for (let v = 0, g = e.length; v < g; v++)
      l[v] = s(
        m ? f ? Lo(vs(e[v])) : vs(e[v]) : e[v],
        v,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let c = 0; c < e; c++)
      l[c] = s(c + 1, c, void 0, r);
  } else if (ht(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (c, m) => s(c, m, void 0, r)
      );
    else {
      const c = Object.keys(e);
      l = new Array(c.length);
      for (let m = 0, f = c.length; m < f; m++) {
        const v = c[m];
        l[m] = s(e[v], v, m, r);
      }
    }
  else
    l = [];
  return l;
}
function fo(e, s) {
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
function nt(e, s, o = {}, a, l) {
  if (Ut.ce || Ut.parent && Mo(Ut.parent) && Ut.parent.ce) {
    const f = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), n(), U(
      H,
      null,
      [k("slot", o, a && a())],
      f ? -2 : 64
    );
  }
  let r = e[s];
  r && r._c && (r._d = !1), n();
  const u = r && cr(r(o)), c = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  u && u.key, m = U(
    H,
    {
      key: (c && !fs(c) ? c : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!u && a ? "_fb" : "")
    },
    u || (a ? a() : []),
    u && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), m;
}
function cr(e) {
  return e.some((s) => pn(s) ? !(s.type === zt || s.type === H && !cr(s.children)) : !0) ? e : null;
}
const Ba = (e) => e ? Tr(e) ? va(e) : Ba(e.parent) : null, on = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Rt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ba(e.parent),
    $root: (e) => Ba(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => mr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      dl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Mt.bind(e.proxy)),
    $watch: (e) => Pc.bind(e)
  })
), Ia = (e, s) => e !== wt && !e.__isScriptSetup && mt(e, s), wc = {
  get({ _: e }, s) {
    if (s === "__v_skip")
      return !0;
    const { ctx: o, setupState: a, data: l, props: r, accessCache: u, type: c, appContext: m } = e;
    if (s[0] !== "$") {
      const _ = u[s];
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
        if (Ia(a, s))
          return u[s] = 1, a[s];
        if (l !== wt && mt(l, s))
          return u[s] = 2, l[s];
        if (mt(r, s))
          return u[s] = 3, r[s];
        if (o !== wt && mt(o, s))
          return u[s] = 4, o[s];
        Wa && (u[s] = 0);
      }
    }
    const f = on[s];
    let v, g;
    if (f)
      return s === "$attrs" && At(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (v = c.__cssModules) && (v = v[s])
    )
      return v;
    if (o !== wt && mt(o, s))
      return u[s] = 4, o[s];
    if (
      // global properties
      g = m.config.globalProperties, mt(g, s)
    )
      return g[s];
  },
  set({ _: e }, s, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return Ia(l, s) ? (l[s] = o, !0) : a !== wt && mt(a, s) ? (a[s] = o, !0) : mt(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (r[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: a, appContext: l, props: r, type: u }
  }, c) {
    let m;
    return !!(o[c] || e !== wt && c[0] !== "$" && mt(e, c) || Ia(s, c) || mt(r, c) || mt(a, c) || mt(on, c) || mt(l.config.globalProperties, c) || (m = u.__cssModules) && m[c]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : mt(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function Nl(e) {
  return Ye(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let Wa = !0;
function _c(e) {
  const s = mr(e), o = e.proxy, a = e.ctx;
  Wa = !1, s.beforeCreate && Ol(s.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: r,
    methods: u,
    watch: c,
    provide: m,
    inject: f,
    // lifecycle
    created: v,
    beforeMount: g,
    mounted: _,
    beforeUpdate: h,
    updated: w,
    activated: x,
    deactivated: b,
    beforeDestroy: S,
    beforeUnmount: F,
    destroyed: E,
    unmounted: P,
    render: D,
    renderTracked: V,
    renderTriggered: G,
    errorCaptured: I,
    serverPrefetch: O,
    // public API
    expose: le,
    inheritAttrs: ne,
    // assets
    components: K,
    directives: j,
    filters: B
  } = s;
  if (f && kc(f, a, null), u)
    for (const Le in u) {
      const ae = u[Le];
      Ze(ae) && (a[Le] = ae.bind(o));
    }
  if (l) {
    const Le = l.call(o, o);
    ht(Le) && (e.data = Qs(Le));
  }
  if (Wa = !0, r)
    for (const Le in r) {
      const ae = r[Le], de = Ze(ae) ? ae.bind(o, o) : Ze(ae.get) ? ae.get.bind(o, o) : xs, ie = !Ze(ae) && Ze(ae.set) ? ae.set.bind(o) : xs, Ae = z({
        get: de,
        set: ie
      });
      Object.defineProperty(a, Le, {
        enumerable: !0,
        configurable: !0,
        get: () => Ae.value,
        set: (_e) => Ae.value = _e
      });
    }
  if (c)
    for (const Le in c)
      dr(c[Le], a, o, Le);
  if (m) {
    const Le = Ze(m) ? m.call(o) : m;
    Reflect.ownKeys(Le).forEach((ae) => {
      Ic(ae, Le[ae]);
    });
  }
  v && Ol(v, e, "c");
  function X(Le, ae) {
    Ye(ae) ? ae.forEach((de) => Le(de.bind(o))) : ae && Le(ae.bind(o));
  }
  if (X(dc, g), X(lt, _), X(mc, h), X(rr, w), X(rc, x), X(uc, b), X(gc, I), X(pc, V), X(vc, G), X(da, F), X(Xs, P), X(fc, O), Ye(le))
    if (le.length) {
      const Le = e.exposed || (e.exposed = {});
      le.forEach((ae) => {
        Object.defineProperty(Le, ae, {
          get: () => o[ae],
          set: (de) => o[ae] = de,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  D && e.render === xs && (e.render = D), ne != null && (e.inheritAttrs = ne), K && (e.components = K), j && (e.directives = j), O && lr(e);
}
function kc(e, s, o = xs) {
  Ye(e) && (e = Ga(e));
  for (const a in e) {
    const l = e[a];
    let r;
    ht(l) ? "default" in l ? r = zn(
      l.from || a,
      l.default,
      !0
    ) : r = zn(l.from || a) : r = zn(l), Ft(r) ? Object.defineProperty(s, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (u) => r.value = u
    }) : s[a] = r;
  }
}
function Ol(e, s, o) {
  ps(
    Ye(e) ? e.map((a) => a.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function dr(e, s, o, a) {
  let l = a.includes(".") ? pr(o, a) : () => o[a];
  if (It(e)) {
    const r = s[e];
    Ze(r) && St(l, r);
  } else if (Ze(e))
    St(l, e.bind(o));
  else if (ht(e))
    if (Ye(e))
      e.forEach((r) => dr(r, s, o, a));
    else {
      const r = Ze(e.handler) ? e.handler.bind(o) : s[e.handler];
      Ze(r) && St(l, r, e);
    }
}
function mr(e) {
  const s = e.type, { mixins: o, extends: a } = s, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: u }
  } = e.appContext, c = r.get(s);
  let m;
  return c ? m = c : !l.length && !o && !a ? m = s : (m = {}, l.length && l.forEach(
    (f) => Yn(m, f, u, !0)
  ), Yn(m, s, u)), ht(s) && r.set(s, m), m;
}
function Yn(e, s, o, a = !1) {
  const { mixins: l, extends: r } = s;
  r && Yn(e, r, o, !0), l && l.forEach(
    (u) => Yn(e, u, o, !0)
  );
  for (const u in s)
    if (!(a && u === "expose")) {
      const c = bc[u] || o && o[u];
      e[u] = c ? c(e[u], s[u]) : s[u];
    }
  return e;
}
const bc = {
  data: Al,
  props: zl,
  emits: zl,
  // objects
  methods: Jo,
  computed: Jo,
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
  components: Jo,
  directives: Jo,
  // watch
  watch: Cc,
  // provide / inject
  provide: Al,
  inject: $c
};
function Al(e, s) {
  return s ? e ? function() {
    return Rt(
      Ze(e) ? e.call(this, this) : e,
      Ze(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function $c(e, s) {
  return Jo(Ga(e), Ga(s));
}
function Ga(e) {
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
function Jo(e, s) {
  return e ? Rt(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function zl(e, s) {
  return e ? Ye(e) && Ye(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : Rt(
    /* @__PURE__ */ Object.create(null),
    Nl(e),
    Nl(s ?? {})
  ) : s;
}
function Cc(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = Rt(/* @__PURE__ */ Object.create(null), e);
  for (const a in s)
    o[a] = Bt(e[a], s[a]);
  return o;
}
function fr() {
  return {
    app: null,
    config: {
      isNativeTag: $i,
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
let xc = 0;
function Sc(e, s) {
  return function(a, l = null) {
    Ze(a) || (a = Rt({}, a)), l != null && !ht(l) && (l = null);
    const r = fr(), u = /* @__PURE__ */ new WeakSet(), c = [];
    let m = !1;
    const f = r.app = {
      _uid: xc++,
      _component: a,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: rd,
      get config() {
        return r.config;
      },
      set config(v) {
      },
      use(v, ...g) {
        return u.has(v) || (v && Ze(v.install) ? (u.add(v), v.install(f, ...g)) : Ze(v) && (u.add(v), v(f, ...g))), f;
      },
      mixin(v) {
        return r.mixins.includes(v) || r.mixins.push(v), f;
      },
      component(v, g) {
        return g ? (r.components[v] = g, f) : r.components[v];
      },
      directive(v, g) {
        return g ? (r.directives[v] = g, f) : r.directives[v];
      },
      mount(v, g, _) {
        if (!m) {
          const h = f._ceVNode || k(a, l);
          return h.appContext = r, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), e(h, v, _), m = !0, f._container = v, v.__vue_app__ = f, va(h.component);
        }
      },
      onUnmount(v) {
        c.push(v);
      },
      unmount() {
        m && (ps(
          c,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(v, g) {
        return r.provides[v] = g, f;
      },
      runWithContext(v) {
        const g = Ro;
        Ro = f;
        try {
          return v();
        } finally {
          Ro = g;
        }
      }
    };
    return f;
  };
}
let Ro = null;
function Ic(e, s) {
  if (Vt) {
    let o = Vt.provides;
    const a = Vt.parent && Vt.parent.provides;
    a === o && (o = Vt.provides = Object.create(a)), o[e] = s;
  }
}
function zn(e, s, o = !1) {
  const a = yl();
  if (a || Ro) {
    let l = Ro ? Ro._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && Ze(s) ? s.call(a && a.proxy) : s;
  }
}
const Ec = Symbol.for("v-scx"), Tc = () => zn(Ec);
function St(e, s, o) {
  return vr(e, s, o);
}
function vr(e, s, o = wt) {
  const { immediate: a, deep: l, flush: r, once: u } = o, c = Rt({}, o), m = s && a || !s && r !== "post";
  let f;
  if (gn) {
    if (r === "sync") {
      const h = Tc();
      f = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!m) {
      const h = () => {
      };
      return h.stop = xs, h.resume = xs, h.pause = xs, h;
    }
  }
  const v = Vt;
  c.call = (h, w, x) => ps(h, v, w, x);
  let g = !1;
  r === "post" ? c.scheduler = (h) => {
    Wt(h, v && v.suspense);
  } : r !== "sync" && (g = !0, c.scheduler = (h, w) => {
    w ? h() : dl(h);
  }), c.augmentJob = (h) => {
    s && (h.flags |= 4), g && (h.flags |= 2, v && (h.id = v.uid, h.i = v));
  };
  const _ = tc(e, s, c);
  return gn && (f ? f.push(_) : m && _()), _;
}
function Pc(e, s, o) {
  const a = this.proxy, l = It(e) ? e.includes(".") ? pr(a, e) : () => a[e] : e.bind(a, a);
  let r;
  Ze(s) ? r = s : (r = s.handler, o = s);
  const u = bn(this), c = vr(l, r.bind(a), o);
  return u(), c;
}
function pr(e, s) {
  const o = s.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < o.length && a; l++)
      a = a[o[l]];
    return a;
  };
}
const Mc = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${ls(s)}Modifiers`] || e[`${Js(s)}Modifiers`];
function Rc(e, s, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || wt;
  let l = o;
  const r = s.startsWith("update:"), u = r && Mc(a, s.slice(7));
  u && (u.trim && (l = o.map((v) => It(v) ? v.trim() : v)), u.number && (l = o.map(aa)));
  let c, m = a[c = ka(s)] || // also try camelCase event handler (#2249)
  a[c = ka(ls(s))];
  !m && r && (m = a[c = ka(Js(s))]), m && ps(
    m,
    e,
    6,
    l
  );
  const f = a[c + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, ps(
      f,
      e,
      6,
      l
    );
  }
}
const Dc = /* @__PURE__ */ new WeakMap();
function gr(e, s, o = !1) {
  const a = o ? Dc : s.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let u = {}, c = !1;
  if (!Ze(e)) {
    const m = (f) => {
      const v = gr(f, s, !0);
      v && (c = !0, Rt(u, v));
    };
    !o && s.mixins.length && s.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  return !r && !c ? (ht(e) && a.set(e, null), null) : (Ye(r) ? r.forEach((m) => u[m] = null) : Rt(u, r), ht(e) && a.set(e, u), u);
}
function ma(e, s) {
  return !e || !sa(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), mt(e, s[0].toLowerCase() + s.slice(1)) || mt(e, Js(s)) || mt(e, s));
}
function Vl(e) {
  const {
    type: s,
    vnode: o,
    proxy: a,
    withProxy: l,
    propsOptions: [r],
    slots: u,
    attrs: c,
    emit: m,
    render: f,
    renderCache: v,
    props: g,
    data: _,
    setupState: h,
    ctx: w,
    inheritAttrs: x
  } = e, b = Kn(e);
  let S, F;
  try {
    if (o.shapeFlag & 4) {
      const P = l || a, D = P;
      S = Cs(
        f.call(
          D,
          P,
          v,
          g,
          h,
          _,
          w
        )
      ), F = c;
    } else {
      const P = s;
      S = Cs(
        P.length > 1 ? P(
          g,
          { attrs: c, slots: u, emit: m }
        ) : P(
          g,
          null
        )
      ), F = s.props ? c : Lc(c);
    }
  } catch (P) {
    nn.length = 0, ra(P, e, 1), S = k(zt);
  }
  let E = S;
  if (F && x !== !1) {
    const P = Object.keys(F), { shapeFlag: D } = E;
    P.length && D & 7 && (r && P.some(el) && (F = Uc(
      F,
      r
    )), E = qs(E, F, !1, !0));
  }
  return o.dirs && (E = qs(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(o.dirs) : o.dirs), o.transition && mo(E, o.transition), S = E, Kn(b), S;
}
const Lc = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || sa(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, Uc = (e, s) => {
  const o = {};
  for (const a in e)
    (!el(a) || !(a.slice(9) in s)) && (o[a] = e[a]);
  return o;
};
function Nc(e, s, o) {
  const { props: a, children: l, component: r } = e, { props: u, children: c, patchFlag: m } = s, f = r.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && m >= 0) {
    if (m & 1024)
      return !0;
    if (m & 16)
      return a ? Fl(a, u, f) : !!u;
    if (m & 8) {
      const v = s.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        const _ = v[g];
        if (u[_] !== a[_] && !ma(f, _))
          return !0;
      }
    }
  } else
    return (l || c) && (!c || !c.$stable) ? !0 : a === u ? !1 : a ? u ? Fl(a, u, f) : !0 : !!u;
  return !1;
}
function Fl(e, s, o) {
  const a = Object.keys(s);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (s[r] !== e[r] && !ma(o, r))
      return !0;
  }
  return !1;
}
function Oc({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const a = s.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const hr = {}, yr = () => Object.create(hr), wr = (e) => Object.getPrototypeOf(e) === hr;
function Ac(e, s, o, a = !1) {
  const l = {}, r = yr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), _r(e, s, l, r);
  for (const u in e.propsOptions[0])
    u in l || (l[u] = void 0);
  o ? e.props = a ? l : Ku(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function zc(e, s, o, a) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: u }
  } = e, c = ct(l), [m] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (a || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const v = e.vnode.dynamicProps;
      for (let g = 0; g < v.length; g++) {
        let _ = v[g];
        if (ma(e.emitsOptions, _))
          continue;
        const h = s[_];
        if (m)
          if (mt(r, _))
            h !== r[_] && (r[_] = h, f = !0);
          else {
            const w = ls(_);
            l[w] = ja(
              m,
              c,
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
    _r(e, s, l, r) && (f = !0);
    let v;
    for (const g in c)
      (!s || // for camelCase
      !mt(s, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Js(g)) === g || !mt(s, v))) && (m ? o && // for camelCase
      (o[g] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[g] = ja(
        m,
        c,
        g,
        void 0,
        e,
        !0
      )) : delete l[g]);
    if (r !== c)
      for (const g in r)
        (!s || !mt(s, g)) && (delete r[g], f = !0);
  }
  f && Ms(e.attrs, "set", "");
}
function _r(e, s, o, a) {
  const [l, r] = e.propsOptions;
  let u = !1, c;
  if (s)
    for (let m in s) {
      if (Xo(m))
        continue;
      const f = s[m];
      let v;
      l && mt(l, v = ls(m)) ? !r || !r.includes(v) ? o[v] = f : (c || (c = {}))[v] = f : ma(e.emitsOptions, m) || (!(m in a) || f !== a[m]) && (a[m] = f, u = !0);
    }
  if (r) {
    const m = ct(o), f = c || wt;
    for (let v = 0; v < r.length; v++) {
      const g = r[v];
      o[g] = ja(
        l,
        m,
        g,
        f[g],
        e,
        !mt(f, g)
      );
    }
  }
  return u;
}
function ja(e, s, o, a, l, r) {
  const u = e[o];
  if (u != null) {
    const c = mt(u, "default");
    if (c && a === void 0) {
      const m = u.default;
      if (u.type !== Function && !u.skipFactory && Ze(m)) {
        const { propsDefaults: f } = l;
        if (o in f)
          a = f[o];
        else {
          const v = bn(l);
          a = f[o] = m.call(
            null,
            s
          ), v();
        }
      } else
        a = m;
      l.ce && l.ce._setProp(o, a);
    }
    u[
      0
      /* shouldCast */
    ] && (r && !c ? a = !1 : u[
      1
      /* shouldCastTrue */
    ] && (a === "" || a === Js(o)) && (a = !0));
  }
  return a;
}
const Vc = /* @__PURE__ */ new WeakMap();
function kr(e, s, o = !1) {
  const a = o ? Vc : s.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, u = {}, c = [];
  let m = !1;
  if (!Ze(e)) {
    const v = (g) => {
      m = !0;
      const [_, h] = kr(g, s, !0);
      Rt(u, _), h && c.push(...h);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !m)
    return ht(e) && a.set(e, Eo), Eo;
  if (Ye(r))
    for (let v = 0; v < r.length; v++) {
      const g = ls(r[v]);
      Bl(g) && (u[g] = wt);
    }
  else if (r)
    for (const v in r) {
      const g = ls(v);
      if (Bl(g)) {
        const _ = r[v], h = u[g] = Ye(_) || Ze(_) ? { type: _ } : Rt({}, _), w = h.type;
        let x = !1, b = !0;
        if (Ye(w))
          for (let S = 0; S < w.length; ++S) {
            const F = w[S], E = Ze(F) && F.name;
            if (E === "Boolean") {
              x = !0;
              break;
            } else E === "String" && (b = !1);
          }
        else
          x = Ze(w) && w.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = x, h[
          1
          /* shouldCastTrue */
        ] = b, (x || mt(h, "default")) && c.push(g);
      }
    }
  const f = [u, c];
  return ht(e) && a.set(e, f), f;
}
function Bl(e) {
  return e[0] !== "$" && !Xo(e);
}
const vl = (e) => e === "_" || e === "_ctx" || e === "$stable", pl = (e) => Ye(e) ? e.map(Cs) : [Cs(e)], Fc = (e, s, o) => {
  if (s._n)
    return s;
  const a = p((...l) => pl(s(...l)), o);
  return a._c = !1, a;
}, br = (e, s, o) => {
  const a = e._ctx;
  for (const l in e) {
    if (vl(l)) continue;
    const r = e[l];
    if (Ze(r))
      s[l] = Fc(l, r, a);
    else if (r != null) {
      const u = pl(r);
      s[l] = () => u;
    }
  }
}, $r = (e, s) => {
  const o = pl(s);
  e.slots.default = () => o;
}, Cr = (e, s, o) => {
  for (const a in s)
    (o || !vl(a)) && (e[a] = s[a]);
}, Bc = (e, s, o) => {
  const a = e.slots = yr();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (Cr(a, s, o), o && Ii(a, "_", l, !0)) : br(s, a);
  } else s && $r(e, s);
}, Wc = (e, s, o) => {
  const { vnode: a, slots: l } = e;
  let r = !0, u = wt;
  if (a.shapeFlag & 32) {
    const c = s._;
    c ? o && c === 1 ? r = !1 : Cr(l, s, o) : (r = !s.$stable, br(s, l)), u = s;
  } else s && ($r(e, s), u = { default: 1 });
  if (r)
    for (const c in l)
      !vl(c) && u[c] == null && delete l[c];
}, Wt = qc;
function Gc(e) {
  return jc(e);
}
function jc(e, s) {
  const o = la();
  o.__VUE__ = !0;
  const {
    insert: a,
    remove: l,
    patchProp: r,
    createElement: u,
    createText: c,
    createComment: m,
    setText: f,
    setElementText: v,
    parentNode: g,
    nextSibling: _,
    setScopeId: h = xs,
    insertStaticContent: w
  } = e, x = (W, J, re, xe = null, be = null, $e = null, De = void 0, ye = null, Te = !!J.dynamicChildren) => {
    if (W === J)
      return;
    W && !lo(W, J) && (xe = L(W), _e(W, be, $e, !0), W = null), J.patchFlag === -2 && (Te = !1, J.dynamicChildren = null);
    const { type: fe, ref: We, shapeFlag: Ue } = J;
    switch (fe) {
      case fa:
        b(W, J, re, xe);
        break;
      case zt:
        S(W, J, re, xe);
        break;
      case Ta:
        W == null && F(J, re, xe, De);
        break;
      case H:
        K(
          W,
          J,
          re,
          xe,
          be,
          $e,
          De,
          ye,
          Te
        );
        break;
      default:
        Ue & 1 ? D(
          W,
          J,
          re,
          xe,
          be,
          $e,
          De,
          ye,
          Te
        ) : Ue & 6 ? j(
          W,
          J,
          re,
          xe,
          be,
          $e,
          De,
          ye,
          Te
        ) : (Ue & 64 || Ue & 128) && fe.process(
          W,
          J,
          re,
          xe,
          be,
          $e,
          De,
          ye,
          Te,
          Ne
        );
    }
    We != null && be ? sn(We, W && W.ref, $e, J || W, !J) : We == null && W && W.ref != null && sn(W.ref, null, $e, W, !0);
  }, b = (W, J, re, xe) => {
    if (W == null)
      a(
        J.el = c(J.children),
        re,
        xe
      );
    else {
      const be = J.el = W.el;
      J.children !== W.children && f(be, J.children);
    }
  }, S = (W, J, re, xe) => {
    W == null ? a(
      J.el = m(J.children || ""),
      re,
      xe
    ) : J.el = W.el;
  }, F = (W, J, re, xe) => {
    [W.el, W.anchor] = w(
      W.children,
      J,
      re,
      xe,
      W.el,
      W.anchor
    );
  }, E = ({ el: W, anchor: J }, re, xe) => {
    let be;
    for (; W && W !== J; )
      be = _(W), a(W, re, xe), W = be;
    a(J, re, xe);
  }, P = ({ el: W, anchor: J }) => {
    let re;
    for (; W && W !== J; )
      re = _(W), l(W), W = re;
    l(J);
  }, D = (W, J, re, xe, be, $e, De, ye, Te) => {
    if (J.type === "svg" ? De = "svg" : J.type === "math" && (De = "mathml"), W == null)
      V(
        J,
        re,
        xe,
        be,
        $e,
        De,
        ye,
        Te
      );
    else {
      const fe = W.el && W.el._isVueCE ? W.el : null;
      try {
        fe && fe._beginPatch(), O(
          W,
          J,
          be,
          $e,
          De,
          ye,
          Te
        );
      } finally {
        fe && fe._endPatch();
      }
    }
  }, V = (W, J, re, xe, be, $e, De, ye) => {
    let Te, fe;
    const { props: We, shapeFlag: Ue, transition: ge, dirs: Y } = W;
    if (Te = W.el = u(
      W.type,
      $e,
      We && We.is,
      We
    ), Ue & 8 ? v(Te, W.children) : Ue & 16 && I(
      W.children,
      Te,
      null,
      xe,
      be,
      Ea(W, $e),
      De,
      ye
    ), Y && to(W, null, xe, "created"), G(Te, W, W.scopeId, De, xe), We) {
      for (const Ie in We)
        Ie !== "value" && !Xo(Ie) && r(Te, Ie, null, We[Ie], $e, xe);
      "value" in We && r(Te, "value", null, We.value, $e), (fe = We.onVnodeBeforeMount) && ws(fe, xe, W);
    }
    Y && to(W, null, xe, "beforeMount");
    const Ve = Hc(be, ge);
    Ve && ge.beforeEnter(Te), a(Te, J, re), ((fe = We && We.onVnodeMounted) || Ve || Y) && Wt(() => {
      fe && ws(fe, xe, W), Ve && ge.enter(Te), Y && to(W, null, xe, "mounted");
    }, be);
  }, G = (W, J, re, xe, be) => {
    if (re && h(W, re), xe)
      for (let $e = 0; $e < xe.length; $e++)
        h(W, xe[$e]);
    if (be) {
      let $e = be.subTree;
      if (J === $e || Sr($e.type) && ($e.ssContent === J || $e.ssFallback === J)) {
        const De = be.vnode;
        G(
          W,
          De,
          De.scopeId,
          De.slotScopeIds,
          be.parent
        );
      }
    }
  }, I = (W, J, re, xe, be, $e, De, ye, Te = 0) => {
    for (let fe = Te; fe < W.length; fe++) {
      const We = W[fe] = ye ? Hs(W[fe]) : Cs(W[fe]);
      x(
        null,
        We,
        J,
        re,
        xe,
        be,
        $e,
        De,
        ye
      );
    }
  }, O = (W, J, re, xe, be, $e, De) => {
    const ye = J.el = W.el;
    let { patchFlag: Te, dynamicChildren: fe, dirs: We } = J;
    Te |= W.patchFlag & 16;
    const Ue = W.props || wt, ge = J.props || wt;
    let Y;
    if (re && so(re, !1), (Y = ge.onVnodeBeforeUpdate) && ws(Y, re, J, W), We && to(J, W, re, "beforeUpdate"), re && so(re, !0), (Ue.innerHTML && ge.innerHTML == null || Ue.textContent && ge.textContent == null) && v(ye, ""), fe ? le(
      W.dynamicChildren,
      fe,
      ye,
      re,
      xe,
      Ea(J, be),
      $e
    ) : De || ae(
      W,
      J,
      ye,
      null,
      re,
      xe,
      Ea(J, be),
      $e,
      !1
    ), Te > 0) {
      if (Te & 16)
        ne(ye, Ue, ge, re, be);
      else if (Te & 2 && Ue.class !== ge.class && r(ye, "class", null, ge.class, be), Te & 4 && r(ye, "style", Ue.style, ge.style, be), Te & 8) {
        const Ve = J.dynamicProps;
        for (let Ie = 0; Ie < Ve.length; Ie++) {
          const Ce = Ve[Ie], Oe = Ue[Ce], Me = ge[Ce];
          (Me !== Oe || Ce === "value") && r(ye, Ce, Oe, Me, be, re);
        }
      }
      Te & 1 && W.children !== J.children && v(ye, J.children);
    } else !De && fe == null && ne(ye, Ue, ge, re, be);
    ((Y = ge.onVnodeUpdated) || We) && Wt(() => {
      Y && ws(Y, re, J, W), We && to(J, W, re, "updated");
    }, xe);
  }, le = (W, J, re, xe, be, $e, De) => {
    for (let ye = 0; ye < J.length; ye++) {
      const Te = W[ye], fe = J[ye], We = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Te.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Te.type === H || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !lo(Te, fe) || // - In the case of a component, it could contain anything.
        Te.shapeFlag & 198) ? g(Te.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          re
        )
      );
      x(
        Te,
        fe,
        We,
        null,
        xe,
        be,
        $e,
        De,
        !0
      );
    }
  }, ne = (W, J, re, xe, be) => {
    if (J !== re) {
      if (J !== wt)
        for (const $e in J)
          !Xo($e) && !($e in re) && r(
            W,
            $e,
            J[$e],
            null,
            be,
            xe
          );
      for (const $e in re) {
        if (Xo($e)) continue;
        const De = re[$e], ye = J[$e];
        De !== ye && $e !== "value" && r(W, $e, ye, De, be, xe);
      }
      "value" in re && r(W, "value", J.value, re.value, be);
    }
  }, K = (W, J, re, xe, be, $e, De, ye, Te) => {
    const fe = J.el = W ? W.el : c(""), We = J.anchor = W ? W.anchor : c("");
    let { patchFlag: Ue, dynamicChildren: ge, slotScopeIds: Y } = J;
    Y && (ye = ye ? ye.concat(Y) : Y), W == null ? (a(fe, re, xe), a(We, re, xe), I(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      J.children || [],
      re,
      We,
      be,
      $e,
      De,
      ye,
      Te
    )) : Ue > 0 && Ue & 64 && ge && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    W.dynamicChildren ? (le(
      W.dynamicChildren,
      ge,
      re,
      be,
      $e,
      De,
      ye
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (J.key != null || be && J === be.subTree) && gl(
      W,
      J,
      !0
      /* shallow */
    )) : ae(
      W,
      J,
      re,
      We,
      be,
      $e,
      De,
      ye,
      Te
    );
  }, j = (W, J, re, xe, be, $e, De, ye, Te) => {
    J.slotScopeIds = ye, W == null ? J.shapeFlag & 512 ? be.ctx.activate(
      J,
      re,
      xe,
      De,
      Te
    ) : B(
      J,
      re,
      xe,
      be,
      $e,
      De,
      Te
    ) : q(W, J, Te);
  }, B = (W, J, re, xe, be, $e, De) => {
    const ye = W.component = td(
      W,
      xe,
      be
    );
    if (ua(W) && (ye.ctx.renderer = Ne), sd(ye, !1, De), ye.asyncDep) {
      if (be && be.registerDep(ye, X, De), !W.el) {
        const Te = ye.subTree = k(zt);
        S(null, Te, J, re), W.placeholder = Te.el;
      }
    } else
      X(
        ye,
        W,
        J,
        re,
        be,
        $e,
        De
      );
  }, q = (W, J, re) => {
    const xe = J.component = W.component;
    if (Nc(W, J, re))
      if (xe.asyncDep && !xe.asyncResolved) {
        Le(xe, J, re);
        return;
      } else
        xe.next = J, xe.update();
    else
      J.el = W.el, xe.vnode = J;
  }, X = (W, J, re, xe, be, $e, De) => {
    const ye = () => {
      if (W.isMounted) {
        let { next: Ue, bu: ge, u: Y, parent: Ve, vnode: Ie } = W;
        {
          const me = xr(W);
          if (me) {
            Ue && (Ue.el = Ie.el, Le(W, Ue, De)), me.asyncDep.then(() => {
              W.isUnmounted || ye();
            });
            return;
          }
        }
        let Ce = Ue, Oe;
        so(W, !1), Ue ? (Ue.el = Ie.el, Le(W, Ue, De)) : Ue = Ie, ge && On(ge), (Oe = Ue.props && Ue.props.onVnodeBeforeUpdate) && ws(Oe, Ve, Ue, Ie), so(W, !0);
        const Me = Vl(W), Q = W.subTree;
        W.subTree = Me, x(
          Q,
          Me,
          // parent may have changed if it's in a teleport
          g(Q.el),
          // anchor may have changed if it's in a fragment
          L(Q),
          W,
          be,
          $e
        ), Ue.el = Me.el, Ce === null && Oc(W, Me.el), Y && Wt(Y, be), (Oe = Ue.props && Ue.props.onVnodeUpdated) && Wt(
          () => ws(Oe, Ve, Ue, Ie),
          be
        );
      } else {
        let Ue;
        const { el: ge, props: Y } = J, { bm: Ve, m: Ie, parent: Ce, root: Oe, type: Me } = W, Q = Mo(J);
        so(W, !1), Ve && On(Ve), !Q && (Ue = Y && Y.onVnodeBeforeMount) && ws(Ue, Ce, J), so(W, !0);
        {
          Oe.ce && // @ts-expect-error _def is private
          Oe.ce._def.shadowRoot !== !1 && Oe.ce._injectChildStyle(Me);
          const me = W.subTree = Vl(W);
          x(
            null,
            me,
            re,
            xe,
            W,
            be,
            $e
          ), J.el = me.el;
        }
        if (Ie && Wt(Ie, be), !Q && (Ue = Y && Y.onVnodeMounted)) {
          const me = J;
          Wt(
            () => ws(Ue, Ce, me),
            be
          );
        }
        (J.shapeFlag & 256 || Ce && Mo(Ce.vnode) && Ce.vnode.shapeFlag & 256) && W.a && Wt(W.a, be), W.isMounted = !0, J = re = xe = null;
      }
    };
    W.scope.on();
    const Te = W.effect = new Mi(ye);
    W.scope.off();
    const fe = W.update = Te.run.bind(Te), We = W.job = Te.runIfDirty.bind(Te);
    We.i = W, We.id = W.uid, Te.scheduler = () => dl(We), so(W, !0), fe();
  }, Le = (W, J, re) => {
    J.component = W;
    const xe = W.vnode.props;
    W.vnode = J, W.next = null, zc(W, J.props, xe, re), Wc(W, J.children, re), Us(), Tl(W), Ns();
  }, ae = (W, J, re, xe, be, $e, De, ye, Te = !1) => {
    const fe = W && W.children, We = W ? W.shapeFlag : 0, Ue = J.children, { patchFlag: ge, shapeFlag: Y } = J;
    if (ge > 0) {
      if (ge & 128) {
        ie(
          fe,
          Ue,
          re,
          xe,
          be,
          $e,
          De,
          ye,
          Te
        );
        return;
      } else if (ge & 256) {
        de(
          fe,
          Ue,
          re,
          xe,
          be,
          $e,
          De,
          ye,
          Te
        );
        return;
      }
    }
    Y & 8 ? (We & 16 && se(fe, be, $e), Ue !== fe && v(re, Ue)) : We & 16 ? Y & 16 ? ie(
      fe,
      Ue,
      re,
      xe,
      be,
      $e,
      De,
      ye,
      Te
    ) : se(fe, be, $e, !0) : (We & 8 && v(re, ""), Y & 16 && I(
      Ue,
      re,
      xe,
      be,
      $e,
      De,
      ye,
      Te
    ));
  }, de = (W, J, re, xe, be, $e, De, ye, Te) => {
    W = W || Eo, J = J || Eo;
    const fe = W.length, We = J.length, Ue = Math.min(fe, We);
    let ge;
    for (ge = 0; ge < Ue; ge++) {
      const Y = J[ge] = Te ? Hs(J[ge]) : Cs(J[ge]);
      x(
        W[ge],
        Y,
        re,
        null,
        be,
        $e,
        De,
        ye,
        Te
      );
    }
    fe > We ? se(
      W,
      be,
      $e,
      !0,
      !1,
      Ue
    ) : I(
      J,
      re,
      xe,
      be,
      $e,
      De,
      ye,
      Te,
      Ue
    );
  }, ie = (W, J, re, xe, be, $e, De, ye, Te) => {
    let fe = 0;
    const We = J.length;
    let Ue = W.length - 1, ge = We - 1;
    for (; fe <= Ue && fe <= ge; ) {
      const Y = W[fe], Ve = J[fe] = Te ? Hs(J[fe]) : Cs(J[fe]);
      if (lo(Y, Ve))
        x(
          Y,
          Ve,
          re,
          null,
          be,
          $e,
          De,
          ye,
          Te
        );
      else
        break;
      fe++;
    }
    for (; fe <= Ue && fe <= ge; ) {
      const Y = W[Ue], Ve = J[ge] = Te ? Hs(J[ge]) : Cs(J[ge]);
      if (lo(Y, Ve))
        x(
          Y,
          Ve,
          re,
          null,
          be,
          $e,
          De,
          ye,
          Te
        );
      else
        break;
      Ue--, ge--;
    }
    if (fe > Ue) {
      if (fe <= ge) {
        const Y = ge + 1, Ve = Y < We ? J[Y].el : xe;
        for (; fe <= ge; )
          x(
            null,
            J[fe] = Te ? Hs(J[fe]) : Cs(J[fe]),
            re,
            Ve,
            be,
            $e,
            De,
            ye,
            Te
          ), fe++;
      }
    } else if (fe > ge)
      for (; fe <= Ue; )
        _e(W[fe], be, $e, !0), fe++;
    else {
      const Y = fe, Ve = fe, Ie = /* @__PURE__ */ new Map();
      for (fe = Ve; fe <= ge; fe++) {
        const Fe = J[fe] = Te ? Hs(J[fe]) : Cs(J[fe]);
        Fe.key != null && Ie.set(Fe.key, fe);
      }
      let Ce, Oe = 0;
      const Me = ge - Ve + 1;
      let Q = !1, me = 0;
      const he = new Array(Me);
      for (fe = 0; fe < Me; fe++) he[fe] = 0;
      for (fe = Y; fe <= Ue; fe++) {
        const Fe = W[fe];
        if (Oe >= Me) {
          _e(Fe, be, $e, !0);
          continue;
        }
        let Be;
        if (Fe.key != null)
          Be = Ie.get(Fe.key);
        else
          for (Ce = Ve; Ce <= ge; Ce++)
            if (he[Ce - Ve] === 0 && lo(Fe, J[Ce])) {
              Be = Ce;
              break;
            }
        Be === void 0 ? _e(Fe, be, $e, !0) : (he[Be - Ve] = fe + 1, Be >= me ? me = Be : Q = !0, x(
          Fe,
          J[Be],
          re,
          null,
          be,
          $e,
          De,
          ye,
          Te
        ), Oe++);
      }
      const Ke = Q ? Kc(he) : Eo;
      for (Ce = Ke.length - 1, fe = Me - 1; fe >= 0; fe--) {
        const Fe = Ve + fe, Be = J[Fe], et = J[Fe + 1], qe = Fe + 1 < We ? (
          // #13559, fallback to el placeholder for unresolved async component
          et.el || et.placeholder
        ) : xe;
        he[fe] === 0 ? x(
          null,
          Be,
          re,
          qe,
          be,
          $e,
          De,
          ye,
          Te
        ) : Q && (Ce < 0 || fe !== Ke[Ce] ? Ae(Be, re, qe, 2) : Ce--);
      }
    }
  }, Ae = (W, J, re, xe, be = null) => {
    const { el: $e, type: De, transition: ye, children: Te, shapeFlag: fe } = W;
    if (fe & 6) {
      Ae(W.component.subTree, J, re, xe);
      return;
    }
    if (fe & 128) {
      W.suspense.move(J, re, xe);
      return;
    }
    if (fe & 64) {
      De.move(W, J, re, Ne);
      return;
    }
    if (De === H) {
      a($e, J, re);
      for (let Ue = 0; Ue < Te.length; Ue++)
        Ae(Te[Ue], J, re, xe);
      a(W.anchor, J, re);
      return;
    }
    if (De === Ta) {
      E(W, J, re);
      return;
    }
    if (xe !== 2 && fe & 1 && ye)
      if (xe === 0)
        ye.beforeEnter($e), a($e, J, re), Wt(() => ye.enter($e), be);
      else {
        const { leave: Ue, delayLeave: ge, afterLeave: Y } = ye, Ve = () => {
          W.ctx.isUnmounted ? l($e) : a($e, J, re);
        }, Ie = () => {
          $e._isLeaving && $e[Ts](
            !0
            /* cancelled */
          ), Ue($e, () => {
            Ve(), Y && Y();
          });
        };
        ge ? ge($e, Ve, Ie) : Ie();
      }
    else
      a($e, J, re);
  }, _e = (W, J, re, xe = !1, be = !1) => {
    const {
      type: $e,
      props: De,
      ref: ye,
      children: Te,
      dynamicChildren: fe,
      shapeFlag: We,
      patchFlag: Ue,
      dirs: ge,
      cacheIndex: Y
    } = W;
    if (Ue === -2 && (be = !1), ye != null && (Us(), sn(ye, null, re, W, !0), Ns()), Y != null && (J.renderCache[Y] = void 0), We & 256) {
      J.ctx.deactivate(W);
      return;
    }
    const Ve = We & 1 && ge, Ie = !Mo(W);
    let Ce;
    if (Ie && (Ce = De && De.onVnodeBeforeUnmount) && ws(Ce, J, W), We & 6)
      M(W.component, re, xe);
    else {
      if (We & 128) {
        W.suspense.unmount(re, xe);
        return;
      }
      Ve && to(W, null, J, "beforeUnmount"), We & 64 ? W.type.remove(
        W,
        J,
        re,
        Ne,
        xe
      ) : fe && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !fe.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      ($e !== H || Ue > 0 && Ue & 64) ? se(
        fe,
        J,
        re,
        !1,
        !0
      ) : ($e === H && Ue & 384 || !be && We & 16) && se(Te, J, re), xe && Z(W);
    }
    (Ie && (Ce = De && De.onVnodeUnmounted) || Ve) && Wt(() => {
      Ce && ws(Ce, J, W), Ve && to(W, null, J, "unmounted");
    }, re);
  }, Z = (W) => {
    const { type: J, el: re, anchor: xe, transition: be } = W;
    if (J === H) {
      A(re, xe);
      return;
    }
    if (J === Ta) {
      P(W);
      return;
    }
    const $e = () => {
      l(re), be && !be.persisted && be.afterLeave && be.afterLeave();
    };
    if (W.shapeFlag & 1 && be && !be.persisted) {
      const { leave: De, delayLeave: ye } = be, Te = () => De(re, $e);
      ye ? ye(W.el, $e, Te) : Te();
    } else
      $e();
  }, A = (W, J) => {
    let re;
    for (; W !== J; )
      re = _(W), l(W), W = re;
    l(J);
  }, M = (W, J, re) => {
    const { bum: xe, scope: be, job: $e, subTree: De, um: ye, m: Te, a: fe } = W;
    Wl(Te), Wl(fe), xe && On(xe), be.stop(), $e && ($e.flags |= 8, _e(De, W, J, re)), ye && Wt(ye, J), Wt(() => {
      W.isUnmounted = !0;
    }, J);
  }, se = (W, J, re, xe = !1, be = !1, $e = 0) => {
    for (let De = $e; De < W.length; De++)
      _e(W[De], J, re, xe, be);
  }, L = (W) => {
    if (W.shapeFlag & 6)
      return L(W.component.subTree);
    if (W.shapeFlag & 128)
      return W.suspense.next();
    const J = _(W.anchor || W.el), re = J && J[Qi];
    return re ? _(re) : J;
  };
  let N = !1;
  const oe = (W, J, re) => {
    W == null ? J._vnode && _e(J._vnode, null, null, !0) : x(
      J._vnode || null,
      W,
      J,
      null,
      null,
      null,
      re
    ), J._vnode = W, N || (N = !0, Tl(), qi(), N = !1);
  }, Ne = {
    p: x,
    um: _e,
    m: Ae,
    r: Z,
    mt: B,
    mc: I,
    pc: ae,
    pbc: le,
    n: L,
    o: e
  };
  return {
    render: oe,
    hydrate: void 0,
    createApp: Sc(oe)
  };
}
function Ea({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function so({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function Hc(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function gl(e, s, o = !1) {
  const a = e.children, l = s.children;
  if (Ye(a) && Ye(l))
    for (let r = 0; r < a.length; r++) {
      const u = a[r];
      let c = l[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = l[r] = Hs(l[r]), c.el = u.el), !o && c.patchFlag !== -2 && gl(u, c)), c.type === fa && // avoid cached text nodes retaining detached dom nodes
      c.patchFlag !== -1 && (c.el = u.el), c.type === zt && !c.el && (c.el = u.el);
    }
}
function Kc(e) {
  const s = e.slice(), o = [0];
  let a, l, r, u, c;
  const m = e.length;
  for (a = 0; a < m; a++) {
    const f = e[a];
    if (f !== 0) {
      if (l = o[o.length - 1], e[l] < f) {
        s[a] = l, o.push(a);
        continue;
      }
      for (r = 0, u = o.length - 1; r < u; )
        c = r + u >> 1, e[o[c]] < f ? r = c + 1 : u = c;
      f < e[o[r]] && (r > 0 && (s[a] = o[r - 1]), o[r] = a);
    }
  }
  for (r = o.length, u = o[r - 1]; r-- > 0; )
    o[r] = u, u = s[u];
  return o;
}
function xr(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : xr(s);
}
function Wl(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const Sr = (e) => e.__isSuspense;
function qc(e, s) {
  s && s.pendingBranch ? Ye(e) ? s.effects.push(...e) : s.effects.push(e) : nc(e);
}
const H = Symbol.for("v-fgt"), fa = Symbol.for("v-txt"), zt = Symbol.for("v-cmt"), Ta = Symbol.for("v-stc"), nn = [];
let Xt = null;
function n(e = !1) {
  nn.push(Xt = e ? null : []);
}
function Yc() {
  nn.pop(), Xt = nn[nn.length - 1] || null;
}
let vn = 1;
function Jn(e, s = !1) {
  vn += e, e < 0 && Xt && s && (Xt.hasOnce = !0);
}
function Ir(e) {
  return e.dynamicChildren = vn > 0 ? Xt || Eo : null, Yc(), vn > 0 && Xt && Xt.push(e), e;
}
function i(e, s, o, a, l, r) {
  return Ir(
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
function U(e, s, o, a, l) {
  return Ir(
    k(
      e,
      s,
      o,
      a,
      l,
      !0
    )
  );
}
function pn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function lo(e, s) {
  return e.type === s.type && e.key === s.key;
}
const Er = ({ key: e }) => e ?? null, Vn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? It(e) || Ft(e) || Ze(e) ? { i: Ut, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, a = 0, l = null, r = e === H ? 0 : 1, u = !1, c = !1) {
  const m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && Er(s),
    ref: s && Vn(s),
    scopeId: Ji,
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
  return c ? (hl(m, o), r & 128 && e.normalize(m)) : o && (m.shapeFlag |= It(o) ? 8 : 16), vn > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  Xt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && Xt.push(m), m;
}
const k = Jc;
function Jc(e, s = null, o = null, a = 0, l = null, r = !1) {
  if ((!e || e === ur) && (e = zt), pn(e)) {
    const c = qs(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && hl(c, o), vn > 0 && !r && Xt && (c.shapeFlag & 6 ? Xt[Xt.indexOf(e)] = c : Xt.push(c)), c.patchFlag = -2, c;
  }
  if (id(e) && (e = e.__vccOpts), s) {
    s = Qc(s);
    let { class: c, style: m } = s;
    c && !It(c) && (s.class = Re(c)), ht(m) && (cl(m) && !Ye(m) && (m = Rt({}, m)), s.style = es(m));
  }
  const u = It(e) ? 1 : Sr(e) ? 128 : Xi(e) ? 64 : ht(e) ? 4 : Ze(e) ? 2 : 0;
  return t(
    e,
    s,
    o,
    a,
    l,
    u,
    r,
    !0
  );
}
function Qc(e) {
  return e ? cl(e) || wr(e) ? Rt({}, e) : e : null;
}
function qs(e, s, o = !1, a = !1) {
  const { props: l, ref: r, patchFlag: u, children: c, transition: m } = e, f = s ? Xc(l || {}, s) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Er(f),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Ye(r) ? r.concat(Vn(s)) : [r, Vn(s)] : Vn(s)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: s && e.type !== H ? u === -1 ? 16 : u | 16 : u,
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
    ssContent: e.ssContent && qs(e.ssContent),
    ssFallback: e.ssFallback && qs(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return m && a && mo(
    v,
    m.clone(v)
  ), v;
}
function C(e = " ", s = 0) {
  return k(fa, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (n(), U(zt, null, e)) : k(zt, null, e);
}
function Cs(e) {
  return e == null || typeof e == "boolean" ? k(zt) : Ye(e) ? k(
    H,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : pn(e) ? Hs(e) : k(fa, null, String(e));
}
function Hs(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : qs(e);
}
function hl(e, s) {
  let o = 0;
  const { shapeFlag: a } = e;
  if (s == null)
    s = null;
  else if (Ye(s))
    o = 16;
  else if (typeof s == "object")
    if (a & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), hl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !wr(s) ? s._ctx = Ut : l === 3 && Ut && (Ut.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else Ze(s) ? (s = { default: s, _ctx: Ut }, o = 32) : (s = String(s), a & 64 ? (o = 16, s = [C(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function Xc(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        s.class !== a.class && (s.class = Re([s.class, a.class]));
      else if (l === "style")
        s.style = es([s.style, a.style]);
      else if (sa(l)) {
        const r = s[l], u = a[l];
        u && r !== u && !(Ye(r) && r.includes(u)) && (s[l] = r ? [].concat(r, u) : u);
      } else l !== "" && (s[l] = a[l]);
  }
  return s;
}
function ws(e, s, o, a = null) {
  ps(e, s, 7, [
    o,
    a
  ]);
}
const Zc = fr();
let ed = 0;
function td(e, s, o) {
  const a = e.type, l = (s ? s.appContext : e.appContext) || Zc, r = {
    uid: ed++,
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
    scope: new Iu(
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
    propsOptions: kr(a, l),
    emitsOptions: gr(a, l),
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
  return r.ctx = { _: r }, r.root = s ? s.root : r, r.emit = Rc.bind(null, r), e.ce && e.ce(r), r;
}
let Vt = null;
const yl = () => Vt || Ut;
let Qn, Ha;
{
  const e = la(), s = (o, a) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((u) => u(r)) : l[0](r);
    };
  };
  Qn = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Vt = o
  ), Ha = s(
    "__VUE_SSR_SETTERS__",
    (o) => gn = o
  );
}
const bn = (e) => {
  const s = Vt;
  return Qn(e), e.scope.on(), () => {
    e.scope.off(), Qn(s);
  };
}, Gl = () => {
  Vt && Vt.scope.off(), Qn(null);
};
function Tr(e) {
  return e.vnode.shapeFlag & 4;
}
let gn = !1;
function sd(e, s = !1, o = !1) {
  s && Ha(s);
  const { props: a, children: l } = e.vnode, r = Tr(e);
  Ac(e, a, r, s), Bc(e, l, o || s);
  const u = r ? od(e, s) : void 0;
  return s && Ha(!1), u;
}
function od(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, wc);
  const { setup: a } = o;
  if (a) {
    Us();
    const l = e.setupContext = a.length > 1 ? ad(e) : null, r = bn(e), u = kn(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), c = Ci(u);
    if (Ns(), r(), (c || e.sp) && !Mo(e) && lr(e), c) {
      if (u.then(Gl, Gl), s)
        return u.then((m) => {
          jl(e, m);
        }).catch((m) => {
          ra(m, e, 0);
        });
      e.asyncDep = u;
    } else
      jl(e, u);
  } else
    Pr(e);
}
function jl(e, s, o) {
  Ze(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : ht(s) && (e.setupState = ji(s)), Pr(e);
}
function Pr(e, s, o) {
  const a = e.type;
  e.render || (e.render = a.render || xs);
  {
    const l = bn(e);
    Us();
    try {
      _c(e);
    } finally {
      Ns(), l();
    }
  }
}
const nd = {
  get(e, s) {
    return At(e, "get", ""), e[s];
  }
};
function ad(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, nd),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function va(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ji(qu(e.exposed)), {
    get(s, o) {
      if (o in s)
        return s[o];
      if (o in on)
        return on[o](e);
    },
    has(s, o) {
      return o in s || o in on;
    }
  })) : e.proxy;
}
function ld(e, s = !0) {
  return Ze(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function id(e) {
  return Ze(e) && "__vccOpts" in e;
}
const z = (e, s) => Zu(e, s, gn);
function Ao(e, s, o) {
  try {
    Jn(-1);
    const a = arguments.length;
    return a === 2 ? ht(s) && !Ye(s) ? pn(s) ? k(e, null, [s]) : k(e, s) : k(e, null, s) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && pn(o) && (o = [o]), k(e, s, o));
  } finally {
    Jn(1);
  }
}
const rd = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ka;
const Hl = typeof window < "u" && window.trustedTypes;
if (Hl)
  try {
    Ka = /* @__PURE__ */ Hl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Mr = Ka ? (e) => Ka.createHTML(e) : (e) => e, ud = "http://www.w3.org/2000/svg", cd = "http://www.w3.org/1998/Math/MathML", Es = typeof document < "u" ? document : null, Kl = Es && /* @__PURE__ */ Es.createElement("template"), dd = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, a) => {
    const l = s === "svg" ? Es.createElementNS(ud, e) : s === "mathml" ? Es.createElementNS(cd, e) : o ? Es.createElement(e, { is: o }) : Es.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => Es.createTextNode(e),
  createComment: (e) => Es.createComment(e),
  setText: (e, s) => {
    e.nodeValue = s;
  },
  setElementText: (e, s) => {
    e.textContent = s;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Es.querySelector(e),
  setScopeId(e, s) {
    e.setAttribute(s, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, s, o, a, l, r) {
    const u = o ? o.previousSibling : s.lastChild;
    if (l && (l === r || l.nextSibling))
      for (; s.insertBefore(l.cloneNode(!0), o), !(l === r || !(l = l.nextSibling)); )
        ;
    else {
      Kl.innerHTML = Mr(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const c = Kl.content;
      if (a === "svg" || a === "mathml") {
        const m = c.firstChild;
        for (; m.firstChild; )
          c.appendChild(m.firstChild);
        c.removeChild(m);
      }
      s.insertBefore(c, o);
    }
    return [
      // first
      u ? u.nextSibling : s.firstChild,
      // last
      o ? o.previousSibling : s.lastChild
    ];
  }
}, Bs = "transition", Bo = "animation", Uo = Symbol("_vtc"), Rr = {
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
}, Dr = /* @__PURE__ */ Rt(
  {},
  sr,
  Rr
), md = (e) => (e.displayName = "Transition", e.props = Dr, e), fd = /* @__PURE__ */ md(
  (e, { slots: s }) => Ao(ic, Lr(e), s)
), oo = (e, s = []) => {
  Ye(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, ql = (e) => e ? Ye(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function Lr(e) {
  const s = {};
  for (const K in e)
    K in Rr || (s[K] = e[K]);
  if (e.css === !1)
    return s;
  const {
    name: o = "v",
    type: a,
    duration: l,
    enterFromClass: r = `${o}-enter-from`,
    enterActiveClass: u = `${o}-enter-active`,
    enterToClass: c = `${o}-enter-to`,
    appearFromClass: m = r,
    appearActiveClass: f = u,
    appearToClass: v = c,
    leaveFromClass: g = `${o}-leave-from`,
    leaveActiveClass: _ = `${o}-leave-active`,
    leaveToClass: h = `${o}-leave-to`
  } = e, w = vd(l), x = w && w[0], b = w && w[1], {
    onBeforeEnter: S,
    onEnter: F,
    onEnterCancelled: E,
    onLeave: P,
    onLeaveCancelled: D,
    onBeforeAppear: V = S,
    onAppear: G = F,
    onAppearCancelled: I = E
  } = s, O = (K, j, B, q) => {
    K._enterCancelled = q, Ws(K, j ? v : c), Ws(K, j ? f : u), B && B();
  }, le = (K, j) => {
    K._isLeaving = !1, Ws(K, g), Ws(K, h), Ws(K, _), j && j();
  }, ne = (K) => (j, B) => {
    const q = K ? G : F, X = () => O(j, K, B);
    oo(q, [j, X]), Yl(() => {
      Ws(j, K ? m : r), ks(j, K ? v : c), ql(q) || Jl(j, a, x, X);
    });
  };
  return Rt(s, {
    onBeforeEnter(K) {
      oo(S, [K]), ks(K, r), ks(K, u);
    },
    onBeforeAppear(K) {
      oo(V, [K]), ks(K, m), ks(K, f);
    },
    onEnter: ne(!1),
    onAppear: ne(!0),
    onLeave(K, j) {
      K._isLeaving = !0;
      const B = () => le(K, j);
      ks(K, g), K._enterCancelled ? (ks(K, _), qa(K)) : (qa(K), ks(K, _)), Yl(() => {
        K._isLeaving && (Ws(K, g), ks(K, h), ql(P) || Jl(K, a, b, B));
      }), oo(P, [K, B]);
    },
    onEnterCancelled(K) {
      O(K, !1, void 0, !0), oo(E, [K]);
    },
    onAppearCancelled(K) {
      O(K, !0, void 0, !0), oo(I, [K]);
    },
    onLeaveCancelled(K) {
      le(K), oo(D, [K]);
    }
  });
}
function vd(e) {
  if (e == null)
    return null;
  if (ht(e))
    return [Pa(e.enter), Pa(e.leave)];
  {
    const s = Pa(e);
    return [s, s];
  }
}
function Pa(e) {
  return wu(e);
}
function ks(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Uo] || (e[Uo] = /* @__PURE__ */ new Set())).add(s);
}
function Ws(e, s) {
  s.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const o = e[Uo];
  o && (o.delete(s), o.size || (e[Uo] = void 0));
}
function Yl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let pd = 0;
function Jl(e, s, o, a) {
  const l = e._endId = ++pd, r = () => {
    l === e._endId && a();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: u, timeout: c, propCount: m } = Ur(e, s);
  if (!u)
    return a();
  const f = u + "end";
  let v = 0;
  const g = () => {
    e.removeEventListener(f, _), r();
  }, _ = (h) => {
    h.target === e && ++v >= m && g();
  };
  setTimeout(() => {
    v < m && g();
  }, c + 1), e.addEventListener(f, _);
}
function Ur(e, s) {
  const o = window.getComputedStyle(e), a = (w) => (o[w] || "").split(", "), l = a(`${Bs}Delay`), r = a(`${Bs}Duration`), u = Ql(l, r), c = a(`${Bo}Delay`), m = a(`${Bo}Duration`), f = Ql(c, m);
  let v = null, g = 0, _ = 0;
  s === Bs ? u > 0 && (v = Bs, g = u, _ = r.length) : s === Bo ? f > 0 && (v = Bo, g = f, _ = m.length) : (g = Math.max(u, f), v = g > 0 ? u > f ? Bs : Bo : null, _ = v ? v === Bs ? r.length : m.length : 0);
  const h = v === Bs && /\b(?:transform|all)(?:,|$)/.test(
    a(`${Bs}Property`).toString()
  );
  return {
    type: v,
    timeout: g,
    propCount: _,
    hasTransform: h
  };
}
function Ql(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, a) => Xl(o) + Xl(e[a])));
}
function Xl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function qa(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function gd(e, s, o) {
  const a = e[Uo];
  a && (s = (s ? [s, ...a] : [...a]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Zl = Symbol("_vod"), hd = Symbol("_vsh"), yd = Symbol(""), wd = /(?:^|;)\s*display\s*:/;
function _d(e, s, o) {
  const a = e.style, l = It(o);
  let r = !1;
  if (o && !l) {
    if (s)
      if (It(s))
        for (const u of s.split(";")) {
          const c = u.slice(0, u.indexOf(":")).trim();
          o[c] == null && Fn(a, c, "");
        }
      else
        for (const u in s)
          o[u] == null && Fn(a, u, "");
    for (const u in o)
      u === "display" && (r = !0), Fn(a, u, o[u]);
  } else if (l) {
    if (s !== o) {
      const u = a[yd];
      u && (o += ";" + u), a.cssText = o, r = wd.test(o);
    }
  } else s && e.removeAttribute("style");
  Zl in e && (e[Zl] = r ? a.display : "", e[hd] && (a.display = "none"));
}
const ei = /\s*!important$/;
function Fn(e, s, o) {
  if (Ye(o))
    o.forEach((a) => Fn(e, s, a));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const a = kd(e, s);
    ei.test(o) ? e.setProperty(
      Js(a),
      o.replace(ei, ""),
      "important"
    ) : e[a] = o;
  }
}
const ti = ["Webkit", "Moz", "ms"], Ma = {};
function kd(e, s) {
  const o = Ma[s];
  if (o)
    return o;
  let a = ls(s);
  if (a !== "filter" && a in e)
    return Ma[s] = a;
  a = na(a);
  for (let l = 0; l < ti.length; l++) {
    const r = ti[l] + a;
    if (r in e)
      return Ma[s] = r;
  }
  return s;
}
const si = "http://www.w3.org/1999/xlink";
function oi(e, s, o, a, l, r = xu(s)) {
  a && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(si, s.slice(6, s.length)) : e.setAttributeNS(si, s, o) : o == null || r && !Ei(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    r ? "" : fs(o) ? String(o) : o
  );
}
function ni(e, s, o, a, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? Mr(o) : o);
    return;
  }
  const r = e.tagName;
  if (s === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const c = r === "OPTION" ? e.getAttribute("value") || "" : e.value, m = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (c !== m || !("_value" in e)) && (e.value = m), o == null && e.removeAttribute(s), e._value = o;
    return;
  }
  let u = !1;
  if (o === "" || o == null) {
    const c = typeof e[s];
    c === "boolean" ? o = Ei(o) : o == null && c === "string" ? (o = "", u = !0) : c === "number" && (o = 0, u = !0);
  }
  try {
    e[s] = o;
  } catch {
  }
  u && e.removeAttribute(l || s);
}
function Ds(e, s, o, a) {
  e.addEventListener(s, o, a);
}
function bd(e, s, o, a) {
  e.removeEventListener(s, o, a);
}
const ai = Symbol("_vei");
function $d(e, s, o, a, l = null) {
  const r = e[ai] || (e[ai] = {}), u = r[s];
  if (a && u)
    u.value = a;
  else {
    const [c, m] = Cd(s);
    if (a) {
      const f = r[s] = Id(
        a,
        l
      );
      Ds(e, c, f, m);
    } else u && (bd(e, c, u, m), r[s] = void 0);
  }
}
const li = /(?:Once|Passive|Capture)$/;
function Cd(e) {
  let s;
  if (li.test(e)) {
    s = {};
    let a;
    for (; a = e.match(li); )
      e = e.slice(0, e.length - a[0].length), s[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Js(e.slice(2)), s];
}
let Ra = 0;
const xd = /* @__PURE__ */ Promise.resolve(), Sd = () => Ra || (xd.then(() => Ra = 0), Ra = Date.now());
function Id(e, s) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    ps(
      Ed(a, o.value),
      s,
      5,
      [a]
    );
  };
  return o.value = e, o.attached = Sd(), o;
}
function Ed(e, s) {
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
const ii = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Td = (e, s, o, a, l, r) => {
  const u = l === "svg";
  s === "class" ? gd(e, a, u) : s === "style" ? _d(e, o, a) : sa(s) ? el(s) || $d(e, s, o, a, r) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : Pd(e, s, a, u)) ? (ni(e, s, a), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && oi(e, s, a, u, r, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !It(a)) ? ni(e, ls(s), a, r, s) : (s === "true-value" ? e._trueValue = a : s === "false-value" && (e._falseValue = a), oi(e, s, a, u));
};
function Pd(e, s, o, a) {
  if (a)
    return !!(s === "innerHTML" || s === "textContent" || s in e && ii(s) && Ze(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return ii(s) && It(o) ? !1 : s in e;
}
const Nr = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ new WeakMap(), Xn = Symbol("_moveCb"), ri = Symbol("_enterCb"), Md = (e) => (delete e.props.mode, e), Rd = /* @__PURE__ */ Md({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Rt({}, Dr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = yl(), a = tr();
    let l, r;
    return rr(() => {
      if (!l.length)
        return;
      const u = e.moveClass || `${e.name || "v"}-move`;
      if (!Od(
        l[0].el,
        o.vnode.el,
        u
      )) {
        l = [];
        return;
      }
      l.forEach(Ld), l.forEach(Ud);
      const c = l.filter(Nd);
      qa(o.vnode.el), c.forEach((m) => {
        const f = m.el, v = f.style;
        ks(f, u), v.transform = v.webkitTransform = v.transitionDuration = "";
        const g = f[Xn] = (_) => {
          _ && _.target !== f || (!_ || _.propertyName.endsWith("transform")) && (f.removeEventListener("transitionend", g), f[Xn] = null, Ws(f, u));
        };
        f.addEventListener("transitionend", g);
      }), l = [];
    }), () => {
      const u = ct(e), c = Lr(u);
      let m = u.tag || H;
      if (l = [], r)
        for (let f = 0; f < r.length; f++) {
          const v = r[f];
          v.el && v.el instanceof Element && (l.push(v), mo(
            v,
            fn(
              v,
              c,
              a,
              o
            )
          ), Nr.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      r = s.default ? ml(s.default()) : [];
      for (let f = 0; f < r.length; f++) {
        const v = r[f];
        v.key != null && mo(
          v,
          fn(v, c, a, o)
        );
      }
      return k(m, null, r);
    };
  }
}), Dd = Rd;
function Ld(e) {
  const s = e.el;
  s[Xn] && s[Xn](), s[ri] && s[ri]();
}
function Ud(e) {
  Or.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function Nd(e) {
  const s = Nr.get(e), o = Or.get(e), a = s.left - o.left, l = s.top - o.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function Od(e, s, o) {
  const a = e.cloneNode(), l = e[Uo];
  l && l.forEach((c) => {
    c.split(/\s+/).forEach((m) => m && a.classList.remove(m));
  }), o.split(/\s+/).forEach((c) => c && a.classList.add(c)), a.style.display = "none";
  const r = s.nodeType === 1 ? s : s.parentNode;
  r.appendChild(a);
  const { hasTransform: u } = Ur(a);
  return r.removeChild(a), u;
}
const Ys = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Ye(s) ? (o) => On(s, o) : s;
};
function Ad(e) {
  e.target.composing = !0;
}
function ui(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const ns = Symbol("_assign");
function ci(e, s, o) {
  return s && (e = e.trim()), o && (e = aa(e)), e;
}
const Zt = {
  created(e, { modifiers: { lazy: s, trim: o, number: a } }, l) {
    e[ns] = Ys(l);
    const r = a || l.props && l.props.type === "number";
    Ds(e, s ? "change" : "input", (u) => {
      u.target.composing || e[ns](ci(e.value, o, r));
    }), (o || r) && Ds(e, "change", () => {
      e.value = ci(e.value, o, r);
    }), s || (Ds(e, "compositionstart", Ad), Ds(e, "compositionend", ui), Ds(e, "change", ui));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: a, trim: l, number: r } }, u) {
    if (e[ns] = Ys(u), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? aa(e.value) : e.value, m = s ?? "";
    c !== m && (document.activeElement === e && e.type !== "range" && (a && s === o || l && e.value.trim() === m) || (e.value = m));
  }
}, hn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[ns] = Ys(o), Ds(e, "change", () => {
      const a = e._modelValue, l = No(e), r = e.checked, u = e[ns];
      if (Ye(a)) {
        const c = ol(a, l), m = c !== -1;
        if (r && !m)
          u(a.concat(l));
        else if (!r && m) {
          const f = [...a];
          f.splice(c, 1), u(f);
        }
      } else if (Oo(a)) {
        const c = new Set(a);
        r ? c.add(l) : c.delete(l), u(c);
      } else
        u(Ar(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: di,
  beforeUpdate(e, s, o) {
    e[ns] = Ys(o), di(e, s, o);
  }
};
function di(e, { value: s, oldValue: o }, a) {
  e._modelValue = s;
  let l;
  if (Ye(s))
    l = ol(s, a.props.value) > -1;
  else if (Oo(s))
    l = s.has(a.props.value);
  else {
    if (s === o) return;
    l = co(s, Ar(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const ds = {
  created(e, { value: s }, o) {
    e.checked = co(s, o.props.value), e[ns] = Ys(o), Ds(e, "change", () => {
      e[ns](No(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, a) {
    e[ns] = Ys(a), s !== o && (e.checked = co(s, a.props.value));
  }
}, Ss = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, a) {
    const l = Oo(s);
    Ds(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => o ? aa(No(u)) : No(u)
      );
      e[ns](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Mt(() => {
        e._assigning = !1;
      });
    }), e[ns] = Ys(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    mi(e, s);
  },
  beforeUpdate(e, s, o) {
    e[ns] = Ys(o);
  },
  updated(e, { value: s }) {
    e._assigning || mi(e, s);
  }
};
function mi(e, s) {
  const o = e.multiple, a = Ye(s);
  if (!(o && !a && !Oo(s))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const u = e.options[l], c = No(u);
      if (o)
        if (a) {
          const m = typeof c;
          m === "string" || m === "number" ? u.selected = s.some((f) => String(f) === String(c)) : u.selected = ol(s, c) > -1;
        } else
          u.selected = s.has(c);
      else if (co(No(u), s)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function No(e) {
  return "_value" in e ? e._value : e.value;
}
function Ar(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
}
const pa = {
  created(e, s, o) {
    Mn(e, s, o, null, "created");
  },
  mounted(e, s, o) {
    Mn(e, s, o, null, "mounted");
  },
  beforeUpdate(e, s, o, a) {
    Mn(e, s, o, a, "beforeUpdate");
  },
  updated(e, s, o, a) {
    Mn(e, s, o, a, "updated");
  }
};
function zd(e, s) {
  switch (e) {
    case "SELECT":
      return Ss;
    case "TEXTAREA":
      return Zt;
    default:
      switch (s) {
        case "checkbox":
          return hn;
        case "radio":
          return ds;
        default:
          return Zt;
      }
  }
}
function Mn(e, s, o, a, l) {
  const u = zd(
    e.tagName,
    o.props && o.props.type
  )[l];
  u && u(e, s, o, a);
}
const Vd = ["ctrl", "shift", "alt", "meta"], Fd = {
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
  exact: (e, s) => Vd.some((o) => e[`${o}Key`] && !s.includes(o))
}, gt = (e, s) => {
  const o = e._withMods || (e._withMods = {}), a = s.join(".");
  return o[a] || (o[a] = ((l, ...r) => {
    for (let u = 0; u < s.length; u++) {
      const c = Fd[s[u]];
      if (c && c(l, s)) return;
    }
    return e(l, ...r);
  }));
}, Bd = {
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
    const r = Js(l.key);
    if (s.some(
      (u) => u === r || Bd[u] === r
    ))
      return e(l);
  }));
}, Wd = /* @__PURE__ */ Rt({ patchProp: Td }, dd);
let fi;
function Gd() {
  return fi || (fi = Gc(Wd));
}
const $n = ((...e) => {
  const s = Gd().createApp(...e), { mount: o } = s;
  return s.mount = (a) => {
    const l = Hd(a);
    if (!l) return;
    const r = s._component;
    !Ze(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const u = o(l, !1, jd(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), u;
  }, s;
});
function jd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Hd(e) {
  return It(e) ? document.querySelector(e) : e;
}
const Kd = { class: "panel-layout" }, qd = {
  key: 0,
  class: "panel-layout-header"
}, Yd = {
  key: 1,
  class: "panel-layout-search"
}, Jd = { class: "panel-layout-content" }, Qd = {
  key: 2,
  class: "panel-layout-footer"
}, Xd = /* @__PURE__ */ we({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (n(), i("div", Kd, [
      s.$slots.header ? (n(), i("div", qd, [
        nt(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (n(), i("div", Yd, [
        nt(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", Jd, [
        nt(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (n(), i("div", Qd, [
        nt(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), ke = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of s)
    o[a] = l;
  return o;
}, Ht = /* @__PURE__ */ ke(Xd, [["__scopeId", "data-v-21565df9"]]), Zd = {
  key: 0,
  class: "panel-title-prefix"
}, em = {
  key: 1,
  class: "panel-title-prefix-theme"
}, tm = /* @__PURE__ */ we({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (n(), U(fl(`h${e.level}`), {
      class: Re(["panel-title", e.variant])
    }, {
      default: p(() => [
        e.showPrefix ? (n(), i("span", Zd, d(e.prefix), 1)) : (n(), i("span", em)),
        nt(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), sm = /* @__PURE__ */ ke(tm, [["__scopeId", "data-v-c3875efc"]]), om = ["title"], nm = ["width", "height"], am = /* @__PURE__ */ we({
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
      ])], 8, nm))
    ], 8, om));
  }
}), zr = /* @__PURE__ */ ke(am, [["__scopeId", "data-v-6fc7f16d"]]), lm = { class: "header-left" }, im = {
  key: 0,
  class: "header-actions"
}, rm = /* @__PURE__ */ we({
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
      class: Re(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", lm, [
        k(sm, { "show-prefix": e.showPrefix }, {
          default: p(() => [
            C(d(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), U(zr, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (n(), i("div", im, [
        nt(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Kt = /* @__PURE__ */ ke(rm, [["__scopeId", "data-v-55a62cd6"]]), um = {
  key: 0,
  class: "section-title-count"
}, cm = {
  key: 1,
  class: "section-title-icon"
}, dm = /* @__PURE__ */ we({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (n(), U(fl(`h${e.level}`), {
      class: Re(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, {
      default: p(() => [
        nt(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", um, "(" + d(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (n(), i("span", cm, d(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Qt = /* @__PURE__ */ ke(dm, [["__scopeId", "data-v-559361eb"]]), mm = { class: "status-grid" }, fm = { class: "status-grid__columns" }, vm = { class: "status-grid__column" }, pm = { class: "status-grid__title" }, gm = { class: "status-grid__column status-grid__column--right" }, hm = { class: "status-grid__title" }, ym = {
  key: 0,
  class: "status-grid__footer"
}, wm = /* @__PURE__ */ we({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", mm, [
      t("div", fm, [
        t("div", vm, [
          t("h4", pm, d(e.leftTitle), 1),
          nt(s.$slots, "left", {}, void 0)
        ]),
        t("div", gm, [
          t("h4", hm, d(e.rightTitle), 1),
          nt(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (n(), i("div", ym, [
        nt(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), _m = /* @__PURE__ */ ke(wm, [["__scopeId", "data-v-73b7ba3f"]]), km = {
  key: 0,
  class: "status-item__icon"
}, bm = {
  key: 1,
  class: "status-item__count"
}, $m = { class: "status-item__label" }, Cm = /* @__PURE__ */ we({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, o = z(() => `status-item--${s.variant}`);
    return (a, l) => (n(), i("div", {
      class: Re(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (n(), i("span", km, d(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (n(), i("span", bm, d(e.count), 1)) : y("", !0),
      t("span", $m, d(e.label), 1)
    ], 2));
  }
}), _s = /* @__PURE__ */ ke(Cm, [["__scopeId", "data-v-6f929183"]]), xm = { class: "issue-card__header" }, Sm = { class: "issue-card__icon" }, Im = { class: "issue-card__title" }, Em = {
  key: 0,
  class: "issue-card__content"
}, Tm = {
  key: 0,
  class: "issue-card__description"
}, Pm = {
  key: 1,
  class: "issue-card__items"
}, Mm = {
  key: 2,
  class: "issue-card__actions"
}, Rm = /* @__PURE__ */ we({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const s = e, o = z(() => `issue-card--${s.severity}`);
    return (a, l) => (n(), i("div", {
      class: Re(["issue-card", o.value])
    }, [
      t("div", xm, [
        t("span", Sm, d(e.icon), 1),
        t("h4", Im, d(e.title), 1)
      ]),
      a.$slots.default || e.description ? (n(), i("div", Em, [
        e.description ? (n(), i("p", Tm, d(e.description), 1)) : y("", !0),
        nt(a.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (n(), i("div", Pm, [
        (n(!0), i(H, null, pe(e.items, (r, u) => (n(), i("div", {
          key: u,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, d(r), 1)
        ]))), 128))
      ])) : y("", !0),
      a.$slots.actions ? (n(), i("div", Mm, [
        nt(a.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), cs = /* @__PURE__ */ ke(Rm, [["__scopeId", "data-v-df6aa348"]]), Dm = ["type", "disabled"], Lm = {
  key: 0,
  class: "spinner"
}, Um = /* @__PURE__ */ we({
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
      class: Re(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", Lm)) : y("", !0),
      e.loading ? y("", !0) : nt(s.$slots, "default", { key: 1 }, void 0)
    ], 10, Dm));
  }
}), ve = /* @__PURE__ */ ke(Um, [["__scopeId", "data-v-772abe47"]]), Nm = { class: "empty-state" }, Om = {
  key: 0,
  class: "empty-icon"
}, Am = { class: "empty-message" }, zm = /* @__PURE__ */ we({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (n(), i("div", Nm, [
      e.icon ? (n(), i("div", Om, d(e.icon), 1)) : y("", !0),
      t("p", Am, d(e.message), 1),
      e.actionLabel ? (n(), U(ve, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => s.$emit("action"))
      }, {
        default: p(() => [
          C(d(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), gs = /* @__PURE__ */ ke(zm, [["__scopeId", "data-v-4466284f"]]), Vm = /* @__PURE__ */ we({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Re(["detail-label"]),
      style: es({ minWidth: e.minWidth })
    }, [
      nt(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), Bn = /* @__PURE__ */ ke(Vm, [["__scopeId", "data-v-75e9eeb8"]]), Fm = /* @__PURE__ */ we({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Re(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      nt(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Ya = /* @__PURE__ */ ke(Fm, [["__scopeId", "data-v-2f186e4c"]]), Bm = { class: "detail-row" }, Wm = /* @__PURE__ */ we({
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
    return (s, o) => (n(), i("div", Bm, [
      k(Bn, { "min-width": e.labelMinWidth }, {
        default: p(() => [
          C(d(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (n(), U(Ya, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: p(() => [
          C(d(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : nt(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), $t = /* @__PURE__ */ ke(Wm, [["__scopeId", "data-v-ef15664a"]]), Gm = { class: "modal-header" }, jm = { class: "modal-body" }, Hm = { class: "status-section" }, Km = {
  key: 0,
  class: "status-section"
}, qm = { class: "section-header-row" }, Ym = {
  key: 0,
  class: "workflow-group"
}, Jm = { class: "workflow-group-header" }, Qm = { class: "workflow-group-title" }, Xm = { class: "workflow-list" }, Zm = { class: "workflow-name" }, ef = { class: "workflow-issue" }, tf = {
  key: 1,
  class: "workflow-group"
}, sf = { class: "workflow-group-header" }, of = { class: "workflow-group-title" }, nf = { class: "workflow-list" }, af = { class: "workflow-name" }, lf = { class: "workflow-issue" }, rf = {
  key: 2,
  class: "workflow-group"
}, uf = { class: "workflow-group-header" }, cf = { class: "workflow-group-title" }, df = { class: "workflow-list" }, mf = { class: "workflow-name" }, ff = {
  key: 3,
  class: "workflow-group"
}, vf = { class: "workflow-group-header" }, pf = { class: "workflow-group-title" }, gf = { class: "workflow-list" }, hf = { class: "workflow-name" }, yf = {
  key: 4,
  class: "workflow-group"
}, wf = { class: "workflow-group-header" }, _f = { class: "workflow-group-title" }, kf = { class: "workflow-list" }, bf = { class: "workflow-name" }, $f = {
  key: 5,
  class: "workflow-group"
}, Cf = { class: "workflow-group-title" }, xf = { class: "expand-icon" }, Sf = {
  key: 0,
  class: "workflow-list"
}, If = { class: "workflow-name" }, Ef = {
  key: 1,
  class: "status-section"
}, Tf = {
  key: 0,
  class: "change-group"
}, Pf = { class: "change-group-header" }, Mf = { class: "change-group-title" }, Rf = { class: "change-list" }, Df = { class: "node-name" }, Lf = {
  key: 0,
  class: "dev-badge"
}, Uf = {
  key: 1,
  class: "change-group"
}, Nf = { class: "change-group-header" }, Of = { class: "change-group-title" }, Af = { class: "change-list" }, zf = { class: "node-name" }, Vf = {
  key: 0,
  class: "dev-badge"
}, Ff = {
  key: 2,
  class: "change-group"
}, Bf = { class: "change-list" }, Wf = { class: "change-item" }, Gf = { class: "node-name" }, jf = {
  key: 3,
  class: "change-group"
}, Hf = {
  key: 2,
  class: "status-section"
}, Kf = { class: "section-header-row" }, qf = {
  key: 0,
  class: "drift-item"
}, Yf = { class: "drift-list" }, Jf = {
  key: 0,
  class: "drift-list-more"
}, Qf = {
  key: 1,
  class: "drift-item"
}, Xf = { class: "drift-list" }, Zf = {
  key: 0,
  class: "drift-list-more"
}, ev = {
  key: 2,
  class: "drift-item"
}, tv = { class: "drift-list" }, sv = { class: "version-actual" }, ov = { class: "version-expected" }, nv = {
  key: 0,
  class: "drift-list-more"
}, av = {
  key: 3,
  class: "drift-item"
}, lv = { class: "repair-action" }, iv = {
  key: 3,
  class: "status-section"
}, rv = { class: "info-box" }, uv = { class: "drift-list" }, cv = {
  key: 0,
  class: "drift-list-more"
}, dv = {
  key: 4,
  class: "status-section"
}, mv = { class: "warning-box" }, fv = {
  key: 5,
  class: "empty-state-inline"
}, vv = { class: "modal-actions" }, pv = /* @__PURE__ */ we({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = $(!1);
    lt(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), St(() => s.show, (_, h) => {
      console.log("StatusDetailModal show prop changed from", h, "to", _);
    }, { immediate: !0 });
    const a = z(() => {
      var _, h, w;
      return ((w = (h = (_ = s.status) == null ? void 0 : _.workflows) == null ? void 0 : h.analyzed) == null ? void 0 : w.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), l = z(() => {
      var _, h, w;
      return ((w = (h = (_ = s.status) == null ? void 0 : _.workflows) == null ? void 0 : h.analyzed) == null ? void 0 : w.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), r = z(() => {
      var _, h, w;
      return ((w = (h = (_ = s.status) == null ? void 0 : _.workflows) == null ? void 0 : h.synced) == null ? void 0 : w.filter((x) => {
        var S, F, E;
        const b = (E = (F = (S = s.status) == null ? void 0 : S.workflows) == null ? void 0 : F.analyzed) == null ? void 0 : E.find((P) => P.name === x);
        return !b || b.status !== "broken";
      })) || [];
    }), u = z(() => {
      var _, h, w, x, b;
      return (_ = s.status) != null && _.workflows ? (((h = s.status.workflows.new) == null ? void 0 : h.length) ?? 0) > 0 || (((w = s.status.workflows.modified) == null ? void 0 : w.length) ?? 0) > 0 || (((x = s.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || (((b = s.status.workflows.synced) == null ? void 0 : b.length) ?? 0) > 0 : !1;
    }), c = z(() => {
      var h, w, x;
      const _ = (h = s.status) == null ? void 0 : h.git_changes;
      return _ ? (((w = _.nodes_added) == null ? void 0 : w.length) ?? 0) > 0 || (((x = _.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), m = z(() => {
      var _, h, w, x, b, S;
      return !u.value && !c.value && ((h = (_ = s.status) == null ? void 0 : _.comparison) == null ? void 0 : h.is_synced) && (((w = s.status) == null ? void 0 : w.missing_models_count) ?? 0) === 0 && (((S = (b = (x = s.status) == null ? void 0 : x.comparison) == null ? void 0 : b.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
    }), f = z(() => {
      var h, w;
      const _ = (w = (h = s.status) == null ? void 0 : h.git_changes) == null ? void 0 : w.workflow_changes;
      return _ ? typeof _ == "number" ? _ : Object.keys(_).length : 0;
    });
    function v(_) {
      return typeof _ == "string" ? _ : _.name;
    }
    function g(_) {
      return typeof _ == "object" && _.is_development === !0;
    }
    return (_, h) => {
      var w, x, b, S, F, E, P, D, V, G, I, O, le, ne, K, j, B, q, X, Le, ae, de;
      return n(), U(Nt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: h[7] || (h[7] = (ie) => _.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: h[6] || (h[6] = gt(() => {
            }, ["stop"]))
          }, [
            t("div", Gm, [
              h[8] || (h[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: h[0] || (h[0] = (ie) => _.$emit("close"))
              }, "✕")
            ]),
            t("div", jm, [
              t("div", Hm, [
                k(Qt, { level: "4" }, {
                  default: p(() => [...h[9] || (h[9] = [
                    C("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                k($t, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (n(), i("div", Km, [
                t("div", qm, [
                  k(Qt, { level: "4" }, {
                    default: p(() => [...h[10] || (h[10] = [
                      C("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: h[1] || (h[1] = (ie) => _.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", Ym, [
                  t("div", Jm, [
                    h[11] || (h[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Qm, "BROKEN (COMMITTED) (" + d(a.value.length) + ")", 1)
                  ]),
                  t("div", Xm, [
                    (n(!0), i(H, null, pe(a.value, (ie) => (n(), i("div", {
                      key: ie.name,
                      class: "workflow-item"
                    }, [
                      t("span", Zm, d(ie.name), 1),
                      t("span", ef, d(ie.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (n(), i("div", tf, [
                  t("div", sf, [
                    h[12] || (h[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", of, "BROKEN (UNCOMMITTED) (" + d(l.value.length) + ")", 1)
                  ]),
                  t("div", nf, [
                    (n(!0), i(H, null, pe(l.value, (ie) => (n(), i("div", {
                      key: ie.name,
                      class: "workflow-item"
                    }, [
                      t("span", af, d(ie.name), 1),
                      t("span", lf, d(ie.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = (w = e.status.workflows) == null ? void 0 : w.new) != null && x.length ? (n(), i("div", rf, [
                  t("div", uf, [
                    h[13] || (h[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", cf, "NEW (" + d(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", df, [
                    (n(!0), i(H, null, pe(e.status.workflows.new, (ie) => (n(), i("div", {
                      key: ie,
                      class: "workflow-item"
                    }, [
                      t("span", mf, d(ie), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = (b = e.status.workflows) == null ? void 0 : b.modified) != null && S.length ? (n(), i("div", ff, [
                  t("div", vf, [
                    h[14] || (h[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", pf, "MODIFIED (" + d(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", gf, [
                    (n(!0), i(H, null, pe(e.status.workflows.modified, (ie) => (n(), i("div", {
                      key: ie,
                      class: "workflow-item"
                    }, [
                      t("span", hf, d(ie), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = (F = e.status.workflows) == null ? void 0 : F.deleted) != null && E.length ? (n(), i("div", yf, [
                  t("div", wf, [
                    h[15] || (h[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", _f, "DELETED (" + d(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", kf, [
                    (n(!0), i(H, null, pe(e.status.workflows.deleted, (ie) => (n(), i("div", {
                      key: ie,
                      class: "workflow-item"
                    }, [
                      t("span", bf, d(ie), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (n(), i("div", $f, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: h[2] || (h[2] = (ie) => o.value = !o.value)
                  }, [
                    h[16] || (h[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", Cf, "SYNCED (" + d(r.value.length) + ")", 1),
                    t("span", xf, d(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", Sf, [
                    (n(!0), i(H, null, pe(r.value, (ie) => (n(), i("div", {
                      key: ie,
                      class: "workflow-item"
                    }, [
                      t("span", If, d(ie), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              c.value ? (n(), i("div", Ef, [
                k(Qt, { level: "4" }, {
                  default: p(() => [...h[17] || (h[17] = [
                    C("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (D = (P = e.status.git_changes) == null ? void 0 : P.nodes_added) != null && D.length ? (n(), i("div", Tf, [
                  t("div", Pf, [
                    h[18] || (h[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", Mf, "NODES ADDED (" + d(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", Rf, [
                    (n(!0), i(H, null, pe(e.status.git_changes.nodes_added, (ie) => (n(), i("div", {
                      key: v(ie),
                      class: "change-item"
                    }, [
                      t("span", Df, d(v(ie)), 1),
                      g(ie) ? (n(), i("span", Lf, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (G = (V = e.status.git_changes) == null ? void 0 : V.nodes_removed) != null && G.length ? (n(), i("div", Uf, [
                  t("div", Nf, [
                    h[19] || (h[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", Of, "NODES REMOVED (" + d(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", Af, [
                    (n(!0), i(H, null, pe(e.status.git_changes.nodes_removed, (ie) => (n(), i("div", {
                      key: v(ie),
                      class: "change-item"
                    }, [
                      t("span", zf, d(v(ie)), 1),
                      g(ie) ? (n(), i("span", Vf, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = e.status.git_changes) != null && I.workflow_changes ? (n(), i("div", Ff, [
                  h[20] || (h[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", Bf, [
                    t("div", Wf, [
                      t("span", Gf, d(f.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (O = e.status.git_changes) != null && O.has_other_changes ? (n(), i("div", jf, [...h[21] || (h[21] = [
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
              (le = e.status.comparison) != null && le.is_synced ? y("", !0) : (n(), i("div", Hf, [
                t("div", Kf, [
                  k(Qt, { level: "4" }, {
                    default: p(() => [...h[22] || (h[22] = [
                      C("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: h[3] || (h[3] = (ie) => _.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                h[26] || (h[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (K = (ne = e.status.comparison) == null ? void 0 : ne.missing_nodes) != null && K.length ? (n(), i("div", qf, [
                  k($t, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Yf, [
                    (n(!0), i(H, null, pe(e.status.comparison.missing_nodes.slice(0, 10), (ie) => (n(), i("div", {
                      key: ie,
                      class: "drift-list-item"
                    }, " - " + d(ie), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", Jf, " ... and " + d(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (B = (j = e.status.comparison) == null ? void 0 : j.extra_nodes) != null && B.length ? (n(), i("div", Qf, [
                  k($t, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", Xf, [
                    (n(!0), i(H, null, pe(e.status.comparison.extra_nodes.slice(0, 10), (ie) => (n(), i("div", {
                      key: ie,
                      class: "drift-list-item"
                    }, " - " + d(ie), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", Zf, " ... and " + d(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (X = (q = e.status.comparison) == null ? void 0 : q.version_mismatches) != null && X.length ? (n(), i("div", ev, [
                  k($t, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", tv, [
                    (n(!0), i(H, null, pe(e.status.comparison.version_mismatches.slice(0, 10), (ie) => (n(), i("div", {
                      key: ie.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      C(d(ie.name) + ": ", 1),
                      t("span", sv, d(ie.actual), 1),
                      h[23] || (h[23] = C(" → ", -1)),
                      t("span", ov, d(ie.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", nv, " ... and " + d(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((Le = e.status.comparison) == null ? void 0 : Le.packages_in_sync) === !1 ? (n(), i("div", av, [
                  k($t, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", lv, [
                  k(ve, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: h[4] || (h[4] = (ie) => _.$emit("repair"))
                  }, {
                    default: p(() => [...h[24] || (h[24] = [
                      C(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  h[25] || (h[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (de = (ae = e.status.comparison) == null ? void 0 : ae.disabled_nodes) != null && de.length ? (n(), i("div", iv, [
                k(Qt, { level: "4" }, {
                  default: p(() => [...h[27] || (h[27] = [
                    C("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", rv, [
                  h[28] || (h[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, d(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", uv, [
                  (n(!0), i(H, null, pe(e.status.comparison.disabled_nodes.slice(0, 10), (ie) => (n(), i("div", {
                    key: ie,
                    class: "drift-list-item"
                  }, " • " + d(ie), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (n(), i("div", cv, " ... and " + d(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (n(), i("div", dv, [
                k(Qt, { level: "4" }, {
                  default: p(() => [...h[29] || (h[29] = [
                    C("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", mv, [
                  h[30] || (h[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, d(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                h[31] || (h[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              m.value ? (n(), i("div", fv, [...h[32] || (h[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            t("div", vv, [
              k(ve, {
                variant: "secondary",
                onClick: h[5] || (h[5] = (ie) => _.$emit("close"))
              }, {
                default: p(() => [...h[33] || (h[33] = [
                  C(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), gv = /* @__PURE__ */ ke(pv, [["__scopeId", "data-v-e2b37122"]]), hv = { class: "health-section-header" }, yv = { class: "suggestions-content" }, wv = { class: "suggestions-text" }, _v = { style: { "margin-top": "var(--cg-space-3)" } }, kv = {
  key: 1,
  class: "no-issues-text"
}, bv = /* @__PURE__ */ we({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = $(!1), r = $(!1);
    function u() {
      l.value = !0;
    }
    function c() {
      l.value = !1, f("view-workflows");
    }
    function m() {
      l.value = !1, f("view-nodes");
    }
    const f = o, v = $(!1), g = $(!1);
    function _() {
      g.value = !0, f("repair-environment");
    }
    function h() {
      g.value = !1;
    }
    function w() {
      l.value = !1;
    }
    const x = z(() => {
      const A = a.status.workflows.analyzed || [], M = A.filter(
        (se) => se.unresolved_models_count > 0 || se.ambiguous_models_count > 0
      );
      return M.length === 0 && a.status.missing_models_count > 0 ? A.filter((se) => se.sync_state === "synced") : M;
    });
    function b() {
      const A = x.value;
      A.length !== 0 && (v.value = !0, f("repair-missing-models", A.map((M) => M.name)));
    }
    function S() {
      v.value = !1;
    }
    s({ resetRepairingState: S, resetRepairingEnvironmentState: h, closeDetailModal: w });
    const F = z(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), E = z(() => a.status.has_changes), P = z(() => {
      const A = a.status.git_changes;
      return A.nodes_added.length > 0 || A.nodes_removed.length > 0 || A.workflow_changes;
    }), D = z(() => a.status.has_changes || F.value), V = z(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), G = z(() => a.status.git_changes.has_other_changes), I = z(() => {
      var A;
      return ((A = a.status.workflows.analyzed) == null ? void 0 : A.filter((M) => M.status === "broken")) || [];
    }), O = z(() => {
      var A;
      return ((A = a.status.workflows.analyzed) == null ? void 0 : A.filter(
        (M) => M.has_path_sync_issues && !M.has_issues
      )) || [];
    }), le = z(() => I.value.length > 0);
    function ne(A) {
      const M = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const se of M) {
        const L = A.match(se);
        if (L != null && L[1])
          return L[1];
      }
      return null;
    }
    function K(A) {
      const M = A.map(ne).filter((se) => !!se);
      return [...new Set(M)];
    }
    function j(A) {
      if (A.length === 0) return "";
      if (A.length === 1) return ` (>= ${A[0]})`;
      const M = A.slice(0, 2).map((L) => `>= ${L}`).join(", "), se = A.length > 2;
      return ` (${M}${se ? ", ..." : ""})`;
    }
    function B(A) {
      return A.replace(/uninstallable node mappings?/gi, (M) => M.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function q(A) {
      const M = B(A.issue_summary || "Has issues"), se = /(?:>=|v?\d+\.\d+)/i.test(M), L = K(A.version_gated_guidance || []);
      return (A.nodes_version_gated_count || 0) > 0 && L.length > 0 && !se ? `${A.name} — ${M} (needs ComfyUI ${L.map((N) => `>= ${N}`).join(", ")})` : `${A.name} — ${M}`;
    }
    const X = z(() => I.value.reduce(
      (A, M) => A + (M.nodes_version_gated_count || 0),
      0
    )), Le = z(() => {
      const A = I.value.flatMap(
        (M) => K(M.version_gated_guidance || [])
      );
      return [...new Set(A)];
    }), ae = z(() => I.value.reduce(
      (A, M) => A + (M.nodes_uninstallable_count || 0),
      0
    )), de = z(() => {
      const A = [];
      return X.value > 0 && A.push(
        `${X.value} require newer ComfyUI${j(Le.value)}`
      ), ae.value > 0 && A.push(`${ae.value} need community packages`), A.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${A.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), ie = z(() => le.value || O.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), Ae = z(() => {
      const A = [];
      return a.status.workflows.new.length > 0 && A.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && A.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && A.push(`${a.status.workflows.deleted.length} deleted`), A.length > 0 ? `${A.join(", ")} workflow${A.length === 1 && !A[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), _e = z(() => {
      var se, L;
      const A = [], M = a.status.comparison;
      return (se = M.missing_nodes) != null && se.length && A.push(`${M.missing_nodes.length} missing node${M.missing_nodes.length === 1 ? "" : "s"}`), (L = M.extra_nodes) != null && L.length && A.push(`${M.extra_nodes.length} untracked node${M.extra_nodes.length === 1 ? "" : "s"}`), A.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${A.join(" and ")}.`;
    }), Z = z(() => {
      var se, L;
      const A = [], M = a.status.comparison;
      return (se = M.extra_nodes) != null && se.length && (M.extra_nodes.slice(0, 3).forEach((N) => {
        A.push(`Untracked: ${N}`);
      }), M.extra_nodes.length > 3 && A.push(`...and ${M.extra_nodes.length - 3} more untracked`)), (L = M.missing_nodes) != null && L.length && (M.missing_nodes.slice(0, 3).forEach((N) => {
        A.push(`Missing: ${N}`);
      }), M.missing_nodes.length > 3 && A.push(`...and ${M.missing_nodes.length - 3} more missing`)), A;
    });
    return (A, M) => (n(), i(H, null, [
      k(Ht, null, {
        header: p(() => [
          k(Kt, { title: "STATUS" })
        ]),
        content: p(() => [
          a.setupState === "no_workspace" ? (n(), U(cs, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: p(() => [
              k(ve, {
                variant: "primary",
                size: "sm",
                onClick: M[0] || (M[0] = (se) => A.$emit("start-setup"))
              }, {
                default: p(() => [...M[13] || (M[13] = [
                  C(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (n(), U(cs, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: p(() => [
              k(ve, {
                variant: "primary",
                size: "sm",
                onClick: M[1] || (M[1] = (se) => A.$emit("view-environments"))
              }, {
                default: p(() => [...M[14] || (M[14] = [
                  C(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (n(), U(cs, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: p(() => [
              k(ve, {
                variant: "primary",
                size: "sm",
                onClick: M[2] || (M[2] = (se) => A.$emit("create-environment"))
              }, {
                default: p(() => [...M[15] || (M[15] = [
                  C(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: M[4] || (M[4] = (se) => r.value = !0),
            onMouseleave: M[5] || (M[5] = (se) => r.value = !1)
          }, [
            t("div", hv, [
              k(Qt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: p(() => [...M[16] || (M[16] = [
                  C(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              k(fd, { name: "fade" }, {
                default: p(() => [
                  r.value ? (n(), U(ve, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: p(() => [...M[17] || (M[17] = [
                      C(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            k(_m, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, fo({
              left: p(() => [
                e.status.workflows.new.length ? (n(), U(_s, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (n(), U(_s, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (n(), U(_s, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                k(_s, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: F.value
                }, null, 8, ["count", "separator"])
              ]),
              right: p(() => [
                e.status.git_changes.nodes_added.length ? (n(), U(_s, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (n(), U(_s, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (n(), U(_s, {
                  key: 2,
                  icon: "●",
                  count: V.value,
                  label: V.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                G.value ? (n(), U(_s, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                E.value && !P.value && !G.value ? (n(), U(_s, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                E.value ? y("", !0) : (n(), U(_s, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              D.value ? {
                name: "footer",
                fn: p(() => [
                  M[19] || (M[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", yv, [
                    t("span", wv, d(Ae.value), 1),
                    k(ve, {
                      variant: "primary",
                      size: "sm",
                      onClick: M[3] || (M[3] = (se) => A.$emit("commit-changes"))
                    }, {
                      default: p(() => [...M[18] || (M[18] = [
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
          e.status.is_detached_head ? (n(), U(cs, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: p(() => [
              k(ve, {
                variant: "primary",
                size: "sm",
                onClick: M[6] || (M[6] = (se) => A.$emit("create-branch"))
              }, {
                default: p(() => [...M[20] || (M[20] = [
                  C(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", _v, [
            k(Qt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: p(() => [...M[21] || (M[21] = [
                C(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ie.value ? (n(), i(H, { key: 0 }, [
              I.value.length > 0 ? (n(), U(cs, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${I.value.length} workflow${I.value.length === 1 ? "" : "s"} can't run`,
                description: de.value,
                items: I.value.map(q)
              }, {
                actions: p(() => [
                  k(ve, {
                    variant: "primary",
                    size: "sm",
                    onClick: M[7] || (M[7] = (se) => A.$emit("view-workflows"))
                  }, {
                    default: p(() => [...M[22] || (M[22] = [
                      C(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              O.value.length > 0 ? (n(), U(cs, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${O.value.length} workflow${O.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: O.value.map((se) => `${se.name} — ${se.models_needing_path_sync_count} model path${se.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: p(() => [
                  k(ve, {
                    variant: "primary",
                    size: "sm",
                    onClick: M[8] || (M[8] = (se) => A.$emit("view-workflows"))
                  }, {
                    default: p(() => [...M[23] || (M[23] = [
                      C(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !le.value ? (n(), U(cs, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: p(() => [
                  k(ve, {
                    variant: "primary",
                    size: "sm",
                    disabled: v.value,
                    onClick: b
                  }, {
                    default: p(() => [
                      C(d(v.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  k(ve, {
                    variant: "secondary",
                    size: "sm",
                    onClick: M[9] || (M[9] = (se) => A.$emit("view-workflows"))
                  }, {
                    default: p(() => [...M[24] || (M[24] = [
                      C(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (n(), U(cs, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: _e.value,
                items: Z.value
              }, {
                actions: p(() => [
                  k(ve, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: p(() => [...M[25] || (M[25] = [
                      C(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  k(ve, {
                    variant: "primary",
                    size: "sm",
                    onClick: M[10] || (M[10] = (se) => A.$emit("view-nodes"))
                  }, {
                    default: p(() => [...M[26] || (M[26] = [
                      C(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (n(), U(cs, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: p(() => [
                  k(ve, {
                    variant: "primary",
                    size: "sm",
                    onClick: M[11] || (M[11] = (se) => A.$emit("view-nodes"))
                  }, {
                    default: p(() => [...M[27] || (M[27] = [
                      C(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : D.value ? (n(), i("span", kv, "No issues")) : (n(), U(gs, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      k(gv, {
        show: l.value,
        status: e.status,
        "is-repairing": g.value,
        onClose: M[12] || (M[12] = (se) => l.value = !1),
        onNavigateWorkflows: c,
        onNavigateNodes: m,
        onRepair: _
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), $v = /* @__PURE__ */ ke(bv, [["__scopeId", "data-v-df52ba90"]]), Cv = ["type", "value", "placeholder", "disabled"], xv = /* @__PURE__ */ we({
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
    const a = e, l = o, r = $(null);
    function u(c) {
      const m = c.target.value;
      l("update:modelValue", m);
    }
    return lt(() => {
      a.autoFocus && r.value && r.value.focus();
    }), s({
      focus: () => {
        var c;
        return (c = r.value) == null ? void 0 : c.focus();
      },
      blur: () => {
        var c;
        return (c = r.value) == null ? void 0 : c.blur();
      }
    }), (c, m) => (n(), i("input", {
      ref_key: "inputRef",
      ref: r,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Re(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: u,
      onKeyup: [
        m[0] || (m[0] = as((f) => c.$emit("enter"), ["enter"])),
        m[1] || (m[1] = as((f) => c.$emit("escape"), ["escape"]))
      ],
      onFocus: m[2] || (m[2] = (f) => c.$emit("focus")),
      onBlur: m[3] || (m[3] = (f) => c.$emit("blur"))
    }, null, 42, Cv));
  }
}), an = /* @__PURE__ */ ke(xv, [["__scopeId", "data-v-0380d08f"]]), Sv = { class: "branch-create-form" }, Iv = { class: "form-actions" }, Ev = /* @__PURE__ */ we({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, a = $(""), l = z(() => {
      const c = a.value.trim();
      return c.length > 0 && !c.startsWith("-") && !c.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(c);
    });
    function r() {
      l.value && (o("create", a.value.trim()), a.value = "");
    }
    function u() {
      a.value = "", o("cancel");
    }
    return (c, m) => (n(), i("div", Sv, [
      k(an, {
        modelValue: a.value,
        "onUpdate:modelValue": m[0] || (m[0] = (f) => a.value = f),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: u
      }, null, 8, ["modelValue"]),
      t("div", Iv, [
        k(ve, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: r
        }, {
          default: p(() => [...m[1] || (m[1] = [
            C(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        k(ve, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: p(() => [...m[2] || (m[2] = [
            C(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Tv = /* @__PURE__ */ ke(Ev, [["__scopeId", "data-v-7c500394"]]), Pv = { class: "branch-list-item__indicator" }, Mv = { class: "branch-list-item__name" }, Rv = {
  key: 0,
  class: "branch-list-item__actions"
}, Dv = {
  key: 0,
  class: "branch-list-item__current-label"
}, Lv = /* @__PURE__ */ we({
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
      class: Re(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, [
      t("span", Pv, d(e.isCurrent ? "●" : "○"), 1),
      t("span", Mv, d(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (n(), i("div", Rv, [
        nt(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", Dv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Uv = /* @__PURE__ */ ke(Lv, [["__scopeId", "data-v-c6581a24"]]), KL = Qs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const qL = [
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
], YL = {
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
}, Nv = [
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
], JL = [
  ...Nv,
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
function So() {
  return !1;
}
function Ov() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const s = Math.random() * 16 | 0;
    return (e === "x" ? s : s & 3 | 8).toString(16);
  });
}
function ut() {
  const e = $(!1), s = $(null);
  async function o(ee, Se) {
    var Dt;
    if (!((Dt = window.app) != null && Dt.api))
      throw new Error("ComfyUI API not available");
    const je = await window.app.api.fetchApi(ee, Se);
    if (!je.ok) {
      const us = await je.json().catch(() => ({}));
      throw new Error(us.error || us.message || `Request failed: ${je.status}`);
    }
    const kt = await je.text();
    if (kt)
      return JSON.parse(kt);
  }
  async function a(ee = !1) {
    return o(ee ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(ee, Se = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: ee, allow_issues: Se })
    });
  }
  async function r(ee = 10, Se = 0) {
    return o(`/v2/comfygit/log?limit=${ee}&offset=${Se}`);
  }
  async function u(ee, Se = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(ee)}&limit=${Se}`);
  }
  async function c(ee) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: ee })
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
  async function v(ee) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: ee, force: !0 })
    });
  }
  async function g() {
    return o("/v2/comfygit/branches");
  }
  async function _(ee) {
    return o(`/v2/comfygit/commit/${ee}`);
  }
  async function h(ee, Se = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: ee, force: Se })
    });
  }
  async function w(ee, Se = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: ee, start_point: Se })
    });
  }
  async function x(ee, Se = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: ee, force: Se })
    });
  }
  async function b(ee, Se = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(ee)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: Se })
    });
  }
  async function S() {
    try {
      return await o("/v2/comfygit/environments");
    } catch {
      try {
        const ee = await a();
        return {
          environments: [{
            name: ee.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + ee.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: ee.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: ee.branch
          }],
          current: ee.environment,
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
  async function F() {
    return (await S()).environments;
  }
  async function E(ee) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(ee)}`);
    } catch {
      return null;
    }
  }
  async function P(ee, Se) {
    const je = { target_env: ee };
    return Se && (je.workspace_path = Se), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(je)
    });
  }
  async function D() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function V(ee) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ee)
    });
  }
  async function G() {
    return o("/v2/workspace/environments/create_status");
  }
  async function I(ee = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${ee}`);
  }
  async function O(ee) {
    return o(`/v2/workspace/environments/${ee}`, {
      method: "DELETE"
    });
  }
  async function le(ee = !1) {
    try {
      return o(ee ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const Se = await a(ee), je = [];
      return Se.workflows.new.forEach((kt) => {
        je.push({
          name: kt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: kt
        });
      }), Se.workflows.modified.forEach((kt) => {
        je.push({
          name: kt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: kt
        });
      }), Se.workflows.synced.forEach((kt) => {
        je.push({
          name: kt,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: kt
        });
      }), je;
    }
  }
  async function ne(ee) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(ee)}/details`);
  }
  async function K(ee) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(ee)}/contract`);
  }
  async function j(ee, Se) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(ee)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Se)
    });
  }
  async function B(ee) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(ee)}/contract`, {
      method: "DELETE"
    });
  }
  async function q(ee) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(ee)}/resolve`, {
      method: "POST"
    });
  }
  async function X(ee, Se, je) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(ee)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: Se, install_models: je })
    });
  }
  async function Le(ee, Se, je) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(ee)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: Se, importance: je })
    });
  }
  async function ae() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function de() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function ie(ee) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(ee)}`);
  }
  async function Ae(ee) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: ee })
    });
  }
  async function _e(ee, Se) {
    return o(`/v2/workspace/models/${ee}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Se })
    });
  }
  async function Z(ee, Se) {
    return o(`/v2/workspace/models/${ee}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Se })
    });
  }
  async function A(ee) {
    return o(`/v2/workspace/models/${ee}`, {
      method: "DELETE"
    });
  }
  async function M(ee) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ee)
    });
  }
  async function se() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function L() {
    return o("/v2/workspace/models/directory");
  }
  async function N(ee) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: ee })
    });
  }
  async function oe(ee) {
    const Se = new URLSearchParams({ url: ee });
    return o(`/v2/workspace/huggingface/repo-info?${Se}`);
  }
  async function Ne() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function ze(ee, Se = 10) {
    const je = new URLSearchParams({ query: ee, limit: String(Se) });
    return o(`/v2/workspace/huggingface/search?${je}`);
  }
  async function W(ee) {
    try {
      const Se = ee ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(ee)}` : "/v2/comfygit/config";
      return o(Se);
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
  async function J(ee, Se) {
    const je = Se ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(Se)}` : "/v2/comfygit/config";
    return o(je, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ee)
    });
  }
  async function re(ee, Se) {
    try {
      const je = new URLSearchParams();
      return ee && je.append("level", ee), Se && je.append("lines", Se.toString()), o(`/v2/comfygit/debug/logs?${je}`);
    } catch {
      return [];
    }
  }
  async function xe(ee, Se) {
    try {
      const je = new URLSearchParams();
      return ee && je.append("level", ee), Se && je.append("lines", Se.toString()), o(`/v2/workspace/debug/logs?${je}`);
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
  async function De(ee, Se) {
    try {
      const je = new URLSearchParams();
      return ee && je.append("level", ee), Se && je.append("lines", Se.toString()), o(`/v2/workspace/debug/orchestrator-logs?${je}`);
    } catch {
      return [];
    }
  }
  async function ye() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function Te(ee) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: ee })
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
  async function We(ee) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(ee)}/track-dev`, {
      method: "POST"
    });
  }
  async function Ue(ee) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(ee)}/install`, {
      method: "POST"
    });
  }
  async function ge(ee, Se) {
    var Fs, Je, _a, Cl;
    const je = Ov(), kt = ((Je = (Fs = window.app) == null ? void 0 : Fs.api) == null ? void 0 : Je.clientId) ?? ((Cl = (_a = window.app) == null ? void 0 : _a.api) == null ? void 0 : Cl.initialClientId) ?? "comfygit-panel", Dt = {
      id: ee.id,
      version: ee.version || ee.selected_version || "latest",
      selected_version: ee.selected_version || "latest",
      mode: ee.mode || "remote",
      channel: ee.channel || "default"
    };
    return ee.install_source && (Dt.install_source = ee.install_source), ee.install_source === "git" && ee.repository && (Dt.repository = ee.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Dt,
        ui_id: je,
        client_id: kt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", je, "for package:", ee.id), Se != null && Se.beforeQueueStart && await Se.beforeQueueStart(je), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: je };
  }
  async function Y(ee) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(ee)}/update`, {
      method: "POST"
    });
  }
  async function Ve(ee) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(ee)}`, {
      method: "DELETE"
    });
  }
  async function Ie() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function Ce(ee, Se) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: ee, url: Se })
    });
  }
  async function Oe(ee) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(ee)}`, {
      method: "DELETE"
    });
  }
  async function Me(ee, Se, je) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(ee)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: Se, push_url: je })
    });
  }
  async function Q(ee, Se) {
    const je = {};
    return Se && (je["X-Git-Auth-Token"] = Se), o(`/v2/comfygit/remotes/${encodeURIComponent(ee)}/fetch`, {
      method: "POST",
      headers: je
    });
  }
  async function me(ee) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(ee)}/status`);
    } catch {
      return null;
    }
  }
  async function he(ee = "skip", Se = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: ee,
        remove_extra_nodes: Se
      })
    });
  }
  async function Ke(ee, Se) {
    const je = Se ? `/v2/comfygit/remotes/${encodeURIComponent(ee)}/pull-preview?branch=${encodeURIComponent(Se)}` : `/v2/comfygit/remotes/${encodeURIComponent(ee)}/pull-preview`;
    return o(je);
  }
  async function Fe(ee, Se = {}) {
    const je = { "Content-Type": "application/json" };
    return Se.authToken && (je["X-Git-Auth-Token"] = Se.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(ee)}/pull`, {
      method: "POST",
      headers: je,
      body: JSON.stringify({
        model_strategy: Se.modelStrategy || "skip",
        force: Se.force || !1,
        resolutions: Se.resolutions
      })
    });
  }
  async function Be(ee, Se) {
    const je = Se ? `/v2/comfygit/remotes/${encodeURIComponent(ee)}/push-preview?branch=${encodeURIComponent(Se)}` : `/v2/comfygit/remotes/${encodeURIComponent(ee)}/push-preview`;
    return o(je);
  }
  async function et(ee, Se = {}) {
    const je = { "Content-Type": "application/json" };
    return Se.authToken && (je["X-Git-Auth-Token"] = Se.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(ee)}/push`, {
      method: "POST",
      headers: je,
      body: JSON.stringify({ force: Se.force || !1 })
    });
  }
  async function qe(ee, Se) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(ee)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: Se })
    });
  }
  async function vt(ee) {
    const Se = {
      success: 0,
      failed: []
    };
    for (const je of ee)
      try {
        await q(je), Se.success++;
      } catch (kt) {
        Se.failed.push({
          name: je,
          error: kt instanceof Error ? kt.message : "Unknown error"
        });
      }
    return Se;
  }
  async function dt(ee) {
    var kt;
    const Se = new FormData();
    if (Se.append("file", ee), !((kt = window.app) != null && kt.api))
      throw new Error("ComfyUI API not available");
    const je = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: Se
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!je.ok) {
      const Dt = await je.json().catch(() => ({}));
      throw new Error(Dt.error || `Preview failed: ${je.status}`);
    }
    return je.json();
  }
  async function ft(ee) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(ee)}`
    );
  }
  async function Pt(ee, Se, je, kt) {
    var Fs;
    const Dt = new FormData();
    if (Dt.append("file", ee), Dt.append("name", Se), Dt.append("model_strategy", je), Dt.append("torch_backend", kt), !((Fs = window.app) != null && Fs.api))
      throw new Error("ComfyUI API not available");
    const us = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Dt
    });
    if (!us.ok) {
      const Je = await us.json().catch(() => ({}));
      throw new Error(Je.message || Je.error || `Import failed: ${us.status}`);
    }
    return us.json();
  }
  async function ts() {
    return o("/v2/workspace/import/status");
  }
  async function Ot(ee) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: ee })
    });
  }
  async function ue(ee, Se, je, kt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: ee,
        name: Se,
        model_strategy: je,
        torch_backend: kt
      })
    });
  }
  async function T() {
    return o("/v2/setup/status");
  }
  async function R() {
    return o("/v2/comfygit/update-check");
  }
  async function Pe() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function tt(ee) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ee)
    });
  }
  async function pt() {
    return o("/v2/setup/initialize_status");
  }
  async function st(ee) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ee)
    });
  }
  async function xt() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function Et() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function Ge(ee, Se) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: ee, save_key: Se })
    });
  }
  async function is() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function ys(ee) {
    const Se = ee ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(ee)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(Se);
  }
  async function vo(ee) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ee)
    });
  }
  async function po() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function go(ee) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(ee)}`, {
      method: "DELETE"
    });
  }
  async function Zs(ee) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(ee)}/stop`, {
      method: "POST"
    });
  }
  async function ho(ee) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(ee)}/start`, {
      method: "POST"
    });
  }
  async function yo(ee) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(ee)}/status`);
  }
  async function wo(ee) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: ee })
    });
  }
  async function _o(ee = !1) {
    return o(ee ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function ko() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function ha() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function ya(ee) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ee)
    });
  }
  async function wa(ee) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(ee)}`, {
      method: "DELETE"
    });
  }
  async function xn(ee) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ee)
    });
  }
  async function ce() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function te(ee) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(ee)}/info`);
  }
  async function He(ee) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(ee)}/instances`);
  }
  async function Qe(ee, Se) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(ee)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Se)
    });
  }
  async function yt(ee, Se) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(ee)}/instances/${encodeURIComponent(Se)}/start`, {
      method: "POST"
    });
  }
  async function Tt(ee, Se) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(ee)}/instances/${encodeURIComponent(Se)}/stop`, {
      method: "POST"
    });
  }
  async function rs(ee, Se) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(ee)}/instances/${encodeURIComponent(Se)}`, {
      method: "DELETE"
    });
  }
  async function eo(ee) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: ee })
    });
  }
  return {
    isLoading: e,
    error: s,
    getStatus: a,
    commit: l,
    getHistory: r,
    getBranchHistory: u,
    exportEnv: c,
    validateExport: m,
    validateDeploy: f,
    exportEnvWithForce: v,
    // Git Operations
    getBranches: g,
    getCommitDetail: _,
    checkout: h,
    createBranch: w,
    switchBranch: x,
    deleteBranch: b,
    // Environment Management
    listEnvironments: S,
    getEnvironments: F,
    getEnvironmentDetails: E,
    switchEnvironment: P,
    getSwitchProgress: D,
    createEnvironment: V,
    getCreateProgress: G,
    getComfyUIReleases: I,
    deleteEnvironment: O,
    // Workflow Management
    getWorkflows: le,
    getWorkflowDetails: ne,
    getWorkflowContract: K,
    saveWorkflowContract: j,
    deleteWorkflowContract: B,
    resolveWorkflow: q,
    installWorkflowDeps: X,
    setModelImportance: Le,
    // Model Management
    getEnvironmentModels: ae,
    getWorkspaceModels: de,
    getModelDetails: ie,
    openFileLocation: Ae,
    addModelSource: _e,
    removeModelSource: Z,
    deleteModel: A,
    downloadModel: M,
    scanWorkspaceModels: se,
    getModelsDirectory: L,
    setModelsDirectory: N,
    getHuggingFaceRepoInfo: oe,
    getModelsSubdirectories: Ne,
    searchHuggingFaceRepos: ze,
    // Settings
    getConfig: W,
    updateConfig: J,
    // Debug/Logs
    getEnvironmentLogs: re,
    getWorkspaceLogs: xe,
    getEnvironmentLogPath: be,
    getWorkspaceLogPath: $e,
    getOrchestratorLogs: De,
    getOrchestratorLogPath: ye,
    openFile: Te,
    // Node Management
    getNodes: fe,
    trackNodeAsDev: We,
    installNode: Ue,
    queueNodeInstall: ge,
    updateNode: Y,
    uninstallNode: Ve,
    // Git Remotes
    getRemotes: Ie,
    addRemote: Ce,
    removeRemote: Oe,
    updateRemoteUrl: Me,
    fetchRemote: Q,
    getRemoteSyncStatus: me,
    // Push/Pull
    getPullPreview: Ke,
    pullFromRemote: Fe,
    getPushPreview: Be,
    pushToRemote: et,
    validateMerge: qe,
    // Environment Sync
    syncEnvironmentManually: he,
    // Workflow Repair
    repairWorkflowModels: vt,
    // Import Operations
    previewTarballImport: dt,
    previewGitImport: Ot,
    validateEnvironmentName: ft,
    executeImport: Pt,
    executeGitImport: ue,
    getImportProgress: ts,
    // First-Time Setup
    getSetupStatus: T,
    // Manager Update Notice
    getUpdateCheck: R,
    updateManager: Pe,
    initializeWorkspace: tt,
    getInitializeProgress: pt,
    validatePath: st,
    // Deploy Operations
    getDeploySummary: xt,
    getDataCenters: Et,
    testRunPodConnection: Ge,
    getNetworkVolumes: is,
    getRunPodGpuTypes: ys,
    deployToRunPod: vo,
    getRunPodPods: po,
    terminateRunPodPod: go,
    stopRunPodPod: Zs,
    startRunPodPod: ho,
    getDeploymentStatus: yo,
    exportDeployPackage: wo,
    getStoredRunPodKey: _o,
    clearRunPodKey: ko,
    // Custom Worker Operations
    getCustomWorkers: ha,
    addCustomWorker: ya,
    removeCustomWorker: wa,
    testWorkerConnection: xn,
    scanForWorkers: ce,
    getWorkerSystemInfo: te,
    getWorkerInstances: He,
    deployToWorker: Qe,
    startWorkerInstance: yt,
    stopWorkerInstance: Tt,
    terminateWorkerInstance: rs,
    // Git Authentication
    testGitAuth: eo
  };
}
const Av = { class: "base-modal-header" }, zv = {
  key: 0,
  class: "base-modal-title"
}, Vv = { class: "base-modal-body" }, Fv = {
  key: 0,
  class: "base-modal-loading"
}, Bv = {
  key: 1,
  class: "base-modal-error"
}, Wv = {
  key: 0,
  class: "base-modal-footer"
}, Gv = /* @__PURE__ */ we({
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
    function r(u) {
      u.key === "Escape" && o.showCloseButton && a("close");
    }
    return lt(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Xs(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (u, c) => (n(), U(Nt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Re(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: c[1] || (c[1] = gt(() => {
          }, ["stop"]))
        }, [
          t("div", Av, [
            nt(u.$slots, "header", {}, () => [
              e.title ? (n(), i("h3", zv, d(e.title), 1)) : y("", !0)
            ]),
            e.showCloseButton ? (n(), i("button", {
              key: 0,
              class: "base-modal-close",
              onClick: c[0] || (c[0] = (m) => u.$emit("close"))
            }, [...c[2] || (c[2] = [
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
          t("div", Vv, [
            e.loading ? (n(), i("div", Fv, "Loading...")) : e.error ? (n(), i("div", Bv, d(e.error), 1)) : nt(u.$slots, "body", { key: 2 }, void 0)
          ]),
          u.$slots.footer ? (n(), i("div", Wv, [
            nt(u.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), Ct = /* @__PURE__ */ ke(Gv, [["__scopeId", "data-v-8dab1081"]]), jv = ["type", "disabled"], Hv = {
  key: 0,
  class: "spinner"
}, Kv = /* @__PURE__ */ we({
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
      class: Re(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", Hv)) : y("", !0),
      nt(s.$slots, "default", {}, void 0)
    ], 10, jv));
  }
}), Ee = /* @__PURE__ */ ke(Kv, [["__scopeId", "data-v-f3452606"]]), qv = { class: "commit-list" }, Yv = /* @__PURE__ */ we({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (n(), i("div", qv, [
      nt(s.$slots, "default", {}, void 0)
    ]));
  }
}), Vr = /* @__PURE__ */ ke(Yv, [["__scopeId", "data-v-8c5ee761"]]), Jv = { class: "commit-hash" }, Qv = /* @__PURE__ */ we({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = z(() => s.hash.slice(0, s.length));
    return (a, l) => (n(), i("span", Jv, d(o.value), 1));
  }
}), Fr = /* @__PURE__ */ ke(Qv, [["__scopeId", "data-v-7c333cc6"]]), Xv = { class: "commit-message" }, Zv = { class: "commit-date" }, ep = /* @__PURE__ */ we({
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
    return (r, u) => (n(), i("div", {
      class: Re(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      k(Fr, { hash: e.hash }, null, 8, ["hash"]),
      t("span", Xv, d(e.message), 1),
      t("span", Zv, d(e.relativeDate), 1),
      r.$slots.actions ? (n(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = gt(() => {
        }, ["stop"]))
      }, [
        nt(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Br = /* @__PURE__ */ ke(ep, [["__scopeId", "data-v-dd7c621b"]]), tp = { class: "header-info" }, sp = { class: "branch-name" }, op = {
  key: 0,
  class: "current-badge"
}, np = { class: "branch-meta" }, ap = { key: 0 }, lp = {
  key: 0,
  class: "meta-note"
}, ip = {
  key: 0,
  class: "loading"
}, rp = {
  key: 1,
  class: "empty-state"
}, up = /* @__PURE__ */ we({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const s = e, { getBranchHistory: o } = ut(), a = $([]), l = $(!1), r = $(!0);
    return lt(async () => {
      try {
        const u = await o(s.branchName, 50);
        a.value = u.commits, l.value = u.has_more;
      } finally {
        r.value = !1;
      }
    }), (u, c) => (n(), U(Ct, {
      size: "md",
      "show-close-button": !1,
      onClose: c[3] || (c[3] = (m) => u.$emit("close"))
    }, {
      header: p(() => [
        t("div", tp, [
          c[4] || (c[4] = t("h3", { class: "header-title" }, "BRANCH", -1)),
          t("span", sp, d(e.branchName), 1),
          e.isCurrent ? (n(), i("span", op, "CURRENT")) : y("", !0)
        ]),
        k(Ee, {
          variant: "ghost",
          size: "sm",
          onClick: c[0] || (c[0] = (m) => u.$emit("close"))
        }, {
          default: p(() => [...c[5] || (c[5] = [
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
      body: p(() => [
        t("div", np, [
          r.value ? (n(), i("span", ap, "Loading...")) : (n(), i(H, { key: 1 }, [
            t("span", null, d(a.value.length) + " commits", 1),
            l.value ? (n(), i("span", lp, "(showing first " + d(a.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (n(), i("div", ip, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", rp, " No commits found on this branch ")) : (n(), U(Vr, {
          key: 2,
          class: "branch-commits"
        }, {
          default: p(() => [
            (n(!0), i(H, null, pe(a.value, (m) => (n(), U(Br, {
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
      footer: p(() => [
        e.isCurrent ? y("", !0) : (n(), U(ve, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: c[1] || (c[1] = (m) => u.$emit("delete", e.branchName))
        }, {
          default: p(() => [...c[6] || (c[6] = [
            C(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        c[8] || (c[8] = t("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? y("", !0) : (n(), U(Ee, {
          key: 1,
          variant: "primary",
          onClick: c[2] || (c[2] = (m) => u.$emit("switch", e.branchName))
        }, {
          default: p(() => [...c[7] || (c[7] = [
            C(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), cp = /* @__PURE__ */ ke(up, [["__scopeId", "data-v-2e5437cc"]]), dp = {
  key: 2,
  class: "branch-list"
}, mp = /* @__PURE__ */ we({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: s }) {
    const o = s, a = $(!1), l = $(null);
    function r(v) {
      o("create", v), u();
    }
    function u() {
      a.value = !1;
    }
    function c(v) {
      l.value = v;
    }
    function m(v) {
      l.value = null, o("delete", v);
    }
    function f(v) {
      l.value = null, o("switch", v);
    }
    return (v, g) => (n(), U(Ht, null, {
      header: p(() => [
        k(Kt, { title: "BRANCHES" }, {
          actions: p(() => [
            a.value ? y("", !0) : (n(), U(ve, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: g[0] || (g[0] = (_) => a.value = !0)
            }, {
              default: p(() => [...g[2] || (g[2] = [
                C(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: p(() => [
        a.value ? (n(), U(Tv, {
          key: 0,
          onCreate: r,
          onCancel: u
        })) : y("", !0),
        e.branches.length === 0 ? (n(), U(gs, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (n(), i("div", dp, [
          (n(!0), i(H, null, pe(e.branches, (_) => (n(), U(Uv, {
            key: _.name,
            "branch-name": _.name,
            "is-current": _.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (h) => c(_)
          }, {
            actions: p(() => [
              _.is_current ? y("", !0) : (n(), U(ve, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: gt((h) => o("switch", _.name), ["stop"])
              }, {
                default: p(() => [...g[3] || (g[3] = [
                  C(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (n(), U(cp, {
          key: 3,
          "branch-name": l.value.name,
          "is-current": l.value.is_current,
          onClose: g[1] || (g[1] = (_) => l.value = null),
          onDelete: m,
          onSwitch: f
        }, null, 8, ["branch-name", "is-current"])) : y("", !0)
      ]),
      _: 1
    }));
  }
}), fp = /* @__PURE__ */ ke(mp, [["__scopeId", "data-v-eefdcb00"]]), vp = /* @__PURE__ */ we({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    const s = e, o = z(() => `HISTORY (${s.currentRef || "detached"})`);
    return (a, l) => (n(), U(Ht, null, {
      header: p(() => [
        k(Kt, { title: o.value }, null, 8, ["title"])
      ]),
      content: p(() => [
        e.commits.length === 0 ? (n(), U(gs, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), U(Vr, { key: 1 }, {
          default: p(() => [
            (n(!0), i(H, null, pe(e.commits, (r) => (n(), U(Br, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (u) => a.$emit("select", r)
            }, {
              actions: p(() => [
                k(ve, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (u) => a.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: p(() => [...l[0] || (l[0] = [
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
}), pp = /* @__PURE__ */ ke(vp, [["__scopeId", "data-v-62a5d9da"]]);
async function Rn(e, s) {
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
function gp() {
  async function e() {
    try {
      return await Rn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await Rn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await Rn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await Rn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: s,
    restart: o,
    kill: a
  };
}
const hp = {
  key: 0,
  class: "base-title-count"
}, yp = /* @__PURE__ */ we({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (n(), U(fl(`h${e.level}`), {
      class: Re(["base-title", e.variant])
    }, {
      default: p(() => [
        nt(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", hp, "(" + d(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ls = /* @__PURE__ */ ke(yp, [["__scopeId", "data-v-5a01561d"]]), wp = ["value", "disabled"], _p = {
  key: 0,
  value: "",
  disabled: ""
}, kp = ["value"], bp = {
  key: 0,
  class: "base-select-error"
}, $p = /* @__PURE__ */ we({
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
      class: Re(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Re(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => a.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (n(), i("option", _p, d(e.placeholder), 1)) : y("", !0),
        (n(!0), i(H, null, pe(e.options, (r) => (n(), i("option", {
          key: s(r),
          value: s(r)
        }, d(o(r)), 9, kp))), 128))
      ], 42, wp),
      e.error ? (n(), i("span", bp, d(e.error), 1)) : y("", !0)
    ], 2));
  }
}), uo = /* @__PURE__ */ ke($p, [["__scopeId", "data-v-4996bfe0"]]), Cp = { class: "popover-header" }, xp = { class: "popover-title" }, Sp = { class: "popover-content" }, Ip = {
  key: 0,
  class: "popover-actions"
}, Ep = /* @__PURE__ */ we({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (n(), U(Nt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: es({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = gt(() => {
          }, ["stop"]))
        }, [
          t("div", Cp, [
            t("h4", xp, d(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", Sp, [
            nt(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (n(), i("div", Ip, [
            nt(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), hs = /* @__PURE__ */ ke(Ep, [["__scopeId", "data-v-42815ace"]]), Tp = { class: "detail-section" }, Pp = {
  key: 0,
  class: "empty-message"
}, Mp = { class: "model-header" }, Rp = { class: "model-name" }, Dp = { class: "model-details" }, Lp = { class: "model-row" }, Up = { class: "model-row" }, Np = { class: "label" }, Op = {
  key: 0,
  class: "model-row model-row-nodes"
}, Ap = { class: "node-list" }, zp = ["onClick"], Vp = {
  key: 1,
  class: "model-row"
}, Fp = { class: "value" }, Bp = {
  key: 2,
  class: "model-row"
}, Wp = { class: "value error" }, Gp = {
  key: 0,
  class: "model-actions"
}, jp = { class: "detail-section" }, Hp = {
  key: 0,
  class: "empty-message"
}, Kp = { class: "node-content" }, qp = { class: "node-main" }, Yp = { class: "node-name" }, Jp = { class: "node-badge" }, Qp = {
  key: 0,
  class: "node-version"
}, Xp = ["onClick"], Zp = {
  key: 2,
  class: "node-install-queued"
}, eg = {
  key: 0,
  class: "node-guidance"
}, tg = /* @__PURE__ */ we({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: u, queueNodeInstall: c } = ut(), m = $(null), f = $(!1), v = $(null), g = $(!1), _ = $({}), h = $(!1), w = $(/* @__PURE__ */ new Set()), x = $(/* @__PURE__ */ new Set()), b = [
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
    function F(B) {
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
    function E(B) {
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
    function D(B) {
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
    function V(B) {
      if (!B.loaded_by || B.loaded_by.length === 0) return [];
      const q = B.hash || B.filename;
      return w.value.has(q) ? B.loaded_by : B.loaded_by.slice(0, 3);
    }
    function G(B) {
      return w.value.has(B);
    }
    function I(B) {
      w.value.has(B) ? w.value.delete(B) : w.value.add(B), w.value = new Set(w.value);
    }
    async function O() {
      f.value = !0, v.value = null;
      try {
        m.value = await l(o.workflowName);
      } catch (B) {
        v.value = B instanceof Error ? B.message : "Failed to load workflow details";
      } finally {
        f.value = !1;
      }
    }
    function le(B, q) {
      _.value[B] = q, g.value = !0;
    }
    async function ne(B) {
      try {
        await u(B);
      } catch (q) {
        v.value = q instanceof Error ? q.message : "Failed to open file location";
      }
    }
    async function K(B) {
      if (B.package_id)
        try {
          const q = B.latest_version || "latest";
          await c({
            id: B.package_id,
            version: q,
            selected_version: q,
            mode: "remote",
            channel: "default"
          }), x.value.add(B.package_id);
        } catch (q) {
          v.value = q instanceof Error ? q.message : "Failed to queue node install";
        }
    }
    async function j() {
      if (!g.value) {
        a("close");
        return;
      }
      f.value = !0, v.value = null;
      try {
        for (const [B, q] of Object.entries(_.value))
          await r(o.workflowName, B, q);
        a("refresh"), a("close");
      } catch (B) {
        v.value = B instanceof Error ? B.message : "Failed to save changes";
      } finally {
        f.value = !1;
      }
    }
    return lt(O), (B, q) => (n(), i(H, null, [
      k(Ct, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: f.value,
        error: v.value || void 0,
        onClose: q[4] || (q[4] = (X) => a("close"))
      }, {
        body: p(() => [
          m.value ? (n(), i(H, { key: 0 }, [
            t("section", Tp, [
              k(Ls, { variant: "section" }, {
                default: p(() => [
                  C("MODELS USED (" + d(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (n(), i("div", Pp, " No models used in this workflow ")) : y("", !0),
              (n(!0), i(H, null, pe(m.value.models, (X) => {
                var Le;
                return n(), i("div", {
                  key: X.hash || X.filename,
                  class: "model-card"
                }, [
                  t("div", Mp, [
                    q[6] || (q[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", Rp, d(X.filename), 1)
                  ]),
                  t("div", Dp, [
                    t("div", Lp, [
                      q[7] || (q[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Re(["value", S(X.status)])
                      }, d(F(X.status)), 3)
                    ]),
                    t("div", Up, [
                      t("span", Np, [
                        q[8] || (q[8] = C(" Importance: ", -1)),
                        k(zr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: q[0] || (q[0] = (ae) => h.value = !0)
                        })
                      ]),
                      k(uo, {
                        "model-value": _.value[X.filename] || X.importance,
                        options: b,
                        "onUpdate:modelValue": (ae) => le(X.filename, ae)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    X.loaded_by && X.loaded_by.length > 0 ? (n(), i("div", Op, [
                      q[9] || (q[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", Ap, [
                        (n(!0), i(H, null, pe(V(X), (ae, de) => (n(), i("div", {
                          key: `${ae.node_id}-${de}`,
                          class: "node-reference"
                        }, d(ae.node_type) + " (Node #" + d(ae.node_id) + ") ", 1))), 128)),
                        X.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (ae) => I(X.hash || X.filename)
                        }, d(G(X.hash || X.filename) ? "▼ Show less" : `▶ View all (${X.loaded_by.length})`), 9, zp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    X.size_mb ? (n(), i("div", Vp, [
                      q[10] || (q[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", Fp, d(X.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    X.has_category_mismatch ? (n(), i("div", Bp, [
                      q[13] || (q[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", Wp, [
                        q[11] || (q[11] = C(" In ", -1)),
                        t("code", null, d(X.actual_category) + "/", 1),
                        q[12] || (q[12] = C(" but loader needs ", -1)),
                        t("code", null, d((Le = X.expected_categories) == null ? void 0 : Le[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  X.status !== "available" ? (n(), i("div", Gp, [
                    X.status === "downloadable" ? (n(), U(Ee, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: q[1] || (q[1] = (ae) => a("resolve"))
                    }, {
                      default: p(() => [...q[14] || (q[14] = [
                        C(" Download ", -1)
                      ])]),
                      _: 1
                    })) : X.status === "category_mismatch" && X.file_path ? (n(), U(Ee, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => ne(X.file_path)
                    }, {
                      default: p(() => [...q[15] || (q[15] = [
                        C(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : X.status !== "path_mismatch" ? (n(), U(Ee, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: q[2] || (q[2] = (ae) => a("resolve"))
                    }, {
                      default: p(() => [...q[16] || (q[16] = [
                        C(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            t("section", jp, [
              k(Ls, { variant: "section" }, {
                default: p(() => [
                  C("NODES USED (" + d(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (n(), i("div", Hp, " No custom nodes used in this workflow ")) : y("", !0),
              (n(!0), i(H, null, pe(m.value.nodes, (X, Le) => (n(), i("div", {
                key: `${X.name}-${X.status}-${Le}`,
                class: "node-item"
              }, [
                t("span", {
                  class: Re(["node-status", E(X.status)])
                }, d(P(X.status)), 3),
                t("div", Kp, [
                  t("div", qp, [
                    t("span", Yp, d(X.name), 1),
                    t("span", Jp, d(D(X.status)), 1),
                    X.version ? (n(), i("span", Qp, "v" + d(X.version), 1)) : y("", !0),
                    X.status === "uninstallable" && X.package_id && !x.value.has(X.package_id) ? (n(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (ae) => K(X)
                    }, " Install ", 8, Xp)) : X.status === "uninstallable" && X.package_id && x.value.has(X.package_id) ? (n(), i("span", Zp, " Queued ")) : y("", !0)
                  ]),
                  X.guidance ? (n(), i("div", eg, d(X.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: p(() => [
          k(Ee, {
            variant: "secondary",
            onClick: q[3] || (q[3] = (X) => a("close"))
          }, {
            default: p(() => [...q[17] || (q[17] = [
              C(" Close ", -1)
            ])]),
            _: 1
          }),
          g.value ? (n(), U(Ee, {
            key: 0,
            variant: "primary",
            onClick: j
          }, {
            default: p(() => [...q[18] || (q[18] = [
              C(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      k(hs, {
        show: h.value,
        title: "Model Importance Levels",
        onClose: q[5] || (q[5] = (X) => h.value = !1)
      }, {
        content: p(() => [...q[19] || (q[19] = [
          t("ul", { class: "importance-info-list" }, [
            t("li", null, [
              t("strong", null, "Required"),
              C(" — Must have for workflow to run")
            ]),
            t("li", null, [
              t("strong", null, "Flexible"),
              C(" — Workflow adapts if missing")
            ]),
            t("li", null, [
              t("strong", null, "Optional"),
              C(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), sg = /* @__PURE__ */ ke(tg, [["__scopeId", "data-v-543076d9"]]), og = ["type", "value", "placeholder", "disabled"], ng = {
  key: 0,
  class: "base-input-error"
}, ag = /* @__PURE__ */ we({
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
      class: Re(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Re(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          o[1] || (o[1] = as((a) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = as((a) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, og),
      e.error ? (n(), i("span", ng, d(e.error), 1)) : y("", !0)
    ], 2));
  }
}), ot = /* @__PURE__ */ ke(ag, [["__scopeId", "data-v-9ba02cdc"]]), lg = { class: "base-textarea-wrapper" }, ig = ["value", "rows", "placeholder", "disabled", "maxlength"], rg = {
  key: 0,
  class: "base-textarea-count"
}, ug = /* @__PURE__ */ we({
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
    return (r, u) => (n(), i("div", lg, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: u[0] || (u[0] = (c) => r.$emit("update:modelValue", c.target.value)),
        onKeydown: [
          u[1] || (u[1] = as(gt((c) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = as(gt((c) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          as(l, ["enter"])
        ]
      }, null, 40, ig),
      e.showCharCount && e.maxLength ? (n(), i("div", rg, d(e.modelValue.length) + " / " + d(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), yn = /* @__PURE__ */ ke(ug, [["__scopeId", "data-v-c6d16c93"]]), cg = ["for"], dg = {
  key: 0,
  class: "base-form-field-required"
}, mg = { class: "base-form-field-input" }, fg = {
  key: 1,
  class: "base-form-field-error"
}, vg = {
  key: 2,
  class: "base-form-field-hint"
}, pg = /* @__PURE__ */ we({
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
    const s = e, o = z(() => s.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (a, l) => (n(), i("div", {
      class: Re(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        C(d(e.label) + " ", 1),
        e.required ? (n(), i("span", dg, "*")) : y("", !0)
      ], 8, cg)) : y("", !0),
      t("div", mg, [
        nt(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", fg, d(e.error), 1)) : e.hint ? (n(), i("span", vg, d(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), it = /* @__PURE__ */ ke(pg, [["__scopeId", "data-v-9a1cf296"]]), gg = { class: "contract-meta" }, hg = { class: "contract-summary" }, yg = { class: "summary-pill" }, wg = { class: "summary-pill" }, _g = { class: "summary-pill" }, kg = { class: "contract-meta-grid" }, bg = { class: "contract-layout" }, $g = { class: "contract-column" }, Cg = { class: "section-header" }, xg = {
  key: 0,
  class: "empty-message"
}, Sg = { class: "item-card-header" }, Ig = { class: "item-card-title" }, Eg = { class: "item-grid" }, Tg = { class: "contract-column" }, Pg = { class: "section-header" }, Mg = {
  key: 0,
  class: "empty-message"
}, Rg = { class: "item-card-header" }, Dg = { class: "item-card-title" }, Lg = { class: "item-grid" }, Ug = /* @__PURE__ */ we({
  __name: "WorkflowContractModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowContract: l, saveWorkflowContract: r, deleteWorkflowContract: u } = ut(), c = $(!1), m = $(!1), f = $(!1), v = $(null), g = $(null), _ = $(null), h = [
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
    ], x = z(() => {
      var K;
      return ((K = g.value) == null ? void 0 : K.contract_summary.has_contract) === !0;
    }), b = z(() => {
      if (!_.value)
        return { inputs: [], outputs: [] };
      const K = _.value.default_contract || "default";
      return _.value.contracts[K] || (_.value.contracts[K] = { inputs: [], outputs: [] }), _.value.contracts[K];
    }), S = z(() => {
      var j;
      const K = ((j = g.value) == null ? void 0 : j.contract_summary.status) ?? "none";
      return K === "valid" ? "Valid Contract" : K === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function F(K) {
      return K ? JSON.parse(JSON.stringify(K)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function E(K) {
      if (!_.value) return;
      const j = K.trim() || "default";
      _.value.default_contract = j, _.value.contracts[j] || (_.value.contracts[j] = { inputs: [], outputs: [] });
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
    function D() {
      b.value.outputs.push({
        name: "",
        type: "image",
        node_id: "",
        selector: "primary"
      });
    }
    function V(K) {
      b.value.inputs.splice(K, 1);
    }
    function G(K) {
      b.value.outputs.splice(K, 1);
    }
    async function I() {
      c.value = !0, v.value = null;
      try {
        g.value = await l(o.workflowName), _.value = F(g.value.execution_contract);
      } catch (K) {
        v.value = K instanceof Error ? K.message : "Failed to load workflow contract";
      } finally {
        c.value = !1;
      }
    }
    async function O() {
      if (_.value) {
        m.value = !0, v.value = null;
        try {
          g.value = await r(o.workflowName, _.value), _.value = F(g.value.execution_contract), a("refresh");
        } catch (K) {
          v.value = K instanceof Error ? K.message : "Failed to save workflow contract";
        } finally {
          m.value = !1;
        }
      }
    }
    async function le() {
      f.value = !0, v.value = null;
      try {
        await u(o.workflowName), await I(), a("refresh");
      } catch (K) {
        v.value = K instanceof Error ? K.message : "Failed to delete workflow contract";
      } finally {
        f.value = !1;
      }
    }
    function ne() {
      window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: o.workflowName }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel")), a("close");
    }
    return lt(I), (K, j) => (n(), U(Ct, {
      title: `WORKFLOW CONTRACT: ${e.workflowName}`,
      size: "xl",
      loading: c.value,
      error: v.value || void 0,
      "fixed-height": "",
      onClose: j[5] || (j[5] = (B) => a("close"))
    }, {
      body: p(() => [
        _.value ? (n(), i(H, { key: 0 }, [
          t("section", gg, [
            t("div", hg, [
              t("span", yg, d(S.value), 1),
              t("span", wg, d(b.value.inputs.length) + " input" + d(b.value.inputs.length === 1 ? "" : "s"), 1),
              t("span", _g, d(b.value.outputs.length) + " output" + d(b.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            t("div", kg, [
              k(it, { label: "Default Contract" }, {
                default: p(() => [
                  k(ot, {
                    "model-value": _.value.default_contract,
                    "full-width": "",
                    "onUpdate:modelValue": E
                  }, null, 8, ["model-value"])
                ]),
                _: 1
              }),
              k(it, { label: "Display Name" }, {
                default: p(() => [
                  k(ot, {
                    modelValue: b.value.display_name,
                    "onUpdate:modelValue": j[0] || (j[0] = (B) => b.value.display_name = B),
                    "full-width": ""
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            k(it, { label: "Description" }, {
              default: p(() => [
                k(yn, {
                  modelValue: b.value.description,
                  "onUpdate:modelValue": j[1] || (j[1] = (B) => b.value.description = B),
                  rows: 2,
                  placeholder: "Optional description for this contract"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          t("section", bg, [
            t("div", $g, [
              t("div", Cg, [
                k(Ls, { variant: "section" }, {
                  default: p(() => [...j[6] || (j[6] = [
                    C("INPUTS", -1)
                  ])]),
                  _: 1
                }),
                k(Ee, {
                  size: "sm",
                  variant: "secondary",
                  onClick: j[2] || (j[2] = (B) => P())
                }, {
                  default: p(() => [...j[7] || (j[7] = [
                    C(" Add Input ", -1)
                  ])]),
                  _: 1
                })
              ]),
              b.value.inputs.length ? y("", !0) : (n(), i("div", xg, " No inputs configured. ")),
              (n(!0), i(H, null, pe(b.value.inputs, (B, q) => (n(), i("div", {
                key: `input-${q}`,
                class: "item-card"
              }, [
                t("div", Sg, [
                  t("div", Ig, "Input " + d(q + 1), 1),
                  k(Ee, {
                    size: "sm",
                    variant: "ghost",
                    onClick: (X) => V(q)
                  }, {
                    default: p(() => [...j[8] || (j[8] = [
                      C(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                t("div", Eg, [
                  k(it, { label: "Name" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: B.name,
                        "onUpdate:modelValue": (X) => B.name = X,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Display Name" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: B.display_name,
                        "onUpdate:modelValue": (X) => B.display_name = X,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Type" }, {
                    default: p(() => [
                      k(uo, {
                        "model-value": B.type,
                        options: h,
                        "full-width": "",
                        "onUpdate:modelValue": (X) => B.type = X
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Required" }, {
                    default: p(() => [
                      k(uo, {
                        "model-value": B.required ? "true" : "false",
                        options: w,
                        "full-width": "",
                        "onUpdate:modelValue": (X) => B.required = X === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Node ID" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: B.node_id,
                        "onUpdate:modelValue": (X) => B.node_id = X,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Widget Index" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: B.widget_idx,
                        "onUpdate:modelValue": (X) => B.widget_idx = X,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Field Key" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: B.field_key,
                        "onUpdate:modelValue": (X) => B.field_key = X,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Default" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: B.default,
                        "onUpdate:modelValue": (X) => B.default = X,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])
              ]))), 128))
            ]),
            t("div", Tg, [
              t("div", Pg, [
                k(Ls, { variant: "section" }, {
                  default: p(() => [...j[9] || (j[9] = [
                    C("OUTPUTS", -1)
                  ])]),
                  _: 1
                }),
                k(Ee, {
                  size: "sm",
                  variant: "secondary",
                  onClick: j[3] || (j[3] = (B) => D())
                }, {
                  default: p(() => [...j[10] || (j[10] = [
                    C(" Add Output ", -1)
                  ])]),
                  _: 1
                })
              ]),
              b.value.outputs.length ? y("", !0) : (n(), i("div", Mg, " No outputs configured. ")),
              (n(!0), i(H, null, pe(b.value.outputs, (B, q) => (n(), i("div", {
                key: `output-${q}`,
                class: "item-card"
              }, [
                t("div", Rg, [
                  t("div", Dg, "Output " + d(q + 1), 1),
                  k(Ee, {
                    size: "sm",
                    variant: "ghost",
                    onClick: (X) => G(q)
                  }, {
                    default: p(() => [...j[11] || (j[11] = [
                      C(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                t("div", Lg, [
                  k(it, { label: "Name" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: B.name,
                        "onUpdate:modelValue": (X) => B.name = X,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Display Name" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: B.display_name,
                        "onUpdate:modelValue": (X) => B.display_name = X,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Type" }, {
                    default: p(() => [
                      k(uo, {
                        "model-value": B.type,
                        options: h,
                        "full-width": "",
                        "onUpdate:modelValue": (X) => B.type = X
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Node ID" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: B.node_id,
                        "onUpdate:modelValue": (X) => B.node_id = X,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Selector" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: B.selector,
                        "onUpdate:modelValue": (X) => B.selector = X,
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
      footer: p(() => [
        k(Ee, {
          variant: "secondary",
          onClick: ne
        }, {
          default: p(() => [...j[12] || (j[12] = [
            C(" Open I/O Mapping Mode ", -1)
          ])]),
          _: 1
        }),
        k(Ee, {
          variant: "secondary",
          onClick: j[4] || (j[4] = (B) => a("close"))
        }, {
          default: p(() => [...j[13] || (j[13] = [
            C(" Close ", -1)
          ])]),
          _: 1
        }),
        k(Ee, {
          variant: "danger",
          disabled: !x.value,
          loading: f.value,
          onClick: le
        }, {
          default: p(() => [...j[14] || (j[14] = [
            C(" Delete Contract ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"]),
        k(Ee, {
          variant: "primary",
          loading: m.value,
          onClick: O
        }, {
          default: p(() => [...j[15] || (j[15] = [
            C(" Save Contract ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Ng = /* @__PURE__ */ ke(Ug, [["__scopeId", "data-v-f7a05358"]]), rt = Qs({
  items: [],
  status: "idle"
});
let $s = null;
function Wr() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Da(e) {
  return rt.items.find((s) => s.id === e);
}
async function Io() {
  if (rt.status === "downloading") return;
  const e = rt.items.find((s) => s.status === "queued");
  if (!e) {
    rt.status = "idle";
    return;
  }
  rt.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Og(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    rt.status = "idle", Io();
  }
}
async function Og(e) {
  return new Promise((s, o) => {
    $s && ($s.close(), $s = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    $s = l;
    let r = Date.now(), u = 0, c = Date.now(), m = !1;
    const f = 2e3, v = window.setInterval(() => {
      m || Date.now() - c > f && (e.speed = 0, e.eta = 0);
    }, 250), g = () => {
      window.clearInterval(v);
    };
    l.onmessage = (_) => {
      try {
        const h = JSON.parse(_.data);
        switch (h.type) {
          case "progress":
            e.downloaded = h.downloaded || 0, e.size = h.total || e.size, c = Date.now();
            const w = c, x = (w - r) / 1e3, b = e.downloaded - u;
            if (b > 0 && x > 0)
              if (e.speed = b / x, r = w, u = e.downloaded, e.speed > 0 && e.size > 0) {
                const S = e.size - e.downloaded;
                e.eta = S / e.speed;
              } else
                e.eta = 0;
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            m = !0, g(), l.close(), $s = null, s();
            break;
          case "error":
            m = !0, g(), l.close(), $s = null, o(new Error(h.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      g(), l.close(), $s = null, m || o(new Error("Connection lost"));
    };
  });
}
async function Ag() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (rt.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const a = {
        id: Wr(),
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
    console.log(`[ComfyGit] Loaded ${s.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function zo() {
  function e(b) {
    for (const S of b) {
      if (rt.items.some(
        (P) => P.url === S.url && P.targetPath === S.targetPath && ["queued", "downloading", "paused", "completed"].includes(P.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${S.filename}`);
        continue;
      }
      const E = {
        id: Wr(),
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
      rt.items.push(E);
    }
    rt.status === "idle" && Io();
  }
  async function s(b) {
    const S = Da(b);
    if (S) {
      if (S.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(S.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        $s && ($s.close(), $s = null), S.status = "failed", S.error = "Cancelled by user", rt.status = "idle", Io();
      } else if (S.status === "queued") {
        const F = rt.items.findIndex((E) => E.id === b);
        F >= 0 && rt.items.splice(F, 1);
      }
    }
  }
  function o(b) {
    const S = Da(b);
    !S || S.status !== "failed" || (S.status = "queued", S.error = void 0, S.progress = 0, S.downloaded = 0, rt.status === "idle" && Io());
  }
  function a(b) {
    const S = Da(b);
    !S || S.status !== "paused" || (S.status = "queued", rt.status === "idle" && Io());
  }
  function l() {
    const b = rt.items.filter((S) => S.status === "paused");
    for (const S of b)
      S.status = "queued";
    rt.status === "idle" && Io();
  }
  function r(b) {
    const S = rt.items.findIndex((F) => F.id === b);
    S >= 0 && ["completed", "failed", "paused"].includes(rt.items[S].status) && rt.items.splice(S, 1);
  }
  function u() {
    rt.items = rt.items.filter((b) => b.status !== "completed");
  }
  function c() {
    rt.items = rt.items.filter((b) => b.status !== "failed");
  }
  const m = z(
    () => rt.items.find((b) => b.status === "downloading")
  ), f = z(
    () => rt.items.filter((b) => b.status === "queued")
  ), v = z(
    () => rt.items.filter((b) => b.status === "completed")
  ), g = z(
    () => rt.items.filter((b) => b.status === "failed")
  ), _ = z(
    () => rt.items.filter((b) => b.status === "paused")
  ), h = z(() => rt.items.length > 0), w = z(
    () => rt.items.filter((b) => b.status === "queued" || b.status === "downloading").length
  ), x = z(
    () => rt.items.some((b) => b.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Gn(rt),
    // Computed
    currentDownload: m,
    queuedItems: f,
    completedItems: v,
    failedItems: g,
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
    clearCompleted: u,
    clearFailed: c,
    loadPendingDownloads: Ag
  };
}
function Gr() {
  const e = $(null), s = $(null), o = $([]), a = $([]), l = $(!1), r = $(null);
  async function u(F, E) {
    var D;
    if (!((D = window.app) != null && D.api))
      throw new Error("ComfyUI API not available");
    const P = await window.app.api.fetchApi(F, E);
    if (!P.ok) {
      const V = await P.json().catch(() => ({})), G = V.error || V.message || `Request failed: ${P.status}`;
      throw new Error(G);
    }
    return P.json();
  }
  async function c(F) {
    l.value = !0, r.value = null;
    try {
      let E;
      return So() || (E = await u(
        `/v2/comfygit/workflow/${F}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), E.nodes.version_gated = E.nodes.version_gated || [], E.nodes.uninstallable = E.nodes.uninstallable || [], E.node_guidance = E.node_guidance || {}, E.package_aliases = E.package_aliases || {}, e.value = E, E;
    } catch (E) {
      const P = E instanceof Error ? E.message : "Unknown error occurred";
      throw r.value = P, E;
    } finally {
      l.value = !1;
    }
  }
  async function m(F, E, P, D) {
    l.value = !0, r.value = null;
    try {
      let V;
      if (!So()) {
        const G = Object.fromEntries(E), I = Object.fromEntries(P), O = D ? Array.from(D) : [];
        V = await u(
          `/v2/comfygit/workflow/${F}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: G,
              model_choices: I,
              skipped_packages: O
            })
          }
        );
      }
      return s.value = V, V;
    } catch (V) {
      const G = V instanceof Error ? V.message : "Unknown error occurred";
      throw r.value = G, V;
    } finally {
      l.value = !1;
    }
  }
  async function f(F, E = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return So() || (P = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: F, limit: E })
        }
      )), o.value = P.results, P.results;
    } catch (P) {
      const D = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = D, P;
    } finally {
      l.value = !1;
    }
  }
  async function v(F, E = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return So() || (P = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: F, limit: E })
        }
      )), a.value = P.results, P.results;
    } catch (P) {
      const D = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = D, P;
    } finally {
      l.value = !1;
    }
  }
  const g = Qs({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function _() {
    g.phase = "idle", g.currentFile = void 0, g.currentFileIndex = void 0, g.totalFiles = void 0, g.bytesDownloaded = void 0, g.bytesTotal = void 0, g.completedFiles = [], g.nodesToInstall = [], g.nodesInstalled = [], g.installError = void 0, g.needsRestart = void 0, g.error = void 0, g.nodeInstallProgress = void 0;
  }
  async function h(F) {
    g.phase = "installing", g.nodesInstalled = [], g.installError = void 0, g.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return So(), await w(F);
    } catch (E) {
      const P = E instanceof Error ? E.message : "Failed to install nodes";
      throw g.installError = P, E;
    }
  }
  async function w(F) {
    var P;
    const E = await u(
      `/v2/comfygit/workflow/${F}/install`,
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
      const D = new Map(((P = E.failed) == null ? void 0 : P.map((V) => [V.node_id, V.error])) || []);
      for (let V = 0; V < g.nodesToInstall.length; V++) {
        const G = g.nodesToInstall[V], I = D.get(G);
        g.nodeInstallProgress.completedNodes.push({
          node_id: G,
          success: !I,
          error: I
        });
      }
    }
    return g.nodesInstalled = E.nodes_installed, g.needsRestart = E.nodes_installed.length > 0, E.failed && E.failed.length > 0 && (g.installError = `${E.failed.length} package(s) failed to install`), E;
  }
  async function x(F, E, P) {
    _(), g.phase = "resolving", r.value = null;
    const D = Object.fromEntries(E), V = Object.fromEntries(P);
    try {
      const G = await fetch(`/v2/comfygit/workflow/${F}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: D,
          model_choices: V
        })
      });
      if (!G.ok)
        throw new Error(`Request failed: ${G.status}`);
      if (!G.body)
        throw new Error("No response body");
      const I = G.body.getReader(), O = new TextDecoder();
      let le = "";
      for (; ; ) {
        const { done: ne, value: K } = await I.read();
        if (ne) break;
        le += O.decode(K, { stream: !0 });
        const j = le.split(`

`);
        le = j.pop() || "";
        for (const B of j) {
          if (!B.trim()) continue;
          const q = B.split(`
`);
          let X = "", Le = "";
          for (const ae of q)
            ae.startsWith("event: ") ? X = ae.slice(7) : ae.startsWith("data: ") && (Le = ae.slice(6));
          if (Le)
            try {
              const ae = JSON.parse(Le);
              b(X, ae);
            } catch (ae) {
              console.warn("Failed to parse SSE event:", ae);
            }
        }
      }
    } catch (G) {
      const I = G instanceof Error ? G.message : "Unknown error occurred";
      throw r.value = I, g.error = I, g.phase = "error", G;
    }
  }
  function b(F, E) {
    switch (F) {
      case "batch_start":
        g.phase = "downloading", g.totalFiles = E.total;
        break;
      case "file_start":
        g.currentFile = E.filename, g.currentFileIndex = E.index, g.bytesDownloaded = 0, g.bytesTotal = void 0;
        break;
      case "file_progress":
        g.bytesDownloaded = E.downloaded, g.bytesTotal = E.total;
        break;
      case "file_complete":
        g.completedFiles.push({
          filename: E.filename,
          success: E.success,
          error: E.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        g.nodesToInstall = E.nodes_to_install || [], E.download_results && (g.completedFiles = E.download_results), g.phase = "complete";
        break;
      case "error":
        g.error = E.message, g.phase = "error", r.value = E.message;
        break;
    }
  }
  function S(F, E) {
    const { addToQueue: P } = zo(), D = E.filter((V) => V.url && V.target_path).map((V) => ({
      workflow: F,
      filename: V.filename,
      url: V.url,
      targetPath: V.target_path,
      size: V.size || 0,
      type: "model"
    }));
    return D.length > 0 && P(D), D.length;
  }
  return {
    // State
    result: e,
    appliedResult: s,
    searchResults: o,
    modelSearchResults: a,
    isLoading: l,
    error: r,
    progress: g,
    // Methods
    analyzeWorkflow: c,
    applyResolution: m,
    applyResolutionWithProgress: x,
    installNodes: h,
    searchNodes: f,
    searchModels: v,
    resetProgress: _,
    queueModelDownloads: S
  };
}
const zg = { class: "resolution-stepper" }, Vg = { class: "stepper-header" }, Fg = ["onClick"], Bg = {
  key: 0,
  class: "step-icon"
}, Wg = {
  key: 1,
  class: "step-number"
}, Gg = { class: "step-label" }, jg = {
  key: 0,
  class: "step-connector"
}, Hg = { class: "stepper-content" }, Kg = /* @__PURE__ */ we({
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
        const g = o.stepStats[f];
        return g.total > 0 && g.resolved === g.total;
      }
      return o.completedSteps.includes(f);
    }
    function r(f) {
      var v;
      if ((v = o.stepStats) != null && v[f]) {
        const g = o.stepStats[f];
        return g.resolved > 0 && g.resolved < g.total;
      }
      return !1;
    }
    function u(f) {
      return l(f) ? "state-complete" : r(f) ? "state-partial" : "state-pending";
    }
    function c(f) {
      return !1;
    }
    function m(f) {
      a("step-change", f);
    }
    return (f, v) => (n(), i("div", zg, [
      t("div", Vg, [
        (n(!0), i(H, null, pe(e.steps, (g, _) => (n(), i("div", {
          key: g.id,
          class: Re(["step", {
            active: e.currentStep === g.id,
            completed: l(g.id),
            "in-progress": r(g.id),
            disabled: c(g.id)
          }]),
          onClick: (h) => m(g.id)
        }, [
          t("div", {
            class: Re(["step-indicator", u(g.id)])
          }, [
            l(g.id) ? (n(), i("span", Bg, "✓")) : (n(), i("span", Wg, d(_ + 1), 1))
          ], 2),
          t("div", Gg, d(g.label), 1),
          _ < e.steps.length - 1 ? (n(), i("div", jg)) : y("", !0)
        ], 10, Fg))), 128))
      ]),
      t("div", Hg, [
        nt(f.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), qg = /* @__PURE__ */ ke(Kg, [["__scopeId", "data-v-2a7b3af8"]]), Yg = /* @__PURE__ */ we({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = z(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), a = z(() => `confidence-${o.value}`), l = z(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, u) => (n(), i("span", {
      class: Re(["confidence-badge", a.value, e.size])
    }, d(l.value), 3));
  }
}), Zn = /* @__PURE__ */ ke(Yg, [["__scopeId", "data-v-17ec4b80"]]), Jg = { class: "node-info" }, Qg = { class: "node-info-text" }, Xg = { class: "item-body" }, Zg = {
  key: 0,
  class: "resolved-state"
}, eh = {
  key: 1,
  class: "multiple-options"
}, th = {
  key: 0,
  class: "installed-packs-section"
}, sh = { class: "installed-packs-list" }, oh = ["onClick"], nh = { class: "installed-pack-name" }, ah = { class: "installed-pack-source" }, lh = { class: "options-list" }, ih = ["onClick"], rh = ["name", "value", "checked", "onChange"], uh = { class: "option-content" }, ch = { class: "option-header" }, dh = { class: "option-package-id" }, mh = {
  key: 0,
  class: "option-title"
}, fh = { class: "option-meta" }, vh = {
  key: 0,
  class: "installed-badge"
}, ph = { class: "action-buttons" }, gh = {
  key: 2,
  class: "unresolved"
}, hh = {
  key: 0,
  class: "installed-packs-section"
}, yh = { class: "installed-packs-list" }, wh = ["onClick"], _h = { class: "installed-pack-name" }, kh = { class: "installed-pack-source" }, bh = {
  key: 1,
  class: "searching-state"
}, $h = { class: "options-list" }, Ch = ["onClick"], xh = ["name", "value"], Sh = { class: "option-content" }, Ih = { class: "option-header" }, Eh = { class: "option-package-id" }, Th = {
  key: 0,
  class: "option-description"
}, Ph = { class: "option-meta" }, Mh = {
  key: 0,
  class: "installed-badge"
}, Rh = {
  key: 3,
  class: "unresolved-message"
}, Dh = { class: "action-buttons" }, Lh = /* @__PURE__ */ we({
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
    function l(v, g = 80) {
      return v.length <= g ? v : v.slice(0, g - 3) + "...";
    }
    const r = z(() => !!o.choice);
    z(() => {
      var v;
      return (v = o.choice) == null ? void 0 : v.action;
    }), z(() => {
      var v;
      return (v = o.choice) == null ? void 0 : v.package_id;
    });
    const u = z(() => o.installedNodePacks || []), c = z(() => {
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
    return (v, g) => (n(), i("div", {
      class: Re(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      t("div", Jg, [
        t("span", Qg, [
          g[7] || (g[7] = C("Node type: ", -1)),
          t("code", null, d(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Re(["status-badge", c.value])
        }, d(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Xg, [
        r.value ? (n(), i("div", Zg, [
          k(Ee, {
            variant: "ghost",
            size: "sm",
            onClick: g[0] || (g[0] = (_) => a("clear-choice"))
          }, {
            default: p(() => [...g[8] || (g[8] = [
              C(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", eh, [
          u.value.length > 0 ? (n(), i("div", th, [
            g[9] || (g[9] = t("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            t("div", sh, [
              (n(!0), i(H, null, pe(u.value, (_) => (n(), i("button", {
                key: _.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (h) => a("installed-pack-selected", _.package_id)
              }, [
                t("span", nh, d(_.package_id), 1),
                t("span", ah, d(f(_.source)), 1)
              ], 8, oh))), 128))
            ])
          ])) : y("", !0),
          g[13] || (g[13] = t("p", { class: "options-prompt" }, "Potential matches:", -1)),
          t("div", lh, [
            (n(!0), i(H, null, pe(e.options, (_, h) => (n(), i("label", {
              key: _.package_id,
              class: Re(["option-card", { selected: e.selectedOptionIndex === h }]),
              onClick: (w) => m(h)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: h,
                checked: e.selectedOptionIndex === h,
                onChange: (w) => m(h)
              }, null, 40, rh),
              t("div", uh, [
                t("div", ch, [
                  t("span", dh, d(_.package_id), 1),
                  k(Zn, {
                    confidence: _.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                _.title && _.title !== _.package_id ? (n(), i("div", mh, d(_.title), 1)) : y("", !0),
                t("div", fh, [
                  _.is_installed ? (n(), i("span", vh, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, ih))), 128))
          ]),
          t("div", ph, [
            k(Ee, {
              variant: "secondary",
              size: "sm",
              onClick: g[1] || (g[1] = (_) => a("search"))
            }, {
              default: p(() => [...g[10] || (g[10] = [
                C(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            k(Ee, {
              variant: "secondary",
              size: "sm",
              onClick: g[2] || (g[2] = (_) => a("manual-entry"))
            }, {
              default: p(() => [...g[11] || (g[11] = [
                C(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(Ee, {
              variant: "secondary",
              size: "sm",
              onClick: g[3] || (g[3] = (_) => a("mark-optional"))
            }, {
              default: p(() => [...g[12] || (g[12] = [
                C(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", gh, [
          u.value.length > 0 ? (n(), i("div", hh, [
            g[14] || (g[14] = t("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            t("div", yh, [
              (n(!0), i(H, null, pe(u.value, (_) => (n(), i("button", {
                key: _.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (h) => a("installed-pack-selected", _.package_id)
              }, [
                t("span", _h, d(_.package_id), 1),
                t("span", kh, d(f(_.source)), 1)
              ], 8, wh))), 128))
            ])
          ])) : y("", !0),
          e.isSearching ? (n(), i("div", bh, [...g[15] || (g[15] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (n(), i(H, { key: 2 }, [
            g[16] || (g[16] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", $h, [
              (n(!0), i(H, null, pe(e.searchResults.slice(0, 5), (_, h) => (n(), i("label", {
                key: _.package_id,
                class: "option-card",
                onClick: (w) => a("search-result-selected", _)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: h
                }, null, 8, xh),
                t("div", Sh, [
                  t("div", Ih, [
                    t("span", Eh, d(_.package_id), 1),
                    k(Zn, {
                      confidence: _.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  _.description ? (n(), i("div", Th, d(l(_.description)), 1)) : y("", !0),
                  t("div", Ph, [
                    _.is_installed ? (n(), i("span", Mh, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, Ch))), 128))
            ])
          ], 64)) : (n(), i("div", Rh, [...g[17] || (g[17] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", Dh, [
            k(Ee, {
              variant: "secondary",
              size: "sm",
              onClick: g[4] || (g[4] = (_) => a("search"))
            }, {
              default: p(() => {
                var _;
                return [
                  C(d((_ = e.searchResults) != null && _.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            k(Ee, {
              variant: "secondary",
              size: "sm",
              onClick: g[5] || (g[5] = (_) => a("manual-entry"))
            }, {
              default: p(() => [...g[18] || (g[18] = [
                C(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(Ee, {
              variant: "secondary",
              size: "sm",
              onClick: g[6] || (g[6] = (_) => a("mark-optional"))
            }, {
              default: p(() => [...g[19] || (g[19] = [
                C(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Uh = /* @__PURE__ */ ke(Lh, [["__scopeId", "data-v-fb0bbf03"]]), Nh = { class: "item-navigator" }, Oh = { class: "nav-item-info" }, Ah = ["title"], zh = { class: "nav-controls" }, Vh = { class: "nav-arrows" }, Fh = ["disabled"], Bh = ["disabled"], Wh = { class: "nav-position" }, Gh = /* @__PURE__ */ we({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", Nh, [
      t("div", Oh, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, d(e.itemName), 9, Ah)
      ]),
      t("div", zh, [
        t("div", Vh, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, Fh),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, Bh)
        ]),
        t("span", Wh, d(e.currentIndex + 1) + "/" + d(e.totalItems), 1)
      ])
    ]));
  }
}), jr = /* @__PURE__ */ ke(Gh, [["__scopeId", "data-v-74af7920"]]), jh = { class: "node-resolution-step" }, Hh = {
  key: 0,
  class: "auto-resolved-section"
}, Kh = { class: "section-header" }, qh = { class: "stat-badge" }, Yh = { class: "resolved-packages-list" }, Jh = { class: "package-info" }, Qh = { class: "package-id" }, Xh = { class: "node-count" }, Zh = { class: "package-actions" }, ey = {
  key: 0,
  class: "status-badge install"
}, ty = {
  key: 1,
  class: "status-badge skip"
}, sy = ["onClick"], oy = {
  key: 1,
  class: "section-divider"
}, ny = { class: "step-header" }, ay = { class: "stat-badge" }, ly = {
  key: 1,
  class: "step-body"
}, iy = {
  key: 3,
  class: "empty-state"
}, ry = { class: "node-modal-body" }, uy = { class: "node-search-results-container" }, cy = {
  key: 0,
  class: "node-search-results"
}, dy = ["onClick"], my = { class: "node-result-header" }, fy = { class: "node-result-package-id" }, vy = {
  key: 0,
  class: "node-result-description"
}, py = {
  key: 1,
  class: "node-empty-state"
}, gy = {
  key: 2,
  class: "node-empty-state"
}, hy = {
  key: 3,
  class: "node-empty-state"
}, yy = { class: "node-manual-entry-modal" }, wy = { class: "node-modal-body" }, _y = { class: "node-modal-actions" }, ky = /* @__PURE__ */ we({
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
    const o = e, a = s, { searchNodes: l } = Gr(), r = $(0), u = $(!1), c = $(!1), m = $(""), f = $(""), v = $([]), g = $(!1), _ = $(/* @__PURE__ */ new Map()), h = $(/* @__PURE__ */ new Set()), w = $(!1);
    function x() {
      w.value && de(), w.value = !1;
    }
    const b = z(() => o.nodes[r.value]), S = z(() => o.nodes.filter((L) => o.nodeChoices.has(L.node_type)).length), F = z(() => b.value ? _.value.get(b.value.node_type) || [] : []), E = z(() => b.value ? h.value.has(b.value.node_type) : !1);
    St(b, async (L) => {
      var N;
      L && ((N = L.options) != null && N.length || _.value.has(L.node_type) || h.value.has(L.node_type) || o.nodeChoices.has(L.node_type) || await P(L.node_type));
    }, { immediate: !0 });
    async function P(L) {
      h.value.add(L);
      try {
        const N = await l(L, 5);
        _.value.set(L, N);
      } catch {
        _.value.set(L, []);
      } finally {
        h.value.delete(L);
      }
    }
    const D = z(() => o.autoResolvedPackages.filter((L) => !o.skippedPackages.has(L.package_id)).length);
    function V(L) {
      return o.skippedPackages.has(L);
    }
    function G(L) {
      a("package-skip", L);
    }
    const I = z(() => {
      var N;
      if (!b.value) return "not-found";
      const L = o.nodeChoices.get(b.value.node_type);
      if (L)
        switch (L.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (N = b.value.options) != null && N.length ? "ambiguous" : "not-found";
    }), O = z(() => {
      var N;
      if (!b.value) return;
      const L = o.nodeChoices.get(b.value.node_type);
      if (L)
        switch (L.action) {
          case "install":
            return L.package_id ? `→ ${L.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (N = b.value.options) != null && N.length ? `${b.value.options.length} matches` : "Not Found";
    });
    function le(L) {
      L >= 0 && L < o.nodes.length && (r.value = L);
    }
    function ne() {
      var L;
      for (let N = r.value + 1; N < o.nodes.length; N++) {
        const oe = o.nodes[N];
        if (!((L = o.nodeChoices) != null && L.has(oe.node_type))) {
          le(N);
          return;
        }
      }
    }
    function K() {
      b.value && (a("mark-optional", b.value.node_type), Mt(() => ne()));
    }
    function j() {
      b.value && (a("skip", b.value.node_type), Mt(() => ne()));
    }
    function B(L) {
      b.value && (a("option-selected", b.value.node_type, L), Mt(() => ne()));
    }
    function q() {
      b.value && a("clear-choice", b.value.node_type);
    }
    function X() {
      b.value && (m.value = b.value.node_type, v.value = F.value, u.value = !0, Z(m.value));
    }
    function Le() {
      f.value = "", c.value = !0;
    }
    function ae(L) {
      b.value && (a("manual-entry", b.value.node_type, L), Mt(() => ne()));
    }
    function de() {
      u.value = !1, m.value = "", v.value = [];
    }
    function ie() {
      c.value = !1, f.value = "";
    }
    let Ae = null;
    function _e() {
      Ae && clearTimeout(Ae), Ae = setTimeout(() => {
        Z(m.value);
      }, 300);
    }
    async function Z(L) {
      if (!L.trim()) {
        v.value = [];
        return;
      }
      g.value = !0;
      try {
        v.value = await l(L, 10);
      } catch {
        v.value = [];
      } finally {
        g.value = !1;
      }
    }
    function A(L) {
      b.value && (a("manual-entry", b.value.node_type, L.package_id), de(), Mt(() => ne()));
    }
    function M(L) {
      b.value && (a("manual-entry", b.value.node_type, L.package_id), Mt(() => ne()));
    }
    function se() {
      !b.value || !f.value.trim() || (a("manual-entry", b.value.node_type, f.value.trim()), ie(), Mt(() => ne()));
    }
    return (L, N) => {
      var oe, Ne;
      return n(), i("div", jh, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", Hh, [
          t("div", Kh, [
            N[6] || (N[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", qh, d(D.value) + "/" + d(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", Yh, [
            (n(!0), i(H, null, pe(e.autoResolvedPackages, (ze) => (n(), i("div", {
              key: ze.package_id,
              class: "resolved-package-item"
            }, [
              t("div", Jh, [
                t("code", Qh, d(ze.package_id), 1),
                t("span", Xh, d(ze.node_types_count) + " node type" + d(ze.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", Zh, [
                V(ze.package_id) ? (n(), i("span", ty, " SKIPPED ")) : (n(), i("span", ey, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (W) => G(ze.package_id)
                }, d(V(ze.package_id) ? "Include" : "Skip"), 9, sy)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", oy)) : y("", !0),
        e.nodes.length > 0 ? (n(), i(H, { key: 2 }, [
          t("div", ny, [
            N[7] || (N[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", ay, d(S.value) + "/" + d(e.nodes.length) + " resolved", 1)
          ]),
          b.value ? (n(), U(jr, {
            key: 0,
            "item-name": b.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: N[0] || (N[0] = (ze) => le(r.value - 1)),
            onNext: N[1] || (N[1] = (ze) => le(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          b.value ? (n(), i("div", ly, [
            k(Uh, {
              "node-type": b.value.node_type,
              "has-multiple-options": !!((oe = b.value.options) != null && oe.length),
              options: b.value.options,
              choice: (Ne = e.nodeChoices) == null ? void 0 : Ne.get(b.value.node_type),
              status: I.value,
              "status-label": O.value,
              "search-results": F.value,
              "is-searching": E.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: K,
              onSkip: j,
              onManualEntry: Le,
              onSearch: X,
              onOptionSelected: B,
              onClearChoice: q,
              onSearchResultSelected: M,
              onInstalledPackSelected: ae
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", iy, [...N[8] || (N[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (n(), U(Nt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: N[4] || (N[4] = gt((ze) => w.value = !0, ["self"])),
            onMouseup: gt(x, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: N[3] || (N[3] = (ze) => w.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                N[9] || (N[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: de
                }, "✕")
              ]),
              t("div", ry, [
                k(ot, {
                  modelValue: m.value,
                  "onUpdate:modelValue": N[2] || (N[2] = (ze) => m.value = ze),
                  placeholder: "Search by node type, package name...",
                  onInput: _e
                }, null, 8, ["modelValue"]),
                t("div", uy, [
                  v.value.length > 0 ? (n(), i("div", cy, [
                    (n(!0), i(H, null, pe(v.value, (ze) => (n(), i("div", {
                      key: ze.package_id,
                      class: "node-search-result-item",
                      onClick: (W) => A(ze)
                    }, [
                      t("div", my, [
                        t("code", fy, d(ze.package_id), 1),
                        ze.match_confidence ? (n(), U(Zn, {
                          key: 0,
                          confidence: ze.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      ze.description ? (n(), i("div", vy, d(ze.description), 1)) : y("", !0)
                    ], 8, dy))), 128))
                  ])) : g.value ? (n(), i("div", py, "Searching...")) : m.value ? (n(), i("div", gy, 'No packages found matching "' + d(m.value) + '"', 1)) : (n(), i("div", hy, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (n(), U(Nt, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: gt(ie, ["self"])
          }, [
            t("div", yy, [
              t("div", { class: "node-modal-header" }, [
                N[10] || (N[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ie
                }, "✕")
              ]),
              t("div", wy, [
                k(ot, {
                  modelValue: f.value,
                  "onUpdate:modelValue": N[5] || (N[5] = (ze) => f.value = ze),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", _y, [
                  k(Ee, {
                    variant: "secondary",
                    onClick: ie
                  }, {
                    default: p(() => [...N[11] || (N[11] = [
                      C("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(Ee, {
                    variant: "primary",
                    disabled: !f.value.trim(),
                    onClick: se
                  }, {
                    default: p(() => [...N[12] || (N[12] = [
                      C(" Add Package ", -1)
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
}), by = /* @__PURE__ */ ke(ky, [["__scopeId", "data-v-94c6a438"]]), $y = { class: "node-info" }, Cy = { class: "node-info-text" }, xy = { class: "item-body" }, Sy = {
  key: 0,
  class: "resolved-state"
}, Iy = {
  key: 1,
  class: "multiple-options"
}, Ey = { class: "options-list" }, Ty = ["onClick"], Py = ["name", "value", "checked", "onChange"], My = { class: "option-content" }, Ry = { class: "option-header" }, Dy = { class: "option-filename" }, Ly = { class: "option-meta" }, Uy = { class: "option-size" }, Ny = { class: "option-category" }, Oy = { class: "option-path" }, Ay = { class: "action-buttons" }, zy = {
  key: 2,
  class: "unresolved"
}, Vy = { class: "action-buttons" }, Fy = /* @__PURE__ */ we({
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
    const o = e, a = s, l = z(() => !!o.choice);
    z(() => {
      var m;
      return (m = o.choice) == null ? void 0 : m.action;
    }), z(() => {
      var m, f;
      return ((f = (m = o.choice) == null ? void 0 : m.selected_model) == null ? void 0 : f.filename) || "selected";
    });
    const r = z(() => {
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
    function u(m) {
      a("option-selected", m);
    }
    function c(m) {
      if (!m) return "Unknown";
      const f = m / (1024 * 1024 * 1024);
      return f >= 1 ? `${f.toFixed(2)} GB` : `${(m / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (m, f) => (n(), i("div", {
      class: Re(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", $y, [
        t("span", Cy, [
          f[7] || (f[7] = C("Used by: ", -1)),
          t("code", null, d(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Re(["status-badge", r.value])
        }, d(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", xy, [
        l.value ? (n(), i("div", Sy, [
          k(Ee, {
            variant: "ghost",
            size: "sm",
            onClick: f[0] || (f[0] = (v) => a("clear-choice"))
          }, {
            default: p(() => [...f[8] || (f[8] = [
              C(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", Iy, [
          f[12] || (f[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", Ey, [
            (n(!0), i(H, null, pe(e.options, (v, g) => (n(), i("label", {
              key: v.model.hash,
              class: Re(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (_) => u(g)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (_) => u(g)
              }, null, 40, Py),
              t("div", My, [
                t("div", Ry, [
                  t("span", Dy, d(v.model.filename), 1),
                  k(Zn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", Ly, [
                  t("span", Uy, d(c(v.model.size)), 1),
                  t("span", Ny, d(v.model.category), 1)
                ]),
                t("div", Oy, d(v.model.relative_path), 1)
              ])
            ], 10, Ty))), 128))
          ]),
          t("div", Ay, [
            k(Ee, {
              variant: "ghost",
              size: "sm",
              onClick: f[1] || (f[1] = (v) => a("search"))
            }, {
              default: p(() => [...f[9] || (f[9] = [
                C(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(Ee, {
              variant: "ghost",
              size: "sm",
              onClick: f[2] || (f[2] = (v) => a("download-url"))
            }, {
              default: p(() => [...f[10] || (f[10] = [
                C(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(Ee, {
              variant: "secondary",
              size: "sm",
              onClick: f[3] || (f[3] = (v) => a("mark-optional"))
            }, {
              default: p(() => [...f[11] || (f[11] = [
                C(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", zy, [
          f[16] || (f[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", Vy, [
            k(Ee, {
              variant: "primary",
              size: "sm",
              onClick: f[4] || (f[4] = (v) => a("search"))
            }, {
              default: p(() => [...f[13] || (f[13] = [
                C(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(Ee, {
              variant: "secondary",
              size: "sm",
              onClick: f[5] || (f[5] = (v) => a("download-url"))
            }, {
              default: p(() => [...f[14] || (f[14] = [
                C(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(Ee, {
              variant: "secondary",
              size: "sm",
              onClick: f[6] || (f[6] = (v) => a("mark-optional"))
            }, {
              default: p(() => [...f[15] || (f[15] = [
                C(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), By = /* @__PURE__ */ ke(Fy, [["__scopeId", "data-v-8a82fefa"]]), Wy = { class: "model-resolution-step" }, Gy = { class: "step-header" }, jy = { class: "step-info" }, Hy = { class: "step-title" }, Ky = { class: "step-description" }, qy = { class: "stat-badge" }, Yy = {
  key: 1,
  class: "step-body"
}, Jy = {
  key: 2,
  class: "empty-state"
}, Qy = { class: "model-search-modal" }, Xy = { class: "model-modal-body" }, Zy = {
  key: 0,
  class: "model-search-results"
}, e1 = ["onClick"], t1 = { class: "model-result-header" }, s1 = { class: "model-result-filename" }, o1 = { class: "model-result-meta" }, n1 = { class: "model-result-category" }, a1 = { class: "model-result-size" }, l1 = {
  key: 0,
  class: "model-result-path"
}, i1 = {
  key: 1,
  class: "model-no-results"
}, r1 = {
  key: 2,
  class: "model-searching"
}, u1 = { class: "model-download-url-modal" }, c1 = { class: "model-modal-body" }, d1 = { class: "model-input-group" }, m1 = { class: "model-input-group" }, f1 = { class: "model-modal-actions" }, v1 = /* @__PURE__ */ we({
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
    function a(ae) {
      var de;
      return ae && ((de = o[ae]) == null ? void 0 : de[0]) || null;
    }
    const l = e, r = s, u = $(0), c = $(!1), m = $(!1), f = $(""), v = $(""), g = $(""), _ = $([]), h = $(!1), w = z(() => l.models[u.value]), x = z(() => l.models.some((ae) => ae.is_download_intent)), b = z(() => l.models.filter(
      (ae) => l.modelChoices.has(ae.filename) || ae.is_download_intent
    ).length), S = z(() => {
      var de;
      if (!w.value) return "";
      const ae = a((de = w.value.reference) == null ? void 0 : de.node_type);
      return ae ? `${ae}/${w.value.filename}` : "";
    }), F = z(() => {
      var de;
      if (!w.value) return "not-found";
      const ae = l.modelChoices.get(w.value.filename);
      if (ae)
        switch (ae.action) {
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
      return w.value.is_download_intent ? "download" : (de = w.value.options) != null && de.length ? "ambiguous" : "not-found";
    }), E = z(() => {
      var de, ie;
      if (!w.value) return;
      const ae = l.modelChoices.get(w.value.filename);
      if (ae)
        switch (ae.action) {
          case "select":
            return (de = ae.selected_model) != null && de.filename ? `→ ${ae.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return w.value.is_download_intent ? "Pending Download" : (ie = w.value.options) != null && ie.length ? `${w.value.options.length} matches` : "Not Found";
    });
    function P(ae) {
      ae >= 0 && ae < l.models.length && (u.value = ae);
    }
    function D() {
      var ae;
      for (let de = u.value + 1; de < l.models.length; de++) {
        const ie = l.models[de];
        if (!ie.is_download_intent && !((ae = l.modelChoices) != null && ae.has(ie.filename))) {
          P(de);
          return;
        }
      }
    }
    function V() {
      w.value && (r("mark-optional", w.value.filename), Mt(() => D()));
    }
    function G() {
      w.value && (r("skip", w.value.filename), Mt(() => D()));
    }
    function I(ae) {
      w.value && (r("option-selected", w.value.filename, ae), Mt(() => D()));
    }
    function O() {
      w.value && r("clear-choice", w.value.filename);
    }
    function le() {
      w.value && (f.value = w.value.filename, c.value = !0);
    }
    function ne() {
      w.value && (v.value = w.value.download_source || "", g.value = w.value.target_path || S.value, m.value = !0);
    }
    function K() {
      c.value = !1, f.value = "", _.value = [];
    }
    function j() {
      m.value = !1, v.value = "", g.value = "";
    }
    function B() {
      h.value = !0, setTimeout(() => {
        h.value = !1;
      }, 300);
    }
    function q(ae) {
      w.value && (K(), Mt(() => D()));
    }
    function X() {
      !w.value || !v.value.trim() || (r("download-url", w.value.filename, v.value.trim(), g.value.trim() || void 0), j(), Mt(() => D()));
    }
    function Le(ae) {
      if (!ae) return "Unknown";
      const de = ae / (1024 * 1024 * 1024);
      return de >= 1 ? `${de.toFixed(2)} GB` : `${(ae / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (ae, de) => {
      var ie, Ae, _e;
      return n(), i("div", Wy, [
        t("div", Gy, [
          t("div", jy, [
            t("h3", Hy, d(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", Ky, d(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", qy, d(b.value) + "/" + d(e.models.length) + " resolved", 1)
        ]),
        w.value ? (n(), U(jr, {
          key: 0,
          "item-name": w.value.filename,
          "current-index": u.value,
          "total-items": e.models.length,
          onPrev: de[0] || (de[0] = (Z) => P(u.value - 1)),
          onNext: de[1] || (de[1] = (Z) => P(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        w.value ? (n(), i("div", Yy, [
          k(By, {
            filename: w.value.filename,
            "node-type": ((ie = w.value.reference) == null ? void 0 : ie.node_type) || "Unknown",
            "has-multiple-options": !!((Ae = w.value.options) != null && Ae.length),
            options: w.value.options,
            choice: (_e = e.modelChoices) == null ? void 0 : _e.get(w.value.filename),
            status: F.value,
            "status-label": E.value,
            onMarkOptional: V,
            onSkip: G,
            onDownloadUrl: ne,
            onSearch: le,
            onOptionSelected: I,
            onClearChoice: O
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", Jy, [...de[5] || (de[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (n(), U(Nt, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: gt(K, ["self"])
          }, [
            t("div", Qy, [
              t("div", { class: "model-modal-header" }, [
                de[6] || (de[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: K
                }, "✕")
              ]),
              t("div", Xy, [
                k(ot, {
                  modelValue: f.value,
                  "onUpdate:modelValue": de[2] || (de[2] = (Z) => f.value = Z),
                  placeholder: "Search by filename, category...",
                  onInput: B
                }, null, 8, ["modelValue"]),
                _.value.length > 0 ? (n(), i("div", Zy, [
                  (n(!0), i(H, null, pe(_.value, (Z) => (n(), i("div", {
                    key: Z.hash,
                    class: "model-search-result-item",
                    onClick: (A) => q()
                  }, [
                    t("div", t1, [
                      t("code", s1, d(Z.filename), 1)
                    ]),
                    t("div", o1, [
                      t("span", n1, d(Z.category), 1),
                      t("span", a1, d(Le(Z.size)), 1)
                    ]),
                    Z.relative_path ? (n(), i("div", l1, d(Z.relative_path), 1)) : y("", !0)
                  ], 8, e1))), 128))
                ])) : f.value && !h.value ? (n(), i("div", i1, ' No models found matching "' + d(f.value) + '" ', 1)) : y("", !0),
                h.value ? (n(), i("div", r1, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (n(), U(Nt, { to: "body" }, [
          m.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: gt(j, ["self"])
          }, [
            t("div", u1, [
              t("div", { class: "model-modal-header" }, [
                de[7] || (de[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: j
                }, "✕")
              ]),
              t("div", c1, [
                t("div", d1, [
                  de[8] || (de[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  k(ot, {
                    modelValue: v.value,
                    "onUpdate:modelValue": de[3] || (de[3] = (Z) => v.value = Z),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", m1, [
                  de[9] || (de[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  k(ot, {
                    modelValue: g.value,
                    "onUpdate:modelValue": de[4] || (de[4] = (Z) => g.value = Z),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", f1, [
                  k(Ee, {
                    variant: "secondary",
                    onClick: j
                  }, {
                    default: p(() => [...de[10] || (de[10] = [
                      C("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(Ee, {
                    variant: "primary",
                    disabled: !v.value.trim() || !g.value.trim(),
                    onClick: X
                  }, {
                    default: p(() => [...de[11] || (de[11] = [
                      C(" Queue Download ", -1)
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
}), p1 = /* @__PURE__ */ ke(v1, [["__scopeId", "data-v-5c700bfa"]]), g1 = { class: "applying-step" }, h1 = {
  key: 0,
  class: "phase-content"
}, y1 = {
  key: 1,
  class: "phase-content"
}, w1 = { class: "phase-description" }, _1 = { class: "overall-progress" }, k1 = { class: "progress-bar" }, b1 = { class: "progress-label" }, $1 = { class: "install-list" }, C1 = { class: "install-icon" }, x1 = { key: 0 }, S1 = {
  key: 1,
  class: "spinner"
}, I1 = { key: 2 }, E1 = { key: 3 }, T1 = {
  key: 0,
  class: "install-error"
}, P1 = {
  key: 2,
  class: "phase-content"
}, M1 = { class: "phase-header" }, R1 = { class: "phase-title" }, D1 = { class: "completion-summary" }, L1 = {
  key: 0,
  class: "summary-item success"
}, U1 = { class: "summary-text" }, N1 = {
  key: 1,
  class: "summary-item error"
}, O1 = { class: "summary-text" }, A1 = {
  key: 2,
  class: "failed-list"
}, z1 = { class: "failed-node-id" }, V1 = { class: "failed-error" }, F1 = {
  key: 4,
  class: "summary-item success"
}, B1 = {
  key: 5,
  class: "restart-prompt"
}, W1 = {
  key: 3,
  class: "phase-content error"
}, G1 = { class: "error-message" }, j1 = /* @__PURE__ */ we({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = z(() => {
      var f, v;
      const c = ((f = s.progress.nodeInstallProgress) == null ? void 0 : f.totalNodes) || s.progress.nodesToInstall.length;
      if (!c) return 0;
      const m = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(m / c * 100);
    }), a = z(() => {
      var c;
      return ((c = s.progress.nodeInstallProgress) == null ? void 0 : c.completedNodes.filter((m) => !m.success)) || [];
    }), l = z(() => a.value.length > 0);
    function r(c, m) {
      var v, g;
      const f = (v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.find((_) => _.node_id === c);
      return f ? f.success ? "complete" : "failed" : ((g = s.progress.nodeInstallProgress) == null ? void 0 : g.currentIndex) === m ? "installing" : "pending";
    }
    function u(c) {
      var m, f;
      return (f = (m = s.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.find((v) => v.node_id === c)) == null ? void 0 : f.error;
    }
    return (c, m) => {
      var f, v, g, _;
      return n(), i("div", g1, [
        e.progress.phase === "resolving" ? (n(), i("div", h1, [...m[2] || (m[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (n(), i("div", y1, [
          m[3] || (m[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", w1, " Installing " + d((((f = e.progress.nodeInstallProgress) == null ? void 0 : f.currentIndex) ?? 0) + 1) + " of " + d(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", _1, [
            t("div", k1, [
              t("div", {
                class: "progress-fill",
                style: es({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", b1, d(((g = e.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0) + " / " + d(((_ = e.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", $1, [
            (n(!0), i(H, null, pe(e.progress.nodesToInstall, (h, w) => (n(), i("div", {
              key: h,
              class: Re(["install-item", r(h, w)])
            }, [
              t("span", C1, [
                r(h, w) === "pending" ? (n(), i("span", x1, "○")) : r(h, w) === "installing" ? (n(), i("span", S1, "◌")) : r(h, w) === "complete" ? (n(), i("span", I1, "✓")) : r(h, w) === "failed" ? (n(), i("span", E1, "✗")) : y("", !0)
              ]),
              t("code", null, d(h), 1),
              u(h) ? (n(), i("span", T1, d(u(h)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", P1, [
          t("div", M1, [
            t("span", {
              class: Re(["phase-icon", l.value ? "warning" : "success"])
            }, d(l.value ? "⚠" : "✓"), 3),
            t("h3", R1, d(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", D1, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", L1, [
              m[4] || (m[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", U1, d(e.progress.nodesInstalled.length) + " node package" + d(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", N1, [
              m[5] || (m[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", O1, d(a.value.length) + " package" + d(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", A1, [
              (n(!0), i(H, null, pe(a.value, (h) => (n(), i("div", {
                key: h.node_id,
                class: "failed-item"
              }, [
                t("code", z1, d(h.node_id), 1),
                t("span", V1, d(h.error), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: m[0] || (m[0] = (h) => c.$emit("retry-failed"))
            }, " Retry Failed (" + d(a.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (n(), i("div", F1, [...m[6] || (m[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            m[8] || (m[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (n(), i("div", B1, [
              m[7] || (m[7] = t("div", { class: "restart-warning" }, [
                t("span", { class: "warning-icon" }, "⚠"),
                t("div", { class: "warning-content" }, [
                  t("strong", null, "Restart Required"),
                  t("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              t("button", {
                class: "restart-button",
                onClick: m[1] || (m[1] = (h) => c.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (n(), i("div", W1, [
          m[9] || (m[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", G1, d(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), H1 = /* @__PURE__ */ ke(j1, [["__scopeId", "data-v-5efaae58"]]), K1 = {
  key: 0,
  class: "loading-state"
}, q1 = {
  key: 1,
  class: "wizard-content"
}, Y1 = {
  key: 0,
  class: "step-content"
}, J1 = { class: "analysis-summary" }, Q1 = { class: "analysis-header" }, X1 = { class: "summary-description" }, Z1 = { class: "stats-grid" }, ew = { class: "stat-card" }, tw = { class: "stat-items" }, sw = {
  key: 0,
  class: "stat-item success"
}, ow = { class: "stat-count" }, nw = {
  key: 1,
  class: "stat-item info"
}, aw = { class: "stat-count" }, lw = {
  key: 2,
  class: "stat-item warning"
}, iw = { class: "stat-count" }, rw = {
  key: 3,
  class: "stat-item warning"
}, uw = { class: "stat-count" }, cw = {
  key: 4,
  class: "stat-item warning"
}, dw = { class: "stat-count" }, mw = {
  key: 5,
  class: "stat-item error"
}, fw = { class: "stat-count" }, vw = { class: "stat-card" }, pw = { class: "stat-items" }, gw = { class: "stat-item success" }, hw = { class: "stat-count" }, yw = {
  key: 0,
  class: "stat-item info"
}, ww = { class: "stat-count" }, _w = {
  key: 1,
  class: "stat-item warning"
}, kw = { class: "stat-count" }, bw = {
  key: 2,
  class: "stat-item warning"
}, $w = { class: "stat-count" }, Cw = {
  key: 3,
  class: "stat-item error"
}, xw = { class: "stat-count" }, Sw = {
  key: 0,
  class: "status-message warning"
}, Iw = { class: "status-text" }, Ew = {
  key: 1,
  class: "status-message warning"
}, Tw = { class: "status-text" }, Pw = {
  key: 2,
  class: "status-message info"
}, Mw = { class: "status-text" }, Rw = {
  key: 3,
  class: "status-message info"
}, Dw = { class: "status-text" }, Lw = {
  key: 4,
  class: "status-message info"
}, Uw = { class: "status-text" }, Nw = {
  key: 5,
  class: "status-message warning"
}, Ow = { class: "status-text" }, Aw = {
  key: 6,
  class: "status-message success"
}, zw = {
  key: 7,
  class: "category-mismatch-section"
}, Vw = { class: "mismatch-list" }, Fw = { class: "mismatch-path" }, Bw = { class: "mismatch-target" }, Ww = {
  key: 8,
  class: "category-mismatch-section"
}, Gw = { class: "mismatch-list" }, jw = { class: "mismatch-path" }, Hw = { class: "status-text" }, Kw = {
  key: 1,
  class: "step-content node-step-content"
}, qw = {
  key: 0,
  class: "community-node-section"
}, Yw = { class: "community-node-header" }, Jw = { class: "community-node-title" }, Qw = { class: "community-node-list" }, Xw = { class: "community-node-info" }, Zw = { class: "community-node-heading" }, e0 = { class: "item-name" }, t0 = { class: "community-node-package" }, s0 = { class: "community-node-meta" }, o0 = { class: "community-node-guidance" }, n0 = { key: 0 }, a0 = { class: "community-choice-status" }, l0 = { class: "community-node-actions" }, i0 = {
  key: 3,
  class: "step-content"
}, r0 = { class: "review-summary" }, u0 = { class: "review-stats" }, c0 = { class: "review-stat" }, d0 = { class: "stat-value" }, m0 = { class: "review-stat" }, f0 = { class: "stat-value" }, v0 = { class: "review-stat" }, p0 = { class: "stat-value" }, g0 = { class: "review-stat" }, h0 = { class: "stat-value" }, y0 = {
  key: 0,
  class: "review-section"
}, w0 = { class: "section-title" }, _0 = { class: "review-items" }, k0 = { class: "item-name" }, b0 = { class: "item-choice" }, $0 = {
  key: 0,
  class: "choice-badge install"
}, C0 = {
  key: 1,
  class: "choice-badge skip"
}, x0 = {
  key: 1,
  class: "review-section"
}, S0 = { class: "section-title" }, I0 = { class: "review-items" }, E0 = { class: "item-name" }, T0 = { class: "item-choice" }, P0 = {
  key: 0,
  class: "choice-badge install"
}, M0 = {
  key: 1,
  class: "choice-badge optional"
}, R0 = {
  key: 2,
  class: "choice-badge skip"
}, D0 = {
  key: 2,
  class: "review-section"
}, L0 = { class: "section-title" }, U0 = { class: "review-items" }, N0 = { class: "item-name" }, O0 = { class: "item-choice" }, A0 = {
  key: 0,
  class: "choice-badge install"
}, z0 = {
  key: 1,
  class: "choice-badge optional"
}, V0 = {
  key: 2,
  class: "choice-badge skip"
}, F0 = {
  key: 1,
  class: "choice-badge pending"
}, B0 = {
  key: 3,
  class: "review-section"
}, W0 = { class: "section-title" }, G0 = { class: "review-items download-details" }, j0 = { class: "download-info" }, H0 = { class: "item-name" }, K0 = { class: "download-meta" }, q0 = { class: "download-path" }, Y0 = ["title"], J0 = {
  key: 4,
  class: "review-section"
}, Q0 = { class: "section-title" }, X0 = { class: "review-items" }, Z0 = { class: "item-name" }, e_ = { class: "item-choice" }, t_ = {
  key: 0,
  class: "choice-badge install"
}, s_ = {
  key: 1,
  class: "choice-badge download"
}, o_ = {
  key: 2,
  class: "choice-badge optional"
}, n_ = {
  key: 3,
  class: "choice-badge skip"
}, a_ = {
  key: 4,
  class: "choice-badge skip"
}, l_ = {
  key: 1,
  class: "choice-badge download"
}, i_ = {
  key: 2,
  class: "choice-badge pending"
}, r_ = {
  key: 5,
  class: "no-choices"
}, u_ = /* @__PURE__ */ we({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, a = s, { analyzeWorkflow: l, applyResolution: r, installNodes: u, queueModelDownloads: c, progress: m, resetProgress: f } = Gr(), { loadPendingDownloads: v } = zo(), { openFileLocation: g, queueNodeInstall: _, getNodes: h } = ut(), w = $(null), x = $([]), b = $(!1), S = $(!1), F = $(null), E = $("analysis"), P = $([]), D = $(/* @__PURE__ */ new Map()), V = $(/* @__PURE__ */ new Map()), G = $(/* @__PURE__ */ new Set()), I = z(() => {
      const ue = [
        { id: "analysis", label: "Analysis" }
      ];
      return (B.value || Le.value || ae.value) && ue.push({ id: "nodes", label: "Nodes" }), q.value && ue.push({ id: "models", label: "Models" }), ue.push({ id: "review", label: "Review" }), E.value === "applying" && ue.push({ id: "applying", label: "Applying" }), ue;
    }), O = z(() => w.value ? w.value.stats.needs_user_input : !1), le = z(() => w.value ? w.value.nodes.version_gated || [] : []), ne = z(() => w.value ? w.value.nodes.uninstallable || [] : []), K = z(() => ne.value.filter((ue) => {
      var T;
      return !!((T = ue.package) != null && T.package_id);
    })), j = z(() => le.value.length > 0), B = z(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), q = z(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), X = z(() => w.value ? w.value.stats.download_intents > 0 : !1), Le = z(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), ae = z(() => K.value.length > 0), de = z(() => w.value ? w.value.nodes.resolved.length : 0), ie = z(() => w.value ? w.value.models.resolved.filter((ue) => ue.has_category_mismatch) : []), Ae = z(() => ie.value.length > 0), _e = z(() => B.value || Le.value || ae.value ? "nodes" : q.value ? "models" : "review"), Z = z(() => {
      if (!w.value) return [];
      const ue = w.value.nodes.resolved.filter((R) => !R.is_installed), T = /* @__PURE__ */ new Set();
      return ue.filter((R) => T.has(R.package.package_id) ? !1 : (T.add(R.package.package_id), !0));
    }), A = z(() => {
      if (!w.value) return [];
      const ue = w.value.nodes.resolved.filter((R) => !R.is_installed), T = /* @__PURE__ */ new Map();
      for (const R of ue) {
        const Pe = T.get(R.package.package_id);
        Pe ? Pe.node_types_count++ : T.set(R.package.package_id, {
          package_id: R.package.package_id,
          title: R.package.title,
          node_types_count: 1
        });
      }
      return Array.from(T.values());
    }), M = z(() => Z.value.filter((ue) => !G.value.has(ue.package.package_id))), se = z(() => w.value ? w.value.models.resolved.filter(
      (ue) => ue.match_type === "download_intent" || ue.match_type === "property_download_intent"
    ).map((ue) => ({
      filename: ue.reference.widget_value,
      reference: ue.reference,
      is_download_intent: !0,
      resolved_model: ue.model,
      download_source: ue.download_source,
      target_path: ue.target_path
    })) : []), L = z(() => {
      if (!w.value) return [];
      const ue = w.value.nodes.unresolved.map((R) => ({
        node_type: R.reference.node_type,
        reason: R.reason,
        is_unresolved: !0,
        options: void 0
      })), T = w.value.nodes.ambiguous.map((R) => ({
        node_type: R.reference.node_type,
        has_multiple_options: !0,
        options: R.options.map((Pe) => ({
          package_id: Pe.package.package_id,
          title: Pe.package.title,
          match_confidence: Pe.match_confidence,
          match_type: Pe.match_type,
          is_installed: Pe.is_installed
        }))
      }));
      return [...ue, ...T];
    }), N = z(() => {
      if (!w.value) return [];
      const ue = w.value.models.unresolved.map((R) => ({
        filename: R.reference.widget_value,
        reference: R.reference,
        reason: R.reason,
        is_unresolved: !0,
        options: void 0
      })), T = w.value.models.ambiguous.map((R) => ({
        filename: R.reference.widget_value,
        reference: R.reference,
        has_multiple_options: !0,
        options: R.options.map((Pe) => ({
          model: Pe.model,
          match_confidence: Pe.match_confidence,
          match_type: Pe.match_type,
          has_download_source: Pe.has_download_source
        }))
      }));
      return [...ue, ...T];
    }), oe = z(() => {
      const ue = N.value, T = se.value.map((R) => ({
        filename: R.filename,
        reference: R.reference,
        is_download_intent: !0,
        resolved_model: R.resolved_model,
        download_source: R.download_source,
        target_path: R.target_path,
        options: void 0
      }));
      return [...ue, ...T];
    }), Ne = z(() => se.value.filter((ue) => {
      const T = V.value.get(ue.filename);
      return T ? T.action === "download" : !0;
    }).map((ue) => ({
      filename: ue.filename,
      url: ue.download_source,
      target_path: ue.target_path
    })));
    function ze(ue, T = 50) {
      return ue.length <= T ? ue : ue.slice(0, T - 3) + "...";
    }
    const W = z(() => {
      let ue = M.value.length;
      for (const T of D.value.values())
        T.action === "install" && ue++;
      for (const T of V.value.values())
        T.action === "select" && ue++;
      return ue;
    }), J = z(() => {
      let ue = 0;
      for (const T of V.value.values())
        T.action === "download" && ue++;
      for (const T of se.value)
        V.value.get(T.filename) || ue++;
      return ue;
    }), re = z(() => {
      let ue = 0;
      for (const T of D.value.values())
        T.action === "optional" && ue++;
      for (const T of V.value.values())
        T.action === "optional" && ue++;
      return ue;
    }), xe = z(() => {
      let ue = G.value.size;
      for (const T of D.value.values())
        T.action === "skip" && ue++;
      for (const T of V.value.values())
        T.action === "skip" && ue++;
      for (const T of L.value)
        D.value.has(T.node_type) || ue++;
      for (const T of N.value)
        V.value.has(T.filename) || ue++;
      return ue;
    }), be = z(() => {
      const ue = {};
      if (ue.analysis = { resolved: 1, total: 1 }, B.value || ae.value) {
        const T = L.value.length, R = K.value.length, Pe = L.value.filter(
          (xt) => D.value.has(xt.node_type)
        ).length, tt = K.value.filter(
          (xt) => D.value.has(xt.reference.node_type)
        ).length, pt = T + R, st = Pe + tt;
        ue.nodes = { resolved: st, total: pt };
      }
      if (q.value) {
        const T = oe.value.length, R = oe.value.filter(
          (Pe) => V.value.has(Pe.filename) || Pe.is_download_intent
        ).length;
        ue.models = { resolved: R, total: T };
      }
      if (ue.review = { resolved: 1, total: 1 }, E.value === "applying") {
        const T = m.totalFiles || 1, R = m.completedFiles.length;
        ue.applying = { resolved: R, total: T };
      }
      return ue;
    });
    function $e(ue) {
      E.value = ue;
    }
    function De() {
      const ue = I.value.findIndex((T) => T.id === E.value);
      ue > 0 && (E.value = I.value[ue - 1].id);
    }
    function ye() {
      const ue = I.value.findIndex((T) => T.id === E.value);
      ue < I.value.length - 1 && (E.value = I.value[ue + 1].id);
    }
    function Te() {
      for (const ue of K.value) {
        const T = ue.reference.node_type;
        D.value.has(T) || me(ue, "registry");
      }
    }
    function fe(ue) {
      switch (ue) {
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
    function We(ue) {
      return ue.filter((T) => T.installed && T.tracked).filter((T) => T.name !== "comfygit-manager").map((T) => ({
        package_id: T.registry_id || T.name,
        source: T.source
      })).filter((T, R, Pe) => Pe.findIndex((tt) => tt.package_id === T.package_id) === R).sort((T, R) => {
        const Pe = fe(T.source) - fe(R.source);
        return Pe !== 0 ? Pe : T.package_id.localeCompare(R.package_id);
      });
    }
    async function Ue() {
      b.value = !0, F.value = null;
      try {
        const [ue, T] = await Promise.all([
          l(o.workflowName),
          h()
        ]);
        w.value = ue, x.value = We(T.nodes), Te();
      } catch (ue) {
        F.value = ue instanceof Error ? ue.message : "Failed to analyze workflow";
      } finally {
        b.value = !1;
      }
    }
    function ge() {
      P.value.includes("analysis") || P.value.push("analysis"), B.value || Le.value || ae.value ? E.value = "nodes" : q.value ? E.value = "models" : E.value = "review";
    }
    function Y(ue) {
      D.value.set(ue, { action: "optional" });
    }
    function Ve(ue) {
      D.value.set(ue, { action: "skip" });
    }
    function Ie(ue, T) {
      var Pe;
      const R = L.value.find((tt) => tt.node_type === ue);
      (Pe = R == null ? void 0 : R.options) != null && Pe[T] && D.value.set(ue, {
        action: "install",
        package_id: R.options[T].package_id
      });
    }
    function Ce(ue, T) {
      D.value.set(ue, {
        action: "install",
        package_id: T
      });
    }
    function Oe(ue) {
      D.value.delete(ue);
    }
    function Me(ue) {
      return D.value.get(ue);
    }
    function Q(ue) {
      const T = Me(ue);
      return T ? T.action === "optional" ? "Marked optional" : T.action === "skip" ? "Skipped" : T.action === "install" ? T.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function me(ue, T) {
      var tt;
      const R = (tt = ue.package) == null ? void 0 : tt.package_id;
      if (!R) return;
      const Pe = {
        action: "install",
        package_id: R,
        version: ue.package.latest_version || null,
        install_source: T
      };
      T === "git" && ue.package.repository && (Pe.repository = ue.package.repository), D.value.set(ue.reference.node_type, Pe);
    }
    function he(ue) {
      D.value.set(ue, { action: "optional" });
    }
    function Ke(ue) {
      D.value.set(ue, { action: "skip" });
    }
    function Fe(ue) {
      G.value.has(ue) ? G.value.delete(ue) : G.value.add(ue);
    }
    function Be(ue) {
      V.value.set(ue, { action: "optional" });
    }
    function et(ue) {
      V.value.set(ue, { action: "skip" });
    }
    function qe(ue, T) {
      var Pe;
      const R = N.value.find((tt) => tt.filename === ue);
      (Pe = R == null ? void 0 : R.options) != null && Pe[T] && V.value.set(ue, {
        action: "select",
        selected_model: R.options[T].model
      });
    }
    function vt(ue, T, R) {
      V.value.set(ue, {
        action: "download",
        url: T,
        target_path: R
      });
    }
    function dt(ue) {
      V.value.delete(ue);
    }
    async function ft(ue) {
      try {
        await g(ue);
      } catch (T) {
        F.value = T instanceof Error ? T.message : "Failed to open file location";
      }
    }
    async function Pt() {
      var ue;
      S.value = !0, F.value = null, f(), m.phase = "resolving", E.value = "applying";
      try {
        const T = await r(o.workflowName, D.value, V.value, G.value);
        T.models_to_download && T.models_to_download.length > 0 && c(o.workflowName, T.models_to_download);
        const R = K.value.map((st) => {
          const xt = Me(st.reference.node_type);
          if ((xt == null ? void 0 : xt.action) !== "install" || xt.install_source !== "git")
            return null;
          const Et = xt.repository || st.package.repository, Ge = xt.package_id || st.package.package_id;
          return !Et || !Ge ? null : {
            id: Ge,
            repository: Et,
            selectedVersion: xt.version || st.package.latest_version || "latest"
          };
        }).filter((st) => !!st), Pe = new Set(R.map((st) => st.id)), tt = [
          ...T.nodes_to_install || [],
          ...M.value.map((st) => st.package.package_id)
        ];
        m.nodesToInstall = [...new Set(tt)].filter((st) => !Pe.has(st)), m.nodesToInstall.length > 0 && await u(o.workflowName);
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
        const pt = m.installError || ((ue = m.nodeInstallProgress) == null ? void 0 : ue.completedNodes.some((st) => !st.success));
        !m.needsRestart && !pt && setTimeout(() => {
          a("refresh"), a("install"), a("close");
        }, 1500);
      } catch (T) {
        F.value = T instanceof Error ? T.message : "Failed to apply resolution", m.error = F.value, m.phase = "error";
      } finally {
        S.value = !1;
      }
    }
    function ts() {
      a("refresh"), a("restart"), a("close");
    }
    async function Ot() {
      var T;
      const ue = ((T = m.nodeInstallProgress) == null ? void 0 : T.completedNodes.filter((R) => !R.success).map((R) => R.node_id)) || [];
      if (ue.length !== 0) {
        m.phase = "installing", m.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: ue.length
        }, m.nodesToInstall = ue, m.nodesInstalled = [], m.installError = void 0;
        try {
          await u(o.workflowName), m.phase = "complete";
        } catch (R) {
          m.error = R instanceof Error ? R.message : "Retry failed", m.phase = "error";
        }
      }
    }
    return lt(Ue), (ue, T) => (n(), U(Ct, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: b.value,
      error: F.value || void 0,
      "fixed-height": !0,
      onClose: T[1] || (T[1] = (R) => a("close"))
    }, {
      body: p(() => [
        b.value && !w.value ? (n(), i("div", K1, [...T[2] || (T[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (n(), i("div", q1, [
          k(qg, {
            steps: I.value,
            "current-step": E.value,
            "completed-steps": P.value,
            "step-stats": be.value,
            onStepChange: $e
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          E.value === "analysis" ? (n(), i("div", Y1, [
            t("div", J1, [
              t("div", Q1, [
                T[3] || (T[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", X1, " Found " + d(w.value.stats.total_nodes) + " nodes and " + d(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", Z1, [
                t("div", ew, [
                  T[16] || (T[16] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", tw, [
                    de.value > 0 ? (n(), i("div", sw, [
                      T[4] || (T[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", ow, d(de.value), 1),
                      T[5] || (T[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (n(), i("div", nw, [
                      T[6] || (T[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", aw, d(w.value.stats.packages_needing_installation), 1),
                      T[7] || (T[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (n(), i("div", lw, [
                      T[8] || (T[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", iw, d(w.value.nodes.ambiguous.length), 1),
                      T[9] || (T[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    le.value.length > 0 ? (n(), i("div", rw, [
                      T[10] || (T[10] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", uw, d(le.value.length), 1),
                      T[11] || (T[11] = t("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    ne.value.length > 0 ? (n(), i("div", cw, [
                      T[12] || (T[12] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", dw, d(ne.value.length), 1),
                      T[13] || (T[13] = t("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (n(), i("div", mw, [
                      T[14] || (T[14] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", fw, d(w.value.nodes.unresolved.length), 1),
                      T[15] || (T[15] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", vw, [
                  T[27] || (T[27] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", pw, [
                    t("div", gw, [
                      T[17] || (T[17] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", hw, d(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      T[18] || (T[18] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (n(), i("div", yw, [
                      T[19] || (T[19] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", ww, d(w.value.stats.download_intents), 1),
                      T[20] || (T[20] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    Ae.value ? (n(), i("div", _w, [
                      T[21] || (T[21] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", kw, d(ie.value.length), 1),
                      T[22] || (T[22] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (n(), i("div", bw, [
                      T[23] || (T[23] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", $w, d(w.value.models.ambiguous.length), 1),
                      T[24] || (T[24] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (n(), i("div", Cw, [
                      T[25] || (T[25] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", xw, d(w.value.models.unresolved.length), 1),
                      T[26] || (T[26] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              O.value ? (n(), i("div", Sw, [
                T[28] || (T[28] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Iw, d(L.value.length + N.value.length) + " items need your input", 1)
              ])) : j.value ? (n(), i("div", Ew, [
                T[29] || (T[29] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Tw, d(le.value.length) + " node type" + d(le.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : ne.value.length > 0 ? (n(), i("div", Pw, [
                T[30] || (T[30] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Mw, d(ne.value.length) + " community-mapped node type" + d(ne.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : Le.value ? (n(), i("div", Rw, [
                T[31] || (T[31] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", Dw, d(w.value.stats.packages_needing_installation) + " package" + d(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + d(w.value.stats.nodes_needing_installation) + " node type" + d(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + d(X.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : X.value ? (n(), i("div", Lw, [
                T[32] || (T[32] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", Uw, d(w.value.stats.download_intents) + " model" + d(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : Ae.value ? (n(), i("div", Nw, [
                T[33] || (T[33] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Ow, d(ie.value.length) + " model" + d(ie.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", Aw, [...T[34] || (T[34] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              Ae.value ? (n(), i("div", zw, [
                T[37] || (T[37] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", Vw, [
                  (n(!0), i(H, null, pe(ie.value, (R) => {
                    var Pe, tt;
                    return n(), i("div", {
                      key: R.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", Fw, d(R.actual_category) + "/" + d((Pe = R.model) == null ? void 0 : Pe.filename), 1),
                      T[36] || (T[36] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", Bw, d((tt = R.expected_categories) == null ? void 0 : tt[0]) + "/", 1),
                      R.file_path ? (n(), U(Ee, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (pt) => ft(R.file_path)
                      }, {
                        default: p(() => [...T[35] || (T[35] = [
                          C(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              j.value ? (n(), i("div", Ww, [
                T[38] || (T[38] = t("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                t("div", Gw, [
                  (n(!0), i(H, null, pe(le.value, (R) => {
                    var Pe;
                    return n(), i("div", {
                      key: `vg-${R.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      t("code", jw, d(R.reference.node_type), 1),
                      t("span", Hw, d(R.guidance || ((Pe = w.value.node_guidance) == null ? void 0 : Pe[R.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          E.value === "nodes" ? (n(), i("div", Kw, [
            k(by, {
              nodes: L.value,
              "node-choices": D.value,
              "auto-resolved-packages": A.value,
              "skipped-packages": G.value,
              "installed-node-packs": x.value,
              onMarkOptional: Y,
              onSkip: Ve,
              onOptionSelected: Ie,
              onManualEntry: Ce,
              onClearChoice: Oe,
              onPackageSkip: Fe
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            K.value.length > 0 ? (n(), i("div", qw, [
              t("div", Yw, [
                t("h4", Jw, "Community-Mapped Packages (" + d(K.value.length) + ")", 1),
                T[39] || (T[39] = t("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              t("div", Qw, [
                (n(!0), i(H, null, pe(K.value, (R) => (n(), i("div", {
                  key: `community-${R.reference.node_type}-${R.package.package_id}`,
                  class: "community-node-item"
                }, [
                  t("div", Xw, [
                    t("div", Zw, [
                      t("code", e0, d(R.reference.node_type), 1),
                      t("span", t0, d(R.package.title || R.package.package_id), 1)
                    ]),
                    t("div", s0, d(R.package.package_id), 1),
                    t("div", o0, [
                      T[40] || (T[40] = C(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      R.guidance ? (n(), i("span", n0, d(R.guidance), 1)) : y("", !0)
                    ]),
                    t("div", a0, d(Q(R.reference.node_type)), 1)
                  ]),
                  t("div", l0, [
                    k(Ee, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !R.package.package_id,
                      onClick: (Pe) => me(R, "registry")
                    }, {
                      default: p(() => [...T[41] || (T[41] = [
                        C(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    R.package.repository ? (n(), U(Ee, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !R.package.package_id,
                      onClick: (Pe) => me(R, "git")
                    }, {
                      default: p(() => [...T[42] || (T[42] = [
                        C(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    k(Ee, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Pe) => he(R.reference.node_type)
                    }, {
                      default: p(() => [...T[43] || (T[43] = [
                        C(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(Ee, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Pe) => Ke(R.reference.node_type)
                    }, {
                      default: p(() => [...T[44] || (T[44] = [
                        C(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : y("", !0)
          ])) : y("", !0),
          E.value === "models" ? (n(), U(p1, {
            key: 2,
            models: oe.value,
            "model-choices": V.value,
            onMarkOptional: Be,
            onSkip: et,
            onOptionSelected: qe,
            onDownloadUrl: vt,
            onClearChoice: dt
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          E.value === "review" ? (n(), i("div", i0, [
            t("div", r0, [
              T[50] || (T[50] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", u0, [
                t("div", c0, [
                  t("span", d0, d(W.value), 1),
                  T[45] || (T[45] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", m0, [
                  t("span", f0, d(J.value), 1),
                  T[46] || (T[46] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", v0, [
                  t("span", p0, d(re.value), 1),
                  T[47] || (T[47] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", g0, [
                  t("span", h0, d(xe.value), 1),
                  T[48] || (T[48] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              A.value.length > 0 ? (n(), i("div", y0, [
                t("h4", w0, "Node Packages (" + d(A.value.length) + ")", 1),
                t("div", _0, [
                  (n(!0), i(H, null, pe(A.value, (R) => (n(), i("div", {
                    key: R.package_id,
                    class: "review-item"
                  }, [
                    t("code", k0, d(R.package_id), 1),
                    t("div", b0, [
                      G.value.has(R.package_id) ? (n(), i("span", C0, "Skipped")) : (n(), i("span", $0, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              K.value.length > 0 ? (n(), i("div", x0, [
                t("h4", S0, "Community-Mapped Packages (" + d(K.value.length) + ")", 1),
                t("div", I0, [
                  (n(!0), i(H, null, pe(K.value, (R) => {
                    var Pe, tt, pt;
                    return n(), i("div", {
                      key: `review-community-${R.reference.node_type}-${R.package.package_id}`,
                      class: "review-item"
                    }, [
                      t("code", E0, d(R.reference.node_type), 1),
                      t("div", T0, [
                        ((Pe = Me(R.reference.node_type)) == null ? void 0 : Pe.action) === "install" ? (n(), i("span", P0, d(((tt = Me(R.reference.node_type)) == null ? void 0 : tt.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((pt = Me(R.reference.node_type)) == null ? void 0 : pt.action) === "optional" ? (n(), i("span", M0, " Optional ")) : (n(), i("span", R0, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              L.value.length > 0 ? (n(), i("div", D0, [
                t("h4", L0, "Node Choices (" + d(L.value.length) + ")", 1),
                t("div", U0, [
                  (n(!0), i(H, null, pe(L.value, (R) => {
                    var Pe, tt, pt, st;
                    return n(), i("div", {
                      key: R.node_type,
                      class: "review-item"
                    }, [
                      t("code", N0, d(R.node_type), 1),
                      t("div", O0, [
                        D.value.has(R.node_type) ? (n(), i(H, { key: 0 }, [
                          ((Pe = D.value.get(R.node_type)) == null ? void 0 : Pe.action) === "install" ? (n(), i("span", A0, d((tt = D.value.get(R.node_type)) == null ? void 0 : tt.package_id), 1)) : ((pt = D.value.get(R.node_type)) == null ? void 0 : pt.action) === "optional" ? (n(), i("span", z0, " Optional ")) : ((st = D.value.get(R.node_type)) == null ? void 0 : st.action) === "skip" ? (n(), i("span", V0, " Skip ")) : y("", !0)
                        ], 64)) : (n(), i("span", F0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Ne.value.length > 0 ? (n(), i("div", B0, [
                t("h4", W0, "Models to Download (" + d(Ne.value.length) + ")", 1),
                t("div", G0, [
                  (n(!0), i(H, null, pe(Ne.value, (R) => (n(), i("div", {
                    key: R.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", j0, [
                      t("code", H0, d(R.filename), 1),
                      t("div", K0, [
                        t("span", q0, "→ " + d(R.target_path), 1),
                        R.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: R.url
                        }, d(ze(R.url)), 9, Y0)) : y("", !0)
                      ])
                    ]),
                    T[49] || (T[49] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              oe.value.length > 0 ? (n(), i("div", J0, [
                t("h4", Q0, "Models (" + d(oe.value.length) + ")", 1),
                t("div", X0, [
                  (n(!0), i(H, null, pe(oe.value, (R) => {
                    var Pe, tt, pt, st, xt, Et, Ge;
                    return n(), i("div", {
                      key: R.filename,
                      class: "review-item"
                    }, [
                      t("code", Z0, d(R.filename), 1),
                      t("div", e_, [
                        V.value.has(R.filename) ? (n(), i(H, { key: 0 }, [
                          ((Pe = V.value.get(R.filename)) == null ? void 0 : Pe.action) === "select" ? (n(), i("span", t_, d((pt = (tt = V.value.get(R.filename)) == null ? void 0 : tt.selected_model) == null ? void 0 : pt.filename), 1)) : ((st = V.value.get(R.filename)) == null ? void 0 : st.action) === "download" ? (n(), i("span", s_, " Download ")) : ((xt = V.value.get(R.filename)) == null ? void 0 : xt.action) === "optional" ? (n(), i("span", o_, " Optional ")) : ((Et = V.value.get(R.filename)) == null ? void 0 : Et.action) === "skip" ? (n(), i("span", n_, " Skip ")) : ((Ge = V.value.get(R.filename)) == null ? void 0 : Ge.action) === "cancel_download" ? (n(), i("span", a_, " Cancel Download ")) : y("", !0)
                        ], 64)) : R.is_download_intent ? (n(), i("span", l_, " Pending Download ")) : (n(), i("span", i_, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Z.value.length === 0 && K.value.length === 0 && L.value.length === 0 && oe.value.length === 0 ? (n(), i("div", r_, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          E.value === "applying" ? (n(), U(H1, {
            key: 4,
            progress: Xe(m),
            onRestart: ts,
            onRetryFailed: Ot
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: p(() => [
        E.value !== "analysis" && E.value !== "applying" ? (n(), U(Ee, {
          key: 0,
          variant: "secondary",
          disabled: S.value,
          onClick: De
        }, {
          default: p(() => [...T[51] || (T[51] = [
            C(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        T[54] || (T[54] = t("div", { class: "footer-spacer" }, null, -1)),
        E.value !== "applying" || Xe(m).phase === "complete" || Xe(m).phase === "error" ? (n(), U(Ee, {
          key: 1,
          variant: "secondary",
          onClick: T[0] || (T[0] = (R) => a("close"))
        }, {
          default: p(() => [
            C(d(Xe(m).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        E.value === "analysis" ? (n(), U(Ee, {
          key: 2,
          variant: "primary",
          disabled: b.value,
          onClick: ge
        }, {
          default: p(() => [
            C(d(_e.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        E.value === "nodes" ? (n(), U(Ee, {
          key: 3,
          variant: "primary",
          onClick: ye
        }, {
          default: p(() => [
            C(d(q.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        E.value === "models" ? (n(), U(Ee, {
          key: 4,
          variant: "primary",
          onClick: ye
        }, {
          default: p(() => [...T[52] || (T[52] = [
            C(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        E.value === "review" ? (n(), U(Ee, {
          key: 5,
          variant: "primary",
          disabled: S.value,
          loading: S.value,
          onClick: Pt
        }, {
          default: p(() => [...T[53] || (T[53] = [
            C(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), c_ = /* @__PURE__ */ ke(u_, [["__scopeId", "data-v-49848358"]]), d_ = { class: "search-input-wrapper" }, m_ = ["value", "placeholder"], f_ = /* @__PURE__ */ we({
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
    const o = e, a = s, l = $(null);
    let r;
    function u(m) {
      const f = m.target.value;
      o.debounce > 0 ? (clearTimeout(r), r = window.setTimeout(() => {
        a("update:modelValue", f);
      }, o.debounce)) : a("update:modelValue", f);
    }
    function c() {
      var m;
      a("update:modelValue", ""), a("clear"), (m = l.value) == null || m.focus();
    }
    return lt(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (m, f) => (n(), i("div", d_, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: as(c, ["escape"])
      }, null, 40, m_),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: c,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), v_ = /* @__PURE__ */ ke(f_, [["__scopeId", "data-v-266f857a"]]), p_ = { class: "search-bar" }, g_ = /* @__PURE__ */ we({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (n(), i("div", p_, [
      k(v_, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => s.$emit("update:modelValue", a)),
        onClear: o[1] || (o[1] = (a) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Vo = /* @__PURE__ */ ke(g_, [["__scopeId", "data-v-3d51bbfd"]]), h_ = { class: "section-group" }, y_ = {
  key: 0,
  class: "section-content"
}, w_ = /* @__PURE__ */ we({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = $(o.initiallyExpanded);
    function r() {
      o.collapsible && (l.value = !l.value, a("toggle", l.value));
    }
    return (u, c) => (n(), i("section", h_, [
      k(Qt, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: p(() => [
          C(d(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (n(), i("div", y_, [
        nt(u.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), _t = /* @__PURE__ */ ke(w_, [["__scopeId", "data-v-c48e33ed"]]), __ = { class: "item-header" }, k_ = {
  key: 0,
  class: "item-icon"
}, b_ = { class: "item-info" }, $_ = {
  key: 0,
  class: "item-title"
}, C_ = {
  key: 1,
  class: "item-subtitle"
}, x_ = {
  key: 0,
  class: "item-details"
}, S_ = {
  key: 1,
  class: "item-actions"
}, I_ = /* @__PURE__ */ we({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, a = z(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (n(), i("div", {
      class: Re(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (u) => e.clickable && l.$emit("click"))
    }, [
      t("div", __, [
        l.$slots.icon ? (n(), i("span", k_, [
          nt(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", b_, [
          l.$slots.title ? (n(), i("div", $_, [
            nt(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (n(), i("div", C_, [
            nt(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", x_, [
        nt(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (n(), i("div", S_, [
        nt(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Lt = /* @__PURE__ */ ke(I_, [["__scopeId", "data-v-cc435e0e"]]), E_ = { class: "loading-state" }, T_ = { class: "loading-message" }, P_ = /* @__PURE__ */ we({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (n(), i("div", E_, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", T_, d(e.message), 1)
    ]));
  }
}), zs = /* @__PURE__ */ ke(P_, [["__scopeId", "data-v-ad8436c9"]]), M_ = { class: "error-state" }, R_ = { class: "error-message" }, D_ = /* @__PURE__ */ we({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (n(), i("div", M_, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", R_, d(e.message), 1),
      e.retry ? (n(), U(ve, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => s.$emit("retry"))
      }, {
        default: p(() => [...o[1] || (o[1] = [
          C(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Vs = /* @__PURE__ */ ke(D_, [["__scopeId", "data-v-5397be48"]]), L_ = /* @__PURE__ */ we({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getWorkflows: l } = ut(), r = $([]), u = $(!1), c = $(null), m = $(""), f = $(!0), v = $(!1), g = $(!1), _ = $(!1), h = $(!1), w = $(null), x = z(
      () => r.value.filter((_e) => _e.status === "broken")
    ), b = z(
      () => r.value.filter((_e) => _e.status === "new")
    ), S = z(
      () => r.value.filter((_e) => _e.status === "modified")
    ), F = z(
      () => r.value.filter((_e) => _e.status === "synced")
    ), E = z(() => {
      if (!m.value.trim()) return r.value;
      const _e = m.value.toLowerCase();
      return r.value.filter((Z) => Z.name.toLowerCase().includes(_e));
    }), P = z(
      () => x.value.filter(
        (_e) => !m.value.trim() || _e.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), D = z(
      () => b.value.filter(
        (_e) => !m.value.trim() || _e.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), V = z(
      () => S.value.filter(
        (_e) => !m.value.trim() || _e.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), G = z(
      () => F.value.filter(
        (_e) => !m.value.trim() || _e.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), I = z(
      () => v.value ? G.value : G.value.slice(0, 5)
    );
    async function O(_e = !1) {
      u.value = !0, c.value = null;
      try {
        r.value = await l(_e);
      } catch (Z) {
        c.value = Z instanceof Error ? Z.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    s({ loadWorkflows: O });
    function le(_e) {
      w.value = _e, g.value = !0;
    }
    function ne(_e) {
      w.value = _e, _.value = !0;
    }
    function K(_e) {
      w.value = _e, h.value = !0;
    }
    function j(_e) {
      var M;
      const A = (M = _e.detail) == null ? void 0 : M.workflowName;
      A && K(A);
    }
    function B() {
      a("refresh");
    }
    async function q() {
      _.value = !1, await O(!0);
    }
    async function X() {
      await O(!0), a("refresh");
    }
    async function Le() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ae(_e) {
      return _e.replace(/uninstallable node mappings?/gi, (Z) => Z.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function de(_e) {
      if (_e.issue_summary && _e.issue_summary.trim().length > 0)
        return ae(_e.issue_summary);
      const Z = [];
      return _e.version_gated_count && _e.version_gated_count > 0 && Z.push(`${_e.version_gated_count} node${_e.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), _e.uninstallable_count && _e.uninstallable_count > 0 && Z.push(`${_e.uninstallable_count} node${_e.uninstallable_count > 1 ? "s" : ""} need community packages`), _e.missing_nodes > 0 && Z.push(`${_e.missing_nodes} missing node${_e.missing_nodes > 1 ? "s" : ""}`), _e.missing_models > 0 && Z.push(`${_e.missing_models} missing model${_e.missing_models > 1 ? "s" : ""}`), _e.models_with_category_mismatch && _e.models_with_category_mismatch > 0 && Z.push(`${_e.models_with_category_mismatch} model${_e.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), _e.pending_downloads && _e.pending_downloads > 0 && Z.push(`${_e.pending_downloads} pending download${_e.pending_downloads > 1 ? "s" : ""}`), Z.length > 0 ? Z.join(", ") : "Has issues";
    }
    function ie(_e) {
      const Z = _e.sync_state === "new" ? "New" : _e.sync_state === "modified" ? "Modified" : _e.sync_state === "synced" ? "Synced" : _e.sync_state, A = Ae(_e);
      return _e.has_path_sync_issues && _e.models_needing_path_sync && _e.models_needing_path_sync > 0 ? `${_e.models_needing_path_sync} model path${_e.models_needing_path_sync > 1 ? "s" : ""} need${_e.models_needing_path_sync === 1 ? "s" : ""} sync · ${A}` : `${Z || "Unknown"} · ${A}`;
    }
    function Ae(_e) {
      const Z = _e.contract_summary;
      return !Z || !Z.has_contract ? "No contract" : Z.status === "incomplete" ? `${Z.input_count} in / ${Z.output_count} out · incomplete` : `${Z.input_count} in / ${Z.output_count} out`;
    }
    return lt(() => {
      O(), window.addEventListener("comfygit:open-workflow-contract", j);
    }), da(() => {
      window.removeEventListener("comfygit:open-workflow-contract", j);
    }), (_e, Z) => (n(), i(H, null, [
      k(Ht, null, {
        header: p(() => [
          k(Kt, { title: "WORKFLOWS" })
        ]),
        search: p(() => [
          k(Vo, {
            modelValue: m.value,
            "onUpdate:modelValue": Z[0] || (Z[0] = (A) => m.value = A),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: p(() => [
          u.value ? (n(), U(zs, {
            key: 0,
            message: "Loading workflows..."
          })) : c.value ? (n(), U(Vs, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            P.value.length ? (n(), U(_t, {
              key: 0,
              title: "BROKEN",
              count: P.value.length
            }, {
              default: p(() => [
                (n(!0), i(H, null, pe(P.value, (A) => (n(), U(Lt, {
                  key: A.name,
                  status: "broken"
                }, {
                  icon: p(() => [...Z[8] || (Z[8] = [
                    C("⚠", -1)
                  ])]),
                  title: p(() => [
                    C(d(A.name), 1)
                  ]),
                  subtitle: p(() => [
                    C(d(de(A)), 1)
                  ]),
                  actions: p(() => [
                    k(ve, {
                      variant: "primary",
                      size: "sm",
                      onClick: (M) => ne(A.name)
                    }, {
                      default: p(() => [...Z[9] || (Z[9] = [
                        C(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ve, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => K(A.name)
                    }, {
                      default: p(() => [...Z[10] || (Z[10] = [
                        C(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ve, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => le(A.name)
                    }, {
                      default: p(() => [...Z[11] || (Z[11] = [
                        C(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            D.value.length ? (n(), U(_t, {
              key: 1,
              title: "NEW",
              count: D.value.length
            }, {
              default: p(() => [
                (n(!0), i(H, null, pe(D.value, (A) => (n(), U(Lt, {
                  key: A.name,
                  status: A.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: p(() => [
                    C(d(A.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: p(() => [
                    C(d(A.name), 1)
                  ]),
                  subtitle: p(() => [
                    C(d(ie(A)), 1)
                  ]),
                  actions: p(() => [
                    k(ve, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => K(A.name)
                    }, {
                      default: p(() => [...Z[12] || (Z[12] = [
                        C(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ve, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => le(A.name)
                    }, {
                      default: p(() => [...Z[13] || (Z[13] = [
                        C(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            V.value.length ? (n(), U(_t, {
              key: 2,
              title: "MODIFIED",
              count: V.value.length
            }, {
              default: p(() => [
                (n(!0), i(H, null, pe(V.value, (A) => (n(), U(Lt, {
                  key: A.name,
                  status: A.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: p(() => [...Z[14] || (Z[14] = [
                    C("⚡", -1)
                  ])]),
                  title: p(() => [
                    C(d(A.name), 1)
                  ]),
                  subtitle: p(() => [
                    C(d(ie(A)), 1)
                  ]),
                  actions: p(() => [
                    k(ve, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => K(A.name)
                    }, {
                      default: p(() => [...Z[15] || (Z[15] = [
                        C(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ve, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => le(A.name)
                    }, {
                      default: p(() => [...Z[16] || (Z[16] = [
                        C(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            G.value.length ? (n(), U(_t, {
              key: 3,
              title: "SYNCED",
              count: G.value.length,
              collapsible: !0,
              "initially-expanded": f.value,
              onToggle: Z[2] || (Z[2] = (A) => f.value = A)
            }, {
              default: p(() => [
                (n(!0), i(H, null, pe(I.value, (A) => (n(), U(Lt, {
                  key: A.name,
                  status: A.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: p(() => [
                    C(d(A.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: p(() => [
                    C(d(A.name), 1)
                  ]),
                  subtitle: p(() => [
                    C(d(ie(A)), 1)
                  ]),
                  actions: p(() => [
                    k(ve, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => K(A.name)
                    }, {
                      default: p(() => [...Z[17] || (Z[17] = [
                        C(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ve, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (M) => le(A.name)
                    }, {
                      default: p(() => [...Z[18] || (Z[18] = [
                        C(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && G.value.length > 5 ? (n(), U(ve, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: Z[1] || (Z[1] = (A) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: p(() => [
                    C(" View all " + d(G.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            E.value.length ? y("", !0) : (n(), U(gs, {
              key: 4,
              icon: "📭",
              message: m.value ? `No workflows match '${m.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && w.value ? (n(), U(sg, {
        key: 0,
        "workflow-name": w.value,
        onClose: Z[3] || (Z[3] = (A) => g.value = !1),
        onResolve: Z[4] || (Z[4] = (A) => ne(w.value)),
        onRefresh: Z[5] || (Z[5] = (A) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      _.value && w.value ? (n(), U(c_, {
        key: 1,
        "workflow-name": w.value,
        onClose: q,
        onInstall: B,
        onRefresh: Z[6] || (Z[6] = (A) => a("refresh")),
        onRestart: Le
      }, null, 8, ["workflow-name"])) : y("", !0),
      h.value && w.value ? (n(), U(Ng, {
        key: 2,
        "workflow-name": w.value,
        onClose: Z[7] || (Z[7] = (A) => h.value = !1),
        onRefresh: X
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), U_ = /* @__PURE__ */ ke(L_, [["__scopeId", "data-v-894ef6ed"]]), N_ = /* @__PURE__ */ we({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Re(["summary-bar", e.variant])
    }, [
      nt(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Cn = /* @__PURE__ */ ke(N_, [["__scopeId", "data-v-ccb7816e"]]), O_ = {
  key: 0,
  class: "model-details"
}, A_ = { class: "detail-section" }, z_ = { class: "detail-row" }, V_ = { class: "detail-value mono" }, F_ = { class: "detail-row" }, B_ = { class: "detail-value mono" }, W_ = { class: "detail-row" }, G_ = { class: "detail-value mono" }, j_ = { class: "detail-row" }, H_ = { class: "detail-value" }, K_ = { class: "detail-row" }, q_ = { class: "detail-value" }, Y_ = { class: "detail-row" }, J_ = { class: "detail-value" }, Q_ = { class: "detail-section" }, X_ = { class: "section-header" }, Z_ = {
  key: 0,
  class: "locations-list"
}, ek = { class: "location-path mono" }, tk = {
  key: 0,
  class: "location-modified"
}, sk = ["onClick"], ok = {
  key: 1,
  class: "empty-state"
}, nk = { class: "detail-section" }, ak = { class: "section-header" }, lk = {
  key: 0,
  class: "sources-list"
}, ik = { class: "source-type" }, rk = ["href"], uk = ["disabled", "onClick"], ck = {
  key: 1,
  class: "empty-state"
}, dk = { class: "add-source-form" }, mk = ["disabled"], fk = {
  key: 2,
  class: "source-error"
}, vk = {
  key: 3,
  class: "source-success"
}, pk = /* @__PURE__ */ we({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: a, addModelSource: l, removeModelSource: r, openFileLocation: u } = ut(), c = $(null), m = $(!0), f = $(null), v = $(""), g = $(!1), _ = $(null), h = $(null), w = $(null), x = $(null);
    let b = null;
    function S(I, O = "success", le = 2e3) {
      b && clearTimeout(b), x.value = { message: I, type: O }, b = setTimeout(() => {
        x.value = null;
      }, le);
    }
    function F(I) {
      if (!I) return "Unknown";
      const O = 1024 * 1024 * 1024, le = 1024 * 1024;
      return I >= O ? `${(I / O).toFixed(1)} GB` : I >= le ? `${(I / le).toFixed(0)} MB` : `${(I / 1024).toFixed(0)} KB`;
    }
    function E(I) {
      navigator.clipboard.writeText(I), S("Copied to clipboard!");
    }
    async function P(I) {
      try {
        await u(I), S("Opening file location...");
      } catch {
        S("Failed to open location", "error");
      }
    }
    async function D() {
      if (!(!v.value.trim() || !c.value)) {
        g.value = !0, h.value = null, w.value = null;
        try {
          await l(c.value.hash, v.value.trim()), w.value = "Source added successfully!", v.value = "", await G();
        } catch (I) {
          h.value = I instanceof Error ? I.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function V(I) {
      if (c.value) {
        _.value = I, h.value = null, w.value = null;
        try {
          await r(c.value.hash, I), S("Source removed"), await G();
        } catch (O) {
          h.value = O instanceof Error ? O.message : "Failed to remove source";
        } finally {
          _.value = null;
        }
      }
    }
    async function G() {
      m.value = !0, f.value = null;
      try {
        c.value = await a(o.identifier);
      } catch (I) {
        f.value = I instanceof Error ? I.message : "Failed to load model details";
      } finally {
        m.value = !1;
      }
    }
    return lt(G), (I, O) => {
      var le;
      return n(), i(H, null, [
        k(Ct, {
          title: `Model Details: ${((le = c.value) == null ? void 0 : le.filename) || "Loading..."}`,
          size: "lg",
          loading: m.value,
          error: f.value,
          onClose: O[5] || (O[5] = (ne) => I.$emit("close"))
        }, {
          body: p(() => {
            var ne, K, j, B;
            return [
              c.value ? (n(), i("div", O_, [
                t("section", A_, [
                  t("div", z_, [
                    O[6] || (O[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", V_, d(c.value.hash || "Not computed"), 1),
                    c.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: O[0] || (O[0] = (q) => E(c.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", F_, [
                    O[7] || (O[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", B_, d(c.value.blake3 || "Not computed"), 1),
                    c.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: O[1] || (O[1] = (q) => E(c.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", W_, [
                    O[8] || (O[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", G_, d(c.value.sha256 || "Not computed"), 1),
                    c.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: O[2] || (O[2] = (q) => E(c.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", j_, [
                    O[9] || (O[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", H_, d(F(c.value.size)), 1)
                  ]),
                  t("div", K_, [
                    O[10] || (O[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", q_, d(c.value.category), 1)
                  ]),
                  t("div", Y_, [
                    O[11] || (O[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", J_, d(c.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", Q_, [
                  t("h4", X_, "Locations (" + d(((ne = c.value.locations) == null ? void 0 : ne.length) || 0) + ")", 1),
                  (K = c.value.locations) != null && K.length ? (n(), i("div", Z_, [
                    (n(!0), i(H, null, pe(c.value.locations, (q, X) => (n(), i("div", {
                      key: X,
                      class: "location-item"
                    }, [
                      t("span", ek, d(q.path), 1),
                      q.modified ? (n(), i("span", tk, "Modified: " + d(q.modified), 1)) : y("", !0),
                      q.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (Le) => P(q.path)
                      }, " Open File Location ", 8, sk)) : y("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", ok, "No locations found"))
                ]),
                t("section", nk, [
                  t("h4", ak, "Download Sources (" + d(((j = c.value.sources) == null ? void 0 : j.length) || 0) + ")", 1),
                  (B = c.value.sources) != null && B.length ? (n(), i("div", lk, [
                    (n(!0), i(H, null, pe(c.value.sources, (q, X) => (n(), i("div", {
                      key: X,
                      class: "source-item"
                    }, [
                      t("span", ik, d(q.type) + ":", 1),
                      t("a", {
                        href: q.url,
                        target: "_blank",
                        class: "source-url"
                      }, d(q.url), 9, rk),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: _.value === q.url,
                        onClick: (Le) => V(q.url)
                      }, d(_.value === q.url ? "..." : "×"), 9, uk)
                    ]))), 128))
                  ])) : (n(), i("div", ck, " No download sources configured ")),
                  t("div", dk, [
                    at(t("input", {
                      "onUpdate:modelValue": O[3] || (O[3] = (q) => v.value = q),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Zt, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || g.value,
                      onClick: D
                    }, d(g.value ? "Adding..." : "Add Source"), 9, mk)
                  ]),
                  h.value ? (n(), i("p", fk, d(h.value), 1)) : y("", !0),
                  w.value ? (n(), i("p", vk, d(w.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: p(() => [
            t("button", {
              class: "btn-secondary",
              onClick: O[4] || (O[4] = (ne) => I.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (n(), U(Nt, { to: "body" }, [
          x.value ? (n(), i("div", {
            key: 0,
            class: Re(["toast", x.value.type])
          }, d(x.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), wl = /* @__PURE__ */ ke(pk, [["__scopeId", "data-v-f15cbb56"]]), gk = ["disabled"], hk = { class: "dropdown-value" }, yk = ["onClick"], wk = {
  key: 0,
  class: "dropdown-error"
}, _k = /* @__PURE__ */ we({
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
    const o = e, a = s, l = $(!1), r = $(null), u = $(null), c = $({});
    function m(S) {
      return typeof S == "string" ? S : S.value;
    }
    function f(S) {
      return typeof S == "string" ? S : S.label;
    }
    const v = z(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const S = o.options.find((F) => m(F) === o.modelValue);
      return S ? f(S) : String(o.modelValue);
    });
    function g() {
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
      const S = r.value.getBoundingClientRect(), F = window.innerHeight, E = F - S.bottom, P = S.top, D = Math.min(300, o.options.length * 36 + 8), V = E < D && P > E;
      c.value = {
        position: "fixed",
        left: `${S.left}px`,
        width: `${S.width}px`,
        maxHeight: "300px",
        ...V ? { bottom: `${F - S.top + 4}px` } : { top: `${S.bottom + 4}px` }
      };
    }
    St(l, async (S) => {
      S && (await Mt(), w());
    });
    function x() {
      l.value && w();
    }
    function b(S) {
      S.key === "Escape" && l.value && _();
    }
    return lt(() => {
      window.addEventListener("scroll", x, !0), window.addEventListener("keydown", b);
    }), Xs(() => {
      window.removeEventListener("scroll", x, !0), window.removeEventListener("keydown", b);
    }), (S, F) => (n(), i("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      t("button", {
        type: "button",
        class: Re(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: g
      }, [
        t("span", hk, d(v.value), 1),
        F[0] || (F[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, gk),
      (n(), U(Nt, { to: "body" }, [
        l.value ? (n(), i("div", {
          key: 0,
          class: "dropdown-overlay",
          onClick: _
        })) : y("", !0),
        l.value ? (n(), i("div", {
          key: 1,
          ref_key: "menuRef",
          ref: u,
          class: "dropdown-menu",
          style: es(c.value)
        }, [
          (n(!0), i(H, null, pe(e.options, (E) => (n(), i("div", {
            key: m(E),
            class: Re(["dropdown-option", { selected: m(E) === e.modelValue }]),
            onClick: (P) => h(E)
          }, d(f(E)), 11, yk))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (n(), i("span", wk, d(e.error), 1)) : y("", !0)
    ], 512));
  }
}), kk = /* @__PURE__ */ ke(_k, [["__scopeId", "data-v-857e085b"]]);
function bk(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function $k(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
  } catch {
    return { kind: "unknown" };
  }
  if (!bk(o.hostname)) return { kind: "unknown" };
  const a = o.pathname.replace(/^\/+/, "").split("/").filter(Boolean);
  if (a[0] === "datasets" || a[0] === "spaces") return { kind: "unknown" };
  if (a.length < 2) return { kind: "unknown" };
  const l = `${a[0]}/${a[1]}`, r = a.slice(2);
  if (r.length === 0)
    return { kind: "repo", repoId: l, revision: "main" };
  const u = r[0];
  if (u === "tree") {
    const c = r[1] || "main", m = r.slice(2).join("/");
    return { kind: "repo", repoId: l, revision: c, path: m || void 0 };
  }
  if (u === "resolve") {
    const c = r[1] || "main", m = r.slice(2).join("/");
    return m ? { kind: "file", repoId: l, revision: c, path: m } : { kind: "repo", repoId: l, revision: c };
  }
  if (u === "blob") {
    const c = r[1] || "main", m = r.slice(2).join("/");
    return m ? { kind: "file", repoId: l, revision: c, path: m } : { kind: "repo", repoId: l, revision: c };
  }
  return { kind: "repo", repoId: l, revision: "main" };
}
function Ck(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function xk(e, s, o) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${Ck(o)}`;
}
const Sk = { class: "hf-file-browser" }, Ik = { class: "browser-header" }, Ek = { class: "repo-info" }, Tk = { class: "repo-id" }, Pk = {
  key: 0,
  class: "revision-pill"
}, Mk = {
  key: 0,
  class: "loading-state"
}, Rk = {
  key: 1,
  class: "error-state"
}, Dk = { class: "toolbar" }, Lk = { class: "toolbar-actions" }, Uk = { class: "file-list-container" }, Nk = {
  key: 0,
  class: "file-list-header"
}, Ok = ["checked", "indeterminate"], Ak = { class: "sort-indicator" }, zk = { class: "sort-indicator" }, Vk = {
  key: 1,
  class: "empty-state"
}, Fk = {
  key: 2,
  class: "file-list"
}, Bk = ["onClick"], Wk = ["checked", "onChange"], Gk = { class: "file-path" }, jk = { class: "file-size" }, Hk = { class: "destination-section" }, Kk = { class: "destination-row" }, qk = {
  key: 0,
  class: "path-separator"
}, Yk = { class: "action-bar" }, Jk = { class: "summary-info" }, Qk = { class: "summary-count" }, Xk = { class: "summary-size" }, Zk = /* @__PURE__ */ we({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = ut(), u = $([]), c = $(/* @__PURE__ */ new Set()), m = $(!1), f = $(null), v = $(""), g = $(!1), _ = $("name"), h = $(!0), w = $(""), x = $(""), b = $(""), S = $([]), F = $(!1);
    let E = !1;
    const P = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, D = z(() => {
      let M = u.value;
      if (o.initialPath) {
        const se = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        M = M.filter((L) => L.path.startsWith(se) || L.path === o.initialPath);
      }
      if (g.value && (M = M.filter((se) => se.is_model_file)), v.value.trim()) {
        const se = v.value.toLowerCase();
        M = M.filter((L) => L.path.toLowerCase().includes(se));
      }
      return M;
    }), V = z(() => {
      const M = [...D.value];
      return M.sort((se, L) => {
        let N;
        return _.value === "name" ? N = se.path.localeCompare(L.path) : N = se.size - L.size, h.value ? N : -N;
      }), M;
    }), G = z(() => D.value.length === 0 ? !1 : D.value.every((M) => c.value.has(M.path))), I = z(() => D.value.some((M) => c.value.has(M.path))), O = z(() => {
      const M = S.value.map((se) => ({
        label: se,
        value: se
      }));
      return M.push({ label: "Custom path...", value: "__custom__" }), M;
    }), le = z(() => w.value === "__custom__" ? b.value.trim().length > 0 : w.value.length > 0), ne = z(() => {
      let M = 0;
      for (const se of c.value) {
        const L = u.value.find((N) => N.path === se);
        L && (M += L.size);
      }
      return M;
    });
    function K(M) {
      if (M === 0) return "0 B";
      const se = 1024 * 1024 * 1024, L = 1024 * 1024, N = 1024;
      return M >= se ? `${(M / se).toFixed(2)} GB` : M >= L ? `${(M / L).toFixed(1)} MB` : M >= N ? `${(M / N).toFixed(0)} KB` : `${M} B`;
    }
    function j(M) {
      const se = M.match(P);
      return se ? `${se[1]}${se[4]}` : null;
    }
    function B(M) {
      const se = new Set(c.value), L = se.has(M.path), N = M.shard_group || j(M.path);
      if (N) {
        const oe = u.value.filter((Ne) => (Ne.shard_group || j(Ne.path)) === N);
        L ? oe.forEach((Ne) => se.delete(Ne.path)) : oe.forEach((Ne) => se.add(Ne.path));
      } else
        L ? se.delete(M.path) : se.add(M.path);
      c.value = se;
    }
    function q() {
      const M = new Set(c.value);
      for (const se of D.value)
        se.is_model_file && M.add(se.path);
      c.value = M;
    }
    function X() {
      c.value = /* @__PURE__ */ new Set();
    }
    function Le() {
      if (G.value) {
        const M = new Set(c.value);
        for (const se of D.value)
          M.delete(se.path);
        c.value = M;
      } else {
        const M = new Set(c.value);
        for (const se of D.value)
          M.add(se.path);
        c.value = M;
      }
    }
    function ae(M) {
      _.value === M ? h.value = !h.value : (_.value = M, h.value = !0);
    }
    function de(M) {
      const se = M.split("/");
      return se.length >= 2 ? se[se.length - 2] : null;
    }
    function ie() {
      if (F.value || c.value.size === 0) return;
      const M = /* @__PURE__ */ new Set();
      for (const N of c.value) {
        const oe = de(N);
        oe && M.add(oe.toLowerCase());
      }
      if (M.size !== 1) return;
      const se = [...M][0], L = S.value.find(
        (N) => N.toLowerCase() === se
      );
      L && L !== w.value && (E = !0, w.value = L, Mt(() => {
        E = !1;
      }));
    }
    function Ae() {
      return w.value === "__custom__" ? b.value.trim() : x.value.trim() ? `${w.value}/${x.value.trim()}` : w.value;
    }
    function _e() {
      if (c.value.size === 0 || !le.value) return;
      const M = Ae(), se = [];
      for (const L of c.value) {
        const N = u.value.find((oe) => oe.path === L);
        N && se.push({
          url: xk(o.repoId, o.revision, N.path),
          destination: M,
          filename: N.path.split("/").pop() || N.path
        });
      }
      a("queue", se);
    }
    async function Z() {
      if (o.repoId) {
        m.value = !0, f.value = null;
        try {
          const M = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, se = await l(M);
          if (u.value = se.files, o.preselectedFile) {
            const L = u.value.find((N) => N.path === o.preselectedFile);
            L && B(L);
          }
        } catch (M) {
          f.value = M instanceof Error ? M.message : "Failed to load repository";
        } finally {
          m.value = !1;
        }
      }
    }
    async function A() {
      try {
        const M = await r();
        S.value = M.directories, M.directories.length > 0 && !w.value && (w.value = M.directories[0]);
      } catch {
        S.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], w.value || (w.value = "checkpoints");
      }
    }
    return St(() => [o.repoId, o.revision], () => {
      o.repoId && Z();
    }, { immediate: !1 }), St(() => o.repoId, () => {
      F.value = !1;
    }), St(c, () => {
      ie();
    }, { deep: !0 }), St(S, () => {
      S.value.length > 0 && c.value.size > 0 && ie();
    }), St(w, (M, se) => {
      E || se === "" || (F.value = !0);
    }), lt(() => {
      Z(), A();
    }), (M, se) => (n(), i("div", Sk, [
      t("div", Ik, [
        t("button", {
          class: "back-btn",
          onClick: se[0] || (se[0] = (L) => M.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", Ek, [
          t("span", Tk, d(e.repoId), 1),
          e.revision ? (n(), i("span", Pk, d(e.revision), 1)) : y("", !0)
        ])
      ]),
      m.value ? (n(), i("div", Mk, " Loading repository files... ")) : f.value ? (n(), i("div", Rk, d(f.value), 1)) : (n(), i(H, { key: 2 }, [
        t("div", Dk, [
          k(ot, {
            modelValue: v.value,
            "onUpdate:modelValue": se[1] || (se[1] = (L) => v.value = L),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", Lk, [
            t("button", {
              class: Re(["toggle-btn", { active: g.value }]),
              onClick: se[2] || (se[2] = (L) => g.value = !g.value)
            }, d(g.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: q
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: X
            }, "Clear")
          ])
        ]),
        t("div", Uk, [
          D.value.length > 0 ? (n(), i("div", Nk, [
            t("input", {
              type: "checkbox",
              checked: G.value,
              indeterminate: I.value && !G.value,
              class: "file-checkbox",
              onChange: Le
            }, null, 40, Ok),
            t("span", {
              class: "header-name",
              onClick: se[3] || (se[3] = (L) => ae("name"))
            }, [
              se[9] || (se[9] = C(" Name ", -1)),
              t("span", Ak, d(_.value === "name" ? h.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: se[4] || (se[4] = (L) => ae("size"))
            }, [
              se[10] || (se[10] = C(" Size ", -1)),
              t("span", zk, d(_.value === "size" ? h.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          D.value.length === 0 ? (n(), i("div", Vk, d(u.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", Fk, [
            (n(!0), i(H, null, pe(V.value, (L) => (n(), i("div", {
              key: L.path,
              class: Re(["file-item", { selected: c.value.has(L.path) }]),
              onClick: (N) => B(L)
            }, [
              t("input", {
                type: "checkbox",
                checked: c.value.has(L.path),
                class: "file-checkbox",
                onClick: se[5] || (se[5] = gt(() => {
                }, ["stop"])),
                onChange: (N) => B(L)
              }, null, 40, Wk),
              t("span", Gk, d(L.path), 1),
              t("span", jk, d(K(L.size)), 1)
            ], 10, Bk))), 128))
          ]))
        ]),
        t("div", Hk, [
          se[11] || (se[11] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", Kk, [
            k(kk, {
              modelValue: w.value,
              "onUpdate:modelValue": se[6] || (se[6] = (L) => w.value = L),
              options: O.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            w.value !== "__custom__" ? (n(), i("span", qk, "/")) : y("", !0),
            w.value !== "__custom__" ? (n(), U(ot, {
              key: 1,
              modelValue: x.value,
              "onUpdate:modelValue": se[7] || (se[7] = (L) => x.value = L),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : y("", !0)
          ]),
          w.value === "__custom__" ? (n(), U(ot, {
            key: 0,
            modelValue: b.value,
            "onUpdate:modelValue": se[8] || (se[8] = (L) => b.value = L),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : y("", !0)
        ]),
        t("div", Yk, [
          t("div", Jk, [
            t("span", Qk, d(c.value.size) + " file(s) selected", 1),
            t("span", Xk, d(K(ne.value)), 1)
          ]),
          k(Ee, {
            variant: "primary",
            disabled: c.value.size === 0 || !le.value,
            onClick: _e
          }, {
            default: p(() => [...se[12] || (se[12] = [
              C(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), eb = /* @__PURE__ */ ke(Zk, [["__scopeId", "data-v-183acebc"]]), tb = { class: "token-config-modal" }, sb = { class: "provider-info" }, ob = { class: "provider-icon" }, nb = { class: "provider-name" }, ab = {
  key: 0,
  class: "current-token"
}, lb = { class: "mask" }, ib = { class: "token-input-section" }, rb = { class: "input-label" }, ub = { class: "help-text" }, cb = ["href"], db = { class: "modal-actions" }, mb = /* @__PURE__ */ we({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: s }) {
    const o = e, a = s, { updateConfig: l } = ut(), r = $(""), u = $(!1), c = $(!1), m = z(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), f = z(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), v = z(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), g = z(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), _ = z(
      () => o.provider === "huggingface" ? "Get your HuggingFace token →" : "Get your CivitAI API key →"
    );
    async function h() {
      if (r.value.trim()) {
        u.value = !0;
        try {
          const x = o.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l(x), r.value = "", a("saved"), a("close");
        } catch (x) {
          console.error("Failed to save token:", x);
        } finally {
          u.value = !1;
        }
      }
    }
    async function w() {
      c.value = !0;
      try {
        const x = o.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l(x), a("cleared"), a("close");
      } catch (x) {
        console.error("Failed to clear token:", x);
      } finally {
        c.value = !1;
      }
    }
    return (x, b) => (n(), U(Ct, {
      title: "Configure API Token",
      onClose: b[2] || (b[2] = (S) => x.$emit("close"))
    }, {
      body: p(() => [
        t("div", tb, [
          t("div", sb, [
            t("span", ob, d(f.value), 1),
            t("span", nb, d(m.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", ab, [
            b[4] || (b[4] = t("span", { class: "label" }, "Current token:", -1)),
            t("span", lb, d(e.currentTokenMask), 1),
            k(Ee, {
              variant: "danger",
              size: "sm",
              onClick: w,
              loading: c.value
            }, {
              default: p(() => [...b[3] || (b[3] = [
                C(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0),
          t("div", ib, [
            t("label", rb, d(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            k(ot, {
              modelValue: r.value,
              "onUpdate:modelValue": b[0] || (b[0] = (S) => r.value = S),
              type: "password",
              placeholder: v.value
            }, null, 8, ["modelValue", "placeholder"]),
            t("div", ub, [
              t("a", {
                href: g.value,
                target: "_blank",
                rel: "noopener"
              }, d(_.value), 9, cb)
            ])
          ])
        ])
      ]),
      footer: p(() => [
        t("div", db, [
          k(Ee, {
            variant: "secondary",
            onClick: b[1] || (b[1] = (S) => x.$emit("close"))
          }, {
            default: p(() => [...b[5] || (b[5] = [
              C(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(Ee, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: u.value,
            onClick: h
          }, {
            default: p(() => [...b[6] || (b[6] = [
              C(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }));
  }
}), fb = /* @__PURE__ */ ke(mb, [["__scopeId", "data-v-0687d0ce"]]), vb = { class: "huggingface-tab" }, pb = {
  key: 0,
  class: "search-section"
}, gb = { class: "search-header" }, hb = { class: "search-bar" }, yb = {
  key: 1,
  class: "search-results"
}, wb = {
  key: 0,
  class: "loading-state"
}, _b = {
  key: 1,
  class: "error-state"
}, kb = {
  key: 2,
  class: "results-list"
}, bb = ["onClick"], $b = { class: "repo-header" }, Cb = { class: "repo-id" }, xb = { class: "repo-stats" }, Sb = {
  class: "stat",
  title: "Downloads"
}, Ib = {
  class: "stat",
  title: "Likes"
}, Eb = {
  key: 0,
  class: "repo-desc"
}, Tb = {
  key: 1,
  class: "repo-tags"
}, Pb = {
  key: 3,
  class: "empty-state"
}, Mb = {
  key: 4,
  class: "hint-state"
}, Rb = /* @__PURE__ */ we({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s, getConfig: o } = ut(), a = $("search"), l = $(""), r = $([]), u = $(!1), c = $(null), m = $(!1), f = $(null), v = $("main"), g = $(), _ = $(), h = $(!1), w = $(null), x = z(() => {
      if (!c.value) return !1;
      const G = c.value.toLowerCase();
      return c.value.includes("401") || c.value.includes("403") || G.includes("authentication") || G.includes("unauthorized");
    });
    function b(G) {
      return G >= 1e6 ? `${(G / 1e6).toFixed(1)}M` : G >= 1e3 ? `${(G / 1e3).toFixed(1)}K` : String(G);
    }
    async function S() {
      const G = l.value.trim();
      if (!G) return;
      c.value = null;
      const I = $k(G);
      if (I.kind === "file" && I.repoId && I.path) {
        f.value = I.repoId, v.value = I.revision || "main";
        const O = I.path.split("/");
        O.length > 1 ? g.value = O.slice(0, -1).join("/") : g.value = void 0, _.value = I.path, a.value = "browse";
        return;
      }
      if (I.kind === "repo" && I.repoId) {
        f.value = I.repoId, v.value = I.revision || "main", g.value = I.path, _.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(G) && !G.includes("://")) {
        f.value = G, v.value = "main", g.value = void 0, _.value = void 0, a.value = "browse";
        return;
      }
      u.value = !0;
      try {
        const O = await s(G);
        r.value = O.results, m.value = !0;
      } catch (O) {
        c.value = O instanceof Error ? O.message : "Search failed";
      } finally {
        u.value = !1;
      }
    }
    function F(G) {
      f.value = G, v.value = "main", g.value = void 0, _.value = void 0, a.value = "browse";
    }
    function E() {
      a.value = "search", f.value = null, g.value = void 0, _.value = void 0;
    }
    async function P() {
      try {
        const G = await o();
        w.value = G.huggingface_token || null;
      } catch (G) {
        console.error("Failed to load config:", G);
      }
    }
    function D() {
      P(), x.value && l.value && S();
    }
    function V() {
      w.value = null;
    }
    return lt(P), (G, I) => (n(), i("div", vb, [
      a.value === "search" ? (n(), i("div", pb, [
        t("div", gb, [
          t("div", hb, [
            k(ot, {
              modelValue: l.value,
              "onUpdate:modelValue": I[0] || (I[0] = (O) => l.value = O),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: as(S, ["enter"])
            }, null, 8, ["modelValue"]),
            k(Ee, {
              variant: "primary",
              onClick: S,
              loading: u.value
            }, {
              default: p(() => [...I[5] || (I[5] = [
                C(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          k(Ee, {
            variant: "secondary",
            size: "sm",
            onClick: I[1] || (I[1] = (O) => h.value = !0)
          }, {
            default: p(() => [
              C(d(w.value ? `Token: ${w.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      a.value === "search" ? (n(), i("div", yb, [
        u.value ? (n(), i("div", wb, " Searching HuggingFace... ")) : c.value ? (n(), i("div", _b, [
          t("p", null, d(c.value), 1),
          x.value ? (n(), U(Ee, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: I[2] || (I[2] = (O) => h.value = !0)
          }, {
            default: p(() => [...I[6] || (I[6] = [
              C(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (n(), i("div", kb, [
          (n(!0), i(H, null, pe(r.value, (O) => (n(), i("div", {
            key: O.repo_id,
            class: "repo-card",
            onClick: (le) => F(O.repo_id)
          }, [
            t("div", $b, [
              t("span", Cb, d(O.repo_id), 1),
              t("div", xb, [
                t("span", Sb, [
                  I[7] || (I[7] = t("span", { class: "stat-icon" }, "↓", -1)),
                  C(" " + d(b(O.downloads)), 1)
                ]),
                t("span", Ib, [
                  I[8] || (I[8] = t("span", { class: "stat-icon" }, "★", -1)),
                  C(" " + d(b(O.likes)), 1)
                ])
              ])
            ]),
            O.description ? (n(), i("p", Eb, d(O.description), 1)) : y("", !0),
            O.tags.length > 0 ? (n(), i("div", Tb, [
              (n(!0), i(H, null, pe(O.tags.slice(0, 5), (le) => (n(), i("span", {
                key: le,
                class: "tag"
              }, d(le), 1))), 128))
            ])) : y("", !0)
          ], 8, bb))), 128))
        ])) : m.value ? (n(), i("div", Pb, " No repositories found ")) : (n(), i("div", Mb, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), U(eb, {
        key: 2,
        "repo-id": f.value,
        revision: v.value,
        "initial-path": g.value,
        "preselected-file": _.value,
        onBack: E,
        onQueue: I[3] || (I[3] = (O) => G.$emit("queue", O))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      h.value ? (n(), U(fb, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": w.value,
        onClose: I[4] || (I[4] = (O) => h.value = !1),
        onSaved: D,
        onCleared: V
      }, null, 8, ["current-token-mask"])) : y("", !0)
    ]));
  }
}), Db = /* @__PURE__ */ ke(Rb, [["__scopeId", "data-v-e13209bf"]]), Lb = { class: "civitai-tab" }, Ub = /* @__PURE__ */ we({
  __name: "CivitaiTab",
  setup(e) {
    return (s, o) => (n(), i("div", Lb, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), Nb = /* @__PURE__ */ ke(Ub, [["__scopeId", "data-v-44948051"]]), Ob = { class: "direct-url-tab" }, Ab = { class: "input-group" }, zb = { class: "input-group" }, Vb = {
  key: 0,
  class: "error"
}, Fb = { class: "actions" }, Bb = /* @__PURE__ */ we({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: s }) {
    const o = s, a = $(""), l = $(""), r = z(() => {
      const m = l.value.trim();
      if (!m) return null;
      const f = m.replace(/\\/g, "/").split("/").pop() || "";
      return f.includes(".") && !f.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), u = z(() => a.value.trim() !== "" && l.value.trim() !== "" && !r.value), c = () => {
      if (!u.value) return;
      const m = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: a.value.trim(),
        targetPath: l.value.trim(),
        filename: m
      }]), a.value = "", l.value = "";
    };
    return (m, f) => (n(), i("div", Ob, [
      t("div", Ab, [
        f[2] || (f[2] = t("label", null, "Download URL", -1)),
        k(ot, {
          modelValue: a.value,
          "onUpdate:modelValue": f[0] || (f[0] = (v) => a.value = v),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", zb, [
        f[3] || (f[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        k(ot, {
          modelValue: l.value,
          "onUpdate:modelValue": f[1] || (f[1] = (v) => l.value = v),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (n(), i("p", Vb, d(r.value), 1)) : y("", !0)
      ]),
      f[5] || (f[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", Fb, [
        k(Ee, {
          variant: "primary",
          disabled: !u.value,
          onClick: c
        }, {
          default: p(() => [...f[4] || (f[4] = [
            C(" Queue Download ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Wb = /* @__PURE__ */ ke(Bb, [["__scopeId", "data-v-01def7aa"]]), Gb = { class: "download-modal" }, jb = { class: "tab-bar" }, Hb = ["onClick"], Kb = { class: "tab-content" }, qb = /* @__PURE__ */ we({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = s, { addToQueue: a } = zo(), l = [
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = $("huggingface");
    function u(f) {
      a(f.map((v) => ({
        workflow: "__manual__",
        filename: v.filename,
        url: v.url,
        targetPath: v.destination ? `${v.destination}/${v.filename}` : v.filename
      }))), o("close");
    }
    function c(f) {
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
    return (f, v) => e.show ? (n(), U(Ct, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: m
    }, {
      body: p(() => [
        t("div", Gb, [
          t("div", jb, [
            (n(), i(H, null, pe(l, (g) => t("button", {
              key: g.id,
              class: Re(["tab-btn", { active: r.value === g.id }]),
              onClick: (_) => r.value = g.id
            }, d(g.icon) + " " + d(g.label), 11, Hb)), 64))
          ]),
          t("div", Kb, [
            r.value === "huggingface" ? (n(), U(Db, {
              key: 0,
              onQueue: u
            })) : r.value === "civitai" ? (n(), U(Nb, { key: 1 })) : r.value === "direct" ? (n(), U(Wb, {
              key: 2,
              onQueue: c
            })) : y("", !0)
          ])
        ])
      ]),
      footer: p(() => [
        k(Ee, {
          variant: "secondary",
          onClick: m
        }, {
          default: p(() => [...v[0] || (v[0] = [
            C(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), Hr = /* @__PURE__ */ ke(qb, [["__scopeId", "data-v-90a9f401"]]), Yb = /* @__PURE__ */ we({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: a, getStatus: l } = ut(), r = $([]), u = $([]), c = $("production"), m = $(!1), f = $(null), v = $(""), g = $(!1), _ = $(null), h = $(!1);
    function w() {
      g.value = !1, o("navigate", "model-index");
    }
    const x = z(
      () => r.value.reduce((I, O) => I + (O.size || 0), 0)
    ), b = z(() => {
      if (!v.value.trim()) return r.value;
      const I = v.value.toLowerCase();
      return r.value.filter((O) => O.filename.toLowerCase().includes(I));
    }), S = z(() => {
      if (!v.value.trim()) return u.value;
      const I = v.value.toLowerCase();
      return u.value.filter((O) => O.filename.toLowerCase().includes(I));
    }), F = z(() => {
      const I = {};
      for (const le of b.value) {
        const ne = le.type || "other";
        I[ne] || (I[ne] = []), I[ne].push(le);
      }
      const O = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(I).sort(([le], [ne]) => {
        const K = O.indexOf(le), j = O.indexOf(ne);
        return K >= 0 && j >= 0 ? K - j : K >= 0 ? -1 : j >= 0 ? 1 : le.localeCompare(ne);
      }).map(([le, ne]) => ({ type: le, models: ne }));
    });
    function E(I) {
      if (!I) return "Unknown";
      const O = I / (1024 * 1024);
      return O >= 1024 ? `${(O / 1024).toFixed(1)} GB` : `${O.toFixed(0)} MB`;
    }
    function P(I) {
      _.value = I.hash || I.filename;
    }
    function D(I) {
      o("navigate", "model-index");
    }
    function V(I) {
      alert(`Download functionality not yet implemented for ${I}`);
    }
    async function G() {
      m.value = !0, f.value = null;
      try {
        const I = await a();
        r.value = I, u.value = [];
        const O = await l();
        c.value = O.environment || "production";
      } catch (I) {
        f.value = I instanceof Error ? I.message : "Failed to load models";
      } finally {
        m.value = !1;
      }
    }
    return lt(G), (I, O) => (n(), i(H, null, [
      k(Ht, null, {
        header: p(() => [
          k(Kt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: O[1] || (O[1] = (le) => g.value = !0)
          }, {
            actions: p(() => [
              k(ve, {
                variant: "primary",
                size: "sm",
                onClick: O[0] || (O[0] = (le) => h.value = !0)
              }, {
                default: p(() => [...O[6] || (O[6] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    t("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  C(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: p(() => [
          k(Vo, {
            modelValue: v.value,
            "onUpdate:modelValue": O[2] || (O[2] = (le) => v.value = le),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: p(() => [
          m.value ? (n(), U(zs, {
            key: 0,
            message: "Loading environment models..."
          })) : f.value ? (n(), U(Vs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: G
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            r.value.length ? (n(), U(Cn, {
              key: 0,
              variant: "compact"
            }, {
              default: p(() => [
                C(" Total: " + d(r.value.length) + " models • " + d(E(x.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(H, null, pe(F.value, (le) => (n(), U(_t, {
              key: le.type,
              title: le.type.toUpperCase(),
              count: le.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: p(() => [
                (n(!0), i(H, null, pe(le.models, (ne) => (n(), U(Lt, {
                  key: ne.hash || ne.filename,
                  status: "synced"
                }, {
                  icon: p(() => [...O[7] || (O[7] = [
                    C("📦", -1)
                  ])]),
                  title: p(() => [
                    C(d(ne.filename), 1)
                  ]),
                  subtitle: p(() => [
                    C(d(E(ne.size)), 1)
                  ]),
                  details: p(() => [
                    k($t, {
                      label: "Used by:",
                      value: (ne.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k($t, {
                      label: "Path:",
                      value: ne.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: p(() => [
                    k(ve, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (K) => P(ne)
                    }, {
                      default: p(() => [...O[8] || (O[8] = [
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
            S.value.length ? (n(), U(_t, {
              key: 1,
              title: "MISSING",
              count: S.value.length
            }, {
              default: p(() => [
                (n(!0), i(H, null, pe(S.value, (le) => (n(), U(Lt, {
                  key: le.filename,
                  status: "broken"
                }, {
                  icon: p(() => [...O[9] || (O[9] = [
                    C("⚠", -1)
                  ])]),
                  title: p(() => [
                    C(d(le.filename), 1)
                  ]),
                  subtitle: p(() => [...O[10] || (O[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: p(() => {
                    var ne;
                    return [
                      k($t, {
                        label: "Required by:",
                        value: ((ne = le.workflow_names) == null ? void 0 : ne.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: p(() => [
                    k(ve, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ne) => V(le.filename)
                    }, {
                      default: p(() => [...O[11] || (O[11] = [
                        C(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ve, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => D(le.filename)
                    }, {
                      default: p(() => [...O[12] || (O[12] = [
                        C(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !b.value.length && !S.value.length ? (n(), U(gs, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(hs, {
        show: g.value,
        title: "About Environment Models",
        onClose: O[3] || (O[3] = (le) => g.value = !1)
      }, {
        content: p(() => [
          t("p", null, [
            O[13] || (O[13] = C(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + d(c.value) + '"', 1),
            O[14] || (O[14] = C(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: p(() => [
          k(ve, {
            variant: "primary",
            onClick: w
          }, {
            default: p(() => [...O[15] || (O[15] = [
              C(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (n(), U(wl, {
        key: 0,
        identifier: _.value,
        onClose: O[4] || (O[4] = (le) => _.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      k(Hr, {
        show: h.value,
        onClose: O[5] || (O[5] = (le) => h.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Jb = /* @__PURE__ */ ke(Yb, [["__scopeId", "data-v-af3ca736"]]), Qb = {
  key: 0,
  class: "indexing-progress"
}, Xb = { class: "progress-info" }, Zb = { class: "progress-label" }, e2 = { class: "progress-count" }, t2 = { class: "progress-bar" }, s2 = { class: "modal-content" }, o2 = { class: "modal-header" }, n2 = { class: "modal-body" }, a2 = { class: "input-group" }, l2 = { class: "current-path" }, i2 = { class: "input-group" }, r2 = { class: "modal-footer" }, u2 = /* @__PURE__ */ we({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = ut(), u = s, c = $([]), m = $(!1), f = $(!1), v = $(null), g = $(""), _ = $(!1), h = $(null), w = $(!1), x = $(null), b = $(""), S = $(!1), F = $(!1), E = $(null), P = z(
      () => c.value.reduce((j, B) => j + (B.size || 0), 0)
    ), D = z(() => {
      if (!g.value.trim()) return c.value;
      const j = g.value.toLowerCase();
      return c.value.filter((B) => {
        const q = B, X = B.sha256 || q.sha256_hash || "";
        return B.filename.toLowerCase().includes(j) || X.toLowerCase().includes(j);
      });
    }), V = z(() => {
      const j = {};
      for (const q of D.value) {
        const X = q.type || "other";
        j[X] || (j[X] = []), j[X].push(q);
      }
      const B = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(j).sort(([q], [X]) => {
        const Le = B.indexOf(q), ae = B.indexOf(X);
        return Le >= 0 && ae >= 0 ? Le - ae : Le >= 0 ? -1 : ae >= 0 ? 1 : q.localeCompare(X);
      }).map(([q, X]) => ({ type: q, models: X }));
    });
    function G(j) {
      if (!j) return "Unknown";
      const B = 1024 * 1024 * 1024, q = 1024 * 1024;
      return j >= B ? `${(j / B).toFixed(1)} GB` : j >= q ? `${(j / q).toFixed(0)} MB` : `${(j / 1024).toFixed(0)} KB`;
    }
    function I(j) {
      h.value = j.hash || j.filename;
    }
    async function O() {
      f.value = !0, v.value = null;
      try {
        const j = await a();
        await ne(), j.changes > 0 && console.log(`Scan complete: ${j.changes} changes detected`);
      } catch (j) {
        v.value = j instanceof Error ? j.message : "Failed to scan models";
      } finally {
        f.value = !1;
      }
    }
    async function le() {
      if (b.value.trim()) {
        S.value = !0, v.value = null;
        try {
          const j = await r(b.value.trim());
          x.value = j.path, w.value = !1, b.value = "", await ne(), console.log(`Directory changed: ${j.models_indexed} models indexed`), u("refresh");
        } catch (j) {
          v.value = j instanceof Error ? j.message : "Failed to change directory";
        } finally {
          S.value = !1;
        }
      }
    }
    async function ne() {
      m.value = !0, v.value = null;
      try {
        c.value = await o();
      } catch (j) {
        v.value = j instanceof Error ? j.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function K() {
      try {
        const j = await l();
        x.value = j.path;
      } catch {
      }
    }
    return lt(() => {
      ne(), K();
    }), (j, B) => (n(), i(H, null, [
      k(Ht, null, {
        header: p(() => [
          k(Kt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: B[2] || (B[2] = (q) => _.value = !0)
          }, {
            actions: p(() => [
              k(ve, {
                variant: "primary",
                size: "sm",
                disabled: f.value,
                onClick: O
              }, {
                default: p(() => [
                  C(d(f.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(ve, {
                variant: "primary",
                size: "sm",
                onClick: B[0] || (B[0] = (q) => w.value = !0)
              }, {
                default: p(() => [...B[11] || (B[11] = [
                  C(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              k(ve, {
                variant: "primary",
                size: "sm",
                onClick: B[1] || (B[1] = (q) => F.value = !0)
              }, {
                default: p(() => [...B[12] || (B[12] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    t("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  C(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: p(() => [
          E.value ? (n(), i("div", Qb, [
            t("div", Xb, [
              t("span", Zb, d(E.value.message), 1),
              t("span", e2, d(E.value.current) + "/" + d(E.value.total), 1)
            ]),
            t("div", t2, [
              t("div", {
                class: "progress-fill",
                style: es({ width: `${E.value.current / E.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          k(Vo, {
            modelValue: g.value,
            "onUpdate:modelValue": B[3] || (B[3] = (q) => g.value = q),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: p(() => [
          m.value || E.value ? (n(), U(zs, {
            key: 0,
            message: E.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (n(), U(Vs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: ne
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            c.value.length ? (n(), U(Cn, {
              key: 0,
              variant: "compact"
            }, {
              default: p(() => [
                C(" Total: " + d(c.value.length) + " models • " + d(G(P.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(H, null, pe(V.value, (q) => (n(), U(_t, {
              key: q.type,
              title: q.type.toUpperCase(),
              count: q.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: p(() => [
                (n(!0), i(H, null, pe(q.models, (X) => (n(), U(Lt, {
                  key: X.sha256 || X.filename,
                  status: "synced"
                }, {
                  icon: p(() => [...B[13] || (B[13] = [
                    C("📦", -1)
                  ])]),
                  title: p(() => [
                    C(d(X.filename), 1)
                  ]),
                  subtitle: p(() => [
                    C(d(G(X.size)), 1)
                  ]),
                  details: p(() => [
                    k($t, {
                      label: "Hash:",
                      value: X.hash ? X.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: p(() => [
                    k(ve, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Le) => I(X)
                    }, {
                      default: p(() => [...B[14] || (B[14] = [
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
            D.value.length ? y("", !0) : (n(), U(gs, {
              key: 1,
              icon: "📭",
              message: g.value ? `No models match '${g.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      k(hs, {
        show: _.value,
        title: "About Workspace Model Index",
        onClose: B[4] || (B[4] = (q) => _.value = !1)
      }, {
        content: p(() => [...B[15] || (B[15] = [
          t("p", null, [
            C(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            C(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      h.value ? (n(), U(wl, {
        key: 0,
        identifier: h.value,
        onClose: B[5] || (B[5] = (q) => h.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (n(), U(Nt, { to: "body" }, [
        w.value ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: B[9] || (B[9] = gt((q) => w.value = !1, ["self"]))
        }, [
          t("div", s2, [
            t("div", o2, [
              B[16] || (B[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: B[6] || (B[6] = (q) => w.value = !1)
              }, "✕")
            ]),
            t("div", n2, [
              t("div", a2, [
                B[17] || (B[17] = t("label", null, "Current Directory", -1)),
                t("code", l2, d(x.value || "Not set"), 1)
              ]),
              t("div", i2, [
                B[18] || (B[18] = t("label", null, "New Directory Path", -1)),
                k(ot, {
                  modelValue: b.value,
                  "onUpdate:modelValue": B[7] || (B[7] = (q) => b.value = q),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              B[19] || (B[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", r2, [
              k(Ee, {
                variant: "secondary",
                onClick: B[8] || (B[8] = (q) => w.value = !1)
              }, {
                default: p(() => [...B[20] || (B[20] = [
                  C(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(Ee, {
                variant: "primary",
                disabled: !b.value.trim() || S.value,
                loading: S.value,
                onClick: le
              }, {
                default: p(() => [
                  C(d(S.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      k(Hr, {
        show: F.value,
        onClose: B[10] || (B[10] = (q) => F.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), c2 = /* @__PURE__ */ ke(u2, [["__scopeId", "data-v-3705114c"]]), d2 = { class: "node-details" }, m2 = { class: "status-row" }, f2 = {
  key: 0,
  class: "detail-row"
}, v2 = { class: "value" }, p2 = { class: "detail-row" }, g2 = { class: "value" }, h2 = {
  key: 1,
  class: "detail-row"
}, y2 = { class: "value mono" }, w2 = {
  key: 2,
  class: "detail-row"
}, _2 = ["href"], k2 = {
  key: 3,
  class: "detail-row"
}, b2 = { class: "value mono small" }, $2 = { class: "detail-row" }, C2 = {
  key: 0,
  class: "value"
}, x2 = {
  key: 1,
  class: "workflow-list"
}, S2 = /* @__PURE__ */ we({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = z(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = z(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = z(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (c, m) => (n(), U(Ct, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: m[1] || (m[1] = (f) => a("close"))
    }, {
      body: p(() => [
        t("div", d2, [
          t("div", m2, [
            m[2] || (m[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Re(["status-badge", l.value])
            }, d(r.value), 3)
          ]),
          e.node.version ? (n(), i("div", f2, [
            m[3] || (m[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", v2, d(e.node.source === "development" ? "" : "v") + d(e.node.version), 1)
          ])) : y("", !0),
          t("div", p2, [
            m[4] || (m[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", g2, d(u.value), 1)
          ]),
          e.node.registry_id ? (n(), i("div", h2, [
            m[5] || (m[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", y2, d(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (n(), i("div", w2, [
            m[7] || (m[7] = t("span", { class: "label" }, "Repository:", -1)),
            t("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              C(d(e.node.repository) + " ", 1),
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
            ], 8, _2)
          ])) : y("", !0),
          e.node.download_url ? (n(), i("div", k2, [
            m[8] || (m[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", b2, d(e.node.download_url), 1)
          ])) : y("", !0),
          m[10] || (m[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", $2, [
            m[9] || (m[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (n(), i("span", C2, " Not used in any workflows ")) : (n(), i("div", x2, [
              (n(!0), i(H, null, pe(e.node.used_in_workflows, (f) => (n(), i("span", {
                key: f,
                class: "workflow-tag"
              }, d(f), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: p(() => [
        k(Ee, {
          variant: "secondary",
          onClick: m[0] || (m[0] = (f) => a("close"))
        }, {
          default: p(() => [...m[11] || (m[11] = [
            C(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), I2 = /* @__PURE__ */ ke(S2, [["__scopeId", "data-v-b342f626"]]), E2 = { class: "dialog-message" }, T2 = {
  key: 0,
  class: "dialog-details"
}, P2 = {
  key: 1,
  class: "dialog-warning"
}, M2 = /* @__PURE__ */ we({
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
    return (s, o) => (n(), U(Ct, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (a) => s.$emit("cancel"))
    }, {
      body: p(() => [
        t("p", E2, d(e.message), 1),
        e.details && e.details.length ? (n(), i("div", T2, [
          (n(!0), i(H, null, pe(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + d(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (n(), i("p", P2, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          C(" " + d(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: p(() => [
        k(Ee, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => s.$emit("cancel"))
        }, {
          default: p(() => [
            C(d(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (n(), U(Ee, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (a) => s.$emit("secondary"))
        }, {
          default: p(() => [
            C(d(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        k(Ee, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
        }, {
          default: p(() => [
            C(d(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), _l = /* @__PURE__ */ ke(M2, [["__scopeId", "data-v-3670b9f5"]]), R2 = { class: "mismatch-warning" }, D2 = { class: "version-mismatch" }, L2 = { class: "version-actual" }, U2 = { class: "version-expected" }, N2 = { style: { color: "var(--cg-color-warning)" } }, O2 = { style: { color: "var(--cg-color-warning)" } }, A2 = {
  key: 0,
  class: "community-status-badge"
}, z2 = { key: 0 }, V2 = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, F2 = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, B2 = /* @__PURE__ */ we({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getNodes: l, trackNodeAsDev: r, installNode: u, uninstallNode: c, queueNodeInstall: m } = ut(), f = $({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), v = $(!1), g = $(null), _ = $(""), h = $(!1), w = $(null), x = $(/* @__PURE__ */ new Set()), b = $(null), S = z(() => {
      if (!_.value.trim()) return f.value.nodes;
      const L = _.value.toLowerCase();
      return f.value.nodes.filter(
        (N) => {
          var oe, Ne;
          return N.name.toLowerCase().includes(L) || ((oe = N.description) == null ? void 0 : oe.toLowerCase().includes(L)) || ((Ne = N.repository) == null ? void 0 : Ne.toLowerCase().includes(L));
        }
      );
    }), F = z(
      () => S.value.filter((L) => L.installed && L.tracked)
    ), E = z(
      () => S.value.filter((L) => !L.installed && L.tracked && !L.issue_type)
    ), P = z(
      () => S.value.filter((L) => L.installed && !L.tracked)
    ), D = z(
      () => S.value.filter((L) => L.issue_type === "version_gated")
    ), V = z(
      () => S.value.filter((L) => L.issue_type === "uninstallable")
    ), G = z(() => D.value.length), I = z(() => V.value.length);
    function O(L) {
      return L.registry_id || L.name;
    }
    function le(L) {
      return x.value.has(O(L));
    }
    async function ne(L, N) {
      const oe = L.registry_id;
      if (!oe) {
        a("toast", `Node "${L.name}" has no package id for install`, "warning");
        return;
      }
      if (N === "git" && !L.repository) {
        a("toast", `Node "${L.name}" has no repository URL for git install`, "warning");
        return;
      }
      const Ne = {
        id: oe,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      N === "git" && L.repository && (Ne.repository = L.repository, Ne.install_source = "git"), await m(Ne), x.value.add(O(L)), a("toast", `✓ Queued install for "${L.name}"`, "success");
    }
    function K(L) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[L] || L;
    }
    const j = z(() => o.versionMismatches.length > 0);
    function B(L) {
      return !L.used_in_workflows || L.used_in_workflows.length === 0 ? "Not used in any workflows" : L.used_in_workflows.length === 1 ? L.used_in_workflows[0] : `${L.used_in_workflows.length} workflows`;
    }
    function q(L) {
      return L.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function X(L) {
      return L.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function Le(L) {
      return L.registry_id ? `Community-mapped package: ${L.registry_id}` : "Community-mapped package";
    }
    function ae(L) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function de(L) {
      w.value = L;
    }
    function ie() {
      a("open-node-manager");
    }
    function Ae(L) {
      b.value = {
        title: "Track as Development Node",
        message: `Track "${L}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          b.value = null;
          try {
            v.value = !0;
            const N = await r(L);
            N.status === "success" ? (a("toast", `✓ Node "${L}" tracked as development`, "success"), await se()) : a("toast", `Failed to track node: ${N.message || "Unknown error"}`, "error");
          } catch (N) {
            a("toast", `Error tracking node: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function _e(L) {
      b.value = {
        title: "Remove Untracked Node",
        message: `Remove "${L}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          b.value = null;
          try {
            v.value = !0;
            const N = await c(L);
            N.status === "success" ? (a("toast", `✓ Node "${L}" removed`, "success"), await se()) : a("toast", `Failed to remove node: ${N.message || "Unknown error"}`, "error");
          } catch (N) {
            a("toast", `Error removing node: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function Z(L) {
      b.value = {
        title: "Install Missing Node",
        message: `Install "${L}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          b.value = null;
          try {
            v.value = !0;
            const N = await u(L);
            N.status === "success" ? (a("toast", `✓ Node "${L}" installed`, "success"), await se()) : a("toast", `Failed to install node: ${N.message || "Unknown error"}`, "error");
          } catch (N) {
            a("toast", `Error installing node: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function A(L) {
      b.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${L.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          b.value = null;
          try {
            v.value = !0, await ne(L, "registry");
          } catch (N) {
            a("toast", `Error queueing install: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function M(L) {
      b.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${L.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          b.value = null;
          try {
            v.value = !0, await ne(L, "git");
          } catch (N) {
            a("toast", `Error queueing git install: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    async function se() {
      v.value = !0, g.value = null;
      try {
        f.value = await l();
      } catch (L) {
        g.value = L instanceof Error ? L.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return lt(se), (L, N) => (n(), i(H, null, [
      k(Ht, null, {
        header: p(() => [
          k(Kt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: N[0] || (N[0] = (oe) => h.value = !0)
          }, {
            actions: p(() => [
              k(ve, {
                variant: "primary",
                size: "sm",
                onClick: ie
              }, {
                default: p(() => [...N[7] || (N[7] = [
                  C(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: p(() => [
          k(Vo, {
            modelValue: _.value,
            "onUpdate:modelValue": N[1] || (N[1] = (oe) => _.value = oe),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: p(() => [
          v.value ? (n(), U(zs, {
            key: 0,
            message: "Loading nodes..."
          })) : g.value ? (n(), U(Vs, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: se
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            f.value.total_count ? (n(), U(Cn, {
              key: 0,
              variant: "compact"
            }, {
              default: p(() => [
                C(d(f.value.installed_count) + " installed ", 1),
                f.value.missing_count ? (n(), i(H, { key: 0 }, [
                  C(" • " + d(f.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                G.value ? (n(), i(H, { key: 1 }, [
                  C(" • " + d(G.value) + " blocked", 1)
                ], 64)) : y("", !0),
                I.value ? (n(), i(H, { key: 2 }, [
                  C(" • " + d(I.value) + " community-mapped", 1)
                ], 64)) : y("", !0),
                f.value.untracked_count ? (n(), i(H, { key: 3 }, [
                  C(" • " + d(f.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            j.value ? (n(), U(_t, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: p(() => [
                t("div", R2, [
                  N[8] || (N[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, d(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(H, null, pe(e.versionMismatches, (oe) => (n(), U(Lt, {
                  key: oe.name,
                  status: "warning"
                }, {
                  icon: p(() => [...N[9] || (N[9] = [
                    C("⚠", -1)
                  ])]),
                  title: p(() => [
                    C(d(oe.name), 1)
                  ]),
                  subtitle: p(() => [
                    t("span", D2, [
                      t("span", L2, d(oe.actual), 1),
                      N[10] || (N[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", U2, d(oe.expected), 1)
                    ])
                  ]),
                  actions: p(() => [
                    k(ve, {
                      variant: "warning",
                      size: "sm",
                      onClick: N[2] || (N[2] = (Ne) => a("repair-environment"))
                    }, {
                      default: p(() => [...N[11] || (N[11] = [
                        C(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            D.value.length ? (n(), U(_t, {
              key: 2,
              title: "BLOCKED",
              count: D.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: p(() => [
                (n(!0), i(H, null, pe(D.value, (oe) => (n(), U(Lt, {
                  key: `blocked-${oe.name}`,
                  status: "warning"
                }, {
                  icon: p(() => [...N[12] || (N[12] = [
                    C("⛔", -1)
                  ])]),
                  title: p(() => [
                    C(d(oe.name), 1)
                  ]),
                  subtitle: p(() => [
                    t("span", N2, d(q(oe)), 1)
                  ]),
                  details: p(() => [
                    k($t, {
                      label: "Guidance:",
                      value: oe.issue_guidance || X(oe)
                    }, null, 8, ["value"]),
                    k($t, {
                      label: "Used by:",
                      value: B(oe)
                    }, null, 8, ["value"])
                  ]),
                  actions: p(() => [
                    k(ve, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ne) => de(oe)
                    }, {
                      default: p(() => [...N[13] || (N[13] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            V.value.length ? (n(), U(_t, {
              key: 3,
              title: "COMMUNITY-MAPPED",
              count: V.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: p(() => [
                (n(!0), i(H, null, pe(V.value, (oe) => (n(), U(Lt, {
                  key: `community-${oe.name}`,
                  status: "warning"
                }, {
                  icon: p(() => [...N[14] || (N[14] = [
                    C("⚠", -1)
                  ])]),
                  title: p(() => [
                    C(d(oe.name), 1)
                  ]),
                  subtitle: p(() => [
                    t("span", O2, d(Le(oe)), 1)
                  ]),
                  details: p(() => [
                    k($t, {
                      label: "Guidance:",
                      value: oe.issue_guidance || ae(oe)
                    }, null, 8, ["value"]),
                    k($t, {
                      label: "Used by:",
                      value: B(oe)
                    }, null, 8, ["value"])
                  ]),
                  actions: p(() => [
                    k(ve, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ne) => de(oe)
                    }, {
                      default: p(() => [...N[15] || (N[15] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    le(oe) ? (n(), i("span", A2, "Queued")) : (n(), i(H, { key: 1 }, [
                      oe.registry_id ? (n(), U(ve, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (Ne) => A(oe)
                      }, {
                        default: p(() => [...N[16] || (N[16] = [
                          C(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      oe.repository ? (n(), U(ve, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (Ne) => M(oe)
                      }, {
                        default: p(() => [...N[17] || (N[17] = [
                          C(" Install via Git ", -1)
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
            P.value.length ? (n(), U(_t, {
              key: 4,
              title: "UNTRACKED",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: p(() => [
                (n(!0), i(H, null, pe(P.value, (oe) => (n(), U(Lt, {
                  key: oe.name,
                  status: "warning"
                }, {
                  icon: p(() => [...N[18] || (N[18] = [
                    C("?", -1)
                  ])]),
                  title: p(() => [
                    C(d(oe.name), 1)
                  ]),
                  subtitle: p(() => [...N[19] || (N[19] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: p(() => [
                    k($t, {
                      label: "Used by:",
                      value: B(oe)
                    }, null, 8, ["value"])
                  ]),
                  actions: p(() => [
                    k(ve, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ne) => de(oe)
                    }, {
                      default: p(() => [...N[20] || (N[20] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ve, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ne) => Ae(oe.name)
                    }, {
                      default: p(() => [...N[21] || (N[21] = [
                        C(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ve, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Ne) => _e(oe.name)
                    }, {
                      default: p(() => [...N[22] || (N[22] = [
                        C(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            F.value.length ? (n(), U(_t, {
              key: 5,
              title: "INSTALLED",
              count: F.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: p(() => [
                (n(!0), i(H, null, pe(F.value, (oe) => (n(), U(Lt, {
                  key: oe.name,
                  status: "synced"
                }, {
                  icon: p(() => [
                    C(d(oe.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: p(() => [
                    C(d(oe.name), 1)
                  ]),
                  subtitle: p(() => [
                    oe.version ? (n(), i("span", z2, d(oe.source === "development" ? "" : "v") + d(oe.version), 1)) : (n(), i("span", V2, "version unknown")),
                    t("span", F2, " • " + d(K(oe.source)), 1)
                  ]),
                  details: p(() => [
                    k($t, {
                      label: "Used by:",
                      value: B(oe)
                    }, null, 8, ["value"])
                  ]),
                  actions: p(() => [
                    k(ve, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ne) => de(oe)
                    }, {
                      default: p(() => [...N[23] || (N[23] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ve, {
                      variant: "secondary",
                      size: "xs",
                      onClick: ie
                    }, {
                      default: p(() => [...N[24] || (N[24] = [
                        C(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            E.value.length ? (n(), U(_t, {
              key: 6,
              title: "MISSING",
              count: E.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: p(() => [
                (n(!0), i(H, null, pe(E.value, (oe) => (n(), U(Lt, {
                  key: oe.name,
                  status: "missing"
                }, {
                  icon: p(() => [...N[25] || (N[25] = [
                    C("!", -1)
                  ])]),
                  title: p(() => [
                    C(d(oe.name), 1)
                  ]),
                  subtitle: p(() => [...N[26] || (N[26] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: p(() => [
                    k($t, {
                      label: "Required by:",
                      value: B(oe)
                    }, null, 8, ["value"])
                  ]),
                  actions: p(() => [
                    k(ve, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ne) => de(oe)
                    }, {
                      default: p(() => [...N[27] || (N[27] = [
                        C(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(ve, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ne) => Z(oe.name)
                    }, {
                      default: p(() => [...N[28] || (N[28] = [
                        C(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !F.value.length && !E.value.length && !D.value.length && !V.value.length && !P.value.length ? (n(), U(gs, {
              key: 7,
              icon: "📭",
              message: _.value ? `No nodes match '${_.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      k(hs, {
        show: h.value,
        title: "About Custom Nodes",
        onClose: N[4] || (N[4] = (oe) => h.value = !1)
      }, {
        content: p(() => [...N[29] || (N[29] = [
          t("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Installed:"),
            C(" Tracked nodes available in this environment"),
            t("br"),
            t("strong", null, "Missing:"),
            C(" Tracked nodes that need to be installed"),
            t("br"),
            t("strong", null, "Blocked:"),
            C(" Node types that require newer ComfyUI"),
            t("br"),
            t("strong", null, "Community-Mapped:"),
            C(" Actionable package mappings from community metadata"),
            t("br"),
            t("strong", null, "Untracked:"),
            C(" Nodes on filesystem but not in manifest ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: p(() => [
          k(ve, {
            variant: "primary",
            onClick: N[3] || (N[3] = (oe) => h.value = !1)
          }, {
            default: p(() => [...N[30] || (N[30] = [
              C(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), U(I2, {
        key: 0,
        node: w.value,
        onClose: N[5] || (N[5] = (oe) => w.value = null)
      }, null, 8, ["node"])) : y("", !0),
      b.value ? (n(), U(_l, {
        key: 1,
        title: b.value.title,
        message: b.value.message,
        warning: b.value.warning,
        "confirm-label": b.value.confirmLabel,
        destructive: b.value.destructive,
        onConfirm: b.value.onConfirm,
        onCancel: N[6] || (N[6] = (oe) => b.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), W2 = /* @__PURE__ */ ke(B2, [["__scopeId", "data-v-3ef68ac4"]]);
function Kr(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const G2 = { class: "remote-url-display" }, j2 = ["title"], H2 = ["title"], K2 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, q2 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Y2 = /* @__PURE__ */ we({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = $(!1), a = z(() => {
      if (s.url.length <= s.maxLength)
        return s.url;
      const r = s.url.slice(0, Math.floor(s.maxLength * 0.6)), u = s.url.slice(-Math.floor(s.maxLength * 0.3));
      return `${r}...${u}`;
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
    return (r, u) => (n(), i("div", G2, [
      t("span", {
        class: "url-text",
        title: e.url
      }, d(a.value), 9, j2),
      t("button", {
        class: Re(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (n(), i("svg", q2, [...u[1] || (u[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (n(), i("svg", K2, [...u[0] || (u[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, H2)
    ]));
  }
}), J2 = /* @__PURE__ */ ke(Y2, [["__scopeId", "data-v-7768a58d"]]), Q2 = { class: "remote-title" }, X2 = {
  key: 0,
  class: "default-badge"
}, Z2 = {
  key: 1,
  class: "sync-badge"
}, e$ = {
  key: 0,
  class: "ahead"
}, t$ = {
  key: 1,
  class: "behind"
}, s$ = {
  key: 1,
  class: "synced"
}, o$ = ["href"], n$ = {
  key: 1,
  class: "remote-url-text"
}, a$ = /* @__PURE__ */ we({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = z(() => s.fetchingRemote === s.remote.name), a = z(() => s.remote.is_default), l = z(() => s.syncStatus && s.syncStatus.behind > 0), r = z(() => s.syncStatus && s.syncStatus.ahead > 0), u = z(() => s.remote.push_url !== s.remote.fetch_url), c = z(() => {
      const f = s.remote.fetch_url, v = f.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : f.startsWith("https://") || f.startsWith("http://") ? f.replace(/\.git$/, "") : null;
    }), m = z(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (f, v) => (n(), U(Lt, {
      status: a.value ? "synced" : void 0
    }, fo({
      icon: p(() => [
        C(d(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: p(() => [
        t("div", Q2, [
          t("span", null, d(e.remote.name), 1),
          a.value ? (n(), i("span", X2, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", Z2, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(H, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", e$, "↑" + d(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", t$, "↓" + d(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", s$, "✓ synced"))
          ])) : y("", !0)
        ])
      ]),
      subtitle: p(() => [
        c.value ? (n(), i("a", {
          key: 0,
          href: c.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: v[0] || (v[0] = gt(() => {
          }, ["stop"]))
        }, d(m.value), 9, o$)) : (n(), i("span", n$, d(m.value), 1))
      ]),
      actions: p(() => [
        k(ve, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: v[1] || (v[1] = (g) => f.$emit("fetch", e.remote.name))
        }, {
          default: p(() => [...v[6] || (v[6] = [
            C(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        k(ve, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[2] || (v[2] = (g) => f.$emit("pull", e.remote.name))
        }, {
          default: p(() => [
            C(" Pull" + d(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(ve, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[3] || (v[3] = (g) => f.$emit("push", e.remote.name))
        }, {
          default: p(() => [
            C(" Push" + d(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(ve, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (g) => f.$emit("edit", e.remote.name))
        }, {
          default: p(() => [...v[7] || (v[7] = [
            C(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? y("", !0) : (n(), U(ve, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[5] || (v[5] = (g) => f.$emit("remove", e.remote.name))
        }, {
          default: p(() => [...v[8] || (v[8] = [
            C(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      u.value ? {
        name: "details",
        fn: p(() => [
          e.remote.push_url !== e.remote.fetch_url ? (n(), U($t, {
            key: 0,
            label: "Push URL:"
          }, {
            default: p(() => [
              k(J2, {
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
}), l$ = /* @__PURE__ */ ke(a$, [["__scopeId", "data-v-8310f3a8"]]), i$ = { class: "remote-form" }, r$ = { class: "form-header" }, u$ = { class: "form-body" }, c$ = {
  key: 0,
  class: "form-error"
}, d$ = { class: "form-actions" }, m$ = /* @__PURE__ */ we({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = $({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), r = $(!1), u = $(null);
    St(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const c = z(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function m() {
      if (!(!c.value || r.value)) {
        u.value = null, r.value = !0;
        try {
          a("submit", l.value);
        } catch (f) {
          u.value = f instanceof Error ? f.message : "Failed to submit form";
        } finally {
          r.value = !1;
        }
      }
    }
    return (f, v) => (n(), i("div", i$, [
      t("div", r$, [
        k(Qt, null, {
          default: p(() => [
            C(d(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", u$, [
        k(it, {
          label: "Remote Name",
          required: ""
        }, {
          default: p(() => [
            k(ot, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (g) => l.value.name = g),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        k(it, {
          label: "Fetch URL",
          required: ""
        }, {
          default: p(() => [
            k(ot, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (g) => l.value.fetchUrl = g),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        k(it, { label: "Push URL (optional)" }, {
          default: p(() => [
            k(ot, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (g) => l.value.pushUrl = g),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (n(), i("div", c$, d(u.value), 1)) : y("", !0)
      ]),
      t("div", d$, [
        k(ve, {
          variant: "primary",
          size: "md",
          disabled: !c.value,
          loading: r.value,
          onClick: m
        }, {
          default: p(() => [
            C(d(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        k(ve, {
          variant: "ghost",
          size: "md",
          onClick: v[3] || (v[3] = (g) => f.$emit("cancel"))
        }, {
          default: p(() => [...v[4] || (v[4] = [
            C(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), f$ = /* @__PURE__ */ ke(m$, [["__scopeId", "data-v-56021b18"]]), v$ = { class: "conflict-summary-box" }, p$ = { class: "summary-header" }, g$ = { class: "summary-text" }, h$ = { key: 0 }, y$ = {
  key: 1,
  class: "all-resolved"
}, w$ = { class: "summary-progress" }, _$ = { class: "progress-bar" }, k$ = { class: "progress-text" }, b$ = /* @__PURE__ */ we({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const s = e, o = z(
      () => s.conflictCount > 0 ? s.resolvedCount / s.conflictCount * 100 : 0
    );
    return (a, l) => (n(), i("div", v$, [
      t("div", p$, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", g$, [
          t("strong", null, d(e.conflictCount) + " conflict" + d(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (n(), i("p", h$, " Resolve all conflicts before " + d(e.operationType) + "ing ", 1)) : (n(), i("p", y$, " All conflicts resolved - ready to " + d(e.operationType), 1))
        ])
      ]),
      t("div", w$, [
        t("div", _$, [
          t("div", {
            class: "progress-fill",
            style: es({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", k$, d(e.resolvedCount) + " / " + d(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), $$ = /* @__PURE__ */ ke(b$, [["__scopeId", "data-v-4e9e6cc9"]]), C$ = { class: "modal-header" }, x$ = { class: "modal-title" }, S$ = { class: "modal-body" }, I$ = {
  key: 0,
  class: "error-box"
}, E$ = {
  key: 0,
  class: "error-hint"
}, T$ = {
  key: 1,
  class: "loading-state"
}, P$ = { class: "commit-summary" }, M$ = {
  key: 0,
  class: "commits-section"
}, R$ = { class: "commit-list" }, D$ = { class: "commit-hash" }, L$ = { class: "commit-message" }, U$ = { class: "commit-date" }, N$ = {
  key: 1,
  class: "changes-section"
}, O$ = {
  key: 0,
  class: "change-group",
  open: ""
}, A$ = { class: "change-count" }, z$ = { class: "change-list" }, V$ = {
  key: 0,
  class: "conflict-badge"
}, F$ = {
  key: 1,
  class: "change-group"
}, B$ = { class: "change-count" }, W$ = { class: "change-list" }, G$ = {
  key: 2,
  class: "change-group"
}, j$ = { class: "change-count" }, H$ = { class: "change-list" }, K$ = {
  key: 3,
  class: "strategy-section"
}, q$ = { class: "radio-group" }, Y$ = { class: "radio-option" }, J$ = { class: "radio-option" }, Q$ = { class: "radio-option" }, X$ = {
  key: 4,
  class: "up-to-date"
}, Z$ = { class: "modal-actions" }, vi = "comfygit.pullModelStrategy", eC = /* @__PURE__ */ we({
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
    const o = e, a = s, l = $(localStorage.getItem(vi) || "skip");
    St(l, (b) => {
      localStorage.setItem(vi, b);
    });
    const r = z(() => {
      var b;
      return ((b = o.error) == null ? void 0 : b.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = z(() => {
      if (!o.preview) return 0;
      const b = o.preview.changes.workflows;
      return b.added.length + b.modified.length + b.deleted.length;
    }), c = z(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), m = z(() => {
      var b;
      return u.value > 0 || c.value > 0 || (((b = o.preview) == null ? void 0 : b.changes.models.count) || 0) > 0;
    }), f = z(() => o.preview && Kr(o.preview) ? o.preview : null), v = z(() => {
      var b;
      return ((b = f.value) == null ? void 0 : b.workflow_conflicts.length) ?? 0;
    }), g = z(() => {
      var b;
      return ((b = o.conflictResolutions) == null ? void 0 : b.size) ?? 0;
    }), _ = z(
      () => v.value > 0 && g.value === v.value
    ), h = z(() => !(!o.preview || o.preview.has_uncommitted_changes || f.value && !_.value));
    function w(b) {
      if (!f.value) return !1;
      const S = b.replace(/\.json$/, "");
      return f.value.workflow_conflicts.some((F) => F.name === S);
    }
    function x(b) {
      const S = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: b, resolutions: S });
    }
    return (b, S) => {
      var F, E;
      return n(), U(Nt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[11] || (S[11] = (P) => b.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: S[10] || (S[10] = gt(() => {
            }, ["stop"]))
          }, [
            t("div", C$, [
              t("h3", x$, "PULL FROM " + d(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: S[0] || (S[0] = (P) => b.$emit("close"))
              }, "✕")
            ]),
            t("div", S$, [
              e.error ? (n(), i("div", I$, [
                S[13] || (S[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  S[12] || (S[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, d(e.error), 1),
                  r.value ? (n(), i("p", E$, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (n(), i("div", T$, [...S[14] || (S[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                C(" Loading preview... ", -1)
              ])])) : (F = e.preview) != null && F.has_uncommitted_changes ? (n(), i(H, { key: 2 }, [
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
              ], 64)) : e.preview ? (n(), i(H, { key: 3 }, [
                t("div", P$, [
                  S[17] || (S[17] = t("span", { class: "icon" }, "📥", -1)),
                  C(" " + d(e.preview.commits_behind) + " commit" + d(e.preview.commits_behind !== 1 ? "s" : "") + " from " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", M$, [
                  S[18] || (S[18] = t("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  t("div", R$, [
                    (n(!0), i(H, null, pe(e.preview.commits, (P) => (n(), i("div", {
                      key: P.hash,
                      class: "commit-item"
                    }, [
                      t("span", D$, d(P.short_hash || P.hash.slice(0, 7)), 1),
                      t("span", L$, d(P.message), 1),
                      t("span", U$, d(P.date_relative || P.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                m.value ? (n(), i("div", N$, [
                  S[22] || (S[22] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (n(), i("details", O$, [
                    t("summary", null, [
                      S[19] || (S[19] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", A$, d(u.value) + " changes", 1)
                    ]),
                    t("div", z$, [
                      (n(!0), i(H, null, pe(e.preview.changes.workflows.added, (P) => (n(), i("div", {
                        key: "a-" + P,
                        class: "change-item add"
                      }, " + " + d(P), 1))), 128)),
                      (n(!0), i(H, null, pe(e.preview.changes.workflows.modified, (P) => (n(), i("div", {
                        key: "m-" + P,
                        class: "change-item modify"
                      }, [
                        C(" ~ " + d(P) + " ", 1),
                        w(P) ? (n(), i("span", V$, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (n(!0), i(H, null, pe(e.preview.changes.workflows.deleted, (P) => (n(), i("div", {
                        key: "d-" + P,
                        class: "change-item delete"
                      }, " - " + d(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  c.value > 0 ? (n(), i("details", F$, [
                    t("summary", null, [
                      S[20] || (S[20] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", B$, d(c.value) + " to install", 1)
                    ]),
                    t("div", W$, [
                      (n(!0), i(H, null, pe(e.preview.changes.nodes.to_install, (P) => (n(), i("div", {
                        key: P,
                        class: "change-item add"
                      }, " + " + d(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", G$, [
                    t("summary", null, [
                      S[21] || (S[21] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", j$, d(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", H$, [
                      (n(!0), i(H, null, pe(e.preview.changes.models.referenced, (P) => (n(), i("div", {
                        key: P,
                        class: "change-item"
                      }, d(P), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                f.value ? (n(), U($$, {
                  key: 2,
                  "conflict-count": v.value,
                  "resolved-count": g.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", K$, [
                  S[27] || (S[27] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", q$, [
                    t("label", Y$, [
                      at(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[1] || (S[1] = (P) => l.value = P),
                        value: "all"
                      }, null, 512), [
                        [ds, l.value]
                      ]),
                      S[23] || (S[23] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", J$, [
                      at(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (P) => l.value = P),
                        value: "required"
                      }, null, 512), [
                        [ds, l.value]
                      ]),
                      S[24] || (S[24] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", Q$, [
                      at(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[3] || (S[3] = (P) => l.value = P),
                        value: "skip"
                      }, null, 512), [
                        [ds, l.value]
                      ]),
                      S[25] || (S[25] = t("span", null, "Skip model downloads", -1)),
                      S[26] || (S[26] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  S[28] || (S[28] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (n(), i("div", X$, [
                  S[29] || (S[29] = t("span", { class: "icon" }, "✓", -1)),
                  C(" Already up to date with " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", Z$, [
              k(ve, {
                variant: "secondary",
                onClick: S[4] || (S[4] = (P) => b.$emit("close"))
              }, {
                default: p(() => [...S[30] || (S[30] = [
                  C(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (n(), i(H, { key: 0 }, [
                k(ve, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: S[5] || (S[5] = (P) => x(!1))
                }, {
                  default: p(() => [...S[31] || (S[31] = [
                    C(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                k(ve, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: S[6] || (S[6] = (P) => x(!0))
                }, {
                  default: p(() => [...S[32] || (S[32] = [
                    C(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (E = e.preview) != null && E.has_uncommitted_changes ? (n(), U(ve, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: S[7] || (S[7] = (P) => x(!0))
              }, {
                default: p(() => [...S[33] || (S[33] = [
                  C(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (n(), i(H, { key: 2 }, [
                f.value && !_.value ? (n(), U(ve, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (P) => a("openConflictResolution"))
                }, {
                  default: p(() => [
                    C(" Resolve Conflicts (" + d(g.value) + "/" + d(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (n(), U(ve, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !h.value,
                  onClick: S[9] || (S[9] = (P) => x(!1))
                }, {
                  default: p(() => [...S[34] || (S[34] = [
                    C(" Pull Changes ", -1)
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
}), tC = /* @__PURE__ */ ke(eC, [["__scopeId", "data-v-1d633bba"]]), sC = { class: "modal-header" }, oC = { class: "modal-title" }, nC = { class: "modal-body" }, aC = {
  key: 0,
  class: "loading-state"
}, lC = {
  key: 1,
  class: "warning-box"
}, iC = {
  key: 0,
  class: "commits-section"
}, rC = { class: "commit-list" }, uC = { class: "commit-hash" }, cC = { class: "commit-message" }, dC = { class: "commit-date" }, mC = { class: "force-option" }, fC = { class: "checkbox-option" }, vC = { class: "commit-summary" }, pC = { key: 0 }, gC = { key: 1 }, hC = {
  key: 0,
  class: "info-box"
}, yC = {
  key: 1,
  class: "commits-section"
}, wC = { class: "commit-list" }, _C = { class: "commit-hash" }, kC = { class: "commit-message" }, bC = { class: "commit-date" }, $C = {
  key: 2,
  class: "up-to-date"
}, CC = { class: "modal-actions" }, xC = /* @__PURE__ */ we({
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
    const o = s, a = $(!1);
    function l(r) {
      o("push", { force: r });
    }
    return (r, u) => {
      var c, m, f;
      return n(), U(Nt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (v) => r.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: u[6] || (u[6] = gt(() => {
            }, ["stop"]))
          }, [
            t("div", sC, [
              t("h3", oC, "PUSH TO " + d(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: u[0] || (u[0] = (v) => r.$emit("close"))
              }, "✕")
            ]),
            t("div", nC, [
              e.loading ? (n(), i("div", aC, [...u[8] || (u[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                C(" Loading preview... ", -1)
              ])])) : (c = e.preview) != null && c.has_uncommitted_changes ? (n(), i("div", lC, [...u[9] || (u[9] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (m = e.preview) != null && m.remote_has_new_commits ? (n(), i(H, { key: 2 }, [
                u[13] || (u[13] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "REMOTE HAS NEW COMMITS"),
                    t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (n(), i("div", iC, [
                  u[10] || (u[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", rC, [
                    (n(!0), i(H, null, pe(e.preview.commits, (v) => (n(), i("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", uC, d(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", cC, d(v.message), 1),
                      t("span", dC, d(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", mC, [
                  t("label", fC, [
                    at(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (v) => a.value = v)
                    }, null, 512), [
                      [hn, a.value]
                    ]),
                    u[11] || (u[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  u[12] || (u[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (n(), i(H, { key: 3 }, [
                t("div", vC, [
                  u[14] || (u[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (n(), i("span", pC, " Creating " + d(e.preview.remote) + "/" + d(e.preview.branch) + " with " + d(e.preview.commits_ahead) + " commit" + d(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (n(), i("span", gC, " Pushing " + d(e.preview.commits_ahead) + " commit" + d(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + d(e.preview.remote) + "/" + d(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (n(), i("div", hC, [...u[15] || (u[15] = [
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
                e.preview.commits_ahead > 0 ? (n(), i("div", yC, [
                  u[16] || (u[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", wC, [
                    (n(!0), i(H, null, pe(e.preview.commits, (v) => (n(), i("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", _C, d(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", kC, d(v.message), 1),
                      t("span", bC, d(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (n(), i("div", $C, [
                  u[17] || (u[17] = t("span", { class: "icon" }, "✓", -1)),
                  C(" Nothing to push - already up to date with " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", CC, [
              k(ve, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (v) => r.$emit("close"))
              }, {
                default: p(() => [...u[18] || (u[18] = [
                  C(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (f = e.preview) != null && f.remote_has_new_commits ? (n(), i(H, { key: 0 }, [
                k(ve, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (v) => r.$emit("pull-first"))
                }, {
                  default: p(() => [...u[19] || (u[19] = [
                    C(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                k(ve, {
                  variant: "destructive",
                  disabled: !a.value,
                  loading: e.pushing,
                  onClick: u[4] || (u[4] = (v) => l(!0))
                }, {
                  default: p(() => [...u[20] || (u[20] = [
                    C(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (n(), U(ve, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: u[5] || (u[5] = (v) => l(!1))
              }, {
                default: p(() => [...u[21] || (u[21] = [
                  C(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : y("", !0)
            ])
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), SC = /* @__PURE__ */ ke(xC, [["__scopeId", "data-v-3c2e35ab"]]), IC = { class: "resolution-choice-group" }, EC = ["disabled"], TC = ["disabled"], PC = /* @__PURE__ */ we({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("div", IC, [
      t("button", {
        class: Re(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, EC),
      t("button", {
        class: Re(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, TC)
    ]));
  }
}), MC = /* @__PURE__ */ ke(PC, [["__scopeId", "data-v-985715ed"]]), RC = { class: "conflict-header" }, DC = { class: "conflict-info" }, LC = { class: "workflow-name" }, UC = { class: "conflict-description" }, NC = {
  key: 0,
  class: "resolved-badge"
}, OC = { class: "resolved-text" }, AC = { class: "conflict-hashes" }, zC = { class: "hash-item" }, VC = { class: "hash-item" }, FC = { class: "conflict-actions" }, BC = /* @__PURE__ */ we({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = $(o.resolution);
    St(() => o.resolution, (m) => {
      l.value = m;
    }), St(l, (m) => {
      m && a("resolve", m);
    });
    const r = z(() => l.value !== null), u = z(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), c = z(() => {
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
      var v, g;
      return n(), i("div", {
        class: Re(["conflict-item", { resolved: r.value }])
      }, [
        t("div", RC, [
          f[2] || (f[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", DC, [
            t("code", LC, d(e.conflict.name) + ".json", 1),
            t("div", UC, d(u.value), 1)
          ]),
          r.value ? (n(), i("div", NC, [
            f[1] || (f[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", OC, d(c.value), 1)
          ])) : y("", !0)
        ]),
        t("div", AC, [
          t("span", zC, [
            f[3] || (f[3] = C("Your: ", -1)),
            t("code", null, d(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", VC, [
            f[4] || (f[4] = C("Theirs: ", -1)),
            t("code", null, d(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", FC, [
          k(MC, {
            modelValue: l.value,
            "onUpdate:modelValue": f[0] || (f[0] = (_) => l.value = _),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), WC = /* @__PURE__ */ ke(BC, [["__scopeId", "data-v-506d3bbf"]]), GC = { class: "resolution-content" }, jC = {
  key: 0,
  class: "error-box"
}, HC = { class: "resolution-header" }, KC = { class: "header-stats" }, qC = { class: "stat" }, YC = { class: "stat-value" }, JC = { class: "stat resolved" }, QC = { class: "stat-value" }, XC = {
  key: 0,
  class: "stat pending"
}, ZC = { class: "stat-value" }, e3 = { class: "conflicts-list" }, t3 = {
  key: 1,
  class: "all-resolved-message"
}, s3 = /* @__PURE__ */ we({
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
    const o = e, a = s, l = z(() => o.resolutions.size), r = z(() => o.workflowConflicts.length - l.value), u = z(() => l.value === o.workflowConflicts.length), c = z(
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
    function g() {
      a("apply");
    }
    return (_, h) => (n(), U(Ct, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: p(() => [
        t("div", GC, [
          e.error ? (n(), i("div", jC, [
            h[1] || (h[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              h[0] || (h[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, d(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", HC, [
            t("div", KC, [
              t("div", qC, [
                t("span", YC, d(e.workflowConflicts.length), 1),
                h[2] || (h[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", JC, [
                t("span", QC, d(l.value), 1),
                h[3] || (h[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (n(), i("div", XC, [
                t("span", ZC, d(r.value), 1),
                h[4] || (h[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            h[5] || (h[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", e3, [
            (n(!0), i(H, null, pe(e.workflowConflicts, (w) => (n(), U(WC, {
              key: w.name,
              conflict: w,
              resolution: m(w.name),
              onResolve: (x) => f(w.name, x)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (n(), i("div", t3, [
            h[6] || (h[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + d(c.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: p(() => [
        k(Ee, {
          variant: "secondary",
          onClick: v
        }, {
          default: p(() => [...h[7] || (h[7] = [
            C(" Cancel ", -1)
          ])]),
          _: 1
        }),
        h[8] || (h[8] = t("div", { class: "footer-spacer" }, null, -1)),
        k(Ee, {
          variant: "primary",
          disabled: !u.value || e.validating,
          loading: e.validating,
          onClick: g
        }, {
          default: p(() => [
            C(d(c.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), o3 = /* @__PURE__ */ ke(s3, [["__scopeId", "data-v-c58d150d"]]), n3 = { class: "node-conflict-item" }, a3 = { class: "node-header" }, l3 = { class: "node-name" }, i3 = { class: "node-id" }, r3 = { class: "version-comparison" }, u3 = { class: "version yours" }, c3 = { class: "version theirs" }, d3 = { class: "chosen-version" }, m3 = { class: "chosen" }, f3 = { class: "chosen-reason" }, v3 = { class: "affected-workflows" }, p3 = { class: "wf-source" }, g3 = { class: "wf-version" }, h3 = /* @__PURE__ */ we({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", n3, [
      t("div", a3, [
        t("code", l3, d(e.conflict.node_name), 1),
        t("span", i3, "(" + d(e.conflict.node_id) + ")", 1)
      ]),
      t("div", r3, [
        t("div", u3, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, d(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", c3, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, d(e.conflict.target_version), 1)
        ])
      ]),
      t("div", d3, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", m3, d(e.conflict.chosen_version), 1),
        t("span", f3, d(e.conflict.chosen_reason), 1)
      ]),
      t("details", v3, [
        t("summary", null, " Affected workflows (" + d(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (n(!0), i(H, null, pe(e.conflict.affected_workflows, (a) => (n(), i("li", {
            key: a.name
          }, [
            t("code", null, d(a.name), 1),
            t("span", p3, "(" + d(a.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", g3, "needs v" + d(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), y3 = /* @__PURE__ */ ke(h3, [["__scopeId", "data-v-8b626725"]]), w3 = { class: "validation-content" }, _3 = {
  key: 0,
  class: "compatible-message"
}, k3 = { class: "conflicts-list" }, b3 = {
  key: 2,
  class: "warnings-section"
}, $3 = /* @__PURE__ */ we({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = z(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, u) => (n(), U(Ct, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (c) => a("cancel"))
    }, {
      body: p(() => [
        t("div", w3, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (n(), i("div", _3, [
            u[5] || (u[5] = t("span", { class: "icon" }, "✓", -1)),
            t("div", null, [
              u[4] || (u[4] = t("strong", null, "All clear!", -1)),
              t("p", null, "Your workflow choices are compatible. Ready to " + d(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (n(), i(H, { key: 1 }, [
            u[6] || (u[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", k3, [
              (n(!0), i(H, null, pe(e.validation.node_conflicts, (c) => (n(), U(y3, {
                key: c.node_id,
                conflict: c
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (n(), i("div", b3, [
            u[8] || (u[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (n(!0), i(H, null, pe(e.validation.warnings, (c, m) => (n(), i("li", { key: m }, d(c), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: p(() => [
        k(Ee, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (c) => a("cancel"))
        }, {
          default: p(() => [...u[9] || (u[9] = [
            C(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = t("div", { class: "footer-spacer" }, null, -1)),
        k(Ee, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (c) => a("goBack"))
        }, {
          default: p(() => [...u[10] || (u[10] = [
            C(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        k(Ee, {
          variant: "primary",
          loading: e.executing,
          onClick: u[2] || (u[2] = (c) => a("proceed"))
        }, {
          default: p(() => [
            C(d(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), C3 = /* @__PURE__ */ ke($3, [["__scopeId", "data-v-fefd26ed"]]), x3 = { key: 0 }, S3 = /* @__PURE__ */ we({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(e, { emit: s }) {
    const o = s, {
      getRemotes: a,
      addRemote: l,
      removeRemote: r,
      updateRemoteUrl: u,
      fetchRemote: c,
      getRemoteSyncStatus: m,
      getPullPreview: f,
      pullFromRemote: v,
      getPushPreview: g,
      pushToRemote: _,
      validateMerge: h
    } = ut(), w = $([]), x = $(null), b = $({}), S = $(!1), F = $(null), E = $(""), P = $(!1), D = $(null), V = $(!1), G = $("add"), I = $({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), O = z(() => {
      if (!E.value.trim()) return w.value;
      const Ce = E.value.toLowerCase();
      return w.value.filter(
        (Oe) => Oe.name.toLowerCase().includes(Ce) || Oe.fetch_url.toLowerCase().includes(Ce) || Oe.push_url.toLowerCase().includes(Ce)
      );
    });
    async function le() {
      S.value = !0, F.value = null;
      try {
        const Ce = await a();
        w.value = Ce.remotes, x.value = Ce.current_branch_tracking || null, await Promise.all(
          Ce.remotes.map(async (Oe) => {
            const Me = await m(Oe.name);
            Me && (b.value[Oe.name] = Me);
          })
        );
      } catch (Ce) {
        F.value = Ce instanceof Error ? Ce.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function ne() {
      G.value = "add", I.value = { name: "", fetchUrl: "", pushUrl: "" }, V.value = !0;
    }
    function K(Ce) {
      const Oe = w.value.find((Me) => Me.name === Ce);
      Oe && (G.value = "edit", I.value = {
        name: Oe.name,
        fetchUrl: Oe.fetch_url,
        pushUrl: Oe.push_url
      }, V.value = !0);
    }
    async function j(Ce) {
      try {
        G.value === "add" ? await l(Ce.name, Ce.fetchUrl) : await u(Ce.name, Ce.fetchUrl, Ce.pushUrl || void 0), V.value = !1, await le();
      } catch (Oe) {
        F.value = Oe instanceof Error ? Oe.message : "Operation failed";
      }
    }
    function B() {
      V.value = !1, I.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function q(Ce) {
      D.value = Ce;
      try {
        await c(Ce);
        const Oe = await m(Ce);
        Oe && (b.value[Ce] = Oe), o("toast", `✓ Fetched from ${Ce}`, "success");
      } catch (Oe) {
        o("toast", Oe instanceof Error ? Oe.message : "Fetch failed", "error");
      } finally {
        D.value = null;
      }
    }
    async function X(Ce) {
      if (confirm(`Remove remote "${Ce}"?`))
        try {
          await r(Ce), await le();
        } catch (Oe) {
          F.value = Oe instanceof Error ? Oe.message : "Failed to remove remote";
        }
    }
    function Le() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const ae = $("idle"), de = z(() => ae.value === "pull_preview"), ie = z(
      () => ae.value === "resolving" || ae.value === "validating"
    ), Ae = z(
      () => ae.value === "validation_review" || ae.value === "executing"
    ), _e = $(!1), Z = $(null), A = $(!1), M = $(null), se = $(!1), L = $(null), N = $(null), oe = $(/* @__PURE__ */ new Map()), Ne = $(null), ze = $(null), W = z(() => L.value && Kr(L.value) ? L.value : null);
    async function J(Ce) {
      M.value = Ce, ae.value = "pull_preview", se.value = !0, L.value = null, N.value = null;
      try {
        L.value = await f(Ce);
      } catch (Oe) {
        N.value = Oe instanceof Error ? Oe.message : "Failed to load pull preview";
      } finally {
        se.value = !1;
      }
    }
    function re() {
      ae.value = "idle", L.value = null, N.value = null, M.value = null;
    }
    async function xe(Ce) {
      if (!M.value) return;
      ae.value = "executing", N.value = null;
      const Oe = M.value;
      try {
        const Me = await v(Oe, Ce);
        if (Me.rolled_back) {
          N.value = `Pull failed and was rolled back: ${Me.error || "Unknown error"}`, ae.value = "pull_preview";
          return;
        }
        Ue(), ae.value = "idle", o("toast", `✓ Pulled from ${Oe}`, "success"), await le();
      } catch (Me) {
        N.value = Me instanceof Error ? Me.message : "Pull failed", ae.value = "pull_preview";
      }
    }
    function be() {
      W.value && (ae.value = "resolving", ze.value = null);
    }
    function $e(Ce, Oe) {
      oe.value.set(Ce, { name: Ce, resolution: Oe });
    }
    function De() {
      ae.value = "pull_preview";
    }
    async function ye() {
      ae.value = "validating", ze.value = null;
      try {
        const Ce = Array.from(oe.value.values());
        Ne.value = await h(M.value, Ce), ae.value = "validation_review";
      } catch (Ce) {
        ze.value = Ce instanceof Error ? Ce.message : "Validation failed", ae.value = "resolving";
      }
    }
    async function Te() {
      ae.value = "executing";
      const Ce = M.value;
      try {
        const Oe = Array.from(oe.value.values()), Me = await v(Ce, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Oe
        });
        if (Me.rolled_back) {
          N.value = `Pull failed and was rolled back: ${Me.error || "Unknown error"}`, ae.value = "pull_preview";
          return;
        }
        Ue(), ae.value = "idle", o("toast", `✓ Pulled from ${Ce}`, "success"), await le();
      } catch (Oe) {
        N.value = Oe instanceof Error ? Oe.message : "Pull failed", ae.value = "validation_review";
      }
    }
    function fe() {
      ae.value = "resolving";
    }
    function We() {
      Ue(), ae.value = "idle";
    }
    function Ue() {
      oe.value.clear(), Ne.value = null, ze.value = null, N.value = null, L.value = null, M.value = null;
    }
    async function ge(Ce) {
      M.value = Ce, _e.value = !0, se.value = !0, Z.value = null;
      try {
        Z.value = await g(Ce);
      } catch (Oe) {
        F.value = Oe instanceof Error ? Oe.message : "Failed to load push preview";
      } finally {
        se.value = !1;
      }
    }
    function Y() {
      _e.value = !1, Z.value = null, M.value = null;
    }
    async function Ve(Ce) {
      if (!M.value) return;
      A.value = !0;
      const Oe = M.value;
      try {
        await _(Oe, Ce), Y(), o("toast", `✓ Pushed to ${Oe}`, "success"), await le();
      } catch (Me) {
        o("toast", Me instanceof Error ? Me.message : "Push failed", "error");
      } finally {
        A.value = !1;
      }
    }
    function Ie() {
      const Ce = M.value;
      Y(), Ce && J(Ce);
    }
    return lt(le), (Ce, Oe) => (n(), i(H, null, [
      k(Ht, null, {
        header: p(() => [
          k(Kt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Oe[0] || (Oe[0] = (Me) => P.value = !0)
          }, {
            actions: p(() => [
              V.value ? y("", !0) : (n(), U(ve, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: ne
              }, {
                default: p(() => [...Oe[3] || (Oe[3] = [
                  C(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: p(() => [
          V.value ? y("", !0) : (n(), U(Vo, {
            key: 0,
            modelValue: E.value,
            "onUpdate:modelValue": Oe[1] || (Oe[1] = (Me) => E.value = Me),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: p(() => [
          S.value ? (n(), U(zs, {
            key: 0,
            message: "Loading remotes..."
          })) : F.value ? (n(), U(Vs, {
            key: 1,
            message: F.value,
            retry: !0,
            onRetry: le
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            V.value ? (n(), U(f$, {
              key: 0,
              mode: G.value,
              "remote-name": I.value.name,
              "fetch-url": I.value.fetchUrl,
              "push-url": I.value.pushUrl,
              onSubmit: j,
              onCancel: B
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            w.value.length && !V.value ? (n(), U(Cn, {
              key: 1,
              variant: "compact"
            }, {
              default: p(() => [
                C(" Total: " + d(w.value.length) + " remote" + d(w.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (n(), i("span", x3, " • Tracking: " + d(x.value.remote) + "/" + d(x.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            O.value.length && !V.value ? (n(), U(_t, {
              key: 2,
              title: "REMOTES",
              count: O.value.length
            }, {
              default: p(() => [
                (n(!0), i(H, null, pe(O.value, (Me) => (n(), U(l$, {
                  key: Me.name,
                  remote: Me,
                  "sync-status": b.value[Me.name],
                  "fetching-remote": D.value,
                  onFetch: q,
                  onEdit: K,
                  onRemove: X,
                  onPull: J,
                  onPush: ge
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !O.value.length && !V.value ? (n(), U(gs, {
              key: 3,
              icon: "🌐",
              message: E.value ? `No remotes match '${E.value}'` : "No remotes configured."
            }, {
              actions: p(() => [
                k(ve, {
                  variant: "primary",
                  onClick: ne
                }, {
                  default: p(() => [...Oe[4] || (Oe[4] = [
                    C(" Add Your First Remote ", -1)
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
      k(hs, {
        show: P.value,
        title: "About Git Remotes",
        onClose: Oe[2] || (Oe[2] = (Me) => P.value = !1)
      }, {
        content: p(() => [...Oe[5] || (Oe[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            C(" The "),
            t("strong", null, '"origin"'),
            C(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: p(() => [
          k(ve, {
            variant: "link",
            onClick: Le
          }, {
            default: p(() => [...Oe[6] || (Oe[6] = [
              C(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k(tC, {
        show: de.value,
        "remote-name": M.value || "",
        preview: L.value,
        loading: se.value,
        pulling: ae.value === "executing",
        error: N.value,
        "conflict-resolutions": oe.value,
        onClose: re,
        onPull: xe,
        onOpenConflictResolution: be
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      k(SC, {
        show: _e.value,
        "remote-name": M.value || "",
        preview: Z.value,
        loading: se.value,
        pushing: A.value,
        onClose: Y,
        onPush: Ve,
        onPullFirst: Ie
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ie.value && W.value ? (n(), U(o3, {
        key: 0,
        "workflow-conflicts": W.value.workflow_conflicts,
        resolutions: oe.value,
        "operation-type": "pull",
        validating: ae.value === "validating",
        error: ze.value,
        onClose: De,
        onResolve: $e,
        onApply: ye
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      Ae.value && Ne.value ? (n(), U(C3, {
        key: 1,
        validation: Ne.value,
        "operation-type": "pull",
        executing: ae.value === "executing",
        onProceed: Te,
        onGoBack: fe,
        onCancel: We
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), I3 = /* @__PURE__ */ ke(S3, [["__scopeId", "data-v-9ae3b76d"]]), E3 = { class: "setting-info" }, T3 = { class: "setting-label" }, P3 = {
  key: 0,
  class: "required-marker"
}, M3 = {
  key: 0,
  class: "setting-description"
}, R3 = { class: "setting-control" }, D3 = /* @__PURE__ */ we({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Re(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", E3, [
        t("div", T3, [
          C(d(e.label) + " ", 1),
          e.required ? (n(), i("span", P3, "*")) : y("", !0)
        ]),
        e.description ? (n(), i("div", M3, d(e.description), 1)) : y("", !0)
      ]),
      t("div", R3, [
        nt(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), Wo = /* @__PURE__ */ ke(D3, [["__scopeId", "data-v-cb5d236c"]]), L3 = { class: "toggle" }, U3 = ["checked", "disabled"], N3 = /* @__PURE__ */ we({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", L3, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, U3),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), pi = /* @__PURE__ */ ke(N3, [["__scopeId", "data-v-71c0f550"]]), O3 = { class: "workspace-settings-content" }, A3 = { class: "settings-section" }, z3 = { class: "path-setting" }, V3 = { class: "path-value" }, F3 = { class: "path-setting" }, B3 = { class: "path-value" }, W3 = { class: "settings-section" }, G3 = { class: "settings-section" }, j3 = { class: "settings-section" }, H3 = /* @__PURE__ */ we({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: u } = ut(), c = $(!1), m = $(null), f = $(null), v = $(null), g = $(null), _ = $(""), h = $(""), w = $(""), x = $(!1), b = $(!1), S = $(!1), F = $(!0);
    function E(ne) {
      return ne.join(" ");
    }
    function P(ne) {
      return ne.trim() ? ne.trim().split(/\s+/) : [];
    }
    const D = z(() => {
      if (!g.value) return !1;
      const ne = x.value, K = b.value, j = w.value !== E(g.value.comfyui_extra_args || []);
      return ne || K || j;
    });
    async function V() {
      c.value = !0, m.value = null;
      try {
        v.value = await r(a.workspacePath || void 0), g.value = { ...v.value }, _.value = v.value.civitai_api_key || "", h.value = v.value.huggingface_token || "", w.value = E(v.value.comfyui_extra_args || []), x.value = !1, b.value = !1;
        const ne = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        S.value = ne !== "false", F.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
      } catch (ne) {
        m.value = ne instanceof Error ? ne.message : "Failed to load settings";
      } finally {
        c.value = !1;
      }
    }
    async function G() {
      var ne;
      f.value = null;
      try {
        const K = {};
        x.value && (K.civitai_api_key = _.value || null), b.value && (K.huggingface_token = h.value || null), w.value !== E(((ne = g.value) == null ? void 0 : ne.comfyui_extra_args) || []) && (K.comfyui_extra_args = P(w.value)), await u(K, a.workspacePath || void 0), await V(), f.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          f.value = null;
        }, 3e3);
      } catch (K) {
        const j = K instanceof Error ? K.message : "Failed to save settings";
        f.value = { type: "error", message: j }, l("error", j);
      }
    }
    function I() {
      g.value && (_.value = g.value.civitai_api_key || "", h.value = g.value.huggingface_token || "", w.value = E(g.value.comfyui_extra_args || []), x.value = !1, b.value = !1, f.value = null);
    }
    function O(ne) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(ne)), console.log("[ComfyGit] Auto-refresh setting saved:", ne);
    }
    function le(ne) {
      ne ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", ne ? "enabled" : "disabled");
    }
    return s({
      saveSettings: G,
      resetSettings: I,
      hasChanges: D,
      loadSettings: V
    }), lt(V), (ne, K) => (n(), i("div", O3, [
      c.value ? (n(), U(zs, {
        key: 0,
        message: "Loading workspace settings..."
      })) : m.value ? (n(), U(Vs, {
        key: 1,
        message: m.value,
        retry: !0,
        onRetry: V
      }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
        k(_t, { title: "WORKSPACE PATHS" }, {
          default: p(() => {
            var j, B;
            return [
              t("div", A3, [
                t("div", z3, [
                  K[7] || (K[7] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  K[8] || (K[8] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", V3, d(((j = v.value) == null ? void 0 : j.workspace_path) || "Loading..."), 1)
                ]),
                t("div", F3, [
                  K[9] || (K[9] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  K[10] || (K[10] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", B3, d(((B = v.value) == null ? void 0 : B.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        k(_t, { title: "API CREDENTIALS" }, {
          default: p(() => [
            t("div", W3, [
              k(Wo, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: p(() => [
                  k(an, {
                    modelValue: _.value,
                    "onUpdate:modelValue": K[0] || (K[0] = (j) => _.value = j),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: K[1] || (K[1] = (j) => x.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              k(Wo, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: p(() => [
                  k(an, {
                    modelValue: h.value,
                    "onUpdate:modelValue": K[2] || (K[2] = (j) => h.value = j),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: K[3] || (K[3] = (j) => b.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        k(_t, { title: "COMFYUI SETTINGS" }, {
          default: p(() => [
            t("div", G3, [
              k(Wo, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: p(() => [
                  k(an, {
                    modelValue: w.value,
                    "onUpdate:modelValue": K[4] || (K[4] = (j) => w.value = j),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              K[11] || (K[11] = t("div", { class: "setting-hint" }, [
                C(" Common flags: "),
                t("code", null, "--lowvram"),
                C(", "),
                t("code", null, "--highvram"),
                C(", "),
                t("code", null, "--listen 0.0.0.0"),
                C(", "),
                t("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        k(_t, { title: "UI SETTINGS" }, {
          default: p(() => [
            t("div", j3, [
              k(Wo, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: p(() => [
                  k(pi, {
                    modelValue: S.value,
                    "onUpdate:modelValue": [
                      K[5] || (K[5] = (j) => S.value = j),
                      O
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              k(Wo, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: p(() => [
                  k(pi, {
                    modelValue: F.value,
                    "onUpdate:modelValue": [
                      K[6] || (K[6] = (j) => F.value = j),
                      le
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        f.value ? (n(), U(Cn, {
          key: 0,
          variant: (f.value.type === "success", "compact")
        }, {
          default: p(() => [
            t("span", {
              style: es({ color: f.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, d(f.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), qr = /* @__PURE__ */ ke(H3, [["__scopeId", "data-v-9c5b427b"]]), K3 = /* @__PURE__ */ we({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = $(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (n(), U(Ht, null, {
      header: p(() => [
        k(Kt, { title: "WORKSPACE SETTINGS" }, {
          actions: p(() => {
            var r, u;
            return [
              k(ve, {
                variant: "primary",
                size: "sm",
                disabled: !((r = s.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (c) => {
                  var m;
                  return (m = s.value) == null ? void 0 : m.saveSettings();
                })
              }, {
                default: p(() => [...l[2] || (l[2] = [
                  C(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = s.value) != null && u.hasChanges ? (n(), U(ve, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (c) => {
                  var m;
                  return (m = s.value) == null ? void 0 : m.resetSettings();
                })
              }, {
                default: p(() => [...l[3] || (l[3] = [
                  C(" Reset ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: p(() => [
        k(qr, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), q3 = { class: "base-tabs" }, Y3 = ["disabled", "onClick"], J3 = {
  key: 0,
  class: "base-tabs__badge"
}, Q3 = /* @__PURE__ */ we({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const o = e, a = s;
    function l(r) {
      var u;
      (u = o.tabs.find((c) => c.id === r)) != null && u.disabled || a("update:modelValue", r);
    }
    return (r, u) => (n(), i("div", q3, [
      (n(!0), i(H, null, pe(e.tabs, (c) => (n(), i("button", {
        key: c.id,
        class: Re([
          "base-tabs__tab",
          {
            active: e.modelValue === c.id,
            disabled: c.disabled
          }
        ]),
        disabled: c.disabled,
        onClick: (m) => l(c.id)
      }, [
        C(d(c.label) + " ", 1),
        c.badge ? (n(), i("span", J3, d(c.badge), 1)) : y("", !0)
      ], 10, Y3))), 128))
    ]));
  }
}), Yr = /* @__PURE__ */ ke(Q3, [["__scopeId", "data-v-ad5e6cad"]]), X3 = { class: "log-viewer-wrapper" }, Z3 = ["disabled", "title"], ex = /* @__PURE__ */ we({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = $(null), a = $("idle"), l = z(() => s.logs.map((f) => ({
      text: s.rawFormat || !f.timestamp ? f.message : `${f.timestamp} - ${f.name} - ${f.level} - ${f.func}:${f.line} - ${f.message}`,
      level: f.level
    })));
    async function r() {
      var v;
      await Mt();
      const f = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      f && (f.scrollTop = f.scrollHeight);
    }
    lt(r), St(() => s.logs, r);
    async function u() {
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
    function c(f) {
      (f.ctrlKey || f.metaKey) && f.key === "c" && f.stopPropagation();
    }
    function m(f) {
      f.stopPropagation();
    }
    return (f, v) => (n(), i("div", X3, [
      t("div", {
        ref_key: "logOutputElement",
        ref: o,
        class: "log-output",
        onKeydown: c,
        onCopy: m,
        tabindex: "0"
      }, [
        t("button", {
          class: "copy-overlay-btn",
          onClick: u,
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy all logs"
        }, d(a.value === "copied" ? "Copied!" : "Copy"), 9, Z3),
        (n(!0), i(H, null, pe(l.value, (g, _) => (n(), i("div", {
          key: _,
          class: Re(`log-line log-level-${g.level.toLowerCase()}`)
        }, d(g.text), 3))), 128))
      ], 544)
    ]));
  }
}), Jr = /* @__PURE__ */ ke(ex, [["__scopeId", "data-v-c0cc6d21"]]), tx = /* @__PURE__ */ we({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = ut(), u = $("workspace"), c = $([]), m = $(!1), f = $(null), v = $(!1), g = $(null), _ = $(null), h = $(!1), w = z(() => u.value === "workspace" ? g.value : _.value);
    async function x() {
      m.value = !0, f.value = null;
      try {
        u.value === "workspace" ? c.value = await s(void 0, 500) : c.value = await a(void 0, 500);
      } catch (F) {
        f.value = F instanceof Error ? F.message : `Failed to load ${u.value} logs`;
      } finally {
        m.value = !1;
      }
    }
    async function b() {
      try {
        const [F, E] = await Promise.all([
          o(),
          l()
        ]);
        F.exists && (g.value = F.path), E.exists && (_.value = E.path);
      } catch {
      }
    }
    async function S() {
      if (w.value) {
        h.value = !0;
        try {
          await r(w.value);
        } catch (F) {
          console.error("Failed to open log file:", F);
        } finally {
          h.value = !1;
        }
      }
    }
    return St(u, () => {
      x();
    }), lt(() => {
      x(), b();
    }), (F, E) => (n(), i(H, null, [
      k(Ht, null, {
        header: p(() => [
          k(Kt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: E[0] || (E[0] = (P) => v.value = !0)
          }, {
            actions: p(() => [
              k(ve, {
                variant: "secondary",
                size: "sm",
                onClick: S,
                disabled: !w.value || h.value,
                title: "Open log file in default editor"
              }, {
                default: p(() => [
                  C(d(h.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(ve, {
                variant: "secondary",
                size: "sm",
                onClick: x,
                disabled: m.value
              }, {
                default: p(() => [
                  C(d(m.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: p(() => [
          k(Yr, {
            modelValue: u.value,
            "onUpdate:modelValue": E[1] || (E[1] = (P) => u.value = P),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: p(() => [
          m.value ? (n(), U(zs, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : f.value ? (n(), U(Vs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            c.value.length === 0 ? (n(), U(gs, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (n(), U(Jr, {
              key: 1,
              logs: c.value,
              "raw-format": u.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      k(hs, {
        show: v.value,
        title: "About Logs",
        onClose: E[3] || (E[3] = (P) => v.value = !1)
      }, {
        content: p(() => [...E[4] || (E[4] = [
          t("p", null, [
            t("strong", null, "Workspace Logs:"),
            C(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Orchestrator Logs:"),
            C(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            C(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            C(" Potential issues or deprecated features"),
            t("br"),
            t("strong", null, "INFO:"),
            C(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            C(" Detailed debugging information ")
          ], -1)
        ])]),
        actions: p(() => [
          k(ve, {
            variant: "primary",
            onClick: E[2] || (E[2] = (P) => v.value = !1)
          }, {
            default: p(() => [...E[5] || (E[5] = [
              C(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), sx = /* @__PURE__ */ we({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: a, openFile: l } = ut(), r = $([]), u = $(!1), c = $(null), m = $(!1), f = $("production"), v = $(null), g = $(!1);
    async function _() {
      u.value = !0, c.value = null;
      try {
        r.value = await s(void 0, 500);
        try {
          const x = await o();
          f.value = x.environment || "production";
        } catch {
        }
      } catch (x) {
        c.value = x instanceof Error ? x.message : "Failed to load environment logs";
      } finally {
        u.value = !1;
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
        g.value = !0;
        try {
          await l(v.value);
        } catch (x) {
          console.error("Failed to open log file:", x);
        } finally {
          g.value = !1;
        }
      }
    }
    return lt(() => {
      _(), h();
    }), (x, b) => (n(), i(H, null, [
      k(Ht, null, {
        header: p(() => [
          k(Kt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: b[0] || (b[0] = (S) => m.value = !0)
          }, {
            actions: p(() => [
              k(ve, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: !v.value || g.value,
                title: "Open log file in default editor"
              }, {
                default: p(() => [
                  C(d(g.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(ve, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: u.value
              }, {
                default: p(() => [
                  C(d(u.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: p(() => [
          u.value ? (n(), U(zs, {
            key: 0,
            message: "Loading environment logs..."
          })) : c.value ? (n(), U(Vs, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            r.value.length === 0 ? (n(), U(gs, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (n(), U(Jr, {
              key: 1,
              logs: r.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      k(hs, {
        show: m.value,
        title: "About Environment Logs",
        onClose: b[2] || (b[2] = (S) => m.value = !1)
      }, {
        content: p(() => [
          t("p", null, [
            b[3] || (b[3] = C(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, d(f.value), 1),
            b[4] || (b[4] = C(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          b[5] || (b[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            C(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            C(" Potential issues or important notices"),
            t("br"),
            t("strong", null, "INFO:"),
            C(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            C(" Detailed debugging information ")
          ], -1))
        ]),
        actions: p(() => [
          k(ve, {
            variant: "primary",
            onClick: b[1] || (b[1] = (S) => m.value = !1)
          }, {
            default: p(() => [...b[6] || (b[6] = [
              C(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ox = { class: "env-title" }, nx = {
  key: 0,
  class: "current-badge"
}, ax = {
  key: 0,
  class: "branch-info"
}, lx = /* @__PURE__ */ we({
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
    return (s, o) => (n(), U(Lt, {
      status: e.isCurrent ? "synced" : void 0
    }, fo({
      icon: p(() => [
        C(d(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: p(() => [
        t("div", ox, [
          t("span", null, d(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (n(), i("span", nx, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: p(() => [
        e.currentBranch ? (n(), i("span", ax, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          C(" " + d(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: p(() => [
        nt(s.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: p(() => [
          k($t, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          k($t, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          k($t, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (n(), U($t, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), ix = /* @__PURE__ */ ke(lx, [["__scopeId", "data-v-9231917a"]]), rx = { class: "env-details" }, ux = { class: "status-row" }, cx = {
  key: 0,
  class: "detail-row"
}, dx = { class: "value mono" }, mx = {
  key: 1,
  class: "detail-row"
}, fx = { class: "value mono small" }, vx = { class: "collapsible-section" }, px = { class: "value" }, gx = {
  key: 0,
  class: "collapsible-body"
}, hx = { class: "item-list" }, yx = { class: "item-name" }, wx = { class: "item-name" }, _x = { class: "item-name" }, kx = { class: "item-name" }, bx = {
  key: 0,
  class: "empty-list"
}, $x = { class: "collapsible-section" }, Cx = { class: "value" }, xx = {
  key: 0,
  class: "collapsible-body"
}, Sx = { class: "item-list" }, Ix = { class: "item-name" }, Ex = {
  key: 0,
  class: "item-meta"
}, Tx = {
  key: 0,
  class: "empty-list"
}, Px = { class: "collapsible-section" }, Mx = { class: "value" }, Rx = {
  key: 0,
  class: "missing-count"
}, Dx = {
  key: 0,
  class: "collapsible-body"
}, Lx = { class: "item-list" }, Ux = { class: "model-row" }, Nx = { class: "item-name" }, Ox = { class: "model-meta" }, Ax = { class: "item-meta" }, zx = {
  key: 0,
  class: "item-meta"
}, Vx = {
  key: 0,
  class: "empty-list"
}, Fx = {
  key: 2,
  class: "section-divider"
}, Bx = {
  key: 3,
  class: "detail-row"
}, Wx = { class: "value" }, Gx = { class: "footer-actions" }, jx = /* @__PURE__ */ we({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = $(/* @__PURE__ */ new Set());
    function r(m) {
      l.value.has(m) ? l.value.delete(m) : l.value.add(m), l.value = new Set(l.value);
    }
    const u = z(() => {
      var f;
      if (!((f = o.detail) != null && f.workflows)) return !0;
      const m = o.detail.workflows;
      return !m.synced.length && !m.new.length && !m.modified.length && !m.deleted.length;
    });
    function c(m) {
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
    return (m, f) => (n(), U(Ct, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: f[5] || (f[5] = (v) => a("close"))
    }, {
      body: p(() => {
        var v, g, _, h, w, x, b, S, F, E, P, D, V, G;
        return [
          t("div", rx, [
            t("div", ux, [
              f[6] || (f[6] = t("span", { class: "label" }, "Status:", -1)),
              t("span", {
                class: Re(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, d(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (n(), i("div", cx, [
              f[7] || (f[7] = t("span", { class: "label" }, "Branch:", -1)),
              t("span", dx, d(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (n(), i("div", mx, [
              f[8] || (f[8] = t("span", { class: "label" }, "Path:", -1)),
              t("span", fx, d(e.environment.path), 1)
            ])) : y("", !0),
            f[17] || (f[17] = t("div", { class: "section-divider" }, null, -1)),
            t("div", vx, [
              t("div", {
                class: "collapsible-header",
                onClick: f[0] || (f[0] = (I) => r("workflows"))
              }, [
                f[9] || (f[9] = t("span", { class: "label" }, "Workflows:", -1)),
                t("span", px, d(((v = e.detail) == null ? void 0 : v.workflow_count) ?? e.environment.workflow_count), 1),
                (g = e.detail) != null && g.workflows ? (n(), i("span", {
                  key: 0,
                  class: Re(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (_ = e.detail) != null && _.workflows && l.value.has("workflows") ? (n(), i("div", gx, [
                t("div", hx, [
                  (n(!0), i(H, null, pe(e.detail.workflows.synced, (I) => (n(), i("div", {
                    key: "synced-" + I,
                    class: "list-item"
                  }, [
                    t("span", yx, d(I), 1),
                    f[10] || (f[10] = t("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, pe(e.detail.workflows.new, (I) => (n(), i("div", {
                    key: "new-" + I,
                    class: "list-item"
                  }, [
                    t("span", wx, d(I), 1),
                    f[11] || (f[11] = t("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, pe(e.detail.workflows.modified, (I) => (n(), i("div", {
                    key: "mod-" + I,
                    class: "list-item"
                  }, [
                    t("span", _x, d(I), 1),
                    f[12] || (f[12] = t("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, pe(e.detail.workflows.deleted, (I) => (n(), i("div", {
                    key: "del-" + I,
                    class: "list-item"
                  }, [
                    t("span", kx, d(I), 1),
                    f[13] || (f[13] = t("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  u.value ? (n(), i("div", bx, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            t("div", $x, [
              t("div", {
                class: "collapsible-header",
                onClick: f[1] || (f[1] = (I) => r("nodes"))
              }, [
                f[14] || (f[14] = t("span", { class: "label" }, "Nodes:", -1)),
                t("span", Cx, d(((h = e.detail) == null ? void 0 : h.node_count) ?? e.environment.node_count), 1),
                (w = e.detail) != null && w.nodes ? (n(), i("span", {
                  key: 0,
                  class: Re(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (x = e.detail) != null && x.nodes && l.value.has("nodes") ? (n(), i("div", xx, [
                t("div", Sx, [
                  (n(!0), i(H, null, pe(e.detail.nodes, (I) => (n(), i("div", {
                    key: I.name,
                    class: "list-item"
                  }, [
                    t("span", Ix, d(I.name), 1),
                    I.version ? (n(), i("span", Ex, d(I.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (n(), i("div", Tx, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            t("div", Px, [
              t("div", {
                class: "collapsible-header",
                onClick: f[2] || (f[2] = (I) => r("models"))
              }, [
                f[15] || (f[15] = t("span", { class: "label" }, "Models:", -1)),
                t("span", Mx, [
                  C(d(((b = e.detail) == null ? void 0 : b.model_count) ?? e.environment.model_count) + " ", 1),
                  (F = (S = e.detail) == null ? void 0 : S.models) != null && F.missing.length ? (n(), i("span", Rx, "(" + d(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (E = e.detail) != null && E.models ? (n(), i("span", {
                  key: 0,
                  class: Re(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (P = e.detail) != null && P.models && l.value.has("models") ? (n(), i("div", Dx, [
                t("div", Lx, [
                  (n(!0), i(H, null, pe(e.detail.models.missing, (I) => (n(), i("div", {
                    key: I.filename,
                    class: "list-item model-item"
                  }, [
                    t("div", Ux, [
                      t("span", Nx, d(I.filename), 1),
                      t("span", {
                        class: Re(["criticality-badge", I.criticality])
                      }, d(I.criticality), 3)
                    ]),
                    t("div", Ox, [
                      t("span", Ax, d(I.category), 1),
                      I.workflow_names.length ? (n(), i("span", zx, " used by: " + d(I.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (n(), i("div", Vx, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (D = e.detail) != null && D.created_at || e.environment.created_at ? (n(), i("div", Fx)) : y("", !0),
            (V = e.detail) != null && V.created_at || e.environment.created_at ? (n(), i("div", Bx, [
              f[16] || (f[16] = t("span", { class: "label" }, "Created:", -1)),
              t("span", Wx, d(c(((G = e.detail) == null ? void 0 : G.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: p(() => [
        t("div", Gx, [
          e.canDelete ? (n(), U(Ee, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: f[3] || (f[3] = (v) => a("delete", e.environment.name))
          }, {
            default: p(() => [...f[18] || (f[18] = [
              C(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          f[20] || (f[20] = t("div", { class: "footer-spacer" }, null, -1)),
          k(Ee, {
            variant: "secondary",
            size: "sm",
            onClick: f[4] || (f[4] = (v) => a("close"))
          }, {
            default: p(() => [...f[19] || (f[19] = [
              C(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Hx = /* @__PURE__ */ ke(jx, [["__scopeId", "data-v-92e68b76"]]), Qr = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], Xr = "3.12", kl = [
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
], Zr = "auto", Kx = { class: "progress-bar" }, qx = /* @__PURE__ */ we({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = z(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (a, l) => (n(), i("div", Kx, [
      t("div", {
        class: Re(["progress-fill", e.variant]),
        style: es({ width: o.value })
      }, null, 6)
    ]));
  }
}), ga = /* @__PURE__ */ ke(qx, [["__scopeId", "data-v-1beb0512"]]), Yx = { class: "task-progress" }, Jx = { class: "progress-info" }, Qx = { class: "progress-percentage" }, Xx = { class: "progress-message" }, Zx = {
  key: 0,
  class: "progress-steps"
}, e8 = { class: "step-icon" }, t8 = { class: "step-label" }, s8 = /* @__PURE__ */ we({
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
      const r = s.steps.find((u) => u.id === l);
      return r ? s.progress >= r.progressThreshold ? "completed" : s.currentPhase === l ? "active" : "pending" : "pending";
    }
    function a(l) {
      const r = o(l);
      return r === "completed" ? "✓" : r === "active" ? "⟳" : "○";
    }
    return (l, r) => (n(), i("div", Yx, [
      k(ga, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", Jx, [
        t("span", Qx, d(e.progress) + "%", 1),
        t("span", Xx, d(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (n(), i("div", Zx, [
        (n(!0), i(H, null, pe(e.steps, (u) => (n(), i("div", {
          key: u.id,
          class: Re(["step", o(u.id)])
        }, [
          t("span", e8, d(a(u.id)), 1),
          t("span", t8, d(u.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), ea = /* @__PURE__ */ ke(s8, [["__scopeId", "data-v-9d1de66c"]]), o8 = {
  key: 0,
  class: "create-env-form"
}, n8 = { class: "form-field" }, a8 = { class: "input-wrapper" }, l8 = {
  key: 0,
  class: "validating-indicator"
}, i8 = {
  key: 1,
  class: "valid-indicator"
}, r8 = {
  key: 0,
  class: "field-error"
}, u8 = { class: "form-field" }, c8 = ["value"], d8 = { class: "form-field" }, m8 = ["disabled"], f8 = ["value"], v8 = { class: "form-field" }, p8 = ["value"], g8 = { class: "form-field form-field--checkbox" }, h8 = { class: "form-checkbox" }, y8 = {
  key: 1,
  class: "create-env-progress"
}, w8 = { class: "creating-intro" }, _8 = {
  key: 0,
  class: "progress-warning"
}, k8 = {
  key: 1,
  class: "create-error"
}, b8 = { class: "error-message" }, $8 = {
  key: 1,
  class: "footer-status"
}, C8 = 10, x8 = /* @__PURE__ */ we({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: u } = ut(), c = $(""), m = $(Xr), f = $("latest"), v = $(Zr), g = $(!1), _ = $(null), h = $(!1), w = $(!1);
    let x = null, b = 0;
    const S = z(() => !!c.value.trim() && w.value && !_.value && !h.value && !P.value), F = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), E = $(!1), P = $(!1), D = $({
      progress: 0,
      message: ""
    });
    let V = null, G = 0;
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
    ], O = $(null);
    St(c, (ae) => {
      w.value = !1, x && (clearTimeout(x), x = null);
      const de = ae.trim();
      if (!de) {
        _.value = null, h.value = !1;
        return;
      }
      h.value = !0, x = setTimeout(() => {
        le(de);
      }, 400);
    });
    async function le(ae, de = !1) {
      const ie = ae.trim();
      if (!ie)
        return w.value = !1, h.value = !1, _.value = de ? "Environment name is required" : null, !1;
      const Ae = ++b;
      h.value = !0;
      try {
        const _e = await u(ie);
        return Ae !== b ? !1 : (_.value = _e.valid ? null : _e.error || "Invalid name", w.value = !!_e.valid, !!_e.valid);
      } catch {
        return Ae !== b || (_.value = "Failed to validate name", w.value = !1), !1;
      } finally {
        Ae === b && (h.value = !1);
      }
    }
    async function ne() {
      x && (clearTimeout(x), x = null), await le(c.value, !0);
    }
    function K() {
      P.value || o("close");
    }
    async function j() {
      const ae = c.value.trim();
      if (!ae) {
        _.value = "Environment name is required";
        return;
      }
      if (x && (clearTimeout(x), x = null), !!await le(ae, !0)) {
        P.value = !0, D.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const ie = {
            name: ae,
            python_version: m.value,
            comfyui_version: f.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, Ae = await l(ie);
          Ae.status === "started" ? B() : Ae.status === "error" && (D.value = {
            progress: 0,
            message: Ae.message || "Failed to start creation",
            error: Ae.message
          });
        } catch (ie) {
          D.value = {
            progress: 0,
            message: ie instanceof Error ? ie.message : "Unknown error",
            error: ie instanceof Error ? ie.message : "Unknown error"
          };
        }
      }
    }
    function B() {
      V || (G = 0, V = window.setInterval(async () => {
        try {
          const ae = await r();
          G = 0, D.value = {
            progress: ae.progress ?? 0,
            message: ae.message,
            phase: ae.phase,
            error: ae.error
          }, ae.state === "complete" ? (q(), o("created", ae.environment_name || c.value.trim(), g.value)) : ae.state === "error" ? (q(), D.value.error = ae.error || ae.message) : ae.state === "idle" && P.value && (q(), D.value.error = "Creation was interrupted. Please try again.");
        } catch {
          G++, G >= C8 && (q(), D.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function q() {
      V && (clearInterval(V), V = null);
    }
    function X() {
      P.value = !1, D.value = { progress: 0, message: "" }, o("close");
    }
    async function Le() {
      E.value = !0;
      try {
        F.value = await a();
      } catch (ae) {
        console.error("Failed to load ComfyUI releases:", ae);
      } finally {
        E.value = !1;
      }
    }
    return lt(async () => {
      var ae;
      await Mt(), (ae = O.value) == null || ae.focus(), Le();
    }), Xs(() => {
      q(), x && (clearTimeout(x), x = null);
    }), (ae, de) => (n(), U(Ct, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !P.value,
      onClose: K
    }, {
      body: p(() => [
        P.value ? (n(), i("div", y8, [
          t("p", w8, [
            de[12] || (de[12] = C(" Creating environment ", -1)),
            t("strong", null, d(c.value), 1),
            de[13] || (de[13] = C("... ", -1))
          ]),
          k(ea, {
            progress: D.value.progress,
            message: D.value.message,
            "current-phase": D.value.phase,
            variant: D.value.error ? "error" : "default",
            "show-steps": !0,
            steps: I
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          D.value.error ? y("", !0) : (n(), i("p", _8, " This may take several minutes. Please wait... ")),
          D.value.error ? (n(), i("div", k8, [
            t("p", b8, d(D.value.error), 1)
          ])) : y("", !0)
        ])) : (n(), i("div", o8, [
          t("div", n8, [
            de[6] || (de[6] = t("label", { class: "form-label" }, "Name", -1)),
            t("div", a8, [
              at(t("input", {
                ref_key: "nameInput",
                ref: O,
                "onUpdate:modelValue": de[0] || (de[0] = (ie) => c.value = ie),
                type: "text",
                class: Re(["form-input", { error: !!_.value, valid: w.value }]),
                placeholder: "my-environment",
                onKeyup: as(j, ["enter"]),
                onBlur: ne
              }, null, 34), [
                [Zt, c.value]
              ]),
              h.value ? (n(), i("span", l8, "...")) : w.value ? (n(), i("span", i8, "✓")) : y("", !0)
            ]),
            _.value ? (n(), i("div", r8, d(_.value), 1)) : y("", !0),
            de[7] || (de[7] = t("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          t("div", u8, [
            de[8] || (de[8] = t("label", { class: "form-label" }, "Python Version", -1)),
            at(t("select", {
              "onUpdate:modelValue": de[1] || (de[1] = (ie) => m.value = ie),
              class: "form-select"
            }, [
              (n(!0), i(H, null, pe(Xe(Qr), (ie) => (n(), i("option", {
                key: ie,
                value: ie
              }, d(ie), 9, c8))), 128))
            ], 512), [
              [Ss, m.value]
            ])
          ]),
          t("div", d8, [
            de[9] || (de[9] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            at(t("select", {
              "onUpdate:modelValue": de[2] || (de[2] = (ie) => f.value = ie),
              class: "form-select",
              disabled: E.value
            }, [
              (n(!0), i(H, null, pe(F.value, (ie) => (n(), i("option", {
                key: ie.tag_name,
                value: ie.tag_name
              }, d(ie.name), 9, f8))), 128))
            ], 8, m8), [
              [Ss, f.value]
            ])
          ]),
          t("div", v8, [
            de[10] || (de[10] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            at(t("select", {
              "onUpdate:modelValue": de[3] || (de[3] = (ie) => v.value = ie),
              class: "form-select"
            }, [
              (n(!0), i(H, null, pe(Xe(kl), (ie) => (n(), i("option", {
                key: ie,
                value: ie
              }, d(ie) + d(ie === "auto" ? " (detect GPU)" : ""), 9, p8))), 128))
            ], 512), [
              [Ss, v.value]
            ])
          ]),
          t("div", g8, [
            t("label", h8, [
              at(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": de[4] || (de[4] = (ie) => g.value = ie)
              }, null, 512), [
                [hn, g.value]
              ]),
              de[11] || (de[11] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: p(() => [
        P.value ? (n(), i(H, { key: 1 }, [
          D.value.error ? (n(), U(Ee, {
            key: 0,
            variant: "secondary",
            onClick: X
          }, {
            default: p(() => [...de[16] || (de[16] = [
              C(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", $8, " Creating environment... "))
        ], 64)) : (n(), i(H, { key: 0 }, [
          k(Ee, {
            variant: "primary",
            disabled: !S.value,
            onClick: j
          }, {
            default: p(() => [...de[14] || (de[14] = [
              C(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(Ee, {
            variant: "secondary",
            onClick: de[5] || (de[5] = (ie) => o("close"))
          }, {
            default: p(() => [...de[15] || (de[15] = [
              C(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), S8 = /* @__PURE__ */ ke(x8, [["__scopeId", "data-v-3faa3d9b"]]), I8 = /* @__PURE__ */ we({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = ut(), u = $([]), c = $(!1), m = $(null), f = $(""), v = $(!1), g = $(!1), _ = $(null), h = $(null), w = z(() => {
      if (!f.value.trim()) return u.value;
      const P = f.value.toLowerCase();
      return u.value.filter(
        (D) => {
          var V;
          return D.name.toLowerCase().includes(P) || ((V = D.current_branch) == null ? void 0 : V.toLowerCase().includes(P));
        }
      );
    });
    function x(P, D) {
      g.value = !1, a("created", P, D);
    }
    function b() {
      g.value = !0;
    }
    async function S(P) {
      _.value = P, h.value = null;
      const D = await r(P.name);
      D && (h.value = D);
    }
    function F(P) {
      _.value = null, h.value = null, a("delete", P);
    }
    async function E() {
      c.value = !0, m.value = null;
      try {
        u.value = await l();
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return lt(E), s({
      loadEnvironments: E,
      openCreateModal: b
    }), (P, D) => (n(), i(H, null, [
      k(Ht, null, {
        header: p(() => [
          k(Kt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (V) => v.value = !0)
          }, {
            actions: p(() => [
              k(ve, {
                variant: "primary",
                size: "sm",
                onClick: b
              }, {
                default: p(() => [...D[6] || (D[6] = [
                  C(" Create ", -1)
                ])]),
                _: 1
              }),
              k(ve, {
                variant: "secondary",
                size: "sm",
                onClick: E
              }, {
                default: p(() => [...D[7] || (D[7] = [
                  C(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: p(() => [
          k(Vo, {
            modelValue: f.value,
            "onUpdate:modelValue": D[1] || (D[1] = (V) => f.value = V),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: p(() => [
          c.value ? (n(), U(zs, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (n(), U(Vs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            w.value.length ? (n(), U(_t, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: p(() => [
                (n(!0), i(H, null, pe(w.value, (V) => (n(), U(ix, {
                  key: V.name,
                  "environment-name": V.name,
                  "is-current": V.is_current,
                  "current-branch": V.current_branch,
                  "show-last-used": !1
                }, {
                  actions: p(() => [
                    V.is_current ? y("", !0) : (n(), U(ve, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (G) => P.$emit("switch", V.name)
                    }, {
                      default: p(() => [...D[8] || (D[8] = [
                        C(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    k(ve, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (G) => S(V)
                    }, {
                      default: p(() => [...D[9] || (D[9] = [
                        C(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            w.value.length ? y("", !0) : (n(), U(gs, {
              key: 1,
              icon: "🌍",
              message: f.value ? `No environments match '${f.value}'` : "No environments found. Create one to get started!"
            }, fo({ _: 2 }, [
              f.value ? void 0 : {
                name: "actions",
                fn: p(() => [
                  k(ve, {
                    variant: "primary",
                    onClick: b
                  }, {
                    default: p(() => [...D[10] || (D[10] = [
                      C(" Create Environment ", -1)
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
      k(hs, {
        show: v.value,
        title: "About Environments",
        onClose: D[3] || (D[3] = (V) => v.value = !1)
      }, {
        content: p(() => [...D[11] || (D[11] = [
          t("p", null, [
            t("strong", null, "Environments"),
            C(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
        actions: p(() => [
          k(ve, {
            variant: "secondary",
            onClick: D[2] || (D[2] = (V) => v.value = !1)
          }, {
            default: p(() => [...D[12] || (D[12] = [
              C(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (n(), U(Hx, {
        key: 0,
        environment: _.value,
        detail: h.value,
        "can-delete": u.value.length > 1,
        onClose: D[4] || (D[4] = (V) => {
          _.value = null, h.value = null;
        }),
        onDelete: F
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      g.value ? (n(), U(S8, {
        key: 1,
        onClose: D[5] || (D[5] = (V) => g.value = !1),
        onCreated: x
      })) : y("", !0)
    ], 64));
  }
}), E8 = /* @__PURE__ */ ke(I8, [["__scopeId", "data-v-0c0fbd88"]]), T8 = { class: "file-path" }, P8 = { class: "file-path-text" }, M8 = ["title"], R8 = /* @__PURE__ */ we({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = $(!1);
    async function a() {
      try {
        await navigator.clipboard.writeText(s.path), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, r) => (n(), i("div", T8, [
      r[0] || (r[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", P8, d(e.path), 1),
      e.copyable ? (n(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: a
      }, d(o.value ? "✓" : "📋"), 9, M8)) : y("", !0)
    ]));
  }
}), D8 = /* @__PURE__ */ ke(R8, [["__scopeId", "data-v-f0982173"]]), L8 = ["checked", "disabled"], U8 = { class: "base-checkbox-box" }, N8 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, O8 = {
  key: 0,
  class: "base-checkbox-label"
}, A8 = /* @__PURE__ */ we({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", {
      class: Re(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked))
      }, null, 40, L8),
      t("span", U8, [
        e.modelValue ? (n(), i("svg", N8, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (n(), i("span", O8, [
        nt(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), ta = /* @__PURE__ */ ke(A8, [["__scopeId", "data-v-bf17c831"]]), z8 = { class: "export-blocked" }, V8 = { class: "error-header" }, F8 = { class: "error-summary" }, B8 = { class: "error-description" }, W8 = { class: "issues-list" }, G8 = { class: "issue-message" }, j8 = {
  key: 0,
  class: "issue-details"
}, H8 = ["onClick"], K8 = { class: "issue-fix" }, q8 = {
  key: 0,
  class: "commit-section"
}, Y8 = {
  key: 0,
  class: "issues-warning"
}, J8 = {
  key: 1,
  class: "commit-error"
}, Q8 = /* @__PURE__ */ we({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = ut(), r = $(""), u = $(!1), c = $(!1), m = $(""), f = Qs({}), v = z(
      () => o.issues.some((b) => b.type === "uncommitted_workflows" || b.type === "uncommitted_git_changes")
    ), g = z(
      () => o.issues.some((b) => b.type === "unresolved_issues")
    ), _ = z(
      () => g.value && !c.value
    ), h = z(
      () => v.value && r.value.trim() !== "" && !u.value && !_.value
    );
    function w(b) {
      const S = o.issues[b];
      return f[b] || S.details.length <= 3 ? S.details : S.details.slice(0, 3);
    }
    async function x() {
      var b;
      if (h.value) {
        u.value = !0, m.value = "";
        try {
          const S = await l(r.value.trim(), c.value);
          if (S.status === "success")
            a("committed");
          else if (S.status === "blocked") {
            const F = ((b = S.issues) == null ? void 0 : b.map((E) => `${E.name}: ${E.issue}`).join("; ")) || "Unknown issues";
            m.value = `Commit blocked: ${F}`;
          } else
            m.value = S.message || "Commit failed";
        } catch (S) {
          m.value = S instanceof Error ? S.message : "Commit failed";
        } finally {
          u.value = !1;
        }
      }
    }
    return (b, S) => (n(), U(Ct, {
      title: v.value ? "Commit & Export" : "Cannot Export",
      size: "md",
      onClose: S[4] || (S[4] = (F) => b.$emit("close"))
    }, {
      body: p(() => [
        t("div", z8, [
          t("div", V8, [
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
            t("div", F8, [
              S[5] || (S[5] = t("h3", { class: "error-title" }, "Export blocked", -1)),
              t("p", B8, d(v.value ? "Commit your changes to proceed with export." : "The following issues must be resolved before exporting."), 1)
            ])
          ]),
          t("div", W8, [
            (n(!0), i(H, null, pe(e.issues, (F, E) => (n(), i("div", {
              key: E,
              class: "issue-item"
            }, [
              t("div", G8, d(F.message), 1),
              F.details.length ? (n(), i("div", j8, [
                (n(!0), i(H, null, pe(w(E), (P, D) => (n(), i("div", {
                  key: D,
                  class: "issue-detail"
                }, d(P), 1))), 128)),
                F.details.length > 3 && !f[E] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (P) => f[E] = !0
                }, " +" + d(F.details.length - 3) + " more ", 9, H8)) : y("", !0)
              ])) : y("", !0),
              t("div", K8, [
                F.type === "uncommitted_workflows" ? (n(), i(H, { key: 0 }, [
                  C(" Commit your workflow changes before exporting. ")
                ], 64)) : F.type === "uncommitted_git_changes" ? (n(), i(H, { key: 1 }, [
                  C(" Commit your changes before exporting. ")
                ], 64)) : F.type === "unresolved_issues" ? (n(), i(H, { key: 2 }, [
                  C(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          v.value ? (n(), i("div", q8, [
            g.value ? (n(), i("div", Y8, [
              S[8] || (S[8] = t("div", { class: "warning-header" }, [
                t("span", { class: "warning-icon-badge" }, "!"),
                t("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              k(ta, {
                modelValue: c.value,
                "onUpdate:modelValue": S[0] || (S[0] = (F) => c.value = F),
                class: "allow-issues-toggle"
              }, {
                default: p(() => [...S[7] || (S[7] = [
                  C(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            k(yn, {
              modelValue: r.value,
              "onUpdate:modelValue": S[1] || (S[1] = (F) => r.value = F),
              placeholder: "Describe your changes...",
              disabled: u.value || _.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: x,
              onCtrlEnter: x
            }, null, 8, ["modelValue", "disabled"]),
            m.value ? (n(), i("div", J8, d(m.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: p(() => [
        v.value ? (n(), i(H, { key: 0 }, [
          k(Ee, {
            variant: "secondary",
            onClick: S[2] || (S[2] = (F) => b.$emit("close"))
          }, {
            default: p(() => [...S[9] || (S[9] = [
              C(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(Ee, {
            variant: c.value ? "danger" : "primary",
            disabled: !h.value,
            loading: u.value,
            onClick: x
          }, {
            default: p(() => [
              C(d(u.value ? "Committing..." : c.value ? "Force Commit & Export" : "Commit & Export"), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (n(), U(Ee, {
          key: 1,
          variant: "primary",
          onClick: S[3] || (S[3] = (F) => b.$emit("close"))
        }, {
          default: p(() => [...S[10] || (S[10] = [
            C(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), eu = /* @__PURE__ */ ke(Q8, [["__scopeId", "data-v-bd79ba24"]]), X8 = { class: "export-warnings" }, Z8 = {
  key: 0,
  class: "success-header"
}, e5 = { class: "warning-header" }, t5 = { class: "warning-summary" }, s5 = { class: "warning-title" }, o5 = { class: "models-section" }, n5 = { class: "models-list" }, a5 = { class: "model-info" }, l5 = { class: "model-filename" }, i5 = { class: "model-workflows" }, r5 = ["onClick"], u5 = /* @__PURE__ */ we({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = $(!1), r = $(null), u = z(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function c() {
      r.value = null, a("revalidate");
    }
    return (m, f) => (n(), i(H, null, [
      k(Ct, {
        title: "Export Warnings",
        size: "md",
        onClose: f[3] || (f[3] = (v) => m.$emit("cancel"))
      }, {
        body: p(() => [
          t("div", X8, [
            e.models.length === 0 ? (n(), i("div", Z8, [...f[4] || (f[4] = [
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
            ])])) : (n(), i(H, { key: 1 }, [
              t("div", e5, [
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
                t("div", t5, [
                  t("h3", s5, d(e.models.length) + " model" + d(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  f[5] || (f[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", o5, [
                t("div", n5, [
                  (n(!0), i(H, null, pe(u.value, (v) => (n(), i("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", a5, [
                      t("div", l5, d(v.filename), 1),
                      t("div", i5, " Used by: " + d(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (g) => r.value = v.hash
                    }, " Add Source ", 8, r5)
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
        footer: p(() => [
          k(Ee, {
            variant: "secondary",
            onClick: f[1] || (f[1] = (v) => m.$emit("cancel"))
          }, {
            default: p(() => [...f[7] || (f[7] = [
              C(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          k(Ee, {
            variant: "primary",
            onClick: f[2] || (f[2] = (v) => m.$emit("confirm"))
          }, {
            default: p(() => [
              C(d(e.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      r.value ? (n(), U(wl, {
        key: 0,
        identifier: r.value,
        onClose: c
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), tu = /* @__PURE__ */ ke(u5, [["__scopeId", "data-v-b698d882"]]), c5 = { class: "export-card" }, d5 = { class: "export-path-row" }, m5 = { class: "export-actions" }, f5 = {
  key: 1,
  class: "export-warning"
}, v5 = /* @__PURE__ */ we({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = ut(), a = $(""), l = $(!1), r = $(!1), u = $(!1), c = $(null), m = $(!1), f = $(null), v = $(!1), g = $(!1), _ = z(() => l.value ? "Validating..." : r.value ? "Exporting..." : "Export Environment");
    async function h() {
      l.value = !0, c.value = null;
      try {
        const P = await s();
        f.value = P, P.can_export ? P.warnings.models_without_sources.length > 0 ? g.value = !0 : await S() : v.value = !0;
      } catch (P) {
        c.value = {
          status: "error",
          message: P instanceof Error ? P.message : "Validation failed"
        };
      } finally {
        l.value = !1;
      }
    }
    async function w() {
      g.value = !1, await S();
    }
    async function x() {
      v.value = !1, l.value = !0;
      try {
        const P = await s();
        f.value = P, P.can_export ? P.warnings.models_without_sources.length > 0 ? g.value = !0 : await S() : v.value = !0;
      } catch (P) {
        c.value = {
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
        c.value = P;
      } catch (P) {
        c.value = {
          status: "error",
          message: P instanceof Error ? P.message : "Export failed"
        };
      } finally {
        r.value = !1;
      }
    }
    async function F() {
      var P;
      if ((P = c.value) != null && P.path)
        try {
          await navigator.clipboard.writeText(c.value.path);
        } catch (D) {
          console.error("Failed to copy path:", D);
        }
    }
    async function E() {
      var P;
      if ((P = c.value) != null && P.path) {
        u.value = !0;
        try {
          const D = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(c.value.path)}`);
          if (!D.ok)
            throw new Error(`Download failed: ${D.statusText}`);
          const V = await D.blob(), G = URL.createObjectURL(V), I = c.value.path.split("/").pop() || "environment-export.tar.gz", O = document.createElement("a");
          O.href = G, O.download = I, document.body.appendChild(O), O.click(), document.body.removeChild(O), URL.revokeObjectURL(G);
        } catch (D) {
          console.error("Failed to download:", D), alert(`Download failed: ${D instanceof Error ? D.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (P, D) => (n(), i(H, null, [
      k(Ht, null, {
        header: p(() => [
          k(Kt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: D[0] || (D[0] = (V) => m.value = !0)
          })
        ]),
        content: p(() => [
          k(_t, { title: "EXPORT OPTIONS" }, {
            default: p(() => [
              t("div", c5, [
                D[7] || (D[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", d5, [
                  k(an, {
                    modelValue: a.value,
                    "onUpdate:modelValue": D[1] || (D[1] = (V) => a.value = V),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", m5, [
                  k(ve, {
                    variant: "primary",
                    size: "md",
                    loading: l.value || r.value,
                    disabled: l.value || r.value,
                    onClick: h
                  }, {
                    default: p(() => [
                      D[6] || (D[6] = t("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        t("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        t("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      C(" " + d(_.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          c.value ? (n(), U(_t, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: p(() => [
              k(Lt, {
                status: c.value.status === "success" ? "synced" : "broken"
              }, fo({
                icon: p(() => [
                  C(d(c.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: p(() => [
                  C(d(c.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: p(() => [
                  C(d(c.value.status === "success" ? "Your environment has been exported" : c.value.message), 1)
                ]),
                _: 2
              }, [
                c.value.status === "success" ? {
                  name: "details",
                  fn: p(() => [
                    k($t, { label: "Saved to:" }, {
                      default: p(() => [
                        k(D8, {
                          path: c.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    c.value.models_without_sources !== void 0 ? (n(), U($t, {
                      key: 0,
                      label: "Models without sources:",
                      value: c.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    c.value.models_without_sources && c.value.models_without_sources > 0 ? (n(), i("div", f5, [...D[8] || (D[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                c.value.status === "success" ? {
                  name: "actions",
                  fn: p(() => [
                    k(ve, {
                      variant: "primary",
                      size: "sm",
                      loading: u.value,
                      onClick: E
                    }, {
                      default: p(() => [...D[9] || (D[9] = [
                        t("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          t("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        C(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    k(ve, {
                      variant: "secondary",
                      size: "sm",
                      onClick: F
                    }, {
                      default: p(() => [...D[10] || (D[10] = [
                        C(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    k(ve, {
                      variant: "ghost",
                      size: "sm",
                      onClick: D[2] || (D[2] = (V) => c.value = null)
                    }, {
                      default: p(() => [...D[11] || (D[11] = [
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
          })) : y("", !0)
        ]),
        _: 1
      }),
      k(hs, {
        show: m.value,
        title: "What Gets Exported",
        onClose: D[3] || (D[3] = (V) => m.value = !1)
      }, {
        content: p(() => [...D[12] || (D[12] = [
          t("div", { class: "export-info" }, [
            t("div", { class: "info-section" }, [
              t("strong", null, "Included in Export:"),
              t("ul", null, [
                t("li", null, [
                  t("strong", null, "Workflows"),
                  C(" — All workflows in this environment")
                ]),
                t("li", null, [
                  t("strong", null, "Custom Nodes"),
                  C(" — Node definitions and dependencies")
                ]),
                t("li", null, [
                  t("strong", null, "Models"),
                  C(" — References and source URLs (not the files)")
                ]),
                t("li", null, [
                  t("strong", null, "Configuration"),
                  C(" — Environment settings and metadata")
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
              C(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      v.value && f.value ? (n(), U(eu, {
        key: 0,
        issues: f.value.blocking_issues,
        onClose: D[4] || (D[4] = (V) => v.value = !1),
        onCommitted: x
      }, null, 8, ["issues"])) : y("", !0),
      g.value && f.value ? (n(), U(tu, {
        key: 1,
        models: f.value.warnings.models_without_sources,
        onConfirm: w,
        onCancel: D[5] || (D[5] = (V) => g.value = !1),
        onRevalidate: b
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), p5 = /* @__PURE__ */ ke(v5, [["__scopeId", "data-v-ddeffd68"]]), g5 = { class: "file-input-wrapper" }, h5 = ["accept", "multiple", "disabled"], y5 = /* @__PURE__ */ we({
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
    const a = o, l = $(null);
    function r() {
      var c;
      (c = l.value) == null || c.click();
    }
    function u(c) {
      const m = c.target;
      m.files && m.files.length > 0 && (a("change", m.files), m.value = "");
    }
    return s({
      triggerInput: r
    }), (c, m) => (n(), i("div", g5, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, h5),
      k(ve, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: p(() => [
          nt(c.$slots, "default", {}, () => [
            m[0] || (m[0] = t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              t("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            C(" " + d(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), w5 = /* @__PURE__ */ ke(y5, [["__scopeId", "data-v-cd192091"]]), _5 = {
  key: 0,
  class: "drop-zone-empty"
}, k5 = { class: "drop-zone-text" }, b5 = { class: "drop-zone-primary" }, $5 = { class: "drop-zone-secondary" }, C5 = { class: "drop-zone-actions" }, x5 = {
  key: 1,
  class: "drop-zone-file"
}, S5 = { class: "file-info" }, I5 = { class: "file-details" }, E5 = { class: "file-name" }, T5 = { class: "file-size" }, P5 = /* @__PURE__ */ we({
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
    const o = s, a = $(!1), l = $(null), r = $(0), u = z(() => l.value !== null), c = z(() => {
      var b;
      return ((b = l.value) == null ? void 0 : b.name) || "";
    }), m = z(() => {
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
    function g(b) {
      b.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function _(b) {
      var F;
      b.stopPropagation(), r.value = 0, a.value = !1;
      const S = (F = b.dataTransfer) == null ? void 0 : F.files;
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
      class: Re(["file-drop-zone", { "drop-active": a.value, "has-file": u.value }]),
      onDragenter: gt(f, ["prevent"]),
      onDragover: gt(v, ["prevent"]),
      onDragleave: gt(g, ["prevent"]),
      onDrop: gt(_, ["prevent"])
    }, [
      u.value ? (n(), i("div", x5, [
        t("div", S5, [
          S[1] || (S[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", I5, [
            t("div", E5, d(c.value), 1),
            t("div", T5, d(m.value), 1)
          ])
        ]),
        k(ve, {
          variant: "ghost",
          size: "xs",
          onClick: x,
          title: "Remove file"
        }, {
          default: p(() => [...S[2] || (S[2] = [
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
      ])) : (n(), i("div", _5, [
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
        t("div", k5, [
          t("p", b5, d(e.primaryText), 1),
          t("p", $5, d(e.secondaryText), 1)
        ]),
        t("div", C5, [
          k(w5, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: h
          }, {
            default: p(() => [
              C(d(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), M5 = /* @__PURE__ */ ke(P5, [["__scopeId", "data-v-0f79cb86"]]), R5 = { class: "import-preview" }, D5 = { class: "preview-header" }, L5 = {
  key: 0,
  class: "source-env"
}, U5 = { class: "preview-content" }, N5 = { class: "preview-section" }, O5 = { class: "section-header" }, A5 = { class: "section-info" }, z5 = { class: "section-count" }, V5 = {
  key: 0,
  class: "item-list"
}, F5 = { class: "item-name" }, B5 = {
  key: 0,
  class: "item-more"
}, W5 = { class: "preview-section" }, G5 = { class: "section-header" }, j5 = { class: "section-info" }, H5 = { class: "section-count" }, K5 = {
  key: 0,
  class: "item-list"
}, q5 = { class: "item-details" }, Y5 = { class: "item-name" }, J5 = { class: "item-meta" }, Q5 = {
  key: 0,
  class: "item-more"
}, X5 = { class: "preview-section" }, Z5 = { class: "section-header" }, eS = { class: "section-info" }, tS = { class: "section-count" }, sS = {
  key: 0,
  class: "item-list"
}, oS = { class: "item-name" }, nS = {
  key: 0,
  class: "item-more"
}, aS = {
  key: 0,
  class: "preview-section"
}, lS = { class: "git-info" }, iS = /* @__PURE__ */ we({
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
    const s = e, o = z(() => s.workflows.length), a = z(() => s.models.length), l = z(() => s.nodes.length);
    function r(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, c) => (n(), i("div", R5, [
      t("div", D5, [
        k(Qt, null, {
          default: p(() => [...c[0] || (c[0] = [
            C("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", L5, [
          c[1] || (c[1] = C(" From: ", -1)),
          k(Ya, null, {
            default: p(() => [
              C(d(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", U5, [
        t("div", N5, [
          t("div", O5, [
            c[3] || (c[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", A5, [
              c[2] || (c[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", z5, d(o.value) + " file" + d(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", V5, [
            (n(!0), i(H, null, pe(e.workflows.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
              key: m,
              class: "preview-item"
            }, [
              c[4] || (c[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", F5, d(m), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (n(), i("div", B5, " +" + d(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", W5, [
          t("div", G5, [
            c[6] || (c[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", j5, [
              c[5] || (c[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", H5, d(a.value) + " file" + d(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (n(), i("div", K5, [
            (n(!0), i(H, null, pe(e.models.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
              key: m.filename,
              class: "preview-item"
            }, [
              c[7] || (c[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", q5, [
                t("span", Y5, d(m.filename), 1),
                t("span", J5, d(r(m.size)) + " • " + d(m.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (n(), i("div", Q5, " +" + d(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", X5, [
          t("div", Z5, [
            c[9] || (c[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", eS, [
              c[8] || (c[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", tS, d(l.value) + " node" + d(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (n(), i("div", sS, [
            (n(!0), i(H, null, pe(e.nodes.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
              key: m,
              class: "preview-item"
            }, [
              c[10] || (c[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", oS, d(m), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (n(), i("div", nS, " +" + d(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (n(), i("div", aS, [
          c[11] || (c[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", lS, [
            e.gitBranch ? (n(), U($t, {
              key: 0,
              label: "Branch"
            }, {
              default: p(() => [
                k(Ya, null, {
                  default: p(() => [
                    C(d(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (n(), U($t, {
              key: 1,
              label: "Commit"
            }, {
              default: p(() => [
                k(Fr, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), rS = /* @__PURE__ */ ke(iS, [["__scopeId", "data-v-182fe113"]]), uS = { class: "import-config" }, cS = { class: "config-container" }, dS = { class: "config-field" }, mS = { class: "input-wrapper" }, fS = ["value"], vS = {
  key: 0,
  class: "validating-indicator"
}, pS = {
  key: 1,
  class: "valid-indicator"
}, gS = {
  key: 0,
  class: "field-error"
}, hS = { class: "config-field" }, yS = { class: "strategy-options" }, wS = ["value", "checked", "onChange"], _S = { class: "strategy-content" }, kS = { class: "strategy-label" }, bS = { class: "strategy-description" }, $S = { class: "config-field switch-field" }, CS = { class: "switch-label" }, xS = ["checked"], SS = { class: "advanced-section" }, IS = { class: "advanced-content" }, ES = { class: "config-field" }, TS = ["value"], PS = ["value"], MS = /* @__PURE__ */ we({
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
    const o = e, a = s, l = $(!1), r = $(!1);
    St(() => o.nameError, (v) => {
      l.value = !1, r.value = !v && o.name.length > 0;
    });
    const u = [
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
    let c = null;
    function m(v) {
      const g = v.target.value;
      a("update:name", g), r.value = !1, c && clearTimeout(c), g.length > 0 ? (l.value = !0, c = setTimeout(() => {
        a("validate-name", g);
      }, 400)) : l.value = !1;
    }
    function f() {
      o.name.length > 0 && a("validate-name", o.name);
    }
    return (v, g) => (n(), i("div", uS, [
      k(Qt, null, {
        default: p(() => [...g[2] || (g[2] = [
          C("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", cS, [
        t("div", dS, [
          k(Bn, { required: "" }, {
            default: p(() => [...g[3] || (g[3] = [
              C("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", mS, [
            t("input", {
              type: "text",
              class: Re(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: m,
              onBlur: f
            }, null, 42, fS),
            l.value ? (n(), i("span", vS, "...")) : r.value ? (n(), i("span", pS, "✓")) : y("", !0)
          ]),
          e.nameError ? (n(), i("div", gS, d(e.nameError), 1)) : y("", !0),
          g[4] || (g[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", hS, [
          k(Bn, null, {
            default: p(() => [...g[5] || (g[5] = [
              C("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", yS, [
            (n(), i(H, null, pe(u, (_) => t("label", {
              key: _.value,
              class: Re(["strategy-option", { active: e.modelStrategy === _.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: _.value,
                checked: e.modelStrategy === _.value,
                onChange: (h) => a("update:modelStrategy", _.value)
              }, null, 40, wS),
              t("div", _S, [
                t("span", kS, d(_.label), 1),
                t("span", bS, d(_.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", $S, [
          t("label", CS, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: g[0] || (g[0] = (_) => a("update:switchAfterImport", _.target.checked))
            }, null, 40, xS),
            g[6] || (g[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", SS, [
          g[8] || (g[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", IS, [
            t("div", ES, [
              k(Bn, null, {
                default: p(() => [...g[7] || (g[7] = [
                  C("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              t("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: g[1] || (g[1] = (_) => a("update:torchBackend", _.target.value))
              }, [
                (n(!0), i(H, null, pe(Xe(kl), (_) => (n(), i("option", {
                  key: _,
                  value: _
                }, d(_) + d(_ === "auto" ? " (detect GPU)" : ""), 9, PS))), 128))
              ], 40, TS)
            ])
          ])
        ])
      ])
    ]));
  }
}), RS = /* @__PURE__ */ ke(MS, [["__scopeId", "data-v-89ea06a1"]]), DS = { class: "import-flow" }, LS = {
  key: 0,
  class: "import-empty"
}, US = { class: "git-import-section" }, NS = { class: "git-url-input-row" }, OS = ["disabled"], AS = {
  key: 0,
  class: "git-error"
}, zS = {
  key: 1,
  class: "import-configure"
}, VS = { class: "selected-file-bar" }, FS = {
  key: 0,
  class: "file-bar-content"
}, BS = { class: "file-bar-info" }, WS = { class: "file-bar-name" }, GS = { class: "file-bar-size" }, jS = {
  key: 1,
  class: "file-bar-content"
}, HS = { class: "file-bar-info" }, KS = { class: "file-bar-name" }, qS = {
  key: 0,
  class: "preview-loading"
}, YS = { class: "import-actions" }, JS = {
  key: 2,
  class: "import-progress"
}, QS = { class: "creating-intro" }, XS = {
  key: 0,
  class: "progress-warning"
}, ZS = {
  key: 1,
  class: "import-error"
}, e4 = { class: "error-message" }, t4 = {
  key: 3,
  class: "import-complete"
}, s4 = { class: "complete-message" }, o4 = { class: "complete-title" }, n4 = { class: "complete-details" }, a4 = { class: "complete-actions" }, l4 = /* @__PURE__ */ we({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var A, M, se, L;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: u, validateEnvironmentName: c, executeImport: m, executeGitImport: f, getImportProgress: v } = ut();
    let g = null;
    const _ = $(null), h = $(a.resumeImport ?? !1), w = $(!1), x = $(!1), b = $(""), S = $(!1), F = $(null), E = $(""), P = $(null), D = $(!1), V = $(null), G = $(null), I = $({
      name: ((A = a.initialProgress) == null ? void 0 : A.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), O = $(null), le = $({
      message: ((M = a.initialProgress) == null ? void 0 : M.message) ?? "Preparing import...",
      phase: ((se = a.initialProgress) == null ? void 0 : se.phase) ?? "",
      progress: ((L = a.initialProgress) == null ? void 0 : L.progress) ?? 0,
      error: null
    }), ne = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], K = z(() => {
      if (!G.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const N = G.value;
      return {
        sourceEnvironment: N.comfyui_version ? `ComfyUI ${N.comfyui_version}` : "Unknown",
        workflows: N.workflows.map((oe) => oe.name),
        models: N.models.map((oe) => ({
          filename: oe.filename,
          size: 0,
          type: oe.relative_path.split("/")[0] || "model"
        })),
        nodes: N.nodes.map((oe) => oe.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), j = z(() => !S.value && !F.value && G.value && I.value.name.length > 0 && !O.value && (_.value || P.value));
    async function B(N) {
      _.value = N, S.value = !0, F.value = null, G.value = null;
      try {
        const oe = await r(N);
        G.value = oe;
      } catch (oe) {
        F.value = oe instanceof Error ? oe.message : "Failed to analyze file", console.error("Preview error:", oe);
      } finally {
        S.value = !1;
      }
    }
    function q() {
      _.value = null, P.value = null, E.value = "", V.value = null, w.value = !1, x.value = !1, b.value = "", G.value = null, F.value = null, I.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, O.value = null, l("source-cleared");
    }
    function X() {
      _e(), q(), h.value = !1, S.value = !1, D.value = !1, le.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function Le() {
      if (E.value.trim()) {
        D.value = !0, V.value = null;
        try {
          const N = await u(E.value.trim());
          P.value = E.value.trim(), G.value = N;
        } catch (N) {
          V.value = N instanceof Error ? N.message : "Failed to analyze repository";
        } finally {
          D.value = !1;
        }
      }
    }
    function ae(N) {
      try {
        const oe = new URL(N);
        return oe.host + oe.pathname.replace(/\.git$/, "");
      } catch {
        return N;
      }
    }
    async function de(N) {
      if (!N) {
        O.value = "Environment name is required";
        return;
      }
      try {
        const oe = await c(N);
        O.value = oe.valid ? null : oe.error || "Invalid name";
      } catch {
        O.value = "Failed to validate name";
      }
    }
    async function ie() {
      if (I.value.name && !(!_.value && !P.value)) {
        h.value = !0, w.value = !1, le.value = { message: `Creating environment '${I.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let N;
          if (_.value)
            N = await m(
              _.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else if (P.value)
            N = await f(
              P.value,
              I.value.name,
              I.value.modelStrategy,
              I.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          N.status === "started" ? Ae() : (x.value = !1, b.value = N.message, h.value = !1, w.value = !0);
        } catch (N) {
          x.value = !1, b.value = N instanceof Error ? N.message : "Unknown error occurred during import", h.value = !1, w.value = !0;
        }
      }
    }
    async function Ae() {
      if (g) return;
      const N = async () => {
        try {
          const Ne = await v();
          return le.value = {
            message: Ne.message,
            phase: Ne.phase || "",
            progress: Ne.progress ?? (Ne.state === "importing" ? 50 : 0),
            error: Ne.error || null
          }, Ne.state === "complete" ? (_e(), x.value = !0, b.value = `Environment '${Ne.environment_name}' created successfully`, h.value = !1, w.value = !0, Ne.environment_name && l("import-complete", Ne.environment_name, I.value.switchAfterImport), !1) : Ne.state === "error" ? (_e(), x.value = !1, b.value = Ne.error || Ne.message, h.value = !1, w.value = !0, !1) : !0;
        } catch (Ne) {
          return console.error("Failed to poll import progress:", Ne), !0;
        }
      };
      await N() && (g = setInterval(async () => {
        await N() || _e();
      }, 2e3));
    }
    function _e() {
      g && (clearInterval(g), g = null);
    }
    function Z(N) {
      return N < 1024 ? `${N} B` : N < 1024 * 1024 ? `${(N / 1024).toFixed(1)} KB` : N < 1024 * 1024 * 1024 ? `${(N / (1024 * 1024)).toFixed(1)} MB` : `${(N / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return lt(async () => {
      try {
        const N = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", N.state, N), N.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", N.environment_name), h.value = !0, I.value.name = N.environment_name || I.value.name || "", le.value = {
          progress: N.progress ?? 0,
          message: N.message || "Importing...",
          phase: N.phase || "",
          error: null
        }, Ae());
      } catch (N) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", N);
      }
    }), s({
      handleReset: X,
      isImporting: h,
      canImport: j
    }), (N, oe) => {
      var Ne;
      return n(), i("div", DS, [
        !_.value && !P.value && !h.value ? (n(), i("div", LS, [
          k(M5, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: B
          }),
          oe[7] || (oe[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", US, [
            oe[5] || (oe[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", NS, [
              at(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": oe[0] || (oe[0] = (ze) => E.value = ze),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: as(Le, ["enter"]),
                disabled: D.value
              }, null, 40, OS), [
                [Zt, E.value]
              ]),
              k(ve, {
                variant: "primary",
                size: "sm",
                disabled: !E.value.trim() || D.value,
                onClick: Le
              }, {
                default: p(() => [
                  C(d(D.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            V.value ? (n(), i("div", AS, d(V.value), 1)) : y("", !0),
            oe[6] || (oe[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (_.value || P.value) && !h.value && !w.value ? (n(), i("div", zS, [
          t("div", VS, [
            _.value ? (n(), i("div", FS, [
              oe[8] || (oe[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", BS, [
                t("div", WS, d(_.value.name), 1),
                t("div", GS, d(Z(_.value.size)), 1)
              ])
            ])) : P.value ? (n(), i("div", jS, [
              oe[10] || (oe[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", HS, [
                t("div", KS, d(ae(P.value)), 1),
                oe[9] || (oe[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            k(ve, {
              variant: "ghost",
              size: "sm",
              onClick: q
            }, {
              default: p(() => [...oe[11] || (oe[11] = [
                C(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (n(), i("div", qS, [...oe[12] || (oe[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : F.value ? (n(), U(cs, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [F.value]
          }, null, 8, ["details"])) : G.value ? (n(), U(rS, {
            key: 2,
            "source-environment": K.value.sourceEnvironment,
            workflows: K.value.workflows,
            models: K.value.models,
            nodes: K.value.nodes,
            "git-branch": K.value.gitBranch,
            "git-commit": K.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          G.value ? (n(), U(RS, {
            key: 3,
            name: I.value.name,
            "onUpdate:name": oe[1] || (oe[1] = (ze) => I.value.name = ze),
            "model-strategy": I.value.modelStrategy,
            "onUpdate:modelStrategy": oe[2] || (oe[2] = (ze) => I.value.modelStrategy = ze),
            "torch-backend": I.value.torchBackend,
            "onUpdate:torchBackend": oe[3] || (oe[3] = (ze) => I.value.torchBackend = ze),
            "switch-after-import": I.value.switchAfterImport,
            "onUpdate:switchAfterImport": oe[4] || (oe[4] = (ze) => I.value.switchAfterImport = ze),
            "name-error": O.value,
            onValidateName: de
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          I.value.modelStrategy === "skip" && ((Ne = G.value) != null && Ne.models_needing_download) ? (n(), U(cs, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${G.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", YS, [
            k(ve, {
              variant: "secondary",
              size: "md",
              onClick: q
            }, {
              default: p(() => [...oe[13] || (oe[13] = [
                C(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ve, {
              variant: "primary",
              size: "md",
              disabled: !j.value,
              onClick: ie
            }, {
              default: p(() => [...oe[14] || (oe[14] = [
                C(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : h.value ? (n(), i("div", JS, [
          t("p", QS, [
            oe[15] || (oe[15] = C(" Importing environment ", -1)),
            t("strong", null, d(I.value.name), 1),
            oe[16] || (oe[16] = C("... ", -1))
          ]),
          k(ea, {
            progress: le.value.progress,
            message: le.value.message,
            "current-phase": le.value.phase,
            variant: le.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ne
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          le.value.error ? y("", !0) : (n(), i("p", XS, " This may take several minutes. Please wait... ")),
          le.value.error ? (n(), i("div", ZS, [
            t("p", e4, d(le.value.error), 1)
          ])) : y("", !0)
        ])) : w.value ? (n(), i("div", t4, [
          t("div", {
            class: Re(["complete-icon", x.value ? "success" : "error"])
          }, d(x.value ? "✓" : "✕"), 3),
          t("div", s4, [
            t("div", o4, d(x.value ? "Import Successful" : "Import Failed"), 1),
            t("div", n4, d(b.value), 1)
          ]),
          t("div", a4, [
            k(ve, {
              variant: "primary",
              size: "md",
              onClick: X
            }, {
              default: p(() => [...oe[17] || (oe[17] = [
                C(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), su = /* @__PURE__ */ ke(l4, [["__scopeId", "data-v-72cbc04e"]]), i4 = /* @__PURE__ */ we({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, a = $(!1);
    function l(r, u) {
      u && o("import-complete-switch", r);
    }
    return (r, u) => (n(), i(H, null, [
      k(Ht, null, {
        header: p(() => [
          k(Kt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (c) => a.value = !0)
          })
        ]),
        content: p(() => [
          k(su, { onImportComplete: l })
        ]),
        _: 1
      }),
      k(hs, {
        show: a.value,
        title: "How Import Works",
        onClose: u[1] || (u[1] = (c) => a.value = !1)
      }, {
        content: p(() => [...u[2] || (u[2] = [
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
}), r4 = /* @__PURE__ */ ke(i4, [["__scopeId", "data-v-e13bfe76"]]), Dn = So(), u4 = 5e3, $o = $([]), La = $(!1), Ua = $(null);
let Go = null;
async function Ln(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function ou(e) {
  const s = z(
    () => $o.value.filter((h) => h.status === "running")
  ), o = z(
    () => $o.value.filter((h) => h.status === "deploying")
  ), a = z(
    () => $o.value.filter((h) => h.status === "stopped")
  ), l = z(
    () => s.value.length + o.value.length
  ), r = z(() => {
    const h = {
      deploying: 0,
      running: 1,
      stopped: 2,
      error: 3,
      terminated: 4
    };
    return [...$o.value].sort(
      (w, x) => (h[w.status] ?? 5) - (h[x.status] ?? 5)
    );
  });
  async function u() {
    La.value = !0, Ua.value = null;
    try {
      let h;
      if (!Dn) {
        const w = await Ln("/v2/comfygit/deploy/instances");
        if (!w.ok)
          throw new Error(`Failed to fetch instances: ${w.status}`);
        h = await w.json();
      }
      $o.value = h.instances;
    } catch (h) {
      Ua.value = h instanceof Error ? h.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", h);
    } finally {
      La.value = !1;
    }
  }
  function c(h, w) {
    if (h.provider === "custom" && h.worker_name) {
      const x = h.id.includes(":") ? h.id.split(":").slice(1).join(":") : h.id;
      return w === "terminate" ? `/v2/comfygit/deploy/custom/${h.worker_name}/instances/${x}` : `/v2/comfygit/deploy/custom/${h.worker_name}/instances/${x}/${w}`;
    }
    return w === "terminate" ? `/v2/comfygit/deploy/${h.provider}/${h.id}` : `/v2/comfygit/deploy/${h.provider}/${h.id}/${w}`;
  }
  async function m(h) {
    try {
      if (!Dn) {
        const w = c(h, "stop"), x = await Ln(w, { method: "POST" });
        if (!x.ok) {
          const b = await x.json();
          throw new Error(b.message || "Failed to stop instance");
        }
      }
      await u();
    } catch (w) {
      throw console.error("[useDeployInstances] stopInstance error:", w), w;
    }
  }
  async function f(h) {
    try {
      if (!Dn) {
        const w = c(h, "start"), x = await Ln(w, { method: "POST" });
        if (!x.ok) {
          const b = await x.json();
          throw new Error(b.message || "Failed to start instance");
        }
      }
      await u();
    } catch (w) {
      throw console.error("[useDeployInstances] startInstance error:", w), w;
    }
  }
  async function v(h) {
    try {
      if (!Dn) {
        const w = c(h, "terminate"), x = await Ln(w, { method: "DELETE" });
        if (!x.ok) {
          const b = await x.json();
          throw new Error(b.message || "Failed to terminate instance");
        }
      }
      await u();
    } catch (w) {
      throw console.error("[useDeployInstances] terminateInstance error:", w), w;
    }
  }
  function g() {
    Go || (Go = window.setInterval(u, u4));
  }
  function _() {
    Go && (clearInterval(Go), Go = null);
  }
  return St(o, (h) => {
    h.length > 0 && g();
  }, { immediate: !0 }), e != null && e.autoStart && (u(), g()), {
    // State
    instances: $o,
    isLoading: La,
    error: Ua,
    // Computed
    runningInstances: s,
    deployingInstances: o,
    stoppedInstances: a,
    liveInstanceCount: l,
    sortedInstances: r,
    // Actions
    refreshInstances: u,
    stopInstance: m,
    startInstance: f,
    terminateInstance: v,
    // Polling
    startPolling: g,
    stopPolling: _
  };
}
const c4 = { class: "instance-header" }, d4 = { class: "provider-badge" }, m4 = { class: "instance-name" }, f4 = {
  key: 0,
  class: "spinner"
}, v4 = { class: "instance-details" }, p4 = {
  key: 0,
  class: "detail"
}, g4 = {
  key: 1,
  class: "detail instance-url"
}, h4 = {
  key: 2,
  class: "detail"
}, y4 = {
  key: 3,
  class: "detail"
}, w4 = {
  key: 4,
  class: "detail total-cost"
}, _4 = {
  key: 0,
  class: "deployment-progress"
}, k4 = { class: "progress-message" }, b4 = { class: "instance-actions" }, $4 = /* @__PURE__ */ we({
  __name: "InstanceCard",
  props: {
    instance: {},
    isLoading: { type: Boolean }
  },
  emits: ["stop", "start", "terminate"],
  setup(e) {
    const s = e, o = z(() => s.instance.provider === "custom" && s.instance.worker_name ? s.instance.worker_name : {
      runpod: "RunPod",
      vast: "Vast.ai",
      custom: "Custom"
    }[s.instance.provider] || s.instance.provider), a = z(() => ({
      deploying: "Deploying",
      starting: "Starting",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[s.instance.status] || s.instance.status), l = z(() => `status-${s.instance.status}`);
    function r() {
      s.instance.comfyui_url && window.open(s.instance.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function u() {
      s.instance.console_url && window.open(s.instance.console_url, "_blank", "noopener,noreferrer");
    }
    function c(m) {
      const f = Math.floor(m / 3600), v = Math.floor(m % 3600 / 60);
      return f > 0 ? `${f}h ${v}m` : `${v}m`;
    }
    return (m, f) => (n(), i("div", {
      class: Re(["instance-card", l.value])
    }, [
      t("div", c4, [
        t("span", d4, d(o.value), 1),
        t("span", m4, d(e.instance.name), 1),
        t("span", {
          class: Re(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (n(), i("span", f4)) : y("", !0),
          C(" " + d(a.value), 1)
        ], 2)
      ]),
      t("div", v4, [
        e.instance.gpu_type ? (n(), i("span", p4, d(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (n(), i("span", g4, d(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (n(), i("span", h4, d(c(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (n(), i("span", y4, "$" + d(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (n(), i("span", w4, "$" + d(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (n(), i("div", _4, [
        t("div", k4, d(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (n(), U(ga, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", b4, [
        e.instance.status === "running" && e.instance.comfyui_url ? (n(), U(ve, {
          key: 0,
          variant: "primary",
          size: "xs",
          onClick: r
        }, {
          default: p(() => [...f[3] || (f[3] = [
            C(" Open ComfyUI ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.console_url && e.instance.provider !== "custom" ? (n(), U(ve, {
          key: 1,
          variant: "ghost",
          size: "xs",
          onClick: u
        }, {
          default: p(() => [...f[4] || (f[4] = [
            C(" Console ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.status === "running" ? (n(), U(ve, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: f[0] || (f[0] = (v) => m.$emit("stop", e.instance))
        }, {
          default: p(() => [...f[5] || (f[5] = [
            C(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        e.instance.status === "stopped" ? (n(), U(ve, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: f[1] || (f[1] = (v) => m.$emit("start", e.instance))
        }, {
          default: p(() => [...f[6] || (f[6] = [
            C(" Start ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        k(ve, {
          variant: "destructive",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: f[2] || (f[2] = (v) => m.$emit("terminate", e.instance))
        }, {
          default: p(() => [...f[7] || (f[7] = [
            C(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), C4 = /* @__PURE__ */ ke($4, [["__scopeId", "data-v-746c3894"]]), x4 = { class: "instances-tab" }, S4 = { class: "instances-header" }, I4 = {
  key: 0,
  class: "loading-state"
}, E4 = {
  key: 1,
  class: "empty-state"
}, T4 = {
  key: 2,
  class: "instances-list"
}, P4 = /* @__PURE__ */ we({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(e) {
    const s = e, o = z(() => {
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
    return (a, l) => (n(), i("div", x4, [
      t("div", S4, [
        k(Qt, null, {
          default: p(() => [...l[4] || (l[4] = [
            C("Active Instances", -1)
          ])]),
          _: 1
        }),
        k(ve, {
          variant: "ghost",
          size: "xs",
          loading: e.isLoading,
          onClick: l[0] || (l[0] = (r) => a.$emit("refresh"))
        }, {
          default: p(() => [...l[5] || (l[5] = [
            C(" Refresh ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      e.isLoading && e.instances.length === 0 ? (n(), i("div", I4, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        C(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (n(), i("div", E4, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (n(), i("div", T4, [
        (n(!0), i(H, null, pe(o.value, (r) => (n(), U(C4, {
          key: r.id,
          instance: r,
          "is-loading": e.actionLoadingId === r.id,
          onStop: l[1] || (l[1] = (u) => a.$emit("stop", u)),
          onStart: l[2] || (l[2] = (u) => a.$emit("start", u)),
          onTerminate: l[3] || (l[3] = (u) => a.$emit("terminate", u))
        }, null, 8, ["instance", "is-loading"]))), 128))
      ]))
    ]));
  }
}), M4 = /* @__PURE__ */ ke(P4, [["__scopeId", "data-v-ba614fc3"]]), R4 = { class: "remote-header" }, D4 = { class: "remote-info" }, L4 = { class: "remote-icon" }, U4 = { class: "remote-name" }, N4 = {
  key: 0,
  class: "default-badge"
}, O4 = {
  key: 1,
  class: "sync-badge"
}, A4 = {
  key: 0,
  class: "ahead"
}, z4 = {
  key: 1,
  class: "behind"
}, V4 = {
  key: 1,
  class: "synced"
}, F4 = ["href"], B4 = {
  key: 1,
  class: "remote-url-text"
}, W4 = { class: "remote-actions" }, G4 = /* @__PURE__ */ we({
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
    const s = e, o = z(() => s.remote.is_default), a = z(() => {
      const r = s.remote.fetch_url, u = r.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return u ? `https://${u[1]}/${u[2]}` : r.startsWith("https://") || r.startsWith("http://") ? r.replace(/\.git$/, "") : null;
    }), l = z(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (r, u) => (n(), i("div", {
      class: Re(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", R4, [
        t("div", D4, [
          t("span", L4, d(o.value ? "🔗" : "🌐"), 1),
          t("span", U4, d(e.remote.name), 1),
          o.value ? (n(), i("span", N4, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", O4, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(H, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", A4, "↑" + d(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", z4, "↓" + d(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", V4, "✓ synced"))
          ])) : y("", !0)
        ]),
        a.value ? (n(), i("a", {
          key: 0,
          href: a.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: u[0] || (u[0] = gt(() => {
          }, ["stop"]))
        }, d(l.value), 9, F4)) : (n(), i("span", B4, d(l.value), 1))
      ]),
      t("div", W4, [
        k(ve, {
          variant: "secondary",
          size: "xs",
          loading: e.isFetching,
          onClick: u[1] || (u[1] = (c) => r.$emit("fetch", e.remote.name))
        }, {
          default: p(() => [...u[4] || (u[4] = [
            C(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        e.syncStatus && e.syncStatus.ahead > 0 ? (n(), U(ve, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: e.isPushing,
          onClick: u[2] || (u[2] = (c) => r.$emit("push", e.remote.name))
        }, {
          default: p(() => [
            C(" Push ↑" + d(e.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : y("", !0),
        k(ve, {
          variant: e.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: u[3] || (u[3] = (c) => r.$emit("select", e.remote.name))
        }, {
          default: p(() => [
            C(d(e.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), nu = /* @__PURE__ */ ke(G4, [["__scopeId", "data-v-d687d161"]]), j4 = { class: "runpod-tab" }, H4 = { class: "api-key-card" }, K4 = { class: "api-key-row" }, q4 = { class: "api-key-input-wrapper" }, Y4 = ["type", "disabled"], J4 = ["title"], Q4 = { class: "status-icon" }, X4 = { class: "status-text" }, Z4 = {
  key: 0,
  class: "credit-balance"
}, eI = { class: "config-card" }, tI = { class: "config-row" }, sI = ["disabled"], oI = {
  key: 0,
  value: ""
}, nI = {
  key: 1,
  value: "",
  disabled: ""
}, aI = ["value", "disabled"], lI = { class: "config-row" }, iI = {
  key: 0,
  class: "loading-inline"
}, rI = { class: "no-volumes-state" }, uI = { class: "no-volumes-text" }, cI = ["value"], dI = { class: "config-row" }, mI = ["disabled"], fI = {
  key: 0,
  value: ""
}, vI = {
  key: 1,
  value: ""
}, pI = {
  key: 2,
  value: ""
}, gI = ["value"], hI = { class: "config-row" }, yI = { class: "radio-group" }, wI = { class: "radio-option" }, _I = { class: "radio-label" }, kI = { class: "radio-option disabled" }, bI = { class: "radio-label" }, $I = { class: "config-row" }, CI = { class: "radio-group" }, xI = { class: "radio-option" }, SI = { class: "radio-label" }, II = { class: "radio-option disabled" }, EI = { class: "radio-label" }, TI = { class: "config-row" }, PI = {
  key: 0,
  class: "loading-text"
}, MI = {
  key: 1,
  class: "empty-remotes"
}, RI = { class: "remotes-list" }, DI = {
  key: 0,
  class: "sync-warning"
}, LI = { class: "warning-content" }, UI = { class: "remotes-footer" }, NI = { class: "summary-card" }, OI = {
  key: 0,
  class: "loading-text"
}, AI = { class: "summary-row" }, zI = { class: "summary-value" }, VI = { class: "summary-row" }, FI = { class: "summary-value" }, BI = { class: "summary-row" }, WI = { class: "summary-value" }, GI = {
  key: 0,
  class: "summary-sub-row"
}, jI = { class: "summary-sub-label" }, HI = {
  key: 1,
  class: "summary-sub-row warning"
}, KI = { class: "summary-sub-label" }, qI = { class: "summary-row" }, YI = { class: "summary-value" }, JI = { class: "summary-row" }, QI = { class: "summary-value" }, XI = { class: "deployment-summary" }, ZI = { class: "summary-columns" }, e6 = { class: "summary-column" }, t6 = { class: "pricing-row" }, s6 = { class: "pricing-value" }, o6 = { class: "pricing-row" }, n6 = { class: "pricing-value" }, a6 = { class: "pricing-row" }, l6 = { class: "pricing-value" }, i6 = { class: "pricing-row total" }, r6 = { class: "pricing-value" }, u6 = { class: "summary-column" }, c6 = { class: "spec-row" }, d6 = { class: "spec-row" }, m6 = {
  key: 0,
  class: "spec-row"
}, f6 = {
  key: 1,
  class: "spec-row spot-warning"
}, v6 = {
  key: 4,
  class: "deploy-actions"
}, p6 = { class: "progress-content" }, g6 = { class: "phase-indicator" }, h6 = { key: 0 }, y6 = { key: 1 }, w6 = { key: 2 }, _6 = {
  key: 3,
  class: "spinner"
}, k6 = { class: "phase-text" }, b6 = { class: "phase-name" }, $6 = { class: "phase-detail" }, C6 = {
  key: 0,
  class: "ready-actions"
}, x6 = { class: "console-link" }, S6 = ["href"], I6 = /* @__PURE__ */ we({
  __name: "RunPodTab",
  emits: ["toast", "navigate", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getDeploySummary: a,
      testRunPodConnection: l,
      getNetworkVolumes: r,
      getRunPodGpuTypes: u,
      deployToRunPod: c,
      getDeploymentStatus: m,
      getStoredRunPodKey: f,
      clearRunPodKey: v,
      validateDeploy: g,
      getRemotes: _,
      getRemoteSyncStatus: h,
      fetchRemote: w,
      pushToRemote: x,
      getDataCenters: b
    } = ut(), S = $(!1), F = $(""), E = $(!1), P = $(!1), D = $(null), V = $(null), G = $(""), I = $(""), O = $(""), le = $("SECURE"), ne = $("ON_DEMAND"), K = $("my-comfyui-deploy"), j = $([]), B = $({}), q = $(!1), X = $(null), Le = $(null), ae = $(null), de = $([]), ie = $(!1), Ae = $([]), _e = $(!1), Z = $([]), A = $(!1), M = $(null), se = $(!1), L = $(!1), N = $(null), oe = $(!1), Ne = $(null), ze = $(null), W = $(null), J = $(!1), re = $(null), xe = $(!1), be = $(!1), $e = z(() => Ae.value.find((T) => T.id === I.value) || null), De = z(() => G.value ? Ae.value.filter((T) => T.data_center_id === G.value) : Ae.value), ye = z(() => Z.value.filter((T) => T.available)), Te = z(() => X.value && B.value[X.value] || null), fe = z(() => {
      if (!X.value) return null;
      const T = j.value.find((R) => R.name === X.value);
      return (T == null ? void 0 : T.fetch_url) || null;
    }), We = z(() => E.value && I.value && O.value && fe.value && !L.value && !J.value), Ue = (T) => {
      const R = Z.value.find((tt) => tt.id === O.value);
      if (!R) return "0.00";
      if (T === "SECURE") return (R.securePrice ?? 0).toFixed(2);
      if (T === "COMMUNITY") return (R.communityPrice ?? 0).toFixed(2);
      const Pe = le.value === "SECURE";
      return T === "ON_DEMAND" ? Pe ? (R.securePrice ?? 0).toFixed(2) : (R.communityPrice ?? 0).toFixed(2) : Pe ? (R.secureSpotPrice ?? 0).toFixed(2) : (R.communitySpotPrice ?? 0).toFixed(2);
    }, ge = z(() => {
      const T = Z.value.find((Et) => Et.id === O.value), R = Ae.value.find((Et) => Et.id === I.value);
      if (!T) return null;
      const Pe = le.value === "SECURE", tt = ne.value === "SPOT";
      let pt;
      tt ? pt = Pe ? T.secureSpotPrice ?? 0 : T.communitySpotPrice ?? 0 : pt = Pe ? T.securePrice ?? 0 : T.communityPrice ?? 0;
      const st = R ? R.size_gb * 14e-5 : 0, xt = 4e-3;
      return {
        gpu: pt,
        volume: st,
        container: xt,
        total: pt + st + xt
      };
    });
    async function Y() {
      await me(), await Promise.all([Ke(), Ve()]);
    }
    async function Ve() {
      q.value = !0;
      try {
        const T = await _();
        j.value = T.remotes, await Promise.all(
          T.remotes.map(async (Pe) => {
            const tt = await h(Pe.name);
            tt && (B.value[Pe.name] = tt);
          })
        );
        const R = T.remotes.find((Pe) => Pe.is_default);
        R ? X.value = R.name : T.remotes.length > 0 && (X.value = T.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        q.value = !1;
      }
    }
    async function Ie(T) {
      Le.value = T;
      try {
        await w(T);
        const R = await h(T);
        R && (B.value[T] = R), o("toast", `Fetched from ${T}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        Le.value = null;
      }
    }
    async function Ce(T) {
      ae.value = T;
      try {
        await x(T, { force: !1 });
        const R = await h(T);
        R && (B.value[T] = R), o("toast", `Pushed to ${T}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        ae.value = null;
      }
    }
    function Oe(T) {
      X.value = T;
    }
    async function Me() {
      if (F.value) {
        P.value = !0, D.value = null;
        try {
          const T = await l(F.value, !0);
          T.status === "success" ? (E.value = !0, V.value = T.credit_balance ?? null, D.value = { type: "success", message: T.message }, await Y()) : D.value = { type: "error", message: T.message };
        } catch (T) {
          D.value = {
            type: "error",
            message: T instanceof Error ? T.message : "Connection test failed"
          };
        } finally {
          P.value = !1;
        }
      }
    }
    async function Q() {
      try {
        await v(), F.value = "", E.value = !1, D.value = null, V.value = null, de.value = [], G.value = "", Ae.value = [], I.value = "", Z.value = [], O.value = "", M.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function me() {
      _e.value = !0, ie.value = !0;
      try {
        const T = await r();
        Ae.value = T.volumes;
        const R = /* @__PURE__ */ new Map();
        for (const Pe of T.volumes)
          Pe.data_center_id && !R.has(Pe.data_center_id) && R.set(Pe.data_center_id, {
            id: Pe.data_center_id,
            name: Pe.data_center_name || Pe.data_center_id,
            available: !0
          });
        if (T.volumes.length === 0) {
          const Pe = await b();
          de.value = Pe.data_centers;
        } else
          de.value = Array.from(R.values());
        if (Ae.value.length > 0) {
          const Pe = Ae.value[0];
          I.value = Pe.id, Pe.data_center_id && (G.value = Pe.data_center_id, await he(Pe.data_center_id));
        } else de.value.length > 0 && (G.value = de.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        _e.value = !1, ie.value = !1;
      }
    }
    async function he(T) {
      A.value = !0;
      try {
        const R = await u(T);
        Z.value = R.gpu_types;
        const Pe = Z.value.find((tt) => tt.available);
        Pe ? O.value = Pe.id : O.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        A.value = !1;
      }
    }
    St(G, async (T) => {
      if (!T || _e.value) return;
      const R = Ae.value.find((Pe) => Pe.id === I.value);
      R && R.data_center_id !== T && (I.value = ""), await he(T);
    }), St(I, async (T) => {
      if (!T) {
        Z.value = [], O.value = "";
        return;
      }
      if (_e.value) return;
      const R = Ae.value.find((Pe) => Pe.id === T);
      R && R.data_center_id !== G.value ? G.value = R.data_center_id : R && await he(R.data_center_id);
    });
    async function Ke() {
      se.value = !0;
      try {
        M.value = await a();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        se.value = !1;
      }
    }
    async function Fe() {
      if (!(!O.value || !I.value)) {
        J.value = !0, N.value = null;
        try {
          const T = await g();
          re.value = T, T.can_export ? T.warnings.models_without_sources.length > 0 ? be.value = !0 : await qe() : xe.value = !0;
        } catch (T) {
          N.value = {
            status: "error",
            message: T instanceof Error ? T.message : "Validation failed"
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
        const T = await g();
        re.value = T;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function qe() {
      L.value = !0;
      try {
        let T;
        if (ne.value === "SPOT") {
          const Pe = Z.value.find((tt) => tt.id === O.value);
          Pe && (T = le.value === "SECURE" ? Pe.secureSpotPrice : Pe.communitySpotPrice);
        }
        const R = await c({
          gpu_type_id: O.value,
          pod_name: K.value || "my-comfyui-deploy",
          network_volume_id: I.value,
          cloud_type: le.value,
          pricing_type: ne.value,
          spot_bid: T,
          import_source: fe.value
        });
        N.value = R, R.status === "success" && R.pod_id ? (Ne.value = R.pod_id, oe.value = !0, vt(R.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", R.message, "error");
      } catch (T) {
        N.value = {
          status: "error",
          message: T instanceof Error ? T.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        L.value = !1;
      }
    }
    function vt(T) {
      ft(T), W.value = window.setInterval(() => ft(T), 3e3);
    }
    function dt() {
      W.value && (clearInterval(W.value), W.value = null);
    }
    async function ft(T) {
      try {
        const R = await m(T);
        ze.value = R, (R.phase === "READY" || R.phase === "ERROR" || R.phase === "STOPPED") && (dt(), R.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (R) {
        console.error("Failed to poll deployment status:", R);
      }
    }
    function Pt() {
      oe.value = !1, dt(), Ne.value = null, ze.value = null;
    }
    function ts() {
      var T;
      (T = ze.value) != null && T.comfyui_url && window.open(ze.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function Ot(T) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[T || ""] || "Initializing...";
    }
    function ue(T) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[T || ""] ?? 10;
    }
    return lt(async () => {
      try {
        const T = await f(!0);
        T.has_key && T.key_preview && (F.value = `****${T.key_preview}`, T.valid ? (E.value = !0, V.value = T.credit_balance ?? null, D.value = { type: "success", message: "Connected to RunPod" }, await Y()) : T.error && (D.value = { type: "error", message: T.error }));
      } catch {
      }
    }), Xs(() => {
      dt();
    }), (T, R) => {
      var Pe, tt, pt, st, xt, Et;
      return n(), i(H, null, [
        t("div", j4, [
          k(_t, { title: "RUNPOD API KEY" }, {
            default: p(() => [
              t("div", H4, [
                t("div", K4, [
                  t("div", q4, [
                    at(t("input", {
                      "onUpdate:modelValue": R[0] || (R[0] = (Ge) => F.value = Ge),
                      type: S.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: E.value
                    }, null, 8, Y4), [
                      [pa, F.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: R[1] || (R[1] = (Ge) => S.value = !S.value),
                      title: S.value ? "Hide key" : "Show key"
                    }, d(S.value ? "👁" : "👁‍🗨"), 9, J4)
                  ]),
                  E.value ? y("", !0) : (n(), U(ve, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: P.value,
                    disabled: !F.value || P.value,
                    onClick: Me
                  }, {
                    default: p(() => [...R[16] || (R[16] = [
                      C(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  E.value ? (n(), U(ve, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: Q
                  }, {
                    default: p(() => [...R[17] || (R[17] = [
                      C(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                D.value ? (n(), i("div", {
                  key: 0,
                  class: Re(["connection-status", D.value.type])
                }, [
                  t("span", Q4, d(D.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", X4, d(D.value.message), 1),
                  V.value !== null ? (n(), i("span", Z4, " $" + d(V.value.toFixed(2)) + " credit ", 1)) : y("", !0)
                ], 2)) : y("", !0),
                R[18] || (R[18] = t("div", { class: "api-key-help" }, [
                  t("span", { class: "help-icon" }, "i"),
                  t("span", { class: "help-text" }, [
                    C(" Get your API key at "),
                    t("a", {
                      href: "https://runpod.io/console/user/settings",
                      target: "_blank",
                      rel: "noopener"
                    }, "runpod.io/console/user/settings"),
                    C(". Key stored locally, never sent to ComfyGit servers. ")
                  ])
                ], -1))
              ])
            ]),
            _: 1
          }),
          E.value ? (n(), U(_t, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: p(() => [
              t("div", eI, [
                t("div", tI, [
                  R[19] || (R[19] = t("label", { class: "config-label" }, "Region", -1)),
                  at(t("select", {
                    "onUpdate:modelValue": R[2] || (R[2] = (Ge) => G.value = Ge),
                    class: "config-select",
                    disabled: ie.value
                  }, [
                    ie.value ? (n(), i("option", oI, "Loading...")) : G.value ? y("", !0) : (n(), i("option", nI, "Select a region")),
                    (n(!0), i(H, null, pe(de.value, (Ge) => (n(), i("option", {
                      key: Ge.id,
                      value: Ge.id,
                      disabled: !Ge.available
                    }, d(Ge.id) + " (" + d(Ge.name) + ")" + d(Ge.available ? "" : " [Unavailable]"), 9, aI))), 128))
                  ], 8, sI), [
                    [Ss, G.value]
                  ])
                ]),
                t("div", lI, [
                  R[24] || (R[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  _e.value ? (n(), i("div", iI, "Loading volumes...")) : De.value.length === 0 ? (n(), i(H, { key: 1 }, [
                    t("div", rI, [
                      R[20] || (R[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", uI, "No volumes in " + d(G.value || "this region"), 1)
                    ]),
                    R[21] || (R[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    R[22] || (R[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (n(), i(H, { key: 2 }, [
                    at(t("select", {
                      "onUpdate:modelValue": R[3] || (R[3] = (Ge) => I.value = Ge),
                      class: "config-select"
                    }, [
                      (n(!0), i(H, null, pe(De.value, (Ge) => (n(), i("option", {
                        key: Ge.id,
                        value: Ge.id
                      }, d(Ge.name) + " (" + d(Ge.size_gb) + "GB) ", 9, cI))), 128))
                    ], 512), [
                      [Ss, I.value]
                    ]),
                    R[23] || (R[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", dI, [
                  R[25] || (R[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  at(t("select", {
                    "onUpdate:modelValue": R[4] || (R[4] = (Ge) => O.value = Ge),
                    class: "config-select",
                    disabled: A.value || !I.value
                  }, [
                    I.value ? A.value ? (n(), i("option", vI, "Loading GPUs...")) : ye.value.length === 0 ? (n(), i("option", pI, "No GPUs available in this region")) : y("", !0) : (n(), i("option", fI, "Select a volume first")),
                    (n(!0), i(H, null, pe(ye.value, (Ge) => (n(), i("option", {
                      key: Ge.id,
                      value: Ge.id
                    }, d(Ge.displayName) + " (" + d(Ge.memoryInGb) + "GB) - $" + d(le.value === "SECURE" ? (Ge.securePrice ?? 0).toFixed(2) : (Ge.communityPrice ?? 0).toFixed(2)) + "/hr " + d(Ge.stockStatus ? `[${Ge.stockStatus}]` : ""), 9, gI))), 128))
                  ], 8, mI), [
                    [Ss, O.value]
                  ])
                ]),
                t("div", hI, [
                  R[26] || (R[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", yI, [
                    t("label", wI, [
                      at(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[5] || (R[5] = (Ge) => le.value = Ge),
                        value: "SECURE"
                      }, null, 512), [
                        [ds, le.value]
                      ]),
                      t("span", _I, "Secure ($" + d(Ue("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", kI, [
                      at(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[6] || (R[6] = (Ge) => le.value = Ge),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [ds, le.value]
                      ]),
                      t("span", bI, "Community ($" + d(Ue("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", $I, [
                  R[27] || (R[27] = t("label", { class: "config-label" }, [
                    C(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", CI, [
                    t("label", xI, [
                      at(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[7] || (R[7] = (Ge) => ne.value = Ge),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [ds, ne.value]
                      ]),
                      t("span", SI, "On-Demand ($" + d(Ue("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", II, [
                      at(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[8] || (R[8] = (Ge) => ne.value = Ge),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [ds, ne.value]
                      ]),
                      t("span", EI, "Spot ($" + d(Ue("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", TI, [
                  R[28] || (R[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  at(t("input", {
                    "onUpdate:modelValue": R[9] || (R[9] = (Ge) => K.value = Ge),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [Zt, K.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : y("", !0),
          E.value ? (n(), U(_t, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: p(() => [
              q.value ? (n(), i("div", PI, "Loading remotes...")) : j.value.length === 0 ? (n(), i("div", MI, [
                R[30] || (R[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                k(ve, {
                  variant: "primary",
                  size: "xs",
                  onClick: R[10] || (R[10] = (Ge) => o("navigate", "remotes"))
                }, {
                  default: p(() => [...R[29] || (R[29] = [
                    C(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (n(), i(H, { key: 2 }, [
                t("div", RI, [
                  (n(!0), i(H, null, pe(j.value, (Ge) => (n(), U(nu, {
                    key: Ge.name,
                    remote: Ge,
                    "sync-status": B.value[Ge.name],
                    "is-selected": X.value === Ge.name,
                    "is-fetching": Le.value === Ge.name,
                    "is-pushing": ae.value === Ge.name,
                    onFetch: Ie,
                    onPush: Ce,
                    onSelect: Oe
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                Te.value && Te.value.ahead > 0 ? (n(), i("div", DI, [
                  R[31] || (R[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", LI, [
                    t("strong", null, d(Te.value.ahead) + " unpushed commit" + d(Te.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + d(X.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  k(ve, {
                    variant: "primary",
                    size: "xs",
                    loading: ae.value === X.value,
                    onClick: R[11] || (R[11] = (Ge) => X.value && Ce(X.value))
                  }, {
                    default: p(() => [
                      C(" Push to " + d(X.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", UI, [
                  k(ve, {
                    variant: "link",
                    size: "xs",
                    onClick: R[12] || (R[12] = (Ge) => o("navigate", "remotes"))
                  }, {
                    default: p(() => [...R[32] || (R[32] = [
                      C(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          E.value ? (n(), U(_t, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: p(() => [
              t("div", NI, [
                se.value ? (n(), i("div", OI, "Loading environment summary...")) : M.value ? (n(), i(H, { key: 1 }, [
                  t("div", AI, [
                    R[33] || (R[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", zI, d(M.value.comfyui_version), 1)
                  ]),
                  t("div", VI, [
                    R[34] || (R[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", FI, d(M.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", BI, [
                    R[35] || (R[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", WI, d(M.value.model_count) + " models", 1)
                  ]),
                  M.value.models_with_sources > 0 ? (n(), i("div", GI, [
                    t("span", jI, "└─ " + d(M.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  M.value.models_without_sources > 0 ? (n(), i("div", HI, [
                    t("span", KI, "└─ " + d(M.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", qI, [
                    R[36] || (R[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", YI, d(M.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", JI, [
                    R[37] || (R[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", QI, "~" + d(M.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          E.value && ge.value ? (n(), U(_t, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: p(() => {
              var Ge, is;
              return [
                t("div", XI, [
                  t("div", ZI, [
                    t("div", e6, [
                      R[42] || (R[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", t6, [
                        R[38] || (R[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", s6, "$" + d(ge.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", o6, [
                        R[39] || (R[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", n6, "$" + d(ge.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", a6, [
                        R[40] || (R[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", l6, "$" + d(ge.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      R[43] || (R[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", i6, [
                        R[41] || (R[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", r6, "~$" + d(ge.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", u6, [
                      R[45] || (R[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", c6, [
                        t("span", null, d(((Ge = Z.value.find((ys) => ys.id === O.value)) == null ? void 0 : Ge.displayName) || "GPU") + " (" + d(((is = Z.value.find((ys) => ys.id === O.value)) == null ? void 0 : is.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", d6, [
                        t("span", null, "Region: " + d(G.value), 1)
                      ]),
                      $e.value ? (n(), i("div", m6, [
                        t("span", null, "Volume: " + d($e.value.name), 1)
                      ])) : y("", !0),
                      ne.value === "SPOT" ? (n(), i("div", f6, [...R[44] || (R[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          E.value ? (n(), i("div", v6, [
            k(ve, {
              variant: "primary",
              size: "md",
              loading: J.value || L.value,
              disabled: !We.value,
              onClick: Fe
            }, {
              default: p(() => [
                R[46] || (R[46] = t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  t("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                C(" " + d(J.value ? "Validating..." : L.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          N.value ? (n(), U(_t, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: p(() => [
              k(Lt, {
                status: N.value.status === "success" ? "synced" : "broken"
              }, fo({
                icon: p(() => [
                  C(d(N.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: p(() => [
                  C(d(N.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: p(() => [
                  C(d(N.value.message), 1)
                ]),
                actions: p(() => [
                  k(ve, {
                    variant: "ghost",
                    size: "xs",
                    onClick: R[13] || (R[13] = (Ge) => N.value = null)
                  }, {
                    default: p(() => [...R[47] || (R[47] = [
                      C(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                N.value.pod_id ? {
                  name: "details",
                  fn: p(() => [
                    k($t, {
                      label: "Pod ID:",
                      value: N.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        oe.value ? (n(), U(Ct, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((Pe = ze.value) == null ? void 0 : Pe.phase) === "READY" || ((tt = ze.value) == null ? void 0 : tt.phase) === "ERROR" || ((pt = ze.value) == null ? void 0 : pt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: Pt
        }, fo({
          body: p(() => {
            var Ge, is, ys, vo, po, go, Zs, ho, yo, wo, _o, ko;
            return [
              t("div", p6, [
                t("div", g6, [
                  t("div", {
                    class: Re(["phase-icon", (is = (Ge = ze.value) == null ? void 0 : Ge.phase) == null ? void 0 : is.toLowerCase()])
                  }, [
                    ((ys = ze.value) == null ? void 0 : ys.phase) === "READY" ? (n(), i("span", h6, "✓")) : ((vo = ze.value) == null ? void 0 : vo.phase) === "ERROR" ? (n(), i("span", y6, "✕")) : ((po = ze.value) == null ? void 0 : po.phase) === "STOPPED" ? (n(), i("span", w6, "○")) : (n(), i("span", _6, "⟳"))
                  ], 2),
                  t("div", k6, [
                    t("div", b6, d(Ot((go = ze.value) == null ? void 0 : go.phase)), 1),
                    t("div", $6, d(((Zs = ze.value) == null ? void 0 : Zs.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                k(ga, {
                  progress: ue((ho = ze.value) == null ? void 0 : ho.phase),
                  variant: ((yo = ze.value) == null ? void 0 : yo.phase) === "ERROR" ? "error" : ((wo = ze.value) == null ? void 0 : wo.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((_o = ze.value) == null ? void 0 : _o.phase) === "READY" ? (n(), i("div", C6, [
                  k(ve, {
                    variant: "primary",
                    size: "md",
                    onClick: ts
                  }, {
                    default: p(() => [...R[48] || (R[48] = [
                      C(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", x6, [
                  (ko = ze.value) != null && ko.console_url ? (n(), i("a", {
                    key: 0,
                    href: ze.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, S6)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((st = ze.value) == null ? void 0 : st.phase) === "READY" || ((xt = ze.value) == null ? void 0 : xt.phase) === "ERROR" || ((Et = ze.value) == null ? void 0 : Et.phase) === "STOPPED" ? {
            name: "footer",
            fn: p(() => [
              k(ve, {
                variant: "ghost",
                size: "xs",
                onClick: Pt
              }, {
                default: p(() => [...R[49] || (R[49] = [
                  C(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        xe.value && re.value ? (n(), U(eu, {
          key: 1,
          issues: re.value.blocking_issues,
          onClose: R[14] || (R[14] = (Ge) => xe.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        be.value && re.value ? (n(), U(tu, {
          key: 2,
          models: re.value.warnings.models_without_sources,
          onConfirm: Be,
          onCancel: R[15] || (R[15] = (Ge) => be.value = !1),
          onRevalidate: et
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), E6 = /* @__PURE__ */ ke(I6, [["__scopeId", "data-v-522cd4d9"]]), T6 = { class: "worker-header" }, P6 = { class: "worker-status" }, M6 = { class: "worker-name" }, R6 = { class: "worker-actions" }, D6 = { class: "worker-details" }, L6 = { class: "detail-item" }, U6 = { class: "detail-value" }, N6 = {
  key: 0,
  class: "detail-item"
}, O6 = { class: "detail-value" }, A6 = {
  key: 1,
  class: "detail-item"
}, z6 = { class: "detail-value mode-badge" }, V6 = {
  key: 0,
  class: "worker-stats"
}, F6 = {
  key: 0,
  class: "stat-item"
}, B6 = { key: 0 }, W6 = {
  key: 1,
  class: "worker-stats offline"
}, G6 = /* @__PURE__ */ we({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Re(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", T6, [
        t("div", P6, [
          t("span", {
            class: Re(["status-dot", e.worker.status])
          }, null, 2),
          t("span", M6, d(e.worker.name), 1)
        ]),
        t("div", R6, [
          e.worker.status === "online" ? (n(), U(ve, {
            key: 0,
            variant: "primary",
            size: "xs",
            disabled: e.isActionLoading,
            onClick: o[0] || (o[0] = (a) => s.$emit("deploy", e.worker))
          }, {
            default: p(() => [...o[2] || (o[2] = [
              C(" Deploy ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : y("", !0),
          k(ve, {
            variant: "ghost",
            size: "xs",
            loading: e.isActionLoading,
            onClick: o[1] || (o[1] = (a) => s.$emit("remove", e.worker.name))
          }, {
            default: p(() => [...o[3] || (o[3] = [
              C(" Remove ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ]),
      t("div", D6, [
        t("span", L6, [
          t("span", U6, d(e.worker.host) + ":" + d(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (n(), i("span", N6, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", O6, d(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (n(), i("span", A6, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", z6, d(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (n(), i("div", V6, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          C(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (n(), i("span", F6, [
          C(" • " + d(e.worker.instance_count) + " instance" + d(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (n(), i("span", B6, "(" + d(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (n(), i("div", W6, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          C(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), j6 = /* @__PURE__ */ ke(G6, [["__scopeId", "data-v-b1be7134"]]), H6 = { class: "add-worker-content" }, K6 = { class: "manual-form" }, q6 = { class: "form-row" }, Y6 = { class: "form-row-inline" }, J6 = { class: "form-field flex-2" }, Q6 = { class: "form-field flex-1" }, X6 = { class: "form-row" }, Z6 = { class: "api-key-wrapper" }, eE = ["type"], tE = { class: "result-icon" }, sE = { class: "result-content" }, oE = { class: "result-message" }, nE = {
  key: 0,
  class: "result-detail"
}, aE = { class: "modal-actions" }, lE = /* @__PURE__ */ we({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = ut(), l = Qs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), r = $(!1), u = $(!1), c = $(!1), m = $(null), f = z(() => l.host && l.port && l.apiKey), v = z(() => l.name && l.host && l.port && l.apiKey);
    async function g() {
      if (f.value) {
        u.value = !0, m.value = null;
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
          u.value = !1;
        }
      }
    }
    function _() {
      v.value && (c.value = !0, o("add", {
        name: l.name,
        host: l.host,
        port: l.port,
        api_key: l.apiKey
      }));
    }
    return (h, w) => (n(), U(Ct, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: w[5] || (w[5] = (x) => h.$emit("close"))
    }, {
      body: p(() => [
        t("div", H6, [
          t("div", K6, [
            t("div", q6, [
              w[6] || (w[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              at(t("input", {
                "onUpdate:modelValue": w[0] || (w[0] = (x) => l.name = x),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [Zt, l.name]
              ])
            ]),
            t("div", Y6, [
              t("div", J6, [
                w[7] || (w[7] = t("label", { class: "form-label" }, "Host", -1)),
                at(t("input", {
                  "onUpdate:modelValue": w[1] || (w[1] = (x) => l.host = x),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [Zt, l.host]
                ])
              ]),
              t("div", Q6, [
                w[8] || (w[8] = t("label", { class: "form-label" }, "Port", -1)),
                at(t("input", {
                  "onUpdate:modelValue": w[2] || (w[2] = (x) => l.port = x),
                  type: "number",
                  class: "form-input",
                  placeholder: "9090"
                }, null, 512), [
                  [
                    Zt,
                    l.port,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ]),
            t("div", X6, [
              w[9] || (w[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", Z6, [
                at(t("input", {
                  "onUpdate:modelValue": w[3] || (w[3] = (x) => l.apiKey = x),
                  type: r.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, eE), [
                  [pa, l.apiKey]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: w[4] || (w[4] = (x) => r.value = !r.value),
                  type: "button"
                }, d(r.value ? "👁" : "👁‍🗨"), 1)
              ]),
              w[10] || (w[10] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                C(" Run "),
                t("code", null, "cg-deploy worker setup"),
                C(" on the worker to get the key ")
              ], -1))
            ]),
            m.value ? (n(), i("div", {
              key: 0,
              class: Re(["test-result", m.value.type])
            }, [
              t("span", tE, d(m.value.type === "success" ? "✓" : "✕"), 1),
              t("div", sE, [
                t("span", oE, d(m.value.message), 1),
                m.value.gpu_info ? (n(), i("span", nE, "GPU: " + d(m.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: p(() => [
        t("div", aE, [
          k(ve, {
            variant: "ghost",
            size: "sm",
            loading: u.value,
            disabled: !f.value || u.value,
            onClick: g
          }, {
            default: p(() => [...w[11] || (w[11] = [
              C(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          k(ve, {
            variant: "primary",
            size: "sm",
            loading: c.value,
            disabled: !v.value || c.value,
            onClick: _
          }, {
            default: p(() => [...w[12] || (w[12] = [
              C(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }));
  }
}), iE = /* @__PURE__ */ ke(lE, [["__scopeId", "data-v-07a00732"]]), rE = { class: "discovered-content" }, uE = {
  key: 0,
  class: "workers-list"
}, cE = { class: "worker-info" }, dE = { class: "worker-name" }, mE = { class: "worker-address" }, fE = {
  key: 0,
  class: "worker-gpu"
}, vE = {
  key: 1,
  class: "empty-state"
}, pE = {
  key: 2,
  class: "api-key-section"
}, gE = { class: "selected-worker" }, hE = { class: "selected-name" }, yE = { class: "selected-address" }, wE = { class: "form-row" }, _E = { class: "api-key-wrapper" }, kE = ["type"], bE = { class: "result-icon" }, $E = { class: "result-message" }, CE = { class: "modal-actions" }, xE = /* @__PURE__ */ we({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = ut(), l = $(null), r = $(""), u = $(!1), c = $(!1), m = $(null), f = $(null);
    async function v(_) {
      var h;
      l.value = _, r.value = "", f.value = null, await Mt(), (h = m.value) == null || h.focus();
    }
    async function g() {
      if (!(!l.value || !r.value)) {
        c.value = !0, f.value = null;
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
          c.value = !1;
        }
      }
    }
    return (_, h) => (n(), U(Ct, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: h[3] || (h[3] = (w) => _.$emit("close"))
    }, {
      body: p(() => [
        t("div", rE, [
          e.workers.length > 0 ? (n(), i("div", uE, [
            (n(!0), i(H, null, pe(e.workers, (w) => (n(), i("div", {
              key: `${w.host}:${w.port}`,
              class: "worker-item"
            }, [
              t("div", cE, [
                t("span", dE, d(w.name), 1),
                t("span", mE, d(w.host) + ":" + d(w.port), 1),
                w.gpu_info ? (n(), i("span", fE, d(w.gpu_info), 1)) : y("", !0)
              ]),
              k(ve, {
                variant: "primary",
                size: "xs",
                onClick: (x) => v(w)
              }, {
                default: p(() => [...h[4] || (h[4] = [
                  C(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (n(), i("div", vE, [...h[5] || (h[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              C("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (n(), i("div", pE, [
            t("div", gE, [
              h[6] || (h[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", hE, d(l.value.name), 1),
              t("span", yE, "(" + d(l.value.host) + ":" + d(l.value.port) + ")", 1)
            ]),
            t("div", wE, [
              h[7] || (h[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", _E, [
                at(t("input", {
                  ref_key: "apiKeyInput",
                  ref: m,
                  "onUpdate:modelValue": h[0] || (h[0] = (w) => r.value = w),
                  type: u.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: as(g, ["enter"])
                }, null, 40, kE), [
                  [pa, r.value]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: h[1] || (h[1] = (w) => u.value = !u.value),
                  type: "button"
                }, d(u.value ? "👁" : "👁‍🗨"), 1)
              ]),
              h[8] || (h[8] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                C(" Run "),
                t("code", null, "cg-deploy worker setup"),
                C(" on the worker to get the key ")
              ], -1))
            ]),
            f.value ? (n(), i("div", {
              key: 0,
              class: Re(["test-result", f.value.type])
            }, [
              t("span", bE, d(f.value.type === "success" ? "✓" : "✕"), 1),
              t("span", $E, d(f.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: p(() => [
        t("div", CE, [
          l.value ? (n(), U(ve, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: h[2] || (h[2] = (w) => {
              l.value = null, r.value = "", f.value = null;
            })
          }, {
            default: p(() => [...h[9] || (h[9] = [
              C(" Back ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          l.value ? (n(), U(ve, {
            key: 1,
            variant: "primary",
            size: "sm",
            loading: c.value,
            disabled: !r.value || c.value,
            onClick: g
          }, {
            default: p(() => [...h[10] || (h[10] = [
              C(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), SE = /* @__PURE__ */ ke(xE, [["__scopeId", "data-v-5a3e40a4"]]), IE = { class: "deploy-content" }, EE = { class: "section" }, TE = {
  key: 0,
  class: "loading-text"
}, PE = {
  key: 1,
  class: "empty-remotes"
}, ME = {
  key: 2,
  class: "remotes-list"
}, RE = { class: "section" }, DE = { class: "mode-options" }, LE = { class: "mode-option" }, UE = ["disabled"], NE = { class: "mode-option" }, OE = { class: "section" }, AE = {
  key: 0,
  class: "section"
}, zE = { class: "summary-row" }, VE = {
  key: 1,
  class: "sync-warning"
}, FE = { class: "warning-content" }, BE = { class: "modal-actions" }, WE = /* @__PURE__ */ we({
  __name: "DeployToWorkerModal",
  props: {
    worker: {}
  },
  emits: ["close", "toast", "deployed"],
  setup(e, { emit: s }) {
    const o = e, a = s, {
      getRemotes: l,
      getRemoteSyncStatus: r,
      fetchRemote: u,
      pushToRemote: c,
      getDeploySummary: m,
      deployToWorker: f
    } = ut(), v = $([]), g = $({}), _ = $(!1), h = $(null), w = $(null), x = $(null), b = $(o.worker.mode || "native"), S = $(""), F = $(null), E = $(!1), P = z(() => h.value && g.value[h.value] || null), D = z(() => {
      if (!h.value) return null;
      const j = v.value.find((B) => B.name === h.value);
      return (j == null ? void 0 : j.fetch_url) || null;
    }), V = z(() => D.value && !E.value);
    async function G() {
      _.value = !0;
      try {
        const j = await l();
        v.value = j.remotes, await Promise.all(
          j.remotes.map(async (q) => {
            const X = await r(q.name);
            X && (g.value[q.name] = X);
          })
        );
        const B = j.remotes.find((q) => q.is_default);
        B ? h.value = B.name : j.remotes.length > 0 && (h.value = j.remotes[0].name);
      } catch {
        a("toast", "Failed to load remotes", "error");
      } finally {
        _.value = !1;
      }
    }
    async function I() {
      try {
        F.value = await m();
      } catch {
      }
    }
    async function O(j) {
      w.value = j;
      try {
        await u(j);
        const B = await r(j);
        B && (g.value[j] = B), a("toast", `Fetched from ${j}`, "success");
      } catch {
        a("toast", "Fetch failed", "error");
      } finally {
        w.value = null;
      }
    }
    async function le(j) {
      x.value = j;
      try {
        await c(j, { force: !1 });
        const B = await r(j);
        B && (g.value[j] = B), a("toast", `Pushed to ${j}`, "success");
      } catch {
        a("toast", "Push failed", "error");
      } finally {
        x.value = null;
      }
    }
    function ne(j) {
      h.value = j;
    }
    async function K() {
      if (D.value) {
        E.value = !0;
        try {
          const j = await f(o.worker.name, {
            import_source: D.value,
            mode: b.value,
            name: S.value || void 0
          });
          j.id ? (a("toast", `Deployment started: ${j.name || j.id}`, "success"), a("deployed")) : j.status === "error" ? a("toast", j.message || "Deployment failed", "error") : a("toast", "Unexpected response from worker", "error");
        } catch (j) {
          a("toast", j instanceof Error ? j.message : "Deployment failed", "error");
        } finally {
          E.value = !1;
        }
      }
    }
    return lt(() => {
      G(), I();
    }), (j, B) => (n(), U(Ct, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: B[5] || (B[5] = (q) => j.$emit("close"))
    }, {
      body: p(() => [
        t("div", IE, [
          t("div", EE, [
            B[7] || (B[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            _.value ? (n(), i("div", TE, "Loading remotes...")) : v.value.length === 0 ? (n(), i("div", PE, [...B[6] || (B[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (n(), i("div", ME, [
              (n(!0), i(H, null, pe(v.value, (q) => (n(), U(nu, {
                key: q.name,
                remote: q,
                "sync-status": g.value[q.name],
                "is-selected": h.value === q.name,
                "is-fetching": w.value === q.name,
                "is-pushing": x.value === q.name,
                onFetch: O,
                onPush: le,
                onSelect: ne
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", RE, [
            B[10] || (B[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", DE, [
              t("label", LE, [
                at(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": B[0] || (B[0] = (q) => b.value = q),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, UE), [
                  [ds, b.value]
                ]),
                B[8] || (B[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", NE, [
                at(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": B[1] || (B[1] = (q) => b.value = q),
                  value: "native"
                }, null, 512), [
                  [ds, b.value]
                ]),
                B[9] || (B[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", OE, [
            B[11] || (B[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            at(t("input", {
              "onUpdate:modelValue": B[2] || (B[2] = (q) => S.value = q),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [Zt, S.value]
            ])
          ]),
          F.value ? (n(), i("div", AE, [
            B[12] || (B[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", zE, " ComfyUI: " + d(F.value.comfyui_version) + " • " + d(F.value.node_count) + " nodes • " + d(F.value.model_count) + " models • " + d(F.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          P.value && P.value.ahead > 0 ? (n(), i("div", VE, [
            B[14] || (B[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", FE, [
              t("strong", null, d(P.value.ahead) + " unpushed commit" + d(P.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + d(h.value) + "' before deploying to include your latest changes.", 1)
            ]),
            k(ve, {
              variant: "primary",
              size: "xs",
              loading: x.value === h.value,
              onClick: B[3] || (B[3] = (q) => h.value && le(h.value))
            }, {
              default: p(() => [...B[13] || (B[13] = [
                C(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: p(() => [
        t("div", BE, [
          k(ve, {
            variant: "ghost",
            size: "sm",
            onClick: B[4] || (B[4] = (q) => j.$emit("close"))
          }, {
            default: p(() => [...B[15] || (B[15] = [
              C(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(ve, {
            variant: "primary",
            size: "sm",
            loading: E.value,
            disabled: !V.value || E.value,
            onClick: K
          }, {
            default: p(() => [...B[16] || (B[16] = [
              C(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), GE = /* @__PURE__ */ ke(WE, [["__scopeId", "data-v-c12720d3"]]), jE = { class: "custom-tab" }, HE = { class: "section-header" }, KE = { class: "section-actions" }, qE = { class: "workers-content" }, YE = {
  key: 0,
  class: "loading-state"
}, JE = {
  key: 1,
  class: "empty-state"
}, QE = {
  key: 2,
  class: "workers-list"
}, XE = { class: "scan-icon" }, ZE = { class: "scan-message" }, eT = /* @__PURE__ */ we({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: a,
      addCustomWorker: l,
      removeCustomWorker: r,
      scanForWorkers: u
    } = ut(), c = $([]), m = $([]), f = $(!1), v = $(!1), g = $(null), _ = $(!1), h = $(!1), w = $(null), x = $(null);
    async function b() {
      f.value = !0;
      try {
        const G = await a();
        c.value = G.workers;
      } catch (G) {
        o("toast", G instanceof Error ? G.message : "Failed to load workers", "error");
      } finally {
        f.value = !1;
      }
    }
    async function S() {
      v.value = !0, x.value = null;
      try {
        const G = await u(), I = G.discovered.filter(
          (O) => !c.value.some((le) => le.host === O.host && le.port === O.port)
        );
        m.value = I, I.length > 0 ? h.value = !0 : G.discovered.length > 0 ? x.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : x.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (G) {
        o("toast", G instanceof Error ? G.message : "Network scan failed", "error");
      } finally {
        v.value = !1;
      }
    }
    async function F(G) {
      try {
        await l(G), o("toast", `Worker '${G.name}' added`, "success"), _.value = !1, await b();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function E(G) {
      try {
        await l(G), o("toast", `Worker '${G.name}' added`, "success"), h.value = !1, await b();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to add worker", "error");
      }
    }
    async function P(G) {
      g.value = G;
      try {
        await r(G), o("toast", `Worker '${G}' removed`, "success"), await b();
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to remove worker", "error");
      } finally {
        g.value = null;
      }
    }
    function D(G) {
      w.value = G;
    }
    function V() {
      w.value = null, o("deployed");
    }
    return lt(() => {
      b();
    }), (G, I) => (n(), i("div", jE, [
      t("div", HE, [
        I[8] || (I[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", KE, [
          k(ve, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: S
          }, {
            default: p(() => [...I[6] || (I[6] = [
              C(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          k(ve, {
            variant: "secondary",
            size: "xs",
            onClick: I[0] || (I[0] = (O) => _.value = !0)
          }, {
            default: p(() => [...I[7] || (I[7] = [
              C(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", qE, [
        f.value && c.value.length === 0 ? (n(), i("div", YE, [...I[9] || (I[9] = [
          t("span", { class: "spinner" }, null, -1),
          C(" Loading workers... ", -1)
        ])])) : c.value.length === 0 ? (n(), i("div", JE, [...I[10] || (I[10] = [
          t("div", { class: "empty-card" }, [
            t("span", { class: "empty-text" }, "No workers registered yet"),
            t("p", { class: "empty-help" }, " To add a custom worker: "),
            t("ol", { class: "setup-steps" }, [
              t("li", null, [
                C("On your GPU machine, run:"),
                t("br"),
                t("code", null, "cg-deploy worker setup"),
                t("br"),
                t("code", null, "cg-deploy worker up --broadcast")
              ]),
              t("li", null, 'Click "Scan Network" above or "Add" to enter manually')
            ])
          ], -1)
        ])])) : (n(), i("div", QE, [
          (n(!0), i(H, null, pe(c.value, (O) => (n(), U(j6, {
            key: O.name,
            worker: O,
            "is-action-loading": g.value === O.name,
            onDeploy: D,
            onRemove: P
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      x.value ? (n(), i("div", {
        key: 0,
        class: Re(["scan-result", x.value.type])
      }, [
        t("span", XE, d(x.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", ZE, d(x.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: I[1] || (I[1] = (O) => x.value = null)
        }, "×")
      ], 2)) : y("", !0),
      h.value ? (n(), U(SE, {
        key: 1,
        workers: m.value,
        onClose: I[2] || (I[2] = (O) => h.value = !1),
        onAdd: E
      }, null, 8, ["workers"])) : y("", !0),
      _.value ? (n(), U(iE, {
        key: 2,
        onClose: I[3] || (I[3] = (O) => _.value = !1),
        onAdd: F
      })) : y("", !0),
      w.value ? (n(), U(GE, {
        key: 3,
        worker: w.value,
        onClose: I[4] || (I[4] = (O) => w.value = null),
        onToast: I[5] || (I[5] = (O, le) => o("toast", O, le)),
        onDeployed: V
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), tT = /* @__PURE__ */ ke(eT, [["__scopeId", "data-v-1637dead"]]), Na = "ComfyGit.Deploy.GitHubPAT";
function au(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function sT(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function oT() {
  function e() {
    try {
      return localStorage.getItem(Na);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(Na, l);
    } catch (r) {
      console.error("[useGitAuth] Failed to save token:", r);
    }
  }
  function o() {
    try {
      localStorage.removeItem(Na);
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
    isRemoteSsh: au,
    isRemoteHttps: sT
  };
}
const nT = { class: "settings-content" }, aT = { class: "settings-section" }, lT = {
  key: 0,
  class: "ssh-warning"
}, iT = { class: "form-row" }, rT = { class: "token-wrapper" }, uT = ["type"], cT = { class: "result-icon" }, dT = { class: "result-message" }, mT = { class: "token-actions" }, fT = /* @__PURE__ */ we({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: a, setToken: l, clearToken: r, hasToken: u } = oT(), { getRemotes: c, testGitAuth: m } = ut(), f = $(""), v = $(!1), g = $(!1), _ = $(null), h = $(!1), w = z(() => u());
    lt(async () => {
      var E;
      const F = a();
      F && (f.value = F);
      try {
        const D = (E = (await c()).remotes) == null ? void 0 : E.find((V) => V.name === "origin");
        D && au(D.url) && (h.value = !0);
      } catch {
      }
    });
    async function x() {
      if (f.value) {
        g.value = !0, _.value = null;
        try {
          const F = await m(f.value);
          _.value = {
            type: F.status === "success" ? "success" : "error",
            message: F.message
          };
        } catch (F) {
          _.value = {
            type: "error",
            message: F instanceof Error ? F.message : "Connection test failed"
          };
        } finally {
          g.value = !1;
        }
      }
    }
    function b() {
      f.value && (l(f.value), o("saved"), o("close"));
    }
    function S() {
      r(), f.value = "", _.value = null;
    }
    return (F, E) => (n(), U(Ct, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: E[2] || (E[2] = (P) => F.$emit("close"))
    }, {
      body: p(() => [
        t("div", nT, [
          t("div", aT, [
            E[8] || (E[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            E[9] || (E[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            h.value ? (n(), i("div", lT, [...E[3] || (E[3] = [
              t("span", { class: "warning-icon" }, "!", -1),
              t("div", { class: "warning-content" }, [
                t("strong", null, "SSH remote detected"),
                t("p", null, [
                  C("PAT authentication only works with HTTPS remotes. Consider converting your remote URL from "),
                  t("code", null, "git@github.com:..."),
                  C(" to "),
                  t("code", null, "https://github.com/...")
                ])
              ], -1)
            ])])) : y("", !0),
            t("div", iT, [
              E[4] || (E[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", rT, [
                at(t("input", {
                  "onUpdate:modelValue": E[0] || (E[0] = (P) => f.value = P),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, uT), [
                  [pa, f.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: E[1] || (E[1] = (P) => v.value = !v.value)
                }, d(v.value ? "Hide" : "Show"), 1)
              ]),
              E[5] || (E[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            _.value ? (n(), i("div", {
              key: 1,
              class: Re(["test-result", _.value.type])
            }, [
              t("span", cT, d(_.value.type === "success" ? "✓" : "✕"), 1),
              t("span", dT, d(_.value.message), 1)
            ], 2)) : y("", !0),
            t("div", mT, [
              k(ve, {
                variant: "ghost",
                size: "sm",
                loading: g.value,
                disabled: !f.value || g.value,
                onClick: x
              }, {
                default: p(() => [...E[6] || (E[6] = [
                  C(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              w.value ? (n(), U(ve, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: S
              }, {
                default: p(() => [...E[7] || (E[7] = [
                  C(" Clear ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ])
      ]),
      footer: p(() => [
        k(ve, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: b
        }, {
          default: p(() => [...E[10] || (E[10] = [
            C(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), vT = /* @__PURE__ */ ke(fT, [["__scopeId", "data-v-b21588ad"]]), pT = /* @__PURE__ */ we({
  __name: "DeploySection",
  emits: ["toast", "navigate"],
  setup(e, { emit: s }) {
    const o = s, {
      instances: a,
      isLoading: l,
      liveInstanceCount: r,
      refreshInstances: u,
      stopInstance: c,
      startInstance: m,
      terminateInstance: f,
      startPolling: v,
      stopPolling: g
    } = ou(), _ = $(!1), h = $(!1), w = $("instances"), x = $(null), b = $(null), S = z(() => [
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
    async function F(G) {
      x.value = G.id;
      try {
        await c(G), o("toast", "Instance stopped", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to stop instance", "error");
      } finally {
        x.value = null;
      }
    }
    async function E(G) {
      x.value = G.id;
      try {
        await m(G), o("toast", "Instance starting...", "success");
      } catch (I) {
        o("toast", I instanceof Error ? I.message : "Failed to start instance", "error");
      } finally {
        x.value = null;
      }
    }
    function P(G) {
      b.value = G;
    }
    async function D() {
      const G = b.value;
      if (G) {
        b.value = null, x.value = G.id;
        try {
          await f(G), o("toast", "Instance terminated", "success");
        } catch (I) {
          o("toast", I instanceof Error ? I.message : "Failed to terminate instance", "error");
        } finally {
          x.value = null;
        }
      }
    }
    async function V() {
      await u(), w.value = "instances";
    }
    return lt(() => {
      u(), v();
    }), Xs(() => {
      g();
    }), (G, I) => (n(), i(H, null, [
      k(Ht, null, {
        header: p(() => [
          k(Kt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: I[1] || (I[1] = (O) => _.value = !0)
          }, {
            actions: p(() => [
              k(ve, {
                variant: "ghost",
                size: "xs",
                onClick: I[0] || (I[0] = (O) => h.value = !0)
              }, {
                default: p(() => [...I[10] || (I[10] = [
                  C(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: p(() => [
          k(Yr, {
            modelValue: w.value,
            "onUpdate:modelValue": I[2] || (I[2] = (O) => w.value = O),
            tabs: S.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: p(() => [
          w.value === "instances" ? (n(), U(M4, {
            key: 0,
            instances: Xe(a),
            "is-loading": Xe(l),
            "action-loading-id": x.value,
            onRefresh: Xe(u),
            onStop: F,
            onStart: E,
            onTerminate: P
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          w.value === "runpod" ? (n(), U(E6, {
            key: 1,
            onToast: I[3] || (I[3] = (O, le) => o("toast", O, le)),
            onNavigate: I[4] || (I[4] = (O) => o("navigate", O)),
            onDeployed: V
          })) : y("", !0),
          w.value === "custom" ? (n(), U(tT, {
            key: 2,
            onToast: I[5] || (I[5] = (O, le) => o("toast", O, le)),
            onDeployed: V
          })) : y("", !0)
        ]),
        _: 1
      }),
      b.value ? (n(), U(_l, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${b.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: D,
        onCancel: I[6] || (I[6] = (O) => b.value = null)
      }, null, 8, ["message"])) : y("", !0),
      k(hs, {
        show: _.value,
        title: "Deploy to Cloud",
        onClose: I[7] || (I[7] = (O) => _.value = !1)
      }, {
        content: p(() => [...I[11] || (I[11] = [
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
                  C(" - All committed workflows")
                ]),
                t("li", null, [
                  t("strong", null, "Custom Nodes"),
                  C(" - Installed automatically")
                ]),
                t("li", null, [
                  t("strong", null, "Models"),
                  C(" - Downloaded from sources (when available)")
                ]),
                t("li", null, [
                  t("strong", null, "Configuration"),
                  C(" - Environment settings")
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
      h.value ? (n(), U(vT, {
        key: 1,
        onClose: I[8] || (I[8] = (O) => h.value = !1),
        onSaved: I[9] || (I[9] = (O) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), gT = /* @__PURE__ */ ke(pT, [["__scopeId", "data-v-d4e32a10"]]), hT = { class: "header-info" }, yT = { class: "commit-hash" }, wT = {
  key: 0,
  class: "commit-refs"
}, _T = { class: "commit-message" }, kT = { class: "commit-date" }, bT = {
  key: 0,
  class: "loading"
}, $T = {
  key: 1,
  class: "changes-section"
}, CT = { class: "stats-row" }, xT = { class: "stat" }, ST = { class: "stat insertions" }, IT = { class: "stat deletions" }, ET = {
  key: 0,
  class: "change-group"
}, TT = {
  key: 1,
  class: "change-group"
}, PT = {
  key: 0,
  class: "version"
}, MT = {
  key: 2,
  class: "change-group"
}, RT = { class: "change-item" }, DT = /* @__PURE__ */ we({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = ut(), a = $(null), l = $(!0), r = z(() => {
      if (!a.value) return !1;
      const c = a.value.changes.workflows;
      return c.added.length > 0 || c.modified.length > 0 || c.deleted.length > 0;
    }), u = z(() => {
      if (!a.value) return !1;
      const c = a.value.changes.nodes;
      return c.added.length > 0 || c.removed.length > 0;
    });
    return lt(async () => {
      try {
        a.value = await o(s.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (c, m) => (n(), U(Ct, {
      size: "md",
      "show-close-button": !1,
      onClose: m[3] || (m[3] = (f) => c.$emit("close"))
    }, {
      header: p(() => {
        var f, v, g, _;
        return [
          t("div", hT, [
            m[4] || (m[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", yT, d(((f = a.value) == null ? void 0 : f.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (_ = (g = a.value) == null ? void 0 : g.refs) != null && _.length ? (n(), i("span", wT, [
              (n(!0), i(H, null, pe(a.value.refs, (h) => (n(), i("span", {
                key: h,
                class: "ref-badge"
              }, d(h), 1))), 128))
            ])) : y("", !0)
          ]),
          k(Ee, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (h) => c.$emit("close"))
          }, {
            default: p(() => [...m[5] || (m[5] = [
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
      body: p(() => {
        var f, v;
        return [
          t("div", _T, d(((f = a.value) == null ? void 0 : f.message) || e.commit.message), 1),
          t("div", kT, d(((v = a.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (n(), i("div", bT, "Loading details...")) : a.value ? (n(), i("div", $T, [
            t("div", CT, [
              t("span", xT, d(a.value.stats.files_changed) + " files", 1),
              t("span", ST, "+" + d(a.value.stats.insertions), 1),
              t("span", IT, "-" + d(a.value.stats.deletions), 1)
            ]),
            r.value ? (n(), i("div", ET, [
              k(Ls, { variant: "section" }, {
                default: p(() => [...m[6] || (m[6] = [
                  C("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(H, null, pe(a.value.changes.workflows.added, (g) => (n(), i("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                m[7] || (m[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, d(g), 1)
              ]))), 128)),
              (n(!0), i(H, null, pe(a.value.changes.workflows.modified, (g) => (n(), i("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                m[8] || (m[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, d(g), 1)
              ]))), 128)),
              (n(!0), i(H, null, pe(a.value.changes.workflows.deleted, (g) => (n(), i("div", {
                key: "del-" + g,
                class: "change-item deleted"
              }, [
                m[9] || (m[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, d(g), 1)
              ]))), 128))
            ])) : y("", !0),
            u.value ? (n(), i("div", TT, [
              k(Ls, { variant: "section" }, {
                default: p(() => [...m[10] || (m[10] = [
                  C("NODES", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(H, null, pe(a.value.changes.nodes.added, (g) => (n(), i("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                m[11] || (m[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, d(g.name), 1),
                g.version ? (n(), i("span", PT, "(" + d(g.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (n(!0), i(H, null, pe(a.value.changes.nodes.removed, (g) => (n(), i("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                m[12] || (m[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, d(g.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", MT, [
              k(Ls, { variant: "section" }, {
                default: p(() => [...m[13] || (m[13] = [
                  C("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", RT, [
                m[14] || (m[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, d(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: p(() => [
        k(Ee, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (f) => c.$emit("createBranch", e.commit))
        }, {
          default: p(() => [...m[15] || (m[15] = [
            C(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        k(Ee, {
          variant: "primary",
          onClick: m[2] || (m[2] = (f) => c.$emit("checkout", e.commit))
        }, {
          default: p(() => [...m[16] || (m[16] = [
            C(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), LT = /* @__PURE__ */ ke(DT, [["__scopeId", "data-v-d256ff6d"]]), UT = { class: "popover-header" }, NT = { class: "popover-body" }, OT = {
  key: 0,
  class: "changes-summary"
}, AT = {
  key: 0,
  class: "change-item"
}, zT = {
  key: 1,
  class: "change-item"
}, VT = {
  key: 2,
  class: "change-item"
}, FT = {
  key: 3,
  class: "change-item"
}, BT = {
  key: 4,
  class: "change-item"
}, WT = {
  key: 5,
  class: "change-item"
}, GT = {
  key: 1,
  class: "no-changes"
}, jT = {
  key: 2,
  class: "loading"
}, HT = {
  key: 3,
  class: "issues-error"
}, KT = { class: "error-header" }, qT = { class: "error-title" }, YT = { class: "issues-list" }, JT = { class: "workflow-state" }, QT = { class: "message-section" }, XT = { class: "popover-footer" }, ZT = {
  key: 1,
  class: "commit-popover"
}, e7 = { class: "popover-header" }, t7 = { class: "popover-body" }, s7 = {
  key: 0,
  class: "changes-summary"
}, o7 = {
  key: 0,
  class: "change-item"
}, n7 = {
  key: 1,
  class: "change-item"
}, a7 = {
  key: 2,
  class: "change-item"
}, l7 = {
  key: 3,
  class: "change-item"
}, i7 = {
  key: 4,
  class: "change-item"
}, r7 = {
  key: 5,
  class: "change-item"
}, u7 = {
  key: 1,
  class: "no-changes"
}, c7 = {
  key: 2,
  class: "loading"
}, d7 = {
  key: 3,
  class: "issues-error"
}, m7 = { class: "error-header" }, f7 = { class: "error-title" }, v7 = { class: "issues-list" }, p7 = { class: "workflow-state" }, g7 = { class: "message-section" }, h7 = { class: "popover-footer" }, y7 = /* @__PURE__ */ we({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = ut(), r = $(""), u = $(!1), c = $(!1), m = z(() => {
      if (!o.status) return !1;
      const w = o.status.workflows;
      return w.new.length > 0 || w.modified.length > 0 || w.deleted.length > 0 || o.status.has_changes;
    }), f = z(() => {
      if (!o.status) return !1;
      const w = o.status.workflows, x = o.status.git_changes;
      return w.new.length > 0 || w.modified.length > 0 || w.deleted.length > 0 || x.nodes_added.length > 0 || x.nodes_removed.length > 0;
    }), v = z(() => {
      var w;
      return (w = o.status) != null && w.workflows.analyzed ? o.status.workflows.analyzed.filter((x) => x.has_issues) : [];
    }), g = z(() => v.value.length > 0), _ = z(() => g.value && !c.value);
    async function h() {
      var w, x, b, S;
      if (!(g.value && !c.value) && !(!m.value || !r.value.trim() || u.value)) {
        u.value = !0;
        try {
          const F = await l(r.value.trim(), c.value);
          if (F.status === "success") {
            const E = `Committed: ${((w = F.summary) == null ? void 0 : w.new) || 0} new, ${((x = F.summary) == null ? void 0 : x.modified) || 0} modified, ${((b = F.summary) == null ? void 0 : b.deleted) || 0} deleted`;
            a("committed", { success: !0, message: E });
          } else if (F.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (F.status === "blocked") {
            const E = ((S = F.issues) == null ? void 0 : S.map((P) => `${P.name}: ${P.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${E}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: F.message || "Commit failed" });
        } catch (F) {
          a("committed", { success: !1, message: F instanceof Error ? F.message : "Commit failed" });
        } finally {
          u.value = !1;
        }
      }
    }
    return (w, x) => e.asModal ? (n(), U(Nt, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = (b) => a("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = gt(() => {
          }, ["stop"]))
        }, [
          t("div", UT, [
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
          t("div", NT, [
            e.status && m.value ? (n(), i("div", OT, [
              e.status.workflows.new.length ? (n(), i("div", AT, [
                x[12] || (x[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, d(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (n(), i("div", zT, [
                x[13] || (x[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, d(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (n(), i("div", VT, [
                x[14] || (x[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, d(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (n(), i("div", FT, [
                x[15] || (x[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, d(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (n(), i("div", BT, [
                x[16] || (x[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, d(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              f.value ? y("", !0) : (n(), i("div", WT, [...x[17] || (x[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (n(), i("div", GT, " No changes to commit ")) : (n(), i("div", jT, " Loading... ")),
            g.value ? (n(), i("div", HT, [
              t("div", KT, [
                x[18] || (x[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", qT, d(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", YT, [
                (n(!0), i(H, null, pe(v.value, (b) => (n(), i("div", {
                  key: b.name,
                  class: "issue-item"
                }, [
                  t("strong", null, d(b.name), 1),
                  t("span", JT, "(" + d(b.sync_state) + ")", 1),
                  C(": " + d(b.issue_summary), 1)
                ]))), 128))
              ]),
              k(ta, {
                modelValue: c.value,
                "onUpdate:modelValue": x[1] || (x[1] = (b) => c.value = b),
                class: "allow-issues-toggle"
              }, {
                default: p(() => [...x[19] || (x[19] = [
                  C(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            t("div", QT, [
              k(yn, {
                modelValue: r.value,
                "onUpdate:modelValue": x[2] || (x[2] = (b) => r.value = b),
                placeholder: _.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
                disabled: !m.value || u.value || _.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: h,
                onSubmit: h
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          t("div", XT, [
            k(Ee, {
              variant: "secondary",
              onClick: x[3] || (x[3] = (b) => a("close"))
            }, {
              default: p(() => [...x[20] || (x[20] = [
                C(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(Ee, {
              variant: c.value ? "danger" : "primary",
              disabled: !m.value || !r.value.trim() || u.value || _.value,
              loading: u.value,
              onClick: h
            }, {
              default: p(() => [
                C(d(u.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (n(), i("div", ZT, [
      t("div", e7, [
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
      t("div", t7, [
        e.status && m.value ? (n(), i("div", s7, [
          e.status.workflows.new.length ? (n(), i("div", o7, [
            x[23] || (x[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, d(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (n(), i("div", n7, [
            x[24] || (x[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, d(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", a7, [
            x[25] || (x[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, d(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", l7, [
            x[26] || (x[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, d(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", i7, [
            x[27] || (x[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, d(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          f.value ? y("", !0) : (n(), i("div", r7, [...x[28] || (x[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", u7, " No changes to commit ")) : (n(), i("div", c7, " Loading... ")),
        g.value ? (n(), i("div", d7, [
          t("div", m7, [
            x[29] || (x[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", f7, d(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", v7, [
            (n(!0), i(H, null, pe(v.value, (b) => (n(), i("div", {
              key: b.name,
              class: "issue-item"
            }, [
              t("strong", null, d(b.name), 1),
              t("span", p7, "(" + d(b.sync_state) + ")", 1),
              C(": " + d(b.issue_summary), 1)
            ]))), 128))
          ]),
          k(ta, {
            modelValue: c.value,
            "onUpdate:modelValue": x[7] || (x[7] = (b) => c.value = b),
            class: "allow-issues-toggle"
          }, {
            default: p(() => [...x[30] || (x[30] = [
              C(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        t("div", g7, [
          k(yn, {
            modelValue: r.value,
            "onUpdate:modelValue": x[8] || (x[8] = (b) => r.value = b),
            placeholder: _.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || u.value || _.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: h,
            onSubmit: h
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", h7, [
        k(Ee, {
          variant: "secondary",
          onClick: x[9] || (x[9] = (b) => a("close"))
        }, {
          default: p(() => [...x[31] || (x[31] = [
            C(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k(Ee, {
          variant: c.value ? "danger" : "primary",
          disabled: !m.value || !r.value.trim() || u.value || _.value,
          loading: u.value,
          onClick: h
        }, {
          default: p(() => [
            C(d(u.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), lu = /* @__PURE__ */ ke(y7, [["__scopeId", "data-v-5f897631"]]), w7 = { class: "modal-header" }, _7 = { class: "modal-body" }, k7 = { class: "switch-message" }, b7 = { class: "switch-details" }, $7 = { class: "modal-actions" }, C7 = /* @__PURE__ */ we({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), U(Nt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = gt(() => {
          }, ["stop"]))
        }, [
          t("div", w7, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", _7, [
            t("p", k7, [
              o[6] || (o[6] = C(" Switch from ", -1)),
              t("strong", null, d(e.fromEnvironment), 1),
              o[7] || (o[7] = C(" to ", -1)),
              t("strong", null, d(e.toEnvironment), 1),
              o[8] || (o[8] = C("? ", -1))
            ]),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This will restart ComfyUI")
            ], -1)),
            t("p", b7, ' Your current work will be preserved. You can switch back to "' + d(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", $7, [
            k(ve, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: p(() => [...o[11] || (o[11] = [
                C(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ve, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
            }, {
              default: p(() => [...o[12] || (o[12] = [
                C(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), x7 = /* @__PURE__ */ ke(C7, [["__scopeId", "data-v-e9c5253e"]]), S7 = {
  key: 0,
  class: "modal-overlay"
}, I7 = { class: "modal-content" }, E7 = { class: "modal-body" }, T7 = { class: "progress-info" }, P7 = { class: "progress-percentage" }, M7 = { class: "progress-state" }, R7 = { class: "switch-steps" }, D7 = { class: "step-icon" }, L7 = { class: "step-label" }, U7 = /* @__PURE__ */ we({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const s = e, o = z(() => {
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
    }), a = z(() => s.state === "complete" ? "success" : s.state === "critical_failure" || s.state === "rolled_back" ? "error" : "default"), l = z(() => {
      const r = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], u = r.findIndex((c) => c.state === s.state);
      return r.map((c, m) => {
        let f = "pending", v = "○";
        return m < u ? (f = "completed", v = "✓") : m === u && (f = "active", v = "⟳"), {
          ...c,
          status: f,
          icon: v
        };
      });
    });
    return (r, u) => (n(), U(Nt, { to: "body" }, [
      e.show ? (n(), i("div", S7, [
        t("div", I7, [
          u[1] || (u[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", E7, [
            k(ga, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            t("div", T7, [
              t("div", P7, d(e.progress) + "%", 1),
              t("div", M7, d(o.value), 1)
            ]),
            t("div", R7, [
              (n(!0), i(H, null, pe(l.value, (c) => (n(), i("div", {
                key: c.state,
                class: Re(["switch-step", c.status])
              }, [
                t("span", D7, d(c.icon), 1),
                t("span", L7, d(c.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), N7 = /* @__PURE__ */ ke(U7, [["__scopeId", "data-v-768a5078"]]), O7 = { class: "modal-header" }, A7 = { class: "modal-body" }, z7 = {
  key: 0,
  class: "node-section"
}, V7 = { class: "node-list" }, F7 = {
  key: 1,
  class: "node-section"
}, B7 = { class: "node-list" }, W7 = { class: "modal-actions" }, G7 = /* @__PURE__ */ we({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), U(Nt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = gt(() => {
          }, ["stop"]))
        }, [
          t("div", O7, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", A7, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", z7, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", V7, [
                (n(!0), i(H, null, pe(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + d(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", F7, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", B7, [
                (n(!0), i(H, null, pe(e.mismatchDetails.extra_nodes, (a) => (n(), i("div", {
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
          t("div", W7, [
            k(ve, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: p(() => [...o[10] || (o[10] = [
                C(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(ve, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
            }, {
              default: p(() => [...o[11] || (o[11] = [
                C(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), j7 = /* @__PURE__ */ ke(G7, [["__scopeId", "data-v-7cad7518"]]), H7 = [
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
], Un = "v0.0.24", K7 = "Akatz", q7 = { class: "social-buttons" }, Y7 = ["title", "aria-label", "onClick"], J7 = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Q7 = ["d"], X7 = ["title", "aria-label", "onClick"], Z7 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, eP = ["d"], tP = /* @__PURE__ */ we({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", q7, [
      (n(!0), i(H, null, pe(Xe(H7), (l) => (n(), i(H, {
        key: l.id
      }, [
        l.label ? (n(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          C(d(l.label) + " ", 1),
          (n(), i("svg", J7, [
            t("path", {
              d: l.iconPath
            }, null, 8, Q7)
          ]))
        ], 8, Y7)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          (n(), i("svg", Z7, [
            t("path", {
              d: l.iconPath
            }, null, 8, eP)
          ]))
        ], 8, X7))
      ], 64))), 128))
    ]));
  }
}), iu = /* @__PURE__ */ ke(tP, [["__scopeId", "data-v-4f846342"]]), sP = { class: "footer-info" }, oP = ["title"], nP = {
  key: 0,
  class: "dev-badge"
}, aP = { class: "made-by" }, lP = /* @__PURE__ */ we({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: s } = ut(), o = $(null), a = $(null), l = $(null), r = z(() => o.value === "development"), u = z(() => {
      var m;
      if (!r.value) return Un;
      const c = [a.value, (m = l.value) == null ? void 0 : m.slice(0, 7)].filter(Boolean).join(" @ ");
      return c ? `${Un} (${c})` : `${Un} (development)`;
    });
    return lt(async () => {
      try {
        const c = await s();
        o.value = c.manager_source ?? null, a.value = c.manager_branch ?? null, l.value = c.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (c, m) => (n(), i("div", sP, [
      t("span", {
        class: "version",
        title: u.value
      }, [
        C(d(Xe(Un)) + " ", 1),
        r.value ? (n(), i("span", nP, "dev")) : y("", !0)
      ], 8, oP),
      t("span", aP, [
        m[0] || (m[0] = C(" made with ", -1)),
        m[1] || (m[1] = t("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          t("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        C(" by " + d(Xe(K7)), 1)
      ])
    ]));
  }
}), ru = /* @__PURE__ */ ke(lP, [["__scopeId", "data-v-4fa265b3"]]), iP = /* @__PURE__ */ we({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = $(null);
    async function a() {
      var r;
      await ((r = o.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, u) => (n(), U(Ct, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (c) => r.$emit("close"))
    }, {
      body: p(() => [
        k(qr, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: p(() => {
        var c;
        return [
          k(Ee, {
            variant: "primary",
            disabled: !((c = o.value) != null && c.hasChanges),
            onClick: a
          }, {
            default: p(() => [...u[2] || (u[2] = [
              C(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(Ee, {
            variant: "secondary",
            onClick: u[0] || (u[0] = (m) => r.$emit("close"))
          }, {
            default: p(() => [...u[3] || (u[3] = [
              C(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), rP = /* @__PURE__ */ ke(iP, [["__scopeId", "data-v-fac00ae7"]]), uP = { class: "header-actions" }, cP = {
  key: 0,
  class: "wizard-step"
}, dP = { class: "form-field" }, mP = ["placeholder"], fP = {
  key: 0,
  class: "form-error"
}, vP = { class: "form-field form-field--checkbox" }, pP = { class: "form-checkbox" }, gP = {
  key: 0,
  class: "form-field"
}, hP = ["placeholder"], yP = {
  key: 0,
  class: "form-info"
}, wP = {
  key: 1,
  class: "form-suggestion"
}, _P = {
  key: 2,
  class: "form-error"
}, kP = {
  key: 3,
  class: "form-info"
}, bP = {
  key: 1,
  class: "wizard-step"
}, $P = {
  key: 0,
  class: "progress-check-loading"
}, CP = {
  key: 0,
  class: "cli-warning"
}, xP = { class: "cli-warning-header" }, SP = {
  key: 1,
  class: "env-landing"
}, IP = { class: "env-list" }, EP = ["value"], TP = { class: "env-name" }, PP = {
  key: 2,
  class: "env-create"
}, MP = { class: "form-field" }, RP = { class: "form-field" }, DP = ["value"], LP = { class: "form-field" }, UP = ["disabled"], NP = ["value"], OP = { class: "form-field" }, AP = ["value"], zP = { class: "form-field form-field--checkbox" }, VP = { class: "form-checkbox" }, FP = {
  key: 0,
  class: "form-error"
}, BP = {
  key: 1,
  class: "env-creating"
}, WP = { class: "creating-intro" }, GP = {
  key: 3,
  class: "env-import"
}, jP = { class: "wizard-footer" }, HP = { class: "wizard-footer-actions" }, Co = 10, KP = 600 * 1e3, gi = 1800 * 1e3, qP = /* @__PURE__ */ we({
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
      validatePath: u,
      createEnvironment: c,
      getCreateProgress: m,
      getImportProgress: f,
      getComfyUIReleases: v
    } = ut(), g = $(o.initialStep || 1), _ = $(null), h = $("landing"), w = $(!1), x = $(!1), b = $(!1), S = $(!1), F = $(null), E = $(o.initialStep === 2), P = $(o.defaultPath), D = $(!!o.detectedModelsDir), V = $(o.detectedModelsDir || ""), G = $(null), I = $(null), O = $(null), le = $(null), ne = $("my-new-env"), K = $(Xr), j = $("latest"), B = $(Zr), q = $(!0), X = $(null), Le = $(null), ae = $([{ tag_name: "latest", name: "Latest", published_at: "" }]), de = $(!1), ie = $(!1), Ae = $(!1), _e = $({ progress: 0, message: "" }), Z = $({ progress: 0, message: "" }), A = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], M = $(0), se = $(null), L = $(0), N = $(null), oe = z(() => {
      var Ie, Ce;
      const ge = (Ie = P.value) == null ? void 0 : Ie.trim(), Y = !G.value, Ve = !D.value || !I.value && ((Ce = V.value) == null ? void 0 : Ce.trim());
      return ge && Y && Ve;
    }), Ne = z(() => {
      var ge;
      return (ge = ne.value) == null ? void 0 : ge.trim();
    }), ze = z(() => !!(g.value === 2 || Le.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), W = z(() => Le.value || o.workspacePath || null);
    async function J() {
      var ge;
      if (G.value = null, !!((ge = P.value) != null && ge.trim()))
        try {
          const Y = await u({ path: P.value, type: "workspace" });
          Y.valid || (G.value = Y.error || "Invalid path");
        } catch (Y) {
          G.value = Y instanceof Error ? Y.message : "Validation failed";
        }
    }
    async function re() {
      var ge;
      if (I.value = null, O.value = null, le.value = null, !!((ge = V.value) != null && ge.trim()))
        try {
          const Y = await u({ path: V.value, type: "models" });
          if (Y.valid)
            le.value = Y.model_count ?? null;
          else if (I.value = Y.error || "Invalid path", Y.suggestion) {
            O.value = Y.suggestion, V.value = Y.suggestion, I.value = null;
            const Ve = await u({ path: Y.suggestion, type: "models" });
            Ve.valid && (le.value = Ve.model_count ?? null);
          }
        } catch (Y) {
          I.value = Y instanceof Error ? Y.message : "Validation failed";
        }
    }
    async function xe() {
      var ge, Y, Ve, Ie, Ce;
      if (G.value = null, I.value = null, await J(), (ge = G.value) != null && ge.includes("already exists")) {
        G.value = null, Le.value = ((Y = P.value) == null ? void 0 : Y.trim()) || o.defaultPath, g.value = 2, $e();
        return;
      }
      if (!G.value && !(D.value && ((Ve = V.value) != null && Ve.trim()) && (await re(), I.value))) {
        ie.value = !0;
        try {
          await l({
            workspace_path: ((Ie = P.value) == null ? void 0 : Ie.trim()) || o.defaultPath,
            models_directory: D.value && ((Ce = V.value) == null ? void 0 : Ce.trim()) || null
          }), M.value = 0, se.value = Date.now();
          const Oe = setInterval(async () => {
            var Me;
            if (se.value && Date.now() - se.value > KP) {
              clearInterval(Oe), ie.value = !1, G.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Q = await r();
              if (M.value = 0, Q.state === "idle" && ie.value) {
                clearInterval(Oe), ie.value = !1, G.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              _e.value = { progress: Q.progress, message: Q.message }, Q.state === "complete" ? (clearInterval(Oe), ie.value = !1, Le.value = ((Me = P.value) == null ? void 0 : Me.trim()) || o.defaultPath, g.value = 2, $e()) : Q.state === "error" && (clearInterval(Oe), ie.value = !1, G.value = Q.error || "Workspace creation failed");
            } catch (Q) {
              M.value++, console.warn(`Polling failure ${M.value}/${Co}:`, Q), M.value >= Co && (clearInterval(Oe), ie.value = !1, G.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Oe) {
          ie.value = !1, G.value = Oe instanceof Error ? Oe.message : "Failed to create workspace";
        }
      }
    }
    async function be() {
      Ae.value = !0, X.value = null;
      try {
        const ge = {
          name: ne.value.trim() || "my-new-env",
          python_version: K.value,
          comfyui_version: j.value,
          torch_backend: B.value,
          switch_after: q.value,
          workspace_path: Le.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await c(ge)).status === "started") {
          L.value = 0, N.value = Date.now();
          const Ve = setInterval(async () => {
            if (N.value && Date.now() - N.value > gi) {
              clearInterval(Ve), Ae.value = !1, X.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Ie = await m();
              if (L.value = 0, Ie.state === "idle" && Ae.value) {
                clearInterval(Ve), Ae.value = !1, X.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (Z.value = {
                progress: Ie.progress ?? 0,
                message: Ie.message,
                phase: Ie.phase
              }, Ie.state === "complete") {
                clearInterval(Ve), Ae.value = !1;
                const Ce = Ie.environment_name || ge.name;
                q.value ? a("complete", Ce, Le.value) : (h.value = "landing", a("environment-created-no-switch", Ce));
              } else Ie.state === "error" && (clearInterval(Ve), Ae.value = !1, X.value = Ie.error || "Environment creation failed");
            } catch (Ie) {
              L.value++, console.warn(`Polling failure ${L.value}/${Co}:`, Ie), L.value >= Co && (clearInterval(Ve), Ae.value = !1, X.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ge) {
        Ae.value = !1, X.value = ge instanceof Error ? ge.message : "Unknown error";
      }
    }
    async function $e() {
      de.value = !0;
      try {
        ae.value = await v();
      } catch (ge) {
        console.error("Failed to load ComfyUI releases:", ge);
      } finally {
        de.value = !1;
      }
    }
    function De() {
      _.value && a("switch-environment", _.value, Le.value);
    }
    function ye() {
      h.value === "create" || h.value === "import" ? h.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function Te(ge, Y) {
      x.value = !1, Y ? a("complete", ge, Le.value) : (a("environment-created-no-switch", ge), h.value = "landing");
    }
    function fe() {
    }
    lt(async () => {
      if (o.detectedModelsDir && (V.value = o.detectedModelsDir), o.workspacePath && (Le.value = o.workspacePath), g.value === 2) {
        $e();
        const ge = setTimeout(() => {
          E.value = !1;
        }, 3e3);
        await We(), clearTimeout(ge), E.value = !1;
      }
    });
    async function We() {
      try {
        const ge = await m();
        if (console.log("[ComfyGit] Create progress check:", ge.state, ge), ge.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ge.environment_name), h.value = "create", Ae.value = !0, ne.value = ge.environment_name || "my-new-env", Z.value = {
            progress: ge.progress ?? 0,
            message: ge.message,
            phase: ge.phase
          }, Ue();
          return;
        }
      } catch (ge) {
        console.log("[ComfyGit] Create progress check failed:", ge);
      }
      try {
        const ge = await f();
        console.log("[ComfyGit] Import progress check:", ge.state, ge), ge.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ge.environment_name), F.value = {
          message: ge.message || "Importing...",
          phase: ge.phase || "",
          progress: ge.progress ?? 0,
          environmentName: ge.environment_name || ""
        }, S.value = !0, h.value = "import", x.value = !0);
      } catch (ge) {
        console.log("[ComfyGit] Import progress check failed:", ge);
      }
    }
    async function Ue() {
      L.value = 0, N.value = Date.now();
      let ge = null;
      const Y = async () => {
        if (N.value && Date.now() - N.value > gi)
          return ge && clearInterval(ge), Ae.value = !1, X.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Ie = await m();
          if (L.value = 0, Ie.state === "idle" && Ae.value)
            return ge && clearInterval(ge), Ae.value = !1, X.value = "Environment creation was interrupted. Please try again.", !1;
          if (Z.value = {
            progress: Ie.progress ?? 0,
            message: Ie.message,
            phase: Ie.phase
          }, Ie.state === "complete") {
            ge && clearInterval(ge), Ae.value = !1;
            const Ce = Ie.environment_name || ne.value;
            return a("complete", Ce, Le.value), !1;
          } else if (Ie.state === "error")
            return ge && clearInterval(ge), Ae.value = !1, X.value = Ie.error || "Environment creation failed", !1;
          return !0;
        } catch (Ie) {
          return L.value++, console.warn(`Polling failure ${L.value}/${Co}:`, Ie), L.value >= Co ? (ge && clearInterval(ge), Ae.value = !1, X.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await Y() && (ge = setInterval(async () => {
        !await Y() && ge && clearInterval(ge);
      }, 2e3));
    }
    return (ge, Y) => (n(), i(H, null, [
      k(Ct, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: Y[15] || (Y[15] = (Ve) => ge.$emit("close"))
      }, {
        header: p(() => [
          Y[20] || (Y[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", uP, [
            k(iu),
            Y[19] || (Y[19] = t("span", { class: "header-divider" }, null, -1)),
            ze.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: Y[0] || (Y[0] = (Ve) => w.value = !0)
            }, [...Y[17] || (Y[17] = [
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
              onClick: Y[1] || (Y[1] = (Ve) => ge.$emit("close")),
              title: "Close"
            }, [...Y[18] || (Y[18] = [
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
        body: p(() => {
          var Ve;
          return [
            g.value === 1 ? (n(), i("div", cP, [
              Y[24] || (Y[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", dP, [
                Y[21] || (Y[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                at(t("input", {
                  "onUpdate:modelValue": Y[2] || (Y[2] = (Ie) => P.value = Ie),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, mP), [
                  [Zt, P.value]
                ]),
                G.value ? (n(), i("p", fP, d(G.value), 1)) : y("", !0)
              ]),
              t("div", vP, [
                t("label", pP, [
                  at(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": Y[3] || (Y[3] = (Ie) => D.value = Ie)
                  }, null, 512), [
                    [hn, D.value]
                  ]),
                  Y[22] || (Y[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              D.value ? (n(), i("div", gP, [
                Y[23] || (Y[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                at(t("input", {
                  "onUpdate:modelValue": Y[4] || (Y[4] = (Ie) => V.value = Ie),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, hP), [
                  [Zt, V.value]
                ]),
                e.detectedModelsDir && !V.value ? (n(), i("p", yP, " Detected: " + d(e.detectedModelsDir), 1)) : y("", !0),
                O.value ? (n(), i("p", wP, " Did you mean: " + d(O.value), 1)) : y("", !0),
                I.value ? (n(), i("p", _P, d(I.value), 1)) : y("", !0),
                le.value !== null && !I.value ? (n(), i("p", kP, " Found " + d(le.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              ie.value ? (n(), U(ea, {
                key: 1,
                progress: _e.value.progress,
                message: _e.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (n(), i("div", bP, [
              E.value ? (n(), i("div", $P, [...Y[25] || (Y[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(H, { key: 1 }, [
                !o.cliInstalled && !b.value ? (n(), i("div", CP, [
                  t("div", xP, [
                    Y[27] || (Y[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    Y[28] || (Y[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: Y[5] || (Y[5] = (Ie) => b.value = !0),
                      title: "Dismiss"
                    }, [...Y[26] || (Y[26] = [
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
                  Y[29] || (Y[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  Y[30] || (Y[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                h.value === "landing" ? (n(), i("div", SP, [
                  Y[34] || (Y[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: Y[6] || (Y[6] = (Ie) => h.value = "create")
                  }, [...Y[31] || (Y[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: Y[7] || (Y[7] = (Ie) => {
                      S.value = !1, h.value = "import";
                    })
                  }, [...Y[32] || (Y[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Ve = o.existingEnvironments) != null && Ve.length ? (n(), i(H, { key: 0 }, [
                    Y[33] || (Y[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", IP, [
                      (n(!0), i(H, null, pe(o.existingEnvironments, (Ie) => (n(), i("label", {
                        key: Ie,
                        class: Re(["env-option", { selected: _.value === Ie }])
                      }, [
                        at(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: Ie,
                          "onUpdate:modelValue": Y[8] || (Y[8] = (Ce) => _.value = Ce)
                        }, null, 8, EP), [
                          [ds, _.value]
                        ]),
                        t("span", TP, d(Ie), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : h.value === "create" ? (n(), i("div", PP, [
                  Ae.value ? (n(), i("div", BP, [
                    t("p", WP, [
                      Y[41] || (Y[41] = C(" Creating environment ", -1)),
                      t("strong", null, d(ne.value), 1),
                      Y[42] || (Y[42] = C("... ", -1))
                    ]),
                    k(ea, {
                      progress: Z.value.progress,
                      message: Z.value.message,
                      "current-phase": Z.value.phase,
                      "show-steps": !0,
                      steps: A
                    }, null, 8, ["progress", "message", "current-phase"]),
                    Y[43] || (Y[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(H, { key: 0 }, [
                    Y[40] || (Y[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", MP, [
                      Y[35] || (Y[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      at(t("input", {
                        "onUpdate:modelValue": Y[9] || (Y[9] = (Ie) => ne.value = Ie),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Zt, ne.value]
                      ])
                    ]),
                    t("div", RP, [
                      Y[36] || (Y[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      at(t("select", {
                        "onUpdate:modelValue": Y[10] || (Y[10] = (Ie) => K.value = Ie),
                        class: "form-select"
                      }, [
                        (n(!0), i(H, null, pe(Xe(Qr), (Ie) => (n(), i("option", {
                          key: Ie,
                          value: Ie
                        }, d(Ie), 9, DP))), 128))
                      ], 512), [
                        [Ss, K.value]
                      ])
                    ]),
                    t("div", LP, [
                      Y[37] || (Y[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      at(t("select", {
                        "onUpdate:modelValue": Y[11] || (Y[11] = (Ie) => j.value = Ie),
                        class: "form-select",
                        disabled: de.value
                      }, [
                        (n(!0), i(H, null, pe(ae.value, (Ie) => (n(), i("option", {
                          key: Ie.tag_name,
                          value: Ie.tag_name
                        }, d(Ie.name), 9, NP))), 128))
                      ], 8, UP), [
                        [Ss, j.value]
                      ])
                    ]),
                    t("div", OP, [
                      Y[38] || (Y[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      at(t("select", {
                        "onUpdate:modelValue": Y[12] || (Y[12] = (Ie) => B.value = Ie),
                        class: "form-select"
                      }, [
                        (n(!0), i(H, null, pe(Xe(kl), (Ie) => (n(), i("option", {
                          key: Ie,
                          value: Ie
                        }, d(Ie) + d(Ie === "auto" ? " (detect GPU)" : ""), 9, AP))), 128))
                      ], 512), [
                        [Ss, B.value]
                      ])
                    ]),
                    t("div", zP, [
                      t("label", VP, [
                        at(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": Y[13] || (Y[13] = (Ie) => q.value = Ie)
                        }, null, 512), [
                          [hn, q.value]
                        ]),
                        Y[39] || (Y[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    X.value ? (n(), i("div", FP, d(X.value), 1)) : y("", !0)
                  ], 64))
                ])) : h.value === "import" ? (n(), i("div", GP, [
                  k(su, {
                    "workspace-path": Le.value,
                    "resume-import": S.value,
                    "initial-progress": F.value ?? void 0,
                    onImportComplete: Te,
                    onImportStarted: Y[14] || (Y[14] = (Ie) => x.value = !0),
                    onSourceCleared: fe
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: p(() => [
          t("div", jP, [
            k(ru),
            t("div", HP, [
              g.value === 1 ? (n(), U(Ee, {
                key: 0,
                variant: "primary",
                disabled: !oe.value || ie.value,
                onClick: xe
              }, {
                default: p(() => [
                  C(d(ie.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (n(), i(H, { key: 1 }, [
                !Ae.value && !x.value && (h.value !== "landing" || o.setupState === "no_workspace" && !Le.value) ? (n(), U(Ee, {
                  key: 0,
                  variant: "secondary",
                  onClick: ye
                }, {
                  default: p(() => [...Y[44] || (Y[44] = [
                    C(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                h.value === "create" ? (n(), U(Ee, {
                  key: 1,
                  variant: "primary",
                  disabled: !Ne.value || Ae.value,
                  onClick: be
                }, {
                  default: p(() => [
                    C(d(Ae.value ? "Creating..." : q.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                h.value === "landing" && _.value ? (n(), U(Ee, {
                  key: 2,
                  variant: "primary",
                  onClick: De
                }, {
                  default: p(() => [
                    C(" Switch to " + d(_.value), 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ], 64)) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      w.value ? (n(), U(rP, {
        key: 0,
        "workspace-path": W.value,
        onClose: Y[16] || (Y[16] = (Ve) => w.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), YP = /* @__PURE__ */ ke(qP, [["__scopeId", "data-v-9a9aadc0"]]), JP = { class: "update-banner" }, QP = { class: "update-banner__left" }, XP = { class: "update-banner__title" }, ZP = {
  key: 0,
  class: "update-banner__summary"
}, eM = { class: "update-banner__actions" }, tM = ["disabled"], sM = ["disabled"], oM = ["disabled"], nM = /* @__PURE__ */ we({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", JP, [
      t("div", QP, [
        t("div", XP, " ComfyGit Manager v" + d(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (n(), i("div", ZP, d(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      t("div", eM, [
        t("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, d(e.updating ? "Updating…" : "Update"), 9, tM),
        e.info.release_url ? (n(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, sM)) : y("", !0),
        t("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, oM)
      ])
    ]));
  }
}), aM = /* @__PURE__ */ ke(nM, [["__scopeId", "data-v-49562c5c"]]), uu = "ComfyGit.UpdateNotice.DismissedVersion";
function lM() {
  try {
    return localStorage.getItem(uu);
  } catch {
    return null;
  }
}
function iM(e) {
  try {
    localStorage.setItem(uu, e);
  } catch {
  }
}
function rM(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : lM() !== e.latest_version;
}
const uM = { class: "comfygit-panel" }, cM = { class: "panel-header" }, dM = { class: "header-left" }, mM = {
  key: 0,
  class: "header-info"
}, fM = { class: "header-actions" }, vM = { class: "env-switcher" }, pM = {
  key: 0,
  class: "header-info"
}, gM = { class: "branch-name" }, hM = { class: "panel-main" }, yM = { class: "sidebar" }, wM = { class: "sidebar-content" }, _M = { class: "sidebar-section" }, kM = { class: "sidebar-section" }, bM = { class: "sidebar-section" }, $M = {
  key: 0,
  class: "sidebar-badge"
}, CM = { class: "sidebar-footer" }, xM = { class: "content-area" }, SM = {
  key: 0,
  class: "error-message"
}, IM = {
  key: 1,
  class: "loading"
}, EM = { class: "dialog-content env-selector-dialog" }, TM = { class: "dialog-header" }, PM = { class: "dialog-body" }, MM = { class: "env-list" }, RM = { class: "env-info" }, DM = { class: "env-name-row" }, LM = { class: "env-indicator" }, UM = { class: "env-name" }, NM = {
  key: 0,
  class: "env-branch"
}, OM = {
  key: 1,
  class: "current-label"
}, AM = { class: "env-stats" }, zM = ["onClick"], VM = { class: "toast-container" }, FM = { class: "toast-message" }, hi = "ComfyGit.LastView", yi = "ComfyGit.LastSection", BM = /* @__PURE__ */ we({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: s }) {
    const o = e, a = s, {
      getStatus: l,
      getHistory: r,
      getBranches: u,
      checkout: c,
      createBranch: m,
      switchBranch: f,
      deleteBranch: v,
      getEnvironments: g,
      switchEnvironment: _,
      getSwitchProgress: h,
      deleteEnvironment: w,
      syncEnvironmentManually: x,
      repairWorkflowModels: b,
      getSetupStatus: S,
      getUpdateCheck: F,
      updateManager: E
    } = ut(), P = gp(), { liveInstanceCount: D } = ou({ autoStart: !0 }), V = $(null), G = $([]), I = $([]), O = $([]), le = z(() => O.value.find((ce) => ce.is_current)), ne = $(null), K = $(!1), j = $(1), B = z(() => {
      var ce;
      return ((ce = ne.value) == null ? void 0 : ce.state) || "managed";
    }), q = $(!1), X = $(null), Le = $(null), ae = $(!1), de = $(null), ie = $(!1), Ae = $(!1), _e = z(() => !ie.value && rM(de.value)), Z = $(null), A = $(null), M = $(null), se = $(!1), L = $(!1), N = $(""), oe = $(null), Ne = $({ state: "idle", progress: 0, message: "" });
    let ze = null, W = null;
    const J = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, re = o.initialView ? J[o.initialView] : null, xe = [
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
        const ce = sessionStorage.getItem(hi), te = sessionStorage.getItem(yi);
        if (ce && te && xe.includes(ce) && be.includes(te))
          return { view: ce, section: te };
      } catch {
      }
      return null;
    }
    const De = $e(), ye = $((re == null ? void 0 : re.view) ?? (De == null ? void 0 : De.view) ?? "status"), Te = $((re == null ? void 0 : re.section) ?? (De == null ? void 0 : De.section) ?? "this-env");
    function fe(ce, te) {
      ye.value = ce, Te.value = te;
      try {
        sessionStorage.setItem(hi, ce), sessionStorage.setItem(yi, te);
      } catch {
      }
    }
    function We(ce) {
      const He = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[ce];
      He && fe(He.view, He.section);
    }
    function Ue() {
      fe("branches", "this-env");
    }
    function ge() {
      a("close"), setTimeout(() => {
        var te;
        const ce = document.querySelectorAll("button.comfyui-button");
        for (const He of ce)
          if (((te = He.textContent) == null ? void 0 : te.trim()) === "Manager") {
            He.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const Y = $(null), Ve = $(!1), Ie = $(!1), Ce = $([]);
    let Oe = 0;
    function Me(ce, te = "info", He = 3e3) {
      const Qe = ++Oe;
      return Ce.value.push({ id: Qe, message: ce, type: te }), He > 0 && setTimeout(() => {
        Ce.value = Ce.value.filter((yt) => yt.id !== Qe);
      }, He), Qe;
    }
    function Q(ce) {
      Ce.value = Ce.value.filter((te) => te.id !== ce);
    }
    function me(ce, te) {
      Me(ce, te);
    }
    async function he() {
      de.value = null, ie.value = !1;
      try {
        de.value = await F();
      } catch {
      }
    }
    function Ke() {
      var te;
      const ce = (te = de.value) == null ? void 0 : te.release_url;
      if (ce)
        try {
          window.open(ce, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function Fe() {
      var te;
      const ce = (te = de.value) == null ? void 0 : te.latest_version;
      ce && iM(ce), ie.value = !0;
    }
    async function Be() {
      var te, He;
      if (Ae.value) return;
      Ae.value = !0;
      const ce = Me("Updating comfygit-manager...", "info", 0);
      try {
        const Qe = await E();
        if (Q(ce), Qe.status !== "success") {
          if (Me(Qe.message || "Update failed", "error"), Qe.manual_instructions) {
            const yt = Qe.manual_instructions.split(`
`).map((Tt) => Tt.trim()).filter(Boolean);
            Y.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: yt,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                Y.value = null;
              }
            };
          }
          return;
        }
        if (Me(Qe.message || "Update complete", "success"), Fe(), Qe.restart_required) {
          ue();
          try {
            await ((He = (te = window.app) == null ? void 0 : te.api) == null ? void 0 : He.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Qe) {
        Q(ce);
        const yt = Qe instanceof Error ? Qe.message : "Update failed";
        Me(yt, "error");
      } finally {
        Ae.value = !1;
      }
    }
    const et = z(() => {
      if (!V.value) return "neutral";
      const ce = V.value.workflows, te = ce.new.length > 0 || ce.modified.length > 0 || ce.deleted.length > 0 || V.value.has_changes;
      return V.value.comparison.is_synced ? te ? "warning" : "success" : "error";
    });
    z(() => V.value ? et.value === "success" ? "All synced" : et.value === "warning" ? "Uncommitted changes" : et.value === "error" ? "Not synced" : "" : "");
    async function qe() {
      q.value = !0, X.value = null;
      try {
        const [ce, te, He, Qe] = await Promise.all([
          l(!0),
          r(),
          u(),
          g()
        ]);
        V.value = ce, G.value = te.commits, I.value = He.branches, O.value = Qe, a("statusUpdate", ce), Z.value && await Z.value.loadWorkflows(!0);
      } catch (ce) {
        X.value = ce instanceof Error ? ce.message : "Failed to load status", V.value = null, G.value = [], I.value = [];
      } finally {
        q.value = !1;
      }
    }
    function vt(ce) {
      Le.value = ce;
    }
    async function dt(ce) {
      var He;
      Le.value = null;
      const te = V.value && (V.value.workflows.new.length > 0 || V.value.workflows.modified.length > 0 || V.value.workflows.deleted.length > 0 || V.value.has_changes);
      Y.value = {
        title: te ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: te ? "You have uncommitted changes that will be lost." : `Checkout commit ${ce.short_hash || ((He = ce.hash) == null ? void 0 : He.slice(0, 7))}?`,
        details: te ? xn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: te ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: te,
        onConfirm: async () => {
          var Tt;
          Y.value = null, ue();
          const Qe = Me(`Checking out ${ce.short_hash || ((Tt = ce.hash) == null ? void 0 : Tt.slice(0, 7))}...`, "info", 0), yt = await c(ce.hash, te);
          Q(Qe), yt.status === "success" ? Me("Restarting ComfyUI...", "success") : Me(yt.message || "Checkout failed", "error");
        }
      };
    }
    async function ft(ce) {
      const te = V.value && (V.value.workflows.new.length > 0 || V.value.workflows.modified.length > 0 || V.value.workflows.deleted.length > 0 || V.value.has_changes);
      Y.value = {
        title: te ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: te ? "You have uncommitted changes." : `Switch to branch "${ce}"?`,
        details: te ? xn() : void 0,
        warning: te ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: te ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Y.value = null, ue();
          const He = Me(`Switching to ${ce}...`, "info", 0), Qe = await f(ce, te);
          Q(He), Qe.status === "success" ? Me("Restarting ComfyUI...", "success") : Me(Qe.message || "Branch switch failed", "error");
        }
      };
    }
    async function Pt(ce) {
      const te = Me(`Creating branch ${ce}...`, "info", 0), He = await m(ce);
      Q(te), He.status === "success" ? (Me(`Branch "${ce}" created`, "success"), await qe()) : Me(He.message || "Failed to create branch", "error");
    }
    async function ts(ce, te = !1) {
      const He = async (Qe) => {
        var Tt;
        const yt = Me(`Deleting branch ${ce}...`, "info", 0);
        try {
          const rs = await v(ce, Qe);
          Q(yt), rs.status === "success" ? (Me(`Branch "${ce}" deleted`, "success"), await qe()) : (Tt = rs.message) != null && Tt.includes("not fully merged") ? Y.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ce}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Y.value = null, await He(!0);
            }
          } : Me(rs.message || "Failed to delete branch", "error");
        } catch (rs) {
          Q(yt);
          const eo = rs instanceof Error ? rs.message : "Failed to delete branch";
          eo.includes("not fully merged") ? Y.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ce}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              Y.value = null, await He(!0);
            }
          } : Me(eo, "error");
        }
      };
      Y.value = {
        title: "Delete Branch",
        message: `Delete branch "${ce}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          Y.value = null, await He(te);
        }
      };
    }
    async function Ot(ce) {
      Le.value = null;
      const te = prompt("Enter branch name:");
      if (te) {
        const He = Me(`Creating branch ${te}...`, "info", 0), Qe = await m(te, ce.hash);
        Q(He), Qe.status === "success" ? (Me(`Branch "${te}" created from ${ce.short_hash}`, "success"), await qe()) : Me(Qe.message || "Failed to create branch", "error");
      }
    }
    function ue() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function T() {
      Y.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ce;
          Y.value = null, ue(), Me("Restarting environment...", "info");
          try {
            (ce = window.app) != null && ce.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function R() {
      Y.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ce;
          Y.value = null, Me("Stopping environment...", "info");
          try {
            (ce = window.app) != null && ce.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Pe(ce, te) {
      ae.value = !1, N.value = ce, oe.value = te || null, se.value = !0;
    }
    async function tt() {
      se.value = !1, L.value = !0, ue(), Ne.value = {
        progress: 10,
        state: pt(10),
        message: st(10)
      };
      try {
        await _(N.value, oe.value || void 0), xt(), Ge();
      } catch (ce) {
        Et(), L.value = !1, Me(`Failed to initiate switch: ${ce instanceof Error ? ce.message : "Unknown error"}`, "error"), Ne.value = { state: "idle", progress: 0, message: "" }, oe.value = null;
      }
    }
    function pt(ce) {
      return ce >= 100 ? "complete" : ce >= 80 ? "validating" : ce >= 60 ? "starting" : ce >= 30 ? "syncing" : "preparing";
    }
    function st(ce) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[pt(ce)] || "";
    }
    function xt() {
      if (W) return;
      let ce = 10;
      const te = 60, He = 5e3, Qe = 100, yt = (te - ce) / (He / Qe);
      W = window.setInterval(() => {
        if (ce += yt, ce >= te && (ce = te, Et()), Ne.value.progress < te) {
          const Tt = Math.floor(ce);
          Ne.value = {
            progress: Tt,
            state: pt(Tt),
            message: st(Tt)
          };
        }
      }, Qe);
    }
    function Et() {
      W && (clearInterval(W), W = null);
    }
    function Ge() {
      ze || (ze = window.setInterval(async () => {
        try {
          let ce = await P.getStatus();
          if ((!ce || ce.state === "idle") && (ce = await h()), !ce)
            return;
          const te = ce.progress || 0;
          te >= 60 && Et();
          const He = Math.max(te, Ne.value.progress), Qe = ce.state && ce.state !== "idle" && ce.state !== "unknown", yt = Qe ? ce.state : pt(He), Tt = Qe && ce.message || st(He);
          Ne.value = {
            state: yt,
            progress: He,
            message: Tt
          }, ce.state === "complete" ? (Et(), is(), L.value = !1, Me(`✓ Switched to ${N.value}`, "success"), await qe(), N.value = "") : ce.state === "rolled_back" ? (Et(), is(), L.value = !1, Me("Switch failed, restored previous environment", "warning"), N.value = "") : ce.state === "critical_failure" && (Et(), is(), L.value = !1, Me(`Critical error during switch: ${ce.message}`, "error"), N.value = "");
        } catch (ce) {
          console.error("Failed to poll switch progress:", ce);
        }
      }, 1e3));
    }
    function is() {
      Et(), ze && (clearInterval(ze), ze = null);
    }
    function ys() {
      var ce;
      se.value = !1, N.value = "", (ce = ne.value) != null && ce.state && ne.value.state !== "managed" && (j.value = ne.value.state === "no_workspace" ? 1 : 2, K.value = !0);
    }
    async function vo(ce) {
      Ve.value = !1, await qe(), Me(ce.message, ce.success ? "success" : "error");
    }
    async function po() {
      Ie.value = !1;
      const ce = Me("Syncing environment...", "info", 0);
      try {
        const te = await x("skip", !0);
        if (Q(ce), te.status === "success") {
          const He = [];
          te.nodes_installed.length && He.push(`${te.nodes_installed.length} installed`), te.nodes_removed.length && He.push(`${te.nodes_removed.length} removed`);
          const Qe = He.length ? `: ${He.join(", ")}` : "";
          Me(`✓ Environment synced${Qe}`, "success"), await qe();
        } else {
          const He = te.errors.length ? te.errors.join("; ") : te.message;
          Me(`Sync failed: ${He}`, "error");
        }
      } catch (te) {
        Q(ce), Me(`Sync error: ${te instanceof Error ? te.message : "Unknown error"}`, "error");
      }
    }
    async function go(ce) {
      var te;
      try {
        const He = await b(ce);
        He.failed.length === 0 ? Me(`✓ Repaired ${He.success} workflow${He.success === 1 ? "" : "s"}`, "success") : Me(`Repaired ${He.success}, failed: ${He.failed.length}`, "warning"), await qe();
      } catch (He) {
        Me(`Repair failed: ${He instanceof Error ? He.message : "Unknown error"}`, "error");
      } finally {
        (te = M.value) == null || te.resetRepairingState();
      }
    }
    async function Zs() {
      var te, He;
      const ce = Me("Repairing environment...", "info", 0);
      try {
        const Qe = await x("skip", !0);
        if (Q(ce), Qe.status === "success") {
          const yt = [];
          Qe.nodes_installed.length && yt.push(`${Qe.nodes_installed.length} installed`), Qe.nodes_removed.length && yt.push(`${Qe.nodes_removed.length} removed`);
          const Tt = yt.length ? `: ${yt.join(", ")}` : "";
          Me(`✓ Environment repaired${Tt}`, "success"), (te = M.value) == null || te.closeDetailModal(), await qe();
        } else {
          const yt = Qe.errors.length ? Qe.errors.join(", ") : Qe.message || "Unknown error";
          Me(`Repair failed: ${yt}`, "error");
        }
      } catch (Qe) {
        Q(ce), Me(`Repair error: ${Qe instanceof Error ? Qe.message : "Unknown error"}`, "error");
      } finally {
        (He = M.value) == null || He.resetRepairingEnvironmentState();
      }
    }
    async function ho(ce, te) {
      Me(`Environment '${ce}' created`, "success"), await qe(), A.value && await A.value.loadEnvironments(), te && await Pe(ce);
    }
    async function yo(ce) {
      var te;
      if (((te = le.value) == null ? void 0 : te.name) === ce) {
        Me("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      Y.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ce}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          Y.value = null;
          try {
            const He = await w(ce);
            He.status === "success" ? (Me(`Environment "${ce}" deleted`, "success"), await qe(), A.value && await A.value.loadEnvironments()) : Me(He.message || "Failed to delete environment", "error");
          } catch (He) {
            Me(`Error deleting environment: ${He instanceof Error ? He.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function wo(ce, te) {
      K.value = !1;
      try {
        ne.value = await S();
      } catch {
      }
      await Pe(ce, te);
    }
    function _o() {
      K.value = !1, a("close");
    }
    async function ko(ce, te) {
      await Pe(ce, te);
    }
    async function ha(ce) {
      await qe(), await Pe(ce);
    }
    async function ya(ce) {
      ne.value = await S(), console.log(`Environment '${ce}' created. Available for switching.`);
    }
    function wa() {
      fe("environments", "all-envs"), setTimeout(() => {
        var ce;
        (ce = A.value) == null || ce.openCreateModal();
      }, 100);
    }
    function xn() {
      if (!V.value) return [];
      const ce = [], te = V.value.workflows;
      return te.new.length && ce.push(`${te.new.length} new workflow(s)`), te.modified.length && ce.push(`${te.modified.length} modified workflow(s)`), te.deleted.length && ce.push(`${te.deleted.length} deleted workflow(s)`), ce;
    }
    return lt(async () => {
      try {
        if (ne.value = await S(), ne.value.state === "no_workspace") {
          K.value = !0, j.value = 1;
          return;
        }
        if (ne.value.state === "empty_workspace") {
          K.value = !0, j.value = 2;
          return;
        }
        if (ne.value.state === "unmanaged") {
          K.value = !0, j.value = 2;
          return;
        }
      } catch (ce) {
        console.warn("Setup status check failed, proceeding normally:", ce);
      }
      await Promise.all([
        qe(),
        he()
      ]);
    }), (ce, te) => {
      var He, Qe, yt, Tt, rs, eo, ee, Se, je, kt, Dt, us, Fs;
      return n(), i("div", uM, [
        t("div", cM, [
          t("div", dM, [
            te[31] || (te[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            V.value ? (n(), i("div", mM)) : y("", !0)
          ]),
          t("div", fM, [
            k(iu),
            te[34] || (te[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Re(["icon-btn", { spinning: q.value }]),
              onClick: qe,
              title: "Refresh"
            }, [...te[32] || (te[32] = [
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
              onClick: te[0] || (te[0] = (Je) => a("close")),
              title: "Close"
            }, [...te[33] || (te[33] = [
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
        _e.value && de.value ? (n(), U(aM, {
          key: 0,
          info: de.value,
          updating: Ae.value,
          onUpdate: Be,
          onDismiss: Fe,
          onReleaseNotes: Ke
        }, null, 8, ["info", "updating"])) : y("", !0),
        t("div", vM, [
          t("div", { class: "env-switcher-header" }, [
            te[35] || (te[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", { class: "env-control-buttons" }, [
              t("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: T
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
            onClick: te[1] || (te[1] = (Je) => fe("environments", "all-envs"))
          }, [
            V.value ? (n(), i("div", pM, [
              t("span", null, d(((He = le.value) == null ? void 0 : He.name) || ((Qe = V.value) == null ? void 0 : Qe.environment) || "Loading..."), 1),
              t("span", gM, "(" + d(V.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            te[36] || (te[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", hM, [
          t("div", yM, [
            t("div", wM, [
              t("div", _M, [
                te[37] || (te[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "status" && Te.value === "this-env" }]),
                  onClick: te[2] || (te[2] = (Je) => fe("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "workflows" }]),
                  onClick: te[3] || (te[3] = (Je) => fe("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "models-env" }]),
                  onClick: te[4] || (te[4] = (Je) => fe("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "branches" }]),
                  onClick: te[5] || (te[5] = (Je) => fe("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "history" }]),
                  onClick: te[6] || (te[6] = (Je) => fe("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "nodes" }]),
                  onClick: te[7] || (te[7] = (Je) => fe("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "debug-env" }]),
                  onClick: te[8] || (te[8] = (Je) => fe("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              te[41] || (te[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", kM, [
                te[38] || (te[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "environments" }]),
                  onClick: te[9] || (te[9] = (Je) => fe("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "model-index" }]),
                  onClick: te[10] || (te[10] = (Je) => fe("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "settings" }]),
                  onClick: te[11] || (te[11] = (Je) => fe("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "debug-workspace" }]),
                  onClick: te[12] || (te[12] = (Je) => fe("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              te[42] || (te[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", bM, [
                te[40] || (te[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "deploy" }]),
                  onClick: te[13] || (te[13] = (Je) => fe("deploy", "sharing"))
                }, [
                  te[39] || (te[39] = C(" DEPLOY ", -1)),
                  Xe(D) > 0 ? (n(), i("span", $M, d(Xe(D)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "export" }]),
                  onClick: te[14] || (te[14] = (Je) => fe("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "import" }]),
                  onClick: te[15] || (te[15] = (Je) => fe("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: ye.value === "remotes" }]),
                  onClick: te[16] || (te[16] = (Je) => fe("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", CM, [
              k(ru)
            ])
          ]),
          t("div", xM, [
            X.value ? (n(), i("div", SM, d(X.value), 1)) : !V.value && ye.value === "status" ? (n(), i("div", IM, " Loading status... ")) : (n(), i(H, { key: 2 }, [
              ye.value === "status" ? (n(), U($v, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: M,
                status: V.value,
                "setup-state": B.value,
                onSwitchBranch: Ue,
                onCommitChanges: te[17] || (te[17] = (Je) => Ve.value = !0),
                onSyncEnvironment: te[18] || (te[18] = (Je) => Ie.value = !0),
                onViewWorkflows: te[19] || (te[19] = (Je) => fe("workflows", "this-env")),
                onViewHistory: te[20] || (te[20] = (Je) => fe("history", "this-env")),
                onViewDebug: te[21] || (te[21] = (Je) => fe("debug-env", "this-env")),
                onViewNodes: te[22] || (te[22] = (Je) => fe("nodes", "this-env")),
                onRepairMissingModels: go,
                onRepairEnvironment: Zs,
                onStartSetup: te[23] || (te[23] = (Je) => K.value = !0),
                onViewEnvironments: te[24] || (te[24] = (Je) => fe("environments", "all-envs")),
                onCreateEnvironment: wa
              }, null, 8, ["status", "setup-state"])) : ye.value === "workflows" ? (n(), U(U_, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: Z,
                onRefresh: qe
              }, null, 512)) : ye.value === "models-env" ? (n(), U(Jb, {
                key: 2,
                onNavigate: We
              })) : ye.value === "branches" ? (n(), U(fp, {
                key: 3,
                branches: I.value,
                current: ((yt = V.value) == null ? void 0 : yt.branch) || null,
                onSwitch: ft,
                onCreate: Pt,
                onDelete: ts
              }, null, 8, ["branches", "current"])) : ye.value === "history" ? (n(), U(pp, {
                key: 4,
                commits: G.value,
                "current-ref": (Tt = V.value) == null ? void 0 : Tt.branch,
                onSelect: vt,
                onCheckout: dt
              }, null, 8, ["commits", "current-ref"])) : ye.value === "nodes" ? (n(), U(W2, {
                key: 5,
                "version-mismatches": ((eo = (rs = V.value) == null ? void 0 : rs.comparison) == null ? void 0 : eo.version_mismatches) || [],
                onOpenNodeManager: ge,
                onRepairEnvironment: Zs,
                onToast: me
              }, null, 8, ["version-mismatches"])) : ye.value === "debug-env" ? (n(), U(sx, { key: 6 })) : ye.value === "environments" ? (n(), U(E8, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: A,
                onSwitch: Pe,
                onCreated: ho,
                onDelete: yo
              }, null, 512)) : ye.value === "model-index" ? (n(), U(c2, {
                key: 8,
                onRefresh: qe
              })) : ye.value === "settings" ? (n(), U(K3, { key: 9 })) : ye.value === "debug-workspace" ? (n(), U(tx, { key: 10 })) : ye.value === "deploy" ? (n(), U(gT, {
                key: 11,
                onToast: me,
                onNavigate: We
              })) : ye.value === "export" ? (n(), U(p5, { key: 12 })) : ye.value === "import" ? (n(), U(r4, {
                key: 13,
                onImportCompleteSwitch: ha
              })) : ye.value === "remotes" ? (n(), U(I3, {
                key: 14,
                onToast: me
              })) : y("", !0)
            ], 64))
          ])
        ]),
        Le.value ? (n(), U(LT, {
          key: 1,
          commit: Le.value,
          onClose: te[25] || (te[25] = (Je) => Le.value = null),
          onCheckout: dt,
          onCreateBranch: Ot
        }, null, 8, ["commit"])) : y("", !0),
        Y.value ? (n(), U(_l, {
          key: 2,
          title: Y.value.title,
          message: Y.value.message,
          details: Y.value.details,
          warning: Y.value.warning,
          confirmLabel: Y.value.confirmLabel,
          cancelLabel: Y.value.cancelLabel,
          secondaryLabel: Y.value.secondaryLabel,
          secondaryAction: Y.value.secondaryAction,
          destructive: Y.value.destructive,
          onConfirm: Y.value.onConfirm,
          onCancel: te[26] || (te[26] = (Je) => Y.value = null),
          onSecondary: Y.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        k(x7, {
          show: se.value,
          "from-environment": ((ee = le.value) == null ? void 0 : ee.name) || "unknown",
          "to-environment": N.value,
          onConfirm: tt,
          onClose: ys
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Ve.value && V.value ? (n(), U(lu, {
          key: 3,
          status: V.value,
          "as-modal": !0,
          onClose: te[27] || (te[27] = (Je) => Ve.value = !1),
          onCommitted: vo
        }, null, 8, ["status"])) : y("", !0),
        Ie.value && V.value ? (n(), U(j7, {
          key: 4,
          show: Ie.value,
          "mismatch-details": {
            missing_nodes: V.value.comparison.missing_nodes,
            extra_nodes: V.value.comparison.extra_nodes
          },
          onConfirm: po,
          onClose: te[28] || (te[28] = (Je) => Ie.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        k(N7, {
          show: L.value,
          state: Ne.value.state,
          progress: Ne.value.progress,
          message: Ne.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        ae.value ? (n(), i("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: te[30] || (te[30] = gt((Je) => ae.value = !1, ["self"]))
        }, [
          t("div", EM, [
            t("div", TM, [
              te[44] || (te[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: te[29] || (te[29] = (Je) => ae.value = !1)
              }, [...te[43] || (te[43] = [
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
            t("div", PM, [
              te[45] || (te[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", MM, [
                (n(!0), i(H, null, pe(O.value, (Je) => (n(), i("div", {
                  key: Je.name,
                  class: Re(["env-item", { current: Je.is_current }])
                }, [
                  t("div", RM, [
                    t("div", DM, [
                      t("span", LM, d(Je.is_current ? "●" : "○"), 1),
                      t("span", UM, d(Je.name), 1),
                      Je.current_branch ? (n(), i("span", NM, "(" + d(Je.current_branch) + ")", 1)) : y("", !0),
                      Je.is_current ? (n(), i("span", OM, "CURRENT")) : y("", !0)
                    ]),
                    t("div", AM, d(Je.workflow_count) + " workflows • " + d(Je.node_count) + " nodes ", 1)
                  ]),
                  Je.is_current ? y("", !0) : (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (_a) => Pe(Je.name)
                  }, " SWITCH ", 8, zM))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        K.value ? (n(), U(YP, {
          key: 6,
          "default-path": ((Se = ne.value) == null ? void 0 : Se.default_path) || "~/comfygit",
          "detected-models-dir": ((je = ne.value) == null ? void 0 : je.detected_models_dir) || null,
          "initial-step": j.value,
          "existing-environments": ((kt = ne.value) == null ? void 0 : kt.environments) || [],
          "cli-installed": ((Dt = ne.value) == null ? void 0 : Dt.cli_installed) ?? !0,
          "setup-state": ((us = ne.value) == null ? void 0 : us.state) || "no_workspace",
          "workspace-path": ((Fs = ne.value) == null ? void 0 : Fs.workspace_path) || null,
          onComplete: wo,
          onClose: _o,
          onSwitchEnvironment: ko,
          onEnvironmentCreatedNoSwitch: ya
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", VM, [
          k(Dd, { name: "toast" }, {
            default: p(() => [
              (n(!0), i(H, null, pe(Ce.value, (Je) => (n(), i("div", {
                key: Je.id,
                class: Re(["toast", Je.type])
              }, [
                t("span", FM, d(Je.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), WM = /* @__PURE__ */ ke(BM, [["__scopeId", "data-v-9c2af32e"]]), GM = { class: "item-header" }, jM = { class: "item-info" }, HM = { class: "filename" }, KM = { class: "metadata" }, qM = { class: "size" }, YM = {
  key: 0,
  class: "type"
}, JM = { class: "item-actions" }, QM = {
  key: 0,
  class: "progress-section"
}, XM = { class: "progress-bar" }, ZM = { class: "progress-stats" }, eR = { class: "downloaded" }, tR = { class: "speed" }, sR = {
  key: 0,
  class: "eta"
}, oR = {
  key: 1,
  class: "status-msg paused"
}, nR = {
  key: 2,
  class: "status-msg queued"
}, aR = {
  key: 3,
  class: "status-msg completed"
}, lR = {
  key: 4,
  class: "status-msg failed"
}, iR = {
  key: 0,
  class: "retries"
}, rR = /* @__PURE__ */ we({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: s }) {
    const o = s;
    function a(u) {
      if (u === 0) return "?";
      const c = u / (1024 * 1024 * 1024);
      return c >= 1 ? `${c.toFixed(2)} GB` : `${(u / (1024 * 1024)).toFixed(1)} MB`;
    }
    function l(u) {
      return u === 0 ? "-" : `${(u / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function r(u) {
      if (u < 60) return `${Math.round(u)}s`;
      const c = Math.floor(u / 60);
      return c < 60 ? `${c}m` : `${Math.floor(c / 60)}h ${c % 60}m`;
    }
    return (u, c) => (n(), i("div", {
      class: Re(["download-item", `status-${e.item.status}`])
    }, [
      t("div", GM, [
        t("div", jM, [
          t("div", HM, d(e.item.filename), 1),
          t("div", KM, [
            t("span", qM, d(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", YM, d(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", JM, [
          e.item.status === "queued" || e.item.status === "downloading" ? (n(), i("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: c[0] || (c[0] = (m) => o("cancel")),
            title: "Cancel"
          }, " × ")) : y("", !0),
          e.item.status === "paused" ? (n(), i("button", {
            key: 1,
            class: "action-icon resume",
            onClick: c[1] || (c[1] = (m) => o("resume")),
            title: "Resume"
          }, " ▶ ")) : y("", !0),
          e.item.status === "failed" ? (n(), i("button", {
            key: 2,
            class: "action-icon retry",
            onClick: c[2] || (c[2] = (m) => o("retry")),
            title: "Retry"
          }, " ↻ ")) : y("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (n(), i("button", {
            key: 3,
            class: "action-icon remove",
            onClick: c[3] || (c[3] = (m) => o("remove")),
            title: "Remove"
          }, " × ")) : y("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (n(), i("div", QM, [
        t("div", XM, [
          t("div", {
            class: "progress-fill",
            style: es({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", ZM, [
          t("span", eR, d(a(e.item.downloaded)) + " / " + d(a(e.item.size)), 1),
          t("span", tR, d(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", sR, d(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", oR, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", nR, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", aR, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", lR, [
        C(" ✗ " + d(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", iR, "(" + d(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), jo = /* @__PURE__ */ ke(rR, [["__scopeId", "data-v-2110df65"]]), uR = { class: "queue-title" }, cR = { class: "count" }, dR = { class: "queue-actions" }, mR = { class: "action-label" }, fR = {
  key: 0,
  class: "overall-progress"
}, vR = { class: "progress-bar" }, pR = {
  key: 0,
  class: "current-mini"
}, gR = { class: "filename" }, hR = { class: "speed" }, yR = {
  key: 1,
  class: "queue-content"
}, wR = {
  key: 0,
  class: "section"
}, _R = {
  key: 1,
  class: "section"
}, kR = { class: "section-header" }, bR = { class: "section-label paused" }, $R = { class: "items-list" }, CR = {
  key: 2,
  class: "section"
}, xR = { class: "section-header" }, SR = { class: "section-label" }, IR = { class: "items-list" }, ER = {
  key: 3,
  class: "section"
}, TR = { class: "section-header" }, PR = { class: "section-label" }, MR = { class: "items-list" }, RR = {
  key: 4,
  class: "section"
}, DR = { class: "section-header" }, LR = { class: "section-label failed" }, UR = { class: "items-list" }, NR = /* @__PURE__ */ we({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: s,
      currentDownload: o,
      queuedItems: a,
      completedItems: l,
      failedItems: r,
      pausedItems: u,
      hasItems: c,
      activeCount: m,
      cancelDownload: f,
      retryDownload: v,
      resumeDownload: g,
      resumeAllPaused: _,
      removeItem: h,
      clearCompleted: w
    } = zo(), x = $(!1);
    let b = null;
    St(
      () => ({
        active: m.value,
        failed: r.value.length,
        paused: u.value.length,
        completed: l.value.length
      }),
      (P, D) => {
        b && (clearTimeout(b), b = null);
        const V = P.active === 0 && P.failed === 0 && P.paused === 0 && P.completed > 0, G = D && (D.active > 0 || D.paused > 0);
        V && G && (b = setTimeout(() => {
          w(), b = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = z(() => {
      var V;
      if (s.items.length === 0) return 0;
      const P = l.value.length, D = ((V = o.value) == null ? void 0 : V.progress) || 0;
      return Math.round((P + D / 100) / s.items.length * 100);
    });
    function F(P) {
      f(P);
    }
    function E(P) {
      return P === 0 ? "..." : `${(P / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (P, D) => (n(), U(Nt, { to: "body" }, [
      Xe(c) ? (n(), i("div", {
        key: 0,
        class: Re(["model-download-queue", { minimized: !x.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: D[0] || (D[0] = (V) => x.value = !x.value)
        }, [
          t("div", uR, [
            D[4] || (D[4] = t("span", { class: "icon" }, "↓", -1)),
            D[5] || (D[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", cR, "(" + d(Xe(m)) + "/" + d(Xe(s).items.length) + ")", 1)
          ]),
          t("div", dR, [
            t("span", mR, d(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (n(), i("div", yR, [
          Xe(o) ? (n(), i("div", wR, [
            D[6] || (D[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            k(jo, {
              item: Xe(o),
              onCancel: D[1] || (D[1] = (V) => F(Xe(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          Xe(u).length > 0 ? (n(), i("div", _R, [
            t("div", kR, [
              t("span", bR, "Paused (" + d(Xe(u).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: D[2] || (D[2] = //@ts-ignore
                (...V) => Xe(_) && Xe(_)(...V))
              }, "Resume All")
            ]),
            t("div", $R, [
              (n(!0), i(H, null, pe(Xe(u), (V) => (n(), U(jo, {
                key: V.id,
                item: V,
                onResume: (G) => Xe(g)(V.id),
                onRemove: (G) => Xe(h)(V.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Xe(a).length > 0 ? (n(), i("div", CR, [
            t("div", xR, [
              t("span", SR, "Queued (" + d(Xe(a).length) + ")", 1)
            ]),
            t("div", IR, [
              (n(!0), i(H, null, pe(Xe(a), (V) => (n(), U(jo, {
                key: V.id,
                item: V,
                onCancel: (G) => F(V.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          Xe(l).length > 0 ? (n(), i("div", ER, [
            t("div", TR, [
              t("span", PR, "Completed (" + d(Xe(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: D[3] || (D[3] = //@ts-ignore
                (...V) => Xe(w) && Xe(w)(...V))
              }, "Clear")
            ]),
            t("div", MR, [
              (n(!0), i(H, null, pe(Xe(l).slice(0, 3), (V) => (n(), U(jo, {
                key: V.id,
                item: V,
                onRemove: (G) => Xe(h)(V.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Xe(r).length > 0 ? (n(), i("div", RR, [
            t("div", DR, [
              t("span", LR, "Failed (" + d(Xe(r).length) + ")", 1)
            ]),
            t("div", UR, [
              (n(!0), i(H, null, pe(Xe(r), (V) => (n(), U(jo, {
                key: V.id,
                item: V,
                onRetry: (G) => Xe(v)(V.id),
                onRemove: (G) => Xe(h)(V.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (n(), i("div", fR, [
          t("div", vR, [
            t("div", {
              class: "progress-fill",
              style: es({ width: `${S.value}%` })
            }, null, 4)
          ]),
          Xe(o) ? (n(), i("div", pR, [
            t("span", gR, d(Xe(o).filename), 1),
            t("span", hR, d(E(Xe(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), OR = /* @__PURE__ */ ke(NR, [["__scopeId", "data-v-3a3c9607"]]), AR = { class: "detail-header" }, zR = { class: "item-count" }, VR = { class: "resource-list" }, FR = { class: "item-info" }, BR = { class: "item-name" }, WR = {
  key: 0,
  class: "item-subtitle"
}, GR = {
  key: 0,
  class: "installing-badge"
}, jR = ["title"], HR = {
  key: 2,
  class: "installed-badge"
}, KR = {
  key: 3,
  class: "queued-badge"
}, qR = {
  key: 4,
  class: "action-buttons"
}, YR = {
  key: 1,
  class: "no-action"
}, JR = /* @__PURE__ */ we({
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
    const o = e, a = s, l = z(() => o.items.filter((h) => h.canAction)), r = z(() => l.value.length > 0 && l.value.every(
      (h) => {
        var w, x;
        return o.queuedItems.has(h.id) || ((w = o.installedItems) == null ? void 0 : w.has(h.id)) || ((x = o.failedItems) == null ? void 0 : x.has(h.id));
      }
    )), u = z(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
    function c(h) {
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
    function g(h) {
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
    return (h, w) => (n(), U(Ct, {
      title: e.title,
      size: "md",
      onClose: w[2] || (w[2] = (x) => a("close"))
    }, {
      body: p(() => [
        t("div", AR, [
          t("span", zR, d(e.items.length) + " " + d(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (n(), U(Ee, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: w[0] || (w[0] = (x) => a("bulk-action"))
          }, {
            default: p(() => [
              C(d(u.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        t("div", VR, [
          (n(!0), i(H, null, pe(e.items, (x) => (n(), i("div", {
            key: x.id,
            class: "resource-item"
          }, [
            t("div", FR, [
              t("span", BR, d(x.name), 1),
              x.subtitle ? (n(), i("span", WR, d(x.subtitle), 1)) : y("", !0)
            ]),
            x.canAction ? (n(), i(H, { key: 0 }, [
              m(x) ? (n(), i("span", GR, "Installing...")) : v(x) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: g(x)
              }, "Failed ⚠", 8, jR)) : f(x) ? (n(), i("span", HR, "Installed")) : c(x) ? (n(), i("span", KR, "Queued")) : (n(), i("div", qR, [
                (n(!0), i(H, null, pe(_(x), (b) => (n(), U(Ee, {
                  key: `${x.id}-${b.key}`,
                  size: "sm",
                  variant: b.variant || "secondary",
                  onClick: (S) => a("action", x, b.key)
                }, {
                  default: p(() => [
                    C(d(b.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (n(), i("span", YR, d(x.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: p(() => [
        k(Ee, {
          variant: "secondary",
          onClick: w[1] || (w[1] = (x) => a("close"))
        }, {
          default: p(() => [...w[3] || (w[3] = [
            C("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), QR = /* @__PURE__ */ ke(JR, [["__scopeId", "data-v-ec7e9202"]]), XR = {
  key: 0,
  class: "loading-state"
}, ZR = {
  key: 1,
  class: "analysis-results"
}, eD = {
  key: 0,
  class: "section"
}, tD = { class: "section-header" }, sD = { class: "section-title" }, oD = { class: "item-list" }, nD = { class: "package-info" }, aD = { class: "package-name" }, lD = { class: "node-count" }, iD = {
  key: 1,
  class: "installing-badge"
}, rD = {
  key: 2,
  class: "queued-badge"
}, uD = ["title"], cD = {
  key: 4,
  class: "installed-badge"
}, dD = {
  key: 1,
  class: "section"
}, mD = { class: "section-header" }, fD = { class: "section-title" }, vD = { class: "item-list" }, pD = { class: "node-type" }, gD = {
  key: 0,
  class: "overflow-note"
}, hD = {
  key: 2,
  class: "section"
}, yD = { class: "section-header" }, wD = { class: "section-title" }, _D = { class: "item-list" }, kD = { class: "node-type" }, bD = { class: "not-found" }, $D = {
  key: 0,
  class: "overflow-note"
}, CD = {
  key: 3,
  class: "section"
}, xD = { class: "section-header" }, SD = { class: "section-title" }, ID = { class: "item-list" }, ED = { class: "package-info community-info" }, TD = { class: "community-title-row" }, PD = { class: "package-name" }, MD = { class: "node-count" }, RD = { class: "community-mapping-note" }, DD = { key: 0 }, LD = {
  key: 0,
  class: "community-actions"
}, UD = {
  key: 1,
  class: "installing-badge"
}, ND = {
  key: 2,
  class: "queued-badge"
}, OD = ["title"], AD = {
  key: 4,
  class: "installed-badge"
}, zD = ["title"], VD = {
  key: 1,
  class: "no-url"
}, FD = {
  key: 4,
  class: "section"
}, BD = { class: "section-header" }, WD = { class: "section-title" }, GD = { class: "item-list" }, jD = { class: "model-info" }, HD = { class: "model-name" }, KD = {
  key: 1,
  class: "queued-badge"
}, qD = {
  key: 1,
  class: "no-url"
}, YD = { class: "dont-show-again" }, JD = 3e4, QD = /* @__PURE__ */ we({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = $(!1), o = $(null), a = $(null), l = $(!1), r = $(/* @__PURE__ */ new Set()), u = $(/* @__PURE__ */ new Set()), c = $(/* @__PURE__ */ new Map()), m = $(/* @__PURE__ */ new Set()), f = $(!1), v = $(null), g = $(0), _ = $(null), h = $(/* @__PURE__ */ new Set()), w = $(/* @__PURE__ */ new Map()), x = $(/* @__PURE__ */ new Map()), { addToQueue: b } = zo(), { queueNodeInstall: S } = ut(), F = z(() => {
      var Q;
      return ((Q = a.value) == null ? void 0 : Q.package_aliases) || {};
    });
    function E(Q) {
      if (!Q) return null;
      const me = F.value;
      let he = Q;
      const Ke = /* @__PURE__ */ new Set();
      for (; me[he] && !Ke.has(he); )
        Ke.add(he), he = me[he];
      return he;
    }
    function P(Q, me) {
      return Q instanceof Error && Q.message ? Q.message : typeof Q == "string" && Q.trim().length > 0 ? Q : me;
    }
    function D(Q) {
      for (const [me, he] of w.value.entries())
        he === Q && w.value.delete(me);
    }
    function V(Q) {
      if (!x.value.has(Q)) return;
      const me = x.value.get(Q);
      clearTimeout(me), x.value.delete(Q);
    }
    function G() {
      for (const Q of x.value.values())
        clearTimeout(Q);
      x.value = /* @__PURE__ */ new Map();
    }
    function I(Q) {
      V(Q);
      const me = setTimeout(() => {
        if (x.value.delete(Q), !u.value.has(Q)) return;
        D(Q), u.value.delete(Q), v.value === Q && (v.value = null), c.value.set(Q, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", Q);
      }, JD);
      x.value.set(Q, me);
    }
    function O(Q) {
      const me = `Cannot install "${Q.title}" - package_id is missing`;
      c.value.set(Q.item_id, me), o.value = me, console.warn("[ComfyGit] Community install requested without package_id:", Q);
    }
    const le = z(() => ne.value.length > 0 || j.value.length > 0 || B.value.length > 0 || q.value.length > 0 || ie.value.length > 0), ne = z(() => {
      var he, Ke;
      if (!((he = a.value) != null && he.nodes)) return [];
      const Q = /* @__PURE__ */ new Map(), me = (a.value.nodes.resolved || []).filter((Fe) => {
        var Be;
        return !Fe.is_installed && ((Be = Fe.package) == null ? void 0 : Be.package_id);
      });
      for (const Fe of me) {
        const Be = E(Fe.package.package_id);
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
    }), K = z(() => ne.value.reduce((Q, me) => Q + me.node_count, 0)), j = z(() => {
      var Q;
      return (Q = a.value) != null && Q.nodes ? (a.value.nodes.unresolved || []).map((me) => {
        var he;
        return {
          node_type: ((he = me.reference) == null ? void 0 : he.node_type) || me.node_type
        };
      }) : [];
    }), B = z(() => {
      var me;
      if (!((me = a.value) != null && me.nodes)) return [];
      const Q = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((he) => {
        var Fe;
        const Ke = ((Fe = he.reference) == null ? void 0 : Fe.node_type) || he.node_type;
        return {
          node_type: Ke,
          guidance: he.guidance || Q[Ke] || null
        };
      });
    }), q = z(() => {
      var he, Ke, Fe, Be, et, qe, vt, dt;
      if (!((he = a.value) != null && he.nodes)) return [];
      const Q = a.value.node_guidance || {}, me = /* @__PURE__ */ new Map();
      for (const ft of a.value.nodes.uninstallable || []) {
        const Pt = ((Ke = ft.reference) == null ? void 0 : Ke.node_type) || ft.node_type, ts = E(((Fe = ft.package) == null ? void 0 : Fe.package_id) || null), Ot = ts || `node:${Pt}`;
        me.has(Ot) || me.set(Ot, {
          item_id: Ot,
          node_type: Pt,
          title: ((Be = ft.package) == null ? void 0 : Be.title) || ts || Pt,
          node_count: 0,
          package_id: ts,
          repository: ((et = ft.package) == null ? void 0 : et.repository) || null,
          latest_version: ((qe = ft.package) == null ? void 0 : qe.latest_version) || null,
          guidance: ft.guidance || Q[Pt] || null
        });
        const ue = me.get(Ot);
        ue.node_count++, ue.guidance || (ue.guidance = ft.guidance || Q[Pt] || null), !ue.repository && ((vt = ft.package) != null && vt.repository) && (ue.repository = ft.package.repository), !ue.latest_version && ((dt = ft.package) != null && dt.latest_version) && (ue.latest_version = ft.package.latest_version);
      }
      return Array.from(me.values());
    }), X = z(() => q.value.filter((Q) => !!Q.package_id)), Le = z(() => q.value.length >= 5 ? q.value.slice(0, 4) : q.value), ae = z(() => X.value.length > 0 && X.value.every((Q) => {
      const me = Q.package_id;
      return r.value.has(me) || u.value.has(me) || c.value.has(me);
    }));
    function de(Q) {
      const me = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return Q.repository && me.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), me;
    }
    const ie = z(() => {
      var Fe;
      if (!((Fe = a.value) != null && Fe.models)) return [];
      const Q = (a.value.models.resolved || []).filter(
        (Be) => Be.match_type === "download_intent" || Be.match_type === "property_download_intent" || Be.match_type === "not_found"
      ).map((Be) => {
        var et, qe, vt, dt;
        return {
          filename: ((qe = (et = Be.reference) == null ? void 0 : et.widget_value) == null ? void 0 : qe.split("/").pop()) || ((vt = Be.reference) == null ? void 0 : vt.widget_value) || Be.widget_value,
          widget_value: ((dt = Be.reference) == null ? void 0 : dt.widget_value) || Be.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: Be.download_source || null,
          targetPath: Be.target_path || null,
          canDownload: !!(Be.download_source && Be.target_path)
        };
      }), me = (a.value.models.unresolved || []).map((Be) => {
        var et, qe, vt, dt;
        return {
          filename: ((qe = (et = Be.reference) == null ? void 0 : et.widget_value) == null ? void 0 : qe.split("/").pop()) || ((vt = Be.reference) == null ? void 0 : vt.widget_value) || Be.widget_value,
          widget_value: ((dt = Be.reference) == null ? void 0 : dt.widget_value) || Be.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), he = /* @__PURE__ */ new Map(), Ke = [];
      for (const Be of Q) {
        if (!Be.url) {
          Ke.push(Be);
          continue;
        }
        const et = `${Be.filename}::${Be.url}`, qe = he.get(et);
        if (!qe) {
          he.set(et, Be);
          continue;
        }
        !qe.targetPath && Be.targetPath && (qe.targetPath = Be.targetPath), !qe.canDownload && Be.canDownload && (qe.canDownload = Be.canDownload);
      }
      return [...he.values(), ...Ke, ...me];
    }), Ae = z(() => ie.value.filter((Q) => Q.canDownload)), _e = z(() => ne.value.length >= 5 ? ne.value.slice(0, 4) : ne.value), Z = z(() => ie.value.length >= 5 ? ie.value.slice(0, 4) : ie.value), A = z(() => ne.value.length > 0 && ne.value.every(
      (Q) => r.value.has(Q.package_id) || u.value.has(Q.package_id) || c.value.has(Q.package_id)
    )), M = z(() => Ae.value.length > 0 && Ae.value.every((Q) => m.value.has(Q.url))), se = z(() => ne.value.length > 0 || X.value.length > 0 || Ae.value.length > 0), L = z(() => {
      const Q = (ne.value.length === 0 || A.value) && (X.value.length === 0 || ae.value), me = Ae.value.length === 0 || M.value;
      return Q && me;
    }), N = z(() => _.value === "models" ? `Missing Models (${ie.value.length})` : _.value === "packages" ? `Missing Custom Nodes (${K.value})` : _.value === "community" ? `Community-Mapped Packages (${q.value.length})` : ""), oe = z(() => _.value === "models" ? ie.value.map((Q) => ({
      id: Q.url || Q.widget_value,
      name: Q.filename,
      canAction: Q.canDownload,
      actionDisabledReason: Q.canDownload ? void 0 : "Manual download required"
    })) : _.value === "packages" ? ne.value.map((Q) => ({
      id: Q.package_id,
      name: Q.title,
      subtitle: `(${Q.node_count} ${Q.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : _.value === "community" ? q.value.map((Q) => ({
      id: Q.package_id || Q.item_id,
      name: Q.title,
      subtitle: `(${Q.node_count} ${Q.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!Q.package_id,
      actionDisabledReason: Q.package_id ? void 0 : "Manual setup required",
      actions: Q.package_id ? de(Q) : []
    })) : []);
    function Ne(Q, me) {
      if (_.value === "models") {
        const he = ie.value.find((Ke) => Ke.url === Q.id || Ke.widget_value === Q.id);
        he && xe(he);
      } else if (_.value === "packages") {
        const he = ne.value.find((Ke) => Ke.package_id === Q.id);
        he && W(he);
      } else if (_.value === "community") {
        const he = q.value.find((Fe) => (Fe.package_id || Fe.item_id) === Q.id);
        if (!he) return;
        if (!he.package_id) {
          O({ item_id: he.item_id, title: he.title });
          return;
        }
        J(he, me === "install_git" ? "git" : "registry");
      }
    }
    function ze() {
      _.value === "models" ? De() : _.value === "packages" ? be() : _.value === "community" && $e();
    }
    async function W(Q) {
      return re(Q.package_id, Q.latest_version, "registry");
    }
    async function J(Q, me) {
      return Q.package_id ? re(Q.package_id, Q.latest_version, me, Q.repository) : (O({ item_id: Q.item_id, title: Q.title }), !1);
    }
    async function re(Q, me, he, Ke) {
      const Fe = E(Q) || Q, Be = me || "latest";
      if (r.value.has(Fe) || u.value.has(Fe) || c.value.has(Fe))
        return !0;
      Oe(), v.value = Fe;
      let et = null;
      try {
        const qe = {
          id: Fe,
          version: Be,
          selected_version: Be,
          mode: "remote",
          channel: "default"
        };
        he === "git" && Ke && (qe.repository = Ke, qe.install_source = "git");
        const { ui_id: vt } = await S(qe, {
          beforeQueueStart: (dt) => {
            et = dt, w.value.set(dt, Fe), u.value.add(Fe), I(Fe), console.log("[ComfyGit] Registered pending install:", {
              ui_id: dt,
              packageId: Fe,
              pendingInstalls: Array.from(w.value.entries())
            });
          }
        });
        return et || (et = vt, w.value.set(vt, Fe), u.value.add(Fe), I(Fe), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: vt,
          packageId: Fe,
          pendingInstalls: Array.from(w.value.entries())
        })), !0;
      } catch (qe) {
        const vt = P(qe, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", qe), et && w.value.delete(et), D(Fe), V(Fe), u.value.delete(Fe), c.value.set(Fe, vt), !1;
      } finally {
        v.value = null;
      }
    }
    function xe(Q) {
      !Q.url || !Q.targetPath || m.value.has(Q.url) || (b([{
        workflow: "unsaved",
        filename: Q.filename,
        url: Q.url,
        targetPath: Q.targetPath
      }]), m.value.add(Q.url));
    }
    async function be() {
      const Q = { attempted: 0, failed: 0 };
      for (const me of ne.value)
        !r.value.has(me.package_id) && !u.value.has(me.package_id) && !c.value.has(me.package_id) && (Q.attempted++, await W(me) || Q.failed++);
      return Q;
    }
    async function $e() {
      const Q = { attempted: 0, failed: 0 };
      for (const me of X.value) {
        const he = me.package_id;
        !r.value.has(he) && !u.value.has(he) && !c.value.has(he) && (Q.attempted++, await J(me, "registry") || Q.failed++);
      }
      return Q;
    }
    function De() {
      const Q = Ae.value.filter(
        (me) => !m.value.has(me.url)
      );
      if (Q.length === 0) return 0;
      b(Q.map((me) => ({
        workflow: "unsaved",
        filename: me.filename,
        url: me.url,
        targetPath: me.targetPath
      })));
      for (const me of Q)
        m.value.add(me.url);
      return Q.length;
    }
    async function ye() {
      const Q = await be(), me = await $e();
      De();
      const he = Q.attempted + me.attempted, Ke = Q.failed + me.failed;
      if (he > 0 && Ke > 0) {
        const Fe = he - Ke;
        o.value = `${Fe} of ${he} installs queued, ${Ke} failed`;
      }
    }
    function Te() {
      f.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function fe(Q) {
      var Fe, Be;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const me = Q == null ? void 0 : Q.id;
      if (me && h.value.has(me)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${me} this session`);
        return;
      }
      const he = window.app, Ke = (Fe = he == null ? void 0 : he.extensionManager) == null ? void 0 : Fe.workflow;
      if (Ke) {
        let vt = !1;
        for (let dt = 0; dt < 20; dt++) {
          const ft = Ke.activeWorkflow;
          if (!ft) {
            await new Promise((Ot) => setTimeout(Ot, 50));
            continue;
          }
          const Pt = (Be = ft.activeState) == null ? void 0 : Be.id;
          if (!(me && Pt === me)) {
            dt < 19 && await new Promise((Ot) => setTimeout(Ot, 50));
            continue;
          }
          if (vt = !0, ft.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${ft.filename}`), me && h.value.add(me);
            return;
          }
          break;
        }
        vt || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      s.value = !0, o.value = null, G(), r.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Map(), m.value = /* @__PURE__ */ new Set(), w.value = /* @__PURE__ */ new Map(), f.value = !1, g.value = 0;
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
        a.value = await et.json(), le.value && (l.value = !0, me && h.value.add(me));
      } catch (et) {
        console.error("[ComfyGit] Failed to analyze workflow:", et);
      } finally {
        s.value = !1;
      }
    }
    function We() {
      G(), l.value = !1, a.value = null;
    }
    function Ue(Q) {
      const { workflow: me } = Q.detail;
      me && fe(me);
    }
    function ge(Q) {
      var Ke;
      const me = (Ke = Q.detail) == null ? void 0 : Ke.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: me,
        pendingInstalls: Array.from(w.value.entries()),
        eventDetail: Q.detail
      });
      const he = w.value.get(me);
      he ? (V(he), v.value = he, console.log("[ComfyGit] Installing package:", he)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", me);
    }
    function Y(Q) {
      var Fe, Be, et, qe, vt, dt, ft;
      const me = (Fe = Q.detail) == null ? void 0 : Fe.ui_id, he = (et = (Be = Q.detail) == null ? void 0 : Be.status) == null ? void 0 : et.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: me,
        status: he,
        pendingInstalls: Array.from(w.value.entries()),
        eventDetail: Q.detail
      });
      const Ke = w.value.get(me);
      if (Ke) {
        if (V(Ke), w.value.delete(me), u.value.delete(Ke), v.value === Ke && (v.value = null), he === "success")
          r.value.add(Ke), g.value++, console.log("[ComfyGit] Package installed successfully:", Ke);
        else {
          const Pt = ((dt = (vt = (qe = Q.detail) == null ? void 0 : qe.status) == null ? void 0 : vt.messages) == null ? void 0 : dt[0]) || ((ft = Q.detail) == null ? void 0 : ft.result) || "Unknown error";
          c.value.set(Ke, Pt), console.error("[ComfyGit] Package install failed:", Ke, Pt);
        }
        w.value.size === 0 && g.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", g.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: g.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", me);
    }
    let Ve = null;
    function Ie() {
      var Q;
      return Ve || (Ve = (Q = window.app) == null ? void 0 : Q.api), Ve;
    }
    let Ce = !1;
    function Oe() {
      if (Ce) return !0;
      const Q = Ie();
      return Q ? (Q.addEventListener("cm-task-started", ge), Q.addEventListener("cm-task-completed", Y), Q.addEventListener("comfygit:workflow-changed", Me), Ce = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Me(Q) {
      const { change_type: me } = Q.detail;
      (me === "created" || me === "modified") && l.value && (G(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return lt(() => {
      window.addEventListener("comfygit:workflow-loaded", Ue);
    }), Xs(() => {
      if (G(), window.removeEventListener("comfygit:workflow-loaded", Ue), Ce) {
        const Q = Ie();
        Q && (Q.removeEventListener("cm-task-started", ge), Q.removeEventListener("cm-task-completed", Y), Q.removeEventListener("comfygit:workflow-changed", Me)), Ce = !1;
      }
    }), (Q, me) => (n(), i(H, null, [
      l.value ? (n(), U(Ct, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: We
      }, {
        body: p(() => [
          s.value ? (n(), i("div", XR, [...me[5] || (me[5] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && le.value ? (n(), i("div", ZR, [
            ne.value.length > 0 ? (n(), i("div", eD, [
              t("div", tD, [
                t("span", sD, "Missing Custom Nodes (" + d(K.value) + ")", 1),
                ne.value.length > 1 ? (n(), U(Ee, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: A.value,
                  onClick: be
                }, {
                  default: p(() => [
                    C(d(A.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", oD, [
                (n(!0), i(H, null, pe(_e.value, (he) => (n(), i("div", {
                  key: he.package_id,
                  class: "package-item"
                }, [
                  t("div", nD, [
                    t("span", aD, d(he.title), 1),
                    t("span", lD, "(" + d(he.node_count) + " " + d(he.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(he.package_id) && !u.value.has(he.package_id) && !c.value.has(he.package_id) ? (n(), U(Ee, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: v.value === he.package_id,
                    onClick: (Ke) => W(he)
                  }, {
                    default: p(() => [
                      C(d(v.value === he.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : v.value === he.package_id ? (n(), i("span", iD, "Installing...")) : u.value.has(he.package_id) ? (n(), i("span", rD, "Queued")) : c.value.has(he.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: c.value.get(he.package_id)
                  }, "Failed ⚠", 8, uD)) : (n(), i("span", cD, "Installed"))
                ]))), 128)),
                ne.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: me[0] || (me[0] = (he) => _.value = "packages")
                }, [
                  t("span", null, "Show all " + d(ne.value.length) + " packages...", 1),
                  me[6] || (me[6] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            j.value.length > 0 ? (n(), i("div", dD, [
              t("div", mD, [
                t("span", fD, "Unknown Nodes (" + d(j.value.length) + ")", 1)
              ]),
              t("div", vD, [
                (n(!0), i(H, null, pe(j.value.slice(0, 5), (he) => (n(), i("div", {
                  key: he.node_type,
                  class: "item"
                }, [
                  t("code", pD, d(he.node_type), 1),
                  me[7] || (me[7] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                j.value.length > 5 ? (n(), i("div", gD, " ...and " + d(j.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            B.value.length > 0 ? (n(), i("div", hD, [
              t("div", yD, [
                t("span", wD, "Requires Newer ComfyUI (" + d(B.value.length) + ")", 1)
              ]),
              t("div", _D, [
                (n(!0), i(H, null, pe(B.value.slice(0, 5), (he) => (n(), i("div", {
                  key: `vg-${he.node_type}`,
                  class: "item"
                }, [
                  t("code", kD, d(he.node_type), 1),
                  t("span", bD, d(he.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                B.value.length > 5 ? (n(), i("div", $D, " ...and " + d(B.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            q.value.length > 0 ? (n(), i("div", CD, [
              t("div", xD, [
                t("span", SD, "Community-Mapped Packages (" + d(q.value.length) + ")", 1),
                X.value.length > 1 ? (n(), U(Ee, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: ae.value,
                  onClick: $e
                }, {
                  default: p(() => [
                    C(d(ae.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", ID, [
                (n(!0), i(H, null, pe(Le.value, (he) => (n(), i("div", {
                  key: `community-${he.item_id}`,
                  class: "package-item"
                }, [
                  t("div", ED, [
                    t("div", TD, [
                      t("span", PD, d(he.title), 1),
                      t("span", MD, "(" + d(he.node_count) + " " + d(he.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    t("div", RD, [
                      me[8] || (me[8] = C(" Found via community mapping — registry metadata may be incomplete", -1)),
                      he.guidance ? (n(), i("span", DD, ". " + d(he.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  he.package_id ? (n(), i(H, { key: 0 }, [
                    !r.value.has(he.package_id) && !u.value.has(he.package_id) && !c.value.has(he.package_id) ? (n(), i("div", LD, [
                      k(Ee, {
                        size: "sm",
                        variant: "secondary",
                        disabled: v.value === he.package_id,
                        onClick: (Ke) => J(he, "registry")
                      }, {
                        default: p(() => [
                          C(d(v.value === he.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      he.repository ? (n(), U(Ee, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: v.value === he.package_id,
                        onClick: (Ke) => J(he, "git")
                      }, {
                        default: p(() => [...me[9] || (me[9] = [
                          C(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : y("", !0)
                    ])) : v.value === he.package_id ? (n(), i("span", UD, "Installing...")) : u.value.has(he.package_id) ? (n(), i("span", ND, "Queued")) : c.value.has(he.package_id) ? (n(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: c.value.get(he.package_id)
                    }, "Failed ⚠", 8, OD)) : (n(), i("span", AD, "Installed"))
                  ], 64)) : (n(), i(H, { key: 1 }, [
                    c.value.has(he.item_id) ? (n(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: c.value.get(he.item_id)
                    }, "Failed ⚠", 8, zD)) : (n(), i("span", VD, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                q.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: me[1] || (me[1] = (he) => _.value = "community")
                }, [
                  t("span", null, "Show all " + d(q.value.length) + " packages...", 1),
                  me[10] || (me[10] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            ie.value.length > 0 ? (n(), i("div", FD, [
              t("div", BD, [
                t("span", WD, "Missing Models (" + d(ie.value.length) + ")", 1),
                Ae.value.length > 1 ? (n(), U(Ee, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: M.value,
                  onClick: De
                }, {
                  default: p(() => [
                    C(d(M.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", GD, [
                (n(!0), i(H, null, pe(Z.value, (he) => (n(), i("div", {
                  key: he.widget_value,
                  class: "model-item"
                }, [
                  t("div", jD, [
                    t("span", HD, d(he.filename), 1)
                  ]),
                  he.canDownload ? (n(), i(H, { key: 0 }, [
                    m.value.has(he.url) ? (n(), i("span", KD, "Queued")) : (n(), U(Ee, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ke) => xe(he)
                    }, {
                      default: p(() => [...me[11] || (me[11] = [
                        C(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", qD, "Manual download required"))
                ]))), 128)),
                ie.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: me[2] || (me[2] = (he) => _.value = "models")
                }, [
                  t("span", null, "Show all " + d(ie.value.length) + " models...", 1),
                  me[12] || (me[12] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            t("div", YD, [
              k(ta, {
                modelValue: f.value,
                "onUpdate:modelValue": [
                  me[3] || (me[3] = (he) => f.value = he),
                  Te
                ]
              }, {
                default: p(() => [...me[13] || (me[13] = [
                  C(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : y("", !0)
        ]),
        footer: p(() => [
          k(Ee, {
            variant: "secondary",
            onClick: We
          }, {
            default: p(() => [...me[14] || (me[14] = [
              C("Dismiss", -1)
            ])]),
            _: 1
          }),
          se.value ? (n(), U(Ee, {
            key: 0,
            variant: "primary",
            disabled: L.value,
            onClick: ye
          }, {
            default: p(() => [
              C(d(L.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      _.value ? (n(), U(QR, {
        key: 1,
        title: N.value,
        items: oe.value,
        "item-type": _.value,
        "queued-items": _.value === "models" ? m.value : u.value,
        "installed-items": _.value === "models" ? void 0 : r.value,
        "failed-items": _.value === "models" ? void 0 : c.value,
        "installing-item": _.value === "models" ? void 0 : v.value,
        onClose: me[4] || (me[4] = (he) => _.value = null),
        onAction: Ne,
        onBulkAction: ze
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), XD = /* @__PURE__ */ ke(QD, [["__scopeId", "data-v-dfb55c3f"]]), ZD = {
  key: 0,
  class: "io-mapping-root"
}, eL = { class: "io-mapping-header" }, tL = { class: "io-mapping-header-main" }, sL = { class: "io-mapping-subtitle" }, oL = { class: "io-mapping-header-actions" }, nL = { class: "io-mapping-sidebar" }, aL = { class: "io-mapping-sidebar-scroll" }, lL = {
  key: 0,
  class: "io-state-block"
}, iL = {
  key: 1,
  class: "io-state-block io-state-error"
}, rL = { class: "contract-meta" }, uL = { class: "contract-summary" }, cL = { class: "summary-pill" }, dL = { class: "summary-pill" }, mL = { class: "summary-pill" }, fL = { class: "contract-meta-grid" }, vL = { class: "mapping-section" }, pL = { class: "section-header" }, gL = {
  key: 0,
  class: "empty-message"
}, hL = ["onClick"], yL = { class: "item-card-header" }, wL = { class: "item-card-title" }, _L = { class: "item-card-meta" }, kL = { class: "item-grid" }, bL = { class: "mapping-section" }, $L = { class: "section-header" }, CL = {
  key: 0,
  class: "empty-message"
}, xL = ["onClick"], SL = { class: "item-card-header" }, IL = { class: "item-card-title" }, EL = { class: "item-card-meta" }, TL = { class: "item-grid" }, PL = { class: "io-mapping-footer" }, ML = /* @__PURE__ */ we({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const s = e, { getWorkflowContract: o, saveWorkflowContract: a } = ut(), l = $(!1), r = $(""), u = $(!1), c = $(!1), m = $(null), f = $(null), v = $(null), g = $("inputs"), _ = $(null), h = $(null), w = [
      "string",
      "integer",
      "number",
      "boolean",
      "enum",
      "image",
      "video",
      "audio",
      "file"
    ], x = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], b = z(() => {
      if (!v.value)
        return { inputs: [], outputs: [] };
      const Z = v.value.default_contract || "default";
      return v.value.contracts[Z] || (v.value.contracts[Z] = { inputs: [], outputs: [] }), v.value.contracts[Z];
    }), S = z(() => {
      var A;
      const Z = ((A = f.value) == null ? void 0 : A.contract_summary.status) ?? "none";
      return Z === "valid" ? "Valid Contract" : Z === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function F(Z) {
      return Z ? JSON.parse(JSON.stringify(Z)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function E(Z) {
      if (!v.value) return;
      const A = Z.trim() || "default";
      v.value.default_contract = A, v.value.contracts[A] || (v.value.contracts[A] = { inputs: [], outputs: [] });
    }
    function P(Z, A) {
      return Z.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || A;
    }
    function D(Z) {
      const A = String(Z ?? "").toLowerCase();
      return A.includes("image") ? "image" : A.includes("video") ? "video" : A.includes("audio") ? "audio" : A.includes("int") ? "integer" : A.includes("float") || A.includes("double") || A.includes("number") ? "number" : A.includes("bool") ? "boolean" : A.includes("combo") || A.includes("enum") ? "enum" : A.includes("string") || A.includes("text") ? "string" : "file";
    }
    function V() {
      b.value.inputs.push({
        name: "",
        type: "string",
        node_id: "",
        required: !0,
        default: ""
      }), _.value = b.value.inputs.length - 1, g.value = "inputs";
    }
    function G() {
      b.value.outputs.push({
        name: "",
        type: "image",
        node_id: "",
        selector: "primary"
      }), h.value = b.value.outputs.length - 1, g.value = "outputs";
    }
    function I(Z) {
      b.value.inputs.splice(Z, 1), _.value === Z && (_.value = null);
    }
    function O(Z) {
      b.value.outputs.splice(Z, 1), h.value === Z && (h.value = null);
    }
    function le(Z) {
      return Z instanceof Element ? !!Z.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function ne(Z) {
      var se, L, N, oe, Ne, ze;
      if (!(Z instanceof Element)) return null;
      const A = Z.closest("[data-node-id]"), M = A == null ? void 0 : A.getAttribute("data-node-id");
      return M ? ((N = (L = (se = s.comfyApp) == null ? void 0 : se.graph) == null ? void 0 : L.getNodeById) == null ? void 0 : N.call(L, M)) ?? ((ze = (Ne = (oe = s.comfyApp) == null ? void 0 : oe.rootGraph) == null ? void 0 : Ne.getNodeById) == null ? void 0 : ze.call(Ne, M)) ?? null : null;
    }
    function K(Z, A) {
      var Ne;
      const M = Array.isArray(Z.widgets) ? Z.widgets.indexOf(A) : -1, se = b.value.inputs.findIndex(
        (ze) => String(ze.node_id) === String(Z.id) && ze.widget_idx === M
      );
      if (se >= 0) {
        _.value = se;
        return;
      }
      const L = typeof ((Ne = A == null ? void 0 : A.options) == null ? void 0 : Ne.property) == "string" ? A.options.property : void 0, N = (A == null ? void 0 : A.name) || L || "input", oe = {
        name: P(String(N), `input_${b.value.inputs.length + 1}`),
        display_name: String((A == null ? void 0 : A.name) || L || `Input ${b.value.inputs.length + 1}`),
        type: D(A == null ? void 0 : A.type),
        node_id: String(Z.id),
        widget_idx: M >= 0 ? M : void 0,
        field_key: L,
        required: !0,
        default: (A == null ? void 0 : A.value) ?? ""
      };
      b.value.inputs.push(oe), _.value = b.value.inputs.length - 1;
    }
    function j(Z, A) {
      const M = Array.isArray(Z.outputs) ? Z.outputs.indexOf(A) : -1, se = M >= 0 ? `slot:${M}` : "primary", L = b.value.outputs.findIndex(
        (oe) => String(oe.node_id) === String(Z.id) && (oe.selector || "primary") === se
      );
      if (L >= 0) {
        h.value = L;
        return;
      }
      const N = {
        name: P(String((A == null ? void 0 : A.name) || "output"), `output_${b.value.outputs.length + 1}`),
        display_name: String((A == null ? void 0 : A.name) || `Output ${b.value.outputs.length + 1}`),
        type: D(A == null ? void 0 : A.type),
        node_id: String(Z.id),
        selector: se
      };
      b.value.outputs.push(N), h.value = b.value.outputs.length - 1;
    }
    function B(Z) {
      var ze, W, J, re, xe, be, $e, De, ye, Te, fe, We;
      if (!l.value || !v.value || Z.button !== 0 || le(Z.target)) return;
      const A = (ze = s.comfyApp) == null ? void 0 : ze.canvas;
      if (!A) return;
      const M = (W = A.convertEventToCanvasOffset) == null ? void 0 : W.call(A, Z);
      if (!M || M.length < 2) return;
      const [se, L] = M, N = A.graph || ((J = s.comfyApp) == null ? void 0 : J.graph) || ((re = s.comfyApp) == null ? void 0 : re.rootGraph);
      let oe = ((xe = N == null ? void 0 : N.getNodeOnPos) == null ? void 0 : xe.call(N, se, L, A.visible_nodes)) || ((be = A.getNodeOnPos) == null ? void 0 : be.call(A, se, L)) || ne(Z.target);
      if (!oe) return;
      if (g.value === "inputs") {
        const Ue = ($e = oe.getWidgetOnPos) == null ? void 0 : $e.call(oe, se, L, !0);
        if (!Ue) return;
        Z.preventDefault(), Z.stopImmediatePropagation(), Z.stopPropagation(), Array.isArray(A.graph_mouse) && (A.graph_mouse[0] = se, A.graph_mouse[1] = L), (De = A.selectNode) == null || De.call(A, oe, !1), K(oe, Ue);
        return;
      }
      const Ne = ((ye = oe.getOutputOnPos) == null ? void 0 : ye.call(oe, [se, L])) || ((fe = (Te = oe.constructor) == null ? void 0 : Te.nodeData) != null && fe.output_node ? {
        name: oe.title || oe.type || "output",
        type: "image"
      } : null);
      Ne && (Z.preventDefault(), Z.stopImmediatePropagation(), Z.stopPropagation(), Array.isArray(A.graph_mouse) && (A.graph_mouse[0] = se, A.graph_mouse[1] = L), (We = A.selectNode) == null || We.call(A, oe, !1), j(oe, Ne));
    }
    function q() {
      document.addEventListener("pointerdown", B, !0);
    }
    function X() {
      document.removeEventListener("pointerdown", B, !0);
    }
    async function Le() {
      if (r.value) {
        u.value = !0, m.value = null;
        try {
          f.value = await o(r.value), v.value = F(f.value.execution_contract);
        } catch (Z) {
          m.value = Z instanceof Error ? Z.message : "Failed to load workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    async function ae() {
      if (!(!v.value || !r.value)) {
        c.value = !0, m.value = null;
        try {
          f.value = await a(r.value, v.value), v.value = F(f.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: r.value }
          })), ie({ reopenContract: !0 });
        } catch (Z) {
          m.value = Z instanceof Error ? Z.message : "Failed to save workflow contract";
        } finally {
          c.value = !1;
        }
      }
    }
    function de() {
      r.value && (window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      })), window.setTimeout(() => {
        window.dispatchEvent(new CustomEvent("comfygit:open-workflow-contract", {
          detail: { workflowName: r.value }
        }));
      }, 120));
    }
    function ie(Z) {
      l.value = !1, Z != null && Z.reopenContract && de();
    }
    async function Ae(Z) {
      var se, L;
      const M = (L = (se = Z.detail) == null ? void 0 : se.workflowName) == null ? void 0 : L.trim();
      M && (r.value = M, g.value = "inputs", _.value = null, h.value = null, l.value = !0, await Le());
    }
    function _e(Z) {
      Z.key === "Escape" && l.value && ie({ reopenContract: !0 });
    }
    return St(l, (Z) => {
      Z ? q() : X();
    }), lt(() => {
      window.addEventListener("comfygit:open-io-mapping", Ae), window.addEventListener("keydown", _e);
    }), da(() => {
      X(), window.removeEventListener("comfygit:open-io-mapping", Ae), window.removeEventListener("keydown", _e);
    }), (Z, A) => l.value ? (n(), i("div", ZD, [
      t("div", eL, [
        t("div", tL, [
          A[6] || (A[6] = t("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          t("div", sL, d(r.value) + " · Click " + d(g.value === "inputs" ? "input widgets" : "output slots") + " on the graph to add them to the contract. ", 1)
        ]),
        t("div", oL, [
          k(Ee, {
            size: "sm",
            variant: g.value === "inputs" ? "primary" : "secondary",
            onClick: A[0] || (A[0] = (M) => g.value = "inputs")
          }, {
            default: p(() => [...A[7] || (A[7] = [
              C(" Map Inputs ", -1)
            ])]),
            _: 1
          }, 8, ["variant"]),
          k(Ee, {
            size: "sm",
            variant: g.value === "outputs" ? "primary" : "secondary",
            onClick: A[1] || (A[1] = (M) => g.value = "outputs")
          }, {
            default: p(() => [...A[8] || (A[8] = [
              C(" Map Outputs ", -1)
            ])]),
            _: 1
          }, 8, ["variant"]),
          k(Ee, {
            size: "sm",
            variant: "secondary",
            onClick: A[2] || (A[2] = (M) => ie({ reopenContract: !0 }))
          }, {
            default: p(() => [...A[9] || (A[9] = [
              C(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("aside", nL, [
        t("div", aL, [
          u.value ? (n(), i("div", lL, " Loading workflow contract... ")) : m.value ? (n(), i("div", iL, d(m.value), 1)) : v.value ? (n(), i(H, { key: 2 }, [
            t("section", rL, [
              t("div", uL, [
                t("span", cL, d(S.value), 1),
                t("span", dL, d(b.value.inputs.length) + " input" + d(b.value.inputs.length === 1 ? "" : "s"), 1),
                t("span", mL, d(b.value.outputs.length) + " output" + d(b.value.outputs.length === 1 ? "" : "s"), 1)
              ]),
              t("div", fL, [
                k(it, { label: "Default Contract" }, {
                  default: p(() => [
                    k(ot, {
                      "model-value": v.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": E
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                k(it, { label: "Display Name" }, {
                  default: p(() => [
                    k(ot, {
                      modelValue: b.value.display_name,
                      "onUpdate:modelValue": A[3] || (A[3] = (M) => b.value.display_name = M),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              k(it, { label: "Description" }, {
                default: p(() => [
                  k(yn, {
                    modelValue: b.value.description,
                    "onUpdate:modelValue": A[4] || (A[4] = (M) => b.value.description = M),
                    rows: 2,
                    placeholder: "Optional description for this contract"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            t("section", vL, [
              t("div", pL, [
                k(Ls, { variant: "section" }, {
                  default: p(() => [...A[10] || (A[10] = [
                    C("INPUTS", -1)
                  ])]),
                  _: 1
                }),
                k(Ee, {
                  size: "sm",
                  variant: "secondary",
                  onClick: V
                }, {
                  default: p(() => [...A[11] || (A[11] = [
                    C(" Add Input ", -1)
                  ])]),
                  _: 1
                })
              ]),
              b.value.inputs.length ? y("", !0) : (n(), i("div", gL, " No inputs configured. ")),
              (n(!0), i(H, null, pe(b.value.inputs, (M, se) => (n(), i("div", {
                key: `input-${se}`,
                class: Re(["item-card", { selected: g.value === "inputs" && _.value === se }]),
                onClick: (L) => _.value = se
              }, [
                t("div", yL, [
                  t("div", null, [
                    t("div", wL, d(M.name || `Input ${se + 1}`), 1),
                    t("div", _L, [
                      C(" Node " + d(M.node_id || "?"), 1),
                      M.widget_idx !== void 0 ? (n(), i(H, { key: 0 }, [
                        C(" · Widget " + d(M.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ])
                  ]),
                  k(Ee, {
                    size: "sm",
                    variant: "ghost",
                    onClick: gt((L) => I(se), ["stop"])
                  }, {
                    default: p(() => [...A[12] || (A[12] = [
                      C(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                t("div", kL, [
                  k(it, { label: "Name" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: M.name,
                        "onUpdate:modelValue": (L) => M.name = L,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Display Name" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: M.display_name,
                        "onUpdate:modelValue": (L) => M.display_name = L,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Type" }, {
                    default: p(() => [
                      k(uo, {
                        "model-value": M.type,
                        options: w,
                        "full-width": "",
                        "onUpdate:modelValue": (L) => M.type = L
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Required" }, {
                    default: p(() => [
                      k(uo, {
                        "model-value": M.required ? "true" : "false",
                        options: x,
                        "full-width": "",
                        "onUpdate:modelValue": (L) => M.required = L === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Node ID" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: M.node_id,
                        "onUpdate:modelValue": (L) => M.node_id = L,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Widget Index" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: M.widget_idx,
                        "onUpdate:modelValue": (L) => M.widget_idx = L,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Field Key" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: M.field_key,
                        "onUpdate:modelValue": (L) => M.field_key = L,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Default" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: M.default,
                        "onUpdate:modelValue": (L) => M.default = L,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])
              ], 10, hL))), 128))
            ]),
            t("section", bL, [
              t("div", $L, [
                k(Ls, { variant: "section" }, {
                  default: p(() => [...A[13] || (A[13] = [
                    C("OUTPUTS", -1)
                  ])]),
                  _: 1
                }),
                k(Ee, {
                  size: "sm",
                  variant: "secondary",
                  onClick: G
                }, {
                  default: p(() => [...A[14] || (A[14] = [
                    C(" Add Output ", -1)
                  ])]),
                  _: 1
                })
              ]),
              b.value.outputs.length ? y("", !0) : (n(), i("div", CL, " No outputs configured. ")),
              (n(!0), i(H, null, pe(b.value.outputs, (M, se) => (n(), i("div", {
                key: `output-${se}`,
                class: Re(["item-card", { selected: g.value === "outputs" && h.value === se }]),
                onClick: (L) => h.value = se
              }, [
                t("div", SL, [
                  t("div", null, [
                    t("div", IL, d(M.name || `Output ${se + 1}`), 1),
                    t("div", EL, [
                      C(" Node " + d(M.node_id || "?"), 1),
                      M.selector ? (n(), i(H, { key: 0 }, [
                        C(" · " + d(M.selector), 1)
                      ], 64)) : y("", !0)
                    ])
                  ]),
                  k(Ee, {
                    size: "sm",
                    variant: "ghost",
                    onClick: gt((L) => O(se), ["stop"])
                  }, {
                    default: p(() => [...A[15] || (A[15] = [
                      C(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                t("div", TL, [
                  k(it, { label: "Name" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: M.name,
                        "onUpdate:modelValue": (L) => M.name = L,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Display Name" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: M.display_name,
                        "onUpdate:modelValue": (L) => M.display_name = L,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Type" }, {
                    default: p(() => [
                      k(uo, {
                        "model-value": M.type,
                        options: w,
                        "full-width": "",
                        "onUpdate:modelValue": (L) => M.type = L
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Node ID" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: M.node_id,
                        "onUpdate:modelValue": (L) => M.node_id = L,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Selector" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: M.selector,
                        "onUpdate:modelValue": (L) => M.selector = L,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])
              ], 10, xL))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        t("div", PL, [
          k(Ee, {
            variant: "secondary",
            onClick: A[5] || (A[5] = (M) => ie({ reopenContract: !0 }))
          }, {
            default: p(() => [...A[16] || (A[16] = [
              C(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(Ee, {
            variant: "primary",
            loading: c.value,
            onClick: ae
          }, {
            default: p(() => [...A[17] || (A[17] = [
              C(" Save Contract ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ])
    ])) : y("", !0);
  }
}), RL = /* @__PURE__ */ ke(ML, [["__scopeId", "data-v-837627ec"]]), DL = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', LL = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', UL = {
  comfy: DL,
  phosphor: LL
}, bl = "comfy", cu = "comfygit-theme";
let no = null, du = bl;
function NL() {
  try {
    const e = localStorage.getItem(cu);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return bl;
}
function mu(e = bl) {
  no && no.remove(), no = document.createElement("style"), no.id = "comfygit-theme-styles", no.setAttribute("data-theme", e), no.textContent = UL[e], document.head.appendChild(no), document.body.setAttribute("data-comfygit-theme", e), du = e;
  try {
    localStorage.setItem(cu, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function OL() {
  return du;
}
function AL(e) {
  mu(e);
}
function zL(e) {
  var r;
  const { ui_id: s, state: o } = e || {}, a = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = a[s];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const $l = document.createElement("link");
$l.rel = "stylesheet";
$l.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild($l);
const VL = NL();
mu(VL);
sessionStorage.removeItem("ComfyGit.LastView");
sessionStorage.removeItem("ComfyGit.LastSection");
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), AL(e);
  },
  getTheme: () => {
    const e = OL();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Ps = null, ln = null, Yt = null, rn = null, Ho = null, wi = null, Ko = null, _i = null, qo = null, ki = null;
const Do = $(null);
let wn = "no_workspace", fu = !1;
async function Wn() {
  var e;
  if (!((e = Jt) != null && e.api)) return null;
  try {
    const s = await Jt.api.fetchApi("/v2/comfygit/status");
    s.ok && (Do.value = await s.json());
  } catch {
  }
}
async function Ja() {
  var e;
  if ((e = Jt) != null && e.api)
    try {
      const s = await Jt.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        wn = o.state, fu = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function Qa() {
  var s;
  if (wn === "managed" || !fu) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function FL() {
  if (!Do.value) return !1;
  const e = Do.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Do.value.has_changes;
}
function Nn(e) {
  Qo(), Ps = document.createElement("div"), Ps.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", Ps.appendChild(s), Ps.addEventListener("click", (a) => {
    a.target === Ps && Qo();
  });
  const o = (a) => {
    a.key === "Escape" && (Qo(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), ln = $n({
    render: () => Ao(WM, {
      initialView: e,
      onClose: Qo,
      onStatusUpdate: async (a) => {
        Do.value = a, un(), await Ja(), Xa(), Qa();
      }
    })
  }), ln.mount(s), document.body.appendChild(Ps);
}
function Qo() {
  ln && (ln.unmount(), ln = null), Ps && (Ps.remove(), Ps = null);
}
function bi(e) {
  Yo(), Yt = document.createElement("div"), Yt.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Yt.style.position = "fixed", Yt.style.top = `${s.bottom + 8}px`, Yt.style.right = `${window.innerWidth - s.right}px`, Yt.style.zIndex = "10001";
  const o = (l) => {
    Yt && !Yt.contains(l.target) && l.target !== e && (Yo(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const a = (l) => {
    l.key === "Escape" && (Yo(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), rn = $n({
    render: () => Ao(lu, {
      status: Do.value,
      onClose: Yo,
      onCommitted: (l) => {
        Yo(), BL(l.success, l.message), Wn().then(un);
      }
    })
  }), rn.mount(Yt), document.body.appendChild(Yt);
}
function Yo() {
  rn && (rn.unmount(), rn = null), Yt && (Yt.remove(), Yt = null);
}
function BL(e, s) {
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
function WL() {
  Ho || (Ho = document.createElement("div"), Ho.className = "comfygit-download-queue-root", wi = $n({
    render: () => Ao(OR)
  }), wi.mount(Ho), document.body.appendChild(Ho), console.log("[ComfyGit] Model download queue mounted"));
}
function GL() {
  Ko || (Ko = document.createElement("div"), Ko.className = "comfygit-missing-resources-root", _i = $n({
    render: () => Ao(XD)
  }), _i.mount(Ko), document.body.appendChild(Ko), console.log("[ComfyGit] Missing resources popup mounted"));
}
function jL() {
  qo || (qo = document.createElement("div"), qo.className = "comfygit-io-mapping-root", ki = $n({
    render: () => Ao(RL, {
      comfyApp: Jt
    })
  }), ki.mount(qo), document.body.appendChild(qo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let Gt = null;
function un() {
  if (!Gt) return;
  const e = Gt.querySelector(".commit-indicator");
  e && (e.style.display = FL() ? "block" : "none");
}
function Xa() {
  if (!Gt) return;
  const e = wn !== "managed";
  Gt.disabled = e, Gt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const vu = document.createElement("style");
vu.textContent = `
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
document.head.appendChild(vu);
Jt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => Nn()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        Gt && !Gt.disabled && bi(Gt);
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
    if (wn === "managed")
      try {
        await Promise.all([
          Jt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          Jt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
        ]);
      } catch (o) {
        console.warn("[ComfyGit] Failed to disable built-in warnings:", o);
      }
    window.__comfygit_pending_workflow = e;
  },
  async afterConfigureGraph(e) {
    if (wn !== "managed") return;
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = Nn, Gt = document.createElement("button"), Gt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Gt.innerHTML = 'Commit <span class="commit-indicator"></span>', Gt.title = "Quick Commit", Gt.onclick = () => bi(Gt), e.appendChild(s), e.appendChild(Gt), (r = (l = Jt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Jt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), WL(), GL(), jL(), window.addEventListener("comfygit:open-panel", ((u) => {
      var m;
      const c = (m = u.detail) == null ? void 0 : m.initialView;
      Nn(c);
    })), window.addEventListener("comfygit:close-panel", (() => {
      Qo();
    }));
    const { loadPendingDownloads: o } = zo();
    o(), await Promise.all([Wn(), Ja()]), un(), Xa(), Qa(), setTimeout(Qa, 100), setInterval(async () => {
      await Promise.all([Wn(), Ja()]), un(), Xa();
    }, 3e4);
    const a = Jt.api;
    if (a) {
      let u = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((g) => {
          (g.startsWith("workflow:") || g.startsWith("Comfy.OpenWorkflowsPaths:") || g.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(g);
        }), window.location.reload();
      }, c = function() {
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
        const _ = document.createElement("span");
        _.textContent = "Workflows updated - refresh required", g.appendChild(_);
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
        `, h.onmouseover = () => h.style.background = "var(--comfy-input-bg)", h.onmouseout = () => h.style.background = "var(--comfy-menu-bg)", h.onclick = () => u(), g.appendChild(h);
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
        `, w.onmouseover = () => w.style.opacity = "1", w.onmouseout = () => w.style.opacity = "0.6", w.onclick = () => g.remove(), g.appendChild(w), document.body.appendChild(g), console.log("[ComfyGit] Refresh notification displayed");
      }, m = function(g) {
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
        const F = document.createElement("button");
        F.textContent = "View Logs", F.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, F.onmouseover = () => F.style.background = "#c62828", F.onmouseout = () => F.style.background = "#e53935", F.onclick = () => {
          h.remove(), Nn("debug-env");
        }, h.appendChild(F);
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
        `, E.onmouseover = () => E.style.opacity = "1", E.onmouseout = () => E.style.opacity = "0.6", E.onclick = () => h.remove(), h.appendChild(E), document.body.appendChild(h), console.log("[ComfyGit] Manager error toast displayed:", g), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && h.remove();
        }, 1e4);
      }, f = function(g) {
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
        S.textContent = `${g} node package${g > 1 ? "s" : ""} ready to install`, S.style.cssText = "font-size: 12px; opacity: 0.7;", x.appendChild(S), h.appendChild(x);
        const F = document.createElement("button");
        F.textContent = "Apply Changes", F.style.cssText = `
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
        `, F.onmouseover = () => F.style.background = "rgba(255,255,255,0.1)", F.onmouseout = () => F.style.background = "transparent", F.onclick = async () => {
          F.disabled = !0, F.textContent = "Restarting...", F.style.opacity = "0.7", b.textContent = "Restarting...", S.textContent = "Applying changes, please wait...";
          try {
            const P = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Jt.refreshComboInNodes && (await Jt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), w.textContent = "✅", b.textContent = "Nodes Installed", b.style.color = "#4caf50", S.textContent = `${g} package${g > 1 ? "s" : ""} installed successfully!`, h.style.borderColor = "#4caf50", F.style.display = "none", setTimeout(() => {
                  h.remove();
                }, 3e3);
              } catch (D) {
                console.error("[ComfyGit] Failed to refresh nodes:", D), w.textContent = "✅", b.textContent = "Restart Complete", b.style.color = "#4caf50", S.textContent = "Refresh the page to load new nodes.", h.style.borderColor = "#4caf50", F.style.display = "none";
              }
            };
            a.addEventListener("reconnected", P, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (P) {
            console.error("[ComfyGit] Failed to restart:", P), b.textContent = "Restart Failed", b.style.color = "#e53935", S.textContent = "Could not restart server. Try again.", h.style.borderColor = "#e53935", F.textContent = "Try Again", F.disabled = !1, F.style.opacity = "1";
          }
        }, h.appendChild(F);
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
        `, E.onmouseover = () => E.style.opacity = "1", E.onmouseout = () => E.style.opacity = "0.6", E.onclick = () => h.remove(), h.appendChild(E), document.body.appendChild(h), console.log(`[ComfyGit] Restart required notification displayed (${g} packages installed)`);
      };
      a.addEventListener("comfygit:workflow-changed", async (g) => {
        const { change_type: _, workflow_name: h } = g.detail;
        console.log(`[ComfyGit] Workflow ${_}: ${h}`), await Wn(), un();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      a.addEventListener("status", async (g) => {
        const _ = g.detail != null;
        _ && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : c()), v = _;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (g) => {
        const _ = zL(g.detail);
        _ && m(_);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const _ = g, { count: h = 1 } = _.detail || {};
        f(h);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
