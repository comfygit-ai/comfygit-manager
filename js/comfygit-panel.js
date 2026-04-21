import { app as Qt } from "../../scripts/app.js";
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
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), el = (e) => e.startsWith("onUpdate:"), Mt = Object.assign, tl = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, pu = Object.prototype.hasOwnProperty, ft = (e, s) => pu.call(e, s), Ye = Array.isArray, To = (e) => _n(e) === "[object Map]", Oo = (e) => _n(e) === "[object Set]", xl = (e) => _n(e) === "[object Date]", et = (e) => typeof e == "function", It = (e) => typeof e == "string", fs = (e) => typeof e == "symbol", ht = (e) => e !== null && typeof e == "object", Ci = (e) => (ht(e) || et(e)) && et(e.then) && et(e.catch), xi = Object.prototype.toString, _n = (e) => xi.call(e), gu = (e) => _n(e).slice(8, -1), Si = (e) => _n(e) === "[object Object]", sl = (e) => It(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xo = /* @__PURE__ */ Za(
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
function Ft(e) {
  if (Ye(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = It(a) ? $u(a) : Ft(a);
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
function Ne(e) {
  let s = "";
  if (It(e))
    s = e;
  else if (Ye(e))
    for (let o = 0; o < e.length; o++) {
      const a = Ne(e[o]);
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
const Ti = (e) => !!(e && e.__v_isRef === !0), d = (e) => It(e) ? e : e == null ? "" : Ye(e) || ht(e) && (e.toString === xi || !et(e.toString)) ? Ti(e) ? d(e.value) : JSON.stringify(e, Pi, 2) : String(e), Pi = (e, s) => Ti(s) ? Pi(e, s.value) : To(s) ? {
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
let Yt;
class Iu {
  constructor(s = !1) {
    this.detached = s, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Yt, !s && Yt && (this.index = (Yt.scopes || (Yt.scopes = [])).push(
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
      const o = Yt;
      try {
        return Yt = this, s();
      } finally {
        Yt = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Yt, Yt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Yt = this.prevScope, this.prevScope = void 0);
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
  return Yt;
}
let bt;
const $a = /* @__PURE__ */ new WeakSet();
class Ri {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Yt && Yt.active && Yt.effects.push(this);
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
      Ni(this), bt = s, ms = o, this.flags &= -3;
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
let Mi = 0, Zo, en;
function Di(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = en, en = e;
    return;
  }
  e.next = Zo, Zo = e;
}
function nl() {
  Mi++;
}
function al() {
  if (--Mi > 0)
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
function Ni(e) {
  let s, o = e.depsTail, a = o;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === o && (o = l), ll(a), Tu(a)) : s = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = s, e.depsTail = o;
}
function Oa(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (Ui(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function Ui(e) {
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
    bt = o, ms = a, Ni(e), e.flags &= -3;
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
function Ns() {
  Oi.push(ms), ms = !1;
}
function Us() {
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
function Rs(e, s, o, a, l, r) {
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
  const s = mt(e);
  return s === e ? s : (At(s, "iterate", dn), os(e) ? s : s.map(vs));
}
function ia(e) {
  return At(e = mt(e), "iterate", dn), e;
}
function Gs(e, s) {
  return Os(e) ? ro(e) ? Lo(vs(s)) : Lo(s) : vs(s);
}
const Ru = {
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
const Mu = Array.prototype;
function Is(e, s, o, a, l, r) {
  const u = ia(e), c = u !== e && !os(e), m = u[s];
  if (m !== Mu[s]) {
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
  const a = mt(e);
  At(a, "iterate", dn);
  const l = a[s](...o);
  return (l === -1 || l === !1) && cl(o[0]) ? (o[0] = mt(o[0]), a[s](...o)) : l;
}
function Fo(e, s, o = []) {
  Ns(), nl();
  const a = mt(e)[s].apply(e, o);
  return al(), Us(), a;
}
const Du = /* @__PURE__ */ Za("__proto__,__v_isRef,__isVue"), zi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(fs)
);
function Lu(e) {
  fs(e) || (e = String(e));
  const s = mt(this);
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
      if (u && (m = Ru[o]))
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
      Bt(s) ? s : a
    );
    if ((fs(o) ? zi.has(o) : Du(o)) || (l || At(s, "get", o), r))
      return c;
    if (Bt(c)) {
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
      if (!os(a) && !Os(a) && (r = mt(r), a = mt(a)), !u && Bt(r) && !Bt(a))
        return f || (r.value = a), !0;
    }
    const c = u ? Number(o) < s.length : ft(s, o), m = Reflect.set(
      s,
      o,
      a,
      Bt(s) ? s : l
    );
    return s === mt(l) && (c ? Ks(a, r) && Rs(s, "set", o, a) : Rs(s, "add", o, a)), m;
  }
  deleteProperty(s, o) {
    const a = ft(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && a && Rs(s, "delete", o, void 0), l;
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
class Nu extends Vi {
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
const Uu = /* @__PURE__ */ new Fi(), Ou = /* @__PURE__ */ new Nu(), Au = /* @__PURE__ */ new Fi(!0);
const Va = (e) => e, Sn = (e) => Reflect.getPrototypeOf(e);
function zu(e, s, o) {
  return function(...a) {
    const l = this.__v_raw, r = mt(l), u = To(r), c = e === "entries" || e === Symbol.iterator && u, m = e === "keys" && u, f = l[e](...a), v = o ? Va : s ? Lo : vs;
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
      const r = this.__v_raw, u = mt(r), c = mt(l);
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
      return !e && At(mt(l), "iterate", io), l.size;
    },
    has(l) {
      const r = this.__v_raw, u = mt(r), c = mt(l);
      return e || (Ks(l, c) && At(u, "has", l), At(u, "has", c)), l === c ? r.has(l) : r.has(l) || r.has(c);
    },
    forEach(l, r) {
      const u = this, c = u.__v_raw, m = mt(c), f = s ? Va : e ? Lo : vs;
      return !e && At(m, "iterate", io), c.forEach((v, g) => l.call(r, f(v), f(g), u));
    }
  };
  return Mt(
    o,
    e ? {
      add: In("add"),
      set: In("set"),
      delete: In("delete"),
      clear: In("clear")
    } : {
      add(l) {
        !s && !os(l) && !Os(l) && (l = mt(l));
        const r = mt(this);
        return Sn(r).has.call(r, l) || (r.add(l), Rs(r, "add", l, l)), this;
      },
      set(l, r) {
        !s && !os(r) && !Os(r) && (r = mt(r));
        const u = mt(this), { has: c, get: m } = Sn(u);
        let f = c.call(u, l);
        f || (l = mt(l), f = c.call(u, l));
        const v = m.call(u, l);
        return u.set(l, r), f ? Ks(r, v) && Rs(u, "set", l, r) : Rs(u, "add", l, r), this;
      },
      delete(l) {
        const r = mt(this), { has: u, get: c } = Sn(r);
        let m = u.call(r, l);
        m || (l = mt(l), m = u.call(r, l)), c && c.call(r, l);
        const f = r.delete(l);
        return m && Rs(r, "delete", l, void 0), f;
      },
      clear() {
        const l = mt(this), r = l.size !== 0, u = l.clear();
        return r && Rs(
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
    ft(o, l) && l in a ? o : a,
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
    Uu,
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
function mt(e) {
  const s = e && e.__v_raw;
  return s ? mt(s) : e;
}
function qu(e) {
  return !ft(e, "__v_skip") && Object.isExtensible(e) && Ii(e, "__v_skip", !0), e;
}
const vs = (e) => ht(e) ? Qs(e) : e, Lo = (e) => ht(e) ? Gn(e) : e;
function Bt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function b(e) {
  return Yu(e, !1);
}
function Yu(e, s) {
  return Bt(e) ? e : new Ju(e, s);
}
class Ju {
  constructor(s, o) {
    this.dep = new il(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : mt(s), this._value = o ? s : vs(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, a = this.__v_isShallow || os(s) || Os(s);
    s = a ? s : mt(s), Ks(s, o) && (this._rawValue = s, this._value = a ? s : vs(s), this.dep.trigger());
  }
}
function Ze(e) {
  return Bt(e) ? e.value : e;
}
const Qu = {
  get: (e, s, o) => s === "__v_raw" ? e : Ze(Reflect.get(e, s, o)),
  set: (e, s, o, a) => {
    const l = e[s];
    return Bt(l) && !Bt(o) ? (l.value = o, !0) : Reflect.set(e, s, o, a);
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
    return Ui(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function Zu(e, s, o = !1) {
  let a, l;
  return et(e) ? a = e : (a = e.get, l = e.set), new Xu(a, l, o);
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
  const { immediate: a, deep: l, once: r, scheduler: u, augmentJob: c, call: m } = o, f = (I) => l ? I : os(I) || l === !1 || l === 0 ? Ms(I, 1) : Ms(I);
  let v, g, _, h, w = !1, x = !1;
  if (Bt(e) ? (g = () => e.value, w = os(e)) : ro(e) ? (g = () => f(e), w = !0) : Ye(e) ? (x = !0, w = e.some((I) => ro(I) || os(I)), g = () => e.map((I) => {
    if (Bt(I))
      return I.value;
    if (ro(I))
      return f(I);
    if (et(I))
      return m ? m(I, 2) : I();
  })) : et(e) ? s ? g = m ? () => m(e, 2) : e : g = () => {
    if (_) {
      Ns();
      try {
        _();
      } finally {
        Us();
      }
    }
    const I = ao;
    ao = v;
    try {
      return m ? m(e, 3, [h]) : e(h);
    } finally {
      ao = I;
    }
  } : g = xs, s && l) {
    const I = g, M = l === !0 ? 1 / 0 : l;
    g = () => Ms(I(), M);
  }
  const C = Eu(), S = () => {
    v.stop(), C && C.active && tl(C.effects, v);
  };
  if (r && s) {
    const I = s;
    s = (...M) => {
      I(...M), S();
    };
  }
  let z = x ? new Array(e.length).fill(En) : En;
  const T = (I) => {
    if (!(!(v.flags & 1) || !v.dirty && !I))
      if (s) {
        const M = v.run();
        if (l || w || (x ? M.some((O, G) => Ks(O, z[G])) : Ks(M, z))) {
          _ && _();
          const O = ao;
          ao = v;
          try {
            const G = [
              M,
              // pass undefined as the old value when it's changed for the first time
              z === En ? void 0 : x && z[0] === En ? [] : z,
              h
            ];
            z = M, m ? m(s, 3, G) : (
              // @ts-expect-error
              s(...G)
            );
          } finally {
            ao = O;
          }
        }
      } else
        v.run();
  };
  return c && c(T), v = new Ri(g), v.scheduler = u ? () => u(T, !1) : T, h = (I) => ec(I, !1, v), _ = v.onStop = () => {
    const I = jn.get(v);
    if (I) {
      if (m)
        m(I, 4);
      else
        for (const M of I) M();
      jn.delete(v);
    }
  }, s ? a ? T(!0) : z = v.run() : u ? u(T.bind(null, !0), !0) : v.run(), S.pause = v.pause.bind(v), S.resume = v.resume.bind(v), S.stop = S, S;
}
function Ms(e, s = 1 / 0, o) {
  if (s <= 0 || !ht(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, Bt(e))
    Ms(e.value, s, o);
  else if (Ye(e))
    for (let a = 0; a < e.length; a++)
      Ms(e[a], s, o);
  else if (Oo(e) || To(e))
    e.forEach((a) => {
      Ms(a, s, o);
    });
  else if (Si(e)) {
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
function kn(e, s, o, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    ra(l, s, o);
  }
}
function ps(e, s, o, a) {
  if (et(e)) {
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
      Ns(), kn(r, null, 10, [
        e,
        m,
        f
      ]), Us();
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
const Ht = [];
let bs = -1;
const Po = [];
let js = null, xo = 0;
const Hi = /* @__PURE__ */ Promise.resolve();
let Hn = null;
function Rt(e) {
  const s = Hn || Hi;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function oc(e) {
  let s = bs + 1, o = Ht.length;
  for (; s < o; ) {
    const a = s + o >>> 1, l = Ht[a], r = mn(l);
    r < e || r === e && l.flags & 2 ? s = a + 1 : o = a;
  }
  return s;
}
function dl(e) {
  if (!(e.flags & 1)) {
    const s = mn(e), o = Ht[Ht.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= mn(o) ? Ht.push(e) : Ht.splice(oc(s), 0, e), e.flags |= 1, Ki();
  }
}
function Ki() {
  Hn || (Hn = Hi.then(Yi));
}
function nc(e) {
  Ye(e) ? Po.push(...e) : js && e.id === -1 ? js.splice(xo + 1, 0, e) : e.flags & 1 || (Po.push(e), e.flags |= 1), Ki();
}
function Tl(e, s, o = bs + 1) {
  for (; o < Ht.length; o++) {
    const a = Ht[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      Ht.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
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
    for (bs = 0; bs < Ht.length; bs++) {
      const s = Ht[bs];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), kn(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; bs < Ht.length; bs++) {
      const s = Ht[bs];
      s && (s.flags &= -2);
    }
    bs = -1, Ht.length = 0, qi(), Hn = null, (Ht.length || Po.length) && Yi();
  }
}
let Nt = null, Ji = null;
function Kn(e) {
  const s = Nt;
  return Nt = e, Ji = e && e.type.__scopeId || null, s;
}
function p(e, s = Nt, o) {
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
  if (Nt === null)
    return e;
  const o = va(Nt), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [r, u, c, m = wt] = s[l];
    r && (et(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ms(u), a.push({
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
    m && (Ns(), ps(m, o, 8, [
      e.el,
      c,
      e,
      s
    ]), Us());
  }
}
const Qi = Symbol("_vte"), Xi = (e) => e.__isTeleport, tn = (e) => e && (e.disabled || e.disabled === ""), Pl = (e) => e && (e.defer || e.defer === ""), Rl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Ml = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Fa = (e, s) => {
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
      o: { insert: h, querySelector: w, createText: x, createComment: C }
    } = f, S = tn(s.props);
    let { shapeFlag: z, children: T, dynamicChildren: I } = s;
    if (e == null) {
      const M = s.el = x(""), O = s.anchor = x("");
      h(M, o, a), h(O, o, a);
      const G = (L, ie) => {
        z & 16 && v(
          T,
          L,
          ie,
          l,
          r,
          u,
          c,
          m
        );
      }, E = () => {
        const L = s.target = Fa(s.props, w), ie = er(L, s, x, h);
        L && (u !== "svg" && Rl(L) ? u = "svg" : u !== "mathml" && Ml(L) && (u = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(L), S || (G(L, ie), An(s, !1)));
      };
      S && (G(o, O), An(s, !0)), Pl(s.props) ? (s.el.__isMounted = !1, Gt(() => {
        E(), delete s.el.__isMounted;
      }, r)) : E();
    } else {
      if (Pl(s.props) && e.el.__isMounted === !1) {
        Gt(() => {
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
      const M = s.anchor = e.anchor, O = s.target = e.target, G = s.targetAnchor = e.targetAnchor, E = tn(e.props), L = E ? o : O, ie = E ? M : G;
      if (u === "svg" || Rl(O) ? u = "svg" : (u === "mathml" || Ml(O)) && (u = "mathml"), I ? (_(
        e.dynamicChildren,
        I,
        L,
        l,
        r,
        u,
        c
      ), gl(e, s, !0)) : m || g(
        e,
        s,
        L,
        ie,
        l,
        r,
        u,
        c,
        !1
      ), S)
        E ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : Tn(
          s,
          o,
          M,
          f,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const le = s.target = Fa(
          s.props,
          w
        );
        le && Tn(
          s,
          le,
          null,
          f,
          0
        );
      } else E && Tn(
        s,
        O,
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
  function _(x, C, S, z) {
    C.anchor = g(
      u(x),
      C,
      c(x),
      o,
      a,
      l,
      r
    ), C.targetStart = S, C.targetAnchor = z;
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
        let C = x;
        for (; C; ) {
          if (C && C.nodeType === 8) {
            if (C.data === "teleport start anchor")
              s.targetStart = C;
            else if (C.data === "teleport anchor") {
              s.targetAnchor = C, h._lpa = s.targetAnchor && u(s.targetAnchor);
              break;
            }
          }
          C = u(C);
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
const Ut = Zi;
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
      const r = nr(l), u = mt(e), { mode: c } = u;
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
    onBeforeAppear: C,
    onAppear: S,
    onAfterAppear: z,
    onAppearCancelled: T
  } = s, I = String(e.key), M = ar(o, e), O = (L, ie) => {
    L && ps(
      L,
      a,
      9,
      ie
    );
  }, G = (L, ie) => {
    const le = ie[1];
    O(L, ie), Ye(L) ? L.every((Y) => Y.length <= 1) && le() : L.length <= 1 && le();
  }, E = {
    mode: u,
    persisted: c,
    beforeEnter(L) {
      let ie = m;
      if (!o.isMounted)
        if (r)
          ie = C || m;
        else
          return;
      L[Ts] && L[Ts](
        !0
        /* cancelled */
      );
      const le = M[I];
      le && lo(e, le) && le.el[Ts] && le.el[Ts](), O(ie, [L]);
    },
    enter(L) {
      let ie = f, le = v, Y = g;
      if (!o.isMounted)
        if (r)
          ie = S || f, le = z || v, Y = T || g;
        else
          return;
      let K = !1;
      const V = L[Pn] = (J) => {
        K || (K = !0, J ? O(Y, [L]) : O(le, [L]), E.delayedLeave && E.delayedLeave(), L[Pn] = void 0);
      };
      ie ? G(ie, [L, V]) : V();
    },
    leave(L, ie) {
      const le = String(e.key);
      if (L[Pn] && L[Pn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return ie();
      O(_, [L]);
      let Y = !1;
      const K = L[Ts] = (V) => {
        Y || (Y = !0, ie(), V ? O(x, [L]) : O(w, [L]), L[Ts] = void 0, M[le] === e && delete M[le]);
      };
      M[le] = e, h ? G(h, [L, K]) : K();
    },
    clone(L) {
      const ie = fn(
        L,
        s,
        o,
        a,
        l
      );
      return l && l(ie), ie;
    }
  };
  return E;
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
    if (s & 32 && et(o.default))
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
function be(e, s) {
  return et(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Mt({ name: e.name }, s, { setup: e })
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
  if (Ro(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && sn(e, s, o, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? va(a.component) : a.el, u = l ? null : r, { i: c, r: m } = e, f = s && s.r, v = c.refs === wt ? c.refs = {} : c.refs, g = c.setupState, _ = mt(g), h = g === wt ? $i : (w) => ft(_, w);
  if (f != null && f !== m) {
    if (Ll(s), It(f))
      v[f] = null, h(f) && (g[f] = null);
    else if (Bt(f)) {
      f.value = null;
      const w = s;
      w.k && (v[w.k] = null);
    }
  }
  if (et(m))
    kn(m, c, 12, [u, v]);
  else {
    const w = It(m), x = Bt(m);
    if (w || x) {
      const C = () => {
        if (e.f) {
          const S = w ? h(m) ? g[m] : v[m] : m.value;
          if (l)
            Ye(S) && tl(S, r);
          else if (Ye(S))
            S.includes(r) || S.push(r);
          else if (w)
            v[m] = [r], h(m) && (g[m] = v[m]);
          else {
            const z = [r];
            m.value = z, e.k && (v[e.k] = z);
          }
        } else w ? (v[m] = u, h(m) && (g[m] = u)) : x && (m.value = u, e.k && (v[e.k] = u));
      };
      if (u) {
        const S = () => {
          C(), qn.delete(e);
        };
        S.id = -1, qn.set(e, S), Gt(S, o);
      } else
        Ll(e), C();
    }
  }
}
function Ll(e) {
  const s = qn.get(e);
  s && (s.flags |= 8, qn.delete(e));
}
la().requestIdleCallback;
la().cancelIdleCallback;
const Ro = (e) => !!e.type.__asyncLoader, ua = (e) => e.type.__isKeepAlive;
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
      Ns();
      const c = bn(o), m = ps(s, o, e, u);
      return c(), Us(), m;
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
  const l = Nt || Vt;
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
      Nl(l[e] || r[e], s) || // global registration
      Nl(l.appContext[e], s)
    );
    return !u && a ? r : u;
  }
}
function Nl(e, s) {
  return e && (e[s] || e[ls(s)] || e[na(ls(s))]);
}
function ye(e, s, o, a) {
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
  if (Nt.ce || Nt.parent && Ro(Nt.parent) && Nt.parent.ce) {
    const f = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), n(), D(
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
  u && u.key, m = D(
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
  /* @__PURE__ */ Mt(/* @__PURE__ */ Object.create(null), {
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
    $nextTick: (e) => e.n || (e.n = Rt.bind(e.proxy)),
    $watch: (e) => Pc.bind(e)
  })
), Ia = (e, s) => e !== wt && !e.__isScriptSetup && ft(e, s), wc = {
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
        if (l !== wt && ft(l, s))
          return u[s] = 2, l[s];
        if (ft(r, s))
          return u[s] = 3, r[s];
        if (o !== wt && ft(o, s))
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
    if (o !== wt && ft(o, s))
      return u[s] = 4, o[s];
    if (
      // global properties
      g = m.config.globalProperties, ft(g, s)
    )
      return g[s];
  },
  set({ _: e }, s, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return Ia(l, s) ? (l[s] = o, !0) : a !== wt && ft(a, s) ? (a[s] = o, !0) : ft(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (r[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: a, appContext: l, props: r, type: u }
  }, c) {
    let m;
    return !!(o[c] || e !== wt && c[0] !== "$" && ft(e, c) || Ia(s, c) || ft(r, c) || ft(a, c) || ft(on, c) || ft(l.config.globalProperties, c) || (m = u.__cssModules) && m[c]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : ft(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function Ul(e) {
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
    deactivated: C,
    beforeDestroy: S,
    beforeUnmount: z,
    destroyed: T,
    unmounted: I,
    render: M,
    renderTracked: O,
    renderTriggered: G,
    errorCaptured: E,
    serverPrefetch: L,
    // public API
    expose: ie,
    inheritAttrs: le,
    // assets
    components: Y,
    directives: K,
    filters: V
  } = s;
  if (f && kc(f, a, null), u)
    for (const Oe in u) {
      const ae = u[Oe];
      et(ae) && (a[Oe] = ae.bind(o));
    }
  if (l) {
    const Oe = l.call(o, o);
    ht(Oe) && (e.data = Qs(Oe));
  }
  if (Wa = !0, r)
    for (const Oe in r) {
      const ae = r[Oe], pe = et(ae) ? ae.bind(o, o) : et(ae.get) ? ae.get.bind(o, o) : xs, ue = !et(ae) && et(ae.set) ? ae.set.bind(o) : xs, ze = U({
        get: pe,
        set: ue
      });
      Object.defineProperty(a, Oe, {
        enumerable: !0,
        configurable: !0,
        get: () => ze.value,
        set: ($e) => ze.value = $e
      });
    }
  if (c)
    for (const Oe in c)
      dr(c[Oe], a, o, Oe);
  if (m) {
    const Oe = et(m) ? m.call(o) : m;
    Reflect.ownKeys(Oe).forEach((ae) => {
      Ic(ae, Oe[ae]);
    });
  }
  v && Ol(v, e, "c");
  function ee(Oe, ae) {
    Ye(ae) ? ae.forEach((pe) => Oe(pe.bind(o))) : ae && Oe(ae.bind(o));
  }
  if (ee(dc, g), ee(lt, _), ee(mc, h), ee(rr, w), ee(rc, x), ee(uc, C), ee(gc, E), ee(pc, O), ee(vc, G), ee(da, z), ee(Xs, I), ee(fc, L), Ye(ie))
    if (ie.length) {
      const Oe = e.exposed || (e.exposed = {});
      ie.forEach((ae) => {
        Object.defineProperty(Oe, ae, {
          get: () => o[ae],
          set: (pe) => o[ae] = pe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  M && e.render === xs && (e.render = M), le != null && (e.inheritAttrs = le), Y && (e.components = Y), K && (e.directives = K), L && lr(e);
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
    ) : r = zn(l.from || a) : r = zn(l), Bt(r) ? Object.defineProperty(s, a, {
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
    et(r) && St(l, r);
  } else if (et(e))
    St(l, e.bind(o));
  else if (ht(e))
    if (Ye(e))
      e.forEach((r) => dr(r, s, o, a));
    else {
      const r = et(e.handler) ? e.handler.bind(o) : s[e.handler];
      et(r) && St(l, r, e);
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
  beforeCreate: Wt,
  created: Wt,
  beforeMount: Wt,
  mounted: Wt,
  beforeUpdate: Wt,
  updated: Wt,
  beforeDestroy: Wt,
  beforeUnmount: Wt,
  destroyed: Wt,
  unmounted: Wt,
  activated: Wt,
  deactivated: Wt,
  errorCaptured: Wt,
  serverPrefetch: Wt,
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
    return Mt(
      et(e) ? e.call(this, this) : e,
      et(s) ? s.call(this, this) : s
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
function Wt(e, s) {
  return e ? [...new Set([].concat(e, s))] : s;
}
function Jo(e, s) {
  return e ? Mt(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function zl(e, s) {
  return e ? Ye(e) && Ye(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : Mt(
    /* @__PURE__ */ Object.create(null),
    Ul(e),
    Ul(s ?? {})
  ) : s;
}
function Cc(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = Mt(/* @__PURE__ */ Object.create(null), e);
  for (const a in s)
    o[a] = Wt(e[a], s[a]);
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
    et(a) || (a = Mt({}, a)), l != null && !ht(l) && (l = null);
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
        return u.has(v) || (v && et(v.install) ? (u.add(v), v.install(f, ...g)) : et(v) && (u.add(v), v(f, ...g))), f;
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
        const g = Mo;
        Mo = f;
        try {
          return v();
        } finally {
          Mo = g;
        }
      }
    };
    return f;
  };
}
let Mo = null;
function Ic(e, s) {
  if (Vt) {
    let o = Vt.provides;
    const a = Vt.parent && Vt.parent.provides;
    a === o && (o = Vt.provides = Object.create(a)), o[e] = s;
  }
}
function zn(e, s, o = !1) {
  const a = yl();
  if (a || Mo) {
    let l = Mo ? Mo._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && et(s) ? s.call(a && a.proxy) : s;
  }
}
const Ec = Symbol.for("v-scx"), Tc = () => zn(Ec);
function St(e, s, o) {
  return vr(e, s, o);
}
function vr(e, s, o = wt) {
  const { immediate: a, deep: l, flush: r, once: u } = o, c = Mt({}, o), m = s && a || !s && r !== "post";
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
    Gt(h, v && v.suspense);
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
  et(s) ? r = s : (r = s.handler, o = s);
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
const Rc = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${ls(s)}Modifiers`] || e[`${Js(s)}Modifiers`];
function Mc(e, s, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || wt;
  let l = o;
  const r = s.startsWith("update:"), u = r && Rc(a, s.slice(7));
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
  if (!et(e)) {
    const m = (f) => {
      const v = gr(f, s, !0);
      v && (c = !0, Mt(u, v));
    };
    !o && s.mixins.length && s.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  return !r && !c ? (ht(e) && a.set(e, null), null) : (Ye(r) ? r.forEach((m) => u[m] = null) : Mt(u, r), ht(e) && a.set(e, u), u);
}
function ma(e, s) {
  return !e || !sa(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), ft(e, s[0].toLowerCase() + s.slice(1)) || ft(e, Js(s)) || ft(e, s));
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
  } = e, C = Kn(e);
  let S, z;
  try {
    if (o.shapeFlag & 4) {
      const I = l || a, M = I;
      S = Cs(
        f.call(
          M,
          I,
          v,
          g,
          h,
          _,
          w
        )
      ), z = c;
    } else {
      const I = s;
      S = Cs(
        I.length > 1 ? I(
          g,
          { attrs: c, slots: u, emit: m }
        ) : I(
          g,
          null
        )
      ), z = s.props ? c : Lc(c);
    }
  } catch (I) {
    nn.length = 0, ra(I, e, 1), S = k(zt);
  }
  let T = S;
  if (z && x !== !1) {
    const I = Object.keys(z), { shapeFlag: M } = T;
    I.length && M & 7 && (r && I.some(el) && (z = Nc(
      z,
      r
    )), T = qs(T, z, !1, !0));
  }
  return o.dirs && (T = qs(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(o.dirs) : o.dirs), o.transition && mo(T, o.transition), S = T, Kn(C), S;
}
const Lc = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || sa(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, Nc = (e, s) => {
  const o = {};
  for (const a in e)
    (!el(a) || !(a.slice(9) in s)) && (o[a] = e[a]);
  return o;
};
function Uc(e, s, o) {
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
  } = e, c = mt(l), [m] = e.propsOptions;
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
          if (ft(r, _))
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
      !ft(s, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Js(g)) === g || !ft(s, v))) && (m ? o && // for camelCase
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
        (!s || !ft(s, g)) && (delete r[g], f = !0);
  }
  f && Rs(e.attrs, "set", "");
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
      l && ft(l, v = ls(m)) ? !r || !r.includes(v) ? o[v] = f : (c || (c = {}))[v] = f : ma(e.emitsOptions, m) || (!(m in a) || f !== a[m]) && (a[m] = f, u = !0);
    }
  if (r) {
    const m = mt(o), f = c || wt;
    for (let v = 0; v < r.length; v++) {
      const g = r[v];
      o[g] = ja(
        l,
        m,
        g,
        f[g],
        e,
        !ft(f, g)
      );
    }
  }
  return u;
}
function ja(e, s, o, a, l, r) {
  const u = e[o];
  if (u != null) {
    const c = ft(u, "default");
    if (c && a === void 0) {
      const m = u.default;
      if (u.type !== Function && !u.skipFactory && et(m)) {
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
  if (!et(e)) {
    const v = (g) => {
      m = !0;
      const [_, h] = kr(g, s, !0);
      Mt(u, _), h && c.push(...h);
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
        const _ = r[v], h = u[g] = Ye(_) || et(_) ? { type: _ } : Mt({}, _), w = h.type;
        let x = !1, C = !0;
        if (Ye(w))
          for (let S = 0; S < w.length; ++S) {
            const z = w[S], T = et(z) && z.name;
            if (T === "Boolean") {
              x = !0;
              break;
            } else T === "String" && (C = !1);
          }
        else
          x = et(w) && w.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = x, h[
          1
          /* shouldCastTrue */
        ] = C, (x || ft(h, "default")) && c.push(g);
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
    if (et(r))
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
}, Gt = qc;
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
  } = e, x = (F, X, me, Pe = null, Ie = null, Ee = null, q = void 0, A = null, Z = !!X.dynamicChildren) => {
    if (F === X)
      return;
    F && !lo(F, X) && (Pe = B(F), $e(F, Ie, Ee, !0), F = null), X.patchFlag === -2 && (Z = !1, X.dynamicChildren = null);
    const { type: ne, ref: _e, shapeFlag: Se } = X;
    switch (ne) {
      case fa:
        C(F, X, me, Pe);
        break;
      case zt:
        S(F, X, me, Pe);
        break;
      case Ta:
        F == null && z(X, me, Pe, q);
        break;
      case H:
        Y(
          F,
          X,
          me,
          Pe,
          Ie,
          Ee,
          q,
          A,
          Z
        );
        break;
      default:
        Se & 1 ? M(
          F,
          X,
          me,
          Pe,
          Ie,
          Ee,
          q,
          A,
          Z
        ) : Se & 6 ? K(
          F,
          X,
          me,
          Pe,
          Ie,
          Ee,
          q,
          A,
          Z
        ) : (Se & 64 || Se & 128) && ne.process(
          F,
          X,
          me,
          Pe,
          Ie,
          Ee,
          q,
          A,
          Z,
          Ve
        );
    }
    _e != null && Ie ? sn(_e, F && F.ref, Ee, X || F, !X) : _e == null && F && F.ref != null && sn(F.ref, null, Ee, F, !0);
  }, C = (F, X, me, Pe) => {
    if (F == null)
      a(
        X.el = c(X.children),
        me,
        Pe
      );
    else {
      const Ie = X.el = F.el;
      X.children !== F.children && f(Ie, X.children);
    }
  }, S = (F, X, me, Pe) => {
    F == null ? a(
      X.el = m(X.children || ""),
      me,
      Pe
    ) : X.el = F.el;
  }, z = (F, X, me, Pe) => {
    [F.el, F.anchor] = w(
      F.children,
      X,
      me,
      Pe,
      F.el,
      F.anchor
    );
  }, T = ({ el: F, anchor: X }, me, Pe) => {
    let Ie;
    for (; F && F !== X; )
      Ie = _(F), a(F, me, Pe), F = Ie;
    a(X, me, Pe);
  }, I = ({ el: F, anchor: X }) => {
    let me;
    for (; F && F !== X; )
      me = _(F), l(F), F = me;
    l(X);
  }, M = (F, X, me, Pe, Ie, Ee, q, A, Z) => {
    if (X.type === "svg" ? q = "svg" : X.type === "math" && (q = "mathml"), F == null)
      O(
        X,
        me,
        Pe,
        Ie,
        Ee,
        q,
        A,
        Z
      );
    else {
      const ne = F.el && F.el._isVueCE ? F.el : null;
      try {
        ne && ne._beginPatch(), L(
          F,
          X,
          Ie,
          Ee,
          q,
          A,
          Z
        );
      } finally {
        ne && ne._endPatch();
      }
    }
  }, O = (F, X, me, Pe, Ie, Ee, q, A) => {
    let Z, ne;
    const { props: _e, shapeFlag: Se, transition: oe, dirs: j } = F;
    if (Z = F.el = u(
      F.type,
      Ee,
      _e && _e.is,
      _e
    ), Se & 8 ? v(Z, F.children) : Se & 16 && E(
      F.children,
      Z,
      null,
      Pe,
      Ie,
      Ea(F, Ee),
      q,
      A
    ), j && to(F, null, Pe, "created"), G(Z, F, F.scopeId, q, Pe), _e) {
      for (const Te in _e)
        Te !== "value" && !Xo(Te) && r(Z, Te, null, _e[Te], Ee, Pe);
      "value" in _e && r(Z, "value", null, _e.value, Ee), (ne = _e.onVnodeBeforeMount) && ws(ne, Pe, F);
    }
    j && to(F, null, Pe, "beforeMount");
    const Ae = Hc(Ie, oe);
    Ae && oe.beforeEnter(Z), a(Z, X, me), ((ne = _e && _e.onVnodeMounted) || Ae || j) && Gt(() => {
      ne && ws(ne, Pe, F), Ae && oe.enter(Z), j && to(F, null, Pe, "mounted");
    }, Ie);
  }, G = (F, X, me, Pe, Ie) => {
    if (me && h(F, me), Pe)
      for (let Ee = 0; Ee < Pe.length; Ee++)
        h(F, Pe[Ee]);
    if (Ie) {
      let Ee = Ie.subTree;
      if (X === Ee || Sr(Ee.type) && (Ee.ssContent === X || Ee.ssFallback === X)) {
        const q = Ie.vnode;
        G(
          F,
          q,
          q.scopeId,
          q.slotScopeIds,
          Ie.parent
        );
      }
    }
  }, E = (F, X, me, Pe, Ie, Ee, q, A, Z = 0) => {
    for (let ne = Z; ne < F.length; ne++) {
      const _e = F[ne] = A ? Hs(F[ne]) : Cs(F[ne]);
      x(
        null,
        _e,
        X,
        me,
        Pe,
        Ie,
        Ee,
        q,
        A
      );
    }
  }, L = (F, X, me, Pe, Ie, Ee, q) => {
    const A = X.el = F.el;
    let { patchFlag: Z, dynamicChildren: ne, dirs: _e } = X;
    Z |= F.patchFlag & 16;
    const Se = F.props || wt, oe = X.props || wt;
    let j;
    if (me && so(me, !1), (j = oe.onVnodeBeforeUpdate) && ws(j, me, X, F), _e && to(X, F, me, "beforeUpdate"), me && so(me, !0), (Se.innerHTML && oe.innerHTML == null || Se.textContent && oe.textContent == null) && v(A, ""), ne ? ie(
      F.dynamicChildren,
      ne,
      A,
      me,
      Pe,
      Ea(X, Ie),
      Ee
    ) : q || ae(
      F,
      X,
      A,
      null,
      me,
      Pe,
      Ea(X, Ie),
      Ee,
      !1
    ), Z > 0) {
      if (Z & 16)
        le(A, Se, oe, me, Ie);
      else if (Z & 2 && Se.class !== oe.class && r(A, "class", null, oe.class, Ie), Z & 4 && r(A, "style", Se.style, oe.style, Ie), Z & 8) {
        const Ae = X.dynamicProps;
        for (let Te = 0; Te < Ae.length; Te++) {
          const xe = Ae[Te], Le = Se[xe], Me = oe[xe];
          (Me !== Le || xe === "value") && r(A, xe, Le, Me, Ie, me);
        }
      }
      Z & 1 && F.children !== X.children && v(A, X.children);
    } else !q && ne == null && le(A, Se, oe, me, Ie);
    ((j = oe.onVnodeUpdated) || _e) && Gt(() => {
      j && ws(j, me, X, F), _e && to(X, F, me, "updated");
    }, Pe);
  }, ie = (F, X, me, Pe, Ie, Ee, q) => {
    for (let A = 0; A < X.length; A++) {
      const Z = F[A], ne = X[A], _e = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Z.type === H || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !lo(Z, ne) || // - In the case of a component, it could contain anything.
        Z.shapeFlag & 198) ? g(Z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          me
        )
      );
      x(
        Z,
        ne,
        _e,
        null,
        Pe,
        Ie,
        Ee,
        q,
        !0
      );
    }
  }, le = (F, X, me, Pe, Ie) => {
    if (X !== me) {
      if (X !== wt)
        for (const Ee in X)
          !Xo(Ee) && !(Ee in me) && r(
            F,
            Ee,
            X[Ee],
            null,
            Ie,
            Pe
          );
      for (const Ee in me) {
        if (Xo(Ee)) continue;
        const q = me[Ee], A = X[Ee];
        q !== A && Ee !== "value" && r(F, Ee, A, q, Ie, Pe);
      }
      "value" in me && r(F, "value", X.value, me.value, Ie);
    }
  }, Y = (F, X, me, Pe, Ie, Ee, q, A, Z) => {
    const ne = X.el = F ? F.el : c(""), _e = X.anchor = F ? F.anchor : c("");
    let { patchFlag: Se, dynamicChildren: oe, slotScopeIds: j } = X;
    j && (A = A ? A.concat(j) : j), F == null ? (a(ne, me, Pe), a(_e, me, Pe), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      X.children || [],
      me,
      _e,
      Ie,
      Ee,
      q,
      A,
      Z
    )) : Se > 0 && Se & 64 && oe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    F.dynamicChildren ? (ie(
      F.dynamicChildren,
      oe,
      me,
      Ie,
      Ee,
      q,
      A
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (X.key != null || Ie && X === Ie.subTree) && gl(
      F,
      X,
      !0
      /* shallow */
    )) : ae(
      F,
      X,
      me,
      _e,
      Ie,
      Ee,
      q,
      A,
      Z
    );
  }, K = (F, X, me, Pe, Ie, Ee, q, A, Z) => {
    X.slotScopeIds = A, F == null ? X.shapeFlag & 512 ? Ie.ctx.activate(
      X,
      me,
      Pe,
      q,
      Z
    ) : V(
      X,
      me,
      Pe,
      Ie,
      Ee,
      q,
      Z
    ) : J(F, X, Z);
  }, V = (F, X, me, Pe, Ie, Ee, q) => {
    const A = F.component = td(
      F,
      Pe,
      Ie
    );
    if (ua(F) && (A.ctx.renderer = Ve), sd(A, !1, q), A.asyncDep) {
      if (Ie && Ie.registerDep(A, ee, q), !F.el) {
        const Z = A.subTree = k(zt);
        S(null, Z, X, me), F.placeholder = Z.el;
      }
    } else
      ee(
        A,
        F,
        X,
        me,
        Ie,
        Ee,
        q
      );
  }, J = (F, X, me) => {
    const Pe = X.component = F.component;
    if (Uc(F, X, me))
      if (Pe.asyncDep && !Pe.asyncResolved) {
        Oe(Pe, X, me);
        return;
      } else
        Pe.next = X, Pe.update();
    else
      X.el = F.el, Pe.vnode = X;
  }, ee = (F, X, me, Pe, Ie, Ee, q) => {
    const A = () => {
      if (F.isMounted) {
        let { next: Se, bu: oe, u: j, parent: Ae, vnode: Te } = F;
        {
          const ge = xr(F);
          if (ge) {
            Se && (Se.el = Te.el, Oe(F, Se, q)), ge.asyncDep.then(() => {
              F.isUnmounted || A();
            });
            return;
          }
        }
        let xe = Se, Le;
        so(F, !1), Se ? (Se.el = Te.el, Oe(F, Se, q)) : Se = Te, oe && On(oe), (Le = Se.props && Se.props.onVnodeBeforeUpdate) && ws(Le, Ae, Se, Te), so(F, !0);
        const Me = Vl(F), Q = F.subTree;
        F.subTree = Me, x(
          Q,
          Me,
          // parent may have changed if it's in a teleport
          g(Q.el),
          // anchor may have changed if it's in a fragment
          B(Q),
          F,
          Ie,
          Ee
        ), Se.el = Me.el, xe === null && Oc(F, Me.el), j && Gt(j, Ie), (Le = Se.props && Se.props.onVnodeUpdated) && Gt(
          () => ws(Le, Ae, Se, Te),
          Ie
        );
      } else {
        let Se;
        const { el: oe, props: j } = X, { bm: Ae, m: Te, parent: xe, root: Le, type: Me } = F, Q = Ro(X);
        so(F, !1), Ae && On(Ae), !Q && (Se = j && j.onVnodeBeforeMount) && ws(Se, xe, X), so(F, !0);
        {
          Le.ce && // @ts-expect-error _def is private
          Le.ce._def.shadowRoot !== !1 && Le.ce._injectChildStyle(Me);
          const ge = F.subTree = Vl(F);
          x(
            null,
            ge,
            me,
            Pe,
            F,
            Ie,
            Ee
          ), X.el = ge.el;
        }
        if (Te && Gt(Te, Ie), !Q && (Se = j && j.onVnodeMounted)) {
          const ge = X;
          Gt(
            () => ws(Se, xe, ge),
            Ie
          );
        }
        (X.shapeFlag & 256 || xe && Ro(xe.vnode) && xe.vnode.shapeFlag & 256) && F.a && Gt(F.a, Ie), F.isMounted = !0, X = me = Pe = null;
      }
    };
    F.scope.on();
    const Z = F.effect = new Ri(A);
    F.scope.off();
    const ne = F.update = Z.run.bind(Z), _e = F.job = Z.runIfDirty.bind(Z);
    _e.i = F, _e.id = F.uid, Z.scheduler = () => dl(_e), so(F, !0), ne();
  }, Oe = (F, X, me) => {
    X.component = F;
    const Pe = F.vnode.props;
    F.vnode = X, F.next = null, zc(F, X.props, Pe, me), Wc(F, X.children, me), Ns(), Tl(F), Us();
  }, ae = (F, X, me, Pe, Ie, Ee, q, A, Z = !1) => {
    const ne = F && F.children, _e = F ? F.shapeFlag : 0, Se = X.children, { patchFlag: oe, shapeFlag: j } = X;
    if (oe > 0) {
      if (oe & 128) {
        ue(
          ne,
          Se,
          me,
          Pe,
          Ie,
          Ee,
          q,
          A,
          Z
        );
        return;
      } else if (oe & 256) {
        pe(
          ne,
          Se,
          me,
          Pe,
          Ie,
          Ee,
          q,
          A,
          Z
        );
        return;
      }
    }
    j & 8 ? (_e & 16 && de(ne, Ie, Ee), Se !== ne && v(me, Se)) : _e & 16 ? j & 16 ? ue(
      ne,
      Se,
      me,
      Pe,
      Ie,
      Ee,
      q,
      A,
      Z
    ) : de(ne, Ie, Ee, !0) : (_e & 8 && v(me, ""), j & 16 && E(
      Se,
      me,
      Pe,
      Ie,
      Ee,
      q,
      A,
      Z
    ));
  }, pe = (F, X, me, Pe, Ie, Ee, q, A, Z) => {
    F = F || Eo, X = X || Eo;
    const ne = F.length, _e = X.length, Se = Math.min(ne, _e);
    let oe;
    for (oe = 0; oe < Se; oe++) {
      const j = X[oe] = Z ? Hs(X[oe]) : Cs(X[oe]);
      x(
        F[oe],
        j,
        me,
        null,
        Ie,
        Ee,
        q,
        A,
        Z
      );
    }
    ne > _e ? de(
      F,
      Ie,
      Ee,
      !0,
      !1,
      Se
    ) : E(
      X,
      me,
      Pe,
      Ie,
      Ee,
      q,
      A,
      Z,
      Se
    );
  }, ue = (F, X, me, Pe, Ie, Ee, q, A, Z) => {
    let ne = 0;
    const _e = X.length;
    let Se = F.length - 1, oe = _e - 1;
    for (; ne <= Se && ne <= oe; ) {
      const j = F[ne], Ae = X[ne] = Z ? Hs(X[ne]) : Cs(X[ne]);
      if (lo(j, Ae))
        x(
          j,
          Ae,
          me,
          null,
          Ie,
          Ee,
          q,
          A,
          Z
        );
      else
        break;
      ne++;
    }
    for (; ne <= Se && ne <= oe; ) {
      const j = F[Se], Ae = X[oe] = Z ? Hs(X[oe]) : Cs(X[oe]);
      if (lo(j, Ae))
        x(
          j,
          Ae,
          me,
          null,
          Ie,
          Ee,
          q,
          A,
          Z
        );
      else
        break;
      Se--, oe--;
    }
    if (ne > Se) {
      if (ne <= oe) {
        const j = oe + 1, Ae = j < _e ? X[j].el : Pe;
        for (; ne <= oe; )
          x(
            null,
            X[ne] = Z ? Hs(X[ne]) : Cs(X[ne]),
            me,
            Ae,
            Ie,
            Ee,
            q,
            A,
            Z
          ), ne++;
      }
    } else if (ne > oe)
      for (; ne <= Se; )
        $e(F[ne], Ie, Ee, !0), ne++;
    else {
      const j = ne, Ae = ne, Te = /* @__PURE__ */ new Map();
      for (ne = Ae; ne <= oe; ne++) {
        const Be = X[ne] = Z ? Hs(X[ne]) : Cs(X[ne]);
        Be.key != null && Te.set(Be.key, ne);
      }
      let xe, Le = 0;
      const Me = oe - Ae + 1;
      let Q = !1, ge = 0;
      const he = new Array(Me);
      for (ne = 0; ne < Me; ne++) he[ne] = 0;
      for (ne = j; ne <= Se; ne++) {
        const Be = F[ne];
        if (Le >= Me) {
          $e(Be, Ie, Ee, !0);
          continue;
        }
        let We;
        if (Be.key != null)
          We = Te.get(Be.key);
        else
          for (xe = Ae; xe <= oe; xe++)
            if (he[xe - Ae] === 0 && lo(Be, X[xe])) {
              We = xe;
              break;
            }
        We === void 0 ? $e(Be, Ie, Ee, !0) : (he[We - Ae] = ne + 1, We >= ge ? ge = We : Q = !0, x(
          Be,
          X[We],
          me,
          null,
          Ie,
          Ee,
          q,
          A,
          Z
        ), Le++);
      }
      const Ke = Q ? Kc(he) : Eo;
      for (xe = Ke.length - 1, ne = Me - 1; ne >= 0; ne--) {
        const Be = Ae + ne, We = X[Be], Xe = X[Be + 1], qe = Be + 1 < _e ? (
          // #13559, fallback to el placeholder for unresolved async component
          Xe.el || Xe.placeholder
        ) : Pe;
        he[ne] === 0 ? x(
          null,
          We,
          me,
          qe,
          Ie,
          Ee,
          q,
          A,
          Z
        ) : Q && (xe < 0 || ne !== Ke[xe] ? ze(We, me, qe, 2) : xe--);
      }
    }
  }, ze = (F, X, me, Pe, Ie = null) => {
    const { el: Ee, type: q, transition: A, children: Z, shapeFlag: ne } = F;
    if (ne & 6) {
      ze(F.component.subTree, X, me, Pe);
      return;
    }
    if (ne & 128) {
      F.suspense.move(X, me, Pe);
      return;
    }
    if (ne & 64) {
      q.move(F, X, me, Ve);
      return;
    }
    if (q === H) {
      a(Ee, X, me);
      for (let Se = 0; Se < Z.length; Se++)
        ze(Z[Se], X, me, Pe);
      a(F.anchor, X, me);
      return;
    }
    if (q === Ta) {
      T(F, X, me);
      return;
    }
    if (Pe !== 2 && ne & 1 && A)
      if (Pe === 0)
        A.beforeEnter(Ee), a(Ee, X, me), Gt(() => A.enter(Ee), Ie);
      else {
        const { leave: Se, delayLeave: oe, afterLeave: j } = A, Ae = () => {
          F.ctx.isUnmounted ? l(Ee) : a(Ee, X, me);
        }, Te = () => {
          Ee._isLeaving && Ee[Ts](
            !0
            /* cancelled */
          ), Se(Ee, () => {
            Ae(), j && j();
          });
        };
        oe ? oe(Ee, Ae, Te) : Te();
      }
    else
      a(Ee, X, me);
  }, $e = (F, X, me, Pe = !1, Ie = !1) => {
    const {
      type: Ee,
      props: q,
      ref: A,
      children: Z,
      dynamicChildren: ne,
      shapeFlag: _e,
      patchFlag: Se,
      dirs: oe,
      cacheIndex: j
    } = F;
    if (Se === -2 && (Ie = !1), A != null && (Ns(), sn(A, null, me, F, !0), Us()), j != null && (X.renderCache[j] = void 0), _e & 256) {
      X.ctx.deactivate(F);
      return;
    }
    const Ae = _e & 1 && oe, Te = !Ro(F);
    let xe;
    if (Te && (xe = q && q.onVnodeBeforeUnmount) && ws(xe, X, F), _e & 6)
      W(F.component, me, Pe);
    else {
      if (_e & 128) {
        F.suspense.unmount(me, Pe);
        return;
      }
      Ae && to(F, null, X, "beforeUnmount"), _e & 64 ? F.type.remove(
        F,
        X,
        me,
        Ve,
        Pe
      ) : ne && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ne.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Ee !== H || Se > 0 && Se & 64) ? de(
        ne,
        X,
        me,
        !1,
        !0
      ) : (Ee === H && Se & 384 || !Ie && _e & 16) && de(Z, X, me), Pe && ke(F);
    }
    (Te && (xe = q && q.onVnodeUnmounted) || Ae) && Gt(() => {
      xe && ws(xe, X, F), Ae && to(F, null, X, "unmounted");
    }, me);
  }, ke = (F) => {
    const { type: X, el: me, anchor: Pe, transition: Ie } = F;
    if (X === H) {
      ce(me, Pe);
      return;
    }
    if (X === Ta) {
      I(F);
      return;
    }
    const Ee = () => {
      l(me), Ie && !Ie.persisted && Ie.afterLeave && Ie.afterLeave();
    };
    if (F.shapeFlag & 1 && Ie && !Ie.persisted) {
      const { leave: q, delayLeave: A } = Ie, Z = () => q(me, Ee);
      A ? A(F.el, Ee, Z) : Z();
    } else
      Ee();
  }, ce = (F, X) => {
    let me;
    for (; F !== X; )
      me = _(F), l(F), F = me;
    l(X);
  }, W = (F, X, me) => {
    const { bum: Pe, scope: Ie, job: Ee, subTree: q, um: A, m: Z, a: ne } = F;
    Wl(Z), Wl(ne), Pe && On(Pe), Ie.stop(), Ee && (Ee.flags |= 8, $e(q, F, X, me)), A && Gt(A, X), Gt(() => {
      F.isUnmounted = !0;
    }, X);
  }, de = (F, X, me, Pe = !1, Ie = !1, Ee = 0) => {
    for (let q = Ee; q < F.length; q++)
      $e(F[q], X, me, Pe, Ie);
  }, B = (F) => {
    if (F.shapeFlag & 6)
      return B(F.component.subTree);
    if (F.shapeFlag & 128)
      return F.suspense.next();
    const X = _(F.anchor || F.el), me = X && X[Qi];
    return me ? _(me) : X;
  };
  let N = !1;
  const re = (F, X, me) => {
    F == null ? X._vnode && $e(X._vnode, null, null, !0) : x(
      X._vnode || null,
      F,
      X,
      null,
      null,
      null,
      me
    ), X._vnode = F, N || (N = !0, Tl(), qi(), N = !1);
  }, Ve = {
    p: x,
    um: $e,
    m: ze,
    r: ke,
    mt: V,
    mc: E,
    pc: ae,
    pbc: ie,
    n: B,
    o: e
  };
  return {
    render: re,
    hydrate: void 0,
    createApp: Sc(re)
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
let Zt = null;
function n(e = !1) {
  nn.push(Zt = e ? null : []);
}
function Yc() {
  nn.pop(), Zt = nn[nn.length - 1] || null;
}
let vn = 1;
function Jn(e, s = !1) {
  vn += e, e < 0 && Zt && s && (Zt.hasOnce = !0);
}
function Ir(e) {
  return e.dynamicChildren = vn > 0 ? Zt || Eo : null, Yc(), vn > 0 && Zt && Zt.push(e), e;
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
function D(e, s, o, a, l) {
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
}) => (typeof e == "number" && (e = "" + e), e != null ? It(e) || Bt(e) || et(e) ? { i: Nt, r: e, k: s, f: !!o } : e : null);
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
    ctx: Nt
  };
  return c ? (hl(m, o), r & 128 && e.normalize(m)) : o && (m.shapeFlag |= It(o) ? 8 : 16), vn > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  Zt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && Zt.push(m), m;
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
    return o && hl(c, o), vn > 0 && !r && Zt && (c.shapeFlag & 6 ? Zt[Zt.indexOf(e)] = c : Zt.push(c)), c.patchFlag = -2, c;
  }
  if (id(e) && (e = e.__vccOpts), s) {
    s = Qc(s);
    let { class: c, style: m } = s;
    c && !It(c) && (s.class = Ne(c)), ht(m) && (cl(m) && !Ye(m) && (m = Mt({}, m)), s.style = Ft(m));
  }
  const u = It(e) ? 1 : Sr(e) ? 128 : Xi(e) ? 64 : ht(e) ? 4 : et(e) ? 2 : 0;
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
  return e ? cl(e) || wr(e) ? Mt({}, e) : e : null;
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
function $(e = " ", s = 0) {
  return k(fa, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (n(), D(zt, null, e)) : k(zt, null, e);
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
      !l && !wr(s) ? s._ctx = Nt : l === 3 && Nt && (Nt.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else et(s) ? (s = { default: s, _ctx: Nt }, o = 32) : (s = String(s), a & 64 ? (o = 16, s = [$(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function Xc(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        s.class !== a.class && (s.class = Ne([s.class, a.class]));
      else if (l === "style")
        s.style = Ft([s.style, a.style]);
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
  return r.ctx = { _: r }, r.root = s ? s.root : r, r.emit = Mc.bind(null, r), e.ce && e.ce(r), r;
}
let Vt = null;
const yl = () => Vt || Nt;
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
    Ns();
    const l = e.setupContext = a.length > 1 ? ad(e) : null, r = bn(e), u = kn(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), c = Ci(u);
    if (Us(), r(), (c || e.sp) && !Ro(e) && lr(e), c) {
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
  et(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : ht(s) && (e.setupState = ji(s)), Pr(e);
}
function Pr(e, s, o) {
  const a = e.type;
  e.render || (e.render = a.render || xs);
  {
    const l = bn(e);
    Ns();
    try {
      _c(e);
    } finally {
      Us(), l();
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
  return et(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function id(e) {
  return et(e) && "__vccOpts" in e;
}
const U = (e, s) => Zu(e, s, gn);
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
const Rr = Ka ? (e) => Ka.createHTML(e) : (e) => e, ud = "http://www.w3.org/2000/svg", cd = "http://www.w3.org/1998/Math/MathML", Es = typeof document < "u" ? document : null, Kl = Es && /* @__PURE__ */ Es.createElement("template"), dd = {
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
      Kl.innerHTML = Rr(
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
}, Bs = "transition", Bo = "animation", No = Symbol("_vtc"), Mr = {
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
}, Dr = /* @__PURE__ */ Mt(
  {},
  sr,
  Mr
), md = (e) => (e.displayName = "Transition", e.props = Dr, e), fd = /* @__PURE__ */ md(
  (e, { slots: s }) => Ao(ic, Lr(e), s)
), oo = (e, s = []) => {
  Ye(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, ql = (e) => e ? Ye(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function Lr(e) {
  const s = {};
  for (const Y in e)
    Y in Mr || (s[Y] = e[Y]);
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
  } = e, w = vd(l), x = w && w[0], C = w && w[1], {
    onBeforeEnter: S,
    onEnter: z,
    onEnterCancelled: T,
    onLeave: I,
    onLeaveCancelled: M,
    onBeforeAppear: O = S,
    onAppear: G = z,
    onAppearCancelled: E = T
  } = s, L = (Y, K, V, J) => {
    Y._enterCancelled = J, Ws(Y, K ? v : c), Ws(Y, K ? f : u), V && V();
  }, ie = (Y, K) => {
    Y._isLeaving = !1, Ws(Y, g), Ws(Y, h), Ws(Y, _), K && K();
  }, le = (Y) => (K, V) => {
    const J = Y ? G : z, ee = () => L(K, Y, V);
    oo(J, [K, ee]), Yl(() => {
      Ws(K, Y ? m : r), ks(K, Y ? v : c), ql(J) || Jl(K, a, x, ee);
    });
  };
  return Mt(s, {
    onBeforeEnter(Y) {
      oo(S, [Y]), ks(Y, r), ks(Y, u);
    },
    onBeforeAppear(Y) {
      oo(O, [Y]), ks(Y, m), ks(Y, f);
    },
    onEnter: le(!1),
    onAppear: le(!0),
    onLeave(Y, K) {
      Y._isLeaving = !0;
      const V = () => ie(Y, K);
      ks(Y, g), Y._enterCancelled ? (ks(Y, _), qa(Y)) : (qa(Y), ks(Y, _)), Yl(() => {
        Y._isLeaving && (Ws(Y, g), ks(Y, h), ql(I) || Jl(Y, a, C, V));
      }), oo(I, [Y, V]);
    },
    onEnterCancelled(Y) {
      L(Y, !1, void 0, !0), oo(T, [Y]);
    },
    onAppearCancelled(Y) {
      L(Y, !0, void 0, !0), oo(E, [Y]);
    },
    onLeaveCancelled(Y) {
      ie(Y), oo(M, [Y]);
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
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[No] || (e[No] = /* @__PURE__ */ new Set())).add(s);
}
function Ws(e, s) {
  s.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const o = e[No];
  o && (o.delete(s), o.size || (e[No] = void 0));
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
  const { type: u, timeout: c, propCount: m } = Nr(e, s);
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
function Nr(e, s) {
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
  const a = e[No];
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
const ti = ["Webkit", "Moz", "ms"], Ra = {};
function kd(e, s) {
  const o = Ra[s];
  if (o)
    return o;
  let a = ls(s);
  if (a !== "filter" && a in e)
    return Ra[s] = a;
  a = na(a);
  for (let l = 0; l < ti.length; l++) {
    const r = ti[l] + a;
    if (r in e)
      return Ra[s] = r;
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
    o != null && (e[s] = s === "innerHTML" ? Rr(o) : o);
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
let Ma = 0;
const xd = /* @__PURE__ */ Promise.resolve(), Sd = () => Ma || (xd.then(() => Ma = 0), Ma = Date.now());
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
    return !!(s === "innerHTML" || s === "textContent" || s in e && ii(s) && et(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return ii(s) && It(o) ? !1 : s in e;
}
const Ur = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ new WeakMap(), Xn = Symbol("_moveCb"), ri = Symbol("_enterCb"), Rd = (e) => (delete e.props.mode, e), Md = /* @__PURE__ */ Rd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Mt({}, Dr, {
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
      l.forEach(Ld), l.forEach(Nd);
      const c = l.filter(Ud);
      qa(o.vnode.el), c.forEach((m) => {
        const f = m.el, v = f.style;
        ks(f, u), v.transform = v.webkitTransform = v.transitionDuration = "";
        const g = f[Xn] = (_) => {
          _ && _.target !== f || (!_ || _.propertyName.endsWith("transform")) && (f.removeEventListener("transitionend", g), f[Xn] = null, Ws(f, u));
        };
        f.addEventListener("transitionend", g);
      }), l = [];
    }), () => {
      const u = mt(e), c = Lr(u);
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
          ), Ur.set(v, {
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
}), Dd = Md;
function Ld(e) {
  const s = e.el;
  s[Xn] && s[Xn](), s[ri] && s[ri]();
}
function Nd(e) {
  Or.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function Ud(e) {
  const s = Ur.get(e), o = Or.get(e), a = s.left - o.left, l = s.top - o.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function Od(e, s, o) {
  const a = e.cloneNode(), l = e[No];
  l && l.forEach((c) => {
    c.split(/\s+/).forEach((m) => m && a.classList.remove(m));
  }), o.split(/\s+/).forEach((c) => c && a.classList.add(c)), a.style.display = "none";
  const r = s.nodeType === 1 ? s : s.parentNode;
  r.appendChild(a);
  const { hasTransform: u } = Nr(a);
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
const es = {
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
      const a = e._modelValue, l = Uo(e), r = e.checked, u = e[ns];
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
      e[ns](Uo(e));
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
        (u) => o ? aa(Uo(u)) : Uo(u)
      );
      e[ns](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Rt(() => {
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
      const u = e.options[l], c = Uo(u);
      if (o)
        if (a) {
          const m = typeof c;
          m === "string" || m === "number" ? u.selected = s.some((f) => String(f) === String(c)) : u.selected = ol(s, c) > -1;
        } else
          u.selected = s.has(c);
      else if (co(Uo(u), s)) {
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
function Ar(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
}
const pa = {
  created(e, s, o) {
    Rn(e, s, o, null, "created");
  },
  mounted(e, s, o) {
    Rn(e, s, o, null, "mounted");
  },
  beforeUpdate(e, s, o, a) {
    Rn(e, s, o, a, "beforeUpdate");
  },
  updated(e, s, o, a) {
    Rn(e, s, o, a, "updated");
  }
};
function zd(e, s) {
  switch (e) {
    case "SELECT":
      return Ss;
    case "TEXTAREA":
      return es;
    default:
      switch (s) {
        case "checkbox":
          return hn;
        case "radio":
          return ds;
        default:
          return es;
      }
  }
}
function Rn(e, s, o, a, l) {
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
}, Wd = /* @__PURE__ */ Mt({ patchProp: Td }, dd);
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
    !et(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
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
}, Xd = /* @__PURE__ */ be({
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
}), Ce = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of s)
    o[a] = l;
  return o;
}, Kt = /* @__PURE__ */ Ce(Xd, [["__scopeId", "data-v-21565df9"]]), Zd = {
  key: 0,
  class: "panel-title-prefix"
}, em = {
  key: 1,
  class: "panel-title-prefix-theme"
}, tm = /* @__PURE__ */ be({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (n(), D(fl(`h${e.level}`), {
      class: Ne(["panel-title", e.variant])
    }, {
      default: p(() => [
        e.showPrefix ? (n(), i("span", Zd, d(e.prefix), 1)) : (n(), i("span", em)),
        nt(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), sm = /* @__PURE__ */ Ce(tm, [["__scopeId", "data-v-c3875efc"]]), om = ["title"], nm = ["width", "height"], am = /* @__PURE__ */ be({
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
}), zr = /* @__PURE__ */ Ce(am, [["__scopeId", "data-v-6fc7f16d"]]), lm = { class: "header-left" }, im = {
  key: 0,
  class: "header-actions"
}, rm = /* @__PURE__ */ be({
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
      class: Ne(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", lm, [
        k(sm, { "show-prefix": e.showPrefix }, {
          default: p(() => [
            $(d(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), D(zr, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (n(), i("div", im, [
        nt(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), qt = /* @__PURE__ */ Ce(rm, [["__scopeId", "data-v-55a62cd6"]]), um = {
  key: 0,
  class: "section-title-count"
}, cm = {
  key: 1,
  class: "section-title-icon"
}, dm = /* @__PURE__ */ be({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (n(), D(fl(`h${e.level}`), {
      class: Ne(["section-title", { clickable: e.clickable }]),
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
}), Xt = /* @__PURE__ */ Ce(dm, [["__scopeId", "data-v-559361eb"]]), mm = { class: "status-grid" }, fm = { class: "status-grid__columns" }, vm = { class: "status-grid__column" }, pm = { class: "status-grid__title" }, gm = { class: "status-grid__column status-grid__column--right" }, hm = { class: "status-grid__title" }, ym = {
  key: 0,
  class: "status-grid__footer"
}, wm = /* @__PURE__ */ be({
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
}), _m = /* @__PURE__ */ Ce(wm, [["__scopeId", "data-v-73b7ba3f"]]), km = {
  key: 0,
  class: "status-item__icon"
}, bm = {
  key: 1,
  class: "status-item__count"
}, $m = { class: "status-item__label" }, Cm = /* @__PURE__ */ be({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, o = U(() => `status-item--${s.variant}`);
    return (a, l) => (n(), i("div", {
      class: Ne(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (n(), i("span", km, d(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (n(), i("span", bm, d(e.count), 1)) : y("", !0),
      t("span", $m, d(e.label), 1)
    ], 2));
  }
}), _s = /* @__PURE__ */ Ce(Cm, [["__scopeId", "data-v-6f929183"]]), xm = { class: "issue-card__header" }, Sm = { class: "issue-card__icon" }, Im = { class: "issue-card__title" }, Em = {
  key: 0,
  class: "issue-card__content"
}, Tm = {
  key: 0,
  class: "issue-card__description"
}, Pm = {
  key: 1,
  class: "issue-card__items"
}, Rm = {
  key: 2,
  class: "issue-card__actions"
}, Mm = /* @__PURE__ */ be({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const s = e, o = U(() => `issue-card--${s.severity}`);
    return (a, l) => (n(), i("div", {
      class: Ne(["issue-card", o.value])
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
        (n(!0), i(H, null, ye(e.items, (r, u) => (n(), i("div", {
          key: u,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, d(r), 1)
        ]))), 128))
      ])) : y("", !0),
      a.$slots.actions ? (n(), i("div", Rm, [
        nt(a.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), cs = /* @__PURE__ */ Ce(Mm, [["__scopeId", "data-v-df6aa348"]]), Dm = ["type", "disabled"], Lm = {
  key: 0,
  class: "spinner"
}, Nm = /* @__PURE__ */ be({
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
      class: Ne(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", Lm)) : y("", !0),
      e.loading ? y("", !0) : nt(s.$slots, "default", { key: 1 }, void 0)
    ], 10, Dm));
  }
}), we = /* @__PURE__ */ Ce(Nm, [["__scopeId", "data-v-772abe47"]]), Um = { class: "empty-state" }, Om = {
  key: 0,
  class: "empty-icon"
}, Am = { class: "empty-message" }, zm = /* @__PURE__ */ be({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (n(), i("div", Um, [
      e.icon ? (n(), i("div", Om, d(e.icon), 1)) : y("", !0),
      t("p", Am, d(e.message), 1),
      e.actionLabel ? (n(), D(we, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => s.$emit("action"))
      }, {
        default: p(() => [
          $(d(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), gs = /* @__PURE__ */ Ce(zm, [["__scopeId", "data-v-4466284f"]]), Vm = /* @__PURE__ */ be({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Ne(["detail-label"]),
      style: Ft({ minWidth: e.minWidth })
    }, [
      nt(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), Bn = /* @__PURE__ */ Ce(Vm, [["__scopeId", "data-v-75e9eeb8"]]), Fm = /* @__PURE__ */ be({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Ne(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      nt(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Ya = /* @__PURE__ */ Ce(Fm, [["__scopeId", "data-v-2f186e4c"]]), Bm = { class: "detail-row" }, Wm = /* @__PURE__ */ be({
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
          $(d(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (n(), D(Ya, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: p(() => [
          $(d(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : nt(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), $t = /* @__PURE__ */ Ce(Wm, [["__scopeId", "data-v-ef15664a"]]), Gm = { class: "modal-header" }, jm = { class: "modal-body" }, Hm = { class: "status-section" }, Km = {
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
}, Pf = { class: "change-group-header" }, Rf = { class: "change-group-title" }, Mf = { class: "change-list" }, Df = { class: "node-name" }, Lf = {
  key: 0,
  class: "dev-badge"
}, Nf = {
  key: 1,
  class: "change-group"
}, Uf = { class: "change-group-header" }, Of = { class: "change-group-title" }, Af = { class: "change-list" }, zf = { class: "node-name" }, Vf = {
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
}, vv = { class: "modal-actions" }, pv = /* @__PURE__ */ be({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = b(!1);
    lt(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), St(() => s.show, (_, h) => {
      console.log("StatusDetailModal show prop changed from", h, "to", _);
    }, { immediate: !0 });
    const a = U(() => {
      var _, h, w;
      return ((w = (h = (_ = s.status) == null ? void 0 : _.workflows) == null ? void 0 : h.analyzed) == null ? void 0 : w.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), l = U(() => {
      var _, h, w;
      return ((w = (h = (_ = s.status) == null ? void 0 : _.workflows) == null ? void 0 : h.analyzed) == null ? void 0 : w.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), r = U(() => {
      var _, h, w;
      return ((w = (h = (_ = s.status) == null ? void 0 : _.workflows) == null ? void 0 : h.synced) == null ? void 0 : w.filter((x) => {
        var S, z, T;
        const C = (T = (z = (S = s.status) == null ? void 0 : S.workflows) == null ? void 0 : z.analyzed) == null ? void 0 : T.find((I) => I.name === x);
        return !C || C.status !== "broken";
      })) || [];
    }), u = U(() => {
      var _, h, w, x, C;
      return (_ = s.status) != null && _.workflows ? (((h = s.status.workflows.new) == null ? void 0 : h.length) ?? 0) > 0 || (((w = s.status.workflows.modified) == null ? void 0 : w.length) ?? 0) > 0 || (((x = s.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || (((C = s.status.workflows.synced) == null ? void 0 : C.length) ?? 0) > 0 : !1;
    }), c = U(() => {
      var h, w, x;
      const _ = (h = s.status) == null ? void 0 : h.git_changes;
      return _ ? (((w = _.nodes_added) == null ? void 0 : w.length) ?? 0) > 0 || (((x = _.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), m = U(() => {
      var _, h, w, x, C, S;
      return !u.value && !c.value && ((h = (_ = s.status) == null ? void 0 : _.comparison) == null ? void 0 : h.is_synced) && (((w = s.status) == null ? void 0 : w.missing_models_count) ?? 0) === 0 && (((S = (C = (x = s.status) == null ? void 0 : x.comparison) == null ? void 0 : C.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
    }), f = U(() => {
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
      var w, x, C, S, z, T, I, M, O, G, E, L, ie, le, Y, K, V, J, ee, Oe, ae, pe;
      return n(), D(Ut, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: h[7] || (h[7] = (ue) => _.$emit("close"))
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
                onClick: h[0] || (h[0] = (ue) => _.$emit("close"))
              }, "✕")
            ]),
            t("div", jm, [
              t("div", Hm, [
                k(Xt, { level: "4" }, {
                  default: p(() => [...h[9] || (h[9] = [
                    $("BRANCH", -1)
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
                  k(Xt, { level: "4" }, {
                    default: p(() => [...h[10] || (h[10] = [
                      $("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: h[1] || (h[1] = (ue) => _.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", Ym, [
                  t("div", Jm, [
                    h[11] || (h[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Qm, "BROKEN (COMMITTED) (" + d(a.value.length) + ")", 1)
                  ]),
                  t("div", Xm, [
                    (n(!0), i(H, null, ye(a.value, (ue) => (n(), i("div", {
                      key: ue.name,
                      class: "workflow-item"
                    }, [
                      t("span", Zm, d(ue.name), 1),
                      t("span", ef, d(ue.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (n(), i("div", tf, [
                  t("div", sf, [
                    h[12] || (h[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", of, "BROKEN (UNCOMMITTED) (" + d(l.value.length) + ")", 1)
                  ]),
                  t("div", nf, [
                    (n(!0), i(H, null, ye(l.value, (ue) => (n(), i("div", {
                      key: ue.name,
                      class: "workflow-item"
                    }, [
                      t("span", af, d(ue.name), 1),
                      t("span", lf, d(ue.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = (w = e.status.workflows) == null ? void 0 : w.new) != null && x.length ? (n(), i("div", rf, [
                  t("div", uf, [
                    h[13] || (h[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", cf, "NEW (" + d(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", df, [
                    (n(!0), i(H, null, ye(e.status.workflows.new, (ue) => (n(), i("div", {
                      key: ue,
                      class: "workflow-item"
                    }, [
                      t("span", mf, d(ue), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = (C = e.status.workflows) == null ? void 0 : C.modified) != null && S.length ? (n(), i("div", ff, [
                  t("div", vf, [
                    h[14] || (h[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", pf, "MODIFIED (" + d(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", gf, [
                    (n(!0), i(H, null, ye(e.status.workflows.modified, (ue) => (n(), i("div", {
                      key: ue,
                      class: "workflow-item"
                    }, [
                      t("span", hf, d(ue), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (T = (z = e.status.workflows) == null ? void 0 : z.deleted) != null && T.length ? (n(), i("div", yf, [
                  t("div", wf, [
                    h[15] || (h[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", _f, "DELETED (" + d(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", kf, [
                    (n(!0), i(H, null, ye(e.status.workflows.deleted, (ue) => (n(), i("div", {
                      key: ue,
                      class: "workflow-item"
                    }, [
                      t("span", bf, d(ue), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (n(), i("div", $f, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: h[2] || (h[2] = (ue) => o.value = !o.value)
                  }, [
                    h[16] || (h[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", Cf, "SYNCED (" + d(r.value.length) + ")", 1),
                    t("span", xf, d(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", Sf, [
                    (n(!0), i(H, null, ye(r.value, (ue) => (n(), i("div", {
                      key: ue,
                      class: "workflow-item"
                    }, [
                      t("span", If, d(ue), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              c.value ? (n(), i("div", Ef, [
                k(Xt, { level: "4" }, {
                  default: p(() => [...h[17] || (h[17] = [
                    $("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (M = (I = e.status.git_changes) == null ? void 0 : I.nodes_added) != null && M.length ? (n(), i("div", Tf, [
                  t("div", Pf, [
                    h[18] || (h[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", Rf, "NODES ADDED (" + d(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", Mf, [
                    (n(!0), i(H, null, ye(e.status.git_changes.nodes_added, (ue) => (n(), i("div", {
                      key: v(ue),
                      class: "change-item"
                    }, [
                      t("span", Df, d(v(ue)), 1),
                      g(ue) ? (n(), i("span", Lf, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (G = (O = e.status.git_changes) == null ? void 0 : O.nodes_removed) != null && G.length ? (n(), i("div", Nf, [
                  t("div", Uf, [
                    h[19] || (h[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", Of, "NODES REMOVED (" + d(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", Af, [
                    (n(!0), i(H, null, ye(e.status.git_changes.nodes_removed, (ue) => (n(), i("div", {
                      key: v(ue),
                      class: "change-item"
                    }, [
                      t("span", zf, d(v(ue)), 1),
                      g(ue) ? (n(), i("span", Vf, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = e.status.git_changes) != null && E.workflow_changes ? (n(), i("div", Ff, [
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
                (L = e.status.git_changes) != null && L.has_other_changes ? (n(), i("div", jf, [...h[21] || (h[21] = [
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
              (ie = e.status.comparison) != null && ie.is_synced ? y("", !0) : (n(), i("div", Hf, [
                t("div", Kf, [
                  k(Xt, { level: "4" }, {
                    default: p(() => [...h[22] || (h[22] = [
                      $("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: h[3] || (h[3] = (ue) => _.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                h[26] || (h[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (Y = (le = e.status.comparison) == null ? void 0 : le.missing_nodes) != null && Y.length ? (n(), i("div", qf, [
                  k($t, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Yf, [
                    (n(!0), i(H, null, ye(e.status.comparison.missing_nodes.slice(0, 10), (ue) => (n(), i("div", {
                      key: ue,
                      class: "drift-list-item"
                    }, " - " + d(ue), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", Jf, " ... and " + d(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (V = (K = e.status.comparison) == null ? void 0 : K.extra_nodes) != null && V.length ? (n(), i("div", Qf, [
                  k($t, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", Xf, [
                    (n(!0), i(H, null, ye(e.status.comparison.extra_nodes.slice(0, 10), (ue) => (n(), i("div", {
                      key: ue,
                      class: "drift-list-item"
                    }, " - " + d(ue), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", Zf, " ... and " + d(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (ee = (J = e.status.comparison) == null ? void 0 : J.version_mismatches) != null && ee.length ? (n(), i("div", ev, [
                  k($t, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", tv, [
                    (n(!0), i(H, null, ye(e.status.comparison.version_mismatches.slice(0, 10), (ue) => (n(), i("div", {
                      key: ue.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      $(d(ue.name) + ": ", 1),
                      t("span", sv, d(ue.actual), 1),
                      h[23] || (h[23] = $(" → ", -1)),
                      t("span", ov, d(ue.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", nv, " ... and " + d(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((Oe = e.status.comparison) == null ? void 0 : Oe.packages_in_sync) === !1 ? (n(), i("div", av, [
                  k($t, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", lv, [
                  k(we, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: h[4] || (h[4] = (ue) => _.$emit("repair"))
                  }, {
                    default: p(() => [...h[24] || (h[24] = [
                      $(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  h[25] || (h[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (pe = (ae = e.status.comparison) == null ? void 0 : ae.disabled_nodes) != null && pe.length ? (n(), i("div", iv, [
                k(Xt, { level: "4" }, {
                  default: p(() => [...h[27] || (h[27] = [
                    $("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", rv, [
                  h[28] || (h[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, d(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", uv, [
                  (n(!0), i(H, null, ye(e.status.comparison.disabled_nodes.slice(0, 10), (ue) => (n(), i("div", {
                    key: ue,
                    class: "drift-list-item"
                  }, " • " + d(ue), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (n(), i("div", cv, " ... and " + d(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (n(), i("div", dv, [
                k(Xt, { level: "4" }, {
                  default: p(() => [...h[29] || (h[29] = [
                    $("MISSING MODELS", -1)
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
              k(we, {
                variant: "secondary",
                onClick: h[5] || (h[5] = (ue) => _.$emit("close"))
              }, {
                default: p(() => [...h[33] || (h[33] = [
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
}), gv = /* @__PURE__ */ Ce(pv, [["__scopeId", "data-v-e2b37122"]]), hv = { class: "health-section-header" }, yv = { class: "suggestions-content" }, wv = { class: "suggestions-text" }, _v = { style: { "margin-top": "var(--cg-space-3)" } }, kv = {
  key: 1,
  class: "no-issues-text"
}, bv = /* @__PURE__ */ be({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = b(!1), r = b(!1);
    function u() {
      l.value = !0;
    }
    function c() {
      l.value = !1, f("view-workflows");
    }
    function m() {
      l.value = !1, f("view-nodes");
    }
    const f = o, v = b(!1), g = b(!1);
    function _() {
      g.value = !0, f("repair-environment");
    }
    function h() {
      g.value = !1;
    }
    function w() {
      l.value = !1;
    }
    const x = U(() => {
      const ce = a.status.workflows.analyzed || [], W = ce.filter(
        (de) => de.unresolved_models_count > 0 || de.ambiguous_models_count > 0
      );
      return W.length === 0 && a.status.missing_models_count > 0 ? ce.filter((de) => de.sync_state === "synced") : W;
    });
    function C() {
      const ce = x.value;
      ce.length !== 0 && (v.value = !0, f("repair-missing-models", ce.map((W) => W.name)));
    }
    function S() {
      v.value = !1;
    }
    s({ resetRepairingState: S, resetRepairingEnvironmentState: h, closeDetailModal: w });
    const z = U(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), T = U(() => a.status.has_changes), I = U(() => {
      const ce = a.status.git_changes;
      return ce.nodes_added.length > 0 || ce.nodes_removed.length > 0 || ce.workflow_changes;
    }), M = U(() => a.status.has_changes || z.value), O = U(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), G = U(() => a.status.git_changes.has_other_changes), E = U(() => {
      var ce;
      return ((ce = a.status.workflows.analyzed) == null ? void 0 : ce.filter((W) => W.status === "broken")) || [];
    }), L = U(() => {
      var ce;
      return ((ce = a.status.workflows.analyzed) == null ? void 0 : ce.filter(
        (W) => W.has_path_sync_issues && !W.has_issues
      )) || [];
    }), ie = U(() => E.value.length > 0);
    function le(ce) {
      const W = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const de of W) {
        const B = ce.match(de);
        if (B != null && B[1])
          return B[1];
      }
      return null;
    }
    function Y(ce) {
      const W = ce.map(le).filter((de) => !!de);
      return [...new Set(W)];
    }
    function K(ce) {
      if (ce.length === 0) return "";
      if (ce.length === 1) return ` (>= ${ce[0]})`;
      const W = ce.slice(0, 2).map((B) => `>= ${B}`).join(", "), de = ce.length > 2;
      return ` (${W}${de ? ", ..." : ""})`;
    }
    function V(ce) {
      return ce.replace(/uninstallable node mappings?/gi, (W) => W.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function J(ce) {
      const W = V(ce.issue_summary || "Has issues"), de = /(?:>=|v?\d+\.\d+)/i.test(W), B = Y(ce.version_gated_guidance || []);
      return (ce.nodes_version_gated_count || 0) > 0 && B.length > 0 && !de ? `${ce.name} — ${W} (needs ComfyUI ${B.map((N) => `>= ${N}`).join(", ")})` : `${ce.name} — ${W}`;
    }
    const ee = U(() => E.value.reduce(
      (ce, W) => ce + (W.nodes_version_gated_count || 0),
      0
    )), Oe = U(() => {
      const ce = E.value.flatMap(
        (W) => Y(W.version_gated_guidance || [])
      );
      return [...new Set(ce)];
    }), ae = U(() => E.value.reduce(
      (ce, W) => ce + (W.nodes_uninstallable_count || 0),
      0
    )), pe = U(() => {
      const ce = [];
      return ee.value > 0 && ce.push(
        `${ee.value} require newer ComfyUI${K(Oe.value)}`
      ), ae.value > 0 && ce.push(`${ae.value} need community packages`), ce.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${ce.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), ue = U(() => ie.value || L.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), ze = U(() => {
      const ce = [];
      return a.status.workflows.new.length > 0 && ce.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && ce.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && ce.push(`${a.status.workflows.deleted.length} deleted`), ce.length > 0 ? `${ce.join(", ")} workflow${ce.length === 1 && !ce[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), $e = U(() => {
      var de, B;
      const ce = [], W = a.status.comparison;
      return (de = W.missing_nodes) != null && de.length && ce.push(`${W.missing_nodes.length} missing node${W.missing_nodes.length === 1 ? "" : "s"}`), (B = W.extra_nodes) != null && B.length && ce.push(`${W.extra_nodes.length} untracked node${W.extra_nodes.length === 1 ? "" : "s"}`), ce.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${ce.join(" and ")}.`;
    }), ke = U(() => {
      var de, B;
      const ce = [], W = a.status.comparison;
      return (de = W.extra_nodes) != null && de.length && (W.extra_nodes.slice(0, 3).forEach((N) => {
        ce.push(`Untracked: ${N}`);
      }), W.extra_nodes.length > 3 && ce.push(`...and ${W.extra_nodes.length - 3} more untracked`)), (B = W.missing_nodes) != null && B.length && (W.missing_nodes.slice(0, 3).forEach((N) => {
        ce.push(`Missing: ${N}`);
      }), W.missing_nodes.length > 3 && ce.push(`...and ${W.missing_nodes.length - 3} more missing`)), ce;
    });
    return (ce, W) => (n(), i(H, null, [
      k(Kt, null, {
        header: p(() => [
          k(qt, { title: "STATUS" })
        ]),
        content: p(() => [
          a.setupState === "no_workspace" ? (n(), D(cs, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: p(() => [
              k(we, {
                variant: "primary",
                size: "sm",
                onClick: W[0] || (W[0] = (de) => ce.$emit("start-setup"))
              }, {
                default: p(() => [...W[13] || (W[13] = [
                  $(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (n(), D(cs, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: p(() => [
              k(we, {
                variant: "primary",
                size: "sm",
                onClick: W[1] || (W[1] = (de) => ce.$emit("view-environments"))
              }, {
                default: p(() => [...W[14] || (W[14] = [
                  $(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (n(), D(cs, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: p(() => [
              k(we, {
                variant: "primary",
                size: "sm",
                onClick: W[2] || (W[2] = (de) => ce.$emit("create-environment"))
              }, {
                default: p(() => [...W[15] || (W[15] = [
                  $(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: W[4] || (W[4] = (de) => r.value = !0),
            onMouseleave: W[5] || (W[5] = (de) => r.value = !1)
          }, [
            t("div", hv, [
              k(Xt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: p(() => [...W[16] || (W[16] = [
                  $(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              k(fd, { name: "fade" }, {
                default: p(() => [
                  r.value ? (n(), D(we, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: p(() => [...W[17] || (W[17] = [
                      $(" Show All ", -1)
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
                e.status.workflows.new.length ? (n(), D(_s, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (n(), D(_s, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (n(), D(_s, {
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
                  separator: z.value
                }, null, 8, ["count", "separator"])
              ]),
              right: p(() => [
                e.status.git_changes.nodes_added.length ? (n(), D(_s, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (n(), D(_s, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (n(), D(_s, {
                  key: 2,
                  icon: "●",
                  count: O.value,
                  label: O.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                G.value ? (n(), D(_s, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                T.value && !I.value && !G.value ? (n(), D(_s, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                T.value ? y("", !0) : (n(), D(_s, {
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
                fn: p(() => [
                  W[19] || (W[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", yv, [
                    t("span", wv, d(ze.value), 1),
                    k(we, {
                      variant: "primary",
                      size: "sm",
                      onClick: W[3] || (W[3] = (de) => ce.$emit("commit-changes"))
                    }, {
                      default: p(() => [...W[18] || (W[18] = [
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
          e.status.is_detached_head ? (n(), D(cs, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: p(() => [
              k(we, {
                variant: "primary",
                size: "sm",
                onClick: W[6] || (W[6] = (de) => ce.$emit("create-branch"))
              }, {
                default: p(() => [...W[20] || (W[20] = [
                  $(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", _v, [
            k(Xt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: p(() => [...W[21] || (W[21] = [
                $(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ue.value ? (n(), i(H, { key: 0 }, [
              E.value.length > 0 ? (n(), D(cs, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} can't run`,
                description: pe.value,
                items: E.value.map(J)
              }, {
                actions: p(() => [
                  k(we, {
                    variant: "primary",
                    size: "sm",
                    onClick: W[7] || (W[7] = (de) => ce.$emit("view-workflows"))
                  }, {
                    default: p(() => [...W[22] || (W[22] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              L.value.length > 0 ? (n(), D(cs, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${L.value.length} workflow${L.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: L.value.map((de) => `${de.name} — ${de.models_needing_path_sync_count} model path${de.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: p(() => [
                  k(we, {
                    variant: "primary",
                    size: "sm",
                    onClick: W[8] || (W[8] = (de) => ce.$emit("view-workflows"))
                  }, {
                    default: p(() => [...W[23] || (W[23] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !ie.value ? (n(), D(cs, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: p(() => [
                  k(we, {
                    variant: "primary",
                    size: "sm",
                    disabled: v.value,
                    onClick: C
                  }, {
                    default: p(() => [
                      $(d(v.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  k(we, {
                    variant: "secondary",
                    size: "sm",
                    onClick: W[9] || (W[9] = (de) => ce.$emit("view-workflows"))
                  }, {
                    default: p(() => [...W[24] || (W[24] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (n(), D(cs, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: $e.value,
                items: ke.value
              }, {
                actions: p(() => [
                  k(we, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: p(() => [...W[25] || (W[25] = [
                      $(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  k(we, {
                    variant: "primary",
                    size: "sm",
                    onClick: W[10] || (W[10] = (de) => ce.$emit("view-nodes"))
                  }, {
                    default: p(() => [...W[26] || (W[26] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (n(), D(cs, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: p(() => [
                  k(we, {
                    variant: "primary",
                    size: "sm",
                    onClick: W[11] || (W[11] = (de) => ce.$emit("view-nodes"))
                  }, {
                    default: p(() => [...W[27] || (W[27] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : M.value ? (n(), i("span", kv, "No issues")) : (n(), D(gs, {
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
        onClose: W[12] || (W[12] = (de) => l.value = !1),
        onNavigateWorkflows: c,
        onNavigateNodes: m,
        onRepair: _
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), $v = /* @__PURE__ */ Ce(bv, [["__scopeId", "data-v-df52ba90"]]), Cv = ["type", "value", "placeholder", "disabled"], xv = /* @__PURE__ */ be({
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
    const a = e, l = o, r = b(null);
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
      class: Ne(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: u,
      onKeyup: [
        m[0] || (m[0] = as((f) => c.$emit("enter"), ["enter"])),
        m[1] || (m[1] = as((f) => c.$emit("escape"), ["escape"]))
      ],
      onFocus: m[2] || (m[2] = (f) => c.$emit("focus")),
      onBlur: m[3] || (m[3] = (f) => c.$emit("blur"))
    }, null, 42, Cv));
  }
}), an = /* @__PURE__ */ Ce(xv, [["__scopeId", "data-v-0380d08f"]]), Sv = { class: "branch-create-form" }, Iv = { class: "form-actions" }, Ev = /* @__PURE__ */ be({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, a = b(""), l = U(() => {
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
        k(we, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: r
        }, {
          default: p(() => [...m[1] || (m[1] = [
            $(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        k(we, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: p(() => [...m[2] || (m[2] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Tv = /* @__PURE__ */ Ce(Ev, [["__scopeId", "data-v-7c500394"]]), Pv = { class: "branch-list-item__indicator" }, Rv = { class: "branch-list-item__name" }, Mv = {
  key: 0,
  class: "branch-list-item__actions"
}, Dv = {
  key: 0,
  class: "branch-list-item__current-label"
}, Lv = /* @__PURE__ */ be({
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
      class: Ne(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, [
      t("span", Pv, d(e.isCurrent ? "●" : "○"), 1),
      t("span", Rv, d(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (n(), i("div", Mv, [
        nt(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", Dv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Nv = /* @__PURE__ */ Ce(Lv, [["__scopeId", "data-v-c6581a24"]]), YL = Qs({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const JL = [
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
], QL = {
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
}, Uv = [
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
], XL = [
  ...Uv,
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
  const e = b(!1), s = b(null);
  async function o(te, Re) {
    var Dt;
    if (!((Dt = window.app) != null && Dt.api))
      throw new Error("ComfyUI API not available");
    const je = await window.app.api.fetchApi(te, Re);
    if (!je.ok) {
      const us = await je.json().catch(() => ({}));
      throw new Error(us.error || us.message || `Request failed: ${je.status}`);
    }
    const kt = await je.text();
    if (kt)
      return JSON.parse(kt);
  }
  async function a(te = !1) {
    return o(te ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(te, Re = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: te, allow_issues: Re })
    });
  }
  async function r(te = 10, Re = 0) {
    return o(`/v2/comfygit/log?limit=${te}&offset=${Re}`);
  }
  async function u(te, Re = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(te)}&limit=${Re}`);
  }
  async function c(te) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: te })
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
  async function v(te) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: te, force: !0 })
    });
  }
  async function g() {
    return o("/v2/comfygit/branches");
  }
  async function _(te) {
    return o(`/v2/comfygit/commit/${te}`);
  }
  async function h(te, Re = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: te, force: Re })
    });
  }
  async function w(te, Re = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: te, start_point: Re })
    });
  }
  async function x(te, Re = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: te, force: Re })
    });
  }
  async function C(te, Re = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(te)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: Re })
    });
  }
  async function S() {
    try {
      return await o("/v2/comfygit/environments");
    } catch {
      try {
        const te = await a();
        return {
          environments: [{
            name: te.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + te.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: te.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: te.branch
          }],
          current: te.environment,
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
  async function z() {
    return (await S()).environments;
  }
  async function T(te) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(te)}`);
    } catch {
      return null;
    }
  }
  async function I(te, Re) {
    const je = { target_env: te };
    return Re && (je.workspace_path = Re), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(je)
    });
  }
  async function M() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function O(te) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(te)
    });
  }
  async function G() {
    return o("/v2/workspace/environments/create_status");
  }
  async function E(te = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${te}`);
  }
  async function L(te) {
    return o(`/v2/workspace/environments/${te}`, {
      method: "DELETE"
    });
  }
  async function ie(te = !1) {
    try {
      return o(te ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const Re = await a(te), je = [];
      return Re.workflows.new.forEach((kt) => {
        je.push({
          name: kt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: kt
        });
      }), Re.workflows.modified.forEach((kt) => {
        je.push({
          name: kt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: kt
        });
      }), Re.workflows.synced.forEach((kt) => {
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
  async function le(te) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(te)}/details`);
  }
  async function Y(te) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(te)}/contract`);
  }
  async function K(te, Re) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(te)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Re)
    });
  }
  async function V(te) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(te)}/contract`, {
      method: "DELETE"
    });
  }
  async function J(te) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(te)}/resolve`, {
      method: "POST"
    });
  }
  async function ee(te, Re, je) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(te)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: Re, install_models: je })
    });
  }
  async function Oe(te, Re, je) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(te)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: Re, importance: je })
    });
  }
  async function ae() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function pe() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function ue(te) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(te)}`);
  }
  async function ze(te) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: te })
    });
  }
  async function $e(te, Re) {
    return o(`/v2/workspace/models/${te}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Re })
    });
  }
  async function ke(te, Re) {
    return o(`/v2/workspace/models/${te}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Re })
    });
  }
  async function ce(te) {
    return o(`/v2/workspace/models/${te}`, {
      method: "DELETE"
    });
  }
  async function W(te) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(te)
    });
  }
  async function de() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function B() {
    return o("/v2/workspace/models/directory");
  }
  async function N(te) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: te })
    });
  }
  async function re(te) {
    const Re = new URLSearchParams({ url: te });
    return o(`/v2/workspace/huggingface/repo-info?${Re}`);
  }
  async function Ve() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function Fe(te, Re = 10) {
    const je = new URLSearchParams({ query: te, limit: String(Re) });
    return o(`/v2/workspace/huggingface/search?${je}`);
  }
  async function F(te) {
    try {
      const Re = te ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(te)}` : "/v2/comfygit/config";
      return o(Re);
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
  async function X(te, Re) {
    const je = Re ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(Re)}` : "/v2/comfygit/config";
    return o(je, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(te)
    });
  }
  async function me(te, Re) {
    try {
      const je = new URLSearchParams();
      return te && je.append("level", te), Re && je.append("lines", Re.toString()), o(`/v2/comfygit/debug/logs?${je}`);
    } catch {
      return [];
    }
  }
  async function Pe(te, Re) {
    try {
      const je = new URLSearchParams();
      return te && je.append("level", te), Re && je.append("lines", Re.toString()), o(`/v2/workspace/debug/logs?${je}`);
    } catch {
      return [];
    }
  }
  async function Ie() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function Ee() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function q(te, Re) {
    try {
      const je = new URLSearchParams();
      return te && je.append("level", te), Re && je.append("lines", Re.toString()), o(`/v2/workspace/debug/orchestrator-logs?${je}`);
    } catch {
      return [];
    }
  }
  async function A() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function Z(te) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: te })
    });
  }
  async function ne() {
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
  async function _e(te) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(te)}/track-dev`, {
      method: "POST"
    });
  }
  async function Se(te) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(te)}/install`, {
      method: "POST"
    });
  }
  async function oe(te, Re) {
    var Fs, Je, _a, Cl;
    const je = Ov(), kt = ((Je = (Fs = window.app) == null ? void 0 : Fs.api) == null ? void 0 : Je.clientId) ?? ((Cl = (_a = window.app) == null ? void 0 : _a.api) == null ? void 0 : Cl.initialClientId) ?? "comfygit-panel", Dt = {
      id: te.id,
      version: te.version || te.selected_version || "latest",
      selected_version: te.selected_version || "latest",
      mode: te.mode || "remote",
      channel: te.channel || "default"
    };
    return te.install_source && (Dt.install_source = te.install_source), te.install_source === "git" && te.repository && (Dt.repository = te.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Dt,
        ui_id: je,
        client_id: kt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", je, "for package:", te.id), Re != null && Re.beforeQueueStart && await Re.beforeQueueStart(je), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: je };
  }
  async function j(te) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(te)}/update`, {
      method: "POST"
    });
  }
  async function Ae(te) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(te)}`, {
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
  async function xe(te, Re) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: te, url: Re })
    });
  }
  async function Le(te) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(te)}`, {
      method: "DELETE"
    });
  }
  async function Me(te, Re, je) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(te)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: Re, push_url: je })
    });
  }
  async function Q(te, Re) {
    const je = {};
    return Re && (je["X-Git-Auth-Token"] = Re), o(`/v2/comfygit/remotes/${encodeURIComponent(te)}/fetch`, {
      method: "POST",
      headers: je
    });
  }
  async function ge(te) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(te)}/status`);
    } catch {
      return null;
    }
  }
  async function he(te = "skip", Re = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: te,
        remove_extra_nodes: Re
      })
    });
  }
  async function Ke(te, Re) {
    const je = Re ? `/v2/comfygit/remotes/${encodeURIComponent(te)}/pull-preview?branch=${encodeURIComponent(Re)}` : `/v2/comfygit/remotes/${encodeURIComponent(te)}/pull-preview`;
    return o(je);
  }
  async function Be(te, Re = {}) {
    const je = { "Content-Type": "application/json" };
    return Re.authToken && (je["X-Git-Auth-Token"] = Re.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(te)}/pull`, {
      method: "POST",
      headers: je,
      body: JSON.stringify({
        model_strategy: Re.modelStrategy || "skip",
        force: Re.force || !1,
        resolutions: Re.resolutions
      })
    });
  }
  async function We(te, Re) {
    const je = Re ? `/v2/comfygit/remotes/${encodeURIComponent(te)}/push-preview?branch=${encodeURIComponent(Re)}` : `/v2/comfygit/remotes/${encodeURIComponent(te)}/push-preview`;
    return o(je);
  }
  async function Xe(te, Re = {}) {
    const je = { "Content-Type": "application/json" };
    return Re.authToken && (je["X-Git-Auth-Token"] = Re.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(te)}/push`, {
      method: "POST",
      headers: je,
      body: JSON.stringify({ force: Re.force || !1 })
    });
  }
  async function qe(te, Re) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(te)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: Re })
    });
  }
  async function dt(te) {
    const Re = {
      success: 0,
      failed: []
    };
    for (const je of te)
      try {
        await J(je), Re.success++;
      } catch (kt) {
        Re.failed.push({
          name: je,
          error: kt instanceof Error ? kt.message : "Unknown error"
        });
      }
    return Re;
  }
  async function ct(te) {
    var kt;
    const Re = new FormData();
    if (Re.append("file", te), !((kt = window.app) != null && kt.api))
      throw new Error("ComfyUI API not available");
    const je = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: Re
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!je.ok) {
      const Dt = await je.json().catch(() => ({}));
      throw new Error(Dt.error || `Preview failed: ${je.status}`);
    }
    return je.json();
  }
  async function vt(te) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(te)}`
    );
  }
  async function Pt(te, Re, je, kt) {
    var Fs;
    const Dt = new FormData();
    if (Dt.append("file", te), Dt.append("name", Re), Dt.append("model_strategy", je), Dt.append("torch_backend", kt), !((Fs = window.app) != null && Fs.api))
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
  async function Ot(te) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: te })
    });
  }
  async function fe(te, Re, je, kt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: te,
        name: Re,
        model_strategy: je,
        torch_backend: kt
      })
    });
  }
  async function P() {
    return o("/v2/setup/status");
  }
  async function R() {
    return o("/v2/comfygit/update-check");
  }
  async function Ue() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function tt(te) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(te)
    });
  }
  async function pt() {
    return o("/v2/setup/initialize_status");
  }
  async function st(te) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(te)
    });
  }
  async function xt() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function Et() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function Ge(te, Re) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: te, save_key: Re })
    });
  }
  async function is() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function ys(te) {
    const Re = te ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(te)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(Re);
  }
  async function vo(te) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(te)
    });
  }
  async function po() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function go(te) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(te)}`, {
      method: "DELETE"
    });
  }
  async function Zs(te) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(te)}/stop`, {
      method: "POST"
    });
  }
  async function ho(te) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(te)}/start`, {
      method: "POST"
    });
  }
  async function yo(te) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(te)}/status`);
  }
  async function wo(te) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: te })
    });
  }
  async function _o(te = !1) {
    return o(te ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function ko() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function ha() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function ya(te) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(te)
    });
  }
  async function wa(te) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(te)}`, {
      method: "DELETE"
    });
  }
  async function xn(te) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(te)
    });
  }
  async function ve() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function se(te) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(te)}/info`);
  }
  async function He(te) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(te)}/instances`);
  }
  async function Qe(te, Re) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(te)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Re)
    });
  }
  async function yt(te, Re) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(te)}/instances/${encodeURIComponent(Re)}/start`, {
      method: "POST"
    });
  }
  async function Tt(te, Re) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(te)}/instances/${encodeURIComponent(Re)}/stop`, {
      method: "POST"
    });
  }
  async function rs(te, Re) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(te)}/instances/${encodeURIComponent(Re)}`, {
      method: "DELETE"
    });
  }
  async function eo(te) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: te })
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
    deleteBranch: C,
    // Environment Management
    listEnvironments: S,
    getEnvironments: z,
    getEnvironmentDetails: T,
    switchEnvironment: I,
    getSwitchProgress: M,
    createEnvironment: O,
    getCreateProgress: G,
    getComfyUIReleases: E,
    deleteEnvironment: L,
    // Workflow Management
    getWorkflows: ie,
    getWorkflowDetails: le,
    getWorkflowContract: Y,
    saveWorkflowContract: K,
    deleteWorkflowContract: V,
    resolveWorkflow: J,
    installWorkflowDeps: ee,
    setModelImportance: Oe,
    // Model Management
    getEnvironmentModels: ae,
    getWorkspaceModels: pe,
    getModelDetails: ue,
    openFileLocation: ze,
    addModelSource: $e,
    removeModelSource: ke,
    deleteModel: ce,
    downloadModel: W,
    scanWorkspaceModels: de,
    getModelsDirectory: B,
    setModelsDirectory: N,
    getHuggingFaceRepoInfo: re,
    getModelsSubdirectories: Ve,
    searchHuggingFaceRepos: Fe,
    // Settings
    getConfig: F,
    updateConfig: X,
    // Debug/Logs
    getEnvironmentLogs: me,
    getWorkspaceLogs: Pe,
    getEnvironmentLogPath: Ie,
    getWorkspaceLogPath: Ee,
    getOrchestratorLogs: q,
    getOrchestratorLogPath: A,
    openFile: Z,
    // Node Management
    getNodes: ne,
    trackNodeAsDev: _e,
    installNode: Se,
    queueNodeInstall: oe,
    updateNode: j,
    uninstallNode: Ae,
    // Git Remotes
    getRemotes: Te,
    addRemote: xe,
    removeRemote: Le,
    updateRemoteUrl: Me,
    fetchRemote: Q,
    getRemoteSyncStatus: ge,
    // Push/Pull
    getPullPreview: Ke,
    pullFromRemote: Be,
    getPushPreview: We,
    pushToRemote: Xe,
    validateMerge: qe,
    // Environment Sync
    syncEnvironmentManually: he,
    // Workflow Repair
    repairWorkflowModels: dt,
    // Import Operations
    previewTarballImport: ct,
    previewGitImport: Ot,
    validateEnvironmentName: vt,
    executeImport: Pt,
    executeGitImport: fe,
    getImportProgress: ts,
    // First-Time Setup
    getSetupStatus: P,
    // Manager Update Notice
    getUpdateCheck: R,
    updateManager: Ue,
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
    scanForWorkers: ve,
    getWorkerSystemInfo: se,
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
}, Gv = /* @__PURE__ */ be({
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
    }), (u, c) => (n(), D(Ut, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Ne(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
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
}), Ct = /* @__PURE__ */ Ce(Gv, [["__scopeId", "data-v-8dab1081"]]), jv = ["type", "disabled"], Hv = {
  key: 0,
  class: "spinner"
}, Kv = /* @__PURE__ */ be({
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
      class: Ne(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", Hv)) : y("", !0),
      nt(s.$slots, "default", {}, void 0)
    ], 10, jv));
  }
}), De = /* @__PURE__ */ Ce(Kv, [["__scopeId", "data-v-f3452606"]]), qv = { class: "commit-list" }, Yv = /* @__PURE__ */ be({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (n(), i("div", qv, [
      nt(s.$slots, "default", {}, void 0)
    ]));
  }
}), Vr = /* @__PURE__ */ Ce(Yv, [["__scopeId", "data-v-8c5ee761"]]), Jv = { class: "commit-hash" }, Qv = /* @__PURE__ */ be({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = U(() => s.hash.slice(0, s.length));
    return (a, l) => (n(), i("span", Jv, d(o.value), 1));
  }
}), Fr = /* @__PURE__ */ Ce(Qv, [["__scopeId", "data-v-7c333cc6"]]), Xv = { class: "commit-message" }, Zv = { class: "commit-date" }, ep = /* @__PURE__ */ be({
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
      class: Ne(["commit-item", { clickable: e.clickable }]),
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
}), Br = /* @__PURE__ */ Ce(ep, [["__scopeId", "data-v-dd7c621b"]]), tp = { class: "header-info" }, sp = { class: "branch-name" }, op = {
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
}, up = /* @__PURE__ */ be({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const s = e, { getBranchHistory: o } = ut(), a = b([]), l = b(!1), r = b(!0);
    return lt(async () => {
      try {
        const u = await o(s.branchName, 50);
        a.value = u.commits, l.value = u.has_more;
      } finally {
        r.value = !1;
      }
    }), (u, c) => (n(), D(Ct, {
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
        k(De, {
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
        r.value ? (n(), i("div", ip, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", rp, " No commits found on this branch ")) : (n(), D(Vr, {
          key: 2,
          class: "branch-commits"
        }, {
          default: p(() => [
            (n(!0), i(H, null, ye(a.value, (m) => (n(), D(Br, {
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
        e.isCurrent ? y("", !0) : (n(), D(we, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: c[1] || (c[1] = (m) => u.$emit("delete", e.branchName))
        }, {
          default: p(() => [...c[6] || (c[6] = [
            $(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        c[8] || (c[8] = t("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? y("", !0) : (n(), D(De, {
          key: 1,
          variant: "primary",
          onClick: c[2] || (c[2] = (m) => u.$emit("switch", e.branchName))
        }, {
          default: p(() => [...c[7] || (c[7] = [
            $(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), cp = /* @__PURE__ */ Ce(up, [["__scopeId", "data-v-2e5437cc"]]), dp = {
  key: 2,
  class: "branch-list"
}, mp = /* @__PURE__ */ be({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: s }) {
    const o = s, a = b(!1), l = b(null);
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
    return (v, g) => (n(), D(Kt, null, {
      header: p(() => [
        k(qt, { title: "BRANCHES" }, {
          actions: p(() => [
            a.value ? y("", !0) : (n(), D(we, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: g[0] || (g[0] = (_) => a.value = !0)
            }, {
              default: p(() => [...g[2] || (g[2] = [
                $(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: p(() => [
        a.value ? (n(), D(Tv, {
          key: 0,
          onCreate: r,
          onCancel: u
        })) : y("", !0),
        e.branches.length === 0 ? (n(), D(gs, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (n(), i("div", dp, [
          (n(!0), i(H, null, ye(e.branches, (_) => (n(), D(Nv, {
            key: _.name,
            "branch-name": _.name,
            "is-current": _.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (h) => c(_)
          }, {
            actions: p(() => [
              _.is_current ? y("", !0) : (n(), D(we, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: gt((h) => o("switch", _.name), ["stop"])
              }, {
                default: p(() => [...g[3] || (g[3] = [
                  $(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (n(), D(cp, {
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
}), fp = /* @__PURE__ */ Ce(mp, [["__scopeId", "data-v-eefdcb00"]]), vp = /* @__PURE__ */ be({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    const s = e, o = U(() => `HISTORY (${s.currentRef || "detached"})`);
    return (a, l) => (n(), D(Kt, null, {
      header: p(() => [
        k(qt, { title: o.value }, null, 8, ["title"])
      ]),
      content: p(() => [
        e.commits.length === 0 ? (n(), D(gs, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), D(Vr, { key: 1 }, {
          default: p(() => [
            (n(!0), i(H, null, ye(e.commits, (r) => (n(), D(Br, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (u) => a.$emit("select", r)
            }, {
              actions: p(() => [
                k(we, {
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
}), pp = /* @__PURE__ */ Ce(vp, [["__scopeId", "data-v-62a5d9da"]]);
async function Mn(e, s) {
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
      return await Mn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await Mn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await Mn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await Mn("/v2/comfygit/orchestrator/kill", { method: "POST" });
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
}, yp = /* @__PURE__ */ be({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (n(), D(fl(`h${e.level}`), {
      class: Ne(["base-title", e.variant])
    }, {
      default: p(() => [
        nt(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", hp, "(" + d(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ls = /* @__PURE__ */ Ce(yp, [["__scopeId", "data-v-5a01561d"]]), wp = ["value", "disabled"], _p = {
  key: 0,
  value: "",
  disabled: ""
}, kp = ["value"], bp = {
  key: 0,
  class: "base-select-error"
}, $p = /* @__PURE__ */ be({
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
      class: Ne(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Ne(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => a.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (n(), i("option", _p, d(e.placeholder), 1)) : y("", !0),
        (n(!0), i(H, null, ye(e.options, (r) => (n(), i("option", {
          key: s(r),
          value: s(r)
        }, d(o(r)), 9, kp))), 128))
      ], 42, wp),
      e.error ? (n(), i("span", bp, d(e.error), 1)) : y("", !0)
    ], 2));
  }
}), uo = /* @__PURE__ */ Ce($p, [["__scopeId", "data-v-4996bfe0"]]), Cp = { class: "popover-header" }, xp = { class: "popover-title" }, Sp = { class: "popover-content" }, Ip = {
  key: 0,
  class: "popover-actions"
}, Ep = /* @__PURE__ */ be({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (n(), D(Ut, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Ft({ maxWidth: e.maxWidth }),
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
}), hs = /* @__PURE__ */ Ce(Ep, [["__scopeId", "data-v-42815ace"]]), Tp = { class: "detail-section" }, Pp = {
  key: 0,
  class: "empty-message"
}, Rp = { class: "model-header" }, Mp = { class: "model-name" }, Dp = { class: "model-details" }, Lp = { class: "model-row" }, Np = { class: "model-row" }, Up = { class: "label" }, Op = {
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
}, tg = /* @__PURE__ */ be({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: u, queueNodeInstall: c } = ut(), m = b(null), f = b(!1), v = b(null), g = b(!1), _ = b({}), h = b(!1), w = b(/* @__PURE__ */ new Set()), x = b(/* @__PURE__ */ new Set()), C = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(V) {
      switch (V) {
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
    function z(V) {
      switch (V) {
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
    function T(V) {
      switch (V) {
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
    function I(V) {
      switch (V) {
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
    function M(V) {
      switch (V) {
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
    function O(V) {
      if (!V.loaded_by || V.loaded_by.length === 0) return [];
      const J = V.hash || V.filename;
      return w.value.has(J) ? V.loaded_by : V.loaded_by.slice(0, 3);
    }
    function G(V) {
      return w.value.has(V);
    }
    function E(V) {
      w.value.has(V) ? w.value.delete(V) : w.value.add(V), w.value = new Set(w.value);
    }
    async function L() {
      f.value = !0, v.value = null;
      try {
        m.value = await l(o.workflowName);
      } catch (V) {
        v.value = V instanceof Error ? V.message : "Failed to load workflow details";
      } finally {
        f.value = !1;
      }
    }
    function ie(V, J) {
      _.value[V] = J, g.value = !0;
    }
    async function le(V) {
      try {
        await u(V);
      } catch (J) {
        v.value = J instanceof Error ? J.message : "Failed to open file location";
      }
    }
    async function Y(V) {
      if (V.package_id)
        try {
          const J = V.latest_version || "latest";
          await c({
            id: V.package_id,
            version: J,
            selected_version: J,
            mode: "remote",
            channel: "default"
          }), x.value.add(V.package_id);
        } catch (J) {
          v.value = J instanceof Error ? J.message : "Failed to queue node install";
        }
    }
    async function K() {
      if (!g.value) {
        a("close");
        return;
      }
      f.value = !0, v.value = null;
      try {
        for (const [V, J] of Object.entries(_.value))
          await r(o.workflowName, V, J);
        a("refresh"), a("close");
      } catch (V) {
        v.value = V instanceof Error ? V.message : "Failed to save changes";
      } finally {
        f.value = !1;
      }
    }
    return lt(L), (V, J) => (n(), i(H, null, [
      k(Ct, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: f.value,
        error: v.value || void 0,
        onClose: J[4] || (J[4] = (ee) => a("close"))
      }, {
        body: p(() => [
          m.value ? (n(), i(H, { key: 0 }, [
            t("section", Tp, [
              k(Ls, { variant: "section" }, {
                default: p(() => [
                  $("MODELS USED (" + d(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (n(), i("div", Pp, " No models used in this workflow ")) : y("", !0),
              (n(!0), i(H, null, ye(m.value.models, (ee) => {
                var Oe;
                return n(), i("div", {
                  key: ee.hash || ee.filename,
                  class: "model-card"
                }, [
                  t("div", Rp, [
                    J[6] || (J[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", Mp, d(ee.filename), 1)
                  ]),
                  t("div", Dp, [
                    t("div", Lp, [
                      J[7] || (J[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Ne(["value", S(ee.status)])
                      }, d(z(ee.status)), 3)
                    ]),
                    t("div", Np, [
                      t("span", Up, [
                        J[8] || (J[8] = $(" Importance: ", -1)),
                        k(zr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: J[0] || (J[0] = (ae) => h.value = !0)
                        })
                      ]),
                      k(uo, {
                        "model-value": _.value[ee.filename] || ee.importance,
                        options: C,
                        "onUpdate:modelValue": (ae) => ie(ee.filename, ae)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    ee.loaded_by && ee.loaded_by.length > 0 ? (n(), i("div", Op, [
                      J[9] || (J[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", Ap, [
                        (n(!0), i(H, null, ye(O(ee), (ae, pe) => (n(), i("div", {
                          key: `${ae.node_id}-${pe}`,
                          class: "node-reference"
                        }, d(ae.node_type) + " (Node #" + d(ae.node_id) + ") ", 1))), 128)),
                        ee.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (ae) => E(ee.hash || ee.filename)
                        }, d(G(ee.hash || ee.filename) ? "▼ Show less" : `▶ View all (${ee.loaded_by.length})`), 9, zp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    ee.size_mb ? (n(), i("div", Vp, [
                      J[10] || (J[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", Fp, d(ee.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    ee.has_category_mismatch ? (n(), i("div", Bp, [
                      J[13] || (J[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", Wp, [
                        J[11] || (J[11] = $(" In ", -1)),
                        t("code", null, d(ee.actual_category) + "/", 1),
                        J[12] || (J[12] = $(" but loader needs ", -1)),
                        t("code", null, d((Oe = ee.expected_categories) == null ? void 0 : Oe[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  ee.status !== "available" ? (n(), i("div", Gp, [
                    ee.status === "downloadable" ? (n(), D(De, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: J[1] || (J[1] = (ae) => a("resolve"))
                    }, {
                      default: p(() => [...J[14] || (J[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : ee.status === "category_mismatch" && ee.file_path ? (n(), D(De, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => le(ee.file_path)
                    }, {
                      default: p(() => [...J[15] || (J[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : ee.status !== "path_mismatch" ? (n(), D(De, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: J[2] || (J[2] = (ae) => a("resolve"))
                    }, {
                      default: p(() => [...J[16] || (J[16] = [
                        $(" Resolve ", -1)
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
                  $("NODES USED (" + d(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (n(), i("div", Hp, " No custom nodes used in this workflow ")) : y("", !0),
              (n(!0), i(H, null, ye(m.value.nodes, (ee, Oe) => (n(), i("div", {
                key: `${ee.name}-${ee.status}-${Oe}`,
                class: "node-item"
              }, [
                t("span", {
                  class: Ne(["node-status", T(ee.status)])
                }, d(I(ee.status)), 3),
                t("div", Kp, [
                  t("div", qp, [
                    t("span", Yp, d(ee.name), 1),
                    t("span", Jp, d(M(ee.status)), 1),
                    ee.version ? (n(), i("span", Qp, "v" + d(ee.version), 1)) : y("", !0),
                    ee.status === "uninstallable" && ee.package_id && !x.value.has(ee.package_id) ? (n(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (ae) => Y(ee)
                    }, " Install ", 8, Xp)) : ee.status === "uninstallable" && ee.package_id && x.value.has(ee.package_id) ? (n(), i("span", Zp, " Queued ")) : y("", !0)
                  ]),
                  ee.guidance ? (n(), i("div", eg, d(ee.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: p(() => [
          k(De, {
            variant: "secondary",
            onClick: J[3] || (J[3] = (ee) => a("close"))
          }, {
            default: p(() => [...J[17] || (J[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          g.value ? (n(), D(De, {
            key: 0,
            variant: "primary",
            onClick: K
          }, {
            default: p(() => [...J[18] || (J[18] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      k(hs, {
        show: h.value,
        title: "Model Importance Levels",
        onClose: J[5] || (J[5] = (ee) => h.value = !1)
      }, {
        content: p(() => [...J[19] || (J[19] = [
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
}), sg = /* @__PURE__ */ Ce(tg, [["__scopeId", "data-v-543076d9"]]), og = ["type", "value", "placeholder", "disabled"], ng = {
  key: 0,
  class: "base-input-error"
}, ag = /* @__PURE__ */ be({
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
      class: Ne(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Ne(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          o[1] || (o[1] = as((a) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = as((a) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, og),
      e.error ? (n(), i("span", ng, d(e.error), 1)) : y("", !0)
    ], 2));
  }
}), ot = /* @__PURE__ */ Ce(ag, [["__scopeId", "data-v-9ba02cdc"]]), lg = { class: "base-textarea-wrapper" }, ig = ["value", "rows", "placeholder", "disabled", "maxlength"], rg = {
  key: 0,
  class: "base-textarea-count"
}, ug = /* @__PURE__ */ be({
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
}), yn = /* @__PURE__ */ Ce(ug, [["__scopeId", "data-v-c6d16c93"]]), cg = ["for"], dg = {
  key: 0,
  class: "base-form-field-required"
}, mg = { class: "base-form-field-input" }, fg = {
  key: 1,
  class: "base-form-field-error"
}, vg = {
  key: 2,
  class: "base-form-field-hint"
}, pg = /* @__PURE__ */ be({
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
    const s = e, o = U(() => s.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (a, l) => (n(), i("div", {
      class: Ne(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        $(d(e.label) + " ", 1),
        e.required ? (n(), i("span", dg, "*")) : y("", !0)
      ], 8, cg)) : y("", !0),
      t("div", mg, [
        nt(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", fg, d(e.error), 1)) : e.hint ? (n(), i("span", vg, d(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), it = /* @__PURE__ */ Ce(pg, [["__scopeId", "data-v-9a1cf296"]]), gg = { class: "contract-meta" }, hg = { class: "contract-summary" }, yg = { class: "summary-pill" }, wg = { class: "summary-pill" }, _g = { class: "summary-pill" }, kg = { class: "contract-meta-grid" }, bg = { class: "contract-layout" }, $g = { class: "contract-column" }, Cg = { class: "section-header" }, xg = {
  key: 0,
  class: "empty-message"
}, Sg = { class: "item-card-header" }, Ig = { class: "item-card-title" }, Eg = { class: "item-grid" }, Tg = { class: "contract-column" }, Pg = { class: "section-header" }, Rg = {
  key: 0,
  class: "empty-message"
}, Mg = { class: "item-card-header" }, Dg = { class: "item-card-title" }, Lg = { class: "item-grid" }, Ng = /* @__PURE__ */ be({
  __name: "WorkflowContractModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowContract: l, saveWorkflowContract: r, deleteWorkflowContract: u } = ut(), c = b(!1), m = b(!1), f = b(!1), v = b(null), g = b(null), _ = b(null), h = [
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
    ], x = U(() => {
      var Y;
      return ((Y = g.value) == null ? void 0 : Y.contract_summary.has_contract) === !0;
    }), C = U(() => {
      if (!_.value)
        return { inputs: [], outputs: [] };
      const Y = _.value.default_contract || "default";
      return _.value.contracts[Y] || (_.value.contracts[Y] = { inputs: [], outputs: [] }), _.value.contracts[Y];
    }), S = U(() => {
      var K;
      const Y = ((K = g.value) == null ? void 0 : K.contract_summary.status) ?? "none";
      return Y === "valid" ? "Valid Contract" : Y === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function z(Y) {
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
    function I() {
      C.value.inputs.push({
        name: "",
        type: "string",
        node_id: "",
        required: !0,
        default: ""
      });
    }
    function M() {
      C.value.outputs.push({
        name: "",
        type: "image",
        node_id: "",
        selector: "primary"
      });
    }
    function O(Y) {
      C.value.inputs.splice(Y, 1);
    }
    function G(Y) {
      C.value.outputs.splice(Y, 1);
    }
    async function E() {
      c.value = !0, v.value = null;
      try {
        g.value = await l(o.workflowName), _.value = z(g.value.execution_contract);
      } catch (Y) {
        v.value = Y instanceof Error ? Y.message : "Failed to load workflow contract";
      } finally {
        c.value = !1;
      }
    }
    async function L() {
      if (_.value) {
        m.value = !0, v.value = null;
        try {
          g.value = await r(o.workflowName, _.value), _.value = z(g.value.execution_contract), a("refresh");
        } catch (Y) {
          v.value = Y instanceof Error ? Y.message : "Failed to save workflow contract";
        } finally {
          m.value = !1;
        }
      }
    }
    async function ie() {
      f.value = !0, v.value = null;
      try {
        await u(o.workflowName), await E(), a("refresh");
      } catch (Y) {
        v.value = Y instanceof Error ? Y.message : "Failed to delete workflow contract";
      } finally {
        f.value = !1;
      }
    }
    function le() {
      window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: o.workflowName }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel")), a("close");
    }
    return lt(E), (Y, K) => (n(), D(Ct, {
      title: `WORKFLOW CONTRACT: ${e.workflowName}`,
      size: "xl",
      loading: c.value,
      error: v.value || void 0,
      "fixed-height": "",
      onClose: K[5] || (K[5] = (V) => a("close"))
    }, {
      body: p(() => [
        _.value ? (n(), i(H, { key: 0 }, [
          t("section", gg, [
            t("div", hg, [
              t("span", yg, d(S.value), 1),
              t("span", wg, d(C.value.inputs.length) + " input" + d(C.value.inputs.length === 1 ? "" : "s"), 1),
              t("span", _g, d(C.value.outputs.length) + " output" + d(C.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            t("div", kg, [
              k(it, { label: "Default Contract" }, {
                default: p(() => [
                  k(ot, {
                    "model-value": _.value.default_contract,
                    "full-width": "",
                    "onUpdate:modelValue": T
                  }, null, 8, ["model-value"])
                ]),
                _: 1
              }),
              k(it, { label: "Display Name" }, {
                default: p(() => [
                  k(ot, {
                    modelValue: C.value.display_name,
                    "onUpdate:modelValue": K[0] || (K[0] = (V) => C.value.display_name = V),
                    "full-width": ""
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            k(it, { label: "Description" }, {
              default: p(() => [
                k(yn, {
                  modelValue: C.value.description,
                  "onUpdate:modelValue": K[1] || (K[1] = (V) => C.value.description = V),
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
                  default: p(() => [...K[6] || (K[6] = [
                    $("INPUTS", -1)
                  ])]),
                  _: 1
                }),
                k(De, {
                  size: "sm",
                  variant: "secondary",
                  onClick: K[2] || (K[2] = (V) => I())
                }, {
                  default: p(() => [...K[7] || (K[7] = [
                    $(" Add Input ", -1)
                  ])]),
                  _: 1
                })
              ]),
              C.value.inputs.length ? y("", !0) : (n(), i("div", xg, " No inputs configured. ")),
              (n(!0), i(H, null, ye(C.value.inputs, (V, J) => (n(), i("div", {
                key: `input-${J}`,
                class: "item-card"
              }, [
                t("div", Sg, [
                  t("div", Ig, "Input " + d(J + 1), 1),
                  k(De, {
                    size: "sm",
                    variant: "ghost",
                    onClick: (ee) => O(J)
                  }, {
                    default: p(() => [...K[8] || (K[8] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                t("div", Eg, [
                  k(it, { label: "Name" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: V.name,
                        "onUpdate:modelValue": (ee) => V.name = ee,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Display Name" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: V.display_name,
                        "onUpdate:modelValue": (ee) => V.display_name = ee,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Type" }, {
                    default: p(() => [
                      k(uo, {
                        "model-value": V.type,
                        options: h,
                        "full-width": "",
                        "onUpdate:modelValue": (ee) => V.type = ee
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Required" }, {
                    default: p(() => [
                      k(uo, {
                        "model-value": V.required ? "true" : "false",
                        options: w,
                        "full-width": "",
                        "onUpdate:modelValue": (ee) => V.required = ee === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Node ID" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: V.node_id,
                        "onUpdate:modelValue": (ee) => V.node_id = ee,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Widget Index" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: V.widget_idx,
                        "onUpdate:modelValue": (ee) => V.widget_idx = ee,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Field Key" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: V.field_key,
                        "onUpdate:modelValue": (ee) => V.field_key = ee,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Default" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: V.default,
                        "onUpdate:modelValue": (ee) => V.default = ee,
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
                  default: p(() => [...K[9] || (K[9] = [
                    $("OUTPUTS", -1)
                  ])]),
                  _: 1
                }),
                k(De, {
                  size: "sm",
                  variant: "secondary",
                  onClick: K[3] || (K[3] = (V) => M())
                }, {
                  default: p(() => [...K[10] || (K[10] = [
                    $(" Add Output ", -1)
                  ])]),
                  _: 1
                })
              ]),
              C.value.outputs.length ? y("", !0) : (n(), i("div", Rg, " No outputs configured. ")),
              (n(!0), i(H, null, ye(C.value.outputs, (V, J) => (n(), i("div", {
                key: `output-${J}`,
                class: "item-card"
              }, [
                t("div", Mg, [
                  t("div", Dg, "Output " + d(J + 1), 1),
                  k(De, {
                    size: "sm",
                    variant: "ghost",
                    onClick: (ee) => G(J)
                  }, {
                    default: p(() => [...K[11] || (K[11] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                t("div", Lg, [
                  k(it, { label: "Name" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: V.name,
                        "onUpdate:modelValue": (ee) => V.name = ee,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Display Name" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: V.display_name,
                        "onUpdate:modelValue": (ee) => V.display_name = ee,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Type" }, {
                    default: p(() => [
                      k(uo, {
                        "model-value": V.type,
                        options: h,
                        "full-width": "",
                        "onUpdate:modelValue": (ee) => V.type = ee
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Node ID" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: V.node_id,
                        "onUpdate:modelValue": (ee) => V.node_id = ee,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Selector" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: V.selector,
                        "onUpdate:modelValue": (ee) => V.selector = ee,
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
        k(De, {
          variant: "secondary",
          onClick: le
        }, {
          default: p(() => [...K[12] || (K[12] = [
            $(" Open I/O Mapping Mode ", -1)
          ])]),
          _: 1
        }),
        k(De, {
          variant: "secondary",
          onClick: K[4] || (K[4] = (V) => a("close"))
        }, {
          default: p(() => [...K[13] || (K[13] = [
            $(" Close ", -1)
          ])]),
          _: 1
        }),
        k(De, {
          variant: "danger",
          disabled: !x.value,
          loading: f.value,
          onClick: ie
        }, {
          default: p(() => [...K[14] || (K[14] = [
            $(" Delete Contract ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"]),
        k(De, {
          variant: "primary",
          loading: m.value,
          onClick: L
        }, {
          default: p(() => [...K[15] || (K[15] = [
            $(" Save Contract ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Ug = /* @__PURE__ */ Ce(Ng, [["__scopeId", "data-v-f7a05358"]]), rt = Qs({
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
            const w = c, x = (w - r) / 1e3, C = e.downloaded - u;
            if (C > 0 && x > 0)
              if (e.speed = C / x, r = w, u = e.downloaded, e.speed > 0 && e.size > 0) {
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
  function e(C) {
    for (const S of C) {
      if (rt.items.some(
        (I) => I.url === S.url && I.targetPath === S.targetPath && ["queued", "downloading", "paused", "completed"].includes(I.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${S.filename}`);
        continue;
      }
      const T = {
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
      rt.items.push(T);
    }
    rt.status === "idle" && Io();
  }
  async function s(C) {
    const S = Da(C);
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
        const z = rt.items.findIndex((T) => T.id === C);
        z >= 0 && rt.items.splice(z, 1);
      }
    }
  }
  function o(C) {
    const S = Da(C);
    !S || S.status !== "failed" || (S.status = "queued", S.error = void 0, S.progress = 0, S.downloaded = 0, rt.status === "idle" && Io());
  }
  function a(C) {
    const S = Da(C);
    !S || S.status !== "paused" || (S.status = "queued", rt.status === "idle" && Io());
  }
  function l() {
    const C = rt.items.filter((S) => S.status === "paused");
    for (const S of C)
      S.status = "queued";
    rt.status === "idle" && Io();
  }
  function r(C) {
    const S = rt.items.findIndex((z) => z.id === C);
    S >= 0 && ["completed", "failed", "paused"].includes(rt.items[S].status) && rt.items.splice(S, 1);
  }
  function u() {
    rt.items = rt.items.filter((C) => C.status !== "completed");
  }
  function c() {
    rt.items = rt.items.filter((C) => C.status !== "failed");
  }
  const m = U(
    () => rt.items.find((C) => C.status === "downloading")
  ), f = U(
    () => rt.items.filter((C) => C.status === "queued")
  ), v = U(
    () => rt.items.filter((C) => C.status === "completed")
  ), g = U(
    () => rt.items.filter((C) => C.status === "failed")
  ), _ = U(
    () => rt.items.filter((C) => C.status === "paused")
  ), h = U(() => rt.items.length > 0), w = U(
    () => rt.items.filter((C) => C.status === "queued" || C.status === "downloading").length
  ), x = U(
    () => rt.items.some((C) => C.status === "paused")
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
  const e = b(null), s = b(null), o = b([]), a = b([]), l = b(!1), r = b(null);
  async function u(z, T) {
    var M;
    if (!((M = window.app) != null && M.api))
      throw new Error("ComfyUI API not available");
    const I = await window.app.api.fetchApi(z, T);
    if (!I.ok) {
      const O = await I.json().catch(() => ({})), G = O.error || O.message || `Request failed: ${I.status}`;
      throw new Error(G);
    }
    return I.json();
  }
  async function c(z) {
    l.value = !0, r.value = null;
    try {
      let T;
      return So() || (T = await u(
        `/v2/comfygit/workflow/${z}/analyze`,
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
  async function m(z, T, I, M) {
    l.value = !0, r.value = null;
    try {
      let O;
      if (!So()) {
        const G = Object.fromEntries(T), E = Object.fromEntries(I), L = M ? Array.from(M) : [];
        O = await u(
          `/v2/comfygit/workflow/${z}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: G,
              model_choices: E,
              skipped_packages: L
            })
          }
        );
      }
      return s.value = O, O;
    } catch (O) {
      const G = O instanceof Error ? O.message : "Unknown error occurred";
      throw r.value = G, O;
    } finally {
      l.value = !1;
    }
  }
  async function f(z, T = 10) {
    l.value = !0, r.value = null;
    try {
      let I;
      return So() || (I = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: z, limit: T })
        }
      )), o.value = I.results, I.results;
    } catch (I) {
      const M = I instanceof Error ? I.message : "Unknown error occurred";
      throw r.value = M, I;
    } finally {
      l.value = !1;
    }
  }
  async function v(z, T = 10) {
    l.value = !0, r.value = null;
    try {
      let I;
      return So() || (I = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: z, limit: T })
        }
      )), a.value = I.results, I.results;
    } catch (I) {
      const M = I instanceof Error ? I.message : "Unknown error occurred";
      throw r.value = M, I;
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
  async function h(z) {
    g.phase = "installing", g.nodesInstalled = [], g.installError = void 0, g.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return So(), await w(z);
    } catch (T) {
      const I = T instanceof Error ? T.message : "Failed to install nodes";
      throw g.installError = I, T;
    }
  }
  async function w(z) {
    var I;
    const T = await u(
      `/v2/comfygit/workflow/${z}/install`,
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
      const M = new Map(((I = T.failed) == null ? void 0 : I.map((O) => [O.node_id, O.error])) || []);
      for (let O = 0; O < g.nodesToInstall.length; O++) {
        const G = g.nodesToInstall[O], E = M.get(G);
        g.nodeInstallProgress.completedNodes.push({
          node_id: G,
          success: !E,
          error: E
        });
      }
    }
    return g.nodesInstalled = T.nodes_installed, g.needsRestart = T.nodes_installed.length > 0, T.failed && T.failed.length > 0 && (g.installError = `${T.failed.length} package(s) failed to install`), T;
  }
  async function x(z, T, I) {
    _(), g.phase = "resolving", r.value = null;
    const M = Object.fromEntries(T), O = Object.fromEntries(I);
    try {
      const G = await fetch(`/v2/comfygit/workflow/${z}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: M,
          model_choices: O
        })
      });
      if (!G.ok)
        throw new Error(`Request failed: ${G.status}`);
      if (!G.body)
        throw new Error("No response body");
      const E = G.body.getReader(), L = new TextDecoder();
      let ie = "";
      for (; ; ) {
        const { done: le, value: Y } = await E.read();
        if (le) break;
        ie += L.decode(Y, { stream: !0 });
        const K = ie.split(`

`);
        ie = K.pop() || "";
        for (const V of K) {
          if (!V.trim()) continue;
          const J = V.split(`
`);
          let ee = "", Oe = "";
          for (const ae of J)
            ae.startsWith("event: ") ? ee = ae.slice(7) : ae.startsWith("data: ") && (Oe = ae.slice(6));
          if (Oe)
            try {
              const ae = JSON.parse(Oe);
              C(ee, ae);
            } catch (ae) {
              console.warn("Failed to parse SSE event:", ae);
            }
        }
      }
    } catch (G) {
      const E = G instanceof Error ? G.message : "Unknown error occurred";
      throw r.value = E, g.error = E, g.phase = "error", G;
    }
  }
  function C(z, T) {
    switch (z) {
      case "batch_start":
        g.phase = "downloading", g.totalFiles = T.total;
        break;
      case "file_start":
        g.currentFile = T.filename, g.currentFileIndex = T.index, g.bytesDownloaded = 0, g.bytesTotal = void 0;
        break;
      case "file_progress":
        g.bytesDownloaded = T.downloaded, g.bytesTotal = T.total;
        break;
      case "file_complete":
        g.completedFiles.push({
          filename: T.filename,
          success: T.success,
          error: T.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        g.nodesToInstall = T.nodes_to_install || [], T.download_results && (g.completedFiles = T.download_results), g.phase = "complete";
        break;
      case "error":
        g.error = T.message, g.phase = "error", r.value = T.message;
        break;
    }
  }
  function S(z, T) {
    const { addToQueue: I } = zo(), M = T.filter((O) => O.url && O.target_path).map((O) => ({
      workflow: z,
      filename: O.filename,
      url: O.url,
      targetPath: O.target_path,
      size: O.size || 0,
      type: "model"
    }));
    return M.length > 0 && I(M), M.length;
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
}, Hg = { class: "stepper-content" }, Kg = /* @__PURE__ */ be({
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
        (n(!0), i(H, null, ye(e.steps, (g, _) => (n(), i("div", {
          key: g.id,
          class: Ne(["step", {
            active: e.currentStep === g.id,
            completed: l(g.id),
            "in-progress": r(g.id),
            disabled: c(g.id)
          }]),
          onClick: (h) => m(g.id)
        }, [
          t("div", {
            class: Ne(["step-indicator", u(g.id)])
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
}), qg = /* @__PURE__ */ Ce(Kg, [["__scopeId", "data-v-2a7b3af8"]]), Yg = /* @__PURE__ */ be({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = U(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), a = U(() => `confidence-${o.value}`), l = U(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, u) => (n(), i("span", {
      class: Ne(["confidence-badge", a.value, e.size])
    }, d(l.value), 3));
  }
}), Zn = /* @__PURE__ */ Ce(Yg, [["__scopeId", "data-v-17ec4b80"]]), Jg = { class: "node-info" }, Qg = { class: "node-info-text" }, Xg = { class: "item-body" }, Zg = {
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
}, Ph = { class: "option-meta" }, Rh = {
  key: 0,
  class: "installed-badge"
}, Mh = {
  key: 3,
  class: "unresolved-message"
}, Dh = { class: "action-buttons" }, Lh = /* @__PURE__ */ be({
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
    const r = U(() => !!o.choice);
    U(() => {
      var v;
      return (v = o.choice) == null ? void 0 : v.action;
    }), U(() => {
      var v;
      return (v = o.choice) == null ? void 0 : v.package_id;
    });
    const u = U(() => o.installedNodePacks || []), c = U(() => {
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
      class: Ne(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      t("div", Jg, [
        t("span", Qg, [
          g[7] || (g[7] = $("Node type: ", -1)),
          t("code", null, d(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Ne(["status-badge", c.value])
        }, d(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Xg, [
        r.value ? (n(), i("div", Zg, [
          k(De, {
            variant: "ghost",
            size: "sm",
            onClick: g[0] || (g[0] = (_) => a("clear-choice"))
          }, {
            default: p(() => [...g[8] || (g[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", eh, [
          u.value.length > 0 ? (n(), i("div", th, [
            g[9] || (g[9] = t("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            t("div", sh, [
              (n(!0), i(H, null, ye(u.value, (_) => (n(), i("button", {
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
            (n(!0), i(H, null, ye(e.options, (_, h) => (n(), i("label", {
              key: _.package_id,
              class: Ne(["option-card", { selected: e.selectedOptionIndex === h }]),
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
            k(De, {
              variant: "secondary",
              size: "sm",
              onClick: g[1] || (g[1] = (_) => a("search"))
            }, {
              default: p(() => [...g[10] || (g[10] = [
                $(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            k(De, {
              variant: "secondary",
              size: "sm",
              onClick: g[2] || (g[2] = (_) => a("manual-entry"))
            }, {
              default: p(() => [...g[11] || (g[11] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(De, {
              variant: "secondary",
              size: "sm",
              onClick: g[3] || (g[3] = (_) => a("mark-optional"))
            }, {
              default: p(() => [...g[12] || (g[12] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", gh, [
          u.value.length > 0 ? (n(), i("div", hh, [
            g[14] || (g[14] = t("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            t("div", yh, [
              (n(!0), i(H, null, ye(u.value, (_) => (n(), i("button", {
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
              (n(!0), i(H, null, ye(e.searchResults.slice(0, 5), (_, h) => (n(), i("label", {
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
                    _.is_installed ? (n(), i("span", Rh, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, Ch))), 128))
            ])
          ], 64)) : (n(), i("div", Mh, [...g[17] || (g[17] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", Dh, [
            k(De, {
              variant: "secondary",
              size: "sm",
              onClick: g[4] || (g[4] = (_) => a("search"))
            }, {
              default: p(() => {
                var _;
                return [
                  $(d((_ = e.searchResults) != null && _.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            k(De, {
              variant: "secondary",
              size: "sm",
              onClick: g[5] || (g[5] = (_) => a("manual-entry"))
            }, {
              default: p(() => [...g[18] || (g[18] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            k(De, {
              variant: "secondary",
              size: "sm",
              onClick: g[6] || (g[6] = (_) => a("mark-optional"))
            }, {
              default: p(() => [...g[19] || (g[19] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Nh = /* @__PURE__ */ Ce(Lh, [["__scopeId", "data-v-fb0bbf03"]]), Uh = { class: "item-navigator" }, Oh = { class: "nav-item-info" }, Ah = ["title"], zh = { class: "nav-controls" }, Vh = { class: "nav-arrows" }, Fh = ["disabled"], Bh = ["disabled"], Wh = { class: "nav-position" }, Gh = /* @__PURE__ */ be({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", Uh, [
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
}), jr = /* @__PURE__ */ Ce(Gh, [["__scopeId", "data-v-74af7920"]]), jh = { class: "node-resolution-step" }, Hh = {
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
}, yy = { class: "node-manual-entry-modal" }, wy = { class: "node-modal-body" }, _y = { class: "node-modal-actions" }, ky = /* @__PURE__ */ be({
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
    const o = e, a = s, { searchNodes: l } = Gr(), r = b(0), u = b(!1), c = b(!1), m = b(""), f = b(""), v = b([]), g = b(!1), _ = b(/* @__PURE__ */ new Map()), h = b(/* @__PURE__ */ new Set()), w = b(!1);
    function x() {
      w.value && pe(), w.value = !1;
    }
    const C = U(() => o.nodes[r.value]), S = U(() => o.nodes.filter((B) => o.nodeChoices.has(B.node_type)).length), z = U(() => C.value ? _.value.get(C.value.node_type) || [] : []), T = U(() => C.value ? h.value.has(C.value.node_type) : !1);
    St(C, async (B) => {
      var N;
      B && ((N = B.options) != null && N.length || _.value.has(B.node_type) || h.value.has(B.node_type) || o.nodeChoices.has(B.node_type) || await I(B.node_type));
    }, { immediate: !0 });
    async function I(B) {
      h.value.add(B);
      try {
        const N = await l(B, 5);
        _.value.set(B, N);
      } catch {
        _.value.set(B, []);
      } finally {
        h.value.delete(B);
      }
    }
    const M = U(() => o.autoResolvedPackages.filter((B) => !o.skippedPackages.has(B.package_id)).length);
    function O(B) {
      return o.skippedPackages.has(B);
    }
    function G(B) {
      a("package-skip", B);
    }
    const E = U(() => {
      var N;
      if (!C.value) return "not-found";
      const B = o.nodeChoices.get(C.value.node_type);
      if (B)
        switch (B.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (N = C.value.options) != null && N.length ? "ambiguous" : "not-found";
    }), L = U(() => {
      var N;
      if (!C.value) return;
      const B = o.nodeChoices.get(C.value.node_type);
      if (B)
        switch (B.action) {
          case "install":
            return B.package_id ? `→ ${B.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (N = C.value.options) != null && N.length ? `${C.value.options.length} matches` : "Not Found";
    });
    function ie(B) {
      B >= 0 && B < o.nodes.length && (r.value = B);
    }
    function le() {
      var B;
      for (let N = r.value + 1; N < o.nodes.length; N++) {
        const re = o.nodes[N];
        if (!((B = o.nodeChoices) != null && B.has(re.node_type))) {
          ie(N);
          return;
        }
      }
    }
    function Y() {
      C.value && (a("mark-optional", C.value.node_type), Rt(() => le()));
    }
    function K() {
      C.value && (a("skip", C.value.node_type), Rt(() => le()));
    }
    function V(B) {
      C.value && (a("option-selected", C.value.node_type, B), Rt(() => le()));
    }
    function J() {
      C.value && a("clear-choice", C.value.node_type);
    }
    function ee() {
      C.value && (m.value = C.value.node_type, v.value = z.value, u.value = !0, ke(m.value));
    }
    function Oe() {
      f.value = "", c.value = !0;
    }
    function ae(B) {
      C.value && (a("manual-entry", C.value.node_type, B), Rt(() => le()));
    }
    function pe() {
      u.value = !1, m.value = "", v.value = [];
    }
    function ue() {
      c.value = !1, f.value = "";
    }
    let ze = null;
    function $e() {
      ze && clearTimeout(ze), ze = setTimeout(() => {
        ke(m.value);
      }, 300);
    }
    async function ke(B) {
      if (!B.trim()) {
        v.value = [];
        return;
      }
      g.value = !0;
      try {
        v.value = await l(B, 10);
      } catch {
        v.value = [];
      } finally {
        g.value = !1;
      }
    }
    function ce(B) {
      C.value && (a("manual-entry", C.value.node_type, B.package_id), pe(), Rt(() => le()));
    }
    function W(B) {
      C.value && (a("manual-entry", C.value.node_type, B.package_id), Rt(() => le()));
    }
    function de() {
      !C.value || !f.value.trim() || (a("manual-entry", C.value.node_type, f.value.trim()), ue(), Rt(() => le()));
    }
    return (B, N) => {
      var re, Ve;
      return n(), i("div", jh, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", Hh, [
          t("div", Kh, [
            N[6] || (N[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", qh, d(M.value) + "/" + d(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", Yh, [
            (n(!0), i(H, null, ye(e.autoResolvedPackages, (Fe) => (n(), i("div", {
              key: Fe.package_id,
              class: "resolved-package-item"
            }, [
              t("div", Jh, [
                t("code", Qh, d(Fe.package_id), 1),
                t("span", Xh, d(Fe.node_types_count) + " node type" + d(Fe.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", Zh, [
                O(Fe.package_id) ? (n(), i("span", ty, " SKIPPED ")) : (n(), i("span", ey, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (F) => G(Fe.package_id)
                }, d(O(Fe.package_id) ? "Include" : "Skip"), 9, sy)
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
          C.value ? (n(), D(jr, {
            key: 0,
            "item-name": C.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: N[0] || (N[0] = (Fe) => ie(r.value - 1)),
            onNext: N[1] || (N[1] = (Fe) => ie(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          C.value ? (n(), i("div", ly, [
            k(Nh, {
              "node-type": C.value.node_type,
              "has-multiple-options": !!((re = C.value.options) != null && re.length),
              options: C.value.options,
              choice: (Ve = e.nodeChoices) == null ? void 0 : Ve.get(C.value.node_type),
              status: E.value,
              "status-label": L.value,
              "search-results": z.value,
              "is-searching": T.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: Y,
              onSkip: K,
              onManualEntry: Oe,
              onSearch: ee,
              onOptionSelected: V,
              onClearChoice: J,
              onSearchResultSelected: W,
              onInstalledPackSelected: ae
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", iy, [...N[8] || (N[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (n(), D(Ut, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: N[4] || (N[4] = gt((Fe) => w.value = !0, ["self"])),
            onMouseup: gt(x, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: N[3] || (N[3] = (Fe) => w.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                N[9] || (N[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: pe
                }, "✕")
              ]),
              t("div", ry, [
                k(ot, {
                  modelValue: m.value,
                  "onUpdate:modelValue": N[2] || (N[2] = (Fe) => m.value = Fe),
                  placeholder: "Search by node type, package name...",
                  onInput: $e
                }, null, 8, ["modelValue"]),
                t("div", uy, [
                  v.value.length > 0 ? (n(), i("div", cy, [
                    (n(!0), i(H, null, ye(v.value, (Fe) => (n(), i("div", {
                      key: Fe.package_id,
                      class: "node-search-result-item",
                      onClick: (F) => ce(Fe)
                    }, [
                      t("div", my, [
                        t("code", fy, d(Fe.package_id), 1),
                        Fe.match_confidence ? (n(), D(Zn, {
                          key: 0,
                          confidence: Fe.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      Fe.description ? (n(), i("div", vy, d(Fe.description), 1)) : y("", !0)
                    ], 8, dy))), 128))
                  ])) : g.value ? (n(), i("div", py, "Searching...")) : m.value ? (n(), i("div", gy, 'No packages found matching "' + d(m.value) + '"', 1)) : (n(), i("div", hy, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (n(), D(Ut, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: gt(ue, ["self"])
          }, [
            t("div", yy, [
              t("div", { class: "node-modal-header" }, [
                N[10] || (N[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ue
                }, "✕")
              ]),
              t("div", wy, [
                k(ot, {
                  modelValue: f.value,
                  "onUpdate:modelValue": N[5] || (N[5] = (Fe) => f.value = Fe),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", _y, [
                  k(De, {
                    variant: "secondary",
                    onClick: ue
                  }, {
                    default: p(() => [...N[11] || (N[11] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(De, {
                    variant: "primary",
                    disabled: !f.value.trim(),
                    onClick: de
                  }, {
                    default: p(() => [...N[12] || (N[12] = [
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
}), by = /* @__PURE__ */ Ce(ky, [["__scopeId", "data-v-94c6a438"]]), $y = { class: "node-info" }, Cy = { class: "node-info-text" }, xy = { class: "item-body" }, Sy = {
  key: 0,
  class: "resolved-state"
}, Iy = {
  key: 1,
  class: "multiple-options"
}, Ey = { class: "options-list" }, Ty = ["onClick"], Py = ["name", "value", "checked", "onChange"], Ry = { class: "option-content" }, My = { class: "option-header" }, Dy = { class: "option-filename" }, Ly = { class: "option-meta" }, Ny = { class: "option-size" }, Uy = { class: "option-category" }, Oy = { class: "option-path" }, Ay = { class: "action-buttons" }, zy = {
  key: 2,
  class: "unresolved"
}, Vy = { class: "action-buttons" }, Fy = /* @__PURE__ */ be({
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
    const o = e, a = s, l = U(() => !!o.choice);
    U(() => {
      var m;
      return (m = o.choice) == null ? void 0 : m.action;
    }), U(() => {
      var m, f;
      return ((f = (m = o.choice) == null ? void 0 : m.selected_model) == null ? void 0 : f.filename) || "selected";
    });
    const r = U(() => {
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
      class: Ne(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", $y, [
        t("span", Cy, [
          f[7] || (f[7] = $("Used by: ", -1)),
          t("code", null, d(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Ne(["status-badge", r.value])
        }, d(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", xy, [
        l.value ? (n(), i("div", Sy, [
          k(De, {
            variant: "ghost",
            size: "sm",
            onClick: f[0] || (f[0] = (v) => a("clear-choice"))
          }, {
            default: p(() => [...f[8] || (f[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", Iy, [
          f[12] || (f[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", Ey, [
            (n(!0), i(H, null, ye(e.options, (v, g) => (n(), i("label", {
              key: v.model.hash,
              class: Ne(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (_) => u(g)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (_) => u(g)
              }, null, 40, Py),
              t("div", Ry, [
                t("div", My, [
                  t("span", Dy, d(v.model.filename), 1),
                  k(Zn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", Ly, [
                  t("span", Ny, d(c(v.model.size)), 1),
                  t("span", Uy, d(v.model.category), 1)
                ]),
                t("div", Oy, d(v.model.relative_path), 1)
              ])
            ], 10, Ty))), 128))
          ]),
          t("div", Ay, [
            k(De, {
              variant: "ghost",
              size: "sm",
              onClick: f[1] || (f[1] = (v) => a("search"))
            }, {
              default: p(() => [...f[9] || (f[9] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(De, {
              variant: "ghost",
              size: "sm",
              onClick: f[2] || (f[2] = (v) => a("download-url"))
            }, {
              default: p(() => [...f[10] || (f[10] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(De, {
              variant: "secondary",
              size: "sm",
              onClick: f[3] || (f[3] = (v) => a("mark-optional"))
            }, {
              default: p(() => [...f[11] || (f[11] = [
                $(" Mark Optional ", -1)
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
            k(De, {
              variant: "primary",
              size: "sm",
              onClick: f[4] || (f[4] = (v) => a("search"))
            }, {
              default: p(() => [...f[13] || (f[13] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            k(De, {
              variant: "secondary",
              size: "sm",
              onClick: f[5] || (f[5] = (v) => a("download-url"))
            }, {
              default: p(() => [...f[14] || (f[14] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            k(De, {
              variant: "secondary",
              size: "sm",
              onClick: f[6] || (f[6] = (v) => a("mark-optional"))
            }, {
              default: p(() => [...f[15] || (f[15] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), By = /* @__PURE__ */ Ce(Fy, [["__scopeId", "data-v-8a82fefa"]]), Wy = { class: "model-resolution-step" }, Gy = { class: "step-header" }, jy = { class: "step-info" }, Hy = { class: "step-title" }, Ky = { class: "step-description" }, qy = { class: "stat-badge" }, Yy = {
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
}, u1 = { class: "model-download-url-modal" }, c1 = { class: "model-modal-body" }, d1 = { class: "model-input-group" }, m1 = { class: "model-input-group" }, f1 = { class: "model-modal-actions" }, v1 = /* @__PURE__ */ be({
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
      var pe;
      return ae && ((pe = o[ae]) == null ? void 0 : pe[0]) || null;
    }
    const l = e, r = s, u = b(0), c = b(!1), m = b(!1), f = b(""), v = b(""), g = b(""), _ = b([]), h = b(!1), w = U(() => l.models[u.value]), x = U(() => l.models.some((ae) => ae.is_download_intent)), C = U(() => l.models.filter(
      (ae) => l.modelChoices.has(ae.filename) || ae.is_download_intent
    ).length), S = U(() => {
      var pe;
      if (!w.value) return "";
      const ae = a((pe = w.value.reference) == null ? void 0 : pe.node_type);
      return ae ? `${ae}/${w.value.filename}` : "";
    }), z = U(() => {
      var pe;
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
      return w.value.is_download_intent ? "download" : (pe = w.value.options) != null && pe.length ? "ambiguous" : "not-found";
    }), T = U(() => {
      var pe, ue;
      if (!w.value) return;
      const ae = l.modelChoices.get(w.value.filename);
      if (ae)
        switch (ae.action) {
          case "select":
            return (pe = ae.selected_model) != null && pe.filename ? `→ ${ae.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return w.value.is_download_intent ? "Pending Download" : (ue = w.value.options) != null && ue.length ? `${w.value.options.length} matches` : "Not Found";
    });
    function I(ae) {
      ae >= 0 && ae < l.models.length && (u.value = ae);
    }
    function M() {
      var ae;
      for (let pe = u.value + 1; pe < l.models.length; pe++) {
        const ue = l.models[pe];
        if (!ue.is_download_intent && !((ae = l.modelChoices) != null && ae.has(ue.filename))) {
          I(pe);
          return;
        }
      }
    }
    function O() {
      w.value && (r("mark-optional", w.value.filename), Rt(() => M()));
    }
    function G() {
      w.value && (r("skip", w.value.filename), Rt(() => M()));
    }
    function E(ae) {
      w.value && (r("option-selected", w.value.filename, ae), Rt(() => M()));
    }
    function L() {
      w.value && r("clear-choice", w.value.filename);
    }
    function ie() {
      w.value && (f.value = w.value.filename, c.value = !0);
    }
    function le() {
      w.value && (v.value = w.value.download_source || "", g.value = w.value.target_path || S.value, m.value = !0);
    }
    function Y() {
      c.value = !1, f.value = "", _.value = [];
    }
    function K() {
      m.value = !1, v.value = "", g.value = "";
    }
    function V() {
      h.value = !0, setTimeout(() => {
        h.value = !1;
      }, 300);
    }
    function J(ae) {
      w.value && (Y(), Rt(() => M()));
    }
    function ee() {
      !w.value || !v.value.trim() || (r("download-url", w.value.filename, v.value.trim(), g.value.trim() || void 0), K(), Rt(() => M()));
    }
    function Oe(ae) {
      if (!ae) return "Unknown";
      const pe = ae / (1024 * 1024 * 1024);
      return pe >= 1 ? `${pe.toFixed(2)} GB` : `${(ae / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (ae, pe) => {
      var ue, ze, $e;
      return n(), i("div", Wy, [
        t("div", Gy, [
          t("div", jy, [
            t("h3", Hy, d(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", Ky, d(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", qy, d(C.value) + "/" + d(e.models.length) + " resolved", 1)
        ]),
        w.value ? (n(), D(jr, {
          key: 0,
          "item-name": w.value.filename,
          "current-index": u.value,
          "total-items": e.models.length,
          onPrev: pe[0] || (pe[0] = (ke) => I(u.value - 1)),
          onNext: pe[1] || (pe[1] = (ke) => I(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        w.value ? (n(), i("div", Yy, [
          k(By, {
            filename: w.value.filename,
            "node-type": ((ue = w.value.reference) == null ? void 0 : ue.node_type) || "Unknown",
            "has-multiple-options": !!((ze = w.value.options) != null && ze.length),
            options: w.value.options,
            choice: ($e = e.modelChoices) == null ? void 0 : $e.get(w.value.filename),
            status: z.value,
            "status-label": T.value,
            onMarkOptional: O,
            onSkip: G,
            onDownloadUrl: le,
            onSearch: ie,
            onOptionSelected: E,
            onClearChoice: L
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", Jy, [...pe[5] || (pe[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (n(), D(Ut, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: gt(Y, ["self"])
          }, [
            t("div", Qy, [
              t("div", { class: "model-modal-header" }, [
                pe[6] || (pe[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              t("div", Xy, [
                k(ot, {
                  modelValue: f.value,
                  "onUpdate:modelValue": pe[2] || (pe[2] = (ke) => f.value = ke),
                  placeholder: "Search by filename, category...",
                  onInput: V
                }, null, 8, ["modelValue"]),
                _.value.length > 0 ? (n(), i("div", Zy, [
                  (n(!0), i(H, null, ye(_.value, (ke) => (n(), i("div", {
                    key: ke.hash,
                    class: "model-search-result-item",
                    onClick: (ce) => J()
                  }, [
                    t("div", t1, [
                      t("code", s1, d(ke.filename), 1)
                    ]),
                    t("div", o1, [
                      t("span", n1, d(ke.category), 1),
                      t("span", a1, d(Oe(ke.size)), 1)
                    ]),
                    ke.relative_path ? (n(), i("div", l1, d(ke.relative_path), 1)) : y("", !0)
                  ], 8, e1))), 128))
                ])) : f.value && !h.value ? (n(), i("div", i1, ' No models found matching "' + d(f.value) + '" ', 1)) : y("", !0),
                h.value ? (n(), i("div", r1, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (n(), D(Ut, { to: "body" }, [
          m.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: gt(K, ["self"])
          }, [
            t("div", u1, [
              t("div", { class: "model-modal-header" }, [
                pe[7] || (pe[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: K
                }, "✕")
              ]),
              t("div", c1, [
                t("div", d1, [
                  pe[8] || (pe[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  k(ot, {
                    modelValue: v.value,
                    "onUpdate:modelValue": pe[3] || (pe[3] = (ke) => v.value = ke),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", m1, [
                  pe[9] || (pe[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  k(ot, {
                    modelValue: g.value,
                    "onUpdate:modelValue": pe[4] || (pe[4] = (ke) => g.value = ke),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", f1, [
                  k(De, {
                    variant: "secondary",
                    onClick: K
                  }, {
                    default: p(() => [...pe[10] || (pe[10] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  k(De, {
                    variant: "primary",
                    disabled: !v.value.trim() || !g.value.trim(),
                    onClick: ee
                  }, {
                    default: p(() => [...pe[11] || (pe[11] = [
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
}), p1 = /* @__PURE__ */ Ce(v1, [["__scopeId", "data-v-5c700bfa"]]), g1 = { class: "applying-step" }, h1 = {
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
}, R1 = { class: "phase-header" }, M1 = { class: "phase-title" }, D1 = { class: "completion-summary" }, L1 = {
  key: 0,
  class: "summary-item success"
}, N1 = { class: "summary-text" }, U1 = {
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
}, G1 = { class: "error-message" }, j1 = /* @__PURE__ */ be({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = U(() => {
      var f, v;
      const c = ((f = s.progress.nodeInstallProgress) == null ? void 0 : f.totalNodes) || s.progress.nodesToInstall.length;
      if (!c) return 0;
      const m = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(m / c * 100);
    }), a = U(() => {
      var c;
      return ((c = s.progress.nodeInstallProgress) == null ? void 0 : c.completedNodes.filter((m) => !m.success)) || [];
    }), l = U(() => a.value.length > 0);
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
                style: Ft({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", b1, d(((g = e.progress.nodeInstallProgress) == null ? void 0 : g.completedNodes.length) ?? 0) + " / " + d(((_ = e.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", $1, [
            (n(!0), i(H, null, ye(e.progress.nodesToInstall, (h, w) => (n(), i("div", {
              key: h,
              class: Ne(["install-item", r(h, w)])
            }, [
              t("span", C1, [
                r(h, w) === "pending" ? (n(), i("span", x1, "○")) : r(h, w) === "installing" ? (n(), i("span", S1, "◌")) : r(h, w) === "complete" ? (n(), i("span", I1, "✓")) : r(h, w) === "failed" ? (n(), i("span", E1, "✗")) : y("", !0)
              ]),
              t("code", null, d(h), 1),
              u(h) ? (n(), i("span", T1, d(u(h)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", P1, [
          t("div", R1, [
            t("span", {
              class: Ne(["phase-icon", l.value ? "warning" : "success"])
            }, d(l.value ? "⚠" : "✓"), 3),
            t("h3", M1, d(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", D1, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", L1, [
              m[4] || (m[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", N1, d(e.progress.nodesInstalled.length) + " node package" + d(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", U1, [
              m[5] || (m[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", O1, d(a.value.length) + " package" + d(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", A1, [
              (n(!0), i(H, null, ye(a.value, (h) => (n(), i("div", {
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
}), H1 = /* @__PURE__ */ Ce(j1, [["__scopeId", "data-v-5efaae58"]]), K1 = {
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
}, Rw = { class: "status-text" }, Mw = {
  key: 3,
  class: "status-message info"
}, Dw = { class: "status-text" }, Lw = {
  key: 4,
  class: "status-message info"
}, Nw = { class: "status-text" }, Uw = {
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
}, R0 = {
  key: 1,
  class: "choice-badge optional"
}, M0 = {
  key: 2,
  class: "choice-badge skip"
}, D0 = {
  key: 2,
  class: "review-section"
}, L0 = { class: "section-title" }, N0 = { class: "review-items" }, U0 = { class: "item-name" }, O0 = { class: "item-choice" }, A0 = {
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
}, u_ = /* @__PURE__ */ be({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, a = s, { analyzeWorkflow: l, applyResolution: r, installNodes: u, queueModelDownloads: c, progress: m, resetProgress: f } = Gr(), { loadPendingDownloads: v } = zo(), { openFileLocation: g, queueNodeInstall: _, getNodes: h } = ut(), w = b(null), x = b([]), C = b(!1), S = b(!1), z = b(null), T = b("analysis"), I = b([]), M = b(/* @__PURE__ */ new Map()), O = b(/* @__PURE__ */ new Map()), G = b(/* @__PURE__ */ new Set()), E = U(() => {
      const fe = [
        { id: "analysis", label: "Analysis" }
      ];
      return (V.value || Oe.value || ae.value) && fe.push({ id: "nodes", label: "Nodes" }), J.value && fe.push({ id: "models", label: "Models" }), fe.push({ id: "review", label: "Review" }), T.value === "applying" && fe.push({ id: "applying", label: "Applying" }), fe;
    }), L = U(() => w.value ? w.value.stats.needs_user_input : !1), ie = U(() => w.value ? w.value.nodes.version_gated || [] : []), le = U(() => w.value ? w.value.nodes.uninstallable || [] : []), Y = U(() => le.value.filter((fe) => {
      var P;
      return !!((P = fe.package) != null && P.package_id);
    })), K = U(() => ie.value.length > 0), V = U(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), J = U(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), ee = U(() => w.value ? w.value.stats.download_intents > 0 : !1), Oe = U(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), ae = U(() => Y.value.length > 0), pe = U(() => w.value ? w.value.nodes.resolved.length : 0), ue = U(() => w.value ? w.value.models.resolved.filter((fe) => fe.has_category_mismatch) : []), ze = U(() => ue.value.length > 0), $e = U(() => V.value || Oe.value || ae.value ? "nodes" : J.value ? "models" : "review"), ke = U(() => {
      if (!w.value) return [];
      const fe = w.value.nodes.resolved.filter((R) => !R.is_installed), P = /* @__PURE__ */ new Set();
      return fe.filter((R) => P.has(R.package.package_id) ? !1 : (P.add(R.package.package_id), !0));
    }), ce = U(() => {
      if (!w.value) return [];
      const fe = w.value.nodes.resolved.filter((R) => !R.is_installed), P = /* @__PURE__ */ new Map();
      for (const R of fe) {
        const Ue = P.get(R.package.package_id);
        Ue ? Ue.node_types_count++ : P.set(R.package.package_id, {
          package_id: R.package.package_id,
          title: R.package.title,
          node_types_count: 1
        });
      }
      return Array.from(P.values());
    }), W = U(() => ke.value.filter((fe) => !G.value.has(fe.package.package_id))), de = U(() => w.value ? w.value.models.resolved.filter(
      (fe) => fe.match_type === "download_intent" || fe.match_type === "property_download_intent"
    ).map((fe) => ({
      filename: fe.reference.widget_value,
      reference: fe.reference,
      is_download_intent: !0,
      resolved_model: fe.model,
      download_source: fe.download_source,
      target_path: fe.target_path
    })) : []), B = U(() => {
      if (!w.value) return [];
      const fe = w.value.nodes.unresolved.map((R) => ({
        node_type: R.reference.node_type,
        reason: R.reason,
        is_unresolved: !0,
        options: void 0
      })), P = w.value.nodes.ambiguous.map((R) => ({
        node_type: R.reference.node_type,
        has_multiple_options: !0,
        options: R.options.map((Ue) => ({
          package_id: Ue.package.package_id,
          title: Ue.package.title,
          match_confidence: Ue.match_confidence,
          match_type: Ue.match_type,
          is_installed: Ue.is_installed
        }))
      }));
      return [...fe, ...P];
    }), N = U(() => {
      if (!w.value) return [];
      const fe = w.value.models.unresolved.map((R) => ({
        filename: R.reference.widget_value,
        reference: R.reference,
        reason: R.reason,
        is_unresolved: !0,
        options: void 0
      })), P = w.value.models.ambiguous.map((R) => ({
        filename: R.reference.widget_value,
        reference: R.reference,
        has_multiple_options: !0,
        options: R.options.map((Ue) => ({
          model: Ue.model,
          match_confidence: Ue.match_confidence,
          match_type: Ue.match_type,
          has_download_source: Ue.has_download_source
        }))
      }));
      return [...fe, ...P];
    }), re = U(() => {
      const fe = N.value, P = de.value.map((R) => ({
        filename: R.filename,
        reference: R.reference,
        is_download_intent: !0,
        resolved_model: R.resolved_model,
        download_source: R.download_source,
        target_path: R.target_path,
        options: void 0
      }));
      return [...fe, ...P];
    }), Ve = U(() => de.value.filter((fe) => {
      const P = O.value.get(fe.filename);
      return P ? P.action === "download" : !0;
    }).map((fe) => ({
      filename: fe.filename,
      url: fe.download_source,
      target_path: fe.target_path
    })));
    function Fe(fe, P = 50) {
      return fe.length <= P ? fe : fe.slice(0, P - 3) + "...";
    }
    const F = U(() => {
      let fe = W.value.length;
      for (const P of M.value.values())
        P.action === "install" && fe++;
      for (const P of O.value.values())
        P.action === "select" && fe++;
      return fe;
    }), X = U(() => {
      let fe = 0;
      for (const P of O.value.values())
        P.action === "download" && fe++;
      for (const P of de.value)
        O.value.get(P.filename) || fe++;
      return fe;
    }), me = U(() => {
      let fe = 0;
      for (const P of M.value.values())
        P.action === "optional" && fe++;
      for (const P of O.value.values())
        P.action === "optional" && fe++;
      return fe;
    }), Pe = U(() => {
      let fe = G.value.size;
      for (const P of M.value.values())
        P.action === "skip" && fe++;
      for (const P of O.value.values())
        P.action === "skip" && fe++;
      for (const P of B.value)
        M.value.has(P.node_type) || fe++;
      for (const P of N.value)
        O.value.has(P.filename) || fe++;
      return fe;
    }), Ie = U(() => {
      const fe = {};
      if (fe.analysis = { resolved: 1, total: 1 }, V.value || ae.value) {
        const P = B.value.length, R = Y.value.length, Ue = B.value.filter(
          (xt) => M.value.has(xt.node_type)
        ).length, tt = Y.value.filter(
          (xt) => M.value.has(xt.reference.node_type)
        ).length, pt = P + R, st = Ue + tt;
        fe.nodes = { resolved: st, total: pt };
      }
      if (J.value) {
        const P = re.value.length, R = re.value.filter(
          (Ue) => O.value.has(Ue.filename) || Ue.is_download_intent
        ).length;
        fe.models = { resolved: R, total: P };
      }
      if (fe.review = { resolved: 1, total: 1 }, T.value === "applying") {
        const P = m.totalFiles || 1, R = m.completedFiles.length;
        fe.applying = { resolved: R, total: P };
      }
      return fe;
    });
    function Ee(fe) {
      T.value = fe;
    }
    function q() {
      const fe = E.value.findIndex((P) => P.id === T.value);
      fe > 0 && (T.value = E.value[fe - 1].id);
    }
    function A() {
      const fe = E.value.findIndex((P) => P.id === T.value);
      fe < E.value.length - 1 && (T.value = E.value[fe + 1].id);
    }
    function Z() {
      for (const fe of Y.value) {
        const P = fe.reference.node_type;
        M.value.has(P) || ge(fe, "registry");
      }
    }
    function ne(fe) {
      switch (fe) {
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
    function _e(fe) {
      return fe.filter((P) => P.installed && P.tracked).filter((P) => P.name !== "comfygit-manager").map((P) => ({
        package_id: P.registry_id || P.name,
        source: P.source
      })).filter((P, R, Ue) => Ue.findIndex((tt) => tt.package_id === P.package_id) === R).sort((P, R) => {
        const Ue = ne(P.source) - ne(R.source);
        return Ue !== 0 ? Ue : P.package_id.localeCompare(R.package_id);
      });
    }
    async function Se() {
      C.value = !0, z.value = null;
      try {
        const [fe, P] = await Promise.all([
          l(o.workflowName),
          h()
        ]);
        w.value = fe, x.value = _e(P.nodes), Z();
      } catch (fe) {
        z.value = fe instanceof Error ? fe.message : "Failed to analyze workflow";
      } finally {
        C.value = !1;
      }
    }
    function oe() {
      I.value.includes("analysis") || I.value.push("analysis"), V.value || Oe.value || ae.value ? T.value = "nodes" : J.value ? T.value = "models" : T.value = "review";
    }
    function j(fe) {
      M.value.set(fe, { action: "optional" });
    }
    function Ae(fe) {
      M.value.set(fe, { action: "skip" });
    }
    function Te(fe, P) {
      var Ue;
      const R = B.value.find((tt) => tt.node_type === fe);
      (Ue = R == null ? void 0 : R.options) != null && Ue[P] && M.value.set(fe, {
        action: "install",
        package_id: R.options[P].package_id
      });
    }
    function xe(fe, P) {
      M.value.set(fe, {
        action: "install",
        package_id: P
      });
    }
    function Le(fe) {
      M.value.delete(fe);
    }
    function Me(fe) {
      return M.value.get(fe);
    }
    function Q(fe) {
      const P = Me(fe);
      return P ? P.action === "optional" ? "Marked optional" : P.action === "skip" ? "Skipped" : P.action === "install" ? P.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function ge(fe, P) {
      var tt;
      const R = (tt = fe.package) == null ? void 0 : tt.package_id;
      if (!R) return;
      const Ue = {
        action: "install",
        package_id: R,
        version: fe.package.latest_version || null,
        install_source: P
      };
      P === "git" && fe.package.repository && (Ue.repository = fe.package.repository), M.value.set(fe.reference.node_type, Ue);
    }
    function he(fe) {
      M.value.set(fe, { action: "optional" });
    }
    function Ke(fe) {
      M.value.set(fe, { action: "skip" });
    }
    function Be(fe) {
      G.value.has(fe) ? G.value.delete(fe) : G.value.add(fe);
    }
    function We(fe) {
      O.value.set(fe, { action: "optional" });
    }
    function Xe(fe) {
      O.value.set(fe, { action: "skip" });
    }
    function qe(fe, P) {
      var Ue;
      const R = N.value.find((tt) => tt.filename === fe);
      (Ue = R == null ? void 0 : R.options) != null && Ue[P] && O.value.set(fe, {
        action: "select",
        selected_model: R.options[P].model
      });
    }
    function dt(fe, P, R) {
      O.value.set(fe, {
        action: "download",
        url: P,
        target_path: R
      });
    }
    function ct(fe) {
      O.value.delete(fe);
    }
    async function vt(fe) {
      try {
        await g(fe);
      } catch (P) {
        z.value = P instanceof Error ? P.message : "Failed to open file location";
      }
    }
    async function Pt() {
      var fe;
      S.value = !0, z.value = null, f(), m.phase = "resolving", T.value = "applying";
      try {
        const P = await r(o.workflowName, M.value, O.value, G.value);
        P.models_to_download && P.models_to_download.length > 0 && c(o.workflowName, P.models_to_download);
        const R = Y.value.map((st) => {
          const xt = Me(st.reference.node_type);
          if ((xt == null ? void 0 : xt.action) !== "install" || xt.install_source !== "git")
            return null;
          const Et = xt.repository || st.package.repository, Ge = xt.package_id || st.package.package_id;
          return !Et || !Ge ? null : {
            id: Ge,
            repository: Et,
            selectedVersion: xt.version || st.package.latest_version || "latest"
          };
        }).filter((st) => !!st), Ue = new Set(R.map((st) => st.id)), tt = [
          ...P.nodes_to_install || [],
          ...W.value.map((st) => st.package.package_id)
        ];
        m.nodesToInstall = [...new Set(tt)].filter((st) => !Ue.has(st)), m.nodesToInstall.length > 0 && await u(o.workflowName);
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
        const pt = m.installError || ((fe = m.nodeInstallProgress) == null ? void 0 : fe.completedNodes.some((st) => !st.success));
        !m.needsRestart && !pt && setTimeout(() => {
          a("refresh"), a("install"), a("close");
        }, 1500);
      } catch (P) {
        z.value = P instanceof Error ? P.message : "Failed to apply resolution", m.error = z.value, m.phase = "error";
      } finally {
        S.value = !1;
      }
    }
    function ts() {
      a("refresh"), a("restart"), a("close");
    }
    async function Ot() {
      var P;
      const fe = ((P = m.nodeInstallProgress) == null ? void 0 : P.completedNodes.filter((R) => !R.success).map((R) => R.node_id)) || [];
      if (fe.length !== 0) {
        m.phase = "installing", m.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: fe.length
        }, m.nodesToInstall = fe, m.nodesInstalled = [], m.installError = void 0;
        try {
          await u(o.workflowName), m.phase = "complete";
        } catch (R) {
          m.error = R instanceof Error ? R.message : "Retry failed", m.phase = "error";
        }
      }
    }
    return lt(Se), (fe, P) => (n(), D(Ct, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: C.value,
      error: z.value || void 0,
      "fixed-height": !0,
      onClose: P[1] || (P[1] = (R) => a("close"))
    }, {
      body: p(() => [
        C.value && !w.value ? (n(), i("div", K1, [...P[2] || (P[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (n(), i("div", q1, [
          k(qg, {
            steps: E.value,
            "current-step": T.value,
            "completed-steps": I.value,
            "step-stats": Ie.value,
            onStepChange: Ee
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          T.value === "analysis" ? (n(), i("div", Y1, [
            t("div", J1, [
              t("div", Q1, [
                P[3] || (P[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", X1, " Found " + d(w.value.stats.total_nodes) + " nodes and " + d(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", Z1, [
                t("div", ew, [
                  P[16] || (P[16] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", tw, [
                    pe.value > 0 ? (n(), i("div", sw, [
                      P[4] || (P[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", ow, d(pe.value), 1),
                      P[5] || (P[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (n(), i("div", nw, [
                      P[6] || (P[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", aw, d(w.value.stats.packages_needing_installation), 1),
                      P[7] || (P[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (n(), i("div", lw, [
                      P[8] || (P[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", iw, d(w.value.nodes.ambiguous.length), 1),
                      P[9] || (P[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    ie.value.length > 0 ? (n(), i("div", rw, [
                      P[10] || (P[10] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", uw, d(ie.value.length), 1),
                      P[11] || (P[11] = t("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    le.value.length > 0 ? (n(), i("div", cw, [
                      P[12] || (P[12] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", dw, d(le.value.length), 1),
                      P[13] || (P[13] = t("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (n(), i("div", mw, [
                      P[14] || (P[14] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", fw, d(w.value.nodes.unresolved.length), 1),
                      P[15] || (P[15] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", vw, [
                  P[27] || (P[27] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", pw, [
                    t("div", gw, [
                      P[17] || (P[17] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", hw, d(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      P[18] || (P[18] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (n(), i("div", yw, [
                      P[19] || (P[19] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", ww, d(w.value.stats.download_intents), 1),
                      P[20] || (P[20] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    ze.value ? (n(), i("div", _w, [
                      P[21] || (P[21] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", kw, d(ue.value.length), 1),
                      P[22] || (P[22] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (n(), i("div", bw, [
                      P[23] || (P[23] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", $w, d(w.value.models.ambiguous.length), 1),
                      P[24] || (P[24] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (n(), i("div", Cw, [
                      P[25] || (P[25] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", xw, d(w.value.models.unresolved.length), 1),
                      P[26] || (P[26] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              L.value ? (n(), i("div", Sw, [
                P[28] || (P[28] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Iw, d(B.value.length + N.value.length) + " items need your input", 1)
              ])) : K.value ? (n(), i("div", Ew, [
                P[29] || (P[29] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Tw, d(ie.value.length) + " node type" + d(ie.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : le.value.length > 0 ? (n(), i("div", Pw, [
                P[30] || (P[30] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Rw, d(le.value.length) + " community-mapped node type" + d(le.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : Oe.value ? (n(), i("div", Mw, [
                P[31] || (P[31] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", Dw, d(w.value.stats.packages_needing_installation) + " package" + d(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + d(w.value.stats.nodes_needing_installation) + " node type" + d(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + d(ee.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : ee.value ? (n(), i("div", Lw, [
                P[32] || (P[32] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", Nw, d(w.value.stats.download_intents) + " model" + d(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : ze.value ? (n(), i("div", Uw, [
                P[33] || (P[33] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", Ow, d(ue.value.length) + " model" + d(ue.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", Aw, [...P[34] || (P[34] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              ze.value ? (n(), i("div", zw, [
                P[37] || (P[37] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", Vw, [
                  (n(!0), i(H, null, ye(ue.value, (R) => {
                    var Ue, tt;
                    return n(), i("div", {
                      key: R.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", Fw, d(R.actual_category) + "/" + d((Ue = R.model) == null ? void 0 : Ue.filename), 1),
                      P[36] || (P[36] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", Bw, d((tt = R.expected_categories) == null ? void 0 : tt[0]) + "/", 1),
                      R.file_path ? (n(), D(De, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (pt) => vt(R.file_path)
                      }, {
                        default: p(() => [...P[35] || (P[35] = [
                          $(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              K.value ? (n(), i("div", Ww, [
                P[38] || (P[38] = t("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                t("div", Gw, [
                  (n(!0), i(H, null, ye(ie.value, (R) => {
                    var Ue;
                    return n(), i("div", {
                      key: `vg-${R.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      t("code", jw, d(R.reference.node_type), 1),
                      t("span", Hw, d(R.guidance || ((Ue = w.value.node_guidance) == null ? void 0 : Ue[R.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          T.value === "nodes" ? (n(), i("div", Kw, [
            k(by, {
              nodes: B.value,
              "node-choices": M.value,
              "auto-resolved-packages": ce.value,
              "skipped-packages": G.value,
              "installed-node-packs": x.value,
              onMarkOptional: j,
              onSkip: Ae,
              onOptionSelected: Te,
              onManualEntry: xe,
              onClearChoice: Le,
              onPackageSkip: Be
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            Y.value.length > 0 ? (n(), i("div", qw, [
              t("div", Yw, [
                t("h4", Jw, "Community-Mapped Packages (" + d(Y.value.length) + ")", 1),
                P[39] || (P[39] = t("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              t("div", Qw, [
                (n(!0), i(H, null, ye(Y.value, (R) => (n(), i("div", {
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
                      P[40] || (P[40] = $(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      R.guidance ? (n(), i("span", n0, d(R.guidance), 1)) : y("", !0)
                    ]),
                    t("div", a0, d(Q(R.reference.node_type)), 1)
                  ]),
                  t("div", l0, [
                    k(De, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !R.package.package_id,
                      onClick: (Ue) => ge(R, "registry")
                    }, {
                      default: p(() => [...P[41] || (P[41] = [
                        $(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    R.package.repository ? (n(), D(De, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !R.package.package_id,
                      onClick: (Ue) => ge(R, "git")
                    }, {
                      default: p(() => [...P[42] || (P[42] = [
                        $(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    k(De, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ue) => he(R.reference.node_type)
                    }, {
                      default: p(() => [...P[43] || (P[43] = [
                        $(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(De, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ue) => Ke(R.reference.node_type)
                    }, {
                      default: p(() => [...P[44] || (P[44] = [
                        $(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : y("", !0)
          ])) : y("", !0),
          T.value === "models" ? (n(), D(p1, {
            key: 2,
            models: re.value,
            "model-choices": O.value,
            onMarkOptional: We,
            onSkip: Xe,
            onOptionSelected: qe,
            onDownloadUrl: dt,
            onClearChoice: ct
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          T.value === "review" ? (n(), i("div", i0, [
            t("div", r0, [
              P[50] || (P[50] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", u0, [
                t("div", c0, [
                  t("span", d0, d(F.value), 1),
                  P[45] || (P[45] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", m0, [
                  t("span", f0, d(X.value), 1),
                  P[46] || (P[46] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", v0, [
                  t("span", p0, d(me.value), 1),
                  P[47] || (P[47] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", g0, [
                  t("span", h0, d(Pe.value), 1),
                  P[48] || (P[48] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              ce.value.length > 0 ? (n(), i("div", y0, [
                t("h4", w0, "Node Packages (" + d(ce.value.length) + ")", 1),
                t("div", _0, [
                  (n(!0), i(H, null, ye(ce.value, (R) => (n(), i("div", {
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
              Y.value.length > 0 ? (n(), i("div", x0, [
                t("h4", S0, "Community-Mapped Packages (" + d(Y.value.length) + ")", 1),
                t("div", I0, [
                  (n(!0), i(H, null, ye(Y.value, (R) => {
                    var Ue, tt, pt;
                    return n(), i("div", {
                      key: `review-community-${R.reference.node_type}-${R.package.package_id}`,
                      class: "review-item"
                    }, [
                      t("code", E0, d(R.reference.node_type), 1),
                      t("div", T0, [
                        ((Ue = Me(R.reference.node_type)) == null ? void 0 : Ue.action) === "install" ? (n(), i("span", P0, d(((tt = Me(R.reference.node_type)) == null ? void 0 : tt.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((pt = Me(R.reference.node_type)) == null ? void 0 : pt.action) === "optional" ? (n(), i("span", R0, " Optional ")) : (n(), i("span", M0, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              B.value.length > 0 ? (n(), i("div", D0, [
                t("h4", L0, "Node Choices (" + d(B.value.length) + ")", 1),
                t("div", N0, [
                  (n(!0), i(H, null, ye(B.value, (R) => {
                    var Ue, tt, pt, st;
                    return n(), i("div", {
                      key: R.node_type,
                      class: "review-item"
                    }, [
                      t("code", U0, d(R.node_type), 1),
                      t("div", O0, [
                        M.value.has(R.node_type) ? (n(), i(H, { key: 0 }, [
                          ((Ue = M.value.get(R.node_type)) == null ? void 0 : Ue.action) === "install" ? (n(), i("span", A0, d((tt = M.value.get(R.node_type)) == null ? void 0 : tt.package_id), 1)) : ((pt = M.value.get(R.node_type)) == null ? void 0 : pt.action) === "optional" ? (n(), i("span", z0, " Optional ")) : ((st = M.value.get(R.node_type)) == null ? void 0 : st.action) === "skip" ? (n(), i("span", V0, " Skip ")) : y("", !0)
                        ], 64)) : (n(), i("span", F0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Ve.value.length > 0 ? (n(), i("div", B0, [
                t("h4", W0, "Models to Download (" + d(Ve.value.length) + ")", 1),
                t("div", G0, [
                  (n(!0), i(H, null, ye(Ve.value, (R) => (n(), i("div", {
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
                        }, d(Fe(R.url)), 9, Y0)) : y("", !0)
                      ])
                    ]),
                    P[49] || (P[49] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              re.value.length > 0 ? (n(), i("div", J0, [
                t("h4", Q0, "Models (" + d(re.value.length) + ")", 1),
                t("div", X0, [
                  (n(!0), i(H, null, ye(re.value, (R) => {
                    var Ue, tt, pt, st, xt, Et, Ge;
                    return n(), i("div", {
                      key: R.filename,
                      class: "review-item"
                    }, [
                      t("code", Z0, d(R.filename), 1),
                      t("div", e_, [
                        O.value.has(R.filename) ? (n(), i(H, { key: 0 }, [
                          ((Ue = O.value.get(R.filename)) == null ? void 0 : Ue.action) === "select" ? (n(), i("span", t_, d((pt = (tt = O.value.get(R.filename)) == null ? void 0 : tt.selected_model) == null ? void 0 : pt.filename), 1)) : ((st = O.value.get(R.filename)) == null ? void 0 : st.action) === "download" ? (n(), i("span", s_, " Download ")) : ((xt = O.value.get(R.filename)) == null ? void 0 : xt.action) === "optional" ? (n(), i("span", o_, " Optional ")) : ((Et = O.value.get(R.filename)) == null ? void 0 : Et.action) === "skip" ? (n(), i("span", n_, " Skip ")) : ((Ge = O.value.get(R.filename)) == null ? void 0 : Ge.action) === "cancel_download" ? (n(), i("span", a_, " Cancel Download ")) : y("", !0)
                        ], 64)) : R.is_download_intent ? (n(), i("span", l_, " Pending Download ")) : (n(), i("span", i_, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ke.value.length === 0 && Y.value.length === 0 && B.value.length === 0 && re.value.length === 0 ? (n(), i("div", r_, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          T.value === "applying" ? (n(), D(H1, {
            key: 4,
            progress: Ze(m),
            onRestart: ts,
            onRetryFailed: Ot
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: p(() => [
        T.value !== "analysis" && T.value !== "applying" ? (n(), D(De, {
          key: 0,
          variant: "secondary",
          disabled: S.value,
          onClick: q
        }, {
          default: p(() => [...P[51] || (P[51] = [
            $(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        P[54] || (P[54] = t("div", { class: "footer-spacer" }, null, -1)),
        T.value !== "applying" || Ze(m).phase === "complete" || Ze(m).phase === "error" ? (n(), D(De, {
          key: 1,
          variant: "secondary",
          onClick: P[0] || (P[0] = (R) => a("close"))
        }, {
          default: p(() => [
            $(d(Ze(m).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        T.value === "analysis" ? (n(), D(De, {
          key: 2,
          variant: "primary",
          disabled: C.value,
          onClick: oe
        }, {
          default: p(() => [
            $(d($e.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        T.value === "nodes" ? (n(), D(De, {
          key: 3,
          variant: "primary",
          onClick: A
        }, {
          default: p(() => [
            $(d(J.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        T.value === "models" ? (n(), D(De, {
          key: 4,
          variant: "primary",
          onClick: A
        }, {
          default: p(() => [...P[52] || (P[52] = [
            $(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        T.value === "review" ? (n(), D(De, {
          key: 5,
          variant: "primary",
          disabled: S.value,
          loading: S.value,
          onClick: Pt
        }, {
          default: p(() => [...P[53] || (P[53] = [
            $(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), c_ = /* @__PURE__ */ Ce(u_, [["__scopeId", "data-v-49848358"]]), d_ = { class: "search-input-wrapper" }, m_ = ["value", "placeholder"], f_ = /* @__PURE__ */ be({
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
    const o = e, a = s, l = b(null);
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
}), v_ = /* @__PURE__ */ Ce(f_, [["__scopeId", "data-v-266f857a"]]), p_ = { class: "search-bar" }, g_ = /* @__PURE__ */ be({
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
}), Vo = /* @__PURE__ */ Ce(g_, [["__scopeId", "data-v-3d51bbfd"]]), h_ = { class: "section-group" }, y_ = {
  key: 0,
  class: "section-content"
}, w_ = /* @__PURE__ */ be({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = b(o.initiallyExpanded);
    function r() {
      o.collapsible && (l.value = !l.value, a("toggle", l.value));
    }
    return (u, c) => (n(), i("section", h_, [
      k(Xt, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: p(() => [
          $(d(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (n(), i("div", y_, [
        nt(u.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), _t = /* @__PURE__ */ Ce(w_, [["__scopeId", "data-v-c48e33ed"]]), __ = { class: "item-header" }, k_ = {
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
}, I_ = /* @__PURE__ */ be({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, a = U(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (n(), i("div", {
      class: Ne(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
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
}), Lt = /* @__PURE__ */ Ce(I_, [["__scopeId", "data-v-cc435e0e"]]), E_ = { class: "loading-state" }, T_ = { class: "loading-message" }, P_ = /* @__PURE__ */ be({
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
}), zs = /* @__PURE__ */ Ce(P_, [["__scopeId", "data-v-ad8436c9"]]), R_ = { class: "error-state" }, M_ = { class: "error-message" }, D_ = /* @__PURE__ */ be({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (n(), i("div", R_, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", M_, d(e.message), 1),
      e.retry ? (n(), D(we, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => s.$emit("retry"))
      }, {
        default: p(() => [...o[1] || (o[1] = [
          $(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Vs = /* @__PURE__ */ Ce(D_, [["__scopeId", "data-v-5397be48"]]), L_ = /* @__PURE__ */ be({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getWorkflows: l } = ut(), r = b([]), u = b(!1), c = b(null), m = b(""), f = b(!0), v = b(!1), g = b(!1), _ = b(!1), h = b(!1), w = b(null), x = U(
      () => r.value.filter(($e) => $e.status === "broken")
    ), C = U(
      () => r.value.filter(($e) => $e.status === "new")
    ), S = U(
      () => r.value.filter(($e) => $e.status === "modified")
    ), z = U(
      () => r.value.filter(($e) => $e.status === "synced")
    ), T = U(() => {
      if (!m.value.trim()) return r.value;
      const $e = m.value.toLowerCase();
      return r.value.filter((ke) => ke.name.toLowerCase().includes($e));
    }), I = U(
      () => x.value.filter(
        ($e) => !m.value.trim() || $e.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), M = U(
      () => C.value.filter(
        ($e) => !m.value.trim() || $e.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), O = U(
      () => S.value.filter(
        ($e) => !m.value.trim() || $e.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), G = U(
      () => z.value.filter(
        ($e) => !m.value.trim() || $e.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), E = U(
      () => v.value ? G.value : G.value.slice(0, 5)
    );
    async function L($e = !1) {
      u.value = !0, c.value = null;
      try {
        r.value = await l($e);
      } catch (ke) {
        c.value = ke instanceof Error ? ke.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    s({ loadWorkflows: L });
    function ie($e) {
      w.value = $e, g.value = !0;
    }
    function le($e) {
      w.value = $e, _.value = !0;
    }
    function Y($e) {
      w.value = $e, h.value = !0;
    }
    function K($e) {
      var W;
      const ce = (W = $e.detail) == null ? void 0 : W.workflowName;
      ce && Y(ce);
    }
    function V() {
      a("refresh");
    }
    async function J() {
      _.value = !1, await L(!0);
    }
    async function ee() {
      await L(!0), a("refresh");
    }
    async function Oe() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ae($e) {
      return $e.replace(/uninstallable node mappings?/gi, (ke) => ke.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function pe($e) {
      if ($e.issue_summary && $e.issue_summary.trim().length > 0)
        return ae($e.issue_summary);
      const ke = [];
      return $e.version_gated_count && $e.version_gated_count > 0 && ke.push(`${$e.version_gated_count} node${$e.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), $e.uninstallable_count && $e.uninstallable_count > 0 && ke.push(`${$e.uninstallable_count} node${$e.uninstallable_count > 1 ? "s" : ""} need community packages`), $e.missing_nodes > 0 && ke.push(`${$e.missing_nodes} missing node${$e.missing_nodes > 1 ? "s" : ""}`), $e.missing_models > 0 && ke.push(`${$e.missing_models} missing model${$e.missing_models > 1 ? "s" : ""}`), $e.models_with_category_mismatch && $e.models_with_category_mismatch > 0 && ke.push(`${$e.models_with_category_mismatch} model${$e.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), $e.pending_downloads && $e.pending_downloads > 0 && ke.push(`${$e.pending_downloads} pending download${$e.pending_downloads > 1 ? "s" : ""}`), ke.length > 0 ? ke.join(", ") : "Has issues";
    }
    function ue($e) {
      const ke = $e.sync_state === "new" ? "New" : $e.sync_state === "modified" ? "Modified" : $e.sync_state === "synced" ? "Synced" : $e.sync_state, ce = ze($e);
      return $e.has_path_sync_issues && $e.models_needing_path_sync && $e.models_needing_path_sync > 0 ? `${$e.models_needing_path_sync} model path${$e.models_needing_path_sync > 1 ? "s" : ""} need${$e.models_needing_path_sync === 1 ? "s" : ""} sync · ${ce}` : `${ke || "Unknown"} · ${ce}`;
    }
    function ze($e) {
      const ke = $e.contract_summary;
      return !ke || !ke.has_contract ? "No contract" : ke.status === "incomplete" ? `${ke.input_count} in / ${ke.output_count} out · incomplete` : `${ke.input_count} in / ${ke.output_count} out`;
    }
    return lt(() => {
      L(), window.addEventListener("comfygit:open-workflow-contract", K);
    }), da(() => {
      window.removeEventListener("comfygit:open-workflow-contract", K);
    }), ($e, ke) => (n(), i(H, null, [
      k(Kt, null, {
        header: p(() => [
          k(qt, { title: "WORKFLOWS" })
        ]),
        search: p(() => [
          k(Vo, {
            modelValue: m.value,
            "onUpdate:modelValue": ke[0] || (ke[0] = (ce) => m.value = ce),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: p(() => [
          u.value ? (n(), D(zs, {
            key: 0,
            message: "Loading workflows..."
          })) : c.value ? (n(), D(Vs, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            I.value.length ? (n(), D(_t, {
              key: 0,
              title: "BROKEN",
              count: I.value.length
            }, {
              default: p(() => [
                (n(!0), i(H, null, ye(I.value, (ce) => (n(), D(Lt, {
                  key: ce.name,
                  status: "broken"
                }, {
                  icon: p(() => [...ke[8] || (ke[8] = [
                    $("⚠", -1)
                  ])]),
                  title: p(() => [
                    $(d(ce.name), 1)
                  ]),
                  subtitle: p(() => [
                    $(d(pe(ce)), 1)
                  ]),
                  actions: p(() => [
                    k(we, {
                      variant: "primary",
                      size: "sm",
                      onClick: (W) => le(ce.name)
                    }, {
                      default: p(() => [...ke[9] || (ke[9] = [
                        $(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(we, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => Y(ce.name)
                    }, {
                      default: p(() => [...ke[10] || (ke[10] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(we, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => ie(ce.name)
                    }, {
                      default: p(() => [...ke[11] || (ke[11] = [
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
            M.value.length ? (n(), D(_t, {
              key: 1,
              title: "NEW",
              count: M.value.length
            }, {
              default: p(() => [
                (n(!0), i(H, null, ye(M.value, (ce) => (n(), D(Lt, {
                  key: ce.name,
                  status: ce.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: p(() => [
                    $(d(ce.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: p(() => [
                    $(d(ce.name), 1)
                  ]),
                  subtitle: p(() => [
                    $(d(ue(ce)), 1)
                  ]),
                  actions: p(() => [
                    k(we, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => Y(ce.name)
                    }, {
                      default: p(() => [...ke[12] || (ke[12] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(we, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => ie(ce.name)
                    }, {
                      default: p(() => [...ke[13] || (ke[13] = [
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
            O.value.length ? (n(), D(_t, {
              key: 2,
              title: "MODIFIED",
              count: O.value.length
            }, {
              default: p(() => [
                (n(!0), i(H, null, ye(O.value, (ce) => (n(), D(Lt, {
                  key: ce.name,
                  status: ce.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: p(() => [...ke[14] || (ke[14] = [
                    $("⚡", -1)
                  ])]),
                  title: p(() => [
                    $(d(ce.name), 1)
                  ]),
                  subtitle: p(() => [
                    $(d(ue(ce)), 1)
                  ]),
                  actions: p(() => [
                    k(we, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => Y(ce.name)
                    }, {
                      default: p(() => [...ke[15] || (ke[15] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(we, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => ie(ce.name)
                    }, {
                      default: p(() => [...ke[16] || (ke[16] = [
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
            G.value.length ? (n(), D(_t, {
              key: 3,
              title: "SYNCED",
              count: G.value.length,
              collapsible: !0,
              "initially-expanded": f.value,
              onToggle: ke[2] || (ke[2] = (ce) => f.value = ce)
            }, {
              default: p(() => [
                (n(!0), i(H, null, ye(E.value, (ce) => (n(), D(Lt, {
                  key: ce.name,
                  status: ce.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: p(() => [
                    $(d(ce.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: p(() => [
                    $(d(ce.name), 1)
                  ]),
                  subtitle: p(() => [
                    $(d(ue(ce)), 1)
                  ]),
                  actions: p(() => [
                    k(we, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => Y(ce.name)
                    }, {
                      default: p(() => [...ke[17] || (ke[17] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(we, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => ie(ce.name)
                    }, {
                      default: p(() => [...ke[18] || (ke[18] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && G.value.length > 5 ? (n(), D(we, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: ke[1] || (ke[1] = (ce) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: p(() => [
                    $(" View all " + d(G.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            T.value.length ? y("", !0) : (n(), D(gs, {
              key: 4,
              icon: "📭",
              message: m.value ? `No workflows match '${m.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      g.value && w.value ? (n(), D(sg, {
        key: 0,
        "workflow-name": w.value,
        onClose: ke[3] || (ke[3] = (ce) => g.value = !1),
        onResolve: ke[4] || (ke[4] = (ce) => le(w.value)),
        onRefresh: ke[5] || (ke[5] = (ce) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      _.value && w.value ? (n(), D(c_, {
        key: 1,
        "workflow-name": w.value,
        onClose: J,
        onInstall: V,
        onRefresh: ke[6] || (ke[6] = (ce) => a("refresh")),
        onRestart: Oe
      }, null, 8, ["workflow-name"])) : y("", !0),
      h.value && w.value ? (n(), D(Ug, {
        key: 2,
        "workflow-name": w.value,
        onClose: ke[7] || (ke[7] = (ce) => h.value = !1),
        onRefresh: ee
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), N_ = /* @__PURE__ */ Ce(L_, [["__scopeId", "data-v-894ef6ed"]]), U_ = /* @__PURE__ */ be({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Ne(["summary-bar", e.variant])
    }, [
      nt(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Cn = /* @__PURE__ */ Ce(U_, [["__scopeId", "data-v-ccb7816e"]]), O_ = {
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
}, pk = /* @__PURE__ */ be({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: a, addModelSource: l, removeModelSource: r, openFileLocation: u } = ut(), c = b(null), m = b(!0), f = b(null), v = b(""), g = b(!1), _ = b(null), h = b(null), w = b(null), x = b(null);
    let C = null;
    function S(E, L = "success", ie = 2e3) {
      C && clearTimeout(C), x.value = { message: E, type: L }, C = setTimeout(() => {
        x.value = null;
      }, ie);
    }
    function z(E) {
      if (!E) return "Unknown";
      const L = 1024 * 1024 * 1024, ie = 1024 * 1024;
      return E >= L ? `${(E / L).toFixed(1)} GB` : E >= ie ? `${(E / ie).toFixed(0)} MB` : `${(E / 1024).toFixed(0)} KB`;
    }
    function T(E) {
      navigator.clipboard.writeText(E), S("Copied to clipboard!");
    }
    async function I(E) {
      try {
        await u(E), S("Opening file location...");
      } catch {
        S("Failed to open location", "error");
      }
    }
    async function M() {
      if (!(!v.value.trim() || !c.value)) {
        g.value = !0, h.value = null, w.value = null;
        try {
          await l(c.value.hash, v.value.trim()), w.value = "Source added successfully!", v.value = "", await G();
        } catch (E) {
          h.value = E instanceof Error ? E.message : "Failed to add source";
        } finally {
          g.value = !1;
        }
      }
    }
    async function O(E) {
      if (c.value) {
        _.value = E, h.value = null, w.value = null;
        try {
          await r(c.value.hash, E), S("Source removed"), await G();
        } catch (L) {
          h.value = L instanceof Error ? L.message : "Failed to remove source";
        } finally {
          _.value = null;
        }
      }
    }
    async function G() {
      m.value = !0, f.value = null;
      try {
        c.value = await a(o.identifier);
      } catch (E) {
        f.value = E instanceof Error ? E.message : "Failed to load model details";
      } finally {
        m.value = !1;
      }
    }
    return lt(G), (E, L) => {
      var ie;
      return n(), i(H, null, [
        k(Ct, {
          title: `Model Details: ${((ie = c.value) == null ? void 0 : ie.filename) || "Loading..."}`,
          size: "lg",
          loading: m.value,
          error: f.value,
          onClose: L[5] || (L[5] = (le) => E.$emit("close"))
        }, {
          body: p(() => {
            var le, Y, K, V;
            return [
              c.value ? (n(), i("div", O_, [
                t("section", A_, [
                  t("div", z_, [
                    L[6] || (L[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", V_, d(c.value.hash || "Not computed"), 1),
                    c.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[0] || (L[0] = (J) => T(c.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", F_, [
                    L[7] || (L[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", B_, d(c.value.blake3 || "Not computed"), 1),
                    c.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[1] || (L[1] = (J) => T(c.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", W_, [
                    L[8] || (L[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", G_, d(c.value.sha256 || "Not computed"), 1),
                    c.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[2] || (L[2] = (J) => T(c.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", j_, [
                    L[9] || (L[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", H_, d(z(c.value.size)), 1)
                  ]),
                  t("div", K_, [
                    L[10] || (L[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", q_, d(c.value.category), 1)
                  ]),
                  t("div", Y_, [
                    L[11] || (L[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", J_, d(c.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", Q_, [
                  t("h4", X_, "Locations (" + d(((le = c.value.locations) == null ? void 0 : le.length) || 0) + ")", 1),
                  (Y = c.value.locations) != null && Y.length ? (n(), i("div", Z_, [
                    (n(!0), i(H, null, ye(c.value.locations, (J, ee) => (n(), i("div", {
                      key: ee,
                      class: "location-item"
                    }, [
                      t("span", ek, d(J.path), 1),
                      J.modified ? (n(), i("span", tk, "Modified: " + d(J.modified), 1)) : y("", !0),
                      J.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (Oe) => I(J.path)
                      }, " Open File Location ", 8, sk)) : y("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", ok, "No locations found"))
                ]),
                t("section", nk, [
                  t("h4", ak, "Download Sources (" + d(((K = c.value.sources) == null ? void 0 : K.length) || 0) + ")", 1),
                  (V = c.value.sources) != null && V.length ? (n(), i("div", lk, [
                    (n(!0), i(H, null, ye(c.value.sources, (J, ee) => (n(), i("div", {
                      key: ee,
                      class: "source-item"
                    }, [
                      t("span", ik, d(J.type) + ":", 1),
                      t("a", {
                        href: J.url,
                        target: "_blank",
                        class: "source-url"
                      }, d(J.url), 9, rk),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: _.value === J.url,
                        onClick: (Oe) => O(J.url)
                      }, d(_.value === J.url ? "..." : "×"), 9, uk)
                    ]))), 128))
                  ])) : (n(), i("div", ck, " No download sources configured ")),
                  t("div", dk, [
                    at(t("input", {
                      "onUpdate:modelValue": L[3] || (L[3] = (J) => v.value = J),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [es, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || g.value,
                      onClick: M
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
              onClick: L[4] || (L[4] = (le) => E.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (n(), D(Ut, { to: "body" }, [
          x.value ? (n(), i("div", {
            key: 0,
            class: Ne(["toast", x.value.type])
          }, d(x.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), wl = /* @__PURE__ */ Ce(pk, [["__scopeId", "data-v-f15cbb56"]]), gk = ["disabled"], hk = { class: "dropdown-value" }, yk = ["onClick"], wk = {
  key: 0,
  class: "dropdown-error"
}, _k = /* @__PURE__ */ be({
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
    const o = e, a = s, l = b(!1), r = b(null), u = b(null), c = b({});
    function m(S) {
      return typeof S == "string" ? S : S.value;
    }
    function f(S) {
      return typeof S == "string" ? S : S.label;
    }
    const v = U(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const S = o.options.find((z) => m(z) === o.modelValue);
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
      const S = r.value.getBoundingClientRect(), z = window.innerHeight, T = z - S.bottom, I = S.top, M = Math.min(300, o.options.length * 36 + 8), O = T < M && I > T;
      c.value = {
        position: "fixed",
        left: `${S.left}px`,
        width: `${S.width}px`,
        maxHeight: "300px",
        ...O ? { bottom: `${z - S.top + 4}px` } : { top: `${S.bottom + 4}px` }
      };
    }
    St(l, async (S) => {
      S && (await Rt(), w());
    });
    function x() {
      l.value && w();
    }
    function C(S) {
      S.key === "Escape" && l.value && _();
    }
    return lt(() => {
      window.addEventListener("scroll", x, !0), window.addEventListener("keydown", C);
    }), Xs(() => {
      window.removeEventListener("scroll", x, !0), window.removeEventListener("keydown", C);
    }), (S, z) => (n(), i("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      t("button", {
        type: "button",
        class: Ne(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: g
      }, [
        t("span", hk, d(v.value), 1),
        z[0] || (z[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, gk),
      (n(), D(Ut, { to: "body" }, [
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
          style: Ft(c.value)
        }, [
          (n(!0), i(H, null, ye(e.options, (T) => (n(), i("div", {
            key: m(T),
            class: Ne(["dropdown-option", { selected: m(T) === e.modelValue }]),
            onClick: (I) => h(T)
          }, d(f(T)), 11, yk))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (n(), i("span", wk, d(e.error), 1)) : y("", !0)
    ], 512));
  }
}), kk = /* @__PURE__ */ Ce(_k, [["__scopeId", "data-v-857e085b"]]);
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
}, Rk = {
  key: 0,
  class: "loading-state"
}, Mk = {
  key: 1,
  class: "error-state"
}, Dk = { class: "toolbar" }, Lk = { class: "toolbar-actions" }, Nk = { class: "file-list-container" }, Uk = {
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
}, Yk = { class: "action-bar" }, Jk = { class: "summary-info" }, Qk = { class: "summary-count" }, Xk = { class: "summary-size" }, Zk = /* @__PURE__ */ be({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = ut(), u = b([]), c = b(/* @__PURE__ */ new Set()), m = b(!1), f = b(null), v = b(""), g = b(!1), _ = b("name"), h = b(!0), w = b(""), x = b(""), C = b(""), S = b([]), z = b(!1);
    let T = !1;
    const I = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, M = U(() => {
      let W = u.value;
      if (o.initialPath) {
        const de = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        W = W.filter((B) => B.path.startsWith(de) || B.path === o.initialPath);
      }
      if (g.value && (W = W.filter((de) => de.is_model_file)), v.value.trim()) {
        const de = v.value.toLowerCase();
        W = W.filter((B) => B.path.toLowerCase().includes(de));
      }
      return W;
    }), O = U(() => {
      const W = [...M.value];
      return W.sort((de, B) => {
        let N;
        return _.value === "name" ? N = de.path.localeCompare(B.path) : N = de.size - B.size, h.value ? N : -N;
      }), W;
    }), G = U(() => M.value.length === 0 ? !1 : M.value.every((W) => c.value.has(W.path))), E = U(() => M.value.some((W) => c.value.has(W.path))), L = U(() => {
      const W = S.value.map((de) => ({
        label: de,
        value: de
      }));
      return W.push({ label: "Custom path...", value: "__custom__" }), W;
    }), ie = U(() => w.value === "__custom__" ? C.value.trim().length > 0 : w.value.length > 0), le = U(() => {
      let W = 0;
      for (const de of c.value) {
        const B = u.value.find((N) => N.path === de);
        B && (W += B.size);
      }
      return W;
    });
    function Y(W) {
      if (W === 0) return "0 B";
      const de = 1024 * 1024 * 1024, B = 1024 * 1024, N = 1024;
      return W >= de ? `${(W / de).toFixed(2)} GB` : W >= B ? `${(W / B).toFixed(1)} MB` : W >= N ? `${(W / N).toFixed(0)} KB` : `${W} B`;
    }
    function K(W) {
      const de = W.match(I);
      return de ? `${de[1]}${de[4]}` : null;
    }
    function V(W) {
      const de = new Set(c.value), B = de.has(W.path), N = W.shard_group || K(W.path);
      if (N) {
        const re = u.value.filter((Ve) => (Ve.shard_group || K(Ve.path)) === N);
        B ? re.forEach((Ve) => de.delete(Ve.path)) : re.forEach((Ve) => de.add(Ve.path));
      } else
        B ? de.delete(W.path) : de.add(W.path);
      c.value = de;
    }
    function J() {
      const W = new Set(c.value);
      for (const de of M.value)
        de.is_model_file && W.add(de.path);
      c.value = W;
    }
    function ee() {
      c.value = /* @__PURE__ */ new Set();
    }
    function Oe() {
      if (G.value) {
        const W = new Set(c.value);
        for (const de of M.value)
          W.delete(de.path);
        c.value = W;
      } else {
        const W = new Set(c.value);
        for (const de of M.value)
          W.add(de.path);
        c.value = W;
      }
    }
    function ae(W) {
      _.value === W ? h.value = !h.value : (_.value = W, h.value = !0);
    }
    function pe(W) {
      const de = W.split("/");
      return de.length >= 2 ? de[de.length - 2] : null;
    }
    function ue() {
      if (z.value || c.value.size === 0) return;
      const W = /* @__PURE__ */ new Set();
      for (const N of c.value) {
        const re = pe(N);
        re && W.add(re.toLowerCase());
      }
      if (W.size !== 1) return;
      const de = [...W][0], B = S.value.find(
        (N) => N.toLowerCase() === de
      );
      B && B !== w.value && (T = !0, w.value = B, Rt(() => {
        T = !1;
      }));
    }
    function ze() {
      return w.value === "__custom__" ? C.value.trim() : x.value.trim() ? `${w.value}/${x.value.trim()}` : w.value;
    }
    function $e() {
      if (c.value.size === 0 || !ie.value) return;
      const W = ze(), de = [];
      for (const B of c.value) {
        const N = u.value.find((re) => re.path === B);
        N && de.push({
          url: xk(o.repoId, o.revision, N.path),
          destination: W,
          filename: N.path.split("/").pop() || N.path
        });
      }
      a("queue", de);
    }
    async function ke() {
      if (o.repoId) {
        m.value = !0, f.value = null;
        try {
          const W = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, de = await l(W);
          if (u.value = de.files, o.preselectedFile) {
            const B = u.value.find((N) => N.path === o.preselectedFile);
            B && V(B);
          }
        } catch (W) {
          f.value = W instanceof Error ? W.message : "Failed to load repository";
        } finally {
          m.value = !1;
        }
      }
    }
    async function ce() {
      try {
        const W = await r();
        S.value = W.directories, W.directories.length > 0 && !w.value && (w.value = W.directories[0]);
      } catch {
        S.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], w.value || (w.value = "checkpoints");
      }
    }
    return St(() => [o.repoId, o.revision], () => {
      o.repoId && ke();
    }, { immediate: !1 }), St(() => o.repoId, () => {
      z.value = !1;
    }), St(c, () => {
      ue();
    }, { deep: !0 }), St(S, () => {
      S.value.length > 0 && c.value.size > 0 && ue();
    }), St(w, (W, de) => {
      T || de === "" || (z.value = !0);
    }), lt(() => {
      ke(), ce();
    }), (W, de) => (n(), i("div", Sk, [
      t("div", Ik, [
        t("button", {
          class: "back-btn",
          onClick: de[0] || (de[0] = (B) => W.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", Ek, [
          t("span", Tk, d(e.repoId), 1),
          e.revision ? (n(), i("span", Pk, d(e.revision), 1)) : y("", !0)
        ])
      ]),
      m.value ? (n(), i("div", Rk, " Loading repository files... ")) : f.value ? (n(), i("div", Mk, d(f.value), 1)) : (n(), i(H, { key: 2 }, [
        t("div", Dk, [
          k(ot, {
            modelValue: v.value,
            "onUpdate:modelValue": de[1] || (de[1] = (B) => v.value = B),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", Lk, [
            t("button", {
              class: Ne(["toggle-btn", { active: g.value }]),
              onClick: de[2] || (de[2] = (B) => g.value = !g.value)
            }, d(g.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: J
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: ee
            }, "Clear")
          ])
        ]),
        t("div", Nk, [
          M.value.length > 0 ? (n(), i("div", Uk, [
            t("input", {
              type: "checkbox",
              checked: G.value,
              indeterminate: E.value && !G.value,
              class: "file-checkbox",
              onChange: Oe
            }, null, 40, Ok),
            t("span", {
              class: "header-name",
              onClick: de[3] || (de[3] = (B) => ae("name"))
            }, [
              de[9] || (de[9] = $(" Name ", -1)),
              t("span", Ak, d(_.value === "name" ? h.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: de[4] || (de[4] = (B) => ae("size"))
            }, [
              de[10] || (de[10] = $(" Size ", -1)),
              t("span", zk, d(_.value === "size" ? h.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          M.value.length === 0 ? (n(), i("div", Vk, d(u.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", Fk, [
            (n(!0), i(H, null, ye(O.value, (B) => (n(), i("div", {
              key: B.path,
              class: Ne(["file-item", { selected: c.value.has(B.path) }]),
              onClick: (N) => V(B)
            }, [
              t("input", {
                type: "checkbox",
                checked: c.value.has(B.path),
                class: "file-checkbox",
                onClick: de[5] || (de[5] = gt(() => {
                }, ["stop"])),
                onChange: (N) => V(B)
              }, null, 40, Wk),
              t("span", Gk, d(B.path), 1),
              t("span", jk, d(Y(B.size)), 1)
            ], 10, Bk))), 128))
          ]))
        ]),
        t("div", Hk, [
          de[11] || (de[11] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", Kk, [
            k(kk, {
              modelValue: w.value,
              "onUpdate:modelValue": de[6] || (de[6] = (B) => w.value = B),
              options: L.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            w.value !== "__custom__" ? (n(), i("span", qk, "/")) : y("", !0),
            w.value !== "__custom__" ? (n(), D(ot, {
              key: 1,
              modelValue: x.value,
              "onUpdate:modelValue": de[7] || (de[7] = (B) => x.value = B),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : y("", !0)
          ]),
          w.value === "__custom__" ? (n(), D(ot, {
            key: 0,
            modelValue: C.value,
            "onUpdate:modelValue": de[8] || (de[8] = (B) => C.value = B),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : y("", !0)
        ]),
        t("div", Yk, [
          t("div", Jk, [
            t("span", Qk, d(c.value.size) + " file(s) selected", 1),
            t("span", Xk, d(Y(le.value)), 1)
          ]),
          k(De, {
            variant: "primary",
            disabled: c.value.size === 0 || !ie.value,
            onClick: $e
          }, {
            default: p(() => [...de[12] || (de[12] = [
              $(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), eb = /* @__PURE__ */ Ce(Zk, [["__scopeId", "data-v-183acebc"]]), tb = { class: "token-config-modal" }, sb = { class: "provider-info" }, ob = { class: "provider-icon" }, nb = { class: "provider-name" }, ab = {
  key: 0,
  class: "current-token"
}, lb = { class: "mask" }, ib = { class: "token-input-section" }, rb = { class: "input-label" }, ub = { class: "help-text" }, cb = ["href"], db = { class: "modal-actions" }, mb = /* @__PURE__ */ be({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: s }) {
    const o = e, a = s, { updateConfig: l } = ut(), r = b(""), u = b(!1), c = b(!1), m = U(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), f = U(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), v = U(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), g = U(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), _ = U(
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
    return (x, C) => (n(), D(Ct, {
      title: "Configure API Token",
      onClose: C[2] || (C[2] = (S) => x.$emit("close"))
    }, {
      body: p(() => [
        t("div", tb, [
          t("div", sb, [
            t("span", ob, d(f.value), 1),
            t("span", nb, d(m.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", ab, [
            C[4] || (C[4] = t("span", { class: "label" }, "Current token:", -1)),
            t("span", lb, d(e.currentTokenMask), 1),
            k(De, {
              variant: "danger",
              size: "sm",
              onClick: w,
              loading: c.value
            }, {
              default: p(() => [...C[3] || (C[3] = [
                $(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0),
          t("div", ib, [
            t("label", rb, d(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            k(ot, {
              modelValue: r.value,
              "onUpdate:modelValue": C[0] || (C[0] = (S) => r.value = S),
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
          k(De, {
            variant: "secondary",
            onClick: C[1] || (C[1] = (S) => x.$emit("close"))
          }, {
            default: p(() => [...C[5] || (C[5] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(De, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: u.value,
            onClick: h
          }, {
            default: p(() => [...C[6] || (C[6] = [
              $(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }));
  }
}), fb = /* @__PURE__ */ Ce(mb, [["__scopeId", "data-v-0687d0ce"]]), vb = { class: "huggingface-tab" }, pb = {
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
}, Rb = {
  key: 4,
  class: "hint-state"
}, Mb = /* @__PURE__ */ be({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s, getConfig: o } = ut(), a = b("search"), l = b(""), r = b([]), u = b(!1), c = b(null), m = b(!1), f = b(null), v = b("main"), g = b(), _ = b(), h = b(!1), w = b(null), x = U(() => {
      if (!c.value) return !1;
      const G = c.value.toLowerCase();
      return c.value.includes("401") || c.value.includes("403") || G.includes("authentication") || G.includes("unauthorized");
    });
    function C(G) {
      return G >= 1e6 ? `${(G / 1e6).toFixed(1)}M` : G >= 1e3 ? `${(G / 1e3).toFixed(1)}K` : String(G);
    }
    async function S() {
      const G = l.value.trim();
      if (!G) return;
      c.value = null;
      const E = $k(G);
      if (E.kind === "file" && E.repoId && E.path) {
        f.value = E.repoId, v.value = E.revision || "main";
        const L = E.path.split("/");
        L.length > 1 ? g.value = L.slice(0, -1).join("/") : g.value = void 0, _.value = E.path, a.value = "browse";
        return;
      }
      if (E.kind === "repo" && E.repoId) {
        f.value = E.repoId, v.value = E.revision || "main", g.value = E.path, _.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(G) && !G.includes("://")) {
        f.value = G, v.value = "main", g.value = void 0, _.value = void 0, a.value = "browse";
        return;
      }
      u.value = !0;
      try {
        const L = await s(G);
        r.value = L.results, m.value = !0;
      } catch (L) {
        c.value = L instanceof Error ? L.message : "Search failed";
      } finally {
        u.value = !1;
      }
    }
    function z(G) {
      f.value = G, v.value = "main", g.value = void 0, _.value = void 0, a.value = "browse";
    }
    function T() {
      a.value = "search", f.value = null, g.value = void 0, _.value = void 0;
    }
    async function I() {
      try {
        const G = await o();
        w.value = G.huggingface_token || null;
      } catch (G) {
        console.error("Failed to load config:", G);
      }
    }
    function M() {
      I(), x.value && l.value && S();
    }
    function O() {
      w.value = null;
    }
    return lt(I), (G, E) => (n(), i("div", vb, [
      a.value === "search" ? (n(), i("div", pb, [
        t("div", gb, [
          t("div", hb, [
            k(ot, {
              modelValue: l.value,
              "onUpdate:modelValue": E[0] || (E[0] = (L) => l.value = L),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: as(S, ["enter"])
            }, null, 8, ["modelValue"]),
            k(De, {
              variant: "primary",
              onClick: S,
              loading: u.value
            }, {
              default: p(() => [...E[5] || (E[5] = [
                $(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          k(De, {
            variant: "secondary",
            size: "sm",
            onClick: E[1] || (E[1] = (L) => h.value = !0)
          }, {
            default: p(() => [
              $(d(w.value ? `Token: ${w.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      a.value === "search" ? (n(), i("div", yb, [
        u.value ? (n(), i("div", wb, " Searching HuggingFace... ")) : c.value ? (n(), i("div", _b, [
          t("p", null, d(c.value), 1),
          x.value ? (n(), D(De, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: E[2] || (E[2] = (L) => h.value = !0)
          }, {
            default: p(() => [...E[6] || (E[6] = [
              $(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (n(), i("div", kb, [
          (n(!0), i(H, null, ye(r.value, (L) => (n(), i("div", {
            key: L.repo_id,
            class: "repo-card",
            onClick: (ie) => z(L.repo_id)
          }, [
            t("div", $b, [
              t("span", Cb, d(L.repo_id), 1),
              t("div", xb, [
                t("span", Sb, [
                  E[7] || (E[7] = t("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + d(C(L.downloads)), 1)
                ]),
                t("span", Ib, [
                  E[8] || (E[8] = t("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + d(C(L.likes)), 1)
                ])
              ])
            ]),
            L.description ? (n(), i("p", Eb, d(L.description), 1)) : y("", !0),
            L.tags.length > 0 ? (n(), i("div", Tb, [
              (n(!0), i(H, null, ye(L.tags.slice(0, 5), (ie) => (n(), i("span", {
                key: ie,
                class: "tag"
              }, d(ie), 1))), 128))
            ])) : y("", !0)
          ], 8, bb))), 128))
        ])) : m.value ? (n(), i("div", Pb, " No repositories found ")) : (n(), i("div", Rb, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), D(eb, {
        key: 2,
        "repo-id": f.value,
        revision: v.value,
        "initial-path": g.value,
        "preselected-file": _.value,
        onBack: T,
        onQueue: E[3] || (E[3] = (L) => G.$emit("queue", L))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      h.value ? (n(), D(fb, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": w.value,
        onClose: E[4] || (E[4] = (L) => h.value = !1),
        onSaved: M,
        onCleared: O
      }, null, 8, ["current-token-mask"])) : y("", !0)
    ]));
  }
}), Db = /* @__PURE__ */ Ce(Mb, [["__scopeId", "data-v-e13209bf"]]), Lb = { class: "civitai-tab" }, Nb = /* @__PURE__ */ be({
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
}), Ub = /* @__PURE__ */ Ce(Nb, [["__scopeId", "data-v-44948051"]]), Ob = { class: "direct-url-tab" }, Ab = { class: "input-group" }, zb = { class: "input-group" }, Vb = {
  key: 0,
  class: "error"
}, Fb = { class: "actions" }, Bb = /* @__PURE__ */ be({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: s }) {
    const o = s, a = b(""), l = b(""), r = U(() => {
      const m = l.value.trim();
      if (!m) return null;
      const f = m.replace(/\\/g, "/").split("/").pop() || "";
      return f.includes(".") && !f.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), u = U(() => a.value.trim() !== "" && l.value.trim() !== "" && !r.value), c = () => {
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
        k(De, {
          variant: "primary",
          disabled: !u.value,
          onClick: c
        }, {
          default: p(() => [...f[4] || (f[4] = [
            $(" Queue Download ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Wb = /* @__PURE__ */ Ce(Bb, [["__scopeId", "data-v-01def7aa"]]), Gb = { class: "download-modal" }, jb = { class: "tab-bar" }, Hb = ["onClick"], Kb = { class: "tab-content" }, qb = /* @__PURE__ */ be({
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
    ], r = b("huggingface");
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
    return (f, v) => e.show ? (n(), D(Ct, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: m
    }, {
      body: p(() => [
        t("div", Gb, [
          t("div", jb, [
            (n(), i(H, null, ye(l, (g) => t("button", {
              key: g.id,
              class: Ne(["tab-btn", { active: r.value === g.id }]),
              onClick: (_) => r.value = g.id
            }, d(g.icon) + " " + d(g.label), 11, Hb)), 64))
          ]),
          t("div", Kb, [
            r.value === "huggingface" ? (n(), D(Db, {
              key: 0,
              onQueue: u
            })) : r.value === "civitai" ? (n(), D(Ub, { key: 1 })) : r.value === "direct" ? (n(), D(Wb, {
              key: 2,
              onQueue: c
            })) : y("", !0)
          ])
        ])
      ]),
      footer: p(() => [
        k(De, {
          variant: "secondary",
          onClick: m
        }, {
          default: p(() => [...v[0] || (v[0] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), Hr = /* @__PURE__ */ Ce(qb, [["__scopeId", "data-v-90a9f401"]]), Yb = /* @__PURE__ */ be({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: a, getStatus: l } = ut(), r = b([]), u = b([]), c = b("production"), m = b(!1), f = b(null), v = b(""), g = b(!1), _ = b(null), h = b(!1);
    function w() {
      g.value = !1, o("navigate", "model-index");
    }
    const x = U(
      () => r.value.reduce((E, L) => E + (L.size || 0), 0)
    ), C = U(() => {
      if (!v.value.trim()) return r.value;
      const E = v.value.toLowerCase();
      return r.value.filter((L) => L.filename.toLowerCase().includes(E));
    }), S = U(() => {
      if (!v.value.trim()) return u.value;
      const E = v.value.toLowerCase();
      return u.value.filter((L) => L.filename.toLowerCase().includes(E));
    }), z = U(() => {
      const E = {};
      for (const ie of C.value) {
        const le = ie.type || "other";
        E[le] || (E[le] = []), E[le].push(ie);
      }
      const L = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(E).sort(([ie], [le]) => {
        const Y = L.indexOf(ie), K = L.indexOf(le);
        return Y >= 0 && K >= 0 ? Y - K : Y >= 0 ? -1 : K >= 0 ? 1 : ie.localeCompare(le);
      }).map(([ie, le]) => ({ type: ie, models: le }));
    });
    function T(E) {
      if (!E) return "Unknown";
      const L = E / (1024 * 1024);
      return L >= 1024 ? `${(L / 1024).toFixed(1)} GB` : `${L.toFixed(0)} MB`;
    }
    function I(E) {
      _.value = E.hash || E.filename;
    }
    function M(E) {
      o("navigate", "model-index");
    }
    function O(E) {
      alert(`Download functionality not yet implemented for ${E}`);
    }
    async function G() {
      m.value = !0, f.value = null;
      try {
        const E = await a();
        r.value = E, u.value = [];
        const L = await l();
        c.value = L.environment || "production";
      } catch (E) {
        f.value = E instanceof Error ? E.message : "Failed to load models";
      } finally {
        m.value = !1;
      }
    }
    return lt(G), (E, L) => (n(), i(H, null, [
      k(Kt, null, {
        header: p(() => [
          k(qt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: L[1] || (L[1] = (ie) => g.value = !0)
          }, {
            actions: p(() => [
              k(we, {
                variant: "primary",
                size: "sm",
                onClick: L[0] || (L[0] = (ie) => h.value = !0)
              }, {
                default: p(() => [...L[6] || (L[6] = [
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
        search: p(() => [
          k(Vo, {
            modelValue: v.value,
            "onUpdate:modelValue": L[2] || (L[2] = (ie) => v.value = ie),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: p(() => [
          m.value ? (n(), D(zs, {
            key: 0,
            message: "Loading environment models..."
          })) : f.value ? (n(), D(Vs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: G
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            r.value.length ? (n(), D(Cn, {
              key: 0,
              variant: "compact"
            }, {
              default: p(() => [
                $(" Total: " + d(r.value.length) + " models • " + d(T(x.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(H, null, ye(z.value, (ie) => (n(), D(_t, {
              key: ie.type,
              title: ie.type.toUpperCase(),
              count: ie.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: p(() => [
                (n(!0), i(H, null, ye(ie.models, (le) => (n(), D(Lt, {
                  key: le.hash || le.filename,
                  status: "synced"
                }, {
                  icon: p(() => [...L[7] || (L[7] = [
                    $("📦", -1)
                  ])]),
                  title: p(() => [
                    $(d(le.filename), 1)
                  ]),
                  subtitle: p(() => [
                    $(d(T(le.size)), 1)
                  ]),
                  details: p(() => [
                    k($t, {
                      label: "Used by:",
                      value: (le.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    k($t, {
                      label: "Path:",
                      value: le.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: p(() => [
                    k(we, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => I(le)
                    }, {
                      default: p(() => [...L[8] || (L[8] = [
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
            S.value.length ? (n(), D(_t, {
              key: 1,
              title: "MISSING",
              count: S.value.length
            }, {
              default: p(() => [
                (n(!0), i(H, null, ye(S.value, (ie) => (n(), D(Lt, {
                  key: ie.filename,
                  status: "broken"
                }, {
                  icon: p(() => [...L[9] || (L[9] = [
                    $("⚠", -1)
                  ])]),
                  title: p(() => [
                    $(d(ie.filename), 1)
                  ]),
                  subtitle: p(() => [...L[10] || (L[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: p(() => {
                    var le;
                    return [
                      k($t, {
                        label: "Required by:",
                        value: ((le = ie.workflow_names) == null ? void 0 : le.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: p(() => [
                    k(we, {
                      variant: "primary",
                      size: "sm",
                      onClick: (le) => O(ie.filename)
                    }, {
                      default: p(() => [...L[11] || (L[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(we, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => M(ie.filename)
                    }, {
                      default: p(() => [...L[12] || (L[12] = [
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
            !C.value.length && !S.value.length ? (n(), D(gs, {
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
        onClose: L[3] || (L[3] = (ie) => g.value = !1)
      }, {
        content: p(() => [
          t("p", null, [
            L[13] || (L[13] = $(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + d(c.value) + '"', 1),
            L[14] || (L[14] = $(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: p(() => [
          k(we, {
            variant: "primary",
            onClick: w
          }, {
            default: p(() => [...L[15] || (L[15] = [
              $(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (n(), D(wl, {
        key: 0,
        identifier: _.value,
        onClose: L[4] || (L[4] = (ie) => _.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      k(Hr, {
        show: h.value,
        onClose: L[5] || (L[5] = (ie) => h.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Jb = /* @__PURE__ */ Ce(Yb, [["__scopeId", "data-v-af3ca736"]]), Qb = {
  key: 0,
  class: "indexing-progress"
}, Xb = { class: "progress-info" }, Zb = { class: "progress-label" }, e2 = { class: "progress-count" }, t2 = { class: "progress-bar" }, s2 = { class: "modal-content" }, o2 = { class: "modal-header" }, n2 = { class: "modal-body" }, a2 = { class: "input-group" }, l2 = { class: "current-path" }, i2 = { class: "input-group" }, r2 = { class: "modal-footer" }, u2 = /* @__PURE__ */ be({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = ut(), u = s, c = b([]), m = b(!1), f = b(!1), v = b(null), g = b(""), _ = b(!1), h = b(null), w = b(!1), x = b(null), C = b(""), S = b(!1), z = b(!1), T = b(null), I = U(
      () => c.value.reduce((K, V) => K + (V.size || 0), 0)
    ), M = U(() => {
      if (!g.value.trim()) return c.value;
      const K = g.value.toLowerCase();
      return c.value.filter((V) => {
        const J = V, ee = V.sha256 || J.sha256_hash || "";
        return V.filename.toLowerCase().includes(K) || ee.toLowerCase().includes(K);
      });
    }), O = U(() => {
      const K = {};
      for (const J of M.value) {
        const ee = J.type || "other";
        K[ee] || (K[ee] = []), K[ee].push(J);
      }
      const V = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(K).sort(([J], [ee]) => {
        const Oe = V.indexOf(J), ae = V.indexOf(ee);
        return Oe >= 0 && ae >= 0 ? Oe - ae : Oe >= 0 ? -1 : ae >= 0 ? 1 : J.localeCompare(ee);
      }).map(([J, ee]) => ({ type: J, models: ee }));
    });
    function G(K) {
      if (!K) return "Unknown";
      const V = 1024 * 1024 * 1024, J = 1024 * 1024;
      return K >= V ? `${(K / V).toFixed(1)} GB` : K >= J ? `${(K / J).toFixed(0)} MB` : `${(K / 1024).toFixed(0)} KB`;
    }
    function E(K) {
      h.value = K.hash || K.filename;
    }
    async function L() {
      f.value = !0, v.value = null;
      try {
        const K = await a();
        await le(), K.changes > 0 && console.log(`Scan complete: ${K.changes} changes detected`);
      } catch (K) {
        v.value = K instanceof Error ? K.message : "Failed to scan models";
      } finally {
        f.value = !1;
      }
    }
    async function ie() {
      if (C.value.trim()) {
        S.value = !0, v.value = null;
        try {
          const K = await r(C.value.trim());
          x.value = K.path, w.value = !1, C.value = "", await le(), console.log(`Directory changed: ${K.models_indexed} models indexed`), u("refresh");
        } catch (K) {
          v.value = K instanceof Error ? K.message : "Failed to change directory";
        } finally {
          S.value = !1;
        }
      }
    }
    async function le() {
      m.value = !0, v.value = null;
      try {
        c.value = await o();
      } catch (K) {
        v.value = K instanceof Error ? K.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function Y() {
      try {
        const K = await l();
        x.value = K.path;
      } catch {
      }
    }
    return lt(() => {
      le(), Y();
    }), (K, V) => (n(), i(H, null, [
      k(Kt, null, {
        header: p(() => [
          k(qt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: V[2] || (V[2] = (J) => _.value = !0)
          }, {
            actions: p(() => [
              k(we, {
                variant: "primary",
                size: "sm",
                disabled: f.value,
                onClick: L
              }, {
                default: p(() => [
                  $(d(f.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(we, {
                variant: "primary",
                size: "sm",
                onClick: V[0] || (V[0] = (J) => w.value = !0)
              }, {
                default: p(() => [...V[11] || (V[11] = [
                  $(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              k(we, {
                variant: "primary",
                size: "sm",
                onClick: V[1] || (V[1] = (J) => z.value = !0)
              }, {
                default: p(() => [...V[12] || (V[12] = [
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
        search: p(() => [
          T.value ? (n(), i("div", Qb, [
            t("div", Xb, [
              t("span", Zb, d(T.value.message), 1),
              t("span", e2, d(T.value.current) + "/" + d(T.value.total), 1)
            ]),
            t("div", t2, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${T.value.current / T.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          k(Vo, {
            modelValue: g.value,
            "onUpdate:modelValue": V[3] || (V[3] = (J) => g.value = J),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: p(() => [
          m.value || T.value ? (n(), D(zs, {
            key: 0,
            message: T.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (n(), D(Vs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: le
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            c.value.length ? (n(), D(Cn, {
              key: 0,
              variant: "compact"
            }, {
              default: p(() => [
                $(" Total: " + d(c.value.length) + " models • " + d(G(I.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(H, null, ye(O.value, (J) => (n(), D(_t, {
              key: J.type,
              title: J.type.toUpperCase(),
              count: J.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: p(() => [
                (n(!0), i(H, null, ye(J.models, (ee) => (n(), D(Lt, {
                  key: ee.sha256 || ee.filename,
                  status: "synced"
                }, {
                  icon: p(() => [...V[13] || (V[13] = [
                    $("📦", -1)
                  ])]),
                  title: p(() => [
                    $(d(ee.filename), 1)
                  ]),
                  subtitle: p(() => [
                    $(d(G(ee.size)), 1)
                  ]),
                  details: p(() => [
                    k($t, {
                      label: "Hash:",
                      value: ee.hash ? ee.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: p(() => [
                    k(we, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Oe) => E(ee)
                    }, {
                      default: p(() => [...V[14] || (V[14] = [
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
            M.value.length ? y("", !0) : (n(), D(gs, {
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
        onClose: V[4] || (V[4] = (J) => _.value = !1)
      }, {
        content: p(() => [...V[15] || (V[15] = [
          t("p", null, [
            $(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            $(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      h.value ? (n(), D(wl, {
        key: 0,
        identifier: h.value,
        onClose: V[5] || (V[5] = (J) => h.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (n(), D(Ut, { to: "body" }, [
        w.value ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: V[9] || (V[9] = gt((J) => w.value = !1, ["self"]))
        }, [
          t("div", s2, [
            t("div", o2, [
              V[16] || (V[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: V[6] || (V[6] = (J) => w.value = !1)
              }, "✕")
            ]),
            t("div", n2, [
              t("div", a2, [
                V[17] || (V[17] = t("label", null, "Current Directory", -1)),
                t("code", l2, d(x.value || "Not set"), 1)
              ]),
              t("div", i2, [
                V[18] || (V[18] = t("label", null, "New Directory Path", -1)),
                k(ot, {
                  modelValue: C.value,
                  "onUpdate:modelValue": V[7] || (V[7] = (J) => C.value = J),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              V[19] || (V[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", r2, [
              k(De, {
                variant: "secondary",
                onClick: V[8] || (V[8] = (J) => w.value = !1)
              }, {
                default: p(() => [...V[20] || (V[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              k(De, {
                variant: "primary",
                disabled: !C.value.trim() || S.value,
                loading: S.value,
                onClick: ie
              }, {
                default: p(() => [
                  $(d(S.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      k(Hr, {
        show: z.value,
        onClose: V[10] || (V[10] = (J) => z.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), c2 = /* @__PURE__ */ Ce(u2, [["__scopeId", "data-v-3705114c"]]), d2 = { class: "node-details" }, m2 = { class: "status-row" }, f2 = {
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
}, S2 = /* @__PURE__ */ be({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = U(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = U(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = U(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (c, m) => (n(), D(Ct, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: m[1] || (m[1] = (f) => a("close"))
    }, {
      body: p(() => [
        t("div", d2, [
          t("div", m2, [
            m[2] || (m[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Ne(["status-badge", l.value])
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
              (n(!0), i(H, null, ye(e.node.used_in_workflows, (f) => (n(), i("span", {
                key: f,
                class: "workflow-tag"
              }, d(f), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: p(() => [
        k(De, {
          variant: "secondary",
          onClick: m[0] || (m[0] = (f) => a("close"))
        }, {
          default: p(() => [...m[11] || (m[11] = [
            $(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), I2 = /* @__PURE__ */ Ce(S2, [["__scopeId", "data-v-b342f626"]]), E2 = { class: "dialog-message" }, T2 = {
  key: 0,
  class: "dialog-details"
}, P2 = {
  key: 1,
  class: "dialog-warning"
}, R2 = /* @__PURE__ */ be({
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
    return (s, o) => (n(), D(Ct, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (a) => s.$emit("cancel"))
    }, {
      body: p(() => [
        t("p", E2, d(e.message), 1),
        e.details && e.details.length ? (n(), i("div", T2, [
          (n(!0), i(H, null, ye(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + d(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (n(), i("p", P2, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          $(" " + d(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: p(() => [
        k(De, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => s.$emit("cancel"))
        }, {
          default: p(() => [
            $(d(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (n(), D(De, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (a) => s.$emit("secondary"))
        }, {
          default: p(() => [
            $(d(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        k(De, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
        }, {
          default: p(() => [
            $(d(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), _l = /* @__PURE__ */ Ce(R2, [["__scopeId", "data-v-3670b9f5"]]), M2 = { class: "mismatch-warning" }, D2 = { class: "version-mismatch" }, L2 = { class: "version-actual" }, N2 = { class: "version-expected" }, U2 = { style: { color: "var(--cg-color-warning)" } }, O2 = { style: { color: "var(--cg-color-warning)" } }, A2 = {
  key: 0,
  class: "community-status-badge"
}, z2 = { key: 0 }, V2 = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, F2 = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, B2 = /* @__PURE__ */ be({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getNodes: l, trackNodeAsDev: r, installNode: u, uninstallNode: c, queueNodeInstall: m } = ut(), f = b({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), v = b(!1), g = b(null), _ = b(""), h = b(!1), w = b(null), x = b(/* @__PURE__ */ new Set()), C = b(null), S = U(() => {
      if (!_.value.trim()) return f.value.nodes;
      const B = _.value.toLowerCase();
      return f.value.nodes.filter(
        (N) => {
          var re, Ve;
          return N.name.toLowerCase().includes(B) || ((re = N.description) == null ? void 0 : re.toLowerCase().includes(B)) || ((Ve = N.repository) == null ? void 0 : Ve.toLowerCase().includes(B));
        }
      );
    }), z = U(
      () => S.value.filter((B) => B.installed && B.tracked)
    ), T = U(
      () => S.value.filter((B) => !B.installed && B.tracked && !B.issue_type)
    ), I = U(
      () => S.value.filter((B) => B.installed && !B.tracked)
    ), M = U(
      () => S.value.filter((B) => B.issue_type === "version_gated")
    ), O = U(
      () => S.value.filter((B) => B.issue_type === "uninstallable")
    ), G = U(() => M.value.length), E = U(() => O.value.length);
    function L(B) {
      return B.registry_id || B.name;
    }
    function ie(B) {
      return x.value.has(L(B));
    }
    async function le(B, N) {
      const re = B.registry_id;
      if (!re) {
        a("toast", `Node "${B.name}" has no package id for install`, "warning");
        return;
      }
      if (N === "git" && !B.repository) {
        a("toast", `Node "${B.name}" has no repository URL for git install`, "warning");
        return;
      }
      const Ve = {
        id: re,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      N === "git" && B.repository && (Ve.repository = B.repository, Ve.install_source = "git"), await m(Ve), x.value.add(L(B)), a("toast", `✓ Queued install for "${B.name}"`, "success");
    }
    function Y(B) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[B] || B;
    }
    const K = U(() => o.versionMismatches.length > 0);
    function V(B) {
      return !B.used_in_workflows || B.used_in_workflows.length === 0 ? "Not used in any workflows" : B.used_in_workflows.length === 1 ? B.used_in_workflows[0] : `${B.used_in_workflows.length} workflows`;
    }
    function J(B) {
      return B.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function ee(B) {
      return B.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function Oe(B) {
      return B.registry_id ? `Community-mapped package: ${B.registry_id}` : "Community-mapped package";
    }
    function ae(B) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function pe(B) {
      w.value = B;
    }
    function ue() {
      a("open-node-manager");
    }
    function ze(B) {
      C.value = {
        title: "Track as Development Node",
        message: `Track "${B}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            v.value = !0;
            const N = await r(B);
            N.status === "success" ? (a("toast", `✓ Node "${B}" tracked as development`, "success"), await de()) : a("toast", `Failed to track node: ${N.message || "Unknown error"}`, "error");
          } catch (N) {
            a("toast", `Error tracking node: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function $e(B) {
      C.value = {
        title: "Remove Untracked Node",
        message: `Remove "${B}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          C.value = null;
          try {
            v.value = !0;
            const N = await c(B);
            N.status === "success" ? (a("toast", `✓ Node "${B}" removed`, "success"), await de()) : a("toast", `Failed to remove node: ${N.message || "Unknown error"}`, "error");
          } catch (N) {
            a("toast", `Error removing node: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function ke(B) {
      C.value = {
        title: "Install Missing Node",
        message: `Install "${B}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            v.value = !0;
            const N = await u(B);
            N.status === "success" ? (a("toast", `✓ Node "${B}" installed`, "success"), await de()) : a("toast", `Failed to install node: ${N.message || "Unknown error"}`, "error");
          } catch (N) {
            a("toast", `Error installing node: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function ce(B) {
      C.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${B.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            v.value = !0, await le(B, "registry");
          } catch (N) {
            a("toast", `Error queueing install: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function W(B) {
      C.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${B.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            v.value = !0, await le(B, "git");
          } catch (N) {
            a("toast", `Error queueing git install: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    async function de() {
      v.value = !0, g.value = null;
      try {
        f.value = await l();
      } catch (B) {
        g.value = B instanceof Error ? B.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return lt(de), (B, N) => (n(), i(H, null, [
      k(Kt, null, {
        header: p(() => [
          k(qt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: N[0] || (N[0] = (re) => h.value = !0)
          }, {
            actions: p(() => [
              k(we, {
                variant: "primary",
                size: "sm",
                onClick: ue
              }, {
                default: p(() => [...N[7] || (N[7] = [
                  $(" Browse Nodes ", -1)
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
            "onUpdate:modelValue": N[1] || (N[1] = (re) => _.value = re),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: p(() => [
          v.value ? (n(), D(zs, {
            key: 0,
            message: "Loading nodes..."
          })) : g.value ? (n(), D(Vs, {
            key: 1,
            message: g.value,
            retry: !0,
            onRetry: de
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            f.value.total_count ? (n(), D(Cn, {
              key: 0,
              variant: "compact"
            }, {
              default: p(() => [
                $(d(f.value.installed_count) + " installed ", 1),
                f.value.missing_count ? (n(), i(H, { key: 0 }, [
                  $(" • " + d(f.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                G.value ? (n(), i(H, { key: 1 }, [
                  $(" • " + d(G.value) + " blocked", 1)
                ], 64)) : y("", !0),
                E.value ? (n(), i(H, { key: 2 }, [
                  $(" • " + d(E.value) + " community-mapped", 1)
                ], 64)) : y("", !0),
                f.value.untracked_count ? (n(), i(H, { key: 3 }, [
                  $(" • " + d(f.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            K.value ? (n(), D(_t, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: p(() => [
                t("div", M2, [
                  N[8] || (N[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, d(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(H, null, ye(e.versionMismatches, (re) => (n(), D(Lt, {
                  key: re.name,
                  status: "warning"
                }, {
                  icon: p(() => [...N[9] || (N[9] = [
                    $("⚠", -1)
                  ])]),
                  title: p(() => [
                    $(d(re.name), 1)
                  ]),
                  subtitle: p(() => [
                    t("span", D2, [
                      t("span", L2, d(re.actual), 1),
                      N[10] || (N[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", N2, d(re.expected), 1)
                    ])
                  ]),
                  actions: p(() => [
                    k(we, {
                      variant: "warning",
                      size: "sm",
                      onClick: N[2] || (N[2] = (Ve) => a("repair-environment"))
                    }, {
                      default: p(() => [...N[11] || (N[11] = [
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
            M.value.length ? (n(), D(_t, {
              key: 2,
              title: "BLOCKED",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: p(() => [
                (n(!0), i(H, null, ye(M.value, (re) => (n(), D(Lt, {
                  key: `blocked-${re.name}`,
                  status: "warning"
                }, {
                  icon: p(() => [...N[12] || (N[12] = [
                    $("⛔", -1)
                  ])]),
                  title: p(() => [
                    $(d(re.name), 1)
                  ]),
                  subtitle: p(() => [
                    t("span", U2, d(J(re)), 1)
                  ]),
                  details: p(() => [
                    k($t, {
                      label: "Guidance:",
                      value: re.issue_guidance || ee(re)
                    }, null, 8, ["value"]),
                    k($t, {
                      label: "Used by:",
                      value: V(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: p(() => [
                    k(we, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => pe(re)
                    }, {
                      default: p(() => [...N[13] || (N[13] = [
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
            O.value.length ? (n(), D(_t, {
              key: 3,
              title: "COMMUNITY-MAPPED",
              count: O.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: p(() => [
                (n(!0), i(H, null, ye(O.value, (re) => (n(), D(Lt, {
                  key: `community-${re.name}`,
                  status: "warning"
                }, {
                  icon: p(() => [...N[14] || (N[14] = [
                    $("⚠", -1)
                  ])]),
                  title: p(() => [
                    $(d(re.name), 1)
                  ]),
                  subtitle: p(() => [
                    t("span", O2, d(Oe(re)), 1)
                  ]),
                  details: p(() => [
                    k($t, {
                      label: "Guidance:",
                      value: re.issue_guidance || ae(re)
                    }, null, 8, ["value"]),
                    k($t, {
                      label: "Used by:",
                      value: V(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: p(() => [
                    k(we, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => pe(re)
                    }, {
                      default: p(() => [...N[15] || (N[15] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    ie(re) ? (n(), i("span", A2, "Queued")) : (n(), i(H, { key: 1 }, [
                      re.registry_id ? (n(), D(we, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (Ve) => ce(re)
                      }, {
                        default: p(() => [...N[16] || (N[16] = [
                          $(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      re.repository ? (n(), D(we, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (Ve) => W(re)
                      }, {
                        default: p(() => [...N[17] || (N[17] = [
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
            I.value.length ? (n(), D(_t, {
              key: 4,
              title: "UNTRACKED",
              count: I.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: p(() => [
                (n(!0), i(H, null, ye(I.value, (re) => (n(), D(Lt, {
                  key: re.name,
                  status: "warning"
                }, {
                  icon: p(() => [...N[18] || (N[18] = [
                    $("?", -1)
                  ])]),
                  title: p(() => [
                    $(d(re.name), 1)
                  ]),
                  subtitle: p(() => [...N[19] || (N[19] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: p(() => [
                    k($t, {
                      label: "Used by:",
                      value: V(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: p(() => [
                    k(we, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => pe(re)
                    }, {
                      default: p(() => [...N[20] || (N[20] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(we, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ve) => ze(re.name)
                    }, {
                      default: p(() => [...N[21] || (N[21] = [
                        $(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(we, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Ve) => $e(re.name)
                    }, {
                      default: p(() => [...N[22] || (N[22] = [
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
            z.value.length ? (n(), D(_t, {
              key: 5,
              title: "INSTALLED",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: p(() => [
                (n(!0), i(H, null, ye(z.value, (re) => (n(), D(Lt, {
                  key: re.name,
                  status: "synced"
                }, {
                  icon: p(() => [
                    $(d(re.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: p(() => [
                    $(d(re.name), 1)
                  ]),
                  subtitle: p(() => [
                    re.version ? (n(), i("span", z2, d(re.source === "development" ? "" : "v") + d(re.version), 1)) : (n(), i("span", V2, "version unknown")),
                    t("span", F2, " • " + d(Y(re.source)), 1)
                  ]),
                  details: p(() => [
                    k($t, {
                      label: "Used by:",
                      value: V(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: p(() => [
                    k(we, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => pe(re)
                    }, {
                      default: p(() => [...N[23] || (N[23] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(we, {
                      variant: "secondary",
                      size: "xs",
                      onClick: ue
                    }, {
                      default: p(() => [...N[24] || (N[24] = [
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
            T.value.length ? (n(), D(_t, {
              key: 6,
              title: "MISSING",
              count: T.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: p(() => [
                (n(!0), i(H, null, ye(T.value, (re) => (n(), D(Lt, {
                  key: re.name,
                  status: "missing"
                }, {
                  icon: p(() => [...N[25] || (N[25] = [
                    $("!", -1)
                  ])]),
                  title: p(() => [
                    $(d(re.name), 1)
                  ]),
                  subtitle: p(() => [...N[26] || (N[26] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: p(() => [
                    k($t, {
                      label: "Required by:",
                      value: V(re)
                    }, null, 8, ["value"])
                  ]),
                  actions: p(() => [
                    k(we, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Ve) => pe(re)
                    }, {
                      default: p(() => [...N[27] || (N[27] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    k(we, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Ve) => ke(re.name)
                    }, {
                      default: p(() => [...N[28] || (N[28] = [
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
            !z.value.length && !T.value.length && !M.value.length && !O.value.length && !I.value.length ? (n(), D(gs, {
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
        onClose: N[4] || (N[4] = (re) => h.value = !1)
      }, {
        content: p(() => [...N[29] || (N[29] = [
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
        actions: p(() => [
          k(we, {
            variant: "primary",
            onClick: N[3] || (N[3] = (re) => h.value = !1)
          }, {
            default: p(() => [...N[30] || (N[30] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), D(I2, {
        key: 0,
        node: w.value,
        onClose: N[5] || (N[5] = (re) => w.value = null)
      }, null, 8, ["node"])) : y("", !0),
      C.value ? (n(), D(_l, {
        key: 1,
        title: C.value.title,
        message: C.value.message,
        warning: C.value.warning,
        "confirm-label": C.value.confirmLabel,
        destructive: C.value.destructive,
        onConfirm: C.value.onConfirm,
        onCancel: N[6] || (N[6] = (re) => C.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), W2 = /* @__PURE__ */ Ce(B2, [["__scopeId", "data-v-3ef68ac4"]]);
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
}, Y2 = /* @__PURE__ */ be({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = b(!1), a = U(() => {
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
        class: Ne(["copy-btn", { copied: o.value }]),
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
}), J2 = /* @__PURE__ */ Ce(Y2, [["__scopeId", "data-v-7768a58d"]]), Q2 = { class: "remote-title" }, X2 = {
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
}, a$ = /* @__PURE__ */ be({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = U(() => s.fetchingRemote === s.remote.name), a = U(() => s.remote.is_default), l = U(() => s.syncStatus && s.syncStatus.behind > 0), r = U(() => s.syncStatus && s.syncStatus.ahead > 0), u = U(() => s.remote.push_url !== s.remote.fetch_url), c = U(() => {
      const f = s.remote.fetch_url, v = f.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : f.startsWith("https://") || f.startsWith("http://") ? f.replace(/\.git$/, "") : null;
    }), m = U(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (f, v) => (n(), D(Lt, {
      status: a.value ? "synced" : void 0
    }, fo({
      icon: p(() => [
        $(d(a.value ? "🔗" : "🌐"), 1)
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
        k(we, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: v[1] || (v[1] = (g) => f.$emit("fetch", e.remote.name))
        }, {
          default: p(() => [...v[6] || (v[6] = [
            $(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        k(we, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[2] || (v[2] = (g) => f.$emit("pull", e.remote.name))
        }, {
          default: p(() => [
            $(" Pull" + d(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(we, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[3] || (v[3] = (g) => f.$emit("push", e.remote.name))
        }, {
          default: p(() => [
            $(" Push" + d(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        k(we, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (g) => f.$emit("edit", e.remote.name))
        }, {
          default: p(() => [...v[7] || (v[7] = [
            $(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? y("", !0) : (n(), D(we, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[5] || (v[5] = (g) => f.$emit("remove", e.remote.name))
        }, {
          default: p(() => [...v[8] || (v[8] = [
            $(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      u.value ? {
        name: "details",
        fn: p(() => [
          e.remote.push_url !== e.remote.fetch_url ? (n(), D($t, {
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
}), l$ = /* @__PURE__ */ Ce(a$, [["__scopeId", "data-v-8310f3a8"]]), i$ = { class: "remote-form" }, r$ = { class: "form-header" }, u$ = { class: "form-body" }, c$ = {
  key: 0,
  class: "form-error"
}, d$ = { class: "form-actions" }, m$ = /* @__PURE__ */ be({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = b({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), r = b(!1), u = b(null);
    St(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const c = U(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
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
        k(Xt, null, {
          default: p(() => [
            $(d(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
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
        k(we, {
          variant: "primary",
          size: "md",
          disabled: !c.value,
          loading: r.value,
          onClick: m
        }, {
          default: p(() => [
            $(d(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        k(we, {
          variant: "ghost",
          size: "md",
          onClick: v[3] || (v[3] = (g) => f.$emit("cancel"))
        }, {
          default: p(() => [...v[4] || (v[4] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), f$ = /* @__PURE__ */ Ce(m$, [["__scopeId", "data-v-56021b18"]]), v$ = { class: "conflict-summary-box" }, p$ = { class: "summary-header" }, g$ = { class: "summary-text" }, h$ = { key: 0 }, y$ = {
  key: 1,
  class: "all-resolved"
}, w$ = { class: "summary-progress" }, _$ = { class: "progress-bar" }, k$ = { class: "progress-text" }, b$ = /* @__PURE__ */ be({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const s = e, o = U(
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
            style: Ft({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", k$, d(e.resolvedCount) + " / " + d(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), $$ = /* @__PURE__ */ Ce(b$, [["__scopeId", "data-v-4e9e6cc9"]]), C$ = { class: "modal-header" }, x$ = { class: "modal-title" }, S$ = { class: "modal-body" }, I$ = {
  key: 0,
  class: "error-box"
}, E$ = {
  key: 0,
  class: "error-hint"
}, T$ = {
  key: 1,
  class: "loading-state"
}, P$ = { class: "commit-summary" }, R$ = {
  key: 0,
  class: "commits-section"
}, M$ = { class: "commit-list" }, D$ = { class: "commit-hash" }, L$ = { class: "commit-message" }, N$ = { class: "commit-date" }, U$ = {
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
}, Z$ = { class: "modal-actions" }, vi = "comfygit.pullModelStrategy", eC = /* @__PURE__ */ be({
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
    const o = e, a = s, l = b(localStorage.getItem(vi) || "skip");
    St(l, (C) => {
      localStorage.setItem(vi, C);
    });
    const r = U(() => {
      var C;
      return ((C = o.error) == null ? void 0 : C.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = U(() => {
      if (!o.preview) return 0;
      const C = o.preview.changes.workflows;
      return C.added.length + C.modified.length + C.deleted.length;
    }), c = U(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), m = U(() => {
      var C;
      return u.value > 0 || c.value > 0 || (((C = o.preview) == null ? void 0 : C.changes.models.count) || 0) > 0;
    }), f = U(() => o.preview && Kr(o.preview) ? o.preview : null), v = U(() => {
      var C;
      return ((C = f.value) == null ? void 0 : C.workflow_conflicts.length) ?? 0;
    }), g = U(() => {
      var C;
      return ((C = o.conflictResolutions) == null ? void 0 : C.size) ?? 0;
    }), _ = U(
      () => v.value > 0 && g.value === v.value
    ), h = U(() => !(!o.preview || o.preview.has_uncommitted_changes || f.value && !_.value));
    function w(C) {
      if (!f.value) return !1;
      const S = C.replace(/\.json$/, "");
      return f.value.workflow_conflicts.some((z) => z.name === S);
    }
    function x(C) {
      const S = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: C, resolutions: S });
    }
    return (C, S) => {
      var z, T;
      return n(), D(Ut, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[11] || (S[11] = (I) => C.$emit("close"))
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
                onClick: S[0] || (S[0] = (I) => C.$emit("close"))
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
                $(" Loading preview... ", -1)
              ])])) : (z = e.preview) != null && z.has_uncommitted_changes ? (n(), i(H, { key: 2 }, [
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
                  $(" " + d(e.preview.commits_behind) + " commit" + d(e.preview.commits_behind !== 1 ? "s" : "") + " from " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", R$, [
                  S[18] || (S[18] = t("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  t("div", M$, [
                    (n(!0), i(H, null, ye(e.preview.commits, (I) => (n(), i("div", {
                      key: I.hash,
                      class: "commit-item"
                    }, [
                      t("span", D$, d(I.short_hash || I.hash.slice(0, 7)), 1),
                      t("span", L$, d(I.message), 1),
                      t("span", N$, d(I.date_relative || I.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                m.value ? (n(), i("div", U$, [
                  S[22] || (S[22] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (n(), i("details", O$, [
                    t("summary", null, [
                      S[19] || (S[19] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", A$, d(u.value) + " changes", 1)
                    ]),
                    t("div", z$, [
                      (n(!0), i(H, null, ye(e.preview.changes.workflows.added, (I) => (n(), i("div", {
                        key: "a-" + I,
                        class: "change-item add"
                      }, " + " + d(I), 1))), 128)),
                      (n(!0), i(H, null, ye(e.preview.changes.workflows.modified, (I) => (n(), i("div", {
                        key: "m-" + I,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + d(I) + " ", 1),
                        w(I) ? (n(), i("span", V$, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (n(!0), i(H, null, ye(e.preview.changes.workflows.deleted, (I) => (n(), i("div", {
                        key: "d-" + I,
                        class: "change-item delete"
                      }, " - " + d(I), 1))), 128))
                    ])
                  ])) : y("", !0),
                  c.value > 0 ? (n(), i("details", F$, [
                    t("summary", null, [
                      S[20] || (S[20] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", B$, d(c.value) + " to install", 1)
                    ]),
                    t("div", W$, [
                      (n(!0), i(H, null, ye(e.preview.changes.nodes.to_install, (I) => (n(), i("div", {
                        key: I,
                        class: "change-item add"
                      }, " + " + d(I), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", G$, [
                    t("summary", null, [
                      S[21] || (S[21] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", j$, d(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", H$, [
                      (n(!0), i(H, null, ye(e.preview.changes.models.referenced, (I) => (n(), i("div", {
                        key: I,
                        class: "change-item"
                      }, d(I), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                f.value ? (n(), D($$, {
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
                        "onUpdate:modelValue": S[1] || (S[1] = (I) => l.value = I),
                        value: "all"
                      }, null, 512), [
                        [ds, l.value]
                      ]),
                      S[23] || (S[23] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", J$, [
                      at(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (I) => l.value = I),
                        value: "required"
                      }, null, 512), [
                        [ds, l.value]
                      ]),
                      S[24] || (S[24] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", Q$, [
                      at(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[3] || (S[3] = (I) => l.value = I),
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
                  $(" Already up to date with " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", Z$, [
              k(we, {
                variant: "secondary",
                onClick: S[4] || (S[4] = (I) => C.$emit("close"))
              }, {
                default: p(() => [...S[30] || (S[30] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (n(), i(H, { key: 0 }, [
                k(we, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: S[5] || (S[5] = (I) => x(!1))
                }, {
                  default: p(() => [...S[31] || (S[31] = [
                    $(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                k(we, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: S[6] || (S[6] = (I) => x(!0))
                }, {
                  default: p(() => [...S[32] || (S[32] = [
                    $(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (T = e.preview) != null && T.has_uncommitted_changes ? (n(), D(we, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: S[7] || (S[7] = (I) => x(!0))
              }, {
                default: p(() => [...S[33] || (S[33] = [
                  $(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (n(), i(H, { key: 2 }, [
                f.value && !_.value ? (n(), D(we, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (I) => a("openConflictResolution"))
                }, {
                  default: p(() => [
                    $(" Resolve Conflicts (" + d(g.value) + "/" + d(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (n(), D(we, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !h.value,
                  onClick: S[9] || (S[9] = (I) => x(!1))
                }, {
                  default: p(() => [...S[34] || (S[34] = [
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
}), tC = /* @__PURE__ */ Ce(eC, [["__scopeId", "data-v-1d633bba"]]), sC = { class: "modal-header" }, oC = { class: "modal-title" }, nC = { class: "modal-body" }, aC = {
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
}, CC = { class: "modal-actions" }, xC = /* @__PURE__ */ be({
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
    const o = s, a = b(!1);
    function l(r) {
      o("push", { force: r });
    }
    return (r, u) => {
      var c, m, f;
      return n(), D(Ut, { to: "body" }, [
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
                $(" Loading preview... ", -1)
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
                    (n(!0), i(H, null, ye(e.preview.commits, (v) => (n(), i("div", {
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
                    (n(!0), i(H, null, ye(e.preview.commits, (v) => (n(), i("div", {
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
                  $(" Nothing to push - already up to date with " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", CC, [
              k(we, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (v) => r.$emit("close"))
              }, {
                default: p(() => [...u[18] || (u[18] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (f = e.preview) != null && f.remote_has_new_commits ? (n(), i(H, { key: 0 }, [
                k(we, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (v) => r.$emit("pull-first"))
                }, {
                  default: p(() => [...u[19] || (u[19] = [
                    $(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                k(we, {
                  variant: "destructive",
                  disabled: !a.value,
                  loading: e.pushing,
                  onClick: u[4] || (u[4] = (v) => l(!0))
                }, {
                  default: p(() => [...u[20] || (u[20] = [
                    $(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (n(), D(we, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: u[5] || (u[5] = (v) => l(!1))
              }, {
                default: p(() => [...u[21] || (u[21] = [
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
}), SC = /* @__PURE__ */ Ce(xC, [["__scopeId", "data-v-3c2e35ab"]]), IC = { class: "resolution-choice-group" }, EC = ["disabled"], TC = ["disabled"], PC = /* @__PURE__ */ be({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("div", IC, [
      t("button", {
        class: Ne(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, EC),
      t("button", {
        class: Ne(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, TC)
    ]));
  }
}), RC = /* @__PURE__ */ Ce(PC, [["__scopeId", "data-v-985715ed"]]), MC = { class: "conflict-header" }, DC = { class: "conflict-info" }, LC = { class: "workflow-name" }, NC = { class: "conflict-description" }, UC = {
  key: 0,
  class: "resolved-badge"
}, OC = { class: "resolved-text" }, AC = { class: "conflict-hashes" }, zC = { class: "hash-item" }, VC = { class: "hash-item" }, FC = { class: "conflict-actions" }, BC = /* @__PURE__ */ be({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = b(o.resolution);
    St(() => o.resolution, (m) => {
      l.value = m;
    }), St(l, (m) => {
      m && a("resolve", m);
    });
    const r = U(() => l.value !== null), u = U(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), c = U(() => {
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
        class: Ne(["conflict-item", { resolved: r.value }])
      }, [
        t("div", MC, [
          f[2] || (f[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", DC, [
            t("code", LC, d(e.conflict.name) + ".json", 1),
            t("div", NC, d(u.value), 1)
          ]),
          r.value ? (n(), i("div", UC, [
            f[1] || (f[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", OC, d(c.value), 1)
          ])) : y("", !0)
        ]),
        t("div", AC, [
          t("span", zC, [
            f[3] || (f[3] = $("Your: ", -1)),
            t("code", null, d(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", VC, [
            f[4] || (f[4] = $("Theirs: ", -1)),
            t("code", null, d(((g = e.conflict.target_hash) == null ? void 0 : g.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", FC, [
          k(RC, {
            modelValue: l.value,
            "onUpdate:modelValue": f[0] || (f[0] = (_) => l.value = _),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), WC = /* @__PURE__ */ Ce(BC, [["__scopeId", "data-v-506d3bbf"]]), GC = { class: "resolution-content" }, jC = {
  key: 0,
  class: "error-box"
}, HC = { class: "resolution-header" }, KC = { class: "header-stats" }, qC = { class: "stat" }, YC = { class: "stat-value" }, JC = { class: "stat resolved" }, QC = { class: "stat-value" }, XC = {
  key: 0,
  class: "stat pending"
}, ZC = { class: "stat-value" }, e3 = { class: "conflicts-list" }, t3 = {
  key: 1,
  class: "all-resolved-message"
}, s3 = /* @__PURE__ */ be({
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
    const o = e, a = s, l = U(() => o.resolutions.size), r = U(() => o.workflowConflicts.length - l.value), u = U(() => l.value === o.workflowConflicts.length), c = U(
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
    return (_, h) => (n(), D(Ct, {
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
            (n(!0), i(H, null, ye(e.workflowConflicts, (w) => (n(), D(WC, {
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
        k(De, {
          variant: "secondary",
          onClick: v
        }, {
          default: p(() => [...h[7] || (h[7] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        h[8] || (h[8] = t("div", { class: "footer-spacer" }, null, -1)),
        k(De, {
          variant: "primary",
          disabled: !u.value || e.validating,
          loading: e.validating,
          onClick: g
        }, {
          default: p(() => [
            $(d(c.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), o3 = /* @__PURE__ */ Ce(s3, [["__scopeId", "data-v-c58d150d"]]), n3 = { class: "node-conflict-item" }, a3 = { class: "node-header" }, l3 = { class: "node-name" }, i3 = { class: "node-id" }, r3 = { class: "version-comparison" }, u3 = { class: "version yours" }, c3 = { class: "version theirs" }, d3 = { class: "chosen-version" }, m3 = { class: "chosen" }, f3 = { class: "chosen-reason" }, v3 = { class: "affected-workflows" }, p3 = { class: "wf-source" }, g3 = { class: "wf-version" }, h3 = /* @__PURE__ */ be({
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
          (n(!0), i(H, null, ye(e.conflict.affected_workflows, (a) => (n(), i("li", {
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
}), y3 = /* @__PURE__ */ Ce(h3, [["__scopeId", "data-v-8b626725"]]), w3 = { class: "validation-content" }, _3 = {
  key: 0,
  class: "compatible-message"
}, k3 = { class: "conflicts-list" }, b3 = {
  key: 2,
  class: "warnings-section"
}, $3 = /* @__PURE__ */ be({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = U(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, u) => (n(), D(Ct, {
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
              (n(!0), i(H, null, ye(e.validation.node_conflicts, (c) => (n(), D(y3, {
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
              (n(!0), i(H, null, ye(e.validation.warnings, (c, m) => (n(), i("li", { key: m }, d(c), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: p(() => [
        k(De, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (c) => a("cancel"))
        }, {
          default: p(() => [...u[9] || (u[9] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = t("div", { class: "footer-spacer" }, null, -1)),
        k(De, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (c) => a("goBack"))
        }, {
          default: p(() => [...u[10] || (u[10] = [
            $(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        k(De, {
          variant: "primary",
          loading: e.executing,
          onClick: u[2] || (u[2] = (c) => a("proceed"))
        }, {
          default: p(() => [
            $(d(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), C3 = /* @__PURE__ */ Ce($3, [["__scopeId", "data-v-fefd26ed"]]), x3 = { key: 0 }, S3 = /* @__PURE__ */ be({
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
    } = ut(), w = b([]), x = b(null), C = b({}), S = b(!1), z = b(null), T = b(""), I = b(!1), M = b(null), O = b(!1), G = b("add"), E = b({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), L = U(() => {
      if (!T.value.trim()) return w.value;
      const xe = T.value.toLowerCase();
      return w.value.filter(
        (Le) => Le.name.toLowerCase().includes(xe) || Le.fetch_url.toLowerCase().includes(xe) || Le.push_url.toLowerCase().includes(xe)
      );
    });
    async function ie() {
      S.value = !0, z.value = null;
      try {
        const xe = await a();
        w.value = xe.remotes, x.value = xe.current_branch_tracking || null, await Promise.all(
          xe.remotes.map(async (Le) => {
            const Me = await m(Le.name);
            Me && (C.value[Le.name] = Me);
          })
        );
      } catch (xe) {
        z.value = xe instanceof Error ? xe.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function le() {
      G.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, O.value = !0;
    }
    function Y(xe) {
      const Le = w.value.find((Me) => Me.name === xe);
      Le && (G.value = "edit", E.value = {
        name: Le.name,
        fetchUrl: Le.fetch_url,
        pushUrl: Le.push_url
      }, O.value = !0);
    }
    async function K(xe) {
      try {
        G.value === "add" ? await l(xe.name, xe.fetchUrl) : await u(xe.name, xe.fetchUrl, xe.pushUrl || void 0), O.value = !1, await ie();
      } catch (Le) {
        z.value = Le instanceof Error ? Le.message : "Operation failed";
      }
    }
    function V() {
      O.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function J(xe) {
      M.value = xe;
      try {
        await c(xe);
        const Le = await m(xe);
        Le && (C.value[xe] = Le), o("toast", `✓ Fetched from ${xe}`, "success");
      } catch (Le) {
        o("toast", Le instanceof Error ? Le.message : "Fetch failed", "error");
      } finally {
        M.value = null;
      }
    }
    async function ee(xe) {
      if (confirm(`Remove remote "${xe}"?`))
        try {
          await r(xe), await ie();
        } catch (Le) {
          z.value = Le instanceof Error ? Le.message : "Failed to remove remote";
        }
    }
    function Oe() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const ae = b("idle"), pe = U(() => ae.value === "pull_preview"), ue = U(
      () => ae.value === "resolving" || ae.value === "validating"
    ), ze = U(
      () => ae.value === "validation_review" || ae.value === "executing"
    ), $e = b(!1), ke = b(null), ce = b(!1), W = b(null), de = b(!1), B = b(null), N = b(null), re = b(/* @__PURE__ */ new Map()), Ve = b(null), Fe = b(null), F = U(() => B.value && Kr(B.value) ? B.value : null);
    async function X(xe) {
      W.value = xe, ae.value = "pull_preview", de.value = !0, B.value = null, N.value = null;
      try {
        B.value = await f(xe);
      } catch (Le) {
        N.value = Le instanceof Error ? Le.message : "Failed to load pull preview";
      } finally {
        de.value = !1;
      }
    }
    function me() {
      ae.value = "idle", B.value = null, N.value = null, W.value = null;
    }
    async function Pe(xe) {
      if (!W.value) return;
      ae.value = "executing", N.value = null;
      const Le = W.value;
      try {
        const Me = await v(Le, xe);
        if (Me.rolled_back) {
          N.value = `Pull failed and was rolled back: ${Me.error || "Unknown error"}`, ae.value = "pull_preview";
          return;
        }
        Se(), ae.value = "idle", o("toast", `✓ Pulled from ${Le}`, "success"), await ie();
      } catch (Me) {
        N.value = Me instanceof Error ? Me.message : "Pull failed", ae.value = "pull_preview";
      }
    }
    function Ie() {
      F.value && (ae.value = "resolving", Fe.value = null);
    }
    function Ee(xe, Le) {
      re.value.set(xe, { name: xe, resolution: Le });
    }
    function q() {
      ae.value = "pull_preview";
    }
    async function A() {
      ae.value = "validating", Fe.value = null;
      try {
        const xe = Array.from(re.value.values());
        Ve.value = await h(W.value, xe), ae.value = "validation_review";
      } catch (xe) {
        Fe.value = xe instanceof Error ? xe.message : "Validation failed", ae.value = "resolving";
      }
    }
    async function Z() {
      ae.value = "executing";
      const xe = W.value;
      try {
        const Le = Array.from(re.value.values()), Me = await v(xe, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Le
        });
        if (Me.rolled_back) {
          N.value = `Pull failed and was rolled back: ${Me.error || "Unknown error"}`, ae.value = "pull_preview";
          return;
        }
        Se(), ae.value = "idle", o("toast", `✓ Pulled from ${xe}`, "success"), await ie();
      } catch (Le) {
        N.value = Le instanceof Error ? Le.message : "Pull failed", ae.value = "validation_review";
      }
    }
    function ne() {
      ae.value = "resolving";
    }
    function _e() {
      Se(), ae.value = "idle";
    }
    function Se() {
      re.value.clear(), Ve.value = null, Fe.value = null, N.value = null, B.value = null, W.value = null;
    }
    async function oe(xe) {
      W.value = xe, $e.value = !0, de.value = !0, ke.value = null;
      try {
        ke.value = await g(xe);
      } catch (Le) {
        z.value = Le instanceof Error ? Le.message : "Failed to load push preview";
      } finally {
        de.value = !1;
      }
    }
    function j() {
      $e.value = !1, ke.value = null, W.value = null;
    }
    async function Ae(xe) {
      if (!W.value) return;
      ce.value = !0;
      const Le = W.value;
      try {
        await _(Le, xe), j(), o("toast", `✓ Pushed to ${Le}`, "success"), await ie();
      } catch (Me) {
        o("toast", Me instanceof Error ? Me.message : "Push failed", "error");
      } finally {
        ce.value = !1;
      }
    }
    function Te() {
      const xe = W.value;
      j(), xe && X(xe);
    }
    return lt(ie), (xe, Le) => (n(), i(H, null, [
      k(Kt, null, {
        header: p(() => [
          k(qt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Le[0] || (Le[0] = (Me) => I.value = !0)
          }, {
            actions: p(() => [
              O.value ? y("", !0) : (n(), D(we, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: le
              }, {
                default: p(() => [...Le[3] || (Le[3] = [
                  $(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: p(() => [
          O.value ? y("", !0) : (n(), D(Vo, {
            key: 0,
            modelValue: T.value,
            "onUpdate:modelValue": Le[1] || (Le[1] = (Me) => T.value = Me),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: p(() => [
          S.value ? (n(), D(zs, {
            key: 0,
            message: "Loading remotes..."
          })) : z.value ? (n(), D(Vs, {
            key: 1,
            message: z.value,
            retry: !0,
            onRetry: ie
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            O.value ? (n(), D(f$, {
              key: 0,
              mode: G.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: K,
              onCancel: V
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            w.value.length && !O.value ? (n(), D(Cn, {
              key: 1,
              variant: "compact"
            }, {
              default: p(() => [
                $(" Total: " + d(w.value.length) + " remote" + d(w.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (n(), i("span", x3, " • Tracking: " + d(x.value.remote) + "/" + d(x.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            L.value.length && !O.value ? (n(), D(_t, {
              key: 2,
              title: "REMOTES",
              count: L.value.length
            }, {
              default: p(() => [
                (n(!0), i(H, null, ye(L.value, (Me) => (n(), D(l$, {
                  key: Me.name,
                  remote: Me,
                  "sync-status": C.value[Me.name],
                  "fetching-remote": M.value,
                  onFetch: J,
                  onEdit: Y,
                  onRemove: ee,
                  onPull: X,
                  onPush: oe
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !L.value.length && !O.value ? (n(), D(gs, {
              key: 3,
              icon: "🌐",
              message: T.value ? `No remotes match '${T.value}'` : "No remotes configured."
            }, {
              actions: p(() => [
                k(we, {
                  variant: "primary",
                  onClick: le
                }, {
                  default: p(() => [...Le[4] || (Le[4] = [
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
      k(hs, {
        show: I.value,
        title: "About Git Remotes",
        onClose: Le[2] || (Le[2] = (Me) => I.value = !1)
      }, {
        content: p(() => [...Le[5] || (Le[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            $(" The "),
            t("strong", null, '"origin"'),
            $(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: p(() => [
          k(we, {
            variant: "link",
            onClick: Oe
          }, {
            default: p(() => [...Le[6] || (Le[6] = [
              $(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k(tC, {
        show: pe.value,
        "remote-name": W.value || "",
        preview: B.value,
        loading: de.value,
        pulling: ae.value === "executing",
        error: N.value,
        "conflict-resolutions": re.value,
        onClose: me,
        onPull: Pe,
        onOpenConflictResolution: Ie
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      k(SC, {
        show: $e.value,
        "remote-name": W.value || "",
        preview: ke.value,
        loading: de.value,
        pushing: ce.value,
        onClose: j,
        onPush: Ae,
        onPullFirst: Te
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      ue.value && F.value ? (n(), D(o3, {
        key: 0,
        "workflow-conflicts": F.value.workflow_conflicts,
        resolutions: re.value,
        "operation-type": "pull",
        validating: ae.value === "validating",
        error: Fe.value,
        onClose: q,
        onResolve: Ee,
        onApply: A
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      ze.value && Ve.value ? (n(), D(C3, {
        key: 1,
        validation: Ve.value,
        "operation-type": "pull",
        executing: ae.value === "executing",
        onProceed: Z,
        onGoBack: ne,
        onCancel: _e
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), I3 = /* @__PURE__ */ Ce(S3, [["__scopeId", "data-v-9ae3b76d"]]), E3 = { class: "setting-info" }, T3 = { class: "setting-label" }, P3 = {
  key: 0,
  class: "required-marker"
}, R3 = {
  key: 0,
  class: "setting-description"
}, M3 = { class: "setting-control" }, D3 = /* @__PURE__ */ be({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Ne(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", E3, [
        t("div", T3, [
          $(d(e.label) + " ", 1),
          e.required ? (n(), i("span", P3, "*")) : y("", !0)
        ]),
        e.description ? (n(), i("div", R3, d(e.description), 1)) : y("", !0)
      ]),
      t("div", M3, [
        nt(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), Wo = /* @__PURE__ */ Ce(D3, [["__scopeId", "data-v-cb5d236c"]]), L3 = { class: "toggle" }, N3 = ["checked", "disabled"], U3 = /* @__PURE__ */ be({
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
      }, null, 40, N3),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), pi = /* @__PURE__ */ Ce(U3, [["__scopeId", "data-v-71c0f550"]]), O3 = { class: "workspace-settings-content" }, A3 = { class: "settings-section" }, z3 = { class: "path-setting" }, V3 = { class: "path-value" }, F3 = { class: "path-setting" }, B3 = { class: "path-value" }, W3 = { class: "settings-section" }, G3 = { class: "settings-section" }, j3 = { class: "settings-section" }, H3 = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: u } = ut(), c = b(!1), m = b(null), f = b(null), v = b(null), g = b(null), _ = b(""), h = b(""), w = b(""), x = b(!1), C = b(!1), S = b(!1), z = b(!0);
    function T(le) {
      return le.join(" ");
    }
    function I(le) {
      return le.trim() ? le.trim().split(/\s+/) : [];
    }
    const M = U(() => {
      if (!g.value) return !1;
      const le = x.value, Y = C.value, K = w.value !== T(g.value.comfyui_extra_args || []);
      return le || Y || K;
    });
    async function O() {
      c.value = !0, m.value = null;
      try {
        v.value = await r(a.workspacePath || void 0), g.value = { ...v.value }, _.value = v.value.civitai_api_key || "", h.value = v.value.huggingface_token || "", w.value = T(v.value.comfyui_extra_args || []), x.value = !1, C.value = !1;
        const le = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        S.value = le !== "false", z.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
      } catch (le) {
        m.value = le instanceof Error ? le.message : "Failed to load settings";
      } finally {
        c.value = !1;
      }
    }
    async function G() {
      var le;
      f.value = null;
      try {
        const Y = {};
        x.value && (Y.civitai_api_key = _.value || null), C.value && (Y.huggingface_token = h.value || null), w.value !== T(((le = g.value) == null ? void 0 : le.comfyui_extra_args) || []) && (Y.comfyui_extra_args = I(w.value)), await u(Y, a.workspacePath || void 0), await O(), f.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          f.value = null;
        }, 3e3);
      } catch (Y) {
        const K = Y instanceof Error ? Y.message : "Failed to save settings";
        f.value = { type: "error", message: K }, l("error", K);
      }
    }
    function E() {
      g.value && (_.value = g.value.civitai_api_key || "", h.value = g.value.huggingface_token || "", w.value = T(g.value.comfyui_extra_args || []), x.value = !1, C.value = !1, f.value = null);
    }
    function L(le) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(le)), console.log("[ComfyGit] Auto-refresh setting saved:", le);
    }
    function ie(le) {
      le ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", le ? "enabled" : "disabled");
    }
    return s({
      saveSettings: G,
      resetSettings: E,
      hasChanges: M,
      loadSettings: O
    }), lt(O), (le, Y) => (n(), i("div", O3, [
      c.value ? (n(), D(zs, {
        key: 0,
        message: "Loading workspace settings..."
      })) : m.value ? (n(), D(Vs, {
        key: 1,
        message: m.value,
        retry: !0,
        onRetry: O
      }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
        k(_t, { title: "WORKSPACE PATHS" }, {
          default: p(() => {
            var K, V;
            return [
              t("div", A3, [
                t("div", z3, [
                  Y[7] || (Y[7] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  Y[8] || (Y[8] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", V3, d(((K = v.value) == null ? void 0 : K.workspace_path) || "Loading..."), 1)
                ]),
                t("div", F3, [
                  Y[9] || (Y[9] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  Y[10] || (Y[10] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", B3, d(((V = v.value) == null ? void 0 : V.models_path) || "Not configured"), 1)
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
                    "onUpdate:modelValue": Y[0] || (Y[0] = (K) => _.value = K),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: Y[1] || (Y[1] = (K) => x.value = !0)
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
                    "onUpdate:modelValue": Y[2] || (Y[2] = (K) => h.value = K),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: Y[3] || (Y[3] = (K) => C.value = !0)
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
                    "onUpdate:modelValue": Y[4] || (Y[4] = (K) => w.value = K),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              Y[11] || (Y[11] = t("div", { class: "setting-hint" }, [
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
                      Y[5] || (Y[5] = (K) => S.value = K),
                      L
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
                    modelValue: z.value,
                    "onUpdate:modelValue": [
                      Y[6] || (Y[6] = (K) => z.value = K),
                      ie
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        f.value ? (n(), D(Cn, {
          key: 0,
          variant: (f.value.type === "success", "compact")
        }, {
          default: p(() => [
            t("span", {
              style: Ft({ color: f.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, d(f.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), qr = /* @__PURE__ */ Ce(H3, [["__scopeId", "data-v-9c5b427b"]]), K3 = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = b(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (n(), D(Kt, null, {
      header: p(() => [
        k(qt, { title: "WORKSPACE SETTINGS" }, {
          actions: p(() => {
            var r, u;
            return [
              k(we, {
                variant: "primary",
                size: "sm",
                disabled: !((r = s.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (c) => {
                  var m;
                  return (m = s.value) == null ? void 0 : m.saveSettings();
                })
              }, {
                default: p(() => [...l[2] || (l[2] = [
                  $(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = s.value) != null && u.hasChanges ? (n(), D(we, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (c) => {
                  var m;
                  return (m = s.value) == null ? void 0 : m.resetSettings();
                })
              }, {
                default: p(() => [...l[3] || (l[3] = [
                  $(" Reset ", -1)
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
}, Q3 = /* @__PURE__ */ be({
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
      (n(!0), i(H, null, ye(e.tabs, (c) => (n(), i("button", {
        key: c.id,
        class: Ne([
          "base-tabs__tab",
          {
            active: e.modelValue === c.id,
            disabled: c.disabled
          }
        ]),
        disabled: c.disabled,
        onClick: (m) => l(c.id)
      }, [
        $(d(c.label) + " ", 1),
        c.badge ? (n(), i("span", J3, d(c.badge), 1)) : y("", !0)
      ], 10, Y3))), 128))
    ]));
  }
}), Yr = /* @__PURE__ */ Ce(Q3, [["__scopeId", "data-v-ad5e6cad"]]), X3 = { class: "log-viewer-wrapper" }, Z3 = ["disabled", "title"], ex = /* @__PURE__ */ be({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = b(null), a = b("idle"), l = U(() => s.logs.map((f) => ({
      text: s.rawFormat || !f.timestamp ? f.message : `${f.timestamp} - ${f.name} - ${f.level} - ${f.func}:${f.line} - ${f.message}`,
      level: f.level
    })));
    async function r() {
      var v;
      await Rt();
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
        (n(!0), i(H, null, ye(l.value, (g, _) => (n(), i("div", {
          key: _,
          class: Ne(`log-line log-level-${g.level.toLowerCase()}`)
        }, d(g.text), 3))), 128))
      ], 544)
    ]));
  }
}), Jr = /* @__PURE__ */ Ce(ex, [["__scopeId", "data-v-c0cc6d21"]]), tx = /* @__PURE__ */ be({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = ut(), u = b("workspace"), c = b([]), m = b(!1), f = b(null), v = b(!1), g = b(null), _ = b(null), h = b(!1), w = U(() => u.value === "workspace" ? g.value : _.value);
    async function x() {
      m.value = !0, f.value = null;
      try {
        u.value === "workspace" ? c.value = await s(void 0, 500) : c.value = await a(void 0, 500);
      } catch (z) {
        f.value = z instanceof Error ? z.message : `Failed to load ${u.value} logs`;
      } finally {
        m.value = !1;
      }
    }
    async function C() {
      try {
        const [z, T] = await Promise.all([
          o(),
          l()
        ]);
        z.exists && (g.value = z.path), T.exists && (_.value = T.path);
      } catch {
      }
    }
    async function S() {
      if (w.value) {
        h.value = !0;
        try {
          await r(w.value);
        } catch (z) {
          console.error("Failed to open log file:", z);
        } finally {
          h.value = !1;
        }
      }
    }
    return St(u, () => {
      x();
    }), lt(() => {
      x(), C();
    }), (z, T) => (n(), i(H, null, [
      k(Kt, null, {
        header: p(() => [
          k(qt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (I) => v.value = !0)
          }, {
            actions: p(() => [
              k(we, {
                variant: "secondary",
                size: "sm",
                onClick: S,
                disabled: !w.value || h.value,
                title: "Open log file in default editor"
              }, {
                default: p(() => [
                  $(d(h.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(we, {
                variant: "secondary",
                size: "sm",
                onClick: x,
                disabled: m.value
              }, {
                default: p(() => [
                  $(d(m.value ? "Loading..." : "Refresh"), 1)
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
            "onUpdate:modelValue": T[1] || (T[1] = (I) => u.value = I),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: p(() => [
          m.value ? (n(), D(zs, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : f.value ? (n(), D(Vs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            c.value.length === 0 ? (n(), D(gs, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (n(), D(Jr, {
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
        onClose: T[3] || (T[3] = (I) => v.value = !1)
      }, {
        content: p(() => [...T[4] || (T[4] = [
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
        actions: p(() => [
          k(we, {
            variant: "primary",
            onClick: T[2] || (T[2] = (I) => v.value = !1)
          }, {
            default: p(() => [...T[5] || (T[5] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), sx = /* @__PURE__ */ be({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: a, openFile: l } = ut(), r = b([]), u = b(!1), c = b(null), m = b(!1), f = b("production"), v = b(null), g = b(!1);
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
    }), (x, C) => (n(), i(H, null, [
      k(Kt, null, {
        header: p(() => [
          k(qt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (S) => m.value = !0)
          }, {
            actions: p(() => [
              k(we, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: !v.value || g.value,
                title: "Open log file in default editor"
              }, {
                default: p(() => [
                  $(d(g.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              k(we, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: u.value
              }, {
                default: p(() => [
                  $(d(u.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: p(() => [
          u.value ? (n(), D(zs, {
            key: 0,
            message: "Loading environment logs..."
          })) : c.value ? (n(), D(Vs, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            r.value.length === 0 ? (n(), D(gs, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (n(), D(Jr, {
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
        onClose: C[2] || (C[2] = (S) => m.value = !1)
      }, {
        content: p(() => [
          t("p", null, [
            C[3] || (C[3] = $(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, d(f.value), 1),
            C[4] || (C[4] = $(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          C[5] || (C[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
        actions: p(() => [
          k(we, {
            variant: "primary",
            onClick: C[1] || (C[1] = (S) => m.value = !1)
          }, {
            default: p(() => [...C[6] || (C[6] = [
              $(" Got it ", -1)
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
}, lx = /* @__PURE__ */ be({
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
    }, fo({
      icon: p(() => [
        $(d(e.isCurrent ? "🌍" : "○"), 1)
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
          $(" " + d(e.currentBranch), 1)
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
          e.lastUsed && e.showLastUsed ? (n(), D($t, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), ix = /* @__PURE__ */ Ce(lx, [["__scopeId", "data-v-9231917a"]]), rx = { class: "env-details" }, ux = { class: "status-row" }, cx = {
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
}, Px = { class: "collapsible-section" }, Rx = { class: "value" }, Mx = {
  key: 0,
  class: "missing-count"
}, Dx = {
  key: 0,
  class: "collapsible-body"
}, Lx = { class: "item-list" }, Nx = { class: "model-row" }, Ux = { class: "item-name" }, Ox = { class: "model-meta" }, Ax = { class: "item-meta" }, zx = {
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
}, Wx = { class: "value" }, Gx = { class: "footer-actions" }, jx = /* @__PURE__ */ be({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = b(/* @__PURE__ */ new Set());
    function r(m) {
      l.value.has(m) ? l.value.delete(m) : l.value.add(m), l.value = new Set(l.value);
    }
    const u = U(() => {
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
    return (m, f) => (n(), D(Ct, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: f[5] || (f[5] = (v) => a("close"))
    }, {
      body: p(() => {
        var v, g, _, h, w, x, C, S, z, T, I, M, O, G;
        return [
          t("div", rx, [
            t("div", ux, [
              f[6] || (f[6] = t("span", { class: "label" }, "Status:", -1)),
              t("span", {
                class: Ne(["status-badge", e.environment.is_current ? "current" : "inactive"])
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
                onClick: f[0] || (f[0] = (E) => r("workflows"))
              }, [
                f[9] || (f[9] = t("span", { class: "label" }, "Workflows:", -1)),
                t("span", px, d(((v = e.detail) == null ? void 0 : v.workflow_count) ?? e.environment.workflow_count), 1),
                (g = e.detail) != null && g.workflows ? (n(), i("span", {
                  key: 0,
                  class: Ne(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (_ = e.detail) != null && _.workflows && l.value.has("workflows") ? (n(), i("div", gx, [
                t("div", hx, [
                  (n(!0), i(H, null, ye(e.detail.workflows.synced, (E) => (n(), i("div", {
                    key: "synced-" + E,
                    class: "list-item"
                  }, [
                    t("span", yx, d(E), 1),
                    f[10] || (f[10] = t("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, ye(e.detail.workflows.new, (E) => (n(), i("div", {
                    key: "new-" + E,
                    class: "list-item"
                  }, [
                    t("span", wx, d(E), 1),
                    f[11] || (f[11] = t("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, ye(e.detail.workflows.modified, (E) => (n(), i("div", {
                    key: "mod-" + E,
                    class: "list-item"
                  }, [
                    t("span", _x, d(E), 1),
                    f[12] || (f[12] = t("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, ye(e.detail.workflows.deleted, (E) => (n(), i("div", {
                    key: "del-" + E,
                    class: "list-item"
                  }, [
                    t("span", kx, d(E), 1),
                    f[13] || (f[13] = t("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  u.value ? (n(), i("div", bx, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            t("div", $x, [
              t("div", {
                class: "collapsible-header",
                onClick: f[1] || (f[1] = (E) => r("nodes"))
              }, [
                f[14] || (f[14] = t("span", { class: "label" }, "Nodes:", -1)),
                t("span", Cx, d(((h = e.detail) == null ? void 0 : h.node_count) ?? e.environment.node_count), 1),
                (w = e.detail) != null && w.nodes ? (n(), i("span", {
                  key: 0,
                  class: Ne(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (x = e.detail) != null && x.nodes && l.value.has("nodes") ? (n(), i("div", xx, [
                t("div", Sx, [
                  (n(!0), i(H, null, ye(e.detail.nodes, (E) => (n(), i("div", {
                    key: E.name,
                    class: "list-item"
                  }, [
                    t("span", Ix, d(E.name), 1),
                    E.version ? (n(), i("span", Ex, d(E.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (n(), i("div", Tx, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            t("div", Px, [
              t("div", {
                class: "collapsible-header",
                onClick: f[2] || (f[2] = (E) => r("models"))
              }, [
                f[15] || (f[15] = t("span", { class: "label" }, "Models:", -1)),
                t("span", Rx, [
                  $(d(((C = e.detail) == null ? void 0 : C.model_count) ?? e.environment.model_count) + " ", 1),
                  (z = (S = e.detail) == null ? void 0 : S.models) != null && z.missing.length ? (n(), i("span", Mx, "(" + d(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (T = e.detail) != null && T.models ? (n(), i("span", {
                  key: 0,
                  class: Ne(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (I = e.detail) != null && I.models && l.value.has("models") ? (n(), i("div", Dx, [
                t("div", Lx, [
                  (n(!0), i(H, null, ye(e.detail.models.missing, (E) => (n(), i("div", {
                    key: E.filename,
                    class: "list-item model-item"
                  }, [
                    t("div", Nx, [
                      t("span", Ux, d(E.filename), 1),
                      t("span", {
                        class: Ne(["criticality-badge", E.criticality])
                      }, d(E.criticality), 3)
                    ]),
                    t("div", Ox, [
                      t("span", Ax, d(E.category), 1),
                      E.workflow_names.length ? (n(), i("span", zx, " used by: " + d(E.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (n(), i("div", Vx, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (M = e.detail) != null && M.created_at || e.environment.created_at ? (n(), i("div", Fx)) : y("", !0),
            (O = e.detail) != null && O.created_at || e.environment.created_at ? (n(), i("div", Bx, [
              f[16] || (f[16] = t("span", { class: "label" }, "Created:", -1)),
              t("span", Wx, d(c(((G = e.detail) == null ? void 0 : G.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: p(() => [
        t("div", Gx, [
          e.canDelete ? (n(), D(De, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: f[3] || (f[3] = (v) => a("delete", e.environment.name))
          }, {
            default: p(() => [...f[18] || (f[18] = [
              $(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          f[20] || (f[20] = t("div", { class: "footer-spacer" }, null, -1)),
          k(De, {
            variant: "secondary",
            size: "sm",
            onClick: f[4] || (f[4] = (v) => a("close"))
          }, {
            default: p(() => [...f[19] || (f[19] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Hx = /* @__PURE__ */ Ce(jx, [["__scopeId", "data-v-92e68b76"]]), Qr = [
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
], Zr = "auto", Kx = { class: "progress-bar" }, qx = /* @__PURE__ */ be({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = U(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (a, l) => (n(), i("div", Kx, [
      t("div", {
        class: Ne(["progress-fill", e.variant]),
        style: Ft({ width: o.value })
      }, null, 6)
    ]));
  }
}), ga = /* @__PURE__ */ Ce(qx, [["__scopeId", "data-v-1beb0512"]]), Yx = { class: "task-progress" }, Jx = { class: "progress-info" }, Qx = { class: "progress-percentage" }, Xx = { class: "progress-message" }, Zx = {
  key: 0,
  class: "progress-steps"
}, e8 = { class: "step-icon" }, t8 = { class: "step-label" }, s8 = /* @__PURE__ */ be({
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
        (n(!0), i(H, null, ye(e.steps, (u) => (n(), i("div", {
          key: u.id,
          class: Ne(["step", o(u.id)])
        }, [
          t("span", e8, d(a(u.id)), 1),
          t("span", t8, d(u.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), ea = /* @__PURE__ */ Ce(s8, [["__scopeId", "data-v-9d1de66c"]]), o8 = {
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
}, C8 = 10, x8 = /* @__PURE__ */ be({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: u } = ut(), c = b(""), m = b(Xr), f = b("latest"), v = b(Zr), g = b(!1), _ = b(null), h = b(!1), w = b(!1);
    let x = null, C = 0;
    const S = U(() => !!c.value.trim() && w.value && !_.value && !h.value && !I.value), z = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), T = b(!1), I = b(!1), M = b({
      progress: 0,
      message: ""
    });
    let O = null, G = 0;
    const E = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], L = b(null);
    St(c, (ae) => {
      w.value = !1, x && (clearTimeout(x), x = null);
      const pe = ae.trim();
      if (!pe) {
        _.value = null, h.value = !1;
        return;
      }
      h.value = !0, x = setTimeout(() => {
        ie(pe);
      }, 400);
    });
    async function ie(ae, pe = !1) {
      const ue = ae.trim();
      if (!ue)
        return w.value = !1, h.value = !1, _.value = pe ? "Environment name is required" : null, !1;
      const ze = ++C;
      h.value = !0;
      try {
        const $e = await u(ue);
        return ze !== C ? !1 : (_.value = $e.valid ? null : $e.error || "Invalid name", w.value = !!$e.valid, !!$e.valid);
      } catch {
        return ze !== C || (_.value = "Failed to validate name", w.value = !1), !1;
      } finally {
        ze === C && (h.value = !1);
      }
    }
    async function le() {
      x && (clearTimeout(x), x = null), await ie(c.value, !0);
    }
    function Y() {
      I.value || o("close");
    }
    async function K() {
      const ae = c.value.trim();
      if (!ae) {
        _.value = "Environment name is required";
        return;
      }
      if (x && (clearTimeout(x), x = null), !!await ie(ae, !0)) {
        I.value = !0, M.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const ue = {
            name: ae,
            python_version: m.value,
            comfyui_version: f.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, ze = await l(ue);
          ze.status === "started" ? V() : ze.status === "error" && (M.value = {
            progress: 0,
            message: ze.message || "Failed to start creation",
            error: ze.message
          });
        } catch (ue) {
          M.value = {
            progress: 0,
            message: ue instanceof Error ? ue.message : "Unknown error",
            error: ue instanceof Error ? ue.message : "Unknown error"
          };
        }
      }
    }
    function V() {
      O || (G = 0, O = window.setInterval(async () => {
        try {
          const ae = await r();
          G = 0, M.value = {
            progress: ae.progress ?? 0,
            message: ae.message,
            phase: ae.phase,
            error: ae.error
          }, ae.state === "complete" ? (J(), o("created", ae.environment_name || c.value.trim(), g.value)) : ae.state === "error" ? (J(), M.value.error = ae.error || ae.message) : ae.state === "idle" && I.value && (J(), M.value.error = "Creation was interrupted. Please try again.");
        } catch {
          G++, G >= C8 && (J(), M.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function J() {
      O && (clearInterval(O), O = null);
    }
    function ee() {
      I.value = !1, M.value = { progress: 0, message: "" }, o("close");
    }
    async function Oe() {
      T.value = !0;
      try {
        z.value = await a();
      } catch (ae) {
        console.error("Failed to load ComfyUI releases:", ae);
      } finally {
        T.value = !1;
      }
    }
    return lt(async () => {
      var ae;
      await Rt(), (ae = L.value) == null || ae.focus(), Oe();
    }), Xs(() => {
      J(), x && (clearTimeout(x), x = null);
    }), (ae, pe) => (n(), D(Ct, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !I.value,
      onClose: Y
    }, {
      body: p(() => [
        I.value ? (n(), i("div", y8, [
          t("p", w8, [
            pe[12] || (pe[12] = $(" Creating environment ", -1)),
            t("strong", null, d(c.value), 1),
            pe[13] || (pe[13] = $("... ", -1))
          ]),
          k(ea, {
            progress: M.value.progress,
            message: M.value.message,
            "current-phase": M.value.phase,
            variant: M.value.error ? "error" : "default",
            "show-steps": !0,
            steps: E
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          M.value.error ? y("", !0) : (n(), i("p", _8, " This may take several minutes. Please wait... ")),
          M.value.error ? (n(), i("div", k8, [
            t("p", b8, d(M.value.error), 1)
          ])) : y("", !0)
        ])) : (n(), i("div", o8, [
          t("div", n8, [
            pe[6] || (pe[6] = t("label", { class: "form-label" }, "Name", -1)),
            t("div", a8, [
              at(t("input", {
                ref_key: "nameInput",
                ref: L,
                "onUpdate:modelValue": pe[0] || (pe[0] = (ue) => c.value = ue),
                type: "text",
                class: Ne(["form-input", { error: !!_.value, valid: w.value }]),
                placeholder: "my-environment",
                onKeyup: as(K, ["enter"]),
                onBlur: le
              }, null, 34), [
                [es, c.value]
              ]),
              h.value ? (n(), i("span", l8, "...")) : w.value ? (n(), i("span", i8, "✓")) : y("", !0)
            ]),
            _.value ? (n(), i("div", r8, d(_.value), 1)) : y("", !0),
            pe[7] || (pe[7] = t("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          t("div", u8, [
            pe[8] || (pe[8] = t("label", { class: "form-label" }, "Python Version", -1)),
            at(t("select", {
              "onUpdate:modelValue": pe[1] || (pe[1] = (ue) => m.value = ue),
              class: "form-select"
            }, [
              (n(!0), i(H, null, ye(Ze(Qr), (ue) => (n(), i("option", {
                key: ue,
                value: ue
              }, d(ue), 9, c8))), 128))
            ], 512), [
              [Ss, m.value]
            ])
          ]),
          t("div", d8, [
            pe[9] || (pe[9] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            at(t("select", {
              "onUpdate:modelValue": pe[2] || (pe[2] = (ue) => f.value = ue),
              class: "form-select",
              disabled: T.value
            }, [
              (n(!0), i(H, null, ye(z.value, (ue) => (n(), i("option", {
                key: ue.tag_name,
                value: ue.tag_name
              }, d(ue.name), 9, f8))), 128))
            ], 8, m8), [
              [Ss, f.value]
            ])
          ]),
          t("div", v8, [
            pe[10] || (pe[10] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            at(t("select", {
              "onUpdate:modelValue": pe[3] || (pe[3] = (ue) => v.value = ue),
              class: "form-select"
            }, [
              (n(!0), i(H, null, ye(Ze(kl), (ue) => (n(), i("option", {
                key: ue,
                value: ue
              }, d(ue) + d(ue === "auto" ? " (detect GPU)" : ""), 9, p8))), 128))
            ], 512), [
              [Ss, v.value]
            ])
          ]),
          t("div", g8, [
            t("label", h8, [
              at(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": pe[4] || (pe[4] = (ue) => g.value = ue)
              }, null, 512), [
                [hn, g.value]
              ]),
              pe[11] || (pe[11] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: p(() => [
        I.value ? (n(), i(H, { key: 1 }, [
          M.value.error ? (n(), D(De, {
            key: 0,
            variant: "secondary",
            onClick: ee
          }, {
            default: p(() => [...pe[16] || (pe[16] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", $8, " Creating environment... "))
        ], 64)) : (n(), i(H, { key: 0 }, [
          k(De, {
            variant: "primary",
            disabled: !S.value,
            onClick: K
          }, {
            default: p(() => [...pe[14] || (pe[14] = [
              $(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(De, {
            variant: "secondary",
            onClick: pe[5] || (pe[5] = (ue) => o("close"))
          }, {
            default: p(() => [...pe[15] || (pe[15] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), S8 = /* @__PURE__ */ Ce(x8, [["__scopeId", "data-v-3faa3d9b"]]), I8 = /* @__PURE__ */ be({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = ut(), u = b([]), c = b(!1), m = b(null), f = b(""), v = b(!1), g = b(!1), _ = b(null), h = b(null), w = U(() => {
      if (!f.value.trim()) return u.value;
      const I = f.value.toLowerCase();
      return u.value.filter(
        (M) => {
          var O;
          return M.name.toLowerCase().includes(I) || ((O = M.current_branch) == null ? void 0 : O.toLowerCase().includes(I));
        }
      );
    });
    function x(I, M) {
      g.value = !1, a("created", I, M);
    }
    function C() {
      g.value = !0;
    }
    async function S(I) {
      _.value = I, h.value = null;
      const M = await r(I.name);
      M && (h.value = M);
    }
    function z(I) {
      _.value = null, h.value = null, a("delete", I);
    }
    async function T() {
      c.value = !0, m.value = null;
      try {
        u.value = await l();
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return lt(T), s({
      loadEnvironments: T,
      openCreateModal: C
    }), (I, M) => (n(), i(H, null, [
      k(Kt, null, {
        header: p(() => [
          k(qt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (O) => v.value = !0)
          }, {
            actions: p(() => [
              k(we, {
                variant: "primary",
                size: "sm",
                onClick: C
              }, {
                default: p(() => [...M[6] || (M[6] = [
                  $(" Create ", -1)
                ])]),
                _: 1
              }),
              k(we, {
                variant: "secondary",
                size: "sm",
                onClick: T
              }, {
                default: p(() => [...M[7] || (M[7] = [
                  $(" Refresh ", -1)
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
            "onUpdate:modelValue": M[1] || (M[1] = (O) => f.value = O),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: p(() => [
          c.value ? (n(), D(zs, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (n(), D(Vs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            w.value.length ? (n(), D(_t, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: p(() => [
                (n(!0), i(H, null, ye(w.value, (O) => (n(), D(ix, {
                  key: O.name,
                  "environment-name": O.name,
                  "is-current": O.is_current,
                  "current-branch": O.current_branch,
                  "show-last-used": !1
                }, {
                  actions: p(() => [
                    O.is_current ? y("", !0) : (n(), D(we, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (G) => I.$emit("switch", O.name)
                    }, {
                      default: p(() => [...M[8] || (M[8] = [
                        $(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    k(we, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (G) => S(O)
                    }, {
                      default: p(() => [...M[9] || (M[9] = [
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
            w.value.length ? y("", !0) : (n(), D(gs, {
              key: 1,
              icon: "🌍",
              message: f.value ? `No environments match '${f.value}'` : "No environments found. Create one to get started!"
            }, fo({ _: 2 }, [
              f.value ? void 0 : {
                name: "actions",
                fn: p(() => [
                  k(we, {
                    variant: "primary",
                    onClick: C
                  }, {
                    default: p(() => [...M[10] || (M[10] = [
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
      k(hs, {
        show: v.value,
        title: "About Environments",
        onClose: M[3] || (M[3] = (O) => v.value = !1)
      }, {
        content: p(() => [...M[11] || (M[11] = [
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
        actions: p(() => [
          k(we, {
            variant: "secondary",
            onClick: M[2] || (M[2] = (O) => v.value = !1)
          }, {
            default: p(() => [...M[12] || (M[12] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (n(), D(Hx, {
        key: 0,
        environment: _.value,
        detail: h.value,
        "can-delete": u.value.length > 1,
        onClose: M[4] || (M[4] = (O) => {
          _.value = null, h.value = null;
        }),
        onDelete: z
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      g.value ? (n(), D(S8, {
        key: 1,
        onClose: M[5] || (M[5] = (O) => g.value = !1),
        onCreated: x
      })) : y("", !0)
    ], 64));
  }
}), E8 = /* @__PURE__ */ Ce(I8, [["__scopeId", "data-v-0c0fbd88"]]), T8 = { class: "file-path" }, P8 = { class: "file-path-text" }, R8 = ["title"], M8 = /* @__PURE__ */ be({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = b(!1);
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
      }, d(o.value ? "✓" : "📋"), 9, R8)) : y("", !0)
    ]));
  }
}), D8 = /* @__PURE__ */ Ce(M8, [["__scopeId", "data-v-f0982173"]]), L8 = ["checked", "disabled"], N8 = { class: "base-checkbox-box" }, U8 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, O8 = {
  key: 0,
  class: "base-checkbox-label"
}, A8 = /* @__PURE__ */ be({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", {
      class: Ne(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked))
      }, null, 40, L8),
      t("span", N8, [
        e.modelValue ? (n(), i("svg", U8, [...o[1] || (o[1] = [
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
}), ta = /* @__PURE__ */ Ce(A8, [["__scopeId", "data-v-bf17c831"]]), z8 = { class: "export-blocked" }, V8 = { class: "error-header" }, F8 = { class: "error-summary" }, B8 = { class: "error-description" }, W8 = { class: "issues-list" }, G8 = { class: "issue-message" }, j8 = {
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
}, Q8 = /* @__PURE__ */ be({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = ut(), r = b(""), u = b(!1), c = b(!1), m = b(""), f = Qs({}), v = U(
      () => o.issues.some((C) => C.type === "uncommitted_workflows" || C.type === "uncommitted_git_changes")
    ), g = U(
      () => o.issues.some((C) => C.type === "unresolved_issues")
    ), _ = U(
      () => g.value && !c.value
    ), h = U(
      () => v.value && r.value.trim() !== "" && !u.value && !_.value
    );
    function w(C) {
      const S = o.issues[C];
      return f[C] || S.details.length <= 3 ? S.details : S.details.slice(0, 3);
    }
    async function x() {
      var C;
      if (h.value) {
        u.value = !0, m.value = "";
        try {
          const S = await l(r.value.trim(), c.value);
          if (S.status === "success")
            a("committed");
          else if (S.status === "blocked") {
            const z = ((C = S.issues) == null ? void 0 : C.map((T) => `${T.name}: ${T.issue}`).join("; ")) || "Unknown issues";
            m.value = `Commit blocked: ${z}`;
          } else
            m.value = S.message || "Commit failed";
        } catch (S) {
          m.value = S instanceof Error ? S.message : "Commit failed";
        } finally {
          u.value = !1;
        }
      }
    }
    return (C, S) => (n(), D(Ct, {
      title: v.value ? "Commit & Export" : "Cannot Export",
      size: "md",
      onClose: S[4] || (S[4] = (z) => C.$emit("close"))
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
            (n(!0), i(H, null, ye(e.issues, (z, T) => (n(), i("div", {
              key: T,
              class: "issue-item"
            }, [
              t("div", G8, d(z.message), 1),
              z.details.length ? (n(), i("div", j8, [
                (n(!0), i(H, null, ye(w(T), (I, M) => (n(), i("div", {
                  key: M,
                  class: "issue-detail"
                }, d(I), 1))), 128)),
                z.details.length > 3 && !f[T] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (I) => f[T] = !0
                }, " +" + d(z.details.length - 3) + " more ", 9, H8)) : y("", !0)
              ])) : y("", !0),
              t("div", K8, [
                z.type === "uncommitted_workflows" ? (n(), i(H, { key: 0 }, [
                  $(" Commit your workflow changes before exporting. ")
                ], 64)) : z.type === "uncommitted_git_changes" ? (n(), i(H, { key: 1 }, [
                  $(" Commit your changes before exporting. ")
                ], 64)) : z.type === "unresolved_issues" ? (n(), i(H, { key: 2 }, [
                  $(" Resolve all workflow issues before exporting. ")
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
                "onUpdate:modelValue": S[0] || (S[0] = (z) => c.value = z),
                class: "allow-issues-toggle"
              }, {
                default: p(() => [...S[7] || (S[7] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            k(yn, {
              modelValue: r.value,
              "onUpdate:modelValue": S[1] || (S[1] = (z) => r.value = z),
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
          k(De, {
            variant: "secondary",
            onClick: S[2] || (S[2] = (z) => C.$emit("close"))
          }, {
            default: p(() => [...S[9] || (S[9] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(De, {
            variant: c.value ? "danger" : "primary",
            disabled: !h.value,
            loading: u.value,
            onClick: x
          }, {
            default: p(() => [
              $(d(u.value ? "Committing..." : c.value ? "Force Commit & Export" : "Commit & Export"), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (n(), D(De, {
          key: 1,
          variant: "primary",
          onClick: S[3] || (S[3] = (z) => C.$emit("close"))
        }, {
          default: p(() => [...S[10] || (S[10] = [
            $(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), eu = /* @__PURE__ */ Ce(Q8, [["__scopeId", "data-v-bd79ba24"]]), X8 = { class: "export-warnings" }, Z8 = {
  key: 0,
  class: "success-header"
}, e5 = { class: "warning-header" }, t5 = { class: "warning-summary" }, s5 = { class: "warning-title" }, o5 = { class: "models-section" }, n5 = { class: "models-list" }, a5 = { class: "model-info" }, l5 = { class: "model-filename" }, i5 = { class: "model-workflows" }, r5 = ["onClick"], u5 = /* @__PURE__ */ be({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = b(!1), r = b(null), u = U(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
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
                  (n(!0), i(H, null, ye(u.value, (v) => (n(), i("div", {
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
          k(De, {
            variant: "secondary",
            onClick: f[1] || (f[1] = (v) => m.$emit("cancel"))
          }, {
            default: p(() => [...f[7] || (f[7] = [
              $(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          k(De, {
            variant: "primary",
            onClick: f[2] || (f[2] = (v) => m.$emit("confirm"))
          }, {
            default: p(() => [
              $(d(e.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      r.value ? (n(), D(wl, {
        key: 0,
        identifier: r.value,
        onClose: c
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), tu = /* @__PURE__ */ Ce(u5, [["__scopeId", "data-v-b698d882"]]), c5 = { class: "export-card" }, d5 = { class: "export-path-row" }, m5 = { class: "export-actions" }, f5 = {
  key: 1,
  class: "export-warning"
}, v5 = /* @__PURE__ */ be({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = ut(), a = b(""), l = b(!1), r = b(!1), u = b(!1), c = b(null), m = b(!1), f = b(null), v = b(!1), g = b(!1), _ = U(() => l.value ? "Validating..." : r.value ? "Exporting..." : "Export Environment");
    async function h() {
      l.value = !0, c.value = null;
      try {
        const I = await s();
        f.value = I, I.can_export ? I.warnings.models_without_sources.length > 0 ? g.value = !0 : await S() : v.value = !0;
      } catch (I) {
        c.value = {
          status: "error",
          message: I instanceof Error ? I.message : "Validation failed"
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
        const I = await s();
        f.value = I, I.can_export ? I.warnings.models_without_sources.length > 0 ? g.value = !0 : await S() : v.value = !0;
      } catch (I) {
        c.value = {
          status: "error",
          message: I instanceof Error ? I.message : "Re-validation failed"
        };
      } finally {
        l.value = !1;
      }
    }
    async function C() {
      try {
        const I = await s();
        f.value = I;
      } catch (I) {
        console.error("Re-validation failed:", I);
      }
    }
    async function S() {
      r.value = !0;
      try {
        const I = await o(a.value || void 0);
        c.value = I;
      } catch (I) {
        c.value = {
          status: "error",
          message: I instanceof Error ? I.message : "Export failed"
        };
      } finally {
        r.value = !1;
      }
    }
    async function z() {
      var I;
      if ((I = c.value) != null && I.path)
        try {
          await navigator.clipboard.writeText(c.value.path);
        } catch (M) {
          console.error("Failed to copy path:", M);
        }
    }
    async function T() {
      var I;
      if ((I = c.value) != null && I.path) {
        u.value = !0;
        try {
          const M = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(c.value.path)}`);
          if (!M.ok)
            throw new Error(`Download failed: ${M.statusText}`);
          const O = await M.blob(), G = URL.createObjectURL(O), E = c.value.path.split("/").pop() || "environment-export.tar.gz", L = document.createElement("a");
          L.href = G, L.download = E, document.body.appendChild(L), L.click(), document.body.removeChild(L), URL.revokeObjectURL(G);
        } catch (M) {
          console.error("Failed to download:", M), alert(`Download failed: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (I, M) => (n(), i(H, null, [
      k(Kt, null, {
        header: p(() => [
          k(qt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (O) => m.value = !0)
          })
        ]),
        content: p(() => [
          k(_t, { title: "EXPORT OPTIONS" }, {
            default: p(() => [
              t("div", c5, [
                M[7] || (M[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", d5, [
                  k(an, {
                    modelValue: a.value,
                    "onUpdate:modelValue": M[1] || (M[1] = (O) => a.value = O),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", m5, [
                  k(we, {
                    variant: "primary",
                    size: "md",
                    loading: l.value || r.value,
                    disabled: l.value || r.value,
                    onClick: h
                  }, {
                    default: p(() => [
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
          c.value ? (n(), D(_t, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: p(() => [
              k(Lt, {
                status: c.value.status === "success" ? "synced" : "broken"
              }, fo({
                icon: p(() => [
                  $(d(c.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: p(() => [
                  $(d(c.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: p(() => [
                  $(d(c.value.status === "success" ? "Your environment has been exported" : c.value.message), 1)
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
                    c.value.models_without_sources !== void 0 ? (n(), D($t, {
                      key: 0,
                      label: "Models without sources:",
                      value: c.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    c.value.models_without_sources && c.value.models_without_sources > 0 ? (n(), i("div", f5, [...M[8] || (M[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                c.value.status === "success" ? {
                  name: "actions",
                  fn: p(() => [
                    k(we, {
                      variant: "primary",
                      size: "sm",
                      loading: u.value,
                      onClick: T
                    }, {
                      default: p(() => [...M[9] || (M[9] = [
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
                    k(we, {
                      variant: "secondary",
                      size: "sm",
                      onClick: z
                    }, {
                      default: p(() => [...M[10] || (M[10] = [
                        $(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    k(we, {
                      variant: "ghost",
                      size: "sm",
                      onClick: M[2] || (M[2] = (O) => c.value = null)
                    }, {
                      default: p(() => [...M[11] || (M[11] = [
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
      k(hs, {
        show: m.value,
        title: "What Gets Exported",
        onClose: M[3] || (M[3] = (O) => m.value = !1)
      }, {
        content: p(() => [...M[12] || (M[12] = [
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
      v.value && f.value ? (n(), D(eu, {
        key: 0,
        issues: f.value.blocking_issues,
        onClose: M[4] || (M[4] = (O) => v.value = !1),
        onCommitted: x
      }, null, 8, ["issues"])) : y("", !0),
      g.value && f.value ? (n(), D(tu, {
        key: 1,
        models: f.value.warnings.models_without_sources,
        onConfirm: w,
        onCancel: M[5] || (M[5] = (O) => g.value = !1),
        onRevalidate: C
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), p5 = /* @__PURE__ */ Ce(v5, [["__scopeId", "data-v-ddeffd68"]]), g5 = { class: "file-input-wrapper" }, h5 = ["accept", "multiple", "disabled"], y5 = /* @__PURE__ */ be({
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
    const a = o, l = b(null);
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
      k(we, {
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
            $(" " + d(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), w5 = /* @__PURE__ */ Ce(y5, [["__scopeId", "data-v-cd192091"]]), _5 = {
  key: 0,
  class: "drop-zone-empty"
}, k5 = { class: "drop-zone-text" }, b5 = { class: "drop-zone-primary" }, $5 = { class: "drop-zone-secondary" }, C5 = { class: "drop-zone-actions" }, x5 = {
  key: 1,
  class: "drop-zone-file"
}, S5 = { class: "file-info" }, I5 = { class: "file-details" }, E5 = { class: "file-name" }, T5 = { class: "file-size" }, P5 = /* @__PURE__ */ be({
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
    const o = s, a = b(!1), l = b(null), r = b(0), u = U(() => l.value !== null), c = U(() => {
      var C;
      return ((C = l.value) == null ? void 0 : C.name) || "";
    }), m = U(() => {
      if (!l.value) return "";
      const C = l.value.size;
      return C < 1024 ? `${C} B` : C < 1024 * 1024 ? `${(C / 1024).toFixed(1)} KB` : C < 1024 * 1024 * 1024 ? `${(C / (1024 * 1024)).toFixed(1)} MB` : `${(C / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function f(C) {
      var S;
      C.stopPropagation(), r.value++, (S = C.dataTransfer) != null && S.types.includes("Files") && (a.value = !0);
    }
    function v(C) {
      C.stopPropagation(), C.dataTransfer && (C.dataTransfer.dropEffect = "copy");
    }
    function g(C) {
      C.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function _(C) {
      var z;
      C.stopPropagation(), r.value = 0, a.value = !1;
      const S = (z = C.dataTransfer) == null ? void 0 : z.files;
      S && S.length > 0 && w(S[0]);
    }
    function h(C) {
      C.length > 0 && w(C[0]);
    }
    function w(C) {
      l.value = C, o("fileSelected", C);
    }
    function x() {
      l.value = null, o("clear");
    }
    return (C, S) => (n(), i("div", {
      class: Ne(["file-drop-zone", { "drop-active": a.value, "has-file": u.value }]),
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
        k(we, {
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
              $(d(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), R5 = /* @__PURE__ */ Ce(P5, [["__scopeId", "data-v-0f79cb86"]]), M5 = { class: "import-preview" }, D5 = { class: "preview-header" }, L5 = {
  key: 0,
  class: "source-env"
}, N5 = { class: "preview-content" }, U5 = { class: "preview-section" }, O5 = { class: "section-header" }, A5 = { class: "section-info" }, z5 = { class: "section-count" }, V5 = {
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
}, lS = { class: "git-info" }, iS = /* @__PURE__ */ be({
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
    const s = e, o = U(() => s.workflows.length), a = U(() => s.models.length), l = U(() => s.nodes.length);
    function r(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, c) => (n(), i("div", M5, [
      t("div", D5, [
        k(Xt, null, {
          default: p(() => [...c[0] || (c[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", L5, [
          c[1] || (c[1] = $(" From: ", -1)),
          k(Ya, null, {
            default: p(() => [
              $(d(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", N5, [
        t("div", U5, [
          t("div", O5, [
            c[3] || (c[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", A5, [
              c[2] || (c[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", z5, d(o.value) + " file" + d(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", V5, [
            (n(!0), i(H, null, ye(e.workflows.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
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
            (n(!0), i(H, null, ye(e.models.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
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
            (n(!0), i(H, null, ye(e.nodes.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
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
            e.gitBranch ? (n(), D($t, {
              key: 0,
              label: "Branch"
            }, {
              default: p(() => [
                k(Ya, null, {
                  default: p(() => [
                    $(d(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (n(), D($t, {
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
}), rS = /* @__PURE__ */ Ce(iS, [["__scopeId", "data-v-182fe113"]]), uS = { class: "import-config" }, cS = { class: "config-container" }, dS = { class: "config-field" }, mS = { class: "input-wrapper" }, fS = ["value"], vS = {
  key: 0,
  class: "validating-indicator"
}, pS = {
  key: 1,
  class: "valid-indicator"
}, gS = {
  key: 0,
  class: "field-error"
}, hS = { class: "config-field" }, yS = { class: "strategy-options" }, wS = ["value", "checked", "onChange"], _S = { class: "strategy-content" }, kS = { class: "strategy-label" }, bS = { class: "strategy-description" }, $S = { class: "config-field switch-field" }, CS = { class: "switch-label" }, xS = ["checked"], SS = { class: "advanced-section" }, IS = { class: "advanced-content" }, ES = { class: "config-field" }, TS = ["value"], PS = ["value"], RS = /* @__PURE__ */ be({
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
    const o = e, a = s, l = b(!1), r = b(!1);
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
      k(Xt, null, {
        default: p(() => [...g[2] || (g[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", cS, [
        t("div", dS, [
          k(Bn, { required: "" }, {
            default: p(() => [...g[3] || (g[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", mS, [
            t("input", {
              type: "text",
              class: Ne(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
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
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", yS, [
            (n(), i(H, null, ye(u, (_) => t("label", {
              key: _.value,
              class: Ne(["strategy-option", { active: e.modelStrategy === _.value }])
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
                  $("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              t("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: g[1] || (g[1] = (_) => a("update:torchBackend", _.target.value))
              }, [
                (n(!0), i(H, null, ye(Ze(kl), (_) => (n(), i("option", {
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
}), MS = /* @__PURE__ */ Ce(RS, [["__scopeId", "data-v-89ea06a1"]]), DS = { class: "import-flow" }, LS = {
  key: 0,
  class: "import-empty"
}, NS = { class: "git-import-section" }, US = { class: "git-url-input-row" }, OS = ["disabled"], AS = {
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
}, s4 = { class: "complete-message" }, o4 = { class: "complete-title" }, n4 = { class: "complete-details" }, a4 = { class: "complete-actions" }, l4 = /* @__PURE__ */ be({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var ce, W, de, B;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: u, validateEnvironmentName: c, executeImport: m, executeGitImport: f, getImportProgress: v } = ut();
    let g = null;
    const _ = b(null), h = b(a.resumeImport ?? !1), w = b(!1), x = b(!1), C = b(""), S = b(!1), z = b(null), T = b(""), I = b(null), M = b(!1), O = b(null), G = b(null), E = b({
      name: ((ce = a.initialProgress) == null ? void 0 : ce.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), L = b(null), ie = b({
      message: ((W = a.initialProgress) == null ? void 0 : W.message) ?? "Preparing import...",
      phase: ((de = a.initialProgress) == null ? void 0 : de.phase) ?? "",
      progress: ((B = a.initialProgress) == null ? void 0 : B.progress) ?? 0,
      error: null
    }), le = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Y = U(() => {
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
        workflows: N.workflows.map((re) => re.name),
        models: N.models.map((re) => ({
          filename: re.filename,
          size: 0,
          type: re.relative_path.split("/")[0] || "model"
        })),
        nodes: N.nodes.map((re) => re.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), K = U(() => !S.value && !z.value && G.value && E.value.name.length > 0 && !L.value && (_.value || I.value));
    async function V(N) {
      _.value = N, S.value = !0, z.value = null, G.value = null;
      try {
        const re = await r(N);
        G.value = re;
      } catch (re) {
        z.value = re instanceof Error ? re.message : "Failed to analyze file", console.error("Preview error:", re);
      } finally {
        S.value = !1;
      }
    }
    function J() {
      _.value = null, I.value = null, T.value = "", O.value = null, w.value = !1, x.value = !1, C.value = "", G.value = null, z.value = null, E.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, L.value = null, l("source-cleared");
    }
    function ee() {
      $e(), J(), h.value = !1, S.value = !1, M.value = !1, ie.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function Oe() {
      if (T.value.trim()) {
        M.value = !0, O.value = null;
        try {
          const N = await u(T.value.trim());
          I.value = T.value.trim(), G.value = N;
        } catch (N) {
          O.value = N instanceof Error ? N.message : "Failed to analyze repository";
        } finally {
          M.value = !1;
        }
      }
    }
    function ae(N) {
      try {
        const re = new URL(N);
        return re.host + re.pathname.replace(/\.git$/, "");
      } catch {
        return N;
      }
    }
    async function pe(N) {
      if (!N) {
        L.value = "Environment name is required";
        return;
      }
      try {
        const re = await c(N);
        L.value = re.valid ? null : re.error || "Invalid name";
      } catch {
        L.value = "Failed to validate name";
      }
    }
    async function ue() {
      if (E.value.name && !(!_.value && !I.value)) {
        h.value = !0, w.value = !1, ie.value = { message: `Creating environment '${E.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let N;
          if (_.value)
            N = await m(
              _.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else if (I.value)
            N = await f(
              I.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          N.status === "started" ? ze() : (x.value = !1, C.value = N.message, h.value = !1, w.value = !0);
        } catch (N) {
          x.value = !1, C.value = N instanceof Error ? N.message : "Unknown error occurred during import", h.value = !1, w.value = !0;
        }
      }
    }
    async function ze() {
      if (g) return;
      const N = async () => {
        try {
          const Ve = await v();
          return ie.value = {
            message: Ve.message,
            phase: Ve.phase || "",
            progress: Ve.progress ?? (Ve.state === "importing" ? 50 : 0),
            error: Ve.error || null
          }, Ve.state === "complete" ? ($e(), x.value = !0, C.value = `Environment '${Ve.environment_name}' created successfully`, h.value = !1, w.value = !0, Ve.environment_name && l("import-complete", Ve.environment_name, E.value.switchAfterImport), !1) : Ve.state === "error" ? ($e(), x.value = !1, C.value = Ve.error || Ve.message, h.value = !1, w.value = !0, !1) : !0;
        } catch (Ve) {
          return console.error("Failed to poll import progress:", Ve), !0;
        }
      };
      await N() && (g = setInterval(async () => {
        await N() || $e();
      }, 2e3));
    }
    function $e() {
      g && (clearInterval(g), g = null);
    }
    function ke(N) {
      return N < 1024 ? `${N} B` : N < 1024 * 1024 ? `${(N / 1024).toFixed(1)} KB` : N < 1024 * 1024 * 1024 ? `${(N / (1024 * 1024)).toFixed(1)} MB` : `${(N / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return lt(async () => {
      try {
        const N = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", N.state, N), N.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", N.environment_name), h.value = !0, E.value.name = N.environment_name || E.value.name || "", ie.value = {
          progress: N.progress ?? 0,
          message: N.message || "Importing...",
          phase: N.phase || "",
          error: null
        }, ze());
      } catch (N) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", N);
      }
    }), s({
      handleReset: ee,
      isImporting: h,
      canImport: K
    }), (N, re) => {
      var Ve;
      return n(), i("div", DS, [
        !_.value && !I.value && !h.value ? (n(), i("div", LS, [
          k(R5, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: V
          }),
          re[7] || (re[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", NS, [
            re[5] || (re[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", US, [
              at(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": re[0] || (re[0] = (Fe) => T.value = Fe),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: as(Oe, ["enter"]),
                disabled: M.value
              }, null, 40, OS), [
                [es, T.value]
              ]),
              k(we, {
                variant: "primary",
                size: "sm",
                disabled: !T.value.trim() || M.value,
                onClick: Oe
              }, {
                default: p(() => [
                  $(d(M.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            O.value ? (n(), i("div", AS, d(O.value), 1)) : y("", !0),
            re[6] || (re[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (_.value || I.value) && !h.value && !w.value ? (n(), i("div", zS, [
          t("div", VS, [
            _.value ? (n(), i("div", FS, [
              re[8] || (re[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", BS, [
                t("div", WS, d(_.value.name), 1),
                t("div", GS, d(ke(_.value.size)), 1)
              ])
            ])) : I.value ? (n(), i("div", jS, [
              re[10] || (re[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", HS, [
                t("div", KS, d(ae(I.value)), 1),
                re[9] || (re[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            k(we, {
              variant: "ghost",
              size: "sm",
              onClick: J
            }, {
              default: p(() => [...re[11] || (re[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (n(), i("div", qS, [...re[12] || (re[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : z.value ? (n(), D(cs, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [z.value]
          }, null, 8, ["details"])) : G.value ? (n(), D(rS, {
            key: 2,
            "source-environment": Y.value.sourceEnvironment,
            workflows: Y.value.workflows,
            models: Y.value.models,
            nodes: Y.value.nodes,
            "git-branch": Y.value.gitBranch,
            "git-commit": Y.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          G.value ? (n(), D(MS, {
            key: 3,
            name: E.value.name,
            "onUpdate:name": re[1] || (re[1] = (Fe) => E.value.name = Fe),
            "model-strategy": E.value.modelStrategy,
            "onUpdate:modelStrategy": re[2] || (re[2] = (Fe) => E.value.modelStrategy = Fe),
            "torch-backend": E.value.torchBackend,
            "onUpdate:torchBackend": re[3] || (re[3] = (Fe) => E.value.torchBackend = Fe),
            "switch-after-import": E.value.switchAfterImport,
            "onUpdate:switchAfterImport": re[4] || (re[4] = (Fe) => E.value.switchAfterImport = Fe),
            "name-error": L.value,
            onValidateName: pe
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          E.value.modelStrategy === "skip" && ((Ve = G.value) != null && Ve.models_needing_download) ? (n(), D(cs, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${G.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", YS, [
            k(we, {
              variant: "secondary",
              size: "md",
              onClick: J
            }, {
              default: p(() => [...re[13] || (re[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(we, {
              variant: "primary",
              size: "md",
              disabled: !K.value,
              onClick: ue
            }, {
              default: p(() => [...re[14] || (re[14] = [
                $(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : h.value ? (n(), i("div", JS, [
          t("p", QS, [
            re[15] || (re[15] = $(" Importing environment ", -1)),
            t("strong", null, d(E.value.name), 1),
            re[16] || (re[16] = $("... ", -1))
          ]),
          k(ea, {
            progress: ie.value.progress,
            message: ie.value.message,
            "current-phase": ie.value.phase,
            variant: ie.value.error ? "error" : "default",
            "show-steps": !0,
            steps: le
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          ie.value.error ? y("", !0) : (n(), i("p", XS, " This may take several minutes. Please wait... ")),
          ie.value.error ? (n(), i("div", ZS, [
            t("p", e4, d(ie.value.error), 1)
          ])) : y("", !0)
        ])) : w.value ? (n(), i("div", t4, [
          t("div", {
            class: Ne(["complete-icon", x.value ? "success" : "error"])
          }, d(x.value ? "✓" : "✕"), 3),
          t("div", s4, [
            t("div", o4, d(x.value ? "Import Successful" : "Import Failed"), 1),
            t("div", n4, d(C.value), 1)
          ]),
          t("div", a4, [
            k(we, {
              variant: "primary",
              size: "md",
              onClick: ee
            }, {
              default: p(() => [...re[17] || (re[17] = [
                $(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), su = /* @__PURE__ */ Ce(l4, [["__scopeId", "data-v-72cbc04e"]]), i4 = /* @__PURE__ */ be({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, a = b(!1);
    function l(r, u) {
      u && o("import-complete-switch", r);
    }
    return (r, u) => (n(), i(H, null, [
      k(Kt, null, {
        header: p(() => [
          k(qt, {
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
}), r4 = /* @__PURE__ */ Ce(i4, [["__scopeId", "data-v-e13bfe76"]]), Dn = So(), u4 = 5e3, $o = b([]), La = b(!1), Na = b(null);
let Go = null;
async function Ln(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function ou(e) {
  const s = U(
    () => $o.value.filter((h) => h.status === "running")
  ), o = U(
    () => $o.value.filter((h) => h.status === "deploying")
  ), a = U(
    () => $o.value.filter((h) => h.status === "stopped")
  ), l = U(
    () => s.value.length + o.value.length
  ), r = U(() => {
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
    La.value = !0, Na.value = null;
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
      Na.value = h instanceof Error ? h.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", h);
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
          const C = await x.json();
          throw new Error(C.message || "Failed to stop instance");
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
          const C = await x.json();
          throw new Error(C.message || "Failed to start instance");
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
          const C = await x.json();
          throw new Error(C.message || "Failed to terminate instance");
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
    error: Na,
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
}, k4 = { class: "progress-message" }, b4 = { class: "instance-actions" }, $4 = /* @__PURE__ */ be({
  __name: "InstanceCard",
  props: {
    instance: {},
    isLoading: { type: Boolean }
  },
  emits: ["stop", "start", "terminate"],
  setup(e) {
    const s = e, o = U(() => s.instance.provider === "custom" && s.instance.worker_name ? s.instance.worker_name : {
      runpod: "RunPod",
      vast: "Vast.ai",
      custom: "Custom"
    }[s.instance.provider] || s.instance.provider), a = U(() => ({
      deploying: "Deploying",
      starting: "Starting",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[s.instance.status] || s.instance.status), l = U(() => `status-${s.instance.status}`);
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
      class: Ne(["instance-card", l.value])
    }, [
      t("div", c4, [
        t("span", d4, d(o.value), 1),
        t("span", m4, d(e.instance.name), 1),
        t("span", {
          class: Ne(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (n(), i("span", f4)) : y("", !0),
          $(" " + d(a.value), 1)
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
        e.instance.deployment_progress ? (n(), D(ga, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", b4, [
        e.instance.status === "running" && e.instance.comfyui_url ? (n(), D(we, {
          key: 0,
          variant: "primary",
          size: "xs",
          onClick: r
        }, {
          default: p(() => [...f[3] || (f[3] = [
            $(" Open ComfyUI ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.console_url && e.instance.provider !== "custom" ? (n(), D(we, {
          key: 1,
          variant: "ghost",
          size: "xs",
          onClick: u
        }, {
          default: p(() => [...f[4] || (f[4] = [
            $(" Console ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.status === "running" ? (n(), D(we, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: f[0] || (f[0] = (v) => m.$emit("stop", e.instance))
        }, {
          default: p(() => [...f[5] || (f[5] = [
            $(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        e.instance.status === "stopped" ? (n(), D(we, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: f[1] || (f[1] = (v) => m.$emit("start", e.instance))
        }, {
          default: p(() => [...f[6] || (f[6] = [
            $(" Start ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        k(we, {
          variant: "destructive",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: f[2] || (f[2] = (v) => m.$emit("terminate", e.instance))
        }, {
          default: p(() => [...f[7] || (f[7] = [
            $(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), C4 = /* @__PURE__ */ Ce($4, [["__scopeId", "data-v-746c3894"]]), x4 = { class: "instances-tab" }, S4 = { class: "instances-header" }, I4 = {
  key: 0,
  class: "loading-state"
}, E4 = {
  key: 1,
  class: "empty-state"
}, T4 = {
  key: 2,
  class: "instances-list"
}, P4 = /* @__PURE__ */ be({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(e) {
    const s = e, o = U(() => {
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
        k(Xt, null, {
          default: p(() => [...l[4] || (l[4] = [
            $("Active Instances", -1)
          ])]),
          _: 1
        }),
        k(we, {
          variant: "ghost",
          size: "xs",
          loading: e.isLoading,
          onClick: l[0] || (l[0] = (r) => a.$emit("refresh"))
        }, {
          default: p(() => [...l[5] || (l[5] = [
            $(" Refresh ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      e.isLoading && e.instances.length === 0 ? (n(), i("div", I4, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        $(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (n(), i("div", E4, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (n(), i("div", T4, [
        (n(!0), i(H, null, ye(o.value, (r) => (n(), D(C4, {
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
}), R4 = /* @__PURE__ */ Ce(P4, [["__scopeId", "data-v-ba614fc3"]]), M4 = { class: "remote-header" }, D4 = { class: "remote-info" }, L4 = { class: "remote-icon" }, N4 = { class: "remote-name" }, U4 = {
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
}, W4 = { class: "remote-actions" }, G4 = /* @__PURE__ */ be({
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
    const s = e, o = U(() => s.remote.is_default), a = U(() => {
      const r = s.remote.fetch_url, u = r.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return u ? `https://${u[1]}/${u[2]}` : r.startsWith("https://") || r.startsWith("http://") ? r.replace(/\.git$/, "") : null;
    }), l = U(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (r, u) => (n(), i("div", {
      class: Ne(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", M4, [
        t("div", D4, [
          t("span", L4, d(o.value ? "🔗" : "🌐"), 1),
          t("span", N4, d(e.remote.name), 1),
          o.value ? (n(), i("span", U4, "DEFAULT")) : y("", !0),
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
        k(we, {
          variant: "secondary",
          size: "xs",
          loading: e.isFetching,
          onClick: u[1] || (u[1] = (c) => r.$emit("fetch", e.remote.name))
        }, {
          default: p(() => [...u[4] || (u[4] = [
            $(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        e.syncStatus && e.syncStatus.ahead > 0 ? (n(), D(we, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: e.isPushing,
          onClick: u[2] || (u[2] = (c) => r.$emit("push", e.remote.name))
        }, {
          default: p(() => [
            $(" Push ↑" + d(e.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : y("", !0),
        k(we, {
          variant: e.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: u[3] || (u[3] = (c) => r.$emit("select", e.remote.name))
        }, {
          default: p(() => [
            $(d(e.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), nu = /* @__PURE__ */ Ce(G4, [["__scopeId", "data-v-d687d161"]]), j4 = { class: "runpod-tab" }, H4 = { class: "api-key-card" }, K4 = { class: "api-key-row" }, q4 = { class: "api-key-input-wrapper" }, Y4 = ["type", "disabled"], J4 = ["title"], Q4 = { class: "status-icon" }, X4 = { class: "status-text" }, Z4 = {
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
}, RI = {
  key: 1,
  class: "empty-remotes"
}, MI = { class: "remotes-list" }, DI = {
  key: 0,
  class: "sync-warning"
}, LI = { class: "warning-content" }, NI = { class: "remotes-footer" }, UI = { class: "summary-card" }, OI = {
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
}, x6 = { class: "console-link" }, S6 = ["href"], I6 = /* @__PURE__ */ be({
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
      getDataCenters: C
    } = ut(), S = b(!1), z = b(""), T = b(!1), I = b(!1), M = b(null), O = b(null), G = b(""), E = b(""), L = b(""), ie = b("SECURE"), le = b("ON_DEMAND"), Y = b("my-comfyui-deploy"), K = b([]), V = b({}), J = b(!1), ee = b(null), Oe = b(null), ae = b(null), pe = b([]), ue = b(!1), ze = b([]), $e = b(!1), ke = b([]), ce = b(!1), W = b(null), de = b(!1), B = b(!1), N = b(null), re = b(!1), Ve = b(null), Fe = b(null), F = b(null), X = b(!1), me = b(null), Pe = b(!1), Ie = b(!1), Ee = U(() => ze.value.find((P) => P.id === E.value) || null), q = U(() => G.value ? ze.value.filter((P) => P.data_center_id === G.value) : ze.value), A = U(() => ke.value.filter((P) => P.available)), Z = U(() => ee.value && V.value[ee.value] || null), ne = U(() => {
      if (!ee.value) return null;
      const P = K.value.find((R) => R.name === ee.value);
      return (P == null ? void 0 : P.fetch_url) || null;
    }), _e = U(() => T.value && E.value && L.value && ne.value && !B.value && !X.value), Se = (P) => {
      const R = ke.value.find((tt) => tt.id === L.value);
      if (!R) return "0.00";
      if (P === "SECURE") return (R.securePrice ?? 0).toFixed(2);
      if (P === "COMMUNITY") return (R.communityPrice ?? 0).toFixed(2);
      const Ue = ie.value === "SECURE";
      return P === "ON_DEMAND" ? Ue ? (R.securePrice ?? 0).toFixed(2) : (R.communityPrice ?? 0).toFixed(2) : Ue ? (R.secureSpotPrice ?? 0).toFixed(2) : (R.communitySpotPrice ?? 0).toFixed(2);
    }, oe = U(() => {
      const P = ke.value.find((Et) => Et.id === L.value), R = ze.value.find((Et) => Et.id === E.value);
      if (!P) return null;
      const Ue = ie.value === "SECURE", tt = le.value === "SPOT";
      let pt;
      tt ? pt = Ue ? P.secureSpotPrice ?? 0 : P.communitySpotPrice ?? 0 : pt = Ue ? P.securePrice ?? 0 : P.communityPrice ?? 0;
      const st = R ? R.size_gb * 14e-5 : 0, xt = 4e-3;
      return {
        gpu: pt,
        volume: st,
        container: xt,
        total: pt + st + xt
      };
    });
    async function j() {
      await ge(), await Promise.all([Ke(), Ae()]);
    }
    async function Ae() {
      J.value = !0;
      try {
        const P = await _();
        K.value = P.remotes, await Promise.all(
          P.remotes.map(async (Ue) => {
            const tt = await h(Ue.name);
            tt && (V.value[Ue.name] = tt);
          })
        );
        const R = P.remotes.find((Ue) => Ue.is_default);
        R ? ee.value = R.name : P.remotes.length > 0 && (ee.value = P.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        J.value = !1;
      }
    }
    async function Te(P) {
      Oe.value = P;
      try {
        await w(P);
        const R = await h(P);
        R && (V.value[P] = R), o("toast", `Fetched from ${P}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        Oe.value = null;
      }
    }
    async function xe(P) {
      ae.value = P;
      try {
        await x(P, { force: !1 });
        const R = await h(P);
        R && (V.value[P] = R), o("toast", `Pushed to ${P}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        ae.value = null;
      }
    }
    function Le(P) {
      ee.value = P;
    }
    async function Me() {
      if (z.value) {
        I.value = !0, M.value = null;
        try {
          const P = await l(z.value, !0);
          P.status === "success" ? (T.value = !0, O.value = P.credit_balance ?? null, M.value = { type: "success", message: P.message }, await j()) : M.value = { type: "error", message: P.message };
        } catch (P) {
          M.value = {
            type: "error",
            message: P instanceof Error ? P.message : "Connection test failed"
          };
        } finally {
          I.value = !1;
        }
      }
    }
    async function Q() {
      try {
        await v(), z.value = "", T.value = !1, M.value = null, O.value = null, pe.value = [], G.value = "", ze.value = [], E.value = "", ke.value = [], L.value = "", W.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function ge() {
      $e.value = !0, ue.value = !0;
      try {
        const P = await r();
        ze.value = P.volumes;
        const R = /* @__PURE__ */ new Map();
        for (const Ue of P.volumes)
          Ue.data_center_id && !R.has(Ue.data_center_id) && R.set(Ue.data_center_id, {
            id: Ue.data_center_id,
            name: Ue.data_center_name || Ue.data_center_id,
            available: !0
          });
        if (P.volumes.length === 0) {
          const Ue = await C();
          pe.value = Ue.data_centers;
        } else
          pe.value = Array.from(R.values());
        if (ze.value.length > 0) {
          const Ue = ze.value[0];
          E.value = Ue.id, Ue.data_center_id && (G.value = Ue.data_center_id, await he(Ue.data_center_id));
        } else pe.value.length > 0 && (G.value = pe.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        $e.value = !1, ue.value = !1;
      }
    }
    async function he(P) {
      ce.value = !0;
      try {
        const R = await u(P);
        ke.value = R.gpu_types;
        const Ue = ke.value.find((tt) => tt.available);
        Ue ? L.value = Ue.id : L.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        ce.value = !1;
      }
    }
    St(G, async (P) => {
      if (!P || $e.value) return;
      const R = ze.value.find((Ue) => Ue.id === E.value);
      R && R.data_center_id !== P && (E.value = ""), await he(P);
    }), St(E, async (P) => {
      if (!P) {
        ke.value = [], L.value = "";
        return;
      }
      if ($e.value) return;
      const R = ze.value.find((Ue) => Ue.id === P);
      R && R.data_center_id !== G.value ? G.value = R.data_center_id : R && await he(R.data_center_id);
    });
    async function Ke() {
      de.value = !0;
      try {
        W.value = await a();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        de.value = !1;
      }
    }
    async function Be() {
      if (!(!L.value || !E.value)) {
        X.value = !0, N.value = null;
        try {
          const P = await g();
          me.value = P, P.can_export ? P.warnings.models_without_sources.length > 0 ? Ie.value = !0 : await qe() : Pe.value = !0;
        } catch (P) {
          N.value = {
            status: "error",
            message: P instanceof Error ? P.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          X.value = !1;
        }
      }
    }
    async function We() {
      Ie.value = !1, await qe();
    }
    async function Xe() {
      try {
        const P = await g();
        me.value = P;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function qe() {
      B.value = !0;
      try {
        let P;
        if (le.value === "SPOT") {
          const Ue = ke.value.find((tt) => tt.id === L.value);
          Ue && (P = ie.value === "SECURE" ? Ue.secureSpotPrice : Ue.communitySpotPrice);
        }
        const R = await c({
          gpu_type_id: L.value,
          pod_name: Y.value || "my-comfyui-deploy",
          network_volume_id: E.value,
          cloud_type: ie.value,
          pricing_type: le.value,
          spot_bid: P,
          import_source: ne.value
        });
        N.value = R, R.status === "success" && R.pod_id ? (Ve.value = R.pod_id, re.value = !0, dt(R.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", R.message, "error");
      } catch (P) {
        N.value = {
          status: "error",
          message: P instanceof Error ? P.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        B.value = !1;
      }
    }
    function dt(P) {
      vt(P), F.value = window.setInterval(() => vt(P), 3e3);
    }
    function ct() {
      F.value && (clearInterval(F.value), F.value = null);
    }
    async function vt(P) {
      try {
        const R = await m(P);
        Fe.value = R, (R.phase === "READY" || R.phase === "ERROR" || R.phase === "STOPPED") && (ct(), R.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (R) {
        console.error("Failed to poll deployment status:", R);
      }
    }
    function Pt() {
      re.value = !1, ct(), Ve.value = null, Fe.value = null;
    }
    function ts() {
      var P;
      (P = Fe.value) != null && P.comfyui_url && window.open(Fe.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function Ot(P) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[P || ""] || "Initializing...";
    }
    function fe(P) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[P || ""] ?? 10;
    }
    return lt(async () => {
      try {
        const P = await f(!0);
        P.has_key && P.key_preview && (z.value = `****${P.key_preview}`, P.valid ? (T.value = !0, O.value = P.credit_balance ?? null, M.value = { type: "success", message: "Connected to RunPod" }, await j()) : P.error && (M.value = { type: "error", message: P.error }));
      } catch {
      }
    }), Xs(() => {
      ct();
    }), (P, R) => {
      var Ue, tt, pt, st, xt, Et;
      return n(), i(H, null, [
        t("div", j4, [
          k(_t, { title: "RUNPOD API KEY" }, {
            default: p(() => [
              t("div", H4, [
                t("div", K4, [
                  t("div", q4, [
                    at(t("input", {
                      "onUpdate:modelValue": R[0] || (R[0] = (Ge) => z.value = Ge),
                      type: S.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: T.value
                    }, null, 8, Y4), [
                      [pa, z.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: R[1] || (R[1] = (Ge) => S.value = !S.value),
                      title: S.value ? "Hide key" : "Show key"
                    }, d(S.value ? "👁" : "👁‍🗨"), 9, J4)
                  ]),
                  T.value ? y("", !0) : (n(), D(we, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: I.value,
                    disabled: !z.value || I.value,
                    onClick: Me
                  }, {
                    default: p(() => [...R[16] || (R[16] = [
                      $(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  T.value ? (n(), D(we, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: Q
                  }, {
                    default: p(() => [...R[17] || (R[17] = [
                      $(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                M.value ? (n(), i("div", {
                  key: 0,
                  class: Ne(["connection-status", M.value.type])
                }, [
                  t("span", Q4, d(M.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", X4, d(M.value.message), 1),
                  O.value !== null ? (n(), i("span", Z4, " $" + d(O.value.toFixed(2)) + " credit ", 1)) : y("", !0)
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
          T.value ? (n(), D(_t, {
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
                    disabled: ue.value
                  }, [
                    ue.value ? (n(), i("option", oI, "Loading...")) : G.value ? y("", !0) : (n(), i("option", nI, "Select a region")),
                    (n(!0), i(H, null, ye(pe.value, (Ge) => (n(), i("option", {
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
                  $e.value ? (n(), i("div", iI, "Loading volumes...")) : q.value.length === 0 ? (n(), i(H, { key: 1 }, [
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
                      "onUpdate:modelValue": R[3] || (R[3] = (Ge) => E.value = Ge),
                      class: "config-select"
                    }, [
                      (n(!0), i(H, null, ye(q.value, (Ge) => (n(), i("option", {
                        key: Ge.id,
                        value: Ge.id
                      }, d(Ge.name) + " (" + d(Ge.size_gb) + "GB) ", 9, cI))), 128))
                    ], 512), [
                      [Ss, E.value]
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
                    "onUpdate:modelValue": R[4] || (R[4] = (Ge) => L.value = Ge),
                    class: "config-select",
                    disabled: ce.value || !E.value
                  }, [
                    E.value ? ce.value ? (n(), i("option", vI, "Loading GPUs...")) : A.value.length === 0 ? (n(), i("option", pI, "No GPUs available in this region")) : y("", !0) : (n(), i("option", fI, "Select a volume first")),
                    (n(!0), i(H, null, ye(A.value, (Ge) => (n(), i("option", {
                      key: Ge.id,
                      value: Ge.id
                    }, d(Ge.displayName) + " (" + d(Ge.memoryInGb) + "GB) - $" + d(ie.value === "SECURE" ? (Ge.securePrice ?? 0).toFixed(2) : (Ge.communityPrice ?? 0).toFixed(2)) + "/hr " + d(Ge.stockStatus ? `[${Ge.stockStatus}]` : ""), 9, gI))), 128))
                  ], 8, mI), [
                    [Ss, L.value]
                  ])
                ]),
                t("div", hI, [
                  R[26] || (R[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", yI, [
                    t("label", wI, [
                      at(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[5] || (R[5] = (Ge) => ie.value = Ge),
                        value: "SECURE"
                      }, null, 512), [
                        [ds, ie.value]
                      ]),
                      t("span", _I, "Secure ($" + d(Se("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", kI, [
                      at(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[6] || (R[6] = (Ge) => ie.value = Ge),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [ds, ie.value]
                      ]),
                      t("span", bI, "Community ($" + d(Se("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", $I, [
                  R[27] || (R[27] = t("label", { class: "config-label" }, [
                    $(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", CI, [
                    t("label", xI, [
                      at(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[7] || (R[7] = (Ge) => le.value = Ge),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [ds, le.value]
                      ]),
                      t("span", SI, "On-Demand ($" + d(Se("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", II, [
                      at(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": R[8] || (R[8] = (Ge) => le.value = Ge),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [ds, le.value]
                      ]),
                      t("span", EI, "Spot ($" + d(Se("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", TI, [
                  R[28] || (R[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  at(t("input", {
                    "onUpdate:modelValue": R[9] || (R[9] = (Ge) => Y.value = Ge),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [es, Y.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : y("", !0),
          T.value ? (n(), D(_t, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: p(() => [
              J.value ? (n(), i("div", PI, "Loading remotes...")) : K.value.length === 0 ? (n(), i("div", RI, [
                R[30] || (R[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                k(we, {
                  variant: "primary",
                  size: "xs",
                  onClick: R[10] || (R[10] = (Ge) => o("navigate", "remotes"))
                }, {
                  default: p(() => [...R[29] || (R[29] = [
                    $(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (n(), i(H, { key: 2 }, [
                t("div", MI, [
                  (n(!0), i(H, null, ye(K.value, (Ge) => (n(), D(nu, {
                    key: Ge.name,
                    remote: Ge,
                    "sync-status": V.value[Ge.name],
                    "is-selected": ee.value === Ge.name,
                    "is-fetching": Oe.value === Ge.name,
                    "is-pushing": ae.value === Ge.name,
                    onFetch: Te,
                    onPush: xe,
                    onSelect: Le
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                Z.value && Z.value.ahead > 0 ? (n(), i("div", DI, [
                  R[31] || (R[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", LI, [
                    t("strong", null, d(Z.value.ahead) + " unpushed commit" + d(Z.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + d(ee.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  k(we, {
                    variant: "primary",
                    size: "xs",
                    loading: ae.value === ee.value,
                    onClick: R[11] || (R[11] = (Ge) => ee.value && xe(ee.value))
                  }, {
                    default: p(() => [
                      $(" Push to " + d(ee.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", NI, [
                  k(we, {
                    variant: "link",
                    size: "xs",
                    onClick: R[12] || (R[12] = (Ge) => o("navigate", "remotes"))
                  }, {
                    default: p(() => [...R[32] || (R[32] = [
                      $(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          T.value ? (n(), D(_t, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: p(() => [
              t("div", UI, [
                de.value ? (n(), i("div", OI, "Loading environment summary...")) : W.value ? (n(), i(H, { key: 1 }, [
                  t("div", AI, [
                    R[33] || (R[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", zI, d(W.value.comfyui_version), 1)
                  ]),
                  t("div", VI, [
                    R[34] || (R[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", FI, d(W.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", BI, [
                    R[35] || (R[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", WI, d(W.value.model_count) + " models", 1)
                  ]),
                  W.value.models_with_sources > 0 ? (n(), i("div", GI, [
                    t("span", jI, "└─ " + d(W.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  W.value.models_without_sources > 0 ? (n(), i("div", HI, [
                    t("span", KI, "└─ " + d(W.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", qI, [
                    R[36] || (R[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", YI, d(W.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", JI, [
                    R[37] || (R[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", QI, "~" + d(W.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          T.value && oe.value ? (n(), D(_t, {
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
                        t("span", s6, "$" + d(oe.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", o6, [
                        R[39] || (R[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", n6, "$" + d(oe.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", a6, [
                        R[40] || (R[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", l6, "$" + d(oe.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      R[43] || (R[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", i6, [
                        R[41] || (R[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", r6, "~$" + d(oe.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", u6, [
                      R[45] || (R[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", c6, [
                        t("span", null, d(((Ge = ke.value.find((ys) => ys.id === L.value)) == null ? void 0 : Ge.displayName) || "GPU") + " (" + d(((is = ke.value.find((ys) => ys.id === L.value)) == null ? void 0 : is.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", d6, [
                        t("span", null, "Region: " + d(G.value), 1)
                      ]),
                      Ee.value ? (n(), i("div", m6, [
                        t("span", null, "Volume: " + d(Ee.value.name), 1)
                      ])) : y("", !0),
                      le.value === "SPOT" ? (n(), i("div", f6, [...R[44] || (R[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          T.value ? (n(), i("div", v6, [
            k(we, {
              variant: "primary",
              size: "md",
              loading: X.value || B.value,
              disabled: !_e.value,
              onClick: Be
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
                $(" " + d(X.value ? "Validating..." : B.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          N.value ? (n(), D(_t, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: p(() => [
              k(Lt, {
                status: N.value.status === "success" ? "synced" : "broken"
              }, fo({
                icon: p(() => [
                  $(d(N.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: p(() => [
                  $(d(N.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: p(() => [
                  $(d(N.value.message), 1)
                ]),
                actions: p(() => [
                  k(we, {
                    variant: "ghost",
                    size: "xs",
                    onClick: R[13] || (R[13] = (Ge) => N.value = null)
                  }, {
                    default: p(() => [...R[47] || (R[47] = [
                      $(" Dismiss ", -1)
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
        re.value ? (n(), D(Ct, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((Ue = Fe.value) == null ? void 0 : Ue.phase) === "READY" || ((tt = Fe.value) == null ? void 0 : tt.phase) === "ERROR" || ((pt = Fe.value) == null ? void 0 : pt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: Pt
        }, fo({
          body: p(() => {
            var Ge, is, ys, vo, po, go, Zs, ho, yo, wo, _o, ko;
            return [
              t("div", p6, [
                t("div", g6, [
                  t("div", {
                    class: Ne(["phase-icon", (is = (Ge = Fe.value) == null ? void 0 : Ge.phase) == null ? void 0 : is.toLowerCase()])
                  }, [
                    ((ys = Fe.value) == null ? void 0 : ys.phase) === "READY" ? (n(), i("span", h6, "✓")) : ((vo = Fe.value) == null ? void 0 : vo.phase) === "ERROR" ? (n(), i("span", y6, "✕")) : ((po = Fe.value) == null ? void 0 : po.phase) === "STOPPED" ? (n(), i("span", w6, "○")) : (n(), i("span", _6, "⟳"))
                  ], 2),
                  t("div", k6, [
                    t("div", b6, d(Ot((go = Fe.value) == null ? void 0 : go.phase)), 1),
                    t("div", $6, d(((Zs = Fe.value) == null ? void 0 : Zs.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                k(ga, {
                  progress: fe((ho = Fe.value) == null ? void 0 : ho.phase),
                  variant: ((yo = Fe.value) == null ? void 0 : yo.phase) === "ERROR" ? "error" : ((wo = Fe.value) == null ? void 0 : wo.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((_o = Fe.value) == null ? void 0 : _o.phase) === "READY" ? (n(), i("div", C6, [
                  k(we, {
                    variant: "primary",
                    size: "md",
                    onClick: ts
                  }, {
                    default: p(() => [...R[48] || (R[48] = [
                      $(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", x6, [
                  (ko = Fe.value) != null && ko.console_url ? (n(), i("a", {
                    key: 0,
                    href: Fe.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, S6)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((st = Fe.value) == null ? void 0 : st.phase) === "READY" || ((xt = Fe.value) == null ? void 0 : xt.phase) === "ERROR" || ((Et = Fe.value) == null ? void 0 : Et.phase) === "STOPPED" ? {
            name: "footer",
            fn: p(() => [
              k(we, {
                variant: "ghost",
                size: "xs",
                onClick: Pt
              }, {
                default: p(() => [...R[49] || (R[49] = [
                  $(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        Pe.value && me.value ? (n(), D(eu, {
          key: 1,
          issues: me.value.blocking_issues,
          onClose: R[14] || (R[14] = (Ge) => Pe.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        Ie.value && me.value ? (n(), D(tu, {
          key: 2,
          models: me.value.warnings.models_without_sources,
          onConfirm: We,
          onCancel: R[15] || (R[15] = (Ge) => Ie.value = !1),
          onRevalidate: Xe
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), E6 = /* @__PURE__ */ Ce(I6, [["__scopeId", "data-v-522cd4d9"]]), T6 = { class: "worker-header" }, P6 = { class: "worker-status" }, R6 = { class: "worker-name" }, M6 = { class: "worker-actions" }, D6 = { class: "worker-details" }, L6 = { class: "detail-item" }, N6 = { class: "detail-value" }, U6 = {
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
}, G6 = /* @__PURE__ */ be({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Ne(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", T6, [
        t("div", P6, [
          t("span", {
            class: Ne(["status-dot", e.worker.status])
          }, null, 2),
          t("span", R6, d(e.worker.name), 1)
        ]),
        t("div", M6, [
          e.worker.status === "online" ? (n(), D(we, {
            key: 0,
            variant: "primary",
            size: "xs",
            disabled: e.isActionLoading,
            onClick: o[0] || (o[0] = (a) => s.$emit("deploy", e.worker))
          }, {
            default: p(() => [...o[2] || (o[2] = [
              $(" Deploy ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : y("", !0),
          k(we, {
            variant: "ghost",
            size: "xs",
            loading: e.isActionLoading,
            onClick: o[1] || (o[1] = (a) => s.$emit("remove", e.worker.name))
          }, {
            default: p(() => [...o[3] || (o[3] = [
              $(" Remove ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ]),
      t("div", D6, [
        t("span", L6, [
          t("span", N6, d(e.worker.host) + ":" + d(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (n(), i("span", U6, [
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
          $(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (n(), i("span", F6, [
          $(" • " + d(e.worker.instance_count) + " instance" + d(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (n(), i("span", B6, "(" + d(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (n(), i("div", W6, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          $(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), j6 = /* @__PURE__ */ Ce(G6, [["__scopeId", "data-v-b1be7134"]]), H6 = { class: "add-worker-content" }, K6 = { class: "manual-form" }, q6 = { class: "form-row" }, Y6 = { class: "form-row-inline" }, J6 = { class: "form-field flex-2" }, Q6 = { class: "form-field flex-1" }, X6 = { class: "form-row" }, Z6 = { class: "api-key-wrapper" }, eE = ["type"], tE = { class: "result-icon" }, sE = { class: "result-content" }, oE = { class: "result-message" }, nE = {
  key: 0,
  class: "result-detail"
}, aE = { class: "modal-actions" }, lE = /* @__PURE__ */ be({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = ut(), l = Qs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), r = b(!1), u = b(!1), c = b(!1), m = b(null), f = U(() => l.host && l.port && l.apiKey), v = U(() => l.name && l.host && l.port && l.apiKey);
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
    return (h, w) => (n(), D(Ct, {
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
                [es, l.name]
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
                  [es, l.host]
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
                    es,
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
                $(" Run "),
                t("code", null, "cg-deploy worker setup"),
                $(" on the worker to get the key ")
              ], -1))
            ]),
            m.value ? (n(), i("div", {
              key: 0,
              class: Ne(["test-result", m.value.type])
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
          k(we, {
            variant: "ghost",
            size: "sm",
            loading: u.value,
            disabled: !f.value || u.value,
            onClick: g
          }, {
            default: p(() => [...w[11] || (w[11] = [
              $(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          k(we, {
            variant: "primary",
            size: "sm",
            loading: c.value,
            disabled: !v.value || c.value,
            onClick: _
          }, {
            default: p(() => [...w[12] || (w[12] = [
              $(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }));
  }
}), iE = /* @__PURE__ */ Ce(lE, [["__scopeId", "data-v-07a00732"]]), rE = { class: "discovered-content" }, uE = {
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
}, gE = { class: "selected-worker" }, hE = { class: "selected-name" }, yE = { class: "selected-address" }, wE = { class: "form-row" }, _E = { class: "api-key-wrapper" }, kE = ["type"], bE = { class: "result-icon" }, $E = { class: "result-message" }, CE = { class: "modal-actions" }, xE = /* @__PURE__ */ be({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = ut(), l = b(null), r = b(""), u = b(!1), c = b(!1), m = b(null), f = b(null);
    async function v(_) {
      var h;
      l.value = _, r.value = "", f.value = null, await Rt(), (h = m.value) == null || h.focus();
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
    return (_, h) => (n(), D(Ct, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: h[3] || (h[3] = (w) => _.$emit("close"))
    }, {
      body: p(() => [
        t("div", rE, [
          e.workers.length > 0 ? (n(), i("div", uE, [
            (n(!0), i(H, null, ye(e.workers, (w) => (n(), i("div", {
              key: `${w.host}:${w.port}`,
              class: "worker-item"
            }, [
              t("div", cE, [
                t("span", dE, d(w.name), 1),
                t("span", mE, d(w.host) + ":" + d(w.port), 1),
                w.gpu_info ? (n(), i("span", fE, d(w.gpu_info), 1)) : y("", !0)
              ]),
              k(we, {
                variant: "primary",
                size: "xs",
                onClick: (x) => v(w)
              }, {
                default: p(() => [...h[4] || (h[4] = [
                  $(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (n(), i("div", vE, [...h[5] || (h[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              $("Make sure workers are running with "),
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
                $(" Run "),
                t("code", null, "cg-deploy worker setup"),
                $(" on the worker to get the key ")
              ], -1))
            ]),
            f.value ? (n(), i("div", {
              key: 0,
              class: Ne(["test-result", f.value.type])
            }, [
              t("span", bE, d(f.value.type === "success" ? "✓" : "✕"), 1),
              t("span", $E, d(f.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: p(() => [
        t("div", CE, [
          l.value ? (n(), D(we, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: h[2] || (h[2] = (w) => {
              l.value = null, r.value = "", f.value = null;
            })
          }, {
            default: p(() => [...h[9] || (h[9] = [
              $(" Back ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          l.value ? (n(), D(we, {
            key: 1,
            variant: "primary",
            size: "sm",
            loading: c.value,
            disabled: !r.value || c.value,
            onClick: g
          }, {
            default: p(() => [...h[10] || (h[10] = [
              $(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), SE = /* @__PURE__ */ Ce(xE, [["__scopeId", "data-v-5a3e40a4"]]), IE = { class: "deploy-content" }, EE = { class: "section" }, TE = {
  key: 0,
  class: "loading-text"
}, PE = {
  key: 1,
  class: "empty-remotes"
}, RE = {
  key: 2,
  class: "remotes-list"
}, ME = { class: "section" }, DE = { class: "mode-options" }, LE = { class: "mode-option" }, NE = ["disabled"], UE = { class: "mode-option" }, OE = { class: "section" }, AE = {
  key: 0,
  class: "section"
}, zE = { class: "summary-row" }, VE = {
  key: 1,
  class: "sync-warning"
}, FE = { class: "warning-content" }, BE = { class: "modal-actions" }, WE = /* @__PURE__ */ be({
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
    } = ut(), v = b([]), g = b({}), _ = b(!1), h = b(null), w = b(null), x = b(null), C = b(o.worker.mode || "native"), S = b(""), z = b(null), T = b(!1), I = U(() => h.value && g.value[h.value] || null), M = U(() => {
      if (!h.value) return null;
      const K = v.value.find((V) => V.name === h.value);
      return (K == null ? void 0 : K.fetch_url) || null;
    }), O = U(() => M.value && !T.value);
    async function G() {
      _.value = !0;
      try {
        const K = await l();
        v.value = K.remotes, await Promise.all(
          K.remotes.map(async (J) => {
            const ee = await r(J.name);
            ee && (g.value[J.name] = ee);
          })
        );
        const V = K.remotes.find((J) => J.is_default);
        V ? h.value = V.name : K.remotes.length > 0 && (h.value = K.remotes[0].name);
      } catch {
        a("toast", "Failed to load remotes", "error");
      } finally {
        _.value = !1;
      }
    }
    async function E() {
      try {
        z.value = await m();
      } catch {
      }
    }
    async function L(K) {
      w.value = K;
      try {
        await u(K);
        const V = await r(K);
        V && (g.value[K] = V), a("toast", `Fetched from ${K}`, "success");
      } catch {
        a("toast", "Fetch failed", "error");
      } finally {
        w.value = null;
      }
    }
    async function ie(K) {
      x.value = K;
      try {
        await c(K, { force: !1 });
        const V = await r(K);
        V && (g.value[K] = V), a("toast", `Pushed to ${K}`, "success");
      } catch {
        a("toast", "Push failed", "error");
      } finally {
        x.value = null;
      }
    }
    function le(K) {
      h.value = K;
    }
    async function Y() {
      if (M.value) {
        T.value = !0;
        try {
          const K = await f(o.worker.name, {
            import_source: M.value,
            mode: C.value,
            name: S.value || void 0
          });
          K.id ? (a("toast", `Deployment started: ${K.name || K.id}`, "success"), a("deployed")) : K.status === "error" ? a("toast", K.message || "Deployment failed", "error") : a("toast", "Unexpected response from worker", "error");
        } catch (K) {
          a("toast", K instanceof Error ? K.message : "Deployment failed", "error");
        } finally {
          T.value = !1;
        }
      }
    }
    return lt(() => {
      G(), E();
    }), (K, V) => (n(), D(Ct, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: V[5] || (V[5] = (J) => K.$emit("close"))
    }, {
      body: p(() => [
        t("div", IE, [
          t("div", EE, [
            V[7] || (V[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            _.value ? (n(), i("div", TE, "Loading remotes...")) : v.value.length === 0 ? (n(), i("div", PE, [...V[6] || (V[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (n(), i("div", RE, [
              (n(!0), i(H, null, ye(v.value, (J) => (n(), D(nu, {
                key: J.name,
                remote: J,
                "sync-status": g.value[J.name],
                "is-selected": h.value === J.name,
                "is-fetching": w.value === J.name,
                "is-pushing": x.value === J.name,
                onFetch: L,
                onPush: ie,
                onSelect: le
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", ME, [
            V[10] || (V[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", DE, [
              t("label", LE, [
                at(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": V[0] || (V[0] = (J) => C.value = J),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, NE), [
                  [ds, C.value]
                ]),
                V[8] || (V[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", UE, [
                at(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": V[1] || (V[1] = (J) => C.value = J),
                  value: "native"
                }, null, 512), [
                  [ds, C.value]
                ]),
                V[9] || (V[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", OE, [
            V[11] || (V[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            at(t("input", {
              "onUpdate:modelValue": V[2] || (V[2] = (J) => S.value = J),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [es, S.value]
            ])
          ]),
          z.value ? (n(), i("div", AE, [
            V[12] || (V[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", zE, " ComfyUI: " + d(z.value.comfyui_version) + " • " + d(z.value.node_count) + " nodes • " + d(z.value.model_count) + " models • " + d(z.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          I.value && I.value.ahead > 0 ? (n(), i("div", VE, [
            V[14] || (V[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", FE, [
              t("strong", null, d(I.value.ahead) + " unpushed commit" + d(I.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + d(h.value) + "' before deploying to include your latest changes.", 1)
            ]),
            k(we, {
              variant: "primary",
              size: "xs",
              loading: x.value === h.value,
              onClick: V[3] || (V[3] = (J) => h.value && ie(h.value))
            }, {
              default: p(() => [...V[13] || (V[13] = [
                $(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: p(() => [
        t("div", BE, [
          k(we, {
            variant: "ghost",
            size: "sm",
            onClick: V[4] || (V[4] = (J) => K.$emit("close"))
          }, {
            default: p(() => [...V[15] || (V[15] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(we, {
            variant: "primary",
            size: "sm",
            loading: T.value,
            disabled: !O.value || T.value,
            onClick: Y
          }, {
            default: p(() => [...V[16] || (V[16] = [
              $(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), GE = /* @__PURE__ */ Ce(WE, [["__scopeId", "data-v-c12720d3"]]), jE = { class: "custom-tab" }, HE = { class: "section-header" }, KE = { class: "section-actions" }, qE = { class: "workers-content" }, YE = {
  key: 0,
  class: "loading-state"
}, JE = {
  key: 1,
  class: "empty-state"
}, QE = {
  key: 2,
  class: "workers-list"
}, XE = { class: "scan-icon" }, ZE = { class: "scan-message" }, eT = /* @__PURE__ */ be({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: a,
      addCustomWorker: l,
      removeCustomWorker: r,
      scanForWorkers: u
    } = ut(), c = b([]), m = b([]), f = b(!1), v = b(!1), g = b(null), _ = b(!1), h = b(!1), w = b(null), x = b(null);
    async function C() {
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
        const G = await u(), E = G.discovered.filter(
          (L) => !c.value.some((ie) => ie.host === L.host && ie.port === L.port)
        );
        m.value = E, E.length > 0 ? h.value = !0 : G.discovered.length > 0 ? x.value = {
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
    async function z(G) {
      try {
        await l(G), o("toast", `Worker '${G.name}' added`, "success"), _.value = !1, await C();
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to add worker", "error");
      }
    }
    async function T(G) {
      try {
        await l(G), o("toast", `Worker '${G.name}' added`, "success"), h.value = !1, await C();
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to add worker", "error");
      }
    }
    async function I(G) {
      g.value = G;
      try {
        await r(G), o("toast", `Worker '${G}' removed`, "success"), await C();
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to remove worker", "error");
      } finally {
        g.value = null;
      }
    }
    function M(G) {
      w.value = G;
    }
    function O() {
      w.value = null, o("deployed");
    }
    return lt(() => {
      C();
    }), (G, E) => (n(), i("div", jE, [
      t("div", HE, [
        E[8] || (E[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", KE, [
          k(we, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: S
          }, {
            default: p(() => [...E[6] || (E[6] = [
              $(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          k(we, {
            variant: "secondary",
            size: "xs",
            onClick: E[0] || (E[0] = (L) => _.value = !0)
          }, {
            default: p(() => [...E[7] || (E[7] = [
              $(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", qE, [
        f.value && c.value.length === 0 ? (n(), i("div", YE, [...E[9] || (E[9] = [
          t("span", { class: "spinner" }, null, -1),
          $(" Loading workers... ", -1)
        ])])) : c.value.length === 0 ? (n(), i("div", JE, [...E[10] || (E[10] = [
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
        ])])) : (n(), i("div", QE, [
          (n(!0), i(H, null, ye(c.value, (L) => (n(), D(j6, {
            key: L.name,
            worker: L,
            "is-action-loading": g.value === L.name,
            onDeploy: M,
            onRemove: I
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      x.value ? (n(), i("div", {
        key: 0,
        class: Ne(["scan-result", x.value.type])
      }, [
        t("span", XE, d(x.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", ZE, d(x.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: E[1] || (E[1] = (L) => x.value = null)
        }, "×")
      ], 2)) : y("", !0),
      h.value ? (n(), D(SE, {
        key: 1,
        workers: m.value,
        onClose: E[2] || (E[2] = (L) => h.value = !1),
        onAdd: T
      }, null, 8, ["workers"])) : y("", !0),
      _.value ? (n(), D(iE, {
        key: 2,
        onClose: E[3] || (E[3] = (L) => _.value = !1),
        onAdd: z
      })) : y("", !0),
      w.value ? (n(), D(GE, {
        key: 3,
        worker: w.value,
        onClose: E[4] || (E[4] = (L) => w.value = null),
        onToast: E[5] || (E[5] = (L, ie) => o("toast", L, ie)),
        onDeployed: O
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), tT = /* @__PURE__ */ Ce(eT, [["__scopeId", "data-v-1637dead"]]), Ua = "ComfyGit.Deploy.GitHubPAT";
function au(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function sT(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function oT() {
  function e() {
    try {
      return localStorage.getItem(Ua);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(Ua, l);
    } catch (r) {
      console.error("[useGitAuth] Failed to save token:", r);
    }
  }
  function o() {
    try {
      localStorage.removeItem(Ua);
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
}, iT = { class: "form-row" }, rT = { class: "token-wrapper" }, uT = ["type"], cT = { class: "result-icon" }, dT = { class: "result-message" }, mT = { class: "token-actions" }, fT = /* @__PURE__ */ be({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: a, setToken: l, clearToken: r, hasToken: u } = oT(), { getRemotes: c, testGitAuth: m } = ut(), f = b(""), v = b(!1), g = b(!1), _ = b(null), h = b(!1), w = U(() => u());
    lt(async () => {
      var T;
      const z = a();
      z && (f.value = z);
      try {
        const M = (T = (await c()).remotes) == null ? void 0 : T.find((O) => O.name === "origin");
        M && au(M.url) && (h.value = !0);
      } catch {
      }
    });
    async function x() {
      if (f.value) {
        g.value = !0, _.value = null;
        try {
          const z = await m(f.value);
          _.value = {
            type: z.status === "success" ? "success" : "error",
            message: z.message
          };
        } catch (z) {
          _.value = {
            type: "error",
            message: z instanceof Error ? z.message : "Connection test failed"
          };
        } finally {
          g.value = !1;
        }
      }
    }
    function C() {
      f.value && (l(f.value), o("saved"), o("close"));
    }
    function S() {
      r(), f.value = "", _.value = null;
    }
    return (z, T) => (n(), D(Ct, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: T[2] || (T[2] = (I) => z.$emit("close"))
    }, {
      body: p(() => [
        t("div", nT, [
          t("div", aT, [
            T[8] || (T[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            T[9] || (T[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            h.value ? (n(), i("div", lT, [...T[3] || (T[3] = [
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
            t("div", iT, [
              T[4] || (T[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", rT, [
                at(t("input", {
                  "onUpdate:modelValue": T[0] || (T[0] = (I) => f.value = I),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, uT), [
                  [pa, f.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: T[1] || (T[1] = (I) => v.value = !v.value)
                }, d(v.value ? "Hide" : "Show"), 1)
              ]),
              T[5] || (T[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            _.value ? (n(), i("div", {
              key: 1,
              class: Ne(["test-result", _.value.type])
            }, [
              t("span", cT, d(_.value.type === "success" ? "✓" : "✕"), 1),
              t("span", dT, d(_.value.message), 1)
            ], 2)) : y("", !0),
            t("div", mT, [
              k(we, {
                variant: "ghost",
                size: "sm",
                loading: g.value,
                disabled: !f.value || g.value,
                onClick: x
              }, {
                default: p(() => [...T[6] || (T[6] = [
                  $(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              w.value ? (n(), D(we, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: S
              }, {
                default: p(() => [...T[7] || (T[7] = [
                  $(" Clear ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ])
      ]),
      footer: p(() => [
        k(we, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: C
        }, {
          default: p(() => [...T[10] || (T[10] = [
            $(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), vT = /* @__PURE__ */ Ce(fT, [["__scopeId", "data-v-b21588ad"]]), pT = /* @__PURE__ */ be({
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
    } = ou(), _ = b(!1), h = b(!1), w = b("instances"), x = b(null), C = b(null), S = U(() => [
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
    async function z(G) {
      x.value = G.id;
      try {
        await c(G), o("toast", "Instance stopped", "success");
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to stop instance", "error");
      } finally {
        x.value = null;
      }
    }
    async function T(G) {
      x.value = G.id;
      try {
        await m(G), o("toast", "Instance starting...", "success");
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to start instance", "error");
      } finally {
        x.value = null;
      }
    }
    function I(G) {
      C.value = G;
    }
    async function M() {
      const G = C.value;
      if (G) {
        C.value = null, x.value = G.id;
        try {
          await f(G), o("toast", "Instance terminated", "success");
        } catch (E) {
          o("toast", E instanceof Error ? E.message : "Failed to terminate instance", "error");
        } finally {
          x.value = null;
        }
      }
    }
    async function O() {
      await u(), w.value = "instances";
    }
    return lt(() => {
      u(), v();
    }), Xs(() => {
      g();
    }), (G, E) => (n(), i(H, null, [
      k(Kt, null, {
        header: p(() => [
          k(qt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: E[1] || (E[1] = (L) => _.value = !0)
          }, {
            actions: p(() => [
              k(we, {
                variant: "ghost",
                size: "xs",
                onClick: E[0] || (E[0] = (L) => h.value = !0)
              }, {
                default: p(() => [...E[10] || (E[10] = [
                  $(" Settings ", -1)
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
            "onUpdate:modelValue": E[2] || (E[2] = (L) => w.value = L),
            tabs: S.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: p(() => [
          w.value === "instances" ? (n(), D(R4, {
            key: 0,
            instances: Ze(a),
            "is-loading": Ze(l),
            "action-loading-id": x.value,
            onRefresh: Ze(u),
            onStop: z,
            onStart: T,
            onTerminate: I
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          w.value === "runpod" ? (n(), D(E6, {
            key: 1,
            onToast: E[3] || (E[3] = (L, ie) => o("toast", L, ie)),
            onNavigate: E[4] || (E[4] = (L) => o("navigate", L)),
            onDeployed: O
          })) : y("", !0),
          w.value === "custom" ? (n(), D(tT, {
            key: 2,
            onToast: E[5] || (E[5] = (L, ie) => o("toast", L, ie)),
            onDeployed: O
          })) : y("", !0)
        ]),
        _: 1
      }),
      C.value ? (n(), D(_l, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${C.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: M,
        onCancel: E[6] || (E[6] = (L) => C.value = null)
      }, null, 8, ["message"])) : y("", !0),
      k(hs, {
        show: _.value,
        title: "Deploy to Cloud",
        onClose: E[7] || (E[7] = (L) => _.value = !1)
      }, {
        content: p(() => [...E[11] || (E[11] = [
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
      h.value ? (n(), D(vT, {
        key: 1,
        onClose: E[8] || (E[8] = (L) => h.value = !1),
        onSaved: E[9] || (E[9] = (L) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), gT = /* @__PURE__ */ Ce(pT, [["__scopeId", "data-v-d4e32a10"]]), hT = { class: "header-info" }, yT = { class: "commit-hash" }, wT = {
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
}, RT = {
  key: 2,
  class: "change-group"
}, MT = { class: "change-item" }, DT = /* @__PURE__ */ be({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = ut(), a = b(null), l = b(!0), r = U(() => {
      if (!a.value) return !1;
      const c = a.value.changes.workflows;
      return c.added.length > 0 || c.modified.length > 0 || c.deleted.length > 0;
    }), u = U(() => {
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
    }), (c, m) => (n(), D(Ct, {
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
              (n(!0), i(H, null, ye(a.value.refs, (h) => (n(), i("span", {
                key: h,
                class: "ref-badge"
              }, d(h), 1))), 128))
            ])) : y("", !0)
          ]),
          k(De, {
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
                  $("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(H, null, ye(a.value.changes.workflows.added, (g) => (n(), i("div", {
                key: "add-" + g,
                class: "change-item added"
              }, [
                m[7] || (m[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, d(g), 1)
              ]))), 128)),
              (n(!0), i(H, null, ye(a.value.changes.workflows.modified, (g) => (n(), i("div", {
                key: "mod-" + g,
                class: "change-item modified"
              }, [
                m[8] || (m[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, d(g), 1)
              ]))), 128)),
              (n(!0), i(H, null, ye(a.value.changes.workflows.deleted, (g) => (n(), i("div", {
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
                  $("NODES", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(H, null, ye(a.value.changes.nodes.added, (g) => (n(), i("div", {
                key: "add-" + g.name,
                class: "change-item added"
              }, [
                m[11] || (m[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, d(g.name), 1),
                g.version ? (n(), i("span", PT, "(" + d(g.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (n(!0), i(H, null, ye(a.value.changes.nodes.removed, (g) => (n(), i("div", {
                key: "rem-" + g.name,
                class: "change-item deleted"
              }, [
                m[12] || (m[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, d(g.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", RT, [
              k(Ls, { variant: "section" }, {
                default: p(() => [...m[13] || (m[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", MT, [
                m[14] || (m[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, d(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: p(() => [
        k(De, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (f) => c.$emit("createBranch", e.commit))
        }, {
          default: p(() => [...m[15] || (m[15] = [
            $(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        k(De, {
          variant: "primary",
          onClick: m[2] || (m[2] = (f) => c.$emit("checkout", e.commit))
        }, {
          default: p(() => [...m[16] || (m[16] = [
            $(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), LT = /* @__PURE__ */ Ce(DT, [["__scopeId", "data-v-d256ff6d"]]), NT = { class: "popover-header" }, UT = { class: "popover-body" }, OT = {
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
}, eP = { class: "popover-header" }, tP = { class: "popover-body" }, sP = {
  key: 0,
  class: "changes-summary"
}, oP = {
  key: 0,
  class: "change-item"
}, nP = {
  key: 1,
  class: "change-item"
}, aP = {
  key: 2,
  class: "change-item"
}, lP = {
  key: 3,
  class: "change-item"
}, iP = {
  key: 4,
  class: "change-item"
}, rP = {
  key: 5,
  class: "change-item"
}, uP = {
  key: 1,
  class: "no-changes"
}, cP = {
  key: 2,
  class: "loading"
}, dP = {
  key: 3,
  class: "issues-error"
}, mP = { class: "error-header" }, fP = { class: "error-title" }, vP = { class: "issues-list" }, pP = { class: "workflow-state" }, gP = { class: "message-section" }, hP = { class: "popover-footer" }, yP = /* @__PURE__ */ be({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = ut(), r = b(""), u = b(!1), c = b(!1), m = U(() => {
      if (!o.status) return !1;
      const w = o.status.workflows;
      return w.new.length > 0 || w.modified.length > 0 || w.deleted.length > 0 || o.status.has_changes;
    }), f = U(() => {
      if (!o.status) return !1;
      const w = o.status.workflows, x = o.status.git_changes;
      return w.new.length > 0 || w.modified.length > 0 || w.deleted.length > 0 || x.nodes_added.length > 0 || x.nodes_removed.length > 0;
    }), v = U(() => {
      var w;
      return (w = o.status) != null && w.workflows.analyzed ? o.status.workflows.analyzed.filter((x) => x.has_issues) : [];
    }), g = U(() => v.value.length > 0), _ = U(() => g.value && !c.value);
    async function h() {
      var w, x, C, S;
      if (!(g.value && !c.value) && !(!m.value || !r.value.trim() || u.value)) {
        u.value = !0;
        try {
          const z = await l(r.value.trim(), c.value);
          if (z.status === "success") {
            const T = `Committed: ${((w = z.summary) == null ? void 0 : w.new) || 0} new, ${((x = z.summary) == null ? void 0 : x.modified) || 0} modified, ${((C = z.summary) == null ? void 0 : C.deleted) || 0} deleted`;
            a("committed", { success: !0, message: T });
          } else if (z.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (z.status === "blocked") {
            const T = ((S = z.issues) == null ? void 0 : S.map((I) => `${I.name}: ${I.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${T}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: z.message || "Commit failed" });
        } catch (z) {
          a("committed", { success: !1, message: z instanceof Error ? z.message : "Commit failed" });
        } finally {
          u.value = !1;
        }
      }
    }
    return (w, x) => e.asModal ? (n(), D(Ut, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = (C) => a("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = gt(() => {
          }, ["stop"]))
        }, [
          t("div", NT, [
            x[11] || (x[11] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            t("button", {
              class: "close-btn",
              onClick: x[0] || (x[0] = (C) => a("close"))
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
          t("div", UT, [
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
                (n(!0), i(H, null, ye(v.value, (C) => (n(), i("div", {
                  key: C.name,
                  class: "issue-item"
                }, [
                  t("strong", null, d(C.name), 1),
                  t("span", JT, "(" + d(C.sync_state) + ")", 1),
                  $(": " + d(C.issue_summary), 1)
                ]))), 128))
              ]),
              k(ta, {
                modelValue: c.value,
                "onUpdate:modelValue": x[1] || (x[1] = (C) => c.value = C),
                class: "allow-issues-toggle"
              }, {
                default: p(() => [...x[19] || (x[19] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            t("div", QT, [
              k(yn, {
                modelValue: r.value,
                "onUpdate:modelValue": x[2] || (x[2] = (C) => r.value = C),
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
            k(De, {
              variant: "secondary",
              onClick: x[3] || (x[3] = (C) => a("close"))
            }, {
              default: p(() => [...x[20] || (x[20] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(De, {
              variant: c.value ? "danger" : "primary",
              disabled: !m.value || !r.value.trim() || u.value || _.value,
              loading: u.value,
              onClick: h
            }, {
              default: p(() => [
                $(d(u.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (n(), i("div", ZT, [
      t("div", eP, [
        x[22] || (x[22] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: x[6] || (x[6] = (C) => a("close"))
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
      t("div", tP, [
        e.status && m.value ? (n(), i("div", sP, [
          e.status.workflows.new.length ? (n(), i("div", oP, [
            x[23] || (x[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, d(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (n(), i("div", nP, [
            x[24] || (x[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, d(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", aP, [
            x[25] || (x[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, d(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", lP, [
            x[26] || (x[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, d(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", iP, [
            x[27] || (x[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, d(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          f.value ? y("", !0) : (n(), i("div", rP, [...x[28] || (x[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", uP, " No changes to commit ")) : (n(), i("div", cP, " Loading... ")),
        g.value ? (n(), i("div", dP, [
          t("div", mP, [
            x[29] || (x[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", fP, d(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", vP, [
            (n(!0), i(H, null, ye(v.value, (C) => (n(), i("div", {
              key: C.name,
              class: "issue-item"
            }, [
              t("strong", null, d(C.name), 1),
              t("span", pP, "(" + d(C.sync_state) + ")", 1),
              $(": " + d(C.issue_summary), 1)
            ]))), 128))
          ]),
          k(ta, {
            modelValue: c.value,
            "onUpdate:modelValue": x[7] || (x[7] = (C) => c.value = C),
            class: "allow-issues-toggle"
          }, {
            default: p(() => [...x[30] || (x[30] = [
              $(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        t("div", gP, [
          k(yn, {
            modelValue: r.value,
            "onUpdate:modelValue": x[8] || (x[8] = (C) => r.value = C),
            placeholder: _.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || u.value || _.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: h,
            onSubmit: h
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", hP, [
        k(De, {
          variant: "secondary",
          onClick: x[9] || (x[9] = (C) => a("close"))
        }, {
          default: p(() => [...x[31] || (x[31] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        k(De, {
          variant: c.value ? "danger" : "primary",
          disabled: !m.value || !r.value.trim() || u.value || _.value,
          loading: u.value,
          onClick: h
        }, {
          default: p(() => [
            $(d(u.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), lu = /* @__PURE__ */ Ce(yP, [["__scopeId", "data-v-5f897631"]]), wP = { class: "modal-header" }, _P = { class: "modal-body" }, kP = { class: "switch-message" }, bP = { class: "switch-details" }, $P = { class: "modal-actions" }, CP = /* @__PURE__ */ be({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), D(Ut, { to: "body" }, [
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
          t("div", wP, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", _P, [
            t("p", kP, [
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
            t("p", bP, ' Your current work will be preserved. You can switch back to "' + d(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", $P, [
            k(we, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: p(() => [...o[11] || (o[11] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(we, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
            }, {
              default: p(() => [...o[12] || (o[12] = [
                $(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), xP = /* @__PURE__ */ Ce(CP, [["__scopeId", "data-v-e9c5253e"]]), SP = {
  key: 0,
  class: "modal-overlay"
}, IP = { class: "modal-content" }, EP = { class: "modal-body" }, TP = { class: "progress-info" }, PP = { class: "progress-percentage" }, RP = { class: "progress-state" }, MP = { class: "switch-steps" }, DP = { class: "step-icon" }, LP = { class: "step-label" }, NP = /* @__PURE__ */ be({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const s = e, o = U(() => {
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
    }), a = U(() => s.state === "complete" ? "success" : s.state === "critical_failure" || s.state === "rolled_back" ? "error" : "default"), l = U(() => {
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
    return (r, u) => (n(), D(Ut, { to: "body" }, [
      e.show ? (n(), i("div", SP, [
        t("div", IP, [
          u[1] || (u[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", EP, [
            k(ga, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            t("div", TP, [
              t("div", PP, d(e.progress) + "%", 1),
              t("div", RP, d(o.value), 1)
            ]),
            t("div", MP, [
              (n(!0), i(H, null, ye(l.value, (c) => (n(), i("div", {
                key: c.state,
                class: Ne(["switch-step", c.status])
              }, [
                t("span", DP, d(c.icon), 1),
                t("span", LP, d(c.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), UP = /* @__PURE__ */ Ce(NP, [["__scopeId", "data-v-768a5078"]]), OP = { class: "modal-header" }, AP = { class: "modal-body" }, zP = {
  key: 0,
  class: "node-section"
}, VP = { class: "node-list" }, FP = {
  key: 1,
  class: "node-section"
}, BP = { class: "node-list" }, WP = { class: "modal-actions" }, GP = /* @__PURE__ */ be({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), D(Ut, { to: "body" }, [
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
          t("div", OP, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", AP, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", zP, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", VP, [
                (n(!0), i(H, null, ye(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + d(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", FP, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", BP, [
                (n(!0), i(H, null, ye(e.mismatchDetails.extra_nodes, (a) => (n(), i("div", {
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
          t("div", WP, [
            k(we, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: p(() => [...o[10] || (o[10] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            k(we, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
            }, {
              default: p(() => [...o[11] || (o[11] = [
                $(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), jP = /* @__PURE__ */ Ce(GP, [["__scopeId", "data-v-7cad7518"]]), HP = [
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
], Nn = "v0.0.24", KP = "Akatz", qP = { class: "social-buttons" }, YP = ["title", "aria-label", "onClick"], JP = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, QP = ["d"], XP = ["title", "aria-label", "onClick"], ZP = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, e7 = ["d"], t7 = /* @__PURE__ */ be({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", qP, [
      (n(!0), i(H, null, ye(Ze(HP), (l) => (n(), i(H, {
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
          (n(), i("svg", JP, [
            t("path", {
              d: l.iconPath
            }, null, 8, QP)
          ]))
        ], 8, YP)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          (n(), i("svg", ZP, [
            t("path", {
              d: l.iconPath
            }, null, 8, e7)
          ]))
        ], 8, XP))
      ], 64))), 128))
    ]));
  }
}), iu = /* @__PURE__ */ Ce(t7, [["__scopeId", "data-v-4f846342"]]), s7 = { class: "footer-info" }, o7 = ["title"], n7 = {
  key: 0,
  class: "dev-badge"
}, a7 = { class: "made-by" }, l7 = /* @__PURE__ */ be({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: s } = ut(), o = b(null), a = b(null), l = b(null), r = U(() => o.value === "development"), u = U(() => {
      var m;
      if (!r.value) return Nn;
      const c = [a.value, (m = l.value) == null ? void 0 : m.slice(0, 7)].filter(Boolean).join(" @ ");
      return c ? `${Nn} (${c})` : `${Nn} (development)`;
    });
    return lt(async () => {
      try {
        const c = await s();
        o.value = c.manager_source ?? null, a.value = c.manager_branch ?? null, l.value = c.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (c, m) => (n(), i("div", s7, [
      t("span", {
        class: "version",
        title: u.value
      }, [
        $(d(Ze(Nn)) + " ", 1),
        r.value ? (n(), i("span", n7, "dev")) : y("", !0)
      ], 8, o7),
      t("span", a7, [
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
        $(" by " + d(Ze(KP)), 1)
      ])
    ]));
  }
}), ru = /* @__PURE__ */ Ce(l7, [["__scopeId", "data-v-4fa265b3"]]), i7 = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = b(null);
    async function a() {
      var r;
      await ((r = o.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, u) => (n(), D(Ct, {
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
          k(De, {
            variant: "primary",
            disabled: !((c = o.value) != null && c.hasChanges),
            onClick: a
          }, {
            default: p(() => [...u[2] || (u[2] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          k(De, {
            variant: "secondary",
            onClick: u[0] || (u[0] = (m) => r.$emit("close"))
          }, {
            default: p(() => [...u[3] || (u[3] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), r7 = /* @__PURE__ */ Ce(i7, [["__scopeId", "data-v-fac00ae7"]]), u7 = { class: "header-actions" }, c7 = {
  key: 0,
  class: "wizard-step"
}, d7 = { class: "form-field" }, m7 = ["placeholder"], f7 = {
  key: 0,
  class: "form-error"
}, v7 = { class: "form-field form-field--checkbox" }, p7 = { class: "form-checkbox" }, g7 = {
  key: 0,
  class: "form-field"
}, h7 = ["placeholder"], y7 = {
  key: 0,
  class: "form-info"
}, w7 = {
  key: 1,
  class: "form-suggestion"
}, _7 = {
  key: 2,
  class: "form-error"
}, k7 = {
  key: 3,
  class: "form-info"
}, b7 = {
  key: 1,
  class: "wizard-step"
}, $7 = {
  key: 0,
  class: "progress-check-loading"
}, C7 = {
  key: 0,
  class: "cli-warning"
}, x7 = { class: "cli-warning-header" }, S7 = {
  key: 1,
  class: "env-landing"
}, I7 = { class: "env-list" }, E7 = ["value"], T7 = { class: "env-name" }, P7 = {
  key: 2,
  class: "env-create"
}, R7 = { class: "form-field" }, M7 = { class: "form-field" }, D7 = ["value"], L7 = { class: "form-field" }, N7 = ["disabled"], U7 = ["value"], O7 = { class: "form-field" }, A7 = ["value"], z7 = { class: "form-field form-field--checkbox" }, V7 = { class: "form-checkbox" }, F7 = {
  key: 0,
  class: "form-error"
}, B7 = {
  key: 1,
  class: "env-creating"
}, W7 = { class: "creating-intro" }, G7 = {
  key: 3,
  class: "env-import"
}, j7 = { class: "wizard-footer" }, H7 = { class: "wizard-footer-actions" }, Co = 10, K7 = 600 * 1e3, gi = 1800 * 1e3, q7 = /* @__PURE__ */ be({
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
    } = ut(), g = b(o.initialStep || 1), _ = b(null), h = b("landing"), w = b(!1), x = b(!1), C = b(!1), S = b(!1), z = b(null), T = b(o.initialStep === 2), I = b(o.defaultPath), M = b(!!o.detectedModelsDir), O = b(o.detectedModelsDir || ""), G = b(null), E = b(null), L = b(null), ie = b(null), le = b("my-new-env"), Y = b(Xr), K = b("latest"), V = b(Zr), J = b(!0), ee = b(null), Oe = b(null), ae = b([{ tag_name: "latest", name: "Latest", published_at: "" }]), pe = b(!1), ue = b(!1), ze = b(!1), $e = b({ progress: 0, message: "" }), ke = b({ progress: 0, message: "" }), ce = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], W = b(0), de = b(null), B = b(0), N = b(null), re = U(() => {
      var Te, xe;
      const oe = (Te = I.value) == null ? void 0 : Te.trim(), j = !G.value, Ae = !M.value || !E.value && ((xe = O.value) == null ? void 0 : xe.trim());
      return oe && j && Ae;
    }), Ve = U(() => {
      var oe;
      return (oe = le.value) == null ? void 0 : oe.trim();
    }), Fe = U(() => !!(g.value === 2 || Oe.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), F = U(() => Oe.value || o.workspacePath || null);
    async function X() {
      var oe;
      if (G.value = null, !!((oe = I.value) != null && oe.trim()))
        try {
          const j = await u({ path: I.value, type: "workspace" });
          j.valid || (G.value = j.error || "Invalid path");
        } catch (j) {
          G.value = j instanceof Error ? j.message : "Validation failed";
        }
    }
    async function me() {
      var oe;
      if (E.value = null, L.value = null, ie.value = null, !!((oe = O.value) != null && oe.trim()))
        try {
          const j = await u({ path: O.value, type: "models" });
          if (j.valid)
            ie.value = j.model_count ?? null;
          else if (E.value = j.error || "Invalid path", j.suggestion) {
            L.value = j.suggestion, O.value = j.suggestion, E.value = null;
            const Ae = await u({ path: j.suggestion, type: "models" });
            Ae.valid && (ie.value = Ae.model_count ?? null);
          }
        } catch (j) {
          E.value = j instanceof Error ? j.message : "Validation failed";
        }
    }
    async function Pe() {
      var oe, j, Ae, Te, xe;
      if (G.value = null, E.value = null, await X(), (oe = G.value) != null && oe.includes("already exists")) {
        G.value = null, Oe.value = ((j = I.value) == null ? void 0 : j.trim()) || o.defaultPath, g.value = 2, Ee();
        return;
      }
      if (!G.value && !(M.value && ((Ae = O.value) != null && Ae.trim()) && (await me(), E.value))) {
        ue.value = !0;
        try {
          await l({
            workspace_path: ((Te = I.value) == null ? void 0 : Te.trim()) || o.defaultPath,
            models_directory: M.value && ((xe = O.value) == null ? void 0 : xe.trim()) || null
          }), W.value = 0, de.value = Date.now();
          const Le = setInterval(async () => {
            var Me;
            if (de.value && Date.now() - de.value > K7) {
              clearInterval(Le), ue.value = !1, G.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Q = await r();
              if (W.value = 0, Q.state === "idle" && ue.value) {
                clearInterval(Le), ue.value = !1, G.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              $e.value = { progress: Q.progress, message: Q.message }, Q.state === "complete" ? (clearInterval(Le), ue.value = !1, Oe.value = ((Me = I.value) == null ? void 0 : Me.trim()) || o.defaultPath, g.value = 2, Ee()) : Q.state === "error" && (clearInterval(Le), ue.value = !1, G.value = Q.error || "Workspace creation failed");
            } catch (Q) {
              W.value++, console.warn(`Polling failure ${W.value}/${Co}:`, Q), W.value >= Co && (clearInterval(Le), ue.value = !1, G.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Le) {
          ue.value = !1, G.value = Le instanceof Error ? Le.message : "Failed to create workspace";
        }
      }
    }
    async function Ie() {
      ze.value = !0, ee.value = null;
      try {
        const oe = {
          name: le.value.trim() || "my-new-env",
          python_version: Y.value,
          comfyui_version: K.value,
          torch_backend: V.value,
          switch_after: J.value,
          workspace_path: Oe.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await c(oe)).status === "started") {
          B.value = 0, N.value = Date.now();
          const Ae = setInterval(async () => {
            if (N.value && Date.now() - N.value > gi) {
              clearInterval(Ae), ze.value = !1, ee.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Te = await m();
              if (B.value = 0, Te.state === "idle" && ze.value) {
                clearInterval(Ae), ze.value = !1, ee.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ke.value = {
                progress: Te.progress ?? 0,
                message: Te.message,
                phase: Te.phase
              }, Te.state === "complete") {
                clearInterval(Ae), ze.value = !1;
                const xe = Te.environment_name || oe.name;
                J.value ? a("complete", xe, Oe.value) : (h.value = "landing", a("environment-created-no-switch", xe));
              } else Te.state === "error" && (clearInterval(Ae), ze.value = !1, ee.value = Te.error || "Environment creation failed");
            } catch (Te) {
              B.value++, console.warn(`Polling failure ${B.value}/${Co}:`, Te), B.value >= Co && (clearInterval(Ae), ze.value = !1, ee.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (oe) {
        ze.value = !1, ee.value = oe instanceof Error ? oe.message : "Unknown error";
      }
    }
    async function Ee() {
      pe.value = !0;
      try {
        ae.value = await v();
      } catch (oe) {
        console.error("Failed to load ComfyUI releases:", oe);
      } finally {
        pe.value = !1;
      }
    }
    function q() {
      _.value && a("switch-environment", _.value, Oe.value);
    }
    function A() {
      h.value === "create" || h.value === "import" ? h.value = "landing" : g.value === 2 && o.setupState === "no_workspace" && (g.value = 1);
    }
    function Z(oe, j) {
      x.value = !1, j ? a("complete", oe, Oe.value) : (a("environment-created-no-switch", oe), h.value = "landing");
    }
    function ne() {
    }
    lt(async () => {
      if (o.detectedModelsDir && (O.value = o.detectedModelsDir), o.workspacePath && (Oe.value = o.workspacePath), g.value === 2) {
        Ee();
        const oe = setTimeout(() => {
          T.value = !1;
        }, 3e3);
        await _e(), clearTimeout(oe), T.value = !1;
      }
    });
    async function _e() {
      try {
        const oe = await m();
        if (console.log("[ComfyGit] Create progress check:", oe.state, oe), oe.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", oe.environment_name), h.value = "create", ze.value = !0, le.value = oe.environment_name || "my-new-env", ke.value = {
            progress: oe.progress ?? 0,
            message: oe.message,
            phase: oe.phase
          }, Se();
          return;
        }
      } catch (oe) {
        console.log("[ComfyGit] Create progress check failed:", oe);
      }
      try {
        const oe = await f();
        console.log("[ComfyGit] Import progress check:", oe.state, oe), oe.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", oe.environment_name), z.value = {
          message: oe.message || "Importing...",
          phase: oe.phase || "",
          progress: oe.progress ?? 0,
          environmentName: oe.environment_name || ""
        }, S.value = !0, h.value = "import", x.value = !0);
      } catch (oe) {
        console.log("[ComfyGit] Import progress check failed:", oe);
      }
    }
    async function Se() {
      B.value = 0, N.value = Date.now();
      let oe = null;
      const j = async () => {
        if (N.value && Date.now() - N.value > gi)
          return oe && clearInterval(oe), ze.value = !1, ee.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Te = await m();
          if (B.value = 0, Te.state === "idle" && ze.value)
            return oe && clearInterval(oe), ze.value = !1, ee.value = "Environment creation was interrupted. Please try again.", !1;
          if (ke.value = {
            progress: Te.progress ?? 0,
            message: Te.message,
            phase: Te.phase
          }, Te.state === "complete") {
            oe && clearInterval(oe), ze.value = !1;
            const xe = Te.environment_name || le.value;
            return a("complete", xe, Oe.value), !1;
          } else if (Te.state === "error")
            return oe && clearInterval(oe), ze.value = !1, ee.value = Te.error || "Environment creation failed", !1;
          return !0;
        } catch (Te) {
          return B.value++, console.warn(`Polling failure ${B.value}/${Co}:`, Te), B.value >= Co ? (oe && clearInterval(oe), ze.value = !1, ee.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await j() && (oe = setInterval(async () => {
        !await j() && oe && clearInterval(oe);
      }, 2e3));
    }
    return (oe, j) => (n(), i(H, null, [
      k(Ct, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: j[15] || (j[15] = (Ae) => oe.$emit("close"))
      }, {
        header: p(() => [
          j[20] || (j[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", u7, [
            k(iu),
            j[19] || (j[19] = t("span", { class: "header-divider" }, null, -1)),
            Fe.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: j[0] || (j[0] = (Ae) => w.value = !0)
            }, [...j[17] || (j[17] = [
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
              onClick: j[1] || (j[1] = (Ae) => oe.$emit("close")),
              title: "Close"
            }, [...j[18] || (j[18] = [
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
          var Ae;
          return [
            g.value === 1 ? (n(), i("div", c7, [
              j[24] || (j[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", d7, [
                j[21] || (j[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                at(t("input", {
                  "onUpdate:modelValue": j[2] || (j[2] = (Te) => I.value = Te),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, m7), [
                  [es, I.value]
                ]),
                G.value ? (n(), i("p", f7, d(G.value), 1)) : y("", !0)
              ]),
              t("div", v7, [
                t("label", p7, [
                  at(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": j[3] || (j[3] = (Te) => M.value = Te)
                  }, null, 512), [
                    [hn, M.value]
                  ]),
                  j[22] || (j[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              M.value ? (n(), i("div", g7, [
                j[23] || (j[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                at(t("input", {
                  "onUpdate:modelValue": j[4] || (j[4] = (Te) => O.value = Te),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, h7), [
                  [es, O.value]
                ]),
                e.detectedModelsDir && !O.value ? (n(), i("p", y7, " Detected: " + d(e.detectedModelsDir), 1)) : y("", !0),
                L.value ? (n(), i("p", w7, " Did you mean: " + d(L.value), 1)) : y("", !0),
                E.value ? (n(), i("p", _7, d(E.value), 1)) : y("", !0),
                ie.value !== null && !E.value ? (n(), i("p", k7, " Found " + d(ie.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              ue.value ? (n(), D(ea, {
                key: 1,
                progress: $e.value.progress,
                message: $e.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            g.value === 2 ? (n(), i("div", b7, [
              T.value ? (n(), i("div", $7, [...j[25] || (j[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(H, { key: 1 }, [
                !o.cliInstalled && !C.value ? (n(), i("div", C7, [
                  t("div", x7, [
                    j[27] || (j[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    j[28] || (j[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: j[5] || (j[5] = (Te) => C.value = !0),
                      title: "Dismiss"
                    }, [...j[26] || (j[26] = [
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
                  j[29] || (j[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  j[30] || (j[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                h.value === "landing" ? (n(), i("div", S7, [
                  j[34] || (j[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: j[6] || (j[6] = (Te) => h.value = "create")
                  }, [...j[31] || (j[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: j[7] || (j[7] = (Te) => {
                      S.value = !1, h.value = "import";
                    })
                  }, [...j[32] || (j[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Ae = o.existingEnvironments) != null && Ae.length ? (n(), i(H, { key: 0 }, [
                    j[33] || (j[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", I7, [
                      (n(!0), i(H, null, ye(o.existingEnvironments, (Te) => (n(), i("label", {
                        key: Te,
                        class: Ne(["env-option", { selected: _.value === Te }])
                      }, [
                        at(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: Te,
                          "onUpdate:modelValue": j[8] || (j[8] = (xe) => _.value = xe)
                        }, null, 8, E7), [
                          [ds, _.value]
                        ]),
                        t("span", T7, d(Te), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : h.value === "create" ? (n(), i("div", P7, [
                  ze.value ? (n(), i("div", B7, [
                    t("p", W7, [
                      j[41] || (j[41] = $(" Creating environment ", -1)),
                      t("strong", null, d(le.value), 1),
                      j[42] || (j[42] = $("... ", -1))
                    ]),
                    k(ea, {
                      progress: ke.value.progress,
                      message: ke.value.message,
                      "current-phase": ke.value.phase,
                      "show-steps": !0,
                      steps: ce
                    }, null, 8, ["progress", "message", "current-phase"]),
                    j[43] || (j[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(H, { key: 0 }, [
                    j[40] || (j[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", R7, [
                      j[35] || (j[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      at(t("input", {
                        "onUpdate:modelValue": j[9] || (j[9] = (Te) => le.value = Te),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [es, le.value]
                      ])
                    ]),
                    t("div", M7, [
                      j[36] || (j[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      at(t("select", {
                        "onUpdate:modelValue": j[10] || (j[10] = (Te) => Y.value = Te),
                        class: "form-select"
                      }, [
                        (n(!0), i(H, null, ye(Ze(Qr), (Te) => (n(), i("option", {
                          key: Te,
                          value: Te
                        }, d(Te), 9, D7))), 128))
                      ], 512), [
                        [Ss, Y.value]
                      ])
                    ]),
                    t("div", L7, [
                      j[37] || (j[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      at(t("select", {
                        "onUpdate:modelValue": j[11] || (j[11] = (Te) => K.value = Te),
                        class: "form-select",
                        disabled: pe.value
                      }, [
                        (n(!0), i(H, null, ye(ae.value, (Te) => (n(), i("option", {
                          key: Te.tag_name,
                          value: Te.tag_name
                        }, d(Te.name), 9, U7))), 128))
                      ], 8, N7), [
                        [Ss, K.value]
                      ])
                    ]),
                    t("div", O7, [
                      j[38] || (j[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      at(t("select", {
                        "onUpdate:modelValue": j[12] || (j[12] = (Te) => V.value = Te),
                        class: "form-select"
                      }, [
                        (n(!0), i(H, null, ye(Ze(kl), (Te) => (n(), i("option", {
                          key: Te,
                          value: Te
                        }, d(Te) + d(Te === "auto" ? " (detect GPU)" : ""), 9, A7))), 128))
                      ], 512), [
                        [Ss, V.value]
                      ])
                    ]),
                    t("div", z7, [
                      t("label", V7, [
                        at(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": j[13] || (j[13] = (Te) => J.value = Te)
                        }, null, 512), [
                          [hn, J.value]
                        ]),
                        j[39] || (j[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    ee.value ? (n(), i("div", F7, d(ee.value), 1)) : y("", !0)
                  ], 64))
                ])) : h.value === "import" ? (n(), i("div", G7, [
                  k(su, {
                    "workspace-path": Oe.value,
                    "resume-import": S.value,
                    "initial-progress": z.value ?? void 0,
                    onImportComplete: Z,
                    onImportStarted: j[14] || (j[14] = (Te) => x.value = !0),
                    onSourceCleared: ne
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: p(() => [
          t("div", j7, [
            k(ru),
            t("div", H7, [
              g.value === 1 ? (n(), D(De, {
                key: 0,
                variant: "primary",
                disabled: !re.value || ue.value,
                onClick: Pe
              }, {
                default: p(() => [
                  $(d(ue.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : g.value === 2 ? (n(), i(H, { key: 1 }, [
                !ze.value && !x.value && (h.value !== "landing" || o.setupState === "no_workspace" && !Oe.value) ? (n(), D(De, {
                  key: 0,
                  variant: "secondary",
                  onClick: A
                }, {
                  default: p(() => [...j[44] || (j[44] = [
                    $(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                h.value === "create" ? (n(), D(De, {
                  key: 1,
                  variant: "primary",
                  disabled: !Ve.value || ze.value,
                  onClick: Ie
                }, {
                  default: p(() => [
                    $(d(ze.value ? "Creating..." : J.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                h.value === "landing" && _.value ? (n(), D(De, {
                  key: 2,
                  variant: "primary",
                  onClick: q
                }, {
                  default: p(() => [
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
      w.value ? (n(), D(r7, {
        key: 0,
        "workspace-path": F.value,
        onClose: j[16] || (j[16] = (Ae) => w.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), Y7 = /* @__PURE__ */ Ce(q7, [["__scopeId", "data-v-9a9aadc0"]]), J7 = { class: "update-banner" }, Q7 = { class: "update-banner__left" }, X7 = { class: "update-banner__title" }, Z7 = {
  key: 0,
  class: "update-banner__summary"
}, eR = { class: "update-banner__actions" }, tR = ["disabled"], sR = ["disabled"], oR = ["disabled"], nR = /* @__PURE__ */ be({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", J7, [
      t("div", Q7, [
        t("div", X7, " ComfyGit Manager v" + d(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (n(), i("div", Z7, d(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      t("div", eR, [
        t("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, d(e.updating ? "Updating…" : "Update"), 9, tR),
        e.info.release_url ? (n(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, sR)) : y("", !0),
        t("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, oR)
      ])
    ]));
  }
}), aR = /* @__PURE__ */ Ce(nR, [["__scopeId", "data-v-49562c5c"]]), uu = "ComfyGit.UpdateNotice.DismissedVersion";
function lR() {
  try {
    return localStorage.getItem(uu);
  } catch {
    return null;
  }
}
function iR(e) {
  try {
    localStorage.setItem(uu, e);
  } catch {
  }
}
function rR(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : lR() !== e.latest_version;
}
const uR = { class: "comfygit-panel" }, cR = { class: "panel-header" }, dR = { class: "header-left" }, mR = {
  key: 0,
  class: "header-info"
}, fR = { class: "header-actions" }, vR = { class: "env-switcher" }, pR = {
  key: 0,
  class: "header-info"
}, gR = { class: "branch-name" }, hR = { class: "panel-main" }, yR = { class: "sidebar" }, wR = { class: "sidebar-content" }, _R = { class: "sidebar-section" }, kR = { class: "sidebar-section" }, bR = { class: "sidebar-section" }, $R = {
  key: 0,
  class: "sidebar-badge"
}, CR = { class: "sidebar-footer" }, xR = { class: "content-area" }, SR = {
  key: 0,
  class: "error-message"
}, IR = {
  key: 1,
  class: "loading"
}, ER = { class: "dialog-content env-selector-dialog" }, TR = { class: "dialog-header" }, PR = { class: "dialog-body" }, RR = { class: "env-list" }, MR = { class: "env-info" }, DR = { class: "env-name-row" }, LR = { class: "env-indicator" }, NR = { class: "env-name" }, UR = {
  key: 0,
  class: "env-branch"
}, OR = {
  key: 1,
  class: "current-label"
}, AR = { class: "env-stats" }, zR = ["onClick"], VR = { class: "toast-container" }, FR = { class: "toast-message" }, hi = "ComfyGit.LastView", yi = "ComfyGit.LastSection", BR = /* @__PURE__ */ be({
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
      repairWorkflowModels: C,
      getSetupStatus: S,
      getUpdateCheck: z,
      updateManager: T
    } = ut(), I = gp(), { liveInstanceCount: M } = ou({ autoStart: !0 }), O = b(null), G = b([]), E = b([]), L = b([]), ie = U(() => L.value.find((ve) => ve.is_current)), le = b(null), Y = b(!1), K = b(1), V = U(() => {
      var ve;
      return ((ve = le.value) == null ? void 0 : ve.state) || "managed";
    }), J = b(!1), ee = b(null), Oe = b(null), ae = b(!1), pe = b(null), ue = b(!1), ze = b(!1), $e = U(() => !ue.value && rR(pe.value)), ke = b(null), ce = b(null), W = b(null), de = b(!1), B = b(!1), N = b(""), re = b(null), Ve = b({ state: "idle", progress: 0, message: "" });
    let Fe = null, F = null;
    const X = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, me = o.initialView ? X[o.initialView] : null, Pe = [
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
    ], Ie = ["this-env", "all-envs", "sharing"];
    function Ee() {
      try {
        const ve = sessionStorage.getItem(hi), se = sessionStorage.getItem(yi);
        if (ve && se && Pe.includes(ve) && Ie.includes(se))
          return { view: ve, section: se };
      } catch {
      }
      return null;
    }
    const q = Ee(), A = b((me == null ? void 0 : me.view) ?? (q == null ? void 0 : q.view) ?? "status"), Z = b((me == null ? void 0 : me.section) ?? (q == null ? void 0 : q.section) ?? "this-env");
    function ne(ve, se) {
      A.value = ve, Z.value = se;
      try {
        sessionStorage.setItem(hi, ve), sessionStorage.setItem(yi, se);
      } catch {
      }
    }
    function _e(ve) {
      const He = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[ve];
      He && ne(He.view, He.section);
    }
    function Se() {
      ne("branches", "this-env");
    }
    function oe() {
      a("close"), setTimeout(() => {
        var se;
        const ve = document.querySelectorAll("button.comfyui-button");
        for (const He of ve)
          if (((se = He.textContent) == null ? void 0 : se.trim()) === "Manager") {
            He.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const j = b(null), Ae = b(!1), Te = b(!1), xe = b([]);
    let Le = 0;
    function Me(ve, se = "info", He = 3e3) {
      const Qe = ++Le;
      return xe.value.push({ id: Qe, message: ve, type: se }), He > 0 && setTimeout(() => {
        xe.value = xe.value.filter((yt) => yt.id !== Qe);
      }, He), Qe;
    }
    function Q(ve) {
      xe.value = xe.value.filter((se) => se.id !== ve);
    }
    function ge(ve, se) {
      Me(ve, se);
    }
    async function he() {
      pe.value = null, ue.value = !1;
      try {
        pe.value = await z();
      } catch {
      }
    }
    function Ke() {
      var se;
      const ve = (se = pe.value) == null ? void 0 : se.release_url;
      if (ve)
        try {
          window.open(ve, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function Be() {
      var se;
      const ve = (se = pe.value) == null ? void 0 : se.latest_version;
      ve && iR(ve), ue.value = !0;
    }
    async function We() {
      var se, He;
      if (ze.value) return;
      ze.value = !0;
      const ve = Me("Updating comfygit-manager...", "info", 0);
      try {
        const Qe = await T();
        if (Q(ve), Qe.status !== "success") {
          if (Me(Qe.message || "Update failed", "error"), Qe.manual_instructions) {
            const yt = Qe.manual_instructions.split(`
`).map((Tt) => Tt.trim()).filter(Boolean);
            j.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: yt,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                j.value = null;
              }
            };
          }
          return;
        }
        if (Me(Qe.message || "Update complete", "success"), Be(), Qe.restart_required) {
          fe();
          try {
            await ((He = (se = window.app) == null ? void 0 : se.api) == null ? void 0 : He.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Qe) {
        Q(ve);
        const yt = Qe instanceof Error ? Qe.message : "Update failed";
        Me(yt, "error");
      } finally {
        ze.value = !1;
      }
    }
    const Xe = U(() => {
      if (!O.value) return "neutral";
      const ve = O.value.workflows, se = ve.new.length > 0 || ve.modified.length > 0 || ve.deleted.length > 0 || O.value.has_changes;
      return O.value.comparison.is_synced ? se ? "warning" : "success" : "error";
    });
    U(() => O.value ? Xe.value === "success" ? "All synced" : Xe.value === "warning" ? "Uncommitted changes" : Xe.value === "error" ? "Not synced" : "" : "");
    async function qe() {
      J.value = !0, ee.value = null;
      try {
        const [ve, se, He, Qe] = await Promise.all([
          l(!0),
          r(),
          u(),
          g()
        ]);
        O.value = ve, G.value = se.commits, E.value = He.branches, L.value = Qe, a("statusUpdate", ve), ke.value && await ke.value.loadWorkflows(!0);
      } catch (ve) {
        ee.value = ve instanceof Error ? ve.message : "Failed to load status", O.value = null, G.value = [], E.value = [];
      } finally {
        J.value = !1;
      }
    }
    function dt(ve) {
      Oe.value = ve;
    }
    async function ct(ve) {
      var He;
      Oe.value = null;
      const se = O.value && (O.value.workflows.new.length > 0 || O.value.workflows.modified.length > 0 || O.value.workflows.deleted.length > 0 || O.value.has_changes);
      j.value = {
        title: se ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: se ? "You have uncommitted changes that will be lost." : `Checkout commit ${ve.short_hash || ((He = ve.hash) == null ? void 0 : He.slice(0, 7))}?`,
        details: se ? xn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: se ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: se,
        onConfirm: async () => {
          var Tt;
          j.value = null, fe();
          const Qe = Me(`Checking out ${ve.short_hash || ((Tt = ve.hash) == null ? void 0 : Tt.slice(0, 7))}...`, "info", 0), yt = await c(ve.hash, se);
          Q(Qe), yt.status === "success" ? Me("Restarting ComfyUI...", "success") : Me(yt.message || "Checkout failed", "error");
        }
      };
    }
    async function vt(ve) {
      const se = O.value && (O.value.workflows.new.length > 0 || O.value.workflows.modified.length > 0 || O.value.workflows.deleted.length > 0 || O.value.has_changes);
      j.value = {
        title: se ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: se ? "You have uncommitted changes." : `Switch to branch "${ve}"?`,
        details: se ? xn() : void 0,
        warning: se ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: se ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          j.value = null, fe();
          const He = Me(`Switching to ${ve}...`, "info", 0), Qe = await f(ve, se);
          Q(He), Qe.status === "success" ? Me("Restarting ComfyUI...", "success") : Me(Qe.message || "Branch switch failed", "error");
        }
      };
    }
    async function Pt(ve) {
      const se = Me(`Creating branch ${ve}...`, "info", 0), He = await m(ve);
      Q(se), He.status === "success" ? (Me(`Branch "${ve}" created`, "success"), await qe()) : Me(He.message || "Failed to create branch", "error");
    }
    async function ts(ve, se = !1) {
      const He = async (Qe) => {
        var Tt;
        const yt = Me(`Deleting branch ${ve}...`, "info", 0);
        try {
          const rs = await v(ve, Qe);
          Q(yt), rs.status === "success" ? (Me(`Branch "${ve}" deleted`, "success"), await qe()) : (Tt = rs.message) != null && Tt.includes("not fully merged") ? j.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ve}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              j.value = null, await He(!0);
            }
          } : Me(rs.message || "Failed to delete branch", "error");
        } catch (rs) {
          Q(yt);
          const eo = rs instanceof Error ? rs.message : "Failed to delete branch";
          eo.includes("not fully merged") ? j.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ve}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              j.value = null, await He(!0);
            }
          } : Me(eo, "error");
        }
      };
      j.value = {
        title: "Delete Branch",
        message: `Delete branch "${ve}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          j.value = null, await He(se);
        }
      };
    }
    async function Ot(ve) {
      Oe.value = null;
      const se = prompt("Enter branch name:");
      if (se) {
        const He = Me(`Creating branch ${se}...`, "info", 0), Qe = await m(se, ve.hash);
        Q(He), Qe.status === "success" ? (Me(`Branch "${se}" created from ${ve.short_hash}`, "success"), await qe()) : Me(Qe.message || "Failed to create branch", "error");
      }
    }
    function fe() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function P() {
      j.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ve;
          j.value = null, fe(), Me("Restarting environment...", "info");
          try {
            (ve = window.app) != null && ve.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function R() {
      j.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ve;
          j.value = null, Me("Stopping environment...", "info");
          try {
            (ve = window.app) != null && ve.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Ue(ve, se) {
      ae.value = !1, N.value = ve, re.value = se || null, de.value = !0;
    }
    async function tt() {
      de.value = !1, B.value = !0, fe(), Ve.value = {
        progress: 10,
        state: pt(10),
        message: st(10)
      };
      try {
        await _(N.value, re.value || void 0), xt(), Ge();
      } catch (ve) {
        Et(), B.value = !1, Me(`Failed to initiate switch: ${ve instanceof Error ? ve.message : "Unknown error"}`, "error"), Ve.value = { state: "idle", progress: 0, message: "" }, re.value = null;
      }
    }
    function pt(ve) {
      return ve >= 100 ? "complete" : ve >= 80 ? "validating" : ve >= 60 ? "starting" : ve >= 30 ? "syncing" : "preparing";
    }
    function st(ve) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[pt(ve)] || "";
    }
    function xt() {
      if (F) return;
      let ve = 10;
      const se = 60, He = 5e3, Qe = 100, yt = (se - ve) / (He / Qe);
      F = window.setInterval(() => {
        if (ve += yt, ve >= se && (ve = se, Et()), Ve.value.progress < se) {
          const Tt = Math.floor(ve);
          Ve.value = {
            progress: Tt,
            state: pt(Tt),
            message: st(Tt)
          };
        }
      }, Qe);
    }
    function Et() {
      F && (clearInterval(F), F = null);
    }
    function Ge() {
      Fe || (Fe = window.setInterval(async () => {
        try {
          let ve = await I.getStatus();
          if ((!ve || ve.state === "idle") && (ve = await h()), !ve)
            return;
          const se = ve.progress || 0;
          se >= 60 && Et();
          const He = Math.max(se, Ve.value.progress), Qe = ve.state && ve.state !== "idle" && ve.state !== "unknown", yt = Qe ? ve.state : pt(He), Tt = Qe && ve.message || st(He);
          Ve.value = {
            state: yt,
            progress: He,
            message: Tt
          }, ve.state === "complete" ? (Et(), is(), B.value = !1, Me(`✓ Switched to ${N.value}`, "success"), await qe(), N.value = "") : ve.state === "rolled_back" ? (Et(), is(), B.value = !1, Me("Switch failed, restored previous environment", "warning"), N.value = "") : ve.state === "critical_failure" && (Et(), is(), B.value = !1, Me(`Critical error during switch: ${ve.message}`, "error"), N.value = "");
        } catch (ve) {
          console.error("Failed to poll switch progress:", ve);
        }
      }, 1e3));
    }
    function is() {
      Et(), Fe && (clearInterval(Fe), Fe = null);
    }
    function ys() {
      var ve;
      de.value = !1, N.value = "", (ve = le.value) != null && ve.state && le.value.state !== "managed" && (K.value = le.value.state === "no_workspace" ? 1 : 2, Y.value = !0);
    }
    async function vo(ve) {
      Ae.value = !1, await qe(), Me(ve.message, ve.success ? "success" : "error");
    }
    async function po() {
      Te.value = !1;
      const ve = Me("Syncing environment...", "info", 0);
      try {
        const se = await x("skip", !0);
        if (Q(ve), se.status === "success") {
          const He = [];
          se.nodes_installed.length && He.push(`${se.nodes_installed.length} installed`), se.nodes_removed.length && He.push(`${se.nodes_removed.length} removed`);
          const Qe = He.length ? `: ${He.join(", ")}` : "";
          Me(`✓ Environment synced${Qe}`, "success"), await qe();
        } else {
          const He = se.errors.length ? se.errors.join("; ") : se.message;
          Me(`Sync failed: ${He}`, "error");
        }
      } catch (se) {
        Q(ve), Me(`Sync error: ${se instanceof Error ? se.message : "Unknown error"}`, "error");
      }
    }
    async function go(ve) {
      var se;
      try {
        const He = await C(ve);
        He.failed.length === 0 ? Me(`✓ Repaired ${He.success} workflow${He.success === 1 ? "" : "s"}`, "success") : Me(`Repaired ${He.success}, failed: ${He.failed.length}`, "warning"), await qe();
      } catch (He) {
        Me(`Repair failed: ${He instanceof Error ? He.message : "Unknown error"}`, "error");
      } finally {
        (se = W.value) == null || se.resetRepairingState();
      }
    }
    async function Zs() {
      var se, He;
      const ve = Me("Repairing environment...", "info", 0);
      try {
        const Qe = await x("skip", !0);
        if (Q(ve), Qe.status === "success") {
          const yt = [];
          Qe.nodes_installed.length && yt.push(`${Qe.nodes_installed.length} installed`), Qe.nodes_removed.length && yt.push(`${Qe.nodes_removed.length} removed`);
          const Tt = yt.length ? `: ${yt.join(", ")}` : "";
          Me(`✓ Environment repaired${Tt}`, "success"), (se = W.value) == null || se.closeDetailModal(), await qe();
        } else {
          const yt = Qe.errors.length ? Qe.errors.join(", ") : Qe.message || "Unknown error";
          Me(`Repair failed: ${yt}`, "error");
        }
      } catch (Qe) {
        Q(ve), Me(`Repair error: ${Qe instanceof Error ? Qe.message : "Unknown error"}`, "error");
      } finally {
        (He = W.value) == null || He.resetRepairingEnvironmentState();
      }
    }
    async function ho(ve, se) {
      Me(`Environment '${ve}' created`, "success"), await qe(), ce.value && await ce.value.loadEnvironments(), se && await Ue(ve);
    }
    async function yo(ve) {
      var se;
      if (((se = ie.value) == null ? void 0 : se.name) === ve) {
        Me("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      j.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ve}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          j.value = null;
          try {
            const He = await w(ve);
            He.status === "success" ? (Me(`Environment "${ve}" deleted`, "success"), await qe(), ce.value && await ce.value.loadEnvironments()) : Me(He.message || "Failed to delete environment", "error");
          } catch (He) {
            Me(`Error deleting environment: ${He instanceof Error ? He.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function wo(ve, se) {
      Y.value = !1;
      try {
        le.value = await S();
      } catch {
      }
      await Ue(ve, se);
    }
    function _o() {
      Y.value = !1, a("close");
    }
    async function ko(ve, se) {
      await Ue(ve, se);
    }
    async function ha(ve) {
      await qe(), await Ue(ve);
    }
    async function ya(ve) {
      le.value = await S(), console.log(`Environment '${ve}' created. Available for switching.`);
    }
    function wa() {
      ne("environments", "all-envs"), setTimeout(() => {
        var ve;
        (ve = ce.value) == null || ve.openCreateModal();
      }, 100);
    }
    function xn() {
      if (!O.value) return [];
      const ve = [], se = O.value.workflows;
      return se.new.length && ve.push(`${se.new.length} new workflow(s)`), se.modified.length && ve.push(`${se.modified.length} modified workflow(s)`), se.deleted.length && ve.push(`${se.deleted.length} deleted workflow(s)`), ve;
    }
    return lt(async () => {
      try {
        if (le.value = await S(), le.value.state === "no_workspace") {
          Y.value = !0, K.value = 1;
          return;
        }
        if (le.value.state === "empty_workspace") {
          Y.value = !0, K.value = 2;
          return;
        }
        if (le.value.state === "unmanaged") {
          Y.value = !0, K.value = 2;
          return;
        }
      } catch (ve) {
        console.warn("Setup status check failed, proceeding normally:", ve);
      }
      await Promise.all([
        qe(),
        he()
      ]);
    }), (ve, se) => {
      var He, Qe, yt, Tt, rs, eo, te, Re, je, kt, Dt, us, Fs;
      return n(), i("div", uR, [
        t("div", cR, [
          t("div", dR, [
            se[31] || (se[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            O.value ? (n(), i("div", mR)) : y("", !0)
          ]),
          t("div", fR, [
            k(iu),
            se[34] || (se[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Ne(["icon-btn", { spinning: J.value }]),
              onClick: qe,
              title: "Refresh"
            }, [...se[32] || (se[32] = [
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
              onClick: se[0] || (se[0] = (Je) => a("close")),
              title: "Close"
            }, [...se[33] || (se[33] = [
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
        $e.value && pe.value ? (n(), D(aR, {
          key: 0,
          info: pe.value,
          updating: ze.value,
          onUpdate: We,
          onDismiss: Be,
          onReleaseNotes: Ke
        }, null, 8, ["info", "updating"])) : y("", !0),
        t("div", vR, [
          t("div", { class: "env-switcher-header" }, [
            se[35] || (se[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", { class: "env-control-buttons" }, [
              t("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: P
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
            onClick: se[1] || (se[1] = (Je) => ne("environments", "all-envs"))
          }, [
            O.value ? (n(), i("div", pR, [
              t("span", null, d(((He = ie.value) == null ? void 0 : He.name) || ((Qe = O.value) == null ? void 0 : Qe.environment) || "Loading..."), 1),
              t("span", gR, "(" + d(O.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            se[36] || (se[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", hR, [
          t("div", yR, [
            t("div", wR, [
              t("div", _R, [
                se[37] || (se[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Ne(["sidebar-item", { active: A.value === "status" && Z.value === "this-env" }]),
                  onClick: se[2] || (se[2] = (Je) => ne("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Ne(["sidebar-item", { active: A.value === "workflows" }]),
                  onClick: se[3] || (se[3] = (Je) => ne("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Ne(["sidebar-item", { active: A.value === "models-env" }]),
                  onClick: se[4] || (se[4] = (Je) => ne("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Ne(["sidebar-item", { active: A.value === "branches" }]),
                  onClick: se[5] || (se[5] = (Je) => ne("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Ne(["sidebar-item", { active: A.value === "history" }]),
                  onClick: se[6] || (se[6] = (Je) => ne("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Ne(["sidebar-item", { active: A.value === "nodes" }]),
                  onClick: se[7] || (se[7] = (Je) => ne("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Ne(["sidebar-item", { active: A.value === "debug-env" }]),
                  onClick: se[8] || (se[8] = (Je) => ne("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              se[41] || (se[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", kR, [
                se[38] || (se[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Ne(["sidebar-item", { active: A.value === "environments" }]),
                  onClick: se[9] || (se[9] = (Je) => ne("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Ne(["sidebar-item", { active: A.value === "model-index" }]),
                  onClick: se[10] || (se[10] = (Je) => ne("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Ne(["sidebar-item", { active: A.value === "settings" }]),
                  onClick: se[11] || (se[11] = (Je) => ne("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Ne(["sidebar-item", { active: A.value === "debug-workspace" }]),
                  onClick: se[12] || (se[12] = (Je) => ne("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              se[42] || (se[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", bR, [
                se[40] || (se[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Ne(["sidebar-item", { active: A.value === "deploy" }]),
                  onClick: se[13] || (se[13] = (Je) => ne("deploy", "sharing"))
                }, [
                  se[39] || (se[39] = $(" DEPLOY ", -1)),
                  Ze(M) > 0 ? (n(), i("span", $R, d(Ze(M)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Ne(["sidebar-item", { active: A.value === "export" }]),
                  onClick: se[14] || (se[14] = (Je) => ne("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Ne(["sidebar-item", { active: A.value === "import" }]),
                  onClick: se[15] || (se[15] = (Je) => ne("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Ne(["sidebar-item", { active: A.value === "remotes" }]),
                  onClick: se[16] || (se[16] = (Je) => ne("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", CR, [
              k(ru)
            ])
          ]),
          t("div", xR, [
            ee.value ? (n(), i("div", SR, d(ee.value), 1)) : !O.value && A.value === "status" ? (n(), i("div", IR, " Loading status... ")) : (n(), i(H, { key: 2 }, [
              A.value === "status" ? (n(), D($v, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: W,
                status: O.value,
                "setup-state": V.value,
                onSwitchBranch: Se,
                onCommitChanges: se[17] || (se[17] = (Je) => Ae.value = !0),
                onSyncEnvironment: se[18] || (se[18] = (Je) => Te.value = !0),
                onViewWorkflows: se[19] || (se[19] = (Je) => ne("workflows", "this-env")),
                onViewHistory: se[20] || (se[20] = (Je) => ne("history", "this-env")),
                onViewDebug: se[21] || (se[21] = (Je) => ne("debug-env", "this-env")),
                onViewNodes: se[22] || (se[22] = (Je) => ne("nodes", "this-env")),
                onRepairMissingModels: go,
                onRepairEnvironment: Zs,
                onStartSetup: se[23] || (se[23] = (Je) => Y.value = !0),
                onViewEnvironments: se[24] || (se[24] = (Je) => ne("environments", "all-envs")),
                onCreateEnvironment: wa
              }, null, 8, ["status", "setup-state"])) : A.value === "workflows" ? (n(), D(N_, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: ke,
                onRefresh: qe
              }, null, 512)) : A.value === "models-env" ? (n(), D(Jb, {
                key: 2,
                onNavigate: _e
              })) : A.value === "branches" ? (n(), D(fp, {
                key: 3,
                branches: E.value,
                current: ((yt = O.value) == null ? void 0 : yt.branch) || null,
                onSwitch: vt,
                onCreate: Pt,
                onDelete: ts
              }, null, 8, ["branches", "current"])) : A.value === "history" ? (n(), D(pp, {
                key: 4,
                commits: G.value,
                "current-ref": (Tt = O.value) == null ? void 0 : Tt.branch,
                onSelect: dt,
                onCheckout: ct
              }, null, 8, ["commits", "current-ref"])) : A.value === "nodes" ? (n(), D(W2, {
                key: 5,
                "version-mismatches": ((eo = (rs = O.value) == null ? void 0 : rs.comparison) == null ? void 0 : eo.version_mismatches) || [],
                onOpenNodeManager: oe,
                onRepairEnvironment: Zs,
                onToast: ge
              }, null, 8, ["version-mismatches"])) : A.value === "debug-env" ? (n(), D(sx, { key: 6 })) : A.value === "environments" ? (n(), D(E8, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: ce,
                onSwitch: Ue,
                onCreated: ho,
                onDelete: yo
              }, null, 512)) : A.value === "model-index" ? (n(), D(c2, {
                key: 8,
                onRefresh: qe
              })) : A.value === "settings" ? (n(), D(K3, { key: 9 })) : A.value === "debug-workspace" ? (n(), D(tx, { key: 10 })) : A.value === "deploy" ? (n(), D(gT, {
                key: 11,
                onToast: ge,
                onNavigate: _e
              })) : A.value === "export" ? (n(), D(p5, { key: 12 })) : A.value === "import" ? (n(), D(r4, {
                key: 13,
                onImportCompleteSwitch: ha
              })) : A.value === "remotes" ? (n(), D(I3, {
                key: 14,
                onToast: ge
              })) : y("", !0)
            ], 64))
          ])
        ]),
        Oe.value ? (n(), D(LT, {
          key: 1,
          commit: Oe.value,
          onClose: se[25] || (se[25] = (Je) => Oe.value = null),
          onCheckout: ct,
          onCreateBranch: Ot
        }, null, 8, ["commit"])) : y("", !0),
        j.value ? (n(), D(_l, {
          key: 2,
          title: j.value.title,
          message: j.value.message,
          details: j.value.details,
          warning: j.value.warning,
          confirmLabel: j.value.confirmLabel,
          cancelLabel: j.value.cancelLabel,
          secondaryLabel: j.value.secondaryLabel,
          secondaryAction: j.value.secondaryAction,
          destructive: j.value.destructive,
          onConfirm: j.value.onConfirm,
          onCancel: se[26] || (se[26] = (Je) => j.value = null),
          onSecondary: j.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        k(xP, {
          show: de.value,
          "from-environment": ((te = ie.value) == null ? void 0 : te.name) || "unknown",
          "to-environment": N.value,
          onConfirm: tt,
          onClose: ys
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Ae.value && O.value ? (n(), D(lu, {
          key: 3,
          status: O.value,
          "as-modal": !0,
          onClose: se[27] || (se[27] = (Je) => Ae.value = !1),
          onCommitted: vo
        }, null, 8, ["status"])) : y("", !0),
        Te.value && O.value ? (n(), D(jP, {
          key: 4,
          show: Te.value,
          "mismatch-details": {
            missing_nodes: O.value.comparison.missing_nodes,
            extra_nodes: O.value.comparison.extra_nodes
          },
          onConfirm: po,
          onClose: se[28] || (se[28] = (Je) => Te.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        k(UP, {
          show: B.value,
          state: Ve.value.state,
          progress: Ve.value.progress,
          message: Ve.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        ae.value ? (n(), i("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: se[30] || (se[30] = gt((Je) => ae.value = !1, ["self"]))
        }, [
          t("div", ER, [
            t("div", TR, [
              se[44] || (se[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: se[29] || (se[29] = (Je) => ae.value = !1)
              }, [...se[43] || (se[43] = [
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
            t("div", PR, [
              se[45] || (se[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", RR, [
                (n(!0), i(H, null, ye(L.value, (Je) => (n(), i("div", {
                  key: Je.name,
                  class: Ne(["env-item", { current: Je.is_current }])
                }, [
                  t("div", MR, [
                    t("div", DR, [
                      t("span", LR, d(Je.is_current ? "●" : "○"), 1),
                      t("span", NR, d(Je.name), 1),
                      Je.current_branch ? (n(), i("span", UR, "(" + d(Je.current_branch) + ")", 1)) : y("", !0),
                      Je.is_current ? (n(), i("span", OR, "CURRENT")) : y("", !0)
                    ]),
                    t("div", AR, d(Je.workflow_count) + " workflows • " + d(Je.node_count) + " nodes ", 1)
                  ]),
                  Je.is_current ? y("", !0) : (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (_a) => Ue(Je.name)
                  }, " SWITCH ", 8, zR))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        Y.value ? (n(), D(Y7, {
          key: 6,
          "default-path": ((Re = le.value) == null ? void 0 : Re.default_path) || "~/comfygit",
          "detected-models-dir": ((je = le.value) == null ? void 0 : je.detected_models_dir) || null,
          "initial-step": K.value,
          "existing-environments": ((kt = le.value) == null ? void 0 : kt.environments) || [],
          "cli-installed": ((Dt = le.value) == null ? void 0 : Dt.cli_installed) ?? !0,
          "setup-state": ((us = le.value) == null ? void 0 : us.state) || "no_workspace",
          "workspace-path": ((Fs = le.value) == null ? void 0 : Fs.workspace_path) || null,
          onComplete: wo,
          onClose: _o,
          onSwitchEnvironment: ko,
          onEnvironmentCreatedNoSwitch: ya
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", VR, [
          k(Dd, { name: "toast" }, {
            default: p(() => [
              (n(!0), i(H, null, ye(xe.value, (Je) => (n(), i("div", {
                key: Je.id,
                class: Ne(["toast", Je.type])
              }, [
                t("span", FR, d(Je.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), WR = /* @__PURE__ */ Ce(BR, [["__scopeId", "data-v-9c2af32e"]]), GR = { class: "item-header" }, jR = { class: "item-info" }, HR = { class: "filename" }, KR = { class: "metadata" }, qR = { class: "size" }, YR = {
  key: 0,
  class: "type"
}, JR = { class: "item-actions" }, QR = {
  key: 0,
  class: "progress-section"
}, XR = { class: "progress-bar" }, ZR = { class: "progress-stats" }, eM = { class: "downloaded" }, tM = { class: "speed" }, sM = {
  key: 0,
  class: "eta"
}, oM = {
  key: 1,
  class: "status-msg paused"
}, nM = {
  key: 2,
  class: "status-msg queued"
}, aM = {
  key: 3,
  class: "status-msg completed"
}, lM = {
  key: 4,
  class: "status-msg failed"
}, iM = {
  key: 0,
  class: "retries"
}, rM = /* @__PURE__ */ be({
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
      class: Ne(["download-item", `status-${e.item.status}`])
    }, [
      t("div", GR, [
        t("div", jR, [
          t("div", HR, d(e.item.filename), 1),
          t("div", KR, [
            t("span", qR, d(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", YR, d(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", JR, [
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
      e.item.status === "downloading" ? (n(), i("div", QR, [
        t("div", XR, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", ZR, [
          t("span", eM, d(a(e.item.downloaded)) + " / " + d(a(e.item.size)), 1),
          t("span", tM, d(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", sM, d(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", oM, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", nM, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", aM, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", lM, [
        $(" ✗ " + d(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", iM, "(" + d(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), jo = /* @__PURE__ */ Ce(rM, [["__scopeId", "data-v-2110df65"]]), uM = { class: "queue-title" }, cM = { class: "count" }, dM = { class: "queue-actions" }, mM = { class: "action-label" }, fM = {
  key: 0,
  class: "overall-progress"
}, vM = { class: "progress-bar" }, pM = {
  key: 0,
  class: "current-mini"
}, gM = { class: "filename" }, hM = { class: "speed" }, yM = {
  key: 1,
  class: "queue-content"
}, wM = {
  key: 0,
  class: "section"
}, _M = {
  key: 1,
  class: "section"
}, kM = { class: "section-header" }, bM = { class: "section-label paused" }, $M = { class: "items-list" }, CM = {
  key: 2,
  class: "section"
}, xM = { class: "section-header" }, SM = { class: "section-label" }, IM = { class: "items-list" }, EM = {
  key: 3,
  class: "section"
}, TM = { class: "section-header" }, PM = { class: "section-label" }, RM = { class: "items-list" }, MM = {
  key: 4,
  class: "section"
}, DM = { class: "section-header" }, LM = { class: "section-label failed" }, NM = { class: "items-list" }, UM = /* @__PURE__ */ be({
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
    } = zo(), x = b(!1);
    let C = null;
    St(
      () => ({
        active: m.value,
        failed: r.value.length,
        paused: u.value.length,
        completed: l.value.length
      }),
      (I, M) => {
        C && (clearTimeout(C), C = null);
        const O = I.active === 0 && I.failed === 0 && I.paused === 0 && I.completed > 0, G = M && (M.active > 0 || M.paused > 0);
        O && G && (C = setTimeout(() => {
          w(), C = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = U(() => {
      var O;
      if (s.items.length === 0) return 0;
      const I = l.value.length, M = ((O = o.value) == null ? void 0 : O.progress) || 0;
      return Math.round((I + M / 100) / s.items.length * 100);
    });
    function z(I) {
      f(I);
    }
    function T(I) {
      return I === 0 ? "..." : `${(I / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (I, M) => (n(), D(Ut, { to: "body" }, [
      Ze(c) ? (n(), i("div", {
        key: 0,
        class: Ne(["model-download-queue", { minimized: !x.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: M[0] || (M[0] = (O) => x.value = !x.value)
        }, [
          t("div", uM, [
            M[4] || (M[4] = t("span", { class: "icon" }, "↓", -1)),
            M[5] || (M[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", cM, "(" + d(Ze(m)) + "/" + d(Ze(s).items.length) + ")", 1)
          ]),
          t("div", dM, [
            t("span", mM, d(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (n(), i("div", yM, [
          Ze(o) ? (n(), i("div", wM, [
            M[6] || (M[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            k(jo, {
              item: Ze(o),
              onCancel: M[1] || (M[1] = (O) => z(Ze(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          Ze(u).length > 0 ? (n(), i("div", _M, [
            t("div", kM, [
              t("span", bM, "Paused (" + d(Ze(u).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: M[2] || (M[2] = //@ts-ignore
                (...O) => Ze(_) && Ze(_)(...O))
              }, "Resume All")
            ]),
            t("div", $M, [
              (n(!0), i(H, null, ye(Ze(u), (O) => (n(), D(jo, {
                key: O.id,
                item: O,
                onResume: (G) => Ze(g)(O.id),
                onRemove: (G) => Ze(h)(O.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Ze(a).length > 0 ? (n(), i("div", CM, [
            t("div", xM, [
              t("span", SM, "Queued (" + d(Ze(a).length) + ")", 1)
            ]),
            t("div", IM, [
              (n(!0), i(H, null, ye(Ze(a), (O) => (n(), D(jo, {
                key: O.id,
                item: O,
                onCancel: (G) => z(O.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          Ze(l).length > 0 ? (n(), i("div", EM, [
            t("div", TM, [
              t("span", PM, "Completed (" + d(Ze(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: M[3] || (M[3] = //@ts-ignore
                (...O) => Ze(w) && Ze(w)(...O))
              }, "Clear")
            ]),
            t("div", RM, [
              (n(!0), i(H, null, ye(Ze(l).slice(0, 3), (O) => (n(), D(jo, {
                key: O.id,
                item: O,
                onRemove: (G) => Ze(h)(O.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Ze(r).length > 0 ? (n(), i("div", MM, [
            t("div", DM, [
              t("span", LM, "Failed (" + d(Ze(r).length) + ")", 1)
            ]),
            t("div", NM, [
              (n(!0), i(H, null, ye(Ze(r), (O) => (n(), D(jo, {
                key: O.id,
                item: O,
                onRetry: (G) => Ze(v)(O.id),
                onRemove: (G) => Ze(h)(O.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (n(), i("div", fM, [
          t("div", vM, [
            t("div", {
              class: "progress-fill",
              style: Ft({ width: `${S.value}%` })
            }, null, 4)
          ]),
          Ze(o) ? (n(), i("div", pM, [
            t("span", gM, d(Ze(o).filename), 1),
            t("span", hM, d(T(Ze(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), OM = /* @__PURE__ */ Ce(UM, [["__scopeId", "data-v-3a3c9607"]]), AM = { class: "detail-header" }, zM = { class: "item-count" }, VM = { class: "resource-list" }, FM = { class: "item-info" }, BM = { class: "item-name" }, WM = {
  key: 0,
  class: "item-subtitle"
}, GM = {
  key: 0,
  class: "installing-badge"
}, jM = ["title"], HM = {
  key: 2,
  class: "installed-badge"
}, KM = {
  key: 3,
  class: "queued-badge"
}, qM = {
  key: 4,
  class: "action-buttons"
}, YM = {
  key: 1,
  class: "no-action"
}, JM = /* @__PURE__ */ be({
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
    const o = e, a = s, l = U(() => o.items.filter((h) => h.canAction)), r = U(() => l.value.length > 0 && l.value.every(
      (h) => {
        var w, x;
        return o.queuedItems.has(h.id) || ((w = o.installedItems) == null ? void 0 : w.has(h.id)) || ((x = o.failedItems) == null ? void 0 : x.has(h.id));
      }
    )), u = U(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
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
    return (h, w) => (n(), D(Ct, {
      title: e.title,
      size: "md",
      onClose: w[2] || (w[2] = (x) => a("close"))
    }, {
      body: p(() => [
        t("div", AM, [
          t("span", zM, d(e.items.length) + " " + d(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (n(), D(De, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: w[0] || (w[0] = (x) => a("bulk-action"))
          }, {
            default: p(() => [
              $(d(u.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        t("div", VM, [
          (n(!0), i(H, null, ye(e.items, (x) => (n(), i("div", {
            key: x.id,
            class: "resource-item"
          }, [
            t("div", FM, [
              t("span", BM, d(x.name), 1),
              x.subtitle ? (n(), i("span", WM, d(x.subtitle), 1)) : y("", !0)
            ]),
            x.canAction ? (n(), i(H, { key: 0 }, [
              m(x) ? (n(), i("span", GM, "Installing...")) : v(x) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: g(x)
              }, "Failed ⚠", 8, jM)) : f(x) ? (n(), i("span", HM, "Installed")) : c(x) ? (n(), i("span", KM, "Queued")) : (n(), i("div", qM, [
                (n(!0), i(H, null, ye(_(x), (C) => (n(), D(De, {
                  key: `${x.id}-${C.key}`,
                  size: "sm",
                  variant: C.variant || "secondary",
                  onClick: (S) => a("action", x, C.key)
                }, {
                  default: p(() => [
                    $(d(C.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (n(), i("span", YM, d(x.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: p(() => [
        k(De, {
          variant: "secondary",
          onClick: w[1] || (w[1] = (x) => a("close"))
        }, {
          default: p(() => [...w[3] || (w[3] = [
            $("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), QM = /* @__PURE__ */ Ce(JM, [["__scopeId", "data-v-ec7e9202"]]), XM = {
  key: 0,
  class: "loading-state"
}, ZM = {
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
}, xD = { class: "section-header" }, SD = { class: "section-title" }, ID = { class: "item-list" }, ED = { class: "package-info community-info" }, TD = { class: "community-title-row" }, PD = { class: "package-name" }, RD = { class: "node-count" }, MD = { class: "community-mapping-note" }, DD = { key: 0 }, LD = {
  key: 0,
  class: "community-actions"
}, ND = {
  key: 1,
  class: "installing-badge"
}, UD = {
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
}, YD = { class: "dont-show-again" }, JD = 3e4, QD = /* @__PURE__ */ be({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = b(!1), o = b(null), a = b(null), l = b(!1), r = b(/* @__PURE__ */ new Set()), u = b(/* @__PURE__ */ new Set()), c = b(/* @__PURE__ */ new Map()), m = b(/* @__PURE__ */ new Set()), f = b(!1), v = b(null), g = b(0), _ = b(null), h = b(/* @__PURE__ */ new Set()), w = b(/* @__PURE__ */ new Map()), x = b(/* @__PURE__ */ new Map()), { addToQueue: C } = zo(), { queueNodeInstall: S } = ut(), z = U(() => {
      var Q;
      return ((Q = a.value) == null ? void 0 : Q.package_aliases) || {};
    });
    function T(Q) {
      if (!Q) return null;
      const ge = z.value;
      let he = Q;
      const Ke = /* @__PURE__ */ new Set();
      for (; ge[he] && !Ke.has(he); )
        Ke.add(he), he = ge[he];
      return he;
    }
    function I(Q, ge) {
      return Q instanceof Error && Q.message ? Q.message : typeof Q == "string" && Q.trim().length > 0 ? Q : ge;
    }
    function M(Q) {
      for (const [ge, he] of w.value.entries())
        he === Q && w.value.delete(ge);
    }
    function O(Q) {
      if (!x.value.has(Q)) return;
      const ge = x.value.get(Q);
      clearTimeout(ge), x.value.delete(Q);
    }
    function G() {
      for (const Q of x.value.values())
        clearTimeout(Q);
      x.value = /* @__PURE__ */ new Map();
    }
    function E(Q) {
      O(Q);
      const ge = setTimeout(() => {
        if (x.value.delete(Q), !u.value.has(Q)) return;
        M(Q), u.value.delete(Q), v.value === Q && (v.value = null), c.value.set(Q, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", Q);
      }, JD);
      x.value.set(Q, ge);
    }
    function L(Q) {
      const ge = `Cannot install "${Q.title}" - package_id is missing`;
      c.value.set(Q.item_id, ge), o.value = ge, console.warn("[ComfyGit] Community install requested without package_id:", Q);
    }
    const ie = U(() => le.value.length > 0 || K.value.length > 0 || V.value.length > 0 || J.value.length > 0 || ue.value.length > 0), le = U(() => {
      var he, Ke;
      if (!((he = a.value) != null && he.nodes)) return [];
      const Q = /* @__PURE__ */ new Map(), ge = (a.value.nodes.resolved || []).filter((Be) => {
        var We;
        return !Be.is_installed && ((We = Be.package) == null ? void 0 : We.package_id);
      });
      for (const Be of ge) {
        const We = T(Be.package.package_id);
        if (!We) continue;
        Q.has(We) || Q.set(We, {
          package_id: We,
          title: Be.package.title || We,
          node_count: 0,
          node_types: [],
          repository: Be.package.repository || null,
          latest_version: Be.package.latest_version || null
        });
        const Xe = Q.get(We);
        Xe.node_count++, Xe.node_types.push(((Ke = Be.reference) == null ? void 0 : Ke.node_type) || Be.node_type);
      }
      return Array.from(Q.values());
    }), Y = U(() => le.value.reduce((Q, ge) => Q + ge.node_count, 0)), K = U(() => {
      var Q;
      return (Q = a.value) != null && Q.nodes ? (a.value.nodes.unresolved || []).map((ge) => {
        var he;
        return {
          node_type: ((he = ge.reference) == null ? void 0 : he.node_type) || ge.node_type
        };
      }) : [];
    }), V = U(() => {
      var ge;
      if (!((ge = a.value) != null && ge.nodes)) return [];
      const Q = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((he) => {
        var Be;
        const Ke = ((Be = he.reference) == null ? void 0 : Be.node_type) || he.node_type;
        return {
          node_type: Ke,
          guidance: he.guidance || Q[Ke] || null
        };
      });
    }), J = U(() => {
      var he, Ke, Be, We, Xe, qe, dt, ct;
      if (!((he = a.value) != null && he.nodes)) return [];
      const Q = a.value.node_guidance || {}, ge = /* @__PURE__ */ new Map();
      for (const vt of a.value.nodes.uninstallable || []) {
        const Pt = ((Ke = vt.reference) == null ? void 0 : Ke.node_type) || vt.node_type, ts = T(((Be = vt.package) == null ? void 0 : Be.package_id) || null), Ot = ts || `node:${Pt}`;
        ge.has(Ot) || ge.set(Ot, {
          item_id: Ot,
          node_type: Pt,
          title: ((We = vt.package) == null ? void 0 : We.title) || ts || Pt,
          node_count: 0,
          package_id: ts,
          repository: ((Xe = vt.package) == null ? void 0 : Xe.repository) || null,
          latest_version: ((qe = vt.package) == null ? void 0 : qe.latest_version) || null,
          guidance: vt.guidance || Q[Pt] || null
        });
        const fe = ge.get(Ot);
        fe.node_count++, fe.guidance || (fe.guidance = vt.guidance || Q[Pt] || null), !fe.repository && ((dt = vt.package) != null && dt.repository) && (fe.repository = vt.package.repository), !fe.latest_version && ((ct = vt.package) != null && ct.latest_version) && (fe.latest_version = vt.package.latest_version);
      }
      return Array.from(ge.values());
    }), ee = U(() => J.value.filter((Q) => !!Q.package_id)), Oe = U(() => J.value.length >= 5 ? J.value.slice(0, 4) : J.value), ae = U(() => ee.value.length > 0 && ee.value.every((Q) => {
      const ge = Q.package_id;
      return r.value.has(ge) || u.value.has(ge) || c.value.has(ge);
    }));
    function pe(Q) {
      const ge = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return Q.repository && ge.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), ge;
    }
    const ue = U(() => {
      var Be;
      if (!((Be = a.value) != null && Be.models)) return [];
      const Q = (a.value.models.resolved || []).filter(
        (We) => We.match_type === "download_intent" || We.match_type === "property_download_intent" || We.match_type === "not_found"
      ).map((We) => {
        var Xe, qe, dt, ct;
        return {
          filename: ((qe = (Xe = We.reference) == null ? void 0 : Xe.widget_value) == null ? void 0 : qe.split("/").pop()) || ((dt = We.reference) == null ? void 0 : dt.widget_value) || We.widget_value,
          widget_value: ((ct = We.reference) == null ? void 0 : ct.widget_value) || We.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: We.download_source || null,
          targetPath: We.target_path || null,
          canDownload: !!(We.download_source && We.target_path)
        };
      }), ge = (a.value.models.unresolved || []).map((We) => {
        var Xe, qe, dt, ct;
        return {
          filename: ((qe = (Xe = We.reference) == null ? void 0 : Xe.widget_value) == null ? void 0 : qe.split("/").pop()) || ((dt = We.reference) == null ? void 0 : dt.widget_value) || We.widget_value,
          widget_value: ((ct = We.reference) == null ? void 0 : ct.widget_value) || We.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), he = /* @__PURE__ */ new Map(), Ke = [];
      for (const We of Q) {
        if (!We.url) {
          Ke.push(We);
          continue;
        }
        const Xe = `${We.filename}::${We.url}`, qe = he.get(Xe);
        if (!qe) {
          he.set(Xe, We);
          continue;
        }
        !qe.targetPath && We.targetPath && (qe.targetPath = We.targetPath), !qe.canDownload && We.canDownload && (qe.canDownload = We.canDownload);
      }
      return [...he.values(), ...Ke, ...ge];
    }), ze = U(() => ue.value.filter((Q) => Q.canDownload)), $e = U(() => le.value.length >= 5 ? le.value.slice(0, 4) : le.value), ke = U(() => ue.value.length >= 5 ? ue.value.slice(0, 4) : ue.value), ce = U(() => le.value.length > 0 && le.value.every(
      (Q) => r.value.has(Q.package_id) || u.value.has(Q.package_id) || c.value.has(Q.package_id)
    )), W = U(() => ze.value.length > 0 && ze.value.every((Q) => m.value.has(Q.url))), de = U(() => le.value.length > 0 || ee.value.length > 0 || ze.value.length > 0), B = U(() => {
      const Q = (le.value.length === 0 || ce.value) && (ee.value.length === 0 || ae.value), ge = ze.value.length === 0 || W.value;
      return Q && ge;
    }), N = U(() => _.value === "models" ? `Missing Models (${ue.value.length})` : _.value === "packages" ? `Missing Custom Nodes (${Y.value})` : _.value === "community" ? `Community-Mapped Packages (${J.value.length})` : ""), re = U(() => _.value === "models" ? ue.value.map((Q) => ({
      id: Q.url || Q.widget_value,
      name: Q.filename,
      canAction: Q.canDownload,
      actionDisabledReason: Q.canDownload ? void 0 : "Manual download required"
    })) : _.value === "packages" ? le.value.map((Q) => ({
      id: Q.package_id,
      name: Q.title,
      subtitle: `(${Q.node_count} ${Q.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : _.value === "community" ? J.value.map((Q) => ({
      id: Q.package_id || Q.item_id,
      name: Q.title,
      subtitle: `(${Q.node_count} ${Q.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!Q.package_id,
      actionDisabledReason: Q.package_id ? void 0 : "Manual setup required",
      actions: Q.package_id ? pe(Q) : []
    })) : []);
    function Ve(Q, ge) {
      if (_.value === "models") {
        const he = ue.value.find((Ke) => Ke.url === Q.id || Ke.widget_value === Q.id);
        he && Pe(he);
      } else if (_.value === "packages") {
        const he = le.value.find((Ke) => Ke.package_id === Q.id);
        he && F(he);
      } else if (_.value === "community") {
        const he = J.value.find((Be) => (Be.package_id || Be.item_id) === Q.id);
        if (!he) return;
        if (!he.package_id) {
          L({ item_id: he.item_id, title: he.title });
          return;
        }
        X(he, ge === "install_git" ? "git" : "registry");
      }
    }
    function Fe() {
      _.value === "models" ? q() : _.value === "packages" ? Ie() : _.value === "community" && Ee();
    }
    async function F(Q) {
      return me(Q.package_id, Q.latest_version, "registry");
    }
    async function X(Q, ge) {
      return Q.package_id ? me(Q.package_id, Q.latest_version, ge, Q.repository) : (L({ item_id: Q.item_id, title: Q.title }), !1);
    }
    async function me(Q, ge, he, Ke) {
      const Be = T(Q) || Q, We = ge || "latest";
      if (r.value.has(Be) || u.value.has(Be) || c.value.has(Be))
        return !0;
      Le(), v.value = Be;
      let Xe = null;
      try {
        const qe = {
          id: Be,
          version: We,
          selected_version: We,
          mode: "remote",
          channel: "default"
        };
        he === "git" && Ke && (qe.repository = Ke, qe.install_source = "git");
        const { ui_id: dt } = await S(qe, {
          beforeQueueStart: (ct) => {
            Xe = ct, w.value.set(ct, Be), u.value.add(Be), E(Be), console.log("[ComfyGit] Registered pending install:", {
              ui_id: ct,
              packageId: Be,
              pendingInstalls: Array.from(w.value.entries())
            });
          }
        });
        return Xe || (Xe = dt, w.value.set(dt, Be), u.value.add(Be), E(Be), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: dt,
          packageId: Be,
          pendingInstalls: Array.from(w.value.entries())
        })), !0;
      } catch (qe) {
        const dt = I(qe, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", qe), Xe && w.value.delete(Xe), M(Be), O(Be), u.value.delete(Be), c.value.set(Be, dt), !1;
      } finally {
        v.value = null;
      }
    }
    function Pe(Q) {
      !Q.url || !Q.targetPath || m.value.has(Q.url) || (C([{
        workflow: "unsaved",
        filename: Q.filename,
        url: Q.url,
        targetPath: Q.targetPath
      }]), m.value.add(Q.url));
    }
    async function Ie() {
      const Q = { attempted: 0, failed: 0 };
      for (const ge of le.value)
        !r.value.has(ge.package_id) && !u.value.has(ge.package_id) && !c.value.has(ge.package_id) && (Q.attempted++, await F(ge) || Q.failed++);
      return Q;
    }
    async function Ee() {
      const Q = { attempted: 0, failed: 0 };
      for (const ge of ee.value) {
        const he = ge.package_id;
        !r.value.has(he) && !u.value.has(he) && !c.value.has(he) && (Q.attempted++, await X(ge, "registry") || Q.failed++);
      }
      return Q;
    }
    function q() {
      const Q = ze.value.filter(
        (ge) => !m.value.has(ge.url)
      );
      if (Q.length === 0) return 0;
      C(Q.map((ge) => ({
        workflow: "unsaved",
        filename: ge.filename,
        url: ge.url,
        targetPath: ge.targetPath
      })));
      for (const ge of Q)
        m.value.add(ge.url);
      return Q.length;
    }
    async function A() {
      const Q = await Ie(), ge = await Ee();
      q();
      const he = Q.attempted + ge.attempted, Ke = Q.failed + ge.failed;
      if (he > 0 && Ke > 0) {
        const Be = he - Ke;
        o.value = `${Be} of ${he} installs queued, ${Ke} failed`;
      }
    }
    function Z() {
      f.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function ne(Q) {
      var Be, We;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const ge = Q == null ? void 0 : Q.id;
      if (ge && h.value.has(ge)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${ge} this session`);
        return;
      }
      const he = window.app, Ke = (Be = he == null ? void 0 : he.extensionManager) == null ? void 0 : Be.workflow;
      if (Ke) {
        let dt = !1;
        for (let ct = 0; ct < 20; ct++) {
          const vt = Ke.activeWorkflow;
          if (!vt) {
            await new Promise((Ot) => setTimeout(Ot, 50));
            continue;
          }
          const Pt = (We = vt.activeState) == null ? void 0 : We.id;
          if (!(ge && Pt === ge)) {
            ct < 19 && await new Promise((Ot) => setTimeout(Ot, 50));
            continue;
          }
          if (dt = !0, vt.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${vt.filename}`), ge && h.value.add(ge);
            return;
          }
          break;
        }
        dt || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      s.value = !0, o.value = null, G(), r.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Map(), m.value = /* @__PURE__ */ new Set(), w.value = /* @__PURE__ */ new Map(), f.value = !1, g.value = 0;
      try {
        const Xe = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: Q, name: "unsaved" })
        });
        if (!Xe.ok) {
          const qe = await Xe.json();
          throw new Error(qe.error || "Failed to analyze workflow");
        }
        a.value = await Xe.json(), ie.value && (l.value = !0, ge && h.value.add(ge));
      } catch (Xe) {
        console.error("[ComfyGit] Failed to analyze workflow:", Xe);
      } finally {
        s.value = !1;
      }
    }
    function _e() {
      G(), l.value = !1, a.value = null;
    }
    function Se(Q) {
      const { workflow: ge } = Q.detail;
      ge && ne(ge);
    }
    function oe(Q) {
      var Ke;
      const ge = (Ke = Q.detail) == null ? void 0 : Ke.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: ge,
        pendingInstalls: Array.from(w.value.entries()),
        eventDetail: Q.detail
      });
      const he = w.value.get(ge);
      he ? (O(he), v.value = he, console.log("[ComfyGit] Installing package:", he)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", ge);
    }
    function j(Q) {
      var Be, We, Xe, qe, dt, ct, vt;
      const ge = (Be = Q.detail) == null ? void 0 : Be.ui_id, he = (Xe = (We = Q.detail) == null ? void 0 : We.status) == null ? void 0 : Xe.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: ge,
        status: he,
        pendingInstalls: Array.from(w.value.entries()),
        eventDetail: Q.detail
      });
      const Ke = w.value.get(ge);
      if (Ke) {
        if (O(Ke), w.value.delete(ge), u.value.delete(Ke), v.value === Ke && (v.value = null), he === "success")
          r.value.add(Ke), g.value++, console.log("[ComfyGit] Package installed successfully:", Ke);
        else {
          const Pt = ((ct = (dt = (qe = Q.detail) == null ? void 0 : qe.status) == null ? void 0 : dt.messages) == null ? void 0 : ct[0]) || ((vt = Q.detail) == null ? void 0 : vt.result) || "Unknown error";
          c.value.set(Ke, Pt), console.error("[ComfyGit] Package install failed:", Ke, Pt);
        }
        w.value.size === 0 && g.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", g.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: g.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", ge);
    }
    let Ae = null;
    function Te() {
      var Q;
      return Ae || (Ae = (Q = window.app) == null ? void 0 : Q.api), Ae;
    }
    let xe = !1;
    function Le() {
      if (xe) return !0;
      const Q = Te();
      return Q ? (Q.addEventListener("cm-task-started", oe), Q.addEventListener("cm-task-completed", j), Q.addEventListener("comfygit:workflow-changed", Me), xe = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Me(Q) {
      const { change_type: ge } = Q.detail;
      (ge === "created" || ge === "modified") && l.value && (G(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return lt(() => {
      window.addEventListener("comfygit:workflow-loaded", Se);
    }), Xs(() => {
      if (G(), window.removeEventListener("comfygit:workflow-loaded", Se), xe) {
        const Q = Te();
        Q && (Q.removeEventListener("cm-task-started", oe), Q.removeEventListener("cm-task-completed", j), Q.removeEventListener("comfygit:workflow-changed", Me)), xe = !1;
      }
    }), (Q, ge) => (n(), i(H, null, [
      l.value ? (n(), D(Ct, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: _e
      }, {
        body: p(() => [
          s.value ? (n(), i("div", XM, [...ge[5] || (ge[5] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && ie.value ? (n(), i("div", ZM, [
            le.value.length > 0 ? (n(), i("div", eD, [
              t("div", tD, [
                t("span", sD, "Missing Custom Nodes (" + d(Y.value) + ")", 1),
                le.value.length > 1 ? (n(), D(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: ce.value,
                  onClick: Ie
                }, {
                  default: p(() => [
                    $(d(ce.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", oD, [
                (n(!0), i(H, null, ye($e.value, (he) => (n(), i("div", {
                  key: he.package_id,
                  class: "package-item"
                }, [
                  t("div", nD, [
                    t("span", aD, d(he.title), 1),
                    t("span", lD, "(" + d(he.node_count) + " " + d(he.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(he.package_id) && !u.value.has(he.package_id) && !c.value.has(he.package_id) ? (n(), D(De, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: v.value === he.package_id,
                    onClick: (Ke) => F(he)
                  }, {
                    default: p(() => [
                      $(d(v.value === he.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : v.value === he.package_id ? (n(), i("span", iD, "Installing...")) : u.value.has(he.package_id) ? (n(), i("span", rD, "Queued")) : c.value.has(he.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: c.value.get(he.package_id)
                  }, "Failed ⚠", 8, uD)) : (n(), i("span", cD, "Installed"))
                ]))), 128)),
                le.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ge[0] || (ge[0] = (he) => _.value = "packages")
                }, [
                  t("span", null, "Show all " + d(le.value.length) + " packages...", 1),
                  ge[6] || (ge[6] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            K.value.length > 0 ? (n(), i("div", dD, [
              t("div", mD, [
                t("span", fD, "Unknown Nodes (" + d(K.value.length) + ")", 1)
              ]),
              t("div", vD, [
                (n(!0), i(H, null, ye(K.value.slice(0, 5), (he) => (n(), i("div", {
                  key: he.node_type,
                  class: "item"
                }, [
                  t("code", pD, d(he.node_type), 1),
                  ge[7] || (ge[7] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                K.value.length > 5 ? (n(), i("div", gD, " ...and " + d(K.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            V.value.length > 0 ? (n(), i("div", hD, [
              t("div", yD, [
                t("span", wD, "Requires Newer ComfyUI (" + d(V.value.length) + ")", 1)
              ]),
              t("div", _D, [
                (n(!0), i(H, null, ye(V.value.slice(0, 5), (he) => (n(), i("div", {
                  key: `vg-${he.node_type}`,
                  class: "item"
                }, [
                  t("code", kD, d(he.node_type), 1),
                  t("span", bD, d(he.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                V.value.length > 5 ? (n(), i("div", $D, " ...and " + d(V.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            J.value.length > 0 ? (n(), i("div", CD, [
              t("div", xD, [
                t("span", SD, "Community-Mapped Packages (" + d(J.value.length) + ")", 1),
                ee.value.length > 1 ? (n(), D(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: ae.value,
                  onClick: Ee
                }, {
                  default: p(() => [
                    $(d(ae.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", ID, [
                (n(!0), i(H, null, ye(Oe.value, (he) => (n(), i("div", {
                  key: `community-${he.item_id}`,
                  class: "package-item"
                }, [
                  t("div", ED, [
                    t("div", TD, [
                      t("span", PD, d(he.title), 1),
                      t("span", RD, "(" + d(he.node_count) + " " + d(he.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    t("div", MD, [
                      ge[8] || (ge[8] = $(" Found via community mapping — registry metadata may be incomplete", -1)),
                      he.guidance ? (n(), i("span", DD, ". " + d(he.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  he.package_id ? (n(), i(H, { key: 0 }, [
                    !r.value.has(he.package_id) && !u.value.has(he.package_id) && !c.value.has(he.package_id) ? (n(), i("div", LD, [
                      k(De, {
                        size: "sm",
                        variant: "secondary",
                        disabled: v.value === he.package_id,
                        onClick: (Ke) => X(he, "registry")
                      }, {
                        default: p(() => [
                          $(d(v.value === he.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      he.repository ? (n(), D(De, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: v.value === he.package_id,
                        onClick: (Ke) => X(he, "git")
                      }, {
                        default: p(() => [...ge[9] || (ge[9] = [
                          $(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : y("", !0)
                    ])) : v.value === he.package_id ? (n(), i("span", ND, "Installing...")) : u.value.has(he.package_id) ? (n(), i("span", UD, "Queued")) : c.value.has(he.package_id) ? (n(), i("span", {
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
                J.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ge[1] || (ge[1] = (he) => _.value = "community")
                }, [
                  t("span", null, "Show all " + d(J.value.length) + " packages...", 1),
                  ge[10] || (ge[10] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            ue.value.length > 0 ? (n(), i("div", FD, [
              t("div", BD, [
                t("span", WD, "Missing Models (" + d(ue.value.length) + ")", 1),
                ze.value.length > 1 ? (n(), D(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: W.value,
                  onClick: q
                }, {
                  default: p(() => [
                    $(d(W.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", GD, [
                (n(!0), i(H, null, ye(ke.value, (he) => (n(), i("div", {
                  key: he.widget_value,
                  class: "model-item"
                }, [
                  t("div", jD, [
                    t("span", HD, d(he.filename), 1)
                  ]),
                  he.canDownload ? (n(), i(H, { key: 0 }, [
                    m.value.has(he.url) ? (n(), i("span", KD, "Queued")) : (n(), D(De, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ke) => Pe(he)
                    }, {
                      default: p(() => [...ge[11] || (ge[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", qD, "Manual download required"))
                ]))), 128)),
                ue.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ge[2] || (ge[2] = (he) => _.value = "models")
                }, [
                  t("span", null, "Show all " + d(ue.value.length) + " models...", 1),
                  ge[12] || (ge[12] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            t("div", YD, [
              k(ta, {
                modelValue: f.value,
                "onUpdate:modelValue": [
                  ge[3] || (ge[3] = (he) => f.value = he),
                  Z
                ]
              }, {
                default: p(() => [...ge[13] || (ge[13] = [
                  $(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : y("", !0)
        ]),
        footer: p(() => [
          k(De, {
            variant: "secondary",
            onClick: _e
          }, {
            default: p(() => [...ge[14] || (ge[14] = [
              $("Dismiss", -1)
            ])]),
            _: 1
          }),
          de.value ? (n(), D(De, {
            key: 0,
            variant: "primary",
            disabled: B.value,
            onClick: A
          }, {
            default: p(() => [
              $(d(B.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      _.value ? (n(), D(QM, {
        key: 1,
        title: N.value,
        items: re.value,
        "item-type": _.value,
        "queued-items": _.value === "models" ? m.value : u.value,
        "installed-items": _.value === "models" ? void 0 : r.value,
        "failed-items": _.value === "models" ? void 0 : c.value,
        "installing-item": _.value === "models" ? void 0 : v.value,
        onClose: ge[4] || (ge[4] = (he) => _.value = null),
        onAction: Ve,
        onBulkAction: Fe
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), XD = /* @__PURE__ */ Ce(QD, [["__scopeId", "data-v-dfb55c3f"]]), ZD = {
  key: 0,
  class: "io-mapping-root"
}, eL = { class: "io-mapping-visual-layer" }, tL = { class: "io-mapping-header" }, sL = { class: "io-mapping-header-main" }, oL = { class: "io-mapping-subtitle" }, nL = {
  key: 0,
  class: "io-mapping-hover-summary"
}, aL = { class: "io-mapping-header-actions" }, lL = { class: "io-mapping-sidebar" }, iL = { class: "io-mapping-sidebar-scroll" }, rL = {
  key: 0,
  class: "io-state-block"
}, uL = {
  key: 1,
  class: "io-state-block io-state-error"
}, cL = { class: "contract-meta" }, dL = { class: "contract-summary" }, mL = { class: "summary-pill" }, fL = { class: "summary-pill" }, vL = { class: "summary-pill" }, pL = { class: "contract-meta-grid" }, gL = { class: "mapping-section" }, hL = { class: "section-header" }, yL = {
  key: 0,
  class: "empty-message"
}, wL = ["onClick"], _L = { class: "item-card-header" }, kL = { class: "item-card-title" }, bL = { class: "item-card-meta" }, $L = { class: "item-grid" }, CL = { class: "mapping-section" }, xL = { class: "section-header" }, SL = {
  key: 0,
  class: "empty-message"
}, IL = ["onClick"], EL = { class: "item-card-header" }, TL = { class: "item-card-title" }, PL = { class: "item-card-meta" }, RL = { class: "item-grid" }, ML = { class: "io-mapping-footer" }, DL = /* @__PURE__ */ be({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const s = e, { getWorkflowContract: o, saveWorkflowContract: a } = ut(), l = b(!1), r = b(""), u = b(!1), c = b(!1), m = b(null), f = b(null), v = b(null), g = b("inputs"), _ = b(null), h = b(null), w = b(0), x = b(null), C = b(null);
    let S = null;
    const z = [
      "string",
      "integer",
      "number",
      "boolean",
      "enum",
      "image",
      "video",
      "audio",
      "file"
    ], T = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], I = U(() => {
      if (!v.value)
        return { inputs: [], outputs: [] };
      const q = v.value.default_contract || "default";
      return v.value.contracts[q] || (v.value.contracts[q] = { inputs: [], outputs: [] }), v.value.contracts[q];
    }), M = U(() => {
      var A;
      const q = ((A = f.value) == null ? void 0 : A.contract_summary.status) ?? "none";
      return q === "valid" ? "Valid Contract" : q === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function O(q) {
      return q ? JSON.parse(JSON.stringify(q)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function G(q) {
      if (!v.value) return;
      const A = q.trim() || "default";
      v.value.default_contract = A, v.value.contracts[A] || (v.value.contracts[A] = { inputs: [], outputs: [] });
    }
    function E(q, A) {
      return q.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || A;
    }
    function L(q) {
      const A = String(q ?? "").toLowerCase();
      return A.includes("image") ? "image" : A.includes("video") ? "video" : A.includes("audio") ? "audio" : A.includes("int") ? "integer" : A.includes("float") || A.includes("double") || A.includes("number") ? "number" : A.includes("bool") ? "boolean" : A.includes("combo") || A.includes("enum") ? "enum" : A.includes("string") || A.includes("text") ? "string" : "file";
    }
    function ie() {
      I.value.inputs.push({
        name: "",
        type: "string",
        node_id: "",
        required: !0,
        default: ""
      }), _.value = I.value.inputs.length - 1, g.value = "inputs";
    }
    function le() {
      I.value.outputs.push({
        name: "",
        type: "image",
        node_id: "",
        selector: "primary"
      }), h.value = I.value.outputs.length - 1, g.value = "outputs";
    }
    function Y(q) {
      I.value.inputs.splice(q, 1), _.value === q && (_.value = null);
    }
    function K(q) {
      I.value.outputs.splice(q, 1), h.value === q && (h.value = null);
    }
    function V(q) {
      const A = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(q)) : String(q);
      return document.querySelector(`[data-node-id="${A}"]`);
    }
    function J(q) {
      return q instanceof Element ? !!q.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function ee(q) {
      var ne, _e, Se, oe, j, Ae;
      if (!(q instanceof Element)) return null;
      const A = q.closest("[data-node-id]"), Z = A == null ? void 0 : A.getAttribute("data-node-id");
      return Z ? ((Se = (_e = (ne = s.comfyApp) == null ? void 0 : ne.graph) == null ? void 0 : _e.getNodeById) == null ? void 0 : Se.call(_e, Z)) ?? ((Ae = (j = (oe = s.comfyApp) == null ? void 0 : oe.rootGraph) == null ? void 0 : j.getNodeById) == null ? void 0 : Ae.call(j, Z)) ?? null : null;
    }
    function Oe(q, A) {
      if (A == null || A < 0) return null;
      const Z = V(q);
      return Z ? Z.querySelectorAll('[data-testid="node-widget"]')[A] ?? null : null;
    }
    function ae(q) {
      return !q || q.width <= 0 || q.height <= 0 ? null : {
        left: `${q.left}px`,
        top: `${q.top}px`,
        width: `${q.width}px`,
        height: `${q.height}px`
      };
    }
    function pe(q) {
      const A = V((q == null ? void 0 : q.id) ?? "");
      if (A) return A.getBoundingClientRect();
      const Z = s.comfyApp;
      if (!q || typeof (Z == null ? void 0 : Z.canvasPosToClientPos) != "function") return null;
      const _e = Z.canvasPosToClientPos([q.pos[0], q.pos[1] - 32]), Se = Z.canvasPosToClientPos([q.pos[0] + q.size[0], q.pos[1] + q.size[1]]);
      return !_e || !Se ? null : new DOMRect(_e[0], _e[1], Se[0] - _e[0], Se[1] - _e[1]);
    }
    function ue(q) {
      var j, Ae, Te, xe, Le, Me, Q;
      const A = Oe(q.node_id, q.widget_idx);
      if (A) return A.getBoundingClientRect();
      const Z = ((Te = (Ae = (j = s.comfyApp) == null ? void 0 : j.graph) == null ? void 0 : Ae.getNodeById) == null ? void 0 : Te.call(Ae, String(q.node_id))) ?? ((Me = (Le = (xe = s.comfyApp) == null ? void 0 : xe.rootGraph) == null ? void 0 : Le.getNodeById) == null ? void 0 : Me.call(Le, String(q.node_id)));
      if (!Z || typeof q.widget_idx != "number" || !Array.isArray(Z.widgets)) return null;
      const ne = Z.widgets[q.widget_idx];
      if (!ne || typeof ((Q = s.comfyApp) == null ? void 0 : Q.canvasPosToClientPos) != "function") return pe(Z);
      const _e = 10, Se = s.comfyApp.canvasPosToClientPos([Z.pos[0] + _e, Z.pos[1] + (ne.y ?? 0)]), oe = s.comfyApp.canvasPosToClientPos([Z.pos[0] + Z.size[0] - _e, Z.pos[1] + (ne.y ?? 0) + (ne.computedHeight ?? 24)]);
      return !Se || !oe ? pe(Z) : new DOMRect(Se[0], Se[1], oe[0] - Se[0], oe[1] - Se[1]);
    }
    function ze(q) {
      var Z, ne, _e, Se, oe, j;
      const A = ((_e = (ne = (Z = s.comfyApp) == null ? void 0 : Z.graph) == null ? void 0 : ne.getNodeById) == null ? void 0 : _e.call(ne, String(q.node_id))) ?? ((j = (oe = (Se = s.comfyApp) == null ? void 0 : Se.rootGraph) == null ? void 0 : oe.getNodeById) == null ? void 0 : j.call(oe, String(q.node_id)));
      return pe(A);
    }
    const $e = U(() => (w.value, I.value.inputs.map((q, A) => {
      const Z = ae(ue(q));
      return Z ? {
        key: `input-${A}-${q.node_id}-${q.widget_idx ?? "na"}`,
        style: Z,
        active: g.value === "inputs" && _.value === A
      } : null;
    }).filter((q) => !!q))), ke = U(() => (w.value, I.value.outputs.map((q, A) => {
      const Z = ae(ze(q));
      return Z ? {
        key: `output-${A}-${q.node_id}-${q.selector ?? "primary"}`,
        style: Z,
        active: g.value === "outputs" && h.value === A
      } : null;
    }).filter((q) => !!q)));
    function ce(q, A) {
      var j;
      const Z = Array.isArray(q.widgets) ? q.widgets.indexOf(A) : -1, ne = I.value.inputs.findIndex(
        (Ae) => String(Ae.node_id) === String(q.id) && Ae.widget_idx === Z
      );
      if (ne >= 0) {
        _.value = ne;
        return;
      }
      const _e = typeof ((j = A == null ? void 0 : A.options) == null ? void 0 : j.property) == "string" ? A.options.property : void 0, Se = (A == null ? void 0 : A.name) || _e || "input", oe = {
        name: E(String(Se), `input_${I.value.inputs.length + 1}`),
        display_name: String((A == null ? void 0 : A.name) || _e || `Input ${I.value.inputs.length + 1}`),
        type: L(A == null ? void 0 : A.type),
        node_id: String(q.id),
        widget_idx: Z >= 0 ? Z : void 0,
        field_key: _e,
        required: !0,
        default: (A == null ? void 0 : A.value) ?? ""
      };
      I.value.inputs.push(oe), _.value = I.value.inputs.length - 1;
    }
    function W(q, A) {
      const Z = Array.isArray(q.outputs) ? q.outputs.indexOf(A) : -1, ne = Z >= 0 ? `slot:${Z}` : "primary", _e = I.value.outputs.findIndex(
        (oe) => String(oe.node_id) === String(q.id) && (oe.selector || "primary") === ne
      );
      if (_e >= 0) {
        h.value = _e;
        return;
      }
      const Se = {
        name: E(String((A == null ? void 0 : A.name) || "output"), `output_${I.value.outputs.length + 1}`),
        display_name: String((A == null ? void 0 : A.name) || `Output ${I.value.outputs.length + 1}`),
        type: L(A == null ? void 0 : A.type),
        node_id: String(q.id),
        selector: ne
      };
      I.value.outputs.push(Se), h.value = I.value.outputs.length - 1;
    }
    function de(q) {
      var Te, xe, Le, Me, Q, ge, he, Ke, Be, We, Xe;
      if (!l.value || J(q.target)) {
        x.value = null, C.value = null;
        return;
      }
      const A = (Te = s.comfyApp) == null ? void 0 : Te.canvas;
      if (!A) {
        x.value = null, C.value = null;
        return;
      }
      const Z = (xe = A.convertEventToCanvasOffset) == null ? void 0 : xe.call(A, q);
      if (!Z || Z.length < 2) {
        x.value = null, C.value = null;
        return;
      }
      const [ne, _e] = Z, Se = A.graph || ((Le = s.comfyApp) == null ? void 0 : Le.graph) || ((Me = s.comfyApp) == null ? void 0 : Me.rootGraph), oe = ((Q = Se == null ? void 0 : Se.getNodeOnPos) == null ? void 0 : Q.call(Se, ne, _e, A.visible_nodes)) || ((ge = A.getNodeOnPos) == null ? void 0 : ge.call(A, ne, _e)) || ee(q.target);
      if (!oe) {
        x.value = null, C.value = null;
        return;
      }
      if (g.value === "inputs") {
        const qe = (he = oe.getWidgetOnPos) == null ? void 0 : he.call(oe, ne, _e, !0);
        if (!qe) {
          x.value = null, C.value = null;
          return;
        }
        const dt = Array.isArray(oe.widgets) ? oe.widgets.indexOf(qe) : -1, ct = ae(((Ke = Oe(oe.id, dt)) == null ? void 0 : Ke.getBoundingClientRect()) ?? ue({
          node_id: String(oe.id),
          widget_idx: dt >= 0 ? dt : void 0
        }));
        if (!ct) {
          x.value = null, C.value = null;
          return;
        }
        x.value = {
          kind: "input",
          label: `${(qe == null ? void 0 : qe.name) || "widget"} · Node ${oe.id}`
        }, C.value = { kind: "input", style: ct };
        return;
      }
      const j = ((Be = oe.getOutputOnPos) == null ? void 0 : Be.call(oe, [ne, _e])) || ((Xe = (We = oe.constructor) == null ? void 0 : We.nodeData) != null && Xe.output_node ? { name: oe.title || oe.type || "output" } : null);
      if (!j) {
        x.value = null, C.value = null;
        return;
      }
      const Ae = ae(pe(oe));
      if (!Ae) {
        x.value = null, C.value = null;
        return;
      }
      x.value = {
        kind: "output",
        label: `${(j == null ? void 0 : j.name) || oe.title || oe.type || "output"} · Node ${oe.id}`
      }, C.value = { kind: "output", style: Ae };
    }
    function B(q) {
      var Ae, Te, xe, Le, Me, Q, ge, he, Ke, Be, We, Xe;
      if (!l.value || !v.value || q.button !== 0 || J(q.target)) return;
      const A = (Ae = s.comfyApp) == null ? void 0 : Ae.canvas;
      if (!A) return;
      const Z = (Te = A.convertEventToCanvasOffset) == null ? void 0 : Te.call(A, q);
      if (!Z || Z.length < 2) return;
      const [ne, _e] = Z, Se = A.graph || ((xe = s.comfyApp) == null ? void 0 : xe.graph) || ((Le = s.comfyApp) == null ? void 0 : Le.rootGraph);
      let oe = ((Me = Se == null ? void 0 : Se.getNodeOnPos) == null ? void 0 : Me.call(Se, ne, _e, A.visible_nodes)) || ((Q = A.getNodeOnPos) == null ? void 0 : Q.call(A, ne, _e)) || ee(q.target);
      if (!oe) return;
      if (g.value === "inputs") {
        const qe = (ge = oe.getWidgetOnPos) == null ? void 0 : ge.call(oe, ne, _e, !0);
        if (!qe) return;
        q.preventDefault(), q.stopImmediatePropagation(), q.stopPropagation(), Array.isArray(A.graph_mouse) && (A.graph_mouse[0] = ne, A.graph_mouse[1] = _e), (he = A.selectNode) == null || he.call(A, oe, !1), ce(oe, qe);
        return;
      }
      const j = ((Ke = oe.getOutputOnPos) == null ? void 0 : Ke.call(oe, [ne, _e])) || ((We = (Be = oe.constructor) == null ? void 0 : Be.nodeData) != null && We.output_node ? {
        name: oe.title || oe.type || "output",
        type: "image"
      } : null);
      j && (q.preventDefault(), q.stopImmediatePropagation(), q.stopPropagation(), Array.isArray(A.graph_mouse) && (A.graph_mouse[0] = ne, A.graph_mouse[1] = _e), (Xe = A.selectNode) == null || Xe.call(A, oe, !1), W(oe, j));
    }
    function N() {
      document.addEventListener("pointerdown", B, !0), document.addEventListener("pointermove", de, !0);
    }
    function re() {
      document.removeEventListener("pointerdown", B, !0), document.removeEventListener("pointermove", de, !0);
    }
    async function Ve() {
      if (r.value) {
        u.value = !0, m.value = null;
        try {
          f.value = await o(r.value), v.value = O(f.value.execution_contract);
        } catch (q) {
          m.value = q instanceof Error ? q.message : "Failed to load workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    async function Fe() {
      if (!(!v.value || !r.value)) {
        c.value = !0, m.value = null;
        try {
          f.value = await a(r.value, v.value), v.value = O(f.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: r.value }
          })), X({ reopenContract: !0 });
        } catch (q) {
          m.value = q instanceof Error ? q.message : "Failed to save workflow contract";
        } finally {
          c.value = !1;
        }
      }
    }
    function F() {
      r.value && (window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      })), window.setTimeout(() => {
        window.dispatchEvent(new CustomEvent("comfygit:open-workflow-contract", {
          detail: { workflowName: r.value }
        }));
      }, 120));
    }
    function X(q) {
      l.value = !1, x.value = null, C.value = null, q != null && q.reopenContract && F();
    }
    async function me(q) {
      var ne, _e;
      const Z = (_e = (ne = q.detail) == null ? void 0 : ne.workflowName) == null ? void 0 : _e.trim();
      Z && (r.value = Z, g.value = "inputs", _.value = null, h.value = null, l.value = !0, await Ve());
    }
    function Pe(q) {
      q.key === "Escape" && l.value && X({ reopenContract: !0 });
    }
    function Ie() {
      if (S != null) return;
      const q = () => {
        if (w.value += 1, !l.value) {
          S = null;
          return;
        }
        S = window.requestAnimationFrame(q);
      };
      S = window.requestAnimationFrame(q);
    }
    function Ee() {
      S != null && (window.cancelAnimationFrame(S), S = null);
    }
    return St(l, (q) => {
      q ? (N(), Ie()) : (re(), Ee());
    }), lt(() => {
      window.addEventListener("comfygit:open-io-mapping", me), window.addEventListener("keydown", Pe);
    }), da(() => {
      re(), Ee(), window.removeEventListener("comfygit:open-io-mapping", me), window.removeEventListener("keydown", Pe);
    }), (q, A) => l.value ? (n(), i("div", ZD, [
      t("div", eL, [
        (n(!0), i(H, null, ye($e.value, (Z) => (n(), i("div", {
          key: Z.key,
          class: Ne(["io-highlight", "io-highlight-input", { active: Z.active }]),
          style: Ft(Z.style)
        }, null, 6))), 128)),
        (n(!0), i(H, null, ye(ke.value, (Z) => (n(), i("div", {
          key: Z.key,
          class: Ne(["io-highlight", "io-highlight-output", { active: Z.active }]),
          style: Ft(Z.style)
        }, null, 6))), 128)),
        C.value ? (n(), i("div", {
          key: 0,
          class: Ne(["io-highlight", C.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Ft(C.value.style)
        }, null, 6)) : y("", !0)
      ]),
      t("div", tL, [
        t("div", sL, [
          A[6] || (A[6] = t("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          t("div", oL, d(r.value) + " · Click " + d(g.value === "inputs" ? "input widgets" : "output slots") + " on the graph to add them to the contract. ", 1),
          x.value ? (n(), i("div", nL, " Hovering " + d(x.value.kind) + ": " + d(x.value.label), 1)) : y("", !0)
        ]),
        t("div", aL, [
          k(De, {
            size: "sm",
            variant: g.value === "inputs" ? "primary" : "secondary",
            onClick: A[0] || (A[0] = (Z) => g.value = "inputs")
          }, {
            default: p(() => [...A[7] || (A[7] = [
              $(" Map Inputs ", -1)
            ])]),
            _: 1
          }, 8, ["variant"]),
          k(De, {
            size: "sm",
            variant: g.value === "outputs" ? "primary" : "secondary",
            onClick: A[1] || (A[1] = (Z) => g.value = "outputs")
          }, {
            default: p(() => [...A[8] || (A[8] = [
              $(" Map Outputs ", -1)
            ])]),
            _: 1
          }, 8, ["variant"]),
          k(De, {
            size: "sm",
            variant: "secondary",
            onClick: A[2] || (A[2] = (Z) => X({ reopenContract: !0 }))
          }, {
            default: p(() => [...A[9] || (A[9] = [
              $(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("aside", lL, [
        t("div", iL, [
          u.value ? (n(), i("div", rL, " Loading workflow contract... ")) : m.value ? (n(), i("div", uL, d(m.value), 1)) : v.value ? (n(), i(H, { key: 2 }, [
            t("section", cL, [
              t("div", dL, [
                t("span", mL, d(M.value), 1),
                t("span", fL, d(I.value.inputs.length) + " input" + d(I.value.inputs.length === 1 ? "" : "s"), 1),
                t("span", vL, d(I.value.outputs.length) + " output" + d(I.value.outputs.length === 1 ? "" : "s"), 1)
              ]),
              t("div", pL, [
                k(it, { label: "Default Contract" }, {
                  default: p(() => [
                    k(ot, {
                      "model-value": v.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": G
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                k(it, { label: "Display Name" }, {
                  default: p(() => [
                    k(ot, {
                      modelValue: I.value.display_name,
                      "onUpdate:modelValue": A[3] || (A[3] = (Z) => I.value.display_name = Z),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              k(it, { label: "Description" }, {
                default: p(() => [
                  k(yn, {
                    modelValue: I.value.description,
                    "onUpdate:modelValue": A[4] || (A[4] = (Z) => I.value.description = Z),
                    rows: 2,
                    placeholder: "Optional description for this contract"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            t("section", gL, [
              t("div", hL, [
                k(Ls, { variant: "section" }, {
                  default: p(() => [...A[10] || (A[10] = [
                    $("INPUTS", -1)
                  ])]),
                  _: 1
                }),
                k(De, {
                  size: "sm",
                  variant: "secondary",
                  onClick: ie
                }, {
                  default: p(() => [...A[11] || (A[11] = [
                    $(" Add Input ", -1)
                  ])]),
                  _: 1
                })
              ]),
              I.value.inputs.length ? y("", !0) : (n(), i("div", yL, " No inputs configured. ")),
              (n(!0), i(H, null, ye(I.value.inputs, (Z, ne) => (n(), i("div", {
                key: `input-${ne}`,
                class: Ne(["item-card", { selected: g.value === "inputs" && _.value === ne }]),
                onClick: (_e) => _.value = ne
              }, [
                t("div", _L, [
                  t("div", null, [
                    t("div", kL, d(Z.name || `Input ${ne + 1}`), 1),
                    t("div", bL, [
                      $(" Node " + d(Z.node_id || "?"), 1),
                      Z.widget_idx !== void 0 ? (n(), i(H, { key: 0 }, [
                        $(" · Widget " + d(Z.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ])
                  ]),
                  k(De, {
                    size: "sm",
                    variant: "ghost",
                    onClick: gt((_e) => Y(ne), ["stop"])
                  }, {
                    default: p(() => [...A[12] || (A[12] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                t("div", $L, [
                  k(it, { label: "Name" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: Z.name,
                        "onUpdate:modelValue": (_e) => Z.name = _e,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Display Name" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: Z.display_name,
                        "onUpdate:modelValue": (_e) => Z.display_name = _e,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Type" }, {
                    default: p(() => [
                      k(uo, {
                        "model-value": Z.type,
                        options: z,
                        "full-width": "",
                        "onUpdate:modelValue": (_e) => Z.type = _e
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Required" }, {
                    default: p(() => [
                      k(uo, {
                        "model-value": Z.required ? "true" : "false",
                        options: T,
                        "full-width": "",
                        "onUpdate:modelValue": (_e) => Z.required = _e === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Node ID" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: Z.node_id,
                        "onUpdate:modelValue": (_e) => Z.node_id = _e,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Widget Index" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: Z.widget_idx,
                        "onUpdate:modelValue": (_e) => Z.widget_idx = _e,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Field Key" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: Z.field_key,
                        "onUpdate:modelValue": (_e) => Z.field_key = _e,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Default" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: Z.default,
                        "onUpdate:modelValue": (_e) => Z.default = _e,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])
              ], 10, wL))), 128))
            ]),
            t("section", CL, [
              t("div", xL, [
                k(Ls, { variant: "section" }, {
                  default: p(() => [...A[13] || (A[13] = [
                    $("OUTPUTS", -1)
                  ])]),
                  _: 1
                }),
                k(De, {
                  size: "sm",
                  variant: "secondary",
                  onClick: le
                }, {
                  default: p(() => [...A[14] || (A[14] = [
                    $(" Add Output ", -1)
                  ])]),
                  _: 1
                })
              ]),
              I.value.outputs.length ? y("", !0) : (n(), i("div", SL, " No outputs configured. ")),
              (n(!0), i(H, null, ye(I.value.outputs, (Z, ne) => (n(), i("div", {
                key: `output-${ne}`,
                class: Ne(["item-card", { selected: g.value === "outputs" && h.value === ne }]),
                onClick: (_e) => h.value = ne
              }, [
                t("div", EL, [
                  t("div", null, [
                    t("div", TL, d(Z.name || `Output ${ne + 1}`), 1),
                    t("div", PL, [
                      $(" Node " + d(Z.node_id || "?"), 1),
                      Z.selector ? (n(), i(H, { key: 0 }, [
                        $(" · " + d(Z.selector), 1)
                      ], 64)) : y("", !0)
                    ])
                  ]),
                  k(De, {
                    size: "sm",
                    variant: "ghost",
                    onClick: gt((_e) => K(ne), ["stop"])
                  }, {
                    default: p(() => [...A[15] || (A[15] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                t("div", RL, [
                  k(it, { label: "Name" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: Z.name,
                        "onUpdate:modelValue": (_e) => Z.name = _e,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Display Name" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: Z.display_name,
                        "onUpdate:modelValue": (_e) => Z.display_name = _e,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Type" }, {
                    default: p(() => [
                      k(uo, {
                        "model-value": Z.type,
                        options: z,
                        "full-width": "",
                        "onUpdate:modelValue": (_e) => Z.type = _e
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Node ID" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: Z.node_id,
                        "onUpdate:modelValue": (_e) => Z.node_id = _e,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  k(it, { label: "Selector" }, {
                    default: p(() => [
                      k(ot, {
                        modelValue: Z.selector,
                        "onUpdate:modelValue": (_e) => Z.selector = _e,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])
              ], 10, IL))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        t("div", ML, [
          k(De, {
            variant: "secondary",
            onClick: A[5] || (A[5] = (Z) => X({ reopenContract: !0 }))
          }, {
            default: p(() => [...A[16] || (A[16] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          k(De, {
            variant: "primary",
            loading: c.value,
            onClick: Fe
          }, {
            default: p(() => [...A[17] || (A[17] = [
              $(" Save Contract ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ])
    ])) : y("", !0);
  }
}), LL = /* @__PURE__ */ Ce(DL, [["__scopeId", "data-v-1f482230"]]), NL = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', UL = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', OL = {
  comfy: NL,
  phosphor: UL
}, bl = "comfy", cu = "comfygit-theme";
let no = null, du = bl;
function AL() {
  try {
    const e = localStorage.getItem(cu);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return bl;
}
function mu(e = bl) {
  no && no.remove(), no = document.createElement("style"), no.id = "comfygit-theme-styles", no.setAttribute("data-theme", e), no.textContent = OL[e], document.head.appendChild(no), document.body.setAttribute("data-comfygit-theme", e), du = e;
  try {
    localStorage.setItem(cu, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function zL() {
  return du;
}
function VL(e) {
  mu(e);
}
function FL(e) {
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
const BL = AL();
mu(BL);
sessionStorage.removeItem("ComfyGit.LastView");
sessionStorage.removeItem("ComfyGit.LastSection");
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), VL(e);
  },
  getTheme: () => {
    const e = zL();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let Ps = null, ln = null, Jt = null, rn = null, Ho = null, wi = null, Ko = null, _i = null, qo = null, ki = null;
const Do = b(null);
let wn = "no_workspace", fu = !1;
async function Wn() {
  var e;
  if (!((e = Qt) != null && e.api)) return null;
  try {
    const s = await Qt.api.fetchApi("/v2/comfygit/status");
    s.ok && (Do.value = await s.json());
  } catch {
  }
}
async function Ja() {
  var e;
  if ((e = Qt) != null && e.api)
    try {
      const s = await Qt.api.fetchApi("/v2/setup/status");
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
function WL() {
  if (!Do.value) return !1;
  const e = Do.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Do.value.has_changes;
}
function Un(e) {
  Qo(), Ps = document.createElement("div"), Ps.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", Ps.appendChild(s), Ps.addEventListener("click", (a) => {
    a.target === Ps && Qo();
  });
  const o = (a) => {
    a.key === "Escape" && (Qo(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), ln = $n({
    render: () => Ao(WR, {
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
  Yo(), Jt = document.createElement("div"), Jt.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Jt.style.position = "fixed", Jt.style.top = `${s.bottom + 8}px`, Jt.style.right = `${window.innerWidth - s.right}px`, Jt.style.zIndex = "10001";
  const o = (l) => {
    Jt && !Jt.contains(l.target) && l.target !== e && (Yo(), document.removeEventListener("mousedown", o));
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
        Yo(), GL(l.success, l.message), Wn().then(un);
      }
    })
  }), rn.mount(Jt), document.body.appendChild(Jt);
}
function Yo() {
  rn && (rn.unmount(), rn = null), Jt && (Jt.remove(), Jt = null);
}
function GL(e, s) {
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
function jL() {
  Ho || (Ho = document.createElement("div"), Ho.className = "comfygit-download-queue-root", wi = $n({
    render: () => Ao(OM)
  }), wi.mount(Ho), document.body.appendChild(Ho), console.log("[ComfyGit] Model download queue mounted"));
}
function HL() {
  Ko || (Ko = document.createElement("div"), Ko.className = "comfygit-missing-resources-root", _i = $n({
    render: () => Ao(XD)
  }), _i.mount(Ko), document.body.appendChild(Ko), console.log("[ComfyGit] Missing resources popup mounted"));
}
function KL() {
  qo || (qo = document.createElement("div"), qo.className = "comfygit-io-mapping-root", ki = $n({
    render: () => Ao(LL, {
      comfyApp: Qt
    })
  }), ki.mount(qo), document.body.appendChild(qo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let jt = null;
function un() {
  if (!jt) return;
  const e = jt.querySelector(".commit-indicator");
  e && (e.style.display = WL() ? "block" : "none");
}
function Xa() {
  if (!jt) return;
  const e = wn !== "managed";
  jt.disabled = e, jt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
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
Qt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => Un()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        jt && !jt.disabled && bi(jt);
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
          Qt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          Qt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = Un, jt = document.createElement("button"), jt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", jt.innerHTML = 'Commit <span class="commit-indicator"></span>', jt.title = "Quick Commit", jt.onclick = () => bi(jt), e.appendChild(s), e.appendChild(jt), (r = (l = Qt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Qt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), jL(), HL(), KL(), window.addEventListener("comfygit:open-panel", ((u) => {
      var m;
      const c = (m = u.detail) == null ? void 0 : m.initialView;
      Un(c);
    })), window.addEventListener("comfygit:close-panel", (() => {
      Qo();
    }));
    const { loadPendingDownloads: o } = zo();
    o(), await Promise.all([Wn(), Ja()]), un(), Xa(), Qa(), setTimeout(Qa, 100), setInterval(async () => {
      await Promise.all([Wn(), Ja()]), un(), Xa();
    }, 3e4);
    const a = Qt.api;
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
        const C = document.createElement("div");
        C.textContent = "Node installation failed", C.style.cssText = "font-weight: 600; color: #e53935;", x.appendChild(C);
        const S = document.createElement("div");
        S.textContent = "Dependency conflict detected", S.style.cssText = "font-size: 12px; opacity: 0.8;", x.appendChild(S), h.appendChild(x);
        const z = document.createElement("button");
        z.textContent = "View Logs", z.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, z.onmouseover = () => z.style.background = "#c62828", z.onmouseout = () => z.style.background = "#e53935", z.onclick = () => {
          h.remove(), Un("debug-env");
        }, h.appendChild(z);
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
        `, T.onmouseover = () => T.style.opacity = "1", T.onmouseout = () => T.style.opacity = "0.6", T.onclick = () => h.remove(), h.appendChild(T), document.body.appendChild(h), console.log("[ComfyGit] Manager error toast displayed:", g), setTimeout(() => {
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
        const C = document.createElement("div");
        C.textContent = "To apply changes, please restart ComfyUI", C.style.cssText = "font-weight: 500; color: #fff;", x.appendChild(C);
        const S = document.createElement("div");
        S.textContent = `${g} node package${g > 1 ? "s" : ""} ready to install`, S.style.cssText = "font-size: 12px; opacity: 0.7;", x.appendChild(S), h.appendChild(x);
        const z = document.createElement("button");
        z.textContent = "Apply Changes", z.style.cssText = `
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
        `, z.onmouseover = () => z.style.background = "rgba(255,255,255,0.1)", z.onmouseout = () => z.style.background = "transparent", z.onclick = async () => {
          z.disabled = !0, z.textContent = "Restarting...", z.style.opacity = "0.7", C.textContent = "Restarting...", S.textContent = "Applying changes, please wait...";
          try {
            const I = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Qt.refreshComboInNodes && (await Qt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), w.textContent = "✅", C.textContent = "Nodes Installed", C.style.color = "#4caf50", S.textContent = `${g} package${g > 1 ? "s" : ""} installed successfully!`, h.style.borderColor = "#4caf50", z.style.display = "none", setTimeout(() => {
                  h.remove();
                }, 3e3);
              } catch (M) {
                console.error("[ComfyGit] Failed to refresh nodes:", M), w.textContent = "✅", C.textContent = "Restart Complete", C.style.color = "#4caf50", S.textContent = "Refresh the page to load new nodes.", h.style.borderColor = "#4caf50", z.style.display = "none";
              }
            };
            a.addEventListener("reconnected", I, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (I) {
            console.error("[ComfyGit] Failed to restart:", I), C.textContent = "Restart Failed", C.style.color = "#e53935", S.textContent = "Could not restart server. Try again.", h.style.borderColor = "#e53935", z.textContent = "Try Again", z.disabled = !1, z.style.opacity = "1";
          }
        }, h.appendChild(z);
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
        `, T.onmouseover = () => T.style.opacity = "1", T.onmouseout = () => T.style.opacity = "0.6", T.onclick = () => h.remove(), h.appendChild(T), document.body.appendChild(h), console.log(`[ComfyGit] Restart required notification displayed (${g} packages installed)`);
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
        const _ = FL(g.detail);
        _ && m(_);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (g) => {
        const _ = g, { count: h = 1 } = _.detail || {};
        f(h);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
