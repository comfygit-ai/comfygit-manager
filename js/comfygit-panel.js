import { app as Xt } from "../../scripts/app.js";
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
const wt = {}, To = [], xs = () => {
}, $i = () => !1, sa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), el = (e) => e.startsWith("onUpdate:"), Dt = Object.assign, tl = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, pu = Object.prototype.hasOwnProperty, vt = (e, s) => pu.call(e, s), Ye = Array.isArray, Po = (e) => _n(e) === "[object Map]", Ao = (e) => _n(e) === "[object Set]", xl = (e) => _n(e) === "[object Date]", et = (e) => typeof e == "function", It = (e) => typeof e == "string", fs = (e) => typeof e == "symbol", ht = (e) => e !== null && typeof e == "object", Ci = (e) => (ht(e) || et(e)) && et(e.then) && et(e.catch), xi = Object.prototype.toString, _n = (e) => xi.call(e), gu = (e) => _n(e).slice(8, -1), Si = (e) => _n(e) === "[object Object]", sl = (e) => It(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Zo = /* @__PURE__ */ Za(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), oa = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, hu = /-\w/g, ls = oa(
  (e) => e.replace(hu, (s) => s.slice(1).toUpperCase())
), yu = /\B([A-Z])/g, Qs = oa(
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
function Pe(e) {
  let s = "";
  if (It(e))
    s = e;
  else if (Ye(e))
    for (let o = 0; o < e.length; o++) {
      const a = Pe(e[o]);
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
    o = mo(e[a], s[a]);
  return o;
}
function mo(e, s) {
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
      if (c && !m || !c && m || !mo(e[u], s[u]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function ol(e, s) {
  return e.findIndex((o) => mo(o, s));
}
const Ti = (e) => !!(e && e.__v_isRef === !0), d = (e) => It(e) ? e : e == null ? "" : Ye(e) || ht(e) && (e.toString === xi || !et(e.toString)) ? Ti(e) ? d(e.value) : JSON.stringify(e, Pi, 2) : String(e), Pi = (e, s) => Ti(s) ? Pi(e, s.value) : Po(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [a, l], r) => (o[ba(a, r) + " =>"] = l, o),
    {}
  )
} : Ao(s) ? {
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
let Jt;
class Iu {
  constructor(s = !1) {
    this.detached = s, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Jt, !s && Jt && (this.index = (Jt.scopes || (Jt.scopes = [])).push(
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
      const o = Jt;
      try {
        return Jt = this, s();
      } finally {
        Jt = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Jt, Jt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Jt = this.prevScope, this.prevScope = void 0);
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
  return Jt;
}
let bt;
const $a = /* @__PURE__ */ new WeakSet();
class Ri {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Jt && Jt.active && Jt.effects.push(this);
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
let Mi = 0, en, tn;
function Di(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = tn, tn = e;
    return;
  }
  e.next = en, en = e;
}
function nl() {
  Mi++;
}
function al() {
  if (--Mi > 0)
    return;
  if (tn) {
    let s = tn;
    for (tn = void 0; s; ) {
      const o = s.next;
      s.next = void 0, s.flags &= -9, s = o;
    }
  }
  let e;
  for (; en; ) {
    let s = en;
    for (en = void 0; s; ) {
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === dn) || (e.globalVersion = dn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Oa(e))))
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
let dn = 0;
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
    this.version++, dn++, this.notify(s);
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
const Aa = /* @__PURE__ */ new WeakMap(), ro = Symbol(
  ""
), za = Symbol(
  ""
), mn = Symbol(
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
    dn++;
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
      u.forEach((p, _) => {
        (_ === "length" || _ === mn || !fs(_) && _ >= v) && c(p);
      });
    } else
      switch ((o !== void 0 || u.has(void 0)) && c(u.get(o)), f && c(u.get(mn)), s) {
        case "add":
          m ? f && c(u.get("length")) : (c(u.get(ro)), Po(e) && c(u.get(za)));
          break;
        case "delete":
          m || (c(u.get(ro)), Po(e) && c(u.get(za)));
          break;
        case "set":
          Po(e) && c(u.get(ro));
          break;
      }
  }
  al();
}
function $o(e) {
  const s = mt(e);
  return s === e ? s : (At(s, "iterate", mn), os(e) ? s : s.map(vs));
}
function ia(e) {
  return At(e = mt(e), "iterate", mn), e;
}
function Gs(e, s) {
  return Os(e) ? uo(e) ? No(vs(s)) : No(s) : vs(s);
}
const Ru = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ca(this, Symbol.iterator, (e) => Gs(this, e));
  },
  concat(...e) {
    return $o(this).concat(
      ...e.map((s) => Ye(s) ? $o(s) : s)
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
    return $o(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return xa(this, "lastIndexOf", e);
  },
  map(e, s) {
    return Is(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return Bo(this, "pop");
  },
  push(...e) {
    return Bo(this, "push", e);
  },
  reduce(e, ...s) {
    return El(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return El(this, "reduceRight", e, s);
  },
  shift() {
    return Bo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return Is(this, "some", e, s, void 0, arguments);
  },
  splice(...e) {
    return Bo(this, "splice", e);
  },
  toReversed() {
    return $o(this).toReversed();
  },
  toSorted(e) {
    return $o(this).toSorted(e);
  },
  toSpliced(...e) {
    return $o(this).toSpliced(...e);
  },
  unshift(...e) {
    return Bo(this, "unshift", e);
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
    const p = m.apply(e, r);
    return c ? vs(p) : p;
  }
  let f = o;
  u !== e && (c ? f = function(p, _) {
    return o.call(this, Gs(e, p), _, e);
  } : o.length > 2 && (f = function(p, _) {
    return o.call(this, p, _, e);
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
  At(a, "iterate", mn);
  const l = a[s](...o);
  return (l === -1 || l === !1) && cl(o[0]) ? (o[0] = mt(o[0]), a[s](...o)) : l;
}
function Bo(e, s, o = []) {
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
    return ht(c) ? l ? Gn(c) : Xs(c) : c;
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
    const c = u ? Number(o) < s.length : vt(s, o), m = Reflect.set(
      s,
      o,
      a,
      Bt(s) ? s : l
    );
    return s === mt(l) && (c ? Ks(a, r) && Rs(s, "set", o, a) : Rs(s, "add", o, a)), m;
  }
  deleteProperty(s, o) {
    const a = vt(s, o);
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
      Ye(s) ? "length" : ro
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
    const l = this.__v_raw, r = mt(l), u = Po(r), c = e === "entries" || e === Symbol.iterator && u, m = e === "keys" && u, f = l[e](...a), v = o ? Va : s ? No : vs;
    return !s && At(
      r,
      "iterate",
      m ? za : ro
    ), {
      // iterator protocol
      next() {
        const { value: p, done: _ } = f.next();
        return _ ? { value: p, done: _ } : {
          value: c ? [v(p[0]), v(p[1])] : v(p),
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
      const { has: m } = Sn(u), f = s ? Va : e ? No : vs;
      if (m.call(u, l))
        return f(r.get(l));
      if (m.call(u, c))
        return f(r.get(c));
      r !== u && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && At(mt(l), "iterate", ro), l.size;
    },
    has(l) {
      const r = this.__v_raw, u = mt(r), c = mt(l);
      return e || (Ks(l, c) && At(u, "has", l), At(u, "has", c)), l === c ? r.has(l) : r.has(l) || r.has(c);
    },
    forEach(l, r) {
      const u = this, c = u.__v_raw, m = mt(c), f = s ? Va : e ? No : vs;
      return !e && At(m, "iterate", ro), c.forEach((v, p) => l.call(r, f(v), f(p), u));
    }
  };
  return Dt(
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
    vt(o, l) && l in a ? o : a,
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
function Xs(e) {
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
function uo(e) {
  return Os(e) ? uo(e.__v_raw) : !!(e && e.__v_isReactive);
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
  return !vt(e, "__v_skip") && Object.isExtensible(e) && Ii(e, "__v_skip", !0), e;
}
const vs = (e) => ht(e) ? Xs(e) : e, No = (e) => ht(e) ? Gn(e) : e;
function Bt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
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
  return uo(e) ? e : new Proxy(e, Qu);
}
class Xu {
  constructor(s, o, a) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new il(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = dn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
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
let lo;
function ec(e, s = !1, o = lo) {
  if (o) {
    let a = jn.get(o);
    a || jn.set(o, a = []), a.push(e);
  }
}
function tc(e, s, o = wt) {
  const { immediate: a, deep: l, once: r, scheduler: u, augmentJob: c, call: m } = o, f = (P) => l ? P : os(P) || l === !1 || l === 0 ? Ms(P, 1) : Ms(P);
  let v, p, _, h, w = !1, x = !1;
  if (Bt(e) ? (p = () => e.value, w = os(e)) : uo(e) ? (p = () => f(e), w = !0) : Ye(e) ? (x = !0, w = e.some((P) => uo(P) || os(P)), p = () => e.map((P) => {
    if (Bt(P))
      return P.value;
    if (uo(P))
      return f(P);
    if (et(P))
      return m ? m(P, 2) : P();
  })) : et(e) ? s ? p = m ? () => m(e, 2) : e : p = () => {
    if (_) {
      Ns();
      try {
        _();
      } finally {
        Us();
      }
    }
    const P = lo;
    lo = v;
    try {
      return m ? m(e, 3, [h]) : e(h);
    } finally {
      lo = P;
    }
  } : p = xs, s && l) {
    const P = p, M = l === !0 ? 1 / 0 : l;
    p = () => Ms(P(), M);
  }
  const C = Eu(), S = () => {
    v.stop(), C && C.active && tl(C.effects, v);
  };
  if (r && s) {
    const P = s;
    s = (...M) => {
      P(...M), S();
    };
  }
  let U = x ? new Array(e.length).fill(En) : En;
  const I = (P) => {
    if (!(!(v.flags & 1) || !v.dirty && !P))
      if (s) {
        const M = v.run();
        if (l || w || (x ? M.some((A, j) => Ks(A, U[j])) : Ks(M, U))) {
          _ && _();
          const A = lo;
          lo = v;
          try {
            const j = [
              M,
              // pass undefined as the old value when it's changed for the first time
              U === En ? void 0 : x && U[0] === En ? [] : U,
              h
            ];
            U = M, m ? m(s, 3, j) : (
              // @ts-expect-error
              s(...j)
            );
          } finally {
            lo = A;
          }
        }
      } else
        v.run();
  };
  return c && c(I), v = new Ri(p), v.scheduler = u ? () => u(I, !1) : I, h = (P) => ec(P, !1, v), _ = v.onStop = () => {
    const P = jn.get(v);
    if (P) {
      if (m)
        m(P, 4);
      else
        for (const M of P) M();
      jn.delete(v);
    }
  }, s ? a ? I(!0) : U = v.run() : u ? u(I.bind(null, !0), !0) : v.run(), S.pause = v.pause.bind(v), S.resume = v.resume.bind(v), S.stop = S, S;
}
function Ms(e, s = 1 / 0, o) {
  if (s <= 0 || !ht(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, Bt(e))
    Ms(e.value, s, o);
  else if (Ye(e))
    for (let a = 0; a < e.length; a++)
      Ms(e[a], s, o);
  else if (Ao(e) || Po(e))
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
        for (let p = 0; p < v.length; p++)
          if (v[p](e, m, f) === !1)
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
const Kt = [];
let bs = -1;
const Ro = [];
let js = null, So = 0;
const Hi = /* @__PURE__ */ Promise.resolve();
let Hn = null;
function Mt(e) {
  const s = Hn || Hi;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function oc(e) {
  let s = bs + 1, o = Kt.length;
  for (; s < o; ) {
    const a = s + o >>> 1, l = Kt[a], r = fn(l);
    r < e || r === e && l.flags & 2 ? s = a + 1 : o = a;
  }
  return s;
}
function dl(e) {
  if (!(e.flags & 1)) {
    const s = fn(e), o = Kt[Kt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= fn(o) ? Kt.push(e) : Kt.splice(oc(s), 0, e), e.flags |= 1, Ki();
  }
}
function Ki() {
  Hn || (Hn = Hi.then(Yi));
}
function nc(e) {
  Ye(e) ? Ro.push(...e) : js && e.id === -1 ? js.splice(So + 1, 0, e) : e.flags & 1 || (Ro.push(e), e.flags |= 1), Ki();
}
function Tl(e, s, o = bs + 1) {
  for (; o < Kt.length; o++) {
    const a = Kt[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      Kt.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function qi(e) {
  if (Ro.length) {
    const s = [...new Set(Ro)].sort(
      (o, a) => fn(o) - fn(a)
    );
    if (Ro.length = 0, js) {
      js.push(...s);
      return;
    }
    for (js = s, So = 0; So < js.length; So++) {
      const o = js[So];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    js = null, So = 0;
  }
}
const fn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Yi(e) {
  try {
    for (bs = 0; bs < Kt.length; bs++) {
      const s = Kt[bs];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), kn(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; bs < Kt.length; bs++) {
      const s = Kt[bs];
      s && (s.flags &= -2);
    }
    bs = -1, Kt.length = 0, qi(), Hn = null, (Kt.length || Ro.length) && Yi();
  }
}
let Ut = null, Ji = null;
function Kn(e) {
  const s = Ut;
  return Ut = e, Ji = e && e.type.__scopeId || null, s;
}
function g(e, s = Ut, o) {
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
function nt(e, s) {
  if (Ut === null)
    return e;
  const o = va(Ut), a = e.dirs || (e.dirs = []);
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
function so(e, s, o, a) {
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
const Qi = Symbol("_vte"), Xi = (e) => e.__isTeleport, sn = (e) => e && (e.disabled || e.disabled === ""), Pl = (e) => e && (e.defer || e.defer === ""), Rl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Ml = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Fa = (e, s) => {
  const o = e && e.to;
  return It(o) ? s ? s(o) : null : o;
}, Zi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, a, l, r, u, c, m, f) {
    const {
      mc: v,
      pc: p,
      pbc: _,
      o: { insert: h, querySelector: w, createText: x, createComment: C }
    } = f, S = sn(s.props);
    let { shapeFlag: U, children: I, dynamicChildren: P } = s;
    if (e == null) {
      const M = s.el = x(""), A = s.anchor = x("");
      h(M, o, a), h(A, o, a);
      const j = (L, ie) => {
        U & 16 && v(
          I,
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
        L && (u !== "svg" && Rl(L) ? u = "svg" : u !== "mathml" && Ml(L) && (u = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(L), S || (j(L, ie), An(s, !1)));
      };
      S && (j(o, A), An(s, !0)), Pl(s.props) ? (s.el.__isMounted = !1, jt(() => {
        E(), delete s.el.__isMounted;
      }, r)) : E();
    } else {
      if (Pl(s.props) && e.el.__isMounted === !1) {
        jt(() => {
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
      const M = s.anchor = e.anchor, A = s.target = e.target, j = s.targetAnchor = e.targetAnchor, E = sn(e.props), L = E ? o : A, ie = E ? M : j;
      if (u === "svg" || Rl(A) ? u = "svg" : (u === "mathml" || Ml(A)) && (u = "mathml"), P ? (_(
        e.dynamicChildren,
        P,
        L,
        l,
        r,
        u,
        c
      ), gl(e, s, !0)) : m || p(
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
        A,
        j,
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
      target: p,
      props: _
    } = e;
    if (p && (l(f), l(v)), r && l(m), u & 16) {
      const h = r || !sn(_);
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
  const { el: u, anchor: c, shapeFlag: m, children: f, props: v } = e, p = r === 2;
  if (p && a(u, s, o), (!p || sn(v)) && m & 16)
    for (let _ = 0; _ < f.length; _++)
      l(
        f[_],
        s,
        o,
        2
      );
  p && a(c, s, o);
}
function ac(e, s, o, a, l, r, {
  o: { nextSibling: u, parentNode: c, querySelector: m, insert: f, createText: v }
}, p) {
  function _(x, C, S, U) {
    C.anchor = p(
      u(x),
      C,
      c(x),
      o,
      a,
      l,
      r
    ), C.targetStart = S, C.targetAnchor = U;
  }
  const h = s.target = Fa(
    s.props,
    m
  ), w = sn(s.props);
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
        s.targetAnchor || er(h, s, v, f), p(
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
const Ot = Zi;
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
  return at(() => {
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
      let f = vn(
        m,
        u,
        a,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (p) => f = p
      );
      m.type !== zt && fo(m, f);
      let v = o.subTree && Dl(o.subTree);
      if (v && v.type !== zt && !io(v, m) && or(o).type !== zt) {
        let p = vn(
          v,
          u,
          a,
          o
        );
        if (fo(v, p), c === "out-in" && m.type !== zt)
          return a.isLeaving = !0, p.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, v = void 0;
          }, Sa(r);
        c === "in-out" && m.type !== zt ? p.delayLeave = (_, h, w) => {
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
function vn(e, s, o, a, l) {
  const {
    appear: r,
    mode: u,
    persisted: c = !1,
    onBeforeEnter: m,
    onEnter: f,
    onAfterEnter: v,
    onEnterCancelled: p,
    onBeforeLeave: _,
    onLeave: h,
    onAfterLeave: w,
    onLeaveCancelled: x,
    onBeforeAppear: C,
    onAppear: S,
    onAfterAppear: U,
    onAppearCancelled: I
  } = s, P = String(e.key), M = ar(o, e), A = (L, ie) => {
    L && ps(
      L,
      a,
      9,
      ie
    );
  }, j = (L, ie) => {
    const le = ie[1];
    A(L, ie), Ye(L) ? L.every((ne) => ne.length <= 1) && le() : L.length <= 1 && le();
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
      const le = M[P];
      le && io(e, le) && le.el[Ts] && le.el[Ts](), A(ie, [L]);
    },
    enter(L) {
      let ie = f, le = v, ne = p;
      if (!o.isMounted)
        if (r)
          ie = S || f, le = U || v, ne = I || p;
        else
          return;
      let te = !1;
      const K = L[Pn] = (X) => {
        te || (te = !0, X ? A(ne, [L]) : A(le, [L]), E.delayedLeave && E.delayedLeave(), L[Pn] = void 0);
      };
      ie ? j(ie, [L, K]) : K();
    },
    leave(L, ie) {
      const le = String(e.key);
      if (L[Pn] && L[Pn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return ie();
      A(_, [L]);
      let ne = !1;
      const te = L[Ts] = (K) => {
        ne || (ne = !0, ie(), K ? A(x, [L]) : A(w, [L]), L[Ts] = void 0, M[le] === e && delete M[le]);
      };
      M[le] = e, h ? j(h, [L, te]) : te();
    },
    clone(L) {
      const ie = vn(
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
    return e = Ys(e), e.children = null, e;
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
function fo(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, fo(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function ml(e, s = !1, o) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let u = e[r];
    const c = o == null ? u.key : String(o) + String(u.key != null ? u.key : r);
    u.type === H ? (u.patchFlag & 128 && l++, a = a.concat(
      ml(u.children, s, c)
    )) : (s || u.type !== zt) && a.push(c != null ? Ys(u, { key: c }) : u);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function $e(e, s) {
  return et(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Dt({ name: e.name }, s, { setup: e })
  ) : e;
}
function lr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const qn = /* @__PURE__ */ new WeakMap();
function on(e, s, o, a, l = !1) {
  if (Ye(e)) {
    e.forEach(
      (w, x) => on(
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
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && on(e, s, o, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? va(a.component) : a.el, u = l ? null : r, { i: c, r: m } = e, f = s && s.r, v = c.refs === wt ? c.refs = {} : c.refs, p = c.setupState, _ = mt(p), h = p === wt ? $i : (w) => vt(_, w);
  if (f != null && f !== m) {
    if (Ll(s), It(f))
      v[f] = null, h(f) && (p[f] = null);
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
          const S = w ? h(m) ? p[m] : v[m] : m.value;
          if (l)
            Ye(S) && tl(S, r);
          else if (Ye(S))
            S.includes(r) || S.push(r);
          else if (w)
            v[m] = [r], h(m) && (p[m] = v[m]);
          else {
            const U = [r];
            m.value = U, e.k && (v[e.k] = U);
          }
        } else w ? (v[m] = u, h(m) && (p[m] = u)) : x && (m.value = u, e.k && (v[e.k] = u));
      };
      if (u) {
        const S = () => {
          C(), qn.delete(e);
        };
        S.id = -1, qn.set(e, S), jt(S, o);
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
  Zs(() => {
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
  (!hn || e === "sp") && ca(e, (...a) => s(...a), o);
}, dc = As("bm"), at = As("m"), mc = As(
  "bu"
), rr = As("u"), da = As(
  "bum"
), Zs = As("um"), fc = As(
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
      Nl(l[e] || r[e], s) || // global registration
      Nl(l.appContext[e], s)
    );
    return !u && a ? r : u;
  }
}
function Nl(e, s) {
  return e && (e[s] || e[ls(s)] || e[na(ls(s))]);
}
function we(e, s, o, a) {
  let l;
  const r = o, u = Ye(e);
  if (u || It(e)) {
    const c = u && uo(e);
    let m = !1, f = !1;
    c && (m = !os(e), f = Os(e), e = ia(e)), l = new Array(e.length);
    for (let v = 0, p = e.length; v < p; v++)
      l[v] = s(
        m ? f ? No(vs(e[v])) : vs(e[v]) : e[v],
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
function vo(e, s) {
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
  if (Ut.ce || Ut.parent && Mo(Ut.parent) && Ut.parent.ce) {
    const f = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), n(), R(
      H,
      null,
      [$("slot", o, a && a())],
      f ? -2 : 64
    );
  }
  let r = e[s];
  r && r._c && (r._d = !1), n();
  const u = r && cr(r(o)), c = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  u && u.key, m = R(
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
  return e.some((s) => gn(s) ? !(s.type === zt || s.type === H && !cr(s.children)) : !0) ? e : null;
}
const Ba = (e) => e ? Tr(e) ? va(e) : Ba(e.parent) : null, nn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Dt(/* @__PURE__ */ Object.create(null), {
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
), Ia = (e, s) => e !== wt && !e.__isScriptSetup && vt(e, s), wc = {
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
        if (l !== wt && vt(l, s))
          return u[s] = 2, l[s];
        if (vt(r, s))
          return u[s] = 3, r[s];
        if (o !== wt && vt(o, s))
          return u[s] = 4, o[s];
        Wa && (u[s] = 0);
      }
    }
    const f = nn[s];
    let v, p;
    if (f)
      return s === "$attrs" && At(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (v = c.__cssModules) && (v = v[s])
    )
      return v;
    if (o !== wt && vt(o, s))
      return u[s] = 4, o[s];
    if (
      // global properties
      p = m.config.globalProperties, vt(p, s)
    )
      return p[s];
  },
  set({ _: e }, s, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return Ia(l, s) ? (l[s] = o, !0) : a !== wt && vt(a, s) ? (a[s] = o, !0) : vt(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (r[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: a, appContext: l, props: r, type: u }
  }, c) {
    let m;
    return !!(o[c] || e !== wt && c[0] !== "$" && vt(e, c) || Ia(s, c) || vt(r, c) || vt(a, c) || vt(nn, c) || vt(l.config.globalProperties, c) || (m = u.__cssModules) && m[c]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : vt(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
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
    beforeMount: p,
    mounted: _,
    beforeUpdate: h,
    updated: w,
    activated: x,
    deactivated: C,
    beforeDestroy: S,
    beforeUnmount: U,
    destroyed: I,
    unmounted: P,
    render: M,
    renderTracked: A,
    renderTriggered: j,
    errorCaptured: E,
    serverPrefetch: L,
    // public API
    expose: ie,
    inheritAttrs: le,
    // assets
    components: ne,
    directives: te,
    filters: K
  } = s;
  if (f && kc(f, a, null), u)
    for (const Le in u) {
      const ae = u[Le];
      et(ae) && (a[Le] = ae.bind(o));
    }
  if (l) {
    const Le = l.call(o, o);
    ht(Le) && (e.data = Xs(Le));
  }
  if (Wa = !0, r)
    for (const Le in r) {
      const ae = r[Le], ye = et(ae) ? ae.bind(o, o) : et(ae.get) ? ae.get.bind(o, o) : xs, fe = !et(ae) && et(ae.set) ? ae.set.bind(o) : xs, Oe = O({
        get: ye,
        set: fe
      });
      Object.defineProperty(a, Le, {
        enumerable: !0,
        configurable: !0,
        get: () => Oe.value,
        set: (se) => Oe.value = se
      });
    }
  if (c)
    for (const Le in c)
      dr(c[Le], a, o, Le);
  if (m) {
    const Le = et(m) ? m.call(o) : m;
    Reflect.ownKeys(Le).forEach((ae) => {
      Ic(ae, Le[ae]);
    });
  }
  v && Ol(v, e, "c");
  function de(Le, ae) {
    Ye(ae) ? ae.forEach((ye) => Le(ye.bind(o))) : ae && Le(ae.bind(o));
  }
  if (de(dc, p), de(at, _), de(mc, h), de(rr, w), de(rc, x), de(uc, C), de(gc, E), de(pc, A), de(vc, j), de(da, U), de(Zs, P), de(fc, L), Ye(ie))
    if (ie.length) {
      const Le = e.exposed || (e.exposed = {});
      ie.forEach((ae) => {
        Object.defineProperty(Le, ae, {
          get: () => o[ae],
          set: (ye) => o[ae] = ye,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  M && e.render === xs && (e.render = M), le != null && (e.inheritAttrs = le), ne && (e.components = ne), te && (e.directives = te), L && lr(e);
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
  methods: Qo,
  computed: Qo,
  // lifecycle
  beforeCreate: Gt,
  created: Gt,
  beforeMount: Gt,
  mounted: Gt,
  beforeUpdate: Gt,
  updated: Gt,
  beforeDestroy: Gt,
  beforeUnmount: Gt,
  destroyed: Gt,
  unmounted: Gt,
  activated: Gt,
  deactivated: Gt,
  errorCaptured: Gt,
  serverPrefetch: Gt,
  // assets
  components: Qo,
  directives: Qo,
  // watch
  watch: Cc,
  // provide / inject
  provide: Al,
  inject: $c
};
function Al(e, s) {
  return s ? e ? function() {
    return Dt(
      et(e) ? e.call(this, this) : e,
      et(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function $c(e, s) {
  return Qo(Ga(e), Ga(s));
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
function Gt(e, s) {
  return e ? [...new Set([].concat(e, s))] : s;
}
function Qo(e, s) {
  return e ? Dt(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function zl(e, s) {
  return e ? Ye(e) && Ye(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : Dt(
    /* @__PURE__ */ Object.create(null),
    Ul(e),
    Ul(s ?? {})
  ) : s;
}
function Cc(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = Dt(/* @__PURE__ */ Object.create(null), e);
  for (const a in s)
    o[a] = Gt(e[a], s[a]);
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
    et(a) || (a = Dt({}, a)), l != null && !ht(l) && (l = null);
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
      use(v, ...p) {
        return u.has(v) || (v && et(v.install) ? (u.add(v), v.install(f, ...p)) : et(v) && (u.add(v), v(f, ...p))), f;
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
          const h = f._ceVNode || $(a, l);
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
      provide(v, p) {
        return r.provides[v] = p, f;
      },
      runWithContext(v) {
        const p = Do;
        Do = f;
        try {
          return v();
        } finally {
          Do = p;
        }
      }
    };
    return f;
  };
}
let Do = null;
function Ic(e, s) {
  if (Vt) {
    let o = Vt.provides;
    const a = Vt.parent && Vt.parent.provides;
    a === o && (o = Vt.provides = Object.create(a)), o[e] = s;
  }
}
function zn(e, s, o = !1) {
  const a = yl();
  if (a || Do) {
    let l = Do ? Do._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
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
  const { immediate: a, deep: l, flush: r, once: u } = o, c = Dt({}, o), m = s && a || !s && r !== "post";
  let f;
  if (hn) {
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
  let p = !1;
  r === "post" ? c.scheduler = (h) => {
    jt(h, v && v.suspense);
  } : r !== "sync" && (p = !0, c.scheduler = (h, w) => {
    w ? h() : dl(h);
  }), c.augmentJob = (h) => {
    s && (h.flags |= 4), p && (h.flags |= 2, v && (h.id = v.uid, h.i = v));
  };
  const _ = tc(e, s, c);
  return hn && (f ? f.push(_) : m && _()), _;
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
const Rc = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${ls(s)}Modifiers`] || e[`${Qs(s)}Modifiers`];
function Mc(e, s, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || wt;
  let l = o;
  const r = s.startsWith("update:"), u = r && Rc(a, s.slice(7));
  u && (u.trim && (l = o.map((v) => It(v) ? v.trim() : v)), u.number && (l = o.map(aa)));
  let c, m = a[c = ka(s)] || // also try camelCase event handler (#2249)
  a[c = ka(ls(s))];
  !m && r && (m = a[c = ka(Qs(s))]), m && ps(
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
      v && (c = !0, Dt(u, v));
    };
    !o && s.mixins.length && s.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  return !r && !c ? (ht(e) && a.set(e, null), null) : (Ye(r) ? r.forEach((m) => u[m] = null) : Dt(u, r), ht(e) && a.set(e, u), u);
}
function ma(e, s) {
  return !e || !sa(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), vt(e, s[0].toLowerCase() + s.slice(1)) || vt(e, Qs(s)) || vt(e, s));
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
    props: p,
    data: _,
    setupState: h,
    ctx: w,
    inheritAttrs: x
  } = e, C = Kn(e);
  let S, U;
  try {
    if (o.shapeFlag & 4) {
      const P = l || a, M = P;
      S = Cs(
        f.call(
          M,
          P,
          v,
          p,
          h,
          _,
          w
        )
      ), U = c;
    } else {
      const P = s;
      S = Cs(
        P.length > 1 ? P(
          p,
          { attrs: c, slots: u, emit: m }
        ) : P(
          p,
          null
        )
      ), U = s.props ? c : Lc(c);
    }
  } catch (P) {
    an.length = 0, ra(P, e, 1), S = $(zt);
  }
  let I = S;
  if (U && x !== !1) {
    const P = Object.keys(U), { shapeFlag: M } = I;
    P.length && M & 7 && (r && P.some(el) && (U = Nc(
      U,
      r
    )), I = Ys(I, U, !1, !0));
  }
  return o.dirs && (I = Ys(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(o.dirs) : o.dirs), o.transition && fo(I, o.transition), S = I, Kn(C), S;
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
      for (let p = 0; p < v.length; p++) {
        const _ = v[p];
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
      for (let p = 0; p < v.length; p++) {
        let _ = v[p];
        if (ma(e.emitsOptions, _))
          continue;
        const h = s[_];
        if (m)
          if (vt(r, _))
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
    for (const p in c)
      (!s || // for camelCase
      !vt(s, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Qs(p)) === p || !vt(s, v))) && (m ? o && // for camelCase
      (o[p] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[p] = ja(
        m,
        c,
        p,
        void 0,
        e,
        !0
      )) : delete l[p]);
    if (r !== c)
      for (const p in r)
        (!s || !vt(s, p)) && (delete r[p], f = !0);
  }
  f && Rs(e.attrs, "set", "");
}
function _r(e, s, o, a) {
  const [l, r] = e.propsOptions;
  let u = !1, c;
  if (s)
    for (let m in s) {
      if (Zo(m))
        continue;
      const f = s[m];
      let v;
      l && vt(l, v = ls(m)) ? !r || !r.includes(v) ? o[v] = f : (c || (c = {}))[v] = f : ma(e.emitsOptions, m) || (!(m in a) || f !== a[m]) && (a[m] = f, u = !0);
    }
  if (r) {
    const m = mt(o), f = c || wt;
    for (let v = 0; v < r.length; v++) {
      const p = r[v];
      o[p] = ja(
        l,
        m,
        p,
        f[p],
        e,
        !vt(f, p)
      );
    }
  }
  return u;
}
function ja(e, s, o, a, l, r) {
  const u = e[o];
  if (u != null) {
    const c = vt(u, "default");
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
    ] && (a === "" || a === Qs(o)) && (a = !0));
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
    const v = (p) => {
      m = !0;
      const [_, h] = kr(p, s, !0);
      Dt(u, _), h && c.push(...h);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !m)
    return ht(e) && a.set(e, To), To;
  if (Ye(r))
    for (let v = 0; v < r.length; v++) {
      const p = ls(r[v]);
      Bl(p) && (u[p] = wt);
    }
  else if (r)
    for (const v in r) {
      const p = ls(v);
      if (Bl(p)) {
        const _ = r[v], h = u[p] = Ye(_) || et(_) ? { type: _ } : Dt({}, _), w = h.type;
        let x = !1, C = !0;
        if (Ye(w))
          for (let S = 0; S < w.length; ++S) {
            const U = w[S], I = et(U) && U.name;
            if (I === "Boolean") {
              x = !0;
              break;
            } else I === "String" && (C = !1);
          }
        else
          x = et(w) && w.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = x, h[
          1
          /* shouldCastTrue */
        ] = C, (x || vt(h, "default")) && c.push(p);
      }
    }
  const f = [u, c];
  return ht(e) && a.set(e, f), f;
}
function Bl(e) {
  return e[0] !== "$" && !Zo(e);
}
const vl = (e) => e === "_" || e === "_ctx" || e === "$stable", pl = (e) => Ye(e) ? e.map(Cs) : [Cs(e)], Fc = (e, s, o) => {
  if (s._n)
    return s;
  const a = g((...l) => pl(s(...l)), o);
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
}, jt = qc;
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
    parentNode: p,
    nextSibling: _,
    setScopeId: h = xs,
    insertStaticContent: w
  } = e, x = (W, Q, ge, Ee = null, Se = null, Ie = null, Ne = void 0, Ce = null, Me = !!Q.dynamicChildren) => {
    if (W === Q)
      return;
    W && !io(W, Q) && (Ee = G(W), se(W, Se, Ie, !0), W = null), Q.patchFlag === -2 && (Me = !1, Q.dynamicChildren = null);
    const { type: ke, ref: Ge, shapeFlag: Ue } = Q;
    switch (ke) {
      case fa:
        C(W, Q, ge, Ee);
        break;
      case zt:
        S(W, Q, ge, Ee);
        break;
      case Ta:
        W == null && U(Q, ge, Ee, Ne);
        break;
      case H:
        ne(
          W,
          Q,
          ge,
          Ee,
          Se,
          Ie,
          Ne,
          Ce,
          Me
        );
        break;
      default:
        Ue & 1 ? M(
          W,
          Q,
          ge,
          Ee,
          Se,
          Ie,
          Ne,
          Ce,
          Me
        ) : Ue & 6 ? te(
          W,
          Q,
          ge,
          Ee,
          Se,
          Ie,
          Ne,
          Ce,
          Me
        ) : (Ue & 64 || Ue & 128) && ke.process(
          W,
          Q,
          ge,
          Ee,
          Se,
          Ie,
          Ne,
          Ce,
          Me,
          ze
        );
    }
    Ge != null && Se ? on(Ge, W && W.ref, Ie, Q || W, !Q) : Ge == null && W && W.ref != null && on(W.ref, null, Ie, W, !0);
  }, C = (W, Q, ge, Ee) => {
    if (W == null)
      a(
        Q.el = c(Q.children),
        ge,
        Ee
      );
    else {
      const Se = Q.el = W.el;
      Q.children !== W.children && f(Se, Q.children);
    }
  }, S = (W, Q, ge, Ee) => {
    W == null ? a(
      Q.el = m(Q.children || ""),
      ge,
      Ee
    ) : Q.el = W.el;
  }, U = (W, Q, ge, Ee) => {
    [W.el, W.anchor] = w(
      W.children,
      Q,
      ge,
      Ee,
      W.el,
      W.anchor
    );
  }, I = ({ el: W, anchor: Q }, ge, Ee) => {
    let Se;
    for (; W && W !== Q; )
      Se = _(W), a(W, ge, Ee), W = Se;
    a(Q, ge, Ee);
  }, P = ({ el: W, anchor: Q }) => {
    let ge;
    for (; W && W !== Q; )
      ge = _(W), l(W), W = ge;
    l(Q);
  }, M = (W, Q, ge, Ee, Se, Ie, Ne, Ce, Me) => {
    if (Q.type === "svg" ? Ne = "svg" : Q.type === "math" && (Ne = "mathml"), W == null)
      A(
        Q,
        ge,
        Ee,
        Se,
        Ie,
        Ne,
        Ce,
        Me
      );
    else {
      const ke = W.el && W.el._isVueCE ? W.el : null;
      try {
        ke && ke._beginPatch(), L(
          W,
          Q,
          Se,
          Ie,
          Ne,
          Ce,
          Me
        );
      } finally {
        ke && ke._endPatch();
      }
    }
  }, A = (W, Q, ge, Ee, Se, Ie, Ne, Ce) => {
    let Me, ke;
    const { props: Ge, shapeFlag: Ue, transition: be, dirs: J } = W;
    if (Me = W.el = u(
      W.type,
      Ie,
      Ge && Ge.is,
      Ge
    ), Ue & 8 ? v(Me, W.children) : Ue & 16 && E(
      W.children,
      Me,
      null,
      Ee,
      Se,
      Ea(W, Ie),
      Ne,
      Ce
    ), J && so(W, null, Ee, "created"), j(Me, W, W.scopeId, Ne, Ee), Ge) {
      for (const V in Ge)
        V !== "value" && !Zo(V) && r(Me, V, null, Ge[V], Ie, Ee);
      "value" in Ge && r(Me, "value", null, Ge.value, Ie), (ke = Ge.onVnodeBeforeMount) && ws(ke, Ee, W);
    }
    J && so(W, null, Ee, "beforeMount");
    const Be = Hc(Se, be);
    Be && be.beforeEnter(Me), a(Me, Q, ge), ((ke = Ge && Ge.onVnodeMounted) || Be || J) && jt(() => {
      ke && ws(ke, Ee, W), Be && be.enter(Me), J && so(W, null, Ee, "mounted");
    }, Se);
  }, j = (W, Q, ge, Ee, Se) => {
    if (ge && h(W, ge), Ee)
      for (let Ie = 0; Ie < Ee.length; Ie++)
        h(W, Ee[Ie]);
    if (Se) {
      let Ie = Se.subTree;
      if (Q === Ie || Sr(Ie.type) && (Ie.ssContent === Q || Ie.ssFallback === Q)) {
        const Ne = Se.vnode;
        j(
          W,
          Ne,
          Ne.scopeId,
          Ne.slotScopeIds,
          Se.parent
        );
      }
    }
  }, E = (W, Q, ge, Ee, Se, Ie, Ne, Ce, Me = 0) => {
    for (let ke = Me; ke < W.length; ke++) {
      const Ge = W[ke] = Ce ? Hs(W[ke]) : Cs(W[ke]);
      x(
        null,
        Ge,
        Q,
        ge,
        Ee,
        Se,
        Ie,
        Ne,
        Ce
      );
    }
  }, L = (W, Q, ge, Ee, Se, Ie, Ne) => {
    const Ce = Q.el = W.el;
    let { patchFlag: Me, dynamicChildren: ke, dirs: Ge } = Q;
    Me |= W.patchFlag & 16;
    const Ue = W.props || wt, be = Q.props || wt;
    let J;
    if (ge && oo(ge, !1), (J = be.onVnodeBeforeUpdate) && ws(J, ge, Q, W), Ge && so(Q, W, ge, "beforeUpdate"), ge && oo(ge, !0), (Ue.innerHTML && be.innerHTML == null || Ue.textContent && be.textContent == null) && v(Ce, ""), ke ? ie(
      W.dynamicChildren,
      ke,
      Ce,
      ge,
      Ee,
      Ea(Q, Se),
      Ie
    ) : Ne || ae(
      W,
      Q,
      Ce,
      null,
      ge,
      Ee,
      Ea(Q, Se),
      Ie,
      !1
    ), Me > 0) {
      if (Me & 16)
        le(Ce, Ue, be, ge, Se);
      else if (Me & 2 && Ue.class !== be.class && r(Ce, "class", null, be.class, Se), Me & 4 && r(Ce, "style", Ue.style, be.style, Se), Me & 8) {
        const Be = Q.dynamicProps;
        for (let V = 0; V < Be.length; V++) {
          const F = Be[V], q = Ue[F], ve = be[F];
          (ve !== q || F === "value") && r(Ce, F, q, ve, Se, ge);
        }
      }
      Me & 1 && W.children !== Q.children && v(Ce, Q.children);
    } else !Ne && ke == null && le(Ce, Ue, be, ge, Se);
    ((J = be.onVnodeUpdated) || Ge) && jt(() => {
      J && ws(J, ge, Q, W), Ge && so(Q, W, ge, "updated");
    }, Ee);
  }, ie = (W, Q, ge, Ee, Se, Ie, Ne) => {
    for (let Ce = 0; Ce < Q.length; Ce++) {
      const Me = W[Ce], ke = Q[Ce], Ge = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Me.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Me.type === H || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !io(Me, ke) || // - In the case of a component, it could contain anything.
        Me.shapeFlag & 198) ? p(Me.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ge
        )
      );
      x(
        Me,
        ke,
        Ge,
        null,
        Ee,
        Se,
        Ie,
        Ne,
        !0
      );
    }
  }, le = (W, Q, ge, Ee, Se) => {
    if (Q !== ge) {
      if (Q !== wt)
        for (const Ie in Q)
          !Zo(Ie) && !(Ie in ge) && r(
            W,
            Ie,
            Q[Ie],
            null,
            Se,
            Ee
          );
      for (const Ie in ge) {
        if (Zo(Ie)) continue;
        const Ne = ge[Ie], Ce = Q[Ie];
        Ne !== Ce && Ie !== "value" && r(W, Ie, Ce, Ne, Se, Ee);
      }
      "value" in ge && r(W, "value", Q.value, ge.value, Se);
    }
  }, ne = (W, Q, ge, Ee, Se, Ie, Ne, Ce, Me) => {
    const ke = Q.el = W ? W.el : c(""), Ge = Q.anchor = W ? W.anchor : c("");
    let { patchFlag: Ue, dynamicChildren: be, slotScopeIds: J } = Q;
    J && (Ce = Ce ? Ce.concat(J) : J), W == null ? (a(ke, ge, Ee), a(Ge, ge, Ee), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      Q.children || [],
      ge,
      Ge,
      Se,
      Ie,
      Ne,
      Ce,
      Me
    )) : Ue > 0 && Ue & 64 && be && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    W.dynamicChildren ? (ie(
      W.dynamicChildren,
      be,
      ge,
      Se,
      Ie,
      Ne,
      Ce
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (Q.key != null || Se && Q === Se.subTree) && gl(
      W,
      Q,
      !0
      /* shallow */
    )) : ae(
      W,
      Q,
      ge,
      Ge,
      Se,
      Ie,
      Ne,
      Ce,
      Me
    );
  }, te = (W, Q, ge, Ee, Se, Ie, Ne, Ce, Me) => {
    Q.slotScopeIds = Ce, W == null ? Q.shapeFlag & 512 ? Se.ctx.activate(
      Q,
      ge,
      Ee,
      Ne,
      Me
    ) : K(
      Q,
      ge,
      Ee,
      Se,
      Ie,
      Ne,
      Me
    ) : X(W, Q, Me);
  }, K = (W, Q, ge, Ee, Se, Ie, Ne) => {
    const Ce = W.component = td(
      W,
      Ee,
      Se
    );
    if (ua(W) && (Ce.ctx.renderer = ze), sd(Ce, !1, Ne), Ce.asyncDep) {
      if (Se && Se.registerDep(Ce, de, Ne), !W.el) {
        const Me = Ce.subTree = $(zt);
        S(null, Me, Q, ge), W.placeholder = Me.el;
      }
    } else
      de(
        Ce,
        W,
        Q,
        ge,
        Se,
        Ie,
        Ne
      );
  }, X = (W, Q, ge) => {
    const Ee = Q.component = W.component;
    if (Uc(W, Q, ge))
      if (Ee.asyncDep && !Ee.asyncResolved) {
        Le(Ee, Q, ge);
        return;
      } else
        Ee.next = Q, Ee.update();
    else
      Q.el = W.el, Ee.vnode = Q;
  }, de = (W, Q, ge, Ee, Se, Ie, Ne) => {
    const Ce = () => {
      if (W.isMounted) {
        let { next: Ue, bu: be, u: J, parent: Be, vnode: V } = W;
        {
          const re = xr(W);
          if (re) {
            Ue && (Ue.el = V.el, Le(W, Ue, Ne)), re.asyncDep.then(() => {
              W.isUnmounted || Ce();
            });
            return;
          }
        }
        let F = Ue, q;
        oo(W, !1), Ue ? (Ue.el = V.el, Le(W, Ue, Ne)) : Ue = V, be && On(be), (q = Ue.props && Ue.props.onVnodeBeforeUpdate) && ws(q, Be, Ue, V), oo(W, !0);
        const ve = Vl(W), z = W.subTree;
        W.subTree = ve, x(
          z,
          ve,
          // parent may have changed if it's in a teleport
          p(z.el),
          // anchor may have changed if it's in a fragment
          G(z),
          W,
          Se,
          Ie
        ), Ue.el = ve.el, F === null && Oc(W, ve.el), J && jt(J, Se), (q = Ue.props && Ue.props.onVnodeUpdated) && jt(
          () => ws(q, Be, Ue, V),
          Se
        );
      } else {
        let Ue;
        const { el: be, props: J } = Q, { bm: Be, m: V, parent: F, root: q, type: ve } = W, z = Mo(Q);
        oo(W, !1), Be && On(Be), !z && (Ue = J && J.onVnodeBeforeMount) && ws(Ue, F, Q), oo(W, !0);
        {
          q.ce && // @ts-expect-error _def is private
          q.ce._def.shadowRoot !== !1 && q.ce._injectChildStyle(ve);
          const re = W.subTree = Vl(W);
          x(
            null,
            re,
            ge,
            Ee,
            W,
            Se,
            Ie
          ), Q.el = re.el;
        }
        if (V && jt(V, Se), !z && (Ue = J && J.onVnodeMounted)) {
          const re = Q;
          jt(
            () => ws(Ue, F, re),
            Se
          );
        }
        (Q.shapeFlag & 256 || F && Mo(F.vnode) && F.vnode.shapeFlag & 256) && W.a && jt(W.a, Se), W.isMounted = !0, Q = ge = Ee = null;
      }
    };
    W.scope.on();
    const Me = W.effect = new Ri(Ce);
    W.scope.off();
    const ke = W.update = Me.run.bind(Me), Ge = W.job = Me.runIfDirty.bind(Me);
    Ge.i = W, Ge.id = W.uid, Me.scheduler = () => dl(Ge), oo(W, !0), ke();
  }, Le = (W, Q, ge) => {
    Q.component = W;
    const Ee = W.vnode.props;
    W.vnode = Q, W.next = null, zc(W, Q.props, Ee, ge), Wc(W, Q.children, ge), Ns(), Tl(W), Us();
  }, ae = (W, Q, ge, Ee, Se, Ie, Ne, Ce, Me = !1) => {
    const ke = W && W.children, Ge = W ? W.shapeFlag : 0, Ue = Q.children, { patchFlag: be, shapeFlag: J } = Q;
    if (be > 0) {
      if (be & 128) {
        fe(
          ke,
          Ue,
          ge,
          Ee,
          Se,
          Ie,
          Ne,
          Ce,
          Me
        );
        return;
      } else if (be & 256) {
        ye(
          ke,
          Ue,
          ge,
          Ee,
          Se,
          Ie,
          Ne,
          Ce,
          Me
        );
        return;
      }
    }
    J & 8 ? (Ge & 16 && oe(ke, Se, Ie), Ue !== ke && v(ge, Ue)) : Ge & 16 ? J & 16 ? fe(
      ke,
      Ue,
      ge,
      Ee,
      Se,
      Ie,
      Ne,
      Ce,
      Me
    ) : oe(ke, Se, Ie, !0) : (Ge & 8 && v(ge, ""), J & 16 && E(
      Ue,
      ge,
      Ee,
      Se,
      Ie,
      Ne,
      Ce,
      Me
    ));
  }, ye = (W, Q, ge, Ee, Se, Ie, Ne, Ce, Me) => {
    W = W || To, Q = Q || To;
    const ke = W.length, Ge = Q.length, Ue = Math.min(ke, Ge);
    let be;
    for (be = 0; be < Ue; be++) {
      const J = Q[be] = Me ? Hs(Q[be]) : Cs(Q[be]);
      x(
        W[be],
        J,
        ge,
        null,
        Se,
        Ie,
        Ne,
        Ce,
        Me
      );
    }
    ke > Ge ? oe(
      W,
      Se,
      Ie,
      !0,
      !1,
      Ue
    ) : E(
      Q,
      ge,
      Ee,
      Se,
      Ie,
      Ne,
      Ce,
      Me,
      Ue
    );
  }, fe = (W, Q, ge, Ee, Se, Ie, Ne, Ce, Me) => {
    let ke = 0;
    const Ge = Q.length;
    let Ue = W.length - 1, be = Ge - 1;
    for (; ke <= Ue && ke <= be; ) {
      const J = W[ke], Be = Q[ke] = Me ? Hs(Q[ke]) : Cs(Q[ke]);
      if (io(J, Be))
        x(
          J,
          Be,
          ge,
          null,
          Se,
          Ie,
          Ne,
          Ce,
          Me
        );
      else
        break;
      ke++;
    }
    for (; ke <= Ue && ke <= be; ) {
      const J = W[Ue], Be = Q[be] = Me ? Hs(Q[be]) : Cs(Q[be]);
      if (io(J, Be))
        x(
          J,
          Be,
          ge,
          null,
          Se,
          Ie,
          Ne,
          Ce,
          Me
        );
      else
        break;
      Ue--, be--;
    }
    if (ke > Ue) {
      if (ke <= be) {
        const J = be + 1, Be = J < Ge ? Q[J].el : Ee;
        for (; ke <= be; )
          x(
            null,
            Q[ke] = Me ? Hs(Q[ke]) : Cs(Q[ke]),
            ge,
            Be,
            Se,
            Ie,
            Ne,
            Ce,
            Me
          ), ke++;
      }
    } else if (ke > be)
      for (; ke <= Ue; )
        se(W[ke], Se, Ie, !0), ke++;
    else {
      const J = ke, Be = ke, V = /* @__PURE__ */ new Map();
      for (ke = Be; ke <= be; ke++) {
        const Ae = Q[ke] = Me ? Hs(Q[ke]) : Cs(Q[ke]);
        Ae.key != null && V.set(Ae.key, ke);
      }
      let F, q = 0;
      const ve = be - Be + 1;
      let z = !1, re = 0;
      const ue = new Array(ve);
      for (ke = 0; ke < ve; ke++) ue[ke] = 0;
      for (ke = J; ke <= Ue; ke++) {
        const Ae = W[ke];
        if (q >= ve) {
          se(Ae, Se, Ie, !0);
          continue;
        }
        let We;
        if (Ae.key != null)
          We = V.get(Ae.key);
        else
          for (F = Be; F <= be; F++)
            if (ue[F - Be] === 0 && io(Ae, Q[F])) {
              We = F;
              break;
            }
        We === void 0 ? se(Ae, Se, Ie, !0) : (ue[We - Be] = ke + 1, We >= re ? re = We : z = !0, x(
          Ae,
          Q[We],
          ge,
          null,
          Se,
          Ie,
          Ne,
          Ce,
          Me
        ), q++);
      }
      const Fe = z ? Kc(ue) : To;
      for (F = Fe.length - 1, ke = ve - 1; ke >= 0; ke--) {
        const Ae = Be + ke, We = Q[Ae], Xe = Q[Ae + 1], qe = Ae + 1 < Ge ? (
          // #13559, fallback to el placeholder for unresolved async component
          Xe.el || Xe.placeholder
        ) : Ee;
        ue[ke] === 0 ? x(
          null,
          We,
          ge,
          qe,
          Se,
          Ie,
          Ne,
          Ce,
          Me
        ) : z && (F < 0 || ke !== Fe[F] ? Oe(We, ge, qe, 2) : F--);
      }
    }
  }, Oe = (W, Q, ge, Ee, Se = null) => {
    const { el: Ie, type: Ne, transition: Ce, children: Me, shapeFlag: ke } = W;
    if (ke & 6) {
      Oe(W.component.subTree, Q, ge, Ee);
      return;
    }
    if (ke & 128) {
      W.suspense.move(Q, ge, Ee);
      return;
    }
    if (ke & 64) {
      Ne.move(W, Q, ge, ze);
      return;
    }
    if (Ne === H) {
      a(Ie, Q, ge);
      for (let Ue = 0; Ue < Me.length; Ue++)
        Oe(Me[Ue], Q, ge, Ee);
      a(W.anchor, Q, ge);
      return;
    }
    if (Ne === Ta) {
      I(W, Q, ge);
      return;
    }
    if (Ee !== 2 && ke & 1 && Ce)
      if (Ee === 0)
        Ce.beforeEnter(Ie), a(Ie, Q, ge), jt(() => Ce.enter(Ie), Se);
      else {
        const { leave: Ue, delayLeave: be, afterLeave: J } = Ce, Be = () => {
          W.ctx.isUnmounted ? l(Ie) : a(Ie, Q, ge);
        }, V = () => {
          Ie._isLeaving && Ie[Ts](
            !0
            /* cancelled */
          ), Ue(Ie, () => {
            Be(), J && J();
          });
        };
        be ? be(Ie, Be, V) : V();
      }
    else
      a(Ie, Q, ge);
  }, se = (W, Q, ge, Ee = !1, Se = !1) => {
    const {
      type: Ie,
      props: Ne,
      ref: Ce,
      children: Me,
      dynamicChildren: ke,
      shapeFlag: Ge,
      patchFlag: Ue,
      dirs: be,
      cacheIndex: J
    } = W;
    if (Ue === -2 && (Se = !1), Ce != null && (Ns(), on(Ce, null, ge, W, !0), Us()), J != null && (Q.renderCache[J] = void 0), Ge & 256) {
      Q.ctx.deactivate(W);
      return;
    }
    const Be = Ge & 1 && be, V = !Mo(W);
    let F;
    if (V && (F = Ne && Ne.onVnodeBeforeUnmount) && ws(F, Q, W), Ge & 6)
      B(W.component, ge, Ee);
    else {
      if (Ge & 128) {
        W.suspense.unmount(ge, Ee);
        return;
      }
      Be && so(W, null, Q, "beforeUnmount"), Ge & 64 ? W.type.remove(
        W,
        Q,
        ge,
        ze,
        Ee
      ) : ke && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ke.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Ie !== H || Ue > 0 && Ue & 64) ? oe(
        ke,
        Q,
        ge,
        !1,
        !0
      ) : (Ie === H && Ue & 384 || !Se && Ge & 16) && oe(Me, Q, ge), Ee && ce(W);
    }
    (V && (F = Ne && Ne.onVnodeUnmounted) || Be) && jt(() => {
      F && ws(F, Q, W), Be && so(W, null, Q, "unmounted");
    }, ge);
  }, ce = (W) => {
    const { type: Q, el: ge, anchor: Ee, transition: Se } = W;
    if (Q === H) {
      Y(ge, Ee);
      return;
    }
    if (Q === Ta) {
      P(W);
      return;
    }
    const Ie = () => {
      l(ge), Se && !Se.persisted && Se.afterLeave && Se.afterLeave();
    };
    if (W.shapeFlag & 1 && Se && !Se.persisted) {
      const { leave: Ne, delayLeave: Ce } = Se, Me = () => Ne(ge, Ie);
      Ce ? Ce(W.el, Ie, Me) : Me();
    } else
      Ie();
  }, Y = (W, Q) => {
    let ge;
    for (; W !== Q; )
      ge = _(W), l(W), W = ge;
    l(Q);
  }, B = (W, Q, ge) => {
    const { bum: Ee, scope: Se, job: Ie, subTree: Ne, um: Ce, m: Me, a: ke } = W;
    Wl(Me), Wl(ke), Ee && On(Ee), Se.stop(), Ie && (Ie.flags |= 8, se(Ne, W, Q, ge)), Ce && jt(Ce, Q), jt(() => {
      W.isUnmounted = !0;
    }, Q);
  }, oe = (W, Q, ge, Ee = !1, Se = !1, Ie = 0) => {
    for (let Ne = Ie; Ne < W.length; Ne++)
      se(W[Ne], Q, ge, Ee, Se);
  }, G = (W) => {
    if (W.shapeFlag & 6)
      return G(W.component.subTree);
    if (W.shapeFlag & 128)
      return W.suspense.next();
    const Q = _(W.anchor || W.el), ge = Q && Q[Qi];
    return ge ? _(ge) : Q;
  };
  let N = !1;
  const me = (W, Q, ge) => {
    W == null ? Q._vnode && se(Q._vnode, null, null, !0) : x(
      Q._vnode || null,
      W,
      Q,
      null,
      null,
      null,
      ge
    ), Q._vnode = W, N || (N = !0, Tl(), qi(), N = !1);
  }, ze = {
    p: x,
    um: se,
    m: Oe,
    r: ce,
    mt: K,
    mc: E,
    pc: ae,
    pbc: ie,
    n: G,
    o: e
  };
  return {
    render: me,
    hydrate: void 0,
    createApp: Sc(me)
  };
}
function Ea({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function oo({ effect: e, job: s }, o) {
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
const H = Symbol.for("v-fgt"), fa = Symbol.for("v-txt"), zt = Symbol.for("v-cmt"), Ta = Symbol.for("v-stc"), an = [];
let es = null;
function n(e = !1) {
  an.push(es = e ? null : []);
}
function Yc() {
  an.pop(), es = an[an.length - 1] || null;
}
let pn = 1;
function Jn(e, s = !1) {
  pn += e, e < 0 && es && s && (es.hasOnce = !0);
}
function Ir(e) {
  return e.dynamicChildren = pn > 0 ? es || To : null, Yc(), pn > 0 && es && es.push(e), e;
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
function R(e, s, o, a, l) {
  return Ir(
    $(
      e,
      s,
      o,
      a,
      l,
      !0
    )
  );
}
function gn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function io(e, s) {
  return e.type === s.type && e.key === s.key;
}
const Er = ({ key: e }) => e ?? null, Vn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? It(e) || Bt(e) || et(e) ? { i: Ut, r: e, k: s, f: !!o } : e : null);
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
  return c ? (hl(m, o), r & 128 && e.normalize(m)) : o && (m.shapeFlag |= It(o) ? 8 : 16), pn > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  es && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && es.push(m), m;
}
const $ = Jc;
function Jc(e, s = null, o = null, a = 0, l = null, r = !1) {
  if ((!e || e === ur) && (e = zt), gn(e)) {
    const c = Ys(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && hl(c, o), pn > 0 && !r && es && (c.shapeFlag & 6 ? es[es.indexOf(e)] = c : es.push(c)), c.patchFlag = -2, c;
  }
  if (id(e) && (e = e.__vccOpts), s) {
    s = Qc(s);
    let { class: c, style: m } = s;
    c && !It(c) && (s.class = Pe(c)), ht(m) && (cl(m) && !Ye(m) && (m = Dt({}, m)), s.style = Ft(m));
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
  return e ? cl(e) || wr(e) ? Dt({}, e) : e : null;
}
function Ys(e, s, o = !1, a = !1) {
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
    ssContent: e.ssContent && Ys(e.ssContent),
    ssFallback: e.ssFallback && Ys(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return m && a && fo(
    v,
    m.clone(v)
  ), v;
}
function b(e = " ", s = 0) {
  return $(fa, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (n(), R(zt, null, e)) : $(zt, null, e);
}
function Cs(e) {
  return e == null || typeof e == "boolean" ? $(zt) : Ye(e) ? $(
    H,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : gn(e) ? Hs(e) : $(fa, null, String(e));
}
function Hs(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ys(e);
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
  else et(s) ? (s = { default: s, _ctx: Ut }, o = 32) : (s = String(s), a & 64 ? (o = 16, s = [b(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function Xc(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        s.class !== a.class && (s.class = Pe([s.class, a.class]));
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
    (o) => hn = o
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
let hn = !1;
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
    if (Us(), r(), (c || e.sp) && !Mo(e) && lr(e), c) {
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
      if (o in nn)
        return nn[o](e);
    },
    has(s, o) {
      return o in s || o in nn;
    }
  })) : e.proxy;
}
function ld(e, s = !0) {
  return et(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function id(e) {
  return et(e) && "__vccOpts" in e;
}
const O = (e, s) => Zu(e, s, hn);
function zo(e, s, o) {
  try {
    Jn(-1);
    const a = arguments.length;
    return a === 2 ? ht(s) && !Ye(s) ? gn(s) ? $(e, null, [s]) : $(e, s) : $(e, null, s) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && gn(o) && (o = [o]), $(e, s, o));
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
}, Bs = "transition", Wo = "animation", Uo = Symbol("_vtc"), Mr = {
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
}, Dr = /* @__PURE__ */ Dt(
  {},
  sr,
  Mr
), md = (e) => (e.displayName = "Transition", e.props = Dr, e), fd = /* @__PURE__ */ md(
  (e, { slots: s }) => zo(ic, Lr(e), s)
), no = (e, s = []) => {
  Ye(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, ql = (e) => e ? Ye(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function Lr(e) {
  const s = {};
  for (const ne in e)
    ne in Mr || (s[ne] = e[ne]);
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
    leaveFromClass: p = `${o}-leave-from`,
    leaveActiveClass: _ = `${o}-leave-active`,
    leaveToClass: h = `${o}-leave-to`
  } = e, w = vd(l), x = w && w[0], C = w && w[1], {
    onBeforeEnter: S,
    onEnter: U,
    onEnterCancelled: I,
    onLeave: P,
    onLeaveCancelled: M,
    onBeforeAppear: A = S,
    onAppear: j = U,
    onAppearCancelled: E = I
  } = s, L = (ne, te, K, X) => {
    ne._enterCancelled = X, Ws(ne, te ? v : c), Ws(ne, te ? f : u), K && K();
  }, ie = (ne, te) => {
    ne._isLeaving = !1, Ws(ne, p), Ws(ne, h), Ws(ne, _), te && te();
  }, le = (ne) => (te, K) => {
    const X = ne ? j : U, de = () => L(te, ne, K);
    no(X, [te, de]), Yl(() => {
      Ws(te, ne ? m : r), ks(te, ne ? v : c), ql(X) || Jl(te, a, x, de);
    });
  };
  return Dt(s, {
    onBeforeEnter(ne) {
      no(S, [ne]), ks(ne, r), ks(ne, u);
    },
    onBeforeAppear(ne) {
      no(A, [ne]), ks(ne, m), ks(ne, f);
    },
    onEnter: le(!1),
    onAppear: le(!0),
    onLeave(ne, te) {
      ne._isLeaving = !0;
      const K = () => ie(ne, te);
      ks(ne, p), ne._enterCancelled ? (ks(ne, _), qa(ne)) : (qa(ne), ks(ne, _)), Yl(() => {
        ne._isLeaving && (Ws(ne, p), ks(ne, h), ql(P) || Jl(ne, a, C, K));
      }), no(P, [ne, K]);
    },
    onEnterCancelled(ne) {
      L(ne, !1, void 0, !0), no(I, [ne]);
    },
    onAppearCancelled(ne) {
      L(ne, !0, void 0, !0), no(E, [ne]);
    },
    onLeaveCancelled(ne) {
      ie(ne), no(M, [ne]);
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
  const { type: u, timeout: c, propCount: m } = Nr(e, s);
  if (!u)
    return a();
  const f = u + "end";
  let v = 0;
  const p = () => {
    e.removeEventListener(f, _), r();
  }, _ = (h) => {
    h.target === e && ++v >= m && p();
  };
  setTimeout(() => {
    v < m && p();
  }, c + 1), e.addEventListener(f, _);
}
function Nr(e, s) {
  const o = window.getComputedStyle(e), a = (w) => (o[w] || "").split(", "), l = a(`${Bs}Delay`), r = a(`${Bs}Duration`), u = Ql(l, r), c = a(`${Wo}Delay`), m = a(`${Wo}Duration`), f = Ql(c, m);
  let v = null, p = 0, _ = 0;
  s === Bs ? u > 0 && (v = Bs, p = u, _ = r.length) : s === Wo ? f > 0 && (v = Wo, p = f, _ = m.length) : (p = Math.max(u, f), v = p > 0 ? u > f ? Bs : Wo : null, _ = v ? v === Bs ? r.length : m.length : 0);
  const h = v === Bs && /\b(?:transform|all)(?:,|$)/.test(
    a(`${Bs}Property`).toString()
  );
  return {
    type: v,
    timeout: p,
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
      Qs(a),
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
  return [e[2] === ":" ? e.slice(3) : Qs(e.slice(2)), s];
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
  props: /* @__PURE__ */ Dt({}, Dr, {
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
        const p = f[Xn] = (_) => {
          _ && _.target !== f || (!_ || _.propertyName.endsWith("transform")) && (f.removeEventListener("transitionend", p), f[Xn] = null, Ws(f, u));
        };
        f.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const u = mt(e), c = Lr(u);
      let m = u.tag || H;
      if (l = [], r)
        for (let f = 0; f < r.length; f++) {
          const v = r[f];
          v.el && v.el instanceof Element && (l.push(v), fo(
            v,
            vn(
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
        v.key != null && fo(
          v,
          vn(v, c, a, o)
        );
      }
      return $(m, null, r);
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
  const a = e.cloneNode(), l = e[Uo];
  l && l.forEach((c) => {
    c.split(/\s+/).forEach((m) => m && a.classList.remove(m));
  }), o.split(/\s+/).forEach((c) => c && a.classList.add(c)), a.style.display = "none";
  const r = s.nodeType === 1 ? s : s.parentNode;
  r.appendChild(a);
  const { hasTransform: u } = Nr(a);
  return r.removeChild(a), u;
}
const Js = (e) => {
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
const ts = {
  created(e, { modifiers: { lazy: s, trim: o, number: a } }, l) {
    e[ns] = Js(l);
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
    if (e[ns] = Js(u), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? aa(e.value) : e.value, m = s ?? "";
    c !== m && (document.activeElement === e && e.type !== "range" && (a && s === o || l && e.value.trim() === m) || (e.value = m));
  }
}, yn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[ns] = Js(o), Ds(e, "change", () => {
      const a = e._modelValue, l = Oo(e), r = e.checked, u = e[ns];
      if (Ye(a)) {
        const c = ol(a, l), m = c !== -1;
        if (r && !m)
          u(a.concat(l));
        else if (!r && m) {
          const f = [...a];
          f.splice(c, 1), u(f);
        }
      } else if (Ao(a)) {
        const c = new Set(a);
        r ? c.add(l) : c.delete(l), u(c);
      } else
        u(Ar(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: di,
  beforeUpdate(e, s, o) {
    e[ns] = Js(o), di(e, s, o);
  }
};
function di(e, { value: s, oldValue: o }, a) {
  e._modelValue = s;
  let l;
  if (Ye(s))
    l = ol(s, a.props.value) > -1;
  else if (Ao(s))
    l = s.has(a.props.value);
  else {
    if (s === o) return;
    l = mo(s, Ar(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const ds = {
  created(e, { value: s }, o) {
    e.checked = mo(s, o.props.value), e[ns] = Js(o), Ds(e, "change", () => {
      e[ns](Oo(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, a) {
    e[ns] = Js(a), s !== o && (e.checked = mo(s, a.props.value));
  }
}, Ss = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, a) {
    const l = Ao(s);
    Ds(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => o ? aa(Oo(u)) : Oo(u)
      );
      e[ns](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Mt(() => {
        e._assigning = !1;
      });
    }), e[ns] = Js(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    mi(e, s);
  },
  beforeUpdate(e, s, o) {
    e[ns] = Js(o);
  },
  updated(e, { value: s }) {
    e._assigning || mi(e, s);
  }
};
function mi(e, s) {
  const o = e.multiple, a = Ye(s);
  if (!(o && !a && !Ao(s))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const u = e.options[l], c = Oo(u);
      if (o)
        if (a) {
          const m = typeof c;
          m === "string" || m === "number" ? u.selected = s.some((f) => String(f) === String(c)) : u.selected = ol(s, c) > -1;
        } else
          u.selected = s.has(c);
      else if (mo(Oo(u), s)) {
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
      return ts;
    default:
      switch (s) {
        case "checkbox":
          return yn;
        case "radio":
          return ds;
        default:
          return ts;
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
}, ut = (e, s) => {
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
    const r = Qs(l.key);
    if (s.some(
      (u) => u === r || Bd[u] === r
    ))
      return e(l);
  }));
}, Wd = /* @__PURE__ */ Dt({ patchProp: Td }, dd);
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
}, Xd = /* @__PURE__ */ $e({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (n(), i("div", Kd, [
      s.$slots.header ? (n(), i("div", qd, [
        ot(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (n(), i("div", Yd, [
        ot(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", Jd, [
        ot(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (n(), i("div", Qd, [
        ot(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), xe = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of s)
    o[a] = l;
  return o;
}, qt = /* @__PURE__ */ xe(Xd, [["__scopeId", "data-v-21565df9"]]), Zd = {
  key: 0,
  class: "panel-title-prefix"
}, em = {
  key: 1,
  class: "panel-title-prefix-theme"
}, tm = /* @__PURE__ */ $e({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (n(), R(fl(`h${e.level}`), {
      class: Pe(["panel-title", e.variant])
    }, {
      default: g(() => [
        e.showPrefix ? (n(), i("span", Zd, d(e.prefix), 1)) : (n(), i("span", em)),
        ot(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), sm = /* @__PURE__ */ xe(tm, [["__scopeId", "data-v-c3875efc"]]), om = ["title"], nm = ["width", "height"], am = /* @__PURE__ */ $e({
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
}), zr = /* @__PURE__ */ xe(am, [["__scopeId", "data-v-6fc7f16d"]]), lm = { class: "header-left" }, im = {
  key: 0,
  class: "header-actions"
}, rm = /* @__PURE__ */ $e({
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
      t("div", lm, [
        $(sm, { "show-prefix": e.showPrefix }, {
          default: g(() => [
            b(d(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), R(zr, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (n(), i("div", im, [
        ot(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Yt = /* @__PURE__ */ xe(rm, [["__scopeId", "data-v-55a62cd6"]]), um = {
  key: 0,
  class: "section-title-count"
}, cm = {
  key: 1,
  class: "section-title-icon"
}, dm = /* @__PURE__ */ $e({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (n(), R(fl(`h${e.level}`), {
      class: Pe(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, {
      default: g(() => [
        ot(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", um, "(" + d(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (n(), i("span", cm, d(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Zt = /* @__PURE__ */ xe(dm, [["__scopeId", "data-v-559361eb"]]), mm = { class: "status-grid" }, fm = { class: "status-grid__columns" }, vm = { class: "status-grid__column" }, pm = { class: "status-grid__title" }, gm = { class: "status-grid__column status-grid__column--right" }, hm = { class: "status-grid__title" }, ym = {
  key: 0,
  class: "status-grid__footer"
}, wm = /* @__PURE__ */ $e({
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
          ot(s.$slots, "left", {}, void 0)
        ]),
        t("div", gm, [
          t("h4", hm, d(e.rightTitle), 1),
          ot(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (n(), i("div", ym, [
        ot(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), _m = /* @__PURE__ */ xe(wm, [["__scopeId", "data-v-73b7ba3f"]]), km = {
  key: 0,
  class: "status-item__icon"
}, bm = {
  key: 1,
  class: "status-item__count"
}, $m = { class: "status-item__label" }, Cm = /* @__PURE__ */ $e({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, o = O(() => `status-item--${s.variant}`);
    return (a, l) => (n(), i("div", {
      class: Pe(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (n(), i("span", km, d(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (n(), i("span", bm, d(e.count), 1)) : y("", !0),
      t("span", $m, d(e.label), 1)
    ], 2));
  }
}), _s = /* @__PURE__ */ xe(Cm, [["__scopeId", "data-v-6f929183"]]), xm = { class: "issue-card__header" }, Sm = { class: "issue-card__icon" }, Im = { class: "issue-card__title" }, Em = {
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
}, Mm = /* @__PURE__ */ $e({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const s = e, o = O(() => `issue-card--${s.severity}`);
    return (a, l) => (n(), i("div", {
      class: Pe(["issue-card", o.value])
    }, [
      t("div", xm, [
        t("span", Sm, d(e.icon), 1),
        t("h4", Im, d(e.title), 1)
      ]),
      a.$slots.default || e.description ? (n(), i("div", Em, [
        e.description ? (n(), i("p", Tm, d(e.description), 1)) : y("", !0),
        ot(a.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (n(), i("div", Pm, [
        (n(!0), i(H, null, we(e.items, (r, u) => (n(), i("div", {
          key: u,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, d(r), 1)
        ]))), 128))
      ])) : y("", !0),
      a.$slots.actions ? (n(), i("div", Rm, [
        ot(a.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), cs = /* @__PURE__ */ xe(Mm, [["__scopeId", "data-v-df6aa348"]]), Dm = ["type", "disabled"], Lm = {
  key: 0,
  class: "spinner"
}, Nm = /* @__PURE__ */ $e({
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
      e.loading ? (n(), i("span", Lm)) : y("", !0),
      e.loading ? y("", !0) : ot(s.$slots, "default", { key: 1 }, void 0)
    ], 10, Dm));
  }
}), _e = /* @__PURE__ */ xe(Nm, [["__scopeId", "data-v-772abe47"]]), Um = { class: "empty-state" }, Om = {
  key: 0,
  class: "empty-icon"
}, Am = { class: "empty-message" }, zm = /* @__PURE__ */ $e({
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
      e.actionLabel ? (n(), R(_e, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => s.$emit("action"))
      }, {
        default: g(() => [
          b(d(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), gs = /* @__PURE__ */ xe(zm, [["__scopeId", "data-v-4466284f"]]), Vm = /* @__PURE__ */ $e({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Pe(["detail-label"]),
      style: Ft({ minWidth: e.minWidth })
    }, [
      ot(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), Bn = /* @__PURE__ */ xe(Vm, [["__scopeId", "data-v-75e9eeb8"]]), Fm = /* @__PURE__ */ $e({
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
}), Ya = /* @__PURE__ */ xe(Fm, [["__scopeId", "data-v-2f186e4c"]]), Bm = { class: "detail-row" }, Wm = /* @__PURE__ */ $e({
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
      $(Bn, { "min-width": e.labelMinWidth }, {
        default: g(() => [
          b(d(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (n(), R(Ya, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: g(() => [
          b(d(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ot(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), $t = /* @__PURE__ */ xe(Wm, [["__scopeId", "data-v-ef15664a"]]), Gm = { class: "modal-header" }, jm = { class: "modal-body" }, Hm = { class: "status-section" }, Km = {
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
}, vv = { class: "modal-actions" }, pv = /* @__PURE__ */ $e({
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
    }), St(() => s.show, (_, h) => {
      console.log("StatusDetailModal show prop changed from", h, "to", _);
    }, { immediate: !0 });
    const a = O(() => {
      var _, h, w;
      return ((w = (h = (_ = s.status) == null ? void 0 : _.workflows) == null ? void 0 : h.analyzed) == null ? void 0 : w.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), l = O(() => {
      var _, h, w;
      return ((w = (h = (_ = s.status) == null ? void 0 : _.workflows) == null ? void 0 : h.analyzed) == null ? void 0 : w.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), r = O(() => {
      var _, h, w;
      return ((w = (h = (_ = s.status) == null ? void 0 : _.workflows) == null ? void 0 : h.synced) == null ? void 0 : w.filter((x) => {
        var S, U, I;
        const C = (I = (U = (S = s.status) == null ? void 0 : S.workflows) == null ? void 0 : U.analyzed) == null ? void 0 : I.find((P) => P.name === x);
        return !C || C.status !== "broken";
      })) || [];
    }), u = O(() => {
      var _, h, w, x, C;
      return (_ = s.status) != null && _.workflows ? (((h = s.status.workflows.new) == null ? void 0 : h.length) ?? 0) > 0 || (((w = s.status.workflows.modified) == null ? void 0 : w.length) ?? 0) > 0 || (((x = s.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || (((C = s.status.workflows.synced) == null ? void 0 : C.length) ?? 0) > 0 : !1;
    }), c = O(() => {
      var h, w, x;
      const _ = (h = s.status) == null ? void 0 : h.git_changes;
      return _ ? (((w = _.nodes_added) == null ? void 0 : w.length) ?? 0) > 0 || (((x = _.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || _.workflow_changes || _.has_other_changes : !1;
    }), m = O(() => {
      var _, h, w, x, C, S;
      return !u.value && !c.value && ((h = (_ = s.status) == null ? void 0 : _.comparison) == null ? void 0 : h.is_synced) && (((w = s.status) == null ? void 0 : w.missing_models_count) ?? 0) === 0 && (((S = (C = (x = s.status) == null ? void 0 : x.comparison) == null ? void 0 : C.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
    }), f = O(() => {
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
      var w, x, C, S, U, I, P, M, A, j, E, L, ie, le, ne, te, K, X, de, Le, ae, ye;
      return n(), R(Ot, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: h[7] || (h[7] = (fe) => _.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: h[6] || (h[6] = ut(() => {
            }, ["stop"]))
          }, [
            t("div", Gm, [
              h[8] || (h[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: h[0] || (h[0] = (fe) => _.$emit("close"))
              }, "✕")
            ]),
            t("div", jm, [
              t("div", Hm, [
                $(Zt, { level: "4" }, {
                  default: g(() => [...h[9] || (h[9] = [
                    b("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                $($t, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              u.value ? (n(), i("div", Km, [
                t("div", qm, [
                  $(Zt, { level: "4" }, {
                    default: g(() => [...h[10] || (h[10] = [
                      b("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: h[1] || (h[1] = (fe) => _.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", Ym, [
                  t("div", Jm, [
                    h[11] || (h[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Qm, "BROKEN (COMMITTED) (" + d(a.value.length) + ")", 1)
                  ]),
                  t("div", Xm, [
                    (n(!0), i(H, null, we(a.value, (fe) => (n(), i("div", {
                      key: fe.name,
                      class: "workflow-item"
                    }, [
                      t("span", Zm, d(fe.name), 1),
                      t("span", ef, d(fe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (n(), i("div", tf, [
                  t("div", sf, [
                    h[12] || (h[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", of, "BROKEN (UNCOMMITTED) (" + d(l.value.length) + ")", 1)
                  ]),
                  t("div", nf, [
                    (n(!0), i(H, null, we(l.value, (fe) => (n(), i("div", {
                      key: fe.name,
                      class: "workflow-item"
                    }, [
                      t("span", af, d(fe.name), 1),
                      t("span", lf, d(fe.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = (w = e.status.workflows) == null ? void 0 : w.new) != null && x.length ? (n(), i("div", rf, [
                  t("div", uf, [
                    h[13] || (h[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", cf, "NEW (" + d(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", df, [
                    (n(!0), i(H, null, we(e.status.workflows.new, (fe) => (n(), i("div", {
                      key: fe,
                      class: "workflow-item"
                    }, [
                      t("span", mf, d(fe), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = (C = e.status.workflows) == null ? void 0 : C.modified) != null && S.length ? (n(), i("div", ff, [
                  t("div", vf, [
                    h[14] || (h[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", pf, "MODIFIED (" + d(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", gf, [
                    (n(!0), i(H, null, we(e.status.workflows.modified, (fe) => (n(), i("div", {
                      key: fe,
                      class: "workflow-item"
                    }, [
                      t("span", hf, d(fe), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (I = (U = e.status.workflows) == null ? void 0 : U.deleted) != null && I.length ? (n(), i("div", yf, [
                  t("div", wf, [
                    h[15] || (h[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", _f, "DELETED (" + d(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", kf, [
                    (n(!0), i(H, null, we(e.status.workflows.deleted, (fe) => (n(), i("div", {
                      key: fe,
                      class: "workflow-item"
                    }, [
                      t("span", bf, d(fe), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (n(), i("div", $f, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: h[2] || (h[2] = (fe) => o.value = !o.value)
                  }, [
                    h[16] || (h[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", Cf, "SYNCED (" + d(r.value.length) + ")", 1),
                    t("span", xf, d(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", Sf, [
                    (n(!0), i(H, null, we(r.value, (fe) => (n(), i("div", {
                      key: fe,
                      class: "workflow-item"
                    }, [
                      t("span", If, d(fe), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              c.value ? (n(), i("div", Ef, [
                $(Zt, { level: "4" }, {
                  default: g(() => [...h[17] || (h[17] = [
                    b("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (M = (P = e.status.git_changes) == null ? void 0 : P.nodes_added) != null && M.length ? (n(), i("div", Tf, [
                  t("div", Pf, [
                    h[18] || (h[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", Rf, "NODES ADDED (" + d(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", Mf, [
                    (n(!0), i(H, null, we(e.status.git_changes.nodes_added, (fe) => (n(), i("div", {
                      key: v(fe),
                      class: "change-item"
                    }, [
                      t("span", Df, d(v(fe)), 1),
                      p(fe) ? (n(), i("span", Lf, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (j = (A = e.status.git_changes) == null ? void 0 : A.nodes_removed) != null && j.length ? (n(), i("div", Nf, [
                  t("div", Uf, [
                    h[19] || (h[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", Of, "NODES REMOVED (" + d(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", Af, [
                    (n(!0), i(H, null, we(e.status.git_changes.nodes_removed, (fe) => (n(), i("div", {
                      key: v(fe),
                      class: "change-item"
                    }, [
                      t("span", zf, d(v(fe)), 1),
                      p(fe) ? (n(), i("span", Vf, "dev")) : y("", !0)
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
                  $(Zt, { level: "4" }, {
                    default: g(() => [...h[22] || (h[22] = [
                      b("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: h[3] || (h[3] = (fe) => _.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                h[26] || (h[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (ne = (le = e.status.comparison) == null ? void 0 : le.missing_nodes) != null && ne.length ? (n(), i("div", qf, [
                  $($t, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Yf, [
                    (n(!0), i(H, null, we(e.status.comparison.missing_nodes.slice(0, 10), (fe) => (n(), i("div", {
                      key: fe,
                      class: "drift-list-item"
                    }, " - " + d(fe), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", Jf, " ... and " + d(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (K = (te = e.status.comparison) == null ? void 0 : te.extra_nodes) != null && K.length ? (n(), i("div", Qf, [
                  $($t, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", Xf, [
                    (n(!0), i(H, null, we(e.status.comparison.extra_nodes.slice(0, 10), (fe) => (n(), i("div", {
                      key: fe,
                      class: "drift-list-item"
                    }, " - " + d(fe), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", Zf, " ... and " + d(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (de = (X = e.status.comparison) == null ? void 0 : X.version_mismatches) != null && de.length ? (n(), i("div", ev, [
                  $($t, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", tv, [
                    (n(!0), i(H, null, we(e.status.comparison.version_mismatches.slice(0, 10), (fe) => (n(), i("div", {
                      key: fe.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      b(d(fe.name) + ": ", 1),
                      t("span", sv, d(fe.actual), 1),
                      h[23] || (h[23] = b(" → ", -1)),
                      t("span", ov, d(fe.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", nv, " ... and " + d(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((Le = e.status.comparison) == null ? void 0 : Le.packages_in_sync) === !1 ? (n(), i("div", av, [
                  $($t, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", lv, [
                  $(_e, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: h[4] || (h[4] = (fe) => _.$emit("repair"))
                  }, {
                    default: g(() => [...h[24] || (h[24] = [
                      b(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  h[25] || (h[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ye = (ae = e.status.comparison) == null ? void 0 : ae.disabled_nodes) != null && ye.length ? (n(), i("div", iv, [
                $(Zt, { level: "4" }, {
                  default: g(() => [...h[27] || (h[27] = [
                    b("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", rv, [
                  h[28] || (h[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, d(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", uv, [
                  (n(!0), i(H, null, we(e.status.comparison.disabled_nodes.slice(0, 10), (fe) => (n(), i("div", {
                    key: fe,
                    class: "drift-list-item"
                  }, " • " + d(fe), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (n(), i("div", cv, " ... and " + d(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (n(), i("div", dv, [
                $(Zt, { level: "4" }, {
                  default: g(() => [...h[29] || (h[29] = [
                    b("MISSING MODELS", -1)
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
              $(_e, {
                variant: "secondary",
                onClick: h[5] || (h[5] = (fe) => _.$emit("close"))
              }, {
                default: g(() => [...h[33] || (h[33] = [
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
}), gv = /* @__PURE__ */ xe(pv, [["__scopeId", "data-v-e2b37122"]]), hv = { class: "health-section-header" }, yv = { class: "suggestions-content" }, wv = { class: "suggestions-text" }, _v = { style: { "margin-top": "var(--cg-space-3)" } }, kv = {
  key: 1,
  class: "no-issues-text"
}, bv = /* @__PURE__ */ $e({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = k(!1), r = k(!1);
    function u() {
      l.value = !0;
    }
    function c() {
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
    const x = O(() => {
      const Y = a.status.workflows.analyzed || [], B = Y.filter(
        (oe) => oe.unresolved_models_count > 0 || oe.ambiguous_models_count > 0
      );
      return B.length === 0 && a.status.missing_models_count > 0 ? Y.filter((oe) => oe.sync_state === "synced") : B;
    });
    function C() {
      const Y = x.value;
      Y.length !== 0 && (v.value = !0, f("repair-missing-models", Y.map((B) => B.name)));
    }
    function S() {
      v.value = !1;
    }
    s({ resetRepairingState: S, resetRepairingEnvironmentState: h, closeDetailModal: w });
    const U = O(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), I = O(() => a.status.has_changes), P = O(() => {
      const Y = a.status.git_changes;
      return Y.nodes_added.length > 0 || Y.nodes_removed.length > 0 || Y.workflow_changes;
    }), M = O(() => a.status.has_changes || U.value), A = O(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), j = O(() => a.status.git_changes.has_other_changes), E = O(() => {
      var Y;
      return ((Y = a.status.workflows.analyzed) == null ? void 0 : Y.filter((B) => B.status === "broken")) || [];
    }), L = O(() => {
      var Y;
      return ((Y = a.status.workflows.analyzed) == null ? void 0 : Y.filter(
        (B) => B.has_path_sync_issues && !B.has_issues
      )) || [];
    }), ie = O(() => E.value.length > 0);
    function le(Y) {
      const B = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const oe of B) {
        const G = Y.match(oe);
        if (G != null && G[1])
          return G[1];
      }
      return null;
    }
    function ne(Y) {
      const B = Y.map(le).filter((oe) => !!oe);
      return [...new Set(B)];
    }
    function te(Y) {
      if (Y.length === 0) return "";
      if (Y.length === 1) return ` (>= ${Y[0]})`;
      const B = Y.slice(0, 2).map((G) => `>= ${G}`).join(", "), oe = Y.length > 2;
      return ` (${B}${oe ? ", ..." : ""})`;
    }
    function K(Y) {
      return Y.replace(/uninstallable node mappings?/gi, (B) => B.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function X(Y) {
      const B = K(Y.issue_summary || "Has issues"), oe = /(?:>=|v?\d+\.\d+)/i.test(B), G = ne(Y.version_gated_guidance || []);
      return (Y.nodes_version_gated_count || 0) > 0 && G.length > 0 && !oe ? `${Y.name} — ${B} (needs ComfyUI ${G.map((N) => `>= ${N}`).join(", ")})` : `${Y.name} — ${B}`;
    }
    const de = O(() => E.value.reduce(
      (Y, B) => Y + (B.nodes_version_gated_count || 0),
      0
    )), Le = O(() => {
      const Y = E.value.flatMap(
        (B) => ne(B.version_gated_guidance || [])
      );
      return [...new Set(Y)];
    }), ae = O(() => E.value.reduce(
      (Y, B) => Y + (B.nodes_uninstallable_count || 0),
      0
    )), ye = O(() => {
      const Y = [];
      return de.value > 0 && Y.push(
        `${de.value} require newer ComfyUI${te(Le.value)}`
      ), ae.value > 0 && Y.push(`${ae.value} need community packages`), Y.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${Y.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), fe = O(() => ie.value || L.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), Oe = O(() => {
      const Y = [];
      return a.status.workflows.new.length > 0 && Y.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && Y.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && Y.push(`${a.status.workflows.deleted.length} deleted`), Y.length > 0 ? `${Y.join(", ")} workflow${Y.length === 1 && !Y[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), se = O(() => {
      var oe, G;
      const Y = [], B = a.status.comparison;
      return (oe = B.missing_nodes) != null && oe.length && Y.push(`${B.missing_nodes.length} missing node${B.missing_nodes.length === 1 ? "" : "s"}`), (G = B.extra_nodes) != null && G.length && Y.push(`${B.extra_nodes.length} untracked node${B.extra_nodes.length === 1 ? "" : "s"}`), Y.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Y.join(" and ")}.`;
    }), ce = O(() => {
      var oe, G;
      const Y = [], B = a.status.comparison;
      return (oe = B.extra_nodes) != null && oe.length && (B.extra_nodes.slice(0, 3).forEach((N) => {
        Y.push(`Untracked: ${N}`);
      }), B.extra_nodes.length > 3 && Y.push(`...and ${B.extra_nodes.length - 3} more untracked`)), (G = B.missing_nodes) != null && G.length && (B.missing_nodes.slice(0, 3).forEach((N) => {
        Y.push(`Missing: ${N}`);
      }), B.missing_nodes.length > 3 && Y.push(`...and ${B.missing_nodes.length - 3} more missing`)), Y;
    });
    return (Y, B) => (n(), i(H, null, [
      $(qt, null, {
        header: g(() => [
          $(Yt, { title: "STATUS" })
        ]),
        content: g(() => [
          a.setupState === "no_workspace" ? (n(), R(cs, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: g(() => [
              $(_e, {
                variant: "primary",
                size: "sm",
                onClick: B[0] || (B[0] = (oe) => Y.$emit("start-setup"))
              }, {
                default: g(() => [...B[13] || (B[13] = [
                  b(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (n(), R(cs, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: g(() => [
              $(_e, {
                variant: "primary",
                size: "sm",
                onClick: B[1] || (B[1] = (oe) => Y.$emit("view-environments"))
              }, {
                default: g(() => [...B[14] || (B[14] = [
                  b(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (n(), R(cs, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: g(() => [
              $(_e, {
                variant: "primary",
                size: "sm",
                onClick: B[2] || (B[2] = (oe) => Y.$emit("create-environment"))
              }, {
                default: g(() => [...B[15] || (B[15] = [
                  b(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: B[4] || (B[4] = (oe) => r.value = !0),
            onMouseleave: B[5] || (B[5] = (oe) => r.value = !1)
          }, [
            t("div", hv, [
              $(Zt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: g(() => [...B[16] || (B[16] = [
                  b(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              $(fd, { name: "fade" }, {
                default: g(() => [
                  r.value ? (n(), R(_e, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: u
                  }, {
                    default: g(() => [...B[17] || (B[17] = [
                      b(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            $(_m, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, vo({
              left: g(() => [
                e.status.workflows.new.length ? (n(), R(_s, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (n(), R(_s, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (n(), R(_s, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                $(_s, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: U.value
                }, null, 8, ["count", "separator"])
              ]),
              right: g(() => [
                e.status.git_changes.nodes_added.length ? (n(), R(_s, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (n(), R(_s, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (n(), R(_s, {
                  key: 2,
                  icon: "●",
                  count: A.value,
                  label: A.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                j.value ? (n(), R(_s, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                I.value && !P.value && !j.value ? (n(), R(_s, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                I.value ? y("", !0) : (n(), R(_s, {
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
                  B[19] || (B[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", yv, [
                    t("span", wv, d(Oe.value), 1),
                    $(_e, {
                      variant: "primary",
                      size: "sm",
                      onClick: B[3] || (B[3] = (oe) => Y.$emit("commit-changes"))
                    }, {
                      default: g(() => [...B[18] || (B[18] = [
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
          e.status.is_detached_head ? (n(), R(cs, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: g(() => [
              $(_e, {
                variant: "primary",
                size: "sm",
                onClick: B[6] || (B[6] = (oe) => Y.$emit("create-branch"))
              }, {
                default: g(() => [...B[20] || (B[20] = [
                  b(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", _v, [
            $(Zt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: g(() => [...B[21] || (B[21] = [
                b(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            fe.value ? (n(), i(H, { key: 0 }, [
              E.value.length > 0 ? (n(), R(cs, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} can't run`,
                description: ye.value,
                items: E.value.map(X)
              }, {
                actions: g(() => [
                  $(_e, {
                    variant: "primary",
                    size: "sm",
                    onClick: B[7] || (B[7] = (oe) => Y.$emit("view-workflows"))
                  }, {
                    default: g(() => [...B[22] || (B[22] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              L.value.length > 0 ? (n(), R(cs, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${L.value.length} workflow${L.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: L.value.map((oe) => `${oe.name} — ${oe.models_needing_path_sync_count} model path${oe.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: g(() => [
                  $(_e, {
                    variant: "primary",
                    size: "sm",
                    onClick: B[8] || (B[8] = (oe) => Y.$emit("view-workflows"))
                  }, {
                    default: g(() => [...B[23] || (B[23] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !ie.value ? (n(), R(cs, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: g(() => [
                  $(_e, {
                    variant: "primary",
                    size: "sm",
                    disabled: v.value,
                    onClick: C
                  }, {
                    default: g(() => [
                      b(d(v.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  $(_e, {
                    variant: "secondary",
                    size: "sm",
                    onClick: B[9] || (B[9] = (oe) => Y.$emit("view-workflows"))
                  }, {
                    default: g(() => [...B[24] || (B[24] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (n(), R(cs, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: se.value,
                items: ce.value
              }, {
                actions: g(() => [
                  $(_e, {
                    variant: "secondary",
                    size: "sm",
                    onClick: u
                  }, {
                    default: g(() => [...B[25] || (B[25] = [
                      b(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  $(_e, {
                    variant: "primary",
                    size: "sm",
                    onClick: B[10] || (B[10] = (oe) => Y.$emit("view-nodes"))
                  }, {
                    default: g(() => [...B[26] || (B[26] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (n(), R(cs, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: g(() => [
                  $(_e, {
                    variant: "primary",
                    size: "sm",
                    onClick: B[11] || (B[11] = (oe) => Y.$emit("view-nodes"))
                  }, {
                    default: g(() => [...B[27] || (B[27] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : M.value ? (n(), i("span", kv, "No issues")) : (n(), R(gs, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      $(gv, {
        show: l.value,
        status: e.status,
        "is-repairing": p.value,
        onClose: B[12] || (B[12] = (oe) => l.value = !1),
        onNavigateWorkflows: c,
        onNavigateNodes: m,
        onRepair: _
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), $v = /* @__PURE__ */ xe(bv, [["__scopeId", "data-v-df52ba90"]]), Cv = ["type", "value", "placeholder", "disabled"], xv = /* @__PURE__ */ $e({
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
    function u(c) {
      const m = c.target.value;
      l("update:modelValue", m);
    }
    return at(() => {
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
      class: Pe(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: u,
      onKeyup: [
        m[0] || (m[0] = as((f) => c.$emit("enter"), ["enter"])),
        m[1] || (m[1] = as((f) => c.$emit("escape"), ["escape"]))
      ],
      onFocus: m[2] || (m[2] = (f) => c.$emit("focus")),
      onBlur: m[3] || (m[3] = (f) => c.$emit("blur"))
    }, null, 42, Cv));
  }
}), ln = /* @__PURE__ */ xe(xv, [["__scopeId", "data-v-0380d08f"]]), Sv = { class: "branch-create-form" }, Iv = { class: "form-actions" }, Ev = /* @__PURE__ */ $e({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, a = k(""), l = O(() => {
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
      $(ln, {
        modelValue: a.value,
        "onUpdate:modelValue": m[0] || (m[0] = (f) => a.value = f),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: u
      }, null, 8, ["modelValue"]),
      t("div", Iv, [
        $(_e, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: r
        }, {
          default: g(() => [...m[1] || (m[1] = [
            b(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        $(_e, {
          variant: "secondary",
          size: "sm",
          onClick: u
        }, {
          default: g(() => [...m[2] || (m[2] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), Tv = /* @__PURE__ */ xe(Ev, [["__scopeId", "data-v-7c500394"]]), Pv = { class: "branch-list-item__indicator" }, Rv = { class: "branch-list-item__name" }, Mv = {
  key: 0,
  class: "branch-list-item__actions"
}, Dv = {
  key: 0,
  class: "branch-list-item__current-label"
}, Lv = /* @__PURE__ */ $e({
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
      t("span", Pv, d(e.isCurrent ? "●" : "○"), 1),
      t("span", Rv, d(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (n(), i("div", Mv, [
        ot(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", Dv, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Nv = /* @__PURE__ */ xe(Lv, [["__scopeId", "data-v-c6581a24"]]), YL = Xs({
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
function Io() {
  return !1;
}
function Ov() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const s = Math.random() * 16 | 0;
    return (e === "x" ? s : s & 3 | 8).toString(16);
  });
}
function ct() {
  const e = k(!1), s = k(null);
  async function o(Z, Te) {
    var Lt;
    if (!((Lt = window.app) != null && Lt.api))
      throw new Error("ComfyUI API not available");
    const He = await window.app.api.fetchApi(Z, Te);
    if (!He.ok) {
      const us = await He.json().catch(() => ({}));
      throw new Error(us.error || us.message || `Request failed: ${He.status}`);
    }
    const kt = await He.text();
    if (kt)
      return JSON.parse(kt);
  }
  async function a(Z = !1) {
    return o(Z ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(Z, Te = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: Z, allow_issues: Te })
    });
  }
  async function r(Z = 10, Te = 0) {
    return o(`/v2/comfygit/log?limit=${Z}&offset=${Te}`);
  }
  async function u(Z, Te = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(Z)}&limit=${Te}`);
  }
  async function c(Z) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Z })
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
  async function v(Z) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Z, force: !0 })
    });
  }
  async function p() {
    return o("/v2/comfygit/branches");
  }
  async function _(Z) {
    return o(`/v2/comfygit/commit/${Z}`);
  }
  async function h(Z, Te = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: Z, force: Te })
    });
  }
  async function w(Z, Te = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Z, start_point: Te })
    });
  }
  async function x(Z, Te = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: Z, force: Te })
    });
  }
  async function C(Z, Te = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(Z)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: Te })
    });
  }
  async function S() {
    try {
      return await o("/v2/comfygit/environments");
    } catch {
      try {
        const Z = await a();
        return {
          environments: [{
            name: Z.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + Z.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: Z.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: Z.branch
          }],
          current: Z.environment,
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
  async function U() {
    return (await S()).environments;
  }
  async function I(Z) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(Z)}`);
    } catch {
      return null;
    }
  }
  async function P(Z, Te) {
    const He = { target_env: Z };
    return Te && (He.workspace_path = Te), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(He)
    });
  }
  async function M() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function A(Z) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Z)
    });
  }
  async function j() {
    return o("/v2/workspace/environments/create_status");
  }
  async function E(Z = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${Z}`);
  }
  async function L(Z) {
    return o(`/v2/workspace/environments/${Z}`, {
      method: "DELETE"
    });
  }
  async function ie(Z = !1) {
    try {
      return o(Z ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const Te = await a(Z), He = [];
      return Te.workflows.new.forEach((kt) => {
        He.push({
          name: kt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: kt
        });
      }), Te.workflows.modified.forEach((kt) => {
        He.push({
          name: kt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: kt
        });
      }), Te.workflows.synced.forEach((kt) => {
        He.push({
          name: kt,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: kt
        });
      }), He;
    }
  }
  async function le(Z) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Z)}/details`);
  }
  async function ne(Z) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Z)}/contract`);
  }
  async function te(Z, Te) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Z)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Te)
    });
  }
  async function K(Z) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Z)}/contract`, {
      method: "DELETE"
    });
  }
  async function X(Z) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Z)}/resolve`, {
      method: "POST"
    });
  }
  async function de(Z, Te, He) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Z)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: Te, install_models: He })
    });
  }
  async function Le(Z, Te, He) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(Z)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: Te, importance: He })
    });
  }
  async function ae() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function ye() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function fe(Z) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(Z)}`);
  }
  async function Oe(Z) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Z })
    });
  }
  async function se(Z, Te) {
    return o(`/v2/workspace/models/${Z}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Te })
    });
  }
  async function ce(Z, Te) {
    return o(`/v2/workspace/models/${Z}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: Te })
    });
  }
  async function Y(Z) {
    return o(`/v2/workspace/models/${Z}`, {
      method: "DELETE"
    });
  }
  async function B(Z) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Z)
    });
  }
  async function oe() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function G() {
    return o("/v2/workspace/models/directory");
  }
  async function N(Z) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Z })
    });
  }
  async function me(Z) {
    const Te = new URLSearchParams({ url: Z });
    return o(`/v2/workspace/huggingface/repo-info?${Te}`);
  }
  async function ze() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function Ve(Z, Te = 10) {
    const He = new URLSearchParams({ query: Z, limit: String(Te) });
    return o(`/v2/workspace/huggingface/search?${He}`);
  }
  async function W(Z) {
    try {
      const Te = Z ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(Z)}` : "/v2/comfygit/config";
      return o(Te);
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
  async function Q(Z, Te) {
    const He = Te ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(Te)}` : "/v2/comfygit/config";
    return o(He, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Z)
    });
  }
  async function ge(Z, Te) {
    try {
      const He = new URLSearchParams();
      return Z && He.append("level", Z), Te && He.append("lines", Te.toString()), o(`/v2/comfygit/debug/logs?${He}`);
    } catch {
      return [];
    }
  }
  async function Ee(Z, Te) {
    try {
      const He = new URLSearchParams();
      return Z && He.append("level", Z), Te && He.append("lines", Te.toString()), o(`/v2/workspace/debug/logs?${He}`);
    } catch {
      return [];
    }
  }
  async function Se() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function Ie() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function Ne(Z, Te) {
    try {
      const He = new URLSearchParams();
      return Z && He.append("level", Z), Te && He.append("lines", Te.toString()), o(`/v2/workspace/debug/orchestrator-logs?${He}`);
    } catch {
      return [];
    }
  }
  async function Ce() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function Me(Z) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: Z })
    });
  }
  async function ke() {
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
  async function Ge(Z) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Z)}/track-dev`, {
      method: "POST"
    });
  }
  async function Ue(Z) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Z)}/install`, {
      method: "POST"
    });
  }
  async function be(Z, Te) {
    var Fs, Je, _a, Cl;
    const He = Ov(), kt = ((Je = (Fs = window.app) == null ? void 0 : Fs.api) == null ? void 0 : Je.clientId) ?? ((Cl = (_a = window.app) == null ? void 0 : _a.api) == null ? void 0 : Cl.initialClientId) ?? "comfygit-panel", Lt = {
      id: Z.id,
      version: Z.version || Z.selected_version || "latest",
      selected_version: Z.selected_version || "latest",
      mode: Z.mode || "remote",
      channel: Z.channel || "default"
    };
    return Z.install_source && (Lt.install_source = Z.install_source), Z.install_source === "git" && Z.repository && (Lt.repository = Z.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Lt,
        ui_id: He,
        client_id: kt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", He, "for package:", Z.id), Te != null && Te.beforeQueueStart && await Te.beforeQueueStart(He), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: He };
  }
  async function J(Z) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Z)}/update`, {
      method: "POST"
    });
  }
  async function Be(Z) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(Z)}`, {
      method: "DELETE"
    });
  }
  async function V() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function F(Z, Te) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: Z, url: Te })
    });
  }
  async function q(Z) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Z)}`, {
      method: "DELETE"
    });
  }
  async function ve(Z, Te, He) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Z)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: Te, push_url: He })
    });
  }
  async function z(Z, Te) {
    const He = {};
    return Te && (He["X-Git-Auth-Token"] = Te), o(`/v2/comfygit/remotes/${encodeURIComponent(Z)}/fetch`, {
      method: "POST",
      headers: He
    });
  }
  async function re(Z) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(Z)}/status`);
    } catch {
      return null;
    }
  }
  async function ue(Z = "skip", Te = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: Z,
        remove_extra_nodes: Te
      })
    });
  }
  async function Fe(Z, Te) {
    const He = Te ? `/v2/comfygit/remotes/${encodeURIComponent(Z)}/pull-preview?branch=${encodeURIComponent(Te)}` : `/v2/comfygit/remotes/${encodeURIComponent(Z)}/pull-preview`;
    return o(He);
  }
  async function Ae(Z, Te = {}) {
    const He = { "Content-Type": "application/json" };
    return Te.authToken && (He["X-Git-Auth-Token"] = Te.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(Z)}/pull`, {
      method: "POST",
      headers: He,
      body: JSON.stringify({
        model_strategy: Te.modelStrategy || "skip",
        force: Te.force || !1,
        resolutions: Te.resolutions
      })
    });
  }
  async function We(Z, Te) {
    const He = Te ? `/v2/comfygit/remotes/${encodeURIComponent(Z)}/push-preview?branch=${encodeURIComponent(Te)}` : `/v2/comfygit/remotes/${encodeURIComponent(Z)}/push-preview`;
    return o(He);
  }
  async function Xe(Z, Te = {}) {
    const He = { "Content-Type": "application/json" };
    return Te.authToken && (He["X-Git-Auth-Token"] = Te.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(Z)}/push`, {
      method: "POST",
      headers: He,
      body: JSON.stringify({ force: Te.force || !1 })
    });
  }
  async function qe(Z, Te) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(Z)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: Te })
    });
  }
  async function it(Z) {
    const Te = {
      success: 0,
      failed: []
    };
    for (const He of Z)
      try {
        await X(He), Te.success++;
      } catch (kt) {
        Te.failed.push({
          name: He,
          error: kt instanceof Error ? kt.message : "Unknown error"
        });
      }
    return Te;
  }
  async function lt(Z) {
    var kt;
    const Te = new FormData();
    if (Te.append("file", Z), !((kt = window.app) != null && kt.api))
      throw new Error("ComfyUI API not available");
    const He = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: Te
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!He.ok) {
      const Lt = await He.json().catch(() => ({}));
      throw new Error(Lt.error || `Preview failed: ${He.status}`);
    }
    return He.json();
  }
  async function dt(Z) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(Z)}`
    );
  }
  async function Et(Z, Te, He, kt) {
    var Fs;
    const Lt = new FormData();
    if (Lt.append("file", Z), Lt.append("name", Te), Lt.append("model_strategy", He), Lt.append("torch_backend", kt), !((Fs = window.app) != null && Fs.api))
      throw new Error("ComfyUI API not available");
    const us = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Lt
    });
    if (!us.ok) {
      const Je = await us.json().catch(() => ({}));
      throw new Error(Je.message || Je.error || `Import failed: ${us.status}`);
    }
    return us.json();
  }
  async function Wt() {
    return o("/v2/workspace/import/status");
  }
  async function Rt(Z) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: Z })
    });
  }
  async function pe(Z, Te, He, kt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: Z,
        name: Te,
        model_strategy: He,
        torch_backend: kt
      })
    });
  }
  async function T() {
    return o("/v2/setup/status");
  }
  async function D() {
    return o("/v2/comfygit/update-check");
  }
  async function De() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function tt(Z) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Z)
    });
  }
  async function pt() {
    return o("/v2/setup/initialize_status");
  }
  async function st(Z) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Z)
    });
  }
  async function xt() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function Tt() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function je(Z, Te) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: Z, save_key: Te })
    });
  }
  async function is() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function ys(Z) {
    const Te = Z ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(Z)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(Te);
  }
  async function po(Z) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Z)
    });
  }
  async function go() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function ho(Z) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Z)}`, {
      method: "DELETE"
    });
  }
  async function eo(Z) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Z)}/stop`, {
      method: "POST"
    });
  }
  async function yo(Z) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Z)}/start`, {
      method: "POST"
    });
  }
  async function wo(Z) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(Z)}/status`);
  }
  async function _o(Z) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: Z })
    });
  }
  async function ko(Z = !1) {
    return o(Z ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function bo() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function ha() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function ya(Z) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Z)
    });
  }
  async function wa(Z) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(Z)}`, {
      method: "DELETE"
    });
  }
  async function xn(Z) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Z)
    });
  }
  async function he() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function ee(Z) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Z)}/info`);
  }
  async function Ke(Z) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Z)}/instances`);
  }
  async function Qe(Z, Te) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Z)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Te)
    });
  }
  async function yt(Z, Te) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Z)}/instances/${encodeURIComponent(Te)}/start`, {
      method: "POST"
    });
  }
  async function Pt(Z, Te) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Z)}/instances/${encodeURIComponent(Te)}/stop`, {
      method: "POST"
    });
  }
  async function rs(Z, Te) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(Z)}/instances/${encodeURIComponent(Te)}`, {
      method: "DELETE"
    });
  }
  async function to(Z) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: Z })
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
    getBranches: p,
    getCommitDetail: _,
    checkout: h,
    createBranch: w,
    switchBranch: x,
    deleteBranch: C,
    // Environment Management
    listEnvironments: S,
    getEnvironments: U,
    getEnvironmentDetails: I,
    switchEnvironment: P,
    getSwitchProgress: M,
    createEnvironment: A,
    getCreateProgress: j,
    getComfyUIReleases: E,
    deleteEnvironment: L,
    // Workflow Management
    getWorkflows: ie,
    getWorkflowDetails: le,
    getWorkflowContract: ne,
    saveWorkflowContract: te,
    deleteWorkflowContract: K,
    resolveWorkflow: X,
    installWorkflowDeps: de,
    setModelImportance: Le,
    // Model Management
    getEnvironmentModels: ae,
    getWorkspaceModels: ye,
    getModelDetails: fe,
    openFileLocation: Oe,
    addModelSource: se,
    removeModelSource: ce,
    deleteModel: Y,
    downloadModel: B,
    scanWorkspaceModels: oe,
    getModelsDirectory: G,
    setModelsDirectory: N,
    getHuggingFaceRepoInfo: me,
    getModelsSubdirectories: ze,
    searchHuggingFaceRepos: Ve,
    // Settings
    getConfig: W,
    updateConfig: Q,
    // Debug/Logs
    getEnvironmentLogs: ge,
    getWorkspaceLogs: Ee,
    getEnvironmentLogPath: Se,
    getWorkspaceLogPath: Ie,
    getOrchestratorLogs: Ne,
    getOrchestratorLogPath: Ce,
    openFile: Me,
    // Node Management
    getNodes: ke,
    trackNodeAsDev: Ge,
    installNode: Ue,
    queueNodeInstall: be,
    updateNode: J,
    uninstallNode: Be,
    // Git Remotes
    getRemotes: V,
    addRemote: F,
    removeRemote: q,
    updateRemoteUrl: ve,
    fetchRemote: z,
    getRemoteSyncStatus: re,
    // Push/Pull
    getPullPreview: Fe,
    pullFromRemote: Ae,
    getPushPreview: We,
    pushToRemote: Xe,
    validateMerge: qe,
    // Environment Sync
    syncEnvironmentManually: ue,
    // Workflow Repair
    repairWorkflowModels: it,
    // Import Operations
    previewTarballImport: lt,
    previewGitImport: Rt,
    validateEnvironmentName: dt,
    executeImport: Et,
    executeGitImport: pe,
    getImportProgress: Wt,
    // First-Time Setup
    getSetupStatus: T,
    // Manager Update Notice
    getUpdateCheck: D,
    updateManager: De,
    initializeWorkspace: tt,
    getInitializeProgress: pt,
    validatePath: st,
    // Deploy Operations
    getDeploySummary: xt,
    getDataCenters: Tt,
    testRunPodConnection: je,
    getNetworkVolumes: is,
    getRunPodGpuTypes: ys,
    deployToRunPod: po,
    getRunPodPods: go,
    terminateRunPodPod: ho,
    stopRunPodPod: eo,
    startRunPodPod: yo,
    getDeploymentStatus: wo,
    exportDeployPackage: _o,
    getStoredRunPodKey: ko,
    clearRunPodKey: bo,
    // Custom Worker Operations
    getCustomWorkers: ha,
    addCustomWorker: ya,
    removeCustomWorker: wa,
    testWorkerConnection: xn,
    scanForWorkers: he,
    getWorkerSystemInfo: ee,
    getWorkerInstances: Ke,
    deployToWorker: Qe,
    startWorkerInstance: yt,
    stopWorkerInstance: Pt,
    terminateWorkerInstance: rs,
    // Git Authentication
    testGitAuth: to
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
}, Gv = /* @__PURE__ */ $e({
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
    return at(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Zs(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (u, c) => (n(), R(Ot, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Pe(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: c[1] || (c[1] = ut(() => {
          }, ["stop"]))
        }, [
          t("div", Av, [
            ot(u.$slots, "header", {}, () => [
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
            e.loading ? (n(), i("div", Fv, "Loading...")) : e.error ? (n(), i("div", Bv, d(e.error), 1)) : ot(u.$slots, "body", { key: 2 }, void 0)
          ]),
          u.$slots.footer ? (n(), i("div", Wv, [
            ot(u.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ])
    ]));
  }
}), Ct = /* @__PURE__ */ xe(Gv, [["__scopeId", "data-v-8dab1081"]]), jv = ["type", "disabled"], Hv = {
  key: 0,
  class: "spinner"
}, Kv = /* @__PURE__ */ $e({
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
      e.loading ? (n(), i("span", Hv)) : y("", !0),
      ot(s.$slots, "default", {}, void 0)
    ], 10, jv));
  }
}), Re = /* @__PURE__ */ xe(Kv, [["__scopeId", "data-v-f3452606"]]), qv = { class: "commit-list" }, Yv = /* @__PURE__ */ $e({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (n(), i("div", qv, [
      ot(s.$slots, "default", {}, void 0)
    ]));
  }
}), Vr = /* @__PURE__ */ xe(Yv, [["__scopeId", "data-v-8c5ee761"]]), Jv = { class: "commit-hash" }, Qv = /* @__PURE__ */ $e({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = O(() => s.hash.slice(0, s.length));
    return (a, l) => (n(), i("span", Jv, d(o.value), 1));
  }
}), Fr = /* @__PURE__ */ xe(Qv, [["__scopeId", "data-v-7c333cc6"]]), Xv = { class: "commit-message" }, Zv = { class: "commit-date" }, ep = /* @__PURE__ */ $e({
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
      class: Pe(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      $(Fr, { hash: e.hash }, null, 8, ["hash"]),
      t("span", Xv, d(e.message), 1),
      t("span", Zv, d(e.relativeDate), 1),
      r.$slots.actions ? (n(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: u[0] || (u[0] = ut(() => {
        }, ["stop"]))
      }, [
        ot(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Br = /* @__PURE__ */ xe(ep, [["__scopeId", "data-v-dd7c621b"]]), tp = { class: "header-info" }, sp = { class: "branch-name" }, op = {
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
}, up = /* @__PURE__ */ $e({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const s = e, { getBranchHistory: o } = ct(), a = k([]), l = k(!1), r = k(!0);
    return at(async () => {
      try {
        const u = await o(s.branchName, 50);
        a.value = u.commits, l.value = u.has_more;
      } finally {
        r.value = !1;
      }
    }), (u, c) => (n(), R(Ct, {
      size: "md",
      "show-close-button": !1,
      onClose: c[3] || (c[3] = (m) => u.$emit("close"))
    }, {
      header: g(() => [
        t("div", tp, [
          c[4] || (c[4] = t("h3", { class: "header-title" }, "BRANCH", -1)),
          t("span", sp, d(e.branchName), 1),
          e.isCurrent ? (n(), i("span", op, "CURRENT")) : y("", !0)
        ]),
        $(Re, {
          variant: "ghost",
          size: "sm",
          onClick: c[0] || (c[0] = (m) => u.$emit("close"))
        }, {
          default: g(() => [...c[5] || (c[5] = [
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
        t("div", np, [
          r.value ? (n(), i("span", ap, "Loading...")) : (n(), i(H, { key: 1 }, [
            t("span", null, d(a.value.length) + " commits", 1),
            l.value ? (n(), i("span", lp, "(showing first " + d(a.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (n(), i("div", ip, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", rp, " No commits found on this branch ")) : (n(), R(Vr, {
          key: 2,
          class: "branch-commits"
        }, {
          default: g(() => [
            (n(!0), i(H, null, we(a.value, (m) => (n(), R(Br, {
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
        e.isCurrent ? y("", !0) : (n(), R(_e, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: c[1] || (c[1] = (m) => u.$emit("delete", e.branchName))
        }, {
          default: g(() => [...c[6] || (c[6] = [
            b(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        c[8] || (c[8] = t("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? y("", !0) : (n(), R(Re, {
          key: 1,
          variant: "primary",
          onClick: c[2] || (c[2] = (m) => u.$emit("switch", e.branchName))
        }, {
          default: g(() => [...c[7] || (c[7] = [
            b(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), cp = /* @__PURE__ */ xe(up, [["__scopeId", "data-v-2e5437cc"]]), dp = {
  key: 2,
  class: "branch-list"
}, mp = /* @__PURE__ */ $e({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: s }) {
    const o = s, a = k(!1), l = k(null);
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
    return (v, p) => (n(), R(qt, null, {
      header: g(() => [
        $(Yt, { title: "BRANCHES" }, {
          actions: g(() => [
            a.value ? y("", !0) : (n(), R(_e, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: p[0] || (p[0] = (_) => a.value = !0)
            }, {
              default: g(() => [...p[2] || (p[2] = [
                b(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: g(() => [
        a.value ? (n(), R(Tv, {
          key: 0,
          onCreate: r,
          onCancel: u
        })) : y("", !0),
        e.branches.length === 0 ? (n(), R(gs, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (n(), i("div", dp, [
          (n(!0), i(H, null, we(e.branches, (_) => (n(), R(Nv, {
            key: _.name,
            "branch-name": _.name,
            "is-current": _.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (h) => c(_)
          }, {
            actions: g(() => [
              _.is_current ? y("", !0) : (n(), R(_e, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: ut((h) => o("switch", _.name), ["stop"])
              }, {
                default: g(() => [...p[3] || (p[3] = [
                  b(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (n(), R(cp, {
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
}), fp = /* @__PURE__ */ xe(mp, [["__scopeId", "data-v-eefdcb00"]]), vp = /* @__PURE__ */ $e({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    const s = e, o = O(() => `HISTORY (${s.currentRef || "detached"})`);
    return (a, l) => (n(), R(qt, null, {
      header: g(() => [
        $(Yt, { title: o.value }, null, 8, ["title"])
      ]),
      content: g(() => [
        e.commits.length === 0 ? (n(), R(gs, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), R(Vr, { key: 1 }, {
          default: g(() => [
            (n(!0), i(H, null, we(e.commits, (r) => (n(), R(Br, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (u) => a.$emit("select", r)
            }, {
              actions: g(() => [
                $(_e, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (u) => a.$emit("checkout", r),
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
}), pp = /* @__PURE__ */ xe(vp, [["__scopeId", "data-v-62a5d9da"]]);
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
}, yp = /* @__PURE__ */ $e({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (n(), R(fl(`h${e.level}`), {
      class: Pe(["base-title", e.variant])
    }, {
      default: g(() => [
        ot(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", hp, "(" + d(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ls = /* @__PURE__ */ xe(yp, [["__scopeId", "data-v-5a01561d"]]), wp = ["value", "disabled"], _p = {
  key: 0,
  value: "",
  disabled: ""
}, kp = ["value"], bp = {
  key: 0,
  class: "base-select-error"
}, $p = /* @__PURE__ */ $e({
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
        e.placeholder ? (n(), i("option", _p, d(e.placeholder), 1)) : y("", !0),
        (n(!0), i(H, null, we(e.options, (r) => (n(), i("option", {
          key: s(r),
          value: s(r)
        }, d(o(r)), 9, kp))), 128))
      ], 42, wp),
      e.error ? (n(), i("span", bp, d(e.error), 1)) : y("", !0)
    ], 2));
  }
}), co = /* @__PURE__ */ xe($p, [["__scopeId", "data-v-4996bfe0"]]), Cp = { class: "popover-header" }, xp = { class: "popover-title" }, Sp = { class: "popover-content" }, Ip = {
  key: 0,
  class: "popover-actions"
}, Ep = /* @__PURE__ */ $e({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (n(), R(Ot, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Ft({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = ut(() => {
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
            ot(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (n(), i("div", Ip, [
            ot(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ])) : y("", !0)
    ]));
  }
}), hs = /* @__PURE__ */ xe(Ep, [["__scopeId", "data-v-42815ace"]]), Tp = { class: "detail-section" }, Pp = {
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
}, tg = /* @__PURE__ */ $e({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: u, queueNodeInstall: c } = ct(), m = k(null), f = k(!1), v = k(null), p = k(!1), _ = k({}), h = k(!1), w = k(/* @__PURE__ */ new Set()), x = k(/* @__PURE__ */ new Set()), C = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(K) {
      switch (K) {
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
    function U(K) {
      switch (K) {
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
    function I(K) {
      switch (K) {
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
    function P(K) {
      switch (K) {
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
    function M(K) {
      switch (K) {
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
    function A(K) {
      if (!K.loaded_by || K.loaded_by.length === 0) return [];
      const X = K.hash || K.filename;
      return w.value.has(X) ? K.loaded_by : K.loaded_by.slice(0, 3);
    }
    function j(K) {
      return w.value.has(K);
    }
    function E(K) {
      w.value.has(K) ? w.value.delete(K) : w.value.add(K), w.value = new Set(w.value);
    }
    async function L() {
      f.value = !0, v.value = null;
      try {
        m.value = await l(o.workflowName);
      } catch (K) {
        v.value = K instanceof Error ? K.message : "Failed to load workflow details";
      } finally {
        f.value = !1;
      }
    }
    function ie(K, X) {
      _.value[K] = X, p.value = !0;
    }
    async function le(K) {
      try {
        await u(K);
      } catch (X) {
        v.value = X instanceof Error ? X.message : "Failed to open file location";
      }
    }
    async function ne(K) {
      if (K.package_id)
        try {
          const X = K.latest_version || "latest";
          await c({
            id: K.package_id,
            version: X,
            selected_version: X,
            mode: "remote",
            channel: "default"
          }), x.value.add(K.package_id);
        } catch (X) {
          v.value = X instanceof Error ? X.message : "Failed to queue node install";
        }
    }
    async function te() {
      if (!p.value) {
        a("close");
        return;
      }
      f.value = !0, v.value = null;
      try {
        for (const [K, X] of Object.entries(_.value))
          await r(o.workflowName, K, X);
        a("refresh"), a("close");
      } catch (K) {
        v.value = K instanceof Error ? K.message : "Failed to save changes";
      } finally {
        f.value = !1;
      }
    }
    return at(L), (K, X) => (n(), i(H, null, [
      $(Ct, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: f.value,
        error: v.value || void 0,
        onClose: X[4] || (X[4] = (de) => a("close"))
      }, {
        body: g(() => [
          m.value ? (n(), i(H, { key: 0 }, [
            t("section", Tp, [
              $(Ls, { variant: "section" }, {
                default: g(() => [
                  b("MODELS USED (" + d(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (n(), i("div", Pp, " No models used in this workflow ")) : y("", !0),
              (n(!0), i(H, null, we(m.value.models, (de) => {
                var Le;
                return n(), i("div", {
                  key: de.hash || de.filename,
                  class: "model-card"
                }, [
                  t("div", Rp, [
                    X[6] || (X[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", Mp, d(de.filename), 1)
                  ]),
                  t("div", Dp, [
                    t("div", Lp, [
                      X[7] || (X[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Pe(["value", S(de.status)])
                      }, d(U(de.status)), 3)
                    ]),
                    t("div", Np, [
                      t("span", Up, [
                        X[8] || (X[8] = b(" Importance: ", -1)),
                        $(zr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: X[0] || (X[0] = (ae) => h.value = !0)
                        })
                      ]),
                      $(co, {
                        "model-value": _.value[de.filename] || de.importance,
                        options: C,
                        "onUpdate:modelValue": (ae) => ie(de.filename, ae)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    de.loaded_by && de.loaded_by.length > 0 ? (n(), i("div", Op, [
                      X[9] || (X[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", Ap, [
                        (n(!0), i(H, null, we(A(de), (ae, ye) => (n(), i("div", {
                          key: `${ae.node_id}-${ye}`,
                          class: "node-reference"
                        }, d(ae.node_type) + " (Node #" + d(ae.node_id) + ") ", 1))), 128)),
                        de.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (ae) => E(de.hash || de.filename)
                        }, d(j(de.hash || de.filename) ? "▼ Show less" : `▶ View all (${de.loaded_by.length})`), 9, zp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    de.size_mb ? (n(), i("div", Vp, [
                      X[10] || (X[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", Fp, d(de.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    de.has_category_mismatch ? (n(), i("div", Bp, [
                      X[13] || (X[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", Wp, [
                        X[11] || (X[11] = b(" In ", -1)),
                        t("code", null, d(de.actual_category) + "/", 1),
                        X[12] || (X[12] = b(" but loader needs ", -1)),
                        t("code", null, d((Le = de.expected_categories) == null ? void 0 : Le[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  de.status !== "available" ? (n(), i("div", Gp, [
                    de.status === "downloadable" ? (n(), R(Re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: X[1] || (X[1] = (ae) => a("resolve"))
                    }, {
                      default: g(() => [...X[14] || (X[14] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    })) : de.status === "category_mismatch" && de.file_path ? (n(), R(Re, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (ae) => le(de.file_path)
                    }, {
                      default: g(() => [...X[15] || (X[15] = [
                        b(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : de.status !== "path_mismatch" ? (n(), R(Re, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: X[2] || (X[2] = (ae) => a("resolve"))
                    }, {
                      default: g(() => [...X[16] || (X[16] = [
                        b(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            t("section", jp, [
              $(Ls, { variant: "section" }, {
                default: g(() => [
                  b("NODES USED (" + d(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (n(), i("div", Hp, " No custom nodes used in this workflow ")) : y("", !0),
              (n(!0), i(H, null, we(m.value.nodes, (de, Le) => (n(), i("div", {
                key: `${de.name}-${de.status}-${Le}`,
                class: "node-item"
              }, [
                t("span", {
                  class: Pe(["node-status", I(de.status)])
                }, d(P(de.status)), 3),
                t("div", Kp, [
                  t("div", qp, [
                    t("span", Yp, d(de.name), 1),
                    t("span", Jp, d(M(de.status)), 1),
                    de.version ? (n(), i("span", Qp, "v" + d(de.version), 1)) : y("", !0),
                    de.status === "uninstallable" && de.package_id && !x.value.has(de.package_id) ? (n(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (ae) => ne(de)
                    }, " Install ", 8, Xp)) : de.status === "uninstallable" && de.package_id && x.value.has(de.package_id) ? (n(), i("span", Zp, " Queued ")) : y("", !0)
                  ]),
                  de.guidance ? (n(), i("div", eg, d(de.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: g(() => [
          $(Re, {
            variant: "secondary",
            onClick: X[3] || (X[3] = (de) => a("close"))
          }, {
            default: g(() => [...X[17] || (X[17] = [
              b(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (n(), R(Re, {
            key: 0,
            variant: "primary",
            onClick: te
          }, {
            default: g(() => [...X[18] || (X[18] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      $(hs, {
        show: h.value,
        title: "Model Importance Levels",
        onClose: X[5] || (X[5] = (de) => h.value = !1)
      }, {
        content: g(() => [...X[19] || (X[19] = [
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
}), sg = /* @__PURE__ */ xe(tg, [["__scopeId", "data-v-543076d9"]]), og = ["type", "value", "placeholder", "disabled"], ng = {
  key: 0,
  class: "base-input-error"
}, ag = /* @__PURE__ */ $e({
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
          o[1] || (o[1] = as((a) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = as((a) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, og),
      e.error ? (n(), i("span", ng, d(e.error), 1)) : y("", !0)
    ], 2));
  }
}), ft = /* @__PURE__ */ xe(ag, [["__scopeId", "data-v-9ba02cdc"]]), lg = { class: "base-textarea-wrapper" }, ig = ["value", "rows", "placeholder", "disabled", "maxlength"], rg = {
  key: 0,
  class: "base-textarea-count"
}, ug = /* @__PURE__ */ $e({
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
          u[1] || (u[1] = as(ut((c) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          u[2] || (u[2] = as(ut((c) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          as(l, ["enter"])
        ]
      }, null, 40, ig),
      e.showCharCount && e.maxLength ? (n(), i("div", rg, d(e.modelValue.length) + " / " + d(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), qs = /* @__PURE__ */ xe(ug, [["__scopeId", "data-v-c6d16c93"]]), cg = ["for"], dg = {
  key: 0,
  class: "base-form-field-required"
}, mg = { class: "base-form-field-input" }, fg = {
  key: 1,
  class: "base-form-field-error"
}, vg = {
  key: 2,
  class: "base-form-field-hint"
}, pg = /* @__PURE__ */ $e({
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
    const s = e, o = O(() => s.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (a, l) => (n(), i("div", {
      class: Pe(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        b(d(e.label) + " ", 1),
        e.required ? (n(), i("span", dg, "*")) : y("", !0)
      ], 8, cg)) : y("", !0),
      t("div", mg, [
        ot(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", fg, d(e.error), 1)) : e.hint ? (n(), i("span", vg, d(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), gt = /* @__PURE__ */ xe(pg, [["__scopeId", "data-v-9a1cf296"]]), gg = { class: "contract-meta" }, hg = { class: "contract-summary" }, yg = { class: "summary-pill" }, wg = { class: "summary-pill" }, _g = { class: "summary-pill" }, kg = { class: "contract-meta-grid" }, bg = { class: "contract-layout" }, $g = { class: "contract-column" }, Cg = { class: "section-header" }, xg = {
  key: 0,
  class: "empty-message"
}, Sg = ["onClick"], Ig = { class: "item-card-title" }, Eg = { class: "item-card-meta" }, Tg = { class: "item-card-summary" }, Pg = { key: 0 }, Rg = { class: "contract-column" }, Mg = { class: "section-header" }, Dg = {
  key: 0,
  class: "empty-message"
}, Lg = ["onClick"], Ng = { class: "item-card-title" }, Ug = { class: "item-card-meta" }, Og = { class: "item-card-summary" }, Ag = /* @__PURE__ */ $e({
  __name: "WorkflowContractModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowContract: l, saveWorkflowContract: r, deleteWorkflowContract: u } = ct(), c = k(!1), m = k(!1), f = k(!1), v = k(null), p = k(null), _ = k(null), h = k(null), w = k(null), x = [
      "string",
      "integer",
      "number",
      "boolean",
      "enum",
      "image",
      "video",
      "audio",
      "file"
    ], C = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], S = O(() => {
      var se;
      return ((se = p.value) == null ? void 0 : se.contract_summary.has_contract) === !0;
    }), U = O(() => {
      if (!_.value)
        return { inputs: [], outputs: [] };
      const se = _.value.default_contract || "default";
      return _.value.contracts[se] || (_.value.contracts[se] = { inputs: [], outputs: [] }), _.value.contracts[se];
    }), I = O(() => {
      var ce;
      const se = ((ce = p.value) == null ? void 0 : ce.contract_summary.status) ?? "none";
      return se === "valid" ? "Valid Contract" : se === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function P(se) {
      return se ? JSON.parse(JSON.stringify(se)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function M(se) {
      return se === "integer" || se === "number";
    }
    function A(se) {
      return se === "enum";
    }
    function j(se) {
      return se == null ? "" : String(se);
    }
    function E(se) {
      const ce = se.trim();
      if (!ce) return;
      const Y = Number(ce);
      return Number.isFinite(Y) ? Y : void 0;
    }
    function L(se) {
      return (se || []).join(`
`);
    }
    function ie(se) {
      return se.split(/[\n,]/).map((ce) => ce.trim()).filter(Boolean);
    }
    function le(se) {
      return se == null ? "" : String(se);
    }
    function ne(se) {
      return typeof se == "string" ? se.length > 24 ? `${se.slice(0, 24)}...` : se : String(se);
    }
    function te(se) {
      if (!_.value) return;
      const ce = se.trim() || "default";
      _.value.default_contract = ce, _.value.contracts[ce] || (_.value.contracts[ce] = { inputs: [], outputs: [] });
    }
    function K(se) {
      U.value.inputs.splice(se, 1), h.value === se ? h.value = null : h.value != null && h.value > se && (h.value -= 1);
    }
    function X(se) {
      U.value.outputs.splice(se, 1), w.value === se ? w.value = null : w.value != null && w.value > se && (w.value -= 1);
    }
    function de(se) {
      h.value = h.value === se ? null : se;
    }
    function Le(se) {
      w.value = w.value === se ? null : se;
    }
    async function ae() {
      c.value = !0, v.value = null;
      try {
        p.value = await l(o.workflowName), _.value = P(p.value.execution_contract);
      } catch (se) {
        v.value = se instanceof Error ? se.message : "Failed to load workflow contract";
      } finally {
        c.value = !1;
      }
    }
    async function ye() {
      if (_.value) {
        m.value = !0, v.value = null;
        try {
          p.value = await r(o.workflowName, _.value), _.value = P(p.value.execution_contract), a("refresh");
        } catch (se) {
          v.value = se instanceof Error ? se.message : "Failed to save workflow contract";
        } finally {
          m.value = !1;
        }
      }
    }
    async function fe() {
      f.value = !0, v.value = null;
      try {
        await u(o.workflowName), await ae(), a("refresh");
      } catch (se) {
        v.value = se instanceof Error ? se.message : "Failed to delete workflow contract";
      } finally {
        f.value = !1;
      }
    }
    function Oe() {
      window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: o.workflowName }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel")), a("close");
    }
    return at(ae), (se, ce) => (n(), R(Ct, {
      title: `WORKFLOW CONTRACT: ${e.workflowName}`,
      size: "xl",
      loading: c.value,
      error: v.value || void 0,
      "fixed-height": "",
      onClose: ce[5] || (ce[5] = (Y) => a("close"))
    }, {
      body: g(() => [
        _.value ? (n(), i(H, { key: 0 }, [
          t("section", gg, [
            t("div", hg, [
              t("span", yg, d(I.value), 1),
              t("span", wg, d(U.value.inputs.length) + " input" + d(U.value.inputs.length === 1 ? "" : "s"), 1),
              t("span", _g, d(U.value.outputs.length) + " output" + d(U.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            t("div", kg, [
              $(gt, { label: "Default Contract" }, {
                default: g(() => [
                  $(ft, {
                    "model-value": _.value.default_contract,
                    "full-width": "",
                    "onUpdate:modelValue": te
                  }, null, 8, ["model-value"])
                ]),
                _: 1
              }),
              $(gt, { label: "Display Name" }, {
                default: g(() => [
                  $(ft, {
                    modelValue: U.value.display_name,
                    "onUpdate:modelValue": ce[0] || (ce[0] = (Y) => U.value.display_name = Y),
                    "full-width": ""
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            $(gt, { label: "Description" }, {
              default: g(() => [
                $(qs, {
                  modelValue: U.value.description,
                  "onUpdate:modelValue": ce[1] || (ce[1] = (Y) => U.value.description = Y),
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
                $(Ls, { variant: "section" }, {
                  default: g(() => [...ce[6] || (ce[6] = [
                    b("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              U.value.inputs.length ? y("", !0) : (n(), i("div", xg, " No inputs configured. ")),
              (n(!0), i(H, null, we(U.value.inputs, (Y, B) => (n(), i("div", {
                key: `input-${B}`,
                class: Pe(["item-card", { expanded: h.value === B }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (oe) => de(B)
                }, [
                  t("div", null, [
                    t("div", Ig, d(Y.name || `Input ${B + 1}`), 1),
                    t("div", Eg, [
                      b(" Node " + d(Y.node_id || "?"), 1),
                      Y.widget_idx !== void 0 ? (n(), i(H, { key: 0 }, [
                        b(" · Widget " + d(Y.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ]),
                    t("div", Tg, [
                      t("span", null, d(Y.type || "string"), 1),
                      t("span", null, d(Y.required ? "required" : "optional"), 1),
                      Y.default !== void 0 && Y.default !== "" ? (n(), i("span", Pg, "default " + d(ne(Y.default)), 1)) : y("", !0)
                    ])
                  ]),
                  $(Re, {
                    size: "sm",
                    variant: "ghost",
                    onClick: ut((oe) => K(B), ["stop"])
                  }, {
                    default: g(() => [...ce[7] || (ce[7] = [
                      b(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, Sg),
                h.value === B ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: ce[2] || (ce[2] = ut(() => {
                  }, ["stop"]))
                }, [
                  $(gt, { label: "Name" }, {
                    default: g(() => [
                      $(ft, {
                        modelValue: Y.name,
                        "onUpdate:modelValue": (oe) => Y.name = oe,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(gt, { label: "Display Name" }, {
                    default: g(() => [
                      $(ft, {
                        modelValue: Y.display_name,
                        "onUpdate:modelValue": (oe) => Y.display_name = oe,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(gt, { label: "Type" }, {
                    default: g(() => [
                      $(co, {
                        "model-value": Y.type,
                        options: x,
                        "full-width": "",
                        "onUpdate:modelValue": (oe) => Y.type = oe
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(gt, { label: "Required" }, {
                    default: g(() => [
                      $(co, {
                        "model-value": Y.required ? "true" : "false",
                        options: C,
                        "full-width": "",
                        "onUpdate:modelValue": (oe) => Y.required = oe === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(gt, {
                    class: Pe({ "item-grid-full": Y.type === "string" || Y.type === "enum" }),
                    label: "Default"
                  }, {
                    default: g(() => [
                      Y.type === "string" ? (n(), R(qs, {
                        key: 0,
                        "model-value": le(Y.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (oe) => Y.default = oe
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (n(), R(ft, {
                        key: 1,
                        modelValue: Y.default,
                        "onUpdate:modelValue": (oe) => Y.default = oe,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  M(Y.type) ? (n(), R(gt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: g(() => [
                      $(ft, {
                        "model-value": j(Y.min),
                        "full-width": "",
                        "onUpdate:modelValue": (oe) => Y.min = E(oe)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  M(Y.type) ? (n(), R(gt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: g(() => [
                      $(ft, {
                        "model-value": j(Y.max),
                        "full-width": "",
                        "onUpdate:modelValue": (oe) => Y.max = E(oe)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  A(Y.type) ? (n(), R(gt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: g(() => [
                      $(qs, {
                        "model-value": L(Y.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (oe) => Y.enum_values = ie(oe)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0)
                ])) : y("", !0)
              ], 2))), 128))
            ]),
            t("div", Rg, [
              t("div", Mg, [
                $(Ls, { variant: "section" }, {
                  default: g(() => [...ce[8] || (ce[8] = [
                    b("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              U.value.outputs.length ? y("", !0) : (n(), i("div", Dg, " No outputs configured. ")),
              (n(!0), i(H, null, we(U.value.outputs, (Y, B) => (n(), i("div", {
                key: `output-${B}`,
                class: Pe(["item-card", { expanded: w.value === B }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (oe) => Le(B)
                }, [
                  t("div", null, [
                    t("div", Ng, d(Y.name || `Output ${B + 1}`), 1),
                    t("div", Ug, [
                      b(" Node " + d(Y.node_id || "?"), 1),
                      Y.selector ? (n(), i(H, { key: 0 }, [
                        b(" · " + d(Y.selector), 1)
                      ], 64)) : y("", !0)
                    ]),
                    t("div", Og, [
                      t("span", null, d(Y.type || "file"), 1)
                    ])
                  ]),
                  $(Re, {
                    size: "sm",
                    variant: "ghost",
                    onClick: ut((oe) => X(B), ["stop"])
                  }, {
                    default: g(() => [...ce[9] || (ce[9] = [
                      b(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, Lg),
                w.value === B ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: ce[3] || (ce[3] = ut(() => {
                  }, ["stop"]))
                }, [
                  $(gt, { label: "Name" }, {
                    default: g(() => [
                      $(ft, {
                        modelValue: Y.name,
                        "onUpdate:modelValue": (oe) => Y.name = oe,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(gt, { label: "Display Name" }, {
                    default: g(() => [
                      $(ft, {
                        modelValue: Y.display_name,
                        "onUpdate:modelValue": (oe) => Y.display_name = oe,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(gt, { label: "Type" }, {
                    default: g(() => [
                      $(co, {
                        "model-value": Y.type,
                        options: x,
                        "full-width": "",
                        "onUpdate:modelValue": (oe) => Y.type = oe
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : y("", !0)
              ], 2))), 128))
            ])
          ])
        ], 64)) : y("", !0)
      ]),
      footer: g(() => [
        $(Re, {
          variant: "secondary",
          onClick: Oe
        }, {
          default: g(() => [...ce[10] || (ce[10] = [
            b(" Open I/O Mapping Mode ", -1)
          ])]),
          _: 1
        }),
        $(Re, {
          variant: "secondary",
          onClick: ce[4] || (ce[4] = (Y) => a("close"))
        }, {
          default: g(() => [...ce[11] || (ce[11] = [
            b(" Close ", -1)
          ])]),
          _: 1
        }),
        $(Re, {
          variant: "danger",
          disabled: !S.value,
          loading: f.value,
          onClick: fe
        }, {
          default: g(() => [...ce[12] || (ce[12] = [
            b(" Delete Contract ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"]),
        $(Re, {
          variant: "primary",
          loading: m.value,
          onClick: ye
        }, {
          default: g(() => [...ce[13] || (ce[13] = [
            b(" Save Contract ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), zg = /* @__PURE__ */ xe(Ag, [["__scopeId", "data-v-755761b8"]]), rt = Xs({
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
async function Eo() {
  if (rt.status === "downloading") return;
  const e = rt.items.find((s) => s.status === "queued");
  if (!e) {
    rt.status = "idle";
    return;
  }
  rt.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Vg(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    rt.status = "idle", Eo();
  }
}
async function Vg(e) {
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
    }, 250), p = () => {
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
            m = !0, p(), l.close(), $s = null, s();
            break;
          case "error":
            m = !0, p(), l.close(), $s = null, o(new Error(h.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      p(), l.close(), $s = null, m || o(new Error("Connection lost"));
    };
  });
}
async function Fg() {
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
function Vo() {
  function e(C) {
    for (const S of C) {
      if (rt.items.some(
        (P) => P.url === S.url && P.targetPath === S.targetPath && ["queued", "downloading", "paused", "completed"].includes(P.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${S.filename}`);
        continue;
      }
      const I = {
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
      rt.items.push(I);
    }
    rt.status === "idle" && Eo();
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
        $s && ($s.close(), $s = null), S.status = "failed", S.error = "Cancelled by user", rt.status = "idle", Eo();
      } else if (S.status === "queued") {
        const U = rt.items.findIndex((I) => I.id === C);
        U >= 0 && rt.items.splice(U, 1);
      }
    }
  }
  function o(C) {
    const S = Da(C);
    !S || S.status !== "failed" || (S.status = "queued", S.error = void 0, S.progress = 0, S.downloaded = 0, rt.status === "idle" && Eo());
  }
  function a(C) {
    const S = Da(C);
    !S || S.status !== "paused" || (S.status = "queued", rt.status === "idle" && Eo());
  }
  function l() {
    const C = rt.items.filter((S) => S.status === "paused");
    for (const S of C)
      S.status = "queued";
    rt.status === "idle" && Eo();
  }
  function r(C) {
    const S = rt.items.findIndex((U) => U.id === C);
    S >= 0 && ["completed", "failed", "paused"].includes(rt.items[S].status) && rt.items.splice(S, 1);
  }
  function u() {
    rt.items = rt.items.filter((C) => C.status !== "completed");
  }
  function c() {
    rt.items = rt.items.filter((C) => C.status !== "failed");
  }
  const m = O(
    () => rt.items.find((C) => C.status === "downloading")
  ), f = O(
    () => rt.items.filter((C) => C.status === "queued")
  ), v = O(
    () => rt.items.filter((C) => C.status === "completed")
  ), p = O(
    () => rt.items.filter((C) => C.status === "failed")
  ), _ = O(
    () => rt.items.filter((C) => C.status === "paused")
  ), h = O(() => rt.items.length > 0), w = O(
    () => rt.items.filter((C) => C.status === "queued" || C.status === "downloading").length
  ), x = O(
    () => rt.items.some((C) => C.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Gn(rt),
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
    clearCompleted: u,
    clearFailed: c,
    loadPendingDownloads: Fg
  };
}
function Gr() {
  const e = k(null), s = k(null), o = k([]), a = k([]), l = k(!1), r = k(null);
  async function u(U, I) {
    var M;
    if (!((M = window.app) != null && M.api))
      throw new Error("ComfyUI API not available");
    const P = await window.app.api.fetchApi(U, I);
    if (!P.ok) {
      const A = await P.json().catch(() => ({})), j = A.error || A.message || `Request failed: ${P.status}`;
      throw new Error(j);
    }
    return P.json();
  }
  async function c(U) {
    l.value = !0, r.value = null;
    try {
      let I;
      return Io() || (I = await u(
        `/v2/comfygit/workflow/${U}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), I.nodes.version_gated = I.nodes.version_gated || [], I.nodes.uninstallable = I.nodes.uninstallable || [], I.node_guidance = I.node_guidance || {}, I.package_aliases = I.package_aliases || {}, e.value = I, I;
    } catch (I) {
      const P = I instanceof Error ? I.message : "Unknown error occurred";
      throw r.value = P, I;
    } finally {
      l.value = !1;
    }
  }
  async function m(U, I, P, M) {
    l.value = !0, r.value = null;
    try {
      let A;
      if (!Io()) {
        const j = Object.fromEntries(I), E = Object.fromEntries(P), L = M ? Array.from(M) : [];
        A = await u(
          `/v2/comfygit/workflow/${U}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: j,
              model_choices: E,
              skipped_packages: L
            })
          }
        );
      }
      return s.value = A, A;
    } catch (A) {
      const j = A instanceof Error ? A.message : "Unknown error occurred";
      throw r.value = j, A;
    } finally {
      l.value = !1;
    }
  }
  async function f(U, I = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return Io() || (P = await u(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: U, limit: I })
        }
      )), o.value = P.results, P.results;
    } catch (P) {
      const M = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = M, P;
    } finally {
      l.value = !1;
    }
  }
  async function v(U, I = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return Io() || (P = await u(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: U, limit: I })
        }
      )), a.value = P.results, P.results;
    } catch (P) {
      const M = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = M, P;
    } finally {
      l.value = !1;
    }
  }
  const p = Xs({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function _() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.nodesInstalled = [], p.installError = void 0, p.needsRestart = void 0, p.error = void 0, p.nodeInstallProgress = void 0;
  }
  async function h(U) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Io(), await w(U);
    } catch (I) {
      const P = I instanceof Error ? I.message : "Failed to install nodes";
      throw p.installError = P, I;
    }
  }
  async function w(U) {
    var P;
    const I = await u(
      `/v2/comfygit/workflow/${U}/install`,
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
      const M = new Map(((P = I.failed) == null ? void 0 : P.map((A) => [A.node_id, A.error])) || []);
      for (let A = 0; A < p.nodesToInstall.length; A++) {
        const j = p.nodesToInstall[A], E = M.get(j);
        p.nodeInstallProgress.completedNodes.push({
          node_id: j,
          success: !E,
          error: E
        });
      }
    }
    return p.nodesInstalled = I.nodes_installed, p.needsRestart = I.nodes_installed.length > 0, I.failed && I.failed.length > 0 && (p.installError = `${I.failed.length} package(s) failed to install`), I;
  }
  async function x(U, I, P) {
    _(), p.phase = "resolving", r.value = null;
    const M = Object.fromEntries(I), A = Object.fromEntries(P);
    try {
      const j = await fetch(`/v2/comfygit/workflow/${U}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: M,
          model_choices: A
        })
      });
      if (!j.ok)
        throw new Error(`Request failed: ${j.status}`);
      if (!j.body)
        throw new Error("No response body");
      const E = j.body.getReader(), L = new TextDecoder();
      let ie = "";
      for (; ; ) {
        const { done: le, value: ne } = await E.read();
        if (le) break;
        ie += L.decode(ne, { stream: !0 });
        const te = ie.split(`

`);
        ie = te.pop() || "";
        for (const K of te) {
          if (!K.trim()) continue;
          const X = K.split(`
`);
          let de = "", Le = "";
          for (const ae of X)
            ae.startsWith("event: ") ? de = ae.slice(7) : ae.startsWith("data: ") && (Le = ae.slice(6));
          if (Le)
            try {
              const ae = JSON.parse(Le);
              C(de, ae);
            } catch (ae) {
              console.warn("Failed to parse SSE event:", ae);
            }
        }
      }
    } catch (j) {
      const E = j instanceof Error ? j.message : "Unknown error occurred";
      throw r.value = E, p.error = E, p.phase = "error", j;
    }
  }
  function C(U, I) {
    switch (U) {
      case "batch_start":
        p.phase = "downloading", p.totalFiles = I.total;
        break;
      case "file_start":
        p.currentFile = I.filename, p.currentFileIndex = I.index, p.bytesDownloaded = 0, p.bytesTotal = void 0;
        break;
      case "file_progress":
        p.bytesDownloaded = I.downloaded, p.bytesTotal = I.total;
        break;
      case "file_complete":
        p.completedFiles.push({
          filename: I.filename,
          success: I.success,
          error: I.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        p.nodesToInstall = I.nodes_to_install || [], I.download_results && (p.completedFiles = I.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = I.message, p.phase = "error", r.value = I.message;
        break;
    }
  }
  function S(U, I) {
    const { addToQueue: P } = Vo(), M = I.filter((A) => A.url && A.target_path).map((A) => ({
      workflow: U,
      filename: A.filename,
      url: A.url,
      targetPath: A.target_path,
      size: A.size || 0,
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
const Bg = { class: "resolution-stepper" }, Wg = { class: "stepper-header" }, Gg = ["onClick"], jg = {
  key: 0,
  class: "step-icon"
}, Hg = {
  key: 1,
  class: "step-number"
}, Kg = { class: "step-label" }, qg = {
  key: 0,
  class: "step-connector"
}, Yg = { class: "stepper-content" }, Jg = /* @__PURE__ */ $e({
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
    function u(f) {
      return l(f) ? "state-complete" : r(f) ? "state-partial" : "state-pending";
    }
    function c(f) {
      return !1;
    }
    function m(f) {
      a("step-change", f);
    }
    return (f, v) => (n(), i("div", Bg, [
      t("div", Wg, [
        (n(!0), i(H, null, we(e.steps, (p, _) => (n(), i("div", {
          key: p.id,
          class: Pe(["step", {
            active: e.currentStep === p.id,
            completed: l(p.id),
            "in-progress": r(p.id),
            disabled: c(p.id)
          }]),
          onClick: (h) => m(p.id)
        }, [
          t("div", {
            class: Pe(["step-indicator", u(p.id)])
          }, [
            l(p.id) ? (n(), i("span", jg, "✓")) : (n(), i("span", Hg, d(_ + 1), 1))
          ], 2),
          t("div", Kg, d(p.label), 1),
          _ < e.steps.length - 1 ? (n(), i("div", qg)) : y("", !0)
        ], 10, Gg))), 128))
      ]),
      t("div", Yg, [
        ot(f.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Qg = /* @__PURE__ */ xe(Jg, [["__scopeId", "data-v-2a7b3af8"]]), Xg = /* @__PURE__ */ $e({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = O(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), a = O(() => `confidence-${o.value}`), l = O(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, u) => (n(), i("span", {
      class: Pe(["confidence-badge", a.value, e.size])
    }, d(l.value), 3));
  }
}), Zn = /* @__PURE__ */ xe(Xg, [["__scopeId", "data-v-17ec4b80"]]), Zg = { class: "node-info" }, eh = { class: "node-info-text" }, th = { class: "item-body" }, sh = {
  key: 0,
  class: "resolved-state"
}, oh = {
  key: 1,
  class: "multiple-options"
}, nh = {
  key: 0,
  class: "installed-packs-section"
}, ah = { class: "installed-packs-list" }, lh = ["onClick"], ih = { class: "installed-pack-name" }, rh = { class: "installed-pack-source" }, uh = { class: "options-list" }, ch = ["onClick"], dh = ["name", "value", "checked", "onChange"], mh = { class: "option-content" }, fh = { class: "option-header" }, vh = { class: "option-package-id" }, ph = {
  key: 0,
  class: "option-title"
}, gh = { class: "option-meta" }, hh = {
  key: 0,
  class: "installed-badge"
}, yh = { class: "action-buttons" }, wh = {
  key: 2,
  class: "unresolved"
}, _h = {
  key: 0,
  class: "installed-packs-section"
}, kh = { class: "installed-packs-list" }, bh = ["onClick"], $h = { class: "installed-pack-name" }, Ch = { class: "installed-pack-source" }, xh = {
  key: 1,
  class: "searching-state"
}, Sh = { class: "options-list" }, Ih = ["onClick"], Eh = ["name", "value"], Th = { class: "option-content" }, Ph = { class: "option-header" }, Rh = { class: "option-package-id" }, Mh = {
  key: 0,
  class: "option-description"
}, Dh = { class: "option-meta" }, Lh = {
  key: 0,
  class: "installed-badge"
}, Nh = {
  key: 3,
  class: "unresolved-message"
}, Uh = { class: "action-buttons" }, Oh = /* @__PURE__ */ $e({
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
    const r = O(() => !!o.choice);
    O(() => {
      var v;
      return (v = o.choice) == null ? void 0 : v.action;
    }), O(() => {
      var v;
      return (v = o.choice) == null ? void 0 : v.package_id;
    });
    const u = O(() => o.installedNodePacks || []), c = O(() => {
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
      t("div", Zg, [
        t("span", eh, [
          p[7] || (p[7] = b("Node type: ", -1)),
          t("code", null, d(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Pe(["status-badge", c.value])
        }, d(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", th, [
        r.value ? (n(), i("div", sh, [
          $(Re, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (_) => a("clear-choice"))
          }, {
            default: g(() => [...p[8] || (p[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", oh, [
          u.value.length > 0 ? (n(), i("div", nh, [
            p[9] || (p[9] = t("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            t("div", ah, [
              (n(!0), i(H, null, we(u.value, (_) => (n(), i("button", {
                key: _.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (h) => a("installed-pack-selected", _.package_id)
              }, [
                t("span", ih, d(_.package_id), 1),
                t("span", rh, d(f(_.source)), 1)
              ], 8, lh))), 128))
            ])
          ])) : y("", !0),
          p[13] || (p[13] = t("p", { class: "options-prompt" }, "Potential matches:", -1)),
          t("div", uh, [
            (n(!0), i(H, null, we(e.options, (_, h) => (n(), i("label", {
              key: _.package_id,
              class: Pe(["option-card", { selected: e.selectedOptionIndex === h }]),
              onClick: (w) => m(h)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: h,
                checked: e.selectedOptionIndex === h,
                onChange: (w) => m(h)
              }, null, 40, dh),
              t("div", mh, [
                t("div", fh, [
                  t("span", vh, d(_.package_id), 1),
                  $(Zn, {
                    confidence: _.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                _.title && _.title !== _.package_id ? (n(), i("div", ph, d(_.title), 1)) : y("", !0),
                t("div", gh, [
                  _.is_installed ? (n(), i("span", hh, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, ch))), 128))
          ]),
          t("div", yh, [
            $(Re, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (_) => a("search"))
            }, {
              default: g(() => [...p[10] || (p[10] = [
                b(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            $(Re, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (_) => a("manual-entry"))
            }, {
              default: g(() => [...p[11] || (p[11] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            $(Re, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (_) => a("mark-optional"))
            }, {
              default: g(() => [...p[12] || (p[12] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", wh, [
          u.value.length > 0 ? (n(), i("div", _h, [
            p[14] || (p[14] = t("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            t("div", kh, [
              (n(!0), i(H, null, we(u.value, (_) => (n(), i("button", {
                key: _.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (h) => a("installed-pack-selected", _.package_id)
              }, [
                t("span", $h, d(_.package_id), 1),
                t("span", Ch, d(f(_.source)), 1)
              ], 8, bh))), 128))
            ])
          ])) : y("", !0),
          e.isSearching ? (n(), i("div", xh, [...p[15] || (p[15] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (n(), i(H, { key: 2 }, [
            p[16] || (p[16] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", Sh, [
              (n(!0), i(H, null, we(e.searchResults.slice(0, 5), (_, h) => (n(), i("label", {
                key: _.package_id,
                class: "option-card",
                onClick: (w) => a("search-result-selected", _)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: h
                }, null, 8, Eh),
                t("div", Th, [
                  t("div", Ph, [
                    t("span", Rh, d(_.package_id), 1),
                    $(Zn, {
                      confidence: _.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  _.description ? (n(), i("div", Mh, d(l(_.description)), 1)) : y("", !0),
                  t("div", Dh, [
                    _.is_installed ? (n(), i("span", Lh, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, Ih))), 128))
            ])
          ], 64)) : (n(), i("div", Nh, [...p[17] || (p[17] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", Uh, [
            $(Re, {
              variant: "secondary",
              size: "sm",
              onClick: p[4] || (p[4] = (_) => a("search"))
            }, {
              default: g(() => {
                var _;
                return [
                  b(d((_ = e.searchResults) != null && _.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            $(Re, {
              variant: "secondary",
              size: "sm",
              onClick: p[5] || (p[5] = (_) => a("manual-entry"))
            }, {
              default: g(() => [...p[18] || (p[18] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            $(Re, {
              variant: "secondary",
              size: "sm",
              onClick: p[6] || (p[6] = (_) => a("mark-optional"))
            }, {
              default: g(() => [...p[19] || (p[19] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Ah = /* @__PURE__ */ xe(Oh, [["__scopeId", "data-v-fb0bbf03"]]), zh = { class: "item-navigator" }, Vh = { class: "nav-item-info" }, Fh = ["title"], Bh = { class: "nav-controls" }, Wh = { class: "nav-arrows" }, Gh = ["disabled"], jh = ["disabled"], Hh = { class: "nav-position" }, Kh = /* @__PURE__ */ $e({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", zh, [
      t("div", Vh, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, d(e.itemName), 9, Fh)
      ]),
      t("div", Bh, [
        t("div", Wh, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, Gh),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, jh)
        ]),
        t("span", Hh, d(e.currentIndex + 1) + "/" + d(e.totalItems), 1)
      ])
    ]));
  }
}), jr = /* @__PURE__ */ xe(Kh, [["__scopeId", "data-v-74af7920"]]), qh = { class: "node-resolution-step" }, Yh = {
  key: 0,
  class: "auto-resolved-section"
}, Jh = { class: "section-header" }, Qh = { class: "stat-badge" }, Xh = { class: "resolved-packages-list" }, Zh = { class: "package-info" }, ey = { class: "package-id" }, ty = { class: "node-count" }, sy = { class: "package-actions" }, oy = {
  key: 0,
  class: "status-badge install"
}, ny = {
  key: 1,
  class: "status-badge skip"
}, ay = ["onClick"], ly = {
  key: 1,
  class: "section-divider"
}, iy = { class: "step-header" }, ry = { class: "stat-badge" }, uy = {
  key: 1,
  class: "step-body"
}, cy = {
  key: 3,
  class: "empty-state"
}, dy = { class: "node-modal-body" }, my = { class: "node-search-results-container" }, fy = {
  key: 0,
  class: "node-search-results"
}, vy = ["onClick"], py = { class: "node-result-header" }, gy = { class: "node-result-package-id" }, hy = {
  key: 0,
  class: "node-result-description"
}, yy = {
  key: 1,
  class: "node-empty-state"
}, wy = {
  key: 2,
  class: "node-empty-state"
}, _y = {
  key: 3,
  class: "node-empty-state"
}, ky = { class: "node-manual-entry-modal" }, by = { class: "node-modal-body" }, $y = { class: "node-modal-actions" }, Cy = /* @__PURE__ */ $e({
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
    const o = e, a = s, { searchNodes: l } = Gr(), r = k(0), u = k(!1), c = k(!1), m = k(""), f = k(""), v = k([]), p = k(!1), _ = k(/* @__PURE__ */ new Map()), h = k(/* @__PURE__ */ new Set()), w = k(!1);
    function x() {
      w.value && ye(), w.value = !1;
    }
    const C = O(() => o.nodes[r.value]), S = O(() => o.nodes.filter((G) => o.nodeChoices.has(G.node_type)).length), U = O(() => C.value ? _.value.get(C.value.node_type) || [] : []), I = O(() => C.value ? h.value.has(C.value.node_type) : !1);
    St(C, async (G) => {
      var N;
      G && ((N = G.options) != null && N.length || _.value.has(G.node_type) || h.value.has(G.node_type) || o.nodeChoices.has(G.node_type) || await P(G.node_type));
    }, { immediate: !0 });
    async function P(G) {
      h.value.add(G);
      try {
        const N = await l(G, 5);
        _.value.set(G, N);
      } catch {
        _.value.set(G, []);
      } finally {
        h.value.delete(G);
      }
    }
    const M = O(() => o.autoResolvedPackages.filter((G) => !o.skippedPackages.has(G.package_id)).length);
    function A(G) {
      return o.skippedPackages.has(G);
    }
    function j(G) {
      a("package-skip", G);
    }
    const E = O(() => {
      var N;
      if (!C.value) return "not-found";
      const G = o.nodeChoices.get(C.value.node_type);
      if (G)
        switch (G.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (N = C.value.options) != null && N.length ? "ambiguous" : "not-found";
    }), L = O(() => {
      var N;
      if (!C.value) return;
      const G = o.nodeChoices.get(C.value.node_type);
      if (G)
        switch (G.action) {
          case "install":
            return G.package_id ? `→ ${G.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (N = C.value.options) != null && N.length ? `${C.value.options.length} matches` : "Not Found";
    });
    function ie(G) {
      G >= 0 && G < o.nodes.length && (r.value = G);
    }
    function le() {
      var G;
      for (let N = r.value + 1; N < o.nodes.length; N++) {
        const me = o.nodes[N];
        if (!((G = o.nodeChoices) != null && G.has(me.node_type))) {
          ie(N);
          return;
        }
      }
    }
    function ne() {
      C.value && (a("mark-optional", C.value.node_type), Mt(() => le()));
    }
    function te() {
      C.value && (a("skip", C.value.node_type), Mt(() => le()));
    }
    function K(G) {
      C.value && (a("option-selected", C.value.node_type, G), Mt(() => le()));
    }
    function X() {
      C.value && a("clear-choice", C.value.node_type);
    }
    function de() {
      C.value && (m.value = C.value.node_type, v.value = U.value, u.value = !0, ce(m.value));
    }
    function Le() {
      f.value = "", c.value = !0;
    }
    function ae(G) {
      C.value && (a("manual-entry", C.value.node_type, G), Mt(() => le()));
    }
    function ye() {
      u.value = !1, m.value = "", v.value = [];
    }
    function fe() {
      c.value = !1, f.value = "";
    }
    let Oe = null;
    function se() {
      Oe && clearTimeout(Oe), Oe = setTimeout(() => {
        ce(m.value);
      }, 300);
    }
    async function ce(G) {
      if (!G.trim()) {
        v.value = [];
        return;
      }
      p.value = !0;
      try {
        v.value = await l(G, 10);
      } catch {
        v.value = [];
      } finally {
        p.value = !1;
      }
    }
    function Y(G) {
      C.value && (a("manual-entry", C.value.node_type, G.package_id), ye(), Mt(() => le()));
    }
    function B(G) {
      C.value && (a("manual-entry", C.value.node_type, G.package_id), Mt(() => le()));
    }
    function oe() {
      !C.value || !f.value.trim() || (a("manual-entry", C.value.node_type, f.value.trim()), fe(), Mt(() => le()));
    }
    return (G, N) => {
      var me, ze;
      return n(), i("div", qh, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", Yh, [
          t("div", Jh, [
            N[6] || (N[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", Qh, d(M.value) + "/" + d(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", Xh, [
            (n(!0), i(H, null, we(e.autoResolvedPackages, (Ve) => (n(), i("div", {
              key: Ve.package_id,
              class: "resolved-package-item"
            }, [
              t("div", Zh, [
                t("code", ey, d(Ve.package_id), 1),
                t("span", ty, d(Ve.node_types_count) + " node type" + d(Ve.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", sy, [
                A(Ve.package_id) ? (n(), i("span", ny, " SKIPPED ")) : (n(), i("span", oy, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (W) => j(Ve.package_id)
                }, d(A(Ve.package_id) ? "Include" : "Skip"), 9, ay)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", ly)) : y("", !0),
        e.nodes.length > 0 ? (n(), i(H, { key: 2 }, [
          t("div", iy, [
            N[7] || (N[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", ry, d(S.value) + "/" + d(e.nodes.length) + " resolved", 1)
          ]),
          C.value ? (n(), R(jr, {
            key: 0,
            "item-name": C.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: N[0] || (N[0] = (Ve) => ie(r.value - 1)),
            onNext: N[1] || (N[1] = (Ve) => ie(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          C.value ? (n(), i("div", uy, [
            $(Ah, {
              "node-type": C.value.node_type,
              "has-multiple-options": !!((me = C.value.options) != null && me.length),
              options: C.value.options,
              choice: (ze = e.nodeChoices) == null ? void 0 : ze.get(C.value.node_type),
              status: E.value,
              "status-label": L.value,
              "search-results": U.value,
              "is-searching": I.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: ne,
              onSkip: te,
              onManualEntry: Le,
              onSearch: de,
              onOptionSelected: K,
              onClearChoice: X,
              onSearchResultSelected: B,
              onInstalledPackSelected: ae
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", cy, [...N[8] || (N[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (n(), R(Ot, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: N[4] || (N[4] = ut((Ve) => w.value = !0, ["self"])),
            onMouseup: ut(x, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: N[3] || (N[3] = (Ve) => w.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                N[9] || (N[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ye
                }, "✕")
              ]),
              t("div", dy, [
                $(ft, {
                  modelValue: m.value,
                  "onUpdate:modelValue": N[2] || (N[2] = (Ve) => m.value = Ve),
                  placeholder: "Search by node type, package name...",
                  onInput: se
                }, null, 8, ["modelValue"]),
                t("div", my, [
                  v.value.length > 0 ? (n(), i("div", fy, [
                    (n(!0), i(H, null, we(v.value, (Ve) => (n(), i("div", {
                      key: Ve.package_id,
                      class: "node-search-result-item",
                      onClick: (W) => Y(Ve)
                    }, [
                      t("div", py, [
                        t("code", gy, d(Ve.package_id), 1),
                        Ve.match_confidence ? (n(), R(Zn, {
                          key: 0,
                          confidence: Ve.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      Ve.description ? (n(), i("div", hy, d(Ve.description), 1)) : y("", !0)
                    ], 8, vy))), 128))
                  ])) : p.value ? (n(), i("div", yy, "Searching...")) : m.value ? (n(), i("div", wy, 'No packages found matching "' + d(m.value) + '"', 1)) : (n(), i("div", _y, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (n(), R(Ot, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: ut(fe, ["self"])
          }, [
            t("div", ky, [
              t("div", { class: "node-modal-header" }, [
                N[10] || (N[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: fe
                }, "✕")
              ]),
              t("div", by, [
                $(ft, {
                  modelValue: f.value,
                  "onUpdate:modelValue": N[5] || (N[5] = (Ve) => f.value = Ve),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", $y, [
                  $(Re, {
                    variant: "secondary",
                    onClick: fe
                  }, {
                    default: g(() => [...N[11] || (N[11] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  $(Re, {
                    variant: "primary",
                    disabled: !f.value.trim(),
                    onClick: oe
                  }, {
                    default: g(() => [...N[12] || (N[12] = [
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
}), xy = /* @__PURE__ */ xe(Cy, [["__scopeId", "data-v-94c6a438"]]), Sy = { class: "node-info" }, Iy = { class: "node-info-text" }, Ey = { class: "item-body" }, Ty = {
  key: 0,
  class: "resolved-state"
}, Py = {
  key: 1,
  class: "multiple-options"
}, Ry = { class: "options-list" }, My = ["onClick"], Dy = ["name", "value", "checked", "onChange"], Ly = { class: "option-content" }, Ny = { class: "option-header" }, Uy = { class: "option-filename" }, Oy = { class: "option-meta" }, Ay = { class: "option-size" }, zy = { class: "option-category" }, Vy = { class: "option-path" }, Fy = { class: "action-buttons" }, By = {
  key: 2,
  class: "unresolved"
}, Wy = { class: "action-buttons" }, Gy = /* @__PURE__ */ $e({
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
    const o = e, a = s, l = O(() => !!o.choice);
    O(() => {
      var m;
      return (m = o.choice) == null ? void 0 : m.action;
    }), O(() => {
      var m, f;
      return ((f = (m = o.choice) == null ? void 0 : m.selected_model) == null ? void 0 : f.filename) || "selected";
    });
    const r = O(() => {
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
      class: Pe(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", Sy, [
        t("span", Iy, [
          f[7] || (f[7] = b("Used by: ", -1)),
          t("code", null, d(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Pe(["status-badge", r.value])
        }, d(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Ey, [
        l.value ? (n(), i("div", Ty, [
          $(Re, {
            variant: "ghost",
            size: "sm",
            onClick: f[0] || (f[0] = (v) => a("clear-choice"))
          }, {
            default: g(() => [...f[8] || (f[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", Py, [
          f[12] || (f[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", Ry, [
            (n(!0), i(H, null, we(e.options, (v, p) => (n(), i("label", {
              key: v.model.hash,
              class: Pe(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (_) => u(p)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (_) => u(p)
              }, null, 40, Dy),
              t("div", Ly, [
                t("div", Ny, [
                  t("span", Uy, d(v.model.filename), 1),
                  $(Zn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", Oy, [
                  t("span", Ay, d(c(v.model.size)), 1),
                  t("span", zy, d(v.model.category), 1)
                ]),
                t("div", Vy, d(v.model.relative_path), 1)
              ])
            ], 10, My))), 128))
          ]),
          t("div", Fy, [
            $(Re, {
              variant: "ghost",
              size: "sm",
              onClick: f[1] || (f[1] = (v) => a("search"))
            }, {
              default: g(() => [...f[9] || (f[9] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            $(Re, {
              variant: "ghost",
              size: "sm",
              onClick: f[2] || (f[2] = (v) => a("download-url"))
            }, {
              default: g(() => [...f[10] || (f[10] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            $(Re, {
              variant: "secondary",
              size: "sm",
              onClick: f[3] || (f[3] = (v) => a("mark-optional"))
            }, {
              default: g(() => [...f[11] || (f[11] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", By, [
          f[16] || (f[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", Wy, [
            $(Re, {
              variant: "primary",
              size: "sm",
              onClick: f[4] || (f[4] = (v) => a("search"))
            }, {
              default: g(() => [...f[13] || (f[13] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            $(Re, {
              variant: "secondary",
              size: "sm",
              onClick: f[5] || (f[5] = (v) => a("download-url"))
            }, {
              default: g(() => [...f[14] || (f[14] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            $(Re, {
              variant: "secondary",
              size: "sm",
              onClick: f[6] || (f[6] = (v) => a("mark-optional"))
            }, {
              default: g(() => [...f[15] || (f[15] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), jy = /* @__PURE__ */ xe(Gy, [["__scopeId", "data-v-8a82fefa"]]), Hy = { class: "model-resolution-step" }, Ky = { class: "step-header" }, qy = { class: "step-info" }, Yy = { class: "step-title" }, Jy = { class: "step-description" }, Qy = { class: "stat-badge" }, Xy = {
  key: 1,
  class: "step-body"
}, Zy = {
  key: 2,
  class: "empty-state"
}, e1 = { class: "model-search-modal" }, t1 = { class: "model-modal-body" }, s1 = {
  key: 0,
  class: "model-search-results"
}, o1 = ["onClick"], n1 = { class: "model-result-header" }, a1 = { class: "model-result-filename" }, l1 = { class: "model-result-meta" }, i1 = { class: "model-result-category" }, r1 = { class: "model-result-size" }, u1 = {
  key: 0,
  class: "model-result-path"
}, c1 = {
  key: 1,
  class: "model-no-results"
}, d1 = {
  key: 2,
  class: "model-searching"
}, m1 = { class: "model-download-url-modal" }, f1 = { class: "model-modal-body" }, v1 = { class: "model-input-group" }, p1 = { class: "model-input-group" }, g1 = { class: "model-modal-actions" }, h1 = /* @__PURE__ */ $e({
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
      var ye;
      return ae && ((ye = o[ae]) == null ? void 0 : ye[0]) || null;
    }
    const l = e, r = s, u = k(0), c = k(!1), m = k(!1), f = k(""), v = k(""), p = k(""), _ = k([]), h = k(!1), w = O(() => l.models[u.value]), x = O(() => l.models.some((ae) => ae.is_download_intent)), C = O(() => l.models.filter(
      (ae) => l.modelChoices.has(ae.filename) || ae.is_download_intent
    ).length), S = O(() => {
      var ye;
      if (!w.value) return "";
      const ae = a((ye = w.value.reference) == null ? void 0 : ye.node_type);
      return ae ? `${ae}/${w.value.filename}` : "";
    }), U = O(() => {
      var ye;
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
      return w.value.is_download_intent ? "download" : (ye = w.value.options) != null && ye.length ? "ambiguous" : "not-found";
    }), I = O(() => {
      var ye, fe;
      if (!w.value) return;
      const ae = l.modelChoices.get(w.value.filename);
      if (ae)
        switch (ae.action) {
          case "select":
            return (ye = ae.selected_model) != null && ye.filename ? `→ ${ae.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return w.value.is_download_intent ? "Pending Download" : (fe = w.value.options) != null && fe.length ? `${w.value.options.length} matches` : "Not Found";
    });
    function P(ae) {
      ae >= 0 && ae < l.models.length && (u.value = ae);
    }
    function M() {
      var ae;
      for (let ye = u.value + 1; ye < l.models.length; ye++) {
        const fe = l.models[ye];
        if (!fe.is_download_intent && !((ae = l.modelChoices) != null && ae.has(fe.filename))) {
          P(ye);
          return;
        }
      }
    }
    function A() {
      w.value && (r("mark-optional", w.value.filename), Mt(() => M()));
    }
    function j() {
      w.value && (r("skip", w.value.filename), Mt(() => M()));
    }
    function E(ae) {
      w.value && (r("option-selected", w.value.filename, ae), Mt(() => M()));
    }
    function L() {
      w.value && r("clear-choice", w.value.filename);
    }
    function ie() {
      w.value && (f.value = w.value.filename, c.value = !0);
    }
    function le() {
      w.value && (v.value = w.value.download_source || "", p.value = w.value.target_path || S.value, m.value = !0);
    }
    function ne() {
      c.value = !1, f.value = "", _.value = [];
    }
    function te() {
      m.value = !1, v.value = "", p.value = "";
    }
    function K() {
      h.value = !0, setTimeout(() => {
        h.value = !1;
      }, 300);
    }
    function X(ae) {
      w.value && (ne(), Mt(() => M()));
    }
    function de() {
      !w.value || !v.value.trim() || (r("download-url", w.value.filename, v.value.trim(), p.value.trim() || void 0), te(), Mt(() => M()));
    }
    function Le(ae) {
      if (!ae) return "Unknown";
      const ye = ae / (1024 * 1024 * 1024);
      return ye >= 1 ? `${ye.toFixed(2)} GB` : `${(ae / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (ae, ye) => {
      var fe, Oe, se;
      return n(), i("div", Hy, [
        t("div", Ky, [
          t("div", qy, [
            t("h3", Yy, d(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", Jy, d(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", Qy, d(C.value) + "/" + d(e.models.length) + " resolved", 1)
        ]),
        w.value ? (n(), R(jr, {
          key: 0,
          "item-name": w.value.filename,
          "current-index": u.value,
          "total-items": e.models.length,
          onPrev: ye[0] || (ye[0] = (ce) => P(u.value - 1)),
          onNext: ye[1] || (ye[1] = (ce) => P(u.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        w.value ? (n(), i("div", Xy, [
          $(jy, {
            filename: w.value.filename,
            "node-type": ((fe = w.value.reference) == null ? void 0 : fe.node_type) || "Unknown",
            "has-multiple-options": !!((Oe = w.value.options) != null && Oe.length),
            options: w.value.options,
            choice: (se = e.modelChoices) == null ? void 0 : se.get(w.value.filename),
            status: U.value,
            "status-label": I.value,
            onMarkOptional: A,
            onSkip: j,
            onDownloadUrl: le,
            onSearch: ie,
            onOptionSelected: E,
            onClearChoice: L
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", Zy, [...ye[5] || (ye[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (n(), R(Ot, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ut(ne, ["self"])
          }, [
            t("div", e1, [
              t("div", { class: "model-modal-header" }, [
                ye[6] || (ye[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: ne
                }, "✕")
              ]),
              t("div", t1, [
                $(ft, {
                  modelValue: f.value,
                  "onUpdate:modelValue": ye[2] || (ye[2] = (ce) => f.value = ce),
                  placeholder: "Search by filename, category...",
                  onInput: K
                }, null, 8, ["modelValue"]),
                _.value.length > 0 ? (n(), i("div", s1, [
                  (n(!0), i(H, null, we(_.value, (ce) => (n(), i("div", {
                    key: ce.hash,
                    class: "model-search-result-item",
                    onClick: (Y) => X()
                  }, [
                    t("div", n1, [
                      t("code", a1, d(ce.filename), 1)
                    ]),
                    t("div", l1, [
                      t("span", i1, d(ce.category), 1),
                      t("span", r1, d(Le(ce.size)), 1)
                    ]),
                    ce.relative_path ? (n(), i("div", u1, d(ce.relative_path), 1)) : y("", !0)
                  ], 8, o1))), 128))
                ])) : f.value && !h.value ? (n(), i("div", c1, ' No models found matching "' + d(f.value) + '" ', 1)) : y("", !0),
                h.value ? (n(), i("div", d1, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (n(), R(Ot, { to: "body" }, [
          m.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: ut(te, ["self"])
          }, [
            t("div", m1, [
              t("div", { class: "model-modal-header" }, [
                ye[7] || (ye[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: te
                }, "✕")
              ]),
              t("div", f1, [
                t("div", v1, [
                  ye[8] || (ye[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  $(ft, {
                    modelValue: v.value,
                    "onUpdate:modelValue": ye[3] || (ye[3] = (ce) => v.value = ce),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", p1, [
                  ye[9] || (ye[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  $(ft, {
                    modelValue: p.value,
                    "onUpdate:modelValue": ye[4] || (ye[4] = (ce) => p.value = ce),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", g1, [
                  $(Re, {
                    variant: "secondary",
                    onClick: te
                  }, {
                    default: g(() => [...ye[10] || (ye[10] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  $(Re, {
                    variant: "primary",
                    disabled: !v.value.trim() || !p.value.trim(),
                    onClick: de
                  }, {
                    default: g(() => [...ye[11] || (ye[11] = [
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
}), y1 = /* @__PURE__ */ xe(h1, [["__scopeId", "data-v-5c700bfa"]]), w1 = { class: "applying-step" }, _1 = {
  key: 0,
  class: "phase-content"
}, k1 = {
  key: 1,
  class: "phase-content"
}, b1 = { class: "phase-description" }, $1 = { class: "overall-progress" }, C1 = { class: "progress-bar" }, x1 = { class: "progress-label" }, S1 = { class: "install-list" }, I1 = { class: "install-icon" }, E1 = { key: 0 }, T1 = {
  key: 1,
  class: "spinner"
}, P1 = { key: 2 }, R1 = { key: 3 }, M1 = {
  key: 0,
  class: "install-error"
}, D1 = {
  key: 2,
  class: "phase-content"
}, L1 = { class: "phase-header" }, N1 = { class: "phase-title" }, U1 = { class: "completion-summary" }, O1 = {
  key: 0,
  class: "summary-item success"
}, A1 = { class: "summary-text" }, z1 = {
  key: 1,
  class: "summary-item error"
}, V1 = { class: "summary-text" }, F1 = {
  key: 2,
  class: "failed-list"
}, B1 = { class: "failed-node-id" }, W1 = { class: "failed-error" }, G1 = {
  key: 4,
  class: "summary-item success"
}, j1 = {
  key: 5,
  class: "restart-prompt"
}, H1 = {
  key: 3,
  class: "phase-content error"
}, K1 = { class: "error-message" }, q1 = /* @__PURE__ */ $e({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = O(() => {
      var f, v;
      const c = ((f = s.progress.nodeInstallProgress) == null ? void 0 : f.totalNodes) || s.progress.nodesToInstall.length;
      if (!c) return 0;
      const m = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(m / c * 100);
    }), a = O(() => {
      var c;
      return ((c = s.progress.nodeInstallProgress) == null ? void 0 : c.completedNodes.filter((m) => !m.success)) || [];
    }), l = O(() => a.value.length > 0);
    function r(c, m) {
      var v, p;
      const f = (v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.find((_) => _.node_id === c);
      return f ? f.success ? "complete" : "failed" : ((p = s.progress.nodeInstallProgress) == null ? void 0 : p.currentIndex) === m ? "installing" : "pending";
    }
    function u(c) {
      var m, f;
      return (f = (m = s.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.find((v) => v.node_id === c)) == null ? void 0 : f.error;
    }
    return (c, m) => {
      var f, v, p, _;
      return n(), i("div", w1, [
        e.progress.phase === "resolving" ? (n(), i("div", _1, [...m[2] || (m[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (n(), i("div", k1, [
          m[3] || (m[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", b1, " Installing " + d((((f = e.progress.nodeInstallProgress) == null ? void 0 : f.currentIndex) ?? 0) + 1) + " of " + d(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", $1, [
            t("div", C1, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", x1, d(((p = e.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + d(((_ = e.progress.nodeInstallProgress) == null ? void 0 : _.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", S1, [
            (n(!0), i(H, null, we(e.progress.nodesToInstall, (h, w) => (n(), i("div", {
              key: h,
              class: Pe(["install-item", r(h, w)])
            }, [
              t("span", I1, [
                r(h, w) === "pending" ? (n(), i("span", E1, "○")) : r(h, w) === "installing" ? (n(), i("span", T1, "◌")) : r(h, w) === "complete" ? (n(), i("span", P1, "✓")) : r(h, w) === "failed" ? (n(), i("span", R1, "✗")) : y("", !0)
              ]),
              t("code", null, d(h), 1),
              u(h) ? (n(), i("span", M1, d(u(h)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", D1, [
          t("div", L1, [
            t("span", {
              class: Pe(["phase-icon", l.value ? "warning" : "success"])
            }, d(l.value ? "⚠" : "✓"), 3),
            t("h3", N1, d(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", U1, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", O1, [
              m[4] || (m[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", A1, d(e.progress.nodesInstalled.length) + " node package" + d(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", z1, [
              m[5] || (m[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", V1, d(a.value.length) + " package" + d(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", F1, [
              (n(!0), i(H, null, we(a.value, (h) => (n(), i("div", {
                key: h.node_id,
                class: "failed-item"
              }, [
                t("code", B1, d(h.node_id), 1),
                t("span", W1, d(h.error), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: m[0] || (m[0] = (h) => c.$emit("retry-failed"))
            }, " Retry Failed (" + d(a.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (n(), i("div", G1, [...m[6] || (m[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            m[8] || (m[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (n(), i("div", j1, [
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
        ])) : e.progress.phase === "error" ? (n(), i("div", H1, [
          m[9] || (m[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", K1, d(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), Y1 = /* @__PURE__ */ xe(q1, [["__scopeId", "data-v-5efaae58"]]), J1 = {
  key: 0,
  class: "loading-state"
}, Q1 = {
  key: 1,
  class: "wizard-content"
}, X1 = {
  key: 0,
  class: "step-content"
}, Z1 = { class: "analysis-summary" }, e0 = { class: "analysis-header" }, t0 = { class: "summary-description" }, s0 = { class: "stats-grid" }, o0 = { class: "stat-card" }, n0 = { class: "stat-items" }, a0 = {
  key: 0,
  class: "stat-item success"
}, l0 = { class: "stat-count" }, i0 = {
  key: 1,
  class: "stat-item info"
}, r0 = { class: "stat-count" }, u0 = {
  key: 2,
  class: "stat-item warning"
}, c0 = { class: "stat-count" }, d0 = {
  key: 3,
  class: "stat-item warning"
}, m0 = { class: "stat-count" }, f0 = {
  key: 4,
  class: "stat-item warning"
}, v0 = { class: "stat-count" }, p0 = {
  key: 5,
  class: "stat-item error"
}, g0 = { class: "stat-count" }, h0 = { class: "stat-card" }, y0 = { class: "stat-items" }, w0 = { class: "stat-item success" }, _0 = { class: "stat-count" }, k0 = {
  key: 0,
  class: "stat-item info"
}, b0 = { class: "stat-count" }, $0 = {
  key: 1,
  class: "stat-item warning"
}, C0 = { class: "stat-count" }, x0 = {
  key: 2,
  class: "stat-item warning"
}, S0 = { class: "stat-count" }, I0 = {
  key: 3,
  class: "stat-item error"
}, E0 = { class: "stat-count" }, T0 = {
  key: 0,
  class: "status-message warning"
}, P0 = { class: "status-text" }, R0 = {
  key: 1,
  class: "status-message warning"
}, M0 = { class: "status-text" }, D0 = {
  key: 2,
  class: "status-message info"
}, L0 = { class: "status-text" }, N0 = {
  key: 3,
  class: "status-message info"
}, U0 = { class: "status-text" }, O0 = {
  key: 4,
  class: "status-message info"
}, A0 = { class: "status-text" }, z0 = {
  key: 5,
  class: "status-message warning"
}, V0 = { class: "status-text" }, F0 = {
  key: 6,
  class: "status-message success"
}, B0 = {
  key: 7,
  class: "category-mismatch-section"
}, W0 = { class: "mismatch-list" }, G0 = { class: "mismatch-path" }, j0 = { class: "mismatch-target" }, H0 = {
  key: 8,
  class: "category-mismatch-section"
}, K0 = { class: "mismatch-list" }, q0 = { class: "mismatch-path" }, Y0 = { class: "status-text" }, J0 = {
  key: 1,
  class: "step-content node-step-content"
}, Q0 = {
  key: 0,
  class: "community-node-section"
}, X0 = { class: "community-node-header" }, Z0 = { class: "community-node-title" }, ew = { class: "community-node-list" }, tw = { class: "community-node-info" }, sw = { class: "community-node-heading" }, ow = { class: "item-name" }, nw = { class: "community-node-package" }, aw = { class: "community-node-meta" }, lw = { class: "community-node-guidance" }, iw = { key: 0 }, rw = { class: "community-choice-status" }, uw = { class: "community-node-actions" }, cw = {
  key: 3,
  class: "step-content"
}, dw = { class: "review-summary" }, mw = { class: "review-stats" }, fw = { class: "review-stat" }, vw = { class: "stat-value" }, pw = { class: "review-stat" }, gw = { class: "stat-value" }, hw = { class: "review-stat" }, yw = { class: "stat-value" }, ww = { class: "review-stat" }, _w = { class: "stat-value" }, kw = {
  key: 0,
  class: "review-section"
}, bw = { class: "section-title" }, $w = { class: "review-items" }, Cw = { class: "item-name" }, xw = { class: "item-choice" }, Sw = {
  key: 0,
  class: "choice-badge install"
}, Iw = {
  key: 1,
  class: "choice-badge skip"
}, Ew = {
  key: 1,
  class: "review-section"
}, Tw = { class: "section-title" }, Pw = { class: "review-items" }, Rw = { class: "item-name" }, Mw = { class: "item-choice" }, Dw = {
  key: 0,
  class: "choice-badge install"
}, Lw = {
  key: 1,
  class: "choice-badge optional"
}, Nw = {
  key: 2,
  class: "choice-badge skip"
}, Uw = {
  key: 2,
  class: "review-section"
}, Ow = { class: "section-title" }, Aw = { class: "review-items" }, zw = { class: "item-name" }, Vw = { class: "item-choice" }, Fw = {
  key: 0,
  class: "choice-badge install"
}, Bw = {
  key: 1,
  class: "choice-badge optional"
}, Ww = {
  key: 2,
  class: "choice-badge skip"
}, Gw = {
  key: 1,
  class: "choice-badge pending"
}, jw = {
  key: 3,
  class: "review-section"
}, Hw = { class: "section-title" }, Kw = { class: "review-items download-details" }, qw = { class: "download-info" }, Yw = { class: "item-name" }, Jw = { class: "download-meta" }, Qw = { class: "download-path" }, Xw = ["title"], Zw = {
  key: 4,
  class: "review-section"
}, e_ = { class: "section-title" }, t_ = { class: "review-items" }, s_ = { class: "item-name" }, o_ = { class: "item-choice" }, n_ = {
  key: 0,
  class: "choice-badge install"
}, a_ = {
  key: 1,
  class: "choice-badge download"
}, l_ = {
  key: 2,
  class: "choice-badge optional"
}, i_ = {
  key: 3,
  class: "choice-badge skip"
}, r_ = {
  key: 4,
  class: "choice-badge skip"
}, u_ = {
  key: 1,
  class: "choice-badge download"
}, c_ = {
  key: 2,
  class: "choice-badge pending"
}, d_ = {
  key: 5,
  class: "no-choices"
}, m_ = /* @__PURE__ */ $e({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, a = s, { analyzeWorkflow: l, applyResolution: r, installNodes: u, queueModelDownloads: c, progress: m, resetProgress: f } = Gr(), { loadPendingDownloads: v } = Vo(), { openFileLocation: p, queueNodeInstall: _, getNodes: h } = ct(), w = k(null), x = k([]), C = k(!1), S = k(!1), U = k(null), I = k("analysis"), P = k([]), M = k(/* @__PURE__ */ new Map()), A = k(/* @__PURE__ */ new Map()), j = k(/* @__PURE__ */ new Set()), E = O(() => {
      const pe = [
        { id: "analysis", label: "Analysis" }
      ];
      return (K.value || Le.value || ae.value) && pe.push({ id: "nodes", label: "Nodes" }), X.value && pe.push({ id: "models", label: "Models" }), pe.push({ id: "review", label: "Review" }), I.value === "applying" && pe.push({ id: "applying", label: "Applying" }), pe;
    }), L = O(() => w.value ? w.value.stats.needs_user_input : !1), ie = O(() => w.value ? w.value.nodes.version_gated || [] : []), le = O(() => w.value ? w.value.nodes.uninstallable || [] : []), ne = O(() => le.value.filter((pe) => {
      var T;
      return !!((T = pe.package) != null && T.package_id);
    })), te = O(() => ie.value.length > 0), K = O(() => w.value ? w.value.nodes.unresolved.length > 0 || w.value.nodes.ambiguous.length > 0 : !1), X = O(() => w.value ? w.value.models.unresolved.length > 0 || w.value.models.ambiguous.length > 0 : !1), de = O(() => w.value ? w.value.stats.download_intents > 0 : !1), Le = O(() => w.value ? w.value.stats.nodes_needing_installation > 0 : !1), ae = O(() => ne.value.length > 0), ye = O(() => w.value ? w.value.nodes.resolved.length : 0), fe = O(() => w.value ? w.value.models.resolved.filter((pe) => pe.has_category_mismatch) : []), Oe = O(() => fe.value.length > 0), se = O(() => K.value || Le.value || ae.value ? "nodes" : X.value ? "models" : "review"), ce = O(() => {
      if (!w.value) return [];
      const pe = w.value.nodes.resolved.filter((D) => !D.is_installed), T = /* @__PURE__ */ new Set();
      return pe.filter((D) => T.has(D.package.package_id) ? !1 : (T.add(D.package.package_id), !0));
    }), Y = O(() => {
      if (!w.value) return [];
      const pe = w.value.nodes.resolved.filter((D) => !D.is_installed), T = /* @__PURE__ */ new Map();
      for (const D of pe) {
        const De = T.get(D.package.package_id);
        De ? De.node_types_count++ : T.set(D.package.package_id, {
          package_id: D.package.package_id,
          title: D.package.title,
          node_types_count: 1
        });
      }
      return Array.from(T.values());
    }), B = O(() => ce.value.filter((pe) => !j.value.has(pe.package.package_id))), oe = O(() => w.value ? w.value.models.resolved.filter(
      (pe) => pe.match_type === "download_intent" || pe.match_type === "property_download_intent"
    ).map((pe) => ({
      filename: pe.reference.widget_value,
      reference: pe.reference,
      is_download_intent: !0,
      resolved_model: pe.model,
      download_source: pe.download_source,
      target_path: pe.target_path
    })) : []), G = O(() => {
      if (!w.value) return [];
      const pe = w.value.nodes.unresolved.map((D) => ({
        node_type: D.reference.node_type,
        reason: D.reason,
        is_unresolved: !0,
        options: void 0
      })), T = w.value.nodes.ambiguous.map((D) => ({
        node_type: D.reference.node_type,
        has_multiple_options: !0,
        options: D.options.map((De) => ({
          package_id: De.package.package_id,
          title: De.package.title,
          match_confidence: De.match_confidence,
          match_type: De.match_type,
          is_installed: De.is_installed
        }))
      }));
      return [...pe, ...T];
    }), N = O(() => {
      if (!w.value) return [];
      const pe = w.value.models.unresolved.map((D) => ({
        filename: D.reference.widget_value,
        reference: D.reference,
        reason: D.reason,
        is_unresolved: !0,
        options: void 0
      })), T = w.value.models.ambiguous.map((D) => ({
        filename: D.reference.widget_value,
        reference: D.reference,
        has_multiple_options: !0,
        options: D.options.map((De) => ({
          model: De.model,
          match_confidence: De.match_confidence,
          match_type: De.match_type,
          has_download_source: De.has_download_source
        }))
      }));
      return [...pe, ...T];
    }), me = O(() => {
      const pe = N.value, T = oe.value.map((D) => ({
        filename: D.filename,
        reference: D.reference,
        is_download_intent: !0,
        resolved_model: D.resolved_model,
        download_source: D.download_source,
        target_path: D.target_path,
        options: void 0
      }));
      return [...pe, ...T];
    }), ze = O(() => oe.value.filter((pe) => {
      const T = A.value.get(pe.filename);
      return T ? T.action === "download" : !0;
    }).map((pe) => ({
      filename: pe.filename,
      url: pe.download_source,
      target_path: pe.target_path
    })));
    function Ve(pe, T = 50) {
      return pe.length <= T ? pe : pe.slice(0, T - 3) + "...";
    }
    const W = O(() => {
      let pe = B.value.length;
      for (const T of M.value.values())
        T.action === "install" && pe++;
      for (const T of A.value.values())
        T.action === "select" && pe++;
      return pe;
    }), Q = O(() => {
      let pe = 0;
      for (const T of A.value.values())
        T.action === "download" && pe++;
      for (const T of oe.value)
        A.value.get(T.filename) || pe++;
      return pe;
    }), ge = O(() => {
      let pe = 0;
      for (const T of M.value.values())
        T.action === "optional" && pe++;
      for (const T of A.value.values())
        T.action === "optional" && pe++;
      return pe;
    }), Ee = O(() => {
      let pe = j.value.size;
      for (const T of M.value.values())
        T.action === "skip" && pe++;
      for (const T of A.value.values())
        T.action === "skip" && pe++;
      for (const T of G.value)
        M.value.has(T.node_type) || pe++;
      for (const T of N.value)
        A.value.has(T.filename) || pe++;
      return pe;
    }), Se = O(() => {
      const pe = {};
      if (pe.analysis = { resolved: 1, total: 1 }, K.value || ae.value) {
        const T = G.value.length, D = ne.value.length, De = G.value.filter(
          (xt) => M.value.has(xt.node_type)
        ).length, tt = ne.value.filter(
          (xt) => M.value.has(xt.reference.node_type)
        ).length, pt = T + D, st = De + tt;
        pe.nodes = { resolved: st, total: pt };
      }
      if (X.value) {
        const T = me.value.length, D = me.value.filter(
          (De) => A.value.has(De.filename) || De.is_download_intent
        ).length;
        pe.models = { resolved: D, total: T };
      }
      if (pe.review = { resolved: 1, total: 1 }, I.value === "applying") {
        const T = m.totalFiles || 1, D = m.completedFiles.length;
        pe.applying = { resolved: D, total: T };
      }
      return pe;
    });
    function Ie(pe) {
      I.value = pe;
    }
    function Ne() {
      const pe = E.value.findIndex((T) => T.id === I.value);
      pe > 0 && (I.value = E.value[pe - 1].id);
    }
    function Ce() {
      const pe = E.value.findIndex((T) => T.id === I.value);
      pe < E.value.length - 1 && (I.value = E.value[pe + 1].id);
    }
    function Me() {
      for (const pe of ne.value) {
        const T = pe.reference.node_type;
        M.value.has(T) || re(pe, "registry");
      }
    }
    function ke(pe) {
      switch (pe) {
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
    function Ge(pe) {
      return pe.filter((T) => T.installed && T.tracked).filter((T) => T.name !== "comfygit-manager").map((T) => ({
        package_id: T.registry_id || T.name,
        source: T.source
      })).filter((T, D, De) => De.findIndex((tt) => tt.package_id === T.package_id) === D).sort((T, D) => {
        const De = ke(T.source) - ke(D.source);
        return De !== 0 ? De : T.package_id.localeCompare(D.package_id);
      });
    }
    async function Ue() {
      C.value = !0, U.value = null;
      try {
        const [pe, T] = await Promise.all([
          l(o.workflowName),
          h()
        ]);
        w.value = pe, x.value = Ge(T.nodes), Me();
      } catch (pe) {
        U.value = pe instanceof Error ? pe.message : "Failed to analyze workflow";
      } finally {
        C.value = !1;
      }
    }
    function be() {
      P.value.includes("analysis") || P.value.push("analysis"), K.value || Le.value || ae.value ? I.value = "nodes" : X.value ? I.value = "models" : I.value = "review";
    }
    function J(pe) {
      M.value.set(pe, { action: "optional" });
    }
    function Be(pe) {
      M.value.set(pe, { action: "skip" });
    }
    function V(pe, T) {
      var De;
      const D = G.value.find((tt) => tt.node_type === pe);
      (De = D == null ? void 0 : D.options) != null && De[T] && M.value.set(pe, {
        action: "install",
        package_id: D.options[T].package_id
      });
    }
    function F(pe, T) {
      M.value.set(pe, {
        action: "install",
        package_id: T
      });
    }
    function q(pe) {
      M.value.delete(pe);
    }
    function ve(pe) {
      return M.value.get(pe);
    }
    function z(pe) {
      const T = ve(pe);
      return T ? T.action === "optional" ? "Marked optional" : T.action === "skip" ? "Skipped" : T.action === "install" ? T.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function re(pe, T) {
      var tt;
      const D = (tt = pe.package) == null ? void 0 : tt.package_id;
      if (!D) return;
      const De = {
        action: "install",
        package_id: D,
        version: pe.package.latest_version || null,
        install_source: T
      };
      T === "git" && pe.package.repository && (De.repository = pe.package.repository), M.value.set(pe.reference.node_type, De);
    }
    function ue(pe) {
      M.value.set(pe, { action: "optional" });
    }
    function Fe(pe) {
      M.value.set(pe, { action: "skip" });
    }
    function Ae(pe) {
      j.value.has(pe) ? j.value.delete(pe) : j.value.add(pe);
    }
    function We(pe) {
      A.value.set(pe, { action: "optional" });
    }
    function Xe(pe) {
      A.value.set(pe, { action: "skip" });
    }
    function qe(pe, T) {
      var De;
      const D = N.value.find((tt) => tt.filename === pe);
      (De = D == null ? void 0 : D.options) != null && De[T] && A.value.set(pe, {
        action: "select",
        selected_model: D.options[T].model
      });
    }
    function it(pe, T, D) {
      A.value.set(pe, {
        action: "download",
        url: T,
        target_path: D
      });
    }
    function lt(pe) {
      A.value.delete(pe);
    }
    async function dt(pe) {
      try {
        await p(pe);
      } catch (T) {
        U.value = T instanceof Error ? T.message : "Failed to open file location";
      }
    }
    async function Et() {
      var pe;
      S.value = !0, U.value = null, f(), m.phase = "resolving", I.value = "applying";
      try {
        const T = await r(o.workflowName, M.value, A.value, j.value);
        T.models_to_download && T.models_to_download.length > 0 && c(o.workflowName, T.models_to_download);
        const D = ne.value.map((st) => {
          const xt = ve(st.reference.node_type);
          if ((xt == null ? void 0 : xt.action) !== "install" || xt.install_source !== "git")
            return null;
          const Tt = xt.repository || st.package.repository, je = xt.package_id || st.package.package_id;
          return !Tt || !je ? null : {
            id: je,
            repository: Tt,
            selectedVersion: xt.version || st.package.latest_version || "latest"
          };
        }).filter((st) => !!st), De = new Set(D.map((st) => st.id)), tt = [
          ...T.nodes_to_install || [],
          ...B.value.map((st) => st.package.package_id)
        ];
        m.nodesToInstall = [...new Set(tt)].filter((st) => !De.has(st)), m.nodesToInstall.length > 0 && await u(o.workflowName);
        for (const st of D)
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
        const pt = m.installError || ((pe = m.nodeInstallProgress) == null ? void 0 : pe.completedNodes.some((st) => !st.success));
        !m.needsRestart && !pt && setTimeout(() => {
          a("refresh"), a("install"), a("close");
        }, 1500);
      } catch (T) {
        U.value = T instanceof Error ? T.message : "Failed to apply resolution", m.error = U.value, m.phase = "error";
      } finally {
        S.value = !1;
      }
    }
    function Wt() {
      a("refresh"), a("restart"), a("close");
    }
    async function Rt() {
      var T;
      const pe = ((T = m.nodeInstallProgress) == null ? void 0 : T.completedNodes.filter((D) => !D.success).map((D) => D.node_id)) || [];
      if (pe.length !== 0) {
        m.phase = "installing", m.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: pe.length
        }, m.nodesToInstall = pe, m.nodesInstalled = [], m.installError = void 0;
        try {
          await u(o.workflowName), m.phase = "complete";
        } catch (D) {
          m.error = D instanceof Error ? D.message : "Retry failed", m.phase = "error";
        }
      }
    }
    return at(Ue), (pe, T) => (n(), R(Ct, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: C.value,
      error: U.value || void 0,
      "fixed-height": !0,
      onClose: T[1] || (T[1] = (D) => a("close"))
    }, {
      body: g(() => [
        C.value && !w.value ? (n(), i("div", J1, [...T[2] || (T[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : w.value ? (n(), i("div", Q1, [
          $(Qg, {
            steps: E.value,
            "current-step": I.value,
            "completed-steps": P.value,
            "step-stats": Se.value,
            onStepChange: Ie
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          I.value === "analysis" ? (n(), i("div", X1, [
            t("div", Z1, [
              t("div", e0, [
                T[3] || (T[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", t0, " Found " + d(w.value.stats.total_nodes) + " nodes and " + d(w.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", s0, [
                t("div", o0, [
                  T[16] || (T[16] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", n0, [
                    ye.value > 0 ? (n(), i("div", a0, [
                      T[4] || (T[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", l0, d(ye.value), 1),
                      T[5] || (T[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    w.value.stats.packages_needing_installation > 0 ? (n(), i("div", i0, [
                      T[6] || (T[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", r0, d(w.value.stats.packages_needing_installation), 1),
                      T[7] || (T[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    w.value.nodes.ambiguous.length > 0 ? (n(), i("div", u0, [
                      T[8] || (T[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", c0, d(w.value.nodes.ambiguous.length), 1),
                      T[9] || (T[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    ie.value.length > 0 ? (n(), i("div", d0, [
                      T[10] || (T[10] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", m0, d(ie.value.length), 1),
                      T[11] || (T[11] = t("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    le.value.length > 0 ? (n(), i("div", f0, [
                      T[12] || (T[12] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", v0, d(le.value.length), 1),
                      T[13] || (T[13] = t("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    w.value.nodes.unresolved.length > 0 ? (n(), i("div", p0, [
                      T[14] || (T[14] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", g0, d(w.value.nodes.unresolved.length), 1),
                      T[15] || (T[15] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", h0, [
                  T[27] || (T[27] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", y0, [
                    t("div", w0, [
                      T[17] || (T[17] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", _0, d(w.value.models.resolved.length - w.value.stats.download_intents - w.value.stats.models_with_category_mismatch), 1),
                      T[18] || (T[18] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    w.value.stats.download_intents > 0 ? (n(), i("div", k0, [
                      T[19] || (T[19] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", b0, d(w.value.stats.download_intents), 1),
                      T[20] || (T[20] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    Oe.value ? (n(), i("div", $0, [
                      T[21] || (T[21] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", C0, d(fe.value.length), 1),
                      T[22] || (T[22] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    w.value.models.ambiguous.length > 0 ? (n(), i("div", x0, [
                      T[23] || (T[23] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", S0, d(w.value.models.ambiguous.length), 1),
                      T[24] || (T[24] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    w.value.models.unresolved.length > 0 ? (n(), i("div", I0, [
                      T[25] || (T[25] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", E0, d(w.value.models.unresolved.length), 1),
                      T[26] || (T[26] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              L.value ? (n(), i("div", T0, [
                T[28] || (T[28] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", P0, d(G.value.length + N.value.length) + " items need your input", 1)
              ])) : te.value ? (n(), i("div", R0, [
                T[29] || (T[29] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", M0, d(ie.value.length) + " node type" + d(ie.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : le.value.length > 0 ? (n(), i("div", D0, [
                T[30] || (T[30] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", L0, d(le.value.length) + " community-mapped node type" + d(le.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : Le.value ? (n(), i("div", N0, [
                T[31] || (T[31] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", U0, d(w.value.stats.packages_needing_installation) + " package" + d(w.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + d(w.value.stats.nodes_needing_installation) + " node type" + d(w.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + d(de.value ? `, ${w.value.stats.download_intents} model${w.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : de.value ? (n(), i("div", O0, [
                T[32] || (T[32] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", A0, d(w.value.stats.download_intents) + " model" + d(w.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : Oe.value ? (n(), i("div", z0, [
                T[33] || (T[33] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", V0, d(fe.value.length) + " model" + d(fe.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", F0, [...T[34] || (T[34] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              Oe.value ? (n(), i("div", B0, [
                T[37] || (T[37] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", W0, [
                  (n(!0), i(H, null, we(fe.value, (D) => {
                    var De, tt;
                    return n(), i("div", {
                      key: D.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", G0, d(D.actual_category) + "/" + d((De = D.model) == null ? void 0 : De.filename), 1),
                      T[36] || (T[36] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", j0, d((tt = D.expected_categories) == null ? void 0 : tt[0]) + "/", 1),
                      D.file_path ? (n(), R(Re, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (pt) => dt(D.file_path)
                      }, {
                        default: g(() => [...T[35] || (T[35] = [
                          b(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              te.value ? (n(), i("div", H0, [
                T[38] || (T[38] = t("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                t("div", K0, [
                  (n(!0), i(H, null, we(ie.value, (D) => {
                    var De;
                    return n(), i("div", {
                      key: `vg-${D.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      t("code", q0, d(D.reference.node_type), 1),
                      t("span", Y0, d(D.guidance || ((De = w.value.node_guidance) == null ? void 0 : De[D.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          I.value === "nodes" ? (n(), i("div", J0, [
            $(xy, {
              nodes: G.value,
              "node-choices": M.value,
              "auto-resolved-packages": Y.value,
              "skipped-packages": j.value,
              "installed-node-packs": x.value,
              onMarkOptional: J,
              onSkip: Be,
              onOptionSelected: V,
              onManualEntry: F,
              onClearChoice: q,
              onPackageSkip: Ae
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            ne.value.length > 0 ? (n(), i("div", Q0, [
              t("div", X0, [
                t("h4", Z0, "Community-Mapped Packages (" + d(ne.value.length) + ")", 1),
                T[39] || (T[39] = t("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              t("div", ew, [
                (n(!0), i(H, null, we(ne.value, (D) => (n(), i("div", {
                  key: `community-${D.reference.node_type}-${D.package.package_id}`,
                  class: "community-node-item"
                }, [
                  t("div", tw, [
                    t("div", sw, [
                      t("code", ow, d(D.reference.node_type), 1),
                      t("span", nw, d(D.package.title || D.package.package_id), 1)
                    ]),
                    t("div", aw, d(D.package.package_id), 1),
                    t("div", lw, [
                      T[40] || (T[40] = b(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      D.guidance ? (n(), i("span", iw, d(D.guidance), 1)) : y("", !0)
                    ]),
                    t("div", rw, d(z(D.reference.node_type)), 1)
                  ]),
                  t("div", uw, [
                    $(Re, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !D.package.package_id,
                      onClick: (De) => re(D, "registry")
                    }, {
                      default: g(() => [...T[41] || (T[41] = [
                        b(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    D.package.repository ? (n(), R(Re, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !D.package.package_id,
                      onClick: (De) => re(D, "git")
                    }, {
                      default: g(() => [...T[42] || (T[42] = [
                        b(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    $(Re, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (De) => ue(D.reference.node_type)
                    }, {
                      default: g(() => [...T[43] || (T[43] = [
                        b(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(Re, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (De) => Fe(D.reference.node_type)
                    }, {
                      default: g(() => [...T[44] || (T[44] = [
                        b(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : y("", !0)
          ])) : y("", !0),
          I.value === "models" ? (n(), R(y1, {
            key: 2,
            models: me.value,
            "model-choices": A.value,
            onMarkOptional: We,
            onSkip: Xe,
            onOptionSelected: qe,
            onDownloadUrl: it,
            onClearChoice: lt
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          I.value === "review" ? (n(), i("div", cw, [
            t("div", dw, [
              T[50] || (T[50] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", mw, [
                t("div", fw, [
                  t("span", vw, d(W.value), 1),
                  T[45] || (T[45] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", pw, [
                  t("span", gw, d(Q.value), 1),
                  T[46] || (T[46] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", hw, [
                  t("span", yw, d(ge.value), 1),
                  T[47] || (T[47] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", ww, [
                  t("span", _w, d(Ee.value), 1),
                  T[48] || (T[48] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              Y.value.length > 0 ? (n(), i("div", kw, [
                t("h4", bw, "Node Packages (" + d(Y.value.length) + ")", 1),
                t("div", $w, [
                  (n(!0), i(H, null, we(Y.value, (D) => (n(), i("div", {
                    key: D.package_id,
                    class: "review-item"
                  }, [
                    t("code", Cw, d(D.package_id), 1),
                    t("div", xw, [
                      j.value.has(D.package_id) ? (n(), i("span", Iw, "Skipped")) : (n(), i("span", Sw, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              ne.value.length > 0 ? (n(), i("div", Ew, [
                t("h4", Tw, "Community-Mapped Packages (" + d(ne.value.length) + ")", 1),
                t("div", Pw, [
                  (n(!0), i(H, null, we(ne.value, (D) => {
                    var De, tt, pt;
                    return n(), i("div", {
                      key: `review-community-${D.reference.node_type}-${D.package.package_id}`,
                      class: "review-item"
                    }, [
                      t("code", Rw, d(D.reference.node_type), 1),
                      t("div", Mw, [
                        ((De = ve(D.reference.node_type)) == null ? void 0 : De.action) === "install" ? (n(), i("span", Dw, d(((tt = ve(D.reference.node_type)) == null ? void 0 : tt.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((pt = ve(D.reference.node_type)) == null ? void 0 : pt.action) === "optional" ? (n(), i("span", Lw, " Optional ")) : (n(), i("span", Nw, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              G.value.length > 0 ? (n(), i("div", Uw, [
                t("h4", Ow, "Node Choices (" + d(G.value.length) + ")", 1),
                t("div", Aw, [
                  (n(!0), i(H, null, we(G.value, (D) => {
                    var De, tt, pt, st;
                    return n(), i("div", {
                      key: D.node_type,
                      class: "review-item"
                    }, [
                      t("code", zw, d(D.node_type), 1),
                      t("div", Vw, [
                        M.value.has(D.node_type) ? (n(), i(H, { key: 0 }, [
                          ((De = M.value.get(D.node_type)) == null ? void 0 : De.action) === "install" ? (n(), i("span", Fw, d((tt = M.value.get(D.node_type)) == null ? void 0 : tt.package_id), 1)) : ((pt = M.value.get(D.node_type)) == null ? void 0 : pt.action) === "optional" ? (n(), i("span", Bw, " Optional ")) : ((st = M.value.get(D.node_type)) == null ? void 0 : st.action) === "skip" ? (n(), i("span", Ww, " Skip ")) : y("", !0)
                        ], 64)) : (n(), i("span", Gw, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ze.value.length > 0 ? (n(), i("div", jw, [
                t("h4", Hw, "Models to Download (" + d(ze.value.length) + ")", 1),
                t("div", Kw, [
                  (n(!0), i(H, null, we(ze.value, (D) => (n(), i("div", {
                    key: D.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", qw, [
                      t("code", Yw, d(D.filename), 1),
                      t("div", Jw, [
                        t("span", Qw, "→ " + d(D.target_path), 1),
                        D.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: D.url
                        }, d(Ve(D.url)), 9, Xw)) : y("", !0)
                      ])
                    ]),
                    T[49] || (T[49] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              me.value.length > 0 ? (n(), i("div", Zw, [
                t("h4", e_, "Models (" + d(me.value.length) + ")", 1),
                t("div", t_, [
                  (n(!0), i(H, null, we(me.value, (D) => {
                    var De, tt, pt, st, xt, Tt, je;
                    return n(), i("div", {
                      key: D.filename,
                      class: "review-item"
                    }, [
                      t("code", s_, d(D.filename), 1),
                      t("div", o_, [
                        A.value.has(D.filename) ? (n(), i(H, { key: 0 }, [
                          ((De = A.value.get(D.filename)) == null ? void 0 : De.action) === "select" ? (n(), i("span", n_, d((pt = (tt = A.value.get(D.filename)) == null ? void 0 : tt.selected_model) == null ? void 0 : pt.filename), 1)) : ((st = A.value.get(D.filename)) == null ? void 0 : st.action) === "download" ? (n(), i("span", a_, " Download ")) : ((xt = A.value.get(D.filename)) == null ? void 0 : xt.action) === "optional" ? (n(), i("span", l_, " Optional ")) : ((Tt = A.value.get(D.filename)) == null ? void 0 : Tt.action) === "skip" ? (n(), i("span", i_, " Skip ")) : ((je = A.value.get(D.filename)) == null ? void 0 : je.action) === "cancel_download" ? (n(), i("span", r_, " Cancel Download ")) : y("", !0)
                        ], 64)) : D.is_download_intent ? (n(), i("span", u_, " Pending Download ")) : (n(), i("span", c_, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ce.value.length === 0 && ne.value.length === 0 && G.value.length === 0 && me.value.length === 0 ? (n(), i("div", d_, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          I.value === "applying" ? (n(), R(Y1, {
            key: 4,
            progress: Ze(m),
            onRestart: Wt,
            onRetryFailed: Rt
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: g(() => [
        I.value !== "analysis" && I.value !== "applying" ? (n(), R(Re, {
          key: 0,
          variant: "secondary",
          disabled: S.value,
          onClick: Ne
        }, {
          default: g(() => [...T[51] || (T[51] = [
            b(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        T[54] || (T[54] = t("div", { class: "footer-spacer" }, null, -1)),
        I.value !== "applying" || Ze(m).phase === "complete" || Ze(m).phase === "error" ? (n(), R(Re, {
          key: 1,
          variant: "secondary",
          onClick: T[0] || (T[0] = (D) => a("close"))
        }, {
          default: g(() => [
            b(d(Ze(m).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        I.value === "analysis" ? (n(), R(Re, {
          key: 2,
          variant: "primary",
          disabled: C.value,
          onClick: be
        }, {
          default: g(() => [
            b(d(se.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        I.value === "nodes" ? (n(), R(Re, {
          key: 3,
          variant: "primary",
          onClick: Ce
        }, {
          default: g(() => [
            b(d(X.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        I.value === "models" ? (n(), R(Re, {
          key: 4,
          variant: "primary",
          onClick: Ce
        }, {
          default: g(() => [...T[52] || (T[52] = [
            b(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        I.value === "review" ? (n(), R(Re, {
          key: 5,
          variant: "primary",
          disabled: S.value,
          loading: S.value,
          onClick: Et
        }, {
          default: g(() => [...T[53] || (T[53] = [
            b(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), f_ = /* @__PURE__ */ xe(m_, [["__scopeId", "data-v-49848358"]]), v_ = { class: "search-input-wrapper" }, p_ = ["value", "placeholder"], g_ = /* @__PURE__ */ $e({
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
    return at(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (m, f) => (n(), i("div", v_, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: u,
        onKeyup: as(c, ["escape"])
      }, null, 40, p_),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: c,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), h_ = /* @__PURE__ */ xe(g_, [["__scopeId", "data-v-266f857a"]]), y_ = { class: "search-bar" }, w_ = /* @__PURE__ */ $e({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (n(), i("div", y_, [
      $(h_, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => s.$emit("update:modelValue", a)),
        onClear: o[1] || (o[1] = (a) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Fo = /* @__PURE__ */ xe(w_, [["__scopeId", "data-v-3d51bbfd"]]), __ = { class: "section-group" }, k_ = {
  key: 0,
  class: "section-content"
}, b_ = /* @__PURE__ */ $e({
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
    return (u, c) => (n(), i("section", __, [
      $(Zt, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: g(() => [
          b(d(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (n(), i("div", k_, [
        ot(u.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), _t = /* @__PURE__ */ xe(b_, [["__scopeId", "data-v-c48e33ed"]]), $_ = { class: "item-header" }, C_ = {
  key: 0,
  class: "item-icon"
}, x_ = { class: "item-info" }, S_ = {
  key: 0,
  class: "item-title"
}, I_ = {
  key: 1,
  class: "item-subtitle"
}, E_ = {
  key: 0,
  class: "item-details"
}, T_ = {
  key: 1,
  class: "item-actions"
}, P_ = /* @__PURE__ */ $e({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, a = O(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (n(), i("div", {
      class: Pe(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (u) => e.clickable && l.$emit("click"))
    }, [
      t("div", $_, [
        l.$slots.icon ? (n(), i("span", C_, [
          ot(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", x_, [
          l.$slots.title ? (n(), i("div", S_, [
            ot(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (n(), i("div", I_, [
            ot(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", E_, [
        ot(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (n(), i("div", T_, [
        ot(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Nt = /* @__PURE__ */ xe(P_, [["__scopeId", "data-v-cc435e0e"]]), R_ = { class: "loading-state" }, M_ = { class: "loading-message" }, D_ = /* @__PURE__ */ $e({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (n(), i("div", R_, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", M_, d(e.message), 1)
    ]));
  }
}), zs = /* @__PURE__ */ xe(D_, [["__scopeId", "data-v-ad8436c9"]]), L_ = { class: "error-state" }, N_ = { class: "error-message" }, U_ = /* @__PURE__ */ $e({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (n(), i("div", L_, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", N_, d(e.message), 1),
      e.retry ? (n(), R(_e, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => s.$emit("retry"))
      }, {
        default: g(() => [...o[1] || (o[1] = [
          b(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Vs = /* @__PURE__ */ xe(U_, [["__scopeId", "data-v-5397be48"]]), O_ = /* @__PURE__ */ $e({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getWorkflows: l } = ct(), r = k([]), u = k(!1), c = k(null), m = k(""), f = k(!0), v = k(!1), p = k(!1), _ = k(!1), h = k(!1), w = k(null), x = O(
      () => r.value.filter((se) => se.status === "broken")
    ), C = O(
      () => r.value.filter((se) => se.status === "new")
    ), S = O(
      () => r.value.filter((se) => se.status === "modified")
    ), U = O(
      () => r.value.filter((se) => se.status === "synced")
    ), I = O(() => {
      if (!m.value.trim()) return r.value;
      const se = m.value.toLowerCase();
      return r.value.filter((ce) => ce.name.toLowerCase().includes(se));
    }), P = O(
      () => x.value.filter(
        (se) => !m.value.trim() || se.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), M = O(
      () => C.value.filter(
        (se) => !m.value.trim() || se.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), A = O(
      () => S.value.filter(
        (se) => !m.value.trim() || se.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), j = O(
      () => U.value.filter(
        (se) => !m.value.trim() || se.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), E = O(
      () => v.value ? j.value : j.value.slice(0, 5)
    );
    async function L(se = !1) {
      u.value = !0, c.value = null;
      try {
        r.value = await l(se);
      } catch (ce) {
        c.value = ce instanceof Error ? ce.message : "Failed to load workflows";
      } finally {
        u.value = !1;
      }
    }
    s({ loadWorkflows: L });
    function ie(se) {
      w.value = se, p.value = !0;
    }
    function le(se) {
      w.value = se, _.value = !0;
    }
    function ne(se) {
      w.value = se, h.value = !0;
    }
    function te(se) {
      var B;
      const Y = (B = se.detail) == null ? void 0 : B.workflowName;
      Y && ne(Y);
    }
    function K() {
      a("refresh");
    }
    async function X() {
      _.value = !1, await L(!0);
    }
    async function de() {
      await L(!0), a("refresh");
    }
    async function Le() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function ae(se) {
      return se.replace(/uninstallable node mappings?/gi, (ce) => ce.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function ye(se) {
      if (se.issue_summary && se.issue_summary.trim().length > 0)
        return ae(se.issue_summary);
      const ce = [];
      return se.version_gated_count && se.version_gated_count > 0 && ce.push(`${se.version_gated_count} node${se.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), se.uninstallable_count && se.uninstallable_count > 0 && ce.push(`${se.uninstallable_count} node${se.uninstallable_count > 1 ? "s" : ""} need community packages`), se.missing_nodes > 0 && ce.push(`${se.missing_nodes} missing node${se.missing_nodes > 1 ? "s" : ""}`), se.missing_models > 0 && ce.push(`${se.missing_models} missing model${se.missing_models > 1 ? "s" : ""}`), se.models_with_category_mismatch && se.models_with_category_mismatch > 0 && ce.push(`${se.models_with_category_mismatch} model${se.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), se.pending_downloads && se.pending_downloads > 0 && ce.push(`${se.pending_downloads} pending download${se.pending_downloads > 1 ? "s" : ""}`), ce.length > 0 ? ce.join(", ") : "Has issues";
    }
    function fe(se) {
      const ce = se.sync_state === "new" ? "New" : se.sync_state === "modified" ? "Modified" : se.sync_state === "synced" ? "Synced" : se.sync_state, Y = Oe(se);
      return se.has_path_sync_issues && se.models_needing_path_sync && se.models_needing_path_sync > 0 ? `${se.models_needing_path_sync} model path${se.models_needing_path_sync > 1 ? "s" : ""} need${se.models_needing_path_sync === 1 ? "s" : ""} sync · ${Y}` : `${ce || "Unknown"} · ${Y}`;
    }
    function Oe(se) {
      const ce = se.contract_summary;
      return !ce || !ce.has_contract ? "No contract" : ce.status === "incomplete" ? `${ce.input_count} in / ${ce.output_count} out · incomplete` : `${ce.input_count} in / ${ce.output_count} out`;
    }
    return at(() => {
      L(), window.addEventListener("comfygit:open-workflow-contract", te);
    }), da(() => {
      window.removeEventListener("comfygit:open-workflow-contract", te);
    }), (se, ce) => (n(), i(H, null, [
      $(qt, null, {
        header: g(() => [
          $(Yt, { title: "WORKFLOWS" })
        ]),
        search: g(() => [
          $(Fo, {
            modelValue: m.value,
            "onUpdate:modelValue": ce[0] || (ce[0] = (Y) => m.value = Y),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          u.value ? (n(), R(zs, {
            key: 0,
            message: "Loading workflows..."
          })) : c.value ? (n(), R(Vs, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            P.value.length ? (n(), R(_t, {
              key: 0,
              title: "BROKEN",
              count: P.value.length
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(P.value, (Y) => (n(), R(Nt, {
                  key: Y.name,
                  status: "broken"
                }, {
                  icon: g(() => [...ce[8] || (ce[8] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(d(Y.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(ye(Y)), 1)
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "primary",
                      size: "sm",
                      onClick: (B) => le(Y.name)
                    }, {
                      default: g(() => [...ce[9] || (ce[9] = [
                        b(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(_e, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (B) => ne(Y.name)
                    }, {
                      default: g(() => [...ce[10] || (ce[10] = [
                        b(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(_e, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (B) => ie(Y.name)
                    }, {
                      default: g(() => [...ce[11] || (ce[11] = [
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
            M.value.length ? (n(), R(_t, {
              key: 1,
              title: "NEW",
              count: M.value.length
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(M.value, (Y) => (n(), R(Nt, {
                  key: Y.name,
                  status: Y.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: g(() => [
                    b(d(Y.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: g(() => [
                    b(d(Y.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(fe(Y)), 1)
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (B) => ne(Y.name)
                    }, {
                      default: g(() => [...ce[12] || (ce[12] = [
                        b(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(_e, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (B) => ie(Y.name)
                    }, {
                      default: g(() => [...ce[13] || (ce[13] = [
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
            A.value.length ? (n(), R(_t, {
              key: 2,
              title: "MODIFIED",
              count: A.value.length
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(A.value, (Y) => (n(), R(Nt, {
                  key: Y.name,
                  status: Y.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: g(() => [...ce[14] || (ce[14] = [
                    b("⚡", -1)
                  ])]),
                  title: g(() => [
                    b(d(Y.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(fe(Y)), 1)
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (B) => ne(Y.name)
                    }, {
                      default: g(() => [...ce[15] || (ce[15] = [
                        b(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(_e, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (B) => ie(Y.name)
                    }, {
                      default: g(() => [...ce[16] || (ce[16] = [
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
            j.value.length ? (n(), R(_t, {
              key: 3,
              title: "SYNCED",
              count: j.value.length,
              collapsible: !0,
              "initially-expanded": f.value,
              onToggle: ce[2] || (ce[2] = (Y) => f.value = Y)
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(E.value, (Y) => (n(), R(Nt, {
                  key: Y.name,
                  status: Y.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: g(() => [
                    b(d(Y.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: g(() => [
                    b(d(Y.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(fe(Y)), 1)
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (B) => ne(Y.name)
                    }, {
                      default: g(() => [...ce[17] || (ce[17] = [
                        b(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(_e, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (B) => ie(Y.name)
                    }, {
                      default: g(() => [...ce[18] || (ce[18] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && j.value.length > 5 ? (n(), R(_e, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: ce[1] || (ce[1] = (Y) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: g(() => [
                    b(" View all " + d(j.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            I.value.length ? y("", !0) : (n(), R(gs, {
              key: 4,
              icon: "📭",
              message: m.value ? `No workflows match '${m.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && w.value ? (n(), R(sg, {
        key: 0,
        "workflow-name": w.value,
        onClose: ce[3] || (ce[3] = (Y) => p.value = !1),
        onResolve: ce[4] || (ce[4] = (Y) => le(w.value)),
        onRefresh: ce[5] || (ce[5] = (Y) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      _.value && w.value ? (n(), R(f_, {
        key: 1,
        "workflow-name": w.value,
        onClose: X,
        onInstall: K,
        onRefresh: ce[6] || (ce[6] = (Y) => a("refresh")),
        onRestart: Le
      }, null, 8, ["workflow-name"])) : y("", !0),
      h.value && w.value ? (n(), R(zg, {
        key: 2,
        "workflow-name": w.value,
        onClose: ce[7] || (ce[7] = (Y) => h.value = !1),
        onRefresh: de
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), A_ = /* @__PURE__ */ xe(O_, [["__scopeId", "data-v-894ef6ed"]]), z_ = /* @__PURE__ */ $e({
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
}), Cn = /* @__PURE__ */ xe(z_, [["__scopeId", "data-v-ccb7816e"]]), V_ = {
  key: 0,
  class: "model-details"
}, F_ = { class: "detail-section" }, B_ = { class: "detail-row" }, W_ = { class: "detail-value mono" }, G_ = { class: "detail-row" }, j_ = { class: "detail-value mono" }, H_ = { class: "detail-row" }, K_ = { class: "detail-value mono" }, q_ = { class: "detail-row" }, Y_ = { class: "detail-value" }, J_ = { class: "detail-row" }, Q_ = { class: "detail-value" }, X_ = { class: "detail-row" }, Z_ = { class: "detail-value" }, ek = { class: "detail-section" }, tk = { class: "section-header" }, sk = {
  key: 0,
  class: "locations-list"
}, ok = { class: "location-path mono" }, nk = {
  key: 0,
  class: "location-modified"
}, ak = ["onClick"], lk = {
  key: 1,
  class: "empty-state"
}, ik = { class: "detail-section" }, rk = { class: "section-header" }, uk = {
  key: 0,
  class: "sources-list"
}, ck = { class: "source-type" }, dk = ["href"], mk = ["disabled", "onClick"], fk = {
  key: 1,
  class: "empty-state"
}, vk = { class: "add-source-form" }, pk = ["disabled"], gk = {
  key: 2,
  class: "source-error"
}, hk = {
  key: 3,
  class: "source-success"
}, yk = /* @__PURE__ */ $e({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: a, addModelSource: l, removeModelSource: r, openFileLocation: u } = ct(), c = k(null), m = k(!0), f = k(null), v = k(""), p = k(!1), _ = k(null), h = k(null), w = k(null), x = k(null);
    let C = null;
    function S(E, L = "success", ie = 2e3) {
      C && clearTimeout(C), x.value = { message: E, type: L }, C = setTimeout(() => {
        x.value = null;
      }, ie);
    }
    function U(E) {
      if (!E) return "Unknown";
      const L = 1024 * 1024 * 1024, ie = 1024 * 1024;
      return E >= L ? `${(E / L).toFixed(1)} GB` : E >= ie ? `${(E / ie).toFixed(0)} MB` : `${(E / 1024).toFixed(0)} KB`;
    }
    function I(E) {
      navigator.clipboard.writeText(E), S("Copied to clipboard!");
    }
    async function P(E) {
      try {
        await u(E), S("Opening file location...");
      } catch {
        S("Failed to open location", "error");
      }
    }
    async function M() {
      if (!(!v.value.trim() || !c.value)) {
        p.value = !0, h.value = null, w.value = null;
        try {
          await l(c.value.hash, v.value.trim()), w.value = "Source added successfully!", v.value = "", await j();
        } catch (E) {
          h.value = E instanceof Error ? E.message : "Failed to add source";
        } finally {
          p.value = !1;
        }
      }
    }
    async function A(E) {
      if (c.value) {
        _.value = E, h.value = null, w.value = null;
        try {
          await r(c.value.hash, E), S("Source removed"), await j();
        } catch (L) {
          h.value = L instanceof Error ? L.message : "Failed to remove source";
        } finally {
          _.value = null;
        }
      }
    }
    async function j() {
      m.value = !0, f.value = null;
      try {
        c.value = await a(o.identifier);
      } catch (E) {
        f.value = E instanceof Error ? E.message : "Failed to load model details";
      } finally {
        m.value = !1;
      }
    }
    return at(j), (E, L) => {
      var ie;
      return n(), i(H, null, [
        $(Ct, {
          title: `Model Details: ${((ie = c.value) == null ? void 0 : ie.filename) || "Loading..."}`,
          size: "lg",
          loading: m.value,
          error: f.value,
          onClose: L[5] || (L[5] = (le) => E.$emit("close"))
        }, {
          body: g(() => {
            var le, ne, te, K;
            return [
              c.value ? (n(), i("div", V_, [
                t("section", F_, [
                  t("div", B_, [
                    L[6] || (L[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", W_, d(c.value.hash || "Not computed"), 1),
                    c.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[0] || (L[0] = (X) => I(c.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", G_, [
                    L[7] || (L[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", j_, d(c.value.blake3 || "Not computed"), 1),
                    c.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[1] || (L[1] = (X) => I(c.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", H_, [
                    L[8] || (L[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", K_, d(c.value.sha256 || "Not computed"), 1),
                    c.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: L[2] || (L[2] = (X) => I(c.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", q_, [
                    L[9] || (L[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", Y_, d(U(c.value.size)), 1)
                  ]),
                  t("div", J_, [
                    L[10] || (L[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", Q_, d(c.value.category), 1)
                  ]),
                  t("div", X_, [
                    L[11] || (L[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", Z_, d(c.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", ek, [
                  t("h4", tk, "Locations (" + d(((le = c.value.locations) == null ? void 0 : le.length) || 0) + ")", 1),
                  (ne = c.value.locations) != null && ne.length ? (n(), i("div", sk, [
                    (n(!0), i(H, null, we(c.value.locations, (X, de) => (n(), i("div", {
                      key: de,
                      class: "location-item"
                    }, [
                      t("span", ok, d(X.path), 1),
                      X.modified ? (n(), i("span", nk, "Modified: " + d(X.modified), 1)) : y("", !0),
                      X.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (Le) => P(X.path)
                      }, " Open File Location ", 8, ak)) : y("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", lk, "No locations found"))
                ]),
                t("section", ik, [
                  t("h4", rk, "Download Sources (" + d(((te = c.value.sources) == null ? void 0 : te.length) || 0) + ")", 1),
                  (K = c.value.sources) != null && K.length ? (n(), i("div", uk, [
                    (n(!0), i(H, null, we(c.value.sources, (X, de) => (n(), i("div", {
                      key: de,
                      class: "source-item"
                    }, [
                      t("span", ck, d(X.type) + ":", 1),
                      t("a", {
                        href: X.url,
                        target: "_blank",
                        class: "source-url"
                      }, d(X.url), 9, dk),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: _.value === X.url,
                        onClick: (Le) => A(X.url)
                      }, d(_.value === X.url ? "..." : "×"), 9, mk)
                    ]))), 128))
                  ])) : (n(), i("div", fk, " No download sources configured ")),
                  t("div", vk, [
                    nt(t("input", {
                      "onUpdate:modelValue": L[3] || (L[3] = (X) => v.value = X),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [ts, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || p.value,
                      onClick: M
                    }, d(p.value ? "Adding..." : "Add Source"), 9, pk)
                  ]),
                  h.value ? (n(), i("p", gk, d(h.value), 1)) : y("", !0),
                  w.value ? (n(), i("p", hk, d(w.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: g(() => [
            t("button", {
              class: "btn-secondary",
              onClick: L[4] || (L[4] = (le) => E.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (n(), R(Ot, { to: "body" }, [
          x.value ? (n(), i("div", {
            key: 0,
            class: Pe(["toast", x.value.type])
          }, d(x.value.message), 3)) : y("", !0)
        ]))
      ], 64);
    };
  }
}), wl = /* @__PURE__ */ xe(yk, [["__scopeId", "data-v-f15cbb56"]]), wk = ["disabled"], _k = { class: "dropdown-value" }, kk = ["onClick"], bk = {
  key: 0,
  class: "dropdown-error"
}, $k = /* @__PURE__ */ $e({
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
    const o = e, a = s, l = k(!1), r = k(null), u = k(null), c = k({});
    function m(S) {
      return typeof S == "string" ? S : S.value;
    }
    function f(S) {
      return typeof S == "string" ? S : S.label;
    }
    const v = O(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const S = o.options.find((U) => m(U) === o.modelValue);
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
      const S = r.value.getBoundingClientRect(), U = window.innerHeight, I = U - S.bottom, P = S.top, M = Math.min(300, o.options.length * 36 + 8), A = I < M && P > I;
      c.value = {
        position: "fixed",
        left: `${S.left}px`,
        width: `${S.width}px`,
        maxHeight: "300px",
        ...A ? { bottom: `${U - S.top + 4}px` } : { top: `${S.bottom + 4}px` }
      };
    }
    St(l, async (S) => {
      S && (await Mt(), w());
    });
    function x() {
      l.value && w();
    }
    function C(S) {
      S.key === "Escape" && l.value && _();
    }
    return at(() => {
      window.addEventListener("scroll", x, !0), window.addEventListener("keydown", C);
    }), Zs(() => {
      window.removeEventListener("scroll", x, !0), window.removeEventListener("keydown", C);
    }), (S, U) => (n(), i("div", {
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
        t("span", _k, d(v.value), 1),
        U[0] || (U[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, wk),
      (n(), R(Ot, { to: "body" }, [
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
          (n(!0), i(H, null, we(e.options, (I) => (n(), i("div", {
            key: m(I),
            class: Pe(["dropdown-option", { selected: m(I) === e.modelValue }]),
            onClick: (P) => h(I)
          }, d(f(I)), 11, kk))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (n(), i("span", bk, d(e.error), 1)) : y("", !0)
    ], 512));
  }
}), Ck = /* @__PURE__ */ xe($k, [["__scopeId", "data-v-857e085b"]]);
function xk(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function Sk(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
  } catch {
    return { kind: "unknown" };
  }
  if (!xk(o.hostname)) return { kind: "unknown" };
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
function Ik(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function Ek(e, s, o) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${Ik(o)}`;
}
const Tk = { class: "hf-file-browser" }, Pk = { class: "browser-header" }, Rk = { class: "repo-info" }, Mk = { class: "repo-id" }, Dk = {
  key: 0,
  class: "revision-pill"
}, Lk = {
  key: 0,
  class: "loading-state"
}, Nk = {
  key: 1,
  class: "error-state"
}, Uk = { class: "toolbar" }, Ok = { class: "toolbar-actions" }, Ak = { class: "file-list-container" }, zk = {
  key: 0,
  class: "file-list-header"
}, Vk = ["checked", "indeterminate"], Fk = { class: "sort-indicator" }, Bk = { class: "sort-indicator" }, Wk = {
  key: 1,
  class: "empty-state"
}, Gk = {
  key: 2,
  class: "file-list"
}, jk = ["onClick"], Hk = ["checked", "onChange"], Kk = { class: "file-path" }, qk = { class: "file-size" }, Yk = { class: "destination-section" }, Jk = { class: "destination-row" }, Qk = {
  key: 0,
  class: "path-separator"
}, Xk = { class: "action-bar" }, Zk = { class: "summary-info" }, eb = { class: "summary-count" }, tb = { class: "summary-size" }, sb = /* @__PURE__ */ $e({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = ct(), u = k([]), c = k(/* @__PURE__ */ new Set()), m = k(!1), f = k(null), v = k(""), p = k(!1), _ = k("name"), h = k(!0), w = k(""), x = k(""), C = k(""), S = k([]), U = k(!1);
    let I = !1;
    const P = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, M = O(() => {
      let B = u.value;
      if (o.initialPath) {
        const oe = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        B = B.filter((G) => G.path.startsWith(oe) || G.path === o.initialPath);
      }
      if (p.value && (B = B.filter((oe) => oe.is_model_file)), v.value.trim()) {
        const oe = v.value.toLowerCase();
        B = B.filter((G) => G.path.toLowerCase().includes(oe));
      }
      return B;
    }), A = O(() => {
      const B = [...M.value];
      return B.sort((oe, G) => {
        let N;
        return _.value === "name" ? N = oe.path.localeCompare(G.path) : N = oe.size - G.size, h.value ? N : -N;
      }), B;
    }), j = O(() => M.value.length === 0 ? !1 : M.value.every((B) => c.value.has(B.path))), E = O(() => M.value.some((B) => c.value.has(B.path))), L = O(() => {
      const B = S.value.map((oe) => ({
        label: oe,
        value: oe
      }));
      return B.push({ label: "Custom path...", value: "__custom__" }), B;
    }), ie = O(() => w.value === "__custom__" ? C.value.trim().length > 0 : w.value.length > 0), le = O(() => {
      let B = 0;
      for (const oe of c.value) {
        const G = u.value.find((N) => N.path === oe);
        G && (B += G.size);
      }
      return B;
    });
    function ne(B) {
      if (B === 0) return "0 B";
      const oe = 1024 * 1024 * 1024, G = 1024 * 1024, N = 1024;
      return B >= oe ? `${(B / oe).toFixed(2)} GB` : B >= G ? `${(B / G).toFixed(1)} MB` : B >= N ? `${(B / N).toFixed(0)} KB` : `${B} B`;
    }
    function te(B) {
      const oe = B.match(P);
      return oe ? `${oe[1]}${oe[4]}` : null;
    }
    function K(B) {
      const oe = new Set(c.value), G = oe.has(B.path), N = B.shard_group || te(B.path);
      if (N) {
        const me = u.value.filter((ze) => (ze.shard_group || te(ze.path)) === N);
        G ? me.forEach((ze) => oe.delete(ze.path)) : me.forEach((ze) => oe.add(ze.path));
      } else
        G ? oe.delete(B.path) : oe.add(B.path);
      c.value = oe;
    }
    function X() {
      const B = new Set(c.value);
      for (const oe of M.value)
        oe.is_model_file && B.add(oe.path);
      c.value = B;
    }
    function de() {
      c.value = /* @__PURE__ */ new Set();
    }
    function Le() {
      if (j.value) {
        const B = new Set(c.value);
        for (const oe of M.value)
          B.delete(oe.path);
        c.value = B;
      } else {
        const B = new Set(c.value);
        for (const oe of M.value)
          B.add(oe.path);
        c.value = B;
      }
    }
    function ae(B) {
      _.value === B ? h.value = !h.value : (_.value = B, h.value = !0);
    }
    function ye(B) {
      const oe = B.split("/");
      return oe.length >= 2 ? oe[oe.length - 2] : null;
    }
    function fe() {
      if (U.value || c.value.size === 0) return;
      const B = /* @__PURE__ */ new Set();
      for (const N of c.value) {
        const me = ye(N);
        me && B.add(me.toLowerCase());
      }
      if (B.size !== 1) return;
      const oe = [...B][0], G = S.value.find(
        (N) => N.toLowerCase() === oe
      );
      G && G !== w.value && (I = !0, w.value = G, Mt(() => {
        I = !1;
      }));
    }
    function Oe() {
      return w.value === "__custom__" ? C.value.trim() : x.value.trim() ? `${w.value}/${x.value.trim()}` : w.value;
    }
    function se() {
      if (c.value.size === 0 || !ie.value) return;
      const B = Oe(), oe = [];
      for (const G of c.value) {
        const N = u.value.find((me) => me.path === G);
        N && oe.push({
          url: Ek(o.repoId, o.revision, N.path),
          destination: B,
          filename: N.path.split("/").pop() || N.path
        });
      }
      a("queue", oe);
    }
    async function ce() {
      if (o.repoId) {
        m.value = !0, f.value = null;
        try {
          const B = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, oe = await l(B);
          if (u.value = oe.files, o.preselectedFile) {
            const G = u.value.find((N) => N.path === o.preselectedFile);
            G && K(G);
          }
        } catch (B) {
          f.value = B instanceof Error ? B.message : "Failed to load repository";
        } finally {
          m.value = !1;
        }
      }
    }
    async function Y() {
      try {
        const B = await r();
        S.value = B.directories, B.directories.length > 0 && !w.value && (w.value = B.directories[0]);
      } catch {
        S.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], w.value || (w.value = "checkpoints");
      }
    }
    return St(() => [o.repoId, o.revision], () => {
      o.repoId && ce();
    }, { immediate: !1 }), St(() => o.repoId, () => {
      U.value = !1;
    }), St(c, () => {
      fe();
    }, { deep: !0 }), St(S, () => {
      S.value.length > 0 && c.value.size > 0 && fe();
    }), St(w, (B, oe) => {
      I || oe === "" || (U.value = !0);
    }), at(() => {
      ce(), Y();
    }), (B, oe) => (n(), i("div", Tk, [
      t("div", Pk, [
        t("button", {
          class: "back-btn",
          onClick: oe[0] || (oe[0] = (G) => B.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", Rk, [
          t("span", Mk, d(e.repoId), 1),
          e.revision ? (n(), i("span", Dk, d(e.revision), 1)) : y("", !0)
        ])
      ]),
      m.value ? (n(), i("div", Lk, " Loading repository files... ")) : f.value ? (n(), i("div", Nk, d(f.value), 1)) : (n(), i(H, { key: 2 }, [
        t("div", Uk, [
          $(ft, {
            modelValue: v.value,
            "onUpdate:modelValue": oe[1] || (oe[1] = (G) => v.value = G),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", Ok, [
            t("button", {
              class: Pe(["toggle-btn", { active: p.value }]),
              onClick: oe[2] || (oe[2] = (G) => p.value = !p.value)
            }, d(p.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: X
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: de
            }, "Clear")
          ])
        ]),
        t("div", Ak, [
          M.value.length > 0 ? (n(), i("div", zk, [
            t("input", {
              type: "checkbox",
              checked: j.value,
              indeterminate: E.value && !j.value,
              class: "file-checkbox",
              onChange: Le
            }, null, 40, Vk),
            t("span", {
              class: "header-name",
              onClick: oe[3] || (oe[3] = (G) => ae("name"))
            }, [
              oe[9] || (oe[9] = b(" Name ", -1)),
              t("span", Fk, d(_.value === "name" ? h.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: oe[4] || (oe[4] = (G) => ae("size"))
            }, [
              oe[10] || (oe[10] = b(" Size ", -1)),
              t("span", Bk, d(_.value === "size" ? h.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          M.value.length === 0 ? (n(), i("div", Wk, d(u.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", Gk, [
            (n(!0), i(H, null, we(A.value, (G) => (n(), i("div", {
              key: G.path,
              class: Pe(["file-item", { selected: c.value.has(G.path) }]),
              onClick: (N) => K(G)
            }, [
              t("input", {
                type: "checkbox",
                checked: c.value.has(G.path),
                class: "file-checkbox",
                onClick: oe[5] || (oe[5] = ut(() => {
                }, ["stop"])),
                onChange: (N) => K(G)
              }, null, 40, Hk),
              t("span", Kk, d(G.path), 1),
              t("span", qk, d(ne(G.size)), 1)
            ], 10, jk))), 128))
          ]))
        ]),
        t("div", Yk, [
          oe[11] || (oe[11] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", Jk, [
            $(Ck, {
              modelValue: w.value,
              "onUpdate:modelValue": oe[6] || (oe[6] = (G) => w.value = G),
              options: L.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            w.value !== "__custom__" ? (n(), i("span", Qk, "/")) : y("", !0),
            w.value !== "__custom__" ? (n(), R(ft, {
              key: 1,
              modelValue: x.value,
              "onUpdate:modelValue": oe[7] || (oe[7] = (G) => x.value = G),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : y("", !0)
          ]),
          w.value === "__custom__" ? (n(), R(ft, {
            key: 0,
            modelValue: C.value,
            "onUpdate:modelValue": oe[8] || (oe[8] = (G) => C.value = G),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : y("", !0)
        ]),
        t("div", Xk, [
          t("div", Zk, [
            t("span", eb, d(c.value.size) + " file(s) selected", 1),
            t("span", tb, d(ne(le.value)), 1)
          ]),
          $(Re, {
            variant: "primary",
            disabled: c.value.size === 0 || !ie.value,
            onClick: se
          }, {
            default: g(() => [...oe[12] || (oe[12] = [
              b(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), ob = /* @__PURE__ */ xe(sb, [["__scopeId", "data-v-183acebc"]]), nb = { class: "token-config-modal" }, ab = { class: "provider-info" }, lb = { class: "provider-icon" }, ib = { class: "provider-name" }, rb = {
  key: 0,
  class: "current-token"
}, ub = { class: "mask" }, cb = { class: "token-input-section" }, db = { class: "input-label" }, mb = { class: "help-text" }, fb = ["href"], vb = { class: "modal-actions" }, pb = /* @__PURE__ */ $e({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: s }) {
    const o = e, a = s, { updateConfig: l } = ct(), r = k(""), u = k(!1), c = k(!1), m = O(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), f = O(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), v = O(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), p = O(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), _ = O(
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
    return (x, C) => (n(), R(Ct, {
      title: "Configure API Token",
      onClose: C[2] || (C[2] = (S) => x.$emit("close"))
    }, {
      body: g(() => [
        t("div", nb, [
          t("div", ab, [
            t("span", lb, d(f.value), 1),
            t("span", ib, d(m.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", rb, [
            C[4] || (C[4] = t("span", { class: "label" }, "Current token:", -1)),
            t("span", ub, d(e.currentTokenMask), 1),
            $(Re, {
              variant: "danger",
              size: "sm",
              onClick: w,
              loading: c.value
            }, {
              default: g(() => [...C[3] || (C[3] = [
                b(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0),
          t("div", cb, [
            t("label", db, d(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            $(ft, {
              modelValue: r.value,
              "onUpdate:modelValue": C[0] || (C[0] = (S) => r.value = S),
              type: "password",
              placeholder: v.value
            }, null, 8, ["modelValue", "placeholder"]),
            t("div", mb, [
              t("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, d(_.value), 9, fb)
            ])
          ])
        ])
      ]),
      footer: g(() => [
        t("div", vb, [
          $(Re, {
            variant: "secondary",
            onClick: C[1] || (C[1] = (S) => x.$emit("close"))
          }, {
            default: g(() => [...C[5] || (C[5] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          $(Re, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: u.value,
            onClick: h
          }, {
            default: g(() => [...C[6] || (C[6] = [
              b(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }));
  }
}), gb = /* @__PURE__ */ xe(pb, [["__scopeId", "data-v-0687d0ce"]]), hb = { class: "huggingface-tab" }, yb = {
  key: 0,
  class: "search-section"
}, wb = { class: "search-header" }, _b = { class: "search-bar" }, kb = {
  key: 1,
  class: "search-results"
}, bb = {
  key: 0,
  class: "loading-state"
}, $b = {
  key: 1,
  class: "error-state"
}, Cb = {
  key: 2,
  class: "results-list"
}, xb = ["onClick"], Sb = { class: "repo-header" }, Ib = { class: "repo-id" }, Eb = { class: "repo-stats" }, Tb = {
  class: "stat",
  title: "Downloads"
}, Pb = {
  class: "stat",
  title: "Likes"
}, Rb = {
  key: 0,
  class: "repo-desc"
}, Mb = {
  key: 1,
  class: "repo-tags"
}, Db = {
  key: 3,
  class: "empty-state"
}, Lb = {
  key: 4,
  class: "hint-state"
}, Nb = /* @__PURE__ */ $e({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s, getConfig: o } = ct(), a = k("search"), l = k(""), r = k([]), u = k(!1), c = k(null), m = k(!1), f = k(null), v = k("main"), p = k(), _ = k(), h = k(!1), w = k(null), x = O(() => {
      if (!c.value) return !1;
      const j = c.value.toLowerCase();
      return c.value.includes("401") || c.value.includes("403") || j.includes("authentication") || j.includes("unauthorized");
    });
    function C(j) {
      return j >= 1e6 ? `${(j / 1e6).toFixed(1)}M` : j >= 1e3 ? `${(j / 1e3).toFixed(1)}K` : String(j);
    }
    async function S() {
      const j = l.value.trim();
      if (!j) return;
      c.value = null;
      const E = Sk(j);
      if (E.kind === "file" && E.repoId && E.path) {
        f.value = E.repoId, v.value = E.revision || "main";
        const L = E.path.split("/");
        L.length > 1 ? p.value = L.slice(0, -1).join("/") : p.value = void 0, _.value = E.path, a.value = "browse";
        return;
      }
      if (E.kind === "repo" && E.repoId) {
        f.value = E.repoId, v.value = E.revision || "main", p.value = E.path, _.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(j) && !j.includes("://")) {
        f.value = j, v.value = "main", p.value = void 0, _.value = void 0, a.value = "browse";
        return;
      }
      u.value = !0;
      try {
        const L = await s(j);
        r.value = L.results, m.value = !0;
      } catch (L) {
        c.value = L instanceof Error ? L.message : "Search failed";
      } finally {
        u.value = !1;
      }
    }
    function U(j) {
      f.value = j, v.value = "main", p.value = void 0, _.value = void 0, a.value = "browse";
    }
    function I() {
      a.value = "search", f.value = null, p.value = void 0, _.value = void 0;
    }
    async function P() {
      try {
        const j = await o();
        w.value = j.huggingface_token || null;
      } catch (j) {
        console.error("Failed to load config:", j);
      }
    }
    function M() {
      P(), x.value && l.value && S();
    }
    function A() {
      w.value = null;
    }
    return at(P), (j, E) => (n(), i("div", hb, [
      a.value === "search" ? (n(), i("div", yb, [
        t("div", wb, [
          t("div", _b, [
            $(ft, {
              modelValue: l.value,
              "onUpdate:modelValue": E[0] || (E[0] = (L) => l.value = L),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: as(S, ["enter"])
            }, null, 8, ["modelValue"]),
            $(Re, {
              variant: "primary",
              onClick: S,
              loading: u.value
            }, {
              default: g(() => [...E[5] || (E[5] = [
                b(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          $(Re, {
            variant: "secondary",
            size: "sm",
            onClick: E[1] || (E[1] = (L) => h.value = !0)
          }, {
            default: g(() => [
              b(d(w.value ? `Token: ${w.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      a.value === "search" ? (n(), i("div", kb, [
        u.value ? (n(), i("div", bb, " Searching HuggingFace... ")) : c.value ? (n(), i("div", $b, [
          t("p", null, d(c.value), 1),
          x.value ? (n(), R(Re, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: E[2] || (E[2] = (L) => h.value = !0)
          }, {
            default: g(() => [...E[6] || (E[6] = [
              b(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (n(), i("div", Cb, [
          (n(!0), i(H, null, we(r.value, (L) => (n(), i("div", {
            key: L.repo_id,
            class: "repo-card",
            onClick: (ie) => U(L.repo_id)
          }, [
            t("div", Sb, [
              t("span", Ib, d(L.repo_id), 1),
              t("div", Eb, [
                t("span", Tb, [
                  E[7] || (E[7] = t("span", { class: "stat-icon" }, "↓", -1)),
                  b(" " + d(C(L.downloads)), 1)
                ]),
                t("span", Pb, [
                  E[8] || (E[8] = t("span", { class: "stat-icon" }, "★", -1)),
                  b(" " + d(C(L.likes)), 1)
                ])
              ])
            ]),
            L.description ? (n(), i("p", Rb, d(L.description), 1)) : y("", !0),
            L.tags.length > 0 ? (n(), i("div", Mb, [
              (n(!0), i(H, null, we(L.tags.slice(0, 5), (ie) => (n(), i("span", {
                key: ie,
                class: "tag"
              }, d(ie), 1))), 128))
            ])) : y("", !0)
          ], 8, xb))), 128))
        ])) : m.value ? (n(), i("div", Db, " No repositories found ")) : (n(), i("div", Lb, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), R(ob, {
        key: 2,
        "repo-id": f.value,
        revision: v.value,
        "initial-path": p.value,
        "preselected-file": _.value,
        onBack: I,
        onQueue: E[3] || (E[3] = (L) => j.$emit("queue", L))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      h.value ? (n(), R(gb, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": w.value,
        onClose: E[4] || (E[4] = (L) => h.value = !1),
        onSaved: M,
        onCleared: A
      }, null, 8, ["current-token-mask"])) : y("", !0)
    ]));
  }
}), Ub = /* @__PURE__ */ xe(Nb, [["__scopeId", "data-v-e13209bf"]]), Ob = { class: "civitai-tab" }, Ab = /* @__PURE__ */ $e({
  __name: "CivitaiTab",
  setup(e) {
    return (s, o) => (n(), i("div", Ob, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), zb = /* @__PURE__ */ xe(Ab, [["__scopeId", "data-v-44948051"]]), Vb = { class: "direct-url-tab" }, Fb = { class: "input-group" }, Bb = { class: "input-group" }, Wb = {
  key: 0,
  class: "error"
}, Gb = { class: "actions" }, jb = /* @__PURE__ */ $e({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: s }) {
    const o = s, a = k(""), l = k(""), r = O(() => {
      const m = l.value.trim();
      if (!m) return null;
      const f = m.replace(/\\/g, "/").split("/").pop() || "";
      return f.includes(".") && !f.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), u = O(() => a.value.trim() !== "" && l.value.trim() !== "" && !r.value), c = () => {
      if (!u.value) return;
      const m = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: a.value.trim(),
        targetPath: l.value.trim(),
        filename: m
      }]), a.value = "", l.value = "";
    };
    return (m, f) => (n(), i("div", Vb, [
      t("div", Fb, [
        f[2] || (f[2] = t("label", null, "Download URL", -1)),
        $(ft, {
          modelValue: a.value,
          "onUpdate:modelValue": f[0] || (f[0] = (v) => a.value = v),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", Bb, [
        f[3] || (f[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        $(ft, {
          modelValue: l.value,
          "onUpdate:modelValue": f[1] || (f[1] = (v) => l.value = v),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (n(), i("p", Wb, d(r.value), 1)) : y("", !0)
      ]),
      f[5] || (f[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", Gb, [
        $(Re, {
          variant: "primary",
          disabled: !u.value,
          onClick: c
        }, {
          default: g(() => [...f[4] || (f[4] = [
            b(" Queue Download ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Hb = /* @__PURE__ */ xe(jb, [["__scopeId", "data-v-01def7aa"]]), Kb = { class: "download-modal" }, qb = { class: "tab-bar" }, Yb = ["onClick"], Jb = { class: "tab-content" }, Qb = /* @__PURE__ */ $e({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = s, { addToQueue: a } = Vo(), l = [
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = k("huggingface");
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
    return (f, v) => e.show ? (n(), R(Ct, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: m
    }, {
      body: g(() => [
        t("div", Kb, [
          t("div", qb, [
            (n(), i(H, null, we(l, (p) => t("button", {
              key: p.id,
              class: Pe(["tab-btn", { active: r.value === p.id }]),
              onClick: (_) => r.value = p.id
            }, d(p.icon) + " " + d(p.label), 11, Yb)), 64))
          ]),
          t("div", Jb, [
            r.value === "huggingface" ? (n(), R(Ub, {
              key: 0,
              onQueue: u
            })) : r.value === "civitai" ? (n(), R(zb, { key: 1 })) : r.value === "direct" ? (n(), R(Hb, {
              key: 2,
              onQueue: c
            })) : y("", !0)
          ])
        ])
      ]),
      footer: g(() => [
        $(Re, {
          variant: "secondary",
          onClick: m
        }, {
          default: g(() => [...v[0] || (v[0] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), Hr = /* @__PURE__ */ xe(Qb, [["__scopeId", "data-v-90a9f401"]]), Xb = /* @__PURE__ */ $e({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: a, getStatus: l } = ct(), r = k([]), u = k([]), c = k("production"), m = k(!1), f = k(null), v = k(""), p = k(!1), _ = k(null), h = k(!1);
    function w() {
      p.value = !1, o("navigate", "model-index");
    }
    const x = O(
      () => r.value.reduce((E, L) => E + (L.size || 0), 0)
    ), C = O(() => {
      if (!v.value.trim()) return r.value;
      const E = v.value.toLowerCase();
      return r.value.filter((L) => L.filename.toLowerCase().includes(E));
    }), S = O(() => {
      if (!v.value.trim()) return u.value;
      const E = v.value.toLowerCase();
      return u.value.filter((L) => L.filename.toLowerCase().includes(E));
    }), U = O(() => {
      const E = {};
      for (const ie of C.value) {
        const le = ie.type || "other";
        E[le] || (E[le] = []), E[le].push(ie);
      }
      const L = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(E).sort(([ie], [le]) => {
        const ne = L.indexOf(ie), te = L.indexOf(le);
        return ne >= 0 && te >= 0 ? ne - te : ne >= 0 ? -1 : te >= 0 ? 1 : ie.localeCompare(le);
      }).map(([ie, le]) => ({ type: ie, models: le }));
    });
    function I(E) {
      if (!E) return "Unknown";
      const L = E / (1024 * 1024);
      return L >= 1024 ? `${(L / 1024).toFixed(1)} GB` : `${L.toFixed(0)} MB`;
    }
    function P(E) {
      _.value = E.hash || E.filename;
    }
    function M(E) {
      o("navigate", "model-index");
    }
    function A(E) {
      alert(`Download functionality not yet implemented for ${E}`);
    }
    async function j() {
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
    return at(j), (E, L) => (n(), i(H, null, [
      $(qt, null, {
        header: g(() => [
          $(Yt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: L[1] || (L[1] = (ie) => p.value = !0)
          }, {
            actions: g(() => [
              $(_e, {
                variant: "primary",
                size: "sm",
                onClick: L[0] || (L[0] = (ie) => h.value = !0)
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
                  b(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          $(Fo, {
            modelValue: v.value,
            "onUpdate:modelValue": L[2] || (L[2] = (ie) => v.value = ie),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value ? (n(), R(zs, {
            key: 0,
            message: "Loading environment models..."
          })) : f.value ? (n(), R(Vs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: j
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            r.value.length ? (n(), R(Cn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + d(r.value.length) + " models • " + d(I(x.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(H, null, we(U.value, (ie) => (n(), R(_t, {
              key: ie.type,
              title: ie.type.toUpperCase(),
              count: ie.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(ie.models, (le) => (n(), R(Nt, {
                  key: le.hash || le.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...L[7] || (L[7] = [
                    b("📦", -1)
                  ])]),
                  title: g(() => [
                    b(d(le.filename), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(I(le.size)), 1)
                  ]),
                  details: g(() => [
                    $($t, {
                      label: "Used by:",
                      value: (le.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    $($t, {
                      label: "Path:",
                      value: le.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ne) => P(le)
                    }, {
                      default: g(() => [...L[8] || (L[8] = [
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
            S.value.length ? (n(), R(_t, {
              key: 1,
              title: "MISSING",
              count: S.value.length
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(S.value, (ie) => (n(), R(Nt, {
                  key: ie.filename,
                  status: "broken"
                }, {
                  icon: g(() => [...L[9] || (L[9] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(d(ie.filename), 1)
                  ]),
                  subtitle: g(() => [...L[10] || (L[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: g(() => {
                    var le;
                    return [
                      $($t, {
                        label: "Required by:",
                        value: ((le = ie.workflow_names) == null ? void 0 : le.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: g(() => [
                    $(_e, {
                      variant: "primary",
                      size: "sm",
                      onClick: (le) => A(ie.filename)
                    }, {
                      default: g(() => [...L[11] || (L[11] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(_e, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => M(ie.filename)
                    }, {
                      default: g(() => [...L[12] || (L[12] = [
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
            !C.value.length && !S.value.length ? (n(), R(gs, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      $(hs, {
        show: p.value,
        title: "About Environment Models",
        onClose: L[3] || (L[3] = (ie) => p.value = !1)
      }, {
        content: g(() => [
          t("p", null, [
            L[13] || (L[13] = b(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + d(c.value) + '"', 1),
            L[14] || (L[14] = b(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: g(() => [
          $(_e, {
            variant: "primary",
            onClick: w
          }, {
            default: g(() => [...L[15] || (L[15] = [
              b(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (n(), R(wl, {
        key: 0,
        identifier: _.value,
        onClose: L[4] || (L[4] = (ie) => _.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      $(Hr, {
        show: h.value,
        onClose: L[5] || (L[5] = (ie) => h.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), Zb = /* @__PURE__ */ xe(Xb, [["__scopeId", "data-v-af3ca736"]]), e2 = {
  key: 0,
  class: "indexing-progress"
}, t2 = { class: "progress-info" }, s2 = { class: "progress-label" }, o2 = { class: "progress-count" }, n2 = { class: "progress-bar" }, a2 = { class: "modal-content" }, l2 = { class: "modal-header" }, i2 = { class: "modal-body" }, r2 = { class: "input-group" }, u2 = { class: "current-path" }, c2 = { class: "input-group" }, d2 = { class: "modal-footer" }, m2 = /* @__PURE__ */ $e({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = ct(), u = s, c = k([]), m = k(!1), f = k(!1), v = k(null), p = k(""), _ = k(!1), h = k(null), w = k(!1), x = k(null), C = k(""), S = k(!1), U = k(!1), I = k(null), P = O(
      () => c.value.reduce((te, K) => te + (K.size || 0), 0)
    ), M = O(() => {
      if (!p.value.trim()) return c.value;
      const te = p.value.toLowerCase();
      return c.value.filter((K) => {
        const X = K, de = K.sha256 || X.sha256_hash || "";
        return K.filename.toLowerCase().includes(te) || de.toLowerCase().includes(te);
      });
    }), A = O(() => {
      const te = {};
      for (const X of M.value) {
        const de = X.type || "other";
        te[de] || (te[de] = []), te[de].push(X);
      }
      const K = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(te).sort(([X], [de]) => {
        const Le = K.indexOf(X), ae = K.indexOf(de);
        return Le >= 0 && ae >= 0 ? Le - ae : Le >= 0 ? -1 : ae >= 0 ? 1 : X.localeCompare(de);
      }).map(([X, de]) => ({ type: X, models: de }));
    });
    function j(te) {
      if (!te) return "Unknown";
      const K = 1024 * 1024 * 1024, X = 1024 * 1024;
      return te >= K ? `${(te / K).toFixed(1)} GB` : te >= X ? `${(te / X).toFixed(0)} MB` : `${(te / 1024).toFixed(0)} KB`;
    }
    function E(te) {
      h.value = te.hash || te.filename;
    }
    async function L() {
      f.value = !0, v.value = null;
      try {
        const te = await a();
        await le(), te.changes > 0 && console.log(`Scan complete: ${te.changes} changes detected`);
      } catch (te) {
        v.value = te instanceof Error ? te.message : "Failed to scan models";
      } finally {
        f.value = !1;
      }
    }
    async function ie() {
      if (C.value.trim()) {
        S.value = !0, v.value = null;
        try {
          const te = await r(C.value.trim());
          x.value = te.path, w.value = !1, C.value = "", await le(), console.log(`Directory changed: ${te.models_indexed} models indexed`), u("refresh");
        } catch (te) {
          v.value = te instanceof Error ? te.message : "Failed to change directory";
        } finally {
          S.value = !1;
        }
      }
    }
    async function le() {
      m.value = !0, v.value = null;
      try {
        c.value = await o();
      } catch (te) {
        v.value = te instanceof Error ? te.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function ne() {
      try {
        const te = await l();
        x.value = te.path;
      } catch {
      }
    }
    return at(() => {
      le(), ne();
    }), (te, K) => (n(), i(H, null, [
      $(qt, null, {
        header: g(() => [
          $(Yt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: K[2] || (K[2] = (X) => _.value = !0)
          }, {
            actions: g(() => [
              $(_e, {
                variant: "primary",
                size: "sm",
                disabled: f.value,
                onClick: L
              }, {
                default: g(() => [
                  b(d(f.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              $(_e, {
                variant: "primary",
                size: "sm",
                onClick: K[0] || (K[0] = (X) => w.value = !0)
              }, {
                default: g(() => [...K[11] || (K[11] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              $(_e, {
                variant: "primary",
                size: "sm",
                onClick: K[1] || (K[1] = (X) => U.value = !0)
              }, {
                default: g(() => [...K[12] || (K[12] = [
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
        search: g(() => [
          I.value ? (n(), i("div", e2, [
            t("div", t2, [
              t("span", s2, d(I.value.message), 1),
              t("span", o2, d(I.value.current) + "/" + d(I.value.total), 1)
            ]),
            t("div", n2, [
              t("div", {
                class: "progress-fill",
                style: Ft({ width: `${I.value.current / I.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          $(Fo, {
            modelValue: p.value,
            "onUpdate:modelValue": K[3] || (K[3] = (X) => p.value = X),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value || I.value ? (n(), R(zs, {
            key: 0,
            message: I.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (n(), R(Vs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: le
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            c.value.length ? (n(), R(Cn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + d(c.value.length) + " models • " + d(j(P.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(H, null, we(A.value, (X) => (n(), R(_t, {
              key: X.type,
              title: X.type.toUpperCase(),
              count: X.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(X.models, (de) => (n(), R(Nt, {
                  key: de.sha256 || de.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...K[13] || (K[13] = [
                    b("📦", -1)
                  ])]),
                  title: g(() => [
                    b(d(de.filename), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(j(de.size)), 1)
                  ]),
                  details: g(() => [
                    $($t, {
                      label: "Hash:",
                      value: de.hash ? de.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Le) => E(de)
                    }, {
                      default: g(() => [...K[14] || (K[14] = [
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
            M.value.length ? y("", !0) : (n(), R(gs, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      $(hs, {
        show: _.value,
        title: "About Workspace Model Index",
        onClose: K[4] || (K[4] = (X) => _.value = !1)
      }, {
        content: g(() => [...K[15] || (K[15] = [
          t("p", null, [
            b(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            b(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      h.value ? (n(), R(wl, {
        key: 0,
        identifier: h.value,
        onClose: K[5] || (K[5] = (X) => h.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (n(), R(Ot, { to: "body" }, [
        w.value ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: K[9] || (K[9] = ut((X) => w.value = !1, ["self"]))
        }, [
          t("div", a2, [
            t("div", l2, [
              K[16] || (K[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: K[6] || (K[6] = (X) => w.value = !1)
              }, "✕")
            ]),
            t("div", i2, [
              t("div", r2, [
                K[17] || (K[17] = t("label", null, "Current Directory", -1)),
                t("code", u2, d(x.value || "Not set"), 1)
              ]),
              t("div", c2, [
                K[18] || (K[18] = t("label", null, "New Directory Path", -1)),
                $(ft, {
                  modelValue: C.value,
                  "onUpdate:modelValue": K[7] || (K[7] = (X) => C.value = X),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              K[19] || (K[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", d2, [
              $(Re, {
                variant: "secondary",
                onClick: K[8] || (K[8] = (X) => w.value = !1)
              }, {
                default: g(() => [...K[20] || (K[20] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              $(Re, {
                variant: "primary",
                disabled: !C.value.trim() || S.value,
                loading: S.value,
                onClick: ie
              }, {
                default: g(() => [
                  b(d(S.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      $(Hr, {
        show: U.value,
        onClose: K[10] || (K[10] = (X) => U.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), f2 = /* @__PURE__ */ xe(m2, [["__scopeId", "data-v-3705114c"]]), v2 = { class: "node-details" }, p2 = { class: "status-row" }, g2 = {
  key: 0,
  class: "detail-row"
}, h2 = { class: "value" }, y2 = { class: "detail-row" }, w2 = { class: "value" }, _2 = {
  key: 1,
  class: "detail-row"
}, k2 = { class: "value mono" }, b2 = {
  key: 2,
  class: "detail-row"
}, $2 = ["href"], C2 = {
  key: 3,
  class: "detail-row"
}, x2 = { class: "value mono small" }, S2 = { class: "detail-row" }, I2 = {
  key: 0,
  class: "value"
}, E2 = {
  key: 1,
  class: "workflow-list"
}, T2 = /* @__PURE__ */ $e({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = O(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = O(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), u = O(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (c, m) => (n(), R(Ct, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: m[1] || (m[1] = (f) => a("close"))
    }, {
      body: g(() => [
        t("div", v2, [
          t("div", p2, [
            m[2] || (m[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Pe(["status-badge", l.value])
            }, d(r.value), 3)
          ]),
          e.node.version ? (n(), i("div", g2, [
            m[3] || (m[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", h2, d(e.node.source === "development" ? "" : "v") + d(e.node.version), 1)
          ])) : y("", !0),
          t("div", y2, [
            m[4] || (m[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", w2, d(u.value), 1)
          ]),
          e.node.registry_id ? (n(), i("div", _2, [
            m[5] || (m[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", k2, d(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (n(), i("div", b2, [
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
            ], 8, $2)
          ])) : y("", !0),
          e.node.download_url ? (n(), i("div", C2, [
            m[8] || (m[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", x2, d(e.node.download_url), 1)
          ])) : y("", !0),
          m[10] || (m[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", S2, [
            m[9] || (m[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (n(), i("span", I2, " Not used in any workflows ")) : (n(), i("div", E2, [
              (n(!0), i(H, null, we(e.node.used_in_workflows, (f) => (n(), i("span", {
                key: f,
                class: "workflow-tag"
              }, d(f), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: g(() => [
        $(Re, {
          variant: "secondary",
          onClick: m[0] || (m[0] = (f) => a("close"))
        }, {
          default: g(() => [...m[11] || (m[11] = [
            b(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), P2 = /* @__PURE__ */ xe(T2, [["__scopeId", "data-v-b342f626"]]), R2 = { class: "dialog-message" }, M2 = {
  key: 0,
  class: "dialog-details"
}, D2 = {
  key: 1,
  class: "dialog-warning"
}, L2 = /* @__PURE__ */ $e({
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
    return (s, o) => (n(), R(Ct, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (a) => s.$emit("cancel"))
    }, {
      body: g(() => [
        t("p", R2, d(e.message), 1),
        e.details && e.details.length ? (n(), i("div", M2, [
          (n(!0), i(H, null, we(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + d(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (n(), i("p", D2, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          b(" " + d(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: g(() => [
        $(Re, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => s.$emit("cancel"))
        }, {
          default: g(() => [
            b(d(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (n(), R(Re, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (a) => s.$emit("secondary"))
        }, {
          default: g(() => [
            b(d(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        $(Re, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
        }, {
          default: g(() => [
            b(d(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), _l = /* @__PURE__ */ xe(L2, [["__scopeId", "data-v-3670b9f5"]]), N2 = { class: "mismatch-warning" }, U2 = { class: "version-mismatch" }, O2 = { class: "version-actual" }, A2 = { class: "version-expected" }, z2 = { style: { color: "var(--cg-color-warning)" } }, V2 = { style: { color: "var(--cg-color-warning)" } }, F2 = {
  key: 0,
  class: "community-status-badge"
}, B2 = { key: 0 }, W2 = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, G2 = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, j2 = /* @__PURE__ */ $e({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getNodes: l, trackNodeAsDev: r, installNode: u, uninstallNode: c, queueNodeInstall: m } = ct(), f = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), v = k(!1), p = k(null), _ = k(""), h = k(!1), w = k(null), x = k(/* @__PURE__ */ new Set()), C = k(null), S = O(() => {
      if (!_.value.trim()) return f.value.nodes;
      const G = _.value.toLowerCase();
      return f.value.nodes.filter(
        (N) => {
          var me, ze;
          return N.name.toLowerCase().includes(G) || ((me = N.description) == null ? void 0 : me.toLowerCase().includes(G)) || ((ze = N.repository) == null ? void 0 : ze.toLowerCase().includes(G));
        }
      );
    }), U = O(
      () => S.value.filter((G) => G.installed && G.tracked)
    ), I = O(
      () => S.value.filter((G) => !G.installed && G.tracked && !G.issue_type)
    ), P = O(
      () => S.value.filter((G) => G.installed && !G.tracked)
    ), M = O(
      () => S.value.filter((G) => G.issue_type === "version_gated")
    ), A = O(
      () => S.value.filter((G) => G.issue_type === "uninstallable")
    ), j = O(() => M.value.length), E = O(() => A.value.length);
    function L(G) {
      return G.registry_id || G.name;
    }
    function ie(G) {
      return x.value.has(L(G));
    }
    async function le(G, N) {
      const me = G.registry_id;
      if (!me) {
        a("toast", `Node "${G.name}" has no package id for install`, "warning");
        return;
      }
      if (N === "git" && !G.repository) {
        a("toast", `Node "${G.name}" has no repository URL for git install`, "warning");
        return;
      }
      const ze = {
        id: me,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      N === "git" && G.repository && (ze.repository = G.repository, ze.install_source = "git"), await m(ze), x.value.add(L(G)), a("toast", `✓ Queued install for "${G.name}"`, "success");
    }
    function ne(G) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[G] || G;
    }
    const te = O(() => o.versionMismatches.length > 0);
    function K(G) {
      return !G.used_in_workflows || G.used_in_workflows.length === 0 ? "Not used in any workflows" : G.used_in_workflows.length === 1 ? G.used_in_workflows[0] : `${G.used_in_workflows.length} workflows`;
    }
    function X(G) {
      return G.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function de(G) {
      return G.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function Le(G) {
      return G.registry_id ? `Community-mapped package: ${G.registry_id}` : "Community-mapped package";
    }
    function ae(G) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function ye(G) {
      w.value = G;
    }
    function fe() {
      a("open-node-manager");
    }
    function Oe(G) {
      C.value = {
        title: "Track as Development Node",
        message: `Track "${G}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            v.value = !0;
            const N = await r(G);
            N.status === "success" ? (a("toast", `✓ Node "${G}" tracked as development`, "success"), await oe()) : a("toast", `Failed to track node: ${N.message || "Unknown error"}`, "error");
          } catch (N) {
            a("toast", `Error tracking node: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function se(G) {
      C.value = {
        title: "Remove Untracked Node",
        message: `Remove "${G}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          C.value = null;
          try {
            v.value = !0;
            const N = await c(G);
            N.status === "success" ? (a("toast", `✓ Node "${G}" removed`, "success"), await oe()) : a("toast", `Failed to remove node: ${N.message || "Unknown error"}`, "error");
          } catch (N) {
            a("toast", `Error removing node: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function ce(G) {
      C.value = {
        title: "Install Missing Node",
        message: `Install "${G}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            v.value = !0;
            const N = await u(G);
            N.status === "success" ? (a("toast", `✓ Node "${G}" installed`, "success"), await oe()) : a("toast", `Failed to install node: ${N.message || "Unknown error"}`, "error");
          } catch (N) {
            a("toast", `Error installing node: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function Y(G) {
      C.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${G.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            v.value = !0, await le(G, "registry");
          } catch (N) {
            a("toast", `Error queueing install: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function B(G) {
      C.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${G.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          C.value = null;
          try {
            v.value = !0, await le(G, "git");
          } catch (N) {
            a("toast", `Error queueing git install: ${N instanceof Error ? N.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    async function oe() {
      v.value = !0, p.value = null;
      try {
        f.value = await l();
      } catch (G) {
        p.value = G instanceof Error ? G.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return at(oe), (G, N) => (n(), i(H, null, [
      $(qt, null, {
        header: g(() => [
          $(Yt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: N[0] || (N[0] = (me) => h.value = !0)
          }, {
            actions: g(() => [
              $(_e, {
                variant: "primary",
                size: "sm",
                onClick: fe
              }, {
                default: g(() => [...N[7] || (N[7] = [
                  b(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          $(Fo, {
            modelValue: _.value,
            "onUpdate:modelValue": N[1] || (N[1] = (me) => _.value = me),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          v.value ? (n(), R(zs, {
            key: 0,
            message: "Loading nodes..."
          })) : p.value ? (n(), R(Vs, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: oe
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            f.value.total_count ? (n(), R(Cn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(d(f.value.installed_count) + " installed ", 1),
                f.value.missing_count ? (n(), i(H, { key: 0 }, [
                  b(" • " + d(f.value.missing_count) + " missing", 1)
                ], 64)) : y("", !0),
                j.value ? (n(), i(H, { key: 1 }, [
                  b(" • " + d(j.value) + " blocked", 1)
                ], 64)) : y("", !0),
                E.value ? (n(), i(H, { key: 2 }, [
                  b(" • " + d(E.value) + " community-mapped", 1)
                ], 64)) : y("", !0),
                f.value.untracked_count ? (n(), i(H, { key: 3 }, [
                  b(" • " + d(f.value.untracked_count) + " untracked", 1)
                ], 64)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            te.value ? (n(), R(_t, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                t("div", N2, [
                  N[8] || (N[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, d(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(H, null, we(e.versionMismatches, (me) => (n(), R(Nt, {
                  key: me.name,
                  status: "warning"
                }, {
                  icon: g(() => [...N[9] || (N[9] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(d(me.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", U2, [
                      t("span", O2, d(me.actual), 1),
                      N[10] || (N[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", A2, d(me.expected), 1)
                    ])
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "warning",
                      size: "sm",
                      onClick: N[2] || (N[2] = (ze) => a("repair-environment"))
                    }, {
                      default: g(() => [...N[11] || (N[11] = [
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
            M.value.length ? (n(), R(_t, {
              key: 2,
              title: "BLOCKED",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(M.value, (me) => (n(), R(Nt, {
                  key: `blocked-${me.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...N[12] || (N[12] = [
                    b("⛔", -1)
                  ])]),
                  title: g(() => [
                    b(d(me.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", z2, d(X(me)), 1)
                  ]),
                  details: g(() => [
                    $($t, {
                      label: "Guidance:",
                      value: me.issue_guidance || de(me)
                    }, null, 8, ["value"]),
                    $($t, {
                      label: "Used by:",
                      value: K(me)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ze) => ye(me)
                    }, {
                      default: g(() => [...N[13] || (N[13] = [
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
            A.value.length ? (n(), R(_t, {
              key: 3,
              title: "COMMUNITY-MAPPED",
              count: A.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(A.value, (me) => (n(), R(Nt, {
                  key: `community-${me.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...N[14] || (N[14] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(d(me.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", V2, d(Le(me)), 1)
                  ]),
                  details: g(() => [
                    $($t, {
                      label: "Guidance:",
                      value: me.issue_guidance || ae(me)
                    }, null, 8, ["value"]),
                    $($t, {
                      label: "Used by:",
                      value: K(me)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ze) => ye(me)
                    }, {
                      default: g(() => [...N[15] || (N[15] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    ie(me) ? (n(), i("span", F2, "Queued")) : (n(), i(H, { key: 1 }, [
                      me.registry_id ? (n(), R(_e, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (ze) => Y(me)
                      }, {
                        default: g(() => [...N[16] || (N[16] = [
                          b(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      me.repository ? (n(), R(_e, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (ze) => B(me)
                      }, {
                        default: g(() => [...N[17] || (N[17] = [
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
            P.value.length ? (n(), R(_t, {
              key: 4,
              title: "UNTRACKED",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(P.value, (me) => (n(), R(Nt, {
                  key: me.name,
                  status: "warning"
                }, {
                  icon: g(() => [...N[18] || (N[18] = [
                    b("?", -1)
                  ])]),
                  title: g(() => [
                    b(d(me.name), 1)
                  ]),
                  subtitle: g(() => [...N[19] || (N[19] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: g(() => [
                    $($t, {
                      label: "Used by:",
                      value: K(me)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ze) => ye(me)
                    }, {
                      default: g(() => [...N[20] || (N[20] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(_e, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ze) => Oe(me.name)
                    }, {
                      default: g(() => [...N[21] || (N[21] = [
                        b(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(_e, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (ze) => se(me.name)
                    }, {
                      default: g(() => [...N[22] || (N[22] = [
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
            U.value.length ? (n(), R(_t, {
              key: 5,
              title: "INSTALLED",
              count: U.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(U.value, (me) => (n(), R(Nt, {
                  key: me.name,
                  status: "synced"
                }, {
                  icon: g(() => [
                    b(d(me.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: g(() => [
                    b(d(me.name), 1)
                  ]),
                  subtitle: g(() => [
                    me.version ? (n(), i("span", B2, d(me.source === "development" ? "" : "v") + d(me.version), 1)) : (n(), i("span", W2, "version unknown")),
                    t("span", G2, " • " + d(ne(me.source)), 1)
                  ]),
                  details: g(() => [
                    $($t, {
                      label: "Used by:",
                      value: K(me)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ze) => ye(me)
                    }, {
                      default: g(() => [...N[23] || (N[23] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(_e, {
                      variant: "secondary",
                      size: "xs",
                      onClick: fe
                    }, {
                      default: g(() => [...N[24] || (N[24] = [
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
            I.value.length ? (n(), R(_t, {
              key: 6,
              title: "MISSING",
              count: I.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(I.value, (me) => (n(), R(Nt, {
                  key: me.name,
                  status: "missing"
                }, {
                  icon: g(() => [...N[25] || (N[25] = [
                    b("!", -1)
                  ])]),
                  title: g(() => [
                    b(d(me.name), 1)
                  ]),
                  subtitle: g(() => [...N[26] || (N[26] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: g(() => [
                    $($t, {
                      label: "Required by:",
                      value: K(me)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    $(_e, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ze) => ye(me)
                    }, {
                      default: g(() => [...N[27] || (N[27] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    $(_e, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ze) => ce(me.name)
                    }, {
                      default: g(() => [...N[28] || (N[28] = [
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
            !U.value.length && !I.value.length && !M.value.length && !A.value.length && !P.value.length ? (n(), R(gs, {
              key: 7,
              icon: "📭",
              message: _.value ? `No nodes match '${_.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      $(hs, {
        show: h.value,
        title: "About Custom Nodes",
        onClose: N[4] || (N[4] = (me) => h.value = !1)
      }, {
        content: g(() => [...N[29] || (N[29] = [
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
        actions: g(() => [
          $(_e, {
            variant: "primary",
            onClick: N[3] || (N[3] = (me) => h.value = !1)
          }, {
            default: g(() => [...N[30] || (N[30] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), R(P2, {
        key: 0,
        node: w.value,
        onClose: N[5] || (N[5] = (me) => w.value = null)
      }, null, 8, ["node"])) : y("", !0),
      C.value ? (n(), R(_l, {
        key: 1,
        title: C.value.title,
        message: C.value.message,
        warning: C.value.warning,
        "confirm-label": C.value.confirmLabel,
        destructive: C.value.destructive,
        onConfirm: C.value.onConfirm,
        onCancel: N[6] || (N[6] = (me) => C.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), H2 = /* @__PURE__ */ xe(j2, [["__scopeId", "data-v-3ef68ac4"]]);
function Kr(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const K2 = { class: "remote-url-display" }, q2 = ["title"], Y2 = ["title"], J2 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Q2 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, X2 = /* @__PURE__ */ $e({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = k(!1), a = O(() => {
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
    return (r, u) => (n(), i("div", K2, [
      t("span", {
        class: "url-text",
        title: e.url
      }, d(a.value), 9, q2),
      t("button", {
        class: Pe(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (n(), i("svg", Q2, [...u[1] || (u[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (n(), i("svg", J2, [...u[0] || (u[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Y2)
    ]));
  }
}), Z2 = /* @__PURE__ */ xe(X2, [["__scopeId", "data-v-7768a58d"]]), e$ = { class: "remote-title" }, t$ = {
  key: 0,
  class: "default-badge"
}, s$ = {
  key: 1,
  class: "sync-badge"
}, o$ = {
  key: 0,
  class: "ahead"
}, n$ = {
  key: 1,
  class: "behind"
}, a$ = {
  key: 1,
  class: "synced"
}, l$ = ["href"], i$ = {
  key: 1,
  class: "remote-url-text"
}, r$ = /* @__PURE__ */ $e({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = O(() => s.fetchingRemote === s.remote.name), a = O(() => s.remote.is_default), l = O(() => s.syncStatus && s.syncStatus.behind > 0), r = O(() => s.syncStatus && s.syncStatus.ahead > 0), u = O(() => s.remote.push_url !== s.remote.fetch_url), c = O(() => {
      const f = s.remote.fetch_url, v = f.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : f.startsWith("https://") || f.startsWith("http://") ? f.replace(/\.git$/, "") : null;
    }), m = O(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (f, v) => (n(), R(Nt, {
      status: a.value ? "synced" : void 0
    }, vo({
      icon: g(() => [
        b(d(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: g(() => [
        t("div", e$, [
          t("span", null, d(e.remote.name), 1),
          a.value ? (n(), i("span", t$, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", s$, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(H, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", o$, "↑" + d(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", n$, "↓" + d(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", a$, "✓ synced"))
          ])) : y("", !0)
        ])
      ]),
      subtitle: g(() => [
        c.value ? (n(), i("a", {
          key: 0,
          href: c.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: v[0] || (v[0] = ut(() => {
          }, ["stop"]))
        }, d(m.value), 9, l$)) : (n(), i("span", i$, d(m.value), 1))
      ]),
      actions: g(() => [
        $(_e, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: v[1] || (v[1] = (p) => f.$emit("fetch", e.remote.name))
        }, {
          default: g(() => [...v[6] || (v[6] = [
            b(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        $(_e, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[2] || (v[2] = (p) => f.$emit("pull", e.remote.name))
        }, {
          default: g(() => [
            b(" Pull" + d(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        $(_e, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[3] || (v[3] = (p) => f.$emit("push", e.remote.name))
        }, {
          default: g(() => [
            b(" Push" + d(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        $(_e, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (p) => f.$emit("edit", e.remote.name))
        }, {
          default: g(() => [...v[7] || (v[7] = [
            b(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? y("", !0) : (n(), R(_e, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[5] || (v[5] = (p) => f.$emit("remove", e.remote.name))
        }, {
          default: g(() => [...v[8] || (v[8] = [
            b(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      u.value ? {
        name: "details",
        fn: g(() => [
          e.remote.push_url !== e.remote.fetch_url ? (n(), R($t, {
            key: 0,
            label: "Push URL:"
          }, {
            default: g(() => [
              $(Z2, {
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
}), u$ = /* @__PURE__ */ xe(r$, [["__scopeId", "data-v-8310f3a8"]]), c$ = { class: "remote-form" }, d$ = { class: "form-header" }, m$ = { class: "form-body" }, f$ = {
  key: 0,
  class: "form-error"
}, v$ = { class: "form-actions" }, p$ = /* @__PURE__ */ $e({
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
    }), r = k(!1), u = k(null);
    St(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const c = O(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
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
    return (f, v) => (n(), i("div", c$, [
      t("div", d$, [
        $(Zt, null, {
          default: g(() => [
            b(d(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", m$, [
        $(gt, {
          label: "Remote Name",
          required: ""
        }, {
          default: g(() => [
            $(ft, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (p) => l.value.name = p),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        $(gt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: g(() => [
            $(ft, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (p) => l.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        $(gt, { label: "Push URL (optional)" }, {
          default: g(() => [
            $(ft, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        u.value ? (n(), i("div", f$, d(u.value), 1)) : y("", !0)
      ]),
      t("div", v$, [
        $(_e, {
          variant: "primary",
          size: "md",
          disabled: !c.value,
          loading: r.value,
          onClick: m
        }, {
          default: g(() => [
            b(d(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        $(_e, {
          variant: "ghost",
          size: "md",
          onClick: v[3] || (v[3] = (p) => f.$emit("cancel"))
        }, {
          default: g(() => [...v[4] || (v[4] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), g$ = /* @__PURE__ */ xe(p$, [["__scopeId", "data-v-56021b18"]]), h$ = { class: "conflict-summary-box" }, y$ = { class: "summary-header" }, w$ = { class: "summary-text" }, _$ = { key: 0 }, k$ = {
  key: 1,
  class: "all-resolved"
}, b$ = { class: "summary-progress" }, $$ = { class: "progress-bar" }, C$ = { class: "progress-text" }, x$ = /* @__PURE__ */ $e({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const s = e, o = O(
      () => s.conflictCount > 0 ? s.resolvedCount / s.conflictCount * 100 : 0
    );
    return (a, l) => (n(), i("div", h$, [
      t("div", y$, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", w$, [
          t("strong", null, d(e.conflictCount) + " conflict" + d(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (n(), i("p", _$, " Resolve all conflicts before " + d(e.operationType) + "ing ", 1)) : (n(), i("p", k$, " All conflicts resolved - ready to " + d(e.operationType), 1))
        ])
      ]),
      t("div", b$, [
        t("div", $$, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", C$, d(e.resolvedCount) + " / " + d(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), S$ = /* @__PURE__ */ xe(x$, [["__scopeId", "data-v-4e9e6cc9"]]), I$ = { class: "modal-header" }, E$ = { class: "modal-title" }, T$ = { class: "modal-body" }, P$ = {
  key: 0,
  class: "error-box"
}, R$ = {
  key: 0,
  class: "error-hint"
}, M$ = {
  key: 1,
  class: "loading-state"
}, D$ = { class: "commit-summary" }, L$ = {
  key: 0,
  class: "commits-section"
}, N$ = { class: "commit-list" }, U$ = { class: "commit-hash" }, O$ = { class: "commit-message" }, A$ = { class: "commit-date" }, z$ = {
  key: 1,
  class: "changes-section"
}, V$ = {
  key: 0,
  class: "change-group",
  open: ""
}, F$ = { class: "change-count" }, B$ = { class: "change-list" }, W$ = {
  key: 0,
  class: "conflict-badge"
}, G$ = {
  key: 1,
  class: "change-group"
}, j$ = { class: "change-count" }, H$ = { class: "change-list" }, K$ = {
  key: 2,
  class: "change-group"
}, q$ = { class: "change-count" }, Y$ = { class: "change-list" }, J$ = {
  key: 3,
  class: "strategy-section"
}, Q$ = { class: "radio-group" }, X$ = { class: "radio-option" }, Z$ = { class: "radio-option" }, eC = { class: "radio-option" }, tC = {
  key: 4,
  class: "up-to-date"
}, sC = { class: "modal-actions" }, vi = "comfygit.pullModelStrategy", oC = /* @__PURE__ */ $e({
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
    const o = e, a = s, l = k(localStorage.getItem(vi) || "skip");
    St(l, (C) => {
      localStorage.setItem(vi, C);
    });
    const r = O(() => {
      var C;
      return ((C = o.error) == null ? void 0 : C.toLowerCase().includes("unrelated histories")) ?? !1;
    }), u = O(() => {
      if (!o.preview) return 0;
      const C = o.preview.changes.workflows;
      return C.added.length + C.modified.length + C.deleted.length;
    }), c = O(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), m = O(() => {
      var C;
      return u.value > 0 || c.value > 0 || (((C = o.preview) == null ? void 0 : C.changes.models.count) || 0) > 0;
    }), f = O(() => o.preview && Kr(o.preview) ? o.preview : null), v = O(() => {
      var C;
      return ((C = f.value) == null ? void 0 : C.workflow_conflicts.length) ?? 0;
    }), p = O(() => {
      var C;
      return ((C = o.conflictResolutions) == null ? void 0 : C.size) ?? 0;
    }), _ = O(
      () => v.value > 0 && p.value === v.value
    ), h = O(() => !(!o.preview || o.preview.has_uncommitted_changes || f.value && !_.value));
    function w(C) {
      if (!f.value) return !1;
      const S = C.replace(/\.json$/, "");
      return f.value.workflow_conflicts.some((U) => U.name === S);
    }
    function x(C) {
      const S = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: C, resolutions: S });
    }
    return (C, S) => {
      var U, I;
      return n(), R(Ot, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[11] || (S[11] = (P) => C.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: S[10] || (S[10] = ut(() => {
            }, ["stop"]))
          }, [
            t("div", I$, [
              t("h3", E$, "PULL FROM " + d(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: S[0] || (S[0] = (P) => C.$emit("close"))
              }, "✕")
            ]),
            t("div", T$, [
              e.error ? (n(), i("div", P$, [
                S[13] || (S[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  S[12] || (S[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, d(e.error), 1),
                  r.value ? (n(), i("p", R$, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (n(), i("div", M$, [...S[14] || (S[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (U = e.preview) != null && U.has_uncommitted_changes ? (n(), i(H, { key: 2 }, [
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
                t("div", D$, [
                  S[17] || (S[17] = t("span", { class: "icon" }, "📥", -1)),
                  b(" " + d(e.preview.commits_behind) + " commit" + d(e.preview.commits_behind !== 1 ? "s" : "") + " from " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", L$, [
                  S[18] || (S[18] = t("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  t("div", N$, [
                    (n(!0), i(H, null, we(e.preview.commits, (P) => (n(), i("div", {
                      key: P.hash,
                      class: "commit-item"
                    }, [
                      t("span", U$, d(P.short_hash || P.hash.slice(0, 7)), 1),
                      t("span", O$, d(P.message), 1),
                      t("span", A$, d(P.date_relative || P.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                m.value ? (n(), i("div", z$, [
                  S[22] || (S[22] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  u.value > 0 ? (n(), i("details", V$, [
                    t("summary", null, [
                      S[19] || (S[19] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", F$, d(u.value) + " changes", 1)
                    ]),
                    t("div", B$, [
                      (n(!0), i(H, null, we(e.preview.changes.workflows.added, (P) => (n(), i("div", {
                        key: "a-" + P,
                        class: "change-item add"
                      }, " + " + d(P), 1))), 128)),
                      (n(!0), i(H, null, we(e.preview.changes.workflows.modified, (P) => (n(), i("div", {
                        key: "m-" + P,
                        class: "change-item modify"
                      }, [
                        b(" ~ " + d(P) + " ", 1),
                        w(P) ? (n(), i("span", W$, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (n(!0), i(H, null, we(e.preview.changes.workflows.deleted, (P) => (n(), i("div", {
                        key: "d-" + P,
                        class: "change-item delete"
                      }, " - " + d(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  c.value > 0 ? (n(), i("details", G$, [
                    t("summary", null, [
                      S[20] || (S[20] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", j$, d(c.value) + " to install", 1)
                    ]),
                    t("div", H$, [
                      (n(!0), i(H, null, we(e.preview.changes.nodes.to_install, (P) => (n(), i("div", {
                        key: P,
                        class: "change-item add"
                      }, " + " + d(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", K$, [
                    t("summary", null, [
                      S[21] || (S[21] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", q$, d(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", Y$, [
                      (n(!0), i(H, null, we(e.preview.changes.models.referenced, (P) => (n(), i("div", {
                        key: P,
                        class: "change-item"
                      }, d(P), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                f.value ? (n(), R(S$, {
                  key: 2,
                  "conflict-count": v.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", J$, [
                  S[27] || (S[27] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", Q$, [
                    t("label", X$, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[1] || (S[1] = (P) => l.value = P),
                        value: "all"
                      }, null, 512), [
                        [ds, l.value]
                      ]),
                      S[23] || (S[23] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", Z$, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (P) => l.value = P),
                        value: "required"
                      }, null, 512), [
                        [ds, l.value]
                      ]),
                      S[24] || (S[24] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", eC, [
                      nt(t("input", {
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
                e.preview.commits_behind === 0 ? (n(), i("div", tC, [
                  S[29] || (S[29] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Already up to date with " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", sC, [
              $(_e, {
                variant: "secondary",
                onClick: S[4] || (S[4] = (P) => C.$emit("close"))
              }, {
                default: g(() => [...S[30] || (S[30] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (n(), i(H, { key: 0 }, [
                $(_e, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: S[5] || (S[5] = (P) => x(!1))
                }, {
                  default: g(() => [...S[31] || (S[31] = [
                    b(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                $(_e, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: S[6] || (S[6] = (P) => x(!0))
                }, {
                  default: g(() => [...S[32] || (S[32] = [
                    b(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (I = e.preview) != null && I.has_uncommitted_changes ? (n(), R(_e, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: S[7] || (S[7] = (P) => x(!0))
              }, {
                default: g(() => [...S[33] || (S[33] = [
                  b(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (n(), i(H, { key: 2 }, [
                f.value && !_.value ? (n(), R(_e, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (P) => a("openConflictResolution"))
                }, {
                  default: g(() => [
                    b(" Resolve Conflicts (" + d(p.value) + "/" + d(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (n(), R(_e, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !h.value,
                  onClick: S[9] || (S[9] = (P) => x(!1))
                }, {
                  default: g(() => [...S[34] || (S[34] = [
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
}), nC = /* @__PURE__ */ xe(oC, [["__scopeId", "data-v-1d633bba"]]), aC = { class: "modal-header" }, lC = { class: "modal-title" }, iC = { class: "modal-body" }, rC = {
  key: 0,
  class: "loading-state"
}, uC = {
  key: 1,
  class: "warning-box"
}, cC = {
  key: 0,
  class: "commits-section"
}, dC = { class: "commit-list" }, mC = { class: "commit-hash" }, fC = { class: "commit-message" }, vC = { class: "commit-date" }, pC = { class: "force-option" }, gC = { class: "checkbox-option" }, hC = { class: "commit-summary" }, yC = { key: 0 }, wC = { key: 1 }, _C = {
  key: 0,
  class: "info-box"
}, kC = {
  key: 1,
  class: "commits-section"
}, bC = { class: "commit-list" }, $C = { class: "commit-hash" }, CC = { class: "commit-message" }, xC = { class: "commit-date" }, SC = {
  key: 2,
  class: "up-to-date"
}, IC = { class: "modal-actions" }, EC = /* @__PURE__ */ $e({
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
    return (r, u) => {
      var c, m, f;
      return n(), R(Ot, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: u[7] || (u[7] = (v) => r.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: u[6] || (u[6] = ut(() => {
            }, ["stop"]))
          }, [
            t("div", aC, [
              t("h3", lC, "PUSH TO " + d(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: u[0] || (u[0] = (v) => r.$emit("close"))
              }, "✕")
            ]),
            t("div", iC, [
              e.loading ? (n(), i("div", rC, [...u[8] || (u[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (c = e.preview) != null && c.has_uncommitted_changes ? (n(), i("div", uC, [...u[9] || (u[9] = [
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
                e.preview.commits_ahead > 0 ? (n(), i("div", cC, [
                  u[10] || (u[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", dC, [
                    (n(!0), i(H, null, we(e.preview.commits, (v) => (n(), i("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", mC, d(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", fC, d(v.message), 1),
                      t("span", vC, d(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                t("div", pC, [
                  t("label", gC, [
                    nt(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": u[1] || (u[1] = (v) => a.value = v)
                    }, null, 512), [
                      [yn, a.value]
                    ]),
                    u[11] || (u[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  u[12] || (u[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (n(), i(H, { key: 3 }, [
                t("div", hC, [
                  u[14] || (u[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (n(), i("span", yC, " Creating " + d(e.preview.remote) + "/" + d(e.preview.branch) + " with " + d(e.preview.commits_ahead) + " commit" + d(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (n(), i("span", wC, " Pushing " + d(e.preview.commits_ahead) + " commit" + d(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + d(e.preview.remote) + "/" + d(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (n(), i("div", _C, [...u[15] || (u[15] = [
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
                e.preview.commits_ahead > 0 ? (n(), i("div", kC, [
                  u[16] || (u[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", bC, [
                    (n(!0), i(H, null, we(e.preview.commits, (v) => (n(), i("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", $C, d(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", CC, d(v.message), 1),
                      t("span", xC, d(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (n(), i("div", SC, [
                  u[17] || (u[17] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Nothing to push - already up to date with " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ]))
              ], 64)) : y("", !0)
            ]),
            t("div", IC, [
              $(_e, {
                variant: "secondary",
                onClick: u[2] || (u[2] = (v) => r.$emit("close"))
              }, {
                default: g(() => [...u[18] || (u[18] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (f = e.preview) != null && f.remote_has_new_commits ? (n(), i(H, { key: 0 }, [
                $(_e, {
                  variant: "secondary",
                  onClick: u[3] || (u[3] = (v) => r.$emit("pull-first"))
                }, {
                  default: g(() => [...u[19] || (u[19] = [
                    b(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                $(_e, {
                  variant: "destructive",
                  disabled: !a.value,
                  loading: e.pushing,
                  onClick: u[4] || (u[4] = (v) => l(!0))
                }, {
                  default: g(() => [...u[20] || (u[20] = [
                    b(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (n(), R(_e, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: u[5] || (u[5] = (v) => l(!1))
              }, {
                default: g(() => [...u[21] || (u[21] = [
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
}), TC = /* @__PURE__ */ xe(EC, [["__scopeId", "data-v-3c2e35ab"]]), PC = { class: "resolution-choice-group" }, RC = ["disabled"], MC = ["disabled"], DC = /* @__PURE__ */ $e({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("div", PC, [
      t("button", {
        class: Pe(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, RC),
      t("button", {
        class: Pe(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, MC)
    ]));
  }
}), LC = /* @__PURE__ */ xe(DC, [["__scopeId", "data-v-985715ed"]]), NC = { class: "conflict-header" }, UC = { class: "conflict-info" }, OC = { class: "workflow-name" }, AC = { class: "conflict-description" }, zC = {
  key: 0,
  class: "resolved-badge"
}, VC = { class: "resolved-text" }, FC = { class: "conflict-hashes" }, BC = { class: "hash-item" }, WC = { class: "hash-item" }, GC = { class: "conflict-actions" }, jC = /* @__PURE__ */ $e({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = k(o.resolution);
    St(() => o.resolution, (m) => {
      l.value = m;
    }), St(l, (m) => {
      m && a("resolve", m);
    });
    const r = O(() => l.value !== null), u = O(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), c = O(() => {
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
        t("div", NC, [
          f[2] || (f[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", UC, [
            t("code", OC, d(e.conflict.name) + ".json", 1),
            t("div", AC, d(u.value), 1)
          ]),
          r.value ? (n(), i("div", zC, [
            f[1] || (f[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", VC, d(c.value), 1)
          ])) : y("", !0)
        ]),
        t("div", FC, [
          t("span", BC, [
            f[3] || (f[3] = b("Your: ", -1)),
            t("code", null, d(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", WC, [
            f[4] || (f[4] = b("Theirs: ", -1)),
            t("code", null, d(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", GC, [
          $(LC, {
            modelValue: l.value,
            "onUpdate:modelValue": f[0] || (f[0] = (_) => l.value = _),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), HC = /* @__PURE__ */ xe(jC, [["__scopeId", "data-v-506d3bbf"]]), KC = { class: "resolution-content" }, qC = {
  key: 0,
  class: "error-box"
}, YC = { class: "resolution-header" }, JC = { class: "header-stats" }, QC = { class: "stat" }, XC = { class: "stat-value" }, ZC = { class: "stat resolved" }, e3 = { class: "stat-value" }, t3 = {
  key: 0,
  class: "stat pending"
}, s3 = { class: "stat-value" }, o3 = { class: "conflicts-list" }, n3 = {
  key: 1,
  class: "all-resolved-message"
}, a3 = /* @__PURE__ */ $e({
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
    const o = e, a = s, l = O(() => o.resolutions.size), r = O(() => o.workflowConflicts.length - l.value), u = O(() => l.value === o.workflowConflicts.length), c = O(
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
    return (_, h) => (n(), R(Ct, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: g(() => [
        t("div", KC, [
          e.error ? (n(), i("div", qC, [
            h[1] || (h[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              h[0] || (h[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, d(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", YC, [
            t("div", JC, [
              t("div", QC, [
                t("span", XC, d(e.workflowConflicts.length), 1),
                h[2] || (h[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", ZC, [
                t("span", e3, d(l.value), 1),
                h[3] || (h[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (n(), i("div", t3, [
                t("span", s3, d(r.value), 1),
                h[4] || (h[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            h[5] || (h[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", o3, [
            (n(!0), i(H, null, we(e.workflowConflicts, (w) => (n(), R(HC, {
              key: w.name,
              conflict: w,
              resolution: m(w.name),
              onResolve: (x) => f(w.name, x)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          u.value ? (n(), i("div", n3, [
            h[6] || (h[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + d(c.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        $(Re, {
          variant: "secondary",
          onClick: v
        }, {
          default: g(() => [...h[7] || (h[7] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        h[8] || (h[8] = t("div", { class: "footer-spacer" }, null, -1)),
        $(Re, {
          variant: "primary",
          disabled: !u.value || e.validating,
          loading: e.validating,
          onClick: p
        }, {
          default: g(() => [
            b(d(c.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), l3 = /* @__PURE__ */ xe(a3, [["__scopeId", "data-v-c58d150d"]]), i3 = { class: "node-conflict-item" }, r3 = { class: "node-header" }, u3 = { class: "node-name" }, c3 = { class: "node-id" }, d3 = { class: "version-comparison" }, m3 = { class: "version yours" }, f3 = { class: "version theirs" }, v3 = { class: "chosen-version" }, p3 = { class: "chosen" }, g3 = { class: "chosen-reason" }, h3 = { class: "affected-workflows" }, y3 = { class: "wf-source" }, w3 = { class: "wf-version" }, _3 = /* @__PURE__ */ $e({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", i3, [
      t("div", r3, [
        t("code", u3, d(e.conflict.node_name), 1),
        t("span", c3, "(" + d(e.conflict.node_id) + ")", 1)
      ]),
      t("div", d3, [
        t("div", m3, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, d(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", f3, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, d(e.conflict.target_version), 1)
        ])
      ]),
      t("div", v3, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", p3, d(e.conflict.chosen_version), 1),
        t("span", g3, d(e.conflict.chosen_reason), 1)
      ]),
      t("details", h3, [
        t("summary", null, " Affected workflows (" + d(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (n(!0), i(H, null, we(e.conflict.affected_workflows, (a) => (n(), i("li", {
            key: a.name
          }, [
            t("code", null, d(a.name), 1),
            t("span", y3, "(" + d(a.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", w3, "needs v" + d(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), k3 = /* @__PURE__ */ xe(_3, [["__scopeId", "data-v-8b626725"]]), b3 = { class: "validation-content" }, $3 = {
  key: 0,
  class: "compatible-message"
}, C3 = { class: "conflicts-list" }, x3 = {
  key: 2,
  class: "warnings-section"
}, S3 = /* @__PURE__ */ $e({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = O(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, u) => (n(), R(Ct, {
      title: "Compatibility Check",
      size: "lg",
      onClose: u[3] || (u[3] = (c) => a("cancel"))
    }, {
      body: g(() => [
        t("div", b3, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (n(), i("div", $3, [
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
            t("div", C3, [
              (n(!0), i(H, null, we(e.validation.node_conflicts, (c) => (n(), R(k3, {
                key: c.node_id,
                conflict: c
              }, null, 8, ["conflict"]))), 128))
            ]),
            u[7] || (u[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (n(), i("div", x3, [
            u[8] || (u[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (n(!0), i(H, null, we(e.validation.warnings, (c, m) => (n(), i("li", { key: m }, d(c), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        $(Re, {
          variant: "secondary",
          onClick: u[0] || (u[0] = (c) => a("cancel"))
        }, {
          default: g(() => [...u[9] || (u[9] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        u[11] || (u[11] = t("div", { class: "footer-spacer" }, null, -1)),
        $(Re, {
          variant: "secondary",
          onClick: u[1] || (u[1] = (c) => a("goBack"))
        }, {
          default: g(() => [...u[10] || (u[10] = [
            b(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        $(Re, {
          variant: "primary",
          loading: e.executing,
          onClick: u[2] || (u[2] = (c) => a("proceed"))
        }, {
          default: g(() => [
            b(d(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), I3 = /* @__PURE__ */ xe(S3, [["__scopeId", "data-v-fefd26ed"]]), E3 = { key: 0 }, T3 = /* @__PURE__ */ $e({
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
      getPushPreview: p,
      pushToRemote: _,
      validateMerge: h
    } = ct(), w = k([]), x = k(null), C = k({}), S = k(!1), U = k(null), I = k(""), P = k(!1), M = k(null), A = k(!1), j = k("add"), E = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), L = O(() => {
      if (!I.value.trim()) return w.value;
      const F = I.value.toLowerCase();
      return w.value.filter(
        (q) => q.name.toLowerCase().includes(F) || q.fetch_url.toLowerCase().includes(F) || q.push_url.toLowerCase().includes(F)
      );
    });
    async function ie() {
      S.value = !0, U.value = null;
      try {
        const F = await a();
        w.value = F.remotes, x.value = F.current_branch_tracking || null, await Promise.all(
          F.remotes.map(async (q) => {
            const ve = await m(q.name);
            ve && (C.value[q.name] = ve);
          })
        );
      } catch (F) {
        U.value = F instanceof Error ? F.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function le() {
      j.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, A.value = !0;
    }
    function ne(F) {
      const q = w.value.find((ve) => ve.name === F);
      q && (j.value = "edit", E.value = {
        name: q.name,
        fetchUrl: q.fetch_url,
        pushUrl: q.push_url
      }, A.value = !0);
    }
    async function te(F) {
      try {
        j.value === "add" ? await l(F.name, F.fetchUrl) : await u(F.name, F.fetchUrl, F.pushUrl || void 0), A.value = !1, await ie();
      } catch (q) {
        U.value = q instanceof Error ? q.message : "Operation failed";
      }
    }
    function K() {
      A.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function X(F) {
      M.value = F;
      try {
        await c(F);
        const q = await m(F);
        q && (C.value[F] = q), o("toast", `✓ Fetched from ${F}`, "success");
      } catch (q) {
        o("toast", q instanceof Error ? q.message : "Fetch failed", "error");
      } finally {
        M.value = null;
      }
    }
    async function de(F) {
      if (confirm(`Remove remote "${F}"?`))
        try {
          await r(F), await ie();
        } catch (q) {
          U.value = q instanceof Error ? q.message : "Failed to remove remote";
        }
    }
    function Le() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const ae = k("idle"), ye = O(() => ae.value === "pull_preview"), fe = O(
      () => ae.value === "resolving" || ae.value === "validating"
    ), Oe = O(
      () => ae.value === "validation_review" || ae.value === "executing"
    ), se = k(!1), ce = k(null), Y = k(!1), B = k(null), oe = k(!1), G = k(null), N = k(null), me = k(/* @__PURE__ */ new Map()), ze = k(null), Ve = k(null), W = O(() => G.value && Kr(G.value) ? G.value : null);
    async function Q(F) {
      B.value = F, ae.value = "pull_preview", oe.value = !0, G.value = null, N.value = null;
      try {
        G.value = await f(F);
      } catch (q) {
        N.value = q instanceof Error ? q.message : "Failed to load pull preview";
      } finally {
        oe.value = !1;
      }
    }
    function ge() {
      ae.value = "idle", G.value = null, N.value = null, B.value = null;
    }
    async function Ee(F) {
      if (!B.value) return;
      ae.value = "executing", N.value = null;
      const q = B.value;
      try {
        const ve = await v(q, F);
        if (ve.rolled_back) {
          N.value = `Pull failed and was rolled back: ${ve.error || "Unknown error"}`, ae.value = "pull_preview";
          return;
        }
        Ue(), ae.value = "idle", o("toast", `✓ Pulled from ${q}`, "success"), await ie();
      } catch (ve) {
        N.value = ve instanceof Error ? ve.message : "Pull failed", ae.value = "pull_preview";
      }
    }
    function Se() {
      W.value && (ae.value = "resolving", Ve.value = null);
    }
    function Ie(F, q) {
      me.value.set(F, { name: F, resolution: q });
    }
    function Ne() {
      ae.value = "pull_preview";
    }
    async function Ce() {
      ae.value = "validating", Ve.value = null;
      try {
        const F = Array.from(me.value.values());
        ze.value = await h(B.value, F), ae.value = "validation_review";
      } catch (F) {
        Ve.value = F instanceof Error ? F.message : "Validation failed", ae.value = "resolving";
      }
    }
    async function Me() {
      ae.value = "executing";
      const F = B.value;
      try {
        const q = Array.from(me.value.values()), ve = await v(F, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: q
        });
        if (ve.rolled_back) {
          N.value = `Pull failed and was rolled back: ${ve.error || "Unknown error"}`, ae.value = "pull_preview";
          return;
        }
        Ue(), ae.value = "idle", o("toast", `✓ Pulled from ${F}`, "success"), await ie();
      } catch (q) {
        N.value = q instanceof Error ? q.message : "Pull failed", ae.value = "validation_review";
      }
    }
    function ke() {
      ae.value = "resolving";
    }
    function Ge() {
      Ue(), ae.value = "idle";
    }
    function Ue() {
      me.value.clear(), ze.value = null, Ve.value = null, N.value = null, G.value = null, B.value = null;
    }
    async function be(F) {
      B.value = F, se.value = !0, oe.value = !0, ce.value = null;
      try {
        ce.value = await p(F);
      } catch (q) {
        U.value = q instanceof Error ? q.message : "Failed to load push preview";
      } finally {
        oe.value = !1;
      }
    }
    function J() {
      se.value = !1, ce.value = null, B.value = null;
    }
    async function Be(F) {
      if (!B.value) return;
      Y.value = !0;
      const q = B.value;
      try {
        await _(q, F), J(), o("toast", `✓ Pushed to ${q}`, "success"), await ie();
      } catch (ve) {
        o("toast", ve instanceof Error ? ve.message : "Push failed", "error");
      } finally {
        Y.value = !1;
      }
    }
    function V() {
      const F = B.value;
      J(), F && Q(F);
    }
    return at(ie), (F, q) => (n(), i(H, null, [
      $(qt, null, {
        header: g(() => [
          $(Yt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: q[0] || (q[0] = (ve) => P.value = !0)
          }, {
            actions: g(() => [
              A.value ? y("", !0) : (n(), R(_e, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: le
              }, {
                default: g(() => [...q[3] || (q[3] = [
                  b(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          A.value ? y("", !0) : (n(), R(Fo, {
            key: 0,
            modelValue: I.value,
            "onUpdate:modelValue": q[1] || (q[1] = (ve) => I.value = ve),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: g(() => [
          S.value ? (n(), R(zs, {
            key: 0,
            message: "Loading remotes..."
          })) : U.value ? (n(), R(Vs, {
            key: 1,
            message: U.value,
            retry: !0,
            onRetry: ie
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            A.value ? (n(), R(g$, {
              key: 0,
              mode: j.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: te,
              onCancel: K
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            w.value.length && !A.value ? (n(), R(Cn, {
              key: 1,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + d(w.value.length) + " remote" + d(w.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (n(), i("span", E3, " • Tracking: " + d(x.value.remote) + "/" + d(x.value.branch), 1)) : y("", !0)
              ]),
              _: 1
            })) : y("", !0),
            L.value.length && !A.value ? (n(), R(_t, {
              key: 2,
              title: "REMOTES",
              count: L.value.length
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(L.value, (ve) => (n(), R(u$, {
                  key: ve.name,
                  remote: ve,
                  "sync-status": C.value[ve.name],
                  "fetching-remote": M.value,
                  onFetch: X,
                  onEdit: ne,
                  onRemove: de,
                  onPull: Q,
                  onPush: be
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !L.value.length && !A.value ? (n(), R(gs, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: g(() => [
                $(_e, {
                  variant: "primary",
                  onClick: le
                }, {
                  default: g(() => [...q[4] || (q[4] = [
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
      $(hs, {
        show: P.value,
        title: "About Git Remotes",
        onClose: q[2] || (q[2] = (ve) => P.value = !1)
      }, {
        content: g(() => [...q[5] || (q[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            b(" The "),
            t("strong", null, '"origin"'),
            b(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: g(() => [
          $(_e, {
            variant: "link",
            onClick: Le
          }, {
            default: g(() => [...q[6] || (q[6] = [
              b(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      $(nC, {
        show: ye.value,
        "remote-name": B.value || "",
        preview: G.value,
        loading: oe.value,
        pulling: ae.value === "executing",
        error: N.value,
        "conflict-resolutions": me.value,
        onClose: ge,
        onPull: Ee,
        onOpenConflictResolution: Se
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      $(TC, {
        show: se.value,
        "remote-name": B.value || "",
        preview: ce.value,
        loading: oe.value,
        pushing: Y.value,
        onClose: J,
        onPush: Be,
        onPullFirst: V
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      fe.value && W.value ? (n(), R(l3, {
        key: 0,
        "workflow-conflicts": W.value.workflow_conflicts,
        resolutions: me.value,
        "operation-type": "pull",
        validating: ae.value === "validating",
        error: Ve.value,
        onClose: Ne,
        onResolve: Ie,
        onApply: Ce
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      Oe.value && ze.value ? (n(), R(I3, {
        key: 1,
        validation: ze.value,
        "operation-type": "pull",
        executing: ae.value === "executing",
        onProceed: Me,
        onGoBack: ke,
        onCancel: Ge
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), P3 = /* @__PURE__ */ xe(T3, [["__scopeId", "data-v-9ae3b76d"]]), R3 = { class: "setting-info" }, M3 = { class: "setting-label" }, D3 = {
  key: 0,
  class: "required-marker"
}, L3 = {
  key: 0,
  class: "setting-description"
}, N3 = { class: "setting-control" }, U3 = /* @__PURE__ */ $e({
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
      t("div", R3, [
        t("div", M3, [
          b(d(e.label) + " ", 1),
          e.required ? (n(), i("span", D3, "*")) : y("", !0)
        ]),
        e.description ? (n(), i("div", L3, d(e.description), 1)) : y("", !0)
      ]),
      t("div", N3, [
        ot(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), Go = /* @__PURE__ */ xe(U3, [["__scopeId", "data-v-cb5d236c"]]), O3 = { class: "toggle" }, A3 = ["checked", "disabled"], z3 = /* @__PURE__ */ $e({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", O3, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, A3),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), pi = /* @__PURE__ */ xe(z3, [["__scopeId", "data-v-71c0f550"]]), V3 = { class: "workspace-settings-content" }, F3 = { class: "settings-section" }, B3 = { class: "path-setting" }, W3 = { class: "path-value" }, G3 = { class: "path-setting" }, j3 = { class: "path-value" }, H3 = { class: "settings-section" }, K3 = { class: "settings-section" }, q3 = { class: "settings-section" }, Y3 = /* @__PURE__ */ $e({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: u } = ct(), c = k(!1), m = k(null), f = k(null), v = k(null), p = k(null), _ = k(""), h = k(""), w = k(""), x = k(!1), C = k(!1), S = k(!1), U = k(!0);
    function I(le) {
      return le.join(" ");
    }
    function P(le) {
      return le.trim() ? le.trim().split(/\s+/) : [];
    }
    const M = O(() => {
      if (!p.value) return !1;
      const le = x.value, ne = C.value, te = w.value !== I(p.value.comfyui_extra_args || []);
      return le || ne || te;
    });
    async function A() {
      c.value = !0, m.value = null;
      try {
        v.value = await r(a.workspacePath || void 0), p.value = { ...v.value }, _.value = v.value.civitai_api_key || "", h.value = v.value.huggingface_token || "", w.value = I(v.value.comfyui_extra_args || []), x.value = !1, C.value = !1;
        const le = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        S.value = le !== "false", U.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
      } catch (le) {
        m.value = le instanceof Error ? le.message : "Failed to load settings";
      } finally {
        c.value = !1;
      }
    }
    async function j() {
      var le;
      f.value = null;
      try {
        const ne = {};
        x.value && (ne.civitai_api_key = _.value || null), C.value && (ne.huggingface_token = h.value || null), w.value !== I(((le = p.value) == null ? void 0 : le.comfyui_extra_args) || []) && (ne.comfyui_extra_args = P(w.value)), await u(ne, a.workspacePath || void 0), await A(), f.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          f.value = null;
        }, 3e3);
      } catch (ne) {
        const te = ne instanceof Error ? ne.message : "Failed to save settings";
        f.value = { type: "error", message: te }, l("error", te);
      }
    }
    function E() {
      p.value && (_.value = p.value.civitai_api_key || "", h.value = p.value.huggingface_token || "", w.value = I(p.value.comfyui_extra_args || []), x.value = !1, C.value = !1, f.value = null);
    }
    function L(le) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(le)), console.log("[ComfyGit] Auto-refresh setting saved:", le);
    }
    function ie(le) {
      le ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", le ? "enabled" : "disabled");
    }
    return s({
      saveSettings: j,
      resetSettings: E,
      hasChanges: M,
      loadSettings: A
    }), at(A), (le, ne) => (n(), i("div", V3, [
      c.value ? (n(), R(zs, {
        key: 0,
        message: "Loading workspace settings..."
      })) : m.value ? (n(), R(Vs, {
        key: 1,
        message: m.value,
        retry: !0,
        onRetry: A
      }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
        $(_t, { title: "WORKSPACE PATHS" }, {
          default: g(() => {
            var te, K;
            return [
              t("div", F3, [
                t("div", B3, [
                  ne[7] || (ne[7] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  ne[8] || (ne[8] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", W3, d(((te = v.value) == null ? void 0 : te.workspace_path) || "Loading..."), 1)
                ]),
                t("div", G3, [
                  ne[9] || (ne[9] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  ne[10] || (ne[10] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", j3, d(((K = v.value) == null ? void 0 : K.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        $(_t, { title: "API CREDENTIALS" }, {
          default: g(() => [
            t("div", H3, [
              $(Go, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: g(() => [
                  $(ln, {
                    modelValue: _.value,
                    "onUpdate:modelValue": ne[0] || (ne[0] = (te) => _.value = te),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: ne[1] || (ne[1] = (te) => x.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              $(Go, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: g(() => [
                  $(ln, {
                    modelValue: h.value,
                    "onUpdate:modelValue": ne[2] || (ne[2] = (te) => h.value = te),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: ne[3] || (ne[3] = (te) => C.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        $(_t, { title: "COMFYUI SETTINGS" }, {
          default: g(() => [
            t("div", K3, [
              $(Go, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: g(() => [
                  $(ln, {
                    modelValue: w.value,
                    "onUpdate:modelValue": ne[4] || (ne[4] = (te) => w.value = te),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              ne[11] || (ne[11] = t("div", { class: "setting-hint" }, [
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
        $(_t, { title: "UI SETTINGS" }, {
          default: g(() => [
            t("div", q3, [
              $(Go, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: g(() => [
                  $(pi, {
                    modelValue: S.value,
                    "onUpdate:modelValue": [
                      ne[5] || (ne[5] = (te) => S.value = te),
                      L
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              $(Go, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: g(() => [
                  $(pi, {
                    modelValue: U.value,
                    "onUpdate:modelValue": [
                      ne[6] || (ne[6] = (te) => U.value = te),
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
        f.value ? (n(), R(Cn, {
          key: 0,
          variant: (f.value.type === "success", "compact")
        }, {
          default: g(() => [
            t("span", {
              style: Ft({ color: f.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, d(f.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), qr = /* @__PURE__ */ xe(Y3, [["__scopeId", "data-v-9c5b427b"]]), J3 = /* @__PURE__ */ $e({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (n(), R(qt, null, {
      header: g(() => [
        $(Yt, { title: "WORKSPACE SETTINGS" }, {
          actions: g(() => {
            var r, u;
            return [
              $(_e, {
                variant: "primary",
                size: "sm",
                disabled: !((r = s.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (c) => {
                  var m;
                  return (m = s.value) == null ? void 0 : m.saveSettings();
                })
              }, {
                default: g(() => [...l[2] || (l[2] = [
                  b(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (u = s.value) != null && u.hasChanges ? (n(), R(_e, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (c) => {
                  var m;
                  return (m = s.value) == null ? void 0 : m.resetSettings();
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
        $(qr, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), Q3 = { class: "base-tabs" }, X3 = ["disabled", "onClick"], Z3 = {
  key: 0,
  class: "base-tabs__badge"
}, ex = /* @__PURE__ */ $e({
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
    return (r, u) => (n(), i("div", Q3, [
      (n(!0), i(H, null, we(e.tabs, (c) => (n(), i("button", {
        key: c.id,
        class: Pe([
          "base-tabs__tab",
          {
            active: e.modelValue === c.id,
            disabled: c.disabled
          }
        ]),
        disabled: c.disabled,
        onClick: (m) => l(c.id)
      }, [
        b(d(c.label) + " ", 1),
        c.badge ? (n(), i("span", Z3, d(c.badge), 1)) : y("", !0)
      ], 10, X3))), 128))
    ]));
  }
}), Yr = /* @__PURE__ */ xe(ex, [["__scopeId", "data-v-ad5e6cad"]]), tx = { class: "log-viewer-wrapper" }, sx = ["disabled", "title"], ox = /* @__PURE__ */ $e({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = k(null), a = k("idle"), l = O(() => s.logs.map((f) => ({
      text: s.rawFormat || !f.timestamp ? f.message : `${f.timestamp} - ${f.name} - ${f.level} - ${f.func}:${f.line} - ${f.message}`,
      level: f.level
    })));
    async function r() {
      var v;
      await Mt();
      const f = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      f && (f.scrollTop = f.scrollHeight);
    }
    at(r), St(() => s.logs, r);
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
    return (f, v) => (n(), i("div", tx, [
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
        }, d(a.value === "copied" ? "Copied!" : "Copy"), 9, sx),
        (n(!0), i(H, null, we(l.value, (p, _) => (n(), i("div", {
          key: _,
          class: Pe(`log-line log-level-${p.level.toLowerCase()}`)
        }, d(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), Jr = /* @__PURE__ */ xe(ox, [["__scopeId", "data-v-c0cc6d21"]]), nx = /* @__PURE__ */ $e({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = ct(), u = k("workspace"), c = k([]), m = k(!1), f = k(null), v = k(!1), p = k(null), _ = k(null), h = k(!1), w = O(() => u.value === "workspace" ? p.value : _.value);
    async function x() {
      m.value = !0, f.value = null;
      try {
        u.value === "workspace" ? c.value = await s(void 0, 500) : c.value = await a(void 0, 500);
      } catch (U) {
        f.value = U instanceof Error ? U.message : `Failed to load ${u.value} logs`;
      } finally {
        m.value = !1;
      }
    }
    async function C() {
      try {
        const [U, I] = await Promise.all([
          o(),
          l()
        ]);
        U.exists && (p.value = U.path), I.exists && (_.value = I.path);
      } catch {
      }
    }
    async function S() {
      if (w.value) {
        h.value = !0;
        try {
          await r(w.value);
        } catch (U) {
          console.error("Failed to open log file:", U);
        } finally {
          h.value = !1;
        }
      }
    }
    return St(u, () => {
      x();
    }), at(() => {
      x(), C();
    }), (U, I) => (n(), i(H, null, [
      $(qt, null, {
        header: g(() => [
          $(Yt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: I[0] || (I[0] = (P) => v.value = !0)
          }, {
            actions: g(() => [
              $(_e, {
                variant: "secondary",
                size: "sm",
                onClick: S,
                disabled: !w.value || h.value,
                title: "Open log file in default editor"
              }, {
                default: g(() => [
                  b(d(h.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              $(_e, {
                variant: "secondary",
                size: "sm",
                onClick: x,
                disabled: m.value
              }, {
                default: g(() => [
                  b(d(m.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          $(Yr, {
            modelValue: u.value,
            "onUpdate:modelValue": I[1] || (I[1] = (P) => u.value = P),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value ? (n(), R(zs, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : f.value ? (n(), R(Vs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            c.value.length === 0 ? (n(), R(gs, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (n(), R(Jr, {
              key: 1,
              logs: c.value,
              "raw-format": u.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      $(hs, {
        show: v.value,
        title: "About Logs",
        onClose: I[3] || (I[3] = (P) => v.value = !1)
      }, {
        content: g(() => [...I[4] || (I[4] = [
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
        actions: g(() => [
          $(_e, {
            variant: "primary",
            onClick: I[2] || (I[2] = (P) => v.value = !1)
          }, {
            default: g(() => [...I[5] || (I[5] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ax = /* @__PURE__ */ $e({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: a, openFile: l } = ct(), r = k([]), u = k(!1), c = k(null), m = k(!1), f = k("production"), v = k(null), p = k(!1);
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
    }), (x, C) => (n(), i(H, null, [
      $(qt, null, {
        header: g(() => [
          $(Yt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: C[0] || (C[0] = (S) => m.value = !0)
          }, {
            actions: g(() => [
              $(_e, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: !v.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: g(() => [
                  b(d(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              $(_e, {
                variant: "secondary",
                size: "sm",
                onClick: _,
                disabled: u.value
              }, {
                default: g(() => [
                  b(d(u.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: g(() => [
          u.value ? (n(), R(zs, {
            key: 0,
            message: "Loading environment logs..."
          })) : c.value ? (n(), R(Vs, {
            key: 1,
            message: c.value,
            retry: !0,
            onRetry: _
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            r.value.length === 0 ? (n(), R(gs, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (n(), R(Jr, {
              key: 1,
              logs: r.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      $(hs, {
        show: m.value,
        title: "About Environment Logs",
        onClose: C[2] || (C[2] = (S) => m.value = !1)
      }, {
        content: g(() => [
          t("p", null, [
            C[3] || (C[3] = b(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, d(f.value), 1),
            C[4] || (C[4] = b(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          C[5] || (C[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
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
        actions: g(() => [
          $(_e, {
            variant: "primary",
            onClick: C[1] || (C[1] = (S) => m.value = !1)
          }, {
            default: g(() => [...C[6] || (C[6] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), lx = { class: "env-title" }, ix = {
  key: 0,
  class: "current-badge"
}, rx = {
  key: 0,
  class: "branch-info"
}, ux = /* @__PURE__ */ $e({
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
    return (s, o) => (n(), R(Nt, {
      status: e.isCurrent ? "synced" : void 0
    }, vo({
      icon: g(() => [
        b(d(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: g(() => [
        t("div", lx, [
          t("span", null, d(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (n(), i("span", ix, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: g(() => [
        e.currentBranch ? (n(), i("span", rx, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          b(" " + d(e.currentBranch), 1)
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
          $($t, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          $($t, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          $($t, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (n(), R($t, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), cx = /* @__PURE__ */ xe(ux, [["__scopeId", "data-v-9231917a"]]), dx = { class: "env-details" }, mx = { class: "status-row" }, fx = {
  key: 0,
  class: "detail-row"
}, vx = { class: "value mono" }, px = {
  key: 1,
  class: "detail-row"
}, gx = { class: "value mono small" }, hx = { class: "collapsible-section" }, yx = { class: "value" }, wx = {
  key: 0,
  class: "collapsible-body"
}, _x = { class: "item-list" }, kx = { class: "item-name" }, bx = { class: "item-name" }, $x = { class: "item-name" }, Cx = { class: "item-name" }, xx = {
  key: 0,
  class: "empty-list"
}, Sx = { class: "collapsible-section" }, Ix = { class: "value" }, Ex = {
  key: 0,
  class: "collapsible-body"
}, Tx = { class: "item-list" }, Px = { class: "item-name" }, Rx = {
  key: 0,
  class: "item-meta"
}, Mx = {
  key: 0,
  class: "empty-list"
}, Dx = { class: "collapsible-section" }, Lx = { class: "value" }, Nx = {
  key: 0,
  class: "missing-count"
}, Ux = {
  key: 0,
  class: "collapsible-body"
}, Ox = { class: "item-list" }, Ax = { class: "model-row" }, zx = { class: "item-name" }, Vx = { class: "model-meta" }, Fx = { class: "item-meta" }, Bx = {
  key: 0,
  class: "item-meta"
}, Wx = {
  key: 0,
  class: "empty-list"
}, Gx = {
  key: 2,
  class: "section-divider"
}, jx = {
  key: 3,
  class: "detail-row"
}, Hx = { class: "value" }, Kx = { class: "footer-actions" }, qx = /* @__PURE__ */ $e({
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
    const u = O(() => {
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
    return (m, f) => (n(), R(Ct, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: f[5] || (f[5] = (v) => a("close"))
    }, {
      body: g(() => {
        var v, p, _, h, w, x, C, S, U, I, P, M, A, j;
        return [
          t("div", dx, [
            t("div", mx, [
              f[6] || (f[6] = t("span", { class: "label" }, "Status:", -1)),
              t("span", {
                class: Pe(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, d(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (n(), i("div", fx, [
              f[7] || (f[7] = t("span", { class: "label" }, "Branch:", -1)),
              t("span", vx, d(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (n(), i("div", px, [
              f[8] || (f[8] = t("span", { class: "label" }, "Path:", -1)),
              t("span", gx, d(e.environment.path), 1)
            ])) : y("", !0),
            f[17] || (f[17] = t("div", { class: "section-divider" }, null, -1)),
            t("div", hx, [
              t("div", {
                class: "collapsible-header",
                onClick: f[0] || (f[0] = (E) => r("workflows"))
              }, [
                f[9] || (f[9] = t("span", { class: "label" }, "Workflows:", -1)),
                t("span", yx, d(((v = e.detail) == null ? void 0 : v.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (n(), i("span", {
                  key: 0,
                  class: Pe(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (_ = e.detail) != null && _.workflows && l.value.has("workflows") ? (n(), i("div", wx, [
                t("div", _x, [
                  (n(!0), i(H, null, we(e.detail.workflows.synced, (E) => (n(), i("div", {
                    key: "synced-" + E,
                    class: "list-item"
                  }, [
                    t("span", kx, d(E), 1),
                    f[10] || (f[10] = t("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, we(e.detail.workflows.new, (E) => (n(), i("div", {
                    key: "new-" + E,
                    class: "list-item"
                  }, [
                    t("span", bx, d(E), 1),
                    f[11] || (f[11] = t("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, we(e.detail.workflows.modified, (E) => (n(), i("div", {
                    key: "mod-" + E,
                    class: "list-item"
                  }, [
                    t("span", $x, d(E), 1),
                    f[12] || (f[12] = t("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(H, null, we(e.detail.workflows.deleted, (E) => (n(), i("div", {
                    key: "del-" + E,
                    class: "list-item"
                  }, [
                    t("span", Cx, d(E), 1),
                    f[13] || (f[13] = t("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  u.value ? (n(), i("div", xx, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            t("div", Sx, [
              t("div", {
                class: "collapsible-header",
                onClick: f[1] || (f[1] = (E) => r("nodes"))
              }, [
                f[14] || (f[14] = t("span", { class: "label" }, "Nodes:", -1)),
                t("span", Ix, d(((h = e.detail) == null ? void 0 : h.node_count) ?? e.environment.node_count), 1),
                (w = e.detail) != null && w.nodes ? (n(), i("span", {
                  key: 0,
                  class: Pe(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (x = e.detail) != null && x.nodes && l.value.has("nodes") ? (n(), i("div", Ex, [
                t("div", Tx, [
                  (n(!0), i(H, null, we(e.detail.nodes, (E) => (n(), i("div", {
                    key: E.name,
                    class: "list-item"
                  }, [
                    t("span", Px, d(E.name), 1),
                    E.version ? (n(), i("span", Rx, d(E.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (n(), i("div", Mx, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            t("div", Dx, [
              t("div", {
                class: "collapsible-header",
                onClick: f[2] || (f[2] = (E) => r("models"))
              }, [
                f[15] || (f[15] = t("span", { class: "label" }, "Models:", -1)),
                t("span", Lx, [
                  b(d(((C = e.detail) == null ? void 0 : C.model_count) ?? e.environment.model_count) + " ", 1),
                  (U = (S = e.detail) == null ? void 0 : S.models) != null && U.missing.length ? (n(), i("span", Nx, "(" + d(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (I = e.detail) != null && I.models ? (n(), i("span", {
                  key: 0,
                  class: Pe(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (P = e.detail) != null && P.models && l.value.has("models") ? (n(), i("div", Ux, [
                t("div", Ox, [
                  (n(!0), i(H, null, we(e.detail.models.missing, (E) => (n(), i("div", {
                    key: E.filename,
                    class: "list-item model-item"
                  }, [
                    t("div", Ax, [
                      t("span", zx, d(E.filename), 1),
                      t("span", {
                        class: Pe(["criticality-badge", E.criticality])
                      }, d(E.criticality), 3)
                    ]),
                    t("div", Vx, [
                      t("span", Fx, d(E.category), 1),
                      E.workflow_names.length ? (n(), i("span", Bx, " used by: " + d(E.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (n(), i("div", Wx, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (M = e.detail) != null && M.created_at || e.environment.created_at ? (n(), i("div", Gx)) : y("", !0),
            (A = e.detail) != null && A.created_at || e.environment.created_at ? (n(), i("div", jx, [
              f[16] || (f[16] = t("span", { class: "label" }, "Created:", -1)),
              t("span", Hx, d(c(((j = e.detail) == null ? void 0 : j.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: g(() => [
        t("div", Kx, [
          e.canDelete ? (n(), R(Re, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: f[3] || (f[3] = (v) => a("delete", e.environment.name))
          }, {
            default: g(() => [...f[18] || (f[18] = [
              b(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          f[20] || (f[20] = t("div", { class: "footer-spacer" }, null, -1)),
          $(Re, {
            variant: "secondary",
            size: "sm",
            onClick: f[4] || (f[4] = (v) => a("close"))
          }, {
            default: g(() => [...f[19] || (f[19] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Yx = /* @__PURE__ */ xe(qx, [["__scopeId", "data-v-92e68b76"]]), Qr = [
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
], Zr = "auto", Jx = { class: "progress-bar" }, Qx = /* @__PURE__ */ $e({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = O(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (a, l) => (n(), i("div", Jx, [
      t("div", {
        class: Pe(["progress-fill", e.variant]),
        style: Ft({ width: o.value })
      }, null, 6)
    ]));
  }
}), ga = /* @__PURE__ */ xe(Qx, [["__scopeId", "data-v-1beb0512"]]), Xx = { class: "task-progress" }, Zx = { class: "progress-info" }, e8 = { class: "progress-percentage" }, t8 = { class: "progress-message" }, s8 = {
  key: 0,
  class: "progress-steps"
}, o8 = { class: "step-icon" }, n8 = { class: "step-label" }, a8 = /* @__PURE__ */ $e({
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
    return (l, r) => (n(), i("div", Xx, [
      $(ga, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", Zx, [
        t("span", e8, d(e.progress) + "%", 1),
        t("span", t8, d(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (n(), i("div", s8, [
        (n(!0), i(H, null, we(e.steps, (u) => (n(), i("div", {
          key: u.id,
          class: Pe(["step", o(u.id)])
        }, [
          t("span", o8, d(a(u.id)), 1),
          t("span", n8, d(u.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), ea = /* @__PURE__ */ xe(a8, [["__scopeId", "data-v-9d1de66c"]]), l8 = {
  key: 0,
  class: "create-env-form"
}, i8 = { class: "form-field" }, r8 = { class: "input-wrapper" }, u8 = {
  key: 0,
  class: "validating-indicator"
}, c8 = {
  key: 1,
  class: "valid-indicator"
}, d8 = {
  key: 0,
  class: "field-error"
}, m8 = { class: "form-field" }, f8 = ["value"], v8 = { class: "form-field" }, p8 = ["disabled"], g8 = ["value"], h8 = { class: "form-field" }, y8 = ["value"], w8 = { class: "form-field form-field--checkbox" }, _8 = { class: "form-checkbox" }, k8 = {
  key: 1,
  class: "create-env-progress"
}, b8 = { class: "creating-intro" }, $8 = {
  key: 0,
  class: "progress-warning"
}, C8 = {
  key: 1,
  class: "create-error"
}, x8 = { class: "error-message" }, S8 = {
  key: 1,
  class: "footer-status"
}, I8 = 10, E8 = /* @__PURE__ */ $e({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: u } = ct(), c = k(""), m = k(Xr), f = k("latest"), v = k(Zr), p = k(!1), _ = k(null), h = k(!1), w = k(!1);
    let x = null, C = 0;
    const S = O(() => !!c.value.trim() && w.value && !_.value && !h.value && !P.value), U = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), I = k(!1), P = k(!1), M = k({
      progress: 0,
      message: ""
    });
    let A = null, j = 0;
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
    ], L = k(null);
    St(c, (ae) => {
      w.value = !1, x && (clearTimeout(x), x = null);
      const ye = ae.trim();
      if (!ye) {
        _.value = null, h.value = !1;
        return;
      }
      h.value = !0, x = setTimeout(() => {
        ie(ye);
      }, 400);
    });
    async function ie(ae, ye = !1) {
      const fe = ae.trim();
      if (!fe)
        return w.value = !1, h.value = !1, _.value = ye ? "Environment name is required" : null, !1;
      const Oe = ++C;
      h.value = !0;
      try {
        const se = await u(fe);
        return Oe !== C ? !1 : (_.value = se.valid ? null : se.error || "Invalid name", w.value = !!se.valid, !!se.valid);
      } catch {
        return Oe !== C || (_.value = "Failed to validate name", w.value = !1), !1;
      } finally {
        Oe === C && (h.value = !1);
      }
    }
    async function le() {
      x && (clearTimeout(x), x = null), await ie(c.value, !0);
    }
    function ne() {
      P.value || o("close");
    }
    async function te() {
      const ae = c.value.trim();
      if (!ae) {
        _.value = "Environment name is required";
        return;
      }
      if (x && (clearTimeout(x), x = null), !!await ie(ae, !0)) {
        P.value = !0, M.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const fe = {
            name: ae,
            python_version: m.value,
            comfyui_version: f.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, Oe = await l(fe);
          Oe.status === "started" ? K() : Oe.status === "error" && (M.value = {
            progress: 0,
            message: Oe.message || "Failed to start creation",
            error: Oe.message
          });
        } catch (fe) {
          M.value = {
            progress: 0,
            message: fe instanceof Error ? fe.message : "Unknown error",
            error: fe instanceof Error ? fe.message : "Unknown error"
          };
        }
      }
    }
    function K() {
      A || (j = 0, A = window.setInterval(async () => {
        try {
          const ae = await r();
          j = 0, M.value = {
            progress: ae.progress ?? 0,
            message: ae.message,
            phase: ae.phase,
            error: ae.error
          }, ae.state === "complete" ? (X(), o("created", ae.environment_name || c.value.trim(), p.value)) : ae.state === "error" ? (X(), M.value.error = ae.error || ae.message) : ae.state === "idle" && P.value && (X(), M.value.error = "Creation was interrupted. Please try again.");
        } catch {
          j++, j >= I8 && (X(), M.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function X() {
      A && (clearInterval(A), A = null);
    }
    function de() {
      P.value = !1, M.value = { progress: 0, message: "" }, o("close");
    }
    async function Le() {
      I.value = !0;
      try {
        U.value = await a();
      } catch (ae) {
        console.error("Failed to load ComfyUI releases:", ae);
      } finally {
        I.value = !1;
      }
    }
    return at(async () => {
      var ae;
      await Mt(), (ae = L.value) == null || ae.focus(), Le();
    }), Zs(() => {
      X(), x && (clearTimeout(x), x = null);
    }), (ae, ye) => (n(), R(Ct, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !P.value,
      onClose: ne
    }, {
      body: g(() => [
        P.value ? (n(), i("div", k8, [
          t("p", b8, [
            ye[12] || (ye[12] = b(" Creating environment ", -1)),
            t("strong", null, d(c.value), 1),
            ye[13] || (ye[13] = b("... ", -1))
          ]),
          $(ea, {
            progress: M.value.progress,
            message: M.value.message,
            "current-phase": M.value.phase,
            variant: M.value.error ? "error" : "default",
            "show-steps": !0,
            steps: E
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          M.value.error ? y("", !0) : (n(), i("p", $8, " This may take several minutes. Please wait... ")),
          M.value.error ? (n(), i("div", C8, [
            t("p", x8, d(M.value.error), 1)
          ])) : y("", !0)
        ])) : (n(), i("div", l8, [
          t("div", i8, [
            ye[6] || (ye[6] = t("label", { class: "form-label" }, "Name", -1)),
            t("div", r8, [
              nt(t("input", {
                ref_key: "nameInput",
                ref: L,
                "onUpdate:modelValue": ye[0] || (ye[0] = (fe) => c.value = fe),
                type: "text",
                class: Pe(["form-input", { error: !!_.value, valid: w.value }]),
                placeholder: "my-environment",
                onKeyup: as(te, ["enter"]),
                onBlur: le
              }, null, 34), [
                [ts, c.value]
              ]),
              h.value ? (n(), i("span", u8, "...")) : w.value ? (n(), i("span", c8, "✓")) : y("", !0)
            ]),
            _.value ? (n(), i("div", d8, d(_.value), 1)) : y("", !0),
            ye[7] || (ye[7] = t("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          t("div", m8, [
            ye[8] || (ye[8] = t("label", { class: "form-label" }, "Python Version", -1)),
            nt(t("select", {
              "onUpdate:modelValue": ye[1] || (ye[1] = (fe) => m.value = fe),
              class: "form-select"
            }, [
              (n(!0), i(H, null, we(Ze(Qr), (fe) => (n(), i("option", {
                key: fe,
                value: fe
              }, d(fe), 9, f8))), 128))
            ], 512), [
              [Ss, m.value]
            ])
          ]),
          t("div", v8, [
            ye[9] || (ye[9] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            nt(t("select", {
              "onUpdate:modelValue": ye[2] || (ye[2] = (fe) => f.value = fe),
              class: "form-select",
              disabled: I.value
            }, [
              (n(!0), i(H, null, we(U.value, (fe) => (n(), i("option", {
                key: fe.tag_name,
                value: fe.tag_name
              }, d(fe.name), 9, g8))), 128))
            ], 8, p8), [
              [Ss, f.value]
            ])
          ]),
          t("div", h8, [
            ye[10] || (ye[10] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            nt(t("select", {
              "onUpdate:modelValue": ye[3] || (ye[3] = (fe) => v.value = fe),
              class: "form-select"
            }, [
              (n(!0), i(H, null, we(Ze(kl), (fe) => (n(), i("option", {
                key: fe,
                value: fe
              }, d(fe) + d(fe === "auto" ? " (detect GPU)" : ""), 9, y8))), 128))
            ], 512), [
              [Ss, v.value]
            ])
          ]),
          t("div", w8, [
            t("label", _8, [
              nt(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": ye[4] || (ye[4] = (fe) => p.value = fe)
              }, null, 512), [
                [yn, p.value]
              ]),
              ye[11] || (ye[11] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: g(() => [
        P.value ? (n(), i(H, { key: 1 }, [
          M.value.error ? (n(), R(Re, {
            key: 0,
            variant: "secondary",
            onClick: de
          }, {
            default: g(() => [...ye[16] || (ye[16] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", S8, " Creating environment... "))
        ], 64)) : (n(), i(H, { key: 0 }, [
          $(Re, {
            variant: "primary",
            disabled: !S.value,
            onClick: te
          }, {
            default: g(() => [...ye[14] || (ye[14] = [
              b(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          $(Re, {
            variant: "secondary",
            onClick: ye[5] || (ye[5] = (fe) => o("close"))
          }, {
            default: g(() => [...ye[15] || (ye[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), T8 = /* @__PURE__ */ xe(E8, [["__scopeId", "data-v-3faa3d9b"]]), P8 = /* @__PURE__ */ $e({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = ct(), u = k([]), c = k(!1), m = k(null), f = k(""), v = k(!1), p = k(!1), _ = k(null), h = k(null), w = O(() => {
      if (!f.value.trim()) return u.value;
      const P = f.value.toLowerCase();
      return u.value.filter(
        (M) => {
          var A;
          return M.name.toLowerCase().includes(P) || ((A = M.current_branch) == null ? void 0 : A.toLowerCase().includes(P));
        }
      );
    });
    function x(P, M) {
      p.value = !1, a("created", P, M);
    }
    function C() {
      p.value = !0;
    }
    async function S(P) {
      _.value = P, h.value = null;
      const M = await r(P.name);
      M && (h.value = M);
    }
    function U(P) {
      _.value = null, h.value = null, a("delete", P);
    }
    async function I() {
      c.value = !0, m.value = null;
      try {
        u.value = await l();
      } catch (P) {
        m.value = P instanceof Error ? P.message : "Failed to load environments";
      } finally {
        c.value = !1;
      }
    }
    return at(I), s({
      loadEnvironments: I,
      openCreateModal: C
    }), (P, M) => (n(), i(H, null, [
      $(qt, null, {
        header: g(() => [
          $(Yt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (A) => v.value = !0)
          }, {
            actions: g(() => [
              $(_e, {
                variant: "primary",
                size: "sm",
                onClick: C
              }, {
                default: g(() => [...M[6] || (M[6] = [
                  b(" Create ", -1)
                ])]),
                _: 1
              }),
              $(_e, {
                variant: "secondary",
                size: "sm",
                onClick: I
              }, {
                default: g(() => [...M[7] || (M[7] = [
                  b(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          $(Fo, {
            modelValue: f.value,
            "onUpdate:modelValue": M[1] || (M[1] = (A) => f.value = A),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          c.value ? (n(), R(zs, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (n(), R(Vs, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: I
          }, null, 8, ["message"])) : (n(), i(H, { key: 2 }, [
            w.value.length ? (n(), R(_t, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: g(() => [
                (n(!0), i(H, null, we(w.value, (A) => (n(), R(cx, {
                  key: A.name,
                  "environment-name": A.name,
                  "is-current": A.is_current,
                  "current-branch": A.current_branch,
                  "show-last-used": !1
                }, {
                  actions: g(() => [
                    A.is_current ? y("", !0) : (n(), R(_e, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (j) => P.$emit("switch", A.name)
                    }, {
                      default: g(() => [...M[8] || (M[8] = [
                        b(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    $(_e, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (j) => S(A)
                    }, {
                      default: g(() => [...M[9] || (M[9] = [
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
            w.value.length ? y("", !0) : (n(), R(gs, {
              key: 1,
              icon: "🌍",
              message: f.value ? `No environments match '${f.value}'` : "No environments found. Create one to get started!"
            }, vo({ _: 2 }, [
              f.value ? void 0 : {
                name: "actions",
                fn: g(() => [
                  $(_e, {
                    variant: "primary",
                    onClick: C
                  }, {
                    default: g(() => [...M[10] || (M[10] = [
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
      $(hs, {
        show: v.value,
        title: "About Environments",
        onClose: M[3] || (M[3] = (A) => v.value = !1)
      }, {
        content: g(() => [...M[11] || (M[11] = [
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
        actions: g(() => [
          $(_e, {
            variant: "secondary",
            onClick: M[2] || (M[2] = (A) => v.value = !1)
          }, {
            default: g(() => [...M[12] || (M[12] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      _.value ? (n(), R(Yx, {
        key: 0,
        environment: _.value,
        detail: h.value,
        "can-delete": u.value.length > 1,
        onClose: M[4] || (M[4] = (A) => {
          _.value = null, h.value = null;
        }),
        onDelete: U
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      p.value ? (n(), R(T8, {
        key: 1,
        onClose: M[5] || (M[5] = (A) => p.value = !1),
        onCreated: x
      })) : y("", !0)
    ], 64));
  }
}), R8 = /* @__PURE__ */ xe(P8, [["__scopeId", "data-v-0c0fbd88"]]), M8 = { class: "file-path" }, D8 = { class: "file-path-text" }, L8 = ["title"], N8 = /* @__PURE__ */ $e({
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
    return (l, r) => (n(), i("div", M8, [
      r[0] || (r[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", D8, d(e.path), 1),
      e.copyable ? (n(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: a
      }, d(o.value ? "✓" : "📋"), 9, L8)) : y("", !0)
    ]));
  }
}), U8 = /* @__PURE__ */ xe(N8, [["__scopeId", "data-v-f0982173"]]), O8 = ["checked", "disabled"], A8 = { class: "base-checkbox-box" }, z8 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, V8 = {
  key: 0,
  class: "base-checkbox-label"
}, F8 = /* @__PURE__ */ $e({
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
      }, null, 40, O8),
      t("span", A8, [
        e.modelValue ? (n(), i("svg", z8, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (n(), i("span", V8, [
        ot(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), ta = /* @__PURE__ */ xe(F8, [["__scopeId", "data-v-bf17c831"]]), B8 = { class: "export-blocked" }, W8 = { class: "error-header" }, G8 = { class: "error-summary" }, j8 = { class: "error-description" }, H8 = { class: "issues-list" }, K8 = { class: "issue-message" }, q8 = {
  key: 0,
  class: "issue-details"
}, Y8 = ["onClick"], J8 = { class: "issue-fix" }, Q8 = {
  key: 0,
  class: "commit-section"
}, X8 = {
  key: 0,
  class: "issues-warning"
}, Z8 = {
  key: 1,
  class: "commit-error"
}, e5 = /* @__PURE__ */ $e({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = ct(), r = k(""), u = k(!1), c = k(!1), m = k(""), f = Xs({}), v = O(
      () => o.issues.some((C) => C.type === "uncommitted_workflows" || C.type === "uncommitted_git_changes")
    ), p = O(
      () => o.issues.some((C) => C.type === "unresolved_issues")
    ), _ = O(
      () => p.value && !c.value
    ), h = O(
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
            const U = ((C = S.issues) == null ? void 0 : C.map((I) => `${I.name}: ${I.issue}`).join("; ")) || "Unknown issues";
            m.value = `Commit blocked: ${U}`;
          } else
            m.value = S.message || "Commit failed";
        } catch (S) {
          m.value = S instanceof Error ? S.message : "Commit failed";
        } finally {
          u.value = !1;
        }
      }
    }
    return (C, S) => (n(), R(Ct, {
      title: v.value ? "Commit & Export" : "Cannot Export",
      size: "md",
      onClose: S[4] || (S[4] = (U) => C.$emit("close"))
    }, {
      body: g(() => [
        t("div", B8, [
          t("div", W8, [
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
            t("div", G8, [
              S[5] || (S[5] = t("h3", { class: "error-title" }, "Export blocked", -1)),
              t("p", j8, d(v.value ? "Commit your changes to proceed with export." : "The following issues must be resolved before exporting."), 1)
            ])
          ]),
          t("div", H8, [
            (n(!0), i(H, null, we(e.issues, (U, I) => (n(), i("div", {
              key: I,
              class: "issue-item"
            }, [
              t("div", K8, d(U.message), 1),
              U.details.length ? (n(), i("div", q8, [
                (n(!0), i(H, null, we(w(I), (P, M) => (n(), i("div", {
                  key: M,
                  class: "issue-detail"
                }, d(P), 1))), 128)),
                U.details.length > 3 && !f[I] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (P) => f[I] = !0
                }, " +" + d(U.details.length - 3) + " more ", 9, Y8)) : y("", !0)
              ])) : y("", !0),
              t("div", J8, [
                U.type === "uncommitted_workflows" ? (n(), i(H, { key: 0 }, [
                  b(" Commit your workflow changes before exporting. ")
                ], 64)) : U.type === "uncommitted_git_changes" ? (n(), i(H, { key: 1 }, [
                  b(" Commit your changes before exporting. ")
                ], 64)) : U.type === "unresolved_issues" ? (n(), i(H, { key: 2 }, [
                  b(" Resolve all workflow issues before exporting. ")
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          v.value ? (n(), i("div", Q8, [
            p.value ? (n(), i("div", X8, [
              S[8] || (S[8] = t("div", { class: "warning-header" }, [
                t("span", { class: "warning-icon-badge" }, "!"),
                t("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              $(ta, {
                modelValue: c.value,
                "onUpdate:modelValue": S[0] || (S[0] = (U) => c.value = U),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...S[7] || (S[7] = [
                  b(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            $(qs, {
              modelValue: r.value,
              "onUpdate:modelValue": S[1] || (S[1] = (U) => r.value = U),
              placeholder: "Describe your changes...",
              disabled: u.value || _.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: x,
              onCtrlEnter: x
            }, null, 8, ["modelValue", "disabled"]),
            m.value ? (n(), i("div", Z8, d(m.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        v.value ? (n(), i(H, { key: 0 }, [
          $(Re, {
            variant: "secondary",
            onClick: S[2] || (S[2] = (U) => C.$emit("close"))
          }, {
            default: g(() => [...S[9] || (S[9] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          $(Re, {
            variant: c.value ? "danger" : "primary",
            disabled: !h.value,
            loading: u.value,
            onClick: x
          }, {
            default: g(() => [
              b(d(u.value ? "Committing..." : c.value ? "Force Commit & Export" : "Commit & Export"), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (n(), R(Re, {
          key: 1,
          variant: "primary",
          onClick: S[3] || (S[3] = (U) => C.$emit("close"))
        }, {
          default: g(() => [...S[10] || (S[10] = [
            b(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), eu = /* @__PURE__ */ xe(e5, [["__scopeId", "data-v-bd79ba24"]]), t5 = { class: "export-warnings" }, s5 = {
  key: 0,
  class: "success-header"
}, o5 = { class: "warning-header" }, n5 = { class: "warning-summary" }, a5 = { class: "warning-title" }, l5 = { class: "models-section" }, i5 = { class: "models-list" }, r5 = { class: "model-info" }, u5 = { class: "model-filename" }, c5 = { class: "model-workflows" }, d5 = ["onClick"], m5 = /* @__PURE__ */ $e({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = k(!1), r = k(null), u = O(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function c() {
      r.value = null, a("revalidate");
    }
    return (m, f) => (n(), i(H, null, [
      $(Ct, {
        title: "Export Warnings",
        size: "md",
        onClose: f[3] || (f[3] = (v) => m.$emit("cancel"))
      }, {
        body: g(() => [
          t("div", t5, [
            e.models.length === 0 ? (n(), i("div", s5, [...f[4] || (f[4] = [
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
              t("div", o5, [
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
                t("div", n5, [
                  t("h3", a5, d(e.models.length) + " model" + d(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  f[5] || (f[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", l5, [
                t("div", i5, [
                  (n(!0), i(H, null, we(u.value, (v) => (n(), i("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", r5, [
                      t("div", u5, d(v.filename), 1),
                      t("div", c5, " Used by: " + d(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (p) => r.value = v.hash
                    }, " Add Source ", 8, d5)
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
          $(Re, {
            variant: "secondary",
            onClick: f[1] || (f[1] = (v) => m.$emit("cancel"))
          }, {
            default: g(() => [...f[7] || (f[7] = [
              b(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          $(Re, {
            variant: "primary",
            onClick: f[2] || (f[2] = (v) => m.$emit("confirm"))
          }, {
            default: g(() => [
              b(d(e.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      r.value ? (n(), R(wl, {
        key: 0,
        identifier: r.value,
        onClose: c
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), tu = /* @__PURE__ */ xe(m5, [["__scopeId", "data-v-b698d882"]]), f5 = { class: "export-card" }, v5 = { class: "export-path-row" }, p5 = { class: "export-actions" }, g5 = {
  key: 1,
  class: "export-warning"
}, h5 = /* @__PURE__ */ $e({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = ct(), a = k(""), l = k(!1), r = k(!1), u = k(!1), c = k(null), m = k(!1), f = k(null), v = k(!1), p = k(!1), _ = O(() => l.value ? "Validating..." : r.value ? "Exporting..." : "Export Environment");
    async function h() {
      l.value = !0, c.value = null;
      try {
        const P = await s();
        f.value = P, P.can_export ? P.warnings.models_without_sources.length > 0 ? p.value = !0 : await S() : v.value = !0;
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
      p.value = !1, await S();
    }
    async function x() {
      v.value = !1, l.value = !0;
      try {
        const P = await s();
        f.value = P, P.can_export ? P.warnings.models_without_sources.length > 0 ? p.value = !0 : await S() : v.value = !0;
      } catch (P) {
        c.value = {
          status: "error",
          message: P instanceof Error ? P.message : "Re-validation failed"
        };
      } finally {
        l.value = !1;
      }
    }
    async function C() {
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
    async function U() {
      var P;
      if ((P = c.value) != null && P.path)
        try {
          await navigator.clipboard.writeText(c.value.path);
        } catch (M) {
          console.error("Failed to copy path:", M);
        }
    }
    async function I() {
      var P;
      if ((P = c.value) != null && P.path) {
        u.value = !0;
        try {
          const M = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(c.value.path)}`);
          if (!M.ok)
            throw new Error(`Download failed: ${M.statusText}`);
          const A = await M.blob(), j = URL.createObjectURL(A), E = c.value.path.split("/").pop() || "environment-export.tar.gz", L = document.createElement("a");
          L.href = j, L.download = E, document.body.appendChild(L), L.click(), document.body.removeChild(L), URL.revokeObjectURL(j);
        } catch (M) {
          console.error("Failed to download:", M), alert(`Download failed: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          u.value = !1;
        }
      }
    }
    return (P, M) => (n(), i(H, null, [
      $(qt, null, {
        header: g(() => [
          $(Yt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (A) => m.value = !0)
          })
        ]),
        content: g(() => [
          $(_t, { title: "EXPORT OPTIONS" }, {
            default: g(() => [
              t("div", f5, [
                M[7] || (M[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", v5, [
                  $(ln, {
                    modelValue: a.value,
                    "onUpdate:modelValue": M[1] || (M[1] = (A) => a.value = A),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", p5, [
                  $(_e, {
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
                      b(" " + d(_.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          c.value ? (n(), R(_t, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: g(() => [
              $(Nt, {
                status: c.value.status === "success" ? "synced" : "broken"
              }, vo({
                icon: g(() => [
                  b(d(c.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  b(d(c.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: g(() => [
                  b(d(c.value.status === "success" ? "Your environment has been exported" : c.value.message), 1)
                ]),
                _: 2
              }, [
                c.value.status === "success" ? {
                  name: "details",
                  fn: g(() => [
                    $($t, { label: "Saved to:" }, {
                      default: g(() => [
                        $(U8, {
                          path: c.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    c.value.models_without_sources !== void 0 ? (n(), R($t, {
                      key: 0,
                      label: "Models without sources:",
                      value: c.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    c.value.models_without_sources && c.value.models_without_sources > 0 ? (n(), i("div", g5, [...M[8] || (M[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                c.value.status === "success" ? {
                  name: "actions",
                  fn: g(() => [
                    $(_e, {
                      variant: "primary",
                      size: "sm",
                      loading: u.value,
                      onClick: I
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
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    $(_e, {
                      variant: "secondary",
                      size: "sm",
                      onClick: U
                    }, {
                      default: g(() => [...M[10] || (M[10] = [
                        b(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    $(_e, {
                      variant: "ghost",
                      size: "sm",
                      onClick: M[2] || (M[2] = (A) => c.value = null)
                    }, {
                      default: g(() => [...M[11] || (M[11] = [
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
      $(hs, {
        show: m.value,
        title: "What Gets Exported",
        onClose: M[3] || (M[3] = (A) => m.value = !1)
      }, {
        content: g(() => [...M[12] || (M[12] = [
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
      v.value && f.value ? (n(), R(eu, {
        key: 0,
        issues: f.value.blocking_issues,
        onClose: M[4] || (M[4] = (A) => v.value = !1),
        onCommitted: x
      }, null, 8, ["issues"])) : y("", !0),
      p.value && f.value ? (n(), R(tu, {
        key: 1,
        models: f.value.warnings.models_without_sources,
        onConfirm: w,
        onCancel: M[5] || (M[5] = (A) => p.value = !1),
        onRevalidate: C
      }, null, 8, ["models"])) : y("", !0)
    ], 64));
  }
}), y5 = /* @__PURE__ */ xe(h5, [["__scopeId", "data-v-ddeffd68"]]), w5 = { class: "file-input-wrapper" }, _5 = ["accept", "multiple", "disabled"], k5 = /* @__PURE__ */ $e({
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
      var c;
      (c = l.value) == null || c.click();
    }
    function u(c) {
      const m = c.target;
      m.files && m.files.length > 0 && (a("change", m.files), m.value = "");
    }
    return s({
      triggerInput: r
    }), (c, m) => (n(), i("div", w5, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: u
      }, null, 40, _5),
      $(_e, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: g(() => [
          ot(c.$slots, "default", {}, () => [
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
}), b5 = /* @__PURE__ */ xe(k5, [["__scopeId", "data-v-cd192091"]]), $5 = {
  key: 0,
  class: "drop-zone-empty"
}, C5 = { class: "drop-zone-text" }, x5 = { class: "drop-zone-primary" }, S5 = { class: "drop-zone-secondary" }, I5 = { class: "drop-zone-actions" }, E5 = {
  key: 1,
  class: "drop-zone-file"
}, T5 = { class: "file-info" }, P5 = { class: "file-details" }, R5 = { class: "file-name" }, M5 = { class: "file-size" }, D5 = /* @__PURE__ */ $e({
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
    const o = s, a = k(!1), l = k(null), r = k(0), u = O(() => l.value !== null), c = O(() => {
      var C;
      return ((C = l.value) == null ? void 0 : C.name) || "";
    }), m = O(() => {
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
    function p(C) {
      C.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function _(C) {
      var U;
      C.stopPropagation(), r.value = 0, a.value = !1;
      const S = (U = C.dataTransfer) == null ? void 0 : U.files;
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
      class: Pe(["file-drop-zone", { "drop-active": a.value, "has-file": u.value }]),
      onDragenter: ut(f, ["prevent"]),
      onDragover: ut(v, ["prevent"]),
      onDragleave: ut(p, ["prevent"]),
      onDrop: ut(_, ["prevent"])
    }, [
      u.value ? (n(), i("div", E5, [
        t("div", T5, [
          S[1] || (S[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", P5, [
            t("div", R5, d(c.value), 1),
            t("div", M5, d(m.value), 1)
          ])
        ]),
        $(_e, {
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
      ])) : (n(), i("div", $5, [
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
        t("div", C5, [
          t("p", x5, d(e.primaryText), 1),
          t("p", S5, d(e.secondaryText), 1)
        ]),
        t("div", I5, [
          $(b5, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: h
          }, {
            default: g(() => [
              b(d(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), L5 = /* @__PURE__ */ xe(D5, [["__scopeId", "data-v-0f79cb86"]]), N5 = { class: "import-preview" }, U5 = { class: "preview-header" }, O5 = {
  key: 0,
  class: "source-env"
}, A5 = { class: "preview-content" }, z5 = { class: "preview-section" }, V5 = { class: "section-header" }, F5 = { class: "section-info" }, B5 = { class: "section-count" }, W5 = {
  key: 0,
  class: "item-list"
}, G5 = { class: "item-name" }, j5 = {
  key: 0,
  class: "item-more"
}, H5 = { class: "preview-section" }, K5 = { class: "section-header" }, q5 = { class: "section-info" }, Y5 = { class: "section-count" }, J5 = {
  key: 0,
  class: "item-list"
}, Q5 = { class: "item-details" }, X5 = { class: "item-name" }, Z5 = { class: "item-meta" }, eS = {
  key: 0,
  class: "item-more"
}, tS = { class: "preview-section" }, sS = { class: "section-header" }, oS = { class: "section-info" }, nS = { class: "section-count" }, aS = {
  key: 0,
  class: "item-list"
}, lS = { class: "item-name" }, iS = {
  key: 0,
  class: "item-more"
}, rS = {
  key: 0,
  class: "preview-section"
}, uS = { class: "git-info" }, cS = /* @__PURE__ */ $e({
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
    const s = e, o = O(() => s.workflows.length), a = O(() => s.models.length), l = O(() => s.nodes.length);
    function r(u) {
      return u < 1024 ? `${u} B` : u < 1024 * 1024 ? `${(u / 1024).toFixed(1)} KB` : u < 1024 * 1024 * 1024 ? `${(u / (1024 * 1024)).toFixed(1)} MB` : `${(u / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (u, c) => (n(), i("div", N5, [
      t("div", U5, [
        $(Zt, null, {
          default: g(() => [...c[0] || (c[0] = [
            b("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", O5, [
          c[1] || (c[1] = b(" From: ", -1)),
          $(Ya, null, {
            default: g(() => [
              b(d(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", A5, [
        t("div", z5, [
          t("div", V5, [
            c[3] || (c[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", F5, [
              c[2] || (c[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", B5, d(o.value) + " file" + d(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", W5, [
            (n(!0), i(H, null, we(e.workflows.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
              key: m,
              class: "preview-item"
            }, [
              c[4] || (c[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", G5, d(m), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (n(), i("div", j5, " +" + d(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", H5, [
          t("div", K5, [
            c[6] || (c[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", q5, [
              c[5] || (c[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", Y5, d(a.value) + " file" + d(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (n(), i("div", J5, [
            (n(!0), i(H, null, we(e.models.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
              key: m.filename,
              class: "preview-item"
            }, [
              c[7] || (c[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", Q5, [
                t("span", X5, d(m.filename), 1),
                t("span", Z5, d(r(m.size)) + " • " + d(m.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (n(), i("div", eS, " +" + d(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", tS, [
          t("div", sS, [
            c[9] || (c[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", oS, [
              c[8] || (c[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", nS, d(l.value) + " node" + d(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (n(), i("div", aS, [
            (n(!0), i(H, null, we(e.nodes.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
              key: m,
              class: "preview-item"
            }, [
              c[10] || (c[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", lS, d(m), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (n(), i("div", iS, " +" + d(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (n(), i("div", rS, [
          c[11] || (c[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", uS, [
            e.gitBranch ? (n(), R($t, {
              key: 0,
              label: "Branch"
            }, {
              default: g(() => [
                $(Ya, null, {
                  default: g(() => [
                    b(d(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (n(), R($t, {
              key: 1,
              label: "Commit"
            }, {
              default: g(() => [
                $(Fr, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), dS = /* @__PURE__ */ xe(cS, [["__scopeId", "data-v-182fe113"]]), mS = { class: "import-config" }, fS = { class: "config-container" }, vS = { class: "config-field" }, pS = { class: "input-wrapper" }, gS = ["value"], hS = {
  key: 0,
  class: "validating-indicator"
}, yS = {
  key: 1,
  class: "valid-indicator"
}, wS = {
  key: 0,
  class: "field-error"
}, _S = { class: "config-field" }, kS = { class: "strategy-options" }, bS = ["value", "checked", "onChange"], $S = { class: "strategy-content" }, CS = { class: "strategy-label" }, xS = { class: "strategy-description" }, SS = { class: "config-field switch-field" }, IS = { class: "switch-label" }, ES = ["checked"], TS = { class: "advanced-section" }, PS = { class: "advanced-content" }, RS = { class: "config-field" }, MS = ["value"], DS = ["value"], LS = /* @__PURE__ */ $e({
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
      const p = v.target.value;
      a("update:name", p), r.value = !1, c && clearTimeout(c), p.length > 0 ? (l.value = !0, c = setTimeout(() => {
        a("validate-name", p);
      }, 400)) : l.value = !1;
    }
    function f() {
      o.name.length > 0 && a("validate-name", o.name);
    }
    return (v, p) => (n(), i("div", mS, [
      $(Zt, null, {
        default: g(() => [...p[2] || (p[2] = [
          b("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", fS, [
        t("div", vS, [
          $(Bn, { required: "" }, {
            default: g(() => [...p[3] || (p[3] = [
              b("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", pS, [
            t("input", {
              type: "text",
              class: Pe(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: m,
              onBlur: f
            }, null, 42, gS),
            l.value ? (n(), i("span", hS, "...")) : r.value ? (n(), i("span", yS, "✓")) : y("", !0)
          ]),
          e.nameError ? (n(), i("div", wS, d(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", _S, [
          $(Bn, null, {
            default: g(() => [...p[5] || (p[5] = [
              b("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", kS, [
            (n(), i(H, null, we(u, (_) => t("label", {
              key: _.value,
              class: Pe(["strategy-option", { active: e.modelStrategy === _.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: _.value,
                checked: e.modelStrategy === _.value,
                onChange: (h) => a("update:modelStrategy", _.value)
              }, null, 40, bS),
              t("div", $S, [
                t("span", CS, d(_.label), 1),
                t("span", xS, d(_.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", SS, [
          t("label", IS, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (_) => a("update:switchAfterImport", _.target.checked))
            }, null, 40, ES),
            p[6] || (p[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", TS, [
          p[8] || (p[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", PS, [
            t("div", RS, [
              $(Bn, null, {
                default: g(() => [...p[7] || (p[7] = [
                  b("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              t("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: p[1] || (p[1] = (_) => a("update:torchBackend", _.target.value))
              }, [
                (n(!0), i(H, null, we(Ze(kl), (_) => (n(), i("option", {
                  key: _,
                  value: _
                }, d(_) + d(_ === "auto" ? " (detect GPU)" : ""), 9, DS))), 128))
              ], 40, MS)
            ])
          ])
        ])
      ])
    ]));
  }
}), NS = /* @__PURE__ */ xe(LS, [["__scopeId", "data-v-89ea06a1"]]), US = { class: "import-flow" }, OS = {
  key: 0,
  class: "import-empty"
}, AS = { class: "git-import-section" }, zS = { class: "git-url-input-row" }, VS = ["disabled"], FS = {
  key: 0,
  class: "git-error"
}, BS = {
  key: 1,
  class: "import-configure"
}, WS = { class: "selected-file-bar" }, GS = {
  key: 0,
  class: "file-bar-content"
}, jS = { class: "file-bar-info" }, HS = { class: "file-bar-name" }, KS = { class: "file-bar-size" }, qS = {
  key: 1,
  class: "file-bar-content"
}, YS = { class: "file-bar-info" }, JS = { class: "file-bar-name" }, QS = {
  key: 0,
  class: "preview-loading"
}, XS = { class: "import-actions" }, ZS = {
  key: 2,
  class: "import-progress"
}, e4 = { class: "creating-intro" }, t4 = {
  key: 0,
  class: "progress-warning"
}, s4 = {
  key: 1,
  class: "import-error"
}, o4 = { class: "error-message" }, n4 = {
  key: 3,
  class: "import-complete"
}, a4 = { class: "complete-message" }, l4 = { class: "complete-title" }, i4 = { class: "complete-details" }, r4 = { class: "complete-actions" }, u4 = /* @__PURE__ */ $e({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var Y, B, oe, G;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: u, validateEnvironmentName: c, executeImport: m, executeGitImport: f, getImportProgress: v } = ct();
    let p = null;
    const _ = k(null), h = k(a.resumeImport ?? !1), w = k(!1), x = k(!1), C = k(""), S = k(!1), U = k(null), I = k(""), P = k(null), M = k(!1), A = k(null), j = k(null), E = k({
      name: ((Y = a.initialProgress) == null ? void 0 : Y.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), L = k(null), ie = k({
      message: ((B = a.initialProgress) == null ? void 0 : B.message) ?? "Preparing import...",
      phase: ((oe = a.initialProgress) == null ? void 0 : oe.phase) ?? "",
      progress: ((G = a.initialProgress) == null ? void 0 : G.progress) ?? 0,
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
    ], ne = O(() => {
      if (!j.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const N = j.value;
      return {
        sourceEnvironment: N.comfyui_version ? `ComfyUI ${N.comfyui_version}` : "Unknown",
        workflows: N.workflows.map((me) => me.name),
        models: N.models.map((me) => ({
          filename: me.filename,
          size: 0,
          type: me.relative_path.split("/")[0] || "model"
        })),
        nodes: N.nodes.map((me) => me.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), te = O(() => !S.value && !U.value && j.value && E.value.name.length > 0 && !L.value && (_.value || P.value));
    async function K(N) {
      _.value = N, S.value = !0, U.value = null, j.value = null;
      try {
        const me = await r(N);
        j.value = me;
      } catch (me) {
        U.value = me instanceof Error ? me.message : "Failed to analyze file", console.error("Preview error:", me);
      } finally {
        S.value = !1;
      }
    }
    function X() {
      _.value = null, P.value = null, I.value = "", A.value = null, w.value = !1, x.value = !1, C.value = "", j.value = null, U.value = null, E.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, L.value = null, l("source-cleared");
    }
    function de() {
      se(), X(), h.value = !1, S.value = !1, M.value = !1, ie.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function Le() {
      if (I.value.trim()) {
        M.value = !0, A.value = null;
        try {
          const N = await u(I.value.trim());
          P.value = I.value.trim(), j.value = N;
        } catch (N) {
          A.value = N instanceof Error ? N.message : "Failed to analyze repository";
        } finally {
          M.value = !1;
        }
      }
    }
    function ae(N) {
      try {
        const me = new URL(N);
        return me.host + me.pathname.replace(/\.git$/, "");
      } catch {
        return N;
      }
    }
    async function ye(N) {
      if (!N) {
        L.value = "Environment name is required";
        return;
      }
      try {
        const me = await c(N);
        L.value = me.valid ? null : me.error || "Invalid name";
      } catch {
        L.value = "Failed to validate name";
      }
    }
    async function fe() {
      if (E.value.name && !(!_.value && !P.value)) {
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
          else if (P.value)
            N = await f(
              P.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          N.status === "started" ? Oe() : (x.value = !1, C.value = N.message, h.value = !1, w.value = !0);
        } catch (N) {
          x.value = !1, C.value = N instanceof Error ? N.message : "Unknown error occurred during import", h.value = !1, w.value = !0;
        }
      }
    }
    async function Oe() {
      if (p) return;
      const N = async () => {
        try {
          const ze = await v();
          return ie.value = {
            message: ze.message,
            phase: ze.phase || "",
            progress: ze.progress ?? (ze.state === "importing" ? 50 : 0),
            error: ze.error || null
          }, ze.state === "complete" ? (se(), x.value = !0, C.value = `Environment '${ze.environment_name}' created successfully`, h.value = !1, w.value = !0, ze.environment_name && l("import-complete", ze.environment_name, E.value.switchAfterImport), !1) : ze.state === "error" ? (se(), x.value = !1, C.value = ze.error || ze.message, h.value = !1, w.value = !0, !1) : !0;
        } catch (ze) {
          return console.error("Failed to poll import progress:", ze), !0;
        }
      };
      await N() && (p = setInterval(async () => {
        await N() || se();
      }, 2e3));
    }
    function se() {
      p && (clearInterval(p), p = null);
    }
    function ce(N) {
      return N < 1024 ? `${N} B` : N < 1024 * 1024 ? `${(N / 1024).toFixed(1)} KB` : N < 1024 * 1024 * 1024 ? `${(N / (1024 * 1024)).toFixed(1)} MB` : `${(N / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return at(async () => {
      try {
        const N = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", N.state, N), N.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", N.environment_name), h.value = !0, E.value.name = N.environment_name || E.value.name || "", ie.value = {
          progress: N.progress ?? 0,
          message: N.message || "Importing...",
          phase: N.phase || "",
          error: null
        }, Oe());
      } catch (N) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", N);
      }
    }), s({
      handleReset: de,
      isImporting: h,
      canImport: te
    }), (N, me) => {
      var ze;
      return n(), i("div", US, [
        !_.value && !P.value && !h.value ? (n(), i("div", OS, [
          $(L5, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: K
          }),
          me[7] || (me[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", AS, [
            me[5] || (me[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", zS, [
              nt(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": me[0] || (me[0] = (Ve) => I.value = Ve),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: as(Le, ["enter"]),
                disabled: M.value
              }, null, 40, VS), [
                [ts, I.value]
              ]),
              $(_e, {
                variant: "primary",
                size: "sm",
                disabled: !I.value.trim() || M.value,
                onClick: Le
              }, {
                default: g(() => [
                  b(d(M.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            A.value ? (n(), i("div", FS, d(A.value), 1)) : y("", !0),
            me[6] || (me[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (_.value || P.value) && !h.value && !w.value ? (n(), i("div", BS, [
          t("div", WS, [
            _.value ? (n(), i("div", GS, [
              me[8] || (me[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", jS, [
                t("div", HS, d(_.value.name), 1),
                t("div", KS, d(ce(_.value.size)), 1)
              ])
            ])) : P.value ? (n(), i("div", qS, [
              me[10] || (me[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", YS, [
                t("div", JS, d(ae(P.value)), 1),
                me[9] || (me[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            $(_e, {
              variant: "ghost",
              size: "sm",
              onClick: X
            }, {
              default: g(() => [...me[11] || (me[11] = [
                b(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (n(), i("div", QS, [...me[12] || (me[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : U.value ? (n(), R(cs, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [U.value]
          }, null, 8, ["details"])) : j.value ? (n(), R(dS, {
            key: 2,
            "source-environment": ne.value.sourceEnvironment,
            workflows: ne.value.workflows,
            models: ne.value.models,
            nodes: ne.value.nodes,
            "git-branch": ne.value.gitBranch,
            "git-commit": ne.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          j.value ? (n(), R(NS, {
            key: 3,
            name: E.value.name,
            "onUpdate:name": me[1] || (me[1] = (Ve) => E.value.name = Ve),
            "model-strategy": E.value.modelStrategy,
            "onUpdate:modelStrategy": me[2] || (me[2] = (Ve) => E.value.modelStrategy = Ve),
            "torch-backend": E.value.torchBackend,
            "onUpdate:torchBackend": me[3] || (me[3] = (Ve) => E.value.torchBackend = Ve),
            "switch-after-import": E.value.switchAfterImport,
            "onUpdate:switchAfterImport": me[4] || (me[4] = (Ve) => E.value.switchAfterImport = Ve),
            "name-error": L.value,
            onValidateName: ye
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          E.value.modelStrategy === "skip" && ((ze = j.value) != null && ze.models_needing_download) ? (n(), R(cs, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${j.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", XS, [
            $(_e, {
              variant: "secondary",
              size: "md",
              onClick: X
            }, {
              default: g(() => [...me[13] || (me[13] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            $(_e, {
              variant: "primary",
              size: "md",
              disabled: !te.value,
              onClick: fe
            }, {
              default: g(() => [...me[14] || (me[14] = [
                b(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : h.value ? (n(), i("div", ZS, [
          t("p", e4, [
            me[15] || (me[15] = b(" Importing environment ", -1)),
            t("strong", null, d(E.value.name), 1),
            me[16] || (me[16] = b("... ", -1))
          ]),
          $(ea, {
            progress: ie.value.progress,
            message: ie.value.message,
            "current-phase": ie.value.phase,
            variant: ie.value.error ? "error" : "default",
            "show-steps": !0,
            steps: le
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          ie.value.error ? y("", !0) : (n(), i("p", t4, " This may take several minutes. Please wait... ")),
          ie.value.error ? (n(), i("div", s4, [
            t("p", o4, d(ie.value.error), 1)
          ])) : y("", !0)
        ])) : w.value ? (n(), i("div", n4, [
          t("div", {
            class: Pe(["complete-icon", x.value ? "success" : "error"])
          }, d(x.value ? "✓" : "✕"), 3),
          t("div", a4, [
            t("div", l4, d(x.value ? "Import Successful" : "Import Failed"), 1),
            t("div", i4, d(C.value), 1)
          ]),
          t("div", r4, [
            $(_e, {
              variant: "primary",
              size: "md",
              onClick: de
            }, {
              default: g(() => [...me[17] || (me[17] = [
                b(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), su = /* @__PURE__ */ xe(u4, [["__scopeId", "data-v-72cbc04e"]]), c4 = /* @__PURE__ */ $e({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, a = k(!1);
    function l(r, u) {
      u && o("import-complete-switch", r);
    }
    return (r, u) => (n(), i(H, null, [
      $(qt, null, {
        header: g(() => [
          $(Yt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: u[0] || (u[0] = (c) => a.value = !0)
          })
        ]),
        content: g(() => [
          $(su, { onImportComplete: l })
        ]),
        _: 1
      }),
      $(hs, {
        show: a.value,
        title: "How Import Works",
        onClose: u[1] || (u[1] = (c) => a.value = !1)
      }, {
        content: g(() => [...u[2] || (u[2] = [
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
}), d4 = /* @__PURE__ */ xe(c4, [["__scopeId", "data-v-e13bfe76"]]), Dn = Io(), m4 = 5e3, Co = k([]), La = k(!1), Na = k(null);
let jo = null;
async function Ln(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function ou(e) {
  const s = O(
    () => Co.value.filter((h) => h.status === "running")
  ), o = O(
    () => Co.value.filter((h) => h.status === "deploying")
  ), a = O(
    () => Co.value.filter((h) => h.status === "stopped")
  ), l = O(
    () => s.value.length + o.value.length
  ), r = O(() => {
    const h = {
      deploying: 0,
      running: 1,
      stopped: 2,
      error: 3,
      terminated: 4
    };
    return [...Co.value].sort(
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
      Co.value = h.instances;
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
  function p() {
    jo || (jo = window.setInterval(u, m4));
  }
  function _() {
    jo && (clearInterval(jo), jo = null);
  }
  return St(o, (h) => {
    h.length > 0 && p();
  }, { immediate: !0 }), e != null && e.autoStart && (u(), p()), {
    // State
    instances: Co,
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
    startPolling: p,
    stopPolling: _
  };
}
const f4 = { class: "instance-header" }, v4 = { class: "provider-badge" }, p4 = { class: "instance-name" }, g4 = {
  key: 0,
  class: "spinner"
}, h4 = { class: "instance-details" }, y4 = {
  key: 0,
  class: "detail"
}, w4 = {
  key: 1,
  class: "detail instance-url"
}, _4 = {
  key: 2,
  class: "detail"
}, k4 = {
  key: 3,
  class: "detail"
}, b4 = {
  key: 4,
  class: "detail total-cost"
}, $4 = {
  key: 0,
  class: "deployment-progress"
}, C4 = { class: "progress-message" }, x4 = { class: "instance-actions" }, S4 = /* @__PURE__ */ $e({
  __name: "InstanceCard",
  props: {
    instance: {},
    isLoading: { type: Boolean }
  },
  emits: ["stop", "start", "terminate"],
  setup(e) {
    const s = e, o = O(() => s.instance.provider === "custom" && s.instance.worker_name ? s.instance.worker_name : {
      runpod: "RunPod",
      vast: "Vast.ai",
      custom: "Custom"
    }[s.instance.provider] || s.instance.provider), a = O(() => ({
      deploying: "Deploying",
      starting: "Starting",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[s.instance.status] || s.instance.status), l = O(() => `status-${s.instance.status}`);
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
      class: Pe(["instance-card", l.value])
    }, [
      t("div", f4, [
        t("span", v4, d(o.value), 1),
        t("span", p4, d(e.instance.name), 1),
        t("span", {
          class: Pe(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (n(), i("span", g4)) : y("", !0),
          b(" " + d(a.value), 1)
        ], 2)
      ]),
      t("div", h4, [
        e.instance.gpu_type ? (n(), i("span", y4, d(e.instance.gpu_type), 1)) : y("", !0),
        e.instance.comfyui_url ? (n(), i("span", w4, d(e.instance.comfyui_url), 1)) : y("", !0),
        e.instance.uptime_seconds ? (n(), i("span", _4, d(c(e.instance.uptime_seconds)), 1)) : y("", !0),
        e.instance.cost_per_hour ? (n(), i("span", k4, "$" + d(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : y("", !0),
        e.instance.total_cost ? (n(), i("span", b4, "$" + d(e.instance.total_cost.toFixed(2)) + " total", 1)) : y("", !0)
      ]),
      e.instance.status === "deploying" ? (n(), i("div", $4, [
        t("div", C4, d(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (n(), R(ga, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : y("", !0)
      ])) : y("", !0),
      t("div", x4, [
        e.instance.status === "running" && e.instance.comfyui_url ? (n(), R(_e, {
          key: 0,
          variant: "primary",
          size: "xs",
          onClick: r
        }, {
          default: g(() => [...f[3] || (f[3] = [
            b(" Open ComfyUI ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.console_url && e.instance.provider !== "custom" ? (n(), R(_e, {
          key: 1,
          variant: "ghost",
          size: "xs",
          onClick: u
        }, {
          default: g(() => [...f[4] || (f[4] = [
            b(" Console ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.instance.status === "running" ? (n(), R(_e, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: f[0] || (f[0] = (v) => m.$emit("stop", e.instance))
        }, {
          default: g(() => [...f[5] || (f[5] = [
            b(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        e.instance.status === "stopped" ? (n(), R(_e, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: f[1] || (f[1] = (v) => m.$emit("start", e.instance))
        }, {
          default: g(() => [...f[6] || (f[6] = [
            b(" Start ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : y("", !0),
        $(_e, {
          variant: "destructive",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: f[2] || (f[2] = (v) => m.$emit("terminate", e.instance))
        }, {
          default: g(() => [...f[7] || (f[7] = [
            b(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), I4 = /* @__PURE__ */ xe(S4, [["__scopeId", "data-v-746c3894"]]), E4 = { class: "instances-tab" }, T4 = { class: "instances-header" }, P4 = {
  key: 0,
  class: "loading-state"
}, R4 = {
  key: 1,
  class: "empty-state"
}, M4 = {
  key: 2,
  class: "instances-list"
}, D4 = /* @__PURE__ */ $e({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(e) {
    const s = e, o = O(() => {
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
    return (a, l) => (n(), i("div", E4, [
      t("div", T4, [
        $(Zt, null, {
          default: g(() => [...l[4] || (l[4] = [
            b("Active Instances", -1)
          ])]),
          _: 1
        }),
        $(_e, {
          variant: "ghost",
          size: "xs",
          loading: e.isLoading,
          onClick: l[0] || (l[0] = (r) => a.$emit("refresh"))
        }, {
          default: g(() => [...l[5] || (l[5] = [
            b(" Refresh ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      e.isLoading && e.instances.length === 0 ? (n(), i("div", P4, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        b(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (n(), i("div", R4, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (n(), i("div", M4, [
        (n(!0), i(H, null, we(o.value, (r) => (n(), R(I4, {
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
}), L4 = /* @__PURE__ */ xe(D4, [["__scopeId", "data-v-ba614fc3"]]), N4 = { class: "remote-header" }, U4 = { class: "remote-info" }, O4 = { class: "remote-icon" }, A4 = { class: "remote-name" }, z4 = {
  key: 0,
  class: "default-badge"
}, V4 = {
  key: 1,
  class: "sync-badge"
}, F4 = {
  key: 0,
  class: "ahead"
}, B4 = {
  key: 1,
  class: "behind"
}, W4 = {
  key: 1,
  class: "synced"
}, G4 = ["href"], j4 = {
  key: 1,
  class: "remote-url-text"
}, H4 = { class: "remote-actions" }, K4 = /* @__PURE__ */ $e({
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
    const s = e, o = O(() => s.remote.is_default), a = O(() => {
      const r = s.remote.fetch_url, u = r.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return u ? `https://${u[1]}/${u[2]}` : r.startsWith("https://") || r.startsWith("http://") ? r.replace(/\.git$/, "") : null;
    }), l = O(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (r, u) => (n(), i("div", {
      class: Pe(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", N4, [
        t("div", U4, [
          t("span", O4, d(o.value ? "🔗" : "🌐"), 1),
          t("span", A4, d(e.remote.name), 1),
          o.value ? (n(), i("span", z4, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", V4, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(H, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", F4, "↑" + d(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", B4, "↓" + d(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", W4, "✓ synced"))
          ])) : y("", !0)
        ]),
        a.value ? (n(), i("a", {
          key: 0,
          href: a.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: u[0] || (u[0] = ut(() => {
          }, ["stop"]))
        }, d(l.value), 9, G4)) : (n(), i("span", j4, d(l.value), 1))
      ]),
      t("div", H4, [
        $(_e, {
          variant: "secondary",
          size: "xs",
          loading: e.isFetching,
          onClick: u[1] || (u[1] = (c) => r.$emit("fetch", e.remote.name))
        }, {
          default: g(() => [...u[4] || (u[4] = [
            b(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        e.syncStatus && e.syncStatus.ahead > 0 ? (n(), R(_e, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: e.isPushing,
          onClick: u[2] || (u[2] = (c) => r.$emit("push", e.remote.name))
        }, {
          default: g(() => [
            b(" Push ↑" + d(e.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : y("", !0),
        $(_e, {
          variant: e.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: u[3] || (u[3] = (c) => r.$emit("select", e.remote.name))
        }, {
          default: g(() => [
            b(d(e.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), nu = /* @__PURE__ */ xe(K4, [["__scopeId", "data-v-d687d161"]]), q4 = { class: "runpod-tab" }, Y4 = { class: "api-key-card" }, J4 = { class: "api-key-row" }, Q4 = { class: "api-key-input-wrapper" }, X4 = ["type", "disabled"], Z4 = ["title"], eI = { class: "status-icon" }, tI = { class: "status-text" }, sI = {
  key: 0,
  class: "credit-balance"
}, oI = { class: "config-card" }, nI = { class: "config-row" }, aI = ["disabled"], lI = {
  key: 0,
  value: ""
}, iI = {
  key: 1,
  value: "",
  disabled: ""
}, rI = ["value", "disabled"], uI = { class: "config-row" }, cI = {
  key: 0,
  class: "loading-inline"
}, dI = { class: "no-volumes-state" }, mI = { class: "no-volumes-text" }, fI = ["value"], vI = { class: "config-row" }, pI = ["disabled"], gI = {
  key: 0,
  value: ""
}, hI = {
  key: 1,
  value: ""
}, yI = {
  key: 2,
  value: ""
}, wI = ["value"], _I = { class: "config-row" }, kI = { class: "radio-group" }, bI = { class: "radio-option" }, $I = { class: "radio-label" }, CI = { class: "radio-option disabled" }, xI = { class: "radio-label" }, SI = { class: "config-row" }, II = { class: "radio-group" }, EI = { class: "radio-option" }, TI = { class: "radio-label" }, PI = { class: "radio-option disabled" }, RI = { class: "radio-label" }, MI = { class: "config-row" }, DI = {
  key: 0,
  class: "loading-text"
}, LI = {
  key: 1,
  class: "empty-remotes"
}, NI = { class: "remotes-list" }, UI = {
  key: 0,
  class: "sync-warning"
}, OI = { class: "warning-content" }, AI = { class: "remotes-footer" }, zI = { class: "summary-card" }, VI = {
  key: 0,
  class: "loading-text"
}, FI = { class: "summary-row" }, BI = { class: "summary-value" }, WI = { class: "summary-row" }, GI = { class: "summary-value" }, jI = { class: "summary-row" }, HI = { class: "summary-value" }, KI = {
  key: 0,
  class: "summary-sub-row"
}, qI = { class: "summary-sub-label" }, YI = {
  key: 1,
  class: "summary-sub-row warning"
}, JI = { class: "summary-sub-label" }, QI = { class: "summary-row" }, XI = { class: "summary-value" }, ZI = { class: "summary-row" }, e6 = { class: "summary-value" }, t6 = { class: "deployment-summary" }, s6 = { class: "summary-columns" }, o6 = { class: "summary-column" }, n6 = { class: "pricing-row" }, a6 = { class: "pricing-value" }, l6 = { class: "pricing-row" }, i6 = { class: "pricing-value" }, r6 = { class: "pricing-row" }, u6 = { class: "pricing-value" }, c6 = { class: "pricing-row total" }, d6 = { class: "pricing-value" }, m6 = { class: "summary-column" }, f6 = { class: "spec-row" }, v6 = { class: "spec-row" }, p6 = {
  key: 0,
  class: "spec-row"
}, g6 = {
  key: 1,
  class: "spec-row spot-warning"
}, h6 = {
  key: 4,
  class: "deploy-actions"
}, y6 = { class: "progress-content" }, w6 = { class: "phase-indicator" }, _6 = { key: 0 }, k6 = { key: 1 }, b6 = { key: 2 }, $6 = {
  key: 3,
  class: "spinner"
}, C6 = { class: "phase-text" }, x6 = { class: "phase-name" }, S6 = { class: "phase-detail" }, I6 = {
  key: 0,
  class: "ready-actions"
}, E6 = { class: "console-link" }, T6 = ["href"], P6 = /* @__PURE__ */ $e({
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
      validateDeploy: p,
      getRemotes: _,
      getRemoteSyncStatus: h,
      fetchRemote: w,
      pushToRemote: x,
      getDataCenters: C
    } = ct(), S = k(!1), U = k(""), I = k(!1), P = k(!1), M = k(null), A = k(null), j = k(""), E = k(""), L = k(""), ie = k("SECURE"), le = k("ON_DEMAND"), ne = k("my-comfyui-deploy"), te = k([]), K = k({}), X = k(!1), de = k(null), Le = k(null), ae = k(null), ye = k([]), fe = k(!1), Oe = k([]), se = k(!1), ce = k([]), Y = k(!1), B = k(null), oe = k(!1), G = k(!1), N = k(null), me = k(!1), ze = k(null), Ve = k(null), W = k(null), Q = k(!1), ge = k(null), Ee = k(!1), Se = k(!1), Ie = O(() => Oe.value.find((T) => T.id === E.value) || null), Ne = O(() => j.value ? Oe.value.filter((T) => T.data_center_id === j.value) : Oe.value), Ce = O(() => ce.value.filter((T) => T.available)), Me = O(() => de.value && K.value[de.value] || null), ke = O(() => {
      if (!de.value) return null;
      const T = te.value.find((D) => D.name === de.value);
      return (T == null ? void 0 : T.fetch_url) || null;
    }), Ge = O(() => I.value && E.value && L.value && ke.value && !G.value && !Q.value), Ue = (T) => {
      const D = ce.value.find((tt) => tt.id === L.value);
      if (!D) return "0.00";
      if (T === "SECURE") return (D.securePrice ?? 0).toFixed(2);
      if (T === "COMMUNITY") return (D.communityPrice ?? 0).toFixed(2);
      const De = ie.value === "SECURE";
      return T === "ON_DEMAND" ? De ? (D.securePrice ?? 0).toFixed(2) : (D.communityPrice ?? 0).toFixed(2) : De ? (D.secureSpotPrice ?? 0).toFixed(2) : (D.communitySpotPrice ?? 0).toFixed(2);
    }, be = O(() => {
      const T = ce.value.find((Tt) => Tt.id === L.value), D = Oe.value.find((Tt) => Tt.id === E.value);
      if (!T) return null;
      const De = ie.value === "SECURE", tt = le.value === "SPOT";
      let pt;
      tt ? pt = De ? T.secureSpotPrice ?? 0 : T.communitySpotPrice ?? 0 : pt = De ? T.securePrice ?? 0 : T.communityPrice ?? 0;
      const st = D ? D.size_gb * 14e-5 : 0, xt = 4e-3;
      return {
        gpu: pt,
        volume: st,
        container: xt,
        total: pt + st + xt
      };
    });
    async function J() {
      await re(), await Promise.all([Fe(), Be()]);
    }
    async function Be() {
      X.value = !0;
      try {
        const T = await _();
        te.value = T.remotes, await Promise.all(
          T.remotes.map(async (De) => {
            const tt = await h(De.name);
            tt && (K.value[De.name] = tt);
          })
        );
        const D = T.remotes.find((De) => De.is_default);
        D ? de.value = D.name : T.remotes.length > 0 && (de.value = T.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        X.value = !1;
      }
    }
    async function V(T) {
      Le.value = T;
      try {
        await w(T);
        const D = await h(T);
        D && (K.value[T] = D), o("toast", `Fetched from ${T}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        Le.value = null;
      }
    }
    async function F(T) {
      ae.value = T;
      try {
        await x(T, { force: !1 });
        const D = await h(T);
        D && (K.value[T] = D), o("toast", `Pushed to ${T}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        ae.value = null;
      }
    }
    function q(T) {
      de.value = T;
    }
    async function ve() {
      if (U.value) {
        P.value = !0, M.value = null;
        try {
          const T = await l(U.value, !0);
          T.status === "success" ? (I.value = !0, A.value = T.credit_balance ?? null, M.value = { type: "success", message: T.message }, await J()) : M.value = { type: "error", message: T.message };
        } catch (T) {
          M.value = {
            type: "error",
            message: T instanceof Error ? T.message : "Connection test failed"
          };
        } finally {
          P.value = !1;
        }
      }
    }
    async function z() {
      try {
        await v(), U.value = "", I.value = !1, M.value = null, A.value = null, ye.value = [], j.value = "", Oe.value = [], E.value = "", ce.value = [], L.value = "", B.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function re() {
      se.value = !0, fe.value = !0;
      try {
        const T = await r();
        Oe.value = T.volumes;
        const D = /* @__PURE__ */ new Map();
        for (const De of T.volumes)
          De.data_center_id && !D.has(De.data_center_id) && D.set(De.data_center_id, {
            id: De.data_center_id,
            name: De.data_center_name || De.data_center_id,
            available: !0
          });
        if (T.volumes.length === 0) {
          const De = await C();
          ye.value = De.data_centers;
        } else
          ye.value = Array.from(D.values());
        if (Oe.value.length > 0) {
          const De = Oe.value[0];
          E.value = De.id, De.data_center_id && (j.value = De.data_center_id, await ue(De.data_center_id));
        } else ye.value.length > 0 && (j.value = ye.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        se.value = !1, fe.value = !1;
      }
    }
    async function ue(T) {
      Y.value = !0;
      try {
        const D = await u(T);
        ce.value = D.gpu_types;
        const De = ce.value.find((tt) => tt.available);
        De ? L.value = De.id : L.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        Y.value = !1;
      }
    }
    St(j, async (T) => {
      if (!T || se.value) return;
      const D = Oe.value.find((De) => De.id === E.value);
      D && D.data_center_id !== T && (E.value = ""), await ue(T);
    }), St(E, async (T) => {
      if (!T) {
        ce.value = [], L.value = "";
        return;
      }
      if (se.value) return;
      const D = Oe.value.find((De) => De.id === T);
      D && D.data_center_id !== j.value ? j.value = D.data_center_id : D && await ue(D.data_center_id);
    });
    async function Fe() {
      oe.value = !0;
      try {
        B.value = await a();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        oe.value = !1;
      }
    }
    async function Ae() {
      if (!(!L.value || !E.value)) {
        Q.value = !0, N.value = null;
        try {
          const T = await p();
          ge.value = T, T.can_export ? T.warnings.models_without_sources.length > 0 ? Se.value = !0 : await qe() : Ee.value = !0;
        } catch (T) {
          N.value = {
            status: "error",
            message: T instanceof Error ? T.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          Q.value = !1;
        }
      }
    }
    async function We() {
      Se.value = !1, await qe();
    }
    async function Xe() {
      try {
        const T = await p();
        ge.value = T;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function qe() {
      G.value = !0;
      try {
        let T;
        if (le.value === "SPOT") {
          const De = ce.value.find((tt) => tt.id === L.value);
          De && (T = ie.value === "SECURE" ? De.secureSpotPrice : De.communitySpotPrice);
        }
        const D = await c({
          gpu_type_id: L.value,
          pod_name: ne.value || "my-comfyui-deploy",
          network_volume_id: E.value,
          cloud_type: ie.value,
          pricing_type: le.value,
          spot_bid: T,
          import_source: ke.value
        });
        N.value = D, D.status === "success" && D.pod_id ? (ze.value = D.pod_id, me.value = !0, it(D.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", D.message, "error");
      } catch (T) {
        N.value = {
          status: "error",
          message: T instanceof Error ? T.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        G.value = !1;
      }
    }
    function it(T) {
      dt(T), W.value = window.setInterval(() => dt(T), 3e3);
    }
    function lt() {
      W.value && (clearInterval(W.value), W.value = null);
    }
    async function dt(T) {
      try {
        const D = await m(T);
        Ve.value = D, (D.phase === "READY" || D.phase === "ERROR" || D.phase === "STOPPED") && (lt(), D.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (D) {
        console.error("Failed to poll deployment status:", D);
      }
    }
    function Et() {
      me.value = !1, lt(), ze.value = null, Ve.value = null;
    }
    function Wt() {
      var T;
      (T = Ve.value) != null && T.comfyui_url && window.open(Ve.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function Rt(T) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[T || ""] || "Initializing...";
    }
    function pe(T) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[T || ""] ?? 10;
    }
    return at(async () => {
      try {
        const T = await f(!0);
        T.has_key && T.key_preview && (U.value = `****${T.key_preview}`, T.valid ? (I.value = !0, A.value = T.credit_balance ?? null, M.value = { type: "success", message: "Connected to RunPod" }, await J()) : T.error && (M.value = { type: "error", message: T.error }));
      } catch {
      }
    }), Zs(() => {
      lt();
    }), (T, D) => {
      var De, tt, pt, st, xt, Tt;
      return n(), i(H, null, [
        t("div", q4, [
          $(_t, { title: "RUNPOD API KEY" }, {
            default: g(() => [
              t("div", Y4, [
                t("div", J4, [
                  t("div", Q4, [
                    nt(t("input", {
                      "onUpdate:modelValue": D[0] || (D[0] = (je) => U.value = je),
                      type: S.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: I.value
                    }, null, 8, X4), [
                      [pa, U.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: D[1] || (D[1] = (je) => S.value = !S.value),
                      title: S.value ? "Hide key" : "Show key"
                    }, d(S.value ? "👁" : "👁‍🗨"), 9, Z4)
                  ]),
                  I.value ? y("", !0) : (n(), R(_e, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: P.value,
                    disabled: !U.value || P.value,
                    onClick: ve
                  }, {
                    default: g(() => [...D[16] || (D[16] = [
                      b(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  I.value ? (n(), R(_e, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: z
                  }, {
                    default: g(() => [...D[17] || (D[17] = [
                      b(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                M.value ? (n(), i("div", {
                  key: 0,
                  class: Pe(["connection-status", M.value.type])
                }, [
                  t("span", eI, d(M.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", tI, d(M.value.message), 1),
                  A.value !== null ? (n(), i("span", sI, " $" + d(A.value.toFixed(2)) + " credit ", 1)) : y("", !0)
                ], 2)) : y("", !0),
                D[18] || (D[18] = t("div", { class: "api-key-help" }, [
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
          I.value ? (n(), R(_t, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: g(() => [
              t("div", oI, [
                t("div", nI, [
                  D[19] || (D[19] = t("label", { class: "config-label" }, "Region", -1)),
                  nt(t("select", {
                    "onUpdate:modelValue": D[2] || (D[2] = (je) => j.value = je),
                    class: "config-select",
                    disabled: fe.value
                  }, [
                    fe.value ? (n(), i("option", lI, "Loading...")) : j.value ? y("", !0) : (n(), i("option", iI, "Select a region")),
                    (n(!0), i(H, null, we(ye.value, (je) => (n(), i("option", {
                      key: je.id,
                      value: je.id,
                      disabled: !je.available
                    }, d(je.id) + " (" + d(je.name) + ")" + d(je.available ? "" : " [Unavailable]"), 9, rI))), 128))
                  ], 8, aI), [
                    [Ss, j.value]
                  ])
                ]),
                t("div", uI, [
                  D[24] || (D[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  se.value ? (n(), i("div", cI, "Loading volumes...")) : Ne.value.length === 0 ? (n(), i(H, { key: 1 }, [
                    t("div", dI, [
                      D[20] || (D[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", mI, "No volumes in " + d(j.value || "this region"), 1)
                    ]),
                    D[21] || (D[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    D[22] || (D[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (n(), i(H, { key: 2 }, [
                    nt(t("select", {
                      "onUpdate:modelValue": D[3] || (D[3] = (je) => E.value = je),
                      class: "config-select"
                    }, [
                      (n(!0), i(H, null, we(Ne.value, (je) => (n(), i("option", {
                        key: je.id,
                        value: je.id
                      }, d(je.name) + " (" + d(je.size_gb) + "GB) ", 9, fI))), 128))
                    ], 512), [
                      [Ss, E.value]
                    ]),
                    D[23] || (D[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", vI, [
                  D[25] || (D[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  nt(t("select", {
                    "onUpdate:modelValue": D[4] || (D[4] = (je) => L.value = je),
                    class: "config-select",
                    disabled: Y.value || !E.value
                  }, [
                    E.value ? Y.value ? (n(), i("option", hI, "Loading GPUs...")) : Ce.value.length === 0 ? (n(), i("option", yI, "No GPUs available in this region")) : y("", !0) : (n(), i("option", gI, "Select a volume first")),
                    (n(!0), i(H, null, we(Ce.value, (je) => (n(), i("option", {
                      key: je.id,
                      value: je.id
                    }, d(je.displayName) + " (" + d(je.memoryInGb) + "GB) - $" + d(ie.value === "SECURE" ? (je.securePrice ?? 0).toFixed(2) : (je.communityPrice ?? 0).toFixed(2)) + "/hr " + d(je.stockStatus ? `[${je.stockStatus}]` : ""), 9, wI))), 128))
                  ], 8, pI), [
                    [Ss, L.value]
                  ])
                ]),
                t("div", _I, [
                  D[26] || (D[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", kI, [
                    t("label", bI, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": D[5] || (D[5] = (je) => ie.value = je),
                        value: "SECURE"
                      }, null, 512), [
                        [ds, ie.value]
                      ]),
                      t("span", $I, "Secure ($" + d(Ue("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", CI, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": D[6] || (D[6] = (je) => ie.value = je),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [ds, ie.value]
                      ]),
                      t("span", xI, "Community ($" + d(Ue("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", SI, [
                  D[27] || (D[27] = t("label", { class: "config-label" }, [
                    b(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", II, [
                    t("label", EI, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": D[7] || (D[7] = (je) => le.value = je),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [ds, le.value]
                      ]),
                      t("span", TI, "On-Demand ($" + d(Ue("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", PI, [
                      nt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": D[8] || (D[8] = (je) => le.value = je),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [ds, le.value]
                      ]),
                      t("span", RI, "Spot ($" + d(Ue("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", MI, [
                  D[28] || (D[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  nt(t("input", {
                    "onUpdate:modelValue": D[9] || (D[9] = (je) => ne.value = je),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [ts, ne.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : y("", !0),
          I.value ? (n(), R(_t, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: g(() => [
              X.value ? (n(), i("div", DI, "Loading remotes...")) : te.value.length === 0 ? (n(), i("div", LI, [
                D[30] || (D[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                $(_e, {
                  variant: "primary",
                  size: "xs",
                  onClick: D[10] || (D[10] = (je) => o("navigate", "remotes"))
                }, {
                  default: g(() => [...D[29] || (D[29] = [
                    b(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (n(), i(H, { key: 2 }, [
                t("div", NI, [
                  (n(!0), i(H, null, we(te.value, (je) => (n(), R(nu, {
                    key: je.name,
                    remote: je,
                    "sync-status": K.value[je.name],
                    "is-selected": de.value === je.name,
                    "is-fetching": Le.value === je.name,
                    "is-pushing": ae.value === je.name,
                    onFetch: V,
                    onPush: F,
                    onSelect: q
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                Me.value && Me.value.ahead > 0 ? (n(), i("div", UI, [
                  D[31] || (D[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", OI, [
                    t("strong", null, d(Me.value.ahead) + " unpushed commit" + d(Me.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + d(de.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  $(_e, {
                    variant: "primary",
                    size: "xs",
                    loading: ae.value === de.value,
                    onClick: D[11] || (D[11] = (je) => de.value && F(de.value))
                  }, {
                    default: g(() => [
                      b(" Push to " + d(de.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : y("", !0),
                t("div", AI, [
                  $(_e, {
                    variant: "link",
                    size: "xs",
                    onClick: D[12] || (D[12] = (je) => o("navigate", "remotes"))
                  }, {
                    default: g(() => [...D[32] || (D[32] = [
                      b(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : y("", !0),
          I.value ? (n(), R(_t, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: g(() => [
              t("div", zI, [
                oe.value ? (n(), i("div", VI, "Loading environment summary...")) : B.value ? (n(), i(H, { key: 1 }, [
                  t("div", FI, [
                    D[33] || (D[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", BI, d(B.value.comfyui_version), 1)
                  ]),
                  t("div", WI, [
                    D[34] || (D[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", GI, d(B.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", jI, [
                    D[35] || (D[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", HI, d(B.value.model_count) + " models", 1)
                  ]),
                  B.value.models_with_sources > 0 ? (n(), i("div", KI, [
                    t("span", qI, "└─ " + d(B.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : y("", !0),
                  B.value.models_without_sources > 0 ? (n(), i("div", YI, [
                    t("span", JI, "└─ " + d(B.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : y("", !0),
                  t("div", QI, [
                    D[36] || (D[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", XI, d(B.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", ZI, [
                    D[37] || (D[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", e6, "~" + d(B.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : y("", !0)
              ])
            ]),
            _: 1
          })) : y("", !0),
          I.value && be.value ? (n(), R(_t, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: g(() => {
              var je, is;
              return [
                t("div", t6, [
                  t("div", s6, [
                    t("div", o6, [
                      D[42] || (D[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", n6, [
                        D[38] || (D[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", a6, "$" + d(be.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", l6, [
                        D[39] || (D[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", i6, "$" + d(be.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", r6, [
                        D[40] || (D[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", u6, "$" + d(be.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      D[43] || (D[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", c6, [
                        D[41] || (D[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", d6, "~$" + d(be.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", m6, [
                      D[45] || (D[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", f6, [
                        t("span", null, d(((je = ce.value.find((ys) => ys.id === L.value)) == null ? void 0 : je.displayName) || "GPU") + " (" + d(((is = ce.value.find((ys) => ys.id === L.value)) == null ? void 0 : is.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", v6, [
                        t("span", null, "Region: " + d(j.value), 1)
                      ]),
                      Ie.value ? (n(), i("div", p6, [
                        t("span", null, "Volume: " + d(Ie.value.name), 1)
                      ])) : y("", !0),
                      le.value === "SPOT" ? (n(), i("div", g6, [...D[44] || (D[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : y("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : y("", !0),
          I.value ? (n(), i("div", h6, [
            $(_e, {
              variant: "primary",
              size: "md",
              loading: Q.value || G.value,
              disabled: !Ge.value,
              onClick: Ae
            }, {
              default: g(() => [
                D[46] || (D[46] = t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  t("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                b(" " + d(Q.value ? "Validating..." : G.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : y("", !0),
          N.value ? (n(), R(_t, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: g(() => [
              $(Nt, {
                status: N.value.status === "success" ? "synced" : "broken"
              }, vo({
                icon: g(() => [
                  b(d(N.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  b(d(N.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: g(() => [
                  b(d(N.value.message), 1)
                ]),
                actions: g(() => [
                  $(_e, {
                    variant: "ghost",
                    size: "xs",
                    onClick: D[13] || (D[13] = (je) => N.value = null)
                  }, {
                    default: g(() => [...D[47] || (D[47] = [
                      b(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                N.value.pod_id ? {
                  name: "details",
                  fn: g(() => [
                    $($t, {
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
        me.value ? (n(), R(Ct, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((De = Ve.value) == null ? void 0 : De.phase) === "READY" || ((tt = Ve.value) == null ? void 0 : tt.phase) === "ERROR" || ((pt = Ve.value) == null ? void 0 : pt.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: Et
        }, vo({
          body: g(() => {
            var je, is, ys, po, go, ho, eo, yo, wo, _o, ko, bo;
            return [
              t("div", y6, [
                t("div", w6, [
                  t("div", {
                    class: Pe(["phase-icon", (is = (je = Ve.value) == null ? void 0 : je.phase) == null ? void 0 : is.toLowerCase()])
                  }, [
                    ((ys = Ve.value) == null ? void 0 : ys.phase) === "READY" ? (n(), i("span", _6, "✓")) : ((po = Ve.value) == null ? void 0 : po.phase) === "ERROR" ? (n(), i("span", k6, "✕")) : ((go = Ve.value) == null ? void 0 : go.phase) === "STOPPED" ? (n(), i("span", b6, "○")) : (n(), i("span", $6, "⟳"))
                  ], 2),
                  t("div", C6, [
                    t("div", x6, d(Rt((ho = Ve.value) == null ? void 0 : ho.phase)), 1),
                    t("div", S6, d(((eo = Ve.value) == null ? void 0 : eo.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                $(ga, {
                  progress: pe((yo = Ve.value) == null ? void 0 : yo.phase),
                  variant: ((wo = Ve.value) == null ? void 0 : wo.phase) === "ERROR" ? "error" : ((_o = Ve.value) == null ? void 0 : _o.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((ko = Ve.value) == null ? void 0 : ko.phase) === "READY" ? (n(), i("div", I6, [
                  $(_e, {
                    variant: "primary",
                    size: "md",
                    onClick: Wt
                  }, {
                    default: g(() => [...D[48] || (D[48] = [
                      b(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : y("", !0),
                t("div", E6, [
                  (bo = Ve.value) != null && bo.console_url ? (n(), i("a", {
                    key: 0,
                    href: Ve.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, T6)) : y("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((st = Ve.value) == null ? void 0 : st.phase) === "READY" || ((xt = Ve.value) == null ? void 0 : xt.phase) === "ERROR" || ((Tt = Ve.value) == null ? void 0 : Tt.phase) === "STOPPED" ? {
            name: "footer",
            fn: g(() => [
              $(_e, {
                variant: "ghost",
                size: "xs",
                onClick: Et
              }, {
                default: g(() => [...D[49] || (D[49] = [
                  b(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : y("", !0),
        Ee.value && ge.value ? (n(), R(eu, {
          key: 1,
          issues: ge.value.blocking_issues,
          onClose: D[14] || (D[14] = (je) => Ee.value = !1)
        }, null, 8, ["issues"])) : y("", !0),
        Se.value && ge.value ? (n(), R(tu, {
          key: 2,
          models: ge.value.warnings.models_without_sources,
          onConfirm: We,
          onCancel: D[15] || (D[15] = (je) => Se.value = !1),
          onRevalidate: Xe
        }, null, 8, ["models"])) : y("", !0)
      ], 64);
    };
  }
}), R6 = /* @__PURE__ */ xe(P6, [["__scopeId", "data-v-522cd4d9"]]), M6 = { class: "worker-header" }, D6 = { class: "worker-status" }, L6 = { class: "worker-name" }, N6 = { class: "worker-actions" }, U6 = { class: "worker-details" }, O6 = { class: "detail-item" }, A6 = { class: "detail-value" }, z6 = {
  key: 0,
  class: "detail-item"
}, V6 = { class: "detail-value" }, F6 = {
  key: 1,
  class: "detail-item"
}, B6 = { class: "detail-value mode-badge" }, W6 = {
  key: 0,
  class: "worker-stats"
}, G6 = {
  key: 0,
  class: "stat-item"
}, j6 = { key: 0 }, H6 = {
  key: 1,
  class: "worker-stats offline"
}, K6 = /* @__PURE__ */ $e({
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
      t("div", M6, [
        t("div", D6, [
          t("span", {
            class: Pe(["status-dot", e.worker.status])
          }, null, 2),
          t("span", L6, d(e.worker.name), 1)
        ]),
        t("div", N6, [
          e.worker.status === "online" ? (n(), R(_e, {
            key: 0,
            variant: "primary",
            size: "xs",
            disabled: e.isActionLoading,
            onClick: o[0] || (o[0] = (a) => s.$emit("deploy", e.worker))
          }, {
            default: g(() => [...o[2] || (o[2] = [
              b(" Deploy ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : y("", !0),
          $(_e, {
            variant: "ghost",
            size: "xs",
            loading: e.isActionLoading,
            onClick: o[1] || (o[1] = (a) => s.$emit("remove", e.worker.name))
          }, {
            default: g(() => [...o[3] || (o[3] = [
              b(" Remove ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ]),
      t("div", U6, [
        t("span", O6, [
          t("span", A6, d(e.worker.host) + ":" + d(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (n(), i("span", z6, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", V6, d(e.worker.gpu_info), 1)
        ])) : y("", !0),
        e.worker.mode ? (n(), i("span", F6, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", B6, d(e.worker.mode), 1)
        ])) : y("", !0)
      ]),
      e.worker.status === "online" ? (n(), i("div", W6, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (n(), i("span", G6, [
          b(" • " + d(e.worker.instance_count) + " instance" + d(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (n(), i("span", j6, "(" + d(e.worker.running_count) + " running)", 1)) : y("", !0)
        ])) : y("", !0)
      ])) : (n(), i("div", H6, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), q6 = /* @__PURE__ */ xe(K6, [["__scopeId", "data-v-b1be7134"]]), Y6 = { class: "add-worker-content" }, J6 = { class: "manual-form" }, Q6 = { class: "form-row" }, X6 = { class: "form-row-inline" }, Z6 = { class: "form-field flex-2" }, eE = { class: "form-field flex-1" }, tE = { class: "form-row" }, sE = { class: "api-key-wrapper" }, oE = ["type"], nE = { class: "result-icon" }, aE = { class: "result-content" }, lE = { class: "result-message" }, iE = {
  key: 0,
  class: "result-detail"
}, rE = { class: "modal-actions" }, uE = /* @__PURE__ */ $e({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = ct(), l = Xs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), r = k(!1), u = k(!1), c = k(!1), m = k(null), f = O(() => l.host && l.port && l.apiKey), v = O(() => l.name && l.host && l.port && l.apiKey);
    async function p() {
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
    return (h, w) => (n(), R(Ct, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: w[5] || (w[5] = (x) => h.$emit("close"))
    }, {
      body: g(() => [
        t("div", Y6, [
          t("div", J6, [
            t("div", Q6, [
              w[6] || (w[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              nt(t("input", {
                "onUpdate:modelValue": w[0] || (w[0] = (x) => l.name = x),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [ts, l.name]
              ])
            ]),
            t("div", X6, [
              t("div", Z6, [
                w[7] || (w[7] = t("label", { class: "form-label" }, "Host", -1)),
                nt(t("input", {
                  "onUpdate:modelValue": w[1] || (w[1] = (x) => l.host = x),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [ts, l.host]
                ])
              ]),
              t("div", eE, [
                w[8] || (w[8] = t("label", { class: "form-label" }, "Port", -1)),
                nt(t("input", {
                  "onUpdate:modelValue": w[2] || (w[2] = (x) => l.port = x),
                  type: "number",
                  class: "form-input",
                  placeholder: "9090"
                }, null, 512), [
                  [
                    ts,
                    l.port,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ]),
            t("div", tE, [
              w[9] || (w[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", sE, [
                nt(t("input", {
                  "onUpdate:modelValue": w[3] || (w[3] = (x) => l.apiKey = x),
                  type: r.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, oE), [
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
                b(" Run "),
                t("code", null, "cg-deploy worker setup"),
                b(" on the worker to get the key ")
              ], -1))
            ]),
            m.value ? (n(), i("div", {
              key: 0,
              class: Pe(["test-result", m.value.type])
            }, [
              t("span", nE, d(m.value.type === "success" ? "✓" : "✕"), 1),
              t("div", aE, [
                t("span", lE, d(m.value.message), 1),
                m.value.gpu_info ? (n(), i("span", iE, "GPU: " + d(m.value.gpu_info), 1)) : y("", !0)
              ])
            ], 2)) : y("", !0)
          ])
        ])
      ]),
      footer: g(() => [
        t("div", rE, [
          $(_e, {
            variant: "ghost",
            size: "sm",
            loading: u.value,
            disabled: !f.value || u.value,
            onClick: p
          }, {
            default: g(() => [...w[11] || (w[11] = [
              b(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          $(_e, {
            variant: "primary",
            size: "sm",
            loading: c.value,
            disabled: !v.value || c.value,
            onClick: _
          }, {
            default: g(() => [...w[12] || (w[12] = [
              b(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }));
  }
}), cE = /* @__PURE__ */ xe(uE, [["__scopeId", "data-v-07a00732"]]), dE = { class: "discovered-content" }, mE = {
  key: 0,
  class: "workers-list"
}, fE = { class: "worker-info" }, vE = { class: "worker-name" }, pE = { class: "worker-address" }, gE = {
  key: 0,
  class: "worker-gpu"
}, hE = {
  key: 1,
  class: "empty-state"
}, yE = {
  key: 2,
  class: "api-key-section"
}, wE = { class: "selected-worker" }, _E = { class: "selected-name" }, kE = { class: "selected-address" }, bE = { class: "form-row" }, $E = { class: "api-key-wrapper" }, CE = ["type"], xE = { class: "result-icon" }, SE = { class: "result-message" }, IE = { class: "modal-actions" }, EE = /* @__PURE__ */ $e({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = ct(), l = k(null), r = k(""), u = k(!1), c = k(!1), m = k(null), f = k(null);
    async function v(_) {
      var h;
      l.value = _, r.value = "", f.value = null, await Mt(), (h = m.value) == null || h.focus();
    }
    async function p() {
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
    return (_, h) => (n(), R(Ct, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: h[3] || (h[3] = (w) => _.$emit("close"))
    }, {
      body: g(() => [
        t("div", dE, [
          e.workers.length > 0 ? (n(), i("div", mE, [
            (n(!0), i(H, null, we(e.workers, (w) => (n(), i("div", {
              key: `${w.host}:${w.port}`,
              class: "worker-item"
            }, [
              t("div", fE, [
                t("span", vE, d(w.name), 1),
                t("span", pE, d(w.host) + ":" + d(w.port), 1),
                w.gpu_info ? (n(), i("span", gE, d(w.gpu_info), 1)) : y("", !0)
              ]),
              $(_e, {
                variant: "primary",
                size: "xs",
                onClick: (x) => v(w)
              }, {
                default: g(() => [...h[4] || (h[4] = [
                  b(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (n(), i("div", hE, [...h[5] || (h[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              b("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (n(), i("div", yE, [
            t("div", wE, [
              h[6] || (h[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", _E, d(l.value.name), 1),
              t("span", kE, "(" + d(l.value.host) + ":" + d(l.value.port) + ")", 1)
            ]),
            t("div", bE, [
              h[7] || (h[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", $E, [
                nt(t("input", {
                  ref_key: "apiKeyInput",
                  ref: m,
                  "onUpdate:modelValue": h[0] || (h[0] = (w) => r.value = w),
                  type: u.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: as(p, ["enter"])
                }, null, 40, CE), [
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
                b(" Run "),
                t("code", null, "cg-deploy worker setup"),
                b(" on the worker to get the key ")
              ], -1))
            ]),
            f.value ? (n(), i("div", {
              key: 0,
              class: Pe(["test-result", f.value.type])
            }, [
              t("span", xE, d(f.value.type === "success" ? "✓" : "✕"), 1),
              t("span", SE, d(f.value.message), 1)
            ], 2)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        t("div", IE, [
          l.value ? (n(), R(_e, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: h[2] || (h[2] = (w) => {
              l.value = null, r.value = "", f.value = null;
            })
          }, {
            default: g(() => [...h[9] || (h[9] = [
              b(" Back ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          l.value ? (n(), R(_e, {
            key: 1,
            variant: "primary",
            size: "sm",
            loading: c.value,
            disabled: !r.value || c.value,
            onClick: p
          }, {
            default: g(() => [...h[10] || (h[10] = [
              b(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])) : y("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), TE = /* @__PURE__ */ xe(EE, [["__scopeId", "data-v-5a3e40a4"]]), PE = { class: "deploy-content" }, RE = { class: "section" }, ME = {
  key: 0,
  class: "loading-text"
}, DE = {
  key: 1,
  class: "empty-remotes"
}, LE = {
  key: 2,
  class: "remotes-list"
}, NE = { class: "section" }, UE = { class: "mode-options" }, OE = { class: "mode-option" }, AE = ["disabled"], zE = { class: "mode-option" }, VE = { class: "section" }, FE = {
  key: 0,
  class: "section"
}, BE = { class: "summary-row" }, WE = {
  key: 1,
  class: "sync-warning"
}, GE = { class: "warning-content" }, jE = { class: "modal-actions" }, HE = /* @__PURE__ */ $e({
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
    } = ct(), v = k([]), p = k({}), _ = k(!1), h = k(null), w = k(null), x = k(null), C = k(o.worker.mode || "native"), S = k(""), U = k(null), I = k(!1), P = O(() => h.value && p.value[h.value] || null), M = O(() => {
      if (!h.value) return null;
      const te = v.value.find((K) => K.name === h.value);
      return (te == null ? void 0 : te.fetch_url) || null;
    }), A = O(() => M.value && !I.value);
    async function j() {
      _.value = !0;
      try {
        const te = await l();
        v.value = te.remotes, await Promise.all(
          te.remotes.map(async (X) => {
            const de = await r(X.name);
            de && (p.value[X.name] = de);
          })
        );
        const K = te.remotes.find((X) => X.is_default);
        K ? h.value = K.name : te.remotes.length > 0 && (h.value = te.remotes[0].name);
      } catch {
        a("toast", "Failed to load remotes", "error");
      } finally {
        _.value = !1;
      }
    }
    async function E() {
      try {
        U.value = await m();
      } catch {
      }
    }
    async function L(te) {
      w.value = te;
      try {
        await u(te);
        const K = await r(te);
        K && (p.value[te] = K), a("toast", `Fetched from ${te}`, "success");
      } catch {
        a("toast", "Fetch failed", "error");
      } finally {
        w.value = null;
      }
    }
    async function ie(te) {
      x.value = te;
      try {
        await c(te, { force: !1 });
        const K = await r(te);
        K && (p.value[te] = K), a("toast", `Pushed to ${te}`, "success");
      } catch {
        a("toast", "Push failed", "error");
      } finally {
        x.value = null;
      }
    }
    function le(te) {
      h.value = te;
    }
    async function ne() {
      if (M.value) {
        I.value = !0;
        try {
          const te = await f(o.worker.name, {
            import_source: M.value,
            mode: C.value,
            name: S.value || void 0
          });
          te.id ? (a("toast", `Deployment started: ${te.name || te.id}`, "success"), a("deployed")) : te.status === "error" ? a("toast", te.message || "Deployment failed", "error") : a("toast", "Unexpected response from worker", "error");
        } catch (te) {
          a("toast", te instanceof Error ? te.message : "Deployment failed", "error");
        } finally {
          I.value = !1;
        }
      }
    }
    return at(() => {
      j(), E();
    }), (te, K) => (n(), R(Ct, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: K[5] || (K[5] = (X) => te.$emit("close"))
    }, {
      body: g(() => [
        t("div", PE, [
          t("div", RE, [
            K[7] || (K[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            _.value ? (n(), i("div", ME, "Loading remotes...")) : v.value.length === 0 ? (n(), i("div", DE, [...K[6] || (K[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (n(), i("div", LE, [
              (n(!0), i(H, null, we(v.value, (X) => (n(), R(nu, {
                key: X.name,
                remote: X,
                "sync-status": p.value[X.name],
                "is-selected": h.value === X.name,
                "is-fetching": w.value === X.name,
                "is-pushing": x.value === X.name,
                onFetch: L,
                onPush: ie,
                onSelect: le
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", NE, [
            K[10] || (K[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", UE, [
              t("label", OE, [
                nt(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": K[0] || (K[0] = (X) => C.value = X),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, AE), [
                  [ds, C.value]
                ]),
                K[8] || (K[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", zE, [
                nt(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": K[1] || (K[1] = (X) => C.value = X),
                  value: "native"
                }, null, 512), [
                  [ds, C.value]
                ]),
                K[9] || (K[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", VE, [
            K[11] || (K[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            nt(t("input", {
              "onUpdate:modelValue": K[2] || (K[2] = (X) => S.value = X),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [ts, S.value]
            ])
          ]),
          U.value ? (n(), i("div", FE, [
            K[12] || (K[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", BE, " ComfyUI: " + d(U.value.comfyui_version) + " • " + d(U.value.node_count) + " nodes • " + d(U.value.model_count) + " models • " + d(U.value.workflow_count) + " workflows ", 1)
          ])) : y("", !0),
          P.value && P.value.ahead > 0 ? (n(), i("div", WE, [
            K[14] || (K[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", GE, [
              t("strong", null, d(P.value.ahead) + " unpushed commit" + d(P.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + d(h.value) + "' before deploying to include your latest changes.", 1)
            ]),
            $(_e, {
              variant: "primary",
              size: "xs",
              loading: x.value === h.value,
              onClick: K[3] || (K[3] = (X) => h.value && ie(h.value))
            }, {
              default: g(() => [...K[13] || (K[13] = [
                b(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0)
        ])
      ]),
      footer: g(() => [
        t("div", jE, [
          $(_e, {
            variant: "ghost",
            size: "sm",
            onClick: K[4] || (K[4] = (X) => te.$emit("close"))
          }, {
            default: g(() => [...K[15] || (K[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          $(_e, {
            variant: "primary",
            size: "sm",
            loading: I.value,
            disabled: !A.value || I.value,
            onClick: ne
          }, {
            default: g(() => [...K[16] || (K[16] = [
              b(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), KE = /* @__PURE__ */ xe(HE, [["__scopeId", "data-v-c12720d3"]]), qE = { class: "custom-tab" }, YE = { class: "section-header" }, JE = { class: "section-actions" }, QE = { class: "workers-content" }, XE = {
  key: 0,
  class: "loading-state"
}, ZE = {
  key: 1,
  class: "empty-state"
}, eT = {
  key: 2,
  class: "workers-list"
}, tT = { class: "scan-icon" }, sT = { class: "scan-message" }, oT = /* @__PURE__ */ $e({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: a,
      addCustomWorker: l,
      removeCustomWorker: r,
      scanForWorkers: u
    } = ct(), c = k([]), m = k([]), f = k(!1), v = k(!1), p = k(null), _ = k(!1), h = k(!1), w = k(null), x = k(null);
    async function C() {
      f.value = !0;
      try {
        const j = await a();
        c.value = j.workers;
      } catch (j) {
        o("toast", j instanceof Error ? j.message : "Failed to load workers", "error");
      } finally {
        f.value = !1;
      }
    }
    async function S() {
      v.value = !0, x.value = null;
      try {
        const j = await u(), E = j.discovered.filter(
          (L) => !c.value.some((ie) => ie.host === L.host && ie.port === L.port)
        );
        m.value = E, E.length > 0 ? h.value = !0 : j.discovered.length > 0 ? x.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : x.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (j) {
        o("toast", j instanceof Error ? j.message : "Network scan failed", "error");
      } finally {
        v.value = !1;
      }
    }
    async function U(j) {
      try {
        await l(j), o("toast", `Worker '${j.name}' added`, "success"), _.value = !1, await C();
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to add worker", "error");
      }
    }
    async function I(j) {
      try {
        await l(j), o("toast", `Worker '${j.name}' added`, "success"), h.value = !1, await C();
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to add worker", "error");
      }
    }
    async function P(j) {
      p.value = j;
      try {
        await r(j), o("toast", `Worker '${j}' removed`, "success"), await C();
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to remove worker", "error");
      } finally {
        p.value = null;
      }
    }
    function M(j) {
      w.value = j;
    }
    function A() {
      w.value = null, o("deployed");
    }
    return at(() => {
      C();
    }), (j, E) => (n(), i("div", qE, [
      t("div", YE, [
        E[8] || (E[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", JE, [
          $(_e, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: S
          }, {
            default: g(() => [...E[6] || (E[6] = [
              b(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          $(_e, {
            variant: "secondary",
            size: "xs",
            onClick: E[0] || (E[0] = (L) => _.value = !0)
          }, {
            default: g(() => [...E[7] || (E[7] = [
              b(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", QE, [
        f.value && c.value.length === 0 ? (n(), i("div", XE, [...E[9] || (E[9] = [
          t("span", { class: "spinner" }, null, -1),
          b(" Loading workers... ", -1)
        ])])) : c.value.length === 0 ? (n(), i("div", ZE, [...E[10] || (E[10] = [
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
        ])])) : (n(), i("div", eT, [
          (n(!0), i(H, null, we(c.value, (L) => (n(), R(q6, {
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
        class: Pe(["scan-result", x.value.type])
      }, [
        t("span", tT, d(x.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", sT, d(x.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: E[1] || (E[1] = (L) => x.value = null)
        }, "×")
      ], 2)) : y("", !0),
      h.value ? (n(), R(TE, {
        key: 1,
        workers: m.value,
        onClose: E[2] || (E[2] = (L) => h.value = !1),
        onAdd: I
      }, null, 8, ["workers"])) : y("", !0),
      _.value ? (n(), R(cE, {
        key: 2,
        onClose: E[3] || (E[3] = (L) => _.value = !1),
        onAdd: U
      })) : y("", !0),
      w.value ? (n(), R(KE, {
        key: 3,
        worker: w.value,
        onClose: E[4] || (E[4] = (L) => w.value = null),
        onToast: E[5] || (E[5] = (L, ie) => o("toast", L, ie)),
        onDeployed: A
      }, null, 8, ["worker"])) : y("", !0)
    ]));
  }
}), nT = /* @__PURE__ */ xe(oT, [["__scopeId", "data-v-1637dead"]]), Ua = "ComfyGit.Deploy.GitHubPAT";
function au(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function aT(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function lT() {
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
    isRemoteHttps: aT
  };
}
const iT = { class: "settings-content" }, rT = { class: "settings-section" }, uT = {
  key: 0,
  class: "ssh-warning"
}, cT = { class: "form-row" }, dT = { class: "token-wrapper" }, mT = ["type"], fT = { class: "result-icon" }, vT = { class: "result-message" }, pT = { class: "token-actions" }, gT = /* @__PURE__ */ $e({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: a, setToken: l, clearToken: r, hasToken: u } = lT(), { getRemotes: c, testGitAuth: m } = ct(), f = k(""), v = k(!1), p = k(!1), _ = k(null), h = k(!1), w = O(() => u());
    at(async () => {
      var I;
      const U = a();
      U && (f.value = U);
      try {
        const M = (I = (await c()).remotes) == null ? void 0 : I.find((A) => A.name === "origin");
        M && au(M.url) && (h.value = !0);
      } catch {
      }
    });
    async function x() {
      if (f.value) {
        p.value = !0, _.value = null;
        try {
          const U = await m(f.value);
          _.value = {
            type: U.status === "success" ? "success" : "error",
            message: U.message
          };
        } catch (U) {
          _.value = {
            type: "error",
            message: U instanceof Error ? U.message : "Connection test failed"
          };
        } finally {
          p.value = !1;
        }
      }
    }
    function C() {
      f.value && (l(f.value), o("saved"), o("close"));
    }
    function S() {
      r(), f.value = "", _.value = null;
    }
    return (U, I) => (n(), R(Ct, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: I[2] || (I[2] = (P) => U.$emit("close"))
    }, {
      body: g(() => [
        t("div", iT, [
          t("div", rT, [
            I[8] || (I[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            I[9] || (I[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            h.value ? (n(), i("div", uT, [...I[3] || (I[3] = [
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
            t("div", cT, [
              I[4] || (I[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", dT, [
                nt(t("input", {
                  "onUpdate:modelValue": I[0] || (I[0] = (P) => f.value = P),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, mT), [
                  [pa, f.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: I[1] || (I[1] = (P) => v.value = !v.value)
                }, d(v.value ? "Hide" : "Show"), 1)
              ]),
              I[5] || (I[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            _.value ? (n(), i("div", {
              key: 1,
              class: Pe(["test-result", _.value.type])
            }, [
              t("span", fT, d(_.value.type === "success" ? "✓" : "✕"), 1),
              t("span", vT, d(_.value.message), 1)
            ], 2)) : y("", !0),
            t("div", pT, [
              $(_e, {
                variant: "ghost",
                size: "sm",
                loading: p.value,
                disabled: !f.value || p.value,
                onClick: x
              }, {
                default: g(() => [...I[6] || (I[6] = [
                  b(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              w.value ? (n(), R(_e, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: S
              }, {
                default: g(() => [...I[7] || (I[7] = [
                  b(" Clear ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ])
      ]),
      footer: g(() => [
        $(_e, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: C
        }, {
          default: g(() => [...I[10] || (I[10] = [
            b(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), hT = /* @__PURE__ */ xe(gT, [["__scopeId", "data-v-b21588ad"]]), yT = /* @__PURE__ */ $e({
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
      stopPolling: p
    } = ou(), _ = k(!1), h = k(!1), w = k("instances"), x = k(null), C = k(null), S = O(() => [
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
    async function U(j) {
      x.value = j.id;
      try {
        await c(j), o("toast", "Instance stopped", "success");
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to stop instance", "error");
      } finally {
        x.value = null;
      }
    }
    async function I(j) {
      x.value = j.id;
      try {
        await m(j), o("toast", "Instance starting...", "success");
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to start instance", "error");
      } finally {
        x.value = null;
      }
    }
    function P(j) {
      C.value = j;
    }
    async function M() {
      const j = C.value;
      if (j) {
        C.value = null, x.value = j.id;
        try {
          await f(j), o("toast", "Instance terminated", "success");
        } catch (E) {
          o("toast", E instanceof Error ? E.message : "Failed to terminate instance", "error");
        } finally {
          x.value = null;
        }
      }
    }
    async function A() {
      await u(), w.value = "instances";
    }
    return at(() => {
      u(), v();
    }), Zs(() => {
      p();
    }), (j, E) => (n(), i(H, null, [
      $(qt, null, {
        header: g(() => [
          $(Yt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: E[1] || (E[1] = (L) => _.value = !0)
          }, {
            actions: g(() => [
              $(_e, {
                variant: "ghost",
                size: "xs",
                onClick: E[0] || (E[0] = (L) => h.value = !0)
              }, {
                default: g(() => [...E[10] || (E[10] = [
                  b(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          $(Yr, {
            modelValue: w.value,
            "onUpdate:modelValue": E[2] || (E[2] = (L) => w.value = L),
            tabs: S.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: g(() => [
          w.value === "instances" ? (n(), R(L4, {
            key: 0,
            instances: Ze(a),
            "is-loading": Ze(l),
            "action-loading-id": x.value,
            onRefresh: Ze(u),
            onStop: U,
            onStart: I,
            onTerminate: P
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : y("", !0),
          w.value === "runpod" ? (n(), R(R6, {
            key: 1,
            onToast: E[3] || (E[3] = (L, ie) => o("toast", L, ie)),
            onNavigate: E[4] || (E[4] = (L) => o("navigate", L)),
            onDeployed: A
          })) : y("", !0),
          w.value === "custom" ? (n(), R(nT, {
            key: 2,
            onToast: E[5] || (E[5] = (L, ie) => o("toast", L, ie)),
            onDeployed: A
          })) : y("", !0)
        ]),
        _: 1
      }),
      C.value ? (n(), R(_l, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${C.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: M,
        onCancel: E[6] || (E[6] = (L) => C.value = null)
      }, null, 8, ["message"])) : y("", !0),
      $(hs, {
        show: _.value,
        title: "Deploy to Cloud",
        onClose: E[7] || (E[7] = (L) => _.value = !1)
      }, {
        content: g(() => [...E[11] || (E[11] = [
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
      h.value ? (n(), R(hT, {
        key: 1,
        onClose: E[8] || (E[8] = (L) => h.value = !1),
        onSaved: E[9] || (E[9] = (L) => o("toast", "GitHub token saved", "success"))
      })) : y("", !0)
    ], 64));
  }
}), wT = /* @__PURE__ */ xe(yT, [["__scopeId", "data-v-d4e32a10"]]), _T = { class: "header-info" }, kT = { class: "commit-hash" }, bT = {
  key: 0,
  class: "commit-refs"
}, $T = { class: "commit-message" }, CT = { class: "commit-date" }, xT = {
  key: 0,
  class: "loading"
}, ST = {
  key: 1,
  class: "changes-section"
}, IT = { class: "stats-row" }, ET = { class: "stat" }, TT = { class: "stat insertions" }, PT = { class: "stat deletions" }, RT = {
  key: 0,
  class: "change-group"
}, MT = {
  key: 1,
  class: "change-group"
}, DT = {
  key: 0,
  class: "version"
}, LT = {
  key: 2,
  class: "change-group"
}, NT = { class: "change-item" }, UT = /* @__PURE__ */ $e({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = ct(), a = k(null), l = k(!0), r = O(() => {
      if (!a.value) return !1;
      const c = a.value.changes.workflows;
      return c.added.length > 0 || c.modified.length > 0 || c.deleted.length > 0;
    }), u = O(() => {
      if (!a.value) return !1;
      const c = a.value.changes.nodes;
      return c.added.length > 0 || c.removed.length > 0;
    });
    return at(async () => {
      try {
        a.value = await o(s.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (c, m) => (n(), R(Ct, {
      size: "md",
      "show-close-button": !1,
      onClose: m[3] || (m[3] = (f) => c.$emit("close"))
    }, {
      header: g(() => {
        var f, v, p, _;
        return [
          t("div", _T, [
            m[4] || (m[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", kT, d(((f = a.value) == null ? void 0 : f.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (_ = (p = a.value) == null ? void 0 : p.refs) != null && _.length ? (n(), i("span", bT, [
              (n(!0), i(H, null, we(a.value.refs, (h) => (n(), i("span", {
                key: h,
                class: "ref-badge"
              }, d(h), 1))), 128))
            ])) : y("", !0)
          ]),
          $(Re, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (h) => c.$emit("close"))
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
          t("div", $T, d(((f = a.value) == null ? void 0 : f.message) || e.commit.message), 1),
          t("div", CT, d(((v = a.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (n(), i("div", xT, "Loading details...")) : a.value ? (n(), i("div", ST, [
            t("div", IT, [
              t("span", ET, d(a.value.stats.files_changed) + " files", 1),
              t("span", TT, "+" + d(a.value.stats.insertions), 1),
              t("span", PT, "-" + d(a.value.stats.deletions), 1)
            ]),
            r.value ? (n(), i("div", RT, [
              $(Ls, { variant: "section" }, {
                default: g(() => [...m[6] || (m[6] = [
                  b("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(H, null, we(a.value.changes.workflows.added, (p) => (n(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                m[7] || (m[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, d(p), 1)
              ]))), 128)),
              (n(!0), i(H, null, we(a.value.changes.workflows.modified, (p) => (n(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                m[8] || (m[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, d(p), 1)
              ]))), 128)),
              (n(!0), i(H, null, we(a.value.changes.workflows.deleted, (p) => (n(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                m[9] || (m[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, d(p), 1)
              ]))), 128))
            ])) : y("", !0),
            u.value ? (n(), i("div", MT, [
              $(Ls, { variant: "section" }, {
                default: g(() => [...m[10] || (m[10] = [
                  b("NODES", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(H, null, we(a.value.changes.nodes.added, (p) => (n(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                m[11] || (m[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, d(p.name), 1),
                p.version ? (n(), i("span", DT, "(" + d(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (n(!0), i(H, null, we(a.value.changes.nodes.removed, (p) => (n(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                m[12] || (m[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, d(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", LT, [
              $(Ls, { variant: "section" }, {
                default: g(() => [...m[13] || (m[13] = [
                  b("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", NT, [
                m[14] || (m[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, d(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: g(() => [
        $(Re, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (f) => c.$emit("createBranch", e.commit))
        }, {
          default: g(() => [...m[15] || (m[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        $(Re, {
          variant: "primary",
          onClick: m[2] || (m[2] = (f) => c.$emit("checkout", e.commit))
        }, {
          default: g(() => [...m[16] || (m[16] = [
            b(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), OT = /* @__PURE__ */ xe(UT, [["__scopeId", "data-v-d256ff6d"]]), AT = { class: "popover-header" }, zT = { class: "popover-body" }, VT = {
  key: 0,
  class: "changes-summary"
}, FT = {
  key: 0,
  class: "change-item"
}, BT = {
  key: 1,
  class: "change-item"
}, WT = {
  key: 2,
  class: "change-item"
}, GT = {
  key: 3,
  class: "change-item"
}, jT = {
  key: 4,
  class: "change-item"
}, HT = {
  key: 5,
  class: "change-item"
}, KT = {
  key: 1,
  class: "no-changes"
}, qT = {
  key: 2,
  class: "loading"
}, YT = {
  key: 3,
  class: "issues-error"
}, JT = { class: "error-header" }, QT = { class: "error-title" }, XT = { class: "issues-list" }, ZT = { class: "workflow-state" }, eP = { class: "message-section" }, tP = { class: "popover-footer" }, sP = {
  key: 1,
  class: "commit-popover"
}, oP = { class: "popover-header" }, nP = { class: "popover-body" }, aP = {
  key: 0,
  class: "changes-summary"
}, lP = {
  key: 0,
  class: "change-item"
}, iP = {
  key: 1,
  class: "change-item"
}, rP = {
  key: 2,
  class: "change-item"
}, uP = {
  key: 3,
  class: "change-item"
}, cP = {
  key: 4,
  class: "change-item"
}, dP = {
  key: 5,
  class: "change-item"
}, mP = {
  key: 1,
  class: "no-changes"
}, fP = {
  key: 2,
  class: "loading"
}, vP = {
  key: 3,
  class: "issues-error"
}, pP = { class: "error-header" }, gP = { class: "error-title" }, hP = { class: "issues-list" }, yP = { class: "workflow-state" }, wP = { class: "message-section" }, _P = { class: "popover-footer" }, kP = /* @__PURE__ */ $e({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = ct(), r = k(""), u = k(!1), c = k(!1), m = O(() => {
      if (!o.status) return !1;
      const w = o.status.workflows;
      return w.new.length > 0 || w.modified.length > 0 || w.deleted.length > 0 || o.status.has_changes;
    }), f = O(() => {
      if (!o.status) return !1;
      const w = o.status.workflows, x = o.status.git_changes;
      return w.new.length > 0 || w.modified.length > 0 || w.deleted.length > 0 || x.nodes_added.length > 0 || x.nodes_removed.length > 0;
    }), v = O(() => {
      var w;
      return (w = o.status) != null && w.workflows.analyzed ? o.status.workflows.analyzed.filter((x) => x.has_issues) : [];
    }), p = O(() => v.value.length > 0), _ = O(() => p.value && !c.value);
    async function h() {
      var w, x, C, S;
      if (!(p.value && !c.value) && !(!m.value || !r.value.trim() || u.value)) {
        u.value = !0;
        try {
          const U = await l(r.value.trim(), c.value);
          if (U.status === "success") {
            const I = `Committed: ${((w = U.summary) == null ? void 0 : w.new) || 0} new, ${((x = U.summary) == null ? void 0 : x.modified) || 0} modified, ${((C = U.summary) == null ? void 0 : C.deleted) || 0} deleted`;
            a("committed", { success: !0, message: I });
          } else if (U.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (U.status === "blocked") {
            const I = ((S = U.issues) == null ? void 0 : S.map((P) => `${P.name}: ${P.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${I}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: U.message || "Commit failed" });
        } catch (U) {
          a("committed", { success: !1, message: U instanceof Error ? U.message : "Commit failed" });
        } finally {
          u.value = !1;
        }
      }
    }
    return (w, x) => e.asModal ? (n(), R(Ot, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = (C) => a("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = ut(() => {
          }, ["stop"]))
        }, [
          t("div", AT, [
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
          t("div", zT, [
            e.status && m.value ? (n(), i("div", VT, [
              e.status.workflows.new.length ? (n(), i("div", FT, [
                x[12] || (x[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, d(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (n(), i("div", BT, [
                x[13] || (x[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, d(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (n(), i("div", WT, [
                x[14] || (x[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, d(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (n(), i("div", GT, [
                x[15] || (x[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, d(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (n(), i("div", jT, [
                x[16] || (x[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, d(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              f.value ? y("", !0) : (n(), i("div", HT, [...x[17] || (x[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (n(), i("div", KT, " No changes to commit ")) : (n(), i("div", qT, " Loading... ")),
            p.value ? (n(), i("div", YT, [
              t("div", JT, [
                x[18] || (x[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", QT, d(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", XT, [
                (n(!0), i(H, null, we(v.value, (C) => (n(), i("div", {
                  key: C.name,
                  class: "issue-item"
                }, [
                  t("strong", null, d(C.name), 1),
                  t("span", ZT, "(" + d(C.sync_state) + ")", 1),
                  b(": " + d(C.issue_summary), 1)
                ]))), 128))
              ]),
              $(ta, {
                modelValue: c.value,
                "onUpdate:modelValue": x[1] || (x[1] = (C) => c.value = C),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...x[19] || (x[19] = [
                  b(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            t("div", eP, [
              $(qs, {
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
          t("div", tP, [
            $(Re, {
              variant: "secondary",
              onClick: x[3] || (x[3] = (C) => a("close"))
            }, {
              default: g(() => [...x[20] || (x[20] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            $(Re, {
              variant: c.value ? "danger" : "primary",
              disabled: !m.value || !r.value.trim() || u.value || _.value,
              loading: u.value,
              onClick: h
            }, {
              default: g(() => [
                b(d(u.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (n(), i("div", sP, [
      t("div", oP, [
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
      t("div", nP, [
        e.status && m.value ? (n(), i("div", aP, [
          e.status.workflows.new.length ? (n(), i("div", lP, [
            x[23] || (x[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, d(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (n(), i("div", iP, [
            x[24] || (x[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, d(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", rP, [
            x[25] || (x[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, d(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", uP, [
            x[26] || (x[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, d(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", cP, [
            x[27] || (x[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, d(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          f.value ? y("", !0) : (n(), i("div", dP, [...x[28] || (x[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", mP, " No changes to commit ")) : (n(), i("div", fP, " Loading... ")),
        p.value ? (n(), i("div", vP, [
          t("div", pP, [
            x[29] || (x[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", gP, d(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", hP, [
            (n(!0), i(H, null, we(v.value, (C) => (n(), i("div", {
              key: C.name,
              class: "issue-item"
            }, [
              t("strong", null, d(C.name), 1),
              t("span", yP, "(" + d(C.sync_state) + ")", 1),
              b(": " + d(C.issue_summary), 1)
            ]))), 128))
          ]),
          $(ta, {
            modelValue: c.value,
            "onUpdate:modelValue": x[7] || (x[7] = (C) => c.value = C),
            class: "allow-issues-toggle"
          }, {
            default: g(() => [...x[30] || (x[30] = [
              b(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        t("div", wP, [
          $(qs, {
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
      t("div", _P, [
        $(Re, {
          variant: "secondary",
          onClick: x[9] || (x[9] = (C) => a("close"))
        }, {
          default: g(() => [...x[31] || (x[31] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        $(Re, {
          variant: c.value ? "danger" : "primary",
          disabled: !m.value || !r.value.trim() || u.value || _.value,
          loading: u.value,
          onClick: h
        }, {
          default: g(() => [
            b(d(u.value ? "Committing..." : c.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), lu = /* @__PURE__ */ xe(kP, [["__scopeId", "data-v-5f897631"]]), bP = { class: "modal-header" }, $P = { class: "modal-body" }, CP = { class: "switch-message" }, xP = { class: "switch-details" }, SP = { class: "modal-actions" }, IP = /* @__PURE__ */ $e({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), R(Ot, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = ut(() => {
          }, ["stop"]))
        }, [
          t("div", bP, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", $P, [
            t("p", CP, [
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
            t("p", xP, ' Your current work will be preserved. You can switch back to "' + d(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", SP, [
            $(_e, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            $(_e, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
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
}), EP = /* @__PURE__ */ xe(IP, [["__scopeId", "data-v-e9c5253e"]]), TP = {
  key: 0,
  class: "modal-overlay"
}, PP = { class: "modal-content" }, RP = { class: "modal-body" }, MP = { class: "progress-info" }, DP = { class: "progress-percentage" }, LP = { class: "progress-state" }, NP = { class: "switch-steps" }, UP = { class: "step-icon" }, OP = { class: "step-label" }, AP = /* @__PURE__ */ $e({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const s = e, o = O(() => {
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
    }), a = O(() => s.state === "complete" ? "success" : s.state === "critical_failure" || s.state === "rolled_back" ? "error" : "default"), l = O(() => {
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
    return (r, u) => (n(), R(Ot, { to: "body" }, [
      e.show ? (n(), i("div", TP, [
        t("div", PP, [
          u[1] || (u[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", RP, [
            $(ga, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            t("div", MP, [
              t("div", DP, d(e.progress) + "%", 1),
              t("div", LP, d(o.value), 1)
            ]),
            t("div", NP, [
              (n(!0), i(H, null, we(l.value, (c) => (n(), i("div", {
                key: c.state,
                class: Pe(["switch-step", c.status])
              }, [
                t("span", UP, d(c.icon), 1),
                t("span", OP, d(c.label), 1)
              ], 2))), 128))
            ]),
            u[0] || (u[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), zP = /* @__PURE__ */ xe(AP, [["__scopeId", "data-v-768a5078"]]), VP = { class: "modal-header" }, FP = { class: "modal-body" }, BP = {
  key: 0,
  class: "node-section"
}, WP = { class: "node-list" }, GP = {
  key: 1,
  class: "node-section"
}, jP = { class: "node-list" }, HP = { class: "modal-actions" }, KP = /* @__PURE__ */ $e({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), R(Ot, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = ut(() => {
          }, ["stop"]))
        }, [
          t("div", VP, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", FP, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", BP, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", WP, [
                (n(!0), i(H, null, we(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + d(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", GP, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", jP, [
                (n(!0), i(H, null, we(e.mismatchDetails.extra_nodes, (a) => (n(), i("div", {
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
          t("div", HP, [
            $(_e, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: g(() => [...o[10] || (o[10] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            $(_e, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
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
}), qP = /* @__PURE__ */ xe(KP, [["__scopeId", "data-v-7cad7518"]]), YP = [
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
], Nn = "v0.0.24", JP = "Akatz", QP = { class: "social-buttons" }, XP = ["title", "aria-label", "onClick"], ZP = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, e7 = ["d"], t7 = ["title", "aria-label", "onClick"], s7 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, o7 = ["d"], n7 = /* @__PURE__ */ $e({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", QP, [
      (n(!0), i(H, null, we(Ze(YP), (l) => (n(), i(H, {
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
          (n(), i("svg", ZP, [
            t("path", {
              d: l.iconPath
            }, null, 8, e7)
          ]))
        ], 8, XP)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          (n(), i("svg", s7, [
            t("path", {
              d: l.iconPath
            }, null, 8, o7)
          ]))
        ], 8, t7))
      ], 64))), 128))
    ]));
  }
}), iu = /* @__PURE__ */ xe(n7, [["__scopeId", "data-v-4f846342"]]), a7 = { class: "footer-info" }, l7 = ["title"], i7 = {
  key: 0,
  class: "dev-badge"
}, r7 = { class: "made-by" }, u7 = /* @__PURE__ */ $e({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: s } = ct(), o = k(null), a = k(null), l = k(null), r = O(() => o.value === "development"), u = O(() => {
      var m;
      if (!r.value) return Nn;
      const c = [a.value, (m = l.value) == null ? void 0 : m.slice(0, 7)].filter(Boolean).join(" @ ");
      return c ? `${Nn} (${c})` : `${Nn} (development)`;
    });
    return at(async () => {
      try {
        const c = await s();
        o.value = c.manager_source ?? null, a.value = c.manager_branch ?? null, l.value = c.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (c, m) => (n(), i("div", a7, [
      t("span", {
        class: "version",
        title: u.value
      }, [
        b(d(Ze(Nn)) + " ", 1),
        r.value ? (n(), i("span", i7, "dev")) : y("", !0)
      ], 8, l7),
      t("span", r7, [
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
        b(" by " + d(Ze(JP)), 1)
      ])
    ]));
  }
}), ru = /* @__PURE__ */ xe(u7, [["__scopeId", "data-v-4fa265b3"]]), c7 = /* @__PURE__ */ $e({
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
    return (r, u) => (n(), R(Ct, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: u[1] || (u[1] = (c) => r.$emit("close"))
    }, {
      body: g(() => [
        $(qr, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: g(() => {
        var c;
        return [
          $(Re, {
            variant: "primary",
            disabled: !((c = o.value) != null && c.hasChanges),
            onClick: a
          }, {
            default: g(() => [...u[2] || (u[2] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          $(Re, {
            variant: "secondary",
            onClick: u[0] || (u[0] = (m) => r.$emit("close"))
          }, {
            default: g(() => [...u[3] || (u[3] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), d7 = /* @__PURE__ */ xe(c7, [["__scopeId", "data-v-fac00ae7"]]), m7 = { class: "header-actions" }, f7 = {
  key: 0,
  class: "wizard-step"
}, v7 = { class: "form-field" }, p7 = ["placeholder"], g7 = {
  key: 0,
  class: "form-error"
}, h7 = { class: "form-field form-field--checkbox" }, y7 = { class: "form-checkbox" }, w7 = {
  key: 0,
  class: "form-field"
}, _7 = ["placeholder"], k7 = {
  key: 0,
  class: "form-info"
}, b7 = {
  key: 1,
  class: "form-suggestion"
}, $7 = {
  key: 2,
  class: "form-error"
}, C7 = {
  key: 3,
  class: "form-info"
}, x7 = {
  key: 1,
  class: "wizard-step"
}, S7 = {
  key: 0,
  class: "progress-check-loading"
}, I7 = {
  key: 0,
  class: "cli-warning"
}, E7 = { class: "cli-warning-header" }, T7 = {
  key: 1,
  class: "env-landing"
}, P7 = { class: "env-list" }, R7 = ["value"], M7 = { class: "env-name" }, D7 = {
  key: 2,
  class: "env-create"
}, L7 = { class: "form-field" }, N7 = { class: "form-field" }, U7 = ["value"], O7 = { class: "form-field" }, A7 = ["disabled"], z7 = ["value"], V7 = { class: "form-field" }, F7 = ["value"], B7 = { class: "form-field form-field--checkbox" }, W7 = { class: "form-checkbox" }, G7 = {
  key: 0,
  class: "form-error"
}, j7 = {
  key: 1,
  class: "env-creating"
}, H7 = { class: "creating-intro" }, K7 = {
  key: 3,
  class: "env-import"
}, q7 = { class: "wizard-footer" }, Y7 = { class: "wizard-footer-actions" }, xo = 10, J7 = 600 * 1e3, gi = 1800 * 1e3, Q7 = /* @__PURE__ */ $e({
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
    } = ct(), p = k(o.initialStep || 1), _ = k(null), h = k("landing"), w = k(!1), x = k(!1), C = k(!1), S = k(!1), U = k(null), I = k(o.initialStep === 2), P = k(o.defaultPath), M = k(!!o.detectedModelsDir), A = k(o.detectedModelsDir || ""), j = k(null), E = k(null), L = k(null), ie = k(null), le = k("my-new-env"), ne = k(Xr), te = k("latest"), K = k(Zr), X = k(!0), de = k(null), Le = k(null), ae = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), ye = k(!1), fe = k(!1), Oe = k(!1), se = k({ progress: 0, message: "" }), ce = k({ progress: 0, message: "" }), Y = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], B = k(0), oe = k(null), G = k(0), N = k(null), me = O(() => {
      var V, F;
      const be = (V = P.value) == null ? void 0 : V.trim(), J = !j.value, Be = !M.value || !E.value && ((F = A.value) == null ? void 0 : F.trim());
      return be && J && Be;
    }), ze = O(() => {
      var be;
      return (be = le.value) == null ? void 0 : be.trim();
    }), Ve = O(() => !!(p.value === 2 || Le.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), W = O(() => Le.value || o.workspacePath || null);
    async function Q() {
      var be;
      if (j.value = null, !!((be = P.value) != null && be.trim()))
        try {
          const J = await u({ path: P.value, type: "workspace" });
          J.valid || (j.value = J.error || "Invalid path");
        } catch (J) {
          j.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function ge() {
      var be;
      if (E.value = null, L.value = null, ie.value = null, !!((be = A.value) != null && be.trim()))
        try {
          const J = await u({ path: A.value, type: "models" });
          if (J.valid)
            ie.value = J.model_count ?? null;
          else if (E.value = J.error || "Invalid path", J.suggestion) {
            L.value = J.suggestion, A.value = J.suggestion, E.value = null;
            const Be = await u({ path: J.suggestion, type: "models" });
            Be.valid && (ie.value = Be.model_count ?? null);
          }
        } catch (J) {
          E.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function Ee() {
      var be, J, Be, V, F;
      if (j.value = null, E.value = null, await Q(), (be = j.value) != null && be.includes("already exists")) {
        j.value = null, Le.value = ((J = P.value) == null ? void 0 : J.trim()) || o.defaultPath, p.value = 2, Ie();
        return;
      }
      if (!j.value && !(M.value && ((Be = A.value) != null && Be.trim()) && (await ge(), E.value))) {
        fe.value = !0;
        try {
          await l({
            workspace_path: ((V = P.value) == null ? void 0 : V.trim()) || o.defaultPath,
            models_directory: M.value && ((F = A.value) == null ? void 0 : F.trim()) || null
          }), B.value = 0, oe.value = Date.now();
          const q = setInterval(async () => {
            var ve;
            if (oe.value && Date.now() - oe.value > J7) {
              clearInterval(q), fe.value = !1, j.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const z = await r();
              if (B.value = 0, z.state === "idle" && fe.value) {
                clearInterval(q), fe.value = !1, j.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              se.value = { progress: z.progress, message: z.message }, z.state === "complete" ? (clearInterval(q), fe.value = !1, Le.value = ((ve = P.value) == null ? void 0 : ve.trim()) || o.defaultPath, p.value = 2, Ie()) : z.state === "error" && (clearInterval(q), fe.value = !1, j.value = z.error || "Workspace creation failed");
            } catch (z) {
              B.value++, console.warn(`Polling failure ${B.value}/${xo}:`, z), B.value >= xo && (clearInterval(q), fe.value = !1, j.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (q) {
          fe.value = !1, j.value = q instanceof Error ? q.message : "Failed to create workspace";
        }
      }
    }
    async function Se() {
      Oe.value = !0, de.value = null;
      try {
        const be = {
          name: le.value.trim() || "my-new-env",
          python_version: ne.value,
          comfyui_version: te.value,
          torch_backend: K.value,
          switch_after: X.value,
          workspace_path: Le.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await c(be)).status === "started") {
          G.value = 0, N.value = Date.now();
          const Be = setInterval(async () => {
            if (N.value && Date.now() - N.value > gi) {
              clearInterval(Be), Oe.value = !1, de.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const V = await m();
              if (G.value = 0, V.state === "idle" && Oe.value) {
                clearInterval(Be), Oe.value = !1, de.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ce.value = {
                progress: V.progress ?? 0,
                message: V.message,
                phase: V.phase
              }, V.state === "complete") {
                clearInterval(Be), Oe.value = !1;
                const F = V.environment_name || be.name;
                X.value ? a("complete", F, Le.value) : (h.value = "landing", a("environment-created-no-switch", F));
              } else V.state === "error" && (clearInterval(Be), Oe.value = !1, de.value = V.error || "Environment creation failed");
            } catch (V) {
              G.value++, console.warn(`Polling failure ${G.value}/${xo}:`, V), G.value >= xo && (clearInterval(Be), Oe.value = !1, de.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (be) {
        Oe.value = !1, de.value = be instanceof Error ? be.message : "Unknown error";
      }
    }
    async function Ie() {
      ye.value = !0;
      try {
        ae.value = await v();
      } catch (be) {
        console.error("Failed to load ComfyUI releases:", be);
      } finally {
        ye.value = !1;
      }
    }
    function Ne() {
      _.value && a("switch-environment", _.value, Le.value);
    }
    function Ce() {
      h.value === "create" || h.value === "import" ? h.value = "landing" : p.value === 2 && o.setupState === "no_workspace" && (p.value = 1);
    }
    function Me(be, J) {
      x.value = !1, J ? a("complete", be, Le.value) : (a("environment-created-no-switch", be), h.value = "landing");
    }
    function ke() {
    }
    at(async () => {
      if (o.detectedModelsDir && (A.value = o.detectedModelsDir), o.workspacePath && (Le.value = o.workspacePath), p.value === 2) {
        Ie();
        const be = setTimeout(() => {
          I.value = !1;
        }, 3e3);
        await Ge(), clearTimeout(be), I.value = !1;
      }
    });
    async function Ge() {
      try {
        const be = await m();
        if (console.log("[ComfyGit] Create progress check:", be.state, be), be.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", be.environment_name), h.value = "create", Oe.value = !0, le.value = be.environment_name || "my-new-env", ce.value = {
            progress: be.progress ?? 0,
            message: be.message,
            phase: be.phase
          }, Ue();
          return;
        }
      } catch (be) {
        console.log("[ComfyGit] Create progress check failed:", be);
      }
      try {
        const be = await f();
        console.log("[ComfyGit] Import progress check:", be.state, be), be.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", be.environment_name), U.value = {
          message: be.message || "Importing...",
          phase: be.phase || "",
          progress: be.progress ?? 0,
          environmentName: be.environment_name || ""
        }, S.value = !0, h.value = "import", x.value = !0);
      } catch (be) {
        console.log("[ComfyGit] Import progress check failed:", be);
      }
    }
    async function Ue() {
      G.value = 0, N.value = Date.now();
      let be = null;
      const J = async () => {
        if (N.value && Date.now() - N.value > gi)
          return be && clearInterval(be), Oe.value = !1, de.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const V = await m();
          if (G.value = 0, V.state === "idle" && Oe.value)
            return be && clearInterval(be), Oe.value = !1, de.value = "Environment creation was interrupted. Please try again.", !1;
          if (ce.value = {
            progress: V.progress ?? 0,
            message: V.message,
            phase: V.phase
          }, V.state === "complete") {
            be && clearInterval(be), Oe.value = !1;
            const F = V.environment_name || le.value;
            return a("complete", F, Le.value), !1;
          } else if (V.state === "error")
            return be && clearInterval(be), Oe.value = !1, de.value = V.error || "Environment creation failed", !1;
          return !0;
        } catch (V) {
          return G.value++, console.warn(`Polling failure ${G.value}/${xo}:`, V), G.value >= xo ? (be && clearInterval(be), Oe.value = !1, de.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await J() && (be = setInterval(async () => {
        !await J() && be && clearInterval(be);
      }, 2e3));
    }
    return (be, J) => (n(), i(H, null, [
      $(Ct, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: J[15] || (J[15] = (Be) => be.$emit("close"))
      }, {
        header: g(() => [
          J[20] || (J[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", m7, [
            $(iu),
            J[19] || (J[19] = t("span", { class: "header-divider" }, null, -1)),
            Ve.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: J[0] || (J[0] = (Be) => w.value = !0)
            }, [...J[17] || (J[17] = [
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
              onClick: J[1] || (J[1] = (Be) => be.$emit("close")),
              title: "Close"
            }, [...J[18] || (J[18] = [
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
          var Be;
          return [
            p.value === 1 ? (n(), i("div", f7, [
              J[24] || (J[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", v7, [
                J[21] || (J[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                nt(t("input", {
                  "onUpdate:modelValue": J[2] || (J[2] = (V) => P.value = V),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, p7), [
                  [ts, P.value]
                ]),
                j.value ? (n(), i("p", g7, d(j.value), 1)) : y("", !0)
              ]),
              t("div", h7, [
                t("label", y7, [
                  nt(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": J[3] || (J[3] = (V) => M.value = V)
                  }, null, 512), [
                    [yn, M.value]
                  ]),
                  J[22] || (J[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              M.value ? (n(), i("div", w7, [
                J[23] || (J[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                nt(t("input", {
                  "onUpdate:modelValue": J[4] || (J[4] = (V) => A.value = V),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, _7), [
                  [ts, A.value]
                ]),
                e.detectedModelsDir && !A.value ? (n(), i("p", k7, " Detected: " + d(e.detectedModelsDir), 1)) : y("", !0),
                L.value ? (n(), i("p", b7, " Did you mean: " + d(L.value), 1)) : y("", !0),
                E.value ? (n(), i("p", $7, d(E.value), 1)) : y("", !0),
                ie.value !== null && !E.value ? (n(), i("p", C7, " Found " + d(ie.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              fe.value ? (n(), R(ea, {
                key: 1,
                progress: se.value.progress,
                message: se.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (n(), i("div", x7, [
              I.value ? (n(), i("div", S7, [...J[25] || (J[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(H, { key: 1 }, [
                !o.cliInstalled && !C.value ? (n(), i("div", I7, [
                  t("div", E7, [
                    J[27] || (J[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    J[28] || (J[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: J[5] || (J[5] = (V) => C.value = !0),
                      title: "Dismiss"
                    }, [...J[26] || (J[26] = [
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
                  J[29] || (J[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  J[30] || (J[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                h.value === "landing" ? (n(), i("div", T7, [
                  J[34] || (J[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: J[6] || (J[6] = (V) => h.value = "create")
                  }, [...J[31] || (J[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: J[7] || (J[7] = (V) => {
                      S.value = !1, h.value = "import";
                    })
                  }, [...J[32] || (J[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Be = o.existingEnvironments) != null && Be.length ? (n(), i(H, { key: 0 }, [
                    J[33] || (J[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", P7, [
                      (n(!0), i(H, null, we(o.existingEnvironments, (V) => (n(), i("label", {
                        key: V,
                        class: Pe(["env-option", { selected: _.value === V }])
                      }, [
                        nt(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: V,
                          "onUpdate:modelValue": J[8] || (J[8] = (F) => _.value = F)
                        }, null, 8, R7), [
                          [ds, _.value]
                        ]),
                        t("span", M7, d(V), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : h.value === "create" ? (n(), i("div", D7, [
                  Oe.value ? (n(), i("div", j7, [
                    t("p", H7, [
                      J[41] || (J[41] = b(" Creating environment ", -1)),
                      t("strong", null, d(le.value), 1),
                      J[42] || (J[42] = b("... ", -1))
                    ]),
                    $(ea, {
                      progress: ce.value.progress,
                      message: ce.value.message,
                      "current-phase": ce.value.phase,
                      "show-steps": !0,
                      steps: Y
                    }, null, 8, ["progress", "message", "current-phase"]),
                    J[43] || (J[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(H, { key: 0 }, [
                    J[40] || (J[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", L7, [
                      J[35] || (J[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      nt(t("input", {
                        "onUpdate:modelValue": J[9] || (J[9] = (V) => le.value = V),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [ts, le.value]
                      ])
                    ]),
                    t("div", N7, [
                      J[36] || (J[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      nt(t("select", {
                        "onUpdate:modelValue": J[10] || (J[10] = (V) => ne.value = V),
                        class: "form-select"
                      }, [
                        (n(!0), i(H, null, we(Ze(Qr), (V) => (n(), i("option", {
                          key: V,
                          value: V
                        }, d(V), 9, U7))), 128))
                      ], 512), [
                        [Ss, ne.value]
                      ])
                    ]),
                    t("div", O7, [
                      J[37] || (J[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      nt(t("select", {
                        "onUpdate:modelValue": J[11] || (J[11] = (V) => te.value = V),
                        class: "form-select",
                        disabled: ye.value
                      }, [
                        (n(!0), i(H, null, we(ae.value, (V) => (n(), i("option", {
                          key: V.tag_name,
                          value: V.tag_name
                        }, d(V.name), 9, z7))), 128))
                      ], 8, A7), [
                        [Ss, te.value]
                      ])
                    ]),
                    t("div", V7, [
                      J[38] || (J[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      nt(t("select", {
                        "onUpdate:modelValue": J[12] || (J[12] = (V) => K.value = V),
                        class: "form-select"
                      }, [
                        (n(!0), i(H, null, we(Ze(kl), (V) => (n(), i("option", {
                          key: V,
                          value: V
                        }, d(V) + d(V === "auto" ? " (detect GPU)" : ""), 9, F7))), 128))
                      ], 512), [
                        [Ss, K.value]
                      ])
                    ]),
                    t("div", B7, [
                      t("label", W7, [
                        nt(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": J[13] || (J[13] = (V) => X.value = V)
                        }, null, 512), [
                          [yn, X.value]
                        ]),
                        J[39] || (J[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    de.value ? (n(), i("div", G7, d(de.value), 1)) : y("", !0)
                  ], 64))
                ])) : h.value === "import" ? (n(), i("div", K7, [
                  $(su, {
                    "workspace-path": Le.value,
                    "resume-import": S.value,
                    "initial-progress": U.value ?? void 0,
                    onImportComplete: Me,
                    onImportStarted: J[14] || (J[14] = (V) => x.value = !0),
                    onSourceCleared: ke
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: g(() => [
          t("div", q7, [
            $(ru),
            t("div", Y7, [
              p.value === 1 ? (n(), R(Re, {
                key: 0,
                variant: "primary",
                disabled: !me.value || fe.value,
                onClick: Ee
              }, {
                default: g(() => [
                  b(d(fe.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (n(), i(H, { key: 1 }, [
                !Oe.value && !x.value && (h.value !== "landing" || o.setupState === "no_workspace" && !Le.value) ? (n(), R(Re, {
                  key: 0,
                  variant: "secondary",
                  onClick: Ce
                }, {
                  default: g(() => [...J[44] || (J[44] = [
                    b(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                h.value === "create" ? (n(), R(Re, {
                  key: 1,
                  variant: "primary",
                  disabled: !ze.value || Oe.value,
                  onClick: Se
                }, {
                  default: g(() => [
                    b(d(Oe.value ? "Creating..." : X.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                h.value === "landing" && _.value ? (n(), R(Re, {
                  key: 2,
                  variant: "primary",
                  onClick: Ne
                }, {
                  default: g(() => [
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
      w.value ? (n(), R(d7, {
        key: 0,
        "workspace-path": W.value,
        onClose: J[16] || (J[16] = (Be) => w.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), X7 = /* @__PURE__ */ xe(Q7, [["__scopeId", "data-v-9a9aadc0"]]), Z7 = { class: "update-banner" }, eR = { class: "update-banner__left" }, tR = { class: "update-banner__title" }, sR = {
  key: 0,
  class: "update-banner__summary"
}, oR = { class: "update-banner__actions" }, nR = ["disabled"], aR = ["disabled"], lR = ["disabled"], iR = /* @__PURE__ */ $e({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", Z7, [
      t("div", eR, [
        t("div", tR, " ComfyGit Manager v" + d(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (n(), i("div", sR, d(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      t("div", oR, [
        t("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, d(e.updating ? "Updating…" : "Update"), 9, nR),
        e.info.release_url ? (n(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, aR)) : y("", !0),
        t("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, lR)
      ])
    ]));
  }
}), rR = /* @__PURE__ */ xe(iR, [["__scopeId", "data-v-49562c5c"]]), uu = "ComfyGit.UpdateNotice.DismissedVersion";
function uR() {
  try {
    return localStorage.getItem(uu);
  } catch {
    return null;
  }
}
function cR(e) {
  try {
    localStorage.setItem(uu, e);
  } catch {
  }
}
function dR(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : uR() !== e.latest_version;
}
const mR = { class: "comfygit-panel" }, fR = { class: "panel-header" }, vR = { class: "header-left" }, pR = {
  key: 0,
  class: "header-info"
}, gR = { class: "header-actions" }, hR = { class: "env-switcher" }, yR = {
  key: 0,
  class: "header-info"
}, wR = { class: "branch-name" }, _R = { class: "panel-main" }, kR = { class: "sidebar" }, bR = { class: "sidebar-content" }, $R = { class: "sidebar-section" }, CR = { class: "sidebar-section" }, xR = { class: "sidebar-section" }, SR = {
  key: 0,
  class: "sidebar-badge"
}, IR = { class: "sidebar-footer" }, ER = { class: "content-area" }, TR = {
  key: 0,
  class: "error-message"
}, PR = {
  key: 1,
  class: "loading"
}, RR = { class: "dialog-content env-selector-dialog" }, MR = { class: "dialog-header" }, DR = { class: "dialog-body" }, LR = { class: "env-list" }, NR = { class: "env-info" }, UR = { class: "env-name-row" }, OR = { class: "env-indicator" }, AR = { class: "env-name" }, zR = {
  key: 0,
  class: "env-branch"
}, VR = {
  key: 1,
  class: "current-label"
}, FR = { class: "env-stats" }, BR = ["onClick"], WR = { class: "toast-container" }, GR = { class: "toast-message" }, hi = "ComfyGit.LastView", yi = "ComfyGit.LastSection", jR = /* @__PURE__ */ $e({
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
      getEnvironments: p,
      switchEnvironment: _,
      getSwitchProgress: h,
      deleteEnvironment: w,
      syncEnvironmentManually: x,
      repairWorkflowModels: C,
      getSetupStatus: S,
      getUpdateCheck: U,
      updateManager: I
    } = ct(), P = gp(), { liveInstanceCount: M } = ou({ autoStart: !0 }), A = k(null), j = k([]), E = k([]), L = k([]), ie = O(() => L.value.find((he) => he.is_current)), le = k(null), ne = k(!1), te = k(1), K = O(() => {
      var he;
      return ((he = le.value) == null ? void 0 : he.state) || "managed";
    }), X = k(!1), de = k(null), Le = k(null), ae = k(!1), ye = k(null), fe = k(!1), Oe = k(!1), se = O(() => !fe.value && dR(ye.value)), ce = k(null), Y = k(null), B = k(null), oe = k(!1), G = k(!1), N = k(""), me = k(null), ze = k({ state: "idle", progress: 0, message: "" });
    let Ve = null, W = null;
    const Q = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ge = o.initialView ? Q[o.initialView] : null, Ee = [
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
    ], Se = ["this-env", "all-envs", "sharing"];
    function Ie() {
      try {
        const he = sessionStorage.getItem(hi), ee = sessionStorage.getItem(yi);
        if (he && ee && Ee.includes(he) && Se.includes(ee))
          return { view: he, section: ee };
      } catch {
      }
      return null;
    }
    const Ne = Ie(), Ce = k((ge == null ? void 0 : ge.view) ?? (Ne == null ? void 0 : Ne.view) ?? "status"), Me = k((ge == null ? void 0 : ge.section) ?? (Ne == null ? void 0 : Ne.section) ?? "this-env");
    function ke(he, ee) {
      Ce.value = he, Me.value = ee;
      try {
        sessionStorage.setItem(hi, he), sessionStorage.setItem(yi, ee);
      } catch {
      }
    }
    function Ge(he) {
      const Ke = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[he];
      Ke && ke(Ke.view, Ke.section);
    }
    function Ue() {
      ke("branches", "this-env");
    }
    function be() {
      a("close"), setTimeout(() => {
        var ee;
        const he = document.querySelectorAll("button.comfyui-button");
        for (const Ke of he)
          if (((ee = Ke.textContent) == null ? void 0 : ee.trim()) === "Manager") {
            Ke.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const J = k(null), Be = k(!1), V = k(!1), F = k([]);
    let q = 0;
    function ve(he, ee = "info", Ke = 3e3) {
      const Qe = ++q;
      return F.value.push({ id: Qe, message: he, type: ee }), Ke > 0 && setTimeout(() => {
        F.value = F.value.filter((yt) => yt.id !== Qe);
      }, Ke), Qe;
    }
    function z(he) {
      F.value = F.value.filter((ee) => ee.id !== he);
    }
    function re(he, ee) {
      ve(he, ee);
    }
    async function ue() {
      ye.value = null, fe.value = !1;
      try {
        ye.value = await U();
      } catch {
      }
    }
    function Fe() {
      var ee;
      const he = (ee = ye.value) == null ? void 0 : ee.release_url;
      if (he)
        try {
          window.open(he, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function Ae() {
      var ee;
      const he = (ee = ye.value) == null ? void 0 : ee.latest_version;
      he && cR(he), fe.value = !0;
    }
    async function We() {
      var ee, Ke;
      if (Oe.value) return;
      Oe.value = !0;
      const he = ve("Updating comfygit-manager...", "info", 0);
      try {
        const Qe = await I();
        if (z(he), Qe.status !== "success") {
          if (ve(Qe.message || "Update failed", "error"), Qe.manual_instructions) {
            const yt = Qe.manual_instructions.split(`
`).map((Pt) => Pt.trim()).filter(Boolean);
            J.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: yt,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                J.value = null;
              }
            };
          }
          return;
        }
        if (ve(Qe.message || "Update complete", "success"), Ae(), Qe.restart_required) {
          pe();
          try {
            await ((Ke = (ee = window.app) == null ? void 0 : ee.api) == null ? void 0 : Ke.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Qe) {
        z(he);
        const yt = Qe instanceof Error ? Qe.message : "Update failed";
        ve(yt, "error");
      } finally {
        Oe.value = !1;
      }
    }
    const Xe = O(() => {
      if (!A.value) return "neutral";
      const he = A.value.workflows, ee = he.new.length > 0 || he.modified.length > 0 || he.deleted.length > 0 || A.value.has_changes;
      return A.value.comparison.is_synced ? ee ? "warning" : "success" : "error";
    });
    O(() => A.value ? Xe.value === "success" ? "All synced" : Xe.value === "warning" ? "Uncommitted changes" : Xe.value === "error" ? "Not synced" : "" : "");
    async function qe() {
      X.value = !0, de.value = null;
      try {
        const [he, ee, Ke, Qe] = await Promise.all([
          l(!0),
          r(),
          u(),
          p()
        ]);
        A.value = he, j.value = ee.commits, E.value = Ke.branches, L.value = Qe, a("statusUpdate", he), ce.value && await ce.value.loadWorkflows(!0);
      } catch (he) {
        de.value = he instanceof Error ? he.message : "Failed to load status", A.value = null, j.value = [], E.value = [];
      } finally {
        X.value = !1;
      }
    }
    function it(he) {
      Le.value = he;
    }
    async function lt(he) {
      var Ke;
      Le.value = null;
      const ee = A.value && (A.value.workflows.new.length > 0 || A.value.workflows.modified.length > 0 || A.value.workflows.deleted.length > 0 || A.value.has_changes);
      J.value = {
        title: ee ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: ee ? "You have uncommitted changes that will be lost." : `Checkout commit ${he.short_hash || ((Ke = he.hash) == null ? void 0 : Ke.slice(0, 7))}?`,
        details: ee ? xn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: ee ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: ee,
        onConfirm: async () => {
          var Pt;
          J.value = null, pe();
          const Qe = ve(`Checking out ${he.short_hash || ((Pt = he.hash) == null ? void 0 : Pt.slice(0, 7))}...`, "info", 0), yt = await c(he.hash, ee);
          z(Qe), yt.status === "success" ? ve("Restarting ComfyUI...", "success") : ve(yt.message || "Checkout failed", "error");
        }
      };
    }
    async function dt(he) {
      const ee = A.value && (A.value.workflows.new.length > 0 || A.value.workflows.modified.length > 0 || A.value.workflows.deleted.length > 0 || A.value.has_changes);
      J.value = {
        title: ee ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: ee ? "You have uncommitted changes." : `Switch to branch "${he}"?`,
        details: ee ? xn() : void 0,
        warning: ee ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: ee ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          J.value = null, pe();
          const Ke = ve(`Switching to ${he}...`, "info", 0), Qe = await f(he, ee);
          z(Ke), Qe.status === "success" ? ve("Restarting ComfyUI...", "success") : ve(Qe.message || "Branch switch failed", "error");
        }
      };
    }
    async function Et(he) {
      const ee = ve(`Creating branch ${he}...`, "info", 0), Ke = await m(he);
      z(ee), Ke.status === "success" ? (ve(`Branch "${he}" created`, "success"), await qe()) : ve(Ke.message || "Failed to create branch", "error");
    }
    async function Wt(he, ee = !1) {
      const Ke = async (Qe) => {
        var Pt;
        const yt = ve(`Deleting branch ${he}...`, "info", 0);
        try {
          const rs = await v(he, Qe);
          z(yt), rs.status === "success" ? (ve(`Branch "${he}" deleted`, "success"), await qe()) : (Pt = rs.message) != null && Pt.includes("not fully merged") ? J.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${he}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              J.value = null, await Ke(!0);
            }
          } : ve(rs.message || "Failed to delete branch", "error");
        } catch (rs) {
          z(yt);
          const to = rs instanceof Error ? rs.message : "Failed to delete branch";
          to.includes("not fully merged") ? J.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${he}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              J.value = null, await Ke(!0);
            }
          } : ve(to, "error");
        }
      };
      J.value = {
        title: "Delete Branch",
        message: `Delete branch "${he}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          J.value = null, await Ke(ee);
        }
      };
    }
    async function Rt(he) {
      Le.value = null;
      const ee = prompt("Enter branch name:");
      if (ee) {
        const Ke = ve(`Creating branch ${ee}...`, "info", 0), Qe = await m(ee, he.hash);
        z(Ke), Qe.status === "success" ? (ve(`Branch "${ee}" created from ${he.short_hash}`, "success"), await qe()) : ve(Qe.message || "Failed to create branch", "error");
      }
    }
    function pe() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function T() {
      J.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var he;
          J.value = null, pe(), ve("Restarting environment...", "info");
          try {
            (he = window.app) != null && he.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function D() {
      J.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var he;
          J.value = null, ve("Stopping environment...", "info");
          try {
            (he = window.app) != null && he.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function De(he, ee) {
      ae.value = !1, N.value = he, me.value = ee || null, oe.value = !0;
    }
    async function tt() {
      oe.value = !1, G.value = !0, pe(), ze.value = {
        progress: 10,
        state: pt(10),
        message: st(10)
      };
      try {
        await _(N.value, me.value || void 0), xt(), je();
      } catch (he) {
        Tt(), G.value = !1, ve(`Failed to initiate switch: ${he instanceof Error ? he.message : "Unknown error"}`, "error"), ze.value = { state: "idle", progress: 0, message: "" }, me.value = null;
      }
    }
    function pt(he) {
      return he >= 100 ? "complete" : he >= 80 ? "validating" : he >= 60 ? "starting" : he >= 30 ? "syncing" : "preparing";
    }
    function st(he) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[pt(he)] || "";
    }
    function xt() {
      if (W) return;
      let he = 10;
      const ee = 60, Ke = 5e3, Qe = 100, yt = (ee - he) / (Ke / Qe);
      W = window.setInterval(() => {
        if (he += yt, he >= ee && (he = ee, Tt()), ze.value.progress < ee) {
          const Pt = Math.floor(he);
          ze.value = {
            progress: Pt,
            state: pt(Pt),
            message: st(Pt)
          };
        }
      }, Qe);
    }
    function Tt() {
      W && (clearInterval(W), W = null);
    }
    function je() {
      Ve || (Ve = window.setInterval(async () => {
        try {
          let he = await P.getStatus();
          if ((!he || he.state === "idle") && (he = await h()), !he)
            return;
          const ee = he.progress || 0;
          ee >= 60 && Tt();
          const Ke = Math.max(ee, ze.value.progress), Qe = he.state && he.state !== "idle" && he.state !== "unknown", yt = Qe ? he.state : pt(Ke), Pt = Qe && he.message || st(Ke);
          ze.value = {
            state: yt,
            progress: Ke,
            message: Pt
          }, he.state === "complete" ? (Tt(), is(), G.value = !1, ve(`✓ Switched to ${N.value}`, "success"), await qe(), N.value = "") : he.state === "rolled_back" ? (Tt(), is(), G.value = !1, ve("Switch failed, restored previous environment", "warning"), N.value = "") : he.state === "critical_failure" && (Tt(), is(), G.value = !1, ve(`Critical error during switch: ${he.message}`, "error"), N.value = "");
        } catch (he) {
          console.error("Failed to poll switch progress:", he);
        }
      }, 1e3));
    }
    function is() {
      Tt(), Ve && (clearInterval(Ve), Ve = null);
    }
    function ys() {
      var he;
      oe.value = !1, N.value = "", (he = le.value) != null && he.state && le.value.state !== "managed" && (te.value = le.value.state === "no_workspace" ? 1 : 2, ne.value = !0);
    }
    async function po(he) {
      Be.value = !1, await qe(), ve(he.message, he.success ? "success" : "error");
    }
    async function go() {
      V.value = !1;
      const he = ve("Syncing environment...", "info", 0);
      try {
        const ee = await x("skip", !0);
        if (z(he), ee.status === "success") {
          const Ke = [];
          ee.nodes_installed.length && Ke.push(`${ee.nodes_installed.length} installed`), ee.nodes_removed.length && Ke.push(`${ee.nodes_removed.length} removed`);
          const Qe = Ke.length ? `: ${Ke.join(", ")}` : "";
          ve(`✓ Environment synced${Qe}`, "success"), await qe();
        } else {
          const Ke = ee.errors.length ? ee.errors.join("; ") : ee.message;
          ve(`Sync failed: ${Ke}`, "error");
        }
      } catch (ee) {
        z(he), ve(`Sync error: ${ee instanceof Error ? ee.message : "Unknown error"}`, "error");
      }
    }
    async function ho(he) {
      var ee;
      try {
        const Ke = await C(he);
        Ke.failed.length === 0 ? ve(`✓ Repaired ${Ke.success} workflow${Ke.success === 1 ? "" : "s"}`, "success") : ve(`Repaired ${Ke.success}, failed: ${Ke.failed.length}`, "warning"), await qe();
      } catch (Ke) {
        ve(`Repair failed: ${Ke instanceof Error ? Ke.message : "Unknown error"}`, "error");
      } finally {
        (ee = B.value) == null || ee.resetRepairingState();
      }
    }
    async function eo() {
      var ee, Ke;
      const he = ve("Repairing environment...", "info", 0);
      try {
        const Qe = await x("skip", !0);
        if (z(he), Qe.status === "success") {
          const yt = [];
          Qe.nodes_installed.length && yt.push(`${Qe.nodes_installed.length} installed`), Qe.nodes_removed.length && yt.push(`${Qe.nodes_removed.length} removed`);
          const Pt = yt.length ? `: ${yt.join(", ")}` : "";
          ve(`✓ Environment repaired${Pt}`, "success"), (ee = B.value) == null || ee.closeDetailModal(), await qe();
        } else {
          const yt = Qe.errors.length ? Qe.errors.join(", ") : Qe.message || "Unknown error";
          ve(`Repair failed: ${yt}`, "error");
        }
      } catch (Qe) {
        z(he), ve(`Repair error: ${Qe instanceof Error ? Qe.message : "Unknown error"}`, "error");
      } finally {
        (Ke = B.value) == null || Ke.resetRepairingEnvironmentState();
      }
    }
    async function yo(he, ee) {
      ve(`Environment '${he}' created`, "success"), await qe(), Y.value && await Y.value.loadEnvironments(), ee && await De(he);
    }
    async function wo(he) {
      var ee;
      if (((ee = ie.value) == null ? void 0 : ee.name) === he) {
        ve("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      J.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${he}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          J.value = null;
          try {
            const Ke = await w(he);
            Ke.status === "success" ? (ve(`Environment "${he}" deleted`, "success"), await qe(), Y.value && await Y.value.loadEnvironments()) : ve(Ke.message || "Failed to delete environment", "error");
          } catch (Ke) {
            ve(`Error deleting environment: ${Ke instanceof Error ? Ke.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function _o(he, ee) {
      ne.value = !1;
      try {
        le.value = await S();
      } catch {
      }
      await De(he, ee);
    }
    function ko() {
      ne.value = !1, a("close");
    }
    async function bo(he, ee) {
      await De(he, ee);
    }
    async function ha(he) {
      await qe(), await De(he);
    }
    async function ya(he) {
      le.value = await S(), console.log(`Environment '${he}' created. Available for switching.`);
    }
    function wa() {
      ke("environments", "all-envs"), setTimeout(() => {
        var he;
        (he = Y.value) == null || he.openCreateModal();
      }, 100);
    }
    function xn() {
      if (!A.value) return [];
      const he = [], ee = A.value.workflows;
      return ee.new.length && he.push(`${ee.new.length} new workflow(s)`), ee.modified.length && he.push(`${ee.modified.length} modified workflow(s)`), ee.deleted.length && he.push(`${ee.deleted.length} deleted workflow(s)`), he;
    }
    return at(async () => {
      try {
        if (le.value = await S(), le.value.state === "no_workspace") {
          ne.value = !0, te.value = 1;
          return;
        }
        if (le.value.state === "empty_workspace") {
          ne.value = !0, te.value = 2;
          return;
        }
        if (le.value.state === "unmanaged") {
          ne.value = !0, te.value = 2;
          return;
        }
      } catch (he) {
        console.warn("Setup status check failed, proceeding normally:", he);
      }
      await Promise.all([
        qe(),
        ue()
      ]);
    }), (he, ee) => {
      var Ke, Qe, yt, Pt, rs, to, Z, Te, He, kt, Lt, us, Fs;
      return n(), i("div", mR, [
        t("div", fR, [
          t("div", vR, [
            ee[31] || (ee[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            A.value ? (n(), i("div", pR)) : y("", !0)
          ]),
          t("div", gR, [
            $(iu),
            ee[34] || (ee[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Pe(["icon-btn", { spinning: X.value }]),
              onClick: qe,
              title: "Refresh"
            }, [...ee[32] || (ee[32] = [
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
              onClick: ee[0] || (ee[0] = (Je) => a("close")),
              title: "Close"
            }, [...ee[33] || (ee[33] = [
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
        se.value && ye.value ? (n(), R(rR, {
          key: 0,
          info: ye.value,
          updating: Oe.value,
          onUpdate: We,
          onDismiss: Ae,
          onReleaseNotes: Fe
        }, null, 8, ["info", "updating"])) : y("", !0),
        t("div", hR, [
          t("div", { class: "env-switcher-header" }, [
            ee[35] || (ee[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", { class: "env-control-buttons" }, [
              t("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: T
              }, " Restart "),
              t("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: D
              }, " Stop ")
            ])
          ]),
          t("button", {
            class: "env-switcher-btn",
            onClick: ee[1] || (ee[1] = (Je) => ke("environments", "all-envs"))
          }, [
            A.value ? (n(), i("div", yR, [
              t("span", null, d(((Ke = ie.value) == null ? void 0 : Ke.name) || ((Qe = A.value) == null ? void 0 : Qe.environment) || "Loading..."), 1),
              t("span", wR, "(" + d(A.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            ee[36] || (ee[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", _R, [
          t("div", kR, [
            t("div", bR, [
              t("div", $R, [
                ee[37] || (ee[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Pe(["sidebar-item", { active: Ce.value === "status" && Me.value === "this-env" }]),
                  onClick: ee[2] || (ee[2] = (Je) => ke("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: Ce.value === "workflows" }]),
                  onClick: ee[3] || (ee[3] = (Je) => ke("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: Ce.value === "models-env" }]),
                  onClick: ee[4] || (ee[4] = (Je) => ke("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: Ce.value === "branches" }]),
                  onClick: ee[5] || (ee[5] = (Je) => ke("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: Ce.value === "history" }]),
                  onClick: ee[6] || (ee[6] = (Je) => ke("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: Ce.value === "nodes" }]),
                  onClick: ee[7] || (ee[7] = (Je) => ke("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: Ce.value === "debug-env" }]),
                  onClick: ee[8] || (ee[8] = (Je) => ke("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              ee[41] || (ee[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", CR, [
                ee[38] || (ee[38] = t("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                t("button", {
                  class: Pe(["sidebar-item", { active: Ce.value === "environments" }]),
                  onClick: ee[9] || (ee[9] = (Je) => ke("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: Ce.value === "model-index" }]),
                  onClick: ee[10] || (ee[10] = (Je) => ke("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: Ce.value === "settings" }]),
                  onClick: ee[11] || (ee[11] = (Je) => ke("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: Ce.value === "debug-workspace" }]),
                  onClick: ee[12] || (ee[12] = (Je) => ke("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              ee[42] || (ee[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", xR, [
                ee[40] || (ee[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Pe(["sidebar-item", { active: Ce.value === "deploy" }]),
                  onClick: ee[13] || (ee[13] = (Je) => ke("deploy", "sharing"))
                }, [
                  ee[39] || (ee[39] = b(" DEPLOY ", -1)),
                  Ze(M) > 0 ? (n(), i("span", SR, d(Ze(M)), 1)) : y("", !0)
                ], 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: Ce.value === "export" }]),
                  onClick: ee[14] || (ee[14] = (Je) => ke("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: Ce.value === "import" }]),
                  onClick: ee[15] || (ee[15] = (Je) => ke("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Pe(["sidebar-item", { active: Ce.value === "remotes" }]),
                  onClick: ee[16] || (ee[16] = (Je) => ke("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", IR, [
              $(ru)
            ])
          ]),
          t("div", ER, [
            de.value ? (n(), i("div", TR, d(de.value), 1)) : !A.value && Ce.value === "status" ? (n(), i("div", PR, " Loading status... ")) : (n(), i(H, { key: 2 }, [
              Ce.value === "status" ? (n(), R($v, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: B,
                status: A.value,
                "setup-state": K.value,
                onSwitchBranch: Ue,
                onCommitChanges: ee[17] || (ee[17] = (Je) => Be.value = !0),
                onSyncEnvironment: ee[18] || (ee[18] = (Je) => V.value = !0),
                onViewWorkflows: ee[19] || (ee[19] = (Je) => ke("workflows", "this-env")),
                onViewHistory: ee[20] || (ee[20] = (Je) => ke("history", "this-env")),
                onViewDebug: ee[21] || (ee[21] = (Je) => ke("debug-env", "this-env")),
                onViewNodes: ee[22] || (ee[22] = (Je) => ke("nodes", "this-env")),
                onRepairMissingModels: ho,
                onRepairEnvironment: eo,
                onStartSetup: ee[23] || (ee[23] = (Je) => ne.value = !0),
                onViewEnvironments: ee[24] || (ee[24] = (Je) => ke("environments", "all-envs")),
                onCreateEnvironment: wa
              }, null, 8, ["status", "setup-state"])) : Ce.value === "workflows" ? (n(), R(A_, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: ce,
                onRefresh: qe
              }, null, 512)) : Ce.value === "models-env" ? (n(), R(Zb, {
                key: 2,
                onNavigate: Ge
              })) : Ce.value === "branches" ? (n(), R(fp, {
                key: 3,
                branches: E.value,
                current: ((yt = A.value) == null ? void 0 : yt.branch) || null,
                onSwitch: dt,
                onCreate: Et,
                onDelete: Wt
              }, null, 8, ["branches", "current"])) : Ce.value === "history" ? (n(), R(pp, {
                key: 4,
                commits: j.value,
                "current-ref": (Pt = A.value) == null ? void 0 : Pt.branch,
                onSelect: it,
                onCheckout: lt
              }, null, 8, ["commits", "current-ref"])) : Ce.value === "nodes" ? (n(), R(H2, {
                key: 5,
                "version-mismatches": ((to = (rs = A.value) == null ? void 0 : rs.comparison) == null ? void 0 : to.version_mismatches) || [],
                onOpenNodeManager: be,
                onRepairEnvironment: eo,
                onToast: re
              }, null, 8, ["version-mismatches"])) : Ce.value === "debug-env" ? (n(), R(ax, { key: 6 })) : Ce.value === "environments" ? (n(), R(R8, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: Y,
                onSwitch: De,
                onCreated: yo,
                onDelete: wo
              }, null, 512)) : Ce.value === "model-index" ? (n(), R(f2, {
                key: 8,
                onRefresh: qe
              })) : Ce.value === "settings" ? (n(), R(J3, { key: 9 })) : Ce.value === "debug-workspace" ? (n(), R(nx, { key: 10 })) : Ce.value === "deploy" ? (n(), R(wT, {
                key: 11,
                onToast: re,
                onNavigate: Ge
              })) : Ce.value === "export" ? (n(), R(y5, { key: 12 })) : Ce.value === "import" ? (n(), R(d4, {
                key: 13,
                onImportCompleteSwitch: ha
              })) : Ce.value === "remotes" ? (n(), R(P3, {
                key: 14,
                onToast: re
              })) : y("", !0)
            ], 64))
          ])
        ]),
        Le.value ? (n(), R(OT, {
          key: 1,
          commit: Le.value,
          onClose: ee[25] || (ee[25] = (Je) => Le.value = null),
          onCheckout: lt,
          onCreateBranch: Rt
        }, null, 8, ["commit"])) : y("", !0),
        J.value ? (n(), R(_l, {
          key: 2,
          title: J.value.title,
          message: J.value.message,
          details: J.value.details,
          warning: J.value.warning,
          confirmLabel: J.value.confirmLabel,
          cancelLabel: J.value.cancelLabel,
          secondaryLabel: J.value.secondaryLabel,
          secondaryAction: J.value.secondaryAction,
          destructive: J.value.destructive,
          onConfirm: J.value.onConfirm,
          onCancel: ee[26] || (ee[26] = (Je) => J.value = null),
          onSecondary: J.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        $(EP, {
          show: oe.value,
          "from-environment": ((Z = ie.value) == null ? void 0 : Z.name) || "unknown",
          "to-environment": N.value,
          onConfirm: tt,
          onClose: ys
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Be.value && A.value ? (n(), R(lu, {
          key: 3,
          status: A.value,
          "as-modal": !0,
          onClose: ee[27] || (ee[27] = (Je) => Be.value = !1),
          onCommitted: po
        }, null, 8, ["status"])) : y("", !0),
        V.value && A.value ? (n(), R(qP, {
          key: 4,
          show: V.value,
          "mismatch-details": {
            missing_nodes: A.value.comparison.missing_nodes,
            extra_nodes: A.value.comparison.extra_nodes
          },
          onConfirm: go,
          onClose: ee[28] || (ee[28] = (Je) => V.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        $(zP, {
          show: G.value,
          state: ze.value.state,
          progress: ze.value.progress,
          message: ze.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        ae.value ? (n(), i("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: ee[30] || (ee[30] = ut((Je) => ae.value = !1, ["self"]))
        }, [
          t("div", RR, [
            t("div", MR, [
              ee[44] || (ee[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: ee[29] || (ee[29] = (Je) => ae.value = !1)
              }, [...ee[43] || (ee[43] = [
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
            t("div", DR, [
              ee[45] || (ee[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", LR, [
                (n(!0), i(H, null, we(L.value, (Je) => (n(), i("div", {
                  key: Je.name,
                  class: Pe(["env-item", { current: Je.is_current }])
                }, [
                  t("div", NR, [
                    t("div", UR, [
                      t("span", OR, d(Je.is_current ? "●" : "○"), 1),
                      t("span", AR, d(Je.name), 1),
                      Je.current_branch ? (n(), i("span", zR, "(" + d(Je.current_branch) + ")", 1)) : y("", !0),
                      Je.is_current ? (n(), i("span", VR, "CURRENT")) : y("", !0)
                    ]),
                    t("div", FR, d(Je.workflow_count) + " workflows • " + d(Je.node_count) + " nodes ", 1)
                  ]),
                  Je.is_current ? y("", !0) : (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (_a) => De(Je.name)
                  }, " SWITCH ", 8, BR))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        ne.value ? (n(), R(X7, {
          key: 6,
          "default-path": ((Te = le.value) == null ? void 0 : Te.default_path) || "~/comfygit",
          "detected-models-dir": ((He = le.value) == null ? void 0 : He.detected_models_dir) || null,
          "initial-step": te.value,
          "existing-environments": ((kt = le.value) == null ? void 0 : kt.environments) || [],
          "cli-installed": ((Lt = le.value) == null ? void 0 : Lt.cli_installed) ?? !0,
          "setup-state": ((us = le.value) == null ? void 0 : us.state) || "no_workspace",
          "workspace-path": ((Fs = le.value) == null ? void 0 : Fs.workspace_path) || null,
          onComplete: _o,
          onClose: ko,
          onSwitchEnvironment: bo,
          onEnvironmentCreatedNoSwitch: ya
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", WR, [
          $(Dd, { name: "toast" }, {
            default: g(() => [
              (n(!0), i(H, null, we(F.value, (Je) => (n(), i("div", {
                key: Je.id,
                class: Pe(["toast", Je.type])
              }, [
                t("span", GR, d(Je.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), HR = /* @__PURE__ */ xe(jR, [["__scopeId", "data-v-a7e110f0"]]), KR = { class: "item-header" }, qR = { class: "item-info" }, YR = { class: "filename" }, JR = { class: "metadata" }, QR = { class: "size" }, XR = {
  key: 0,
  class: "type"
}, ZR = { class: "item-actions" }, eM = {
  key: 0,
  class: "progress-section"
}, tM = { class: "progress-bar" }, sM = { class: "progress-stats" }, oM = { class: "downloaded" }, nM = { class: "speed" }, aM = {
  key: 0,
  class: "eta"
}, lM = {
  key: 1,
  class: "status-msg paused"
}, iM = {
  key: 2,
  class: "status-msg queued"
}, rM = {
  key: 3,
  class: "status-msg completed"
}, uM = {
  key: 4,
  class: "status-msg failed"
}, cM = {
  key: 0,
  class: "retries"
}, dM = /* @__PURE__ */ $e({
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
      class: Pe(["download-item", `status-${e.item.status}`])
    }, [
      t("div", KR, [
        t("div", qR, [
          t("div", YR, d(e.item.filename), 1),
          t("div", JR, [
            t("span", QR, d(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", XR, d(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", ZR, [
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
      e.item.status === "downloading" ? (n(), i("div", eM, [
        t("div", tM, [
          t("div", {
            class: "progress-fill",
            style: Ft({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", sM, [
          t("span", oM, d(a(e.item.downloaded)) + " / " + d(a(e.item.size)), 1),
          t("span", nM, d(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", aM, d(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", lM, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", iM, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", rM, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", uM, [
        b(" ✗ " + d(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", cM, "(" + d(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Ho = /* @__PURE__ */ xe(dM, [["__scopeId", "data-v-2110df65"]]), mM = { class: "queue-title" }, fM = { class: "count" }, vM = { class: "queue-actions" }, pM = { class: "action-label" }, gM = {
  key: 0,
  class: "overall-progress"
}, hM = { class: "progress-bar" }, yM = {
  key: 0,
  class: "current-mini"
}, wM = { class: "filename" }, _M = { class: "speed" }, kM = {
  key: 1,
  class: "queue-content"
}, bM = {
  key: 0,
  class: "section"
}, $M = {
  key: 1,
  class: "section"
}, CM = { class: "section-header" }, xM = { class: "section-label paused" }, SM = { class: "items-list" }, IM = {
  key: 2,
  class: "section"
}, EM = { class: "section-header" }, TM = { class: "section-label" }, PM = { class: "items-list" }, RM = {
  key: 3,
  class: "section"
}, MM = { class: "section-header" }, DM = { class: "section-label" }, LM = { class: "items-list" }, NM = {
  key: 4,
  class: "section"
}, UM = { class: "section-header" }, OM = { class: "section-label failed" }, AM = { class: "items-list" }, zM = /* @__PURE__ */ $e({
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
      resumeDownload: p,
      resumeAllPaused: _,
      removeItem: h,
      clearCompleted: w
    } = Vo(), x = k(!1);
    let C = null;
    St(
      () => ({
        active: m.value,
        failed: r.value.length,
        paused: u.value.length,
        completed: l.value.length
      }),
      (P, M) => {
        C && (clearTimeout(C), C = null);
        const A = P.active === 0 && P.failed === 0 && P.paused === 0 && P.completed > 0, j = M && (M.active > 0 || M.paused > 0);
        A && j && (C = setTimeout(() => {
          w(), C = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = O(() => {
      var A;
      if (s.items.length === 0) return 0;
      const P = l.value.length, M = ((A = o.value) == null ? void 0 : A.progress) || 0;
      return Math.round((P + M / 100) / s.items.length * 100);
    });
    function U(P) {
      f(P);
    }
    function I(P) {
      return P === 0 ? "..." : `${(P / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (P, M) => (n(), R(Ot, { to: "body" }, [
      Ze(c) ? (n(), i("div", {
        key: 0,
        class: Pe(["model-download-queue", { minimized: !x.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: M[0] || (M[0] = (A) => x.value = !x.value)
        }, [
          t("div", mM, [
            M[4] || (M[4] = t("span", { class: "icon" }, "↓", -1)),
            M[5] || (M[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", fM, "(" + d(Ze(m)) + "/" + d(Ze(s).items.length) + ")", 1)
          ]),
          t("div", vM, [
            t("span", pM, d(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (n(), i("div", kM, [
          Ze(o) ? (n(), i("div", bM, [
            M[6] || (M[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            $(Ho, {
              item: Ze(o),
              onCancel: M[1] || (M[1] = (A) => U(Ze(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          Ze(u).length > 0 ? (n(), i("div", $M, [
            t("div", CM, [
              t("span", xM, "Paused (" + d(Ze(u).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: M[2] || (M[2] = //@ts-ignore
                (...A) => Ze(_) && Ze(_)(...A))
              }, "Resume All")
            ]),
            t("div", SM, [
              (n(!0), i(H, null, we(Ze(u), (A) => (n(), R(Ho, {
                key: A.id,
                item: A,
                onResume: (j) => Ze(p)(A.id),
                onRemove: (j) => Ze(h)(A.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Ze(a).length > 0 ? (n(), i("div", IM, [
            t("div", EM, [
              t("span", TM, "Queued (" + d(Ze(a).length) + ")", 1)
            ]),
            t("div", PM, [
              (n(!0), i(H, null, we(Ze(a), (A) => (n(), R(Ho, {
                key: A.id,
                item: A,
                onCancel: (j) => U(A.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          Ze(l).length > 0 ? (n(), i("div", RM, [
            t("div", MM, [
              t("span", DM, "Completed (" + d(Ze(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: M[3] || (M[3] = //@ts-ignore
                (...A) => Ze(w) && Ze(w)(...A))
              }, "Clear")
            ]),
            t("div", LM, [
              (n(!0), i(H, null, we(Ze(l).slice(0, 3), (A) => (n(), R(Ho, {
                key: A.id,
                item: A,
                onRemove: (j) => Ze(h)(A.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          Ze(r).length > 0 ? (n(), i("div", NM, [
            t("div", UM, [
              t("span", OM, "Failed (" + d(Ze(r).length) + ")", 1)
            ]),
            t("div", AM, [
              (n(!0), i(H, null, we(Ze(r), (A) => (n(), R(Ho, {
                key: A.id,
                item: A,
                onRetry: (j) => Ze(v)(A.id),
                onRemove: (j) => Ze(h)(A.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (n(), i("div", gM, [
          t("div", hM, [
            t("div", {
              class: "progress-fill",
              style: Ft({ width: `${S.value}%` })
            }, null, 4)
          ]),
          Ze(o) ? (n(), i("div", yM, [
            t("span", wM, d(Ze(o).filename), 1),
            t("span", _M, d(I(Ze(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), VM = /* @__PURE__ */ xe(zM, [["__scopeId", "data-v-3a3c9607"]]), FM = { class: "detail-header" }, BM = { class: "item-count" }, WM = { class: "resource-list" }, GM = { class: "item-info" }, jM = { class: "item-name" }, HM = {
  key: 0,
  class: "item-subtitle"
}, KM = {
  key: 0,
  class: "installing-badge"
}, qM = ["title"], YM = {
  key: 2,
  class: "installed-badge"
}, JM = {
  key: 3,
  class: "queued-badge"
}, QM = {
  key: 4,
  class: "action-buttons"
}, XM = {
  key: 1,
  class: "no-action"
}, ZM = /* @__PURE__ */ $e({
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
    const o = e, a = s, l = O(() => o.items.filter((h) => h.canAction)), r = O(() => l.value.length > 0 && l.value.every(
      (h) => {
        var w, x;
        return o.queuedItems.has(h.id) || ((w = o.installedItems) == null ? void 0 : w.has(h.id)) || ((x = o.failedItems) == null ? void 0 : x.has(h.id));
      }
    )), u = O(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
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
    return (h, w) => (n(), R(Ct, {
      title: e.title,
      size: "md",
      onClose: w[2] || (w[2] = (x) => a("close"))
    }, {
      body: g(() => [
        t("div", FM, [
          t("span", BM, d(e.items.length) + " " + d(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (n(), R(Re, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: w[0] || (w[0] = (x) => a("bulk-action"))
          }, {
            default: g(() => [
              b(d(u.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        t("div", WM, [
          (n(!0), i(H, null, we(e.items, (x) => (n(), i("div", {
            key: x.id,
            class: "resource-item"
          }, [
            t("div", GM, [
              t("span", jM, d(x.name), 1),
              x.subtitle ? (n(), i("span", HM, d(x.subtitle), 1)) : y("", !0)
            ]),
            x.canAction ? (n(), i(H, { key: 0 }, [
              m(x) ? (n(), i("span", KM, "Installing...")) : v(x) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(x)
              }, "Failed ⚠", 8, qM)) : f(x) ? (n(), i("span", YM, "Installed")) : c(x) ? (n(), i("span", JM, "Queued")) : (n(), i("div", QM, [
                (n(!0), i(H, null, we(_(x), (C) => (n(), R(Re, {
                  key: `${x.id}-${C.key}`,
                  size: "sm",
                  variant: C.variant || "secondary",
                  onClick: (S) => a("action", x, C.key)
                }, {
                  default: g(() => [
                    b(d(C.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (n(), i("span", XM, d(x.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: g(() => [
        $(Re, {
          variant: "secondary",
          onClick: w[1] || (w[1] = (x) => a("close"))
        }, {
          default: g(() => [...w[3] || (w[3] = [
            b("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), eD = /* @__PURE__ */ xe(ZM, [["__scopeId", "data-v-ec7e9202"]]), tD = {
  key: 0,
  class: "loading-state"
}, sD = {
  key: 1,
  class: "analysis-results"
}, oD = {
  key: 0,
  class: "section"
}, nD = { class: "section-header" }, aD = { class: "section-title" }, lD = { class: "item-list" }, iD = { class: "package-info" }, rD = { class: "package-name" }, uD = { class: "node-count" }, cD = {
  key: 1,
  class: "installing-badge"
}, dD = {
  key: 2,
  class: "queued-badge"
}, mD = ["title"], fD = {
  key: 4,
  class: "installed-badge"
}, vD = {
  key: 1,
  class: "section"
}, pD = { class: "section-header" }, gD = { class: "section-title" }, hD = { class: "item-list" }, yD = { class: "node-type" }, wD = {
  key: 0,
  class: "overflow-note"
}, _D = {
  key: 2,
  class: "section"
}, kD = { class: "section-header" }, bD = { class: "section-title" }, $D = { class: "item-list" }, CD = { class: "node-type" }, xD = { class: "not-found" }, SD = {
  key: 0,
  class: "overflow-note"
}, ID = {
  key: 3,
  class: "section"
}, ED = { class: "section-header" }, TD = { class: "section-title" }, PD = { class: "item-list" }, RD = { class: "package-info community-info" }, MD = { class: "community-title-row" }, DD = { class: "package-name" }, LD = { class: "node-count" }, ND = { class: "community-mapping-note" }, UD = { key: 0 }, OD = {
  key: 0,
  class: "community-actions"
}, AD = {
  key: 1,
  class: "installing-badge"
}, zD = {
  key: 2,
  class: "queued-badge"
}, VD = ["title"], FD = {
  key: 4,
  class: "installed-badge"
}, BD = ["title"], WD = {
  key: 1,
  class: "no-url"
}, GD = {
  key: 4,
  class: "section"
}, jD = { class: "section-header" }, HD = { class: "section-title" }, KD = { class: "item-list" }, qD = { class: "model-info" }, YD = { class: "model-name" }, JD = {
  key: 1,
  class: "queued-badge"
}, QD = {
  key: 1,
  class: "no-url"
}, XD = { class: "dont-show-again" }, ZD = 3e4, eL = /* @__PURE__ */ $e({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = k(!1), o = k(null), a = k(null), l = k(!1), r = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Map()), m = k(/* @__PURE__ */ new Set()), f = k(!1), v = k(null), p = k(0), _ = k(null), h = k(/* @__PURE__ */ new Set()), w = k(/* @__PURE__ */ new Map()), x = k(/* @__PURE__ */ new Map()), { addToQueue: C } = Vo(), { queueNodeInstall: S } = ct(), U = O(() => {
      var z;
      return ((z = a.value) == null ? void 0 : z.package_aliases) || {};
    });
    function I(z) {
      if (!z) return null;
      const re = U.value;
      let ue = z;
      const Fe = /* @__PURE__ */ new Set();
      for (; re[ue] && !Fe.has(ue); )
        Fe.add(ue), ue = re[ue];
      return ue;
    }
    function P(z, re) {
      return z instanceof Error && z.message ? z.message : typeof z == "string" && z.trim().length > 0 ? z : re;
    }
    function M(z) {
      for (const [re, ue] of w.value.entries())
        ue === z && w.value.delete(re);
    }
    function A(z) {
      if (!x.value.has(z)) return;
      const re = x.value.get(z);
      clearTimeout(re), x.value.delete(z);
    }
    function j() {
      for (const z of x.value.values())
        clearTimeout(z);
      x.value = /* @__PURE__ */ new Map();
    }
    function E(z) {
      A(z);
      const re = setTimeout(() => {
        if (x.value.delete(z), !u.value.has(z)) return;
        M(z), u.value.delete(z), v.value === z && (v.value = null), c.value.set(z, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", z);
      }, ZD);
      x.value.set(z, re);
    }
    function L(z) {
      const re = `Cannot install "${z.title}" - package_id is missing`;
      c.value.set(z.item_id, re), o.value = re, console.warn("[ComfyGit] Community install requested without package_id:", z);
    }
    const ie = O(() => le.value.length > 0 || te.value.length > 0 || K.value.length > 0 || X.value.length > 0 || fe.value.length > 0), le = O(() => {
      var ue, Fe;
      if (!((ue = a.value) != null && ue.nodes)) return [];
      const z = /* @__PURE__ */ new Map(), re = (a.value.nodes.resolved || []).filter((Ae) => {
        var We;
        return !Ae.is_installed && ((We = Ae.package) == null ? void 0 : We.package_id);
      });
      for (const Ae of re) {
        const We = I(Ae.package.package_id);
        if (!We) continue;
        z.has(We) || z.set(We, {
          package_id: We,
          title: Ae.package.title || We,
          node_count: 0,
          node_types: [],
          repository: Ae.package.repository || null,
          latest_version: Ae.package.latest_version || null
        });
        const Xe = z.get(We);
        Xe.node_count++, Xe.node_types.push(((Fe = Ae.reference) == null ? void 0 : Fe.node_type) || Ae.node_type);
      }
      return Array.from(z.values());
    }), ne = O(() => le.value.reduce((z, re) => z + re.node_count, 0)), te = O(() => {
      var z;
      return (z = a.value) != null && z.nodes ? (a.value.nodes.unresolved || []).map((re) => {
        var ue;
        return {
          node_type: ((ue = re.reference) == null ? void 0 : ue.node_type) || re.node_type
        };
      }) : [];
    }), K = O(() => {
      var re;
      if (!((re = a.value) != null && re.nodes)) return [];
      const z = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((ue) => {
        var Ae;
        const Fe = ((Ae = ue.reference) == null ? void 0 : Ae.node_type) || ue.node_type;
        return {
          node_type: Fe,
          guidance: ue.guidance || z[Fe] || null
        };
      });
    }), X = O(() => {
      var ue, Fe, Ae, We, Xe, qe, it, lt;
      if (!((ue = a.value) != null && ue.nodes)) return [];
      const z = a.value.node_guidance || {}, re = /* @__PURE__ */ new Map();
      for (const dt of a.value.nodes.uninstallable || []) {
        const Et = ((Fe = dt.reference) == null ? void 0 : Fe.node_type) || dt.node_type, Wt = I(((Ae = dt.package) == null ? void 0 : Ae.package_id) || null), Rt = Wt || `node:${Et}`;
        re.has(Rt) || re.set(Rt, {
          item_id: Rt,
          node_type: Et,
          title: ((We = dt.package) == null ? void 0 : We.title) || Wt || Et,
          node_count: 0,
          package_id: Wt,
          repository: ((Xe = dt.package) == null ? void 0 : Xe.repository) || null,
          latest_version: ((qe = dt.package) == null ? void 0 : qe.latest_version) || null,
          guidance: dt.guidance || z[Et] || null
        });
        const pe = re.get(Rt);
        pe.node_count++, pe.guidance || (pe.guidance = dt.guidance || z[Et] || null), !pe.repository && ((it = dt.package) != null && it.repository) && (pe.repository = dt.package.repository), !pe.latest_version && ((lt = dt.package) != null && lt.latest_version) && (pe.latest_version = dt.package.latest_version);
      }
      return Array.from(re.values());
    }), de = O(() => X.value.filter((z) => !!z.package_id)), Le = O(() => X.value.length >= 5 ? X.value.slice(0, 4) : X.value), ae = O(() => de.value.length > 0 && de.value.every((z) => {
      const re = z.package_id;
      return r.value.has(re) || u.value.has(re) || c.value.has(re);
    }));
    function ye(z) {
      const re = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return z.repository && re.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), re;
    }
    const fe = O(() => {
      var Ae;
      if (!((Ae = a.value) != null && Ae.models)) return [];
      const z = (a.value.models.resolved || []).filter(
        (We) => We.match_type === "download_intent" || We.match_type === "property_download_intent" || We.match_type === "not_found"
      ).map((We) => {
        var Xe, qe, it, lt;
        return {
          filename: ((qe = (Xe = We.reference) == null ? void 0 : Xe.widget_value) == null ? void 0 : qe.split("/").pop()) || ((it = We.reference) == null ? void 0 : it.widget_value) || We.widget_value,
          widget_value: ((lt = We.reference) == null ? void 0 : lt.widget_value) || We.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: We.download_source || null,
          targetPath: We.target_path || null,
          canDownload: !!(We.download_source && We.target_path)
        };
      }), re = (a.value.models.unresolved || []).map((We) => {
        var Xe, qe, it, lt;
        return {
          filename: ((qe = (Xe = We.reference) == null ? void 0 : Xe.widget_value) == null ? void 0 : qe.split("/").pop()) || ((it = We.reference) == null ? void 0 : it.widget_value) || We.widget_value,
          widget_value: ((lt = We.reference) == null ? void 0 : lt.widget_value) || We.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), ue = /* @__PURE__ */ new Map(), Fe = [];
      for (const We of z) {
        if (!We.url) {
          Fe.push(We);
          continue;
        }
        const Xe = `${We.filename}::${We.url}`, qe = ue.get(Xe);
        if (!qe) {
          ue.set(Xe, We);
          continue;
        }
        !qe.targetPath && We.targetPath && (qe.targetPath = We.targetPath), !qe.canDownload && We.canDownload && (qe.canDownload = We.canDownload);
      }
      return [...ue.values(), ...Fe, ...re];
    }), Oe = O(() => fe.value.filter((z) => z.canDownload)), se = O(() => le.value.length >= 5 ? le.value.slice(0, 4) : le.value), ce = O(() => fe.value.length >= 5 ? fe.value.slice(0, 4) : fe.value), Y = O(() => le.value.length > 0 && le.value.every(
      (z) => r.value.has(z.package_id) || u.value.has(z.package_id) || c.value.has(z.package_id)
    )), B = O(() => Oe.value.length > 0 && Oe.value.every((z) => m.value.has(z.url))), oe = O(() => le.value.length > 0 || de.value.length > 0 || Oe.value.length > 0), G = O(() => {
      const z = (le.value.length === 0 || Y.value) && (de.value.length === 0 || ae.value), re = Oe.value.length === 0 || B.value;
      return z && re;
    }), N = O(() => _.value === "models" ? `Missing Models (${fe.value.length})` : _.value === "packages" ? `Missing Custom Nodes (${ne.value})` : _.value === "community" ? `Community-Mapped Packages (${X.value.length})` : ""), me = O(() => _.value === "models" ? fe.value.map((z) => ({
      id: z.url || z.widget_value,
      name: z.filename,
      canAction: z.canDownload,
      actionDisabledReason: z.canDownload ? void 0 : "Manual download required"
    })) : _.value === "packages" ? le.value.map((z) => ({
      id: z.package_id,
      name: z.title,
      subtitle: `(${z.node_count} ${z.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : _.value === "community" ? X.value.map((z) => ({
      id: z.package_id || z.item_id,
      name: z.title,
      subtitle: `(${z.node_count} ${z.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!z.package_id,
      actionDisabledReason: z.package_id ? void 0 : "Manual setup required",
      actions: z.package_id ? ye(z) : []
    })) : []);
    function ze(z, re) {
      if (_.value === "models") {
        const ue = fe.value.find((Fe) => Fe.url === z.id || Fe.widget_value === z.id);
        ue && Ee(ue);
      } else if (_.value === "packages") {
        const ue = le.value.find((Fe) => Fe.package_id === z.id);
        ue && W(ue);
      } else if (_.value === "community") {
        const ue = X.value.find((Ae) => (Ae.package_id || Ae.item_id) === z.id);
        if (!ue) return;
        if (!ue.package_id) {
          L({ item_id: ue.item_id, title: ue.title });
          return;
        }
        Q(ue, re === "install_git" ? "git" : "registry");
      }
    }
    function Ve() {
      _.value === "models" ? Ne() : _.value === "packages" ? Se() : _.value === "community" && Ie();
    }
    async function W(z) {
      return ge(z.package_id, z.latest_version, "registry");
    }
    async function Q(z, re) {
      return z.package_id ? ge(z.package_id, z.latest_version, re, z.repository) : (L({ item_id: z.item_id, title: z.title }), !1);
    }
    async function ge(z, re, ue, Fe) {
      const Ae = I(z) || z, We = re || "latest";
      if (r.value.has(Ae) || u.value.has(Ae) || c.value.has(Ae))
        return !0;
      q(), v.value = Ae;
      let Xe = null;
      try {
        const qe = {
          id: Ae,
          version: We,
          selected_version: We,
          mode: "remote",
          channel: "default"
        };
        ue === "git" && Fe && (qe.repository = Fe, qe.install_source = "git");
        const { ui_id: it } = await S(qe, {
          beforeQueueStart: (lt) => {
            Xe = lt, w.value.set(lt, Ae), u.value.add(Ae), E(Ae), console.log("[ComfyGit] Registered pending install:", {
              ui_id: lt,
              packageId: Ae,
              pendingInstalls: Array.from(w.value.entries())
            });
          }
        });
        return Xe || (Xe = it, w.value.set(it, Ae), u.value.add(Ae), E(Ae), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: it,
          packageId: Ae,
          pendingInstalls: Array.from(w.value.entries())
        })), !0;
      } catch (qe) {
        const it = P(qe, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", qe), Xe && w.value.delete(Xe), M(Ae), A(Ae), u.value.delete(Ae), c.value.set(Ae, it), !1;
      } finally {
        v.value = null;
      }
    }
    function Ee(z) {
      !z.url || !z.targetPath || m.value.has(z.url) || (C([{
        workflow: "unsaved",
        filename: z.filename,
        url: z.url,
        targetPath: z.targetPath
      }]), m.value.add(z.url));
    }
    async function Se() {
      const z = { attempted: 0, failed: 0 };
      for (const re of le.value)
        !r.value.has(re.package_id) && !u.value.has(re.package_id) && !c.value.has(re.package_id) && (z.attempted++, await W(re) || z.failed++);
      return z;
    }
    async function Ie() {
      const z = { attempted: 0, failed: 0 };
      for (const re of de.value) {
        const ue = re.package_id;
        !r.value.has(ue) && !u.value.has(ue) && !c.value.has(ue) && (z.attempted++, await Q(re, "registry") || z.failed++);
      }
      return z;
    }
    function Ne() {
      const z = Oe.value.filter(
        (re) => !m.value.has(re.url)
      );
      if (z.length === 0) return 0;
      C(z.map((re) => ({
        workflow: "unsaved",
        filename: re.filename,
        url: re.url,
        targetPath: re.targetPath
      })));
      for (const re of z)
        m.value.add(re.url);
      return z.length;
    }
    async function Ce() {
      const z = await Se(), re = await Ie();
      Ne();
      const ue = z.attempted + re.attempted, Fe = z.failed + re.failed;
      if (ue > 0 && Fe > 0) {
        const Ae = ue - Fe;
        o.value = `${Ae} of ${ue} installs queued, ${Fe} failed`;
      }
    }
    function Me() {
      f.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function ke(z) {
      var Ae, We;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const re = z == null ? void 0 : z.id;
      if (re && h.value.has(re)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${re} this session`);
        return;
      }
      const ue = window.app, Fe = (Ae = ue == null ? void 0 : ue.extensionManager) == null ? void 0 : Ae.workflow;
      if (Fe) {
        let it = !1;
        for (let lt = 0; lt < 20; lt++) {
          const dt = Fe.activeWorkflow;
          if (!dt) {
            await new Promise((Rt) => setTimeout(Rt, 50));
            continue;
          }
          const Et = (We = dt.activeState) == null ? void 0 : We.id;
          if (!(re && Et === re)) {
            lt < 19 && await new Promise((Rt) => setTimeout(Rt, 50));
            continue;
          }
          if (it = !0, dt.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${dt.filename}`), re && h.value.add(re);
            return;
          }
          break;
        }
        it || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      s.value = !0, o.value = null, j(), r.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Map(), m.value = /* @__PURE__ */ new Set(), w.value = /* @__PURE__ */ new Map(), f.value = !1, p.value = 0;
      try {
        const Xe = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: z, name: "unsaved" })
        });
        if (!Xe.ok) {
          const qe = await Xe.json();
          throw new Error(qe.error || "Failed to analyze workflow");
        }
        a.value = await Xe.json(), ie.value && (l.value = !0, re && h.value.add(re));
      } catch (Xe) {
        console.error("[ComfyGit] Failed to analyze workflow:", Xe);
      } finally {
        s.value = !1;
      }
    }
    function Ge() {
      j(), l.value = !1, a.value = null;
    }
    function Ue(z) {
      const { workflow: re } = z.detail;
      re && ke(re);
    }
    function be(z) {
      var Fe;
      const re = (Fe = z.detail) == null ? void 0 : Fe.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: re,
        pendingInstalls: Array.from(w.value.entries()),
        eventDetail: z.detail
      });
      const ue = w.value.get(re);
      ue ? (A(ue), v.value = ue, console.log("[ComfyGit] Installing package:", ue)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", re);
    }
    function J(z) {
      var Ae, We, Xe, qe, it, lt, dt;
      const re = (Ae = z.detail) == null ? void 0 : Ae.ui_id, ue = (Xe = (We = z.detail) == null ? void 0 : We.status) == null ? void 0 : Xe.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: re,
        status: ue,
        pendingInstalls: Array.from(w.value.entries()),
        eventDetail: z.detail
      });
      const Fe = w.value.get(re);
      if (Fe) {
        if (A(Fe), w.value.delete(re), u.value.delete(Fe), v.value === Fe && (v.value = null), ue === "success")
          r.value.add(Fe), p.value++, console.log("[ComfyGit] Package installed successfully:", Fe);
        else {
          const Et = ((lt = (it = (qe = z.detail) == null ? void 0 : qe.status) == null ? void 0 : it.messages) == null ? void 0 : lt[0]) || ((dt = z.detail) == null ? void 0 : dt.result) || "Unknown error";
          c.value.set(Fe, Et), console.error("[ComfyGit] Package install failed:", Fe, Et);
        }
        w.value.size === 0 && p.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", p.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: p.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", re);
    }
    let Be = null;
    function V() {
      var z;
      return Be || (Be = (z = window.app) == null ? void 0 : z.api), Be;
    }
    let F = !1;
    function q() {
      if (F) return !0;
      const z = V();
      return z ? (z.addEventListener("cm-task-started", be), z.addEventListener("cm-task-completed", J), z.addEventListener("comfygit:workflow-changed", ve), F = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function ve(z) {
      const { change_type: re } = z.detail;
      (re === "created" || re === "modified") && l.value && (j(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return at(() => {
      window.addEventListener("comfygit:workflow-loaded", Ue);
    }), Zs(() => {
      if (j(), window.removeEventListener("comfygit:workflow-loaded", Ue), F) {
        const z = V();
        z && (z.removeEventListener("cm-task-started", be), z.removeEventListener("cm-task-completed", J), z.removeEventListener("comfygit:workflow-changed", ve)), F = !1;
      }
    }), (z, re) => (n(), i(H, null, [
      l.value ? (n(), R(Ct, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: Ge
      }, {
        body: g(() => [
          s.value ? (n(), i("div", tD, [...re[5] || (re[5] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && ie.value ? (n(), i("div", sD, [
            le.value.length > 0 ? (n(), i("div", oD, [
              t("div", nD, [
                t("span", aD, "Missing Custom Nodes (" + d(ne.value) + ")", 1),
                le.value.length > 1 ? (n(), R(Re, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: Y.value,
                  onClick: Se
                }, {
                  default: g(() => [
                    b(d(Y.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", lD, [
                (n(!0), i(H, null, we(se.value, (ue) => (n(), i("div", {
                  key: ue.package_id,
                  class: "package-item"
                }, [
                  t("div", iD, [
                    t("span", rD, d(ue.title), 1),
                    t("span", uD, "(" + d(ue.node_count) + " " + d(ue.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(ue.package_id) && !u.value.has(ue.package_id) && !c.value.has(ue.package_id) ? (n(), R(Re, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: v.value === ue.package_id,
                    onClick: (Fe) => W(ue)
                  }, {
                    default: g(() => [
                      b(d(v.value === ue.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : v.value === ue.package_id ? (n(), i("span", cD, "Installing...")) : u.value.has(ue.package_id) ? (n(), i("span", dD, "Queued")) : c.value.has(ue.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: c.value.get(ue.package_id)
                  }, "Failed ⚠", 8, mD)) : (n(), i("span", fD, "Installed"))
                ]))), 128)),
                le.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: re[0] || (re[0] = (ue) => _.value = "packages")
                }, [
                  t("span", null, "Show all " + d(le.value.length) + " packages...", 1),
                  re[6] || (re[6] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            te.value.length > 0 ? (n(), i("div", vD, [
              t("div", pD, [
                t("span", gD, "Unknown Nodes (" + d(te.value.length) + ")", 1)
              ]),
              t("div", hD, [
                (n(!0), i(H, null, we(te.value.slice(0, 5), (ue) => (n(), i("div", {
                  key: ue.node_type,
                  class: "item"
                }, [
                  t("code", yD, d(ue.node_type), 1),
                  re[7] || (re[7] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                te.value.length > 5 ? (n(), i("div", wD, " ...and " + d(te.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            K.value.length > 0 ? (n(), i("div", _D, [
              t("div", kD, [
                t("span", bD, "Requires Newer ComfyUI (" + d(K.value.length) + ")", 1)
              ]),
              t("div", $D, [
                (n(!0), i(H, null, we(K.value.slice(0, 5), (ue) => (n(), i("div", {
                  key: `vg-${ue.node_type}`,
                  class: "item"
                }, [
                  t("code", CD, d(ue.node_type), 1),
                  t("span", xD, d(ue.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                K.value.length > 5 ? (n(), i("div", SD, " ...and " + d(K.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            X.value.length > 0 ? (n(), i("div", ID, [
              t("div", ED, [
                t("span", TD, "Community-Mapped Packages (" + d(X.value.length) + ")", 1),
                de.value.length > 1 ? (n(), R(Re, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: ae.value,
                  onClick: Ie
                }, {
                  default: g(() => [
                    b(d(ae.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", PD, [
                (n(!0), i(H, null, we(Le.value, (ue) => (n(), i("div", {
                  key: `community-${ue.item_id}`,
                  class: "package-item"
                }, [
                  t("div", RD, [
                    t("div", MD, [
                      t("span", DD, d(ue.title), 1),
                      t("span", LD, "(" + d(ue.node_count) + " " + d(ue.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    t("div", ND, [
                      re[8] || (re[8] = b(" Found via community mapping — registry metadata may be incomplete", -1)),
                      ue.guidance ? (n(), i("span", UD, ". " + d(ue.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  ue.package_id ? (n(), i(H, { key: 0 }, [
                    !r.value.has(ue.package_id) && !u.value.has(ue.package_id) && !c.value.has(ue.package_id) ? (n(), i("div", OD, [
                      $(Re, {
                        size: "sm",
                        variant: "secondary",
                        disabled: v.value === ue.package_id,
                        onClick: (Fe) => Q(ue, "registry")
                      }, {
                        default: g(() => [
                          b(d(v.value === ue.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      ue.repository ? (n(), R(Re, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: v.value === ue.package_id,
                        onClick: (Fe) => Q(ue, "git")
                      }, {
                        default: g(() => [...re[9] || (re[9] = [
                          b(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : y("", !0)
                    ])) : v.value === ue.package_id ? (n(), i("span", AD, "Installing...")) : u.value.has(ue.package_id) ? (n(), i("span", zD, "Queued")) : c.value.has(ue.package_id) ? (n(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: c.value.get(ue.package_id)
                    }, "Failed ⚠", 8, VD)) : (n(), i("span", FD, "Installed"))
                  ], 64)) : (n(), i(H, { key: 1 }, [
                    c.value.has(ue.item_id) ? (n(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: c.value.get(ue.item_id)
                    }, "Failed ⚠", 8, BD)) : (n(), i("span", WD, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                X.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: re[1] || (re[1] = (ue) => _.value = "community")
                }, [
                  t("span", null, "Show all " + d(X.value.length) + " packages...", 1),
                  re[10] || (re[10] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            fe.value.length > 0 ? (n(), i("div", GD, [
              t("div", jD, [
                t("span", HD, "Missing Models (" + d(fe.value.length) + ")", 1),
                Oe.value.length > 1 ? (n(), R(Re, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: B.value,
                  onClick: Ne
                }, {
                  default: g(() => [
                    b(d(B.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", KD, [
                (n(!0), i(H, null, we(ce.value, (ue) => (n(), i("div", {
                  key: ue.widget_value,
                  class: "model-item"
                }, [
                  t("div", qD, [
                    t("span", YD, d(ue.filename), 1)
                  ]),
                  ue.canDownload ? (n(), i(H, { key: 0 }, [
                    m.value.has(ue.url) ? (n(), i("span", JD, "Queued")) : (n(), R(Re, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (Fe) => Ee(ue)
                    }, {
                      default: g(() => [...re[11] || (re[11] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", QD, "Manual download required"))
                ]))), 128)),
                fe.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: re[2] || (re[2] = (ue) => _.value = "models")
                }, [
                  t("span", null, "Show all " + d(fe.value.length) + " models...", 1),
                  re[12] || (re[12] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            t("div", XD, [
              $(ta, {
                modelValue: f.value,
                "onUpdate:modelValue": [
                  re[3] || (re[3] = (ue) => f.value = ue),
                  Me
                ]
              }, {
                default: g(() => [...re[13] || (re[13] = [
                  b(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : y("", !0)
        ]),
        footer: g(() => [
          $(Re, {
            variant: "secondary",
            onClick: Ge
          }, {
            default: g(() => [...re[14] || (re[14] = [
              b("Dismiss", -1)
            ])]),
            _: 1
          }),
          oe.value ? (n(), R(Re, {
            key: 0,
            variant: "primary",
            disabled: G.value,
            onClick: Ce
          }, {
            default: g(() => [
              b(d(G.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      _.value ? (n(), R(eD, {
        key: 1,
        title: N.value,
        items: me.value,
        "item-type": _.value,
        "queued-items": _.value === "models" ? m.value : u.value,
        "installed-items": _.value === "models" ? void 0 : r.value,
        "failed-items": _.value === "models" ? void 0 : c.value,
        "installing-item": _.value === "models" ? void 0 : v.value,
        onClose: re[4] || (re[4] = (ue) => _.value = null),
        onAction: ze,
        onBulkAction: Ve
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), tL = /* @__PURE__ */ xe(eL, [["__scopeId", "data-v-dfb55c3f"]]), sL = {
  key: 0,
  class: "io-mapping-root"
}, oL = { class: "io-mapping-visual-layer" }, nL = { class: "io-mapping-header" }, aL = { class: "io-mapping-header-main" }, lL = { class: "io-mapping-subtitle" }, iL = {
  key: 0,
  class: "io-mapping-hover-summary"
}, rL = { class: "io-mapping-header-actions" }, uL = { class: "io-mapping-sidebar" }, cL = { class: "io-mapping-sidebar-scroll" }, dL = {
  key: 0,
  class: "io-state-block"
}, mL = {
  key: 1,
  class: "io-state-block io-state-error"
}, fL = { class: "contract-summary" }, vL = { class: "summary-pill" }, pL = { class: "summary-pill" }, gL = { class: "summary-pill" }, hL = { class: "mapping-section" }, yL = { class: "section-header" }, wL = {
  key: 0,
  class: "empty-message"
}, _L = ["onClick"], kL = { class: "item-card-title" }, bL = { class: "item-card-meta" }, $L = { class: "item-card-summary" }, CL = { key: 0 }, xL = { class: "mapping-section" }, SL = { class: "section-header" }, IL = {
  key: 0,
  class: "empty-message"
}, EL = ["onClick"], TL = { class: "item-card-title" }, PL = { class: "item-card-meta" }, RL = { class: "item-card-summary" }, ML = { class: "io-mapping-footer" }, DL = /* @__PURE__ */ $e({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const s = e, { getWorkflowContract: o, saveWorkflowContract: a } = ct(), l = k(!1), r = k(""), u = k(!1), c = k(!1), m = k(null), f = k(null), v = k(null), p = k(null), _ = k(null), h = k(0), w = k(null), x = k(null);
    let C = null;
    const S = [
      "string",
      "integer",
      "number",
      "boolean",
      "enum",
      "image",
      "video",
      "audio",
      "file"
    ], U = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], I = O(() => {
      if (!v.value)
        return { inputs: [], outputs: [] };
      const V = v.value.default_contract || "default";
      return v.value.contracts[V] || (v.value.contracts[V] = { inputs: [], outputs: [] }), v.value.contracts[V];
    }), P = O(() => {
      var F;
      const V = ((F = f.value) == null ? void 0 : F.contract_summary.status) ?? "none";
      return V === "valid" ? "Valid Contract" : V === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function M(V) {
      return V ? JSON.parse(JSON.stringify(V)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function A(V) {
      return V === "integer" || V === "number";
    }
    function j(V) {
      return V === "enum";
    }
    function E(V) {
      return V == null ? "" : String(V);
    }
    function L(V) {
      const F = V.trim();
      if (!F) return;
      const q = Number(F);
      return Number.isFinite(q) ? q : void 0;
    }
    function ie(V) {
      return (V || []).join(`
`);
    }
    function le(V) {
      return V.split(/[\n,]/).map((F) => F.trim()).filter(Boolean);
    }
    function ne(V) {
      return typeof V == "string" ? V.length > 24 ? `${V.slice(0, 24)}...` : V : String(V);
    }
    function te(V) {
      return V == null ? "" : String(V);
    }
    function K(V) {
      var q;
      const F = (q = V == null ? void 0 : V.options) == null ? void 0 : q.values;
      return Array.isArray(F) ? F.map((ve) => String(ve)).filter(Boolean) : [];
    }
    function X(V, F) {
      var z;
      const q = (z = V == null ? void 0 : V.options) == null ? void 0 : z[F];
      if (q == null || q === "") return;
      const ve = Number(q);
      return Number.isFinite(ve) ? ve : void 0;
    }
    function de(V, F) {
      return V.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || F;
    }
    function Le(V) {
      const F = String(V ?? "").toLowerCase();
      return F.includes("image") ? "image" : F.includes("video") ? "video" : F.includes("audio") ? "audio" : F.includes("int") ? "integer" : F.includes("float") || F.includes("double") || F.includes("number") ? "number" : F.includes("bool") ? "boolean" : F.includes("combo") || F.includes("enum") ? "enum" : F.includes("string") || F.includes("text") ? "string" : "file";
    }
    function ae(V) {
      I.value.inputs.splice(V, 1), p.value === V && (p.value = null);
    }
    function ye(V) {
      I.value.outputs.splice(V, 1), _.value === V && (_.value = null);
    }
    function fe(V) {
      p.value = p.value === V ? null : V, p.value != null && (_.value = null);
    }
    function Oe(V) {
      _.value = _.value === V ? null : V, _.value != null && (p.value = null);
    }
    function se(V) {
      const F = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(V)) : String(V);
      return document.querySelector(`[data-node-id="${F}"]`);
    }
    function ce(V) {
      return V instanceof Element ? !!V.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function Y(V) {
      var ve, z, re, ue, Fe, Ae;
      if (!(V instanceof Element)) return null;
      const F = V.closest("[data-node-id]"), q = F == null ? void 0 : F.getAttribute("data-node-id");
      return q ? ((re = (z = (ve = s.comfyApp) == null ? void 0 : ve.graph) == null ? void 0 : z.getNodeById) == null ? void 0 : re.call(z, q)) ?? ((Ae = (Fe = (ue = s.comfyApp) == null ? void 0 : ue.rootGraph) == null ? void 0 : Fe.getNodeById) == null ? void 0 : Ae.call(Fe, q)) ?? null : null;
    }
    function B(V, F) {
      if (F == null || F < 0) return null;
      const q = se(V);
      return q ? q.querySelectorAll('[data-testid="node-widget"]')[F] ?? null : null;
    }
    function oe(V) {
      return !V || V.width <= 0 || V.height <= 0 ? null : {
        left: `${V.left}px`,
        top: `${V.top}px`,
        width: `${V.width}px`,
        height: `${V.height}px`
      };
    }
    function G(V) {
      const F = se((V == null ? void 0 : V.id) ?? "");
      if (F) return F.getBoundingClientRect();
      const q = s.comfyApp;
      if (!V || typeof (q == null ? void 0 : q.canvasPosToClientPos) != "function") return null;
      const z = q.canvasPosToClientPos([V.pos[0], V.pos[1] - 32]), re = q.canvasPosToClientPos([V.pos[0] + V.size[0], V.pos[1] + V.size[1]]);
      return !z || !re ? null : new DOMRect(z[0], z[1], re[0] - z[0], re[1] - z[1]);
    }
    function N(V) {
      var Fe, Ae, We, Xe, qe, it, lt;
      const F = B(V.node_id, V.widget_idx);
      if (F) return F.getBoundingClientRect();
      const q = ((We = (Ae = (Fe = s.comfyApp) == null ? void 0 : Fe.graph) == null ? void 0 : Ae.getNodeById) == null ? void 0 : We.call(Ae, String(V.node_id))) ?? ((it = (qe = (Xe = s.comfyApp) == null ? void 0 : Xe.rootGraph) == null ? void 0 : qe.getNodeById) == null ? void 0 : it.call(qe, String(V.node_id)));
      if (!q || typeof V.widget_idx != "number" || !Array.isArray(q.widgets)) return null;
      const ve = q.widgets[V.widget_idx];
      if (!ve || typeof ((lt = s.comfyApp) == null ? void 0 : lt.canvasPosToClientPos) != "function") return G(q);
      const z = 10, re = s.comfyApp.canvasPosToClientPos([q.pos[0] + z, q.pos[1] + (ve.y ?? 0)]), ue = s.comfyApp.canvasPosToClientPos([q.pos[0] + q.size[0] - z, q.pos[1] + (ve.y ?? 0) + (ve.computedHeight ?? 24)]);
      return !re || !ue ? G(q) : new DOMRect(re[0], re[1], ue[0] - re[0], ue[1] - re[1]);
    }
    function me(V) {
      var q, ve, z, re, ue, Fe;
      const F = ((z = (ve = (q = s.comfyApp) == null ? void 0 : q.graph) == null ? void 0 : ve.getNodeById) == null ? void 0 : z.call(ve, String(V.node_id))) ?? ((Fe = (ue = (re = s.comfyApp) == null ? void 0 : re.rootGraph) == null ? void 0 : ue.getNodeById) == null ? void 0 : Fe.call(ue, String(V.node_id)));
      return G(F);
    }
    const ze = O(() => (h.value, I.value.inputs.map((V, F) => {
      const q = oe(N(V));
      return q ? {
        key: `input-${F}-${V.node_id}-${V.widget_idx ?? "na"}`,
        style: q,
        active: p.value === F
      } : null;
    }).filter((V) => !!V))), Ve = O(() => (h.value, I.value.outputs.map((V, F) => {
      const q = oe(me(V));
      return q ? {
        key: `output-${F}-${V.node_id}-${V.selector ?? "primary"}`,
        style: q,
        active: _.value === F
      } : null;
    }).filter((V) => !!V)));
    function W(V) {
      var We, Xe, qe, it, lt, dt, Et, Wt, Rt, pe;
      if (ce(V.target)) return null;
      const F = (We = s.comfyApp) == null ? void 0 : We.canvas;
      if (!F) return null;
      const q = (Xe = F.convertEventToCanvasOffset) == null ? void 0 : Xe.call(F, V);
      if (!q || q.length < 2) return null;
      const [ve, z] = q, re = F.graph || ((qe = s.comfyApp) == null ? void 0 : qe.graph) || ((it = s.comfyApp) == null ? void 0 : it.rootGraph), ue = ((lt = re == null ? void 0 : re.getNodeOnPos) == null ? void 0 : lt.call(re, ve, z, F.visible_nodes)) || ((dt = F.getNodeOnPos) == null ? void 0 : dt.call(F, ve, z)) || Y(V.target);
      if (!ue) return null;
      const Fe = (Et = ue.getWidgetOnPos) == null ? void 0 : Et.call(ue, ve, z, !0);
      if (Fe)
        return { kind: "input", node: ue, widget: Fe, canvasX: ve, canvasY: z };
      const Ae = ((Wt = ue.getOutputOnPos) == null ? void 0 : Wt.call(ue, [ve, z])) || ((pe = (Rt = ue.constructor) == null ? void 0 : Rt.nodeData) != null && pe.output_node ? { name: ue.title || ue.type || "output", type: "image" } : null);
      return Ae ? { kind: "output", node: ue, output: Ae, canvasX: ve, canvasY: z } : null;
    }
    function Q(V, F) {
      var Fe;
      const q = Array.isArray(V.widgets) ? V.widgets.indexOf(F) : -1, ve = I.value.inputs.findIndex(
        (Ae) => String(Ae.node_id) === String(V.id) && Ae.widget_idx === q
      );
      if (ve >= 0) {
        p.value = ve;
        return;
      }
      const z = typeof ((Fe = F == null ? void 0 : F.options) == null ? void 0 : Fe.property) == "string" ? F.options.property : void 0, re = (F == null ? void 0 : F.name) || z || "input", ue = {
        name: de(String(re), `input_${I.value.inputs.length + 1}`),
        display_name: String((F == null ? void 0 : F.name) || z || `Input ${I.value.inputs.length + 1}`),
        type: Le(F == null ? void 0 : F.type),
        node_id: String(V.id),
        widget_idx: q >= 0 ? q : void 0,
        field_key: z,
        required: !0,
        default: (F == null ? void 0 : F.value) ?? ""
      };
      A(ue.type) && (ue.min = X(F, "min"), ue.max = X(F, "max")), j(ue.type) && (ue.enum_values = K(F)), I.value.inputs.push(ue), p.value = I.value.inputs.length - 1, _.value = null;
    }
    function ge(V, F) {
      const q = Array.isArray(V.outputs) ? V.outputs.indexOf(F) : -1, ve = q >= 0 ? `slot:${q}` : "primary", z = I.value.outputs.findIndex(
        (ue) => String(ue.node_id) === String(V.id) && (ue.selector || "primary") === ve
      );
      if (z >= 0) {
        _.value = z;
        return;
      }
      const re = {
        name: de(String((F == null ? void 0 : F.name) || "output"), `output_${I.value.outputs.length + 1}`),
        display_name: String((F == null ? void 0 : F.name) || `Output ${I.value.outputs.length + 1}`),
        type: Le(F == null ? void 0 : F.type),
        node_id: String(V.id),
        selector: ve
      };
      I.value.outputs.push(re), _.value = I.value.outputs.length - 1, p.value = null;
    }
    function Ee(V) {
      var ve, z, re;
      if (!l.value) {
        w.value = null, x.value = null;
        return;
      }
      const F = W(V);
      if (!F) {
        w.value = null, x.value = null;
        return;
      }
      if (F.kind === "input") {
        const ue = Array.isArray(F.node.widgets) ? F.node.widgets.indexOf(F.widget) : -1, Fe = oe(((ve = B(F.node.id, ue)) == null ? void 0 : ve.getBoundingClientRect()) ?? N({
          node_id: String(F.node.id),
          widget_idx: ue >= 0 ? ue : void 0
        }));
        if (!Fe) {
          w.value = null, x.value = null;
          return;
        }
        w.value = {
          kind: "input",
          label: `${((z = F.widget) == null ? void 0 : z.name) || "widget"} · Node ${F.node.id}`
        }, x.value = { kind: "input", style: Fe };
        return;
      }
      const q = oe(G(F.node));
      if (!q) {
        w.value = null, x.value = null;
        return;
      }
      w.value = {
        kind: "output",
        label: `${((re = F.output) == null ? void 0 : re.name) || F.node.title || F.node.type || "output"} · Node ${F.node.id}`
      }, x.value = { kind: "output", style: q };
    }
    function Se(V) {
      var ve, z, re;
      if (!l.value || !v.value || V.button !== 0) return;
      const F = W(V);
      if (!F) return;
      const q = (ve = s.comfyApp) == null ? void 0 : ve.canvas;
      if (q) {
        if (F.kind === "input") {
          V.preventDefault(), V.stopImmediatePropagation(), V.stopPropagation(), Array.isArray(q.graph_mouse) && (q.graph_mouse[0] = F.canvasX, q.graph_mouse[1] = F.canvasY), (z = q.selectNode) == null || z.call(q, F.node, !1), Q(F.node, F.widget);
          return;
        }
        V.preventDefault(), V.stopImmediatePropagation(), V.stopPropagation(), Array.isArray(q.graph_mouse) && (q.graph_mouse[0] = F.canvasX, q.graph_mouse[1] = F.canvasY), (re = q.selectNode) == null || re.call(q, F.node, !1), ge(F.node, F.output);
      }
    }
    function Ie() {
      document.addEventListener("pointerdown", Se, !0), document.addEventListener("pointermove", Ee, !0);
    }
    function Ne() {
      document.removeEventListener("pointerdown", Se, !0), document.removeEventListener("pointermove", Ee, !0);
    }
    async function Ce() {
      if (r.value) {
        u.value = !0, m.value = null;
        try {
          f.value = await o(r.value), v.value = M(f.value.execution_contract);
        } catch (V) {
          m.value = V instanceof Error ? V.message : "Failed to load workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    async function Me() {
      if (!(!v.value || !r.value)) {
        c.value = !0, m.value = null;
        try {
          f.value = await a(r.value, v.value), v.value = M(f.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: r.value }
          })), Ge({ reopenPanel: !0 });
        } catch (V) {
          m.value = V instanceof Error ? V.message : "Failed to save workflow contract";
        } finally {
          c.value = !1;
        }
      }
    }
    function ke() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      }));
    }
    function Ge(V) {
      l.value = !1, w.value = null, x.value = null, V != null && V.reopenPanel && ke();
    }
    async function Ue(V) {
      var ve, z;
      const q = (z = (ve = V.detail) == null ? void 0 : ve.workflowName) == null ? void 0 : z.trim();
      q && (r.value = q, p.value = null, _.value = null, l.value = !0, await Ce());
    }
    function be(V) {
      V.key === "Escape" && l.value && Ge({ reopenPanel: !0 });
    }
    function J() {
      if (C != null) return;
      const V = () => {
        if (h.value += 1, !l.value) {
          C = null;
          return;
        }
        C = window.requestAnimationFrame(V);
      };
      C = window.requestAnimationFrame(V);
    }
    function Be() {
      C != null && (window.cancelAnimationFrame(C), C = null);
    }
    return St(l, (V) => {
      V ? (Ie(), J()) : (Ne(), Be());
    }), at(() => {
      window.addEventListener("comfygit:open-io-mapping", Ue), window.addEventListener("keydown", be);
    }), da(() => {
      Ne(), Be(), window.removeEventListener("comfygit:open-io-mapping", Ue), window.removeEventListener("keydown", be);
    }), (V, F) => l.value ? (n(), i("div", sL, [
      t("div", oL, [
        (n(!0), i(H, null, we(ze.value, (q) => (n(), i("div", {
          key: q.key,
          class: Pe(["io-highlight", "io-highlight-input", { active: q.active }]),
          style: Ft(q.style)
        }, null, 6))), 128)),
        (n(!0), i(H, null, we(Ve.value, (q) => (n(), i("div", {
          key: q.key,
          class: Pe(["io-highlight", "io-highlight-output", { active: q.active }]),
          style: Ft(q.style)
        }, null, 6))), 128)),
        x.value ? (n(), i("div", {
          key: 0,
          class: Pe(["io-highlight", x.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Ft(x.value.style)
        }, null, 6)) : y("", !0)
      ]),
      t("div", nL, [
        t("div", aL, [
          F[4] || (F[4] = t("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          t("div", lL, d(r.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          w.value ? (n(), i("div", iL, " Hovering " + d(w.value.kind) + ": " + d(w.value.label), 1)) : y("", !0)
        ]),
        t("div", rL, [
          $(Re, {
            size: "sm",
            variant: "secondary",
            onClick: F[0] || (F[0] = (q) => Ge({ reopenPanel: !0 }))
          }, {
            default: g(() => [...F[5] || (F[5] = [
              b(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("aside", uL, [
        t("div", cL, [
          u.value ? (n(), i("div", dL, " Loading workflow contract... ")) : m.value ? (n(), i("div", mL, d(m.value), 1)) : v.value ? (n(), i(H, { key: 2 }, [
            t("section", fL, [
              t("span", vL, d(P.value), 1),
              t("span", pL, d(I.value.inputs.length) + " input" + d(I.value.inputs.length === 1 ? "" : "s"), 1),
              t("span", gL, d(I.value.outputs.length) + " output" + d(I.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            t("section", hL, [
              t("div", yL, [
                $(Ls, { variant: "section" }, {
                  default: g(() => [...F[6] || (F[6] = [
                    b("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              I.value.inputs.length ? y("", !0) : (n(), i("div", wL, " No inputs configured. ")),
              (n(!0), i(H, null, we(I.value.inputs, (q, ve) => (n(), i("div", {
                key: `input-${ve}`,
                class: Pe(["item-card", { selected: p.value === ve }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (z) => fe(ve)
                }, [
                  t("div", null, [
                    t("div", kL, d(q.name || `Input ${ve + 1}`), 1),
                    t("div", bL, [
                      b(" Node " + d(q.node_id || "?"), 1),
                      q.widget_idx !== void 0 ? (n(), i(H, { key: 0 }, [
                        b(" · Widget " + d(q.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ]),
                    t("div", $L, [
                      t("span", null, d(q.type || "string"), 1),
                      t("span", null, d(q.required ? "required" : "optional"), 1),
                      q.default !== void 0 && q.default !== "" ? (n(), i("span", CL, "default " + d(ne(q.default)), 1)) : y("", !0)
                    ])
                  ]),
                  $(Re, {
                    size: "sm",
                    variant: "ghost",
                    onClick: ut((z) => ae(ve), ["stop"])
                  }, {
                    default: g(() => [...F[7] || (F[7] = [
                      b(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, _L),
                p.value === ve ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: F[1] || (F[1] = ut(() => {
                  }, ["stop"]))
                }, [
                  $(gt, { label: "Name" }, {
                    default: g(() => [
                      $(ft, {
                        modelValue: q.name,
                        "onUpdate:modelValue": (z) => q.name = z,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(gt, { label: "Display Name" }, {
                    default: g(() => [
                      $(ft, {
                        modelValue: q.display_name,
                        "onUpdate:modelValue": (z) => q.display_name = z,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(gt, { label: "Type" }, {
                    default: g(() => [
                      $(co, {
                        "model-value": q.type,
                        options: S,
                        "full-width": "",
                        "onUpdate:modelValue": (z) => q.type = z
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(gt, { label: "Required" }, {
                    default: g(() => [
                      $(co, {
                        "model-value": q.required ? "true" : "false",
                        options: U,
                        "full-width": "",
                        "onUpdate:modelValue": (z) => q.required = z === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(gt, {
                    class: Pe({ "item-grid-full": q.type === "string" || q.type === "enum" }),
                    label: "Default"
                  }, {
                    default: g(() => [
                      q.type === "string" ? (n(), R(qs, {
                        key: 0,
                        "model-value": te(q.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (z) => q.default = z
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (n(), R(ft, {
                        key: 1,
                        modelValue: q.default,
                        "onUpdate:modelValue": (z) => q.default = z,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  A(q.type) ? (n(), R(gt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: g(() => [
                      $(ft, {
                        "model-value": E(q.min),
                        "full-width": "",
                        "onUpdate:modelValue": (z) => q.min = L(z)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  A(q.type) ? (n(), R(gt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: g(() => [
                      $(ft, {
                        "model-value": E(q.max),
                        "full-width": "",
                        "onUpdate:modelValue": (z) => q.max = L(z)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  j(q.type) ? (n(), R(gt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: g(() => [
                      $(qs, {
                        "model-value": ie(q.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (z) => q.enum_values = le(z)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0)
                ])) : y("", !0)
              ], 2))), 128))
            ]),
            t("section", xL, [
              t("div", SL, [
                $(Ls, { variant: "section" }, {
                  default: g(() => [...F[8] || (F[8] = [
                    b("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              I.value.outputs.length ? y("", !0) : (n(), i("div", IL, " No outputs configured. ")),
              (n(!0), i(H, null, we(I.value.outputs, (q, ve) => (n(), i("div", {
                key: `output-${ve}`,
                class: Pe(["item-card", { selected: _.value === ve }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (z) => Oe(ve)
                }, [
                  t("div", null, [
                    t("div", TL, d(q.name || `Output ${ve + 1}`), 1),
                    t("div", PL, [
                      b(" Node " + d(q.node_id || "?"), 1),
                      q.selector ? (n(), i(H, { key: 0 }, [
                        b(" · " + d(q.selector), 1)
                      ], 64)) : y("", !0)
                    ]),
                    t("div", RL, [
                      t("span", null, d(q.type || "file"), 1)
                    ])
                  ]),
                  $(Re, {
                    size: "sm",
                    variant: "ghost",
                    onClick: ut((z) => ye(ve), ["stop"])
                  }, {
                    default: g(() => [...F[9] || (F[9] = [
                      b(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, EL),
                _.value === ve ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: F[2] || (F[2] = ut(() => {
                  }, ["stop"]))
                }, [
                  $(gt, { label: "Name" }, {
                    default: g(() => [
                      $(ft, {
                        modelValue: q.name,
                        "onUpdate:modelValue": (z) => q.name = z,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(gt, { label: "Display Name" }, {
                    default: g(() => [
                      $(ft, {
                        modelValue: q.display_name,
                        "onUpdate:modelValue": (z) => q.display_name = z,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  $(gt, { label: "Type" }, {
                    default: g(() => [
                      $(co, {
                        "model-value": q.type,
                        options: S,
                        "full-width": "",
                        "onUpdate:modelValue": (z) => q.type = z
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : y("", !0)
              ], 2))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        t("div", ML, [
          $(Re, {
            variant: "secondary",
            onClick: F[3] || (F[3] = (q) => Ge({ reopenPanel: !0 }))
          }, {
            default: g(() => [...F[10] || (F[10] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          $(Re, {
            variant: "primary",
            loading: c.value,
            onClick: Me
          }, {
            default: g(() => [...F[11] || (F[11] = [
              b(" Save Contract ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ])
    ])) : y("", !0);
  }
}), LL = /* @__PURE__ */ xe(DL, [["__scopeId", "data-v-f48c60c3"]]), NL = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', UL = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', OL = {
  comfy: NL,
  phosphor: UL
}, bl = "comfy", cu = "comfygit-theme";
let ao = null, du = bl;
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
  ao && ao.remove(), ao = document.createElement("style"), ao.id = "comfygit-theme-styles", ao.setAttribute("data-theme", e), ao.textContent = OL[e], document.head.appendChild(ao), document.body.setAttribute("data-comfygit-theme", e), du = e;
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
let Ps = null, rn = null, Qt = null, un = null, Ko = null, wi = null, qo = null, _i = null, Yo = null, ki = null;
const Lo = k(null);
let wn = "no_workspace", fu = !1;
async function Wn() {
  var e;
  if (!((e = Xt) != null && e.api)) return null;
  try {
    const s = await Xt.api.fetchApi("/v2/comfygit/status");
    s.ok && (Lo.value = await s.json());
  } catch {
  }
}
async function Ja() {
  var e;
  if ((e = Xt) != null && e.api)
    try {
      const s = await Xt.api.fetchApi("/v2/setup/status");
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
  if (!Lo.value) return !1;
  const e = Lo.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Lo.value.has_changes;
}
function Un(e) {
  Xo(), Ps = document.createElement("div"), Ps.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", Ps.appendChild(s), Ps.addEventListener("click", (a) => {
    a.target === Ps && Xo();
  });
  const o = (a) => {
    a.key === "Escape" && (Xo(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), rn = $n({
    render: () => zo(HR, {
      initialView: e,
      onClose: Xo,
      onStatusUpdate: async (a) => {
        Lo.value = a, cn(), await Ja(), Xa(), Qa();
      }
    })
  }), rn.mount(s), document.body.appendChild(Ps);
}
function Xo() {
  rn && (rn.unmount(), rn = null), Ps && (Ps.remove(), Ps = null);
}
function bi(e) {
  Jo(), Qt = document.createElement("div"), Qt.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Qt.style.position = "fixed", Qt.style.top = `${s.bottom + 8}px`, Qt.style.right = `${window.innerWidth - s.right}px`, Qt.style.zIndex = "10001";
  const o = (l) => {
    Qt && !Qt.contains(l.target) && l.target !== e && (Jo(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const a = (l) => {
    l.key === "Escape" && (Jo(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), un = $n({
    render: () => zo(lu, {
      status: Lo.value,
      onClose: Jo,
      onCommitted: (l) => {
        Jo(), GL(l.success, l.message), Wn().then(cn);
      }
    })
  }), un.mount(Qt), document.body.appendChild(Qt);
}
function Jo() {
  un && (un.unmount(), un = null), Qt && (Qt.remove(), Qt = null);
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
  Ko || (Ko = document.createElement("div"), Ko.className = "comfygit-download-queue-root", wi = $n({
    render: () => zo(VM)
  }), wi.mount(Ko), document.body.appendChild(Ko), console.log("[ComfyGit] Model download queue mounted"));
}
function HL() {
  qo || (qo = document.createElement("div"), qo.className = "comfygit-missing-resources-root", _i = $n({
    render: () => zo(tL)
  }), _i.mount(qo), document.body.appendChild(qo), console.log("[ComfyGit] Missing resources popup mounted"));
}
function KL() {
  Yo || (Yo = document.createElement("div"), Yo.className = "comfygit-io-mapping-root", ki = $n({
    render: () => zo(LL, {
      comfyApp: Xt
    })
  }), ki.mount(Yo), document.body.appendChild(Yo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let Ht = null;
function cn() {
  if (!Ht) return;
  const e = Ht.querySelector(".commit-indicator");
  e && (e.style.display = WL() ? "block" : "none");
}
function Xa() {
  if (!Ht) return;
  const e = wn !== "managed";
  Ht.disabled = e, Ht.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
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
Xt.registerExtension({
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
        Ht && !Ht.disabled && bi(Ht);
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
          Xt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          Xt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = Un, Ht = document.createElement("button"), Ht.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ht.innerHTML = 'Commit <span class="commit-indicator"></span>', Ht.title = "Quick Commit", Ht.onclick = () => bi(Ht), e.appendChild(s), e.appendChild(Ht), (r = (l = Xt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Xt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), jL(), HL(), KL(), window.addEventListener("comfygit:open-panel", ((u) => {
      var m;
      const c = (m = u.detail) == null ? void 0 : m.initialView;
      Un(c);
    })), window.addEventListener("comfygit:close-panel", (() => {
      Xo();
    }));
    const { loadPendingDownloads: o } = Vo();
    o(), await Promise.all([Wn(), Ja()]), cn(), Xa(), Qa(), setTimeout(Qa, 100), setInterval(async () => {
      await Promise.all([Wn(), Ja()]), cn(), Xa();
    }, 3e4);
    const a = Xt.api;
    if (a) {
      let u = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((p) => {
          (p.startsWith("workflow:") || p.startsWith("Comfy.OpenWorkflowsPaths:") || p.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(p);
        }), window.location.reload();
      }, c = function() {
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
        `, h.onmouseover = () => h.style.background = "var(--comfy-input-bg)", h.onmouseout = () => h.style.background = "var(--comfy-menu-bg)", h.onclick = () => u(), p.appendChild(h);
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
        const C = document.createElement("div");
        C.textContent = "Node installation failed", C.style.cssText = "font-weight: 600; color: #e53935;", x.appendChild(C);
        const S = document.createElement("div");
        S.textContent = "Dependency conflict detected", S.style.cssText = "font-size: 12px; opacity: 0.8;", x.appendChild(S), h.appendChild(x);
        const U = document.createElement("button");
        U.textContent = "View Logs", U.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, U.onmouseover = () => U.style.background = "#c62828", U.onmouseout = () => U.style.background = "#e53935", U.onclick = () => {
          h.remove(), Un("debug-env");
        }, h.appendChild(U);
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
        `, I.onmouseover = () => I.style.opacity = "1", I.onmouseout = () => I.style.opacity = "0.6", I.onclick = () => h.remove(), h.appendChild(I), document.body.appendChild(h), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
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
        const C = document.createElement("div");
        C.textContent = "To apply changes, please restart ComfyUI", C.style.cssText = "font-weight: 500; color: #fff;", x.appendChild(C);
        const S = document.createElement("div");
        S.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, S.style.cssText = "font-size: 12px; opacity: 0.7;", x.appendChild(S), h.appendChild(x);
        const U = document.createElement("button");
        U.textContent = "Apply Changes", U.style.cssText = `
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
        `, U.onmouseover = () => U.style.background = "rgba(255,255,255,0.1)", U.onmouseout = () => U.style.background = "transparent", U.onclick = async () => {
          U.disabled = !0, U.textContent = "Restarting...", U.style.opacity = "0.7", C.textContent = "Restarting...", S.textContent = "Applying changes, please wait...";
          try {
            const P = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Xt.refreshComboInNodes && (await Xt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), w.textContent = "✅", C.textContent = "Nodes Installed", C.style.color = "#4caf50", S.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, h.style.borderColor = "#4caf50", U.style.display = "none", setTimeout(() => {
                  h.remove();
                }, 3e3);
              } catch (M) {
                console.error("[ComfyGit] Failed to refresh nodes:", M), w.textContent = "✅", C.textContent = "Restart Complete", C.style.color = "#4caf50", S.textContent = "Refresh the page to load new nodes.", h.style.borderColor = "#4caf50", U.style.display = "none";
              }
            };
            a.addEventListener("reconnected", P, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (P) {
            console.error("[ComfyGit] Failed to restart:", P), C.textContent = "Restart Failed", C.style.color = "#e53935", S.textContent = "Could not restart server. Try again.", h.style.borderColor = "#e53935", U.textContent = "Try Again", U.disabled = !1, U.style.opacity = "1";
          }
        }, h.appendChild(U);
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
        `, I.onmouseover = () => I.style.opacity = "1", I.onmouseout = () => I.style.opacity = "0.6", I.onclick = () => h.remove(), h.appendChild(I), document.body.appendChild(h), console.log(`[ComfyGit] Restart required notification displayed (${p} packages installed)`);
      };
      a.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: _, workflow_name: h } = p.detail;
        console.log(`[ComfyGit] Workflow ${_}: ${h}`), await Wn(), cn();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      a.addEventListener("status", async (p) => {
        const _ = p.detail != null;
        _ && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), u()) : c()), v = _;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (p) => {
        const _ = FL(p.detail);
        _ && m(_);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const _ = p, { count: h = 1 } = _.detail || {};
        f(h);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
